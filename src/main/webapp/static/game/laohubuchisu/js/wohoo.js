function setTrialLicense(e) {
	window.ZCJGame.setTrialLicense(e)
}

function setData(e) {
	window.ZCJGame.loadData(e)
}

function onNavigateBack() {
	return !0 === window.ZCJGame.getShowCredits() || window.ZCJGame.getCurrentGameState() === window.ZCJGame.GameStateEnum.GameStart || window.ZCJGame.getCurrentGameState() === window.ZCJGame.GameStateEnum.GameIntro || window.ZCJGame.getCurrentGameState() === window.ZCJGame.GameStateEnum.GameMenu || window.ZCJGame.getCurrentGameState() === window.ZCJGame.GameStateEnum.GameLoading ? !0 === window.ZCJGame.getShowCredits() ? (window.ZCJGame.setShowCredits(!1), "stay") : window.ZCJGame.getCurrentGameState() === window.ZCJGame.GameStateEnum.GameMenu && window.ZCJGame.getCurrentMenuType() !== window.ZCJGame.MenuTypeEnum.ShowMain && window.ZCJGame.getCurrentMenuType() !== window.ZCJGame.MenuTypeEnum.None ? (window.ZCJGame.showMainScreen(), "stay") : "exit" : 5 < window.ZCJGame.getCurrentLevel() && window.ZCJGame.isTrialLicense() ? (window.ZCJGame.showMainScreen(), "stay") : (window.ZCJGame.displayMenuConfirmDialog(), "stay")
}

function checkOrientation() {
	$(window).width() < $(window).height() ? ($("#canvas").hide(), $("#rotateImage").fadeIn()) : ($("#rotateImage").fadeOut(), $("#canvas").show())
}! function(e, t) {
	function n(e) {
		var t = e.length,
			n = et.type(e);
		return et.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function i(e) {
		var t = ct[e] = {};
		return et.each(e.match(nt) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = et.expando + Math.random()
	}

	function o(e, n, i) {
		var a;
		if (i === t && 1 === e.nodeType)
			if (a = "data-" + n.replace(pt, "-$1").toLowerCase(), i = e.getAttribute(a), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : dt.test(i) ? JSON.parse(i) : i
				} catch (o) {}
				ut.set(e, n, i)
			} else i = t;
		return i
	}

	function r() {
		return !0
	}

	function s() {
		return !1
	}

	function l() {
		try {
			return z.activeElement
		} catch (e) {}
	}

	function c(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function u(e, t, n) {
		if (et.isFunction(t)) return et.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return et.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (Tt.test(t)) return et.filter(t, e, n);
			t = et.filter(t, e)
		}
		return et.grep(e, function(e) {
			return 0 <= J.call(t, e) !== n
		})
	}

	function m(e, t) {
		return et.nodeName(e, "table") && et.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function d(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function p(e) {
		var t = jt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function h(e, t) {
		for (var n = e.length, i = 0; n > i; i++) mt.set(e[i], "globalEval", !t || mt.get(t[i], "globalEval"))
	}

	function g(e, t) {
		var n, i, a, o, r, s;
		if (1 === t.nodeType) {
			if (mt.hasData(e) && (n = mt.access(e), i = et.extend({}, n), s = n.events, mt.set(t, i), s))
				for (a in delete i.handle, i.events = {}, s)
					for (n = 0, i = s[a].length; i > n; n++) et.event.add(t, a, s[a][n]);
			ut.hasData(e) && (o = ut.access(e), r = et.extend({}, o), ut.set(t, r))
		}
	}

	function f(e, n) {
		var i = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
		return n === t || n && et.nodeName(e, n) ? et.merge([e], i) : i
	}

	function y(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = Gt.length; a--;)
			if (t = Gt[a] + n, t in e) return t;
		return i
	}

	function b(e, t) {
		return e = t || e, "none" === et.css(e, "display") || !et.contains(e.ownerDocument, e)
	}

	function v(e, t) {
		for (var n, i, a, o = [], r = 0, s = e.length; s > r; r++) i = e[r], i.style && (o[r] = mt.get(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && b(i) && (o[r] = mt.access(i, "olddisplay", w(i.nodeName)))) : o[r] || (a = b(i), (n && "none" !== n || !a) && mt.set(i, "olddisplay", a ? n : et.css(i, "display"))));
		for (r = 0; s > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
		return e
	}

	function x(e, t, n) {
		return (e = Nt.exec(t)) ? Math.max(0, e[1] - (n || 0)) + (e[2] || "px") : t
	}

	function E(e, t, n, i, a) {
		t = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
		for (var o = 0; 4 > t; t += 2) "margin" === n && (o += et.css(e, n + Bt[t], !0, a)), i ? ("content" === n && (o -= et.css(e, "padding" + Bt[t], !0, a)), "margin" !== n && (o -= et.css(e, "border" + Bt[t] + "Width", !0, a))) : (o += et.css(e, "padding" + Bt[t], !0, a), "padding" !== n && (o += et.css(e, "border" + Bt[t] + "Width", !0, a)));
		return o
	}

	function T(t, n, i) {
		var a = !0,
			o = "width" === n ? t.offsetWidth : t.offsetHeight,
			r = e.getComputedStyle(t, null),
			s = et.support.boxSizing && "border-box" === et.css(t, "boxSizing", !1, r);
		if (0 >= o || null == o) {
			if (o = Wt(t, n, r), (0 > o || null == o) && (o = t.style[n]), zt.test(o)) return o;
			a = s && (et.support.boxSizingReliable || o === t.style[n]), o = parseFloat(o) || 0
		}
		return o + E(t, n, i || (s ? "border" : "content"), a, r) + "px"
	}

	function w(e) {
		var t = z,
			n = Ut[e];
		return n || (n = C(e, t), "none" !== n && n || (Xt = (Xt || et("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Xt[0].contentWindow || Xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = C(e, t), Xt.detach()), Ut[e] = n), n
	}

	function C(e, t) {
		var n = et(t.createElement(e)).appendTo(t.body),
			i = et.css(n[0], "display");
		return n.remove(), i
	}

	function S(e, t, n, i) {
		var a;
		if (et.isArray(t)) et.each(t, function(t, a) {
			n || $t.test(e) ? i(e, a) : S(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
		});
		else if (n || "object" !== et.type(t)) i(e, t);
		else
			for (a in t) S(e + "[" + a + "]", t[a], n, i)
	}

	function k(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, a = 0,
				o = t.toLowerCase().match(nt) || [];
			if (et.isFunction(n))
				for (; i = o[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function D(e, n, i, a) {
		function o(l) {
			var c;
			return r[l] = !0, et.each(e[l] || [], function(e, l) {
				var u = l(n, i, a);
				return "string" != typeof u || s || r[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1)
			}), c
		}
		var r = {},
			s = e === mn;
		return o(n.dataTypes[0]) || !r["*"] && o("*")
	}

	function L(e, n) {
		var i, a, o = et.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : a || (a = {}))[i] = n[i]);
		return a && et.extend(!0, e, a), e
	}

	function R() {
		return setTimeout(function() {
			xn = t
		}), xn = et.now()
	}

	function I(e, t) {
		et.each(t, function(t, n) {
			for (var i = (kn[t] || []).concat(kn["*"]), a = 0, o = i.length; o > a && !i[a].call(e, t, n); a++);
		})
	}

	function P(e, t, n) {
		var i, a = 0,
			o = Sn.length,
			r = et.Deferred().always(function() {
				delete s.elem
			}),
			s = function() {
				if (i) return !1;
				for (var t = xn || R(), t = Math.max(0, l.startTime + l.duration - t), n = 1 - (t / l.duration || 0), a = 0, o = l.tweens.length; o > a; a++) l.tweens[a].run(n);
				return r.notifyWith(e, [l, n, t]), 1 > n && o ? t : (r.resolveWith(e, [l]), !1)
			},
			l = r.promise({
				elem: e,
				props: et.extend({}, t),
				opts: et.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: xn || R(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = et.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						a = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; a > n; n++) l.tweens[n].run(1);
					return t ? r.resolveWith(e, [l, t]) : r.rejectWith(e, [l, t]), this
				}
			});
		for (n = l.props, j(n, l.opts.specialEasing); o > a; a++)
			if (t = Sn[a].call(l, e, n, l.opts)) return t;
		return I(l, n), et.isFunction(l.opts.start) && l.opts.start.call(e, l), et.fx.timer(et.extend(s, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function j(e, t) {
		var n, i, a, o, r;
		for (n in e)
			if (i = et.camelCase(n), a = t[i], o = e[n], et.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = et.cssHooks[i], r && "expand" in r)
				for (n in o = r.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = a);
			else t[i] = a
	}

	function M(e, t, n, i, a) {
		return new M.prototype.init(e, t, n, i, a)
	}

	function O(e, t) {
		var n, i = {
				height: e
			},
			a = 0;
		for (t = t ? 1 : 0; 4 > a; a += 2 - t) n = Bt[a], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function W(e) {
		return et.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var X, _, A = typeof t,
		N = e.location,
		z = e.document,
		H = z.documentElement,
		U = e.jQuery,
		F = e.$,
		q = {},
		B = [],
		G = B.concat,
		Z = B.push,
		Y = B.slice,
		J = B.indexOf,
		V = q.toString,
		K = q.hasOwnProperty,
		Q = "2.0.0".trim,
		et = function(e, t) {
			return new et.fn.init(e, t, X)
		},
		tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		nt = /\S+/g,
		it = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ot = /^-ms-/,
		rt = /-([\da-z])/gi,
		st = function(e, t) {
			return t.toUpperCase()
		},
		lt = function() {
			z.removeEventListener("DOMContentLoaded", lt, !1), e.removeEventListener("load", lt, !1), et.ready()
		};
	et.fn = et.prototype = {
			jquery: "2.0.0",
			constructor: et,
			init: function(e, n, i) {
				var a, o;
				if (!e) return this;
				if ("string" == typeof e) {
					if (a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : it.exec(e), !a || !a[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
					if (a[1]) {
						if (n = n instanceof et ? n[0] : n, et.merge(this, et.parseHTML(a[1], n && n.nodeType ? n.ownerDocument || n : z, !0)), at.test(a[1]) && et.isPlainObject(n))
							for (a in n) et.isFunction(this[a]) ? this[a](n[a]) : this.attr(a, n[a]);
						return this
					}
					return o = z.getElementById(a[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = z, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : et.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), et.makeArray(e, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return Y.call(this)
			},
			get: function(e) {
				return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
			},
			pushStack: function(e) {
				return e = et.merge(this.constructor(), e), e.prevObject = this, e.context = this.context, e
			},
			each: function(e, t) {
				return et.each(this, e, t)
			},
			ready: function(e) {
				return et.ready.promise().done(e), this
			},
			slice: function() {
				return this.pushStack(Y.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length;
				return e = +e + (0 > e ? t : 0), this.pushStack(e >= 0 && t > e ? [this[e]] : [])
			},
			map: function(e) {
				return this.pushStack(et.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: Z,
			sort: [].sort,
			splice: [].splice
		}, et.fn.init.prototype = et.fn, et.extend = et.fn.extend = function() {
			var e, n, i, a, o, r, s = arguments[0] || {},
				l = 1,
				c = arguments.length,
				u = !1;
			for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || et.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
				if (null != (e = arguments[l]))
					for (n in e) i = s[n], a = e[n], s !== a && (u && a && (et.isPlainObject(a) || (o = et.isArray(a))) ? (o ? (o = !1, r = i && et.isArray(i) ? i : []) : r = i && et.isPlainObject(i) ? i : {}, s[n] = et.extend(u, r, a)) : a !== t && (s[n] = a));
			return s
		}, et.extend({
			expando: "jQuery" + ("2.0.0" + Math.random()).replace(/\D/g, ""),
			noConflict: function(t) {
				return e.$ === et && (e.$ = F), t && e.jQuery === et && (e.jQuery = U), et
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? et.readyWait++ : et.ready(!0)
			},
			ready: function(e) {
				(!0 === e ? --et.readyWait : et.isReady) || (et.isReady = !0, !0 !== e && 0 < --et.readyWait || (_.resolveWith(z, [et]), et.fn.trigger && et(z).trigger("ready").off("ready")))
			},
			isFunction: function(e) {
				return "function" === et.type(e)
			},
			isArray: Array.isArray,
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[V.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				if ("object" !== et.type(e) || e.nodeType || et.isWindow(e)) return !1;
				try {
					if (e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (t) {
					return !1
				}
				return !0
			},
			isEmptyObject: function(e) {
				for (var t in e) return !1;
				return !0
			},
			error: function(e) {
				throw Error(e)
			},
			parseHTML: function(e, t, n) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || z;
				var i = at.exec(e);
				return n = !n && [], i ? [t.createElement(i[1])] : (i = et.buildFragment([e], t, n), n && et(n).remove(), et.merge([], i.childNodes))
			},
			parseJSON: JSON.parse,
			parseXML: function(e) {
				var n, i;
				if (!e || "string" != typeof e) return null;
				try {
					i = new DOMParser, n = i.parseFromString(e, "text/xml")
				} catch (a) {
					n = t
				}
				return (!n || n.getElementsByTagName("parsererror").length) && et.error("Invalid XML: " + e), n
			},
			noop: function() {},
			globalEval: function(e) {
				var t, n = eval;
				(e = et.trim(e)) && (1 === e.indexOf("use strict") ? (t = z.createElement("script"), t.text = e, z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function(e) {
				return e.replace(ot, "ms-").replace(rt, st)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, i) {
				var a, o = 0,
					r = e.length,
					s = n(e);
				if (i) {
					if (s)
						for (; r > o && (a = t.apply(e[o], i), !1 !== a); o++);
					else
						for (o in e)
							if (a = t.apply(e[o], i), !1 === a) break
				} else if (s)
					for (; r > o && (a = t.call(e[o], o, e[o]), !1 !== a); o++);
				else
					for (o in e)
						if (a = t.call(e[o], o, e[o]), !1 === a) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : Q.call(e)
			},
			makeArray: function(e, t) {
				var i = t || [];
				return null != e && (n(Object(e)) ? et.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : J.call(t, e, n)
			},
			merge: function(e, n) {
				var i = n.length,
					a = e.length,
					o = 0;
				if ("number" == typeof i)
					for (; i > o; o++) e[a++] = n[o];
				else
					for (; n[o] !== t;) e[a++] = n[o++];
				return e.length = a, e
			},
			grep: function(e, t, n) {
				var i, a = [],
					o = 0,
					r = e.length;
				for (n = !!n; r > o; o++) i = !!t(e[o], o), n !== i && a.push(e[o]);
				return a
			},
			map: function(e, t, i) {
				var a, o = 0,
					r = e.length,
					s = [];
				if (n(e))
					for (; r > o; o++) a = t(e[o], o, i), null != a && (s[s.length] = a);
				else
					for (o in e) a = t(e[o], o, i), null != a && (s[s.length] = a);
				return G.apply([], s)
			},
			guid: 1,
			proxy: function(e, n) {
				var i, a, o;
				return "string" == typeof n && (i = e[n], n = e, e = i), et.isFunction(e) ? (a = Y.call(arguments, 2), o = function() {
					return e.apply(n || this, a.concat(Y.call(arguments)))
				}, o.guid = e.guid = e.guid || et.guid++, o) : t
			},
			access: function(e, n, i, a, o, r, s) {
				var l = 0,
					c = e.length,
					u = null == i;
				if ("object" === et.type(i))
					for (l in o = !0, i) et.access(e, n, l, i[l], !0, r, s);
				else if (a !== t && (o = !0, et.isFunction(a) || (s = !0), u && (s ? (n.call(e, a), n = null) : (u = n, n = function(e, t, n) {
						return u.call(et(e), n)
					})), n))
					for (; c > l; l++) n(e[l], i, s ? a : a.call(e[l], l, n(e[l], i)));
				return o ? e : u ? n.call(e) : c ? n(e[0], i) : r
			},
			now: Date.now,
			swap: function(e, t, n, i) {
				var a, o = {};
				for (a in t) o[a] = e.style[a], e.style[a] = t[a];
				n = n.apply(e, i || []);
				for (a in t) e.style[a] = o[a];
				return n
			}
		}), et.ready.promise = function(t) {
			return _ || (_ = et.Deferred(), "complete" === z.readyState ? setTimeout(et.ready) : (z.addEventListener("DOMContentLoaded", lt, !1), e.addEventListener("load", lt, !1))), _.promise(t)
		}, et.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			q["[object " + t + "]"] = t.toLowerCase()
		}), X = et(z),
		function(e, t) {
			function n(e) {
				return ht.test(e + "")
			}

			function i() {
				var e, t = [];
				return e = function(n, i) {
					return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
				}
			}

			function a(e) {
				return e[A] = !0, e
			}

			function o(e) {
				var t = P.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t)
				}
			}

			function r(e, t, n, i) {
				var a, o, r, s, l;
				if ((t ? t.ownerDocument || t : N) !== P && I(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (s = t.nodeType) && 9 !== s) return [];
				if (M && !i) {
					if (a = gt.exec(e))
						if (r = a[1]) {
							if (9 === s) {
								if (o = t.getElementById(r), !o || !o.parentNode) return n;
								if (o.id === r) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && _(t, o) && o.id === r) return n.push(o), n
						} else {
							if (a[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
							if ((r = a[3]) && z.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
						}
					if (z.qsa && (!O || !O.test(e))) {
						if (o = a = A, r = t, l = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (s = p(e), (a = t.getAttribute("id")) ? o = a.replace(bt, "\\$&") : t.setAttribute("id", o), o = "[id='" + o + "'] ", r = s.length; r--;) s[r] = o + h(s[r]);
							r = ct.test(e) && t.parentNode || t, l = s.join(",")
						}
						if (l) try {
							return Q.apply(n, r.querySelectorAll(l)), n
						} catch (c) {} finally {
							a || t.removeAttribute("id")
						}
					}
				}
				var u;
				e: {
					e = e.replace(rt, "$1");
					var m, d;
					if (o = p(e), !i && 1 === o.length) {
						if (u = o[0] = o[0].slice(0), 2 < u.length && "ID" === (m = u[0]).type && 9 === t.nodeType && M && C.relative[u[1].type]) {
							if (t = (C.find.ID(m.matches[0].replace(vt, xt), t) || [])[0], !t) {
								u = n;
								break e
							}
							e = e.slice(u.shift().value.length)
						}
						for (s = pt.needsContext.test(e) ? 0 : u.length; s-- && (m = u[s], !C.relative[a = m.type]);)
							if ((d = C.find[a]) && (i = d(m.matches[0].replace(vt, xt), ct.test(u[0].type) && t.parentNode || t))) {
								if (u.splice(s, 1), e = i.length && h(u), !e) {
									Q.apply(n, i), u = n;
									break e
								}
								break
							}
					}
					D(e, o)(i, t, !M, n, ct.test(e)), u = n
				}
				return u
			}

			function s(e, t) {
				var n = t && e,
					i = n && (~t.sourceIndex || -2147483648) - (~e.sourceIndex || -2147483648);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function l(e, n, i) {
				var a;
				return i ? t : (a = e.getAttributeNode(n)) && a.specified ? a.value : !0 === e[n] ? n.toLowerCase() : null
			}

			function c(e, n, i) {
				return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
			}

			function u(e) {
				return function(t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function m(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function d(e) {
				return a(function(t) {
					return t = +t, a(function(n, i) {
						for (var a, o = e([], n.length, t), r = o.length; r--;) n[a = o[r]] && (n[a] = !(i[a] = n[a]))
					})
				})
			}

			function p(e, t) {
				var n, i, a, o, s, l, c;
				if (s = q[e + " "]) return t ? 0 : s.slice(0);
				for (s = e, l = [], c = C.preFilter; s;) {
					n && !(i = st.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])), n = !1, (i = lt.exec(s)) && (n = i.shift(), a.push({
						value: n,
						type: i[0].replace(rt, " ")
					}), s = s.slice(n.length));
					for (o in C.filter) !(i = pt[o].exec(s)) || c[o] && !(i = c[o](i)) || (n = i.shift(), a.push({
						value: n,
						type: o,
						matches: i
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? r.error(e) : q(e, l).slice(0)
			}

			function h(e) {
				for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
				return i
			}

			function g(e, t, n) {
				var i = t.dir,
					a = n && "parentNode" === i,
					o = U++;
				return t.first ? function(t, n, o) {
					for (; t = t[i];)
						if (1 === t.nodeType || a) return e(t, n, o)
				} : function(t, n, r) {
					var s, l, c, u = H + " " + o;
					if (r) {
						for (; t = t[i];)
							if ((1 === t.nodeType || a) && e(t, n, r)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || a)
								if (c = t[A] || (t[A] = {}), (l = c[i]) && l[0] === u) {
									if (!0 === (s = l[1]) || s === w) return !0 === s
								} else if (l = c[i] = [u], l[1] = e(t, n, r) || w, !0 === l[1]) return !0
				}
			}

			function f(e) {
				return 1 < e.length ? function(t, n, i) {
					for (var a = e.length; a--;)
						if (!e[a](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function y(e, t, n, i, a) {
				for (var o, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, a)) && (r.push(o), c && t.push(s));
				return r
			}

			function b(e, t, n, i, o, s) {
				return i && !i[A] && (i = b(i)), o && !o[A] && (o = b(o, s)), a(function(a, s, l, c) {
					var u, m, d, p = [],
						h = [],
						g = s.length;
					if (!(d = a)) {
						d = t || "*";
						for (var f = l.nodeType ? [l] : l, b = [], v = 0, x = f.length; x > v; v++) r(d, f[v], b);
						d = b
					}
					if (d = !e || !a && t ? d : y(d, p, e, l, c), f = n ? o || (a ? e : g || i) ? [] : s : d, n && n(d, f, l, c), i)
						for (u = y(f, h), i(u, [], l, c), l = u.length; l--;)(m = u[l]) && (f[h[l]] = !(d[h[l]] = m));
					if (a) {
						if (o || e) {
							if (o) {
								for (u = [], l = f.length; l--;)(m = f[l]) && u.push(d[l] = m);
								o(null, f = [], u, c)
							}
							for (l = f.length; l--;)(m = f[l]) && -1 < (u = o ? nt.call(a, m) : p[l]) && (a[u] = !(s[u] = m))
						}
					} else f = y(f === s ? f.splice(g, f.length) : f), o ? o(null, s, f, c) : Q.apply(s, f)
				})
			}

			function v(e) {
				var t, n, i, a = e.length,
					o = C.relative[e[0].type];
				n = o || C.relative[" "];
				for (var r = o ? 1 : 0, s = g(function(e) {
						return e === t
					}, n, !0), l = g(function(e) {
						return -1 < nt.call(t, e)
					}, n, !0), c = [function(e, n, i) {
						return !o && (i || n !== L) || ((t = n).nodeType ? s(e, n, i) : l(e, n, i))
					}]; a > r; r++)
					if (n = C.relative[e[r].type]) c = [g(f(c), n)];
					else {
						if (n = C.filter[e[r].type].apply(null, e[r].matches), n[A]) {
							for (i = ++r; a > i && !C.relative[e[i].type]; i++);
							return b(r > 1 && f(c), r > 1 && h(e.slice(0, r - 1)).replace(rt, "$1"), n, i > r && v(e.slice(r, i)), a > i && v(e = e.slice(i)), a > i && h(e))
						}
						c.push(n)
					}
				return f(c)
			}

			function x(e, t) {
				var n = 0,
					i = 0 < t.length,
					o = 0 < e.length,
					s = function(a, s, l, c, u) {
						var m, d, p = [],
							h = 0,
							g = "0",
							f = a && [],
							b = null != u,
							v = L,
							x = a || o && C.find.TAG("*", u && s.parentNode || s),
							E = H += null == v ? 1 : Math.random() || .1;
						for (b && (L = s !== P && s, w = n); null != (u = x[g]); g++) {
							if (o && u) {
								for (m = 0; d = e[m++];)
									if (d(u, s, l)) {
										c.push(u);
										break
									}
								b && (H = E, w = ++n)
							}
							i && ((u = !d && u) && h--, a && f.push(u))
						}
						if (h += g, i && g !== h) {
							for (m = 0; d = t[m++];) d(f, p, s, l);
							if (a) {
								if (h > 0)
									for (; g--;) f[g] || p[g] || (p[g] = V.call(c));
								p = y(p)
							}
							Q.apply(c, p), b && !a && 0 < p.length && 1 < h + t.length && r.uniqueSort(c)
						}
						return b && (H = E, L = v), f
					};
				return i ? a(s) : s
			}

			function E() {}
			var T, w, C, S, k, D, L, R, I, P, j, M, O, W, X, _, A = "sizzle" + -new Date,
				N = e.document,
				z = {},
				H = 0,
				U = 0,
				F = i(),
				q = i(),
				B = i(),
				G = !1,
				Z = function() {
					return 0
				},
				Y = typeof t,
				J = [],
				V = J.pop,
				K = J.push,
				Q = J.push,
				tt = J.slice,
				nt = J.indexOf || function(e) {
					for (var t = 0, n = this.length; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
				at = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
				ot = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
				rt = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
				st = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
				lt = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
				ct = /[\x20\t\r\n\f]*[+~]/,
				ut = /=[\x20\t\r\n\f]*([^\]'"]*)[\x20\t\r\n\f]*\]/g,
				mt = RegExp(ot),
				dt = RegExp("^" + it + "$"),
				pt = {
					ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
					CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
					TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
					ATTR: RegExp("^" + at),
					PSEUDO: RegExp("^" + ot),
					CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
					"boolean": /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
					needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
				},
				ht = /^[^{]+\{\s*\[native \w/,
				gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ft = /^(?:input|select|textarea|button)$/i,
				yt = /^h\d$/i,
				bt = /'|\\/g,
				vt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				xt = function(e, t) {
					var n = "0x" + t - 65536;
					return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
				};
			try {
				Q.apply(J = tt.call(N.childNodes), N.childNodes), J[N.childNodes.length].nodeType
			} catch (Et) {
				Q = {
					apply: J.length ? function(e, t) {
						K.apply(e, tt.call(t))
					} : function(e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			k = r.isXML = function(e) {
				return (e = e && (e.ownerDocument || e).documentElement) ? "HTML" !== e.nodeName : !1
			}, I = r.setDocument = function(e) {
				var i = e ? e.ownerDocument || e : N;
				return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, j = i.documentElement, M = !k(i), z.getElementsByTagName = o(function(e) {
					return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
				}), z.attributes = o(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), z.getElementsByClassName = o(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), z.sortDetached = o(function(e) {
					return 1 & e.compareDocumentPosition(P.createElement("div"))
				}), z.getById = o(function(e) {
					return j.appendChild(e).id = A, !i.getElementsByName || !i.getElementsByName(A).length
				}), z.getById ? (C.find.ID = function(e, t) {
					if (typeof t.getElementById !== Y && M) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(vt, xt);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (C.find.ID = function(e, n) {
					if (typeof n.getElementById !== Y && M) {
						var i = n.getElementById(e);
						return i ? i.id === e || typeof i.getAttributeNode !== Y && i.getAttributeNode("id").value === e ? [i] : t : []
					}
				}, C.filter.ID = function(e) {
					var t = e.replace(vt, xt);
					return function(e) {
						return (e = typeof e.getAttributeNode !== Y && e.getAttributeNode("id")) && e.value === t
					}
				}), C.find.TAG = z.getElementsByTagName ? function(e, n) {
					return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, i = [],
						a = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[a++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, C.find.CLASS = z.getElementsByClassName && function(e, n) {
					return typeof n.getElementsByClassName !== Y && M ? n.getElementsByClassName(e) : t
				}, W = [], O = [], (z.qsa = n(i.querySelectorAll)) && (o(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), e.querySelectorAll(":checked").length || O.push(":checked")
				}), o(function(e) {
					var t = P.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
				})), (z.matchesSelector = n(X = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
					z.disconnectedMatch = X.call(e, "div"), X.call(e, "[s!='']:x"), W.push("!=", ot)
				}), O = O.length && RegExp(O.join("|")), W = W.length && RegExp(W.join("|")), _ = n(j.contains) || j.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, Z = j.compareDocumentPosition ? function(e, t) {
					if (e === t) return G = !0, 0;
					var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return n ? 1 & n || !z.sortDetached && t.compareDocumentPosition(e) === n ? e === i || _(N, e) ? -1 : t === i || _(N, t) ? 1 : R ? nt.call(R, e) - nt.call(R, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var n, a = 0;
					n = e.parentNode;
					var o = t.parentNode,
						r = [e],
						l = [t];
					if (e === t) return G = !0, 0;
					if (!n || !o) return e === i ? -1 : t === i ? 1 : n ? -1 : o ? 1 : R ? nt.call(R, e) - nt.call(R, t) : 0;
					if (n === o) return s(e, t);
					for (n = e; n = n.parentNode;) r.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; r[a] === l[a];) a++;
					return a ? s(r[a], l[a]) : r[a] === N ? -1 : l[a] === N ? 1 : 0
				}, P) : P
			}, r.matches = function(e, t) {
				return r(e, null, null, t)
			}, r.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== P && I(e), t = t.replace(ut, "='$1']"), !(!z.matchesSelector || !M || W && W.test(t) || O && O.test(t))) try {
					var n = X.call(e, t);
					if (n || z.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (i) {}
				return 0 < r(t, P, null, [e]).length
			}, r.contains = function(e, t) {
				return (e.ownerDocument || e) !== P && I(e), _(e, t)
			}, r.attr = function(e, n) {
				(e.ownerDocument || e) !== P && I(e);
				var i = C.attrHandle[n.toLowerCase()],
					i = i && i(e, n, !M);
				return i === t ? z.attributes || !M ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
			}, r.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, r.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					a = 0;
				if (G = !z.detectDuplicates, R = !z.sortStable && e.slice(0), e.sort(Z), G) {
					for (; t = e[a++];) t === e[a] && (i = n.push(a));
					for (; i--;) e.splice(n[i], 1)
				}
				return e
			}, S = r.getText = function(e) {
				var t, n = "",
					i = 0;
				if (t = e.nodeType) {
					if (1 === t || 9 === t || 11 === t) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
					} else if (3 === t || 4 === t) return e.nodeValue
				} else
					for (; t = e[i]; i++) n += S(t);
				return n
			}, C = r.selectors = {
				cacheLength: 50,
				createPseudo: a,
				match: pt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(vt, xt), e[3] = (e[4] || e[5] || "").replace(vt, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[5] && e[2];
						return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && mt.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(vt, xt).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = F[e + " "];
						return t || (t = RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)")) && F(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(i) {
							return i = r.attr(i, e), null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i + " ").indexOf(n) : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, i, a) {
						var o = "nth" !== e.slice(0, 3),
							r = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === i && 0 === a ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var c, u, m, d, p;
							n = o !== r ? "nextSibling" : "previousSibling";
							var h = t.parentNode,
								g = s && t.nodeName.toLowerCase();
							if (l = !l && !s, h) {
								if (o) {
									for (; n;) {
										for (u = t; u = u[n];)
											if (s ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
										p = n = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if (p = [r ? h.firstChild : h.lastChild], r && l) {
									for (l = h[A] || (h[A] = {}), c = l[e] || [], d = c[0] === H && c[1], m = c[0] === H && c[2], u = d && h.childNodes[d]; u = ++d && u && u[n] || (m = d = 0) || p.pop();)
										if (1 === u.nodeType && ++m && u === t) {
											l[e] = [H, d, m];
											break
										}
								} else if (l && (c = (t[A] || (t[A] = {}))[e]) && c[0] === H) m = c[1];
								else
									for (;
										(u = ++d && u && u[n] || (m = d = 0) || p.pop()) && ((s ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++m || (l && ((u[A] || (u[A] = {}))[e] = [H, m]), u !== t)););
								return m -= a, m === i || 0 === m % i && m / i >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
						return i[A] ? i(t) : 1 < i.length ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, n) {
							for (var a, o = i(e, t), r = o.length; r--;) a = nt.call(e, o[r]), e[a] = !(n[a] = o[r])
						}) : function(e) {
							return i(e, 0, n)
						}) : i
					}
				},
				pseudos: {
					not: a(function(e) {
						var t = [],
							n = [],
							i = D(e.replace(rt, "$1"));
						return i[A] ? a(function(e, t, n, a) {
							var o;
							for (n = i(e, null, a, []), a = e.length; a--;)(o = n[a]) && (e[a] = !(t[a] = o))
						}) : function(e, a, o) {
							return t[0] = e, i(t, null, o, n), !n.pop()
						}
					}),
					has: a(function(e) {
						return function(t) {
							return 0 < r(e, t).length
						}
					}),
					contains: a(function(e) {
						return function(t) {
							return -1 < (t.textContent || t.innerText || S(t)).indexOf(e)
						}
					}),
					lang: a(function(e) {
						return dt.test(e || "") || r.error("unsupported lang: " + e), e = e.replace(vt, xt).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === j
					},
					focus: function(e) {
						return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !C.pseudos.empty(e)
					},
					header: function(e) {
						return yt.test(e.nodeName)
					},
					input: function(e) {
						return ft.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: d(function() {
						return [0]
					}),
					last: d(function(e, t) {
						return [t - 1]
					}),
					eq: d(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: d(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: d(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: d(function(e, t, n) {
						for (t = 0 > n ? n + t : n; 0 <= --t;) e.push(t);
						return e
					}),
					gt: d(function(e, t, n) {
						for (n = 0 > n ? n + t : n; t > ++n;) e.push(n);
						return e
					})
				}
			};
			for (T in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) C.pseudos[T] = u(T);
			for (T in {
					submit: !0,
					reset: !0
				}) C.pseudos[T] = m(T);
			D = r.compile = function(e, t) {
				var n, i = [],
					a = [],
					o = B[e + " "];
				if (!o) {
					for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]), o[A] ? i.push(o) : a.push(o);
					o = B(e, x(a, i))
				}
				return o
			}, C.pseudos.nth = C.pseudos.eq, E.prototype = C.filters = C.pseudos, C.setFilters = new E, z.sortStable = A.split("").sort(Z).join("") === A, I(), [0, 0].sort(Z), z.detectDuplicates = G, o(function(e) {
				if (e.innerHTML = "<a href='#'></a>", "#" !== e.firstChild.getAttribute("href")) {
					e = ["type", "href", "height", "width"];
					for (var t = e.length; t--;) C.attrHandle[e[t]] = c
				}
			}), o(function(e) {
				if (null != e.getAttribute("disabled")) {
					e = "checked selected async autofocus autoplay controls defer disabled hidden ismap loop multiple open readonly required scoped".split(" ");
					for (var t = e.length; t--;) C.attrHandle[e[t]] = l
				}
			}), et.find = r, et.expr = r.selectors, et.expr[":"] = et.expr.pseudos, et.unique = r.uniqueSort, et.text = r.getText, et.isXMLDoc = r.isXML, et.contains = r.contains
		}(e);
	var ct = {};
	et.Callbacks = function(e) {
		e = "string" == typeof e ? ct[e] || i(e) : et.extend({}, e);
		var n, a, o, r, s, l, c = [],
			u = !e.once && [],
			m = function(t) {
				for (n = e.memory && t, a = !0, l = r || 0, r = 0, s = c.length, o = !0; c && s > l; l++)
					if (!1 === c[l].apply(t[0], t[1]) && e.stopOnFalse) {
						n = !1;
						break
					}
				o = !1, c && (u ? u.length && m(u.shift()) : n ? c = [] : d.disable())
			},
			d = {
				add: function() {
					if (c) {
						var t = c.length;
						! function i(t) {
							et.each(t, function(t, n) {
								var a = et.type(n);
								"function" === a ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== a && i(n)
							})
						}(arguments), o ? s = c.length : n && (r = t, m(n))
					}
					return this
				},
				remove: function() {
					return c && et.each(arguments, function(e, t) {
						for (var n; - 1 < (n = et.inArray(t, c, n));) c.splice(n, 1), o && (s >= n && s--, l >= n && l--)
					}), this
				},
				has: function(e) {
					return e ? -1 < et.inArray(e, c) : !(!c || !c.length)
				},
				empty: function() {
					return c = [], s = 0, this
				},
				disable: function() {
					return c = u = n = t, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = t, n || d.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !c || a && !u || (o ? u.push(t) : m(t)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!a
				}
			};
		return d
	}, et.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", et.Callbacks("once memory"), "resolved"],
					["reject", "fail", et.Callbacks("once memory"), "rejected"],
					["notify", "progress", et.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return et.Deferred(function(n) {
							et.each(t, function(t, o) {
								var r = o[0],
									s = et.isFunction(e[t]) && e[t];
								a[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && et.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? et.extend(e, i) : i
					}
				},
				a = {};
			return i.pipe = i.then, et.each(t, function(e, o) {
				var r = o[2],
					s = o[3];
				i[o[1]] = r.add, s && r.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function() {
					return a[o[0] + "With"](this === a ? i : this, arguments), this
				}, a[o[0] + "With"] = r.fireWith
			}), i.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			var t, n, i, a = 0,
				o = Y.call(arguments),
				r = o.length,
				s = 1 !== r || e && et.isFunction(e.promise) ? r : 0,
				l = 1 === s ? e : et.Deferred(),
				c = function(e, n, i) {
					return function(a) {
						n[e] = this, i[e] = 1 < arguments.length ? Y.call(arguments) : a, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (r > 1)
				for (t = Array(r), n = Array(r), i = Array(r); r > a; a++) o[a] && et.isFunction(o[a].promise) ? o[a].promise().done(c(a, i, o)).fail(l.reject).progress(c(a, n, t)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	}), et.support = function(t) {
		var n = z.createElement("input"),
			i = z.createDocumentFragment(),
			a = z.createElement("div"),
			o = z.createElement("select"),
			r = o.appendChild(z.createElement("option"));
		return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = r.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !r.disabled, n = z.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), i.appendChild(n), t.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === a.style.backgroundClip, et(function() {
			var n, i, o = z.getElementsByTagName("body")[0];
			o && (n = z.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(a), a.innerHTML = "", a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", et.swap(o, null != o.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === a.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(a, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(a, null) || {
				width: "4px"
			}).width, i = a.appendChild(z.createElement("div")), i.style.cssText = a.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", i.style.marginRight = i.style.width = "0", a.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), o.removeChild(n))
		}), t) : t
	}({});
	var ut, mt, dt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		pt = /([A-Z])/g;
	a.uid = 1, a.accepts = function(e) {
		return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
	}, a.prototype = {
		key: function(e) {
			if (!a.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = a.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (i) {
					t[this.expando] = n, et.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var i;
			e = this.key(e);
			var a = this.cache[e];
			if ("string" == typeof t) a[t] = n;
			else if (et.isEmptyObject(a)) this.cache[e] = t;
			else
				for (i in t) a[i] = t[i]
		},
		get: function(e, n) {
			var i = this.cache[this.key(e)];
			return n === t ? i : i[n]
		},
		access: function(e, n, i) {
			return n === t || n && "string" == typeof n && i === t ? this.get(e, n) : (this.set(e, n, i), i !== t ? i : n)
		},
		remove: function(e, n) {
			var i, a;
			i = this.key(e);
			var o = this.cache[i];
			if (n === t) this.cache[i] = {};
			else
				for ((et.isArray(n) ? a = n.concat(n.map(et.camelCase)) : n in o ? a = [n] : (a = et.camelCase(n), a = a in o ? [a] : a.match(nt) || []), i = a.length); i--;) delete o[a[i]]
		},
		hasData: function(e) {
			return !et.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			delete this.cache[this.key(e)]
		}
	}, ut = new a, mt = new a, et.extend({
		acceptData: a.accepts,
		hasData: function(e) {
			return ut.hasData(e) || mt.hasData(e)
		},
		data: function(e, t, n) {
			return ut.access(e, t, n)
		},
		removeData: function(e, t) {
			ut.remove(e, t)
		},
		_data: function(e, t, n) {
			return mt.access(e, t, n)
		},
		_removeData: function(e, t) {
			mt.remove(e, t)
		}
	}), et.fn.extend({
		data: function(e, n) {
			var i, a, r = this[0],
				s = 0,
				l = null;
			if (e === t) {
				if (this.length && (l = ut.get(r), 1 === r.nodeType && !mt.get(r, "hasDataAttrs"))) {
					for (i = r.attributes; i.length > s; s++) a = i[s].name, 0 === a.indexOf("data-") && (a = et.camelCase(a.substring(5)), o(r, a, l[a]));
					mt.set(r, "hasDataAttrs", !0)
				}
				return l
			}
			return "object" == typeof e ? this.each(function() {
				ut.set(this, e)
			}) : et.access(this, function(n) {
				var i, a = et.camelCase(e);
				if (r && n === t) {
					if (i = ut.get(r, e), i !== t || (i = ut.get(r, a), i !== t) || (i = o(r, a, t), i !== t)) return i
				} else this.each(function() {
					var i = ut.get(this, a);
					ut.set(this, a, n), -1 !== e.indexOf("-") && i !== t && ut.set(this, e, n)
				})
			}, null, n, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ut.remove(this, e)
			})
		}
	}), et.extend({
		queue: function(e, n, i) {
			var a;
			return e ? (n = (n || "fx") + "queue", a = mt.get(e, n), i && (!a || et.isArray(i) ? a = mt.access(e, n, et.makeArray(i)) : a.push(i)), a || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = et.queue(e, t),
				i = n.length,
				a = n.shift(),
				o = et._queueHooks(e, t),
				r = function() {
					et.dequeue(e, t)
				};
			"inprogress" === a && (a = n.shift(), i--), (o.cur = a) && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, r, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return mt.get(e, n) || mt.access(e, n, {
				empty: et.Callbacks("once memory").add(function() {
					mt.remove(e, [t + "queue", n])
				})
			})
		}
	}), et.fn.extend({
		queue: function(e, n) {
			var i = 2;
			return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? et.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = et.queue(this, e, n);
				et._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && et.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				et.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = et.fx ? et.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var i, a = 1,
				o = et.Deferred(),
				r = this,
				s = this.length,
				l = function() {
					--a || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(i = mt.get(r[s], e + "queueHooks")) && i.empty && (a++, i.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var ht, gt = /[\t\r\n]/g,
		ft = /\r/g,
		yt = /^(?:input|select|textarea|button)$/i;
	et.fn.extend({
		attr: function(e, t) {
			return et.access(this, et.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				et.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return et.access(this, et.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[et.propFix[e] || e]
			})
		},
		addClass: function(e) {
			var t, n, i, a, o, r = 0,
				s = this.length;
			if (t = "string" == typeof e && e, et.isFunction(e)) return this.each(function(t) {
				et(this).addClass(e.call(this, t, this.className))
			});
			if (t)
				for (t = (e || "").match(nt) || []; s > r; r++)
					if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(gt, " ") : " ")) {
						for (o = 0; a = t[o++];) 0 > i.indexOf(" " + a + " ") && (i += a + " ");
						n.className = et.trim(i)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, a, o, r = 0,
				s = this.length;
			if (t = 0 === arguments.length || "string" == typeof e && e, et.isFunction(e)) return this.each(function(t) {
				et(this).removeClass(e.call(this, t, this.className))
			});
			if (t)
				for (t = (e || "").match(nt) || []; s > r; r++)
					if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(gt, " ") : "")) {
						for (o = 0; a = t[o++];)
							for (; 0 <= i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
						n.className = e ? et.trim(i) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				i = "boolean" == typeof t;
			return this.each(et.isFunction(e) ? function(n) {
				et(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var a, o = 0, r = et(this), s = t, l = e.match(nt) || []; a = l[o++];) s = i ? s : !r.hasClass(a), r[s ? "addClass" : "removeClass"](a);
				else(n === A || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : mt.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			e = " " + e + " ";
			for (var t = 0, n = this.length; n > t; t++)
				if (1 === this[t].nodeType && 0 <= (" " + this[t].className + " ").replace(gt, " ").indexOf(e)) return;
			return !1
		},
		val: function(e) {
			var n, i, a, o = this[0];
			return arguments.length ? (a = et.isFunction(e), this.each(function(i) {
				var o, r = et(this);
				1 === this.nodeType && (o = a ? e.call(this, i, r.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : et.isArray(o) && (o = et.map(o, function(e) {
					return null == e ? "" : e + ""
				})), n = et.valHooks[this.type] || et.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (n = et.valHooks[o.type] || et.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(ft, "") : null == i ? "" : i)) : void 0
		}
	}), et.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], r = a ? i + 1 : n.length, s = 0 > i ? r : a ? i : 0; r > s; s++)
						if (t = n[s], !(!t.selected && s !== i || (et.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && et.nodeName(t.parentNode, "optgroup"))) {
							if (e = et(t).val(), a) return e;
							o.push(e)
						}
					return o
				},
				set: function(e, t) {
					for (var n, i, a = e.options, o = et.makeArray(t), r = a.length; r--;) i = a[r], (i.selected = 0 <= et.inArray(et(i).val(), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, i) {
			var a, o, r = e.nodeType;
			e && 3 !== r && 8 !== r && 2 !== r || (typeof e.getAttribute === A ? et.prop(e, n, i) : (1 === r && et.isXMLDoc(e) || (n = n.toLowerCase(), a = et.attrHooks[n] || (et.expr.match.boolean.test(n) ? ht : void 0)), i === t ? a && "get" in a && null !== (o = a.get(e, n)) ? o : (o = et.find.attr(e, n), null == o ? t : o) : null !== i ? a && "set" in a && (o = a.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (et.removeAttr(e, n), t)))
		},
		removeAttr: function(e, t) {
			var n, i, a = 0,
				o = t && t.match(nt);
			if (o && 1 === e.nodeType)
				for (; n = o[a++];) i = et.propFix[n] || n, et.expr.match.boolean.test(n) && (e[i] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!et.support.radioValue && "radio" === t && et.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, i) {
			var a, o, r, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !et.isXMLDoc(e), r && (n = et.propFix[n] || n, o = et.propHooks[n]), i !== t ? o && "set" in o && (a = o.set(e, i, n)) !== t ? a : e[n] = i : o && "get" in o && null !== (a = o.get(e, n)) ? a : e[n]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || yt.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), ht = {
		set: function(e, t, n) {
			return !1 === t ? et.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, et.each(et.expr.match.boolean.source.match(/\w+/g), function(e, n) {
		var i = et.expr.attrHandle[n] || et.find.attr;
		et.expr.attrHandle[n] = function(e, n, a) {
			var o = et.expr.attrHandle[n];
			return e = a ? t : (et.expr.attrHandle[n] = t) != i(e, n, a) ? n.toLowerCase() : null, et.expr.attrHandle[n] = o, e
		}
	}), et.support.optSelected || (et.propHooks.selected = {
		get: function(e) {
			return e = e.parentNode, e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), et.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
		et.propFix[this.toLowerCase()] = this
	}), et.each(["radio", "checkbox"], function() {
		et.valHooks[this] = {
			set: function(e, n) {
				return et.isArray(n) ? e.checked = 0 <= et.inArray(et(e).val(), n) : t
			}
		}, et.support.checkOn || (et.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var bt = /^key/,
		vt = /^(?:mouse|contextmenu)|click/,
		xt = /^(?:focusinfocus|focusoutblur)$/,
		Et = /^([^.]*)(?:\.(.+)|)$/;
	et.event = {
		global: {},
		add: function(e, n, i, a, o) {
			var r, s, l, c, u, m, d, p, h, g;
			if (u = mt.get(e)) {
				for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = et.guid++), (c = u.events) || (c = u.events = {}), (s = u.handle) || (s = u.handle = function(e) {
						return typeof et === A || e && et.event.triggered === e.type ? t : et.event.dispatch.apply(s.elem, arguments)
					}, s.elem = e), n = (n || "").match(nt) || [""], u = n.length; u--;) l = Et.exec(n[u]) || [], h = g = l[1], l = (l[2] || "").split(".").sort(), h && (d = et.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = et.event.special[h] || {}, m = et.extend({
					type: h,
					origType: g,
					data: a,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && et.expr.match.needsContext.test(o),
					namespace: l.join(".")
				}, r), (p = c[h]) || (p = c[h] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, a, l, s) || e.addEventListener && e.addEventListener(h, s, !1)), d.add && (d.add.call(e, m), m.handler.guid || (m.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, m) : p.push(m), et.event.global[h] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, a) {
			var o, r, s, l, c, u, m, d, p, h, g, f = mt.hasData(e) && mt.get(e);
			if (f && (l = f.events)) {
				for (t = (t || "").match(nt) || [""], c = t.length; c--;)
					if (s = Et.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
						for (m = et.event.special[p] || {}, p = (i ? m.delegateType : m.bindType) || p, d = l[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) u = d[o], !a && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, m.remove && m.remove.call(e, u));
						r && !d.length && (m.teardown && !1 !== m.teardown.call(e, h, f.handle) || et.removeEvent(e, p, f.handle), delete l[p])
					} else
						for (p in l) et.event.remove(e, p + t[c], n, i, !0);
				et.isEmptyObject(l) && (delete f.handle, mt.remove(e, "events"))
			}
		},
		trigger: function(n, i, a, o) {
			var r, s, l, c, u, m, d, p = [a || z],
				h = K.call(n, "type") ? n.type : n;
			if (r = K.call(n, "namespace") ? n.namespace.split(".") : [], s = l = a = a || z, 3 !== a.nodeType && 8 !== a.nodeType && !xt.test(h + et.event.triggered) && (0 <= h.indexOf(".") && (r = h.split("."), h = r.shift(), r.sort()), u = 0 > h.indexOf(":") && "on" + h, n = n[et.expando] ? n : new et.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = r.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = a), i = null == i ? [n] : et.makeArray(i, [n]), d = et.event.special[h] || {}, o || !d.trigger || !1 !== d.trigger.apply(a, i))) {
				if (!o && !d.noBubble && !et.isWindow(a)) {
					for (c = d.delegateType || h, xt.test(c + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), l = s;
					l === (a.ownerDocument || z) && p.push(l.defaultView || l.parentWindow || e)
				}
				for (r = 0;
					(s = p[r++]) && !n.isPropagationStopped();) n.type = r > 1 ? c : d.bindType || h, (m = (mt.get(s, "events") || {})[n.type] && mt.get(s, "handle")) && m.apply(s, i), (m = u && s[u]) && et.acceptData(s) && m.apply && !1 === m.apply(s, i) && n.preventDefault();
				return n.type = h, o || n.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), i) || !et.acceptData(a) || u && et.isFunction(a[h]) && !et.isWindow(a) && (l = a[u], l && (a[u] = null), et.event.triggered = h, a[h](), et.event.triggered = t, l && (a[u] = l)), n.result
			}
		},
		dispatch: function(e) {
			e = et.event.fix(e);
			var n, i, a, o, r, s = [],
				l = Y.call(arguments);
			n = (mt.get(this, "events") || {})[e.type] || [];
			var c = et.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (s = et.event.handlers.call(this, e, n), n = 0;
					(o = s[n++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, i = 0;
						(r = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, a = ((et.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), a === t || !1 !== (e.result = a) || (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var i, a, o, r, s = [],
				l = n.delegateCount,
				c = e.target;
			if (l && c.nodeType && (!e.button || "click" !== e.type))
				for (; c !== this; c = c.parentNode || this)
					if (!0 !== c.disabled || "click" !== e.type) {
						for (a = [], i = 0; l > i; i++) r = n[i], o = r.selector + " ", a[o] === t && (a[o] = r.needsContext ? 0 <= et(o, this).index(c) : et.find(o, this, null, [c]).length), a[o] && a.push(r);
						a.length && s.push({
							elem: c,
							handlers: a
						})
					}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: ["char", "charCode", "key", "keyCode"],
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var i, a, o, r = n.button;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || z, a = i.documentElement, o = i.body, e.pageX = n.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)), e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[et.expando]) return e;
			var t, n, i;
			t = e.type;
			var a = e,
				o = this.fixHooks[t];
			for (o || (this.fixHooks[t] = o = vt.test(t) ? this.mouseHooks : bt.test(t) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new et.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
			return 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== l() && this.focus ? (this.focus(), !1) : t
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === l() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && et.nodeName(this, "input") ? (this.click(), !1) : t
				},
				_default: function(e) {
					return et.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			e = et.extend(new et.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			}), i ? et.event.trigger(e, null, t) : et.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
		}
	}, et.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, et.Event = function(e, n) {
		return this instanceof et.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? r : s) : this.type = e, n && et.extend(this, n), this.timeStamp = e && e.timeStamp || et.now(), this[et.expando] = !0, t) : new et.Event(e, n)
	}, et.Event.prototype = {
		isDefaultPrevented: s,
		isPropagationStopped: s,
		isImmediatePropagationStopped: s,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = r, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = r, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = r, this.stopPropagation()
		}
	}, et.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		et.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = e.relatedTarget,
					a = e.handleObj;
				return (!i || i !== this && !et.contains(this, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), et.support.focusinBubbles || et.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			i = function(e) {
				et.event.simulate(t, e.target, et.event.fix(e), !0)
			};
		et.event.special[t] = {
			setup: function() {
				0 === n++ && z.addEventListener(e, i, !0)
			},
			teardown: function() {
				0 === --n && z.removeEventListener(e, i, !0)
			}
		}
	}), et.fn.extend({
		on: function(e, n, i, a, o) {
			var r, l;
			if ("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = t);
				for (l in e) this.on(l, n, i, e[l], o);
				return this
			}
			if (null == i && null == a ? (a = n, i = n = t) : null == a && ("string" == typeof n ? (a = i, i = t) : (a = i, i = n, n = t)), !1 === a) a = s;
			else if (!a) return this;
			return 1 === o && (r = a, a = function(e) {
				return et().off(e), r.apply(this, arguments)
			}, a.guid = r.guid || (r.guid = et.guid++)), this.each(function() {
				et.event.add(this, e, a, i, n)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, n, i) {
			var a, o;
			if (e && e.preventDefault && e.handleObj) return a = e.handleObj, et(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (!1 === n || "function" == typeof n) && (i = n, n = t), !1 === i && (i = s), this.each(function() {
				et.event.remove(this, e, i, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				et.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var i = this[0];
			return i ? et.event.trigger(e, n, i, !0) : t
		}
	});
	var Tt = /^.[^:#\[\.,]*$/,
		wt = et.expr.match.needsContext,
		Ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	et.fn.extend({
		find: function(e) {
			var t, n, i, a = this.length;
			if ("string" != typeof e) return t = this, this.pushStack(et(e).filter(function() {
				for (i = 0; a > i; i++)
					if (et.contains(t[i], this)) return !0
			}));
			for (n = [], i = 0; a > i; i++) et.find(e, this[i], n);
			return n = this.pushStack(a > 1 ? et.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function(e) {
			var t = et(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++)
					if (et.contains(this, t[e])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(u(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(u(this, e || [], !1))
		},
		is: function(e) {
			return !!e && ("string" == typeof e ? wt.test(e) ? 0 <= et(e, this.context).index(this[0]) : 0 < et.filter(e, this).length : 0 < this.filter(e).length)
		},
		closest: function(e, t) {
			for (var n, i = 0, a = this.length, o = [], r = wt.test(e) || "string" != typeof e ? et(e, t || this.context) : 0; a > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (r ? -1 < r.index(n) : 1 === n.nodeType && et.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(1 < o.length ? et.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? J.call(et(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? et(e, t) : et.makeArray(e && e.nodeType ? [e] : e),
				n = et.merge(this.get(), n);
			return this.pushStack(et.unique(n))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), et.each({
		parent: function(e) {
			return (e = e.parentNode) && 11 !== e.nodeType ? e : null
		},
		parents: function(e) {
			return et.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return et.dir(e, "parentNode", n)
		},
		next: function(e) {
			return c(e, "nextSibling")
		},
		prev: function(e) {
			return c(e, "previousSibling")
		},
		nextAll: function(e) {
			return et.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return et.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return et.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return et.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return et.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return et.sibling(e.firstChild)
		},
		contents: function(e) {
			return et.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : et.merge([], e.childNodes)
		}
	}, function(e, t) {
		et.fn[e] = function(n, i) {
			var a = et.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = et.filter(i, a)), 1 < this.length && (Ct[e] || et.unique(a), "p" === e[0] && a.reverse()), this.pushStack(a)
		}
	}), et.extend({
		filter: function(e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? et.find.matchesSelector(i, e) ? [i] : [] : et.find.matches(e, et.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, i) {
			for (var a = [], o = i !== t;
				(e = e[n]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && et(e).is(i)) break;
					a.push(e)
				}
			return a
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		kt = /<([\w:]+)/,
		Dt = /<|&#?\w+;/,
		Lt = /<(?:script|style|link)/i,
		Rt = /^(?:checkbox|radio)$/i,
		It = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Pt = /^$|\/(?:java|ecma)script/i,
		jt = /^true\/(.*)/,
		Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ot = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ot.optgroup = Ot.option, Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.col = Ot.thead, Ot.th = Ot.td, et.fn.extend({
		text: function(e) {
			return et.access(this, function(e) {
				return e === t ? et.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || m(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = m(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? et.filter(e, this) : this, a = 0; null != (n = i[a]); a++) t || 1 !== n.nodeType || et.cleanData(f(n)), n.parentNode && (t && et.contains(n.ownerDocument, n) && h(f(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (et.cleanData(f(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return et.clone(this, e, t)
			})
		},
		html: function(e) {
			return et.access(this, function(e) {
				var n = this[0] || {},
					i = 0,
					a = this.length;
				if (e !== t || 1 !== n.nodeType) {
					if (n.innerHTML, "string" == typeof e && !Lt.test(e) && !Ot[(kt.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(St, "<$1></$2>");
						try {
							for (; a > i; i++) n = this[i] || {}, 1 === n.nodeType && (et.cleanData(f(n, !1)), n.innerHTML = e);
							n = 0
						} catch (o) {}
					}
					n && this.empty().append(e)
				}
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = et.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var i = e[t++],
					a = e[t++];
				a && (et(this).remove(), a.insertBefore(n, i))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = G.apply([], e);
			var i, a, o, r, s = 0,
				l = this.length,
				c = this,
				u = l - 1,
				m = e[0],
				h = et.isFunction(m);
			if (h || !(1 >= l || "string" != typeof m || et.support.checkClone) && It.test(m)) return this.each(function(i) {
				var a = c.eq(i);
				h && (e[0] = m.call(this, i, a.html())), a.domManip(e, t, n)
			});
			if (l && (i = et.buildFragment(e, this[0].ownerDocument, !1, !n && this), a = i.firstChild, 1 === i.childNodes.length && (i = a), a)) {
				for (a = et.map(f(i, "script"), d), o = a.length; l > s; s++) r = i, s !== u && (r = et.clone(r, !0, !0), o && et.merge(a, f(r, "script"))), t.call(this[s], r, s);
				if (o)
					for (i = a[a.length - 1].ownerDocument, et.map(a, p), s = 0; o > s; s++) r = a[s], Pt.test(r.type || "") && !mt.access(r, "globalEval") && et.contains(i, r) && (r.src ? et._evalUrl(r.src) : et.globalEval(r.textContent.replace(Mt, "")))
			}
			return this
		}
	}), et.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		et.fn[e] = function(e) {
			for (var n = [], i = et(e), a = i.length - 1, o = 0; a >= o; o++) e = o === a ? this : this.clone(!0), et(i[o])[t](e), Z.apply(n, e.get());
			return this.pushStack(n)
		}
	}), et.extend({
		clone: function(e, t, n) {
			var i, a, o, r, s = e.cloneNode(!0),
				l = et.contains(e.ownerDocument, e);
			if (!(et.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || et.isXMLDoc(e)))
				for (r = f(s), o = f(e), i = 0, a = o.length; a > i; i++) {
					var c = o[i],
						u = r[i],
						m = u.nodeName.toLowerCase();
					"input" === m && Rt.test(c.type) ? u.checked = c.checked : ("input" === m || "textarea" === m) && (u.defaultValue = c.defaultValue)
				}
			if (t)
				if (n)
					for (o = o || f(e), r = r || f(s), i = 0, a = o.length; a > i; i++) g(o[i], r[i]);
				else g(e, s);
			return r = f(s, "script"), 0 < r.length && h(r, !l && f(e, "script")), s
		},
		buildFragment: function(e, t, n, i) {
			for (var a, o, r, s, l = 0, c = e.length, u = t.createDocumentFragment(), m = []; c > l; l++)
				if (a = e[l], a || 0 === a)
					if ("object" === et.type(a)) et.merge(m, a.nodeType ? [a] : a);
					else if (Dt.test(a)) {
				for (o = o || u.appendChild(t.createElement("div")), r = (kt.exec(a) || ["", ""])[1].toLowerCase(), r = Ot[r] || Ot._default, o.innerHTML = r[1] + a.replace(St, "<$1></$2>") + r[2], r = r[0]; r--;) o = o.firstChild;
				et.merge(m, o.childNodes), o = u.firstChild, o.textContent = ""
			} else m.push(t.createTextNode(a));
			for (u.textContent = "", l = 0; a = m[l++];)
				if ((!i || -1 === et.inArray(a, i)) && (s = et.contains(a.ownerDocument, a), o = f(u.appendChild(a), "script"), s && h(o), n))
					for (r = 0; a = o[r++];) Pt.test(a.type || "") && n.push(a);
			return u
		},
		cleanData: function(e) {
			for (var t, n, i, a = e.length, o = 0, r = et.event.special; a > o; o++) {
				if (n = e[o], et.acceptData(n) && (t = mt.access(n)))
					for (i in t.events) r[i] ? et.event.remove(n, i) : et.removeEvent(n, i, t.handle);
				ut.discard(n), mt.discard(n)
			}
		},
		_evalUrl: function(e) {
			return et.ajax({
				url: e,
				type: "GET",
				dataType: "text",
				async: !1,
				global: !1,
				success: et.globalEval
			})
		}
	}), et.fn.extend({
		wrapAll: function(e) {
			var t;
			return et.isFunction(e) ? this.each(function(t) {
				et(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = et(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return this.each(et.isFunction(e) ? function(t) {
				et(this).wrapInner(e.call(this, t))
			} : function() {
				var t = et(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = et.isFunction(e);
			return this.each(function(n) {
				et(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				et.nodeName(this, "body") || et(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Wt, Xt, _t = /^(none|table(?!-c[ea]).+)/,
		At = /^margin/,
		Nt = RegExp("^(" + tt + ")(.*)$", "i"),
		zt = RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
		Ht = RegExp("^([+-])=(" + tt + ")", "i"),
		Ut = {
			BODY: "block"
		},
		Ft = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		qt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Bt = ["Top", "Right", "Bottom", "Left"],
		Gt = ["Webkit", "O", "Moz", "ms"];
	et.fn.extend({
		css: function(n, i) {
			return et.access(this, function(n, i, a) {
				var o, r = {},
					s = 0;
				if (et.isArray(i)) {
					for (a = e.getComputedStyle(n, null), o = i.length; o > s; s++) r[i[s]] = et.css(n, i[s], !1, a);
					return r
				}
				return a !== t ? et.style(n, i, a) : et.css(n, i)
			}, n, i, 1 < arguments.length)
		},
		show: function() {
			return v(this, !0)
		},
		hide: function() {
			return v(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : b(this)) ? et(this).show(): et(this).hide()
			})
		}
	}), et.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, n, i, a) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, s, l = et.camelCase(n),
					c = e.style;
				return n = et.cssProps[l] || (et.cssProps[l] = y(c, l)), s = et.cssHooks[n] || et.cssHooks[l], i === t ? s && "get" in s && (o = s.get(e, !1, a)) !== t ? o : c[n] : (r = typeof i, "string" === r && (o = Ht.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(et.css(e, n)), r = "number"), null == i || "number" === r && isNaN(i) || ("number" !== r || et.cssNumber[l] || (i += "px"), et.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, a)) === t || (c[n] = i)), t)
			}
		},
		css: function(e, n, i, a) {
			var o, r, s, l = et.camelCase(n);
			return n = et.cssProps[l] || (et.cssProps[l] = y(e.style, l)), s = et.cssHooks[n] || et.cssHooks[l], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = Wt(e, n, a)), "normal" === o && n in qt && (o = qt[n]), "" === i || i ? (r = parseFloat(o), !0 === i || et.isNumeric(r) ? r || 0 : o) : o
		}
	}), Wt = function(n, i, a) {
		var o, r, s, l = (a = a || e.getComputedStyle(n, null)) ? a.getPropertyValue(i) || a[i] : t,
			c = n.style;
		return a && ("" !== l || et.contains(n.ownerDocument, n) || (l = et.style(n, i)), zt.test(l) && At.test(i) && (o = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = r, c.maxWidth = s)), l
	}, et.each(["height", "width"], function(n, i) {
		et.cssHooks[i] = {
			get: function(e, n, a) {
				return n ? 0 === e.offsetWidth && _t.test(et.css(e, "display")) ? et.swap(e, Ft, function() {
					return T(e, i, a)
				}) : T(e, i, a) : t
			},
			set: function(t, n, a) {
				var o = a && e.getComputedStyle(t, null);
				return x(t, n, a ? E(t, i, a, et.support.boxSizing && "border-box" === et.css(t, "boxSizing", !1, o), o) : 0)
			}
		}
	}), et(function() {
		et.support.reliableMarginRight || (et.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? et.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !et.support.pixelPosition && et.fn.position && et.each(["top", "left"], function(e, n) {
			et.cssHooks[n] = {
				get: function(e, i) {
					return i ? (i = Wt(e, n), zt.test(i) ? et(e).position()[n] + "px" : i) : t
				}
			}
		})
	}), et.expr && et.expr.filters && (et.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight
	}, et.expr.filters.visible = function(e) {
		return !et.expr.filters.hidden(e)
	}), et.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		et.cssHooks[e + t] = {
			expand: function(n) {
				var i = 0,
					a = {};
				for (n = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[e + Bt[i] + t] = n[i] || n[i - 2] || n[0];
				return a
			}
		}, At.test(e) || (et.cssHooks[e + t].set = x)
	});
	var Zt = /%20/g,
		$t = /\[\]$/,
		Yt = /\r?\n/g,
		Jt = /^(?:submit|button|image|reset|file)$/i,
		Vt = /^(?:input|select|textarea|keygen)/i;
	et.fn.extend({
		serialize: function() {
			return et.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = et.prop(this, "elements");
				return e ? et.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !et(this).is(":disabled") && Vt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Rt.test(e))
			}).map(function(e, t) {
				var n = et(this).val();
				return null == n ? null : et.isArray(n) ? et.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Yt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Yt, "\r\n")
				}
			}).get()
		}
	}), et.param = function(e, n) {
		var i, a = [],
			o = function(e, t) {
				t = et.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = et.ajaxSettings && et.ajaxSettings.traditional), et.isArray(e) || e.jquery && !et.isPlainObject(e)) et.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (i in e) S(i, e[i], n, o);
		return a.join("&").replace(Zt, "+")
	}, et.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		et.fn[t] = function(e, n) {
			return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), et.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Kt, Qt, en = et.now(),
		tn = /\?/,
		nn = /#.*$/,
		an = /([?&])_=[^&]*/,
		on = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		rn = /^(?:GET|HEAD)$/,
		sn = /^\/\//,
		ln = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		cn = et.fn.load,
		un = {},
		mn = {},
		dn = "*/".concat("*");
	try {
		Qt = N.href
	} catch (pn) {
		Qt = z.createElement("a"), Qt.href = "", Qt = Qt.href
	}
	Kt = ln.exec(Qt.toLowerCase()) || [], et.fn.load = function(e, n, i) {
		if ("string" != typeof e && cn) return cn.apply(this, arguments);
		var a, o, r, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (a = e.slice(l), e = e.slice(0, l)), et.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), 0 < s.length && et.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: n
		}).done(function(e) {
			r = arguments, s.html(a ? et("<div>").append(et.parseHTML(e)).find(a) : e)
		}).complete(i && function(e, t) {
			s.each(i, r || [e.responseText, t, e])
		}), this
	}, et.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
		et.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), et.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Qt,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Kt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": et.parseJSON,
				"text xml": et.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? L(L(e, et.ajaxSettings), t) : L(et.ajaxSettings, e)
		},
		ajaxPrefilter: k(un),
		ajaxTransport: k(mn),
		ajax: function(e, n) {
			function i(e, n, i, s) {
				var c, m, b, v, E = n;
				if (2 !== x) {
					if (x = 2, l && clearTimeout(l), a = t, r = s || "", T.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, i) {
						b = d;
						for (var w, C, S, k, D = T, L = b.contents, R = b.dataTypes;
							"*" === R[0];) R.shift(), w === t && (w = b.mimeType || D.getResponseHeader("Content-Type"));
						if (w)
							for (C in L)
								if (L[C] && L[C].test(w)) {
									R.unshift(C);
									break
								}
						if (R[0] in i) S = R[0];
						else {
							for (C in i) {
								if (!R[0] || b.converters[C + " " + R[0]]) {
									S = C;
									break
								}
								k || (k = C)
							}
							S = S || k
						}
						b = S ? (S !== R[0] && R.unshift(S), i[S]) : t
					}
					var I;
					e: {
						i = d, w = b, C = T, S = s;
						var P, j, M;
						if (b = {}, D = i.dataTypes.slice(), D[1])
							for (P in i.converters) b[P.toLowerCase()] = i.converters[P];
						for (k = D.shift(); k;)
							if (i.responseFields[k] && (C[i.responseFields[k]] = w), !M && S && i.dataFilter && (w = i.dataFilter(w, i.dataType)), M = k, k = D.shift())
								if ("*" === k) k = M;
								else if ("*" !== M && M !== k) {
							if (P = b[M + " " + k] || b["* " + k], !P)
								for (I in b)
									if (j = I.split(" "), j[1] === k && (P = b[M + " " + j[0]] || b["* " + j[0]])) {
										!0 === P ? P = b[I] : !0 !== b[I] && (k = j[0], D.unshift(j[1]));
										break
									}
							if (!0 !== P)
								if (P && i["throws"]) w = P(w);
								else try {
									w = P(w)
								} catch (O) {
									I = {
										state: "parsererror",
										error: P ? O : "No conversion from " + M + " to " + k
									};
									break e
								}
						}
						I = {
							state: "success",
							data: w
						}
					}
					b = I, s ? (d.ifModified && (v = T.getResponseHeader("Last-Modified"), v && (et.lastModified[o] = v), v = T.getResponseHeader("etag"), v && (et.etag[o] = v)), 204 === e ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state, c = b.data, m = b.error, s = !m)) : (m = E, (e || !E) && (E = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || E) + "", s ? g.resolveWith(p, [c, E, T]) : g.rejectWith(p, [T, E, m]), T.statusCode(y), y = t, u && h.trigger(s ? "ajaxSuccess" : "ajaxError", [T, d, s ? c : m]), f.fireWith(p, [T, E]), u && (h.trigger("ajaxComplete", [T, d]), --et.active || et.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var a, o, r, s, l, c, u, m, d = et.ajaxSetup({}, n),
				p = d.context || d,
				h = d.context && (p.nodeType || p.jquery) ? et(p) : et.event,
				g = et.Deferred(),
				f = et.Callbacks("once memory"),
				y = d.statusCode || {},
				b = {},
				v = {},
				x = 0,
				E = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!s)
								for (s = {}; t = on.exec(r);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? r : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = v[n] = v[n] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > x)
								for (t in e) y[t] = [y[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function(e) {
						return e = e || E, a && a.abort(e), i(0, e), this
					}
				};
			if (g.promise(T).complete = f.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Qt) + "").replace(nn, "").replace(sn, Kt[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = et.trim(d.dataType || "*").toLowerCase().match(nt) || [""], null == d.crossDomain && (c = ln.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === Kt[1] && c[2] === Kt[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (Kt[3] || ("http:" === Kt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = et.param(d.data, d.traditional)), D(un, d, n, T), 2 === x) return T;
			(u = d.global) && 0 === et.active++ && et.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (tn.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = an.test(o) ? o.replace(an, "$1_=" + en++) : o + (tn.test(o) ? "&" : "?") + "_=" + en++)), d.ifModified && (et.lastModified[o] && T.setRequestHeader("If-Modified-Since", et.lastModified[o]), et.etag[o] && T.setRequestHeader("If-None-Match", et.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + dn + "; q=0.01" : "") : d.accepts["*"]);
			for (m in d.headers) T.setRequestHeader(m, d.headers[m]);
			if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === x)) return T.abort();
			E = "abort";
			for (m in {
					success: 1,
					error: 1,
					complete: 1
				}) T[m](d[m]);
			if (a = D(mn, d, n, T)) {
				T.readyState = 1, u && h.trigger("ajaxSend", [T, d]), d.async && 0 < d.timeout && (l = setTimeout(function() {
					T.abort("timeout")
				}, d.timeout));
				try {
					x = 1, a.send(b, i)
				} catch (w) {
					if (!(2 > x)) throw w;
					i(-1, w)
				}
			} else i(-1, "No Transport");
			return T
		},
		getJSON: function(e, t, n) {
			return et.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return et.get(e, t, n, "script")
		}
	}), et.each(["get", "post"], function(e, n) {
		et[n] = function(e, i, a, o) {
			return et.isFunction(i) && (o = o || a, a = i, i = t), et.ajax({
				url: e,
				type: n,
				dataType: o,
				data: i,
				success: a
			})
		}
	}), et.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return et.globalEval(e), e
			}
		}
	}), et.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), et.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(i, a) {
					t = et("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
					}), z.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var hn = [],
		gn = /(=)\?(?=&|$)|\?\?/;
	et.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = hn.pop() || et.expando + "_" + en++;
			return this[e] = !0, e
		}
	}), et.ajaxPrefilter("json jsonp", function(n, i, a) {
		var o, r, s, l = !1 !== n.jsonp && (gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && gn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = et.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(gn, "$1" + o) : !1 !== n.jsonp && (n.url += (tn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || et.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", r = e[o], e[o] = function() {
			s = arguments
		}, a.always(function() {
			e[o] = r, n[o] && (n.jsonpCallback = i.jsonpCallback, hn.push(o)), s && et.isFunction(r) && r(s[0]), s = r = t
		}), "script") : t
	}), et.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var fn = et.ajaxSettings.xhr(),
		yn = {
			0: 200,
			1223: 204
		},
		bn = 0,
		vn = {};
	e.ActiveXObject && et(e).on("unload", function() {
		for (var e in vn) vn[e]();
		vn = t
	}), et.support.cors = !!fn && "withCredentials" in fn, et.support.ajax = fn = !!fn, et.ajaxTransport(function(e) {
		var n;
		return et.support.cors || fn && !e.crossDomain ? {
			send: function(i, a) {
				var o, r, s = e.xhr();
				if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (o in e.xhrFields) s[o] = e.xhrFields[o];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (o in i) s.setRequestHeader(o, i[o]);
				n = function(e) {
					return function() {
						n && (delete vn[r], n = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? a(s.status || 404, s.statusText) : a(yn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
							text: s.responseText
						} : t, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), s.onerror = n("error"), n = vn[r = bn++] = n("abort"), s.send(e.hasContent && e.data || null)
			},
			abort: function() {
				n && n()
			}
		} : t
	});
	var xn, En, Tn = /^(?:toggle|show|hide)$/,
		wn = RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
		Cn = /queueHooks$/,
		Sn = [function(e, n, i) {
			var a, o, r, s, l, c, u = this,
				m = e.style,
				d = {},
				p = [],
				h = e.nodeType && b(e);
			i.queue || (l = et._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
				l.unqueued || c()
			}), l.unqueued++, u.always(function() {
				u.always(function() {
					l.unqueued--, et.queue(e, "fx").length || l.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in n || "width" in n) && (i.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === et.css(e, "display") && "none" === et.css(e, "float") && (m.display = "inline-block")), i.overflow && (m.overflow = "hidden", u.always(function() {
				m.overflow = i.overflow[0], m.overflowX = i.overflow[1], m.overflowY = i.overflow[2]
			})), s = mt.get(e, "fxshow");
			for (a in n)
				if (r = n[a], Tn.exec(r)) {
					if (delete n[a], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
						if ("show" !== r || s === t || s[a] === t) continue;
						h = !0
					}
					p.push(a)
				}
			if (n = p.length)
				for ((s = mt.get(e, "fxshow") || mt.access(e, "fxshow", {}), "hidden" in s && (h = s.hidden), o && (s.hidden = !h), h ? et(e).show() : u.done(function() {
						et(e).hide()
					}), u.done(function() {
						var t;
						mt.remove(e, "fxshow");
						for (t in d) et.style(e, t, d[t])
					}), a = 0); n > a; a++) o = p[a], r = u.createTween(o, h ? s[o] : 0), d[o] = s[o] || et.style(e, o), o in s || (s[o] = r.start, h && (r.end = r.start, r.start = "width" === o || "height" === o ? 1 : 0))
		}],
		kn = {
			"*": [function(e, t) {
				var n, i, a = this.createTween(e, t),
					o = wn.exec(t),
					r = a.cur(),
					s = +r || 0,
					l = 1,
					c = 20;
				if (o) {
					if (n = +o[2], i = o[3] || (et.cssNumber[e] ? "" : "px"), "px" !== i && s) {
						s = et.css(a.elem, e, !0) || n || 1;
						do l = l || ".5", s /= l, et.style(a.elem, e, s + i); while (l !== (l = a.cur() / r) && 1 !== l && --c)
					}
					a.unit = i, a.start = s, a.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return a
			}]
		};
	et.Animation = et.extend(P, {
		tweener: function(e, t) {
			et.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, i = 0, a = e.length; a > i; i++) n = e[i], kn[n] = kn[n] || [], kn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Sn.unshift(e) : Sn.push(e)
		}
	}), et.Tween = M, M.prototype = {
		constructor: M,
		init: function(e, t, n, i, a, o) {
			this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (et.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = M.propHooks[this.prop];
			return e && e.get ? e.get(this) : M.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = M.propHooks[this.prop];
			return this.pos = t = this.options.duration ? et.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
		}
	}, M.prototype.init.prototype = M.prototype, M.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = et.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				et.fx.step[e.prop] ? et.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[et.cssProps[e.prop]] || et.cssHooks[e.prop]) ? et.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, et.each(["toggle", "show", "hide"], function(e, t) {
		var n = et.fn[t];
		et.fn[t] = function(e, i, a) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, a)
		}
	}), et.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(b).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(e, t, n, i) {
			var a = et.isEmptyObject(e),
				o = et.speed(t, n, i),
				r = function() {
					var t = P(this, et.extend({}, e), o);
					r.finish = function() {
						t.stop(!0)
					}, (a || mt.get(this, "finish")) && t.stop(!0)
				};
			return r.finish = r, a || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
		},
		stop: function(e, n, i) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop, t(i)
			};
			return "string" != typeof e && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = et.timers,
					r = mt.get(this);
				if (n) r[n] && r[n].stop && a(r[n]);
				else
					for (n in r) r[n] && r[n].stop && Cn.test(n) && a(r[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
				!t && i || et.dequeue(this, e)
			})
		},
		finish: function(e) {
			return !1 !== e && (e = e || "fx"), this.each(function() {
				var t, n = mt.get(this),
					i = n[e + "queue"];
				t = n[e + "queueHooks"];
				var a = et.timers,
					o = i ? i.length : 0;
				for (n.finish = !0, et.queue(this, e, []), t && t.cur && t.cur.finish && t.cur.finish.call(this), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
				for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete n.finish
			})
		}
	}), et.each({
		slideDown: O("show"),
		slideUp: O("hide"),
		slideToggle: O("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		et.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), et.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? et.extend({}, e) : {
			complete: n || !n && t || et.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !et.isFunction(t) && t
		};
		return i.duration = et.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in et.fx.speeds ? et.fx.speeds[i.duration] : et.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			et.isFunction(i.old) && i.old.call(this), i.queue && et.dequeue(this, i.queue)
		}, i
	}, et.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, et.timers = [], et.fx = M.prototype.init, et.fx.tick = function() {
		var e, n = et.timers,
			i = 0;
		for (xn = et.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
		n.length || et.fx.stop(), xn = t
	}, et.fx.timer = function(e) {
		e() && et.timers.push(e) && et.fx.start()
	}, et.fx.interval = 13, et.fx.start = function() {
		En || (En = setInterval(et.fx.tick, et.fx.interval))
	}, et.fx.stop = function() {
		clearInterval(En), En = null
	}, et.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, et.fx.step = {}, et.expr && et.expr.filters && (et.expr.filters.animated = function(e) {
		return et.grep(et.timers, function(t) {
			return e === t.elem
		}).length
	}), et.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			et.offset.setOffset(this, e, t)
		});
		var n, i, a = this[0],
			o = {
				top: 0,
				left: 0
			},
			r = a && a.ownerDocument;
		return r ? (n = r.documentElement, et.contains(n, a) ? (typeof a.getBoundingClientRect !== A && (o = a.getBoundingClientRect()), i = W(r), {
			top: o.top + i.pageYOffset - n.clientTop,
			left: o.left + i.pageXOffset - n.clientLeft
		}) : o) : void 0
	}, et.offset = {
		setOffset: function(e, t, n) {
			var i, a, o, r, s, l, c = et.css(e, "position"),
				u = et(e),
				m = {};
			"static" === c && (e.style.position = "relative"), s = u.offset(), o = et.css(e, "top"), l = et.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (i = u.position(), r = i.top, a = i.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0), et.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (m.top = t.top - s.top + r), null != t.left && (m.left = t.left - s.left + a), "using" in t ? t.using.call(e, m) : u.css(m)
		}
	}, et.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === et.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), et.nodeName(e[0], "html") || (i = e.offset()), i.top += et.css(e[0], "borderTopWidth", !0), i.left += et.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - et.css(n, "marginTop", !0),
					left: t.left - i.left - et.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || H; e && !et.nodeName(e, "html") && "static" === et.css(e, "position");) e = e.offsetParent;
				return e || H
			})
		}
	}), et.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, i) {
		var a = "pageYOffset" === i;
		et.fn[n] = function(o) {
			return et.access(this, function(n, o, r) {
				var s = W(n);
				return r === t ? s ? s[i] : n[o] : (s ? s.scrollTo(a ? e.pageXOffset : r, a ? r : e.pageYOffset) : n[o] = r, t)
			}, n, o, arguments.length, null)
		}
	}), et.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		et.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(i, a) {
			et.fn[a] = function(a, o) {
				var r = arguments.length && (i || "boolean" != typeof a),
					s = i || (!0 === a || !0 === o ? "margin" : "border");
				return et.access(this, function(n, i, a) {
					var o;
					return et.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : a === t ? et.css(n, i, s) : et.style(n, i, a, s)
				}, n, r ? a : t, r, null)
			}
		})
	}), et.fn.size = function() {
		return this.length
	}, et.fn.andSelf = et.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = et : "function" == typeof define && define.amd && define("jquery", [], function() {
		return et
	}), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = et)
}(window),
function(e, t, n) {
	"function" == typeof define && define.amd ? define(["jquery"], function(i) {
		return n(i, e, t), i.mobile
	}) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, i) {
	e.mobile = {},
		function(e, t, i) {
			var a = {};
			e.mobile = e.extend(e.mobile, {
				version: "1.3.1",
				ns: "",
				subPageUrlKey: "ui-page",
				activePageClass: "ui-page-active",
				activeBtnClass: "ui-btn-active",
				focusClass: "ui-focus",
				ajaxEnabled: !0,
				hashListeningEnabled: !0,
				linkBindingEnabled: !0,
				defaultPageTransition: "fade",
				maxTransitionWidth: !1,
				minScrollBack: 250,
				touchOverflowEnabled: !1,
				defaultDialogTransition: "pop",
				pageLoadErrorMessage: "Error Loading Page",
				pageLoadErrorMessageTheme: "e",
				phonegapNavigationEnabled: !1,
				autoInitializePage: !0,
				pushStateEnabled: !0,
				ignoreContentEnabled: !1,
				orientationChangeEnabled: !0,
				buttonMarkup: {
					hoverDelay: 200
				},
				window: e(t),
				document: e(n),
				keyCode: {
					ALT: 18,
					BACKSPACE: 8,
					CAPS_LOCK: 20,
					COMMA: 188,
					COMMAND: 91,
					COMMAND_LEFT: 91,
					COMMAND_RIGHT: 93,
					CONTROL: 17,
					DELETE: 46,
					DOWN: 40,
					END: 35,
					ENTER: 13,
					ESCAPE: 27,
					HOME: 36,
					INSERT: 45,
					LEFT: 37,
					MENU: 93,
					NUMPAD_ADD: 107,
					NUMPAD_DECIMAL: 110,
					NUMPAD_DIVIDE: 111,
					NUMPAD_ENTER: 108,
					NUMPAD_MULTIPLY: 106,
					NUMPAD_SUBTRACT: 109,
					PAGE_DOWN: 34,
					PAGE_UP: 33,
					PERIOD: 190,
					RIGHT: 39,
					SHIFT: 16,
					SPACE: 32,
					TAB: 9,
					UP: 38,
					WINDOWS: 91
				},
				behaviors: {},
				silentScroll: function(n) {
					"number" !== e.type(n) && (n = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function() {
						t.scrollTo(0, n), e.mobile.document.trigger("silentscroll", {
							x: 0,
							y: n
						})
					}, 20), setTimeout(function() {
						e.event.special.scrollstart.enabled = !0
					}, 150)
				},
				nsNormalizeDict: a,
				nsNormalize: function(t) {
					return t ? a[t] || (a[t] = e.camelCase(e.mobile.ns + t)) : i
				},
				getInheritedTheme: function(e, t) {
					for (var n, i, a = e[0], o = "", r = /ui-(bar|body|overlay)-([a-z])\b/; a && (n = a.className || "", !(n && (i = r.exec(n)) && (o = i[2])));) a = a.parentNode;
					return o || t || "a"
				},
				closestPageData: function(e) {
					return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")
				},
				enhanceable: function(e) {
					return this.haveParents(e, "enhance")
				},
				hijackable: function(e) {
					return this.haveParents(e, "ajax")
				},
				haveParents: function(t, n) {
					if (!e.mobile.ignoreContentEnabled) return t;
					for (var i, a, o, r = t.length, s = e(), l = 0; r > l; l++) {
						for (a = t.eq(l), o = !1, i = t[l]; i;) {
							if ("false" === (i.getAttribute ? i.getAttribute("data-" + e.mobile.ns + n) : "")) {
								o = !0;
								break
							}
							i = i.parentNode
						}
						o || (s = s.add(a))
					}
					return s
				},
				getScreenHeight: function() {
					return t.innerHeight || e.mobile.window.height()
				}
			}, e.mobile), e.fn.jqmData = function(t, n) {
				var a;
				return t !== i && (t && (t = e.mobile.nsNormalize(t)), a = 2 > arguments.length || n === i ? this.data(t) : this.data(t, n)), a
			}, e.jqmData = function(t, n, a) {
				var o;
				return n !== i && (o = e.data(t, n ? e.mobile.nsNormalize(n) : n, a)), o
			}, e.fn.jqmRemoveData = function(t) {
				return this.removeData(e.mobile.nsNormalize(t))
			}, e.jqmRemoveData = function(t, n) {
				return e.removeData(t, e.mobile.nsNormalize(n))
			}, e.fn.removeWithDependents = function() {
				e.removeWithDependents(this)
			}, e.removeWithDependents = function(t) {
				t = e(t), (t.jqmData("dependents") || e()).remove(), t.remove()
			}, e.fn.addDependents = function(t) {
				e.addDependents(e(this), t)
			}, e.addDependents = function(t, n) {
				var i = e(t).jqmData("dependents") || e();
				e(t).jqmData("dependents", e.merge(i, n))
			}, e.fn.getEncodedText = function() {
				return e("<div/>").text(e(this).text()).html()
			}, e.fn.jqmEnhanceable = function() {
				return e.mobile.enhanceable(this)
			}, e.fn.jqmHijackable = function() {
				return e.mobile.hijackable(this)
			};
			var o = e.find,
				r = /:jqmData\(([^)]*)\)/g;
			e.find = function(t, n, i, a) {
				return t = t.replace(r, "[data-" + (e.mobile.ns || "") + "$1]"), o.call(this, t, n, i, a)
			}, e.extend(e.find, o), e.find.matches = function(t, n) {
				return e.find(t, null, null, n)
			}, e.find.matchesSelector = function(t, n) {
				return 0 < e.find(n, null, null, [t]).length
			}
		}(e, this),
		function(e, t) {
			var n = 0,
				i = Array.prototype.slice,
				a = e.cleanData;
			e.cleanData = function(t) {
				for (var n, i = 0; null != (n = t[i]); i++) try {
					e(n).triggerHandler("remove")
				} catch (o) {}
				a(t)
			}, e.widget = function(n, i, a) {
				var o, r, s, l, c = n.split(".")[0];
				n = n.split(".")[1], o = c + "-" + n, a || (a = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
					return !!e.data(t, o)
				}, e[c] = e[c] || {}, r = e[c][n], s = e[c][n] = function(e, n) {
					return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new s(e, n)
				}, e.extend(s, r, {
					version: a.version,
					_proto: e.extend({}, a),
					_childConstructors: []
				}), l = new i, l.options = e.widget.extend({}, l.options), e.each(a, function(t, n) {
					e.isFunction(n) && (a[t] = function() {
						var e = function() {
								return i.prototype[t].apply(this, arguments)
							},
							a = function(e) {
								return i.prototype[t].apply(this, e)
							};
						return function() {
							var t, i = this._super,
								o = this._superApply;
							return this._super = e, this._superApply = a, t = n.apply(this, arguments), this._super = i, this._superApply = o, t
						}
					}())
				}), s.prototype = e.widget.extend(l, {
					widgetEventPrefix: r ? l.widgetEventPrefix : n
				}, a, {
					constructor: s,
					namespace: c,
					widgetName: n,
					widgetFullName: o
				}), r ? (e.each(r._childConstructors, function(t, n) {
					var i = n.prototype;
					e.widget(i.namespace + "." + i.widgetName, s, n._proto)
				}), delete r._childConstructors) : i._childConstructors.push(s), e.widget.bridge(n, s)
			}, e.widget.extend = function(n) {
				for (var a, o, r = i.call(arguments, 1), s = 0, l = r.length; l > s; s++)
					for (a in r[s]) o = r[s][a], r[s].hasOwnProperty(a) && o !== t && (n[a] = e.isPlainObject(o) ? e.isPlainObject(n[a]) ? e.widget.extend({}, n[a], o) : e.widget.extend({}, o) : o);
				return n
			}, e.widget.bridge = function(n, a) {
				var o = a.prototype.widgetFullName || n;
				e.fn[n] = function(r) {
					var s = "string" == typeof r,
						l = i.call(arguments, 1),
						c = this;
					return r = !s && l.length ? e.widget.extend.apply(null, [r].concat(l)) : r, this.each(s ? function() {
						var i, a = e.data(this, o);
						return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (i = a[r].apply(a, l), i !== a && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : t) : e.error("no such method '" + r + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + r + "'")
					} : function() {
						var t = e.data(this, o);
						t ? t.option(r || {})._init() : e.data(this, o, new a(r, this))
					}), c
				}
			}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
				widgetName: "widget",
				widgetEventPrefix: "",
				defaultElement: "<div>",
				options: {
					disabled: !1,
					create: null
				},
				_createWidget: function(t, i) {
					i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
						remove: function(e) {
							e.target === i && this.destroy()
						}
					}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
				},
				_getCreateOptions: e.noop,
				_getCreateEventData: e.noop,
				_create: e.noop,
				_init: e.noop,
				destroy: function() {
					this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
				},
				_destroy: e.noop,
				widget: function() {
					return this.element
				},
				option: function(n, i) {
					var a, o, r, s = n;
					if (0 === arguments.length) return e.widget.extend({}, this.options);
					if ("string" == typeof n)
						if (s = {}, a = n.split("."), n = a.shift(), a.length) {
							for (o = s[n] = e.widget.extend({}, this.options[n]), r = 0; a.length - 1 > r; r++) o[a[r]] = o[a[r]] || {}, o = o[a[r]];
							if (n = a.pop(), i === t) return o[n] === t ? null : o[n];
							o[n] = i
						} else {
							if (i === t) return this.options[n] === t ? null : this.options[n];
							s[n] = i
						}
					return this._setOptions(s), this
				},
				_setOptions: function(e) {
					for (var t in e) this._setOption(t, e[t]);
					return this
				},
				_setOption: function(e, t) {
					return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
				},
				enable: function() {
					return this._setOption("disabled", !1)
				},
				disable: function() {
					return this._setOption("disabled", !0)
				},
				_on: function(n, i, a) {
					var o, r = this;
					"boolean" != typeof n && (a = i, i = n, n = !1), a ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (a = i, i = this.element, o = this.widget()), e.each(a, function(a, s) {
						function l() {
							return n || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : t
						}
						"string" != typeof s && (l.guid = s.guid = s.guid || l.guid || e.guid++);
						var c = a.match(/^(\w+)\s*(.*)$/),
							u = c[1] + r.eventNamespace;
						(c = c[2]) ? o.delegate(c, u, l): i.bind(u, l)
					})
				},
				_off: function(e, t) {
					t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
				},
				_delay: function(e, t) {
					var n = this;
					return setTimeout(function() {
						return ("string" == typeof e ? n[e] : e).apply(n, arguments)
					}, t || 0)
				},
				_hoverable: function(t) {
					this.hoverable = this.hoverable.add(t), this._on(t, {
						mouseenter: function(t) {
							e(t.currentTarget).addClass("ui-state-hover")
						},
						mouseleave: function(t) {
							e(t.currentTarget).removeClass("ui-state-hover")
						}
					})
				},
				_focusable: function(t) {
					this.focusable = this.focusable.add(t), this._on(t, {
						focusin: function(t) {
							e(t.currentTarget).addClass("ui-state-focus")
						},
						focusout: function(t) {
							e(t.currentTarget).removeClass("ui-state-focus")
						}
					})
				},
				_trigger: function(t, n, i) {
					var a, o = this.options[t];
					if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], t = n.originalEvent)
						for (a in t) a in n || (n[a] = t[a]);
					return this.element.trigger(n, i), !(e.isFunction(o) && !1 === o.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
				}
			}, e.each({
				show: "fadeIn",
				hide: "fadeOut"
			}, function(t, n) {
				e.Widget.prototype["_" + t] = function(i, a, o) {
					"string" == typeof a && (a = {
						effect: a
					});
					var r, s = a ? !0 === a || "number" == typeof a ? n : a.effect || n : t;
					a = a || {}, "number" == typeof a && (a = {
						duration: a
					}), r = !e.isEmptyObject(a), a.complete = o, a.delay && i.delay(a.delay), r && e.effects && e.effects.effect[s] ? i[t](a) : s !== t && i[s] ? i[s](a.duration, a.easing, o) : i.queue(function(n) {
						e(this)[t](), o && o.call(i[0]), n()
					})
				}
			})
		}(e),
		function(e, t) {
			e.widget("mobile.widget", {
				_createWidget: function() {
					e.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
				},
				_getCreateOptions: function() {
					var n = this.element,
						i = {};
					return e.each(this.options, function(e) {
						var a = n.jqmData(e.replace(/[A-Z]/g, function(e) {
							return "-" + e.toLowerCase()
						}));
						a !== t && (i[e] = a)
					}), i
				},
				enhanceWithin: function(t, n) {
					this.enhance(e(this.options.initSelector, e(t)), n)
				},
				enhance: function(t, n) {
					var i, a, o = e(t),
						o = e.mobile.enhanceable(o);
					n && o.length && (i = e.mobile.closestPageData(o), a = i && i.keepNativeSelector() || "", o = o.not(a)), o[this.widgetName]()
				},
				raise: function(e) {
					throw "Widget [" + this.widgetName + "]: " + e
				}
			})
		}(e),
		function(e) {
			e.extend(e.mobile, {
				loadingMessageTextVisible: i,
				loadingMessageTheme: i,
				loadingMessage: i,
				showPageLoadingMsg: function(t, n, i) {
					e.mobile.loading("show", t, n, i)
				},
				hidePageLoadingMsg: function() {
					e.mobile.loading("hide")
				},
				loading: function() {
					this.loaderWidget.loader.apply(this.loaderWidget, arguments)
				}
			});
			var t = e("html"),
				n = e.mobile.window;
			e.widget("mobile.loader", {
				options: {
					theme: "a",
					textVisible: !1,
					html: "",
					text: "loading"
				},
				defaultHtml: "<div class='ui-loader'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>",
				fakeFixLoader: function() {
					var t = e("." + e.mobile.activeBtnClass).first();
					this.element.css({
						top: e.support.scrollTop && n.scrollTop() + n.height() / 2 || t.length && t.offset().top || 100
					})
				},
				checkLoaderPosition: function() {
					var t = this.element.offset(),
						i = n.scrollTop(),
						a = e.mobile.getScreenHeight();
					(i > t.top || t.top - i > a) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), n.unbind("scroll", this.checkLoaderPosition).bind("scroll", e.proxy(this.fakeFixLoader, this)))
				},
				resetHtml: function() {
					this.element.html(e(this.defaultHtml).html())
				},
				show: function(a, o, r) {
					var s, l, c;
					this.resetHtml(), "object" === e.type(a) ? (c = e.extend({}, this.options, a), a = c.theme || e.mobile.loadingMessageTheme) : (c = this.options, a = a || e.mobile.loadingMessageTheme || c.theme), l = o || e.mobile.loadingMessage || c.text, t.addClass("ui-loading"), (!1 !== e.mobile.loadingMessage || c.html) && (s = e.mobile.loadingMessageTextVisible !== i ? e.mobile.loadingMessageTextVisible : c.textVisible, this.element.attr("class", "ui-loader ui-corner-all ui-body-" + a + " ui-loader-" + (s || o || a.text ? "verbose" : "default") + (c.textonly || r ? " ui-loader-textonly" : "")), c.html ? this.element.html(c.html) : this.element.find("h1").text(l), this.element.appendTo(e.mobile.pageContainer), this.checkLoaderPosition(), n.bind("scroll", e.proxy(this.checkLoaderPosition, this)))
				},
				hide: function() {
					t.removeClass("ui-loading"), e.mobile.loadingMessage && this.element.removeClass("ui-loader-fakefix"), e.mobile.window.unbind("scroll", this.fakeFixLoader), e.mobile.window.unbind("scroll", this.checkLoaderPosition)
				}
			}), n.bind("pagecontainercreate", function() {
				e.mobile.loaderWidget = e.mobile.loaderWidget || e(e.mobile.loader.prototype.defaultHtml).loader()
			})
		}(e, this),
		function(e, t, i) {
			function a(e) {
				return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
			}
			var o, r = e.event.special,
				s = n.documentMode,
				l = "onhashchange" in t && (s === i || s > 7);
			e.fn.hashchange = function(e) {
				return e ? this.bind("hashchange", e) : this.trigger("hashchange")
			}, e.fn.hashchange.delay = 50, r.hashchange = e.extend(r.hashchange, {
				setup: function() {
					return l ? !1 : (e(o.start), i)
				},
				teardown: function() {
					return l ? !1 : (e(o.stop), i)
				}
			}), o = function() {
				function o() {
					var n = a(),
						i = d(c);
					n !== c ? (m(c = n, i), e(t).trigger("hashchange")) : i !== c && (location.href = location.href.replace(/#.*/, "") + i), r = setTimeout(o, e.fn.hashchange.delay)
				}
				var r, s = {},
					c = a(),
					u = function(e) {
						return e
					},
					m = u,
					d = u;
				return s.start = function() {
					r || o()
				}, s.stop = function() {
					r && clearTimeout(r), r = i
				}, t.attachEvent && !t.addEventListener && !l && function() {
					var t, i;
					s.start = function() {
						t || (i = e.fn.hashchange.src, i = i && i + a(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
							i || m(a()), o()
						}).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, n.onpropertychange = function() {
							try {
								"title" === event.propertyName && (t.document.title = n.title)
							} catch (e) {}
						})
					}, s.stop = u, d = function() {
						return a(t.location.href)
					}, m = function(i, a) {
						var o = t.document,
							r = e.fn.hashchange.domain;
						i !== a && (o.title = n.title, o.open(), r && o.write('<script>document.domain="' + r + '"</script>'), o.close(), t.location.hash = i)
					}
				}(), s
			}()
		}(e, this),
		function(e) {
			t.matchMedia = t.matchMedia || function(e) {
				var t, n = e.documentElement,
					i = n.firstElementChild || n.firstChild,
					a = e.createElement("body"),
					o = e.createElement("div");
				return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(o),
					function(e) {
						return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(a, i), t = 42 === o.offsetWidth, n.removeChild(a), {
							matches: t,
							media: e
						}
					}
			}(n), e.mobile.media = function(e) {
				return t.matchMedia(e).matches
			}
		}(e),
		function(e) {
			var t = {
				touch: "ontouchend" in n
			};
			e.mobile.support = e.mobile.support || {}, e.extend(e.support, t), e.extend(e.mobile.support, t)
		}(e), e.extend(e.support, {
			orientation: "orientation" in t && "onorientationchange" in t
		}),
		function(e, i) {
			function a(e) {
				var t = e.charAt(0).toUpperCase() + e.substr(1);
				e = (e + " " + l.join(t + " ") + t).split(" ");
				for (var n in e)
					if (s[e[n]] !== i) return !0
			}

			function o(e, t, i) {
				var a, o = n.createElement("div"),
					r = function(e) {
						return e.charAt(0).toUpperCase() + e.substr(1)
					},
					s = function(n) {
						var i = ("" === n ? "" : "-" + n.charAt(0).toLowerCase() + n.substr(1) + "-") + e + ": " + t + ";";
						n = r(n), n += "" === n ? e : r(e), o.setAttribute("style", i), o.style[n] && (a = !0)
					};
				i = i ? i : l;
				for (var c = 0; i.length > c; c++) s(i[c]);
				return !!a
			}
			var r = e("<body>").prependTo("html"),
				s = r[0].style,
				l = ["Webkit", "Moz", "O"],
				c = "palmGetResource" in t,
				u = t.opera,
				m = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini),
				d = t.blackberry && !a("-webkit-transform");
			e.extend(e.mobile, {
				browser: {}
			}), e.mobile.browser.oldIE = function() {
				var e = 3,
					t = n.createElement("div"),
					i = t.all || [];
				do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"; while (i[0]);
				return e > 4 ? e : !e
			}(), e.extend(e.support, {
				cssTransitions: "WebKitTransitionEvent" in t || o("transition", "height 100ms linear", ["Webkit", "Moz", ""]) && !e.mobile.browser.oldIE && !u,
				pushState: "pushState" in history && "replaceState" in history && !(0 <= t.navigator.userAgent.indexOf("Firefox") && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
				mediaquery: e.mobile.media("only all"),
				cssPseudoElement: !!a("content"),
				touchOverflow: !!a("overflowScrolling"),
				cssTransform3d: function() {
					var a = e.mobile.media("(-" + l.join("-transform-3d),(-") + "-transform-3d),(transform-3d)");
					if (a) return !!a;
					var o = n.createElement("div"),
						s = {
							MozTransform: "-moz-transform",
							transform: "transform"
						};
					r.append(o);
					for (var c in s) o.style[c] !== i && (o.style[c] = "translate3d( 100px, 1px, 1px )", a = t.getComputedStyle(o).getPropertyValue(s[c]));
					return !!a && "none" !== a
				}(),
				boxShadow: !!a("boxShadow") && !d,
				fixedPosition: function() {
					var e = navigator.userAgent,
						n = navigator.platform,
						i = e.match(/AppleWebKit\/([0-9]+)/),
						i = !!i && i[1],
						a = e.match(/Fennec\/([0-9]+)/),
						a = !!a && a[1],
						o = e.match(/Opera Mobi\/([0-9]+)/),
						r = !!o && o[1];
					return (-1 < n.indexOf("iPhone") || -1 < n.indexOf("iPad") || -1 < n.indexOf("iPod")) && i && 534 > i || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || o && 7458 > r || -1 < e.indexOf("Android") && i && 533 > i || a && 6 > a || "palmGetResource" in t && i && 534 > i || -1 < e.indexOf("MeeGo") && -1 < e.indexOf("NokiaBrowser/8.5.0") ? !1 : !0
				}(),
				scrollTop: ("pageXOffset" in t || "scrollTop" in n.documentElement || "scrollTop" in r[0]) && !c && !m,
				dynamicBaseTag: function() {
					var t, n, i = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
						a = e("head base"),
						o = null,
						s = "";
					return a.length ? s = a.attr("href") : a = o = e("<base>", {
						href: i
					}).appendTo("head"), t = e("<a href='testurl' />").prependTo(r), n = t[0].href, a[0].href = s || location.pathname, o && o.remove(), 0 === n.indexOf(i)
				}(),
				cssPointerEvents: function() {
					var e, i = n.createElement("x"),
						a = n.documentElement,
						o = t.getComputedStyle;
					return "pointerEvents" in i.style ? (i.style.pointerEvents = "auto", i.style.pointerEvents = "x", a.appendChild(i), e = o && "auto" === o(i, "").pointerEvents, a.removeChild(i), !!e) : !1
				}(),
				boundingRect: n.createElement("div").getBoundingClientRect !== i
			}), r.remove(), c = function() {
				var e = t.navigator.userAgent;
				return -1 < e.indexOf("Nokia") && (-1 < e.indexOf("Symbian/3") || -1 < e.indexOf("Series60/5")) && -1 < e.indexOf("AppleWebKit") && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
			}(), e.mobile.gradeA = function() {
				return (e.support.mediaquery || e.mobile.browser.oldIE && 7 <= e.mobile.browser.oldIE) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
			}, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || m || c, c && e(function() {
				e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
			}), e.support.boxShadow || e("html").addClass("ui-mobile-nosupport-boxshadow")
		}(e),
		function(e, t) {
			var n, i = e.mobile.window;
			e.event.special.navigate = n = {
				bound: !1,
				pushStateEnabled: !0,
				originalEventName: t,
				isPushStateEnabled: function() {
					return e.support.pushState && !0 === e.mobile.pushStateEnabled && this.isHashChangeEnabled()
				},
				isHashChangeEnabled: function() {
					return !0 === e.mobile.hashListeningEnabled
				},
				popstate: function(t) {
					var n = new e.Event("navigate"),
						a = new e.Event("beforenavigate"),
						o = t.originalEvent.state || {};
					location.href, i.trigger(a), a.isDefaultPrevented() || (t.historyState && e.extend(o, t.historyState), n.originalEvent = t, setTimeout(function() {
						i.trigger(n, {
							state: o
						})
					}, 0))
				},
				hashchange: function(t) {
					var n = new e.Event("navigate"),
						a = new e.Event("beforenavigate");
					i.trigger(a), a.isDefaultPrevented() || (n.originalEvent = t, i.trigger(n, {
						state: t.hashchangeState || {}
					}))
				},
				setup: function() {
					n.bound || (n.bound = !0, n.isPushStateEnabled() ? (n.originalEventName = "popstate", i.bind("popstate.navigate", n.popstate)) : n.isHashChangeEnabled() && (n.originalEventName = "hashchange", i.bind("hashchange.navigate", n.hashchange)))
				}
			}
		}(e),
		function(e, n) {
			var i, a;
			e.mobile.path = i = {
				uiStateKey: "&ui-state",
				urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
				getLocation: function(e) {
					var t = e ? this.parseUrl(e) : location;
					return e = this.parseUrl(e || location.href).hash, e = "#" === e ? "" : e, t.protocol + "//" + t.host + t.pathname + t.search + e
				},
				parseLocation: function() {
					return this.parseUrl(this.getLocation())
				},
				parseUrl: function(t) {
					return "object" === e.type(t) ? t : (t = i.urlParseRE.exec(t || "") || [], {
						href: t[0] || "",
						hrefNoHash: t[1] || "",
						hrefNoSearch: t[2] || "",
						domain: t[3] || "",
						protocol: t[4] || "",
						doubleSlash: t[5] || "",
						authority: t[6] || "",
						username: t[8] || "",
						password: t[9] || "",
						host: t[10] || "",
						hostname: t[11] || "",
						port: t[12] || "",
						pathname: t[13] || "",
						directory: t[14] || "",
						filename: t[15] || "",
						search: t[16] || "",
						hash: t[17] || ""
					})
				},
				makePathAbsolute: function(e, t) {
					if (e && "/" === e.charAt(0)) return e;
					e = e || "";
					for (var n = (t = t ? t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? t.split("/") : [], i = e.split("/"), a = 0; i.length > a; a++) {
						var o = i[a];
						switch (o) {
							case ".":
								break;
							case "..":
								n.length && n.pop();
								break;
							default:
								n.push(o)
						}
					}
					return "/" + n.join("/")
				},
				isSameDomain: function(e, t) {
					return i.parseUrl(e).domain === i.parseUrl(t).domain
				},
				isRelativeUrl: function(e) {
					return "" === i.parseUrl(e).protocol
				},
				isAbsoluteUrl: function(e) {
					return "" !== i.parseUrl(e).protocol
				},
				makeUrlAbsolute: function(e, t) {
					if (!i.isRelativeUrl(e)) return e;
					t === n && (t = this.documentBase);
					var a = i.parseUrl(e),
						o = i.parseUrl(t),
						r = a.protocol || o.protocol,
						s = a.protocol ? a.doubleSlash : a.doubleSlash || o.doubleSlash,
						l = a.authority || o.authority,
						c = "" !== a.pathname,
						u = i.makePathAbsolute(a.pathname || o.filename, o.pathname);
					return r + s + l + u + (a.search || !c && o.search || "") + a.hash
				},
				addSearchParams: function(t, n) {
					var a = i.parseUrl(t),
						o = "object" == typeof n ? e.param(n) : n,
						r = a.search || "?";
					return a.hrefNoSearch + r + ("?" !== r.charAt(r.length - 1) ? "&" : "") + o + (a.hash || "")
				},
				convertUrlToDataUrl: function(e) {
					var n = i.parseUrl(e);
					return i.isEmbeddedPage(n) ? n.hash.split("&ui-state=dialog")[0].replace(/^#/, "").replace(/\?.*$/, "") : i.isSameDomain(n, this.documentBase) ? n.hrefNoHash.replace(this.documentBase.domain, "").split("&ui-state=dialog")[0] : t.decodeURIComponent(e)
				},
				get: function(e) {
					return e === n && (e = i.parseLocation().hash), i.stripHash(e).replace(/[^\/]*\.[^\/*]+$/, "")
				},
				set: function(e) {
					location.hash = e
				},
				isPath: function(e) {
					return /\//.test(e)
				},
				clean: function(e) {
					return e.replace(this.documentBase.domain, "")
				},
				stripHash: function(e) {
					return e.replace(/^#/, "")
				},
				stripQueryParams: function(e) {
					return e.replace(/\?.*$/, "")
				},
				cleanHash: function(e) {
					return i.stripHash(e.replace(/\?.*$/, "").replace("&ui-state=dialog", ""))
				},
				isHashValid: function(e) {
					return /^#[^#]+$/.test(e)
				},
				isExternal: function(e) {
					return e = i.parseUrl(e), e.protocol && e.domain !== this.documentUrl.domain ? !0 : !1
				},
				hasProtocol: function(e) {
					return /^(:?\w+:)/.test(e)
				},
				isEmbeddedPage: function(e) {
					return e = i.parseUrl(e), "" !== e.protocol ? !this.isPath(e.hash) && e.hash && (e.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && e.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(e.href)
				},
				squash: function(e, t) {
					var n, a, o, r, s = this.isPath(e),
						l = this.parseUrl(e),
						c = l.hash,
						u = "";
					return t = t || (i.isPath(e) ? i.getLocation() : i.getDocumentUrl()), a = s ? i.stripHash(e) : e, a = i.isPath(l.hash) ? i.stripHash(l.hash) : a, r = a.indexOf(this.uiStateKey), r > -1 && (u = a.slice(r), a = a.slice(0, r)), n = i.makeUrlAbsolute(a, t), o = this.parseUrl(n).search, s ? ((i.isPath(c) || 0 === c.replace("#", "").indexOf(this.uiStateKey)) && (c = ""), u && -1 === c.indexOf(this.uiStateKey) && (c += u), -1 === c.indexOf("#") && "" !== c && (c = "#" + c), n = i.parseUrl(n), n = n.protocol + "//" + n.host + n.pathname + o + c) : n += -1 < n.indexOf("#") ? u : "#" + u, n
				},
				isPreservableHash: function(e) {
					return 0 === e.replace("#", "").indexOf(this.uiStateKey)
				}
			}, i.documentUrl = i.parseLocation(), a = e("head").find("base"), i.documentBase = a.length ? i.parseUrl(i.makeUrlAbsolute(a.attr("href"), i.documentUrl.href)) : i.documentUrl, i.documentBaseDiffers = i.documentUrl.hrefNoHash !== i.documentBase.hrefNoHash, i.getDocumentUrl = function(t) {
				return t ? e.extend({}, i.documentUrl) : i.documentUrl.href
			}, i.getDocumentBase = function(t) {
				return t ? e.extend({}, i.documentBase) : i.documentBase.href
			}
		}(e),
		function(e, t) {
			e.mobile.path, e.mobile.History = function(e, t) {
				this.stack = e || [], this.activeIndex = t || 0
			}, e.extend(e.mobile.History.prototype, {
				getActive: function() {
					return this.stack[this.activeIndex]
				},
				getLast: function() {
					return this.stack[this.previousIndex]
				},
				getNext: function() {
					return this.stack[this.activeIndex + 1]
				},
				getPrev: function() {
					return this.stack[this.activeIndex - 1]
				},
				add: function(e, t) {
					t = t || {}, this.getNext() && this.clearForward(), t.hash && -1 === t.hash.indexOf("#") && (t.hash = "#" + t.hash), t.url = e, this.stack.push(t), this.activeIndex = this.stack.length - 1
				},
				clearForward: function() {
					this.stack = this.stack.slice(0, this.activeIndex + 1)
				},
				find: function(e, t, n) {
					t = t || this.stack;
					var i, a, o, r = t.length;
					for (a = 0; r > a && (i = t[a], decodeURIComponent(e) !== decodeURIComponent(i.url) && decodeURIComponent(e) !== decodeURIComponent(i.hash) || (o = a, !n)); a++);
					return o
				},
				closest: function(e) {
					var n, i = this.activeIndex;
					return n = this.find(e, this.stack.slice(0, i)), n === t && (n = this.find(e, this.stack.slice(i), !0), n = n === t ? n : n + i), n
				},
				direct: function(n) {
					var i = this.closest(n.url),
						a = this.activeIndex;
					i !== t && (this.activeIndex = i, this.previousIndex = a), a > i ? (n.present || n.back || e.noop)(this.getActive(), "back") : i > a ? (n.present || n.forward || e.noop)(this.getActive(), "forward") : i === t && n.missing && n.missing(this.getActive())
				}
			})
		}(e),
		function(e) {
			var a = e.mobile.path,
				o = location.href;
			e.mobile.Navigator = function(t) {
				this.history = t, this.ignoreInitialHashChange = !0, e.mobile.window.bind({
					"popstate.history": e.proxy(this.popstate, this),
					"hashchange.history": e.proxy(this.hashchange, this)
				})
			}, e.extend(e.mobile.Navigator.prototype, {
				squash: function(i, o) {
					var r, s, l = a.isPath(i) ? a.stripHash(i) : i;
					return s = a.squash(i), r = e.extend({
						hash: l,
						url: s
					}, o), t.history.replaceState(r, r.title || n.title, s), r
				},
				hash: function(e, t) {
					var n, i;
					return n = a.parseUrl(e), i = a.parseLocation(), i.pathname + i.search === n.pathname + n.search ? n = n.hash ? n.hash : n.pathname + n.search : a.isPath(e) ? (n = a.parseUrl(t), n = n.pathname + n.search + (a.isPreservableHash(n.hash) ? n.hash.replace("#", "") : "")) : n = e, n
				},
				go: function(i, o, r) {
					var s, l, c, u = e.event.special.navigate.isPushStateEnabled();
					s = a.squash(i), l = this.hash(i, s), r && l !== a.stripHash(a.parseLocation().hash) && (this.preventNextHashChange = r), this.preventHashAssignPopState = !0, t.location.hash = l, this.preventHashAssignPopState = !1, o = e.extend({
						url: s,
						hash: l,
						title: n.title
					}, o), u && (c = new e.Event("popstate"), c.originalEvent = {
						type: "popstate",
						state: null
					}, this.squash(i, o), r || (this.ignorePopState = !0, e.mobile.window.trigger(c))), this.history.add(o.url, o)
				},
				popstate: function(t) {
					var n, r;
					return e.event.special.navigate.isPushStateEnabled() ? this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, t.stopImmediatePropagation(), i) : this.ignorePopState ? (this.ignorePopState = !1, i) : !t.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === o) ? (t.preventDefault(), i) : (n = a.parseLocation().hash, !t.originalEvent.state && n ? (r = this.squash(n), this.history.add(r.url, r), t.historyState = r, i) : (this.history.direct({
						url: (t.originalEvent.state || {}).url || n,
						present: function(n, i) {
							t.historyState = e.extend({}, n), t.historyState.direction = i
						}
					}), i)) : void 0
				},
				hashchange: function(t) {
					var o, r;
					if (e.event.special.navigate.isHashChangeEnabled() && !e.event.special.navigate.isPushStateEnabled()) {
						if (this.preventNextHashChange) return;
						this.preventNextHashChange = !1, t.stopImmediatePropagation(), i, o = this.history, r = a.parseLocation().hash, this.history.direct({
							url: r,
							present: function(n, i) {
								t.hashchangeState = e.extend({}, n), t.hashchangeState.direction = i
							},
							missing: function() {
								o.add(r, {
									hash: r,
									title: n.title
								})
							}
						})
					}
				}
			})
		}(e),
		function(e) {
			e.mobile.navigate = function(t, n, i) {
				e.mobile.navigate.navigator.go(t, n, i)
			}, e.mobile.navigate.history = new e.mobile.History, e.mobile.navigate.navigator = new e.mobile.Navigator(e.mobile.navigate.history);
			var t = e.mobile.path.parseLocation();
			e.mobile.navigate.history.add(t.href, {
				hash: t.hash
			})
		}(e),
		function(e, t, n, i) {
			function a(e) {
				for (; e && e.originalEvent !== i;) e = e.originalEvent;
				return e
			}

			function o(t) {
				for (var n, i, a = {}; t;) {
					n = e.data(t, y);
					for (i in n) n[i] && (a[i] = a.hasVirtualBinding = !0);
					t = t.parentNode
				}
				return a
			}

			function r() {
				T && (clearTimeout(T), T = 0), T = setTimeout(function() {
					j = T = 0, k.length = 0, D = !1, L = !0
				}, e.vmouse.resetTimerDuration)
			}

			function s(t, n, o) {
				var r, s;
				if (!(s = o && o[t])) {
					if (o = !o) e: {
						o = n.target;
						for (var l; o;) {
							if (l = e.data(o, y), l && (!t || l[t])) break e;
							o = o.parentNode
						}
						o = null
					}
					s = o
				}
				if (s) {
					r = n;
					var c, u, m, d, p;
					if (l = r.type, r = e.Event(r), r.type = t, c = r.originalEvent, t = e.event.props, -1 < l.search(/^(mouse|click)/) && (t = x), c)
						for (o = t.length, m; o;) m = t[--o], r[m] = c[m];
					if (-1 < l.search(/mouse(down|up)|click/) && !r.which && (r.which = 1), -1 !== l.search(/^touch/) && (u = a(c), l = u.touches, d = u.changedTouches, p = l && l.length ? l[0] : d && d.length ? d[0] : i))
						for (c = 0, u = v.length; u > c; c++) m = v[c], r[m] = p[m];
					e(n.target).trigger(r)
				}
				return r
			}

			function l(t) {
				var n = e.data(t.target, b);
				D || j && j === n || (n = s("v" + t.type, t)) && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation())
			}

			function c(t) {
				var n, i, r = a(t).touches;
				r && 1 === r.length && (n = t.target, i = o(n), i.hasVirtualBinding) && (j = P++, e.data(n, b, j), T && (clearTimeout(T), T = 0), S = L = !1, n = a(t).touches[0], w = n.pageX, C = n.pageY, s("vmouseover", t, i), s("vmousedown", t, i))
			}

			function u(e) {
				L || (S || s("vmousecancel", e, o(e.target)), S = !0, r())
			}

			function m(t) {
				if (!L) {
					var n = a(t).touches[0],
						i = S,
						l = e.vmouse.moveDistanceThreshold,
						c = o(t.target);
					(S = S || Math.abs(n.pageX - w) > l || Math.abs(n.pageY - C) > l) && !i && s("vmousecancel", t, c), s("vmousemove", t, c), r()
				}
			}

			function d(e) {
				if (!L) {
					L = !0;
					var t, n = o(e.target);
					if (s("vmouseup", e, n), !S) {
						var i = s("vclick", e, n);
						i && i.isDefaultPrevented() && (t = a(e).changedTouches[0], k.push({
							touchID: j,
							x: t.clientX,
							y: t.clientY
						}), D = !0)
					}
					s("vmouseout", e, n), S = !1, r()
				}
			}

			function p(t) {
				var n;
				if (t = e.data(t, y))
					for (n in t)
						if (t[n]) return !0;
				return !1
			}

			function h() {}

			function g(t) {
				var n = t.substr(1);
				return {
					setup: function() {
						p(this) || e.data(this, y, {}), e.data(this, y)[t] = !0, E[t] = (E[t] || 0) + 1, 1 === E[t] && I.bind(n, l), e(this).bind(n, h), R && (E.touchstart = (E.touchstart || 0) + 1, 1 === E.touchstart && I.bind("touchstart", c).bind("touchend", d).bind("touchmove", m).bind("scroll", u))
					},
					teardown: function() {
						--E[t], E[t] || I.unbind(n, l), R && (--E.touchstart, E.touchstart || I.unbind("touchstart", c).unbind("touchmove", m).unbind("touchend", d).unbind("scroll", u));
						var i = e(this),
							a = e.data(this, y);
						a && (a[t] = !1), i.unbind(n, h), p(this) || i.removeData(y)
					}
				}
			}
			var f, y = "virtualMouseBindings",
				b = "virtualTouchID";
			t = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" ");
			var v = "clientX clientY pageX pageY screenX screenY".split(" "),
				x = e.event.props.concat(e.event.mouseHooks ? e.event.mouseHooks.props : []),
				E = {},
				T = 0,
				w = 0,
				C = 0,
				S = !1,
				k = [],
				D = !1,
				L = !1,
				R = "addEventListener" in n,
				I = e(n),
				P = 1,
				j = 0;
			e.vmouse = {
				moveDistanceThreshold: 10,
				clickDistanceThreshold: 10,
				resetTimerDuration: 1500
			};
			for (var M = 0; t.length > M; M++) e.event.special[t[M]] = g(t[M]);
			R && n.addEventListener("click", function(t) {
				var n, a, o, r, s, l = k.length,
					c = t.target;
				if (l)
					for (n = t.clientX, a = t.clientY, f = e.vmouse.clickDistanceThreshold, o = c; o;) {
						for (r = 0; l > r; r++)
							if (s = k[r], o === c && f > Math.abs(s.x - n) && f > Math.abs(s.y - a) || e.data(o, b) === s.touchID) return t.preventDefault(), t.stopPropagation(), i;
						o = o.parentNode
					}
			}, !0)
		}(e, t, n),
		function(e, t, i) {
			function a(t, n, i) {
				var a = i.type;
				i.type = n, e.event.dispatch.call(t, i), i.type = a
			}
			var o = e(n);
			e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
				e.fn[n] = function(e) {
					return e ? this.bind(n, e) : this.trigger(n)
				}, e.attrFn && (e.attrFn[n] = !0)
			});
			var r = (t = e.mobile.support.touch) ? "touchstart" : "mousedown",
				s = t ? "touchend" : "mouseup",
				l = t ? "touchmove" : "mousemove";
			e.event.special.scrollstart = {
				enabled: !0,
				setup: function() {
					function t(e, t) {
						n = t, a(o, n ? "scrollstart" : "scrollstop", e)
					}
					var n, i, o = this;
					e(o).bind("touchmove scroll", function(a) {
						e.event.special.scrollstart.enabled && (n || t(a, !0), clearTimeout(i), i = setTimeout(function() {
							t(a, !1)
						}, 50))
					})
				}
			}, e.event.special.tap = {
				tapholdThreshold: 750,
				setup: function() {
					var t = this,
						n = e(t);
					n.bind("vmousedown", function(i) {
						function r() {
							clearTimeout(c)
						}

						function s() {
							r(), n.unbind("vclick", l).unbind("vmouseup", r), o.unbind("vmousecancel", s)
						}

						function l(e) {
							s(), u === e.target && a(t, "tap", e)
						}
						if (!i.which || 1 === i.which) {
							var c, u = i.target;
							i.originalEvent, n.bind("vmouseup", r).bind("vclick", l), o.bind("vmousecancel", s), c = setTimeout(function() {
								a(t, "taphold", e.Event("taphold", {
									target: u
								}))
							}, e.event.special.tap.tapholdThreshold)
						}
					})
				}
			}, e.event.special.swipe = {
				scrollSupressionThreshold: 30,
				durationThreshold: 1e3,
				horizontalDistanceThreshold: 30,
				verticalDistanceThreshold: 75,
				start: function(t) {
					var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
					return {
						time: (new Date).getTime(),
						coords: [n.pageX, n.pageY],
						origin: e(t.target)
					}
				},
				stop: function(e) {
					return e = e.originalEvent.touches ? e.originalEvent.touches[0] : e, {
						time: (new Date).getTime(),
						coords: [e.pageX, e.pageY]
					}
				},
				handleSwipe: function(t, n) {
					n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && t.origin.trigger("swipe").trigger(t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight")
				},
				setup: function() {
					var t = e(this);
					t.bind(r, function(n) {
						function a(t) {
							r && (o = e.event.special.swipe.stop(t), Math.abs(r.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
						}
						var o, r = e.event.special.swipe.start(n);
						t.bind(l, a).one(s, function() {
							t.unbind(l, a), r && o && e.event.special.swipe.handleSwipe(r, o), r = o = i
						})
					})
				}
			}, e.each({
				scrollstop: "scrollstart",
				taphold: "tap",
				swipeleft: "swipe",
				swiperight: "swipe"
			}, function(t, n) {
				e.event.special[t] = {
					setup: function() {
						e(this).bind(n, e.noop)
					}
				}
			})
		}(e, this),
		function(e) {
			e.event.special.throttledresize = {
				setup: function() {
					e(this).bind("resize", a)
				},
				teardown: function() {
					e(this).unbind("resize", a)
				}
			};
			var t, n, i, a = function() {
					n = (new Date).getTime(), i = n - o, i >= 250 ? (o = n, e(this).trigger("throttledresize")) : (t && clearTimeout(t), t = setTimeout(a, 250 - i))
				},
				o = 0
		}(e),
		function(e, t) {
			function a() {
				var e = o();
				e !== r && (r = e, c.trigger(u))
			}
			var o, r, s, l, c = e(t),
				u = "orientationchange",
				m = {
					0: !0,
					180: !0
				};
			e.support.orientation && (s = t.innerWidth || c.width(), l = t.innerHeight || c.height(), s = s > l && s - l > 50, l = m[t.orientation], (s && l || !s && !l) && (m = {
				"-90": !0,
				90: !0
			})), e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
				setup: function() {
					return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (r = o(), c.bind("throttledresize", a), i)
				},
				teardown: function() {
					return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (c.unbind("throttledresize", a), i)
				},
				add: function(e) {
					var t = e.handler;
					e.handler = function(e) {
						return e.orientation = o(), t.apply(this, arguments)
					}
				}
			}), e.event.special.orientationchange.orientation = o = function() {
				var i = !0,
					a = n.documentElement;
				return i = e.support.orientation ? m[t.orientation] : a && 1.1 > a.clientWidth / a.clientHeight, i ? "portrait" : "landscape"
			}, e.fn[u] = function(e) {
				return e ? this.bind(u, e) : this.trigger(u)
			}, e.attrFn && (e.attrFn[u] = !0)
		}(e, this),
		function(e) {
			e.widget("mobile.page", e.mobile.widget, {
				options: {
					theme: "c",
					domCache: !1,
					keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
				},
				_create: function() {
					return !1 === this._trigger("beforecreate") ? !1 : (this.element.attr("tabindex", "0").addClass("ui-page ui-body-" + this.options.theme), this._on(this.element, {
						pagebeforehide: "removeContainerBackground",
						pagebeforeshow: "_handlePageBeforeShow"
					}), i)
				},
				_handlePageBeforeShow: function() {
					this.setContainerBackground()
				},
				removeContainerBackground: function() {
					e.mobile.pageContainer.removeClass("ui-overlay-" + e.mobile.getInheritedTheme(this.element.parent()))
				},
				setContainerBackground: function(t) {
					this.options.theme && e.mobile.pageContainer.addClass("ui-overlay-" + (t || this.options.theme))
				},
				keepNativeSelector: function() {
					var t = this.options;
					return t.keepNative && e.trim(t.keepNative) && t.keepNative !== t.keepNativeDefault ? [t.keepNative, t.keepNativeDefault].join(", ") : t.keepNativeDefault
				}
			})
		}(e),
		function(e, t, n) {
			var i = function(i) {
					return i === n && (i = !0),
						function(n, a, o, r) {
							var s = new e.Deferred,
								l = a ? " reverse" : "",
								c = e.mobile.urlHistory.getActive().lastScroll || e.mobile.defaultHomeScroll,
								u = e.mobile.getScreenHeight(),
								m = !1 !== e.mobile.maxTransitionWidth && e.mobile.window.width() > e.mobile.maxTransitionWidth,
								d = !e.support.cssTransitions || m || !n || "none" === n || Math.max(e.mobile.window.scrollTop(), c) > e.mobile.getMaxScrollForTransition(),
								p = function() {
									e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + n)
								},
								h = function() {
									e.event.special.scrollstart.enabled = !1, t.scrollTo(0, c), setTimeout(function() {
										e.event.special.scrollstart.enabled = !0
									}, 150)
								},
								g = function() {
									r.removeClass(e.mobile.activePageClass + " out in reverse " + n).height("")
								},
								m = function() {
									r && i && g(), o.css("z-index", -10), o.addClass(e.mobile.activePageClass + " ui-page-pre-in"), e.mobile.focusPage(o), o.height(u + c), h(), o.css("z-index", ""), d || o.animationComplete(f), o.removeClass(" ui-page-pre-in").addClass(n + " in" + l), d && f()
								},
								f = function() {
									i || r && g(), o.removeClass("out in reverse " + n).height(""), p(), e.mobile.window.scrollTop() !== c && h(), s.resolve(n, a, o, r, !0)
								};
							return p(), r && !d ? (i ? r.animationComplete(m) : m(), r.height(u + e.mobile.window.scrollTop()).addClass(n + " out" + l)) : m(), s.promise()
						}
				},
				a = i(),
				i = i(!1);
			e.mobile.defaultTransitionHandler = a, e.mobile.transitionHandlers = {
				"default": e.mobile.defaultTransitionHandler,
				sequential: a,
				simultaneous: i
			}, e.mobile.transitionFallbacks = {}, e.mobile._maybeDegradeTransition = function(t) {
				return t && !e.support.cssTransform3d && e.mobile.transitionFallbacks[t] && (t = e.mobile.transitionFallbacks[t]), t
			}, e.mobile.getMaxScrollForTransition = e.mobile.getMaxScrollForTransition || function() {
				return 3 * e.mobile.getScreenHeight()
			}
		}(e, this),
		function(e, i) {
			function a(t) {
				!h || h.closest("." + e.mobile.activePageClass).length && !t || h.removeClass(e.mobile.activeBtnClass), h = null
			}

			function o() {
				b = !1, 0 < y.length && e.mobile.changePage.apply(null, y.pop())
			}

			function r(t, n, i, a) {
				return n && n.data("mobile-page")._trigger("beforehide", null, {
					nextPage: t
				}), t.data("mobile-page")._trigger("beforeshow", null, {
					prevPage: n || e("")
				}), e.mobile.hidePageLoadingMsg(), i = e.mobile._maybeDegradeTransition(i), i = (e.mobile.transitionHandlers[i || "default"] || e.mobile.defaultTransitionHandler)(i, a, t, n), i.done(function() {
					n && n.data("mobile-page")._trigger("hide", null, {
						nextPage: t
					}), t.data("mobile-page")._trigger("show", null, {
						prevPage: n || e("")
					})
				}), i
			}

			function s(t, n) {
				n && t.attr("data-" + e.mobile.ns + "role", n), t.page()
			}

			function l(e) {
				for (; e && ("string" != typeof e.nodeName || "a" !== e.nodeName.toLowerCase());) e = e.parentNode;
				return e
			}

			function c(t) {
				t = e(t).closest(".ui-page").jqmData("url");
				var n = T.hrefNoHash;
				return t && d.isPath(t) || (t = n), d.makeUrlAbsolute(t, n)
			}
			var u = e.mobile.window,
				m = (e("html"), e("head")),
				d = e.extend(e.mobile.path, {
					getFilePath: function(t) {
						var n = "&" + e.mobile.subPageUrlKey;
						return t && t.split(n)[0].split(v)[0]
					},
					isFirstPageUrl: function(t) {
						t = d.parseUrl(d.makeUrlAbsolute(t, this.documentBase));
						var n = e.mobile.firstPage,
							n = n && n[0] ? n[0].id : i;
						return (t.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && t.hrefNoHash === this.documentBase.hrefNoHash) && (!t.hash || "#" === t.hash || n && t.hash.replace(/^#/, "") === n)
					},
					isPermittedCrossDomainRequest: function(t, n) {
						return e.mobile.allowCrossDomainPages && "file:" === t.protocol && -1 !== n.search(/^https?:/)
					}
				}),
				p = null,
				h = null,
				g = e.Deferred(),
				f = e.mobile.navigate.history,
				y = [],
				b = !1,
				v = "&ui-state=dialog",
				x = m.children("base"),
				E = d.documentUrl,
				T = d.documentBase,
				w = (d.documentBaseDiffers, e.mobile.getScreenHeight),
				C = e.support.dynamicBaseTag ? {
					element: x.length ? x : e("<base>", {
						href: T.hrefNoHash
					}).prependTo(m),
					set: function(e) {
						e = d.parseUrl(e).hrefNoHash, C.element.attr("href", d.makeUrlAbsolute(e, T))
					},
					reset: function() {
						C.element.attr("href", T.hrefNoSearch)
					}
				} : i;
			e.mobile.getDocumentUrl = d.getDocumentUrl, e.mobile.getDocumentBase = d.getDocumentBase, e.mobile.back = function() {
				var e = t.navigator;
				this.phonegapNavigationEnabled && e && e.app && e.app.backHistory ? e.app.backHistory() : t.history.back()
			}, e.mobile.focusPage = function(e) {
				var t = e.find("[autofocus]"),
					n = e.find(".ui-title:eq(0)");
				return t.length ? (t.focus(), i) : (n.length ? n.focus() : e.focus(), i)
			};
			var S, k, D = !0;
			S = function() {
				if (D) {
					var t = e.mobile.urlHistory.getActive();
					if (t) {
						var n = u.scrollTop();
						t.lastScroll = e.mobile.minScrollBack > n ? e.mobile.defaultHomeScroll : n
					}
				}
			}, k = function() {
				setTimeout(S, 100)
			}, u.bind(e.support.pushState ? "popstate" : "hashchange", function() {
				D = !1
			}), u.one(e.support.pushState ? "popstate" : "hashchange", function() {
				D = !0
			}), u.one("pagecontainercreate", function() {
				e.mobile.pageContainer.bind("pagechange", function() {
					D = !0, u.unbind("scrollstop", k), u.bind("scrollstop", k)
				})
			}), u.bind("scrollstop", k), e.mobile._maybeDegradeTransition = e.mobile._maybeDegradeTransition || function(e) {
				return e
			}, e.mobile.resetActivePageHeight = function(t) {
				var n = e("." + e.mobile.activePageClass),
					i = parseFloat(n.css("padding-top")),
					a = parseFloat(n.css("padding-bottom")),
					o = parseFloat(n.css("border-top-width")),
					r = parseFloat(n.css("border-bottom-width"));
				t = "number" == typeof t ? t : w(), n.css("min-height", t - i - a - o - r)
			}, e.fn.animationComplete = function(t) {
				return e.support.cssTransitions ? e(this).one("webkitAnimationEnd animationend", t) : (setTimeout(t, 0), e(this))
			}, e.mobile.path = d, e.mobile.base = C, e.mobile.urlHistory = f, e.mobile.dialogHashKey = v, e.mobile.allowCrossDomainPages = !1, e.mobile._bindPageRemove = function() {
				var t = e(this);
				!t.data("mobile-page").options.domCache && t.is(":jqmData(external-page='true')") && t.bind("pagehide.remove", function() {
					var t = e(this),
						n = new e.Event("pageremove");
					t.trigger(n), n.isDefaultPrevented() || t.removeWithDependents()
				})
			}, e.mobile.loadPage = function(t, n) {
				var a = e.Deferred(),
					o = e.extend({}, e.mobile.loadPage.defaults, n),
					r = null,
					l = null,
					u = d.makeUrlAbsolute(t, e.mobile.activePage && c(e.mobile.activePage) || T.hrefNoHash);
				o.data && "get" === o.type && (u = d.addSearchParams(u, o.data), o.data = i), o.data && "post" === o.type && (o.reloadPage = !0);
				var m = d.getFilePath(u),
					p = d.convertUrlToDataUrl(u);
				if (o.pageContainer = o.pageContainer || e.mobile.pageContainer, r = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + p + "']"), 0 === r.length && p && !d.isPath(p) && (r = o.pageContainer.children("#" + p).attr("data-" + e.mobile.ns + "url", p).jqmData("url", p)), 0 === r.length)
					if (e.mobile.firstPage && d.isFirstPageUrl(m)) e.mobile.firstPage.parent().length && (r = e(e.mobile.firstPage));
					else if (d.isEmbeddedPage(m)) return a.reject(u, n), a.promise();
				if (r.length) {
					if (!o.reloadPage) return s(r, o.role), a.resolve(u, n, r), C && !n.prefetch && C.set(t), a.promise();
					l = r
				}
				var h = o.pageContainer,
					g = new e.Event("pagebeforeload"),
					f = {
						url: t,
						absUrl: u,
						dataUrl: p,
						deferred: a,
						options: o
					};
				if (h.trigger(g, f), g.isDefaultPrevented()) return a.promise();
				if (o.showLoadMsg) var y = setTimeout(function() {
					e.mobile.showPageLoadingMsg()
				}, o.loadMsgDelay);
				return C && n.prefetch === i && C.reset(), e.mobile.allowCrossDomainPages || d.isSameDomain(E, u) ? e.ajax({
					url: m,
					type: o.type,
					data: o.data,
					contentType: o.contentType,
					dataType: "html",
					success: function(c, h, g) {
						var b = e("<div></div>"),
							v = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1,
							x = RegExp("\\bdata-" + e.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?");
						if (RegExp("(<[^>]+\\bdata-" + e.mobile.ns + "role=[\"']?page[\"']?[^>]*>)").test(c) && RegExp.$1 && x.test(RegExp.$1) && RegExp.$1 && (t = m = d.getFilePath(e("<div>" + RegExp.$1 + "</div>").text())), C && n.prefetch === i && C.set(m), b.get(0).innerHTML = c, r = b.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), r.length || (r = e("<div data-" + e.mobile.ns + "role='page'>" + (c.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), v && !r.jqmData("title") && (~v.indexOf("&") && (v = e("<div>" + v + "</div>").text()), r.jqmData("title", v)), !e.support.dynamicBaseTag) {
							var E = d.get(m);
							r.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function() {
								var t = e(this).is("[href]") ? "href" : e(this).is("[src]") ? "src" : "action",
									n = e(this).attr(t),
									n = n.replace(location.protocol + "//" + location.host + location.pathname, "");
								/^(\w+:|#|\/)/.test(n) || e(this).attr(t, E + n)
							})
						}
						r.attr("data-" + e.mobile.ns + "url", d.convertUrlToDataUrl(m)).attr("data-" + e.mobile.ns + "external-page", !0).appendTo(o.pageContainer), r.one("pagecreate", e.mobile._bindPageRemove), s(r, o.role), -1 < u.indexOf("&" + e.mobile.subPageUrlKey) && (r = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + p + "']")), o.showLoadMsg && (clearTimeout(y), e.mobile.hidePageLoadingMsg()), f.xhr = g, f.textStatus = h, f.page = r, o.pageContainer.trigger("pageload", f), a.resolve(u, n, r, l)
					},
					error: function(t, i, r) {
						C && C.set(d.get()), f.xhr = t, f.textStatus = i, f.errorThrown = r, t = new e.Event("pageloadfailed"), o.pageContainer.trigger(t, f), t.isDefaultPrevented() || (o.showLoadMsg && (clearTimeout(y), e.mobile.hidePageLoadingMsg(), e.mobile.showPageLoadingMsg(e.mobile.pageLoadErrorMessageTheme, e.mobile.pageLoadErrorMessage, !0), setTimeout(e.mobile.hidePageLoadingMsg, 1500)), a.reject(u, n))
					}
				}) : a.reject(u, n), a.promise()
			}, e.mobile.loadPage.defaults = {
				type: "get",
				data: i,
				reloadPage: !1,
				role: i,
				showLoadMsg: !1,
				pageContainer: i,
				loadMsgDelay: 50
			}, e.mobile.changePage = function(t, l) {
				if (b) return y.unshift(arguments), i;
				var u, m = e.extend({}, e.mobile.changePage.defaults, l);
				m.pageContainer = m.pageContainer || e.mobile.pageContainer, m.fromPage = m.fromPage || e.mobile.activePage, u = "string" == typeof t;
				var p = m.pageContainer,
					h = new e.Event("pagebeforechange"),
					g = {
						toPage: t,
						options: m
					};
				if (g.absUrl = u ? d.makeUrlAbsolute(t, e.mobile.activePage && c(e.mobile.activePage) || T.hrefNoHash) : t.data("absUrl"), p.trigger(h, g), !h.isDefaultPrevented()) {
					if (t = g.toPage, u = "string" == typeof t, b = !0, u) return m.target = t, e.mobile.loadPage(t, m).done(function(t, n, i, a) {
						b = !1, n.duplicateCachedPage = a, i.data("absUrl", g.absUrl), e.mobile.changePage(i, n)
					}).fail(function() {
						a(!0), o(), m.pageContainer.trigger("pagechangefailed", g)
					}), i;
					t[0] !== e.mobile.firstPage[0] || m.dataUrl || (m.dataUrl = E.hrefNoHash), u = m.fromPage;
					var x = h = m.dataUrl && d.convertUrlToDataUrl(m.dataUrl) || t.jqmData("url"),
						w = (d.getFilePath(h), f.getActive()),
						C = 0 === f.activeIndex,
						S = 0,
						k = n.title,
						D = "dialog" === m.role || "dialog" === t.jqmData("role");
					if (u && u[0] === t[0] && !m.allowSamePageTransition) return b = !1, p.trigger("pagechange", g), m.fromHashChange && f.direct({
						url: h
					}), i;
					s(t, m.role), m.fromHashChange && (S = "back" === l.direction ? -1 : 1);
					try {
						n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() ? e(n.activeElement).blur() : e("input:focus, textarea:focus, select:focus").blur()
					} catch (L) {}
					var R = !1;
					D && w && (w.url && -1 < w.url.indexOf(v) && e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog") && 0 < f.activeIndex && (m.changeHash = !1, R = !0), h = w.url || "", h += !R && -1 < h.indexOf("#") ? v : "#" + v, 0 === f.activeIndex && h === f.initialDst && (h += v));
					var I = w ? t.jqmData("title") || t.children(":jqmData(role='header')").find(".ui-title").text() : k;
					I && k === n.title && (k = I), t.jqmData("title") || t.jqmData("title", k), m.transition = m.transition || (S && !C ? w.transition : i) || (D ? e.mobile.defaultDialogTransition : e.mobile.defaultPageTransition), !S && R && (f.getActive().pageUrl = x), h && !m.fromHashChange && (!d.isPath(h) && 0 > h.indexOf("#") && (h = "#" + h), x = {
						transition: m.transition,
						title: k,
						pageUrl: x,
						role: m.role
					}, !1 !== m.changeHash && e.mobile.hashListeningEnabled ? e.mobile.navigate(h, x, !0) : t[0] !== e.mobile.firstPage[0] && e.mobile.navigate.history.add(h, x)), n.title = k, e.mobile.activePage = t, m.reverse = m.reverse || 0 > S, r(t, u, m.transition, m.reverse).done(function(n, i, r, s, l) {
						a(), m.duplicateCachedPage && m.duplicateCachedPage.remove(), l || e.mobile.focusPage(t), o(), p.trigger("pagechange", g)
					})
				}
			}, e.mobile.changePage.defaults = {
				transition: i,
				reverse: !1,
				changeHash: !0,
				fromHashChange: !1,
				role: i,
				duplicateCachedPage: i,
				pageContainer: i,
				showLoadMsg: !0,
				dataUrl: i,
				fromPage: i,
				allowSamePageTransition: !1
			}, e.mobile.navreadyDeferred = e.Deferred(), e.mobile._registerInternalEvents = function() {
				var n = function(t, n) {
					var a, o, r, s, l = !0;
					return !e.mobile.ajaxEnabled || t.is(":jqmData(ajax='false')") || !t.jqmHijackable().length || t.attr("target") ? !1 : (a = t.attr("action"), s = (t.attr("method") || "get").toLowerCase(), a || (a = c(t), "get" === s && (a = d.parseUrl(a).hrefNoSearch), a === T.hrefNoHash && (a = E.hrefNoSearch)), a = d.makeUrlAbsolute(a, c(t)), d.isExternal(a) && !d.isPermittedCrossDomainRequest(E, a) ? !1 : (n || (o = t.serializeArray(), p && p[0].form === t[0] && (r = p.attr("name"), r && (e.each(o, function(e, t) {
						return t.name === r ? (r = "", !1) : i
					}), r && o.push({
						name: r,
						value: p.attr("value")
					}))), l = {
						url: a,
						options: {
							type: s,
							data: e.param(o),
							transition: t.jqmData("transition"),
							reverse: "reverse" === t.jqmData("direction"),
							reloadPage: !0
						}
					}), l))
				};
				e.mobile.document.delegate("form", "submit", function(t) {
					var i = n(e(this));
					i && (e.mobile.changePage(i.url, i.options), t.preventDefault())
				}), e.mobile.document.bind("vclick", function(t) {
					var i, o = t.target,
						r = !1;
					if (!(1 < t.which) && e.mobile.linkBindingEnabled) {
						if (p = e(o), e.data(o, "mobile-button")) {
							if (!n(e(o).closest("form"), !0)) return;
							o.parentNode && (o = o.parentNode)
						} else if (o = l(o), !o || "#" === d.parseUrl(o.getAttribute("href") || "#").hash || !e(o).jqmHijackable().length) return;
						~o.className.indexOf("ui-link-inherit") ? o.parentNode && (i = e.data(o.parentNode, "buttonElements")) : i = e.data(o, "buttonElements"), i ? o = i.outer : r = !0, t = e(o), r && (t = t.closest(".ui-btn")), 0 < t.length && !t.hasClass("ui-disabled") && (a(!0), h = t, h.addClass(e.mobile.activeBtnClass))
					}
				}), e.mobile.document.bind("click", function(n) {
					if (e.mobile.linkBindingEnabled && !n.isDefaultPrevented()) {
						var o, r = l(n.target),
							s = e(r);
						if (r && !(1 < n.which) && s.jqmHijackable().length) {
							if (o = function() {
									t.setTimeout(function() {
										a(!0)
									}, 200)
								}, s.is(":jqmData(rel='back')")) return e.mobile.back(), !1;
							var u = c(s),
								r = d.makeUrlAbsolute(s.attr("href") || "#", u);
							if (!e.mobile.ajaxEnabled && !d.isEmbeddedPage(r)) return o(), i;
							if (-1 !== r.search("#")) {
								if (r = r.replace(/[^#]*#/, ""), !r) return n.preventDefault(), i;
								r = d.isPath(r) ? d.makeUrlAbsolute(r, u) : d.makeUrlAbsolute("#" + r, E.hrefNoHash)
							}
							if (s.is("[rel='external']") || s.is(":jqmData(ajax='false')") || s.is("[target]") || d.isExternal(r) && !d.isPermittedCrossDomainRequest(E, r)) return o(), i;
							o = s.jqmData("transition");
							var u = "reverse" === s.jqmData("direction") || s.jqmData("back"),
								m = s.attr("data-" + e.mobile.ns + "rel") || i;
							e.mobile.changePage(r, {
								transition: o,
								reverse: u,
								role: m,
								link: s
							}), n.preventDefault()
						}
					}
				}), e.mobile.document.delegate(".ui-page", "pageshow.prefetch", function() {
					var t = [];
					e(this).find("a:jqmData(prefetch)").each(function() {
						var n = e(this),
							i = n.attr("href");
						i && -1 === e.inArray(i, t) && (t.push(i), e.mobile.loadPage(i, {
							role: n.attr("data-" + e.mobile.ns + "rel"),
							prefetch: !0
						}))
					})
				}), e.mobile._handleHashChange = function(n, a) {
					var o = d.stripHash(n),
						r = 0 === e.mobile.urlHistory.stack.length ? "none" : i,
						s = {
							changeHash: !1,
							fromHashChange: !0,
							reverse: "back" === a.direction
						};
					if (e.extend(s, a, {
							transition: (f.getLast() || {}).transition || r
						}), 0 < f.activeIndex && -1 < o.indexOf(v) && f.initialDst !== o) {
						if (e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog")) return "back" === a.direction ? e.mobile.back() : t.history.forward(), i;
						o = a.pageUrl, r = e.mobile.urlHistory.getActive(), e.extend(s, {
							role: r.role,
							transition: r.transition,
							reverse: "back" === a.direction
						})
					}
					o ? (o = d.isPath(o) ? o : d.makeUrlAbsolute("#" + o, T), o === d.makeUrlAbsolute("#" + f.initialDst, T) && f.stack.length && f.stack[0].url !== f.initialDst.replace(v, "") && (o = e.mobile.firstPage), e.mobile.changePage(o, s)) : e.mobile.changePage(e.mobile.firstPage, s)
				}, u.bind("navigate", function(t, n) {
					var i;
					t.originalEvent && t.originalEvent.isDefaultPrevented() || (i = -1 < e.event.special.navigate.originalEventName.indexOf("hashchange") ? n.state.hash : n.state.url, i || (i = e.mobile.path.parseLocation().hash), i && "#" !== i && 0 !== i.indexOf("#" + e.mobile.path.uiStateKey) || (i = location.href), e.mobile._handleHashChange(i, n.state))
				}), e.mobile.document.bind("pageshow", e.mobile.resetActivePageHeight), e.mobile.window.bind("throttledresize", e.mobile.resetActivePageHeight)
			}, e(function() {
				g.resolve()
			}), e.when(g, e.mobile.navreadyDeferred).done(function() {
				e.mobile._registerInternalEvents()
			})
		}(e), e.mobile.transitionFallbacks.flip = "fade", e.mobile.transitionFallbacks.flow = "fade", e.mobile.transitionFallbacks.pop = "fade",
		function(e) {
			e.mobile.transitionHandlers.slide = e.mobile.transitionHandlers.simultaneous, e.mobile.transitionFallbacks.slide = "fade"
		}(e, this), e.mobile.transitionFallbacks.slidedown = "fade", e.mobile.transitionFallbacks.slidefade = "fade", e.mobile.transitionFallbacks.slideup = "fade", e.mobile.transitionFallbacks.turn = "fade",
		function(e) {
			e.mobile.page.prototype.options.degradeInputs = {
				color: !1,
				date: !1,
				datetime: !1,
				"datetime-local": !1,
				email: !1,
				month: !1,
				number: !1,
				range: "number",
				search: "text",
				tel: !1,
				time: !1,
				url: !1,
				week: !1
			}, e.mobile.document.bind("pagecreate create", function(t) {
				var n, i = e.mobile.closestPageData(e(t.target));
				i && (n = i.options, e(t.target).find("input").not(i.keepNativeSelector()).each(function() {
					var t = e(this),
						i = this.getAttribute("type"),
						a = n.degradeInputs[i] || "text";
					if (n.degradeInputs[i]) {
						var o = e("<div>").html(t.clone()).html(),
							r = -1 < o.indexOf(" type=");
						t.replaceWith(o.replace(r ? /\s+type=["']?\w+['"]?/ : /\/?>/, ' type="' + a + '" data-' + e.mobile.ns + 'type="' + i + '"' + (r ? "" : ">")))
					}
				}))
			})
		}(e),
		function(e) {
			e.widget("mobile.dialog", e.mobile.widget, {
				options: {
					closeBtn: "left",
					closeBtnText: "Close",
					overlayTheme: "a",
					corners: !0,
					initSelector: ":jqmData(role='dialog')"
				},
				_handlePageBeforeShow: function() {
					this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
				},
				_create: function() {
					var t = this.element,
						n = e("<div/>", {
							role: "dialog",
							"class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
						});
					t.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme), t.wrapInner(n), t.bind("vclick submit", function(t) {
						var n;
						t = e(t.target).closest("vclick" === t.type ? "a" : "form"), t.length && !t.jqmData("transition") && (n = e.mobile.urlHistory.getActive() || {}, t.attr("data-" + e.mobile.ns + "transition", n.transition || e.mobile.defaultDialogTransition).attr("data-" + e.mobile.ns + "direction", "reverse"))
					}), this._on(t, {
						pagebeforeshow: "_handlePageBeforeShow"
					}), e.extend(this, {
						_createComplete: !1
					}), this._setCloseBtn(this.options.closeBtn)
				},
				_setCloseBtn: function(t) {
					var n, i, a = this;
					this._headerCloseButton && (this._headerCloseButton.remove(), this._headerCloseButton = null), "none" !== t && (i = "left" === t ? "left" : "right", n = e("<a href='#' class='ui-btn-" + i + "' data-" + e.mobile.ns + "icon='delete' data-" + e.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), this.element.children().find(":jqmData(role='header')").first().prepend(n), this._createComplete && e.fn.buttonMarkup && n.buttonMarkup(), this._createComplete = !0, n.bind("click", function() {
						a.close()
					}), this._headerCloseButton = n)
				},
				_setOption: function(e, t) {
					"closeBtn" === e && this._setCloseBtn(t), this._super(e, t)
				},
				close: function() {
					var t, n, i = e.mobile.navigate.history;
					this._isCloseable && (this._isCloseable = !1, e.mobile.hashListeningEnabled && 0 < i.activeIndex ? e.mobile.back() : (t = Math.max(0, i.activeIndex - 1), n = i.stack[t].pageUrl || i.stack[t].url, i.previousIndex = i.activeIndex, i.activeIndex = t, e.mobile.path.isPath(n) || (n = e.mobile.path.makeUrlAbsolute("#" + n)), e.mobile.changePage(n, {
						direction: "back",
						changeHash: !1,
						fromHashChange: !0
					})))
				}
			}), e.mobile.document.delegate(e.mobile.dialog.prototype.options.initSelector, "pagecreate", function() {
				e.mobile.dialog.prototype.enhance(this)
			})
		}(e, this),
		function(e) {
			e.mobile.page.prototype.options.backBtnText = "Back", e.mobile.page.prototype.options.addBackBtn = !1, e.mobile.page.prototype.options.backBtnTheme = null, e.mobile.page.prototype.options.headerTheme = "a", e.mobile.page.prototype.options.footerTheme = "a", e.mobile.page.prototype.options.contentTheme = null, e.mobile.document.bind("pagecreate", function(t) {
				var n = e(t.target),
					i = n.data("mobile-page").options,
					a = n.jqmData("role"),
					o = i.theme;
				e(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", n).jqmEnhanceable().each(function() {
					var t, r, s, l = e(this),
						c = l.jqmData("role"),
						u = l.jqmData("theme"),
						m = u || i.contentTheme || "dialog" === a && o;
					l.addClass("ui-" + c), "header" === c || "footer" === c ? (u = u || ("header" === c ? i.headerTheme : i.footerTheme) || o, l.addClass("ui-bar-" + u).attr("role", "header" === c ? "banner" : "contentinfo"), "header" === c && (t = l.children("a, button"), r = t.hasClass("ui-btn-left"), s = t.hasClass("ui-btn-right"), r = r || t.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, s || t.eq(1).addClass("ui-btn-right")), i.addBackBtn && "header" === c && 1 < e(".ui-page").length && n.jqmData("url") !== e.mobile.path.stripHash(location.hash) && !r && e("<a href='javascript:void(0);' class='ui-btn-left' data-" + e.mobile.ns + "rel='back' data-" + e.mobile.ns + "icon='arrow-l'>" + i.backBtnText + "</a>").attr("data-" + e.mobile.ns + "theme", i.backBtnTheme || u).prependTo(l), l.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
						role: "heading",
						"aria-level": "1"
					})) : "content" === c && (m && l.addClass("ui-body-" + m), l.attr("role", "main"))
				})
			})
		}(e),
		function(e, t) {
			function i(e) {
				for (var t; e && (t = "string" == typeof e.className && e.className + " ", !(t && -1 < t.indexOf("ui-btn ") && 0 > t.indexOf("ui-disabled ")));) e = e.parentNode;
				return e
			}

			function a(i, a, o, r, s) {
				var l = e.data(i[0], "buttonElements");
				i.removeClass(a).addClass(o), l && (l.bcls = e(n.createElement("div")).addClass(l.bcls + " " + o).removeClass(a).attr("class"), r !== t && (l.hover = r), l.state = s)
			}
			var o = function(e, n) {
				var i = e.getAttribute(n);
				return "true" === i ? !0 : "false" === i ? !1 : null === i ? t : i
			};
			e.fn.buttonMarkup = function(i) {
				var a, s = "data-" + e.mobile.ns;
				i = i && "object" === e.type(i) ? i : {};
				for (var l = 0; this.length > l; l++) {
					var c, u, m, d, p, h, g = this.eq(l),
						f = g[0],
						y = e.extend({}, e.fn.buttonMarkup.defaults, {
							icon: i.icon !== t ? i.icon : o(f, s + "icon"),
							iconpos: i.iconpos !== t ? i.iconpos : o(f, s + "iconpos"),
							theme: i.theme !== t ? i.theme : o(f, s + "theme") || e.mobile.getInheritedTheme(g, "c"),
							inline: i.inline !== t ? i.inline : o(f, s + "inline"),
							shadow: i.shadow !== t ? i.shadow : o(f, s + "shadow"),
							corners: i.corners !== t ? i.corners : o(f, s + "corners"),
							iconshadow: i.iconshadow !== t ? i.iconshadow : o(f, s + "iconshadow"),
							mini: i.mini !== t ? i.mini : o(f, s + "mini")
						}, i),
						b = !1,
						v = "up";
					for (a in y) y[a] === t || null === y[a] ? g.removeAttr(s + a) : f.setAttribute(s + a, y[a]);
					for ("popup" === o(f, s + "rel") && g.attr("href") && (f.setAttribute("aria-haspopup", !0), f.setAttribute("aria-owns", g.attr("href"))), (h = e.data("INPUT" === f.tagName || "BUTTON" === f.tagName ? f.parentNode : f, "buttonElements")) ? (f = h.outer, g = e(f), m = h.inner, d = h.text, e(h.icon).remove(), h.icon = null, b = h.hover, v = h.state) : (m = n.createElement(y.wrapperEls), d = n.createElement(y.wrapperEls)), p = y.icon ? n.createElement("span") : null, r && !h && r(), y.theme || (y.theme = e.mobile.getInheritedTheme(g, "c")), c = "ui-btn ", c += b ? "ui-btn-hover-" + y.theme : "", c += v ? " ui-btn-" + v + "-" + y.theme : "", c += y.shadow ? " ui-shadow" : "", c += y.corners ? " ui-btn-corner-all" : "", y.mini !== t && (c += !0 === y.mini ? " ui-mini" : " ui-fullsize"), y.inline !== t && (c += !0 === y.inline ? " ui-btn-inline" : " ui-btn-block"), y.icon && (y.icon = "ui-icon-" + y.icon, y.iconpos = y.iconpos || "left", u = "ui-icon " + y.icon, y.iconshadow && (u += " ui-icon-shadow")), y.iconpos && (c += " ui-btn-icon-" + y.iconpos, "notext" !== y.iconpos || g.attr("title") || g.attr("title", g.getEncodedText())), h && g.removeClass(h.bcls || ""), g.removeClass("ui-link").addClass(c), m.className = "ui-btn-inner", d.className = "ui-btn-text", h || m.appendChild(d), p && (p.className = u, h && h.icon || (p.innerHTML = "&#160;", m.appendChild(p))); f.firstChild && !h;) d.appendChild(f.firstChild);
					h || f.appendChild(m), h = {
						hover: b,
						state: v,
						bcls: c,
						outer: f,
						inner: m,
						text: d,
						icon: p
					}, e.data(f, "buttonElements", h), e.data(m, "buttonElements", h), e.data(d, "buttonElements", h), p && e.data(p, "buttonElements", h)
				}
				return this
			}, e.fn.buttonMarkup.defaults = {
				corners: !0,
				shadow: !0,
				iconshadow: !0,
				wrapperEls: "span"
			};
			var r = function() {
				var n, o, s = e.mobile.buttonMarkup.hoverDelay;
				e.mobile.document.bind({
					"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function(r) {
						var l, c = e(i(r.target)),
							u = r.originalEvent && /^touch/.test(r.originalEvent.type);
						r = r.type, c.length && (l = c.attr("data-" + e.mobile.ns + "theme"), "vmousedown" === r ? u ? n = setTimeout(function() {
							a(c, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down")
						}, s) : a(c, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down") : "vmousecancel" === r || "vmouseup" === r ? a(c, "ui-btn-down-" + l, "ui-btn-up-" + l, t, "up") : "vmouseover" === r || "focus" === r ? u ? o = setTimeout(function() {
							a(c, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "")
						}, s) : a(c, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "") : ("vmouseout" === r || "blur" === r || "scrollstart" === r) && (a(c, "ui-btn-hover-" + l + " ui-btn-down-" + l, "ui-btn-up-" + l, !1, "up"), n && clearTimeout(n), o && clearTimeout(o)))
					},
					"focusin focus": function(t) {
						e(i(t.target)).addClass(e.mobile.focusClass)
					},
					"focusout blur": function(t) {
						e(i(t.target)).removeClass(e.mobile.focusClass)
					}
				}), r = null
			};
			e.mobile.document.bind("pagecreate create", function(t) {
				e(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", t.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
			})
		}(e),
		function(e, t) {
			e.widget("mobile.collapsible", e.mobile.widget, {
				options: {
					expandCueText: " click to expand contents",
					collapseCueText: " click to collapse contents",
					collapsed: !0,
					heading: "h1,h2,h3,h4,h5,h6,legend",
					collapsedIcon: "plus",
					expandedIcon: "minus",
					iconpos: "left",
					theme: null,
					contentTheme: null,
					inset: !0,
					corners: !0,
					mini: !1,
					initSelector: ":jqmData(role='collapsible')"
				},
				_create: function() {
					var n = this.element,
						i = this.options,
						a = n.addClass("ui-collapsible"),
						o = n.children(i.heading).first(),
						r = a.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),
						s = n.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"),
						l = "";
					o.is("legend") && (o = e("<div role='heading'>" + o.html() + "</div>").insertBefore(o), o.next().remove()), s.length ? (i.theme || (i.theme = s.jqmData("theme") || e.mobile.getInheritedTheme(s, "c")), i.contentTheme || (i.contentTheme = s.jqmData("content-theme")), i.collapsedIcon = n.jqmData("collapsed-icon") || s.jqmData("collapsed-icon") || i.collapsedIcon, i.expandedIcon = n.jqmData("expanded-icon") || s.jqmData("expanded-icon") || i.expandedIcon, i.iconpos = n.jqmData("iconpos") || s.jqmData("iconpos") || i.iconpos, i.inset = s.jqmData("inset") !== t ? s.jqmData("inset") : !0, i.corners = !1, i.mini || (i.mini = s.jqmData("mini"))) : i.theme || (i.theme = e.mobile.getInheritedTheme(n, "c")), i.inset && (l += " ui-collapsible-inset", i.corners && (l += " ui-corner-all")), i.contentTheme && (l += " ui-collapsible-themed-content", r.addClass("ui-body-" + i.contentTheme)), "" !== l && a.addClass(l), o.insertBefore(r).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({
						shadow: !1,
						corners: !1,
						iconpos: i.iconpos,
						icon: i.collapsedIcon,
						mini: i.mini,
						theme: i.theme
					}), a.bind("expand collapse", function(t) {
						if (!t.isDefaultPrevented()) {
							var n = e(this),
								a = "collapse" === t.type;
							t.preventDefault(), o.toggleClass("ui-collapsible-heading-collapsed", a).find(".ui-collapsible-heading-status").text(a ? i.expandCueText : i.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-" + i.expandedIcon, !a).toggleClass("ui-icon-" + i.collapsedIcon, a || i.expandedIcon === i.collapsedIcon).end().find("a").first().removeClass(e.mobile.activeBtnClass), n.toggleClass("ui-collapsible-collapsed", a), r.toggleClass("ui-collapsible-content-collapsed", a).attr("aria-hidden", a), r.trigger("updatelayout")
						}
					}).trigger(i.collapsed ? "collapse" : "expand"), o.bind("tap", function() {
						o.find("a").first().addClass(e.mobile.activeBtnClass)
					}).bind("click", function(e) {
						var t = o.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse";
						a.trigger(t), e.preventDefault(), e.stopPropagation()
					})
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.collapsible.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e) {
			e.mobile.behaviors.addFirstLastClasses = {
				_getVisibles: function(e, t) {
					var n;
					return t ? n = e.not(".ui-screen-hidden") : (n = e.filter(":visible"), 0 === n.length && (n = e.not(".ui-screen-hidden"))), n
				},
				_addFirstLastClasses: function(e, t, n) {
					e.removeClass("ui-first-child ui-last-child"), t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), n || this.element.trigger("updatelayout")
				}
			}
		}(e),
		function(e, t) {
			e.widget("mobile.collapsibleset", e.mobile.widget, e.extend({
				options: {
					initSelector: ":jqmData(role='collapsible-set')"
				},
				_create: function() {
					var n = this.element.addClass("ui-collapsible-set"),
						i = this.options;
					i.theme || (i.theme = e.mobile.getInheritedTheme(n, "c")), i.contentTheme || (i.contentTheme = n.jqmData("content-theme")), i.corners || (i.corners = n.jqmData("corners")), n.jqmData("inset") !== t && (i.inset = n.jqmData("inset")), i.inset = i.inset !== t ? i.inset : !0, i.corners = i.corners !== t ? i.corners : !0, i.corners && i.inset && n.addClass("ui-corner-all"), n.jqmData("collapsiblebound") || n.jqmData("collapsiblebound", !0).bind("expand", function(t) {
						t = e(t.target).closest(".ui-collapsible"), t.parent().is(":jqmData(role='collapsible-set')") && t.siblings(".ui-collapsible").trigger("collapse")
					})
				},
				_init: function() {
					var e = this.element.children(":jqmData(role='collapsible')").filter(":jqmData(collapsed='false')");
					this._refresh("true"), e.trigger("expand")
				},
				_refresh: function(t) {
					var n = this.element.children(":jqmData(role='collapsible')");
					e.mobile.collapsible.prototype.enhance(n.not(".ui-collapsible")), this._addFirstLastClasses(n, this._getVisibles(n, t), t)
				},
				refresh: function() {
					this._refresh(!1)
				}
			}, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.collapsibleset.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e) {
			e.fn.fieldcontain = function() {
				return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function() {
					return 3 === this.nodeType && !/\S/.test(this.nodeValue)
				}).remove()
			}, e(n).bind("pagecreate create", function(t) {
				e(":jqmData(role='fieldcontain')", t.target).jqmEnhanceable().fieldcontain()
			})
		}(e),
		function(e) {
			e.fn.grid = function(t) {
				return this.each(function() {
					var n, i = e(this),
						a = e.extend({
							grid: null
						}, t),
						o = i.children();
					if (n = {
							solo: 1,
							a: 2,
							b: 3,
							c: 4,
							d: 5
						}, a = a.grid, !a)
						if (5 >= o.length)
							for (var r in n) n[r] === o.length && (a = r);
						else a = "a", i.addClass("ui-grid-duo");
					n = n[a], i.addClass("ui-grid-" + a), o.filter(":nth-child(" + n + "n+1)").addClass("ui-block-a"), n > 1 && o.filter(":nth-child(" + n + "n+2)").addClass("ui-block-b"), n > 2 && o.filter(":nth-child(" + n + "n+3)").addClass("ui-block-c"), n > 3 && o.filter(":nth-child(" + n + "n+4)").addClass("ui-block-d"), n > 4 && o.filter(":nth-child(" + n + "n+5)").addClass("ui-block-e")
				})
			}
		}(e),
		function(e, t) {
			e.widget("mobile.navbar", e.mobile.widget, {
				options: {
					iconpos: "top",
					grid: null,
					initSelector: ":jqmData(role='navbar')"
				},
				_create: function() {
					var i = this.element,
						a = i.find("a"),
						o = a.filter(":jqmData(icon)").length ? this.options.iconpos : t;
					i.addClass("ui-navbar ui-mini").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
						grid: this.options.grid
					}), a.buttonMarkup({
						corners: !1,
						shadow: !1,
						inline: !0,
						iconpos: o
					}), i.delegate("a", "vclick", function(t) {
						if (!(e(t.target).is("a") ? e(this) : e(this).parent("a")).is(".ui-disabled, .ui-btn-active")) {
							a.removeClass(e.mobile.activeBtnClass), e(this).addClass(e.mobile.activeBtnClass);
							var i = e(this);
							e(n).one("pagehide", function() {
								i.removeClass(e.mobile.activeBtnClass)
							})
						}
					}), i.closest(".ui-page").bind("pagebeforeshow", function() {
						a.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)
					})
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.navbar.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e) {
			var t = {};
			e.widget("mobile.listview", e.mobile.widget, e.extend({
				options: {
					theme: null,
					countTheme: "c",
					headerTheme: "b",
					dividerTheme: "b",
					icon: "arrow-r",
					splitIcon: "arrow-r",
					splitTheme: "b",
					corners: !0,
					shadow: !0,
					inset: !1,
					initSelector: ":jqmData(role='listview')"
				},
				_create: function() {
					var e = "",
						e = e + (this.options.inset ? " ui-listview-inset" : "");
					this.options.inset && (e += this.options.corners ? " ui-corner-all" : "", e += this.options.shadow ? " ui-shadow" : ""), this.element.addClass(function(t, n) {
						return n + " ui-listview" + e
					}), this.refresh(!0)
				},
				_findFirstElementByTagName: function(e, t, n, i) {
					var a = {};
					for (a[n] = a[i] = !0; e;) {
						if (a[e.nodeName]) return e;
						e = e[t]
					}
					return null
				},
				_getChildrenByTagName: function(t, n, i) {
					var a = [],
						o = {};
					for (o[n] = o[i] = !0, t = t.firstChild; t;) o[t.nodeName] && a.push(t), t = t.nextSibling;
					return e(a)
				},
				_addThumbClasses: function(t) {
					var n, i, a = t.length;
					for (n = 0; a > n; n++) i = e(this._findFirstElementByTagName(t[n].firstChild, "nextSibling", "img", "IMG")), i.length && (i.addClass("ui-li-thumb"), e(this._findFirstElementByTagName(i[0].parentNode, "parentNode", "li", "LI")).addClass(i.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
				},
				refresh: function(t) {
					this.parentPage = this.element.closest(".ui-page"), this._createSubPages();
					var i, a, o, r, s, l, c, u, m, d, p, h = this.options,
						g = this.element,
						f = g.jqmData("dividertheme") || h.dividerTheme,
						y = g.jqmData("splittheme"),
						b = g.jqmData("spliticon"),
						v = g.jqmData("icon"),
						x = this._getChildrenByTagName(g[0], "li", "LI"),
						E = !!e.nodeName(g[0], "ol"),
						T = !e.support.cssPseudoElement,
						w = g.attr("start"),
						C = {};
					E && T && g.find(".ui-li-dec").remove(), E && (w || 0 === w ? T ? c = parseInt(w, 10) : (o = parseInt(w, 10) - 1, g.css("counter-reset", "listnumbering " + o)) : T && (c = 1)), h.theme || (h.theme = e.mobile.getInheritedTheme(this.element, "c"));
					for (var S = 0, k = x.length; k > S; S++) {
						if (i = x.eq(S), a = "ui-li", t || !i.hasClass("ui-li")) {
							o = i.jqmData("theme") || h.theme, r = this._getChildrenByTagName(i[0], "a", "A");
							var D = "list-divider" === i.jqmData("role");
							r.length && !D ? (d = i.jqmData("icon"), i.buttonMarkup({
								wrapperEls: "div",
								shadow: !1,
								corners: !1,
								iconpos: "right",
								icon: 1 < r.length || !1 === d ? !1 : d || v || h.icon,
								theme: o
							}), !1 !== d && 1 === r.length && i.addClass("ui-li-has-arrow"), r.first().removeClass("ui-link").addClass("ui-link-inherit"), 1 < r.length && (a += " ui-li-has-alt", s = r.last(), l = y || s.jqmData("theme") || h.splitTheme, p = s.jqmData("icon"), s.appendTo(i).attr("title", e.trim(s.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({
								shadow: !1,
								corners: !1,
								theme: o,
								icon: !1,
								iconpos: "notext"
							}).find(".ui-btn-inner").append(e(n.createElement("span")).buttonMarkup({
								shadow: !0,
								corners: !0,
								theme: l,
								iconpos: "notext",
								icon: p || d || b || h.splitIcon
							})))) : D ? (a += " ui-li-divider ui-bar-" + (i.jqmData("theme") || f), i.attr("role", "heading"), E && (w || 0 === w ? T ? c = parseInt(w, 10) : (u = parseInt(w, 10) - 1, i.css("counter-reset", "listnumbering " + u)) : T && (c = 1))) : a += " ui-li-static ui-btn-up-" + o
						}
						E && T && 0 > a.indexOf("ui-li-divider") && (m = 0 < a.indexOf("ui-li-static") ? i : i.find(".ui-link-inherit"), m.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + c++ + ". </span>")), C[a] || (C[a] = []), C[a].push(i[0])
					}
					for (a in C) e(C[a]).addClass(a).children(".ui-btn-inner").addClass(a);
					g.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function() {
						var t = e(this);
						t.prependTo(t.parent())
					}).end().find(".ui-li-count").each(function() {
						e(this).closest("li").addClass("ui-li-has-count")
					}).addClass("ui-btn-up-" + (g.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"), this._addThumbClasses(x), this._addThumbClasses(g.find(".ui-link-inherit")), this._addFirstLastClasses(x, this._getVisibles(x, t), t), this._trigger("afterrefresh")
				},
				_idStringEscape: function(e) {
					return e.replace(/[^a-zA-Z0-9]/g, "-")
				},
				_createSubPages: function() {
					var n, a = this.element,
						o = a.closest(".ui-page"),
						r = o.jqmData("url"),
						s = r || o[0][e.expando],
						l = a.attr("id"),
						c = this.options,
						u = "data-" + e.mobile.ns,
						m = this,
						d = o.find(":jqmData(role='footer')").jqmData("id");
					t[s] === i && (t[s] = -1), l = l || ++t[s], e(a.find("li>ul, li>ol").toArray().reverse()).each(function(t) {
						var i;
						i = e(this);
						var o = i.attr("id") || l + "-" + t;
						t = i.parent();
						var s = e(i.prevAll().toArray().reverse()),
							s = s.length ? s : e("<span>" + e.trim(t.contents()[0].nodeValue) + "</span>"),
							m = s.first().getEncodedText(),
							o = (r || "") + "&" + e.mobile.subPageUrlKey + "=" + o,
							p = i.jqmData("theme") || c.theme,
							h = i.jqmData("counttheme") || a.jqmData("counttheme") || c.countTheme;
						n = !0, i.detach().wrap("<div " + u + "role='page' " + u + "url='" + o + "' " + u + "theme='" + p + "' " + u + "count-theme='" + h + "'><div " + u + "role='content'></div></div>").parent().before("<div " + u + "role='header' " + u + "theme='" + c.headerTheme + "'><div class='ui-title'>" + m + "</div></div>").after(d ? e("<div " + u + "role='footer' " + u + "id='" + d + "'>") : "").parent().appendTo(e.mobile.pageContainer).page(), i = t.find("a:first"), i.length || (i = e("<a/>").html(s || m).prependTo(t.empty())), i.attr("href", "#" + o)
					}).listview(), n && o.is(":jqmData(external-page='true')") && !1 === o.data("mobile-page").options.domCache && o.unbind("pagehide.remove").bind("pagehide.remove", function(t, n) {
						var i, a = n.nextPage,
							s = new e.Event("pageremove");
						n.nextPage && (i = a.jqmData("url"), 0 !== i.indexOf(r + "&" + e.mobile.subPageUrlKey) && (m.childPages().remove(), o.trigger(s), s.isDefaultPrevented() || o.removeWithDependents()))
					})
				},
				childPages: function() {
					var t = this.parentPage.jqmData("url");
					return e(":jqmData(url^='" + t + "&" + e.mobile.subPageUrlKey + "')")
				}
			}, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.listview.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e) {
			var t = e("meta[name=viewport]"),
				n = t.attr("content"),
				i = n + ",maximum-scale=1, user-scalable=no",
				a = n + ",maximum-scale=10, user-scalable=yes",
				o = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);
			e.mobile.zoom = e.extend({}, {
				enabled: !o,
				locked: !1,
				disable: function(n) {
					o || e.mobile.zoom.locked || (t.attr("content", i), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = n || !1)
				},
				enable: function(n) {
					o || e.mobile.zoom.locked && !0 !== n || (t.attr("content", a), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
				},
				restore: function() {
					o || (t.attr("content", n), e.mobile.zoom.enabled = !0)
				}
			})
		}(e),
		function(e) {
			e.widget("mobile.textinput", e.mobile.widget, {
				options: {
					theme: null,
					mini: !1,
					preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && -1 < navigator.userAgent.indexOf("AppleWebKit"),
					initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",
					clearBtn: !1,
					clearSearchButtonText: null,
					clearBtnText: "clear text",
					disabled: !1
				},
				_create: function() {
					function t() {
						setTimeout(function() {
							a.toggleClass("ui-input-clear-hidden", !r.val())
						}, 0)
					}
					var n, a, o = this,
						r = this.element,
						s = this.options,
						l = s.theme || e.mobile.getInheritedTheme(this.element, "c"),
						c = " ui-body-" + l,
						u = s.mini ? " ui-mini" : "",
						m = r.is("[type='search'], :jqmData(type='search')"),
						d = s.clearSearchButtonText || s.clearBtnText,
						p = r.is("textarea, :jqmData(type='range')"),
						p = !!s.clearBtn && !p,
						h = r.is("input") && !r.is(":jqmData(type='range')");
					if (e("label[for='" + r.attr("id") + "']").addClass("ui-input-text"), n = r.addClass("ui-input-text ui-body-" + l), r[0].autocorrect === i || e.support.touchOverflow || (r[0].setAttribute("autocorrect", "off"), r[0].setAttribute("autocomplete", "off")), m ? n = r.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + c + u + "'></div>").parent() : h && (n = r.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow" + c + u + "'></div>").parent()), p || m ? (a = e("<a href='#' class='ui-input-clear' title='" + d + "'>" + d + "</a>").bind("click", function(e) {
							r.val("").focus().trigger("change"), a.addClass("ui-input-clear-hidden"), e.preventDefault()
						}).appendTo(n).buttonMarkup({
							icon: "delete",
							iconpos: "notext",
							corners: !0,
							shadow: !0,
							mini: s.mini
						}), m || n.addClass("ui-input-has-clear"), t(), r.bind("paste cut keyup input focus change blur", t)) : h || m || r.addClass("ui-corner-all ui-shadow-inset" + c + u), r.focus(function() {
							s.preventFocusZoom && e.mobile.zoom.disable(!0), n.addClass(e.mobile.focusClass)
						}).blur(function() {
							n.removeClass(e.mobile.focusClass), s.preventFocusZoom && e.mobile.zoom.enable(!0)
						}), r.is("textarea")) {
						var g;
						this._keyup = function() {
							var e = r[0].scrollHeight;
							if (e > r[0].clientHeight) {
								var t = parseFloat(r.css("padding-top")),
									n = parseFloat(r.css("padding-bottom"));
								r.height(e - (t + n) + 15)
							}
						}, r.on("keyup change input paste", function() {
							clearTimeout(g), g = setTimeout(o._keyup, 100)
						}), this._on(!0, e.mobile.document, {
							pagechange: "_keyup"
						}), e.trim(r.val()) && this._on(!0, e.mobile.window, {
							load: "_keyup"
						})
					}
					r.attr("disabled") && this.disable()
				},
				disable: function() {
					var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
						n = this.element.is("input") && !this.element.is(":jqmData(type='range')");
					return e = this.element.attr("disabled", !0) && (n || t) ? this.element.parent() : this.element, e.addClass("ui-disabled"), this._setOption("disabled", !0)
				},
				enable: function() {
					var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
						n = this.element.is("input") && !this.element.is(":jqmData(type='range')");
					return e = this.element.attr("disabled", !1) && (n || t) ? this.element.parent() : this.element, e.removeClass("ui-disabled"), this._setOption("disabled", !1)
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.textinput.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e) {
			e.mobile.listview.prototype.options.filter = !1, e.mobile.listview.prototype.options.filterPlaceholder = "Filter items...", e.mobile.listview.prototype.options.filterTheme = "c", e.mobile.listview.prototype.options.filterReveal = !1;
			var t = function(e, t) {
				return -1 === ("" + e).toLowerCase().indexOf(t)
			};
			e.mobile.listview.prototype.options.filterCallback = t, e.mobile.document.delegate("ul, ol", "listviewcreate", function() {
				var n = e(this),
					i = n.data("mobile-listview");
				if (i && i.options.filter) {
					i.options.filterReveal && n.children().addClass("ui-screen-hidden");
					var a = e("<form>", {
							"class": "ui-listview-filter ui-bar-" + i.options.filterTheme,
							role: "search"
						}).submit(function(e) {
							e.preventDefault(), o.blur()
						}),
						o = e("<input>", {
							placeholder: i.options.filterPlaceholder
						}).attr("data-" + e.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change input", function() {
							var a;
							a = e(this);
							var o = this.value.toLowerCase(),
								r = null,
								s = n.children(),
								l = a.jqmData("lastval") + "",
								c = !1,
								u = "",
								u = i.options.filterCallback !== t;
							if (!l || l !== o) {
								if (i._trigger("beforefilter", "beforefilter", {
										input: this
									}), a.jqmData("lastval", o), u || o.length < l.length || 0 !== o.indexOf(l) ? r = n.children() : (r = n.children(":not(.ui-screen-hidden)"), !r.length && i.options.filterReveal && (r = n.children(".ui-screen-hidden"))), o) {
									for (l = r.length - 1; l >= 0; l--) a = e(r[l]), u = a.jqmData("filtertext") || a.text(), a.is("li:jqmData(role=list-divider)") ? (a.toggleClass("ui-filter-hidequeue", !c), c = !1) : i.options.filterCallback(u, o, a) ? a.toggleClass("ui-filter-hidequeue", !0) : c = !0;
									r.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", !1), r.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", !0).toggleClass("ui-filter-hidequeue", !1)
								} else r.toggleClass("ui-screen-hidden", !!i.options.filterReveal);
								i._addFirstLastClasses(s, i._getVisibles(s, !1), !1)
							}
						}).appendTo(a).textinput();
					i.options.inset && a.addClass("ui-listview-filter-inset"), a.bind("submit", function() {
						return !1
					}).insertBefore(n)
				}
			})
		}(e),
		function(e) {
			e.mobile.listview.prototype.options.autodividers = !1, e.mobile.listview.prototype.options.autodividersSelector = function(t) {
				return (t = e.trim(t.text()) || null) ? t.slice(0, 1).toUpperCase() : null
			}, e.mobile.document.delegate("ul,ol", "listviewcreate", function() {
				var t = e(this),
					i = t.data("mobile-listview");
				if (i && i.options.autodividers) {
					var a = function() {
						t.unbind("listviewafterrefresh", a), t.find("li:jqmData(role='list-divider')").remove();
						for (var o, r, s = t.find("li"), l = null, c = 0; s.length > c; c++) o = s[c], r = i.options.autodividersSelector(e(o)), r && l !== r && (l = n.createElement("li"), l.appendChild(n.createTextNode(r)), l.setAttribute("data-" + e.mobile.ns + "role", "list-divider"), o.parentNode.insertBefore(l, o)), l = r;
						i.refresh(), t.bind("listviewafterrefresh", a)
					};
					a()
				}
			})
		}(e),
		function(e) {
			e(n).bind("pagecreate create", function(t) {
				e(":jqmData(role='nojs')", t.target).addClass("ui-nojs")
			})
		}(e),
		function(e) {
			e.mobile.behaviors.formReset = {
				_handleFormReset: function() {
					this._on(this.element.closest("form"), {
						reset: function() {
							this._delay("_reset")
						}
					})
				}
			}
		}(e),
		function(e) {
			e.widget("mobile.checkboxradio", e.mobile.widget, e.extend({
				options: {
					theme: null,
					mini: !1,
					initSelector: "input[type='checkbox'],input[type='radio']"
				},
				_create: function() {
					var t = this,
						a = this.element,
						o = this.options,
						r = function(e, t) {
							return e.jqmData(t) || e.closest("form, fieldset").jqmData(t)
						},
						s = e(a).closest("label"),
						l = s.length ? s : e(a).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + a[0].id + "']").first(),
						c = a[0].type,
						s = r(a, "mini") || o.mini,
						u = c + "-on",
						m = c + "-off",
						r = r(a, "iconpos");
					("checkbox" === c || "radio" === c) && (e.extend(this, {
						label: l,
						inputtype: c,
						checkedClass: "ui-" + u,
						uncheckedClass: "ui-" + m,
						checkedicon: u,
						uncheckedicon: m
					}), o.theme || (o.theme = e.mobile.getInheritedTheme(this.element, "c")), l.buttonMarkup({
						theme: o.theme,
						icon: m,
						shadow: !1,
						mini: s,
						iconpos: r
					}), o = n.createElement("div"), o.className = "ui-" + c, a.add(l).wrapAll(o), l.bind({
						vmouseover: function(t) {
							e(this).parent().is(".ui-disabled") && t.stopPropagation()
						},
						vclick: function(e) {
							return a.is(":disabled") ? (e.preventDefault(), i) : (t._cacheVals(), a.prop("checked", "radio" === c && !0 || !a.prop("checked")), a.triggerHandler("click"), t._getInputSet().not(a).prop("checked", !1), t._updateAll(), !1)
						}
					}), a.bind({
						vmousedown: function() {
							t._cacheVals()
						},
						vclick: function() {
							var n = e(this);
							n.is(":checked") ? (n.prop("checked", !0), t._getInputSet().not(n).prop("checked", !1)) : n.prop("checked", !1), t._updateAll()
						},
						focus: function() {
							l.addClass(e.mobile.focusClass)
						},
						blur: function() {
							l.removeClass(e.mobile.focusClass)
						}
					}), this._handleFormReset(), this.refresh())
				},
				_cacheVals: function() {
					this._getInputSet().each(function() {
						e(this).jqmData("cacheVal", this.checked)
					})
				},
				_getInputSet: function() {
					return "checkbox" === this.inputtype ? this.element : this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']")
				},
				_updateAll: function() {
					var t = this;
					this._getInputSet().each(function() {
						var n = e(this);
						(this.checked || "checkbox" === t.inputtype) && n.trigger("change")
					}).checkboxradio("refresh")
				},
				_reset: function() {
					this.refresh()
				},
				refresh: function() {
					var t = this.element[0],
						n = " " + e.mobile.activeBtnClass,
						i = this.checkedClass + (this.element.parents(".ui-controlgroup-horizontal").length ? n : ""),
						a = this.label;
					t.checked ? a.removeClass(this.uncheckedClass + n).addClass(i).buttonMarkup({
						icon: this.checkedicon
					}) : a.removeClass(i).addClass(this.uncheckedClass).buttonMarkup({
						icon: this.uncheckedicon
					}), t.disabled ? this.disable() : this.enable()
				},
				disable: function() {
					this.element.prop("disabled", !0).parent().addClass("ui-disabled")
				},
				enable: function() {
					this.element.prop("disabled", !1).parent().removeClass("ui-disabled")
				}
			}, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.checkboxradio.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e) {
			e.widget("mobile.button", e.mobile.widget, {
				options: {
					theme: null,
					icon: null,
					iconpos: null,
					corners: !0,
					shadow: !0,
					iconshadow: !0,
					inline: null,
					mini: null,
					initSelector: "button, [type='button'], [type='submit'], [type='reset']"
				},
				_create: function() {
					var t, n = this.element,
						a = function(e) {
							var t, n = {};
							for (t in e) null !== e[t] && "initSelector" !== t && (n[t] = e[t]);
							return n
						}(this.options),
						o = "";
					return "A" === n[0].tagName ? (n.hasClass("ui-btn") || n.buttonMarkup(), i) : (this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.element, "c")), ~n[0].className.indexOf("ui-btn-left") && (o = "ui-btn-left"), ~n[0].className.indexOf("ui-btn-right") && (o = "ui-btn-right"), ("submit" === n.attr("type") || "reset" === n.attr("type")) && (o ? o += " ui-submit" : o = "ui-submit"), e("label[for='" + n.attr("id") + "']").addClass("ui-submit"), this.button = e("<div></div>")[n.html() ? "html" : "text"](n.html() || n.val()).insertBefore(n).buttonMarkup(a).addClass(o).append(n.addClass("ui-btn-hidden")), t = this.button, n.bind({
						focus: function() {
							t.addClass(e.mobile.focusClass)
						},
						blur: function() {
							t.removeClass(e.mobile.focusClass)
						}
					}), this.refresh(), i)
				},
				_setOption: function(t, n) {
					var i = {};
					i[t] = n, "initSelector" !== t && (this.button.buttonMarkup(i), this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), n)), this._super("_setOption", t, n)
				},
				enable: function() {
					return this.element.attr("disabled", !1), this.button.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
				},
				disable: function() {
					return this.element.attr("disabled", !0), this.button.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
				},
				refresh: function() {
					var t = this.element;
					t.prop("disabled") ? this.disable() : this.enable(), e(this.button.data("buttonElements").text)[t.html() ? "html" : "text"](t.html() || t.val())
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.button.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e, i) {
			e.widget("mobile.slider", e.mobile.widget, e.extend({
				widgetEventPrefix: "slide",
				options: {
					theme: null,
					trackTheme: null,
					disabled: !1,
					initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
					mini: !1,
					highlight: !1
				},
				_create: function() {
					var a, o, r = this.element,
						s = e.mobile.getInheritedTheme(r, "c");
					a = this.options.theme || s;
					var s = this.options.trackTheme || s,
						l = r[0].nodeName.toLowerCase(),
						c = (this.isToggleSwitch = "select" === l, r.parent().is(":jqmData(role='rangeslider')")),
						u = this.isToggleSwitch ? "ui-slider-switch" : "",
						m = r.attr("id"),
						d = e("[for='" + m + "']"),
						p = d.attr("id") || m + "-label",
						d = d.attr("id", p),
						h = this.isToggleSwitch ? 0 : parseFloat(r.attr("min")),
						g = this.isToggleSwitch ? r.find("option").length - 1 : parseFloat(r.attr("max")),
						f = t.parseFloat(r.attr("step") || 1),
						y = this.options.mini || r.jqmData("mini") ? " ui-mini" : "",
						b = n.createElement("a"),
						m = e(b),
						v = n.createElement("div"),
						x = e(v),
						E = this.options.highlight && !this.isToggleSwitch ? function() {
							var t = n.createElement("div");
							return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(x)
						}() : !1;
					if (b.setAttribute("href", "#"), v.setAttribute("role", "application"), v.className = [this.isToggleSwitch ? "ui-slider " : "ui-slider-track ", u, " ui-btn-down-", s, " ui-btn-corner-all", y].join(""), b.className = "ui-slider-handle", v.appendChild(b), m.buttonMarkup({
							corners: !0,
							theme: a,
							shadow: !0
						}).attr({
							role: "slider",
							"aria-valuemin": h,
							"aria-valuemax": g,
							"aria-valuenow": this._value(),
							"aria-valuetext": this._value(),
							title: this._value(),
							"aria-labelledby": p
						}), e.extend(this, {
							slider: x,
							handle: m,
							type: l,
							step: f,
							max: g,
							min: h,
							valuebg: E,
							isRangeslider: c,
							dragging: !1,
							beforeStart: null,
							userModified: !1,
							mouseMoved: !1
						}), this.isToggleSwitch) {
						for (o = n.createElement("div"), o.className = "ui-slider-inneroffset", a = 0, l = v.childNodes.length; l > a; a++) o.appendChild(v.childNodes[a]);
						for (v.appendChild(o), m.addClass("ui-slider-handle-snapping"), a = r.find("option"), l = 0, u = a.length; u > l; l++) m = l ? "a" : "b", v = l ? " " + e.mobile.activeBtnClass : " ui-btn-down-" + s, n.createElement("div"), p = n.createElement("span"), p.className = ["ui-slider-label ui-slider-label-", m, v, " ui-btn-corner-all"].join(""), p.setAttribute("role", "img"), p.appendChild(n.createTextNode(a[l].innerHTML)), e(p).prependTo(x);
						this._labels = e(".ui-slider-label", x)
					}
					d.addClass("ui-slider"), r.addClass(this.isToggleSwitch ? "ui-slider-switch" : "ui-slider-input"), this._on(r, {
						change: "_controlChange",
						keyup: "_controlKeyup",
						blur: "_controlBlur",
						vmouseup: "_controlVMouseUp"
					}), x.bind("vmousedown", e.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(n, {
						vmousemove: "_preventDocumentDrag"
					}), this._on(x.add(n), {
						vmouseup: "_sliderVMouseUp"
					}), x.insertAfter(r), this.isToggleSwitch || c || (o = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", r.add(x).wrapAll(o)), this.isToggleSwitch && this.handle.bind({
						focus: function() {
							x.addClass(e.mobile.focusClass)
						},
						blur: function() {
							x.removeClass(e.mobile.focusClass)
						}
					}), this._on(this.handle, {
						vmousedown: "_handleVMouseDown",
						keydown: "_handleKeydown",
						keyup: "_handleKeyup"
					}), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(i, i, !0)
				},
				_controlChange: function(e) {
					return !1 === this._trigger("controlchange", e) ? !1 : (this.mouseMoved || this.refresh(this._value(), !0), i)
				},
				_controlKeyup: function() {
					this.refresh(this._value(), !0, !0)
				},
				_controlBlur: function() {
					this.refresh(this._value(), !0)
				},
				_controlVMouseUp: function() {
					this._checkedRefresh()
				},
				_handleVMouseDown: function() {
					this.handle.focus()
				},
				_handleKeydown: function(t) {
					var n = this._value();
					if (!this.options.disabled) {
						switch (t.keyCode) {
							case e.mobile.keyCode.HOME:
							case e.mobile.keyCode.END:
							case e.mobile.keyCode.PAGE_UP:
							case e.mobile.keyCode.PAGE_DOWN:
							case e.mobile.keyCode.UP:
							case e.mobile.keyCode.RIGHT:
							case e.mobile.keyCode.DOWN:
							case e.mobile.keyCode.LEFT:
								t.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
						}
						switch (t.keyCode) {
							case e.mobile.keyCode.HOME:
								this.refresh(this.min);
								break;
							case e.mobile.keyCode.END:
								this.refresh(this.max);
								break;
							case e.mobile.keyCode.PAGE_UP:
							case e.mobile.keyCode.UP:
							case e.mobile.keyCode.RIGHT:
								this.refresh(n + this.step);
								break;
							case e.mobile.keyCode.PAGE_DOWN:
							case e.mobile.keyCode.DOWN:
							case e.mobile.keyCode.LEFT:
								this.refresh(n - this.step)
						}
					}
				},
				_handleKeyup: function() {
					this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
				},
				_sliderVMouseDown: function(e) {
					return this.options.disabled || 1 !== e.which && 0 !== e.which ? !1 : !1 === this._trigger("beforestart", e) ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(e), this._trigger("start"), !1)
				},
				_sliderVMouseUp: function() {
					return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.refresh(this.mouseMoved ? this.userModified ? 0 === this.beforeStart ? 1 : 0 : this.beforeStart : 0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : i
				},
				_preventDocumentDrag: function(e) {
					return !1 === this._trigger("drag", e) ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(e), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : i
				},
				_checkedRefresh: function() {
					this.value !== this._value() && this.refresh(this._value())
				},
				_value: function() {
					return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
				},
				_reset: function() {
					this.refresh(i, !1, !0)
				},
				refresh: function(t, a, o) {
					var r, s, l, c = this,
						u = e.mobile.getInheritedTheme(this.element, "c"),
						m = this.options.theme || u;
					c.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch" : "ui-slider-track", " ui-btn-down-" + (this.options.trackTheme || u), " ui-btn-corner-all", this.options.mini ? " ui-mini" : ""].join(""), (this.options.disabled || this.element.attr("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function() {
						var t = n.createElement("div");
						return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(c.slider)
					}()), this.handle.buttonMarkup({
						corners: !0,
						theme: m,
						shadow: !0
					});
					var d, u = this.element,
						p = (m = !this.isToggleSwitch) ? [] : u.find("option"),
						h = m ? parseFloat(u.attr("min")) : 0,
						g = m ? parseFloat(u.attr("max")) : p.length - 1,
						f = m && 0 < parseFloat(u.attr("step")) ? parseFloat(u.attr("step")) : 1;
					if ("object" == typeof t) {
						if (l = t, r = this.slider.offset().left, s = this.slider.width(), d = s / ((g - h) / f), !this.dragging || r - 8 > l.pageX || l.pageX > r + s + 8) return;
						l = d > 1 ? (l.pageX - r) / s * 100 : Math.round((l.pageX - r) / s * 100)
					} else null == t && (t = m ? parseFloat(u.val() || 0) : u[0].selectedIndex), l = 100 * ((parseFloat(t) - h) / (g - h));
					if (!isNaN(l)) {
						r = l / 100 * (g - h) + h;
						var y = (r - h) % f,
							b = r - y;
						if (2 * Math.abs(y) >= f && (b += y > 0 ? f : -f), y = 100 / ((g - h) / f), r = parseFloat(b.toFixed(5)), d === i && (d = s / ((g - h) / f)), d > 1 && m && (l = 1 / f * y * (r - h)), 0 > l && (l = 0), l > 100 && (l = 100), h > r && (r = h), r > g && (r = g), this.handle.css("left", l + "%"), this.handle[0].setAttribute("aria-valuenow", m ? r : p.eq(r).attr("value")), this.handle[0].setAttribute("aria-valuetext", m ? r : p.eq(r).getEncodedText()), this.handle[0].setAttribute("title", m ? r : p.eq(r).getEncodedText()), this.valuebg && this.valuebg.css("width", l + "%"), this._labels) {
							s = 100 * (this.handle.width() / this.slider.width());
							var v = l && s + (100 - s) * l / 100,
								x = 100 === l ? 0 : Math.min(s + 100 - v, 100);
							this._labels.each(function() {
								var t = e(this).is(".ui-slider-label-a");
								e(this).width((t ? v : x) + "%")
							})
						}
						if (!o) {
							if (o = !1, m ? (o = u.val() !== r, u.val(r)) : (o = u[0].selectedIndex !== r, u[0].selectedIndex = r), !1 === this._trigger("beforechange", t)) return !1;
							!a && o && u.trigger("change")
						}
					}
				},
				enable: function() {
					return this.element.attr("disabled", !1), this.slider.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
				},
				disable: function() {
					return this.element.attr("disabled", !0), this.slider.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
				}
			}, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.slider.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e) {
			e.widget("mobile.rangeslider", e.mobile.widget, {
				options: {
					theme: null,
					trackTheme: null,
					disabled: !1,
					initSelector: ":jqmData(role='rangeslider')",
					mini: !1,
					highlight: !0
				},
				_create: function() {
					var t = this.element,
						n = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
						i = t.find("input").first(),
						a = t.find("input").last(),
						o = t.find("label").first(),
						r = e.data(i.get(0), "mobileSlider").slider,
						s = e.data(a.get(0), "mobileSlider").slider,
						l = e.data(i.get(0), "mobileSlider").handle,
						c = e('<div class="ui-rangeslider-sliders" />').appendTo(t);
					1 < t.find("label").length && t.find("label").last().hide(), i.addClass("ui-rangeslider-first"), a.addClass("ui-rangeslider-last"), t.addClass(n), r.appendTo(c), s.appendTo(c), o.prependTo(t), l.prependTo(s), e.extend(this, {
						_inputFirst: i,
						_inputLast: a,
						_sliderFirst: r,
						_sliderLast: s,
						_targetVal: null,
						_sliderTarget: !1,
						_sliders: c,
						_proxy: !1
					}), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
						slidebeforestart: "_slidebeforestart",
						slidestop: "_slidestop",
						slidedrag: "_slidedrag",
						slidebeforechange: "_change",
						blur: "_change",
						keyup: "_change"
					}), this._on({
						mousedown: "_change"
					}), this._on(this.element.closest("form"), {
						reset: "_handleReset"
					}), this._on(l, {
						vmousedown: "_dragFirstHandle"
					})
				},
				_handleReset: function() {
					var e = this;
					setTimeout(function() {
						e._updateHighlight()
					}, 0)
				},
				_dragFirstHandle: function(t) {
					return e.data(this._inputFirst.get(0), "mobileSlider").dragging = !0, e.data(this._inputFirst.get(0), "mobileSlider").refresh(t), !1
				},
				_slidedrag: function(t) {
					var n = e(t.target).is(this._inputFirst),
						a = n ? this._inputLast : this._inputFirst;
					return this._sliderTarget = !1, "first" === this._proxy && n || "last" === this._proxy && !n ? (e.data(a.get(0), "mobileSlider").dragging = !0, e.data(a.get(0), "mobileSlider").refresh(t), !1) : i
				},
				_slidestop: function(t) {
					t = e(t.target).is(this._inputFirst), this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", t ? 1 : "")
				},
				_slidebeforestart: function(t) {
					this._sliderTarget = !1, e(t.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = e(t.target).val())
				},
				_setOption: function(e) {
					this._superApply(e), this.refresh()
				},
				refresh: function() {
					var e = this.options;
					this.element.find("input").slider({
						theme: e.theme,
						trackTheme: e.trackTheme,
						disabled: e.disabled,
						mini: e.mini,
						highlight: e.highlight
					}).slider("refresh"), this._updateHighlight()
				},
				_change: function(t) {
					if ("keyup" === t.type) return this._updateHighlight(), !1;
					var n = this,
						a = parseFloat(this._inputFirst.val(), 10),
						o = parseFloat(this._inputLast.val(), 10),
						r = e(t.target).hasClass("ui-rangeslider-first"),
						s = r ? this._inputFirst : this._inputLast,
						l = r ? this._inputLast : this._inputFirst;
					if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === t.type && !e(t.target).hasClass("ui-slider-handle")) s.blur();
					else if ("mousedown" === t.type) return;
					return a > o && !this._sliderTarget ? (s.val(r ? o : a).slider("refresh"), this._trigger("normalize")) : a > o && (s.val(this._targetVal).slider("refresh"), setTimeout(function() {
						l.val(r ? a : o).slider("refresh"), e.data(l.get(0), "mobileSlider").handle.focus(), n._sliderFirst.css("z-index", r ? "" : 1), n._trigger("normalize")
					}, 0), this._proxy = r ? "first" : "last"), a === o ? (e.data(s.get(0), "mobileSlider").handle.css("z-index", 1), e.data(l.get(0), "mobileSlider").handle.css("z-index", 0)) : (e.data(l.get(0), "mobileSlider").handle.css("z-index", ""), e.data(s.get(0), "mobileSlider").handle.css("z-index", "")), this._updateHighlight(), a >= o ? !1 : i
				},
				_updateHighlight: function() {
					var t = parseInt(e.data(this._inputFirst.get(0), "mobileSlider").handle.get(0).style.left, 10),
						n = parseInt(e.data(this._inputLast.get(0), "mobileSlider").handle.get(0).style.left, 10) - t;
					this.element.find(".ui-slider-bg").css({
						"margin-left": t + "%",
						width: n + "%"
					})
				},
				_destroy: function() {
					this.element.removeClass("ui-rangeslider ui-mini").find("label").show(), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
				}
			}), e.widget("mobile.rangeslider", e.mobile.rangeslider, e.mobile.behaviors.formReset), e(n).bind("pagecreate create", function(t) {
				e.mobile.rangeslider.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e) {
			e.widget("mobile.selectmenu", e.mobile.widget, e.extend({
				options: {
					theme: null,
					disabled: !1,
					icon: "arrow-d",
					iconpos: "right",
					inline: !1,
					corners: !0,
					shadow: !0,
					iconshadow: !0,
					overlayTheme: "a",
					dividerTheme: "b",
					hidePlaceholderMenuItems: !0,
					closeText: "Close",
					nativeMenu: !0,
					preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && -1 < navigator.userAgent.indexOf("AppleWebKit"),
					initSelector: "select:not( :jqmData(role='slider') )",
					mini: !1
				},
				_button: function() {
					return e("<div/>")
				},
				_setDisabled: function(e) {
					return this.element.attr("disabled", e), this.button.attr("aria-disabled", e), this._setOption("disabled", e)
				},
				_focusButton: function() {
					var e = this;
					setTimeout(function() {
						e.button.focus()
					}, 40)
				},
				_selectOptions: function() {
					return this.select.find("option")
				},
				_preExtension: function() {
					var t = "";
					~this.element[0].className.indexOf("ui-btn-left") && (t = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (t = " ui-btn-right"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + t + "'>"), this.selectID = this.select.attr("id"), this.label = e("label[for='" + this.selectID + "']").addClass("ui-select"), this.isMultiple = this.select[0].multiple, this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.select, "c"))
				},
				_destroy: function() {
					var e = this.element.parents(".ui-select");
					0 < e.length && (e.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(e.is(".ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(e), e.remove())
				},
				_create: function() {
					this._preExtension(), this._trigger("beforeCreate"), this.button = this._button();
					var n = this,
						i = this.options,
						a = i.inline || this.select.jqmData("inline"),
						o = i.mini || this.select.jqmData("mini"),
						r = i.icon ? i.iconpos || this.select.jqmData("iconpos") : !1,
						a = (-1 === this.select[0].selectedIndex ? 0 : this.select[0].selectedIndex, this.button.insertBefore(this.select).buttonMarkup({
							theme: i.theme,
							icon: i.icon,
							iconpos: r,
							inline: a,
							corners: i.corners,
							shadow: i.shadow,
							iconshadow: i.iconshadow,
							mini: o
						}));
					this.setButtonText(), i.nativeMenu && t.opera && t.opera.version && a.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = e("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(a.addClass("ui-li-has-count"))), (i.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function() {
						n.refresh(), i.nativeMenu && this.blur()
					}), this._handleFormReset(), this.build()
				},
				build: function() {
					var t = this;
					this.select.appendTo(t.button).bind("vmousedown", function() {
						t.button.addClass(e.mobile.activeBtnClass)
					}).bind("focus", function() {
						t.button.addClass(e.mobile.focusClass)
					}).bind("blur", function() {
						t.button.removeClass(e.mobile.focusClass)
					}).bind("focus vmouseover", function() {
						t.button.trigger("vmouseover")
					}).bind("vmousemove", function() {
						t.button.removeClass(e.mobile.activeBtnClass)
					}).bind("change blur vmouseout", function() {
						t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)
					}).bind("change blur", function() {
						t.button.removeClass("ui-btn-down-" + t.options.theme)
					}), t.button.bind("vmousedown", function() {
						t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
					}), t.label.bind("click focus", function() {
						t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
					}), t.select.bind("focus", function() {
						t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
					}), t.button.bind("mouseup", function() {
						t.options.preventFocusZoom && setTimeout(function() {
							e.mobile.zoom.enable(!0)
						}, 0)
					}), t.select.bind("blur", function() {
						t.options.preventFocusZoom && e.mobile.zoom.enable(!0)
					})
				},
				selected: function() {
					return this._selectOptions().filter(":selected")
				},
				selectedIndices: function() {
					var e = this;
					return this.selected().map(function() {
						return e._selectOptions().index(this)
					}).get()
				},
				setButtonText: function() {
					var t = this,
						i = this.selected(),
						a = this.placeholder,
						o = e(n.createElement("span"));
					this.button.find(".ui-btn-text").html(function() {
						return a = i.length ? i.map(function() {
							return e(this).text()
						}).get().join(", ") : t.placeholder, o.text(a).addClass(t.select.attr("class")).addClass(i.attr("class"))
					})
				},
				setButtonCount: function() {
					var e = this.selected();
					this.isMultiple && this.buttonCount[1 < e.length ? "show" : "hide"]().text(e.length)
				},
				_reset: function() {
					this.refresh()
				},
				refresh: function() {
					this.setButtonText(), this.setButtonCount()
				},
				open: e.noop,
				close: e.noop,
				disable: function() {
					this._setDisabled(!0), this.button.addClass("ui-disabled")
				},
				enable: function() {
					this._setDisabled(!1), this.button.removeClass("ui-disabled")
				}
			}, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.selectmenu.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e, i) {
			function a(e, t, n, i) {
				return t > e ? n + (e - t) / 2 : Math.min(Math.max(n, i - t / 2), n + e - t)
			}

			function o() {
				var n = e.mobile.window;
				return {
					x: n.scrollLeft(),
					y: n.scrollTop(),
					cx: t.innerWidth || n.width(),
					cy: t.innerHeight || n.height()
				}
			}
			e.widget("mobile.popup", e.mobile.widget, {
				options: {
					theme: null,
					overlayTheme: null,
					shadow: !0,
					corners: !0,
					transition: "none",
					positionTo: "origin",
					tolerance: null,
					initSelector: ":jqmData(role='popup')",
					closeLinkSelector: "a:jqmData(rel='back')",
					closeLinkEvents: "click.popup",
					navigateEvents: "navigate.popup",
					closeEvents: "navigate.popup pagebeforechange.popup",
					dismissible: !0,
					history: !e.mobile.browser.oldIE
				},
				_eatEventAndClose: function(e) {
					return e.preventDefault(), e.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
				},
				_resizeScreen: function() {
					var e = this._ui.container.outerHeight(!0);
					this._ui.screen.removeAttr("style"), e > this._ui.screen.height() && this._ui.screen.height(e)
				},
				_handleWindowKeyUp: function(t) {
					return this._isOpen && t.keyCode === e.mobile.keyCode.ESCAPE ? this._eatEventAndClose(t) : i
				},
				_expectResizeEvent: function() {
					var t = o();
					if (this._resizeData) {
						if (t.x === this._resizeData.winCoords.x && t.y === this._resizeData.winCoords.y && t.cx === this._resizeData.winCoords.cx && t.cy === this._resizeData.winCoords.cy) return !1;
						clearTimeout(this._resizeData.timeoutId)
					}
					return this._resizeData = {
						timeoutId: setTimeout(e.proxy(this, "_resizeTimeout"), 200),
						winCoords: t
					}, !0
				},
				_resizeTimeout: function() {
					this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden"), this.reposition({
						positionTo: "window"
					}), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
				},
				_ignoreResizeEvents: function() {
					var e = this;
					this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = setTimeout(function() {
						e._ignoreResizeTo = 0
					}, 1e3)
				},
				_handleWindowResize: function() {
					this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))
				},
				_handleWindowOrientationchange: function() {
					!this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
				},
				_handleDocumentFocusIn: function(t) {
					var i, a = t.target,
						o = this._ui;
					if (this._isOpen) {
						if (a !== o.container[0]) {
							if (i = e(t.target), 0 === i.parents().filter(o.container[0]).length) return e(n.activeElement).one("focus", function() {
								i.blur()
							}), o.focusElement.focus(), t.preventDefault(), t.stopImmediatePropagation(), !1;
							o.focusElement[0] === o.container[0] && (o.focusElement = i)
						}
						this._ignoreResizeEvents()
					}
				},
				_create: function() {
					var t = {
							screen: e("<div class='ui-screen-hidden ui-popup-screen'></div>"),
							placeholder: e("<div style='display: none;'><!-- placeholder --></div>"),
							container: e("<div class='ui-popup-container ui-popup-hidden'></div>")
						},
						n = this.element.closest(".ui-page"),
						a = this.element.attr("id"),
						o = this;
					this.options.history = this.options.history && e.mobile.ajaxEnabled && e.mobile.hashListeningEnabled, 0 === n.length && (n = e("body")), this.options.container = this.options.container || e.mobile.pageContainer, n.append(t.screen), t.container.insertAfter(t.screen), t.placeholder.insertAfter(this.element), a && (t.screen.attr("id", a + "-screen"), t.container.attr("id", a + "-popup"), t.placeholder.html("<!-- placeholder for " + a + " -->")), t.container.append(this.element), t.focusElement = t.container, this.element.addClass("ui-popup"), e.extend(this, {
						_scrollTop: 0,
						_page: n,
						_ui: t,
						_fallbackTransition: "",
						_currentTransition: !1,
						_prereqs: null,
						_isOpen: !1,
						_tolerance: null,
						_resizeData: null,
						_ignoreResizeTo: 0,
						_orientationchangeInProgress: !1
					}), e.each(this.options, function(e, t) {
						o.options[e] = i, o._setOption(e, t, !0)
					}), t.screen.bind("vclick", e.proxy(this, "_eatEventAndClose")), this._on(e.mobile.window, {
						orientationchange: e.proxy(this, "_handleWindowOrientationchange"),
						resize: e.proxy(this, "_handleWindowResize"),
						keyup: e.proxy(this, "_handleWindowKeyUp")
					}), this._on(e.mobile.document, {
						focusin: e.proxy(this, "_handleDocumentFocusIn")
					})
				},
				_applyTheme: function(e, t, n) {
					for (var i, a = (e.attr("class") || "").split(" "), o = null, r = t + ""; 0 < a.length;) {
						if (o = a.pop(), i = RegExp("^ui-" + n + "-([a-z])$").exec(o), i && 1 < i.length) {
							o = i[1];
							break
						}
						o = null
					}
					t !== o && (e.removeClass("ui-" + n + "-" + o), null !== t && "none" !== t && e.addClass("ui-" + n + "-" + r))
				},
				_setTheme: function(e) {
					this._applyTheme(this.element, e, "body")
				},
				_setOverlayTheme: function(e) {
					this._applyTheme(this._ui.screen, e, "overlay"), this._isOpen && this._ui.screen.addClass("in")
				},
				_setShadow: function(e) {
					this.element.toggleClass("ui-overlay-shadow", e)
				},
				_setCorners: function(e) {
					this.element.toggleClass("ui-corner-all", e)
				},
				_applyTransition: function(t) {
					this._ui.container.removeClass(this._fallbackTransition), t && "none" !== t && (this._fallbackTransition = e.mobile._maybeDegradeTransition(t), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))
				},
				_setTransition: function(e) {
					this._currentTransition || this._applyTransition(e)
				},
				_setTolerance: function(t) {
					var n = {
						t: 30,
						r: 15,
						b: 30,
						l: 15
					};
					if (t !== i) {
						var a = (t + "").split(",");
						switch (e.each(a, function(e, t) {
							a[e] = parseInt(t, 10)
						}), a.length) {
							case 1:
								isNaN(a[0]) || (n.t = n.r = n.b = n.l = a[0]);
								break;
							case 2:
								isNaN(a[0]) || (n.t = n.b = a[0]), isNaN(a[1]) || (n.l = n.r = a[1]);
								break;
							case 4:
								isNaN(a[0]) || (n.t = a[0]), isNaN(a[1]) || (n.r = a[1]), isNaN(a[2]) || (n.b = a[2]), isNaN(a[3]) || (n.l = a[3])
						}
					}
					this._tolerance = n
				},
				_setOption: function(t, n) {
					var a = "_set" + t.charAt(0).toUpperCase() + t.slice(1);
					this[a] !== i && this[a](n), e.mobile.widget.prototype._setOption.apply(this, arguments), -1 === e.inArray(t, "initSelector closeLinkSelector closeLinkEvents navigateEvents closeEvents history container".split(" ")) && this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), n)
				},
				_placementCoords: function(e) {
					var t, i, r;
					r = o(), t = this._tolerance.l;
					var s = r.y + this._tolerance.t,
						l = r.cx - this._tolerance.l - this._tolerance.r,
						c = r.cy - this._tolerance.t - this._tolerance.b;
					return this._ui.container.css("max-width", l), i = this._ui.container.outerWidth(!0), r = this._ui.container.outerHeight(!0), t = a(l, i, t, e.x), e = a(c, r, s, e.y), e = Math.max(0, e), s = n.documentElement, l = n.body, s = Math.max(s.clientHeight, l.scrollHeight, l.offsetHeight, s.scrollHeight, s.offsetHeight), e -= Math.min(e, Math.max(0, e + r - s)), {
						left: t,
						top: e
					}
				},
				_createPrereqs: function(t, n, i) {
					var a, o = this;
					a = {
						screen: e.Deferred(),
						container: e.Deferred()
					}, a.screen.then(function() {
						a === o._prereqs && t()
					}), a.container.then(function() {
						a === o._prereqs && n()
					}), e.when(a.screen, a.container).done(function() {
						a === o._prereqs && (o._prereqs = null, i())
					}), o._prereqs = a
				},
				_animate: function(t) {
					return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd), t.prereqs.screen.resolve(), t.transition && "none" !== t.transition && (t.applyTransition && this._applyTransition(t.transition), this._fallbackTransition) ? (this._ui.container.animationComplete(e.proxy(t.prereqs.container, "resolve")).addClass(t.containerClassToAdd).removeClass(t.classToRemove), i) : (this._ui.container.removeClass(t.classToRemove), t.prereqs.container.resolve(), i)
				},
				_desiredCoords: function(t) {
					var n, i = null,
						a = o(),
						r = t.x,
						s = t.y;
					if ((t = t.positionTo) && "origin" !== t)
						if ("window" === t) r = a.cx / 2 + a.x, s = a.cy / 2 + a.y;
						else {
							try {
								i = e(t)
							} catch (l) {
								i = null
							}
							i && (i.filter(":visible"), 0 === i.length && (i = null))
						}
					return i && (n = i.offset(), r = n.left + i.outerWidth() / 2, s = n.top + i.outerHeight() / 2), ("number" !== e.type(r) || isNaN(r)) && (r = a.cx / 2 + a.x), ("number" !== e.type(s) || isNaN(s)) && (s = a.cy / 2 + a.y), {
						x: r,
						y: s
					}
				},
				_reposition: function(e) {
					e = {
						x: e.x,
						y: e.y,
						positionTo: e.positionTo
					}, this._trigger("beforeposition", e), this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))
				},
				reposition: function(e) {
					this._isOpen && this._reposition(e)
				},
				_openPrereqsComplete: function() {
					this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), this._ui.container.attr("tabindex", "0").focus(), this._ignoreResizeEvents(), this._trigger("afteropen")
				},
				_open: function(t) {
					t = e.extend({}, this.options, t);
					var n;
					n = navigator.userAgent;
					var i = n.match(/AppleWebKit\/([0-9\.]+)/),
						i = !!i && i[1],
						a = n.match(/Android (\d+(?:\.\d+))/),
						o = !!a && a[1];
					n = -1 < n.indexOf("Chrome"), n = null !== a && "4.0" === o && i && i > 534.13 && !n ? !0 : !1, this._createPrereqs(e.noop, e.noop, e.proxy(this, "_openPrereqsComplete")), this._currentTransition = t.transition, this._applyTransition(t.transition), this.options.theme || this._setTheme(this._page.jqmData("theme") || e.mobile.getInheritedTheme(this._page, "c")), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-hidden"), this._reposition(t), this.options.overlayTheme && n && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
						additionalCondition: !0,
						transition: t.transition,
						classToRemove: "",
						screenClassToAdd: "in",
						containerClassToAdd: "in",
						applyTransition: !1,
						prereqs: this._prereqs
					})
				},
				_closePrereqScreen: function() {
					this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
				},
				_closePrereqContainer: function() {
					this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")
				},
				_closePrereqsDone: function() {
					this.options, this._ui.container.removeAttr("tabindex"), e.mobile.popup.active = i, this._trigger("afterclose")
				},
				_close: function(t) {
					this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrereqs(e.proxy(this, "_closePrereqScreen"), e.proxy(this, "_closePrereqContainer"), e.proxy(this, "_closePrereqsDone")), this._animate({
						additionalCondition: this._ui.screen.hasClass("in"),
						transition: t ? "none" : this._currentTransition,
						classToRemove: "in",
						screenClassToAdd: "out",
						containerClassToAdd: "reverse out",
						applyTransition: !0,
						prereqs: this._prereqs
					})
				},
				_unenhance: function() {
					this._setTheme("none"), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove()
				},
				_destroy: function() {
					e.mobile.popup.active === this ? (this.element.one("popupafterclose", e.proxy(this, "_unenhance")), this.close()) : this._unenhance()
				},
				_closePopup: function(n, i) {
					var a, o, r = this.options,
						s = !1;
					t.scrollTo(0, this._scrollTop), n && "pagebeforechange" === n.type && i && (a = "string" == typeof i.toPage ? i.toPage : i.toPage.jqmData("url"), a = e.mobile.path.parseUrl(a), o = a.pathname + a.search + a.hash, this._myUrl !== e.mobile.path.makeUrlAbsolute(o) ? s = !0 : n.preventDefault()), r.container.unbind(r.closeEvents), this.element.undelegate(r.closeLinkSelector, r.closeLinkEvents), this._close(s)
				},
				_bindContainerClose: function() {
					this.options.container.one(this.options.closeEvents, e.proxy(this, "_closePopup"))
				},
				open: function(n) {
					var a, o, r, s, l, c = this,
						u = this.options;
					if (!e.mobile.popup.active) {
						if (e.mobile.popup.active = this, this._scrollTop = e.mobile.window.scrollTop(), !u.history) return c._open(n), c._bindContainerClose(), c.element.delegate(u.closeLinkSelector, u.closeLinkEvents, function(e) {
							c.close(), e.preventDefault()
						}), i;
						if (l = e.mobile.urlHistory, o = e.mobile.dialogHashKey, r = e.mobile.activePage, s = r.is(".ui-dialog"), this._myUrl = a = l.getActive().url, -1 < a.indexOf(o) && !s && 0 < l.activeIndex) return c._open(n), c._bindContainerClose(), i; - 1 !== a.indexOf(o) || s ? a = e.mobile.path.parseLocation().hash + o : a += -1 < a.indexOf("#") ? o : "#" + o, 0 === l.activeIndex && a === l.initialDst && (a += o), e(t).one("beforenavigate", function(e) {
							e.preventDefault(), c._open(n), c._bindContainerClose()
						}), this.urlAltered = !0, e.mobile.navigate(a, {
							role: "dialog"
						})
					}
				},
				close: function() {
					e.mobile.popup.active === this && (this._scrollTop = e.mobile.window.scrollTop(), this.options.history && this.urlAltered ? (e.mobile.back(), this.urlAltered = !1) : this._closePopup())
				}
			}), e.mobile.popup.handleLink = function(t) {
				var n, i = t.closest(":jqmData(role='page')"),
					i = 0 === i.length ? e("body") : i,
					i = e(e.mobile.path.parseUrl(t.attr("href")).hash, i[0]);
				i.data("mobile-popup") && (n = t.offset(), i.popup("open", {
					x: n.left + t.outerWidth() / 2,
					y: n.top + t.outerHeight() / 2,
					transition: t.jqmData("transition"),
					positionTo: t.jqmData("position-to")
				})), setTimeout(function() {
					var n = t.parent().parent();
					n.hasClass("ui-li") && (t = n.parent()), t.removeClass(e.mobile.activeBtnClass)
				}, 300)
			}, e.mobile.document.bind("pagebeforechange", function(t, n) {
				"popup" === n.options.role && (e.mobile.popup.handleLink(n.options.link), t.preventDefault())
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.popup.prototype.enhanceWithin(t.target, !0)
			})
		}(e),
		function(e, t) {
			var i = function(i) {
				var a, o = (i.select, i._destroy),
					r = i.selectID,
					s = r ? r : (e.mobile.ns || "") + "uuid-" + i.uuid,
					l = s + "-listbox",
					s = s + "-dialog",
					c = i.label,
					u = i.select.closest(".ui-page"),
					m = i._selectOptions(),
					d = i.isMultiple = i.select[0].multiple,
					p = r + "-button",
					h = r + "-menu",
					g = e("<div data-" + e.mobile.ns + "role='dialog' id='" + s + "' data-" + e.mobile.ns + "theme='" + i.options.theme + "' data-" + e.mobile.ns + "overlay-theme='" + i.options.overlayTheme + "'><div data-" + e.mobile.ns + "role='header'><div class='ui-title'>" + c.getEncodedText() + "</div></div><div data-" + e.mobile.ns + "role='content'></div></div>"),
					f = e("<div id='" + l + "' class='ui-selectmenu'>").insertAfter(i.select).popup({
						theme: i.options.overlayTheme
					}),
					y = e("<ul>", {
						"class": "ui-selectmenu-list",
						id: h,
						role: "listbox",
						"aria-labelledby": p
					}).attr("data-" + e.mobile.ns + "theme", i.options.theme).attr("data-" + e.mobile.ns + "divider-theme", i.options.dividerTheme).appendTo(f),
					b = e("<div>", {
						"class": "ui-header ui-bar-" + i.options.theme
					}).prependTo(f),
					v = e("<h1>", {
						"class": "ui-title"
					}).appendTo(b);
				i.isMultiple && (a = e("<a>", {
					text: i.options.closeText,
					href: "#",
					"class": "ui-btn-left"
				}).attr("data-" + e.mobile.ns + "iconpos", "notext").attr("data-" + e.mobile.ns + "icon", "delete").appendTo(b).buttonMarkup()), e.extend(i, {
					select: i.select,
					selectID: r,
					buttonId: p,
					menuId: h,
					popupID: l,
					dialogID: s,
					thisPage: u,
					menuPage: g,
					label: c,
					selectOptions: m,
					isMultiple: d,
					theme: i.options.theme,
					listbox: f,
					list: y,
					header: b,
					headerTitle: v,
					headerClose: a,
					menuPageContent: void 0,
					menuPageClose: void 0,
					placeholder: "",
					build: function() {
						var n = this;
						n.refresh(), n._origTabIndex === t && (n._origTabIndex = null === n.select[0].getAttribute("tabindex") ? !1 : n.select.attr("tabindex")), n.select.attr("tabindex", "-1").focus(function() {
							e(this).blur(), n.button.focus()
						}), n.button.bind("vclick keydown", function(t) {
							n.options.disabled || n.isOpen || ("vclick" === t.type || t.keyCode && (t.keyCode === e.mobile.keyCode.ENTER || t.keyCode === e.mobile.keyCode.SPACE)) && (n._decideFormat(), "overlay" === n.menuType ? n.button.attr("href", "#" + n.popupID).attr("data-" + (e.mobile.ns || "") + "rel", "popup") : n.button.attr("href", "#" + n.dialogID).attr("data-" + (e.mobile.ns || "") + "rel", "dialog"), n.isOpen = !0)
						}), n.list.attr("role", "listbox").bind("focusin", function(t) {
							e(t.target).attr("tabindex", "0").trigger("vmouseover")
						}).bind("focusout", function(t) {
							e(t.target).attr("tabindex", "-1").trigger("vmouseout")
						}).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function(t) {
							var a = n.select[0].selectedIndex,
								o = n.list.find("li:not(.ui-li-divider)").index(this),
								r = n._selectOptions().eq(o)[0];
							r.selected = n.isMultiple ? !r.selected : !0, n.isMultiple && e(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", r.selected).toggleClass("ui-icon-checkbox-off", !r.selected), (n.isMultiple || a !== o) && n.select.trigger("change"), n.isMultiple ? n.list.find("li:not(.ui-li-divider)").eq(o).addClass("ui-btn-down-" + i.options.theme).find("a").first().focus() : n.close(), t.preventDefault()
						}).keydown(function(t) {
							var n, a, o = e(t.target),
								r = o.closest("li");
							switch (t.keyCode) {
								case 38:
									return n = r.prev().not(".ui-selectmenu-placeholder"), n.is(".ui-li-divider") && (n = n.prev()), n.length && (o.blur().attr("tabindex", "-1"), n.addClass("ui-btn-down-" + i.options.theme).find("a").first().focus()), !1;
								case 40:
									return a = r.next(), a.is(".ui-li-divider") && (a = a.next()), a.length && (o.blur().attr("tabindex", "-1"), a.addClass("ui-btn-down-" + i.options.theme).find("a").first().focus()), !1;
								case 13:
								case 32:
									return o.trigger("click"), !1
							}
						}), n.menuPage.bind("pagehide", function() {
							e.mobile._bindPageRemove.call(n.thisPage)
						}), n.listbox.bind("popupafterclose", function() {
							n.close()
						}), n.isMultiple && n.headerClose.click(function() {
							return "overlay" === n.menuType ? (n.close(), !1) : t
						}), n.thisPage.addDependents(this.menuPage)
					},
					_isRebuildRequired: function() {
						var e = this.list.find("li");
						return this._selectOptions().text() !== e.text()
					},
					selected: function() {
						return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
					},
					refresh: function(t) {
						var n, i = this;
						this.element, this.isMultiple, (t || this._isRebuildRequired()) && i._buildList(), n = this.selectedIndices(), i.setButtonText(), i.setButtonCount(), i.list.find("li:not(.ui-li-divider)").removeClass(e.mobile.activeBtnClass).attr("aria-selected", !1).each(function(t) {
							-1 < e.inArray(t, n) && (t = e(this), t.attr("aria-selected", !0), i.isMultiple ? t.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : t.is(".ui-selectmenu-placeholder") ? t.next().addClass(e.mobile.activeBtnClass) : t.addClass(e.mobile.activeBtnClass))
						})
					},
					close: function() {
						!this.options.disabled && this.isOpen && ("page" === this.menuType ? (this.menuPage.dialog("close"), this.list.appendTo(this.listbox)) : this.listbox.popup("close"), this._focusButton(), this.isOpen = !1)
					},
					open: function() {
						this.button.click()
					},
					_decideFormat: function() {
						function t() {
							var t = n.list.find("." + e.mobile.activeBtnClass + " a");
							0 === t.length && (t = n.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")), t.first().focus().closest("li").addClass("ui-btn-down-" + i.options.theme)
						}
						var n = this,
							a = e.mobile.window,
							o = n.list.parent(),
							r = o.outerHeight(),
							o = (o.outerWidth(), e("." + e.mobile.activePageClass), a.scrollTop()),
							s = n.button.offset().top,
							l = a.height();
						a.width(), r > l - 80 || !e.support.scrollTop ? (n.menuPage.appendTo(e.mobile.pageContainer).page(), n.menuPageContent = g.find(".ui-content"), n.menuPageClose = g.find(".ui-header a"), n.thisPage.unbind("pagehide.remove"), 0 === o && s > l && n.thisPage.one("pagehide", function() {
							e(this).jqmData("lastScroll", s)
						}), n.menuPage.one("pageshow", function() {
							t()
						}).one("pagehide", function() {
							n.close()
						}), n.menuType = "page", n.menuPageContent.append(n.list), n.menuPage.find("div .ui-title").text(n.label.text())) : (n.menuType = "overlay", n.listbox.one("popupafteropen", t))
					},
					_buildList: function() {
						var t = this.options,
							i = this.placeholder,
							a = !0,
							o = this.isMultiple ? "checkbox-off" : "false";
						this.list.empty().filter(".ui-listview").listview("destroy");
						for (var r, s = this.select.find("option"), l = s.length, c = this.select[0], u = "data-" + e.mobile.ns, m = u + "option-index", d = u + "icon", p = u + "role", u = u + "placeholder", h = n.createDocumentFragment(), g = !1, f = 0; l > f; f++, g = !1) {
							var y = s[f],
								b = e(y),
								v = y.parentNode,
								x = b.text(),
								E = n.createElement("a"),
								T = [];
							E.setAttribute("href", "#"), E.appendChild(n.createTextNode(x)), v !== c && "optgroup" === v.nodeName.toLowerCase() && (v = v.getAttribute("label"), v !== r && (r = n.createElement("li"), r.setAttribute(p, "list-divider"), r.setAttribute("role", "option"), r.setAttribute("tabindex", "-1"), r.appendChild(n.createTextNode(v)), h.appendChild(r), r = v)), !a || y.getAttribute("value") && 0 !== x.length && !b.jqmData("placeholder") || (a = !1, g = !0, null === y.getAttribute(u) && (this._removePlaceholderAttr = !0), y.setAttribute(u, !0), t.hidePlaceholderMenuItems && T.push("ui-selectmenu-placeholder"), i !== x && (i = this.placeholder = x)), b = n.createElement("li"), y.disabled && (T.push("ui-disabled"), b.setAttribute("aria-disabled", !0)), b.setAttribute(m, f), b.setAttribute(d, o), g && b.setAttribute(u, !0), b.className = T.join(" "), b.setAttribute("role", "option"), E.setAttribute("tabindex", "-1"), b.appendChild(E), h.appendChild(b)
						}
						this.list[0].appendChild(h), this.isMultiple || i.length ? this.headerTitle.text(this.placeholder) : this.header.hide(), this.list.listview()
					},
					_button: function() {
						return e("<a>", {
							href: "#",
							role: "button",
							id: this.buttonId,
							"aria-haspopup": "true",
							"aria-owns": this.menuId
						})
					},
					_destroy: function() {
						this.close(), this._origTabIndex !== t && (!1 !== this._origTabIndex ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + e.mobile.ns + "placeholder"), this.listbox.remove(), o.apply(this, arguments)
					}
				})
			};
			e.mobile.document.bind("selectmenubeforecreate", function(t) {
				t = e(t.target).data("mobile-selectmenu"), t.options.nativeMenu || 0 !== t.element.parents(":jqmData(role='popup')").length || i(t)
			})
		}(e),
		function(e, t) {
			e.widget("mobile.controlgroup", e.mobile.widget, e.extend({
				options: {
					shadow: !1,
					corners: !0,
					excludeInvisible: !0,
					type: "vertical",
					mini: !1,
					initSelector: ":jqmData(role='controlgroup')"
				},
				_create: function() {
					var n = this.element,
						i = e("<div class='ui-controlgroup-controls'></div>"),
						a = e("<div role='heading' class='ui-controlgroup-label'></div>"),
						o = n.children("legend"),
						r = this;
					n.wrapInner(i), o.length && a.append(o).insertBefore(n.children(0)), n.addClass("ui-corner-all ui-controlgroup"), e.extend(this, {
						_initialRefresh: !0
					}), e.each(this.options, function(e, n) {
						r.options[e] = t, r._setOption(e, n, !0)
					})
				},
				_init: function() {
					this.refresh()
				},
				_setOption: function(n, i) {
					var a = "_set" + n.charAt(0).toUpperCase() + n.slice(1);
					this[a] !== t && this[a](i), this._super(n, i), this.element.attr("data-" + (e.mobile.ns || "") + n.replace(/([A-Z])/, "-$1").toLowerCase(), i)
				},
				_setType: function(e) {
					this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + e), this.refresh()
				},
				_setCorners: function(e) {
					this.element.toggleClass("ui-corner-all", e)
				},
				_setShadow: function(e) {
					this.element.toggleClass("ui-shadow", e)
				},
				_setMini: function(e) {
					this.element.toggleClass("ui-mini", e)
				},
				container: function() {
					return this.element.children(".ui-controlgroup-controls")
				},
				refresh: function() {
					var t = this.element.find(".ui-btn").not(".ui-slider-handle"),
						n = this._initialRefresh;
					e.mobile.checkboxradio && this.element.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(t, this.options.excludeInvisible ? this._getVisibles(t, n) : t, n), this._initialRefresh = !1
				}
			}, e.mobile.behaviors.addFirstLastClasses)), e(function() {
				e.mobile.document.bind("pagecreate create", function(t) {
					e.mobile.controlgroup.prototype.enhanceWithin(t.target, !0)
				})
			})
		}(e),
		function(e) {
			e(n).bind("pagecreate create", function(t) {
				e(t.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
			})
		}(e),
		function(e, t) {
			e.widget("mobile.fixedtoolbar", e.mobile.widget, {
				options: {
					visibleOnPageShow: !0,
					disablePageZoom: !0,
					transition: "slide",
					fullscreen: !1,
					tapToggle: !0,
					tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
					hideDuringFocus: "input, textarea, select",
					updatePagePadding: !0,
					trackPersistentToolbars: !0,
					supportBlacklist: function() {
						return !e.support.fixedPosition
					},
					initSelector: ":jqmData(position='fixed')"
				},
				_create: function() {
					var n = this.options,
						i = this.element,
						a = i.is(":jqmData(role='header')") ? "header" : "footer",
						o = i.closest(".ui-page");
					return n.supportBlacklist() ? (this.destroy(), t) : (i.addClass("ui-" + a + "-fixed"), n.fullscreen ? (i.addClass("ui-" + a + "-fullscreen"), o.addClass("ui-page-" + a + "-fullscreen")) : o.addClass("ui-page-" + a + "-fixed"), e.extend(this, {
						_thisPage: null
					}), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers(), t)
				},
				_addTransitionClass: function() {
					var e = this.options.transition;
					e && "none" !== e && ("slide" === e && (e = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(e))
				},
				_bindPageEvents: function() {
					this._thisPage = this.element.closest(".ui-page"), this._on(this._thisPage, {
						pagebeforeshow: "_handlePageBeforeShow",
						webkitAnimationStart: "_handleAnimationStart",
						animationstart: "_handleAnimationStart",
						updatelayout: "_handleAnimationStart",
						pageshow: "_handlePageShow",
						pagebeforehide: "_handlePageBeforeHide"
					})
				},
				_handlePageBeforeShow: function() {
					var t = this.options;
					t.disablePageZoom && e.mobile.zoom.disable(!0), t.visibleOnPageShow || this.hide(!0)
				},
				_handleAnimationStart: function() {
					this.options.updatePagePadding && this.updatePagePadding(this._thisPage)
				},
				_handlePageShow: function() {
					this.updatePagePadding(this._thisPage), this.options.updatePagePadding && this._on(e.mobile.window, {
						throttledresize: "updatePagePadding"
					})
				},
				_handlePageBeforeHide: function(t, n) {
					var i = this.options;
					if (i.disablePageZoom && e.mobile.zoom.enable(!0), i.updatePagePadding && this._off(e.mobile.window, "throttledresize"), i.trackPersistentToolbars) {
						var i = e(".ui-footer-fixed:jqmData(id)", this._thisPage),
							a = e(".ui-header-fixed:jqmData(id)", this._thisPage),
							o = i.length && n.nextPage && e(".ui-footer-fixed:jqmData(id='" + i.jqmData("id") + "')", n.nextPage) || e(),
							r = a.length && n.nextPage && e(".ui-header-fixed:jqmData(id='" + a.jqmData("id") + "')", n.nextPage) || e();
						(o.length || r.length) && (o.add(r).appendTo(e.mobile.pageContainer), n.nextPage.one("pageshow", function() {
							r.prependTo(this), o.appendTo(this)
						}))
					}
				},
				_visible: !0,
				updatePagePadding: function(n) {
					var i = this.element,
						a = i.is(".ui-header"),
						o = parseFloat(i.css(a ? "top" : "bottom"));
					this.options.fullscreen || (n = n && n.type === t && n || this._thisPage || i.closest(".ui-page"), e(n).css("padding-" + (a ? "top" : "bottom"), i.outerHeight() + o))
				},
				_useTransition: function(t) {
					var n = this.element,
						i = e.mobile.window.scrollTop(),
						a = n.height(),
						o = n.closest(".ui-page").height(),
						r = e.mobile.getScreenHeight(),
						n = n.is(":jqmData(role='header')") ? "header" : "footer";
					return !t && (this.options.transition && "none" !== this.options.transition && ("header" === n && !this.options.fullscreen && i > a || "footer" === n && !this.options.fullscreen && o - a > i + r) || this.options.fullscreen)
				},
				show: function(e) {
					var t = this.element;
					this._useTransition(e) ? t.removeClass("out ui-fixed-hidden").addClass("in").animationComplete(function() {
						t.removeClass("in")
					}) : t.removeClass("ui-fixed-hidden"), this._visible = !0
				},
				hide: function(e) {
					var t = this.element,
						n = "out" + ("slide" === this.options.transition ? " reverse" : "");
					this._useTransition(e) ? t.addClass(n).removeClass("in").animationComplete(function() {
						t.addClass("ui-fixed-hidden").removeClass(n)
					}) : t.addClass("ui-fixed-hidden").removeClass(n), this._visible = !1
				},
				toggle: function() {
					this[this._visible ? "hide" : "show"]()
				},
				_bindToggleHandlers: function() {
					var t, n, i = this,
						a = i.options,
						o = !0;
					i.element.closest(".ui-page").bind("vclick", function(t) {
						a.tapToggle && !e(t.target).closest(a.tapToggleBlacklist).length && i.toggle()
					}).bind("focusin focusout", function(r) {
						1025 > screen.width && e(r.target).is(a.hideDuringFocus) && !e(r.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== r.type || o ? "focusin" === r.type && o && (clearTimeout(t), o = !1, n = setTimeout(function() {
							i.hide()
						}, 0)) : (o = !0, clearTimeout(n), t = setTimeout(function() {
							i.show()
						}, 0)))
					})
				},
				_destroy: function() {
					var e = this.element,
						t = e.is(".ui-header");
					e.closest(".ui-page").css("padding-" + (t ? "top" : "bottom"), ""), e.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"), e.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e(t.target).jqmData("fullscreen") && e(e.mobile.fixedtoolbar.prototype.options.initSelector, t.target).not(":jqmData(fullscreen)").jqmData("fullscreen", !0), e.mobile.fixedtoolbar.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e) {
			e.widget("mobile.fixedtoolbar", e.mobile.fixedtoolbar, {
				_create: function() {
					this._super(), this._workarounds()
				},
				_workarounds: function() {
					var e = navigator.userAgent,
						t = navigator.platform,
						n = e.match(/AppleWebKit\/([0-9]+)/),
						n = !!n && n[1],
						i = null;
					if (-1 < t.indexOf("iPhone") || -1 < t.indexOf("iPad") || -1 < t.indexOf("iPod")) i = "ios";
					else {
						if (!(-1 < e.indexOf("Android"))) return;
						i = "android"
					}
					"ios" === i ? this._bindScrollWorkaround() : "android" === i && n && 534 > n && (this._bindScrollWorkaround(), this._bindListThumbWorkaround())
				},
				_viewportOffset: function() {
					var t = this.element,
						n = t.is(".ui-header"),
						i = Math.abs(t.offset().top - e.mobile.window.scrollTop());
					return n || (i = Math.round(i - e.mobile.window.height() + t.outerHeight()) - 60), i
				},
				_bindScrollWorkaround: function() {
					var t = this;
					this._on(e.mobile.window, {
						scrollstop: function() {
							2 < t._viewportOffset() && t._visible && t._triggerRedraw()
						}
					})
				},
				_bindListThumbWorkaround: function() {
					this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
				},
				_triggerRedraw: function() {
					var t = parseFloat(e(".ui-page-active").css("padding-bottom"));
					e(".ui-page-active").css("padding-bottom", t + 1 + "px"), setTimeout(function() {
						e(".ui-page-active").css("padding-bottom", t + "px")
					}, 0)
				},
				destroy: function() {
					this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
				}
			})
		}(e),
		function(e, i) {
			e.widget("mobile.panel", e.mobile.widget, {
				options: {
					classes: {
						panel: "ui-panel",
						panelOpen: "ui-panel-open",
						panelClosed: "ui-panel-closed",
						panelFixed: "ui-panel-fixed",
						panelInner: "ui-panel-inner",
						modal: "ui-panel-dismiss",
						modalOpen: "ui-panel-dismiss-open",
						pagePanel: "ui-page-panel",
						pagePanelOpen: "ui-page-panel-open",
						contentWrap: "ui-panel-content-wrap",
						contentWrapOpen: "ui-panel-content-wrap-open",
						contentWrapClosed: "ui-panel-content-wrap-closed",
						contentFixedToolbar: "ui-panel-content-fixed-toolbar",
						contentFixedToolbarOpen: "ui-panel-content-fixed-toolbar-open",
						contentFixedToolbarClosed: "ui-panel-content-fixed-toolbar-closed",
						animate: "ui-panel-animate"
					},
					animate: !0,
					theme: "c",
					position: "left",
					dismissible: !0,
					display: "reveal",
					initSelector: ":jqmData(role='panel')",
					swipeClose: !0,
					positionFixed: !1
				},
				_panelID: null,
				_closeLink: null,
				_page: null,
				_modal: null,
				_panelInner: null,
				_wrapper: null,
				_fixedToolbar: null,
				_create: function() {
					var t = this,
						n = t.element,
						i = n.closest(":jqmData(role='page')"),
						a = function() {
							return "ui-body-" + e.data(i[0], "mobilePage").options.theme
						};
					e.extend(this, {
						_panelID: n.attr("id"),
						_closeLink: n.find(":jqmData(rel='close')"),
						_page: n.closest(":jqmData(role='page')"),
						_pageTheme: a(),
						_panelInner: function() {
							var e = n.find("." + t.options.classes.panelInner);
							return 0 === e.length && (e = n.children().wrapAll('<div class="' + t.options.classes.panelInner + '" />').parent()), e
						}(),
						_wrapper: function() {
							var n = i.find("." + t.options.classes.contentWrap);
							return 0 === n.length && (n = i.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="' + t.options.classes.contentWrap + " " + a() + '" />').parent(), e.support.cssTransform3d && t.options.animate && n.addClass(t.options.classes.animate)), n
						}(),
						_fixedToolbar: function() {
							var n = i.find("." + t.options.classes.contentFixedToolbar);
							return 0 === n.length && (n = i.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(t.options.classes.contentFixedToolbar), e.support.cssTransform3d && t.options.animate && n.addClass(t.options.classes.animate)), n
						}()
					}), t._addPanelClasses(), t._wrapper.addClass(this.options.classes.contentWrapClosed), t._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed), t._page.addClass(t.options.classes.pagePanel), e.support.cssTransform3d && t.options.animate && this.element.addClass(t.options.classes.animate), t._bindUpdateLayout(), t._bindCloseEvents(), t._bindLinkListeners(), t._bindPageEvents(), t.options.dismissible && t._createModal(), t._bindSwipeEvents()
				},
				_createModal: function() {
					var t = this;
					t._modal = e("<div class='" + t.options.classes.modal + "' data-panelid='" + t._panelID + "'></div>").on("mousedown", function() {
						t.close()
					}).appendTo(this._page)
				},
				_getPosDisplayClasses: function(e) {
					return e + "-position-" + this.options.position + " " + e + "-display-" + this.options.display
				},
				_getPanelClasses: function() {
					var e = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed;
					return this.options.theme && (e += " ui-body-" + this.options.theme), this.options.positionFixed && (e += " " + this.options.classes.panelFixed), e
				},
				_addPanelClasses: function() {
					this.element.addClass(this._getPanelClasses())
				},
				_bindCloseEvents: function() {
					var e = this;
					e._closeLink.on("click.panel", function(t) {
						return t.preventDefault(), e.close(), !1
					}), e.element.on("click.panel", "a:jqmData(ajax='false')", function() {
						e.close()
					})
				},
				_positionPanel: function() {
					var t = this._panelInner.outerHeight(),
						n = t > e.mobile.getScreenHeight();
					n || !this.options.positionFixed ? (n && (this._unfixPanel(), e.mobile.resetActivePageHeight(t)), this._scrollIntoView(t)) : this._fixPanel()
				},
				_scrollIntoView: function(n) {
					e(t).scrollTop() > n && t.scrollTo(0, 0)
				},
				_bindFixListener: function() {
					this._on(e(t), {
						throttledresize: "_positionPanel"
					})
				},
				_unbindFixListener: function() {
					this._off(e(t), "throttledresize")
				},
				_unfixPanel: function() {
					this.options.positionFixed && e.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
				},
				_fixPanel: function() {
					this.options.positionFixed && e.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
				},
				_bindUpdateLayout: function() {
					var e = this;
					e.element.on("updatelayout", function() {
						e._open && e._positionPanel()
					})
				},
				_bindLinkListeners: function() {
					var t = this;
					t._page.on("click.panel", "a", function(n) {
						if (this.href.split("#")[1] === t._panelID && t._panelID !== i) {
							n.preventDefault();
							var a = e(this);
							return a.hasClass("ui-link") || (a.addClass(e.mobile.activeBtnClass), t.element.one("panelopen panelclose", function() {
								a.removeClass(e.mobile.activeBtnClass)
							})), t.toggle(), !1
						}
					})
				},
				_bindSwipeEvents: function() {
					var e = this,
						t = e._modal ? e.element.add(e._modal) : e.element;
					e.options.swipeClose && ("left" === e.options.position ? t.on("swipeleft.panel", function() {
						e.close()
					}) : t.on("swiperight.panel", function() {
						e.close()
					}))
				},
				_bindPageEvents: function() {
					var e = this;
					e._page.on("panelbeforeopen", function(t) {
						e._open && t.target !== e.element[0] && e.close()
					}).on("pagehide", function() {
						e._open && e.close(!0)
					}).on("keyup.panel", function(t) {
						27 === t.keyCode && e._open && e.close()
					})
				},
				_open: !1,
				_contentWrapOpenClasses: null,
				_fixedToolbarOpenClasses: null,
				_modalOpenClasses: null,
				open: function(t) {
					if (!this._open) {
						var n = this,
							i = n.options,
							a = function() {
								n._page.off("panelclose"), n._page.jqmData("panel", "open"), !t && e.support.cssTransform3d && i.animate ? n.element.add(n._wrapper).on(n._transitionEndEvents, o) : setTimeout(o, 0), n.options.theme && "overlay" !== n.options.display && n._page.removeClass(n._pageTheme).addClass("ui-body-" + n.options.theme), n.element.removeClass(i.classes.panelClosed).addClass(i.classes.panelOpen), n._positionPanel(), n.options.theme && "overlay" !== n.options.display && n._wrapper.css("min-height", n._page.css("min-height")), n._contentWrapOpenClasses = n._getPosDisplayClasses(i.classes.contentWrap), n._wrapper.removeClass(i.classes.contentWrapClosed).addClass(n._contentWrapOpenClasses + " " + i.classes.contentWrapOpen), n._fixedToolbarOpenClasses = n._getPosDisplayClasses(i.classes.contentFixedToolbar), n._fixedToolbar.removeClass(i.classes.contentFixedToolbarClosed).addClass(n._fixedToolbarOpenClasses + " " + i.classes.contentFixedToolbarOpen), n._modalOpenClasses = n._getPosDisplayClasses(i.classes.modal) + " " + i.classes.modalOpen, n._modal && n._modal.addClass(n._modalOpenClasses)
							},
							o = function() {
								n.element.add(n._wrapper).off(n._transitionEndEvents, o), n._page.addClass(i.classes.pagePanelOpen), n._bindFixListener(), n._trigger("open")
							};
						0 > this.element.closest(".ui-page-active").length && (t = !0), n._trigger("beforeopen"), "open" === n._page.jqmData("panel") ? n._page.on("panelclose", function() {
							a()
						}) : a(), n._open = !0
					}
				},
				close: function(t) {
					if (this._open) {
						var n = this.options,
							i = this,
							a = function() {
								i.options.theme && "overlay" !== i.options.display && (i._page.removeClass("ui-body-" + i.options.theme).addClass(i._pageTheme), i._wrapper.css("min-height", "")), i.element.add(i._wrapper).off(i._transitionEndEvents, a), i.element.addClass(n.classes.panelClosed), i._wrapper.removeClass(i._contentWrapOpenClasses).addClass(n.classes.contentWrapClosed), i._fixedToolbar.removeClass(i._fixedToolbarOpenClasses).addClass(n.classes.contentFixedToolbarClosed), i._fixPanel(), i._unbindFixListener(), e.mobile.resetActivePageHeight(), i._page.jqmRemoveData("panel"), i._trigger("close")
							};
						0 > this.element.closest(".ui-page-active").length && (t = !0), i._trigger("beforeclose"), !t && e.support.cssTransform3d && n.animate ? i.element.add(i._wrapper).on(i._transitionEndEvents, a) : setTimeout(a, 0), i._page.removeClass(n.classes.pagePanelOpen), i.element.removeClass(n.classes.panelOpen), i._wrapper.removeClass(n.classes.contentWrapOpen), i._fixedToolbar.removeClass(n.classes.contentFixedToolbarOpen), i._modal && i._modal.removeClass(i._modalOpenClasses), i._open = !1
					}
				},
				toggle: function() {
					this[this._open ? "close" : "open"]()
				},
				_transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",
				_destroy: function() {
					var t = this.options.classes,
						n = this.options.theme;
					this.element.siblings("." + t.panel).length ? this._open && (this._wrapper.removeClass(t.contentWrapOpen), this._fixedToolbar.removeClass(t.contentFixedToolbarOpen), this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), n && this._page.removeClass("ui-body-" + n).addClass(this._pageTheme)) : (this._wrapper.children().unwrap(), this._page.find("a").unbind("panelopen panelclose"), this._page.removeClass(t.pagePanel), this._open && (this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), n && this._page.removeClass("ui-body-" + n).addClass(this._pageTheme), e.mobile.resetActivePageHeight())), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), t.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._closeLink.off("click.panel"), this._modal && this._modal.remove(), this.element.off(this._transitionEndEvents).removeClass([t.panelUnfixed, t.panelClosed, t.panelOpen].join(" "))
				}
			}), e(n).bind("pagecreate create", function(t) {
				e.mobile.panel.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e, t) {
			e.widget("mobile.table", e.mobile.widget, {
				options: {
					classes: {
						table: "ui-table"
					},
					initSelector: ":jqmData(role='table')"
				},
				_create: function() {
					this.refresh(!0)
				},
				refresh: function(n) {
					var i = this,
						a = this.element.find("thead tr");
					n && this.element.addClass(this.options.classes.table), i.headers = this.element.find("tr:eq(0)").children(), i.allHeaders = i.headers.add(a.children()), a.each(function() {
						var o = 0;
						e(this).children().each(function() {
							var r = parseInt(e(this).attr("colspan"), 10),
								s = ":nth-child(" + (o + 1) + ")";
							if (e(this).jqmData("colstart", o + 1), r)
								for (var l = 0; r - 1 > l; l++) o++, s += ", :nth-child(" + (o + 1) + ")";
							n === t && e(this).jqmData("cells", ""), e(this).jqmData("cells", i.element.find("tr").not(a.eq(0)).not(this).children(s)), o++
						})
					}), n === t && this.element.trigger("refresh")
				}
			}), e.mobile.document.bind("pagecreate create", function(t) {
				e.mobile.table.prototype.enhanceWithin(t.target)
			})
		}(e),
		function(e, t) {
			e.mobile.table.prototype.options.mode = "columntoggle", e.mobile.table.prototype.options.columnBtnTheme = null, e.mobile.table.prototype.options.columnPopupTheme = null, e.mobile.table.prototype.options.columnBtnText = "Columns...", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
				popup: "ui-table-columntoggle-popup",
				columnBtn: "ui-table-columntoggle-btn",
				priorityPrefix: "ui-table-priority-",
				columnToggleTable: "ui-table-columntoggle"
			}), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function(n) {
				var i, a, o, r, s = e(this),
					l = s.data("mobile-table"),
					c = n.type,
					u = l.options;
				n = e.mobile.ns;
				var m = (s.attr("id") || u.classes.popup) + "-popup";
				"columntoggle" === u.mode && ("refresh" !== c && (l.element.addClass(u.classes.columnToggleTable), i = e("<a href='#" + m + "' class='" + u.classes.columnBtn + "' data-" + n + "rel='popup' data-" + n + "mini='true'>" + u.columnBtnText + "</a>"), a = e("<div data-" + n + "role='popup' data-" + n + "role='fieldcontain' class='" + u.classes.popup + "' id='" + m + "'></div>"), o = e("<fieldset data-" + n + "role='controlgroup'></fieldset>")), l.headers.not("td").each(function(t) {
					var n = e(this).jqmData("priority"),
						i = e(this).add(e(this).jqmData("cells"));
					n && (i.addClass(u.classes.priorityPrefix + n), "refresh" !== c ? e("<label><input type='checkbox' checked />" + e(this).text() + "</label>").appendTo(o).children(0).jqmData("cells", i).checkboxradio({
						theme: u.columnPopupTheme
					}) : e("#" + m + " fieldset div:eq(" + t + ")").find("input").jqmData("cells", i))
				}), "refresh" !== c && o.appendTo(a), r = o === t ? e("#" + m + " fieldset") : o, "refresh" !== c && (r.on("change", "input", function() {
					this.checked ? e(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible") : e(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")
				}), i.insertBefore(s).buttonMarkup({
					theme: u.columnBtnTheme
				}), a.insertBefore(s).popup()), l.update = function() {
					r.find("input").each(function() {
						this.checked ? (this.checked = "table-cell" === e(this).jqmData("cells").eq(0).css("display"), "refresh" === c && e(this).jqmData("cells").addClass("ui-table-cell-visible")) : e(this).jqmData("cells").addClass("ui-table-cell-hidden"), e(this).checkboxradio("refresh")
					})
				}, e.mobile.window.on("throttledresize", l.update), l.update())
			})
		}(e),
		function(e) {
			e.mobile.table.prototype.options.mode = "reflow", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
				reflowTable: "ui-table-reflow",
				cellLabels: "ui-table-cell-label"
			}), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function(t) {
				var n = e(this);
				t = t.type;
				var n = n.data("mobile-table"),
					i = n.options;
				"reflow" === i.mode && ("refresh" !== t && n.element.addClass(i.classes.reflowTable), e(n.allHeaders.get().reverse()).each(function() {
					var t = e(this).jqmData("cells"),
						n = e(this).jqmData("colstart"),
						a = t.not(this).filter("thead th").length && " ui-table-cell-label-top",
						o = e(this).text();
					if ("" !== o)
						if (a) {
							var r = parseInt(e(this).attr("colspan"), 10),
								s = "";
							r && (s = "td:nth-child(" + r + "n + " + n + ")"), t.filter(s).prepend("<b class='" + i.classes.cellLabels + a + "'>" + o + "</b>")
						} else t.prepend("<b class='" + i.classes.cellLabels + "'>" + o + "</b>")
				}))
			})
		}(e),
		function(e, t) {
			function n(e) {
				o = e.originalEvent, c = o.accelerationIncludingGravity, r = Math.abs(c.x), s = Math.abs(c.y), l = Math.abs(c.z), !t.orientation && (r > 7 || (l > 6 && 8 > s || 8 > l && s > 6) && r > 5) ? u.enabled && u.disable() : u.enabled || u.enable()
			}
			e.mobile.iosorientationfixEnabled = !0;
			var a = navigator.userAgent;
			if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(a) && -1 < a.indexOf("AppleWebKit"))) return e.mobile.iosorientationfixEnabled = !1, i;
			var o, r, s, l, c, u = e.mobile.zoom;
			e.mobile.document.on("mobileinit", function() {
				e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", u.enable).bind("devicemotion.iosorientationfix", n)
			})
		}(e, this),
		function(e, t) {
			function i() {
				a.removeClass("ui-mobile-rendering")
			}
			var a = e("html"),
				o = (e("head"), e.mobile.window);
			e(t.document).trigger("mobileinit"), e.mobile.gradeA() && (e.mobile.ajaxBlacklist && (e.mobile.ajaxEnabled = !1), a.addClass("ui-mobile ui-mobile-rendering"), setTimeout(i, 5e3), e.extend(e.mobile, {
				initializePage: function() {
					var t = e.mobile.path,
						a = e(":jqmData(role='page'), :jqmData(role='dialog')"),
						r = t.stripHash(t.stripQueryParams(t.parseLocation().hash)),
						s = n.getElementById(r);
					a.length || (a = e("body").wrapInner("<div data-" + e.mobile.ns + "role='page'></div>").children(0)), a.each(function() {
						var t = e(this);
						t.jqmData("url") || t.attr("data-" + e.mobile.ns + "url", t.attr("id") || location.pathname + location.search)
					}), e.mobile.firstPage = a.first(), e.mobile.pageContainer = e.mobile.firstPage.parent().addClass("ui-mobile-viewport"), o.trigger("pagecontainercreate"), e.mobile.showPageLoadingMsg(), i(), e.mobile.hashListeningEnabled && e.mobile.path.isHashValid(location.hash) && (e(s).is(':jqmData(role="page")') || e.mobile.path.isPath(r) || r === e.mobile.dialogHashKey) ? e.event.special.navigate.isPushStateEnabled() ? (e.mobile.navigate.history.stack = [], e.mobile.navigate(e.mobile.path.isPath(location.hash) ? location.hash : location.href)) : o.trigger("hashchange", [!0]) : (e.mobile.path.isHashValid(location.hash) && (e.mobile.urlHistory.initialDst = r.replace("#", "")), e.event.special.navigate.isPushStateEnabled() && e.mobile.navigate.navigator.squash(t.parseLocation().href), e.mobile.changePage(e.mobile.firstPage, {
						transition: "none",
						reverse: !0,
						changeHash: !1,
						fromHashChange: !0
					}))
				}
			}), e.mobile.navreadyDeferred.resolve(), e(function() {
				t.scrollTo(0, 1), e.mobile.defaultHomeScroll = e.support.scrollTop && 1 !== e.mobile.window.scrollTop() ? 1 : 0, e.mobile.autoInitializePage && e.mobile.initializePage(), o.load(e.mobile.silentScroll), e.support.cssPointerEvents || e.mobile.document.delegate(".ui-disabled", "vclick", function(e) {
					e.preventDefault(), e.stopImmediatePropagation()
				})
			}))
		}(e, this)
}),
function(e) {
	function t(e) {
		switch (e.id) {
			case 0:
				e = new Windows.Foundation.Uri("ms-windows-store:REVIEW?PFN=" + Windows.ApplicationModel.Package.current.id.familyName), Windows.System.Launcher.launchUriAsync(e)
		}
	}

	function n() {}
	var i, a = "undefined" != typeof window.external && "undefined" != typeof window.external.notify,
		o = "undefined" != typeof Windows;
	e.setTrialLicense = function() {}, e.isTrialLicense = function() {
		return !1
	}, e.buyGame = function() {
		if (a) window.external.notify("commandBuyGame");
		else if (o) {
			var e = new Windows.Foundation.Uri("ms-windows-store:PDP?PFN=" + Windows.ApplicationModel.Package.current.id.familyName);
			Windows.System.Launcher.launchUriAsync(e)
		}
	}, e.reviewGame = function() {
		if (a) window.external.notify("commandReviewGame");
		else if (o) {
			var e = new Windows.UI.Popups.MessageDialog("Please feel free to rate this game if you like it.\n\nPress 'OK' if you wish to rate the game now, press 'Cancel' to continue playing.", "We greatly welcome your feedback.");
			e.commands.append(new Windows.UI.Popups.UICommand("OK", t, 0)), e.commands.append(new Windows.UI.Popups.UICommand("Cancel", t, 1)), e.cancelCommandIndex = 1, e.defaultCommandIndex = 0, e.showAsync()
		}
	}, a ? window.external.notify("commandGetTrialLicense") : o && (i = Windows.ApplicationModel.Store.CurrentApp, i = i.licenseInformation, i.addEventListener("licensechanged", n))
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	function t(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 10, i.maxHitPoints = 10, i.armorCoefficient = .5, t.entities.push(i)
	}

	function n(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 30, i.maxHitPoints = 30, i.armorCoefficient = 0, i.damageFactor = 1.5, i.headStyle = e.HeadStyleEnum.Bandaged, t.entities.push(i)
	}

	function i(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 50, i.maxHitPoints = 50, i.armorCoefficient = 0, i.damageFactor = 3, i.headStyle = e.HeadStyleEnum.Police, t.entities.push(i)
	}

	function a(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 20, i.maxHitPoints = 20, i.armorCoefficient = .3, i.damageFactor = 3, i.headStyle = e.HeadStyleEnum.Punk, t.entities.push(i)
	}

	function o(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 20, i.maxHitPoints = 20, i.armorCoefficient = .3, i.damageFactor = 2, i.speed = .7, i.baseSpeed = .7, i.headStyle = e.HeadStyleEnum.Bandit, t.entities.push(i)
	}

	function r(t, n, i, a) {
		i = new e.ZombieEntity(i, t.maxY, .4), i.direction = n, i.scaleFactor = a, i.hitPoints = 35, i.maxHitPoints = 35, i.armorCoefficient = .5, i.speed = .45, i.baseSpeed = .45, i.headStyle = e.HeadStyleEnum.Tourist, t.entities.push(i)
	}
	e.AI = function() {
		if (!(this instanceof e.AI)) throw Error("Constructor called as a function.");
		this.lastUpdate = 0, this.nextUpdateTime = 2, this.phase = 0, this.canStartWaves = !1, this.absoluteTime = 0
	}, e.AI.prototype.update = function(t, n) {
		if (n.primaryWeaponAssignmentDone && n.secondaryWeaponAssignmentDone && (this.absoluteTime += t), n.currentLevelTip = 3 > this.absoluteTime && n.primaryWeaponAssignmentDone && n.secondaryWeaponAssignmentDone ? e.LevelTipEnum.TipFive : e.LevelTipEnum.None, !this.canStartWaves && 1 < n.currentLevel && (0 < n.leftPlayer.stack.objects.length || 0 < n.rightPlayer.stack.objects.length) && (this.canStartWaves = !0), 0 === n.levelStartCooldown && n.primaryWeaponAssignmentDone && n.secondaryWeaponAssignmentDone && n.newItem === e.StackObjectTypeEnum.None) switch (n.currentLevel) {
			case 1:
				this.updateLevelOne(t, n);
				break;
			case 2:
				this.updateLevelTwo(t, n);
				break;
			case 3:
				this.updateLevelThree(t, n);
				break;
			case 4:
				this.updateLevelFour(t, n);
				break;
			case 5:
				this.updateLevelFive(t, n);
				break;
			case 6:
				this.updateLevelSix(t, n);
				break;
			case 7:
				this.updateLevelSeven(t, n);
				break;
			case 8:
				this.updateLevelEight(t, n);
				break;
			case 9:
				this.updateLevelNine(t, n);
				break;
			case 10:
				this.updateLevelTen(t, n);
				break;
			case 11:
				this.updateLevelEleven(t, n);
				break;
			case 12:
				this.updateLevelTwelve(t, n);
				break;
			case 13:
				this.updateLevelThirteen(t, n);
				break;
			case 14:
				this.updateLevelFourteen(t, n);
				break;
			case 15:
				this.updateLevelFifteen(t, n);
				break;
			case 16:
				this.updateLevelSixteen(t, n);
				break;
			case 17:
				this.updateLevelSeventeen(t, n);
				break;
			case 18:
				this.updateLevelEighteen(t, n);
				break;
			case 19:
				this.updateLevelNineteen(t, n);
				break;
			case 20:
				this.updateLevelTwenty(t, n);
				break;
			case 1e3:
				this.updateChallenge1(t, n);
				break;
			case 1001:
				this.updateChallenge2(t, n);
				break;
			default:
				this.updateTestLevel(t, n)
		}
	}, e.AI.prototype.updateChallenge2 = function(t, n) {
		if (n.currentLevelTip = e.LevelTipEnum.None, this.lastUpdate >= this.nextUpdateTime && 1 < n.mountedCrateCount && (i(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), i(n, e.DirectionEnum.Right, n.minX - 5, 1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1)), 8 === this.phase && 3 > n.entities.length) {
			this.phase = 1, this.lastUpdate = 0, this.nextUpdateTime = 2, n.daysCount++, e.getSavedData().daysCountHighScore = Math.max(e.getSavedData().daysCountHighScore, n.daysCount);
			var a = !1;
			n.showHighScoreEffect && 0 < n.daysCount && n.daysCount > e.getSavedData().daysCountHighScore && (a = new e.ProjectileEffect(n.leftPlayer.x + (n.rightPlayer.x - n.leftPlayer.x) / 2, n.maxY - 1, .5, 0, 0, -3, e.EffectTypeEnum.HighScore, 0), a.selfDestroyTime = 1.5, a.startFadeTime = .7, n.effects.push(a), e.SoundManager.playHighScoreSound(), n.showHighScoreEffect = !1, a = !0), a || (a = new e.ProjectileEffect(n.leftPlayer.x + (n.rightPlayer.x - n.leftPlayer.x) / 2, n.maxY - 1, .5, 0, 0, -3, e.EffectTypeEnum.Checkpoint, 0), a.selfDestroyTime = 1.5, a.startFadeTime = .7, n.effects.push(a), e.SoundManager.playCheckpointSound()), i(n, e.DirectionEnum.Right, n.minX - 1.7, 1.05), i(n, e.DirectionEnum.Right, n.minX - 2.7, 1.05), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.05), i(n, e.DirectionEnum.Left, n.maxX + 2, 1.05)
		}
		switch (n.daysCount + 6) {
			case 1:
				this.updateLevelOne(t, n);
				break;
			case 2:
				this.updateLevelTwo(t, n);
				break;
			case 3:
				this.updateLevelThree(t, n);
				break;
			case 4:
				this.updateLevelFour(t, n);
				break;
			case 5:
				this.updateLevelFive(t, n);
				break;
			case 6:
				this.updateLevelSix(t, n);
				break;
			case 7:
				this.updateLevelSeven(t, n);
				break;
			case 8:
				this.updateLevelEight(t, n);
				break;
			case 9:
				this.updateLevelNine(t, n);
				break;
			case 10:
				this.updateLevelTen(t, n);
				break;
			case 11:
				this.updateLevelEleven(t, n);
				break;
			case 12:
				this.updateLevelTwelve(t, n);
				break;
			case 13:
				this.updateLevelThirteen(t, n);
				break;
			case 14:
				this.updateLevelFourteen(t, n);
				break;
			case 15:
				this.updateLevelFifteen(t, n);
				break;
			case 16:
				this.updateLevelSixteen(t, n);
				break;
			case 17:
				this.updateLevelSeventeen(t, n);
				break;
			case 18:
				this.updateLevelEighteen(t, n);
				break;
			case 19:
				this.updateLevelNineteen(t, n);
				break;
			case 20:
				this.updateLevelTwenty(t, n);
				break;
			default:
				this.updateChallenge1(t, n)
		}
	}, e.AI.prototype.updateChallenge1 = function(s, l) {
		if (l.currentLevelTip = e.LevelTipEnum.None, !this.canStartWaves && (0 < l.leftPlayer.stack.objects.length || 0 < l.rightPlayer.stack.objects.length) ? this.canStartWaves = !0 : 0 === this.phase && 0 === l.leftPlayer.stack.objects.length && 0 === l.rightPlayer.stack.objects.length && (l.currentLevelTip = 3 > this.absoluteTime ? e.LevelTipEnum.TipFive : e.LevelTipEnum.TipOne), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime) {
				var c = 2,
					u = 3 < l.mountedCrateCount;
				20 > l.killCount ? (c = .7 < Math.random() ? 3 : 2, this.nextUpdateTime = 6) : 40 > l.killCount ? (c = .7 < Math.random() ? 4 : 2, this.nextUpdateTime = 5) : 60 > l.killCount ? (c = .5 < Math.random() ? 4 : 2, this.nextUpdateTime = 5) : (c = 80 > l.killCount ? .3 < Math.random() ? 4 : 2 : .1 < Math.random() ? 4 : 2, this.nextUpdateTime = 4);
				for (var m = 1, d = 0; c > d; d += 1) {
					var p = .5 < Math.random() ? e.DirectionEnum.Left : e.DirectionEnum.Right,
						h = Math.random(),
						g = 0,
						g = e.DirectionEnum.Left === p ? l.maxX + m : l.minX - m;
					h > .95 ? u ? i(l, p, g, 1) : r(l, p, g, 1) : h > .85 ? u ? i(l, p, g, 1) : o(l, p, g, 1) : h > .8 ? i(l, p, g, 1) : h > .7 ? a(l, p, g, 1) : h > .6 ? n(l, p, g, 1) : u ? i(l, p, g, 1) : t(l, p, g, 1), m += 1
				}
				e.SoundManager.playZombieComing(), this.lastUpdate = 0
			}
			this.lastUpdate += s
		}
	}, e.AI.prototype.updateLevelTwenty = function(t, n) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === n.leftPlayer.stack.objects.length && 0 === n.rightPlayer.stack.objects.length ? n.currentLevelTip = e.LevelTipEnum.TipOne : 4 > n.entities.length && 7 === this.phase && (n.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === n.entities.length) {
				switch (this.phase) {
					case 0:
						a(n, e.DirectionEnum.Right, n.minX - 1, 1.1), i(n, e.DirectionEnum.Right, n.minX - 2, 1), i(n, e.DirectionEnum.Right, n.minX - 3, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(n, e.DirectionEnum.Left, n.maxX + 1, 1), a(n, e.DirectionEnum.Left, n.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						a(n, e.DirectionEnum.Right, n.minX - 1, 1.1), a(n, e.DirectionEnum.Right, n.minX - 1.7, 1), i(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						a(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), a(n, e.DirectionEnum.Left, n.maxX + 2.4, 1), i(n, e.DirectionEnum.Left, n.maxX + 3, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						a(n, e.DirectionEnum.Right, n.minX - 1, 1), a(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), a(n, e.DirectionEnum.Right, n.minX - 2.1, 1), a(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(n, e.DirectionEnum.Left, n.maxX + 1, 1), a(n, e.DirectionEnum.Left, n.maxX + 1.7, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						a(n, e.DirectionEnum.Right, n.minX - 1, 1), a(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), a(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), a(n, e.DirectionEnum.Left, n.maxX + 2, 1), i(n, e.DirectionEnum.Left, n.maxX + 3, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						a(n, e.DirectionEnum.Right, n.minX - 1, 1), a(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), i(n, e.DirectionEnum.Right, n.minX - 5, 1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 3.1, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 5, 1.1), a(n, e.DirectionEnum.Left, n.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelNineteen = function(t, r) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === r.leftPlayer.stack.objects.length && 0 === r.rightPlayer.stack.objects.length ? r.currentLevelTip = e.LevelTipEnum.TipOne : 4 > r.entities.length && 7 === this.phase && (r.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === r.entities.length) {
				switch (this.phase) {
					case 0:
						a(r, e.DirectionEnum.Right, r.minX - 1, 1.1), i(r, e.DirectionEnum.Right, r.minX - 2, 1), i(r, e.DirectionEnum.Right, r.minX - 3, 1.1), i(r, e.DirectionEnum.Right, r.minX - 4, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(r, e.DirectionEnum.Left, r.maxX + 1, 1), a(r, e.DirectionEnum.Left, r.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						a(r, e.DirectionEnum.Right, r.minX - 1, 1.1), o(r, e.DirectionEnum.Right, r.minX - 1.7, 1), o(r, e.DirectionEnum.Right, r.minX - 2.4, 1.1), i(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), o(r, e.DirectionEnum.Left, r.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), o(r, e.DirectionEnum.Left, r.maxX + 1.7, 1), o(r, e.DirectionEnum.Left, r.maxX + 2.4, 1), n(r, e.DirectionEnum.Left, r.maxX + 3, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(r, e.DirectionEnum.Right, r.minX - 1, 1), o(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), a(r, e.DirectionEnum.Right, r.minX - 2.1, 1), o(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), o(r, e.DirectionEnum.Left, r.maxX + 2, 1.1), n(r, e.DirectionEnum.Left, r.maxX + 3, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(r, e.DirectionEnum.Left, r.maxX + 1, 1), a(r, e.DirectionEnum.Left, r.maxX + 1.7, 1.1), o(r, e.DirectionEnum.Left, r.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(r, e.DirectionEnum.Right, r.minX - 1, 1), o(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), o(r, e.DirectionEnum.Right, r.minX - 2.4, 1.1), n(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 1.7, 1), a(r, e.DirectionEnum.Left, r.maxX + 2, 1), i(r, e.DirectionEnum.Left, r.maxX + 3, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(r, e.DirectionEnum.Right, r.minX - 1, 1), o(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), i(r, e.DirectionEnum.Right, r.minX - 5, 1), i(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), i(r, e.DirectionEnum.Left, r.maxX + 2.1, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 3.1, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 5, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelEighteen = function(r, s) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === s.leftPlayer.stack.objects.length && 0 === s.rightPlayer.stack.objects.length ? s.currentLevelTip = e.LevelTipEnum.TipOne : 4 > s.entities.length && 7 === this.phase && (s.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === s.entities.length) {
				switch (this.phase) {
					case 0:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1.1), i(s, e.DirectionEnum.Right, s.minX - 2, 1), i(s, e.DirectionEnum.Right, s.minX - 3, 1.1), i(s, e.DirectionEnum.Right, s.minX - 4, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(s, e.DirectionEnum.Left, s.maxX + 1, 1), a(s, e.DirectionEnum.Left, s.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(s, e.DirectionEnum.Right, s.minX - 1, 1.1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1), o(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), o(s, e.DirectionEnum.Left, s.maxX + 2.4, 1), n(s, e.DirectionEnum.Left, s.maxX + 3, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.1, 1), o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 2, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 3, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(s, e.DirectionEnum.Left, s.maxX + 1, 1), o(s, e.DirectionEnum.Left, s.maxX + 1.7, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), o(s, e.DirectionEnum.Left, s.maxX + 2, 1), i(s, e.DirectionEnum.Left, s.maxX + 3, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.1, 1), o(s, e.DirectionEnum.Right, s.minX - 2.9, 1), i(s, e.DirectionEnum.Right, s.minX - 5, 1), i(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 2.1, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 3.1, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 5, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += r
		}
	}, e.AI.prototype.updateLevelSeventeen = function(t, a) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === a.leftPlayer.stack.objects.length && 0 === a.rightPlayer.stack.objects.length ? a.currentLevelTip = e.LevelTipEnum.TipOne : 4 > a.entities.length && 7 === this.phase && (a.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === a.entities.length) {
				switch (this.phase) {
					case 0:
						i(a, e.DirectionEnum.Right, a.minX - 1, 1), i(a, e.DirectionEnum.Right, a.minX - 2, 1.1), i(a, e.DirectionEnum.Right, a.minX - 3, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(a, e.DirectionEnum.Left, a.maxX + 1, 1), i(a, e.DirectionEnum.Left, a.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(a, e.DirectionEnum.Right, a.minX - 1, 1.1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1), o(a, e.DirectionEnum.Right, a.minX - 2.4, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1), o(a, e.DirectionEnum.Left, a.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.1, 1), o(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(a, e.DirectionEnum.Left, a.maxX + 1, 1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.4, 1.1), n(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1), i(a, e.DirectionEnum.Left, a.maxX + 3, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.1, 1), o(a, e.DirectionEnum.Right, a.minX - 2.9, 1), i(a, e.DirectionEnum.Right, a.minX - 5, 1), i(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 2.1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 3.1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelSixteen = function(t, a) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === a.leftPlayer.stack.objects.length && 0 === a.rightPlayer.stack.objects.length ? a.currentLevelTip = e.LevelTipEnum.TipOne : 4 > a.entities.length && 7 === this.phase && (a.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === a.entities.length) {
				switch (this.phase) {
					case 0:
						i(a, e.DirectionEnum.Right, a.minX - 1, 1), i(a, e.DirectionEnum.Right, a.minX - 2, 1.1), n(a, e.DirectionEnum.Right, a.minX - 3, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(a, e.DirectionEnum.Left, a.maxX + 1, 1), i(a, e.DirectionEnum.Left, a.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(a, e.DirectionEnum.Right, a.minX - 1, 1.1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1), o(a, e.DirectionEnum.Right, a.minX - 2.4, 1.1), n(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1), o(a, e.DirectionEnum.Left, a.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.1, 1), o(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						n(a, e.DirectionEnum.Left, a.maxX + 1, 1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.4, 1.1), n(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), o(a, e.DirectionEnum.Left, a.maxX + 1.7, 1), o(a, e.DirectionEnum.Left, a.maxX + 2, 1), i(a, e.DirectionEnum.Left, a.maxX + 3, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(a, e.DirectionEnum.Right, a.minX - 1, 1), o(a, e.DirectionEnum.Right, a.minX - 1.7, 1.1), o(a, e.DirectionEnum.Right, a.minX - 2.1, 1), o(a, e.DirectionEnum.Right, a.minX - 2.9, 1), o(a, e.DirectionEnum.Right, a.minX - 5, 1), i(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 2.1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 3.1, 1.1), i(a, e.DirectionEnum.Left, a.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelFifteen = function(t, n) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === n.leftPlayer.stack.objects.length && 0 === n.rightPlayer.stack.objects.length ? n.currentLevelTip = e.LevelTipEnum.TipOne : 4 > n.entities.length && 7 === this.phase && (n.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === n.entities.length) {
				switch (this.phase) {
					case 0:
						i(n, e.DirectionEnum.Right, n.minX - 1, 1), i(n, e.DirectionEnum.Right, n.minX - 2, 1.1), this.nextUpdateTime = 15, e.SoundManager.playZombieComing();
						break;
					case 1:
						i(n, e.DirectionEnum.Left, n.maxX + 1, 1), i(n, e.DirectionEnum.Left, n.maxX + 2, 1), this.nextUpdateTime = 20, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1.1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1), o(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), o(n, e.DirectionEnum.Left, n.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.1, 1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.1, 1), o(n, e.DirectionEnum.Right, n.minX - 2.9, 1), o(n, e.DirectionEnum.Right, n.minX - 5, 1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 3.1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelFourteen = function(t, n) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === n.leftPlayer.stack.objects.length && 0 === n.rightPlayer.stack.objects.length ? n.currentLevelTip = e.LevelTipEnum.TipOne : 4 > n.entities.length && 7 === this.phase && (n.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === n.entities.length) {
				switch (this.phase) {
					case 0:
						r(n, e.DirectionEnum.Right, n.minX - 1, 1), r(n, e.DirectionEnum.Right, n.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						r(n, e.DirectionEnum.Left, n.maxX + 1, 1), r(n, e.DirectionEnum.Left, n.maxX + 2, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						r(n, e.DirectionEnum.Right, n.minX - 1, 1.1), r(n, e.DirectionEnum.Right, n.minX - 1.7, 1), r(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						r(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), r(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						r(n, e.DirectionEnum.Right, n.minX - 1, 1), r(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), r(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), r(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(n, e.DirectionEnum.Left, n.maxX + 1, 1), i(n, e.DirectionEnum.Left, n.maxX + 1.7, 1.1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						i(n, e.DirectionEnum.Right, n.minX - 1, 1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						r(n, e.DirectionEnum.Right, n.minX - 1, 1), r(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), i(n, e.DirectionEnum.Right, n.minX - 2.9, 1), i(n, e.DirectionEnum.Right, n.minX - 5, 1), r(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), r(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 3.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelThirteen = function(t, n) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === n.leftPlayer.stack.objects.length && 0 === n.rightPlayer.stack.objects.length ? n.currentLevelTip = e.LevelTipEnum.TipOne : 4 > n.entities.length && 7 === this.phase && (n.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === n.entities.length) {
				switch (this.phase) {
					case 0:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1), o(n, e.DirectionEnum.Right, n.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1.1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1), o(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), o(n, e.DirectionEnum.Left, n.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.1, 1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						i(n, e.DirectionEnum.Left, n.maxX + 1, 1), i(n, e.DirectionEnum.Left, n.maxX + 1.7, 1.1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						i(n, e.DirectionEnum.Right, n.minX - 1, 1), i(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), i(n, e.DirectionEnum.Right, n.minX - 2.9, 1), i(n, e.DirectionEnum.Right, n.minX - 5, 1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 3.1, 1.1), i(n, e.DirectionEnum.Left, n.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelTwelve = function(t, n) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === n.leftPlayer.stack.objects.length && 0 === n.rightPlayer.stack.objects.length ? n.currentLevelTip = e.LevelTipEnum.TipOne : 4 > n.entities.length && 7 === this.phase && (n.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === n.entities.length) {
				switch (this.phase) {
					case 0:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1), o(n, e.DirectionEnum.Right, n.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1.1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1), o(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), o(n, e.DirectionEnum.Left, n.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.1, 1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						o(n, e.DirectionEnum.Left, n.maxX + 1, 1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.4, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 1.7, 1), o(n, e.DirectionEnum.Left, n.maxX + 2, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						o(n, e.DirectionEnum.Right, n.minX - 1, 1), o(n, e.DirectionEnum.Right, n.minX - 1.7, 1.1), o(n, e.DirectionEnum.Right, n.minX - 2.1, 1), o(n, e.DirectionEnum.Right, n.minX - 2.9, 1), o(n, e.DirectionEnum.Right, n.minX - 5, 1), o(n, e.DirectionEnum.Left, n.maxX + 1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 2.1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 3.1, 1.1), o(n, e.DirectionEnum.Left, n.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelEleven = function(t, i) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === i.leftPlayer.stack.objects.length && 0 === i.rightPlayer.stack.objects.length ? i.currentLevelTip = e.LevelTipEnum.TipOne : 4 > i.entities.length && 7 === this.phase && (i.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === i.entities.length) {
				switch (this.phase) {
					case 0:
						n(i, e.DirectionEnum.Right, i.minX - 1, 1), n(i, e.DirectionEnum.Right, i.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						n(i, e.DirectionEnum.Left, i.maxX + 1, 1), n(i, e.DirectionEnum.Right, i.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(i, e.DirectionEnum.Right, i.minX - 1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(i, e.DirectionEnum.Left, i.maxX + 1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 1.7, 1), n(i, e.DirectionEnum.Left, i.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						n(i, e.DirectionEnum.Right, i.minX - 1, 1), n(i, e.DirectionEnum.Right, i.minX - 1.7, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						n(i, e.DirectionEnum.Left, i.maxX + 1, 1), n(i, e.DirectionEnum.Left, i.maxX + 1.7, 1.1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						n(i, e.DirectionEnum.Right, i.minX - 1, 1), n(i, e.DirectionEnum.Right, i.minX - 1.7, 1.1), n(i, e.DirectionEnum.Right, i.minX - 2.4, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 1.7, 1), n(i, e.DirectionEnum.Left, i.maxX + 2, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						n(i, e.DirectionEnum.Right, i.minX - 1, 1), n(i, e.DirectionEnum.Right, i.minX - 1.7, 1.1), n(i, e.DirectionEnum.Right, i.minX - 2.1, 1), n(i, e.DirectionEnum.Right, i.minX - 2.9, 1), n(i, e.DirectionEnum.Right, i.minX - 5, 1), n(i, e.DirectionEnum.Left, i.maxX + 1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 2.1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 3.1, 1.1), n(i, e.DirectionEnum.Left, i.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += t
		}
	}, e.AI.prototype.updateLevelTen = function(s, l) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === l.leftPlayer.stack.objects.length && 0 === l.rightPlayer.stack.objects.length ? l.currentLevelTip = e.LevelTipEnum.TipOne : 4 > l.entities.length && 7 === this.phase && (l.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === l.entities.length) {
				switch (this.phase) {
					case 0:
						t(l, e.DirectionEnum.Right, l.minX - 1, 1), t(l, e.DirectionEnum.Right, l.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						r(l, e.DirectionEnum.Left, l.maxX + 1, 1), t(l, e.DirectionEnum.Left, l.maxX + 2, 1), t(l, e.DirectionEnum.Left, l.maxX + 2.4, 1.1), t(l, e.DirectionEnum.Right, l.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(l, e.DirectionEnum.Right, l.minX - 1, 1.1), o(l, e.DirectionEnum.Right, l.minX - 1.7, 1), o(l, e.DirectionEnum.Right, l.minX - 2.4, 1.1), o(l, e.DirectionEnum.Left, l.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(l, e.DirectionEnum.Left, l.maxX + 1, 1.1), o(l, e.DirectionEnum.Left, l.maxX + 1.7, 1), o(l, e.DirectionEnum.Left, l.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						n(l, e.DirectionEnum.Right, l.minX - 1, 1), n(l, e.DirectionEnum.Right, l.minX - 1.7, 1.1), n(l, e.DirectionEnum.Right, l.minX - 2.1, 1), n(l, e.DirectionEnum.Left, l.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						n(l, e.DirectionEnum.Left, l.maxX + 1, 1), n(l, e.DirectionEnum.Left, l.maxX + 1.7, 1.1), n(l, e.DirectionEnum.Left, l.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						i(l, e.DirectionEnum.Right, l.minX - 1, 1), i(l, e.DirectionEnum.Right, l.minX - 1.7, 1.1), i(l, e.DirectionEnum.Right, l.minX - 2.4, 1.1), i(l, e.DirectionEnum.Left, l.maxX + 1, 1.1), i(l, e.DirectionEnum.Left, l.maxX + 1.7, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(l, e.DirectionEnum.Right, l.minX - 1, 1), n(l, e.DirectionEnum.Right, l.minX - 1.7, 1.1), o(l, e.DirectionEnum.Right, l.minX - 2.1, 1), n(l, e.DirectionEnum.Right, l.minX - 2.9, 1), i(l, e.DirectionEnum.Right, l.minX - 5, 1), n(l, e.DirectionEnum.Left, l.maxX + 1, 1.1), a(l, e.DirectionEnum.Left, l.maxX + 2.1, 1.1), a(l, e.DirectionEnum.Left, l.maxX + 3.1, 1.1), i(l, e.DirectionEnum.Left, l.maxX + 5, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += s
		}
	}, e.AI.prototype.updateLevelNine = function(r, s) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === s.leftPlayer.stack.objects.length && 0 === s.rightPlayer.stack.objects.length ? s.currentLevelTip = e.LevelTipEnum.TipOne : 4 > s.entities.length && 7 === this.phase && (s.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === s.entities.length) {
				switch (this.phase) {
					case 0:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), t(s, e.DirectionEnum.Right, s.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(s, e.DirectionEnum.Left, s.maxX + 1, 1), t(s, e.DirectionEnum.Left, s.maxX + 2, 1), t(s, e.DirectionEnum.Left, s.maxX + 2.4, 1.1), t(s, e.DirectionEnum.Right, s.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1.1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1), o(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), o(s, e.DirectionEnum.Left, s.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						n(s, e.DirectionEnum.Right, s.minX - 1, 1), n(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), n(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						n(s, e.DirectionEnum.Left, s.maxX + 1, 1), n(s, e.DirectionEnum.Left, s.maxX + 1.7, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						i(s, e.DirectionEnum.Right, s.minX - 1, 1), i(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), i(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), n(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Right, s.minX - 2.9, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 2.1, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 3.1, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 4, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += r
		}
	}, e.AI.prototype.updateLevelEight = function(r, s) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === s.leftPlayer.stack.objects.length && 0 === s.rightPlayer.stack.objects.length ? s.currentLevelTip = e.LevelTipEnum.TipOne : 4 > s.entities.length && 7 === this.phase && (s.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === s.entities.length) {
				switch (this.phase) {
					case 0:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), t(s, e.DirectionEnum.Right, s.minX - 2, 1.1), this.nextUpdateTime = 2, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(s, e.DirectionEnum.Left, s.maxX + 1, 1), t(s, e.DirectionEnum.Left, s.maxX + 2, 1), t(s, e.DirectionEnum.Left, s.maxX + 2.4, 1.1), t(s, e.DirectionEnum.Right, s.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1.1), o(s, e.DirectionEnum.Right, s.minX - 1.7, 1), o(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						o(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), o(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), o(s, e.DirectionEnum.Left, s.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						n(s, e.DirectionEnum.Right, s.minX - 1, 1), n(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), n(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(s, e.DirectionEnum.Left, s.maxX + 1, 1), n(s, e.DirectionEnum.Left, s.maxX + 1.7, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), t(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), i(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), n(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Right, s.minX - 2.9, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 2.1, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 3.1, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 4, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += r
		}
	}, e.AI.prototype.updateLevelSeven = function(r, s) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === s.leftPlayer.stack.objects.length && 0 === s.rightPlayer.stack.objects.length ? s.currentLevelTip = e.LevelTipEnum.TipOne : 4 > s.entities.length && 7 === this.phase && (s.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === s.entities.length) {
				switch (this.phase) {
					case 0:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1), o(s, e.DirectionEnum.Right, s.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(s, e.DirectionEnum.Left, s.maxX + 1, 1), t(s, e.DirectionEnum.Left, s.maxX + 2, 1), n(s, e.DirectionEnum.Left, s.maxX + 2.4, 1.1), o(s, e.DirectionEnum.Right, s.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(s, e.DirectionEnum.Right, s.minX - 1, 1.1), t(s, e.DirectionEnum.Right, s.minX - 1.7, 1), o(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), i(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), t(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), t(s, e.DirectionEnum.Left, s.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), t(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), n(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						o(s, e.DirectionEnum.Left, s.maxX + 1, 1), i(s, e.DirectionEnum.Left, s.maxX + 1.7, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						o(s, e.DirectionEnum.Right, s.minX - 1, 1), t(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), t(s, e.DirectionEnum.Right, s.minX - 2.4, 1.1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), t(s, e.DirectionEnum.Left, s.maxX + 1.7, 1), n(s, e.DirectionEnum.Left, s.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(s, e.DirectionEnum.Right, s.minX - 1, 1), n(s, e.DirectionEnum.Right, s.minX - 1.7, 1.1), o(s, e.DirectionEnum.Right, s.minX - 2.1, 1), n(s, e.DirectionEnum.Right, s.minX - 2.9, 1), n(s, e.DirectionEnum.Left, s.maxX + 1, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 2.1, 1.1), a(s, e.DirectionEnum.Left, s.maxX + 3.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += r
		}
	}, e.AI.prototype.updateLevelSix = function(o, r) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === r.leftPlayer.stack.objects.length && 0 === r.rightPlayer.stack.objects.length ? r.currentLevelTip = e.LevelTipEnum.TipOne : 4 > r.entities.length && 7 === this.phase && (r.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === r.entities.length) {
				switch (this.phase) {
					case 0:
						n(r, e.DirectionEnum.Right, r.minX - 1, 1), n(r, e.DirectionEnum.Right, r.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(r, e.DirectionEnum.Left, r.maxX + 1, 1), t(r, e.DirectionEnum.Left, r.maxX + 2, 1), n(r, e.DirectionEnum.Left, r.maxX + 2.4, 1.1), n(r, e.DirectionEnum.Right, r.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(r, e.DirectionEnum.Right, r.minX - 1, 1.1), t(r, e.DirectionEnum.Right, r.minX - 1.7, 1), t(r, e.DirectionEnum.Right, r.minX - 2.4, 1.1), i(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), t(r, e.DirectionEnum.Left, r.maxX + 1.7, 1), t(r, e.DirectionEnum.Left, r.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(r, e.DirectionEnum.Right, r.minX - 1, 1), t(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), n(r, e.DirectionEnum.Right, r.minX - 2.1, 1), n(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(r, e.DirectionEnum.Left, r.maxX + 1, 1), i(r, e.DirectionEnum.Left, r.maxX + 1.7, 1.1), n(r, e.DirectionEnum.Left, r.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(r, e.DirectionEnum.Right, r.minX - 1, 1), t(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), t(r, e.DirectionEnum.Right, r.minX - 2.4, 1.1), n(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), t(r, e.DirectionEnum.Left, r.maxX + 1.7, 1), n(r, e.DirectionEnum.Left, r.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(r, e.DirectionEnum.Right, r.minX - 1, 1), n(r, e.DirectionEnum.Right, r.minX - 1.7, 1.1), t(r, e.DirectionEnum.Right, r.minX - 2.1, 1), n(r, e.DirectionEnum.Right, r.minX - 2.9, 1), n(r, e.DirectionEnum.Left, r.maxX + 1, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 2.1, 1.1), a(r, e.DirectionEnum.Left, r.maxX + 3.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += o
		}
	}, e.AI.prototype.updateLevelFive = function(i, o) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === o.leftPlayer.stack.objects.length && 0 === o.rightPlayer.stack.objects.length ? o.currentLevelTip = e.LevelTipEnum.TipOne : 4 > o.entities.length && 7 === this.phase && (o.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === o.entities.length) {
				switch (this.phase) {
					case 0:
						n(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 2, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1.1), n(o, e.DirectionEnum.Right, o.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(o, e.DirectionEnum.Right, o.minX - 1, 1.1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1), t(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Right, o.minX - 2.1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), n(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.1, 1), n(o, e.DirectionEnum.Right, o.minX - 2.9, 1), t(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), a(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), a(o, e.DirectionEnum.Left, o.maxX + 3.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += i
		}
	}, e.AI.prototype.updateLevelFour = function(i, o) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === o.leftPlayer.stack.objects.length && 0 === o.rightPlayer.stack.objects.length ? o.currentLevelTip = e.LevelTipEnum.TipOne : 4 > o.entities.length && 7 === this.phase && (o.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === o.entities.length) {
				switch (this.phase) {
					case 0:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 2, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(o, e.DirectionEnum.Right, o.minX - 1, 1.1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1), n(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Right, o.minX - 2.1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1, 1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), n(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.1, 1), n(o, e.DirectionEnum.Right, o.minX - 2.9, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), a(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += i
		}
	}, e.AI.prototype.updateLevelThree = function(i, o) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === o.leftPlayer.stack.objects.length && 0 === o.rightPlayer.stack.objects.length ? o.currentLevelTip = e.LevelTipEnum.TipOne : 4 > o.entities.length && 7 === this.phase ? o.currentLevelTip = e.LevelTipEnum.TipThree : 2 < this.phase && 4 > o.leftPlayer.stack.objects.length + o.rightPlayer.stack.objects.length && (o.currentLevelTip = e.LevelTipEnum.TipTwo), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === o.entities.length) {
				switch (this.phase) {
					case 0:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 2, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(o, e.DirectionEnum.Right, o.minX - 1, 1.1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1), n(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1), n(o, e.DirectionEnum.Left, o.maxX + 2.4, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Right, o.minX - 2.1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Right, o.minX - 2.4, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), n(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.1, 1), a(o, e.DirectionEnum.Right, o.minX - 2.5, 1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), a(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += i
		}
	}, e.AI.prototype.updateLevelTwo = function(i, o) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === o.leftPlayer.stack.objects.length && 0 === o.rightPlayer.stack.objects.length ? o.currentLevelTip = e.LevelTipEnum.TipOne : 4 > o.entities.length && 7 === this.phase ? o.currentLevelTip = e.LevelTipEnum.TipThree : 2 < this.phase && 4 > o.leftPlayer.stack.objects.length + o.rightPlayer.stack.objects.length && (o.currentLevelTip = e.LevelTipEnum.TipTwo), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === o.entities.length) {
				switch (this.phase) {
					case 0:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 2, 1.1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1.2, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), n(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), n(o, e.DirectionEnum.Right, o.minX - 2.1, 1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(o, e.DirectionEnum.Left, o.maxX + 1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), t(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Left, o.maxX + 1, 1), n(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 2.1, 1.1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(o, e.DirectionEnum.Right, o.minX - 1, 1), a(o, e.DirectionEnum.Right, o.minX - 1.7, 1.1), t(o, e.DirectionEnum.Right, o.minX - 2.1, 1), t(o, e.DirectionEnum.Left, o.maxX + 1.7, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 1, 1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += i
		}
	}, e.AI.prototype.updateLevelOne = function(i, o) {
		var r;
		switch (o.currentLevelStage) {
			case e.LevelStageEnum.TutorialZombiesComing:
				0 === o.entities.length && (t(o, e.DirectionEnum.Right, o.minX - 4.2, 1), t(o, e.DirectionEnum.Right, o.minX - 5, 1.1), e.SoundManager.playZombieComing());
				break;
			case e.LevelStageEnum.TutorialHitBuildButton:
			case e.LevelStageEnum.TutorialHitCrateButton:
			case e.LevelStageEnum.TutorialBuildingFirstCrate:
			case e.LevelStageEnum.TutorialTapToContinue:
			case e.LevelStageEnum.TutorialTurnRight:
				for (r = 0; r < o.entities.length; r += 1) o.entities[r].moveCooldown = .2;
				break;
			case e.LevelStageEnum.TutorialMoreZombiesComing:
				0 === o.entities.length && (o.survivalPoints = 40, t(o, e.DirectionEnum.Left, o.maxX + 3.2, 1), t(o, e.DirectionEnum.Left, o.maxX + 3.5, 1), t(o, e.DirectionEnum.Left, o.maxX + 5, 1.1), n(o, e.DirectionEnum.Left, o.maxX + 6, 1.1), a(o, e.DirectionEnum.Left, o.maxX + 7, 1), e.SoundManager.playZombieComing());
				break;
			case e.LevelStageEnum.TutorialFirstWave:
				0 === o.entities.length && (o.currentLevelStage = e.LevelStageEnum.TutorialFirstWaveDone);
				break;
			case e.LevelStageEnum.TutorialFirstWaveFinishJob:
				0 === o.entities.length && (o.currentLevelStage = e.LevelStageEnum.TutorialSecondWaveDone);
				break;
			case e.LevelStageEnum.TutorialThirdWave:
				0 === o.entities.length && (o.survivalPoints = 60, t(o, e.DirectionEnum.Right, o.minX - 1, 1 + .15 * Math.random()), t(o, e.DirectionEnum.Right, o.minX - 2, 1 + .15 * Math.random()), a(o, e.DirectionEnum.Right, o.minX - 3, 1 + .15 * Math.random()), n(o, e.DirectionEnum.Right, o.minX - 4, 1 + .15 * Math.random()), t(o, e.DirectionEnum.Left, o.maxX + 4, 1 + .15 * Math.random()), t(o, e.DirectionEnum.Left, o.maxX + 4.7, 1 + .15 * Math.random()), o.currentLevelStage = e.LevelStageEnum.None, e.SoundManager.playZombieComing())
		}
		this.lastUpdate += i
	}, e.AI.prototype.updateTestLevel = function(i, a) {
		if (3 < this.absoluteTime && 0 === this.phase && 0 === a.leftPlayer.stack.objects.length && 0 === a.rightPlayer.stack.objects.length ? a.currentLevelTip = e.LevelTipEnum.TipOne : 4 > a.entities.length && 7 === this.phase && (a.currentLevelTip = e.LevelTipEnum.TipThree), this.canStartWaves) {
			if (this.lastUpdate > this.nextUpdateTime || 0 === a.entities.length) {
				switch (this.phase) {
					case 0:
						t(a, e.DirectionEnum.Right, a.minX - 1, 1), this.nextUpdateTime = 4, e.SoundManager.playZombieComing();
						break;
					case 1:
						t(a, e.DirectionEnum.Left, a.maxX + 1, 1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 2:
						n(a, e.DirectionEnum.Right, a.minX - 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 3:
						n(a, e.DirectionEnum.Left, a.maxX + 1, 1.1), this.nextUpdateTime = 10, e.SoundManager.playZombieComing();
						break;
					case 4:
						t(a, e.DirectionEnum.Right, a.minX - 1, 1), this.nextUpdateTime = 12, e.SoundManager.playZombieComing();
						break;
					case 5:
						t(a, e.DirectionEnum.Left, a.maxX + 1, 1), this.nextUpdateTime = 18, e.SoundManager.playZombieComing();
						break;
					case 6:
						t(a, e.DirectionEnum.Right, a.minX - 1, 1), this.nextUpdateTime = 35, e.SoundManager.playZombieComing();
						break;
					case 7:
						t(a, e.DirectionEnum.Right, a.minX - 1, 1), e.SoundManager.playZombieComing()
				}
				this.phase += 1, this.lastUpdate = 0
			}
			this.lastUpdate += i
		}
	}
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	e.AssetResolutionEnum = {
		LoRes: 683,
		HiRes: 1366
	}, e.GameStateEnum = {
		GamePreLoading: 0,
		GameStart: 1,
		GameIntro: 2,
		GameMenu: 3,
		GameLoading: 4,
		GameRun: 5,
		GameLost: 6,
		GameWon: 7
	}, e.DirectionEnum = {
		None: 0,
		Right: 1,
		Left: 2
	}, e.EntityStateEnum = {
		Idle: 0,
		Walking: 1
	}, e.EntityClassTypeEnum = {
		None: 0,
		Zombie: 1,
		HumanMale: 2,
		HumanFemale: 3
	}, e.EntitySubClassTypeEnum = {
		None: 0,
		WeakZombie: 1,
		ArmorZombie: 2,
		HeavyArmorZombie: 3,
		FastZombie: 4,
		VeryFastZombie: 5,
		BomberZombie: 6,
		SpikedZombie: 7,
		KillerZombie: 8
	}, e.EffectTypeEnum = {
		None: 0,
		Bullet: 1,
		HeadLimb: 2,
		BodyLimb1: 3,
		BodyLimb2: 4,
		BloodSplatter: 5,
		SmallSmoke: 6,
		BigSmoke: 7,
		Explosion: 8,
		Impact: 9,
		Warhead: 10,
		GunFire: 11,
		CartridgeCase: 12,
		GainSP: 13,
		GainMoreSP: 14,
		MultiBullet: 15,
		Critical: 16,
		Checkpoint: 17,
		HighScore: 18
	}, e.HeadStyleEnum = {
		None: 0,
		Punk: 1,
		Bandaged: 2,
		Police: 3,
		Bandit: 4,
		Tourist: 5,
		Mexican: 6
	}, e.StackObjectTypeEnum = {
		None: 0,
		WoodCrate: 1,
		MetalCrate: 2,
		SpikeCrate: 3,
		TNTCrate: 4,
		MountedCrate: 5,
		RepairCrate: 6,
		DoubleWoodCrate: 7,
		DoubleMetalCrate: 8,
		Challenge1: 9,
		Challenge2: 10,
		CriticalChance: 11
	}, e.LevelStatusEnum = {
		None: 0,
		Passed: 1,
		Available: 2,
		Locked: 3
	}, e.WeaponTypeEnum = {
		None: 0,
		Rifle: 1,
		ShotGun: 2,
		AutoRifle: 3,
		AutoShotGun: 4,
		Uzi: 5,
		Rpg: 6,
		TurboBlaster: 7
	}, e.WeaponCategoryEnum = {
		Primary: 0,
		Secondary: 1
	}, e.LevelStageEnum = {
		None: 0,
		TutorialStart: 1,
		TutorialZombiesComing: 2,
		TutorialHitBuildButton: 3,
		TutorialHitCrateButton: 4,
		TutorialBuildingFirstCrate: 5,
		TutorialTapToContinue: 6,
		TutorialFirstWave: 7,
		TutorialFirstKill: 8,
		TutorialFirstWaveFinishJob: 9,
		TutorialFirstWaveDone: 10,
		TutorialReinforceDefenses: 11,
		TutorialMoreZombiesComing: 12,
		TutorialTurnRight: 13,
		TutorialSecondWave: 14,
		TutorialSecondWaveDone: 15,
		TutorialHelpingHand: 16,
		TutorialTeamCamera: 17,
		TutorialTeamWork: 18,
		TutorialTeamDefenses: 19,
		TutorialThirdWave: 20,
		TutorialSelectSurvivalRage: 21
	}, e.LevelTipEnum = {
		None: 0,
		TipOne: 1,
		TipTwo: 2,
		TipThree: 3,
		TipFour: 4,
		TipFive: 5
	}, e.MenuTypeEnum = {
		None: 0,
		ShowMain: 1,
		ShowStoryMode: 2,
		ShowSurvivalMode: 3,
		ShowOptions: 4,
		SelectLevel: 5,
		SelectNextPage: 6,
		SelectPrevPage: 7,
		ShowCredits: 8,
		ToggleSound: 9,
		Panel: 10
	}, e.CommandEnum = {
		None: 0,
		Menu: 1,
		Pause: 2,
		Restart: 3,
		ZoomIn: 4,
		ZoomOut: 5,
		AssignWeapon: 6,
		ShowStackObjects: 7,
		SelectStackObject: 8,
		Ready: 9,
		ToggleAdrenaline: 10,
		CancelAction: 11,
		NextLevel: 12,
		ConfirmYes: 13,
		ConfirmNo: 14,
		CrateSelectionDone: 15,
		RewardAccepted: 16,
		BuyGame: 17
	}
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	e.Camera = function() {
		if (!(this instanceof e.Camera)) throw Error("Constructor called as a function.");
		this.reset()
	}, e.Camera.prototype.reset = function() {
		this.y = this.x = 0, this.sy = this.sx = 1, this.angle = this.ty = this.tx = 0, this.matrix = [1, 0, 0, 1, 0, 0]
	}, e.Camera.prototype.update = function() {
		this.matrix = [1, 0, 0, 1, 0, 0], this.translate(this.x, this.y), this.scale(this.sx, this.sy), this.rotate(this.angle)
	}, e.Camera.prototype.translate = function(e, t) {
		this.matrix[4] += this.matrix[0] * e + this.matrix[2] * t, this.matrix[5] += this.matrix[1] * e + this.matrix[3] * t
	}, e.Camera.prototype.scale = function(e, t) {
		this.matrix[0] *= e, this.matrix[1] *= e, this.matrix[2] *= t, this.matrix[3] *= t
	}, e.Camera.prototype.rotate = function(e) {
		var t = Math.cos(e);
		e = Math.sin(e);
		var n = this.matrix[1] * t + this.matrix[3] * e,
			i = this.matrix[0] * -e + this.matrix[2] * t,
			a = this.matrix[1] * -e + this.matrix[3] * t;
		this.matrix[0] = this.matrix[0] * t + this.matrix[2] * e, this.matrix[1] = n, this.matrix[2] = i, this.matrix[3] = a
	}, e.Camera.prototype.screenToCamera = function(e, t) {
		var n = e,
			i = t,
			a = 1 / (this.matrix[0] * this.matrix[3] - this.matrix[1] * this.matrix[2]);
		return e = n * this.matrix[3] * a + i * -this.matrix[2] * a + a * (this.matrix[2] * this.matrix[5] - this.matrix[3] * this.matrix[4]), t = n * -this.matrix[1] * a + i * this.matrix[0] * a + a * (this.matrix[1] * this.matrix[4] - this.matrix[0] * this.matrix[5]), {
			x: e,
			y: t
		}
	}, e.Camera.prototype.cameraToScreen = function(e, t) {
		var n = e,
			i = t;
		return e = n * this.matrix[0] + i * this.matrix[2] + this.matrix[4], t = n * this.matrix[1] + i * this.matrix[3] + this.matrix[5], {
			x: e,
			y: t
		}
	}, e.Camera.prototype.multiply = function(e) {
		var t = this.matrix[1] * e.matrix[0] + this.matrix[3] * e.matrix[1],
			n = this.matrix[0] * e.matrix[2] + this.matrix[2] * e.matrix[3],
			i = this.matrix[1] * e.matrix[2] + this.matrix[3] * e.matrix[3],
			a = this.matrix[0] * e.matrix[4] + this.matrix[2] * e.matrix[5] + this.matrix[4],
			o = this.matrix[1] * e.matrix[4] + this.matrix[3] * e.matrix[5] + this.matrix[5];
		this.matrix[0] = this.matrix[0] * e.matrix[0] + this.matrix[2] * e.matrix[1], this.matrix[1] = t, this.matrix[2] = n, this.matrix[3] = i, this.matrix[4] = a, this.matrix[5] = o
	}
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	var t = 0,
		n = 0,
		i = 0,
		a = 0,
		o = 0,
		r = 2;
	e.update = function(e) {
		t > 0 && (t -= e, 0 > t && (t = 0)), n > 0 && (n -= e, 0 > n && (n = 0)), i > 0 && (i -= e, 0 > i && (i = 0)), a > 0 && (a -= e, 0 > a && (a = 0)), o > 0 && (o -= e, 0 > o && (o = 0))
	}, e.getSoundsEnabled = function() {
		return r
	}, e.playSound = function(e) {
		AudioManager.playSound(e)
	}, e.playMainMusic = function() {
		r > 1 && document.getElementById("controls").play()
	}, e.playLevelMusic = function() {
		r > 1 && document.getElementById("controls").play()
	}, e.playCritSound = function() {
		r > 0 && 0 === o && (o = 3, e.playSound("critical"))
	}, e.playCheckpointSound = function() {
		r > 0 && e.playSound("checkpoint")
	}, e.playHighScoreSound = function() {
		r > 0 && e.playSound("highscore")
	}, e.playGunSound = function() {
		r > 0 && 0 === t && (t = .1, e.playSound("rifle"))
	}, e.playZombieComing = function() {
		r > 0 && e.playSound(.5 < Math.random() ? "zombieroar1" : "zombieroar2")
	}, e.playHumanDie = function() {
		r > 0 && e.playSound("humandie")
	}, e.playHumanSuccess = function() {
		r > 0 && r && 0 === a && (a = 2, e.playSound((Math.random(), "humansuccess2")))
	}, e.playHumanFailed = function() {
		r > 0 && e.playSound("humanfail")
	}, e.playVictory = function() {
		r > 0 && (document.getElementById("controls").pause(), e.playSound("victory"))
	}, e.playAward = function() {
		r > 0 && e.playSound("award")
	}, e.playZombieAttackSound = function() {
		r > 0 && e.playSound(.5 < Math.random() ? "zombieattack1" : "zombieattack2")
	}, e.playZombieDieSound = function() {
		r > 0 && e.playSound((Math.random(), "zombiedie2"))
	}, e.playReloadSound = function() {
		r > 0 && e.playSound("reload")
	}, e.playCarSound = function() {
		r > 0 && e.playSound("car")
	}, e.playBlastSound = function() {
		r > 0 && e.playSound("blast")
	}, e.playClickSound = function() {
		r > 0 && e.playSound("click")
	}, e.playHammerSound = function() {
		r > 0 && e.playSound("hammer")
	}, e.playMachineGunSound = function() {
		r > 0 && 0 === n && (n = .5, e.playSound("autogun1"))
	}, e.playMachineGunSound2 = function() {
		r > 0 && 0 === i && (i = .6, e.playSound("autogun1"))
	}, e.mute = function(e) {
		document.getElementById("controls").pause(), r = !0 === e ? 0 : 1
	}, e.unmute = function(e) {
		!0 === e && document.getElementById("controls").play(), r = !0 === e ? 2 : 1
	}, e.onPause = function() {
		r && document.getElementById("controls").pause()
	}, e.onResume = function() {
		r && document.getElementById("controls").play()
	}
}(window.ZCJGame.SoundManager = window.ZCJGame.SoundManager || {}, window.ZCJGame),
function(e) {
	e.Entity = function(t, n, i) {
		if (!(this instanceof e.Entity)) throw Error("Constructor called as a function.");
		this.x = t, this.y = n, this.radius = i, this.vy = this.vx = 0, this.scaleFactor = 1, this.angle = this.rotationSpeed = this.baseSpeed = this.speed = 0, this.mass = 1, this.gravity = 9.78, this.direction = e.DirectionEnum.None, this.classType = e.EntityClassTypeEnum.None, this.state = e.EntityStateEnum.Idle, this.isDead = !1, this.heartBeats = [{
			time: 0,
			direction: 0,
			maxTime: 1.5,
			speed1: 2.2,
			speed2: 3.3
		}, {
			time: 0,
			direction: 0,
			maxTime: 2 + 2 * Math.random(),
			speed1: 1,
			speed2: 2
		}, {
			time: 0,
			direction: 0,
			maxTime: 1,
			speed1: 1.5,
			speed2: 2.5
		}, {
			time: 0,
			direction: 0,
			maxTime: 1,
			speed1: 3,
			speed2: 5
		}, {
			time: 0,
			direction: 0,
			maxTime: 1,
			speed1: 1,
			speed2: 2
		}, {
			time: 0,
			direction: 0,
			maxTime: 1,
			speed1: 3,
			speed2: 6
		}, {
			time: 0,
			direction: 0,
			maxTime: 1,
			speed1: 6,
			speed2: 12
		}]
	}, e.Entity.prototype.update = function(e) {
		var t, n, i;
		for (t = 0, n = this.heartBeats.length; n > t; t += 1) i = this.heartBeats[t], 0 === i.direction && i.time <= i.maxTime ? (i.time = Math.min(i.time + e * i.speed1, i.maxTime), i.time === i.maxTime && (i.direction = 1)) : 1 === i.direction && 0 <= i.time && (i.time = Math.max(i.time - e * i.speed2, 0), 0 === i.time && (i.direction = 0))
	}, e.ZombieEntity = function(t, n, i) {
		if (!(this instanceof e.ZombieEntity)) throw Error("Constructor called as a function.");
		e.Entity.call(this, t, n, i), this.classType = e.EntityClassTypeEnum.Zombie, this.speed = this.baseSpeed = .55, this.heartBeats[2].time = .3 * Math.random(), this.heartBeats[3].time = this.heartBeats[2].time, this.heartBeats[2].direction = .5 < Math.random() ? 0 : 1, this.heartBeats[3].direction = this.heartBeats[2].direction, this.moveCooldown = 0, this.bouncing = !1, this.maxHitPoints = this.hitPoints = 22, this.armorCoefficient = 1, this.canApplyDamage = !1, this.damageFactor = 1, this.headStyle = e.HeadStyleEnum.None, this.woundedCooldown = 0, this.drawHitPoints = !0, this.offScreenDirection = e.DirectionEnum.None, this.bonus = !1, this.rpgDamageCooldown = 0
	}, e.ZombieEntity.prototype = Object.create(e.Entity.prototype), e.ZombieEntity.prototype.update = function(t) {
		if (0 < this.woundedCooldown && (this.woundedCooldown -= t, 0 >= this.woundedCooldown && (this.woundedCooldown = 0)), 0 < this.rpgDamageCooldown && (this.rpgDamageCooldown -= t, 0 >= this.rpgDamageCooldown && (this.rpgDamageCooldown = 0)), 0 < this.moveCooldown && (this.moveCooldown -= t, 0 > this.moveCooldown && (this.moveCooldown = 0)), this.bouncing || 0 !== this.moveCooldown || 0 === this.speed) 0 < this.moveCooldown && (this.state = e.EntityStateEnum.Idle);
		else switch (this.direction) {
			case e.DirectionEnum.Left:
				this.vx = -this.speed, this.state = e.EntityStateEnum.Walking;
				break;
			case e.DirectionEnum.Right:
				this.vx = this.speed, this.state = e.EntityStateEnum.Walking;
				break;
			case e.DirectionEnum.None:
				this.state = e.EntityStateEnum.Idle, this.vx = 0
		}
		this.bouncing && (this.moveCooldown = .7 + .5 * Math.random(), 0 < this.vx ? (this.vx -= 7 * t, 0 >= this.vx && (this.vx = 0)) : 0 > this.vx && (this.vx += 7 * t, 0 < this.vx && (this.vx = 0)), 0 === this.vx && 0 === this.vy && (this.bouncing = !1)), 0 < this.rotationSpeed ? (this.rotationSpeed -= 10 * t, 0 > this.rotationSpeed && (this.rotationSpeed = 0)) : 0 > this.rotationSpeed && (this.rotationSpeed += 10 * t, 0 < this.rotationSpeed && (this.rotationSpeed = 0)), 0 === this.rotationSpeed && 0 !== this.angle && (0 < this.angle ? (this.angle -= 2 * Math.PI * t, 0 > this.angle && (this.angle = 0)) : (this.angle += 2 * Math.PI * t, 0 < this.angle && (this.angle = 0))), this.angle = this.rotationSpeed ? (this.angle + 2 * this.rotationSpeed * Math.PI * t) % (2 * Math.PI) : this.angle, this.vy += this.gravity * t, (0 === this.moveCooldown || this.bouncing) && (this.y += this.vy * t, this.x += this.vx * t), 0 >= this.hitPoints && (this.isDead = !0), e.Entity.prototype.update.call(this, t)
	}, e.HumanEntity = function(t, n, i) {
		if (!(this instanceof e.HumanEntity)) throw Error("Constructor called as a function.");
		e.Entity.call(this, t, n, i), this.targetScaleFactor = 1, this.weapons = [], this.firingTimeleftOver = this.firingRecoilTime = this.firingCooldown = this.firingAngle = this.reloadCooldown = 0, this.weaponOffset = {
			x: 0,
			y: 0,
			tx: 0,
			ty: 0
		}, this.currentWeaponCategory = e.WeaponCategoryEnum.Primary, this.buildDirection = e.DirectionEnum.None, this.buildData = {
			cooldown: 0,
			stackObjectType: e.StackObjectTypeEnum.None
		}, this.stack = {}
	}, e.HumanEntity.prototype = Object.create(e.Entity.prototype), e.HumanEntity.prototype.update = function(t) {
		this.targetScaleFactor !== this.scaleFactor && (this.scaleFactor < this.targetScaleFactor ? (this.scaleFactor += 3 * t, this.scaleFactor > this.targetScaleFactor && (this.scaleFactor = this.targetScaleFactor)) : this.scaleFactor > this.targetScaleFactor && (this.scaleFactor -= 3 * t, this.scaleFactor < this.targetScaleFactor && (this.scaleFactor = this.targetScaleFactor))), 0 < this.firingCooldown && (this.firingCooldown -= t, 0 >= this.firingCooldown && (this.firingTimeleftOver = this.firingCooldown, this.firingCooldown = 0)), 0 < this.firingRecoilTime && (this.firingRecoilTime -= t, 0 > this.firingRecoilTime && (this.firingRecoilTime = 0)), 0 < this.reloadCooldown && (this.reloadCooldown -= t, 0 > this.reloadCooldown && (this.reloadCooldown = 0)), this.angle = 0, this.vy += this.gravity * t, 0 < this.vx ? (this.vx -= 2 * t, 0 >= this.vx && (this.vx = 0)) : 0 > this.vx && (this.vx += 2 * t, 0 < this.vx && (this.vx = 0)), this.y += this.vy * t, this.x += this.vx * t, e.Entity.prototype.update.call(this, t)
	}
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	e.StackObject = function(t, n, i, a) {
		if (!(this instanceof e.StackObject)) throw Error("Constructor called as a function.");
		this.y = t, this.vy = 0, this.radius = n, this.angle = this.rotationSpeed = 0, this.gravity = 9.78, this.type = i, this.strength = a, this.firingRecoilTime = this.firingAngle = this.firingCooldown = 0, this.direction = e.DirectionEnum.None, this.selected = !1, this.visible = !0
	}, e.StackObject.prototype.update = function(e) {
		0 < this.firingCooldown && (this.firingCooldown -= e, 0 > this.firingCooldown && (this.firingCooldown = 0)), 0 < this.firingRecoilTime && (this.firingRecoilTime -= e, 0 > this.firingRecoilTime && (this.firingRecoilTime = 0)), 0 < this.rotationSpeed ? (this.rotationSpeed -= 2 * e, 0 > this.rotationSpeed && (this.rotationSpeed = 0)) : 0 > this.rotationSpeed && (this.rotationSpeed += 2 * e, 0 < this.rotationSpeed && (this.rotationSpeed = 0)), 0 === this.rotationSpeed && 0 !== this.angle && (0 < this.angle ? (this.angle -= 2 * Math.PI * e, 0 > this.angle && (this.angle = 0)) : (this.angle += 2 * Math.PI * e, 0 < this.angle && (this.angle = 0))), this.angle = this.rotationSpeed ? (this.angle + 2 * this.rotationSpeed * Math.PI * e) % (2 * Math.PI) : this.angle, this.vy += this.gravity * e, this.y += this.vy * e
	}
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	e.Effect = function(t, n, i) {
		if (!(this instanceof e.Effect)) throw Error("Constructor called as a function.");
		this.x = t, this.y = n, this.radius = i, this.vy = this.vx = 0, this.mass = this.friction = 1, this.direction = e.DirectionEnum.None, this.angle = this.rotationSpeed = 0, this.gravity = 9.78, this.value = 0, this.type = e.EffectTypeEnum.None, this.activationCooldown = 0, this.selfDestroyTime = -1, this.startFadeTime = 1, this.restoreBaseAngle = !1
	}, e.Effect.prototype.update = function(t) {
		0 < this.activationCooldown && (this.activationCooldown -= t, 0 > this.activationCooldown && (this.activationCooldown = 0)), 0 < this.selfDestroyTime && (this.selfDestroyTime -= t, 0 > this.selfDestroyTime && (this.selfDestroyTime = 0)), 0 < this.vx ? (this.vx -= this.friction * t, 0 > this.vx && (this.vx = 0)) : 0 > this.vx && (this.vx += this.friction * t, 0 < this.vx && (this.vx = 0)), !this.restoreBaseAngle || this.restoreBaseAngle && 1 < Math.abs(this.rotationSpeed) ? 0 < this.rotationSpeed ? (this.rotationSpeed -= this.friction * t, 0 > this.rotationSpeed && (this.rotationSpeed = 0)) : 0 > this.rotationSpeed && (this.rotationSpeed += this.friction * t, 0 < this.rotationSpeed && (this.rotationSpeed = 0)) : this.restoreBaseAngle && (this.rotationSpeed = 0), this.restoreBaseAngle && 0 === this.rotationSpeed && 0 !== this.angle && (this.angle = .1 < e.shortestArc(this.angle, 0) ? 0 < this.angle ? this.angle + 2 * Math.PI * t : this.angle - 2 * Math.PI * t : 0), this.angle = this.rotationSpeed ? (this.angle + 2 * this.rotationSpeed * Math.PI * t) % (2 * Math.PI) : this.angle, this.vy += this.gravity * t, this.y += this.vy * t, this.x += this.vx * t
	}, e.ImpactEffect = function(t, n, i) {
		if (!(this instanceof e.ImpactEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.gravity = 0, this.friction = 2, this.mass = .5, this.selfDestroyTime = .3, this.startFadeTime = .2, this.type = e.EffectTypeEnum.Impact, this.value = 0, this.angle = 2 * Math.random(), this.rotationSpeed = .2 * Math.PI, this.vx = .5 < Math.random() ? .3 : -.3, this.vy = -(.5 + Math.random())
	}, e.ImpactEffect.prototype = Object.create(e.Effect.prototype), e.BloodSplatterEffect = function(t, n, i) {
		if (!(this instanceof e.BloodSplatterEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.gravity = 0, this.friction = 2, this.mass = .5, this.selfDestroyTime = .3, this.startFadeTime = .1, this.type = e.EffectTypeEnum.BloodSplatter, this.value = 0, this.angle = 2 * Math.random(), this.rotationSpeed = .2 * Math.PI, this.vx = .5 < Math.random() ? .3 : -.3, this.vy = -(.5 + Math.random())
	}, e.BloodSplatterEffect.prototype = Object.create(e.Effect.prototype), e.SmallSmokeEffect = function(t, n, i) {
		if (!(this instanceof e.SmallSmokeEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.gravity = 0, this.friction = 2, this.mass = .5, this.selfDestroyTime = .3, this.startFadeTime = .4, this.type = e.EffectTypeEnum.SmallSmoke, this.value = 0, this.angle = 2 * Math.random(), this.rotationSpeed = .2 * Math.PI, this.vx = .5 < Math.random() ? .3 : -.3, this.vy = -(.5 + Math.random())
	}, e.SmallSmokeEffect.prototype = Object.create(e.Effect.prototype), e.BigSmokeEffect = function(t, n, i) {
		if (!(this instanceof e.BigSmokeEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.friction = this.gravity = 0, this.mass = .5, this.selfDestroyTime = .9, this.type = e.EffectTypeEnum.BigSmoke, this.value = 0, this.angle = t + 1, this.rotationSpeed = .3 * Math.PI, this.vy = -(.1 + .5 * Math.random()), this.startFadeTime = .9
	}, e.BigSmokeEffect.prototype = Object.create(e.Effect.prototype), e.ExplosionEffect = function(t, n, i) {
		if (!(this instanceof e.ExplosionEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.friction = this.gravity = 0, this.mass = .5, this.selfDestroyTime = .7, this.type = e.EffectTypeEnum.Explosion, this.value = 0, this.angle = t + 1, this.rotationSpeed = .1 * Math.PI, this.vy = -(.1 + .5 * Math.random()), this.startFadeTime = .4
	}, e.ExplosionEffect.prototype = Object.create(e.Effect.prototype), e.ProjectileEffect = function(t, n, i, a, o, r, s, l) {
		if (!(this instanceof e.ProjectileEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), this.angle = a, this.vx = o, this.vy = r, this.type = s, this.value = l, this.friction = this.gravity = 0, this.selfDestroyTime = 3, this.count = 0
	}, e.ProjectileEffect.prototype = Object.create(e.Effect.prototype), e.CartridgeCaseEffect = function(t, n, i, a) {
		if (!(this instanceof e.CartridgeCaseEffect)) throw Error("Constructor called as a function.");
		e.Effect.call(this, t, n, i), t = 2 + Math.random() - .5, this.friction = 2, this.mass = 0, this.selfDestroyTime = 2, this.type = e.EffectTypeEnum.CartridgeCase, this.value = 0, this.angle = Math.random(), this.rotationSpeed = (.6 + .15 * Math.random()) * Math.PI, this.vx = a === e.DirectionEnum.Left ? -t : t, this.vy = -t, this.direction = a
	}, e.CartridgeCaseEffect.prototype = Object.create(e.Effect.prototype)
}(window.ZCJGame = window.ZCJGame || {}),
function(e) {
	e.levelManager = function(t) {
		if (!(this instanceof e.levelManager)) throw Error("Constructor called as a function.");
		this.currentLevel = t, this.currentLevelStage = e.LevelStageEnum.None, this.currentLevelTip = e.LevelTipEnum.None, this.updateFrequency = this.runningTime = 0, this.lastSecondUpdate = !1, this.maxY = this.maxX = this.minX = 0, this.leftPlayer = {}, this.rightPlayer = {}, this.entities = [], this.effects = [], this.backgroundEffects = [], this.stacks = [], this.maxStackSize = 3, this.newItem = e.StackObjectTypeEnum.None, this.rewardItem = {
			crate: e.StackObjectTypeEnum.None,
			weapon: e.WeaponTypeEnum.None,
			won: !1
		}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.selectedWeaponType = e.WeaponTypeEnum.None, this.survivalPointsZoomTime = this.survivalRageTime = this.daysCount = this.killCount = this.tutorialCooldown = this.levelEndPauseCooldown = this.levelEndCooldown = this.levelStartCooldown = 0, this.maxSurvivalRageTime = 7, this.survivalPoints = 0, this.minSurvivalPoints = 50, this.checkpointFrequency = 20, this.actualDayDuration = 30, this.repairKits = this.criticalChance = 0, this.showHighScoreEffect = !0, this.mountedCrateCount = 0, this.noScratch = !0, this.usedTurret = this.usedSpiked = this.survivalRage = !1, this.TNTCount = this.metalCount = 0, this.initialize()
	}, e.levelManager.prototype.initialize = function() {
		var t;
		switch (this.minX = 5, this.maxX = 21, this.maxY = 5, t = this.minX + (this.maxX - this.minX) / 2, this.currentLevel) {
			case 1:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.SpikeCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.currentLevelStage = e.LevelStageEnum.TutorialStart, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !0, this.levelStartCooldown = 0, this.createPlayers(t - .6, t + 100);
				break;
			case 2:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.ShotGun,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !0, this.levelStartCooldown = 0, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30;
				break;
			case 3:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.CriticalChance,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.primaryWeaponAssignmentDone = !1, this.secondaryWeaponAssignmentDone = !0, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30;
				break;
			case 4:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.AutoRifle,
					won: !1
				}, this.primaryWeaponAssignmentDone = !1, this.secondaryWeaponAssignmentDone = !0, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 5:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.MetalCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 6:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.Challenge1,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 7:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.AutoShotGun,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 8:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 9:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.TNTCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 10:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 11:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.DoubleWoodCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 12:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 13:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.Challenge2,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 14:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 15:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.DoubleMetalCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 16:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 17:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.MountedCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 18:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.TurboBlaster,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 19:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.Rpg,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 20:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.None,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30, this.criticalChance = .025;
				break;
			case 1e3:
				this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 0, this.criticalChance = .025, this.survivalPoints = 30;
				break;
			case 1001:
				this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.createPlayers(t - .6, t + .6), this.survivalPoints = 0, this.criticalChance = .025, this.survivalPoints = 30;
				break;
			default:
				this.rewardItem = {
					crate: e.StackObjectTypeEnum.DoubleWoodCrate,
					weapon: e.WeaponTypeEnum.None,
					won: !1
				}, this.secondaryWeaponAssignmentDone = this.primaryWeaponAssignmentDone = !1, this.levelStartCooldown = .7, this.updateFrequency = 5, this.createPlayers(t - .6, t + .6), this.survivalPoints = 30
		}
	}, e.levelManager.prototype.createPlayers = function(t, n) {
		if (this.leftPlayer = new e.HumanEntity(t, this.maxY, .4), this.leftPlayer.direction = e.DirectionEnum.Left, this.leftPlayer.buildDirection = e.DirectionEnum.Left, this.leftPlayer.speed = 0, this.leftPlayer.baseSpeed = 0, this.leftPlayer.classType = e.EntityClassTypeEnum.HumanMale, this.leftPlayer.heartBeats[1].maxTime = 4 + 2 * Math.random(), this.leftPlayer.weapons[e.WeaponCategoryEnum.Primary] = e.WeaponTypeEnum.Rifle, this.leftPlayer.weapons[e.WeaponCategoryEnum.Secondary] = e.WeaponTypeEnum.Uzi, this.leftPlayer.reloadCooldown = .5, this.rightPlayer = new e.HumanEntity(n, this.maxY, .4), this.rightPlayer.direction = e.DirectionEnum.Right, this.rightPlayer.buildDirection = e.DirectionEnum.Right, this.rightPlayer.speed = 0, this.rightPlayer.baseSpeed = 0, this.rightPlayer.classType = e.EntityClassTypeEnum.HumanFemale, this.rightPlayer.heartBeats[1].maxTime = 4 + 2 * Math.random(), this.rightPlayer.weapons[e.WeaponCategoryEnum.Primary] = e.WeaponTypeEnum.Rifle, this.rightPlayer.weapons[e.WeaponCategoryEnum.Secondary] = e.WeaponTypeEnum.Uzi, this.rightPlayer.reloadCooldown = .5, this.leftPlayer.stack = {
				x: this.leftPlayer.x,
				vx: 0,
				objects: [],
				limitX: 0,
				direction: e.DirectionEnum.None,
				cooldown: 0
			}, this.rightPlayer.stack = {
				x: this.rightPlayer.x,
				vx: 0,
				objects: [],
				limitX: 0,
				direction: e.DirectionEnum.None,
				cooldown: 0
			}, this.stacks.push(this.leftPlayer.stack), this.stacks.push(this.rightPlayer.stack), 1 !== this.currentLevel) {
			var i = {
				x: this.leftPlayer.x + (this.rightPlayer.x - this.leftPlayer.x) / 2,
				vx: 0,
				objects: [],
				limitX: 0,
				direction: e.DirectionEnum.None,
				cooldown: 0
			};
			i.objects.push(new e.StackObject(this.maxY, .6, e.StackObjectTypeEnum.WoodCrate, 100)), this.stacks.push(i)
		}
	}, e.levelManager.prototype.update = function(t) {
		this.runningTime += t, 1001 === this.currentLevel && (this.runningTime = 0), 0 < this.survivalRageTime && (this.survivalRageTime -= t, 0 > this.survivalRageTime && (this.survivalRageTime = 0)), 0 < this.survivalPointsZoomTime && (this.survivalPointsZoomTime -= t, 0 > this.survivalPointsZoomTime && (this.survivalPointsZoomTime = 0)), 0 < this.levelEndCooldown && (this.levelEndCooldown -= t, 0 > this.levelEndCooldown && (this.levelEndCooldown = 0)), 0 < this.levelEndPauseCooldown && (this.levelEndPauseCooldown -= t, 0 > this.levelEndPauseCooldown && (this.levelEndPauseCooldown = 0)), this.primaryWeaponAssignmentDone && this.secondaryWeaponAssignmentDone && this.newItem === e.StackObjectTypeEnum.None && (0 < this.levelStartCooldown ? (this.levelStartCooldown -= t, 0 > this.levelStartCooldown && (this.levelStartCooldown = 0)) : (0 < this.tutorialCooldown && (this.tutorialCooldown -= t, 0 > this.tutorialCooldown && (this.tutorialCooldown = 0)), this.currentLevelStage === e.LevelStageEnum.TutorialZombiesComing ? 0 === this.tutorialCooldown && (this.currentLevelStage = e.LevelStageEnum.TutorialHitBuildButton) : this.currentLevelStage === e.LevelStageEnum.TutorialMoreZombiesComing && 0 === this.tutorialCooldown && (this.currentLevelStage = e.LevelStageEnum.TutorialTurnRight)))
	}, e.levelManager.prototype.getStackObjectCreationTime = function(t) {
		switch (t) {
			case e.StackObjectTypeEnum.WoodCrate:
				return 3;
			case e.StackObjectTypeEnum.MetalCrate:
				return 5;
			case e.StackObjectTypeEnum.SpikeCrate:
				return 3;
			case e.StackObjectTypeEnum.TNTCrate:
				return 6;
			case e.StackObjectTypeEnum.MountedCrate:
				return 8;
			case e.StackObjectTypeEnum.RepairCrate:
				return 1;
			case e.StackObjectTypeEnum.DoubleMetalCrate:
				return 3;
			case e.StackObjectTypeEnum.DoubleWoodCrate:
				return 5
		}
		return 0
	}, e.levelManager.prototype.getStackObjectStrength = function(t) {
		switch (t) {
			case e.StackObjectTypeEnum.WoodCrate:
				return 3;
			case e.StackObjectTypeEnum.TNTCrate:
				return 5;
			case e.StackObjectTypeEnum.SpikeCrate:
				return 5;
			case e.StackObjectTypeEnum.MetalCrate:
				return 8;
			case e.StackObjectTypeEnum.MountedCrate:
				return 10
		}
		return 1
	}
}(window.ZCJGame = window.ZCJGame || {}),
function() {}(window.ZCJGame.Resources = window.ZCJGame.Resources || {}),
function(e) {
	var t, n = {},
		i = !1,
		a = !1,
		o = window.AudioContext || window.webkitAudioContext;
	o ? t = new o : "undefined" == typeof Audio ? i = !1 : (o = navigator.userAgent.toLowerCase(), -1 < o.indexOf("firefox") || -1 < o.indexOf("opera") ? a = !0 : (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (i = !1)), e.canPlaySounds = function() {
		return i
	}, e.registerSound = function(e, o, r) {
		if (i)
			if (t) {
				var s = new XMLHttpRequest;
				s.open("get", o, !0), s.responseType = "arraybuffer", s.onload = function() {
					t.decodeAudioData(s.response, function(t) {
						n[e] = {
							buffer: t
						}, r && r()
					})
				}, s.send()
			} else n[e] = new Audio, r && (n[e].preload = "auto", $(n[e]).on("loadeddata", r)), n[e].src = a ? o.replace(".mp3", ".ogg") : o;
		else r && r()
	}, e.playSound = function(a) {
		var o;
		i && (o = n[a]) && (t ? (e.stopSound(a), o.sourceNode = t.createBufferSource(), o.sourceNode.buffer = o.buffer, o.sourceNode.connect(t.destination), "undefined" != typeof o.sourceNode.noteOn ? o.sourceNode.noteOn(0) : o.sourceNode.start(0)) : (o.currentTime = 0, o.play()))
	}, e.stopSound = function(e) {
		i && (e = n[e]) && (t ? e.sourceNode && ("undefined" != typeof e.sourceNode.noteOff ? e.sourceNode.noteOff(0) : e.sourceNode.stop(0), e.sourceNode = null) : (e.pause(), e.currentTime = 0))
	}
}(window.AudioManager = window.AudioManager || {}),
function(e) {
	var t = new Date,
		n = 0,
		i = 0;
	e.getFPS = function() {
		++n;
		var e = new Date;
		return 1e3 < e.getTime() - t.getTime() && (i = n, n = 0, t = e), i
	}, e.clamp = function(e, t, n) {
		return Math.max(t, Math.min(n, e))
	}, e.circleRectIntersect = function(t, n, i, a, o, r, s) {
		return t -= e.clamp(t, a, r), n -= e.clamp(n, o, s), i * i > t * t + n * n
	}, e.distance = function(e, t, n, i) {
		return e = n - e, t = i - t, Math.sqrt(e * e + t * t)
	}, e.vectorAdd = function(e, t, n, i) {
		return {
			x: e + n,
			y: t + i
		}
	}, e.vectorSubstract = function(e, t, n, i) {
		return {
			x: e - n,
			y: t - i
		}
	}, e.vectorMultiply = function(e, t, n) {
		return {
			x: e * n,
			y: t * n
		}
	}, e.vectorDivide = function(e, t, n) {
		return 0 === n ? {
			x: e,
			y: t
		} : {
			x: e / n,
			y: t / n
		}
	}, e.vectorDotProduct = function(e, t, n, i) {
		return e * n + t * i
	}, e.vectorLength = function(e, t) {
		return Math.sqrt(e * e + t * t)
	}, e.vectorNormalize = function(t, n) {
		var i = e.vectorLength(t, n);
		return 0 === i ? {
			x: t,
			y: n
		} : {
			x: t / i,
			y: n / i
		}
	}, e.vectorRotate = function(e, t, n) {
		var i = Math.cos(n);
		return n = Math.sin(n), {
			x: i * e - n * t,
			y: n * e + i * t
		}
	}, e.vectorAngle = function(e, t, n, i) {
		return Math.atan2(i - t, n - e)
	}, e.vectorFromAngle = function(e) {
		return {
			x: Math.cos(e),
			y: Math.sin(e)
		}
	}, e.toDegrees = function(e) {
		return 180 / Math.PI * e
	}, e.toRadians = function(e) {
		return Math.PI / 180 * e
	}, e.shortestArc = function(e, t) {
		var n = Math.abs(e - t);
		return n > Math.PI && (n = 2 * Math.PI - n), n
	}, e.rectIntersect = function(e, t, n, i, a, o, r, s) {
		return !(o > i || t > s || a > n || e > r)
	}, e.pointInRect = function(e, t, n, i, a, o) {
		return e > n && a > e && t > i && o > t
	}, e.loadResources = function(e, t, n) {
		var i, a, o = {},
			r = 0,
			s = 0,
			l = e.length,
			c = function() {
				s += 1, s === l && t && t(o), n && (n(s, l)/*, ih5game.progress(s / l * 100)*/)
			};
		for (i = 0, r = e.length; r > i; i += 1) a = e[i], "img" === a.type ? (o[a.id] = new Image, o[a.id].onload = c, o[a.id].src = a.src) : "snd" === a.type && AudioManager.registerSound(a.id, a.src, c)
	}
}(window.ZCJGame = window.ZCJGame || {}), $.fn.center = function() {
		return this.css("position", "absolute"), this.css("top", Math.max(0, ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop()) + "px"), this.css("left", Math.max(0, ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()) + "px"), this
	},
	function(e) {
		var t, n, i, a, o, r;
		e.setupTileOffsets = function() {
			var s = 1 / e.getScaleUnit();
			t = 0, n = 1 * s, i = 2 * s, a = 4 * s, o = 8 * s, r = 10 * s
		}, e.drawLoader = function(i) {
			var o = e.getGameLoadingData(),
				r = e.getCanvasWidth(),
				s = e.getCanvasHeight(),
				l = e.screenToHud({
					x: r,
					y: s
				});
			i.drawImage(e.Resources.loadingScreenImage, t, t, r, s), i.save(), e.applyHudCameras(), o = 4 * o.current / o.total, i.drawImage(e.Resources.loadingScreenImage1, 0, 0, a, n, l.x / 2 - 2, l.y / 2, 4, 1), i.save(), i.beginPath(), i.rect(l.x / 2 - 2, l.y / 2, o, 1), i.closePath(), i.clip(), i.drawImage(e.Resources.loadingScreenImage2, 0, 0, a, n, l.x / 2 - 2, l.y / 2, 4, 1), i.restore(), i.drawImage(e.Resources.loadingScreenImage3, 0, 0, a, n, l.x / 2 - 2, l.y - 1, 4, 1), i.restore()
		}, e.drawIntro = function() {}, e.draw = function(t, n) {
			var s, l, c, u, m, d, p, h, g = e.getCurrentGameState(),
				f = e.getCanvasWidth(),
				y = e.getCanvasHeight(),
				b = e.screenToHud({
					x: f,
					y: y
				});
			p = e.getMenuHudItems();
			var v = e.getLevelHudItems();
			if (g === e.GameStateEnum.GameStart) t.drawImage(e.Resources.introScreenImage, 0, 0, f, y);
			else if (g === e.GameStateEnum.GameIntro) e.drawIntro(t);
			else if (g === e.GameStateEnum.GameMenu) {
				var v = e.getMenuSetupTime(),
					x = e.getMaxMenuSetupTime();
				c = e.getMenuEntities();
				var E = e.getMenuPageTime(),
					T = e.getMenuPageDirection();
				for (v > x - 1 && (t.globalAlpha = x - v), t.drawImage(e.Resources.menuScreenImage, 0, 0, f, y), t.globalAlpha = 1, e.applyHudCameras(), m = 0, d = c.length; d > m; m += 1) e.drawEntity(t, c[m]);
				for (c = .5, u = .2, m = e.getWeaponHeartbeat(), v > x - .5 && e.getCurrentMenuType() === e.MenuTypeEnum.None && (c -= 2 * (.5 - (x - v)), u += 2 * (.5 - (x - v))), t.drawImage(e.Resources.hud1Image, 0, 640, 256, 192, c, u, 4, 3), (e.getCurrentMenuType() === e.MenuTypeEnum.None || e.getCurrentMenuType() === e.MenuTypeEnum.ShowMain) && (c = 5, u = 2.4, v > x - .5 && (u += 2 * (.5 - (x - v))), t.drawImage(e.Resources.hud1Image, 0, 384, 256, 256, c, u - .3, 4, 4), t.drawImage(e.Resources.hud1Image, 256, 192, 128, 128, c + 2.25, u + 1.37 + .09 * m.time, 2, 2), t.save(), t.translate(c - .2 + 1, u + .15 + 1.5), t.rotate(-.2 + .1 * m.time), t.translate(-(c - .2 + 1), -(u + .15 + 1.5)), t.drawImage(e.Resources.hud1Image, 256, 384, 128, 192, c + .4, u + .75, 2, 3), t.restore()), m = 0, d = p.length; d > m; m += 1)
					if (p[m].type === e.MenuTypeEnum.Panel) {
						s = p[m].x, l = p[m].y, t.drawImage(e.Resources.hud1Image, 0, 192, 256, 192, s, l, 4, 3);
						break
					}
				for (m = 0, d = p.length; d > m; m += 1)
					if (0 < p[m].width) switch (p[m].type) {
						case e.MenuTypeEnum.ShowCredits:
							t.drawImage(e.Resources.hud1Image, 384, 128, 64, 64, p[m].x, p[m].y, 1, 1);
							break;
						case e.MenuTypeEnum.ToggleSound:
							AudioManager.canPlaySounds() && 2 === e.SoundManager.getSoundsEnabled() ? t.drawImage(e.Resources.hud1Image, 320, 128, 64, 64, p[m].x, p[m].y, 1, 1) : AudioManager.canPlaySounds() && 1 === e.SoundManager.getSoundsEnabled() ? t.drawImage(e.Resources.hud1Image, 256, 128, 64, 64, p[m].x, p[m].y, 1, 1) : t.drawImage(e.Resources.hud1Image, 192, 128, 64, 64, p[m].x, p[m].y, 1, 1);
							break;
						case e.MenuTypeEnum.ShowStoryMode:
							e.getCurrentMenuType() !== e.MenuTypeEnum.ShowStoryMode ? t.drawImage(e.Resources.hud1Image, 0, 128, 192, 64, p[m].x + .5, p[m].y, 3, 1) : t.drawImage(e.Resources.hud2Image, 256, 320, 128, 64, p[m].x + .5, p[m].y - .2, 2, 1);
							break;
						case e.MenuTypeEnum.ShowSurvivalMode:
							e.getCurrentMenuType() !== e.MenuTypeEnum.ShowSurvivalMode ? t.drawImage(e.Resources.hud1Image, 192, 64, 192, 64, p[m].x + .5, p[m].y, 3, 1) : t.drawImage(e.Resources.hud2Image, 384, 320, 128, 64, p[m].x + .5, p[m].y - .2, 2, 1);
							break;
						case e.MenuTypeEnum.ShowOptions:
							e.getCurrentMenuType() !== e.MenuTypeEnum.ShowOptions ? t.drawImage(e.Resources.hud1Image, 0, 64, 192, 64, p[m].x + .5, p[m].y + .2, 3, 1) : t.drawImage(e.Resources.hud2Image, 0, 384, 128, 64, p[m].x + .5, p[m].y - .2, 2, 1);
							break;
						case e.MenuTypeEnum.ShowMain:
							t.drawImage(e.Resources.hud1Image, 320, 0, 128, 64, p[m].x, p[m].y - .25, 2, 1);
							break;
						case e.MenuTypeEnum.SelectPrevPage:
							t.drawImage(e.Resources.hud2Image, 448, 256, 64, 64, p[m].x, p[m].y - .2, 1, 1);
							break;
						case e.MenuTypeEnum.SelectNextPage:
							t.drawImage(e.Resources.hud2Image, 0, 320, 64, 64, p[m].x, p[m].y - .2, 1, 1)
					}
					if (e.getCurrentMenuType() === e.MenuTypeEnum.ShowStoryMode) {
						for (t.save(), t.scale(1 + .03 * e.getTitleHeartbeat().time, 1 + .1 * e.getTitleHeartbeat().time), t.drawImage(e.Resources.hud2Image, 64, 320, 128, 64, s + .6, l + 3.1, 2, 1), t.restore(), p = T === e.DirectionEnum.Right ? 10 * E : -(10 * E), d = 9 * e.getMenuPageIndex(), x = 0, c = p + s + .4, u = l + 4.6, t.globalAlpha = 1 - 4 * E, m = d, d += 9; d > m && !(m > e.getLevelItemData().length - 1); m += 1) {
							switch (h = e.getLevelItemData()[m], h.x = c, h.y = u, h.size = 1, c += 1.1, x++, 3 === x && (x = 0, u += 1.1, c = p + s + .4), h.status) {
								case e.LevelStatusEnum.Locked:
									t.drawImage(e.Resources.hud2Image, 192, 320, 64, 64, h.x, h.y, 1, 1);
									break;
								case e.LevelStatusEnum.Available:
									t.drawImage(e.Resources.hud2Image, 320, 256, 64, 64, h.x, h.y, 1, 1);
									break;
								case e.LevelStatusEnum.Passed:
									t.drawImage(e.Resources.hud2Image, 384, 256, 64, 64, h.x, h.y, 1, 1);
									break;
								case e.LevelStatusEnum.None:
									t.globalAlpha /= 4, t.drawImage(e.Resources.hud2Image, 384, 576, 64, 64, h.x, h.y, 1, 1), t.globalAlpha = 1 - 4 * E
							}
							e.drawNumber(t, h.level.toString(), h.x, h.y - .3, .6)
						}
						if (E > 0 && T !== e.DirectionEnum.None)
							for (t.globalAlpha = 2 * E, x = 0, c = T === e.DirectionEnum.Right ? s - 4 + p : s + 3 + p, u = l + 4.6, l = e.getMenuPageIndex(), T === e.DirectionEnum.Right ? (l--, m = Math.floor(e.getLevelItemData().length / 9), 0 > l && (l = m)) : (m = Math.floor(e.getLevelItemData().length / 9), l++, l > m && (l = 0)), m = d = 9 * l; d + 9 > m && !(m > e.getLevelItemData().length - 1); m += 1) {
								switch (c += 1.1, h = e.getLevelItemData()[m], h.status) {
									case e.LevelStatusEnum.Locked:
										t.drawImage(e.Resources.hud2Image, 192, 320, 64, 64, c, u, 1, 1);
										break;
									case e.LevelStatusEnum.Available:
										t.drawImage(e.Resources.hud2Image, 320, 256, 64, 64, c, u, 1, 1);
										break;
									case e.LevelStatusEnum.Passed:
										t.drawImage(e.Resources.hud2Image, 384, 256, 64, 64, c, u, 1, 1);
										break;
									case e.LevelStatusEnum.None:
										t.drawImage(e.Resources.hud2Image, 384, 576, 64, 64, c, u, 1, 1)
								}
								x++, 3 === x && (x = 0, u += 1.1, c = T === e.DirectionEnum.Right ? s - 4 + p : s + 3 + p)
							}
					} else if (e.getCurrentMenuType() === e.MenuTypeEnum.ShowSurvivalMode) m = e.getMenuPageIndex(), t.save(), t.scale(1 + .03 * e.getTitleHeartbeat().time, 1 + .1 * e.getTitleHeartbeat().time), t.drawImage(e.Resources.hud2Image, 0, 640, 128, 64, s + .6, l + 3.1, 2, 1), t.restore(), p = T === e.DirectionEnum.Right ? 10 * E : -(10 * E), c = p + s + 1, u = l + 4.5, t.globalAlpha = 1 - 2 * E, 1001 === e.getMenuSurvivalItems()[m].level ? (t.drawImage(e.Resources.hud2Image, 0, 576, 192, 64, s + .2, l + 6.7, 3 * 1.2, 1.2), t.drawImage(e.Resources.hud3Image, 64, 64, 128, 64, s + 3 - .3 * e.getTitleHeartbeat().time, l + 4.7 - .1 * e.getTitleHeartbeat().time, 2 + .6 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time), d = e.getSavedData().daysCountHighScore.toString(), x = 0, 2 === d.length ? x = .11 : 3 === d.length ? x = .22 : 4 === d.length && (x = .33), e.drawNumber(t, d, s + 3.75 - x, l + 5.3, 1), t.drawImage(e.Resources.hud3Image, 0, 64, 64, 64, s + 4 + x, l + 5.3, 1, 1)) : 1e3 === e.getMenuSurvivalItems()[m].level && (t.drawImage(e.Resources.hud2Image, 192, 576, 192, 64, s + .2, l + 6.7, 3 * 1.2, 1.2), t.drawImage(e.Resources.hud3Image, 64, 64, 128, 64, s + 3 - .3 * e.getTitleHeartbeat().time, l + 4.7 - .1 * e.getTitleHeartbeat().time, 2 + .6 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time), d = e.getSavedData().killCountHighScore.toString(), x = 0, 2 === d.length ? x = .11 : 3 === d.length ? x = .22 : 4 === d.length && (x = .33), e.drawNumber(t, d, s + 3.75 - x, l + 5.3, 1), t.drawImage(e.Resources.hud3Image, 448, 64, 64, 64, s + 4 + x, l + 5.3, 1, 1)), h = e.getMenuSurvivalItems()[m], h.x = c, h.y = u, h.size = 2, c += 1.1, e.getMenuSurvivalItems()[m].status === e.LevelStatusEnum.Locked && (t.globalAlpha = Math.min(.5, t.globalAlpha)), 1001 === e.getMenuSurvivalItems()[m].level ? t.drawImage(e.Resources.hud2Image, 128, 448, 128, 128, h.x, h.y, 2, 2) : 1e3 === e.getMenuSurvivalItems()[m].level && t.drawImage(e.Resources.hud2Image, 256, 448, 128, 128, h.x, h.y, 2, 2), e.getMenuSurvivalItems()[m].status === e.LevelStatusEnum.Locked && (t.globalAlpha = 1 - 2 * E, t.drawImage(e.Resources.hud2Image, 192, 320, 64, 64, c - .6, u + .5, 1, 1)), E > 0 && T !== e.DirectionEnum.None && (t.globalAlpha = 2 * E, c = T === e.DirectionEnum.Right ? s - 3 + p : s + 3 + p, u = l + 4.5, c += 1.1, 1001 === e.getMenuSurvivalItems()[m].level ? t.drawImage(e.Resources.hud2Image, 256, 448, 128, 128, c, u, 2, 2) : 1e3 === e.getMenuSurvivalItems()[m].level && t.drawImage(e.Resources.hud2Image, 128, 448, 128, 128, c, u, 2, 2));
				else if (e.getCurrentMenuType() === e.MenuTypeEnum.ShowOptions) {
					switch (m = e.getMenuPageIndex(), e.drawNumber(t, (m + 1).toString(), s + 1.4 + (10 > m + 1 ? .15 : 0), l + 3.1, .7), t.drawImage(e.Resources.hud2Image, 0, 448, 64, 64, s + 1.58, l + 3.4, .7, .7), e.drawNumber(t, e.getMenuAchievementItems().length.toString(), s + 2, l + 3.3, .7), p = T === e.DirectionEnum.Right ? 10 * E : -(10 * E), c = p + s + 1.56, u = l + 4.6, t.globalAlpha = 1 - 2 * E, m) {
						case 0:
							t.drawImage(e.Resources.hud3Image, 192, 64, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 1:
							t.drawImage(e.Resources.hud3Image, 256, 128, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 2:
							t.drawImage(e.Resources.hud3Image, 0, 128, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 3:
							t.drawImage(e.Resources.hud3Image, 256, 0, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 4:
							t.drawImage(e.Resources.hud3Image, 0, 0, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 5:
							t.drawImage(e.Resources.hud3Image, 0, 448, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 6:
							t.drawImage(e.Resources.hud3Image, 256, 384, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 7:
							t.drawImage(e.Resources.hud3Image, 0, 512, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 8:
							t.drawImage(e.Resources.hud3Image, 256, 448, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 9:
							t.drawImage(e.Resources.hud3Image, 0, 320, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 10:
							t.drawImage(e.Resources.hud3Image, 256, 256, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 11:
							t.drawImage(e.Resources.hud3Image, 0, 384, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 12:
							t.drawImage(e.Resources.hud3Image, 256, 320, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 13:
							t.drawImage(e.Resources.hud3Image, 0, 256, 256, 64, s - .55, l + 6.3, 5.2, 1.3);
							break;
						case 14:
							t.drawImage(e.Resources.hud3Image, 64, 192, 256, 64, s - .55, l + 6.3, 5.2, 1.3)
					}
					h = e.getMenuAchievementItems()[m], h.x = c, h.y = u, h.size = 1, t.drawImage(e.Resources.hud2Image, 64, 448, 64, 64, h.x - .05, h.y, 1, 1), m < e.getSavedData().achievements.length && e.getSavedData().achievements[m] === e.LevelStatusEnum.Passed && t.drawImage(e.Resources.hud3Image, 0, 192, 64, 64, h.x + .1, h.y, 1.1, 1.1), 1 === (m + 1).toString().length ? e.drawNumber(t, (m + 1).toString(), h.x + .31, h.y + .7, .7) : e.drawNumber(t, (m + 1).toString(), h.x + .22, h.y + .7, .7), E > 0 && T !== e.DirectionEnum.None && (t.globalAlpha = 2 * E, c = T === e.DirectionEnum.Right ? s - 2.5 + p : s + 3 + p, t.drawImage(e.Resources.hud2Image, 64, 448, 64, 64, c + 1.1, l + 4.9, 1, 1))
				}
				t.globalAlpha = 1, (2 > v || e.getCurrentMenuType() !== e.MenuTypeEnum.None) && v > 1 && e.getCurrentMenuType(), e.getShowCredits() && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(e.Resources.creditsScreenImage, 0, 0, f, y), t.restore()), e.isTrialLicense()
			} else if (g === e.GameStateEnum.GameLoading) e.drawLoader(t);
			else if (g === e.GameStateEnum.GameRun || g === e.GameStateEnum.GameLost || g === e.GameStateEnum.GameWon) {
				if (5 < n.currentLevel && e.isTrialLicense())
					for (e.applyHudCameras(), m = 0; m < v.length; m += 1) v[m].enabled && e.CommandEnum.Menu === v[m].type && t.drawImage(e.Resources.hud2Image, 128, 384, 64, 64, v[m].x, v[m].y, 1, 1);
				else {
					for (g === e.GameStateEnum.GameLost || n.leftPlayer.currentWeaponCategory === e.WeaponCategoryEnum.Secondary || n.rightPlayer.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? t.drawImage(e.Resources.backgroundImage2, 0, 0, f, y) : t.drawImage(e.Resources.backgroundImage1, 0, 0, f, y), e.applySceneCameras(), t.save(), e.applyVeryFarParallaxCameras(), t.drawImage(e.Resources.backdrop1Image4, 0, 0, i, i, .15 * (n.minX + (n.maxX - n.minX) / 2) - 2, n.maxY - 10, 6, 6), t.restore(), e.applyHereParallaxCameras(), t.fillStyle = "rgb(203, 161, 88)", t.fillRect(n.minX - 20.5, n.maxY + .2, n.maxX + 20 - (n.minX - 20), 30), m = n.minX - 20.5; m < n.maxX + 20; m += 9.8722) t.drawImage(e.Resources.backdrop1Image3, 0, 0, r, i, m, n.maxY - .7, 10, 2);
					for (t.save(), t.drawImage(e.Resources.backdrop1Image1, 0, 0, a, a, 5.5, 1.15, 4, 4), t.drawImage(e.Resources.backdrop1Image2, 0, 0, o, a, 13, 1.15, 8, 4), t.restore(), m = 0; m < n.backgroundEffects.length; m += 1) s = n.backgroundEffects[m], e.drawEffect(t, s);
					for (m = 0; m < n.leftPlayer.stack.objects.length; m += 1) e.drawStackObject(t, n.leftPlayer.stack.x, e.DirectionEnum.Left, n.leftPlayer.stack.objects[m]);
					for (m = 0; m < n.rightPlayer.stack.objects.length; m += 1) e.drawStackObject(t, n.rightPlayer.stack.x, e.DirectionEnum.Right, n.rightPlayer.stack.objects[m]);
					for (m = 0; m < n.stacks.length; m += 1)
						if (s = n.stacks[m], e.DirectionEnum.None !== s.direction)
							for (f = 0; f < s.objects.length; ++f) e.drawStackObject(t, s.x, s.direction, s.objects[f]);
					for (m = 0; m < n.entities.length; m += 1) e.drawEntity(t, n.entities[m]);
					for (n.rightPlayer.scaleFactor !== n.leftPlayer.scaleFactor ? n.rightPlayer.scaleFactor < n.leftPlayer.scaleFactor ? (e.drawPlayer(t, n.rightPlayer), e.drawPlayer(t, n.leftPlayer)) : (e.drawPlayer(t, n.leftPlayer), e.drawPlayer(t, n.rightPlayer)) : n.leftPlayer.direction === e.DirectionEnum.Right || n.leftPlayer.isDead ? (e.drawPlayer(t, n.rightPlayer), e.drawPlayer(t, n.leftPlayer)) : (e.drawPlayer(t, n.leftPlayer), e.drawPlayer(t, n.rightPlayer)), m = 0; m < n.effects.length; m += 1) s = n.effects[m], e.drawEffect(t, s);
					if (e.applyHudCameras(), e.getConfirmCommand() !== e.CommandEnum.None) {
						switch (t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, 0, b.x, b.y), e.getConfirmCommand()) {
							case e.CommandEnum.Menu:
								t.drawImage(e.Resources.hud2Image, 192, 384, 320, 64, b.x / 2 - 2.5, b.y / 2 - 2, 5, 1);
								break;
							case e.CommandEnum.Restart:
								t.drawImage(e.Resources.hud2Image, 0, 256, 192, 64, b.x / 2 - 1.5, b.y / 2 - 2, 3, 1)
						}
						for (m = 0; m < v.length; m += 1) e.CommandEnum.ConfirmYes === v[m].type ? t.drawImage(e.Resources.hud2Image, 384, 192, 64, 64, v[m].x, v[m].y, 1, 1) : e.CommandEnum.ConfirmNo === v[m].type && t.drawImage(e.Resources.hud2Image, 320, 192, 64, 64, v[m].x, v[m].y, 1, 1)
					} else {
						if (g !== e.GameStateEnum.GameWon && g !== e.GameStateEnum.GameLost) {
							switch (m = b.y - 2, t.fillStyle = "rgba(0, 0, 0, 0.5)", n.currentLevelStage) {
								case e.LevelStageEnum.TutorialStart:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 640, 256, 64, b.x / 2 - 2, m, 4, 1);
									break;
								case e.LevelStageEnum.TutorialZombiesComing:
									1.5 < n.tutorialCooldown ? (t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 256, 640, 256, 64, b.x / 2 - 2, m, 4, 1)) : (m = b.y - 3, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 704, 384, 64, b.x / 2 - 3, m, 6, 1));
									break;
								case e.LevelStageEnum.TutorialHitBuildButton:
									m = b.y - 3, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 704, 384, 64, b.x / 2 - 3, m, 6, 1), m = b.y - 2.5, t.drawImage(e.Resources.hud2Image, 256, 192, 64, 64, b.x / 2 - 1.5 - .1 * e.getTitleHeartbeat().time, m - .1 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time);
									break;
								case e.LevelStageEnum.TutorialHitCrateButton:
									m = b.y - 3, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 448, 384, 64, b.x / 2 - 3, m, 6, 1), m = b.y - 1.5, t.drawImage(e.Resources.hud2Image, 256, 192, 64, 64, b.x / 2 - 1.5 - .1 * e.getTitleHeartbeat().time, m - .1 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time);
									break;
								case e.LevelStageEnum.TutorialBuildingFirstCrate:
									m = b.y - 1, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 512, 320, 64, b.x / 2 - 2.5, m, 5, 1);
									break;
								case e.LevelStageEnum.TutorialTapToContinue:
									m = b.y - 2, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 576, 256, 64, b.x / 2 - 2, m, 4, 1), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, b.x - 4, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialFirstWave:
									m = b.y - 2, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 192, 448, 64, b.x / 2 - 3.5, m, 7, 1);
									break;
								case e.LevelStageEnum.TutorialFirstKill:
									m = b.y - 2, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips4Image, 0, 448, 448, 64, b.x / 2 - 3.5, m, 7, 1), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, b.x - 4, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialSelectSurvivalRage:
									m = b.y - 3, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips4Image, 0, 320, 576, 64, b.x / 2 - 4.5, m, 9, 1), m = b.y - 1, t.drawImage(e.Resources.tooltips4Image, 0, 384, 128, 64, b.x / 2 - 1, m, 2, 1);
									break;
								case e.LevelStageEnum.TutorialFirstWaveFinishJob:
									m = b.y - 2, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips4Image, 0, 192, 448, 64, b.x / 2 - 3.5, m, 7, 1);
									break;
								case e.LevelStageEnum.TutorialFirstWaveDone:
									m = b.y - 2, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 256, 448, 64, b.x / 2 - 3.5, m, 7, 1), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, b.x - 4, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialReinforceDefenses:
									m = b.y - 3, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 320, 448, 64, b.x / 2 - 3.5, m, 7, 1);
									break;
								case e.LevelStageEnum.TutorialMoreZombiesComing:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 384, 448, 64, b.x / 2 - 3.5, m, 7, 1);
									break;
								case e.LevelStageEnum.TutorialTurnRight:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 64, 448, 64, b.x / 2 - 3.5, m, 7, 1);
									break;
								case e.LevelStageEnum.TutorialSecondWave:
									m = b.y - 6, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips2Image, 0, 576, 256, 64, b.x / 2 - 2, m, 4, 1);
									break;
								case e.LevelStageEnum.TutorialSecondWaveDone:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 0, 512, 128, b.x / 2 - 4, m - .5, 8, 2), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, b.x - 4, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialHelpingHand:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 192, 512, 128, b.x / 2 - 4, m - .5, 8, 2), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, 2, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialTeamCamera:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 128, 512, 64, b.x / 2 - 4, m, 8, 1);
									break;
								case e.LevelStageEnum.TutorialTeamDefenses:
									t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 448, 512, 64, b.x / 2 - 4, m, 8, 1), t.drawImage(e.Resources.tooltips3Image, 0, 320, 64, 128, b.x / 2 + .05, m - .8, 1, 2), m = b.y - 1, t.drawImage(e.Resources.tooltips2Image, 256, 576, 192, 64, b.x - 3, m, 3, 1);
									break;
								case e.LevelStageEnum.TutorialTeamWork:
									m = b.y - 5, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 576, 512, 64, b.x / 2 - 4, m, 8, 1);
									break;
								case e.LevelStageEnum.None:
									1 === n.currentLevel && (m = b.y - 6, t.fillRect(0, m, b.x, 1), t.drawImage(e.Resources.tooltips3Image, 0, 512, 512, 64, b.x / 2 - 4, m, 8, 1))
							}
							switch (m = 1.5, t.fillStyle = "rgba(0, 0, 0, 0.5)", n.currentLevelTip) {
								case e.LevelTipEnum.TipOne:
									m = 1.5, t.drawImage(e.Resources.tooltips4Image, 0, 256, 256, 64, b.x / 2 - 2 - .3 * e.getTitleHeartbeat().time, m - .1 * e.getTitleHeartbeat().time, 4 + .6 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time);
									break;
								case e.LevelTipEnum.TipTwo:
									m = .5, t.drawImage(e.Resources.tooltips4Image, 128, 64, 256, 64, b.x / 2 - 2 - .3 * e.getTitleHeartbeat().time, m - .1 * e.getTitleHeartbeat().time, 4 + .6 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time);
									break;
								case e.LevelTipEnum.TipThree:
									m = .5, t.drawImage(e.Resources.tooltips4Image, 0, 128, 384, 64, b.x / 2 - 3 - .3 * e.getTitleHeartbeat().time, m - .1 * e.getTitleHeartbeat().time, 6 + .6 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time);
									break;
								case e.LevelTipEnum.TipFive:
									m = .5, 10 > n.currentLevel ? (t.drawImage(e.Resources.tooltips1Image, 0, 704, 128, 64, b.x / 2 - 1, m + .1, 2, 1), e.drawNumber(t, n.currentLevel.toString(), b.x / 2 - .2, m + .9, 1.1)) : 100 > n.currentLevel ? (t.drawImage(e.Resources.tooltips1Image, 0, 704, 128, 64, b.x / 2 - 1, m + .1, 2, 1), e.drawNumber(t, n.currentLevel.toString(), b.x / 2 - .4, m + .9, 1.1)) : 1e3 === n.currentLevel ? (t.drawImage(e.Resources.tooltips1Image, 192, 576, 256, 128, b.x / 2 - 2, m, 4, 2), t.drawImage(e.Resources.tooltips1Image, 0, 576, 192, 128, b.x / 2 - 1.5, m, 3, 2)) : 1001 === n.currentLevel && (t.drawImage(e.Resources.tooltips1Image, 192, 576, 256, 128, b.x / 2 - 2, m, 4, 2), t.drawImage(e.Resources.tooltips1Image, 256, 448, 192, 128, b.x / 2 - 1.5, m, 3, 2))
							}
							t.drawImage(e.Resources.hud2Image, 128, 192, 128, 64, -.1, -.1, 2, 1), t.save(), t.translate(-n.survivalPointsZoomTime, -n.survivalPointsZoomTime), t.scale(1 + n.survivalPointsZoomTime, 1 + n.survivalPointsZoomTime), m = n.survivalPoints.toString(), 1 === m.length ? e.drawNumber(t, m, .65, .3, 1.2) : 2 === m.length ? e.drawNumber(t, m, .5, .3, 1.2) : 3 === m.length ? e.drawNumber(t, m, .35, .3, 1.2) : 3 < m.length && e.drawNumber(t, m, .2, .3, 1.2), t.restore(), m = 1e3 === n.currentLevel || 1001 === n.currentLevel ? 1001 === n.currentLevel ? n.daysCount.toString() : n.killCount.toString() : "", "" !== m && (s = 0, t.drawImage(e.Resources.hud2Image, 0, 192, 128, 64, -.1, .9, 2, 1), 1 === m.length ? s = .65 : 2 === m.length ? s = .5 : 3 === m.length ? s = .35 : 3 < m.length && (s = .2), e.drawNumber(t, m, s, 1.3, 1.2), 1e3 === n.currentLevel ? t.drawImage(e.Resources.hud3Image, 448, 64, 64, 64, 1.55 - s, 1.3, 1, 1) : t.drawImage(e.Resources.hud3Image, 0, 64, 64, 64, 1.55 - s, 1.3, 1, 1))
						} else g === e.GameStateEnum.GameWon ? !1 === n.rewardItem.won && (t.fillStyle = "rgba(0, 0, 0, 0.5)", t.fillRect(0, b.y / 2 + 1, b.x, 1), t.drawImage(e.Resources.hud2Image, 192, 128, 320, 64, b.x / 2 - 2.5, b.y / 2 + 1, 5, 1)) : g === e.GameStateEnum.GameLost && (m = b.x / 2 - 3.5, s = b.y / 2 - 2, t.save(), t.translate(m, s), t.rotate(-.2), t.translate(-m, -s), t.drawImage(e.Resources.hud1Image, 128, 0, 192, 64, m, s, 3, 1), t.restore(), 1e3 === n.currentLevel || 1001 === n.currentLevel) && (t.drawImage(e.Resources.tooltips1Image, 192, 576, 256, 128, b.x / 2 - 2, 1.45, 4, 2), t.drawImage(e.Resources.effectsImage, 0, 209, 192, 64, b.x / 2 - 1.5, 1.5, 3, 1), m = 1e3 === n.currentLevel ? n.killCount.toString() : n.daysCount.toString(), s = 0, 1 === m.length ? s = .3 : 2 === m.length ? s = .45 : 3 === m.length ? s = .6 : 3 < m.length && (s = .75), e.drawNumber(t, m, b.x / 2 - s, 2.4, 1.2), 1e3 === n.currentLevel ? (t.drawImage(e.Resources.hud3Image, 448, 64, 64, 64, b.x / 2 + s - .3, 2.4, 1, 1), n.killCount === e.getSavedData().killCountHighScore && t.drawImage(e.Resources.effectsImage, 320, 284, 64, 64, b.x / 2 + 1, 2.5, 1, 1)) : (t.drawImage(e.Resources.hud3Image, 0, 64, 64, 64, b.x / 2 + s - .3, 2.4, 1, 1), n.daysCount === e.getSavedData().daysCountHighScore && t.drawImage(e.Resources.effectsImage, 320, 284, 64, 64, b.x / 2 + 1, 2.5, 1, 1)));
						for (e.drawEntityMarkers(t, n), s = n.primaryWeaponAssignmentDone && n.secondaryWeaponAssignmentDone && n.newItem === e.StackObjectTypeEnum.None, m = 0; m < v.length; m += 1)
							if (v[m].enabled || v[m].x !== v[m].tx || v[m].y !== v[m].ty)
								if (e.CommandEnum.Menu === v[m].type) t.drawImage(e.Resources.hud2Image, 128, 384, 64, 64, v[m].x, v[m].y, 1, 1);
								else if (e.CommandEnum.Restart === v[m].type) t.drawImage(e.Resources.hud2Image, 128, 128, 64, 64, v[m].x, v[m].y, 1, 1);
						else if (e.CommandEnum.NextLevel === v[m].type) t.drawImage(e.Resources.hud2Image, 256, 256, 64, 64, v[m].x, v[m].y, 1, 1);
						else if (e.CommandEnum.ToggleAdrenaline === v[m].type) s && (v[m].x === v[m].tx && v[m].y === v[m].ty || n.survivalRageTime) && (n.survivalRageTime ? (t.drawImage(e.Resources.hud2Image, 192, 256, 64, 64, v[m].x - .15 * e.getTitleHeartbeat().time, v[m].y - .15 * e.getTitleHeartbeat().time, 1 + .3 * e.getTitleHeartbeat().time, 1 + .3 * e.getTitleHeartbeat().time), v[m].x === v[m].tx && v[m].y === v[m].ty && e.drawNumber(t, n.survivalRageTime.toFixed(0).toString(), v[m].x + .75, v[m].y + .35, 1)) : n.survivalPoints >= n.minSurvivalPoints && t.drawImage(e.Resources.hud2Image, 192, 256, 64, 64, v[m].x - .1 * e.getTitleHeartbeat().time, v[m].y - .1 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time, 1 + .2 * e.getTitleHeartbeat().time));
						else if (e.CommandEnum.CancelAction === v[m].type) s && (v[m].direction === e.DirectionEnum.Left && 0 < n.leftPlayer.buildData.cooldown ? t.drawImage(e.Resources.hud2Image, 256, 64, 64, 64, v[m].x, v[m].y, 1, 1) : v[m].direction === e.DirectionEnum.Right && 0 < n.rightPlayer.buildData.cooldown && t.drawImage(e.Resources.hud2Image, 256, 64, 64, 64, v[m].x, v[m].y, 1, 1));
						else if (e.CommandEnum.SelectStackObject === v[m].type || e.CommandEnum.ShowStackObjects === v[m].type) {
							if (s) {
								switch (y = null, f = v[m].direction === e.DirectionEnum.Left ? n.leftPlayer.buildData : n.rightPlayer.buildData, y = e.CommandEnum.SelectStackObject === v[m].type ? v[m].stackObjectType : f.stackObjectType, y === e.StackObjectTypeEnum.RepairCrate && e.CommandEnum.SelectStackObject === v[m].type && (T = v[m].direction === e.DirectionEnum.Left ? n.leftPlayer : n.rightPlayer, 0 >= n.repairKits || !(0 < T.stack.objects.length && T.stack.objects[0].strength < n.getStackObjectStrength(T.stack.objects[0].type))) && (t.globalAlpha = .3), (y === e.StackObjectTypeEnum.MetalCrate || y === e.StackObjectTypeEnum.WoodCrate) && (T = v[m].direction === e.DirectionEnum.Left ? n.leftPlayer : n.rightPlayer, T.stack.objects.length === n.maxStackSize && (t.globalAlpha = .3)), (v[m].stackObjectType === e.StackObjectTypeEnum.DoubleWoodCrate || v[m].stackObjectType === e.StackObjectTypeEnum.DoubleMetalCrate || v[m].stackObjectType === e.StackObjectTypeEnum.MountedCrate || v[m].stackObjectType === e.StackObjectTypeEnum.SpikeCrate || v[m].stackObjectType === e.StackObjectTypeEnum.TNTCrate) && 40 > n.survivalPoints && (t.globalAlpha = .3), y !== e.StackObjectTypeEnum.None && (v[m].selected ? t.drawImage(e.Resources.hud2Image, 384, 256, 64, 64, v[m].x, v[m].y, 1, 1) : t.drawImage(e.Resources.hud2Image, 320, 64, 64, 64, v[m].x, v[m].y, 1, 1)), y) {
									case e.StackObjectTypeEnum.None:
										t.save(), v[m].direction === e.DirectionEnum.Left && (t.translate(2 * v[m].x + 1, 0), t.scale(-1, 1)), v[m].selected ? t.drawImage(e.Resources.hud2Image, 384, 64, 64, 64, v[m].x, v[m].y, 1, 1) : t.drawImage(e.Resources.hud2Image, 448, 64, 64, 64, v[m].x, v[m].y, 1, 1), t.restore();
										break;
									case e.StackObjectTypeEnum.WoodCrate:
										t.drawImage(e.Resources.objectsImage, 256, 0, 64, 64, v[m].x + .15, v[m].y + .15, .7 * v[m].size, .7 * v[m].size);
										break;
									case e.StackObjectTypeEnum.SpikeCrate:
										t.drawImage(e.Resources.objectsImage, 320, 0, 64, 64, v[m].x + .18, v[m].y + .1, .7 * v[m].size, .7 * v[m].size);
										break;
									case e.StackObjectTypeEnum.TNTCrate:
										t.drawImage(e.Resources.objectsImage, 384, 0, 64, 64, v[m].x + .15, v[m].y + .15, .7 * v[m].size, .7 * v[m].size);
										break;
									case e.StackObjectTypeEnum.MetalCrate:
										t.drawImage(e.Resources.objectsImage, 0, 64, 64, 64, v[m].x + .15, v[m].y + .15, .7 * v[m].size, .7 * v[m].size);
										break;
									case e.StackObjectTypeEnum.MountedCrate:
										t.drawImage(e.Resources.objectsImage, 0, 0, 64, 64, v[m].x + .12, v[m].y + .11, .8 * v[m].size, .8 * v[m].size);
										break;
									case e.StackObjectTypeEnum.RepairCrate:
										t.drawImage(e.Resources.hud1Image, 64, 0, 64, 64, v[m].x + .1, v[m].y + .1, .8 * v[m].size, .8 * v[m].size), e.drawNumber(t, n.repairKits.toString(), v[m].x + .3, v[m].y - .7, .7);
										break;
									case e.StackObjectTypeEnum.DoubleMetalCrate:
										t.drawImage(e.Resources.objectsImage, 64, 0, 64, 64, v[m].x + .15, v[m].y + .1, .8 * v[m].size, .8 * v[m].size);
										break;
									case e.StackObjectTypeEnum.DoubleWoodCrate:
										t.drawImage(e.Resources.objectsImage, 128, 0, 64, 64, v[m].x + .15, v[m].y + .1, .8 * v[m].size, .8 * v[m].size)
								}
								t.globalAlpha = 1, e.CommandEnum.ShowStackObjects === v[m].type && (t.save(), t.beginPath(), t.arc(v[m].x + .02 + .5 * v[m].size, v[m].y + .5 * v[m].size, .46 * v[m].size, 0, 2 * Math.PI, !0), t.closePath(), t.clip(), t.fillStyle = "rgba(0, 0, 0, 0.5)", y = n.getStackObjectCreationTime(f.stackObjectType), t.fillRect(v[m].x, v[m].y + (y - f.cooldown) * v[m].size / y, v[m].size, v[m].size), t.restore())
							}
						} else if (e.CommandEnum.AssignWeapon === v[m].type) {
							if (v[m].enabled) {
								switch (t.save(), v[m].direction === e.DirectionEnum.Left && (t.translate(2 * v[m].x + 1, 0), t.scale(-1, 1)), t.translate(0, .1 * e.getTitleHeartbeat().time), v[m].selected ? t.drawImage(e.Resources.hud2Image, 320, 64, 64, 64, v[m].x, v[m].y, 1, 1) : t.drawImage(e.Resources.hud2Image, 0, 0, 64, 64, v[m].x, v[m].y, 1, 1), v[m].weaponType) {
									case e.WeaponTypeEnum.Rifle:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 192, 0, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 64, 64, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.TurboBlaster:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 128, 64, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 64, 576, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.ShotGun:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 128, 576, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 448, 512, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.AutoRifle:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 0, 576, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 320, 512, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.AutoShotGun:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 384, 512, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 192, 512, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.Uzi:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 256, 512, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 192, 576, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size);
										break;
									case e.WeaponTypeEnum.Rpg:
										v[m].selected ? t.drawImage(e.Resources.objectsImage, 256, 576, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size) : t.drawImage(e.Resources.objectsImage, 256, 256, 64, 64, v[m].x - .1, v[m].y - .1, 1.2 * v[m].size, 1.2 * v[m].size)
								}
								v[m].locked && t.drawImage(e.Resources.hud1Image, 0, 0, 64, 64, v[m].x, v[m].y, v[m].size, v[m].size), t.restore()
							}
						} else if (v[m].enabled && e.CommandEnum.CrateSelectionDone === v[m].type) t.drawImage(e.Resources.hud2Image, 64, 0, 64, 64, v[m].x, v[m].y, 1, 1);
						else if (v[m].enabled && e.CommandEnum.RewardAccepted === v[m].type) {
							switch (t.save(), t.translate(0, .5), t.drawImage(e.Resources.tooltips5Image, 0, 64, 320, 256, v[m].x - 2, v[m].y - 4, 5, 4), n.rewardItem.crate !== e.StackObjectTypeEnum.CriticalChance ? t.drawImage(e.Resources.tooltips5Image, 128, 0, 192, 64, v[m].x - 1, v[m].y - 4.2, 3, 1) : t.drawImage(e.Resources.tooltips2Image, 0, 0, 192, 64, v[m].x - 1, v[m].y - 4.2, 3, 1), n.rewardItem.crate) {
								case e.StackObjectTypeEnum.RepairCrate:
									t.drawImage(e.Resources.tooltips5Image, 0, 0, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.hud1Image, 64, 0, 64, 64, v[m].x, v[m].y - 2.7, 1, 1), t.drawImage(e.Resources.tooltips5Image, 0, 384, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.MetalCrate:
									t.drawImage(e.Resources.tooltips5Image, 384, 320, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 0, 64, 64, 64, v[m].x, v[m].y - 2.6, 1, 1), t.drawImage(e.Resources.tooltips5Image, 128, 320, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.SpikeCrate:
									t.drawImage(e.Resources.tooltips5Image, 0, 320, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 320, 0, 64, 64, v[m].x, v[m].y - 2.7, 1, 1), t.drawImage(e.Resources.tooltips5Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.TNTCrate:
									t.drawImage(e.Resources.tooltips5Image, 256, 384, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 384, 0, 64, 64, v[m].x, v[m].y - 2.6, 1, 1), t.drawImage(e.Resources.tooltips5Image, 256, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.MountedCrate:
									t.drawImage(e.Resources.tooltips5Image, 128, 512, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 0, 0, 64, 64, v[m].x - .05, v[m].y - 2.6, 1.1, 1.1), t.drawImage(e.Resources.tooltips5Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.Challenge1:
									t.drawImage(e.Resources.tooltips5Image, 256, 704, 128, 64, v[m].x - .5, v[m].y - 3.7, 2, 1), t.drawImage(e.Resources.hud2Image, 256, 448, 128, 128, v[m].x - .15, v[m].y - 2.8, 1.4, 1.4), t.drawImage(e.Resources.tooltips1Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.Challenge2:
									t.drawImage(e.Resources.tooltips5Image, 256, 704, 128, 64, v[m].x - .5, v[m].y - 3.7, 2, 1), t.drawImage(e.Resources.hud2Image, 128, 448, 128, 128, v[m].x - .15, v[m].y - 2.8, 1.4, 1.4), t.drawImage(e.Resources.tooltips1Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.CriticalChance:
									t.drawImage(e.Resources.tooltips2Image, 0, 128, 192, 64, v[m].x - 1, v[m].y - 3.7, 3, 1), t.drawImage(e.Resources.tooltips1Image, 192, 320, 128, 128, v[m].x - .15, v[m].y - 2.8, 1.4, 1.4), t.drawImage(e.Resources.tooltips1Image, 0, 320, 192, 64, v[m].x - 1, v[m].y - 1.4, 3, 1);
									break;
								case e.StackObjectTypeEnum.DoubleMetalCrate:
									t.drawImage(e.Resources.tooltips5Image, 384, 576, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 64, 0, 64, 64, v[m].x, v[m].y - 2.7, 1.1, 1.1), t.drawImage(e.Resources.tooltips5Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.StackObjectTypeEnum.DoubleWoodCrate:
									t.drawImage(e.Resources.tooltips5Image, 384, 576, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.objectsImage, 128, 0, 64, 64, v[m].x, v[m].y - 2.7, 1.1, 1.1), t.drawImage(e.Resources.tooltips5Image, 0, 448, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1)
							}
							switch (n.rewardItem.weapon) {
								case e.WeaponTypeEnum.TurboBlaster:
									t.drawImage(e.Resources.tooltips5Image, 320, 64, 128, 64, v[m].x - .43, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.tooltips4Image, 384, 0, 128, 64, v[m].x - .45, v[m].y - 2.6, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 256, 256, 64, v[m].x - 1.47, v[m].y - 1.4, 4, 1);
									break;
								case e.WeaponTypeEnum.ShotGun:
									t.drawImage(e.Resources.tooltips5Image, 0, 512, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.tooltips4Image, 0, 64, 128, 64, v[m].x - .45, v[m].y - 2.6, 2, 1), t.drawImage(e.Resources.tooltips1Image, 0, 256, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.WeaponTypeEnum.AutoRifle:
									t.drawImage(e.Resources.tooltips5Image, 256, 576, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.tooltips4Image, 0, 0, 128, 64, v[m].x - .45, v[m].y - 2.6, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 192, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1);
									break;
								case e.WeaponTypeEnum.AutoShotGun:
									t.drawImage(e.Resources.tooltips5Image, 0, 704, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.tooltips4Image, 128, 0, 128, 64, v[m].x - .45, v[m].y - 2.6, 2, 1), t.drawImage(e.Resources.tooltips1Image, 0, 192, 256, 64, v[m].x - 1.45, v[m].y - 1.4, 4, 1);
									break;
								case e.WeaponTypeEnum.Rpg:
									t.drawImage(e.Resources.tooltips5Image, 256, 512, 128, 64, v[m].x - .5, v[m].y - 3.6, 2, 1), t.drawImage(e.Resources.tooltips4Image, 256, 0, 128, 64, v[m].x - .45, v[m].y - 2.6, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 128, 256, 64, v[m].x - 1.5, v[m].y - 1.4, 4, 1)
							}
							t.restore()
						} else if (v[m].enabled && e.CommandEnum.Ready === v[m].type) switch (t.save(), t.translate(0, .2 * -e.getTitleHeartbeat().time), n.primaryWeaponAssignmentDone ? n.secondaryWeaponAssignmentDone || t.drawImage(e.Resources.hud2Image, 0, 64, 256, 64, v[m].x - 1.5, .1, 4, 1) : t.drawImage(e.Resources.hud2Image, 128, 0, 256, 64, v[m].x - 1.5, .1, 4, 1), t.restore(), t.drawImage(e.Resources.tooltips1Image, 192, 576, 256, 128, v[m].x - 1.5, v[m].y - 1.5, 4, 2), n.primaryWeaponAssignmentDone || n.secondaryWeaponAssignmentDone ? t.drawImage(e.Resources.hud2Image, 0, 128, 64, 64, v[m].x, v[m].y, 1, 1) : t.drawImage(e.Resources.hud2Image, 64, 0, 64, 64, v[m].x, v[m].y, 1, 1), n.selectedWeaponType) {
							case e.WeaponTypeEnum.Rifle:
								t.drawImage(e.Resources.tooltips5Image, 384, 512, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 0, 128, 256, 64, v[m].x - .5, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.ShotGun:
								t.drawImage(e.Resources.tooltips5Image, 0, 512, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 0, 256, 256, 64, v[m].x - 1.5, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.TurboBlaster:
								t.drawImage(e.Resources.tooltips5Image, 320, 64, 128, 64, v[m].x - .43, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 256, 256, 64, v[m].x - 1.47, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.AutoRifle:
								t.drawImage(e.Resources.tooltips5Image, 256, 576, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 192, 256, 64, v[m].x - 1.5, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.AutoShotGun:
								t.drawImage(e.Resources.tooltips5Image, 0, 704, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 0, 192, 256, 64, v[m].x - 1.45, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.Uzi:
								t.drawImage(e.Resources.tooltips5Image, 128, 704, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 0, 256, 64, v[m].x - 1.5, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.Rpg:
								t.drawImage(e.Resources.tooltips5Image, 256, 512, 128, 64, v[m].x - .5, v[m].y - 1.7, 2, 1), t.drawImage(e.Resources.tooltips1Image, 256, 128, 256, 64, v[m].x - 1.5, v[m].y - 1, 4, 1);
								break;
							case e.WeaponTypeEnum.None:
								t.drawImage(e.Resources.tooltips1Image, 0, 0, 256, 128, v[m].x - 1.5, v[m].y - 1.5, 4, 2)
						}
					}
				}
				0 < e.getAchievementDialogTime() && e.drawAchievementToaster(t, b)
			}
			0 < e.getLockedDialogTime() && (m = g === e.GameStateEnum.GameRun ? 0 : -2.7, s = g === e.GameStateEnum.GameRun ? 0 : 1.5, t.globalAlpha = Math.min(1, e.getLockedDialogTime()), t.drawImage(e.Resources.tooltips1Image, 192, 576, 256, 128, b.x / 2 - 2 + m, b.y / 2 - 1 + s, 4, 2), t.drawImage(e.Resources.tooltips5Image, 0, 576, 256, 128, b.x / 2 - 2 + m, b.y / 2 - 1 + s, 4, 2), t.globalAlpha = 1), g === e.GameStateEnum.GameMenu && t.drawImage(e.Resources.loadingScreenImage5, 0, 0, 192, 96, b.x - 2.5, b.y - 1.4, 3, 1.5), g !== e.GameStateEnum.GameWon && g !== e.GameStateEnum.GameLost || t.drawImage(e.Resources.loadingScreenImage5, 0, 0, 192, 96, b.x - 2.5, b.y - 1.4, 3, 1.5)
		}, e.drawAchievementToaster = function(t, n) {
			var i = e.getAchievementDialogMaxTime(),
				a = -1.5,
				a = e.getAchievementDialogTime() > i - .5 ? -1.5 + 4 * (i - e.getAchievementDialogTime()) : .5 > e.getAchievementDialogTime() ? .5 - 4 * (.5 - e.getAchievementDialogTime()) : .5;
			switch (t.drawImage(e.Resources.objectsImage, 0, 256, 256, 128, n.x / 2 - 2, a, 4, 2), e.getAchievementId()) {
				case 0:
					t.drawImage(e.Resources.hud3Image, 192, 64, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 1:
					t.drawImage(e.Resources.hud3Image, 256, 128, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 2:
					t.drawImage(e.Resources.hud3Image, 0, 128, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 3:
					t.drawImage(e.Resources.hud3Image, 256, 0, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 4:
					t.drawImage(e.Resources.hud3Image, 0, 0, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 5:
					t.drawImage(e.Resources.hud3Image, 0, 448, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 6:
					t.drawImage(e.Resources.hud3Image, 256, 384, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 7:
					t.drawImage(e.Resources.hud3Image, 0, 512, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 8:
					t.drawImage(e.Resources.hud3Image, 256, 448, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 9:
					t.drawImage(e.Resources.hud3Image, 0, 320, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 10:
					t.drawImage(e.Resources.hud3Image, 256, 256, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 11:
					t.drawImage(e.Resources.hud3Image, 0, 384, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 12:
					t.drawImage(e.Resources.hud3Image, 256, 320, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 13:
					t.drawImage(e.Resources.hud3Image, 0, 256, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36);
					break;
				case 14:
					t.drawImage(e.Resources.hud3Image, 64, 192, 256, 23.04, n.x / 2 - 2, a + 1.2, 4, .36)
			}
		}, e.drawNumber = function(t, i, o, r, s) {
			var l, c = o;
			for (t.save(), t.translate(o + .05, r + .5), t.scale(s, s), t.translate(-(o + .05), -(r + .5)), o = 0, s = i.length; s > o; o += 1) l = i.charAt(o), l = parseInt(l, 10) * a * .1, t.drawImage(e.Resources.hud2ImageNum, l, 0, .1 * a, n, c, r + .25, .4, 1), c += .25;
			t.restore()
		}, e.drawEffect = function(t, n) {
			var i = t.globalAlpha;
			switch (t.save(), n.direction === e.DirectionEnum.Left && (t.translate(2 * n.x, 0), t.scale(-1, 1)), n.type === e.EffectTypeEnum.GunFire || n.type === e.EffectTypeEnum.CartridgeCase ? (0 < n.vy && (n.gravity = 1, n.angle < .5 * Math.PI && 0 < n.angle && (n.rotationSpeed = -.3), (n.angle > 1.5 * Math.PI || 0 > n.angle) && (n.rotationSpeed = .3), 5 <= n.y && (n.selfDestroyTime = 0)), t.translate(n.x, n.y), t.rotate(n.angle), t.translate(-n.x, -n.y)) : (t.translate(n.x, n.y), t.rotate(n.angle), t.translate(-n.x, -n.y), n.selfDestroyTime < n.startFadeTime && (t.globalAlpha = n.selfDestroyTime)), n.type) {
				case e.EffectTypeEnum.Warhead:
					t.drawImage(e.Resources.objectsImage, 193, 192, 128, 64, n.x - 1, n.y - .5, 2, 1);
					break;
				case e.EffectTypeEnum.Bullet:
					t.drawImage(e.Resources.effectsImage, 384, 284, 79, 79, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.MultiBullet:
					t.drawImage(e.Resources.effectsImage, 256, 128, 79, 81, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.HeadLimb:
					t.drawImage(e.Resources.effectsImage, 384, 0, 128, 128, n.x - 1, n.y - 1.6, 2, 2);
					break;
				case e.EffectTypeEnum.BloodSplatter:
					t.drawImage(e.Resources.effectsImage, 192, 209, 64, 64, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.GunFire:
					t.drawImage(e.Resources.effectsImage, 256, 209, 75, 75, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.CartridgeCase:
					t.drawImage(e.Resources.effectsImage, 256, 209, 75, 75, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.SmallSmoke:
					t.drawImage(e.Resources.effectsImage, 256, 284, 64, 64, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.Impact:
					t.drawImage(e.Resources.effectsImage, 331, 209, 64, 64, n.x - .5, n.y - .5, 1, 1);
					break;
				case e.EffectTypeEnum.BigSmoke:
					.5 < n.selfDestroyTime ? t.drawImage(e.Resources.effectsImage, 256, 284, 64, 64, n.x - 1, n.y - 1, 2, 2) : t.drawImage(e.Resources.effectsImage, 0, 284, 128, 128, n.x - 2, n.y - 2, 4, 4);
					break;
				case e.EffectTypeEnum.Explosion:
					.5 < n.selfDestroyTime ? t.drawImage(e.Resources.effectsImage, 128, 284, 128, 128, n.x - 1, n.y - 1, 2, 2) : t.drawImage(e.Resources.effectsImage, 128, 284, 128, 128, n.x - 2, n.y - 2, 4, 4);
					break;
				case e.EffectTypeEnum.GainSP:
					t.drawImage(e.Resources.effectsImage, 64, 128, 64, 64, n.x - .5 - .5 * n.selfDestroyTime, n.y - .5 - .5 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime);
					break;
				case e.EffectTypeEnum.GainMoreSP:
					t.drawImage(e.Resources.effectsImage, 0, 128, 64, 64, n.x - .5 - .5 * n.selfDestroyTime, n.y - .5 - .5 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime);
					break;
				case e.EffectTypeEnum.Critical:
					t.drawImage(e.Resources.effectsImage, 128, 128, 128, 64, n.x - 1 - .5 * n.selfDestroyTime, n.y - .5 - .5 * n.selfDestroyTime, 2 + 1 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime);
					break;
				case e.EffectTypeEnum.Checkpoint:
					t.drawImage(e.Resources.effectsImage, 192, 0, 192, 64, n.x - 1.5 - .5 * n.selfDestroyTime, n.y - .5 - .5 * n.selfDestroyTime, 3 + 1 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime);
					break;
				case e.EffectTypeEnum.HighScore:
					t.drawImage(e.Resources.effectsImage, 0, 0, 192, 64, n.x - 1.5 - .5 * n.selfDestroyTime, n.y - .5 - .5 * n.selfDestroyTime, 3 + 1 * n.selfDestroyTime, 1 + 1 * n.selfDestroyTime)
			}
			t.globalAlpha = i, t.restore()
		}, e.drawStackObject = function(t, n, i, a) {
			if (a.visible) {
				t.save(), t.translate(n, a.y), t.rotate(a.angle), t.translate(-n, -a.y);
				var o = !0;
				switch ((i === e.DirectionEnum.Right || a.direction === e.DirectionEnum.Right) && (o = !1, t.translate(2 * n, 0), t.scale(-1, 1)), a.type) {
					case e.StackObjectTypeEnum.WoodCrate:
						3 <= a.strength ? t.drawImage(e.Resources.objectsImage, 256, 0, 64, 64, n - .6, a.y - .6, 1.2, 1.3) : 1 <= a.strength ? t.drawImage(e.Resources.objectsImage, 129, 192, 64, 64, n - .6, a.y - .6, 1.2, 1.3) : 0 <= a.strength && t.drawImage(e.Resources.objectsImage, 64, 192, 64, 64, n - .6, a.y - .6, 1.2, 1.3);
						break;
					case e.StackObjectTypeEnum.SpikeCrate:
						t.drawImage(e.Resources.objectsImage, 320, 0, 64, 64, n - .6, a.y - .6, 1.2, 1.2);
						break;
					case e.StackObjectTypeEnum.TNTCrate:
						t.drawImage(e.Resources.objectsImage, 384, 0, 64, 64, n - .6, a.y - .6, 1.2, 1.2);
						break;
					case e.StackObjectTypeEnum.MetalCrate:
						6 <= a.strength ? t.drawImage(e.Resources.objectsImage, 0, 64, 64, 64, n - .6, a.y - .6, 1.2, 1.2) : 3 <= a.strength ? t.drawImage(e.Resources.objectsImage, 0, 192, 64, 64, n - .6, a.y - .6, 1.2, 1.2) : 0 <= a.strength && t.drawImage(e.Resources.objectsImage, 384, 128, 64, 64, n - .6, a.y - .6, 1.2, 1.2);
						break;
					case e.StackObjectTypeEnum.MountedCrate:
						t.save(), 0 !== a.firingAngle && (t.translate(n, a.y), t.rotate(o ? a.firingAngle : Math.PI - a.firingAngle), t.translate(-n, -a.y + .9), t.translate(2 * n, 0), t.scale(-1, 1)), t.translate(a.firingRecoilTime, 0), t.drawImage(e.Resources.objectsImage, 256, 128, 128, 64, n - 1, a.y - 1, 2, 1), t.restore()
				}
				a.selected && (t.drawImage(e.Resources.objectsImage, 192, 128, 64, 64, n - .6, a.y - .6, 1, 1), t.translate(2 * n, 0), t.scale(-1, 1), t.drawImage(e.Resources.objectsImage, 192, 128, 64, 64, n - .6, a.y - .6, 1, 1)), t.restore()
			}
		}, e.drawPlayer = function(t, n) {
			if (n.weapons[e.WeaponCategoryEnum.Primary] !== e.WeaponTypeEnum.None) switch (t.save(), 0 < n.buildData.cooldown ? n.buildDirection === e.DirectionEnum.Left && (t.translate(2 * n.x, 0), t.scale(-1, 1)) : n.direction === e.DirectionEnum.Left && (t.translate(2 * n.x, 0), t.scale(-1, 1)), t.translate(n.x, n.y), t.scale(n.scaleFactor, n.scaleFactor), t.translate(-n.x, -n.y - .15), 1 !== n.scaleFactor && t.translate(0, .2), n.classType) {
				case e.EntityClassTypeEnum.HumanFemale:
					n.isDead ? e.drawDeadHumanFemale(t, n) : e.drawHumanFemale(t, n);
					break;
				case e.EntityClassTypeEnum.HumanMale:
					n.isDead ? e.drawDeadHumanMale(t, n) : e.drawHumanMale(t, n)
			}
			t.restore()
		}, e.drawEntity = function(t, n) {
			switch (t.save(), n.direction === e.DirectionEnum.Left && (t.translate(2 * n.x, 0), t.scale(-1, 1)), t.translate(n.x, n.y), t.scale(n.scaleFactor, n.scaleFactor), t.translate(-n.x, -n.y - .2), t.drawImage(e.Resources.entitiesImage, 256, 0, 64, 64, n.x - n.radius - .05, n.y + n.radius - .05, 1, 1), n.state) {
				case e.EntityStateEnum.Idle:
					e.drawIdleEntity(t, n);
					break;
				case e.EntityStateEnum.Walking:
					e.drawWalkingEntity(t, n)
			}
			t.restore(), n.drawHitPoints && (t.fillStyle = "#4169E1", t.fillRect(n.x - .15, n.y - 1.2, .3, .1), t.fillStyle = "#ADFF2F", t.fillRect(n.x - .15, n.y - 1.2, .3 * n.hitPoints / n.maxHitPoints, .1))
		}, e.drawEntityMarkers = function(t, n) {
			for (var i = e.screenToHud({
					x: e.getCanvasWidth(),
					y: e.getCanvasHeight()
				}), a = -.5, o = -.5, r = 0, s = n.entities.length - 1; s >= 0; --s) {
				var l = n.entities[s];
				if (l.offScreenDirection !== e.DirectionEnum.None) {
					switch (t.save(), l.offScreenDirection === e.DirectionEnum.Left ? (a++, r = .25 * a) : (o++, r = i.x - .25 * o, t.translate(2 * r, 0), t.scale(-1, 1)), t.drawImage(e.Resources.entitiesImage, 0, 292, 64, 64, r, 4.13, .8, .8), l.headStyle) {
						case e.HeadStyleEnum.Bandaged:
							t.drawImage(e.Resources.entitiesImage, 128, 0, 64, 64, r, 4.13, .8, .8);
							break;
						case e.HeadStyleEnum.Police:
							t.drawImage(e.Resources.entitiesImage, 192, 0, 64, 64, r, 4.13, .8, .8);
							break;
						case e.HeadStyleEnum.Tourist:
							t.drawImage(e.Resources.entitiesImage, 0, 0, 64, 64, r, 4.13, .8, .8);
							break;
						case e.HeadStyleEnum.Bandit:
							t.drawImage(e.Resources.entitiesImage, 64, 0, 64, 64, r, 4.13, .8, .8);
							break;
						case e.HeadStyleEnum.Mexican:
							t.drawImage(e.Resources.entitiesImage, 129, 393, 64, 64, r, 4.13, .8, .8)
					}
					t.restore()
				}
			}
			0 === e.getTitleHeartbeat().direction && (-.5 !== a && t.drawImage(e.Resources.hud2Image, 64, 128, 64, 64, 0, 3.63, 1, 1), -.5 !== o && (t.save(), t.translate(2 * i.x, 0), t.scale(-1, 1), t.drawImage(e.Resources.hud2Image, 64, 128, 64, 64, i.x, 3.63, 1, 1), t.restore()))
		}, e.drawDeadHumanMale = function(t, n) {
			t.save();
			var i = .03 * n.heartBeats[0].time,
				a = n.x - .5,
				o = n.y - .5;
			switch (t.drawImage(e.Resources.entitiesImage, 193, 393, 128, 128, a, o, 2, 2), a = n.x - 1.5, o = n.y - .5, t.translate(n.weaponOffset.x, n.weaponOffset.y + .5), 0 === n.reloadCooldown ? (t.translate(n.x, n.y), 0 === n.firingCooldown ? (t.rotate(-.3), t.translate(-n.x, -n.y - .1)) : (t.rotate(n.direction === e.DirectionEnum.Left && 0 !== n.firingAngle ? Math.PI - n.firingAngle : n.firingAngle), t.translate(-n.x, -n.y)), 0 !== n.firingCooldown && t.translate(-n.firingRecoilTime, 0)) : (t.translate(n.x, n.y), t.rotate(7 * -n.reloadCooldown * Math.PI), t.translate(-n.x, -n.y)), n.weapons[n.currentWeaponCategory]) {
				case e.WeaponTypeEnum.Rifle:
					t.drawImage(e.Resources.objectsImage, 192, 64, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.TurboBlaster:
					t.drawImage(e.Resources.objectsImage, 0, 512, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.ShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 128, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoRifle:
					t.drawImage(e.Resources.objectsImage, 320, 256, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 384, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Uzi:
					t.drawImage(e.Resources.objectsImage, 192, 384, 192, 64, a + .7, o - i + -.45, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Rpg:
					t.drawImage(e.Resources.objectsImage, 0, 448, 192, 64, a + .7, o - i + -.45, 3, 1 - i)
			}
			t.restore()
		}, e.drawHumanMale = function(t, n) {
			t.save();
			var i = .03 * n.heartBeats[0].time,
				a = n.heartBeats[2].time,
				o = 1 > n.heartBeats[1].time,
				r = n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? 6 : 5,
				s = n.x - .5,
				l = n.y - .3;
			if (0 < n.buildData.cooldown) t.drawImage(e.Resources.entitiesImage, 386, 192, 64, 64, s, l + .5, 1, 1), n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? t.drawImage(e.Resources.entitiesImage, 385, 292, 65, 65, s - .1, l - .3 + .1 * n.heartBeats[r].time, 1, 1) : t.drawImage(e.Resources.entitiesImage, 0, 393, 65, 65, s - .1, l - .3 + .1 * n.heartBeats[r].time, 1, 1), t.save(), t.translate(.25, .52), t.translate(n.x, n.y), t.rotate(.2), t.translate(-n.x, -n.y), t.restore(), t.drawImage(e.Resources.entitiesImage, 192, 292, 64, 64, s + .5, l + .3 + .3 - .2 * n.heartBeats[r].time, 1, 1), t.save(), t.translate(n.x + .9, n.y + .1), t.rotate(n.heartBeats[r].time - 1), t.translate(-(n.x + .5), -(n.y + .5)), t.drawImage(e.Resources.entitiesImage, 194, 64, 64, 64, s - .3, l + .3, 1, 1), t.restore();
			else switch (0 > n.vy ? t.drawImage(e.Resources.entitiesImage, 322, 192, 64, 64, s, l + .3, 1, 1) : t.drawImage(e.Resources.entitiesImage, 321, 393, 64, 64, s, l + .3, 1, 1), t.save(), t.translate(.25, .52), t.translate(n.x, n.y), t.rotate(.2), t.translate(-n.x, -n.y), t.restore(), t.save(), t.translate(n.x, n.y - .1 + .3 * n.firingRecoilTime - .05 * a), t.rotate(0), t.translate(-n.x, -n.y), n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? t.drawImage(e.Resources.entitiesImage, 385, 292, 65, 65, s - .1, l - .45, 1, 1) : o ? t.drawImage(e.Resources.entitiesImage, 129, 64, 65, 65, s - .1, l - .45, 1, 1) : t.drawImage(e.Resources.entitiesImage, 386, 64, 65, 65, s - .1, l - .45, 1, 1), t.restore(), s = n.x - 1.5, l = n.y - .5, t.translate(n.weaponOffset.x, n.weaponOffset.y), 0 === n.reloadCooldown ? (t.translate(n.x, n.y), 0 === n.firingCooldown ? (t.rotate(-.3), t.translate(-n.x, -n.y - .1)) : (t.rotate(n.direction === e.DirectionEnum.Left && 0 !== n.firingAngle ? Math.PI - n.firingAngle : n.firingAngle), t.translate(-n.x, -n.y)), 0 !== n.firingCooldown && t.translate(-n.firingRecoilTime, 0)) : (t.translate(n.x, n.y), t.rotate(7 * -n.reloadCooldown * Math.PI), t.translate(-n.x, -n.y)), n.weapons[n.currentWeaponCategory]) {
				case e.WeaponTypeEnum.Rifle:
					t.drawImage(e.Resources.objectsImage, 192, 64, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.TurboBlaster:
					t.drawImage(e.Resources.objectsImage, 0, 512, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.ShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 128, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoRifle:
					t.drawImage(e.Resources.objectsImage, 320, 256, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 384, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Uzi:
					t.drawImage(e.Resources.objectsImage, 192, 384, 192, 64, s + -0, l - i + -0, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Rpg:
					t.drawImage(e.Resources.objectsImage, 0, 448, 192, 64, s, l - i, 3, 1 - i)
			}
			t.restore()
		}, e.drawDeadHumanFemale = function(t, n) {
			t.save();
			var i = .03 * n.heartBeats[0].time,
				a = n.x - 1,
				o = n.y - 1;
			if (t.drawImage(e.Resources.entitiesImage, 258, 64, 128, 128, a, o, 2, 2), a = n.x - 1.5, o = n.y - .5, t.translate(n.weaponOffset.x, n.weaponOffset.y + .5), 0 === n.reloadCooldown) {
				if (t.translate(n.x, n.y), 0 === n.firingCooldown) switch (t.rotate(n.weapons[n.currentWeaponCategory] !== e.WeaponTypeEnum.Rpg ? .4 : -.4 + .1), n.weapons[n.currentWeaponCategory]) {
					case e.WeaponTypeEnum.TurboBlaster:
					case e.WeaponTypeEnum.ShotGun:
						t.translate(-.2, .1);
						break;
					case e.WeaponTypeEnum.Rifle:
						t.translate(-.2, .2);
						break;
					case e.WeaponTypeEnum.AutoRifle:
						t.translate(-.3, .2);
						break;
					case e.WeaponTypeEnum.AutoShotGun:
						t.translate(-.15, .1);
						break;
					case e.WeaponTypeEnum.Uzi:
						t.translate(-.1, .1)
				} else t.rotate(n.direction === e.DirectionEnum.Left && 0 !== n.firingAngle ? Math.PI - n.firingAngle : n.firingAngle);
				t.translate(-n.x, -n.y), 0 !== n.firingCooldown && t.translate(-n.firingRecoilTime, 0)
			} else t.translate(n.x, n.y), t.rotate(7 * -n.reloadCooldown * Math.PI), t.translate(-n.x, -n.y);
			switch (n.weapons[n.currentWeaponCategory]) {
				case e.WeaponTypeEnum.Rifle:
					t.drawImage(e.Resources.objectsImage, 192, 64, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.TurboBlaster:
					t.drawImage(e.Resources.objectsImage, 0, 512, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.ShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 128, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoRifle:
					t.drawImage(e.Resources.objectsImage, 320, 256, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.AutoShotGun:
					t.drawImage(e.Resources.objectsImage, 0, 384, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Uzi:
					t.drawImage(e.Resources.objectsImage, 192, 384, 192, 64, a + -.35, o - i + -.93, 3, 1 - i);
					break;
				case e.WeaponTypeEnum.Rpg:
					t.drawImage(e.Resources.objectsImage, 192, 448, 192, 64, a + -.35 + .55, o + i + -.93 - .1, 3, 1 + i)
			}
			t.restore()
		}, e.drawHumanFemale = function(t, n) {
			t.save();
			var i = .03 * n.heartBeats[0].time,
				a = n.heartBeats[2].time,
				o = 1 > n.heartBeats[1].time,
				r = n.x - .5,
				s = n.y - .59,
				l = n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? 6 : 5;
			if (t.translate(0, .25), 0 < n.buildData.cooldown) t.drawImage(e.Resources.entitiesImage, 65, 192, 64, 96, r + .2, s + .6, 1, 1.5), n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? t.drawImage(e.Resources.entitiesImage, 0, 192, 65, 100, r, s - .4 + .05 * n.heartBeats[l].time, 1, 1.5) : t.drawImage(e.Resources.entitiesImage, 193, 192, 65, 100, r, s - .4 + .05 * n.heartBeats[l].time, 1, 1.5), r = n.x - .5, s = n.y - .5, t.drawImage(e.Resources.entitiesImage, 192, 292, 64, 64, r + .5, s + .5 - .2 * n.heartBeats[l].time, 1, 1), t.save(), t.translate(n.x + .9, n.y - .2), t.rotate(n.heartBeats[l].time - 1), t.translate(-(n.x + .5), -(n.y + .5)), t.drawImage(e.Resources.entitiesImage, 194, 64, 64, 64, r - .2, s + .5, 1, 1), t.restore();
			else {
				if (0 > n.vy ? t.drawImage(e.Resources.entitiesImage, 129, 192, 64, 96, r, s + .4, 1, 1.5) : t.drawImage(e.Resources.entitiesImage, 65, 64, 64, 96, r, s + .4, 1, 1.5), t.save(), t.translate(n.x, n.y - .7), t.rotate(-.1 + n.firingRecoilTime - .05 * a), t.translate(-n.x, -n.y), n.currentWeaponCategory === e.WeaponCategoryEnum.Secondary ? t.drawImage(e.Resources.entitiesImage, 0, 192, 65, 100, r - .1, s + .07, 1, 1.5) : o ? t.drawImage(e.Resources.entitiesImage, 0, 64, 65, 100, r - .1, s + .07, 1, 1.5) : t.drawImage(e.Resources.entitiesImage, 256, 292, 65, 100, r - .1, s + .07, 1, 1.5), t.restore(), r = n.x - 1.5, s = n.y - .5, t.translate(n.weaponOffset.x, n.weaponOffset.y), 0 === n.reloadCooldown) {
					if (t.translate(n.x, n.y), 0 === n.firingCooldown) switch (t.rotate(n.weapons[n.currentWeaponCategory] !== e.WeaponTypeEnum.Rpg ? .4 : -.4 + .1), n.weapons[n.currentWeaponCategory]) {
						case e.WeaponTypeEnum.TurboBlaster:
						case e.WeaponTypeEnum.ShotGun:
							t.translate(-.2, .1);
							break;
						case e.WeaponTypeEnum.Rifle:
							t.translate(-.2, .2);
							break;
						case e.WeaponTypeEnum.AutoRifle:
							t.translate(-.3, .2);
							break;
						case e.WeaponTypeEnum.AutoShotGun:
							t.translate(-.15, .1);
							break;
						case e.WeaponTypeEnum.Uzi:
							t.translate(-.1, .1)
					} else t.rotate(n.direction === e.DirectionEnum.Left && 0 !== n.firingAngle ? Math.PI - n.firingAngle : n.firingAngle);
					t.translate(-n.x, -n.y), 0 !== n.firingCooldown && t.translate(-n.firingRecoilTime, 0)
				} else t.translate(n.x, n.y), t.rotate(7 * -n.reloadCooldown * Math.PI), t.translate(-n.x, -n.y);
				switch (n.weapons[n.currentWeaponCategory]) {
					case e.WeaponTypeEnum.Rifle:
						t.drawImage(e.Resources.objectsImage, 192, 64, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.TurboBlaster:
						t.drawImage(e.Resources.objectsImage, 0, 512, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.ShotGun:
						t.drawImage(e.Resources.objectsImage, 0, 128, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.AutoRifle:
						t.drawImage(e.Resources.objectsImage, 320, 256, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.AutoShotGun:
						t.drawImage(e.Resources.objectsImage, 0, 384, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.Uzi:
						t.drawImage(e.Resources.objectsImage, 192, 384, 192, 64, r + 0, s - i + 0, 3, 1 - i);
						break;
					case e.WeaponTypeEnum.Rpg:
						t.drawImage(e.Resources.objectsImage, 192, 448, 192, 64, r, s + i, 3, 1 + i)
				}
			}
			t.restore()
		}, e.drawIdleEntity = function(t, n) {
			var i = 1.5 * -n.woundedCooldown,
				a = .03 * n.heartBeats[0].time,
				o = n.heartBeats[2].time,
				r = 1 === n.heartBeats[1].direction,
				s = n.x - .5,
				l = n.y - .5,
				c = l - a,
				a = 1 + a;
			switch (t.translate(n.x, n.y), t.rotate(n.angle + .1 * o - .1), t.translate(-n.x, -n.y - .07), t.save(), t.translate(.07 + .05 * o, .25), t.translate(n.x, n.y), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 321, 292, 64, 64, s, c + .38, 1, a), t.restore(), t.save(), t.translate(-.07 + .05 * o, .25), t.translate(n.x, n.y), t.scale(-1, 1), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 321, 292, 64, 64, s + .05, c + .38, 1, a), t.restore(), t.save(), t.translate(-.72, 0), t.drawImage(e.Resources.entitiesImage, 128, 292, 64, 64, s + .5, l + .32, 1, a), t.restore(), t.save(), t.translate(0, .67 - .05 * o), t.translate(n.x, n.y), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 65, 393, 64, 64, s + .25, l + .35, 1, 1), t.restore(), t.save(), t.translate(0, .67), t.drawImage(e.Resources.entitiesImage, 258, 192, 64, 64, s + .5, l + .35, 1, 1), t.restore(), t.save(), t.translate(n.x, n.y), t.rotate(.3 * i), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 384, 0, 64, 64, s + .35, c + .65, 1, a), t.restore(), t.save(), 0 !== n.woundedCooldown ? t.drawImage(e.Resources.entitiesImage, 320, 0, 64, 64, s, c + -.18, 1, a) : r ? t.drawImage(e.Resources.entitiesImage, 64, 292, 64, 64, s, c + -.18, 1, a) : t.drawImage(e.Resources.entitiesImage, 0, 292, 64, 64, s, c + -.18, 1, a), n.headStyle) {
				case e.HeadStyleEnum.Bandaged:
					t.drawImage(e.Resources.entitiesImage, 128, 0, 64, 64, s, c + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Police:
					t.drawImage(e.Resources.entitiesImage, 192, 0, 64, 64, s, c + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Tourist:
					t.drawImage(e.Resources.entitiesImage, 0, 0, 64, 64, s, c + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Bandit:
					t.drawImage(e.Resources.entitiesImage, 64, 0, 64, 64, s, c + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Mexican:
					t.drawImage(e.Resources.entitiesImage, 129, 393, 64, 64, s, c + -.18, 1, a)
			}
			t.restore()
		}, e.drawWalkingEntity = function(t, n) {
			var i = 1.5 * -n.woundedCooldown,
				a = .03 * n.heartBeats[0].time,
				o = n.heartBeats[2].time,
				r = n.heartBeats[3].time,
				s = 1 === n.heartBeats[1].direction,
				l = n.x - .5,
				c = n.y - .5,
				u = c - a,
				a = 1 + a,
				m = 1 - o;
			switch (t.translate(n.x, n.y), t.rotate(n.angle + .23 * o - .1), t.translate(-n.x, -n.y - .12 * r - .07), t.save(), t.translate(.07 + .05 * o, .25), t.translate(n.x, n.y), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 321, 292, 64, 64, l, u + .38, 1, a), t.restore(), t.save(), t.translate(-.07 + .05 * o, .25), t.translate(n.x, n.y), t.scale(-1, 1), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 321, 292, 64, 64, l + .05, u + .38, 1, a), t.restore(), t.save(), t.translate(-.72, 0), t.drawImage(e.Resources.entitiesImage, 128, 292, 64, 64, l + .5, c + .32, 1, a), t.restore(), t.save(), t.translate(-.02 + .14 * m, .67), t.translate(n.x, n.y), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 65, 393, 64, 64, l + .25, c + .35, 1, 1), t.restore(), t.save(), t.translate(-.08 + .2 * o, .67), t.translate(n.x, n.y), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 258, 192, 64, 64, l + .5, c + .35, 1, 1), t.restore(), t.save(), t.translate(n.x, n.y), t.rotate(.3 * i), t.translate(-n.x, -n.y), t.drawImage(e.Resources.entitiesImage, 384, 0, 64, 64, l + .35, u + .65, 1, a), t.restore(), t.save(), 0 !== n.woundedCooldown ? t.drawImage(e.Resources.entitiesImage, 320, 0, 64, 64, l, u + -.18, 1, a) : s ? t.drawImage(e.Resources.entitiesImage, 64, 292, 64, 64, l, u + -.18, 1, a) : t.drawImage(e.Resources.entitiesImage, 0, 292, 64, 64, l, u + -.18, 1, a), n.headStyle) {
				case e.HeadStyleEnum.Bandaged:
					t.drawImage(e.Resources.entitiesImage, 128, 0, 64, 64, l, u + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Police:
					t.drawImage(e.Resources.entitiesImage, 192, 0, 64, 64, l, u + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Tourist:
					t.drawImage(e.Resources.entitiesImage, 0, 0, 64, 64, l, u + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Bandit:
					t.drawImage(e.Resources.entitiesImage, 64, 0, 64, 64, l, u + -.18, 1, a);
					break;
				case e.HeadStyleEnum.Mexican:
					t.drawImage(e.Resources.entitiesImage, 129, 393, 64, 64, l, u + -.18, 1, a)
			}
			t.restore()
		}
	}(window.ZCJGame = window.ZCJGame || {}),
	function(e, t) {
		function n(e, t) {
			vt = {
				current: e,
				total: t
			}
		}

		function i() {
			e.loadResources([{
				type: "img",
				id: "introScreen",
				src: "assets/img/" + w + "/introscreen.png"
			}, {
				type: "img",
				id: "menuScreen",
				src: "assets/img/" + w + "/menuscreen.png"
			}, {
				type: "img",
				id: "hudnum",
				src: "assets/img/" + w + "/hudnum.png"
			}, {
				type: "img",
				id: "hud1",
				src: "assets/img/" + w + "/hud1.png"
			}, {
				type: "img",
				id: "hud2",
				src: "assets/img/" + w + "/hud2.png"
			}, {
				type: "img",
				id: "hud3",
				src: "assets/img/" + w + "/hud3.png"
			}, {
				type: "img",
				id: "creditsScreen",
				src: "assets/img/" + w + "/credits.png"
			}, {
				type: "img",
				id: "tooltips1",
				src: "assets/img/" + w + "/tooltips1.png"
			}, {
				type: "img",
				id: "tooltips5",
				src: "assets/img/" + w + "/tooltips5.png"
			}, {
				type: "img",
				id: "entities",
				src: "assets/img/" + w + "/entities.png"
			}, {
				type: "img",
				id: "background1",
				src: "assets/img/" + w + "/background1.png"
			}, {
				type: "img",
				id: "background2",
				src: "assets/img/" + w + "/background2.png"
			}, {
				type: "img",
				id: "objects",
				src: "assets/img/" + w + "/objects.png"
			}, {
				type: "img",
				id: "effects",
				src: "assets/img/" + w + "/effects.png"
			}, {
				type: "img",
				id: "backdrop11",
				src: "assets/img/" + w + "/backdrop1_1.png"
			}, {
				type: "img",
				id: "backdrop12",
				src: "assets/img/" + w + "/backdrop1_2.png"
			}, {
				type: "img",
				id: "backdrop13",
				src: "assets/img/" + w + "/backdrop1_3.png"
			}, {
				type: "img",
				id: "backdrop14",
				src: "assets/img/" + w + "/backdrop1_4.png"
			}], a, n)
		}

		function a(t) {
			for (e.Resources.introScreenImage = t.introScreen, e.Resources.menuScreenImage = t.menuScreen, e.Resources.hud2ImageNum = t.hudnum, e.Resources.hud1Image = t.hud1, e.Resources.hud2Image = t.hud2, e.Resources.hud3Image = t.hud3, e.Resources.creditsScreenImage = t.creditsScreen, e.Resources.entitiesImage = t.entities, e.Resources.tooltips1Image = t.tooltips1, e.Resources.tooltips5Image = t.tooltips5, e.Resources.backgroundImage1 = t.background1, e.Resources.backgroundImage2 = t.background2, e.Resources.backdrop1Image1 = t.backdrop11, e.Resources.backdrop1Image2 = t.backdrop12, e.Resources.backdrop1Image3 = t.backdrop13, e.Resources.backdrop1Image4 = t.backdrop14, e.Resources.objectsImage = t.objects, e.Resources.effectsImage = t.effects, lt = !1, st = e.CommandEnum.None, nt = tt = 0, it = e.DirectionEnum.None, Q = e.MenuTypeEnum.None, ct = [{
					type: e.MenuTypeEnum.Panel,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ShowStoryMode,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ShowSurvivalMode,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ShowOptions,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ShowMain,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.SelectNextPage,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.SelectPrevPage,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ShowCredits,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, {
					type: e.MenuTypeEnum.ToggleSound,
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}], at = [], t = 0; t < mt.levelProgress.length; t += 1) at.push({
				level: t + 1,
				x: 0,
				y: 0,
				status: mt.levelProgress[t]
			});
			for (ot = [], t = 0; 15 > t; t += 1) ot.push({
				x: 0,
				y: 0
			});
			rt = [{
				level: 1e3,
				x: 0,
				y: 0,
				status: e.LevelStatusEnum.Locked
			}, {
				level: 1001,
				x: 0,
				y: 0,
				status: e.LevelStatusEnum.Locked
			}], o(), Y = J = .1, I = e.GameStateEnum.GameStart, Z = e.isTrialLicense()
		}

		function o() {
			for (var t = 0; t < at.length; t += 1) 6 === at[t].level && at[t].status === e.LevelStatusEnum.Passed ? rt[0].status = e.LevelStatusEnum.Available : 13 === at[t].level && at[t].status === e.LevelStatusEnum.Passed && (rt[1].status = e.LevelStatusEnum.Available)
		}

		function r() {
			var t = (new Date).getTime(),
				n = Math.min((t - (P || t)) / 1e3, .05),
				i = n;
			if (P = t, window.requestAnimationFrame(r), F > 0 && (n *= q), D.setTransform(1, 0, 0, 1, 0, 0), I === e.GameStateEnum.GamePreLoading) e.drawLoader(D);
			else {
				I === e.GameStateEnum.GameMenu && (D.fillStyle = "rgb(129, 109, 150)"), D.clearRect(0, 0, k.width, k.height), I === e.GameStateEnum.GameMenu && D.fillRect(0, 0, k.width, k.height);
				var a, s, l, c = n;
				if (e.isTrialLicense() !== Z && (Z = e.isTrialLicense(), e.showMainScreen()), gt > 0 && (gt -= c, 0 > gt && (gt = 0)), ft > 0 && (ft -= c, 0 > ft && (ft = 0)), !L)
					for (a = 0, s = xt.length; s > a; a += 1) l = xt[a], 0 === l.direction && l.time <= l.maxTime ? (l.time = Math.min(l.time + c * l.speed1, l.maxTime), l.time === l.maxTime && (l.direction = 1)) : 1 === l.direction && 0 <= l.time && (l.time = Math.max(l.time - c * l.speed2, 0), 0 === l.time && (l.direction = 0));
				F > 0 && (F -= i, 0 > F && (F = 0));
				var u, g, f, y, b, v, x = e.screenToHud({
					x: k.width,
					y: k.height
				});
				if (I === e.GameStateEnum.GameMenu)
					for (u = -(Q === e.MenuTypeEnum.None || Q === e.MenuTypeEnum.ShowMain ? .3 : 2.1), V > K - .5 && (u -= 2 * (.5 - (K - V))), b = 0, v = ct.length; v > b; b += 1) switch (ct[b].x = 0, ct[b].y = 0, ct[b].width = 0, ct[b].height = 0, Q !== e.MenuTypeEnum.None && Q !== e.MenuTypeEnum.ShowMain && ct[b].type === e.MenuTypeEnum.ShowMain ? (ct[b].x = 7, ct[b].y = u + 2.85, ct[b].width = 2, ct[b].height = .7) : ct[b].type === e.MenuTypeEnum.ShowCredits ? (ct[b].x = x.x - 1.2, ct[b].y = .2, ct[b].width = 1, ct[b].height = 1) : ct[b].type === e.MenuTypeEnum.ToggleSound ? (ct[b].x = x.x - 1.2, ct[b].y = 1.2, ct[b].width = 1, ct[b].height = 1) : ct[b].type === e.MenuTypeEnum.Panel && (ct[b].x = 5, ct[b].y = u), Q) {
							case e.MenuTypeEnum.None:
							case e.MenuTypeEnum.ShowMain:
								switch (ct[b].type) {
									case e.MenuTypeEnum.ShowStoryMode:
										ct[b].x = 5, ct[b].y = u + .6, ct[b].width = 4, ct[b].height = .95;
										break;
									case e.MenuTypeEnum.ShowSurvivalMode:
										ct[b].x = 5, ct[b].y = u + 1.85, ct[b].width = 4, ct[b].height = .95;
										break;
									case e.MenuTypeEnum.ShowOptions:
										ct[b].x = 2.4, ct[b].y = V > K - .5 ? u + 5 + 6 * (.5 - (K - V)) : u + 5, ct[b].width = 4, ct[b].height = 1.2
								}
								break;
							case e.MenuTypeEnum.ShowStoryMode:
								switch (ct[b].type) {
									case e.MenuTypeEnum.ShowStoryMode:
										ct[b].x = 5, ct[b].y = u + 2.1, ct[b].width = 4, ct[b].height = .5;
										break;
									case e.MenuTypeEnum.SelectPrevPage:
										ct[b].x = 5, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7;
										break;
									case e.MenuTypeEnum.SelectNextPage:
										ct[b].x = 8, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7
								}
								break;
							case e.MenuTypeEnum.ShowSurvivalMode:
								switch (ct[b].type) {
									case e.MenuTypeEnum.ShowSurvivalMode:
										ct[b].x = 5, ct[b].y = u + 2.1, ct[b].width = 4, ct[b].height = .5;
										break;
									case e.MenuTypeEnum.SelectPrevPage:
										ct[b].x = 5, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7;
										break;
									case e.MenuTypeEnum.SelectNextPage:
										ct[b].x = 8, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7
								}
								break;
							case e.MenuTypeEnum.ShowOptions:
								switch (ct[b].type) {
									case e.MenuTypeEnum.ShowOptions:
										ct[b].x = 5, ct[b].y = u + 2.1, ct[b].width = 4, ct[b].height = .5;
										break;
									case e.MenuTypeEnum.SelectPrevPage:
										ct[b].x = 5, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7;
										break;
									case e.MenuTypeEnum.SelectNextPage:
										ct[b].x = 8, ct[b].y = u + 3.8, ct[b].width = 1, ct[b].height = .7
								}
						} else if (I === e.GameStateEnum.GameRun || I === e.GameStateEnum.GameWon)
							for (b = 0; b < ut.length; b += 1) {
								var E = ut[b];
								if (E.type === e.CommandEnum.SelectStackObject || E.type === e.CommandEnum.ToggleAdrenaline) {
									var T = 5;
									E.type === e.CommandEnum.ToggleAdrenaline && (E.tx = 0 === j.survivalRageTime ? x.x / 2 - .5 : 1.5, E.ty = 0 === j.survivalRageTime ? x.y - 2 : .5, T = 9), (E.x !== E.tx || E.y !== E.ty) && (g = e.distance(E.x, E.y, E.tx, E.ty), g > .5 ? (f = (E.tx - E.x) / g, y = (E.ty - E.y) / g, E.x += i * T * f, E.y += i * T * y) : (E.x = E.tx, E.y = E.ty))
								} else(E.type === e.CommandEnum.AssignWeapon || E.type === e.CommandEnum.Ready || E.type === e.CommandEnum.CrateSelectionDone || E.type === e.CommandEnum.RewardAccepted) && (E.type === e.CommandEnum.AssignWeapon ? E.enabled = j.primaryWeaponAssignmentDone || E.weaponCategory !== e.WeaponCategoryEnum.Primary ? j.primaryWeaponAssignmentDone && !j.secondaryWeaponAssignmentDone && E.weaponCategory === e.WeaponCategoryEnum.Secondary ? !0 : !1 : !0 : E.type === e.CommandEnum.CrateSelectionDone ? j.newItem === e.StackObjectTypeEnum.None && (E.enabled = !1) : E.type === e.CommandEnum.RewardAccepted ? j.rewardItem.crate === e.StackObjectTypeEnum.None && j.rewardItem.weapon === e.WeaponTypeEnum.None && (E.enabled = !1) : j.primaryWeaponAssignmentDone && j.secondaryWeaponAssignmentDone && (E.enabled = !1), !E.enabled || E.x === E.tx && E.y === E.ty || (g = e.distance(E.x, E.y, E.tx, E.ty), g > .5 ? (f = (E.tx - E.x) / g, y = (E.ty - E.y) / g, E.x += 9 * i * f, E.y += 9 * i * y) : (E.x = E.tx, E.y = E.ty)))
							}
						if (I !== e.GameStateEnum.GameStart)
							if (I === e.GameStateEnum.GameIntro) {
								var w, C, S, R = 0,
									J = !1,
									tt = .47;
								if (Y > 0 && (Y -= i, 3 > Y && !1 === ht && (ht = !0), 0 >= Y))
									for (Y = 0, V = K = 3, I = e.GameStateEnum.GameMenu, S = e.screenToHud({
											x: k.width,
											y: k.height
										}), et = [], w = 0; 3 > w; w += 1) {
										switch (C = new e.ZombieEntity(S.x / 2 - 4 + R, S.y / 2 - Math.random(), .4), C.direction = J ? e.DirectionEnum.Left : e.DirectionEnum.Right, C.scaleFactor = tt, C.baseSpeed = tt / 2, C.speed = C.baseSpeed, C.drawHitPoints = !1, w) {
											case 0:
												C.headStyle = e.HeadStyleEnum.Bandaged;
												break;
											case 1:
												C.headStyle = e.HeadStyleEnum.Police;
												break;
											case 2:
												C.headStyle = e.HeadStyleEnum.Tourist
										}
										et.push(C), R += .5, J = !J, tt += .21
									}
							} else if (I === e.GameStateEnum.GameMenu) {
					var it, ot, rt, st, lt, dt, pt;
					for (V > 0 && (V -= i, 0 > V && (V = 0)), nt > 0 && (nt -= i, 0 > nt && (nt = 0)), dt = e.screenToHud({
							x: k.width,
							y: k.height
						}), rt = dt.x / 2 - 4, st = dt.x / 2 - 2, lt = dt.y / 2 + 1.7, it = 0, ot = et.length; ot > it; it += 1) pt = et[it], pt.update(i), 0 < pt.moveCooldown && .5 > pt.moveCooldown && (pt.moveCooldown = 0, pt.direction = pt.direction === e.DirectionEnum.Left ? e.DirectionEnum.Right : e.DirectionEnum.Left), pt.x > st ? (pt.moveCooldown = 1.5, pt.x = st) : pt.x < rt && (pt.moveCooldown = 1.5, pt.x = rt), pt.y >= lt - pt.radius && (pt.y = lt - pt.radius, pt.vy = 0)
				} else if (I === e.GameStateEnum.GameRun || I === e.GameStateEnum.GameWon || I === e.GameStateEnum.GameLost) {
					if (!L) {
						j.update(c), e.SoundManager.update(c), G.update(c, j);
						var yt, bt, vt, Et, Tt, wt, Ct, St, kt = [];
						for (yt = 0; yt < j.effects.length;)
							if (St = j.effects[yt], Ct = !1, St.update(c), 0 === St.selfDestroyTime) j.effects.splice(yt, 1);
							else {
								if (St.y > j.maxY && (St.y = j.maxY, .5 < St.vy && (St.vy = -St.vy * St.mass)), 0 === St.activationCooldown && (1 < St.selfDestroyTime || -1 === St.selfDestroyTime))
									if (St.y === j.maxY) switch (St.type) {
										case e.EffectTypeEnum.Warhead:
										case e.EffectTypeEnum.Bullet:
										case e.EffectTypeEnum.MultiBullet:
											j.effects.splice(yt, 1), Ct = !0
									} else {
										switch (St.type) {
											case e.EffectTypeEnum.Warhead:
											case e.EffectTypeEnum.Bullet:
											case e.EffectTypeEnum.MultiBullet:
												for (bt = 0; bt < j.stacks.length; ++bt) {
													for (Et = j.stacks[bt], vt = 0; vt < Et.objects.length; ++vt)
														if (wt = Et.objects[vt], wt.type !== e.StackObjectTypeEnum.TNTCrate && wt.type !== e.StackObjectTypeEnum.MetalCrate && wt.type !== e.StackObjectTypeEnum.WoodCrate && wt.type !== e.StackObjectTypeEnum.MountedCrate && wt.type !== e.StackObjectTypeEnum.SpikeCrate && Et.direction !== e.DirectionEnum.None && e.rectIntersect(St.x - St.radius, St.y - St.radius, St.x + St.radius, St.y + St.radius, Et.x - wt.radius, wt.y - wt.radius, Et.x + wt.radius, wt.y + wt.radius)) {
															1 > Et.vx && -1 < Et.vx && (Et.direction === e.DirectionEnum.Left && Et.x > j.minX || Et.direction === e.DirectionEnum.Right && Et.x < j.maxX) && (Et.vx += 0 < St.vx ? 1.25 : -1.25), j.effects.push(new e.ImpactEffect(St.x + (0 < St.vx ? .12 : -.12), St.y, .15)), j.effects.splice(yt, 1), Ct = !0;
															break
														}
													if (Ct) break
												}
										}
										if (!Ct)
											for (bt = 0; bt < j.entities.length; ++bt)
												if (Tt = j.entities[bt], 0 < Tt.hitPoints && e.rectIntersect(St.x - St.radius, St.y - St.radius, St.x + St.radius, St.y + St.radius, Tt.x - Tt.radius, Tt.y - Tt.radius, Tt.x + Tt.radius, Tt.y + Tt.radius)) switch (St.type) {
													case e.EffectTypeEnum.Warhead:
													case e.EffectTypeEnum.Bullet:
													case e.EffectTypeEnum.MultiBullet:
														var Dt = Math.random() < j.criticalChance ? !0 : !1;
														if (e.EffectTypeEnum.Warhead === St.type) Tt.hitPoints -= 5, --Tt.vy, Tt.vx = Tt.direction === e.DirectionEnum.Left ? 4 + Math.random() : -(4 + Math.random()), Tt.bouncing = !0, St.count++;
														else if (Dt) {
															Tt.hitPoints -= 2 * St.value;
															var Lt = new e.ProjectileEffect(Tt.x, Tt.y - 1, .5, 0, 0, -3, e.EffectTypeEnum.Critical, 0);
															Lt.selfDestroyTime = 1, Lt.startFadeTime = .7, kt.push(Lt), e.SoundManager.playCritSound()
														} else Tt.hitPoints -= St.value;
														Tt.woundedCooldown = .2, 0 >= Tt.hitPoints && St.type === e.EffectTypeEnum.MultiBullet && (Tt.bonus = !0), j.effects.push(new e.BloodSplatterEffect(St.x + (0 < St.vx ? .12 : -.12), St.y, .15)), (e.EffectTypeEnum.Warhead !== St.type || 2 === St.count) && (j.effects.splice(yt, 1), Ct = !0)
												}
									}
									Ct || (yt += 1)
							}
						for (yt = 0; yt < kt.length; yt += 1) j.effects.push(kt[yt]);
						for (yt = 0; yt < j.backgroundEffects.length; yt += 1) St = j.backgroundEffects[yt], St.update(c), 0 === St.selfDestroyTime && j.backgroundEffects.splice(yt, 1);
						for (var Rt, It = j.mountedCrateCount = 0; It < j.stacks.length;) {
							var Pt = j.stacks[It];
							if (0 === Pt.objects.length) j.stacks.splice(It, 1);
							else {
								if (0 < Pt.cooldown && (Pt.cooldown -= c, 0 > Pt.cooldown && (Pt.cooldown = 0)), 0 < Pt.vx ? (Pt.vx -= 6 * c, 0 > Pt.vx && (Pt.vx = 0)) : 0 > Pt.vx && (Pt.vx += 6 * c, 0 < Pt.vx && (Pt.vx = 0)), Pt.x += Pt.vx * c, 0 !== Pt.vx)
									for (var jt = Pt, Mt = 0; Mt < j.stacks.length; ++Mt) {
										var Ot = j.stacks[Mt];
										if (jt !== Ot && 0 < jt.objects.length && 0 < Ot.objects.length && .9 > jt.cooldown && .8 > Ot.cooldown && jt.direction !== e.DirectionEnum.None && Ot.direction !== e.DirectionEnum.None) {
											var Wt = {
													x: jt.x,
													y: jt.objects[0].y
												},
												Xt = {
													x: Ot.x,
													y: Ot.objects[0].y
												},
												_t = Wt.x - Xt.x,
												At = Wt.y - Xt.y,
												Nt = e.vectorDotProduct(_t, At, _t, At);
											if (!(Nt > .4 * .4)) {
												var zt = {
														x: jt.vx,
														y: jt.objects[0].vy
													},
													Ht = {
														x: Ot.vx,
														y: Ot.objects[0].vy
													},
													Ut = Math.sqrt(Nt),
													Ft = e.vectorDivide(_t, At, Ut),
													qt = e.vectorMultiply(Ft.x, Ft.y, .5 * (.4 - Ut)),
													Wt = e.vectorAdd(Wt.x, Wt.y, qt.x, qt.y),
													Xt = e.vectorSubstract(Xt.x, Xt.y, qt.x, qt.y);
												jt.x = Wt.x, Ot.x = Xt.x;
												var Ft = e.vectorSubstract(Wt.x, Wt.y, Xt.x, Xt.y),
													Ft = e.vectorNormalize(Ft.x, Ft.y),
													Bt = e.vectorDotProduct(zt.x, zt.y, Ft.x, Ft.y),
													Gt = e.vectorDotProduct(Ht.x, Ht.y, Ft.x, Ft.y),
													Zt = 2 * (Bt - Gt) / 2,
													$t = e.vectorMultiply(Ft.x, Ft.y, 1 * Zt),
													zt = e.vectorSubstract(zt.x, zt.y, $t.x, $t.y);
												jt.vx = zt.x, jt.objects[0].vy = zt.y;
												var Yt = e.vectorMultiply(Ft.x, Ft.y, 1 * Zt),
													Ht = e.vectorAdd(Ht.x, Ht.y, Yt.x, Yt.y);
												Ot.vx = Ht.x, Ot.objects[0].vy = Ht.y
											}
										}
									}
								Pt.direction !== e.DirectionEnum.None && (Pt.direction === e.DirectionEnum.Right && Pt.x < Pt.limitX || Pt.direction === e.DirectionEnum.Left && Pt.x > Pt.limitX) && (Pt.x = Pt.limitX);
								for (var Jt = j.maxY, Vt = 0; Vt < Pt.objects.length;) {
									var Kt = Pt.objects[Vt];
									if (0 >= Kt.strength) {
										if (e.SoundManager.playHumanFailed(), Kt.type === e.StackObjectTypeEnum.TNTCrate) {
											0 === z && 0 === F && (H = .5 < Math.random() ? e.DirectionEnum.Left : e.DirectionEnum.Right, z = .5, B = !0, xt[0].time = 0, xt[0].direction = 0, j.leftPlayer.vy = -3.5, j.rightPlayer.vy = -3.5);
											for (var Qt = !1, en = 0, tn = 0; tn < j.entities.length; ++tn) {
												var nn = j.entities[tn];
												if (4 > e.distance(nn.x, nn.y, Pt.x, Kt.y) && (nn.hitPoints = Qt ? .7 * nn.hitPoints : 0, en++), 2 === en) Qt = !0;
												else if (4 === en) break
											}
											for (e.SoundManager.playBlastSound(), Rt = 0; 2 > Rt; ++Rt) {
												var an = .1 + .5 * Math.random(),
													on = .5 < Math.random() ? an : -an;
												j.effects.push(new e.BigSmokeEffect(Pt.x + on, Kt.y + on, .15))
											}
											for (Rt = 0; 2 > Rt; ++Rt) j.effects.push(new e.ExplosionEffect(Pt.x, Kt.y, .15))
										} else
											for (Rt = 0; 3 > Rt; ++Rt) j.effects.push(new e.SmallSmokeEffect(Pt.x, Kt.y, .15));
										Pt.objects.splice(Vt, 1)
									} else {
										if (Kt.update(c), Kt.type === e.StackObjectTypeEnum.MountedCrate && j.mountedCrateCount++, Kt.type === e.StackObjectTypeEnum.MountedCrate && 0 === Kt.firingCooldown) {
											var rn = h(Pt.x, Kt.y, Pt.direction);
											if (null !== rn.entity && 3 > rn.distance && 0 < rn.distance) {
												var sn = Pt.x + (Pt.direction === e.DirectionEnum.Right ? .3 : -.3),
													ln = Kt.y + -.1,
													cn = e.vectorAngle(sn, ln, rn.entity.x, rn.entity.y),
													un = e.vectorRotate(.3, Pt.direction === e.DirectionEnum.Right ? -.2 : .1, cn),
													sn = sn + un.x,
													ln = ln + un.y,
													mn = new e.Effect(sn, ln, .2);
												mn.gravity = 0, mn.selfDestroyTime = 2, mn.type = e.EffectTypeEnum.Bullet, mn.value = 2.5, mn.angle = e.vectorAngle(mn.x, mn.y, rn.entity.x, rn.entity.y), Kt.firingAngle = mn.angle, Kt.firingRecoilTime = .2;
												var dn = (rn.entity.y - ln) / rn.distance;
												mn.vx = (rn.entity.x - sn) / rn.distance * 9, mn.vy = 9 * dn, j.effects.push(mn), j.effects.push(new e.SmallSmokeEffect(sn, ln, .15)), j.effects.push(new e.SmallSmokeEffect(sn - .1, ln, .15)), j.effects.push(new e.SmallSmokeEffect(sn + .1, ln, .15)), Kt.firingCooldown = .3, e.SoundManager.playGunSound()
											}
										}
										Kt.y >= Jt - Kt.radius && (Kt.y = Jt - Kt.radius, Kt.vy = .2 < Kt.vy ? .3 * -Kt.vy : 0), Jt = Kt.y - .36, ++Vt
									}
								}
								It += 1
							}
						}
						m(j.leftPlayer, c), m(j.rightPlayer, c);
						var pn;
						if (I !== e.GameStateEnum.GameLost) {
							var hn, gn, fn, yn;
							for (hn = 0; hn < j.entities.length;) {
								var bn = j.entities[hn];
								if (bn.isDead) {
									switch (d(bn.x, bn.y, bn.direction), j.killCount++, 1e3 === j.currentLevel && (j.showHighScoreEffect && 0 < j.killCount && j.killCount > mt.killCountHighScore && (pn = new e.ProjectileEffect(j.leftPlayer.x + (j.rightPlayer.x - j.leftPlayer.x) / 2, j.maxY - 1, .5, 0, 0, -3, e.EffectTypeEnum.HighScore, 0), pn.selfDestroyTime = 1.5, pn.startFadeTime = .7, j.effects.push(pn), e.SoundManager.playHighScoreSound(), j.showHighScoreEffect = !1), mt.killCountHighScore = Math.max(mt.killCountHighScore, j.killCount), 0 === j.killCount % j.checkpointFrequency && (pn = new e.ProjectileEffect(j.leftPlayer.x + (j.rightPlayer.x - j.leftPlayer.x) / 2, j.maxY - 1, .5, 0, 0, -3, e.EffectTypeEnum.Checkpoint, 0), pn.selfDestroyTime = 1.5, pn.startFadeTime = .7, j.effects.push(pn), e.SoundManager.playCheckpointSound())), j.survivalPoints += bn.bonus ? 15 : 10, p(bn.bonus ? 15 : 10, bn.x, bn.y - .4), j.currentLevel) {
										case 1:
											j.currentLevelStage === e.LevelStageEnum.TutorialSecondWave && (j.currentLevelStage = e.LevelStageEnum.TutorialFirstKill, j.tutorialCooldown = .35)
									}
									j.entities.splice(hn, 1)
								} else {
									bn.update(c), fn = j.maxY, bn.y >= fn - bn.radius && (bn.y = fn - bn.radius, bn.vy = 0);
									var vn = e.screenToScene({
											x: 0,
											y: 0
										}),
										xn = e.screenToScene({
											x: e.getCanvasWidth(),
											y: 0
										});
									if (bn.offScreenDirection = bn.x >= vn.x && bn.x <= xn.x ? e.DirectionEnum.None : bn.x < vn.x ? e.DirectionEnum.Left : e.DirectionEnum.Right, bn.direction !== e.DirectionEnum.None) {
										var En = null,
											Tn = j.maxX - j.minX,
											wn = 0;
										for (gn = 0; gn < j.stacks.length; ++gn) {
											var Cn = j.stacks[gn];
											(bn.direction === e.DirectionEnum.Left && Cn.x < bn.x || bn.direction === e.DirectionEnum.Right && Cn.x > bn.x) && (wn = bn.direction === e.DirectionEnum.Left ? bn.x - Cn.x : Cn.x - bn.x, (null === En || Tn > wn) && 0 < Cn.objects.length && (Tn = wn, En = Cn))
										}
										if (!bn.bouncing && null !== En && 0 === bn.moveCooldown && Tn < 1.5 + bn.radius) {
											if (bn.speed = 14 * bn.baseSpeed, bn.rotationSpeed = 5, !bn.canApplyDamage && Tn >= 1 && (bn.canApplyDamage = !0, e.SoundManager.playZombieAttackSound()), Tn < bn.radius + .5) {
												switch (bn.rotationSpeed = 0, bn.vy -= 2, bn.vx = bn.direction === e.DirectionEnum.Left ? 4.2 + Math.random() : -4.2 - Math.random(), bn.bouncing = !0, 0 === z && En.direction === e.DirectionEnum.None && 0 === z && 0 === F && (H = .5 < Math.random() ? e.DirectionEnum.Left : e.DirectionEnum.Right, z = .5, B = !1), En.objects[0].type) {
													case e.StackObjectTypeEnum.WoodCrate:
													case e.StackObjectTypeEnum.TNTCrate:
													case e.StackObjectTypeEnum.MountedCrate:
														bn.hitPoints -= 3 * bn.armorCoefficient;
														break;
													case e.StackObjectTypeEnum.SpikeCrate:
														bn.hitPoints -= 5;
														break;
													case e.StackObjectTypeEnum.MetalCrate:
														bn.hitPoints -= 5 * bn.armorCoefficient
												}
												if (En.direction !== e.DirectionEnum.None && (En.vx += bn.direction === e.DirectionEnum.Left ? -1.5 : 1.5), bn.canApplyDamage) {
													for (bn.canApplyDamage = !1, 0 === En.cooldown && (En.objects[0].strength -= 1 * bn.damageFactor, En.objects[0].type === e.StackObjectTypeEnum.WoodCrate && (j.noScratch = !1)), 0 === En.cooldown && -.5 <= En.objects[0].vy && .5 >= En.objects[0].vy && (En.objects[0].vy = -1.5), yn = 1; yn < En.objects.length; ++yn) 0 === En.objects[yn].vy && (En.objects[yn].vy = -2.2);
													En === j.leftPlayer.stack && 0 === j.leftPlayer.vy ? j.leftPlayer.vy = -3.5 : En === j.rightPlayer.stack && 0 === j.rightPlayer.vy && (j.rightPlayer.vy = -3.5)
												}
											}
										} else null !== En && Tn < bn.radius + 1 && (bn.x = bn.direction === e.DirectionEnum.Left ? En.x + (bn.radius + 1) : En.x - (bn.radius + 1)), bn.speed = bn.baseSpeed, bn.rotationSpeed = 0, bn.canApplyDamage = !1;
										bn.bouncing && (bn.woundedCooldown = .1), bn.direction === e.DirectionEnum.Right && bn.angle > e.toRadians(55) ? bn.angle = e.toRadians(55) : bn.direction === e.DirectionEnum.Left && bn.angle > e.toRadians(55) && (bn.angle = e.toRadians(55))
									}
									if (bn.x < j.minX && bn.direction === e.DirectionEnum.Left ? bn.direction = e.DirectionEnum.Right : bn.x > j.maxX && bn.direction === e.DirectionEnum.Right && (bn.direction = e.DirectionEnum.Left), (e.rectIntersect(j.leftPlayer.x - j.leftPlayer.radius, j.leftPlayer.y - j.leftPlayer.radius, j.leftPlayer.x + j.leftPlayer.radius, j.leftPlayer.y + j.leftPlayer.radius, bn.x - bn.radius, bn.y - bn.radius, bn.x + bn.radius, bn.y + bn.radius) || e.rectIntersect(j.rightPlayer.x - j.rightPlayer.radius, j.rightPlayer.y - j.rightPlayer.radius, j.rightPlayer.x + j.rightPlayer.radius, j.rightPlayer.y + j.rightPlayer.radius, bn.x - bn.radius, bn.y - bn.radius, bn.x + bn.radius, bn.y + bn.radius)) && I !== e.GameStateEnum.GameLost) {
										for (e.SoundManager.playHumanDie(), I = e.GameStateEnum.GameLost, j.levelEndCooldown = .3, j.levelEndPauseCooldown = 1, bn.direction === e.DirectionEnum.Right ? (j.leftPlayer.isDead = !0, j.leftPlayer.firingCooldown = 0, j.leftPlayer.vy = -5.5, j.leftPlayer.vx = 5) : (j.rightPlayer.isDead = !0, j.rightPlayer.firingCooldown = 0, j.rightPlayer.vy = -5.5, j.rightPlayer.vx = -5, j.stacks = []), ut = [], yn = 0; yn < j.entities.length; yn += 1) j.entities[yn].drawHitPoints = !1;
										e.saveData()
									}
									hn += 1
								}
							}
						}
						var Sn = !1;
						if (I !== e.GameStateEnum.GameWon && I !== e.GameStateEnum.GameLost) switch (j.currentLevel) {
							case 1:
								Sn = 0 === j.entities.length && j.currentLevelStage === e.LevelStageEnum.None;
								break;
							case 2:
								Sn = 8 === G.phase && 0 === j.entities.length;
								break;
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
							case 8:
							case 9:
							case 10:
							case 11:
							case 12:
							case 13:
							case 14:
							case 15:
							case 16:
							case 17:
							case 18:
							case 19:
							case 20:
								Sn = 9 === G.phase && 0 === j.entities.length;
								break;
							case 1e3:
							case 1001:
								Sn = !1;
								break;
							default:
								Sn = !1
						}
						if (Sn) {
							e.SoundManager.playVictory(), F = 3, I = e.GameStateEnum.GameWon, j.leftPlayer.vy = -3, j.rightPlayer.vy = -3, z = 0, d(j.leftPlayer.x - 2, j.maxY - 1, e.DirectionEnum.Left), d(j.rightPlayer.x + 2, j.maxY - 1, e.DirectionEnum.Right), ut = [];
							var kn, Dn, Ln = j.currentLevel,
								Rn = at.length,
								In = 0;
							for (Dn = 0; Rn > Dn; Dn += 1) kn = at[Dn], Ln === kn.level && (kn.status = e.LevelStatusEnum.Passed, mt.levelProgress[Dn] = kn.status, In = kn.level + 1), In === kn.level && kn.status === e.LevelStatusEnum.Locked && 20 >= kn.level && (kn.status = e.LevelStatusEnum.Available, mt.levelProgress[Dn] = kn.status);
							o(), e.saveData()/*, ih5game.levelUp({
								level: Ln
							})*/
						}
						if (I === e.GameStateEnum.GameRun) {
							var Pn = e.screenToHud({
								x: k.width,
								y: k.height
							});
							if (j.newItem !== e.StackObjectTypeEnum.None) _ = .8, N = {
								x: j.minX + (j.maxX - j.minX) / 2,
								y: j.maxY + .5
							};
							else if (j.secondaryWeaponAssignmentDone && j.primaryWeaponAssignmentDone)
								if (0 < j.survivalRageTime ? (j.rightPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Secondary && (j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary, j.rightPlayer.reloadCooldown = .3, e.SoundManager.playReloadSound()), j.leftPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Secondary && (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary, j.leftPlayer.reloadCooldown = .3, e.SoundManager.playReloadSound())) : (j.rightPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Primary && (j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary, j.rightPlayer.reloadCooldown = .3, e.SoundManager.playReloadSound()), j.leftPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Primary && (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary, j.leftPlayer.reloadCooldown = .3, e.SoundManager.playReloadSound())), j.currentLevelStage === e.LevelStageEnum.None) 0 < j.levelStartCooldown ? (_ = .73, N = {
									x: j.minX + (j.maxX - j.minX) / 2,
									y: j.maxY + 1
								}) : j.leftPlayer.direction === e.DirectionEnum.Right && j.rightPlayer.direction === e.DirectionEnum.Right ? (_ = .8, N = {
									x: j.minX + (j.maxX - j.minX) / 2 + 1.5,
									y: j.maxY - .9
								}) : j.leftPlayer.direction === e.DirectionEnum.Left && j.rightPlayer.direction === e.DirectionEnum.Left ? (_ = .8, N = {
									x: j.minX + (j.maxX - j.minX) / 2 - 1.5,
									y: j.maxY - .9
								}) : (_ = .73, N = {
									x: j.minX + (j.maxX - j.minX) / 2,
									y: j.maxY - .9
								});
								else switch (j.currentLevel) {
									case 1:
										_ = .8, j.currentLevelStage === e.LevelStageEnum.TutorialZombiesComing && 1.5 > j.tutorialCooldown || j.currentLevelStage === e.LevelStageEnum.TutorialReinforceDefenses ? 1 === ut.length && (ut.push({
											selected: !1,
											enabled: !0,
											type: e.CommandEnum.ShowStackObjects,
											x: Pn.x / 2 - .5,
											y: Pn.y - 2,
											size: .95,
											direction: e.DirectionEnum.Left
										}), ut.push({
											selected: !1,
											enabled: !1,
											type: e.CommandEnum.SelectStackObject,
											x: 0,
											y: Pn.y,
											tx: 0,
											ty: Pn.y,
											size: .95,
											stackObjectType: e.StackObjectTypeEnum.WoodCrate,
											direction: e.DirectionEnum.Left
										})) : j.currentLevelStage === e.LevelStageEnum.TutorialTapToContinue ? ut = [] : j.currentLevelStage === e.LevelStageEnum.TutorialFirstWave ? ut = [] : j.currentLevelStage === e.LevelStageEnum.TutorialFirstWaveDone ? ut = [] : j.currentLevelStage === e.LevelStageEnum.TutorialMoreZombiesComing || j.currentLevelStage === e.LevelStageEnum.TutorialSecondWaveDone ? ut = [] : j.currentLevelStage !== e.LevelStageEnum.TutorialFirstKill && j.currentLevelStage !== e.LevelStageEnum.TutorialSelectSurvivalRage || 0 !== j.tutorialCooldown || (L = !0);
										for (var jn = !1, Mn = 0; Mn < ut.length; ++Mn)
											if (ut[Mn].type === e.CommandEnum.Menu) {
												jn = !0;
												break
											}!1 === jn && ut.push({
											selected: !1,
											enabled: !0,
											type: e.CommandEnum.Menu,
											x: Pn.x - 1,
											y: .1,
											size: .95
										}), j.currentLevelStage === e.LevelStageEnum.TutorialStart ? N = {
											x: j.minX + (j.maxX - j.minX) / 2,
											y: j.maxY - .9
										} : j.currentLevelStage === e.LevelStageEnum.TutorialMoreZombiesComing && 1 < j.tutorialCooldown && 4 > j.tutorialCooldown ? N = {
											x: j.minX + (j.maxX - j.minX) / 2 + 9,
											y: j.maxY - .9
										} : j.currentLevelStage === e.LevelStageEnum.TutorialZombiesComing && 1.5 < j.tutorialCooldown ? N = {
											x: j.minX + (j.maxX - j.minX) / 2 - 9,
											y: j.maxY - .9
										} : j.currentLevelStage === e.LevelStageEnum.TutorialSecondWave || j.currentLevelStage === e.LevelStageEnum.TutorialSecondWaveDone || j.currentLevelStage === e.LevelStageEnum.TutorialHelpingHand || j.currentLevelStage === e.LevelStageEnum.TutorialFirstKill || j.currentLevelStage === e.LevelStageEnum.TutorialSelectSurvivalRage || j.currentLevelStage === e.LevelStageEnum.TutorialFirstWaveFinishJob ? N = {
											x: j.minX + (j.maxX - j.minX) / 2 + 1.5,
											y: j.maxY - .9
										} : j.currentLevelStage === e.LevelStageEnum.TutorialTeamWork || j.currentLevelStage === e.LevelStageEnum.TutorialThirdWave || j.currentLevelStage === e.LevelStageEnum.TutorialTeamCamera || j.currentLevelStage === e.LevelStageEnum.TutorialTeamDefenses ? j.leftPlayer.direction === e.DirectionEnum.Right && j.rightPlayer.direction === e.DirectionEnum.Right ? (_ = .8, N = {
											x: j.minX + (j.maxX - j.minX) / 2 + 1.5,
											y: j.maxY - .9
										}) : j.leftPlayer.direction === e.DirectionEnum.Left && j.rightPlayer.direction === e.DirectionEnum.Left ? (_ = .8, N = {
											x: j.minX + (j.maxX - j.minX) / 2 - 1.5,
											y: j.maxY - .9
										}) : (_ = .73, N = {
											x: j.minX + (j.maxX - j.minX) / 2,
											y: j.maxY - .9
										}) : N = {
											x: j.minX + (j.maxX - j.minX) / 2 - 1.5,
											y: j.maxY - .9
										}
								} else 1 === j.rightPlayer.targetScaleFactor && 1 === j.leftPlayer.targetScaleFactor ? (_ = .8, N = {
									x: j.minX + (j.maxX - j.minX) / 2,
									y: j.maxY + .5
								}) : j.rightPlayer.targetScaleFactor > j.leftPlayer.targetScaleFactor ? (_ = .73, N = {
									x: j.minX + (j.maxX - j.minX) / 2 + .7,
									y: j.maxY + .5
								}) : j.rightPlayer.targetScaleFactor < j.leftPlayer.targetScaleFactor && (_ = .73, N = {
									x: j.minX + (j.maxX - j.minX) / 2 - .7,
									y: j.maxY + .5
								})
						}
					}
					if (I === e.GameStateEnum.GameWon) {
						var On, Wn, Xn;
						j.entities = [], j.leftPlayer.buildData.cooldown = 0, j.rightPlayer.buildData.cooldown = 0, j.leftPlayer.reloadCooldown = 0, j.rightPlayer.reloadCooldown = 0, j.leftPlayer.firingCooldown = 0, j.rightPlayer.firingCooldown = 0, F > 0 ? (q = .07, A = e.toRadians(j.leftPlayer.stack.objects.length < j.rightPlayer.stack.objects.length ? 20 : -20), _ = 1.5, U = .02, On = Math.max(j.leftPlayer.stack.objects.length, j.rightPlayer.stack.objects.length), N = {
							x: j.minX + (j.maxX - j.minX) / 2,
							y: j.maxY - 1.7 * On
						}) : (!1 !== j.rewardItem.won || j.rewardItem.crate === e.StackObjectTypeEnum.None && j.rewardItem.weapon === e.WeaponTypeEnum.None ? j.rewardItem.crate === e.StackObjectTypeEnum.None && j.rewardItem.weapon === e.WeaponTypeEnum.None && (Wn = e.screenToHud({
							x: k.width,
							y: k.height
						}), ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: Wn.x / 2 - 1.5,
							y: Wn.y / 2 - .2,
							size: .95
						}), ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.NextLevel,
							x: Wn.x / 2 + .5,
							y: Wn.y / 2 - .2,
							size: .95
						})) : (e.SoundManager.playAward(), j.rewardItem.won = !0, Wn = e.screenToHud({
							x: k.width,
							y: k.height
						}), Xn = Wn.x / 2 - .5, ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.RewardAccepted,
							x: Xn,
							y: Wn.y + 1,
							tx: Xn,
							ty: Wn.y - 2,
							size: 1
						}), ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: Wn.x / 2 - 1.5,
							y: Wn.y / 2 + 1.1,
							size: .95
						}), ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.NextLevel,
							x: Wn.x / 2 + .5,
							y: Wn.y / 2 + 1.1,
							size: .95
						})), A = 0, _ = .55, U = .05, N = {
							x: j.minX + (j.maxX - j.minX) / 2,
							y: j.maxY - .9
						}, 0 < j.survivalRageTime ? (j.rightPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Secondary && (j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary), j.leftPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Secondary && (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary)) : (j.rightPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Primary && (j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary), j.leftPlayer.currentWeaponCategory !== e.WeaponCategoryEnum.Primary && (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary)))
					} else if (I === e.GameStateEnum.GameLost && (j.leftPlayer.buildData.cooldown = 0, j.rightPlayer.buildData.cooldown = 0, j.leftPlayer.reloadCooldown = 0, j.rightPlayer.reloadCooldown = 0, j.leftPlayer.isDead && (j.leftPlayer.direction = e.DirectionEnum.Left, j.leftPlayer.firingCooldown = 0, N = {
							x: j.leftPlayer.x,
							y: j.maxY - 1
						}), j.rightPlayer.isDead && (j.rightPlayer.direction = e.DirectionEnum.Right, j.rightPlayer.firingCooldown = 0, N = {
							x: j.rightPlayer.x,
							y: j.maxY - 1
						}), 0 === j.levelEndCooldown)) {
						if (0 === ut.length) {
							var _n = e.screenToHud({
								x: k.width,
								y: k.height
							});
							ut.push({
								selected: !1,
								enabled: !0,
								type: e.CommandEnum.Menu,
								x: _n.x / 2 - 2,
								y: _n.y / 2 + 1,
								size: .95
							}), ut.push({
								selected: !1,
								enabled: !0,
								type: e.CommandEnum.Restart,
								x: _n.x / 2 + 1,
								y: _n.y / 2 + 1,
								size: .95
							})
						}
						0 === j.levelEndPauseCooldown && (L = !0), q = .5, F = .2, _ = 1.6
					}
					var An = !1;
					if (0 === F) switch (j.currentLevel) {
						case 2:
							mt.achievements[7] !== e.LevelStatusEnum.Passed && 8 === G.phase && (mt.achievements[7] = e.LevelStatusEnum.Passed, e.playAchievementToaster(7), An = !0);
							break;
						case 3:
							mt.achievements[1] !== e.LevelStatusEnum.Passed && 8 === G.phase && !0 === j.noScratch && (mt.achievements[1] = e.LevelStatusEnum.Passed, e.playAchievementToaster(1), An = !0);
							break;
						case 8:
							mt.achievements[3] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && !1 === j.survivalRage && (mt.achievements[3] = e.LevelStatusEnum.Passed, e.playAchievementToaster(3), An = !0);
							break;
						case 10:
							mt.achievements[9] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && 3 === j.rightPlayer.stack.objects.length && 3 === j.leftPlayer.stack.objects.length && (mt.achievements[9] = e.LevelStatusEnum.Passed, e.playAchievementToaster(9), An = !0);
							break;
						case 12:
							mt.achievements[10] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && 0 === j.rightPlayer.stack.objects.length && 0 === j.leftPlayer.stack.objects.length && (mt.achievements[10] = e.LevelStatusEnum.Passed, e.playAchievementToaster(10), An = !0);
							break;
						case 14:
							mt.achievements[8] !== e.LevelStatusEnum.Passed && 14 <= j.metalCount && (mt.achievements[8] = e.LevelStatusEnum.Passed, e.playAchievementToaster(8), An = !0);
							break;
						case 16:
							mt.achievements[0] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && (mt.achievements[0] = e.LevelStatusEnum.Passed, e.playAchievementToaster(0), An = !0);
							break;
						case 18:
							mt.achievements[2] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && j.usedSpiked && j.usedTurret && (mt.achievements[2] = e.LevelStatusEnum.Passed, e.playAchievementToaster(2), An = !0);
							break;
						case 19:
							mt.achievements[13] !== e.LevelStatusEnum.Passed && 7 <= j.TNTCount && (mt.achievements[13] = e.LevelStatusEnum.Passed, e.playAchievementToaster(13), An = !0);
							break;
						case 20:
							mt.achievements[4] !== e.LevelStatusEnum.Passed && I === e.GameStateEnum.GameWon && (mt.achievements[4] = e.LevelStatusEnum.Passed, e.playAchievementToaster(4), An = !0);
							break;
						case 1e3:
							mt.achievements[11] !== e.LevelStatusEnum.Passed ? 100 <= j.killCount && (mt.achievements[11] = e.LevelStatusEnum.Passed, e.playAchievementToaster(11), An = !0) : mt.achievements[12] !== e.LevelStatusEnum.Passed && 200 <= j.killCount && (mt.achievements[12] = e.LevelStatusEnum.Passed, e.playAchievementToaster(12), An = !0);
							break;
						case 1001:
							mt.achievements[5] !== e.LevelStatusEnum.Passed ? 1 <= j.daysCount && (mt.achievements[5] = e.LevelStatusEnum.Passed, e.playAchievementToaster(5), An = !0) : mt.achievements[6] !== e.LevelStatusEnum.Passed && 3 <= j.daysCount && (mt.achievements[6] = e.LevelStatusEnum.Passed, e.playAchievementToaster(6), An = !0)
					}
					if (An && mt.achievements[14] !== e.LevelStatusEnum.Passed) {
						for (var Nn = 0, zn = 0; zn < mt.achievements.length; zn += 1) Nn += mt.achievements[zn] === e.LevelStatusEnum.Passed ? 1 : 0;
						Nn >= 10 && (mt.achievements[14] = e.LevelStatusEnum.Passed)
					}
					var Hn = N,
						Un = O.x,
						Fn = O.y;
					O.x = 0, O.y = 0, O.update();
					var qn = new e.Camera;
					qn.multiply(M);
					var Bn = qn.screenToCamera(k.width, k.height);
					O.tx = Bn.x / 2 - Hn.x, O.ty = Bn.y / 2 - Hn.y;
					var Gn = e.distance(Un, Fn, O.tx, O.ty);
					if (.001 < Math.abs(Gn)) var Zn = (O.ty - Fn) / Gn,
						$n = c * Gn * 2,
						Un = Un + (O.tx - Un) / Gn * Gn * 2 * c,
						Fn = Fn + $n * Zn;
					else Un = O.tx, Fn = O.ty;
					z > 0 && (z -= c, 0 >= z && (z = 0, B && (F = 1))), O.x = Un, O.y = Fn, W.x = Bn.x / 2 - Un, W.y = Bn.y / 2 - Fn, W.sx > _ && (W.sx -= .2 * i, W.sx < _ && (W.sx = _)), W.sx < _ && (W.sx += .2 * i, W.sx > _ && (W.sx = _)), W.sy = W.sx, z > 0 && (W.angle = H === e.DirectionEnum.Right ? -.05 + .25 * xt[0].time : .05 - .25 * xt[0].time), W.angle > A ? (W.angle -= U * Math.PI * i, W.angle < A && (W.angle = A)) : W.angle < A && (W.angle += U * Math.PI * i, W.angle > A && (W.angle = A)), O.update(), W.update(), X.update()
				}
				e.draw(D, j)
			}
		}

		function s(t) {
			var i;
			L = !1, st = e.CommandEnum.None, j = new e.levelManager(t), G = new e.AI, I = e.GameStateEnum.GameLoading, 0 < j.currentLevel && (i = [{
				type: "img",
				id: "tooltips2",
				src: "assets/img/" + w + "/tooltips2.png"
			}, {
				type: "img",
				id: "tooltips3",
				src: "assets/img/" + w + "/tooltips3.png"
			}, {
				type: "img",
				id: "tooltips4",
				src: "assets/img/" + w + "/tooltips4.png"
			}], vt = {
				current: 0,
				total: 0
			}, e.loadResources(i, l, n)), !0 === dt && 4 === t && mt.levelProgress[3] === e.LevelStatusEnum.Available && (e.reviewGame(), dt = !1)
		}

		function l(t) {
			if (e.Resources.tooltips2Image = t.tooltips2, e.Resources.tooltips3Image = t.tooltips3, e.Resources.tooltips4Image = t.tooltips4, F = z = 0, q = .4, U = .3, B = !1, A = 0, j.primaryWeaponAssignmentDone && j.secondaryWeaponAssignmentDone && j.newItem === e.StackObjectTypeEnum.None ? (N = {
					x: j.minX + (j.maxX - j.minX) / 2,
					y: j.maxY - .7
				}, _ = .6) : (_ = .8, N = {
					x: j.minX + (j.maxX - j.minX) / 2,
					y: j.maxY + .5
				}), t = new e.Camera, t.multiply(M), t = t.screenToCamera(k.width, k.height), O.x = t.x / 2 - N.x, O.y = t.y / 2 - N.y, W.angle = 0, W.sx = _, W.sy = _, 1e3 === j.currentLevel || 1001 === j.currentLevel) {
				var n, i = at.length,
					a = 6;
				for (n = 0; i > n && (t = at[n], t.status === e.LevelStatusEnum.Passed); n += 1) a = Math.max(a, n + 1);
				c(a)
			} else c();
			e.SoundManager.playLevelMusic(), I = e.GameStateEnum.GameRun/*, ih5game.start({
				level: j.currentLevel
			})*/
		}

		function c(n) {
			var i;
			if (j) {
				i = e.screenToHud({
					x: k.width,
					y: k.height
				});
				var a = n;
				if (n === t && (a = j.currentLevel), 5 < j.currentLevel && e.isTrialLicense()) ut = [{
					selected: !1,
					enabled: !0,
					type: e.CommandEnum.Menu,
					x: i.x - 1,
					y: i.y - 1,
					size: .95
				}, {
					selected: !1,
					enabled: !0,
					type: e.CommandEnum.BuyGame,
					x: 4.3,
					y: .8,
					size: 1.8
				}];
				else switch (a) {
					case 1:
						ut = [];
						break;
					case 2:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}];
						break;
					case 3:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 4:
					case 5:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 6:
					case 7:
					case 8:
					case 9:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 10:
					case 11:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 12:
					case 13:
					case 14:
					case 15:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 16:
					case 17:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					case 18:
					case 19:
					case 20:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MountedCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MountedCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], u(a, i);
						break;
					default:
						ut = [{
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ToggleAdrenaline,
							x: i.x / 2 - .5,
							y: i.y - 2,
							tx: i.x / 2 - .5,
							ty: i.y - 2,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 - 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.ShowStackObjects,
							x: i.x / 2 + 1,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 - 3,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CancelAction,
							x: i.x / 2 + 2,
							y: i.y - 2,
							size: .95,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MountedCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.RepairCrate,
							direction: e.DirectionEnum.Left
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.SpikeCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.TNTCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MountedCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleWoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.DoubleMetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.WoodCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.MetalCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !1,
							type: e.CommandEnum.SelectStackObject,
							x: 0,
							y: i.y,
							tx: 0,
							ty: i.y,
							size: .95,
							stackObjectType: e.StackObjectTypeEnum.RepairCrate,
							direction: e.DirectionEnum.Right
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Menu,
							x: i.x - 1,
							y: .1,
							size: .95
						}, {
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.Restart,
							x: i.x - 2,
							y: .1,
							size: .95
						}], n = i.x / 2 - .5, ut.push({
							selected: !1,
							enabled: !0,
							type: e.CommandEnum.CrateSelectionDone,
							x: n,
							y: i.y + 1,
							tx: n,
							ty: i.y - 1.1,
							size: 1
						}), j.newItem === e.StackObjectTypeEnum.None && u(a, i)
				}
			}
		}

		function u(t, n) {
			var i, a;
			switch (i = n.x / 2 - .5, a = n.y / 2 - .5, ut.push({
				selected: !1,
				enabled: !0,
				type: e.CommandEnum.Ready,
				x: i,
				y: n.y + 1,
				tx: i,
				ty: n.y - 1.1,
				size: 1
			}), t) {
				case 4:
				case 5:
				case 6:
				case 7:
					ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Right,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Right,
						locked: !0
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Right,
						locked: !0
					});
					break;
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
					ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Right,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Right,
						locked: !0
					});
					break;
				case 19:
					ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Right,
						locked: !0
					});
					break;
				case 20:
					ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Right,
						locked: !1
					});
					break;
				default:
					ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Left,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i - 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Left,
						locked: !1
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.1,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.Rifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.ShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + 1.2,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Primary,
						weaponType: e.WeaponTypeEnum.TurboBlaster,
						direction: e.DirectionEnum.Right,
						locked: !0
					}), ut.push({
						selected: !0,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.4,
						ty: a - 1.6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Uzi,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a - .5,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoRifle,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 3,
						ty: a + .6,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.AutoShotGun,
						direction: e.DirectionEnum.Right,
						locked: !1
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.AssignWeapon,
						x: i,
						y: a,
						tx: i + 2.7,
						ty: a + 1.7,
						size: 1,
						weaponCategory: e.WeaponCategoryEnum.Secondary,
						weaponType: e.WeaponTypeEnum.Rpg,
						direction: e.DirectionEnum.Right,
						locked: !1
					})
			}
		}

		function m(t, n) {
			t.update(n);
			var i = dtxFemaleWeaponOffset = -.2,
				a = dtyFemaleWeaponOffset = .08;
			if (t.classType === e.EntityClassTypeEnum.HumanFemale) switch (t.weapons[t.currentWeaponCategory]) {
				case e.WeaponTypeEnum.Rifle:
					t.weaponOffset.x = .42, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .8 + dtxFemaleWeaponOffset, t.weaponOffset.ty = .05 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.TurboBlaster:
					t.weaponOffset.x = .35 + -.08, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .8 + dtxFemaleWeaponOffset, t.weaponOffset.ty = .05 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.ShotGun:
					t.weaponOffset.x = .35 + -.08, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .8 + dtxFemaleWeaponOffset, t.weaponOffset.ty = .05 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.AutoRifle:
					t.weaponOffset.x = .42, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .8 + dtxFemaleWeaponOffset, t.weaponOffset.ty = .05 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.AutoShotGun:
					t.weaponOffset.x = .42, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .8 + dtxFemaleWeaponOffset, t.weaponOffset.ty = .05 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.Uzi:
					t.weaponOffset.x = .37, t.weaponOffset.y = -.4 + .45, t.weaponOffset.tx = .6 + dtxFemaleWeaponOffset, t.weaponOffset.ty = -.02 + dtyFemaleWeaponOffset;
					break;
				case e.WeaponTypeEnum.Rpg:
					t.weaponOffset.x = .12, t.weaponOffset.y = -.58 + .5, t.weaponOffset.tx = .6 + dtxFemaleWeaponOffset, t.weaponOffset.ty = -.02 + dtyFemaleWeaponOffset + .3
			} else switch (t.weapons[t.currentWeaponCategory]) {
				case e.WeaponTypeEnum.Rifle:
					t.weaponOffset.x = .12, t.weaponOffset.y = .04 + .35, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.18 + a;
					break;
				case e.WeaponTypeEnum.TurboBlaster:
					t.weaponOffset.x = .12, t.weaponOffset.y = .35 + .04, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.18 + a;
					break;
				case e.WeaponTypeEnum.ShotGun:
					t.weaponOffset.x = .12, t.weaponOffset.y = .35 + .04, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.18 + a;
					break;
				case e.WeaponTypeEnum.AutoRifle:
					t.weaponOffset.x = .12, t.weaponOffset.y = .35 + .04, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.25 + a + .05;
					break;
				case e.WeaponTypeEnum.AutoShotGun:
					t.weaponOffset.x = .12, t.weaponOffset.y = .35 + .04, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.25 + a;
					break;
				case e.WeaponTypeEnum.Uzi:
					t.weaponOffset.x = .12, t.weaponOffset.y = .39, t.weaponOffset.tx = .8 + i, t.weaponOffset.ty = -.25 + a;
					break;
				case e.WeaponTypeEnum.Rpg:
					t.weaponOffset.x = .12, t.weaponOffset.y = .3 + .04, t.weaponOffset.tx = .6 + i, t.weaponOffset.ty = -.02 + a
			}
			if (i = j.maxY, t.isDead || 0 < t.stack.objects.length && (i = t.stack.objects[t.stack.objects.length - 1].y - .5), t.y >= i - t.radius && 0 < t.vy && (t.y = i - t.radius, t.vy = 0), a = t.buildData, 0 < a.cooldown)
				if (a.cooldown -= n * (0 < j.survivalRageTime ? 2 : 1), a.stackObjectType !== e.StackObjectTypeEnum.RepairCrate || 0 !== t.stack.objects.length && t.stack.objects[0].strength !== j.getStackObjectStrength(t.stack.objects[0].type) || (a.cooldown = 0), 0 >= a.cooldown) {
					if (a.stackObjectType === e.StackObjectTypeEnum.RepairCrate) 0 < t.stack.objects.length && (t.stack.objects[0].strength = j.getStackObjectStrength(t.stack.objects[0].type));
					else {
						var o, r, i = a.stackObjectType;
						if (i !== e.StackObjectTypeEnum.None)
							if (t.buildDirection === e.DirectionEnum.Left)
								if (i === e.StackObjectTypeEnum.WoodCrate || i === e.StackObjectTypeEnum.MetalCrate) {
									for (o = !1, r = 0; r < j.stacks.length; ++r)
										if (j.leftPlayer.stack === j.stacks[r]) {
											o = !0;
											break
										}
									o || j.stacks.push(j.leftPlayer.stack), j.leftPlayer.stack.objects.push(new e.StackObject(j.maxY, .5, i, j.getStackObjectStrength(i))), j.survivalPoints += 10, p(10, j.leftPlayer.stack.x, j.maxY - 1.3), e.SoundManager.playHumanSuccess(), j.metalCount += i === e.StackObjectTypeEnum.MetalCrate ? 1 : 0
								} else o = j.minX + (j.maxX - j.minX) / 2, o -= 1.5, r = {
									x: o,
									vx: -7,
									objects: [],
									limitX: o,
									direction: e.DirectionEnum.Left,
									cooldown: 1
								}, i === e.StackObjectTypeEnum.DoubleWoodCrate ? (r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.WoodCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.WoodCrate))), r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.WoodCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.WoodCrate)))) : i === e.StackObjectTypeEnum.DoubleMetalCrate ? (r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.MetalCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.MetalCrate))), r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.MetalCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.MetalCrate)))) : r.objects.push(new e.StackObject(j.maxY - 1.3, .5, i, j.getStackObjectStrength(i))), r.objects[0].rotationSpeed = .4 + .1 * Math.random(), j.stacks.push(r), j.survivalPoints += 10, p(10, o, j.maxY - 1.3), e.SoundManager.playHumanSuccess(), j.usedSpiked |= i === e.StackObjectTypeEnum.SpikeCrate, j.usedTurret |= i === e.StackObjectTypeEnum.MountedCrate, j.TNTCount += i === e.StackObjectTypeEnum.TNTCrate ? 1 : 0;
						else if (i === e.StackObjectTypeEnum.WoodCrate || i === e.StackObjectTypeEnum.MetalCrate) {
							for (o = !1, r = 0; r < j.stacks.length; ++r)
								if (j.rightPlayer.stack === j.stacks[r]) {
									o = !0;
									break
								}
							o || j.stacks.push(j.rightPlayer.stack), j.rightPlayer.stack.objects.push(new e.StackObject(j.maxY, .5, i, j.getStackObjectStrength(i))), j.survivalPoints += 10, p(10, j.rightPlayer.stack.x, j.maxY - 1.3), e.SoundManager.playHumanSuccess(), j.metalCount += i === e.StackObjectTypeEnum.MetalCrate ? 1 : 0
						} else o = j.minX + (j.maxX - j.minX) / 2, o += 1.5, r = {
							x: o,
							vx: 7,
							objects: [],
							limitX: o,
							direction: e.DirectionEnum.Right,
							cooldown: 1
						}, i === e.StackObjectTypeEnum.DoubleWoodCrate ? (r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.WoodCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.WoodCrate))), r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.WoodCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.WoodCrate)))) : i === e.StackObjectTypeEnum.DoubleMetalCrate ? (r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.MetalCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.MetalCrate))), r.objects.push(new e.StackObject(j.maxY - 1.3, .5, e.StackObjectTypeEnum.MetalCrate, j.getStackObjectStrength(e.StackObjectTypeEnum.MetalCrate)))) : r.objects.push(new e.StackObject(j.maxY - 1.3, .5, i, j.getStackObjectStrength(i))), r.objects[0].rotationSpeed = .4 + .1 * Math.random(), j.stacks.push(r), j.survivalPoints += 10, p(10, o, j.maxY - 1.3), e.SoundManager.playHumanSuccess(), j.usedSpiked |= i === e.StackObjectTypeEnum.SpikeCrate, j.usedTurret |= i === e.StackObjectTypeEnum.MountedCrate, j.TNTCount += i === e.StackObjectTypeEnum.TNTCrate ? 1 : 0;
						switch (j.currentLevel) {
							case 1:
								j.currentLevelStage === e.LevelStageEnum.TutorialBuildingFirstCrate ? j.currentLevelStage = e.LevelStageEnum.TutorialFirstWave : j.currentLevelStage === e.LevelStageEnum.TutorialReinforceDefenses ? (j.tutorialCooldown = 4.5, j.currentLevelStage = e.LevelStageEnum.TutorialMoreZombiesComing) : j.currentLevelStage === e.LevelStageEnum.TutorialTeamWork && 1 < j.leftPlayer.stack.objects.length && 0 < j.rightPlayer.stack.objects.length && (j.currentLevelStage = e.LevelStageEnum.TutorialThirdWave)
						}
					}
					a.cooldown = 0, a.stackObjectType = e.StackObjectTypeEnum.None
				} else 0 === t.heartBeats[3].time && (i = new e.SmallSmokeEffect(t.x, t.y, .15), i.selfDestroyTime = .6, i.startFadeTime = .7, j.effects.push(i), j.effects.push(new e.ImpactEffect(t.x - .3, t.y, .15)), j.effects.push(new e.ImpactEffect(t.x + .3, t.y + .5, .15)), i = new e.SmallSmokeEffect(t.x + .5, t.y + .2, .15), i.startFadeTime = .9, i.selfDestroyTime = .5, j.backgroundEffects.push(i), i = new e.SmallSmokeEffect(t.x + .2, t.y + .6, .15), i.startFadeTime = .9, i.selfDestroyTime = .9, j.effects.push(i), e.SoundManager.playHammerSound()), t.reloadCooldown = .3;
			if (i = null, o = !1, I !== e.GameStateEnum.GameLost && 0 === t.reloadCooldown && 0 === a.cooldown && 0 === t.firingCooldown && (i = h(t.x, t.y, t.direction), null !== i.entity && 10 > i.distance && 0 < i.distance && (o = !0)), (0 < t.firingRecoilTime || 0 < t.firingCooldown) && (t.weaponOffset.y += .05 * t.stack.objects.length), o && i) {
				t.firingRecoilTime = .3, a = t.x + (t.direction === e.DirectionEnum.Right ? t.weaponOffset.x : -t.weaponOffset.x), o = t.y + t.weaponOffset.y, r = e.vectorAngle(a, o, i.entity.x, i.entity.y);
				var s = e.vectorRotate(t.weaponOffset.tx, t.direction === e.DirectionEnum.Right ? t.weaponOffset.ty - .18 : -t.weaponOffset.ty, r),
					a = a + s.x;
				o += s.y;
				var s = (i.entity.x - a) / i.distance,
					l = (i.entity.y - o) / i.distance,
					c = null,
					u = 1,
					c = 0;
				switch (t.weapons[t.currentWeaponCategory]) {
					case e.WeaponTypeEnum.Rifle:
						u = .7, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Bullet, 2)), j.effects.push(new e.SmallSmokeEffect(a, o, .15)), e.SoundManager.playGunSound();
						break;
					case e.WeaponTypeEnum.TurboBlaster:
						u = .7, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Bullet, 3)), j.effects.push(new e.SmallSmokeEffect(a, o, .15)), e.SoundManager.playGunSound();
						break;
					case e.WeaponTypeEnum.ShotGun:
						u = .7, c = 4.5 < i.distance ? 1 : 3, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Bullet, c)), j.effects.push(new e.SmallSmokeEffect(a, o, .15)), e.SoundManager.playGunSound();
						break;
					case e.WeaponTypeEnum.Uzi:
						u = .14, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Bullet, .7)), e.SoundManager.playMachineGunSound();
						break;
					case e.WeaponTypeEnum.AutoRifle:
						u = .18, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.MultiBullet, 1)), e.SoundManager.playMachineGunSound();
						break;
					case e.WeaponTypeEnum.AutoShotGun:
						u = .2, c = 4.5 < i.distance ? .45 : 1.5, j.effects.push(new e.ProjectileEffect(a, o, .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Bullet, c)), e.SoundManager.playMachineGunSound();
						break;
					case e.WeaponTypeEnum.Rpg:
						u = 1.7, j.effects.push(new e.ProjectileEffect(a, o - .2 + (t.direction === e.DirectionEnum.Right ? .2 : 0), .15, r, 11 * s, 11 * l, e.EffectTypeEnum.Warhead, 0)), j.effects.push(new e.SmallSmokeEffect(a, o, .15)), c = new e.BigSmokeEffect(a, o, .15), c.selfDestroyTime = .4, c.startFadeTime = .5, j.effects.push(c), e.SoundManager.playBlastSound()
				}
				j.effects.push(new e.SmallSmokeEffect(a - .1, o, .15)), j.effects.push(new e.SmallSmokeEffect(a + .1, o, .15)), t.weapons[t.currentWeaponCategory] !== e.WeaponTypeEnum.Rpg && (.5 < Math.random() || t.weapons[t.currentWeaponCategory] === e.WeaponTypeEnum.ShotGun || t.weapons[t.currentWeaponCategory] === e.WeaponTypeEnum.TurboBlaster || t.weapons[t.currentWeaponCategory] === e.WeaponTypeEnum.Rifle) && j.effects.push(new e.CartridgeCaseEffect(t.x, t.y - .2, .15, t.direction === e.DirectionEnum.Right ? e.DirectionEnum.Left : e.DirectionEnum.Right)), t.firingAngle = r, t.firingCooldown = u + t.firingTimeleftOver
			}
		}

		function d(t, n, i) {
			var a = Math.random(),
				o = new e.Effect(t, n, .15);
			o.mass = .7, o.gravity = -4, o.type = e.EffectTypeEnum.HeadLimb, o.value = 0, o.angle = 0, o.rotationSpeed = 0, o.restoreBaseAngle = !0, o.direction = i, o.gravity = -4, o.vx = o.direction == e.DirectionEnum.Left ? Math.random() + .5 : -Math.random() - .5, o.vy = 0, o.selfDestroyTime = 2, o.friction = 0, j.effects.push(o), a = 2 + Math.random(), o = new e.Effect(t, n, .15), o.friction = 1, o.mass = .7, o.selfDestroyTime = 2, o.type = e.EffectTypeEnum.BodyLimb1, o.value = 0, o.angle = Math.random(), o.rotationSpeed = (.6 + .15 * Math.random()) * Math.PI, o.vx = .5 < Math.random() ? a : -a, o.vy = 2 * -a, o.direction = i, j.effects.push(o), a = 1.5 + Math.random(), o = new e.Effect(t, n, .15), o.mass = .7, o.selfDestroyTime = 1.8, o.type = e.EffectTypeEnum.BodyLimb2, o.value = 0, o.angle = Math.random(), o.rotationSpeed = (.6 + .15 * Math.random()) * Math.PI, o.vx = .5 < Math.random() ? a : -a, o.direction = i, z > 0 ? (o.friction = 1, o.vy = 2 * -a) : (o.friction = 2, o.vy = -a), j.effects.push(o), e.SoundManager.playZombieDieSound()
		}

		function p(t, n, i) {
			t = new e.ProjectileEffect(n, i, .5, 0, 0, -3, 10 === t ? e.EffectTypeEnum.GainSP : e.EffectTypeEnum.GainMoreSP, 0), t.selfDestroyTime = 1, t.startFadeTime = .7, j.effects.push(t), j.survivalPointsZoomTime = .3
		}

		function h(t, n, i) {
			var a, o, r = null,
				s = null,
				l = j.maxX - j.minX,
				c = 0;
			for (a = 0, o = j.entities.length; o > a; a += 1) s = j.entities[a], (i === e.DirectionEnum.Left && s.x < t || i === e.DirectionEnum.Right && s.x > t) && (s.direction === e.DirectionEnum.Left && s.x < j.maxX || s.direction === e.DirectionEnum.Right && s.x > j.minX) && (c = e.distance(t, n, s.x, s.y), l > c && (r = s, l = c));
			return {
				entity: r,
				distance: l
			}
		}

		function g() {
			var t = e.screenToHud({
				x: k.width,
				y: k.height
			});
			ut.push({
				selected: !1,
				enabled: !0,
				type: e.CommandEnum.ConfirmNo,
				x: t.x / 2 - 1.25,
				y: t.y / 2 - .5,
				size: .95
			}), ut.push({
				selected: !1,
				enabled: !0,
				type: e.CommandEnum.ConfirmYes,
				x: t.x / 2 + .25,
				y: t.y / 2 - .5,
				size: .95
			})
		}

		function f(t) {
			var n, i, a, o;
			o = !1;
			var r = $("canvas").offset();
			if (n = t.pageX - r.left, r = t.pageY - r.top, t = e.screenToScene({
					x: n / C,
					y: r / S
				}), r = e.screenToHud({
					x: n / C,
					y: r / S
				}), I === e.GameStateEnum.GamePreLoading && (a = e.screenToHud({
					x: k.width,
					y: k.height
				}), e.pointInRect(r.x, r.y, 0, a.y - 1.5, 1.5, a.y)), I === e.GameStateEnum.GameMenu && (a = e.screenToHud({
					x: k.width,
					y: k.height
				}), e.pointInRect(r.x, r.y, a.x - 1.5, a.y - 1.5, a.x, a.y)), I === e.GameStateEnum.GameStart) I = e.GameStateEnum.GameIntro, e.SoundManager.playMainMusic();
			else if (I === e.GameStateEnum.GameIntro) Y = Math.min(Y, 1);
			else if (st !== e.CommandEnum.None) {
				for (n = 0; n < ut.length; n += 1)
					if (ut[n].enabled && e.pointInRect(r.x, r.y, ut[n].x, ut[n].y, ut[n].x + ut[n].size, ut[n].y + ut[n].size)) {
						if (a = ut[n].type, a === e.CommandEnum.ConfirmYes) {
							switch (st) {
								case e.CommandEnum.Menu:
									e.showMainScreen(), L = !1, st = e.CommandEnum.None;
									break;
								case e.CommandEnum.Restart:
									s(j.currentLevel), L = !1, st = e.CommandEnum.None
							}
							break
						}
						if (a === e.CommandEnum.ConfirmNo) {
							e.cancelConfirmDialog();
							break
						}
					}
			} else switch (I) {
				case e.GameStateEnum.GameMenu:
					if (lt) lt = !1;
					else if (!(Q === e.MenuTypeEnum.None && V > 2)) {
						if (t = !1, e.isTrialLicense() && (a = e.screenToHud({
								x: k.width,
								y: k.height
							}), e.pointInRect(r.x, r.y, a.x - 2, a.y - 1, a.x, a.y) && (s(6), t = !0)), Q === e.MenuTypeEnum.ShowStoryMode) {
							for (n = 9 * tt; n < Math.min(at.length, 9 * (tt + 1)); n += 1)
								if (e.pointInRect(r.x, r.y, at[n].x, at[n].y, at[n].x + at[n].size, at[n].y + at[n].size)) {
									at[n].status === e.LevelStatusEnum.Available || at[n].status === e.LevelStatusEnum.Passed ? s(at[n].level) : at[n].status === e.LevelStatusEnum.Locked && (gt = 1.7), t = !0;
									break
								}
						} else if (Q === e.MenuTypeEnum.ShowSurvivalMode) e.pointInRect(r.x, r.y, rt[tt].x, rt[tt].y, rt[tt].x + rt[tt].size, rt[tt].y + rt[tt].size) && (rt[tt].status === e.LevelStatusEnum.Available || rt[tt].status === e.LevelStatusEnum.Passed ? s(rt[tt].level) : rt[tt].status === e.LevelStatusEnum.Locked && (gt = 1.7), t = !0);
						else if (Q === e.MenuTypeEnum.ShowOptions)
							for (n = 0; n < ot.length; n += 1)
								if (e.pointInRect(r.x, r.y, ot[n].x, ot[n].y, ot[n].x + ot[n].size, ot[n].y + ot[n].size)) {
									t = !0;
									break
								}
						if (!t)
							for (n = 0; n < ct.length; n += 1)
								if (e.pointInRect(r.x, r.y, ct[n].x, ct[n].y, ct[n].x + ct[n].width, ct[n].y + ct[n].height)) {
									if (Q !== ct[n].type) switch (ct[n].type) {
										case e.MenuTypeEnum.ToggleSound:
											0 === e.SoundManager.getSoundsEnabled() ? e.SoundManager.unmute(!0) : e.SoundManager.mute(2 === e.SoundManager.getSoundsEnabled() ? !1 : !0);
											break;
										case e.MenuTypeEnum.ShowCredits:
											lt = !0;
											break;
										case e.MenuTypeEnum.ShowMain:
										case e.MenuTypeEnum.ShowStoryMode:
										case e.MenuTypeEnum.ShowSurvivalMode:
										case e.MenuTypeEnum.ShowOptions:
											tt = 0, V = K = 3, Q = ct[n].type, nt = 0, it = e.DirectionEnum.None, e.SoundManager.playClickSound();
											break;
										case e.MenuTypeEnum.SelectNextPage:
											Q === e.MenuTypeEnum.ShowStoryMode ? (t = Math.floor(at.length / 9), tt++, tt > t && (tt = 0), nt = .25, it = e.DirectionEnum.Right, e.SoundManager.playClickSound()) : Q === e.MenuTypeEnum.ShowSurvivalMode ? (t = rt.length - 1, tt++, tt > t && (tt = 0), nt = .25, it = e.DirectionEnum.Right, e.SoundManager.playClickSound()) : Q === e.MenuTypeEnum.ShowOptions && (t = ot.length - 1, tt++, tt > t && (tt = 0), nt = .25, it = e.DirectionEnum.Right, e.SoundManager.playClickSound());
											break;
										case e.MenuTypeEnum.SelectPrevPage:
											Q === e.MenuTypeEnum.ShowStoryMode ? (tt--, t = Math.floor(at.length / 9), 0 > tt && (tt = t), nt = .25, it = e.DirectionEnum.Left, e.SoundManager.playClickSound()) : Q === e.MenuTypeEnum.ShowSurvivalMode ? (tt--, t = rt.length - 1, 0 > tt && (tt = t), nt = .25, it = e.DirectionEnum.Left, e.SoundManager.playClickSound()) : Q === e.MenuTypeEnum.ShowOptions && (tt--, t = ot.length - 1, 0 > tt && (tt = t), nt = .25, it = e.DirectionEnum.Left, e.SoundManager.playClickSound())
									}
									break
								}
					}
					break;
				case e.GameStateEnum.GameLost:
				case e.GameStateEnum.GameWon:
				case e.GameStateEnum.GameRun:
					var l = j.newItem === e.StackObjectTypeEnum.None && j.primaryWeaponAssignmentDone && j.secondaryWeaponAssignmentDone;
					for (n = 0; n < ut.length; n += 1)
						if (ut[n].enabled && e.pointInRect(r.x, r.y, ut[n].x, ut[n].y, ut[n].x + ut[n].size, ut[n].y + ut[n].size)) {
							if (a = ut[n].type, a === e.CommandEnum.Menu && (5 < j.currentLevel && e.isTrialLicense() ? e.showMainScreen() : e.displayMenuConfirmDialog(), o = !0, e.SoundManager.playClickSound()), a === e.CommandEnum.NextLevel) s(20 === j.currentLevel || j.currentLevel === rt[1].level ? rt[0].level : j.currentLevel + 1), o = !0, e.SoundManager.playReloadSound();
							else if (a === e.CommandEnum.Restart) I !== e.GameStateEnum.GameLost ? (st = e.CommandEnum.Restart, g(), R = L, L = !0) : s(j.currentLevel), o = !0, e.SoundManager.playReloadSound();
							else if (a === e.CommandEnum.Pause) L = !L, o = !0;
							else if (a === e.CommandEnum.BuyGame) e.buyGame(), o = !0;
							else if (a === e.CommandEnum.ZoomIn) _ += .05, _ > .9 && (_ = .9), o = !0;
							else if (a === e.CommandEnum.ZoomOut) _ -= .05, .15 > _ && (_ = .15), o = !0;
							else if (a === e.CommandEnum.CrateSelectionDone) a = e.screenToHud({
								x: k.width,
								y: k.height
							}), ut[n].ty = a.y - 1.1, ut[n].y = a.y + 1, j.newItem !== e.StackObjectTypeEnum.None && (j.newItem = e.StackObjectTypeEnum.None, u(a)), o = !0;
							else if (a === e.CommandEnum.Ready) a = e.screenToHud({
								x: k.width,
								y: k.height
							}), ut[n].ty = a.y - 1.1, ut[n].y = a.y + 1, j.primaryWeaponAssignmentDone ? j.secondaryWeaponAssignmentDone || (j.secondaryWeaponAssignmentDone = !0) : j.primaryWeaponAssignmentDone = !0, j.primaryWeaponAssignmentDone && j.secondaryWeaponAssignmentDone ? (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary, j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Primary, j.leftPlayer.direction = e.DirectionEnum.Left, j.rightPlayer.direction = e.DirectionEnum.Right, ut[n].enabled = !1) : j.primaryWeaponAssignmentDone && (j.leftPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary, j.rightPlayer.currentWeaponCategory = e.WeaponCategoryEnum.Secondary, j.selectedWeaponType = e.WeaponTypeEnum.None), j.rightPlayer.targetScaleFactor = 1, j.leftPlayer.targetScaleFactor = 1, o = !0, e.SoundManager.playReloadSound();
							else if (a === e.CommandEnum.ToggleAdrenaline && l) {
								if (0 === j.survivalRageTime && j.survivalPoints >= j.minSurvivalPoints) switch (o = 1, j.leftPlayer.weapons[e.WeaponCategoryEnum.Secondary] === e.WeaponTypeEnum.Uzi && (o += .15), j.rightPlayer.weapons[e.WeaponCategoryEnum.Secondary] === e.WeaponTypeEnum.Uzi && (o += .15), j.survivalRageTime = j.maxSurvivalRageTime * o, j.survivalPoints -= j.minSurvivalPoints, j.survivalRage = !0, j.currentLevel) {
									case 1:
										j.currentLevelStage === e.LevelStageEnum.TutorialSelectSurvivalRage && (L = !1, j.currentLevelStage = e.LevelStageEnum.TutorialFirstWaveFinishJob)
								}
								o = !0
							} else if (a === e.CommandEnum.CancelAction && l) ut[n].direction === e.DirectionEnum.Left && 0 < j.leftPlayer.buildData.cooldown ? (j.leftPlayer.buildData.cooldown = 0, j.leftPlayer.buildData.stackObjectType = e.StackObjectTypeEnum.None, o = !0) : ut[n].direction === e.DirectionEnum.Right && 0 < j.rightPlayer.buildData.cooldown && (j.rightPlayer.buildData.cooldown = 0, j.rightPlayer.buildData.stackObjectType = e.StackObjectTypeEnum.None, o = !0), e.SoundManager.playClickSound();
							else if (a === e.CommandEnum.SelectStackObject && l) {
								for (o = null, i = 0; i < ut.length; ++i)
									if (ut[i].type === e.CommandEnum.ShowStackObjects && ut[i].selected && ut[i].direction === ut[n].direction) {
										o = ut[i];
										break
									}
								a = !1, o && ((ut[n].stackObjectType === e.StackObjectTypeEnum.MetalCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.WoodCrate) && (o.direction === e.DirectionEnum.Left && j.leftPlayer.stack.objects.length === j.maxStackSize ? a = !0 : o.direction === e.DirectionEnum.Right && j.rightPlayer.stack.objects.length === j.maxStackSize && (a = !0)), ut[n].stackObjectType === e.StackObjectTypeEnum.RepairCrate && (i = ut[n].direction === e.DirectionEnum.Left ? j.leftPlayer : j.rightPlayer, 0 >= j.repairKits || !(0 < i.stack.objects.length && i.stack.objects[0].strength < j.getStackObjectStrength(i.stack.objects[0].type))) && (a = !0), (ut[n].stackObjectType === e.StackObjectTypeEnum.DoubleWoodCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.DoubleMetalCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.MountedCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.SpikeCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.TNTCrate) && 40 > j.survivalPoints && (a = !0)), a || (o && o.stackObjectType !== ut[n].stackObjectType && (o = o.direction === e.DirectionEnum.Left ? j.leftPlayer.buildData : j.rightPlayer.buildData, o.cooldown = j.getStackObjectCreationTime(ut[n].stackObjectType), o.stackObjectType = ut[n].stackObjectType, ut[n].stackObjectType === e.StackObjectTypeEnum.DoubleWoodCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.DoubleMetalCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.MountedCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.SpikeCrate || ut[n].stackObjectType === e.StackObjectTypeEnum.TNTCrate ? j.survivalPoints -= 40 : ut[n].stackObjectType === e.StackObjectTypeEnum.RepairCrate && --j.repairKits), j.currentLevelStage === e.LevelStageEnum.TutorialHitCrateButton && (j.currentLevelStage = e.LevelStageEnum.TutorialBuildingFirstCrate), b(!0)), o = !0
							} else if (a === e.CommandEnum.ShowStackObjects && l) {
								if (o = ut[n].direction === e.DirectionEnum.Left ? j.leftPlayer.buildData : j.rightPlayer.buildData, !1 === ut[n].selected && 0 === o.cooldown) {
									b(!0), ut[n].selected = !0, o = ut[n], i = a = o.x;
									for (var c = !1, m = 0; m < ut.length; ++m)
										if (ut[m].type === e.CommandEnum.SelectStackObject && ut[m].direction === o.direction) {
											switch (ut[m].ty = o.y + 1, ut[m].enabled = !0, ut[m].stackObjectType) {
												case e.StackObjectTypeEnum.WoodCrate:
												case e.StackObjectTypeEnum.MetalCrate:
												case e.StackObjectTypeEnum.RepairCrate:
													ut[m].direction === e.DirectionEnum.Left ? --i : i += 1, c = !0;
													break;
												case e.StackObjectTypeEnum.DoubleWoodCrate:
												case e.StackObjectTypeEnum.DoubleMetalCrate:
												case e.StackObjectTypeEnum.MountedCrate:
												case e.StackObjectTypeEnum.TNTCrate:
												case e.StackObjectTypeEnum.SpikeCrate:
													ut[m].direction === e.DirectionEnum.Left ? a += 1 : --a, c = !1
											}
											ut[m].x = ut[m].direction === e.DirectionEnum.Left ? c ? i + 1 : a : c ? i - 1 : a, ut[m].tx = ut[m].x
										}(j.currentLevelStage === e.LevelStageEnum.TutorialHitBuildButton || j.currentLevelStage === e.LevelStageEnum.TutorialZombiesComing) && (j.currentLevelStage = e.LevelStageEnum.TutorialHitCrateButton)
								} else b(!0);
								o = !0, e.SoundManager.playClickSound()
							} else if (a === e.CommandEnum.AssignWeapon) {
								if (!1 === ut[n].locked) {
									for (ut[n].direction !== e.DirectionEnum.Left || j.leftPlayer.weapons[ut[n].weaponCategory] === ut[n].weaponType && j.leftPlayer.currentWeaponCategory === ut[n].weaponCategory ? ut[n].direction !== e.DirectionEnum.Right || j.rightPlayer.weapons[ut[n].weaponCategory] === ut[n].weaponType && j.rightPlayer.currentWeaponCategory === ut[n].weaponCategory || (j.rightPlayer.weapons[ut[n].weaponCategory] = ut[n].weaponType, j.rightPlayer.currentWeaponCategory = ut[n].weaponCategory) : (j.leftPlayer.weapons[ut[n].weaponCategory] = ut[n].weaponType, j.leftPlayer.currentWeaponCategory = ut[n].weaponCategory), j.selectedWeaponType = ut[n].weaponType, a = e.screenToHud({
											x: k.width,
											y: k.height
										}), i = 0; i < ut.length; ++i) ut[i].type === e.CommandEnum.AssignWeapon && ut[i].direction === ut[n].direction ? ut[i].selected = ut[i].direction === e.DirectionEnum.Left ? j.leftPlayer.weapons[ut[i].weaponCategory] === ut[i].weaponType : j.rightPlayer.weapons[ut[i].weaponCategory] === ut[i].weaponType : ut[i].type === e.CommandEnum.Ready && (j.primaryWeaponAssignmentDone ? j.secondaryWeaponAssignmentDone || (ut[i].ty = j.leftPlayer.weapons[e.WeaponCategoryEnum.Secondary] !== e.WeaponTypeEnum.None && j.rightPlayer.weapons[e.WeaponCategoryEnum.Secondary] !== e.WeaponTypeEnum.None ? a.y - 1.1 : a.y + 1) : ut[i].ty = j.leftPlayer.weapons[e.WeaponCategoryEnum.Primary] !== e.WeaponTypeEnum.None && j.rightPlayer.weapons[e.WeaponCategoryEnum.Primary] !== e.WeaponTypeEnum.None ? a.y - 1.1 : a.y + 1);
									ut[n].direction === e.DirectionEnum.Left ? (j.leftPlayer.targetScaleFactor = 1.6, j.rightPlayer.targetScaleFactor = 1, j.leftPlayer.scaleFactor !== j.leftPlayer.targetScaleFactor && (j.leftPlayer.reloadCooldown = .3)) : (j.rightPlayer.targetScaleFactor = 1.6, j.leftPlayer.targetScaleFactor = 1, j.rightPlayer.scaleFactor !== j.rightPlayer.targetScaleFactor && (j.rightPlayer.reloadCooldown = .3)), e.SoundManager.playReloadSound()
								} else gt = 1.7;
								o = !0
							}
							if (o) break
						}
					o || 1 !== j.currentLevel || (j.currentLevelStage === e.LevelStageEnum.TutorialStart ? (j.tutorialCooldown = 6, j.currentLevelStage = e.LevelStageEnum.TutorialZombiesComing, o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialFirstWaveDone ? (j.currentLevelStage = e.LevelStageEnum.TutorialReinforceDefenses, o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialTapToContinue ? (j.currentLevelStage = e.LevelStageEnum.TutorialFirstWave, o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialSecondWaveDone ? (j.currentLevelStage = e.LevelStageEnum.TutorialHelpingHand, o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialFirstKill ? (j.currentLevelStage = e.LevelStageEnum.TutorialSelectSurvivalRage, a = e.screenToHud({
						x: k.width,
						y: k.height
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.ToggleAdrenaline,
						x: a.x / 2 - .5,
						y: a.y - 2,
						tx: a.x / 2 - .5,
						ty: a.y - 2,
						size: .95
					}), o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialTeamDefenses ? (j.currentLevelStage = e.LevelStageEnum.TutorialTeamWork, o = !0, a = e.screenToHud({
						x: k.width,
						y: k.height
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.ToggleAdrenaline,
						x: a.x / 2 - .5,
						y: a.y - 2,
						tx: a.x / 2 - .5,
						ty: a.y - 2,
						size: .95
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.ShowStackObjects,
						x: a.x / 2 - 2,
						y: a.y - 2,
						size: .95,
						direction: e.DirectionEnum.Left
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.CancelAction,
						x: a.x / 2 - 3,
						y: a.y - 2,
						size: .95,
						direction: e.DirectionEnum.Left
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.SelectStackObject,
						x: 0,
						y: a.y,
						tx: 0,
						ty: a.y,
						size: .95,
						stackObjectType: e.StackObjectTypeEnum.WoodCrate,
						direction: e.DirectionEnum.Left
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.ShowStackObjects,
						x: a.x / 2 + 1,
						y: a.y - 2,
						size: .95,
						direction: e.DirectionEnum.Right
					}), ut.push({
						selected: !1,
						enabled: !0,
						type: e.CommandEnum.CancelAction,
						x: a.x / 2 + 2,
						y: a.y - 2,
						size: .95,
						direction: e.DirectionEnum.Right
					}), ut.push({
						selected: !1,
						enabled: !1,
						type: e.CommandEnum.SelectStackObject,
						x: 0,
						y: a.y,
						tx: 0,
						ty: a.y,
						size: .95,
						stackObjectType: e.StackObjectTypeEnum.WoodCrate,
						direction: e.DirectionEnum.Right
					})) : j.currentLevelStage === e.LevelStageEnum.TutorialHelpingHand ? (j.currentLevelStage = e.LevelStageEnum.TutorialTeamCamera, n = j.minX + (j.maxX - j.minX) / 2, j.leftPlayer.x = n - .6, j.leftPlayer.stack.x = n - .6, j.leftPlayer.direction = e.DirectionEnum.Right, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2, j.leftPlayer.buildData.cooldown = 0, j.rightPlayer.x = n + .6, j.rightPlayer.stack.x = n + .6, j.rightPlayer.direction = e.DirectionEnum.Right, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2, j.rightPlayer.buildData.cooldown = 0, e.SoundManager.playReloadSound(), o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialTeamCamera ? (y(t), j.leftPlayer.direction === e.DirectionEnum.Left && j.rightPlayer.direction === e.DirectionEnum.Left && (j.currentLevelStage = e.LevelStageEnum.TutorialTeamDefenses), o = !0) : j.currentLevelStage === e.LevelStageEnum.TutorialTurnRight && (t.x > j.minX + (j.maxX - j.minX) / 2 && (j.leftPlayer.direction = e.DirectionEnum.Right, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2, j.rightPlayer.direction = e.DirectionEnum.Right, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2, j.currentLevelStage = e.LevelStageEnum.TutorialSecondWave), o = !0)), o || y(t)
			}
		}

		function y(t) {
			if (I === e.GameStateEnum.GameRun)
				if (j.secondaryWeaponAssignmentDone && j.primaryWeaponAssignmentDone && j.newItem === e.StackObjectTypeEnum.None) {
					if (j.currentLevelStage === e.LevelStageEnum.None || j.currentLevelStage === e.LevelStageEnum.TutorialTeamCamera || j.currentLevelStage === e.LevelStageEnum.TutorialTeamWork) {
						var n = j.minX + (j.maxX - j.minX) / 2;
						!(0 < j.leftPlayer.buildData.cooldown || 0 < j.rightPlayer.buildData.cooldown) || 0 < j.leftPlayer.buildData.cooldown && 0 < j.rightPlayer.buildData.cooldown ? t.x < n && j.leftPlayer.direction !== e.DirectionEnum.Left ? (j.leftPlayer.direction = e.DirectionEnum.Left, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2) : t.x < n && j.rightPlayer.direction !== e.DirectionEnum.Left ? (j.rightPlayer.direction = e.DirectionEnum.Left, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2) : t.x > n && j.rightPlayer.direction !== e.DirectionEnum.Right ? (j.rightPlayer.direction = e.DirectionEnum.Right, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2) : t.x > n && j.leftPlayer.direction !== e.DirectionEnum.Right && (j.leftPlayer.direction = e.DirectionEnum.Right, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2) : t.x < n ? (j.leftPlayer.direction !== e.DirectionEnum.Left && (j.leftPlayer.direction = e.DirectionEnum.Left, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2), j.rightPlayer.direction !== e.DirectionEnum.Left && (j.rightPlayer.direction = e.DirectionEnum.Left, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2)) : (j.leftPlayer.direction !== e.DirectionEnum.Right && (j.leftPlayer.direction = e.DirectionEnum.Right, j.leftPlayer.firingAngle = 0, j.leftPlayer.reloadCooldown = .2), j.rightPlayer.direction !== e.DirectionEnum.Right && (j.rightPlayer.direction = e.DirectionEnum.Right, j.rightPlayer.firingAngle = 0, j.rightPlayer.reloadCooldown = .2))
					}
				} else j.rightPlayer.targetScaleFactor = 1, j.leftPlayer.targetScaleFactor = 1, j.selectedWeaponType = e.WeaponTypeEnum.None
		}

		function b(t) {
			var n, i, a, o = e.screenToHud({
				x: k.width,
				y: k.height
			});
			for (n = 0, i = ut.length; i > n; n += 1) a = ut[n], a.type === e.CommandEnum.ShowStackObjects ? a.selected = !1 : a.type === e.CommandEnum.SelectStackObject && (a.enabled = !1, t || (a.y = o.y), a.ty = o.y)
		}

		function v() {}
		var x, E, T, w, C, S, k, D, L, R, I, P, j, M, O, W, X, _, A, N, z, H, U, F, q, B, G, Z, Y, J, V, K, Q, et, tt, nt, it, at, ot, rt, st, lt, ct, ut, mt = {
				playerName: "player",
				levelProgress: [],
				killCountHighScore: 0,
				daysCountHighScore: 0,
				achievements: []
			},
			dt = !0,
			pt = !1,
			ht = !1,
			gt = 0,
			ft = 0,
			yt = -1,
			bt = e.AssetResolutionEnum.VLoRes,
			vt = {
				current: 0,
				total: 0
			},
			xt = [{
				time: 0,
				direction: 0,
				maxTime: .2,
				speed1: 2,
				speed2: 2
			}, {
				time: 0,
				direction: 0,
				maxTime: .5,
				speed1: 1,
				speed2: 1.5
			}, {
				time: 0,
				direction: 0,
				maxTime: .7,
				speed1: 1,
				speed2: 2
			}, {
				time: 0,
				direction: 0,
				maxTime: .7,
				speed1: 2,
				speed2: 4
			}];
		e.getScaleUnit = function() {
			return T
		}, e.getCurrentGameState = function() {
			return I
		}, e.getCanvasWidth = function() {
			return k.width
		}, e.getCanvasHeight = function() {
			return k.height
		}, e.getIntroTime = function() {
			return Y
		}, e.getMaxIntroTime = function() {
			return J
		}, e.getMenuSetupTime = function() {
			return V
		}, e.getMaxMenuSetupTime = function() {
			return K
		}, e.getTitleHeartbeat = function() {
			return xt[1]
		}, e.getWeaponHeartbeat = function() {
			return xt[2]
		}, e.getCarHeartbeat = function() {
			return xt[3]
		}, e.getMenuEntities = function() {
			return et
		}, e.getCurrentMenuType = function() {
			return Q
		}, e.getLevelItemData = function() {
			return at
		}, e.getMenuAchievementItems = function() {
			return ot
		}, e.getMenuSurvivalItems = function() {
			return rt
		}, e.getMenuPageIndex = function() {
			return tt
		}, e.getMenuPageTime = function() {
			return nt
		}, e.getMenuPageDirection = function() {
			return it
		}, e.getShowCredits = function() {
			return lt
		}, e.setShowCredits = function(e) {
			lt = e
		}, e.getConfirmCommand = function() {
			return st
		}, e.getLockedDialogTime = function() {
			return gt
		}, e.getMenuHudItems = function() {
			return ct
		}, e.getLevelHudItems = function() {
			return ut
		}, e.getSavedData = function() {
			return mt
		}, e.getCurrentLevel = function() {
			return j ? j.currentLevel : 0
		}, e.setPaused = function(e) {
			L = e
		}, e.getAchievementDialogTime = function() {
			return ft
		}, e.getAchievementDialogMaxTime = function() {
			return 3.2
		}, e.getAchievementId = function() {
			return yt
		}, e.getGameLoadingData = function() {
			return vt
		}, e.setAssetsResolution = function(e) {
			bt = e
		}, e.setFitToScreen = function(e) {
			pt = e
		}, e.loadData = function(n) {
			if (n === t) "undefined" != typeof window.external && "undefined" != typeof window.external.notify ? window.external.notify("commandLoadData") : ("undefined" != typeof window.localStorage ? (n =  window.localStorage.getItem("gameData"), (null === n || "" === n) && (n = '{ "playerName": "player", "levelProgress": [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "killCountHighScore" : 0, "daysCountHighScore" : 0, "achievements": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }')) : n = '{ "playerName": "player", "levelProgress": [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "killCountHighScore" : 0, "daysCountHighScore" : 0, "achievements": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }', e.loadData(n));
			else
				for (mt = JSON.parse(n), n = 0; n < mt.achievements.length; n += 1) 0 === n && mt.levelProgress[15] === e.LevelStatusEnum.Passed ? mt.achievements[n] = e.LevelStatusEnum.Passed : 4 === n && mt.levelProgress[19] === e.LevelStatusEnum.Passed ? mt.achievements[n] = e.LevelStatusEnum.Passed : 11 === n && 100 <= mt.killCountHighScore ? mt.achievements[n] = e.LevelStatusEnum.Passed : 12 === n && 200 <= mt.killCountHighScore ? mt.achievements[n] = e.LevelStatusEnum.Passed : 5 === n && 1 <= mt.daysCountHighScore ? mt.achievements[n] = e.LevelStatusEnum.Passed : 6 === n && 3 <= mt.daysCountHighScore ? mt.achievements[n] = e.LevelStatusEnum.Passed : 7 === n && mt.levelProgress[1] === e.LevelStatusEnum.Passed && (mt.achievements[n] = e.LevelStatusEnum.Passed)
		}, e.saveData = function() {
			"undefined" != typeof window.external && "undefined" != typeof window.external.notify ? window.external.notify("commandSaveData:" + JSON.stringify(mt)) : window.localStorage.setItem("gameData", JSON.stringify(mt))
		}, e.playAchievementToaster = function(t) {
			0 === ft && (ft = 3.2, yt = t, e.SoundManager.playAward())
		}, e.initialize = function() {
			switch (bt) {
				case e.AssetResolutionEnum.LoRes:
					x = 683, E = 384, T = .015625, w = "683";
					break;
				case e.AssetResolutionEnum.HiRes:
					x = 1366, E = 768, T = .0078125, w = "1366"
			}
			e.loadData(), st = e.CommandEnum.None, e.setupTileOffsets(), k = document.getElementById("canvas"), D = k.getContext("2d"), $("#canvas").bind("vmousedown", f), $("#canvas").bind("vmouseup", v), M = new e.Camera, O = new e.Camera, W = new e.Camera, X = new e.Camera, X.sx = 1, X.sy = 1, X.update(), e.resetDisplay(), e.Resources.loadingScreenImage = new Image, e.Resources.loadingScreenImage.src = "assets/img/" + w + "/loadingScreen_0.png", e.Resources.loadingScreenImage1 = new Image, e.Resources.loadingScreenImage1.src = "assets/img/" + w + "/loadingScreen_1.png", e.Resources.loadingScreenImage2 = new Image, e.Resources.loadingScreenImage2.src = "assets/img/" + w + "/loadingScreen_2.png", e.Resources.loadingScreenImage3 = new Image, e.Resources.loadingScreenImage3.src = "assets/img/" + w + "/loadingScreen_3.png", e.Resources.loadingScreenImage5 = new Image, e.Resources.loadingScreenImage5.onload = i, e.Resources.loadingScreenImage5.src = "assets/img/" + w + "/loadingScreen_5.png", I = e.GameStateEnum.GamePreLoading, r()
		}, e.resetDisplay = function() {
			var e, t;
			k.width = x, k.height = E, pt ? (C = $(window).width() / k.width, S = $(window).height() / k.height) : (e = $(window).width() / k.width, t = $(window).height() / k.height, C = S = Math.min(e, t)), k.style.width = x * C + "px", k.style.height = E * S + "px", $("canvas").center(), M && (M.sx = 1 / T, M.sy = 1 / T, M.update())
		}, e.applyHudCameras = function() {
			D.setTransform.apply(D, M.matrix), D.transform.apply(D, X.matrix)
		}, e.applySceneCameras = function() {
			D.setTransform.apply(D, M.matrix), D.transform.apply(D, O.matrix), D.transform.apply(D, W.matrix)
		}, e.applyVeryFarParallaxCameras = function() {
			D.translate(.15 * -W.x, .15 * -W.y)
		}, e.applyFarParallaxCameras = function() {
			D.translate(.3 * -W.x, .3 * -W.y)
		}, e.applyNearParallaxCameras = function() {
			D.translate(.5 * -W.x, .5 * -W.y)
		}, e.applyVeryNearParallaxCameras = function() {
			D.translate(.75 * -W.x, .75 * -W.y)
		}, e.applyHereParallaxCameras = function() {
			D.translate(-W.x, -W.y)
		}, e.screenToHud = function(t) {
			var n = new e.Camera;
			return n.multiply(M), n.multiply(X), n.screenToCamera(t.x, t.y)
		}, e.screenToScene = function(t) {
			var n = new e.Camera;
			return n.multiply(M), n.multiply(O), n.multiply(W), n.translate(-W.x, -W.y), n.screenToCamera(t.x, t.y)
		}, e.cancelConfirmDialog = function() {
			/*ih5game.start(),*/ L = R, st = e.CommandEnum.None;
			for (var t = 0; t < ut.length;) ut[t].type === e.CommandEnum.ConfirmNo || ut[t].type === e.CommandEnum.ConfirmYes ? ut.splice(t, 1) : t += 1
		}, e.displayMenuConfirmDialog = function() {
			/*ih5game.pause(),*/ st === e.CommandEnum.None ? (st = e.CommandEnum.Menu, g(), R = L, L = !0) : e.cancelConfirmDialog()
		}, e.showMainScreen = function() {
			/*ih5game.stop(),*/ I !== e.GameStateEnum.GameIntro && I !== e.GameStateEnum.GameStart && (I !== e.GameStateEnum.GameMenu || I === e.GameStateEnum.GameMenu && Q !== e.MenuTypeEnum.ShowMain && Q !== e.MenuTypeEnum.None) && I !== e.GameStateEnum.GameLoading && (I !== e.GameStateEnum.GameMenu && I !== e.GameStateEnum.GameStart && e.SoundManager.playMainMusic(), I = e.GameStateEnum.GameMenu, tt = 0, V = K = 3, Q = e.MenuTypeEnum.ShowMain, nt = 0, it = e.DirectionEnum.None)
		}
	}(window.ZCJGame = window.ZCJGame || {}), window.requestAnimationFrame || (window.requestAnimationFrame = function() {
		return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
			window.setTimeout(e, 1e3 / 60)
		}
	}()), $(document).on("pageinit", function() {
		$(".ui-loader").hide(), $("body").css("overflow", "hidden"), $("body > *").css("outline", "none"), navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i), ZCJGame.setAssetsResolution(ZCJGame.AssetResolutionEnum.LoRes)
	}), $(window).resize(function() {
		ZCJGame.resetDisplay(), checkOrientation()
	}), $(document).on("touchmove", function(e) {
		e.preventDefault()
	});