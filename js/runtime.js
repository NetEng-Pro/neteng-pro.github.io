// js/runtime.js
/*
  SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
  This file is part of Network Engineering Pro.
*/

(() => {
  "use strict";
  var r,
    e = {},
    nCache = {};
  function o(r) {
    var tCache = nCache[r];
    if (void 0 !== tCache) return tCache.exports;
    var pCache = (nCache[r] = { exports: {} });
    return e[r](pCache, pCache.exports, o), pCache.exports;
  }
  (o.m = e), (r = []); // Ensure this is properly declared with an initializer

  // Example adjustment for loop
  o.O = (e, n, t, p) => {
    if (!n) {
      var a = 1 / 0;
      for (let l = 0; l < r.length; l++) {
        // Use 'let' to declare 'l' inside the loop
        // rest of your logic...
        for (
          var [nCache, tCache, pCache] = r[l], i = !0, s = 0;
          s < nCache.length;
          s++
        ) {
          (!1 & pCache || a >= pCache) &&
          Object.keys(o.O).every((r) => o.O[r](nCache[s]))
            ? nCache.splice(s--, 1)
            : ((i = !1), pCache < a && (a = pCache));
        }
        if (i) {
          r.splice(l--, 1);
          var f = tCache();
          void 0 !== f && (e = f);
        }
      }
      return e;
    }
    p = p || 0;
    let l; // Correctly declare 'l' before use
    for (l = r.length; l > 0 && r[l - 1][2] > p; l--) {
      r[l] = r[l - 1];
    }
    r[l] = [n, t, p];
  };

  (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r = { 121: 0 };
      o.O.j = (e) => 0 === r[e];
      var e = (e, n) => {
          var tCache,
            pCache,
            [a, i, s] = n,
            f = 0;
          if (a.some((e) => 0 !== r[e])) {
            for (tCache in i) o.o(i, tCache) && (o.m[tCache] = i[tCache]);
            if (s) var l = s(o);
          }
          for (e && e(n); f < a.length; f++)
            (pCache = a[f]),
              o.o(r, pCache) && r[pCache] && r[pCache][0](),
              (r[pCache] = 0);
          return o.O(l);
        },
        n = (self.webpackChunk_neteng_pro_nwpro_web =
          self.webpackChunk_neteng_pro_nwpro_web || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
