webpackJsonp([1],{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(6);

__webpack_require__(90);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=my-view2> <template> <style include=shared-styles>:host{display:block;padding:10px}</style> <div class=card> <div class=circle>2</div> <h1>View Two</h1> <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p> <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p> </div> </template> </dom-module>");

var MyView2 = function (_Polymer$Element) {
  _inherits(MyView2, _Polymer$Element);

  function MyView2() {
    _classCallCheck(this, MyView2);

    return _possibleConstructorReturn(this, (MyView2.__proto__ || Object.getPrototypeOf(MyView2)).apply(this, arguments));
  }

  _createClass(MyView2, null, [{
    key: 'is',
    get: function get() {
      return 'my-view2';
    }
  }]);

  return MyView2;
}(Polymer.Element);

window.customElements.define(MyView2.is, MyView2);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXktdmlldzIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWdpc3Rlckh0bWxUZW1wbGF0ZSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdDSTs7SUFBYzs7Ozs7Ozs7Ozs7d0JBQ0k7QUFBRSxhQUFtQjtBQUN2Qzs7OztFQUY2QixRQUNiOztBQUdWLE9BQWUsZUFBTyxPQUFRLFFBQUcsSUFBVSxTOzs7Ozs7Ozs7O0FDbkNyRCxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJDLFFBQXJCLENBQThCLDJjQUE5QixFIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XG5cbjxkb20tbW9kdWxlIGlkPVwibXktdmlldzJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjI8L2Rpdj5cbiAgICAgIDxoMT5WaWV3IFR3bzwvaDE+XG4gICAgICA8cD5FYSBkdWlzIGJvbm9ydW0gbmVjLCBmYWxsaSBwYXVsbyBhbGlxdWlkIGVpIGV1bS48L3A+XG4gICAgICA8cD5JZCBuYW0gb2RpbyBuYXR1bSBtYWxvcnVtLCB0aWJpcXVlIGNvcGlvc2FlIGV4cGV0ZW5kYSBtZWwgZWEuRGV0cmFjdG8gc3Vhdml0YXRlIHJlcHVkaWFuZGFlIG5vIGV1bS4gSWQgYWRodWMgbWluaW0gc29sdXRhIG5hbS5JZCBuYW0gb2RpbyBuYXR1bSBtYWxvcnVtLCB0aWJpcXVlIGNvcGlvc2FlIGV4cGV0ZW5kYSBtZWwgZWEuPC9wPlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgY2xhc3MgTXlWaWV3MiBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gICAgICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ215LXZpZXcyJzsgfVxuICAgIH1cblxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoTXlWaWV3Mi5pcywgTXlWaWV3Mik7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215LXZpZXcyLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPi5jYXJke21hcmdpbjoyNHB4O3BhZGRpbmc6MTZweDtjb2xvcjojNzU3NTc1O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMil9LmNpcmNsZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM1NTU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZGRkO2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjY0cHh9aDF7bWFyZ2luOjE2cHggMDtjb2xvcjojMjEyMTIxO2ZvbnQtc2l6ZToyMnB4fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==