!(function(t) {
  function e(r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
  }
  var n = {}
  ;(e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & n && 'string' != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(e) {
              return t[e]
            }.bind(null, o)
          )
      return r
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return e.d(n, 'a', n), n
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (e.p = 'https://app.appzi.io/'),
    e((e.s = 61))
})([
  ,
  ,
  ,
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = function(t, e) {
      void 0 === e && (e = void 0),
        e || (e = location.href),
        (t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]'))
      var n = RegExp('[\\?&]' + t + '=([^&#]*)').exec(e)
      return null === n ? null : decodeURIComponent(n[1])
    }
    ;(e.getPortalIdFromUrl = function() {
      return n('portalId')
    }),
      (e.getConfigIdFromUrl = function() {
        return n('configId')
      }),
      (e.getHostOriginUrlFromUrl = function() {
        return n('hostOriginUrl')
      }),
      (e.isFontLogo = function(t) {
        return 17 > (t || '').length && (t || '').match(/appzi-icon-\d+$/)
      }),
      (e.getFontLogoIndex = function(t) {
        return +t.replace('appzi-icon-', '')
      }),
      (e.nop = function() {}),
      (e.randomLetters = function(t) {
        for (var e = '', n = 0; t > n; n++)
          e += Math.random()
            .toString(36)
            .substring(2, 3)
        return e
      }),
      (e.removeById = function(t, e) {
        try {
          var n = t.getElementById(e)
          n.parentNode.removeChild(n)
        } catch (t) {}
      })
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.eventBusMessageIds = {
        RECONFIGURE: 'RECONFIGURE',
        RECONFIGURE_SIZE: 'RECONFIGURE_SIZE',
        FEEDBACK_START: 'FEEDBACK_START',
        HOST_RESIZED: 'HOST_RESIZED',
        FEEDBACK_END: 'FEEDBACK_END',
        FEEDBACK_INFLIGHT: 'FEEDBACK_INFLIGHT',
        REPORT_WIDGET_HEIGHT: 'REPORT_WIDGET_HEIGHT',
        TRANSFER_PAGE_INFO: 'TRANSFER_PAGE_INFO',
        GET_CONFIGURATION_LAUNCHER: 'GET_CONFIGURATION_LAUNCHER',
        GET_CONFIGURATION_WIDGET: 'GET_CONFIGURATION_WIDGET',
        LAUNCHER_READY_FOR_EVENTS: 'LAUNCHER_READY_FOR_EVENTS',
        LAUNCHER_READY_FOR_RENDERING: 'LAUNCHER_READY_FOR_RENDERING',
        TRANSFER_PAGE_INFO_REQUEST: 'TRANSFER_PAGE_INFO_REQUEST',
        HEAD_LINK_CLICKED: 'HEAD_LINK_CLICKED',
        RESET: 'RESET',
      })
    var n = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.FEEDBACK_START)
      }
    })()
    e.FeedbackStartMsg = n
    var r = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.FEEDBACK_END)
      }
    })()
    e.FeedbackEndMsg = r
    var o = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.HEAD_LINK_CLICKED)
      }
    })()
    e.HeadLinkClickedMsg = o
    var i = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.GET_CONFIGURATION_LAUNCHER)
      }
    })()
    e.ReconfigureLauncherMsg = i
    var a = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.GET_CONFIGURATION_WIDGET)
      }
    })()
    e.ReconfigureWidgetMsg = a
    var s = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.LAUNCHER_READY_FOR_EVENTS)
      }
    })()
    e.LaunchButtonReadyForEventsMsg = s
    var c = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.LAUNCHER_READY_FOR_RENDERING)
      }
    })()
    e.LaunchButtonReadyForRenderingMsg = c
    var u = (function() {
      return function(t, n) {
        ;(this.configId = t),
          (this.height = n),
          (this.messageId = e.eventBusMessageIds.REPORT_WIDGET_HEIGHT)
      }
    })()
    e.WidgetHeightChangedMsg = u
    var f = (function() {
      return function(t, n) {
        ;(this.configId = t),
          (this.requestId = n),
          (this.messageId = e.eventBusMessageIds.TRANSFER_PAGE_INFO_REQUEST)
      }
    })()
    e.TransferPageInfoRequestMsg = f
    var d = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.FEEDBACK_INFLIGHT)
      }
    })()
    e.FeedbackInFlightMsg = d
    var l = (function() {
      return function(t, n) {
        ;(this.configId = t),
          (this.payload = n),
          (this.messageId = e.eventBusMessageIds.TRANSFER_PAGE_INFO)
      }
    })()
    e.TransferPageInfoMsg = l
    var p = (function() {
      return function(t, n) {
        ;(this.config = t),
          (this.themeCSS = n),
          (this.messageId = e.eventBusMessageIds.RECONFIGURE),
          (this.configId = t.configId)
      }
    })()
    e.ApplyConfigMsg = p
    var g = (function() {
      return function(t, n, r) {
        ;(this.configId = t),
          (this.elementWidth = n),
          (this.elementHeight = r),
          (this.messageId = e.eventBusMessageIds.RECONFIGURE_SIZE)
      }
    })()
    e.ReconfigureLauncherSize = g
    var h = (function() {
      return function(t) {
        ;(this.configId = t), (this.messageId = e.eventBusMessageIds.RESET)
      }
    })()
    e.ResetWidgetMsg = h
    var b = (function() {
      return function(t) {
        ;(this.configId = t),
          (this.messageId = e.eventBusMessageIds.HOST_RESIZED)
      }
    })()
    e.HostResizedMsg = b
  },
  ,
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.appziCDNEndpoint = 'https://app.appzi.io'),
      (e.collectorEndpoint = 'https://appzi-collector-b.azurewebsites.net/api'),
      (e.probeEndpoint = e.collectorEndpoint + '/probe'),
      (e.widgetOuterCloseButtonElementPrefix = 'do'),
      (e.getLauncherId = function(t) {
        return 'appzi-launch-button-' + t
      }),
      (e.getWidgetId = function(t) {
        return 'appzi-widget-' + t
      }),
      (e.getBackdropId = function(t) {
        return 'appzi-widget-backdrop-' + t
      }),
      (e.getMouseCloseButton = function(t) {
        return 'co-' + t
      }),
      (e.getTouchCloseButton = function(t) {
        return 'ci-' + t
      }),
      (e.buildConstants = {
        launcherPrefixSticky: 'les',
        launcherPrefixFloating: 'lf',
        threeStepWidget: 'w',
      }),
      (e.apiConfig = function() {
        return {
          collectorEndpoint: e.collectorEndpoint,
          probeEndpoint: e.probeEndpoint,
        }
      })
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(8)
    e.WebBrowserWrapper = r.WebBrowserWrapper
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = (function() {
      function t() {}
      return (
        Object.defineProperty(t.prototype, 'nativeDocument', {
          get: function() {
            return document
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'nativeWindow', {
          get: function() {
            return window
          },
          enumerable: !0,
          configurable: !0,
        }),
        t
      )
    })()
    e.WebBrowserWrapper = n
  },
  ,
  ,
  ,
  ,
  function(t, e, n) {
    ;(function(t) {
      !(function(n) {

        var r = {}
        n.PubSub = r
        var o = n.define
        !(function(t) {
          function e(t) {
            var e
            for (e in t) if (t.hasOwnProperty(e)) return !0
            return !1
          }
          function n(t, e, n) {
            try {
              t(e, n)
            } catch (t) {
              setTimeout(
                (function(t) {
                  return function() {
                    throw t
                  }
                })(t),
                0
              )
            }
          }
          function r(t, e, n) {
            t(e, n)
          }
          function o(t, e, o, i) {
            var s,
              c = a[e],
              u = i ? r : n
            if (a.hasOwnProperty(e))
              for (s in c) c.hasOwnProperty(s) && u(c[s], t, o)
          }
          function i(t, n, r, i) {
            var s = (function(t, e, n) {
                return function() {
                  var r = t + '',
                    i = r.lastIndexOf('.')
                  for (o(t, t, e, n); -1 !== i; )
                    (r = r.substr(0, i)),
                      (i = r.lastIndexOf('.')),
                      o(t, r, e, n)
                }
              })(t, n, i),
              c = (function(t) {
                var n = t + '',
                  r = !(!a.hasOwnProperty(n) || !e(a[n])),
                  o = n.lastIndexOf('.')
                for (; !r && -1 !== o; )
                  (n = n.substr(0, o)),
                    (o = n.lastIndexOf('.')),
                    (r = !(!a.hasOwnProperty(n) || !e(a[n])))
                return r
              })(t)
            return !!c && (!0 === r ? s() : setTimeout(s, 0), !0)
          }
          var a = {},
            s = -1
          ;(t.publish = function(e, n) {
            return i(e, n, !1, t.immediateExceptions)
          }),
            (t.publishSync = function(e, n) {
              return i(e, n, !0, t.immediateExceptions)
            }),
            (t.subscribe = function(t, e) {
              if ('function' != typeof e) return !1
              a.hasOwnProperty(t) || (a[t] = {})
              var n = 'uid_' + ++s
              return (a[t][n] = e), n
            }),
            (t.subscribeOnce = function(e, n) {
              var r = t.subscribe(e, function() {
                t.unsubscribe(r), n.apply(this, arguments)
              })
              return t
            }),
            (t.clearAllSubscriptions = function() {
              a = {}
            }),
            (t.clearSubscriptions = function(t) {
              var e
              for (e in a)
                a.hasOwnProperty(e) && 0 === e.indexOf(t) && delete a[e]
            }),
            (t.unsubscribe = function(e) {
              var n,
                r,
                o,
                i =
                  'string' == typeof e &&
                  (a.hasOwnProperty(e) ||
                    (function(t) {
                      var e
                      for (e in a)
                        if (a.hasOwnProperty(e) && 0 === e.indexOf(t)) return !0
                      return !1
                    })(e)),
                s = !i && 'string' == typeof e,
                c = 'function' == typeof e,
                u = !1
              if (!i) {
                for (n in a)
                  if (a.hasOwnProperty(n)) {
                    if (((r = a[n]), s && r[e])) {
                      delete r[e], (u = e)
                      break
                    }
                    if (c)
                      for (o in r)
                        r.hasOwnProperty(o) &&
                          r[o] === e &&
                          (delete r[o], (u = !0))
                  }
                return u
              }
              t.clearSubscriptions(e)
            })
        })(r),
          'function' == typeof o && o.amd
            ? o(function() {
                return r
              })
            : (void 0 !== t && t.exports && (e = t.exports = r),
              (e.PubSub = r),
              (t.exports = e = r))
      })(('object' == typeof window && window) || this)
    }.call(this, n(14)(t)))
  },
  function(t) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function() {

    !(function() {
      if (
        ('function' != typeof Object.assign &&
          (Object.assign = function(t) {
            if (null != t) {
              for (var e = Object(t), n = 1; arguments.length > n; n++) {
                var r = arguments[n]
                if (null != r)
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
              }
              return e
            }
          }),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, 'find', {
            value: function(t) {
              if (null != this) {
                var e = Object(this),
                  n = e.length >>> 0
                if ('function' == typeof t)
                  for (var r = arguments[1], o = 0; n > o; ) {
                    var i = e[o]
                    if (t.call(r, i, o, e)) return i
                    o++
                  }
              }
            },
          }),
        Element && !Element.prototype.matches)
      ) {
        var t = Element.prototype
        t.matches =
          t.matchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector ||
          t.oMatchesSelector ||
          t.webkitMatchesSelector
      }
    })()
  },
  ,
  ,
  ,
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(66)
    ;(e.ThemeBuilder = r.ThemeBuilder), (e.mobileLayoutThreshold = 550)
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(68)
    e.LauncherTypes = r.LauncherTypes
  },
  ,
  ,
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r,
      o = n(6),
      i = n(13),
      a = n(19)
    !(function(t) {
      ;(t[(t.Desktop = 0)] = 'Desktop'), (t[(t.Mobile = 1)] = 'Mobile')
    })((r = e.BrowserViewPort || (e.BrowserViewPort = {})))
    var s = (function() {
      function t() {
        var t = this
        ;(this.getLauncherHost = function(e) {
          return t.nativeDocument.getElementById(o.getLauncherId(e))
        }),
          window.addEventListener(
            'resize',
            function() {
              return i.publish('WebBrowserWrapper.viewPortChanged', t.viewPort)
            },
            { passive: !0 }
          )
      }
      return (
        Object.defineProperty(t.prototype, 'appziSettings', {
          get: function() {
            return window.appziSettings
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'nativeDocument', {
          get: function() {
            return document
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'nativeWindow', {
          get: function() {
            return window
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'viewPort', {
          get: function() {
            var t = this.nativeWindow.devicePixelRatio || 1
            return a.mobileLayoutThreshold >
              Math.round(this.nativeWindow.innerWidth / t) ||
              a.mobileLayoutThreshold >
                Math.round(this.nativeWindow.innerHeight / t)
              ? r.Mobile
              : r.Desktop
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.addBorderlessIFrame = function(t, e) {
          var n = this.nativeDocument,
            r = n.createElement('div')
          r.id = t
          var o = n.createElement('iframe')
          return (
            (o.src = e),
            (o.frameBorder = '0'),
            r.appendChild(o),
            n.body.appendChild(r),
            { iframe: o, container: r }
          )
        }),
        (t.prototype.viewPortChanged = function(t) {
          var e = i.subscribe('WebBrowserWrapper.viewPortChanged', function(
            e,
            n
          ) {
            t(n)
          })
          return {
            unsubscribe: function() {
              i.unsubscribe(e)
            },
          }
        }),
        (t.prototype.getWidgetHost = function(t) {
          return this.nativeDocument.getElementById(o.getWidgetId(t))
        }),
        t
      )
    })()
    e.BridgeBrowserWrapper = s
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getLRTBStyles = function(t) {
        var e = function(t, e) {
          var n = t[e]
          return void 0 === n
            ? ''
            : e +
                ': ' +
                (function(t) {
                  return 'string' == typeof t ? t : t + 'px'
                })(n) +
                ';'
        }
        return e(t, 'top') + e(t, 'bottom') + e(t, 'left') + e(t, 'right')
      })
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.shadowSpace = 20),
      (e.tooltipSpace = 255)
  },
  function(t) {
    var e
    !(function(n) {
      function r(t, e) {
        if (((t = t || ''), (e = e || {}), t instanceof r)) return t
        if (!(this instanceof r)) return new r(t, e)
        var o = (function(t) {
          var e = { r: 0, g: 0, b: 0 },
            r = 1,
            o = null,
            i = null,
            a = null,
            s = !1,
            c = !1
          'string' == typeof t &&
            (t = (function(t) {
              t = t
                .replace(M, '')
                .replace(O, '')
                .toLowerCase()
              var e,
                n = !1
              if (N[t]) (t = N[t]), (n = !0)
              else if ('transparent' == t)
                return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
              if ((e = j.rgb.exec(t))) return { r: e[1], g: e[2], b: e[3] }
              if ((e = j.rgba.exec(t)))
                return { r: e[1], g: e[2], b: e[3], a: e[4] }
              if ((e = j.hsl.exec(t))) return { h: e[1], s: e[2], l: e[3] }
              if ((e = j.hsla.exec(t)))
                return { h: e[1], s: e[2], l: e[3], a: e[4] }
              if ((e = j.hsv.exec(t))) return { h: e[1], s: e[2], v: e[3] }
              if ((e = j.hsva.exec(t)))
                return { h: e[1], s: e[2], v: e[3], a: e[4] }
              if ((e = j.hex8.exec(t)))
                return {
                  r: T(e[1]),
                  g: T(e[2]),
                  b: T(e[3]),
                  a: R(e[4]),
                  format: n ? 'name' : 'hex8',
                }
              if ((e = j.hex6.exec(t)))
                return {
                  r: T(e[1]),
                  g: T(e[2]),
                  b: T(e[3]),
                  format: n ? 'name' : 'hex',
                }
              if ((e = j.hex4.exec(t)))
                return {
                  r: T(e[1] + '' + e[1]),
                  g: T(e[2] + '' + e[2]),
                  b: T(e[3] + '' + e[3]),
                  a: R(e[4] + '' + e[4]),
                  format: n ? 'name' : 'hex8',
                }
              if ((e = j.hex3.exec(t)))
                return {
                  r: T(e[1] + '' + e[1]),
                  g: T(e[2] + '' + e[2]),
                  b: T(e[3] + '' + e[3]),
                  format: n ? 'name' : 'hex',
                }
              return !1
            })(t))
          'object' == typeof t &&
            (C(t.r) && C(t.g) && C(t.b)
              ? ((u = t.g),
                (f = t.b),
                (e = {
                  r: 255 * I(t.r, 255),
                  g: 255 * I(u, 255),
                  b: 255 * I(f, 255),
                }),
                (s = !0),
                (c = '%' === (t.r + '').substr(-1) ? 'prgb' : 'rgb'))
              : C(t.h) && C(t.s) && C(t.v)
              ? ((o = x(t.s)),
                (i = x(t.v)),
                (e = (function(t, e, r) {
                  ;(t = 6 * I(t, 360)), (e = I(e, 100)), (r = I(r, 100))
                  var o = n.floor(t),
                    i = t - o,
                    a = r * (1 - e),
                    s = r * (1 - i * e),
                    c = r * (1 - (1 - i) * e),
                    u = o % 6
                  return {
                    r: 255 * [r, s, a, a, c, r][u],
                    g: 255 * [c, r, r, s, a, a][u],
                    b: 255 * [a, a, c, r, r, s][u],
                  }
                })(t.h, o, i)),
                (s = !0),
                (c = 'hsv'))
              : C(t.h) &&
                C(t.s) &&
                C(t.l) &&
                ((o = x(t.s)),
                (a = x(t.l)),
                (e = (function(t, e, n) {
                  function r(t, e, n) {
                    return (
                      0 > n && (n += 1),
                      n > 1 && (n -= 1),
                      1 / 6 > n
                        ? t + 6 * (e - t) * n
                        : 0.5 > n
                        ? e
                        : 2 / 3 > n
                        ? t + (e - t) * (2 / 3 - n) * 6
                        : t
                    )
                  }
                  var o, i, a
                  if (
                    ((t = I(t, 360)), (e = I(e, 100)), (n = I(n, 100)), 0 === e)
                  )
                    o = i = a = n
                  else {
                    var s = 0.5 > n ? n * (1 + e) : n + e - n * e,
                      c = 2 * n - s
                    ;(o = r(c, s, t + 1 / 3)),
                      (i = r(c, s, t)),
                      (a = r(c, s, t - 1 / 3))
                  }
                  return { r: 255 * o, g: 255 * i, b: 255 * a }
                })(t.h, o, a)),
                (s = !0),
                (c = 'hsl')),
            t.hasOwnProperty('a') && (r = t.a))
          var u, f
          return (
            (r = _(r)),
            {
              ok: s,
              format: t.format || c,
              r: B(255, W(e.r, 0)),
              g: B(255, W(e.g, 0)),
              b: B(255, W(e.b, 0)),
              a: r,
            }
          )
        })(t)
        ;(this._originalInput = t),
          (this._r = o.r),
          (this._g = o.g),
          (this._b = o.b),
          (this._a = o.a),
          (this._roundA = L(100 * this._a) / 100),
          (this._format = e.format || o.format),
          (this._gradientType = e.gradientType),
          1 > this._r && (this._r = L(this._r)),
          1 > this._g && (this._g = L(this._g)),
          1 > this._b && (this._b = L(this._b)),
          (this._ok = o.ok),
          (this._tc_id = A++)
      }
      function o(t, e, n) {
        ;(t = I(t, 255)), (e = I(e, 255)), (n = I(n, 255))
        var r,
          o,
          i = W(t, e, n),
          a = B(t, e, n),
          s = (i + a) / 2
        if (i == a) r = o = 0
        else {
          var c = i - a
          switch (((o = s > 0.5 ? c / (2 - i - a) : c / (i + a)), i)) {
            case t:
              r = (e - n) / c + (n > e ? 6 : 0)
              break
            case e:
              r = (n - t) / c + 2
              break
            case n:
              r = (t - e) / c + 4
          }
          r /= 6
        }
        return { h: r, s: o, l: s }
      }
      function i(t, e, n) {
        ;(t = I(t, 255)), (e = I(e, 255)), (n = I(n, 255))
        var r,
          o,
          i = W(t, e, n),
          a = B(t, e, n),
          s = i,
          c = i - a
        if (((o = 0 === i ? 0 : c / i), i == a)) r = 0
        else {
          switch (i) {
            case t:
              r = (e - n) / c + (n > e ? 6 : 0)
              break
            case e:
              r = (n - t) / c + 2
              break
            case n:
              r = (t - e) / c + 4
          }
          r /= 6
        }
        return { h: r, s: o, v: s }
      }
      function a(t, e, n, r) {
        var o = [
          k(L(t).toString(16)),
          k(L(e).toString(16)),
          k(L(n).toString(16)),
        ]
        return r &&
          o[0].charAt(0) == o[0].charAt(1) &&
          o[1].charAt(0) == o[1].charAt(1) &&
          o[2].charAt(0) == o[2].charAt(1)
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join('')
      }
      function s(t, e, n, r) {
        return [
          k(S(r)),
          k(L(t).toString(16)),
          k(L(e).toString(16)),
          k(L(n).toString(16)),
        ].join('')
      }
      function c(t, e) {
        e = 0 === e ? 0 : e || 10
        var n = r(t).toHsl()
        return (n.s -= e / 100), (n.s = E(n.s)), r(n)
      }
      function u(t, e) {
        e = 0 === e ? 0 : e || 10
        var n = r(t).toHsl()
        return (n.s += e / 100), (n.s = E(n.s)), r(n)
      }
      function f(t) {
        return r(t).desaturate(100)
      }
      function d(t, e) {
        e = 0 === e ? 0 : e || 10
        var n = r(t).toHsl()
        return (n.l += e / 100), (n.l = E(n.l)), r(n)
      }
      function l(t, e) {
        e = 0 === e ? 0 : e || 10
        var n = r(t).toRgb()
        return (
          (n.r = W(0, B(255, n.r - L((-e / 100) * 255)))),
          (n.g = W(0, B(255, n.g - L((-e / 100) * 255)))),
          (n.b = W(0, B(255, n.b - L((-e / 100) * 255)))),
          r(n)
        )
      }
      function p(t, e) {
        e = 0 === e ? 0 : e || 10
        var n = r(t).toHsl()
        return (n.l -= e / 100), (n.l = E(n.l)), r(n)
      }
      function g(t, e) {
        var n = r(t).toHsl(),
          o = (n.h + e) % 360
        return (n.h = 0 > o ? 360 + o : o), r(n)
      }
      function h(t) {
        var e = r(t).toHsl()
        return (e.h = (e.h + 180) % 360), r(e)
      }
      function b(t) {
        var e = r(t).toHsl(),
          n = e.h
        return [
          r(t),
          r({ h: (n + 120) % 360, s: e.s, l: e.l }),
          r({ h: (n + 240) % 360, s: e.s, l: e.l }),
        ]
      }
      function v(t) {
        var e = r(t).toHsl(),
          n = e.h
        return [
          r(t),
          r({ h: (n + 90) % 360, s: e.s, l: e.l }),
          r({ h: (n + 180) % 360, s: e.s, l: e.l }),
          r({ h: (n + 270) % 360, s: e.s, l: e.l }),
        ]
      }
      function m(t) {
        var e = r(t).toHsl(),
          n = e.h
        return [
          r(t),
          r({ h: (n + 72) % 360, s: e.s, l: e.l }),
          r({ h: (n + 216) % 360, s: e.s, l: e.l }),
        ]
      }
      function y(t, e, n) {
        ;(e = e || 6), (n = n || 30)
        var o = r(t).toHsl(),
          i = 360 / n,
          a = [r(t)]
        for (o.h = (o.h - ((i * e) >> 1) + 720) % 360; --e; )
          (o.h = (o.h + i) % 360), a.push(r(o))
        return a
      }
      function w(t, e) {
        e = e || 6
        for (
          var n = r(t).toHsv(), o = n.h, i = n.s, a = n.v, s = [], c = 1 / e;
          e--;

        )
          s.push(r({ h: o, s: i, v: a })), (a = (a + c) % 1)
        return s
      }
      function _(t) {
        return (isNaN((t = parseFloat(t))) || 0 > t || t > 1) && (t = 1), t
      }
      function I(t, e) {
        ;(function(t) {
          return (
            'string' == typeof t && -1 != t.indexOf('.') && 1 === parseFloat(t)
          )
        })(t) && (t = '100%')
        var r = (function(t) {
          return 'string' == typeof t && -1 != t.indexOf('%')
        })(t)
        return (
          (t = B(e, W(0, parseFloat(t)))),
          r && (t = parseInt(t * e, 10) / 100),
          1e-6 > n.abs(t - e) ? 1 : (t % e) / parseFloat(e)
        )
      }
      function E(t) {
        return B(1, W(0, t))
      }
      function T(t) {
        return parseInt(t, 16)
      }
      function k(t) {
        return 1 == t.length ? '0' + t : '' + t
      }
      function x(t) {
        return t > 1 || (t = 100 * t + '%'), t
      }
      function S(t) {
        return n.round(255 * parseFloat(t)).toString(16)
      }
      function R(t) {
        return T(t) / 255
      }
      function C(t) {
        return !!j.CSS_UNIT.exec(t)
      }
      var M = /^\s+/,
        O = /\s+$/,
        A = 0,
        L = n.round,
        B = n.min,
        W = n.max,
        z = n.random
      ;(r.prototype = {
        isDark: function() {
          return 128 > this.getBrightness()
        },
        isLight: function() {
          return !this.isDark()
        },
        isValid: function() {
          return this._ok
        },
        getOriginalInput: function() {
          return this._originalInput
        },
        getFormat: function() {
          return this._format
        },
        getAlpha: function() {
          return this._a
        },
        getBrightness: function() {
          var t = this.toRgb()
          return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
        },
        getLuminance: function() {
          var t,
            e,
            r,
            o = this.toRgb()
          return (
            (e = o.g / 255),
            (r = o.b / 255),
            0.2126 *
              ((t = o.r / 255) > 0.03928
                ? n.pow((t + 0.055) / 1.055, 2.4)
                : t / 12.92) +
              0.7152 *
                (e > 0.03928 ? n.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
              0.0722 *
                (r > 0.03928 ? n.pow((r + 0.055) / 1.055, 2.4) : r / 12.92)
          )
        },
        setAlpha: function(t) {
          return (this._a = _(t)), (this._roundA = L(100 * this._a) / 100), this
        },
        toHsv: function() {
          var t = i(this._r, this._g, this._b)
          return { h: 360 * t.h, s: t.s, v: t.v, a: this._a }
        },
        toHsvString: function() {
          var t = i(this._r, this._g, this._b),
            e = L(360 * t.h),
            n = L(100 * t.s),
            r = L(100 * t.v)
          return 1 == this._a
            ? 'hsv(' + e + ', ' + n + '%, ' + r + '%)'
            : 'hsva(' + e + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')'
        },
        toHsl: function() {
          var t = o(this._r, this._g, this._b)
          return { h: 360 * t.h, s: t.s, l: t.l, a: this._a }
        },
        toHslString: function() {
          var t = o(this._r, this._g, this._b),
            e = L(360 * t.h),
            n = L(100 * t.s),
            r = L(100 * t.l)
          return 1 == this._a
            ? 'hsl(' + e + ', ' + n + '%, ' + r + '%)'
            : 'hsla(' + e + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')'
        },
        toHex: function(t) {
          return a(this._r, this._g, this._b, t)
        },
        toHexString: function(t) {
          return '#' + this.toHex(t)
        },
        toHex8: function(t) {
          return (function(t, e, n, r, o) {
            var i = [
              k(L(t).toString(16)),
              k(L(e).toString(16)),
              k(L(n).toString(16)),
              k(S(r)),
            ]
            return o &&
              i[0].charAt(0) == i[0].charAt(1) &&
              i[1].charAt(0) == i[1].charAt(1) &&
              i[2].charAt(0) == i[2].charAt(1) &&
              i[3].charAt(0) == i[3].charAt(1)
              ? i[0].charAt(0) +
                  i[1].charAt(0) +
                  i[2].charAt(0) +
                  i[3].charAt(0)
              : i.join('')
          })(this._r, this._g, this._b, this._a, t)
        },
        toHex8String: function(t) {
          return '#' + this.toHex8(t)
        },
        toRgb: function() {
          return { r: L(this._r), g: L(this._g), b: L(this._b), a: this._a }
        },
        toRgbString: function() {
          return 1 == this._a
            ? 'rgb(' + L(this._r) + ', ' + L(this._g) + ', ' + L(this._b) + ')'
            : 'rgba(' +
                L(this._r) +
                ', ' +
                L(this._g) +
                ', ' +
                L(this._b) +
                ', ' +
                this._roundA +
                ')'
        },
        toPercentageRgb: function() {
          return {
            r: L(100 * I(this._r, 255)) + '%',
            g: L(100 * I(this._g, 255)) + '%',
            b: L(100 * I(this._b, 255)) + '%',
            a: this._a,
          }
        },
        toPercentageRgbString: function() {
          return 1 == this._a
            ? 'rgb(' +
                L(100 * I(this._r, 255)) +
                '%, ' +
                L(100 * I(this._g, 255)) +
                '%, ' +
                L(100 * I(this._b, 255)) +
                '%)'
            : 'rgba(' +
                L(100 * I(this._r, 255)) +
                '%, ' +
                L(100 * I(this._g, 255)) +
                '%, ' +
                L(100 * I(this._b, 255)) +
                '%, ' +
                this._roundA +
                ')'
        },
        toName: function() {
          return 0 === this._a
            ? 'transparent'
            : this._a >= 1 && (H[a(this._r, this._g, this._b, !0)] || !1)
        },
        toFilter: function(t) {
          var e = '#' + s(this._r, this._g, this._b, this._a),
            n = e,
            o = this._gradientType ? 'GradientType = 1, ' : ''
          if (t) {
            var i = r(t)
            n = '#' + s(i._r, i._g, i._b, i._a)
          }
          return (
            'progid:DXImageTransform.Microsoft.gradient(' +
            o +
            'startColorstr=' +
            e +
            ',endColorstr=' +
            n +
            ')'
          )
        },
        toString: function(t) {
          var e = !!t
          t = t || this._format
          var n = !1
          return e ||
            this._a >= 1 ||
            0 > this._a ||
            ('hex' !== t &&
              'hex6' !== t &&
              'hex3' !== t &&
              'hex4' !== t &&
              'hex8' !== t &&
              'name' !== t)
            ? ('rgb' === t && (n = this.toRgbString()),
              'prgb' === t && (n = this.toPercentageRgbString()),
              ('hex' !== t && 'hex6' !== t) || (n = this.toHexString()),
              'hex3' === t && (n = this.toHexString(!0)),
              'hex4' === t && (n = this.toHex8String(!0)),
              'hex8' === t && (n = this.toHex8String()),
              'name' === t && (n = this.toName()),
              'hsl' === t && (n = this.toHslString()),
              'hsv' === t && (n = this.toHsvString()),
              n || this.toHexString())
            : 'name' === t && 0 === this._a
            ? this.toName()
            : this.toRgbString()
        },
        clone: function() {
          return r('' + this)
        },
        _applyModification: function(t, e) {
          var n = t.apply(null, [this].concat([].slice.call(e)))
          return (
            (this._r = n._r),
            (this._g = n._g),
            (this._b = n._b),
            this.setAlpha(n._a),
            this
          )
        },
        lighten: function() {
          return this._applyModification(d, arguments)
        },
        brighten: function() {
          return this._applyModification(l, arguments)
        },
        darken: function() {
          return this._applyModification(p, arguments)
        },
        desaturate: function() {
          return this._applyModification(c, arguments)
        },
        saturate: function() {
          return this._applyModification(u, arguments)
        },
        greyscale: function() {
          return this._applyModification(f, arguments)
        },
        spin: function() {
          return this._applyModification(g, arguments)
        },
        _applyCombination: function(t, e) {
          return t.apply(null, [this].concat([].slice.call(e)))
        },
        analogous: function() {
          return this._applyCombination(y, arguments)
        },
        complement: function() {
          return this._applyCombination(h, arguments)
        },
        monochromatic: function() {
          return this._applyCombination(w, arguments)
        },
        splitcomplement: function() {
          return this._applyCombination(m, arguments)
        },
        triad: function() {
          return this._applyCombination(b, arguments)
        },
        tetrad: function() {
          return this._applyCombination(v, arguments)
        },
      }),
        (r.fromRatio = function(t, e) {
          if ('object' == typeof t) {
            var n = {}
            for (var o in t)
              t.hasOwnProperty(o) && (n[o] = 'a' === o ? t[o] : x(t[o]))
            t = n
          }
          return r(t, e)
        }),
        (r.equals = function(t, e) {
          return !(!t || !e) && r(t).toRgbString() == r(e).toRgbString()
        }),
        (r.random = function() {
          return r.fromRatio({ r: z(), g: z(), b: z() })
        }),
        (r.mix = function(t, e, n) {
          n = 0 === n ? 0 : n || 50
          var o = r(t).toRgb(),
            i = r(e).toRgb(),
            a = n / 100
          return r({
            r: (i.r - o.r) * a + o.r,
            g: (i.g - o.g) * a + o.g,
            b: (i.b - o.b) * a + o.b,
            a: (i.a - o.a) * a + o.a,
          })
        }),
        (r.readability = function(t, e) {
          var o = r(t),
            i = r(e)
          return (
            (n.max(o.getLuminance(), i.getLuminance()) + 0.05) /
            (n.min(o.getLuminance(), i.getLuminance()) + 0.05)
          )
        }),
        (r.isReadable = function(t, e, n) {
          var o,
            i,
            a,
            s,
            c,
            u = r.readability(t, e)
          switch (
            ((i = !1),
            (s = (
              (a = (a = n) || { level: 'AA', size: 'small' }).level || 'AA'
            ).toUpperCase()),
            (c = (a.size || 'small').toLowerCase()),
            'AA' !== s && 'AAA' !== s && (s = 'AA'),
            'small' !== c && 'large' !== c && (c = 'small'),
            (o = { level: s, size: c }).level + o.size)
          ) {
            case 'AAsmall':
            case 'AAAlarge':
              i = u >= 4.5
              break
            case 'AAlarge':
              i = u >= 3
              break
            case 'AAAsmall':
              i = u >= 7
          }
          return i
        }),
        (r.mostReadable = function(t, e, n) {
          var o,
            i,
            a,
            s,
            c = null,
            u = 0
          ;(i = (n = n || {}).includeFallbackColors),
            (a = n.level),
            (s = n.size)
          for (var f = 0; e.length > f; f++)
            (o = r.readability(t, e[f])) > u && ((u = o), (c = r(e[f])))
          return r.isReadable(t, c, { level: a, size: s }) || !i
            ? c
            : ((n.includeFallbackColors = !1),
              r.mostReadable(t, ['#fff', '#000'], n))
        })
      var P,
        F,
        D,
        N = (r.names = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '0ff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000',
          blanchedalmond: 'ffebcd',
          blue: '00f',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          burntsienna: 'ea7e5d',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '0ff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkgrey: 'a9a9a9',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkslategrey: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dimgrey: '696969',
          dodgerblue: '1e90ff',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'f0f',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          grey: '808080',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgray: 'd3d3d3',
          lightgreen: '90ee90',
          lightgrey: 'd3d3d3',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslategray: '789',
          lightslategrey: '789',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '0f0',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'f0f',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370db',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'db7093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '663399',
          red: 'f00',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          slategrey: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          wheat: 'f5deb3',
          white: 'fff',
          whitesmoke: 'f5f5f5',
          yellow: 'ff0',
          yellowgreen: '9acd32',
        }),
        H = (r.hexNames = (function(t) {
          var e = {}
          for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n)
          return e
        })(N)),
        j = ((F =
          '[\\s|\\(]+(' +
          (P = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
          ')[,|\\s]+(' +
          P +
          ')[,|\\s]+(' +
          P +
          ')\\s*\\)?'),
        (D =
          '[\\s|\\(]+(' +
          P +
          ')[,|\\s]+(' +
          P +
          ')[,|\\s]+(' +
          P +
          ')[,|\\s]+(' +
          P +
          ')\\s*\\)?'),
        {
          CSS_UNIT: RegExp(P),
          rgb: RegExp('rgb' + F),
          rgba: RegExp('rgba' + D),
          hsl: RegExp('hsl' + F),
          hsla: RegExp('hsla' + D),
          hsv: RegExp('hsv' + F),
          hsva: RegExp('hsva' + D),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        })
      void 0 !== t && t.exports
        ? (t.exports = r)
        : void 0 === (e = r) || (t.exports = e)
    })(Math)
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        ;(t[(t.Launcher = 0)] = 'Launcher'),
          (t[(t.ThreeStepWidget = 1)] = 'ThreeStepWidget')
      })(e.AppziTargetBlock || (e.AppziTargetBlock = {}))
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = (function() {
      return function(t) {
        var e = this
        ;(this.mobile = function() {
          return (
            e.androidPhone() ||
            e.iPhone() ||
            e.iPod() ||
            e.windowsPhone() ||
            e.blackberryPhone() ||
            e.fxOsPhone() ||
            e.meeGo()
          )
        }),
          (this.tablet = function() {
            return (
              e.iPad() ||
              e.androidTablet() ||
              e.blackberryTablet() ||
              e.windowsTablet() ||
              e.fxOsTablet()
            )
          }),
          (this.desktop = function() {
            return !e.tablet() && !e.mobile()
          }),
          (this.iPhone = function() {
            return !e.windows() && e.find('iphone')
          }),
          (this.iPod = function() {
            return e.find('ipod')
          }),
          (this.iPad = function() {
            return e.find('ipad')
          }),
          (this.android = function() {
            return !e.windows() && e.find('android')
          }),
          (this.androidPhone = function() {
            return e.android() && e.find('mobile')
          }),
          (this.androidTablet = function() {
            return e.android() && !e.find('mobile')
          }),
          (this.blackberry = function() {
            return e.find('blackberry') || e.find('bb10') || e.find('rim')
          }),
          (this.blackberryPhone = function() {
            return e.blackberry() && !e.find('tablet')
          }),
          (this.blackberryTablet = function() {
            return e.blackberry() && e.find('tablet')
          }),
          (this.windows = function() {
            return e.find('windows')
          }),
          (this.windowsPhone = function() {
            return e.windows() && e.find('phone')
          }),
          (this.windowsTablet = function() {
            return e.windows() && e.find('touch') && !e.windowsPhone()
          }),
          (this.fxOs = function() {
            return (e.find('(mobile') || e.find('(tablet')) && e.find(' rv:')
          }),
          (this.fxOsPhone = function() {
            return e.fxOs() && e.find('mobile')
          }),
          (this.fxOsTablet = function() {
            return e.fxOs() && e.find('tablet')
          }),
          (this.meeGo = function() {
            return e.find('meego')
          }),
          (this.find = function(t) {
            return -1 !== e.userAgent.indexOf(t)
          }),
          (this.userAgent = t.toLowerCase())
      }
    })()
    e.DeviceRecognizer = n
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.iconFontStyle =
        "@font-face {\n\tfont-family: 'appzi-icons';\n\tsrc:  url('/assets/fonts/appzi-icons-f7wbvw.eot?s03sm1');\n\tsrc:  url('/assets/fonts/appzi-icons-f7wbvw.eot?s03sm1#iefix') format('embedded-opentype'),\n\turl('/assets/fonts/appzi-icons-f7wbvw.ttf?s03sm1') format('truetype'),\n\turl('/assets/fonts/appzi-icons-f7wbvw.woff?s03sm1') format('woff'),\n\turl('/assets/fonts/appzi-icons-f7wbvw" +
        '.svg?s03sm1#icomoon\') format(\'svg\');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n[class^="appzi-icon-"], [class*=" appzi-icon-"] {\n\tfont-family: \'appzi-icons\' !important;\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tdisplay: inline-block;\n}\n\n.appzi-icon-1:before {\n  content: "\\e900";\n}\n.appzi-icon-2:before {\n  content: "\\e901";\n}\n.appzi-icon-4:before {\n  content: "\\e902";\n}\n.appzi-icon-9:before {\n  content: "\\e903";\n}\n.appzi-icon-7:before {\n  content: "\\e904";\n}\n.appzi-icon-11:before {\n  content: "\\e905";\n}\n.appzi-icon-3:before {\n  content: "\\e906";\n}\n.appzi-icon-5:before {\n  content: "\\e907";\n}\n.appzi-icon-6:before {\n  content: "\\e908";\n}\n.appzi-icon-8:before {\n  content: "\\e909";\n}\n.appzi-icon-10:before {\n  content: "\\e90a";\n}\n.appzi-icon-12:before {\n  content: "\\e90b";\n}\n')
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    t.exports = n(62)
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(8)
    n(63).startAppziWithTokenScript(new r.WebBrowserWrapper())
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(6),
      o = n(64),
      i = n(77),
      a = n(80),
      s = n(81)
    e.startAppziWithTokenScript = function(t) {
      var e,
        n = function(e, n) {
          if (t.nativeWindow.appzi) throw Error('appzi already booted')
          var r = new i.AppziOrchestrator(e)
          r.cacheConfigs(n),
            (t.nativeWindow.appzi = r),
            new s.AppziTargetedConfigSwapper(r, t).watchConfigs(n),
            (t.nativeWindow.bootAppzi = void 0),
            o.setupEventBridge(r),
            /iPad|iPhone|iPod/.test(t.nativeWindow.navigator.userAgent) &&
              !t.nativeWindow.MSStream &&
              t.nativeDocument.body.classList.add('appzi-is-ios')
        }
      ;(t.nativeWindow.bootAppzi = n),
        (e = function() {
          a.loadConfigsUsingScriptToken(
            t,
            function(t, e) {
              n(t, e)
            },
            r.appziCDNEndpoint,
            r.probeEndpoint
          )
        }),
        'loading' === t.nativeDocument.readyState
          ? t.nativeDocument.addEventListener('DOMContentLoaded', e)
          : e()
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(4),
      o = n(65),
      i = n(23),
      a = n(27)
    e.setupEventBridge = function(t, e, n) {
      e || (e = new i.BridgeBrowserWrapper()),
        n || (n = new o.MetaViewPortController(e))
      var s = e.nativeWindow,
        c = e.nativeDocument
      e.viewPortChanged(function() {
        return n.reevaluate()
      })
      var u = function(t) {
        var n = e.getWidgetHost(t.configId)
        n && n.querySelector('iframe').contentWindow.postMessage(t, '*')
      }
      s.addEventListener('message', function(o) {
        var i = o.data
        if (i && i.messageId) {
          var f = t.transformMessage(i)
          switch (f.messageId) {
            case r.eventBusMessageIds.FEEDBACK_START:
              if (!t.bootWidget(f.configId)) return
              setTimeout(function() {
                c.body.classList.add('simple-feedback-open-' + f.configId),
                  n.reevaluate()
              }, 50)
              break
            case r.eventBusMessageIds.FEEDBACK_END:
              c.body.classList.remove('simple-feedback-open-' + f.configId),
                n.reevaluate(),
                setTimeout(function() {
                  var t = 'appzi-small-' + f.configId
                  if (-1 !== c.body.className.indexOf(t)) {
                    c.body.classList.remove(t)
                    var e = new r.ResetWidgetMsg(f.configId)
                    u(e)
                  }
                }, 300)
              break
            case r.eventBusMessageIds.GET_CONFIGURATION_LAUNCHER:
              t.reapplyConfig(f.configId, a.AppziTargetBlock.Launcher)
              break
            case r.eventBusMessageIds.REPORT_WIDGET_HEIGHT:
              t.resizeWidgetHost(f.configId, void 0, f.height)
              break
            case r.eventBusMessageIds.HEAD_LINK_CLICKED:
              var d = e.appziSettings && e.appziSettings.onHeadLinkClicked
              if (d)
                try {
                  d(f.configId)
                } catch (o) {}
              break
            case r.eventBusMessageIds.GET_CONFIGURATION_WIDGET:
              t.reapplyConfig(f.configId, a.AppziTargetBlock.ThreeStepWidget)
              break
            case r.eventBusMessageIds.LAUNCHER_READY_FOR_EVENTS:
              c.body.classList.add('appzi-on-' + f.configId),
                c.body.classList.add('appzi-launcher-collapsed-' + f.configId),
                t.reapplyConfig(f.configId, a.AppziTargetBlock.Launcher)
              break
            case r.eventBusMessageIds.LAUNCHER_READY_FOR_RENDERING:
              c.body.classList.remove('appzi-launcher-collapsed-' + f.configId)
              break
            case r.eventBusMessageIds.FEEDBACK_INFLIGHT:
              c.body.classList.add('appzi-small-' + f.configId)
              break
            case r.eventBusMessageIds.TRANSFER_PAGE_INFO_REQUEST:
              var l = t.getConfig(f.configId).collect.screenShot,
                p = void 0,
                g = void 0,
                h = void 0,
                b = void 0,
                v = void 0,
                m = void 0,
                y = void 0
              try {
                ;(p =
                  s.innerWidth ||
                  c.documentElement.clientWidth ||
                  c.body.clientWidth),
                  (g =
                    s.innerHeight ||
                    c.documentElement.clientHeight ||
                    c.body.clientHeight),
                  (h =
                    (s.pageXOffset || c.documentElement.scrollLeft) -
                    (c.documentElement.clientLeft || 0)),
                  (b =
                    (s.pageYOffset || c.documentElement.scrollTop) -
                    (c.documentElement.clientTop || 0)),
                  (v =
                    (s.navigator.languages &&
                      s.navigator.languages.join(', ')) ||
                    s.navigator.language ||
                    s.navigator.userLanguage),
                  (m = s.location.href),
                  (y = l ? c.documentElement.outerHTML : '')
              } catch (t) {}
              var w = new r.TransferPageInfoMsg(f.configId, {
                pageInfo: {
                  html: y,
                  originHref: m,
                  language: v,
                  screenWidth: Math.round(p || 1024),
                  screenHeight: Math.round(g || 768),
                  scrollLeftOffset: Math.round(h || 0),
                  scrollTopOffset: Math.round(b || 0),
                },
                requestId: f.requestId,
              })
              u(w)
          }
        }
      })
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(23)
    ;(e.appziFullScreenWidgetViewPortMeta =
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'),
      (e.fallbackContentForMissingMetaTag = 'initial-scale=1')
    var o = (function() {
      function t(t) {
        this.bw = t
      }
      return (
        (t.prototype.reevaluate = function() {
          switch (this.bw.viewPort) {
            case r.BrowserViewPort.Mobile:
              ;-1 !==
              this.bw.nativeDocument.body.className.indexOf(
                'simple-feedback-open-'
              )
                ? this.setAppziFullScreenMeta()
                : this.restoreMeta()
              break
            default:
              this.restoreMeta()
          }
        }),
        (t.prototype.restoreMeta = function() {
          this._savedViewPortContent &&
            this.getMetaTag().setAttribute(
              'content',
              this._savedViewPortContent
            )
        }),
        (t.prototype.setAppziFullScreenMeta = function() {
          var t = this.getMetaTag()
          t ||
            ((t = this.bw.nativeDocument.createElement('meta')).setAttribute(
              'name',
              'viewport'
            ),
            t.setAttribute('content', e.fallbackContentForMissingMetaTag),
            this.bw.nativeDocument.head.appendChild(t)),
            t.getAttribute('content') !== e.appziFullScreenWidgetViewPortMeta &&
              ((this._savedViewPortContent = t.getAttribute('content')),
              t.setAttribute('content', e.appziFullScreenWidgetViewPortMeta))
        }),
        (t.prototype.getMetaTag = function() {
          return this.bw.nativeDocument.querySelector(
            'head meta[name="viewport"]'
          )
        }),
        t
      )
    })()
    e.MetaViewPortController = o
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(67),
      o = n(75),
      i = n(76),
      a = (function() {
        function t(t) {
          var e = this
          ;(this.browserWrapper = t),
            (this.generateButtonTheme = o.generateButtonTheme),
            (this.generateWidgetTheme = i.generateWidgetTheme),
            (this.reconfigureOuterLauncherTheme =
              r.reconfigureOuterLauncherTheme),
            (this.reconfigureOuterStaticTheme = r.reconfigureOuterStaticTheme),
            (this.destroy = function(t) {
              var n
              try {
                e._tryDestroy('appzi-theme-' + t),
                  e._tryDestroy('appzi-theme-static-' + t)
                var r = []
                ;(e.browserWrapper.nativeDocument.body.className || '')
                  .split(' ')
                  .filter(function(e) {
                    return '' !== e && -1 !== e.indexOf(t)
                  })
                  .forEach(function(t) {
                    return r.push(t)
                  }),
                  r.length > 0 &&
                    (n =
                      e.browserWrapper.nativeDocument.body
                        .classList).remove.apply(n, r)
              } catch (t) {}
            })
        }
        return (
          (t.prototype._tryDestroy = function(t) {
            var e = this.browserWrapper.nativeDocument.getElementById(t)
            e && e.parentNode.removeChild(e)
          }),
          t
        )
      })()
    e.ThemeBuilder = a
  },
  function(t, e, n) {

    function r(t) {
      return (
        (function(t) {
          var e = t.configId,
            n = t.launcher
          try {
            switch (n.launcherType) {
              case i.LauncherTypes.StickToEdge:
                return a.getEdgeStickingLauncherStyleProps(t)
              case i.LauncherTypes.Floating:
                return s.getFloatingLauncherStyleProps(t)
              default:
                return ''
            }
          } catch (t) {
            return (
              '#' +
              o.getWidgetId(e) +
              ',#' +
              o.getLauncherId(e) +
              '{display: none !important}'
            )
          }
        })(t) +
        '\n\t\t\t' +
        f.getPositionWidget(t) +
        '\n\t\t\t' +
        (t.widget.hasBackdrop
          ? '.simple-feedback-open-' +
            (e = t.configId) +
            ' #' +
            o.getBackdropId(e) +
            '{display: block;}'
          : '')
      )
      var e
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var o = n(6),
      i = n(20),
      a = n(69),
      s = n(70),
      c = n(71),
      u = n(72),
      f = n(74)
    ;(e.reconfigureOuterStaticTheme = function(t) {
      var e = 'appzi-theme-static-' + t,
        n = document.getElementById(e)
      n ||
        (((n = document.createElement('style')).id = e),
        document.head.appendChild(n))
      var r = u.generateStaticTheme(t),
        o = c.getSmallHostViewportStyle(t)
      n.innerHTML = r + o
    }),
      (e.reconfigureOuterLauncherTheme = function(t) {
        var e = 'appzi-theme-' + t.configId,
          n = document.getElementById(e)
        n ||
          (((n = document.createElement('style')).id = e),
          document.head.appendChild(n)),
          (n.innerHTML = r(t))
      }),
      (e.generateOuterTheme = r)
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        ;(t[(t.Floating = 1)] = 'Floating'),
          (t[(t.StickToEdge = 2)] = 'StickToEdge'),
          (t[(t.None = 3)] = 'None')
      })(e.LauncherTypes || (e.LauncherTypes = {}))
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(24)
    e.getEdgeStickingLauncherStyleProps = function(t) {
      var e = t.launcher,
        n = t.configId,
        o = e.position.anchor,
        i = e.position.offset,
        a = o.split(' '),
        s = a[0],
        c = '',
        u = '',
        f = a[1] + ': ' + i + 'px;',
        d = '',
        l = e.height,
        p = -1 * Math.floor(e.width / 2) + i
      switch (o) {
        case 'bottom center':
          ;(u = 'bottom: -' + e.height + 'px;'),
            (f =
              r.getLRTBStyles({ left: '50%' }) +
              'transform: translateX(' +
              p +
              'px);'),
            (d = 'transform: translate(' + p + 'px, -3px);')
          break
        case 'right center':
          ;(p = -1 * Math.floor(l / 2) - i),
            (u = r.getLRTBStyles({ right: -1 * e.height })),
            (f =
              r.getLRTBStyles({ bottom: '50%' }) +
              'transform-origin: bottom left;transform: rotate(-90deg) translate(' +
              p +
              'px, ' +
              e.width +
              'px);'),
            (d =
              'transform: rotate(-90deg) translate(' +
              p +
              'px, ' +
              (e.width - 3) +
              'px);')
          break
        case 'left center':
          ;(p = -1 * Math.round(e.height + i)),
            (u = r.getLRTBStyles({ left: -1 * e.height })),
            (f =
              r.getLRTBStyles({ top: '50%;' }) +
              'transform-origin: top left;transform: rotate(-90deg) translate(' +
              p +
              'px, 0px);'),
            (d = 'transform: rotate(-90deg) translate(' + p + 'px, 3px);')
          break
        case 'bottom left':
        case 'bottom right':
          ;(u = r.getLRTBStyles({ bottom: -1 * e.height })),
            (d = 'transform: translateY(-3px);')
          break
        case 'right bottom':
          ;(c =
            r.getLRTBStyles({}) +
            'transform-origin: bottom left;transform: rotate(-90deg) translateY(' +
            e.width +
            'px);'),
            (u = r.getLRTBStyles({ right: -1 * e.height })),
            (d =
              'transform: rotate(-90deg) translateY(' + (e.width - 3) + 'px);')
          break
        case 'right top':
          ;(c =
            r.getLRTBStyles({}) +
            'transform-origin: bottom right;transform: rotate(-90deg) translateX(' +
            e.height +
            'px);'),
            (u = r.getLRTBStyles({ right: -1 * e.height })),
            (d =
              'transform: rotate(-90deg) translate(' + e.height + 'px, -3px);')
          break
        case 'left bottom':
          ;(c =
            r.getLRTBStyles({}) +
            'transform-origin: top left;transform: rotate(-90deg) translateX(' +
            -1 * e.height +
            'px);'),
            (u = r.getLRTBStyles({ left: -1 * e.height })),
            (d =
              'transform: rotate(-90deg) translate(' +
              -1 * e.height +
              'px, 3px);')
          break
        case 'left top':
          ;(c =
            r.getLRTBStyles({}) +
            'transform-origin: top left;transform: rotate(-90deg) translateX(' +
            -1 * e.width +
            'px);'),
            (u = r.getLRTBStyles({ left: -1 * e.height })),
            (d =
              'transform: rotate(-90deg) translate(' +
              -1 * e.width +
              'px, 3px);')
          break
        default:
          throw Error('wrong anchor')
      }
      return (
        '\n    .appzi-on-' +
        n +
        ' #appzi-launch-button-' +
        n +
        ' {\n        border-radius: ' +
        e.borderRadius.topLeft +
        'px\n                ' +
        e.borderRadius.topRight +
        'px\n                ' +
        e.borderRadius.bottomRight +
        'px\n                ' +
        e.borderRadius.bottomLeft +
        'px;\n        width: ' +
        Math.ceil(e.width) +
        'px;\n    }\n    #appzi-launch-button-' +
        n +
        ':hover {\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);\n    }\n\t#appzi-launch-button-' +
        n +
        ' {\n        overflow: hidden;\n        transition: all .3s ease-out;\n\t\theight: ' +
        e.height +
        'px;\n\t\t' +
        c +
        '\n\t\t' +
        f +
        '\n\t\t' +
        s +
        ': -20px;\n\t}\n\t#appzi-launch-button-' +
        n +
        ':hover {\n\t\t' +
        d +
        '\n\t}\n\t.simple-feedback-open-' +
        n +
        ' #appzi-launch-button-' +
        n +
        ',\n\t.appzi-launcher-collapsed-' +
        n +
        ' #appzi-launch-button-' +
        n +
        ' {\n\t' +
        u +
        '\n}'
      )
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(25),
      o = n(24)
    e.getFloatingLauncherStyleProps = function(t) {
      var e = t.launcher,
        n = t.configId,
        i = e.position.offset - r.shadowSpace / 2,
        a = ''
      switch (e.position.anchor) {
        case 'bottom right':
          a = o.getLRTBStyles({ right: i, bottom: i })
          break
        case 'bottom left':
          a = o.getLRTBStyles({ left: i, bottom: i })
          break
        default:
          throw Error('wrong anchor')
      }
      var s = r.tooltipSpace + e.width + r.shadowSpace / 2,
        c = e.width + r.shadowSpace,
        u = ''
      switch (e.position.anchor) {
        case 'bottom right':
          u =
            'transform: translateX(-' +
            (r.tooltipSpace - r.shadowSpace / 2) +
            'px);'
          break
        case 'bottom left':
          u = ''
      }
      return (
        '#appzi-launch-button-' +
        n +
        ' {\n        overflow: hidden;\n        transition: opacity .3s ease-out, transform .3s ease-out;\n        height: ' +
        c +
        'px;\n        width: ' +
        c +
        'px;\n        max-width: ' +
        s +
        'px!important;\n        ' +
        a +
        '\n        }\n        #appzi-launch-button-' +
        n +
        '.appzi-hover {\n            overflow: visible;\n        }\n\n        .simple-feedback-open-' +
        n +
        ' #appzi-launch-button-' +
        n +
        ',\n        .appzi-launcher-collapsed-' +
        n +
        ' #appzi-launch-button-' +
        n +
        ' {\n            transform: scale(0);  opacity: 0; pointer-events:none;\n        }\n\n        #appzi-launch-button-' +
        n +
        ' iframe {\n            width:' +
        s +
        'px;\n            max-width: ' +
        s +
        'px!important;\n            ' +
        u +
        '\n        } '
      )
    }
  },
  function(t, e, n) {

    function r(t) {
      return e.wrapInSmallWpMedia(
        'body.appzi-on-' +
          t +
          ' #' +
          o.getWidgetId(t) +
          '{\n\t\t\ttop:0;\n\t\t\tbottom:0;\n\t\t\tleft:0;\n\t\t\tright:0;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\ttransform: translate(0, 120vh);\n\t\t\t-webkit-overflow-scrolling: touch;\n\t\t\tposition: fixed;\n\n\t\t}\n\t\tbody.simple-feedback-open-' +
          t +
          '  #' +
          o.getWidgetId(t) +
          ' {\n\t\t\ttransform: none;\n\t\t}\n\n\t\tbody.simple-feedback-open-' +
          t +
          '  {\n\t\t \toverflow: hidden!important;\n\t\t \t-webkit-overflow-scrolling: touch !important;\n\t\t}\n\n\t\t.simple-feedback-open-' +
          t +
          ' #' +
          o.getWidgetId(t) +
          ' iframe {\n\t\t\tborder-radius: 0 !important;\n\t\t}\n\t\t'
      )
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var o = n(6),
      i = n(19)
    ;(e.getSmallHostViewportStyle = function(t) {
      return r(t)
    }),
      (e.wrapInSmallWpMedia = function(t) {
        return (
          '@media screen and (max-width: ' +
          i.mobileLayoutThreshold +
          'px), screen and (max-height: ' +
          i.mobileLayoutThreshold +
          'px) {' +
          t +
          '}'
        )
      }),
      (e.getPositionLauncher = r)
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(6),
      o = n(73)
    e.generateStaticTheme = function(t) {
      var e = '#appzi-launch-button-' + t,
        n = '#' + r.getWidgetId(t)
      return (
        '\n' +
        e +
        ',\n' +
        n +
        '  {\n\tdisplay:none;\n\ttransform:none;\n}\n#' +
        r.getBackdropId(t) +
        ' {\n\tposition: fixed;\n\tz-index: 2147480000;\n\tdisplay: none;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\tright: 0;\n\tbackground-color: rgba(0,0,0,0.5);\n\tanimation-name: fadeInOpacity;\n\tanimation-iteration-count: 1;\n\tanimation-timing-function: ease-in;\n\tanimation-duration: 0.3s;\n}\n@keyframes fadeInOpacity {\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n.appzi-on-' +
        t +
        ' ' +
        e +
        ' {\n\tdisplay: inherit;\n\tz-index: 2147480000;\n}\n.appzi-on-' +
        t +
        ' ' +
        n +
        '\n{\n\tdisplay: inherit;\n\tz-index: 2147483648;\n}\n' +
        e +
        ' iframe,\n' +
        n +
        ' iframe {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.appzi-on-' +
        t +
        ' ' +
        e +
        ' {\n\topacity: 1;\n}\n\n.appzi-on-' +
        t +
        ' ' +
        n +
        ' {\n\ttransition: all .3s ease-out;\n}\n\n' +
        e +
        ' {\n\tposition: fixed;\n\topacity: 0;\n}\n' +
        n +
        ' {\n\twidth: 380px;\n\theight: 467px;\n\tposition: fixed;\n}\nbody.appzi-is-ios.simple-feedback-open-' +
        t +
        ' {\n\tposition: fixed!important;\n}\n.simple-feedback-open-' +
        t +
        ' ' +
        n +
        ' {\n\ttransition-delay: 0.3s;\n}\n.simple-feedback-open-' +
        t +
        ' ' +
        e +
        ' {\n\topacity: 0;\n\n}\n.appzi-small-' +
        t +
        '  ' +
        n +
        ' {\n\theight: 396px;\n\ttransition-delay: 0s;\n}\n' +
        o.safariOnly(
          n +
            ' iframe {\n\t-webkit-mask-image: -webkit-radial-gradient(white, black);\n}'
        )
      )
    }
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.safariOnly = function(t) {
        return (
          '@supports (-webkit-marquee-repetition:infinite) and (object-fit:fill) {' +
          t +
          '}'
        )
      })
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(6),
      o = n(26),
      i = n(19),
      a = n(24)
    e.getPositionWidget = function(t) {
      var e = t.widget.position,
        n = e.anchor,
        s = e.offset,
        c = t.configId,
        u = '',
        f = 'opacity:0;pointer-events: none;',
        d = 'opacity:1;pointer-events: all;',
        l = t.widget.borderRadius,
        p = 1.5 > o.readability(t.widget.infoSection.backgroundColor, 'white')
      switch (n) {
        case 'bottom left':
          ;(d += 'transform:none;'),
            (f +=
              a.getLRTBStyles({ left: Math.abs(s), bottom: Math.abs(s) }) +
              'transform: translateY(600px);')
          break
        case 'bottom right':
          ;(d += 'transform:none;'),
            (f +=
              a.getLRTBStyles({ right: Math.abs(s), bottom: Math.abs(s) }) +
              'transform: translateY(600px);')
          break
        case 'center center':
          ;(f +=
            a.getLRTBStyles({ top: '50%', left: '50%' }) +
            'transform: translate(-190px, -204px);'),
            (d +=
              a.getLRTBStyles({ top: '50%', left: '50%' }) +
              'transform: translate(-190px, -234px);'),
            (u += 'transform: translate(-190px, -198px);')
          break
        default:
          return (
            '#' +
            r.getWidgetId(c) +
            ',#appzi-launch-button-' +
            c +
            '{display: none !important}'
          )
      }
      return (
        '\n\t#' +
        r.getWidgetId(c) +
        ' {\n\t\toverflow: unset;' +
        f +
        ';\n\t\tbox-shadow: 0 0 24px rgba(0, 0, 0, 0.24);\n\t\tborder-radius: ' +
        l.topLeft +
        'px ' +
        l.topRight +
        'px ' +
        l.bottomRight +
        'px ' +
        l.bottomLeft +
        'px;\n\t}\n\t#' +
        r.getWidgetId(c) +
        ' iframe{border-radius: ' +
        l.topLeft +
        'px ' +
        l.topRight +
        'px ' +
        l.bottomRight +
        'px ' +
        l.bottomLeft +
        'px;}\n\t#' +
        r.getWidgetId(c) +
        ':hover #' +
        r.getMouseCloseButton(c) +
        ',\n    #' +
        r.getWidgetId(c) +
        '.appzi-hover #' +
        r.getTouchCloseButton(c) +
        ' {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n\t.simple-feedback-open-' +
        c +
        ' #' +
        r.getWidgetId(c) +
        ' {' +
        d +
        ';}\n\n    #' +
        r.widgetOuterCloseButtonElementPrefix +
        c +
        ' {\n\t\tposition: absolute;\n\t\theight: 120%;\n\t\twidth: 120%;\n\t\ttop: -50px;\n\t\tleft: -40px;\n\t\tz-index: -1;\n\t}\n\n\t#' +
        r.getMouseCloseButton(c) +
        ',\n\t#' +
        r.getTouchCloseButton(c) +
        ' {\n\t\tborder-radius: 50%;\n\t\tbackground-color: #7A8696;\n\t\tbackground-image: url("' +
        r.appziCDNEndpoint +
        '/assets/close-click-f7wbvw.svg");\n\t\tcolor: #fff;\n\t\tcursor: pointer;\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\ttop: -40px;\n\t\tright: 0px;\n\t\ttext-decoration: none!important;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\ttransition: all .12s ease-out 80ms;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: 50% 50%;\n\t\tbackground-size: 10px 10px;\n\t}\n\n\t#' +
        r.getMouseCloseButton(c) +
        ':hover {\n        box-shadow: 0 0 24px rgba(0, 0, 0, 0.24);\n        background-color: #5C6B7F;\n\t}\n\n\t#' +
        r.getTouchCloseButton(c) +
        ' {\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbackground-image: url("' +
        r.appziCDNEndpoint +
        '/assets/close-touch-' +
        (p ? 'black' : 'white') +
        '-f7wbvw.svg");\n\t\twidth: 50px;\n\t\theight: 40px;\n\t\tdisplay: block;\n\t\tbackground-size: 15px 15px;\n\t\tbackground-color:transparent;\n\t}\n\n\t.appzi-is-touch-device #' +
        r.getTouchCloseButton(c) +
        ' {\n\t\tdisplay: block;\n\t}\n\n\t.appzi-is-touch-device #' +
        r.getMouseCloseButton(c) +
        ' {\n\t\tdisplay: none;\n\t}\n\n\t@media screen and (min-width: ' +
        i.mobileLayoutThreshold +
        'px) and (min-height: ' +
        i.mobileLayoutThreshold +
        'px) {\n\t.simple-feedback-open-' +
        c +
        '.appzi-small-' +
        c +
        ' #' +
        r.getWidgetId(c) +
        '{\n\t\t' +
        u +
        '\n\t}\n\n\t#' +
        r.getTouchCloseButton(c) +
        ' {\n\t\tdisplay: none;\n\t}\n\n\t#' +
        r.getMouseCloseButton(c) +
        ' {\n\t\tdisplay: block;\n\t\ttransform: translateY(4px);\n\t\topacity: 0;\n\t}\n}'
      )
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(20),
      o = n(26),
      i = n(3),
      a = n(44)
    e.generateButtonTheme = function(t) {
      var e = t.launcher.backgroundColor,
        n = t.launcher.position.anchor.split(' ')[0],
        s =
          t.launcher.launcherType === r.LauncherTypes.StickToEdge
            ? 'padding-' + ('left' === n ? 'top' : 'bottom') + ': 20px;'
            : ''
      return (
        'body { color: ' +
        (0.5 > o(e).getLuminance() ? '#fff' : '#111') +
        ';' +
        s +
        ' } ' +
        (i.isFontLogo(t.launcher.logo)
          ? a.iconFontStyle +
            '[class^="appzi-icon-"], [class*=" appzi-icon-"] {\n\t\tfont-size: .874em;\n\t}'
          : '')
      )
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(26),
      o = n(3),
      i = n(44)
    e.generateWidgetTheme = function(t) {
      var e = t.widget.theme.accent,
        n = '#EAB633',
        a = '' + r(n).darken(20),
        s = r(e).isLight(),
        c = r(e).getLuminance() > 0.8,
        u = s ? '#111' : '#fff',
        f = e,
        d = e,
        l = e,
        p = e,
        g = '',
        h = ''
      if (
        (c &&
          ((d = '#111'),
          (g = '' + r(e).darken(41)),
          (h = '' + r(e).darken(41)),
          1.5 > r.readability(h, g) && ((g = '#afafaf'), (f = '#fff')),
          (p = '#afafaf')),
        !c)
      ) {
        g = '' + r(e).lighten(35)
        var b = r(g).getLuminance() > 0.9,
          v = 0.5 > r(g).getLuminance()
        ;(h =
          '' +
          r(e)
            .saturate(23)
            .lighten(4)),
          b ? ((g = '#afafaf'), (f = '#fff')) : v && (f = '#fff')
      }
      1.5 > r.readability(a, g) && (a = '' + r(n).lighten(20))
      var m = t.widget.infoSection.subtitle.font.color,
        y = r(m).isLight() ? r(m).darken(20) : r(m).lighten(20),
        w =
          '[class^="appzi-icon-"], [class*=" appzi-icon-"] {\n\t\tfont-size: 54px;\n\t\tcolor: ' +
          t.widget.infoSection.headerTitle.font.color +
          ';\n\t\t}',
        _ = o.isFontLogo(t.widget.infoSection.logo) ? i.iconFontStyle + w : ''
      return (
        2.3 > r.readability('#E9EDF1', e) && (l = '#111'),
        '\n\t' +
          _ +
          '\n\t.color-error {\n\t\tcolor: #f00;\n\t}\n\n\t.info-section, .info-section-curtain {\n\t\tbackground-color: ' +
          t.widget.infoSection.backgroundColor +
          ';\n\t}\n\t.last-step-info-section svg.ok-shape path {\n\t\tstroke: white;\n\t}\n\t.last-step-info-section svg.ok-callout path {\n\t\tfill: ' +
          p +
          ';\n     }\n\t.last-step-info-section {\n\t\tborder-top: 4px solid ' +
          p +
          ';\n\t}\n\th1 {\n\t\tcolor: ' +
          t.widget.infoSection.headerTitle.font.color +
          ';\n\t}\n\t.info-section p,\n\t.info-section a\n\t{\n\t\tcolor: ' +
          t.widget.infoSection.subtitle.font.color +
          ';\n\t}\n\t.info-section a:hover {\n\t\tcolor: ' +
          y +
          ';\n\t}\n\n\t.color-bg-accent-hover-light:hover {\n\t\tbackground-color: ' +
          g +
          ';\n\t}\n\n\t.color-accent-background-light {\n\t\tbackground-color: ' +
          g +
          ';\n\t}\n\n\t.svg-close-btn {\n\t\tstroke: ' +
          t.widget.infoSection.headerTitle.font.color +
          ';\n     }\n     .close-button-accented .svg-close-btn {\n          stroke: ' +
          p +
          ';\n     }\n\t.svg-close-btn:focus {\n\t\toutline: none;\n\t}\n\n\t.svg-chevron-stroke {\n\t\tstroke: #808080;\n\t}\n\n\t.svg-muted-fill {\n\t\tfill: #737373;\n\t}\n\t.svg-hover-ref:hover .svg-muted-fill {\n\t\tfill: #737373;\n\t}\n\n\t.svg-hover-ref-locked .svg-gold-hover-fill,\n\t.svg-hover-ref:hover .svg-gold-hover-fill {\n\t\tfill: ' +
          n +
          ';\n     }\n\n     .svg-hover-ref-locked .svg-bug-limbs-hover-fill,\n\t.svg-hover-ref:hover .svg-bug-limbs-hover-fill {\n\t\tfill: #534A47;\n\t}\n\n\t.svg-hover-ref-locked .svg-bug-limbs-hover-stroke,\n\t.svg-hover-ref:hover .svg-bug-limbs-hover-stroke {\n\t\tstroke: #534A47;\n\t}\n\n     .svg-hover-ref-locked .svg-bug-wings-hover,\n     .svg-hover-ref:hover .svg-bug-wings-hover {\n\t     fill: #E97135;\n\t     stroke: #E35C1A;\n\t}\n\n\t.svg-hover-ref-locked .svg-dark-gold-hover-fill,\n\t.svg-hover-ref:hover .svg-dark-gold-hover-fill {\n\t\tfill: ' +
          a +
          ';\n\t}\n\n     .svg-hover-ref-locked .svg-thumb-up-cuff-focus,\n\t.svg-hover-ref:hover .svg-thumb-up-cuff-focus {\n\t\tfill: #6D6556;\n\t}\n\n     .svg-hover-ref-locked .svg-thumb-down-cuff-focus,\n\t.svg-hover-ref:hover .svg-thumb-down-cuff-focus {\n\t\tfill: #6D6556;\n\t}\n\n\t.svg-gold-fill {\n\t\tfill: ' +
          n +
          ';\n\t}\n\n\t.color-accent-background {\n\t\tbackground-color: ' +
          p +
          ';\n\t\tcolor: ' +
          u +
          ';\n\t}\n\n\t.loading-line-accent-background {\n\t\tbackground-color: ' +
          d +
          ';\n\t}\n\n\t.color-stroke-accent {\n\tstroke: ' +
          h +
          '\n\t}\n\n\t.color-text-underline {\n\tbackground-color: ' +
          h +
          '\n\t}\n\n\t.color-stroke-hover-accent:hover {\n\tstroke: ' +
          h +
          '\n\t}\n\n\tbutton.color-accent-background:hover {\n\t\tbackground-color: ' +
          h +
          ';\n\t}\n\n\t.color-accent {\n\t\tcolor: ' +
          e +
          ';\n\t}\n\t.color-text-accent {\n\t\tcolor: ' +
          d +
          ';\n\t}\n\t.color-accent-hover:hover {\n\t\tcolor: ' +
          f +
          ';\n\t}\n\t.bottom-navigation button {\n\t\tcolor: ' +
          l +
          ';\n\t\tbackground-color: #E9EDF1;\n\t}\n\t.bottom-navigation button:hover {\n\t\tbackground-color: ' +
          r('#E9EDF1').lighten(3) +
          ';\n\t}\n\t.color-muted {\n\tcolor: #808080;\n\t}'
      )
    }
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(78)
    e.AppziOrchestrator = r.AppziOrchestrator
    var o = n(27)
    e.AppziTargetBlock = o.AppziTargetBlock
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(6),
      o = n(4),
      i = n(19),
      a = n(79),
      s = n(20)
    n(15)
    var c = n(23),
      u = n(27),
      f = (function() {
        function t(t, e, n) {
          void 0 === e && (e = new c.BridgeBrowserWrapper()),
            void 0 === n && (n = new i.ThemeBuilder(e))
          var f = this
          ;(this._portalId = t),
            (this.browserWrapper = e),
            (this.themeBuilder = n),
            (this._transformDisableTimeoutMap = {}),
            (this.addOrReplaceConfig = function(t, e) {
              void 0 === e && (e = !0),
                (f._configCache[t.configId] = t),
                e &&
                  (f.temporarilyDisableTransforms(t.configId),
                  f.applyConfigurationUpdate(t))
            }),
            (this.transformMessage = function(t) {
              return t
            }),
            (this.reapplyConfig = function(t, e) {
              void 0 === e && (e = void 0),
                f.getConfig(t) && f.applyConfigurationUpdate(f.getConfig(t), e)
            }),
            (this.destroyConfiguration = function(t) {
              f.postToHost(new o.FeedbackEndMsg(t))
              var e = f.getById(r.getLauncherId(t)),
                n = f.getById(r.getWidgetId(t)),
                i = f.getById(r.getBackdropId(t))
              e && f.browserWrapper.nativeDocument.body.removeChild(e),
                n && f.browserWrapper.nativeDocument.body.removeChild(n),
                i && f.browserWrapper.nativeDocument.body.removeChild(i),
                f.themeBuilder.destroy(t)
            }),
            (this.bootConfiguration = function(t) {
              f.isConfigBooted(t.configId)
                ? f.addOrReplaceConfig(t, !0)
                : (f.buildOneTimeDOMNodes(f._portalId, t),
                  f.addOrReplaceConfig(t, !1),
                  f.applyConfigurationUpdate(t, u.AppziTargetBlock.Launcher))
            }),
            (this.getConfig = function(t) {
              var e = f._configCache[t]
              if (e) return JSON.parse(JSON.stringify(e))
            }),
            (this.applyConfigurationUpdate = function(t, e) {
              void 0 === e && (e = void 0)
              var n = t
              switch ((f.themeBuilder.reconfigureOuterLauncherTheme(n), e)) {
                case u.AppziTargetBlock.Launcher:
                  f.reconfigureLauncher(n)
                  break
                case u.AppziTargetBlock.ThreeStepWidget:
                  f.reconfigureWidget(n)
                  break
                default:
                  f.reconfigureLauncher(n), f.reconfigureWidget(n)
              }
            }),
            (this.reconfigureWidget = function(t) {
              var e =
                  t.widget.widgetType === a.WidgetTypes.ThreeChoiceWidget
                    ? f.themeBuilder.generateWidgetTheme(t)
                    : '',
                n = new o.ApplyConfigMsg(t, e)
              f.postToWidget(n)
            }),
            (this.reconfigureLauncher = function(t) {
              if (t.launcher.launcherType !== s.LauncherTypes.None) {
                var e = new o.ApplyConfigMsg(
                  t,
                  f.themeBuilder.generateButtonTheme(t)
                )
                f.postToLauncher(e)
              } else
                f.postToHost(new o.LaunchButtonReadyForEventsMsg(t.configId))
            }),
            (this._configCache = {}),
            this.browserWrapper.nativeDocument.addEventListener(
              'click',
              function(t) {
                var e = f.getParentMatchingSelector(t.target, '[data-az-l]')
                if (e) {
                  var n = e.getAttribute('data-az-l')
                  n && f.openWidget(n)
                }
              }
            )
        }
        return (
          (t.prototype.getParentMatchingSelector = function(t, e) {
            for (
              ;
              t && t !== this.browserWrapper.nativeDocument;
              t = t.parentNode
            )
              if (t.matches(e)) return t
            return null
          }),
          (t.prototype.cacheConfigs = function(t) {
            var e = this
            t &&
              t.forEach(function(t) {
                return (e._configCache[t.configId] = t)
              })
          }),
          (t.prototype.openWidget = function(t) {
            this.postToHost(new o.FeedbackStartMsg(t))
          }),
          (t.prototype.dismissWidget = function(t) {
            this.postToHost(new o.FeedbackEndMsg(t))
          }),
          (t.prototype.resizeWidgetHost = function(t, e, n) {
            var o = this.getById(r.getWidgetId(t))
            o &&
              (e && (o.style.width = e + 'px'),
              n && (o.style.height = n + 'px'))
          }),
          (t.prototype.bootWidget = function(t) {
            var e = this._configCache[t]
            return (
              !!e &&
              (this.isConfigBooted(t) || this.bootConfiguration(e),
              this.getById(r.getWidgetId(t)) ||
                this.addWidgetNodes(this._portalId, e),
              !0)
            )
          }),
          (t.prototype.postToWidget = function(t) {
            var e = this.browserWrapper.getWidgetHost(t.configId)
            e && e.querySelector('iframe').contentWindow.postMessage(t, '*')
          }),
          (t.prototype.postToLauncher = function(t) {
            var e = this.browserWrapper.getLauncherHost(t.configId)
            e && e.querySelector('iframe').contentWindow.postMessage(t, '*')
          }),
          (t.prototype.getById = function(t) {
            return this.browserWrapper.nativeDocument.getElementById(t)
          }),
          (t.prototype.addLauncherNodes = function(t) {
            var e = function(e) {
                return (
                  r.appziCDNEndpoint +
                  '/' +
                  e +
                  '-f7wbvw.html?configId=' +
                  t.configId
                )
              },
              n = ''
            switch (t.launcher.launcherType) {
              case s.LauncherTypes.StickToEdge:
                ;(n = e(r.buildConstants.launcherPrefixSticky)),
                  this.browserWrapper.addBorderlessIFrame(
                    'appzi-launch-button-' + t.configId,
                    n
                  )
                break
              case s.LauncherTypes.Floating:
                n = e(r.buildConstants.launcherPrefixFloating)
                var o = this.browserWrapper.addBorderlessIFrame(
                    'appzi-launch-button-' + t.configId,
                    n
                  ),
                  i = o.container,
                  a = o.iframe
                a.addEventListener('mouseenter', function() {
                  return i.classList.add('appzi-hover')
                }),
                  a.addEventListener('mouseleave', function() {
                    return i.classList.remove('appzi-hover')
                  })
            }
          }),
          (t.prototype.addWidgetNodes = function(t, e) {
            var n,
              o = this,
              i = function(n) {
                return (
                  r.appziCDNEndpoint +
                  '/' +
                  n +
                  '-f7wbvw.html?portalId=' +
                  t +
                  '&configId=' +
                  e.configId +
                  '&hostOriginUrl=' +
                  encodeURIComponent(
                    o.browserWrapper.nativeWindow.location.href
                  )
                )
              }
            switch (e.widget.widgetType) {
              case a.WidgetTypes.BuilderWidget:
                n = this.browserWrapper.addBorderlessIFrame(
                  r.getWidgetId(e.configId),
                  i('wm')
                )
                break
              case a.WidgetTypes.ThreeChoiceWidget:
                n = this.browserWrapper.addBorderlessIFrame(
                  r.getWidgetId(e.configId),
                  i('w')
                )
                break
              default:
                n = this.browserWrapper.addBorderlessIFrame(
                  r.getWidgetId(e.configId),
                  i('wm')
                )
            }
            var s = n.container,
              c = n.iframe
            c.addEventListener('mouseenter', function() {
              return s.classList.add('appzi-hover')
            }),
              (s.style.backgroundColor = '#fff'),
              c.addEventListener('mouseleave', function() {
                return s.classList.remove('appzi-hover')
              }),
              c.addEventListener('load', function() {
                return (s.style.backgroundColor = '')
              })
            var u, f
            ;(u = r.widgetOuterCloseButtonElementPrefix + e.configId),
              (f = o.browserWrapper.nativeDocument.createElement(
                'div'
              )).addEventListener('click', function() {
                return o.dismissWidget(e.configId)
              }),
              (f.id = u),
              s.appendChild(f)
            var d = function(t) {
              var n = o.browserWrapper.nativeDocument.createElement('a')
              n.addEventListener('click', function() {
                return o.dismissWidget(e.configId)
              }),
                (n.id = t),
                s.appendChild(n)
            }
            d(r.getTouchCloseButton(e.configId)),
              d(r.getMouseCloseButton(e.configId)),
              'ontouchstart' in
                this.browserWrapper.nativeDocument.documentElement &&
                s.classList.add('appzi-is-touch-device')
          }),
          (t.prototype.buildOneTimeDOMNodes = function(t, e) {
            var n = this
            this.themeBuilder.reconfigureOuterStaticTheme(e.configId)
            var o = this.browserWrapper.nativeDocument.createElement('div')
            ;(o.id = r.getBackdropId(e.configId)),
              o.addEventListener('click', function() {
                n.dismissWidget(e.configId)
              }),
              this.browserWrapper.nativeDocument.body.appendChild(o),
              this.addLauncherNodes(e)
          }),
          (t.prototype.postToHost = function(t) {
            this.browserWrapper.nativeWindow.postMessage(t, '*')
          }),
          (t.prototype.temporarilyDisableTransforms = function(t) {
            clearTimeout(this._transformDisableTimeoutMap[t])
            var e = [
              this.browserWrapper.getWidgetHost(t),
              this.browserWrapper.getLauncherHost(t),
            ].filter(function(t) {
              return !!t
            })
            e.forEach(function(t) {
              return (t.style.transition = 'none')
            }),
              (this._transformDisableTimeoutMap[t] = setTimeout(function() {
                return e.forEach(function(t) {
                  return (t.style.transition = '')
                })
              }, 10))
          }),
          (t.prototype.isConfigBooted = function(t) {
            return !!this.getById(r.getBackdropId(t))
          }),
          t
        )
      })()
    e.AppziOrchestrator = f
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (function(t) {
        ;(t[(t.ThreeChoiceWidget = 0)] = 'ThreeChoiceWidget'),
          (t[(t.BuilderWidget = 1)] = 'BuilderWidget')
      })(e.WidgetTypes || (e.WidgetTypes = {}))
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.loadConfigsUsingScriptToken = function(t, e, n, r) {
        var o = n + '/bootstrap/bundle.js?token=',
          i = t.nativeDocument.querySelector('script[src^="' + o + '"]'),
          a = i && i.src.split(o)[1]
        if (a) {
          var s = new t.nativeWindow.XMLHttpRequest()
          s.open('GET', r + '/' + a, !0),
            (s.onreadystatechange = function() {
              if (4 === s.readyState && 200 === s.status) {
                var t = JSON.parse(s.responseText)
                e(a, t)
              }
            }),
            s.send()
        }
      })
  },
  function(t, e, n) {

    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = n(20),
      o = n(82),
      i = n(7),
      a = n(28),
      s = (function() {
        function t(t, e) {
          void 0 === e && (e = new i.WebBrowserWrapper())
          var n = this
          ;(this.appzi = t),
            (this.browserWrapper = e),
            (this._lastCheckedLocation = ''),
            (this._configs = []),
            (this.checkLocationChanged = function() {
              var t = n.browserWrapper,
                e = n.appzi
              if (n._lastCheckedLocation !== t.nativeWindow.location.href) {
                n._lastCheckedLocation = t.nativeWindow.location.href
                var r = n.getConfigForCurrentEnvironment(n._configs, {
                  location: t.nativeWindow.location.href,
                  ua: t.nativeWindow.navigator.userAgent,
                })
                n._configs.forEach(function(t) {
                  ;(r && t.configId === r.configId) ||
                    e.destroyConfiguration(t.configId)
                }),
                  r && e.bootConfiguration(r)
              }
            })
        }
        return (
          (t.prototype.watchConfigs = function(t, e) {
            var n
            if ((void 0 === e && (e = 100), t)) {
              var o = t.filter(function(t) {
                return t.launcher.launcherType !== r.LauncherTypes.None
              })
              o.length &&
                ((n = this._configs).push.apply(n, o),
                clearInterval(this._toInterval),
                (this._toInterval = setInterval(this.checkLocationChanged, e)))
            }
          }),
          (t.prototype.getConfigForCurrentEnvironment = function(t, e) {
            var n = this,
              r = e.location,
              o = e.ua,
              i = function(t) {
                return !(t.desktop && t.tablet && t.mobile)
              }
            return t
              .sort(function(t, e) {
                var n = t.targeting,
                  r = e.targeting
                return i(n.deviceTargeting) && !i(r.deviceTargeting)
                  ? -1
                  : !i(n.deviceTargeting) && i(r.deviceTargeting)
                  ? 1
                  : n.pageTargeting && !r.pageTargeting
                  ? -1
                  : !n.pageTargeting && r.pageTargeting
                  ? 1
                  : 0
              })
              .filter(function(t) {
                var e = new a.DeviceRecognizer(o),
                  i = t.targeting.deviceTargeting
                if (
                  (e.desktop() && !i.desktop) ||
                  (e.mobile() && !i.mobile) ||
                  (e.tablet() && !i.tablet)
                )
                  return !1
                if (!t.targeting.pageTargeting) return t
                for (
                  var s = t.targeting.pageTargeting.excludePageRules, c = 0;
                  s.length > c;
                  c++
                )
                  if (n.isRuleMatch(r, s[c])) return !1
                var u = t.targeting.pageTargeting.matchPageRules
                for (c = 0; u.length > c; c++)
                  if (n.isRuleMatch(r, u[c])) return t
                return !1
              })[0]
          }),
          (t.prototype.isRuleMatch = function(t, e) {
            switch (e.matchRule) {
              case o.MatchRule.ExactMatch:
                return e.urlPart === t
              case o.MatchRule.Regex:
                return RegExp(e.urlPart).test(t)
              case o.MatchRule.SimpleMatch:
                return -1 !== t.indexOf(e.urlPart)
            }
            return !1
          }),
          t
        )
      })()
    e.AppziTargetedConfigSwapper = s
  },
  function(t, e) {

    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.defaultDeviceTargeting = { desktop: !0, tablet: !0, mobile: !0 }),
      (function(t) {
        ;(t[(t.SimpleMatch = 0)] = 'SimpleMatch'),
          (t[(t.ExactMatch = 1)] = 'ExactMatch'),
          (t[(t.Regex = 2)] = 'Regex')
      })(e.MatchRule || (e.MatchRule = {}))
  },
])
