import {r as m} from "./chunks/index.77b27c10.js";
import {j as D} from "./chunks/jsx-runtime.c2e5f40e.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function De(e, i, t, n) {
    function a(r) {
        return r instanceof t ? r : new t(function(o) {
            o(r)
        }
        )
    }
    return new (t || (t = Promise))(function(r, o) {
        function c(f) {
            try {
                u(n.next(f))
            } catch (v) {
                o(v)
            }
        }
        function d(f) {
            try {
                u(n.throw(f))
            } catch (v) {
                o(v)
            }
        }
        function u(f) {
            f.done ? r(f.value) : a(f.value).then(c, d)
        }
        u((n = n.apply(e, i || [])).next())
    }
    )
}
function Ie(e, i) {
    var t = {
        label: 0,
        sent: function() {
            if (r[0] & 1)
                throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    }, n, a, r, o;
    return o = {
        next: c(0),
        throw: c(1),
        return: c(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function c(u) {
        return function(f) {
            return d([u, f])
        }
    }
    function d(u) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (n = 1,
                a && (r = u[0] & 2 ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a),
                0) : a.next) && !(r = r.call(a, u[1])).done)
                    return r;
                switch (a = 0,
                r && (u = [u[0] & 2, r.value]),
                u[0]) {
                case 0:
                case 1:
                    r = u;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    a = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (r = t.trys,
                    !(r = r.length > 0 && r[r.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (u[0] === 3 && (!r || u[1] > r[0] && u[1] < r[3])) {
                        t.label = u[1];
                        break
                    }
                    if (u[0] === 6 && t.label < r[1]) {
                        t.label = r[1],
                        r = u;
                        break
                    }
                    if (r && t.label < r[2]) {
                        t.label = r[2],
                        t.ops.push(u);
                        break
                    }
                    r[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                u = i.call(e, t)
            } catch (f) {
                u = [6, f],
                a = 0
            } finally {
                n = r = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
var I = function() {}
  , w = I()
  , re = Object
  , x = function(e) {
    return e === w
}
  , W = function(e) {
    return typeof e == "function"
}
  , M = function(e, i) {
    return re.assign({}, e, i)
}
  , be = "undefined"
  , xe = function() {
    return typeof window != be
}
  , qe = function() {
    return typeof document != be
}
  , He = function() {
    return xe() && typeof window.requestAnimationFrame != be
}
  , te = new WeakMap
  , ke = 0
  , X = function(e) {
    var i = typeof e, t = e && e.constructor, n = t == Date, a, r;
    if (re(e) === e && !n && t != RegExp) {
        if (a = te.get(e),
        a)
            return a;
        if (a = ++ke + "~",
        te.set(e, a),
        t == Array) {
            for (a = "@",
            r = 0; r < e.length; r++)
                a += X(e[r]) + ",";
            te.set(e, a)
        }
        if (t == re) {
            a = "#";
            for (var o = re.keys(e).sort(); !x(r = o.pop()); )
                x(e[r]) || (a += r + ":" + X(e[r]) + ",");
            te.set(e, a)
        }
    } else
        a = n ? e.toJSON() : i == "symbol" ? e.toString() : i == "string" ? JSON.stringify(e) : "" + e;
    return a
}
  , de = !0
  , Pe = function() {
    return de
}
  , Ae = xe()
  , we = qe()
  , he = Ae && window.addEventListener ? window.addEventListener.bind(window) : I
  , $e = we ? document.addEventListener.bind(document) : I
  , pe = Ae && window.removeEventListener ? window.removeEventListener.bind(window) : I
  , Je = we ? document.removeEventListener.bind(document) : I
  , Ke = function() {
    var e = we && document.visibilityState;
    return x(e) || e !== "hidden"
}
  , ze = function(e) {
    return $e("visibilitychange", e),
    he("focus", e),
    function() {
        Je("visibilitychange", e),
        pe("focus", e)
    }
}
  , Ge = function(e) {
    var i = function() {
        de = !0,
        e()
    }
      , t = function() {
        de = !1
    };
    return he("online", i),
    he("offline", t),
    function() {
        pe("online", i),
        pe("offline", t)
    }
}
  , Be = {
    isOnline: Pe,
    isVisible: Ke
}
  , Qe = {
    initFocus: ze,
    initReconnect: Ge
}
  , ae = !xe() || "Deno"in window
  , Xe = function(e) {
    return He() ? window.requestAnimationFrame(e) : setTimeout(e, 1)
}
  , ne = ae ? m.exports.useEffect : m.exports.useLayoutEffect
  , le = typeof navigator < "u" && navigator.connection
  , Te = !ae && le && (["slow-2g", "2g"].includes(le.effectiveType) || le.saveData)
  , Ve = function(e) {
    if (W(e))
        try {
            e = e()
        } catch {
            e = ""
        }
    var i = [].concat(e);
    e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? X(e) : "";
    var t = e ? "$swr$" + e : "";
    return [e, i, t]
}
  , H = new WeakMap
  , _e = 0
  , Ne = 1
  , Fe = 2
  , Q = function(e, i, t, n, a, r, o) {
    o === void 0 && (o = !0);
    var c = H.get(e)
      , d = c[0]
      , u = c[1]
      , f = c[3]
      , v = d[i]
      , l = u[i];
    if (o && l)
        for (var A = 0; A < l.length; ++A)
            l[A](t, n, a);
    return r && (delete f[i],
    v && v[0]) ? v[0](Fe).then(function() {
        return e.get(i)
    }) : e.get(i)
}
  , Ye = 0
  , me = function() {
    return ++Ye
}
  , We = function() {
    for (var e = [], i = 0; i < arguments.length; i++)
        e[i] = arguments[i];
    return De(void 0, void 0, void 0, function() {
        var t, n, a, r, o, c, d, u, f, v, l, A, Y, y, h, s, $, j, V, T, U;
        return Ie(this, function(N) {
            switch (N.label) {
            case 0:
                if (t = e[0],
                n = e[1],
                a = e[2],
                r = e[3],
                o = typeof r == "boolean" ? {
                    revalidate: r
                } : r || {},
                c = x(o.populateCache) ? !0 : o.populateCache,
                d = o.revalidate !== !1,
                u = o.rollbackOnError !== !1,
                f = o.optimisticData,
                v = Ve(n),
                l = v[0],
                A = v[2],
                !l)
                    return [2];
                if (Y = H.get(t),
                y = Y[2],
                e.length < 3)
                    return [2, Q(t, l, t.get(l), w, w, d, !0)];
                if (h = a,
                $ = me(),
                y[l] = [$, 0],
                j = !x(f),
                V = t.get(l),
                j && (T = W(f) ? f(V) : f,
                t.set(l, T),
                Q(t, l, T)),
                W(h))
                    try {
                        h = h(t.get(l))
                    } catch (L) {
                        s = L
                    }
                return h && W(h.then) ? [4, h.catch(function(L) {
                    s = L
                })] : [3, 2];
            case 1:
                if (h = N.sent(),
                $ !== y[l][0]) {
                    if (s)
                        throw s;
                    return [2, h]
                } else
                    s && j && u && (c = !0,
                    h = V,
                    t.set(l, V));
                N.label = 2;
            case 2:
                return c && (s || (W(c) && (h = c(h, V)),
                t.set(l, h)),
                t.set(A, M(t.get(A), {
                    error: s
                }))),
                y[l][1] = me(),
                [4, Q(t, l, h, s, w, d, !!c)];
            case 3:
                if (U = N.sent(),
                s)
                    throw s;
                return [2, c ? U : h]
            }
        })
    })
}
  , Ce = function(e, i) {
    for (var t in e)
        e[t][0] && e[t][0](i)
}
  , Ze = function(e, i) {
    if (!H.has(e)) {
        var t = M(Qe, i)
          , n = {}
          , a = We.bind(w, e)
          , r = I;
        if (H.set(e, [n, {}, {}, {}, a]),
        !ae) {
            var o = t.initFocus(setTimeout.bind(w, Ce.bind(w, n, _e)))
              , c = t.initReconnect(setTimeout.bind(w, Ce.bind(w, n, Ne)));
            r = function() {
                o && o(),
                c && c(),
                H.delete(e)
            }
        }
        return [e, a, r]
    }
    return [e, H.get(e)[4]]
}
  , et = function(e, i, t, n, a) {
    var r = t.errorRetryCount
      , o = a.retryCount
      , c = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * t.errorRetryInterval;
    !x(r) && o > r || setTimeout(n, c, a)
}
  , Me = Ze(new Map)
  , tt = Me[0]
  , rt = Me[1]
  , nt = M({
    onLoadingSlow: I,
    onSuccess: I,
    onError: I,
    onErrorRetry: et,
    onDiscarded: I,
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    errorRetryInterval: Te ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Te ? 5e3 : 3e3,
    compare: function(e, i) {
        return X(e) == X(i)
    },
    isPaused: function() {
        return !1
    },
    cache: tt,
    mutate: rt,
    fallback: {}
}, Be)
  , at = function(e, i) {
    var t = M(e, i);
    if (i) {
        var n = e.use
          , a = e.fallback
          , r = i.use
          , o = i.fallback;
        n && r && (t.use = n.concat(r)),
        a && o && (t.fallback = M(a, o))
    }
    return t
}
  , it = m.exports.createContext({})
  , ut = function(e, i) {
    var t = m.exports.useState({})[1]
      , n = m.exports.useRef(e)
      , a = m.exports.useRef({
        data: !1,
        error: !1,
        isValidating: !1
    })
      , r = m.exports.useCallback(function(o) {
        var c = !1
          , d = n.current;
        for (var u in o) {
            var f = u;
            d[f] !== o[f] && (d[f] = o[f],
            a.current[f] && (c = !0))
        }
        c && !i.current && t({})
    }, []);
    return ne(function() {
        n.current = e
    }),
    [n, a.current, r]
}
  , st = function(e) {
    return W(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}]
}
  , ot = function() {
    return M(nt, m.exports.useContext(it))
}
  , ft = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        var a = ot()
          , r = st(t)
          , o = r[0]
          , c = r[1]
          , d = r[2]
          , u = at(a, d)
          , f = e
          , v = u.use;
        if (v)
            for (var l = v.length; l-- > 0; )
                f = v[l](f);
        return f(o, c || u.fetcher, u)
    }
}
  , Oe = function(e, i, t) {
    var n = i[e] || (i[e] = []);
    return n.push(t),
    function() {
        var a = n.indexOf(t);
        a >= 0 && (n[a] = n[n.length - 1],
        n.pop())
    }
}
  , ve = {
    dedupe: !0
}
  , ct = function(e, i, t) {
    var n = t.cache
      , a = t.compare
      , r = t.fallbackData
      , o = t.suspense
      , c = t.revalidateOnMount
      , d = t.refreshInterval
      , u = t.refreshWhenHidden
      , f = t.refreshWhenOffline
      , v = H.get(n)
      , l = v[0]
      , A = v[1]
      , Y = v[2]
      , y = v[3]
      , h = Ve(e)
      , s = h[0]
      , $ = h[1]
      , j = h[2]
      , V = m.exports.useRef(!1)
      , T = m.exports.useRef(!1)
      , U = m.exports.useRef(s)
      , N = m.exports.useRef(i)
      , L = m.exports.useRef(t)
      , p = function() {
        return L.current
    }
      , ie = function() {
        return p().isVisible() && p().isOnline()
    }
      , Z = function(g) {
        return n.set(j, M(n.get(j), g))
    }
      , ye = n.get(s)
      , je = x(r) ? t.fallback[s] : r
      , _ = x(ye) ? je : ye
      , Re = n.get(j) || {}
      , J = Re.error
      , Ee = !V.current
      , ge = function() {
        return Ee && !x(c) ? c : p().isPaused() ? !1 : o ? x(_) ? !1 : t.revalidateIfStale : x(_) || t.revalidateIfStale
    }
      , Ue = function() {
        return !s || !i ? !1 : Re.isValidating ? !0 : Ee && ge()
    }
      , ue = Ue()
      , se = ut({
        data: _,
        error: J,
        isValidating: ue
    }, T)
      , k = se[0]
      , oe = se[1]
      , ee = se[2]
      , q = m.exports.useCallback(function(g) {
        return De(void 0, void 0, void 0, function() {
            var R, E, S, K, z, C, b, F, O, fe, G, P, ce;
            return Ie(this, function(B) {
                switch (B.label) {
                case 0:
                    if (R = N.current,
                    !s || !R || T.current || p().isPaused())
                        return [2, !1];
                    K = !0,
                    z = g || {},
                    C = !y[s] || !z.dedupe,
                    b = function() {
                        return !T.current && s === U.current && V.current
                    }
                    ,
                    F = function() {
                        var Se = y[s];
                        Se && Se[1] === S && delete y[s]
                    }
                    ,
                    O = {
                        isValidating: !1
                    },
                    fe = function() {
                        Z({
                            isValidating: !1
                        }),
                        b() && ee(O)
                    }
                    ,
                    Z({
                        isValidating: !0
                    }),
                    ee({
                        isValidating: !0
                    }),
                    B.label = 1;
                case 1:
                    return B.trys.push([1, 3, , 4]),
                    C && (Q(n, s, k.current.data, k.current.error, !0),
                    t.loadingTimeout && !n.get(s) && setTimeout(function() {
                        K && b() && p().onLoadingSlow(s, t)
                    }, t.loadingTimeout),
                    y[s] = [R.apply(void 0, $), me()]),
                    ce = y[s],
                    E = ce[0],
                    S = ce[1],
                    [4, E];
                case 2:
                    return E = B.sent(),
                    C && setTimeout(F, t.dedupingInterval),
                    !y[s] || y[s][1] !== S ? (C && b() && p().onDiscarded(s),
                    [2, !1]) : (Z({
                        error: w
                    }),
                    O.error = w,
                    G = Y[s],
                    !x(G) && (S <= G[0] || S <= G[1] || G[1] === 0) ? (fe(),
                    C && b() && p().onDiscarded(s),
                    [2, !1]) : (a(k.current.data, E) ? O.data = k.current.data : O.data = E,
                    a(n.get(s), E) || n.set(s, E),
                    C && b() && p().onSuccess(E, s, t),
                    [3, 4]));
                case 3:
                    return P = B.sent(),
                    F(),
                    p().isPaused() || (Z({
                        error: P
                    }),
                    O.error = P,
                    C && b() && (p().onError(P, s, t),
                    (typeof t.shouldRetryOnError == "boolean" && t.shouldRetryOnError || W(t.shouldRetryOnError) && t.shouldRetryOnError(P)) && ie() && p().onErrorRetry(P, s, t, q, {
                        retryCount: (z.retryCount || 0) + 1,
                        dedupe: !0
                    }))),
                    [3, 4];
                case 4:
                    return K = !1,
                    fe(),
                    b() && C && Q(n, s, O.data, O.error, !1),
                    [2, !0]
                }
            })
        })
    }, [s])
      , Le = m.exports.useCallback(We.bind(w, n, function() {
        return U.current
    }), []);
    if (ne(function() {
        N.current = i,
        L.current = t
    }),
    ne(function() {
        if (!!s) {
            var g = s !== U.current
              , R = q.bind(w, ve)
              , E = function(b, F, O) {
                ee(M({
                    error: F,
                    isValidating: O
                }, a(k.current.data, b) ? w : {
                    data: b
                }))
            }
              , S = 0
              , K = function(b) {
                if (b == _e) {
                    var F = Date.now();
                    p().revalidateOnFocus && F > S && ie() && (S = F + p().focusThrottleInterval,
                    R())
                } else if (b == Ne)
                    p().revalidateOnReconnect && ie() && R();
                else if (b == Fe)
                    return q()
            }
              , z = Oe(s, A, E)
              , C = Oe(s, l, K);
            return T.current = !1,
            U.current = s,
            V.current = !0,
            g && ee({
                data: _,
                error: J,
                isValidating: ue
            }),
            ge() && (x(_) || ae ? R() : Xe(R)),
            function() {
                T.current = !0,
                z(),
                C()
            }
        }
    }, [s, q]),
    ne(function() {
        var g;
        function R() {
            var S = W(d) ? d(_) : d;
            S && g !== -1 && (g = setTimeout(E, S))
        }
        function E() {
            !k.current.error && (u || p().isVisible()) && (f || p().isOnline()) ? q(ve).then(R) : R()
        }
        return R(),
        function() {
            g && (clearTimeout(g),
            g = -1)
        }
    }, [d, u, f, q]),
    m.exports.useDebugValue(_),
    o && x(_) && s)
        throw N.current = i,
        L.current = t,
        T.current = !1,
        x(J) ? q(ve) : J;
    return {
        mutate: Le,
        get data() {
            return oe.data = !0,
            _
        },
        get error() {
            return oe.error = !0,
            J
        },
        get isValidating() {
            return oe.isValidating = !0,
            ue
        }
    }
}
  , lt = ft(ct)
  , vt = class extends Error {
    constructor(e, i, t) {
        super(t),
        this.request = e,
        this.response = i,
        this.code = this.response.status
    }
}
;
function dt(e, i) {
    return lt(`lanyard:${e}`, async()=>{
        let t = new Request(`https://api.lanyard.rest/v1/users/${e}`)
          , n = await fetch(t)
          , a = await n.json();
        if ("error"in a)
            throw new vt(t,n,a.error.message);
        return a.data
    }
    , i)
}
function mt() {
    const {data: e} = dt("1105770865955708980");
    return !e || e.discord_status === "offline" || e.activities.length <= 0 ? D.exports.jsx(D.exports.Fragment, {}) : D.exports.jsxs("div", {
        className: "flex flex-row items-center space-x-2 mt-3",
        children: [D.exports.jsx("div", {
            className: "animate-pulse h-2 w-2 rounded-full bg-green-300"
        }), D.exports.jsx("span", {
            className: "text-green-300 text-sm",
            children: e.listening_to_spotify ? D.exports.jsxs(D.exports.Fragment, {
                children: ["Listening to ", D.exports.jsx("span", {
                    className: "font-bold mr-[1.5px]",
                    children: "`"
                }), D.exports.jsx("a", {
                    href: `https://open.spotify.com/track/${e.spotify?.track_id}`,
                    className: "hover:underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: e.spotify?.song
                }), D.exports.jsx("span", {
                    className: "font-bold ml-[1.5px]",
                    children: "`"
                })]
            }) : `Playing ${e.activities[0].name}`
        })]
    })
}
export {mt as default};
