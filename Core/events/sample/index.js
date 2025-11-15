// app.js
import Search from "./search.js";
const search = new Search();

/* -------------------------------------------------------------
   (1) Basic .on usage
------------------------------------------------------------- */
search.on("SEARCH_STARTED", (term) => {
  console.log("[1] search started →", term);
});

/* -------------------------------------------------------------
   (2) One-time listener using .once
------------------------------------------------------------- */
search.once("SEARCH_SUCCESS", (result) => {
  console.log("[2] one-time success listener →", result);
});

/* -------------------------------------------------------------
   (3) Prepend listener (runs before other listeners)
------------------------------------------------------------- */
search.prependListener("SEARCH_STARTED", () => {
  console.log("[3] PREPENDED: starting search...");
});

/* -------------------------------------------------------------
   (4) Removing a listener
------------------------------------------------------------- */
function tempFailListener(err) {
  console.log("[4] temporary fail listener →", err);
}
search.on("SEARCH_ERROR", tempFailListener);
search.off("SEARCH_ERROR", tempFailListener); // removed immediately

/* -------------------------------------------------------------
   (5) Handling errors (IMPORTANT: do NOT emit "error" without listener)
------------------------------------------------------------- */
search.on("SEARCH_ERROR", (err) => {
  console.log("[5] main error handler →", err);
});

/* -------------------------------------------------------------
   (6) Once async handler using Promise
------------------------------------------------------------- */
function waitForOnce(emitter, event) {
  return new Promise((resolve) => emitter.once(event, resolve));
}

/* -------------------------------------------------------------
   (7) Listener counting + inspection
------------------------------------------------------------- */
console.log(
  "[7] SEARCH_STARTED listener count =",
  search.listenerCount("SEARCH_STARTED")
);
console.log("[7] listeners =", search.listeners("SEARCH_STARTED"));

/* -------------------------------------------------------------
   (8) Emit async helper for awaiting all listeners
------------------------------------------------------------- */
async function emitAsync(emitter, event, ...args) {
  const fns = emitter.rawListeners(event).slice();
  await Promise.all(fns.map((fn) => Promise.resolve().then(() => fn(...args))));
}

/* -------------------------------------------------------------
   (9) Event names introspection
------------------------------------------------------------- */
console.log("[9] event names =", search.eventNames());

/* -------------------------------------------------------------
   (10) Trigger searches
------------------------------------------------------------- */
search.search("hello");
search.search(); // INVALID_TERM
search.search("fail"); // FAIL
search.search("world");

/* -------------------------------------------------------------
   (11) Wait for a specific event using Promise
------------------------------------------------------------- */
waitForOnce(search, "SEARCH_SUCCESS").then((res) => {
  console.log("[11] Promise resolved on success →", res);
});

/* -------------------------------------------------------------
   (12) Remove all listeners (not used, but shown)
------------------------------------------------------------- */
// search.removeAllListeners('SEARCH_STARTED');

/* -------------------------------------------------------------
   (13) Best-practices summarized inside code comments
------------------------------------------------------------- */
console.log("[13] Running with best practices applied.");
