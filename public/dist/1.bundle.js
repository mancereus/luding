webpackJsonp([1],{

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(6);

__webpack_require__(90);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=my-view3> <template> <style include=shared-styles>:host{display:block;padding:10px}</style> <div class=card> <div class=circle>3</div> <h1>View Three</h1> <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p> <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p> </div> </template> </dom-module>");

var MyView3 = function (_Polymer$Element) {
  _inherits(MyView3, _Polymer$Element);

  function MyView3() {
    _classCallCheck(this, MyView3);

    return _possibleConstructorReturn(this, (MyView3.__proto__ || Object.getPrototypeOf(MyView3)).apply(this, arguments));
  }

  _createClass(MyView3, null, [{
    key: 'is',
    get: function get() {
      return 'my-view3';
    }
  }]);

  return MyView3;
}(Polymer.Element);

window.customElements.define(MyView3.is, MyView3);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXktdmlldzMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWdpc3Rlckh0bWxUZW1wbGF0ZSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdDSTs7SUFBYzs7Ozs7Ozs7Ozs7d0JBQ0k7QUFBRSxhQUFtQjtBQUN2Qzs7OztFQUY2QixRQUNiOztBQUdWLE9BQWUsZUFBTyxPQUFRLFFBQUcsSUFBVSxTOzs7Ozs7Ozs7O0FDbkNyRCxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJDLFFBQXJCLENBQThCLDJjQUE5QixFIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG5AbGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxyXG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xyXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxyXG4tLT5cclxuXHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInNoYXJlZC1zdHlsZXMuaHRtbFwiPlxyXG5cclxuPGRvbS1tb2R1bGUgaWQ9XCJteS12aWV3M1wiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjM8L2Rpdj5cclxuICAgICAgPGgxPlZpZXcgVGhyZWU8L2gxPlxyXG4gICAgICA8cD5Nb2R1cyBjb21tb2RvIG1pbmltdW0gZXVtIHRlLCB2ZXJvIHV0aW5hbSBhc3N1ZXZlcml0IHBlciBldS48L3A+XHJcbiAgICAgIDxwPkVhIGR1aXMgYm9ub3J1bSBuZWMsIGZhbGxpIHBhdWxvIGFsaXF1aWQgZWkgZXVtLkhhcyBhdCBtaW5pbSBtdWNpdXMgYWxpcXVhbSwgZXN0IGlkIHRlbXBvciBsYW9yZWV0LlBybyBzYWVwZSBwZXJ0aW5heCBlaSwgYWQgcHJpIGFuaW1hbCBsYWJvcmVzIHN1c2NpcGlhbnR1ci48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L3RlbXBsYXRlPlxyXG5cclxuICA8c2NyaXB0PlxyXG4gICAgY2xhc3MgTXlWaWV3MyBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XHJcbiAgICAgIHN0YXRpYyBnZXQgaXMoKSB7IHJldHVybiAnbXktdmlldzMnOyB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShNeVZpZXczLmlzLCBNeVZpZXczKTtcclxuICA8L3NjcmlwdD5cclxuPC9kb20tbW9kdWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXktdmlldzMuaHRtbCIsIlxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9c2hhcmVkLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+LmNhcmR7bWFyZ2luOjI0cHg7cGFkZGluZzoxNnB4O2NvbG9yOiM3NTc1NzU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKX0uY2lyY2xle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzU1NTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNkZGQ7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6NjRweH1oMXttYXJnaW46MTZweCAwO2NvbG9yOiMyMTIxMjE7Zm9udC1zaXplOjIycHh9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQtc3R5bGVzLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9