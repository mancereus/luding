webpackJsonp([6],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

__webpack_require__(36);

__webpack_require__(127);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=news-list> <template> <style include=shared-styles>:host{display:block;padding:10px}</style> <div class=card> <div class=circle>01.09.2017</div> <h1>Neuerscheinungen Essen 2017 <paper-icon-button right=\"\" icon=icons:arrow-forward on-tap=navigate> </paper-icon-button> </h1> </div> <div class=card> <div class=circle>01.02.2017</div> <h1>Neuerscheinungen Nürnberg 2017 <paper-icon-button right=\"\" icon=icons:arrow-forward on-tap=navigate> </paper-icon-button> </h1> </div> </template> </dom-module>");

var NewsList = function (_Polymer$Element) {
  _inherits(NewsList, _Polymer$Element);

  function NewsList() {
    _classCallCheck(this, NewsList);

    return _possibleConstructorReturn(this, (NewsList.__proto__ || Object.getPrototypeOf(NewsList)).apply(this, arguments));
  }

  _createClass(NewsList, null, [{
    key: 'is',
    get: function get() {
      return 'news-list';
    }
  }]);

  return NewsList;
}(Polymer.Element);

window.customElements.define(NewsList.is, NewsList);

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC1zdHlsZXMuaHRtbCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVnaXN0ZXJIdG1sVGVtcGxhdGUiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQXVDSTs7SUFBZTs7Ozs7Ozs7Ozs7d0JBQ0c7QUFBRSxhQUFvQjtBQUN4Qzs7OztFQUY4QixRQUNkOztBQUdWLE9BQWUsZUFBTyxPQUFTLFNBQUcsSUFBVyxVOzs7Ozs7Ozs7O0FDMUN2RCxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJDLFFBQXJCLENBQThCLDJjQUE5QixFIiwiZmlsZSI6IjYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG5AbGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxyXG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xyXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxyXG4tLT5cclxuXHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cIm5ld3MtbGlzdFwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICAgOmhvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG5cclxuPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj4wMS4wOS4yMDE3PC9kaXY+XHJcbiAgICA8aDE+TmV1ZXJzY2hlaW51bmdlbiBFc3NlbiAyMDE3XHJcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiByaWdodCBpY29uPVwiaWNvbnM6YXJyb3ctZm9yd2FyZFwiIG9uLXRhcD1cIm5hdmlnYXRlXCI+IDwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICA8L2gxPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj4wMS4wMi4yMDE3PC9kaXY+XHJcbiAgICAgIDxoMT5OZXVlcnNjaGVpbnVuZ2VuIE7DvHJuYmVyZyAyMDE3XHJcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHJpZ2h0IGljb249XCJpY29uczphcnJvdy1mb3J3YXJkXCIgb24tdGFwPVwibmF2aWdhdGVcIj4gPC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgPC9oMT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuICA8c2NyaXB0PlxyXG4gICAgY2xhc3MgTmV3c0xpc3QgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xyXG4gICAgICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ25ld3MtbGlzdCc7IH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKE5ld3NMaXN0LmlzLCBOZXdzTGlzdCk7XHJcbiAgPC9zY3JpcHQ+XHJcbjwvZG9tLW1vZHVsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmV3cy1saXN0Lmh0bWwiLCJcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPi5jYXJke21hcmdpbjoyNHB4O3BhZGRpbmc6MTZweDtjb2xvcjojNzU3NTc1O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMil9LmNpcmNsZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM1NTU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZGRkO2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjY0cHh9aDF7bWFyZ2luOjE2cHggMDtjb2xvcjojMjEyMTIxO2ZvbnQtc2l6ZToyMnB4fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==