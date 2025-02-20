// js/app.js
/*
  SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
  This file is part of Network Engineering Pro.
*/

"use strict";

// Polyfill for 'global' in browser environment
if (typeof global === "undefined") {
  var global = typeof window !== "undefined" ? window : this;
}

// Create a universal way to reference the global context
(function (globalScope) {
  // Polyfill if 'console' is unavailable in the environment
  var console = globalScope.console || {
    log: () => {}, // no-op functions to prevent errors
    warn: () => {},
    error: () => {},
    info: () => {},
  };

  // Ensure 'self' exists in the correct context, falling back as needed
  var self =
    (typeof window !== "undefined" && window) || // Browser
    (typeof globalThis !== "undefined" && globalThis) || // Standard global object
    (typeof global !== "undefined" && global) || // Node.js
    globalScope; // Fallback to whatever this IIFE received

  // Example usage of self
  console.log(self);

  // Your module logic
  (self.webpackChunk_neteng_pro_nwpro_web =
    self.webpackChunk_neteng_pro_nwpro_web || []).push([
    [524],
    {
      451: () => {
        console.log("Module 451 loaded");
      },
    },
    (e) => {
      var n;
      n = 451;
      e((e.s = n));
    },
  ]);
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
        ? global
        : this
);
