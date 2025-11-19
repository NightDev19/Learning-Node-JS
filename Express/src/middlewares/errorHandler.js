export function errorHandler(err, req, res, next) {
  console.error("Error Name:", err.name);
  console.error("Message:", err.message);
  console.error("Stack:", err.stack);

  res.status(500).json({
    error: true,
    message: err.message,
  });
}
