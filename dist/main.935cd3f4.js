parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    epB2: [
      function (require, module, exports) {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(e);
        }
        function e() {
          "use strict";
          e = function () {
            return n;
          };
          var r,
            n = {},
            o = Object.prototype,
            a = o.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            c = "function" == typeof Symbol ? Symbol : {},
            u = c.iterator || "@@iterator",
            l = c.asyncIterator || "@@asyncIterator",
            s = c.toStringTag || "@@toStringTag";
          function h(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            h({}, "");
          } catch (r) {
            h = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var o = e && e.prototype instanceof b ? e : b,
              a = Object.create(o.prototype),
              c = new B(n || []);
            return i(a, "_invoke", { value: j(t, r, c) }), a;
          }
          function d(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          n.wrap = f;
          var p = "suspendedStart",
            v = "suspendedYield",
            y = "executing",
            m = "completed",
            g = {};
          function b() {}
          function w() {}
          function E() {}
          var x = {};
          h(x, u, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            L = _ && _(_(T([])));
          L && L !== o && a.call(L, u) && (x = L);
          var k = (E.prototype = b.prototype = Object.create(x));
          function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
              h(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function N(e, r) {
            function n(o, i, c, u) {
              var l = d(e[o], e, i);
              if ("throw" !== l.type) {
                var s = l.arg,
                  h = s.value;
                return h && "object" == t(h) && a.call(h, "__await")
                  ? r.resolve(h.__await).then(
                      function (t) {
                        n("next", t, c, u);
                      },
                      function (t) {
                        n("throw", t, c, u);
                      }
                    )
                  : r.resolve(h).then(
                      function (t) {
                        (s.value = t), c(s);
                      },
                      function (t) {
                        return n("throw", t, c, u);
                      }
                    );
              }
              u(l.arg);
            }
            var o;
            i(this, "_invoke", {
              value: function (t, e) {
                function a() {
                  return new r(function (r, o) {
                    n(t, e, r, o);
                  });
                }
                return (o = o ? o.then(a, a) : a());
              },
            });
          }
          function j(t, e, n) {
            var o = p;
            return function (a, i) {
              if (o === y) throw new Error("Generator is already running");
              if (o === m) {
                if ("throw" === a) throw i;
                return { value: r, done: !0 };
              }
              for (n.method = a, n.arg = i; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = C(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = m), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var l = d(t, e, n);
                if ("normal" === l.type) {
                  if (((o = n.done ? m : v), l.arg === g)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type && ((o = m), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          }
          function C(t, e) {
            var n = e.method,
              o = t.iterator[n];
            if (o === r)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  t.iterator.return &&
                  ((e.method = "return"), (e.arg = r), C(t, e), "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                g
              );
            var a = d(o, t.iterator, e.arg);
            if ("throw" === a.type) return (e.method = "throw"), (e.arg = a.arg), (e.delegate = null), g;
            var i = a.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                  (e.delegate = null),
                  g)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                g);
          }
          function I(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function O(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function B(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(I, this), this.reset(!0);
          }
          function T(e) {
            if (e || "" === e) {
              var n = e[u];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function t() {
                    for (; ++o < e.length; ) if (a.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                    return (t.value = r), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(t(e) + " is not iterable");
          }
          return (
            (w.prototype = E),
            i(k, "constructor", { value: E, configurable: !0 }),
            i(E, "constructor", { value: w, configurable: !0 }),
            (w.displayName = h(E, s, "GeneratorFunction")),
            (n.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (n.mark = function (t) {
              return (
                Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : ((t.__proto__ = E), h(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(k)),
                t
              );
            }),
            (n.awrap = function (t) {
              return { __await: t };
            }),
            S(N.prototype),
            h(N.prototype, l, function () {
              return this;
            }),
            (n.AsyncIterator = N),
            (n.async = function (t, e, r, o, a) {
              void 0 === a && (a = Promise);
              var i = new N(f(t, e, r, o), a);
              return n.isGeneratorFunction(e)
                ? i
                : i.next().then(function (t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            S(k),
            h(k, s, "Generator"),
            h(k, u, function () {
              return this;
            }),
            h(k, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (n.values = T),
            (B.prototype = {
              constructor: B,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function n(n, o) {
                  return (c.type = "throw"), (c.arg = t), (e.next = n), o && ((e.method = "next"), (e.arg = r)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    c = i.completion;
                  if ("root" === i.tryLoc) return n("end");
                  if (i.tryLoc <= this.prev) {
                    var u = a.call(i, "catchLoc"),
                      l = a.call(i, "finallyLoc");
                    if (u && l) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (u) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                      if (!l) throw new Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var o = n;
                    break;
                  }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  o ? ((this.method = "next"), (this.next = o.finallyLoc), g) : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      O(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = { iterator: T(t), resultName: e, nextLoc: n }),
                  "next" === this.method && (this.arg = r),
                  g
                );
              },
            }),
            n
          );
        }
        function r(t, e, r, n, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (l) {
            return void r(l);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function n(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (o, a) {
              var i = t.apply(e, n);
              function c(t) {
                r(i, o, a, c, u, "next", t);
              }
              function u(t) {
                r(i, o, a, c, u, "throw", t);
              }
              c(void 0);
            });
          };
        }
        var o = fetch("https://library-server-3i6d.onrender.com/api/books"),
          a = document.getElementsByClassName("list"),
          i = document.getElementById("delete_dialog"),
          c = i.querySelector("#no_delete_dialog");
        c.addEventListener("click", function () {
          return i.close();
        });
        var u = i.querySelector("#yes_delete_dialog");
        u.addEventListener("click", function () {
          return i.close("Yes");
        });
        var l = document.getElementById("create_update_dialog");
        l.querySelector("#yes_create_update_dialog").addEventListener("click", function () {
          return l.close("Yes");
        }),
          l.querySelector("#no_create_update_dialog").addEventListener("click", function () {
            return l.close();
          });
        var s = l.querySelector("#update_title_holder"),
          h = l.querySelector("#update_author_holder"),
          f = l.querySelector("#update_year_holder"),
          d = l.querySelector("#update_ISBN_holder"),
          p = document.getElementById("create_button");
        function v(t) {
          for (
            var r = t.length,
              o = function (r) {
                var o = document.createElement("div");
                o.classList.add("list_child_1"),
                  r % 2 == 0 && ((o.style.backgroundColor = "grey"), (o.style.color = "white"));
                var c = document.createElement("p");
                (c.style.width = "5%"), (c.textContent = "".concat(r + 1, ".")), o.appendChild(c);
                var u = document.createElement("p");
                (u.textContent = "".concat(t[r].title)), o.appendChild(u);
                var p = document.createElement("p");
                (p.textContent = "".concat(t[r].author)), o.appendChild(p);
                var v = document.createElement("p");
                (v.textContent = "".concat(t[r].year_published)), o.appendChild(v);
                var g = document.createElement("p");
                (g.textContent = "".concat(t[r].ISBN)), o.appendChild(g);
                var b = document.createElement("button");
                b.classList.add("update_btn"),
                  (b.textContent = "Update"),
                  o.appendChild(b),
                  b.addEventListener("click", function () {
                    l.showModal(),
                      (s.value = t[r].title),
                      (h.value = t[r].author),
                      (f.value = t[r].year_published),
                      (d.value = t[r].ISBN);
                    l.addEventListener("close", function e() {
                      if ("Yes" === l.returnValue) {
                        var n = {
                          id: t[r].id,
                          title: s.value,
                          author: h.value,
                          year_published: f.value,
                          ISBN: d.value,
                        };
                        m(n), l.removeEventListener("close", e);
                      }
                    });
                  });
                var w = document.createElement("button");
                w.classList.add("delete_btn"),
                  (w.textContent = "Delete"),
                  o.appendChild(w),
                  w.addEventListener("click", function () {
                    i.showModal();
                    var o = (function () {
                      var a = n(
                        e().mark(function n() {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ("Yes" !== i.returnValue) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (e.next = 3), y(t[r].id);
                                case 3:
                                  i.removeEventListener("close", o);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, n);
                        })
                      );
                      return function () {
                        return a.apply(this, arguments);
                      };
                    })();
                    i.addEventListener("close", o);
                  }),
                  a[0].appendChild(o);
              },
              c = 0;
            c < r;
            c++
          )
            o(c);
        }
        p.addEventListener("click", function () {
          l.showModal();
          l.addEventListener("close", function t() {
            if ("Yes" === l.returnValue) {
              var e = { title: s.value, author: h.value, year_published: f.value, ISBN: d.value };
              g(e), l.removeEventListener("close", t);
            }
          });
        }),
          o
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              return v(t);
            })
            .catch(function (t) {
              alert("Thanks for coming this far but database hosting is costly!!"), console.error(t);
            });
        var y = (function () {
            var t = n(
              e().mark(function t(r) {
                var n;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            fetch("https://library-server-3i6d.onrender.com/api/books?id=".concat(r), {
                              method: "DELETE",
                            })
                          );
                        case 3:
                          if ((n = t.sent).ok) {
                            t.next = 6;
                            break;
                          }
                          throw new Error("Error deleting the book");
                        case 6:
                          return (t.t0 = console), (t.next = 9), n.json();
                        case 9:
                          (t.t1 = t.sent), t.t0.log.call(t.t0, "Book deleted successfully", t.t1), (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13), (t.t2 = t.catch(0)), console.error(t.t2);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          m = (function () {
            var t = n(
              e().mark(function t(r) {
                var n, o, a, i, c, u, l;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = r.id),
                            (o = r.title),
                            (a = r.author),
                            (i = r.year_published),
                            (c = r.ISBN),
                            (u = { title: o, author: a, year_published: parseInt(i), ISBN: c }),
                            (t.prev = 2),
                            (t.next = 5),
                            fetch("https://library-server-3i6d.onrender.com/api/books?id=".concat(n), {
                              method: "PUT",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(u),
                            })
                          );
                        case 5:
                          if ((l = t.sent).ok) {
                            t.next = 8;
                            break;
                          }
                          throw new Error("Error updating the book");
                        case 8:
                          return (t.t0 = console), (t.next = 11), l.json();
                        case 11:
                          (t.t1 = t.sent), t.t0.log.call(t.t0, "Book updated successfully", t.t1), (t.next = 18);
                          break;
                        case 15:
                          (t.prev = 15), (t.t2 = t.catch(2)), console.error(t.t2);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 15]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          g = (function () {
            var t = n(
              e().mark(function t(r) {
                var n, o, a, i, c, u, l;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = r.title),
                            (o = r.author),
                            (a = r.year_published),
                            (i = r.ISBN),
                            (c = { title: n, author: o, year_published: parseInt(a), ISBN: i }),
                            (t.prev = 2),
                            (t.next = 5),
                            fetch("https://library-server-3i6d.onrender.com/api/books", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(c),
                            })
                          );
                        case 5:
                          return (u = t.sent), (t.next = 8), u.json();
                        case 8:
                          if (((l = t.sent), console.log("Book created successfully", l), u.ok)) {
                            t.next = 12;
                            break;
                          }
                          throw new Error("Error creating book", l);
                        case 12:
                          t.next = 17;
                          break;
                        case 14:
                          (t.prev = 14), (t.t0 = t.catch(2)), console.error(t.t0);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 14]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
      },
      {},
    ],
  },
  {},
  ["epB2"],
  null
);
//# sourceMappingURL=/main.935cd3f4.js.map
