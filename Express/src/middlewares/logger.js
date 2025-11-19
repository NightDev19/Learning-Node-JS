export function requestLogger(req, res, next) {
  const start = Date.now();
  const originalStatusSend = res.status;

  let intendedStatusCode = 200; // default

  // capture whenever code is set
  res.status = function (code) {
    intendedStatusCode = code;
    return originalStatusSend.call(this, code);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${
        req.originalUrl
      } -> returned ${res.statusCode}(${duration}ms)`
    );
  });

  next();
}
