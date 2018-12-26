(function() {
  'use strict';
  var _config = window.disqus_config;
  window.disqus_config = function() {
    if (_config) {
      try {
        _config.call(this);
      } catch (err) {
        console.error('There was a problem with the Disqus configuration.', err);
      }
    }
    this.server_side = {
      "bin": "embed:promoted_discovery:dynamic:network_default_hidden:fallthrough",
      "service": "dynamic",
      "bottom_placement_url": "",
      "variant": "fallthrough",
      "forum_id": "5615812",
      "inthread_leading_comment_count": "",
      "sandbox_ads": "1",
      "inthread_show_after_comment": "3",
      "inthread_repeat_comment_count": "",
      "experiment": "network_default_hidden",
      "home_discovery_enabled": "",
      "inthread_placement_url": "",
      "top_placement_url": "",
      "inthread_multiple_ads": "",
      "can_disable_ads": "1",
      "inthread_minimum_comment_count": "4",
      "inthread_trailing_comment_count": "",
      "is_private": "",
      "t": "1544195574"
    };
  };
})();
! function(a, b) {
  function c(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c
    }
    return Array.from(a)
  }

  function d(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
  }

  function d(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
  }
  var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba = {},
    ca = {},
    da = {},
    ea = {},
    fa = {},
    ga = {},
    ha = {},
    ia = {},
    ja = {};
  e = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }, f = function(a) {
    return function(b, c) {
      var d = b.length,
        e = Array.prototype.forEach;
      if (isNaN(d))
        for (var f in b) a(b, f) && c(b[f], f, b);
      else if (e) e.call(b, c);
      else
        for (var g = 0; g < d; g++) c(b[g], g, b)
    }
  }(e), ba = function(a) {
    var c = f;
    return a = function(a) {
      var d = [];
      return c(a, function(a, c) {
        a !== b && d.push(encodeURIComponent(c) + (null === a ? "" : "=" + encodeURIComponent(a)))
      }), d.join("&")
    }
  }(ba), ca = function(a) {
    var b = ba;
    return a = function c(a, d, e) {
      if (d && (a.indexOf("?") === -1 ? a += "?" : "&" !== a.charAt(a.length - 1) && (a += "&"), a += b(d)), e) {
        var f = {};
        return f[(new Date).getTime()] = null, c(a, f)
      }
      var g = a.length;
      return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a
    }
  }(ca), da = function(b) {
    var c = ca,
      d = a.document,
      e = d.head || d.getElementsByTagName("head")[0] || d.body;
    return b = function(a, b, f, g) {
      var h = d.createElement("script");
      h.src = c(a, b, f), h.async = !0, h.charset = "UTF-8", h.onload = g, e.appendChild(h)
    }
  }(da), g = function() {
    var b = "adsbox",
      c = 100,
      d = a.document;
    return function(a) {
      if (a) {
        var e = d.createElement("div");
        e.innerHTML = "&nbsp;", e.className = b, d.body.appendChild(e), setTimeout(function() {
          a(0 === e.offsetHeight), d.body.removeChild(e)
        }, c)
      }
    }
  }(), h = function(a) {
    try {
      return a.self !== a.top
    } catch (b) {
      return !0
    }
  }, i = function(a, b) {
    return function(c) {
      return a(Array.prototype.slice.call(arguments, 1), function(a) {
        for (var d in a) b(a, d) && (c[d] = a[d])
      }), c
    }
  }(f, e), j = function(c) {
    function d(a) {
      var b = a.split("."),
        c = b.length > 2 ? b[b.length - 2] : "";
      return c.match(/^[0-9a-f]{32}$/i) && c
    }

    function e(b) {
      (new a.Image).src = j(k + "/stat.gif", {
        event: b
      })
    }

    function g(b) {
      (new a.Image).src = j(k + "/event.gif", b)
    }

    function h(c) {
      var d = new a.URLSearchParams;
      i(c, function(a, c) {
        a !== b && d.append(c, a)
      });
      var e = new a.XMLHttpRequest;
      e.open("POST", k + "/event.json", !0), e.withCredentials = !0, e.send(d)
    }
    var i = f,
      j = ca,
      k = "https://referrer.disqus.com/juggler";
    return {
      getLoaderVersionFromUrl: d,
      logStat: e,
      reportJester: g,
      reportJesterPOST: h
    }
  }({}), k = function() {
    function b(b) {
      b = b || {};
      var c = b.Math || a.Math,
        d = b.Date || a.Date;
      try {
        var e = (new d).getTimezoneOffset(),
          f = 1,
          g = a.screen;
        g && g.availWidth ? f = g.availWidth * g.availHeight + g.colorDepth : g && g.width && (f = g.width * g.height);
        var h = a.document.documentElement,
          i = h.clientWidth * h.clientHeight;
        return c.abs(17 * e + 25 * f - i)
      } catch (j) {
        return 1
      }
    }
    return {
      get: b
    }
  }(), l = function(b) {
    function c(b) {
      b = b || {};
      var c = b.Uint32Array || a.Uint32Array,
        d = b.crypto || a.crypto,
        e = b.Math || a.Math;
      try {
        var f = new c(1);
        return d.getRandomValues(f), f[0]
      } catch (g) {
        return e.floor(1e9 * e.random())
      }
    }

    function d() {
      var b = a.performance,
        c = b && b.timing;
      if (!c) return 1e5;
      var d = c.domainLookupEnd - c.domainLookupStart,
        e = c.connectEnd - c.connectStart,
        f = c.responseStart - c.navigationStart;
      return 11 * d + 13 * e + 17 * f
    }

    function e(e) {
      e = e || {};
      var f = e.Math || a.Math,
        g = Number((new Date).getTime().toString().substring(3)),
        h = f.abs(g + d() - b.get()).toString(32);
      return h += c(e).toString(32)
    }
    return {
      generate: e
    }
  }(k), m = function(b) {
    var c = a.document,
      d = c.createElement("iframe");
    return d.style.display = "none",
      function(a, b) {
        var e = b && b[a] || null;
        try {
          return d.parentNode !== c.body && c.body.appendChild(d), d.contentWindow[a] || e
        } catch (f) {
          return e
        }
      }
  }({}), n = function(a) {
    return "[object String]" === Object.prototype.toString.call(a)
  }, o = function() {
    return a.getComputedStyle ? function(b, c, d) {
      try {
        return a.document.defaultView.getComputedStyle(b, null).getPropertyValue(c)
      } catch (e) {
        return null
      }
    } : function(a, b, c) {
      return a.currentStyle[b] || a.currentStyle[c]
    }
  }(), p = function(a) {
    function b(a) {
      return a.replace(/\s+/g, "").toLowerCase()
    }
    var c = f,
      d = n,
      e = i;
    return function(a, f, g) {
      var h = {};
      d(f) ? h[f] = g : h = f;
      var i = e({}, h);
      c(i, function(a, c) {
        var d = b(c);
        d !== c && (delete i[c], i[d] = a), null === a && (i[d] = ""), void 0 === a && delete i[d]
      });
      var j = a.style;
      c(i, function(a, b) {
        j.setProperty(b, String(a), "important")
      })
    }
  }({}), q = function(b) {
    function c(a) {
      return a.replace(/\s+/g, "").toLowerCase()
    }

    function d(a) {
      return a = a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/, "#$1$1$2$2$3$3"), a = a.slice(1), {
        red: parseInt(a.slice(0, 2), 16),
        green: parseInt(a.slice(2, 4), 16),
        blue: parseInt(a.slice(4, 6), 16)
      }
    }

    function e(a) {
      var b = a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
      return {
        red: parseInt(b[1], 10),
        green: parseInt(b[2], 10),
        blue: parseInt(b[3], 10)
      }
    }

    function f(a) {
      var b = a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);
      return {
        red: parseInt(b[1], 10),
        green: parseInt(b[2], 10),
        blue: parseInt(b[3], 10),
        alpha: parseFloat(b[4])
      }
    }

    function g(b, c, d, e) {
      return c = a.document.createElement(c), i(c, {
        visibility: "hidden",
        color: d
      }), b.appendChild(c), d = e(c), b.removeChild(c), d
    }

    function h(b, d) {
      d = d || {};
      var f = d.container || a.document.body;
      return a.getComputedStyle ? (b = g(f, "span", b, function(b) {
        return a.getComputedStyle(b, null).getPropertyValue("color")
      }), e(c(b))) : (b = g(f, "textarea", b, function(a) {
        return a.createTextRange().queryCommandValue("ForeColor")
      }), {
        red: 255 & b,
        blue: b >>> 16,
        green: (65280 & b) >>> 8
      })
    }
    var i = p;
    return function(a, b) {
      a = c(a);
      var g;
      if ("transparent" === a) return {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
      };
      if ("#" === a.charAt(0)) g = d;
      else if ("rgba(" === a.slice(0, 5)) g = f;
      else if ("rgb(" === a.slice(0, 4)) g = e;
      else {
        if (!/^[a-z]+$/.test(a)) throw new Error("parseColor received unparseable color: " + a);
        g = h
      }
      return g(a, b)
    }
  }({}), r = function(c) {
    function d(a) {
      if (!a || "embed.js" !== a.substring(a.length - 8)) return null;
      for (var b, c = [/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_-]+)/i, /(https?:)?\/\/(www\.)?([\w_-]+)\.disqus\.com/i, /(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_-]+)/i, /(https?:)?\/\/(www\.)?([\w_-]+)\.dev\.disqus\.org/i], d = c.length, e = 0; e < d; e++)
        if (b = a.match(c[e]), b && b.length && 4 === b.length) return b[3];
      return null
    }

    function e(a, b) {
      var c, e, f, g = a.getElementsByTagName("script"),
        h = g.length;
      b = b || d;
      for (var i = h - 1; i >= 0; i--)
        if (c = g[i], e = c.getAttribute ? c.getAttribute("src") : c.src, f = b(e), null !== f) return f.toLowerCase();
      return null
    }

    function f(a, b) {
      var c, d, e = 0,
        f = new Array(a.length);
      for (c = 0; c <= a.length; c++)
        for (f[c] = new Array(b.length), d = 0; d <= b.length; d++) f[c][d] = 0;
      for (c = 0; c < a.length; c++)
        for (d = 0; d < b.length; d++) a[c] === b[d] && (f[c + 1][d + 1] = f[c][d] + 1, f[c + 1][d + 1] > e && (e = f[c + 1][d + 1]));
      return e
    }

    function g() {
      for (var a = x.getElementsByTagName("h1"), c = x.title, d = c.length, e = c, g = .6, h = function(a) {
          var h, i = a.textContent || a.innerText;
          null !== i && i !== b && (h = f(c, i) / d, h > g && (g = h, e = i))
        }, i = 0; i < a.length; i++) h(a[i]);
      return e
    }

    function h(a) {
      return a.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/['"]/g, "")
    }

    function i(a) {
      var b = 0,
        c = 1,
        d = 2;
      if (!w("atob") || !w("requestAnimationFrame")) return c;
      try {
        a.postMessage("ping", "*")
      } catch (e) {
        return d
      }
      return b
    }

    function j(a, b, c) {
      c = c || b;
      var d = u(a, b, c);
      return !d || /color/i.test(b) && 0 === v(d).alpha ? a && j(a.parentNode, b, c) || d : d || null
    }

    function k(a, b, c, d) {
      t(b) && (b = x.createElement(b));
      var e = null;
      return b.style.visibility = "hidden", a.appendChild(b), e = j(b, c, d), a.removeChild(b), e
    }

    function l(a) {
      for (var b, c = k(a, "span", "font-family", "fontFamily"), d = c.split(","), e = {
          courier: 1,
          times: 1,
          "times new roman": 1,
          georgia: 1,
          palatino: 1,
          serif: 1
        }, f = 0; f < d.length; f++)
        if (b = h(d[f]), e.hasOwnProperty(b)) return !0;
      return !1
    }

    function p(a) {
      var b = x.createElement("a");
      return b.href = Number(new Date), v(k(a, b, "color"), {
        container: a
      })
    }

    function r(a) {
      var b = a.red,
        c = a.green,
        d = a.blue;
      if (a.hasOwnProperty("alpha")) {
        var e = a.alpha,
          f = function(a) {
            return Math.round(a * e + 255 * (1 - e))
          };
        b = f(b), c = f(c), d = f(d)
      }
      return (299 * b + 587 * c + 114 * d) / 1e3
    }

    function s(a) {
      var b = k(a, "span", "background-color", "backgroundColor"),
        c = v(b, {
          container: a
        });
      return 0 === c.alpha ? "light" : r(c) < 128 ? "dark" : "light"
    }
    var t = n,
      u = o,
      v = q,
      w = m,
      x = a.document,
      y = function() {
        var a, b, c = function() {
          return !1
        };
        if ("hidden" in x) a = "hidden", b = "visibilitychange";
        else {
          if (!("webkitHidden" in x)) return {
            isHidden: c,
            listen: c,
            stopListening: c
          };
          a = "webkitHidden", b = "webkitvisibilitychange"
        }
        return {
          isHidden: function() {
            return x[a]
          },
          listen: function(a) {
            return x.addEventListener(b, a)
          },
          stopListening: function(a) {
            return x.removeEventListener(b, a)
          }
        }
      }(),
      z = function() {
        var a = x.createElement("div");
        a.style.visibility = "hidden", a.style.width = "100px", a.style.msOverflowStyle = "scrollbar", x.body.appendChild(a);
        var b = a.offsetWidth;
        a.style.overflow = "scroll";
        var c = x.createElement("div");
        c.style.width = "100%", a.appendChild(c);
        var d = c.offsetWidth;
        return a.parentNode.removeChild(a), b - d
      },
      A = {
        isIE: function() {
          return Boolean(x.documentMode)
        },
        isSafari: function() {
          var b = a.navigator.userAgent.toLowerCase();
          return b.indexOf("safari") > -1 && b.indexOf("chrome") === -1
        },
        isCrawler: function(c) {
          c === b && (c = a);
          var d = c.navigator.userAgent;
          return /bot|crawl|slurp|spider|facebookexternalhit|embedly|feedly|pinterest/i.test(d)
        }
      },
      B = {
        getItem: function(b) {
          try {
            return a.localStorage.getItem(b)
          } catch (c) {}
        },
        setItem: function(b, c) {
          try {
            return a.localStorage.setItem(b, c)
          } catch (d) {}
        }
      },
      C = 1,
      D = function(a) {
        if (a.nodeType === C) {
          var b = u(a, "max-height", "maxHeight"),
            c = u(a, "overflow-y", "overflowY");
          return b && "none" !== b && c && "visible" !== c
        }
      },
      E = 4,
      F = function(a) {
        if (a.nodeType === C) return a.scrollHeight - a.clientHeight > E
      },
      G = function() {
        if (x.querySelector) {
          var a = x.querySelector("link[rel=canonical]");
          if (a) return a.href
        }
      };
    return {
      MAX_Z_INDEX: 2147483647,
      getShortnameFromUrl: d,
      getForum: e,
      guessThreadTitle: g,
      getContrastYIQ: r,
      getColorScheme: s,
      getElementStyle: k,
      getAnchorColor: p,
      normalizeFontValue: h,
      isSerif: l,
      getBrowserSupport: i,
      pageVisibility: y,
      getScrollbarWidth: z,
      browser: A,
      storage: B,
      appearsToHideContent: D,
      hasOverflow: F,
      getCanonicalUrl: G
    }
  }({}), s = function(a) {
    var c = f,
      d = l,
      e = m,
      g = r,
      h = function(a, c) {
        this.win = a, this.configurator = c, this.config = {
          page: {
            url: b,
            title: b,
            slug: b,
            category_id: b,
            identifier: b,
            language: b,
            integration: b,
            api_key: b,
            remote_auth_s3: b,
            author_s3: b
          },
          experiment: {
            enable_scroll_container: !0,
            force_auto_styles: b,
            sort_order: b,
            force_mobile: b
          },
          server_side: {
            service: "static",
            experiment: "default",
            variant: "control",
            top_placement_url: b,
            bottom_placement_url: b,
            inthread_placement_url: b,
            outside_placement_url: b,
            inthread_minimum_comment_count: b,
            inthread_show_after_comment: b,
            inthread_leading_comment_count: b,
            inthread_repeat_comment_count: b,
            inthread_trailing_comment_count: b,
            inthread_count_children: b,
            inthread_multiple_ads: b,
            sandbox_ads: b,
            can_disable_ads: b,
            home_discovery_enabled: b,
            forum_id: b,
            is_private: b
          },
          discovery: {
            disable_all: b,
            disable_promoted: b,
            sponsored_comment_id: b,
            preview: !1,
            adsFixture: b,
            pdFixture: b
          },
          strings: b,
          sso: {},
          callbacks: {
            preData: [],
            preInit: [],
            onInit: [],
            afterRender: [],
            onReady: [],
            onNewComment: [],
            preReset: [],
            onPaginate: [],
            onIdentify: [],
            beforeComment: []
          }
        }
      };
    h.DISQUS_GLOBALS = ["shortname", "identifier", "url", "title", "integration", "slug", "category_id"];
    var i = h.prototype;
    return i.getContainer = function() {
      var a = this.win;
      return a.document.getElementById(a.disqus_container_id || "disqus_thread")
    }, i.runConfigurator = function() {
      var a = this.configurator || this.win.disqus_config;
      if ("function" == typeof a) try {
        a.call(this.config)
      } catch (b) {}
    }, i.getValuesFromGlobals = function() {
      var a, b = this.win,
        d = this.config,
        e = d.page;
      c(h.DISQUS_GLOBALS, function(a) {
        var c = b["disqus_" + a];
        "undefined" != typeof c && (e[a] = c)
      }), this.runConfigurator(), d.forum || (a = e.shortname, d.forum = a ? a.toLowerCase() : g.getForum(b.document))
    }, i.toJSON = function() {
      var a, b = this.win,
        c = this.config,
        f = c.page,
        h = this.getContainer(),
        i = g.getBrowserSupport(b);
      return this.getValuesFromGlobals(), (c.server_side.outside_placement_url || c.server_side.top_placement_url || c.server_side.inthread_placement_url || c.server_side.bottom_placement_url) && (a = d.generate({
        Math: e("Math", b),
        crypto: e("crypto", b),
        Uint32Array: e("Uint32Array", b),
        Date: e("Date", b)
      })), {
        impressionId: a || null,
        container: h,
        forum: c.forum,
        sortOrder: c.experiment.sort_order || g.storage.getItem("disqus.sort") || "default",
        language: c.language,
        typeface: g.isSerif(h) ? "serif" : "sans-serif",
        anchorColor: g.getAnchorColor(h),
        colorScheme: g.getColorScheme(h),
        canonicalUrl: g.getCanonicalUrl(),
        url: f.url || b.location.href.replace(/#.*$/, ""),
        title: f.title,
        documentTitle: g.guessThreadTitle(),
        slug: f.slug,
        category: f.category_id,
        identifier: f.identifier,
        integration: f.integration,
        discovery: c.discovery,
        experimentName: c.server_side.experiment,
        experimentVariant: c.server_side.variant,
        experimentService: c.server_side.service,
        forumId: c.server_side.forum_id,
        topPlacementUrl: c.server_side.top_placement_url,
        bottomPlacementUrl: c.server_side.bottom_placement_url,
        inthreadPlacementUrl: c.server_side.inthread_placement_url,
        outsidePlacementUrl: c.server_side.outside_placement_url,
        inthreadMinimumCommentCount: c.server_side.inthread_minimum_comment_count,
        inthreadShowAfterComment: c.server_side.inthread_show_after_comment,
        inthreadLeadingCommentCount: c.server_side.inthread_leading_comment_count,
        inthreadRepeatCommentCount: c.server_side.inthread_repeat_comment_count,
        inthreadTrailingCommentCount: c.server_side.inthread_trailing_comment_count,
        inthreadCountChildren: c.server_side.inthread_count_children,
        inthreadMultipleAds: c.server_side.inthread_multiple_ads,
        sandboxAds: c.server_side.sandbox_ads,
        canDisableAds: c.server_side.can_disable_ads,
        homeDiscoveryEnabled: c.server_side.home_discovery_enabled,
        apiKey: f.api_key,
        remoteAuthS3: f.remote_auth_s3,
        sso: c.sso,
        unsupported: i,
        degraded: Boolean(i) || g.browser.isCrawler(),
        callbacks: c.callbacks,
        enableScrollContainer: c.experiment.enable_scroll_container,
        forceAutoStyles: c.experiment.force_auto_styles,
        forceMobile: c.experiment.force_mobile,
        isPrivate: c.server_side.is_private
      }
    }, {
      HostConfig: h
    }
  }({}), t = function() {
    var a;
    return a = "undefined" == typeof console ? function() {} : "function" == typeof console.log ? function() {
      return console.log(Array.prototype.slice.call(arguments, 0).join(" "))
    } : function() {
      return console.log.apply(console, arguments)
    }, {
      log: a
    }
  }(), u = function(a) {
    return function(b) {
      return Boolean(b && (b.offsetWidth || b.offsetHeight || b.getClientRects().length) && "hidden" !== a(b, "visibility"))
    }
  }(o), v = function(a, b, c) {
    var d = function() {
      var e = a();
      return e ? void b(e) : void setTimeout(d, c)
    };
    d()
  }, w = function(b) {
    function c(a) {
      return f.getElementById(a) || f.body || f.documentElement
    }

    function d(a) {
      return g.href = a, g.hostname
    }

    function e(a, b) {
      b = b || f.documentElement;
      for (var c = a, d = 0, e = 0; c && c !== b;) d += c.offsetLeft, e += c.offsetTop, c = c.offsetParent;
      return {
        top: e,
        left: d,
        height: a.offsetHeight,
        width: a.offsetWidth
      }
    }
    var f = a.document,
      g = f.createElement("a");
    return {
      getContainer: c,
      getHost: d,
      getOffset: e
    }
  }({}), x = function() {
    var a = 1e4,
      b = Math.floor(Math.random() * a + 1);
    return function(a) {
      b += 1;
      var c = String(b);
      return a ? a + c : c
    }
  }(), y = function(a) {
    var b = f,
      c = e,
      d = x,
      g = function(a) {
        var b, c = !1;
        return function() {
          return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
      },
      h = Object.keys || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var d in a) c(a, d) && (b[b.length] = d);
        return b
      },
      i = [].slice,
      j = {
        on: function(a, b, c) {
          if (!l(this, "on", a, [b, c]) || !b) return this;
          this._events = this._events || {};
          var d = this._events[a] || (this._events[a] = []);
          return d.push({
            callback: b,
            context: c,
            ctx: c || this
          }), this
        },
        once: function(a, b, c) {
          if (!l(this, "once", a, [b, c]) || !b) return this;
          var d = this,
            e = g(function() {
              d.off(a, e), b.apply(this, arguments)
            });
          return e._callback = b, this.on(a, e, c)
        },
        off: function(a, b, c) {
          var d, e, f, g, i, j, k, m;
          if (!this._events || !l(this, "off", a, [b, c])) return this;
          if (!a && !b && !c) return this._events = {}, this;
          for (g = a ? [a] : h(this._events), i = 0, j = g.length; i < j; i++)
            if (a = g[i], f = this._events[a]) {
              if (this._events[a] = d = [], b || c)
                for (k = 0, m = f.length; k < m; k++) e = f[k], (c && c !== e.context || b && b !== e.callback && b !== e.callback._callback) && d.push(e);
              d.length || delete this._events[a]
            }
          return this
        },
        trigger: function(a) {
          if (!this._events) return this;
          var b = i.call(arguments, 1);
          if (!l(this, "trigger", a, b)) return this;
          var c = this._events[a],
            d = this._events.all;
          return c && m(c, b), d && m(d, arguments), this
        },
        stopListening: function(a, b, c) {
          var d = this._listeners;
          if (!d) return this;
          var e = !b && !c;
          "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
          for (var f in d) d[f].off(b, c, this), e && delete this._listeners[f];
          return this
        }
      },
      k = /\s+/,
      l = function(a, b, c, d) {
        if (!c) return !0;
        if ("object" == typeof c) {
          for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
          return !1
        }
        if (k.test(c)) {
          for (var f = c.split(k), g = 0, h = f.length; g < h; g++) a[b].apply(a, [f[g]].concat(d));
          return !1
        }
        return !0
      },
      m = function(a, b) {
        var c, d, e = a.length,
          f = b[0],
          g = b[1],
          h = b[2];
        switch (b.length) {
          case 0:
            for (d = 0; d < e; d++)(c = a[d]).callback.call(c.ctx);
            return;
          case 1:
            for (d = 0; d < e; d++)(c = a[d]).callback.call(c.ctx, f);
            return;
          case 2:
            for (d = 0; d < e; d++)(c = a[d]).callback.call(c.ctx, f, g);
            return;
          case 3:
            for (d = 0; d < e; d++)(c = a[d]).callback.call(c.ctx, f, g, h);
            return;
          default:
            for (d = 0; d < e; d++)(c = a[d]).callback.apply(c.ctx, b)
        }
      },
      n = {
        listenTo: "on",
        listenToOnce: "once"
      };
    return b(n, function(a, b) {
      j[b] = function(b, c, e) {
        var f = this._listeners || (this._listeners = {}),
          g = b._listenerId || (b._listenerId = d("l"));
        return f[g] = b, "object" == typeof c && (e = this), b[a](c, e, this), this
      }
    }), j.bind = j.on, j.unbind = j.off, j
  }({}), z = function(b) {
    var c, d = a,
      e = m;
    return c = "[object JSON]" === d.Object.prototype.toString.call(d.JSON) ? d.JSON : e("JSON", d), c ? c : {}
  }({}), A = function(a) {
    var b = y,
      c = i,
      d = x,
      e = w,
      f = z,
      g = function h(a) {
        a = a || {}, this.state = h.INIT, this.uid = a.uid || d("dsq-frame"), this.origin = a.origin, this.host = e.getHost(this.origin), this.target = a.target, this.sandbox = a.sandbox, this.window = null, h.windows[this.uid] = this, this.on("ready", function() {
          this.state = h.READY
        }, this), this.on("die", function() {
          this.state = h.KILLED
        }, this)
      };
    return c(g, {
      INIT: 0,
      READY: 1,
      KILLED: 2,
      windows: {},
      postMessage: function(a, b, c) {
        return a.postMessage(b, c)
      }
    }), c(g.prototype, b), g.prototype.requiresWindow = function(a) {
      var b = this;
      return function() {
        var c = Array.prototype.slice.call(arguments),
          d = function e() {
            var d = b.window;
            d ? a.apply(b, c) : setTimeout(e, 500)
          };
        b.isReady() ? d() : b.on("ready", d)
      }
    }, g.prototype.sendMessage = function(a, b) {
      var c = f.stringify({
        scope: "client",
        name: a,
        data: b
      });
      this.requiresWindow(function(a) {
        g.postMessage(this.window, a, this.origin)
      })(c)
    }, g.prototype.hide = function() {}, g.prototype.show = function() {}, g.prototype.url = function() {
      return this.target
    }, g.prototype.destroy = function() {
      this.state = g.KILLED, this.off()
    }, g.prototype.isReady = function() {
      return this.state === g.READY
    }, g.prototype.isKilled = function() {
      return this.state === g.KILLED
    }, g
  }({}), B = function(b) {
    var c = p,
      d = i,
      e = A,
      f = w,
      g = a.document,
      h = function(a) {
        e.call(this, a), this.styles = a.styles || {}, this.tabIndex = a.tabIndex || 0, this.title = a.title || "Disqus", this.sandbox = a.sandbox, this.container = a.container, this.elem = null
      };
    return d(h.prototype, e.prototype), h.prototype.load = function() {
      var a = this.elem = g.createElement("iframe");
      a.setAttribute("id", this.uid), a.setAttribute("name", this.uid), a.setAttribute("allowTransparency", "true"), a.setAttribute("frameBorder", "0"), a.setAttribute("scrolling", "no"), this.role && a.setAttribute("role", this.role), a.setAttribute("tabindex", this.tabIndex), a.setAttribute("title", this.title), "string" == typeof this.sandbox && a.setAttribute("sandbox", this.sandbox), this.setInlineStyle(this.styles)
    }, h.prototype.getOffset = function(a) {
      return f.getOffset(this.elem, a)
    }, h.prototype.setInlineStyle = function(a, b) {
      return c(this.elem, a, b)
    }, h.prototype.removeInlineStyle = function(a) {
      var b = this.elem.style;
      return "removeProperty" in b ? void b.removeProperty(a) : void(b[a] = "")
    }, h.prototype.hide = function() {
      this.setInlineStyle("display", "none")
    }, h.prototype.show = function() {
      this.removeInlineStyle("display")
    }, h.prototype.destroy = function() {
      return this.elem && this.elem.parentNode && (this.elem.parentNode.removeChild(this.elem), this.elem = null), e.prototype.destroy.call(this)
    }, h
  }({}), C = function(b) {
    var c = n,
      d = i,
      e = w,
      f = B,
      g = a.document,
      h = function(a) {
        f.call(this, a), this.contents = a.contents || "", this.styles = d({
          width: "100%",
          border: "none",
          overflow: "hidden"
        }, a.styles || {})
      };
    return d(h.prototype, f.prototype), h.prototype.load = function(a) {
      f.prototype.load.call(this);
      var b = this.elem,
        d = c(this.container) ? e.getContainer(this.container) : this.container;
      d.appendChild(b), this.window = b.contentWindow;
      try {
        this.window.document.open()
      } catch (h) {
        b.src = 'javascript:var d=document.open();d.domain="' + g.domain + '";void(0);'
      }
      return this.document = this.window.document, this.document.write(this.contents), this.document.close(), this.updateHeight(), a && setTimeout(a, 0), this
    }, h.prototype.updateHeight = function() {
      var a = this.document.body;
      if (a) {
        var b = a.offsetHeight + "px";
        this.setInlineStyle({
          height: b,
          "min-height": b,
          "max-height": b
        })
      }
    }, h.prototype.show = function() {
      this.setInlineStyle("display", "block"), this.updateHeight()
    }, h.prototype.click = function(a) {
      var b = this,
        c = b.document.body;
      c.addEventListener("click", function(c) {
        a.call(b, c)
      })
    }, h
  }({}), ea = function(a) {
    return a.PAGINATION_CONFIG = {
      ALL: 0,
      COMPACT: 1,
      STANDARD: 2,
      COMFORTABLE: 3,
      COZY: 4,
      TOP_LEVEL: 5
    }, a
  }(ea), D = function(b) {
    var c = o,
      d = a.document.body;
    return function() {
      var a = d.offsetHeight,
        b = parseInt(c(d, "margin-top", "marginTop"), 10);
      b && (a += b);
      var e = parseInt(c(d, "margin-bottom", "marginBottom"), 10);
      return e && (a += e), a
    }
  }({}), E = function(a) {
    var b = i,
      c = ca,
      d = ba,
      e = "default",
      f = {
        lounge: "http://disqus.com/embed/comments/",
        home: "https://disqus.com/home/".replace("home/", "")
      },
      g = function(a) {
        return "https://" + a.replace(/^\s*(\w+:)?\/\//, "")
      },
      h = function(a, h, i) {
        var j = f[a];
        if (!j) throw new Error("Unknown app: " + a);
        var k = g(j),
          l = b({
            base: e
          }, h || {}),
          m = i ? "#" + d(i) : "";
        return c(k, l) + m
      };
    return {
      BASE: e,
      apps: f,
      get: h,
      ensureHTTPSProtocol: g
    }
  }({}), F = function(a) {
    var b = y,
      c = i,
      d = e,
      f = x,
      g = function(a) {
        this.uid = f("dsq-app"), this.settings = a || {};
        var b = [],
          c = this.constructor.prototype;
        do b.unshift(c), c = c.constructor.__super__; while (c);
        for (var e = 0, g = b.length; e < g; e++) c = b[e], d(c, "events") && this.on(c.events, this), d(c, "onceEvents") && this.once(c.onceEvents, this)
      };
    return c(g.prototype, b), g.prototype.destroy = function() {
      this.off(), this.stopListening()
    }, g.extend = function(a, b) {
      var e, f = this;
      e = a && d(a, "constructor") ? a.constructor : function() {
        return f.apply(this, arguments)
      }, c(e, f, b);
      var g = function() {
        this.constructor = e
      };
      return g.prototype = f.prototype, e.prototype = new g, a && c(e.prototype, a), e.__super__ = f.prototype, e
    }, g
  }({}), G = function(a, b, c) {
    c || (c = 0);
    var d, e, f, g, h = 0,
      i = function() {
        h = new Date, f = null, g = a.apply(d, e)
      };
    return function() {
      var j = new Date,
        k = b - (j - h);
      return d = this, e = arguments, k <= 0 ? (clearTimeout(f), f = null, h = j, g = a.apply(d, e)) : f || (f = setTimeout(i, k + c)), g
    }
  }, fa = function(b) {
    var c = y,
      d = n,
      f = e,
      g = i,
      h = B,
      j = A,
      k = w,
      l = z,
      m = a.document;
    b.throttle = G, a.addEventListener("message", function(a) {
      var c;
      try {
        c = l.parse(a.data)
      } catch (d) {
        return
      }
      var e = c.sender,
        g = f(j.windows, e) && j.windows[e];
      g && k.getHost(a.origin) === g.host && (a.origin !== g.origin && (g.origin = a.origin), "host" === c.scope && g.trigger(c.name, c.data), "error" === c.name && b.trigger("error", c.data))
    }), a.addEventListener("hashchange", function() {
      b.trigger("window.hashchange", {
        hash: a.location.hash
      })
    }), a.addEventListener("resize", b.throttle(function() {
      b.trigger("window.resize")
    }, 250, 50)), m.addEventListener("mousemove", b.throttle(function() {
      b.trigger("window.mousemove")
    }, 250, 50));
    var o = function() {
      b.trigger("window.scroll")
    };
    a.addEventListener("scroll", b.throttle(o, 250, 50), !1), m.addEventListener("click", function() {
      b.trigger("window.click")
    });
    var p = b.Popup = function(a) {
      a.uid = a.windowName, j.call(this, a)
    };
    g(p.prototype, j.prototype), p.prototype.load = function() {
      var b = this.window = a.open("", this.uid || "_blank");
      b.location = this.url()
    }, p.prototype.isKilled = function() {
      return j.prototype.isKilled() || this.window.closed
    };
    var q = b.Channel = function(a) {
      var b = this;
      b.window = null, h.call(b, a), this.insertBeforeEl = a.insertBeforeEl, this.insertAfterEl = a.insertAfterEl, b.styles = g({
        width: "1px",
        "min-width": "100%",
        border: "none",
        overflow: "hidden",
        height: "0"
      }, a.styles || {})
    };
    return g(q.prototype, h.prototype), q.prototype.load = function(a) {
      var b = this;
      h.prototype.load.call(b);
      var c = b.elem;
      c.setAttribute("width", "100%"), c.setAttribute("src", this.url()), c.addEventListener("load", function() {
        b.window = c.contentWindow, a && a()
      });
      var e = d(b.container) ? k.getContainer(b.container) : b.container,
        f = (b.insertAfterEl ? b.insertAfterEl.nextSibling : b.insertBeforeEl) || null;
      e.insertBefore(c, f)
    }, q.prototype.destroy = function() {
      return this.window = null, h.prototype.destroy.call(this)
    }, b.on = c.on, b.off = c.off, b.trigger = c.trigger, b
  }(fa), H = function(b) {
    var c = i,
      d = E,
      e = F,
      f = fa,
      g = a.document,
      h = e.extend({
        name: null,
        loaderVersion: null,
        frame: null,
        origin: d.ensureHTTPSProtocol("https://disqus.com"),
        state: null,
        getUrl: function(a, b) {
          return this.loaderVersion && (b = c({
            version: this.loaderVersion
          }, b)), d.ensureHTTPSProtocol(d.get(this.name, a, b))
        },
        getFrameSettings: function() {
          var a = {
              target: this.getUrl(),
              origin: this.origin,
              uid: this.uid,
              sandbox: this.sandbox
            },
            b = this.settings;
          return b.windowName ? a.windowName = b.windowName : a.container = b.container || g.body, a
        },
        getFrame: function() {
          var a = this.getFrameSettings(),
            b = a.windowName ? f.Popup : f.Channel;
          return new b(a)
        },
        setState: function(a) {
          var b = this.constructor;
          return a in b.states && (this.state = b.states[a], void this.trigger("state:" + a))
        },
        init: function() {
          var a, b = this;
          b.frame = a = this.getFrame(), b.listenTo(a, "all", function(c, d) {
            b.trigger("frame:" + c, d, a)
          }), b.trigger("change:frame", a), b.frame.load(function() {
            b.setState("LOADED")
          }), b.setState("INIT")
        },
        destroy: function() {
          var a = this.frame;
          a && (this.stopListening(a), a.destroy()), this.setState("KILLED"), this.frame = null, e.prototype.destroy.call(this)
        },
        events: {
          "frame:ready": function() {
            this.setState("READY")
          }
        }
      }, {
        states: {
          INIT: 0,
          LOADED: 1,
          READY: 2,
          RUNNING: 3,
          KILLED: 4
        }
      });
    return h
  }({}), I = function(b) {
    var c = ea,
      d = o,
      e = D,
      f = u,
      g = H,
      h = fa,
      i = r,
      j = c.PAGINATION_CONFIG,
      k = a.document,
      l = k.querySelector("html"),
      m = g.extend({
        getUrl: function() {
          var b = this.settings,
            c = {
              f: b.forum,
              t_i: b.identifier,
              t_u: b.url || a.location.href,
              t_s: b.slug,
              t_e: b.title,
              t_d: b.documentTitle,
              t_t: b.title || b.documentTitle,
              t_c: b.category,
              s_o: b.sortOrder,
              l: b.language
            };
          return b.unsupported && (c.n_s = b.unsupported), "collapsed_replies" === b.experimentName && "active" === b.experimentVariant && (c.d_m = j.STANDARD), g.prototype.getUrl.call(this, c)
        },
        getFrameInitParams: function(b) {
          var c = this.settings,
            d = {
              permalink: c.permalink,
              anchorColor: c.anchorColor,
              referrer: a.location.href,
              hostReferrer: k.referrer,
              canonicalUrl: c.canonicalUrl,
              colorScheme: c.colorScheme,
              typeface: c.typeface,
              remoteAuthS3: c.remoteAuthS3,
              apiKey: c.apiKey,
              sso: c.sso,
              parentWindowHash: a.location.hash,
              forceAutoStyles: c.forceAutoStyles,
              forceMobile: c.forceMobile,
              layout: c.layout,
              integration: c.integration,
              version: c.version,
              isPrivate: c.isPrivate,
              timestamp: this.timestamp,
              embedLoadTime: this.getBootloaderTimingInfo(),
              isHeightRestricted: this.isHeightRestricted()
            };
          return d.initialPosition = this.getViewportAndScrollStatus(), d
        },
        listenToScrollEvent: function(a) {
          var b = this,
            c = b.getScrollContainer();
          if (c === l) return b.listenTo(h, "window.scroll", a),
            function() {
              b.stopListening(h, "window.scroll", a)
            };
          var d = h.throttle(function() {
            a.call(b)
          }, 250, 50);
          return c.addEventListener("scroll", d),
            function() {
              c.removeEventListener("scroll", d)
            }
        },
        storeScrollContainer: function() {
          if (!this.settings.enableScrollContainer) return void(this.scrollContainer = l);
          var a, b, c = [];
          if (this.potentialScrollContainers)
            for (b = 0; b < this.potentialScrollContainers.length && (a = this.potentialScrollContainers[b], !(a.clientHeight < a.scrollHeight)); b++) a = null;
          else {
            a = this.settings.container;
            do {
              var e = d(a, "overflow-y", "overflowY");
              if (("scroll" === e || "auto" === e) && (c.push(a), a.clientHeight < a.scrollHeight)) break;
              a = a.parentNode
            } while (a && a !== l)
          }
          a && a !== k.body || (a = l), this.potentialScrollContainers || (this.potentialScrollContainers = c);
          var f = this.scrollContainer && this.scrollContainer !== a;
          this.scrollContainer = a, f && (this.stopListeningToScrollEvent && this.stopListeningToScrollEvent(), this.stopListeningToScrollEvent = this.listenToScrollEvent(this.communicateViewportAndScrollStatus))
        },
        getScrollContainer: function() {
          return this.scrollContainer || this.storeScrollContainer(), this.scrollContainer
        },
        getViewportCoords: function() {
          return this.getScrollContainer() === l ? this.getWindowCoords() : this.getScrollContainerCoords()
        },
        getWindowCoords: function() {
          if ("number" == typeof a.pageYOffset) this.getWindowScroll = function() {
            return a.pageYOffset
          }, this.getWindowHeight = function() {
            return a.innerHeight
          };
          else {
            var b = l.clientHeight || l.clientWidth ? l : k.body;
            this.getWindowScroll = function() {
              return b.scrollTop
            }, this.getWindowHeight = function() {
              return b.clientHeight
            }
          }
          return this.getWindowCoords = function() {
            return {
              top: this.getWindowScroll(),
              height: this.getWindowHeight()
            }
          }, this.getWindowCoords()
        },
        getScrollContainerCoords: function() {
          var a = this.getScrollContainer();
          return {
            top: a.scrollTop,
            height: a.clientHeight
          }
        },
        getBootloaderTimingInfo: function() {
          if (a.performance && a.performance.getEntriesByName) {
            var b = k.currentScript ? k.currentScript.src : "https://" + this.settings.forum + ".disqus.com/embed.js",
              c = a.performance.getEntriesByName(b)[0];
            return c && c.duration
          }
        },
        getViewportAndScrollStatus: function() {
          var a = this.frame;
          if (!a || !a.getOffset) return null;
          if (!f(a.elem)) return null;
          var b = this.getViewportCoords();
          return {
            frameOffset: a.getOffset(this.getScrollContainer()),
            pageOffset: b.top,
            height: b.height
          }
        },
        communicateViewportAndScrollStatus: function() {
          var a = this.getViewportAndScrollStatus();
          if (a) {
            var b = a.frameOffset,
              c = b.top,
              d = c + b.height,
              e = a.pageOffset,
              f = a.height,
              g = e + f,
              h = !1,
              i = !1;
            c <= g + f && (h = d >= e, i = h && c <= g);
            var j = this.frame;
            j.sendMessage("window.scroll.always", a), h && j.sendMessage("window.scroll", a), i !== this.wasInViewport && (j.sendMessage(i ? "window.inViewport" : "window.scrollOffViewport"), this.wasInViewport = i)
          }
        },
        getBestNextFrameHeight: function(a) {
          var b = this.getViewportAndScrollStatus();
          if (!b || this.settings.enableScrollContainer || !this.getScrollContainer()) return a;
          var c = b.frameOffset;
          if (a >= c.height) return a;
          var d = e(),
            f = d - (c.height + c.top),
            g = b.pageOffset + b.height - (c.top + f);
          return g > a ? g + 1 : a
        },
        isHeightRestricted: function(a) {
          function b() {
            return i.appearsToHideContent(d) || f && i.appearsToHideContent(e)
          }

          function c() {
            return i.appearsToHideContent(d) && i.hasOverflow(d) || f && i.appearsToHideContent(e) && i.hasOverflow(e)
          }
          a = a || {};
          var d = this.settings.container,
            e = d.parentNode,
            f = e !== l && e !== k.body;
          return a.checkScrollHeight ? c() : b()
        },
        events: {
          "state:INIT": function() {
            this.settings.degraded || (this.settings.windowName || (this.stopListeningToScrollEvent = this.listenToScrollEvent(this.communicateViewportAndScrollStatus), this.listenTo(h, "window.resize", this.communicateViewportAndScrollStatus)), this.timestamp = Number(new Date))
          },
          "state:LOADED": function() {
            var a = this.frame,
              b = a.elem;
            this.settings.degraded ? (a.setInlineStyle("height", "500px"), b.setAttribute("scrolling", "yes"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "yes"), a.show()) : this.settings.windowName || (this.rendered = !1, a.setInlineStyle("height", "0"), b.setAttribute("scrolling", "no"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "no"))
          },
          "frame:ready": function(a, b) {
            var c = this.getFrameInitParams(a, b);
            b.sendMessage("init", c)
          },
          "frame:resize": function(a, b) {
            var c = a.height;
            b.elem && this.rendered && (c = this.getBestNextFrameHeight(c), b.setInlineStyle("height", c + "px"), b.sendMessage("embed.resized")), this.storeScrollContainer(), this.communicateViewportAndScrollStatus()
          },
          "frame:rendered": function(a, b) {
            this.rendered = !0, this.wasInViewport = !1, b.trigger("resize", a), b.sendMessage("embed.rendered")
          },
          "frame:fail": function(a, b) {
            b.elem && b.setInlineStyle("height", a && a.height || "75px")
          },
          "frame:scrollTo": function(b, c) {
            if (c.elem && c.getOffset) {
              var d = this.getScrollContainer(),
                e = c.getOffset(d),
                f = "window" === b.relative ? b.top : e.top + b.top,
                g = this.getViewportCoords();
              !b.force && f > g.top && f < g.top + g.height || (d === l ? a.scrollTo(0, f) : d.scrollTop = f)
            }
          }
        }
      });
    return m
  }({}), J = function(b) {
    var c = o,
      d = ca,
      e = r,
      f = E,
      g = H,
      h = a.document,
      i = /^calc\((.+)\)$/,
      j = g.extend({
        name: "home",
        events: {
          "frame:close": function(b, c) {
            c.hide(), a.focus()
          },
          "frame:openReady": function() {
            this.frame.show(), this.frame.sendMessage("open"), (e.browser.isIE() || e.browser.isSafari()) && this.preventScrolling(), this.frame.elem && this.frame.elem.focus()
          },
          "state:LOADED": function() {
            this.frame.removeInlineStyle("visibility")
          },
          "frame:after:render": function() {
            e.browser.isSafari() && this.triggerHostReflow()
          }
        },
        preventScrolling: function() {
          var a = this.getBodyOverflow(),
            b = h.body.style.marginRight,
            d = h.documentElement.style,
            e = d.overflow;
          this.listenToOnce(this, "frame:close", function() {
            this.setBodyStyles({
              overflow: a,
              marginRight: b
            }), d.overflow = e
          }), this.setBodyStyles({
            overflow: "hidden",
            marginRight: this.calcMargin(c(h.body, "margin-right", "marginRight") || b)
          }), d.overflow = "hidden"
        },
        triggerHostReflow: function() {
          var a = h.createElement("style");
          h.body.appendChild(a), h.body.removeChild(a)
        },
        calcMargin: function(a) {
          var b = a.match(i);
          return b && (a = b[1]), a ? "calc(" + a + " + " + e.getScrollbarWidth() + "px)" : e.getScrollbarWidth() + "px"
        },
        setBodyStyles: function(a) {
          for (var b in a) h.body.style[b] = a[b]
        },
        getBodyOverflow: function() {
          return h.body.style.overflow
        },
        getSecureOrigin: function() {
          return f.ensureHTTPSProtocol(j.SECURE_HOME_URL).split("/").slice(0, 3).join("/")
        },
        getFrameSettings: function() {
          var a = g.prototype.getFrameSettings.call(this);
          return a.role = "dialog", a.origin = this.getSecureOrigin(), a.styles = {
            height: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            left: "auto",
            bottom: "auto",
            "z-index": e.MAX_Z_INDEX,
            visibility: "hidden"
          }, a
        },
        getUrl: function() {
          var a = this.settings.path || "",
            b = this.settings.language,
            c = {
              utm_source: "disqus_embed"
            };
          return b && "en" !== b && (c.l = b), d(f.apps[this.name] + a, c)
        },
        show: function(a) {
          if (!this.frame.isReady()) return void this.once("frame:ready", function() {
            this.show(a)
          }, this);
          var b = {
            disableMOTD: this.settings.disableMOTD,
            path: a
          };
          this.settings.sso && (b.sso = this.settings.sso), this.frame.sendMessage("showPath", b)
        }
      }, {
        SECURE_HOME_URL: "https://disqus.com/home/",
        READY_TIMEOUT: 1e4,
        getInstanceOrLoad: function(a) {
          var b = j.instance;
          return b ? b : (b = j.instance = new j(a), a.preload && b.listenToOnce(b, "state:INIT", function() {
            b.frame.hide()
          }), j.setHomeTimeout(b), b.init(), a.forum && b.listenToOnce(b, "frame:ready", function() {
            b.frame.sendMessage("setForum", a.forum)
          }), b)
        },
        setHomeTimeout: function(a) {
          j.homeTimeoutId && clearTimeout(j.homeTimeoutId);
          var b = j.homeTimeoutId = setTimeout(function() {
            a.frame.destroy(), a.trigger("timeout")
          }, j.READY_TIMEOUT);
          a.listenToOnce(a, "state:READY", function() {
            clearTimeout(b)
          })
        },
        preload: function(a) {
          return a.preload = !0, j.getInstanceOrLoad(a)
        },
        destroy: function() {
          var a = j.instance;
          a && (a.destroy(), j.instance = null)
        },
        show: function(a) {
          var b = j.getInstanceOrLoad(a);
          return b.show(a.path), b
        }
      });
    return {
      show: j.show,
      preload: j.preload,
      destroy: j.destroy,
      HomeApp: j
    }
  }({}), K = function(b) {
    var c = a.document,
      d = f,
      e = da,
      g = i,
      h = u,
      k = v,
      l = j,
      m = C,
      n = w,
      o = I,
      p = fa,
      q = t,
      s = r,
      x = J,
      y = o.extend({
        name: "lounge",
        loaderVersion: l.getLoaderVersionFromUrl("https://c.disquscdn.com/next/embed/lounge.load.5fd2315a4b39b31e1e142ef79d160217.js"),
        indicators: null,
        wasInViewport: !1,
        triggeredSlowEvent: !1,
        events: {
          "state:INIT": function() {
            var b = this.settings,
              d = b.server_side;
            return d && "fallback" === d.service && l.logStat("embed.fallback"), b.degraded ? void l.reportJester({
              imp: b.impressionId,
              experiment: b.experimentName,
              variant: b.experimentVariant,
              service: b.experimentService,
              forum: b.forum,
              version: this.loaderVersion,
              page_url: a.location.href,
              page_referrer: c.referrer,
              event: "activity",
              verb: "load",
              product: "embed",
              zone: "thread",
              section: "degraded",
              adjective: b.unsupported,
              object_type: "thread",
              object_id: b.identifier
            }) : (this.indicators = {}, this.isContainerVisible() ? this.addLoadingAnim() : this.addLoadingAnimOnContainerVisible(), this.bindPublisherCallbacks(), void this.forwardGlobalEvents())
          },
          "state:LOADED": function() {
            this.isContainerVisible() && this.addLoadingAnim()
          },
          "frame:reload": function() {
            a.location.reload()
          },
          "frame:navigate": function(b) {
            a.location.href = b
          },
          "frame:session.identify": function(a) {
            this.trigger("session.identify", a)
          },
          "frame:posts.paginate": function() {
            this.trigger("posts.paginate")
          },
          "frame:posts.count": function(a) {
            this.trigger("posts.count", a)
          },
          "frame:posts.create": function(a) {
            this.trigger("posts.create", {
              id: a.id,
              text: a.raw_message
            })
          },
          "frame:posts.beforeCreate": function(a) {
            this.onBeforePostCreate(a)
          },
          "frame:home.destroy": function() {
            this.destroyHome()
          },
          "frame:home.preload": function(a) {
            this.preloadHome(a)
          },
          "frame:home.show": function(a) {
            this.showHome(a)
          },
          "frame:home.open": function(b) {
            a.location = b
          },
          "frame:indicator:init": function(a, b) {
            if (b.getOffset) {
              for (var c, d, e = ["north", "south"], f = this.indicators, h = b.getOffset().width + "px", i = {
                  width: h,
                  "min-width": h,
                  "max-width": h,
                  position: "fixed",
                  "z-index": s.MAX_Z_INDEX - 1
                }, j = {
                  north: {
                    top: "0"
                  },
                  south: {
                    bottom: "0"
                  }
                }, k = function() {
                  b.sendMessage("indicator:click", this.uid.split("-")[1])
                }, l = 0; l < e.length; l++) {
                d = e[l], c = new m({
                  uid: "indicator-" + d,
                  container: this.settings.container,
                  contents: a[d].contents,
                  styles: g(j[d], i),
                  role: "alert",
                  type: d
                });
                try {
                  c.load()
                } catch (n) {
                  continue
                }
                c.hide(), c.click(k), f[d] = c
              }
              this.on({
                "frame:indicator:show": function(a) {
                  var b = f[a.type];
                  b && (b.document.getElementById("message").innerHTML = a.content, b.show())
                },
                "frame:indicator:hide": function(a) {
                  var b = a && a.type,
                    c = b && f[b];
                  if (c) c.hide();
                  else if (!b)
                    for (var d = 0; d < e.length; d++) b = e[d], c = f[b], c && c.hide()
                }
              })
            }
          },
          "frame:change:sort": function(a) {
            s.storage.setItem("disqus.sort", a)
          },
          "frame:fail frame:rendered": function() {
            this.removeLoadingAnim(), this.setState("RUNNING")
          },
          "frame:fail": function(a) {
            l.logStat("failed_embed.server." + a.code)
          },
          "frame:rendered": function() {
            this.triggeredSlowEvent && l.logStat("rendered_embed.slow")
          },
          "frame:tracking:init": function() {
            var b = this,
              c = 469;
            if (b.settings.isPrivate) {
              var d = function(a, d) {
                d && (a.vendorConsents[c] && a.purposeConsents[1] && a.purposeConsents[2] && a.purposeConsents[3] && a.purposeConsents[4] && a.purposeConsents[5] ? (l.logStat("cmp.consent"), b.frame.sendMessage("cmp.consent")) : l.logStat("cmp.no_consent"))
              };
              if (a.__cmp) {
                l.logStat("cmp.present"), a.__cmp("getVendorConsents", [c], d);
                try {
                  a.__cmp("addEventListener", "onSubmit", function() {
                    a.__cmp("getVendorConsents", [c], d)
                  })
                } catch (e) {}
              }
            }
          }
        },
        onceEvents: {
          "frame:viglink:init": function(b) {
            var c = function() {
              for (var b in a)
                if (0 === b.indexOf("skimlinks") || 0 === b.indexOf("skimwords")) return !0;
              return !1
            };
            if (!(a.vglnk_self || a.vglnk || c())) {
              var d = b.apiUrl,
                f = b.key,
                g = String(b.id);
              null != b.clientUrl && null != d && null != f && null != b.id && (DISQUS.vglnk = {
                api_url: d,
                key: f,
                sub_id: g
              }, a.vglnk_self = "DISQUS.vglnk", e(b.clientUrl))
            }
          }
        },
        getFrameInitParams: function(a, b) {
          var c = o.prototype.getFrameInitParams.call(this, a, b);
          return c.experiment = {
            experiment: this.settings.experimentName,
            variant: this.settings.experimentVariant,
            service: this.settings.experimentService
          }, c.isBehindClick = this.isHeightRestricted() || !h(b.elem), c.startedFullyVisible = !1, this.whenFullyVisible(function() {
            c.startedFullyVisible = !0, b.sendMessage("frame.visible", {})
          }), c.discovery = this.settings.discovery, c.isHostIframed = this.settings.isHostIframed, c.sandboxAds = this.settings.sandboxAds, c.canDisableAds = this.settings.canDisableAds, c.homeDiscoveryEnabled = this.settings.homeDiscoveryEnabled, c.inthreadMinimumCommentCount = this.settings.inthreadMinimumCommentCount, c.inthreadShowAfterComment = this.settings.inthreadShowAfterComment, c.inthreadPlacementUrl = this.settings.inthreadPlacementUrl, c.inthreadLeadingCommentCount = this.settings.inthreadLeadingCommentCount, c.inthreadRepeatCommentCount = this.settings.inthreadRepeatCommentCount, c.inthreadTrailingCommentCount = this.settings.inthreadTrailingCommentCount, c.inthreadCountChildren = this.settings.inthreadCountChildren, c.inthreadMultipleAds = this.settings.inthreadMultipleAds, this.settings.impressionId && (c.impressionId = this.settings.impressionId), (this.settings.discoveryDisabled || this.settings.isHostIframed) && (c.discoveryDisabled = !0), c
        },
        onBeforePostCreate: function(a) {
          var b = {
            text: a.raw_message
          };
          try {
            var c = this.settings.callbacks.beforeComment;
            if (c)
              for (var d = 0; d < c.length; d++) b = c[d](b)
          } catch (e) {
            q.log("Error processing Disqus callback: ", e.toString())
          } finally {
            this.frame.sendMessage("posts.beforeCreate.response", b && b.text)
          }
        },
        destroyHome: function() {
          x.destroy()
        },
        preloadHome: function(a) {
          a.path = "home/preload/";
          var b = this.home = x.preload(this.getHomeData(a));
          this.listenToOnce(b, "frame:ready", function() {
            this.frame.sendMessage("home.ready")
          }), this.handleHomeTimeout(b)
        },
        handleHomeTimeout: function(a) {
          this.listenTo(a, "timeout", function() {
            this.frame.sendMessage("home.timeout")
          })
        },
        showHome: function(a) {
          var b = this.home = x.show(this.getHomeData(a));
          this.listenToOnce(b, "frame:openReady", function() {
            this.frame.sendMessage("home.opened")
          }), this.handleHomeTimeout(b)
        },
        getHomeData: function(a) {
          var b = this.settings;
          return a.language || (a.language = b.language), b.apiKey && b.remoteAuthS3 && (a.sso = {
            apiKey: b.apiKey,
            remoteAuthS3: b.remoteAuthS3
          }), a
        },
        forwardGlobalEvents: function() {
          var a = this;
          a.settings.windowName || (a.listenTo(p, "window.resize", function() {
            a.frame.sendMessage("window.resize")
          }), a.listenTo(p, "window.click", function() {
            a.frame.sendMessage("window.click")
          }), a.listenTo(p, "window.mousemove", function() {
            a.frame.sendMessage("window.mousemove")
          }), a.listenTo(p, "error", function(b) {
            a.on("frame:rendered", function() {
              a.frame.sendMessage("error", b)
            })
          })), a.listenTo(p, "window.hashchange", function(b) {
            a.frame.sendMessage("window.hashchange", b.hash)
          })
        },
        bindPublisherCallbacks: function() {
          var a = this,
            b = a.settings,
            c = y.LEGACY_EVENTS_MAPPING,
            e = b.callbacks;
          e && d(e, function(b, e) {
            c[e] && d(b, function(b) {
              a.on(c[e], b)
            })
          })
        },
        isContainerVisible: function() {
          var a = this.getViewportCoords(),
            b = n.getOffset(this.settings.container, this.getScrollContainer()),
            c = b.top + b.height - a.top;
          return c > 0 && c <= a.height
        },
        pollFullyVisible: function() {
          var a = this;
          if (!a.pollingFullVisibility) {
            a.pollingFullVisibility = !0;
            var b = a.isHeightRestricted(),
              c = {};
            k(function() {
              return a.frame && a.frame.elem ? !(b && !a.rendered) && (h(a.frame.elem) && !a.isHeightRestricted({
                checkScrollHeight: !0
              })) : c
            }, function(b) {
              b !== c && (a.fullyVisible = !0, a.trigger("fullyVisible"))
            }, a.constructor.VISIBILITY_POLL_INTERVAL)
          }
        },
        whenFullyVisible: function(a) {
          this.pollFullyVisible(), this.fullyVisible ? a() : this.once("fullyVisible", a)
        },
        showSlowLoadingMessage: function() {
          var a, b = this;
          if (b.loadingElem) {
            if (s.pageVisibility.isHidden()) return a = function() {
              s.pageVisibility.stopListening(a), b.setSlowLoadingMessageTimer(2e3)
            }, void s.pageVisibility.listen(a);
            b.triggeredSlowEvent = !0, b.state === b.constructor.states.READY ? l.logStat("slow_embed.got_ready") : b.state === b.constructor.states.LOADED ? l.logStat("slow_embed.loaded") : l.logStat("slow_embed.no_ready"), b.loadingElem.firstChild.insertAdjacentHTML("afterend", '<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')
          }
        },
        clearSlowLoadingMessageTimer: function() {
          this.timeout && (clearTimeout(this.timeout), this.timeout = null)
        },
        setSlowLoadingMessageTimer: function(a) {
          var b = this;
          b.clearSlowLoadingMessageTimer(), b.timeout = setTimeout(function() {
            b.showSlowLoadingMessage()
          }, a)
        },
        addLoadingAnimOnContainerVisible: function() {
          var a, b = this;
          a = b.listenToScrollEvent(function() {
            var c = b.isContainerVisible();
            (c || b.state >= b.constructor.states.RUNNING) && a(), c && b.addLoadingAnim()
          })
        },
        addLoadingAnim: function() {
          var a, b, d, e = this,
            f = e.settings.container;
          if (e.loadingElem) return e.loadingElem;
          if (!(e.state >= e.constructor.states.RUNNING || this.settings.degraded)) {
            a = c.createElement("div"), b = c.createElement("div"), d = c.createElement("div"), b.appendChild(d), a.appendChild(b), a.dir = "ltr", a.style.overflow = "hidden";
            var g = "dark" === e.settings.colorScheme,
              h = b.style;
            h.height = "52px", h.width = "54px", h.margin = "0 auto", h.overflow = "hidden", h.position = "relative", h.background = "url(https://c.disquscdn.com/next/embed/assets/img/loader-bg.173909e4737a7481df14d5492b5eeb48.png) no-repeat", g && (h.backgroundPosition = "0 -52px");
            var i = 13,
              j = g ? "rgba(223, 228, 237, .4)" : "rgba(51, 54, 58, .4)",
              k = d.style;
            h.boxSizing = k.boxSizing = "border-box", k.height = k.width = 2 * i + "px", k.position = "absolute", k.top = "13px", k.left = "15px", k.borderWidth = "3px", k.borderStyle = "solid", k.borderColor = j + " transparent", k.borderRadius = i + "px", k.transformOrigin = "50% 50% 0px";
            var m = "transform" in k ? {
              js: "transform",
              css: "transform"
            } : {
              js: "webkitTransform",
              css: "-webkit-transform"
            };
            return k.transition = m.css + " 700s linear", setTimeout(function() {
              k[m.js] = "rotate(360000deg)"
            }, 16), f.appendChild(a), e.loadingElem = a, l.logStat("lounge.loading.view"), e.setSlowLoadingMessageTimer(15e3), e.loadingElem
          }
        },
        removeLoadingAnim: function() {
          var a = this.loadingElem,
            b = this.settings.container;
          this.clearSlowLoadingMessageTimer(), a && a.parentNode === b && (b.removeChild(a), this.loadingElem = null)
        },
        destroy: function() {
          var a = this.indicators;
          this.removeLoadingAnim(), a && a.north && (a.north.destroy(), a.north = null), a && a.south && (a.south.destroy(), a.south = null), o.prototype.destroy.call(this)
        }
      }, {
        LEGACY_EVENTS_MAPPING: {
          onReady: "frame:rendered",
          onNewComment: "posts.create",
          onPaginate: "posts.paginate",
          onCommentCountChange: "posts.count",
          onIdentify: "session.identify"
        },
        VISIBILITY_POLL_INTERVAL: 500
      }),
      z = function(a) {
        return new y(a)
      };
    return {
      Lounge: z
    }
  }({}), L = function(a, b, c) {
    var d, e, f, g, h, i = function() {
      var j = (new Date).getTime() - g;
      j < b && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
    };
    return function() {
      f = this, e = arguments, g = (new Date).getTime();
      var j = c && !d;
      return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
    }
  }, M = function(a, b) {
    for (var c = 0; c < a.length; ++c)
      if (a[c] === b) return c;
    return -1
  }, N = function(a, b, c) {
    for (var d = 0; d < a.length; ++d)
      if (b.call(c, a[d], d, a)) return !0;
    return !1
  }, O = function(a) {
    return "[object Function]" === Object.prototype.toString.call(a)
  }, P = function(a) {
    return function(b, c, d) {
      var e = null === b || void 0 === b ? void 0 : b[c];
      return void 0 === e && (e = d), a(e) ? e.call(b) : e
    }
  }(O), Q = function(a) {
    return Boolean(a && 1 === a.nodeType)
  }, ga = function(a, b, c) {
    return a.getElement = function(a) {
      return b(a) ? a : a && a.el
    }, a.EL_ID_ATTR = "data-visibility-id", a.OBJ_ID_PROP = "_visibility_id", a.getId = function(d) {
      var e = null;
      return b(d) ? (e = d.getAttribute(a.EL_ID_ATTR) || null, e || (e = c(), d.setAttribute(a.EL_ID_ATTR, e))) : d && (e = d[a.OBJ_ID_PROP] || null, e || (e = d[a.OBJ_ID_PROP] = c())), e
    }, a.visiblePercent = function(a, b) {
      var c = 0;
      if (!b) return c;
      var d = a.top,
        e = d + a.height,
        f = b.visibleTop < d,
        g = b.visibleBottom > e;
      return !f && !g || f && g ? c = 1 : f ? c = (b.height - (d - b.visibleTop)) / b.height : g && (c = (e - b.visibleTop) / b.height), Math.round(100 * c)
    }, a
  }(ga, Q, x), ha = function(c, d, e, f, g, h) {
    return h.events = [], h.lastPos = null, h.clearCache = function(a) {
      if (a === b) h.getElementOffset.cache = {};
      else {
        var c = g.getId(a);
        c && (h.getElementOffset.cache[c] = null)
      }
    }, h.calculateOffset = function(b) {
      if (!b) return null;
      if (!e(b)) return null;
      var c = b.ownerDocument.documentElement;
      return {
        height: b.offsetHeight,
        top: b.getBoundingClientRect().top + a.pageYOffset - (c.clientTop || 0)
      }
    }, h._getElementOffset = function(a) {
      var b = g.getElement(a);
      if (!b) return null;
      var c = h.calculateOffset(b);
      return c ? {
        visibleTop: c.top + (f(a, "topEdgeOffset") || 0),
        visibleBottom: c.top + c.height - (f(a, "bottomEdgeOffset") || 0),
        offsetTop: c.top,
        height: c.height
      } : null
    }, h.getElementOffset = function() {
      var a = function(b) {
        var c = a.cache,
          d = g.getId(b);
        if (d && c[d]) return c[d];
        var e = h._getElementOffset(b);
        return d && e && (c[d] = e), e
      };
      return a.cache = {}, a
    }(), h.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"], h.updateTracking = function(a) {
      var e, f = function(a) {
        return a ? function(b) {
          return a[b]
        } : function() {
          return b
        }
      };
      d(h.EVENT_NAMES, f(a._events)) ? (e = c(h.events, a), e === -1 && h.events.push(a)) : (e = c(h.events, a), e !== -1 && h.events.splice(e, 1))
    }, h.processEvents = function(a) {
      h.lastPos = a;
      var b = h.events;
      if (b.length)
        for (var c = b.length - 1; c >= 0; --c) {
          var d = b[c],
            e = d.isVisible(a);
          null !== e && (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a), d.trigger(e ? "visible" : "invisible", d, a), d.lastVisible = e)
        }
    }, h
  }(M, N, u, P, ga, ha), R = function(b, c, d, e, f) {
    function g(a) {
      return this instanceof g ? (this.obj = a, void(this.lastVisible = !1)) : new g(a)
    }
    var h = c(function() {
      f.processEvents(f.lastPos)
    }, 250);
    return e(g.prototype, b, {
      on: function(a) {
        var c = !(this._events && this._events[a]),
          d = b.on.apply(this, arguments);
        return c && f.updateTracking(this), h(), d
      },
      off: function(a) {
        var c = b.off.apply(this, arguments);
        return this._events && this._events[a] || f.updateTracking(this), c
      },
      offset: function() {
        return f.getElementOffset(this.obj)
      },
      isVisible: function(a) {
        if (a = a || f.lastPos, !a) return null;
        var b = a.top,
          c = b + a.height,
          d = this.offset();
        return !!d && (d.offsetTop >= b && d.visibleTop < c || d.offsetTop + d.height <= c && d.visibleBottom > b)
      },
      invalidate: function() {
        return f.clearCache(this.obj), this
      }
    }), e(g, {
      invalidate: f.clearCache,
      scroll: f.processEvents,
      _windowScrollHandlerBound: !1,
      _ignoreCache: !1,
      _windowScrollHandler: d(function() {
        g._ignoreCache && g.invalidate(), f.processEvents({
          top: a.pageYOffset,
          height: a.document.documentElement.clientHeight
        })
      }, 250),
      bindWindowEvents: function(b) {
        this._windowScrollHandlerBound || ("undefined" != typeof b && (g._ignoreCache = b), a.addEventListener("scroll", this._windowScrollHandler), a.addEventListener("resize", this._windowScrollHandler), this._windowScrollHandlerBound = !0, this._windowScrollHandler())
      },
      unbindWindowEvents: function() {
        g._ignoreCache = !1, a.removeEventListener("scroll", this._windowScrollHandler), a.removeEventListener("resize", this._windowScrollHandler), this._windowScrollHandlerBound = !1
      }
    }), g
  }(y, L, G, i, ha), S = function(a) {
    return a
  }(R), ia = function(a) {
    return a = function(a, b) {
      var c = null,
        d = !1;
      this.start = function() {
        d || (c = setTimeout(function() {
          d = !0, a()
        }, b))
      }, this.clear = function() {
        clearTimeout(c)
      }
    }
  }(ia), T = function() {
    function a(a) {
      if (a = Number(a), isNaN(a) || a > 255) throw new Error("Color components should be numbers less than 256");
      return a = a.toString(16), 1 === a.length ? "0" + a : String(a)
    }
    return function(b) {
      return "#" + a(b.red) + a(b.green) + a(b.blue)
    }
  }(), U = function() {
    var a = ["allow-forms", "allow-pointer-lock", "allow-popups", "allow-same-origin", "allow-scripts", "allow-top-navigation"],
      b = function(b) {
        return b ? a.reduce(function(a, c) {
          return b[c] && (a += c + " "), a
        }, "").trim() : ""
      };
    return {
      getAttribute: b
    }
  }(), V = function(b) {
    return function(c) {
      "undefined" == typeof c && (c = a.location.search);
      var d = {};
      return b(c.substr(1).split("&"), function(a) {
        var b = a.split("=").map(function(a) {
          return decodeURIComponent(a.replace(/\+/g, "%20"))
        });
        b[0] && (d[b[0]] = b[1])
      }), d
    }
  }(f), W = function() {
    var b = {},
      c = a.document.createElement("a");
    return b.getOrigin = function(a) {
      c.href = a;
      var b = c.href.split("/");
      return b[0] + "//" + b[2]
    }, b.getHostName = function(a) {
      return c.href = a, c.hostname
    }, b.getDomainPart = function(a, c) {
      "undefined" == typeof c && (c = 0);
      var d = b.getHostName(a),
        e = d.split(".").reverse();
      return e[c]
    }, b.getQuery = function(a) {
      return c.href = a, c.search
    }, b.getPathname = function(a) {
      return c.href = a, c.pathname
    }, b
  }(), X = function() {
    var a = function(a) {
        return null !== a && !isNaN(Number(a)) && isFinite(a)
      },
      b = function(a) {
        return Math.min.apply(Math, c(a)) || 0
      },
      d = function(a) {
        return Math.max.apply(Math, c(a)) || 0
      };
    return {
      min: b,
      max: d,
      isNumeric: a
    }
  }();
  var ka = function() {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
      }
    }
    return function(b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b
    }
  }();
  Y = function(a) {
    var b = function() {
      function b() {
        return d(this, b), 1 !== arguments.length || a.isNumeric(arguments[0]) ? void this.fromArray(arguments) : Array.isArray(arguments[0]) ? this.fromArray(arguments[0]) : this.fromObject(arguments[0])
      }
      return ka(b, [{
        key: "fromArray",
        value: function(a) {
          this.reset(), a.length >= 6 ? (this.top = a[0], this.right = a[1], this.bottom = a[2], this.left = a[3], this.width = a[4], this.height = a[5]) : a.length >= 4 ? (this.top = a[0], this.right = a[1], this.bottom = a[2], this.left = a[3]) : 3 === a.length ? (this.top = a[0], this.right = a[1], this.bottom = a[2], this.left = 0) : 2 === a.length ? (this.top = a[0], this.right = a[1], this.bottom = a[0], this.left = a[1]) : (this.top = a[0], this.right = a[0], this.bottom = a[0], this.left = a[0]), this.update()
        }
      }, {
        key: "fromObject",
        value: function(a) {
          return this.fromArray([a.top, a.right, a.bottom, a.left, a.width, a.height])
        }
      }, {
        key: "update",
        value: function() {
          this.width || (this.width = this.right - this.left), this.height || (this.height = this.bottom - this.top)
        }
      }, {
        key: "reset",
        value: function(a) {
          a = a || 0, this.top = a, this.right = a, this.bottom = a, this.left = a, this.width = a, this.height = a
        }
      }, {
        key: "getArea",
        value: function() {
          return (this.right - this.left) * (this.bottom - this.top)
        }
      }]), b
    }();
    return b.getOverlapRect = function(c, d) {
      var e = a.max([c.left, d.left]),
        f = a.min([c.left + c.width, d.left + d.width]),
        g = a.max([c.top, d.top]),
        h = a.min([c.top + c.height, d.top + d.height]);
      return f >= e && h >= g && new b(g, f, h, e, f - e, h - g)
    }, b.getOverlapArea = function(b, c) {
      var d = a.max([0, a.min([b.right, c.right]) - a.max([b.left, c.left])]),
        e = a.max([0, a.min([b.bottom, c.bottom]) - a.max([b.top, c.top])]);
      return d * e
    }, b
  }(X), Z = function(b) {
    var c = 9,
      d = function(a) {
        return a && a.parentNode
      },
      e = function(b, c) {
        if (!b) return null;
        var d = a.document.defaultView.getComputedStyle(b);
        return c && d.hasOwnProperty(c) ? d[c] : d
      },
      f = function() {
        return {
          x: a.pageXOffset,
          y: a.pageYOffset
        }
      },
      g = function(a) {
        var c = void 0;
        if (a && a.style) {
          var d = a.style.display;
          a.style.display = "block", c = a.getBoundingClientRect(), a.style.display = d, c = new b(c);
          var e = f();
          c.left += e.x, c.right += e.x, c.top += e.y, c.bottom += e.y
        } else c = new b(0);
        return c
      },
      h = function(a, b) {
        var c = g(a);
        if (b) {
          var d = g(b);
          c.top = d.top - d.top + b.scrollTop, c.bottom = c.top + c.height + b.scrollTop, c.left = c.left - d.left + b.scrollLeft, c.right = c.left + c.width + b.scrollLeft
        }
        return c
      },
      i = function() {
        var c = f(),
          d = c.y,
          e = c.x + a.innerWidth,
          g = c.y + a.innerHeight,
          h = c.x,
          i = a.innerWidth,
          j = a.innerHeight;
        return new b(d, e, g, h, i, j)
      },
      j = function(a) {
        try {
          return a.nodeType === c ? a : a.ownerDocument
        } catch (b) {
          return null
        }
      },
      k = function(b) {
        var c = j(b),
          d = void 0;
        try {
          c && (d = c.parentWindow || c.defaultView || a)
        } catch (e) {
          d = a
        }
        return d
      },
      l = function(a) {
        var c = k(a),
          d = new b(0, c.innerWidth, c.innerHeight, 0, c.innerWidth, c.innerHeight),
          e = f();
        return d.left += e.x, d.right += e.x, d.top += e.y, d.bottom += e.y, d
      },
      m = function(a) {
        var b = j(a);
        if (b) return b.documentElement || b.body
      },
      n = function(a) {
        var c = m(a) || {},
          d = new b;
        return d.right = d.width = c.scrollWidth || 0, d.bottom = d.height = c.scrollHeight || 0, d
      },
      o = function(a, b) {
        for (; b;) {
          if (b === a) return !0;
          b = b.parentNode
        }
        return !1
      },
      p = function(a) {
        var b = e(a);
        return "inline-block" === b.display || "none" !== b["float"] || "absolute" === b.position || "fixed" === b.position || "auto" !== b.width || "auto" !== b.height
      },
      q = function(a) {
        var b = e(a),
          c = {};
        return "scroll" === b.overflowX || "auto" === b.overflowX ? c.xscroll = a.offsetWidth - a.clientWidth : c.xscroll = 0, "scroll" === b.overflowY || "auto" === b.overflowY ? c.yscroll = a.offsetHeight - a.clientHeight : c.yscroll = 0, c.xhidden = "hidden" === b.overflowX, c.yhidden = "hidden" === b.overflowY, c
      },
      r = function(a) {
        var b = e(a);
        return !!(b.clip && "auto" !== b.clip || b.clipPath && "none" !== b.clipPath)
      };
    return {
      getParentNode: d,
      getWindow: k,
      getScroll: f,
      getRect: g,
      getRectRelativeTo: h,
      getViewportRect: i,
      getDocument: j,
      getWindowRect: l,
      getRootNode: m,
      getRootRect: n,
      getNodeStyle: e,
      isParentOf: o,
      hasLayout: p,
      getNodeOverflow: q,
      isNodeClipped: r
    }
  }(Y);
  var ka = function() {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
      }
    }
    return function(b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b
    }
  }();
  $ = function(b, c) {
    var e = 1,
      f = function() {
        function f(a) {
          d(this, f), this.node = a, this.document = b.getDocument(a), this.window = b.getWindow(a), this.root = b.getRootNode(a), this.ref = this.getRefNode(a.parentNode)
        }
        return ka(f, [{
          key: "getRefNode",
          value: function(a) {
            for (; a && a.nodeType === e;) {
              var c = b.getNodeStyle(a);
              if (b.hasLayout(a) || "block" === c.display || "none" !== c.clear) {
                var d = b.getNodeOverflow(a);
                if (d.xscroll || d.yscroll || d.xhidden || d.yhidden) return a;
                if (b.isNodeClipped(a)) return a
              }
              a = a.parentNode
            }
            return this.root
          }
        }, {
          key: "getNodesOver",
          value: function(d, f) {
            f = f || 1;
            var g = [],
              h = b.getRect(d),
              i = b.getRect(this.ref),
              j = b.getViewportRect(d);
            if (!a.document.elementFromPoint) return g;
            for (var k = {
                top: c.max([h.top, i.top]) - j.top,
                right: c.min([h.right, i.right]) - j.left,
                bottom: c.min([h.bottom, i.bottom]) - j.top,
                left: c.max([h.left, i.left]) - j.left
              }, l = (k.right - k.left) / 10, m = (k.bottom - k.top) / 10, n = k.left; n < k.right; n += l)
              for (var o = k.top; o < k.bottom; o += m) {
                for (var p = a.document.elementFromPoint(n, o); p && p.nodeType === e;) {
                  var q = b.getNodeStyle(p);
                  if (b.hasLayout(p) || "block" === q.display || "none" !== q.clear) break;
                  p = p.parentNode
                }
                p && p.nodeType === e && p !== this.node && p !== this.root && !b.isParentOf(p, this.node) && (g.push(p), g.length >= f && (n = k.right, o = k.bottom))
              }
            return g
          }
        }, {
          key: "getWindowGeom",
          value: function() {
            var a = this.window.innerHeight || 0,
              b = this.window.innerWidth || 0,
              c = this.window.screenY || this.window.screenTop || 0,
              d = c + a,
              e = this.window.screenX || this.window.screenLeft || 0,
              f = e + b;
            return {
              t: c,
              r: f,
              b: d,
              l: e,
              w: b,
              h: a
            }
          }
        }, {
          key: "getSelfGeom",
          value: function() {
            var a = b.getRect(this.node),
              d = b.getRect(this.ref),
              e = b.getNodeStyle(this.node),
              f = b.getWindowRect(this.node),
              g = a.width,
              h = a.height;
            this.ref !== this.root && (g = c.max([0, c.min([a.right, d.right]) - c.max([a.left, d.left])]), h = c.max([0, c.min([a.bottom, d.bottom]) - c.max([a.top, d.top])]));
            var i = c.max([0, c.min(a.right, f.right) - c.max([a.left, f.left])]),
              j = c.max([0, c.min([a.bottom, f.bottom]) - c.max([a.top, f.top])]),
              k = c.min([g, i]),
              l = c.min([h, j]),
              m = a.width ? k / a.width : 0,
              n = a.height ? l / a.height : 0,
              o = k * l / (a.width * a.height),
              p = 1,
              q = this.getNodesOver(this.node, p);
            if (q.length) {
              var r = b.getRect(q[0]),
                s = c.max([0, c.min([r.right, a.right]) - c.max([r.left, a.left])]),
                t = c.max([0, c.min([r.bottom, a.bottom]) - c.max([r.top, a.top])]);
              o = c.max([0, (k * l - s * t) / (a.width * a.height)])
            }
            var u = b.getScroll();
            return {
              t: a.top - u.y,
              r: a.right - u.x,
              b: a.bottom - u.y,
              l: a.left - u.x,
              z: e.zIndex,
              w: a.width,
              h: a.height,
              xiv: 1 === m ? "1" : Number(m).toFixed(2),
              yiv: 1 === n ? "1" : Number(n).toFixed(2),
              iv: 1 === o ? "1" : Number(o).toFixed(2)
            }
          }
        }, {
          key: "getExpandGeom",
          value: function() {
            var a = b.getRect(this.ref),
              d = b.getRect(this.node),
              e = b.getWindowRect(this.node),
              f = {
                top: c.max([a.top, e.top]),
                right: c.min([a.right, e.right]),
                bottom: c.min([a.bottom, e.bottom]),
                left: c.max([a.left, e.left])
              },
              g = b.getNodeOverflow(this.ref);
            return {
              t: c.max([0, d.top - f.top]),
              r: c.max([0, f.right - d.right]),
              b: c.max([0, f.bottom - d.bottom]),
              l: c.max([0, d.left - f.left]),
              xs: Boolean(g.yscroll),
              yx: Boolean(g.xscroll)
            }
          }
        }, {
          key: "getGeom",
          value: function() {
            return {
              win: this.getWindowGeom(),
              self: this.getSelfGeom(),
              exp: this.getExpandGeom()
            }
          }
        }]), f
      }(),
      g = {
        get: function(a) {
          var b = new f(a);
          return b.getGeom()
        }
      };
    return g
  }(Z, X), _ = function(c) {
    var d = E,
      e = H,
      f = z,
      g = R,
      h = ga,
      k = ia,
      l = T,
      m = i,
      n = U,
      o = V,
      p = ca,
      q = W.getOrigin,
      r = W.getQuery,
      s = j,
      t = A,
      u = $,
      v = {
        adsnative: 160465,
        prebid: 160465,
        displayonly: 160465,
        gravity: 184723,
        taboola: 184193,
        outbrain: 185359,
        lq: 160465
      },
      w = e.extend({
        name: "ads",
        origin: b,
        onceEvents: {
          "view:enter": function() {
            this._reportLegacy({
              verb: "view",
              adverb: "0ms-no50perc"
            })
          },
          "view:iab": function() {
            this._reportLegacy({
              verb: "view",
              adverb: "iab-scroll"
            })
          }
        },
        events: {
          "frame:ready": function(a) {
            this.forumId = a.forumId, this._reportOnce({
              verb: "load",
              extra_data: a.extraData
            }, "load"), this.bindViewEvents(), this.triggerGeomUpdate()
          },
          "frame:resize": function(a) {
            this.frame.setInlineStyle("height", a.height + "px"), this.triggerGeomUpdate()
          },
          "frame:click": function() {
            this._reportOnce({
              verb: "click"
            }, "click")
          },
          "frame:hover": function() {
            this._reportOnce({
              verb: "hover"
            }, "hover")
          },
          "frame:error-provider-not-ready": function() {
            this._reportLegacy({
              verb: "fail",
              object_type: "provider",
              object_id: this.getProvider(),
              adverb: "provider_not_ready"
            })
          },
          "frame:error-no-height": function() {
            this._reportLegacy({
              verb: "fail",
              object_type: "provider",
              object_id: this.getProvider(),
              adverb: "no_height"
            })
          },
          "frame:clearSandbox": function() {
            this.frame.elem.hasAttribute("sandbox") && this.frame.elem.removeAttribute("sandbox")
          },
          "frame:redirect": function(a) {
            this.frame.elem.src = a
          },
          "frame:logAd": function(a) {
            this._report(a, {
              usePOST: !0
            })
          },
          "frame:$sf-init": function() {
            this.isSafeframe = !0
          },
          "frame:error": function(a) {
            this.postMessageDirect({
              event: "error",
              data: {
                error: a
              }
            })
          }
        },
        constructor: function() {
          e.apply(this, arguments), this.origin = q(this.settings.adUrl), this._reportOnceHistory = {}
        },
        init: function() {
          if (!this.settings.isHostIframed && (this.settings.forum = o(r(this.settings.adUrl)).shortname, this.settings.forum)) {
            var b = this.settings.discovery,
              c = b && (b.disable_all || b.disable_promoted),
              f = 0 === a.location.href.indexOf(d.apps.home);
            !f && c && this.settings.canDisableAds || (this._reportOnce({
              verb: "call",
              object_type: "provider",
              object_id: this.getProvider(),
              adjective: 1
            }, "call"), this.settings.sandboxAds && (this.sandbox = n.getAttribute({
              "allow-scripts": !0,
              "allow-same-origin": !0,
              "allow-forms": !0,
              "allow-popups": !0
            })), e.prototype.init.call(this))
          }
        },
        getProvider: function() {
          if (this._provider) return this._provider;
          var a = this.settings.adUrl.match(/provider=(\w+)/);
          return a && (this._provider = a[1]), this._provider
        },
        getUrl: function() {
          var b = this.settings;
          return p(b.adUrl, {
            anchorColor: l(b.anchorColor),
            colorScheme: b.colorScheme,
            sourceUrl: a.document.location.href,
            typeface: b.typeface,
            canonicalUrl: b.canonicalUrl,
            disqus_version: b.version
          })
        },
        triggerGeomUpdate: function() {
          if (this.frame.elem && this.isSafeframe) {
            var a = u.get(this.frame.elem);
            this.postMessageDirect({
              event: "geom-update",
              data: {
                geom: a
              }
            })
          }
        },
        bindViewEvents: function() {
          if (!this._viewEventsBound) {
            this._viewEventsBound = !0, g.bindWindowEvents(!0);
            var a = this,
              b = function(b, c) {
                a.postMessageDirect({
                  event: b,
                  percentViewable: c
                })
              },
              c = 1e3,
              d = new k(function() {
                a.trigger("view:iab"), b("view:iab")
              }, c),
              e = !1;
            this.listenTo(g({
              el: this.frame.elem
            }), {
              enter: function() {
                a.trigger("view:enter"), b("view:enter"), a.triggerGeomUpdate()
              },
              exit: function() {
                b("view:exit"), e && (e = !1, b("view:50out"), d.clear()), a.triggerGeomUpdate()
              },
              visible: function(c, f) {
                var g = h.visiblePercent(f, c.offset());
                g >= 50 && !e ? (e = !0, b("view:50in"), d.start()) : g < 50 && e && (e = !1, b("view:50out"), d.clear()), b("view", g), a.triggerGeomUpdate()
              }
            })
          }
        },
        postMessageDirect: function(a) {
          this.frame.requiresWindow(function(a) {
            var b = f.stringify(m({}, a, {
              space: "disqus"
            }));
            t.postMessage(this.window, b, this.origin), t.postMessage(this.window, "disqus." + a.event, this.origin)
          })(a)
        },
        _report: function(c) {
          var d = arguments.length > 1 && arguments[1] !== b ? arguments[1] : {},
            e = this.settings,
            f = this.getProvider();
          c.forum_id = e.forumId || this.forumId;
          var g = d.usePOST ? "reportJesterPOST" : "reportJester";
          s[g](m({
            imp: e.impressionId,
            experiment: e.experimentName,
            variant: e.experimentVariant,
            service: e.experimentService,
            area: e.placement,
            product: "embed",
            forum: e.forum,
            zone: "thread",
            version: s.getLoaderVersionFromUrl("https://c.disquscdn.com/next/embed/lounge.load.5fd2315a4b39b31e1e142ef79d160217.js"),
            page_url: a.document.location.href,
            page_referrer: a.document.referrer,
            object_type: "advertisement",
            provider: f,
            event: "activity"
          }, c))
        },
        _reportLegacy: function(a) {
          var b = this.settings,
            c = this.getProvider();
          this._report(m({
            advertisement_id: v[c],
            ad_product_name: "iab_display",
            ad_product_layout: "iab_display",
            bin: "embed:promoted_discovery:" + b.experimentService + ":" + b.experimentName + ":" + b.experimentVariant,
            object_id: "[" + v[c] + "]",
            section: "default"
          }, a))
        },
        _reportOnce: function(a, b) {
          this._reportOnceHistory[b] || (this._reportLegacy(a), this._reportOnceHistory[b] = !0)
        },
        getFrameSettings: function() {
          var a = e.prototype.getFrameSettings.call(this);
          return a.insertBeforeEl = this.settings.insertBeforeEl, a.insertAfterEl = this.settings.insertAfterEl, a
        }
      }),
      x = function(a) {
        return new w(a)
      };
    return {
      Ads: x
    }
  }({}), ja = function(c) {
    var d = g,
      e = h,
      f = i,
      k = j,
      l = s.HostConfig,
      m = t,
      n = K,
      o = _,
      p = new l(a);
    c.configAdapter = p;
    var q = [],
      r = !1,
      u = e(a),
      v = c.removeDisqusLink = function() {
        var b = a.document;
        if (b.getElementsByClassName) {
          if ("complete" !== b.readyState) return a.addEventListener("load", v);
          var c = b.getElementsByClassName("dsq-brlink"),
            d = c && c.length && c[0];
          d && d.parentNode.removeChild(d)
        }
      };
    c.VERSION = "1cc12dd", c.loadEmbed = function(a) {
      if (q.length) return y({
        reload: !0
      }), m.log("Use DISQUS.reset instead of reloading embed.js please."), void m.log("See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites");
      p.configurator = a;
      var b = p.toJSON();
      b.version = c.VERSION, r || (b.container.innerHTML = "", r = !0), c.loadApps(b), c.removeDisqusLink()
    };
    var w = function() {
        for (var a; a = q.pop();) a.triggeredSlowEvent && a.state !== a.constructor.states.RUNNING && k.logStat("reset_embed.slow"), a.destroy()
      },
      x = function(b) {
        w();
        var c = n.Lounge(f({}, b, {
          discoveryDisabled: b.bottomPlacementUrl && !b.homeDiscoveryEnabled,
          isHostIframed: u
        }));
        q.push(c), c.init();
        var d = function(a) {
            c.whenFullyVisible(a)
          },
          e = function(a) {
            return b.adBlockEnabled ? a.replace(/\/(adsnative|prebid)/, "/taboola").replace(/\/\/tempest.disquss.com\//, "//disqusads.com/") : a
          };
        if (b.outsidePlacementUrl) {
          var g = a.document.getElementById("disqus_ad");
          if (g) {
            var h = o.Ads(f({
              adUrl: b.outsidePlacementUrl,
              placement: "outside"
            }, b, {
              isHostIframed: u,
              container: g
            }));
            q.push(h), h.init()
          }
        }
        var i = null;
        if (b.topPlacementUrl && (b.topPlacementUrl = e(b.topPlacementUrl), i = o.Ads(f({
            adUrl: b.topPlacementUrl,
            placement: "top"
          }, b, {
            isHostIframed: u,
            insertBeforeEl: c.frame.elem
          })), q.push(i), d(function() {
            i.init()
          })), b.bottomPlacementUrl && !b.homeDiscoveryEnabled) {
          b.bottomPlacementUrl = e(b.bottomPlacementUrl);
          var j = o.Ads(f({
            adUrl: b.bottomPlacementUrl,
            placement: "bottom"
          }, b, {
            isHostIframed: u,
            insertAfterEl: c.frame.elem
          }));
          q.push(j), d(function() {
            null === i ? j.init() : j.listenToOnce(i, "frame:ready", function() {
              j.init()
            })
          })
        }
      };
    c.loadApps = function(a) {
      a.adBlockEnabled === b ? d(function(b) {
        a.adBlockEnabled = b, x(a)
      }) : x(a)
    };
    var y = c.reset = function(a) {
      a = a || {}, w(), a.reload && c.loadEmbed(a.config)
    };
    return c
  }(ja), aa = function(b) {
    var c = a.document,
      d = a.DISQUS || {},
      e = da;
    d.reset || (d.reset = ja.reset), d.request || (d.request = {}), d.request.get || (d.request.get = function(a, b, c) {
      e(a, b, c)
    }), d.host || (d.host = {}), d.host._loadEmbed || (d.host._loadEmbed = ja.loadEmbed), a.DISQUS = d;
    var f = c.createElement("link");
    f.rel = "prefetch";
    try {
      f.relList.supports("preload") && (f.rel = "preload")
    } catch (g) {}
    var h = function(a, b) {
      var d = f.cloneNode();
      return d.as = b || "script", d.pr = 1, d.href = a, c.head.appendChild(d), d
    };
    h("https://c.disquscdn.com/next/embed/styles/lounge.d49f53e192b9080ef8880a7c9b24f1c3.css", "style"), h("https://c.disquscdn.com/next/embed/common.bundle.a5e978e28df65e5c393be61ad30e685d.js"), h("https://c.disquscdn.com/next/embed/lounge.bundle.7ea07f139048fc4c3c4afd7e42a0a7f7.js"), h("https://disqus.com/next/config.js")
  }({})
}(this), this.DISQUS.host._loadEmbed();