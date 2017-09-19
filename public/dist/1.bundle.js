webpackJsonp([1],Array(90).concat([
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(6);

__webpack_require__(96);

__webpack_require__(110);

__webpack_require__(113);

__webpack_require__(98);

__webpack_require__(121);

__webpack_require__(31);

__webpack_require__(115);

__webpack_require__(98);

__webpack_require__(95);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=publishers-list> <template> <style include=shared-styles>:host{display:block;padding:10px}iron-list{height:100vh;max-width:500px}</style> <custom-style> <style is=custom-style>.rate-header{@apply --paper-font-headline;}.rate-name{color:var(--paper-grey-600);margin:10px 0}paper-icon-button.rate-icon{--iron-icon-fill-color:white;--iron-icon-stroke-color:var(--paper-grey-600)}</style> </custom-style> <div class=autocomplete-wrapper> <paper-input id=search label=Suche style=max-width:500px value={{filterstr}}> <paper-icon-button slot=suffix icon=search></paper-icon-button> </paper-input> </div> <iron-ajax url=http://localhost:4000/graphql on-response=handleResponse content-type=application/json handle-as=json method=POST body=[[body]] auto=\"\"></iron-ajax> <iron-list items=[[data]] as=item> <template> <paper-card class=rate> <div class=card-content> <div class=rate-header>[[inc(index)]]. [[item.publishername]]</div> <div class=rate-name>[[item.count]] Spiele</div> <paper-icon-button right=\"\" icon=favorite></paper-icon-button> <paper-icon-button icon=star></paper-icon-button> </div> </paper-card> </template> </iron-list> </template> </dom-module>");

var PublishersList = function (_Polymer$Element) {
  _inherits(PublishersList, _Polymer$Element);

  function PublishersList() {
    _classCallCheck(this, PublishersList);

    return _possibleConstructorReturn(this, (PublishersList.__proto__ || Object.getPrototypeOf(PublishersList)).apply(this, arguments));
  }

  _createClass(PublishersList, [{
    key: 'inc',
    value: function inc(idx) {
      return idx + 1;
    }
  }, {
    key: 'getBody',
    value: function getBody(filterStr) {
      if (filterStr.length > 0) return {
        query: 'query {publishers(publishername:"' + filterStr + '") { publisherid publishername count }}'
      };else return {
        query: "publishers { publisherid publishername count }"
      };
    }
  }, {
    key: 'handleResponse',
    value: function handleResponse(event) {
      this.set('data', []);
      this.set('data', event.detail.response.data.publishers);
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'publishers-list';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        filterstr: String,
        data: {
          type: Array,
          notify: true

        },
        body: {
          type: Object,
          computed: 'getBody(filterstr)',
          value: {
            query: 'query {publishers { publisherid publishername count }}'
          }
        }

      };
    }
  }]);

  return PublishersList;
}(Polymer.Element);

window.customElements.define(PublishersList.is, PublishersList);

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(107);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--paper-font-common-base:{font-family:Roboto,Noto,sans-serif;-webkit-font-smoothing:antialiased};--paper-font-common-code:{font-family:'Roboto Mono',Consolas,Menlo,monospace;-webkit-font-smoothing:antialiased};--paper-font-common-expensive-kerning:{text-rendering:optimizeLegibility};--paper-font-common-nowrap:{white-space:nowrap;overflow:hidden;text-overflow:ellipsis};--paper-font-display4:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:112px;font-weight:300;letter-spacing:-.044em;line-height:120px};--paper-font-display3:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:56px;font-weight:400;letter-spacing:-.026em;line-height:60px};--paper-font-display2:{@apply --paper-font-common-base;font-size:45px;font-weight:400;letter-spacing:-.018em;line-height:48px};--paper-font-display1:{@apply --paper-font-common-base;font-size:34px;font-weight:400;letter-spacing:-.01em;line-height:40px};--paper-font-headline:{@apply --paper-font-common-base;font-size:24px;font-weight:400;letter-spacing:-.012em;line-height:32px};--paper-font-title:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:20px;font-weight:500;line-height:28px};--paper-font-subhead:{@apply --paper-font-common-base;font-size:16px;font-weight:400;line-height:24px};--paper-font-body2:{@apply --paper-font-common-base;font-size:14px;font-weight:500;line-height:24px};--paper-font-body1:{@apply --paper-font-common-base;font-size:14px;font-weight:400;line-height:20px};--paper-font-caption:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:12px;font-weight:400;letter-spacing:.011em;line-height:20px};--paper-font-menu:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:13px;font-weight:500;line-height:24px};--paper-font-button:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:14px;font-weight:500;letter-spacing:.018em;line-height:24px;text-transform:uppercase};--paper-font-code2:{@apply --paper-font-common-code;font-size:14px;font-weight:700;line-height:20px};--paper-font-code1:{@apply --paper-font-common-code;font-size:14px;font-weight:500;line-height:20px};}</style> </custom-style>");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--shadow-transition:{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)};--shadow-none:{box-shadow:none};--shadow-elevation-2dp:{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)};--shadow-elevation-3dp:{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)};--shadow-elevation-4dp:{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)};--shadow-elevation-6dp:{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)};--shadow-elevation-8dp:{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)};--shadow-elevation-12dp:{box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)};--shadow-elevation-16dp:{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)};--shadow-elevation-24dp:{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)};}</style> </custom-style>");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(101);

__webpack_require__(102);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(108);

__webpack_require__(109);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-input> <template> <style>:host{display:block}:host([focused]){outline:0}:host([hidden]){display:none!important}input{position:relative;outline:0;box-shadow:none;padding:0;width:100%;max-width:100%;background:0 0;border:none;color:var(--paper-input-container-input-color,var(--primary-text-color));-webkit-appearance:none;text-align:inherit;vertical-align:bottom;min-width:0;@apply --paper-font-subhead;@apply --paper-input-container-input;}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{@apply --paper-input-container-input-webkit-spinner;}input::-webkit-clear-button{@apply --paper-input-container-input-webkit-clear;}input::-webkit-input-placeholder{color:var(--paper-input-container-color,var(--secondary-text-color))}input:-moz-placeholder{color:var(--paper-input-container-color,var(--secondary-text-color))}input::-moz-placeholder{color:var(--paper-input-container-color,var(--secondary-text-color))}input::-ms-clear{@apply --paper-input-container-ms-clear;}input:-ms-input-placeholder{color:var(--paper-input-container-color,var(--secondary-text-color))}label{pointer-events:none}</style> <paper-input-container id=container no-label-float=[[noLabelFloat]] always-float-label=[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]] auto-validate$=[[autoValidate]] disabled$=[[disabled]] invalid=[[invalid]]> <slot name=prefix slot=prefix></slot> <label hidden$=[[!label]] aria-hidden=true for=input slot=label>[[label]]</label> <span id=template-placeholder></span> <slot name=suffix slot=suffix></slot> <template is=dom-if if=[[errorMessage]]> <paper-input-error aria-live=assertive slot=add-on>[[errorMessage]]</paper-input-error> </template> <template is=dom-if if=[[charCounter]]> <paper-input-char-counter slot=add-on></paper-input-char-counter> </template> </paper-input-container> </template> <template id=v0> <input is=iron-input id=input slot=input aria-labelledby$=[[_ariaLabelledBy]] aria-describedby$=[[_ariaDescribedBy]] disabled$=[[disabled]] title$=[[title]] bind-value={{value}} invalid={{invalid}} prevent-invalid-input=[[preventInvalidInput]] allowed-pattern=[[allowedPattern]] validator=[[validator]] type$=[[type]] pattern$=[[pattern]] required$=[[required]] autocomplete$=[[autocomplete]] autofocus$=[[autofocus]] inputmode$=[[inputmode]] minlength$=[[minlength]] maxlength$=[[maxlength]] min$=[[min]] max$=[[max]] step$=[[step]] name$=[[name]] placeholder$=[[placeholder]] readonly$=[[readonly]] list$=[[list]] size$=[[size]] autocapitalize$=[[autocapitalize]] autocorrect$=[[autocorrect]] on-change=_onChange tabindex$=[[tabIndex]] autosave$=[[autosave]] results$=[[results]] accept$=[[accept]] multiple$=[[multiple]]> </template> <template id=v1> <iron-input bind-value={{value}} id=input slot=input maxlength$=[[maxlength]] allowed-pattern=[[allowedPattern]] invalid={{invalid}} validator=[[validator]]> <input id=nativeInput aria-labelledby$=[[_ariaLabelledBy]] aria-describedby$=[[_ariaDescribedBy]] disabled$=[[disabled]] title$=[[title]] type$=[[type]] pattern$=[[pattern]] required$=[[required]] autocomplete$=[[autocomplete]] autofocus$=[[autofocus]] inputmode$=[[inputmode]] minlength$=[[minlength]] maxlength$=[[maxlength]] min$=[[min]] max$=[[max]] step$=[[step]] name$=[[name]] placeholder$=[[placeholder]] readonly$=[[readonly]] list$=[[list]] size$=[[size]] autocapitalize$=[[autocapitalize]] autocorrect$=[[autocorrect]] on-change=_onChange tabindex$=[[tabIndex]] autosave$=[[autosave]] results$=[[results]] accept$=[[accept]] multiple$=[[multiple]]> </iron-input> </template> </dom-module>");

Polymer({
  is: 'paper-input',

  behaviors: [Polymer.PaperInputBehavior, Polymer.IronFormElementBehavior],

  beforeRegister: function beforeRegister() {
    // We need to tell which kind of of template to stamp based on
    // what kind of `iron-input` we got, but because of polyfills and
    // custom elements differences between v0 and v1, the safest bet is
    // to check a particular method we know the iron-input#2.x can have.
    // If it doesn't have it, then it's an iron-input#1.x.
    var ironInput = document.createElement('iron-input');
    var version = typeof ironInput._initSlottedInput == 'function' ? 'v1' : 'v0';
    var template = Polymer.DomModule.import('paper-input', 'template');
    var inputTemplate = Polymer.DomModule.import('paper-input', 'template#' + version);
    var inputPlaceholder = template.content.querySelector('#template-placeholder');
    if (inputPlaceholder) {
      inputPlaceholder.parentNode.replaceChild(inputTemplate.content, inputPlaceholder);
    }
    // else it's already been processed, probably in superclass
  },

  /**
   * Returns a reference to the focusable element. Overridden from PaperInputBehavior
   * to correctly focus the native input.
   */
  get _focusableElement() {
    return Polymer.Element ? this.inputElement._inputElement : this.inputElement;
  },

  // Note: This event is only available in the 1.0 version of this element.
  // In 2.0, the functionality of `_onIronInputReady` is done in
  // PaperInputBehavior::attached.
  listeners: {
    'iron-input-ready': '_onIronInputReady'
  },

  _onIronInputReady: function _onIronInputReady() {
    if (this.inputElement && this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1) {
      this.alwaysFloatLabel = true;
    }

    // Only validate when attached if the input already has a value.
    if (!!this.inputElement.bindValue) {
      this.$.container._handleValueAndAutoValidate(this.inputElement);
    }
  }
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/**
 * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for `<paper-input-container>`. A
 * add-on appears below the input, and may display information based on the input value and
 * validity such as a character counter or an error message.
 * @polymerBehavior
 */
Polymer.PaperInputAddonBehavior = {
  attached: function attached() {
    // Workaround for https://github.com/webcomponents/shadydom/issues/96
    Polymer.dom.flush();
    this.fire('addon-attached');
  },

  /**
   * The function called by `<paper-input-container>` when the input value or validity changes.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function update(state) {}

};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(0);

__webpack_require__(114);

'use strict';

Polymer({

  is: 'iron-ajax',

  /**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */

  /**
   * Fired when a request is sent.
   *
   * @event request
   * @event iron-ajax-request
   */

  /**
   * Fired when a response is received.
   *
   * @event response
   * @event iron-ajax-response
   */

  /**
   * Fired when an error is received.
   *
   * @event error
   * @event iron-ajax-error
   */

  hostAttributes: {
    hidden: true
  },

  properties: {
    /**
     * The URL target of the request.
     */
    url: {
      type: String
    },

    /**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */
    params: {
      type: Object,
      value: function value() {
        return {};
      }
    },

    /**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */
    method: {
      type: String,
      value: 'GET'
    },

    /**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */
    headers: {
      type: Object,
      value: function value() {
        return {};
      }
    },

    /**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */
    contentType: {
      type: String,
      value: null
    },

    /**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */
    body: {
      type: Object,
      value: null
    },

    /**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */
    sync: {
      type: Boolean,
      value: false
    },

    /**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */
    handleAs: {
      type: String,
      value: 'json'
    },

    /**
     * Set the withCredentials flag on the request.
     */
    withCredentials: {
      type: Boolean,
      value: false
    },

    /**
     * Set the timeout flag on the request.
     */
    timeout: {
      type: Number,
      value: 0
    },

    /**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */
    auto: {
      type: Boolean,
      value: false
    },

    /**
     * If true, error messages will automatically be logged to the console.
     */
    verbose: {
      type: Boolean,
      value: false
    },

    /**
     * The most recent request made by this iron-ajax element.
     */
    lastRequest: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * True while lastRequest is in flight.
     */
    loading: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */
    lastResponse: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */
    lastError: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */
    activeRequests: {
      type: Array,
      notify: true,
      readOnly: true,
      value: function value() {
        return [];
      }
    },

    /**
     * Length of time in milliseconds to debounce multiple automatically generated requests.
     */
    debounceDuration: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */
    jsonPrefix: {
      type: String,
      value: ''
    },

    /**
     * By default, iron-ajax's events do not bubble. Setting this attribute will cause its
     * request and response events as well as its iron-ajax-request, -response,  and -error
     * events to bubble to the window object. The vanilla error event never bubbles when
     * using shadow dom even if this.bubbles is true because a scoped flag is not passed with
     * it (first link) and because the shadow dom spec did not used to allow certain events,
     * including events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */
    bubbles: {
      type: Boolean,
      value: false
    },

    /**
     * Changes the [`completes`](iron-request#property-completes) promise chain 
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */
    rejectWithRequest: {
      type: Boolean,
      value: false
    },

    _boundHandleResponse: {
      type: Function,
      value: function value() {
        return this._handleResponse.bind(this);
      }
    }
  },

  observers: ['_requestOptionsChanged(url, method, params.*, headers, contentType, ' + 'body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)'],

  /**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */
  get queryString() {
    var queryParts = [];
    var param;
    var value;

    for (param in this.params) {
      value = this.params[param];
      param = window.encodeURIComponent(param);

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          queryParts.push(param + '=' + window.encodeURIComponent(value[i]));
        }
      } else if (value !== null) {
        queryParts.push(param + '=' + window.encodeURIComponent(value));
      } else {
        queryParts.push(param);
      }
    }

    return queryParts.join('&');
  },

  /**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */
  get requestUrl() {
    var queryString = this.queryString;
    var url = this.url || '';

    if (queryString) {
      var bindingChar = url.indexOf('?') >= 0 ? '&' : '?';
      return url + bindingChar + queryString;
    }

    return url;
  },

  /**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */
  get requestHeaders() {
    var headers = {};
    var contentType = this.contentType;
    if (contentType == null && typeof this.body === 'string') {
      contentType = 'application/x-www-form-urlencoded';
    }
    if (contentType) {
      headers['content-type'] = contentType;
    }
    var header;

    if (_typeof(this.headers) === 'object') {
      for (header in this.headers) {
        headers[header] = this.headers[header].toString();
      }
    }

    return headers;
  },

  /**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body: (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */
  toRequestOptions: function toRequestOptions() {
    return {
      url: this.requestUrl || '',
      method: this.method,
      headers: this.requestHeaders,
      body: this.body,
      async: !this.sync,
      handleAs: this.handleAs,
      jsonPrefix: this.jsonPrefix,
      withCredentials: this.withCredentials,
      timeout: this.timeout,
      rejectWithRequest: this.rejectWithRequest
    };
  },

  /**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */
  generateRequest: function generateRequest() {
    var request = /** @type {!IronRequestElement} */document.createElement('iron-request');
    var requestOptions = this.toRequestOptions();

    this.push('activeRequests', request);

    request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this, request)).then(this._discardRequest.bind(this, request));

    var evt = this.fire('iron-ajax-presend', {
      request: request,
      options: requestOptions
    }, { bubbles: this.bubbles, cancelable: true });

    if (evt.defaultPrevented) {
      request.abort();
      request.rejectCompletes(request);
      return request;
    }

    request.send(requestOptions);

    this._setLastRequest(request);
    this._setLoading(true);

    this.fire('request', {
      request: request,
      options: requestOptions
    }, {
      bubbles: this.bubbles,
      composed: true
    });

    this.fire('iron-ajax-request', {
      request: request,
      options: requestOptions
    }, {
      bubbles: this.bubbles,
      composed: true
    });

    return request;
  },

  _handleResponse: function _handleResponse(request) {
    if (request === this.lastRequest) {
      this._setLastResponse(request.response);
      this._setLastError(null);
      this._setLoading(false);
    }
    this.fire('response', request, {
      bubbles: this.bubbles,
      composed: true
    });
    this.fire('iron-ajax-response', request, {
      bubbles: this.bubbles,
      composed: true
    });
  },

  _handleError: function _handleError(request, error) {
    if (this.verbose) {
      Polymer.Base._error(error);
    }

    if (request === this.lastRequest) {
      this._setLastError({
        request: request,
        error: error,
        status: request.xhr.status,
        statusText: request.xhr.statusText,
        response: request.xhr.response
      });
      this._setLastResponse(null);
      this._setLoading(false);
    }

    // Tests fail if this goes after the normal this.fire('error', ...)
    this.fire('iron-ajax-error', {
      request: request,
      error: error
    }, {
      bubbles: this.bubbles,
      composed: true
    });

    this.fire('error', {
      request: request,
      error: error
    }, {
      bubbles: this.bubbles,
      composed: true
    });
  },

  _discardRequest: function _discardRequest(request) {
    var requestIndex = this.activeRequests.indexOf(request);

    if (requestIndex > -1) {
      this.splice('activeRequests', requestIndex, 1);
    }
  },

  _requestOptionsChanged: function _requestOptionsChanged() {
    this.debounce('generate-request', function () {
      if (this.url == null) {
        return;
      }

      if (this.auto) {
        this.generateRequest();
      }
    }, this.debounceDuration);
  }

});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(118);

__webpack_require__(119);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-item> <template> <style include=paper-item-shared-styles></style> <style>:host{@apply --layout-horizontal;@apply --layout-center;@apply --paper-font-subhead;@apply --paper-item;}</style> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-item',

  behaviors: [Polymer.PaperItemBehavior]
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(94);

__webpack_require__(120);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-material> <template> <style include=paper-material-shared-styles></style> <style>:host([animated]){@apply --shadow-transition;}:host{@apply --paper-material;}</style> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-material',

  properties: {
    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */
    elevation: {
      type: Number,
      reflectToAttribute: true,
      value: 1
    },

    /**
     * Set this to true to animate the shadow when setting a new
     * `elevation` value.
     *
     * @attribute animated
     * @type boolean
     * @default false
     */
    animated: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    }
  }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/**
Polymer.IronFormElementBehavior enables a custom element to be included
in an `iron-form`.
 Events `iron-form-element-register` and `iron-form-element-unregister` are not fired on Polymer 2.0.
 @demo demo/index.html
@polymerBehavior
*/
Polymer.IronFormElementBehavior = {

  properties: {
    /**
     * Fired when the element is added to an `iron-form`.
     *
     * @event iron-form-element-register
     */

    /**
     * Fired when the element is removed from an `iron-form`.
     *
     * @event iron-form-element-unregister
     */

    /**
     * The name of this element.
     */
    name: {
      type: String
    },

    /**
     * The value for this element.
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * Polymer.IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: {
      type: Boolean,
      value: false
    },

    /**
     * The form that the element is registered to.
     */
    _parentForm: {
      type: Object
    }
  },

  attached: Polymer.Element ? null : function () {
    // Note: the iron-form that this element belongs to will set this
    // element's _parentForm property when handling this event.
    this.fire('iron-form-element-register');
  },

  detached: Polymer.Element ? null : function () {
    if (this._parentForm) {
      this._parentForm.fire('iron-form-element-unregister', { target: this });
    }
  }

};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(103);

__webpack_require__(104);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=iron-input> <template> <style>:host{display:inline-block}</style> <slot id=content></slot> </template> </dom-module>");

Polymer({
  is: 'iron-input',

  behaviors: [Polymer.IronValidatableBehavior],

  /**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */

  properties: {

    /**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */
    bindValue: {
      type: String
    },

    /**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */
    value: {
      computed: '_computeValue(bindValue)'
    },

    /**
     * Regex-like list of characters allowed as input; all characters not in the list
     * will be rejected. The recommended format should be a list of allowed characters,
     * for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user inputs text,
     * each individual character will be checked against the pattern (rather than checking
     * the entire value as a whole). If a character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any character
     * doesn't match `allowedPattern`, the entire pasted string will be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */
    allowedPattern: {
      type: String
    },

    /**
     * Set to true to auto-validate the input value as you type.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * The native input element.
     */
    _inputElement: Object
  },

  observers: ['_bindValueChanged(bindValue, _inputElement)'],

  listeners: {
    'input': '_onInput',
    'keypress': '_onKeypress'
  },

  created: function created() {
    Polymer.IronA11yAnnouncer.requestAvailability();
    this._previousValidInput = '';
    this._patternAlreadyChecked = false;
  },

  attached: function attached() {
    // If the input is added at a later time, update the internal reference.
    this._observer = Polymer.dom(this).observeNodes(function (info) {
      this._initSlottedInput();
    }.bind(this));
  },

  detached: function detached() {
    if (this._observer) {
      Polymer.dom(this).unobserveNodes(this._observer);
      this._observer = null;
    }
  },

  /**
   * Returns the distributed <input> element.
   */
  get inputElement() {
    return this._inputElement;
  },

  _initSlottedInput: function _initSlottedInput() {
    this._inputElement = this.getEffectiveChildren()[0];

    if (this.inputElement && this.inputElement.value) {
      this.bindValue = this.inputElement.value;
    }

    this.fire('iron-input-ready');
  },

  get _patternRegExp() {
    var pattern;
    if (this.allowedPattern) {
      pattern = new RegExp(this.allowedPattern);
    } else {
      switch (this.type) {
        case 'number':
          pattern = /[0-9.,e-]/;
          break;
      }
    }
    return pattern;
  },

  /**
   * @suppress {checkTypes}
   */
  _bindValueChanged: function _bindValueChanged(bindValue, inputElement) {
    // The observer could have run before attached() when we have actually initialized
    // this property.
    if (!inputElement) {
      return;
    }

    if (bindValue === undefined) {
      inputElement.value = null;
    } else if (bindValue !== inputElement.value) {
      this.inputElement.value = bindValue;
    }

    if (this.autoValidate) {
      this.validate();
    }

    // manually notify because we don't want to notify until after setting value
    this.fire('bind-value-changed', { value: bindValue });
  },

  _onInput: function _onInput() {
    // Need to validate each of the characters pasted if they haven't
    // been validated inside `_onKeypress` already.
    if (this.allowedPattern && !this._patternAlreadyChecked) {
      var valid = this._checkPatternValidity();
      if (!valid) {
        this._announceInvalidCharacter('Invalid string of characters not entered.');
        this.inputElement.value = this._previousValidInput;
      }
    }
    this.bindValue = this._previousValidInput = this.inputElement.value;
    this._patternAlreadyChecked = false;
  },

  _isPrintable: function _isPrintable(event) {
    // What a control/printable character is varies wildly based on the browser.
    // - most control characters (arrows, backspace) do not send a `keypress` event
    //   in Chrome, but the *do* on Firefox
    // - in Firefox, when they do send a `keypress` event, control chars have
    //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
    // - printable characters always send a keypress event.
    // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the keyCode
    //   always matches the charCode.
    // None of this makes any sense.

    // For these keys, ASCII code == browser keycode.
    var anyNonPrintable = event.keyCode == 8 || // backspace
    event.keyCode == 9 || // tab
    event.keyCode == 13 || // enter
    event.keyCode == 27; // escape

    // For these keys, make sure it's a browser keycode and not an ASCII code.
    var mozNonPrintable = event.keyCode == 19 || // pause
    event.keyCode == 20 || // caps lock
    event.keyCode == 45 || // insert
    event.keyCode == 46 || // delete
    event.keyCode == 144 || // num lock
    event.keyCode == 145 || // scroll lock
    event.keyCode > 32 && event.keyCode < 41 || // page up/down, end, home, arrows
    event.keyCode > 111 && event.keyCode < 124; // fn keys

    return !anyNonPrintable && !(event.charCode == 0 && mozNonPrintable);
  },

  _onKeypress: function _onKeypress(event) {
    if (!this.allowedPattern && this.type !== 'number') {
      return;
    }
    var regexp = this._patternRegExp;
    if (!regexp) {
      return;
    }

    // Handle special keys and backspace
    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    // Check the pattern either here or in `_onInput`, but not in both.
    this._patternAlreadyChecked = true;

    var thisChar = String.fromCharCode(event.charCode);
    if (this._isPrintable(event) && !regexp.test(thisChar)) {
      event.preventDefault();
      this._announceInvalidCharacter('Invalid character ' + thisChar + ' not entered.');
    }
  },

  _checkPatternValidity: function _checkPatternValidity() {
    var regexp = this._patternRegExp;
    if (!regexp) {
      return true;
    }
    for (var i = 0; i < this.inputElement.value.length; i++) {
      if (!regexp.test(this.inputElement.value[i])) {
        return false;
      }
    }
    return true;
  },

  /**
   * Returns true if `value` is valid. The validator provided in `validator` will be used first,
   * then any constraints.
   * @return {boolean} True if the value is valid.
   */
  validate: function validate() {
    if (!this.inputElement) {
      this.invalid = false;
      return true;
    }

    // Use the nested input's native validity.
    var valid = this.inputElement.checkValidity();

    // Only do extra checking if the browser thought this was valid.
    if (valid) {
      // Empty, required input is invalid
      if (this.required && this.bindValue === '') {
        valid = false;
      } else if (this.hasValidator()) {
        valid = Polymer.IronValidatableBehavior.validate.call(this, this.bindValue);
      }
    }

    this.invalid = !valid;
    this.fire('iron-input-validate');
    return valid;
  },

  _announceInvalidCharacter: function _announceInvalidCharacter(message) {
    this.fire('iron-announce', { text: message });
  },

  _computeValue: function _computeValue(bindValue) {
    return bindValue;
  }
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=iron-a11y-announcer> <template> <style>:host{display:inline-block;position:fixed;clip:rect(0,0,0,0)}</style> <div aria-live$=[[mode]]>[[_text]]</div> </template> </dom-module>");

(function () {
  'use strict';

  Polymer.IronA11yAnnouncer = Polymer({
    is: 'iron-a11y-announcer',

    properties: {

      /**
       * The value of mode is used to set the `aria-live` attribute
       * for the element that will be announced. Valid values are: `off`,
       * `polite` and `assertive`.
       */
      mode: {
        type: String,
        value: 'polite'
      },

      _text: {
        type: String,
        value: ''
      }
    },

    created: function created() {
      if (!Polymer.IronA11yAnnouncer.instance) {
        Polymer.IronA11yAnnouncer.instance = this;
      }

      document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
    },

    /**
     * Cause a text string to be announced by screen readers.
     *
     * @param {string} text The text that should be announced.
     */
    announce: function announce(text) {
      this._text = '';
      this.async(function () {
        this._text = text;
      }, 100);
    },

    _onIronAnnounce: function _onIronAnnounce(event) {
      if (event.detail && event.detail.text) {
        this.announce(event.detail.text);
      }
    }
  });

  Polymer.IronA11yAnnouncer.instance = null;

  Polymer.IronA11yAnnouncer.requestAvailability = function () {
    if (!Polymer.IronA11yAnnouncer.instance) {
      Polymer.IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
    }

    document.body.appendChild(Polymer.IronA11yAnnouncer.instance);
  };
})();

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(18);

/**
 * Singleton IronMeta instance.
 */
Polymer.IronValidatableBehaviorMeta = null;

/**
 * `Use Polymer.IronValidatableBehavior` to implement an element that validates user input.
 * Use the related `Polymer.IronValidatorBehavior` to add custom validation logic to an iron-input.
 *
 * By default, an `<iron-form>` element validates its fields when the user presses the submit button.
 * To validate a form imperatively, call the form's `validate()` method, which in turn will
 * call `validate()` on all its children. By using `Polymer.IronValidatableBehavior`, your
 * custom element will get a public `validate()`, which
 * will return the validity of the element, and a corresponding `invalid` attribute,
 * which can be used for styling.
 *
 * To implement the custom validation logic of your element, you must override
 * the protected `_getValidity()` method of this behaviour, rather than `validate()`.
 * See [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
 * for an example.
 *
 * ### Accessibility
 *
 * Changing the `invalid` property, either manually or by calling `validate()` will update the
 * `aria-invalid` attribute.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
Polymer.IronValidatableBehavior = {

  properties: {
    /**
     * Name of the validator to use.
     */
    validator: {
      type: String
    },

    /**
     * True if the last call to `validate` is invalid.
     */
    invalid: {
      notify: true,
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_invalidChanged'
    }
  },

  registered: function registered() {
    Polymer.IronValidatableBehaviorMeta = new Polymer.IronMeta({ type: 'validator' });
  },

  _invalidChanged: function _invalidChanged() {
    if (this.invalid) {
      this.setAttribute('aria-invalid', 'true');
    } else {
      this.removeAttribute('aria-invalid');
    }
  },

  /* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */
  get _validator() {
    return Polymer.IronValidatableBehaviorMeta && Polymer.IronValidatableBehaviorMeta.byKey(this.validator);
  },

  /**
   * @return {boolean} True if the validator `validator` exists.
   */
  hasValidator: function hasValidator() {
    return this._validator != null;
  },

  /**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */
  validate: function validate(value) {
    // If this is an element that also has a value property, and there was
    // no explicit value argument passed, use the element's property instead.
    if (value === undefined && this.value !== undefined) this.invalid = !this._getValidity(this.value);else this.invalid = !this._getValidity(value);
    return !this.invalid;
  },

  /**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */

  _getValidity: function _getValidity(value) {
    if (this.hasValidator()) {
      return this._validator.validate(value);
    }
    return true;
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(16);

__webpack_require__(33);

// Generate unique, monotonically increasing IDs for labels (needed by
// aria-labelledby) and add-ons.
Polymer.PaperInputHelper = {};
Polymer.PaperInputHelper.NextLabelID = 1;
Polymer.PaperInputHelper.NextAddonID = 1;

/**
 * Use `Polymer.PaperInputBehavior` to implement inputs with `<paper-input-container>`. This
 * behavior is implemented by `<paper-input>`. It exposes a number of properties from
 * `<paper-input-container>` and `<input is="iron-input">` and they should be bound in your
 * template.
 *
 * The input element can be accessed by the `inputElement` property if you need to access
 * properties or methods that are not exposed.
 * @polymerBehavior Polymer.PaperInputBehavior
 */
Polymer.PaperInputBehaviorImpl = {

  properties: {
    /**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */

    /**
     * The label for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * `<label>`'s content and `hidden` property, e.g.
     * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
     */
    label: {
      type: String
    },

    /**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */
    disabled: {
      type: Boolean,
      value: false
    },

    /**
     * Returns true if the value is invalid. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed automatically,
     * which can clobber attempts to manage it manually.
     */
    invalid: {
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */
    allowedPattern: {
      type: String
    },

    /**
     * The type of the input. The supported types are the
     * [native input's types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the (Polymer 1) `<input is="iron-input">`'s or (Polymer 2)
     * `<iron-input>`'s `type` property.
     */
    type: {
      type: String
    },

    /**
     * The datalist of the input (if any). This should match the id of an existing `<datalist>`.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `list` property.
     */
    list: {
      type: String
    },

    /**
     * A pattern to validate the `input` with. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `pattern` property.
     */
    pattern: {
      type: String
    },

    /**
     * Set to true to mark the input as required. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `required` property.
     */
    required: {
      type: Boolean,
      value: false
    },

    /**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */
    errorMessage: {
      type: String
    },

    /**
     * Set to true to show a character counter.
     */
    charCounter: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the label. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to auto-validate the input value. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<paper-input-container>`'s `autoValidate` property.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */
    validator: {
      type: String
    },

    // HTMLInputElement attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete` property.
     */
    autocomplete: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus` property.
     */
    autofocus: {
      type: Boolean,
      observer: '_autofocusChanged'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode` property.
     */
    inputmode: {
      type: String
    },

    /**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength` property.
     */
    minlength: {
      type: Number
    },

    /**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength` property.
     */
    maxlength: {
      type: Number
    },

    /**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */
    min: {
      type: String
    },

    /**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */
    max: {
      type: String
    },

    /**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */
    step: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */
    name: {
      type: String
    },

    /**
     * A placeholder string in addition to the label. If this is set, the label will always float.
     */
    placeholder: {
      type: String,
      // need to set a default so _computeAlwaysFloatLabel is run
      value: ''
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly` property.
     */
    readonly: {
      type: Boolean,
      value: false
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */
    size: {
      type: Number
    },

    // Nonstandard attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize` property.
     */
    autocapitalize: {
      type: String,
      value: 'none'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect` property.
     */
    autocorrect: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave` property,
     * used with type=search.
     */
    autosave: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */
    results: {
      type: Number
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */
    accept: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */
    multiple: {
      type: Boolean
    },

    _ariaDescribedBy: {
      type: String,
      value: ''
    },

    _ariaLabelledBy: {
      type: String,
      value: ''
    }

  },

  listeners: {
    'addon-attached': '_onAddonAttached'
  },

  keyBindings: {
    'shift+tab:keydown': '_onShiftTabDown'
  },

  hostAttributes: {
    tabindex: 0
  },

  /**
   * Returns a reference to the input element.
   */
  get inputElement() {
    return this.$.input;
  },

  /**
   * Returns a reference to the focusable element.
   */
  get _focusableElement() {
    return this.inputElement;
  },

  created: function created() {
    // These types have some default placeholder text; overlapping
    // the label on top of it looks terrible. Auto-float the label in this case.
    this._typesThatHaveText = ["date", "datetime", "datetime-local", "month", "time", "week", "file"];
  },

  attached: function attached() {
    this._updateAriaLabelledBy();

    // In the 2.0 version of the element, this is handled in `onIronInputReady`,
    // i.e. after the native input has finished distributing. In the 1.0 version,
    // the input is in the shadow tree, so it's already available.
    if (!Polymer.Element && this.inputElement && this._typesThatHaveText.indexOf(this.inputElement.type) !== -1) {
      this.alwaysFloatLabel = true;
    }
  },

  _appendStringWithSpace: function _appendStringWithSpace(str, more) {
    if (str) {
      str = str + ' ' + more;
    } else {
      str = more;
    }
    return str;
  },

  _onAddonAttached: function _onAddonAttached(event) {
    var target = Polymer.dom(event).rootTarget;
    if (target.id) {
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, target.id);
    } else {
      var id = 'paper-input-add-on-' + Polymer.PaperInputHelper.NextAddonID++;
      target.id = id;
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, id);
    }
  },

  /**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */
  validate: function validate() {
    return this.inputElement.validate();
  },

  /**
   * Forward focus to inputElement. Overriden from IronControlState.
   */
  _focusBlurHandler: function _focusBlurHandler(event) {
    Polymer.IronControlState._focusBlurHandler.call(this, event);

    // Forward the focus to the nested input.
    if (this.focused && !this._shiftTabPressed && this._focusableElement) {
      this._focusableElement.focus();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function _onShiftTabDown(event) {
    var oldTabIndex = this.getAttribute('tabindex');
    this._shiftTabPressed = true;
    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      this._shiftTabPressed = false;
    }, 1);
  },

  /**
   * If `autoValidate` is true, then validates the element.
   */
  _handleAutoValidate: function _handleAutoValidate() {
    if (this.autoValidate) this.validate();
  },

  /**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */
  updateValueAndPreserveCaret: function updateValueAndPreserveCaret(newValue) {
    // Not all elements might have selection, and even if they have the
    // right properties, accessing them might throw an exception (like for
    // <input type=number>)
    try {
      var start = this.inputElement.selectionStart;
      this.value = newValue;

      // The cursor automatically jumps to the end after re-setting the value,
      // so restore it to its original position.
      this.inputElement.selectionStart = start;
      this.inputElement.selectionEnd = start;
    } catch (e) {
      // Just set the value and give up on the caret.
      this.value = newValue;
    }
  },

  _computeAlwaysFloatLabel: function _computeAlwaysFloatLabel(alwaysFloatLabel, placeholder) {
    return placeholder || alwaysFloatLabel;
  },

  _updateAriaLabelledBy: function _updateAriaLabelledBy() {
    var label = Polymer.dom(this.root).querySelector('label');
    if (!label) {
      this._ariaLabelledBy = '';
      return;
    }
    var labelledBy;
    if (label.id) {
      labelledBy = label.id;
    } else {
      labelledBy = 'paper-input-label-' + Polymer.PaperInputHelper.NextLabelID++;
      label.id = labelledBy;
    }
    this._ariaLabelledBy = labelledBy;
  },

  _onChange: function _onChange(event) {
    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    // See https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
    if (this.shadowRoot) {
      this.fire(event.type, { sourceEvent: event }, {
        node: this,
        bubbles: event.bubbles,
        cancelable: event.cancelable
      });
    }
  },

  _autofocusChanged: function _autofocusChanged() {
    // Firefox doesn't respect the autofocus attribute if it's applied after
    // the page is loaded (Chrome/WebKit do respect it), preventing an
    // autofocus attribute specified in markup from taking effect when the
    // element is upgraded. As a workaround, if the autofocus property is set,
    // and the focus hasn't already been moved elsewhere, we take focus.
    if (this.autofocus && this._focusableElement) {

      // In IE 11, the default document.activeElement can be the page's
      // outermost html element, but there are also cases (under the
      // polyfill?) in which the activeElement is not a real HTMLElement, but
      // just a plain object. We identify the latter case as having no valid
      // activeElement.
      var activeElement = document.activeElement;
      var isActiveElementValid = activeElement instanceof HTMLElement;

      // Has some other element has already taken the focus?
      var isSomeElementActive = isActiveElementValid && activeElement !== document.body && activeElement !== document.documentElement; /* IE 11 */
      if (!isSomeElementActive) {
        // No specific element has taken the focus yet, so we can take it.
        this._focusableElement.focus();
      }
    }
  }
};

/** @polymerBehavior */
Polymer.PaperInputBehavior = [Polymer.IronControlState, Polymer.IronA11yKeysBehavior, Polymer.PaperInputBehaviorImpl];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(93);

__webpack_require__(97);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-input-char-counter> <template> <style>:host{display:inline-block;float:right;@apply --paper-font-caption;@apply --paper-input-char-counter;}:host([hidden]){display:none!important}:host-context([dir=rtl]){float:left}</style> <span>[[_charCounterStr]]</span> </template> </dom-module>");

Polymer({
  is: 'paper-input-char-counter',

  behaviors: [Polymer.PaperInputAddonBehavior],

  properties: {
    _charCounterStr: {
      type: String,
      value: '0'
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function update(state) {
    if (!state.inputElement) {
      return;
    }

    state.value = state.value || '';

    var counter = state.value.toString().length.toString();

    if (state.inputElement.hasAttribute('maxlength')) {
      counter += '/' + state.inputElement.getAttribute('maxlength');
    }

    this._charCounterStr = counter;
  }
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<link rel=stylesheet type=text/css href=\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic\" crossorigin=anonymous>");

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(30);

__webpack_require__(93);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-input-container> <template> <style>:host{display:block;padding:8px 0;--paper-input-container-shared-input-style:{position:relative;outline:0;box-shadow:none;padding:0;width:100%;max-width:100%;background:0 0;border:none;color:var(--paper-input-container-input-color,var(--primary-text-color));-webkit-appearance:none;text-align:inherit;vertical-align:bottom;@apply --paper-font-subhead;};@apply --paper-input-container;}:host([inline]){display:inline-block}:host([disabled]){pointer-events:none;opacity:.33;@apply --paper-input-container-disabled;}:host([hidden]){display:none!important}[hidden]{display:none!important}.floated-label-placeholder{@apply --paper-font-caption;}.underline{height:2px;position:relative}.focused-line{@apply --layout-fit;border-bottom:2px solid var(--paper-input-container-focus-color,var(--primary-color));-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);@apply --paper-input-container-underline-focus;}.underline.is-highlighted .focused-line{-webkit-transform:none;transform:none;-webkit-transition:-webkit-transform .25s;transition:transform .25s;@apply --paper-transition-easing;}.underline.is-invalid .focused-line{border-color:var(--paper-input-container-invalid-color,var(--error-color));-webkit-transform:none;transform:none;-webkit-transition:-webkit-transform .25s;transition:transform .25s;@apply --paper-transition-easing;}.unfocused-line{@apply --layout-fit;border-bottom:1px solid var(--paper-input-container-color,var(--secondary-text-color));@apply --paper-input-container-underline;}:host([disabled]) .unfocused-line{border-bottom:1px dashed;border-color:var(--paper-input-container-color,var(--secondary-text-color));@apply --paper-input-container-underline-disabled;}.input-wrapper{@apply --layout-horizontal;@apply --layout-center;position:relative}.input-content{@apply --layout-flex-auto;@apply --layout-relative;max-width:100%}.input-content ::slotted(.paper-input-label),.input-content ::slotted(label){position:absolute;top:0;right:0;left:0;width:100%;font:inherit;color:var(--paper-input-container-color,var(--secondary-text-color));-webkit-transition:-webkit-transform .25s,width .25s;transition:transform .25s,width .25s;-webkit-transform-origin:left top;transform-origin:left top;@apply --paper-font-common-nowrap;@apply --paper-font-subhead;@apply --paper-input-container-label;@apply --paper-transition-easing;}.input-content.label-is-floating ::slotted(.paper-input-label),.input-content.label-is-floating ::slotted(label){-webkit-transform:translateY(-75%) scale(.75);transform:translateY(-75%) scale(.75);width:133%;@apply --paper-input-container-label-floating;}:host-context([dir=rtl]) .input-content.label-is-floating ::slotted(.paper-input-label),:host-context([dir=rtl]) .input-content.label-is-floating ::slotted(label){width:100%;-webkit-transform-origin:right top;transform-origin:right top}.input-content.label-is-highlighted ::slotted(.paper-input-label),.input-content.label-is-highlighted ::slotted(label){color:var(--paper-input-container-focus-color,var(--primary-color));@apply --paper-input-container-label-focus;}.input-content.is-invalid ::slotted(.paper-input-label),.input-content.is-invalid ::slotted(label){color:var(--paper-input-container-invalid-color,var(--error-color))}.input-content.label-is-hidden ::slotted(.paper-input-label),.input-content.label-is-hidden ::slotted(label){visibility:hidden}.input-content ::slotted(iron-input){@apply --paper-input-container-shared-input-style;}.input-content ::slotted(.paper-input-input),.input-content ::slotted(input),.input-content ::slotted(iron-autogrow-textarea),.input-content ::slotted(textarea){@apply --paper-input-container-shared-input-style;@apply --paper-input-container-input;}.input-content ::slotted(input)::-webkit-inner-spin-button,.input-content ::slotted(input)::-webkit-outer-spin-button{@apply --paper-input-container-input-webkit-spinner;}.input-content.focused ::slotted(.paper-input-input),.input-content.focused ::slotted(input),.input-content.focused ::slotted(iron-autogrow-textarea),.input-content.focused ::slotted(textarea){@apply --paper-input-container-input-focus;}.input-content.is-invalid ::slotted(.paper-input-input),.input-content.is-invalid ::slotted(input),.input-content.is-invalid ::slotted(iron-autogrow-textarea),.input-content.is-invalid ::slotted(textarea){@apply --paper-input-container-input-invalid;}.prefix ::slotted(*){display:inline-block;@apply --paper-font-subhead;@apply --layout-flex-none;@apply --paper-input-prefix;}.suffix ::slotted(*){display:inline-block;@apply --paper-font-subhead;@apply --layout-flex-none;@apply --paper-input-suffix;}.input-content ::slotted(input){min-width:0}.input-content ::slotted(textarea){resize:none}.add-on-content{position:relative}.add-on-content.is-invalid ::slotted(*){color:var(--paper-input-container-invalid-color,var(--error-color))}.add-on-content.is-highlighted ::slotted(*){color:var(--paper-input-container-focus-color,var(--primary-color))}</style> <div class=floated-label-placeholder aria-hidden=true hidden=[[noLabelFloat]]>&nbsp;</div> <div class=input-wrapper> <span class=prefix><slot name=prefix></slot></span> <div class$=[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]] id=labelAndInputContainer> <slot name=label></slot> <slot name=input></slot> </div> <span class=suffix><slot name=suffix></slot></span> </div> <div class$=[[_computeUnderlineClass(focused,invalid)]]> <div class=unfocused-line></div> <div class=focused-line></div> </div> <div class$=[[_computeAddOnContentClass(focused,invalid)]]> <slot name=add-on></slot> </div> </template> </dom-module>");

Polymer({
  is: 'paper-input-container',

  properties: {
    /**
     * Set to true to disable the floating label. The label disappears when the input value is
     * not null.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the floating label.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * The attribute to listen for value changes on.
     */
    attrForValue: {
      type: String,
      value: 'bind-value'
    },

    /**
     * Set to true to auto-validate the input value when it changes.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * True if the input is invalid. This property is set automatically when the input value
     * changes if auto-validating, or when the `iron-input-validate` event is heard from a child.
     */
    invalid: {
      observer: '_invalidChanged',
      type: Boolean,
      value: false
    },

    /**
     * True if the input has focus.
     */
    focused: {
      readOnly: true,
      type: Boolean,
      value: false,
      notify: true
    },

    _addons: {
      type: Array
      // do not set a default value here intentionally - it will be initialized lazily when a
      // distributed child is attached, which may occur before configuration for this element
      // in polyfill.
    },

    _inputHasContent: {
      type: Boolean,
      value: false
    },

    _inputSelector: {
      type: String,
      value: 'input,iron-input,textarea,.paper-input-input'
    },

    _boundOnFocus: {
      type: Function,
      value: function value() {
        return this._onFocus.bind(this);
      }
    },

    _boundOnBlur: {
      type: Function,
      value: function value() {
        return this._onBlur.bind(this);
      }
    },

    _boundOnInput: {
      type: Function,
      value: function value() {
        return this._onInput.bind(this);
      }
    },

    _boundValueChanged: {
      type: Function,
      value: function value() {
        return this._onValueChanged.bind(this);
      }
    }
  },

  listeners: {
    'addon-attached': '_onAddonAttached',
    'iron-input-validate': '_onIronInputValidate'
  },

  get _valueChangedEvent() {
    return this.attrForValue + '-changed';
  },

  get _propertyForValue() {
    return Polymer.CaseMap.dashToCamelCase(this.attrForValue);
  },

  get _inputElement() {
    return Polymer.dom(this).querySelector(this._inputSelector);
  },

  get _inputElementValue() {
    return this._inputElement[this._propertyForValue] || this._inputElement.value;
  },

  ready: function ready() {
    if (!this._addons) {
      this._addons = [];
    }
    this.addEventListener('focus', this._boundOnFocus, true);
    this.addEventListener('blur', this._boundOnBlur, true);
  },

  attached: function attached() {
    if (this.attrForValue) {
      this._inputElement.addEventListener(this._valueChangedEvent, this._boundValueChanged);
    } else {
      this.addEventListener('input', this._onInput);
    }

    // Only validate when attached if the input already has a value.
    if (this._inputElementValue && this._inputElementValue != '') {
      this._handleValueAndAutoValidate(this._inputElement);
    } else {
      this._handleValue(this._inputElement);
    }
  },

  _onAddonAttached: function _onAddonAttached(event) {
    if (!this._addons) {
      this._addons = [];
    }
    var target = event.target;
    if (this._addons.indexOf(target) === -1) {
      this._addons.push(target);
      if (this.isAttached) {
        this._handleValue(this._inputElement);
      }
    }
  },

  _onFocus: function _onFocus() {
    this._setFocused(true);
  },

  _onBlur: function _onBlur() {
    this._setFocused(false);
    this._handleValueAndAutoValidate(this._inputElement);
  },

  _onInput: function _onInput(event) {
    this._handleValueAndAutoValidate(event.target);
  },

  _onValueChanged: function _onValueChanged(event) {
    var input = event.target;

    // Problem: if the input is required but has no text entered, we should
    // only validate it on blur (so that an empty form doesn't come up red
    // immediately; however, in this handler, we don't know whether this is
    // the booting up value or a value in the future. I am assuming that the
    // case  we care about manifests itself when the value is undefined.
    // If this causes future problems, we need to do something like track whether
    // the iron-input-ready event has fired, and this handler came before that.

    if (input.value === undefined) {
      return;
    }

    this._handleValueAndAutoValidate(event.target);
  },

  _handleValue: function _handleValue(inputElement) {
    var value = this._inputElementValue;

    // type="number" hack needed because this.value is empty until it's valid
    if (value || value === 0 || inputElement.type === 'number' && !inputElement.checkValidity()) {
      this._inputHasContent = true;
    } else {
      this._inputHasContent = false;
    }

    this.updateAddons({
      inputElement: inputElement,
      value: value,
      invalid: this.invalid
    });
  },

  _handleValueAndAutoValidate: function _handleValueAndAutoValidate(inputElement) {
    if (this.autoValidate && inputElement) {
      var valid;

      if (inputElement.validate) {
        valid = inputElement.validate(this._inputElementValue);
      } else {
        valid = inputElement.checkValidity();
      }
      this.invalid = !valid;
    }

    // Call this last to notify the add-ons.
    this._handleValue(inputElement);
  },

  _onIronInputValidate: function _onIronInputValidate(event) {
    this.invalid = this._inputElement.invalid;
  },

  _invalidChanged: function _invalidChanged() {
    if (this._addons) {
      this.updateAddons({ invalid: this.invalid });
    }
  },

  /**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */
  updateAddons: function updateAddons(state) {
    for (var addon, index = 0; addon = this._addons[index]; index++) {
      addon.update(state);
    }
  },

  _computeInputContentClass: function _computeInputContentClass(noLabelFloat, alwaysFloatLabel, focused, invalid, _inputHasContent) {
    var cls = 'input-content';
    if (!noLabelFloat) {
      var label = this.querySelector('label');

      if (alwaysFloatLabel || _inputHasContent) {
        cls += ' label-is-floating';
        // If the label is floating, ignore any offsets that may have been
        // applied from a prefix element.
        this.$.labelAndInputContainer.style.position = 'static';

        if (invalid) {
          cls += ' is-invalid';
        } else if (focused) {
          cls += " label-is-highlighted";
        }
      } else {
        // When the label is not floating, it should overlap the input element.
        if (label) {
          this.$.labelAndInputContainer.style.position = 'relative';
        }
        if (invalid) {
          cls += ' is-invalid';
        }
      }
    } else {
      if (_inputHasContent) {
        cls += ' label-is-hidden';
      }
      if (invalid) {
        cls += ' is-invalid';
      }
    }
    if (focused) {
      cls += ' focused';
    }
    return cls;
  },

  _computeUnderlineClass: function _computeUnderlineClass(focused, invalid) {
    var cls = 'underline';
    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }
    return cls;
  },

  _computeAddOnContentClass: function _computeAddOnContentClass(focused, invalid) {
    var cls = 'add-on-content';
    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }
    return cls;
  }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(30);

__webpack_require__(93);

__webpack_require__(97);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-input-error> <template> <style>:host{display:inline-block;visibility:hidden;color:var(--paper-input-container-invalid-color,var(--error-color));@apply --paper-font-caption;@apply --paper-input-error;position:absolute;left:0;right:0}:host([invalid]){visibility:visible}</style> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-input-error',

  behaviors: [Polymer.PaperInputAddonBehavior],

  properties: {
    /**
     * True if the error is showing.
     */
    invalid: {
      readOnly: true,
      reflectToAttribute: true,
      type: Boolean
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function update(state) {
    this._setInvalid(state.invalid);
  }
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(30);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-card> <template> <style include=paper-material-styles>:host{display:inline-block;position:relative;box-sizing:border-box;background-color:var(--paper-card-background-color,var(--primary-background-color));border-radius:2px;@apply --paper-font-common-base;@apply --paper-card;}[hidden]{display:none!important}.header{position:relative;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden;@apply --paper-card-header;}.header iron-image{display:block;width:100%;--iron-image-width:100%;pointer-events:none;@apply --paper-card-header-image;}.header .title-text{padding:16px;font-size:24px;font-weight:400;color:var(--paper-card-header-color,#000);@apply --paper-card-header-text;}.header .title-text.over-image{position:absolute;bottom:0;@apply --paper-card-header-image-text;}:host ::slotted(.card-content){padding:16px;position:relative;@apply --paper-card-content;}:host ::slotted(.card-actions){border-top:1px solid #e8e8e8;padding:5px 16px;position:relative;@apply --paper-card-actions;}:host([elevation=\"1\"]){@apply --paper-material-elevation-1;}:host([elevation=\"2\"]){@apply --paper-material-elevation-2;}:host([elevation=\"3\"]){@apply --paper-material-elevation-3;}:host([elevation=\"4\"]){@apply --paper-material-elevation-4;}:host([elevation=\"5\"]){@apply --paper-material-elevation-5;}</style> <div class=header> <iron-image hidden$=[[!image]] aria-hidden$=[[_isHidden(image)]] src=[[image]] alt=[[alt]] placeholder=[[placeholderImage]] preload=[[preloadImage]] fade=[[fadeImage]]></iron-image> <div hidden$=[[!heading]] class$=\"title-text [[_computeHeadingClass(image)]]\">[[heading]]</div> </div> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-card',

  properties: {
    /**
     * The title of the card.
     */
    heading: {
      type: String,
      value: '',
      observer: '_headingChanged'
    },

    /**
     * The url of the title image of the card.
     */
    image: {
      type: String,
      value: ''
    },

    /**
     * The text alternative of the card's title image.
     */
    alt: {
      type: String
    },

    /**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */
    preloadImage: {
      type: Boolean,
      value: false
    },

    /**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */
    fadeImage: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image has
     * loaded. Use of a data-URI for placeholder is encouraged for instant rendering.
     */
    placeholderImage: {
      type: String,
      value: null
    },

    /**
     * The z-depth of the card, from 0-5.
     */
    elevation: {
      type: Number,
      value: 1,
      reflectToAttribute: true
    },

    /**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */
    animatedShadow: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */
    animated: {
      type: Boolean,
      reflectToAttribute: true,
      readOnly: true,
      computed: '_computeAnimated(animatedShadow)'
    }
  },

  /**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */
  _isHidden: function _isHidden(image) {
    return image ? 'false' : 'true';
  },

  _headingChanged: function _headingChanged(heading) {
    var currentHeading = this.getAttribute('heading'),
        currentLabel = this.getAttribute('aria-label');

    if (typeof currentLabel !== 'string' || currentLabel === currentHeading) {
      this.setAttribute('aria-label', heading);
    }
  },

  _computeHeadingClass: function _computeHeadingClass(image) {
    return image ? ' over-image' : '';
  },

  _computeAnimated: function _computeAnimated(animatedShadow) {
    return animatedShadow;
  }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=iron-image> <template> <style>:host{display:inline-block;overflow:hidden;position:relative}#baseURIAnchor{display:none}#sizedImgDiv{position:absolute;top:0;right:0;bottom:0;left:0;display:none}#img{display:block;width:var(--iron-image-width,auto);height:var(--iron-image-height,auto)}:host([sizing]) #sizedImgDiv{display:block}:host([sizing]) #img{display:none}#placeholder{position:absolute;top:0;right:0;bottom:0;left:0;background-color:inherit;opacity:1;@apply --iron-image-placeholder;}#placeholder.faded-out{transition:opacity .5s linear;opacity:0}</style> <a id=baseURIAnchor href=#></a> <div id=sizedImgDiv role=img hidden$=[[_computeImgDivHidden(sizing)]] aria-hidden$=[[_computeImgDivARIAHidden(alt)]] aria-label$=\"[[_computeImgDivARIALabel(alt, src)]]\"></div> <img id=img alt$=[[alt]] hidden$=[[_computeImgHidden(sizing)]] crossorigin$=[[crossorigin]] on-load=_imgOnLoad on-error=_imgOnError> <div id=placeholder hidden$=\"[[_computePlaceholderHidden(preload, fade, loading, loaded)]]\" class$=\"[[_computePlaceholderClassName(preload, fade, loading, loaded)]]\"></div> </template> </dom-module>");

Polymer({
  is: 'iron-image',

  properties: {
    /**
     * The URL of an image.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * A short text alternative for the image.
     */
    alt: {
      type: String,
      value: null
    },

    /**
     * CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: {
      type: String,
      value: null
    },

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: {
      type: Boolean,
      value: false
    },

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: {
      type: String,
      value: 'center'
    },

    /**
     * When `true`, any change to the `src` property will cause the `placeholder`
     * image to be shown until the new image has loaded.
     */
    preload: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image has
     * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
     */
    placeholder: {
      type: String,
      value: null,
      observer: '_placeholderChanged'
    },

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that tracks the loading state of the image when the `preload`
     * option is used.
     */
    loading: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Can be used to set the width of image (e.g. via binding); size may also be
     * set via CSS.
     */
    width: {
      observer: '_widthChanged',
      type: Number,
      value: null
    },

    /**
     * Can be used to set the height of image (e.g. via binding); size may also be
     * set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: {
      observer: '_heightChanged',
      type: Number,
      value: null
    }
  },

  observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],

  created: function created() {
    this._resolvedSrc = '';
  },

  _imgOnLoad: function _imgOnLoad() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);
    this._setLoaded(true);
    this._setError(false);
  },

  _imgOnError: function _imgOnError() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);
    this._setLoaded(false);
    this._setError(true);
  },

  _computePlaceholderHidden: function _computePlaceholderHidden() {
    return !this.preload || !this.fade && !this.loading && this.loaded;
  },

  _computePlaceholderClassName: function _computePlaceholderClassName() {
    return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
  },

  _computeImgDivHidden: function _computeImgDivHidden() {
    return !this.sizing;
  },

  _computeImgDivARIAHidden: function _computeImgDivARIAHidden() {
    return this.alt === '' ? 'true' : undefined;
  },

  _computeImgDivARIALabel: function _computeImgDivARIALabel() {
    if (this.alt !== null) {
      return this.alt;
    }

    // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.
    if (this.src === '') {
      return '';
    }

    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    var resolved = this._resolveSrc(this.src);
    // Remove query parts, get file name.
    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },

  _computeImgHidden: function _computeImgHidden() {
    return !!this.sizing;
  },

  _widthChanged: function _widthChanged() {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },

  _heightChanged: function _heightChanged() {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },

  _loadStateObserver: function _loadStateObserver(src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);
    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);
      this._setLoaded(false);
      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

      this._setLoading(true);
      this._setLoaded(false);
      this._setError(false);
    }
  },

  _placeholderChanged: function _placeholderChanged() {
    this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },

  _transformChanged: function _transformChanged() {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;

    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;

    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';

    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
  },

  _resolveSrc: function _resolveSrc(testSrc) {
    var resolved = Polymer.ResolveUrl.resolveUrl(testSrc, this.$.baseURIAnchor.href);
    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    if (resolved[0] === '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
    }
    return resolved;
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(94);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-material-styles> <template> <style>:host,html{--paper-material:{display:block;position:relative};--paper-material-elevation-1:{@apply --shadow-elevation-2dp;};--paper-material-elevation-2:{@apply --shadow-elevation-4dp;};--paper-material-elevation-3:{@apply --shadow-elevation-6dp;};--paper-material-elevation-4:{@apply --shadow-elevation-8dp;};--paper-material-elevation-5:{@apply --shadow-elevation-16dp;};}.paper-material,:host(.paper-material){@apply --paper-material;}.paper-material[elevation=\"1\"],:host(.paper-material[elevation=\"1\"]){@apply --paper-material-elevation-1;}.paper-material[elevation=\"2\"],:host(.paper-material[elevation=\"2\"]){@apply --paper-material-elevation-2;}.paper-material[elevation=\"3\"],:host(.paper-material[elevation=\"3\"]){@apply --paper-material-elevation-3;}.paper-material[elevation=\"4\"],:host(.paper-material[elevation=\"4\"]){@apply --paper-material-elevation-4;}.paper-material[elevation=\"5\"],:host(.paper-material[elevation=\"5\"]){@apply --paper-material-elevation-5;}</style> </template> </dom-module>");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(17);

__webpack_require__(16);

__webpack_require__(36);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=iron-list> <template> <style>:host{display:block}@media only screen and (-webkit-max-device-pixel-ratio:1){:host{will-change:transform}}#items{@apply --iron-list-items-container;position:relative}:host(:not([grid])) #items>::slotted(*){width:100%}#items>::slotted(*){box-sizing:border-box;margin:0;position:absolute;top:0;will-change:transform}</style> <array-selector id=selector items={{items}} selected={{selectedItems}} selected-item={{selectedItem}}></array-selector> <div id=items> <slot></slot> </div> </template> </dom-module>");

(function () {
  var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
  var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
  var DEFAULT_PHYSICAL_COUNT = 3;
  var HIDDEN_Y = '-10000px';
  var ITEM_WIDTH = 0;
  var ITEM_HEIGHT = 1;
  var SECRET_TABINDEX = -100;
  var IS_V2 = Polymer.flush != null;
  var ANIMATION_FRAME = IS_V2 ? Polymer.Async.animationFrame : 0;
  var IDLE_TIME = IS_V2 ? Polymer.Async.idlePeriod : 1;
  var MICRO_TASK = IS_V2 ? Polymer.Async.microTask : 2;

  /* Polymer.OptionalMutableDataBehavior is only available with Polymer 2.0. */
  if (!Polymer.OptionalMutableDataBehavior) {
    /* @polymerBehavior */
    Polymer.OptionalMutableDataBehavior = {};
  }

  Polymer({

    is: 'iron-list',

    properties: {

      /**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */
      items: {
        type: Array
      },

      /**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */
      as: {
        type: String,
        value: 'item'
      },

      /**
       * The name of the variable to add to the binding scope with the index
       * for the row.
       */
      indexAs: {
        type: String,
        value: 'index'
      },

      /**
       * The name of the variable to add to the binding scope to indicate
       * if the row is selected.
       */
      selectedAs: {
        type: String,
        value: 'selected'
      },

      /**
       * When true, the list is rendered as a grid. Grid items must have
       * fixed width and height set via CSS. e.g.
       *
       * ```html
       * <iron-list grid>
       *   <template>
       *      <div style="width: 100px; height: 100px;"> 100x100 </div>
       *   </template>
       * </iron-list>
       * ```
       */
      grid: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_gridChanged'
      },

      /**
       * When true, tapping a row will select the item, placing its data model
       * in the set of selected items retrievable via the selection property.
       *
       * Note that tapping focusable elements within the list item will not
       * result in selection, since they are presumed to have their * own action.
       */
      selectionEnabled: {
        type: Boolean,
        value: false
      },

      /**
       * When `multiSelection` is false, this is the currently selected item, or `null`
       * if no item is selected.
       */
      selectedItem: {
        type: Object,
        notify: true
      },

      /**
       * When `multiSelection` is true, this is an array that contains the selected items.
       */
      selectedItems: {
        type: Object,
        notify: true
      },

      /**
       * When `true`, multiple items may be selected at once (in this case,
       * `selected` is an array of currently selected items).  When `false`,
       * only one item may be selected at a time.
       */
      multiSelection: {
        type: Boolean,
        value: false
      },

      /**
       * The offset top from the scrolling element to the iron-list element.
       * This value can be computed using the position returned by `getBoundingClientRect()`
       * although it's preferred to use a constant value when possible.
       *
       * This property is useful when an external scrolling element is used and there's
       * some offset between the scrolling element and the list.
       * For example: a header is placed above the list.
       */
      scrollOffset: {
        type: Number,
        value: 0
      }
    },

    observers: ['_itemsChanged(items.*)', '_selectionEnabledChanged(selectionEnabled)', '_multiSelectionChanged(multiSelection)', '_setOverflow(scrollTarget, scrollOffset)'],

    behaviors: [Polymer.Templatizer, Polymer.IronResizableBehavior, Polymer.IronScrollTargetBehavior, Polymer.OptionalMutableDataBehavior],

    /**
     * The ratio of hidden tiles that should remain in the scroll direction.
     * Recommended value ~0.5, so it will distribute tiles evely in both directions.
     */
    _ratio: 0.5,

    /**
     * The padding-top value for the list.
     */
    _scrollerPaddingTop: 0,

    /**
     * This value is the same as `scrollTop`.
     */
    _scrollPosition: 0,

    /**
     * The sum of the heights of all the tiles in the DOM.
     */
    _physicalSize: 0,

    /**
     * The average `offsetHeight` of the tiles observed till now.
     */
    _physicalAverage: 0,

    /**
     * The number of tiles which `offsetHeight` > 0 observed until now.
     */
    _physicalAverageCount: 0,

    /**
     * The Y position of the item rendered in the `_physicalStart`
     * tile relative to the scrolling list.
     */
    _physicalTop: 0,

    /**
     * The number of items in the list.
     */
    _virtualCount: 0,

    /**
     * The estimated scroll height based on `_physicalAverage`
     */
    _estScrollHeight: 0,

    /**
     * The scroll height of the dom node
     */
    _scrollHeight: 0,

    /**
     * The height of the list. This is referred as the viewport in the context of list.
     */
    _viewportHeight: 0,

    /**
     * The width of the list. This is referred as the viewport in the context of list.
     */
    _viewportWidth: 0,

    /**
     * An array of DOM nodes that are currently in the tree
     * @type {?Array<!TemplatizerNode>}
     */
    _physicalItems: null,

    /**
     * An array of heights for each item in `_physicalItems`
     * @type {?Array<number>}
     */
    _physicalSizes: null,

    /**
     * A cached value for the first visible index.
     * See `firstVisibleIndex`
     * @type {?number}
     */
    _firstVisibleIndexVal: null,

    /**
     * A Polymer collection for the items.
     * @type {?Polymer.Collection}
     */
    _collection: null,

    /**
     * A cached value for the last visible index.
     * See `lastVisibleIndex`
     * @type {?number}
     */
    _lastVisibleIndexVal: null,

    /**
     * The max number of pages to render. One page is equivalent to the height of the list.
     */
    _maxPages: 2,

    /**
     * The currently focused physical item.
     */
    _focusedItem: null,

    /**
     * The virtual index of the focused item.
     */
    _focusedVirtualIndex: -1,

    /**
     * The physical index of the focused item.
     */
    _focusedPhysicalIndex: -1,

    /**
     * The the item that is focused if it is moved offscreen.
     * @private {?TemplatizerNode}
     */
    _offscreenFocusedItem: null,

    /**
     * The item that backfills the `_offscreenFocusedItem` in the physical items
     * list when that item is moved offscreen.
     */
    _focusBackfillItem: null,

    /**
     * The maximum items per row
     */
    _itemsPerRow: 1,

    /**
     * The width of each grid item
     */
    _itemWidth: 0,

    /**
     * The height of the row in grid layout.
     */
    _rowHeight: 0,

    /**
     * The cost of stamping a template in ms.
     */
    _templateCost: 0,

    /**
     * Needed to pass event.model property to declarative event handlers -
     * see polymer/polymer#4339.
     */
    _parentModel: true,

    /**
     * The bottom of the physical content.
     */
    get _physicalBottom() {
      return this._physicalTop + this._physicalSize;
    },

    /**
     * The bottom of the scroll.
     */
    get _scrollBottom() {
      return this._scrollPosition + this._viewportHeight;
    },

    /**
     * The n-th item rendered in the last physical item.
     */
    get _virtualEnd() {
      return this._virtualStart + this._physicalCount - 1;
    },

    /**
     * The height of the physical content that isn't on the screen.
     */
    get _hiddenContentSize() {
      var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
      return size - this._viewportHeight;
    },

    /**
     * The parent node for the _userTemplate.
     */
    get _itemsParent() {
      return Polymer.dom(Polymer.dom(this._userTemplate).parentNode);
    },

    /**
     * The maximum scroll top value.
     */
    get _maxScrollTop() {
      return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
    },

    /**
     * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
     */
    get _maxVirtualStart() {
      var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
      return Math.max(0, virtualCount - this._physicalCount);
    },

    set _virtualStart(val) {
      val = this._clamp(val, 0, this._maxVirtualStart);
      if (this.grid) {
        val = val - val % this._itemsPerRow;
      }
      this._virtualStartVal = val;
    },

    get _virtualStart() {
      return this._virtualStartVal || 0;
    },

    /**
     * The k-th tile that is at the top of the scrolling list.
     */
    set _physicalStart(val) {
      val = val % this._physicalCount;
      if (val < 0) {
        val = this._physicalCount + val;
      }
      if (this.grid) {
        val = val - val % this._itemsPerRow;
      }
      this._physicalStartVal = val;
    },

    get _physicalStart() {
      return this._physicalStartVal || 0;
    },

    /**
     * The k-th tile that is at the bottom of the scrolling list.
     */
    get _physicalEnd() {
      return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
    },

    set _physicalCount(val) {
      this._physicalCountVal = val;
    },

    get _physicalCount() {
      return this._physicalCountVal || 0;
    },

    /**
     * An optimal physical size such that we will have enough physical items
     * to fill up the viewport and recycle when the user scrolls.
     *
     * This default value assumes that we will at least have the equivalent
     * to a viewport of physical items above and below the user's viewport.
     */
    get _optPhysicalSize() {
      return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
    },

    /**
     * True if the current list is visible.
     */
    get _isVisible() {
      return Boolean(this.offsetWidth || this.offsetHeight);
    },

    /**
     * Gets the index of the first visible item in the viewport.
     *
     * @type {number}
     */
    get firstVisibleIndex() {
      var idx = this._firstVisibleIndexVal;
      if (idx == null) {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        idx = this._iterateItems(function (pidx, vidx) {
          physicalOffset += this._getPhysicalSizeIncrement(pidx);

          if (physicalOffset > this._scrollPosition) {
            return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
          }
          // Handle a partially rendered final row in grid mode
          if (this.grid && this._virtualCount - 1 === vidx) {
            return vidx - vidx % this._itemsPerRow;
          }
        }) || 0;
        this._firstVisibleIndexVal = idx;
      }
      return idx;
    },

    /**
     * Gets the index of the last visible item in the viewport.
     *
     * @type {number}
     */
    get lastVisibleIndex() {
      var idx = this._lastVisibleIndexVal;
      if (idx == null) {
        if (this.grid) {
          idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
        } else {
          var physicalOffset = this._physicalTop + this._scrollOffset;
          this._iterateItems(function (pidx, vidx) {
            if (physicalOffset < this._scrollBottom) {
              idx = vidx;
            }
            physicalOffset += this._getPhysicalSizeIncrement(pidx);
          });
        }
        this._lastVisibleIndexVal = idx;
      }
      return idx;
    },

    get _defaultScrollTarget() {
      return this;
    },

    get _virtualRowCount() {
      return Math.ceil(this._virtualCount / this._itemsPerRow);
    },

    get _estRowsInView() {
      return Math.ceil(this._viewportHeight / this._rowHeight);
    },

    get _physicalRows() {
      return Math.ceil(this._physicalCount / this._itemsPerRow);
    },

    get _scrollOffset() {
      return this._scrollerPaddingTop + this.scrollOffset;
    },

    ready: function ready() {
      this.addEventListener('focus', this._didFocus.bind(this), true);
    },

    attached: function attached() {
      this._debounce('_render', this._render, ANIMATION_FRAME);
      // `iron-resize` is fired when the list is attached if the event is added
      // before attached causing unnecessary work.
      this.listen(this, 'iron-resize', '_resizeHandler');
      this.listen(this, 'keydown', '_keydownHandler');
    },

    detached: function detached() {
      this.unlisten(this, 'iron-resize', '_resizeHandler');
      this.unlisten(this, 'keydown', '_keydownHandler');
    },

    /**
     * Set the overflow property if this element has its own scrolling region
     */
    _setOverflow: function _setOverflow(scrollTarget) {
      this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
      this.style.overflowY = scrollTarget === this ? 'auto' : '';
      // Clear cache.
      this._lastVisibleIndexVal = null;
      this._firstVisibleIndexVal = null;
      this._debounce('_render', this._render, ANIMATION_FRAME);
    },

    /**
     * Invoke this method if you dynamically update the viewport's
     * size or CSS padding.
     *
     * @method updateViewportBoundaries
     */
    updateViewportBoundaries: function updateViewportBoundaries() {
      var styles = window.getComputedStyle(this);
      this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
      this._isRTL = Boolean(styles.direction === 'rtl');
      this._viewportWidth = this.$.items.offsetWidth;
      this._viewportHeight = this._scrollTargetHeight;
      this.grid && this._updateGridMetrics();
    },

    /**
     * Recycles the physical items when needed.
     */
    _scrollHandler: function _scrollHandler() {
      var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
      var delta = scrollTop - this._scrollPosition;
      var isScrollingDown = delta >= 0;
      // Track the current scroll position.
      this._scrollPosition = scrollTop;
      // Clear indexes for first and last visible indexes.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      // Random access.
      if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
        delta = delta - this._scrollOffset;
        var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;
        this._virtualStart = this._virtualStart + idxAdjustment;
        this._physicalStart = this._physicalStart + idxAdjustment;
        // Estimate new physical offset.
        this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
        this._update();
      } else if (this._physicalCount > 0) {
        var reusables = this._getReusables(isScrollingDown);
        if (isScrollingDown) {
          this._physicalTop = reusables.physicalTop;
          this._virtualStart = this._virtualStart + reusables.indexes.length;
          this._physicalStart = this._physicalStart + reusables.indexes.length;
        } else {
          this._virtualStart = this._virtualStart - reusables.indexes.length;
          this._physicalStart = this._physicalStart - reusables.indexes.length;
        }
        this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);
        this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), MICRO_TASK);
      }
    },

    /**
     * Returns an object that contains the indexes of the physical items
     * that might be reused and the physicalTop.
     *
     * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
     */
    _getReusables: function _getReusables(fromTop) {
      var ith, lastIth, offsetContent, physicalItemHeight;
      var idxs = [];
      var protectedOffsetContent = this._hiddenContentSize * this._ratio;
      var virtualStart = this._virtualStart;
      var virtualEnd = this._virtualEnd;
      var physicalCount = this._physicalCount;
      var top = this._physicalTop + this._scrollOffset;
      var bottom = this._physicalBottom + this._scrollOffset;
      var scrollTop = this._scrollTop;
      var scrollBottom = this._scrollBottom;

      if (fromTop) {
        ith = this._physicalStart;
        lastIth = this._physicalEnd;
        offsetContent = scrollTop - top;
      } else {
        ith = this._physicalEnd;
        lastIth = this._physicalStart;
        offsetContent = bottom - scrollBottom;
      }
      while (true) {
        physicalItemHeight = this._getPhysicalSizeIncrement(ith);
        offsetContent = offsetContent - physicalItemHeight;
        if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
          break;
        }
        if (fromTop) {
          // Check that index is within the valid range.
          if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
            break;
          }
          // Check that the index is not visible.
          if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
            break;
          }
          idxs.push(ith);
          top = top + physicalItemHeight;
          ith = (ith + 1) % physicalCount;
        } else {
          // Check that index is within the valid range.
          if (virtualStart - idxs.length <= 0) {
            break;
          }
          // Check that the index is not visible.
          if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
            break;
          }
          idxs.push(ith);
          top = top - physicalItemHeight;
          ith = ith === 0 ? physicalCount - 1 : ith - 1;
        }
      }
      return { indexes: idxs, physicalTop: top - this._scrollOffset };
    },

    /**
     * Update the list of items, starting from the `_virtualStart` item.
     * @param {!Array<number>=} itemSet
     * @param {!Array<number>=} movingUp
     */
    _update: function _update(itemSet, movingUp) {
      if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
        return;
      }
      this._manageFocus();
      this._assignModels(itemSet);
      this._updateMetrics(itemSet);
      // Adjust offset after measuring.
      if (movingUp) {
        while (movingUp.length) {
          var idx = movingUp.pop();
          this._physicalTop -= this._getPhysicalSizeIncrement(idx);
        }
      }
      this._positionItems();
      this._updateScrollerSize();
    },

    /**
     * Creates a pool of DOM elements and attaches them to the local dom.
     *
     * @param {number} size Size of the pool
     */
    _createPool: function _createPool(size) {
      this._ensureTemplatized();
      var i, inst;
      var physicalItems = new Array(size);
      for (i = 0; i < size; i++) {
        inst = this.stamp(null);
        // TODO(blasten):
        // First element child is item; Safari doesn't support children[0]
        // on a doc fragment. Test this to see if it still matters.
        physicalItems[i] = inst.root.querySelector('*');
        this._itemsParent.appendChild(inst.root);
      }
      return physicalItems;
    },

    _isClientFull: function _isClientFull() {
      return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
    },

    /**
     * Increases the pool size.
     */
    _increasePoolIfNeeded: function _increasePoolIfNeeded(count) {
      var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);
      nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
      if (this.grid) {
        var correction = nextPhysicalCount % this._itemsPerRow;
        if (correction && nextPhysicalCount - correction <= this._physicalCount) {
          nextPhysicalCount += this._itemsPerRow;
        }
        nextPhysicalCount -= correction;
      }
      var delta = nextPhysicalCount - this._physicalCount;
      var nextIncrease = Math.round(this._physicalCount * 0.5);

      if (delta < 0) {
        return;
      }
      if (delta > 0) {
        var ts = window.performance.now();
        // Concat arrays in place.
        [].push.apply(this._physicalItems, this._createPool(delta));
        [].push.apply(this._physicalSizes, new Array(delta));
        this._physicalCount = this._physicalCount + delta;
        // Update the physical start if it needs to preserve the model of the focused item.
        // In this situation, the focused item is currently rendered and its model would
        // have changed after increasing the pool if the physical start remained unchanged.
        if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
          this._physicalStart = this._physicalStart + delta;
        }
        this._update();
        this._templateCost = (window.performance.now() - ts) / delta;
        nextIncrease = Math.round(this._physicalCount * 0.5);
      }
      // The upper bounds is not fixed when dealing with a grid that doesn't
      // fill it's last row with the exact number of items per row.
      if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {
        // Do nothing.
      } else if (!this._isClientFull()) {
        this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), MICRO_TASK);
      } else if (this._physicalSize < this._optPhysicalSize) {
        // Yield and increase the pool during idle time until the physical size is optimal.
        this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), IDLE_TIME);
      }
    },

    /**
     * Renders the a new list.
     */
    _render: function _render() {
      if (!this.isAttached || !this._isVisible) {
        return;
      }
      if (this._physicalCount !== 0) {
        var reusables = this._getReusables(true);
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
        this._update(reusables.indexes);
        this._update();
        this._increasePoolIfNeeded(0);
      } else if (this._virtualCount > 0) {
        // Initial render
        this.updateViewportBoundaries();
        this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
      }
    },

    /**
     * Templetizes the user template.
     */
    _ensureTemplatized: function _ensureTemplatized() {
      if (this.ctor) {
        return;
      }
      this._userTemplate = this.queryEffectiveChildren('template');
      if (!this._userTemplate) {
        console.warn('iron-list requires a template to be provided in light-dom');
      }
      var instanceProps = {};
      instanceProps.__key__ = true;
      instanceProps[this.as] = true;
      instanceProps[this.indexAs] = true;
      instanceProps[this.selectedAs] = true;
      instanceProps.tabIndex = true;
      this._instanceProps = instanceProps;
      this.templatize(this._userTemplate, this.mutableData);
    },

    _gridChanged: function _gridChanged(newGrid, oldGrid) {
      if (typeof oldGrid === 'undefined') return;
      this.notifyResize();
      Polymer.flush ? Polymer.flush() : Polymer.dom.flush();
      newGrid && this._updateGridMetrics();
    },

    /**
     * Called when the items have changed. That is, ressignments
     * to `items`, splices or updates to a single item.
     */
    _itemsChanged: function _itemsChanged(change) {
      if (change.path === 'items') {
        this._virtualStart = 0;
        this._physicalTop = 0;
        this._virtualCount = this.items ? this.items.length : 0;
        this._collection = this.items && Polymer.Collection ? Polymer.Collection.get(this.items) : null;
        this._physicalIndexForKey = {};
        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
        this._physicalCount = this._physicalCount || 0;
        this._physicalItems = this._physicalItems || [];
        this._physicalSizes = this._physicalSizes || [];
        this._physicalStart = 0;
        if (this._scrollTop > this._scrollOffset) {
          this._resetScrollPosition(0);
        }
        this._removeFocusedItem();
        this._debounce('_render', this._render, ANIMATION_FRAME);
      } else if (change.path === 'items.splices') {
        this._adjustVirtualIndex(change.value.indexSplices);
        this._virtualCount = this.items ? this.items.length : 0;
        // Render only if the affected index is rendered.
        var affectedIndexRendered = change.value.indexSplices.some(function (splice) {
          return this._isIndexRendered(splice.index);
        }, this);
        if (!this._isClientFull() || affectedIndexRendered) {
          this._debounce('_render', this._render, ANIMATION_FRAME);
        }
      } else if (change.path !== 'items.length') {
        this._forwardItemPath(change.path, change.value);
      }
    },

    _forwardItemPath: function _forwardItemPath(path, value) {
      path = path.slice(6); // 'items.'.length == 6
      var dot = path.indexOf('.') + 1;
      if (dot === 0) {
        dot = path.length;
      }
      var idx = IS_V2 ? parseInt(path.substring(0, dot), 10)
      // Extract `#` from `path`.
      : parseInt(path.substring(1, dot), 10);
      var offscreenItem = this._offscreenFocusedItem;
      var isIndexRendered = this._isIndexRendered(idx);
      var inst;
      var pidx;

      if (isIndexRendered) {
        pidx = this._getPhysicalIndex(idx);
        inst = this.modelForElement(this._physicalItems[pidx]);
      } else if (offscreenItem) {
        inst = this.modelForElement(offscreenItem);
      }
      if (!inst || inst[this.indexAs] !== idx) {
        return;
      }
      path = path.substring(dot);
      path = this.as + (path ? '.' + path : '');
      IS_V2 ? inst._setPendingPropertyOrPath(path, value, false, true) : inst.notifyPath(path, value, true);
      inst._flushProperties && inst._flushProperties(true);
      // TODO(blasten): V1 doesn't do this and it's a bug
      if (isIndexRendered) {
        this._updateMetrics([pidx]);
        this._positionItems();
        this._updateScrollerSize();
      }
    },

    /**
     * @param {!Array<!PolymerSplice>} splices
     */
    _adjustVirtualIndex: function _adjustVirtualIndex(splices) {
      splices.forEach(function (splice) {
        // deselect removed items
        splice.removed.forEach(this._removeItem, this);
        // We only need to care about changes happening above the current position
        if (splice.index < this._virtualStart) {
          var delta = Math.max(splice.addedCount - splice.removed.length, splice.index - this._virtualStart);
          this._virtualStart = this._virtualStart + delta;
          if (this._focusedVirtualIndex >= 0) {
            this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
          }
        }
      }, this);
    },

    _removeItem: function _removeItem(item) {
      this.$.selector.deselect(item);
      // remove the current focused item
      if (this._focusedItem && this.modelForElement(this._focusedItem)[this.as] === item) {
        this._removeFocusedItem();
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
      }
    },

    /**
     * Executes a provided function per every physical index in `itemSet`
     * `itemSet` default value is equivalent to the entire set of physical indexes.
     *
     * @param {!function(number, number)} fn
     * @param {!Array<number>=} itemSet
     */
    _iterateItems: function _iterateItems(fn, itemSet) {
      var pidx, vidx, rtn, i;

      if (arguments.length === 2 && itemSet) {
        for (i = 0; i < itemSet.length; i++) {
          pidx = itemSet[i];
          vidx = this._computeVidx(pidx);
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
      } else {
        pidx = this._physicalStart;
        vidx = this._virtualStart;
        for (; pidx < this._physicalCount; pidx++, vidx++) {
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
        for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
          if ((rtn = fn.call(this, pidx, vidx)) != null) {
            return rtn;
          }
        }
      }
    },

    /**
     * Returns the virtual index for a given physical index
     *
     * @param {number} pidx Physical index
     * @return {number}
     */
    _computeVidx: function _computeVidx(pidx) {
      if (pidx >= this._physicalStart) {
        return this._virtualStart + (pidx - this._physicalStart);
      }
      return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
    },

    /**
     * Assigns the data models to a given set of items.
     * @param {!Array<number>=} itemSet
     */
    _assignModels: function _assignModels(itemSet) {
      this._iterateItems(function (pidx, vidx) {
        var el = this._physicalItems[pidx];
        var item = this.items && this.items[vidx];
        if (item != null) {
          var inst = this.modelForElement(el);
          inst.__key__ = this._collection ? this._collection.getKey(item) : null;
          this._forwardProperty(inst, this.as, item);
          this._forwardProperty(inst, this.selectedAs, this.$.selector.isSelected(item));
          this._forwardProperty(inst, this.indexAs, vidx);
          this._forwardProperty(inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);
          this._physicalIndexForKey[inst.__key__] = pidx;
          inst._flushProperties && inst._flushProperties(true);
          el.removeAttribute('hidden');
        } else {
          el.setAttribute('hidden', '');
        }
      }, itemSet);
    },

    /**
     * Updates the height for a given set of items.
     *
     * @param {!Array<number>=} itemSet
     */
    _updateMetrics: function _updateMetrics(itemSet) {
      // Make sure we distributed all the physical items
      // so we can measure them.
      Polymer.flush ? Polymer.flush() : Polymer.dom.flush();

      var newPhysicalSize = 0;
      var oldPhysicalSize = 0;
      var prevAvgCount = this._physicalAverageCount;
      var prevPhysicalAvg = this._physicalAverage;

      this._iterateItems(function (pidx, vidx) {
        oldPhysicalSize += this._physicalSizes[pidx] || 0;
        this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
        newPhysicalSize += this._physicalSizes[pidx];
        this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
      }, itemSet);

      if (this.grid) {
        this._updateGridMetrics();
        this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      } else {
        oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
        this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
        this._itemsPerRow = 1;
      }
      // Update the average if it measured something.
      if (this._physicalAverageCount !== prevAvgCount) {
        this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
      }
    },

    _updateGridMetrics: function _updateGridMetrics() {
      this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
      this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
      this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
    },

    /**
     * Updates the position of the physical items.
     */
    _positionItems: function _positionItems() {
      this._adjustScrollPosition();

      var y = this._physicalTop;

      if (this.grid) {
        var totalItemWidth = this._itemsPerRow * this._itemWidth;
        var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

        this._iterateItems(function (pidx, vidx) {
          var modulus = vidx % this._itemsPerRow;
          var x = Math.floor(modulus * this._itemWidth + rowOffset);
          if (this._isRTL) {
            x = x * -1;
          }
          this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);
          if (this._shouldRenderNextRow(vidx)) {
            y += this._rowHeight;
          }
        });
      } else {
        this._iterateItems(function (pidx, vidx) {
          this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
          y += this._physicalSizes[pidx];
        });
      }
    },

    _getPhysicalSizeIncrement: function _getPhysicalSizeIncrement(pidx) {
      if (!this.grid) {
        return this._physicalSizes[pidx];
      }
      if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
        return 0;
      }
      return this._rowHeight;
    },

    /**
     * Returns, based on the current index,
     * whether or not the next index will need
     * to be rendered on a new row.
     *
     * @param {number} vidx Virtual index
     * @return {boolean}
     */
    _shouldRenderNextRow: function _shouldRenderNextRow(vidx) {
      return vidx % this._itemsPerRow === this._itemsPerRow - 1;
    },

    /**
     * Adjusts the scroll position when it was overestimated.
     */
    _adjustScrollPosition: function _adjustScrollPosition() {
      var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0);
      // Note: the delta can be positive or negative.
      if (deltaHeight !== 0) {
        this._physicalTop = this._physicalTop - deltaHeight;
        var scrollTop = this._scrollTop;
        // juking scroll position during interial scrolling on iOS is no bueno
        if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
          this._resetScrollPosition(scrollTop - deltaHeight);
        }
      }
    },

    /**
     * Sets the position of the scroll.
     */
    _resetScrollPosition: function _resetScrollPosition(pos) {
      if (this.scrollTarget && pos >= 0) {
        this._scrollTop = pos;
        this._scrollPosition = this._scrollTop;
      }
    },

    /**
     * Sets the scroll height, that's the height of the content,
     *
     * @param {boolean=} forceUpdate If true, updates the height no matter what.
     */
    _updateScrollerSize: function _updateScrollerSize(forceUpdate) {
      if (this.grid) {
        this._estScrollHeight = this._virtualRowCount * this._rowHeight;
      } else {
        this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
      }
      forceUpdate = forceUpdate || this._scrollHeight === 0;
      forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
      forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight;
      // Amortize height adjustment, so it won't trigger large repaints too often.
      if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
        this.$.items.style.height = this._estScrollHeight + 'px';
        this._scrollHeight = this._estScrollHeight;
      }
    },

    /**
     * Scroll to a specific item in the virtual list regardless
     * of the physical items in the DOM tree.
     *
     * @method scrollToItem
     * @param {(Object)} item The item to be scrolled to
     */
    scrollToItem: function scrollToItem(item) {
      return this.scrollToIndex(this.items.indexOf(item));
    },

    /**
     * Scroll to a specific index in the virtual list regardless
     * of the physical items in the DOM tree.
     *
     * @method scrollToIndex
     * @param {number} idx The index of the item
     */
    scrollToIndex: function scrollToIndex(idx) {
      if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
        return;
      }
      Polymer.flush ? Polymer.flush() : Polymer.dom.flush();
      // Items should have been rendered prior scrolling to an index.
      if (this._physicalCount === 0) {
        return;
      }
      idx = this._clamp(idx, 0, this._virtualCount - 1);
      // Update the virtual start only when needed.
      if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
        this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
      }
      this._manageFocus();
      this._assignModels();
      this._updateMetrics();
      // Estimate new physical offset.
      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

      var currentTopItem = this._physicalStart;
      var currentVirtualItem = this._virtualStart;
      var targetOffsetTop = 0;
      var hiddenContentSize = this._hiddenContentSize;
      // scroll to the item as much as we can.
      while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
        targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
        currentTopItem = (currentTopItem + 1) % this._physicalCount;
        currentVirtualItem++;
      }
      this._updateScrollerSize(true);
      this._positionItems();
      this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);
      this._increasePoolIfNeeded(0);
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
    },

    /**
     * Reset the physical average and the average count.
     */
    _resetAverage: function _resetAverage() {
      this._physicalAverage = 0;
      this._physicalAverageCount = 0;
    },

    /**
     * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
     * when the element is resized.
     */
    _resizeHandler: function _resizeHandler() {
      this._debounce('_render', function () {
        // clear cached visible index.
        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
        // Skip the resize event on touch devices when the address bar slides up.
        var delta = Math.abs(this._viewportHeight - this._scrollTargetHeight);
        this.updateViewportBoundaries();
        if (this._isVisible) {
          // Reinstall the scroll event listener.
          this.toggleScrollListener(true);
          this._resetAverage();
          this._render();
        } else {
          // Uninstall the scroll event listener.
          this.toggleScrollListener(false);
        }
      }, ANIMATION_FRAME);
    },

    /**
     * Selects the given item.
     *
     * @method selectItem
     * @param {Object} item The item instance.
     */
    selectItem: function selectItem(item) {
      return this.selectIndex(this.items.indexOf(item));
    },

    /**
     * Selects the item at the given index in the items array.
     *
     * @method selectIndex
     * @param {number} index The index of the item in the items array.
     */
    selectIndex: function selectIndex(index) {
      if (index < 0 || index >= this._virtualCount) {
        return;
      }
      if (!this.multiSelection && this.selectedItem) {
        this.clearSelection();
      }
      if (this._isIndexRendered(index)) {
        var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
        if (model) {
          model[this.selectedAs] = true;
        }
        this.updateSizeForIndex(index);
      }
      if (this.$.selector.selectIndex) {
        // v2
        this.$.selector.selectIndex(index);
      } else {
        // v1
        this.$.selector.select(this.items[index]);
      }
    },

    /**
     * Deselects the given item.
     *
     * @method deselect
     * @param {Object} item The item instance.
     */
    deselectItem: function deselectItem(item) {
      return this.deselectIndex(this.items.indexOf(item));
    },

    /**
     * Deselects the item at the given index in the items array.
     *
     * @method deselectIndex
     * @param {number} index The index of the item in the items array.
     */
    deselectIndex: function deselectIndex(index) {
      if (index < 0 || index >= this._virtualCount) {
        return;
      }
      if (this._isIndexRendered(index)) {
        var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
        model[this.selectedAs] = false;
        this.updateSizeForIndex(index);
      }
      if (this.$.selector.deselectIndex) {
        // v2
        this.$.selector.deselectIndex(index);
      } else {
        // v1
        this.$.selector.deselect(this.items[index]);
      }
    },

    /**
     * Selects or deselects a given item depending on whether the item
     * has already been selected.
     *
     * @method toggleSelectionForItem
     * @param {Object} item The item object.
     */
    toggleSelectionForItem: function toggleSelectionForItem(item) {
      return this.toggleSelectionForIndex(this.items.indexOf(item));
    },

    /**
     * Selects or deselects the item at the given index in the items array
     * depending on whether the item has already been selected.
     *
     * @method toggleSelectionForIndex
     * @param {Object} index The index of the item in the items array.
     */
    toggleSelectionForIndex: function toggleSelectionForIndex(index) {
      var isSelected = this.$.selector.isIndexSelected ? this.$.selector.isIndexSelected(index) : this.$.selector.isSelected(this.items[index]);
      isSelected ? this.deselectIndex(index) : this.selectIndex(index);
    },

    /**
     * Clears the current selection in the list.
     *
     * @method clearSelection
     */
    clearSelection: function clearSelection() {
      this._iterateItems(function (pidx, vidx) {
        this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
      });
      this.$.selector.clearSelection();
    },

    /**
     * Add an event listener to `tap` if `selectionEnabled` is true,
     * it will remove the listener otherwise.
     */
    _selectionEnabledChanged: function _selectionEnabledChanged(selectionEnabled) {
      var handler = selectionEnabled ? this.listen : this.unlisten;
      handler.call(this, this, 'tap', '_selectionHandler');
    },

    /**
     * Select an item from an event object.
     */
    _selectionHandler: function _selectionHandler(e) {
      var model = this.modelForElement(e.target);
      if (!model) {
        return;
      }
      var modelTabIndex, activeElTabIndex;
      var target = Polymer.dom(e).path[0];
      var itemsHost = this._itemsParent.node.domHost;
      var activeEl = Polymer.dom(itemsHost ? itemsHost.root : document).activeElement;
      var physicalItem = this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];
      // Safari does not focus certain form controls via mouse
      // https://bugs.webkit.org/show_bug.cgi?id=118043
      if (target.localName === 'input' || target.localName === 'button' || target.localName === 'select') {
        return;
      }
      // Set a temporary tabindex
      modelTabIndex = model.tabIndex;
      model.tabIndex = SECRET_TABINDEX;
      activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
      model.tabIndex = modelTabIndex;
      // Only select the item if the tap wasn't on a focusable child
      // or the element bound to `tabIndex`
      if (activeEl && physicalItem !== activeEl && physicalItem.contains(activeEl) && activeElTabIndex !== SECRET_TABINDEX) {
        return;
      }
      this.toggleSelectionForItem(model[this.as]);
    },

    _multiSelectionChanged: function _multiSelectionChanged(multiSelection) {
      this.clearSelection();
      this.$.selector.multi = multiSelection;
    },

    /**
     * Updates the size of a given list item.
     *
     * @method updateSizeForItem
     * @param {Object} item The item instance.
     */
    updateSizeForItem: function updateSizeForItem(item) {
      return this.updateSizeForIndex(this.items.indexOf(item));
    },

    /**
    * Updates the size of the item at the given index in the items array.
    *
    * @method updateSizeForIndex
    * @param {number} index The index of the item in the items array.
    */
    updateSizeForIndex: function updateSizeForIndex(index) {
      if (!this._isIndexRendered(index)) {
        return null;
      }
      this._updateMetrics([this._getPhysicalIndex(index)]);
      this._positionItems();
      return null;
    },

    /**
     * Creates a temporary backfill item in the rendered pool of physical items
     * to replace the main focused item. The focused item has tabIndex = 0
     * and might be currently focused by the user.
     *
     * This dynamic replacement helps to preserve the focus state.
     */
    _manageFocus: function _manageFocus() {
      var fidx = this._focusedVirtualIndex;

      if (fidx >= 0 && fidx < this._virtualCount) {
        // if it's a valid index, check if that index is rendered
        // in a physical item.
        if (this._isIndexRendered(fidx)) {
          this._restoreFocusedItem();
        } else {
          this._createFocusBackfillItem();
        }
      } else if (this._virtualCount > 0 && this._physicalCount > 0) {
        // otherwise, assign the initial focused index.
        this._focusedPhysicalIndex = this._physicalStart;
        this._focusedVirtualIndex = this._virtualStart;
        this._focusedItem = this._physicalItems[this._physicalStart];
      }
    },

    /**
     * Converts a random index to the index of the item that completes it's row.
     * Allows for better order and fill computation when grid == true.
     */
    _convertIndexToCompleteRow: function _convertIndexToCompleteRow(idx) {
      // when grid == false _itemPerRow can be unset.
      this._itemsPerRow = this._itemsPerRow || 1;
      return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
    },

    _isIndexRendered: function _isIndexRendered(idx) {
      return idx >= this._virtualStart && idx <= this._virtualEnd;
    },

    _isIndexVisible: function _isIndexVisible(idx) {
      return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
    },

    _getPhysicalIndex: function _getPhysicalIndex(idx) {
      return (this._physicalStart + (idx - this._virtualStart)) % this._physicalCount;
    },

    focusItem: function focusItem(idx) {
      this._focusPhysicalItem(idx);
    },

    _focusPhysicalItem: function _focusPhysicalItem(idx) {
      if (idx < 0 || idx >= this._virtualCount) {
        return;
      }
      this._restoreFocusedItem();
      // scroll to index to make sure it's rendered
      if (!this._isIndexRendered(idx)) {
        this.scrollToIndex(idx);
      }
      var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];
      var model = this.modelForElement(physicalItem);
      var focusable;
      // set a secret tab index
      model.tabIndex = SECRET_TABINDEX;
      // check if focusable element is the physical item
      if (physicalItem.tabIndex === SECRET_TABINDEX) {
        focusable = physicalItem;
      }
      // search for the element which tabindex is bound to the secret tab index
      if (!focusable) {
        focusable = Polymer.dom(physicalItem).querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
      }
      // restore the tab index
      model.tabIndex = 0;
      // focus the focusable element
      this._focusedVirtualIndex = idx;
      focusable && focusable.focus();
    },

    _removeFocusedItem: function _removeFocusedItem() {
      if (this._offscreenFocusedItem) {
        this._itemsParent.removeChild(this._offscreenFocusedItem);
      }
      this._offscreenFocusedItem = null;
      this._focusBackfillItem = null;
      this._focusedItem = null;
      this._focusedVirtualIndex = -1;
      this._focusedPhysicalIndex = -1;
    },

    _createFocusBackfillItem: function _createFocusBackfillItem() {
      var fpidx = this._focusedPhysicalIndex;

      if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
        return;
      }
      if (!this._focusBackfillItem) {
        // Create a physical item.
        var inst = this.stamp(null);
        this._focusBackfillItem = inst.root.querySelector('*');
        this._itemsParent.appendChild(inst.root);
      }
      // Set the offcreen focused physical item.
      this._offscreenFocusedItem = this._physicalItems[fpidx];
      this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
      this._physicalItems[fpidx] = this._focusBackfillItem;
      this._focusedPhysicalIndex = fpidx;
      // Hide the focused physical.
      this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
    },

    _restoreFocusedItem: function _restoreFocusedItem() {
      if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
        return;
      }
      // Assign models to the focused index.
      this._assignModels();
      // Get the new physical index for the focused index.
      var fpidx = this._focusedPhysicalIndex;

      var onScreenItem = this._physicalItems[fpidx];
      if (!onScreenItem) {
        return;
      }
      var onScreenInstance = this.modelForElement(onScreenItem);
      var offScreenInstance = this.modelForElement(this._offscreenFocusedItem);
      // Restores the physical item only when it has the same model
      // as the offscreen one. Use key for comparison since users can set
      // a new item via set('items.idx').
      if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
        // Flip the focus backfill.
        this._focusBackfillItem = onScreenItem;
        onScreenInstance.tabIndex = -1;
        // Restore the focused physical item.
        this._physicalItems[fpidx] = this._offscreenFocusedItem;
        // Hide the physical item that backfills.
        this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
      } else {
        this._removeFocusedItem();
        this._focusBackfillItem = null;
      }
      this._offscreenFocusedItem = null;
    },

    _didFocus: function _didFocus(e) {
      var targetModel = this.modelForElement(e.target);
      var focusedModel = this.modelForElement(this._focusedItem);
      var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
      var fidx = this._focusedVirtualIndex;
      if (!targetModel) {
        return;
      }
      if (focusedModel === targetModel) {
        // If the user focused the same item, then bring it into view if it's not visible.
        if (!this._isIndexVisible(fidx)) {
          this.scrollToIndex(fidx);
        }
      } else {
        this._restoreFocusedItem();
        // Restore tabIndex for the currently focused item.
        if (focusedModel) {
          focusedModel.tabIndex = -1;
        }
        // Set the tabIndex for the next focused item.
        targetModel.tabIndex = 0;
        fidx = targetModel[this.indexAs];
        this._focusedVirtualIndex = fidx;
        this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
        this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];
        if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
          this._update();
        }
      }
    },

    _keydownHandler: function _keydownHandler(e) {
      switch (e.keyCode) {
        case /* ARROW_DOWN */40:
          e.preventDefault();
          this._focusPhysicalItem(this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));
          break;
        case /* ARROW_RIGHT */39:
          if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
          break;
        case /* ARROW_UP */38:
          this._focusPhysicalItem(this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));
          break;
        case /* ARROW_LEFT */37:
          if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
          break;
        case /* ENTER */13:
          this._focusPhysicalItem(this._focusedVirtualIndex);
          this._selectionHandler(e);
          break;
      }
    },

    _clamp: function _clamp(v, min, max) {
      return Math.min(max, Math.max(min, v));
    },

    _debounce: function _debounce(name, cb, asyncModule) {
      if (IS_V2) {
        this._debouncers = this._debouncers || {};
        this._debouncers[name] = Polymer.Debouncer.debounce(this._debouncers[name], asyncModule, cb.bind(this));
        Polymer.enqueueDebouncer(this._debouncers[name]);
      } else {
        Polymer.dom.addDebouncer(this.debounce(name, cb));
      }
    },

    _forwardProperty: function _forwardProperty(inst, name, value) {
      if (IS_V2) {
        inst._setPendingProperty(name, value);
      } else {
        inst[name] = value;
      }
    },

    /* Templatizer bindings for v2 */
    _forwardHostPropV2: function _forwardHostPropV2(prop, value) {
      (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
        if (item) {
          this.modelForElement(item).forwardHostProp(prop, value);
        }
      }, this);
    },

    _notifyInstancePropV2: function _notifyInstancePropV2(inst, prop, value) {
      if (Polymer.Path.matches(this.as, prop)) {
        var idx = inst[this.indexAs];
        if (prop == this.as) {
          this.items[idx] = value;
        }
        this.notifyPath(Polymer.Path.translate(this.as, 'items.' + idx, prop), value);
      }
    },

    /* Templatizer bindings for v1 */
    _getStampedChildren: function _getStampedChildren() {
      return this._physicalItems;
    },

    _forwardInstancePath: function _forwardInstancePath(inst, path, value) {
      if (path.indexOf(this.as + '.') === 0) {
        this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
      }
    },

    _forwardParentPath: function _forwardParentPath(path, value) {
      (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
        if (item) {
          this.modelForElement(item).notifyPath(path, value, true);
        }
      }, this);
    },

    _forwardParentProp: function _forwardParentProp(prop, value) {
      (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
        if (item) {
          this.modelForElement(item)[prop] = value;
        }
      }, this);
    }

  });
})();

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

'use strict';

Polymer({
  is: 'iron-request',

  hostAttributes: {
    hidden: true
  },

  properties: {

    /**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */
    xhr: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function value() {
        return new XMLHttpRequest();
      }
    },

    /**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */
    response: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function value() {
        return null;
      }
    },

    /**
     * A reference to the status code, if the `xhr` has completely resolved.
     */
    status: {
      type: Number,
      notify: true,
      readOnly: true,
      value: 0
    },

    /**
     * A reference to the status text, if the `xhr` has completely resolved.
     */
    statusText: {
      type: String,
      notify: true,
      readOnly: true,
      value: ''
    },

    /**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an 
     * object with two keys: `request`, the original request, and `error`, the 
     * error object.
     *
     * @type {Promise}
     */
    completes: {
      type: Object,
      readOnly: true,
      notify: true,
      value: function value() {
        return new Promise(function (resolve, reject) {
          this.resolveCompletes = resolve;
          this.rejectCompletes = reject;
        }.bind(this));
      }
    },

    /**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */
    progress: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function value() {
        return {};
      }
    },

    /**
     * Aborted will be true if an abort of the request is attempted.
     */
    aborted: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    },

    /**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */
    errored: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    },

    /**
     * TimedOut will be true if the XHR threw a timeout event.
     */
    timedOut: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    }
  },

  /**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */
  get succeeded() {
    if (this.errored || this.aborted || this.timedOut) {
      return false;
    }
    var status = this.xhr.status || 0;

    // Note: if we are using the file:// protocol, the status code will be 0
    // for all outcomes (successful or otherwise).
    return status === 0 || status >= 200 && status < 300;
  },

  /**
   * Sends an HTTP request to the server and returns a promise (see the `completes`
   * property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body: (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (Number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send synchronous requests,
   *         set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request. Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with promise rejections.
   * @return {Promise}
   */
  send: function send(options) {
    var xhr = this.xhr;

    if (xhr.readyState > 0) {
      return null;
    }

    xhr.addEventListener('progress', function (progress) {
      this._setProgress({
        lengthComputable: progress.lengthComputable,
        loaded: progress.loaded,
        total: progress.total
      });
    }.bind(this));

    xhr.addEventListener('error', function (error) {
      this._setErrored(true);
      this._updateStatus();
      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this));

    xhr.addEventListener('timeout', function (error) {
      this._setTimedOut(true);
      this._updateStatus();
      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this));

    xhr.addEventListener('abort', function () {
      this._setAborted(true);
      this._updateStatus();
      var error = new Error('Request aborted.');
      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this));

    // Called after all of the above.
    xhr.addEventListener('loadend', function () {
      this._updateStatus();
      this._setResponse(this.parseResponse());

      if (!this.succeeded) {
        var error = new Error('The request failed with status code: ' + this.xhr.status);
        var response = options.rejectWithRequest ? {
          error: error,
          request: this
        } : error;
        this.rejectCompletes(response);
        return;
      }

      this.resolveCompletes(this);
    }.bind(this));

    this.url = options.url;
    xhr.open(options.method || 'GET', options.url, options.async !== false);

    var acceptType = {
      'json': 'application/json',
      'text': 'text/plain',
      'html': 'text/html',
      'xml': 'application/xml',
      'arraybuffer': 'application/octet-stream'
    }[options.handleAs];
    var headers = options.headers || Object.create(null);
    var newHeaders = Object.create(null);
    for (var key in headers) {
      newHeaders[key.toLowerCase()] = headers[key];
    }
    headers = newHeaders;

    if (acceptType && !headers['accept']) {
      headers['accept'] = acceptType;
    }
    Object.keys(headers).forEach(function (requestHeader) {
      if (/[A-Z]/.test(requestHeader)) {
        Polymer.Base._error('Headers must be lower case, got', requestHeader);
      }
      xhr.setRequestHeader(requestHeader, headers[requestHeader]);
    }, this);

    if (options.async !== false) {
      if (options.async) {
        xhr.timeout = options.timeout;
      }

      var handleAs = options.handleAs;

      // If a JSON prefix is present, the responseType must be 'text' or the
      // browser won’t be able to parse the response.
      if (!!options.jsonPrefix || !handleAs) {
        handleAs = 'text';
      }

      // In IE, `xhr.responseType` is an empty string when the response
      // returns. Hence, caching it as `xhr._responseType`.
      xhr.responseType = xhr._responseType = handleAs;

      // Cache the JSON prefix, if it exists.
      if (!!options.jsonPrefix) {
        xhr._jsonPrefix = options.jsonPrefix;
      }
    }

    xhr.withCredentials = !!options.withCredentials;

    var body = this._encodeBodyObject(options.body, headers['content-type']);

    xhr.send(
    /** @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
               null|string|undefined} */
    body);

    return this.completes;
  },

  /**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */
  parseResponse: function parseResponse() {
    var xhr = this.xhr;
    var responseType = xhr.responseType || xhr._responseType;
    var preferResponseText = !this.xhr.responseType;
    var prefixLen = xhr._jsonPrefix && xhr._jsonPrefix.length || 0;

    try {
      switch (responseType) {
        case 'json':
          // If the xhr object doesn't have a natural `xhr.responseType`,
          // we can assume that the browser hasn't parsed the response for us,
          // and so parsing is our responsibility. Likewise if response is
          // undefined, as there's no way to encode undefined in JSON.
          if (preferResponseText || xhr.response === undefined) {
            // Try to emulate the JSON section of the response body section of
            // the spec: https://xhr.spec.whatwg.org/#response-body
            // That is to say, we try to parse as JSON, but if anything goes
            // wrong return null.
            try {
              return JSON.parse(xhr.responseText);
            } catch (_) {
              return null;
            }
          }

          return xhr.response;
        case 'xml':
          return xhr.responseXML;
        case 'blob':
        case 'document':
        case 'arraybuffer':
          return xhr.response;
        case 'text':
        default:
          {
            // If `prefixLen` is set, it implies the response should be parsed
            // as JSON once the prefix of length `prefixLen` is stripped from
            // it. Emulate the behavior above where null is returned on failure
            // to parse.
            if (prefixLen) {
              try {
                return JSON.parse(xhr.responseText.substring(prefixLen));
              } catch (_) {
                return null;
              }
            }
            return xhr.responseText;
          }
      }
    } catch (e) {
      this.rejectCompletes(new Error('Could not parse response. ' + e.message));
    }
  },

  /**
   * Aborts the request.
   */
  abort: function abort() {
    this._setAborted(true);
    this.xhr.abort();
  },

  /**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */
  _encodeBodyObject: function _encodeBodyObject(body, contentType) {
    if (typeof body == 'string') {
      return body; // Already encoded.
    }
    var bodyObj = /** @type {Object} */body;
    switch (contentType) {
      case 'application/json':
        return JSON.stringify(bodyObj);
      case 'application/x-www-form-urlencoded':
        return this._wwwFormUrlEncode(bodyObj);
    }
    return body;
  },

  /**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */
  _wwwFormUrlEncode: function _wwwFormUrlEncode(object) {
    if (!object) {
      return '';
    }
    var pieces = [];
    Object.keys(object).forEach(function (key) {
      // TODO(rictic): handle array values here, in a consistent way with
      //   iron-ajax params.
      pieces.push(this._wwwFormUrlEncodePiece(key) + '=' + this._wwwFormUrlEncodePiece(object[key]));
    }, this);
    return pieces.join('&');
  },

  /**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */
  _wwwFormUrlEncodePiece: function _wwwFormUrlEncodePiece(str) {
    // Spec says to normalize newlines to \r\n and replace %20 spaces with +.
    // jQuery does this as well, so this is likely to be widely compatible.
    if (str === null || str === undefined || !str.toString) {
      return '';
    }

    return encodeURIComponent(str.toString().replace(/\r?\n/g, '\r\n')).replace(/%20/g, '+');
  },

  /**
   * Updates the status code and status text.
   */
  _updateStatus: function _updateStatus() {
    this._setStatus(this.xhr.status);
    this._setStatusText(this.xhr.statusText === undefined ? '' : this.xhr.statusText);
  }
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(96);

__webpack_require__(31);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(99);

__webpack_require__(34);

__webpack_require__(100);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-autocomplete> <template> <style>:host{display:block;box-sizing:border-box;position:relative;--paper-input-container-focus-color:var(--primary-color);--paper-icon-button:{height:24px;width:24px;padding:2px};--paper-input-container-ms-clear:{display:none};}.input-wrapper{@apply --layout-horizontal;}.input-wrapper paper-input{@apply --layout-flex;}#clear{display:none;line-height:8px}.sr-only{position:absolute;clip:rect(1px,1px,1px,1px)}paper-autocomplete-suggestions{--suggestions-wrapper:{@apply --paper-autocomplete-suggestions-wrapper;};--paper-item-min-height:var(--paper-autocomplete-suggestions-item-min-height, 36px)}</style> <div class=input-wrapper role=combobox aria-haspopup=true aria-owns=suggestionsWrapper aria-expanded$=[[_isSuggestionsOpened]]> <label for=autocompleteInput class=sr-only>[[label]]</label> <input type=hidden name$=[[name]] value$=[[value]]> <paper-input id=autocompleteInput label=[[label]] no-label-float=[[noLabelFloat]] disabled={{disabled}} auto-validate$=[[autoValidate]] error-message$=[[errorMessage]] required$=[[required]] value={{text}} allowed-pattern=[[allowedPattern]] pattern=[[pattern]] always-float-label=[[alwaysFloatLabel]] char-counter$=[[charCounter]] maxlength$=[[maxlength]] placeholder=[[placeholder]] role=textbox aria-autocomplete=list aria-multiline=false aria-activedescendant$=[[_highlightedSuggestion.elementId]] aria-disabled$=[[disabled]] aria-controls=\"autocompleteStatus suggestionsWrapper\"> <slot name=prefix slot=prefix></slot> <paper-icon-button slot=suffix suffix=\"\" id=clear icon=clear on-click=_clear tabindex=-1></paper-icon-button> <slot name=suffix slot=suffix></slot> </paper-input> <span id=autocompleteStatus role=status class=sr-only>[[_highlightedSuggestion.textValue]]</span> </div> <paper-autocomplete-suggestions for=autocompleteInput id=paperAutocompleteSuggestions min-length=[[minLength]] text-property=[[textProperty]] value-property=[[valueProperty]] selected-option={{_selectedOption}} source=[[source]] remote-source=[[remoteSource]] query-fn=[[queryFn]] event-namespace=[[eventNamespace]] highlighted-suggestion={{_highlightedSuggestion}} is-open={{_isSuggestionsOpened}} highlight-first=[[highlightFirst]]> <slot id=templates name=autocomplete-custom-template></slot> </paper-autocomplete-suggestions> </template> </dom-module>");

(function () {
  // This Polyfill is needed for this version to work with IE11 and Polymer 1.x
  // TODO: find out why this is needed in IE11
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, argument) {
      argument = argument || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(argument, this[i], i, this);
      }
    };
  }

  Polymer({
    is: 'paper-autocomplete',

    properties: {
      /**
       * `autoValidate` Set to true to auto-validate the input value.
       */
      autoValidate: {
        type: Boolean,
        value: false
      },

      /**
       * `errorMessage` The error message to display when the input is invalid.
       */
      errorMessage: {
        type: String
      },

      /**
       * `label` Text to display as the input label
       */
      label: String,

      /**
       * `noLabelFloat` Set to true to disable the floating label.
       */
      noLabelFloat: {
        type: Boolean,
        value: false
      },

      /**
       * `alwaysFloatLabel` Set to true to always float label
       */
      alwaysFloatLabel: {
        type: Boolean,
        value: false
      },

      /**
       * The placeholder text
       */
      placeholder: String,

      /**
       * `required` Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * `source` Array of objects with the options to execute the autocomplete feature
       */
      source: {
        type: Array
      },

      /**
       * Property of local datasource to as the text property
       */
      textProperty: {
        type: String,
        value: 'text'
      },

      /**
       * Property of local datasource to as the value property
       */
      valueProperty: {
        type: String,
        value: 'value'
      },

      /**
       * `value` Selected object from the suggestions
       */
      value: {
        type: Object,
        notify: true
      },

      /**
       * The current/selected text of the input
       */
      text: {
        type: String,
        notify: true,
        value: ''
      },

      /**
       * Disable showing the clear X button
       */
      disableShowClear: {
        type: Boolean,
        value: false
      },

      /**
       * Binds to a remote data source
       */
      remoteSource: {
        type: Boolean,
        value: false
      },

      /**
       * Event type separator
       */
      eventNamespace: {
        type: String,
        value: '-'
      },

      /**
       * Minimum length to trigger suggestions
       */
      minLength: {
        type: Number,
        value: 1
      },

      /**
       * `pattern` Pattern to validate input field
       */
      pattern: String,

      /**
       * allowedPattern` allowedPattern to validate input field
       */
      allowedPattern: String,

      /**
       * Set to `true` to show a character counter.
       */
      charCounter: {
        type: Boolean,
        value: false
      },

      /**
       * The maximum length of the input value.
       */
      maxlength: {
        type: Number
      },

      /**
       * Name to be used by the autocomplete input. This is necessary if wanted to be integrated with iron-form.
       */
      name: String,

      /**
       * Function used to filter available items. This function is actually used by paper-autocomplete-suggestions,
       * it is also exposed here so it is possible to provide a custom queryFn.
       */
      queryFn: {
        type: Function
      },

      /**
       * If `true`, it will always highlight the first result each time new suggestions are presented.
       */
      highlightFirst: {
        type: Boolean,
        value: false
      },

      /*************
      * PRIVATE
      *************/
      // TODO: check if we need _value and _text properties. It seems they can be removed
      _value: {
        value: undefined
      },

      _text: {
        value: undefined
      },

      /**
       * Indicates whether the clear button is visible or not
       */
      _isClearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Indicates whether the suggestion popup is visible or not.
       */
      _isSuggestionsOpened: {
        type: Boolean,
        value: false
      },

      /**
       * Object containing the information of the currently selected option
       */
      _selectedOption: {
        type: Object
      }
    },

    observers: ['_textObserver(text)'],

    // Element Lifecycle
    ready: function ready() {
      this._value = this.value;

      this.addEventListener('autocomplete' + this.eventNamespace + 'selected', this._onAutocompleteSelected.bind(this));
    },

    /**
     * Clears the input text
     */
    _clear: function _clear() {
      var option = {
        text: this.text,
        value: this.value
      };

      this.value = null;
      this._value = null;
      this.text = '';
      this._text = '';

      this._fireEvent(option, 'reset-blur');

      this._hideClearButton();

      // Fix: https://github.com/PolymerElements/paper-input/issues/493
      if (!this.$.autocompleteInput.focused) {
        this.$.autocompleteInput.focus();
      }
    },

    /**
     * Dispatches autocomplete events
     */
    _fireEvent: function _fireEvent(option, evt) {
      var id = this._getId();
      var event = 'autocomplete' + this.eventNamespace + evt;

      this.fire(event, {
        id: id,
        value: option[this.valueProperty] || option.value,
        text: option[this.textProperty] || option.text,
        target: this,
        option: option
      });
    },

    /**
     * On text event handler
     */
    _textObserver: function _textObserver(text) {
      if (text && text.trim()) {
        this._showClearButton();
      } else {
        this._hideClearButton();
      }
    },

    /**
     * On autocomplete selection
     */
    _onAutocompleteSelected: function _onAutocompleteSelected(event) {
      var selection = event.detail;

      this.value = selection.value;
      this.text = selection.text;
    },

    /**
     * Show the clear button (X)
     */
    _showClearButton: function _showClearButton() {
      if (this.disableShowClear) {
        return;
      }

      if (this._isClearButtonVisible) {
        return;
      }

      this.$.clear.style.display = 'inline-block';
      this._isClearButtonVisible = true;
    },

    /**
     * Hide the clear button (X)
     */
    _hideClearButton: function _hideClearButton() {
      if (!this._isClearButtonVisible) {
        return;
      }

      this.$.clear.style.display = 'none';
      this._isClearButtonVisible = false;
    },

    _getId: function _getId() {
      var id = this.getAttribute('id');
      if (!id) id = this.dataset.id;
      return id;
    },

    /****************************
     * PUBLIC
     ****************************/

    /**
     * Gets the current text/value option of the input
     * @returns {Object}
     */
    getOption: function getOption() {
      return {
        text: this.text,
        value: this.value
      };
    },

    /**
     * Sets the current text/value option of the input
     * @param {Object} option
     */
    setOption: function setOption(option) {
      this.text = option[this.textProperty] || option.text;
      this.value = option[this.valueProperty] || option.value;
      this._showClearButton();
    },

    /**
     * Disables the input
     */
    disable: function disable() {
      this.disabled = true;
    },

    /**
     * Enables the input
     */
    enable: function enable() {
      this.disabled = false;
    },

    /**
     * Sets the component's current suggestions
     * @param {Array} arr
     */
    suggestions: function suggestions(arr) {
      this.$.paperAutocompleteSuggestions.suggestions(arr);
    },

    /**
     * Validates the input
     * @returns {Boolean}
     */
    validate: function validate() {
      return this.$.autocompleteInput.validate();
    },

    /**
     * Clears the current input
     */
    clear: function clear() {
      this._value = '';
      this._text = '';
      this._clear();
    },

    /**
     * Resets the current input (DEPRECATED: please use clear)
     */
    reset: function reset() {
      this._clear();
    },

    /**
     * Hides the suggestions popup
     */
    hideSuggestions: function hideSuggestions() {
      this._hideClearButton();
      this.$.paperAutocompleteSuggestions.hideSuggestions();
    },

    /**
     * Allows calling the onSelect function from outside
     * This in time triggers the autocomplete-selected event
     * with all the data required
     */
    onSelectHandler: function onSelectHandler(event) {
      this.$.paperAutocompleteSuggestions._onSelect(event);
    }

    /**
     * Fired when a selection is made
     *
     * @event autocomplete-selected
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input change
     *
     * @event autocomplete-change
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input focus
     *
     * @event autocomplete-focus
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input blur
     *
     * @event autocomplete-blur
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input reset/clear
     *
     * @event autocomplete-reset-blur
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */
  });
})();

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(35);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=icons size=24> <svg><defs> <g id=3d-rotation><path d=\"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z\"></path></g> <g id=accessibility><path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"></path></g> <g id=accessible><circle cx=12 cy=4 r=2></circle><path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"></path></g> <g id=account-balance><path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"></path></g> <g id=account-balance-wallet><path d=\"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=account-box><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"></path></g> <g id=account-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"></path></g> <g id=add><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g> <g id=add-alert><path d=\"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z\"></path></g> <g id=add-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle-outline><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=add-shopping-cart><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"></path></g> <g id=alarm><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g> <g id=alarm-add><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g> <g id=alarm-off><path d=\"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z\"></path></g> <g id=alarm-on><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z\"></path></g> <g id=all-out><path d=\"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z\"></path></g> <g id=android><path d=\"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z\"></path></g> <g id=announcement><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z\"></path></g> <g id=apps><path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\"></path></g> <g id=archive><path d=\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"></path></g> <g id=arrow-back><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g> <g id=arrow-downward><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></g> <g id=arrow-drop-down><path d=\"M7 10l5 5 5-5z\"></path></g> <g id=arrow-drop-down-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z\"></path></g> <g id=arrow-drop-up><path d=\"M7 14l5-5 5 5z\"></path></g> <g id=arrow-forward><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path></g> <g id=arrow-upward><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></g> <g id=aspect-ratio><path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=assessment><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g> <g id=assignment><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></g> <g id=assignment-ind><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z\"></path></g> <g id=assignment-late><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g> <g id=assignment-return><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z\"></path></g> <g id=assignment-returned><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z\"></path></g> <g id=assignment-turned-in><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=attachment><path d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\"></path></g> <g id=autorenew><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"></path></g> <g id=backspace><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></g> <g id=backup><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=block><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z\"></path></g> <g id=book><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=bookmark><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=bookmark-border><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=bug-report><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"></path></g> <g id=build><path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"></path></g> <g id=cached><path d=\"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z\"></path></g> <g id=camera-enhance><path d=\"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z\"></path></g> <g id=cancel><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path></g> <g id=card-giftcard><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=card-membership><path d=\"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z\"></path></g> <g id=card-travel><path d=\"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z\"></path></g> <g id=change-history><path d=\"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z\"></path></g> <g id=check><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path></g> <g id=check-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=check-box-outline-blank><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=check-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=chevron-left><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g> <g id=chevron-right><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g> <g id=chrome-reader-mode><path d=\"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z\"></path></g> <g id=class><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=clear><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=close><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=cloud><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z\"></path></g> <g id=cloud-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z\"></path></g> <g id=cloud-done><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z\"></path></g> <g id=cloud-download><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\"></path></g> <g id=cloud-off><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z\"></path></g> <g id=cloud-queue><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"></path></g> <g id=cloud-upload><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=code><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></g> <g id=compare-arrows><path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"></path></g> <g id=content-copy><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path></g> <g id=content-cut><path d=\"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z\"></path></g> <g id=content-paste><path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path></g> <g id=copyright><path d=\"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=create><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g> <g id=create-new-folder><path d=\"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"></path></g> <g id=credit-card><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=dashboard><path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"></path></g> <g id=date-range><path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path></g> <g id=delete><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-forever><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-sweep><path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"></path></g> <g id=description><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"></path></g> <g id=dns><path d=\"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=done><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g> <g id=done-all><path d=\"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z\"></path></g> <g id=donut-large><path d=\"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z\"></path></g> <g id=donut-small><path d=\"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z\"></path></g> <g id=drafts><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"></path></g> <g id=eject><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"></path></g> <g id=error><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g> <g id=error-outline><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=euro-symbol><path d=\"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z\"></path></g> <g id=event><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g> <g id=event-seat><path d=\"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"></path></g> <g id=exit-to-app><path d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=expand-less><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path></g> <g id=expand-more><path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path></g> <g id=explore><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"></path></g> <g id=extension><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path></g> <g id=face><path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"></path></g> <g id=favorite><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"></path></g> <g id=favorite-border><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"></path></g> <g id=feedback><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g> <g id=file-download><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=file-upload><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g> <g id=filter-list><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path></g> <g id=find-in-page><path d=\"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"></path></g> <g id=find-replace><path d=\"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z\"></path></g> <g id=fingerprint><path d=\"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z\"></path></g> <g id=first-page><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"></path></g> <g id=flag><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g> <g id=flight-land><path d=\"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z\"></path></g> <g id=flight-takeoff><path d=\"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"></path></g> <g id=flip-to-back><path d=\"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z\"></path></g> <g id=flip-to-front><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z\"></path></g> <g id=folder><path d=\"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\"></path></g> <g id=folder-open><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path></g> <g id=folder-shared><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z\"></path></g> <g id=font-download><path d=\"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z\"></path></g> <g id=forward><path d=\"M12 8V4l8 8-8 8v-4H4V8z\"></path></g> <g id=fullscreen><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path></g> <g id=fullscreen-exit><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"></path></g> <g id=g-translate><path d=\"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z\"></path></g> <g id=gavel><path d=\"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z\"></path></g> <g id=gesture><path d=\"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z\"></path></g> <g id=get-app><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=gif><path d=\"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z\"></path></g> <g id=grade><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=group-work><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=help><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g> <g id=help-outline><path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path></g> <g id=highlight-off><path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=history><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=home><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"></path></g> <g id=hourglass-empty><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z\"></path></g> <g id=hourglass-full><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z\"></path></g> <g id=http><path d=\"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z\"></path></g> <g id=https><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=important-devices><path d=\"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"></path></g> <g id=inbox><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"></path></g> <g id=indeterminate-check-box><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"></path></g> <g id=info><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path></g> <g id=info-outline><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path></g> <g id=input><path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path></g> <g id=invert-colors><path d=\"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z\"></path></g> <g id=label><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z\"></path></g> <g id=label-outline><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"></path></g> <g id=language><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z\"></path></g> <g id=last-page><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"></path></g> <g id=launch><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=lightbulb-outline><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></g> <g id=line-style><path d=\"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z\"></path></g> <g id=line-weight><path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"></path></g> <g id=link><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g> <g id=list><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path></g> <g id=lock><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=lock-open><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z\"></path></g> <g id=lock-outline><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z\"></path></g> <g id=low-priority><path d=\"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z\"></path></g> <g id=loyalty><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z\"></path></g> <g id=mail><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread-mailbox><path d=\"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"></path></g> <g id=menu><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g> <g id=more-horiz><path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=more-vert><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=motorcycle><path d=\"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"></path></g> <g id=move-to-inbox><path d=\"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"></path></g> <g id=next-week><path d=\"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z\"></path></g> <g id=note-add><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"></path></g> <g id=offline-pin><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"></path></g> <g id=opacity><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"></path></g> <g id=open-in-browser><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"></path></g> <g id=open-in-new><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=open-with><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path></g> <g id=pageview><path d=\"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"></path></g> <g id=pan-tool><path d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path></g> <g id=payment><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=perm-camera-mic><path d=\"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z\"></path></g> <g id=perm-contact-calendar><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z\"></path></g> <g id=perm-data-setting><path d=\"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=perm-device-information><path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g> <g id=perm-identity><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g> <g id=perm-media><path d=\"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"></path></g> <g id=perm-phone-msg><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z\"></path></g> <g id=perm-scan-wifi><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g> <g id=pets><circle cx=4.5 cy=9.5 r=2.5></circle><circle cx=9 cy=5.5 r=2.5></circle><circle cx=15 cy=5.5 r=2.5></circle><circle cx=19.5 cy=9.5 r=2.5></circle><path d=\"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z\"></path></g> <g id=picture-in-picture><path d=\"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z\"></path></g> <g id=picture-in-picture-alt><path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"></path></g> <g id=play-for-work><path d=\"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z\"></path></g> <g id=polymer><path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"></path></g> <g id=power-settings-new><path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"></path></g> <g id=pregnant-woman><path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"></path></g> <g id=print><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g> <g id=query-builder><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=question-answer><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g> <g id=radio-button-checked><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=radio-button-unchecked><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=receipt><path d=\"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z\"></path></g> <g id=record-voice-over><circle cx=9 cy=9 r=4></circle><path d=\"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z\"></path></g> <g id=redeem><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=redo><path d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z\"></path></g> <g id=refresh><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g> <g id=remove><path d=\"M19 13H5v-2h14v2z\"></path></g> <g id=remove-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g> <g id=remove-circle-outline><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=remove-shopping-cart><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"></path></g> <g id=reorder><path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"></path></g> <g id=reply><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=reply-all><path d=\"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=report><path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z\"></path></g> <g id=report-problem><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=restore><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=restore-page><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"></path></g> <g id=room><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=rounded-corner><path d=\"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z\"></path></g> <g id=rowing><path d=\"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z\"></path></g> <g id=save><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path></g> <g id=schedule><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=search><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path></g> <g id=select-all><path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path></g> <g id=send><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"></path></g> <g id=settings><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path></g> <g id=settings-applications><path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z\"></path></g> <g id=settings-backup-restore><path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z\"></path></g> <g id=settings-bluetooth><path d=\"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z\"></path></g> <g id=settings-brightness><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z\"></path></g> <g id=settings-cell><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z\"></path></g> <g id=settings-ethernet><path d=\"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"></path></g> <g id=settings-input-antenna><path d=\"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z\"></path></g> <g id=settings-input-component><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-composite><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-hdmi><path d=\"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"></path></g> <g id=settings-input-svideo><path d=\"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g> <g id=settings-overscan><path d=\"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=settings-phone><path d=\"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z\"></path></g> <g id=settings-power><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"></path></g> <g id=settings-remote><path d=\"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z\"></path></g> <g id=settings-voice><path d=\"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z\"></path></g> <g id=shop><path d=\"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z\"></path></g> <g id=shop-two><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"></path></g> <g id=shopping-basket><path d=\"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=shopping-cart><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=sort><path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"></path></g> <g id=speaker-notes><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"></path></g> <g id=speaker-notes-off><path d=\"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z\"></path></g> <g id=spellcheck><path d=\"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z\"></path></g> <g id=star><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=star-border><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=star-half><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=stars><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"></path></g> <g id=store><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g> <g id=subdirectory-arrow-left><path d=\"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"></path></g> <g id=subdirectory-arrow-right><path d=\"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"></path></g> <g id=subject><path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"></path></g> <g id=supervisor-account><path d=\"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z\"></path></g> <g id=swap-horiz><path d=\"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"></path></g> <g id=swap-vert><path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path></g> <g id=swap-vertical-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path></g> <g id=system-update-alt><path d=\"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z\"></path></g> <g id=tab><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z\"></path></g> <g id=tab-unselected><path d=\"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g> <g id=text-format><path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"></path></g> <g id=theaters><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g> <g id=thumb-down><path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g> <g id=thumb-up><path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g> <g id=thumbs-up-down><path d=\"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z\"></path></g> <g id=timeline><path d=\"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z\"></path></g> <g id=toc><path d=\"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z\"></path></g> <g id=today><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></g> <g id=toll><path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z\"></path></g> <g id=touch-app><path d=\"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z\"></path></g> <g id=track-changes><path d=\"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z\"></path></g> <g id=translate><path d=\"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z\"></path></g> <g id=trending-down><path d=\"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z\"></path></g> <g id=trending-flat><path d=\"M22 12l-4-4v3H3v2h15v3z\"></path></g> <g id=trending-up><path d=\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z\"></path></g> <g id=turned-in><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=turned-in-not><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=unarchive><path d=\"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z\"></path></g> <g id=undo><path d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\"></path></g> <g id=unfold-less><path d=\"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z\"></path></g> <g id=unfold-more><path d=\"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z\"></path></g> <g id=update><path d=\"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z\"></path></g> <g id=verified-user><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=view-agenda><path d=\"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z\"></path></g> <g id=view-array><path d=\"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z\"></path></g> <g id=view-carousel><path d=\"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z\"></path></g> <g id=view-column><path d=\"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z\"></path></g> <g id=view-day><path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"></path></g> <g id=view-headline><path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"></path></g> <g id=view-list><path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\"></path></g> <g id=view-module><path d=\"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z\"></path></g> <g id=view-quilt><path d=\"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z\"></path></g> <g id=view-stream><path d=\"M4 18h17v-6H4v6zM4 5v6h17V5H4z\"></path></g> <g id=view-week><path d=\"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z\"></path></g> <g id=visibility><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g> <g id=visibility-off><path d=\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\"></path></g> <g id=warning><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=watch-later><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"></path></g> <g id=weekend><path d=\"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z\"></path></g> <g id=work><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"></path></g> <g id=youtube-searched-for><path d=\"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z\"></path></g> <g id=zoom-in><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z\"></path></g> <g id=zoom-out><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(0);

__webpack_require__(99);

__webpack_require__(34);

__webpack_require__(100);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-autocomplete-suggestions> <template> <style>paper-material{display:none;position:absolute;width:100%;z-index:1000;background-color:#fff;max-height:252px;overflow-y:auto;@apply --suggestions-wrapper;}:host ::slotted(paper-item),paper-item{min-height:var(--paper-item-min-height,36px);padding:0 16px;position:relative;line-height:18px;@apply --suggestions-item;}:host ::slotted(paper-item:hover),paper-item:hover{background:#eee;color:#333;cursor:pointer}:host ::slotted(paper-item.active),paper-item.active{background:#eee;color:#333}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){paper-item{height:var(--paper-item-min-height,36px)}}</style> <div> <paper-material elevation=1 id=suggestionsWrapper unselectable=on></paper-material> <template id=defaultTemplate> <paper-item id$=[[_getSuggestionId(index)]] role=option aria-selected=false on-tap=_onSelect> <div>[[_getItemText(item)]]</div> <paper-ripple></paper-ripple> </paper-item> </template> <slot id=templates name=autocomplete-custom-template></slot> </div> </template> </dom-module>");

(function () {

  var DIRECTION = {
    UP: 'up',
    DOWN: 'down'
  };

  var KEY_CODES = {
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    ENTER: 13,
    ESCAPE: 27
  };

  Polymer({
    is: 'paper-autocomplete-suggestions',

    behaviors: [Polymer.Templatizer],

    properties: {
      /**
       * Id of input
       */
      'for': {
        type: String
      },

      /**
       * `true` if the suggestions list is open, `false otherwise`
       */
      isOpen: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * Minimum length to trigger suggestions
       */
      minLength: {
        type: Number,
        value: 1
      },

      /**
       * Max number of suggestions to be displayed without scrolling
       */
      maxViewableItems: {
        type: Number,
        value: 7
      },

      /**
       * Property of local datasource to as the text property
       */
      textProperty: {
        type: String,
        value: 'text'
      },

      /**
       * Property of local datasource to as the value property
       */
      valueProperty: {
        type: String,
        value: 'value'
      },

      /**
       * `source` Array of objects with the options to execute the autocomplete feature
       */
      source: {
        type: Array
      },

      /**
       *  Object containing information about the current selected option. The structure of the object depends on the
       *  structure of each element in the data source.
       */
      selectedOption: {
        type: Object,
        notify: true
      },

      /**
       * Binds to a remote data source
       */
      remoteSource: {
        type: Boolean,
        value: false
      },

      /**
       * Event type separator
       */
      eventNamespace: {
        type: String,
        value: '-'
      },

      /**
       * Current highlighted suggestion. The structure of the object is:
       * ```
       * {
       *    elementId: ID // id of the highlighted DOM element
       *    option: // highlighted option data
       * }
       * ```
       */
      highlightedSuggestion: {
        type: Object,
        value: {},
        notify: true
      },

      /**
       * Function used to filter available items. This function is actually used by paper-autocomplete-suggestions,
       * it is also exposed here so it is possible to provide a custom queryFn.
       */
      queryFn: {
        type: Function
      },

      /**
       * If `true`, it will always highlight the first result each time new suggestions are presented.
       */
      highlightFirst: {
        type: Boolean,
        value: false
      },

      /**
       * `_suggestions` Array with the actual suggestions to display
       */
      _suggestions: {
        type: Array,
        observer: '_onSuggestionsChanged'
      },

      /**
       * Indicates the position in the suggestions popup of the currently highlighted element, being `0` the first one,
       * and `this._suggestions.length - 1` the position of the last one.
       */
      _currentIndex: {
        type: Number,
        value: -1
      },

      /**
       * Indicates the current position of the scroll. Then the `scrollTop` position is calculated multiplying the
       * `_itemHeight` with the current index.
       */
      _scrollIndex: {
        type: Number,
        value: 0
      },

      /**
       * Height of each suggestion element in pixels
       */
      _itemHeight: {
        type: Number,
        value: 36,
        observer: '_itemHeightChanged'
      },

      _value: {
        value: undefined
      },

      _text: {
        value: undefined
      },

      /**
       * This value is used as a base to generate unique individual ids that need to be added to each suggestion for
       * accessibility reasons.
       */
      _idItemSeed: {
        type: String,
        value: 'aria-' + new Date().getTime() + '-' + Math.floor(Math.random() * 1000),
        readOnly: true
      },

      /**
       * Reference to binded functions so we can call removeEventListener on element detached
       */
      _bindedFunctions: {
        type: Object,
        value: function value() {
          return {
            _onKeypress: null,
            _onFocus: null,
            _onBlur: null
          };
        }
      },

      /**
       * Indicates if the the height of each suggestion item has been already calculated.
       * The assumption is that item height is fixed and it will not change.
       */
      _hasItemHighBeenCalculated: {
        type: Boolean,
        value: false
      },

      /**
       * To avoid unnecessary access to the DOM, we keep a reference to the current template being used
       */
      __customTplRef: Object
    },

    // Element Lifecycle

    ready: function ready() {
      this._value = this.value;

      // This is important to be able to access component methods inside the templates used with Templatizer
      this.dataHost = this;

      // Need to capture mousedown to prevent the focus to switch from input field when user clicks in the scrollbar
      // and the autosuggest is a child of an element with tabindex.
      this.$.suggestionsWrapper.addEventListener('mousedown', function (event) {
        event.preventDefault();
      });

      // We need to enforce that dataHost is the suggestions and not the custom polymer element where the template
      // is defined. If we do not do this, it won't be possible to access paperSuggestions from the custom template
      // TODO: find a way to achieve this without modifying Polymer internal properties
      this._suggestionTemplate.__dataHost = this;
      this.templatize(this._suggestionTemplate);
    },

    attached: function attached() {
      this._input = this.parentNode.querySelector('#' + this.for);

      if (this._input === null) {
        throw new Error('Cannot find input field with id: ' + this.for);
      }

      this._bindedFunctions._onKeypress = this._onKeypress.bind(this);
      this._bindedFunctions._onFocus = this._onFocus.bind(this);
      this._bindedFunctions._onBlur = this._onBlur.bind(this);

      this._input.addEventListener('keyup', this._bindedFunctions._onKeypress);
      this._input.addEventListener('focus', this._bindedFunctions._onFocus);
      this._input.addEventListener('blur', this._bindedFunctions._onBlur);
    },

    detached: function detached() {
      this.cancelDebouncer('_onSuggestionChanged');

      this._input.removeEventListener('keyup', this._bindedFunctions._onKeypress);
      this._input.removeEventListener('focus', this._bindedFunctions._onFocus);
      this._input.removeEventListener('blur', this._bindedFunctions._onBlur);

      this._input = null;
      this.__customTplRef = null;
    },

    // Element Behavior

    /**
     * Get the text property from the suggestion
     * @param {Object} suggestion The suggestion item
     * @return {String}
     */
    _getItemText: function _getItemText(suggestion) {
      return suggestion[this.textProperty];
    },

    /**
     * Show the suggestions wrapper
     */
    _showSuggestionsWrapper: function _showSuggestionsWrapper() {
      var suggestionsWrapper = this.$.suggestionsWrapper;

      suggestionsWrapper.style.display = 'block';
      suggestionsWrapper.setAttribute('role', 'listbox');

      this.isOpen = true;
    },

    /**
     * Hide the suggestions wrapper
     */
    _hideSuggestionsWrapper: function _hideSuggestionsWrapper() {
      var suggestionsWrapper = this.$.suggestionsWrapper;

      suggestionsWrapper.style.display = 'none';
      suggestionsWrapper.removeAttribute('role');

      this.isOpen = false;
      this.highlightedSuggestion = {};

      this._clearSuggestions();
    },

    _handleSuggestions: function _handleSuggestions(event) {
      if (!this.remoteSource) this._createSuggestions(event);else this._remoteSuggestions();
    },

    _remoteSuggestions: function _remoteSuggestions() {
      var value = this._input.value;

      var option = {
        text: value,
        value: value
      };

      if (value && value.length >= this.minLength) {
        this._fireEvent(option, 'change');
      } else {
        this._suggestions = [];
      }
    },

    _bindSuggestions: function _bindSuggestions(arr) {
      if (arr.length && arr.length > 0) {
        this._suggestions = arr;
        this._currentIndex = -1;
        this._scrollIndex = 0;
      } else {
        this._suggestions = [];
      }
    },

    _createSuggestions: function _createSuggestions(event) {
      this._currentIndex = -1;
      this._scrollIndex = 0;

      var value = event.target.value;

      if (value != null && value.length >= this.minLength) {
        value = value.toLowerCase();

        // Search for the word in the source properties.
        if (this.source && this.source.length > 0) {
          // Call queryFn. User can override queryFn() to provide custom search functionality
          this._suggestions = this.queryFn(this.source, value);
        }
      } else {
        this._suggestions = [];
      }
    },

    get _suggestionTemplate() {
      if (this.__customTplRef) {
        return this.__customTplRef;
      }
      var customTemplate = this.getEffectiveChildren();
      this.__customTplRef = customTemplate.length > 0 ? customTemplate[0] : this.$.defaultTemplate;

      return this.__customTplRef;
    },

    /**
     * Render suggestions in the suggestionsWrapper container
     * @param {Array} suggestions An array containing the suggestions to be rendered. This value is not optional, so
     *    in case no suggestions need to be rendered, you should either not call this method or provide an empty array.
     */
    _renderSuggestions: function _renderSuggestions(suggestions) {
      var suggestionsContainer = Polymer.dom(this.$.suggestionsWrapper);
      var isPolymer1 = !Polymer.Element;

      this._clearSuggestions();

      [].slice.call(suggestions).forEach(function (result, index) {
        // clone the template and bind with the model
        var clone = this.stamp();
        clone.item = result;
        clone.index = index;

        // Different stamping mode based on Polymer version
        if (isPolymer1) {
          suggestionsContainer.appendChild(clone.root.querySelector('*'));
        } else {
          suggestionsContainer.appendChild(clone.root);
        }
      }.bind(this));
    },

    _clearSuggestions: function _clearSuggestions() {
      var suggestionsContainer = Polymer.dom(this.$.suggestionsWrapper),
          last;
      while (last = suggestionsContainer.lastChild) {
        suggestionsContainer.removeChild(last);
      }
    },

    /**
     * Listener to changes to _suggestions state
     */
    _onSuggestionsChanged: function _onSuggestionsChanged() {
      this.debounce('_onSuggestionChanged', function () {
        this._renderSuggestions(this._suggestions);

        if (this._suggestions.length > 0) {
          this._showSuggestionsWrapper();
        } else {
          this._hideSuggestionsWrapper();
        }

        Polymer.dom.flush();

        this._resetScroll();

        if (!this._hasItemHighBeenCalculated) {
          var firstSuggestionElement = this.$.suggestionsWrapper.querySelector('paper-item');

          if (firstSuggestionElement !== null) {
            // Update maxHeight of suggestions wrapper depending on the height of each item result
            this._itemHeight = firstSuggestionElement.offsetHeight;

            this._hasItemHighBeenCalculated = true;
          }
        }

        if (this.highlightFirst) {
          this._moveHighlighted(DIRECTION.DOWN);
        }
      }, 100);
    },

    _selection: function _selection(index) {
      var selectedOption = this._suggestions[index];

      this._input.value = selectedOption[this.textProperty];
      this.selectedOption = selectedOption;

      this._value = this.value;
      this._text = this.text;
      this._emptyItems();

      this._fireEvent(selectedOption, 'selected');

      this.hideSuggestions();
    },

    /**
     * Get all suggestion elements
     * @return {Array} a list of all suggestion elements
     */
    _getItems: function _getItems() {
      return this.$.suggestionsWrapper.querySelectorAll('paper-item');
    },

    /**
     * Empty the list of current suggestions being displayed
     */
    _emptyItems: function _emptyItems() {
      this._suggestions = [];
    },

    _getId: function _getId() {
      var id = this.getAttribute('id');
      if (!id) id = this.dataset.id;
      return id;
    },

    /**
     * Remove the the active state from all suggestion items
     */
    _removeActive: function _removeActive(items) {
      [].slice.call(items).forEach(function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
    },

    /**
     * Key press event handler
     */
    _onKeypress: function _onKeypress(event) {
      var keyCode = event.which || event.keyCode;

      switch (keyCode) {
        case KEY_CODES.DOWN_ARROW:
          this._moveHighlighted(DIRECTION.DOWN);
          break;
        case KEY_CODES.UP_ARROW:
          this._moveHighlighted(DIRECTION.UP);
          break;
        case KEY_CODES.ENTER:
          this._keyenter();
          break;
        case KEY_CODES.ESCAPE:
          this._hideSuggestionsWrapper();
          break;
        // For left and right arrow, component should do nothing
        case KEY_CODES.LEFT_ARROW:
        // fall through
        case KEY_CODES.RIGHT_ARROW:
          break;
        default:
          this._handleSuggestions(event);
      }
    },

    /**
     * Event handler for the key ENTER press event
     */
    _keyenter: function _keyenter() {
      if (this.$.suggestionsWrapper.style.display === 'block' && this._currentIndex > -1) {
        var index = this._currentIndex;
        this._selection(index);
      }
    },

    /**
     *  Move the current highlighted suggestion up or down
     *  @param {string} direction Possible values are DIRECTION.UP or DIRECTION.DOWN
     */
    _moveHighlighted: function _moveHighlighted(direction) {
      var items = this._getItems();

      if (items.length === 0) {
        return;
      }

      var numberOfItems = items.length - 1;

      var isFirstItem = this._currentIndex === 0;
      var isLastItem = this._currentIndex === numberOfItems;
      var isNoItemHighlighted = this._currentIndex === -1;

      if ((isNoItemHighlighted || isFirstItem) && direction === DIRECTION.UP) {
        this._currentIndex = numberOfItems;
      } else if (isLastItem && direction === DIRECTION.DOWN) {
        this._currentIndex = 0;
      } else {
        var modifier = direction === DIRECTION.DOWN ? 1 : -1;
        this._currentIndex = this._currentIndex + modifier;
      }

      var highlightedOption = this._suggestions[this._currentIndex];
      var highlightedItem = items[this._currentIndex];

      this._removeActive(items);

      highlightedItem.classList.add('active');
      highlightedItem.setAttribute('aria-selected', 'true');

      this._setHighlightedSuggestion(highlightedOption, highlightedItem.id);

      this._scroll(direction);
    },

    /**
     * Move scroll (if needed) to display the active element in the suggestions list.
     * @param {string} direction Direction to scroll. Possible values are `DIRECTION.UP` and `DIRECTION.DOWN`.
     */
    _scroll: function _scroll(direction) {
      var newScrollValue, isSelectedOutOfView;

      var viewIndex = this._currentIndex - this._scrollIndex;

      // This happens only when user switch from last item to first one
      var isFirstItemAndOutOfView = this._currentIndex === 0 && viewIndex < 0;

      // This happens only when user switch from first or no item to last one
      var isLastItemAndOutOfView = this._currentIndex === this._suggestions.length - 1 && viewIndex >= this.maxViewableItems;

      if (isFirstItemAndOutOfView && direction === DIRECTION.DOWN) {
        newScrollValue = 0;
        isSelectedOutOfView = true;
      } else if (isLastItemAndOutOfView && direction === DIRECTION.UP) {
        newScrollValue = this._suggestions.length - this.maxViewableItems;
        isSelectedOutOfView = true;
      } else if (direction === DIRECTION.UP) {
        newScrollValue = this._scrollIndex - 1;
        isSelectedOutOfView = viewIndex < 0;
      } else {
        newScrollValue = this._scrollIndex + 1;
        isSelectedOutOfView = viewIndex >= this.maxViewableItems;
      }

      // Only when the current active element is out of view, we need to move the position of the scroll
      if (isSelectedOutOfView) {
        this._scrollIndex = newScrollValue;
        this.$.suggestionsWrapper.scrollTop = this._scrollIndex * this._itemHeight;
      }
    },

    /**
     * Reset scroll back to zero
     */
    _resetScroll: function _resetScroll() {
      this.$.suggestionsWrapper.scrollTop = 0;
    },

    /**
     * Set the current highlighted suggestion
     * @param {Object} option Data of the highlighted option
     * @param {string} elementId id of the highlighted dom element.
     */
    _setHighlightedSuggestion: function _setHighlightedSuggestion(option, elementId) {
      this.highlightedSuggestion = {
        option: option,
        elementId: elementId,
        textValue: option[this.textProperty],
        value: option[this.valueProperty]
      };
    },

    _fireEvent: function _fireEvent(option, evt) {
      var id = this._getId();
      var event = 'autocomplete' + this.eventNamespace + evt;

      this.fire(event, {
        id: id,
        value: option[this.valueProperty] || option.value,
        text: option[this.textProperty] || option.text,
        target: this,
        option: option
      });
    },

    _onSelect: function _onSelect(event) {
      var index = this.modelForElement(event.currentTarget).index;
      this._selection(index);
    },

    /**
     * Event handler for the onBlur event
     */
    _onBlur: function _onBlur() {
      var option = {
        text: this.text,
        value: this.value
      };

      this._fireEvent(option, 'blur');

      this.hideSuggestions();
    },

    /**
     * Event handler for the onFocus event
     */
    _onFocus: function _onFocus(event) {
      var option = {
        text: this.text,
        value: this.value
      };

      this._handleSuggestions(event);

      this._fireEvent(option, 'focus');
    },

    /**
     * Generate a suggestion id for a certain index
     * @param {number} index Position of the element in the suggestions list
     * @returns {string} a unique id based on the _idItemSeed and the position of that element in the suggestions popup
     * @private
     */
    _getSuggestionId: function _getSuggestionId(index) {
      return this._idItemSeed + '-' + index;
    },

    /**
     * When item height is changed, the maxHeight of the suggestionWrapper need to be updated
     */
    _itemHeightChanged: function _itemHeightChanged() {
      this.$.suggestionsWrapper.style.maxHeight = this._itemHeight * this.maxViewableItems + 'px';
    },

    /****************************
     * PUBLIC
     ****************************/

    /**
     * Sets the component's current suggestions
     * @param {Array} arr
     */
    suggestions: function suggestions(arr) {
      this._bindSuggestions(arr);
    },

    /**
     * Hides the suggestions popup
     */
    hideSuggestions: function hideSuggestions() {
      setTimeout(function () {
        this._hideSuggestionsWrapper();
      }.bind(this), 0);
    },

    /**
     * Query function is called on each keystroke to query the data source and returns the suggestions that matches
     * with the filtering logic included.
     * @param {Array} datasource An array containing all items before filtering
     * @param {string} query Current value in the input field
     * @returns {Array} an array containing only those items in the data source that matches the filtering logic.
     */
    queryFn: function queryFn(datasource, query) {
      var queryResult = [];

      datasource.forEach(function (item) {
        var objText, objValue;

        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
          objText = item[this.textProperty];
          objValue = item[this.valueProperty];
        } else {
          objText = item.toString();
          objValue = objText;
        }

        if (objText.toLowerCase().indexOf(query) === 0) {
          // NOTE: the structure of the result object matches with the current template. For custom templates, you
          // might need to return more data
          queryResult.push({
            text: objText,
            value: objValue
          });
        }
      }.bind(this));

      return queryResult;
    }

    /**
     * Fired when a selection is made
     *
     * @event autocomplete-selected
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input change
     *
     * @event autocomplete-change
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input focus
     *
     * @event autocomplete-focus
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input blur
     *
     * @event autocomplete-blur
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */

    /**
     * Fired on input reset/clear
     *
     * @event autocomplete-reset-blur
     * @param {String} id
     * @param {String} text
     * @param {Element} target
     * @param {Object} option
     */
  });
})();

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(37);

__webpack_require__(33);

/** @polymerBehavior Polymer.PaperItemBehavior */
Polymer.PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};

/** @polymerBehavior */
Polymer.PaperItemBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperItemBehaviorImpl];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(38);

__webpack_require__(30);

__webpack_require__(93);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-item-shared-styles> <template> <style>.paper-item,:host{display:block;position:relative;min-height:var(--paper-item-min-height,48px);padding:0 16px}.paper-item{@apply --paper-font-subhead;border:none;outline:0;background:#fff;width:100%;text-align:left}.paper-item[hidden],:host([hidden]){display:none!important}.paper-item.iron-selected,:host(.iron-selected){font-weight:var(--paper-item-selected-weight,bold);@apply --paper-item-selected;}.paper-item[disabled],:host([disabled]){color:var(--paper-item-disabled-color,var(--disabled-text-color));@apply --paper-item-disabled;}.paper-item:focus,:host(:focus){position:relative;outline:0;@apply --paper-item-focused;}.paper-item:focus:before,:host(:focus):before{@apply --layout-fit;background:currentColor;content:'';opacity:var(--dark-divider-opacity);pointer-events:none;@apply --paper-item-focused-before;}</style> </template> </dom-module>");

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(94);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-material-shared-styles> <template> <style>:host{display:block;position:relative}:host([elevation=\"1\"]){@apply --shadow-elevation-2dp;}:host([elevation=\"2\"]){@apply --shadow-elevation-4dp;}:host([elevation=\"3\"]){@apply --shadow-elevation-6dp;}:host([elevation=\"4\"]){@apply --shadow-elevation-8dp;}:host([elevation=\"5\"]){@apply --shadow-elevation-16dp;}</style> </template> </dom-module>");

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(35);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=maps size=24> <svg><defs> <g id=add-location><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z\"></path></g> <g id=beenhere><path d=\"M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z\"></path></g> <g id=directions><path d=\"M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z\"></path></g> <g id=directions-bike><path d=\"M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z\"></path></g> <g id=directions-boat><path d=\"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z\"></path></g> <g id=directions-bus><path d=\"M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z\"></path></g> <g id=directions-car><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g> <g id=directions-railway><path d=\"M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z\"></path></g> <g id=directions-run><path d=\"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z\"></path></g> <g id=directions-subway><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g> <g id=directions-transit><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g> <g id=directions-walk><path d=\"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7\"></path></g> <g id=edit-location><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z\"></path></g> <g id=ev-station><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z\"></path></g> <g id=flight><path d=\"M10.18 9\"></path><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g> <g id=hotel><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g> <g id=layers><path d=\"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z\"></path></g> <g id=layers-clear><path d=\"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z\"></path></g> <g id=local-activity><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g> <g id=local-airport><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g> <g id=local-atm><path d=\"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z\"></path></g> <g id=local-bar><path d=\"M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z\"></path></g> <g id=local-cafe><path d=\"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z\"></path></g> <g id=local-car-wash><path d=\"M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z\"></path></g> <g id=local-convenience-store><path d=\"M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z\"></path></g> <g id=local-dining><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g> <g id=local-drink><path d=\"M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z\"></path></g> <g id=local-florist><path d=\"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z\"></path></g> <g id=local-gas-station><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g> <g id=local-grocery-store><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=local-hospital><path d=\"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z\"></path></g> <g id=local-hotel><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g> <g id=local-laundry-service><path d=\"M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"></path></g> <g id=local-library><path d=\"M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z\"></path></g> <g id=local-mall><path d=\"M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z\"></path></g> <g id=local-movies><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g> <g id=local-offer><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z\"></path></g> <g id=local-parking><path d=\"M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z\"></path></g> <g id=local-pharmacy><path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z\"></path></g> <g id=local-phone><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g> <g id=local-pizza><path d=\"M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=local-play><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g> <g id=local-post-office><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=local-printshop><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g> <g id=local-see><circle cx=12 cy=12 r=3.2></circle><path d=\"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g> <g id=local-shipping><path d=\"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=local-taxi><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g> <g id=map><path d=\"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z\"></path></g> <g id=my-location><path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g> <g id=navigation><path d=\"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z\"></path></g> <g id=near-me><path d=\"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"></path></g> <g id=person-pin><path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z\"></path></g> <g id=person-pin-circle><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z\"></path></g> <g id=pin-drop><path d=\"M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z\"></path></g> <g id=place><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=rate-review><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z\"></path></g> <g id=restaurant><path d=\"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z\"></path></g> <g id=restaurant-menu><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g> <g id=satellite><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z\"></path></g> <g id=store-mall-directory><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g> <g id=streetview><path d=\"M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z\"></path><circle cx=18 cy=6 r=5></circle><path d=\"M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z\"></path></g> <g id=subway><circle cx=15.5 cy=16 r=1></circle><circle cx=8.5 cy=16 r=1></circle><path d=\"M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z\"></path></g> <g id=terrain><path d=\"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"></path></g> <g id=traffic><path d=\"M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z\"></path></g> <g id=train><path d=\"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=tram><path d=\"M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z\"></path></g> <g id=transfer-within-a-station><path d=\"M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75\"></path></g> <g id=zoom-out-map><path d=\"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ })
]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGlzaGVycy1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9mb250LXJvYm90by9yb2JvdG8uaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWxpc3QvaXJvbi1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1yZXF1ZXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24taWNvbnMvbWFwcy1pY29ucy5odG1sIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWdpc3Rlckh0bWxUZW1wbGF0ZSIsInRvQm9keSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQTBFSTs7SUFBcUI7Ozs7Ozs7Ozs7O3dCQXNCWixLQUFFO0FBQ1AsYUFBVSxNQUNaO0FBQ087Ozs0QkFBVSxXQUFFO0FBQ2QsVUFBVSxVQUFRLFNBQUc7QUFFZixxREFFVDtBQUhPLE9BQVA7QUFLTyxlQUVUO0FBSFMsT0FBUDtBQUlZOzs7bUNBQU0sT0FBRTtBQUNoQixXQUFJLElBQU8sUUFBSTtBQUNmLFdBQUksSUFBTyxRQUFPLE1BQU8sT0FBUyxTQUFLLEtBQzdDO0FBQ0Y7Ozt3QkF0Q2tCO0FBQUUsYUFBMEI7QUFFdEI7Ozt3QkFBRTtBQUN0QjtBQUNXLG1CQUFRO0FBQ2I7QUFDRSxnQkFBTztBQUNMLGtCQUVQOztBQUpLO0FBS0Y7QUFDRSxnQkFBUTtBQUNKLG9CQUFzQjtBQUN6QjtBQUNFLG1CQU1iO0FBUGE7QUFISDs7QUFQRDtBQWtCTjs7OztFQXRCK0IsUUFDcEI7O0FBd0NWLE9BQWUsZUFBTyxPQUFlLGVBQUcsSUFBaUIsZ0I7Ozs7Ozs7Ozs7O0FDbEhuRSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLG1CQUFBQSxDQUFRLEdBQVI7O0FBRUEsSUFBTUMsdUJBQXVCLG1CQUFBRCxDQUFRLENBQVIsQ0FBN0I7O0FBRUFDLHFCQUFxQkMsTUFBckIsQ0FBNEIsdXRFQUE1QixFOzs7Ozs7Ozs7QUNOQSxt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O0FBSmlCO0FBRGM7OztBQVF6QixRQUFtQixvQkFBRSxDQUNuQixRQUFnQixpQkFDaEIsUUFBaUIsa0JBQ2pCLFFBQ1IsdUI7Ozs7Ozs7OztBQ2pDSCxtQkFBQUYsQ0FBUSxDQUFSOztBQUVBLG1CQUFBQSxDQUFRLEVBQVI7O0FBRUEsbUJBQUFBLENBQVEsRUFBUjs7QUFFQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJFLFFBQXJCLENBQThCLG81QkFBOUIsRTs7Ozs7Ozs7O0FDVkEsbUJBQUFILENBQVEsRUFBUjs7QUFFQSxJQUFNQyx1QkFBdUIsbUJBQUFELENBQVEsQ0FBUixDQUE3Qjs7QUFFQUMscUJBQXFCRSxRQUFyQixDQUE4QixrYUFBOUIsRTs7Ozs7Ozs7O0FDSkEsbUJBQUFILENBQVEsRUFBUjs7QUFFQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJDLE1BQXJCLENBQTRCLHE2akJBQTVCLEUiLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbi0tPlxyXG5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9tYXBzLWljb25zLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJzaGFyZWQtc3R5bGVzLmh0bWxcIj5cclxuXHJcbjxkb20tbW9kdWxlIGlkPVwicHVibGlzaGVycy1saXN0XCI+XHJcbiAgPHRlbXBsYXRlPlxyXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJzaGFyZWQtc3R5bGVzXCI+XHJcbiAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlyb24tbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPGN1c3RvbS1zdHlsZT5cclxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XHJcbiAgICAgICAgLnJhdGUtaGVhZGVyIHtcclxuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmF0ZS1uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTYwMCk7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uLnJhdGUtaWNvbiB7XHJcbiAgICAgICAgICAtLWlyb24taWNvbi1maWxsLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIC0taXJvbi1pY29uLXN0cm9rZS1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS02MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvY3VzdG9tLXN0eWxlPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS13cmFwcGVyXCI+XHJcbiAgICAgIDxwYXBlci1pbnB1dCBpZD1cInNlYXJjaFwiIGxhYmVsPVwiU3VjaGVcIiBzdHlsZT1cIm1heC13aWR0aDo1MDBweFwiIHZhbHVlPVwie3tmaWx0ZXJzdHJ9fVwiPlxyXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cInNlYXJjaFwiPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgIDwvcGFwZXItaW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpcm9uLWFqYXggdXJsPVwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIiBvbi1yZXNwb25zZT1cImhhbmRsZVJlc3BvbnNlXCIgY29udGVudC10eXBlPVwiYXBwbGljYXRpb24vanNvblwiIGhhbmRsZS1hcz1cImpzb25cIlxyXG4gICAgICBtZXRob2Q9XCJQT1NUXCIgYm9keT1bW2JvZHldXSBhdXRvPjwvaXJvbi1hamF4PlxyXG4gICAgPGlyb24tbGlzdCBpdGVtcz1cIltbZGF0YV1dXCIgYXM9XCJpdGVtXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICA8cGFwZXItY2FyZCBjbGFzcz1cInJhdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGUtaGVhZGVyXCI+W1tpbmMoaW5kZXgpXV0uIFtbaXRlbS5wdWJsaXNoZXJuYW1lXV08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGUtbmFtZVwiPltbaXRlbS5jb3VudF1dIFNwaWVsZTwvZGl2PlxyXG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gcmlnaHQgaWNvbj1cImZhdm9yaXRlXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJzdGFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvcGFwZXItY2FyZD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvaXJvbi1saXN0PlxyXG4gIDwvdGVtcGxhdGU+XHJcblxyXG4gIDxzY3JpcHQ+XHJcbiAgICBjbGFzcyBQdWJsaXNoZXJzTGlzdCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XHJcbiAgICAgIHN0YXRpYyBnZXQgaXMoKSB7IHJldHVybiAncHVibGlzaGVycy1saXN0JzsgfVxyXG5cclxuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBmaWx0ZXJzdHI6IFN0cmluZyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIG5vdGlmeTogdHJ1ZVxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgY29tcHV0ZWQ6ICdnZXRCb2R5KGZpbHRlcnN0ciknLFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5OiAncXVlcnkge3B1Ymxpc2hlcnMgeyBwdWJsaXNoZXJpZCBwdWJsaXNoZXJuYW1lIGNvdW50IH19J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaW5jKGlkeCkge1xyXG4gICAgICAgIHJldHVybiBpZHgrMVxyXG4gICAgICB9XHJcbiAgICAgIGdldEJvZHkoZmlsdGVyU3RyKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlclN0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBxdWVyeTogYHF1ZXJ5IHtwdWJsaXNoZXJzKHB1Ymxpc2hlcm5hbWU6XCIke2ZpbHRlclN0cn1cIikgeyBwdWJsaXNoZXJpZCBwdWJsaXNoZXJuYW1lIGNvdW50IH19YFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBxdWVyeTogXCJwdWJsaXNoZXJzIHsgcHVibGlzaGVyaWQgcHVibGlzaGVybmFtZSBjb3VudCB9XCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlUmVzcG9uc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldCgnZGF0YScsIFtdKVxyXG4gICAgICAgIHRoaXMuc2V0KCdkYXRhJywgZXZlbnQuZGV0YWlsLnJlc3BvbnNlLmRhdGEucHVibGlzaGVycylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoUHVibGlzaGVyc0xpc3QuaXMsIFB1Ymxpc2hlcnNMaXN0KTtcclxuICA8L3NjcmlwdD5cclxuPC9kb20tbW9kdWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaXNoZXJzLWxpc3QuaHRtbCIsIlxucmVxdWlyZSgnLi4vcG9seW1lci9wb2x5bWVyLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vZm9udC1yb2JvdG8vcm9ib3RvLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGN1c3RvbS1zdHlsZT4gPHN0eWxlIGlzPWN1c3RvbS1zdHlsZT5odG1sey0tcGFwZXItZm9udC1jb21tb24tYmFzZTp7Zm9udC1mYW1pbHk6Um9ib3RvLE5vdG8sc2Fucy1zZXJpZjstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfTstLXBhcGVyLWZvbnQtY29tbW9uLWNvZGU6e2ZvbnQtZmFtaWx5OidSb2JvdG8gTW9ubycsQ29uc29sYXMsTWVubG8sbW9ub3NwYWNlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWR9Oy0tcGFwZXItZm9udC1jb21tb24tZXhwZW5zaXZlLWtlcm5pbmc6e3RleHQtcmVuZGVyaW5nOm9wdGltaXplTGVnaWJpbGl0eX07LS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA6e3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc307LS1wYXBlci1mb250LWRpc3BsYXk0OntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6MTEycHg7Zm9udC13ZWlnaHQ6MzAwO2xldHRlci1zcGFjaW5nOi0uMDQ0ZW07bGluZS1oZWlnaHQ6MTIwcHh9Oy0tcGFwZXItZm9udC1kaXNwbGF5Mzp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7Zm9udC1zaXplOjU2cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi0uMDI2ZW07bGluZS1oZWlnaHQ6NjBweH07LS1wYXBlci1mb250LWRpc3BsYXkyOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZTo0NXB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzotLjAxOGVtO2xpbmUtaGVpZ2h0OjQ4cHh9Oy0tcGFwZXItZm9udC1kaXNwbGF5MTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtmb250LXNpemU6MzRweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LS4wMWVtO2xpbmUtaGVpZ2h0OjQwcHh9Oy0tcGFwZXItZm9udC1oZWFkbGluZTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LS4wMTJlbTtsaW5lLWhlaWdodDozMnB4fTstLXBhcGVyLWZvbnQtdGl0bGU6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyOHB4fTstLXBhcGVyLWZvbnQtc3ViaGVhZDp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjRweH07LS1wYXBlci1mb250LWJvZHkyOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyNHB4fTstLXBhcGVyLWZvbnQtYm9keTE6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjIwcHh9Oy0tcGFwZXItZm9udC1jYXB0aW9uOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAxMWVtO2xpbmUtaGVpZ2h0OjIwcHh9Oy0tcGFwZXItZm9udC1tZW51OntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjRweH07LS1wYXBlci1mb250LWJ1dHRvbjp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wMThlbTtsaW5lLWhlaWdodDoyNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX07LS1wYXBlci1mb250LWNvZGUyOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1jb2RlO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoyMHB4fTstLXBhcGVyLWZvbnQtY29kZTE6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWNvZGU7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjIwcHh9O308L3N0eWxlPiA8L2N1c3RvbS1zdHlsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWwiLCJcbnJlcXVpcmUoJy4uL3BvbHltZXIvcG9seW1lci5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnRvQm9keShcIjxjdXN0b20tc3R5bGU+IDxzdHlsZSBpcz1jdXN0b20tc3R5bGU+aHRtbHstLXNoYWRvdy10cmFuc2l0aW9uOnt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX07LS1zaGFkb3ctbm9uZTp7Ym94LXNoYWRvdzpub25lfTstLXNoYWRvdy1lbGV2YXRpb24tMmRwOntib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMil9Oy0tc2hhZG93LWVsZXZhdGlvbi0zZHA6e2JveC1zaGFkb3c6MCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTRkcDp7Ym94LXNoYWRvdzowIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTZkcDp7Ym94LXNoYWRvdzowIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuNCl9Oy0tc2hhZG93LWVsZXZhdGlvbi04ZHA6e2JveC1zaGFkb3c6MCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKSwwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTEyZHA6e2JveC1zaGFkb3c6MCAxMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDRweCAyMnB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCA2cHggN3B4IC00cHggcmdiYSgwLDAsMCwuNCl9Oy0tc2hhZG93LWVsZXZhdGlvbi0xNmRwOntib3gtc2hhZG93OjAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpLDAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTI0ZHA6e2JveC1zaGFkb3c6MCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMiksMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC40KX07fTwvc3R5bGU+IDwvY3VzdG9tLXN0eWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sIiwiXG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1zaGFyZWQtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT4uY2FyZHttYXJnaW46MjRweDtwYWRkaW5nOjE2cHg7Y29sb3I6Izc1NzU3NTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpfS5jaXJjbGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNTU1O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2RkZDtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDo2NHB4fWgxe21hcmdpbjoxNnB4IDA7Y29sb3I6IzIxMjEyMTtmb250LXNpemU6MjJweH08L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC1zdHlsZXMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24taW5wdXQvaXJvbi1pbnB1dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWNoYXItY291bnRlci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtY29udGFpbmVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1lcnJvci5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW1RleHQgZmllbGRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGV4dC1maWVsZHMuaHRtbClcblxuYDxwYXBlci1pbnB1dD5gIGlzIGEgc2luZ2xlLWxpbmUgdGV4dCBmaWVsZCB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBtYXkgaW5jbHVkZSBhbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlciBjb3VudGVyLlxuXG4gICAgPHBhcGVyLWlucHV0IGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGlucHV0IVwiIGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuICAgIDxwYXBlci1pbnB1dCBjaGFyLWNvdW50ZXIgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IGNhbiBhbHNvIGluY2x1ZGUgY3VzdG9tIHByZWZpeCBvciBzdWZmaXggZWxlbWVudHMsIHdoaWNoIGFyZSBkaXNwbGF5ZWRcbmJlZm9yZSBvciBhZnRlciB0aGUgdGV4dCBpbnB1dCBpdHNlbGYuIEluIG9yZGVyIGZvciBhbiBlbGVtZW50IHRvIGJlXG5jb25zaWRlcmVkIGFzIGEgcHJlZml4LCBpdCBtdXN0IGhhdmUgdGhlIGBwcmVmaXhgIGF0dHJpYnV0ZSAoYW5kIHNpbWlsYXJseVxuZm9yIGBzdWZmaXhgKS5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInRvdGFsXCI+XG4gICAgICA8ZGl2IHByZWZpeD4kPC9kaXY+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuQSBgcGFwZXItaW5wdXRgIGNhbiB1c2UgdGhlIG5hdGl2ZSBgdHlwZT1zZWFyY2hgIG9yIGB0eXBlPWZpbGVgIGZlYXR1cmVzLlxuSG93ZXZlciwgc2luY2Ugd2UgY2FuJ3QgY29udHJvbCB0aGUgbmF0aXZlIHN0eWxpbmcgb2YgdGhlIGlucHV0IChzZWFyY2ggaWNvbixcbmZpbGUgYnV0dG9uLCBkYXRlIHBsYWNlaG9sZGVyLCBldGMuKSwgaW4gdGhlc2UgY2FzZXMgdGhlIGxhYmVsIHdpbGwgYmVcbmF1dG9tYXRpY2FsbHkgZmxvYXRlZC4gVGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIGNhbiBzdGlsbCBiZSB1c2VkIGZvclxuYWRkaXRpb25hbCBpbmZvcm1hdGlvbmFsIHRleHQuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJzZWFyY2ghXCIgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBjYXRzXCIgYXV0b3NhdmU9XCJ0ZXN0XCIgcmVzdWx0cz1cIjVcIj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yYCBmb3IgbW9yZSBBUEkgZG9jcy5cblxuIyMjIEZvY3VzXG5cblRvIGZvY3VzIGEgcGFwZXItaW5wdXQsIHlvdSBjYW4gY2FsbCB0aGUgbmF0aXZlIGBmb2N1cygpYCBtZXRob2QgYXMgbG9uZyBhcyB0aGVcbnBhcGVyIGlucHV0IGhhcyBhIHRhYiBpbmRleC4gU2ltaWxhcmx5LCBgYmx1cigpYCB3aWxsIGJsdXIgdGhlIGVsZW1lbnQuXG5cbiMjIyBTdHlsaW5nXG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0Q29udGFpbmVyYCBmb3IgYSBsaXN0IG9mIGN1c3RvbSBwcm9wZXJ0aWVzIHVzZWQgdG9cbnN0eWxlIHRoaXMgZWxlbWVudC5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1pbnB1dFxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiB0byBtYWtlIGEgc3RhY2tpbmcgY29udGV4dCAqL1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1zLWNsZWFyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGlkPVwiY29udGFpbmVyXCJcbiAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCJcbiAgICAgICAgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1tfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwoYWx3YXlzRmxvYXRMYWJlbCxwbGFjZWhvbGRlcildXVwiXG4gICAgICAgIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiPlxuXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9yPVwiaW5wdXRcIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8c3BhbiBpZD1cInRlbXBsYXRlLXBsYWNlaG9sZGVyXCI+PC9zcGFuPlxuXG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPjwvc2xvdD5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yTWVzc2FnZV1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBzbG90PVwiYWRkLW9uXCI+W1tlcnJvck1lc3NhZ2VdXTwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2hhckNvdW50ZXJdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHNsb3Q9XCJhZGQtb25cIj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8IS0tIFRoaXMgaXMgYSBmcmVzaCBuZXcgaGVsbCB0byBtYWtlIHRoaXMgZWxlbWVudCBoeWJyaWQuIEJhc2ljYWxseSwgaW4gMi4wXG4gICAgd2UgbG9zdCBpcz0sIHNvIHRoZSBleGFtcGxlIHNhbWUgdGVtcGxhdGUgY2FuJ3QgYmUgdXNlZCB3aXRoIGlyb24taW5wdXQgMS4wIGFuZCAyLjAuXG4gICAgRXhwZWN0IHNvbWUgY29uZGl0aW9uYWwgY29kZSAoZXNwZWNpYWxseSBpbiB0aGUgdGVzdHMpLlxuICAgLS0+XG4gIDx0ZW1wbGF0ZSBpZD1cInYwXCI+XG4gICAgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIGlkPVwiaW5wdXRcIiBzbG90PVwiaW5wdXRcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnkkPVwiW1tfYXJpYUxhYmVsbGVkQnldXVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnkkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIlxuICAgICAgICBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICB0aXRsZSQ9XCJbW3RpdGxlXV1cIlxuICAgICAgICBiaW5kLXZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgaW52YWxpZD1cInt7aW52YWxpZH19XCJcbiAgICAgICAgcHJldmVudC1pbnZhbGlkLWlucHV0PVwiW1twcmV2ZW50SW52YWxpZElucHV0XV1cIlxuICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIlxuICAgICAgICB2YWxpZGF0b3I9XCJbW3ZhbGlkYXRvcl1dXCJcbiAgICAgICAgdHlwZSQ9XCJbW3R5cGVdXVwiXG4gICAgICAgIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIlxuICAgICAgICByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIlxuICAgICAgICBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiXG4gICAgICAgIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIlxuICAgICAgICBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiXG4gICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgbWluJD1cIltbbWluXV1cIlxuICAgICAgICBtYXgkPVwiW1ttYXhdXVwiXG4gICAgICAgIHN0ZXAkPVwiW1tzdGVwXV1cIlxuICAgICAgICBuYW1lJD1cIltbbmFtZV1dXCJcbiAgICAgICAgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCJcbiAgICAgICAgbGlzdCQ9XCJbW2xpc3RdXVwiXG4gICAgICAgIHNpemUkPVwiW1tzaXplXV1cIlxuICAgICAgICBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIlxuICAgICAgICBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIlxuICAgICAgICB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIlxuICAgICAgICBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIlxuICAgICAgICByZXN1bHRzJD1cIltbcmVzdWx0c11dXCJcbiAgICAgICAgYWNjZXB0JD1cIltbYWNjZXB0XV1cIlxuICAgICAgICBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgaWQ9XCJ2MVwiPlxuICAgIDwhLS0gTmVlZCB0byBiaW5kIG1heGxlbmd0aCBzbyB0aGF0IHRoZSBwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgd29ya3MgY29ycmVjdGx5IC0tPlxuICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIiBpZD1cImlucHV0XCIgc2xvdD1cImlucHV0XCJcbiAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIlxuICAgICAgICBpbnZhbGlkPVwie3tpbnZhbGlkfX1cIlxuICAgICAgICB2YWxpZGF0b3I9XCJbW3ZhbGlkYXRvcl1dXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJuYXRpdmVJbnB1dFwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiXG4gICAgICAgIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgIHRpdGxlJD1cIltbdGl0bGVdXVwiXG4gICAgICAgIHR5cGUkPVwiW1t0eXBlXV1cIlxuICAgICAgICBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCJcbiAgICAgICAgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIlxuICAgICAgICBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCJcbiAgICAgICAgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIlxuICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgIG1pbiQ9XCJbW21pbl1dXCJcbiAgICAgICAgbWF4JD1cIltbbWF4XV1cIlxuICAgICAgICBzdGVwJD1cIltbc3RlcF1dXCJcbiAgICAgICAgbmFtZSQ9XCJbW25hbWVdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiXG4gICAgICAgIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiXG4gICAgICAgIGxpc3QkPVwiW1tsaXN0XV1cIlxuICAgICAgICBzaXplJD1cIltbc2l6ZV1dXCJcbiAgICAgICAgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCJcbiAgICAgICAgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCJcbiAgICAgICAgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCJcbiAgICAgICAgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCJcbiAgICAgICAgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiXG4gICAgICAgIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCJcbiAgICAgICAgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCI+XG4gICAgPC9pcm9uLWlucHV0PlxuICA8L3RlbXBsYXRlPlxuXG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQnLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcixcbiAgICAgIFBvbHltZXIuSXJvbkZvcm1FbGVtZW50QmVoYXZpb3JcbiAgICBdLFxuXG4gICAgYmVmb3JlUmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gV2UgbmVlZCB0byB0ZWxsIHdoaWNoIGtpbmQgb2Ygb2YgdGVtcGxhdGUgdG8gc3RhbXAgYmFzZWQgb25cbiAgICAgIC8vIHdoYXQga2luZCBvZiBgaXJvbi1pbnB1dGAgd2UgZ290LCBidXQgYmVjYXVzZSBvZiBwb2x5ZmlsbHMgYW5kXG4gICAgICAvLyBjdXN0b20gZWxlbWVudHMgZGlmZmVyZW5jZXMgYmV0d2VlbiB2MCBhbmQgdjEsIHRoZSBzYWZlc3QgYmV0IGlzXG4gICAgICAvLyB0byBjaGVjayBhIHBhcnRpY3VsYXIgbWV0aG9kIHdlIGtub3cgdGhlIGlyb24taW5wdXQjMi54IGNhbiBoYXZlLlxuICAgICAgLy8gSWYgaXQgZG9lc24ndCBoYXZlIGl0LCB0aGVuIGl0J3MgYW4gaXJvbi1pbnB1dCMxLnguXG4gICAgICB2YXIgaXJvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1pbnB1dCcpO1xuICAgICAgdmFyIHZlcnNpb24gPSB0eXBlb2YgaXJvbklucHV0Ll9pbml0U2xvdHRlZElucHV0ID09ICdmdW5jdGlvbicgPyAndjEnIDogJ3YwJztcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IFBvbHltZXIuRG9tTW9kdWxlLmltcG9ydCgncGFwZXItaW5wdXQnLCAndGVtcGxhdGUnKTtcbiAgICAgIHZhciBpbnB1dFRlbXBsYXRlID0gUG9seW1lci5Eb21Nb2R1bGUuaW1wb3J0KCdwYXBlci1pbnB1dCcsICd0ZW1wbGF0ZSMnICsgdmVyc2lvbik7XG4gICAgICB2YXIgaW5wdXRQbGFjZWhvbGRlciA9IHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlLXBsYWNlaG9sZGVyJyk7XG4gICAgICBpZiAoaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0VGVtcGxhdGUuY29udGVudCwgaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGl0J3MgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgcHJvYmFibHkgaW4gc3VwZXJjbGFzc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmb2N1c2FibGUgZWxlbWVudC4gT3ZlcnJpZGRlbiBmcm9tIFBhcGVySW5wdXRCZWhhdmlvclxuICAgICAqIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgICAqL1xuICAgIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLkVsZW1lbnQgPyB0aGlzLmlucHV0RWxlbWVudC5faW5wdXRFbGVtZW50IDogdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8vIE5vdGU6IFRoaXMgZXZlbnQgaXMgb25seSBhdmFpbGFibGUgaW4gdGhlIDEuMCB2ZXJzaW9uIG9mIHRoaXMgZWxlbWVudC5cbiAgICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAgIC8vIFBhcGVySW5wdXRCZWhhdmlvcjo6YXR0YWNoZWQuXG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICAnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSdcbiAgICB9LFxuXG4gICAgX29uSXJvbklucHV0UmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQuaW5kZXhPZih0aGlzLiQubmF0aXZlSW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICAgIGlmICghIXRoaXMuaW5wdXRFbGVtZW50LmJpbmRWYWx1ZSkge1xuICAgICAgICB0aGlzLiQuY29udGFpbmVyLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLmlucHV0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjxzY3JpcHQ+XG5cbiAgLyoqXG4gICAqIFVzZSBgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGFkZC1vbiBmb3IgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gQVxuICAgKiBhZGQtb24gYXBwZWFycyBiZWxvdyB0aGUgaW5wdXQsIGFuZCBtYXkgZGlzcGxheSBpbmZvcm1hdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kXG4gICAqIHZhbGlkaXR5IHN1Y2ggYXMgYSBjaGFyYWN0ZXIgY291bnRlciBvciBhbiBlcnJvciBtZXNzYWdlLlxuICAgKiBAcG9seW1lckJlaGF2aW9yXG4gICAqL1xuICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yID0ge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5ZG9tL2lzc3Vlcy85NlxuICAgICAgUG9seW1lci5kb20uZmx1c2goKTtcbiAgICAgIHRoaXMuZmlyZSgnYWRkb24tYXR0YWNoZWQnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIGNhbGxlZCBieSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdoZW4gdGhlIGlucHV0IHZhbHVlIG9yIHZhbGlkaXR5IGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgICAqIH19IHN0YXRlIC1cbiAgICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgfVxuXG4gIH07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJpcm9uLXJlcXVlc3QuaHRtbFwiPlxuXG48IS0tXG5UaGUgYGlyb24tYWpheGAgZWxlbWVudCBleHBvc2VzIG5ldHdvcmsgcmVxdWVzdCBmdW5jdGlvbmFsaXR5LlxuXG4gICAgPGlyb24tYWpheFxuICAgICAgICBhdXRvXG4gICAgICAgIHVybD1cImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoXCJcbiAgICAgICAgcGFyYW1zPSd7XCJwYXJ0XCI6XCJzbmlwcGV0XCIsIFwicVwiOlwicG9seW1lclwiLCBcImtleVwiOiBcIllPVVRVQkVfQVBJX0tFWVwiLCBcInR5cGVcIjogXCJ2aWRlb1wifSdcbiAgICAgICAgaGFuZGxlLWFzPVwianNvblwiXG4gICAgICAgIG9uLXJlc3BvbnNlPVwiaGFuZGxlUmVzcG9uc2VcIlxuICAgICAgICBkZWJvdW5jZS1kdXJhdGlvbj1cIjMwMFwiPjwvaXJvbi1hamF4PlxuXG5XaXRoIGBhdXRvYCBzZXQgdG8gYHRydWVgLCB0aGUgZWxlbWVudCBwZXJmb3JtcyBhIHJlcXVlc3Qgd2hlbmV2ZXJcbml0cyBgdXJsYCwgYHBhcmFtc2Agb3IgYGJvZHlgIHByb3BlcnRpZXMgYXJlIGNoYW5nZWQuIEF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXG5yZXF1ZXN0cyB3aWxsIGJlIGRlYm91bmNlZCBpbiB0aGUgY2FzZSB0aGF0IG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGNoYW5nZWRcbnNlcXVlbnRpYWxseS5cblxuTm90ZTogVGhlIGBwYXJhbXNgIGF0dHJpYnV0ZSBtdXN0IGJlIGRvdWJsZSBxdW90ZWQgSlNPTi5cblxuWW91IGNhbiB0cmlnZ2VyIGEgcmVxdWVzdCBleHBsaWNpdGx5IGJ5IGNhbGxpbmcgYGdlbmVyYXRlUmVxdWVzdGAgb24gdGhlXG5lbGVtZW50LlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4tLT5cblxuPHNjcmlwdD5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIFBvbHltZXIoe1xuXG4gICAgaXM6ICdpcm9uLWFqYXgnLFxuXG4gICAgLyoqXG4gICAgICogRmlyZWQgYmVmb3JlIGEgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tYWpheC1wcmVzZW5kXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIGEgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqXG4gICAgICogQGV2ZW50IHJlcXVlc3RcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LXJlcXVlc3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSByZXNwb25zZSBpcyByZWNlaXZlZC5cbiAgICAgKlxuICAgICAqIEBldmVudCByZXNwb25zZVxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtcmVzcG9uc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYW4gZXJyb3IgaXMgcmVjZWl2ZWQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgZXJyb3JcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LWVycm9yXG4gICAgICovXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIFVSTCB0YXJnZXQgb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcXVlcnkgcGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGVcbiAgICAgICAqIHNwZWNpZmllZCBgdXJsYCB3aGVuIGdlbmVyYXRpbmcgYSByZXF1ZXN0LiBJZiB5b3Ugd2lzaCB0byBzZXQgdGhlIGJvZHlcbiAgICAgICAqIGNvbnRlbnQgd2hlbiBtYWtpbmcgYSBQT1NUIHJlcXVlc3QsIHlvdSBzaG91bGQgdXNlIHRoZSBgYm9keWAgcHJvcGVydHlcbiAgICAgICAqIGluc3RlYWQuXG4gICAgICAgKi9cbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBzdWNoIGFzICdHRVQnLCAnUE9TVCcsICdQVVQnLCBvciAnREVMRVRFJy5cbiAgICAgICAqIERlZmF1bHQgaXMgJ0dFVCcuXG4gICAgICAgKi9cbiAgICAgIG1ldGhvZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnR0VUJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIVFRQIHJlcXVlc3QgaGVhZGVycyB0byBzZW5kLlxuICAgICAgICpcbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKlxuICAgICAgICogICAgIDxpcm9uLWFqYXhcbiAgICAgICAqICAgICAgICAgYXV0b1xuICAgICAgICogICAgICAgICB1cmw9XCJodHRwOi8vc29tZXNpdGUuY29tXCJcbiAgICAgICAqICAgICAgICAgaGVhZGVycz0ne1wiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCJ9J1xuICAgICAgICogICAgICAgICBoYW5kbGUtYXM9XCJqc29uXCI+PC9pcm9uLWFqYXg+XG4gICAgICAgKlxuICAgICAgICogTm90ZTogc2V0dGluZyBhIGBDb250ZW50LVR5cGVgIGhlYWRlciBoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlIHZhbHVlXG4gICAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGBjb250ZW50VHlwZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDb250ZW50IHR5cGUgdG8gdXNlIHdoZW4gc2VuZGluZyBkYXRhLiBJZiB0aGUgYGNvbnRlbnRUeXBlYCBwcm9wZXJ0eVxuICAgICAgICogaXMgc2V0IGFuZCBhIGBDb250ZW50LVR5cGVgIGhlYWRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIGBoZWFkZXJzYFxuICAgICAgICogcHJvcGVydHksIHRoZSBgaGVhZGVyc2AgcHJvcGVydHkgdmFsdWUgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gICAgICAgKlxuICAgICAgICogVmFyaWVzIHRoZSBoYW5kbGluZyBvZiB0aGUgYGJvZHlgIHBhcmFtLlxuICAgICAgICovXG4gICAgICBjb250ZW50VHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEJvZHkgY29udGVudCB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QsIHR5cGljYWxseSB1c2VkIHdpdGggXCJQT1NUXCJcbiAgICAgICAqIHJlcXVlc3RzLlxuICAgICAgICpcbiAgICAgICAqIElmIGJvZHkgaXMgYSBzdHJpbmcgaXQgd2lsbCBiZSBzZW50IHVubW9kaWZpZWQuXG4gICAgICAgKlxuICAgICAgICogSWYgQ29udGVudC1UeXBlIGlzIHNldCB0byBhIHZhbHVlIGxpc3RlZCBiZWxvdywgdGhlblxuICAgICAgICogdGhlIGJvZHkgd2lsbCBiZSBlbmNvZGVkIGFjY29yZGluZ2x5LlxuICAgICAgICpcbiAgICAgICAqICAgICogYGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cImBcbiAgICAgICAqICAgICAgKiBib2R5IGlzIGVuY29kZWQgbGlrZSBge1wiZm9vXCI6XCJiYXIgYmF6XCIsXCJ4XCI6MX1gXG4gICAgICAgKiAgICAqIGBjb250ZW50LXR5cGU9XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcImBcbiAgICAgICAqICAgICAgKiBib2R5IGlzIGVuY29kZWQgbGlrZSBgZm9vPWJhcitiYXomeD0xYFxuICAgICAgICpcbiAgICAgICAqIE90aGVyd2lzZSB0aGUgYm9keSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgYnJvd3NlciB1bm1vZGlmaWVkLCBhbmQgaXRcbiAgICAgICAqIHdpbGwgaGFuZGxlIGFueSBlbmNvZGluZyAoZS5nLiBmb3IgRm9ybURhdGEsIEJsb2IsIEFycmF5QnVmZmVyKS5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdClcbiAgICAgICAqL1xuICAgICAgYm9keToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRvZ2dsZSB3aGV0aGVyIFhIUiBpcyBzeW5jaHJvbm91cyBvciBhc3luY2hyb25vdXMuIERvbid0IGNoYW5nZSB0aGlzXG4gICAgICAgKiB0byB0cnVlIHVubGVzcyBZb3UgS25vdyBXaGF0IFlvdSBBcmUgRG9pbmfihKIuXG4gICAgICAgKi9cbiAgICAgIHN5bmM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB3aGF0IGRhdGEgdG8gc3RvcmUgaW4gdGhlIGByZXNwb25zZWAgcHJvcGVydHksIGFuZFxuICAgICAgICogdG8gZGVsaXZlciBhcyBgZXZlbnQuZGV0YWlsLnJlc3BvbnNlYCBpbiBgcmVzcG9uc2VgIGV2ZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBPbmUgb2Y6XG4gICAgICAgKlxuICAgICAgICogICAgYHRleHRgOiB1c2VzIGBYSFIucmVzcG9uc2VUZXh0YC5cbiAgICAgICAqXG4gICAgICAgKiAgICBgeG1sYDogdXNlcyBgWEhSLnJlc3BvbnNlWE1MYC5cbiAgICAgICAqXG4gICAgICAgKiAgICBganNvbmA6IHVzZXMgYFhIUi5yZXNwb25zZVRleHRgIHBhcnNlZCBhcyBKU09OLlxuICAgICAgICpcbiAgICAgICAqICAgIGBhcnJheWJ1ZmZlcmA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKlxuICAgICAgICogICAgYGJsb2JgOiB1c2VzIGBYSFIucmVzcG9uc2VgLlxuICAgICAgICpcbiAgICAgICAqICAgIGBkb2N1bWVudGA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKi9cbiAgICAgIGhhbmRsZUFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdqc29uJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhlIHdpdGhDcmVkZW50aWFscyBmbGFnIG9uIHRoZSByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGUgdGltZW91dCBmbGFnIG9uIHRoZSByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICB0aW1lb3V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgYXV0b21hdGljYWxseSBwZXJmb3JtcyBhbiBBamF4IHJlcXVlc3Qgd2hlbiBlaXRoZXIgYHVybGAgb3JcbiAgICAgICAqIGBwYXJhbXNgIGNoYW5nZXMuXG4gICAgICAgKi9cbiAgICAgIGF1dG86IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIGVycm9yIG1lc3NhZ2VzIHdpbGwgYXV0b21hdGljYWxseSBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgKi9cbiAgICAgIHZlcmJvc2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtb3N0IHJlY2VudCByZXF1ZXN0IG1hZGUgYnkgdGhpcyBpcm9uLWFqYXggZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbGFzdFJlcXVlc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgd2hpbGUgbGFzdFJlcXVlc3QgaXMgaW4gZmxpZ2h0LlxuICAgICAgICovXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogbGFzdFJlcXVlc3QncyByZXNwb25zZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlIHRoYXQgbGFzdFJlc3BvbnNlIGFuZCBsYXN0RXJyb3IgYXJlIHNldCB3aGVuIGxhc3RSZXF1ZXN0IGZpbmlzaGVzLFxuICAgICAgICogc28gaWYgbG9hZGluZyBpcyB0cnVlLCB0aGVuIGxhc3RSZXNwb25zZSBhbmQgbGFzdEVycm9yIHdpbGwgY29ycmVzcG9uZFxuICAgICAgICogdG8gdGhlIHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgcmVxdWVzdC5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgcmVzcG9uc2UgaXMgZGV0ZXJtaW5lZCBieSB0aGUgdmFsdWUgb2YgYGhhbmRsZUFzYCBhdFxuICAgICAgICogdGhlIHRpbWUgdGhhdCB0aGUgcmVxdWVzdCB3YXMgZ2VuZXJhdGVkLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGxhc3RSZXNwb25zZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogbGFzdFJlcXVlc3QncyBlcnJvciwgaWYgYW55LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGxhc3RFcnJvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gQXJyYXkgb2YgYWxsIGluLWZsaWdodCByZXF1ZXN0cyBvcmlnaW5hdGluZyBmcm9tIHRoaXMgaXJvbi1hamF4XG4gICAgICAgKiBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBhY3RpdmVSZXF1ZXN0czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBMZW5ndGggb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZGVib3VuY2UgbXVsdGlwbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgcmVxdWVzdHMuXG4gICAgICAgKi9cbiAgICAgIGRlYm91bmNlRHVyYXRpb246IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByZWZpeCB0byBiZSBzdHJpcHBlZCBmcm9tIGEgSlNPTiByZXNwb25zZSBiZWZvcmUgcGFyc2luZyBpdC5cbiAgICAgICAqXG4gICAgICAgKiBJbiBvcmRlciB0byBwcmV2ZW50IGFuIGF0dGFjayB1c2luZyBDU1JGIHdpdGggQXJyYXkgcmVzcG9uc2VzXG4gICAgICAgKiAoaHR0cDovL2hhYWNrZWQuY29tL2FyY2hpdmUvMjAwOC8xMS8yMC9hbmF0b215LW9mLWEtc3VidGxlLWpzb24tdnVsbmVyYWJpbGl0eS5hc3B4LylcbiAgICAgICAqIG1hbnkgYmFja2VuZHMgd2lsbCBtaXRpZ2F0ZSB0aGlzIGJ5IHByZWZpeGluZyBhbGwgSlNPTiByZXNwb25zZSBib2RpZXNcbiAgICAgICAqIHdpdGggYSBzdHJpbmcgdGhhdCB3b3VsZCBiZSBub25zZW5zaWNhbCB0byBhIEphdmFTY3JpcHQgcGFyc2VyLlxuICAgICAgICpcbiAgICAgICAqL1xuICAgICAganNvblByZWZpeDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBCeSBkZWZhdWx0LCBpcm9uLWFqYXgncyBldmVudHMgZG8gbm90IGJ1YmJsZS4gU2V0dGluZyB0aGlzIGF0dHJpYnV0ZSB3aWxsIGNhdXNlIGl0c1xuICAgICAgICogcmVxdWVzdCBhbmQgcmVzcG9uc2UgZXZlbnRzIGFzIHdlbGwgYXMgaXRzIGlyb24tYWpheC1yZXF1ZXN0LCAtcmVzcG9uc2UsICBhbmQgLWVycm9yXG4gICAgICAgKiBldmVudHMgdG8gYnViYmxlIHRvIHRoZSB3aW5kb3cgb2JqZWN0LiBUaGUgdmFuaWxsYSBlcnJvciBldmVudCBuZXZlciBidWJibGVzIHdoZW5cbiAgICAgICAqIHVzaW5nIHNoYWRvdyBkb20gZXZlbiBpZiB0aGlzLmJ1YmJsZXMgaXMgdHJ1ZSBiZWNhdXNlIGEgc2NvcGVkIGZsYWcgaXMgbm90IHBhc3NlZCB3aXRoXG4gICAgICAgKiBpdCAoZmlyc3QgbGluaykgYW5kIGJlY2F1c2UgdGhlIHNoYWRvdyBkb20gc3BlYyBkaWQgbm90IHVzZWQgdG8gYWxsb3cgY2VydGFpbiBldmVudHMsXG4gICAgICAgKiBpbmNsdWRpbmcgZXZlbnRzIG5hbWVkIGVycm9yLCB0byBsZWFrIG91dHNpZGUgb2Ygc2hhZG93IHRyZWVzIChzZWNvbmQgbGluaykuXG4gICAgICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jc2NvcGVkLWZsYWdcbiAgICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDE1L1dELXNoYWRvdy1kb20tMjAxNTEyMTUvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXNcbiAgICAgICAqL1xuICAgICAgYnViYmxlczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlcyB0aGUgW2Bjb21wbGV0ZXNgXShpcm9uLXJlcXVlc3QjcHJvcGVydHktY29tcGxldGVzKSBwcm9taXNlIGNoYWluIFxuICAgICAgICogZnJvbSBgZ2VuZXJhdGVSZXF1ZXN0YCB0byByZWplY3Qgd2l0aCBhbiBvYmplY3RcbiAgICAgICAqIGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHJlcXVlc3QsIGFzIHdlbGwgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgICAqIElmIGZhbHNlIChkZWZhdWx0KSwgdGhlIHByb21pc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yIG1lc3NhZ2Ugb25seS5cbiAgICAgICAqL1xuICAgICAgcmVqZWN0V2l0aFJlcXVlc3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfYm91bmRIYW5kbGVSZXNwb25zZToge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVSZXNwb25zZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9ic2VydmVyczogW1xuICAgICAgJ19yZXF1ZXN0T3B0aW9uc0NoYW5nZWQodXJsLCBtZXRob2QsIHBhcmFtcy4qLCBoZWFkZXJzLCBjb250ZW50VHlwZSwgJyArXG4gICAgICAgICAgJ2JvZHksIHN5bmMsIGhhbmRsZUFzLCBqc29uUHJlZml4LCB3aXRoQ3JlZGVudGlhbHMsIHRpbWVvdXQsIGF1dG8pJ1xuICAgIF0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBgdXJsYCwgc2VyaWFsaXplZCBmcm9tXG4gICAgICogdGhlIGN1cnJlbnQgdmFsdWUgb2YgYHBhcmFtc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHF1ZXJ5U3RyaW5nICgpIHtcbiAgICAgIHZhciBxdWVyeVBhcnRzID0gW107XG4gICAgICB2YXIgcGFyYW07XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIGZvciAocGFyYW0gaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnBhcmFtc1twYXJhbV07XG4gICAgICAgIHBhcmFtID0gd2luZG93LmVuY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcXVlcnlQYXJ0cy5wdXNoKHBhcmFtICsgJz0nICsgd2luZG93LmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHF1ZXJ5UGFydHMucHVzaChwYXJhbSArICc9JyArIHdpbmRvdy5lbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeVBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBxdWVyeVBhcnRzLmpvaW4oJyYnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGB1cmxgIHdpdGggcXVlcnkgc3RyaW5nIChpZiBgcGFyYW1zYCBhcmUgc3BlY2lmaWVkKSwgc3VpdGFibGUgZm9yXG4gICAgICogcHJvdmlkaW5nIHRvIGFuIGBpcm9uLXJlcXVlc3RgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCByZXF1ZXN0VXJsKCkge1xuICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gdGhpcy5xdWVyeVN0cmluZztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnVybCB8fCAnJztcblxuICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHZhciBiaW5kaW5nQ2hhciA9IHVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JztcbiAgICAgICAgcmV0dXJuIHVybCArIGJpbmRpbmdDaGFyICsgcXVlcnlTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hcHMgaGVhZGVyIG5hbWVzIHRvIGhlYWRlciB2YWx1ZXMsIGZpcnN0IGFwcGx5aW5nIHRoZVxuICAgICAqIHRoZSB2YWx1ZSBvZiBgQ29udGVudC1UeXBlYCBhbmQgdGhlbiBvdmVybGF5aW5nIHRoZSBoZWFkZXJzIHNwZWNpZmllZFxuICAgICAqIGluIHRoZSBgaGVhZGVyc2AgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuY29udGVudFR5cGU7XG4gICAgICBpZiAoY29udGVudFR5cGUgPT0gbnVsbCAmJiAodHlwZW9mIHRoaXMuYm9keSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSBjb250ZW50VHlwZTtcbiAgICAgIH1cbiAgICAgIHZhciBoZWFkZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGhlYWRlciBpbiB0aGlzLmhlYWRlcnMpIHtcbiAgICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSB0aGlzLmhlYWRlcnNbaGVhZGVyXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IG9wdGlvbnMgc3VpdGFibGUgZm9yIGdlbmVyYXRpbmcgYW4gYGlyb24tcmVxdWVzdGAgaW5zdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYGlyb24tYWpheGAgaW5zdGFuY2UncyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7e1xuICAgICAqICAgdXJsOiBzdHJpbmcsXG4gICAgICogICBtZXRob2Q6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGFzeW5jOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAqICAgYm9keTogKEFycmF5QnVmZmVyfEFycmF5QnVmZmVyVmlld3xCbG9ifERvY3VtZW50fEZvcm1EYXRhfG51bGx8c3RyaW5nfHVuZGVmaW5lZHxPYmplY3QpLFxuICAgICAqICAgaGVhZGVyczogKE9iamVjdHx1bmRlZmluZWQpLFxuICAgICAqICAgaGFuZGxlQXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGpzb25QcmVmaXg6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHdpdGhDcmVkZW50aWFsczogKGJvb2xlYW58dW5kZWZpbmVkKX19XG4gICAgICovXG4gICAgdG9SZXF1ZXN0T3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHRoaXMucmVxdWVzdFVybCB8fCAnJyxcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogdGhpcy5yZXF1ZXN0SGVhZGVycyxcbiAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICBhc3luYzogIXRoaXMuc3luYyxcbiAgICAgICAgaGFuZGxlQXM6IHRoaXMuaGFuZGxlQXMsXG4gICAgICAgIGpzb25QcmVmaXg6IHRoaXMuanNvblByZWZpeCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICByZWplY3RXaXRoUmVxdWVzdDogdGhpcy5yZWplY3RXaXRoUmVxdWVzdCxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIEFKQVggcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyFJcm9uUmVxdWVzdEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZXF1ZXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gLyoqIEB0eXBlIHshSXJvblJlcXVlc3RFbGVtZW50fSAqLyAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1yZXF1ZXN0JykpO1xuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0gdGhpcy50b1JlcXVlc3RPcHRpb25zKCk7XG5cbiAgICAgIHRoaXMucHVzaCgnYWN0aXZlUmVxdWVzdHMnLCByZXF1ZXN0KTtcblxuICAgICAgcmVxdWVzdC5jb21wbGV0ZXMudGhlbihcbiAgICAgICAgdGhpcy5fYm91bmRIYW5kbGVSZXNwb25zZVxuICAgICAgKS5jYXRjaChcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IuYmluZCh0aGlzLCByZXF1ZXN0KVxuICAgICAgKS50aGVuKFxuICAgICAgICB0aGlzLl9kaXNjYXJkUmVxdWVzdC5iaW5kKHRoaXMsIHJlcXVlc3QpXG4gICAgICApO1xuXG4gICAgICB2YXIgZXZ0ID0gdGhpcy5maXJlKCdpcm9uLWFqYXgtcHJlc2VuZCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtidWJibGVzOiB0aGlzLmJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWV9KTtcblxuICAgICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdC5yZWplY3RDb21wbGV0ZXMocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LnNlbmQocmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9zZXRMYXN0UmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgIHRoaXMuX3NldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIHRoaXMuZmlyZSgncmVxdWVzdCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1hamF4LXJlcXVlc3QnLCB7XG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgIG9wdGlvbnM6IHJlcXVlc3RPcHRpb25zXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVJlc3BvbnNlOiBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgICBpZiAocmVxdWVzdCA9PT0gdGhpcy5sYXN0UmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9zZXRMYXN0UmVzcG9uc2UocmVxdWVzdC5yZXNwb25zZSk7XG4gICAgICAgIHRoaXMuX3NldExhc3RFcnJvcihudWxsKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcmUoJ3Jlc3BvbnNlJywgcmVxdWVzdCwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1hamF4LXJlc3BvbnNlJywgcmVxdWVzdCwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbihyZXF1ZXN0LCBlcnJvcikge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICBQb2x5bWVyLkJhc2UuX2Vycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3QgPT09IHRoaXMubGFzdFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5fc2V0TGFzdEVycm9yKHtcbiAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICBzdGF0dXM6IHJlcXVlc3QueGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0Lnhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHJlc3BvbnNlOiByZXF1ZXN0Lnhoci5yZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2V0TGFzdFJlc3BvbnNlKG51bGwpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGVzdHMgZmFpbCBpZiB0aGlzIGdvZXMgYWZ0ZXIgdGhlIG5vcm1hbCB0aGlzLmZpcmUoJ2Vycm9yJywgLi4uKVxuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtZXJyb3InLCB7XG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJlKCdlcnJvcicsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfZGlzY2FyZFJlcXVlc3Q6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgIHZhciByZXF1ZXN0SW5kZXggPSB0aGlzLmFjdGl2ZVJlcXVlc3RzLmluZGV4T2YocmVxdWVzdCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0SW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnNwbGljZSgnYWN0aXZlUmVxdWVzdHMnLCByZXF1ZXN0SW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmVxdWVzdE9wdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGVib3VuY2UoJ2dlbmVyYXRlLXJlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvKSB7XG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZVJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWJvdW5jZUR1cmF0aW9uKTtcbiAgICB9LFxuXG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pdGVtLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtMaXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2xpc3RzLmh0bWwpXG5cbmA8cGFwZXItaXRlbT5gIGlzIGFuIGludGVyYWN0aXZlIGxpc3QgaXRlbS4gQnkgZGVmYXVsdCwgaXQgaXMgYSBob3Jpem9udGFsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWQgdHdvLWxpbmUgYW5kIHRocmVlLWxpbmVcbml0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGEgYHBhcGVyLWxpc3Rib3hgXG53aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGUgYHBhcGVyLWl0ZW1gIGNsYXNzXG5hcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZCBzdHlsZXMpOlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPkluYm94PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TdGFycmVkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TZW50IG1haWw8L2J1dHRvbj5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCAgICAgfCBNaW5pbXVtIGhlaWdodCBvZiB0aGUgaXRlbSAgICAgICAgICAgICAgICAgICB8IGA0OHB4YFxuYC0tcGFwZXItaXRlbWAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtICAgICAgICAgICAgICAgICAgICB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSAgICAgICAgICAgfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyAgICAgICAgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgICAgICAgICAgIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyAgICAgICAgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyAgICAgICAgIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImxpc3RpdGVtXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB1c2FnZSwgaXQgbWF5IGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gc2V0XG5gcm9sZT1cIm1lbnVpdGVtXCJgLCBgcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcImAgb3IgYHJvbGU9XCJtZW51aXRlbXJhZGlvXCJgLlxuXG4gICAgPHBhcGVyLWl0ZW0gcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcIj5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgIFNob3cgeW91ciBzdGF0dXNcbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHBhcGVyLWNoZWNrYm94PjwvcGFwZXItY2hlY2tib3g+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWl0ZW1cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWl0ZW0nLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvclxuICAgICAgXVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9zaGFkb3cuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1tYXRlcmlhbGAgaXMgYSBjb250YWluZXIgdGhhdCByZW5kZXJzIHR3byBzaGFkb3dzIG9uIHRvcCBvZiBlYWNoIG90aGVyIHRvXG5jcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1tYXRlcmlhbCBlbGV2YXRpb249XCIxXCI+XG4gICAgICAuLi4gY29udGVudCAuLi5cbiAgICA8L3BhcGVyLW1hdGVyaWFsPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItbWF0ZXJpYWxcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW2FuaW1hdGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1zaGFkb3ctdHJhbnNpdGlvbjtcbiAgICAgIH1cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItbWF0ZXJpYWwnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgei1kZXB0aCBvZiB0aGlzIGVsZW1lbnQsIGZyb20gMC01LiBTZXR0aW5nIHRvIDAgd2lsbCByZW1vdmUgdGhlXG4gICAgICAgKiBzaGFkb3csIGFuZCBlYWNoIGluY3JlYXNpbmcgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIHdpbGwgYmUgXCJkZWVwZXJcIlxuICAgICAgICogdGhhbiB0aGUgbGFzdC5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGVsZXZhdGlvblxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAxXG4gICAgICAgKi9cbiAgICAgIGVsZXZhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBzaGFkb3cgd2hlbiBzZXR0aW5nIGEgbmV3XG4gICAgICAgKiBgZWxldmF0aW9uYCB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGFuaW1hdGVkXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBhbmltYXRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjxzY3JpcHQ+XG4gIC8qKlxuICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yIGVuYWJsZXMgYSBjdXN0b20gZWxlbWVudCB0byBiZSBpbmNsdWRlZFxuICBpbiBhbiBgaXJvbi1mb3JtYC5cblxuICBFdmVudHMgYGlyb24tZm9ybS1lbGVtZW50LXJlZ2lzdGVyYCBhbmQgYGlyb24tZm9ybS1lbGVtZW50LXVucmVnaXN0ZXJgIGFyZSBub3QgZmlyZWQgb24gUG9seW1lciAyLjAuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAgKi9cbiAgUG9seW1lci5Jcm9uRm9ybUVsZW1lbnRCZWhhdmlvciA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBhZGRlZCB0byBhbiBgaXJvbi1mb3JtYC5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXJcbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIGFuIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBpcm9uLWZvcm0tZWxlbWVudC11bnJlZ2lzdGVyXG4gICAgICAgKi9cbiAgICAgICBcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuIElmIHVzZWQgaW4gYSBmb3JtLCBhXG4gICAgICAgKiBjdXN0b20gZWxlbWVudCB0aGF0IHVzZXMgdGhpcyBiZWhhdmlvciBzaG91bGQgYWxzbyB1c2VcbiAgICAgICAqIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IgYW5kIGRlZmluZSBhIGN1c3RvbSB2YWxpZGF0aW9uIG1ldGhvZC5cbiAgICAgICAqIE90aGVyd2lzZSwgYSBgcmVxdWlyZWRgIGVsZW1lbnQgd2lsbCBhbHdheXMgYmUgY29uc2lkZXJlZCB2YWxpZC5cbiAgICAgICAqIEl0J3MgYWxzbyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBwcm92aWRlIGEgdmlzdWFsIHN0eWxlIGZvciB0aGUgZWxlbWVudFxuICAgICAgICogd2hlbiBpdHMgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBmb3JtIHRoYXQgdGhlIGVsZW1lbnQgaXMgcmVnaXN0ZXJlZCB0by5cbiAgICAgICAqL1xuICAgICAgX3BhcmVudEZvcm06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBQb2x5bWVyLkVsZW1lbnQgPyBudWxsIDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBOb3RlOiB0aGUgaXJvbi1mb3JtIHRoYXQgdGhpcyBlbGVtZW50IGJlbG9uZ3MgdG8gd2lsbCBzZXQgdGhpc1xuICAgICAgLy8gZWxlbWVudCdzIF9wYXJlbnRGb3JtIHByb3BlcnR5IHdoZW4gaGFuZGxpbmcgdGhpcyBldmVudC5cbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXInKTtcbiAgICB9LFxuXG4gICAgZGV0YWNoZWQ6IFBvbHltZXIuRWxlbWVudCA/IG51bGwgOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnRGb3JtKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudEZvcm0uZmlyZSgnaXJvbi1mb3JtLWVsZW1lbnQtdW5yZWdpc3RlcicsIHt0YXJnZXQ6IHRoaXN9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxpcm9uLWlucHV0PmAgaXMgYSB3cmFwcGVyIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50LCB0aGF0IGFkZHMgdHdvLXdheSBiaW5kaW5nXG5hbmQgcHJldmVudGlvbiBvZiBpbnZhbGlkIGlucHV0LiBUbyB1c2UgaXQsIHlvdSBtdXN0IGRpc3RyaWJ1dGUgYSBuYXRpdmUgYDxpbnB1dD5gXG55b3Vyc2VsZi4gWW91IGNhbiBjb250aW51ZSB0byB1c2UgdGhlIG5hdGl2ZSBgaW5wdXRgIGFzIHlvdSB3b3VsZCBub3JtYWxseTpcblxuICAgIDxpcm9uLWlucHV0PlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuICAgIDxpcm9uLWlucHV0PlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGRpc2FibGVkPlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFR3by13YXkgYmluZGluZ1xuXG5CeSBkZWZhdWx0IHlvdSBjYW4gb25seSBnZXQgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBhIG5hdGl2ZSBgPGlucHV0PmAncyBgdmFsdWVgXG5kdWUgdG8gdXNlciBpbnB1dDpcblxuICAgIDxpbnB1dCB2YWx1ZT1cInt7bXlWYWx1ZTo6aW5wdXR9fVwiPlxuXG5UaGlzIG1lYW5zIHRoYXQgaWYgeW91IGltcGVyYXRpdmVseSBzZXQgdGhlIHZhbHVlIChpLmUuIGBzb21lTmF0aXZlSW5wdXQudmFsdWUgPSAnZm9vJ2ApLFxubm8gZXZlbnRzIHdpbGwgYmUgZmlyZWQgYW5kIHRoaXMgY2hhbmdlIGNhbm5vdCBiZSBvYnNlcnZlZC5cblxuYGlyb24taW5wdXRgIGFkZHMgdGhlIGBiaW5kLXZhbHVlYCBwcm9wZXJ0eSB0aGF0IG1pcnJvcnMgdGhlIG5hdGl2ZSBgaW5wdXRgJ3MgJ2B2YWx1ZWAgcHJvcGVydHk7IHRoaXNcbnByb3BlcnR5IGNhbiBiZSB1c2VkIGZvciB0d28td2F5IGRhdGEgYmluZGluZy5cbmBiaW5kLXZhbHVlYCB3aWxsIG5vdGlmeSBpZiBpdCBpcyBjaGFuZ2VkIGVpdGhlciBieSB1c2VyIGlucHV0IG9yIGJ5IHNjcmlwdC5cblxuICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e215VmFsdWV9fVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuTm90ZTogdGhpcyBtZWFucyB0aGF0IGlmIHlvdSB3YW50IHRvIGltcGVyYXRpdmVseSBzZXQgdGhlIG5hdGl2ZSBgaW5wdXRgJ3MsIHlvdSBfbXVzdF9cbnNldCBgYmluZC12YWx1ZWAgaW5zdGVhZCwgc28gdGhhdCB0aGUgd3JhcHBlciBgaXJvbi1pbnB1dGAgY2FuIGJlIG5vdGlmaWVkLlxuXG4jIyMgVmFsaWRhdGlvblxuXG5gaXJvbi1pbnB1dGAgdXNlcyB0aGUgbmF0aXZlIGBpbnB1dGAncyB2YWxpZGF0aW9uLiBGb3Igc2ltcGxpY2l0eSwgYGlyb24taW5wdXRgXG5oYXMgYSBgdmFsaWRhdGUoKWAgbWV0aG9kICh3aGljaCBpbnRlcm5hbGx5IGp1c3QgY2hlY2tzIHRoZSBkaXN0cmlidXRlZCBgaW5wdXRgJ3NcbnZhbGlkaXR5KSwgd2hpY2ggc2V0cyBhbiBgaW52YWxpZGAgYXR0cmlidXRlIHRoYXQgY2FuIGFsc28gYmUgdXNlZCBmb3Igc3R5bGluZy5cblxuVG8gdmFsaWRhdGUgYXV0b21hdGljYWxseSBhcyB5b3UgdHlwZSwgeW91IGNhbiB1c2UgdGhlIGBhdXRvLXZhbGlkYXRlYCBhdHRyaWJ1dGUuXG5cbmBpcm9uLWlucHV0YCBhbHNvIGZpcmVzIGFuIGBpcm9uLWlucHV0LXZhbGlkYXRlYCBldmVudCBhZnRlciBgdmFsaWRhdGUoKWAgaXNcbmNhbGxlZC4gWW91IGNhbiB1c2UgaXQgdG8gaW1wbGVtZW50IGEgY3VzdG9tIHZhbGlkYXRvcjpcblxuICAgIHZhciBDYXRzT25seVZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbihpcm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gIWlyb25JbnB1dC5iaW5kVmFsdWUgfHwgaXJvbklucHV0LmJpbmRWYWx1ZSA9PT0gJ2NhdCc7XG4gICAgICAgIGlyb25JbnB1dC5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlyb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWlucHV0LXZhbGlkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBDYXRzT25seS52YWxpZGF0ZShpbnB1dDIpO1xuICAgIH0pO1xuXG5Zb3UgY2FuIGFsc28gdXNlIGFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGFuIFtgSXJvblZhbGlkYXRvckJlaGF2aW9yYF0oL2VsZW1lbnQvUG9seW1lckVsZW1lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IpLlxuVGhpcyBleGFtcGxlIGNhbiBhbHNvIGJlIGZvdW5kIGluIHRoZSBkZW1vIGZvciB0aGlzIGVsZW1lbnQ6XG5cbiAgICA8aXJvbi1pbnB1dCB2YWxpZGF0b3I9XCJjYXRzLW9ubHlcIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBQcmV2ZW50aW5nIGludmFsaWQgaW5wdXRcblxuSXQgbWF5IGJlIGRlc2lyYWJsZSB0byBvbmx5IGFsbG93IHVzZXJzIHRvIGVudGVyIGNlcnRhaW4gY2hhcmFjdGVycy4gWW91IGNhbiB1c2UgdGhlXG5gYWxsb3dlZC1wYXR0ZXJuYCBhdHRyaWJ1dGUgdG8gYWNjb21wbGlzaCB0aGlzLiBUaGlzIGZlYXR1cmVcbmlzIHNlcGFyYXRlIGZyb20gdmFsaWRhdGlvbiwgYW5kIGBhbGxvd2VkLXBhdHRlcm5gIGRvZXMgbm90IGFmZmVjdCBob3cgdGhlIGlucHV0IGlzIHZhbGlkYXRlZC5cblxuICAgIC8vIE9ubHkgYWxsb3cgdHlwaW5nIGRpZ2l0cywgYnV0IGEgdmFsaWQgaW5wdXQgaGFzIGV4YWN0bHkgNSBkaWdpdHMuXG4gICAgPGlyb24taW5wdXQgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOV1cIj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiXFxkezV9XCI+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWlucHV0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90IGlkPVwiY29udGVudFwiPjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAnaXJvbi1pbnB1dCcsXG5cbiAgICAgIGJlaGF2aW9yczogW1xuICAgICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yXG4gICAgICBdLFxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW5ldmVyIGB2YWxpZGF0ZSgpYCBpcyBjYWxsZWQuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24taW5wdXQtdmFsaWRhdGVcbiAgICAgICAqL1xuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZSB0aGlzIHByb3BlcnR5IGluc3RlYWQgb2YgYHZhbHVlYCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcsIG9yIHRvXG4gICAgICAgICAqIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBpbnB1dC4gKipEbyBub3QqKiB1c2UgdGhlIGRpc3RyaWJ1dGVkXG4gICAgICAgICAqIGlucHV0J3MgYHZhbHVlYCBwcm9wZXJ0eSB0byBzZXQgYSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYmluZFZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVkIHByb3BlcnR5IHRoYXQgZWNob2VzIGBiaW5kVmFsdWVgIChtb3N0bHkgdXNlZCBmb3IgUG9seW1lciAxLjBcbiAgICAgICAgICogYmFja2NvbXBhdGliaWxpdHksIGlmIHlvdSB3ZXJlIG9uZS13YXkgYmluZGluZyB0byB0aGUgUG9seW1lciAxLjBcbiAgICAgICAgICogYGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiYCB2YWx1ZSBhdHRyaWJ1dGUpLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlVmFsdWUoYmluZFZhbHVlKSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnZXgtbGlrZSBsaXN0IG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBhcyBpbnB1dDsgYWxsIGNoYXJhY3RlcnMgbm90IGluIHRoZSBsaXN0XG4gICAgICAgICAqIHdpbGwgYmUgcmVqZWN0ZWQuIFRoZSByZWNvbW1lbmRlZCBmb3JtYXQgc2hvdWxkIGJlIGEgbGlzdCBvZiBhbGxvd2VkIGNoYXJhY3RlcnMsXG4gICAgICAgICAqIGZvciBleGFtcGxlLCBgW2EtekEtWjAtOS4rLSE7Ol1gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHBhdHRlcm4gcmVwcmVzZW50cyB0aGUgYWxsb3dlZCBjaGFyYWN0ZXJzIGZvciB0aGUgZmllbGQ7IGFzIHRoZSB1c2VyIGlucHV0cyB0ZXh0LFxuICAgICAgICAgKiBlYWNoIGluZGl2aWR1YWwgY2hhcmFjdGVyIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoZSBwYXR0ZXJuIChyYXRoZXIgdGhhbiBjaGVja2luZ1xuICAgICAgICAgKiB0aGUgZW50aXJlIHZhbHVlIGFzIGEgd2hvbGUpLiBJZiBhIGNoYXJhY3RlciBpcyBub3QgYSBtYXRjaCwgaXQgd2lsbCBiZSByZWplY3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGFzdGVkIGlucHV0IHdpbGwgaGF2ZSBlYWNoIGNoYXJhY3RlciBjaGVja2VkIGluZGl2aWR1YWxseTsgaWYgYW55IGNoYXJhY3RlclxuICAgICAgICAgKiBkb2Vzbid0IG1hdGNoIGBhbGxvd2VkUGF0dGVybmAsIHRoZSBlbnRpcmUgcGFzdGVkIHN0cmluZyB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBpZiB5b3Ugd2VyZSB1c2luZyBgaXJvbi1pbnB1dGAgaW4gMS4wLCB5b3Ugd2VyZSBhbHNvIHJlcXVpcmVkIHRvXG4gICAgICAgICAqIHNldCBgcHJldmVudC1pbnZhbGlkLWlucHV0YC4gVGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIGFzIG9mIFBvbHltZXIgMi4wLFxuICAgICAgICAgKiBhbmQgd2lsbCBiZSBzZXQgYXV0b21hdGljYWxseSBmb3IgeW91IGlmIGFuIGBhbGxvd2VkUGF0dGVybmAgaXMgcHJvdmlkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd2VkUGF0dGVybjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSBhcyB5b3UgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgLyoqXG4gICAgICAgICogVGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAqL1xuICAgICAgICBfaW5wdXRFbGVtZW50OiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ19iaW5kVmFsdWVDaGFuZ2VkKGJpbmRWYWx1ZSwgX2lucHV0RWxlbWVudCknXG4gICAgICBdLFxuXG4gICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgJ2lucHV0JzogJ19vbklucHV0JyxcbiAgICAgICAgJ2tleXByZXNzJzogJ19vbktleXByZXNzJ1xuICAgICAgfSxcblxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhZGRlZCBhdCBhIGxhdGVyIHRpbWUsIHVwZGF0ZSB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IFBvbHltZXIuZG9tKHRoaXMpLm9ic2VydmVOb2RlcyhmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgICAgdGhpcy5faW5pdFNsb3R0ZWRJbnB1dCgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgICAgICBQb2x5bWVyLmRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIDxpbnB1dD4gZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZ2V0IGlucHV0RWxlbWVudCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnQ7XG4gICAgICB9LFxuXG4gICAgICBfaW5pdFNsb3R0ZWRJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlQ2hpbGRyZW4oKVswXTtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmJpbmRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXJlYWR5Jyk7XG4gICAgICB9LFxuXG4gICAgICBnZXQgX3BhdHRlcm5SZWdFeHAoKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuO1xuICAgICAgICBpZiAodGhpcy5hbGxvd2VkUGF0dGVybikge1xuICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHRoaXMuYWxsb3dlZFBhdHRlcm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBwYXR0ZXJuID0gL1swLTkuLGUtXS87XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzfVxuICAgICAgICovXG4gICAgICBfYmluZFZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oYmluZFZhbHVlLCBpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gVGhlIG9ic2VydmVyIGNvdWxkIGhhdmUgcnVuIGJlZm9yZSBhdHRhY2hlZCgpIHdoZW4gd2UgaGF2ZSBhY3R1YWxseSBpbml0aWFsaXplZFxuICAgICAgICAvLyB0aGlzIHByb3BlcnR5LlxuICAgICAgICBpZiAoIWlucHV0RWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaW5kVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoYmluZFZhbHVlICE9PSBpbnB1dEVsZW1lbnQudmFsdWUpe1xuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gYmluZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKSB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFudWFsbHkgbm90aWZ5IGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBub3RpZnkgdW50aWwgYWZ0ZXIgc2V0dGluZyB2YWx1ZVxuICAgICAgICB0aGlzLmZpcmUoJ2JpbmQtdmFsdWUtY2hhbmdlZCcsIHt2YWx1ZTogYmluZFZhbHVlfSk7XG4gICAgICB9LFxuXG4gICAgICBfb25JbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gdmFsaWRhdGUgZWFjaCBvZiB0aGUgY2hhcmFjdGVycyBwYXN0ZWQgaWYgdGhleSBoYXZlbid0XG4gICAgICAgIC8vIGJlZW4gdmFsaWRhdGVkIGluc2lkZSBgX29uS2V5cHJlc3NgIGFscmVhZHkuXG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuICYmICF0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQpIHtcbiAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLl9jaGVja1BhdHRlcm5WYWxpZGl0eSgpO1xuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcignSW52YWxpZCBzdHJpbmcgb2YgY2hhcmFjdGVycyBub3QgZW50ZXJlZC4nKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWxpZElucHV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRWYWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dCA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIF9pc1ByaW50YWJsZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gV2hhdCBhIGNvbnRyb2wvcHJpbnRhYmxlIGNoYXJhY3RlciBpcyB2YXJpZXMgd2lsZGx5IGJhc2VkIG9uIHRoZSBicm93c2VyLlxuICAgICAgICAvLyAtIG1vc3QgY29udHJvbCBjaGFyYWN0ZXJzIChhcnJvd3MsIGJhY2tzcGFjZSkgZG8gbm90IHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50XG4gICAgICAgIC8vICAgaW4gQ2hyb21lLCBidXQgdGhlICpkbyogb24gRmlyZWZveFxuICAgICAgICAvLyAtIGluIEZpcmVmb3gsIHdoZW4gdGhleSBkbyBzZW5kIGEgYGtleXByZXNzYCBldmVudCwgY29udHJvbCBjaGFycyBoYXZlXG4gICAgICAgIC8vICAgYSBjaGFyQ29kZSA9IDAsIGtleUNvZGUgPSB4eCAoZm9yIGV4LiA0MCBmb3IgZG93biBhcnJvdylcbiAgICAgICAgLy8gLSBwcmludGFibGUgY2hhcmFjdGVycyBhbHdheXMgc2VuZCBhIGtleXByZXNzIGV2ZW50LlxuICAgICAgICAvLyAtIGluIEZpcmVmb3gsIHByaW50YWJsZSBjaGFycyBhbHdheXMgaGF2ZSBhIGtleUNvZGUgPSAwLiBJbiBDaHJvbWUsIHRoZSBrZXlDb2RlXG4gICAgICAgIC8vICAgYWx3YXlzIG1hdGNoZXMgdGhlIGNoYXJDb2RlLlxuICAgICAgICAvLyBOb25lIG9mIHRoaXMgbWFrZXMgYW55IHNlbnNlLlxuXG4gICAgICAgIC8vIEZvciB0aGVzZSBrZXlzLCBBU0NJSSBjb2RlID09IGJyb3dzZXIga2V5Y29kZS5cbiAgICAgICAgdmFyIGFueU5vblByaW50YWJsZSA9XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOCkgICB8fCAgLy8gYmFja3NwYWNlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOSkgICB8fCAgLy8gdGFiXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTMpICB8fCAgLy8gZW50ZXJcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAyNyk7ICAgICAvLyBlc2NhcGVcblxuICAgICAgICAvLyBGb3IgdGhlc2Uga2V5cywgbWFrZSBzdXJlIGl0J3MgYSBicm93c2VyIGtleWNvZGUgYW5kIG5vdCBhbiBBU0NJSSBjb2RlLlxuICAgICAgICB2YXIgbW96Tm9uUHJpbnRhYmxlID1cbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxOSkgIHx8ICAvLyBwYXVzZVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDIwKSAgfHwgIC8vIGNhcHMgbG9ja1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDQ1KSAgfHwgIC8vIGluc2VydFxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDQ2KSAgfHwgIC8vIGRlbGV0ZVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDE0NCkgfHwgIC8vIG51bSBsb2NrXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTQ1KSB8fCAgLy8gc2Nyb2xsIGxvY2tcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDMyICYmIGV2ZW50LmtleUNvZGUgPCA0MSkgICB8fCAvLyBwYWdlIHVwL2Rvd24sIGVuZCwgaG9tZSwgYXJyb3dzXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAxMTEgJiYgZXZlbnQua2V5Q29kZSA8IDEyNCk7IC8vIGZuIGtleXNcblxuICAgICAgICByZXR1cm4gIWFueU5vblByaW50YWJsZSAmJiAhKGV2ZW50LmNoYXJDb2RlID09IDAgJiYgbW96Tm9uUHJpbnRhYmxlKTtcbiAgICAgIH0sXG5cbiAgICAgIF9vbktleXByZXNzOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dlZFBhdHRlcm4gJiYgdGhpcy50eXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICAgICAgaWYgKCFyZWdleHApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBrZXlzIGFuZCBiYWNrc3BhY2VcbiAgICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGUgcGF0dGVybiBlaXRoZXIgaGVyZSBvciBpbiBgX29uSW5wdXRgLCBidXQgbm90IGluIGJvdGguXG4gICAgICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRoaXNDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG4gICAgICAgIGlmICh0aGlzLl9pc1ByaW50YWJsZShldmVudCkgJiYgIXJlZ2V4cC50ZXN0KHRoaXNDaGFyKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyKCdJbnZhbGlkIGNoYXJhY3RlciAnICsgdGhpc0NoYXIgKyAnIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfY2hlY2tQYXR0ZXJuVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICAgICAgaWYgKCFyZWdleHApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFyZWdleHAudGVzdCh0aGlzLmlucHV0RWxlbWVudC52YWx1ZVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBUaGUgdmFsaWRhdG9yIHByb3ZpZGVkIGluIGB2YWxpZGF0b3JgIHdpbGwgYmUgdXNlZCBmaXJzdCxcbiAgICAgICAqIHRoZW4gYW55IGNvbnN0cmFpbnRzLlxuICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIHRoZSBuZXN0ZWQgaW5wdXQncyBuYXRpdmUgdmFsaWRpdHkuXG4gICAgICAgIHZhciB2YWxpZCA9ICB0aGlzLmlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgLy8gT25seSBkbyBleHRyYSBjaGVja2luZyBpZiB0aGUgYnJvd3NlciB0aG91Z2h0IHRoaXMgd2FzIHZhbGlkLlxuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAvLyBFbXB0eSwgcmVxdWlyZWQgaW5wdXQgaXMgaW52YWxpZFxuICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIHRoaXMuYmluZFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvci52YWxpZGF0ZS5jYWxsKHRoaXMsIHRoaXMuYmluZFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1pbnB1dC12YWxpZGF0ZScpO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9LFxuXG4gICAgICBfYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHsgdGV4dDogbWVzc2FnZSB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlVmFsdWU6IGZ1bmN0aW9uKGJpbmRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYmluZFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbnB1dC9pcm9uLWlucHV0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5gaXJvbi1hMTF5LWFubm91bmNlcmAgaXMgYSBzaW5nbGV0b24gZWxlbWVudCB0aGF0IGlzIGludGVuZGVkIHRvIGFkZCBhMTF5XG50byBmZWF0dXJlcyB0aGF0IHJlcXVpcmUgb24tZGVtYW5kIGFubm91bmNlbWVudCBmcm9tIHNjcmVlbiByZWFkZXJzLiBJblxub3JkZXIgdG8gbWFrZSB1c2Ugb2YgdGhlIGFubm91bmNlciwgaXQgaXMgYmVzdCB0byByZXF1ZXN0IGl0cyBhdmFpbGFiaWxpdHlcbmluIHRoZSBhbm5vdW5jaW5nIGVsZW1lbnQuXG5cbkV4YW1wbGU6XG5cbiAgICBQb2x5bWVyKHtcblxuICAgICAgaXM6ICd4LWNoYXR0eScsXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGNyZWF0ZSB0aGUgc2luZ2xldG9uIGVsZW1lbnQgaWYgaXQgaGFzIG5vdFxuICAgICAgICAvLyBiZWVuIGNyZWF0ZWQgeWV0OlxuICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuQWZ0ZXIgdGhlIGBpcm9uLWExMXktYW5ub3VuY2VyYCBoYXMgYmVlbiBtYWRlIGF2YWlsYWJsZSwgZWxlbWVudHMgY2FuXG5tYWtlIGFubm91bmNlcyBieSBmaXJpbmcgYnViYmxpbmcgYGlyb24tYW5ub3VuY2VgIGV2ZW50cy5cblxuRXhhbXBsZTpcblxuICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHtcbiAgICAgIHRleHQ6ICdUaGlzIGlzIGFuIGFubm91bmNlbWVudCEnXG4gICAgfSwgeyBidWJibGVzOiB0cnVlIH0pO1xuXG5Ob3RlOiBhbm5vdW5jZW1lbnRzIGFyZSBvbmx5IGF1ZGlibGUgaWYgeW91IGhhdmUgYSBzY3JlZW4gcmVhZGVyIGVuYWJsZWQuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tYTExeS1hbm5vdW5jZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LDBweCwwcHgsMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgYXJpYS1saXZlJD1cIltbbW9kZV1dXCI+W1tfdGV4dF1dPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlciA9IFBvbHltZXIoe1xuICAgICAgICBpczogJ2lyb24tYTExeS1hbm5vdW5jZXInLFxuXG4gICAgICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSB2YWx1ZSBvZiBtb2RlIGlzIHVzZWQgdG8gc2V0IHRoZSBgYXJpYS1saXZlYCBhdHRyaWJ1dGVcbiAgICAgICAgICAgKiBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGFubm91bmNlZC4gVmFsaWQgdmFsdWVzIGFyZTogYG9mZmAsXG4gICAgICAgICAgICogYHBvbGl0ZWAgYW5kIGBhc3NlcnRpdmVgLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncG9saXRlJ1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBfdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWFubm91bmNlJywgdGhpcy5fb25Jcm9uQW5ub3VuY2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhdXNlIGEgdGV4dCBzdHJpbmcgdG8gYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHNob3VsZCBiZSBhbm5vdW5jZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhbm5vdW5jZTogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICAgICAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25Jcm9uQW5ub3VuY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hbm5vdW5jZShldmVudC5kZXRhaWwudGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IG51bGw7XG5cbiAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIVBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1hMTF5LWFubm91bmNlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKTtcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tbWV0YS9pcm9uLW1ldGEuaHRtbFwiPlxuXG48c2NyaXB0PlxuICAvKipcbiAgICogU2luZ2xldG9uIElyb25NZXRhIGluc3RhbmNlLlxuICAgKi9cbiAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBgVXNlIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBlbGVtZW50IHRoYXQgdmFsaWRhdGVzIHVzZXIgaW5wdXQuXG4gICAqIFVzZSB0aGUgcmVsYXRlZCBgUG9seW1lci5Jcm9uVmFsaWRhdG9yQmVoYXZpb3JgIHRvIGFkZCBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYyB0byBhbiBpcm9uLWlucHV0LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBhbiBgPGlyb24tZm9ybT5gIGVsZW1lbnQgdmFsaWRhdGVzIGl0cyBmaWVsZHMgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBzdWJtaXQgYnV0dG9uLlxuICAgKiBUbyB2YWxpZGF0ZSBhIGZvcm0gaW1wZXJhdGl2ZWx5LCBjYWxsIHRoZSBmb3JtJ3MgYHZhbGlkYXRlKClgIG1ldGhvZCwgd2hpY2ggaW4gdHVybiB3aWxsXG4gICAqIGNhbGwgYHZhbGlkYXRlKClgIG9uIGFsbCBpdHMgY2hpbGRyZW4uIEJ5IHVzaW5nIGBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCwgeW91clxuICAgKiBjdXN0b20gZWxlbWVudCB3aWxsIGdldCBhIHB1YmxpYyBgdmFsaWRhdGUoKWAsIHdoaWNoXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB2YWxpZGl0eSBvZiB0aGUgZWxlbWVudCwgYW5kIGEgY29ycmVzcG9uZGluZyBgaW52YWxpZGAgYXR0cmlidXRlLFxuICAgKiB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZy5cbiAgICpcbiAgICogVG8gaW1wbGVtZW50IHRoZSBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYyBvZiB5b3VyIGVsZW1lbnQsIHlvdSBtdXN0IG92ZXJyaWRlXG4gICAqIHRoZSBwcm90ZWN0ZWQgYF9nZXRWYWxpZGl0eSgpYCBtZXRob2Qgb2YgdGhpcyBiZWhhdmlvdXIsIHJhdGhlciB0aGFuIGB2YWxpZGF0ZSgpYC5cbiAgICogU2VlIFt0aGlzXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24tZm9ybS9ibG9iL21hc3Rlci9kZW1vL3NpbXBsZS1lbGVtZW50Lmh0bWwpXG4gICAqIGZvciBhbiBleGFtcGxlLlxuICAgKlxuICAgKiAjIyMgQWNjZXNzaWJpbGl0eVxuICAgKlxuICAgKiBDaGFuZ2luZyB0aGUgYGludmFsaWRgIHByb3BlcnR5LCBlaXRoZXIgbWFudWFsbHkgb3IgYnkgY2FsbGluZyBgdmFsaWRhdGUoKWAgd2lsbCB1cGRhdGUgdGhlXG4gICAqIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gICAqIEBwb2x5bWVyQmVoYXZpb3JcbiAgICovXG4gIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIE5hbWUgb2YgdGhlIHZhbGlkYXRvciB0byB1c2UuXG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgbGFzdCBjYWxsIHRvIGB2YWxpZGF0ZWAgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogJ19pbnZhbGlkQ2hhbmdlZCdcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHJlZ2lzdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgPSBuZXcgUG9seW1lci5Jcm9uTWV0YSh7dHlwZTogJ3ZhbGlkYXRvcid9KTtcbiAgICB9LFxuXG4gICAgX2ludmFsaWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmludmFsaWQpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFJlY29tcHV0ZSB0aGlzIGV2ZXJ5IHRpbWUgaXQncyBuZWVkZWQsIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyBpZiB0aGVcbiAgICAgKiB1bmRlcmx5aW5nIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSBoYXMgY2hhbmdlZC4gKi9cbiAgICBnZXQgX3ZhbGlkYXRvcigpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSAmJlxuICAgICAgICAgIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhLmJ5S2V5KHRoaXMudmFsaWRhdG9yKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsaWRhdG9yIGB2YWxpZGF0b3JgIGV4aXN0cy5cbiAgICAgKi9cbiAgICBoYXNWYWxpZGF0b3I6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvciAhPSBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGB2YWx1ZWAgaXMgdmFsaWQsIGFuZCB1cGRhdGVzIGBpbnZhbGlkYC4gSWYgeW91IHdhbnRcbiAgICAgKiB5b3VyIGVsZW1lbnQgdG8gaGF2ZSBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYywgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kO1xuICAgICAqIG92ZXJyaWRlIGBfZ2V0VmFsaWRpdHkodmFsdWUpYCBpbnN0ZWFkLlxuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIERlcHJlY2F0ZWQ6IFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWQuIEJ5IGRlZmF1bHQsXG4gICAgICogaXQgaXMgcGFzc2VkIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzIHNldC5cbiAgICAgKiBJZiB0aGlzIGFyZ3VtZW50IGlzIG5vdCBzcGVjaWZpZWQsIHRoZW4gdGhlIGVsZW1lbnQncyBgdmFsdWVgIHByb3BlcnR5XG4gICAgICogaXMgdXNlZCwgaWYgaXQgZXhpc3RzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC5cbiAgICAgKi9cbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIElmIHRoaXMgaXMgYW4gZWxlbWVudCB0aGF0IGFsc28gaGFzIGEgdmFsdWUgcHJvcGVydHksIGFuZCB0aGVyZSB3YXNcbiAgICAgIC8vIG5vIGV4cGxpY2l0IHZhbHVlIGFyZ3VtZW50IHBhc3NlZCwgdXNlIHRoZSBlbGVtZW50J3MgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXRoaXMuX2dldFZhbGlkaXR5KHRoaXMudmFsdWUpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdGhpcy5fZ2V0VmFsaWRpdHkodmFsdWUpO1xuICAgICAgcmV0dXJuICF0aGlzLmludmFsaWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiAgQnkgZGVmYXVsdCwgaXQgaXMgcGFzc2VkXG4gICAgICogdG8gdGhlIHZhbGlkYXRvcidzIGB2YWxpZGF0ZSgpYCBmdW5jdGlvbiwgaWYgYSB2YWxpZGF0b3IgaXMgc2V0LiBZb3VcbiAgICAgKiBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IGN1c3RvbSB2YWxpZGl0eVxuICAgICAqIGxvZ2ljIGZvciB5b3VyIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAgICovXG5cbiAgICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmh0bWxcIj5cblxuPHNjcmlwdD5cblxuICAvLyBHZW5lcmF0ZSB1bmlxdWUsIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBJRHMgZm9yIGxhYmVscyAobmVlZGVkIGJ5XG4gIC8vIGFyaWEtbGFiZWxsZWRieSkgYW5kIGFkZC1vbnMuXG4gIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlciA9IHt9O1xuICBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIuTmV4dExhYmVsSUQgPSAxO1xuICBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQgPSAxO1xuXG4gIC8qKlxuICAgKiBVc2UgYFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgaW5wdXRzIHdpdGggYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gVGhpc1xuICAgKiBiZWhhdmlvciBpcyBpbXBsZW1lbnRlZCBieSBgPHBhcGVyLWlucHV0PmAuIEl0IGV4cG9zZXMgYSBudW1iZXIgb2YgcHJvcGVydGllcyBmcm9tXG4gICAqIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYW5kIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCBhbmQgdGhleSBzaG91bGQgYmUgYm91bmQgaW4geW91clxuICAgKiB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhlIGlucHV0IGVsZW1lbnQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBgaW5wdXRFbGVtZW50YCBwcm9wZXJ0eSBpZiB5b3UgbmVlZCB0byBhY2Nlc3NcbiAgICogcHJvcGVydGllcyBvciBtZXRob2RzIHRoYXQgYXJlIG5vdCBleHBvc2VkLlxuICAgKiBAcG9seW1lckJlaGF2aW9yIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yXG4gICAqL1xuICBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvckltcGwgPSB7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gdGhlIGlucHV0IGNoYW5nZXMgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGNoYW5nZVxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhYmVsIGZvciB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIGA8bGFiZWw+YCdzIGNvbnRlbnQgYW5kIGBoaWRkZW5gIHByb3BlcnR5LCBlLmcuXG4gICAgICAgKiBgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5gIGluIHlvdXIgYHRlbXBsYXRlYFxuICAgICAgICovXG4gICAgICBsYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlyb24taW5wdXQ+YCdzIGBiaW5kVmFsdWVgXG4gICAgICAgKiBwcm9wZXJ0eSwgb3IgdGhlIHZhbHVlIHByb3BlcnR5IG9mIHlvdXIgaW5wdXQgdGhhdCBpcyBgbm90aWZ5OnRydWVgLlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogYm90aCB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGFuZCB0aGUgaW5wdXQncyBgZGlzYWJsZWRgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG8gYm90aCB0aGVcbiAgICAgICAqIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBhbmQgdGhlIGlucHV0J3MgYGludmFsaWRgIHByb3BlcnR5LlxuICAgICAgICpcbiAgICAgICAqIElmIGBhdXRvVmFsaWRhdGVgIGlzIHRydWUsIHRoZSBgaW52YWxpZGAgYXR0cmlidXRlIGlzIG1hbmFnZWQgYXV0b21hdGljYWxseSxcbiAgICAgICAqIHdoaWNoIGNhbiBjbG9iYmVyIGF0dGVtcHRzIHRvIG1hbmFnZSBpdCBtYW51YWxseS5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhpcyB0byBzcGVjaWZ5IHRoZSBwYXR0ZXJuIGFsbG93ZWQgYnkgYHByZXZlbnRJbnZhbGlkSW5wdXRgLiBJZlxuICAgICAgICogeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYWxsb3dlZFBhdHRlcm5gXG4gICAgICAgKiBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYWxsb3dlZFBhdHRlcm46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB0eXBlIG9mIHRoZSBpbnB1dC4gVGhlIHN1cHBvcnRlZCB0eXBlcyBhcmUgdGhlXG4gICAgICAgKiBbbmF0aXZlIGlucHV0J3MgdHlwZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXzxpbnB1dD5fdHlwZXMpLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LFxuICAgICAgICogYmluZCB0aGlzIHRvIHRoZSAoUG9seW1lciAxKSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBvciAoUG9seW1lciAyKVxuICAgICAgICogYDxpcm9uLWlucHV0PmAncyBgdHlwZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkYXRhbGlzdCBvZiB0aGUgaW5wdXQgKGlmIGFueSkuIFRoaXMgc2hvdWxkIG1hdGNoIHRoZSBpZCBvZiBhbiBleGlzdGluZyBgPGRhdGFsaXN0PmAuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBsaXN0YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwYXR0ZXJuIHRvIHZhbGlkYXRlIHRoZSBgaW5wdXRgIHdpdGguIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBwYXR0ZXJuYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgcGF0dGVybjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGByZXF1aXJlZGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZ1xuICAgICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsXG4gICAgICAgKiBiaW5kIHRoaXMgdG8gdGhlIGA8cGFwZXItaW5wdXQtZXJyb3I+YCdzIGNvbnRlbnQsIGlmIHVzaW5nLlxuICAgICAgICovXG4gICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIHNob3cgYSBjaGFyYWN0ZXIgY291bnRlci5cbiAgICAgICAqL1xuICAgICAgY2hhckNvdW50ZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYG5vTGFiZWxGbG9hdGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG5vTGFiZWxGbG9hdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBsYWJlbC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhbHdheXNGbG9hdExhYmVsYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYWx3YXlzRmxvYXRMYWJlbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYXV0b1ZhbGlkYXRlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBOYW1lIG9mIHRoZSB2YWxpZGF0b3IgdG8gdXNlLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgdmFsaWRhdG9yYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLy8gSFRNTElucHV0RWxlbWVudCBhdHRyaWJ1dGVzIGZvciBiaW5kaW5nIGlmIG5lZWRlZFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jb21wbGV0ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnb2ZmJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvZm9jdXNgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvZm9jdXM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6ICdfYXV0b2ZvY3VzQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgaW5wdXRtb2RlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgaW5wdXRtb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWlubGVuZ3RoYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbWlubGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWF4bGVuZ3RoYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW11bSAobnVtZXJpYyBvciBkYXRlLXRpbWUpIGlucHV0IHZhbHVlLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWluYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWF4aW11bSAobnVtZXJpYyBvciBkYXRlLXRpbWUpIGlucHV0IHZhbHVlLlxuICAgICAgICogQ2FuIGJlIGEgU3RyaW5nIChlLmcuIGBcIjIwMDAtMDEtMDFcImApIG9yIGEgTnVtYmVyIChlLmcuIGAyYCkuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExpbWl0cyB0aGUgbnVtZXJpYyBvciBkYXRlLXRpbWUgaW5jcmVtZW50cy5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHN0ZXBgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBzdGVwOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBuYW1lYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwbGFjZWhvbGRlciBzdHJpbmcgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsLiBJZiB0aGlzIGlzIHNldCwgdGhlIGxhYmVsIHdpbGwgYWx3YXlzIGZsb2F0LlxuICAgICAgICovXG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIG5lZWQgdG8gc2V0IGEgZGVmYXVsdCBzbyBfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwgaXMgcnVuXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGByZWFkb25seWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBzaXplYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgc2l6ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8vIE5vbnN0YW5kYXJkIGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NhcGl0YWxpemVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvY2FwaXRhbGl6ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnbm9uZSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvcnJlY3RgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvY29ycmVjdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnb2ZmJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvc2F2ZWAgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1zZWFyY2guXG4gICAgICAgKi9cbiAgICAgIGF1dG9zYXZlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGByZXN1bHRzYCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPXNlYXJjaC5cbiAgICAgICAqL1xuICAgICAgcmVzdWx0czoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYWNjZXB0YCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPWZpbGUuXG4gICAgICAgKi9cbiAgICAgIGFjY2VwdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZWA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtdWx0aXBsZWAgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1maWxlLlxuICAgICAgICovXG4gICAgICBtdWx0aXBsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfYXJpYURlc2NyaWJlZEJ5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICBfYXJpYUxhYmVsbGVkQnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICdhZGRvbi1hdHRhY2hlZCc6ICdfb25BZGRvbkF0dGFjaGVkJyxcbiAgICB9LFxuXG4gICAga2V5QmluZGluZ3M6IHtcbiAgICAgICdzaGlmdCt0YWI6a2V5ZG93bic6ICdfb25TaGlmdFRhYkRvd24nXG4gICAgfSxcblxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICB0YWJpbmRleDogMFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldCBpbnB1dEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLmlucHV0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmb2N1c2FibGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVGhlc2UgdHlwZXMgaGF2ZSBzb21lIGRlZmF1bHQgcGxhY2Vob2xkZXIgdGV4dDsgb3ZlcmxhcHBpbmdcbiAgICAgIC8vIHRoZSBsYWJlbCBvbiB0b3Agb2YgaXQgbG9va3MgdGVycmlibGUuIEF1dG8tZmxvYXQgdGhlIGxhYmVsIGluIHRoaXMgY2FzZS5cbiAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0ID0gW1wiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJtb250aFwiLFxuICAgICAgICAgIFwidGltZVwiLCBcIndlZWtcIiwgXCJmaWxlXCJdO1xuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl91cGRhdGVBcmlhTGFiZWxsZWRCeSgpO1xuXG4gICAgICAvLyBJbiB0aGUgMi4wIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQsIHRoaXMgaXMgaGFuZGxlZCBpbiBgb25Jcm9uSW5wdXRSZWFkeWAsXG4gICAgICAvLyBpLmUuIGFmdGVyIHRoZSBuYXRpdmUgaW5wdXQgaGFzIGZpbmlzaGVkIGRpc3RyaWJ1dGluZy4gSW4gdGhlIDEuMCB2ZXJzaW9uLFxuICAgICAgLy8gdGhlIGlucHV0IGlzIGluIHRoZSBzaGFkb3cgdHJlZSwgc28gaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cbiAgICAgIGlmICghUG9seW1lci5FbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQuaW5kZXhPZih0aGlzLmlucHV0RWxlbWVudC50eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FwcGVuZFN0cmluZ1dpdGhTcGFjZTogZnVuY3Rpb24oc3RyLCBtb3JlKSB7XG4gICAgICBpZiAoc3RyKSB7XG4gICAgICAgIHN0ciA9IHN0ciArICcgJyArIG1vcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBtb3JlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9LFxuXG4gICAgX29uQWRkb25BdHRhY2hlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBQb2x5bWVyLmRvbShldmVudCkucm9vdFRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuaWQpIHtcbiAgICAgICAgdGhpcy5fYXJpYURlc2NyaWJlZEJ5ID0gdGhpcy5fYXBwZW5kU3RyaW5nV2l0aFNwYWNlKHRoaXMuX2FyaWFEZXNjcmliZWRCeSwgdGFyZ2V0LmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpZCA9ICdwYXBlci1pbnB1dC1hZGQtb24tJyArIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0QWRkb25JRCsrO1xuICAgICAgICB0YXJnZXQuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5fYXJpYURlc2NyaWJlZEJ5ID0gdGhpcy5fYXBwZW5kU3RyaW5nV2l0aFNwYWNlKHRoaXMuX2FyaWFEZXNjcmliZWRCeSwgaWQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHNldHMgYW4gZXJyb3Igc3R5bGUgaWYgbmVlZGVkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRm9yd2FyZCBmb2N1cyB0byBpbnB1dEVsZW1lbnQuIE92ZXJyaWRlbiBmcm9tIElyb25Db250cm9sU3RhdGUuXG4gICAgICovXG4gICAgX2ZvY3VzQmx1ckhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBQb2x5bWVyLklyb25Db250cm9sU3RhdGUuX2ZvY3VzQmx1ckhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG5cbiAgICAgIC8vIEZvcndhcmQgdGhlIGZvY3VzIHRvIHRoZSBuZXN0ZWQgaW5wdXQuXG4gICAgICBpZiAodGhpcy5mb2N1c2VkICYmICF0aGlzLl9zaGlmdFRhYlByZXNzZWQgJiYgdGhpcy5fZm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHNoaWZ0K3RhYiBrZXlwcmVzcyBpcyBkZXRlY3RlZCBieSB0aGUgbWVudS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgICAqL1xuICAgIF9vblNoaWZ0VGFiRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBvbGRUYWJJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy5fc2hpZnRUYWJQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jywgb2xkVGFiSW5kZXgpO1xuICAgICAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgIH0sIDEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGVuIHZhbGlkYXRlcyB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBfaGFuZGxlQXV0b1ZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSlcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlcyB0aGUgY3Vyc29yIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbiBhZnRlciB1cGRhdGluZyB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhbHVlIFRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBzYXZlZC5cbiAgICAgKi9cbiAgICB1cGRhdGVWYWx1ZUFuZFByZXNlcnZlQ2FyZXQ6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XG4gICAgICAvLyBOb3QgYWxsIGVsZW1lbnRzIG1pZ2h0IGhhdmUgc2VsZWN0aW9uLCBhbmQgZXZlbiBpZiB0aGV5IGhhdmUgdGhlXG4gICAgICAvLyByaWdodCBwcm9wZXJ0aWVzLCBhY2Nlc3NpbmcgdGhlbSBtaWdodCB0aHJvdyBhbiBleGNlcHRpb24gKGxpa2UgZm9yXG4gICAgICAvLyA8aW5wdXQgdHlwZT1udW1iZXI+KVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBUaGUgY3Vyc29yIGF1dG9tYXRpY2FsbHkganVtcHMgdG8gdGhlIGVuZCBhZnRlciByZS1zZXR0aW5nIHRoZSB2YWx1ZSxcbiAgICAgICAgLy8gc28gcmVzdG9yZSBpdCB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvbkVuZCA9IHN0YXJ0O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBKdXN0IHNldCB0aGUgdmFsdWUgYW5kIGdpdmUgdXAgb24gdGhlIGNhcmV0LlxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbDogZnVuY3Rpb24oYWx3YXlzRmxvYXRMYWJlbCwgcGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlciB8fCBhbHdheXNGbG9hdExhYmVsO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlQXJpYUxhYmVsbGVkQnk6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhYmVsID0gUG9seW1lci5kb20odGhpcy5yb290KS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbGFiZWxsZWRCeTtcbiAgICAgIGlmIChsYWJlbC5pZCkge1xuICAgICAgICBsYWJlbGxlZEJ5ID0gbGFiZWwuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbGxlZEJ5ID0gJ3BhcGVyLWlucHV0LWxhYmVsLScgKyBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIuTmV4dExhYmVsSUQrKztcbiAgICAgICAgbGFiZWwuaWQgPSBsYWJlbGxlZEJ5O1xuICAgICAgfVxuICAgICAgdGhpcy5fYXJpYUxhYmVsbGVkQnkgPSBsYWJlbGxlZEJ5O1xuICAgIH0sXG5cbiAgICBfb25DaGFuZ2U6ZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIC8vIEluIHRoZSBTaGFkb3cgRE9NLCB0aGUgYGNoYW5nZWAgZXZlbnQgaXMgbm90IGxlYWtlZCBpbnRvIHRoZVxuICAgICAgLy8gYW5jZXN0b3IgdHJlZSwgc28gd2UgbXVzdCBkbyB0aGlzIG1hbnVhbGx5LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvc2hhZG93LyNldmVudHMtdGhhdC1hcmUtbm90LWxlYWtlZC1pbnRvLWFuY2VzdG9yLXRyZWVzLlxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICB0aGlzLmZpcmUoZXZlbnQudHlwZSwge3NvdXJjZUV2ZW50OiBldmVudH0sIHtcbiAgICAgICAgICBub2RlOiB0aGlzLFxuICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZXZlbnQuY2FuY2VsYWJsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2F1dG9mb2N1c0NoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IHJlc3BlY3QgdGhlIGF1dG9mb2N1cyBhdHRyaWJ1dGUgaWYgaXQncyBhcHBsaWVkIGFmdGVyXG4gICAgICAvLyB0aGUgcGFnZSBpcyBsb2FkZWQgKENocm9tZS9XZWJLaXQgZG8gcmVzcGVjdCBpdCksIHByZXZlbnRpbmcgYW5cbiAgICAgIC8vIGF1dG9mb2N1cyBhdHRyaWJ1dGUgc3BlY2lmaWVkIGluIG1hcmt1cCBmcm9tIHRha2luZyBlZmZlY3Qgd2hlbiB0aGVcbiAgICAgIC8vIGVsZW1lbnQgaXMgdXBncmFkZWQuIEFzIGEgd29ya2Fyb3VuZCwgaWYgdGhlIGF1dG9mb2N1cyBwcm9wZXJ0eSBpcyBzZXQsXG4gICAgICAvLyBhbmQgdGhlIGZvY3VzIGhhc24ndCBhbHJlYWR5IGJlZW4gbW92ZWQgZWxzZXdoZXJlLCB3ZSB0YWtlIGZvY3VzLlxuICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQpIHtcblxuICAgICAgICAvLyBJbiBJRSAxMSwgdGhlIGRlZmF1bHQgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgdGhlIHBhZ2Unc1xuICAgICAgICAvLyBvdXRlcm1vc3QgaHRtbCBlbGVtZW50LCBidXQgdGhlcmUgYXJlIGFsc28gY2FzZXMgKHVuZGVyIHRoZVxuICAgICAgICAvLyBwb2x5ZmlsbD8pIGluIHdoaWNoIHRoZSBhY3RpdmVFbGVtZW50IGlzIG5vdCBhIHJlYWwgSFRNTEVsZW1lbnQsIGJ1dFxuICAgICAgICAvLyBqdXN0IGEgcGxhaW4gb2JqZWN0LiBXZSBpZGVudGlmeSB0aGUgbGF0dGVyIGNhc2UgYXMgaGF2aW5nIG5vIHZhbGlkXG4gICAgICAgIC8vIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgdmFyIGlzQWN0aXZlRWxlbWVudFZhbGlkID0gYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIC8vIEhhcyBzb21lIG90aGVyIGVsZW1lbnQgaGFzIGFscmVhZHkgdGFrZW4gdGhlIGZvY3VzP1xuICAgICAgICB2YXIgaXNTb21lRWxlbWVudEFjdGl2ZSA9IGlzQWN0aXZlRWxlbWVudFZhbGlkICYmXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8qIElFIDExICovXG4gICAgICAgIGlmICghaXNTb21lRWxlbWVudEFjdGl2ZSkge1xuICAgICAgICAgIC8vIE5vIHNwZWNpZmljIGVsZW1lbnQgaGFzIHRha2VuIHRoZSBmb2N1cyB5ZXQsIHNvIHdlIGNhbiB0YWtlIGl0LlxuICAgICAgICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiogQHBvbHltZXJCZWhhdmlvciAqL1xuICBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvciA9IFtcbiAgICBQb2x5bWVyLklyb25Db250cm9sU3RhdGUsXG4gICAgUG9seW1lci5Jcm9uQTExeUtleXNCZWhhdmlvcixcbiAgICBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvckltcGxcbiAgXTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1iZWhhdmlvci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5gPHBhcGVyLWlucHV0LWNoYXItY291bnRlcj5gIGlzIGEgY2hhcmFjdGVyIGNvdW50ZXIgZm9yIHVzZSB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIEl0XG5zaG93cyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgZW50ZXJlZCBpbiB0aGUgaW5wdXQgYW5kIHRoZSBtYXggbGVuZ3RoIGlmIGl0IGlzIHNwZWNpZmllZC5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8aW5wdXQgbWF4bGVuZ3RoPVwiMjBcIj5cbiAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgbWl4aW4gaXMgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZWxlbWVudCB8IGB7fWBcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0LWNoYXItY291bnRlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzcGFuPltbX2NoYXJDb3VudGVyU3RyXV08L3NwYW4+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQtY2hhci1jb3VudGVyJyxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvclxuICAgIF0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBfY2hhckNvdW50ZXJTdHI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJzAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgICAqIH19IHN0YXRlIC1cbiAgICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBpZiAoIXN0YXRlLmlucHV0RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnZhbHVlID0gc3RhdGUudmFsdWUgfHwgJyc7XG5cbiAgICAgIHZhciBjb3VudGVyID0gc3RhdGUudmFsdWUudG9TdHJpbmcoKS5sZW5ndGgudG9TdHJpbmcoKTtcblxuICAgICAgaWYgKHN0YXRlLmlucHV0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKSB7XG4gICAgICAgIGNvdW50ZXIgKz0gJy8nICsgc3RhdGUuaW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NoYXJDb3VudGVyU3RyID0gY291bnRlcjtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNoYXItY291bnRlci5odG1sIiwiXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8bGluayByZWw9c3R5bGVzaGVldCB0eXBlPXRleHQvY3NzIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubzo0MDAsNzAwfFJvYm90bzo0MDAsMzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljXFxcIiBjcm9zc29yaWdpbj1hbm9ueW1vdXM+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9mb250LXJvYm90by9yb2JvdG8uaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuXG48IS0tXG5gPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGlzIGEgY29udGFpbmVyIGZvciBhIGA8bGFiZWw+YCwgYW4gYDxpcm9uLWlucHV0PmAgb3JcbmA8dGV4dGFyZWE+YCBhbmQgb3B0aW9uYWwgYWRkLW9uIGVsZW1lbnRzIHN1Y2ggYXMgYW4gZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXJcbmNvdW50ZXIsIHVzZWQgdG8gaW1wbGVtZW50IE1hdGVyaWFsIERlc2lnbiB0ZXh0IGZpZWxkcy5cblxuRm9yIGV4YW1wbGU6XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gIGluc3RlYWQgb2YgdGhlIGFib3ZlLlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5Zb3UgY2FuIHN0eWxlIHRoZSBuZXN0ZWQgPGlucHV0PiBob3dldmVyIHlvdSB3YW50OyBpZiB5b3Ugd2FudCBpdCB0byBsb29rIGxpa2UgYVxuTWF0ZXJpYWwgRGVzaWduIGlucHV0LCB5b3UgY2FuIHN0eWxlIGl0IHdpdGggdGhlIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZSBtaXhpbi5cblxuRG8gbm90IHdyYXAgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBhcm91bmQgZWxlbWVudHMgdGhhdCBhbHJlYWR5IGluY2x1ZGUgaXQsIHN1Y2ggYXMgYDxwYXBlci1pbnB1dD5gLlxuRG9pbmcgc28gbWF5IGNhdXNlIGV2ZW50cyB0byBib3VuY2UgaW5maW5pdGVseSBiZXR3ZWVuIHRoZSBjb250YWluZXIgYW5kIGl0cyBjb250YWluZWQgZWxlbWVudC5cblxuIyMjIExpc3RlbmluZyBmb3IgaW5wdXQgY2hhbmdlc1xuXG5CeSBkZWZhdWx0LCBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzIG9uIHRoZSBgYmluZC12YWx1ZWAgYXR0cmlidXRlIG9uIGl0cyBjaGlsZHJlbiBub2RlcyBhbmQgcGVyZm9ybVxudGFza3Mgc3VjaCBhcyBhdXRvLXZhbGlkYXRpbmcgYW5kIGxhYmVsIHN0eWxpbmcgd2hlbiB0aGUgYGJpbmQtdmFsdWVgIGNoYW5nZXMuIFlvdSBjYW4gY29uZmlndXJlXG50aGUgYXR0cmlidXRlIGl0IGxpc3RlbnMgdG8gd2l0aCB0aGUgYGF0dHItZm9yLXZhbHVlYCBhdHRyaWJ1dGUuXG5cbiMjIyBVc2luZyBhIGN1c3RvbSBpbnB1dCBlbGVtZW50XG5cbllvdSBjYW4gdXNlIGEgY3VzdG9tIGlucHV0IGVsZW1lbnQgaW4gYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLCBmb3IgZXhhbXBsZSB0byBpbXBsZW1lbnQgYVxuY29tcG91bmQgaW5wdXQgZmllbGQgbGlrZSBhIHNvY2lhbCBzZWN1cml0eSBudW1iZXIgaW5wdXQuIFRoZSBjdXN0b20gaW5wdXQgZWxlbWVudCBzaG91bGQgaGF2ZSB0aGVcbmBwYXBlci1pbnB1dC1pbnB1dGAgY2xhc3MsIGhhdmUgYSBgbm90aWZ5OnRydWVgIHZhbHVlIHByb3BlcnR5IGFuZCBvcHRpb25hbGx5IGltcGxlbWVudHNcbmBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCBpZiBpdCBpcyB2YWxpZGF0YWJsZS5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgYXR0ci1mb3ItdmFsdWU9XCJzc24tdmFsdWVcIj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Tb2NpYWwgc2VjdXJpdHkgbnVtYmVyPC9sYWJlbD5cbiAgICAgIDxzc24taW5wdXQgc2xvdD1cImlucHV0XCIgY2xhc3M9XCJwYXBlci1pbnB1dC1pbnB1dFwiPjwvc3NuLWlucHV0PlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5cbklmIHlvdSdyZSB1c2luZyBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaW1wZXJhdGl2ZWx5LCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmVcbnRoYXQgeW91IGF0dGFjaCBpdHMgY2hpbGRyZW4gKHRoZSBgaXJvbi1pbnB1dGAgYW5kIHRoZSBvcHRpb25hbCBgbGFiZWxgKSBiZWZvcmUgeW91XG5hdHRhY2ggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXRzZWxmLCBzbyB0aGF0IGl0IGNhbiBiZSBzZXQgdXAgY29ycmVjdGx5LlxuXG4jIyMgVmFsaWRhdGlvblxuXG5JZiB0aGUgYGF1dG8tdmFsaWRhdGVgIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBpbnB1dCBjb250YWluZXIgd2lsbCB2YWxpZGF0ZSB0aGUgaW5wdXQgYW5kIHVwZGF0ZVxudGhlIGNvbnRhaW5lciBzdHlsaW5nIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG5cbiMjIyBBZGQtb25zXG5cbkFkZC1vbnMgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aXRoIHRoZSBgYWRkLW9uYCBhdHRyaWJ1dGUgYW5kXG5pbXBsZW1lbnRzIHRoZSBgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvcmAgYmVoYXZpb3IuIFRoZXkgYXJlIG5vdGlmaWVkIHdoZW4gdGhlIGlucHV0IHZhbHVlXG5vciB2YWxpZGl0eSBjaGFuZ2VzLCBhbmQgbWF5IGltcGxlbWVudCBmdW5jdGlvbmFsaXR5IHN1Y2ggYXMgZXJyb3IgbWVzc2FnZXMgb3IgY2hhcmFjdGVyIGNvdW50ZXJzLlxuVGhleSBhcHBlYXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQuXG5cbiMjIyBQcmVmaXhlcyBhbmQgc3VmZml4ZXNcblRoZXNlIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYHByZWZpeGBcbm9yIGBzdWZmaXhgIGF0dHJpYnV0ZSwgYW5kIGFyZSBkaXNwbGF5ZWQgaW5saW5lIHdpdGggdGhlIGlucHV0LCBiZWZvcmUgb3IgYWZ0ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGRpdiBzbG90PVwicHJlZml4XCI+JDwvZGl2PlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPlRvdGFsPC9sYWJlbD5cbiAgICAgIDxpcm9uLWlucHV0IHNsb3Q9XCJpbnB1dFwiPlxuICAgICAgICA8aW5wdXQ+XG4gICAgICA8L2lyb24taW5wdXQ+XG4gICAgICAvLyBJbiBQb2x5bWVyIDEuMCwgeW91IHdvdWxkIHVzZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIHNsb3Q9XCJpbnB1dFwiPmAgaW5zdGVhZCBvZiB0aGUgYWJvdmUuXG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgZm9jdXNlZCB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGlzIGludmFsaWQgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvcmAgfCBJbnB1dCBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgd2hlbiBpdCdzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmdgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiBmbG9hdGluZyB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtaW52YWxpZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGludmFsaWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IHNwaW5uZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBjbGVhciBidXR0b24gfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1wcmVmaXhgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgcHJlZml4IHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtc3VmZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHN1ZmZpeCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGlzIGBkaXNwbGF5OmJsb2NrYCBieSBkZWZhdWx0LCBidXQgeW91IGNhbiBzZXQgdGhlIGBpbmxpbmVgIGF0dHJpYnV0ZSB0byBtYWtlIGl0XG5gZGlzcGxheTppbmxpbmUtYmxvY2tgLlxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXQtY29udGFpbmVyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHRvIG1ha2UgYSBzdGFja2luZyBjb250ZXh0ICovXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICB9O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2lubGluZV0pIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBvcGFjaXR5OiAwLjMzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUuaXMtaGlnaGxpZ2h0ZWQgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZS5pcy1pbnZhbGlkIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC51bmZvY3VzZWQtbGluZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC51bmZvY3VzZWQtbGluZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtYXV0bztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcblxuICAgICAgICAvKiBTaW5jZSB3ZSBzY2FsZSB0byA3NS8xMDAgb2YgdGhlIHNpemUsIHdlIGFjdHVhbGx5IGhhdmUgMTAwLzc1IG9mIHRoZVxuICAgICAgICBvcmlnaW5hbCBzcGFjZSBub3cgYXZhaWxhYmxlICovXG4gICAgICAgIHdpZHRoOiAxMzMlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZztcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIC8qIFRPRE8obm9tcyk6IEZpZ3VyZSBvdXQgd2h5IGxlYXZpbmcgdGhlIHdpZHRoIGF0IDEzMyUgYmVmb3JlIHRoZSBhbmltYXRpb25cbiAgICAgICAgICogYWN0dWFsbHkgbWFrZXNcbiAgICAgICAgICogaXQgd2lkZXIgb24gdGhlIHJpZ2h0IHNpZGUsIG5vdCBsZWZ0IHNpZGUsIGFzIHlvdSB3b3VsZCBleHBlY3QgaW4gUlRMICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlyb24taW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCk6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcmVmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXByZWZpeDtcbiAgICAgIH1cblxuICAgICAgLnN1ZmZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1zdWZmaXg7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBoaWRkZW49XCJbW25vTGFiZWxGbG9hdF1dXCI+Jm5ic3A7PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVmaXhcIj48c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90Pjwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlSW5wdXRDb250ZW50Q2xhc3Mobm9MYWJlbEZsb2F0LGFsd2F5c0Zsb2F0TGFiZWwsZm9jdXNlZCxpbnZhbGlkLF9pbnB1dEhhc0NvbnRlbnQpXV1cIiBpZD1cImxhYmVsQW5kSW5wdXRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PC9zbG90PlxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWZmaXhcIj48c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZVVuZGVybGluZUNsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVuZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJhZGQtb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQtY29udGFpbmVyJyxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIFRoZSBsYWJlbCBkaXNhcHBlYXJzIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzXG4gICAgICAgKiBub3QgbnVsbC5cbiAgICAgICAqL1xuICAgICAgbm9MYWJlbEZsb2F0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYXR0cmlidXRlIHRvIGxpc3RlbiBmb3IgdmFsdWUgY2hhbmdlcyBvbi5cbiAgICAgICAqL1xuICAgICAgYXR0ckZvclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdiaW5kLXZhbHVlJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIGl0IGNoYW5nZXMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgICogY2hhbmdlcyBpZiBhdXRvLXZhbGlkYXRpbmcsIG9yIHdoZW4gdGhlIGBpcm9uLWlucHV0LXZhbGlkYXRlYCBldmVudCBpcyBoZWFyZCBmcm9tIGEgY2hpbGQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaGFzIGZvY3VzLlxuICAgICAgICovXG4gICAgICBmb2N1c2VkOiB7XG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2FkZG9uczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICAvLyBkbyBub3Qgc2V0IGEgZGVmYXVsdCB2YWx1ZSBoZXJlIGludGVudGlvbmFsbHkgLSBpdCB3aWxsIGJlIGluaXRpYWxpemVkIGxhemlseSB3aGVuIGFcbiAgICAgICAgLy8gZGlzdHJpYnV0ZWQgY2hpbGQgaXMgYXR0YWNoZWQsIHdoaWNoIG1heSBvY2N1ciBiZWZvcmUgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIC8vIGluIHBvbHlmaWxsLlxuICAgICAgfSxcblxuICAgICAgX2lucHV0SGFzQ29udGVudDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF9pbnB1dFNlbGVjdG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdpbnB1dCxpcm9uLWlucHV0LHRleHRhcmVhLC5wYXBlci1pbnB1dC1pbnB1dCdcbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZE9uRm9jdXM6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbkJsdXI6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZE9uSW5wdXQ6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRWYWx1ZUNoYW5nZWQ6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25WYWx1ZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICdhZGRvbi1hdHRhY2hlZCc6ICdfb25BZGRvbkF0dGFjaGVkJyxcbiAgICAgICdpcm9uLWlucHV0LXZhbGlkYXRlJzogJ19vbklyb25JbnB1dFZhbGlkYXRlJ1xuICAgIH0sXG5cbiAgICBnZXQgX3ZhbHVlQ2hhbmdlZEV2ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0ckZvclZhbHVlICsgJy1jaGFuZ2VkJztcbiAgICB9LFxuXG4gICAgZ2V0IF9wcm9wZXJ0eUZvclZhbHVlKCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuQ2FzZU1hcC5kYXNoVG9DYW1lbENhc2UodGhpcy5hdHRyRm9yVmFsdWUpO1xuICAgIH0sXG5cbiAgICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLmRvbSh0aGlzKS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0U2VsZWN0b3IpO1xuICAgIH0sXG5cbiAgICBnZXQgX2lucHV0RWxlbWVudFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXSB8fCB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5fYWRkb25zKSB7XG4gICAgICAgIHRoaXMuX2FkZG9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cywgdHJ1ZSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1ciwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmF0dHJGb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl92YWx1ZUNoYW5nZWRFdmVudCwgdGhpcy5fYm91bmRWYWx1ZUNoYW5nZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgJiYgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT0gJycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLl9hZGRvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGhpcy5fYWRkb25zLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fYWRkb25zLnB1c2godGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgX29uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgfSxcblxuICAgIF9vbklucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgX29uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAvLyBQcm9ibGVtOiBpZiB0aGUgaW5wdXQgaXMgcmVxdWlyZWQgYnV0IGhhcyBubyB0ZXh0IGVudGVyZWQsIHdlIHNob3VsZFxuICAgICAgLy8gb25seSB2YWxpZGF0ZSBpdCBvbiBibHVyIChzbyB0aGF0IGFuIGVtcHR5IGZvcm0gZG9lc24ndCBjb21lIHVwIHJlZFxuICAgICAgLy8gaW1tZWRpYXRlbHk7IGhvd2V2ZXIsIGluIHRoaXMgaGFuZGxlciwgd2UgZG9uJ3Qga25vdyB3aGV0aGVyIHRoaXMgaXNcbiAgICAgIC8vIHRoZSBib290aW5nIHVwIHZhbHVlIG9yIGEgdmFsdWUgaW4gdGhlIGZ1dHVyZS4gSSBhbSBhc3N1bWluZyB0aGF0IHRoZVxuICAgICAgLy8gY2FzZSAgd2UgY2FyZSBhYm91dCBtYW5pZmVzdHMgaXRzZWxmIHdoZW4gdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAgICAgIC8vIElmIHRoaXMgY2F1c2VzIGZ1dHVyZSBwcm9ibGVtcywgd2UgbmVlZCB0byBkbyBzb21ldGhpbmcgbGlrZSB0cmFjayB3aGV0aGVyXG4gICAgICAvLyB0aGUgaXJvbi1pbnB1dC1yZWFkeSBldmVudCBoYXMgZmlyZWQsIGFuZCB0aGlzIGhhbmRsZXIgY2FtZSBiZWZvcmUgdGhhdC5cblxuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZShldmVudC50YXJnZXQpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWU7XG5cbiAgICAgIC8vIHR5cGU9XCJudW1iZXJcIiBoYWNrIG5lZWRlZCBiZWNhdXNlIHRoaXMudmFsdWUgaXMgZW1wdHkgdW50aWwgaXQncyB2YWxpZFxuICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwIHx8IChpbnB1dEVsZW1lbnQudHlwZSA9PT0gJ251bWJlcicgJiYgIWlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0SGFzQ29udGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVBZGRvbnMoe1xuICAgICAgICBpbnB1dEVsZW1lbnQ6IGlucHV0RWxlbWVudCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbnZhbGlkOiB0aGlzLmludmFsaWRcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlICYmIGlucHV0RWxlbWVudCkge1xuICAgICAgICB2YXIgdmFsaWQ7XG5cbiAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGF0ZSkge1xuICAgICAgICAgIHZhbGlkID0gaW5wdXRFbGVtZW50LnZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHRoaXMgbGFzdCB0byBub3RpZnkgdGhlIGFkZC1vbnMuXG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZShpbnB1dEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBfb25Jcm9uSW5wdXRWYWxpZGF0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX2lucHV0RWxlbWVudC5pbnZhbGlkO1xuICAgIH0sXG5cbiAgICBfaW52YWxpZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkZG9ucyh7aW52YWxpZDogdGhpcy5pbnZhbGlkfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB0byB1cGRhdGUgdGhlIHN0YXRlIG9mIGFkZC1vbnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIEFkZC1vbiBzdGF0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVBZGRvbnM6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBmb3IgKHZhciBhZGRvbiwgaW5kZXggPSAwOyBhZGRvbiA9IHRoaXMuX2FkZG9uc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgYWRkb24udXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NvbXB1dGVJbnB1dENvbnRlbnRDbGFzczogZnVuY3Rpb24obm9MYWJlbEZsb2F0LCBhbHdheXNGbG9hdExhYmVsLCBmb2N1c2VkLCBpbnZhbGlkLCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICB2YXIgY2xzID0gJ2lucHV0LWNvbnRlbnQnO1xuICAgICAgaWYgKCFub0xhYmVsRmxvYXQpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXG4gICAgICAgIGlmIChhbHdheXNGbG9hdExhYmVsIHx8IF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1mbG9hdGluZyc7XG4gICAgICAgICAgLy8gSWYgdGhlIGxhYmVsIGlzIGZsb2F0aW5nLCBpZ25vcmUgYW55IG9mZnNldHMgdGhhdCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAgLy8gYXBwbGllZCBmcm9tIGEgcHJlZml4IGVsZW1lbnQuXG4gICAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcblxuICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgICAgIGNscyArPSBcIiBsYWJlbC1pcy1oaWdobGlnaHRlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXaGVuIHRoZSBsYWJlbCBpcyBub3QgZmxvYXRpbmcsIGl0IHNob3VsZCBvdmVybGFwIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWhpZGRlbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgZm9jdXNlZCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH0sXG5cbiAgICBfY29tcHV0ZVVuZGVybGluZUNsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgICB2YXIgY2xzID0gJ3VuZGVybGluZSc7XG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1oaWdobGlnaHRlZCdcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbHM7XG4gICAgfSxcblxuICAgIF9jb21wdXRlQWRkT25Db250ZW50Q2xhc3M6IGZ1bmN0aW9uKGZvY3VzZWQsIGludmFsaWQpIHtcbiAgICAgIHZhciBjbHMgPSAnYWRkLW9uLWNvbnRlbnQnO1xuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5gPHBhcGVyLWlucHV0LWVycm9yPmAgaXMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgdXNlIHdpdGggYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gVGhlIGVycm9yIGlzXG5kaXNwbGF5ZWQgd2hlbiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBgaW52YWxpZGAuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGlucHV0IHBhdHRlcm49XCJbMC05XSpcIj5cbiAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBzbG90PVwiYWRkLW9uXCI+T25seSBudW1iZXJzIGFyZSBhbGxvd2VkITwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBUaGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgZXJyb3IgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWVycm9yYCAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGVycm9yICAgICAgICB8IGB7fWBcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0LWVycm9yXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWVycm9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9O1xuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQtZXJyb3InLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yXG4gICAgXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgZXJyb3IgaXMgc2hvd2luZy5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgICAqIH19IHN0YXRlIC1cbiAgICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB0aGlzLl9zZXRJbnZhbGlkKHN0YXRlLmludmFsaWQpO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtZXJyb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWltYWdlL2lyb24taW1hZ2UuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWxcIj5cblxuPCEtLVxuTWF0ZXJpYWwgZGVzaWduOiBbQ2FyZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9jYXJkcy5odG1sKVxuXG5gcGFwZXItY2FyZGAgaXMgYSBjb250YWluZXIgd2l0aCBhIGRyb3Agc2hhZG93LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5Tb21lIGNvbnRlbnQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5Tb21lIGFjdGlvbjwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1jYXJkPlxuXG5FeGFtcGxlIC0gdG9wIGNhcmQgaW1hZ2U6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiIGltYWdlPVwiL3BhdGgvdG8vaW1hZ2UucG5nXCIgYWx0PVwiaW1hZ2VcIj5cbiAgICAgIC4uLlxuICAgIDwvcGFwZXItY2FyZD5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQnkgZGVmYXVsdCwgdGhlIGBhcmlhLWxhYmVsYCB3aWxsIGJlIHNldCB0byB0aGUgdmFsdWUgb2YgdGhlIGBoZWFkaW5nYCBhdHRyaWJ1dGUuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNhcmQgfCBgLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGhlYWRlciB0ZXh0IHwgYCMwMDBgXG5gLS1wYXBlci1jYXJkLWhlYWRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0ZXh0IG92ZXJsYXBwaW5nIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGNvbnRlbnQgc2VjdGlvbnwgYHt9YFxuYC0tcGFwZXItY2FyZC1hY3Rpb25zYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgYWN0aW9uIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItY2FyZFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1jYXJkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQ7XG4gICAgICB9XG5cbiAgICAgIC8qIElFIDEwIHN1cHBvcnQgZm9yIEhUTUw1IGhpZGRlbiBhdHRyICovXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgaXJvbi1pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1pcm9uLWltYWdlLXdpZHRoOiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yLCAjMDAwKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0Lm92ZXItaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWFjdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMlwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGlyb24taW1hZ2VcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaW1hZ2VdXVwiXG4gICAgICAgICAgYXJpYS1oaWRkZW4kPVwiW1tfaXNIaWRkZW4oaW1hZ2UpXV1cIlxuICAgICAgICAgIHNyYz1cIltbaW1hZ2VdXVwiXG4gICAgICAgICAgYWx0PVwiW1thbHRdXVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVySW1hZ2VdXVwiXG4gICAgICAgICAgcHJlbG9hZD1cIltbcHJlbG9hZEltYWdlXV1cIlxuICAgICAgICAgIGZhZGU9XCJbW2ZhZGVJbWFnZV1dXCI+PC9pcm9uLWltYWdlPlxuICAgICAgPGRpdiBoaWRkZW4kPVwiW1shaGVhZGluZ11dXCIgY2xhc3MkPVwidGl0bGUtdGV4dCBbW19jb21wdXRlSGVhZGluZ0NsYXNzKGltYWdlKV1dXCI+W1toZWFkaW5nXV08L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdwYXBlci1jYXJkJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpdGxlIG9mIHRoZSBjYXJkLlxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGluZzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfaGVhZGluZ0NoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1cmwgb2YgdGhlIHRpdGxlIGltYWdlIG9mIHRoZSBjYXJkLlxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IGFsdGVybmF0aXZlIG9mIHRoZSBjYXJkJ3MgdGl0bGUgaW1hZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBhbHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGltYWdlIHVybCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZVxuICAgICAgICAgKiBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBpbWFnZSBpcyBmdWxseSByZW5kZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWRJbWFnZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZWxvYWRJbWFnZWAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZUltYWdlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlXG4gICAgICAgICAqIGltYWdlIHRvIGZhZGUgaW50byBwbGFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGZhZGVJbWFnZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlIGhhc1xuICAgICAgICAgKiBsb2FkZWQuIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50IHJlbmRlcmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVySW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHotZGVwdGggb2YgdGhlIGNhcmQsIGZyb20gMC01LlxuICAgICAgICAgKi9cbiAgICAgICAgZWxldmF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIGNhcmQgc2hhZG93IHdoZW4gc2V0dGluZyBhIG5ld1xuICAgICAgICAgKiBgemAgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlZFNoYWRvdzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSBwcm9wZXJ0eSB1c2VkIHRvIHBhc3MgZG93biB0aGUgYGFuaW1hdGVkU2hhZG93YCB2YWx1ZSB0b1xuICAgICAgICAgKiB0aGUgdW5kZXJseWluZyBwYXBlci1tYXRlcmlhbCBzdHlsZSAoc2luY2UgdGhleSBoYXZlIGRpZmZlcmVudCBuYW1lcykuXG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBbmltYXRlZChhbmltYXRlZFNoYWRvdyknXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRm9ybWF0IGZ1bmN0aW9uIGZvciBhcmlhLWhpZGRlbi4gVXNlIHRoZSAhIG9wZXJhdG9yIHJlc3VsdHMgaW4gdGhlXG4gICAgICAgKiBlbXB0eSBzdHJpbmcgd2hlbiBnaXZlbiBhIGZhbHN5IHZhbHVlLlxuICAgICAgICovXG4gICAgICBfaXNIaWRkZW46IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZSA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gICAgICB9LFxuXG4gICAgICBfaGVhZGluZ0NoYW5nZWQ6IGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWFkaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnKSxcbiAgICAgICAgICAgIGN1cnJlbnRMYWJlbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50TGFiZWwgIT09ICdzdHJpbmcnIHx8IGN1cnJlbnRMYWJlbCA9PT0gY3VycmVudEhlYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGhlYWRpbmcpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUhlYWRpbmdDbGFzczogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlID8gJyBvdmVyLWltYWdlJyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVBbmltYXRlZDogZnVuY3Rpb24oYW5pbWF0ZWRTaGFkb3cpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGVkU2hhZG93O1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5gaXJvbi1pbWFnZWAgaXMgYW4gZWxlbWVudCBmb3IgZGlzcGxheWluZyBhbiBpbWFnZSB0aGF0IHByb3ZpZGVzIHVzZWZ1bCBzaXppbmcgYW5kXG5wcmVsb2FkaW5nIG9wdGlvbnMgbm90IGZvdW5kIG9uIHRoZSBzdGFuZGFyZCBgPGltZz5gIHRhZy5cblxuVGhlIGBzaXppbmdgIG9wdGlvbiBhbGxvd3MgdGhlIGltYWdlIHRvIGJlIGVpdGhlciBjcm9wcGVkIChgY292ZXJgKSBvclxubGV0dGVyYm94ZWQgKGBjb250YWluYCkgdG8gZmlsbCBhIGZpeGVkIHVzZXItc2l6ZSBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG5cblRoZSBgcHJlbG9hZGAgb3B0aW9uIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVuZGVyaW5nIHRoZSBpbWFnZSB1bnRpbCB0aGVcbmltYWdlIGlzIGZ1bGx5IGxvYWRlZC4gIEluIHRoZSBpbnRlcmltLCBlaXRoZXIgdGhlIGVsZW1lbnQncyBDU1MgYGJhY2tncm91bmQtY29sb3JgXG5jYW4gYmUgYmUgdXNlZCBhcyB0aGUgcGxhY2Vob2xkZXIsIG9yIHRoZSBgcGxhY2Vob2xkZXJgIHByb3BlcnR5IGNhbiBiZVxuc2V0IHRvIGEgVVJMIChwcmVmZXJhYmx5IGEgZGF0YS1VUkksIGZvciBpbnN0YW50IHJlbmRlcmluZykgZm9yIGFuXG5wbGFjZWhvbGRlciBpbWFnZS5cblxuVGhlIGBmYWRlYCBvcHRpb24gKG9ubHkgdmFsaWQgd2hlbiBgcHJlbG9hZGAgaXMgc2V0KSB3aWxsIGNhdXNlIHRoZSBwbGFjZWhvbGRlclxuaW1hZ2UvY29sb3IgdG8gYmUgZmFkZWQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIHJlbmRlcmVkLlxuXG5FeGFtcGxlczpcblxuICBCYXNpY2FsbHkgaWRlbnRpY2FsIHRvIGA8aW1nIHNyYz1cIi4uLlwiPmAgdGFnOlxuXG4gICAgPGlyb24taW1hZ2Ugc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBsZXR0ZXJib3ggdGhlIGltYWdlIHRvIGZpdDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBzaXppbmc9XCJjb250YWluXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgY3JvcCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvdmVyXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBsaWdodC1ncmF5IGJhY2tncm91bmQgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIHNob3cgYSBiYXNlLTY0IGVuY29kZWQgcGxhY2Vob2xkZXIgaW1hZ2UgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHBsYWNlaG9sZGVyPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LC4uLlwiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBmYWRlIHRoZSBsaWdodC1ncmF5IGJhY2tncm91bmQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1wiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgZmFkZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvICNwbGFjZWhvbGRlciB8IGB7fWBcbmAtLWlyb24taW1hZ2Utd2lkdGhgIHwgU2V0cyB0aGUgd2lkdGggb2YgdGhlIHdyYXBwZWQgaW1hZ2UgfCBgYXV0b2BcbmAtLWlyb24taW1hZ2UtaGVpZ2h0YCB8IFNldHMgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pbWFnZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWltYWdlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjYmFzZVVSSUFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNzaXplZEltZ0RpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pbWFnZS13aWR0aCwgYXV0byk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taXJvbi1pbWFnZS1oZWlnaHQsIGF1dG8pO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2l6aW5nXSkgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgIEBhcHBseSAtLWlyb24taW1hZ2UtcGxhY2Vob2xkZXI7XG4gICAgICB9XG5cbiAgICAgICNwbGFjZWhvbGRlci5mYWRlZC1vdXQge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8YSBpZD1cImJhc2VVUklBbmNob3JcIiBocmVmPVwiI1wiPjwvYT5cbiAgICA8ZGl2IGlkPVwic2l6ZWRJbWdEaXZcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkhpZGRlbihzaXppbmcpXV1cIlxuICAgICAgYXJpYS1oaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW4oYWx0KV1dXCJcbiAgICAgIGFyaWEtbGFiZWwkPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbChhbHQsIHNyYyldXVwiPjwvZGl2PlxuICAgIDxpbWcgaWQ9XCJpbWdcIlxuICAgICAgYWx0JD1cIltbYWx0XV1cIlxuICAgICAgaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdIaWRkZW4oc2l6aW5nKV1dXCJcbiAgICAgIGNyb3Nzb3JpZ2luJD1cIltbY3Jvc3NvcmlnaW5dXVwiXG4gICAgICBvbi1sb2FkPVwiX2ltZ09uTG9hZFwiXG4gICAgICBvbi1lcnJvcj1cIl9pbWdPbkVycm9yXCI+XG4gICAgPGRpdiBpZD1cInBsYWNlaG9sZGVyXCJcbiAgICAgIGhpZGRlbiQ9XCJbW19jb21wdXRlUGxhY2Vob2xkZXJIaWRkZW4ocHJlbG9hZCwgZmFkZSwgbG9hZGluZywgbG9hZGVkKV1dXCJcbiAgICAgIGNsYXNzJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZShwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIj48L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdpcm9uLWltYWdlJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFVSTCBvZiBhbiBpbWFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHNyYzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaG9ydCB0ZXh0IGFsdGVybmF0aXZlIGZvciB0aGUgaW1hZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBhbHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ09SUyBlbmFibGVkIGltYWdlcyBzdXBwb3J0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZVxuICAgICAgICAgKi9cbiAgICAgICAgY3Jvc3NvcmlnaW46IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCB0aGUgaW1hZ2UgaXMgcHJldmVudGVkIGZyb20gbG9hZGluZyBhbmQgYW55IHBsYWNlaG9sZGVyIGlzXG4gICAgICAgICAqIHNob3duLiAgVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gYSBiaW5kaW5nIHRvIHRoZSBzcmMgcHJvcGVydHkgaXMga25vd24gdG9cbiAgICAgICAgICogYmUgaW52YWxpZCwgdG8gcHJldmVudCA0MDQgcmVxdWVzdHMuXG4gICAgICAgICAqL1xuICAgICAgICBwcmV2ZW50TG9hZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgaW1hZ2UuICBWYWxpZCB2YWx1ZXMgYXJlIGBjb250YWluYCAoZnVsbFxuICAgICAgICAgKiBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIGlzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYW5kXG4gICAgICAgICAqIGxldHRlcmJveGVkKSBvciBgY292ZXJgIChpbWFnZSBpcyBjcm9wcGVkIGluIG9yZGVyIHRvIGZ1bGx5IGNvdmVyIHRoZVxuICAgICAgICAgKiBib3VuZHMgb2YgdGhlIGVsZW1lbnQpLCBvciBgbnVsbGAgKGRlZmF1bHQ6IGltYWdlIHRha2VzIG5hdHVyYWwgc2l6ZSkuXG4gICAgICAgICAqL1xuICAgICAgICBzaXppbmc6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYSBzaXppbmcgb3B0aW9uIGlzIHVzZWQgKGBjb3ZlcmAgb3IgYGNvbnRhaW5gKSwgdGhpcyBkZXRlcm1pbmVzXG4gICAgICAgICAqIGhvdyB0aGUgaW1hZ2UgaXMgYWxpZ25lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYm91bmRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICdjZW50ZXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBgc3JjYCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBgcGxhY2Vob2xkZXJgXG4gICAgICAgICAqIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBuZXcgaW1hZ2UgaGFzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZSBoYXNcbiAgICAgICAgICogbG9hZGVkLiAgVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnQgcmVuZGVyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfcGxhY2Vob2xkZXJDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVsb2FkYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlIGltYWdlIHRvXG4gICAgICAgICAqIGZhZGUgaW50byBwbGFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGZhZGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpcyB0cnVlIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGxvYWRlZDoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCB0cmFja3MgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGltYWdlIHdoZW4gdGhlIGBwcmVsb2FkYFxuICAgICAgICAgKiBvcHRpb24gaXMgdXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoYXQgdGhlIGxhc3Qgc2V0IGBzcmNgIGZhaWxlZCB0byBsb2FkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB3aWR0aCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc28gYmVcbiAgICAgICAgICogc2V0IHZpYSBDU1MuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDoge1xuICAgICAgICAgIG9ic2VydmVyOiAnX3dpZHRoQ2hhbmdlZCcsXG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgaGVpZ2h0IG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZVxuICAgICAgICAgKiBzZXQgdmlhIENTUy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF0dHJpYnV0ZSBoZWlnaHRcbiAgICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDoge1xuICAgICAgICAgIG9ic2VydmVyOiAnX2hlaWdodENoYW5nZWQnLFxuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAgICdfdHJhbnNmb3JtQ2hhbmdlZChzaXppbmcsIHBvc2l0aW9uKScsXG4gICAgICAgICdfbG9hZFN0YXRlT2JzZXJ2ZXIoc3JjLCBwcmV2ZW50TG9hZCknXG4gICAgICBdLFxuXG4gICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9pbWdPbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldExvYWRlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgfSxcblxuICAgICAgX2ltZ09uRXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldEVycm9yKHRydWUpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wcmVsb2FkIHx8ICghdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wcmVsb2FkICYmIHRoaXMuZmFkZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMubG9hZGVkKSA/ICdmYWRlZC1vdXQnIDogJyc7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zaXppbmc7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbHQgPT09ICcnID8gJ3RydWUnIDogdW5kZWZpbmVkO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdEaXZBUklBTGFiZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5hbHQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hbHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb2x5bWVyLlJlc29sdmVVcmwucmVzb2x2ZVVybCB3aWxsIHJlc29sdmUgJycgcmVsYXRpdmUgdG8gYSBVUkwgeCB0b1xuICAgICAgICAvLyB0aGF0IFVSTCB4LCBidXQgJycgaXMgdGhlIGRlZmF1bHQgZm9yIHNyYy5cbiAgICAgICAgaWYgKHRoaXMuc3JjID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAgICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgICAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpO1xuICAgICAgICAvLyBSZW1vdmUgcXVlcnkgcGFydHMsIGdldCBmaWxlIG5hbWUuXG4gICAgICAgIHJldHVybiByZXNvbHZlZC5yZXBsYWNlKC9bP3wjXS4qL2csICcnKS5zcGxpdCgnLycpLnBvcCgpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnNpemluZztcbiAgICAgIH0sXG5cbiAgICAgIF93aWR0aENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gaXNOYU4odGhpcy53aWR0aCkgPyB0aGlzLndpZHRoIDogdGhpcy53aWR0aCArICdweCc7XG4gICAgICB9LFxuXG4gICAgICBfaGVpZ2h0Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaXNOYU4odGhpcy5oZWlnaHQpID8gdGhpcy5oZWlnaHQgOiB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9LFxuXG4gICAgICBfbG9hZFN0YXRlT2JzZXJ2ZXI6IGZ1bmN0aW9uKHNyYywgcHJldmVudExvYWQpIHtcbiAgICAgICAgdmFyIG5ld1Jlc29sdmVkU3JjID0gdGhpcy5fcmVzb2x2ZVNyYyhzcmMpO1xuICAgICAgICBpZiAobmV3UmVzb2x2ZWRTcmMgPT09IHRoaXMuX3Jlc29sdmVkU3JjKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgICAgICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICAgICAgaWYgKHNyYyA9PT0gJycgfHwgcHJldmVudExvYWQpIHtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9IG5ld1Jlc29sdmVkU3JjO1xuICAgICAgICAgIHRoaXMuJC5pbWcuc3JjID0gdGhpcy5fcmVzb2x2ZWRTcmM7XG4gICAgICAgICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgdGhpcy5fcmVzb2x2ZWRTcmMgKyAnXCIpJztcblxuICAgICAgICAgIHRoaXMuX3NldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9wbGFjZWhvbGRlckNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID8gJ3VybChcIicgKyB0aGlzLnBsYWNlaG9sZGVyICsgJ1wiKScgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF90cmFuc2Zvcm1DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNpemVkSW1nRGl2U3R5bGUgPSB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGU7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlclN0eWxlID0gdGhpcy4kLnBsYWNlaG9sZGVyLnN0eWxlO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgICB0aGlzLnNpemluZztcblxuICAgICAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICB0aGlzLnNpemluZyA/IHRoaXMucG9zaXRpb24gOiAnJztcblxuICAgICAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxuICAgICAgICAgIHRoaXMuc2l6aW5nID8gJ25vLXJlcGVhdCcgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9yZXNvbHZlU3JjOiBmdW5jdGlvbih0ZXN0U3JjKSB7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IFBvbHltZXIuUmVzb2x2ZVVybC5yZXNvbHZlVXJsKHRlc3RTcmMsIHRoaXMuJC5iYXNlVVJJQW5jaG9yLmhyZWYpO1xuICAgICAgICAvLyBOT1RFOiBVc2Ugb2YgYFVSTGAgd2FzIHJlbW92ZWQgaGVyZSBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0XG4gICAgICAgIC8vIGNvbnN0cnVjdGluZyBpdC4gSWYgdGhpcyBlbmRzIHVwIGJlaW5nIHByb2JsZW1hdGljLCB3ZSBzaG91bGRcbiAgICAgICAgLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIGFuZCBhZGRpbmcgdGhlIFVSTCBwb2x5ZmlsbCBhcyBhIGRldiBkZXBlbmRlbmN5LlxuICAgICAgICBpZiAocmVzb2x2ZWRbMF0gPT09ICcvJykge1xuICAgICAgICAgIC8vIEluIElFIGxvY2F0aW9uLm9yaWdpbiBtaWdodCBub3Qgd29ya1xuICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTc2MzgwMi9sb2NhdGlvbi1vcmlnaW4taXMtdW5kZWZpbmVkLWluLWllLTExLW9uLXdpbmRvd3MtMTAtYnV0LXdvcmtzLW9uLXdpbmRvd3MtN1xuICAgICAgICAgIHJlc29sdmVkID0gKGxvY2F0aW9uLm9yaWdpbiB8fCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KSArIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5odG1sIiwiXG5yZXF1aXJlKCcuLi8uLi9wb2x5bWVyL3BvbHltZXIuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9zaGFkb3cuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXBhcGVyLW1hdGVyaWFsLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+Omhvc3QsaHRtbHstLXBhcGVyLW1hdGVyaWFsOntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDt9O30ucGFwZXItbWF0ZXJpYWwsOmhvc3QoLnBhcGVyLW1hdGVyaWFsKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbDt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMVxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjFcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjJcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIyXFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIzXFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiM1xcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNFxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjRcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjVcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI1XFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O308L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci5odG1sXCI+XG5cbjwhLS1cblxuYGlyb24tbGlzdGAgZGlzcGxheXMgYSB2aXJ0dWFsLCAnaW5maW5pdGUnIGxpc3QuIFRoZSB0ZW1wbGF0ZSBpbnNpZGVcbnRoZSBpcm9uLWxpc3QgZWxlbWVudCByZXByZXNlbnRzIHRoZSBET00gdG8gY3JlYXRlIGZvciBlYWNoIGxpc3QgaXRlbS5cblRoZSBgaXRlbXNgIHByb3BlcnR5IHNwZWNpZmllcyBhbiBhcnJheSBvZiBsaXN0IGl0ZW0gZGF0YS5cblxuRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIG5vdCBldmVyeSBpdGVtIGluIHRoZSBsaXN0IGlzIHJlbmRlcmVkIGF0IG9uY2U7XG5pbnN0ZWFkIGEgc21hbGwgc3Vic2V0IG9mIGFjdHVhbCB0ZW1wbGF0ZSBlbGVtZW50cyAqKGVub3VnaCB0byBmaWxsIHRoZSB2aWV3cG9ydCkqXG5hcmUgcmVuZGVyZWQgYW5kIHJldXNlZCBhcyB0aGUgdXNlciBzY3JvbGxzLiBBcyBzdWNoLCBpdCBpcyBpbXBvcnRhbnQgdGhhdCBhbGxcbnN0YXRlIG9mIHRoZSBsaXN0IHRlbXBsYXRlIGlzIGJvdW5kIHRvIHRoZSBtb2RlbCBkcml2aW5nIGl0LCBzaW5jZSB0aGUgdmlldyBtYXlcbmJlIHJldXNlZCB3aXRoIGEgbmV3IG1vZGVsIGF0IGFueSB0aW1lLiBQYXJ0aWN1bGFybHksIGFueSBzdGF0ZSB0aGF0IG1heSBjaGFuZ2VcbmFzIHRoZSByZXN1bHQgb2YgYSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGxpc3QgaXRlbSBtdXN0IGJlIGJvdW5kIHRvIHRoZSBtb2RlbFxudG8gYXZvaWQgdmlldyBzdGF0ZSBpbmNvbnNpc3RlbmN5LlxuXG4jIyMgU2l6aW5nIGlyb24tbGlzdFxuXG5gaXJvbi1saXN0YCBtdXN0IGVpdGhlciBiZSBleHBsaWNpdGx5IHNpemVkLCBvciBkZWxlZ2F0ZSBzY3JvbGxpbmcgdG8gYW5cbmV4cGxpY2l0bHkgc2l6ZWQgcGFyZW50LiBCeSBcImV4cGxpY2l0bHkgc2l6ZWRcIiwgd2UgbWVhbiBpdCBlaXRoZXIgaGFzIGFuIGV4cGxpY2l0XG5DU1MgYGhlaWdodGAgcHJvcGVydHkgc2V0IHZpYSBhIGNsYXNzIG9yIGlubGluZSBzdHlsZSwgb3IgZWxzZSBpcyBzaXplZCBieSBvdGhlclxubGF5b3V0IG1lYW5zIChlLmcuIHRoZSBgZmxleGAgb3IgYGZpdGAgY2xhc3NlcykuXG5cbiMjIyMgRmxleGJveCAtIFtqc2Jpbl0oaHR0cDovL2pzYmluLmNvbS9rb2tha2kvZWRpdD9odG1sLG91dHB1dClcblxuYGBgaHRtbFxuPHRlbXBsYXRlIGlzPVwieC1saXN0XCI+XG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBpcm9uLWxpc3Qge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuICA8L3N0eWxlPlxuICA8YXBwLXRvb2xiYXI+QXBwIG5hbWU8L2FwcC10b29sYmFyPlxuICA8aXJvbi1saXN0IGl0ZW1zPVwiW1tpdGVtc11dXCI+XG4gICAgPHRlbXBsYXRlPlxuICAgICAgPGRpdj5cbiAgICAgICAgLi4uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2lyb24tbGlzdD5cbjwvdGVtcGxhdGU+XG5gYGBcbiMjIyMgRXhwbGljaXQgc2l6ZSAtIFtqc2Jpbl0oaHR0cDovL2pzYmluLmNvbS9waWJlZm8vZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjx0ZW1wbGF0ZSBpcz1cIngtbGlzdFwiPlxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIGhlaWdodDogMTAwdmg7IC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLiAqL1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGlyb24tbGlzdCBpdGVtcz1cIltbaXRlbXNdXVwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L3RlbXBsYXRlPlxuYGBgXG4jIyMjIE1haW4gZG9jdW1lbnQgc2Nyb2xsaW5nIC0gW2pzYmluXShodHRwOi8vanNiaW4uY29tL2NvanVsaS9lZGl0P2h0bWwsb3V0cHV0KVxuYGBgaHRtbFxuPGhlYWQ+XG4gIDxzdHlsZT5cbiAgICBib2R5IHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBhcHAtdG9vbGJhciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIC8qIGFkZCBwYWRkaW5nIHNpbmNlIHRoZSBhcHAtdG9vbGJhciBpcyBmaXhlZCBhdCB0aGUgdG9wICovXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC9ib2R5PlxuYGBgXG5cbmBpcm9uLWxpc3RgIG11c3QgYmUgZ2l2ZW4gYSBgPHRlbXBsYXRlPmAgd2hpY2ggY29udGFpbnMgZXhhY3RseSBvbmUgZWxlbWVudC4gSW4gdGhlIGV4YW1wbGVzXG5hYm92ZSB3ZSB1c2VkIGEgYDxkaXY+YCwgYnV0IHlvdSBjYW4gcHJvdmlkZSBhbnkgZWxlbWVudCAoaW5jbHVkaW5nIGN1c3RvbSBlbGVtZW50cykuXG5cbiMjIyBUZW1wbGF0ZSBtb2RlbFxuXG5MaXN0IGl0ZW0gdGVtcGxhdGVzIHNob3VsZCBiaW5kIHRvIHRlbXBsYXRlIG1vZGVscyBvZiB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcblxuYGBganNcbntcbiAgaW5kZXg6IDAsICAgICAgICAvLyBpbmRleCBpbiB0aGUgaXRlbSBhcnJheVxuICBzZWxlY3RlZDogZmFsc2UsIC8vIHRydWUgaWYgdGhlIGN1cnJlbnQgaXRlbSBpcyBzZWxlY3RlZFxuICB0YWJJbmRleDogLTEsICAgIC8vIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIHRhYkluZGV4IGZvciBmb2N1cyBtYW5hZ2VtZW50XG4gIGl0ZW06IHt9ICAgICAgICAgLy8gdXNlciBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gaXRlbXNbaW5kZXhdXG59XG5gYGBcblxuQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgdXNlZCBhcyBkYXRhIGluZGV4IGJ5IGNoYW5naW5nIHRoZVxuYGluZGV4QXNgIHByb3BlcnR5LiBUaGUgYGFzYCBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmdcbnNjb3BlIGZvciB0aGUgYXJyYXkuXG5cbkZvciBleGFtcGxlLCBnaXZlbiB0aGUgZm9sbG93aW5nIGBkYXRhYCBhcnJheTpcblxuIyMjIyMgZGF0YS5qc29uXG5cbmBgYGpzXG5bXG4gIHtcIm5hbWVcIjogXCJCb2JcIn0sXG4gIHtcIm5hbWVcIjogXCJUaW1cIn0sXG4gIHtcIm5hbWVcIjogXCJNaWtlXCJ9XG5dXG5gYGBcblxuVGhlIGZvbGxvd2luZyBjb2RlIHdvdWxkIHJlbmRlciB0aGUgbGlzdCAobm90ZSB0aGUgbmFtZSBwcm9wZXJ0eSBpcyBib3VuZCBmcm9tIHRoZSBtb2RlbFxub2JqZWN0IHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBzY29wZSk6XG5cbmBgYGh0bWxcbjxpcm9uLWFqYXggdXJsPVwiZGF0YS5qc29uXCIgbGFzdC1yZXNwb25zZT1cInt7ZGF0YX19XCIgYXV0bz48L2lyb24tYWpheD5cbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBHcmlkIGxheW91dFxuXG5gaXJvbi1saXN0YCBzdXBwb3J0cyBhIGdyaWQgbGF5b3V0IGluIGFkZGl0aW9uIHRvIGxpbmVhciBsYXlvdXQgYnkgc2V0dGluZ1xudGhlIGBncmlkYCBhdHRyaWJ1dGUuICBJbiB0aGlzIGNhc2UsIHRoZSBsaXN0IHRlbXBsYXRlIGl0ZW0gbXVzdCBoYXZlIGJvdGggZml4ZWRcbndpZHRoIGFuZCBoZWlnaHQgKGUuZy4gdmlhIENTUykuIEJhc2VkIG9uIHRoaXMsIHRoZSBudW1iZXIgb2YgaXRlbXNcbnBlciByb3cgYXJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgbGlzdCB2aWV3cG9ydC5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuYGlyb24tbGlzdGAgYXV0b21hdGljYWxseSBtYW5hZ2VzIHRoZSBmb2N1cyBzdGF0ZSBmb3IgdGhlIGl0ZW1zLiBJdCBhbHNvIHByb3ZpZGVzXG5hIGB0YWJJbmRleGAgcHJvcGVydHkgd2l0aGluIHRoZSB0ZW1wbGF0ZSBzY29wZSB0aGF0IGNhbiBiZSB1c2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuRm9yIGV4YW1wbGUsIHVzZXJzIGNhbiBwcmVzcyB0aGUgdXAgYW5kIGRvd24ga2V5cyB0byBtb3ZlIHRvIHByZXZpb3VzIGFuZCBuZXh0XG5pdGVtcyBpbiB0aGUgbGlzdDpcblxuYGBgaHRtbFxuPGlyb24tbGlzdCBpdGVtcz1cIltbZGF0YV1dXCIgYXM9XCJpdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiPlxuICAgICAgTmFtZTogW1tpdGVtLm5hbWVdXVxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9pcm9uLWxpc3Q+XG5gYGBcblxuIyMjIFN0eWxpbmdcblxuWW91IGNhbiB1c2UgdGhlIGAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXJgIG1peGluIHRvIHN0eWxlIHRoZSBjb250YWluZXIgb2YgaXRlbXM6XG5cbmBgYGNzc1xuaXJvbi1saXN0IHtcbiAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI6IHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH07XG59XG5gYGBcblxuIyMjIFJlc2l6aW5nXG5cbmBpcm9uLWxpc3RgIGxheXMgb3V0IHRoZSBpdGVtcyB3aGVuIGl0IHJlY2VpdmVzIGEgbm90aWZpY2F0aW9uIHZpYSB0aGUgYGlyb24tcmVzaXplYCBldmVudC5cblRoaXMgZXZlbnQgaXMgZmlyZWQgYnkgYW55IGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuXG5CeSBkZWZhdWx0LCBlbGVtZW50cyBzdWNoIGFzIGBpcm9uLXBhZ2VzYCwgYHBhcGVyLXRhYnNgIG9yIGBwYXBlci1kaWFsb2dgIHdpbGwgdHJpZ2dlclxudGhpcyBldmVudCBhdXRvbWF0aWNhbGx5LiBJZiB5b3UgaGlkZSB0aGUgbGlzdCBtYW51YWxseSAoZS5nLiB5b3UgdXNlIGBkaXNwbGF5OiBub25lYClcbnlvdSBtaWdodCB3YW50IHRvIGltcGxlbWVudCBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYCBvciBmaXJlIHRoaXMgZXZlbnQgbWFudWFsbHkgcmlnaHRcbmFmdGVyIHRoZSBsaXN0IGJlY2FtZSB2aXNpYmxlIGFnYWluLiBGb3IgZXhhbXBsZTpcblxuYGBganNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tbGlzdCcpLmZpcmUoJ2lyb24tcmVzaXplJyk7XG5gYGBcblxuIyMjIFdoZW4gc2hvdWxkIGA8aXJvbi1saXN0PmAgYmUgdXNlZD9cblxuYGlyb24tbGlzdGAgc2hvdWxkIGJlIHVzZWQgd2hlbiBhIHBhZ2UgaGFzIHNpZ25pZmljYW50bHkgbW9yZSBET00gbm9kZXMgdGhhbiB0aGUgb25lc1xudmlzaWJsZSBvbiB0aGUgc2NyZWVuLiBlLmcuIHRoZSBwYWdlIGhhcyA1MDAgbm9kZXMsIGJ1dCBvbmx5IDIwIGFyZSB2aXNpYmxlIGF0IGEgdGltZS5cblRoaXMgaXMgd2h5IHdlIHJlZmVyIHRvIGl0IGFzIGEgYHZpcnR1YWxgIGxpc3QuIEluIHRoaXMgY2FzZSwgYSBgZG9tLXJlcGVhdGAgd2lsbCBzdGlsbFxuY3JlYXRlIDUwMCBub2RlcyB3aGljaCBjb3VsZCBzbG93IGRvd24gdGhlIHdlYiBhcHAsIGJ1dCBgaXJvbi1saXN0YCB3aWxsIG9ubHkgY3JlYXRlIDIwLlxuXG5Ib3dldmVyLCBoYXZpbmcgYW4gYGlyb24tbGlzdGAgZG9lcyBub3QgbWVhbiB0aGF0IHlvdSBjYW4gbG9hZCBhbGwgdGhlIGRhdGEgYXQgb25jZS5cblNheSB5b3UgaGF2ZSBhIG1pbGxpb24gcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2UsIHlvdSB3YW50IHRvIHNwbGl0IHRoZSBkYXRhIGludG8gcGFnZXNcbnNvIHlvdSBjYW4gYnJpbmcgaW4gYSBwYWdlIGF0IHRoZSB0aW1lLiBUaGUgcGFnZSBjb3VsZCBjb250YWluIDUwMCBpdGVtcywgYW5kIGlyb24tbGlzdFxud2lsbCBvbmx5IHJlbmRlciAyMC5cblxuQGdyb3VwIElyb24gRWxlbWVudFxuQGVsZW1lbnQgaXJvbi1saXN0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcblxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1saXN0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1heC1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgI2l0ZW1zIHtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtncmlkXSkpICNpdGVtcyA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8YXJyYXktc2VsZWN0b3JcbiAgICAgICAgaWQ9XCJzZWxlY3RvclwiXG4gICAgICAgIGl0ZW1zPVwie3tpdGVtc319XCJcbiAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkSXRlbXN9fVwiXG4gICAgICAgIHNlbGVjdGVkLWl0ZW09XCJ7e3NlbGVjdGVkSXRlbX19XCI+PC9hcnJheS1zZWxlY3Rvcj5cblxuICAgIDxkaXYgaWQ9XCJpdGVtc1wiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuXG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIElPUyA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQKD86aG9uZXxhZDsoPzogVTspPyBDUFUpIE9TIChcXGQrKS8pO1xuICB2YXIgSU9TX1RPVUNIX1NDUk9MTElORyA9IElPUyAmJiBJT1NbMV0gPj0gODtcbiAgdmFyIERFRkFVTFRfUEhZU0lDQUxfQ09VTlQgPSAzO1xuICB2YXIgSElEREVOX1kgPSAnLTEwMDAwcHgnO1xuICB2YXIgSVRFTV9XSURUSCA9IDA7XG4gIHZhciBJVEVNX0hFSUdIVCA9IDE7XG4gIHZhciBTRUNSRVRfVEFCSU5ERVggPSAtMTAwO1xuICB2YXIgSVNfVjIgPSBQb2x5bWVyLmZsdXNoICE9IG51bGw7XG4gIHZhciBBTklNQVRJT05fRlJBTUUgPSBJU19WMiA/IFBvbHltZXIuQXN5bmMuYW5pbWF0aW9uRnJhbWUgOiAwO1xuICB2YXIgSURMRV9USU1FID0gSVNfVjIgPyBQb2x5bWVyLkFzeW5jLmlkbGVQZXJpb2QgOiAxO1xuICB2YXIgTUlDUk9fVEFTSyA9IElTX1YyID8gUG9seW1lci5Bc3luYy5taWNyb1Rhc2sgOiAyO1xuXG4gIC8qIFBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yIGlzIG9ubHkgYXZhaWxhYmxlIHdpdGggUG9seW1lciAyLjAuICovXG4gIGlmICghUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IpIHtcbiAgICAvKiBAcG9seW1lckJlaGF2aW9yICovXG4gICAgUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IgPSB7fTtcbiAgfVxuXG4gIFBvbHltZXIoe1xuXG4gICAgaXM6ICdpcm9uLWxpc3QnLFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAvKipcbiAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgaXRlbXMgZGV0ZXJtaW5pbmcgaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoZSB0ZW1wbGF0ZVxuICAgICAgICogdG8gc3RhbXAgYW5kIHRoYXQgdGhhdCBlYWNoIHRlbXBsYXRlIGluc3RhbmNlIHNob3VsZCBiaW5kIHRvLlxuICAgICAgICovXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIGZvciB0aGUgYXJyYXlcbiAgICAgICAqIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gdGVtcGxhdGUgaW5zdGFuY2UuXG4gICAgICAgKi9cbiAgICAgIGFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdpdGVtJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIHdpdGggdGhlIGluZGV4XG4gICAgICAgKiBmb3IgdGhlIHJvdy5cbiAgICAgICAqL1xuICAgICAgaW5kZXhBczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnaW5kZXgnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgdG8gaW5kaWNhdGVcbiAgICAgICAqIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkQXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3NlbGVjdGVkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRydWUsIHRoZSBsaXN0IGlzIHJlbmRlcmVkIGFzIGEgZ3JpZC4gR3JpZCBpdGVtcyBtdXN0IGhhdmVcbiAgICAgICAqIGZpeGVkIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHZpYSBDU1MuIGUuZy5cbiAgICAgICAqXG4gICAgICAgKiBgYGBodG1sXG4gICAgICAgKiA8aXJvbi1saXN0IGdyaWQ+XG4gICAgICAgKiAgIDx0ZW1wbGF0ZT5cbiAgICAgICAqICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcIj4gMTAweDEwMCA8L2Rpdj5cbiAgICAgICAqICAgPC90ZW1wbGF0ZT5cbiAgICAgICAqIDwvaXJvbi1saXN0PlxuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX2dyaWRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRydWUsIHRhcHBpbmcgYSByb3cgd2lsbCBzZWxlY3QgdGhlIGl0ZW0sIHBsYWNpbmcgaXRzIGRhdGEgbW9kZWxcbiAgICAgICAqIGluIHRoZSBzZXQgb2Ygc2VsZWN0ZWQgaXRlbXMgcmV0cmlldmFibGUgdmlhIHRoZSBzZWxlY3Rpb24gcHJvcGVydHkuXG4gICAgICAgKlxuICAgICAgICogTm90ZSB0aGF0IHRhcHBpbmcgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiB0aGUgbGlzdCBpdGVtIHdpbGwgbm90XG4gICAgICAgKiByZXN1bHQgaW4gc2VsZWN0aW9uLCBzaW5jZSB0aGV5IGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoZWlyICogb3duIGFjdGlvbi5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0aW9uRW5hYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBgbXVsdGlTZWxlY3Rpb25gIGlzIGZhbHNlLCB0aGlzIGlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgYG51bGxgXG4gICAgICAgKiBpZiBubyBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBgbXVsdGlTZWxlY3Rpb25gIGlzIHRydWUsIHRoaXMgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0ZWQgaXRlbXMuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkSXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBgdHJ1ZWAsIG11bHRpcGxlIGl0ZW1zIG1heSBiZSBzZWxlY3RlZCBhdCBvbmNlIChpbiB0aGlzIGNhc2UsXG4gICAgICAgKiBgc2VsZWN0ZWRgIGlzIGFuIGFycmF5IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtcykuICBXaGVuIGBmYWxzZWAsXG4gICAgICAgKiBvbmx5IG9uZSBpdGVtIG1heSBiZSBzZWxlY3RlZCBhdCBhIHRpbWUuXG4gICAgICAgKi9cbiAgICAgIG11bHRpU2VsZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgb2Zmc2V0IHRvcCBmcm9tIHRoZSBzY3JvbGxpbmcgZWxlbWVudCB0byB0aGUgaXJvbi1saXN0IGVsZW1lbnQuXG4gICAgICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBjb21wdXRlZCB1c2luZyB0aGUgcG9zaXRpb24gcmV0dXJuZWQgYnkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpYFxuICAgICAgICogYWx0aG91Z2ggaXQncyBwcmVmZXJyZWQgdG8gdXNlIGEgY29uc3RhbnQgdmFsdWUgd2hlbiBwb3NzaWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHVzZWZ1bCB3aGVuIGFuIGV4dGVybmFsIHNjcm9sbGluZyBlbGVtZW50IGlzIHVzZWQgYW5kIHRoZXJlJ3NcbiAgICAgICAqIHNvbWUgb2Zmc2V0IGJldHdlZW4gdGhlIHNjcm9sbGluZyBlbGVtZW50IGFuZCB0aGUgbGlzdC5cbiAgICAgICAqIEZvciBleGFtcGxlOiBhIGhlYWRlciBpcyBwbGFjZWQgYWJvdmUgdGhlIGxpc3QuXG4gICAgICAgKi9cbiAgICAgIHNjcm9sbE9mZnNldDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9ic2VydmVyczogW1xuICAgICAgJ19pdGVtc0NoYW5nZWQoaXRlbXMuKiknLFxuICAgICAgJ19zZWxlY3Rpb25FbmFibGVkQ2hhbmdlZChzZWxlY3Rpb25FbmFibGVkKScsXG4gICAgICAnX211bHRpU2VsZWN0aW9uQ2hhbmdlZChtdWx0aVNlbGVjdGlvbiknLFxuICAgICAgJ19zZXRPdmVyZmxvdyhzY3JvbGxUYXJnZXQsIHNjcm9sbE9mZnNldCknXG4gICAgXSxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5UZW1wbGF0aXplcixcbiAgICAgIFBvbHltZXIuSXJvblJlc2l6YWJsZUJlaGF2aW9yLFxuICAgICAgUG9seW1lci5Jcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3IsXG4gICAgICBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvclxuICAgIF0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW8gb2YgaGlkZGVuIHRpbGVzIHRoYXQgc2hvdWxkIHJlbWFpbiBpbiB0aGUgc2Nyb2xsIGRpcmVjdGlvbi5cbiAgICAgKiBSZWNvbW1lbmRlZCB2YWx1ZSB+MC41LCBzbyBpdCB3aWxsIGRpc3RyaWJ1dGUgdGlsZXMgZXZlbHkgaW4gYm90aCBkaXJlY3Rpb25zLlxuICAgICAqL1xuICAgIF9yYXRpbzogMC41LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhZGRpbmctdG9wIHZhbHVlIGZvciB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBfc2Nyb2xsZXJQYWRkaW5nVG9wOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBgc2Nyb2xsVG9wYC5cbiAgICAgKi9cbiAgICBfc2Nyb2xsUG9zaXRpb246IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VtIG9mIHRoZSBoZWlnaHRzIG9mIGFsbCB0aGUgdGlsZXMgaW4gdGhlIERPTS5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxTaXplOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGF2ZXJhZ2UgYG9mZnNldEhlaWdodGAgb2YgdGhlIHRpbGVzIG9ic2VydmVkIHRpbGwgbm93LlxuICAgICAqL1xuICAgIF9waHlzaWNhbEF2ZXJhZ2U6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRpbGVzIHdoaWNoIGBvZmZzZXRIZWlnaHRgID4gMCBvYnNlcnZlZCB1bnRpbCBub3cuXG4gICAgICovXG4gICAgX3BoeXNpY2FsQXZlcmFnZUNvdW50OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIFkgcG9zaXRpb24gb2YgdGhlIGl0ZW0gcmVuZGVyZWQgaW4gdGhlIGBfcGh5c2ljYWxTdGFydGBcbiAgICAgKiB0aWxlIHJlbGF0aXZlIHRvIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxUb3A6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIF92aXJ0dWFsQ291bnQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXN0aW1hdGVkIHNjcm9sbCBoZWlnaHQgYmFzZWQgb24gYF9waHlzaWNhbEF2ZXJhZ2VgXG4gICAgICovXG4gICAgX2VzdFNjcm9sbEhlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBkb20gbm9kZVxuICAgICAqL1xuICAgIF9zY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBsaXN0LiBUaGlzIGlzIHJlZmVycmVkIGFzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY29udGV4dCBvZiBsaXN0LlxuICAgICAqL1xuICAgIF92aWV3cG9ydEhlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2YgbGlzdC5cbiAgICAgKi9cbiAgICBfdmlld3BvcnRXaWR0aDogMCxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIERPTSBub2RlcyB0aGF0IGFyZSBjdXJyZW50bHkgaW4gdGhlIHRyZWVcbiAgICAgKiBAdHlwZSB7P0FycmF5PCFUZW1wbGF0aXplck5vZGU+fVxuICAgICAqL1xuICAgIF9waHlzaWNhbEl0ZW1zOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgaGVpZ2h0cyBmb3IgZWFjaCBpdGVtIGluIGBfcGh5c2ljYWxJdGVtc2BcbiAgICAgKiBAdHlwZSB7P0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgX3BoeXNpY2FsU2l6ZXM6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBIGNhY2hlZCB2YWx1ZSBmb3IgdGhlIGZpcnN0IHZpc2libGUgaW5kZXguXG4gICAgICogU2VlIGBmaXJzdFZpc2libGVJbmRleGBcbiAgICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICAgKi9cbiAgICBfZmlyc3RWaXNpYmxlSW5kZXhWYWw6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBIFBvbHltZXIgY29sbGVjdGlvbiBmb3IgdGhlIGl0ZW1zLlxuICAgICAqIEB0eXBlIHs/UG9seW1lci5Db2xsZWN0aW9ufVxuICAgICAqL1xuICAgIF9jb2xsZWN0aW9uOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICogU2VlIGBsYXN0VmlzaWJsZUluZGV4YFxuICAgICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgICAqL1xuICAgIF9sYXN0VmlzaWJsZUluZGV4VmFsOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyLiBPbmUgcGFnZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBoZWlnaHQgb2YgdGhlIGxpc3QuXG4gICAgICovXG4gICAgX21heFBhZ2VzOiAyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICovXG4gICAgX2ZvY3VzZWRJdGVtOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZpcnR1YWwgaW5kZXggb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICAgKi9cbiAgICBfZm9jdXNlZFZpcnR1YWxJbmRleDogLTEsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGh5c2ljYWwgaW5kZXggb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICAgKi9cbiAgICBfZm9jdXNlZFBoeXNpY2FsSW5kZXg6IC0xLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRoZSBpdGVtIHRoYXQgaXMgZm9jdXNlZCBpZiBpdCBpcyBtb3ZlZCBvZmZzY3JlZW4uXG4gICAgICogQHByaXZhdGUgez9UZW1wbGF0aXplck5vZGV9XG4gICAgICovXG4gICAgX29mZnNjcmVlbkZvY3VzZWRJdGVtOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW0gdGhhdCBiYWNrZmlsbHMgdGhlIGBfb2Zmc2NyZWVuRm9jdXNlZEl0ZW1gIGluIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgICAqIGxpc3Qgd2hlbiB0aGF0IGl0ZW0gaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgICAqL1xuICAgIF9mb2N1c0JhY2tmaWxsSXRlbTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIGl0ZW1zIHBlciByb3dcbiAgICAgKi9cbiAgICBfaXRlbXNQZXJSb3c6IDEsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgZWFjaCBncmlkIGl0ZW1cbiAgICAgKi9cbiAgICBfaXRlbVdpZHRoOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93IGluIGdyaWQgbGF5b3V0LlxuICAgICAqL1xuICAgIF9yb3dIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29zdCBvZiBzdGFtcGluZyBhIHRlbXBsYXRlIGluIG1zLlxuICAgICAqL1xuICAgIF90ZW1wbGF0ZUNvc3Q6IDAsXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgdG8gcGFzcyBldmVudC5tb2RlbCBwcm9wZXJ0eSB0byBkZWNsYXJhdGl2ZSBldmVudCBoYW5kbGVycyAtXG4gICAgICogc2VlIHBvbHltZXIvcG9seW1lciM0MzM5LlxuICAgICAqL1xuICAgIF9wYXJlbnRNb2RlbDogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBib3R0b20gb2YgdGhlIHBoeXNpY2FsIGNvbnRlbnQuXG4gICAgICovXG4gICAgZ2V0IF9waHlzaWNhbEJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3BoeXNpY2FsU2l6ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsLlxuICAgICAqL1xuICAgIGdldCBfc2Nyb2xsQm90dG9tKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFBvc2l0aW9uICsgdGhpcy5fdmlld3BvcnRIZWlnaHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuLXRoIGl0ZW0gcmVuZGVyZWQgaW4gdGhlIGxhc3QgcGh5c2ljYWwgaXRlbS5cbiAgICAgKi9cbiAgICBnZXQgX3ZpcnR1YWxFbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBoeXNpY2FsIGNvbnRlbnQgdGhhdCBpc24ndCBvbiB0aGUgc2NyZWVuLlxuICAgICAqL1xuICAgIGdldCBfaGlkZGVuQ29udGVudFNpemUoKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuZ3JpZCA/IHRoaXMuX3BoeXNpY2FsUm93cyAqIHRoaXMuX3Jvd0hlaWdodCA6IHRoaXMuX3BoeXNpY2FsU2l6ZTtcbiAgICAgIHJldHVybiBzaXplIC0gdGhpcy5fdmlld3BvcnRIZWlnaHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBmb3IgdGhlIF91c2VyVGVtcGxhdGUuXG4gICAgICovXG4gICAgZ2V0IF9pdGVtc1BhcmVudCgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLmRvbShQb2x5bWVyLmRvbSh0aGlzLl91c2VyVGVtcGxhdGUpLnBhcmVudE5vZGUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBzY3JvbGwgdG9wIHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBfbWF4U2Nyb2xsVG9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VzdFNjcm9sbEhlaWdodCAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFyZ2VzdCBuLXRoIHZhbHVlIGZvciBhbiBpdGVtIHN1Y2ggdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQgaW4gYF9waHlzaWNhbFN0YXJ0YC5cbiAgICAgKi9cbiAgICBnZXQgX21heFZpcnR1YWxTdGFydCgpIHtcbiAgICAgIHZhciB2aXJ0dWFsQ291bnQgPSB0aGlzLl9jb252ZXJ0SW5kZXhUb0NvbXBsZXRlUm93KHRoaXMuX3ZpcnR1YWxDb3VudCk7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMCwgdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCk7XG4gICAgfSxcblxuICAgIHNldCBfdmlydHVhbFN0YXJ0KHZhbCkge1xuICAgICAgdmFsID0gdGhpcy5fY2xhbXAodmFsLCAwLCB0aGlzLl9tYXhWaXJ0dWFsU3RhcnQpO1xuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB2YWwgPSB2YWwgLSAodmFsICUgdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0VmFsID0gdmFsO1xuICAgIH0sXG5cbiAgICBnZXQgX3ZpcnR1YWxTdGFydCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgfHwgMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGstdGggdGlsZSB0aGF0IGlzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgICAqL1xuICAgIHNldCBfcGh5c2ljYWxTdGFydCh2YWwpIHtcbiAgICAgIHZhbCA9IHZhbCAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICB2YWwgPSB0aGlzLl9waHlzaWNhbENvdW50ICsgdmFsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB2YWwgPSB2YWwgLSAodmFsICUgdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydFZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgZ2V0IF9waHlzaWNhbFN0YXJ0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgfHwgMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGstdGggdGlsZSB0aGF0IGlzIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgICAqL1xuICAgIGdldCBfcGh5c2ljYWxFbmQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3BoeXNpY2FsU3RhcnQgKyB0aGlzLl9waHlzaWNhbENvdW50IC0gMSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIH0sXG5cbiAgICBzZXQgX3BoeXNpY2FsQ291bnQodmFsKSB7XG4gICAgICB0aGlzLl9waHlzaWNhbENvdW50VmFsID0gdmFsO1xuICAgIH0sXG5cbiAgICBnZXQgX3BoeXNpY2FsQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxDb3VudFZhbCB8fCAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpbWFsIHBoeXNpY2FsIHNpemUgc3VjaCB0aGF0IHdlIHdpbGwgaGF2ZSBlbm91Z2ggcGh5c2ljYWwgaXRlbXNcbiAgICAgKiB0byBmaWxsIHVwIHRoZSB2aWV3cG9ydCBhbmQgcmVjeWNsZSB3aGVuIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAgICpcbiAgICAgKiBUaGlzIGRlZmF1bHQgdmFsdWUgYXNzdW1lcyB0aGF0IHdlIHdpbGwgYXQgbGVhc3QgaGF2ZSB0aGUgZXF1aXZhbGVudFxuICAgICAqIHRvIGEgdmlld3BvcnQgb2YgcGh5c2ljYWwgaXRlbXMgYWJvdmUgYW5kIGJlbG93IHRoZSB1c2VyJ3Mgdmlld3BvcnQuXG4gICAgICovXG4gICAgZ2V0IF9vcHRQaHlzaWNhbFNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlld3BvcnRIZWlnaHQgPT09IDAgPyBJbmZpbml0eSA6IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ICogdGhpcy5fbWF4UGFnZXM7XG4gICAgfSxcblxuICAgLyoqXG4gICAgKiBUcnVlIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgdmlzaWJsZS5cbiAgICAqL1xuICAgIGdldCBfaXNWaXNpYmxlKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5vZmZzZXRXaWR0aCB8fCB0aGlzLm9mZnNldEhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0gaW4gdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgZmlyc3RWaXNpYmxlSW5kZXgoKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgICAgdmFyIHBoeXNpY2FsT2Zmc2V0ID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG5cbiAgICAgICAgaWR4ID0gdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICBwaHlzaWNhbE9mZnNldCArPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQocGlkeCk7XG5cbiAgICAgICAgICBpZiAocGh5c2ljYWxPZmZzZXQgPiB0aGlzLl9zY3JvbGxQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KSA6IHZpZHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEhhbmRsZSBhIHBhcnRpYWxseSByZW5kZXJlZCBmaW5hbCByb3cgaW4gZ3JpZCBtb2RlXG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLl92aXJ0dWFsQ291bnQgLSAxID09PSB2aWR4KSB7XG4gICAgICAgICAgICByZXR1cm4gdmlkeCAtICh2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgMDtcbiAgICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCB2aXNpYmxlIGl0ZW0gaW4gdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgbGFzdFZpc2libGVJbmRleCgpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsO1xuICAgICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICBpZHggPSBNYXRoLm1pbih0aGlzLl92aXJ0dWFsQ291bnQsXG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RWaXNpYmxlSW5kZXggKyB0aGlzLl9lc3RSb3dzSW5WaWV3ICogdGhpcy5faXRlbXNQZXJSb3cgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgICAgaWYgKHBoeXNpY2FsT2Zmc2V0IDwgdGhpcy5fc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgICAgICAgIGlkeCA9IHZpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaHlzaWNhbE9mZnNldCArPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQocGlkeCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZHg7XG4gICAgfSxcblxuICAgIGdldCBfZGVmYXVsdFNjcm9sbFRhcmdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXQgX3ZpcnR1YWxSb3dDb3VudCgpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlydHVhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgIH0sXG5cbiAgICBnZXQgX2VzdFJvd3NJblZpZXcoKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5fcm93SGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgZ2V0IF9waHlzaWNhbFJvd3MoKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfSxcblxuICAgIGdldCBfc2Nyb2xsT2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCArIHRoaXMuc2Nyb2xsT2Zmc2V0O1xuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fZGlkRm9jdXMuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgICAgLy8gYGlyb24tcmVzaXplYCBpcyBmaXJlZCB3aGVuIHRoZSBsaXN0IGlzIGF0dGFjaGVkIGlmIHRoZSBldmVudCBpcyBhZGRlZFxuICAgICAgLy8gYmVmb3JlIGF0dGFjaGVkIGNhdXNpbmcgdW5uZWNlc3Nhcnkgd29yay5cbiAgICAgIHRoaXMubGlzdGVuKHRoaXMsICdpcm9uLXJlc2l6ZScsICdfcmVzaXplSGFuZGxlcicpO1xuICAgICAgdGhpcy5saXN0ZW4odGhpcywgJ2tleWRvd24nLCAnX2tleWRvd25IYW5kbGVyJyk7XG4gICAgfSxcblxuICAgIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIG92ZXJmbG93IHByb3BlcnR5IGlmIHRoaXMgZWxlbWVudCBoYXMgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uXG4gICAgICovXG4gICAgX3NldE92ZXJmbG93OiBmdW5jdGlvbihzY3JvbGxUYXJnZXQpIHtcbiAgICAgIHRoaXMuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAndG91Y2gnIDogJyc7XG4gICAgICB0aGlzLnN0eWxlLm92ZXJmbG93WSA9IHNjcm9sbFRhcmdldCA9PT0gdGhpcyA/ICdhdXRvJyA6ICcnO1xuICAgICAgLy8gQ2xlYXIgY2FjaGUuXG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgaWYgeW91IGR5bmFtaWNhbGx5IHVwZGF0ZSB0aGUgdmlld3BvcnQnc1xuICAgICAqIHNpemUgb3IgQ1NTIHBhZGRpbmcuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllc1xuICAgICAqL1xuICAgIHVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgICB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgPSB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcyA/IDAgOlxuICAgICAgICAgIHBhcnNlSW50KHN0eWxlc1sncGFkZGluZy10b3AnXSwgMTApO1xuICAgICAgdGhpcy5faXNSVEwgPSBCb29sZWFuKHN0eWxlcy5kaXJlY3Rpb24gPT09ICdydGwnKTtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0V2lkdGggPSB0aGlzLiQuaXRlbXMub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCA9IHRoaXMuX3Njcm9sbFRhcmdldEhlaWdodDtcbiAgICAgIHRoaXMuZ3JpZCAmJiB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWN5Y2xlcyB0aGUgcGh5c2ljYWwgaXRlbXMgd2hlbiBuZWVkZWQuXG4gICAgICovXG4gICAgX3Njcm9sbEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuX21heFNjcm9sbFRvcCwgdGhpcy5fc2Nyb2xsVG9wKSk7XG4gICAgICB2YXIgZGVsdGEgPSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICAgIHZhciBpc1Njcm9sbGluZ0Rvd24gPSBkZWx0YSA+PSAwO1xuICAgICAgLy8gVHJhY2sgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgICAvLyBDbGVhciBpbmRleGVzIGZvciBmaXJzdCBhbmQgbGFzdCB2aXNpYmxlIGluZGV4ZXMuXG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIC8vIFJhbmRvbSBhY2Nlc3MuXG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gdGhpcy5fcGh5c2ljYWxTaXplICYmIHRoaXMuX3BoeXNpY2FsU2l6ZSA+IDApIHtcbiAgICAgICAgZGVsdGEgPSBkZWx0YSAtIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgICAgdmFyIGlkeEFkanVzdG1lbnQgPSBNYXRoLnJvdW5kKGRlbHRhIC8gdGhpcy5fcGh5c2ljYWxBdmVyYWdlKSAqIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyBpZHhBZGp1c3RtZW50O1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIGlkeEFkanVzdG1lbnQ7XG4gICAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQuXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID4gMCkge1xuICAgICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKGlzU2Nyb2xsaW5nRG93bik7XG4gICAgICAgIGlmIChpc1Njcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0IC0gcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0IC0gcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZShyZXVzYWJsZXMuaW5kZXhlcywgaXNTY3JvbGxpbmdEb3duID8gbnVsbCA6IHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQodGhpcywgMCksIE1JQ1JPX1RBU0spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBpbmRleGVzIG9mIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgICAqIHRoYXQgbWlnaHQgYmUgcmV1c2VkIGFuZCB0aGUgcGh5c2ljYWxUb3AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZyb21Ub3AgSWYgdGhlIHBvdGVudGlhbCByZXVzYWJsZSBpdGVtcyBhcmUgYWJvdmUgdGhlIHNjcm9sbGluZyByZWdpb24uXG4gICAgICovXG4gICAgX2dldFJldXNhYmxlczogZnVuY3Rpb24oZnJvbVRvcCkge1xuICAgICAgdmFyIGl0aCwgbGFzdEl0aCwgb2Zmc2V0Q29udGVudCwgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgdmFyIGlkeHMgPSBbXTtcbiAgICAgIHZhciBwcm90ZWN0ZWRPZmZzZXRDb250ZW50ID0gdGhpcy5faGlkZGVuQ29udGVudFNpemUgKiB0aGlzLl9yYXRpbztcbiAgICAgIHZhciB2aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICB2YXIgdmlydHVhbEVuZCA9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgICB2YXIgcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgICB2YXIgdG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICB2YXIgYm90dG9tID0gdGhpcy5fcGh5c2ljYWxCb3R0b20gKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IHRoaXMuX3Njcm9sbEJvdHRvbTtcblxuICAgICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgICAgaXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgICBvZmZzZXRDb250ZW50ID0gc2Nyb2xsVG9wIC0gdG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRoID0gdGhpcy5fcGh5c2ljYWxFbmQ7XG4gICAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICBvZmZzZXRDb250ZW50ID0gYm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgcGh5c2ljYWxJdGVtSGVpZ2h0ID0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGl0aCk7XG4gICAgICAgIG9mZnNldENvbnRlbnQgPSBvZmZzZXRDb250ZW50IC0gcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICBpZiAoaWR4cy5sZW5ndGggPj0gcGh5c2ljYWxDb3VudCB8fCBvZmZzZXRDb250ZW50IDw9IHByb3RlY3RlZE9mZnNldENvbnRlbnQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgICAgIC8vIENoZWNrIHRoYXQgaW5kZXggaXMgd2l0aGluIHRoZSB2YWxpZCByYW5nZS5cbiAgICAgICAgICBpZiAodmlydHVhbEVuZCArIGlkeHMubGVuZ3RoICsgMSA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgICBpZiAodG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0ID49IHNjcm9sbFRvcCAtIHRoaXMuX3Njcm9sbE9mZnNldCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICAgIHRvcCA9IHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgICBpdGggPSAoaXRoICsgMSkgJSBwaHlzaWNhbENvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENoZWNrIHRoYXQgaW5kZXggaXMgd2l0aGluIHRoZSB2YWxpZCByYW5nZS5cbiAgICAgICAgICBpZiAodmlydHVhbFN0YXJ0IC0gaWR4cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICAgIGlmICh0b3AgKyB0aGlzLl9waHlzaWNhbFNpemUgLSBwaHlzaWNhbEl0ZW1IZWlnaHQgPD0gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWR4cy5wdXNoKGl0aCk7XG4gICAgICAgICAgdG9wID0gdG9wIC0gcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICAgIGl0aCA9IChpdGggPT09IDApID8gcGh5c2ljYWxDb3VudCAtIDEgOiBpdGggLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4geyBpbmRleGVzOiBpZHhzLCBwaHlzaWNhbFRvcDogdG9wIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0IH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBpdGVtcywgc3RhcnRpbmcgZnJvbSB0aGUgYF92aXJ0dWFsU3RhcnRgIGl0ZW0uXG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gbW92aW5nVXBcbiAgICAgKi9cbiAgICBfdXBkYXRlOiBmdW5jdGlvbihpdGVtU2V0LCBtb3ZpbmdVcCkge1xuICAgICAgaWYgKChpdGVtU2V0ICYmIGl0ZW1TZXQubGVuZ3RoID09PSAwKSB8fCB0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hbmFnZUZvY3VzKCk7XG4gICAgICB0aGlzLl9hc3NpZ25Nb2RlbHMoaXRlbVNldCk7XG4gICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKGl0ZW1TZXQpO1xuICAgICAgLy8gQWRqdXN0IG9mZnNldCBhZnRlciBtZWFzdXJpbmcuXG4gICAgICBpZiAobW92aW5nVXApIHtcbiAgICAgICAgd2hpbGUgKG1vdmluZ1VwLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBpZHggPSBtb3ZpbmdVcC5wb3AoKTtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCAtPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoaWR4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb29sIG9mIERPTSBlbGVtZW50cyBhbmQgYXR0YWNoZXMgdGhlbSB0byB0aGUgbG9jYWwgZG9tLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgU2l6ZSBvZiB0aGUgcG9vbFxuICAgICAqL1xuICAgIF9jcmVhdGVQb29sOiBmdW5jdGlvbihzaXplKSB7XG4gICAgICB0aGlzLl9lbnN1cmVUZW1wbGF0aXplZCgpO1xuICAgICAgdmFyIGksIGluc3Q7XG4gICAgICB2YXIgcGh5c2ljYWxJdGVtcyA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaW5zdCA9IHRoaXMuc3RhbXAobnVsbCk7XG4gICAgICAgIC8vIFRPRE8oYmxhc3Rlbik6XG4gICAgICAgIC8vIEZpcnN0IGVsZW1lbnQgY2hpbGQgaXMgaXRlbTsgU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBjaGlsZHJlblswXVxuICAgICAgICAvLyBvbiBhIGRvYyBmcmFnbWVudC4gVGVzdCB0aGlzIHRvIHNlZSBpZiBpdCBzdGlsbCBtYXR0ZXJzLlxuICAgICAgICBwaHlzaWNhbEl0ZW1zW2ldID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwaHlzaWNhbEl0ZW1zO1xuICAgIH0sXG5cbiAgICBfaXNDbGllbnRGdWxsOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxCb3R0b20gIT0gMCAmJiB0aGlzLl9waHlzaWNhbEJvdHRvbS0xID49IHRoaXMuX3Njcm9sbEJvdHRvbSAmJlxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIDw9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbmNyZWFzZXMgdGhlIHBvb2wgc2l6ZS5cbiAgICAgKi9cbiAgICBfaW5jcmVhc2VQb29sSWZOZWVkZWQ6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICB2YXIgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jbGFtcCh0aGlzLl9waHlzaWNhbENvdW50ICsgY291bnQsXG4gICAgICAgICAgREVGQVVMVF9QSFlTSUNBTF9DT1VOVCwgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fdmlydHVhbFN0YXJ0KTtcbiAgICAgIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyhuZXh0UGh5c2ljYWxDb3VudCk7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhciBjb3JyZWN0aW9uID0gbmV4dFBoeXNpY2FsQ291bnQgJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgaWYgKGNvcnJlY3Rpb24gJiYgbmV4dFBoeXNpY2FsQ291bnQgLSBjb3JyZWN0aW9uIDw9IHRoaXMuX3BoeXNpY2FsQ291bnQpIHtcbiAgICAgICAgICBuZXh0UGh5c2ljYWxDb3VudCArPSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgfVxuICAgICAgICBuZXh0UGh5c2ljYWxDb3VudCAtPSBjb3JyZWN0aW9uO1xuICAgICAgfVxuICAgICAgdmFyIGRlbHRhID0gbmV4dFBoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgdmFyIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG5cbiAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICB2YXIgdHMgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIC8vIENvbmNhdCBhcnJheXMgaW4gcGxhY2UuXG4gICAgICAgIFtdLnB1c2guYXBwbHkodGhpcy5fcGh5c2ljYWxJdGVtcywgdGhpcy5fY3JlYXRlUG9vbChkZWx0YSkpO1xuICAgICAgICBbXS5wdXNoLmFwcGx5KHRoaXMuX3BoeXNpY2FsU2l6ZXMsIG5ldyBBcnJheShkZWx0YSkpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudCArIGRlbHRhO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHBoeXNpY2FsIHN0YXJ0IGlmIGl0IG5lZWRzIHRvIHByZXNlcnZlIHRoZSBtb2RlbCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgICAgICAvLyBJbiB0aGlzIHNpdHVhdGlvbiwgdGhlIGZvY3VzZWQgaXRlbSBpcyBjdXJyZW50bHkgcmVuZGVyZWQgYW5kIGl0cyBtb2RlbCB3b3VsZFxuICAgICAgICAvLyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5jcmVhc2luZyB0aGUgcG9vbCBpZiB0aGUgcGh5c2ljYWwgc3RhcnQgcmVtYWluZWQgdW5jaGFuZ2VkLlxuICAgICAgICBpZiAodGhpcy5fcGh5c2ljYWxTdGFydCA+IHRoaXMuX3BoeXNpY2FsRW5kICYmXG4gICAgICAgICAgICB0aGlzLl9pc0luZGV4UmVuZGVyZWQodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCkgJiZcbiAgICAgICAgICAgIHRoaXMuX2dldFBoeXNpY2FsSW5kZXgodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCkgPCB0aGlzLl9waHlzaWNhbEVuZCkge1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgZGVsdGE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29zdCA9ICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSB0cykgLyBkZWx0YTtcbiAgICAgICAgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZSB1cHBlciBib3VuZHMgaXMgbm90IGZpeGVkIHdoZW4gZGVhbGluZyB3aXRoIGEgZ3JpZCB0aGF0IGRvZXNuJ3RcbiAgICAgIC8vIGZpbGwgaXQncyBsYXN0IHJvdyB3aXRoIHRoZSBleGFjdCBudW1iZXIgb2YgaXRlbXMgcGVyIHJvdy5cbiAgICAgIGlmICh0aGlzLl92aXJ0dWFsRW5kID49IHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEgfHwgbmV4dEluY3JlYXNlID09PSAwKSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG5leHRJbmNyZWFzZVxuICAgICAgICAgICksIE1JQ1JPX1RBU0spO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbFNpemUgPCB0aGlzLl9vcHRQaHlzaWNhbFNpemUpIHtcbiAgICAgICAgLy8gWWllbGQgYW5kIGluY3JlYXNlIHRoZSBwb29sIGR1cmluZyBpZGxlIHRpbWUgdW50aWwgdGhlIHBoeXNpY2FsIHNpemUgaXMgb3B0aW1hbC5cbiAgICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLl9jbGFtcChNYXRoLnJvdW5kKDUwIC8gdGhpcy5fdGVtcGxhdGVDb3N0KSwgMSwgbmV4dEluY3JlYXNlKVxuICAgICAgICAgICksIElETEVfVElNRSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGEgbmV3IGxpc3QuXG4gICAgICovXG4gICAgX3JlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhdGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ICE9PSAwKSB7XG4gICAgICAgIHZhciByZXVzYWJsZXMgPSB0aGlzLl9nZXRSZXVzYWJsZXModHJ1ZSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl91cGRhdGUocmV1c2FibGVzLmluZGV4ZXMpO1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoMCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnR1YWxDb3VudCA+IDApIHtcbiAgICAgICAgLy8gSW5pdGlhbCByZW5kZXJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoREVGQVVMVF9QSFlTSUNBTF9DT1VOVCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRlbXBsZXRpemVzIHRoZSB1c2VyIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIF9lbnN1cmVUZW1wbGF0aXplZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5jdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VzZXJUZW1wbGF0ZSA9IHRoaXMucXVlcnlFZmZlY3RpdmVDaGlsZHJlbigndGVtcGxhdGUnKTtcbiAgICAgIGlmICghdGhpcy5fdXNlclRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignaXJvbi1saXN0IHJlcXVpcmVzIGEgdGVtcGxhdGUgdG8gYmUgcHJvdmlkZWQgaW4gbGlnaHQtZG9tJyk7XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2VQcm9wcyA9IHt9O1xuICAgICAgaW5zdGFuY2VQcm9wcy5fX2tleV9fID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHNbdGhpcy5hc10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wc1t0aGlzLmluZGV4QXNdID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHNbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzLnRhYkluZGV4ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlUHJvcHMgPSBpbnN0YW5jZVByb3BzO1xuICAgICAgdGhpcy50ZW1wbGF0aXplKHRoaXMuX3VzZXJUZW1wbGF0ZSwgdGhpcy5tdXRhYmxlRGF0YSk7XG4gICAgfSxcblxuICAgIF9ncmlkQ2hhbmdlZDogZnVuY3Rpb24obmV3R3JpZCwgb2xkR3JpZCkge1xuICAgICAgaWYgKHR5cGVvZiBvbGRHcmlkID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICAgIFBvbHltZXIuZmx1c2ggPyBQb2x5bWVyLmZsdXNoKCkgOiBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuICAgICAgbmV3R3JpZCAmJiB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgaXRlbXMgaGF2ZSBjaGFuZ2VkLiBUaGF0IGlzLCByZXNzaWdubWVudHNcbiAgICAgKiB0byBgaXRlbXNgLCBzcGxpY2VzIG9yIHVwZGF0ZXMgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKi9cbiAgICBfaXRlbXNDaGFuZ2VkOiBmdW5jdGlvbihjaGFuZ2UpIHtcbiAgICAgIGlmIChjaGFuZ2UucGF0aCA9PT0gJ2l0ZW1zJykge1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSAwO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSB0aGlzLml0ZW1zICYmIFBvbHltZXIuQ29sbGVjdGlvbiA/XG4gICAgICAgICAgICBQb2x5bWVyLkNvbGxlY3Rpb24uZ2V0KHRoaXMuaXRlbXMpIDogbnVsbDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJbmRleEZvcktleSA9IHt9O1xuICAgICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9waHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudCB8fCAwO1xuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zID0gdGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplcyA9IHRoaXMuX3BoeXNpY2FsU2l6ZXMgfHwgW107XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSAwO1xuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVG9wID4gdGhpcy5fc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbigwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgICB0aGlzLl9hZGp1c3RWaXJ0dWFsSW5kZXgoY2hhbmdlLnZhbHVlLmluZGV4U3BsaWNlcyk7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICAgIC8vIFJlbmRlciBvbmx5IGlmIHRoZSBhZmZlY3RlZCBpbmRleCBpcyByZW5kZXJlZC5cbiAgICAgICAgdmFyIGFmZmVjdGVkSW5kZXhSZW5kZXJlZCA9IGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMuc29tZShmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNJbmRleFJlbmRlcmVkKHNwbGljZS5pbmRleCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpIHx8IGFmZmVjdGVkSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoICE9PSAnaXRlbXMubGVuZ3RoJykge1xuICAgICAgICB0aGlzLl9mb3J3YXJkSXRlbVBhdGgoY2hhbmdlLnBhdGgsIGNoYW5nZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9mb3J3YXJkSXRlbVBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSg2KTsgLy8gJ2l0ZW1zLicubGVuZ3RoID09IDZcbiAgICAgIHZhciBkb3QgPSBwYXRoLmluZGV4T2YoJy4nKSArIDE7XG4gICAgICBpZiAoZG90ID09PSAwKSB7XG4gICAgICAgIGRvdCA9IHBhdGgubGVuZ3RoO1xuICAgICAgfVxuICAgICAgdmFyIGlkeCA9IElTX1YyXG4gICAgICAgICAgPyBwYXJzZUludChwYXRoLnN1YnN0cmluZygwLCBkb3QpLCAxMClcbiAgICAgICAgICAvLyBFeHRyYWN0IGAjYCBmcm9tIGBwYXRoYC5cbiAgICAgICAgICA6IHBhcnNlSW50KHBhdGguc3Vic3RyaW5nKDEsIGRvdCksIDEwKTtcbiAgICAgIHZhciBvZmZzY3JlZW5JdGVtID0gdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW07XG4gICAgICB2YXIgaXNJbmRleFJlbmRlcmVkID0gdGhpcy5faXNJbmRleFJlbmRlcmVkKGlkeCk7XG4gICAgICB2YXIgaW5zdDtcbiAgICAgIHZhciBwaWR4O1xuXG4gICAgICBpZiAoaXNJbmRleFJlbmRlcmVkKSB7XG4gICAgICAgIHBpZHggPSB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGlkeCk7XG4gICAgICAgIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgIH0gZWxzZSBpZiAob2Zmc2NyZWVuSXRlbSkge1xuICAgICAgICBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQob2Zmc2NyZWVuSXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAoIWluc3QgfHwgaW5zdFt0aGlzLmluZGV4QXNdICE9PSBpZHgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKGRvdCk7XG4gICAgICBwYXRoID0gdGhpcy5hcyArIChwYXRoID8gJy4nICsgcGF0aCA6ICcnKTtcbiAgICAgIElTX1YyXG4gICAgICAgID8gaW5zdC5fc2V0UGVuZGluZ1Byb3BlcnR5T3JQYXRoKHBhdGgsIHZhbHVlLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgOiBpbnN0Lm5vdGlmeVBhdGgocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcyh0cnVlKTtcbiAgICAgIC8vIFRPRE8oYmxhc3Rlbik6IFYxIGRvZXNuJ3QgZG8gdGhpcyBhbmQgaXQncyBhIGJ1Z1xuICAgICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFtwaWR4XSk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IUFycmF5PCFQb2x5bWVyU3BsaWNlPn0gc3BsaWNlc1xuICAgICAqL1xuICAgIF9hZGp1c3RWaXJ0dWFsSW5kZXg6IGZ1bmN0aW9uKHNwbGljZXMpIHtcbiAgICAgIHNwbGljZXMuZm9yRWFjaChmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgICAgLy8gZGVzZWxlY3QgcmVtb3ZlZCBpdGVtc1xuICAgICAgICBzcGxpY2UucmVtb3ZlZC5mb3JFYWNoKHRoaXMuX3JlbW92ZUl0ZW0sIHRoaXMpO1xuICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gY2FyZSBhYm91dCBjaGFuZ2VzIGhhcHBlbmluZyBhYm92ZSB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgICBpZiAoc3BsaWNlLmluZGV4IDwgdGhpcy5fdmlydHVhbFN0YXJ0KSB7XG4gICAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgIHNwbGljZS5hZGRlZENvdW50IC0gc3BsaWNlLnJlbW92ZWQubGVuZ3RoLFxuICAgICAgICAgICAgICBzcGxpY2UuaW5kZXggLSB0aGlzLl92aXJ0dWFsU3RhcnQpO1xuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGRlbHRhO1xuICAgICAgICAgIGlmICh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgZGVsdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3JlbW92ZUl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdChpdGVtKTtcbiAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBmb2N1c2VkIGl0ZW1cbiAgICAgIGlmICh0aGlzLl9mb2N1c2VkSXRlbSAmJiB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9mb2N1c2VkSXRlbSlbdGhpcy5hc10gPT09IGl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIGEgcHJvdmlkZWQgZnVuY3Rpb24gcGVyIGV2ZXJ5IHBoeXNpY2FsIGluZGV4IGluIGBpdGVtU2V0YFxuICAgICAqIGBpdGVtU2V0YCBkZWZhdWx0IHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGVudGlyZSBzZXQgb2YgcGh5c2ljYWwgaW5kZXhlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IWZ1bmN0aW9uKG51bWJlciwgbnVtYmVyKX0gZm5cbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqL1xuICAgIF9pdGVyYXRlSXRlbXM6IGZ1bmN0aW9uKGZuLCBpdGVtU2V0KSB7XG4gICAgICB2YXIgcGlkeCwgdmlkeCwgcnRuLCBpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiBpdGVtU2V0KSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcGlkeCA9IGl0ZW1TZXRbaV07XG4gICAgICAgICAgdmlkeCA9IHRoaXMuX2NvbXB1dGVWaWR4KHBpZHgpO1xuICAgICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpZHggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICB2aWR4ID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgICBmb3IgKDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsQ291bnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHBpZHggPSAwOyBwaWR4IDwgdGhpcy5fcGh5c2ljYWxTdGFydDsgcGlkeCsrLCB2aWR4KyspIHtcbiAgICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZpcnR1YWwgaW5kZXggZm9yIGEgZ2l2ZW4gcGh5c2ljYWwgaW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaWR4IFBoeXNpY2FsIGluZGV4XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIF9jb21wdXRlVmlkeDogZnVuY3Rpb24ocGlkeCkge1xuICAgICAgaWYgKHBpZHggPj0gdGhpcy5fcGh5c2ljYWxTdGFydCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHBpZHggLSB0aGlzLl9waHlzaWNhbFN0YXJ0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAodGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpICsgcGlkeDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyB0aGUgZGF0YSBtb2RlbHMgdG8gYSBnaXZlbiBzZXQgb2YgaXRlbXMuXG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICAgKi9cbiAgICBfYXNzaWduTW9kZWxzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1t2aWR4XTtcbiAgICAgICAgaWYgKGl0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgIHZhciBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZWwpO1xuICAgICAgICAgIGluc3QuX19rZXlfXyA9IHRoaXMuX2NvbGxlY3Rpb24gPyB0aGlzLl9jb2xsZWN0aW9uLmdldEtleShpdGVtKSA6IG51bGw7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsIHRoaXMuYXMsIGl0ZW0pO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLnNlbGVjdGVkQXMsIHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKGl0ZW0pKTtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5pbmRleEFzLCB2aWR4KTtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgJ3RhYkluZGV4JywgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9PT0gdmlkeCA/IDAgOiAtMSk7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxJbmRleEZvcktleVtpbnN0Ll9fa2V5X19dID0gcGlkeDtcbiAgICAgICAgICBpbnN0Ll9mbHVzaFByb3BlcnRpZXMgJiYgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzKHRydWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGl0ZW1TZXQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBoZWlnaHQgZm9yIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICAgKi9cbiAgICBfdXBkYXRlTWV0cmljczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIGRpc3RyaWJ1dGVkIGFsbCB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAgIC8vIHNvIHdlIGNhbiBtZWFzdXJlIHRoZW0uXG4gICAgICBQb2x5bWVyLmZsdXNoID8gUG9seW1lci5mbHVzaCgpIDogUG9seW1lci5kb20uZmx1c2goKTtcblxuICAgICAgdmFyIG5ld1BoeXNpY2FsU2l6ZSA9IDA7XG4gICAgICB2YXIgb2xkUGh5c2ljYWxTaXplID0gMDtcbiAgICAgIHZhciBwcmV2QXZnQ291bnQgPSB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudDtcbiAgICAgIHZhciBwcmV2UGh5c2ljYWxBdmcgPSB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIG9sZFBoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdIHx8IDA7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdLm9mZnNldEhlaWdodDtcbiAgICAgICAgbmV3UGh5c2ljYWxTaXplICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50ICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gPyAxIDogMDtcbiAgICAgIH0sIGl0ZW1TZXQpO1xuXG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9IE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2xkUGh5c2ljYWxTaXplID0gKHRoaXMuX2l0ZW1zUGVyUm93ID09PSAxKSA/IG9sZFBoeXNpY2FsU2l6ZSA6ICBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplID0gdGhpcy5fcGh5c2ljYWxTaXplICsgbmV3UGh5c2ljYWxTaXplIC0gb2xkUGh5c2ljYWxTaXplO1xuICAgICAgICB0aGlzLl9pdGVtc1BlclJvdyA9IDE7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgdGhlIGF2ZXJhZ2UgaWYgaXQgbWVhc3VyZWQgc29tZXRoaW5nLlxuICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50ICE9PSBwcmV2QXZnQ291bnQpIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICgocHJldlBoeXNpY2FsQXZnICogcHJldkF2Z0NvdW50KSArIG5ld1BoeXNpY2FsU2l6ZSkgL1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlR3JpZE1ldHJpY3M6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faXRlbVdpZHRoID0gdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgPyB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMjAwO1xuICAgICAgdGhpcy5fcm93SGVpZ2h0ID0gdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgPyB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLm9mZnNldEhlaWdodCA6IDIwMDtcbiAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gdGhpcy5faXRlbVdpZHRoID8gTWF0aC5mbG9vcih0aGlzLl92aWV3cG9ydFdpZHRoIC8gdGhpcy5faXRlbVdpZHRoKSA6IHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMuXG4gICAgICovXG4gICAgX3Bvc2l0aW9uSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fYWRqdXN0U2Nyb2xsUG9zaXRpb24oKTtcblxuICAgICAgdmFyIHkgPSB0aGlzLl9waHlzaWNhbFRvcDtcblxuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB2YXIgdG90YWxJdGVtV2lkdGggPSB0aGlzLl9pdGVtc1BlclJvdyAqIHRoaXMuX2l0ZW1XaWR0aDtcbiAgICAgICAgdmFyIHJvd09mZnNldCA9ICh0aGlzLl92aWV3cG9ydFdpZHRoIC0gdG90YWxJdGVtV2lkdGgpIC8gMjtcblxuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIHZhciBtb2R1bHVzID0gdmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcigobW9kdWx1cyAqIHRoaXMuX2l0ZW1XaWR0aCkgKyByb3dPZmZzZXQpO1xuICAgICAgICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgICAgICAgeCA9IHggKiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUzZCh4ICsgJ3B4JywgeSArICdweCcsIDAsIHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRSZW5kZXJOZXh0Um93KHZpZHgpKSB7XG4gICAgICAgICAgICB5ICs9IHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIHkgKyAncHgnLCAwLCB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgICAgICB5ICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgICBpZiAoIXRoaXMuZ3JpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb21wdXRlVmlkeChwaWR4KSAlIHRoaXMuX2l0ZW1zUGVyUm93ICE9PSB0aGlzLl9pdGVtc1BlclJvdyAtIDEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcm93SGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zLCBiYXNlZCBvbiB0aGUgY3VycmVudCBpbmRleCxcbiAgICAgKiB3aGV0aGVyIG9yIG5vdCB0aGUgbmV4dCBpbmRleCB3aWxsIG5lZWRcbiAgICAgKiB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyByb3cuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmlkeCBWaXJ0dWFsIGluZGV4XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBfc2hvdWxkUmVuZGVyTmV4dFJvdzogZnVuY3Rpb24odmlkeCkge1xuICAgICAgcmV0dXJuIHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyA9PT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIHRoZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCB3YXMgb3ZlcmVzdGltYXRlZC5cbiAgICAgKi9cbiAgICBfYWRqdXN0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlbHRhSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ID09PSAwID8gdGhpcy5fcGh5c2ljYWxUb3AgOlxuICAgICAgICAgIE1hdGgubWluKHRoaXMuX3Njcm9sbFBvc2l0aW9uICsgdGhpcy5fcGh5c2ljYWxUb3AsIDApO1xuICAgICAgLy8gTm90ZTogdGhlIGRlbHRhIGNhbiBiZSBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cbiAgICAgIGlmIChkZWx0YUhlaWdodCAhPT0gMCkge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHRoaXMuX3BoeXNpY2FsVG9wIC0gZGVsdGFIZWlnaHQ7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgICAgIC8vIGp1a2luZyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGludGVyaWFsIHNjcm9sbGluZyBvbiBpT1MgaXMgbm8gYnVlbm9cbiAgICAgICAgaWYgKCFJT1NfVE9VQ0hfU0NST0xMSU5HICYmIHNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRvcCAtIGRlbHRhSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsLlxuICAgICAqL1xuICAgIF9yZXNldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbihwb3MpIHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCAmJiBwb3MgPj0gMCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb3AgPSBwb3M7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzY3JvbGwgaGVpZ2h0LCB0aGF0J3MgdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIElmIHRydWUsIHVwZGF0ZXMgdGhlIGhlaWdodCBubyBtYXR0ZXIgd2hhdC5cbiAgICAgKi9cbiAgICBfdXBkYXRlU2Nyb2xsZXJTaXplOiBmdW5jdGlvbihmb3JjZVVwZGF0ZSkge1xuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPSB0aGlzLl92aXJ0dWFsUm93Q291bnQgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPSAodGhpcy5fcGh5c2ljYWxCb3R0b20gK1xuICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCwgMCkgKiB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UpO1xuICAgICAgfVxuICAgICAgZm9yY2VVcGRhdGUgPSBmb3JjZVVwZGF0ZSB8fCB0aGlzLl9zY3JvbGxIZWlnaHQgPT09IDA7XG4gICAgICBmb3JjZVVwZGF0ZSA9IGZvcmNlVXBkYXRlIHx8IHRoaXMuX3Njcm9sbFBvc2l0aW9uID49IHRoaXMuX2VzdFNjcm9sbEhlaWdodCAtIHRoaXMuX3BoeXNpY2FsU2l6ZTtcbiAgICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5ncmlkICYmIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPCB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgICAvLyBBbW9ydGl6ZSBoZWlnaHQgYWRqdXN0bWVudCwgc28gaXQgd29uJ3QgdHJpZ2dlciBsYXJnZSByZXBhaW50cyB0b28gb2Z0ZW4uXG4gICAgICBpZiAoZm9yY2VVcGRhdGUgfHwgTWF0aC5hYnModGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fc2Nyb2xsSGVpZ2h0KSA+PSB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgICB0aGlzLiQuaXRlbXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpdGVtIGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgICAqIG9mIHRoZSBwaHlzaWNhbCBpdGVtcyBpbiB0aGUgRE9NIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNjcm9sbFRvSXRlbVxuICAgICAqIEBwYXJhbSB7KE9iamVjdCl9IGl0ZW0gVGhlIGl0ZW0gdG8gYmUgc2Nyb2xsZWQgdG9cbiAgICAgKi9cbiAgICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9JbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpbmRleCBpbiB0aGUgdmlydHVhbCBsaXN0IHJlZ2FyZGxlc3NcbiAgICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzY3JvbGxUb0luZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICAgKi9cbiAgICBzY3JvbGxUb0luZGV4OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJyB8fCBpZHggPCAwIHx8IGlkeCA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBQb2x5bWVyLmZsdXNoID8gUG9seW1lci5mbHVzaCgpIDogUG9seW1lci5kb20uZmx1c2goKTtcbiAgICAgIC8vIEl0ZW1zIHNob3VsZCBoYXZlIGJlZW4gcmVuZGVyZWQgcHJpb3Igc2Nyb2xsaW5nIHRvIGFuIGluZGV4LlxuICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWR4ID0gdGhpcy5fY2xhbXAoaWR4LCAwLCB0aGlzLl92aXJ0dWFsQ291bnQtMSk7XG4gICAgICAvLyBVcGRhdGUgdGhlIHZpcnR1YWwgc3RhcnQgb25seSB3aGVuIG5lZWRlZC5cbiAgICAgIGlmICghdGhpcy5faXNJbmRleFJlbmRlcmVkKGlkeCkgfHwgaWR4ID49IHRoaXMuX21heFZpcnR1YWxTdGFydCkge1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLmdyaWQgPyAoaWR4IC0gdGhpcy5faXRlbXNQZXJSb3cgKiAyKSA6IChpZHggLSAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hbmFnZUZvY3VzKCk7XG4gICAgICB0aGlzLl9hc3NpZ25Nb2RlbHMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoKTtcbiAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQuXG4gICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fdmlydHVhbFN0YXJ0IC8gdGhpcy5faXRlbXNQZXJSb3cpICAqIHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgICAgdmFyIGN1cnJlbnRUb3BJdGVtID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIHZhciBjdXJyZW50VmlydHVhbEl0ZW0gPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICB2YXIgdGFyZ2V0T2Zmc2V0VG9wID0gMDtcbiAgICAgIHZhciBoaWRkZW5Db250ZW50U2l6ZSA9IHRoaXMuX2hpZGRlbkNvbnRlbnRTaXplO1xuICAgICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIGFzIG11Y2ggYXMgd2UgY2FuLlxuICAgICAgd2hpbGUgKGN1cnJlbnRWaXJ0dWFsSXRlbSA8IGlkeCAmJiB0YXJnZXRPZmZzZXRUb3AgPD0gaGlkZGVuQ29udGVudFNpemUpIHtcbiAgICAgICAgdGFyZ2V0T2Zmc2V0VG9wID0gdGFyZ2V0T2Zmc2V0VG9wICsgdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGN1cnJlbnRUb3BJdGVtKTtcbiAgICAgICAgY3VycmVudFRvcEl0ZW0gPSAoY3VycmVudFRvcEl0ZW0gKyAxKSAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgICAgIGN1cnJlbnRWaXJ0dWFsSXRlbSsrO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKHRydWUpO1xuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbih0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldCArIHRhcmdldE9mZnNldFRvcCk7XG4gICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBwaHlzaWNhbCBhdmVyYWdlIGFuZCB0aGUgYXZlcmFnZSBjb3VudC5cbiAgICAgKi9cbiAgICBfcmVzZXRBdmVyYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IDA7XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgaGFuZGxlciBmb3IgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ5IGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgXG4gICAgICogd2hlbiB0aGUgZWxlbWVudCBpcyByZXNpemVkLlxuICAgICAqL1xuICAgIF9yZXNpemVIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICAvLyBTa2lwIHRoZSByZXNpemUgZXZlbnQgb24gdG91Y2ggZGV2aWNlcyB3aGVuIHRoZSBhZGRyZXNzIGJhciBzbGlkZXMgdXAuXG4gICAgICAgIHZhciBkZWx0YSA9IE1hdGguYWJzKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC0gdGhpcy5fc2Nyb2xsVGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzVmlzaWJsZSkge1xuICAgICAgICAgIC8vIFJlaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2Nyb2xsTGlzdGVuZXIodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fcmVzZXRBdmVyYWdlKCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVW5pbnN0YWxsIHRoZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGdpdmVuIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNlbGVjdEl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNlbGVjdEluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICovXG4gICAgc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubXVsdGlTZWxlY3Rpb24gJiYgdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiQuc2VsZWN0b3Iuc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgLy8gdjJcbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHYxXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3QodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgdGhlIGdpdmVuIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGRlc2VsZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgZGVzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXNlbGVjdEluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBkZXNlbGVjdEluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICovXG4gICAgZGVzZWxlY3RJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgLy8gdjJcbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdjFcbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgYSBnaXZlbiBpdGVtIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtXG4gICAgICogaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIG9iamVjdC5cbiAgICAgKi9cbiAgICB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5XG4gICAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW0gaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpc1NlbGVjdGVkID0gdGhpcy4kLnNlbGVjdG9yLmlzSW5kZXhTZWxlY3RlZFxuICAgICAgICAgID8gdGhpcy4kLnNlbGVjdG9yLmlzSW5kZXhTZWxlY3RlZChpbmRleCkgOiB0aGlzLiQuc2VsZWN0b3IuaXNTZWxlY3RlZCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgICAgIGlzU2VsZWN0ZWQgPyB0aGlzLmRlc2VsZWN0SW5kZXgoaW5kZXgpIDogdGhpcy5zZWxlY3RJbmRleChpbmRleCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNsZWFyU2VsZWN0aW9uXG4gICAgICovXG4gICAgY2xlYXJTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSlbdGhpcy5zZWxlY3RlZEFzXSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLiQuc2VsZWN0b3IuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGB0YXBgIGlmIGBzZWxlY3Rpb25FbmFibGVkYCBpcyB0cnVlLFxuICAgICAqIGl0IHdpbGwgcmVtb3ZlIHRoZSBsaXN0ZW5lciBvdGhlcndpc2UuXG4gICAgICovXG4gICAgX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3Rpb25FbmFibGVkKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IHNlbGVjdGlvbkVuYWJsZWQgPyB0aGlzLmxpc3RlbiA6IHRoaXMudW5saXN0ZW47XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgdGhpcywgJ3RhcCcsICdfc2VsZWN0aW9uSGFuZGxlcicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYW4gaXRlbSBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBfc2VsZWN0aW9uSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbW9kZWxUYWJJbmRleCwgYWN0aXZlRWxUYWJJbmRleDtcbiAgICAgIHZhciB0YXJnZXQgPSBQb2x5bWVyLmRvbShlKS5wYXRoWzBdO1xuICAgICAgdmFyIGl0ZW1zSG9zdCA9IHRoaXMuX2l0ZW1zUGFyZW50Lm5vZGUuZG9tSG9zdDtcbiAgICAgIHZhciBhY3RpdmVFbCA9IFBvbHltZXIuZG9tKGl0ZW1zSG9zdCA/IGl0ZW1zSG9zdC5yb290IDogZG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB2YXIgcGh5c2ljYWxJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KG1vZGVsW3RoaXMuaW5kZXhBc10pXTtcbiAgICAgIC8vIFNhZmFyaSBkb2VzIG5vdCBmb2N1cyBjZXJ0YWluIGZvcm0gY29udHJvbHMgdmlhIG1vdXNlXG4gICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTE4MDQzXG4gICAgICBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2lucHV0JyB8fFxuICAgICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nIHx8XG4gICAgICAgICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gU2V0IGEgdGVtcG9yYXJ5IHRhYmluZGV4XG4gICAgICBtb2RlbFRhYkluZGV4ID0gbW9kZWwudGFiSW5kZXg7XG4gICAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICAgIGFjdGl2ZUVsVGFiSW5kZXggPSBhY3RpdmVFbCA/IGFjdGl2ZUVsLnRhYkluZGV4IDogLTE7XG4gICAgICBtb2RlbC50YWJJbmRleCA9IG1vZGVsVGFiSW5kZXg7XG4gICAgICAvLyBPbmx5IHNlbGVjdCB0aGUgaXRlbSBpZiB0aGUgdGFwIHdhc24ndCBvbiBhIGZvY3VzYWJsZSBjaGlsZFxuICAgICAgLy8gb3IgdGhlIGVsZW1lbnQgYm91bmQgdG8gYHRhYkluZGV4YFxuICAgICAgaWYgKGFjdGl2ZUVsICYmIHBoeXNpY2FsSXRlbSAhPT0gYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtLmNvbnRhaW5zKGFjdGl2ZUVsKSAmJiBhY3RpdmVFbFRhYkluZGV4ICE9PSBTRUNSRVRfVEFCSU5ERVgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJdGVtKG1vZGVsW3RoaXMuYXNdKTtcbiAgICB9LFxuXG4gICAgX211bHRpU2VsZWN0aW9uQ2hhbmdlZDogZnVuY3Rpb24obXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMuJC5zZWxlY3Rvci5tdWx0aSA9IG11bHRpU2VsZWN0aW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIGEgZ2l2ZW4gbGlzdCBpdGVtLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1cGRhdGVTaXplRm9ySXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHVwZGF0ZVNpemVGb3JJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVTaXplRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHNpemUgb2YgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdXBkYXRlU2l6ZUZvckluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZUZvckluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGVtcG9yYXJ5IGJhY2tmaWxsIGl0ZW0gaW4gdGhlIHJlbmRlcmVkIHBvb2wgb2YgcGh5c2ljYWwgaXRlbXNcbiAgICAgKiB0byByZXBsYWNlIHRoZSBtYWluIGZvY3VzZWQgaXRlbS4gVGhlIGZvY3VzZWQgaXRlbSBoYXMgdGFiSW5kZXggPSAwXG4gICAgICogYW5kIG1pZ2h0IGJlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgICAqXG4gICAgICogVGhpcyBkeW5hbWljIHJlcGxhY2VtZW50IGhlbHBzIHRvIHByZXNlcnZlIHRoZSBmb2N1cyBzdGF0ZS5cbiAgICAgKi9cbiAgICBfbWFuYWdlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZpZHggPSB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4O1xuXG4gICAgICBpZiAoZmlkeCA+PSAwICYmIGZpZHggPCB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgLy8gaWYgaXQncyBhIHZhbGlkIGluZGV4LCBjaGVjayBpZiB0aGF0IGluZGV4IGlzIHJlbmRlcmVkXG4gICAgICAgIC8vIGluIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChmaWR4KSkge1xuICAgICAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydHVhbENvdW50ID4gMCAmJiB0aGlzLl9waHlzaWNhbENvdW50ID4gMCkge1xuICAgICAgICAvLyBvdGhlcndpc2UsIGFzc2lnbiB0aGUgaW5pdGlhbCBmb2N1c2VkIGluZGV4LlxuICAgICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9waHlzaWNhbFN0YXJ0XTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSByYW5kb20gaW5kZXggdG8gdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRoYXQgY29tcGxldGVzIGl0J3Mgcm93LlxuICAgICAqIEFsbG93cyBmb3IgYmV0dGVyIG9yZGVyIGFuZCBmaWxsIGNvbXB1dGF0aW9uIHdoZW4gZ3JpZCA9PSB0cnVlLlxuICAgICAqL1xuICAgIF9jb252ZXJ0SW5kZXhUb0NvbXBsZXRlUm93OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIC8vIHdoZW4gZ3JpZCA9PSBmYWxzZSBfaXRlbVBlclJvdyBjYW4gYmUgdW5zZXQuXG4gICAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1zUGVyUm93IHx8IDE7XG4gICAgICByZXR1cm4gdGhpcy5ncmlkID8gTWF0aC5jZWlsKGlkeCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX2l0ZW1zUGVyUm93IDogaWR4O1xuICAgIH0sXG5cbiAgICBfaXNJbmRleFJlbmRlcmVkOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiBpZHggPj0gdGhpcy5fdmlydHVhbFN0YXJ0ICYmIGlkeCA8PSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgIH0sXG5cbiAgICBfaXNJbmRleFZpc2libGU6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIGlkeCA+PSB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICYmIGlkeCA8PSB0aGlzLmxhc3RWaXNpYmxlSW5kZXg7XG4gICAgfSxcblxuICAgIF9nZXRQaHlzaWNhbEluZGV4OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcGh5c2ljYWxTdGFydCArIChpZHggLSB0aGlzLl92aXJ0dWFsU3RhcnQpKSAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgfSxcblxuICAgIGZvY3VzSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShpZHgpO1xuICAgIH0sXG5cbiAgICBfZm9jdXNQaHlzaWNhbEl0ZW06IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIC8vIHNjcm9sbCB0byBpbmRleCB0byBtYWtlIHN1cmUgaXQncyByZW5kZXJlZFxuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4KTtcbiAgICAgIH1cbiAgICAgIHZhciBwaHlzaWNhbEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaWR4KV07XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChwaHlzaWNhbEl0ZW0pO1xuICAgICAgdmFyIGZvY3VzYWJsZTtcbiAgICAgIC8vIHNldCBhIHNlY3JldCB0YWIgaW5kZXhcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgICAgLy8gY2hlY2sgaWYgZm9jdXNhYmxlIGVsZW1lbnQgaXMgdGhlIHBoeXNpY2FsIGl0ZW1cbiAgICAgIGlmIChwaHlzaWNhbEl0ZW0udGFiSW5kZXggPT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgIGZvY3VzYWJsZSA9IHBoeXNpY2FsSXRlbTtcbiAgICAgIH1cbiAgICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2hpY2ggdGFiaW5kZXggaXMgYm91bmQgdG8gdGhlIHNlY3JldCB0YWIgaW5kZXhcbiAgICAgIGlmICghZm9jdXNhYmxlKSB7XG4gICAgICAgIGZvY3VzYWJsZSA9IFBvbHltZXIuZG9tKHBoeXNpY2FsSXRlbSkucXVlcnlTZWxlY3RvcignW3RhYmluZGV4PVwiJyArIFNFQ1JFVF9UQUJJTkRFWCArICdcIl0nKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlc3RvcmUgdGhlIHRhYiBpbmRleFxuICAgICAgbW9kZWwudGFiSW5kZXggPSAwO1xuICAgICAgLy8gZm9jdXMgdGhlIGZvY3VzYWJsZSBlbGVtZW50XG4gICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gaWR4O1xuICAgICAgZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5mb2N1cygpO1xuICAgIH0sXG5cbiAgICBfcmVtb3ZlRm9jdXNlZEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gLTE7XG4gICAgfSxcblxuICAgIF9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZnBpZHggPSB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleDtcblxuICAgICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtIHx8IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnN0YW1wKG51bGwpO1xuICAgICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJyk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgICB9XG4gICAgICAvLyBTZXQgdGhlIG9mZmNyZWVuIGZvY3VzZWQgcGh5c2ljYWwgaXRlbS5cbiAgICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkudGFiSW5kZXggPSAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF0gPSB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gZnBpZHg7XG4gICAgICAvLyBIaWRlIHRoZSBmb2N1c2VkIHBoeXNpY2FsLlxuICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCBISURERU5fWSwgMCwgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgIH0sXG5cbiAgICBfcmVzdG9yZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQXNzaWduIG1vZGVscyB0byB0aGUgZm9jdXNlZCBpbmRleC5cbiAgICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgICAgLy8gR2V0IHRoZSBuZXcgcGh5c2ljYWwgaW5kZXggZm9yIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICAgIHZhciBvblNjcmVlbkl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICAgIGlmICghb25TY3JlZW5JdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvblNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQob25TY3JlZW5JdGVtKTtcbiAgICAgIHZhciBvZmZTY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICAgIC8vIFJlc3RvcmVzIHRoZSBwaHlzaWNhbCBpdGVtIG9ubHkgd2hlbiBpdCBoYXMgdGhlIHNhbWUgbW9kZWxcbiAgICAgIC8vIGFzIHRoZSBvZmZzY3JlZW4gb25lLiBVc2Uga2V5IGZvciBjb21wYXJpc29uIHNpbmNlIHVzZXJzIGNhbiBzZXRcbiAgICAgIC8vIGEgbmV3IGl0ZW0gdmlhIHNldCgnaXRlbXMuaWR4JykuXG4gICAgICBpZiAob25TY3JlZW5JbnN0YW5jZVt0aGlzLmFzXSA9PT0gb2ZmU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10pIHtcbiAgICAgICAgLy8gRmxpcCB0aGUgZm9jdXMgYmFja2ZpbGwuXG4gICAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gb25TY3JlZW5JdGVtO1xuICAgICAgICBvblNjcmVlbkluc3RhbmNlLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzZWQgcGh5c2ljYWwgaXRlbS5cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbTtcbiAgICAgICAgLy8gSGlkZSB0aGUgcGh5c2ljYWwgaXRlbSB0aGF0IGJhY2tmaWxscy5cbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCBISURERU5fWSwgMCwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgIH0sXG5cbiAgICBfZGlkRm9jdXM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0YXJnZXRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgIHZhciBmb2N1c2VkTW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9mb2N1c2VkSXRlbSk7XG4gICAgICB2YXIgaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSAhPT0gbnVsbDtcbiAgICAgIHZhciBmaWR4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleDtcbiAgICAgIGlmICghdGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGZvY3VzZWRNb2RlbCA9PT0gdGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZm9jdXNlZCB0aGUgc2FtZSBpdGVtLCB0aGVuIGJyaW5nIGl0IGludG8gdmlldyBpZiBpdCdzIG5vdCB2aXNpYmxlLlxuICAgICAgICBpZiAoIXRoaXMuX2lzSW5kZXhWaXNpYmxlKGZpZHgpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGZpZHgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgLy8gUmVzdG9yZSB0YWJJbmRleCBmb3IgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0uXG4gICAgICAgIGlmIChmb2N1c2VkTW9kZWwpIHtcbiAgICAgICAgICBmb2N1c2VkTW9kZWwudGFiSW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHRhYkluZGV4IGZvciB0aGUgbmV4dCBmb2N1c2VkIGl0ZW0uXG4gICAgICAgIHRhcmdldE1vZGVsLnRhYkluZGV4ID0gMDtcbiAgICAgICAgZmlkeCA9IHRhcmdldE1vZGVsW3RoaXMuaW5kZXhBc107XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBmaWR4O1xuICAgICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgoZmlkeCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleF07XG4gICAgICAgIGlmIChoYXNPZmZzY3JlZW5Gb2N1c2VkSXRlbSAmJiAhdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfa2V5ZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgLyogQVJST1dfRE9XTiAqLyA0MDpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLmdyaWQgPyB0aGlzLl9pdGVtc1BlclJvdyA6IDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBBUlJPV19SSUdIVCAqLyAzOTpcbiAgICAgICAgICBpZiAodGhpcy5ncmlkKSB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuX2lzUlRMID8gLTEgOiAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogQVJST1dfVVAgKi8gMzg6XG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCAtICh0aGlzLmdyaWQgPyB0aGlzLl9pdGVtc1BlclJvdyA6IDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBBUlJPV19MRUZUICovIDM3OlxuICAgICAgICAgIGlmICh0aGlzLmdyaWQpIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAxIDogLTEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBFTlRFUiAqLyAxMzpcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KTtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25IYW5kbGVyKGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY2xhbXA6IGZ1bmN0aW9uKHYsIG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHYpKTtcbiAgICB9LFxuXG4gICAgX2RlYm91bmNlOiBmdW5jdGlvbihuYW1lLCBjYiwgYXN5bmNNb2R1bGUpIHtcbiAgICAgIGlmIChJU19WMikge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZXJzID0gdGhpcy5fZGVib3VuY2VycyB8fCB7fTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2Vyc1tuYW1lXSA9IFBvbHltZXIuRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICAgIHRoaXMuX2RlYm91bmNlcnNbbmFtZV0sXG4gICAgICAgICAgYXN5bmNNb2R1bGUsXG4gICAgICAgICAgY2IuYmluZCh0aGlzKSk7XG4gICAgICAgIFBvbHltZXIuZW5xdWV1ZURlYm91bmNlcih0aGlzLl9kZWJvdW5jZXJzW25hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFBvbHltZXIuZG9tLmFkZERlYm91bmNlcih0aGlzLmRlYm91bmNlKG5hbWUsIGNiKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9mb3J3YXJkUHJvcGVydHk6IGZ1bmN0aW9uKGluc3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAoSVNfVjIpIHtcbiAgICAgICAgaW5zdC5fc2V0UGVuZGluZ1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogVGVtcGxhdGl6ZXIgYmluZGluZ3MgZm9yIHYyICovXG4gICAgX2ZvcndhcmRIb3N0UHJvcFYyOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkuZm9yd2FyZEhvc3RQcm9wKHByb3AsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfbm90aWZ5SW5zdGFuY2VQcm9wVjI6IGZ1bmN0aW9uKGluc3QsIHByb3AsIHZhbHVlKSB7XG4gICAgIGlmIChQb2x5bWVyLlBhdGgubWF0Y2hlcyh0aGlzLmFzLCBwcm9wKSkge1xuICAgICAgICB2YXIgaWR4ID0gaW5zdFt0aGlzLmluZGV4QXNdO1xuICAgICAgICBpZiAocHJvcCA9PSB0aGlzLmFzKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpZHhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKFBvbHltZXIuUGF0aC50cmFuc2xhdGUodGhpcy5hcywgJ2l0ZW1zLicgKyBpZHgsIHByb3ApLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MSAqL1xuICAgIF9nZXRTdGFtcGVkQ2hpbGRyZW46IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsSXRlbXM7XG4gICAgfSxcblxuICAgIF9mb3J3YXJkSW5zdGFuY2VQYXRoOiBmdW5jdGlvbihpbnN0LCBwYXRoLCB2YWx1ZSkge1xuICAgICAgaWYgKHBhdGguaW5kZXhPZih0aGlzLmFzICsgJy4nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vdGlmeVBhdGgoJ2l0ZW1zLicgKyBpbnN0Ll9fa2V5X18gKyAnLicgK1xuICAgICAgICAgICAgcGF0aC5zbGljZSh0aGlzLmFzLmxlbmd0aCArIDEpLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9mb3J3YXJkUGFyZW50UGF0aDogZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pLm5vdGlmeVBhdGgocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9mb3J3YXJkUGFyZW50UHJvcDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pKCk7XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWxpc3QvaXJvbi1saXN0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5pcm9uLXJlcXVlc3QgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBYTUxIdHRwUmVxdWVzdHMuXG5cbiAgICA8aXJvbi1yZXF1ZXN0IGlkPVwieGhyXCI+PC9pcm9uLXJlcXVlc3Q+XG4gICAgLi4uXG4gICAgdGhpcy4kLnhoci5zZW5kKHt1cmw6IHVybCwgYm9keTogcGFyYW1zfSk7XG4tLT5cbjxzY3JpcHQ+XG4gICd1c2Ugc3RyaWN0JztcblxuICBQb2x5bWVyKHtcbiAgICBpczogJ2lyb24tcmVxdWVzdCcsXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICAgICAqIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7WE1MSHR0cFJlcXVlc3R9XG4gICAgICAgKi9cbiAgICAgIHhocjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBhcnNlZCByZXNwb25zZSBib2R5LCBpZiB0aGUgYHhocmAgaGFzIGNvbXBsZXRlbHlcbiAgICAgICAqIHJlc29sdmVkLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICovXG4gICAgICByZXNwb25zZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc3RhdHVzIGNvZGUsIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseSByZXNvbHZlZC5cbiAgICAgICAqL1xuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHN0YXR1cyB0ZXh0LCBpZiB0aGUgYHhocmAgaGFzIGNvbXBsZXRlbHkgcmVzb2x2ZWQuXG4gICAgICAgKi9cbiAgICAgIHN0YXR1c1RleHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYHhocmAgcmVzcG9uc2UgY29tZXMgYmFjaywgb3IgcmVqZWN0c1xuICAgICAgICogaWYgdGhlcmUgaXMgYW4gZXJyb3IgYmVmb3JlIHRoZSBgeGhyYCBjb21wbGV0ZXMuXG4gICAgICAgKiBUaGUgcmVzb2x2ZSBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCB0aGUgb3JpZ2luYWwgcmVxdWVzdCBhcyBhbiBhcmd1bWVudC5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIHRoZSByZWplY3QgY2FsbGJhY2sgaXMgY2FsbGVkIHdpdGggYW4gYEVycm9yYCBhcyBhbiBhcmd1bWVudC5cbiAgICAgICAqIElmIGByZWplY3RXaXRoUmVxdWVzdGAgaXMgdHJ1ZSwgdGhlIHJlamVjdCBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhbiBcbiAgICAgICAqIG9iamVjdCB3aXRoIHR3byBrZXlzOiBgcmVxdWVzdGAsIHRoZSBvcmlnaW5hbCByZXF1ZXN0LCBhbmQgYGVycm9yYCwgdGhlIFxuICAgICAgICogZXJyb3Igb2JqZWN0LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtQcm9taXNlfVxuICAgICAgICovXG4gICAgICBjb21wbGV0ZXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ29tcGxldGVzID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzID0gcmVqZWN0O1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gZW1pdHRlZCBieSB0aGUgWEhSIGlmXG4gICAgICAgKiBhdmFpbGFibGUuXG4gICAgICAgKlxuICAgICAgICogQGRlZmF1bHQge31cbiAgICAgICAqL1xuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFib3J0ZWQgd2lsbCBiZSB0cnVlIGlmIGFuIGFib3J0IG9mIHRoZSByZXF1ZXN0IGlzIGF0dGVtcHRlZC5cbiAgICAgICAqL1xuICAgICAgYWJvcnRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVycm9yZWQgd2lsbCBiZSB0cnVlIGlmIHRoZSBicm93c2VyIGZpcmVkIGFuIGVycm9yIGV2ZW50IGZyb20gdGhlXG4gICAgICAgKiBYSFIgb2JqZWN0IChtYWlubHkgbmV0d29yayBlcnJvcnMpLlxuICAgICAgICovXG4gICAgICBlcnJvcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaW1lZE91dCB3aWxsIGJlIHRydWUgaWYgdGhlIFhIUiB0aHJldyBhIHRpbWVvdXQgZXZlbnQuXG4gICAgICAgKi9cbiAgICAgIHRpbWVkT3V0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdWNjZWVkZWQgaXMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuIFRoZSByZXF1ZXN0IHN1Y2NlZWRlZCBpZiBpdFxuICAgICAqIGxvYWRlZCB3aXRob3V0IGVycm9yLCB3YXNuJ3QgYWJvcnRlZCwgYW5kIHRoZSBzdGF0dXMgY29kZSBpcyDiiaUgMjAwLCBhbmRcbiAgICAgKiA8IDMwMCwgb3IgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIDAuXG4gICAgICpcbiAgICAgKiBUaGUgc3RhdHVzIGNvZGUgMCBpcyBhY2NlcHRlZCBhcyBhIHN1Y2Nlc3MgYmVjYXVzZSBzb21lIHNjaGVtZXMgLSBlLmcuXG4gICAgICogZmlsZTovLyAtIGRvbid0IHByb3ZpZGUgc3RhdHVzIGNvZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgc3VjY2VlZGVkKCkge1xuICAgICAgaWYgKHRoaXMuZXJyb3JlZCB8fCB0aGlzLmFib3J0ZWQgfHwgdGhpcy50aW1lZE91dCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy54aHIuc3RhdHVzIHx8IDA7XG5cbiAgICAgIC8vIE5vdGU6IGlmIHdlIGFyZSB1c2luZyB0aGUgZmlsZTovLyBwcm90b2NvbCwgdGhlIHN0YXR1cyBjb2RlIHdpbGwgYmUgMFxuICAgICAgLy8gZm9yIGFsbCBvdXRjb21lcyAoc3VjY2Vzc2Z1bCBvciBvdGhlcndpc2UpLlxuICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gMCB8fFxuICAgICAgICAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhbiBIVFRQIHJlcXVlc3QgdG8gdGhlIHNlcnZlciBhbmQgcmV0dXJucyBhIHByb21pc2UgKHNlZSB0aGUgYGNvbXBsZXRlc2BcbiAgICAgKiBwcm9wZXJ0eSBmb3IgZGV0YWlscykuXG4gICAgICpcbiAgICAgKiBUaGUgaGFuZGxpbmcgb2YgdGhlIGBib2R5YCBwYXJhbWV0ZXIgd2lsbCB2YXJ5IGJhc2VkIG9uIHRoZSBDb250ZW50LVR5cGVcbiAgICAgKiBoZWFkZXIuIFNlZSB0aGUgZG9jcyBmb3IgaXJvbi1hamF4J3MgYGJvZHlgIHByb3BlcnR5IGZvciBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICB1cmw6IHN0cmluZyxcbiAgICAgKiAgIG1ldGhvZDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgYXN5bmM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICBib2R5OiAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdCksXG4gICAgICogICBoZWFkZXJzOiAoT2JqZWN0fHVuZGVmaW5lZCksXG4gICAgICogICBoYW5kbGVBczogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAganNvblByZWZpeDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgd2l0aENyZWRlbnRpYWxzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAqICAgdGltZW91dDogKE51bWJlcnx1bmRlZmluZWQpLFxuICAgICAqICAgcmVqZWN0V2l0aFJlcXVlc3Q6IChib29sZWFufHVuZGVmaW5lZCl9fSBvcHRpb25zIC1cbiAgICAgKiAgIC0gdXJsIFRoZSB1cmwgdG8gd2hpY2ggdGhlIHJlcXVlc3QgaXMgc2VudC5cbiAgICAgKiAgIC0gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UsIGRlZmF1bHQgaXMgR0VULlxuICAgICAqICAgLSBhc3luYyBCeSBkZWZhdWx0LCBhbGwgcmVxdWVzdHMgYXJlIHNlbnQgYXN5bmNocm9ub3VzbHkuIFRvIHNlbmQgc3luY2hyb25vdXMgcmVxdWVzdHMsXG4gICAgICogICAgICAgICBzZXQgdG8gZmFsc2UuXG4gICAgICogICAtICBib2R5IFRoZSBjb250ZW50IGZvciB0aGUgcmVxdWVzdCBib2R5IGZvciBQT1NUIG1ldGhvZC5cbiAgICAgKiAgIC0gIGhlYWRlcnMgSFRUUCByZXF1ZXN0IGhlYWRlcnMuXG4gICAgICogICAtICBoYW5kbGVBcyBUaGUgcmVzcG9uc2UgdHlwZS4gRGVmYXVsdCBpcyAndGV4dCcuXG4gICAgICogICAtICB3aXRoQ3JlZGVudGlhbHMgV2hldGhlciBvciBub3QgdG8gc2VuZCBjcmVkZW50aWFscyBvbiB0aGUgcmVxdWVzdC4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICAgKiAgIC0gIHRpbWVvdXQgLSBUaW1lb3V0IGZvciByZXF1ZXN0LCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogICAtICByZWplY3RXaXRoUmVxdWVzdCBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHRoZSByZXF1ZXN0IG9iamVjdCB3aXRoIHByb21pc2UgcmVqZWN0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHNlbmQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcblxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5fc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IHByb2dyZXNzLmxlbmd0aENvbXB1dGFibGUsXG4gICAgICAgICAgbG9hZGVkOiBwcm9ncmVzcy5sb2FkZWQsXG4gICAgICAgICAgdG90YWw6IHByb2dyZXNzLnRvdGFsXG4gICAgICAgIH0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3JlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhyZXNwb25zZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigndGltZW91dCcsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NldFRpbWVkT3V0KHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9zZXRBYm9ydGVkKHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQuJyk7XG4gICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhyZXNwb25zZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBDYWxsZWQgYWZ0ZXIgYWxsIG9mIHRoZSBhYm92ZS5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB0aGlzLl9zZXRSZXNwb25zZSh0aGlzLnBhcnNlUmVzcG9uc2UoKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1Y2NlZWRlZCkge1xuICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignVGhlIHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGU6ICcgKyB0aGlzLnhoci5zdGF0dXMpO1xuICAgICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICByZXF1ZXN0OiB0aGlzXG4gICAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVDb21wbGV0ZXModGhpcyk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4oXG4gICAgICAgIG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgICBvcHRpb25zLnVybCxcbiAgICAgICAgb3B0aW9ucy5hc3luYyAhPT0gZmFsc2VcbiAgICAgICk7XG5cbiAgICAgIHZhciBhY2NlcHRUeXBlID0ge1xuICAgICAgICAnanNvbic6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3RleHQnOiAndGV4dC9wbGFpbicsXG4gICAgICAgICdodG1sJzogJ3RleHQvaHRtbCcsXG4gICAgICAgICd4bWwnOiAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICAgJ2FycmF5YnVmZmVyJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgICAgIH1bb3B0aW9ucy5oYW5kbGVBc107XG4gICAgICB2YXIgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIG5ld0hlYWRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgbmV3SGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSBoZWFkZXJzW2tleV07XG4gICAgICB9XG4gICAgICBoZWFkZXJzID0gbmV3SGVhZGVycztcblxuICAgICAgaWYgKGFjY2VwdFR5cGUgJiYgIWhlYWRlcnNbJ2FjY2VwdCddKSB7XG4gICAgICAgIGhlYWRlcnNbJ2FjY2VwdCddID0gYWNjZXB0VHlwZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24ocmVxdWVzdEhlYWRlcikge1xuICAgICAgICBpZiAoL1tBLVpdLy50ZXN0KHJlcXVlc3RIZWFkZXIpKSB7XG4gICAgICAgICAgUG9seW1lci5CYXNlLl9lcnJvcignSGVhZGVycyBtdXN0IGJlIGxvd2VyIGNhc2UsIGdvdCcsIHJlcXVlc3RIZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgIHJlcXVlc3RIZWFkZXIsXG4gICAgICAgICAgaGVhZGVyc1tyZXF1ZXN0SGVhZGVyXVxuICAgICAgICApO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmFzeW5jICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAob3B0aW9ucy5hc3luYykge1xuICAgICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZUFzID0gb3B0aW9ucy5oYW5kbGVBcztcblxuICAgICAgICAvLyBJZiBhIEpTT04gcHJlZml4IGlzIHByZXNlbnQsIHRoZSByZXNwb25zZVR5cGUgbXVzdCBiZSAndGV4dCcgb3IgdGhlXG4gICAgICAgIC8vIGJyb3dzZXIgd29u4oCZdCBiZSBhYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZS5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy5qc29uUHJlZml4IHx8ICFoYW5kbGVBcykge1xuICAgICAgICAgIGhhbmRsZUFzID0gJ3RleHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gSUUsIGB4aHIucmVzcG9uc2VUeXBlYCBpcyBhbiBlbXB0eSBzdHJpbmcgd2hlbiB0aGUgcmVzcG9uc2VcbiAgICAgICAgLy8gcmV0dXJucy4gSGVuY2UsIGNhY2hpbmcgaXQgYXMgYHhoci5fcmVzcG9uc2VUeXBlYC5cbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHhoci5fcmVzcG9uc2VUeXBlID0gaGFuZGxlQXM7XG5cbiAgICAgICAgLy8gQ2FjaGUgdGhlIEpTT04gcHJlZml4LCBpZiBpdCBleGlzdHMuXG4gICAgICAgIGlmICghIW9wdGlvbnMuanNvblByZWZpeCkge1xuICAgICAgICAgIHhoci5fanNvblByZWZpeCA9IG9wdGlvbnMuanNvblByZWZpeDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcblxuXG4gICAgICB2YXIgYm9keSA9IHRoaXMuX2VuY29kZUJvZHlPYmplY3Qob3B0aW9ucy5ib2R5LCBoZWFkZXJzWydjb250ZW50LXR5cGUnXSk7XG5cbiAgICAgIHhoci5zZW5kKFxuICAgICAgICAvKiogQHR5cGUge0FycmF5QnVmZmVyfEFycmF5QnVmZmVyVmlld3xCbG9ifERvY3VtZW50fEZvcm1EYXRhfFxuICAgICAgICAgICAgICAgICAgIG51bGx8c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgICAgICAgKGJvZHkpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBwYXJzZSB0aGUgcmVzcG9uc2UgYm9keSBvZiB0aGUgWEhSLiBJZiBwYXJzaW5nIHN1Y2NlZWRzLFxuICAgICAqIHRoZSB2YWx1ZSByZXR1cm5lZCB3aWxsIGJlIGRlc2VyaWFsaXplZCBiYXNlZCBvbiB0aGUgYHJlc3BvbnNlVHlwZWBcbiAgICAgKiBzZXQgb24gdGhlIFhIUi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IFRoZSBwYXJzZWQgcmVzcG9uc2UsXG4gICAgICogb3IgdW5kZWZpbmVkIGlmIHRoZXJlIHdhcyBhbiBlbXB0eSByZXNwb25zZSBvciBwYXJzaW5nIGZhaWxlZC5cbiAgICAgKi9cbiAgICBwYXJzZVJlc3BvbnNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgICAgIHZhciByZXNwb25zZVR5cGUgPSB4aHIucmVzcG9uc2VUeXBlIHx8IHhoci5fcmVzcG9uc2VUeXBlO1xuICAgICAgdmFyIHByZWZlclJlc3BvbnNlVGV4dCA9ICF0aGlzLnhoci5yZXNwb25zZVR5cGU7XG4gICAgICB2YXIgcHJlZml4TGVuID0gKHhoci5fanNvblByZWZpeCAmJiB4aHIuX2pzb25QcmVmaXgubGVuZ3RoKSB8fCAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgLy8gSWYgdGhlIHhociBvYmplY3QgZG9lc24ndCBoYXZlIGEgbmF0dXJhbCBgeGhyLnJlc3BvbnNlVHlwZWAsXG4gICAgICAgICAgICAvLyB3ZSBjYW4gYXNzdW1lIHRoYXQgdGhlIGJyb3dzZXIgaGFzbid0IHBhcnNlZCB0aGUgcmVzcG9uc2UgZm9yIHVzLFxuICAgICAgICAgICAgLy8gYW5kIHNvIHBhcnNpbmcgaXMgb3VyIHJlc3BvbnNpYmlsaXR5LiBMaWtld2lzZSBpZiByZXNwb25zZSBpc1xuICAgICAgICAgICAgLy8gdW5kZWZpbmVkLCBhcyB0aGVyZSdzIG5vIHdheSB0byBlbmNvZGUgdW5kZWZpbmVkIGluIEpTT04uXG4gICAgICAgICAgICBpZiAocHJlZmVyUmVzcG9uc2VUZXh0IHx8IHhoci5yZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIFRyeSB0byBlbXVsYXRlIHRoZSBKU09OIHNlY3Rpb24gb2YgdGhlIHJlc3BvbnNlIGJvZHkgc2VjdGlvbiBvZlxuICAgICAgICAgICAgICAvLyB0aGUgc3BlYzogaHR0cHM6Ly94aHIuc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZS1ib2R5XG4gICAgICAgICAgICAgIC8vIFRoYXQgaXMgdG8gc2F5LCB3ZSB0cnkgdG8gcGFyc2UgYXMgSlNPTiwgYnV0IGlmIGFueXRoaW5nIGdvZXNcbiAgICAgICAgICAgICAgLy8gd3JvbmcgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIGNhc2UgJ3htbCc6XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgIGNhc2UgJ2Jsb2InOlxuICAgICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcbiAgICAgICAgICBjYXNlICdhcnJheWJ1ZmZlcic6XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIC8vIElmIGBwcmVmaXhMZW5gIGlzIHNldCwgaXQgaW1wbGllcyB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHBhcnNlZFxuICAgICAgICAgICAgLy8gYXMgSlNPTiBvbmNlIHRoZSBwcmVmaXggb2YgbGVuZ3RoIGBwcmVmaXhMZW5gIGlzIHN0cmlwcGVkIGZyb21cbiAgICAgICAgICAgIC8vIGl0LiBFbXVsYXRlIHRoZSBiZWhhdmlvciBhYm92ZSB3aGVyZSBudWxsIGlzIHJldHVybmVkIG9uIGZhaWx1cmVcbiAgICAgICAgICAgIC8vIHRvIHBhcnNlLlxuICAgICAgICAgICAgaWYgKHByZWZpeExlbikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQuc3Vic3RyaW5nKHByZWZpeExlbikpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSByZXNwb25zZS4gJyArIGUubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgYWJvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0QWJvcnRlZCh0cnVlKTtcbiAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYm9keSBUaGUgZ2l2ZW4gYm9keSBvZiB0aGUgcmVxdWVzdCB0byB0cnkgYW5kIGVuY29kZS5cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IGNvbnRlbnRUeXBlIFRoZSBnaXZlbiBjb250ZW50IHR5cGUsIHRvIGluZmVyIGFuIGVuY29kaW5nXG4gICAgICogICAgIGZyb20uXG4gICAgICogQHJldHVybiB7Kn0gRWl0aGVyIHRoZSBlbmNvZGVkIGJvZHkgYXMgYSBzdHJpbmcsIGlmIHN1Y2Nlc3NmdWwsXG4gICAgICogICAgIG9yIHRoZSB1bmFsdGVyZWQgYm9keSBvYmplY3QgaWYgbm8gZW5jb2RpbmcgY291bGQgYmUgaW5mZXJyZWQuXG4gICAgICovXG4gICAgX2VuY29kZUJvZHlPYmplY3Q6IGZ1bmN0aW9uKGJvZHksIGNvbnRlbnRUeXBlKSB7XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGJvZHk7ICAvLyBBbHJlYWR5IGVuY29kZWQuXG4gICAgICB9XG4gICAgICB2YXIgYm9keU9iaiA9IC8qKiBAdHlwZSB7T2JqZWN0fSAqLyAoYm9keSk7XG4gICAgICBzd2l0Y2goY29udGVudFR5cGUpIHtcbiAgICAgICAgY2FzZSgnYXBwbGljYXRpb24vanNvbicpOlxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShib2R5T2JqKTtcbiAgICAgICAgY2FzZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGUoYm9keU9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9keTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGVuY29kZSBhcyB4LXd3dy1mb3JtLXVybGVuY29kZWQuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAuXG4gICAgICovXG4gICAgX3d3d0Zvcm1VcmxFbmNvZGU6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgdmFyIHBpZWNlcyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAvLyBUT0RPKHJpY3RpYyk6IGhhbmRsZSBhcnJheSB2YWx1ZXMgaGVyZSwgaW4gYSBjb25zaXN0ZW50IHdheSB3aXRoXG4gICAgICAgIC8vICAgaXJvbi1hamF4IHBhcmFtcy5cbiAgICAgICAgcGllY2VzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl93d3dGb3JtVXJsRW5jb2RlUGllY2Uoa2V5KSArICc9JyArXG4gICAgICAgICAgICB0aGlzLl93d3dGb3JtVXJsRW5jb2RlUGllY2Uob2JqZWN0W2tleV0pKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIHBpZWNlcy5qb2luKCcmJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gc3RyIEEga2V5IG9yIHZhbHVlIHRvIGVuY29kZSBhcyB4LXd3dy1mb3JtLXVybGVuY29kZWQuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAuXG4gICAgICovXG4gICAgX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAvLyBTcGVjIHNheXMgdG8gbm9ybWFsaXplIG5ld2xpbmVzIHRvIFxcclxcbiBhbmQgcmVwbGFjZSAlMjAgc3BhY2VzIHdpdGggKy5cbiAgICAgIC8vIGpRdWVyeSBkb2VzIHRoaXMgYXMgd2VsbCwgc28gdGhpcyBpcyBsaWtlbHkgdG8gYmUgd2lkZWx5IGNvbXBhdGlibGUuXG4gICAgICBpZiAoc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkIHx8ICFzdHIudG9TdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG4vZywgJ1xcclxcbicpKVxuICAgICAgICAucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBjb2RlIGFuZCBzdGF0dXMgdGV4dC5cbiAgICAgKi9cbiAgICBfdXBkYXRlU3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldFN0YXR1cyh0aGlzLnhoci5zdGF0dXMpO1xuICAgICAgdGhpcy5fc2V0U3RhdHVzVGV4dCgodGhpcy54aHIuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogdGhpcy54aHIuc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1yZXF1ZXN0Lmh0bWwiLCI8bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaXRlbS9wYXBlci1pdGVtLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC5odG1sXCI+XG5cbjwhLS1cbiAgYHBhcGVyLWF1dG9jb21wbGV0ZWBcblxuICAqKkZyb20gdjMueC54LCB0aGlzIGNvbXBvbmVudCBvbmx5IHdvcmtzIHdpdGggUG9seW1lciAxLjcrIG9yIDIuMCsuKipcblxuICBbIVtQdWJsaXNoZWQgb24gd2ViY29tcG9uZW50cy5vcmddKGh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vYmFkZ2Uvd2ViY29tcG9uZW50cy5vcmctcHVibGlzaGVkLWJsdWUuc3ZnKV0oaHR0cHM6Ly93d3cud2ViY29tcG9uZW50cy5vcmcvZWxlbWVudC9lbGxpcHRpY2FsanMvcGFwZXItYXV0b2NvbXBsZXRlKVxuXG4gIFshW1NhdWNlIFRlc3QgU3RhdHVzXShodHRwczovL3NhdWNlbGFicy5jb20vYnJvd3Nlci1tYXRyaXgvamh1ZXNvcy5zdmcpXShodHRwczovL3NhdWNlbGFicy5jb20vdS9qaHVlc29zKVxuXG4gIHBhcGVyLWF1dG9jb21wbGV0ZSBleHRlbmRzIGVhcmxpZXIgZWZmb3J0cyBzdWNoIGFzIHRoaXMgKGh0dHBzOi8vZ2l0aHViLmNvbS9yb2RvMTExMS9wYXBlci1pbnB1dC1hdXRvY29tcGxldGUpXG4gIHRvIHByb3ZpZGUga2V5Ym9hcmQgc3VwcG9ydCwgcmVtb3RlIGJpbmRpbmcgYW5kIHJlc3VsdHMgc2Nyb2xsaW5nLlxuXG4gIEl0IGlzICoqaW1wb3J0YW50IHRvIHByb3ZpZGUgYm90aCBgdGV4dFByb3BlcnR5YCBhbmQgYHZhbHVlUHJvcGVydHlgIHdoZW4gd29ya2luZyB3aXRoIGEgY3VzdG9tIHNlYXJjaCBmdW5jdGlvbiBhbmRcbiAgb3IgY3VzdG9tIHRlbXBsYXRlcy4qKiBUaGV5IGFyZSBuZWVkZWQgdG8ga2VlcCB0aGUgY29tcG9uZW50IGFjY2Vzc2libGUgYW5kIGZvciB0aGUgZXZlbnRzIChlLmcuIG9uU2VsZWN0KSB0byBrZWVwXG4gIHdvcmtpbmcuXG5cbiAgVG8gaW50ZWdyYXRlIHdpdGggYGlyb24taW5wdXRgLCB5b3UgbXVzdCBzZXQgdGhlIGBuYW1lYCBvcHRpb24uIFRoZSBzZWxlY3RlZCBgdmFsdWVgIHdpbGwgYmUgZXhwb3NlZCwgKipub3QqKiB0aGVcbiAgYHRleHRgIHZhbHVlLFxuXG4gICMjIyBBYm91dCBQb2x5bWVyIDEueCBhbmQgMi54IENvbXBhdGliaWxpdHlcbiAgRnJvbSB2ZXJzaW9uIGAzLngueGAsIHRoaXMgY29tcG9uZW50IHdvcmsgd2l0aCBib3RoIFBvbHltZXIgMS43KyBvciBQb2x5bWVyIDIuMCsgUGxlYXNlIHRha2UgYSBsb29rIHRvIHRoZVxuICBbTUlHUkFUSU9OLm1kXSguL01JR1JBVElPTi5tZCkgZmlsZSB0aGF0IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgIyMjIEN1c3RvbSBzZWFyY2hcbiAgVGhpcyBjb21wb25lbnQgaGFzIHRoZSBwdWJsaWMgbWV0aG9kIGBxdWVyeUZuYCB0aGF0IGlzIGNhbGxlZCBpbiBlYWNoIGtleSBzdHJva2UgYW5kIGl0IGlzIHJlc3BvbnNpYmxlIHRvIHF1ZXJ5XG4gIGFsbCBpdGVtcyBpbiB0aGUgYHNvdXJjZWAgYW5kIHJldHVybnMgb25seSB0aG9zZSBpdGVtcyB0aGF0IG1hdGNoZXMgY2VydGFpbiBmaWx0ZXJpbmcgY3JpdGVyaWEuIEJ5IGRlZmF1bHQsIHRoaXNcbiAgY29tcG9uZW50IHNlYXJjaGVzIGZvciBpdGVtcyB0aGF0IHN0YXJ0IHdpdGggdGhlIHJlY2VudCBxdWVyeSAoY2FzZSBpbnNlbnNpdGl2ZSkuXG4gIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBiZWhhdmlvciBwcm92aWRpbmcgeW91ciBvd24gcXVlcnkgZnVuY3Rpb24sIGFzIGxvbmcgYXMgdGhlc2UgdHdvIHJlcXVpcmVtZW50cyBhcmUgZnVsZmlsbGVkOlxuICAtIFRoZSBxdWVyeSBmdW5jdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAgLSBUaGUgQVBJIGlzIHJlc3BlY3RlZCBhbmQgdGhlIG1ldGhvZCBhbHdheXMgcmV0dXJucyBhbiBBcnJheS5cbiAgVGhlIHRlbXBsYXRlIHVzZWQgdG8gcmVuZGVyIGVhY2ggc3VnZ2VzdGlvbiBkZXBlbmRzIG9uIHRoZSBzdHJ1Y3R1cmUgb2YgZWFjaCBvYmplY3QgdGhhdCB0aGlzIG1ldGhvZCByZXR1cm5zLiBGb3IgdGhlXG4gIGRlZmF1bHQgdGVtcGxhdGUsIGVhY2ggc3VnZ2VzdGlvbiBzaG91bGQgZm9sbG93IHRoaXMgb2JqZWN0IHN0cnVjdHVyZTpcbiAgYGBgXG4gICAge1xuICAgICAgdGV4dDogb2JqVGV4dCxcbiAgICAgIHZhbHVlOiBvYmpWYWx1ZVxuICAgIH1cbiAgYGBgXG5cbiAgVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiBhIGxvY2FsIGRhdGEgc291cmNlIGlzIHVzZWQuIFdoZW4gdXNpbmcgYSBgcmVtb3RlRGF0YVNvdXJjZWAgdXNlciBpcyByZXNwb25zaWJsZSBmb3JcbiAgZG9pbmcgdGhlIHNlYXJjaCBhbmQgc3BlY2lmeSBzdWdnZXN0aW9ucyBtYW51YWxseS5cblxuICAjIyMgQ3VzdG9tIHRlbXBsYXRlc1xuICBBIHRlbXBsYXRlIGZvciBlYWNoIHN1Z2dlc3Rpb24gY2FuIGJlIHByb3ZpZGVkLCBidXQgZm9yIG5vdywgdGhlcmUgYXJlIGxpbWl0YXRpb25zIGluIHRoZSB3YXkgeW91IGNhbiBjdXN0b21pemVcbiAgdGhlIHRlbXBsYXRlLiBQbGVhc2UsIHJlYWQgdGhpcyBzZWN0aW9uIGNhcmVmdWxseSB0byBrbm93IHRoZW0uXG4gIEluIG9yZGVyIHRvIHNldCB5b3VyIG93biB0ZW1wbGF0ZSwgeW91IG5lZWQgdG8gYWRkIGEgYDx0ZW1wbGF0ZT5gIHRhZyB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgYGF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVgIGFuZCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcblxuICBgYGBodG1sXG4gIDxwYXBlci1hdXRvY29tcGxldGU+XG4gICAgPHRlbXBsYXRlIGF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGU+XG4gICAgICA8cGFwZXItaXRlbSBvbi10YXA9XCJfb25TZWxlY3RcIiBpZCQ9XCJbW19nZXRTdWdnZXN0aW9uSWQoaW5kZXgpXV1cIiByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAvKiogU3R5bGVzIGZvciB5b3VyIGN1c3RvbSB0ZW1wbGF0ZSBoZXJlICoqL1xuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIFlPVVIgQ1VTVE9NIFRFTVBMQVRFXG4gICAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9wYXBlci1hdXRvY29tcGxldGU+XG4gIGBgYFxuXG4gIFlvdSBuZWVkIHRvIGFsd2F5cyBtYWludGFpbiB0aGlzIHN0cnVjdHVyZS4gVGhlbiB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBwYXBlci1pdGVtLiBUaGVzZSBhcmUgdGhlIHJlYXNvbnNcbiAgd2h5IHlvdSBuZWVkIHRvIG1haW50YWluIGl0OlxuXG4gIC0gYF9vblNlbGVjdGAgaXQgaXMgdmVyeSBpbXBvcnRhbnQgYmVjYXVzZSBpdCB3aWxsIG5vdGlmeSB0aGUgYGF1dG9jb21wbGV0ZWAgY29tcG9uZW50IHdoZW4gdXNlciBzZWxlY3RzIG9uZSBpdGVtLlxuICBJZiB5b3UgZG9uJ3QgYWRkIHRoaXMgb3B0aW9uLCB3aGVuIHVzZXIgY2xpY2tzIGluIG9uZSBvZiB0aGUgaXRlbXMsIG5vdGhpbmcgd2lsbCBoYXBwZW4uXG4gIC0gYGlkYCwgYHJvbGVgIGFuZCBgYXJpYS1zZWxlY3RlZGAgbmVlZCB0byBiZSB0aGVyZSBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zLiBJZiB5b3UgZG9uJ3Qgc2V0IHRoZW0sIHRoZSBjb21wb25lbnRcbiAgd2lsbCBjb250aW51ZSB3b3JraW5nIGJ1dCBpdCB3aWxsIG5vdCBiZSBhY2Nlc3NpYmxlIGZvciB1c2VycyB3aXRoIGRpc2FiaWxpdGllcy5cblxuICBJdCBpcyBpbXBvcnRhbnQgdG8gY2xhcmlmeSB0aGF0IG1ldGhvZHMgYF9vblNlbGVjdGAgYW5kIGBfZ2V0U3VnZ2VzdGlvbklkYCBkbyBub3QgbmVlZCB0byBiZSBpbXBsZW1lbnRlZC4gVGhleSBhcmVcbiAgcGFydCBvZiB0aGUgbG9naWMgb2YgYHBhcGVyLWF1dG9jb21wbGV0ZWAuXG5cbiAgV2hlbiBwcm92aWRpbmcgeW91ciBvd24gY3VzdG9tIHRlbXBsYXRlLCB5b3UgbWlnaHQgYWxzbyBuZWVkIHRvIHByb3ZpZGUgeW91ciBvd24gY3VzdG9tIHNlYXJjaCBmdW5jdGlvbi4gVGhlIHJlYXNvblxuICBmb3IgdGhhdCBpcyB0aGF0IHRoZSBkZWZhdWx0IHNlYXJjaCBmdW5jdGlvbiBvbmx5IGV4cG9zZXMgdGV4dCBhbmQgdmFsdWUgaW4gdGhlIHJlc3VsdHMuIElmIGVhY2ggaXRlbSBpbiB5b3VyIGRhdGFcbiAgc291cmNlIGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24sIHRoZW4geW91IHdvbid0IGJlIGFibGUgdG8gYWNjZXNzIGl0LiBTZWUgdGhlIGNvZGUgb2YgdGhlIGA8YWRkcmVzcy1hdXRvY29tcGxldGU+YFxuICBlbGVtZW50IGluIHRoZSBkZW1vIGZvbGRlciBmb3IgYSBjb21wbGV0ZSBleGFtcGxlLlxuXG4gIEFub3RoZXIgaW1wb3J0YW50IHRoaW5nIHRvIHBvaW50IG91dCBpcyByZWxhdGVkIHRvIHRoZSBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gaW4gdGhlIHJlc3VsdHMuIFRoZSBoZWlnaHQgb2ZcbiAgdGhlIHN1Z2dlc3Rpb24gdGVtcGxhdGUgY2hhbmdlcyBkeW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiBhIHN1Z2dlc3Rpb24gaXRlbS4gSG93ZXZlciwgdGhlIGZvbGxvd2luZ1xuICBhc3N1bXB0aW9ucyB3ZXJlIG1hZGU6XG4gIC0gQWxsIHN1Z2dlc3Rpb25zIGl0ZW1zIGhhdmUgdGhlIHNhbWUgaGVpZ2h0XG4gIC0gVGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gaXMgZml4ZWQgYW5kIGNhbiBiZSBkZXRlcm1pbmVkIGF0IGFueSB0aW1lLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gdXNlIGltYWdlcyBpbiB0aGVcbiAgcmVzdWx0cywgbWFrZSBzdXJlIHRoZXkgaGF2ZSBhIHBsYWNlaG9sZGVyIG9yIGEgZml4ZWQgaGVpZ2h0LlxuXG4gICMjIyBTdHlsaW5nXG5cbiAgYDxwYXBlci1hdXRvY29tcGxldGU+YCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnNcbiAgZm9yIHN0eWxpbmc6XG5cbiAgQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4gIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG4gIGAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcmAgfCBzZXRzIHRoZSBjb21wb25lbnRzIGlucHV0IGNvbnRhaW5lciBmb2N1cyBjb2xvciB8IGB2YXIoLS1wcmltYXJ5LWNvbG9yKWBcbiAgYC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLWl0ZW0tbWluLWhlaWdodGAgfCBtaW4gaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIHwgYDM2cHhgXG4gIGAtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy13cmFwcGVyYCB8IG1peGluIHRvIGFwcGx5IHRvIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXIgfCBge31gXG5cbiAgIyMjIEFjY2Vzc2liaWxpdHlcblxuICBUaGlzIGNvbXBvbmVudCBpcyBmcmllbmRseSB3aXRoIHNjcmVlbiByZWFkZXJzICh0ZXN0ZWQgb25seSB3aXRoIFZvaWNlT3ZlciBhbmQgTlZEQSBpbiBXaW5kb3dzKTogY3VycmVudCBzZWxlY3Rpb25cbiAgYW5kIGFjdGl2ZSBzdWdnZXN0aW9uIGFyZSBhbm5vdW5jZWQuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItYXV0b2NvbXBsZXRlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgIC0tcGFwZXItaWNvbi1idXR0b246IHtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5zci1vbmx5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyB7XG4gICAgICAgIC0tc3VnZ2VzdGlvbnMtd3JhcHBlcjoge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy13cmFwcGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIC0tcGFwZXItaXRlbS1taW4taGVpZ2h0OiB2YXIoLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtaXRlbS1taW4taGVpZ2h0LCAzNnB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBwZXJcIiByb2xlPVwiY29tYm9ib3hcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtb3ducz1cInN1Z2dlc3Rpb25zV3JhcHBlclwiIGFyaWEtZXhwYW5kZWQkPVwiW1tfaXNTdWdnZXN0aW9uc09wZW5lZF1dXCI+XG4gICAgICA8IS0tIEZvciBhY2Nlc3NpYmlsaXR5LCBpdCBpcyBuZWVkZWQgdG8gaGF2ZSBhIGxhYmVsIG9yIGFyaWEtbGFiZWwuIExhYmVsIGlzIHByZWZlcnJlZCAtLT5cbiAgICAgIDxsYWJlbCBmb3I9XCJhdXRvY29tcGxldGVJbnB1dFwiIGNsYXNzPVwic3Itb25seVwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDwhLS0gQWRkaW5nIGEgaGlkZGVuIGlucHV0IHRvIGludGVncmF0ZSB3aXRoIGlyb24tZm9ybSwgaWYgcmVxdWlyZWQgLS0+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWUkPVwiW1tuYW1lXV1cIiB2YWx1ZSQ9XCJbW3ZhbHVlXV1cIiA+XG5cbiAgICAgIDxwYXBlci1pbnB1dCBpZD1cImF1dG9jb21wbGV0ZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCJcbiAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInt7ZGlzYWJsZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlJD1cIltbZXJyb3JNZXNzYWdlXV1cIlxuICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3RleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCJcbiAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiW1twYXR0ZXJuXV1cIlxuICAgICAgICAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiXG4gICAgICAgICAgICAgICAgICAgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1thbHdheXNGbG9hdExhYmVsXV1cIlxuICAgICAgICAgICAgICAgICAgIGNoYXItY291bnRlciQ9XCJbW2NoYXJDb3VudGVyXV1cIlxuICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJdXVwiXG5cbiAgICAgICAgICAgICAgICAgICByb2xlPVwidGV4dGJveFwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLW11bHRpbGluZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQkPVwiW1tfaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uLmVsZW1lbnRJZF1dXCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImF1dG9jb21wbGV0ZVN0YXR1cyBzdWdnZXN0aW9uc1dyYXBwZXJcIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cbiAgICAgICAgPCEtLSBUT0RPOiByZW1vdmUgdGFiaW5kZXggd29ya2Fyb3VuZCB3aGVuICBpcyBmaXhlZCBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy8zMjQgLS0+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgc3VmZml4IGlkPVwiY2xlYXJcIiBpY29uPVwiY2xlYXJcIiBvbi1jbGljaz1cIl9jbGVhclwiIHRhYmluZGV4PVwiLTFcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPjwvc2xvdD5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8IS0tIHRvIGFubm91bmNlIGN1cnJlbnQgc2VsZWN0aW9uIHRvIHNjcmVlbiByZWFkZXIgLS0+XG4gICAgICA8c3BhbiBpZD1cImF1dG9jb21wbGV0ZVN0YXR1c1wiIHJvbGU9XCJzdGF0dXNcIiBjbGFzcz1cInNyLW9ubHlcIj5bW19oaWdobGlnaHRlZFN1Z2dlc3Rpb24udGV4dFZhbHVlXV08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8cGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIGZvcj1cImF1dG9jb21wbGV0ZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4tbGVuZ3RoPVwiW1ttaW5MZW5ndGhdXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXByb3BlcnR5PVwiW1t0ZXh0UHJvcGVydHldXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cIltbdmFsdWVQcm9wZXJ0eV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLW9wdGlvbj1cInt7X3NlbGVjdGVkT3B0aW9ufX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPVwiW1tzb3VyY2VdXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGUtc291cmNlPVwiW1tyZW1vdGVTb3VyY2VdXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS1mbj1cIltbcXVlcnlGbl1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LW5hbWVzcGFjZT1cIltbZXZlbnROYW1lc3BhY2VdXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZC1zdWdnZXN0aW9uPVwie3tfaGlnaGxpZ2h0ZWRTdWdnZXN0aW9ufX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3Blbj1cInt7X2lzU3VnZ2VzdGlvbnNPcGVuZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQtZmlyc3Q9XCJbW2hpZ2hsaWdodEZpcnN0XV1cIj5cblxuICAgICAgPHNsb3QgaWQ9XCJ0ZW1wbGF0ZXNcIiBuYW1lPVwiYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZVwiPjwvc2xvdD5cblxuICAgIDwvcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPHNjcmlwdD5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlzIFBvbHlmaWxsIGlzIG5lZWRlZCBmb3IgdGhpcyB2ZXJzaW9uIHRvIHdvcmsgd2l0aCBJRTExIGFuZCBQb2x5bWVyIDEueFxuICAgIC8vIFRPRE86IGZpbmQgb3V0IHdoeSB0aGlzIGlzIG5lZWRlZCBpbiBJRTExXG4gICAgaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcmd1bWVudCkge1xuICAgICAgICAgIGFyZ3VtZW50ID0gYXJndW1lbnQgfHwgd2luZG93O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGFyZ3VtZW50LCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdwYXBlci1hdXRvY29tcGxldGUnLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgYXV0b1ZhbGlkYXRlYCBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBlcnJvck1lc3NhZ2VgIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgbGFiZWxgIFRleHQgdG8gZGlzcGxheSBhcyB0aGUgaW5wdXQgbGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBub0xhYmVsRmxvYXRgIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgbm9MYWJlbEZsb2F0OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGFsd2F5c0Zsb2F0TGFiZWxgIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgYWx3YXlzRmxvYXRMYWJlbDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgcmVxdWlyZWRgIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgc291cmNlYCBBcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIG9wdGlvbnMgdG8gZXhlY3V0ZSB0aGUgYXV0b2NvbXBsZXRlIGZlYXR1cmVcbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHRleHQgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRleHRQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZVByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGB2YWx1ZWAgU2VsZWN0ZWQgb2JqZWN0IGZyb20gdGhlIHN1Z2dlc3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQvc2VsZWN0ZWQgdGV4dCBvZiB0aGUgaW5wdXRcbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlIHNob3dpbmcgdGhlIGNsZWFyIFggYnV0dG9uXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2hvd0NsZWFyOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgdG8gYSByZW1vdGUgZGF0YSBzb3VyY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZVNvdXJjZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IHR5cGUgc2VwYXJhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBldmVudE5hbWVzcGFjZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJy0nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1pbmltdW0gbGVuZ3RoIHRvIHRyaWdnZXIgc3VnZ2VzdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgcGF0dGVybmAgUGF0dGVybiB0byB2YWxpZGF0ZSBpbnB1dCBmaWVsZFxuICAgICAgICAgKi9cbiAgICAgICAgcGF0dGVybjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbGxvd2VkUGF0dGVybmAgYWxsb3dlZFBhdHRlcm4gdG8gdmFsaWRhdGUgaW5wdXQgZmllbGRcbiAgICAgICAgICovXG4gICAgICAgIGFsbG93ZWRQYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0byBgdHJ1ZWAgdG8gc2hvdyBhIGNoYXJhY3RlciBjb3VudGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgY2hhckNvdW50ZXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgdG8gYmUgdXNlZCBieSB0aGUgYXV0b2NvbXBsZXRlIGlucHV0LiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB3YW50ZWQgdG8gYmUgaW50ZWdyYXRlZCB3aXRoIGlyb24tZm9ybS5cbiAgICAgICAgICovXG4gICAgICAgIG5hbWU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgYXZhaWxhYmxlIGl0ZW1zLiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IHVzZWQgYnkgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLFxuICAgICAgICAgKiBpdCBpcyBhbHNvIGV4cG9zZWQgaGVyZSBzbyBpdCBpcyBwb3NzaWJsZSB0byBwcm92aWRlIGEgY3VzdG9tIHF1ZXJ5Rm4uXG4gICAgICAgICAqL1xuICAgICAgICBxdWVyeUZuOiB7XG4gICAgICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBpdCB3aWxsIGFsd2F5cyBoaWdobGlnaHQgdGhlIGZpcnN0IHJlc3VsdCBlYWNoIHRpbWUgbmV3IHN1Z2dlc3Rpb25zIGFyZSBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICAgaGlnaGxpZ2h0Rmlyc3Q6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKioqKioqKioqKioqXG4gICAgICAgICogUFJJVkFURVxuICAgICAgICAqKioqKioqKioqKioqL1xuICAgICAgICAvLyBUT0RPOiBjaGVjayBpZiB3ZSBuZWVkIF92YWx1ZSBhbmQgX3RleHQgcHJvcGVydGllcy4gSXQgc2VlbXMgdGhleSBjYW4gYmUgcmVtb3ZlZFxuICAgICAgICBfdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgX3RleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjbGVhciBidXR0b24gaXMgdmlzaWJsZSBvciBub3RcbiAgICAgICAgICovXG4gICAgICAgIF9pc0NsZWFyQnV0dG9uVmlzaWJsZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWdnZXN0aW9uIHBvcHVwIGlzIHZpc2libGUgb3Igbm90LlxuICAgICAgICAgKi9cbiAgICAgICAgX2lzU3VnZ2VzdGlvbnNPcGVuZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3QgY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICovXG4gICAgICAgIF9zZWxlY3RlZE9wdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ190ZXh0T2JzZXJ2ZXIodGV4dCknXG4gICAgICBdLFxuXG4gICAgICAvLyBFbGVtZW50IExpZmVjeWNsZVxuICAgICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnYXV0b2NvbXBsZXRlJyArIHRoaXMuZXZlbnROYW1lc3BhY2UgKyAnc2VsZWN0ZWQnLFxuICAgICAgICAgIHRoaXMuX29uQXV0b2NvbXBsZXRlU2VsZWN0ZWQuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDbGVhcnMgdGhlIGlucHV0IHRleHRcbiAgICAgICAqL1xuICAgICAgX2NsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuX3RleHQgPSAnJztcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQob3B0aW9uLCAncmVzZXQtYmx1cicpO1xuXG4gICAgICAgIHRoaXMuX2hpZGVDbGVhckJ1dHRvbigpO1xuXG4gICAgICAgIC8vIEZpeDogaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pbnB1dC9pc3N1ZXMvNDkzXG4gICAgICAgIGlmICghdGhpcy4kLmF1dG9jb21wbGV0ZUlucHV0LmZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLiQuYXV0b2NvbXBsZXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEaXNwYXRjaGVzIGF1dG9jb21wbGV0ZSBldmVudHNcbiAgICAgICAqL1xuICAgICAgX2ZpcmVFdmVudDogZnVuY3Rpb24gKG9wdGlvbiwgZXZ0KSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuX2dldElkKCk7XG4gICAgICAgIHZhciBldmVudCA9ICdhdXRvY29tcGxldGUnICsgdGhpcy5ldmVudE5hbWVzcGFjZSArIGV2dDtcblxuICAgICAgICB0aGlzLmZpcmUoZXZlbnQsIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvblt0aGlzLnZhbHVlUHJvcGVydHldIHx8IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldIHx8IG9wdGlvbi50ZXh0LFxuICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT24gdGV4dCBldmVudCBoYW5kbGVyXG4gICAgICAgKi9cbiAgICAgIF90ZXh0T2JzZXJ2ZXI6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGlmICh0ZXh0ICYmIHRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faGlkZUNsZWFyQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT24gYXV0b2NvbXBsZXRlIHNlbGVjdGlvblxuICAgICAgICovXG4gICAgICBfb25BdXRvY29tcGxldGVTZWxlY3RlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSBldmVudC5kZXRhaWw7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gc2VsZWN0aW9uLnRleHQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNob3cgdGhlIGNsZWFyIGJ1dHRvbiAoWClcbiAgICAgICAqL1xuICAgICAgX3Nob3dDbGVhckJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2hvd0NsZWFyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kLmNsZWFyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUgPSB0cnVlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlIHRoZSBjbGVhciBidXR0b24gKFgpXG4gICAgICAgKi9cbiAgICAgIF9oaWRlQ2xlYXJCdXR0b246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJC5jbGVhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgX2dldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAoIWlkKSBpZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcblxuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAqIFBVQkxJQ1xuICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgY3VycmVudCB0ZXh0L3ZhbHVlIG9wdGlvbiBvZiB0aGUgaW5wdXRcbiAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGdldE9wdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRleHQvdmFsdWUgb3B0aW9uIG9mIHRoZSBpbnB1dFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG4gICAgICBzZXRPcHRpb246IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9wdGlvblt0aGlzLnZhbHVlUHJvcGVydHldIHx8IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIERpc2FibGVzIHRoZSBpbnB1dFxuICAgICAgICovXG4gICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbmFibGVzIHRoZSBpbnB1dFxuICAgICAgICovXG4gICAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHRoZSBjb21wb25lbnQncyBjdXJyZW50IHN1Z2dlc3Rpb25zXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgICAqL1xuICAgICAgc3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdGhpcy4kLnBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMuc3VnZ2VzdGlvbnMoYXJyKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGVzIHRoZSBpbnB1dFxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQuYXV0b2NvbXBsZXRlSW5wdXQudmFsaWRhdGUoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xlYXJzIHRoZSBjdXJyZW50IGlucHV0XG4gICAgICAgKi9cbiAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzZXRzIHRoZSBjdXJyZW50IGlucHV0IChERVBSRUNBVEVEOiBwbGVhc2UgdXNlIGNsZWFyKVxuICAgICAgICovXG4gICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlcyB0aGUgc3VnZ2VzdGlvbnMgcG9wdXBcbiAgICAgICAqL1xuICAgICAgaGlkZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2hpZGVDbGVhckJ1dHRvbigpO1xuICAgICAgICB0aGlzLiQucGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9ucy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWxsb3dzIGNhbGxpbmcgdGhlIG9uU2VsZWN0IGZ1bmN0aW9uIGZyb20gb3V0c2lkZVxuICAgICAgICogVGhpcyBpbiB0aW1lIHRyaWdnZXJzIHRoZSBhdXRvY29tcGxldGUtc2VsZWN0ZWQgZXZlbnRcbiAgICAgICAqIHdpdGggYWxsIHRoZSBkYXRhIHJlcXVpcmVkXG4gICAgICAgKi9cbiAgICAgIG9uU2VsZWN0SGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuJC5wYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLl9vblNlbGVjdChldmVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1zZWxlY3RlZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGNoYW5nZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtY2hhbmdlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgZm9jdXNcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWZvY3VzXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgYmx1clxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IHJlc2V0L2NsZWFyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1yZXNldC1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG4gICAgfSk7XG4gIH0oKSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sIiwiXG5yZXF1aXJlKCcuLi9pcm9uLWljb24vaXJvbi1pY29uLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGlyb24taWNvbnNldC1zdmcgbmFtZT1pY29ucyBzaXplPTI0PiA8c3ZnPjxkZWZzPiA8ZyBpZD0zZC1yb3RhdGlvbj48cGF0aCBkPVxcXCJNNy41MiAyMS40OEM0LjI1IDE5Ljk0IDEuOTEgMTYuNzYgMS41NSAxM0guMDVDLjU2IDE5LjE2IDUuNzEgMjQgMTIgMjRsLjY2LS4wMy0zLjgxLTMuODEtMS4zMyAxLjMyem0uODktNi41MmMtLjE5IDAtLjM3LS4wMy0uNTItLjA4LS4xNi0uMDYtLjI5LS4xMy0uNC0uMjQtLjExLS4xLS4yLS4yMi0uMjYtLjM3LS4wNi0uMTQtLjA5LS4zLS4wOS0uNDdoLTEuM2MwIC4zNi4wNy42OC4yMS45NS4xNC4yNy4zMy41LjU2LjY5LjI0LjE4LjUxLjMyLjgyLjQxLjMuMS42Mi4xNS45Ni4xNS4zNyAwIC43Mi0uMDUgMS4wMy0uMTUuMzItLjEuNi0uMjUuODMtLjQ0cy40Mi0uNDMuNTUtLjcyYy4xMy0uMjkuMi0uNjEuMi0uOTcgMC0uMTktLjAyLS4zOC0uMDctLjU2LS4wNS0uMTgtLjEyLS4zNS0uMjMtLjUxLS4xLS4xNi0uMjQtLjMtLjQtLjQzLS4xNy0uMTMtLjM3LS4yMy0uNjEtLjMxLjItLjA5LjM3LS4yLjUyLS4zMy4xNS0uMTMuMjctLjI3LjM3LS40Mi4xLS4xNS4xNy0uMy4yMi0uNDYuMDUtLjE2LjA3LS4zMi4wNy0uNDggMC0uMzYtLjA2LS42OC0uMTgtLjk2LS4xMi0uMjgtLjI5LS41MS0uNTEtLjY5LS4yLS4xOS0uNDctLjMzLS43Ny0uNDNDOS4xIDguMDUgOC43NiA4IDguMzkgOGMtLjM2IDAtLjY5LjA1LTEgLjE2LS4zLjExLS41Ny4yNi0uNzkuNDUtLjIxLjE5LS4zOC40MS0uNTEuNjctLjEyLjI2LS4xOC41NC0uMTguODVoMS4zYzAtLjE3LjAzLS4zMi4wOS0uNDVzLjE0LS4yNS4yNS0uMzRjLjExLS4wOS4yMy0uMTcuMzgtLjIyLjE1LS4wNS4zLS4wOC40OC0uMDguNCAwIC43LjEuODkuMzEuMTkuMi4yOS40OS4yOS44NiAwIC4xOC0uMDMuMzQtLjA4LjQ5LS4wNS4xNS0uMTQuMjctLjI1LjM3LS4xMS4xLS4yNS4xOC0uNDEuMjQtLjE2LjA2LS4zNi4wOS0uNTguMDlINy41djEuMDNoLjc3Yy4yMiAwIC40Mi4wMi42LjA3cy4zMy4xMy40NS4yM2MuMTIuMTEuMjIuMjQuMjkuNC4wNy4xNi4xLjM1LjEuNTcgMCAuNDEtLjEyLjcyLS4zNS45My0uMjMuMjMtLjU1LjMzLS45NS4zM3ptOC41NS01LjkyYy0uMzItLjMzLS43LS41OS0xLjE0LS43Ny0uNDMtLjE4LS45Mi0uMjctMS40Ni0uMjdIMTJ2OGgyLjNjLjU1IDAgMS4wNi0uMDkgMS41MS0uMjcuNDUtLjE4Ljg0LS40MyAxLjE2LS43Ni4zMi0uMzMuNTctLjczLjc0LTEuMTkuMTctLjQ3LjI2LS45OS4yNi0xLjU3di0uNGMwLS41OC0uMDktMS4xLS4yNi0xLjU3LS4xOC0uNDctLjQzLS44Ny0uNzUtMS4yem0tLjM5IDMuMTZjMCAuNDItLjA1Ljc5LS4xNCAxLjEzLS4xLjMzLS4yNC42Mi0uNDMuODUtLjE5LjIzLS40My40MS0uNzEuNTMtLjI5LjEyLS42Mi4xOC0uOTkuMThoLS45MVY5LjEyaC45N2MuNzIgMCAxLjI3LjIzIDEuNjQuNjkuMzguNDYuNTcgMS4xMi41NyAxLjk5di40ek0xMiAwbC0uNjYuMDMgMy44MSAzLjgxIDEuMzMtMS4zM2MzLjI3IDEuNTUgNS42MSA0LjcyIDUuOTYgOC40OGgxLjVDMjMuNDQgNC44NCAxOC4yOSAwIDEyIDB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2Nlc3NpYmlsaXR5PjxwYXRoIGQ9XFxcIk0xMiAyYzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMi0yLS45LTItMiAuOS0yIDItMnptOSA3aC02djEzaC0ydi02aC0ydjZIOVY5SDNWN2gxOHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjZXNzaWJsZT48Y2lyY2xlIGN4PTEyIGN5PTQgcj0yPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xOSAxM3YtMmMtMS41NC4wMi0zLjA5LS43NS00LjA3LTEuODNsLTEuMjktMS40M2MtLjE3LS4xOS0uMzgtLjM0LS42MS0uNDUtLjAxIDAtLjAxLS4wMS0uMDItLjAxSDEzYy0uMzUtLjItLjc1LS4zLTEuMTktLjI2QzEwLjc2IDcuMTEgMTAgOC4wNCAxMCA5LjA5VjE1YzAgMS4xLjkgMiAyIDJoNXY1aDJ2LTUuNWMwLTEuMS0uOS0yLTItMmgtM3YtMy40NWMxLjI5IDEuMDcgMy4yNSAxLjk0IDUgMS45NXptLTYuMTcgNWMtLjQxIDEuMTYtMS41MiAyLTIuODMgMi0xLjY2IDAtMy0xLjM0LTMtMyAwLTEuMzEuODQtMi40MSAyLTIuODNWMTIuMWMtMi4yOC40Ni00IDIuNDgtNCA0LjkgMCAyLjc2IDIuMjQgNSA1IDUgMi40MiAwIDQuNDQtMS43MiA0LjktNGgtMi4wN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtYmFsYW5jZT48cGF0aCBkPVxcXCJNNCAxMHY3aDN2LTdINHptNiAwdjdoM3YtN2gtM3pNMiAyMmgxOXYtM0gydjN6bTE0LTEydjdoM3YtN2gtM3ptLTQuNS05TDIgNnYyaDE5VjZsLTkuNS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1iYWxhbmNlLXdhbGxldD48cGF0aCBkPVxcXCJNMjEgMTh2MWMwIDEuMS0uOSAyLTIgMkg1Yy0xLjExIDAtMi0uOS0yLTJWNWMwLTEuMS44OS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnYxaC05Yy0xLjExIDAtMiAuOS0yIDJ2OGMwIDEuMS44OSAyIDIgMmg5em0tOS0yaDEwVjhIMTJ2OHptNC0yLjVjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1ib3g+PHBhdGggZD1cXFwiTTMgNXYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0ySDVjLTEuMTEgMC0yIC45LTIgMnptMTIgNGMwIDEuNjYtMS4zNCAzLTMgM3MtMy0xLjM0LTMtMyAxLjM0LTMgMy0zIDMgMS4zNCAzIDN6bS05IDhjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xdjFINnYtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDNjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem0wIDE0LjJjLTIuNSAwLTQuNzEtMS4yOC02LTMuMjIuMDMtMS45OSA0LTMuMDggNi0zLjA4IDEuOTkgMCA1Ljk3IDEuMDkgNiAzLjA4LTEuMjkgMS45NC0zLjUgMy4yMi02IDMuMjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQ+PHBhdGggZD1cXFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1hbGVydD48cGF0aCBkPVxcXCJNMTAuMDEgMjEuMDFjMCAxLjEuODkgMS45OSAxLjk5IDEuOTlzMS45OS0uODkgMS45OS0xLjk5aC0zLjk4em04Ljg3LTQuMTlWMTFjMC0zLjI1LTIuMjUtNS45Ny01LjI5LTYuNjl2LS43MkMxMy41OSAyLjcxIDEyLjg4IDIgMTIgMnMtMS41OS43MS0xLjU5IDEuNTl2LjcyQzcuMzcgNS4wMyA1LjEyIDcuNzUgNS4xMiAxMXY1LjgyTDMgMTguOTRWMjBoMTh2LTEuMDZsLTIuMTItMi4xMnpNMTYgMTMuMDFoLTN2M2gtMnYtM0g4VjExaDNWOGgydjNoM3YyLjAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWJveD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTIgMTBoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNSAxMWgtNHY0aC0ydi00SDd2LTJoNFY3aDJ2NGg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtY2lyY2xlLW91dGxpbmU+PHBhdGggZD1cXFwiTTEzIDdoLTJ2NEg3djJoNHY0aDJ2LTRoNHYtMmgtNFY3em0tMS01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1zaG9wcGluZy1jYXJ0PjxwYXRoIGQ9XFxcIk0xMSA5aDJWNmgzVjRoLTNWMWgtMnYzSDh2MmgzdjN6bS00IDljLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6bTEwIDBjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yem0tOS44My0zLjI1bC4wMy0uMTIuOS0xLjYzaDcuNDVjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuODYtNy4wMUwxOS40MiA0aC0uMDFsLTEuMSAyLTIuNzYgNUg4LjUzbC0uMTMtLjI3TDYuMTYgNmwtLjk1LTItLjk0LTJIMXYyaDJsMy42IDcuNTktMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDEydi0ySDcuNDJjLS4xMyAwLS4yNS0uMTEtLjI1LS4yNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtPjxwYXRoIGQ9XFxcIk0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0xMi41IDhIMTF2Nmw0Ljc1IDIuODUuNzUtMS4yMy00LTIuMzdWOHpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybS1hZGQ+PHBhdGggZD1cXFwiTTcuODggMy4zOUw2LjYgMS44NiAyIDUuNzFsMS4yOSAxLjUzIDQuNTktMy44NXpNMjIgNS43MmwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTEyIDRjLTQuOTcgMC05IDQuMDMtOSA5czQuMDIgOSA5IDljNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bTAgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3em0xLTExaC0ydjNIOHYyaDN2M2gydi0zaDN2LTJoLTNWOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtLW9mZj48cGF0aCBkPVxcXCJNMTIgNmMzLjg3IDAgNyAzLjEzIDcgNyAwIC44NC0uMTYgMS42NS0uNDMgMi40bDEuNTIgMS41MmMuNTgtMS4xOS45MS0yLjUxLjkxLTMuOTIgMC00Ljk3LTQuMDMtOS05LTktMS40MSAwLTIuNzMuMzMtMy45Mi45MUw5LjYgNi40M0MxMC4zNSA2LjE2IDExLjE2IDYgMTIgNnptMTAtLjI4bC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNMi45MiAyLjI5TDEuNjUgMy41NyAyLjk4IDQuOWwtMS4xMS45MyAxLjQyIDEuNDIgMS4xMS0uOTQuOC44QzMuODMgOC42OSAzIDEwLjc1IDMgMTNjMCA0Ljk3IDQuMDIgOSA5IDkgMi4yNSAwIDQuMzEtLjgzIDUuODktMi4ybDIuMiAyLjIgMS4yNy0xLjI3TDMuODkgMy4yN2wtLjk3LS45OHptMTMuNTUgMTYuMUMxNS4yNiAxOS4zOSAxMy43IDIwIDEyIDIwYy0zLjg3IDAtNy0zLjEzLTctNyAwLTEuNy42MS0zLjI2IDEuNjEtNC40N2w5Ljg2IDkuODZ6TTguMDIgMy4yOEw2LjYgMS44NmwtLjg2LjcxIDEuNDIgMS40Mi44Ni0uNzF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybS1vbj48cGF0aCBkPVxcXCJNMjIgNS43MmwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTcuODggMy4zOUw2LjYgMS44NiAyIDUuNzFsMS4yOSAxLjUzIDQuNTktMy44NXpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6bS0xLjQ2LTUuNDdMOC40MSAxMi40bC0xLjA2IDEuMDYgMy4xOCAzLjE4IDYtNi0xLjA2LTEuMDYtNC45MyA0Ljk1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxsLW91dD48cGF0aCBkPVxcXCJNMTYuMjEgNC4xNmw0IDR2LTR6bTQgMTJsLTQgNGg0em0tMTIgNGwtNC00djR6bS00LTEybDQtNGgtNHptMTIuOTUtLjk1Yy0yLjczLTIuNzMtNy4xNy0yLjczLTkuOSAwcy0yLjczIDcuMTcgMCA5LjkgNy4xNyAyLjczIDkuOSAwIDIuNzMtNy4xNiAwLTkuOXptLTEuMSA4LjhjLTIuMTMgMi4xMy01LjU3IDIuMTMtNy43IDBzLTIuMTMtNS41NyAwLTcuNyA1LjU3LTIuMTMgNy43IDAgMi4xMyA1LjU3IDAgNy43elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YW5kcm9pZD48cGF0aCBkPVxcXCJNNiAxOGMwIC41NS40NSAxIDEgMWgxdjMuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjVWMTloMnYzLjVjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41VjE5aDFjLjU1IDAgMS0uNDUgMS0xVjhINnYxMHpNMy41IDhDMi42NyA4IDIgOC42NyAyIDkuNXY3YzAgLjgzLjY3IDEuNSAxLjUgMS41UzUgMTcuMzMgNSAxNi41di03QzUgOC42NyA0LjMzIDggMy41IDh6bTE3IDBjLS44MyAwLTEuNS42Ny0xLjUgMS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41di03YzAtLjgzLS42Ny0xLjUtMS41LTEuNXptLTQuOTctNS44NGwxLjMtMS4zYy4yLS4yLjItLjUxIDAtLjcxLS4yLS4yLS41MS0uMi0uNzEgMGwtMS40OCAxLjQ4QzEzLjg1IDEuMjMgMTIuOTUgMSAxMiAxYy0uOTYgMC0xLjg2LjIzLTIuNjYuNjNMNy44NS4xNWMtLjItLjItLjUxLS4yLS43MSAwLS4yLjItLjIuNTEgMCAuNzFsMS4zMSAxLjMxQzYuOTcgMy4yNiA2IDUuMDEgNiA3aDEyYzAtMS45OS0uOTctMy43NS0yLjQ3LTQuODR6TTEwIDVIOVY0aDF2MXptNSAwaC0xVjRoMXYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YW5ub3VuY2VtZW50PjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgOWgtMlY1aDJ2NnptMCA0aC0ydi0yaDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFwcHM+PHBhdGggZD1cXFwiTTQgOGg0VjRINHY0em02IDEyaDR2LTRoLTR2NHptLTYgMGg0di00SDR2NHptMC02aDR2LTRINHY0em02IDBoNHYtNGgtNHY0em02LTEwdjRoNFY0aC00em0tNiA0aDRWNGgtNHY0em02IDZoNHYtNGgtNHY0em0wIDZoNHYtNGgtNHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJjaGl2ZT48cGF0aCBkPVxcXCJNMjAuNTQgNS4yM2wtMS4zOS0xLjY4QzE4Ljg4IDMuMjEgMTguNDcgMyAxOCAzSDZjLS40NyAwLS44OC4yMS0xLjE2LjU1TDMuNDYgNS4yM0MzLjE3IDUuNTcgMyA2LjAyIDMgNi41VjE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ4LS4xNy0uOTMtLjQ2LTEuMjd6TTEyIDE3LjVMNi41IDEySDEwdi0yaDR2MmgzLjVMMTIgMTcuNXpNNS4xMiA1bC44MS0xaDEybC45NCAxSDUuMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1iYWNrPjxwYXRoIGQ9XFxcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZG93bndhcmQ+PHBhdGggZD1cXFwiTTIwIDEybC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnYxMi4xN2wtNS41OC01LjU5TDQgMTJsOCA4IDgtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRyb3AtZG93bj48cGF0aCBkPVxcXCJNNyAxMGw1IDUgNS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZHJvcC1kb3duLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxMmwtNC00aDhsLTQgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRyb3AtdXA+PHBhdGggZD1cXFwiTTcgMTRsNS01IDUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWZvcndhcmQ+PHBhdGggZD1cXFwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy11cHdhcmQ+PHBhdGggZD1cXFwiTTQgMTJsMS40MSAxLjQxTDExIDcuODNWMjBoMlY3LjgzbDUuNTggNS41OUwyMCAxMmwtOC04LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzcGVjdC1yYXRpbz48cGF0aCBkPVxcXCJNMTkgMTJoLTJ2M2gtM3YyaDV2LTV6TTcgOWgzVjdINXY1aDJWOXptMTQtNkgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTYuMDFIM1Y0Ljk5aDE4djE0LjAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzZXNzbWVudD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTkgMTdIN3YtN2gydjd6bTQgMGgtMlY3aDJ2MTB6bTQgMGgtMnYtNGgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50PjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMiAxNEg3di0yaDd2MnptMy00SDd2LTJoMTB2MnptMC00SDdWN2gxMHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1pbmQ+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0wIDRjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem02IDEySDZ2LTEuNGMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjFWMTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LWxhdGU+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTYgMTVoLTJ2LTJoMnYyem0wLTRoLTJWOGgydjZ6bS0xLTljLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtcmV0dXJuPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNCAxMmgtNHYzbC01LTUgNS01djNoNHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1yZXR1cm5lZD48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTAgMTVsLTUtNWgzVjloNHY0aDNsLTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtdHVybmVkLWluPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptLTIgMTRsLTQtNCAxLjQxLTEuNDFMMTAgMTQuMTdsNi41OS02LjU5TDE4IDlsLTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWF0dGFjaG1lbnQ+PHBhdGggZD1cXFwiTTIgMTIuNUMyIDkuNDYgNC40NiA3IDcuNSA3SDE4YzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0SDkuNUM4LjEyIDE1IDcgMTMuODggNyAxMi41UzguMTIgMTAgOS41IDEwSDE3djJIOS40MWMtLjU1IDAtLjU1IDEgMCAxSDE4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMkg3LjVDNS41NyA5IDQgMTAuNTcgNCAxMi41UzUuNTcgMTYgNy41IDE2SDE3djJINy41QzQuNDYgMTggMiAxNS41NCAyIDEyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hdXRvcmVuZXc+PHBhdGggZD1cXFwiTTEyIDZ2M2w0LTQtNC00djNjLTQuNDIgMC04IDMuNTgtOCA4IDAgMS41Ny40NiAzLjAzIDEuMjQgNC4yNkw2LjcgMTQuOGMtLjQ1LS44My0uNy0xLjc5LS43LTIuOCAwLTMuMzEgMi42OS02IDYtNnptNi43NiAxLjc0TDE3LjMgOS4yYy40NC44NC43IDEuNzkuNyAyLjggMCAzLjMxLTIuNjkgNi02IDZ2LTNsLTQgNCA0IDR2LTNjNC40MiAwIDgtMy41OCA4LTggMC0xLjU3LS40Ni0zLjAzLTEuMjQtNC4yNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJhY2tzcGFjZT48cGF0aCBkPVxcXCJNMjIgM0g3Yy0uNjkgMC0xLjIzLjM1LTEuNTkuODhMMCAxMmw1LjQxIDguMTFjLjM2LjUzLjkuODkgMS41OS44OWgxNWMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMyAxMi41OUwxNy41OSAxNyAxNCAxMy40MSAxMC40MSAxNyA5IDE1LjU5IDEyLjU5IDEyIDkgOC40MSAxMC40MSA3IDE0IDEwLjU5IDE3LjU5IDcgMTkgOC40MSAxNS40MSAxMiAxOSAxNS41OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJhY2t1cD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJsb2NrPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek00IDEyYzAtNC40MiAzLjU4LTggOC04IDEuODUgMCAzLjU1LjYzIDQuOSAxLjY5TDUuNjkgMTYuOUM0LjYzIDE1LjU1IDQgMTMuODUgNCAxMnptOCA4Yy0xLjg1IDAtMy41NS0uNjMtNC45LTEuNjlMMTguMzEgNy4xQzE5LjM3IDguNDUgMjAgMTAuMTUgMjAgMTJjMCA0LjQyLTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ib29rPjxwYXRoIGQ9XFxcIk0xOCAySDZjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNNiA0aDV2OGwtMi41LTEuNUw2IDEyVjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ib29rbWFyaz48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Ym9va21hcmstYm9yZGVyPjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTVsLTUtMi4xOEw3IDE4VjVoMTB2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1idWctcmVwb3J0PjxwYXRoIGQ9XFxcIk0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1idWlsZD48cGF0aCBkPVxcXCJNMjIuNyAxOWwtOS4xLTkuMWMuOS0yLjMuNC01LTEuNS02LjktMi0yLTUtMi40LTcuNC0xLjNMOSA2IDYgOSAxLjYgNC43Qy40IDcuMS45IDEwLjEgMi45IDEyLjFjMS45IDEuOSA0LjYgMi40IDYuOSAxLjVsOS4xIDkuMWMuNC40IDEgLjQgMS40IDBsMi4zLTIuM2MuNS0uNC41LTEuMS4xLTEuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhY2hlZD48cGF0aCBkPVxcXCJNMTkgOGwtNCA0aDNjMCAzLjMxLTIuNjkgNi02IDYtMS4wMSAwLTEuOTctLjI1LTIuOC0uN2wtMS40NiAxLjQ2QzguOTcgMTkuNTQgMTAuNDMgMjAgMTIgMjBjNC40MiAwIDgtMy41OCA4LThoM2wtNC00ek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00SDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYW1lcmEtZW5oYW5jZT48cGF0aCBkPVxcXCJNOSAzTDcuMTcgNUg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJoLTMuMTdMMTUgM0g5em0zIDE1Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC0xbDEuMjUtMi43NUwxNiAxM2wtMi43NS0xLjI1TDEyIDlsLTEuMjUgMi43NUw4IDEzbDIuNzUgMS4yNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhbmNlbD48cGF0aCBkPVxcXCJNMTIgMkM2LjQ3IDIgMiA2LjQ3IDIgMTJzNC40NyAxMCAxMCAxMCAxMC00LjQ3IDEwLTEwUzE3LjUzIDIgMTIgMnptNSAxMy41OUwxNS41OSAxNyAxMiAxMy40MSA4LjQxIDE3IDcgMTUuNTkgMTAuNTkgMTIgNyA4LjQxIDguNDEgNyAxMiAxMC41OSAxNS41OSA3IDE3IDguNDEgMTMuNDEgMTIgMTcgMTUuNTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYXJkLWdpZnRjYXJkPjxwYXRoIGQ9XFxcIk0yMCA2aC0yLjE4Yy4xMS0uMzEuMTgtLjY1LjE4LTEgMC0xLjY2LTEuMzQtMy0zLTMtMS4wNSAwLTEuOTYuNTQtMi41IDEuMzVsLS41LjY3LS41LS42OEMxMC45NiAyLjU0IDEwLjA1IDIgOSAyIDcuMzQgMiA2IDMuMzQgNiA1YzAgLjM1LjA3LjY5LjE4IDFINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tNS0yYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6TTkgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoNS4wOEw3IDEwLjgzIDguNjIgMTIgMTEgOC43NmwxLTEuMzYgMSAxLjM2TDE1LjM4IDEyIDE3IDEwLjgzIDE0LjkyIDhIMjB2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhcmQtbWVtYmVyc2hpcD48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjExIDAtMiAuODktMiAydjExYzAgMS4xMS44OSAyIDIgMmg0djVsNC0yIDQgMnYtNWg0YzEuMTEgMCAyLS44OSAyLTJWNGMwLTEuMTEtLjg5LTItMi0yem0wIDEzSDR2LTJoMTZ2MnptMC01SDRWNGgxNnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FyZC10cmF2ZWw+PHBhdGggZD1cXFwiTTIwIDZoLTNWNGMwLTEuMTEtLjg5LTItMi0ySDljLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMiAuODktMiAydjExYzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnpNOSA0aDZ2Mkg5VjR6bTExIDE1SDR2LTJoMTZ2MnptMC01SDRWOGgzdjJoMlY4aDZ2MmgyVjhoM3Y2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hhbmdlLWhpc3Rvcnk+PHBhdGggZD1cXFwiTTEyIDcuNzdMMTguMzkgMThINS42MUwxMiA3Ljc3TTEyIDRMMiAyMGgyMEwxMiA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2s+PHBhdGggZD1cXFwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2stYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjay1ib3gtb3V0bGluZS1ibGFuaz48cGF0aCBkPVxcXCJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZXZyb24tbGVmdD48cGF0aCBkPVxcXCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZXZyb24tcmlnaHQ+PHBhdGggZD1cXFwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hyb21lLXJlYWRlci1tb2RlPjxwYXRoIGQ9XFxcIk0xMyAxMmg3djEuNWgtN3ptMC0yLjVoN1YxMWgtN3ptMCA1aDdWMTZoLTd6TTIxIDRIM2MtMS4xIDAtMiAuOS0yIDJ2MTNjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDE1aC05VjZoOXYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsYXNzPjxwYXRoIGQ9XFxcIk0xOCAySDZjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNNiA0aDV2OGwtMi41LTEuNUw2IDEyVjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbGVhcj48cGF0aCBkPVxcXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvc2U+PHBhdGggZD1cXFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTQuNSAxNEg4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zbC4xNC4wMUM4LjU4IDguMjggMTAuMTMgNyAxMiA3YzIuMjEgMCA0IDEuNzkgNCA0aC41YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41UzE3Ljg4IDE2IDE2LjUgMTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1kb25lPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTEwIDE3bC0zLjUtMy41IDEuNDEtMS40MUwxMCAxNC4xNyAxNS4xOCA5bDEuNDEgMS40MUwxMCAxN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLWRvd25sb2FkPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE3IDEzbC01IDUtNS01aDNWOWg0djRoM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLW9mZj48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDRjLTEuNDggMC0yLjg1LjQzLTQuMDEgMS4xN2wxLjQ2IDEuNDZDMTAuMjEgNi4yMyAxMS4wOCA2IDEyIDZjMy4wNCAwIDUuNSAyLjQ2IDUuNSA1LjV2LjVIMTljMS42NiAwIDMgMS4zNCAzIDMgMCAxLjEzLS42NCAyLjExLTEuNTYgMi42MmwxLjQ1IDEuNDVDMjMuMTYgMTguMTYgMjQgMTYuNjggMjQgMTVjMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTMgNS4yN2wyLjc1IDIuNzRDMi41NiA4LjE1IDAgMTAuNzcgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxMS43M2wyIDJMMjEgMjAuNzMgNC4yNyA0IDMgNS4yN3pNNy43MyAxMGw4IDhINmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNGgxLjczelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtcXVldWU+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTkgMThINmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNGguNzFDNy4zNyA3LjY5IDkuNDggNiAxMiA2YzMuMDQgMCA1LjUgMi40NiA1LjUgNS41di41SDE5YzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtdXBsb2FkPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29kZT48cGF0aCBkPVxcXCJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbXBhcmUtYXJyb3dzPjxwYXRoIGQ9XFxcIk05LjAxIDE0SDJ2Mmg3LjAxdjNMMTMgMTVsLTMuOTktNHYzem01Ljk4LTF2LTNIMjJWOGgtNy4wMVY1TDExIDlsMy45OSA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29udGVudC1jb3B5PjxwYXRoIGQ9XFxcIk0xNiAxSDRjLTEuMSAwLTIgLjktMiAydjE0aDJWM2gxMlYxem0zIDRIOGMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxMWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0wIDE2SDhWN2gxMXYxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbnRlbnQtY3V0PjxwYXRoIGQ9XFxcIk05LjY0IDcuNjRjLjIzLS41LjM2LTEuMDUuMzYtMS42NCAwLTIuMjEtMS43OS00LTQtNFMyIDMuNzkgMiA2czEuNzkgNCA0IDRjLjU5IDAgMS4xNC0uMTMgMS42NC0uMzZMMTAgMTJsLTIuMzYgMi4zNkM3LjE0IDE0LjEzIDYuNTkgMTQgNiAxNGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00YzAtLjU5LS4xMy0xLjE0LS4zNi0xLjY0TDEyIDE0bDcgN2gzdi0xTDkuNjQgNy42NHpNNiA4Yy0xLjEgMC0yLS44OS0yLTJzLjktMiAyLTIgMiAuODkgMiAyLS45IDItMiAyem0wIDEyYy0xLjEgMC0yLS44OS0yLTJzLjktMiAyLTIgMiAuODkgMiAyLS45IDItMiAyem02LTcuNWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNS41LS41LjUuMjIuNS41LS4yMi41LS41LjV6TTE5IDNsLTYgNiAyIDIgNy03VjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb250ZW50LXBhc3RlPjxwYXRoIGQ9XFxcIk0xOSAyaC00LjE4QzE0LjQuODQgMTMuMyAwIDEyIDBjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTcgMThINVY0aDJ2M2gxMFY0aDJ2MTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb3B5cmlnaHQ+PHBhdGggZD1cXFwiTTEwLjA4IDEwLjg2Yy4wNS0uMzMuMTYtLjYyLjMtLjg3cy4zNC0uNDYuNTktLjYyYy4yNC0uMTUuNTQtLjIyLjkxLS4yMy4yMy4wMS40NC4wNS42My4xMy4yLjA5LjM4LjIxLjUyLjM2cy4yNS4zMy4zNC41My4xMy40Mi4xNC42NGgxLjc5Yy0uMDItLjQ3LS4xMS0uOS0uMjgtMS4yOXMtLjQtLjczLS43LTEuMDEtLjY2LS41LTEuMDgtLjY2LS44OC0uMjMtMS4zOS0uMjNjLS42NSAwLTEuMjIuMTEtMS43LjM0cy0uODguNTMtMS4yLjkyLS41Ni44NC0uNzEgMS4zNlM4IDExLjI5IDggMTEuODd2LjI3YzAgLjU4LjA4IDEuMTIuMjMgMS42NHMuMzkuOTcuNzEgMS4zNS43Mi42OSAxLjIuOTEgMS4wNS4zNCAxLjcuMzRjLjQ3IDAgLjkxLS4wOCAxLjMyLS4yM3MuNzctLjM2IDEuMDgtLjYzLjU2LS41OC43NC0uOTQuMjktLjc0LjMtMS4xNWgtMS43OWMtLjAxLjIxLS4wNi40LS4xNS41OHMtLjIxLjMzLS4zNi40Ni0uMzIuMjMtLjUyLjNjLS4xOS4wNy0uMzkuMDktLjYuMS0uMzYtLjAxLS42Ni0uMDgtLjg5LS4yMy0uMjUtLjE2LS40NS0uMzctLjU5LS42MnMtLjI1LS41NS0uMy0uODgtLjA4LS42Ny0uMDgtMXYtLjI3YzAtLjM1LjAzLS42OC4wOC0xLjAxek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNyZWF0ZT48cGF0aCBkPVxcXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y3JlYXRlLW5ldy1mb2xkZXI+PHBhdGggZD1cXFwiTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNyZWRpdC1jYXJkPjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZjMC0xLjExLS44OS0yLTItMnptMCAxNEg0di02aDE2djZ6bTAtMTBINFY2aDE2djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kYXNoYm9hcmQ+PHBhdGggZD1cXFwiTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGF0ZS1yYW5nZT48cGF0aCBkPVxcXCJNOSAxMUg3djJoMnYtMnptNCAwaC0ydjJoMnYtMnptNCAwaC0ydjJoMnYtMnptMi03aC0xVjJoLTJ2Mkg4VjJINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMjBjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjloMTR2MTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZWxldGU+PHBhdGggZD1cXFwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTRWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlbGV0ZS1mb3JldmVyPjxwYXRoIGQ9XFxcIk02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZWxldGUtc3dlZXA+PHBhdGggZD1cXFwiTTE1IDE2aDR2MmgtNHptMC04aDd2MmgtN3ptMCA0aDZ2MmgtNnpNMyAxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWOEgzdjEwek0xNCA1aC0zbC0xLTFINkw1IDVIMnYyaDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVzY3JpcHRpb24+PHBhdGggZD1cXFwiTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4YzEuMSAwIDItLjkgMi0yVjhsLTYtNnptMiAxNkg4di0yaDh2MnptMC00SDh2LTJoOHYyem0tMy01VjMuNUwxOC41IDlIMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kbnM+PHBhdGggZD1cXFwiTTIwIDEzSDRjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXYtNmMwLS41NS0uNDUtMS0xLTF6TTcgMTljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyek0yMCAzSDRjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMXpNNyA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbmU+PHBhdGggZD1cXFwiTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbmUtYWxsPjxwYXRoIGQ9XFxcIk0xOCA3bC0xLjQxLTEuNDEtNi4zNCA2LjM0IDEuNDEgMS40MUwxOCA3em00LjI0LTEuNDFMMTEuNjYgMTYuMTcgNy40OCAxMmwtMS40MSAxLjQxTDExLjY2IDE5bDEyLTEyLTEuNDItMS40MXpNLjQxIDEzLjQxTDYgMTlsMS40MS0xLjQxTDEuODMgMTIgLjQxIDEzLjQxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9udXQtbGFyZ2U+PHBhdGggZD1cXFwiTTExIDUuMDhWMmMtNSAuNS05IDQuODEtOSAxMHM0IDkuNSA5IDEwdi0zLjA4Yy0zLS40OC02LTMuNC02LTYuOTJzMy02LjQ0IDYtNi45MnpNMTguOTcgMTFIMjJjLS40Ny01LTQtOC41My05LTl2My4wOEMxNiA1LjUxIDE4LjU0IDggMTguOTcgMTF6TTEzIDE4LjkyVjIyYzUtLjQ3IDguNTMtNCA5LTloLTMuMDNjLS40MyAzLTIuOTcgNS40OS01Ljk3IDUuOTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb251dC1zbWFsbD48cGF0aCBkPVxcXCJNMTEgOS4xNlYyYy01IC41LTkgNC43OS05IDEwczQgOS41IDkgMTB2LTcuMTZjLTEtLjQxLTItMS41Mi0yLTIuODRzMS0yLjQzIDItMi44NHpNMTQuODYgMTFIMjJjLS40OC00Ljc1LTQtOC41My05LTl2Ny4xNmMxIC4zIDEuNTIuOTggMS44NiAxLjg0ek0xMyAxNC44NFYyMmM1LS40NyA4LjUyLTQuMjUgOS05aC03LjE0Yy0uMzQuODYtLjg2IDEuNTQtMS44NiAxLjg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZHJhZnRzPjxwYXRoIGQ9XFxcIk0yMS45OSA4YzAtLjcyLS4zNy0xLjM1LS45NC0xLjdMMTIgMSAyLjk1IDYuM0MyLjM4IDYuNjUgMiA3LjI4IDIgOHYxMGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0ybC0uMDEtMTB6TTEyIDEzTDMuNzQgNy44NCAxMiAzbDguMjYgNC44NEwxMiAxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVqZWN0PjxwYXRoIGQ9XFxcIk01IDE3aDE0djJINXptNy0xMkw1LjMzIDE1aDEzLjM0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXJyb3I+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1lcnJvci1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMSAxNWgydjJoLTJ6bTAtOGgydjZoLTJ6bS45OS01QzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ldXJvLXN5bWJvbD48cGF0aCBkPVxcXCJNMTUgMTguNWMtMi41MSAwLTQuNjgtMS40Mi01Ljc2LTMuNUgxNXYtMkg4LjU4Yy0uMDUtLjMzLS4wOC0uNjYtLjA4LTFzLjAzLS42Ny4wOC0xSDE1VjlIOS4yNEMxMC4zMiA2LjkyIDEyLjUgNS41IDE1IDUuNWMxLjYxIDAgMy4wOS41OSA0LjIzIDEuNTdMMjEgNS4zQzE5LjQxIDMuODcgMTcuMyAzIDE1IDNjLTMuOTIgMC03LjI0IDIuNTEtOC40OCA2SDN2MmgzLjA2Yy0uMDQuMzMtLjA2LjY2LS4wNiAxIDAgLjM0LjAyLjY3LjA2IDFIM3YyaDMuNTJjMS4yNCAzLjQ5IDQuNTYgNiA4LjQ4IDYgMi4zMSAwIDQuNDEtLjg3IDYtMi4zbC0xLjc4LTEuNzdjLTEuMTMuOTgtMi42IDEuNTctNC4yMiAxLjU3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXZlbnQ+PHBhdGggZD1cXFwiTTE3IDEyaC01djVoNXYtNXpNMTYgMXYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yaC0xVjFoLTJ6bTMgMThINVY4aDE0djExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXZlbnQtc2VhdD48cGF0aCBkPVxcXCJNNCAxOHYzaDN2LTNoMTB2M2gzdi02SDR6bTE1LThoM3YzaC0zek0yIDEwaDN2M0gyem0xNSAzSDdWNWMwLTEuMS45LTIgMi0yaDZjMS4xIDAgMiAuOSAyIDJ2OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4aXQtdG8tYXBwPjxwYXRoIGQ9XFxcIk0xMC4wOSAxNS41OUwxMS41IDE3bDUtNS01LTUtMS40MSAxLjQxTDEyLjY3IDExSDN2Mmg5LjY3bC0yLjU4IDIuNTl6TTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjRoMlY1aDE0djE0SDV2LTRIM3Y0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHBhbmQtbGVzcz48cGF0aCBkPVxcXCJNMTIgOGwtNiA2IDEuNDEgMS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHBhbmQtbW9yZT48cGF0aCBkPVxcXCJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhwbG9yZT48cGF0aCBkPVxcXCJNMTIgMTAuOWMtLjYxIDAtMS4xLjQ5LTEuMSAxLjFzLjQ5IDEuMSAxLjEgMS4xYy42MSAwIDEuMS0uNDkgMS4xLTEuMXMtLjQ5LTEuMS0xLjEtMS4xek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0yLjE5IDEyLjE5TDYgMThsMy44MS04LjE5TDE4IDZsLTMuODEgOC4xOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4dGVuc2lvbj48cGF0aCBkPVxcXCJNMjAuNSAxMUgxOVY3YzAtMS4xLS45LTItMi0yaC00VjMuNUMxMyAyLjEyIDExLjg4IDEgMTAuNSAxUzggMi4xMiA4IDMuNVY1SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJ2My44SDMuNWMxLjQ5IDAgMi43IDEuMjEgMi43IDIuN3MtMS4yMSAyLjctMi43IDIuN0gyVjIwYzAgMS4xLjkgMiAyIDJoMy44di0xLjVjMC0xLjQ5IDEuMjEtMi43IDIuNy0yLjcgMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdWMjJIMTdjMS4xIDAgMi0uOSAyLTJ2LTRoMS41YzEuMzggMCAyLjUtMS4xMiAyLjUtMi41UzIxLjg4IDExIDIwLjUgMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mYWNlPjxwYXRoIGQ9XFxcIk05IDExLjc1Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXMuNTYgMS4yNSAxLjI1IDEuMjUgMS4yNS0uNTYgMS4yNS0xLjI1LS41Ni0xLjI1LTEuMjUtMS4yNXptNiAwYy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXMuNTYgMS4yNSAxLjI1IDEuMjUgMS4yNS0uNTYgMS4yNS0xLjI1LS41Ni0xLjI1LTEuMjUtMS4yNXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LTggMC0uMjkuMDItLjU4LjA1LS44NiAyLjM2LTEuMDUgNC4yMy0yLjk4IDUuMjEtNS4zN0MxMS4wNyA4LjMzIDE0LjA1IDEwIDE3LjQyIDEwYy43OCAwIDEuNTMtLjA5IDIuMjUtLjI2LjIxLjcxLjMzIDEuNDcuMzMgMi4yNiAwIDQuNDEtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZhdm9yaXRlPjxwYXRoIGQ9XFxcIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmF2b3JpdGUtYm9yZGVyPjxwYXRoIGQ9XFxcIk0xNi41IDNjLTEuNzQgMC0zLjQxLjgxLTQuNSAyLjA5QzEwLjkxIDMuODEgOS4yNCAzIDcuNSAzIDQuNDIgMyAyIDUuNDIgMiA4LjVjMCAzLjc4IDMuNCA2Ljg2IDguNTUgMTEuNTRMMTIgMjEuMzVsMS40NS0xLjMyQzE4LjYgMTUuMzYgMjIgMTIuMjggMjIgOC41IDIyIDUuNDIgMTkuNTggMyAxNi41IDN6bS00LjQgMTUuNTVsLS4xLjEtLjEtLjFDNy4xNCAxNC4yNCA0IDExLjM5IDQgOC41IDQgNi41IDUuNSA1IDcuNSA1YzEuNTQgMCAzLjA0Ljk5IDMuNTcgMi4zNmgxLjg3QzEzLjQ2IDUuOTkgMTQuOTYgNSAxNi41IDVjMiAwIDMuNSAxLjUgMy41IDMuNSAwIDIuODktMy4xNCA1Ljc0LTcuOSAxMC4wNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZlZWRiYWNrPjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgMTJoLTJ2LTJoMnYyem0wLTRoLTJWNmgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maWxlLWRvd25sb2FkPjxwYXRoIGQ9XFxcIk0xOSA5aC00VjNIOXY2SDVsNyA3IDctN3pNNSAxOHYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maWxlLXVwbG9hZD48cGF0aCBkPVxcXCJNOSAxNmg2di02aDRsLTctNy03IDdoNHptLTQgMmgxNHYySDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maWx0ZXItbGlzdD48cGF0aCBkPVxcXCJNMTAgMThoNHYtMmgtNHYyek0zIDZ2MmgxOFY2SDN6bTMgN2gxMnYtMkg2djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maW5kLWluLXBhZ2U+PHBhdGggZD1cXFwiTTIwIDE5LjU5VjhsLTYtNkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjLjQ1IDAgLjg1LS4xNSAxLjE5LS40bC00LjQzLTQuNDNjLS44LjUyLTEuNzQuODMtMi43Ni44My0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDVjMCAxLjAyLS4zMSAxLjk2LS44MyAyLjc1TDIwIDE5LjU5ek05IDEzYzAgMS42NiAxLjM0IDMgMyAzczMtMS4zNCAzLTMtMS4zNC0zLTMtMy0zIDEuMzQtMyAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmluZC1yZXBsYWNlPjxwYXRoIGQ9XFxcIk0xMSA2YzEuMzggMCAyLjYzLjU2IDMuNTQgMS40NkwxMiAxMGg2VjRsLTIuMDUgMi4wNUMxNC42OCA0Ljc4IDEyLjkzIDQgMTEgNGMtMy41MyAwLTYuNDMgMi42MS02LjkyIDZINi4xYy40Ni0yLjI4IDIuNDgtNCA0LjktNHptNS42NCA5LjE0Yy42Ni0uOSAxLjEyLTEuOTcgMS4yOC0zLjE0SDE1LjljLS40NiAyLjI4LTIuNDggNC00LjkgNC0xLjM4IDAtMi42My0uNTYtMy41NC0xLjQ2TDEwIDEySDR2NmwyLjA1LTIuMDVDNy4zMiAxNy4yMiA5LjA3IDE4IDExIDE4YzEuNTUgMCAyLjk4LS41MSA0LjE0LTEuMzZMMjAgMjEuNDkgMjEuNDkgMjBsLTQuODUtNC44NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbmdlcnByaW50PjxwYXRoIGQ9XFxcIk0xNy44MSA0LjQ3Yy0uMDggMC0uMTYtLjAyLS4yMy0uMDZDMTUuNjYgMy40MiAxNCAzIDEyLjAxIDNjLTEuOTggMC0zLjg2LjQ3LTUuNTcgMS40MS0uMjQuMTMtLjU0LjA0LS42OC0uMi0uMTMtLjI0LS4wNC0uNTUuMi0uNjhDNy44MiAyLjUyIDkuODYgMiAxMi4wMSAyYzIuMTMgMCAzLjk5LjQ3IDYuMDMgMS41Mi4yNS4xMy4zNC40My4yMS42Ny0uMDkuMTgtLjI2LjI4LS40NC4yOHpNMy41IDkuNzJjLS4xIDAtLjItLjAzLS4yOS0uMDktLjIzLS4xNi0uMjgtLjQ3LS4xMi0uNy45OS0xLjQgMi4yNS0yLjUgMy43NS0zLjI3QzkuOTggNC4wNCAxNCA0LjAzIDE3LjE1IDUuNjVjMS41Ljc3IDIuNzYgMS44NiAzLjc1IDMuMjUuMTYuMjIuMTEuNTQtLjEyLjctLjIzLjE2LS41NC4xMS0uNy0uMTItLjktMS4yNi0yLjA0LTIuMjUtMy4zOS0yLjk0LTIuODctMS40Ny02LjU0LTEuNDctOS40LjAxLTEuMzYuNy0yLjUgMS43LTMuNCAyLjk2LS4wOC4xNC0uMjMuMjEtLjM5LjIxem02LjI1IDEyLjA3Yy0uMTMgMC0uMjYtLjA1LS4zNS0uMTUtLjg3LS44Ny0xLjM0LTEuNDMtMi4wMS0yLjY0LS42OS0xLjIzLTEuMDUtMi43My0xLjA1LTQuMzQgMC0yLjk3IDIuNTQtNS4zOSA1LjY2LTUuMzlzNS42NiAyLjQyIDUuNjYgNS4zOWMwIC4yOC0uMjIuNS0uNS41cy0uNS0uMjItLjUtLjVjMC0yLjQyLTIuMDktNC4zOS00LjY2LTQuMzktMi41NyAwLTQuNjYgMS45Ny00LjY2IDQuMzkgMCAxLjQ0LjMyIDIuNzcuOTMgMy44NS42NCAxLjE1IDEuMDggMS42NCAxLjg1IDIuNDIuMTkuMi4xOS41MSAwIC43MS0uMTEuMS0uMjQuMTUtLjM3LjE1em03LjE3LTEuODVjLTEuMTkgMC0yLjI0LS4zLTMuMS0uODktMS40OS0xLjAxLTIuMzgtMi42NS0yLjM4LTQuMzkgMC0uMjguMjItLjUuNS0uNXMuNS4yMi41LjVjMCAxLjQxLjcyIDIuNzQgMS45NCAzLjU2LjcxLjQ4IDEuNTQuNzEgMi41NC43MS4yNCAwIC42NC0uMDMgMS4wNC0uMS4yNy0uMDUuNTMuMTMuNTguNDEuMDUuMjctLjEzLjUzLS40MS41OC0uNTcuMTEtMS4wNy4xMi0xLjIxLjEyek0xNC45MSAyMmMtLjA0IDAtLjA5LS4wMS0uMTMtLjAyLTEuNTktLjQ0LTIuNjMtMS4wMy0zLjcyLTIuMS0xLjQtMS4zOS0yLjE3LTMuMjQtMi4xNy01LjIyIDAtMS42MiAxLjM4LTIuOTQgMy4wOC0yLjk0IDEuNyAwIDMuMDggMS4zMiAzLjA4IDIuOTQgMCAxLjA3LjkzIDEuOTQgMi4wOCAxLjk0czIuMDgtLjg3IDIuMDgtMS45NGMwLTMuNzctMy4yNS02LjgzLTcuMjUtNi44My0yLjg0IDAtNS40NCAxLjU4LTYuNjEgNC4wMy0uMzkuODEtLjU5IDEuNzYtLjU5IDIuOCAwIC43OC4wNyAyLjAxLjY3IDMuNjEuMS4yNi0uMDMuNTUtLjI5LjY0LS4yNi4xLS41NS0uMDQtLjY0LS4yOS0uNDktMS4zMS0uNzMtMi42MS0uNzMtMy45NiAwLTEuMi4yMy0yLjI5LjY4LTMuMjQgMS4zMy0yLjc5IDQuMjgtNC42IDcuNTEtNC42IDQuNTUgMCA4LjI1IDMuNTEgOC4yNSA3LjgzIDAgMS42Mi0xLjM4IDIuOTQtMy4wOCAyLjk0cy0zLjA4LTEuMzItMy4wOC0yLjk0YzAtMS4wNy0uOTMtMS45NC0yLjA4LTEuOTRzLTIuMDguODctMi4wOCAxLjk0YzAgMS43MS42NiAzLjMxIDEuODcgNC41MS45NS45NCAxLjg2IDEuNDYgMy4yNyAxLjg1LjI3LjA3LjQyLjM1LjM1LjYxLS4wNS4yMy0uMjYuMzgtLjQ3LjM4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zmlyc3QtcGFnZT48cGF0aCBkPVxcXCJNMTguNDEgMTYuNTlMMTMuODIgMTJsNC41OS00LjU5TDE3IDZsLTYgNiA2IDZ6TTYgNmgydjEySDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGFnPjxwYXRoIGQ9XFxcIk0xNC40IDZMMTQgNEg1djE3aDJ2LTdoNS42bC40IDJoN1Y2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpZ2h0LWxhbmQ+PHBhdGggZD1cXFwiTTIuNSAxOWgxOXYyaC0xOXptNy4xOC01LjczbDQuMzUgMS4xNiA1LjMxIDEuNDJjLjguMjEgMS42Mi0uMjYgMS44NC0xLjA2LjIxLS44LS4yNi0xLjYyLTEuMDYtMS44NGwtNS4zMS0xLjQyLTIuNzYtOS4wMkwxMC4xMiAydjguMjhMNS4xNSA4Ljk1bC0uOTMtMi4zMi0xLjQ1LS4zOXY1LjE3bDEuNi40MyA1LjMxIDEuNDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlnaHQtdGFrZW9mZj48cGF0aCBkPVxcXCJNMi41IDE5aDE5djJoLTE5em0xOS41Ny05LjM2Yy0uMjEtLjgtMS4wNC0xLjI4LTEuODQtMS4wNkwxNC45MiAxMGwtNi45LTYuNDMtMS45My41MSA0LjE0IDcuMTctNC45NyAxLjMzLTEuOTctMS41NC0xLjQ1LjM5IDEuODIgMy4xNi43NyAxLjMzIDEuNi0uNDMgNS4zMS0xLjQyIDQuMzUtMS4xNkwyMSAxMS40OWMuODEtLjIzIDEuMjgtMS4wNSAxLjA3LTEuODV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlwLXRvLWJhY2s+PHBhdGggZD1cXFwiTTkgN0g3djJoMlY3em0wIDRIN3YyaDJ2LTJ6bTAtOGMtMS4xMSAwLTIgLjktMiAyaDJWM3ptNCAxMmgtMnYyaDJ2LTJ6bTYtMTJ2MmgyYzAtMS4xLS45LTItMi0yem0tNiAwaC0ydjJoMlYzek05IDE3di0ySDdjMCAxLjEuODkgMiAyIDJ6bTEwLTRoMnYtMmgtMnYyem0wLTRoMlY3aC0ydjJ6bTAgOGMxLjEgMCAyLS45IDItMmgtMnYyek01IDdIM3YxMmMwIDEuMS44OSAyIDIgMmgxMnYtMkg1Vjd6bTEwLTJoMlYzaC0ydjJ6bTAgMTJoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpcC10by1mcm9udD48cGF0aCBkPVxcXCJNMyAxM2gydi0ySDN2MnptMCA0aDJ2LTJIM3Yyem0yIDR2LTJIM2MwIDEuMS44OSAyIDIgMnpNMyA5aDJWN0gzdjJ6bTEyIDEyaDJ2LTJoLTJ2MnptNC0xOEg5Yy0xLjExIDAtMiAuOS0yIDJ2MTBjMCAxLjEuODkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxMkg5VjVoMTB2MTB6bS04IDZoMnYtMmgtMnYyem0tNCAwaDJ2LTJIN3YyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9sZGVyPjxwYXRoIGQ9XFxcIk0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbGRlci1vcGVuPjxwYXRoIGQ9XFxcIk0yMCA2aC04bC0yLTJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnptMCAxMkg0VjhoMTZ2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb2xkZXItc2hhcmVkPjxwYXRoIGQ9XFxcIk0yMCA2aC04bC0yLTJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnptLTUgM2MxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTQgOGgtOHYtMWMwLTEuMzMgMi42Ny0yIDQtMnM0IC42NyA0IDJ2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbnQtZG93bmxvYWQ+PHBhdGggZD1cXFwiTTkuOTMgMTMuNWg0LjE0TDEyIDcuOTh6TTIwIDJINGMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNC4wNSAxNi41bC0xLjE0LTNIOS4xN2wtMS4xMiAzSDUuOTZsNS4xMS0xM2gxLjg2bDUuMTEgMTNoLTIuMDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb3J3YXJkPjxwYXRoIGQ9XFxcIk0xMiA4VjRsOCA4LTggOHYtNEg0Vjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mdWxsc2NyZWVuPjxwYXRoIGQ9XFxcIk03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZnVsbHNjcmVlbi1leGl0PjxwYXRoIGQ9XFxcIk01IDE2aDN2M2gydi01SDV2MnptMy04SDV2Mmg1VjVIOHYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjVoLTJ2NWg1VjhoLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1nLXRyYW5zbGF0ZT48cGF0aCBkPVxcXCJNMjAgNWgtOS4xMkwxMCAySDRjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoN2wxIDNoOGMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yek03LjE3IDE0LjU5Yy0yLjI1IDAtNC4wOS0xLjgzLTQuMDktNC4wOXMxLjgzLTQuMDkgNC4wOS00LjA5YzEuMDQgMCAxLjk5LjM3IDIuNzQgMS4wN2wuMDcuMDYtMS4yMyAxLjE4LS4wNi0uMDVjLS4yOS0uMjctLjc4LS41OS0xLjUyLS41OS0xLjMxIDAtMi4zOCAxLjA5LTIuMzggMi40MnMxLjA3IDIuNDIgMi4zOCAyLjQyYzEuMzcgMCAxLjk2LS44NyAyLjEyLTEuNDZINy4wOFY5LjkxaDMuOTVsLjAxLjA3Yy4wNC4yMS4wNS40LjA1LjYxIDAgMi4zNS0xLjYxIDQtMy45MiA0em02LjAzLTEuNzFjLjMzLjYuNzQgMS4xOCAxLjE5IDEuN2wtLjU0LjUzLS42NS0yLjIzem0uNzctLjc2aC0uOTlsLS4zMS0xLjA0aDMuOTlzLS4zNCAxLjMxLTEuNTYgMi43NGMtLjUyLS42Mi0uODktMS4yMy0xLjEzLTEuN3pNMjEgMjBjMCAuNTUtLjQ1IDEtMSAxaC03bDItMi0uODEtMi43Ny45Mi0uOTJMMTcuNzkgMThsLjczLS43My0yLjcxLTIuNjhjLjktMS4wMyAxLjYtMi4yNSAxLjkyLTMuNTFIMTl2LTEuMDRoLTMuNjRWOWgtMS4wNHYxLjA0aC0xLjk2TDExLjE4IDZIMjBjLjU1IDAgMSAuNDUgMSAxdjEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2F2ZWw+PHBhdGggZD1cXFwiTTEgMjFoMTJ2Mkgxek01LjI0NSA4LjA3bDIuODMtMi44MjcgMTQuMTQgMTQuMTQyLTIuODI4IDIuODI4ek0xMi4zMTcgMWw1LjY1NyA1LjY1Ni0yLjgzIDIuODMtNS42NTQtNS42NnpNMy44MjUgOS40ODVsNS42NTcgNS42NTctMi44MjggMi44MjgtNS42NTctNS42NTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1nZXN0dXJlPjxwYXRoIGQ9XFxcIk00LjU5IDYuODljLjctLjcxIDEuNC0xLjM1IDEuNzEtMS4yMi41LjIgMCAxLjAzLS4zIDEuNTItLjI1LjQyLTIuODYgMy44OS0yLjg2IDYuMzEgMCAxLjI4LjQ4IDIuMzQgMS4zNCAyLjk4Ljc1LjU2IDEuNzQuNzMgMi42NC40NiAxLjA3LS4zMSAxLjk1LTEuNCAzLjA2LTIuNzcgMS4yMS0xLjQ5IDIuODMtMy40NCA0LjA4LTMuNDQgMS42MyAwIDEuNjUgMS4wMSAxLjc2IDEuNzktMy43OC42NC01LjM4IDMuNjctNS4zOCA1LjM3IDAgMS43IDEuNDQgMy4wOSAzLjIxIDMuMDkgMS42MyAwIDQuMjktMS4zMyA0LjY5LTYuMUgyMXYtMi41aC0yLjQ3Yy0uMTUtMS42NS0xLjA5LTQuMi00LjAzLTQuMi0yLjI1IDAtNC4xOCAxLjkxLTQuOTQgMi44NC0uNTguNzMtMi4wNiAyLjQ4LTIuMjkgMi43Mi0uMjUuMy0uNjguODQtMS4xMS44NC0uNDUgMC0uNzItLjgzLS4zNi0xLjkyLjM1LTEuMDkgMS40LTIuODYgMS44NS0zLjUyLjc4LTEuMTQgMS4zLTEuOTIgMS4zLTMuMjhDOC45NSAzLjY5IDcuMzEgMyA2LjQ0IDMgNS4xMiAzIDMuOTcgNCAzLjcyIDQuMjVjLS4zNi4zNi0uNjYuNjYtLjg4LjkzbDEuNzUgMS43MXptOS4yOSAxMS42NmMtLjMxIDAtLjc0LS4yNi0uNzQtLjcyIDAtLjYuNzMtMi4yIDIuODctMi43Ni0uMyAyLjY5LTEuNDMgMy40OC0yLjEzIDMuNDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1nZXQtYXBwPjxwYXRoIGQ9XFxcIk0xOSA5aC00VjNIOXY2SDVsNyA3IDctN3pNNSAxOHYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1naWY+PHBhdGggZD1cXFwiTTExLjUgOUgxM3Y2aC0xLjV6TTkgOUg2Yy0uNiAwLTEgLjUtMSAxdjRjMCAuNS40IDEgMSAxaDNjLjYgMCAxLS41IDEtMXYtMkg4LjV2MS41aC0ydi0zSDEwVjEwYzAtLjUtLjQtMS0xLTF6bTEwIDEuNVY5aC00LjV2NkgxNnYtMmgydi0xLjVoLTJ2LTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ncmFkZT48cGF0aCBkPVxcXCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ncm91cC13b3JrPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek04IDE3LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41ek05LjUgOGMwLTEuMzggMS4xMi0yLjUgMi41LTIuNXMyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjVTOS41IDkuMzggOS41IDh6bTYuNSA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGVscD48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxN2gtMnYtMmgydjJ6bTIuMDctNy43NWwtLjkuOTJDMTMuNDUgMTIuOSAxMyAxMy41IDEzIDE1aC0ydi0uNWMwLTEuMS40NS0yLjEgMS4xNy0yLjgzbDEuMjQtMS4yNmMuMzctLjM2LjU5LS44Ni41OS0xLjQxIDAtMS4xLS45LTItMi0ycy0yIC45LTIgMkg4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDRjMCAuODgtLjM2IDEuNjgtLjkzIDIuMjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1oZWxwLW91dGxpbmU+PHBhdGggZD1cXFwiTTExIDE4aDJ2LTJoLTJ2MnptMS0xNkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTAtMTRjLTIuMjEgMC00IDEuNzktNCA0aDJjMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIDItMyAxLjc1LTMgNWgyYzAtMi4yNSAzLTIuNSAzLTUgMC0yLjIxLTEuNzktNC00LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1oaWdobGlnaHQtb2ZmPjxwYXRoIGQ9XFxcIk0xNC41OSA4TDEyIDEwLjU5IDkuNDEgOCA4IDkuNDEgMTAuNTkgMTIgOCAxNC41OSA5LjQxIDE2IDEyIDEzLjQxIDE0LjU5IDE2IDE2IDE0LjU5IDEzLjQxIDEyIDE2IDkuNDEgMTQuNTkgOHpNMTIgMkM2LjQ3IDIgMiA2LjQ3IDIgMTJzNC40NyAxMCAxMCAxMCAxMC00LjQ3IDEwLTEwUzE3LjUzIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1oaXN0b3J5PjxwYXRoIGQ9XFxcIk0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob21lPjxwYXRoIGQ9XFxcIk0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDMgMiAxMmgzdjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob3VyZ2xhc3MtZW1wdHk+PHBhdGggZD1cXFwiTTYgMnY2aC4wMUw2IDguMDEgMTAgMTJsLTQgNCAuMDEuMDFINlYyMmgxMnYtNS45OWgtLjAxTDE4IDE2bC00LTQgNC0zLjk5LS4wMS0uMDFIMThWMkg2em0xMCAxNC41VjIwSDh2LTMuNWw0LTQgNCA0em0tNC01bC00LTRWNGg4djMuNWwtNCA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aG91cmdsYXNzLWZ1bGw+PHBhdGggZD1cXFwiTTYgMnY2aC4wMUw2IDguMDEgMTAgMTJsLTQgNCAuMDEuMDFINlYyMmgxMnYtNS45OWgtLjAxTDE4IDE2bC00LTQgNC0zLjk5LS4wMS0uMDFIMThWMkg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aHR0cD48cGF0aCBkPVxcXCJNNC41IDExaC0yVjlIMXY2aDEuNXYtMi41aDJWMTVINlY5SDQuNXYyem0yLjUtLjVoMS41VjE1SDEwdi00LjVoMS41VjlIN3YxLjV6bTUuNSAwSDE0VjE1aDEuNXYtNC41SDE3VjloLTQuNXYxLjV6bTktMS41SDE4djZoMS41di0yaDJjLjggMCAxLjUtLjcgMS41LTEuNXYtMWMwLS44LS43LTEuNS0xLjUtMS41em0wIDIuNWgtMnYtMWgydjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1odHRwcz48cGF0aCBkPVxcXCJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0tNiA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptMy4xLTlIOC45VjZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWltcG9ydGFudC1kZXZpY2VzPjxwYXRoIGQ9XFxcIk0yMyAxMS4wMUwxOCAxMWMtLjU1IDAtMSAuNDUtMSAxdjljMCAuNTUuNDUgMSAxIDFoNWMuNTUgMCAxLS40NSAxLTF2LTljMC0uNTUtLjQ1LS45OS0xLS45OXpNMjMgMjBoLTV2LTdoNXY3ek0yMCAySDJDLjg5IDIgMCAyLjg5IDAgNHYxMmMwIDEuMS44OSAyIDIgMmg3djJIN3YyaDh2LTJoLTJ2LTJoMnYtMkgyVjRoMTh2NWgyVjRjMC0xLjExLS45LTItMi0yem0tOC4wMyA3TDExIDZsLS45NyAzSDdsMi40NyAxLjc2LS45NCAyLjkxIDIuNDctMS44IDIuNDcgMS44LS45NC0yLjkxTDE1IDloLTMuMDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbmJveD48cGF0aCBkPVxcXCJNMTkgM0g0Ljk5Yy0xLjExIDAtMS45OC44OS0xLjk4IDJMMyAxOWMwIDEuMS44OCAyIDEuOTkgMkgxOWMxLjEgMCAyLS45IDItMlY1YzAtMS4xMS0uOS0yLTItMnptMCAxMmgtNGMwIDEuNjYtMS4zNSAzLTMgM3MtMy0xLjM0LTMtM0g0Ljk5VjVIMTl2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbmRldGVybWluYXRlLWNoZWNrLWJveD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0yIDEwSDd2LTJoMTB2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluZm8+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTZoMnY2em0wLThoLTJWN2gydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbmZvLW91dGxpbmU+PHBhdGggZD1cXFwiTTExIDE3aDJ2LTZoLTJ2NnptMS0xNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6TTExIDloMlY3aC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbnB1dD48cGF0aCBkPVxcXCJNMjEgMy4wMUgzYy0xLjEgMC0yIC45LTIgMlY5aDJWNC45OWgxOHYxNC4wM0gzVjE1SDF2NC4wMWMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OHYtMTRjMC0xLjExLS45LTItMi0yek0xMSAxNmw0LTQtNC00djNIMXYyaDEwdjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbnZlcnQtY29sb3JzPjxwYXRoIGQ9XFxcIk0xNy42NiA3LjkzTDEyIDIuMjcgNi4zNCA3LjkzYy0zLjEyIDMuMTItMy4xMiA4LjE5IDAgMTEuMzFDNy45IDIwLjggOS45NSAyMS41OCAxMiAyMS41OGMyLjA1IDAgNC4xLS43OCA1LjY2LTIuMzQgMy4xMi0zLjEyIDMuMTItOC4xOSAwLTExLjMxek0xMiAxOS41OWMtMS42IDAtMy4xMS0uNjItNC4yNC0xLjc2QzYuNjIgMTYuNjkgNiAxNS4xOSA2IDEzLjU5cy42Mi0zLjExIDEuNzYtNC4yNEwxMiA1LjF2MTQuNDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYWJlbD48cGF0aCBkPVxcXCJNMTcuNjMgNS44NEMxNy4yNyA1LjMzIDE2LjY3IDUgMTYgNUw1IDUuMDFDMy45IDUuMDEgMyA1LjkgMyA3djEwYzAgMS4xLjkgMS45OSAyIDEuOTlMMTYgMTljLjY3IDAgMS4yNy0uMzMgMS42My0uODRMMjIgMTJsLTQuMzctNi4xNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhYmVsLW91dGxpbmU+PHBhdGggZD1cXFwiTTE3LjYzIDUuODRDMTcuMjcgNS4zMyAxNi42NyA1IDE2IDVMNSA1LjAxQzMuOSA1LjAxIDMgNS45IDMgN3YxMGMwIDEuMS45IDEuOTkgMiAxLjk5TDE2IDE5Yy42NyAwIDEuMjctLjMzIDEuNjMtLjg0TDIyIDEybC00LjM3LTYuMTZ6TTE2IDE3SDVWN2gxMWwzLjU1IDVMMTYgMTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYW5ndWFnZT48cGF0aCBkPVxcXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNi45MyA2aC0yLjk1Yy0uMzItMS4yNS0uNzgtMi40NS0xLjM4LTMuNTYgMS44NC42MyAzLjM3IDEuOTEgNC4zMyAzLjU2ek0xMiA0LjA0Yy44MyAxLjIgMS40OCAyLjUzIDEuOTEgMy45NmgtMy44MmMuNDMtMS40MyAxLjA4LTIuNzYgMS45MS0zLjk2ek00LjI2IDE0QzQuMSAxMy4zNiA0IDEyLjY5IDQgMTJzLjEtMS4zNi4yNi0yaDMuMzhjLS4wOC42Ni0uMTQgMS4zMi0uMTQgMiAwIC42OC4wNiAxLjM0LjE0IDJINC4yNnptLjgyIDJoMi45NWMuMzIgMS4yNS43OCAyLjQ1IDEuMzggMy41Ni0xLjg0LS42My0zLjM3LTEuOS00LjMzLTMuNTZ6bTIuOTUtOEg1LjA4Yy45Ni0xLjY2IDIuNDktMi45MyA0LjMzLTMuNTZDOC44MSA1LjU1IDguMzUgNi43NSA4LjAzIDh6TTEyIDE5Ljk2Yy0uODMtMS4yLTEuNDgtMi41My0xLjkxLTMuOTZoMy44MmMtLjQzIDEuNDMtMS4wOCAyLjc2LTEuOTEgMy45NnpNMTQuMzQgMTRIOS42NmMtLjA5LS42Ni0uMTYtMS4zMi0uMTYtMiAwLS42OC4wNy0xLjM1LjE2LTJoNC42OGMuMDkuNjUuMTYgMS4zMi4xNiAyIDAgLjY4LS4wNyAxLjM0LS4xNiAyem0uMjUgNS41NmMuNi0xLjExIDEuMDYtMi4zMSAxLjM4LTMuNTZoMi45NWMtLjk2IDEuNjUtMi40OSAyLjkzLTQuMzMgMy41NnpNMTYuMzYgMTRjLjA4LS42Ni4xNC0xLjMyLjE0LTIgMC0uNjgtLjA2LTEuMzQtLjE0LTJoMy4zOGMuMTYuNjQuMjYgMS4zMS4yNiAycy0uMSAxLjM2LS4yNiAyaC0zLjM4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFzdC1wYWdlPjxwYXRoIGQ9XFxcIk01LjU5IDcuNDFMMTAuMTggMTJsLTQuNTkgNC41OUw3IDE4bDYtNi02LTZ6TTE2IDZoMnYxMmgtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhdW5jaD48cGF0aCBkPVxcXCJNMTkgMTlINVY1aDdWM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJ2N3pNMTQgM3YyaDMuNTlsLTkuODMgOS44MyAxLjQxIDEuNDFMMTkgNi40MVYxMGgyVjNoLTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saWdodGJ1bGItb3V0bGluZT48cGF0aCBkPVxcXCJNOSAyMWMwIC41NS40NSAxIDEgMWg0Yy41NSAwIDEtLjQ1IDEtMXYtMUg5djF6bTMtMTlDOC4xNCAyIDUgNS4xNCA1IDljMCAyLjM4IDEuMTkgNC40NyAzIDUuNzRWMTdjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTF2LTIuMjZjMS44MS0xLjI3IDMtMy4zNiAzLTUuNzQgMC0zLjg2LTMuMTQtNy03LTd6bTIuODUgMTEuMWwtLjg1LjZWMTZoLTR2LTIuM2wtLjg1LS42QzcuOCAxMi4xNiA3IDEwLjYzIDcgOWMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAgMS42My0uOCAzLjE2LTIuMTUgNC4xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGluZS1zdHlsZT48cGF0aCBkPVxcXCJNMyAxNmg1di0ySDN2MnptNi41IDBoNXYtMmgtNXYyem02LjUgMGg1di0yaC01djJ6TTMgMjBoMnYtMkgzdjJ6bTQgMGgydi0ySDd2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpNMyAxMmg4di0ySDN2MnptMTAgMGg4di0yaC04djJ6TTMgNHY0aDE4VjRIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpbmUtd2VpZ2h0PjxwYXRoIGQ9XFxcIk0zIDE3aDE4di0ySDN2MnptMCAzaDE4di0xSDN2MXptMC03aDE4di0zSDN2M3ptMC05djRoMThWNEgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGluaz48cGF0aCBkPVxcXCJNMy45IDEyYzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xaDRWN0g3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1aDR2LTEuOUg3Yy0xLjcxIDAtMy4xLTEuMzktMy4xLTMuMXpNOCAxM2g4di0ySDh2MnptOS02aC00djEuOWg0YzEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xcy0xLjM5IDMuMS0zLjEgMy4xaC00VjE3aDRjMi43NiAwIDUtMi4yNCA1LTVzLTIuMjQtNS01LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saXN0PjxwYXRoIGQ9XFxcIk0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTAtOGgyVjdIM3Yyem00IDRoMTR2LTJIN3Yyem0wIDRoMTR2LTJIN3Yyek03IDd2MmgxNFY3SDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NrPjxwYXRoIGQ9XFxcIk0xOCA4aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS02IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0zLjEtOUg4LjlWNmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jay1vcGVuPjxwYXRoIGQ9XFxcIk0xMiAxN2MxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTYtOWgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZoMS45YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptMCAxMkg2VjEwaDEydjEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jay1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMiAxN2MxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTYtOWgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yek04LjkgNmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMXMzLjEgMS4zOSAzLjEgMy4xdjJIOC45VjZ6TTE4IDIwSDZWMTBoMTJ2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb3ctcHJpb3JpdHk+PHBhdGggZD1cXFwiTTE0IDVoOHYyaC04em0wIDUuNWg4djJoLTh6bTAgNS41aDh2MmgtOHpNMiAxMS41QzIgMTUuMDggNC45MiAxOCA4LjUgMThIOXYybDMtMy0zLTN2MmgtLjVDNi4wMiAxNiA0IDEzLjk4IDQgMTEuNVM2LjAyIDcgOC41IDdIMTJWNUg4LjVDNC45MiA1IDIgNy45MiAyIDExLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb3lhbHR5PjxwYXRoIGQ9XFxcIk0yMS40MSAxMS41OGwtOS05QzEyLjA1IDIuMjIgMTEuNTUgMiAxMSAySDRjLTEuMSAwLTIgLjktMiAydjdjMCAuNTUuMjIgMS4wNS41OSAxLjQybDkgOWMuMzYuMzYuODYuNTggMS40MS41OC41NSAwIDEuMDUtLjIyIDEuNDEtLjU5bDctN2MuMzctLjM2LjU5LS44Ni41OS0xLjQxIDAtLjU1LS4yMy0xLjA2LS41OS0xLjQyek01LjUgN0M0LjY3IDcgNCA2LjMzIDQgNS41UzQuNjcgNCA1LjUgNCA3IDQuNjcgNyA1LjUgNi4zMyA3IDUuNSA3em0xMS43NyA4LjI3TDEzIDE5LjU0bC00LjI3LTQuMjdDOC4yOCAxNC44MSA4IDE0LjE5IDggMTMuNWMwLTEuMzggMS4xMi0yLjUgMi41LTIuNS42OSAwIDEuMzIuMjggMS43Ny43NGwuNzMuNzIuNzMtLjczYy40NS0uNDUgMS4wOC0uNzMgMS43Ny0uNzMgMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjUgMCAuNjktLjI4IDEuMzItLjczIDEuNzd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYWlsPjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1hcmt1bnJlYWQ+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWFya3VucmVhZC1tYWlsYm94PjxwYXRoIGQ9XFxcIk0yMCA2SDEwdjZIOFY0aDZWMEg2djZINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWVudT48cGF0aCBkPVxcXCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vcmUtaG9yaXo+PHBhdGggZD1cXFwiTTYgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLTYgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3JlLXZlcnQ+PHBhdGggZD1cXFwiTTEyIDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW90b3JjeWNsZT48cGF0aCBkPVxcXCJNMTkuNDQgOS4wM0wxNS40MSA1SDExdjJoMy41OWwyIDJINWMtMi44IDAtNSAyLjItNSA1czIuMiA1IDUgNWMyLjQ2IDAgNC40NS0xLjY5IDQuOS00aDEuNjVsMi43Ny0yLjc3Yy0uMjEuNTQtLjMyIDEuMTQtLjMyIDEuNzcgMCAyLjggMi4yIDUgNSA1czUtMi4yIDUtNWMwLTIuNjUtMS45Ny00Ljc3LTQuNTYtNC45N3pNNy44MiAxNUM3LjQgMTYuMTUgNi4yOCAxNyA1IDE3Yy0xLjYzIDAtMy0xLjM3LTMtM3MxLjM3LTMgMy0zYzEuMjggMCAyLjQuODUgMi44MiAySDV2MmgyLjgyek0xOSAxN2MtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3ZlLXRvLWluYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDQuOTljLTEuMTEgMC0xLjk4LjktMS45OCAyTDMgMTljMCAxLjEuODggMiAxLjk5IDJIMTljMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxMmgtNGMwIDEuNjYtMS4zNSAzLTMgM3MtMy0xLjM0LTMtM0g0Ljk5VjVIMTl2MTB6bS0zLTVoLTJWN2gtNHYzSDhsNCA0IDQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW5leHQtd2Vlaz48cGF0aCBkPVxcXCJNMjAgN2gtNFY1YzAtLjU1LS4yMi0xLjA1LS41OS0xLjQxQzE1LjA1IDMuMjIgMTQuNTUgMyAxNCAzaC00Yy0xLjEgMC0yIC45LTIgMnYySDRjLTEuMSAwLTIgLjktMiAydjExYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOWMwLTEuMS0uOS0yLTItMnpNMTAgNWg0djJoLTRWNXptMSAxMy41bC0xLTEgMy0zLTMtMyAxLTEgNCA0LTQgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW5vdGUtYWRkPjxwYXRoIGQ9XFxcIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bTIgMTRoLTN2M2gtMnYtM0g4di0yaDN2LTNoMnYzaDN2MnptLTMtN1YzLjVMMTguNSA5SDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b2ZmbGluZS1waW4+PHBhdGggZD1cXFwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE3LjUgMiAxMiAyem01IDE2SDd2LTJoMTB2MnptLTYuNy00TDcgMTAuN2wxLjQtMS40IDEuOSAxLjkgNS4zLTUuM0wxNyA3LjMgMTAuMyAxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wYWNpdHk+PHBhdGggZD1cXFwiTTE3LjY2IDhMMTIgMi4zNSA2LjM0IDhDNC43OCA5LjU2IDQgMTEuNjQgNCAxMy42NHMuNzggNC4xMSAyLjM0IDUuNjcgMy42MSAyLjM1IDUuNjYgMi4zNSA0LjEtLjc5IDUuNjYtMi4zNVMyMCAxNS42NCAyMCAxMy42NCAxOS4yMiA5LjU2IDE3LjY2IDh6TTYgMTRjLjAxLTIgLjYyLTMuMjcgMS43Ni00LjRMMTIgNS4yN2w0LjI0IDQuMzhDMTcuMzggMTAuNzcgMTcuOTkgMTIgMTggMTRINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wZW4taW4tYnJvd3Nlcj48cGF0aCBkPVxcXCJNMTkgNEg1Yy0xLjExIDAtMiAuOS0yIDJ2MTJjMCAxLjEuODkgMiAyIDJoNHYtMkg1VjhoMTR2MTBoLTR2Mmg0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjg5LTItMi0yem0tNyA2bC00IDRoM3Y2aDJ2LTZoM2wtNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3Blbi1pbi1uZXc+PHBhdGggZD1cXFwiTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3Blbi13aXRoPjxwYXRoIGQ9XFxcIk0xMCA5aDRWNmgzbC01LTUtNSA1aDN2M3ptLTEgMUg2VjdsLTUgNSA1IDV2LTNoM3YtNHptMTQgMmwtNS01djNoLTN2NGgzdjNsNS01em0tOSAzaC00djNIN2w1IDUgNS01aC0zdi0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGFnZXZpZXc+PHBhdGggZD1cXFwiTTExLjUgOUMxMC4xMiA5IDkgMTAuMTIgOSAxMS41czEuMTIgMi41IDIuNSAyLjUgMi41LTEuMTIgMi41LTIuNVMxMi44OCA5IDExLjUgOXpNMjAgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS0zLjIxIDE0LjIxbC0yLjkxLTIuOTFjLS42OS40NC0xLjUxLjctMi4zOS43QzkuMDEgMTYgNyAxMy45OSA3IDExLjVTOS4wMSA3IDExLjUgNyAxNiA5LjAxIDE2IDExLjVjMCAuODgtLjI2IDEuNjktLjcgMi4zOWwyLjkxIDIuOS0xLjQyIDEuNDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wYW4tdG9vbD48cGF0aCBkPVxcXCJNMjMgNS41VjIwYzAgMi4yLTEuOCA0LTQgNGgtNy4zYy0xLjA4IDAtMi4xLS40My0yLjg1LTEuMTlMMSAxNC44M3MxLjI2LTEuMjMgMS4zLTEuMjVjLjIyLS4xOS40OS0uMjkuNzktLjI5LjIyIDAgLjQyLjA2LjYuMTYuMDQuMDEgNC4zMSAyLjQ2IDQuMzEgMi40NlY0YzAtLjgzLjY3LTEuNSAxLjUtMS41UzExIDMuMTcgMTEgNHY3aDFWMS41YzAtLjgzLjY3LTEuNSAxLjUtMS41UzE1IC42NyAxNSAxLjVWMTFoMVYyLjVjMC0uODMuNjctMS41IDEuNS0xLjVzMS41LjY3IDEuNSAxLjVWMTFoMVY1LjVjMC0uODMuNjctMS41IDEuNS0xLjVzMS41LjY3IDEuNSAxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wYXltZW50PjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZjMC0xLjExLS44OS0yLTItMnptMCAxNEg0di02aDE2djZ6bTAtMTBINFY2aDE2djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWNhbWVyYS1taWM+PHBhdGggZD1cXFwiTTIwIDVoLTMuMTdMMTUgM0g5TDcuMTcgNUg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDd2LTIuMDljLTIuODMtLjQ4LTUtMi45NC01LTUuOTFoMmMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00aDJjMCAyLjk3LTIuMTcgNS40My01IDUuOTFWMjFoN2MxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tNiA4YzAgMS4xLS45IDItMiAycy0yLS45LTItMlY5YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tY29udGFjdC1jYWxlbmRhcj48cGF0aCBkPVxcXCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTYgMTJINnYtMWMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tZGF0YS1zZXR0aW5nPjxwYXRoIGQ9XFxcIk0xOC45OSAxMS41Yy4zNCAwIC42Ny4wMyAxIC4wN0wyMCAwIDAgMjBoMTEuNTZjLS4wNC0uMzMtLjA3LS42Ni0uMDctMSAwLTQuMTQgMy4zNi03LjUgNy41LTcuNXptMy43MSA3Ljk5Yy4wMi0uMTYuMDQtLjMyLjA0LS40OSAwLS4xNy0uMDEtLjMzLS4wNC0uNDlsMS4wNi0uODNjLjA5LS4wOC4xMi0uMjEuMDYtLjMybC0xLTEuNzNjLS4wNi0uMTEtLjE5LS4xNS0uMzEtLjExbC0xLjI0LjVjLS4yNi0uMi0uNTQtLjM3LS44NS0uNDlsLS4xOS0xLjMyYy0uMDEtLjEyLS4xMi0uMjEtLjI0LS4yMWgtMmMtLjEyIDAtLjIzLjA5LS4yNS4yMWwtLjE5IDEuMzJjLS4zLjEzLS41OS4yOS0uODUuNDlsLTEuMjQtLjVjLS4xMS0uMDQtLjI0IDAtLjMxLjExbC0xIDEuNzNjLS4wNi4xMS0uMDQuMjQuMDYuMzJsMS4wNi44M2MtLjAyLjE2LS4wMy4zMi0uMDMuNDkgMCAuMTcuMDEuMzMuMDMuNDlsLTEuMDYuODNjLS4wOS4wOC0uMTIuMjEtLjA2LjMybDEgMS43M2MuMDYuMTEuMTkuMTUuMzEuMTFsMS4yNC0uNWMuMjYuMi41NC4zNy44NS40OWwuMTkgMS4zMmMuMDIuMTIuMTIuMjEuMjUuMjFoMmMuMTIgMCAuMjMtLjA5LjI1LS4yMWwuMTktMS4zMmMuMy0uMTMuNTktLjI5Ljg0LS40OWwxLjI1LjVjLjExLjA0LjI0IDAgLjMxLS4xMWwxLTEuNzNjLjA2LS4xMS4wMy0uMjQtLjA2LS4zMmwtMS4wNy0uODN6bS0zLjcxIDEuMDFjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1kZXZpY2UtaW5mb3JtYXRpb24+PHBhdGggZD1cXFwiTTEzIDdoLTJ2MmgyVjd6bTAgNGgtMnY2aDJ2LTZ6bTQtOS45OUw3IDFjLTEuMSAwLTIgLjktMiAydjE4YzAgMS4xLjkgMiAyIDJoMTBjMS4xIDAgMi0uOSAyLTJWM2MwLTEuMS0uOS0xLjk5LTItMS45OXpNMTcgMTlIN1Y1aDEwdjE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1pZGVudGl0eT48cGF0aCBkPVxcXCJNMTIgNS45YzEuMTYgMCAyLjEuOTQgMi4xIDIuMXMtLjk0IDIuMS0yLjEgMi4xUzkuOSA5LjE2IDkuOSA4cy45NC0yLjEgMi4xLTIuMW0wIDljMi45NyAwIDYuMSAxLjQ2IDYuMSAyLjF2MS4xSDUuOVYxN2MwLS42NCAzLjEzLTIuMSA2LjEtMi4xTTEyIDRDOS43OSA0IDggNS43OSA4IDhzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgOWMtMi42NyAwLTggMS4zNC04IDR2M2gxNnYtM2MwLTIuNjYtNS4zMy00LTgtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tbWVkaWE+PHBhdGggZD1cXFwiTTIgNkgwdjVoLjAxTDAgMjBjMCAxLjEuOSAyIDIgMmgxOHYtMkgyVjZ6bTIwLTJoLThsLTItMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMTZjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yek03IDE1bDQuNS02IDMuNSA0LjUxIDIuNS0zLjAxTDIxIDE1SDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLXBob25lLW1zZz48cGF0aCBkPVxcXCJNMjAgMTUuNWMtMS4yNSAwLTIuNDUtLjItMy41Ny0uNTctLjM1LS4xMS0uNzQtLjAzLTEuMDIuMjRsLTIuMiAyLjJjLTIuODMtMS40NC01LjE1LTMuNzUtNi41OS02LjU4bDIuMi0yLjIxYy4yOC0uMjcuMzYtLjY2LjI1LTEuMDFDOC43IDYuNDUgOC41IDUuMjUgOC41IDRjMC0uNTUtLjQ1LTEtMS0xSDRjLS41NSAwLTEgLjQ1LTEgMSAwIDkuMzkgNy42MSAxNyAxNyAxNyAuNTUgMCAxLS40NSAxLTF2LTMuNWMwLS41NS0uNDUtMS0xLTF6TTEyIDN2MTBsMy0zaDZWM2gtOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tc2Nhbi13aWZpPjxwYXRoIGQ9XFxcIk0xMiAzQzYuOTUgMyAzLjE1IDQuODUgMCA3LjIzTDEyIDIyIDI0IDcuMjVDMjAuODUgNC44NyAxNy4wNSAzIDEyIDN6bTEgMTNoLTJ2LTZoMnY2em0tMi04VjZoMnYyaC0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGV0cz48Y2lyY2xlIGN4PTQuNSBjeT05LjUgcj0yLjU+PC9jaXJjbGU+PGNpcmNsZSBjeD05IGN5PTUuNSByPTIuNT48L2NpcmNsZT48Y2lyY2xlIGN4PTE1IGN5PTUuNSByPTIuNT48L2NpcmNsZT48Y2lyY2xlIGN4PTE5LjUgY3k9OS41IHI9Mi41PjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNy4zNCAxNC44NmMtLjg3LTEuMDItMS42LTEuODktMi40OC0yLjkxLS40Ni0uNTQtMS4wNS0xLjA4LTEuNzUtMS4zMi0uMTEtLjA0LS4yMi0uMDctLjMzLS4wOS0uMjUtLjA0LS41Mi0uMDQtLjc4LS4wNHMtLjUzIDAtLjc5LjA1Yy0uMTEuMDItLjIyLjA1LS4zMy4wOS0uNy4yNC0xLjI4Ljc4LTEuNzUgMS4zMi0uODcgMS4wMi0xLjYgMS44OS0yLjQ4IDIuOTEtMS4zMSAxLjMxLTIuOTIgMi43Ni0yLjYyIDQuNzkuMjkgMS4wMiAxLjAyIDIuMDMgMi4zMyAyLjMyLjczLjE1IDMuMDYtLjQ0IDUuNTQtLjQ0aC4xOGMyLjQ4IDAgNC44MS41OCA1LjU0LjQ0IDEuMzEtLjI5IDIuMDQtMS4zMSAyLjMzLTIuMzIuMzEtMi4wNC0xLjMtMy40OS0yLjYxLTQuOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBpY3R1cmUtaW4tcGljdHVyZT48cGF0aCBkPVxcXCJNMTkgN2gtOHY2aDhWN3ptMi00SDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMS45OCAyIDEuOThoMThjMS4xIDAgMi0uODggMi0xLjk4VjVjMC0xLjEtLjktMi0yLTJ6bTAgMTYuMDFIM1Y0Ljk4aDE4djE0LjAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGljdHVyZS1pbi1waWN0dXJlLWFsdD48cGF0aCBkPVxcXCJNMTkgMTFoLTh2Nmg4di02em00IDhWNC45OEMyMyAzLjg4IDIyLjEgMyAyMSAzSDNjLTEuMSAwLTIgLjg4LTIgMS45OFYxOWMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yem0tMiAuMDJIM1Y0Ljk3aDE4djE0LjA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGxheS1mb3Itd29yaz48cGF0aCBkPVxcXCJNMTEgNXY1LjU5SDcuNWw0LjUgNC41IDQuNS00LjVIMTNWNWgtMnptLTUgOWMwIDMuMzEgMi42OSA2IDYgNnM2LTIuNjkgNi02aC0yYzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00SDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wb2x5bWVyPjxwYXRoIGQ9XFxcIk0xOSA0aC00TDcuMTEgMTYuNjMgNC41IDEyIDkgNEg1TC41IDEyIDUgMjBoNGw3Ljg5LTEyLjYzTDE5LjUgMTIgMTUgMjBoNGw0LjUtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBvd2VyLXNldHRpbmdzLW5ldz48cGF0aCBkPVxcXCJNMTMgM2gtMnYxMGgyVjN6bTQuODMgMi4xN2wtMS40MiAxLjQyQzE3Ljk5IDcuODYgMTkgOS44MSAxOSAxMmMwIDMuODctMy4xMyA3LTcgN3MtNy0zLjEzLTctN2MwLTIuMTkgMS4wMS00LjE0IDIuNTgtNS40Mkw2LjE3IDUuMTdDNC4yMyA2LjgyIDMgOS4yNiAzIDEyYzAgNC45NyA0LjAzIDkgOSA5czktNC4wMyA5LTljMC0yLjc0LTEuMjMtNS4xOC0zLjE3LTYuODN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wcmVnbmFudC13b21hbj48cGF0aCBkPVxcXCJNOSA0YzAtMS4xMS44OS0yIDItMnMyIC44OSAyIDItLjg5IDItMiAyLTItLjg5LTItMnptNyA5Yy0uMDEtMS4zNC0uODMtMi41MS0yLTMgMC0xLjY2LTEuMzQtMy0zLTNzLTMgMS4zNC0zIDN2N2gydjVoM3YtNWgzdi00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cHJpbnQ+PHBhdGggZD1cXFwiTTE5IDhINWMtMS42NiAwLTMgMS4zNC0zIDN2Nmg0djRoMTJ2LTRoNHYtNmMwLTEuNjYtMS4zNC0zLTMtM3ptLTMgMTFIOHYtNWg4djV6bTMtN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxem0tMS05SDZ2NGgxMlYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cXVlcnktYnVpbGRlcj48cGF0aCBkPVxcXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4em0uNS0xM0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cXVlc3Rpb24tYW5zd2VyPjxwYXRoIGQ9XFxcIk0yMSA2aC0ydjlINnYyYzAgLjU1LjQ1IDEgMSAxaDExbDQgNFY3YzAtLjU1LS40NS0xLTEtMXptLTQgNlYzYzAtLjU1LS40NS0xLTEtMUgzYy0uNTUgMC0xIC40NS0xIDF2MTRsNC00aDEwYy41NSAwIDEtLjQ1IDEtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJhZGlvLWJ1dHRvbi1jaGVja2VkPjxwYXRoIGQ9XFxcIk0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQ+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVjZWlwdD48cGF0aCBkPVxcXCJNMTggMTdINnYtMmgxMnYyem0wLTRINnYtMmgxMnYyem0wLTRINlY3aDEydjJ6TTMgMjJsMS41LTEuNUw2IDIybDEuNS0xLjVMOSAyMmwxLjUtMS41TDEyIDIybDEuNS0xLjVMMTUgMjJsMS41LTEuNUwxOCAyMmwxLjUtMS41TDIxIDIyVjJsLTEuNSAxLjVMMTggMmwtMS41IDEuNUwxNSAybC0xLjUgMS41TDEyIDJsLTEuNSAxLjVMOSAyIDcuNSAzLjUgNiAyIDQuNSAzLjUgMyAydjIwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVjb3JkLXZvaWNlLW92ZXI+PGNpcmNsZSBjeD05IGN5PTkgcj00PjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk05IDE1Yy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00em03Ljc2LTkuNjRsLTEuNjggMS42OWMuODQgMS4xOC44NCAyLjcxIDAgMy44OWwxLjY4IDEuNjljMi4wMi0yLjAyIDIuMDItNS4wNyAwLTcuMjd6TTIwLjA3IDJsLTEuNjMgMS42M2MyLjc3IDMuMDIgMi43NyA3LjU2IDAgMTAuNzRMMjAuMDcgMTZjMy45LTMuODkgMy45MS05Ljk1IDAtMTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWRlZW0+PHBhdGggZD1cXFwiTTIwIDZoLTIuMThjLjExLS4zMS4xOC0uNjUuMTgtMSAwLTEuNjYtMS4zNC0zLTMtMy0xLjA1IDAtMS45Ni41NC0yLjUgMS4zNWwtLjUuNjctLjUtLjY4QzEwLjk2IDIuNTQgMTAuMDUgMiA5IDIgNy4zNCAyIDYgMy4zNCA2IDVjMCAuMzUuMDcuNjkuMTggMUg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS01LTJjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXpNOSA0Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTExIDE1SDR2LTJoMTZ2MnptMC01SDRWOGg1LjA4TDcgMTAuODMgOC42MiAxMiAxMSA4Ljc2bDEtMS4zNiAxIDEuMzZMMTUuMzggMTIgMTcgMTAuODMgMTQuOTIgOEgyMHY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVkbz48cGF0aCBkPVxcXCJNMTguNCAxMC42QzE2LjU1IDguOTkgMTQuMTUgOCAxMS41IDhjLTQuNjUgMC04LjU4IDMuMDMtOS45NiA3LjIyTDMuOSAxNmMxLjA1LTMuMTkgNC4wNS01LjUgNy42LTUuNSAxLjk1IDAgMy43My43MiA1LjEyIDEuODhMMTMgMTZoOVY3bC0zLjYgMy42elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVmcmVzaD48cGF0aCBkPVxcXCJNMTcuNjUgNi4zNUMxNi4yIDQuOSAxNC4yMSA0IDEyIDRjLTQuNDIgMC03Ljk5IDMuNTgtNy45OSA4czMuNTcgOCA3Ljk5IDhjMy43MyAwIDYuODQtMi41NSA3LjczLTZoLTIuMDhjLS44MiAyLjMzLTMuMDQgNC01LjY1IDQtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNmMxLjY2IDAgMy4xNC42OSA0LjIyIDEuNzhMMTMgMTFoN1Y0bC0yLjM1IDIuMzV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmU+PHBhdGggZD1cXFwiTTE5IDEzSDV2LTJoMTR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZS1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFIN3YtMmgxMHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlLWNpcmNsZS1vdXRsaW5lPjxwYXRoIGQ9XFxcIk03IDExdjJoMTB2LTJIN3ptNS05QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZS1zaG9wcGluZy1jYXJ0PjxwYXRoIGQ9XFxcIk0yMi43MyAyMi43M0wyLjc3IDIuNzcgMiAybC0uNzMtLjczTDAgMi41NGw0LjM5IDQuMzkgMi4yMSA0LjY2LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmg3LjQ2bDEuMzggMS4zOGMtLjUuMzYtLjgzLjk1LS44MyAxLjYyIDAgMS4xLjg5IDIgMS45OSAyIC42NyAwIDEuMjYtLjMzIDEuNjItLjg0TDIxLjQ2IDI0bDEuMjctMS4yN3pNNy40MiAxNWMtLjE0IDAtLjI1LS4xMS0uMjUtLjI1bC4wMy0uMTIuOS0xLjYzaDIuMzZsMiAySDcuNDJ6bTguMTMtMmMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINi41NGw5LjAxIDl6TTcgMThjLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW9yZGVyPjxwYXRoIGQ9XFxcIk0zIDE1aDE4di0ySDN2MnptMCA0aDE4di0ySDN2MnptMC04aDE4VjlIM3Yyem0wLTZ2MmgxOFY1SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBseT48cGF0aCBkPVxcXCJNMTAgOVY1bC03IDcgNyA3di00LjFjNSAwIDguNSAxLjYgMTEgNS4xLTEtNS00LTEwLTExLTExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwbHktYWxsPjxwYXRoIGQ9XFxcIk03IDhWNWwtNyA3IDcgN3YtM2wtNC00IDQtNHptNiAxVjVsLTcgNyA3IDd2LTQuMWM1IDAgOC41IDEuNiAxMSA1LjEtMS01LTQtMTAtMTEtMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBvcnQ+PHBhdGggZD1cXFwiTTE1LjczIDNIOC4yN0wzIDguMjd2Ny40Nkw4LjI3IDIxaDcuNDZMMjEgMTUuNzNWOC4yN0wxNS43MyAzek0xMiAxNy4zYy0uNzIgMC0xLjMtLjU4LTEuMy0xLjMgMC0uNzIuNTgtMS4zIDEuMy0xLjMuNzIgMCAxLjMuNTggMS4zIDEuMyAwIC43Mi0uNTggMS4zLTEuMyAxLjN6bTEtNC4zaC0yVjdoMnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwb3J0LXByb2JsZW0+PHBhdGggZD1cXFwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlc3RvcmU+PHBhdGggZD1cXFwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlc3RvcmUtcGFnZT48cGF0aCBkPVxcXCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0tMiAxNmMtMi4wNSAwLTMuODEtMS4yNC00LjU4LTNoMS43MWMuNjMuOSAxLjY4IDEuNSAyLjg3IDEuNSAxLjkzIDAgMy41LTEuNTcgMy41LTMuNVMxMy45MyA5LjUgMTIgOS41Yy0xLjM1IDAtMi41Mi43OC0zLjEgMS45bDEuNiAxLjZoLTRWOWwxLjMgMS4zQzguNjkgOC45MiAxMC4yMyA4IDEyIDhjMi43NiAwIDUgMi4yNCA1IDVzLTIuMjQgNS01IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yb29tPjxwYXRoIGQ9XFxcIk0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6bTAgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJvdW5kZWQtY29ybmVyPjxwYXRoIGQ9XFxcIk0xOSAxOWgydjJoLTJ2LTJ6bTAtMmgydi0yaC0ydjJ6TTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMC04aDJWN0gzdjJ6bTAtNGgyVjNIM3Yyem00IDBoMlYzSDd2MnptOCAxNmgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyem0tOCAwaDJ2LTJIN3Yyem0tNCAwaDJ2LTJIM3Yyek0yMSA4YzAtMi43Ni0yLjI0LTUtNS01aC01djJoNWMxLjY1IDAgMyAxLjM1IDMgM3Y1aDJWOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJvd2luZz48cGF0aCBkPVxcXCJNOC41IDE0LjVMNCAxOWwxLjUgMS41TDkgMTdoMmwtMi41LTIuNXpNMTUgMWMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTYgMjAuMDFMMTggMjRsLTIuOTktMy4wMVYxOS41bC03LjEtNy4wOWMtLjMxLjA1LS42MS4wNy0uOTEuMDd2LTIuMTZjMS42Ni4wMyAzLjYxLS44NyA0LjY3LTIuMDRsMS40LTEuNTVjLjE5LS4yMS40My0uMzguNjktLjUuMjktLjE0LjYyLS4yMy45Ni0uMjNoLjAzQzE1Ljk5IDYuMDEgMTcgNy4wMiAxNyA4LjI2djUuNzVjMCAuODQtLjM1IDEuNjEtLjkyIDIuMTZsLTMuNTgtMy41OHYtMi4yN2MtLjYzLjUyLTEuNDMgMS4wMi0yLjI5IDEuMzlMMTYuNSAxOEgxOGwzIDMuMDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zYXZlPjxwYXRoIGQ9XFxcIk0xNyAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY3bC00LTR6bS01IDE2Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3ptMy0xMEg1VjVoMTB2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNjaGVkdWxlPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6bS41LTEzSDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZWFyY2g+PHBhdGggZD1cXFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZWxlY3QtYWxsPjxwYXRoIGQ9XFxcIk0zIDVoMlYzYy0xLjEgMC0yIC45LTIgMnptMCA4aDJ2LTJIM3Yyem00IDhoMnYtMkg3djJ6TTMgOWgyVjdIM3Yyem0xMC02aC0ydjJoMlYzem02IDB2MmgyYzAtMS4xLS45LTItMi0yek01IDIxdi0ySDNjMCAxLjEuOSAyIDIgMnptLTItNGgydi0ySDN2MnpNOSAzSDd2MmgyVjN6bTIgMThoMnYtMmgtMnYyem04LThoMnYtMmgtMnYyem0wIDhjMS4xIDAgMi0uOSAyLTJoLTJ2MnptMC0xMmgyVjdoLTJ2MnptMCA4aDJ2LTJoLTJ2MnptLTQgNGgydi0yaC0ydjJ6bTAtMTZoMlYzaC0ydjJ6TTcgMTdoMTBWN0g3djEwem0yLThoNnY2SDlWOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNlbmQ+PHBhdGggZD1cXFwiTTIuMDEgMjFMMjMgMTIgMi4wMSAzIDIgMTBsMTUgMi0xNSAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3M+PHBhdGggZD1cXFwiTTE5LjQzIDEyLjk4Yy4wNC0uMzIuMDctLjY0LjA3LS45OHMtLjAzLS42Ni0uMDctLjk4bDIuMTEtMS42NWMuMTktLjE1LjI0LS40Mi4xMi0uNjRsLTItMy40NmMtLjEyLS4yMi0uMzktLjMtLjYxLS4yMmwtMi40OSAxYy0uNTItLjQtMS4wOC0uNzMtMS42OS0uOThsLS4zOC0yLjY1QzE0LjQ2IDIuMTggMTQuMjUgMiAxNCAyaC00Yy0uMjUgMC0uNDYuMTgtLjQ5LjQybC0uMzggMi42NWMtLjYxLjI1LTEuMTcuNTktMS42OS45OGwtMi40OS0xYy0uMjMtLjA5LS40OSAwLS42MS4yMmwtMiAzLjQ2Yy0uMTMuMjItLjA3LjQ5LjEyLjY0bDIuMTEgMS42NWMtLjA0LjMyLS4wNy42NS0uMDcuOThzLjAzLjY2LjA3Ljk4bC0yLjExIDEuNjVjLS4xOS4xNS0uMjQuNDItLjEyLjY0bDIgMy40NmMuMTIuMjIuMzkuMy42MS4yMmwyLjQ5LTFjLjUyLjQgMS4wOC43MyAxLjY5Ljk4bC4zOCAyLjY1Yy4wMy4yNC4yNC40Mi40OS40Mmg0Yy4yNSAwIC40Ni0uMTguNDktLjQybC4zOC0yLjY1Yy42MS0uMjUgMS4xNy0uNTkgMS42OS0uOThsMi40OSAxYy4yMy4wOS40OSAwIC42MS0uMjJsMi0zLjQ2Yy4xMi0uMjIuMDctLjQ5LS4xMi0uNjRsLTIuMTEtMS42NXpNMTIgMTUuNWMtMS45MyAwLTMuNS0xLjU3LTMuNS0zLjVzMS41Ny0zLjUgMy41LTMuNSAzLjUgMS41NyAzLjUgMy41LTEuNTcgMy41LTMuNSAzLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1hcHBsaWNhdGlvbnM+PHBhdGggZD1cXFwiTTEyIDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNy03SDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS0xLjc1IDljMCAuMjMtLjAyLjQ2LS4wNS42OGwxLjQ4IDEuMTZjLjEzLjExLjE3LjMuMDguNDVsLTEuNCAyLjQyYy0uMDkuMTUtLjI3LjIxLS40My4xNWwtMS43NC0uN2MtLjM2LjI4LS43Ni41MS0xLjE4LjY5bC0uMjYgMS44NWMtLjAzLjE3LS4xOC4zLS4zNS4zaC0yLjhjLS4xNyAwLS4zMi0uMTMtLjM1LS4yOWwtLjI2LTEuODVjLS40My0uMTgtLjgyLS40MS0xLjE4LS42OWwtMS43NC43Yy0uMTYuMDYtLjM0IDAtLjQzLS4xNWwtMS40LTIuNDJjLS4wOS0uMTUtLjA1LS4zNC4wOC0uNDVsMS40OC0xLjE2Yy0uMDMtLjIzLS4wNS0uNDYtLjA1LS42OSAwLS4yMy4wMi0uNDYuMDUtLjY4bC0xLjQ4LTEuMTZjLS4xMy0uMTEtLjE3LS4zLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1iYWNrdXAtcmVzdG9yZT48cGF0aCBkPVxcXCJNMTQgMTJjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yem0tMi05Yy00Ljk3IDAtOSA0LjAzLTkgOUgwbDQgNCA0LTRINWMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuNTEgMC0yLjkxLS40OS00LjA2LTEuM2wtMS40MiAxLjQ0QzguMDQgMjAuMyA5Ljk0IDIxIDEyIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYmx1ZXRvb3RoPjxwYXRoIGQ9XFxcIk0xMSAyNGgydi0yaC0ydjJ6bS00IDBoMnYtMkg3djJ6bTggMGgydi0yaC0ydjJ6bTIuNzEtMTguMjlMMTIgMGgtMXY3LjU5TDYuNDEgMyA1IDQuNDEgMTAuNTkgMTAgNSAxNS41OSA2LjQxIDE3IDExIDEyLjQxVjIwaDFsNS43MS01LjcxLTQuMy00LjI5IDQuMy00LjI5ek0xMyAzLjgzbDEuODggMS44OEwxMyA3LjU5VjMuODN6bTEuODggMTAuNDZMMTMgMTYuMTd2LTMuNzZsMS44OCAxLjg4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYnJpZ2h0bmVzcz48cGF0aCBkPVxcXCJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTYuMDFIM1Y0Ljk5aDE4djE0LjAyek04IDE2aDIuNWwxLjUgMS41IDEuNS0xLjVIMTZ2LTIuNWwxLjUtMS41LTEuNS0xLjVWOGgtMi41TDEyIDYuNSAxMC41IDhIOHYyLjVMNi41IDEyIDggMTMuNVYxNnptNC03YzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzVjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1jZWxsPjxwYXRoIGQ9XFxcIk03IDI0aDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyek0xNiAuMDFMOCAwQzYuOSAwIDYgLjkgNiAydjE2YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlYyYzAtMS4xLS45LTEuOTktMi0xLjk5ek0xNiAxNkg4VjRoOHYxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWV0aGVybmV0PjxwYXRoIGQ9XFxcIk03Ljc3IDYuNzZMNi4yMyA1LjQ4LjgyIDEybDUuNDEgNi41MiAxLjU0LTEuMjhMMy40MiAxMmw0LjM1LTUuMjR6TTcgMTNoMnYtMkg3djJ6bTEwLTJoLTJ2Mmgydi0yem0tNiAyaDJ2LTJoLTJ2MnptNi43Ny03LjUybC0xLjU0IDEuMjhMMjAuNTggMTJsLTQuMzUgNS4yNCAxLjU0IDEuMjhMMjMuMTggMTJsLTUuNDEtNi41MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWFudGVubmE+PHBhdGggZD1cXFwiTTEyIDVjLTMuODcgMC03IDMuMTMtNyA3aDJjMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWgyYzAtMy44Ny0zLjEzLTctNy03em0xIDkuMjljLjg4LS4zOSAxLjUtMS4yNiAxLjUtMi4yOSAwLTEuMzgtMS4xMi0yLjUtMi41LTIuNVM5LjUgMTAuNjIgOS41IDEyYzAgMS4wMi42MiAxLjkgMS41IDIuMjl2My4zTDcuNTkgMjEgOSAyMi40MWwzLTMgMyAzTDE2LjQxIDIxIDEzIDE3LjU5di0zLjN6TTEyIDFDNS45MyAxIDEgNS45MyAxIDEyaDJjMC00Ljk3IDQuMDMtOSA5LTlzOSA0LjAzIDkgOWgyYzAtNi4wNy00LjkzLTExLTExLTExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtY29tcG9uZW50PjxwYXRoIGQ9XFxcIk01IDJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEgxdjZoNlY2SDVWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMkg5djJ6bS04IDBjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4QzYuMTYgMTguNCA3IDE3LjMgNyAxNnYtMkgxdjJ6TTIxIDZWMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0aC0ydjZoNlY2aC0yem0tOC00YzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIOXY2aDZWNmgtMlYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0yaC02djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1jb21wb3NpdGU+PHBhdGggZD1cXFwiTTUgMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDF2Nmg2VjZINVYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0ySDl2MnptLTggMGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThDNi4xNiAxOC40IDcgMTcuMyA3IDE2di0ySDF2MnpNMjEgNlYyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRoLTJ2Nmg2VjZoLTJ6bS04LTRjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEg5djZoNlY2aC0yVjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJoLTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWhkbWk+PHBhdGggZD1cXFwiTTE4IDdWNGMwLTEuMS0uOS0yLTItMkg4Yy0xLjEgMC0yIC45LTIgMnYzSDV2NmwzIDZ2M2g4di0zbDMtNlY3aC0xek04IDRoOHYzaC0yVjVoLTF2MmgtMlY1aC0xdjJIOFY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtc3ZpZGVvPjxwYXRoIGQ9XFxcIk04IDExLjVjMC0uODMtLjY3LTEuNS0xLjUtMS41UzUgMTAuNjcgNSAxMS41IDUuNjcgMTMgNi41IDEzIDggMTIuMzMgOCAxMS41em03LTVjMC0uODMtLjY3LTEuNS0xLjUtMS41aC0zQzkuNjcgNSA5IDUuNjcgOSA2LjVTOS42NyA4IDEwLjUgOGgzYy44MyAwIDEuNS0uNjcgMS41LTEuNXpNOC41IDE1Yy0uODMgMC0xLjUuNjctMS41IDEuNVM3LjY3IDE4IDguNSAxOHMxLjUtLjY3IDEuNS0xLjVTOS4zMyAxNSA4LjUgMTV6TTEyIDFDNS45MyAxIDEgNS45MyAxIDEyczQuOTMgMTEgMTEgMTEgMTEtNC45MyAxMS0xMVMxOC4wNyAxIDEyIDF6bTAgMjBjLTQuOTYgMC05LTQuMDQtOS05czQuMDQtOSA5LTkgOSA0LjA0IDkgOS00LjA0IDktOSA5em01LjUtMTFjLS44MyAwLTEuNS42Ny0xLjUgMS41cy42NyAxLjUgMS41IDEuNSAxLjUtLjY3IDEuNS0xLjUtLjY3LTEuNS0xLjUtMS41em0tMiA1Yy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLW92ZXJzY2FuPjxwYXRoIGQ9XFxcIk0xMi4wMSA1LjVMMTAgOGg0bC0xLjk5LTIuNXpNMTggMTB2NGwyLjUtMS45OUwxOCAxMHpNNiAxMGwtMi41IDIuMDFMNiAxNHYtNHptOCA2aC00bDIuMDEgMi41TDE0IDE2em03LTEzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1waG9uZT48cGF0aCBkPVxcXCJNMTMgOWgtMnYyaDJWOXptNCAwaC0ydjJoMlY5em0zIDYuNWMtMS4yNSAwLTIuNDUtLjItMy41Ny0uNTctLjM1LS4xMS0uNzQtLjAzLTEuMDIuMjRsLTIuMiAyLjJjLTIuODMtMS40NC01LjE1LTMuNzUtNi41OS02LjU4bDIuMi0yLjIxYy4yOC0uMjcuMzYtLjY2LjI1LTEuMDFDOC43IDYuNDUgOC41IDUuMjUgOC41IDRjMC0uNTUtLjQ1LTEtMS0xSDRjLS41NSAwLTEgLjQ1LTEgMSAwIDkuMzkgNy42MSAxNyAxNyAxNyAuNTUgMCAxLS40NSAxLTF2LTMuNWMwLS41NS0uNDUtMS0xLTF6TTE5IDl2MmgyVjloLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1wb3dlcj48cGF0aCBkPVxcXCJNNyAyNGgydi0ySDd2MnptNCAwaDJ2LTJoLTJ2MnptMi0yMmgtMnYxMGgyVjJ6bTMuNTYgMi40NGwtMS40NSAxLjQ1QzE2Ljg0IDYuOTQgMTggOC44MyAxOCAxMWMwIDMuMzEtMi42OSA2LTYgNnMtNi0yLjY5LTYtNmMwLTIuMTcgMS4xNi00LjA2IDIuODgtNS4xMkw3LjQ0IDQuNDRDNS4zNiA1Ljg4IDQgOC4yOCA0IDExYzAgNC40MiAzLjU4IDggOCA4czgtMy41OCA4LThjMC0yLjcyLTEuMzYtNS4xMi0zLjQ0LTYuNTZ6TTE1IDI0aDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXJlbW90ZT48cGF0aCBkPVxcXCJNMTUgOUg5Yy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTFWMTBjMC0uNTUtLjQ1LTEtMS0xem0tMyA2Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpNNy4wNSA2LjA1bDEuNDEgMS40MUM5LjM3IDYuNTYgMTAuNjIgNiAxMiA2czIuNjMuNTYgMy41NCAxLjQ2bDEuNDEtMS40MUMxNS42OCA0Ljc4IDEzLjkzIDQgMTIgNHMtMy42OC43OC00Ljk1IDIuMDV6TTEyIDBDOC45NiAwIDYuMjEgMS4yMyA0LjIyIDMuMjJsMS40MSAxLjQxQzcuMjYgMy4wMSA5LjUxIDIgMTIgMnM0Ljc0IDEuMDEgNi4zNiAyLjY0bDEuNDEtMS40MUMxNy43OSAxLjIzIDE1LjA0IDAgMTIgMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXZvaWNlPjxwYXRoIGQ9XFxcIk03IDI0aDJ2LTJIN3Yyem01LTExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDRjMC0xLjY2LTEuMzQtMy0zLTNTOSAyLjM0IDkgNHY2YzAgMS42NiAxLjM0IDMgMyAzem0tMSAxMWgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6bTQtMTRoLTEuN2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTMgNi43IDEwSDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjBoMnYtMy4yOGMzLjI4LS40OSA2LTMuMzEgNi02LjcyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2hvcD48cGF0aCBkPVxcXCJNMTYgNlY0YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2MkgydjEzYzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZoLTZ6bS02LTJoNHYyaC00VjR6TTkgMThWOWw3LjUgNEw5IDE4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2hvcC10d28+PHBhdGggZD1cXFwiTTMgOUgxdjExYzAgMS4xMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uODkgMi0ySDNWOXptMTUtNFYzYzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg1djExYzAgMS4xMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uODkgMi0yVjVoLTV6bS02LTJoNHYyaC00VjN6bTAgMTJWOGw1LjUgMy01LjUgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3BwaW5nLWJhc2tldD48cGF0aCBkPVxcXCJNMTcuMjEgOWwtNC4zOC02LjU2Yy0uMTktLjI4LS41MS0uNDItLjgzLS40Mi0uMzIgMC0uNjQuMTQtLjgzLjQzTDYuNzkgOUgyYy0uNTUgMC0xIC40NS0xIDEgMCAuMDkuMDEuMTguMDQuMjdsMi41NCA5LjI3Yy4yMy44NCAxIDEuNDYgMS45MiAxLjQ2aDEzYy45MiAwIDEuNjktLjYyIDEuOTMtMS40NmwyLjU0LTkuMjdMMjMgMTBjMC0uNTUtLjQ1LTEtMS0xaC00Ljc5ek05IDlsMy00LjRMMTUgOUg5em0zIDhjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2hvcHBpbmctY2FydD48cGF0aCBkPVxcXCJNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnpNMSAydjJoMmwzLjYgNy41OS0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoMTJ2LTJINy40MmMtLjE0IDAtLjI1LS4xMS0uMjUtLjI1bC4wMy0uMTIuOS0xLjYzaDcuNDVjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuNTgtNi40OWMuMDgtLjE0LjEyLS4zMS4xMi0uNDggMC0uNTUtLjQ1LTEtMS0xSDUuMjFsLS45NC0ySDF6bTE2IDE2Yy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNvcnQ+PHBhdGggZD1cXFwiTTMgMThoNnYtMkgzdjJ6TTMgNnYyaDE4VjZIM3ptMCA3aDEydi0ySDN2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNwZWFrZXItbm90ZXM+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek04IDE0SDZ2LTJoMnYyem0wLTNINlY5aDJ2MnptMC0zSDZWNmgydjJ6bTcgNmgtNXYtMmg1djJ6bTMtM2gtOFY5aDh2MnptMC0zaC04VjZoOHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3BlYWtlci1ub3Rlcy1vZmY+PHBhdGggZD1cXFwiTTEwLjU0IDExbC0uNTQtLjU0TDcuNTQgOCA2IDYuNDYgMi4zOCAyLjg0IDEuMjcgMS43MyAwIDNsMi4wMSAyLjAxTDIgMjJsNC00aDlsNS43MyA1LjczTDIyIDIyLjQ2IDE3LjU0IDE4bC03LTd6TTggMTRINnYtMmgydjJ6bS0yLTNWOWwyIDJINnptMTQtOUg0LjA4TDEwIDcuOTJWNmg4djJoLTcuOTJsMSAxSDE4djJoLTQuOTJsNi45OSA2Ljk5QzIxLjE0IDE3Ljk1IDIyIDE3LjA4IDIyIDE2VjRjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zcGVsbGNoZWNrPjxwYXRoIGQ9XFxcIk0xMi40NSAxNmgyLjA5TDkuNDMgM0g3LjU3TDIuNDYgMTZoMi4wOWwxLjEyLTNoNS42NGwxLjE0IDN6bS02LjAyLTVMOC41IDUuNDggMTAuNTcgMTFINi40M3ptMTUuMTYuNTlsLTguMDkgOC4wOUw5LjgzIDE2bC0xLjQxIDEuNDEgNS4wOSA1LjA5TDIzIDEzbC0xLjQxLTEuNDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFyPjxwYXRoIGQ9XFxcIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXItYm9yZGVyPjxwYXRoIGQ9XFxcIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3Rhci1oYWxmPjxwYXRoIGQ9XFxcIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40VjYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFycz48cGF0aCBkPVxcXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNC4yNCAxNkwxMiAxNS40NSA3Ljc3IDE4bDEuMTItNC44MS0zLjczLTMuMjMgNC45Mi0uNDJMMTIgNWwxLjkyIDQuNTMgNC45Mi40Mi0zLjczIDMuMjNMMTYuMjMgMTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdG9yZT48cGF0aCBkPVxcXCJNMjAgNEg0djJoMTZWNHptMSAxMHYtMmwtMS01SDRsLTEgNXYyaDF2NmgxMHYtNmg0djZoMnYtNmgxem0tOSA0SDZ2LTRoNnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3ViZGlyZWN0b3J5LWFycm93LWxlZnQ+PHBhdGggZD1cXFwiTTExIDlsMS40MiAxLjQyTDguODMgMTRIMThWNGgydjEySDguODNsMy41OSAzLjU4TDExIDIxbC02LTYgNi02elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3ViZGlyZWN0b3J5LWFycm93LXJpZ2h0PjxwYXRoIGQ9XFxcIk0xOSAxNWwtNiA2LTEuNDItMS40MkwxNS4xNyAxNkg0VjRoMnYxMGg5LjE3bC0zLjU5LTMuNThMMTMgOWw2IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJqZWN0PjxwYXRoIGQ9XFxcIk0xNCAxN0g0djJoMTB2LTJ6bTYtOEg0djJoMTZWOXpNNCAxNWgxNnYtMkg0djJ6TTQgNXYyaDE2VjVINHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1cGVydmlzb3ItYWNjb3VudD48cGF0aCBkPVxcXCJNMTYuNSAxMmMxLjM4IDAgMi40OS0xLjEyIDIuNDktMi41UzE3Ljg4IDcgMTYuNSA3QzE1LjEyIDcgMTQgOC4xMiAxNCA5LjVzMS4xMiAyLjUgMi41IDIuNXpNOSAxMWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1MxMC42NiA1IDkgNUM3LjM0IDUgNiA2LjM0IDYgOHMxLjM0IDMgMyAzem03LjUgM2MtMS44MyAwLTUuNS45Mi01LjUgMi43NVYxOWgxMXYtMi4yNWMwLTEuODMtMy42Ny0yLjc1LTUuNS0yLjc1ek05IDEzYy0yLjMzIDAtNyAxLjE3LTcgMy41VjE5aDd2LTIuMjVjMC0uODUuMzMtMi4zNCAyLjM3LTMuNDdDMTAuNSAxMy4xIDkuNjYgMTMgOSAxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN3YXAtaG9yaXo+PHBhdGggZD1cXFwiTTYuOTkgMTFMMyAxNWwzLjk5IDR2LTNIMTR2LTJINi45OXYtM3pNMjEgOWwtMy45OS00djNIMTB2Mmg3LjAxdjNMMjEgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN3YXAtdmVydD48cGF0aCBkPVxcXCJNMTYgMTcuMDFWMTBoLTJ2Ny4wMWgtM0wxNSAyMWw0LTMuOTloLTN6TTkgM0w1IDYuOTloM1YxNGgyVjYuOTloM0w5IDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zd2FwLXZlcnRpY2FsLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNNi41IDlMMTAgNS41IDEzLjUgOUgxMXY0SDlWOUg2LjV6bTExIDZMMTQgMTguNSAxMC41IDE1SDEzdi00aDJ2NGgyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zeXN0ZW0tdXBkYXRlLWFsdD48cGF0aCBkPVxcXCJNMTIgMTYuNWw0LTRoLTN2LTloLTJ2OUg4bDQgNHptOS0xM2gtNnYxLjk5aDZ2MTQuMDNIM1Y1LjQ5aDZWMy41SDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ2LTE0YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGFiPjxwYXRoIGQ9XFxcIk0yMSAzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkgzVjVoMTB2NGg4djEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGFiLXVuc2VsZWN0ZWQ+PHBhdGggZD1cXFwiTTEgOWgyVjdIMXYyem0wIDRoMnYtMkgxdjJ6bTAtOGgyVjNjLTEuMSAwLTIgLjktMiAyem04IDE2aDJ2LTJIOXYyem0tOC00aDJ2LTJIMXYyem0yIDR2LTJIMWMwIDEuMS45IDIgMiAyek0yMSAzaC04djZoMTBWNWMwLTEuMS0uOS0yLTItMnptMCAxNGgydi0yaC0ydjJ6TTkgNWgyVjNIOXYyek01IDIxaDJ2LTJINXYyek01IDVoMlYzSDV2MnptMTYgMTZjMS4xIDAgMi0uOSAyLTJoLTJ2MnptMC04aDJ2LTJoLTJ2MnptLTggOGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10ZXh0LWZvcm1hdD48cGF0aCBkPVxcXCJNNSAxN3YyaDE0di0ySDV6bTQuNS00LjJoNWwuOSAyLjJoMi4xTDEyLjc1IDRoLTEuNUw2LjUgMTVoMi4xbC45LTIuMnpNMTIgNS45OEwxMy44NyAxMWgtMy43NEwxMiA1Ljk4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGhlYXRlcnM+PHBhdGggZD1cXFwiTTE4IDN2MmgtMlYzSDh2Mkg2VjNINHYxOGgydi0yaDJ2Mmg4di0yaDJ2MmgyVjNoLTJ6TTggMTdINnYtMmgydjJ6bTAtNEg2di0yaDJ2MnptMC00SDZWN2gydjJ6bTEwIDhoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aHVtYi1kb3duPjxwYXRoIGQ9XFxcIk0xNSAzSDZjLS44MyAwLTEuNTQuNS0xLjg0IDEuMjJsLTMuMDIgNy4wNWMtLjA5LjIzLS4xNC40Ny0uMTQuNzN2MS45MWwuMDEuMDFMMSAxNGMwIDEuMS45IDIgMiAyaDYuMzFsLS45NSA0LjU3LS4wMy4zMmMwIC40MS4xNy43OS40NCAxLjA2TDkuODMgMjNsNi41OS02LjU5Yy4zNi0uMzYuNTgtLjg2LjU4LTEuNDFWNWMwLTEuMS0uOS0yLTItMnptNCAwdjEyaDRWM2gtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRodW1iLXVwPjxwYXRoIGQ9XFxcIk0xIDIxaDRWOUgxdjEyem0yMi0xMWMwLTEuMS0uOS0yLTItMmgtNi4zMWwuOTUtNC41Ny4wMy0uMzJjMC0uNDEtLjE3LS43OS0uNDQtMS4wNkwxNC4xNyAxIDcuNTkgNy41OUM3LjIyIDcuOTUgNyA4LjQ1IDcgOXYxMGMwIDEuMS45IDIgMiAyaDljLjgzIDAgMS41NC0uNSAxLjg0LTEuMjJsMy4wMi03LjA1Yy4wOS0uMjMuMTQtLjQ3LjE0LS43M3YtMS45MWwtLjAxLS4wMUwyMyAxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRodW1icy11cC1kb3duPjxwYXRoIGQ9XFxcIk0xMiA2YzAtLjU1LS40NS0xLTEtMUg1LjgybC42Ni0zLjE4LjAyLS4yM2MwLS4zMS0uMTMtLjU5LS4zMy0uOEw1LjM4IDAgLjQ0IDQuOTRDLjE3IDUuMjEgMCA1LjU5IDAgNnY2LjVjMCAuODMuNjcgMS41IDEuNSAxLjVoNi43NWMuNjIgMCAxLjE1LS4zOCAxLjM4LS45MWwyLjI2LTUuMjljLjA3LS4xNy4xMS0uMzYuMTEtLjU1VjZ6bTEwLjUgNGgtNi43NWMtLjYyIDAtMS4xNS4zOC0xLjM4LjkxbC0yLjI2IDUuMjljLS4wNy4xNy0uMTEuMzYtLjExLjU1VjE4YzAgLjU1LjQ1IDEgMSAxaDUuMThsLS42NiAzLjE4LS4wMi4yNGMwIC4zMS4xMy41OS4zMy44bC43OS43OCA0Ljk0LTQuOTRjLjI3LS4yNy40NC0uNjUuNDQtMS4wNnYtNi41YzAtLjgzLS42Ny0xLjUtMS41LTEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRpbWVsaW5lPjxwYXRoIGQ9XFxcIk0yMyA4YzAgMS4xLS45IDItMiAyLS4xOCAwLS4zNS0uMDItLjUxLS4wN2wtMy41NiAzLjU1Yy4wNS4xNi4wNy4zNC4wNy41MiAwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0uMTguMDItLjM2LjA3LS41MmwtMi41NS0yLjU1Yy0uMTYuMDUtLjM0LjA3LS41Mi4wN3MtLjM2LS4wMi0uNTItLjA3bC00LjU1IDQuNTZjLjA1LjE2LjA3LjMzLjA3LjUxIDAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMmMuMTggMCAuMzUuMDIuNTEuMDdsNC41Ni00LjU1QzguMDIgOS4zNiA4IDkuMTggOCA5YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAuMTgtLjAyLjM2LS4wNy41MmwyLjU1IDIuNTVjLjE2LS4wNS4zNC0uMDcuNTItLjA3cy4zNi4wMi41Mi4wN2wzLjU1LTMuNTZDMTkuMDIgOC4zNSAxOSA4LjE4IDE5IDhjMC0xLjEuOS0yIDItMnMyIC45IDIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRvYz48cGF0aCBkPVxcXCJNMyA5aDE0VjdIM3Yyem0wIDRoMTR2LTJIM3Yyem0wIDRoMTR2LTJIM3Yyem0xNiAwaDJ2LTJoLTJ2MnptMC0xMHYyaDJWN2gtMnptMCA2aDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRvZGF5PjxwYXRoIGQ9XFxcIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjhoMTR2MTF6TTcgMTBoNXY1SDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b2xsPjxwYXRoIGQ9XFxcIk0xNSA0Yy00LjQyIDAtOCAzLjU4LTggOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOHptMCAxNGMtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNiA2IDIuNjkgNiA2LTIuNjkgNi02IDZ6TTMgMTJjMC0yLjYxIDEuNjctNC44MyA0LTUuNjVWNC4yNkMzLjU1IDUuMTUgMSA4LjI3IDEgMTJzMi41NSA2Ljg1IDYgNy43NHYtMi4wOWMtMi4zMy0uODItNC0zLjA0LTQtNS42NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRvdWNoLWFwcD48cGF0aCBkPVxcXCJNOSAxMS4yNFY3LjVDOSA2LjEyIDEwLjEyIDUgMTEuNSA1UzE0IDYuMTIgMTQgNy41djMuNzRjMS4yMS0uODEgMi0yLjE4IDItMy43NEMxNiA1LjAxIDEzLjk5IDMgMTEuNSAzUzcgNS4wMSA3IDcuNWMwIDEuNTYuNzkgMi45MyAyIDMuNzR6bTkuODQgNC42M2wtNC41NC0yLjI2Yy0uMTctLjA3LS4zNS0uMTEtLjU0LS4xMUgxM3YtNmMwLS44My0uNjctMS41LTEuNS0xLjVTMTAgNi42NyAxMCA3LjV2MTAuNzRsLTMuNDMtLjcyYy0uMDgtLjAxLS4xNS0uMDMtLjI0LS4wMy0uMzEgMC0uNTkuMTMtLjc5LjMzbC0uNzkuOCA0Ljk0IDQuOTRjLjI3LjI3LjY1LjQ0IDEuMDYuNDRoNi43OWMuNzUgMCAxLjMzLS41NSAxLjQ0LTEuMjhsLjc1LTUuMjdjLjAxLS4wNy4wMi0uMTQuMDItLjIgMC0uNjItLjM4LTEuMTYtLjkxLTEuMzh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFjay1jaGFuZ2VzPjxwYXRoIGQ9XFxcIk0xOS4wNyA0LjkzbC0xLjQxIDEuNDFDMTkuMSA3Ljc5IDIwIDkuNzkgMjAgMTJjMCA0LjQyLTMuNTggOC04IDhzLTgtMy41OC04LThjMC00LjA4IDMuMDUtNy40NCA3LTcuOTN2Mi4wMkM4LjE2IDYuNTcgNiA5LjAzIDYgMTJjMCAzLjMxIDIuNjkgNiA2IDZzNi0yLjY5IDYtNmMwLTEuNjYtLjY3LTMuMTYtMS43Ni00LjI0bC0xLjQxIDEuNDFDMTUuNTUgOS45IDE2IDEwLjkgMTYgMTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTRjMC0xLjg2IDEuMjgtMy40MSAzLTMuODZ2Mi4xNGMtLjYuMzUtMSAuOTgtMSAxLjcyIDAgMS4xLjkgMiAyIDJzMi0uOSAyLTJjMC0uNzQtLjQtMS4zOC0xLTEuNzJWMmgtMUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwYzAtMi43Ni0xLjEyLTUuMjYtMi45My03LjA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhbnNsYXRlPjxwYXRoIGQ9XFxcIk0xMi44NyAxNS4wN2wtMi41NC0yLjUxLjAzLS4wM2MxLjc0LTEuOTQgMi45OC00LjE3IDMuNzEtNi41M0gxN1Y0aC03VjJIOHYySDF2MS45OWgxMS4xN0MxMS41IDcuOTIgMTAuNDQgOS43NSA5IDExLjM1IDguMDcgMTAuMzIgNy4zIDkuMTkgNi42OSA4aC0yYy43MyAxLjYzIDEuNzMgMy4xNyAyLjk4IDQuNTZsLTUuMDkgNS4wMkw0IDE5bDUtNSAzLjExIDMuMTEuNzYtMi4wNHpNMTguNSAxMGgtMkwxMiAyMmgybDEuMTItM2g0Ljc1TDIxIDIyaDJsLTQuNS0xMnptLTIuNjIgN2wxLjYyLTQuMzNMMTkuMTIgMTdoLTMuMjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmVuZGluZy1kb3duPjxwYXRoIGQ9XFxcIk0xNiAxOGwyLjI5LTIuMjktNC44OC00Ljg4LTQgNEwyIDcuNDEgMy40MSA2bDYgNiA0LTQgNi4zIDYuMjlMMjIgMTJ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyZW5kaW5nLWZsYXQ+PHBhdGggZD1cXFwiTTIyIDEybC00LTR2M0gzdjJoMTV2M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyZW5kaW5nLXVwPjxwYXRoIGQ9XFxcIk0xNiA2bDIuMjkgMi4yOS00Ljg4IDQuODgtNC00TDIgMTYuNTkgMy40MSAxOGw2LTYgNCA0IDYuMy02LjI5TDIyIDEyVjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10dXJuZWQtaW4+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXR1cm5lZC1pbi1ub3Q+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnptMCAxNWwtNS0yLjE4TDcgMThWNWgxMHYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuYXJjaGl2ZT48cGF0aCBkPVxcXCJNMjAuNTUgNS4yMmwtMS4zOS0xLjY4QzE4Ljg4IDMuMjEgMTguNDcgMyAxOCAzSDZjLS40NyAwLS44OC4yMS0xLjE1LjU1TDMuNDYgNS4yMkMzLjE3IDUuNTcgMyA2LjAxIDMgNi41VjE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjYuNWMwLS40OS0uMTctLjkzLS40NS0xLjI4ek0xMiA5LjVsNS41IDUuNUgxNHYyaC00di0ySDYuNUwxMiA5LjV6TTUuMTIgNWwuODItMWgxMmwuOTMgMUg1LjEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5kbz48cGF0aCBkPVxcXCJNMTIuNSA4Yy0yLjY1IDAtNS4wNS45OS02LjkgMi42TDIgN3Y5aDlsLTMuNjItMy42MmMxLjM5LTEuMTYgMy4xNi0xLjg4IDUuMTItMS44OCAzLjU0IDAgNi41NSAyLjMxIDcuNiA1LjVsMi4zNy0uNzhDMjEuMDggMTEuMDMgMTcuMTUgOCAxMi41IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmZvbGQtbGVzcz48cGF0aCBkPVxcXCJNNy40MSAxOC41OUw4LjgzIDIwIDEyIDE2LjgzIDE1LjE3IDIwbDEuNDEtMS40MUwxMiAxNGwtNC41OSA0LjU5em05LjE4LTEzLjE4TDE1LjE3IDQgMTIgNy4xNyA4LjgzIDQgNy40MSA1LjQxIDEyIDEwbDQuNTktNC41OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuZm9sZC1tb3JlPjxwYXRoIGQ9XFxcIk0xMiA1LjgzTDE1LjE3IDlsMS40MS0xLjQxTDEyIDMgNy40MSA3LjU5IDguODMgOSAxMiA1Ljgzem0wIDEyLjM0TDguODMgMTVsLTEuNDEgMS40MUwxMiAyMWw0LjU5LTQuNTlMMTUuMTcgMTUgMTIgMTguMTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11cGRhdGU+PHBhdGggZD1cXFwiTTIxIDEwLjEyaC02Ljc4bDIuNzQtMi44MmMtMi43My0yLjctNy4xNS0yLjgtOS44OC0uMS0yLjczIDIuNzEtMi43MyA3LjA4IDAgOS43OSAyLjczIDIuNzEgNy4xNSAyLjcxIDkuODggMEMxOC4zMiAxNS42NSAxOSAxNC4wOCAxOSAxMi4xaDJjMCAxLjk4LS44OCA0LjU1LTIuNjQgNi4yOS0zLjUxIDMuNDgtOS4yMSAzLjQ4LTEyLjcyIDAtMy41LTMuNDctMy41My05LjExLS4wMi0xMi41OCAzLjUxLTMuNDcgOS4xNC0zLjQ3IDEyLjY1IDBMMjEgM3Y3LjEyek0xMi41IDh2NC4yNWwzLjUgMi4wOC0uNzIgMS4yMUwxMSAxM1Y4aDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZlcmlmaWVkLXVzZXI+PHBhdGggZD1cXFwiTTEyIDFMMyA1djZjMCA1LjU1IDMuODQgMTAuNzQgOSAxMiA1LjE2LTEuMjYgOS02LjQ1IDktMTJWNWwtOS00em0tMiAxNmwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1hZ2VuZGE+PHBhdGggZD1cXFwiTTIwIDEzSDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMXYtNmMwLS41NS0uNDUtMS0xLTF6bTAtMTBIM2MtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTdjLjU1IDAgMS0uNDUgMS0xVjRjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1hcnJheT48cGF0aCBkPVxcXCJNNCAxOGgzVjVINHYxM3pNMTggNXYxM2gzVjVoLTN6TTggMThoOVY1SDh2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWNhcm91c2VsPjxwYXRoIGQ9XFxcIk03IDE5aDEwVjRIN3YxNXptLTUtMmg0VjZIMnYxMXpNMTggNnYxMWg0VjZoLTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWNvbHVtbj48cGF0aCBkPVxcXCJNMTAgMThoNVY1aC01djEzem0tNiAwaDVWNUg0djEzek0xNiA1djEzaDVWNWgtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctZGF5PjxwYXRoIGQ9XFxcIk0yIDIxaDE5di0zSDJ2M3pNMjAgOEgzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTFWOWMwLS41NS0uNDUtMS0xLTF6TTIgM3YzaDE5VjNIMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctaGVhZGxpbmU+PHBhdGggZD1cXFwiTTQgMTVoMTZ2LTJINHYyem0wIDRoMTZ2LTJINHYyem0wLThoMTZWOUg0djJ6bTAtNnYyaDE2VjVINHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctbGlzdD48cGF0aCBkPVxcXCJNNCAxNGg0di00SDR2NHptMCA1aDR2LTRINHY0ek00IDloNFY1SDR2NHptNSA1aDEydi00SDl2NHptMCA1aDEydi00SDl2NHpNOSA1djRoMTJWNUg5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1tb2R1bGU+PHBhdGggZD1cXFwiTTQgMTFoNVY1SDR2NnptMCA3aDV2LTZINHY2em02IDBoNXYtNmgtNXY2em02IDBoNXYtNmgtNXY2em0tNi03aDVWNWgtNXY2em02LTZ2Nmg1VjVoLTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LXF1aWx0PjxwYXRoIGQ9XFxcIk0xMCAxOGg1di02aC01djZ6bS02IDBoNVY1SDR2MTN6bTEyIDBoNXYtNmgtNXY2ek0xMCA1djZoMTFWNUgxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctc3RyZWFtPjxwYXRoIGQ9XFxcIk00IDE4aDE3di02SDR2NnpNNCA1djZoMTdWNUg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy13ZWVrPjxwYXRoIGQ9XFxcIk02IDVIM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xem0xNCAwaC0zYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6bS03IDBoLTNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpc2liaWxpdHk+PHBhdGggZD1cXFwiTTEyIDQuNUM3IDQuNSAyLjczIDcuNjEgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41czkuMjctMy4xMSAxMS03LjVjLTEuNzMtNC4zOS02LTcuNS0xMS03LjV6TTEyIDE3Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC04Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpc2liaWxpdHktb2ZmPjxwYXRoIGQ9XFxcIk0xMiA3YzIuNzYgMCA1IDIuMjQgNSA1IDAgLjY1LS4xMyAxLjI2LS4zNiAxLjgzbDIuOTIgMi45MmMxLjUxLTEuMjYgMi43LTIuODkgMy40My00Ljc1LTEuNzMtNC4zOS02LTcuNS0xMS03LjUtMS40IDAtMi43NC4yNS0zLjk4LjdsMi4xNiAyLjE2QzEwLjc0IDcuMTMgMTEuMzUgNyAxMiA3ek0yIDQuMjdsMi4yOCAyLjI4LjQ2LjQ2QzMuMDggOC4zIDEuNzggMTAuMDIgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41IDEuNTUgMCAzLjAzLS4zIDQuMzgtLjg0bC40Mi40MkwxOS43MyAyMiAyMSAyMC43MyAzLjI3IDMgMiA0LjI3ek03LjUzIDkuOGwxLjU1IDEuNTVjLS4wNS4yMS0uMDguNDMtLjA4LjY1IDAgMS42NiAxLjM0IDMgMyAzIC4yMiAwIC40NC0uMDMuNjUtLjA4bDEuNTUgMS41NWMtLjY3LjMzLTEuNDEuNTMtMi4yLjUzLTIuNzYgMC01LTIuMjQtNS01IDAtLjc5LjItMS41My41My0yLjJ6bTQuMzEtLjc4bDMuMTUgMy4xNS4wMi0uMTZjMC0xLjY2LTEuMzQtMy0zLTNsLS4xNy4wMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXdhcm5pbmc+PHBhdGggZD1cXFwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXdhdGNoLWxhdGVyPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMxNy41IDIgMTIgMnptNC4yIDE0LjJMMTEgMTNWN2gxLjV2NS4ybDQuNSAyLjctLjggMS4zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d2Vla2VuZD48cGF0aCBkPVxcXCJNMjEgMTBjLTEuMSAwLTIgLjktMiAydjNINXYtM2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ2NWMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0ydi01YzAtMS4xLS45LTItMi0yem0tMy01SDZjLTEuMSAwLTIgLjktMiAydjIuMTVjMS4xNi40MSAyIDEuNTEgMiAyLjgyVjE0aDEydi0yLjAzYzAtMS4zLjg0LTIuNCAyLTIuODJWN2MwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXdvcms+PHBhdGggZD1cXFwiTTIwIDZoLTRWNGMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tNiAwaC00VjRoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9eW91dHViZS1zZWFyY2hlZC1mb3I+PHBhdGggZD1cXFwiTTE3LjAxIDE0aC0uOGwtLjI3LS4yN2MuOTgtMS4xNCAxLjU3LTIuNjEgMS41Ny00LjIzIDAtMy41OS0yLjkxLTYuNS02LjUtNi41cy02LjUgMy02LjUgNi41SDJsMy44NCA0IDQuMTYtNEg2LjUxQzYuNTEgNyA4LjUzIDUgMTEuMDEgNXM0LjUgMi4wMSA0LjUgNC41YzAgMi40OC0yLjAyIDQuNS00LjUgNC41LS42NSAwLTEuMjYtLjE0LTEuODItLjM4TDcuNzEgMTUuMWMuOTcuNTcgMi4wOS45IDMuMy45IDEuNjEgMCAzLjA4LS41OSA0LjIyLTEuNTdsLjI3LjI3di43OWw1LjAxIDQuOTlMMjIgMTlsLTQuOTktNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXpvb20taW4+PHBhdGggZD1cXFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6bTIuNS00aC0ydjJIOXYtMkg3VjloMlY3aDF2MmgydjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD16b29tLW91dD48cGF0aCBkPVxcXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpNNyA5aDV2MUg3elxcXCI+PC9wYXRoPjwvZz4gPC9kZWZzPjwvc3ZnPiA8L2lyb24taWNvbnNldC1zdmc+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbFwiPlxuXG48IS0tXG4gIGBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNgXG5cbiAgKipGcm9tIHYzLngueCwgdGhpcyBjb21wb25lbnQgb25seSB3b3JrcyB3aXRoIFBvbHltZXIgMS43KyBvciAyLjArLioqXG5cbiAgWyFbUHVibGlzaGVkIG9uIHdlYmNvbXBvbmVudHMub3JnXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3dlYmNvbXBvbmVudHMub3JnLXB1Ymxpc2hlZC1ibHVlLnN2ZyldKGh0dHBzOi8vd3d3LndlYmNvbXBvbmVudHMub3JnL2VsZW1lbnQvZWxsaXB0aWNhbGpzL3BhcGVyLWF1dG9jb21wbGV0ZSlcblxuICBbIVtTYXVjZSBUZXN0IFN0YXR1c10oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2Jyb3dzZXItbWF0cml4L2podWVzb3Muc3ZnKV0oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL3Uvamh1ZXNvcylcblxuICBBbGxvd3MgdG8gYWRkIGF1dG9jb21wbGV0ZSBjYXBhYmlsaXRpZXMgdG8gYW55IGlucHV0IGZpZWxkLiBUaGlzIGlzIGRlc2lyYWJsZSB3aGVuIHlvdSBoYXZlIGFuIGlucHV0IGZpZWxkIHdpdGggY3VzdG9tXG4gIGxvZ2ljIGFuZCB5b3UganVzdCB3YW50IHRvIGFkZCB0aGUgZmVhdHVyZSB0byBoZWxwIHVzZXJzIHdpdGggdGhlIHNlbGVjdGlvbi4gSWYgeW91IHdhbnQgdG8gdXNlIGl0IGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgYSByZWd1bGFyIGA8cGFwZXItaW5wdXQ+YCwgeW91IGNhbiB1c2UgYDxwYXBlci1hdXRvY29tcGxldGU+YC5cblxuICBFeGFtcGxlOlxuICBgYGBcbiAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS13cmFwcGVyXCI+XG4gICAgPHBhcGVyLWlucHV0IGlkPVwibXlJbnB1dFwiIGxhYmVsPVwiU2VsZWN0IFN0YXRlXCI+PC9wYXBlci1pbnB1dD5cblxuICAgIDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcbiAgICAgIGZvcj1cIm15SW5wdXRcIlxuICAgICAgc291cmNlPVwiW1thY2NvdW50c11dXCI+PC9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+XG4gIDwvZGl2PlxuICBgYGBcblxuICBJdCBpcyAqKmltcG9ydGFudCB0byBwcm92aWRlIGJvdGggYHRleHRQcm9wZXJ0eWAgYW5kIGB2YWx1ZVByb3BlcnR5YCB3aGVuIHdvcmtpbmcgd2l0aCBhIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24gYW5kXG4gIG9yIGN1c3RvbSB0ZW1wbGF0ZXMuKiogVGhleSBhcmUgbmVlZGVkIHRvIGtlZXAgdGhlIGNvbXBvbmVudCBhY2Nlc3NpYmxlIGFuZCBmb3IgdGhlIGV2ZW50cyAoZS5nLiBvblNlbGVjdCkgdG8ga2VlcFxuICB3b3JraW5nLlxuXG4gICMjIyBBYm91dCBQb2x5bWVyIDEueCBhbmQgMi54IENvbXBhdGliaWxpdHlcbiAgRnJvbSB2ZXJzaW9uIGAzLngueGAsIHRoaXMgY29tcG9uZW50IHdvcmsgd2l0aCBib3RoIFBvbHltZXIgMS43KyBvciBQb2x5bWVyIDIuMCsgUGxlYXNlIHRha2UgYSBsb29rIHRvIHRoZVxuICBbTUlHUkFUSU9OLm1kXSguL01JR1JBVElPTi5tZCkgZmlsZSB0aGF0IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgIyMjIEN1c3RvbSBzZWFyY2hcbiAgVGhpcyBjb21wb25lbnQgaGFzIHRoZSBwdWJsaWMgbWV0aG9kIGBxdWVyeUZuYCB0aGF0IGlzIGNhbGxlZCBpbiBlYWNoIGtleSBzdHJva2UgYW5kIGl0IGlzIHJlc3BvbnNpYmxlIHRvIHF1ZXJ5XG4gIGFsbCBpdGVtcyBpbiB0aGUgYHNvdXJjZWAgYW5kIHJldHVybnMgb25seSB0aG9zZSBpdGVtcyB0aGF0IG1hdGNoZXMgY2VydGFpbiBmaWx0ZXJpbmcgY3JpdGVyaWEuIEJ5IGRlZmF1bHQsIHRoaXNcbiAgY29tcG9uZW50IHNlYXJjaCBmb3IgaXRlbXMgdGhhdCBzdGFydCB3aXRoIHRoZSByZWNlbnQgcXVlcnkgKGNhc2UgaW5zZW5zaXRpdmUpLlxuICBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgcHJvdmlkaW5nIHlvdXIgb3duIHF1ZXJ5IGZ1bmN0aW9uLCBhcyBsb25nIGFzIHRoZXNlIHR3byByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGw6XG5cbiAgLSBUaGUgcXVlcnkgZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuXG4gIC0gVGhlIEFQSSBpcyByZXNwZWN0ZWQgYW5kIHRoZSBtZXRob2QgYWx3YXlzIHJldHVybiBhbiBBcnJheS5cblxuXG4gIFRoZSB0ZW1wbGF0ZSB1c2UgdG8gcmVuZGVyIGVhY2ggc3VnZ2VzdGlvbiBkZXBlbmRzIG9uIHRoZSBzdHJ1Y3R1cmUgb2YgZWFjaCBvYmplY3QgdGhhdCB0aGlzIG1ldGhvZCByZXR1cm5zLiBGb3IgdGhlXG4gIGRlZmF1bHQgdGVtcGxhdGUsIGVhY2ggc3VnZ2VzdGlvbiBzaG91bGQgZm9sbG93IHRoaXMgb2JqZWN0IHN0cnVjdHVyZTpcblxuICBgYGBcbiAgICB7XG4gICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgfVxuICBgYGBcblxuICBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIGEgbG9jYWwgZGF0YSBzb3VyY2UgaXMgdXNlZC4gV2hlbiB1c2luZyBhIGByZW1vdGVEYXRhU291cmNlYCB1c2VyIGlzIHJlc3BvbnNpYmxlIG9mXG4gIGRvaW5nIHRoZSBzZWFyY2ggYW5kIHNwZWNpZnkgc3VnZ2VzdGlvbnMgbWFudWFsbHkuXG5cbiAgIyMjIEN1c3RvbSB0ZW1wbGF0ZXNcbiAgQSB0ZW1wbGF0ZSBmb3IgZWFjaCBzdWdnZXN0aW9uIGNhbiBiZSBwcm92aWRlZCwgYnV0IGZvciBub3csIHRoZXJlIGFyZSBsaW1pdGF0aW9ucyBpbiB0aGUgd2F5IHlvdSBjYW4gY3VzdG9taXplXG4gIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHJlYWQgdGhlIHRoZSBmb2xsb3dpbmcgc2VjdGlvbnMgY2FyZWZ1bGx5LlxuICBJbiBvcmRlciB0byBzZXQgeW91ciBvd24gdGVtcGxhdGUsIHlvdSBuZWVkIHRvIGFkZCBhIGA8dGVtcGxhdGU+YCB0YWcgd2l0aCB0aGUgc2xvdCBuYW1lXG4gIGBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlYCBhbmQgYSBzdHJ1Y3R1cmUgZXF1aXZhbGVudCB0byB0aGUgb25lIHNob3duIGluIHRoZSBgPGFjY291bnQtYXV0b2NvbXBsZXRlPmAgY29tcG9uZW50IGluXG4gIHRoZSBkZW1vLlxuXG4gIFlvdSBuZWVkIHRvIGFsd2F5cyBtYWludGFpbiB0aGlzIHN0cnVjdHVyZS4gVGhlbiB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBwYXBlci1pdGVtLiBUaGVzZSBhcmUgdGhlIHJlYXNvbnNcbiAgd2h5IHlvdSBuZWVkIHRvIG1haW50YWluIGl0OlxuXG4gIC0gYG9uU2VsZWN0SGFuZGxlcmAgaXQgaXMgdmVyeSBpbXBvcnRhbnQgYmVjYXVzZSBpdCB3aWxsIG5vdGlmeSB0aGUgYGF1dG9jb21wbGV0ZWAgY29tcG9uZW50IHdoZW4gdXNlciBzZWxlY3RzIG9uZSBpdGVtLlxuICBJZiB5b3UgZG9uJ3QgYWRkIHRoaXMgb3B0aW9uLCB3aGVuIHVzZXIgY2xpY2tzIGluIG9uZSBvZiB0aGUgaXRlbXMsIG5vdGhpbmcgd2lsbCBoYXBwZW4uXG4gIC0gYGlkYCwgYHJvbGVgIGFuZCBgYXJpYS1zZWxlY3RlZGAgbmVlZCB0byBiZSB0aGVyZSBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zLiBJZiB5b3UgZG9uJ3Qgc2V0IHRoZW0sIHRoZSBjb21wb25lbnRcbiAgd2lsbCBjb250aW51ZSB3b3JraW5nIGJ1dCBpdCB3aWxsIG5vdCBiZSBhY2Nlc3NpYmxlIGZvciB1c2VyIHdpdGggZGlzYWJpbGl0aWVzLlxuXG5cbiAgSXQgaXMgaW1wb3J0YW50IHRvIGNsYXJpZnkgdGhhdCBtZXRob2RzIGBfb25TZWxlY3RgIGFuZCBgX2dldFN1Z2dlc3Rpb25JZGAgZG8gbm90IG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQuIFRoZXkgYXJlXG4gIHBhcnQgb2YgdGhlIGxvZ2ljIG9mIGBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNgLlxuXG4gIFdoZW4gcHJvdmlkaW5nIHlvdXIgb3duIGN1c3RvbSB0ZW1wbGF0ZSwgeW91IG1pZ2h0IGFsc28gbmVlZCB0byBwcm92aWRlIHlvdXIgb3duIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24uIFRoZSByZWFzb25cbiAgZm9yIHRoYXQgaXMgdGhhdCB0aGUgZGVmYXVsdCBzZWFyY2ggZnVuY3Rpb24gb25seSBleHBvc2VzIHRleHQgYW5kIHZhbHVlIGluIHRoZSByZXN1bHRzLiBJZiBlYWNoIGl0ZW0gaW4geW91ciBkYXRhXG4gIHNvdXJjZSBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLCB0aGVuIHlvdSB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gU2VlIHRoZSBjb2RlIG9mIGA8YWRkcmVzcy1hdXRvY29tcGxldGU+YFxuICBlbGVtZW50IGluIHRoZSBkZW1vIGZvbGRlciBmb3IgYSBjb21wbGV0ZSBleGFtcGxlLlxuXG4gIEFub3RoZXIgaW1wb3J0YW50IHRoaW5nIHRvIHBvaW50IG91dCBpcyByZWxhdGVkIHRvIHRoZSBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gaW4gdGhlIHJlc3VsdHMuIFRoZSBoZWlnaHQgb2ZcbiAgdGhlIHN1Z2dlc3Rpb24gdGVtcGxhdGUgY2hhbmdlcyBkeW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiBhIHN1Z2dlc3Rpb24gaXRlbS4gSG93ZXZlciwgdGhlIGZvbGxvd2luZ1xuICBhc3N1bXB0aW9ucyB3ZXJlIG1hZGU6XG4gIC0gQWxsIHN1Z2dlc3Rpb25zIGl0ZW1zIGhhdmUgdGhlIHNhbWUgaGVpZ2h0XG4gIC0gVGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gaXMgZml4ZWQgYW5kIGNhbiBiZSBkZXRlcm1pbmVkIGF0IGFueSB0aW1lLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gdXNlIGltYWdlcyBpbiB0aGVcbiAgcmVzdWx0cywgbWFrZSBzdXJlIHRoZXkgaGF2ZSBhIHBsYWNlaG9sZGVyIG9yIGEgZml4ZWQgaGVpZ2h0LlxuXG5cbiAgIyMjIFN0eWxpbmdcblxuICBgPHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucz5gIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGluc1xuICBmb3Igc3R5bGluZzpcblxuICBDdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbiAgLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbiAgYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IHBhcGVyIGl0ZW0gbWluIGhlaWdodCB8IGAzNnB4YFxuICBgLS1zdWdnZXN0aW9ucy13cmFwcGVyYCB8IG1peGluIHRvIGFwcGx5IHRvIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXIgfCBge31gXG4gIGAtLXN1Z2dlc3Rpb25zLWl0ZW1gIHwgbWl4aW4gdG8gYXBwbHkgdG8gdGhlIHN1Z2dlc3Rpb25zIGl0ZW1zIHwgYHt9YFxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG4gIFRoaXMgY29tcG9uZW50IGV4cG9zZXMgY2VydGFpbiBuZWNlc3NhcnkgdmFsdWVzIGluIG9yZGVyIHRvIG1ha2UgeW91ciBjb21wb25lbnQgYWNjZXNzaWJsZS4gV2hlbiBjaGVja2luZyB0aGUgQVJJQVxuICBzcGVjcywgaXQgaXMgc2FpZCB0aGF0IHlvdSBuZWVkIHRvIGluZm9ybSB1c2VycyBvZiB0aGUgZm9sbG93aW5nIGNoYW5nZXM6XG4gIC0gV2hldGhlciB0aGUgcG9wdXAgd2l0aCBzdWdnZXN0aW9ucyBpcyBvcGVuIG9yIG5vdC5cbiAgLSBJZCBvZiB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIGVsZW1lbnRcblxuIFlvdSBjYW4gYWNjZXNzIHRoZXNlIHZhbHVlcyB1c2luZyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IGBpc09wZW5gIGFuZCBgaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uYC4gVGhlIGlkIG9mIGVhY2hcbiBlbGVtZW50IGluIGhpZ2hsaWdodGVkU3VnZ2VzdGlvbiBhIHJhbmRvbSBhbmQgdW5pcXVlIGlkLlxuXG4gSW4gYWRkaXRpb24sIGFzIGxvbmcgYXMgZGV2ZWxvcGVycyBmb2xsb3cgdGhlIGdlbmVyYWwgc3RydWN0dXJlIG9mIGVhY2ggc3VnZ2VzdGlvbiB0ZW1wbGF0ZSwgdGhlIGZvbGxvd2luZyBBMTFZXG4gZmVhdHVyZXMgYXJlIHNldCBpbiBlYWNoIHN1Z2dlc3Rpb246XG4gLSBgcm9sZT1cIm9wdGlvblwiYFxuIC0gYGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlfGZhbHNlXCJgLiBUaGlzIHZhbHVlIHdpbGwgYmUgZmFsc2UgZm9yIGFsbCBzdWdnZXN0aW9uIGV4Y2VwdCBpbiB0aGUgb25lIHdoaWNoIGlzIGN1cnJlbnRseVxuIGhpZ2hsaWdodGVkLlxuXG4gIEBkZW1vIGRlbW8vcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLWRlbW8uaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBwYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNTJweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgICBAYXBwbHkgLS1zdWdnZXN0aW9ucy13cmFwcGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWl0ZW0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCAzNnB4KTtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXN1Z2dlc3Rpb25zLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW06aG92ZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaXRlbTpob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmFjdGl2ZSxcbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pdGVtLmFjdGl2ZSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBJRTExIHBhcGVyLWl0ZW0gbWluLWhlaWdodCBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaXRlbS9pc3N1ZXMvMzVcbiAgICAgICAqL1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDM2cHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2PlxuICAgICAgPCEtLSB1bnNlbGVjdGFibGUgaXMgbmVlZGVkIHRvIGZpeCBhbiBpc3N1ZSByZWxhdGVkIHRvIHRoZSBmb2N1cyBiZWluZyB0YWtlbiBhd2F5IHdoZW4gY2xpY2tpbmcgaW4gdGhlXG4gICAgICAgcmVzdWx0cyBzY3JvbGxiYXIgLS0+XG4gICAgICA8cGFwZXItbWF0ZXJpYWwgZWxldmF0aW9uPVwiMVwiIGlkPVwic3VnZ2VzdGlvbnNXcmFwcGVyXCIgdW5zZWxlY3RhYmxlPVwib25cIj48L3BhcGVyLW1hdGVyaWFsPlxuXG4gICAgICA8IS0tIERlZmF1bHQgc3VnZ2VzdGlvbiB0ZW1wbGF0ZSAtLT5cbiAgICAgIDx0ZW1wbGF0ZSBpZD1cImRlZmF1bHRUZW1wbGF0ZVwiPlxuICAgICAgICA8cGFwZXItaXRlbSBpZCQ9XCJbW19nZXRTdWdnZXN0aW9uSWQoaW5kZXgpXV1cIiByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgb24tdGFwPVwiX29uU2VsZWN0XCI+XG4gICAgICAgICAgPGRpdj5bW19nZXRJdGVtVGV4dChpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPHBhcGVyLXJpcHBsZT48L3BhcGVyLXJpcHBsZT5cbiAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICA8IS0tIEN1c3RvbSB0ZW1wbGF0ZSAtLT5cbiAgPHNsb3QgaWQ9XCJ0ZW1wbGF0ZXNcIiBuYW1lPVwiYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZVwiPjwvc2xvdD5cbiAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48c2NyaXB0PlxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIERJUkVDVElPTiA9IHtcbiAgICAgIFVQOiAndXAnLFxuICAgICAgRE9XTjogJ2Rvd24nXG4gICAgfTtcblxuICAgIHZhciBLRVlfQ09ERVMgPSB7XG4gICAgICBMRUZUX0FSUk9XOiAzNyxcbiAgICAgIFJJR0hUX0FSUk9XOiAzOSxcbiAgICAgIFVQX0FSUk9XOiAzOCxcbiAgICAgIERPV05fQVJST1c6IDQwLFxuICAgICAgRU5URVI6IDEzLFxuICAgICAgRVNDQVBFOiAyN1xuICAgIH07XG5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zJyxcblxuICAgICAgYmVoYXZpb3JzOiBbXG4gICAgICAgIFBvbHltZXIuVGVtcGxhdGl6ZXJcbiAgICAgIF0sXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElkIG9mIGlucHV0XG4gICAgICAgICAqL1xuICAgICAgICAnZm9yJzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdHJ1ZWAgaWYgdGhlIHN1Z2dlc3Rpb25zIGxpc3QgaXMgb3BlbiwgYGZhbHNlIG90aGVyd2lzZWBcbiAgICAgICAgICovXG4gICAgICAgIGlzT3Blbjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGxlbmd0aCB0byB0cmlnZ2VyIHN1Z2dlc3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWF4IG51bWJlciBvZiBzdWdnZXN0aW9ucyB0byBiZSBkaXNwbGF5ZWQgd2l0aG91dCBzY3JvbGxpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heFZpZXdhYmxlSXRlbXM6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdGV4dCBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dFByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdmFsdWUgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlUHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHNvdXJjZWAgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBvcHRpb25zIHRvIGV4ZWN1dGUgdGhlIGF1dG9jb21wbGV0ZSBmZWF0dXJlXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgb3B0aW9uLiBUaGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgZGVwZW5kcyBvbiB0aGVcbiAgICAgICAgICogIHN0cnVjdHVyZSBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGRhdGEgc291cmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb246IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIHRvIGEgcmVtb3RlIGRhdGEgc291cmNlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGVTb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCB0eXBlIHNlcGFyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnROYW1lc3BhY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICctJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb24uIFRoZSBzdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdCBpczpcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIHtcbiAgICAgICAgICogICAgZWxlbWVudElkOiBJRCAvLyBpZCBvZiB0aGUgaGlnaGxpZ2h0ZWQgRE9NIGVsZW1lbnRcbiAgICAgICAgICogICAgb3B0aW9uOiAvLyBoaWdobGlnaHRlZCBvcHRpb24gZGF0YVxuICAgICAgICAgKiB9XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIHZhbHVlOiB7fSxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgYXZhaWxhYmxlIGl0ZW1zLiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IHVzZWQgYnkgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLFxuICAgICAgICAgKiBpdCBpcyBhbHNvIGV4cG9zZWQgaGVyZSBzbyBpdCBpcyBwb3NzaWJsZSB0byBwcm92aWRlIGEgY3VzdG9tIHF1ZXJ5Rm4uXG4gICAgICAgICAqL1xuICAgICAgICAgcXVlcnlGbjoge1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgaXQgd2lsbCBhbHdheXMgaGlnaGxpZ2h0IHRoZSBmaXJzdCByZXN1bHQgZWFjaCB0aW1lIG5ldyBzdWdnZXN0aW9ucyBhcmUgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0Rmlyc3Q6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgX3N1Z2dlc3Rpb25zYCBBcnJheSB3aXRoIHRoZSBhY3R1YWwgc3VnZ2VzdGlvbnMgdG8gZGlzcGxheVxuICAgICAgICAgKi9cbiAgICAgICAgX3N1Z2dlc3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfb25TdWdnZXN0aW9uc0NoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB0aGUgcG9zaXRpb24gaW4gdGhlIHN1Z2dlc3Rpb25zIHBvcHVwIG9mIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgZWxlbWVudCwgYmVpbmcgYDBgIHRoZSBmaXJzdCBvbmUsXG4gICAgICAgICAqIGFuZCBgdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMWAgdGhlIHBvc2l0aW9uIG9mIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICovXG4gICAgICAgIF9jdXJyZW50SW5kZXg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsLiBUaGVuIHRoZSBgc2Nyb2xsVG9wYCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIG11bHRpcGx5aW5nIHRoZVxuICAgICAgICAgKiBgX2l0ZW1IZWlnaHRgIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICAgICAqL1xuICAgICAgICBfc2Nyb2xsSW5kZXg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBlbGVtZW50IGluIHBpeGVsc1xuICAgICAgICAgKi9cbiAgICAgICAgX2l0ZW1IZWlnaHQ6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDM2LFxuICAgICAgICAgIG9ic2VydmVyOiAnX2l0ZW1IZWlnaHRDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIF92YWx1ZToge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dDoge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyB2YWx1ZSBpcyB1c2VkIGFzIGEgYmFzZSB0byBnZW5lcmF0ZSB1bmlxdWUgaW5kaXZpZHVhbCBpZHMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIGVhY2ggc3VnZ2VzdGlvbiBmb3JcbiAgICAgICAgICogYWNjZXNzaWJpbGl0eSByZWFzb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX2lkSXRlbVNlZWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICdhcmlhLScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICctJyArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSksXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIGJpbmRlZCBmdW5jdGlvbnMgc28gd2UgY2FuIGNhbGwgcmVtb3ZlRXZlbnRMaXN0ZW5lciBvbiBlbGVtZW50IGRldGFjaGVkXG4gICAgICAgICAqL1xuICAgICAgICBfYmluZGVkRnVuY3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBfb25LZXlwcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgX29uRm9jdXM6IG51bGwsXG4gICAgICAgICAgICAgIF9vbkJsdXI6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRoZSBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gaGFzIGJlZW4gYWxyZWFkeSBjYWxjdWxhdGVkLlxuICAgICAgICAgKiBUaGUgYXNzdW1wdGlvbiBpcyB0aGF0IGl0ZW0gaGVpZ2h0IGlzIGZpeGVkIGFuZCBpdCB3aWxsIG5vdCBjaGFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBfaGFzSXRlbUhpZ2hCZWVuQ2FsY3VsYXRlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvIGF2b2lkIHVubmVjZXNzYXJ5IGFjY2VzcyB0byB0aGUgRE9NLCB3ZSBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHRlbXBsYXRlIGJlaW5nIHVzZWRcbiAgICAgICAgICovXG4gICAgICAgIF9fY3VzdG9tVHBsUmVmOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVsZW1lbnQgTGlmZWN5Y2xlXG5cbiAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCB0byBiZSBhYmxlIHRvIGFjY2VzcyBjb21wb25lbnQgbWV0aG9kcyBpbnNpZGUgdGhlIHRlbXBsYXRlcyB1c2VkIHdpdGggVGVtcGxhdGl6ZXJcbiAgICAgICAgdGhpcy5kYXRhSG9zdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gTmVlZCB0byBjYXB0dXJlIG1vdXNlZG93biB0byBwcmV2ZW50IHRoZSBmb2N1cyB0byBzd2l0Y2ggZnJvbSBpbnB1dCBmaWVsZCB3aGVuIHVzZXIgY2xpY2tzIGluIHRoZSBzY3JvbGxiYXJcbiAgICAgICAgLy8gYW5kIHRoZSBhdXRvc3VnZ2VzdCBpcyBhIGNoaWxkIG9mIGFuIGVsZW1lbnQgd2l0aCB0YWJpbmRleC5cbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIGVuZm9yY2UgdGhhdCBkYXRhSG9zdCBpcyB0aGUgc3VnZ2VzdGlvbnMgYW5kIG5vdCB0aGUgY3VzdG9tIHBvbHltZXIgZWxlbWVudCB3aGVyZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgLy8gaXMgZGVmaW5lZC4gSWYgd2UgZG8gbm90IGRvIHRoaXMsIGl0IHdvbid0IGJlIHBvc3NpYmxlIHRvIGFjY2VzcyBwYXBlclN1Z2dlc3Rpb25zIGZyb20gdGhlIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGFjaGlldmUgdGhpcyB3aXRob3V0IG1vZGlmeWluZyBQb2x5bWVyIGludGVybmFsIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5fc3VnZ2VzdGlvblRlbXBsYXRlLl9fZGF0YUhvc3QgPSB0aGlzO1xuICAgICAgICB0aGlzLnRlbXBsYXRpemUodGhpcy5fc3VnZ2VzdGlvblRlbXBsYXRlKTtcbiAgICAgIH0sXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5mb3IpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgaW5wdXQgZmllbGQgd2l0aCBpZDogJyArIHRoaXMuZm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25LZXlwcmVzcyA9IHRoaXMuX29uS2V5cHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbktleXByZXNzKTtcbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uRm9jdXMpO1xuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIpO1xuICAgICAgfSxcblxuICAgICAgZGV0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEZWJvdW5jZXIoJ19vblN1Z2dlc3Rpb25DaGFuZ2VkJyk7XG5cbiAgICAgICAgdGhpcy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uS2V5cHJlc3MpO1xuICAgICAgICB0aGlzLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25Gb2N1cyk7XG4gICAgICAgIHRoaXMuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uQmx1cik7XG5cbiAgICAgICAgdGhpcy5faW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9fY3VzdG9tVHBsUmVmID0gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVsZW1lbnQgQmVoYXZpb3JcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIHRleHQgcHJvcGVydHkgZnJvbSB0aGUgc3VnZ2VzdGlvblxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN1Z2dlc3Rpb24gVGhlIHN1Z2dlc3Rpb24gaXRlbVxuICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICBfZ2V0SXRlbVRleHQ6IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9uW3RoaXMudGV4dFByb3BlcnR5XTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hvdyB0aGUgc3VnZ2VzdGlvbnMgd3JhcHBlclxuICAgICAgICovXG4gICAgICBfc2hvd1N1Z2dlc3Rpb25zV3JhcHBlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNXcmFwcGVyID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcjtcblxuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZSB0aGUgc3VnZ2VzdGlvbnMgd3JhcHBlclxuICAgICAgICovXG4gICAgICBfaGlkZVN1Z2dlc3Rpb25zV3JhcHBlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNXcmFwcGVyID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcjtcblxuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uID0ge307XG5cbiAgICAgICAgdGhpcy5fY2xlYXJTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgX2hhbmRsZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW90ZVNvdXJjZSkgdGhpcy5fY3JlYXRlU3VnZ2VzdGlvbnMoZXZlbnQpO1xuICAgICAgICBlbHNlIHRoaXMuX3JlbW90ZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICBfcmVtb3RlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5wdXQudmFsdWU7XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB2YWx1ZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2NoYW5nZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9iaW5kU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgaWYgKGFyci5sZW5ndGggJiYgYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IGFycjtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2NyZWF0ZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX3Njcm9sbEluZGV4ID0gMDtcblxuICAgICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgLy8gU2VhcmNoIGZvciB0aGUgd29yZCBpbiB0aGUgc291cmNlIHByb3BlcnRpZXMuXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIENhbGwgcXVlcnlGbi4gVXNlciBjYW4gb3ZlcnJpZGUgcXVlcnlGbigpIHRvIHByb3ZpZGUgY3VzdG9tIHNlYXJjaCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMucXVlcnlGbih0aGlzLnNvdXJjZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQgX3N1Z2dlc3Rpb25UZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19jdXN0b21UcGxSZWYpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2N1c3RvbVRwbFJlZjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuX19jdXN0b21UcGxSZWYgPSBjdXN0b21UZW1wbGF0ZS5sZW5ndGggPiAwID8gY3VzdG9tVGVtcGxhdGVbMF0gOiB0aGlzLiQuZGVmYXVsdFRlbXBsYXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9fY3VzdG9tVHBsUmVmO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW5kZXIgc3VnZ2VzdGlvbnMgaW4gdGhlIHN1Z2dlc3Rpb25zV3JhcHBlciBjb250YWluZXJcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHN1Z2dlc3Rpb25zIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHN1Z2dlc3Rpb25zIHRvIGJlIHJlbmRlcmVkLiBUaGlzIHZhbHVlIGlzIG5vdCBvcHRpb25hbCwgc29cbiAgICAgICAqICAgIGluIGNhc2Ugbm8gc3VnZ2VzdGlvbnMgbmVlZCB0byBiZSByZW5kZXJlZCwgeW91IHNob3VsZCBlaXRoZXIgbm90IGNhbGwgdGhpcyBtZXRob2Qgb3IgcHJvdmlkZSBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAqL1xuICAgICAgX3JlbmRlclN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gUG9seW1lci5kb20odGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcik7XG4gICAgICAgIHZhciBpc1BvbHltZXIxID0gIVBvbHltZXIuRWxlbWVudDtcblxuICAgICAgICB0aGlzLl9jbGVhclN1Z2dlc3Rpb25zKCk7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChzdWdnZXN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0LCBpbmRleCkge1xuICAgICAgICAgIC8vIGNsb25lIHRoZSB0ZW1wbGF0ZSBhbmQgYmluZCB3aXRoIHRoZSBtb2RlbFxuICAgICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc3RhbXAoKTtcbiAgICAgICAgICBjbG9uZS5pdGVtID0gcmVzdWx0O1xuICAgICAgICAgIGNsb25lLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAvLyBEaWZmZXJlbnQgc3RhbXBpbmcgbW9kZSBiYXNlZCBvbiBQb2x5bWVyIHZlcnNpb25cbiAgICAgICAgICBpZiAoaXNQb2x5bWVyMSkge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUucm9vdC5xdWVyeVNlbGVjdG9yKCcqJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZS5yb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG5cbiAgICAgIF9jbGVhclN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IFBvbHltZXIuZG9tKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIpLFxuICAgICAgICAgIGxhc3Q7XG4gICAgICAgIHdoaWxlIChsYXN0ID0gc3VnZ2VzdGlvbnNDb250YWluZXIubGFzdENoaWxkKSBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuZXIgdG8gY2hhbmdlcyB0byBfc3VnZ2VzdGlvbnMgc3RhdGVcbiAgICAgICAqL1xuICAgICAgX29uU3VnZ2VzdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2UoJ19vblN1Z2dlc3Rpb25DaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlclN1Z2dlc3Rpb25zKHRoaXMuX3N1Z2dlc3Rpb25zKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93U3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuXG4gICAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcblxuICAgICAgICAgIGlmICghdGhpcy5faGFzSXRlbUhpZ2hCZWVuQ2FsY3VsYXRlZCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQgPSB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWl0ZW0nKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIG1heEhlaWdodCBvZiBzdWdnZXN0aW9ucyB3cmFwcGVyIGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSByZXN1bHRcbiAgICAgICAgICAgICAgdGhpcy5faXRlbUhlaWdodCA9IGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgIHRoaXMuX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodEZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3Rpb246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLl9zdWdnZXN0aW9uc1tpbmRleF07XG5cbiAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBzZWxlY3RlZE9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgIHRoaXMuX2VtcHR5SXRlbXMoKTtcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQoc2VsZWN0ZWRPcHRpb24sICdzZWxlY3RlZCcpO1xuXG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBhbGwgc3VnZ2VzdGlvbiBlbGVtZW50c1xuICAgICAgICogQHJldHVybiB7QXJyYXl9IGEgbGlzdCBvZiBhbGwgc3VnZ2VzdGlvbiBlbGVtZW50c1xuICAgICAgICovXG4gICAgICBfZ2V0SXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgncGFwZXItaXRlbScpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbXB0eSB0aGUgbGlzdCBvZiBjdXJyZW50IHN1Z2dlc3Rpb25zIGJlaW5nIGRpc3BsYXllZFxuICAgICAgICovXG4gICAgICBfZW1wdHlJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgfSxcblxuICAgICAgX2dldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAoIWlkKSBpZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIHRoZSBhY3RpdmUgc3RhdGUgZnJvbSBhbGwgc3VnZ2VzdGlvbiBpdGVtc1xuICAgICAgICovXG4gICAgICBfcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgW10uc2xpY2UuY2FsbChpdGVtcykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEtleSBwcmVzcyBldmVudCBoYW5kbGVyXG4gICAgICAgKi9cbiAgICAgIF9vbktleXByZXNzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOX0FSUk9XOlxuICAgICAgICAgIHRoaXMuX21vdmVIaWdobGlnaHRlZChESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS0VZX0NPREVTLlVQX0FSUk9XOlxuICAgICAgICAgIHRoaXMuX21vdmVIaWdobGlnaHRlZChESVJFQ1RJT04uVVApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjpcbiAgICAgICAgICB0aGlzLl9rZXllbnRlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5FU0NBUEU6XG4gICAgICAgICAgdGhpcy5faGlkZVN1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEZvciBsZWZ0IGFuZCByaWdodCBhcnJvdywgY29tcG9uZW50IHNob3VsZCBkbyBub3RoaW5nXG4gICAgICAgIGNhc2UgS0VZX0NPREVTLkxFRlRfQVJST1c6XG4gICAgICAgICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgICAgIGNhc2UgS0VZX0NPREVTLlJJR0hUX0FSUk9XOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVN1Z2dlc3Rpb25zKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUga2V5IEVOVEVSIHByZXNzIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9rZXllbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snICYmIHRoaXMuX2N1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY3VycmVudEluZGV4O1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogIE1vdmUgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgc3VnZ2VzdGlvbiB1cCBvciBkb3duXG4gICAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBQb3NzaWJsZSB2YWx1ZXMgYXJlIERJUkVDVElPTi5VUCBvciBESVJFQ1RJT04uRE9XTlxuICAgICAgICovXG4gICAgICBfbW92ZUhpZ2hsaWdodGVkOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKCk7XG5cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW1iZXJPZkl0ZW1zID0gaXRlbXMubGVuZ3RoIC0gMTtcblxuICAgICAgICB2YXIgaXNGaXJzdEl0ZW0gPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IDA7XG4gICAgICAgIHZhciBpc0xhc3RJdGVtID0gdGhpcy5fY3VycmVudEluZGV4ID09PSBudW1iZXJPZkl0ZW1zO1xuICAgICAgICB2YXIgaXNOb0l0ZW1IaWdobGlnaHRlZCA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gLTE7XG5cbiAgICAgICAgaWYgKChpc05vSXRlbUhpZ2hsaWdodGVkIHx8IGlzRmlyc3RJdGVtKSAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IG51bWJlck9mSXRlbXM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMYXN0SXRlbSAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOID8gMSA6IC0xO1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleCArIG1vZGlmaWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZ2hsaWdodGVkT3B0aW9uID0gdGhpcy5fc3VnZ2VzdGlvbnNbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgICAgdmFyIGhpZ2hsaWdodGVkSXRlbSA9IGl0ZW1zW3RoaXMuX2N1cnJlbnRJbmRleF07XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlQWN0aXZlKGl0ZW1zKTtcblxuICAgICAgICBoaWdobGlnaHRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgIHRoaXMuX3NldEhpZ2hsaWdodGVkU3VnZ2VzdGlvbihoaWdobGlnaHRlZE9wdGlvbiwgaGlnaGxpZ2h0ZWRJdGVtLmlkKTtcblxuICAgICAgICB0aGlzLl9zY3JvbGwoZGlyZWN0aW9uKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTW92ZSBzY3JvbGwgKGlmIG5lZWRlZCkgdG8gZGlzcGxheSB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIGxpc3QuXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIERpcmVjdGlvbiB0byBzY3JvbGwuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYERJUkVDVElPTi5VUGAgYW5kIGBESVJFQ1RJT04uRE9XTmAuXG4gICAgICAgKi9cbiAgICAgIF9zY3JvbGw6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIG5ld1Njcm9sbFZhbHVlLCBpc1NlbGVjdGVkT3V0T2ZWaWV3O1xuXG4gICAgICAgIHZhciB2aWV3SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggLSB0aGlzLl9zY3JvbGxJbmRleDtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgb25seSB3aGVuIHVzZXIgc3dpdGNoIGZyb20gbGFzdCBpdGVtIHRvIGZpcnN0IG9uZVxuICAgICAgICB2YXIgaXNGaXJzdEl0ZW1BbmRPdXRPZlZpZXcgPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IDAgJiYgdmlld0luZGV4IDwgMDtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgb25seSB3aGVuIHVzZXIgc3dpdGNoIGZyb20gZmlyc3Qgb3Igbm8gaXRlbSB0byBsYXN0IG9uZVxuICAgICAgICB2YXIgaXNMYXN0SXRlbUFuZE91dE9mVmlldyA9XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID09PSB0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggLSAxICYmIHZpZXdJbmRleCA+PSB0aGlzLm1heFZpZXdhYmxlSXRlbXM7XG5cbiAgICAgICAgaWYgKGlzRmlyc3RJdGVtQW5kT3V0T2ZWaWV3ICYmIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IDA7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMYXN0SXRlbUFuZE91dE9mVmlldyAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSB0aGlzLl9zY3JvbGxJbmRleCAtIDE7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHZpZXdJbmRleCA8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSB0aGlzLl9zY3JvbGxJbmRleCArIDE7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHZpZXdJbmRleCA+PSB0aGlzLm1heFZpZXdhYmxlSXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IHdoZW4gdGhlIGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQgaXMgb3V0IG9mIHZpZXcsIHdlIG5lZWQgdG8gbW92ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbFxuICAgICAgICBpZiAoaXNTZWxlY3RlZE91dE9mVmlldykge1xuICAgICAgICAgIHRoaXMuX3Njcm9sbEluZGV4ID0gbmV3U2Nyb2xsVmFsdWU7XG4gICAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxJbmRleCAqIHRoaXMuX2l0ZW1IZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzZXQgc2Nyb2xsIGJhY2sgdG8gemVyb1xuICAgICAgICovXG4gICAgICBfcmVzZXRTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgc3VnZ2VzdGlvblxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiBEYXRhIG9mIHRoZSBoaWdobGlnaHRlZCBvcHRpb25cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgaWQgb2YgdGhlIGhpZ2hsaWdodGVkIGRvbSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBfc2V0SGlnaGxpZ2h0ZWRTdWdnZXN0aW9uOiBmdW5jdGlvbiAob3B0aW9uLCBlbGVtZW50SWQpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZFN1Z2dlc3Rpb24gPSB7XG4gICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgZWxlbWVudElkOiBlbGVtZW50SWQsXG4gICAgICAgICAgdGV4dFZhbHVlOiBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgX2ZpcmVFdmVudDogZnVuY3Rpb24gKG9wdGlvbiwgZXZ0KSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuX2dldElkKCk7XG4gICAgICAgIHZhciBldmVudCA9ICdhdXRvY29tcGxldGUnICsgdGhpcy5ldmVudE5hbWVzcGFjZSArIGV2dDtcblxuICAgICAgICB0aGlzLmZpcmUoZXZlbnQsIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvblt0aGlzLnZhbHVlUHJvcGVydHldIHx8IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldIHx8IG9wdGlvbi50ZXh0LFxuICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9vblNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpLmluZGV4O1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgb25CbHVyIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9vbkJsdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQob3B0aW9uLCAnYmx1cicpO1xuXG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBvbkZvY3VzIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9vbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVTdWdnZXN0aW9ucyhldmVudCk7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2ZvY3VzJyk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGEgc3VnZ2VzdGlvbiBpZCBmb3IgYSBjZXJ0YWluIGluZGV4XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggUG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIGxpc3RcbiAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgdW5pcXVlIGlkIGJhc2VkIG9uIHRoZSBfaWRJdGVtU2VlZCBhbmQgdGhlIHBvc2l0aW9uIG9mIHRoYXQgZWxlbWVudCBpbiB0aGUgc3VnZ2VzdGlvbnMgcG9wdXBcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9nZXRTdWdnZXN0aW9uSWQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWRJdGVtU2VlZCArICctJyArIGluZGV4O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGl0ZW0gaGVpZ2h0IGlzIGNoYW5nZWQsIHRoZSBtYXhIZWlnaHQgb2YgdGhlIHN1Z2dlc3Rpb25XcmFwcGVyIG5lZWQgdG8gYmUgdXBkYXRlZFxuICAgICAgICovXG4gICAgICBfaXRlbUhlaWdodENoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLl9pdGVtSGVpZ2h0ICogdGhpcy5tYXhWaWV3YWJsZUl0ZW1zICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgKiBQVUJMSUNcbiAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3VnZ2VzdGlvbnNcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAgICovXG4gICAgICBzdWdnZXN0aW9uczogZnVuY3Rpb24gKGFycikge1xuICAgICAgICB0aGlzLl9iaW5kU3VnZ2VzdGlvbnMoYXJyKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZXMgdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKi9cbiAgICAgIGhpZGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLl9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFF1ZXJ5IGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBlYWNoIGtleXN0cm9rZSB0byBxdWVyeSB0aGUgZGF0YSBzb3VyY2UgYW5kIHJldHVybnMgdGhlIHN1Z2dlc3Rpb25zIHRoYXQgbWF0Y2hlc1xuICAgICAgICogd2l0aCB0aGUgZmlsdGVyaW5nIGxvZ2ljIGluY2x1ZGVkLlxuICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF0YXNvdXJjZSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBpdGVtcyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgQ3VycmVudCB2YWx1ZSBpbiB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBvbmx5IHRob3NlIGl0ZW1zIGluIHRoZSBkYXRhIHNvdXJjZSB0aGF0IG1hdGNoZXMgdGhlIGZpbHRlcmluZyBsb2dpYy5cbiAgICAgICAqL1xuICAgICAgcXVlcnlGbjogZnVuY3Rpb24gKGRhdGFzb3VyY2UsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBxdWVyeVJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGRhdGFzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHZhciBvYmpUZXh0LCBvYmpWYWx1ZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9ialRleHQgPSBpdGVtW3RoaXMudGV4dFByb3BlcnR5XTtcbiAgICAgICAgICAgIG9ialZhbHVlID0gaXRlbVt0aGlzLnZhbHVlUHJvcGVydHldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpUZXh0ID0gaXRlbS50b1N0cmluZygpO1xuICAgICAgICAgICAgb2JqVmFsdWUgPSBvYmpUZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvYmpUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHJlc3VsdCBvYmplY3QgbWF0Y2hlcyB3aXRoIHRoZSBjdXJyZW50IHRlbXBsYXRlLiBGb3IgY3VzdG9tIHRlbXBsYXRlcywgeW91XG4gICAgICAgICAgICAvLyBtaWdodCBuZWVkIHRvIHJldHVybiBtb3JlIGRhdGFcbiAgICAgICAgICAgIHF1ZXJ5UmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgICAgICAgICB2YWx1ZTogb2JqVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1zZWxlY3RlZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGNoYW5nZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtY2hhbmdlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgZm9jdXNcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWZvY3VzXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgYmx1clxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IHJlc2V0L2NsZWFyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1yZXNldC1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG4gICAgfSk7XG4gIH0oKSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmh0bWxcIj5cblxuPCEtLVxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuLS0+XG5cbjxzY3JpcHQ+XG4gIC8qKiBAcG9seW1lckJlaGF2aW9yIFBvbHltZXIuUGFwZXJJdGVtQmVoYXZpb3IgKi9cbiAgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvckltcGwgPSB7XG4gICAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgdGFiaW5kZXg6ICcwJ1xuICAgIH1cbiAgfTtcblxuICAvKiogQHBvbHltZXJCZWhhdmlvciAqL1xuICBQb2x5bWVyLlBhcGVySXRlbUJlaGF2aW9yID0gW1xuICAgIFBvbHltZXIuSXJvbkJ1dHRvblN0YXRlLFxuICAgIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBQb2x5bWVyLlBhcGVySXRlbUJlaGF2aW9ySW1wbFxuICBdO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5odG1sIiwiXG5yZXF1aXJlKCcuLi9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9wYXBlci1zdHlsZXMvY29sb3IuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPi5wYXBlci1pdGVtLDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDp2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsNDhweCk7cGFkZGluZzowIDE2cHh9LnBhcGVyLWl0ZW17QGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO2JvcmRlcjpub25lO291dGxpbmU6MDtiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmxlZnR9LnBhcGVyLWl0ZW1baGlkZGVuXSw6aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lIWltcG9ydGFudH0ucGFwZXItaXRlbS5pcm9uLXNlbGVjdGVkLDpob3N0KC5pcm9uLXNlbGVjdGVkKXtmb250LXdlaWdodDp2YXIoLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodCxib2xkKTtAYXBwbHkgLS1wYXBlci1pdGVtLXNlbGVjdGVkO30ucGFwZXItaXRlbVtkaXNhYmxlZF0sOmhvc3QoW2Rpc2FibGVkXSl7Y29sb3I6dmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcix2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7QGFwcGx5IC0tcGFwZXItaXRlbS1kaXNhYmxlZDt9LnBhcGVyLWl0ZW06Zm9jdXMsOmhvc3QoOmZvY3VzKXtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOjA7QGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkO30ucGFwZXItaXRlbTpmb2N1czpiZWZvcmUsOmhvc3QoOmZvY3VzKTpiZWZvcmV7QGFwcGx5IC0tbGF5b3V0LWZpdDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtjb250ZW50OicnO29wYWNpdHk6dmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO3BvaW50ZXItZXZlbnRzOm5vbmU7QGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZTt9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuaHRtbCIsIlxucmVxdWlyZSgnLi4vcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+Omhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdChbZWxldmF0aW9uPVxcXCIxXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMmRwO306aG9zdChbZWxldmF0aW9uPVxcXCIyXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO306aG9zdChbZWxldmF0aW9uPVxcXCIzXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO306aG9zdChbZWxldmF0aW9uPVxcXCI0XFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tOGRwO306aG9zdChbZWxldmF0aW9uPVxcXCI1XFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDt9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcy5odG1sIiwiXG5yZXF1aXJlKCcuLi9pcm9uLWljb24vaXJvbi1pY29uLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGlyb24taWNvbnNldC1zdmcgbmFtZT1tYXBzIHNpemU9MjQ+IDxzdmc+PGRlZnM+IDxnIGlkPWFkZC1sb2NhdGlvbj48cGF0aCBkPVxcXCJNMTIgMkM4LjE0IDIgNSA1LjE0IDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ni0zLjE0LTctNy03em00IDhoLTN2M2gtMnYtM0g4VjhoM1Y1aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iZWVuaGVyZT48cGF0aCBkPVxcXCJNMTkgMUg1Yy0xLjEgMC0xLjk5LjktMS45OSAyTDMgMTUuOTNjMCAuNjkuMzUgMS4zLjg4IDEuNjZMMTIgMjNsOC4xMS01LjQxYy41My0uMzYuODgtLjk3Ljg4LTEuNjZMMjEgM2MwLTEuMS0uOS0yLTItMnptLTkgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTMuMTdsNy41OS03LjU5TDE5IDdsLTkgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnM+PHBhdGggZD1cXFwiTTIxLjcxIDExLjI5bC05LTljLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC05IDljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOSA5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw5LTljLjM5LS4zOC4zOS0xLjAxIDAtMS40MXpNMTQgMTQuNVYxMmgtNHYzSDh2LTRjMC0uNTUuNDUtMSAxLTFoNVY3LjVsMy41IDMuNS0zLjUgMy41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1iaWtlPjxwYXRoIGQ9XFxcIk0xNS41IDUuNWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTUgMTJjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDUgNS0yLjIgNS01LTIuMi01LTUtNXptMCA4LjVjLTEuOSAwLTMuNS0xLjYtMy41LTMuNXMxLjYtMy41IDMuNS0zLjUgMy41IDEuNiAzLjUgMy41LTEuNiAzLjUtMy41IDMuNXptNS44LTEwbDIuNC0yLjQuOC44YzEuMyAxLjMgMyAyLjEgNS4xIDIuMVY5Yy0xLjUgMC0yLjctLjYtMy42LTEuNWwtMS45LTEuOWMtLjUtLjQtMS0uNi0xLjYtLjZzLTEuMS4yLTEuNC42TDcuOCA4LjRjLS40LjQtLjYuOS0uNiAxLjQgMCAuNi4yIDEuMS42IDEuNEwxMSAxNHY1aDJ2LTYuMmwtMi4yLTIuM3pNMTkgMTJjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDUgNS0yLjIgNS01LTIuMi01LTUtNXptMCA4LjVjLTEuOSAwLTMuNS0xLjYtMy41LTMuNXMxLjYtMy41IDMuNS0zLjUgMy41IDEuNiAzLjUgMy41LTEuNiAzLjUtMy41IDMuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtYm9hdD48cGF0aCBkPVxcXCJNMjAgMjFjLTEuMzkgMC0yLjc4LS40Ny00LTEuMzItMi40NCAxLjcxLTUuNTYgMS43MS04IDBDNi43OCAyMC41MyA1LjM5IDIxIDQgMjFIMnYyaDJjMS4zOCAwIDIuNzQtLjM1IDQtLjk5IDIuNTIgMS4yOSA1LjQ4IDEuMjkgOCAwIDEuMjYuNjUgMi42Mi45OSA0IC45OWgydi0yaC0yek0zLjk1IDE5SDRjMS42IDAgMy4wMi0uODggNC0yIC45OCAxLjEyIDIuNCAyIDQgMnMzLjAyLS44OCA0LTJjLjk4IDEuMTIgMi40IDIgNCAyaC4wNWwxLjg5LTYuNjhjLjA4LS4yNi4wNi0uNTQtLjA2LS43OHMtLjM0LS40Mi0uNi0uNUwyMCAxMC42MlY2YzAtMS4xLS45LTItMi0yaC0zVjFIOXYzSDZjLTEuMSAwLTIgLjktMiAydjQuNjJsLTEuMjkuNDJjLS4yNi4wOC0uNDguMjYtLjYuNXMtLjE1LjUyLS4wNi43OEwzLjk1IDE5ek02IDZoMTJ2My45N0wxMiA4IDYgOS45N1Y2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1idXM+PHBhdGggZD1cXFwiTTQgMTZjMCAuODguMzkgMS42NyAxIDIuMjJWMjBjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoOHYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi0xLjc4Yy42MS0uNTUgMS0xLjM0IDEtMi4yMlY2YzAtMy41LTMuNTgtNC04LTRzLTggLjUtOCA0djEwem0zLjUgMWMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em05IDBjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xLjUtNkg2VjZoMTJ2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtY2FyPjxwYXRoIGQ9XFxcIk0xOC45MiA2LjAxQzE4LjcyIDUuNDIgMTguMTYgNSAxNy41IDVoLTExYy0uNjYgMC0xLjIxLjQyLTEuNDIgMS4wMUwzIDEydjhjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoMTJ2MWMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtOGwtMi4wOC01Ljk5ek02LjUgMTZjLS44MyAwLTEuNS0uNjctMS41LTEuNVM1LjY3IDEzIDYuNSAxM3MxLjUuNjcgMS41IDEuNVM3LjMzIDE2IDYuNSAxNnptMTEgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6TTUgMTFsMS41LTQuNWgxMUwxOSAxMUg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1yYWlsd2F5PjxwYXRoIGQ9XFxcIk00IDE1LjVDNCAxNy40MyA1LjU3IDE5IDcuNSAxOUw2IDIwLjV2LjVoMTJ2LS41TDE2LjUgMTljMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVWNWMwLTMuNS0zLjU4LTQtOC00cy04IC41LTggNHYxMC41em04IDEuNWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTYtN0g2VjVoMTJ2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtcnVuPjxwYXRoIGQ9XFxcIk0xMy40OSA1LjQ4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTMuNiAxMy45bDEtNC40IDIuMSAydjZoMnYtNy41bC0yLjEtMiAuNi0zYzEuMyAxLjUgMy4zIDIuNSA1LjUgMi41di0yYy0xLjkgMC0zLjUtMS00LjMtMi40bC0xLTEuNmMtLjQtLjYtMS0xLTEuNy0xLS4zIDAtLjUuMS0uOC4xbC01LjIgMi4ydjQuN2gydi0zLjRsMS44LS43LTEuNiA4LjEtNC45LTEtLjQgMiA3IDEuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtc3Vid2F5PjxwYXRoIGQ9XFxcIk0xMiAyYy00LjQyIDAtOCAuNS04IDR2OS41QzQgMTcuNDMgNS41NyAxOSA3LjUgMTlMNiAyMC41di41aDEydi0uNUwxNi41IDE5YzEuOTMgMCAzLjUtMS41NyAzLjUtMy41VjZjMC0zLjUtMy41OC00LTgtNHpNNy41IDE3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNi42NyAxNCA3LjUgMTRzMS41LjY3IDEuNSAxLjVTOC4zMyAxNyA3LjUgMTd6bTMuNS02SDZWNmg1djV6bTUuNSA2Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXptMS41LTZoLTVWNmg1djV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kaXJlY3Rpb25zLXRyYW5zaXQ+PHBhdGggZD1cXFwiTTEyIDJjLTQuNDIgMC04IC41LTggNHY5LjVDNCAxNy40MyA1LjU3IDE5IDcuNSAxOUw2IDIwLjV2LjVoMTJ2LS41TDE2LjUgMTljMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVWNmMwLTMuNS0zLjU4LTQtOC00ek03LjUgMTdjLS44MyAwLTEuNS0uNjctMS41LTEuNVM2LjY3IDE0IDcuNSAxNHMxLjUuNjcgMS41IDEuNVM4LjMzIDE3IDcuNSAxN3ptMy41LTZINlY2aDV2NXptNS41IDZjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xLjUtNmgtNVY2aDV2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtd2Fsaz48cGF0aCBkPVxcXCJNMTMuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek05LjggOC45TDcgMjNoMi4xbDEuOC04IDIuMSAydjZoMnYtNy41bC0yLjEtMiAuNi0zQzE0LjggMTIgMTYuOCAxMyAxOSAxM3YtMmMtMS45IDAtMy41LTEtNC4zLTIuNGwtMS0xLjZjLS40LS42LTEtMS0xLjctMS0uMyAwLS41LjEtLjguMUw2IDguM1YxM2gyVjkuNmwxLjgtLjdcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVkaXQtbG9jYXRpb24+PHBhdGggZD1cXFwiTTEyIDJDOC4xNCAyIDUgNS4xNCA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODYtMy4xNC03LTctN3ptLTEuNTYgMTBIOXYtMS40NGwzLjM1LTMuMzQgMS40MyAxLjQzTDEwLjQ0IDEyem00LjQ1LTQuNDVsLS43LjctMS40NC0xLjQ0LjctLjdjLjE1LS4xNS4zOS0uMTUuNTQgMGwuOS45Yy4xNS4xNS4xNS4zOSAwIC41NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2LXN0YXRpb24+PHBhdGggZD1cXFwiTTE5Ljc3IDcuMjNsLjAxLS4wMS0zLjcyLTMuNzJMMTUgNC41NmwyLjExIDIuMTFjLS45NC4zNi0xLjYxIDEuMjYtMS42MSAyLjMzIDAgMS4zOCAxLjEyIDIuNSAyLjUgMi41LjM2IDAgLjY5LS4wOCAxLS4yMXY3LjIxYzAgLjU1LS40NSAxLTEgMXMtMS0uNDUtMS0xVjE0YzAtMS4xLS45LTItMi0yaC0xVjVjMC0xLjEtLjktMi0yLTJINmMtMS4xIDAtMiAuOS0yIDJ2MTZoMTB2LTcuNWgxLjV2NWMwIDEuMzggMS4xMiAyLjUgMi41IDIuNXMyLjUtMS4xMiAyLjUtMi41VjljMC0uNjktLjI4LTEuMzItLjczLTEuNzd6TTE4IDEwYy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6TTggMTh2LTQuNUg2TDEwIDZ2NWgybC00IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlnaHQ+PHBhdGggZD1cXFwiTTEwLjE4IDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjEgMTZ2LTJsLTgtNVYzLjVjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDIuNjcgMTAgMy41VjlsLTggNXYybDgtMi41VjE5bC0yIDEuNVYyMmwzLjUtMSAzLjUgMXYtMS41TDEzIDE5di01LjVsOCAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob3RlbD48cGF0aCBkPVxcXCJNNyAxM2MxLjY2IDAgMy0xLjM0IDMtM1M4LjY2IDcgNyA3cy0zIDEuMzQtMyAzIDEuMzQgMyAzIDN6bTEyLTZoLTh2N0gzVjVIMXYxNWgydi0zaDE4djNoMnYtOWMwLTIuMjEtMS43OS00LTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxheWVycz48cGF0aCBkPVxcXCJNMTEuOTkgMTguNTRsLTcuMzctNS43M0wzIDE0LjA3bDkgNyA5LTctMS42My0xLjI3LTcuMzggNS43NHpNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGF5ZXJzLWNsZWFyPjxwYXRoIGQ9XFxcIk0xOS44MSAxNC45OWwxLjE5LS45Mi0xLjQzLTEuNDMtMS4xOS45MiAxLjQzIDEuNDN6bS0uNDUtNC43MkwyMSA5bC05LTctMi45MSAyLjI3IDcuODcgNy44OCAyLjQtMS44OHpNMy4yNyAxTDIgMi4yN2w0LjIyIDQuMjJMMyA5bDEuNjMgMS4yN0wxMiAxNmwyLjEtMS42MyAxLjQzIDEuNDNMMTIgMTguNTRsLTcuMzctNS43M0wzIDE0LjA3bDkgNyA0Ljk1LTMuODVMMjAuNzMgMjEgMjIgMTkuNzMgMy4yNyAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtYWN0aXZpdHk+PHBhdGggZD1cXFwiTTIwIDEyYzAtMS4xLjktMiAyLTJWNmMwLTEuMS0uOS0yLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjRjMS4xIDAgMS45OS45IDEuOTkgMnMtLjg5IDItMiAydjRjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMnYtNGMtMS4xIDAtMi0uOS0yLTJ6bS00LjQyIDQuOEwxMiAxNC41bC0zLjU4IDIuMyAxLjA4LTQuMTItMy4yOS0yLjY5IDQuMjQtLjI1TDEyIDUuOGwxLjU0IDMuOTUgNC4yNC4yNS0zLjI5IDIuNjkgMS4wOSA0LjExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtYWlycG9ydD48cGF0aCBkPVxcXCJNMjEgMTZ2LTJsLTgtNVYzLjVjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDIuNjcgMTAgMy41VjlsLTggNXYybDgtMi41VjE5bC0yIDEuNVYyMmwzLjUtMSAzLjUgMXYtMS41TDEzIDE5di01LjVsOCAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1hdG0+PHBhdGggZD1cXFwiTTExIDE3aDJ2LTFoMWMuNTUgMCAxLS40NSAxLTF2LTNjMC0uNTUtLjQ1LTEtMS0xaC0zdi0xaDRWOGgtMlY3aC0ydjFoLTFjLS41NSAwLTEgLjQ1LTEgMXYzYzAgLjU1LjQ1IDEgMSAxaDN2MUg5djJoMnYxem05LTEzSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZjMC0xLjExLS44OS0yLTItMnptMCAxNEg0VjZoMTZ2MTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1iYXI+PHBhdGggZD1cXFwiTTIxIDVWM0gzdjJsOCA5djVINnYyaDEydi0yaC01di01bDgtOXpNNy40MyA3TDUuNjYgNWgxMi42OWwtMS43OCAySDcuNDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1jYWZlPjxwYXRoIGQ9XFxcIk0yMCAzSDR2MTBjMCAyLjIxIDEuNzkgNCA0IDRoNmMyLjIxIDAgNC0xLjc5IDQtNHYtM2gyYzEuMTEgMCAyLS44OSAyLTJWNWMwLTEuMTEtLjg5LTItMi0yem0wIDVoLTJWNWgydjN6TTIgMjFoMTh2LTJIMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtY2FyLXdhc2g+PHBhdGggZD1cXFwiTTE3IDVjLjgzIDAgMS41LS42NyAxLjUtMS41IDAtMS0xLjUtMi43LTEuNS0yLjdzLTEuNSAxLjctMS41IDIuN2MwIC44My42NyAxLjUgMS41IDEuNXptLTUgMGMuODMgMCAxLjUtLjY3IDEuNS0xLjUgMC0xLTEuNS0yLjctMS41LTIuN3MtMS41IDEuNy0xLjUgMi43YzAgLjgzLjY3IDEuNSAxLjUgMS41ek03IDVjLjgzIDAgMS41LS42NyAxLjUtMS41QzguNSAyLjUgNyAuOCA3IC44UzUuNSAyLjUgNS41IDMuNUM1LjUgNC4zMyA2LjE3IDUgNyA1em0xMS45MiAzLjAxQzE4LjcyIDcuNDIgMTguMTYgNyAxNy41IDdoLTExYy0uNjYgMC0xLjIxLjQyLTEuNDIgMS4wMUwzIDE0djhjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoMTJ2MWMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtOGwtMi4wOC01Ljk5ek02LjUgMThjLS44MyAwLTEuNS0uNjctMS41LTEuNVM1LjY3IDE1IDYuNSAxNXMxLjUuNjcgMS41IDEuNVM3LjMzIDE4IDYuNSAxOHptMTEgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6TTUgMTNsMS41LTQuNWgxMUwxOSAxM0g1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtY29udmVuaWVuY2Utc3RvcmU+PHBhdGggZD1cXFwiTTE5IDdWNEg1djNIMnYxM2g4di00aDR2NGg4VjdoLTN6bS04IDNIOXYxaDJ2MUg4VjloMlY4SDhWN2gzdjN6bTUgMmgtMXYtMmgtMlY3aDF2MmgxVjdoMXY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtZGluaW5nPjxwYXRoIGQ9XFxcIk04LjEgMTMuMzRsMi44My0yLjgzTDMuOTEgMy41Yy0xLjU2IDEuNTYtMS41NiA0LjA5IDAgNS42Nmw0LjE5IDQuMTh6bTYuNzgtMS44MWMxLjUzLjcxIDMuNjguMjEgNS4yNy0xLjM4IDEuOTEtMS45MSAyLjI4LTQuNjUuODEtNi4xMi0xLjQ2LTEuNDYtNC4yLTEuMS02LjEyLjgxLTEuNTkgMS41OS0yLjA5IDMuNzQtMS4zOCA1LjI3TDMuNyAxOS44N2wxLjQxIDEuNDFMMTIgMTQuNDFsNi44OCA2Ljg4IDEuNDEtMS40MUwxMy40MSAxM2wxLjQ3LTEuNDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1kcmluaz48cGF0aCBkPVxcXCJNMyAybDIuMDEgMTguMjNDNS4xMyAyMS4yMyA1Ljk3IDIyIDcgMjJoMTBjMS4wMyAwIDEuODctLjc3IDEuOTktMS43N0wyMSAySDN6bTkgMTdjLTEuNjYgMC0zLTEuMzQtMy0zIDAtMiAzLTUuNCAzLTUuNHMzIDMuNCAzIDUuNGMwIDEuNjYtMS4zNCAzLTMgM3ptNi4zMy0xMUg1LjY3bC0uNDQtNGgxMy41M2wtLjQzIDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1mbG9yaXN0PjxwYXRoIGQ9XFxcIk0xMiAyMmM0Ljk3IDAgOS00LjAzIDktOS00Ljk3IDAtOSA0LjAzLTkgOXpNNS42IDEwLjI1YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41LjUzIDAgMS4wMS0uMTYgMS40Mi0uNDRsLS4wMi4xOWMwIDEuMzggMS4xMiAyLjUgMi41IDIuNXMyLjUtMS4xMiAyLjUtMi41bC0uMDItLjE5Yy40LjI4Ljg5LjQ0IDEuNDIuNDQgMS4zOCAwIDIuNS0xLjEyIDIuNS0yLjUgMC0xLS41OS0xLjg1LTEuNDMtMi4yNS44NC0uNCAxLjQzLTEuMjUgMS40My0yLjI1IDAtMS4zOC0xLjEyLTIuNS0yLjUtMi41LS41MyAwLTEuMDEuMTYtMS40Mi40NGwuMDItLjE5QzE0LjUgMi4xMiAxMy4zOCAxIDEyIDFTOS41IDIuMTIgOS41IDMuNWwuMDIuMTljLS40LS4yOC0uODktLjQ0LTEuNDItLjQ0LTEuMzggMC0yLjUgMS4xMi0yLjUgMi41IDAgMSAuNTkgMS44NSAxLjQzIDIuMjUtLjg0LjQtMS40MyAxLjI1LTEuNDMgMi4yNXpNMTIgNS41YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41cy0xLjEyIDIuNS0yLjUgMi41UzkuNSA5LjM4IDkuNSA4czEuMTItMi41IDIuNS0yLjV6TTMgMTNjMCA0Ljk3IDQuMDMgOSA5IDkgMC00Ljk3LTQuMDMtOS05LTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1nYXMtc3RhdGlvbj48cGF0aCBkPVxcXCJNMTkuNzcgNy4yM2wuMDEtLjAxLTMuNzItMy43MkwxNSA0LjU2bDIuMTEgMi4xMWMtLjk0LjM2LTEuNjEgMS4yNi0xLjYxIDIuMzMgMCAxLjM4IDEuMTIgMi41IDIuNSAyLjUuMzYgMCAuNjktLjA4IDEtLjIxdjcuMjFjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFWMTRjMC0xLjEtLjktMi0yLTJoLTFWNWMwLTEuMS0uOS0yLTItMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmgxMHYtNy41aDEuNXY1YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41czIuNS0xLjEyIDIuNS0yLjVWOWMwLS42OS0uMjgtMS4zMi0uNzMtMS43N3pNMTIgMTBINlY1aDZ2NXptNiAwYy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1ncm9jZXJ5LXN0b3JlPjxwYXRoIGQ9XFxcIk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtaG9zcGl0YWw+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTEgMTFoLTR2NGgtNHYtNEg2di00aDRWNmg0djRoNHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtaG90ZWw+PHBhdGggZD1cXFwiTTcgMTNjMS42NiAwIDMtMS4zNCAzLTNTOC42NiA3IDcgN3MtMyAxLjM0LTMgMyAxLjM0IDMgMyAzem0xMi02aC04djdIM1Y1SDF2MTVoMnYtM2gxOHYzaDJ2LTljMC0yLjIxLTEuNzktNC00LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1sYXVuZHJ5LXNlcnZpY2U+PHBhdGggZD1cXFwiTTkuMTcgMTYuODNjMS41NiAxLjU2IDQuMSAxLjU2IDUuNjYgMCAxLjU2LTEuNTYgMS41Ni00LjEgMC01LjY2bC01LjY2IDUuNjZ6TTE4IDIuMDFMNiAyYy0xLjExIDAtMiAuODktMiAydjE2YzAgMS4xMS44OSAyIDIgMmgxMmMxLjExIDAgMi0uODkgMi0yVjRjMC0xLjExLS44OS0xLjk5LTItMS45OXpNMTAgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek03IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNSAxNmMtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNiA2IDIuNjkgNiA2LTIuNjkgNi02IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1saWJyYXJ5PjxwYXRoIGQ9XFxcIk0xMiAxMS41NUM5LjY0IDkuMzUgNi40OCA4IDMgOHYxMWMzLjQ4IDAgNi42NCAxLjM1IDkgMy41NSAyLjM2LTIuMTkgNS41Mi0zLjU1IDktMy41NVY4Yy0zLjQ4IDAtNi42NCAxLjM1LTkgMy41NXpNMTIgOGMxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtMy0zIDEuMzQtMyAzIDEuMzQgMyAzIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1tYWxsPjxwYXRoIGQ9XFxcIk0xOSA2aC0yYzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZINWMtMS4xIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnptLTctM2MxLjY2IDAgMyAxLjM0IDMgM0g5YzAtMS42NiAxLjM0LTMgMy0zem0wIDEwYy0yLjc2IDAtNS0yLjI0LTUtNWgyYzAgMS42NiAxLjM0IDMgMyAzczMtMS4zNCAzLTNoMmMwIDIuNzYtMi4yNCA1LTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLW1vdmllcz48cGF0aCBkPVxcXCJNMTggM3YyaC0yVjNIOHYySDZWM0g0djE4aDJ2LTJoMnYyaDh2LTJoMnYyaDJWM2gtMnpNOCAxN0g2di0yaDJ2MnptMC00SDZ2LTJoMnYyem0wLTRINlY3aDJ2MnptMTAgOGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLW9mZmVyPjxwYXRoIGQ9XFxcIk0yMS40MSAxMS41OGwtOS05QzEyLjA1IDIuMjIgMTEuNTUgMiAxMSAySDRjLTEuMSAwLTIgLjktMiAydjdjMCAuNTUuMjIgMS4wNS41OSAxLjQybDkgOWMuMzYuMzYuODYuNTggMS40MS41OC41NSAwIDEuMDUtLjIyIDEuNDEtLjU5bDctN2MuMzctLjM2LjU5LS44Ni41OS0xLjQxIDAtLjU1LS4yMy0xLjA2LS41OS0xLjQyek01LjUgN0M0LjY3IDcgNCA2LjMzIDQgNS41UzQuNjcgNCA1LjUgNCA3IDQuNjcgNyA1LjUgNi4zMyA3IDUuNSA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtcGFya2luZz48cGF0aCBkPVxcXCJNMTMgM0g2djE4aDR2LTZoM2MzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNnptLjIgOEgxMFY3aDMuMmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1waGFybWFjeT48cGF0aCBkPVxcXCJNMjEgNWgtMi42NGwxLjE0LTMuMTRMMTcuMTUgMWwtMS40NiA0SDN2MmwyIDYtMiA2djJoMTh2LTJsLTItNiAyLTZWNXptLTUgOWgtM3YzaC0ydi0zSDh2LTJoM1Y5aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1waG9uZT48cGF0aCBkPVxcXCJNNi42MiAxMC43OWMxLjQ0IDIuODMgMy43NiA1LjE0IDYuNTkgNi41OWwyLjItMi4yYy4yNy0uMjcuNjctLjM2IDEuMDItLjI0IDEuMTIuMzcgMi4zMy41NyAzLjU3LjU3LjU1IDAgMSAuNDUgMSAxVjIwYzAgLjU1LS40NSAxLTEgMS05LjM5IDAtMTctNy42MS0xNy0xNyAwLS41NS40NS0xIDEtMWgzLjVjLjU1IDAgMSAuNDUgMSAxIDAgMS4yNS4yIDIuNDUuNTcgMy41Ny4xMS4zNS4wMy43NC0uMjUgMS4wMmwtMi4yIDIuMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXBpenphPjxwYXRoIGQ9XFxcIk0xMiAyQzguNDMgMiA1LjIzIDMuNTQgMy4wMSA2TDEyIDIybDguOTktMTZDMTguNzggMy41NSAxNS41NyAyIDEyIDJ6TTcgN2MwLTEuMS45LTIgMi0yczIgLjkgMiAyLS45IDItMiAyLTItLjktMi0yem01IDhjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtcGxheT48cGF0aCBkPVxcXCJNMjAgMTJjMC0xLjEuOS0yIDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJ2NGMxLjEgMCAxLjk5LjkgMS45OSAycy0uODkgMi0yIDJ2NGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0ydi00Yy0xLjEgMC0yLS45LTItMnptLTQuNDIgNC44TDEyIDE0LjVsLTMuNTggMi4zIDEuMDgtNC4xMi0zLjI5LTIuNjkgNC4yNC0uMjVMMTIgNS44bDEuNTQgMy45NSA0LjI0LjI1LTMuMjkgMi42OSAxLjA5IDQuMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wb3N0LW9mZmljZT48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wcmludHNob3A+PHBhdGggZD1cXFwiTTE5IDhINWMtMS42NiAwLTMgMS4zNC0zIDN2Nmg0djRoMTJ2LTRoNHYtNmMwLTEuNjYtMS4zNC0zLTMtM3ptLTMgMTFIOHYtNWg4djV6bTMtN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxem0tMS05SDZ2NGgxMlYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtc2VlPjxjaXJjbGUgY3g9MTIgY3k9MTIgcj0zLjI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1zaGlwcGluZz48cGF0aCBkPVxcXCJNMjAgOGgtM1Y0SDNjLTEuMSAwLTIgLjktMiAydjExaDJjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtM2g2YzAgMS42NiAxLjM0IDMgMyAzczMtMS4zNCAzLTNoMnYtNWwtMy00ek02IDE4LjVjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xMy41LTlsMS45NiAyLjVIMTdWOS41aDIuNXptLTEuNSA5Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXRheGk+PHBhdGggZD1cXFwiTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNUgxNVYzSDl2Mkg2LjVjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTJ2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTMgNi41IDEzczEuNS42NyAxLjUgMS41UzcuMzMgMTYgNi41IDE2em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwxLjUtNC41aDExTDE5IDExSDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXA+PHBhdGggZD1cXFwiTTIwLjUgM2wtLjE2LjAzTDE1IDUuMSA5IDMgMy4zNiA0LjljLS4yMS4wNy0uMzYuMjUtLjM2LjQ4VjIwLjVjMCAuMjguMjIuNS41LjVsLjE2LS4wM0w5IDE4LjlsNiAyLjEgNS42NC0xLjljLjIxLS4wNy4zNi0uMjUuMzYtLjQ4VjMuNWMwLS4yOC0uMjItLjUtLjUtLjV6TTE1IDE5bC02LTIuMTFWNWw2IDIuMTFWMTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1teS1sb2NhdGlvbj48cGF0aCBkPVxcXCJNMTIgOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTguOTQgM2MtLjQ2LTQuMTctMy43Ny03LjQ4LTcuOTQtNy45NFYxaC0ydjIuMDZDNi44MyAzLjUyIDMuNTIgNi44MyAzLjA2IDExSDF2MmgyLjA2Yy40NiA0LjE3IDMuNzcgNy40OCA3Ljk0IDcuOTRWMjNoMnYtMi4wNmM0LjE3LS40NiA3LjQ4LTMuNzcgNy45NC03Ljk0SDIzdi0yaC0yLjA2ek0xMiAxOWMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uYXZpZ2F0aW9uPjxwYXRoIGQ9XFxcIk0xMiAyTDQuNSAyMC4yOWwuNzEuNzFMMTIgMThsNi43OSAzIC43MS0uNzF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uZWFyLW1lPjxwYXRoIGQ9XFxcIk0yMSAzTDMgMTAuNTN2Ljk4bDYuODQgMi42NUwxMi40OCAyMWguOThMMjEgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcnNvbi1waW4+PHBhdGggZD1cXFwiTTE5IDJINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDRsMyAzIDMtM2g0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDMuM2MxLjQ5IDAgMi43IDEuMjEgMi43IDIuNyAwIDEuNDktMS4yMSAyLjctMi43IDIuNy0xLjQ5IDAtMi43LTEuMjEtMi43LTIuNyAwLTEuNDkgMS4yMS0yLjcgMi43LTIuN3pNMTggMTZINnYtLjljMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xdi45elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVyc29uLXBpbi1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDOC4xNCAyIDUgNS4xNCA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODYtMy4xNC03LTctN3ptMCAyYzEuMSAwIDIgLjkgMiAyIDAgMS4xMS0uOSAyLTIgMnMtMi0uODktMi0yYzAtMS4xLjktMiAyLTJ6bTAgMTBjLTEuNjcgMC0zLjE0LS44NS00LTIuMTUuMDItMS4zMiAyLjY3LTIuMDUgNC0yLjA1czMuOTguNzMgNCAyLjA1Yy0uODYgMS4zLTIuMzMgMi4xNS00IDIuMTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waW4tZHJvcD48cGF0aCBkPVxcXCJNMTggOGMwLTMuMzEtMi42OS02LTYtNlM2IDQuNjkgNiA4YzAgNC41IDYgMTEgNiAxMXM2LTYuNSA2LTExem0tOCAwYzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjg5IDItMiAyYy0xLjEgMC0yLS45LTItMnpNNSAyMHYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wbGFjZT48cGF0aCBkPVxcXCJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYXRlLXJldmlldz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgMTR2LTIuNDdsNi44OC02Ljg4Yy4yLS4yLjUxLS4yLjcxIDBsMS43NyAxLjc3Yy4yLjIuMi41MSAwIC43MUw4LjQ3IDE0SDZ6bTEyIDBoLTcuNWwyLTJIMTh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlc3RhdXJhbnQ+PHBhdGggZD1cXFwiTTExIDlIOVYySDd2N0g1VjJIM3Y3YzAgMi4xMiAxLjY2IDMuODQgMy43NSAzLjk3VjIyaDIuNXYtOS4wM0MxMS4zNCAxMi44NCAxMyAxMS4xMiAxMyA5VjJoLTJ2N3ptNS0zdjhoMi41djhIMjFWMmMtMi43NiAwLTUgMi4yNC01IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0YXVyYW50LW1lbnU+PHBhdGggZD1cXFwiTTguMSAxMy4zNGwyLjgzLTIuODNMMy45MSAzLjVjLTEuNTYgMS41Ni0xLjU2IDQuMDkgMCA1LjY2bDQuMTkgNC4xOHptNi43OC0xLjgxYzEuNTMuNzEgMy42OC4yMSA1LjI3LTEuMzggMS45MS0xLjkxIDIuMjgtNC42NS44MS02LjEyLTEuNDYtMS40Ni00LjItMS4xLTYuMTIuODEtMS41OSAxLjU5LTIuMDkgMy43NC0xLjM4IDUuMjdMMy43IDE5Ljg3bDEuNDEgMS40MUwxMiAxNC40MWw2Ljg4IDYuODggMS40MS0xLjQxTDEzLjQxIDEzbDEuNDctMS40N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNhdGVsbGl0ZT48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTUgNC45OWgzQzggNi42NSA2LjY2IDggNSA4VjQuOTl6TTUgMTJ2LTJjMi43NiAwIDUtMi4yNSA1LTUuMDFoMkMxMiA4Ljg2IDguODcgMTIgNSAxMnptMCA2bDMuNS00LjUgMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RvcmUtbWFsbC1kaXJlY3Rvcnk+PHBhdGggZD1cXFwiTTIwIDRINHYyaDE2VjR6bTEgMTB2LTJsLTEtNUg0bC0xIDV2MmgxdjZoMTB2LTZoNHY2aDJ2LTZoMXptLTkgNEg2di00aDZ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0cmVldHZpZXc+PHBhdGggZD1cXFwiTTEyLjU2IDE0LjMzYy0uMzQuMjctLjU2LjctLjU2IDEuMTdWMjFoN2MxLjEgMCAyLS45IDItMnYtNS45OGMtLjk0LS4zMy0xLjk1LS41Mi0zLS41Mi0yLjAzIDAtMy45My43LTUuNDQgMS44M3pcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PTE4IGN5PTYgcj01PjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMS41IDZjMC0xLjA4LjI3LTIuMS43NC0zSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgLjU1LjIzIDEuMDUuNTkgMS40MWw5LjgyLTkuODJDMTIuMjMgOS40MiAxMS41IDcuOCAxMS41IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJ3YXk+PGNpcmNsZSBjeD0xNS41IGN5PTE2IHI9MT48L2NpcmNsZT48Y2lyY2xlIGN4PTguNSBjeT0xNiByPTE+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTcuMDEgOWgxMHY1aC0xMHpNMTcuOCAyLjhDMTYgMi4wOSAxMy44NiAyIDEyIDJjLTEuODYgMC00IC4wOS01LjguOEMzLjUzIDMuODQgMiA2LjA1IDIgOC44NlYyMmgyMFY4Ljg2YzAtMi44MS0xLjUzLTUuMDItNC4yLTYuMDZ6bS4yIDEzLjA4YzAgMS40NS0xLjE4IDIuNjItMi42MyAyLjYybDEuMTMgMS4xMlYyMEgxNWwtMS41LTEuNWgtMi44M0w5LjE3IDIwSDcuNXYtLjM4bDEuMTItMS4xMkM3LjE4IDE4LjUgNiAxNy4zMiA2IDE1Ljg4VjljMC0yLjYzIDMtMyA2LTMgMy4zMiAwIDYgLjM4IDYgM3Y2Ljg4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGVycmFpbj48cGF0aCBkPVxcXCJNMTQgNmwtMy43NSA1IDIuODUgMy44LTEuNiAxLjJDOS44MSAxMy43NSA3IDEwIDcgMTBsLTYgOGgyMkwxNCA2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhZmZpYz48cGF0aCBkPVxcXCJNMjAgMTBoLTNWOC44NmMxLjcyLS40NSAzLTIgMy0zLjg2aC0zVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDRjMCAxLjg2IDEuMjggMy40MSAzIDMuODZWMTBINGMwIDEuODYgMS4yOCAzLjQxIDMgMy44NlYxNUg0YzAgMS44NiAxLjI4IDMuNDEgMyAzLjg2VjIwYzAgLjU1LjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xdi0xLjE0YzEuNzItLjQ1IDMtMiAzLTMuODZoLTN2LTEuMTRjMS43Mi0uNDUgMy0yIDMtMy44NnptLTggOWMtMS4xMSAwLTItLjktMi0ycy44OS0yIDItMmMxLjEgMCAyIC45IDIgMnMtLjg5IDItMiAyem0wLTVjLTEuMTEgMC0yLS45LTItMnMuODktMiAyLTJjMS4xIDAgMiAuOSAyIDJzLS44OSAyLTIgMnptMC01Yy0xLjExIDAtMi0uOS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMSAwIDIgLjg5IDIgMiAwIDEuMS0uODkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFpbj48cGF0aCBkPVxcXCJNMTIgMmMtNCAwLTggLjUtOCA0djkuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY2YzAtMy41LTMuNTgtNC04LTR6TTcuNSAxN2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em0zLjUtN0g2VjZoNXY0em0yIDBWNmg1djRoLTV6bTMuNSA3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYW0+PHBhdGggZD1cXFwiTTE5IDE2Ljk0VjguNWMwLTIuNzktMi42MS0zLjQtNi4wMS0zLjQ5bC43Ni0xLjUxSDE3VjJIN3YxLjVoNC43NWwtLjc2IDEuNTJDNy44NiA1LjExIDUgNS43MyA1IDguNXY4LjQ0YzAgMS40NSAxLjE5IDIuNjYgMi41OSAyLjk3TDYgMjEuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAyMGgtLjA4YzEuNjkgMCAyLjU4LTEuMzcgMi41OC0zLjA2em0tNyAxLjU2Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXptNS00LjVIN1Y5aDEwdjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFuc2Zlci13aXRoaW4tYS1zdGF0aW9uPjxwYXRoIGQ9XFxcIk0xNi40OSAxNS41di0xLjc1TDE0IDE2LjI1bDIuNDkgMi41VjE3SDIydi0xLjV6bTMuMDIgNC4yNUgxNHYxLjVoNS41MVYyM0wyMiAyMC41IDE5LjUxIDE4ek05LjUgNS41YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnpNNS43NSA4LjlMMyAyM2gyLjFsMS43NS04TDkgMTd2Nmgydi03LjU1TDguOTUgMTMuNGwuNi0zQzEwLjg1IDEyIDEyLjggMTMgMTUgMTN2LTJjLTEuODUgMC0zLjQ1LTEtNC4zNS0yLjQ1bC0uOTUtMS42QzkuMzUgNi4zNSA4LjcgNiA4IDZjLS4yNSAwLS41LjA1LS43NS4xNUwyIDguM1YxM2gyVjkuNjVsMS43NS0uNzVcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXpvb20tb3V0LW1hcD48cGF0aCBkPVxcXCJNMTUgM2wyLjMgMi4zLTIuODkgMi44NyAxLjQyIDEuNDJMMTguNyA2LjcgMjEgOVYzek0zIDlsMi4zLTIuMyAyLjg3IDIuODkgMS40Mi0xLjQyTDYuNyA1LjMgOSAzSDN6bTYgMTJsLTIuMy0yLjMgMi44OS0yLjg3LTEuNDItMS40Mkw1LjMgMTcuMyAzIDE1djZ6bTEyLTZsLTIuMyAyLjMtMi44Ny0yLjg5LTEuNDIgMS40MiAyLjg5IDIuODdMMTUgMjFoNnpcXFwiPjwvcGF0aD48L2c+IDwvZGVmcz48L3N2Zz4gPC9pcm9uLWljb25zZXQtc3ZnPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9tYXBzLWljb25zLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9