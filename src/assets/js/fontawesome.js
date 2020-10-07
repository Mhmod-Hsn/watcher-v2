;(window.FontAwesomeKitConfig = {
  searchPseudoElements: true,
  asyncLoading: { enabled: !0 },
  autoA11y: { enabled: !0 },
  baseUrl: "https://kit-pro.fontawesome.com",
  license: "pro",
  method: "js",
  minify: { enabled: !0 },
  v4shim: { enabled: !1 },
  version: "latest",
}),
  (function() {
    function e(e) {
      var t, n, i, o
      ;(prefixesArray = e || ["fa"]),
        (prefixesSelectorString = "." + Array.prototype.join.call(e, ",.")),
        (t = document.querySelectorAll(prefixesSelectorString)),
        Array.prototype.forEach.call(t, function(e) {
          ;(n = e.getAttribute("title")),
            e.setAttribute("aria-hidden", "true"),
            (i =
              !e.nextElementSibling ||
              !e.nextElementSibling.classList.contains("sr-only")),
            n &&
              i &&
              (((o = document.createElement("span")).innerHTML = n),
              o.classList.add("sr-only"),
              e.parentNode.insertBefore(o, e.nextSibling))
        })
    }
    !(function() {
      if (
        !(void 0 === window.Element || "classList" in document.documentElement)
      ) {
        var e,
          t,
          n,
          i = Array.prototype,
          o = i.push,
          a = i.splice,
          s = i.join
        ;(r.prototype = {
          add: function(e) {
            this.contains(e) ||
              (o.call(this, e), (this.el.className = this.toString()))
          },
          contains: function(e) {
            return -1 != this.el.className.indexOf(e)
          },
          item: function(e) {
            return this[e] || null
          },
          remove: function(e) {
            if (this.contains(e)) {
              for (var t = 0; t < this.length && this[t] != e; t++);
              a.call(this, t, 1), (this.el.className = this.toString())
            }
          },
          toString: function() {
            return s.call(this, " ")
          },
          toggle: function(e) {
            return (
              this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
            )
          },
        }),
          (window.DOMTokenList = r),
          (e = Element.prototype),
          (t = "classList"),
          (n = function() {
            return new r(this)
          }),
          Object.defineProperty
            ? Object.defineProperty(e, t, { get: n })
            : e.__defineGetter__(t, n)
      }
      function r(e) {
        for (
          var t = (this.el = e).className
              .replace(/^\s+|\s+$/g, "")
              .split(/\s+/),
            n = 0;
          n < t.length;
          n++
        )
          o.call(this, t[n])
      }
    })()
    var t,
      n,
      i = function(e) {
        var t = document.createElement("link")
        ;(t.href = e),
          (t.media = "all"),
          (t.rel = "stylesheet"),
          document.getElementsByTagName("head")[0].appendChild(t)
      },
      o = function(e) {
        !(function(e, t, n) {
          var i,
            o = window.document,
            a = o.createElement("link"),
            s = (o.body || o.getElementsByTagName("head")[0]).childNodes
          i = s[s.length - 1]
          var r = o.styleSheets
          ;(a.rel = "stylesheet"),
            (a.href = e),
            (a.media = "only x"),
            (function e(t) {
              if (o.body) return t()
              setTimeout(function() {
                e(t)
              })
            })(function() {
              i.parentNode.insertBefore(a, i.nextSibling)
            })
          var l = function(e) {
            for (var t = a.href, n = r.length; n--; )
              if (r[n].href === t) return e()
            setTimeout(function() {
              l(e)
            })
          }
          function d() {
            a.addEventListener && a.removeEventListener("load", d),
              (a.media = n || "all")
          }
          a.addEventListener && a.addEventListener("load", d),
            (a.onloadcssdefined = l)(d)
        })(e)
      },
      a = function(e, t) {
        var n = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
          i = t && void 0 !== t.async ? t.async : void 0,
          o = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
          a = document.createElement("script"),
          s = document.scripts[0]
        ;(a.src = e),
          void 0 !== o &&
            a.setAttribute("data-auto-a11y", o ? "true" : "false"),
          n &&
            (a.setAttributeNode(
              document.createAttribute("data-auto-fetch-svg")
            ),
            a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)),
          i && a.setAttributeNode(document.createAttribute("defer")),
          s.parentNode.appendChild(a)
      }
    function s(e, t) {
      var n = t && t.shim ? e.license + "-v4-shims" : e.license,
        i = t && t.minify ? ".min" : ""
      return (
        e.baseUrl +
        "/releases/" +
        ("latest" === e.version ? "latest" : "v".concat(e.version)) +
        "/" +
        e.method +
        "/" +
        n +
        i +
        "." +
        e.method
      )
    }
    try {
      if (window.FontAwesomeKitConfig) {
        var r = window.FontAwesomeKitConfig
        "js" === r.method &&
          ((n = {
            async: (t = r).asyncLoading.enabled,
            autoA11y: t.autoA11y.enabled,
          }),
          "pro" === t.license &&
            ((n.autoFetchSvg = !0),
            (n.fetchSvgFrom =
              t.baseUrl +
              "/releases/" +
              ("latest" === t.version ? "latest" : "v".concat(t.version)) +
              "/svgs")),
          t.v4shim.enabled && a(s(t, { shim: !0, minify: t.minify.enabled })),
          a(s(t, { minify: t.minify.enabled }), n)),
          "css" === r.method &&
            (function(t) {
              var n,
                a,
                r,
                l,
                d,
                c,
                f,
                u = e.bind(e, ["fa", "fab", "fas", "far", "fal"])
              t.autoA11y.enabled &&
                ((n = u),
                (r = []),
                (d = (l = document).documentElement.doScroll),
                (c = "DOMContentLoaded"),
                (f = (d ? /^loaded|^c/ : /^loaded|^i|^c/).test(l.readyState)) ||
                  l.addEventListener(
                    c,
                    (a = function() {
                      for (
                        l.removeEventListener(c, a), f = 1;
                        (a = r.shift());

                      )
                        a()
                    })
                  ),
                f ? setTimeout(n, 0) : r.push(n),
                "undefined" != typeof MutationObserver &&
                  new MutationObserver(u).observe(document, {
                    childList: !0,
                    subtree: !0,
                  })),
                t.v4shim.enabled &&
                  (t.asyncLoading.enabled
                    ? o(s(t, { shim: !0, minify: t.minify.enabled }))
                    : i(s(t, { shim: !0, minify: t.minify.enabled })))
              var m = s(t, { minify: t.minify.enabled })
              t.asyncLoading.enabled ? o(m) : i(m)
            })(r)
      }
    } catch (t) {}
  })()
