function kb(a, s) {
  for (var o = 0; o < s.length; o++) {
    const r = s[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const c in r)
        if (c !== "default" && !(c in a)) {
          const d = Object.getOwnPropertyDescriptor(r, c);
          d &&
            Object.defineProperty(
              a,
              c,
              d.get ? d : { enumerable: !0, get: () => r[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const m of d.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && r(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
function Cp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Nr = { exports: {} },
  oi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm;
function Kb() {
  if (Cm) return oi;
  Cm = 1;
  var a = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function o(r, c, d) {
    var m = null;
    if (
      (d !== void 0 && (m = "" + d),
      c.key !== void 0 && (m = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var g in c) g !== "key" && (d[g] = c[g]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: r, key: m, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (oi.Fragment = s), (oi.jsx = o), (oi.jsxs = o), oi;
}
var Nm;
function Zb() {
  return Nm || ((Nm = 1), (Nr.exports = Kb())), Nr.exports;
}
var v = Zb(),
  Rr = { exports: {} },
  ri = {},
  Mr = { exports: {} },
  _r = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm;
function Jb() {
  return (
    Rm ||
      ((Rm = 1),
      (function (a) {
        function s(N, V) {
          var H = N.length;
          N.push(V);
          e: for (; 0 < H; ) {
            var ie = (H - 1) >>> 1,
              ce = N[ie];
            if (0 < c(ce, V)) (N[ie] = V), (N[H] = ce), (H = ie);
            else break e;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function r(N) {
          if (N.length === 0) return null;
          var V = N[0],
            H = N.pop();
          if (H !== V) {
            N[0] = H;
            e: for (var ie = 0, ce = N.length, T = ce >>> 1; ie < T; ) {
              var B = 2 * (ie + 1) - 1,
                K = N[B],
                F = B + 1,
                ue = N[F];
              if (0 > c(K, H))
                F < ce && 0 > c(ue, K)
                  ? ((N[ie] = ue), (N[F] = H), (ie = F))
                  : ((N[ie] = K), (N[B] = H), (ie = B));
              else if (F < ce && 0 > c(ue, H))
                (N[ie] = ue), (N[F] = H), (ie = F);
              else break e;
            }
          }
          return V;
        }
        function c(N, V) {
          var H = N.sortIndex - V.sortIndex;
          return H !== 0 ? H : N.id - V.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            g = m.now();
          a.unstable_now = function () {
            return m.now() - g;
          };
        }
        var y = [],
          h = [],
          b = 1,
          x = null,
          A = 3,
          _ = !1,
          z = !1,
          C = !1,
          j = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function Z(N) {
          for (var V = o(h); V !== null; ) {
            if (V.callback === null) r(h);
            else if (V.startTime <= N)
              r(h), (V.sortIndex = V.expirationTime), s(y, V);
            else break;
            V = o(h);
          }
        }
        function $(N) {
          if (((C = !1), Z(N), !z))
            if (o(y) !== null) (z = !0), P || ((P = !0), ye());
            else {
              var V = o(h);
              V !== null && fe($, V.startTime - N);
            }
        }
        var P = !1,
          Y = -1,
          J = 5,
          oe = -1;
        function me() {
          return j ? !0 : !(a.unstable_now() - oe < J);
        }
        function ge() {
          if (((j = !1), P)) {
            var N = a.unstable_now();
            oe = N;
            var V = !0;
            try {
              e: {
                (z = !1), C && ((C = !1), k(Y), (Y = -1)), (_ = !0);
                var H = A;
                try {
                  t: {
                    for (
                      Z(N), x = o(y);
                      x !== null && !(x.expirationTime > N && me());

                    ) {
                      var ie = x.callback;
                      if (typeof ie == "function") {
                        (x.callback = null), (A = x.priorityLevel);
                        var ce = ie(x.expirationTime <= N);
                        if (((N = a.unstable_now()), typeof ce == "function")) {
                          (x.callback = ce), Z(N), (V = !0);
                          break t;
                        }
                        x === o(y) && r(y), Z(N);
                      } else r(y);
                      x = o(y);
                    }
                    if (x !== null) V = !0;
                    else {
                      var T = o(h);
                      T !== null && fe($, T.startTime - N), (V = !1);
                    }
                  }
                  break e;
                } finally {
                  (x = null), (A = H), (_ = !1);
                }
                V = void 0;
              }
            } finally {
              V ? ye() : (P = !1);
            }
          }
        }
        var ye;
        if (typeof Q == "function")
          ye = function () {
            Q(ge);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            W = we.port2;
          (we.port1.onmessage = ge),
            (ye = function () {
              W.postMessage(null);
            });
        } else
          ye = function () {
            X(ge, 0);
          };
        function fe(N, V) {
          Y = X(function () {
            N(a.unstable_now());
          }, V);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (a.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (J = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_next = function (N) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = A;
            }
            var H = A;
            A = V;
            try {
              return N();
            } finally {
              A = H;
            }
          }),
          (a.unstable_requestPaint = function () {
            j = !0;
          }),
          (a.unstable_runWithPriority = function (N, V) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var H = A;
            A = N;
            try {
              return V();
            } finally {
              A = H;
            }
          }),
          (a.unstable_scheduleCallback = function (N, V, H) {
            var ie = a.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? ie + H : ie))
                : (H = ie),
              N)
            ) {
              case 1:
                var ce = -1;
                break;
              case 2:
                ce = 250;
                break;
              case 5:
                ce = 1073741823;
                break;
              case 4:
                ce = 1e4;
                break;
              default:
                ce = 5e3;
            }
            return (
              (ce = H + ce),
              (N = {
                id: b++,
                callback: V,
                priorityLevel: N,
                startTime: H,
                expirationTime: ce,
                sortIndex: -1,
              }),
              H > ie
                ? ((N.sortIndex = H),
                  s(h, N),
                  o(y) === null &&
                    N === o(h) &&
                    (C ? (k(Y), (Y = -1)) : (C = !0), fe($, H - ie)))
                : ((N.sortIndex = ce),
                  s(y, N),
                  z || _ || ((z = !0), P || ((P = !0), ye()))),
              N
            );
          }),
          (a.unstable_shouldYield = me),
          (a.unstable_wrapCallback = function (N) {
            var V = A;
            return function () {
              var H = A;
              A = V;
              try {
                return N.apply(this, arguments);
              } finally {
                A = H;
              }
            };
          });
      })(_r)),
    _r
  );
}
var Mm;
function Fb() {
  return Mm || ((Mm = 1), (Mr.exports = Jb())), Mr.exports;
}
var Dr = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function $b() {
  if (_m) return re;
  _m = 1;
  var a = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    x = Symbol.for("react.activity"),
    A = Symbol.iterator;
  function _(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (A && T[A]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    j = {};
  function X(T, B, K) {
    (this.props = T),
      (this.context = B),
      (this.refs = j),
      (this.updater = K || z);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (T, B) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, B, "setState");
    }),
    (X.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function k() {}
  k.prototype = X.prototype;
  function Q(T, B, K) {
    (this.props = T),
      (this.context = B),
      (this.refs = j),
      (this.updater = K || z);
  }
  var Z = (Q.prototype = new k());
  (Z.constructor = Q), C(Z, X.prototype), (Z.isPureReactComponent = !0);
  var $ = Array.isArray;
  function P() {}
  var Y = { H: null, A: null, T: null, S: null },
    J = Object.prototype.hasOwnProperty;
  function oe(T, B, K) {
    var F = K.ref;
    return {
      $$typeof: a,
      type: T,
      key: B,
      ref: F !== void 0 ? F : null,
      props: K,
    };
  }
  function me(T, B) {
    return oe(T.type, B, T.props);
  }
  function ge(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function ye(T) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (K) {
        return B[K];
      })
    );
  }
  var we = /\/+/g;
  function W(T, B) {
    return typeof T == "object" && T !== null && T.key != null
      ? ye("" + T.key)
      : B.toString(36);
  }
  function fe(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(P, P)
            : ((T.status = "pending"),
              T.then(
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = B));
                },
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = B));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function N(T, B, K, F, ue) {
    var de = typeof T;
    (de === "undefined" || de === "boolean") && (T = null);
    var le = !1;
    if (T === null) le = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case s:
              le = !0;
              break;
            case b:
              return (le = T._init), N(le(T._payload), B, K, F, ue);
          }
      }
    if (le)
      return (
        (ue = ue(T)),
        (le = F === "" ? "." + W(T, 0) : F),
        $(ue)
          ? ((K = ""),
            le != null && (K = le.replace(we, "$&/") + "/"),
            N(ue, B, K, "", function (Ct) {
              return Ct;
            }))
          : ue != null &&
            (ge(ue) &&
              (ue = me(
                ue,
                K +
                  (ue.key == null || (T && T.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(we, "$&/") + "/") +
                  le
              )),
            B.push(ue)),
        1
      );
    le = 0;
    var Ge = F === "" ? "." : F + ":";
    if ($(T))
      for (var Me = 0; Me < T.length; Me++)
        (F = T[Me]), (de = Ge + W(F, Me)), (le += N(F, B, K, de, ue));
    else if (((Me = _(T)), typeof Me == "function"))
      for (T = Me.call(T), Me = 0; !(F = T.next()).done; )
        (F = F.value), (de = Ge + W(F, Me++)), (le += N(F, B, K, de, ue));
    else if (de === "object") {
      if (typeof T.then == "function") return N(fe(T), B, K, F, ue);
      throw (
        ((B = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return le;
  }
  function V(T, B, K) {
    if (T == null) return T;
    var F = [],
      ue = 0;
    return (
      N(T, F, "", "", function (de) {
        return B.call(K, de, ue++);
      }),
      F
    );
  }
  function H(T) {
    if (T._status === -1) {
      var B = T._result;
      (B = B()),
        B.then(
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = K));
          },
          function (K) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = K));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = B));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ie =
      typeof reportError == "function"
        ? reportError
        : function (T) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof T == "object" &&
                  T !== null &&
                  typeof T.message == "string"
                    ? String(T.message)
                    : String(T),
                error: T,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", T);
              return;
            }
            console.error(T);
          },
    ce = {
      map: V,
      forEach: function (T, B, K) {
        V(
          T,
          function () {
            B.apply(this, arguments);
          },
          K
        );
      },
      count: function (T) {
        var B = 0;
        return (
          V(T, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (T) {
        return (
          V(T, function (B) {
            return B;
          }) || []
        );
      },
      only: function (T) {
        if (!ge(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    };
  return (
    (re.Activity = x),
    (re.Children = ce),
    (re.Component = X),
    (re.Fragment = o),
    (re.Profiler = c),
    (re.PureComponent = Q),
    (re.StrictMode = r),
    (re.Suspense = y),
    (re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return Y.H.useMemoCache(T);
      },
    }),
    (re.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (re.cacheSignal = function () {
      return null;
    }),
    (re.cloneElement = function (T, B, K) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var F = C({}, T.props),
        ue = T.key;
      if (B != null)
        for (de in (B.key !== void 0 && (ue = "" + B.key), B))
          !J.call(B, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && B.ref === void 0) ||
            (F[de] = B[de]);
      var de = arguments.length - 2;
      if (de === 1) F.children = K;
      else if (1 < de) {
        for (var le = Array(de), Ge = 0; Ge < de; Ge++)
          le[Ge] = arguments[Ge + 2];
        F.children = le;
      }
      return oe(T.type, ue, F);
    }),
    (re.createContext = function (T) {
      return (
        (T = {
          $$typeof: m,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: d, _context: T }),
        T
      );
    }),
    (re.createElement = function (T, B, K) {
      var F,
        ue = {},
        de = null;
      if (B != null)
        for (F in (B.key !== void 0 && (de = "" + B.key), B))
          J.call(B, F) &&
            F !== "key" &&
            F !== "__self" &&
            F !== "__source" &&
            (ue[F] = B[F]);
      var le = arguments.length - 2;
      if (le === 1) ue.children = K;
      else if (1 < le) {
        for (var Ge = Array(le), Me = 0; Me < le; Me++)
          Ge[Me] = arguments[Me + 2];
        ue.children = Ge;
      }
      if (T && T.defaultProps)
        for (F in ((le = T.defaultProps), le))
          ue[F] === void 0 && (ue[F] = le[F]);
      return oe(T, de, ue);
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (T) {
      return { $$typeof: g, render: T };
    }),
    (re.isValidElement = ge),
    (re.lazy = function (T) {
      return { $$typeof: b, _payload: { _status: -1, _result: T }, _init: H };
    }),
    (re.memo = function (T, B) {
      return { $$typeof: h, type: T, compare: B === void 0 ? null : B };
    }),
    (re.startTransition = function (T) {
      var B = Y.T,
        K = {};
      Y.T = K;
      try {
        var F = T(),
          ue = Y.S;
        ue !== null && ue(K, F),
          typeof F == "object" &&
            F !== null &&
            typeof F.then == "function" &&
            F.then(P, ie);
      } catch (de) {
        ie(de);
      } finally {
        B !== null && K.types !== null && (B.types = K.types), (Y.T = B);
      }
    }),
    (re.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (re.use = function (T) {
      return Y.H.use(T);
    }),
    (re.useActionState = function (T, B, K) {
      return Y.H.useActionState(T, B, K);
    }),
    (re.useCallback = function (T, B) {
      return Y.H.useCallback(T, B);
    }),
    (re.useContext = function (T) {
      return Y.H.useContext(T);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (T, B) {
      return Y.H.useDeferredValue(T, B);
    }),
    (re.useEffect = function (T, B) {
      return Y.H.useEffect(T, B);
    }),
    (re.useEffectEvent = function (T) {
      return Y.H.useEffectEvent(T);
    }),
    (re.useId = function () {
      return Y.H.useId();
    }),
    (re.useImperativeHandle = function (T, B, K) {
      return Y.H.useImperativeHandle(T, B, K);
    }),
    (re.useInsertionEffect = function (T, B) {
      return Y.H.useInsertionEffect(T, B);
    }),
    (re.useLayoutEffect = function (T, B) {
      return Y.H.useLayoutEffect(T, B);
    }),
    (re.useMemo = function (T, B) {
      return Y.H.useMemo(T, B);
    }),
    (re.useOptimistic = function (T, B) {
      return Y.H.useOptimistic(T, B);
    }),
    (re.useReducer = function (T, B, K) {
      return Y.H.useReducer(T, B, K);
    }),
    (re.useRef = function (T) {
      return Y.H.useRef(T);
    }),
    (re.useState = function (T) {
      return Y.H.useState(T);
    }),
    (re.useSyncExternalStore = function (T, B, K) {
      return Y.H.useSyncExternalStore(T, B, K);
    }),
    (re.useTransition = function () {
      return Y.H.useTransition();
    }),
    (re.version = "19.2.0"),
    re
  );
}
var Dm;
function Ps() {
  return Dm || ((Dm = 1), (Dr.exports = $b())), Dr.exports;
}
var zr = { exports: {} },
  nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm;
function Pb() {
  if (zm) return nt;
  zm = 1;
  var a = Ps();
  function s(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(s(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(y, h, b) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: y,
      containerInfo: h,
      implementation: b,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(y, h) {
    if (y === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (nt.createPortal = function (y, h) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(s(299));
      return d(y, h, null, b);
    }),
    (nt.flushSync = function (y) {
      var h = m.T,
        b = r.p;
      try {
        if (((m.T = null), (r.p = 2), y)) return y();
      } finally {
        (m.T = h), (r.p = b), r.d.f();
      }
    }),
    (nt.preconnect = function (y, h) {
      typeof y == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        r.d.C(y, h));
    }),
    (nt.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (nt.preinit = function (y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var b = h.as,
          x = g(b, h.crossOrigin),
          A = typeof h.integrity == "string" ? h.integrity : void 0,
          _ = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        b === "style"
          ? r.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: _,
            })
          : b === "script" &&
            r.d.X(y, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: _,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (nt.preinitModule = function (y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var b = g(h.as, h.crossOrigin);
            r.d.M(y, {
              crossOrigin: b,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && r.d.M(y);
    }),
    (nt.preload = function (y, h) {
      if (
        typeof y == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var b = h.as,
          x = g(b, h.crossOrigin);
        r.d.L(y, b, {
          crossOrigin: x,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (nt.preloadModule = function (y, h) {
      if (typeof y == "string")
        if (h) {
          var b = g(h.as, h.crossOrigin);
          r.d.m(y, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (nt.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (nt.unstable_batchedUpdates = function (y, h) {
      return y(h);
    }),
    (nt.useFormState = function (y, h, b) {
      return m.H.useFormState(y, h, b);
    }),
    (nt.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (nt.version = "19.2.0"),
    nt
  );
}
var jm;
function Np() {
  if (jm) return zr.exports;
  jm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return a(), (zr.exports = Pb()), zr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um;
function Wb() {
  if (Um) return ri;
  Um = 1;
  var a = Fb(),
    s = Ps(),
    o = Np();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (d(e) !== e) throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (((l = i.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return y(i), e;
          if (u === l) return y(i), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) (n = i), (l = u);
      else {
        for (var f = !1, p = i.child; p; ) {
          if (p === n) {
            (f = !0), (n = i), (l = u);
            break;
          }
          if (p === l) {
            (f = !0), (l = i), (n = u);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = u.child; p; ) {
            if (p === n) {
              (f = !0), (n = u), (l = i);
              break;
            }
            if (p === l) {
              (f = !0), (l = u), (n = i);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== l) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var x = Object.assign,
    A = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    j = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    oe = Symbol.for("react.activity"),
    me = Symbol.for("react.memo_cache_sentinel"),
    ge = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ge && e[ge]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var we = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === we ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case X:
        return "Profiler";
      case j:
        return "StrictMode";
      case $:
        return "Suspense";
      case P:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case Q:
          return e.displayName || "Context";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Y:
          return (
            (t = e.displayName || null), t !== null ? t : W(e.type) || "Memo"
          );
        case J:
          (t = e._payload), (e = e._init);
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    N = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = { pending: !1, data: null, method: null, action: null },
    ie = [],
    ce = -1;
  function T(e) {
    return { current: e };
  }
  function B(e) {
    0 > ce || ((e.current = ie[ce]), (ie[ce] = null), ce--);
  }
  function K(e, t) {
    ce++, (ie[ce] = e.current), (e.current = t);
  }
  var F = T(null),
    ue = T(null),
    de = T(null),
    le = T(null);
  function Ge(e, t) {
    switch ((K(de, t), K(ue, e), K(F, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? $h(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = $h(t)), (e = Ph(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    B(F), K(F, e);
  }
  function Me() {
    B(F), B(ue), B(de);
  }
  function Ct(e) {
    e.memoizedState !== null && K(le, e);
    var t = F.current,
      n = Ph(t, e.type);
    t !== n && (K(ue, e), K(F, n));
  }
  function kt(e) {
    ue.current === e && (B(F), B(ue)),
      le.current === e && (B(le), (ai._currentValue = H));
  }
  var Kt, tl;
  function nl(e) {
    if (Kt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Kt = (t && t[1]) || ""),
          (tl =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kt +
      e +
      tl
    );
  }
  var cu = !1;
  function fu(e, t) {
    if (!e || cu) return "";
    cu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var G = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(G.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(G, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  D = U;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (G = e()) &&
                typeof G.catch == "function" &&
                G.catch(function () {});
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string") return [U.stack, D.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        f = u[0],
        p = u[1];
      if (f && p) {
        var E = f.split(`
`),
          M = p.split(`
`);
        for (
          i = l = 0;
          l < E.length && !E[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; i < M.length && !M[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (l === E.length || i === M.length)
          for (
            l = E.length - 1, i = M.length - 1;
            1 <= l && 0 <= i && E[l] !== M[i];

          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (E[l] !== M[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || E[l] !== M[i])) {
                  var L =
                    `
` + E[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", e.displayName)),
                    L
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      (cu = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? nl(n) : "";
  }
  function Ev(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return nl(e.type);
      case 16:
        return nl("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? nl("Suspense Fallback")
          : nl("Suspense");
      case 19:
        return nl("SuspenseList");
      case 0:
      case 15:
        return fu(e.type, !1);
      case 11:
        return fu(e.type.render, !1);
      case 1:
        return fu(e.type, !0);
      case 31:
        return nl("Activity");
      default:
        return "";
    }
  }
  function Oc(e) {
    try {
      var t = "",
        n = null;
      do (t += Ev(e, n)), (n = e), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var du = Object.prototype.hasOwnProperty,
    hu = a.unstable_scheduleCallback,
    mu = a.unstable_cancelCallback,
    Tv = a.unstable_shouldYield,
    wv = a.unstable_requestPaint,
    ht = a.unstable_now,
    Av = a.unstable_getCurrentPriorityLevel,
    Cc = a.unstable_ImmediatePriority,
    Nc = a.unstable_UserBlockingPriority,
    bi = a.unstable_NormalPriority,
    Ov = a.unstable_LowPriority,
    Rc = a.unstable_IdlePriority,
    Cv = a.log,
    Nv = a.unstable_setDisableYieldValue,
    ya = null,
    mt = null;
  function An(e) {
    if (
      (typeof Cv == "function" && Nv(e),
      mt && typeof mt.setStrictMode == "function")
    )
      try {
        mt.setStrictMode(ya, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : _v,
    Rv = Math.log,
    Mv = Math.LN2;
  function _v(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Rv(e) / Mv) | 0)) | 0;
  }
  var Si = 256,
    xi = 262144,
    Ei = 4194304;
  function ll(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ti(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return (
      p !== 0
        ? ((l = p & ~u),
          l !== 0
            ? (i = ll(l))
            : ((f &= p),
              f !== 0
                ? (i = ll(f))
                : n || ((n = p & ~e), n !== 0 && (i = ll(n)))))
        : ((p = l & ~u),
          p !== 0
            ? (i = ll(p))
            : f !== 0
            ? (i = ll(f))
            : n || ((n = l & ~e), n !== 0 && (i = ll(n)))),
      i === 0
        ? 0
        : t !== 0 &&
          t !== i &&
          (t & u) === 0 &&
          ((u = i & -i),
          (n = t & -t),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? t
        : i
    );
  }
  function va(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Dv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mc() {
    var e = Ei;
    return (Ei <<= 1), (Ei & 62914560) === 0 && (Ei = 4194304), e;
  }
  function pu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ga(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function zv(e, t, n, l, i, u) {
    var f = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var p = e.entanglements,
      E = e.expirationTimes,
      M = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var L = 31 - pt(n),
        G = 1 << L;
      (p[L] = 0), (E[L] = -1);
      var D = M[L];
      if (D !== null)
        for (M[L] = null, L = 0; L < D.length; L++) {
          var U = D[L];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~G;
    }
    l !== 0 && _c(e, l, 0),
      u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function _c(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - pt(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930));
  }
  function Dc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - pt(n),
        i = 1 << l;
      (i & t) | (e[l] & t) && (e[l] |= t), (n &= ~i);
    }
  }
  function zc(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : yu(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function yu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function jc() {
    var e = V.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Sm(e.type));
  }
  function Uc(e, t) {
    var n = V.p;
    try {
      return (V.p = e), t();
    } finally {
      V.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2),
    Pe = "__reactFiber$" + On,
    it = "__reactProps$" + On,
    Tl = "__reactContainer$" + On,
    gu = "__reactEvents$" + On,
    jv = "__reactListeners$" + On,
    Uv = "__reactHandles$" + On,
    Hc = "__reactResources$" + On,
    ba = "__reactMarker$" + On;
  function bu(e) {
    delete e[Pe], delete e[it], delete e[gu], delete e[jv], delete e[Uv];
  }
  function wl(e) {
    var t = e[Pe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Tl] || n[Pe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = am(e); e !== null; ) {
            if ((n = e[Pe])) return n;
            e = am(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Al(e) {
    if ((e = e[Pe] || e[Tl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Sa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ol(e) {
    var t = e[Hc];
    return (
      t ||
        (t = e[Hc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Fe(e) {
    e[ba] = !0;
  }
  var Lc = new Set(),
    Bc = {};
  function al(e, t) {
    Cl(e, t), Cl(e + "Capture", t);
  }
  function Cl(e, t) {
    for (Bc[e] = t, e = 0; e < t.length; e++) Lc.add(t[e]);
  }
  var Hv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    qc = {},
    Gc = {};
  function Lv(e) {
    return du.call(Gc, e)
      ? !0
      : du.call(qc, e)
      ? !1
      : Hv.test(e)
      ? (Gc[e] = !0)
      : ((qc[e] = !0), !1);
  }
  function wi(e, t, n) {
    if (Lv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ai(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function ln(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Yc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Bv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            (n = "" + f), u.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Su(e) {
    if (!e._valueTracker) {
      var t = Yc(e) ? "checked" : "value";
      e._valueTracker = Bv(e, t, "" + e[t]);
    }
  }
  function Xc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = Yc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Oi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var qv = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(qv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function xu(e, t, n, l, i, u, f, p) {
    (e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Nt(t))
          : e.value !== "" + Nt(t) && (e.value = "" + Nt(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? Eu(e, f, Nt(t))
        : n != null
        ? Eu(e, f, Nt(n))
        : l != null && e.removeAttribute("value"),
      i == null && u != null && (e.defaultChecked = !!u),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + Nt(p))
        : e.removeAttribute("name");
  }
  function Vc(e, t, n, l, i, u, f, p) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Su(e);
        return;
      }
      (n = n != null ? "" + Nt(n) : ""),
        (t = t != null ? "" + Nt(t) : n),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = p ? e.checked : !!l),
      (e.defaultChecked = !!l),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f),
      Su(e);
  }
  function Eu(e, t, n) {
    (t === "number" && Oi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Nl(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), l && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qc(e, t, n) {
    if (
      t != null &&
      ((t = "" + Nt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Nt(n) : "";
  }
  function kc(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (fe(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Nt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      Su(e);
  }
  function Rl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Kc(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || Gv.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function Zc(e, t, n) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var i in t)
        (l = t[i]), t.hasOwnProperty(i) && n[i] !== l && Kc(e, i, l);
    } else for (var u in t) t.hasOwnProperty(u) && Kc(e, u, t[u]);
  }
  function Tu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Xv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ci(e) {
    return Xv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function an() {}
  var wu = null;
  function Au(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ml = null,
    _l = null;
  function Jc(e) {
    var t = Al(e);
    if (t && (e = t.stateNode)) {
      var n = e[it] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (xu(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Rt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[it] || null;
                if (!i) throw Error(r(90));
                xu(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && Xc(l);
          }
          break e;
        case "textarea":
          Qc(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && Nl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ou = !1;
  function Fc(e, t, n) {
    if (Ou) return e(t, n);
    Ou = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Ou = !1),
        (Ml !== null || _l !== null) &&
          (ms(), Ml && ((t = Ml), (e = _l), (_l = Ml = null), Jc(t), e)))
      )
        for (t = 0; t < e.length; t++) Jc(e[t]);
    }
  }
  function xa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[it] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cu = !1;
  if (sn)
    try {
      var Ea = {};
      Object.defineProperty(Ea, "passive", {
        get: function () {
          Cu = !0;
        },
      }),
        window.addEventListener("test", Ea, Ea),
        window.removeEventListener("test", Ea, Ea);
    } catch {
      Cu = !1;
    }
  var Cn = null,
    Nu = null,
    Ni = null;
  function $c() {
    if (Ni) return Ni;
    var e,
      t = Nu,
      n = t.length,
      l,
      i = "value" in Cn ? Cn.value : Cn.textContent,
      u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === i[u - l]; l++);
    return (Ni = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ri(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mi() {
    return !0;
  }
  function Pc() {
    return !1;
  }
  function st(e) {
    function t(n, l, i, u, f) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(u) : u[p]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Mi
          : Pc),
        (this.isPropagationStopped = Pc),
        this
      );
    }
    return (
      x(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Mi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Mi));
        },
        persist: function () {},
        isPersistent: Mi,
      }),
      t
    );
  }
  var il = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _i = st(il),
    Ta = x({}, il, { view: 0, detail: 0 }),
    Vv = st(Ta),
    Ru,
    Mu,
    wa,
    Di = x({}, Ta, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Du,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wa &&
              (wa && e.type === "mousemove"
                ? ((Ru = e.screenX - wa.screenX), (Mu = e.screenY - wa.screenY))
                : (Mu = Ru = 0),
              (wa = e)),
            Ru);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mu;
      },
    }),
    Wc = st(Di),
    Qv = x({}, Di, { dataTransfer: 0 }),
    kv = st(Qv),
    Kv = x({}, Ta, { relatedTarget: 0 }),
    _u = st(Kv),
    Zv = x({}, il, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jv = st(Zv),
    Fv = x({}, il, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $v = st(Fv),
    Pv = x({}, il, { data: 0 }),
    Ic = st(Pv),
    Wv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Iv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    eg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function tg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = eg[e])
      ? !!t[e]
      : !1;
  }
  function Du() {
    return tg;
  }
  var ng = x({}, Ta, {
      key: function (e) {
        if (e.key) {
          var t = Wv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Iv[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Du,
      charCode: function (e) {
        return e.type === "keypress" ? Ri(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ri(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    lg = st(ng),
    ag = x({}, Di, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ef = st(ag),
    ig = x({}, Ta, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Du,
    }),
    sg = st(ig),
    ug = x({}, il, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    og = st(ug),
    rg = x({}, Di, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    cg = st(rg),
    fg = x({}, il, { newState: 0, oldState: 0 }),
    dg = st(fg),
    hg = [9, 13, 27, 32],
    zu = sn && "CompositionEvent" in window,
    Aa = null;
  sn && "documentMode" in document && (Aa = document.documentMode);
  var mg = sn && "TextEvent" in window && !Aa,
    tf = sn && (!zu || (Aa && 8 < Aa && 11 >= Aa)),
    nf = " ",
    lf = !1;
  function af(e, t) {
    switch (e) {
      case "keyup":
        return hg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Dl = !1;
  function pg(e, t) {
    switch (e) {
      case "compositionend":
        return sf(t);
      case "keypress":
        return t.which !== 32 ? null : ((lf = !0), nf);
      case "textInput":
        return (e = t.data), e === nf && lf ? null : e;
      default:
        return null;
    }
  }
  function yg(e, t) {
    if (Dl)
      return e === "compositionend" || (!zu && af(e, t))
        ? ((e = $c()), (Ni = Nu = Cn = null), (Dl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return tf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function uf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vg[e.type] : t === "textarea";
  }
  function of(e, t, n, l) {
    Ml ? (_l ? _l.push(l) : (_l = [l])) : (Ml = l),
      (t = xs(t, "onChange")),
      0 < t.length &&
        ((n = new _i("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var Oa = null,
    Ca = null;
  function gg(e) {
    Qh(e, 0);
  }
  function zi(e) {
    var t = Sa(e);
    if (Xc(t)) return e;
  }
  function rf(e, t) {
    if (e === "change") return t;
  }
  var cf = !1;
  if (sn) {
    var ju;
    if (sn) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var ff = document.createElement("div");
        ff.setAttribute("oninput", "return;"),
          (Uu = typeof ff.oninput == "function");
      }
      ju = Uu;
    } else ju = !1;
    cf = ju && (!document.documentMode || 9 < document.documentMode);
  }
  function df() {
    Oa && (Oa.detachEvent("onpropertychange", hf), (Ca = Oa = null));
  }
  function hf(e) {
    if (e.propertyName === "value" && zi(Ca)) {
      var t = [];
      of(t, Ca, e, Au(e)), Fc(gg, t);
    }
  }
  function bg(e, t, n) {
    e === "focusin"
      ? (df(), (Oa = t), (Ca = n), Oa.attachEvent("onpropertychange", hf))
      : e === "focusout" && df();
  }
  function Sg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zi(Ca);
  }
  function xg(e, t) {
    if (e === "click") return zi(t);
  }
  function Eg(e, t) {
    if (e === "input" || e === "change") return zi(t);
  }
  function Tg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var yt = typeof Object.is == "function" ? Object.is : Tg;
  function Na(e, t) {
    if (yt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!du.call(t, i) || !yt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function mf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pf(e, t) {
    var n = mf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = mf(n);
    }
  }
  function yf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? yf(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function vf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Oi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Oi(e.document);
    }
    return t;
  }
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var wg = sn && "documentMode" in document && 11 >= document.documentMode,
    zl = null,
    Lu = null,
    Ra = null,
    Bu = !1;
  function gf(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Bu ||
      zl == null ||
      zl !== Oi(l) ||
      ((l = zl),
      "selectionStart" in l && Hu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ra && Na(Ra, l)) ||
        ((Ra = l),
        (l = xs(Lu, "onSelect")),
        0 < l.length &&
          ((t = new _i("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = zl))));
  }
  function sl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var jl = {
      animationend: sl("Animation", "AnimationEnd"),
      animationiteration: sl("Animation", "AnimationIteration"),
      animationstart: sl("Animation", "AnimationStart"),
      transitionrun: sl("Transition", "TransitionRun"),
      transitionstart: sl("Transition", "TransitionStart"),
      transitioncancel: sl("Transition", "TransitionCancel"),
      transitionend: sl("Transition", "TransitionEnd"),
    },
    qu = {},
    bf = {};
  sn &&
    ((bf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jl.animationend.animation,
      delete jl.animationiteration.animation,
      delete jl.animationstart.animation),
    "TransitionEvent" in window || delete jl.transitionend.transition);
  function ul(e) {
    if (qu[e]) return qu[e];
    if (!jl[e]) return e;
    var t = jl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in bf) return (qu[e] = t[n]);
    return e;
  }
  var Sf = ul("animationend"),
    xf = ul("animationiteration"),
    Ef = ul("animationstart"),
    Ag = ul("transitionrun"),
    Og = ul("transitionstart"),
    Cg = ul("transitioncancel"),
    Tf = ul("transitionend"),
    wf = new Map(),
    Gu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gu.push("scrollEnd");
  function qt(e, t) {
    wf.set(e, t), al(t, [e]);
  }
  var ji =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Mt = [],
    Ul = 0,
    Yu = 0;
  function Ui() {
    for (var e = Ul, t = (Yu = Ul = 0); t < e; ) {
      var n = Mt[t];
      Mt[t++] = null;
      var l = Mt[t];
      Mt[t++] = null;
      var i = Mt[t];
      Mt[t++] = null;
      var u = Mt[t];
      if (((Mt[t++] = null), l !== null && i !== null)) {
        var f = l.pending;
        f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
          (l.pending = i);
      }
      u !== 0 && Af(n, i, u);
    }
  }
  function Hi(e, t, n, l) {
    (Mt[Ul++] = e),
      (Mt[Ul++] = t),
      (Mt[Ul++] = n),
      (Mt[Ul++] = l),
      (Yu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Xu(e, t, n, l) {
    return Hi(e, t, n, l), Li(e);
  }
  function ol(e, t) {
    return Hi(e, null, null, t), Li(e);
  }
  function Af(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      (u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - pt(n)),
          (e = u.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Li(e) {
    if (50 < Pa) throw ((Pa = 0), (Wo = null), Error(r(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Hl = {};
  function Ng(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function vt(e, t, n, l) {
    return new Ng(e, t, n, l);
  }
  function Vu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = vt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Of(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Bi(e, t, n, l, i, u) {
    var f = 0;
    if (((l = e), typeof e == "function")) Vu(e) && (f = 1);
    else if (typeof e == "string")
      f = zb(e, n, F.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case oe:
          return (e = vt(31, n, t, i)), (e.elementType = oe), (e.lanes = u), e;
        case C:
          return rl(n.children, i, u, t);
        case j:
          (f = 8), (i |= 24);
          break;
        case X:
          return (
            (e = vt(12, n, t, i | 2)), (e.elementType = X), (e.lanes = u), e
          );
        case $:
          return (e = vt(13, n, t, i)), (e.elementType = $), (e.lanes = u), e;
        case P:
          return (e = vt(19, n, t, i)), (e.elementType = P), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Q:
                f = 10;
                break e;
              case k:
                f = 9;
                break e;
              case Z:
                f = 11;
                break e;
              case Y:
                f = 14;
                break e;
              case J:
                (f = 16), (l = null);
                break e;
            }
          (f = 29),
            (n = Error(r(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = vt(f, n, t, i)), (t.elementType = e), (t.type = l), (t.lanes = u), t
    );
  }
  function rl(e, t, n, l) {
    return (e = vt(7, e, l, t)), (e.lanes = n), e;
  }
  function Qu(e, t, n) {
    return (e = vt(6, e, null, t)), (e.lanes = n), e;
  }
  function Cf(e) {
    var t = vt(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function ku(e, t, n) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Nf = new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Nf.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Oc(t) }), Nf.set(e, t), t);
    }
    return { value: e, source: t, stack: Oc(t) };
  }
  var Ll = [],
    Bl = 0,
    qi = null,
    Ma = 0,
    Dt = [],
    zt = 0,
    Nn = null,
    Zt = 1,
    Jt = "";
  function on(e, t) {
    (Ll[Bl++] = Ma), (Ll[Bl++] = qi), (qi = e), (Ma = t);
  }
  function Rf(e, t, n) {
    (Dt[zt++] = Zt), (Dt[zt++] = Jt), (Dt[zt++] = Nn), (Nn = e);
    var l = Zt;
    e = Jt;
    var i = 32 - pt(l) - 1;
    (l &= ~(1 << i)), (n += 1);
    var u = 32 - pt(t) + i;
    if (30 < u) {
      var f = i - (i % 5);
      (u = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (i -= f),
        (Zt = (1 << (32 - pt(t) + i)) | (n << i) | l),
        (Jt = u + e);
    } else (Zt = (1 << u) | (n << i) | l), (Jt = e);
  }
  function Ku(e) {
    e.return !== null && (on(e, 1), Rf(e, 1, 0));
  }
  function Zu(e) {
    for (; e === qi; )
      (qi = Ll[--Bl]), (Ll[Bl] = null), (Ma = Ll[--Bl]), (Ll[Bl] = null);
    for (; e === Nn; )
      (Nn = Dt[--zt]),
        (Dt[zt] = null),
        (Jt = Dt[--zt]),
        (Dt[zt] = null),
        (Zt = Dt[--zt]),
        (Dt[zt] = null);
  }
  function Mf(e, t) {
    (Dt[zt++] = Zt),
      (Dt[zt++] = Jt),
      (Dt[zt++] = Nn),
      (Zt = t.id),
      (Jt = t.overflow),
      (Nn = e);
  }
  var We = null,
    Ue = null,
    Te = !1,
    Rn = null,
    jt = !1,
    Ju = Error(r(519));
  function Mn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (_a(_t(t, e)), Ju);
  }
  function _f(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Pe] = e), (t[it] = l), n)) {
      case "dialog":
        Se("cancel", t), Se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ia.length; n++) Se(Ia[n], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Se("error", t), Se("load", t);
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        Se("invalid", t),
          Vc(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        Se("invalid", t), kc(t, l.value, l.defaultValue, l.children);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Jh(t.textContent, n)
        ? (l.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          l.onScroll != null && Se("scroll", t),
          l.onScrollEnd != null && Se("scrollend", t),
          l.onClick != null && (t.onclick = an),
          (t = !0))
        : (t = !1),
      t || Mn(e, !0);
  }
  function Df(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 31:
        case 13:
          jt = !1;
          return;
        case 27:
        case 3:
          jt = !0;
          return;
        default:
          We = We.return;
      }
  }
  function ql(e) {
    if (e !== We) return !1;
    if (!Te) return Df(e), (Te = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || hr(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ue && Mn(e),
      Df(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Ue = lm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Ue = lm(e);
    } else
      t === 27
        ? ((t = Ue), Qn(e.type) ? ((e = gr), (gr = null), (Ue = e)) : (Ue = t))
        : (Ue = We ? Ht(e.stateNode.nextSibling) : null);
    return !0;
  }
  function cl() {
    (Ue = We = null), (Te = !1);
  }
  function Fu() {
    var e = Rn;
    return (
      e !== null &&
        (ct === null ? (ct = e) : ct.push.apply(ct, e), (Rn = null)),
      e
    );
  }
  function _a(e) {
    Rn === null ? (Rn = [e]) : Rn.push(e);
  }
  var $u = T(null),
    fl = null,
    rn = null;
  function _n(e, t, n) {
    K($u, t._currentValue), (t._currentValue = n);
  }
  function cn(e) {
    (e._currentValue = $u.current), B($u);
  }
  function Pu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Wu(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var f = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var p = u;
          u = i;
          for (var E = 0; E < t.length; E++)
            if (p.context === t[E]) {
              (u.lanes |= n),
                (p = u.alternate),
                p !== null && (p.lanes |= n),
                Pu(u.return, n, e),
                l || (f = null);
              break e;
            }
          u = p.next;
        }
      } else if (i.tag === 18) {
        if (((f = i.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (u = f.alternate),
          u !== null && (u.lanes |= n),
          Pu(f, n, e),
          (f = null);
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((i = f.sibling), i !== null)) {
            (i.return = f.return), (f = i);
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Gl(e, t, n, l) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = i.type;
          yt(i.pendingProps.value, f.value) ||
            (e !== null ? e.push(p) : (e = [p]));
        }
      } else if (i === le.current) {
        if (((f = i.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(ai) : (e = [ai]));
      }
      i = i.return;
    }
    e !== null && Wu(t, e, n, l), (t.flags |= 262144);
  }
  function Gi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function dl(e) {
    (fl = e),
      (rn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ie(e) {
    return zf(fl, e);
  }
  function Yi(e, t) {
    return fl === null && dl(e), zf(e, t);
  }
  function zf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), rn === null)) {
      if (e === null) throw Error(r(308));
      (rn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else rn = rn.next = t;
    return n;
  }
  var Rg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Mg = a.unstable_scheduleCallback,
    _g = a.unstable_NormalPriority,
    Ve = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Iu() {
    return { controller: new Rg(), data: new Map(), refCount: 0 };
  }
  function Da(e) {
    e.refCount--,
      e.refCount === 0 &&
        Mg(_g, function () {
          e.controller.abort();
        });
  }
  var za = null,
    eo = 0,
    Yl = 0,
    Xl = null;
  function Dg(e, t) {
    if (za === null) {
      var n = (za = []);
      (eo = 0),
        (Yl = ar()),
        (Xl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return eo++, t.then(jf, jf), t;
  }
  function jf() {
    if (--eo === 0 && za !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var e = za;
      (za = null), (Yl = 0), (Xl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zg(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        }
      ),
      l
    );
  }
  var Uf = N.S;
  N.S = function (e, t) {
    (gh = ht()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Dg(e, t),
      Uf !== null && Uf(e, t);
  };
  var hl = T(null);
  function to() {
    var e = hl.current;
    return e !== null ? e : je.pooledCache;
  }
  function Xi(e, t) {
    t === null ? K(hl, hl.current) : K(hl, t.pool);
  }
  function Hf() {
    var e = to();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Vl = Error(r(460)),
    no = Error(r(474)),
    Vi = Error(r(542)),
    Qi = { then: function () {} };
  function Lf(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Bf(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(an, an), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Gf(e), e);
      default:
        if (typeof t.status == "string") t.then(an, an);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "fulfilled"), (i.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "rejected"), (i.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Gf(e), e);
        }
        throw ((pl = t), Vl);
    }
  }
  function ml(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((pl = n), Vl)
        : n;
    }
  }
  var pl = null;
  function qf() {
    if (pl === null) throw Error(r(459));
    var e = pl;
    return (pl = null), e;
  }
  function Gf(e) {
    if (e === Vl || e === Vi) throw Error(r(483));
  }
  var Ql = null,
    ja = 0;
  function ki(e) {
    var t = ja;
    return (ja += 1), Ql === null && (Ql = []), Bf(Ql, e, t);
  }
  function Ua(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ki(e, t) {
    throw t.$$typeof === A
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Yf(e) {
    function t(O, w) {
      if (e) {
        var R = O.deletions;
        R === null ? ((O.deletions = [w]), (O.flags |= 16)) : R.push(w);
      }
    }
    function n(O, w) {
      if (!e) return null;
      for (; w !== null; ) t(O, w), (w = w.sibling);
      return null;
    }
    function l(O) {
      for (var w = new Map(); O !== null; )
        O.key !== null ? w.set(O.key, O) : w.set(O.index, O), (O = O.sibling);
      return w;
    }
    function i(O, w) {
      return (O = un(O, w)), (O.index = 0), (O.sibling = null), O;
    }
    function u(O, w, R) {
      return (
        (O.index = R),
        e
          ? ((R = O.alternate),
            R !== null
              ? ((R = R.index), R < w ? ((O.flags |= 67108866), w) : R)
              : ((O.flags |= 67108866), w))
          : ((O.flags |= 1048576), w)
      );
    }
    function f(O) {
      return e && O.alternate === null && (O.flags |= 67108866), O;
    }
    function p(O, w, R, q) {
      return w === null || w.tag !== 6
        ? ((w = Qu(R, O.mode, q)), (w.return = O), w)
        : ((w = i(w, R)), (w.return = O), w);
    }
    function E(O, w, R, q) {
      var ae = R.type;
      return ae === C
        ? L(O, w, R.props.children, q, R.key)
        : w !== null &&
          (w.elementType === ae ||
            (typeof ae == "object" &&
              ae !== null &&
              ae.$$typeof === J &&
              ml(ae) === w.type))
        ? ((w = i(w, R.props)), Ua(w, R), (w.return = O), w)
        : ((w = Bi(R.type, R.key, R.props, null, O.mode, q)),
          Ua(w, R),
          (w.return = O),
          w);
    }
    function M(O, w, R, q) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== R.containerInfo ||
        w.stateNode.implementation !== R.implementation
        ? ((w = ku(R, O.mode, q)), (w.return = O), w)
        : ((w = i(w, R.children || [])), (w.return = O), w);
    }
    function L(O, w, R, q, ae) {
      return w === null || w.tag !== 7
        ? ((w = rl(R, O.mode, q, ae)), (w.return = O), w)
        : ((w = i(w, R)), (w.return = O), w);
    }
    function G(O, w, R) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = Qu("" + w, O.mode, R)), (w.return = O), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return (
              (R = Bi(w.type, w.key, w.props, null, O.mode, R)),
              Ua(R, w),
              (R.return = O),
              R
            );
          case z:
            return (w = ku(w, O.mode, R)), (w.return = O), w;
          case J:
            return (w = ml(w)), G(O, w, R);
        }
        if (fe(w) || ye(w))
          return (w = rl(w, O.mode, R, null)), (w.return = O), w;
        if (typeof w.then == "function") return G(O, ki(w), R);
        if (w.$$typeof === Q) return G(O, Yi(O, w), R);
        Ki(O, w);
      }
      return null;
    }
    function D(O, w, R, q) {
      var ae = w !== null ? w.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ae !== null ? null : p(O, w, "" + R, q);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case _:
            return R.key === ae ? E(O, w, R, q) : null;
          case z:
            return R.key === ae ? M(O, w, R, q) : null;
          case J:
            return (R = ml(R)), D(O, w, R, q);
        }
        if (fe(R) || ye(R)) return ae !== null ? null : L(O, w, R, q, null);
        if (typeof R.then == "function") return D(O, w, ki(R), q);
        if (R.$$typeof === Q) return D(O, w, Yi(O, R), q);
        Ki(O, R);
      }
      return null;
    }
    function U(O, w, R, q, ae) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (O = O.get(R) || null), p(w, O, "" + q, ae);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case _:
            return (
              (O = O.get(q.key === null ? R : q.key) || null), E(w, O, q, ae)
            );
          case z:
            return (
              (O = O.get(q.key === null ? R : q.key) || null), M(w, O, q, ae)
            );
          case J:
            return (q = ml(q)), U(O, w, R, q, ae);
        }
        if (fe(q) || ye(q)) return (O = O.get(R) || null), L(w, O, q, ae, null);
        if (typeof q.then == "function") return U(O, w, R, ki(q), ae);
        if (q.$$typeof === Q) return U(O, w, R, Yi(w, q), ae);
        Ki(w, q);
      }
      return null;
    }
    function I(O, w, R, q) {
      for (
        var ae = null, Ae = null, ne = w, pe = (w = 0), Ee = null;
        ne !== null && pe < R.length;
        pe++
      ) {
        ne.index > pe ? ((Ee = ne), (ne = null)) : (Ee = ne.sibling);
        var Oe = D(O, ne, R[pe], q);
        if (Oe === null) {
          ne === null && (ne = Ee);
          break;
        }
        e && ne && Oe.alternate === null && t(O, ne),
          (w = u(Oe, w, pe)),
          Ae === null ? (ae = Oe) : (Ae.sibling = Oe),
          (Ae = Oe),
          (ne = Ee);
      }
      if (pe === R.length) return n(O, ne), Te && on(O, pe), ae;
      if (ne === null) {
        for (; pe < R.length; pe++)
          (ne = G(O, R[pe], q)),
            ne !== null &&
              ((w = u(ne, w, pe)),
              Ae === null ? (ae = ne) : (Ae.sibling = ne),
              (Ae = ne));
        return Te && on(O, pe), ae;
      }
      for (ne = l(ne); pe < R.length; pe++)
        (Ee = U(ne, O, pe, R[pe], q)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              ne.delete(Ee.key === null ? pe : Ee.key),
            (w = u(Ee, w, pe)),
            Ae === null ? (ae = Ee) : (Ae.sibling = Ee),
            (Ae = Ee));
      return (
        e &&
          ne.forEach(function (Fn) {
            return t(O, Fn);
          }),
        Te && on(O, pe),
        ae
      );
    }
    function se(O, w, R, q) {
      if (R == null) throw Error(r(151));
      for (
        var ae = null,
          Ae = null,
          ne = w,
          pe = (w = 0),
          Ee = null,
          Oe = R.next();
        ne !== null && !Oe.done;
        pe++, Oe = R.next()
      ) {
        ne.index > pe ? ((Ee = ne), (ne = null)) : (Ee = ne.sibling);
        var Fn = D(O, ne, Oe.value, q);
        if (Fn === null) {
          ne === null && (ne = Ee);
          break;
        }
        e && ne && Fn.alternate === null && t(O, ne),
          (w = u(Fn, w, pe)),
          Ae === null ? (ae = Fn) : (Ae.sibling = Fn),
          (Ae = Fn),
          (ne = Ee);
      }
      if (Oe.done) return n(O, ne), Te && on(O, pe), ae;
      if (ne === null) {
        for (; !Oe.done; pe++, Oe = R.next())
          (Oe = G(O, Oe.value, q)),
            Oe !== null &&
              ((w = u(Oe, w, pe)),
              Ae === null ? (ae = Oe) : (Ae.sibling = Oe),
              (Ae = Oe));
        return Te && on(O, pe), ae;
      }
      for (ne = l(ne); !Oe.done; pe++, Oe = R.next())
        (Oe = U(ne, O, pe, Oe.value, q)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              ne.delete(Oe.key === null ? pe : Oe.key),
            (w = u(Oe, w, pe)),
            Ae === null ? (ae = Oe) : (Ae.sibling = Oe),
            (Ae = Oe));
      return (
        e &&
          ne.forEach(function (Qb) {
            return t(O, Qb);
          }),
        Te && on(O, pe),
        ae
      );
    }
    function ze(O, w, R, q) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === C &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case _:
            e: {
              for (var ae = R.key; w !== null; ) {
                if (w.key === ae) {
                  if (((ae = R.type), ae === C)) {
                    if (w.tag === 7) {
                      n(O, w.sibling),
                        (q = i(w, R.props.children)),
                        (q.return = O),
                        (O = q);
                      break e;
                    }
                  } else if (
                    w.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === J &&
                      ml(ae) === w.type)
                  ) {
                    n(O, w.sibling),
                      (q = i(w, R.props)),
                      Ua(q, R),
                      (q.return = O),
                      (O = q);
                    break e;
                  }
                  n(O, w);
                  break;
                } else t(O, w);
                w = w.sibling;
              }
              R.type === C
                ? ((q = rl(R.props.children, O.mode, q, R.key)),
                  (q.return = O),
                  (O = q))
                : ((q = Bi(R.type, R.key, R.props, null, O.mode, q)),
                  Ua(q, R),
                  (q.return = O),
                  (O = q));
            }
            return f(O);
          case z:
            e: {
              for (ae = R.key; w !== null; ) {
                if (w.key === ae)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === R.containerInfo &&
                    w.stateNode.implementation === R.implementation
                  ) {
                    n(O, w.sibling),
                      (q = i(w, R.children || [])),
                      (q.return = O),
                      (O = q);
                    break e;
                  } else {
                    n(O, w);
                    break;
                  }
                else t(O, w);
                w = w.sibling;
              }
              (q = ku(R, O.mode, q)), (q.return = O), (O = q);
            }
            return f(O);
          case J:
            return (R = ml(R)), ze(O, w, R, q);
        }
        if (fe(R)) return I(O, w, R, q);
        if (ye(R)) {
          if (((ae = ye(R)), typeof ae != "function")) throw Error(r(150));
          return (R = ae.call(R)), se(O, w, R, q);
        }
        if (typeof R.then == "function") return ze(O, w, ki(R), q);
        if (R.$$typeof === Q) return ze(O, w, Yi(O, R), q);
        Ki(O, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          w !== null && w.tag === 6
            ? (n(O, w.sibling), (q = i(w, R)), (q.return = O), (O = q))
            : (n(O, w), (q = Qu(R, O.mode, q)), (q.return = O), (O = q)),
          f(O))
        : n(O, w);
    }
    return function (O, w, R, q) {
      try {
        ja = 0;
        var ae = ze(O, w, R, q);
        return (Ql = null), ae;
      } catch (ne) {
        if (ne === Vl || ne === Vi) throw ne;
        var Ae = vt(29, ne, null, O.mode);
        return (Ae.lanes = q), (Ae.return = O), Ae;
      } finally {
      }
    };
  }
  var yl = Yf(!0),
    Xf = Yf(!1),
    Dn = !1;
  function lo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ao(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function zn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ce & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Li(e)),
        Af(e, null, n),
        t
      );
    }
    return Hi(e, l, t, n), Li(e);
  }
  function Ha(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), Dc(e, n);
    }
  }
  function io(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var i = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (i = u = f) : (u = u.next = f), (n = n.next);
        } while (n !== null);
        u === null ? (i = u = t) : (u = u.next = t);
      } else i = u = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var so = !1;
  function La() {
    if (so) {
      var e = Xl;
      if (e !== null) throw e;
    }
  }
  function Ba(e, t, n, l) {
    so = !1;
    var i = e.updateQueue;
    Dn = !1;
    var u = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var E = p,
        M = E.next;
      (E.next = null), f === null ? (u = M) : (f.next = M), (f = E);
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (p = L.lastBaseUpdate),
        p !== f &&
          (p === null ? (L.firstBaseUpdate = M) : (p.next = M),
          (L.lastBaseUpdate = E)));
    }
    if (u !== null) {
      var G = i.baseState;
      (f = 0), (L = M = E = null), (p = u);
      do {
        var D = p.lane & -536870913,
          U = D !== p.lane;
        if (U ? (xe & D) === D : (l & D) === D) {
          D !== 0 && D === Yl && (so = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var I = e,
              se = p;
            D = t;
            var ze = n;
            switch (se.tag) {
              case 1:
                if (((I = se.payload), typeof I == "function")) {
                  G = I.call(ze, G, D);
                  break e;
                }
                G = I;
                break e;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = se.payload),
                  (D = typeof I == "function" ? I.call(ze, G, D) : I),
                  D == null)
                )
                  break e;
                G = x({}, G, D);
                break e;
              case 2:
                Dn = !0;
            }
          }
          (D = p.callback),
            D !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = i.callbacks),
              U === null ? (i.callbacks = [D]) : U.push(D));
        } else
          (U = {
            lane: D,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            L === null ? ((M = L = U), (E = G)) : (L = L.next = U),
            (f |= D);
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break;
          (U = p),
            (p = U.next),
            (U.next = null),
            (i.lastBaseUpdate = U),
            (i.shared.pending = null);
        }
      } while (!0);
      L === null && (E = G),
        (i.baseState = E),
        (i.firstBaseUpdate = M),
        (i.lastBaseUpdate = L),
        u === null && (i.shared.lanes = 0),
        (qn |= f),
        (e.lanes = f),
        (e.memoizedState = G);
    }
  }
  function Vf(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function Qf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Vf(n[e], t);
  }
  var kl = T(null),
    Zi = T(0);
  function kf(e, t) {
    (e = bn), K(Zi, e), K(kl, t), (bn = e | t.baseLanes);
  }
  function uo() {
    K(Zi, bn), K(kl, kl.current);
  }
  function oo() {
    (bn = Zi.current), B(kl), B(Zi);
  }
  var gt = T(null),
    Ut = null;
  function Un(e) {
    var t = e.alternate;
    K(Ye, Ye.current & 1),
      K(gt, e),
      Ut === null &&
        (t === null || kl.current !== null || t.memoizedState !== null) &&
        (Ut = e);
  }
  function ro(e) {
    K(Ye, Ye.current), K(gt, e), Ut === null && (Ut = e);
  }
  function Kf(e) {
    e.tag === 22
      ? (K(Ye, Ye.current), K(gt, e), Ut === null && (Ut = e))
      : Hn();
  }
  function Hn() {
    K(Ye, Ye.current), K(gt, gt.current);
  }
  function bt(e) {
    B(gt), Ut === e && (Ut = null), B(Ye);
  }
  var Ye = T(0);
  function Ji(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || yr(n) || vr(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var fn = 0,
    he = null,
    _e = null,
    Qe = null,
    Fi = !1,
    Kl = !1,
    vl = !1,
    $i = 0,
    qa = 0,
    Zl = null,
    jg = 0;
  function Be() {
    throw Error(r(321));
  }
  function co(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!yt(e[n], t[n])) return !1;
    return !0;
  }
  function fo(e, t, n, l, i, u) {
    return (
      (fn = u),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? Rd : Co),
      (vl = !1),
      (u = n(l, i)),
      (vl = !1),
      Kl && (u = Jf(t, n, l, i)),
      Zf(e),
      u
    );
  }
  function Zf(e) {
    N.H = Xa;
    var t = _e !== null && _e.next !== null;
    if (((fn = 0), (Qe = _e = he = null), (Fi = !1), (qa = 0), (Zl = null), t))
      throw Error(r(300));
    e === null ||
      ke ||
      ((e = e.dependencies), e !== null && Gi(e) && (ke = !0));
  }
  function Jf(e, t, n, l) {
    he = e;
    var i = 0;
    do {
      if ((Kl && (Zl = null), (qa = 0), (Kl = !1), 25 <= i))
        throw Error(r(301));
      if (((i += 1), (Qe = _e = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (N.H = Md), (u = t(n, l));
    } while (Kl);
    return u;
  }
  function Ug() {
    var e = N.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ga(t) : t),
      (e = e.useState()[0]),
      (_e !== null ? _e.memoizedState : null) !== e && (he.flags |= 1024),
      t
    );
  }
  function ho() {
    var e = $i !== 0;
    return ($i = 0), e;
  }
  function mo(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function po(e) {
    if (Fi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Fi = !1;
    }
    (fn = 0), (Qe = _e = he = null), (Kl = !1), (qa = $i = 0), (Zl = null);
  }
  function lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qe === null ? (he.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
  }
  function Xe() {
    if (_e === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Qe === null ? he.memoizedState : Qe.next;
    if (t !== null) (Qe = t), (_e = e);
    else {
      if (e === null)
        throw he.alternate === null ? Error(r(467)) : Error(r(310));
      (_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Qe === null ? (he.memoizedState = Qe = e) : (Qe = Qe.next = e);
    }
    return Qe;
  }
  function Pi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ga(e) {
    var t = qa;
    return (
      (qa += 1),
      Zl === null && (Zl = []),
      (e = Bf(Zl, e, t)),
      (t = he),
      (Qe === null ? t.memoizedState : Qe.next) === null &&
        ((t = t.alternate),
        (N.H = t === null || t.memoizedState === null ? Rd : Co)),
      e
    );
  }
  function Wi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ga(e);
      if (e.$$typeof === Q) return Ie(e);
    }
    throw Error(r(438, String(e)));
  }
  function yo(e) {
    var t = null,
      n = he.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = he.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Pi()), (he.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = me;
    return t.index++, n;
  }
  function dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ii(e) {
    var t = Xe();
    return vo(t, _e, e);
  }
  function vo(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var f = i.next;
        (i.next = u.next), (u.next = f);
      }
      (t.baseQueue = i = u), (l.pending = null);
    }
    if (((u = e.baseState), i === null)) e.memoizedState = u;
    else {
      t = i.next;
      var p = (f = null),
        E = null,
        M = t,
        L = !1;
      do {
        var G = M.lane & -536870913;
        if (G !== M.lane ? (xe & G) === G : (fn & G) === G) {
          var D = M.revertLane;
          if (D === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              G === Yl && (L = !0);
          else if ((fn & D) === D) {
            (M = M.next), D === Yl && (L = !0);
            continue;
          } else
            (G = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              E === null ? ((p = E = G), (f = u)) : (E = E.next = G),
              (he.lanes |= D),
              (qn |= D);
          (G = M.action),
            vl && n(u, G),
            (u = M.hasEagerState ? M.eagerState : n(u, G));
        } else
          (D = {
            lane: G,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            E === null ? ((p = E = D), (f = u)) : (E = E.next = D),
            (he.lanes |= G),
            (qn |= G);
        M = M.next;
      } while (M !== null && M !== t);
      if (
        (E === null ? (f = u) : (E.next = p),
        !yt(u, e.memoizedState) && ((ke = !0), L && ((n = Xl), n !== null)))
      )
        throw n;
      (e.memoizedState = u),
        (e.baseState = f),
        (e.baseQueue = E),
        (l.lastRenderedState = u);
    }
    return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function go(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      i = n.pending,
      u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = (i = i.next);
      do (u = e(u, f.action)), (f = f.next);
      while (f !== i);
      yt(u, t.memoizedState) || (ke = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, l];
  }
  function Ff(e, t, n) {
    var l = he,
      i = Xe(),
      u = Te;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var f = !yt((_e || i).memoizedState, n);
    if (
      (f && ((i.memoizedState = n), (ke = !0)),
      (i = i.queue),
      xo(Wf.bind(null, l, i, e), [e]),
      i.getSnapshot !== t || f || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Jl(9, { destroy: void 0 }, Pf.bind(null, l, i, n, t), null),
        je === null)
      )
        throw Error(r(349));
      u || (fn & 127) !== 0 || $f(l, t, n);
    }
    return n;
  }
  function $f(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = he.updateQueue),
      t === null
        ? ((t = Pi()), (he.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Pf(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), If(t) && ed(e);
  }
  function Wf(e, t, n) {
    return n(function () {
      If(t) && ed(e);
    });
  }
  function If(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !yt(e, n);
    } catch {
      return !0;
    }
  }
  function ed(e) {
    var t = ol(e, 2);
    t !== null && ft(t, e, 2);
  }
  function bo(e) {
    var t = lt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), vl)) {
        An(!0);
        try {
          n();
        } finally {
          An(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function td(e, t, n, l) {
    return (e.baseState = n), vo(e, _e, typeof l == "function" ? l : dn);
  }
  function Hg(e, t, n, l, i) {
    if (ns(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f);
        },
      };
      N.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), nd(t, u))
          : ((u.next = n.next), (t.pending = n.next = u));
    }
  }
  function nd(e, t) {
    var n = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var u = N.T,
        f = {};
      N.T = f;
      try {
        var p = n(i, l),
          E = N.S;
        E !== null && E(f, p), ld(e, t, p);
      } catch (M) {
        So(e, t, M);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), (N.T = u);
      }
    } else
      try {
        (u = n(i, l)), ld(e, t, u);
      } catch (M) {
        So(e, t, M);
      }
  }
  function ld(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            ad(e, t, l);
          },
          function (l) {
            return So(e, t, l);
          }
        )
      : ad(e, t, n);
  }
  function ad(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      id(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), nd(e, n)));
  }
  function So(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), id(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function id(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function sd(e, t) {
    return t;
  }
  function ud(e, t) {
    if (Te) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var l = he;
          if (Te) {
            if (Ue) {
              t: {
                for (var i = Ue, u = jt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (((i = Ht(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                (u = i.data), (i = u === "F!" || u === "F" ? i : null);
              }
              if (i) {
                (Ue = Ht(i.nextSibling)), (l = i.data === "F!");
                break e;
              }
            }
            Mn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = lt()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sd,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Od.bind(null, he, l)),
      (l.dispatch = n),
      (l = bo(!1)),
      (u = Oo.bind(null, he, !1, l.queue)),
      (l = lt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (n = Hg.bind(null, he, i, u, n)),
      (i.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function od(e) {
    var t = Xe();
    return rd(t, _e, e);
  }
  function rd(e, t, n) {
    if (
      ((t = vo(e, t, sd)[0]),
      (e = Ii(dn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Ga(t);
      } catch (f) {
        throw f === Vl ? Vi : f;
      }
    else l = t;
    t = Xe();
    var i = t.queue,
      u = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((he.flags |= 2048),
        Jl(9, { destroy: void 0 }, Lg.bind(null, i, n), null)),
      [l, u, e]
    );
  }
  function Lg(e, t) {
    e.action = t;
  }
  function cd(e) {
    var t = Xe(),
      n = _e;
    if (n !== null) return rd(t, n, e);
    Xe(), (t = t.memoizedState), (n = Xe());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Jl(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = he.updateQueue),
      t === null && ((t = Pi()), (he.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function fd() {
    return Xe().memoizedState;
  }
  function es(e, t, n, l) {
    var i = lt();
    (he.flags |= e),
      (i.memoizedState = Jl(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      ));
  }
  function ts(e, t, n, l) {
    var i = Xe();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    _e !== null && l !== null && co(l, _e.memoizedState.deps)
      ? (i.memoizedState = Jl(t, u, n, l))
      : ((he.flags |= e), (i.memoizedState = Jl(1 | t, u, n, l)));
  }
  function dd(e, t) {
    es(8390656, 8, e, t);
  }
  function xo(e, t) {
    ts(2048, 8, e, t);
  }
  function Bg(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null) (t = Pi()), (he.updateQueue = t), (t.events = [e]);
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function hd(e) {
    var t = Xe().memoizedState;
    return (
      Bg({ ref: t, nextImpl: e }),
      function () {
        if ((Ce & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function md(e, t) {
    return ts(4, 2, e, t);
  }
  function pd(e, t) {
    return ts(4, 4, e, t);
  }
  function yd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function vd(e, t, n) {
    (n = n != null ? n.concat([e]) : null), ts(4, 4, yd.bind(null, t, e), n);
  }
  function Eo() {}
  function gd(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && co(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function bd(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && co(t, l[1])) return l[0];
    if (((l = e()), vl)) {
      An(!0);
      try {
        e();
      } finally {
        An(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function To(e, t, n) {
    return n === void 0 || ((fn & 1073741824) !== 0 && (xe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Sh()), (he.lanes |= e), (qn |= e), n);
  }
  function Sd(e, t, n, l) {
    return yt(n, t)
      ? n
      : kl.current !== null
      ? ((e = To(e, n, l)), yt(e, t) || (ke = !0), e)
      : (fn & 42) === 0 || ((fn & 1073741824) !== 0 && (xe & 261930) === 0)
      ? ((ke = !0), (e.memoizedState = n))
      : ((e = Sh()), (he.lanes |= e), (qn |= e), t);
  }
  function xd(e, t, n, l, i) {
    var u = V.p;
    V.p = u !== 0 && 8 > u ? u : 8;
    var f = N.T,
      p = {};
    (N.T = p), Oo(e, !1, t, n);
    try {
      var E = i(),
        M = N.S;
      if (
        (M !== null && M(p, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var L = zg(E, l);
        Ya(e, t, L, Et(e));
      } else Ya(e, t, l, Et(e));
    } catch (G) {
      Ya(e, t, { then: function () {}, status: "rejected", reason: G }, Et());
    } finally {
      (V.p = u),
        f !== null && p.types !== null && (f.types = p.types),
        (N.T = f);
    }
  }
  function qg() {}
  function wo(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var i = Ed(e).queue;
    xd(
      e,
      i,
      t,
      H,
      n === null
        ? qg
        : function () {
            return Td(e), n(l);
          }
    );
  }
  function Ed(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: H,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Td(e) {
    var t = Ed(e);
    t.next === null && (t = e.alternate.memoizedState),
      Ya(e, t.next.queue, {}, Et());
  }
  function Ao() {
    return Ie(ai);
  }
  function wd() {
    return Xe().memoizedState;
  }
  function Ad() {
    return Xe().memoizedState;
  }
  function Gg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Et();
          e = zn(n);
          var l = jn(t, e, n);
          l !== null && (ft(l, t, n), Ha(l, t, n)),
            (t = { cache: Iu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Yg(e, t, n) {
    var l = Et();
    (n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ns(e)
        ? Cd(t, n)
        : ((n = Xu(e, t, n, l)), n !== null && (ft(n, e, l), Nd(n, t, l)));
  }
  function Od(e, t, n) {
    var l = Et();
    Ya(e, t, n, l);
  }
  function Ya(e, t, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ns(e)) Cd(t, i);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var f = t.lastRenderedState,
            p = u(f, n);
          if (((i.hasEagerState = !0), (i.eagerState = p), yt(p, f)))
            return Hi(e, t, i, 0), je === null && Ui(), !1;
        } catch {
        } finally {
        }
      if (((n = Xu(e, t, i, l)), n !== null))
        return ft(n, e, l), Nd(n, t, l), !0;
    }
    return !1;
  }
  function Oo(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: ar(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ns(e))
    ) {
      if (t) throw Error(r(479));
    } else (t = Xu(e, n, l, 2)), t !== null && ft(t, e, 2);
  }
  function ns(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function Cd(e, t) {
    Kl = Fi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Nd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), Dc(e, n);
    }
  }
  var Xa = {
    readContext: Ie,
    use: Wi,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be,
  };
  Xa.useEffectEvent = Be;
  var Rd = {
      readContext: Ie,
      use: Wi,
      useCallback: function (e, t) {
        return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ie,
      useEffect: dd,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          es(4194308, 4, yd.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return es(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        es(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var l = e();
        if (vl) {
          An(!0);
          try {
            e();
          } finally {
            An(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = lt();
        if (n !== void 0) {
          var i = n(t);
          if (vl) {
            An(!0);
            try {
              n(t);
            } finally {
              An(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = Yg.bind(null, he, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = lt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = bo(e);
        var t = e.queue,
          n = Od.bind(null, he, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var n = lt();
        return To(n, e, t);
      },
      useTransition: function () {
        var e = bo(!1);
        return (
          (e = xd.bind(null, he, e.queue, !0, !1)),
          (lt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = he,
          i = lt();
        if (Te) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(r(349));
          (xe & 127) !== 0 || $f(l, t, n);
        }
        i.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (i.queue = u),
          dd(Wf.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          Jl(9, { destroy: void 0 }, Pf.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = lt(),
          t = je.identifierPrefix;
        if (Te) {
          var n = Jt,
            l = Zt;
          (n = (l & ~(1 << (32 - pt(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = $i++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_");
        } else (n = jg++), (t = "_" + t + "r_" + n.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ao,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (e) {
        var t = lt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Oo.bind(null, he, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: yo,
      useCacheRefresh: function () {
        return (lt().memoizedState = Gg.bind(null, he));
      },
      useEffectEvent: function (e) {
        var t = lt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ce & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Co = {
      readContext: Ie,
      use: Wi,
      useCallback: gd,
      useContext: Ie,
      useEffect: xo,
      useImperativeHandle: vd,
      useInsertionEffect: md,
      useLayoutEffect: pd,
      useMemo: bd,
      useReducer: Ii,
      useRef: fd,
      useState: function () {
        return Ii(dn);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var n = Xe();
        return Sd(n, _e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ii(dn)[0],
          t = Xe().memoizedState;
        return [typeof e == "boolean" ? e : Ga(e), t];
      },
      useSyncExternalStore: Ff,
      useId: wd,
      useHostTransitionStatus: Ao,
      useFormState: od,
      useActionState: od,
      useOptimistic: function (e, t) {
        var n = Xe();
        return td(n, _e, e, t);
      },
      useMemoCache: yo,
      useCacheRefresh: Ad,
    };
  Co.useEffectEvent = hd;
  var Md = {
    readContext: Ie,
    use: Wi,
    useCallback: gd,
    useContext: Ie,
    useEffect: xo,
    useImperativeHandle: vd,
    useInsertionEffect: md,
    useLayoutEffect: pd,
    useMemo: bd,
    useReducer: go,
    useRef: fd,
    useState: function () {
      return go(dn);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e, t) {
      var n = Xe();
      return _e === null ? To(n, e, t) : Sd(n, _e.memoizedState, e, t);
    },
    useTransition: function () {
      var e = go(dn)[0],
        t = Xe().memoizedState;
      return [typeof e == "boolean" ? e : Ga(e), t];
    },
    useSyncExternalStore: Ff,
    useId: wd,
    useHostTransitionStatus: Ao,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function (e, t) {
      var n = Xe();
      return _e !== null
        ? td(n, _e, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: yo,
    useCacheRefresh: Ad,
  };
  Md.useEffectEvent = hd;
  function No(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : x({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ro = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Et(),
        i = zn(l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = jn(e, i, l)),
        t !== null && (ft(t, e, l), Ha(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Et(),
        i = zn(l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = jn(e, i, l)),
        t !== null && (ft(t, e, l), Ha(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Et(),
        l = zn(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = jn(e, l, n)),
        t !== null && (ft(t, e, n), Ha(t, e, n));
    },
  };
  function _d(e, t, n, l, i, u, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, u, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Na(n, l) || !Na(i, u)
        : !0
    );
  }
  function Dd(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
  }
  function gl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = x({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function zd(e) {
    ji(e);
  }
  function jd(e) {
    console.error(e);
  }
  function Ud(e) {
    ji(e);
  }
  function ls(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Hd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Mo(e, t, n) {
    return (
      (n = zn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ls(e, t);
      }),
      n
    );
  }
  function Ld(e) {
    return (e = zn(e)), (e.tag = 3), e;
  }
  function Bd(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      (e.payload = function () {
        return i(u);
      }),
        (e.callback = function () {
          Hd(t, n, l);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        Hd(t, n, l),
          typeof i != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
        var p = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function Xg(e, t, n, l, i) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Gl(t, n, i, !0),
        (n = gt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ut === null ? ps() : n.alternate === null && qe === 0 && (qe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              l === Qi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  tr(e, l, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Qi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  tr(e, l, i)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return tr(e, l, i), ps(), !1;
    }
    if (Te)
      return (
        (t = gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== Ju && ((e = Error(r(422), { cause: l })), _a(_t(e, n))))
          : (l !== Ju && ((t = Error(r(423), { cause: l })), _a(_t(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = _t(l, n)),
            (i = Mo(e.stateNode, l, i)),
            io(e, i),
            qe !== 4 && (qe = 2)),
        !1
      );
    var u = Error(r(520), { cause: l });
    if (
      ((u = _t(u, n)),
      $a === null ? ($a = [u]) : $a.push(u),
      qe !== 4 && (qe = 2),
      t === null)
    )
      return !0;
    (l = _t(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Mo(n.stateNode, l, e)),
            io(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = Ld(i)),
              Bd(i, e, n, l),
              io(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var _o = Error(r(461)),
    ke = !1;
  function et(e, t, n, l) {
    t.child = e === null ? Xf(t, null, n, l) : yl(t, e.child, n, l);
  }
  function qd(e, t, n, l, i) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var p in l) p !== "ref" && (f[p] = l[p]);
    } else f = l;
    return (
      dl(t),
      (l = fo(e, t, n, f, u, i)),
      (p = ho()),
      e !== null && !ke
        ? (mo(e, t, i), hn(e, t, i))
        : (Te && p && Ku(t), (t.flags |= 1), et(e, t, l, i), t.child)
    );
  }
  function Gd(e, t, n, l, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !Vu(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = u), Yd(e, t, u, l, i))
        : ((e = Bi(n.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !qo(e, i))) {
      var f = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Na), n(f, l) && e.ref === t.ref)
      )
        return hn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = un(u, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Yd(e, t, n, l, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Na(u, l) && e.ref === t.ref)
        if (((ke = !1), (t.pendingProps = l = u), qo(e, i)))
          (e.flags & 131072) !== 0 && (ke = !0);
        else return (t.lanes = e.lanes), hn(e, t, i);
    }
    return Do(e, t, n, l, i);
  }
  function Xd(e, t, n, l) {
    var i = l.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, i = 0; l !== null; )
            (i = i | l.lanes | l.childLanes), (l = l.sibling);
          l = i & ~u;
        } else (l = 0), (t.child = null);
        return Vd(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Xi(t, u !== null ? u.cachePool : null),
          u !== null ? kf(t, u) : uo(),
          Kf(t);
      else
        return (
          (l = t.lanes = 536870912),
          Vd(e, t, u !== null ? u.baseLanes | n : n, n, l)
        );
    } else
      u !== null
        ? (Xi(t, u.cachePool), kf(t, u), Hn(), (t.memoizedState = null))
        : (e !== null && Xi(t, null), uo(), Hn());
    return et(e, t, i, n), t.child;
  }
  function Va(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Vd(e, t, n, l, i) {
    var u = to();
    return (
      (u = u === null ? null : { parent: Ve._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Xi(t, null),
      uo(),
      Kf(t),
      e !== null && Gl(e, t, l, !0),
      (t.childLanes = i),
      null
    );
  }
  function as(e, t) {
    return (
      (t = ss({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Qd(e, t, n) {
    return (
      yl(t, e.child, null, n),
      (e = as(t, t.pendingProps)),
      (e.flags |= 2),
      bt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Vg(e, t, n) {
    var l = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (l.mode === "hidden")
          return (e = as(t, l)), (t.lanes = 536870912), Va(null, e);
        if (
          (ro(t),
          (e = Ue)
            ? ((e = nm(e, jt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Nn !== null ? { id: Zt, overflow: Jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Cf(e)),
                (n.return = t),
                (t.child = n),
                (We = t),
                (Ue = null)))
            : (e = null),
          e === null)
        )
          throw Mn(t);
        return (t.lanes = 536870912), null;
      }
      return as(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if ((ro(t), i))
        if (t.flags & 256) (t.flags &= -257), (t = Qd(e, t, n));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(r(558));
      else if (
        (ke || Gl(e, t, n, !1), (i = (n & e.childLanes) !== 0), ke || i)
      ) {
        if (
          ((l = je),
          l !== null && ((f = zc(l, n)), f !== 0 && f !== u.retryLane))
        )
          throw ((u.retryLane = f), ol(e, f), ft(l, e, f), _o);
        ps(), (t = Qd(e, t, n));
      } else
        (e = u.treeContext),
          (Ue = Ht(f.nextSibling)),
          (We = t),
          (Te = !0),
          (Rn = null),
          (jt = !1),
          e !== null && Mf(t, e),
          (t = as(t, l)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = un(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function is(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Do(e, t, n, l, i) {
    return (
      dl(t),
      (n = fo(e, t, n, l, void 0, i)),
      (l = ho()),
      e !== null && !ke
        ? (mo(e, t, i), hn(e, t, i))
        : (Te && l && Ku(t), (t.flags |= 1), et(e, t, n, i), t.child)
    );
  }
  function kd(e, t, n, l, i, u) {
    return (
      dl(t),
      (t.updateQueue = null),
      (n = Jf(t, l, n, i)),
      Zf(e),
      (l = ho()),
      e !== null && !ke
        ? (mo(e, t, u), hn(e, t, u))
        : (Te && l && Ku(t), (t.flags |= 1), et(e, t, n, u), t.child)
    );
  }
  function Kd(e, t, n, l, i) {
    if ((dl(t), t.stateNode === null)) {
      var u = Hl,
        f = n.contextType;
      typeof f == "object" && f !== null && (u = Ie(f)),
        (u = new n(l, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ro),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        lo(t),
        (f = n.contextType),
        (u.context = typeof f == "object" && f !== null ? Ie(f) : Hl),
        (u.state = t.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (No(t, n, f, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((f = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          f !== u.state && Ro.enqueueReplaceState(u, u.state, null),
          Ba(t, l, u, i),
          La(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      u = t.stateNode;
      var p = t.memoizedProps,
        E = gl(n, p);
      u.props = E;
      var M = u.context,
        L = n.contextType;
      (f = Hl), typeof L == "object" && L !== null && (f = Ie(L));
      var G = n.getDerivedStateFromProps;
      (L =
        typeof G == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (p = t.pendingProps !== p),
        L ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((p || M !== f) && Dd(t, u, l, f)),
        (Dn = !1);
      var D = t.memoizedState;
      (u.state = D),
        Ba(t, l, u, i),
        La(),
        (M = t.memoizedState),
        p || D !== M || Dn
          ? (typeof G == "function" && (No(t, n, G, l), (M = t.memoizedState)),
            (E = Dn || _d(t, n, E, l, D, M, f))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = M)),
            (u.props = l),
            (u.state = M),
            (u.context = f),
            (l = E))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (u = t.stateNode),
        ao(e, t),
        (f = t.memoizedProps),
        (L = gl(n, f)),
        (u.props = L),
        (G = t.pendingProps),
        (D = u.context),
        (M = n.contextType),
        (E = Hl),
        typeof M == "object" && M !== null && (E = Ie(M)),
        (p = n.getDerivedStateFromProps),
        (M =
          typeof p == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f !== G || D !== E) && Dd(t, u, l, E)),
        (Dn = !1),
        (D = t.memoizedState),
        (u.state = D),
        Ba(t, l, u, i),
        La();
      var U = t.memoizedState;
      f !== G ||
      D !== U ||
      Dn ||
      (e !== null && e.dependencies !== null && Gi(e.dependencies))
        ? (typeof p == "function" && (No(t, n, p, l), (U = t.memoizedState)),
          (L =
            Dn ||
            _d(t, n, L, l, D, U, E) ||
            (e !== null && e.dependencies !== null && Gi(e.dependencies)))
            ? (M ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, U, E),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, U, E)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = U)),
          (u.props = l),
          (u.state = U),
          (u.context = E),
          (l = L))
        : (typeof u.componentDidUpdate != "function" ||
            (f === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      is(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = yl(t, e.child, null, i)),
              (t.child = yl(t, null, n, i)))
            : et(e, t, n, i),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = hn(e, t, i)),
      e
    );
  }
  function Zd(e, t, n, l) {
    return cl(), (t.flags |= 256), et(e, t, n, l), t.child;
  }
  var zo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jo(e) {
    return { baseLanes: e, cachePool: Hf() };
  }
  function Uo(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= xt), e;
  }
  function Jd(e, t, n) {
    var l = t.pendingProps,
      i = !1,
      u = (t.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
      f && ((i = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (i ? Un(t) : Hn(),
          (e = Ue)
            ? ((e = nm(e, jt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Nn !== null ? { id: Zt, overflow: Jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Cf(e)),
                (n.return = t),
                (t.child = n),
                (We = t),
                (Ue = null)))
            : (e = null),
          e === null)
        )
          throw Mn(t);
        return vr(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var p = l.children;
      return (
        (l = l.fallback),
        i
          ? (Hn(),
            (i = t.mode),
            (p = ss({ mode: "hidden", children: p }, i)),
            (l = rl(l, i, n, null)),
            (p.return = t),
            (l.return = t),
            (p.sibling = l),
            (t.child = p),
            (l = t.child),
            (l.memoizedState = jo(n)),
            (l.childLanes = Uo(e, f, n)),
            (t.memoizedState = zo),
            Va(null, l))
          : (Un(t), Ho(t, p))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((p = E.dehydrated), p !== null)) {
      if (u)
        t.flags & 256
          ? (Un(t), (t.flags &= -257), (t = Lo(e, t, n)))
          : t.memoizedState !== null
          ? (Hn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Hn(),
            (p = l.fallback),
            (i = t.mode),
            (l = ss({ mode: "visible", children: l.children }, i)),
            (p = rl(p, i, n, null)),
            (p.flags |= 2),
            (l.return = t),
            (p.return = t),
            (l.sibling = p),
            (t.child = l),
            yl(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = jo(n)),
            (l.childLanes = Uo(e, f, n)),
            (t.memoizedState = zo),
            (t = Va(null, l)));
      else if ((Un(t), vr(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var M = f.dgst;
        (f = M),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = f),
          _a({ value: l, source: null, stack: null }),
          (t = Lo(e, t, n));
      } else if (
        (ke || Gl(e, t, n, !1), (f = (n & e.childLanes) !== 0), ke || f)
      ) {
        if (
          ((f = je),
          f !== null && ((l = zc(f, n)), l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), ol(e, l), ft(f, e, l), _o);
        yr(p) || ps(), (t = Lo(e, t, n));
      } else
        yr(p)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (Ue = Ht(p.nextSibling)),
            (We = t),
            (Te = !0),
            (Rn = null),
            (jt = !1),
            e !== null && Mf(t, e),
            (t = Ho(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Hn(),
        (p = l.fallback),
        (i = t.mode),
        (E = e.child),
        (M = E.sibling),
        (l = un(E, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        M !== null ? (p = un(M, p)) : ((p = rl(p, i, n, null)), (p.flags |= 2)),
        (p.return = t),
        (l.return = t),
        (l.sibling = p),
        (t.child = l),
        Va(null, l),
        (l = t.child),
        (p = e.child.memoizedState),
        p === null
          ? (p = jo(n))
          : ((i = p.cachePool),
            i !== null
              ? ((E = Ve._currentValue),
                (i = i.parent !== E ? { parent: E, pool: E } : i))
              : (i = Hf()),
            (p = { baseLanes: p.baseLanes | n, cachePool: i })),
        (l.memoizedState = p),
        (l.childLanes = Uo(e, f, n)),
        (t.memoizedState = zo),
        Va(e.child, l))
      : (Un(t),
        (n = e.child),
        (e = n.sibling),
        (n = un(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Ho(e, t) {
    return (
      (t = ss({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ss(e, t) {
    return (e = vt(22, e, null, t)), (e.lanes = 0), e;
  }
  function Lo(e, t, n) {
    return (
      yl(t, e.child, null, n),
      (e = Ho(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Pu(e.return, t, n);
  }
  function Bo(e, t, n, l, i, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: i,
          treeForkCount: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = i),
        (f.treeForkCount = u));
  }
  function $d(e, t, n) {
    var l = t.pendingProps,
      i = l.revealOrder,
      u = l.tail;
    l = l.children;
    var f = Ye.current,
      p = (f & 2) !== 0;
    if (
      (p ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      K(Ye, f),
      et(e, t, l, n),
      (l = Te ? Ma : 0),
      !p && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fd(e, n, t);
        else if (e.tag === 19) Fd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ji(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Bo(t, !1, i, n, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ji(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bo(t, !0, n, null, u, l);
        break;
      case "together":
        Bo(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (qn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Gl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = un(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function qo(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Gi(e)));
  }
  function Qg(e, t, n) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo),
          _n(t, Ve, e.memoizedState.cache),
          cl();
        break;
      case 27:
      case 5:
        Ct(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        _n(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), ro(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Un(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Jd(e, t, n)
            : (Un(t), (e = hn(e, t, n)), e !== null ? e.sibling : null);
        Un(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Gl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return $d(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          K(Ye, Ye.current),
          l)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Xd(e, t, n, t.pendingProps);
      case 24:
        _n(t, Ve, e.memoizedState.cache);
    }
    return hn(e, t, n);
  }
  function Pd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ke = !0;
      else {
        if (!qo(e, n) && (t.flags & 128) === 0) return (ke = !1), Qg(e, t, n);
        ke = (e.flags & 131072) !== 0;
      }
    else (ke = !1), Te && (t.flags & 1048576) !== 0 && Rf(t, Ma, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = ml(t.elementType)), (t.type = e), typeof e == "function"))
            Vu(e)
              ? ((l = gl(e, l)), (t.tag = 1), (t = Kd(null, t, e, l, n)))
              : ((t.tag = 0), (t = Do(null, t, e, l, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === Z) {
                (t.tag = 11), (t = qd(null, t, e, l, n));
                break e;
              } else if (i === Y) {
                (t.tag = 14), (t = Gd(null, t, e, l, n));
                break e;
              }
            }
            throw ((t = W(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Do(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (i = gl(l, t.pendingProps)), Kd(e, t, l, i, n);
      case 3:
        e: {
          if ((Ge(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          (i = u.element), ao(e, t), Ba(t, l, null, n);
          var f = t.memoizedState;
          if (
            ((l = f.cache),
            _n(t, Ve, l),
            l !== u.cache && Wu(t, [Ve], n, !0),
            La(),
            (l = f.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Zd(e, t, l, n);
              break e;
            } else if (l !== i) {
              (i = _t(Error(r(424)), t)), _a(i), (t = Zd(e, t, l, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ue = Ht(e.firstChild),
                  We = t,
                  Te = !0,
                  Rn = null,
                  jt = !0,
                  n = Xf(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((cl(), l === i)) {
              t = hn(e, t, n);
              break e;
            }
            et(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          is(e, t),
          e === null
            ? (n = om(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Te ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Es(de.current).createElement(n)),
                (l[Pe] = t),
                (l[it] = e),
                tt(l, n, e),
                Fe(l),
                (t.stateNode = l))
            : (t.memoizedState = om(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ct(t),
          e === null &&
            Te &&
            ((l = t.stateNode = im(t.type, t.pendingProps, de.current)),
            (We = t),
            (jt = !0),
            (i = Ue),
            Qn(t.type) ? ((gr = i), (Ue = Ht(l.firstChild))) : (Ue = i)),
          et(e, t, t.pendingProps.children, n),
          is(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((i = l = Ue) &&
              ((l = Sb(l, t.type, t.pendingProps, jt)),
              l !== null
                ? ((t.stateNode = l),
                  (We = t),
                  (Ue = Ht(l.firstChild)),
                  (jt = !1),
                  (i = !0))
                : (i = !1)),
            i || Mn(t)),
          Ct(t),
          (i = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (l = u.children),
          hr(i, u) ? (l = null) : f !== null && hr(i, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = fo(e, t, Ug, null, null, n)), (ai._currentValue = i)),
          is(e, t),
          et(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = n = Ue) &&
              ((n = xb(n, t.pendingProps, jt)),
              n !== null
                ? ((t.stateNode = n), (We = t), (Ue = null), (e = !0))
                : (e = !1)),
            e || Mn(t)),
          null
        );
      case 13:
        return Jd(e, t, n);
      case 4:
        return (
          Ge(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = yl(t, null, l, n)) : et(e, t, l, n),
          t.child
        );
      case 11:
        return qd(e, t, t.type, t.pendingProps, n);
      case 7:
        return et(e, t, t.pendingProps, n), t.child;
      case 8:
        return et(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return et(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          _n(t, t.type, l.value),
          et(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          dl(t),
          (i = Ie(i)),
          (l = l(i)),
          (t.flags |= 1),
          et(e, t, l, n),
          t.child
        );
      case 14:
        return Gd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Yd(e, t, t.type, t.pendingProps, n);
      case 19:
        return $d(e, t, n);
      case 31:
        return Vg(e, t, n);
      case 22:
        return Xd(e, t, n, t.pendingProps);
      case 24:
        return (
          dl(t),
          (l = Ie(Ve)),
          e === null
            ? ((i = to()),
              i === null &&
                ((i = je),
                (u = Iu()),
                (i.pooledCache = u),
                u.refCount++,
                u !== null && (i.pooledCacheLanes |= n),
                (i = u)),
              (t.memoizedState = { parent: l, cache: i }),
              lo(t),
              _n(t, Ve, i))
            : ((e.lanes & n) !== 0 && (ao(e, t), Ba(t, null, null, n), La()),
              (i = e.memoizedState),
              (u = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  _n(t, Ve, l))
                : ((l = u.cache),
                  _n(t, Ve, l),
                  l !== i.cache && Wu(t, [Ve], n, !0))),
          et(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function mn(e) {
    e.flags |= 4;
  }
  function Go(e, t, n, l, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (wh()) e.flags |= 8192;
        else throw ((pl = Qi), no);
    } else e.flags &= -16777217;
  }
  function Wd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !hm(t)))
      if (wh()) e.flags |= 8192;
      else throw ((pl = Qi), no);
  }
  function us(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Mc() : 536870912), (e.lanes |= t), (Wl |= t));
  }
  function Qa(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function kg(e, t, n) {
    var l = t.pendingProps;
    switch ((Zu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return He(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          cn(Ve),
          Me(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ql(t)
              ? mn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Fu())),
          He(t),
          null
        );
      case 26:
        var i = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (mn(t),
              u !== null ? (He(t), Wd(t, u)) : (He(t), Go(t, i, null, l, n)))
            : u
            ? u !== e.memoizedState
              ? (mn(t), He(t), Wd(t, u))
              : (He(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== l && mn(t),
              He(t),
              Go(t, i, e, l, n)),
          null
        );
      case 27:
        if (
          (kt(t),
          (n = de.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return He(t), null;
          }
          (e = F.current),
            ql(t) ? _f(t) : ((e = im(i, l, n)), (t.stateNode = e), mn(t));
        }
        return He(t), null;
      case 5:
        if ((kt(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && mn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return He(t), null;
          }
          if (((u = F.current), ql(t))) _f(t);
          else {
            var f = Es(de.current);
            switch (u) {
              case 1:
                u = f.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                u = f.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    u = f.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    (u = f.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (u.multiple = !0)
                        : l.size && (u.size = l.size);
                    break;
                  default:
                    u =
                      typeof l.is == "string"
                        ? f.createElement(i, { is: l.is })
                        : f.createElement(i);
                }
            }
            (u[Pe] = t), (u[it] = l);
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            t.stateNode = u;
            e: switch ((tt(u, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && mn(t);
          }
        }
        return (
          He(t),
          Go(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && mn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = de.current), ql(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (i = We),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            (e[Pe] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Jh(e.nodeValue, n)
              )),
              e || Mn(t, !0);
          } else (e = Es(e).createTextNode(l)), (e[Pe] = t), (t.stateNode = e);
        }
        return He(t), null;
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ql(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[Pe] = t;
            } else
              cl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            He(t), (e = !1);
          } else
            (n = Fu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0);
          if (!e) return t.flags & 256 ? (bt(t), t) : (bt(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return He(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = ql(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(r(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(r(317));
              i[Pe] = t;
            } else
              cl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            He(t), (i = !1);
          } else
            (i = Fu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0);
          if (!i) return t.flags & 256 ? (bt(t), t) : (bt(t), null);
        }
        return (
          bt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (i = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (i = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== i && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              us(t, t.updateQueue),
              He(t),
              null)
        );
      case 4:
        return Me(), e === null && or(t.stateNode.containerInfo), He(t), null;
      case 10:
        return cn(t.type), He(t), null;
      case 19:
        if ((B(Ye), (l = t.memoizedState), l === null)) return He(t), null;
        if (((i = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (i) Qa(l, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Ji(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Qa(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      us(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Of(n, e), (n = n.sibling);
                  return (
                    K(Ye, (Ye.current & 1) | 2),
                    Te && on(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              ht() > ds &&
              ((t.flags |= 128), (i = !0), Qa(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Ji(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                us(t, e),
                Qa(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !Te)
              )
                return He(t), null;
            } else
              2 * ht() - l.renderingStartTime > ds &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), Qa(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = ht()),
            (e.sibling = null),
            (n = Ye.current),
            K(Ye, i ? (n & 1) | 2 : n & 1),
            Te && on(t, l.treeForkCount),
            e)
          : (He(t), null);
      case 22:
      case 23:
        return (
          bt(t),
          oo(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          (n = t.updateQueue),
          n !== null && us(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && B(hl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          cn(Ve),
          He(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Kg(e, t) {
    switch ((Zu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cn(Ve),
          Me(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return kt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((bt(t), t.alternate === null)) throw Error(r(340));
          cl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (bt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          cl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return B(Ye), null;
      case 4:
        return Me(), null;
      case 10:
        return cn(t.type), null;
      case 22:
      case 23:
        return (
          bt(t),
          oo(),
          e !== null && B(hl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return cn(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Id(e, t) {
    switch ((Zu(t), t.tag)) {
      case 3:
        cn(Ve), Me();
        break;
      case 26:
      case 27:
      case 5:
        kt(t);
        break;
      case 4:
        Me();
        break;
      case 31:
        t.memoizedState !== null && bt(t);
        break;
      case 13:
        bt(t);
        break;
      case 19:
        B(Ye);
        break;
      case 10:
        cn(t.type);
        break;
      case 22:
      case 23:
        bt(t), oo(), e !== null && B(hl);
        break;
      case 24:
        cn(Ve);
    }
  }
  function ka(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create,
              f = n.inst;
            (l = u()), (f.destroy = l);
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (p) {
      Re(t, t.return, p);
    }
  }
  function Ln(e, t, n) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst,
              p = f.destroy;
            if (p !== void 0) {
              (f.destroy = void 0), (i = t);
              var E = n,
                M = p;
              try {
                M();
              } catch (L) {
                Re(i, E, L);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (L) {
      Re(t, t.return, L);
    }
  }
  function eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Qf(t, n);
      } catch (l) {
        Re(e, e.return, l);
      }
    }
  }
  function th(e, t, n) {
    (n.props = gl(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Re(e, t, l);
    }
  }
  function Ka(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      Re(e, t, i);
    }
  }
  function Ft(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          Re(e, t, i);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Re(e, t, i);
        }
      else n.current = null;
  }
  function nh(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  function Yo(e, t, n) {
    try {
      var l = e.stateNode;
      mb(l, e.type, n, t), (l[it] = t);
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  function lh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Qn(e.type)) ||
      e.tag === 4
    );
  }
  function Xo(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Qn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = an));
    else if (
      l !== 4 &&
      (l === 27 && Qn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Vo(e, t, n), e = e.sibling; e !== null; )
        Vo(e, t, n), (e = e.sibling);
  }
  function os(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Qn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (os(e, t, n), e = e.sibling; e !== null; )
        os(e, t, n), (e = e.sibling);
  }
  function ah(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      tt(t, l, n), (t[Pe] = e), (t[it] = n);
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  var pn = !1,
    Ke = !1,
    Qo = !1,
    ih = typeof WeakSet == "function" ? WeakSet : Set,
    $e = null;
  function Zg(e, t) {
    if (((e = e.containerInfo), (fr = Rs), (e = vf(e)), Hu(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              p = -1,
              E = -1,
              M = 0,
              L = 0,
              G = e,
              D = null;
            t: for (;;) {
              for (
                var U;
                G !== n || (i !== 0 && G.nodeType !== 3) || (p = f + i),
                  G !== u || (l !== 0 && G.nodeType !== 3) || (E = f + l),
                  G.nodeType === 3 && (f += G.nodeValue.length),
                  (U = G.firstChild) !== null;

              )
                (D = G), (G = U);
              for (;;) {
                if (G === e) break t;
                if (
                  (D === n && ++M === i && (p = f),
                  D === u && ++L === l && (E = f),
                  (U = G.nextSibling) !== null)
                )
                  break;
                (G = D), (D = G.parentNode);
              }
              G = U;
            }
            n = p === -1 || E === -1 ? null : { start: p, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      dr = { focusedElem: e, selectionRange: n }, Rs = !1, $e = t;
      $e !== null;

    )
      if (
        ((t = $e), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), ($e = e);
      else
        for (; $e !== null; ) {
          switch (((t = $e), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  (i = e[n]), (i.ref.impl = i.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (n = t),
                  (i = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode);
                try {
                  var I = gl(n.type, i);
                  (e = l.getSnapshotBeforeUpdate(I, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (se) {
                  Re(n, n.return, se);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  pr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      pr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), ($e = e);
            break;
          }
          $e = t.return;
        }
  }
  function sh(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(e, n), l & 4 && ka(5, n);
        break;
      case 1:
        if ((vn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              Re(n, n.return, f);
            }
          else {
            var i = gl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Re(n, n.return, f);
            }
          }
        l & 64 && eh(n), l & 512 && Ka(n, n.return);
        break;
      case 3:
        if ((vn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Qf(e, t);
          } catch (f) {
            Re(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && ah(n);
      case 26:
      case 5:
        vn(e, n), t === null && l & 4 && nh(n), l & 512 && Ka(n, n.return);
        break;
      case 12:
        vn(e, n);
        break;
      case 31:
        vn(e, n), l & 4 && rh(e, n);
        break;
      case 13:
        vn(e, n),
          l & 4 && ch(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = nb.bind(null, n)), Eb(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || pn), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Ke), (i = pn);
          var u = Ke;
          (pn = l),
            (Ke = t) && !u ? gn(e, n, (n.subtreeFlags & 8772) !== 0) : vn(e, n),
            (pn = i),
            (Ke = u);
        }
        break;
      case 30:
        break;
      default:
        vn(e, n);
    }
  }
  function uh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), uh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && bu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Le = null,
    ut = !1;
  function yn(e, t, n) {
    for (n = n.child; n !== null; ) oh(e, t, n), (n = n.sibling);
  }
  function oh(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(ya, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ke || Ft(n, t),
          yn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ke || Ft(n, t);
        var l = Le,
          i = ut;
        Qn(n.type) && ((Le = n.stateNode), (ut = !1)),
          yn(e, t, n),
          ti(n.stateNode),
          (Le = l),
          (ut = i);
        break;
      case 5:
        Ke || Ft(n, t);
      case 6:
        if (
          ((l = Le),
          (i = ut),
          (Le = null),
          yn(e, t, n),
          (Le = l),
          (ut = i),
          Le !== null)
        )
          if (ut)
            try {
              (Le.nodeType === 9
                ? Le.body
                : Le.nodeName === "HTML"
                ? Le.ownerDocument.body
                : Le
              ).removeChild(n.stateNode);
            } catch (u) {
              Re(n, t, u);
            }
          else
            try {
              Le.removeChild(n.stateNode);
            } catch (u) {
              Re(n, t, u);
            }
        break;
      case 18:
        Le !== null &&
          (ut
            ? ((e = Le),
              em(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              sa(e))
            : em(Le, n.stateNode));
        break;
      case 4:
        (l = Le),
          (i = ut),
          (Le = n.stateNode.containerInfo),
          (ut = !0),
          yn(e, t, n),
          (Le = l),
          (ut = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ln(2, n, t), Ke || Ln(4, n, t), yn(e, t, n);
        break;
      case 1:
        Ke ||
          (Ft(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && th(n, t, l)),
          yn(e, t, n);
        break;
      case 21:
        yn(e, t, n);
        break;
      case 22:
        (Ke = (l = Ke) || n.memoizedState !== null), yn(e, t, n), (Ke = l);
        break;
      default:
        yn(e, t, n);
    }
  }
  function rh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        sa(e);
      } catch (n) {
        Re(t, t.return, n);
      }
    }
  }
  function ch(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        sa(e);
      } catch (n) {
        Re(t, t.return, n);
      }
  }
  function Jg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ih()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new ih()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function rs(e, t) {
    var n = Jg(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var i = lb.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l],
          u = e,
          f = t,
          p = f;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Qn(p.type)) {
                (Le = p.stateNode), (ut = !1);
                break e;
              }
              break;
            case 5:
              (Le = p.stateNode), (ut = !1);
              break e;
            case 3:
            case 4:
              (Le = p.stateNode.containerInfo), (ut = !0);
              break e;
          }
          p = p.return;
        }
        if (Le === null) throw Error(r(160));
        oh(u, f, i),
          (Le = null),
          (ut = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) fh(t, e), (t = t.sibling);
  }
  var Gt = null;
  function fh(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, e),
          rt(e),
          l & 4 && (Ln(3, e, e.return), ka(3, e), Ln(5, e, e.return));
        break;
      case 1:
        ot(t, e),
          rt(e),
          l & 512 && (Ke || n === null || Ft(n, n.return)),
          l & 64 &&
            pn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var i = Gt;
        if (
          (ot(t, e),
          rt(e),
          l & 512 && (Ke || n === null || Ft(n, n.return)),
          l & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i);
                  t: switch (l) {
                    case "title":
                      (u = i.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ba] ||
                          u[Pe] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = i.createElement(l)),
                          i.head.insertBefore(
                            u,
                            i.querySelector("head > title")
                          )),
                        tt(u, l, n),
                        (u[Pe] = e),
                        Fe(u),
                        (l = u);
                      break e;
                    case "link":
                      var f = fm("link", "href", i).get(l + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((u = f[p]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break t;
                          }
                      }
                      (u = i.createElement(l)),
                        tt(u, l, n),
                        i.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (f = fm("meta", "content", i).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((u = f[p]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(p, 1);
                            break t;
                          }
                      }
                      (u = i.createElement(l)),
                        tt(u, l, n),
                        i.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  (u[Pe] = e), Fe(u), (l = u);
                }
                e.stateNode = l;
              } else dm(i, e.type, e.stateNode);
            else e.stateNode = cm(i, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null
                  ? dm(i, e.type, e.stateNode)
                  : cm(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Yo(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ot(t, e),
          rt(e),
          l & 512 && (Ke || n === null || Ft(n, n.return)),
          n !== null && l & 4 && Yo(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ot(t, e),
          rt(e),
          l & 512 && (Ke || n === null || Ft(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Rl(i, "");
          } catch (I) {
            Re(e, e.return, I);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Yo(e, i, n !== null ? n.memoizedProps : i)),
          l & 1024 && (Qo = !0);
        break;
      case 6:
        if ((ot(t, e), rt(e), l & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (I) {
            Re(e, e.return, I);
          }
        }
        break;
      case 3:
        if (
          ((As = null),
          (i = Gt),
          (Gt = Ts(t.containerInfo)),
          ot(t, e),
          (Gt = i),
          rt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            sa(t.containerInfo);
          } catch (I) {
            Re(e, e.return, I);
          }
        Qo && ((Qo = !1), dh(e));
        break;
      case 4:
        (l = Gt),
          (Gt = Ts(e.stateNode.containerInfo)),
          ot(t, e),
          rt(e),
          (Gt = l);
        break;
      case 12:
        ot(t, e), rt(e);
        break;
      case 31:
        ot(t, e),
          rt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), rs(e, l)));
        break;
      case 13:
        ot(t, e),
          rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (fs = ht()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), rs(e, l)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          M = pn,
          L = Ke;
        if (
          ((pn = M || i),
          (Ke = L || E),
          ot(t, e),
          (Ke = L),
          (pn = M),
          rt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || E || pn || Ke || bl(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (((u = E.stateNode), i))
                    (f = u.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    p = E.stateNode;
                    var G = E.memoizedProps.style,
                      D =
                        G != null && G.hasOwnProperty("display")
                          ? G.display
                          : null;
                    p.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (I) {
                  Re(E, E.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (I) {
                  Re(E, E.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var U = E.stateNode;
                  i ? tm(U, !0) : tm(E.stateNode, !1);
                } catch (I) {
                  Re(E, E.return, I);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), rs(e, n))));
        break;
      case 19:
        ot(t, e),
          rt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), rs(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ot(t, e), rt(e);
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (lh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              u = Xo(e);
            os(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Rl(f, ""), (n.flags &= -33));
            var p = Xo(e);
            os(e, p, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              M = Xo(e);
            Vo(e, M, E);
            break;
          default:
            throw Error(r(161));
        }
      } catch (L) {
        Re(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        dh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function vn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) sh(e, t.alternate, t), (t = t.sibling);
  }
  function bl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, t, t.return), bl(t);
          break;
        case 1:
          Ft(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && th(t, t.return, n),
            bl(t);
          break;
        case 27:
          ti(t.stateNode);
        case 26:
        case 5:
          Ft(t, t.return), bl(t);
          break;
        case 22:
          t.memoizedState === null && bl(t);
          break;
        case 30:
          bl(t);
          break;
        default:
          bl(t);
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        u = t,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          gn(i, u, n), ka(4, u);
          break;
        case 1:
          if (
            (gn(i, u, n),
            (l = u),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (M) {
              Re(l, l.return, M);
            }
          if (((l = u), (i = l.updateQueue), i !== null)) {
            var p = l.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Vf(E[i], p);
            } catch (M) {
              Re(l, l.return, M);
            }
          }
          n && f & 64 && eh(u), Ka(u, u.return);
          break;
        case 27:
          ah(u);
        case 26:
        case 5:
          gn(i, u, n), n && l === null && f & 4 && nh(u), Ka(u, u.return);
          break;
        case 12:
          gn(i, u, n);
          break;
        case 31:
          gn(i, u, n), n && f & 4 && rh(i, u);
          break;
        case 13:
          gn(i, u, n), n && f & 4 && ch(i, u);
          break;
        case 22:
          u.memoizedState === null && gn(i, u, n), Ka(u, u.return);
          break;
        case 30:
          break;
        default:
          gn(i, u, n);
      }
      t = t.sibling;
    }
  }
  function ko(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Da(n));
  }
  function Ko(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Da(e));
  }
  function Yt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) hh(e, t, n, l), (t = t.sibling);
  }
  function hh(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yt(e, t, n, l), i & 2048 && ka(9, t);
        break;
      case 1:
        Yt(e, t, n, l);
        break;
      case 3:
        Yt(e, t, n, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Da(e)));
        break;
      case 12:
        if (i & 2048) {
          Yt(e, t, n, l), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              f = u.id,
              p = u.onPostCommit;
            typeof p == "function" &&
              p(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Re(t, t.return, E);
          }
        } else Yt(e, t, n, l);
        break;
      case 31:
        Yt(e, t, n, l);
        break;
      case 13:
        Yt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Yt(e, t, n, l)
              : Za(e, t)
            : u._visibility & 2
            ? Yt(e, t, n, l)
            : ((u._visibility |= 2),
              Fl(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && ko(f, t);
        break;
      case 24:
        Yt(e, t, n, l), i & 2048 && Ko(t.alternate, t);
        break;
      default:
        Yt(e, t, n, l);
    }
  }
  function Fl(e, t, n, l, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var u = e,
        f = t,
        p = n,
        E = l,
        M = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Fl(u, f, p, E, i), ka(8, f);
          break;
        case 23:
          break;
        case 22:
          var L = f.stateNode;
          f.memoizedState !== null
            ? L._visibility & 2
              ? Fl(u, f, p, E, i)
              : Za(u, f)
            : ((L._visibility |= 2), Fl(u, f, p, E, i)),
            i && M & 2048 && ko(f.alternate, f);
          break;
        case 24:
          Fl(u, f, p, E, i), i && M & 2048 && Ko(f.alternate, f);
          break;
        default:
          Fl(u, f, p, E, i);
      }
      t = t.sibling;
    }
  }
  function Za(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            Za(n, l), i & 2048 && ko(l.alternate, l);
            break;
          case 24:
            Za(n, l), i & 2048 && Ko(l.alternate, l);
            break;
          default:
            Za(n, l);
        }
        t = t.sibling;
      }
  }
  var Ja = 8192;
  function $l(e, t, n) {
    if (e.subtreeFlags & Ja)
      for (e = e.child; e !== null; ) mh(e, t, n), (e = e.sibling);
  }
  function mh(e, t, n) {
    switch (e.tag) {
      case 26:
        $l(e, t, n),
          e.flags & Ja &&
            e.memoizedState !== null &&
            jb(n, Gt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        $l(e, t, n);
        break;
      case 3:
      case 4:
        var l = Gt;
        (Gt = Ts(e.stateNode.containerInfo)), $l(e, t, n), (Gt = l);
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Ja), (Ja = 16777216), $l(e, t, n), (Ja = l))
            : $l(e, t, n));
        break;
      default:
        $l(e, t, n);
    }
  }
  function ph(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Fa(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ($e = l), vh(l, e);
        }
      ph(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) yh(e), (e = e.sibling);
  }
  function yh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fa(e), e.flags & 2048 && Ln(9, e, e.return);
        break;
      case 3:
        Fa(e);
        break;
      case 12:
        Fa(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), cs(e))
          : Fa(e);
        break;
      default:
        Fa(e);
    }
  }
  function cs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ($e = l), vh(l, e);
        }
      ph(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Ln(8, t, t.return), cs(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), cs(t));
          break;
        default:
          cs(t);
      }
      e = e.sibling;
    }
  }
  function vh(e, t) {
    for (; $e !== null; ) {
      var n = $e;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Da(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), ($e = l);
      else
        e: for (n = e; $e !== null; ) {
          l = $e;
          var i = l.sibling,
            u = l.return;
          if ((uh(l), l === n)) {
            $e = null;
            break e;
          }
          if (i !== null) {
            (i.return = u), ($e = i);
            break e;
          }
          $e = u;
        }
    }
  }
  var Fg = {
      getCacheForType: function (e) {
        var t = Ie(Ve),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
      cacheSignal: function () {
        return Ie(Ve).controller.signal;
      },
    },
    $g = typeof WeakMap == "function" ? WeakMap : Map,
    Ce = 0,
    je = null,
    be = null,
    xe = 0,
    Ne = 0,
    St = null,
    Bn = !1,
    Pl = !1,
    Zo = !1,
    bn = 0,
    qe = 0,
    qn = 0,
    Sl = 0,
    Jo = 0,
    xt = 0,
    Wl = 0,
    $a = null,
    ct = null,
    Fo = !1,
    fs = 0,
    gh = 0,
    ds = 1 / 0,
    hs = null,
    Gn = null,
    Ze = 0,
    Yn = null,
    Il = null,
    Sn = 0,
    $o = 0,
    Po = null,
    bh = null,
    Pa = 0,
    Wo = null;
  function Et() {
    return (Ce & 2) !== 0 && xe !== 0 ? xe & -xe : N.T !== null ? ar() : jc();
  }
  function Sh() {
    if (xt === 0)
      if ((xe & 536870912) === 0 || Te) {
        var e = xi;
        (xi <<= 1), (xi & 3932160) === 0 && (xi = 262144), (xt = e);
      } else xt = 536870912;
    return (e = gt.current), e !== null && (e.flags |= 32), xt;
  }
  function ft(e, t, n) {
    ((e === je && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (ea(e, 0), Xn(e, xe, xt, !1)),
      ga(e, n),
      ((Ce & 2) === 0 || e !== je) &&
        (e === je &&
          ((Ce & 2) === 0 && (Sl |= n), qe === 4 && Xn(e, xe, xt, !1)),
        $t(e));
  }
  function xh(e, t, n) {
    if ((Ce & 6) !== 0) throw Error(r(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || va(e, t),
      i = l ? Ig(e, t) : er(e, t, !0),
      u = l;
    do {
      if (i === 0) {
        Pl && !l && Xn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Pg(n))) {
          (i = er(e, t, !1)), (u = !1);
          continue;
        }
        if (i === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var f = 0;
          else
            (f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var p = e;
              i = $a;
              var E = p.current.memoizedState.isDehydrated;
              if ((E && (ea(p, f).flags |= 256), (f = er(p, f, !1)), f !== 2)) {
                if (Zo && !E) {
                  (p.errorRecoveryDisabledLanes |= u), (Sl |= u), (i = 4);
                  break e;
                }
                (u = ct),
                  (ct = i),
                  u !== null && (ct === null ? (ct = u) : ct.push.apply(ct, u));
              }
              i = f;
            }
            if (((u = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          ea(e, 0), Xn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (u = i), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Xn(l, t, xt, !Bn);
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((i = fs + 300 - ht()), 10 < i)) {
            if ((Xn(l, t, xt, !Bn), Ti(l, 0, !0) !== 0)) break e;
            (Sn = t),
              (l.timeoutHandle = Wh(
                Eh.bind(
                  null,
                  l,
                  n,
                  ct,
                  hs,
                  Fo,
                  t,
                  xt,
                  Sl,
                  Wl,
                  Bn,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                i
              ));
            break e;
          }
          Eh(l, n, ct, hs, Fo, t, xt, Sl, Wl, Bn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $t(e);
  }
  function Eh(e, t, n, l, i, u, f, p, E, M, L, G, D, U) {
    if (
      ((e.timeoutHandle = -1),
      (G = t.subtreeFlags),
      G & 8192 || (G & 16785408) === 16785408)
    ) {
      (G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an,
      }),
        mh(t, u, G);
      var I =
        (u & 62914560) === u ? fs - ht() : (u & 4194048) === u ? gh - ht() : 0;
      if (((I = Ub(G, I)), I !== null)) {
        (Sn = u),
          (e.cancelPendingCommit = I(
            Mh.bind(null, e, t, u, n, l, i, f, p, E, L, G, null, D, U)
          )),
          Xn(e, u, f, !M);
        return;
      }
    }
    Mh(e, t, u, n, l, i, f, p, E);
  }
  function Pg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var i = n[l],
            u = i.getSnapshot;
          i = i.value;
          try {
            if (!yt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Xn(e, t, n, l) {
    (t &= ~Jo),
      (t &= ~Sl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var i = t; 0 < i; ) {
      var u = 31 - pt(i),
        f = 1 << u;
      (l[u] = -1), (i &= ~f);
    }
    n !== 0 && _c(e, n, t);
  }
  function ms() {
    return (Ce & 6) === 0 ? (Wa(0), !1) : !0;
  }
  function Io() {
    if (be !== null) {
      if (Ne === 0) var e = be.return;
      else (e = be), (rn = fl = null), po(e), (Ql = null), (ja = 0), (e = be);
      for (; e !== null; ) Id(e.alternate, e), (e = e.return);
      be = null;
    }
  }
  function ea(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), vb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Sn = 0),
      Io(),
      (je = e),
      (be = n = un(e.current, null)),
      (xe = t),
      (Ne = 0),
      (St = null),
      (Bn = !1),
      (Pl = va(e, t)),
      (Zo = !1),
      (Wl = xt = Jo = Sl = qn = qe = 0),
      (ct = $a = null),
      (Fo = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - pt(l),
          u = 1 << i;
        (t |= e[i]), (l &= ~u);
      }
    return (bn = t), Ui(), n;
  }
  function Th(e, t) {
    (he = null),
      (N.H = Xa),
      t === Vl || t === Vi
        ? ((t = qf()), (Ne = 3))
        : t === no
        ? ((t = qf()), (Ne = 4))
        : (Ne =
            t === _o
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (St = t),
      be === null && ((qe = 1), ls(e, _t(t, e.current)));
  }
  function wh() {
    var e = gt.current;
    return e === null
      ? !0
      : (xe & 4194048) === xe
      ? Ut === null
      : (xe & 62914560) === xe || (xe & 536870912) !== 0
      ? e === Ut
      : !1;
  }
  function Ah() {
    var e = N.H;
    return (N.H = Xa), e === null ? Xa : e;
  }
  function Oh() {
    var e = N.A;
    return (N.A = Fg), e;
  }
  function ps() {
    (qe = 4),
      Bn || ((xe & 4194048) !== xe && gt.current !== null) || (Pl = !0),
      ((qn & 134217727) === 0 && (Sl & 134217727) === 0) ||
        je === null ||
        Xn(je, xe, xt, !1);
  }
  function er(e, t, n) {
    var l = Ce;
    Ce |= 2;
    var i = Ah(),
      u = Oh();
    (je !== e || xe !== t) && ((hs = null), ea(e, t)), (t = !1);
    var f = qe;
    e: do
      try {
        if (Ne !== 0 && be !== null) {
          var p = be,
            E = St;
          switch (Ne) {
            case 8:
              Io(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var M = Ne;
              if (((Ne = 0), (St = null), ta(e, p, E, M), n && Pl)) {
                f = 0;
                break e;
              }
              break;
            default:
              (M = Ne), (Ne = 0), (St = null), ta(e, p, E, M);
          }
        }
        Wg(), (f = qe);
        break;
      } catch (L) {
        Th(e, L);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (rn = fl = null),
      (Ce = l),
      (N.H = i),
      (N.A = u),
      be === null && ((je = null), (xe = 0), Ui()),
      f
    );
  }
  function Wg() {
    for (; be !== null; ) Ch(be);
  }
  function Ig(e, t) {
    var n = Ce;
    Ce |= 2;
    var l = Ah(),
      i = Oh();
    je !== e || xe !== t
      ? ((hs = null), (ds = ht() + 500), ea(e, t))
      : (Pl = va(e, t));
    e: do
      try {
        if (Ne !== 0 && be !== null) {
          t = be;
          var u = St;
          t: switch (Ne) {
            case 1:
              (Ne = 0), (St = null), ta(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Lf(u)) {
                (Ne = 0), (St = null), Nh(t);
                break;
              }
              (t = function () {
                (Ne !== 2 && Ne !== 9) || je !== e || (Ne = 7), $t(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Lf(u)
                ? ((Ne = 0), (St = null), Nh(t))
                : ((Ne = 0), (St = null), ta(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (be.tag) {
                case 26:
                  f = be.memoizedState;
                case 5:
                case 27:
                  var p = be;
                  if (f ? hm(f) : p.stateNode.complete) {
                    (Ne = 0), (St = null);
                    var E = p.sibling;
                    if (E !== null) be = E;
                    else {
                      var M = p.return;
                      M !== null ? ((be = M), ys(M)) : (be = null);
                    }
                    break t;
                  }
              }
              (Ne = 0), (St = null), ta(e, t, u, 5);
              break;
            case 6:
              (Ne = 0), (St = null), ta(e, t, u, 6);
              break;
            case 8:
              Io(), (qe = 6);
              break e;
            default:
              throw Error(r(462));
          }
        }
        eb();
        break;
      } catch (L) {
        Th(e, L);
      }
    while (!0);
    return (
      (rn = fl = null),
      (N.H = l),
      (N.A = i),
      (Ce = n),
      be !== null ? 0 : ((je = null), (xe = 0), Ui(), qe)
    );
  }
  function eb() {
    for (; be !== null && !Tv(); ) Ch(be);
  }
  function Ch(e) {
    var t = Pd(e.alternate, e, bn);
    (e.memoizedProps = e.pendingProps), t === null ? ys(e) : (be = t);
  }
  function Nh(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = kd(n, t, t.pendingProps, t.type, void 0, xe);
        break;
      case 11:
        t = kd(n, t, t.pendingProps, t.type.render, t.ref, xe);
        break;
      case 5:
        po(t);
      default:
        Id(n, t), (t = be = Of(t, bn)), (t = Pd(n, t, bn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? ys(e) : (be = t);
  }
  function ta(e, t, n, l) {
    (rn = fl = null), po(t), (Ql = null), (ja = 0);
    var i = t.return;
    try {
      if (Xg(e, i, t, n, xe)) {
        (qe = 1), ls(e, _t(n, e.current)), (be = null);
        return;
      }
    } catch (u) {
      if (i !== null) throw ((be = i), u);
      (qe = 1), ls(e, _t(n, e.current)), (be = null);
      return;
    }
    t.flags & 32768
      ? (Te || l === 1
          ? (e = !0)
          : Pl || (xe & 536870912) !== 0
          ? (e = !1)
          : ((Bn = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = gt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Rh(t, e))
      : ys(t);
  }
  function ys(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rh(t, Bn);
        return;
      }
      e = t.return;
      var n = kg(t.alternate, t, bn);
      if (n !== null) {
        be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Rh(e, t) {
    do {
      var n = Kg(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    (qe = 6), (be = null);
  }
  function Mh(e, t, n, l, i, u, f, p, E) {
    e.cancelPendingCommit = null;
    do vs();
    while (Ze !== 0);
    if ((Ce & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Yu),
        zv(e, n, u, f, p, E),
        e === je && ((be = je = null), (xe = 0)),
        (Il = t),
        (Yn = e),
        (Sn = n),
        ($o = u),
        (Po = i),
        (bh = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            ab(bi, function () {
              return Uh(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = N.T), (N.T = null), (i = V.p), (V.p = 2), (f = Ce), (Ce |= 4);
        try {
          Zg(e, t, n);
        } finally {
          (Ce = f), (V.p = i), (N.T = l);
        }
      }
      (Ze = 1), _h(), Dh(), zh();
    }
  }
  function _h() {
    if (Ze === 1) {
      Ze = 0;
      var e = Yn,
        t = Il,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = N.T), (N.T = null);
        var l = V.p;
        V.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          fh(t, e);
          var u = dr,
            f = vf(e.containerInfo),
            p = u.focusedElem,
            E = u.selectionRange;
          if (
            f !== p &&
            p &&
            p.ownerDocument &&
            yf(p.ownerDocument.documentElement, p)
          ) {
            if (E !== null && Hu(p)) {
              var M = E.start,
                L = E.end;
              if ((L === void 0 && (L = M), "selectionStart" in p))
                (p.selectionStart = M),
                  (p.selectionEnd = Math.min(L, p.value.length));
              else {
                var G = p.ownerDocument || document,
                  D = (G && G.defaultView) || window;
                if (D.getSelection) {
                  var U = D.getSelection(),
                    I = p.textContent.length,
                    se = Math.min(E.start, I),
                    ze = E.end === void 0 ? se : Math.min(E.end, I);
                  !U.extend && se > ze && ((f = ze), (ze = se), (se = f));
                  var O = pf(p, se),
                    w = pf(p, ze);
                  if (
                    O &&
                    w &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== O.node ||
                      U.anchorOffset !== O.offset ||
                      U.focusNode !== w.node ||
                      U.focusOffset !== w.offset)
                  ) {
                    var R = G.createRange();
                    R.setStart(O.node, O.offset),
                      U.removeAllRanges(),
                      se > ze
                        ? (U.addRange(R), U.extend(w.node, w.offset))
                        : (R.setEnd(w.node, w.offset), U.addRange(R));
                  }
                }
              }
            }
            for (G = [], U = p; (U = U.parentNode); )
              U.nodeType === 1 &&
                G.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < G.length;
              p++
            ) {
              var q = G[p];
              (q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
            }
          }
          (Rs = !!fr), (dr = fr = null);
        } finally {
          (Ce = i), (V.p = l), (N.T = n);
        }
      }
      (e.current = t), (Ze = 2);
    }
  }
  function Dh() {
    if (Ze === 2) {
      Ze = 0;
      var e = Yn,
        t = Il,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = N.T), (N.T = null);
        var l = V.p;
        V.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          sh(e, t.alternate, t);
        } finally {
          (Ce = i), (V.p = l), (N.T = n);
        }
      }
      Ze = 3;
    }
  }
  function zh() {
    if (Ze === 4 || Ze === 3) {
      (Ze = 0), wv();
      var e = Yn,
        t = Il,
        n = Sn,
        l = bh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ze = 5)
        : ((Ze = 0), (Il = Yn = null), jh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Gn = null),
        vu(n),
        (t = t.stateNode),
        mt && typeof mt.onCommitFiberRoot == "function")
      )
        try {
          mt.onCommitFiberRoot(ya, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = N.T), (i = V.p), (V.p = 2), (N.T = null);
        try {
          for (var u = e.onRecoverableError, f = 0; f < l.length; f++) {
            var p = l[f];
            u(p.value, { componentStack: p.stack });
          }
        } finally {
          (N.T = t), (V.p = i);
        }
      }
      (Sn & 3) !== 0 && vs(),
        $t(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0
          ? e === Wo
            ? Pa++
            : ((Pa = 0), (Wo = e))
          : (Pa = 0),
        Wa(0);
    }
  }
  function jh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Da(t)));
  }
  function vs() {
    return _h(), Dh(), zh(), Uh();
  }
  function Uh() {
    if (Ze !== 5) return !1;
    var e = Yn,
      t = $o;
    $o = 0;
    var n = vu(Sn),
      l = N.T,
      i = V.p;
    try {
      (V.p = 32 > n ? 32 : n), (N.T = null), (n = Po), (Po = null);
      var u = Yn,
        f = Sn;
      if (((Ze = 0), (Il = Yn = null), (Sn = 0), (Ce & 6) !== 0))
        throw Error(r(331));
      var p = Ce;
      if (
        ((Ce |= 4),
        yh(u.current),
        hh(u, u.current, f, n),
        (Ce = p),
        Wa(0, !1),
        mt && typeof mt.onPostCommitFiberRoot == "function")
      )
        try {
          mt.onPostCommitFiberRoot(ya, u);
        } catch {}
      return !0;
    } finally {
      (V.p = i), (N.T = l), jh(e, t);
    }
  }
  function Hh(e, t, n) {
    (t = _t(n, t)),
      (t = Mo(e.stateNode, t, 2)),
      (e = jn(e, t, 2)),
      e !== null && (ga(e, 2), $t(e));
  }
  function Re(e, t, n) {
    if (e.tag === 3) Hh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(l)))
          ) {
            (e = _t(n, e)),
              (n = Ld(2)),
              (l = jn(t, n, 2)),
              l !== null && (Bd(n, l, t, e), ga(l, 2), $t(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function tr(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $g();
      var i = new Set();
      l.set(t, i);
    } else (i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i));
    i.has(n) ||
      ((Zo = !0), i.add(n), (e = tb.bind(null, e, t, n)), t.then(e, e));
  }
  function tb(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      je === e &&
        (xe & n) === n &&
        (qe === 4 || (qe === 3 && (xe & 62914560) === xe && 300 > ht() - fs)
          ? (Ce & 2) === 0 && ea(e, 0)
          : (Jo |= n),
        Wl === xe && (Wl = 0)),
      $t(e);
  }
  function Lh(e, t) {
    t === 0 && (t = Mc()), (e = ol(e, t)), e !== null && (ga(e, t), $t(e));
  }
  function nb(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Lh(e, n);
  }
  function lb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), Lh(e, n);
  }
  function ab(e, t) {
    return hu(e, t);
  }
  var gs = null,
    na = null,
    nr = !1,
    bs = !1,
    lr = !1,
    Vn = 0;
  function $t(e) {
    e !== na &&
      e.next === null &&
      (na === null ? (gs = na = e) : (na = na.next = e)),
      (bs = !0),
      nr || ((nr = !0), sb());
  }
  function Wa(e, t) {
    if (!lr && bs) {
      lr = !0;
      do
        for (var n = !1, l = gs; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = l.suspendedLanes,
                p = l.pingedLanes;
              (u = (1 << (31 - pt(42 | e) + 1)) - 1),
                (u &= i & ~(f & ~p)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), Yh(l, u));
          } else
            (u = xe),
              (u = Ti(
                l,
                l === je ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || va(l, u) || ((n = !0), Yh(l, u));
          l = l.next;
        }
      while (n);
      lr = !1;
    }
  }
  function ib() {
    Bh();
  }
  function Bh() {
    bs = nr = !1;
    var e = 0;
    Vn !== 0 && yb() && (e = Vn);
    for (var t = ht(), n = null, l = gs; l !== null; ) {
      var i = l.next,
        u = qh(l, t);
      u === 0
        ? ((l.next = null),
          n === null ? (gs = i) : (n.next = i),
          i === null && (na = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (bs = !0)),
        (l = i);
    }
    (Ze !== 0 && Ze !== 5) || Wa(e), Vn !== 0 && (Vn = 0);
  }
  function qh(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var f = 31 - pt(u),
        p = 1 << f,
        E = i[f];
      E === -1
        ? ((p & n) === 0 || (p & l) !== 0) && (i[f] = Dv(p, t))
        : E <= t && (e.expiredLanes |= p),
        (u &= ~p);
    }
    if (
      ((t = je),
      (n = xe),
      (n = Ti(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Ne === 2 || Ne === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && mu(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || va(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && mu(l), vu(n))) {
        case 2:
        case 8:
          n = Nc;
          break;
        case 32:
          n = bi;
          break;
        case 268435456:
          n = Rc;
          break;
        default:
          n = bi;
      }
      return (
        (l = Gh.bind(null, e)),
        (n = hu(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && mu(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Gh(e, t) {
    if (Ze !== 0 && Ze !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (vs() && e.callbackNode !== n) return null;
    var l = xe;
    return (
      (l = Ti(
        e,
        e === je ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (xh(e, l, t),
          qh(e, ht()),
          e.callbackNode != null && e.callbackNode === n
            ? Gh.bind(null, e)
            : null)
    );
  }
  function Yh(e, t) {
    if (vs()) return null;
    xh(e, t, !0);
  }
  function sb() {
    gb(function () {
      (Ce & 6) !== 0 ? hu(Cc, ib) : Bh();
    });
  }
  function ar() {
    if (Vn === 0) {
      var e = Yl;
      e === 0 && ((e = Si), (Si <<= 1), (Si & 261888) === 0 && (Si = 256)),
        (Vn = e);
    }
    return Vn;
  }
  function Xh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Ci("" + e);
  }
  function Vh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function ub(e, t, n, l, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var u = Xh((i[it] || null).action),
        f = l.submitter;
      f &&
        ((t = (t = f[it] || null)
          ? Xh(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((u = t), (f = null)));
      var p = new _i("action", "action", null, l, i);
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Vn !== 0) {
                  var E = f ? Vh(i, f) : new FormData(i);
                  wo(
                    n,
                    { pending: !0, data: E, method: i.method, action: u },
                    null,
                    E
                  );
                }
              } else
                typeof u == "function" &&
                  (p.preventDefault(),
                  (E = f ? Vh(i, f) : new FormData(i)),
                  wo(
                    n,
                    { pending: !0, data: E, method: i.method, action: u },
                    u,
                    E
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var ir = 0; ir < Gu.length; ir++) {
    var sr = Gu[ir],
      ob = sr.toLowerCase(),
      rb = sr[0].toUpperCase() + sr.slice(1);
    qt(ob, "on" + rb);
  }
  qt(Sf, "onAnimationEnd"),
    qt(xf, "onAnimationIteration"),
    qt(Ef, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(Ag, "onTransitionRun"),
    qt(Og, "onTransitionStart"),
    qt(Cg, "onTransitionCancel"),
    qt(Tf, "onTransitionEnd"),
    Cl("onMouseEnter", ["mouseout", "mouseover"]),
    Cl("onMouseLeave", ["mouseout", "mouseover"]),
    Cl("onPointerEnter", ["pointerout", "pointerover"]),
    Cl("onPointerLeave", ["pointerout", "pointerover"]),
    al(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    al(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    al("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    al(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    al(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    al(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ia =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    cb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ia)
    );
  function Qh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        i = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var p = l[f],
              E = p.instance,
              M = p.currentTarget;
            if (((p = p.listener), E !== u && i.isPropagationStopped()))
              break e;
            (u = p), (i.currentTarget = M);
            try {
              u(i);
            } catch (L) {
              ji(L);
            }
            (i.currentTarget = null), (u = E);
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((p = l[f]),
              (E = p.instance),
              (M = p.currentTarget),
              (p = p.listener),
              E !== u && i.isPropagationStopped())
            )
              break e;
            (u = p), (i.currentTarget = M);
            try {
              u(i);
            } catch (L) {
              ji(L);
            }
            (i.currentTarget = null), (u = E);
          }
      }
    }
  }
  function Se(e, t) {
    var n = t[gu];
    n === void 0 && (n = t[gu] = new Set());
    var l = e + "__bubble";
    n.has(l) || (kh(t, e, 2, !1), n.add(l));
  }
  function ur(e, t, n) {
    var l = 0;
    t && (l |= 4), kh(n, e, l, t);
  }
  var Ss = "_reactListening" + Math.random().toString(36).slice(2);
  function or(e) {
    if (!e[Ss]) {
      (e[Ss] = !0),
        Lc.forEach(function (n) {
          n !== "selectionchange" && (cb.has(n) || ur(n, !1, e), ur(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ss] || ((t[Ss] = !0), ur("selectionchange", !1, t));
    }
  }
  function kh(e, t, n, l) {
    switch (Sm(t)) {
      case 2:
        var i = Bb;
        break;
      case 8:
        i = qb;
        break;
      default:
        i = Tr;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Cu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function rr(e, t, n, l, i) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var p = l.stateNode.containerInfo;
          if (p === i) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = wl(p)), f === null)) return;
            if (((E = f.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = u = f;
              continue e;
            }
            p = p.parentNode;
          }
        }
        l = l.return;
      }
    Fc(function () {
      var M = u,
        L = Au(n),
        G = [];
      e: {
        var D = wf.get(e);
        if (D !== void 0) {
          var U = _i,
            I = e;
          switch (e) {
            case "keypress":
              if (Ri(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = lg;
              break;
            case "focusin":
              (I = "focus"), (U = _u);
              break;
            case "focusout":
              (I = "blur"), (U = _u);
              break;
            case "beforeblur":
            case "afterblur":
              U = _u;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = sg;
              break;
            case Sf:
            case xf:
            case Ef:
              U = Jv;
              break;
            case Tf:
              U = og;
              break;
            case "scroll":
            case "scrollend":
              U = Vv;
              break;
            case "wheel":
              U = cg;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = $v;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = ef;
              break;
            case "toggle":
            case "beforetoggle":
              U = dg;
          }
          var se = (t & 4) !== 0,
            ze = !se && (e === "scroll" || e === "scrollend"),
            O = se ? (D !== null ? D + "Capture" : null) : D;
          se = [];
          for (var w = M, R; w !== null; ) {
            var q = w;
            if (
              ((R = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                R === null ||
                O === null ||
                ((q = xa(w, O)), q != null && se.push(ei(w, q, R))),
              ze)
            )
              break;
            w = w.return;
          }
          0 < se.length &&
            ((D = new U(D, I, null, n, L)),
            G.push({ event: D, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            D &&
              n !== wu &&
              (I = n.relatedTarget || n.fromElement) &&
              (wl(I) || I[Tl]))
          )
            break e;
          if (
            (U || D) &&
            ((D =
              L.window === L
                ? L
                : (D = L.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            U
              ? ((I = n.relatedTarget || n.toElement),
                (U = M),
                (I = I ? wl(I) : null),
                I !== null &&
                  ((ze = d(I)),
                  (se = I.tag),
                  I !== ze || (se !== 5 && se !== 27 && se !== 6)) &&
                  (I = null))
              : ((U = null), (I = M)),
            U !== I)
          ) {
            if (
              ((se = Wc),
              (q = "onMouseLeave"),
              (O = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((se = ef),
                (q = "onPointerLeave"),
                (O = "onPointerEnter"),
                (w = "pointer")),
              (ze = U == null ? D : Sa(U)),
              (R = I == null ? D : Sa(I)),
              (D = new se(q, w + "leave", U, n, L)),
              (D.target = ze),
              (D.relatedTarget = R),
              (q = null),
              wl(L) === M &&
                ((se = new se(O, w + "enter", I, n, L)),
                (se.target = R),
                (se.relatedTarget = ze),
                (q = se)),
              (ze = q),
              U && I)
            )
              t: {
                for (se = fb, O = U, w = I, R = 0, q = O; q; q = se(q)) R++;
                q = 0;
                for (var ae = w; ae; ae = se(ae)) q++;
                for (; 0 < R - q; ) (O = se(O)), R--;
                for (; 0 < q - R; ) (w = se(w)), q--;
                for (; R--; ) {
                  if (O === w || (w !== null && O === w.alternate)) {
                    se = O;
                    break t;
                  }
                  (O = se(O)), (w = se(w));
                }
                se = null;
              }
            else se = null;
            U !== null && Kh(G, D, U, se, !1),
              I !== null && ze !== null && Kh(G, ze, I, se, !0);
          }
        }
        e: {
          if (
            ((D = M ? Sa(M) : window),
            (U = D.nodeName && D.nodeName.toLowerCase()),
            U === "select" || (U === "input" && D.type === "file"))
          )
            var Ae = rf;
          else if (uf(D))
            if (cf) Ae = Eg;
            else {
              Ae = Sg;
              var ne = bg;
            }
          else
            (U = D.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? M && Tu(M.elementType) && (Ae = rf)
                : (Ae = xg);
          if (Ae && (Ae = Ae(e, M))) {
            of(G, Ae, n, L);
            break e;
          }
          ne && ne(e, D, M),
            e === "focusout" &&
              M &&
              D.type === "number" &&
              M.memoizedProps.value != null &&
              Eu(D, "number", D.value);
        }
        switch (((ne = M ? Sa(M) : window), e)) {
          case "focusin":
            (uf(ne) || ne.contentEditable === "true") &&
              ((zl = ne), (Lu = M), (Ra = null));
            break;
          case "focusout":
            Ra = Lu = zl = null;
            break;
          case "mousedown":
            Bu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Bu = !1), gf(G, n, L);
            break;
          case "selectionchange":
            if (wg) break;
          case "keydown":
          case "keyup":
            gf(G, n, L);
        }
        var pe;
        if (zu)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Dl
            ? af(e, n) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ee = "onCompositionStart");
        Ee &&
          (tf &&
            n.locale !== "ko" &&
            (Dl || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && Dl && (pe = $c())
              : ((Cn = L),
                (Nu = "value" in Cn ? Cn.value : Cn.textContent),
                (Dl = !0))),
          (ne = xs(M, Ee)),
          0 < ne.length &&
            ((Ee = new Ic(Ee, e, null, n, L)),
            G.push({ event: Ee, listeners: ne }),
            pe
              ? (Ee.data = pe)
              : ((pe = sf(n)), pe !== null && (Ee.data = pe)))),
          (pe = mg ? pg(e, n) : yg(e, n)) &&
            ((Ee = xs(M, "onBeforeInput")),
            0 < Ee.length &&
              ((ne = new Ic("onBeforeInput", "beforeinput", null, n, L)),
              G.push({ event: ne, listeners: Ee }),
              (ne.data = pe))),
          ub(G, e, M, n, L);
      }
      Qh(G, t);
    });
  }
  function ei(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function xs(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var i = e,
        u = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          u === null ||
          ((i = xa(e, n)),
          i != null && l.unshift(ei(e, i, u)),
          (i = xa(e, t)),
          i != null && l.push(ei(e, i, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function fb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Kh(e, t, n, l, i) {
    for (var u = t._reactName, f = []; n !== null && n !== l; ) {
      var p = n,
        E = p.alternate,
        M = p.stateNode;
      if (((p = p.tag), E !== null && E === l)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        M === null ||
        ((E = M),
        i
          ? ((M = xa(n, u)), M != null && f.unshift(ei(n, M, E)))
          : i || ((M = xa(n, u)), M != null && f.push(ei(n, M, E)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var db = /\r\n?/g,
    hb = /\u0000|\uFFFD/g;
  function Zh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        db,
        `
`
      )
      .replace(hb, "");
  }
  function Jh(e, t) {
    return (t = Zh(t)), Zh(e) === t;
  }
  function De(e, t, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Rl(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Rl(e, "" + l);
        break;
      case "className":
        Ai(e, "class", l);
        break;
      case "tabIndex":
        Ai(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ai(e, n, l);
        break;
      case "style":
        Zc(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Ai(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = Ci("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (t !== "input" && De(e, t, "name", i.name, i, null),
                De(e, t, "formEncType", i.formEncType, i, null),
                De(e, t, "formMethod", i.formMethod, i, null),
                De(e, t, "formTarget", i.formTarget, i, null))
              : (De(e, t, "encType", i.encType, i, null),
                De(e, t, "method", i.method, i, null),
                De(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = Ci("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = an);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Ci("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), wi(e, "popover", l);
        break;
      case "xlinkActuate":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        wi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Yv.get(n) || n), wi(e, n, l));
    }
  }
  function cr(e, t, n, l, i, u) {
    switch (n) {
      case "style":
        Zc(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Rl(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Rl(e, "" + l);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = an);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Bc.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (u = e[it] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && e.removeEventListener(t, u, i),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, i);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
              ? e.setAttribute(n, "")
              : wi(e, n, l);
          }
    }
  }
  function tt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Se("error", e), Se("load", e);
        var l = !1,
          i = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  De(e, t, u, f, n, null);
              }
          }
        i && De(e, t, "srcSet", n.srcSet, n, null),
          l && De(e, t, "src", n.src, n, null);
        return;
      case "input":
        Se("invalid", e);
        var p = (u = f = i = null),
          E = null,
          M = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var L = n[l];
            if (L != null)
              switch (l) {
                case "name":
                  i = L;
                  break;
                case "type":
                  f = L;
                  break;
                case "checked":
                  E = L;
                  break;
                case "defaultChecked":
                  M = L;
                  break;
                case "value":
                  u = L;
                  break;
                case "defaultValue":
                  p = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(r(137, t));
                  break;
                default:
                  De(e, t, l, L, n, null);
              }
          }
        Vc(e, u, p, E, M, f, i, !1);
        return;
      case "select":
        Se("invalid", e), (l = f = u = null);
        for (i in n)
          if (n.hasOwnProperty(i) && ((p = n[i]), p != null))
            switch (i) {
              case "value":
                u = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                l = p;
              default:
                De(e, t, i, p, n, null);
            }
        (t = u),
          (n = f),
          (e.multiple = !!l),
          t != null ? Nl(e, !!l, t, !1) : n != null && Nl(e, !!l, n, !0);
        return;
      case "textarea":
        Se("invalid", e), (u = i = l = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((p = n[f]), p != null))
            switch (f) {
              case "value":
                l = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
                u = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                De(e, t, f, p, n, null);
            }
        kc(e, l, i, u);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((l = n[E]), l != null))
            switch (E) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                De(e, t, E, l, n, null);
            }
        return;
      case "dialog":
        Se("beforetoggle", e), Se("toggle", e), Se("cancel", e), Se("close", e);
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ia.length; l++) Se(Ia[l], e);
        break;
      case "image":
        Se("error", e), Se("load", e);
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Se("error", e), Se("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n)
          if (n.hasOwnProperty(M) && ((l = n[M]), l != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                De(e, t, M, l, n, null);
            }
        return;
      default:
        if (Tu(t)) {
          for (L in n)
            n.hasOwnProperty(L) &&
              ((l = n[L]), l !== void 0 && cr(e, t, L, l, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((l = n[p]), l != null && De(e, t, p, l, n, null));
  }
  function mb(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          u = null,
          f = null,
          p = null,
          E = null,
          M = null,
          L = null;
        for (U in n) {
          var G = n[U];
          if (n.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = G;
              default:
                l.hasOwnProperty(U) || De(e, t, U, null, l, G);
            }
        }
        for (var D in l) {
          var U = l[D];
          if (((G = n[D]), l.hasOwnProperty(D) && (U != null || G != null)))
            switch (D) {
              case "type":
                u = U;
                break;
              case "name":
                i = U;
                break;
              case "checked":
                M = U;
                break;
              case "defaultChecked":
                L = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                p = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, t));
                break;
              default:
                U !== G && De(e, t, D, U, l, G);
            }
        }
        xu(e, f, p, E, M, L, u, i);
        return;
      case "select":
        U = f = p = D = null;
        for (u in n)
          if (((E = n[u]), n.hasOwnProperty(u) && E != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = E;
              default:
                l.hasOwnProperty(u) || De(e, t, u, null, l, E);
            }
        for (i in l)
          if (
            ((u = l[i]),
            (E = n[i]),
            l.hasOwnProperty(i) && (u != null || E != null))
          )
            switch (i) {
              case "value":
                D = u;
                break;
              case "defaultValue":
                p = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== E && De(e, t, i, u, l, E);
            }
        (t = p),
          (n = f),
          (l = U),
          D != null
            ? Nl(e, !!n, D, !1)
            : !!l != !!n &&
              (t != null ? Nl(e, !!n, t, !0) : Nl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (p in n)
          if (
            ((i = n[p]),
            n.hasOwnProperty(p) && i != null && !l.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, p, null, l, i);
            }
        for (f in l)
          if (
            ((i = l[f]),
            (u = n[f]),
            l.hasOwnProperty(f) && (i != null || u != null))
          )
            switch (f) {
              case "value":
                D = i;
                break;
              case "defaultValue":
                U = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(r(91));
                break;
              default:
                i !== u && De(e, t, f, i, l, u);
            }
        Qc(e, D, U);
        return;
      case "option":
        for (var I in n)
          if (
            ((D = n[I]),
            n.hasOwnProperty(I) && D != null && !l.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                e.selected = !1;
                break;
              default:
                De(e, t, I, null, l, D);
            }
        for (E in l)
          if (
            ((D = l[E]),
            (U = n[E]),
            l.hasOwnProperty(E) && D !== U && (D != null || U != null))
          )
            switch (E) {
              case "selected":
                e.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                De(e, t, E, D, l, U);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in n)
          (D = n[se]),
            n.hasOwnProperty(se) &&
              D != null &&
              !l.hasOwnProperty(se) &&
              De(e, t, se, null, l, D);
        for (M in l)
          if (
            ((D = l[M]),
            (U = n[M]),
            l.hasOwnProperty(M) && D !== U && (D != null || U != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(r(137, t));
                break;
              default:
                De(e, t, M, D, l, U);
            }
        return;
      default:
        if (Tu(t)) {
          for (var ze in n)
            (D = n[ze]),
              n.hasOwnProperty(ze) &&
                D !== void 0 &&
                !l.hasOwnProperty(ze) &&
                cr(e, t, ze, void 0, l, D);
          for (L in l)
            (D = l[L]),
              (U = n[L]),
              !l.hasOwnProperty(L) ||
                D === U ||
                (D === void 0 && U === void 0) ||
                cr(e, t, L, D, l, U);
          return;
        }
    }
    for (var O in n)
      (D = n[O]),
        n.hasOwnProperty(O) &&
          D != null &&
          !l.hasOwnProperty(O) &&
          De(e, t, O, null, l, D);
    for (G in l)
      (D = l[G]),
        (U = n[G]),
        !l.hasOwnProperty(G) ||
          D === U ||
          (D == null && U == null) ||
          De(e, t, G, D, l, U);
  }
  function Fh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var i = n[l],
          u = i.transferSize,
          f = i.initiatorType,
          p = i.duration;
        if (u && p && Fh(f)) {
          for (f = 0, p = i.responseEnd, l += 1; l < n.length; l++) {
            var E = n[l],
              M = E.startTime;
            if (M > p) break;
            var L = E.transferSize,
              G = E.initiatorType;
            L &&
              Fh(G) &&
              ((E = E.responseEnd), (f += L * (E < p ? 1 : (p - M) / (E - M))));
          }
          if ((--l, (t += (8 * (u + f)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var fr = null,
    dr = null;
  function Es(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $h(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ph(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function hr(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var mr = null;
  function yb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === mr
        ? !1
        : ((mr = e), !0)
      : ((mr = null), !1);
  }
  var Wh = typeof setTimeout == "function" ? setTimeout : void 0,
    vb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ih = typeof Promise == "function" ? Promise : void 0,
    gb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ih < "u"
        ? function (e) {
            return Ih.resolve(null).then(e).catch(bb);
          }
        : Wh;
  function bb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qn(e) {
    return e === "head";
  }
  function em(e, t) {
    var n = t,
      l = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            e.removeChild(i), sa(t);
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") ti(e.ownerDocument.documentElement);
        else if (n === "head") {
          (n = e.ownerDocument.head), ti(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling,
              p = u.nodeName;
            u[ba] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(u),
              (u = f);
          }
        } else n === "body" && ti(e.ownerDocument.body);
      n = i;
    } while (n);
    sa(t);
  }
  function tm(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }
  function pr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          pr(n), bu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Sb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[ba])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Ht(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function xb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function nm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function yr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function vr(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Eb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var gr = null;
  function lm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Ht(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function am(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function im(e, t, n) {
    switch (((t = Es(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function ti(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    bu(e);
  }
  var Lt = new Map(),
    sm = new Set();
  function Ts(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var xn = V.d;
  V.d = { f: Tb, r: wb, D: Ab, C: Ob, L: Cb, m: Nb, X: Mb, S: Rb, M: _b };
  function Tb() {
    var e = xn.f(),
      t = ms();
    return e || t;
  }
  function wb(e) {
    var t = Al(e);
    t !== null && t.tag === 5 && t.type === "form" ? Td(t) : xn.r(e);
  }
  var la = typeof document > "u" ? null : document;
  function um(e, t, n) {
    var l = la;
    if (l && typeof t == "string" && t) {
      var i = Rt(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        sm.has(i) ||
          (sm.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            tt(t, "link", e),
            Fe(t),
            l.head.appendChild(t)));
    }
  }
  function Ab(e) {
    xn.D(e), um("dns-prefetch", e, null);
  }
  function Ob(e, t) {
    xn.C(e, t), um("preconnect", e, t);
  }
  function Cb(e, t, n) {
    xn.L(e, t, n);
    var l = la;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Rt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + Rt(n.imageSizes) + '"]'))
        : (i += '[href="' + Rt(e) + '"]');
      var u = i;
      switch (t) {
        case "style":
          u = aa(e);
          break;
        case "script":
          u = ia(e);
      }
      Lt.has(u) ||
        ((e = x(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Lt.set(u, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(ni(u))) ||
          (t === "script" && l.querySelector(li(u))) ||
          ((t = l.createElement("link")),
          tt(t, "link", e),
          Fe(t),
          l.head.appendChild(t)));
    }
  }
  function Nb(e, t) {
    xn.m(e, t);
    var n = la;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Rt(l) + '"][href="' + Rt(e) + '"]',
        u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ia(e);
      }
      if (
        !Lt.has(u) &&
        ((e = x({ rel: "modulepreload", href: e }, t)),
        Lt.set(u, e),
        n.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(li(u))) return;
        }
        (l = n.createElement("link")),
          tt(l, "link", e),
          Fe(l),
          n.head.appendChild(l);
      }
    }
  }
  function Rb(e, t, n) {
    xn.S(e, t, n);
    var l = la;
    if (l && e) {
      var i = Ol(l).hoistableStyles,
        u = aa(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = l.querySelector(ni(u)))) p.loading = 5;
        else {
          (e = x({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Lt.get(u)) && br(e, n);
          var E = (f = l.createElement("link"));
          Fe(E),
            tt(E, "link", e),
            (E._p = new Promise(function (M, L) {
              (E.onload = M), (E.onerror = L);
            })),
            E.addEventListener("load", function () {
              p.loading |= 1;
            }),
            E.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            ws(f, t, l);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: p }),
          i.set(u, f);
      }
    }
  }
  function Mb(e, t) {
    xn.X(e, t);
    var n = la;
    if (n && e) {
      var l = Ol(n).hoistableScripts,
        i = ia(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(li(i))),
        u ||
          ((e = x({ src: e, async: !0 }, t)),
          (t = Lt.get(i)) && Sr(e, t),
          (u = n.createElement("script")),
          Fe(u),
          tt(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function _b(e, t) {
    xn.M(e, t);
    var n = la;
    if (n && e) {
      var l = Ol(n).hoistableScripts,
        i = ia(e),
        u = l.get(i);
      u ||
        ((u = n.querySelector(li(i))),
        u ||
          ((e = x({ src: e, async: !0, type: "module" }, t)),
          (t = Lt.get(i)) && Sr(e, t),
          (u = n.createElement("script")),
          Fe(u),
          tt(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(i, u));
    }
  }
  function om(e, t, n, l) {
    var i = (i = de.current) ? Ts(i) : null;
    if (!i) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = aa(n.href)),
            (n = Ol(i).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = aa(n.href);
          var u = Ol(i).hoistableStyles,
            f = u.get(e);
          if (
            (f ||
              ((i = i.ownerDocument || i),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, f),
              (u = i.querySelector(ni(e))) &&
                !u._p &&
                ((f.instance = u), (f.state.loading = 5)),
              Lt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Lt.set(e, n),
                u || Db(i, e, n, f.state))),
            t && l === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (t && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ia(n)),
              (n = Ol(i).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function aa(e) {
    return 'href="' + Rt(e) + '"';
  }
  function ni(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rm(e) {
    return x({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Db(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        tt(t, "link", n),
        Fe(t),
        e.head.appendChild(t));
  }
  function ia(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function li(e) {
    return "script[async]" + e;
  }
  function cm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Rt(n.href) + '"]');
          if (l) return (t.instance = l), Fe(l), l;
          var i = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Fe(l),
            tt(l, "style", i),
            ws(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = aa(n.href);
          var u = e.querySelector(ni(i));
          if (u) return (t.state.loading |= 4), (t.instance = u), Fe(u), u;
          (l = rm(n)),
            (i = Lt.get(i)) && br(l, i),
            (u = (e.ownerDocument || e).createElement("link")),
            Fe(u);
          var f = u;
          return (
            (f._p = new Promise(function (p, E) {
              (f.onload = p), (f.onerror = E);
            })),
            tt(u, "link", l),
            (t.state.loading |= 4),
            ws(u, n.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = ia(n.src)),
            (i = e.querySelector(li(u)))
              ? ((t.instance = i), Fe(i), i)
              : ((l = n),
                (i = Lt.get(u)) && ((l = x({}, n)), Sr(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Fe(i),
                tt(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), ws(l, n.precedence, e));
    return t.instance;
  }
  function ws(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = l.length ? l[l.length - 1] : null,
        u = i,
        f = 0;
      f < l.length;
      f++
    ) {
      var p = l[f];
      if (p.dataset.precedence === t) u = p;
      else if (u !== i) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function br(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Sr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var As = null;
  function fm(e, t, n) {
    if (As === null) {
      var l = new Map(),
        i = (As = new Map());
      i.set(n, l);
    } else (i = As), (l = i.get(n)), l || ((l = new Map()), i.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var u = n[i];
      if (
        !(
          u[ba] ||
          u[Pe] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var p = l.get(f);
        p ? p.push(u) : l.set(f, [u]);
      }
    }
    return l;
  }
  function dm(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function zb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function hm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function jb(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = aa(l.href),
          u = t.querySelector(ni(i));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Os.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            Fe(u);
          return;
        }
        (u = t.ownerDocument || t),
          (l = rm(l)),
          (i = Lt.get(i)) && br(l, i),
          (u = u.createElement("link")),
          Fe(u);
        var f = u;
        (f._p = new Promise(function (p, E) {
          (f.onload = p), (f.onerror = E);
        })),
          tt(u, "link", l),
          (n.instance = u);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Os.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  var xr = 0;
  function Ub(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ns(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Ns(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < e.imgBytes && xr === 0 && (xr = 62500 * pb());
            var i = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Ns(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, (e.imgBytes > xr ? 50 : 800) + t);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(l), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function Os() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ns(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Cs = null;
  function Ns(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Cs = new Map()),
        t.forEach(Hb, e),
        (Cs = null),
        Os.call(e));
  }
  function Hb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Cs.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Cs.set(e, n);
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < i.length;
          u++
        ) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (l = f));
        }
        l && n.set(null, l);
      }
      (i = t.instance),
        (f = i.getAttribute("data-precedence")),
        (u = n.get(f) || l),
        u === l && n.set(null, i),
        n.set(f, i),
        this.count++,
        (l = Os.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(i, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var ai = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0,
  };
  function Lb(e, t, n, l, i, u, f, p, E) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = pu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pu(0)),
      (this.hiddenUpdates = pu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = u),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function mm(e, t, n, l, i, u, f, p, E, M, L, G) {
    return (
      (e = new Lb(e, t, n, f, E, M, L, G, p)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Iu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      lo(u),
      e
    );
  }
  function pm(e) {
    return e ? ((e = Hl), e) : Hl;
  }
  function ym(e, t, n, l, i, u) {
    (i = pm(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = zn(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = jn(e, l, t)),
      n !== null && (ft(n, e, t), Ha(n, e, t));
  }
  function vm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Er(e, t) {
    vm(e, t), (e = e.alternate) && vm(e, t);
  }
  function gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ol(e, 67108864);
      t !== null && ft(t, e, 67108864), Er(e, 67108864);
    }
  }
  function bm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Et();
      t = yu(t);
      var n = ol(e, t);
      n !== null && ft(n, e, t), Er(e, t);
    }
  }
  var Rs = !0;
  function Bb(e, t, n, l) {
    var i = N.T;
    N.T = null;
    var u = V.p;
    try {
      (V.p = 2), Tr(e, t, n, l);
    } finally {
      (V.p = u), (N.T = i);
    }
  }
  function qb(e, t, n, l) {
    var i = N.T;
    N.T = null;
    var u = V.p;
    try {
      (V.p = 8), Tr(e, t, n, l);
    } finally {
      (V.p = u), (N.T = i);
    }
  }
  function Tr(e, t, n, l) {
    if (Rs) {
      var i = wr(l);
      if (i === null) rr(e, t, l, Ms, n), xm(e, l);
      else if (Yb(i, e, t, n, l)) l.stopPropagation();
      else if ((xm(e, l), t & 4 && -1 < Gb.indexOf(e))) {
        for (; i !== null; ) {
          var u = Al(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var f = ll(u.pendingLanes);
                  if (f !== 0) {
                    var p = u;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var E = 1 << (31 - pt(f));
                      (p.entanglements[1] |= E), (f &= ~E);
                    }
                    $t(u), (Ce & 6) === 0 && ((ds = ht() + 500), Wa(0));
                  }
                }
                break;
              case 31:
              case 13:
                (p = ol(u, 2)), p !== null && ft(p, u, 2), ms(), Er(u, 2);
            }
          if (((u = wr(l)), u === null && rr(e, t, l, Ms, n), u === i)) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else rr(e, t, l, null, n);
    }
  }
  function wr(e) {
    return (e = Au(e)), Ar(e);
  }
  var Ms = null;
  function Ar(e) {
    if (((Ms = null), (e = wl(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Ms = e), null;
  }
  function Sm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Av()) {
          case Cc:
            return 2;
          case Nc:
            return 8;
          case bi:
          case Ov:
            return 32;
          case Rc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Or = !1,
    kn = null,
    Kn = null,
    Zn = null,
    ii = new Map(),
    si = new Map(),
    Jn = [],
    Gb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function xm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        ii.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        si.delete(t.pointerId);
    }
  }
  function ui(e, t, n, l, i, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [i],
        }),
        t !== null && ((t = Al(t)), t !== null && gm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Yb(e, t, n, l, i) {
    switch (t) {
      case "focusin":
        return (kn = ui(kn, e, t, n, l, i)), !0;
      case "dragenter":
        return (Kn = ui(Kn, e, t, n, l, i)), !0;
      case "mouseover":
        return (Zn = ui(Zn, e, t, n, l, i)), !0;
      case "pointerover":
        var u = i.pointerId;
        return ii.set(u, ui(ii.get(u) || null, e, t, n, l, i)), !0;
      case "gotpointercapture":
        return (
          (u = i.pointerId), si.set(u, ui(si.get(u) || null, e, t, n, l, i)), !0
        );
    }
    return !1;
  }
  function Em(e) {
    var t = wl(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = m(n)), t !== null)) {
            (e.blockedOn = t),
              Uc(e.priority, function () {
                bm(n);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = g(n)), t !== null)) {
            (e.blockedOn = t),
              Uc(e.priority, function () {
                bm(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _s(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = wr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (wu = l), n.target.dispatchEvent(l), (wu = null);
      } else return (t = Al(n)), t !== null && gm(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Tm(e, t, n) {
    _s(e) && n.delete(t);
  }
  function Xb() {
    (Or = !1),
      kn !== null && _s(kn) && (kn = null),
      Kn !== null && _s(Kn) && (Kn = null),
      Zn !== null && _s(Zn) && (Zn = null),
      ii.forEach(Tm),
      si.forEach(Tm);
  }
  function Ds(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Or ||
        ((Or = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Xb)));
  }
  var zs = null;
  function wm(e) {
    zs !== e &&
      ((zs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        zs === e && (zs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (Ar(l || n) === null) continue;
            break;
          }
          var u = Al(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            wo(u, { pending: !0, data: i, method: n.method, action: l }, l, i));
        }
      }));
  }
  function sa(e) {
    function t(E) {
      return Ds(E, e);
    }
    kn !== null && Ds(kn, e),
      Kn !== null && Ds(Kn, e),
      Zn !== null && Ds(Zn, e),
      ii.forEach(t),
      si.forEach(t);
    for (var n = 0; n < Jn.length; n++) {
      var l = Jn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); )
      Em(n), n.blockedOn === null && Jn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var i = n[l],
          u = n[l + 1],
          f = i[it] || null;
        if (typeof u == "function") f || wm(n);
        else if (f) {
          var p = null;
          if (u && u.hasAttribute("formAction")) {
            if (((i = u), (f = u[it] || null))) p = f.formAction;
            else if (Ar(i) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? (n[l + 1] = p) : (n.splice(l, 3), (l -= 3)),
            wm(n);
        }
      }
  }
  function Am() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (i = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      i !== null && (i(), (i = null)), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null));
        }
      );
    }
  }
  function Cr(e) {
    this._internalRoot = e;
  }
  (js.prototype.render = Cr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var n = t.current,
        l = Et();
      ym(n, l, e, t, null, null);
    }),
    (js.prototype.unmount = Cr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ym(e.current, 2, null, e, null, null), ms(), (t[Tl] = null);
        }
      });
  function js(e) {
    this._internalRoot = e;
  }
  js.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = jc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
      Jn.splice(n, 0, e), n === 0 && Em(e);
    }
  };
  var Om = s.version;
  if (Om !== "19.2.0") throw Error(r(527, Om, "19.2.0"));
  V.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = h(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Vb = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Us.isDisabled && Us.supportsFiber)
      try {
        (ya = Us.inject(Vb)), (mt = Us);
      } catch {}
  }
  return (
    (ri.createRoot = function (e, t) {
      if (!c(e)) throw Error(r(299));
      var n = !1,
        l = "",
        i = zd,
        u = jd,
        f = Ud;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = mm(e, 1, !1, null, null, n, l, null, i, u, f, Am)),
        (e[Tl] = t.current),
        or(e),
        new Cr(t)
      );
    }),
    (ri.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(r(299));
      var l = !1,
        i = "",
        u = zd,
        f = jd,
        p = Ud,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (t = mm(e, 1, !0, t, n ?? null, l, i, E, u, f, p, Am)),
        (t.context = pm(null)),
        (n = t.current),
        (l = Et()),
        (l = yu(l)),
        (i = zn(l)),
        (i.callback = null),
        jn(n, i, l),
        (n = l),
        (t.current.lanes = n),
        ga(t, n),
        $t(t),
        (e[Tl] = t.current),
        or(e),
        new js(t)
      );
    }),
    (ri.version = "19.2.0"),
    ri
  );
}
var Hm;
function Ib() {
  if (Hm) return Rr.exports;
  Hm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (s) {
        console.error(s);
      }
  }
  return a(), (Rr.exports = Wb()), Rr.exports;
}
var e0 = Ib();
function t0(a, s) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var o,
    r,
    c,
    d,
    m = [],
    g = "",
    y = a.split("/");
  for (y[0] || y.shift(); (c = y.shift()); )
    (o = c[0]),
      o === "*"
        ? (m.push(o), (g += c[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : o === ":"
        ? ((r = c.indexOf("?", 1)),
          (d = c.indexOf(".", 1)),
          m.push(c.substring(1, ~r ? r : ~d ? d : c.length)),
          (g += ~r && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~d && (g += (~r ? "?" : "") + "\\" + c.substring(d)))
        : (g += "/" + c);
  return {
    keys: m,
    pattern: new RegExp("^" + g + (s ? "(?=$|/)" : "/?$"), "i"),
  };
}
var S = Ps();
const Pn = Cp(S),
  n0 = kb({ __proto__: null, default: Pn }, [S]);
var jr = { exports: {} },
  Ur = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm;
function l0() {
  if (Lm) return Ur;
  Lm = 1;
  var a = Ps();
  function s(x, A) {
    return (x === A && (x !== 0 || 1 / x === 1 / A)) || (x !== x && A !== A);
  }
  var o = typeof Object.is == "function" ? Object.is : s,
    r = a.useState,
    c = a.useEffect,
    d = a.useLayoutEffect,
    m = a.useDebugValue;
  function g(x, A) {
    var _ = A(),
      z = r({ inst: { value: _, getSnapshot: A } }),
      C = z[0].inst,
      j = z[1];
    return (
      d(
        function () {
          (C.value = _), (C.getSnapshot = A), y(C) && j({ inst: C });
        },
        [x, _, A]
      ),
      c(
        function () {
          return (
            y(C) && j({ inst: C }),
            x(function () {
              y(C) && j({ inst: C });
            })
          );
        },
        [x]
      ),
      m(_),
      _
    );
  }
  function y(x) {
    var A = x.getSnapshot;
    x = x.value;
    try {
      var _ = A();
      return !o(x, _);
    } catch {
      return !0;
    }
  }
  function h(x, A) {
    return A();
  }
  var b =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : g;
  return (
    (Ur.useSyncExternalStore =
      a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : b),
    Ur
  );
}
var Bm;
function a0() {
  return Bm || ((Bm = 1), (jr.exports = l0())), jr.exports;
}
var i0 = a0();
const s0 = n0.useInsertionEffect,
  u0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  o0 = u0 ? S.useLayoutEffect : S.useEffect,
  r0 = s0 || o0,
  Rp = (a) => {
    const s = S.useRef([a, (...o) => s[0](...o)]).current;
    return (
      r0(() => {
        s[0] = a;
      }),
      s[1]
    );
  },
  c0 = "popstate",
  ic = "pushState",
  sc = "replaceState",
  f0 = "hashchange",
  qm = [c0, ic, sc, f0],
  d0 = (a) => {
    for (const s of qm) addEventListener(s, a);
    return () => {
      for (const s of qm) removeEventListener(s, a);
    };
  },
  Mp = (a, s) => i0.useSyncExternalStore(d0, a, s),
  h0 = () => location.search,
  m0 = ({ ssrSearch: a = "" } = {}) => Mp(h0, () => a),
  Gm = () => location.pathname,
  p0 = ({ ssrPath: a } = {}) => Mp(Gm, a ? () => a : Gm),
  y0 = (a, { replace: s = !1, state: o = null } = {}) =>
    history[s ? sc : ic](o, "", a),
  v0 = (a = {}) => [p0(a), y0],
  Ym = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ym] > "u") {
  for (const a of [ic, sc]) {
    const s = history[a];
    history[a] = function () {
      const o = s.apply(this, arguments),
        r = new Event(a);
      return (r.arguments = arguments), dispatchEvent(r), o;
    };
  }
  Object.defineProperty(window, Ym, { value: !0 });
}
const g0 = (a, s) =>
    s.toLowerCase().indexOf(a.toLowerCase())
      ? "~" + s
      : s.slice(a.length) || "/",
  _p = (a = "") => (a === "/" ? "" : a),
  b0 = (a, s) => (a[0] === "~" ? a.slice(1) : _p(s) + a),
  S0 = (a = "", s) => g0(Xm(_p(a)), Xm(s)),
  Xm = (a) => {
    try {
      return decodeURI(a);
    } catch {
      return a;
    }
  },
  Dp = {
    hook: v0,
    searchHook: m0,
    parser: t0,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (a) => a,
  },
  zp = S.createContext(Dp),
  Ws = () => S.useContext(zp),
  jp = {},
  Up = S.createContext(jp),
  x0 = () => S.useContext(Up),
  uc = (a) => {
    const [s, o] = a.hook(a);
    return [S0(a.base, s), Rp((r, c) => o(b0(r, a.base), c))];
  },
  Hp = (a, s, o, r) => {
    const { pattern: c, keys: d } =
        s instanceof RegExp ? { keys: !1, pattern: s } : a(s || "*", r),
      m = c.exec(o) || [],
      [g, ...y] = m;
    return g !== void 0
      ? [
          !0,
          (() => {
            const h =
              d !== !1
                ? Object.fromEntries(d.map((x, A) => [x, y[A]]))
                : m.groups;
            let b = { ...y };
            return h && Object.assign(b, h), b;
          })(),
          ...(r ? [g] : []),
        ]
      : [!1, null];
  },
  E0 = ({ children: a, ...s }) => {
    const o = Ws(),
      r = s.hook ? Dp : o;
    let c = r;
    const [d, m] = s.ssrPath?.split("?") ?? [];
    m && ((s.ssrSearch = m), (s.ssrPath = d)),
      (s.hrefs = s.hrefs ?? s.hook?.hrefs);
    let g = S.useRef({}),
      y = g.current,
      h = y;
    for (let b in r) {
      const x = b === "base" ? r[b] + (s[b] || "") : s[b] || r[b];
      y === h && x !== h[b] && (g.current = h = { ...h }),
        (h[b] = x),
        x !== r[b] && (c = h);
    }
    return S.createElement(zp.Provider, { value: c, children: a });
  },
  Vm = ({ children: a, component: s }, o) =>
    s ? S.createElement(s, { params: o }) : typeof a == "function" ? a(o) : a,
  T0 = (a) => {
    let s = S.useRef(jp),
      o = s.current;
    for (const r in a) a[r] !== o[r] && (o = a);
    return Object.keys(a).length === 0 && (o = a), (s.current = o);
  },
  Qm = ({ path: a, nest: s, match: o, ...r }) => {
    const c = Ws(),
      [d] = uc(c),
      [m, g, y] = o ?? Hp(c.parser, a, d, s),
      h = T0({ ...x0(), ...g });
    if (!m) return null;
    const b = y ? S.createElement(E0, { base: y }, Vm(r, h)) : Vm(r, h);
    return S.createElement(Up.Provider, { value: h, children: b });
  };
S.forwardRef((a, s) => {
  const o = Ws(),
    [r, c] = uc(o),
    {
      to: d = "",
      href: m = d,
      onClick: g,
      asChild: y,
      children: h,
      className: b,
      replace: x,
      state: A,
      ..._
    } = a,
    z = Rp((j) => {
      j.ctrlKey ||
        j.metaKey ||
        j.altKey ||
        j.shiftKey ||
        j.button !== 0 ||
        (g?.(j), j.defaultPrevented || (j.preventDefault(), c(m, a)));
    }),
    C = o.hrefs(m[0] === "~" ? m.slice(1) : o.base + m, o);
  return y && S.isValidElement(h)
    ? S.cloneElement(h, { onClick: z, href: C })
    : S.createElement("a", {
        ..._,
        onClick: z,
        href: C,
        className: b?.call ? b(r === m) : b,
        children: h,
        ref: s,
      });
});
const Lp = (a) =>
    Array.isArray(a)
      ? a.flatMap((s) => Lp(s && s.type === S.Fragment ? s.props.children : s))
      : [a],
  w0 = ({ children: a, location: s }) => {
    const o = Ws(),
      [r] = uc(o);
    for (const c of Lp(a)) {
      let d = 0;
      if (
        S.isValidElement(c) &&
        (d = Hp(o.parser, c.props.path, s || r, c.props.nest))[0]
      )
        return S.cloneElement(c, { match: d });
    }
    return null;
  };
var Is = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  eu = typeof window > "u" || "Deno" in globalThis;
function Xt() {}
function A0(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function O0(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function C0(a, s) {
  return Math.max(a + (s || 0) - Date.now(), 0);
}
function km(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function N0(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function Km(a, s) {
  const {
    type: o = "all",
    exact: r,
    fetchStatus: c,
    predicate: d,
    queryKey: m,
    stale: g,
  } = a;
  if (m) {
    if (r) {
      if (s.queryHash !== oc(m, s.options)) return !1;
    } else if (!hi(s.queryKey, m)) return !1;
  }
  if (o !== "all") {
    const y = s.isActive();
    if ((o === "active" && !y) || (o === "inactive" && y)) return !1;
  }
  return !(
    (typeof g == "boolean" && s.isStale() !== g) ||
    (c && c !== s.state.fetchStatus) ||
    (d && !d(s))
  );
}
function Zm(a, s) {
  const { exact: o, status: r, predicate: c, mutationKey: d } = a;
  if (d) {
    if (!s.options.mutationKey) return !1;
    if (o) {
      if (di(s.options.mutationKey) !== di(d)) return !1;
    } else if (!hi(s.options.mutationKey, d)) return !1;
  }
  return !((r && s.state.status !== r) || (c && !c(s)));
}
function oc(a, s) {
  return (s?.queryKeyHashFn || di)(a);
}
function di(a) {
  return JSON.stringify(a, (s, o) =>
    kr(o)
      ? Object.keys(o)
          .sort()
          .reduce((r, c) => ((r[c] = o[c]), r), {})
      : o
  );
}
function hi(a, s) {
  return a === s
    ? !0
    : typeof a != typeof s
    ? !1
    : a && s && typeof a == "object" && typeof s == "object"
    ? !Object.keys(s).some((o) => !hi(a[o], s[o]))
    : !1;
}
function Bp(a, s) {
  if (a === s) return a;
  const o = Jm(a) && Jm(s);
  if (o || (kr(a) && kr(s))) {
    const r = o ? a : Object.keys(a),
      c = r.length,
      d = o ? s : Object.keys(s),
      m = d.length,
      g = o ? [] : {};
    let y = 0;
    for (let h = 0; h < m; h++) {
      const b = o ? h : d[h];
      ((!o && r.includes(b)) || o) && a[b] === void 0 && s[b] === void 0
        ? ((g[b] = void 0), y++)
        : ((g[b] = Bp(a[b], s[b])), g[b] === a[b] && a[b] !== void 0 && y++);
    }
    return c === m && y === c ? a : g;
  }
  return s;
}
function Jm(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function kr(a) {
  if (!Fm(a)) return !1;
  const s = a.constructor;
  if (s === void 0) return !0;
  const o = s.prototype;
  return !(
    !Fm(o) ||
    !o.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function Fm(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function R0(a) {
  return new Promise((s) => {
    setTimeout(s, a);
  });
}
function M0(a, s, o) {
  return typeof o.structuralSharing == "function"
    ? o.structuralSharing(a, s)
    : o.structuralSharing !== !1
    ? Bp(a, s)
    : s;
}
function _0(a, s, o = 0) {
  const r = [...a, s];
  return o && r.length > o ? r.slice(1) : r;
}
function D0(a, s, o = 0) {
  const r = [s, ...a];
  return o && r.length > o ? r.slice(0, -1) : r;
}
var rc = Symbol();
function qp(a, s) {
  return !a.queryFn && s?.initialPromise
    ? () => s.initialPromise
    : !a.queryFn || a.queryFn === rc
    ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
    : a.queryFn;
}
var z0 = class extends Is {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (a) => {
          if (!eu && window.addEventListener) {
            const s = () => a();
            return (
              window.addEventListener("visibilitychange", s, !1),
              () => {
                window.removeEventListener("visibilitychange", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#n = a),
        this.#t?.(),
        (this.#t = a((s) => {
          typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
        }));
    }
    setFocused(a) {
      this.#e !== a && ((this.#e = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((s) => {
        s(a);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Gp = new z0(),
  j0 = class extends Is {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (a) => {
          if (!eu && window.addEventListener) {
            const s = () => a(!0),
              o = () => a(!1);
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", o, !1),
              () => {
                window.removeEventListener("online", s),
                  window.removeEventListener("offline", o);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#n = a), this.#t?.(), (this.#t = a(this.setOnline.bind(this)));
    }
    setOnline(a) {
      this.#e !== a &&
        ((this.#e = a),
        this.listeners.forEach((o) => {
          o(a);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Ks = new j0();
function U0() {
  let a, s;
  const o = new Promise((c, d) => {
    (a = c), (s = d);
  });
  (o.status = "pending"), o.catch(() => {});
  function r(c) {
    Object.assign(o, c), delete o.resolve, delete o.reject;
  }
  return (
    (o.resolve = (c) => {
      r({ status: "fulfilled", value: c }), a(c);
    }),
    (o.reject = (c) => {
      r({ status: "rejected", reason: c }), s(c);
    }),
    o
  );
}
function H0(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function Yp(a) {
  return (a ?? "online") === "online" ? Ks.isOnline() : !0;
}
var Xp = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent);
  }
};
function Hr(a) {
  return a instanceof Xp;
}
function Vp(a) {
  let s = !1,
    o = 0,
    r = !1,
    c;
  const d = U0(),
    m = (C) => {
      r || (A(new Xp(C)), a.abort?.());
    },
    g = () => {
      s = !0;
    },
    y = () => {
      s = !1;
    },
    h = () =>
      Gp.isFocused() &&
      (a.networkMode === "always" || Ks.isOnline()) &&
      a.canRun(),
    b = () => Yp(a.networkMode) && a.canRun(),
    x = (C) => {
      r || ((r = !0), a.onSuccess?.(C), c?.(), d.resolve(C));
    },
    A = (C) => {
      r || ((r = !0), a.onError?.(C), c?.(), d.reject(C));
    },
    _ = () =>
      new Promise((C) => {
        (c = (j) => {
          (r || h()) && C(j);
        }),
          a.onPause?.();
      }).then(() => {
        (c = void 0), r || a.onContinue?.();
      }),
    z = () => {
      if (r) return;
      let C;
      const j = o === 0 ? a.initialPromise : void 0;
      try {
        C = j ?? a.fn();
      } catch (X) {
        C = Promise.reject(X);
      }
      Promise.resolve(C)
        .then(x)
        .catch((X) => {
          if (r) return;
          const k = a.retry ?? (eu ? 0 : 3),
            Q = a.retryDelay ?? H0,
            Z = typeof Q == "function" ? Q(o, X) : Q,
            $ =
              k === !0 ||
              (typeof k == "number" && o < k) ||
              (typeof k == "function" && k(o, X));
          if (s || !$) {
            A(X);
            return;
          }
          o++,
            a.onFail?.(o, X),
            R0(Z)
              .then(() => (h() ? void 0 : _()))
              .then(() => {
                s ? A(X) : z();
              });
        });
    };
  return {
    promise: d,
    cancel: m,
    continue: () => (c?.(), d),
    cancelRetry: g,
    continueRetry: y,
    canStart: b,
    start: () => (b() ? z() : _().then(z), d),
  };
}
function L0() {
  let a = [],
    s = 0,
    o = (g) => {
      g();
    },
    r = (g) => {
      g();
    },
    c = (g) => setTimeout(g, 0);
  const d = (g) => {
      s
        ? a.push(g)
        : c(() => {
            o(g);
          });
    },
    m = () => {
      const g = a;
      (a = []),
        g.length &&
          c(() => {
            r(() => {
              g.forEach((y) => {
                o(y);
              });
            });
          });
    };
  return {
    batch: (g) => {
      let y;
      s++;
      try {
        y = g();
      } finally {
        s--, s || m();
      }
      return y;
    },
    batchCalls:
      (g) =>
      (...y) => {
        d(() => {
          g(...y);
        });
      },
    schedule: d,
    setNotifyFunction: (g) => {
      o = g;
    },
    setBatchNotifyFunction: (g) => {
      r = g;
    },
    setScheduler: (g) => {
      c = g;
    },
  };
}
var at = L0(),
  Qp = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        O0(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(a) {
      this.gcTime = Math.max(this.gcTime || 0, a ?? (eu ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  B0 = class extends Qp {
    #e;
    #t;
    #n;
    #l;
    #s;
    #i;
    constructor(a) {
      super(),
        (this.#i = !1),
        (this.#s = a.defaultOptions),
        this.setOptions(a.options),
        (this.observers = []),
        (this.#n = a.cache),
        (this.queryKey = a.queryKey),
        (this.queryHash = a.queryHash),
        (this.#e = G0(this.options)),
        (this.state = a.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#l?.promise;
    }
    setOptions(a) {
      (this.options = { ...this.#s, ...a }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(a, s) {
      const o = M0(this.state.data, a, this.options);
      return (
        this.#a({
          data: o,
          type: "success",
          dataUpdatedAt: s?.updatedAt,
          manual: s?.manual,
        }),
        o
      );
    }
    setState(a, s) {
      this.#a({ type: "setState", state: a, setStateOptions: s });
    }
    cancel(a) {
      const s = this.#l?.promise;
      return this.#l?.cancel(a), s ? s.then(Xt).catch(Xt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((a) => N0(a.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === rc ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
        ? this.observers.some((a) => a.getCurrentResult().isStale)
        : this.state.data === void 0;
    }
    isStaleByTime(a = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !C0(this.state.dataUpdatedAt, a)
      );
    }
    onFocus() {
      this.observers
        .find((s) => s.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#l?.continue();
    }
    onOnline() {
      this.observers
        .find((s) => s.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#l?.continue();
    }
    addObserver(a) {
      this.observers.includes(a) ||
        (this.observers.push(a),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: a }));
    }
    removeObserver(a) {
      this.observers.includes(a) &&
        ((this.observers = this.observers.filter((s) => s !== a)),
        this.observers.length ||
          (this.#l &&
            (this.#i ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: a }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#a({ type: "invalidate" });
    }
    fetch(a, s) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && s?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#l) return this.#l.continueRetry(), this.#l.promise;
      }
      if ((a && this.setOptions(a), !this.options.queryFn)) {
        const g = this.observers.find((y) => y.options.queryFn);
        g && this.setOptions(g.options);
      }
      const o = new AbortController(),
        r = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => ((this.#i = !0), o.signal),
          });
        },
        c = () => {
          const g = qp(this.options, s),
            y = { queryKey: this.queryKey, meta: this.meta };
          return (
            r(y),
            (this.#i = !1),
            this.options.persister ? this.options.persister(g, y, this) : g(y)
          );
        },
        d = {
          fetchOptions: s,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: c,
        };
      r(d),
        this.options.behavior?.onFetch(d, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== d.fetchOptions?.meta) &&
          this.#a({ type: "fetch", meta: d.fetchOptions?.meta });
      const m = (g) => {
        (Hr(g) && g.silent) || this.#a({ type: "error", error: g }),
          Hr(g) ||
            (this.#n.config.onError?.(g, this),
            this.#n.config.onSettled?.(this.state.data, g, this)),
          this.scheduleGc();
      };
      return (
        (this.#l = Vp({
          initialPromise: s?.initialPromise,
          fn: d.fetchFn,
          abort: o.abort.bind(o),
          onSuccess: (g) => {
            if (g === void 0) {
              m(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(g);
            } catch (y) {
              m(y);
              return;
            }
            this.#n.config.onSuccess?.(g, this),
              this.#n.config.onSettled?.(g, this.state.error, this),
              this.scheduleGc();
          },
          onError: m,
          onFail: (g, y) => {
            this.#a({ type: "failed", failureCount: g, error: y });
          },
          onPause: () => {
            this.#a({ type: "pause" });
          },
          onContinue: () => {
            this.#a({ type: "continue" });
          },
          retry: d.options.retry,
          retryDelay: d.options.retryDelay,
          networkMode: d.options.networkMode,
          canRun: () => !0,
        })),
        this.#l.start()
      );
    }
    #a(a) {
      const s = (o) => {
        switch (a.type) {
          case "failed":
            return {
              ...o,
              fetchFailureCount: a.failureCount,
              fetchFailureReason: a.error,
            };
          case "pause":
            return { ...o, fetchStatus: "paused" };
          case "continue":
            return { ...o, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...o,
              ...q0(o.data, this.options),
              fetchMeta: a.meta ?? null,
            };
          case "success":
            return {
              ...o,
              data: a.data,
              dataUpdateCount: o.dataUpdateCount + 1,
              dataUpdatedAt: a.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!a.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const r = a.error;
            return Hr(r) && r.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...o,
                  error: r,
                  errorUpdateCount: o.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: o.fetchFailureCount + 1,
                  fetchFailureReason: r,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...o, isInvalidated: !0 };
          case "setState":
            return { ...o, ...a.state };
        }
      };
      (this.state = s(this.state)),
        at.batch(() => {
          this.observers.forEach((o) => {
            o.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: a });
        });
    }
  };
function q0(a, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yp(s.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function G0(a) {
  const s =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    o = s !== void 0,
    r = o
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: o ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: o ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Y0 = class extends Is {
    constructor(a = {}) {
      super(), (this.config = a), (this.#e = new Map());
    }
    #e;
    build(a, s, o) {
      const r = s.queryKey,
        c = s.queryHash ?? oc(r, s);
      let d = this.get(c);
      return (
        d ||
          ((d = new B0({
            cache: this,
            queryKey: r,
            queryHash: c,
            options: a.defaultQueryOptions(s),
            state: o,
            defaultOptions: a.getQueryDefaults(r),
          })),
          this.add(d)),
        d
      );
    }
    add(a) {
      this.#e.has(a.queryHash) ||
        (this.#e.set(a.queryHash, a), this.notify({ type: "added", query: a }));
    }
    remove(a) {
      const s = this.#e.get(a.queryHash);
      s &&
        (a.destroy(),
        s === a && this.#e.delete(a.queryHash),
        this.notify({ type: "removed", query: a }));
    }
    clear() {
      at.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#e.get(a);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(a) {
      const s = { exact: !0, ...a };
      return this.getAll().find((o) => Km(s, o));
    }
    findAll(a = {}) {
      const s = this.getAll();
      return Object.keys(a).length > 0 ? s.filter((o) => Km(a, o)) : s;
    }
    notify(a) {
      at.batch(() => {
        this.listeners.forEach((s) => {
          s(a);
        });
      });
    }
    onFocus() {
      at.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      at.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  X0 = class extends Qp {
    #e;
    #t;
    #n;
    constructor(a) {
      super(),
        (this.mutationId = a.mutationId),
        (this.#t = a.mutationCache),
        (this.#e = []),
        (this.state = a.state || V0()),
        this.setOptions(a.options),
        this.scheduleGc();
    }
    setOptions(a) {
      (this.options = a), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(a) {
      this.#e.includes(a) ||
        (this.#e.push(a),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: a }));
    }
    removeObserver(a) {
      (this.#e = this.#e.filter((s) => s !== a)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: a,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(a) {
      this.#n = Vp({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(a)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (r, c) => {
          this.#l({ type: "failed", failureCount: r, error: c });
        },
        onPause: () => {
          this.#l({ type: "pause" });
        },
        onContinue: () => {
          this.#l({ type: "continue" });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const s = this.state.status === "pending",
        o = !this.#n.canStart();
      try {
        if (!s) {
          this.#l({ type: "pending", variables: a, isPaused: o }),
            await this.#t.config.onMutate?.(a, this);
          const c = await this.options.onMutate?.(a);
          c !== this.state.context &&
            this.#l({ type: "pending", context: c, variables: a, isPaused: o });
        }
        const r = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(r, a, this.state.context, this),
          await this.options.onSuccess?.(r, a, this.state.context),
          await this.#t.config.onSettled?.(
            r,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(r, null, a, this.state.context),
          this.#l({ type: "success", data: r }),
          r
        );
      } catch (r) {
        try {
          throw (
            (await this.#t.config.onError?.(r, a, this.state.context, this),
            await this.options.onError?.(r, a, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              r,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, r, a, this.state.context),
            r)
          );
        } finally {
          this.#l({ type: "error", error: r });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #l(a) {
      const s = (o) => {
        switch (a.type) {
          case "failed":
            return {
              ...o,
              failureCount: a.failureCount,
              failureReason: a.error,
            };
          case "pause":
            return { ...o, isPaused: !0 };
          case "continue":
            return { ...o, isPaused: !1 };
          case "pending":
            return {
              ...o,
              context: a.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: a.isPaused,
              status: "pending",
              variables: a.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...o,
              data: a.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...o,
              data: void 0,
              error: a.error,
              failureCount: o.failureCount + 1,
              failureReason: a.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = s(this.state)),
        at.batch(() => {
          this.#e.forEach((o) => {
            o.onMutationUpdate(a);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: a });
        });
    }
  };
function V0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Q0 = class extends Is {
  constructor(a = {}) {
    super(), (this.config = a), (this.#e = new Map()), (this.#t = Date.now());
  }
  #e;
  #t;
  build(a, s, o) {
    const r = new X0({
      mutationCache: this,
      mutationId: ++this.#t,
      options: a.defaultMutationOptions(s),
      state: o,
    });
    return this.add(r), r;
  }
  add(a) {
    const s = Hs(a),
      o = this.#e.get(s) ?? [];
    o.push(a), this.#e.set(s, o), this.notify({ type: "added", mutation: a });
  }
  remove(a) {
    const s = Hs(a);
    if (this.#e.has(s)) {
      const o = this.#e.get(s)?.filter((r) => r !== a);
      o && (o.length === 0 ? this.#e.delete(s) : this.#e.set(s, o));
    }
    this.notify({ type: "removed", mutation: a });
  }
  canRun(a) {
    const s = this.#e.get(Hs(a))?.find((o) => o.state.status === "pending");
    return !s || s === a;
  }
  runNext(a) {
    return (
      this.#e
        .get(Hs(a))
        ?.find((o) => o !== a && o.state.isPaused)
        ?.continue() ?? Promise.resolve()
    );
  }
  clear() {
    at.batch(() => {
      this.getAll().forEach((a) => {
        this.remove(a);
      });
    });
  }
  getAll() {
    return [...this.#e.values()].flat();
  }
  find(a) {
    const s = { exact: !0, ...a };
    return this.getAll().find((o) => Zm(s, o));
  }
  findAll(a = {}) {
    return this.getAll().filter((s) => Zm(a, s));
  }
  notify(a) {
    at.batch(() => {
      this.listeners.forEach((s) => {
        s(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((s) => s.state.isPaused);
    return at.batch(() => Promise.all(a.map((s) => s.continue().catch(Xt))));
  }
};
function Hs(a) {
  return a.options.scope?.id ?? String(a.mutationId);
}
function $m(a) {
  return {
    onFetch: (s, o) => {
      const r = s.options,
        c = s.fetchOptions?.meta?.fetchMore?.direction,
        d = s.state.data?.pages || [],
        m = s.state.data?.pageParams || [];
      let g = { pages: [], pageParams: [] },
        y = 0;
      const h = async () => {
        let b = !1;
        const x = (z) => {
            Object.defineProperty(z, "signal", {
              enumerable: !0,
              get: () => (
                s.signal.aborted
                  ? (b = !0)
                  : s.signal.addEventListener("abort", () => {
                      b = !0;
                    }),
                s.signal
              ),
            });
          },
          A = qp(s.options, s.fetchOptions),
          _ = async (z, C, j) => {
            if (b) return Promise.reject();
            if (C == null && z.pages.length) return Promise.resolve(z);
            const X = {
              queryKey: s.queryKey,
              pageParam: C,
              direction: j ? "backward" : "forward",
              meta: s.options.meta,
            };
            x(X);
            const k = await A(X),
              { maxPages: Q } = s.options,
              Z = j ? D0 : _0;
            return {
              pages: Z(z.pages, k, Q),
              pageParams: Z(z.pageParams, C, Q),
            };
          };
        if (c && d.length) {
          const z = c === "backward",
            C = z ? k0 : Pm,
            j = { pages: d, pageParams: m },
            X = C(r, j);
          g = await _(j, X, z);
        } else {
          const z = a ?? d.length;
          do {
            const C = y === 0 ? m[0] ?? r.initialPageParam : Pm(r, g);
            if (y > 0 && C == null) break;
            (g = await _(g, C)), y++;
          } while (y < z);
        }
        return g;
      };
      s.options.persister
        ? (s.fetchFn = () =>
            s.options.persister?.(
              h,
              { queryKey: s.queryKey, meta: s.options.meta, signal: s.signal },
              o
            ))
        : (s.fetchFn = h);
    },
  };
}
function Pm(a, { pages: s, pageParams: o }) {
  const r = s.length - 1;
  return s.length > 0 ? a.getNextPageParam(s[r], s, o[r], o) : void 0;
}
function k0(a, { pages: s, pageParams: o }) {
  return s.length > 0 ? a.getPreviousPageParam?.(s[0], s, o[0], o) : void 0;
}
var K0 = class {
    #e;
    #t;
    #n;
    #l;
    #s;
    #i;
    #a;
    #u;
    constructor(a = {}) {
      (this.#e = a.queryCache || new Y0()),
        (this.#t = a.mutationCache || new Q0()),
        (this.#n = a.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#s = new Map()),
        (this.#i = 0);
    }
    mount() {
      this.#i++,
        this.#i === 1 &&
          ((this.#a = Gp.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#u = Ks.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#i--,
        this.#i === 0 &&
          (this.#a?.(), (this.#a = void 0), this.#u?.(), (this.#u = void 0));
    }
    isFetching(a) {
      return this.#e.findAll({ ...a, fetchStatus: "fetching" }).length;
    }
    isMutating(a) {
      return this.#t.findAll({ ...a, status: "pending" }).length;
    }
    getQueryData(a) {
      const s = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(s.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const s = this.getQueryData(a.queryKey);
      if (s === void 0) return this.fetchQuery(a);
      {
        const o = this.defaultQueryOptions(a),
          r = this.#e.build(this, o);
        return (
          a.revalidateIfStale &&
            r.isStaleByTime(km(o.staleTime, r)) &&
            this.prefetchQuery(o),
          Promise.resolve(s)
        );
      }
    }
    getQueriesData(a) {
      return this.#e.findAll(a).map(({ queryKey: s, state: o }) => {
        const r = o.data;
        return [s, r];
      });
    }
    setQueryData(a, s, o) {
      const r = this.defaultQueryOptions({ queryKey: a }),
        d = this.#e.get(r.queryHash)?.state.data,
        m = A0(s, d);
      if (m !== void 0)
        return this.#e.build(this, r).setData(m, { ...o, manual: !0 });
    }
    setQueriesData(a, s, o) {
      return at.batch(() =>
        this.#e
          .findAll(a)
          .map(({ queryKey: r }) => [r, this.setQueryData(r, s, o)])
      );
    }
    getQueryState(a) {
      const s = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(s.queryHash)?.state;
    }
    removeQueries(a) {
      const s = this.#e;
      at.batch(() => {
        s.findAll(a).forEach((o) => {
          s.remove(o);
        });
      });
    }
    resetQueries(a, s) {
      const o = this.#e,
        r = { type: "active", ...a };
      return at.batch(
        () => (
          o.findAll(a).forEach((c) => {
            c.reset();
          }),
          this.refetchQueries(r, s)
        )
      );
    }
    cancelQueries(a = {}, s = {}) {
      const o = { revert: !0, ...s },
        r = at.batch(() => this.#e.findAll(a).map((c) => c.cancel(o)));
      return Promise.all(r).then(Xt).catch(Xt);
    }
    invalidateQueries(a = {}, s = {}) {
      return at.batch(() => {
        if (
          (this.#e.findAll(a).forEach((r) => {
            r.invalidate();
          }),
          a.refetchType === "none")
        )
          return Promise.resolve();
        const o = { ...a, type: a.refetchType ?? a.type ?? "active" };
        return this.refetchQueries(o, s);
      });
    }
    refetchQueries(a = {}, s) {
      const o = { ...s, cancelRefetch: s?.cancelRefetch ?? !0 },
        r = at.batch(() =>
          this.#e
            .findAll(a)
            .filter((c) => !c.isDisabled())
            .map((c) => {
              let d = c.fetch(void 0, o);
              return (
                o.throwOnError || (d = d.catch(Xt)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            })
        );
      return Promise.all(r).then(Xt);
    }
    fetchQuery(a) {
      const s = this.defaultQueryOptions(a);
      s.retry === void 0 && (s.retry = !1);
      const o = this.#e.build(this, s);
      return o.isStaleByTime(km(s.staleTime, o))
        ? o.fetch(s)
        : Promise.resolve(o.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(Xt).catch(Xt);
    }
    fetchInfiniteQuery(a) {
      return (a.behavior = $m(a.pages)), this.fetchQuery(a);
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(Xt).catch(Xt);
    }
    ensureInfiniteQueryData(a) {
      return (a.behavior = $m(a.pages)), this.ensureQueryData(a);
    }
    resumePausedMutations() {
      return Ks.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(a) {
      this.#n = a;
    }
    setQueryDefaults(a, s) {
      this.#l.set(di(a), { queryKey: a, defaultOptions: s });
    }
    getQueryDefaults(a) {
      const s = [...this.#l.values()];
      let o = {};
      return (
        s.forEach((r) => {
          hi(a, r.queryKey) && (o = { ...o, ...r.defaultOptions });
        }),
        o
      );
    }
    setMutationDefaults(a, s) {
      this.#s.set(di(a), { mutationKey: a, defaultOptions: s });
    }
    getMutationDefaults(a) {
      const s = [...this.#s.values()];
      let o = {};
      return (
        s.forEach((r) => {
          hi(a, r.mutationKey) && (o = { ...o, ...r.defaultOptions });
        }),
        o
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const s = {
        ...this.#n.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        s.queryHash || (s.queryHash = oc(s.queryKey, s)),
        s.refetchOnReconnect === void 0 &&
          (s.refetchOnReconnect = s.networkMode !== "always"),
        s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
        !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
        s.enabled !== !0 && s.queryFn === rc && (s.enabled = !1),
        s
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#n.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Z0 = S.createContext(void 0),
  J0 = ({ client: a, children: s }) => (
    S.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a]
    ),
    v.jsx(Z0.Provider, { value: a, children: s })
  );
async function F0(a) {
  if (!a.ok) {
    const s = (await a.text()) || a.statusText;
    throw new Error(`${a.status}: ${s}`);
  }
}
const $0 =
    ({ on401: a }) =>
    async ({ queryKey: s }) => {
      const o = await fetch(s.join("/"), { credentials: "include" });
      return await F0(o), await o.json();
    },
  P0 = new K0({
    defaultOptions: {
      queries: {
        queryFn: $0({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  W0 = 1,
  I0 = 1e6;
let Lr = 0;
function e1() {
  return (Lr = (Lr + 1) % Number.MAX_SAFE_INTEGER), Lr.toString();
}
const Br = new Map(),
  Wm = (a) => {
    if (Br.has(a)) return;
    const s = setTimeout(() => {
      Br.delete(a), fi({ type: "REMOVE_TOAST", toastId: a });
    }, I0);
    Br.set(a, s);
  },
  t1 = (a, s) => {
    switch (s.type) {
      case "ADD_TOAST":
        return { ...a, toasts: [s.toast, ...a.toasts].slice(0, W0) };
      case "UPDATE_TOAST":
        return {
          ...a,
          toasts: a.toasts.map((o) =>
            o.id === s.toast.id ? { ...o, ...s.toast } : o
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: o } = s;
        return (
          o
            ? Wm(o)
            : a.toasts.forEach((r) => {
                Wm(r.id);
              }),
          {
            ...a,
            toasts: a.toasts.map((r) =>
              r.id === o || o === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return s.toastId === void 0
          ? { ...a, toasts: [] }
          : { ...a, toasts: a.toasts.filter((o) => o.id !== s.toastId) };
    }
  },
  Vs = [];
let Qs = { toasts: [] };
function fi(a) {
  (Qs = t1(Qs, a)),
    Vs.forEach((s) => {
      s(Qs);
    });
}
function n1({ ...a }) {
  const s = e1(),
    o = (c) => fi({ type: "UPDATE_TOAST", toast: { ...c, id: s } }),
    r = () => fi({ type: "DISMISS_TOAST", toastId: s });
  return (
    fi({
      type: "ADD_TOAST",
      toast: {
        ...a,
        id: s,
        open: !0,
        onOpenChange: (c) => {
          c || r();
        },
      },
    }),
    { id: s, dismiss: r, update: o }
  );
}
function kp() {
  const [a, s] = S.useState(Qs);
  return (
    S.useEffect(
      () => (
        Vs.push(s),
        () => {
          const o = Vs.indexOf(s);
          o > -1 && Vs.splice(o, 1);
        }
      ),
      [a]
    ),
    {
      ...a,
      toast: n1,
      dismiss: (o) => fi({ type: "DISMISS_TOAST", toastId: o }),
    }
  );
}
var yi = Np();
const Kp = Cp(yi);
function wt(a, s, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (c) {
    if ((a?.(c), o === !1 || !c.defaultPrevented)) return s?.(c);
  };
}
function Im(a, s) {
  if (typeof a == "function") return a(s);
  a != null && (a.current = s);
}
function cc(...a) {
  return (s) => {
    let o = !1;
    const r = a.map((c) => {
      const d = Im(c, s);
      return !o && typeof d == "function" && (o = !0), d;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : Im(a[c], null);
        }
      };
  };
}
function dt(...a) {
  return S.useCallback(cc(...a), a);
}
function tu(a, s = []) {
  let o = [];
  function r(d, m) {
    const g = S.createContext(m),
      y = o.length;
    o = [...o, m];
    const h = (x) => {
      const { scope: A, children: _, ...z } = x,
        C = A?.[a]?.[y] || g,
        j = S.useMemo(() => z, Object.values(z));
      return v.jsx(C.Provider, { value: j, children: _ });
    };
    h.displayName = d + "Provider";
    function b(x, A) {
      const _ = A?.[a]?.[y] || g,
        z = S.useContext(_);
      if (z) return z;
      if (m !== void 0) return m;
      throw new Error(`\`${x}\` must be used within \`${d}\``);
    }
    return [h, b];
  }
  const c = () => {
    const d = o.map((m) => S.createContext(m));
    return function (g) {
      const y = g?.[a] || d;
      return S.useMemo(() => ({ [`__scope${a}`]: { ...g, [a]: y } }), [g, y]);
    };
  };
  return (c.scopeName = a), [r, l1(c, ...s)];
}
function l1(...a) {
  const s = a[0];
  if (a.length === 1) return s;
  const o = () => {
    const r = a.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (d) {
      const m = r.reduce((g, { useScope: y, scopeName: h }) => {
        const x = y(d)[`__scope${h}`];
        return { ...g, ...x };
      }, {});
      return S.useMemo(() => ({ [`__scope${s.scopeName}`]: m }), [m]);
    };
  };
  return (o.scopeName = s.scopeName), o;
}
function Kr(a) {
  const s = a1(a),
    o = S.forwardRef((r, c) => {
      const { children: d, ...m } = r,
        g = S.Children.toArray(d),
        y = g.find(s1);
      if (y) {
        const h = y.props.children,
          b = g.map((x) =>
            x === y
              ? S.Children.count(h) > 1
                ? S.Children.only(null)
                : S.isValidElement(h)
                ? h.props.children
                : null
              : x
          );
        return v.jsx(s, {
          ...m,
          ref: c,
          children: S.isValidElement(h) ? S.cloneElement(h, void 0, b) : null,
        });
      }
      return v.jsx(s, { ...m, ref: c, children: d });
    });
  return (o.displayName = `${a}.Slot`), o;
}
function a1(a) {
  const s = S.forwardRef((o, r) => {
    const { children: c, ...d } = o;
    if (S.isValidElement(c)) {
      const m = o1(c),
        g = u1(d, c.props);
      return (
        c.type !== S.Fragment && (g.ref = r ? cc(r, m) : m),
        S.cloneElement(c, g)
      );
    }
    return S.Children.count(c) > 1 ? S.Children.only(null) : null;
  });
  return (s.displayName = `${a}.SlotClone`), s;
}
var i1 = Symbol("radix.slottable");
function s1(a) {
  return (
    S.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === i1
  );
}
function u1(a, s) {
  const o = { ...s };
  for (const r in s) {
    const c = a[r],
      d = s[r];
    /^on[A-Z]/.test(r)
      ? c && d
        ? (o[r] = (...g) => {
            d(...g), c(...g);
          })
        : c && (o[r] = c)
      : r === "style"
      ? (o[r] = { ...c, ...d })
      : r === "className" && (o[r] = [c, d].filter(Boolean).join(" "));
  }
  return { ...a, ...o };
}
function o1(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = s && "isReactWarning" in s && s.isReactWarning;
  return o
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = s && "isReactWarning" in s && s.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
function r1(a) {
  const s = a + "CollectionProvider",
    [o, r] = tu(s),
    [c, d] = o(s, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (C) => {
      const { scope: j, children: X } = C,
        k = Pn.useRef(null),
        Q = Pn.useRef(new Map()).current;
      return v.jsx(c, { scope: j, itemMap: Q, collectionRef: k, children: X });
    };
  m.displayName = s;
  const g = a + "CollectionSlot",
    y = Kr(g),
    h = Pn.forwardRef((C, j) => {
      const { scope: X, children: k } = C,
        Q = d(g, X),
        Z = dt(j, Q.collectionRef);
      return v.jsx(y, { ref: Z, children: k });
    });
  h.displayName = g;
  const b = a + "CollectionItemSlot",
    x = "data-radix-collection-item",
    A = Kr(b),
    _ = Pn.forwardRef((C, j) => {
      const { scope: X, children: k, ...Q } = C,
        Z = Pn.useRef(null),
        $ = dt(j, Z),
        P = d(b, X);
      return (
        Pn.useEffect(
          () => (
            P.itemMap.set(Z, { ref: Z, ...Q }), () => void P.itemMap.delete(Z)
          )
        ),
        v.jsx(A, { [x]: "", ref: $, children: k })
      );
    });
  _.displayName = b;
  function z(C) {
    const j = d(a + "CollectionConsumer", C);
    return Pn.useCallback(() => {
      const k = j.collectionRef.current;
      if (!k) return [];
      const Q = Array.from(k.querySelectorAll(`[${x}]`));
      return Array.from(j.itemMap.values()).sort(
        (P, Y) => Q.indexOf(P.ref.current) - Q.indexOf(Y.ref.current)
      );
    }, [j.collectionRef, j.itemMap]);
  }
  return [{ Provider: m, Slot: h, ItemSlot: _ }, z, r];
}
var c1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  tn = c1.reduce((a, s) => {
    const o = Kr(`Primitive.${s}`),
      r = S.forwardRef((c, d) => {
        const { asChild: m, ...g } = c,
          y = m ? o : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(y, { ...g, ref: d })
        );
      });
    return (r.displayName = `Primitive.${s}`), { ...a, [s]: r };
  }, {});
function Zp(a, s) {
  a && yi.flushSync(() => a.dispatchEvent(s));
}
function Bt(a) {
  const s = S.useRef(a);
  return (
    S.useEffect(() => {
      s.current = a;
    }),
    S.useMemo(
      () =>
        (...o) =>
          s.current?.(...o),
      []
    )
  );
}
function Jp(a, s = globalThis?.document) {
  const o = Bt(a);
  S.useEffect(() => {
    const r = (c) => {
      c.key === "Escape" && o(c);
    };
    return (
      s.addEventListener("keydown", r, { capture: !0 }),
      () => s.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [o, s]);
}
var f1 = "DismissableLayer",
  Zr = "dismissableLayer.update",
  d1 = "dismissableLayer.pointerDownOutside",
  h1 = "dismissableLayer.focusOutside",
  ep,
  Fp = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $p = S.forwardRef((a, s) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: m,
        onDismiss: g,
        ...y
      } = a,
      h = S.useContext(Fp),
      [b, x] = S.useState(null),
      A = b?.ownerDocument ?? globalThis?.document,
      [, _] = S.useState({}),
      z = dt(s, (Y) => x(Y)),
      C = Array.from(h.layers),
      [j] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      X = C.indexOf(j),
      k = b ? C.indexOf(b) : -1,
      Q = h.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = k >= X,
      $ = p1((Y) => {
        const J = Y.target,
          oe = [...h.branches].some((me) => me.contains(J));
        !Z || oe || (c?.(Y), m?.(Y), Y.defaultPrevented || g?.());
      }, A),
      P = y1((Y) => {
        const J = Y.target;
        [...h.branches].some((me) => me.contains(J)) ||
          (d?.(Y), m?.(Y), Y.defaultPrevented || g?.());
      }, A);
    return (
      Jp((Y) => {
        k === h.layers.size - 1 &&
          (r?.(Y), !Y.defaultPrevented && g && (Y.preventDefault(), g()));
      }, A),
      S.useEffect(() => {
        if (b)
          return (
            o &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ep = A.body.style.pointerEvents),
                (A.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(b)),
            h.layers.add(b),
            tp(),
            () => {
              o &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (A.body.style.pointerEvents = ep);
            }
          );
      }, [b, A, o, h]),
      S.useEffect(
        () => () => {
          b &&
            (h.layers.delete(b),
            h.layersWithOutsidePointerEventsDisabled.delete(b),
            tp());
        },
        [b, h]
      ),
      S.useEffect(() => {
        const Y = () => _({});
        return (
          document.addEventListener(Zr, Y),
          () => document.removeEventListener(Zr, Y)
        );
      }, []),
      v.jsx(tn.div, {
        ...y,
        ref: z,
        style: {
          pointerEvents: Q ? (Z ? "auto" : "none") : void 0,
          ...a.style,
        },
        onFocusCapture: wt(a.onFocusCapture, P.onFocusCapture),
        onBlurCapture: wt(a.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: wt(
          a.onPointerDownCapture,
          $.onPointerDownCapture
        ),
      })
    );
  });
$p.displayName = f1;
var m1 = "DismissableLayerBranch",
  Pp = S.forwardRef((a, s) => {
    const o = S.useContext(Fp),
      r = S.useRef(null),
      c = dt(s, r);
    return (
      S.useEffect(() => {
        const d = r.current;
        if (d)
          return (
            o.branches.add(d),
            () => {
              o.branches.delete(d);
            }
          );
      }, [o.branches]),
      v.jsx(tn.div, { ...a, ref: c })
    );
  });
Pp.displayName = m1;
function p1(a, s = globalThis?.document) {
  const o = Bt(a),
    r = S.useRef(!1),
    c = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const d = (g) => {
          if (g.target && !r.current) {
            let y = function () {
              Wp(d1, o, h, { discrete: !0 });
            };
            const h = { originalEvent: g };
            g.pointerType === "touch"
              ? (s.removeEventListener("click", c.current),
                (c.current = y),
                s.addEventListener("click", c.current, { once: !0 }))
              : y();
          } else s.removeEventListener("click", c.current);
          r.current = !1;
        },
        m = window.setTimeout(() => {
          s.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(m),
          s.removeEventListener("pointerdown", d),
          s.removeEventListener("click", c.current);
      };
    }, [s, o]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function y1(a, s = globalThis?.document) {
  const o = Bt(a),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const c = (d) => {
        d.target &&
          !r.current &&
          Wp(h1, o, { originalEvent: d }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", c),
        () => s.removeEventListener("focusin", c)
      );
    }, [s, o]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function tp() {
  const a = new CustomEvent(Zr);
  document.dispatchEvent(a);
}
function Wp(a, s, o, { discrete: r }) {
  const c = o.originalEvent.target,
    d = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: o });
  s && c.addEventListener(a, s, { once: !0 }),
    r ? Zp(c, d) : c.dispatchEvent(d);
}
var v1 = $p,
  g1 = Pp,
  It = globalThis?.document ? S.useLayoutEffect : () => {},
  b1 = "Portal",
  Ip = S.forwardRef((a, s) => {
    const { container: o, ...r } = a,
      [c, d] = S.useState(!1);
    It(() => d(!0), []);
    const m = o || (c && globalThis?.document?.body);
    return m ? Kp.createPortal(v.jsx(tn.div, { ...r, ref: s }), m) : null;
  });
Ip.displayName = b1;
function S1(a, s) {
  return S.useReducer((o, r) => s[o][r] ?? o, a);
}
var ey = (a) => {
  const { present: s, children: o } = a,
    r = x1(s),
    c =
      typeof o == "function" ? o({ present: r.isPresent }) : S.Children.only(o),
    d = dt(r.ref, E1(c));
  return typeof o == "function" || r.isPresent
    ? S.cloneElement(c, { ref: d })
    : null;
};
ey.displayName = "Presence";
function x1(a) {
  const [s, o] = S.useState(),
    r = S.useRef({}),
    c = S.useRef(a),
    d = S.useRef("none"),
    m = a ? "mounted" : "unmounted",
    [g, y] = S1(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const h = Ls(r.current);
      d.current = g === "mounted" ? h : "none";
    }, [g]),
    It(() => {
      const h = r.current,
        b = c.current;
      if (b !== a) {
        const A = d.current,
          _ = Ls(h);
        a
          ? y("MOUNT")
          : _ === "none" || h?.display === "none"
          ? y("UNMOUNT")
          : y(b && A !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = a);
      }
    }, [a, y]),
    It(() => {
      if (s) {
        let h;
        const b = s.ownerDocument.defaultView ?? window,
          x = (_) => {
            const C = Ls(r.current).includes(_.animationName);
            if (_.target === s && C && (y("ANIMATION_END"), !c.current)) {
              const j = s.style.animationFillMode;
              (s.style.animationFillMode = "forwards"),
                (h = b.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = j);
                }));
            }
          },
          A = (_) => {
            _.target === s && (d.current = Ls(r.current));
          };
        return (
          s.addEventListener("animationstart", A),
          s.addEventListener("animationcancel", x),
          s.addEventListener("animationend", x),
          () => {
            b.clearTimeout(h),
              s.removeEventListener("animationstart", A),
              s.removeEventListener("animationcancel", x),
              s.removeEventListener("animationend", x);
          }
        );
      } else y("ANIMATION_END");
    }, [s, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(g),
      ref: S.useCallback((h) => {
        h && (r.current = getComputedStyle(h)), o(h);
      }, []),
    }
  );
}
function Ls(a) {
  return a?.animationName || "none";
}
function E1(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = s && "isReactWarning" in s && s.isReactWarning;
  return o
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = s && "isReactWarning" in s && s.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
function T1({ prop: a, defaultProp: s, onChange: o = () => {} }) {
  const [r, c] = w1({ defaultProp: s, onChange: o }),
    d = a !== void 0,
    m = d ? a : r,
    g = Bt(o),
    y = S.useCallback(
      (h) => {
        if (d) {
          const x = typeof h == "function" ? h(a) : h;
          x !== a && g(x);
        } else c(h);
      },
      [d, a, c, g]
    );
  return [m, y];
}
function w1({ defaultProp: a, onChange: s }) {
  const o = S.useState(a),
    [r] = o,
    c = S.useRef(r),
    d = Bt(s);
  return (
    S.useEffect(() => {
      c.current !== r && (d(r), (c.current = r));
    }, [r, c, d]),
    o
  );
}
var A1 = "VisuallyHidden",
  fc = S.forwardRef((a, s) =>
    v.jsx(tn.span, {
      ...a,
      ref: s,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...a.style,
      },
    })
  );
fc.displayName = A1;
var dc = "ToastProvider",
  [hc, O1, C1] = r1("Toast"),
  [ty] = tu("Toast", [C1]),
  [N1, nu] = ty(dc),
  ny = (a) => {
    const {
        __scopeToast: s,
        label: o = "Notification",
        duration: r = 5e3,
        swipeDirection: c = "right",
        swipeThreshold: d = 50,
        children: m,
      } = a,
      [g, y] = S.useState(null),
      [h, b] = S.useState(0),
      x = S.useRef(!1),
      A = S.useRef(!1);
    return (
      o.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${dc}\`. Expected non-empty \`string\`.`
        ),
      v.jsx(hc.Provider, {
        scope: s,
        children: v.jsx(N1, {
          scope: s,
          label: o,
          duration: r,
          swipeDirection: c,
          swipeThreshold: d,
          toastCount: h,
          viewport: g,
          onViewportChange: y,
          onToastAdd: S.useCallback(() => b((_) => _ + 1), []),
          onToastRemove: S.useCallback(() => b((_) => _ - 1), []),
          isFocusedToastEscapeKeyDownRef: x,
          isClosePausedRef: A,
          children: m,
        }),
      })
    );
  };
ny.displayName = dc;
var ly = "ToastViewport",
  R1 = ["F8"],
  Jr = "toast.viewportPause",
  Fr = "toast.viewportResume",
  ay = S.forwardRef((a, s) => {
    const {
        __scopeToast: o,
        hotkey: r = R1,
        label: c = "Notifications ({hotkey})",
        ...d
      } = a,
      m = nu(ly, o),
      g = O1(o),
      y = S.useRef(null),
      h = S.useRef(null),
      b = S.useRef(null),
      x = S.useRef(null),
      A = dt(s, x, m.onViewportChange),
      _ = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      z = m.toastCount > 0;
    S.useEffect(() => {
      const j = (X) => {
        r.length !== 0 &&
          r.every((Q) => X[Q] || X.code === Q) &&
          x.current?.focus();
      };
      return (
        document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
      );
    }, [r]),
      S.useEffect(() => {
        const j = y.current,
          X = x.current;
        if (z && j && X) {
          const k = () => {
              if (!m.isClosePausedRef.current) {
                const P = new CustomEvent(Jr);
                X.dispatchEvent(P), (m.isClosePausedRef.current = !0);
              }
            },
            Q = () => {
              if (m.isClosePausedRef.current) {
                const P = new CustomEvent(Fr);
                X.dispatchEvent(P), (m.isClosePausedRef.current = !1);
              }
            },
            Z = (P) => {
              !j.contains(P.relatedTarget) && Q();
            },
            $ = () => {
              j.contains(document.activeElement) || Q();
            };
          return (
            j.addEventListener("focusin", k),
            j.addEventListener("focusout", Z),
            j.addEventListener("pointermove", k),
            j.addEventListener("pointerleave", $),
            window.addEventListener("blur", k),
            window.addEventListener("focus", Q),
            () => {
              j.removeEventListener("focusin", k),
                j.removeEventListener("focusout", Z),
                j.removeEventListener("pointermove", k),
                j.removeEventListener("pointerleave", $),
                window.removeEventListener("blur", k),
                window.removeEventListener("focus", Q);
            }
          );
        }
      }, [z, m.isClosePausedRef]);
    const C = S.useCallback(
      ({ tabbingDirection: j }) => {
        const k = g().map((Q) => {
          const Z = Q.ref.current,
            $ = [Z, ...X1(Z)];
          return j === "forwards" ? $ : $.reverse();
        });
        return (j === "forwards" ? k.reverse() : k).flat();
      },
      [g]
    );
    return (
      S.useEffect(() => {
        const j = x.current;
        if (j) {
          const X = (k) => {
            const Q = k.altKey || k.ctrlKey || k.metaKey;
            if (k.key === "Tab" && !Q) {
              const $ = document.activeElement,
                P = k.shiftKey;
              if (k.target === j && P) {
                h.current?.focus();
                return;
              }
              const oe = C({ tabbingDirection: P ? "backwards" : "forwards" }),
                me = oe.findIndex((ge) => ge === $);
              qr(oe.slice(me + 1))
                ? k.preventDefault()
                : P
                ? h.current?.focus()
                : b.current?.focus();
            }
          };
          return (
            j.addEventListener("keydown", X),
            () => j.removeEventListener("keydown", X)
          );
        }
      }, [g, C]),
      v.jsxs(g1, {
        ref: y,
        role: "region",
        "aria-label": c.replace("{hotkey}", _),
        tabIndex: -1,
        style: { pointerEvents: z ? void 0 : "none" },
        children: [
          z &&
            v.jsx($r, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                const j = C({ tabbingDirection: "forwards" });
                qr(j);
              },
            }),
          v.jsx(hc.Slot, {
            scope: o,
            children: v.jsx(tn.ol, { tabIndex: -1, ...d, ref: A }),
          }),
          z &&
            v.jsx($r, {
              ref: b,
              onFocusFromOutsideViewport: () => {
                const j = C({ tabbingDirection: "backwards" });
                qr(j);
              },
            }),
        ],
      })
    );
  });
ay.displayName = ly;
var iy = "ToastFocusProxy",
  $r = S.forwardRef((a, s) => {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...c } = a,
      d = nu(iy, o);
    return v.jsx(fc, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...c,
      ref: s,
      style: { position: "fixed" },
      onFocus: (m) => {
        const g = m.relatedTarget;
        !d.viewport?.contains(g) && r();
      },
    });
  });
$r.displayName = iy;
var lu = "Toast",
  M1 = "toast.swipeStart",
  _1 = "toast.swipeMove",
  D1 = "toast.swipeCancel",
  z1 = "toast.swipeEnd",
  sy = S.forwardRef((a, s) => {
    const { forceMount: o, open: r, defaultOpen: c, onOpenChange: d, ...m } = a,
      [g = !0, y] = T1({ prop: r, defaultProp: c, onChange: d });
    return v.jsx(ey, {
      present: o || g,
      children: v.jsx(H1, {
        open: g,
        ...m,
        ref: s,
        onClose: () => y(!1),
        onPause: Bt(a.onPause),
        onResume: Bt(a.onResume),
        onSwipeStart: wt(a.onSwipeStart, (h) => {
          h.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: wt(a.onSwipeMove, (h) => {
          const { x: b, y: x } = h.detail.delta;
          h.currentTarget.setAttribute("data-swipe", "move"),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${b}px`
            ),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${x}px`
            );
        }),
        onSwipeCancel: wt(a.onSwipeCancel, (h) => {
          h.currentTarget.setAttribute("data-swipe", "cancel"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: wt(a.onSwipeEnd, (h) => {
          const { x: b, y: x } = h.detail.delta;
          h.currentTarget.setAttribute("data-swipe", "end"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${b}px`
            ),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${x}px`
            ),
            y(!1);
        }),
      }),
    });
  });
sy.displayName = lu;
var [j1, U1] = ty(lu, { onClose() {} }),
  H1 = S.forwardRef((a, s) => {
    const {
        __scopeToast: o,
        type: r = "foreground",
        duration: c,
        open: d,
        onClose: m,
        onEscapeKeyDown: g,
        onPause: y,
        onResume: h,
        onSwipeStart: b,
        onSwipeMove: x,
        onSwipeCancel: A,
        onSwipeEnd: _,
        ...z
      } = a,
      C = nu(lu, o),
      [j, X] = S.useState(null),
      k = dt(s, (W) => X(W)),
      Q = S.useRef(null),
      Z = S.useRef(null),
      $ = c || C.duration,
      P = S.useRef(0),
      Y = S.useRef($),
      J = S.useRef(0),
      { onToastAdd: oe, onToastRemove: me } = C,
      ge = Bt(() => {
        j?.contains(document.activeElement) && C.viewport?.focus(), m();
      }),
      ye = S.useCallback(
        (W) => {
          !W ||
            W === 1 / 0 ||
            (window.clearTimeout(J.current),
            (P.current = new Date().getTime()),
            (J.current = window.setTimeout(ge, W)));
        },
        [ge]
      );
    S.useEffect(() => {
      const W = C.viewport;
      if (W) {
        const fe = () => {
            ye(Y.current), h?.();
          },
          N = () => {
            const V = new Date().getTime() - P.current;
            (Y.current = Y.current - V), window.clearTimeout(J.current), y?.();
          };
        return (
          W.addEventListener(Jr, N),
          W.addEventListener(Fr, fe),
          () => {
            W.removeEventListener(Jr, N), W.removeEventListener(Fr, fe);
          }
        );
      }
    }, [C.viewport, $, y, h, ye]),
      S.useEffect(() => {
        d && !C.isClosePausedRef.current && ye($);
      }, [d, $, C.isClosePausedRef, ye]),
      S.useEffect(() => (oe(), () => me()), [oe, me]);
    const we = S.useMemo(() => (j ? hy(j) : null), [j]);
    return C.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            we &&
              v.jsx(L1, {
                __scopeToast: o,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: we,
              }),
            v.jsx(j1, {
              scope: o,
              onClose: ge,
              children: yi.createPortal(
                v.jsx(hc.ItemSlot, {
                  scope: o,
                  children: v.jsx(v1, {
                    asChild: !0,
                    onEscapeKeyDown: wt(g, () => {
                      C.isFocusedToastEscapeKeyDownRef.current || ge(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: v.jsx(tn.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...z,
                      ref: k,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...a.style,
                      },
                      onKeyDown: wt(a.onKeyDown, (W) => {
                        W.key === "Escape" &&
                          (g?.(W.nativeEvent),
                          W.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            ge()));
                      }),
                      onPointerDown: wt(a.onPointerDown, (W) => {
                        W.button === 0 &&
                          (Q.current = { x: W.clientX, y: W.clientY });
                      }),
                      onPointerMove: wt(a.onPointerMove, (W) => {
                        if (!Q.current) return;
                        const fe = W.clientX - Q.current.x,
                          N = W.clientY - Q.current.y,
                          V = !!Z.current,
                          H = ["left", "right"].includes(C.swipeDirection),
                          ie = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ce = H ? ie(0, fe) : 0,
                          T = H ? 0 : ie(0, N),
                          B = W.pointerType === "touch" ? 10 : 2,
                          K = { x: ce, y: T },
                          F = { originalEvent: W, delta: K };
                        V
                          ? ((Z.current = K), Bs(_1, x, F, { discrete: !1 }))
                          : np(K, C.swipeDirection, B)
                          ? ((Z.current = K),
                            Bs(M1, b, F, { discrete: !1 }),
                            W.target.setPointerCapture(W.pointerId))
                          : (Math.abs(fe) > B || Math.abs(N) > B) &&
                            (Q.current = null);
                      }),
                      onPointerUp: wt(a.onPointerUp, (W) => {
                        const fe = Z.current,
                          N = W.target;
                        if (
                          (N.hasPointerCapture(W.pointerId) &&
                            N.releasePointerCapture(W.pointerId),
                          (Z.current = null),
                          (Q.current = null),
                          fe)
                        ) {
                          const V = W.currentTarget,
                            H = { originalEvent: W, delta: fe };
                          np(fe, C.swipeDirection, C.swipeThreshold)
                            ? Bs(z1, _, H, { discrete: !0 })
                            : Bs(D1, A, H, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (ie) => ie.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  L1 = (a) => {
    const { __scopeToast: s, children: o, ...r } = a,
      c = nu(lu, s),
      [d, m] = S.useState(!1),
      [g, y] = S.useState(!1);
    return (
      G1(() => m(!0)),
      S.useEffect(() => {
        const h = window.setTimeout(() => y(!0), 1e3);
        return () => window.clearTimeout(h);
      }, []),
      g
        ? null
        : v.jsx(Ip, {
            asChild: !0,
            children: v.jsx(fc, {
              ...r,
              children:
                d && v.jsxs(v.Fragment, { children: [c.label, " ", o] }),
            }),
          })
    );
  },
  B1 = "ToastTitle",
  uy = S.forwardRef((a, s) => {
    const { __scopeToast: o, ...r } = a;
    return v.jsx(tn.div, { ...r, ref: s });
  });
uy.displayName = B1;
var q1 = "ToastDescription",
  oy = S.forwardRef((a, s) => {
    const { __scopeToast: o, ...r } = a;
    return v.jsx(tn.div, { ...r, ref: s });
  });
oy.displayName = q1;
var ry = "ToastAction",
  cy = S.forwardRef((a, s) => {
    const { altText: o, ...r } = a;
    return o.trim()
      ? v.jsx(dy, {
          altText: o,
          asChild: !0,
          children: v.jsx(mc, { ...r, ref: s }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${ry}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
cy.displayName = ry;
var fy = "ToastClose",
  mc = S.forwardRef((a, s) => {
    const { __scopeToast: o, ...r } = a,
      c = U1(fy, o);
    return v.jsx(dy, {
      asChild: !0,
      children: v.jsx(tn.button, {
        type: "button",
        ...r,
        ref: s,
        onClick: wt(a.onClick, c.onClose),
      }),
    });
  });
mc.displayName = fy;
var dy = S.forwardRef((a, s) => {
  const { __scopeToast: o, altText: r, ...c } = a;
  return v.jsx(tn.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...c,
    ref: s,
  });
});
function hy(a) {
  const s = [];
  return (
    Array.from(a.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && s.push(r.textContent),
        Y1(r))
      ) {
        const c = r.ariaHidden || r.hidden || r.style.display === "none",
          d = r.dataset.radixToastAnnounceExclude === "";
        if (!c)
          if (d) {
            const m = r.dataset.radixToastAnnounceAlt;
            m && s.push(m);
          } else s.push(...hy(r));
      }
    }),
    s
  );
}
function Bs(a, s, o, { discrete: r }) {
  const c = o.originalEvent.currentTarget,
    d = new CustomEvent(a, { bubbles: !0, cancelable: !0, detail: o });
  s && c.addEventListener(a, s, { once: !0 }),
    r ? Zp(c, d) : c.dispatchEvent(d);
}
var np = (a, s, o = 0) => {
  const r = Math.abs(a.x),
    c = Math.abs(a.y),
    d = r > c;
  return s === "left" || s === "right" ? d && r > o : !d && c > o;
};
function G1(a = () => {}) {
  const s = Bt(a);
  It(() => {
    let o = 0,
      r = 0;
    return (
      (o = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(s))
      )),
      () => {
        window.cancelAnimationFrame(o), window.cancelAnimationFrame(r);
      }
    );
  }, [s]);
}
function Y1(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function X1(a) {
  const s = [],
    o = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const c = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || c
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; o.nextNode(); ) s.push(o.currentNode);
  return s;
}
function qr(a) {
  const s = document.activeElement;
  return a.some((o) =>
    o === s ? !0 : (o.focus(), document.activeElement !== s)
  );
}
var V1 = ny,
  my = ay,
  py = sy,
  yy = uy,
  vy = oy,
  gy = cy,
  by = mc;
function Sy(a) {
  var s,
    o,
    r = "";
  if (typeof a == "string" || typeof a == "number") r += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var c = a.length;
      for (s = 0; s < c; s++)
        a[s] && (o = Sy(a[s])) && (r && (r += " "), (r += o));
    } else for (o in a) a[o] && (r && (r += " "), (r += o));
  return r;
}
function xy() {
  for (var a, s, o = 0, r = "", c = arguments.length; o < c; o++)
    (a = arguments[o]) && (s = Sy(a)) && (r && (r += " "), (r += s));
  return r;
}
const lp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  ap = xy,
  Q1 = (a, s) => (o) => {
    var r;
    if (s?.variants == null) return ap(a, o?.class, o?.className);
    const { variants: c, defaultVariants: d } = s,
      m = Object.keys(c).map((h) => {
        const b = o?.[h],
          x = d?.[h];
        if (b === null) return null;
        const A = lp(b) || lp(x);
        return c[h][A];
      }),
      g =
        o &&
        Object.entries(o).reduce((h, b) => {
          let [x, A] = b;
          return A === void 0 || (h[x] = A), h;
        }, {}),
      y =
        s == null || (r = s.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((h, b) => {
              let { class: x, className: A, ..._ } = b;
              return Object.entries(_).every((z) => {
                let [C, j] = z;
                return Array.isArray(j)
                  ? j.includes({ ...d, ...g }[C])
                  : { ...d, ...g }[C] === j;
              })
                ? [...h, x, A]
                : h;
            }, []);
    return ap(a, m, y, o?.class, o?.className);
  };
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  K1 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, o, r) =>
      r ? r.toUpperCase() : o.toLowerCase()
    ),
  ip = (a) => {
    const s = K1(a);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  Ey = (...a) =>
    a
      .filter((s, o, r) => !!s && s.trim() !== "" && r.indexOf(s) === o)
      .join(" ")
      .trim(),
  Z1 = (a) => {
    for (const s in a)
      if (s.startsWith("aria-") || s === "role" || s === "title") return !0;
  };
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = S.forwardRef(
  (
    {
      color: a = "currentColor",
      size: s = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: d,
      iconNode: m,
      ...g
    },
    y
  ) =>
    S.createElement(
      "svg",
      {
        ref: y,
        ...J1,
        width: s,
        height: s,
        stroke: a,
        strokeWidth: r ? (Number(o) * 24) / Number(s) : o,
        className: Ey("lucide", c),
        ...(!d && !Z1(g) && { "aria-hidden": "true" }),
        ...g,
      },
      [
        ...m.map(([h, b]) => S.createElement(h, b)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const au = (a, s) => {
  const o = S.forwardRef(({ className: r, ...c }, d) =>
    S.createElement(F1, {
      ref: d,
      iconNode: s,
      className: Ey(`lucide-${k1(ip(a))}`, `lucide-${a}`, r),
      ...c,
    })
  );
  return (o.displayName = ip(a)), o;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  P1 = au("circle-alert", $1);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
  ],
  I1 = au("history", W1);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eS = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  sp = au("triangle-alert", eS);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tS = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  nS = au("x", tS),
  pc = "-",
  lS = (a) => {
    const s = iS(a),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: r } = a;
    return {
      getClassGroupId: (m) => {
        const g = m.split(pc);
        return g[0] === "" && g.length !== 1 && g.shift(), Ty(g, s) || aS(m);
      },
      getConflictingClassGroupIds: (m, g) => {
        const y = o[m] || [];
        return g && r[m] ? [...y, ...r[m]] : y;
      },
    };
  },
  Ty = (a, s) => {
    if (a.length === 0) return s.classGroupId;
    const o = a[0],
      r = s.nextPart.get(o),
      c = r ? Ty(a.slice(1), r) : void 0;
    if (c) return c;
    if (s.validators.length === 0) return;
    const d = a.join(pc);
    return s.validators.find(({ validator: m }) => m(d))?.classGroupId;
  },
  up = /^\[(.+)\]$/,
  aS = (a) => {
    if (up.test(a)) {
      const s = up.exec(a)[1],
        o = s?.substring(0, s.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  iS = (a) => {
    const { theme: s, classGroups: o } = a,
      r = { nextPart: new Map(), validators: [] };
    for (const c in o) Pr(o[c], r, c, s);
    return r;
  },
  Pr = (a, s, o, r) => {
    a.forEach((c) => {
      if (typeof c == "string") {
        const d = c === "" ? s : op(s, c);
        d.classGroupId = o;
        return;
      }
      if (typeof c == "function") {
        if (sS(c)) {
          Pr(c(r), s, o, r);
          return;
        }
        s.validators.push({ validator: c, classGroupId: o });
        return;
      }
      Object.entries(c).forEach(([d, m]) => {
        Pr(m, op(s, d), o, r);
      });
    });
  },
  op = (a, s) => {
    let o = a;
    return (
      s.split(pc).forEach((r) => {
        o.nextPart.has(r) ||
          o.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(r));
      }),
      o
    );
  },
  sS = (a) => a.isThemeGetter,
  uS = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      o = new Map(),
      r = new Map();
    const c = (d, m) => {
      o.set(d, m), s++, s > a && ((s = 0), (r = o), (o = new Map()));
    };
    return {
      get(d) {
        let m = o.get(d);
        if (m !== void 0) return m;
        if ((m = r.get(d)) !== void 0) return c(d, m), m;
      },
      set(d, m) {
        o.has(d) ? o.set(d, m) : c(d, m);
      },
    };
  },
  Wr = "!",
  Ir = ":",
  oS = Ir.length,
  rS = (a) => {
    const { prefix: s, experimentalParseClassName: o } = a;
    let r = (c) => {
      const d = [];
      let m = 0,
        g = 0,
        y = 0,
        h;
      for (let z = 0; z < c.length; z++) {
        let C = c[z];
        if (m === 0 && g === 0) {
          if (C === Ir) {
            d.push(c.slice(y, z)), (y = z + oS);
            continue;
          }
          if (C === "/") {
            h = z;
            continue;
          }
        }
        C === "[" ? m++ : C === "]" ? m-- : C === "(" ? g++ : C === ")" && g--;
      }
      const b = d.length === 0 ? c : c.substring(y),
        x = cS(b),
        A = x !== b,
        _ = h && h > y ? h - y : void 0;
      return {
        modifiers: d,
        hasImportantModifier: A,
        baseClassName: x,
        maybePostfixModifierPosition: _,
      };
    };
    if (s) {
      const c = s + Ir,
        d = r;
      r = (m) =>
        m.startsWith(c)
          ? d(m.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: m,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (o) {
      const c = r;
      r = (d) => o({ className: d, parseClassName: c });
    }
    return r;
  },
  cS = (a) =>
    a.endsWith(Wr)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Wr)
      ? a.substring(1)
      : a,
  fS = (a) => {
    const s = Object.fromEntries(a.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const c = [];
      let d = [];
      return (
        r.forEach((m) => {
          m[0] === "[" || s[m] ? (c.push(...d.sort(), m), (d = [])) : d.push(m);
        }),
        c.push(...d.sort()),
        c
      );
    };
  },
  dS = (a) => ({
    cache: uS(a.cacheSize),
    parseClassName: rS(a),
    sortModifiers: fS(a),
    ...lS(a),
  }),
  hS = /\s+/,
  mS = (a, s) => {
    const {
        parseClassName: o,
        getClassGroupId: r,
        getConflictingClassGroupIds: c,
        sortModifiers: d,
      } = s,
      m = [],
      g = a.trim().split(hS);
    let y = "";
    for (let h = g.length - 1; h >= 0; h -= 1) {
      const b = g[h],
        {
          isExternal: x,
          modifiers: A,
          hasImportantModifier: _,
          baseClassName: z,
          maybePostfixModifierPosition: C,
        } = o(b);
      if (x) {
        y = b + (y.length > 0 ? " " + y : y);
        continue;
      }
      let j = !!C,
        X = r(j ? z.substring(0, C) : z);
      if (!X) {
        if (!j) {
          y = b + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((X = r(z)), !X)) {
          y = b + (y.length > 0 ? " " + y : y);
          continue;
        }
        j = !1;
      }
      const k = d(A).join(":"),
        Q = _ ? k + Wr : k,
        Z = Q + X;
      if (m.includes(Z)) continue;
      m.push(Z);
      const $ = c(X, j);
      for (let P = 0; P < $.length; ++P) {
        const Y = $[P];
        m.push(Q + Y);
      }
      y = b + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function pS() {
  let a = 0,
    s,
    o,
    r = "";
  for (; a < arguments.length; )
    (s = arguments[a++]) && (o = wy(s)) && (r && (r += " "), (r += o));
  return r;
}
const wy = (a) => {
  if (typeof a == "string") return a;
  let s,
    o = "";
  for (let r = 0; r < a.length; r++)
    a[r] && (s = wy(a[r])) && (o && (o += " "), (o += s));
  return o;
};
function yS(a, ...s) {
  let o,
    r,
    c,
    d = m;
  function m(y) {
    const h = s.reduce((b, x) => x(b), a());
    return (o = dS(h)), (r = o.cache.get), (c = o.cache.set), (d = g), g(y);
  }
  function g(y) {
    const h = r(y);
    if (h) return h;
    const b = mS(y, o);
    return c(y, b), b;
  }
  return function () {
    return d(pS.apply(null, arguments));
  };
}
const Je = (a) => {
    const s = (o) => o[a] || [];
    return (s.isThemeGetter = !0), s;
  },
  Ay = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Oy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vS = /^\d+\/\d+$/,
  gS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  bS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  SS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  xS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ES =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ua = (a) => vS.test(a),
  ve = (a) => !!a && !Number.isNaN(Number(a)),
  $n = (a) => !!a && Number.isInteger(Number(a)),
  Gr = (a) => a.endsWith("%") && ve(a.slice(0, -1)),
  En = (a) => gS.test(a),
  TS = () => !0,
  wS = (a) => bS.test(a) && !SS.test(a),
  Cy = () => !1,
  AS = (a) => xS.test(a),
  OS = (a) => ES.test(a),
  CS = (a) => !ee(a) && !te(a),
  NS = (a) => da(a, My, Cy),
  ee = (a) => Ay.test(a),
  xl = (a) => da(a, _y, wS),
  Yr = (a) => da(a, zS, ve),
  rp = (a) => da(a, Ny, Cy),
  RS = (a) => da(a, Ry, OS),
  qs = (a) => da(a, Dy, AS),
  te = (a) => Oy.test(a),
  ci = (a) => ha(a, _y),
  MS = (a) => ha(a, jS),
  cp = (a) => ha(a, Ny),
  _S = (a) => ha(a, My),
  DS = (a) => ha(a, Ry),
  Gs = (a) => ha(a, Dy, !0),
  da = (a, s, o) => {
    const r = Ay.exec(a);
    return r ? (r[1] ? s(r[1]) : o(r[2])) : !1;
  },
  ha = (a, s, o = !1) => {
    const r = Oy.exec(a);
    return r ? (r[1] ? s(r[1]) : o) : !1;
  },
  Ny = (a) => a === "position" || a === "percentage",
  Ry = (a) => a === "image" || a === "url",
  My = (a) => a === "length" || a === "size" || a === "bg-size",
  _y = (a) => a === "length",
  zS = (a) => a === "number",
  jS = (a) => a === "family-name",
  Dy = (a) => a === "shadow",
  US = () => {
    const a = Je("color"),
      s = Je("font"),
      o = Je("text"),
      r = Je("font-weight"),
      c = Je("tracking"),
      d = Je("leading"),
      m = Je("breakpoint"),
      g = Je("container"),
      y = Je("spacing"),
      h = Je("radius"),
      b = Je("shadow"),
      x = Je("inset-shadow"),
      A = Je("text-shadow"),
      _ = Je("drop-shadow"),
      z = Je("blur"),
      C = Je("perspective"),
      j = Je("aspect"),
      X = Je("ease"),
      k = Je("animate"),
      Q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      $ = () => [...Z(), te, ee],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", "contain", "none"],
      J = () => [te, ee, y],
      oe = () => [ua, "full", "auto", ...J()],
      me = () => [$n, "none", "subgrid", te, ee],
      ge = () => ["auto", { span: ["full", $n, te, ee] }, $n, te, ee],
      ye = () => [$n, "auto", te, ee],
      we = () => ["auto", "min", "max", "fr", te, ee],
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      N = () => ["auto", ...J()],
      V = () => [
        ua,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...J(),
      ],
      H = () => [a, te, ee],
      ie = () => [...Z(), cp, rp, { position: [te, ee] }],
      ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      T = () => ["auto", "cover", "contain", _S, NS, { size: [te, ee] }],
      B = () => [Gr, ci, xl],
      K = () => ["", "none", "full", h, te, ee],
      F = () => ["", ve, ci, xl],
      ue = () => ["solid", "dashed", "dotted", "double"],
      de = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      le = () => [ve, Gr, cp, rp],
      Ge = () => ["", "none", z, te, ee],
      Me = () => ["none", ve, te, ee],
      Ct = () => ["none", ve, te, ee],
      kt = () => [ve, te, ee],
      Kt = () => [ua, "full", ...J()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [En],
        breakpoint: [En],
        color: [TS],
        container: [En],
        "drop-shadow": [En],
        ease: ["in", "out", "in-out"],
        font: [CS],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [En],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [En],
        shadow: [En],
        spacing: ["px", ve],
        text: [En],
        "text-shadow": [En],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ua, ee, te, j] }],
        container: ["container"],
        columns: [{ columns: [ve, ee, te, g] }],
        "break-after": [{ "break-after": Q() }],
        "break-before": [{ "break-before": Q() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: $() }],
        overflow: [{ overflow: P() }],
        "overflow-x": [{ "overflow-x": P() }],
        "overflow-y": [{ "overflow-y": P() }],
        overscroll: [{ overscroll: Y() }],
        "overscroll-x": [{ "overscroll-x": Y() }],
        "overscroll-y": [{ "overscroll-y": Y() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: oe() }],
        "inset-x": [{ "inset-x": oe() }],
        "inset-y": [{ "inset-y": oe() }],
        start: [{ start: oe() }],
        end: [{ end: oe() }],
        top: [{ top: oe() }],
        right: [{ right: oe() }],
        bottom: [{ bottom: oe() }],
        left: [{ left: oe() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [$n, "auto", te, ee] }],
        basis: [{ basis: [ua, "full", "auto", g, ...J()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ve, ua, "auto", "initial", "none", ee] }],
        grow: [{ grow: ["", ve, te, ee] }],
        shrink: [{ shrink: ["", ve, te, ee] }],
        order: [{ order: [$n, "first", "last", "none", te, ee] }],
        "grid-cols": [{ "grid-cols": me() }],
        "col-start-end": [{ col: ge() }],
        "col-start": [{ "col-start": ye() }],
        "col-end": [{ "col-end": ye() }],
        "grid-rows": [{ "grid-rows": me() }],
        "row-start-end": [{ row: ge() }],
        "row-start": [{ "row-start": ye() }],
        "row-end": [{ "row-end": ye() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": we() }],
        "auto-rows": [{ "auto-rows": we() }],
        gap: [{ gap: J() }],
        "gap-x": [{ "gap-x": J() }],
        "gap-y": [{ "gap-y": J() }],
        "justify-content": [{ justify: [...W(), "normal"] }],
        "justify-items": [{ "justify-items": [...fe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...fe()] }],
        "align-content": [{ content: ["normal", ...W()] }],
        "align-items": [{ items: [...fe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...fe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": W() }],
        "place-items": [{ "place-items": [...fe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...fe()] }],
        p: [{ p: J() }],
        px: [{ px: J() }],
        py: [{ py: J() }],
        ps: [{ ps: J() }],
        pe: [{ pe: J() }],
        pt: [{ pt: J() }],
        pr: [{ pr: J() }],
        pb: [{ pb: J() }],
        pl: [{ pl: J() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        "space-x": [{ "space-x": J() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": J() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: V() }],
        w: [{ w: [g, "screen", ...V()] }],
        "min-w": [{ "min-w": [g, "screen", "none", ...V()] }],
        "max-w": [
          { "max-w": [g, "screen", "none", "prose", { screen: [m] }, ...V()] },
        ],
        h: [{ h: ["screen", "lh", ...V()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...V()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...V()] }],
        "font-size": [{ text: ["base", o, ci, xl] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, te, Yr] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Gr,
              ee,
            ],
          },
        ],
        "font-family": [{ font: [MS, ee, s] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, te, ee] }],
        "line-clamp": [{ "line-clamp": [ve, "none", te, Yr] }],
        leading: [{ leading: [d, ...J()] }],
        "list-image": [{ "list-image": ["none", te, ee] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", te, ee] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: H() }],
        "text-color": [{ text: H() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ve, "from-font", "auto", te, xl] },
        ],
        "text-decoration-color": [{ decoration: H() }],
        "underline-offset": [{ "underline-offset": [ve, "auto", te, ee] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: J() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
              ee,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te, ee] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ie() }],
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: T() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  $n,
                  te,
                  ee,
                ],
                radial: ["", te, ee],
                conic: [$n, te, ee],
              },
              DS,
              RS,
            ],
          },
        ],
        "bg-color": [{ bg: H() }],
        "gradient-from-pos": [{ from: B() }],
        "gradient-via-pos": [{ via: B() }],
        "gradient-to-pos": [{ to: B() }],
        "gradient-from": [{ from: H() }],
        "gradient-via": [{ via: H() }],
        "gradient-to": [{ to: H() }],
        rounded: [{ rounded: K() }],
        "rounded-s": [{ "rounded-s": K() }],
        "rounded-e": [{ "rounded-e": K() }],
        "rounded-t": [{ "rounded-t": K() }],
        "rounded-r": [{ "rounded-r": K() }],
        "rounded-b": [{ "rounded-b": K() }],
        "rounded-l": [{ "rounded-l": K() }],
        "rounded-ss": [{ "rounded-ss": K() }],
        "rounded-se": [{ "rounded-se": K() }],
        "rounded-ee": [{ "rounded-ee": K() }],
        "rounded-es": [{ "rounded-es": K() }],
        "rounded-tl": [{ "rounded-tl": K() }],
        "rounded-tr": [{ "rounded-tr": K() }],
        "rounded-br": [{ "rounded-br": K() }],
        "rounded-bl": [{ "rounded-bl": K() }],
        "border-w": [{ border: F() }],
        "border-w-x": [{ "border-x": F() }],
        "border-w-y": [{ "border-y": F() }],
        "border-w-s": [{ "border-s": F() }],
        "border-w-e": [{ "border-e": F() }],
        "border-w-t": [{ "border-t": F() }],
        "border-w-r": [{ "border-r": F() }],
        "border-w-b": [{ "border-b": F() }],
        "border-w-l": [{ "border-l": F() }],
        "divide-x": [{ "divide-x": F() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": F() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ue(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ue(), "hidden", "none"] }],
        "border-color": [{ border: H() }],
        "border-color-x": [{ "border-x": H() }],
        "border-color-y": [{ "border-y": H() }],
        "border-color-s": [{ "border-s": H() }],
        "border-color-e": [{ "border-e": H() }],
        "border-color-t": [{ "border-t": H() }],
        "border-color-r": [{ "border-r": H() }],
        "border-color-b": [{ "border-b": H() }],
        "border-color-l": [{ "border-l": H() }],
        "divide-color": [{ divide: H() }],
        "outline-style": [{ outline: [...ue(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ve, te, ee] }],
        "outline-w": [{ outline: ["", ve, ci, xl] }],
        "outline-color": [{ outline: H() }],
        shadow: [{ shadow: ["", "none", b, Gs, qs] }],
        "shadow-color": [{ shadow: H() }],
        "inset-shadow": [{ "inset-shadow": ["none", x, Gs, qs] }],
        "inset-shadow-color": [{ "inset-shadow": H() }],
        "ring-w": [{ ring: F() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: H() }],
        "ring-offset-w": [{ "ring-offset": [ve, xl] }],
        "ring-offset-color": [{ "ring-offset": H() }],
        "inset-ring-w": [{ "inset-ring": F() }],
        "inset-ring-color": [{ "inset-ring": H() }],
        "text-shadow": [{ "text-shadow": ["none", A, Gs, qs] }],
        "text-shadow-color": [{ "text-shadow": H() }],
        opacity: [{ opacity: [ve, te, ee] }],
        "mix-blend": [
          { "mix-blend": [...de(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ve] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": H() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": H() }],
        "mask-image-t-from-pos": [{ "mask-t-from": le() }],
        "mask-image-t-to-pos": [{ "mask-t-to": le() }],
        "mask-image-t-from-color": [{ "mask-t-from": H() }],
        "mask-image-t-to-color": [{ "mask-t-to": H() }],
        "mask-image-r-from-pos": [{ "mask-r-from": le() }],
        "mask-image-r-to-pos": [{ "mask-r-to": le() }],
        "mask-image-r-from-color": [{ "mask-r-from": H() }],
        "mask-image-r-to-color": [{ "mask-r-to": H() }],
        "mask-image-b-from-pos": [{ "mask-b-from": le() }],
        "mask-image-b-to-pos": [{ "mask-b-to": le() }],
        "mask-image-b-from-color": [{ "mask-b-from": H() }],
        "mask-image-b-to-color": [{ "mask-b-to": H() }],
        "mask-image-l-from-pos": [{ "mask-l-from": le() }],
        "mask-image-l-to-pos": [{ "mask-l-to": le() }],
        "mask-image-l-from-color": [{ "mask-l-from": H() }],
        "mask-image-l-to-color": [{ "mask-l-to": H() }],
        "mask-image-x-from-pos": [{ "mask-x-from": le() }],
        "mask-image-x-to-pos": [{ "mask-x-to": le() }],
        "mask-image-x-from-color": [{ "mask-x-from": H() }],
        "mask-image-x-to-color": [{ "mask-x-to": H() }],
        "mask-image-y-from-pos": [{ "mask-y-from": le() }],
        "mask-image-y-to-pos": [{ "mask-y-to": le() }],
        "mask-image-y-from-color": [{ "mask-y-from": H() }],
        "mask-image-y-to-color": [{ "mask-y-to": H() }],
        "mask-image-radial": [{ "mask-radial": [te, ee] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": H() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": H() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Z() }],
        "mask-image-conic-pos": [{ "mask-conic": [ve] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": H() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": H() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ie() }],
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: T() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", te, ee] }],
        filter: [{ filter: ["", "none", te, ee] }],
        blur: [{ blur: Ge() }],
        brightness: [{ brightness: [ve, te, ee] }],
        contrast: [{ contrast: [ve, te, ee] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Gs, qs] }],
        "drop-shadow-color": [{ "drop-shadow": H() }],
        grayscale: [{ grayscale: ["", ve, te, ee] }],
        "hue-rotate": [{ "hue-rotate": [ve, te, ee] }],
        invert: [{ invert: ["", ve, te, ee] }],
        saturate: [{ saturate: [ve, te, ee] }],
        sepia: [{ sepia: ["", ve, te, ee] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", te, ee] }],
        "backdrop-blur": [{ "backdrop-blur": Ge() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ve, te, ee] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ve, te, ee] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ve, te, ee] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ve, te, ee] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ve, te, ee] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ve, te, ee] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ve, te, ee] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ve, te, ee] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": J() }],
        "border-spacing-x": [{ "border-spacing-x": J() }],
        "border-spacing-y": [{ "border-spacing-y": J() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              te,
              ee,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ve, "initial", te, ee] }],
        ease: [{ ease: ["linear", "initial", X, te, ee] }],
        delay: [{ delay: [ve, te, ee] }],
        animate: [{ animate: ["none", k, te, ee] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [C, te, ee] }],
        "perspective-origin": [{ "perspective-origin": $() }],
        rotate: [{ rotate: Me() }],
        "rotate-x": [{ "rotate-x": Me() }],
        "rotate-y": [{ "rotate-y": Me() }],
        "rotate-z": [{ "rotate-z": Me() }],
        scale: [{ scale: Ct() }],
        "scale-x": [{ "scale-x": Ct() }],
        "scale-y": [{ "scale-y": Ct() }],
        "scale-z": [{ "scale-z": Ct() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: kt() }],
        "skew-x": [{ "skew-x": kt() }],
        "skew-y": [{ "skew-y": kt() }],
        transform: [{ transform: [te, ee, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: $() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Kt() }],
        "translate-x": [{ "translate-x": Kt() }],
        "translate-y": [{ "translate-y": Kt() }],
        "translate-z": [{ "translate-z": Kt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: H() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: H() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
              ee,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": J() }],
        "scroll-mx": [{ "scroll-mx": J() }],
        "scroll-my": [{ "scroll-my": J() }],
        "scroll-ms": [{ "scroll-ms": J() }],
        "scroll-me": [{ "scroll-me": J() }],
        "scroll-mt": [{ "scroll-mt": J() }],
        "scroll-mr": [{ "scroll-mr": J() }],
        "scroll-mb": [{ "scroll-mb": J() }],
        "scroll-ml": [{ "scroll-ml": J() }],
        "scroll-p": [{ "scroll-p": J() }],
        "scroll-px": [{ "scroll-px": J() }],
        "scroll-py": [{ "scroll-py": J() }],
        "scroll-ps": [{ "scroll-ps": J() }],
        "scroll-pe": [{ "scroll-pe": J() }],
        "scroll-pt": [{ "scroll-pt": J() }],
        "scroll-pr": [{ "scroll-pr": J() }],
        "scroll-pb": [{ "scroll-pb": J() }],
        "scroll-pl": [{ "scroll-pl": J() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", te, ee],
          },
        ],
        fill: [{ fill: ["none", ...H()] }],
        "stroke-w": [{ stroke: [ve, ci, xl, Yr] }],
        stroke: [{ stroke: ["none", ...H()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  HS = yS(US);
function Ot(...a) {
  return HS(xy(a));
}
const LS = V1,
  zy = S.forwardRef(({ className: a, ...s }, o) =>
    v.jsx(my, {
      ref: o,
      className: Ot(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        a
      ),
      ...s,
    })
  );
zy.displayName = my.displayName;
const BS = Q1(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  jy = S.forwardRef(({ className: a, variant: s, ...o }, r) =>
    v.jsx(py, { ref: r, className: Ot(BS({ variant: s }), a), ...o })
  );
jy.displayName = py.displayName;
const qS = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx(gy, {
    ref: o,
    className: Ot(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      a
    ),
    ...s,
  })
);
qS.displayName = gy.displayName;
const Uy = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx(by, {
    ref: o,
    className: Ot(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      a
    ),
    "toast-close": "",
    ...s,
    children: v.jsx(nS, { className: "h-4 w-4" }),
  })
);
Uy.displayName = by.displayName;
const Hy = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx(yy, { ref: o, className: Ot("text-sm font-semibold", a), ...s })
);
Hy.displayName = yy.displayName;
const Ly = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx(vy, { ref: o, className: Ot("text-sm opacity-90", a), ...s })
);
Ly.displayName = vy.displayName;
function GS() {
  const { toasts: a } = kp();
  return v.jsxs(LS, {
    children: [
      a.map(function ({ id: s, title: o, description: r, action: c, ...d }) {
        return v.jsxs(
          jy,
          {
            ...d,
            children: [
              v.jsxs("div", {
                className: "grid gap-1",
                children: [
                  o && v.jsx(Hy, { children: o }),
                  r && v.jsx(Ly, { children: r }),
                ],
              }),
              c,
              v.jsx(Uy, {}),
            ],
          },
          s
        );
      }),
      v.jsx(zy, {}),
    ],
  });
}
function oa(a, s, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (c) {
    if ((a?.(c), o === !1 || !c.defaultPrevented)) return s?.(c);
  };
}
function Xr(a, s, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (c) {
    if ((a?.(c), o === !1 || !c.defaultPrevented)) return s?.(c);
  };
}
function YS(a) {
  const s = XS(a),
    o = S.forwardRef((r, c) => {
      const { children: d, ...m } = r,
        g = S.Children.toArray(d),
        y = g.find(QS);
      if (y) {
        const h = y.props.children,
          b = g.map((x) =>
            x === y
              ? S.Children.count(h) > 1
                ? S.Children.only(null)
                : S.isValidElement(h)
                ? h.props.children
                : null
              : x
          );
        return v.jsx(s, {
          ...m,
          ref: c,
          children: S.isValidElement(h) ? S.cloneElement(h, void 0, b) : null,
        });
      }
      return v.jsx(s, { ...m, ref: c, children: d });
    });
  return (o.displayName = `${a}.Slot`), o;
}
function XS(a) {
  const s = S.forwardRef((o, r) => {
    const { children: c, ...d } = o;
    if (S.isValidElement(c)) {
      const m = KS(c),
        g = kS(d, c.props);
      return (
        c.type !== S.Fragment && (g.ref = r ? cc(r, m) : m),
        S.cloneElement(c, g)
      );
    }
    return S.Children.count(c) > 1 ? S.Children.only(null) : null;
  });
  return (s.displayName = `${a}.SlotClone`), s;
}
var VS = Symbol("radix.slottable");
function QS(a) {
  return (
    S.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === VS
  );
}
function kS(a, s) {
  const o = { ...s };
  for (const r in s) {
    const c = a[r],
      d = s[r];
    /^on[A-Z]/.test(r)
      ? c && d
        ? (o[r] = (...g) => {
            const y = d(...g);
            return c(...g), y;
          })
        : c && (o[r] = c)
      : r === "style"
      ? (o[r] = { ...c, ...d })
      : r === "className" && (o[r] = [c, d].filter(Boolean).join(" "));
  }
  return { ...a, ...o };
}
function KS(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = s && "isReactWarning" in s && s.isReactWarning;
  return o
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = s && "isReactWarning" in s && s.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
var ZS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  el = ZS.reduce((a, s) => {
    const o = YS(`Primitive.${s}`),
      r = S.forwardRef((c, d) => {
        const { asChild: m, ...g } = c,
          y = m ? o : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(y, { ...g, ref: d })
        );
      });
    return (r.displayName = `Primitive.${s}`), { ...a, [s]: r };
  }, {});
function JS(a, s) {
  a && yi.flushSync(() => a.dispatchEvent(s));
}
var FS = "DismissableLayer",
  ec = "dismissableLayer.update",
  $S = "dismissableLayer.pointerDownOutside",
  PS = "dismissableLayer.focusOutside",
  fp,
  By = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  qy = S.forwardRef((a, s) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: m,
        onDismiss: g,
        ...y
      } = a,
      h = S.useContext(By),
      [b, x] = S.useState(null),
      A = b?.ownerDocument ?? globalThis?.document,
      [, _] = S.useState({}),
      z = dt(s, (Y) => x(Y)),
      C = Array.from(h.layers),
      [j] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      X = C.indexOf(j),
      k = b ? C.indexOf(b) : -1,
      Q = h.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = k >= X,
      $ = ex((Y) => {
        const J = Y.target,
          oe = [...h.branches].some((me) => me.contains(J));
        !Z || oe || (c?.(Y), m?.(Y), Y.defaultPrevented || g?.());
      }, A),
      P = tx((Y) => {
        const J = Y.target;
        [...h.branches].some((me) => me.contains(J)) ||
          (d?.(Y), m?.(Y), Y.defaultPrevented || g?.());
      }, A);
    return (
      Jp((Y) => {
        k === h.layers.size - 1 &&
          (r?.(Y), !Y.defaultPrevented && g && (Y.preventDefault(), g()));
      }, A),
      S.useEffect(() => {
        if (b)
          return (
            o &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((fp = A.body.style.pointerEvents),
                (A.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(b)),
            h.layers.add(b),
            dp(),
            () => {
              o &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (A.body.style.pointerEvents = fp);
            }
          );
      }, [b, A, o, h]),
      S.useEffect(
        () => () => {
          b &&
            (h.layers.delete(b),
            h.layersWithOutsidePointerEventsDisabled.delete(b),
            dp());
        },
        [b, h]
      ),
      S.useEffect(() => {
        const Y = () => _({});
        return (
          document.addEventListener(ec, Y),
          () => document.removeEventListener(ec, Y)
        );
      }, []),
      v.jsx(el.div, {
        ...y,
        ref: z,
        style: {
          pointerEvents: Q ? (Z ? "auto" : "none") : void 0,
          ...a.style,
        },
        onFocusCapture: Xr(a.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Xr(a.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Xr(
          a.onPointerDownCapture,
          $.onPointerDownCapture
        ),
      })
    );
  });
qy.displayName = FS;
var WS = "DismissableLayerBranch",
  IS = S.forwardRef((a, s) => {
    const o = S.useContext(By),
      r = S.useRef(null),
      c = dt(s, r);
    return (
      S.useEffect(() => {
        const d = r.current;
        if (d)
          return (
            o.branches.add(d),
            () => {
              o.branches.delete(d);
            }
          );
      }, [o.branches]),
      v.jsx(el.div, { ...a, ref: c })
    );
  });
IS.displayName = WS;
function ex(a, s = globalThis?.document) {
  const o = Bt(a),
    r = S.useRef(!1),
    c = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const d = (g) => {
          if (g.target && !r.current) {
            let y = function () {
              Gy($S, o, h, { discrete: !0 });
            };
            const h = { originalEvent: g };
            g.pointerType === "touch"
              ? (s.removeEventListener("click", c.current),
                (c.current = y),
                s.addEventListener("click", c.current, { once: !0 }))
              : y();
          } else s.removeEventListener("click", c.current);
          r.current = !1;
        },
        m = window.setTimeout(() => {
          s.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(m),
          s.removeEventListener("pointerdown", d),
          s.removeEventListener("click", c.current);
      };
    }, [s, o]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function tx(a, s = globalThis?.document) {
  const o = Bt(a),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const c = (d) => {
        d.target &&
          !r.current &&
          Gy(PS, o, { originalEvent: d }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", c),
        () => s.removeEventListener("focusin", c)
      );
    }, [s, o]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function dp() {
  const a = new CustomEvent(ec);
  document.dispatchEvent(a);
}
function Gy(a, s, o, { discrete: r }) {
  const c = o.originalEvent.target,
    d = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: o });
  s && c.addEventListener(a, s, { once: !0 }),
    r ? JS(c, d) : c.dispatchEvent(d);
}
const nx = ["top", "right", "bottom", "left"],
  Wn = Math.min,
  Tt = Math.max,
  Zs = Math.round,
  Ys = Math.floor,
  Wt = (a) => ({ x: a, y: a }),
  lx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ax = { start: "end", end: "start" };
function tc(a, s, o) {
  return Tt(a, Wn(s, o));
}
function Tn(a, s) {
  return typeof a == "function" ? a(s) : a;
}
function wn(a) {
  return a.split("-")[0];
}
function ma(a) {
  return a.split("-")[1];
}
function yc(a) {
  return a === "x" ? "y" : "x";
}
function vc(a) {
  return a === "y" ? "height" : "width";
}
const ix = new Set(["top", "bottom"]);
function Pt(a) {
  return ix.has(wn(a)) ? "y" : "x";
}
function gc(a) {
  return yc(Pt(a));
}
function sx(a, s, o) {
  o === void 0 && (o = !1);
  const r = ma(a),
    c = gc(a),
    d = vc(c);
  let m =
    c === "x"
      ? r === (o ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return s.reference[d] > s.floating[d] && (m = Js(m)), [m, Js(m)];
}
function ux(a) {
  const s = Js(a);
  return [nc(a), s, nc(s)];
}
function nc(a) {
  return a.replace(/start|end/g, (s) => ax[s]);
}
const hp = ["left", "right"],
  mp = ["right", "left"],
  ox = ["top", "bottom"],
  rx = ["bottom", "top"];
function cx(a, s, o) {
  switch (a) {
    case "top":
    case "bottom":
      return o ? (s ? mp : hp) : s ? hp : mp;
    case "left":
    case "right":
      return s ? ox : rx;
    default:
      return [];
  }
}
function fx(a, s, o, r) {
  const c = ma(a);
  let d = cx(wn(a), o === "start", r);
  return (
    c && ((d = d.map((m) => m + "-" + c)), s && (d = d.concat(d.map(nc)))), d
  );
}
function Js(a) {
  return a.replace(/left|right|bottom|top/g, (s) => lx[s]);
}
function dx(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function Yy(a) {
  return typeof a != "number"
    ? dx(a)
    : { top: a, right: a, bottom: a, left: a };
}
function Fs(a) {
  const { x: s, y: o, width: r, height: c } = a;
  return {
    width: r,
    height: c,
    top: o,
    left: s,
    right: s + r,
    bottom: o + c,
    x: s,
    y: o,
  };
}
function pp(a, s, o) {
  let { reference: r, floating: c } = a;
  const d = Pt(s),
    m = gc(s),
    g = vc(m),
    y = wn(s),
    h = d === "y",
    b = r.x + r.width / 2 - c.width / 2,
    x = r.y + r.height / 2 - c.height / 2,
    A = r[g] / 2 - c[g] / 2;
  let _;
  switch (y) {
    case "top":
      _ = { x: b, y: r.y - c.height };
      break;
    case "bottom":
      _ = { x: b, y: r.y + r.height };
      break;
    case "right":
      _ = { x: r.x + r.width, y: x };
      break;
    case "left":
      _ = { x: r.x - c.width, y: x };
      break;
    default:
      _ = { x: r.x, y: r.y };
  }
  switch (ma(s)) {
    case "start":
      _[m] -= A * (o && h ? -1 : 1);
      break;
    case "end":
      _[m] += A * (o && h ? -1 : 1);
      break;
  }
  return _;
}
const hx = async (a, s, o) => {
  const {
      placement: r = "bottom",
      strategy: c = "absolute",
      middleware: d = [],
      platform: m,
    } = o,
    g = d.filter(Boolean),
    y = await (m.isRTL == null ? void 0 : m.isRTL(s));
  let h = await m.getElementRects({ reference: a, floating: s, strategy: c }),
    { x: b, y: x } = pp(h, r, y),
    A = r,
    _ = {},
    z = 0;
  for (let C = 0; C < g.length; C++) {
    const { name: j, fn: X } = g[C],
      {
        x: k,
        y: Q,
        data: Z,
        reset: $,
      } = await X({
        x: b,
        y: x,
        initialPlacement: r,
        placement: A,
        strategy: c,
        middlewareData: _,
        rects: h,
        platform: m,
        elements: { reference: a, floating: s },
      });
    (b = k ?? b),
      (x = Q ?? x),
      (_ = { ..._, [j]: { ..._[j], ...Z } }),
      $ &&
        z <= 50 &&
        (z++,
        typeof $ == "object" &&
          ($.placement && (A = $.placement),
          $.rects &&
            (h =
              $.rects === !0
                ? await m.getElementRects({
                    reference: a,
                    floating: s,
                    strategy: c,
                  })
                : $.rects),
          ({ x: b, y: x } = pp(h, A, y))),
        (C = -1));
  }
  return { x: b, y: x, placement: A, strategy: c, middlewareData: _ };
};
async function mi(a, s) {
  var o;
  s === void 0 && (s = {});
  const { x: r, y: c, platform: d, rects: m, elements: g, strategy: y } = a,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: x = "floating",
      altBoundary: A = !1,
      padding: _ = 0,
    } = Tn(s, a),
    z = Yy(_),
    j = g[A ? (x === "floating" ? "reference" : "floating") : x],
    X = Fs(
      await d.getClippingRect({
        element:
          (o = await (d.isElement == null ? void 0 : d.isElement(j))) == null ||
          o
            ? j
            : j.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(g.floating))),
        boundary: h,
        rootBoundary: b,
        strategy: y,
      })
    ),
    k =
      x === "floating"
        ? { x: r, y: c, width: m.floating.width, height: m.floating.height }
        : m.reference,
    Q = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(g.floating)),
    Z = (await (d.isElement == null ? void 0 : d.isElement(Q)))
      ? (await (d.getScale == null ? void 0 : d.getScale(Q))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    $ = Fs(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: g,
            rect: k,
            offsetParent: Q,
            strategy: y,
          })
        : k
    );
  return {
    top: (X.top - $.top + z.top) / Z.y,
    bottom: ($.bottom - X.bottom + z.bottom) / Z.y,
    left: (X.left - $.left + z.left) / Z.x,
    right: ($.right - X.right + z.right) / Z.x,
  };
}
const mx = (a) => ({
    name: "arrow",
    options: a,
    async fn(s) {
      const {
          x: o,
          y: r,
          placement: c,
          rects: d,
          platform: m,
          elements: g,
          middlewareData: y,
        } = s,
        { element: h, padding: b = 0 } = Tn(a, s) || {};
      if (h == null) return {};
      const x = Yy(b),
        A = { x: o, y: r },
        _ = gc(c),
        z = vc(_),
        C = await m.getDimensions(h),
        j = _ === "y",
        X = j ? "top" : "left",
        k = j ? "bottom" : "right",
        Q = j ? "clientHeight" : "clientWidth",
        Z = d.reference[z] + d.reference[_] - A[_] - d.floating[z],
        $ = A[_] - d.reference[_],
        P = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(h));
      let Y = P ? P[Q] : 0;
      (!Y || !(await (m.isElement == null ? void 0 : m.isElement(P)))) &&
        (Y = g.floating[Q] || d.floating[z]);
      const J = Z / 2 - $ / 2,
        oe = Y / 2 - C[z] / 2 - 1,
        me = Wn(x[X], oe),
        ge = Wn(x[k], oe),
        ye = me,
        we = Y - C[z] - ge,
        W = Y / 2 - C[z] / 2 + J,
        fe = tc(ye, W, we),
        N =
          !y.arrow &&
          ma(c) != null &&
          W !== fe &&
          d.reference[z] / 2 - (W < ye ? me : ge) - C[z] / 2 < 0,
        V = N ? (W < ye ? W - ye : W - we) : 0;
      return {
        [_]: A[_] + V,
        data: {
          [_]: fe,
          centerOffset: W - fe - V,
          ...(N && { alignmentOffset: V }),
        },
        reset: N,
      };
    },
  }),
  px = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(s) {
          var o, r;
          const {
              placement: c,
              middlewareData: d,
              rects: m,
              initialPlacement: g,
              platform: y,
              elements: h,
            } = s,
            {
              mainAxis: b = !0,
              crossAxis: x = !0,
              fallbackPlacements: A,
              fallbackStrategy: _ = "bestFit",
              fallbackAxisSideDirection: z = "none",
              flipAlignment: C = !0,
              ...j
            } = Tn(a, s);
          if ((o = d.arrow) != null && o.alignmentOffset) return {};
          const X = wn(c),
            k = Pt(g),
            Q = wn(g) === g,
            Z = await (y.isRTL == null ? void 0 : y.isRTL(h.floating)),
            $ = A || (Q || !C ? [Js(g)] : ux(g)),
            P = z !== "none";
          !A && P && $.push(...fx(g, C, z, Z));
          const Y = [g, ...$],
            J = await mi(s, j),
            oe = [];
          let me = ((r = d.flip) == null ? void 0 : r.overflows) || [];
          if ((b && oe.push(J[X]), x)) {
            const W = sx(c, m, Z);
            oe.push(J[W[0]], J[W[1]]);
          }
          if (
            ((me = [...me, { placement: c, overflows: oe }]),
            !oe.every((W) => W <= 0))
          ) {
            var ge, ye;
            const W = (((ge = d.flip) == null ? void 0 : ge.index) || 0) + 1,
              fe = Y[W];
            if (
              fe &&
              (!(x === "alignment" ? k !== Pt(fe) : !1) ||
                me.every((H) =>
                  Pt(H.placement) === k ? H.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: W, overflows: me },
                reset: { placement: fe },
              };
            let N =
              (ye = me
                .filter((V) => V.overflows[0] <= 0)
                .sort((V, H) => V.overflows[1] - H.overflows[1])[0]) == null
                ? void 0
                : ye.placement;
            if (!N)
              switch (_) {
                case "bestFit": {
                  var we;
                  const V =
                    (we = me
                      .filter((H) => {
                        if (P) {
                          const ie = Pt(H.placement);
                          return ie === k || ie === "y";
                        }
                        return !0;
                      })
                      .map((H) => [
                        H.placement,
                        H.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, ce) => ie + ce, 0),
                      ])
                      .sort((H, ie) => H[1] - ie[1])[0]) == null
                      ? void 0
                      : we[0];
                  V && (N = V);
                  break;
                }
                case "initialPlacement":
                  N = g;
                  break;
              }
            if (c !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function yp(a, s) {
  return {
    top: a.top - s.height,
    right: a.right - s.width,
    bottom: a.bottom - s.height,
    left: a.left - s.width,
  };
}
function vp(a) {
  return nx.some((s) => a[s] >= 0);
}
const yx = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(s) {
          const { rects: o } = s,
            { strategy: r = "referenceHidden", ...c } = Tn(a, s);
          switch (r) {
            case "referenceHidden": {
              const d = await mi(s, { ...c, elementContext: "reference" }),
                m = yp(d, o.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: vp(m) },
              };
            }
            case "escaped": {
              const d = await mi(s, { ...c, altBoundary: !0 }),
                m = yp(d, o.floating);
              return { data: { escapedOffsets: m, escaped: vp(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Xy = new Set(["left", "top"]);
async function vx(a, s) {
  const { placement: o, platform: r, elements: c } = a,
    d = await (r.isRTL == null ? void 0 : r.isRTL(c.floating)),
    m = wn(o),
    g = ma(o),
    y = Pt(o) === "y",
    h = Xy.has(m) ? -1 : 1,
    b = d && y ? -1 : 1,
    x = Tn(s, a);
  let {
    mainAxis: A,
    crossAxis: _,
    alignmentAxis: z,
  } = typeof x == "number"
    ? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis,
      };
  return (
    g && typeof z == "number" && (_ = g === "end" ? z * -1 : z),
    y ? { x: _ * b, y: A * h } : { x: A * h, y: _ * b }
  );
}
const gx = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(s) {
          var o, r;
          const { x: c, y: d, placement: m, middlewareData: g } = s,
            y = await vx(s, a);
          return m === ((o = g.offset) == null ? void 0 : o.placement) &&
            (r = g.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: c + y.x, y: d + y.y, data: { ...y, placement: m } };
        },
      }
    );
  },
  bx = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(s) {
          const { x: o, y: r, placement: c } = s,
            {
              mainAxis: d = !0,
              crossAxis: m = !1,
              limiter: g = {
                fn: (j) => {
                  let { x: X, y: k } = j;
                  return { x: X, y: k };
                },
              },
              ...y
            } = Tn(a, s),
            h = { x: o, y: r },
            b = await mi(s, y),
            x = Pt(wn(c)),
            A = yc(x);
          let _ = h[A],
            z = h[x];
          if (d) {
            const j = A === "y" ? "top" : "left",
              X = A === "y" ? "bottom" : "right",
              k = _ + b[j],
              Q = _ - b[X];
            _ = tc(k, _, Q);
          }
          if (m) {
            const j = x === "y" ? "top" : "left",
              X = x === "y" ? "bottom" : "right",
              k = z + b[j],
              Q = z - b[X];
            z = tc(k, z, Q);
          }
          const C = g.fn({ ...s, [A]: _, [x]: z });
          return {
            ...C,
            data: { x: C.x - o, y: C.y - r, enabled: { [A]: d, [x]: m } },
          };
        },
      }
    );
  },
  Sx = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(s) {
          const { x: o, y: r, placement: c, rects: d, middlewareData: m } = s,
            { offset: g = 0, mainAxis: y = !0, crossAxis: h = !0 } = Tn(a, s),
            b = { x: o, y: r },
            x = Pt(c),
            A = yc(x);
          let _ = b[A],
            z = b[x];
          const C = Tn(g, s),
            j =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (y) {
            const Q = A === "y" ? "height" : "width",
              Z = d.reference[A] - d.floating[Q] + j.mainAxis,
              $ = d.reference[A] + d.reference[Q] - j.mainAxis;
            _ < Z ? (_ = Z) : _ > $ && (_ = $);
          }
          if (h) {
            var X, k;
            const Q = A === "y" ? "width" : "height",
              Z = Xy.has(wn(c)),
              $ =
                d.reference[x] -
                d.floating[Q] +
                ((Z && ((X = m.offset) == null ? void 0 : X[x])) || 0) +
                (Z ? 0 : j.crossAxis),
              P =
                d.reference[x] +
                d.reference[Q] +
                (Z ? 0 : ((k = m.offset) == null ? void 0 : k[x]) || 0) -
                (Z ? j.crossAxis : 0);
            z < $ ? (z = $) : z > P && (z = P);
          }
          return { [A]: _, [x]: z };
        },
      }
    );
  },
  xx = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(s) {
          var o, r;
          const { placement: c, rects: d, platform: m, elements: g } = s,
            { apply: y = () => {}, ...h } = Tn(a, s),
            b = await mi(s, h),
            x = wn(c),
            A = ma(c),
            _ = Pt(c) === "y",
            { width: z, height: C } = d.floating;
          let j, X;
          x === "top" || x === "bottom"
            ? ((j = x),
              (X =
                A ===
                ((await (m.isRTL == null ? void 0 : m.isRTL(g.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((X = x), (j = A === "end" ? "top" : "bottom"));
          const k = C - b.top - b.bottom,
            Q = z - b.left - b.right,
            Z = Wn(C - b[j], k),
            $ = Wn(z - b[X], Q),
            P = !s.middlewareData.shift;
          let Y = Z,
            J = $;
          if (
            ((o = s.middlewareData.shift) != null && o.enabled.x && (J = Q),
            (r = s.middlewareData.shift) != null && r.enabled.y && (Y = k),
            P && !A)
          ) {
            const me = Tt(b.left, 0),
              ge = Tt(b.right, 0),
              ye = Tt(b.top, 0),
              we = Tt(b.bottom, 0);
            _
              ? (J =
                  z -
                  2 * (me !== 0 || ge !== 0 ? me + ge : Tt(b.left, b.right)))
              : (Y =
                  C -
                  2 * (ye !== 0 || we !== 0 ? ye + we : Tt(b.top, b.bottom)));
          }
          await y({ ...s, availableWidth: J, availableHeight: Y });
          const oe = await m.getDimensions(g.floating);
          return z !== oe.width || C !== oe.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function iu() {
  return typeof window < "u";
}
function pa(a) {
  return Vy(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function At(a) {
  var s;
  return (
    (a == null || (s = a.ownerDocument) == null ? void 0 : s.defaultView) ||
    window
  );
}
function nn(a) {
  var s;
  return (s = (Vy(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : s.documentElement;
}
function Vy(a) {
  return iu() ? a instanceof Node || a instanceof At(a).Node : !1;
}
function Vt(a) {
  return iu() ? a instanceof Element || a instanceof At(a).Element : !1;
}
function en(a) {
  return iu() ? a instanceof HTMLElement || a instanceof At(a).HTMLElement : !1;
}
function gp(a) {
  return !iu() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof At(a).ShadowRoot;
}
const Ex = new Set(["inline", "contents"]);
function vi(a) {
  const { overflow: s, overflowX: o, overflowY: r, display: c } = Qt(a);
  return /auto|scroll|overlay|hidden|clip/.test(s + r + o) && !Ex.has(c);
}
const Tx = new Set(["table", "td", "th"]);
function wx(a) {
  return Tx.has(pa(a));
}
const Ax = [":popover-open", ":modal"];
function su(a) {
  return Ax.some((s) => {
    try {
      return a.matches(s);
    } catch {
      return !1;
    }
  });
}
const Ox = ["transform", "translate", "scale", "rotate", "perspective"],
  Cx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Nx = ["paint", "layout", "strict", "content"];
function bc(a) {
  const s = Sc(),
    o = Vt(a) ? Qt(a) : a;
  return (
    Ox.some((r) => (o[r] ? o[r] !== "none" : !1)) ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!s && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!s && (o.filter ? o.filter !== "none" : !1)) ||
    Cx.some((r) => (o.willChange || "").includes(r)) ||
    Nx.some((r) => (o.contain || "").includes(r))
  );
}
function Rx(a) {
  let s = In(a);
  for (; en(s) && !ca(s); ) {
    if (bc(s)) return s;
    if (su(s)) return null;
    s = In(s);
  }
  return null;
}
function Sc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Mx = new Set(["html", "body", "#document"]);
function ca(a) {
  return Mx.has(pa(a));
}
function Qt(a) {
  return At(a).getComputedStyle(a);
}
function uu(a) {
  return Vt(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function In(a) {
  if (pa(a) === "html") return a;
  const s = a.assignedSlot || a.parentNode || (gp(a) && a.host) || nn(a);
  return gp(s) ? s.host : s;
}
function Qy(a) {
  const s = In(a);
  return ca(s)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : en(s) && vi(s)
    ? s
    : Qy(s);
}
function pi(a, s, o) {
  var r;
  s === void 0 && (s = []), o === void 0 && (o = !0);
  const c = Qy(a),
    d = c === ((r = a.ownerDocument) == null ? void 0 : r.body),
    m = At(c);
  if (d) {
    const g = lc(m);
    return s.concat(
      m,
      m.visualViewport || [],
      vi(c) ? c : [],
      g && o ? pi(g) : []
    );
  }
  return s.concat(c, pi(c, [], o));
}
function lc(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function ky(a) {
  const s = Qt(a);
  let o = parseFloat(s.width) || 0,
    r = parseFloat(s.height) || 0;
  const c = en(a),
    d = c ? a.offsetWidth : o,
    m = c ? a.offsetHeight : r,
    g = Zs(o) !== d || Zs(r) !== m;
  return g && ((o = d), (r = m)), { width: o, height: r, $: g };
}
function xc(a) {
  return Vt(a) ? a : a.contextElement;
}
function ra(a) {
  const s = xc(a);
  if (!en(s)) return Wt(1);
  const o = s.getBoundingClientRect(),
    { width: r, height: c, $: d } = ky(s);
  let m = (d ? Zs(o.width) : o.width) / r,
    g = (d ? Zs(o.height) : o.height) / c;
  return (
    (!m || !Number.isFinite(m)) && (m = 1),
    (!g || !Number.isFinite(g)) && (g = 1),
    { x: m, y: g }
  );
}
const _x = Wt(0);
function Ky(a) {
  const s = At(a);
  return !Sc() || !s.visualViewport
    ? _x
    : { x: s.visualViewport.offsetLeft, y: s.visualViewport.offsetTop };
}
function Dx(a, s, o) {
  return s === void 0 && (s = !1), !o || (s && o !== At(a)) ? !1 : s;
}
function El(a, s, o, r) {
  s === void 0 && (s = !1), o === void 0 && (o = !1);
  const c = a.getBoundingClientRect(),
    d = xc(a);
  let m = Wt(1);
  s && (r ? Vt(r) && (m = ra(r)) : (m = ra(a)));
  const g = Dx(d, o, r) ? Ky(d) : Wt(0);
  let y = (c.left + g.x) / m.x,
    h = (c.top + g.y) / m.y,
    b = c.width / m.x,
    x = c.height / m.y;
  if (d) {
    const A = At(d),
      _ = r && Vt(r) ? At(r) : r;
    let z = A,
      C = lc(z);
    for (; C && r && _ !== z; ) {
      const j = ra(C),
        X = C.getBoundingClientRect(),
        k = Qt(C),
        Q = X.left + (C.clientLeft + parseFloat(k.paddingLeft)) * j.x,
        Z = X.top + (C.clientTop + parseFloat(k.paddingTop)) * j.y;
      (y *= j.x),
        (h *= j.y),
        (b *= j.x),
        (x *= j.y),
        (y += Q),
        (h += Z),
        (z = At(C)),
        (C = lc(z));
    }
  }
  return Fs({ width: b, height: x, x: y, y: h });
}
function ou(a, s) {
  const o = uu(a).scrollLeft;
  return s ? s.left + o : El(nn(a)).left + o;
}
function Zy(a, s) {
  const o = a.getBoundingClientRect(),
    r = o.left + s.scrollLeft - ou(a, o),
    c = o.top + s.scrollTop;
  return { x: r, y: c };
}
function zx(a) {
  let { elements: s, rect: o, offsetParent: r, strategy: c } = a;
  const d = c === "fixed",
    m = nn(r),
    g = s ? su(s.floating) : !1;
  if (r === m || (g && d)) return o;
  let y = { scrollLeft: 0, scrollTop: 0 },
    h = Wt(1);
  const b = Wt(0),
    x = en(r);
  if (
    (x || (!x && !d)) &&
    ((pa(r) !== "body" || vi(m)) && (y = uu(r)), en(r))
  ) {
    const _ = El(r);
    (h = ra(r)), (b.x = _.x + r.clientLeft), (b.y = _.y + r.clientTop);
  }
  const A = m && !x && !d ? Zy(m, y) : Wt(0);
  return {
    width: o.width * h.x,
    height: o.height * h.y,
    x: o.x * h.x - y.scrollLeft * h.x + b.x + A.x,
    y: o.y * h.y - y.scrollTop * h.y + b.y + A.y,
  };
}
function jx(a) {
  return Array.from(a.getClientRects());
}
function Ux(a) {
  const s = nn(a),
    o = uu(a),
    r = a.ownerDocument.body,
    c = Tt(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth),
    d = Tt(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
  let m = -o.scrollLeft + ou(a);
  const g = -o.scrollTop;
  return (
    Qt(r).direction === "rtl" && (m += Tt(s.clientWidth, r.clientWidth) - c),
    { width: c, height: d, x: m, y: g }
  );
}
const bp = 25;
function Hx(a, s) {
  const o = At(a),
    r = nn(a),
    c = o.visualViewport;
  let d = r.clientWidth,
    m = r.clientHeight,
    g = 0,
    y = 0;
  if (c) {
    (d = c.width), (m = c.height);
    const b = Sc();
    (!b || (b && s === "fixed")) && ((g = c.offsetLeft), (y = c.offsetTop));
  }
  const h = ou(r);
  if (h <= 0) {
    const b = r.ownerDocument,
      x = b.body,
      A = getComputedStyle(x),
      _ =
        (b.compatMode === "CSS1Compat" &&
          parseFloat(A.marginLeft) + parseFloat(A.marginRight)) ||
        0,
      z = Math.abs(r.clientWidth - x.clientWidth - _);
    z <= bp && (d -= z);
  } else h <= bp && (d += h);
  return { width: d, height: m, x: g, y };
}
const Lx = new Set(["absolute", "fixed"]);
function Bx(a, s) {
  const o = El(a, !0, s === "fixed"),
    r = o.top + a.clientTop,
    c = o.left + a.clientLeft,
    d = en(a) ? ra(a) : Wt(1),
    m = a.clientWidth * d.x,
    g = a.clientHeight * d.y,
    y = c * d.x,
    h = r * d.y;
  return { width: m, height: g, x: y, y: h };
}
function Sp(a, s, o) {
  let r;
  if (s === "viewport") r = Hx(a, o);
  else if (s === "document") r = Ux(nn(a));
  else if (Vt(s)) r = Bx(s, o);
  else {
    const c = Ky(a);
    r = { x: s.x - c.x, y: s.y - c.y, width: s.width, height: s.height };
  }
  return Fs(r);
}
function Jy(a, s) {
  const o = In(a);
  return o === s || !Vt(o) || ca(o)
    ? !1
    : Qt(o).position === "fixed" || Jy(o, s);
}
function qx(a, s) {
  const o = s.get(a);
  if (o) return o;
  let r = pi(a, [], !1).filter((g) => Vt(g) && pa(g) !== "body"),
    c = null;
  const d = Qt(a).position === "fixed";
  let m = d ? In(a) : a;
  for (; Vt(m) && !ca(m); ) {
    const g = Qt(m),
      y = bc(m);
    !y && g.position === "fixed" && (c = null),
      (
        d
          ? !y && !c
          : (!y && g.position === "static" && !!c && Lx.has(c.position)) ||
            (vi(m) && !y && Jy(a, m))
      )
        ? (r = r.filter((b) => b !== m))
        : (c = g),
      (m = In(m));
  }
  return s.set(a, r), r;
}
function Gx(a) {
  let { element: s, boundary: o, rootBoundary: r, strategy: c } = a;
  const m = [
      ...(o === "clippingAncestors"
        ? su(s)
          ? []
          : qx(s, this._c)
        : [].concat(o)),
      r,
    ],
    g = m[0],
    y = m.reduce((h, b) => {
      const x = Sp(s, b, c);
      return (
        (h.top = Tt(x.top, h.top)),
        (h.right = Wn(x.right, h.right)),
        (h.bottom = Wn(x.bottom, h.bottom)),
        (h.left = Tt(x.left, h.left)),
        h
      );
    }, Sp(s, g, c));
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}
function Yx(a) {
  const { width: s, height: o } = ky(a);
  return { width: s, height: o };
}
function Xx(a, s, o) {
  const r = en(s),
    c = nn(s),
    d = o === "fixed",
    m = El(a, !0, d, s);
  let g = { scrollLeft: 0, scrollTop: 0 };
  const y = Wt(0);
  function h() {
    y.x = ou(c);
  }
  if (r || (!r && !d))
    if (((pa(s) !== "body" || vi(c)) && (g = uu(s)), r)) {
      const _ = El(s, !0, d, s);
      (y.x = _.x + s.clientLeft), (y.y = _.y + s.clientTop);
    } else c && h();
  d && !r && c && h();
  const b = c && !r && !d ? Zy(c, g) : Wt(0),
    x = m.left + g.scrollLeft - y.x - b.x,
    A = m.top + g.scrollTop - y.y - b.y;
  return { x, y: A, width: m.width, height: m.height };
}
function Vr(a) {
  return Qt(a).position === "static";
}
function xp(a, s) {
  if (!en(a) || Qt(a).position === "fixed") return null;
  if (s) return s(a);
  let o = a.offsetParent;
  return nn(a) === o && (o = o.ownerDocument.body), o;
}
function Fy(a, s) {
  const o = At(a);
  if (su(a)) return o;
  if (!en(a)) {
    let c = In(a);
    for (; c && !ca(c); ) {
      if (Vt(c) && !Vr(c)) return c;
      c = In(c);
    }
    return o;
  }
  let r = xp(a, s);
  for (; r && wx(r) && Vr(r); ) r = xp(r, s);
  return r && ca(r) && Vr(r) && !bc(r) ? o : r || Rx(a) || o;
}
const Vx = async function (a) {
  const s = this.getOffsetParent || Fy,
    o = this.getDimensions,
    r = await o(a.floating);
  return {
    reference: Xx(a.reference, await s(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Qx(a) {
  return Qt(a).direction === "rtl";
}
const kx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zx,
  getDocumentElement: nn,
  getClippingRect: Gx,
  getOffsetParent: Fy,
  getElementRects: Vx,
  getClientRects: jx,
  getDimensions: Yx,
  getScale: ra,
  isElement: Vt,
  isRTL: Qx,
};
function $y(a, s) {
  return (
    a.x === s.x && a.y === s.y && a.width === s.width && a.height === s.height
  );
}
function Kx(a, s) {
  let o = null,
    r;
  const c = nn(a);
  function d() {
    var g;
    clearTimeout(r), (g = o) == null || g.disconnect(), (o = null);
  }
  function m(g, y) {
    g === void 0 && (g = !1), y === void 0 && (y = 1), d();
    const h = a.getBoundingClientRect(),
      { left: b, top: x, width: A, height: _ } = h;
    if ((g || s(), !A || !_)) return;
    const z = Ys(x),
      C = Ys(c.clientWidth - (b + A)),
      j = Ys(c.clientHeight - (x + _)),
      X = Ys(b),
      Q = {
        rootMargin: -z + "px " + -C + "px " + -j + "px " + -X + "px",
        threshold: Tt(0, Wn(1, y)) || 1,
      };
    let Z = !0;
    function $(P) {
      const Y = P[0].intersectionRatio;
      if (Y !== y) {
        if (!Z) return m();
        Y
          ? m(!1, Y)
          : (r = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      Y === 1 && !$y(h, a.getBoundingClientRect()) && m(), (Z = !1);
    }
    try {
      o = new IntersectionObserver($, { ...Q, root: c.ownerDocument });
    } catch {
      o = new IntersectionObserver($, Q);
    }
    o.observe(a);
  }
  return m(!0), d;
}
function Zx(a, s, o, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: c = !0,
      ancestorResize: d = !0,
      elementResize: m = typeof ResizeObserver == "function",
      layoutShift: g = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = r,
    h = xc(a),
    b = c || d ? [...(h ? pi(h) : []), ...pi(s)] : [];
  b.forEach((X) => {
    c && X.addEventListener("scroll", o, { passive: !0 }),
      d && X.addEventListener("resize", o);
  });
  const x = h && g ? Kx(h, o) : null;
  let A = -1,
    _ = null;
  m &&
    ((_ = new ResizeObserver((X) => {
      let [k] = X;
      k &&
        k.target === h &&
        _ &&
        (_.unobserve(s),
        cancelAnimationFrame(A),
        (A = requestAnimationFrame(() => {
          var Q;
          (Q = _) == null || Q.observe(s);
        }))),
        o();
    })),
    h && !y && _.observe(h),
    _.observe(s));
  let z,
    C = y ? El(a) : null;
  y && j();
  function j() {
    const X = El(a);
    C && !$y(C, X) && o(), (C = X), (z = requestAnimationFrame(j));
  }
  return (
    o(),
    () => {
      var X;
      b.forEach((k) => {
        c && k.removeEventListener("scroll", o),
          d && k.removeEventListener("resize", o);
      }),
        x?.(),
        (X = _) == null || X.disconnect(),
        (_ = null),
        y && cancelAnimationFrame(z);
    }
  );
}
const Jx = gx,
  Fx = bx,
  $x = px,
  Px = xx,
  Wx = yx,
  Ep = mx,
  Ix = Sx,
  eE = (a, s, o) => {
    const r = new Map(),
      c = { platform: kx, ...o },
      d = { ...c.platform, _c: r };
    return hx(a, s, { ...c, platform: d });
  };
var tE = typeof document < "u",
  nE = function () {},
  ks = tE ? S.useLayoutEffect : nE;
function $s(a, s) {
  if (a === s) return !0;
  if (typeof a != typeof s) return !1;
  if (typeof a == "function" && a.toString() === s.toString()) return !0;
  let o, r, c;
  if (a && s && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((o = a.length), o !== s.length)) return !1;
      for (r = o; r-- !== 0; ) if (!$s(a[r], s[r])) return !1;
      return !0;
    }
    if (((c = Object.keys(a)), (o = c.length), o !== Object.keys(s).length))
      return !1;
    for (r = o; r-- !== 0; ) if (!{}.hasOwnProperty.call(s, c[r])) return !1;
    for (r = o; r-- !== 0; ) {
      const d = c[r];
      if (!(d === "_owner" && a.$$typeof) && !$s(a[d], s[d])) return !1;
    }
    return !0;
  }
  return a !== a && s !== s;
}
function Py(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tp(a, s) {
  const o = Py(a);
  return Math.round(s * o) / o;
}
function Qr(a) {
  const s = S.useRef(a);
  return (
    ks(() => {
      s.current = a;
    }),
    s
  );
}
function lE(a) {
  a === void 0 && (a = {});
  const {
      placement: s = "bottom",
      strategy: o = "absolute",
      middleware: r = [],
      platform: c,
      elements: { reference: d, floating: m } = {},
      transform: g = !0,
      whileElementsMounted: y,
      open: h,
    } = a,
    [b, x] = S.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: s,
      middlewareData: {},
      isPositioned: !1,
    }),
    [A, _] = S.useState(r);
  $s(A, r) || _(r);
  const [z, C] = S.useState(null),
    [j, X] = S.useState(null),
    k = S.useCallback((H) => {
      H !== P.current && ((P.current = H), C(H));
    }, []),
    Q = S.useCallback((H) => {
      H !== Y.current && ((Y.current = H), X(H));
    }, []),
    Z = d || z,
    $ = m || j,
    P = S.useRef(null),
    Y = S.useRef(null),
    J = S.useRef(b),
    oe = y != null,
    me = Qr(y),
    ge = Qr(c),
    ye = Qr(h),
    we = S.useCallback(() => {
      if (!P.current || !Y.current) return;
      const H = { placement: s, strategy: o, middleware: A };
      ge.current && (H.platform = ge.current),
        eE(P.current, Y.current, H).then((ie) => {
          const ce = { ...ie, isPositioned: ye.current !== !1 };
          W.current &&
            !$s(J.current, ce) &&
            ((J.current = ce),
            yi.flushSync(() => {
              x(ce);
            }));
        });
    }, [A, s, o, ge, ye]);
  ks(() => {
    h === !1 &&
      J.current.isPositioned &&
      ((J.current.isPositioned = !1), x((H) => ({ ...H, isPositioned: !1 })));
  }, [h]);
  const W = S.useRef(!1);
  ks(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    []
  ),
    ks(() => {
      if ((Z && (P.current = Z), $ && (Y.current = $), Z && $)) {
        if (me.current) return me.current(Z, $, we);
        we();
      }
    }, [Z, $, we, me, oe]);
  const fe = S.useMemo(
      () => ({ reference: P, floating: Y, setReference: k, setFloating: Q }),
      [k, Q]
    ),
    N = S.useMemo(() => ({ reference: Z, floating: $ }), [Z, $]),
    V = S.useMemo(() => {
      const H = { position: o, left: 0, top: 0 };
      if (!N.floating) return H;
      const ie = Tp(N.floating, b.x),
        ce = Tp(N.floating, b.y);
      return g
        ? {
            ...H,
            transform: "translate(" + ie + "px, " + ce + "px)",
            ...(Py(N.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: ie, top: ce };
    }, [o, g, N.floating, b.x, b.y]);
  return S.useMemo(
    () => ({ ...b, update: we, refs: fe, elements: N, floatingStyles: V }),
    [b, we, fe, N, V]
  );
}
const aE = (a) => {
    function s(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(o) {
        const { element: r, padding: c } = typeof a == "function" ? a(o) : a;
        return r && s(r)
          ? r.current != null
            ? Ep({ element: r.current, padding: c }).fn(o)
            : {}
          : r
          ? Ep({ element: r, padding: c }).fn(o)
          : {};
      },
    };
  },
  iE = (a, s) => ({ ...Jx(a), options: [a, s] }),
  sE = (a, s) => ({ ...Fx(a), options: [a, s] }),
  uE = (a, s) => ({ ...Ix(a), options: [a, s] }),
  oE = (a, s) => ({ ...$x(a), options: [a, s] }),
  rE = (a, s) => ({ ...Px(a), options: [a, s] }),
  cE = (a, s) => ({ ...Wx(a), options: [a, s] }),
  fE = (a, s) => ({ ...aE(a), options: [a, s] });
var dE = "Arrow",
  Wy = S.forwardRef((a, s) => {
    const { children: o, width: r = 10, height: c = 5, ...d } = a;
    return v.jsx(el.svg, {
      ...d,
      ref: s,
      width: r,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? o : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Wy.displayName = dE;
var hE = Wy;
function mE(a) {
  const [s, o] = S.useState(void 0);
  return (
    It(() => {
      if (a) {
        o({ width: a.offsetWidth, height: a.offsetHeight });
        const r = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const d = c[0];
          let m, g;
          if ("borderBoxSize" in d) {
            const y = d.borderBoxSize,
              h = Array.isArray(y) ? y[0] : y;
            (m = h.inlineSize), (g = h.blockSize);
          } else (m = a.offsetWidth), (g = a.offsetHeight);
          o({ width: m, height: g });
        });
        return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
      } else o(void 0);
    }, [a]),
    s
  );
}
var Iy = "Popper",
  [ev, tv] = tu(Iy),
  [_T, nv] = ev(Iy),
  lv = "PopperAnchor",
  av = S.forwardRef((a, s) => {
    const { __scopePopper: o, virtualRef: r, ...c } = a,
      d = nv(lv, o),
      m = S.useRef(null),
      g = dt(s, m),
      y = S.useRef(null);
    return (
      S.useEffect(() => {
        const h = y.current;
        (y.current = r?.current || m.current),
          h !== y.current && d.onAnchorChange(y.current);
      }),
      r ? null : v.jsx(el.div, { ...c, ref: g })
    );
  });
av.displayName = lv;
var Ec = "PopperContent",
  [pE, yE] = ev(Ec),
  iv = S.forwardRef((a, s) => {
    const {
        __scopePopper: o,
        side: r = "bottom",
        sideOffset: c = 0,
        align: d = "center",
        alignOffset: m = 0,
        arrowPadding: g = 0,
        avoidCollisions: y = !0,
        collisionBoundary: h = [],
        collisionPadding: b = 0,
        sticky: x = "partial",
        hideWhenDetached: A = !1,
        updatePositionStrategy: _ = "optimized",
        onPlaced: z,
        ...C
      } = a,
      j = nv(Ec, o),
      [X, k] = S.useState(null),
      Q = dt(s, (le) => k(le)),
      [Z, $] = S.useState(null),
      P = mE(Z),
      Y = P?.width ?? 0,
      J = P?.height ?? 0,
      oe = r + (d !== "center" ? "-" + d : ""),
      me =
        typeof b == "number"
          ? b
          : { top: 0, right: 0, bottom: 0, left: 0, ...b },
      ge = Array.isArray(h) ? h : [h],
      ye = ge.length > 0,
      we = { padding: me, boundary: ge.filter(gE), altBoundary: ye },
      {
        refs: W,
        floatingStyles: fe,
        placement: N,
        isPositioned: V,
        middlewareData: H,
      } = lE({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...le) =>
          Zx(...le, { animationFrame: _ === "always" }),
        elements: { reference: j.anchor },
        middleware: [
          iE({ mainAxis: c + J, alignmentAxis: m }),
          y &&
            sE({
              mainAxis: !0,
              crossAxis: !1,
              limiter: x === "partial" ? uE() : void 0,
              ...we,
            }),
          y && oE({ ...we }),
          rE({
            ...we,
            apply: ({
              elements: le,
              rects: Ge,
              availableWidth: Me,
              availableHeight: Ct,
            }) => {
              const { width: kt, height: Kt } = Ge.reference,
                tl = le.floating.style;
              tl.setProperty("--radix-popper-available-width", `${Me}px`),
                tl.setProperty("--radix-popper-available-height", `${Ct}px`),
                tl.setProperty("--radix-popper-anchor-width", `${kt}px`),
                tl.setProperty("--radix-popper-anchor-height", `${Kt}px`);
            },
          }),
          Z && fE({ element: Z, padding: g }),
          bE({ arrowWidth: Y, arrowHeight: J }),
          A && cE({ strategy: "referenceHidden", ...we }),
        ],
      }),
      [ie, ce] = ov(N),
      T = Bt(z);
    It(() => {
      V && T?.();
    }, [V, T]);
    const B = H.arrow?.x,
      K = H.arrow?.y,
      F = H.arrow?.centerOffset !== 0,
      [ue, de] = S.useState();
    return (
      It(() => {
        X && de(window.getComputedStyle(X).zIndex);
      }, [X]),
      v.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: V ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            H.transformOrigin?.x,
            H.transformOrigin?.y,
          ].join(" "),
          ...(H.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: a.dir,
        children: v.jsx(pE, {
          scope: o,
          placedSide: ie,
          onArrowChange: $,
          arrowX: B,
          arrowY: K,
          shouldHideArrow: F,
          children: v.jsx(el.div, {
            "data-side": ie,
            "data-align": ce,
            ...C,
            ref: Q,
            style: { ...C.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
iv.displayName = Ec;
var sv = "PopperArrow",
  vE = { top: "bottom", right: "left", bottom: "top", left: "right" },
  uv = S.forwardRef(function (s, o) {
    const { __scopePopper: r, ...c } = s,
      d = yE(sv, r),
      m = vE[d.placedSide];
    return v.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [m]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(hE, {
        ...c,
        ref: o,
        style: { ...c.style, display: "block" },
      }),
    });
  });
uv.displayName = sv;
function gE(a) {
  return a !== null;
}
var bE = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(s) {
    const { placement: o, rects: r, middlewareData: c } = s,
      m = c.arrow?.centerOffset !== 0,
      g = m ? 0 : a.arrowWidth,
      y = m ? 0 : a.arrowHeight,
      [h, b] = ov(o),
      x = { start: "0%", center: "50%", end: "100%" }[b],
      A = (c.arrow?.x ?? 0) + g / 2,
      _ = (c.arrow?.y ?? 0) + y / 2;
    let z = "",
      C = "";
    return (
      h === "bottom"
        ? ((z = m ? x : `${A}px`), (C = `${-y}px`))
        : h === "top"
        ? ((z = m ? x : `${A}px`), (C = `${r.floating.height + y}px`))
        : h === "right"
        ? ((z = `${-y}px`), (C = m ? x : `${_}px`))
        : h === "left" &&
          ((z = `${r.floating.width + y}px`), (C = m ? x : `${_}px`)),
      { data: { x: z, y: C } }
    );
  },
});
function ov(a) {
  const [s, o = "center"] = a.split("-");
  return [s, o];
}
var SE = av,
  xE = iv,
  EE = uv,
  TE = "Portal",
  rv = S.forwardRef((a, s) => {
    const { container: o, ...r } = a,
      [c, d] = S.useState(!1);
    It(() => d(!0), []);
    const m = o || (c && globalThis?.document?.body);
    return m ? Kp.createPortal(v.jsx(el.div, { ...r, ref: s }), m) : null;
  });
rv.displayName = TE;
function wE(a, s) {
  return S.useReducer((o, r) => s[o][r] ?? o, a);
}
var Tc = (a) => {
  const { present: s, children: o } = a,
    r = AE(s),
    c =
      typeof o == "function" ? o({ present: r.isPresent }) : S.Children.only(o),
    d = dt(r.ref, OE(c));
  return typeof o == "function" || r.isPresent
    ? S.cloneElement(c, { ref: d })
    : null;
};
Tc.displayName = "Presence";
function AE(a) {
  const [s, o] = S.useState(),
    r = S.useRef(null),
    c = S.useRef(a),
    d = S.useRef("none"),
    m = a ? "mounted" : "unmounted",
    [g, y] = wE(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const h = Xs(r.current);
      d.current = g === "mounted" ? h : "none";
    }, [g]),
    It(() => {
      const h = r.current,
        b = c.current;
      if (b !== a) {
        const A = d.current,
          _ = Xs(h);
        a
          ? y("MOUNT")
          : _ === "none" || h?.display === "none"
          ? y("UNMOUNT")
          : y(b && A !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = a);
      }
    }, [a, y]),
    It(() => {
      if (s) {
        let h;
        const b = s.ownerDocument.defaultView ?? window,
          x = (_) => {
            const C = Xs(r.current).includes(CSS.escape(_.animationName));
            if (_.target === s && C && (y("ANIMATION_END"), !c.current)) {
              const j = s.style.animationFillMode;
              (s.style.animationFillMode = "forwards"),
                (h = b.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = j);
                }));
            }
          },
          A = (_) => {
            _.target === s && (d.current = Xs(r.current));
          };
        return (
          s.addEventListener("animationstart", A),
          s.addEventListener("animationcancel", x),
          s.addEventListener("animationend", x),
          () => {
            b.clearTimeout(h),
              s.removeEventListener("animationstart", A),
              s.removeEventListener("animationcancel", x),
              s.removeEventListener("animationend", x);
          }
        );
      } else y("ANIMATION_END");
    }, [s, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(g),
      ref: S.useCallback((h) => {
        (r.current = h ? getComputedStyle(h) : null), o(h);
      }, []),
    }
  );
}
function Xs(a) {
  return a?.animationName || "none";
}
function OE(a) {
  let s = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = s && "isReactWarning" in s && s.isReactWarning;
  return o
    ? a.ref
    : ((s = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = s && "isReactWarning" in s && s.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
var CE = Symbol("radix.slottable");
function NE(a) {
  const s = ({ children: o }) => v.jsx(v.Fragment, { children: o });
  return (s.displayName = `${a}.Slottable`), (s.__radixId = CE), s;
}
var RE = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  ME = "VisuallyHidden",
  cv = S.forwardRef((a, s) =>
    v.jsx(el.span, { ...a, ref: s, style: { ...RE, ...a.style } })
  );
cv.displayName = ME;
var _E = cv,
  [ru] = tu("Tooltip", [tv]),
  wc = tv(),
  fv = "TooltipProvider",
  DE = 700,
  wp = "tooltip.open",
  [zE, dv] = ru(fv),
  hv = (a) => {
    const {
        __scopeTooltip: s,
        delayDuration: o = DE,
        skipDelayDuration: r = 300,
        disableHoverableContent: c = !1,
        children: d,
      } = a,
      m = S.useRef(!0),
      g = S.useRef(!1),
      y = S.useRef(0);
    return (
      S.useEffect(() => {
        const h = y.current;
        return () => window.clearTimeout(h);
      }, []),
      v.jsx(zE, {
        scope: s,
        isOpenDelayedRef: m,
        delayDuration: o,
        onOpen: S.useCallback(() => {
          window.clearTimeout(y.current), (m.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(y.current),
            (y.current = window.setTimeout(() => (m.current = !0), r));
        }, [r]),
        isPointerInTransitRef: g,
        onPointerInTransitChange: S.useCallback((h) => {
          g.current = h;
        }, []),
        disableHoverableContent: c,
        children: d,
      })
    );
  };
hv.displayName = fv;
var mv = "Tooltip",
  [DT, gi] = ru(mv),
  ac = "TooltipTrigger",
  jE = S.forwardRef((a, s) => {
    const { __scopeTooltip: o, ...r } = a,
      c = gi(ac, o),
      d = dv(ac, o),
      m = wc(o),
      g = S.useRef(null),
      y = dt(s, g, c.onTriggerChange),
      h = S.useRef(!1),
      b = S.useRef(!1),
      x = S.useCallback(() => (h.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", x),
        [x]
      ),
      v.jsx(SE, {
        asChild: !0,
        ...m,
        children: v.jsx(el.button, {
          "aria-describedby": c.open ? c.contentId : void 0,
          "data-state": c.stateAttribute,
          ...r,
          ref: y,
          onPointerMove: oa(a.onPointerMove, (A) => {
            A.pointerType !== "touch" &&
              !b.current &&
              !d.isPointerInTransitRef.current &&
              (c.onTriggerEnter(), (b.current = !0));
          }),
          onPointerLeave: oa(a.onPointerLeave, () => {
            c.onTriggerLeave(), (b.current = !1);
          }),
          onPointerDown: oa(a.onPointerDown, () => {
            c.open && c.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", x, { once: !0 });
          }),
          onFocus: oa(a.onFocus, () => {
            h.current || c.onOpen();
          }),
          onBlur: oa(a.onBlur, c.onClose),
          onClick: oa(a.onClick, c.onClose),
        }),
      })
    );
  });
jE.displayName = ac;
var Ac = "TooltipPortal",
  [UE, HE] = ru(Ac, { forceMount: void 0 }),
  pv = (a) => {
    const { __scopeTooltip: s, forceMount: o, children: r, container: c } = a,
      d = gi(Ac, s);
    return v.jsx(UE, {
      scope: s,
      forceMount: o,
      children: v.jsx(Tc, {
        present: o || d.open,
        children: v.jsx(rv, { asChild: !0, container: c, children: r }),
      }),
    });
  };
pv.displayName = Ac;
var fa = "TooltipContent",
  yv = S.forwardRef((a, s) => {
    const o = HE(fa, a.__scopeTooltip),
      { forceMount: r = o.forceMount, side: c = "top", ...d } = a,
      m = gi(fa, a.__scopeTooltip);
    return v.jsx(Tc, {
      present: r || m.open,
      children: m.disableHoverableContent
        ? v.jsx(vv, { side: c, ...d, ref: s })
        : v.jsx(LE, { side: c, ...d, ref: s }),
    });
  }),
  LE = S.forwardRef((a, s) => {
    const o = gi(fa, a.__scopeTooltip),
      r = dv(fa, a.__scopeTooltip),
      c = S.useRef(null),
      d = dt(s, c),
      [m, g] = S.useState(null),
      { trigger: y, onClose: h } = o,
      b = c.current,
      { onPointerInTransitChange: x } = r,
      A = S.useCallback(() => {
        g(null), x(!1);
      }, [x]),
      _ = S.useCallback(
        (z, C) => {
          const j = z.currentTarget,
            X = { x: z.clientX, y: z.clientY },
            k = XE(X, j.getBoundingClientRect()),
            Q = VE(X, k),
            Z = QE(C.getBoundingClientRect()),
            $ = KE([...Q, ...Z]);
          g($), x(!0);
        },
        [x]
      );
    return (
      S.useEffect(() => () => A(), [A]),
      S.useEffect(() => {
        if (y && b) {
          const z = (j) => _(j, b),
            C = (j) => _(j, y);
          return (
            y.addEventListener("pointerleave", z),
            b.addEventListener("pointerleave", C),
            () => {
              y.removeEventListener("pointerleave", z),
                b.removeEventListener("pointerleave", C);
            }
          );
        }
      }, [y, b, _, A]),
      S.useEffect(() => {
        if (m) {
          const z = (C) => {
            const j = C.target,
              X = { x: C.clientX, y: C.clientY },
              k = y?.contains(j) || b?.contains(j),
              Q = !kE(X, m);
            k ? A() : Q && (A(), h());
          };
          return (
            document.addEventListener("pointermove", z),
            () => document.removeEventListener("pointermove", z)
          );
        }
      }, [y, b, m, h, A]),
      v.jsx(vv, { ...a, ref: d })
    );
  }),
  [BE, qE] = ru(mv, { isInside: !1 }),
  GE = NE("TooltipContent"),
  vv = S.forwardRef((a, s) => {
    const {
        __scopeTooltip: o,
        children: r,
        "aria-label": c,
        onEscapeKeyDown: d,
        onPointerDownOutside: m,
        ...g
      } = a,
      y = gi(fa, o),
      h = wc(o),
      { onClose: b } = y;
    return (
      S.useEffect(
        () => (
          document.addEventListener(wp, b),
          () => document.removeEventListener(wp, b)
        ),
        [b]
      ),
      S.useEffect(() => {
        if (y.trigger) {
          const x = (A) => {
            A.target?.contains(y.trigger) && b();
          };
          return (
            window.addEventListener("scroll", x, { capture: !0 }),
            () => window.removeEventListener("scroll", x, { capture: !0 })
          );
        }
      }, [y.trigger, b]),
      v.jsx(qy, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: m,
        onFocusOutside: (x) => x.preventDefault(),
        onDismiss: b,
        children: v.jsxs(xE, {
          "data-state": y.stateAttribute,
          ...h,
          ...g,
          ref: s,
          style: {
            ...g.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            v.jsx(GE, { children: r }),
            v.jsx(BE, {
              scope: o,
              isInside: !0,
              children: v.jsx(_E, {
                id: y.contentId,
                role: "tooltip",
                children: c || r,
              }),
            }),
          ],
        }),
      })
    );
  });
yv.displayName = fa;
var gv = "TooltipArrow",
  YE = S.forwardRef((a, s) => {
    const { __scopeTooltip: o, ...r } = a,
      c = wc(o);
    return qE(gv, o).isInside ? null : v.jsx(EE, { ...c, ...r, ref: s });
  });
YE.displayName = gv;
function XE(a, s) {
  const o = Math.abs(s.top - a.y),
    r = Math.abs(s.bottom - a.y),
    c = Math.abs(s.right - a.x),
    d = Math.abs(s.left - a.x);
  switch (Math.min(o, r, c, d)) {
    case d:
      return "left";
    case c:
      return "right";
    case o:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function VE(a, s, o = 5) {
  const r = [];
  switch (s) {
    case "top":
      r.push({ x: a.x - o, y: a.y + o }, { x: a.x + o, y: a.y + o });
      break;
    case "bottom":
      r.push({ x: a.x - o, y: a.y - o }, { x: a.x + o, y: a.y - o });
      break;
    case "left":
      r.push({ x: a.x + o, y: a.y - o }, { x: a.x + o, y: a.y + o });
      break;
    case "right":
      r.push({ x: a.x - o, y: a.y - o }, { x: a.x - o, y: a.y + o });
      break;
  }
  return r;
}
function QE(a) {
  const { top: s, right: o, bottom: r, left: c } = a;
  return [
    { x: c, y: s },
    { x: o, y: s },
    { x: o, y: r },
    { x: c, y: r },
  ];
}
function kE(a, s) {
  const { x: o, y: r } = a;
  let c = !1;
  for (let d = 0, m = s.length - 1; d < s.length; m = d++) {
    const g = s[d],
      y = s[m],
      h = g.x,
      b = g.y,
      x = y.x,
      A = y.y;
    b > r != A > r && o < ((x - h) * (r - b)) / (A - b) + h && (c = !c);
  }
  return c;
}
function KE(a) {
  const s = a.slice();
  return (
    s.sort((o, r) =>
      o.x < r.x ? -1 : o.x > r.x ? 1 : o.y < r.y ? -1 : o.y > r.y ? 1 : 0
    ),
    ZE(s)
  );
}
function ZE(a) {
  if (a.length <= 1) return a.slice();
  const s = [];
  for (let r = 0; r < a.length; r++) {
    const c = a[r];
    for (; s.length >= 2; ) {
      const d = s[s.length - 1],
        m = s[s.length - 2];
      if ((d.x - m.x) * (c.y - m.y) >= (d.y - m.y) * (c.x - m.x)) s.pop();
      else break;
    }
    s.push(c);
  }
  s.pop();
  const o = [];
  for (let r = a.length - 1; r >= 0; r--) {
    const c = a[r];
    for (; o.length >= 2; ) {
      const d = o[o.length - 1],
        m = o[o.length - 2];
      if ((d.x - m.x) * (c.y - m.y) >= (d.y - m.y) * (c.x - m.x)) o.pop();
      else break;
    }
    o.push(c);
  }
  return (
    o.pop(),
    s.length === 1 && o.length === 1 && s[0].x === o[0].x && s[0].y === o[0].y
      ? s
      : s.concat(o)
  );
}
var JE = hv,
  FE = pv,
  bv = yv;
const $E = JE,
  PE = S.forwardRef(({ className: a, sideOffset: s = 4, ...o }, r) =>
    v.jsx(FE, {
      children: v.jsx(bv, {
        ref: r,
        sideOffset: s,
        className: Ot(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          a
        ),
        ...o,
      }),
    })
  );
PE.displayName = bv.displayName;
const Sv = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", {
    ref: o,
    className: Ot("rounded-xl border bg-card text-card-foreground shadow", a),
    ...s,
  })
);
Sv.displayName = "Card";
const WE = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", {
    ref: o,
    className: Ot("flex flex-col space-y-1.5 p-6", a),
    ...s,
  })
);
WE.displayName = "CardHeader";
const IE = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", {
    ref: o,
    className: Ot("font-semibold leading-none tracking-tight", a),
    ...s,
  })
);
IE.displayName = "CardTitle";
const eT = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", {
    ref: o,
    className: Ot("text-sm text-muted-foreground", a),
    ...s,
  })
);
eT.displayName = "CardDescription";
const xv = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", { ref: o, className: Ot("p-6 pt-0", a), ...s })
);
xv.displayName = "CardContent";
const tT = S.forwardRef(({ className: a, ...s }, o) =>
  v.jsx("div", { ref: o, className: Ot("flex items-center p-6 pt-0", a), ...s })
);
tT.displayName = "CardFooter";
function nT() {
  return v.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: v.jsx(Sv, {
      className: "w-full max-w-md mx-4",
      children: v.jsxs(xv, {
        className: "pt-6",
        children: [
          v.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              v.jsx(P1, { className: "h-8 w-8 text-red-500" }),
              v.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          v.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const Ap = "/assets/Untitled_design_1765438245957-BiC73PRP.png",
  lT = "/assets/Copy_of_shibes_1771426250211-B1jdoncs.png",
  aT = "/assets/Shibecoin_1765438536358-BbtEce7Y.png",
  iT = "/assets/IMG_8897_1765440172693-C4RdeVRm.jpeg",
  sT = "/assets/image_1771427576645-BVXqbXUf.png",
  uT = "/assets/image_1771427640100-D1Pg4kZM.png",
  oT = "/assets/shibes_1771426286215-QRvC2y-n.png",
  rT = "/assets/IMG_8875_1765440459858-Dw_SigTQ.jpeg",
  cT = "/assets/IMG_8878_1765440459858-C0MpuB9V.png",
  fT = "/assets/IMG_8907_1765440459858-CoLq2gQR.jpeg",
  dT = "/assets/IMG_8908_1765440459858-CDmJYhQK.jpeg",
  hT = "/assets/IMG_8910_1765440459858-ez25FbG6.jpeg",
  mT = "/assets/IMG_8911_1765440459858-C9590bTt.jpeg",
  pT = "/assets/IMG_8912_1765440459858-Djjx_wfI.png",
  yT = "/assets/IMG_8913_1765440459858-XZEuQWWn.jpeg",
  vT = "/assets/IMG_8914_1765440459858-BlbcDQEZ.jpeg",
  gT = "/assets/IMG_8916_1765440459858-Bl8Vh4P-.jpeg",
  bT = "/assets/IMG_8917_1765440459858-Cg8rfoP4.jpeg",
  ST = "/assets/IMG_8918_1765440459858-B1_NsVkM.jpeg",
  xT = "/assets/IMG_8921_1765440459858-CSWkIImZ.jpeg",
  ET = "/assets/IMG_8922_1765440459858-Ck6tEWia.jpeg",
  TT = "/assets/IMG_8923_1765440459858-jnMombhe.jpeg",
  wT = "/assets/IMG_8924_1765440459858-BnKJYw4X.jpeg",
  AT = "/assets/IMG_8928_1765440459858-CFoQVKxy.jpeg",
  OT = "/assets/IMG_8929_1765440459858-D2RG7vco.jpeg",
  CT = [
    { src: rT, label: "Vibe Check" },
    { src: cT, label: "Much Wow" },
    { src: fT, label: "So Crypto" },
    { src: dT, label: "To The Moon" },
    { src: hT, label: "Very HODL" },
    { src: mT, label: "Such Alpha" },
    { src: pT, label: "Many Gains" },
    { src: yT, label: "Doge Legacy" },
    { src: vT, label: "Much History" },
    { src: gT, label: "So Finance" },
    { src: bT, label: "Very Stonks" },
    { src: ST, label: "Much Community" },
    { src: xT, label: "Inu Power" },
    { src: ET, label: "So Rare" },
    { src: TT, label: "Very Base" },
    { src: wT, label: "Much Based" },
    { src: AT, label: "So Trend" },
    { src: OT, label: "Wow" },
  ],
  Op = ({ text: a, delay: s = 50, className: o = "" }) => {
    const [r, c] = S.useState(""),
      [d, m] = S.useState(0);
    return (
      S.useEffect(() => {
        if (d < a.length) {
          const g = setTimeout(() => {
            c((y) => y + a[d]), m((y) => y + 1);
          }, s);
          return () => clearTimeout(g);
        }
      }, [d, s, a]),
      v.jsx("span", { className: `typing-cursor ${o}`, children: r })
    );
  };
function NT() {
  kp();
  const [a, s] = S.useState(!1),
    [o, r] = S.useState({ hodl: 0, moon: 0, bark: 0, choice: null });
  S.useEffect(() => {
    const b = localStorage.getItem("shibes_poll_v1");
    b && r(JSON.parse(b));
  }, []);
  const c = (h) => {
      const b = document.getElementById(h);
      b && b.scrollIntoView({ behavior: "smooth" });
    },
    d = (h) => {
      const b = "shibes_poll_v1";
      r((x) => {
        const A = { ...x };
        return (
          x.choice && x.choice !== h && x[x.choice] > 0 && (A[x.choice] -= 1),
          x.choice !== h &&
            ((A[h] += 1),
            (A.choice = h),
            localStorage.setItem(b, JSON.stringify(A))),
          A
        );
      });
    },
    m = (h) => {
      const b = o.hodl + o.moon + o.bark;
      return b === 0 ? 0 : Math.round((h / b) * 100);
    },
    g = [
      "much shibes",
      "inu vibes",
      "very meme",
      "so wow",
      "wow",
      "amaze",
      "shibe",
      "legacy",
      "ethereum",
    ],
    y = Array.from({ length: 20 }).map((h, b) => ({
      text: g[Math.floor(Math.random() * g.length)],
      left: `${Math.floor(Math.random() * 90)}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 6}s`,
      size: Math.random() > 0.5 ? "text-xl" : "text-lg",
    }));
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs("header", {
        children: [
          v.jsx("div", {
            className: "ticker-wrap",
            children: v.jsx("div", {
              className: "ticker-content",
              children:
                "BREAKING NEWS: $SHIBES RETURNS TO RECLAIM THE THRONE • THE ORIGINAL DOGE SPIRIT IS BACK • ETHEREUM NETWORK SECURED • MUCH WOW • VERY LEGACY • NOT A FORK •",
            }),
          }),
          v.jsxs("div", {
            className: "nav",
            children: [
              v.jsxs("div", {
                className: "nav-left",
                children: [
                  v.jsx("div", {
                    className:
                      "w-10 h-10 overflow-hidden rounded-full border border-[var(--accent)] bg-black relative",
                    children: v.jsx("img", {
                      src: Ap,
                      alt: "SHIBES",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  v.jsx("div", {
                    className: "nav-title ml-3",
                    children: v.jsx("img", {
                      src: aT,
                      alt: "$SHIBES",
                      className: "h-6 w-auto",
                    }),
                  }),
                ],
              }),
              v.jsx("nav", {
                className: "nav-links",
                children: v.jsx("button", {
                  className: "btn-primary",
                  onClick: () => c("how-to-buy"),
                  children: "Buy $SHIBES",
                }),
              }),
            ],
          }),
        ],
      }),
      v.jsx("main", {
        children: v.jsxs("div", {
          className: "page-wrapper",
          children: [
            v.jsxs("section", {
              className: "hero",
              children: [
                v.jsxs("div", {
                  className: "hero-left",
                  children: [
                    v.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-[60%] pointer-events-none z-0 overflow-hidden opacity-30",
                      children: y.map((h, b) =>
                        v.jsx(
                          "div",
                          {
                            className: "absolute animate-float-up",
                            style: {
                              left: h.left,
                              bottom: "-20px",
                              animationDelay: h.delay,
                              animationDuration: h.duration,
                            },
                            children: v.jsx("span", {
                              className: `font-comic text-white font-bold ${h.size}`,
                              children: h.text,
                            }),
                          },
                          b
                        )
                      ),
                    }),
                    v.jsx("div", {
                      className:
                        "w-full max-w-[380px] mb-8 relative group mx-auto z-10",
                      children: v.jsx("img", {
                        src: lT,
                        alt: "$SHIBES",
                        className:
                          "w-full h-auto drop-shadow-2xl animate-glitch-float",
                      }),
                    }),
                    v.jsxs("div", {
                      className: "hero-badge relative z-10",
                      children: [
                        v.jsx("span", { className: "dot" }),
                        v.jsx(sp, {
                          className:
                            "w-3 h-3 text-yellow-500 animate-blink-warning",
                        }),
                        "LEGACY RESTORED • ETHEREUM",
                      ],
                    }),
                    v.jsx("h1", {
                      className: "hero-title relative z-10",
                      children: v.jsx("span", {
                        className:
                          "text-white text-6xl md:text-7xl font-bebas tracking-wider",
                        children: "$SHIBES",
                      }),
                    }),
                    v.jsxs("p", {
                      className: "hero-subtitle relative z-10",
                      children: [
                        v.jsx(Op, {
                          text: "The comeback is in the breed’s history — and now in the meme.",
                          delay: 30,
                        }),
                        v.jsx("br", {}),
                        v.jsx("span", {
                          className: "opacity-80 mt-2 block",
                          children:
                            "Not a fork. Not an imitator. The original spirit of the Shiba Inu meme era.",
                        }),
                      ],
                    }),
                    v.jsxs("p", {
                      className:
                        "hero-quote crt-overlay p-4 bg-black/50 border border-green-900/50 rounded text-green-500 font-mono text-sm relative z-10",
                      children: [
                        v.jsx("span", {
                          className: "text-green-400 mr-2",
                          children: ">",
                        }),
                        v.jsx(Op, {
                          text: "“Shiba Inus — affectionately known online as Shibes — were never just cute dogs. They’re a Japanese hunting breed dating back to the 19th century.”",
                          delay: 20,
                          className: "font-mono",
                        }),
                      ],
                    }),
                    v.jsx("div", {
                      className: "hero-actions relative z-10",
                      children: v.jsx("button", {
                        className: "btn-primary animate-shake-hard",
                        onClick: () =>
                          window.open(
                            "https://amp.knowyourmeme.com/memes/shiba-inus-shibes",
                            "_blank"
                          ),
                        children: "Meme History",
                      }),
                    }),
                    v.jsxs("div", {
                      className:
                        "contract-pill relative z-10 blur-sm opacity-50 cursor-not-allowed",
                      children: [
                        v.jsx("span", { children: "ETH CA:" }),
                        v.jsx("span", {
                          className: "code",
                          children:
                            "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      className: "hero-footer-note relative z-10",
                      children:
                        "The real Shibe origins. 15 years of internet culture.",
                    }),
                  ],
                }),
                v.jsx("aside", {
                  className:
                    "hero-right relative overflow-hidden flex flex-col",
                  id: "fed-watch",
                  children: v.jsxs("div", {
                    className: "relative z-10 flex-1 flex flex-col",
                    children: [
                      v.jsx("h3", { children: "ORIGIN TWEET • DOGECOIN" }),
                      v.jsxs("div", {
                        className: "fed-time",
                        children: [
                          v.jsx("span", {
                            className: "label",
                            children: "Source",
                          }),
                          v.jsx("span", {
                            className: "value",
                            children: "@dogecoin • Dec 10",
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className:
                          "mt-2 rounded-xl overflow-hidden shadow-lg border border-gray-200/20 hover:scale-[1.02] transition-transform cursor-pointer",
                        onClick: () =>
                          window.open(
                            "https://x.com/shibesonEth",
                            "_blank"
                          ),
                        children: v.jsx("img", {
                          src: iT,
                          alt: "Dogecoin Tweet",
                          className: "w-full h-auto object-contain",
                        }),
                      }),
                      v.jsx("div", {
                        className:
                          "mt-4 rounded-xl overflow-hidden shadow-lg border border-gray-200/20 hover:scale-[1.02] transition-transform cursor-pointer",
                        onClick: () =>
                          window.open("https://x.com/dogecoin", "_blank"),
                        children: v.jsx("img", {
                          src: sT,
                          alt: "Dogecoin Valentine",
                          className: "w-full h-auto object-contain",
                        }),
                      }),
                      v.jsx("div", {
                        className:
                          "mt-4 rounded-xl overflow-hidden shadow-lg border border-gray-200/20 hover:scale-[1.02] transition-transform cursor-pointer",
                        onClick: () =>
                          window.open("https://x.com/meme", "_blank"),
                        children: v.jsx("img", {
                          src: uT,
                          alt: "Meme.com Tweet",
                          className: "w-full h-auto object-contain",
                        }),
                      }),
                      v.jsxs("div", {
                        className:
                          "alert-ticker mt-auto cursor-pointer hover:opacity-80 transition-opacity",
                        onClick: () =>
                          window.open(
                            "https://amp.knowyourmeme.com/memes/shiba-inus-shibes",
                            "_blank"
                          ),
                        children: [
                          v.jsxs("div", {
                            className: "alert-pill flex items-center gap-1",
                            children: [
                              v.jsx(sp, {
                                className: "w-3 h-3 animate-blink-warning",
                              }),
                              "Meme History",
                            ],
                          }),
                          v.jsxs("div", {
                            children: [
                              v.jsx("strong", { children: "Fact:" }),
                              " The /r/shiba subreddit formed on Oct 24, 2010. $SHIBES honors this timeline. (Source: KYM)",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "grid",
              children: [
                v.jsx("div", {
                  className:
                    "w-full max-w-[380px] mb-6 relative group mx-auto z-10",
                  children: v.jsx("img", {
                    src: Ap,
                    alt: "Shibes Coin",
                    className: "w-full h-auto tv-static-glitch",
                  }),
                }),
                v.jsxs("section", {
                  className: "card",
                  id: "about",
                  children: [
                    v.jsxs("h2", {
                      children: [
                        v.jsx("span", { children: "LORE" }),
                        v.jsx("span", {
                          className: "label",
                          children: "THE COMEBACK",
                        }),
                      ],
                    }),
                    v.jsxs("p", {
                      children: [
                        v.jsx("strong", { children: "Shiba Inus" }),
                        " — affectionately known online as Shibes — were never just cute dogs. They’re a Japanese hunting breed dating back to the 19th century, forged in the mountains long before crypto ever existed.",
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "The breed nearly vanished after WWII, only to be revived through selective breeding — a literal comeback story embedded into their DNA.",
                    }),
                    v.jsx("p", {
                      children: v.jsx("strong", {
                        children: "$SHIBES Steps Forward:",
                      }),
                    }),
                    v.jsxs("ul", {
                      children: [
                        v.jsx("li", {
                          children:
                            "Not a fork. Not an imitator. Not a derivative.",
                        }),
                        v.jsx("li", {
                          children: "Born from the true Doge origin photo.",
                        }),
                        v.jsx("li", {
                          children:
                            "Backed by 15 years of internet meme culture.",
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      className: "tagline",
                      children:
                        "Shibecoin may exist… but $SHIBES carries the legacy.",
                    }),
                    v.jsx("div", {
                      className:
                        "mt-4 pt-4 border-t border-[var(--border-subtle)]",
                      children: v.jsxs("a", {
                        href: "https://amp.knowyourmeme.com/memes/shiba-inus-shibes",
                        target: "_blank",
                        className:
                          "flex items-center gap-2 text-xs text-[var(--accent-soft)] hover:text-white transition-colors",
                        children: [
                          v.jsx(I1, { size: 14 }),
                          v.jsx("span", {
                            children: "View Full History on Know Your Meme",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                v.jsxs("section", {
                  className: "card",
                  id: "poll",
                  children: [
                    v.jsxs("h2", {
                      children: [
                        v.jsx("span", { children: "VIBE CHECK" }),
                        v.jsx("span", {
                          className: "label",
                          children: "COMMUNITY SENTIMENT",
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "How are we feeling about the return of the original Shibe spirit?",
                    }),
                    v.jsxs("div", {
                      className: "poll-options",
                      children: [
                        v.jsxs("div", {
                          className: `poll-option ${
                            o.choice === "hodl" ? "active" : ""
                          }`,
                          onClick: () => d("hodl"),
                          children: [
                            v.jsxs("span", {
                              className: "label",
                              children: [
                                "💎 Diamond Paws",
                                v.jsx("span", {
                                  className: "small-pill",
                                  children: "HODL",
                                }),
                              ],
                            }),
                            v.jsxs("span", {
                              className: "percent",
                              children: [m(o.hodl), "%"],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: `poll-option ${
                            o.choice === "moon" ? "active" : ""
                          }`,
                          onClick: () => d("moon"),
                          children: [
                            v.jsxs("span", {
                              className: "label",
                              children: [
                                "🚀 Moon Mission",
                                v.jsx("span", {
                                  className: "small-pill",
                                  children: "UP ONLY",
                                }),
                              ],
                            }),
                            v.jsxs("span", {
                              className: "percent",
                              children: [m(o.moon), "%"],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: `poll-option ${
                            o.choice === "bark" ? "active" : ""
                          }`,
                          onClick: () => d("bark"),
                          children: [
                            v.jsxs("span", {
                              className: "label",
                              children: [
                                "🐕 Much Bark",
                                v.jsx("span", {
                                  className: "small-pill",
                                  children: "WOW",
                                }),
                              ],
                            }),
                            v.jsxs("span", {
                              className: "percent",
                              children: [m(o.bark), "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      className: "poll-tagline",
                      children: "This poll runs locally. Trust in the Shibe.",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("section", {
              className: "card mt-6",
              id: "shibe-empire",
              children: [
                v.jsxs("h2", {
                  children: [
                    v.jsx("span", { children: "$SHIBES EMPIRE" }),
                    v.jsx("span", {
                      className: "label",
                      children: "FULL VIBE CHECK",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "space-y-4 text-sm text-[var(--text-muted)]",
                  children: [
                    v.jsx("p", {
                      className: "font-bold text-white",
                      children:
                        "MUCH WOW. VERY LEGEND. SUCH GAINS. WELCOME TO THE SHIBE EMPIRE!",
                    }),
                    v.jsx("p", {
                      children:
                        "Buckle up, degen shibes — this is THE full vibe check on the Shiba Inu / Shibes meme that birthed an entire internet (and crypto) revolution. From humble Japanese hunting pups to Kabosu’s world-domination face, to Dogecoin moonshots, SHIB armies burning trillions, and right now in February 2026... $KIMCHI exploding like a spicy rocket on Solana. This is the whole pack — informative, hilarious, and HYPED AF.",
                    }),
                    v.jsx("h3", {
                      className:
                        "text-white font-bold mt-4 uppercase tracking-wide text-xs border-b border-[var(--border-subtle)] pb-1 mb-2",
                      children:
                        "ORIGIN STORY: How a Japanese Rescue Dog Conquered the Internet (2010 Edition)",
                    }),
                    v.jsx("p", {
                      children:
                        "Shiba Inus (aka Shibes) are a badass ancient Japanese breed bred for hunting in the 1800s. Post-WWII they almost went extinct but got revived with love. Then in February 2010, kindergarten teacher Atsuko Sato posted adorable photos of her rescue Shiba Kabosu on her blog. One look-at-the-camera side-eye shot went nuclear. Reddit found it. Tumblr added Comic Sans inner monologues. Boom — Doge meme was born.",
                    }),
                    v.jsxs("ul", {
                      className:
                        "list-disc pl-5 font-comic text-[var(--accent-soft)]",
                      children: [
                        v.jsx("li", { children: "“such wow”" }),
                        v.jsx("li", { children: "“very meme”" }),
                        v.jsx("li", { children: "“much coin”" }),
                        v.jsx("li", { children: "“so amaze”" }),
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "By late 2013, KnowYourMeme crowned Doge the top meme of the year. Kabosu became the undisputed queen of wholesome chaos. (RIP legend — she crossed the rainbow bridge in 2024 at 18, but her spirit still pumps every chart.)",
                    }),
                    v.jsx("h3", {
                      className:
                        "text-white font-bold mt-4 uppercase tracking-wide text-xs border-b border-[var(--border-subtle)] pb-1 mb-2",
                      children:
                        "THE SPREAD: Shibes Take Over Reddit, Twitter, Everywhere",
                    }),
                    v.jsxs("p", {
                      children: [
                        v.jsx("strong", { children: "October 24, 2010:" }),
                        " /r/shiba subreddit launches → still thriving today.",
                        v.jsx("br", {}),
                        v.jsx("strong", { children: "2013:" }),
                        " Doge floods every platform. People photoshop Shibes into everything.",
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "The vibe? Pure unfiltered joy mixed with broken English captions. Wholesome before wholesome was cool.",
                    }),
                    v.jsx("h3", {
                      className:
                        "text-white font-bold mt-4 uppercase tracking-wide text-xs border-b border-[var(--border-subtle)] pb-1 mb-2",
                      children: "CRYPTO TAKES THE WHEEL",
                    }),
                    v.jsx("p", {
                      children:
                        "Dogecoin (2013) → SHIB Army (2020) → 2026 New Blood",
                    }),
                    v.jsxs("ul", {
                      className: "space-y-2",
                      children: [
                        v.jsxs("li", {
                          children: [
                            v.jsx("strong", { children: "Dogecoin ($DOGE):" }),
                            " The original “joke coin” literally built on the Doge meme. No cap supply, endless tipping culture, Elon tweets = instant pumps. Still the king in 2026 with billions in market cap and that unbreakable Shiba spirit.",
                          ],
                        }),
                        v.jsxs("li", {
                          children: [
                            v.jsx("strong", { children: "Shiba Inu ($SHIB):" }),
                            " The self-proclaimed “Dogecoin Killer.” Launched August 2020 on Ethereum with a QUADRILLION supply. Community burned half the tokens in one legendary move. Now it’s a full ecosystem: Shibarium L2, ShibaSwap DEX, NFTs, staking, metaverse dreams. Still one of the most recognizable meme coins on the planet.",
                          ],
                        }),
                      ],
                    }),
                    v.jsx("h3", {
                      className:
                        "text-white font-bold mt-4 uppercase tracking-wide text-xs border-b border-[var(--border-subtle)] pb-1 mb-2",
                      children: "2026: The New Pups are BARKING LOUD",
                    }),
                    v.jsxs("p", {
                      children: [
                        v.jsx("strong", {
                          children:
                            "$KIMCHI — THE VIRAL SHIBE TAKING OVER RIGHT NOW (FEB 2026)",
                        }),
                        v.jsx("br", {}),
                        "Meet Kimchi — the absolute unit Shiba Inu who WON the official #ChooseMyShibe contest run by House of Doge (yes, the real Dogecoin crew). Her human @peekabooxp rocked Nasdaq with her, repping the entire Shibe nation. This spicy legend just pumped from a few hundred thousand market cap to $6M+ in ONE HOUR on Solana (pump.fun). Charts going parabolic. Community calling it the freshest Shiba play of the cycle.",
                      ],
                    }),
                    v.jsx("p", {
                      children: v.jsx("strong", {
                        children:
                          "Other viral Shiba Inu coins lighting up the timeline right now:",
                      }),
                    }),
                    v.jsxs("ul", {
                      className: "list-disc pl-5",
                      children: [
                        v.jsxs("li", {
                          children: [
                            v.jsx("strong", { children: "$DOGE & $SHIB:" }),
                            " The OGs still printing history",
                          ],
                        }),
                        v.jsxs("li", {
                          children: [
                            v.jsx("strong", { children: "$WIF (dogwifhat):" }),
                            " The hat-wearing Shiba chaos agent on Solana that refuses to die",
                          ],
                        }),
                        v.jsxs("li", {
                          children: [
                            v.jsx("strong", { children: "$FLOKI:" }),
                            " Viking Shiba energy with real marketing muscle",
                          ],
                        }),
                      ],
                    }),
                    v.jsx("h3", {
                      className:
                        "text-white font-bold mt-4 uppercase tracking-wide text-xs border-b border-[var(--border-subtle)] pb-1 mb-2",
                      children: "WHY SHIBES KEEP WINNING",
                    }),
                    v.jsxs("ul", {
                      className: "list-disc pl-5",
                      children: [
                        v.jsx("li", {
                          children: "Unbreakable community (army vibes)",
                        }),
                        v.jsx("li", {
                          children: "Meme power that survives bear markets",
                        }),
                        v.jsx("li", {
                          children: "Real dogs, real stories, real emotion",
                        }),
                        v.jsx("li", {
                          children:
                            "From “such wow” to actual billion-dollar ecosystems",
                        }),
                      ],
                    }),
                    v.jsx("div", {
                      className:
                        "mt-4 p-3 bg-[var(--bg-card)] border border-[var(--accent)] rounded-lg text-center",
                      children: v.jsx("p", {
                        className: "text-[var(--accent)] font-bold",
                        children:
                          "The Shibe meme as a whole = proof that starting as a joke doesn’t mean you can’t take over the world.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className: "grid",
              style: { marginTop: "18px" },
              children: [
                v.jsxs("section", {
                  className: "card",
                  id: "memes",
                  children: [
                    v.jsxs("h2", {
                      children: [
                        v.jsx("span", { children: "MEME WAR ROOM" }),
                        v.jsx("span", {
                          className: "label",
                          children: "$SHIBES ARCHIVE",
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "The original Doge meme era revived with modern energy.",
                    }),
                    v.jsx("div", {
                      className: "memes-grid",
                      children: CT.map((h, b) =>
                        v.jsxs(
                          "div",
                          {
                            className: "meme-slot group",
                            children: [
                              v.jsx("div", {
                                className:
                                  "overflow-hidden rounded-md mb-2 border-2 border-transparent group-hover:border-[var(--accent)] transition-all",
                                children: v.jsx("img", {
                                  src: h.src,
                                  alt: `Meme ${b + 1}`,
                                  className:
                                    "w-full h-auto object-cover aspect-square group-hover:scale-110 animate-pulse-fast",
                                  style: { animationDelay: `${b * 0.2}s` },
                                }),
                              }),
                              v.jsx("strong", { children: "Status:" }),
                              " ",
                              h.label,
                            ],
                          },
                          b
                        )
                      ),
                    }),
                  ],
                }),
                v.jsxs("section", {
                  className: "card",
                  id: "tokenomics",
                  children: [
                    v.jsxs("h2", {
                      children: [
                        v.jsx("span", { children: "TOKENOMICS" }),
                        v.jsx("span", {
                          className: "label",
                          children: "ETHEREUM STANDARD",
                        }),
                      ],
                    }),
                    v.jsx("p", {
                      children:
                        "No taxes. Liquidity locked. Contract renounced. Pure decentralized meme energy.",
                    }),
                    v.jsxs("div", {
                      className: "tokenomics-grid",
                      children: [
                        v.jsxs("div", {
                          className: "token-card",
                          children: [
                            v.jsx("div", {
                              className: "label",
                              children: "Supply",
                            }),
                            v.jsx("div", {
                              className: "value",
                              children: "1,000,000,000",
                            }),
                            v.jsx("div", {
                              className: "note",
                              children: "$SHIBES",
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "token-card",
                          children: [
                            v.jsx("div", {
                              className: "label",
                              children: "Taxes",
                            }),
                            v.jsx("div", {
                              className: "value",
                              children: "0/0",
                            }),
                            v.jsx("div", {
                              className: "note",
                              children: "Buy/Sell",
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "token-card",
                          children: [
                            v.jsx("div", {
                              className: "label",
                              children: "Liquidity",
                            }),
                            v.jsx("div", {
                              className: "value",
                              children: "Locked",
                            }),
                            v.jsx("div", {
                              className: "note",
                              children: "Forever",
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "token-card",
                          children: [
                            v.jsx("div", {
                              className: "label",
                              children: "Network",
                            }),
                            v.jsx("div", {
                              className: "value",
                              children: "Ethereum",
                            }),
                            v.jsx("div", {
                              className: "note",
                              children: "ERC-20",
                            }),
                          ],
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "social-row",
                      style: { marginTop: "12px" },
                      children: [
                        v.jsx("div", {
                          className: "social-pill",
                          onClick: () => window.open("https://x.com/shibesonEth", "_blank"),
                          children: "🐦 X (Twitter)",
                        }),
                        v.jsx("div", {
                          className: "social-pill",
                          onClick: () => window.open("https://t.me/shibesonEth", "_blank"),
                          children: "💬 Telegram",
                        }),
                        v.jsx("div", {
                          className: "social-pill",
                          onClick: () =>
                            window.open(
                              "https://amp.knowyourmeme.com/memes/shiba-inus-shibes",
                              "_blank"
                            ),
                          children: "📖 Know Your Meme",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("section", {
              className: "card",
              id: "how-to-buy",
              style: { marginTop: "20px" },
              children: [
                v.jsxs("h2", {
                  children: [
                    v.jsx("span", { children: "HOW TO BUY" }),
                    v.jsx("span", {
                      className: "label",
                      children: "ETHEREUM LAUNCH",
                    }),
                  ],
                }),
                v.jsxs("p", {
                  children: [
                    "Join the ",
                    v.jsx("strong", { children: "$SHIBES" }),
                    " movement on Ethereum.",
                  ],
                }),
                v.jsxs("ul", {
                  className: "howto-steps",
                  children: [
                    v.jsxs("li", {
                      children: [
                        v.jsx("span", {
                          className: "step-title",
                          children: "1. Create a Wallet.",
                        }),
                        v.jsx("span", {
                          className: "step-note",
                          children:
                            " Download MetaMask or use any WalletConnect compatible wallet.",
                        }),
                      ],
                    }),
                    v.jsxs("li", {
                      children: [
                        v.jsx("span", {
                          className: "step-title",
                          children: "2. Get some ETH.",
                        }),
                        v.jsx("span", {
                          className: "step-note",
                          children:
                            " Buy ETH on an exchange and send it to your wallet address on the Ethereum Mainnet.",
                        }),
                      ],
                    }),
                    v.jsxs("li", {
                      children: [
                        v.jsx("span", {
                          className: "step-title",
                          children: "3. Go to Uniswap.",
                        }),
                        v.jsx("span", {
                          className: "step-note",
                          children: " Connect your wallet to Uniswap.",
                        }),
                      ],
                    }),
                    v.jsxs("li", {
                      children: [
                        v.jsx("span", {
                          className: "step-title",
                          children: "4. Paste the Address.",
                        }),
                        v.jsx("span", {
                          className: "step-note",
                          children:
                            " Use the $SHIBES contract address (copied above) to find the token.",
                        }),
                      ],
                    }),
                    v.jsxs("li", {
                      children: [
                        v.jsx("span", {
                          className: "step-title",
                          children: "5. Swap.",
                        }),
                        v.jsx("span", {
                          className: "step-note",
                          children:
                            " Swap ETH for $SHIBES. Welcome to the family.",
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "disclaimer",
                  children: [
                    v.jsx("strong", { children: "Disclaimer:" }),
                    " $SHIBES is a community meme token for entertainment purposes. No intrinsic value. No financial return expectation.",
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "footer-banner",
              style: { backgroundImage: `url(${oT})` },
            }),
            v.jsx("footer", {
              children: v.jsxs("p", {
                children: [
                  "Built by Shibes. For Shibes.",
                  v.jsx("br", {}),
                  v.jsx("span", { className: "brand", children: "$SHIBES" }),
                  " • The Legacy Restored.",
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function RT() {
  return v.jsxs(w0, {
    children: [
      v.jsx(Qm, { path: "/", component: NT }),
      v.jsx(Qm, { component: nT }),
    ],
  });
}
function MT() {
  return v.jsx(J0, {
    client: P0,
    children: v.jsxs($E, { children: [v.jsx(GS, {}), v.jsx(RT, {})] }),
  });
}
e0.createRoot(document.getElementById("root")).render(v.jsx(MT, {}));
