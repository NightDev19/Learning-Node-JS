// search.js
import { EventEmitter } from "events";

class Search extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(20); // (13) best practice: avoid warnings
  }

  // Simple async operation that emits events
  search(term) {
    // (1) Basic event emission
    if (!term) {
      this.emit("SEARCH_ERROR", { message: "INVALID_TERM", term });
      return;
    }

    // (2) Emit started
    this.emit("SEARCH_STARTED", term);

    // (3) Simulate async work with setTimeout
    setTimeout(() => {
      if (term === "fail") {
        // (4) Error event (never emit raw 'error' unless handled)
        this.emit("SEARCH_ERROR", { message: "FAILED_TERM", term });
      } else {
        // (5) Success
        this.emit("SEARCH_SUCCESS", {
          term,
          count: Math.floor(Math.random() * 10),
        });
      }
    }, 300);
  }
}

export default Search;
