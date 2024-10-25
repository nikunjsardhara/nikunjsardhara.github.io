(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Wu = { exports: {} },
  el = {},
  Qu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kn = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  hc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  Io = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ku = Object.assign,
  Yu = {};
function rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Gu);
}
rn.prototype.isReactComponent = {};
rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {}
Xu.prototype = rn.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Gu);
}
var $i = (Ui.prototype = new Xu());
$i.constructor = Ui;
Ku($i, rn.prototype);
$i.isPureReactComponent = !0;
var Oo = Array.isArray,
  Zu = Object.prototype.hasOwnProperty,
  Vi = { current: null },
  Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Kn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Vi.current,
  };
}
function yc(e, t) {
  return {
    $$typeof: Kn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Do = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : t.toString(36);
}
function yr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kn:
          case uc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      Oo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Do, "$&/") + "/"),
          yr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Hi(l) &&
            (l = yc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Do, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Oo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + wl(i, u);
      o += yr(i, t, n, s, l);
    }
  else if (((s = gc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + wl(i, u++)), (o += yr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    yr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function xc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  kc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Vi,
  };
L.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = rn;
L.Fragment = sc;
L.Profiler = cc;
L.PureComponent = Ui;
L.StrictMode = ac;
L.Suspense = mc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ku({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Vi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Zu.call(t, s) &&
        !Ju.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Kn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = qu;
L.createFactory = function (e) {
  var t = qu.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
L.isValidElement = Hi;
L.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: xc };
};
L.memo = function (e, t) {
  return { $$typeof: hc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.2.0";
Qu.exports = L;
var Yn = Qu.exports;
const Sc = oc(Yn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = Yn,
  Ec = Symbol.for("react.element"),
  Nc = Symbol.for("react.fragment"),
  _c = Object.prototype.hasOwnProperty,
  jc = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) _c.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ec,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jc.current,
  };
}
el.Fragment = Nc;
el.jsx = bu;
el.jsxs = bu;
Wu.exports = el;
var v = Wu.exports,
  Ql = {},
  es = { exports: {} },
  ye = {},
  ts = { exports: {} },
  ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var P = E.length;
    E.push(z);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        X = E[W];
      if (0 < l(X, z)) (E[W] = z), (E[P] = X), (P = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      P = E.pop();
    if (P !== z) {
      E[0] = P;
      e: for (var W = 0, X = E.length, bn = X >>> 1; W < bn; ) {
        var ht = 2 * (W + 1) - 1,
          yl = E[ht],
          vt = ht + 1,
          er = E[vt];
        if (0 > l(yl, P))
          vt < X && 0 > l(er, yl)
            ? ((E[W] = er), (E[vt] = P), (W = vt))
            : ((E[W] = yl), (E[ht] = P), (W = ht));
        else if (vt < X && 0 > l(er, P)) (E[W] = er), (E[vt] = P), (W = vt);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var P = E.sortIndex - z.sortIndex;
    return P !== 0 ? P : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    x = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function g(E) {
    if (((k = !1), d(E), !x))
      if (n(s) !== null) (x = !0), vl(C);
      else {
        var z = n(c);
        z !== null && gl(g, z.startTime - E);
      }
  }
  function C(E, z) {
    (x = !1), k && ((k = !1), f(j), (j = -1)), (w = !0);
    var P = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (E && !_e()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var X = W(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var bn = !0;
      else {
        var ht = n(c);
        ht !== null && gl(g, ht.startTime - z), (bn = !1);
      }
      return bn;
    } finally {
      (m = null), (p = P), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    j = -1,
    B = 5,
    T = -1;
  function _e() {
    return !(e.unstable_now() - T < B);
  }
  function un() {
    if (_ !== null) {
      var E = e.unstable_now();
      T = E;
      var z = !0;
      try {
        z = _(!0, E);
      } finally {
        z ? sn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var sn;
  if (typeof a == "function")
    sn = function () {
      a(un);
    };
  else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      ic = Mo.port2;
    (Mo.port1.onmessage = un),
      (sn = function () {
        ic.postMessage(null);
      });
  } else
    sn = function () {
      F(un, 0);
    };
  function vl(E) {
    (_ = E), N || ((N = !0), sn());
  }
  function gl(E, z) {
    j = F(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), vl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var P = p;
      p = z;
      try {
        return E();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var P = p;
      p = E;
      try {
        return z();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        E)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = P + X),
        (E = {
          id: h++,
          callback: z,
          priorityLevel: E,
          startTime: P,
          expirationTime: X,
          sortIndex: -1,
        }),
        P > W
          ? ((E.sortIndex = P),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (k ? (f(j), (j = -1)) : (k = !0), gl(g, P - W)))
          : ((E.sortIndex = X), t(s, E), x || w || ((x = !0), vl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (E) {
      var z = p;
      return function () {
        var P = p;
        p = z;
        try {
          return E.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    });
})(ns);
ts.exports = ns;
var Pc = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rs = Yn,
  ge = Pc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ls = new Set(),
  Ln = {};
function Pt(e, t) {
  Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) ls.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Lc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fo = {},
  Uo = {};
function Tc(e) {
  return Gl.call(Uo, e)
    ? !0
    : Gl.call(Fo, e)
    ? !1
    : Lc.test(e)
    ? (Uo[e] = !0)
    : ((Fo[e] = !0), !1);
}
function Rc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Rc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ai = /[\-:]([a-z])/g;
function Bi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ai, Bi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ai, Bi);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ai, Bi);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mc(t, n, l, r) && (n = null),
    r || l === null
      ? Tc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = rs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  Mt = Symbol.for("react.fragment"),
  Qi = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  is = Symbol.for("react.provider"),
  os = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Yl = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  Ki = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  us = Symbol.for("react.offscreen"),
  $o = Symbol.iterator;
function an(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($o && e[$o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  xl;
function gn(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var kl = !1;
function Sl(e, t) {
  if (!e || kl) return "";
  kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Ic(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn("Lazy");
    case 13:
      return gn("Suspense");
    case 19:
      return gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sl(e.type, !1)), e;
    case 11:
      return (e = Sl(e.type.render, !1)), e;
    case 1:
      return (e = Sl(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mt:
      return "Fragment";
    case Rt:
      return "Portal";
    case Kl:
      return "Profiler";
    case Qi:
      return "StrictMode";
    case Yl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case os:
        return (e.displayName || "Context") + ".Consumer";
      case is:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ki:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case Ze:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Oc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Qi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ct(e) {
  switch (typeof e) {
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
function ss(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dc(e) {
  var t = ss(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Dc(e));
}
function as(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cs(e, t) {
  (t = t.checked), t != null && Wi(e, "checked", t, !1);
}
function ql(e, t) {
  cs(e, t);
  var n = ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ho(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yn = Array.isArray;
function Wt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ao(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (yn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ct(n) };
}
function fs(e, t) {
  var n = ct(t.value),
    r = ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ds(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  ps = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Tn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function (e) {
  Fc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kn.hasOwnProperty(e) && kn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Uc = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ni(e, t) {
  if (t) {
    if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ri(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var li = null;
function Yi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Qt = null,
  Gt = null;
function Wo(e) {
  if ((e = Jn(e))) {
    if (typeof ii != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = il(t)), ii(e.stateNode, e.type, t));
  }
}
function vs(e) {
  Qt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Qt = e);
}
function gs() {
  if (Qt) {
    var e = Qt,
      t = Gt;
    if (((Gt = Qt = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
  }
}
function ys(e, t) {
  return e(t);
}
function ws() {}
var Cl = !1;
function xs(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return ys(e, t, n);
  } finally {
    (Cl = !1), (Qt !== null || Gt !== null) && (ws(), gs());
  }
}
function Rn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var oi = !1;
if (We)
  try {
    var cn = {};
    Object.defineProperty(cn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", cn, cn),
      window.removeEventListener("test", cn, cn);
  } catch {
    oi = !1;
  }
function $c(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Sn = !1,
  Tr = null,
  Rr = !1,
  ui = null,
  Vc = {
    onError: function (e) {
      (Sn = !0), (Tr = e);
    },
  };
function Hc(e, t, n, r, l, i, o, u, s) {
  (Sn = !1), (Tr = null), $c.apply(Vc, arguments);
}
function Ac(e, t, n, r, l, i, o, u, s) {
  if ((Hc.apply(this, arguments), Sn)) {
    if (Sn) {
      var c = Tr;
      (Sn = !1), (Tr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (ui = c));
  }
}
function Lt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ks(e) {
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
function Qo(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function Bc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Qo(l), e;
        if (i === r) return Qo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ss(e) {
  return (e = Bc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Es = ge.unstable_scheduleCallback,
  Go = ge.unstable_cancelCallback,
  Wc = ge.unstable_shouldYield,
  Qc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Gc = ge.unstable_getCurrentPriorityLevel,
  Xi = ge.unstable_ImmediatePriority,
  Ns = ge.unstable_UserBlockingPriority,
  Mr = ge.unstable_NormalPriority,
  Kc = ge.unstable_LowPriority,
  _s = ge.unstable_IdlePriority,
  tl = null,
  Fe = null;
function Yc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : Jc,
  Xc = Math.log,
  Zc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Zc) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function wn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = wn(u)) : ((i &= o), i !== 0 && (r = wn(i)));
  } else (o = n & ~l), o !== 0 ? (r = wn(o)) : i !== 0 && (r = wn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = qc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n);
}
function ef(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Te(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ps,
  Ji,
  Ls,
  Ts,
  Rs,
  ai = !1,
  ur = [],
  nt = null,
  rt = null,
  lt = null,
  Mn = new Map(),
  In = new Map(),
  qe = [],
  tf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ko(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nt = null;
      break;
    case "dragenter":
    case "dragleave":
      rt = null;
      break;
    case "mouseover":
    case "mouseout":
      lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && Ji(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (nt = fn(nt, e, t, n, r, l)), !0;
    case "dragenter":
      return (rt = fn(rt, e, t, n, r, l)), !0;
    case "mouseover":
      return (lt = fn(lt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Mn.set(i, fn(Mn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), In.set(i, fn(In.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ks(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ls(n);
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
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = Jn(n)), t !== null && Ji(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yo(e, t, n) {
  xr(e) && n.delete(t);
}
function rf() {
  (ai = !1),
    nt !== null && xr(nt) && (nt = null),
    rt !== null && xr(rt) && (rt = null),
    lt !== null && xr(lt) && (lt = null),
    Mn.forEach(Yo),
    In.forEach(Yo);
}
function dn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, rf)));
}
function On(e) {
  function t(l) {
    return dn(l, e);
  }
  if (0 < ur.length) {
    dn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nt !== null && dn(nt, e),
      rt !== null && dn(rt, e),
      lt !== null && dn(lt, e),
      Mn.forEach(t),
      In.forEach(t),
      n = 0;
    n < qe.length;
    n++
  )
    (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
    Ms(n), n.blockedOn === null && qe.shift();
}
var Kt = Ye.ReactCurrentBatchConfig,
  Or = !0;
function lf(e, t, n, r) {
  var l = M,
    i = Kt.transition;
  Kt.transition = null;
  try {
    (M = 1), qi(e, t, n, r);
  } finally {
    (M = l), (Kt.transition = i);
  }
}
function of(e, t, n, r) {
  var l = M,
    i = Kt.transition;
  Kt.transition = null;
  try {
    (M = 4), qi(e, t, n, r);
  } finally {
    (M = l), (Kt.transition = i);
  }
}
function qi(e, t, n, r) {
  if (Or) {
    var l = ci(e, t, n, r);
    if (l === null) Il(e, t, r, Dr, n), Ko(e, r);
    else if (nf(l, e, t, n, r)) r.stopPropagation();
    else if ((Ko(e, r), t & 4 && -1 < tf.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jn(l);
        if (
          (i !== null && Ps(i),
          (i = ci(e, t, n, r)),
          i === null && Il(e, t, r, Dr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Dr = null;
function ci(e, t, n, r) {
  if (((Dr = null), (e = Yi(r)), (e = wt(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dr = e), null;
}
function Is(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gc()) {
        case Xi:
          return 1;
        case Ns:
          return 4;
        case Mr:
        case Kc:
          return 16;
        case _s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  bi = null,
  kr = null;
function Os() {
  if (kr) return kr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = "value" in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Xo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sr
        : Xo),
      (this.isPropagationStopped = Xo),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eo = we(ln),
  Zn = H({}, ln, { view: 0, detail: 0 }),
  uf = we(Zn),
  Nl,
  _l,
  pn,
  nl = H({}, Zn, {
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
    getModifierState: to,
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
        : (e !== pn &&
            (pn && e.type === "mousemove"
              ? ((Nl = e.screenX - pn.screenX), (_l = e.screenY - pn.screenY))
              : (_l = Nl = 0),
            (pn = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _l;
    },
  }),
  Zo = we(nl),
  sf = H({}, nl, { dataTransfer: 0 }),
  af = we(sf),
  cf = H({}, Zn, { relatedTarget: 0 }),
  jl = we(cf),
  ff = H({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = we(ff),
  pf = H({}, ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mf = we(pf),
  hf = H({}, ln, { data: 0 }),
  Jo = we(hf),
  vf = {
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
  gf = {
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
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yf[e]) ? !!t[e] : !1;
}
function to() {
  return wf;
}
var xf = H({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = vf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gf[e.keyCode] || "Unidentified"
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
    getModifierState: to,
    charCode: function (e) {
      return e.type === "keypress" ? Sr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kf = we(xf),
  Sf = H({}, nl, {
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
  qo = we(Sf),
  Cf = H({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  Ef = we(Cf),
  Nf = H({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = we(Nf),
  jf = H({}, nl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  zf = we(jf),
  Pf = [9, 13, 27, 32],
  no = We && "CompositionEvent" in window,
  Cn = null;
We && "documentMode" in document && (Cn = document.documentMode);
var Lf = We && "TextEvent" in window && !Cn,
  Ds = We && (!no || (Cn && 8 < Cn && 11 >= Cn)),
  bo = " ",
  eu = !1;
function Fs(e, t) {
  switch (e) {
    case "keyup":
      return Pf.indexOf(t.keyCode) !== -1;
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
function Us(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Tf(e, t) {
  switch (e) {
    case "compositionend":
      return Us(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), bo);
    case "textInput":
      return (e = t.data), e === bo && eu ? null : e;
    default:
      return null;
  }
}
function Rf(e, t) {
  if (It)
    return e === "compositionend" || (!no && Fs(e, t))
      ? ((e = Os()), (kr = bi = et = null), (It = !1), e)
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
      return Ds && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = {
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
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  vs(r),
    (t = Fr(t, "onChange")),
    0 < t.length &&
      ((n = new eo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var En = null,
  Dn = null;
function If(e) {
  Zs(e, 0);
}
function rl(e) {
  var t = Ft(e);
  if (as(t)) return e;
}
function Of(e, t) {
  if (e === "change") return t;
}
var Vs = !1;
if (We) {
  var zl;
  if (We) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"),
        (Pl = typeof nu.oninput == "function");
    }
    zl = Pl;
  } else zl = !1;
  Vs = zl && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  En && (En.detachEvent("onpropertychange", Hs), (Dn = En = null));
}
function Hs(e) {
  if (e.propertyName === "value" && rl(Dn)) {
    var t = [];
    $s(t, Dn, e, Yi(e)), xs(If, t);
  }
}
function Df(e, t, n) {
  e === "focusin"
    ? (ru(), (En = t), (Dn = n), En.attachEvent("onpropertychange", Hs))
    : e === "focusout" && ru();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl(Dn);
}
function Uf(e, t) {
  if (e === "click") return rl(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return rl(t);
}
function Vf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Vf;
function Fn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, t) {
  var n = lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = lu(n);
  }
}
function As(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? As(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Bs() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function ro(e) {
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
function Hf(e) {
  var t = Bs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    As(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ro(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = iu(n, i));
        var o = iu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Af = We && "documentMode" in document && 11 >= document.documentMode,
  Ot = null,
  fi = null,
  Nn = null,
  di = !1;
function ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    Ot == null ||
    Ot !== Lr(r) ||
    ((r = Ot),
    "selectionStart" in r && ro(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nn && Fn(Nn, r)) ||
      ((Nn = r),
      (r = Fr(fi, "onSelect")),
      0 < r.length &&
        ((t = new eo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ot))));
}
function ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dt = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Ll = {},
  Ws = {};
We &&
  ((Ws = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dt.animationend.animation,
    delete Dt.animationiteration.animation,
    delete Dt.animationstart.animation),
  "TransitionEvent" in window || delete Dt.transitionend.transition);
function ll(e) {
  if (Ll[e]) return Ll[e];
  if (!Dt[e]) return e;
  var t = Dt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ws) return (Ll[e] = t[n]);
  return e;
}
var Qs = ll("animationend"),
  Gs = ll("animationiteration"),
  Ks = ll("animationstart"),
  Ys = ll("transitionend"),
  Xs = new Map(),
  uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dt(e, t) {
  Xs.set(e, t), Pt(t, [e]);
}
for (var Tl = 0; Tl < uu.length; Tl++) {
  var Rl = uu[Tl],
    Bf = Rl.toLowerCase(),
    Wf = Rl[0].toUpperCase() + Rl.slice(1);
  dt(Bf, "on" + Wf);
}
dt(Qs, "onAnimationEnd");
dt(Gs, "onAnimationIteration");
dt(Ks, "onAnimationStart");
dt("dblclick", "onDoubleClick");
dt("focusin", "onFocus");
dt("focusout", "onBlur");
dt(Ys, "onTransitionEnd");
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
Pt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ac(r, t, void 0, e), (e.currentTarget = null);
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          su(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          su(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ui), (Rr = !1), (ui = null), e);
}
function O(e, t) {
  var n = t[gi];
  n === void 0 && (n = t[gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Js(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
  var r = 0;
  t && (r |= 4), Js(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      ls.forEach(function (n) {
        n !== "selectionchange" && (Qf.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), Ml("selectionchange", !1, t));
  }
}
function Js(e, t, n, r) {
  switch (Is(t)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = qi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  xs(function () {
    var c = i,
      h = Yi(n),
      m = [];
    e: {
      var p = Xs.get(e);
      if (p !== void 0) {
        var w = eo,
          x = e;
        switch (e) {
          case "keypress":
            if (Sr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = kf;
            break;
          case "focusin":
            (x = "focus"), (w = jl);
            break;
          case "focusout":
            (x = "blur"), (w = jl);
            break;
          case "beforeblur":
          case "afterblur":
            w = jl;
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
            w = Zo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ef;
            break;
          case Qs:
          case Gs:
          case Ks:
            w = df;
            break;
          case Ys:
            w = _f;
            break;
          case "scroll":
            w = uf;
            break;
          case "wheel":
            w = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = qo;
        }
        var k = (t & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Rn(a, f)), g != null && k.push($n(a, g, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new w(p, x, null, n, h)), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== li &&
            (x = n.relatedTarget || n.fromElement) &&
            (wt(x) || x[Qe]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? wt(x) : null),
              x !== null &&
                ((F = Lt(x)), x !== F || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = Zo),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = qo),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (F = w == null ? p : Ft(w)),
            (d = x == null ? p : Ft(x)),
            (p = new k(g, a + "leave", w, n, h)),
            (p.target = F),
            (p.relatedTarget = d),
            (g = null),
            wt(h) === c &&
              ((k = new k(f, a + "enter", x, n, h)),
              (k.target = d),
              (k.relatedTarget = F),
              (g = k)),
            (F = g),
            w && x)
          )
            t: {
              for (k = w, f = x, a = 0, d = k; d; d = Tt(d)) a++;
              for (d = 0, g = f; g; g = Tt(g)) d++;
              for (; 0 < a - d; ) (k = Tt(k)), a--;
              for (; 0 < d - a; ) (f = Tt(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Tt(k)), (f = Tt(f));
              }
              k = null;
            }
          else k = null;
          w !== null && au(m, p, w, k, !1),
            x !== null && F !== null && au(m, F, x, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ft(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var C = Of;
        else if (tu(p))
          if (Vs) C = $f;
          else {
            C = Ff;
            var N = Df;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Uf);
        if (C && (C = C(e, c))) {
          $s(m, C, n, h);
          break e;
        }
        N && N(e, p, c),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            bl(p, "number", p.value);
      }
      switch (((N = c ? Ft(c) : window), e)) {
        case "focusin":
          (tu(N) || N.contentEditable === "true") &&
            ((Ot = N), (fi = c), (Nn = null));
          break;
        case "focusout":
          Nn = fi = Ot = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (di = !1), ou(m, n, h);
          break;
        case "selectionchange":
          if (Af) break;
        case "keydown":
        case "keyup":
          ou(m, n, h);
      }
      var _;
      if (no)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        It
          ? Fs(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Ds &&
          n.locale !== "ko" &&
          (It || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && It && (_ = Os())
            : ((et = h),
              (bi = "value" in et ? et.value : et.textContent),
              (It = !0))),
        (N = Fr(c, j)),
        0 < N.length &&
          ((j = new Jo(j, e, null, n, h)),
          m.push({ event: j, listeners: N }),
          _ ? (j.data = _) : ((_ = Us(n)), _ !== null && (j.data = _)))),
        (_ = Lf ? Tf(e, n) : Rf(e, n)) &&
          ((c = Fr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Jo("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    Zs(m, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Rn(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = Rn(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Tt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Rn(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = Rn(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gf = /\r\n?/g,
  Kf = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gf,
      `
`
    )
    .replace(Kf, "");
}
function fr(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var pi = null,
  mi = null;
function hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Yf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fu = typeof Promise == "function" ? Promise : void 0,
  Xf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fu < "u"
      ? function (e) {
          return fu.resolve(null).then(e).catch(Zf);
        }
      : vi;
function Zf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ol(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), On(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  On(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var on = Math.random().toString(36).slice(2),
  De = "__reactFiber$" + on,
  Vn = "__reactProps$" + on,
  Qe = "__reactContainer$" + on,
  gi = "__reactEvents$" + on,
  Jf = "__reactListeners$" + on,
  qf = "__reactHandles$" + on;
function wt(e) {
  var t = e[De];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[De])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = du(e); e !== null; ) {
          if ((n = e[De])) return n;
          e = du(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[De] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ft(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Vn] || null;
}
var yi = [],
  Ut = -1;
function pt(e) {
  return { current: e };
}
function D(e) {
  0 > Ut || ((e.current = yi[Ut]), (yi[Ut] = null), Ut--);
}
function I(e, t) {
  Ut++, (yi[Ut] = e.current), (e.current = t);
}
var ft = {},
  le = pt(ft),
  fe = pt(!1),
  Et = ft;
function Jt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  D(fe), D(le);
}
function pu(e, t, n) {
  if (le.current !== ft) throw Error(y(168));
  I(le, t), I(fe, n);
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Oc(e) || "Unknown", l));
  return H({}, n, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (Et = le.current),
    I(le, e),
    I(fe, fe.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = qs(e, t, Et)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(fe),
      D(le),
      I(le, e))
    : D(fe),
    I(fe, n);
}
var Ve = null,
  ol = !1,
  Dl = !1;
function bs(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function bf(e) {
  (ol = !0), bs(e);
}
function mt() {
  if (!Dl && Ve !== null) {
    Dl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (ol = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Es(Xi, mt), l);
    } finally {
      (M = t), (Dl = !1);
    }
  }
  return null;
}
var $t = [],
  Vt = 0,
  Hr = null,
  Ar = 0,
  xe = [],
  ke = 0,
  Nt = null,
  He = 1,
  Ae = "";
function gt(e, t) {
  ($t[Vt++] = Ar), ($t[Vt++] = Hr), (Hr = e), (Ar = t);
}
function ea(e, t, n) {
  (xe[ke++] = He), (xe[ke++] = Ae), (xe[ke++] = Nt), (Nt = e);
  var r = He;
  e = Ae;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Te(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Te(t) + l)) | (n << l) | r),
      (Ae = i + e);
  } else (He = (1 << i) | (n << l) | r), (Ae = e);
}
function lo(e) {
  e.return !== null && (gt(e, 1), ea(e, 1, 0));
}
function io(e) {
  for (; e === Hr; )
    (Hr = $t[--Vt]), ($t[Vt] = null), (Ar = $t[--Vt]), ($t[Vt] = null);
  for (; e === Nt; )
    (Nt = xe[--ke]),
      (xe[ke] = null),
      (Ae = xe[--ke]),
      (xe[ke] = null),
      (He = xe[--ke]),
      (xe[ke] = null);
}
var ve = null,
  he = null,
  U = !1,
  Le = null;
function ta(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nt !== null ? { id: He, overflow: Ae } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (U) {
    var t = he;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (wi(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ve;
        t && hu(e, t)
          ? ta(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!U) return vu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (wi(e)) throw (na(), Error(y(418)));
    for (; t; ) ta(e, t), (t = it(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = he; e; ) e = it(e.nextSibling);
}
function qt() {
  (he = ve = null), (U = !1);
}
function oo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var ed = Ye.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Br = pt(null),
  Wr = null,
  Ht = null,
  uo = null;
function so() {
  uo = Ht = Wr = null;
}
function ao(e) {
  var t = Br.current;
  D(Br), (e._currentValue = t);
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yt(e, t) {
  (Wr = e),
    (uo = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Wr === null) throw Error(y(308));
      (Ht = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var xt = null;
function co(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function ra(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), co(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function la(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), co(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
function gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((p = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                m = x.call(w, m, p);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (p = typeof x == "function" ? x.call(w, m, p) : x),
                p == null)
              )
                break e;
              m = H({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function yu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ia = new rs.Component().refs;
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Be(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Be(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = st(e),
      l = Be(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Re(t, e, r, n), Cr(t, e, r));
  },
};
function wu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fn(n, r) || !Fn(l, i)
      : !0
  );
}
function oa(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((l = de(t) ? Et : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ia), fo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ee(i))
    : ((i = de(t) ? Et : le.current), (l.context = Jt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Si(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === ia && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ku(e) {
  var t = e._init;
  return t(e._payload);
}
function ua(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = at(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Bl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var C = d.type;
    return C === Mt
      ? h(f, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ze &&
            ku(C) === a.type))
      ? ((g = l(a, d.props)), (g.ref = mn(f, a, d)), (g.return = f), g)
      : ((g = Pr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = mn(f, a, d)),
        (g.return = f),
        g);
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Wl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, g, C) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, g, C)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Bl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (
            (d = Pr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = mn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Wl(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var g = a._init;
          return m(f, g(a._payload), d);
      }
      if (yn(a) || an(a))
        return (a = Ct(a, f.mode, d, null)), (a.return = f), a;
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var C = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case nr:
          return d.key === C ? s(f, a, d, g) : null;
        case Rt:
          return d.key === C ? c(f, a, d, g) : null;
        case Ze:
          return (C = d._init), p(f, a, C(d._payload), g);
      }
      if (yn(d) || an(d)) return C !== null ? null : h(f, a, d, g, null);
      pr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(a, f, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case nr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, C);
        case Rt:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, C);
        case Ze:
          var N = g._init;
          return w(f, a, d, N(g._payload), C);
      }
      if (yn(g) || an(g)) return (f = f.get(d) || null), h(a, f, g, C, null);
      pr(a, g);
    }
    return null;
  }
  function x(f, a, d, g) {
    for (
      var C = null, N = null, _ = a, j = (a = 0), B = null;
      _ !== null && j < d.length;
      j++
    ) {
      _.index > j ? ((B = _), (_ = null)) : (B = _.sibling);
      var T = p(f, _, d[j], g);
      if (T === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && T.alternate === null && t(f, _),
        (a = i(T, a, j)),
        N === null ? (C = T) : (N.sibling = T),
        (N = T),
        (_ = B);
    }
    if (j === d.length) return n(f, _), U && gt(f, j), C;
    if (_ === null) {
      for (; j < d.length; j++)
        (_ = m(f, d[j], g)),
          _ !== null &&
            ((a = i(_, a, j)), N === null ? (C = _) : (N.sibling = _), (N = _));
      return U && gt(f, j), C;
    }
    for (_ = r(f, _); j < d.length; j++)
      (B = w(_, f, j, d[j], g)),
        B !== null &&
          (e && B.alternate !== null && _.delete(B.key === null ? j : B.key),
          (a = i(B, a, j)),
          N === null ? (C = B) : (N.sibling = B),
          (N = B));
    return (
      e &&
        _.forEach(function (_e) {
          return t(f, _e);
        }),
      U && gt(f, j),
      C
    );
  }
  function k(f, a, d, g) {
    var C = an(d);
    if (typeof C != "function") throw Error(y(150));
    if (((d = C.call(d)), d == null)) throw Error(y(151));
    for (
      var N = (C = null), _ = a, j = (a = 0), B = null, T = d.next();
      _ !== null && !T.done;
      j++, T = d.next()
    ) {
      _.index > j ? ((B = _), (_ = null)) : (B = _.sibling);
      var _e = p(f, _, T.value, g);
      if (_e === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && _e.alternate === null && t(f, _),
        (a = i(_e, a, j)),
        N === null ? (C = _e) : (N.sibling = _e),
        (N = _e),
        (_ = B);
    }
    if (T.done) return n(f, _), U && gt(f, j), C;
    if (_ === null) {
      for (; !T.done; j++, T = d.next())
        (T = m(f, T.value, g)),
          T !== null &&
            ((a = i(T, a, j)), N === null ? (C = T) : (N.sibling = T), (N = T));
      return U && gt(f, j), C;
    }
    for (_ = r(f, _); !T.done; j++, T = d.next())
      (T = w(_, f, j, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? j : T.key),
          (a = i(T, a, j)),
          N === null ? (C = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        _.forEach(function (un) {
          return t(f, un);
        }),
      U && gt(f, j),
      C
    );
  }
  function F(f, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Mt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case nr:
          e: {
            for (var C = d.key, N = a; N !== null; ) {
              if (N.key === C) {
                if (((C = d.type), C === Mt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ze &&
                    ku(C) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = mn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Mt
              ? ((a = Ct(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Pr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = mn(f, a, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Rt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Wl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (N = d._init), F(f, a, N(d._payload), g);
      }
      if (yn(d)) return x(f, a, d, g);
      if (an(d)) return k(f, a, d, g);
      pr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Bl(d, f.mode, g)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return F;
}
var bt = ua(!0),
  sa = ua(!1),
  qn = {},
  Ue = pt(qn),
  Hn = pt(qn),
  An = pt(qn);
function kt(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function po(e, t) {
  switch ((I(An, t), I(Hn, e), I(Ue, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  D(Ue), I(Ue, t);
}
function en() {
  D(Ue), D(Hn), D(An);
}
function aa(e) {
  kt(An.current);
  var t = kt(Ue.current),
    n = ti(t, e.type);
  t !== n && (I(Hn, e), I(Ue, n));
}
function mo(e) {
  Hn.current === e && (D(Ue), D(Hn));
}
var $ = pt(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Fl = [];
function ho() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Er = Ye.ReactCurrentDispatcher,
  Ul = Ye.ReactCurrentBatchConfig,
  _t = 0,
  V = null,
  K = null,
  Z = null,
  Kr = !1,
  _n = !1,
  Bn = 0,
  td = 0;
function te() {
  throw Error(y(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function go(e, t, n, r, l, i) {
  if (
    ((_t = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? id : od),
    (e = n(r, l)),
    _n)
  ) {
    i = 0;
    do {
      if (((_n = !1), (Bn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = K = null),
        (t.updateQueue = null),
        (Er.current = ud),
        (e = n(r, l));
    } while (_n);
  }
  if (
    ((Er.current = Yr),
    (t = K !== null && K.next !== null),
    (_t = 0),
    (Z = K = V = null),
    (Kr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function yo() {
  var e = Bn !== 0;
  return (Bn = 0), e;
}
function Oe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ne() {
  if (K === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = Z === null ? V.memoizedState : Z.next;
  if (t !== null) (Z = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $l(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((_t & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (jt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ca() {}
function fa(e, t) {
  var n = V,
    r = Ne(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    wo(ma.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qn(9, pa.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    _t & 30 || da(n, t, l);
  }
  return l;
}
function da(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ha(t) && va(e);
}
function ma(e, t, n) {
  return n(function () {
    ha(t) && va(e);
  });
}
function ha(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function va(e) {
  var t = Ge(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Su(e) {
  var t = Oe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ld.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Qn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ga() {
  return Ne().memoizedState;
}
function Nr(e, t, n, r) {
  var l = Oe();
  (V.flags |= e),
    (l.memoizedState = Qn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (((i = o.destroy), r !== null && vo(r, o.deps))) {
      l.memoizedState = Qn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Qn(1 | t, n, i, r));
}
function Cu(e, t) {
  return Nr(8390656, 8, e, t);
}
function wo(e, t) {
  return sl(2048, 8, e, t);
}
function ya(e, t) {
  return sl(4, 2, e, t);
}
function wa(e, t) {
  return sl(4, 4, e, t);
}
function xa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ka(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, xa.bind(null, t, e), n)
  );
}
function xo() {}
function Sa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ca(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ea(e, t, n) {
  return _t & 21
    ? (Me(n, t) || ((n = js()), (V.lanes |= n), (jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function nd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Ul.transition = r);
  }
}
function Na() {
  return Ne().memoizedState;
}
function rd(e, t, n) {
  var r = st(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _a(e))
  )
    ja(t, n);
  else if (((n = ra(e, t, n, r)), n !== null)) {
    var l = oe();
    Re(n, e, r, l), za(n, t, r);
  }
}
function ld(e, t, n) {
  var r = st(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_a(e)) ja(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), co(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ra(e, t, l, r)),
      n !== null && ((l = oe()), Re(n, e, r, l), za(n, t, r));
  }
}
function _a(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function ja(e, t) {
  _n = Kr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
var Yr = {
    readContext: Ee,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (Oe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nr(4194308, 4, xa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Oe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Oe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rd.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Oe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Su,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (Oe().memoizedState = e);
    },
    useTransition: function () {
      var e = Su(!1),
        t = e[0];
      return (e = nd.bind(null, e[1])), (Oe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Oe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        _t & 30 || da(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Cu(ma.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qn(9, pa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Oe(),
        t = J.identifierPrefix;
      if (U) {
        var n = Ae,
          r = He;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = td++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ee,
    useCallback: Sa,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: $l,
    useRef: ga,
    useState: function () {
      return $l(Wn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ea(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Wn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: fa,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: Ee,
    useCallback: Sa,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Wn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ne();
      return K === null ? (t.memoizedState = e) : Ea(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Wn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: fa,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ic(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function Pa(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zr || ((Zr = !0), (Ii = r)), Ei(e, t);
    }),
    n
  );
}
function La(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ei(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ei(e, t),
          typeof r != "function" &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sd.bind(null, e, t, n)), t.then(e, e));
}
function Nu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _u(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Be(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ad = Ye.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? sa(t, null, n, r) : bt(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Yt(t, l),
    (r = go(e, t, n, r, i, l)),
    (n = yo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (U && n && lo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !zo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ta(e, t, i, r, l))
      : ((e = Pr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fn), n(o, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = at(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ta(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fn(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return Ni(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Bt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Bt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Bt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Bt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function Ma(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ni(e, t, n, r, l) {
  var i = de(n) ? Et : le.current;
  return (
    (i = Jt(t, i)),
    Yt(t, l),
    (n = go(e, t, n, r, i, l)),
    (r = yo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (U && r && lo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (de(n)) {
    var i = !0;
    Vr(t);
  } else i = !1;
  if ((Yt(t, l), t.stateNode === null))
    _r(e, t), oa(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ee(c))
      : ((c = de(n) ? Et : le.current), (c = Jt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && xu(t, o, r, c)),
      (Je = !1);
    var p = t.memoizedState;
    (o.state = p),
      Qr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof h == "function" && (Si(t, n, h, r), (s = t.memoizedState)),
          (u = Je || wu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      la(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ee(s))
        : ((s = de(n) ? Et : le.current), (s = Jt(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && xu(t, o, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (o.state = p),
      Qr(t, r, o, l);
    var x = t.memoizedState;
    u !== m || p !== x || fe.current || Je
      ? (typeof w == "function" && (Si(t, n, w, r), (x = t.memoizedState)),
        (c = Je || wu(t, n, c, r, p, x, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _i(e, t, n, r, i, l);
}
function _i(e, t, n, r, l, i) {
  Ma(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && mu(t, n, !1), Ke(e, t, i);
  (r = t.stateNode), (ad.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = bt(t, e.child, null, i)), (t.child = bt(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ia(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    po(e, t.containerInfo);
}
function Lu(e, t, n, r, l) {
  return qt(), oo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = fl(o, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zi(n)),
              (t.memoizedState = ji),
              e)
            : ko(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = Ct(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? zi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ko(e, t) {
  return (
    (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mr(e, t, n, r) {
  return (
    r !== null && oo(r),
    bt(t, e.child, null, n),
    (e = ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(y(422)))), mr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ct(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && bt(t, e.child, null, o),
        (t.child.memoizedState = zi(o)),
        (t.memoizedState = ji),
        i);
  if (!(t.mode & 1)) return mr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Hl(i, r, void 0)), mr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ge(e, l), Re(r, e, l, -1));
    }
    return jo(), (r = Hl(Error(y(421)))), mr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (he = it(l.nextSibling)),
      (ve = t),
      (U = !0),
      (Le = null),
      e !== null &&
        ((xe[ke++] = He),
        (xe[ke++] = Ae),
        (xe[ke++] = Nt),
        (He = e.id),
        (Ae = e.overflow),
        (Nt = t)),
      (t = ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Al(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
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
    r &= 1;
  }
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Al(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Al(t, !0, n, null, i);
        break;
      case "together":
        Al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ia(t), qt();
      break;
    case 5:
      aa(t);
      break;
    case 1:
      de(t.type) && Vr(t);
      break;
    case 4:
      po(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Br, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Oa(e, t, n)
          : (I($, $.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Ke(e, t, n);
}
var Fa, Pi, Ua, $a;
Fa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pi = function () {};
Ua = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    ni(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ln.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ln.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && O("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$a = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dd(e, t, n) {
  var r = t.pendingProps;
  switch ((io(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && $r(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        en(),
        D(fe),
        D(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Fi(Le), (Le = null)))),
        Pi(e, t),
        ne(t),
        null
      );
    case 5:
      mo(t);
      var l = kt(An.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ua(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = kt(Ue.current)), dr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[De] = t), (r[Vn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++) O(xn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Vo(r, i), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                O("invalid", r);
              break;
            case "textarea":
              Ao(r, i), O("invalid", r);
          }
          ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ln.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Ho(r, i, !0);
              break;
            case "textarea":
              rr(r), Bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ds(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[De] = t),
            (e[Vn] = r),
            Fa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ri(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++) O(xn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                Vo(e, r), (l = Jl(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  O("invalid", e);
                break;
              case "textarea":
                Ao(e, r), (l = ei(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            ni(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? hs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Tn(e, s)
                    : typeof s == "number" && Tn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ln.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && O("scroll", e)
                      : s != null && Wi(e, i, s, o));
              }
            switch (n) {
              case "input":
                rr(e), Ho(e, r, !1);
                break;
              case "textarea":
                rr(e), Bo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) $a(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = kt(An.current)), kt(Ue.current), dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[De] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[De] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (D($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && t.mode & 1 && !(t.flags & 128))
          na(), qt(), (t.flags |= 98560), (i = !1);
        else if (((i = dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[De] = t;
          } else
            qt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Le !== null && (Fi(Le), (Le = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? Y === 0 && (Y = 3) : jo())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        en(), Pi(e, t), e === null && Un(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return ao(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && $r(), ne(t), null;
    case 19:
      if ((D($), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) hn(i, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Gr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    hn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > nn &&
            ((t.flags |= 128), (r = !0), hn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > nn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        _o(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function pd(e, t) {
  switch ((io(t), t.tag)) {
    case 1:
      return (
        de(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        en(),
        D(fe),
        D(le),
        ho(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mo(t), null;
    case 13:
      if ((D($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        qt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D($), null;
    case 4:
      return en(), null;
    case 10:
      return ao(t.type._context), null;
    case 22:
    case 23:
      return _o(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1,
  re = !1,
  md = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function At(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function Li(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Ru = !1;
function hd(e, t) {
  if (((pi = Or), (e = Bs()), ro(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mi = { focusedElem: e, selectionRange: n }, Or = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    F = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          A(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Ru), (Ru = !1), x;
}
function jn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Li(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ti(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Va(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Va(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[De], delete t[Vn], delete t[gi], delete t[Jf], delete t[qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
var q = null,
  Pe = !1;
function Xe(e, t, n) {
  for (n = n.child; n !== null; ) Aa(e, t, n), (n = n.sibling);
}
function Aa(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(tl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || At(n, t);
    case 6:
      var r = q,
        l = Pe;
      (q = null),
        Xe(e, t, n),
        (q = r),
        (Pe = l),
        q !== null &&
          (Pe
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Pe
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ol(e.parentNode, n)
              : e.nodeType === 1 && Ol(e, n),
            On(e))
          : Ol(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Pe),
        (q = n.stateNode.containerInfo),
        (Pe = !0),
        Xe(e, t, n),
        (q = r),
        (Pe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Li(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (At(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      Xe(e, t, n);
      break;
    case 21:
      Xe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Xe(e, t, n), (re = r))
        : Xe(e, t, n);
      break;
    default:
      Xe(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new md()),
      t.forEach(function (r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Pe = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Aa(i, o, l), (q = null), (Pe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ba(t, e), (t = t.sibling);
}
function Ba(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Ie(e), r & 4)) {
        try {
          jn(3, e, e.return), al(3, e);
        } catch (k) {
          A(e, e.return, k);
        }
        try {
          jn(5, e, e.return);
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 1:
      je(t, e), Ie(e), r & 512 && n !== null && At(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        Ie(e),
        r & 512 && n !== null && At(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Tn(l, "");
        } catch (k) {
          A(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && cs(l, i),
              ri(u, o);
            var c = ri(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? hs(l, m)
                : h === "dangerouslySetInnerHTML"
                ? ps(l, m)
                : h === "children"
                ? Tn(l, m)
                : Wi(l, h, m, c);
            }
            switch (u) {
              case "input":
                ql(l, i);
                break;
              case "textarea":
                fs(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Wt(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wt(l, !!i.multiple, i.defaultValue, !0)
                      : Wt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Vn] = i;
          } catch (k) {
            A(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((je(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          On(t.containerInfo);
        } catch (k) {
          A(e, e.return, k);
        }
      break;
    case 4:
      je(t, e), Ie(e);
      break;
    case 13:
      je(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = Q())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), je(t, e), (re = c)) : je(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (((p = S), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jn(4, p, p.return);
                  break;
                case 1:
                  At(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      A(r, n, k);
                    }
                  }
                  break;
                case 5:
                  At(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Du(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (S = w)) : Du(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ms("display", o)));
              } catch (k) {
                A(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (k) {
                A(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Ie(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ha(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tn(l, ""), (r.flags &= -33));
          var i = Mu(e);
          Mi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Ri(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vd(e, t, n) {
  (S = e), Wa(e);
}
function Wa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || hr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = hr;
        var c = re;
        if (((hr = o), (re = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Fu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Fu(l);
        for (; i !== null; ) (S = i), Wa(i), (i = i.sibling);
        (S = l), (hr = u), (re = c);
      }
      Ou(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Ou(e);
  }
}
function Ou(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && yu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && On(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Ti(t));
      } catch (p) {
        A(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Du(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ti(t);
          } catch (s) {
            A(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ti(t);
          } catch (s) {
            A(t, o, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var gd = Math.ceil,
  Xr = Ye.ReactCurrentDispatcher,
  So = Ye.ReactCurrentOwner,
  Ce = Ye.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  G = null,
  b = 0,
  me = 0,
  Bt = pt(0),
  Y = 0,
  Gn = null,
  jt = 0,
  cl = 0,
  Co = 0,
  zn = null,
  ae = null,
  Eo = 0,
  nn = 1 / 0,
  $e = null,
  Zr = !1,
  Ii = null,
  ut = null,
  vr = !1,
  tt = null,
  Jr = 0,
  Pn = 0,
  Oi = null,
  jr = -1,
  zr = 0;
function oe() {
  return R & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function st(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : ed.transition !== null
      ? (zr === 0 && (zr = js()), zr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < Pn) throw ((Pn = 0), (Oi = null), Error(y(185)));
  Xn(e, n, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (cl |= n), Y === 4 && be(e, b)),
      pe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((nn = Q() + 500), ol && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  bc(e, t);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Go(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Go(n), t === 1))
      e.tag === 0 ? bf(Uu.bind(null, e)) : bs(Uu.bind(null, e)),
        Xf(function () {
          !(R & 6) && mt();
        }),
        (n = null);
    else {
      switch (zs(r)) {
        case 1:
          n = Xi;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = Mr;
          break;
        case 536870912:
          n = _s;
          break;
        default:
          n = Mr;
      }
      n = qa(n, Qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qa(e, t) {
  if (((jr = -1), (zr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Xt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Ka();
    (J !== e || b !== t) && (($e = null), (nn = Q() + 500), St(e, t));
    do
      try {
        xd();
        break;
      } catch (u) {
        Ga(e, u);
      }
    while (!0);
    so(),
      (Xr.current = i),
      (R = l),
      G !== null ? (t = 0) : ((J = null), (b = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1)
    )
      throw ((n = Gn), St(e, 0), be(e, r), pe(e, Q()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((t = qr(e, r)),
          t === 2 && ((i = si(e)), i !== 0 && ((r = i), (t = Di(e, i)))),
          t === 1))
      )
        throw ((n = Gn), St(e, 0), be(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          yt(e, ae, $e);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = Eo + 500 - Q()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(yt.bind(null, e, ae, $e), t);
            break;
          }
          yt(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * gd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(yt.bind(null, e, ae, $e), r);
            break;
          }
          yt(e, ae, $e);
          break;
        case 5:
          yt(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Qa.bind(null, e) : null;
}
function Di(e, t) {
  var n = zn;
  return (
    e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
    (e = qr(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function yd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
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
function be(e, t) {
  for (
    t &= ~Co,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (R & 6) throw Error(y(327));
  Xt();
  var t = Ir(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = qr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && ((t = r), (n = Di(e, r)));
  }
  if (n === 1) throw ((n = Gn), St(e, 0), be(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yt(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function No(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((nn = Q() + 500), ol && mt());
  }
}
function zt(e) {
  tt !== null && tt.tag === 0 && !(R & 6) && Xt();
  var t = R;
  R |= 1;
  var n = Ce.transition,
    r = M;
  try {
    if (((Ce.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ce.transition = n), (R = t), !(R & 6) && mt();
  }
}
function _o() {
  (me = Bt.current), D(Bt);
}
function St(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Yf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          en(), D(fe), D(le), ho();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          en();
          break;
        case 13:
          D($);
          break;
        case 19:
          D($);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          _o();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (G = e = at(e.current, null)),
    (b = me = t),
    (Y = 0),
    (Gn = null),
    (Co = cl = jt = 0),
    (ae = zn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = G;
    try {
      if ((so(), (Er.current = Yr), Kr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Kr = !1;
      }
      if (
        ((_t = 0),
        (Z = K = V = null),
        (_n = !1),
        (Bn = 0),
        (So.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Gn = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Nu(o);
          if (w !== null) {
            (w.flags &= -257),
              _u(w, o, u, i, t),
              w.mode & 1 && Eu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(i, c, t), jo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var F = Nu(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              _u(F, o, u, i, t),
              oo(tn(s, u));
            break e;
          }
        }
        (i = s = tn(s, u)),
          Y !== 4 && (Y = 2),
          zn === null ? (zn = [i]) : zn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Pa(i, s, t);
              gu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ut === null || !ut.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = La(i, u, t);
                gu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xa(n);
    } catch (C) {
      (t = C), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Xr.current;
  return (Xr.current = Yr), e === null ? Yr : e;
}
function jo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || (!(jt & 268435455) && !(cl & 268435455)) || be(J, b);
}
function qr(e, t) {
  var n = R;
  R |= 2;
  var r = Ka();
  (J !== e || b !== t) && (($e = null), St(e, t));
  do
    try {
      wd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (!0);
  if ((so(), (R = n), (Xr.current = r), G !== null)) throw Error(y(261));
  return (J = null), (b = 0), Y;
}
function wd() {
  for (; G !== null; ) Ya(G);
}
function xd() {
  for (; G !== null && !Wc(); ) Ya(G);
}
function Ya(e) {
  var t = Ja(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xa(e) : (G = t),
    (So.current = null);
}
function Xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pd(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (G = null);
        return;
      }
    } else if (((n = dd(n, t, me)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function yt(e, t, n) {
  var r = M,
    l = Ce.transition;
  try {
    (Ce.transition = null), (M = 1), kd(e, t, n, r);
  } finally {
    (Ce.transition = l), (M = r);
  }
  return null;
}
function kd(e, t, n, r) {
  do Xt();
  while (tt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ef(e, i),
    e === J && ((G = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      qa(Mr, function () {
        return Xt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = M;
    M = 1;
    var u = R;
    (R |= 4),
      (So.current = null),
      hd(e, n),
      Ba(n, e),
      Hf(mi),
      (Or = !!pi),
      (mi = pi = null),
      (e.current = n),
      vd(n),
      Qc(),
      (R = u),
      (M = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (tt = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (ut = null),
    Yc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Ii), (Ii = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Xt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Oi ? Pn++ : ((Pn = 0), (Oi = e))) : (Pn = 0),
    mt(),
    null
  );
}
function Xt() {
  if (tt !== null) {
    var e = zs(Jr),
      t = Ce.transition,
      n = M;
    try {
      if (((Ce.transition = null), (M = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (Jr = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (S = m);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var p = h.sibling,
                        w = h.return;
                      if ((Va(h), h === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (S = p);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, u);
                  }
                } catch (C) {
                  A(u, u.return, C);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (S = g);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((R = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ce.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = tn(n, t)),
    (t = Pa(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Xn(e, 1, t), pe(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ut === null || !ut.has(r)))
        ) {
          (e = tn(n, e)),
            (e = La(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Xn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (Y === 4 || (Y === 3 && (b & 130023424) === b && 500 > Q() - Eo)
        ? St(e, 0)
        : (Co |= n)),
    pe(e, t);
}
function Za(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ge(e, t)), e !== null && (Xn(e, t, n), pe(e, n));
}
function Cd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Za(e, n);
}
function Ed(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Za(e, n);
}
var Ja;
Ja = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), fd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && ea(t, Ar, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _r(e, t), (e = t.pendingProps);
      var l = Jt(t, le.current);
      Yt(t, n), (l = go(null, t, r, e, l, n));
      var i = yo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((i = !0), Vr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fo(t),
            (l.updater = ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = _i(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && lo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _d(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ia(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          la(e, t),
          Qr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = tn(Error(y(423)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tn(Error(y(424)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else
            for (
              he = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                U = !0,
                Le = null,
                n = sa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qt(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        aa(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hi(r, l) ? (o = null) : i !== null && hi(r, i) && (t.flags |= 32),
        Ma(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Oa(e, t, n);
    case 4:
      return (
        po(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bt(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(Br, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Be(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      ki(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  ki(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yt(t, n),
        (l = Ee(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        zu(e, t, r, l, n)
      );
    case 15:
      return Ta(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        _r(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Vr(t)) : (e = !1),
        Yt(t, n),
        oa(t, r, l),
        Ci(t, r, l, n),
        _i(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function qa(e, t) {
  return Es(e, t);
}
function Nd(e, t, n, r) {
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
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Nd(e, t, n, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
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
    (n.flags = e.flags & 14680064),
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
    n
  );
}
function Pr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) zo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mt:
        return Ct(n.children, l, i, t);
      case Qi:
        (o = 8), (l |= 8);
        break;
      case Kl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Yl:
        return (e = Se(13, n, t, l)), (e.elementType = Yl), (e.lanes = i), e;
      case Xl:
        return (e = Se(19, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case us:
        return fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case is:
              o = 10;
              break e;
            case os:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Ki:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ct(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = us),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Po(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new jd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fo(i),
    e
  );
}
function zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ba(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return qs(e, n, t);
  }
  return t;
}
function ec(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Po(n, r, !0, e, l, i, o, u, s)),
    (e.context = ba(null)),
    (n = e.current),
    (r = oe()),
    (l = st(n)),
    (i = Be(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Xn(e, l, r),
    pe(e, r),
    e
  );
}
function dl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = st(l);
  return (
    (n = ba(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Be(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, o)),
    e !== null && (Re(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lo(e, t) {
  Vu(e, t), (e = e.alternate) && Vu(e, t);
}
function Pd() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function To(e) {
  this._internalRoot = e;
}
pl.prototype.render = To.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  dl(e, t, null, null);
};
pl.prototype.unmount = To.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      dl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && Ms(e);
  }
};
function Ro(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hu() {}
function Ld(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = br(o);
        i.call(c);
      };
    }
    var o = ec(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      Un(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = br(s);
      u.call(c);
    };
  }
  var s = Po(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      dl(t, s, n, r);
    }),
    s
  );
}
function hl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = br(o);
        u.call(s);
      };
    }
    dl(t, o, e, l);
  } else o = Ld(n, t, e, l, r);
  return br(o);
}
Ps = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (Zi(t, n | 1), pe(t, Q()), !(R & 6) && ((nn = Q() + 500), mt()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        Lo(e, 1);
  }
};
Ji = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = oe();
      Re(t, e, 134217728, n);
    }
    Lo(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = st(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = oe();
      Re(n, e, t, r);
    }
    Lo(e, t);
  }
};
Ts = function () {
  return M;
};
Rs = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            as(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
  }
};
ys = No;
ws = zt;
var Td = { usingClientEntryPoint: !1, Events: [Jn, Ft, il, vs, gs, No] },
  vn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Rd = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ss(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || Pd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (tl = gr.inject(Rd)), (Fe = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ro(t)) throw Error(y(200));
  return zd(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Ro(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Po(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    new To(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ss(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return zt(e);
};
ye.hydrate = function (e, t, n) {
  if (!ml(t)) throw Error(y(200));
  return hl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Ro(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ec(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Qe] = t.current),
    Un(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new pl(t);
};
ye.render = function (e, t, n) {
  if (!ml(t)) throw Error(y(200));
  return hl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zt(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = No;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ml(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return hl(e, t, n, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), (es.exports = ye);
var Md = es.exports,
  Au = Md;
(Ql.createRoot = Au.createRoot), (Ql.hydrateRoot = Au.hydrateRoot);
const rc =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M3%208C3%206.34315%204.34315%205%206%205H18C19.6569%205%2021%206.34315%2021%208V16C21%2017.6569%2019.6569%2019%2018%2019H6C4.34315%2019%203%2017.6569%203%2016V8Z'%20stroke='%23ffffff'%20stroke-width='2'%3e%3c/path%3e%3cpath%20d='M7%209L12%2013L17%209'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
  lc =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M10.0376%205.31617L10.6866%206.4791C11.2723%207.52858%2011.0372%208.90532%2010.1147%209.8278C10.1147%209.8278%2010.1147%209.8278%2010.1147%209.8278C10.1146%209.82792%208.99588%2010.9468%2011.0245%2012.9755C13.0525%2015.0035%2014.1714%2013.8861%2014.1722%2013.8853C14.1722%2013.8853%2014.1722%2013.8853%2014.1722%2013.8853C15.0947%2012.9628%2016.4714%2012.7277%2017.5209%2013.3134L18.6838%2013.9624C20.2686%2014.8468%2020.4557%2017.0692%2019.0628%2018.4622C18.2258%2019.2992%2017.2004%2019.9505%2016.0669%2019.9934C14.1588%2020.0658%2010.9183%2019.5829%207.6677%2016.3323C4.41713%2013.0817%203.93421%209.84122%204.00655%207.93309C4.04952%206.7996%204.7008%205.77423%205.53781%204.93723C6.93076%203.54428%209.15317%203.73144%2010.0376%205.31617Z'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
  Id = () =>
    v.jsx("div", {
      className: "bg-[#0d151c] w-full md:mx-auto h-fit py-20",
      id: "contact",
      children: v.jsxs("div", {
        className:
          "max-w-6xl md:mx-auto mx-6 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  py-12 gap-6 text-slate-200",
        children: [
          v.jsxs("div", {
            className: " col-span-1 row-span-1 flex flex-col space-y-6",
            children: [
              v.jsx("h1", {
                className: "text-4xl capitalize font-semibold ",
                children: "Got a Project ?",
              }),
              v.jsx("span", {
                className:
                  "text-5xl capitalize font-mono font-bold  text-[#e4ff45]",
                children: "Lets Talk",
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              " col-span-1 row-span-1 inline-flex flex-col gap-y-2 self-end pb-6",
            children: [
              v.jsxs("span", {
                className:
                  "flex flex-row flex-nowrap gap-2 items-center justify-start",
                children: [
                  v.jsx("img", { src: rc, height: 24, width: 24 }),
                  " ",
                  v.jsx("a", {
                    href: "mailto:nsnikunj353@gmail.com",
                    children: "nsnikunj353@gmail.com",
                  }),
                ],
              }),
              v.jsxs("span", {
                className:
                  "flex flex-row flex-nowrap gap-2 items-center justify-start",
                children: [
                  v.jsx("img", { src: lc, height: 24, width: 24 }),
                  v.jsx("a", {
                    href: "tel:+917204468849",
                    children: "+91 720-446-8849",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Od =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eplus-circle%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set'%20sketch:type='MSLayerGroup'%20transform='translate(-464.000000,%20-1087.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M480,1117%20C472.268,1117%20466,1110.73%20466,1103%20C466,1095.27%20472.268,1089%20480,1089%20C487.732,1089%20494,1095.27%20494,1103%20C494,1110.73%20487.732,1117%20480,1117%20L480,1117%20Z%20M480,1087%20C471.163,1087%20464,1094.16%20464,1103%20C464,1111.84%20471.163,1119%20480,1119%20C488.837,1119%20496,1111.84%20496,1103%20C496,1094.16%20488.837,1087%20480,1087%20L480,1087%20Z%20M486,1102%20L481,1102%20L481,1097%20C481,1096.45%20480.553,1096%20480,1096%20C479.447,1096%20479,1096.45%20479,1097%20L479,1102%20L474,1102%20C473.447,1102%20473,1102.45%20473,1103%20C473,1103.55%20473.447,1104%20474,1104%20L479,1104%20L479,1109%20C479,1109.55%20479.447,1110%20480,1110%20C480.553,1110%20481,1109.55%20481,1109%20L481,1104%20L486,1104%20C486.553,1104%20487,1103.55%20487,1103%20C487,1102.45%20486.553,1102%20486,1102%20L486,1102%20Z'%20id='plus-circle'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  Dd =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eminus-circle%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set'%20sketch:type='MSLayerGroup'%20transform='translate(-516.000000,%20-1087.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M532,1117%20C524.268,1117%20518,1110.73%20518,1103%20C518,1095.27%20524.268,1089%20532,1089%20C539.732,1089%20546,1095.27%20546,1103%20C546,1110.73%20539.732,1117%20532,1117%20L532,1117%20Z%20M532,1087%20C523.163,1087%20516,1094.16%20516,1103%20C516,1111.84%20523.163,1119%20532,1119%20C540.837,1119%20548,1111.84%20548,1103%20C548,1094.16%20540.837,1087%20532,1087%20L532,1087%20Z%20M538,1102%20L526,1102%20C525.447,1102%20525,1102.45%20525,1103%20C525,1103.55%20525.447,1104%20526,1104%20L538,1104%20C538.553,1104%20539,1103.55%20539,1103%20C539,1102.45%20538.553,1102%20538,1102%20L538,1102%20Z'%20id='minus-circle'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  Fd = ({ title: e, content: t, isOpen: n, onClick: r }) =>
    v.jsxs("div", {
      className: " border-b border-gray-200 border-opacity-10 last:border-none",
      id: "faqs",
      children: [
        v.jsxs("div", {
          className:
            "flex justify-between items-center cursor-pointer p-2 md:p-4",
          onClick: r,
          children: [
            v.jsx("h2", {
              className: "text-md md:text-xl font-semibold",
              children: e,
            }),
            v.jsx("img", {
              src: n ? Dd : Od,
              height: 32,
              width: 32,
              className: "ml-3",
            }),
          ],
        }),
        v.jsx("div", {
          className: `grid ease-in-out transition-[grid-template-rows] duration-500 ${
            n ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`,
          children: v.jsx("p", {
            className: `overflow-hidden px-2 md:px-6  ${n ? "mb-2" : ""}`,
            children: t,
          }),
        }),
      ],
    }),
  Ud = () => {
    const [e, t] = Yn.useState(null),
      n = (l) => {
        t((i) => (i === l ? null : l));
      },
      r = [
        {
          title: "What technologies do you specialize in?",
          content:
            "I specialize in front-end technologies such as HTML, CSS, and JavaScript. On the back end, I am proficient in Node.js, Express.js, MySQL, MongoDB.",
        },
        {
          title: "Can you create responsive and mobile-friendly websites?",
          content:
            "Yes, I prioritize creating websites that are responsive and work seamlessly across various devices and screen sizes. I use modern CSS techniques and media queries to ensure a great user experience on both desktop and mobile devices.",
        },
        {
          title:
            "How do you stay updated on the latest web development trends?",
          content:
            "Staying updated in the ever-evolving field of web development is crucial. I regularly follow industry blogs, participate in online communities, and attend web development conferences. This helps me stay informed about the latest trends, tools, and best practices.",
        },
        {
          title: "Can you provide examples of your previous work?",
          content:
            "Certainly! You can find examples of my previous projects in the portfolio section of this website. Each project includes a description, technologies used, and a link to the live demo or source code on GitHub.",
        },
        {
          title: "Do you have experience with version control systems?",
          content:
            "Yes, version control is an integral part of my workflow. I am experienced with Git and GitHub, which allows me to track changes, collaborate with team members, and easily manage different versions of the code.",
        },
        {
          title: "How do you approach problem-solving in your projects?",
          content:
            "When faced with a coding challenge, I break it down into smaller, manageable tasks. I conduct thorough research, leverage documentation, and collaborate with peers if needed. I believe in writing clean and maintainable code to ensure the longevity and scalability of the projects.",
        },
        {
          title: "Are you available for freelance or contract work?",
          content:
            "Yes, I am open to freelance or contract opportunities. Feel free to reach out through the contact section of this website to discuss your project, requirements, and timeline.",
        },
      ];
    return v.jsx("div", {
      className: "bg-black w-full md:mx-auto h-fit py-20",
      children: v.jsxs("div", {
        className:
          "max-w-6xl md:mx-auto mx-6 flex flex-col items-center py-12 gap-6 text-slate-200",
        children: [
          v.jsx("span", {
            className: "rounded-full px-3 py-1 border text-sm",
            children: " FAQs",
          }),
          v.jsxs("h1", {
            className:
              " text-center font-extrabold text-4xl md:text-6xl capitalize",
            children: [
              " frequently Asked ",
              v.jsx("span", {
                className:
                  "block font-extrabold text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-b from-slate-900 from-10% to-slate-100",
                children: "questions",
              }),
            ],
          }),
          v.jsx("div", {
            className:
              " w-full mx-auto mt-8 border rounded-3xl overflow-hidden md:p-12 p-6",
            children: r.map((l, i) =>
              v.jsx(
                Fd,
                {
                  title: l.title,
                  content: l.content,
                  isOpen: e === i,
                  onClick: () => n(i),
                },
                i
              )
            ),
          }),
        ],
      }),
    });
  },
  $d = ({
    color: e = "blue",
    rounded: t = !1,
    size: n = "medium",
    children: r,
  }) => {
    const l = `text-black px-4 py-2 focus:outline-none ${
        t ? "rounded-full" : ""
      }`,
      i = {
        small: { fontSize: "14px", padding: "8px 16px" },
        medium: { fontSize: "18px", padding: "12px 24px" },
        large: { fontSize: "20px", padding: "20px 50px" },
      };
    return v.jsx("button", {
      className: l,
      style: { background: e, ...i[n] },
      children: r,
    });
  },
  Vd = () => {
    const [e, t] = Yn.useState(!1),
      n = (r) => {
        const l = document.getElementById(r);
        t(!1),
          l && window.scrollTo({ behavior: "smooth", top: l.offsetTop - 70 });
      };
    return v.jsxs("div", {
      className: "mx-auto pt-6 md:pt-12 pb-24",
      id: "home",
      children: [
        v.jsxs("div", {
          className: "flex items-center ml-3 md:ml-5",
          children: [
            v.jsxs("div", {
              className: `flex gap-1 flex-nowrap flex-row items-center z-50 ${
                e ? "fixed md:static top-3 left-3" : ""
              }`,
              children: [
                v.jsxs("div", {
                  className:
                    "bg-[#1c1c1c] max-w-[60px] rounded-full pt-[24px] pl-[21px] h-[60px] w-[60px] transition-all cursor-pointer",
                  onClick: () => t(!e),
                  children: [
                    v.jsx("div", {
                      className: `bg-[#908f8f] h-[2px] transition-all ${
                        e
                          ? "w-[20px] rotate-45 translate-y-[-1px] mt-[7px] "
                          : " w-[20px]"
                      } `,
                    }),
                    v.jsx("div", {
                      className: `bg-[#908f8f] h-[2px] transition-all ${
                        e
                          ? "w-[20px] -rotate-45 mt-[-4px] translate-y-[1px]"
                          : " w-[10px] mt-[7px]"
                      } `,
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "ml-[15px] items-center",
                  children: v.jsxs("div", {
                    className:
                      "text-[#ffffff] font-bold text-[17px] leading-none",
                    children: [
                      "Nikunj",
                      v.jsx("br", {}),
                      "Sardhara",
                      v.jsx("span", {
                        className: "text-[#ddf457]",
                        children: ".",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            v.jsxs("div", {
              className: `md:absolute fixed left-0 w-full flex flex-col pt-16 md:w-64 h-full bg-black md:bg-transparent md:h-1/2 md:top-14 top-0 z-40 transition-all ${
                e ? "md:translate-x-16" : "-translate-x-full"
              }`,
              children: [
                v.jsx("div", {
                  className: `w-full md:w-[350px] h-fit text-gray-400 hover:text-gray-300 font-bold text-[17px] text-center md:text-left capitalize py-2 md:py-1 my-2 cursor-pointer transition-all duration-100 ${
                    e ? "" : "-translate-x-full"
                  }`,
                  onClick: () => n("home"),
                  children: "Home",
                }),
                v.jsx("div", {
                  className: `w-full md:w-[350px] h-fit text-gray-400 hover:text-gray-300 font-bold text-[17px] text-center md:text-left capitalize py-2 md:py-1 my-2 cursor-pointer transition-all duration-200 ${
                    e ? "" : "-translate-x-full"
                  }`,
                  onClick: () => n("projects"),
                  children: "projects",
                }),
                v.jsx("div", {
                  className: `w-full md:w-[350px] h-fit text-gray-400 hover:text-gray-300 font-bold text-[17px] text-center md:text-left capitalize py-2 md:py-1 my-2 cursor-pointer transition-all duration-300 ${
                    e ? "" : "-translate-x-full"
                  }`,
                  onClick: () => n("testimonial"),
                  children: "Testimonial",
                }),
                v.jsx("div", {
                  className: `w-full md:w-[350px] h-fit text-gray-400 hover:text-gray-300 font-bold text-[17px] text-center md:text-left capitalize py-2 md:py-1 my-2 cursor-pointer transition-all duration-500 ${
                    e ? "" : "-translate-x-full"
                  }`,
                  onClick: () => n("contact"),
                  children: "contact",
                }),
                v.jsx("div", {
                  className: `w-full md:w-[350px] h-fit text-gray-400 hover:text-gray-300 font-bold text-[17px] text-center md:text-left capitalize py-2 md:py-1 my-2 cursor-pointer transition-all duration-[600ms] ${
                    e ? "" : "-translate-x-full"
                  }`,
                  onClick: () => n("faqs"),
                  children: "FAQs",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "flex flex-col items-center justify-center pb-12",
          children: [
            v.jsx("div", {
              className:
                "w-64 md:w-96 border-t-4 border-l-4 border-r-4 rounded-t-full overflow-hidden shadow-lg",
              children: v.jsx("img", {
                src: "/assets/nikunj.png",
                alt: "Nikunj",
                className: "w-full h-full object-cover",
              }),
            }),
            v.jsx("div", {
              className:
                "text-center text-4xl md:text-5xl text-white font-bold mt-6 md:mt-8",
              children: "Hey, It's Nikunj Sardhara.",
            }),
            v.jsx("div", {
              className:
                "text-center text-4xl md:text-5xl text-white font-bold mt-2 md:mt-3",
              children: "Full Stack Developer",
            }),
            v.jsxs("div", {
              className:
                "text-center text-lg md:text-xl text-white mt-2 md:mt-3",
              children: [
                "I've been working as a full stack ",
                v.jsx("b", { children: "web developer" }),
                " for 8 years.",
                v.jsx("br", {}),
                "I am based in ",
                v.jsx("b", { children: "India" }),
                ".",
              ],
            }),
            v.jsx("div", {
              className: "mt-5",
              children: v.jsx("a", {
                target: "_blank",
                href: "https://www.upwork.com/freelancers/~01713afba27b85bf19",
                children: v.jsx($d, {
                  size: "large",
                  color: "#e4ff45",
                  children: "Hire me",
                }),
              }),
            }),
            v.jsxs("div", {
              className:
                " col-span-1 row-span-1 inline-flex flex-col gap-y-2 self-end pb-6",
              children: [
                v.jsxs("span", {
                  className:
                    "flex flex-row flex-nowrap gap-2 items-center justify-start",
                  children: [
                    v.jsx("img", { src: rc, height: 24, width: 24 }),
                    " ",
                    v.jsx("a", {
                      href: "mailto:nsnikunj353@gmail.com",
                      children: "nsnikunj353@gmail.com",
                    }),
                  ],
                }),
                v.jsxs("span", {
                  className:
                    "flex flex-row flex-nowrap gap-2 items-center justify-start",
                  children: [
                    v.jsx("img", { src: lc, height: 24, width: 24 }),
                    v.jsx("a", {
                      href: "tel:+917204468849",
                      children: "+91 720-446-8849",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Hd = "/assets/layer-waves-tJwUFfSa.svg",
  Ad =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20strokeWidth='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M9.00002%2013C8.34002%2013.33%207.79002%2013.82%207.38002%2014.43C7.15002%2014.78%207.15002%2015.22%207.38002%2015.57C7.79002%2016.18%208.34002%2016.67%209.00002%2017'%20stroke='%23fff'%20strokeWidth='1.248'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3cpath%20d='M15.21%2013C15.87%2013.33%2016.42%2013.82%2016.83%2014.43C17.06%2014.78%2017.06%2015.22%2016.83%2015.57C16.42%2016.18%2015.87%2016.67%2015.21%2017'%20stroke='%23fff'%20strokeWidth='1.248'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3cpath%20d='M9%2022H15C20%2022%2022%2020%2022%2015V9C22%204%2020%202%2015%202H9C4%202%202%204%202%209V15C2%2020%204%2022%209%2022Z'%20stroke='%23fff'%20strokeWidth='1.248'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3cpath%20d='M2.22998%208.01L21.45%208'%20stroke='%23fff'%20strokeWidth='1.248'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
  Bd =
    "data:image/svg+xml,%3csvg%20width='52px'%20height='52px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20strokeWidth='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M6.89001%209C7.87001%209.49%208.71001%2010.23%209.32001%2011.15C9.67001%2011.67%209.67001%2012.34%209.32001%2012.86C8.71001%2013.77%207.87001%2014.51%206.89001%2015'%20stroke='%23fff'%20strokeWidth='1.5'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3cpath%20d='M13%2015H17'%20stroke='%23fff'%20strokeWidth='1.5'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3cpath%20d='M9%2022H15C20%2022%2022%2020%2022%2015V9C22%204%2020%202%2015%202H9C4%202%202%204%202%209V15C2%2020%204%2022%209%2022Z'%20stroke='%23fff'%20strokeWidth='1.5'%20strokeLinecap='round'%20strokeLinejoin='round'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
  Wd = () => {
    const e = `flex flex-col justify-between items-start mx-auto max-w-md w-2/3 md:w-full text-white backdrop-blur-xl border-green-300 border border-opacity-10 rounded-md bg-black bg-opacity-40 h-[400px] p-10 pt-12 duration-200 transition-all
  relative cursor-pointer`;
    return v.jsx("div", {
      id: "projects",
      className:
        "w-full mx-auto py-20 pb-[220px] bg-no-repeat bg-cover bg-fixed md:bg-scroll bg-top md:bg-center",
      style: { backgroundImage: `url(${Hd})` },
      children: v.jsxs("div", {
        className:
          "grid sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl mx-auto ",
        children: [
          v.jsxs("div", {
            className: e,
            children: [
              v.jsx("img", { src: Ad }),
              v.jsxs("div", {
                className: "h-1/2 grid",
                children: [
                  v.jsx("h1", {
                    className: " text-3xl font-semibold capitalize ",
                    children: "Front-end development",
                  }),
                  v.jsx("span", {
                    className: "text-md font-mono",
                    children: "145 Project",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className: e,
            children: [
              v.jsx("img", { src: Bd }),
              v.jsxs("div", {
                className: "h-1/2 grid",
                children: [
                  v.jsx("h1", {
                    className: " text-3xl font-semibold capitalize ",
                    children: "Back-End development",
                  }),
                  v.jsx("span", {
                    className: "text-md font-mono",
                    children: "78 Project",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Bu =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3crect%20width='512'%20height='512'%20rx='15%25'%20fill='%236fda44'/%3e%3cpath%20fill='%23000000'%20d='M357.2%20296.9c-17%200-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6%2013.1-47.2%2043.8-47.2%2023%200%2041.7%2018.7%2041.7%2041.7s-18.7%2041.6-41.7%2041.6zm0-125.5c-39.2%200-69.5%2025.4-81.9%2067.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0%2021.7-17.6%2039.3-39.3%2039.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0%2044.9%2036.5%2081.8%2081.4%2081.8s81.4-36.9%2081.4-81.8v-18.4c8.2%2017.1%2018.2%2034.4%2030.4%2049.6l-25.8%20121.4h43.1l18.7-88c16.4%2010.5%2035.2%2017.1%2056.8%2017.1%2046.2%200%2083.8-37.8%2083.8-84.1.1-46.1-37.4-83.7-83.6-83.7'/%3e%3c/svg%3e",
  Qd = ({ testimonials: e }) =>
    v.jsx("div", {
      className: "bg-black py-12",
      id: "testimonial",
      children: v.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          v.jsx("h1", {
            className:
              "text-center font-extrabold text-4xl md:text-6xl capitalize text-[#e4ff45]",
            children: "Testimonial",
          }),
          v.jsxs("div", {
            className: "mt-12 pt-12 grid grid-cols-1 md:grid-cols-2",
            children: [
              v.jsx("div", {
                children: e[0].map((t) =>
                  v.jsx(
                    "div",
                    {
                      className: "rounded-xl mb-8 md:mr-8",
                      children: v.jsxs("div", {
                        className: "p-6 rounded-lg shadow-lg bg-[#202020]",
                        children: [
                          v.jsx("div", {
                            className:
                              "text-gray-300 text-lg font-semibold mb-4",
                            children: t.content,
                          }),
                          v.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              v.jsx("div", {
                                className: "text-gray-100 text-lg",
                                children: t.name,
                              }),
                              v.jsx("a", {
                                className: "text-gray-100 text-lg",
                                target: "_blank",
                                href: "https://www.upwork.com/freelancers/~01713afba27b85bf19",
                                children: v.jsx("img", {
                                  className: "grayscale",
                                  src: Bu,
                                  height: 24,
                                  width: 24,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t.id
                  )
                ),
              }),
              v.jsx("div", {
                children: e[1].map((t) =>
                  v.jsx(
                    "div",
                    {
                      className: "rounded-xl mb-8 md:mr-8",
                      children: v.jsxs("div", {
                        className: "p-6 rounded-lg shadow-lg bg-[#202020]",
                        children: [
                          v.jsx("div", {
                            className:
                              "text-gray-300 text-lg font-semibold mb-4",
                            children: t.content,
                          }),
                          v.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              v.jsx("div", {
                                className: "text-gray-100 text-lg",
                                children: t.name,
                              }),
                              v.jsx("a", {
                                className: "text-gray-100 text-lg",
                                target: "_blank",
                                href: "https://www.upwork.com/freelancers/~01713afba27b85bf19",
                                children: v.jsx("img", {
                                  className: "grayscale",
                                  src: Bu,
                                  height: 24,
                                  width: 24,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  Gd = [
    [
      {
        id: 1,
        name: "Ezzadin Sharafy",
        content:
          "Nikunj is very knowledgeable in his field. I highly recommend him, and I will hire him for my future projects.",
      },
      {
        id: 2,
        name: "Salvo Mattina",
        content:
          "This was a very great experience. The work is perfect. Fast and very professional. I will hire him again.",
      },
      {
        id: 3,
        name: "Azim Maknojia",
        content:
          "Nikunj worked with us over a long period on a variety of tasks. Very happy with his performance and problem solving skills. Would hire again.",
      },
      { id: 4, name: "Kevin Zhou", content: "Great Job Nikunj!" },
    ],
    [
      {
        id: 5,
        name: "Anders Schmidt",
        content:
          "Nikunj is an expert in React. He was able to get started on the work immediately and finish it on time with perfection! Great Job again, Nikunj.",
      },
      {
        id: 6,
        name: "Ming gao",
        content:
          "Great communication, great work, one of the best devs I've worked with.",
      },
      {
        id: 7,
        name: "Khalil Maknojia",
        content: "Nikunj was a great developer for our organization.",
      },
      {
        id: 8,
        name: "Nitika Goel",
        content:
          "Nikunj is always happy to help, professional and fast just what we need! Working with him was crazy and fun!",
      },
    ],
  ];
function Kd() {
  return v.jsx(v.Fragment, {
    children: v.jsxs("div", {
      className: "w-full bg-black text-slate-200 ",
      children: [
        v.jsx(Vd, {}),
        v.jsx(Wd, {}),
        v.jsx(Qd, { testimonials: Gd }),
        v.jsx(Id, {}),
        v.jsx(Ud, {}),
      ],
    }),
  });
}
Ql.createRoot(document.getElementById("root")).render(
  v.jsx(Sc.StrictMode, { children: v.jsx(Kd, {}) })
);
