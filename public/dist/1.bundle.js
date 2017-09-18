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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGlzaGVycy1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9mb250LXJvYm90by9yb2JvdG8uaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWxpc3QvaXJvbi1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1yZXF1ZXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24taWNvbnMvbWFwcy1pY29ucy5odG1sIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWdpc3Rlckh0bWxUZW1wbGF0ZSIsInRvQm9keSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQTBFSTs7SUFBcUI7Ozs7Ozs7Ozs7O3dCQXNCWixLQUFFO0FBQ1AsYUFBVSxNQUNaO0FBQ087Ozs0QkFBVSxXQUFFO0FBQ2QsVUFBVSxVQUFRLFNBQUc7QUFFZixxREFFVDtBQUhPLE9BQVA7QUFLTyxlQUVUO0FBSFMsT0FBUDtBQUlZOzs7bUNBQU0sT0FBRTtBQUNoQixXQUFJLElBQU8sUUFBTyxNQUFPLE9BQVMsU0FBSyxLQUM3QztBQUNGOzs7d0JBckNrQjtBQUFFLGFBQTBCO0FBRXRCOzs7d0JBQUU7QUFDdEI7QUFDVyxtQkFBUTtBQUNiO0FBQ0UsZ0JBQU87QUFDTCxrQkFFUDs7QUFKSztBQUtGO0FBQ0UsZ0JBQVE7QUFDSixvQkFBc0I7QUFDekI7QUFDRSxtQkFNYjtBQVBhO0FBSEg7O0FBUEQ7QUFrQk47Ozs7RUF0QitCLFFBQ3BCOztBQXVDVixPQUFlLGVBQU8sT0FBZSxlQUFHLElBQWlCLGdCOzs7Ozs7Ozs7OztBQ2pIbkUsbUJBQUFBLENBQVEsQ0FBUjs7QUFFQSxtQkFBQUEsQ0FBUSxHQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJDLE1BQXJCLENBQTRCLHV0RUFBNUIsRTs7Ozs7Ozs7O0FDTkEsbUJBQUFGLENBQVEsQ0FBUjs7QUFF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UUFBbUIsb0JBQUUsQ0FDbkIsUUFBZ0IsaUJBQ2hCLFFBQWlCLGtCQUNqQixRQUNSLHVCOzs7Ozs7Ozs7QUNqQ0gsbUJBQUFGLENBQVEsQ0FBUjs7QUFFQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBLG1CQUFBQSxDQUFRLEVBQVI7O0FBRUEsbUJBQUFBLENBQVEsRUFBUjs7QUFFQSxJQUFNQyx1QkFBdUIsbUJBQUFELENBQVEsQ0FBUixDQUE3Qjs7QUFFQUMscUJBQXFCRSxRQUFyQixDQUE4QixvNUJBQTlCLEU7Ozs7Ozs7OztBQ1ZBLG1CQUFBSCxDQUFRLEVBQVI7O0FBRUEsSUFBTUMsdUJBQXVCLG1CQUFBRCxDQUFRLENBQVIsQ0FBN0I7O0FBRUFDLHFCQUFxQkUsUUFBckIsQ0FBOEIsa2FBQTlCLEU7Ozs7Ozs7OztBQ0pBLG1CQUFBSCxDQUFRLEVBQVI7O0FBRUEsbUJBQUFBLENBQVEsRUFBUjs7QUFFQSxJQUFNQyx1QkFBdUIsbUJBQUFELENBQVEsQ0FBUixDQUE3Qjs7QUFFQUMscUJBQXFCQyxNQUFyQixDQUE0QixxNmpCQUE1QixFIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG5AbGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XHJcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxyXG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xyXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxyXG4tLT5cclxuXHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1jYXJkL3BhcGVyLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWxpc3QvaXJvbi1saXN0Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24taWNvbnMvbWFwcy1pY29ucy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cInB1Ymxpc2hlcnMtbGlzdFwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICAgOmhvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpcm9uLWxpc3Qge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxjdXN0b20tc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxyXG4gICAgICAgIC5yYXRlLWhlYWRlciB7XHJcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhdGUtbmFtZSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZ3JleS02MDApO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5yYXRlLWljb24ge1xyXG4gICAgICAgICAgLS1pcm9uLWljb24tZmlsbC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAtLWlyb24taWNvbi1zdHJva2UtY29sb3I6IHZhcigtLXBhcGVyLWdyZXktNjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2N1c3RvbS1zdHlsZT5cclxuICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtd3JhcHBlclwiPlxyXG4gICAgICA8cGFwZXItaW5wdXQgaWQ9XCJzZWFyY2hcIiBsYWJlbD1cIlN1Y2hlXCIgc3R5bGU9XCJtYXgtd2lkdGg6NTAwcHhcIiB2YWx1ZT1cInt7ZmlsdGVyc3RyfX1cIj5cclxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJzZWFyY2hcIj48L3BhcGVyLWljb24tYnV0dG9uPlxyXG4gICAgICA8L3BhcGVyLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aXJvbi1hamF4IHVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIgb24tcmVzcG9uc2U9XCJoYW5kbGVSZXNwb25zZVwiIGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiBoYW5kbGUtYXM9XCJqc29uXCJcclxuICAgICAgbWV0aG9kPVwiUE9TVFwiIGJvZHk9W1tib2R5XV0gYXV0bz48L2lyb24tYWpheD5cclxuICAgIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxyXG4gICAgICA8dGVtcGxhdGU+XHJcbiAgICAgICAgPHBhcGVyLWNhcmQgY2xhc3M9XCJyYXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRlLWhlYWRlclwiPltbaW5jKGluZGV4KV1dLiBbW2l0ZW0ucHVibGlzaGVybmFtZV1dPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRlLW5hbWVcIj5bW2l0ZW0uY291bnRdXSBTcGllbGU8L2Rpdj5cclxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHJpZ2h0IGljb249XCJmYXZvcml0ZVwiPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwic3RhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3BhcGVyLWNhcmQ+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2lyb24tbGlzdD5cclxuICA8L3RlbXBsYXRlPlxyXG5cclxuICA8c2NyaXB0PlxyXG4gICAgY2xhc3MgUHVibGlzaGVyc0xpc3QgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xyXG4gICAgICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ3B1Ymxpc2hlcnMtbGlzdCc7IH1cclxuXHJcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZmlsdGVyc3RyOiBTdHJpbmcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBub3RpZnk6IHRydWVcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIGNvbXB1dGVkOiAnZ2V0Qm9keShmaWx0ZXJzdHIpJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICBxdWVyeTogJ3F1ZXJ5IHtwdWJsaXNoZXJzIHsgcHVibGlzaGVyaWQgcHVibGlzaGVybmFtZSBjb3VudCB9fSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGluYyhpZHgpIHtcclxuICAgICAgICByZXR1cm4gaWR4KzFcclxuICAgICAgfVxyXG4gICAgICBnZXRCb2R5KGZpbHRlclN0cikge1xyXG4gICAgICAgIGlmIChmaWx0ZXJTdHIubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcXVlcnk6IGBxdWVyeSB7cHVibGlzaGVycyhwdWJsaXNoZXJuYW1lOlwiJHtmaWx0ZXJTdHJ9XCIpIHsgcHVibGlzaGVyaWQgcHVibGlzaGVybmFtZSBjb3VudCB9fWBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcXVlcnk6IFwicHVibGlzaGVycyB7IHB1Ymxpc2hlcmlkIHB1Ymxpc2hlcm5hbWUgY291bnQgfVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXQoJ2RhdGEnLCBldmVudC5kZXRhaWwucmVzcG9uc2UuZGF0YS5wdWJsaXNoZXJzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShQdWJsaXNoZXJzTGlzdC5pcywgUHVibGlzaGVyc0xpc3QpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1Ymxpc2hlcnMtbGlzdC5odG1sIiwiXG5yZXF1aXJlKCcuLi9wb2x5bWVyL3BvbHltZXIuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9mb250LXJvYm90by9yb2JvdG8uaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8Y3VzdG9tLXN0eWxlPiA8c3R5bGUgaXM9Y3VzdG9tLXN0eWxlPmh0bWx7LS1wYXBlci1mb250LWNvbW1vbi1iYXNlOntmb250LWZhbWlseTpSb2JvdG8sTm90byxzYW5zLXNlcmlmOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWR9Oy0tcGFwZXItZm9udC1jb21tb24tY29kZTp7Zm9udC1mYW1pbHk6J1JvYm90byBNb25vJyxDb25zb2xhcyxNZW5sbyxtb25vc3BhY2U7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZH07LS1wYXBlci1mb250LWNvbW1vbi1leHBlbnNpdmUta2VybmluZzp7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5fTstLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDp7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfTstLXBhcGVyLWZvbnQtZGlzcGxheTQ6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxMTJweDtmb250LXdlaWdodDozMDA7bGV0dGVyLXNwYWNpbmc6LS4wNDRlbTtsaW5lLWhlaWdodDoxMjBweH07LS1wYXBlci1mb250LWRpc3BsYXkzOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6NTZweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LS4wMjZlbTtsaW5lLWhlaWdodDo2MHB4fTstLXBhcGVyLWZvbnQtZGlzcGxheTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7Zm9udC1zaXplOjQ1cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi0uMDE4ZW07bGluZS1oZWlnaHQ6NDhweH07LS1wYXBlci1mb250LWRpc3BsYXkxOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzotLjAxZW07bGluZS1oZWlnaHQ6NDBweH07LS1wYXBlci1mb250LWhlYWRsaW5lOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzotLjAxMmVtO2xpbmUtaGVpZ2h0OjMycHh9Oy0tcGFwZXItZm9udC10aXRsZTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjI4cHh9Oy0tcGFwZXItZm9udC1zdWJoZWFkOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyNHB4fTstLXBhcGVyLWZvbnQtYm9keTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjI0cHh9Oy0tcGFwZXItZm9udC1ib2R5MTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjBweH07LS1wYXBlci1mb250LWNhcHRpb246e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzouMDExZW07bGluZS1oZWlnaHQ6MjBweH07LS1wYXBlci1mb250LW1lbnU6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyNHB4fTstLXBhcGVyLWZvbnQtYnV0dG9uOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjAxOGVtO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTstLXBhcGVyLWZvbnQtY29kZTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWNvZGU7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjIwcHh9Oy0tcGFwZXItZm9udC1jb2RlMTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tY29kZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjBweH07fTwvc3R5bGU+IDwvY3VzdG9tLXN0eWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbCIsIlxucmVxdWlyZSgnLi4vcG9seW1lci9wb2x5bWVyLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGN1c3RvbS1zdHlsZT4gPHN0eWxlIGlzPWN1c3RvbS1zdHlsZT5odG1sey0tc2hhZG93LXRyYW5zaXRpb246e3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpfTstLXNoYWRvdy1ub25lOntib3gtc2hhZG93Om5vbmV9Oy0tc2hhZG93LWVsZXZhdGlvbi0yZHA6e2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKX07LS1zaGFkb3ctZWxldmF0aW9uLTNkcDp7Ym94LXNoYWRvdzowIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tNGRwOntib3gtc2hhZG93OjAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tNmRwOntib3gtc2hhZG93OjAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLThkcDp7Ym94LXNoYWRvdzowIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpLDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tMTJkcDp7Ym94LXNoYWRvdzowIDEycHggMTZweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIycHggM3B4IHJnYmEoMCwwLDAsLjEyKSwwIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA6e2JveC1zaGFkb3c6MCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMiksMCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tMjRkcDp7Ym94LXNoYWRvdzowIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKSwwIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjQpfTt9PC9zdHlsZT4gPC9jdXN0b20tc3R5bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvc2hhZG93Lmh0bWwiLCJcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPi5jYXJke21hcmdpbjoyNHB4O3BhZGRpbmc6MTZweDtjb2xvcjojNzU3NTc1O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMil9LmNpcmNsZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM1NTU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZGRkO2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjY0cHh9aDF7bWFyZ2luOjE2cHggMDtjb2xvcjojMjEyMTIxO2ZvbnQtc2l6ZToyMnB4fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1pbnB1dC9pcm9uLWlucHV0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1jb250YWluZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWVycm9yLmh0bWxcIj5cblxuPCEtLVxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dCBmaWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG4gICAgPHBhcGVyLWlucHV0IGNoYXItY291bnRlciBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWlucHV0XG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHRvIG1ha2UgYSBzdGFja2luZyBjb250ZXh0ICovXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0O1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgaWQ9XCJjb250YWluZXJcIlxuICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW19jb21wdXRlQWx3YXlzRmxvYXRMYWJlbChhbHdheXNGbG9hdExhYmVsLHBsYWNlaG9sZGVyKV1dXCJcbiAgICAgICAgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb3I9XCJpbnB1dFwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDxzcGFuIGlkPVwidGVtcGxhdGUtcGxhY2Vob2xkZXJcIj48L3NwYW4+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICA8L3RlbXBsYXRlPlxuXG4gIDwhLS0gVGhpcyBpcyBhIGZyZXNoIG5ldyBoZWxsIHRvIG1ha2UgdGhpcyBlbGVtZW50IGh5YnJpZC4gQmFzaWNhbGx5LCBpbiAyLjBcbiAgICB3ZSBsb3N0IGlzPSwgc28gdGhlIGV4YW1wbGUgc2FtZSB0ZW1wbGF0ZSBjYW4ndCBiZSB1c2VkIHdpdGggaXJvbi1pbnB1dCAxLjAgYW5kIDIuMC5cbiAgICBFeHBlY3Qgc29tZSBjb25kaXRpb25hbCBjb2RlIChlc3BlY2lhbGx5IGluIHRoZSB0ZXN0cykuXG4gICAtLT5cbiAgPHRlbXBsYXRlIGlkPVwidjBcIj5cbiAgICA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgaWQ9XCJpbnB1dFwiIHNsb3Q9XCJpbnB1dFwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiXG4gICAgICAgIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgIHRpdGxlJD1cIltbdGl0bGVdXVwiXG4gICAgICAgIGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBpbnZhbGlkPVwie3tpbnZhbGlkfX1cIlxuICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXQ9XCJbW3ByZXZlbnRJbnZhbGlkSW5wdXRdXVwiXG4gICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIlxuICAgICAgICB0eXBlJD1cIltbdHlwZV1dXCJcbiAgICAgICAgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCJcbiAgICAgICAgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiXG4gICAgICAgIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCJcbiAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICBtaW4kPVwiW1ttaW5dXVwiXG4gICAgICAgIG1heCQ9XCJbW21heF1dXCJcbiAgICAgICAgc3RlcCQ9XCJbW3N0ZXBdXVwiXG4gICAgICAgIG5hbWUkPVwiW1tuYW1lXV1cIlxuICAgICAgICBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIlxuICAgICAgICBsaXN0JD1cIltbbGlzdF1dXCJcbiAgICAgICAgc2l6ZSQ9XCJbW3NpemVdXVwiXG4gICAgICAgIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiXG4gICAgICAgIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiXG4gICAgICAgIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiXG4gICAgICAgIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiXG4gICAgICAgIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIlxuICAgICAgICBhY2NlcHQkPVwiW1thY2NlcHRdXVwiXG4gICAgICAgIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiPlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSBpZD1cInYxXCI+XG4gICAgPCEtLSBOZWVkIHRvIGJpbmQgbWF4bGVuZ3RoIHNvIHRoYXQgdGhlIHBhcGVyLWlucHV0LWNoYXItY291bnRlciB3b3JrcyBjb3JyZWN0bHkgLS0+XG4gICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIGlkPVwiaW5wdXRcIiBzbG90PVwiaW5wdXRcIlxuICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiXG4gICAgICAgIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgIDxpbnB1dCBpZD1cIm5hdGl2ZUlucHV0XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgdGl0bGUkPVwiW1t0aXRsZV1dXCJcbiAgICAgICAgdHlwZSQ9XCJbW3R5cGVdXVwiXG4gICAgICAgIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIlxuICAgICAgICByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIlxuICAgICAgICBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiXG4gICAgICAgIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIlxuICAgICAgICBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiXG4gICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgbWluJD1cIltbbWluXV1cIlxuICAgICAgICBtYXgkPVwiW1ttYXhdXVwiXG4gICAgICAgIHN0ZXAkPVwiW1tzdGVwXV1cIlxuICAgICAgICBuYW1lJD1cIltbbmFtZV1dXCJcbiAgICAgICAgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCJcbiAgICAgICAgbGlzdCQ9XCJbW2xpc3RdXVwiXG4gICAgICAgIHNpemUkPVwiW1tzaXplXV1cIlxuICAgICAgICBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIlxuICAgICAgICBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIlxuICAgICAgICB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIlxuICAgICAgICBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIlxuICAgICAgICByZXN1bHRzJD1cIltbcmVzdWx0c11dXCJcbiAgICAgICAgYWNjZXB0JD1cIltbYWNjZXB0XV1cIlxuICAgICAgICBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIj5cbiAgICA8L2lyb24taW5wdXQ+XG4gIDwvdGVtcGxhdGU+XG5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dCcsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yLFxuICAgICAgUG9seW1lci5Jcm9uRm9ybUVsZW1lbnRCZWhhdmlvclxuICAgIF0sXG5cbiAgICBiZWZvcmVSZWdpc3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHRlbGwgd2hpY2gga2luZCBvZiBvZiB0ZW1wbGF0ZSB0byBzdGFtcCBiYXNlZCBvblxuICAgICAgLy8gd2hhdCBraW5kIG9mIGBpcm9uLWlucHV0YCB3ZSBnb3QsIGJ1dCBiZWNhdXNlIG9mIHBvbHlmaWxscyBhbmRcbiAgICAgIC8vIGN1c3RvbSBlbGVtZW50cyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHYwIGFuZCB2MSwgdGhlIHNhZmVzdCBiZXQgaXNcbiAgICAgIC8vIHRvIGNoZWNrIGEgcGFydGljdWxhciBtZXRob2Qgd2Uga25vdyB0aGUgaXJvbi1pbnB1dCMyLnggY2FuIGhhdmUuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgaXQsIHRoZW4gaXQncyBhbiBpcm9uLWlucHV0IzEueC5cbiAgICAgIHZhciBpcm9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWlucHV0Jyk7XG4gICAgICB2YXIgdmVyc2lvbiA9IHR5cGVvZiBpcm9uSW5wdXQuX2luaXRTbG90dGVkSW5wdXQgPT0gJ2Z1bmN0aW9uJyA/ICd2MScgOiAndjAnO1xuICAgICAgdmFyIHRlbXBsYXRlID0gUG9seW1lci5Eb21Nb2R1bGUuaW1wb3J0KCdwYXBlci1pbnB1dCcsICd0ZW1wbGF0ZScpO1xuICAgICAgdmFyIGlucHV0VGVtcGxhdGUgPSBQb2x5bWVyLkRvbU1vZHVsZS5pbXBvcnQoJ3BhcGVyLWlucHV0JywgJ3RlbXBsYXRlIycgKyB2ZXJzaW9uKTtcbiAgICAgIHZhciBpbnB1dFBsYWNlaG9sZGVyID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGxhdGUtcGxhY2Vob2xkZXInKTtcbiAgICAgIGlmIChpbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXRUZW1wbGF0ZS5jb250ZW50LCBpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaXQncyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCBwcm9iYWJseSBpbiBzdXBlcmNsYXNzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb20gUGFwZXJJbnB1dEJlaGF2aW9yXG4gICAgICogdG8gY29ycmVjdGx5IGZvY3VzIHRoZSBuYXRpdmUgaW5wdXQuXG4gICAgICovXG4gICAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuRWxlbWVudCA/IHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQgOiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAgIC8vIEluIDIuMCwgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYF9vbklyb25JbnB1dFJlYWR5YCBpcyBkb25lIGluXG4gICAgLy8gUGFwZXJJbnB1dEJlaGF2aW9yOjphdHRhY2hlZC5cbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICdpcm9uLWlucHV0LXJlYWR5JzogJ19vbklyb25JbnB1dFJlYWR5J1xuICAgIH0sXG5cbiAgICBfb25Jcm9uSW5wdXRSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgICAgaWYgKCEhdGhpcy5pbnB1dEVsZW1lbnQuYmluZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cblxuPHNjcmlwdD5cblxuICAvKipcbiAgICogVXNlIGBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gYWRkLW9uIGZvciBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBBXG4gICAqIGFkZC1vbiBhcHBlYXJzIGJlbG93IHRoZSBpbnB1dCwgYW5kIG1heSBkaXNwbGF5IGluZm9ybWF0aW9uIGJhc2VkIG9uIHRoZSBpbnB1dCB2YWx1ZSBhbmRcbiAgICogdmFsaWRpdHkgc3VjaCBhcyBhIGNoYXJhY3RlciBjb3VudGVyIG9yIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAqIEBwb2x5bWVyQmVoYXZpb3JcbiAgICovXG4gIFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IgPSB7XG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHlkb20vaXNzdWVzLzk2XG4gICAgICBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuICAgICAgdGhpcy5maXJlKCdhZGRvbi1hdHRhY2hlZCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZnVuY3Rpb24gY2FsbGVkIGJ5IGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2hlbiB0aGUgaW5wdXQgdmFsdWUgb3IgdmFsaWRpdHkgY2hhbmdlcy5cbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBpbnZhbGlkOiBib29sZWFuXG4gICAgICogfX0gc3RhdGUgLVxuICAgICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqICAgICB2YWx1ZTogVGhlIGlucHV0IHZhbHVlLlxuICAgICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICB9XG5cbiAgfTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cImlyb24tcmVxdWVzdC5odG1sXCI+XG5cbjwhLS1cblRoZSBgaXJvbi1hamF4YCBlbGVtZW50IGV4cG9zZXMgbmV0d29yayByZXF1ZXN0IGZ1bmN0aW9uYWxpdHkuXG5cbiAgICA8aXJvbi1hamF4XG4gICAgICAgIGF1dG9cbiAgICAgICAgdXJsPVwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2hcIlxuICAgICAgICBwYXJhbXM9J3tcInBhcnRcIjpcInNuaXBwZXRcIiwgXCJxXCI6XCJwb2x5bWVyXCIsIFwia2V5XCI6IFwiWU9VVFVCRV9BUElfS0VZXCIsIFwidHlwZVwiOiBcInZpZGVvXCJ9J1xuICAgICAgICBoYW5kbGUtYXM9XCJqc29uXCJcbiAgICAgICAgb24tcmVzcG9uc2U9XCJoYW5kbGVSZXNwb25zZVwiXG4gICAgICAgIGRlYm91bmNlLWR1cmF0aW9uPVwiMzAwXCI+PC9pcm9uLWFqYXg+XG5cbldpdGggYGF1dG9gIHNldCB0byBgdHJ1ZWAsIHRoZSBlbGVtZW50IHBlcmZvcm1zIGEgcmVxdWVzdCB3aGVuZXZlclxuaXRzIGB1cmxgLCBgcGFyYW1zYCBvciBgYm9keWAgcHJvcGVydGllcyBhcmUgY2hhbmdlZC4gQXV0b21hdGljYWxseSBnZW5lcmF0ZWRcbnJlcXVlc3RzIHdpbGwgYmUgZGVib3VuY2VkIGluIHRoZSBjYXNlIHRoYXQgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgY2hhbmdlZFxuc2VxdWVudGlhbGx5LlxuXG5Ob3RlOiBUaGUgYHBhcmFtc2AgYXR0cmlidXRlIG11c3QgYmUgZG91YmxlIHF1b3RlZCBKU09OLlxuXG5Zb3UgY2FuIHRyaWdnZXIgYSByZXF1ZXN0IGV4cGxpY2l0bHkgYnkgY2FsbGluZyBgZ2VuZXJhdGVSZXF1ZXN0YCBvbiB0aGVcbmVsZW1lbnQuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbi0tPlxuXG48c2NyaXB0PlxuICAndXNlIHN0cmljdCc7XG5cbiAgUG9seW1lcih7XG5cbiAgICBpczogJ2lyb24tYWpheCcsXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCBiZWZvcmUgYSByZXF1ZXN0IGlzIHNlbnQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LXByZXNlbmRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSByZXF1ZXN0IGlzIHNlbnQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgcmVxdWVzdFxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtcmVxdWVzdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBhIHJlc3BvbnNlIGlzIHJlY2VpdmVkLlxuICAgICAqXG4gICAgICogQGV2ZW50IHJlc3BvbnNlXG4gICAgICogQGV2ZW50IGlyb24tYWpheC1yZXNwb25zZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBhbiBlcnJvciBpcyByZWNlaXZlZC5cbiAgICAgKlxuICAgICAqIEBldmVudCBlcnJvclxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtZXJyb3JcbiAgICAgKi9cblxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgVVJMIHRhcmdldCBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgdXJsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBvYmplY3QgdGhhdCBjb250YWlucyBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZVxuICAgICAgICogc3BlY2lmaWVkIGB1cmxgIHdoZW4gZ2VuZXJhdGluZyBhIHJlcXVlc3QuIElmIHlvdSB3aXNoIHRvIHNldCB0aGUgYm9keVxuICAgICAgICogY29udGVudCB3aGVuIG1ha2luZyBhIFBPU1QgcmVxdWVzdCwgeW91IHNob3VsZCB1c2UgdGhlIGBib2R5YCBwcm9wZXJ0eVxuICAgICAgICogaW5zdGVhZC5cbiAgICAgICAqL1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIHN1Y2ggYXMgJ0dFVCcsICdQT1NUJywgJ1BVVCcsIG9yICdERUxFVEUnLlxuICAgICAgICogRGVmYXVsdCBpcyAnR0VUJy5cbiAgICAgICAqL1xuICAgICAgbWV0aG9kOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdHRVQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhUVFAgcmVxdWVzdCBoZWFkZXJzIHRvIHNlbmQuXG4gICAgICAgKlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqXG4gICAgICAgKiAgICAgPGlyb24tYWpheFxuICAgICAgICogICAgICAgICBhdXRvXG4gICAgICAgKiAgICAgICAgIHVybD1cImh0dHA6Ly9zb21lc2l0ZS5jb21cIlxuICAgICAgICogICAgICAgICBoZWFkZXJzPSd7XCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIn0nXG4gICAgICAgKiAgICAgICAgIGhhbmRsZS1hcz1cImpzb25cIj48L2lyb24tYWpheD5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBzZXR0aW5nIGEgYENvbnRlbnQtVHlwZWAgaGVhZGVyIGhlcmUgd2lsbCBvdmVycmlkZSB0aGUgdmFsdWVcbiAgICAgICAqIHNwZWNpZmllZCBieSB0aGUgYGNvbnRlbnRUeXBlYCBwcm9wZXJ0eSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnRlbnQgdHlwZSB0byB1c2Ugd2hlbiBzZW5kaW5nIGRhdGEuIElmIHRoZSBgY29udGVudFR5cGVgIHByb3BlcnR5XG4gICAgICAgKiBpcyBzZXQgYW5kIGEgYENvbnRlbnQtVHlwZWAgaGVhZGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgYGhlYWRlcnNgXG4gICAgICAgKiBwcm9wZXJ0eSwgdGhlIGBoZWFkZXJzYCBwcm9wZXJ0eSB2YWx1ZSB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAgICAgICAqXG4gICAgICAgKiBWYXJpZXMgdGhlIGhhbmRsaW5nIG9mIHRoZSBgYm9keWAgcGFyYW0uXG4gICAgICAgKi9cbiAgICAgIGNvbnRlbnRUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQm9keSBjb250ZW50IHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdCwgdHlwaWNhbGx5IHVzZWQgd2l0aCBcIlBPU1RcIlxuICAgICAgICogcmVxdWVzdHMuXG4gICAgICAgKlxuICAgICAgICogSWYgYm9keSBpcyBhIHN0cmluZyBpdCB3aWxsIGJlIHNlbnQgdW5tb2RpZmllZC5cbiAgICAgICAqXG4gICAgICAgKiBJZiBDb250ZW50LVR5cGUgaXMgc2V0IHRvIGEgdmFsdWUgbGlzdGVkIGJlbG93LCB0aGVuXG4gICAgICAgKiB0aGUgYm9keSB3aWxsIGJlIGVuY29kZWQgYWNjb3JkaW5nbHkuXG4gICAgICAgKlxuICAgICAgICogICAgKiBgY29udGVudC10eXBlPVwiYXBwbGljYXRpb24vanNvblwiYFxuICAgICAgICogICAgICAqIGJvZHkgaXMgZW5jb2RlZCBsaWtlIGB7XCJmb29cIjpcImJhciBiYXpcIixcInhcIjoxfWBcbiAgICAgICAqICAgICogYGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiYFxuICAgICAgICogICAgICAqIGJvZHkgaXMgZW5jb2RlZCBsaWtlIGBmb289YmFyK2JheiZ4PTFgXG4gICAgICAgKlxuICAgICAgICogT3RoZXJ3aXNlIHRoZSBib2R5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBicm93c2VyIHVubW9kaWZpZWQsIGFuZCBpdFxuICAgICAgICogd2lsbCBoYW5kbGUgYW55IGVuY29kaW5nIChlLmcuIGZvciBGb3JtRGF0YSwgQmxvYiwgQXJyYXlCdWZmZXIpLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIChBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd8QmxvYnxEb2N1bWVudHxGb3JtRGF0YXxudWxsfHN0cmluZ3x1bmRlZmluZWR8T2JqZWN0KVxuICAgICAgICovXG4gICAgICBib2R5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVG9nZ2xlIHdoZXRoZXIgWEhSIGlzIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cy4gRG9uJ3QgY2hhbmdlIHRoaXNcbiAgICAgICAqIHRvIHRydWUgdW5sZXNzIFlvdSBLbm93IFdoYXQgWW91IEFyZSBEb2luZ+KEoi5cbiAgICAgICAqL1xuICAgICAgc3luYzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHdoYXQgZGF0YSB0byBzdG9yZSBpbiB0aGUgYHJlc3BvbnNlYCBwcm9wZXJ0eSwgYW5kXG4gICAgICAgKiB0byBkZWxpdmVyIGFzIGBldmVudC5kZXRhaWwucmVzcG9uc2VgIGluIGByZXNwb25zZWAgZXZlbnRzLlxuICAgICAgICpcbiAgICAgICAqIE9uZSBvZjpcbiAgICAgICAqXG4gICAgICAgKiAgICBgdGV4dGA6IHVzZXMgYFhIUi5yZXNwb25zZVRleHRgLlxuICAgICAgICpcbiAgICAgICAqICAgIGB4bWxgOiB1c2VzIGBYSFIucmVzcG9uc2VYTUxgLlxuICAgICAgICpcbiAgICAgICAqICAgIGBqc29uYDogdXNlcyBgWEhSLnJlc3BvbnNlVGV4dGAgcGFyc2VkIGFzIEpTT04uXG4gICAgICAgKlxuICAgICAgICogICAgYGFycmF5YnVmZmVyYDogdXNlcyBgWEhSLnJlc3BvbnNlYC5cbiAgICAgICAqXG4gICAgICAgKiAgICBgYmxvYmA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKlxuICAgICAgICogICAgYGRvY3VtZW50YDogdXNlcyBgWEhSLnJlc3BvbnNlYC5cbiAgICAgICAqL1xuICAgICAgaGFuZGxlQXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2pzb24nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGUgd2l0aENyZWRlbnRpYWxzIGZsYWcgb24gdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHdpdGhDcmVkZW50aWFsczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSB0aW1lb3V0IGZsYWcgb24gdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCBhdXRvbWF0aWNhbGx5IHBlcmZvcm1zIGFuIEFqYXggcmVxdWVzdCB3aGVuIGVpdGhlciBgdXJsYCBvclxuICAgICAgICogYHBhcmFtc2AgY2hhbmdlcy5cbiAgICAgICAqL1xuICAgICAgYXV0bzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgZXJyb3IgbWVzc2FnZXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZS5cbiAgICAgICAqL1xuICAgICAgdmVyYm9zZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1vc3QgcmVjZW50IHJlcXVlc3QgbWFkZSBieSB0aGlzIGlyb24tYWpheCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBsYXN0UmVxdWVzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSB3aGlsZSBsYXN0UmVxdWVzdCBpcyBpbiBmbGlnaHQuXG4gICAgICAgKi9cbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBsYXN0UmVxdWVzdCdzIHJlc3BvbnNlLlxuICAgICAgICpcbiAgICAgICAqIE5vdGUgdGhhdCBsYXN0UmVzcG9uc2UgYW5kIGxhc3RFcnJvciBhcmUgc2V0IHdoZW4gbGFzdFJlcXVlc3QgZmluaXNoZXMsXG4gICAgICAgKiBzbyBpZiBsb2FkaW5nIGlzIHRydWUsIHRoZW4gbGFzdFJlc3BvbnNlIGFuZCBsYXN0RXJyb3Igd2lsbCBjb3JyZXNwb25kXG4gICAgICAgKiB0byB0aGUgcmVzdWx0IG9mIHRoZSBwcmV2aW91cyByZXF1ZXN0LlxuICAgICAgICpcbiAgICAgICAqIFRoZSB0eXBlIG9mIHRoZSByZXNwb25zZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB2YWx1ZSBvZiBgaGFuZGxlQXNgIGF0XG4gICAgICAgKiB0aGUgdGltZSB0aGF0IHRoZSByZXF1ZXN0IHdhcyBnZW5lcmF0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgbGFzdFJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBsYXN0UmVxdWVzdCdzIGVycm9yLCBpZiBhbnkuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgbGFzdEVycm9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBBcnJheSBvZiBhbGwgaW4tZmxpZ2h0IHJlcXVlc3RzIG9yaWdpbmF0aW5nIGZyb20gdGhpcyBpcm9uLWFqYXhcbiAgICAgICAqIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGFjdGl2ZVJlcXVlc3RzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExlbmd0aCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBkZWJvdW5jZSBtdWx0aXBsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCByZXF1ZXN0cy5cbiAgICAgICAqL1xuICAgICAgZGVib3VuY2VEdXJhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJlZml4IHRvIGJlIHN0cmlwcGVkIGZyb20gYSBKU09OIHJlc3BvbnNlIGJlZm9yZSBwYXJzaW5nIGl0LlxuICAgICAgICpcbiAgICAgICAqIEluIG9yZGVyIHRvIHByZXZlbnQgYW4gYXR0YWNrIHVzaW5nIENTUkYgd2l0aCBBcnJheSByZXNwb25zZXNcbiAgICAgICAqIChodHRwOi8vaGFhY2tlZC5jb20vYXJjaGl2ZS8yMDA4LzExLzIwL2FuYXRvbXktb2YtYS1zdWJ0bGUtanNvbi12dWxuZXJhYmlsaXR5LmFzcHgvKVxuICAgICAgICogbWFueSBiYWNrZW5kcyB3aWxsIG1pdGlnYXRlIHRoaXMgYnkgcHJlZml4aW5nIGFsbCBKU09OIHJlc3BvbnNlIGJvZGllc1xuICAgICAgICogd2l0aCBhIHN0cmluZyB0aGF0IHdvdWxkIGJlIG5vbnNlbnNpY2FsIHRvIGEgSmF2YVNjcmlwdCBwYXJzZXIuXG4gICAgICAgKlxuICAgICAgICovXG4gICAgICBqc29uUHJlZml4OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEJ5IGRlZmF1bHQsIGlyb24tYWpheCdzIGV2ZW50cyBkbyBub3QgYnViYmxlLiBTZXR0aW5nIHRoaXMgYXR0cmlidXRlIHdpbGwgY2F1c2UgaXRzXG4gICAgICAgKiByZXF1ZXN0IGFuZCByZXNwb25zZSBldmVudHMgYXMgd2VsbCBhcyBpdHMgaXJvbi1hamF4LXJlcXVlc3QsIC1yZXNwb25zZSwgIGFuZCAtZXJyb3JcbiAgICAgICAqIGV2ZW50cyB0byBidWJibGUgdG8gdGhlIHdpbmRvdyBvYmplY3QuIFRoZSB2YW5pbGxhIGVycm9yIGV2ZW50IG5ldmVyIGJ1YmJsZXMgd2hlblxuICAgICAgICogdXNpbmcgc2hhZG93IGRvbSBldmVuIGlmIHRoaXMuYnViYmxlcyBpcyB0cnVlIGJlY2F1c2UgYSBzY29wZWQgZmxhZyBpcyBub3QgcGFzc2VkIHdpdGhcbiAgICAgICAqIGl0IChmaXJzdCBsaW5rKSBhbmQgYmVjYXVzZSB0aGUgc2hhZG93IGRvbSBzcGVjIGRpZCBub3QgdXNlZCB0byBhbGxvdyBjZXJ0YWluIGV2ZW50cyxcbiAgICAgICAqIGluY2x1ZGluZyBldmVudHMgbmFtZWQgZXJyb3IsIHRvIGxlYWsgb3V0c2lkZSBvZiBzaGFkb3cgdHJlZXMgKHNlY29uZCBsaW5rKS5cbiAgICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zaGFkb3ctZG9tLyNzY29wZWQtZmxhZ1xuICAgICAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTUvV0Qtc2hhZG93LWRvbS0yMDE1MTIxNS8jZXZlbnRzLXRoYXQtYXJlLW5vdC1sZWFrZWQtaW50by1hbmNlc3Rvci10cmVlc1xuICAgICAgICovXG4gICAgICBidWJibGVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2VzIHRoZSBbYGNvbXBsZXRlc2BdKGlyb24tcmVxdWVzdCNwcm9wZXJ0eS1jb21wbGV0ZXMpIHByb21pc2UgY2hhaW4gXG4gICAgICAgKiBmcm9tIGBnZW5lcmF0ZVJlcXVlc3RgIHRvIHJlamVjdCB3aXRoIGFuIG9iamVjdFxuICAgICAgICogY29udGFpbmluZyB0aGUgb3JpZ2luYWwgcmVxdWVzdCwgYXMgd2VsbCBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAgICogSWYgZmFsc2UgKGRlZmF1bHQpLCB0aGUgcHJvbWlzZSByZWplY3RzIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBvbmx5LlxuICAgICAgICovXG4gICAgICByZWplY3RXaXRoUmVxdWVzdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZEhhbmRsZVJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAnX3JlcXVlc3RPcHRpb25zQ2hhbmdlZCh1cmwsIG1ldGhvZCwgcGFyYW1zLiosIGhlYWRlcnMsIGNvbnRlbnRUeXBlLCAnICtcbiAgICAgICAgICAnYm9keSwgc3luYywgaGFuZGxlQXMsIGpzb25QcmVmaXgsIHdpdGhDcmVkZW50aWFscywgdGltZW91dCwgYXV0byknXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIGB1cmxgLCBzZXJpYWxpemVkIGZyb21cbiAgICAgKiB0aGUgY3VycmVudCB2YWx1ZSBvZiBgcGFyYW1zYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgcXVlcnlTdHJpbmcgKCkge1xuICAgICAgdmFyIHF1ZXJ5UGFydHMgPSBbXTtcbiAgICAgIHZhciBwYXJhbTtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgZm9yIChwYXJhbSBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMucGFyYW1zW3BhcmFtXTtcbiAgICAgICAgcGFyYW0gPSB3aW5kb3cuZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBxdWVyeVBhcnRzLnB1c2gocGFyYW0gKyAnPScgKyB3aW5kb3cuZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2ldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgcXVlcnlQYXJ0cy5wdXNoKHBhcmFtICsgJz0nICsgd2luZG93LmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5UGFydHMucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHF1ZXJ5UGFydHMuam9pbignJicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHVybGAgd2l0aCBxdWVyeSBzdHJpbmcgKGlmIGBwYXJhbXNgIGFyZSBzcGVjaWZpZWQpLCBzdWl0YWJsZSBmb3JcbiAgICAgKiBwcm92aWRpbmcgdG8gYW4gYGlyb24tcmVxdWVzdGAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHJlcXVlc3RVcmwoKSB7XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSB0aGlzLnF1ZXJ5U3RyaW5nO1xuICAgICAgdmFyIHVybCA9IHRoaXMudXJsIHx8ICcnO1xuXG4gICAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdmFyIGJpbmRpbmdDaGFyID0gdXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nO1xuICAgICAgICByZXR1cm4gdXJsICsgYmluZGluZ0NoYXIgKyBxdWVyeVN0cmluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFwcyBoZWFkZXIgbmFtZXMgdG8gaGVhZGVyIHZhbHVlcywgZmlyc3QgYXBwbHlpbmcgdGhlXG4gICAgICogdGhlIHZhbHVlIG9mIGBDb250ZW50LVR5cGVgIGFuZCB0aGVuIG92ZXJsYXlpbmcgdGhlIGhlYWRlcnMgc3BlY2lmaWVkXG4gICAgICogaW4gdGhlIGBoZWFkZXJzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgcmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICB2YXIgaGVhZGVycyA9IHt9O1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5jb250ZW50VHlwZTtcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PSBudWxsICYmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICBoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9IGNvbnRlbnRUeXBlO1xuICAgICAgfVxuICAgICAgdmFyIGhlYWRlcjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoaGVhZGVyIGluIHRoaXMuaGVhZGVycykge1xuICAgICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IHRoaXMuaGVhZGVyc1toZWFkZXJdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3Qgb3B0aW9ucyBzdWl0YWJsZSBmb3IgZ2VuZXJhdGluZyBhbiBgaXJvbi1yZXF1ZXN0YCBpbnN0YW5jZSBiYXNlZFxuICAgICAqIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBgaXJvbi1hamF4YCBpbnN0YW5jZSdzIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt7XG4gICAgICogICB1cmw6IHN0cmluZyxcbiAgICAgKiAgIG1ldGhvZDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgYXN5bmM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICBib2R5OiAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdCksXG4gICAgICogICBoZWFkZXJzOiAoT2JqZWN0fHVuZGVmaW5lZCksXG4gICAgICogICBoYW5kbGVBczogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAganNvblByZWZpeDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgd2l0aENyZWRlbnRpYWxzOiAoYm9vbGVhbnx1bmRlZmluZWQpfX1cbiAgICAgKi9cbiAgICB0b1JlcXVlc3RPcHRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdGhpcy5yZXF1ZXN0VXJsIHx8ICcnLFxuICAgICAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLnJlcXVlc3RIZWFkZXJzLFxuICAgICAgICBib2R5OiB0aGlzLmJvZHksXG4gICAgICAgIGFzeW5jOiAhdGhpcy5zeW5jLFxuICAgICAgICBoYW5kbGVBczogdGhpcy5oYW5kbGVBcyxcbiAgICAgICAganNvblByZWZpeDogdGhpcy5qc29uUHJlZml4LFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgIHJlamVjdFdpdGhSZXF1ZXN0OiB0aGlzLnJlamVjdFdpdGhSZXF1ZXN0LFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gQUpBWCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybiB7IUlyb25SZXF1ZXN0RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlcXVlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSAvKiogQHR5cGUgeyFJcm9uUmVxdWVzdEVsZW1lbnR9ICovIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLXJlcXVlc3QnKSk7XG4gICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB0aGlzLnRvUmVxdWVzdE9wdGlvbnMoKTtcblxuICAgICAgdGhpcy5wdXNoKCdhY3RpdmVSZXF1ZXN0cycsIHJlcXVlc3QpO1xuXG4gICAgICByZXF1ZXN0LmNvbXBsZXRlcy50aGVuKFxuICAgICAgICB0aGlzLl9ib3VuZEhhbmRsZVJlc3BvbnNlXG4gICAgICApLmNhdGNoKFxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvci5iaW5kKHRoaXMsIHJlcXVlc3QpXG4gICAgICApLnRoZW4oXG4gICAgICAgIHRoaXMuX2Rpc2NhcmRSZXF1ZXN0LmJpbmQodGhpcywgcmVxdWVzdClcbiAgICAgICk7XG5cbiAgICAgIHZhciBldnQgPSB0aGlzLmZpcmUoJ2lyb24tYWpheC1wcmVzZW5kJywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9uc1xuICAgICAgfSwge2J1YmJsZXM6IHRoaXMuYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0LnJlamVjdENvbXBsZXRlcyhyZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuX3NldExhc3RSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgdGhpcy5fc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgdGhpcy5maXJlKCdyZXF1ZXN0Jywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9uc1xuICAgICAgfSwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtcmVxdWVzdCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sXG5cbiAgICBfaGFuZGxlUmVzcG9uc2U6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgIGlmIChyZXF1ZXN0ID09PSB0aGlzLmxhc3RSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuX3NldExhc3RSZXNwb25zZShyZXF1ZXN0LnJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5fc2V0TGFzdEVycm9yKG51bGwpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlyZSgncmVzcG9uc2UnLCByZXF1ZXN0LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtcmVzcG9uc2UnLCByZXF1ZXN0LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uKHJlcXVlc3QsIGVycm9yKSB7XG4gICAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICAgIFBvbHltZXIuQmFzZS5fZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdCA9PT0gdGhpcy5sYXN0UmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9zZXRMYXN0RXJyb3Ioe1xuICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC54aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3QueGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgcmVzcG9uc2U6IHJlcXVlc3QueGhyLnJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZXRMYXN0UmVzcG9uc2UobnVsbCk7XG4gICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBUZXN0cyBmYWlsIGlmIHRoaXMgZ29lcyBhZnRlciB0aGUgbm9ybWFsIHRoaXMuZmlyZSgnZXJyb3InLCAuLi4pXG4gICAgICB0aGlzLmZpcmUoJ2lyb24tYWpheC1lcnJvcicsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZpcmUoJ2Vycm9yJywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9kaXNjYXJkUmVxdWVzdDogZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgICAgdmFyIHJlcXVlc3RJbmRleCA9IHRoaXMuYWN0aXZlUmVxdWVzdHMuaW5kZXhPZihyZXF1ZXN0KTtcblxuICAgICAgaWYgKHJlcXVlc3RJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKCdhY3RpdmVSZXF1ZXN0cycsIHJlcXVlc3RJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9yZXF1ZXN0T3B0aW9uc0NoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kZWJvdW5jZSgnZ2VuZXJhdGUtcmVxdWVzdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy51cmwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmRlYm91bmNlRHVyYXRpb24pO1xuICAgIH0sXG5cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWl0ZW0tYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPkl0ZW08L3BhcGVyLWl0ZW0+XG5cblVzZSB0aGlzIGVsZW1lbnQgd2l0aCBgPHBhcGVyLWl0ZW0tYm9keT5gIHRvIG1ha2UgTWF0ZXJpYWwgRGVzaWduIHN0eWxlZCB0d28tbGluZSBhbmQgdGhyZWUtbGluZVxuaXRlbXMuXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRvIHVzZSBgcGFwZXItaXRlbWAgYXMgYSBsaW5rLCB3cmFwIGl0IGluIGFuIGFuY2hvciB0YWcuIFNpbmNlIGBwYXBlci1pdGVtYCB3aWxsXG5hbHJlYWR5IHJlY2VpdmUgZm9jdXMsIHlvdSBtYXkgd2FudCB0byBwcmV2ZW50IHRoZSBhbmNob3IgdGFnIGZyb20gcmVjZWl2aW5nXG5mb2N1cyBhcyB3ZWxsIGJ5IHNldHRpbmcgaXRzIHRhYmluZGV4IHRvIC0xLlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgPHBhcGVyLWl0ZW0gcmFpc2VkPlBvbHltZXIgUHJvamVjdDwvcGFwZXItaXRlbT5cbiAgICA8L2E+XG5cbklmIHlvdSBhcmUgY29uY2VybmVkIGFib3V0IHBlcmZvcm1hbmNlIGFuZCB3YW50IHRvIHVzZSBgcGFwZXItaXRlbWAgaW4gYSBgcGFwZXItbGlzdGJveGBcbndpdGggbWFueSBpdGVtcywgeW91IGNhbiBqdXN0IHVzZSBhIG5hdGl2ZSBgYnV0dG9uYCB3aXRoIHRoZSBgcGFwZXItaXRlbWAgY2xhc3NcbmFwcGxpZWQgKHByb3ZpZGVkIHlvdSBoYXZlIGNvcnJlY3RseSBpbmNsdWRlZCB0aGUgc2hhcmVkIHN0eWxlcyk6XG5cbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cblxuICAgIDxwYXBlci1saXN0Ym94PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+SW5ib3g8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlN0YXJyZWQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlNlbnQgbWFpbDwvYnV0dG9uPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLW1pbi1oZWlnaHRgICAgICB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtICAgICAgICAgICAgICAgICAgIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gICAgICAgICAgICAgICAgICAgIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtICAgICAgICAgICB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zICAgICAgICB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyAgICAgICAgICAgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zICAgICAgICB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zICAgICAgICAgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5UaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwibGlzdGl0ZW1cImAgYnkgZGVmYXVsdC4gRGVwZW5kaW5nIG9uIHVzYWdlLCBpdCBtYXkgYmUgbW9yZSBhcHByb3ByaWF0ZSB0byBzZXRcbmByb2xlPVwibWVudWl0ZW1cImAsIGByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiYCBvciBgcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItaXRlbScsXG5cbiAgICAgIGJlaGF2aW9yczogW1xuICAgICAgICBQb2x5bWVyLlBhcGVySXRlbUJlaGF2aW9yXG4gICAgICBdXG4gICAgfSk7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcy5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLW1hdGVyaWFsYCBpcyBhIGNvbnRhaW5lciB0aGF0IHJlbmRlcnMgdHdvIHNoYWRvd3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgdG9cbmNyZWF0ZSB0aGUgZWZmZWN0IG9mIGEgbGlmdGVkIHBpZWNlIG9mIHBhcGVyLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLW1hdGVyaWFsIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvcGFwZXItbWF0ZXJpYWw+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1tYXRlcmlhbFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbYW5pbWF0ZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXNoYWRvdy10cmFuc2l0aW9uO1xuICAgICAgfVxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1tYXRlcmlhbCcsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoaXMgZWxlbWVudCwgZnJvbSAwLTUuIFNldHRpbmcgdG8gMCB3aWxsIHJlbW92ZSB0aGVcbiAgICAgICAqIHNoYWRvdywgYW5kIGVhY2ggaW5jcmVhc2luZyBudW1iZXIgZ3JlYXRlciB0aGFuIDAgd2lsbCBiZSBcImRlZXBlclwiXG4gICAgICAgKiB0aGFuIHRoZSBsYXN0LlxuICAgICAgICpcbiAgICAgICAqIEBhdHRyaWJ1dGUgZWxldmF0aW9uXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDFcbiAgICAgICAqL1xuICAgICAgZWxldmF0aW9uOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogMVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgICAqIGBlbGV2YXRpb25gIHZhbHVlLlxuICAgICAgICpcbiAgICAgICAqIEBhdHRyaWJ1dGUgYW5pbWF0ZWRcbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIGFuaW1hdGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cblxuPHNjcmlwdD5cbiAgLyoqXG4gIFBvbHltZXIuSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgZW5hYmxlcyBhIGN1c3RvbSBlbGVtZW50IHRvIGJlIGluY2x1ZGVkXG4gIGluIGFuIGBpcm9uLWZvcm1gLlxuXG4gIEV2ZW50cyBgaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXJgIGFuZCBgaXJvbi1mb3JtLWVsZW1lbnQtdW5yZWdpc3RlcmAgYXJlIG5vdCBmaXJlZCBvbiBQb2x5bWVyIDIuMC5cblxuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvclxuICAqL1xuICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGFkZGVkIHRvIGFuIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBpcm9uLWZvcm0tZWxlbWVudC1yZWdpc3RlclxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gYW4gYGlyb24tZm9ybWAuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24tZm9ybS1lbGVtZW50LXVucmVnaXN0ZXJcbiAgICAgICAqL1xuICAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgdXNlZCBpbiBhIGZvcm0sIGFcbiAgICAgICAqIGN1c3RvbSBlbGVtZW50IHRoYXQgdXNlcyB0aGlzIGJlaGF2aW9yIHNob3VsZCBhbHNvIHVzZVxuICAgICAgICogUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvciBhbmQgZGVmaW5lIGEgY3VzdG9tIHZhbGlkYXRpb24gbWV0aG9kLlxuICAgICAgICogT3RoZXJ3aXNlLCBhIGByZXF1aXJlZGAgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBjb25zaWRlcmVkIHZhbGlkLlxuICAgICAgICogSXQncyBhbHNvIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHRvIHByb3ZpZGUgYSB2aXN1YWwgc3R5bGUgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgKiB3aGVuIGl0cyB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGZvcm0gdGhhdCB0aGUgZWxlbWVudCBpcyByZWdpc3RlcmVkIHRvLlxuICAgICAgICovXG4gICAgICBfcGFyZW50Rm9ybToge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IFBvbHltZXIuRWxlbWVudCA/IG51bGwgOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIE5vdGU6IHRoZSBpcm9uLWZvcm0gdGhhdCB0aGlzIGVsZW1lbnQgYmVsb25ncyB0byB3aWxsIHNldCB0aGlzXG4gICAgICAvLyBlbGVtZW50J3MgX3BhcmVudEZvcm0gcHJvcGVydHkgd2hlbiBoYW5kbGluZyB0aGlzIGV2ZW50LlxuICAgICAgdGhpcy5maXJlKCdpcm9uLWZvcm0tZWxlbWVudC1yZWdpc3RlcicpO1xuICAgIH0sXG5cbiAgICBkZXRhY2hlZDogUG9seW1lci5FbGVtZW50ID8gbnVsbCA6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudEZvcm0pIHtcbiAgICAgICAgdGhpcy5fcGFyZW50Rm9ybS5maXJlKCdpcm9uLWZvcm0tZWxlbWVudC11bnJlZ2lzdGVyJywge3RhcmdldDogdGhpc30pO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5gPGlyb24taW5wdXQ+YCBpcyBhIHdyYXBwZXIgdG8gYSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQsIHRoYXQgYWRkcyB0d28td2F5IGJpbmRpbmdcbmFuZCBwcmV2ZW50aW9uIG9mIGludmFsaWQgaW5wdXQuIFRvIHVzZSBpdCwgeW91IG11c3QgZGlzdHJpYnV0ZSBhIG5hdGl2ZSBgPGlucHV0PmBcbnlvdXJzZWxmLiBZb3UgY2FuIGNvbnRpbnVlIHRvIHVzZSB0aGUgbmF0aXZlIGBpbnB1dGAgYXMgeW91IHdvdWxkIG5vcm1hbGx5OlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGlzYWJsZWQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4jIyMgVHdvLXdheSBiaW5kaW5nXG5cbkJ5IGRlZmF1bHQgeW91IGNhbiBvbmx5IGdldCBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCdzIGB2YWx1ZWBcbmR1ZSB0byB1c2VyIGlucHV0OlxuXG4gICAgPGlucHV0IHZhbHVlPVwie3tteVZhbHVlOjppbnB1dH19XCI+XG5cblRoaXMgbWVhbnMgdGhhdCBpZiB5b3UgaW1wZXJhdGl2ZWx5IHNldCB0aGUgdmFsdWUgKGkuZS4gYHNvbWVOYXRpdmVJbnB1dC52YWx1ZSA9ICdmb28nYCksXG5ubyBldmVudHMgd2lsbCBiZSBmaXJlZCBhbmQgdGhpcyBjaGFuZ2UgY2Fubm90IGJlIG9ic2VydmVkLlxuXG5gaXJvbi1pbnB1dGAgYWRkcyB0aGUgYGJpbmQtdmFsdWVgIHByb3BlcnR5IHRoYXQgbWlycm9ycyB0aGUgbmF0aXZlIGBpbnB1dGAncyAnYHZhbHVlYCBwcm9wZXJ0eTsgdGhpc1xucHJvcGVydHkgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuYGJpbmQtdmFsdWVgIHdpbGwgbm90aWZ5IGlmIGl0IGlzIGNoYW5nZWQgZWl0aGVyIGJ5IHVzZXIgaW5wdXQgb3IgYnkgc2NyaXB0LlxuXG4gICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7bXlWYWx1ZX19XCI+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5Ob3RlOiB0aGlzIG1lYW5zIHRoYXQgaWYgeW91IHdhbnQgdG8gaW1wZXJhdGl2ZWx5IHNldCB0aGUgbmF0aXZlIGBpbnB1dGAncywgeW91IF9tdXN0X1xuc2V0IGBiaW5kLXZhbHVlYCBpbnN0ZWFkLCBzbyB0aGF0IHRoZSB3cmFwcGVyIGBpcm9uLWlucHV0YCBjYW4gYmUgbm90aWZpZWQuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbmBpcm9uLWlucHV0YCB1c2VzIHRoZSBuYXRpdmUgYGlucHV0YCdzIHZhbGlkYXRpb24uIEZvciBzaW1wbGljaXR5LCBgaXJvbi1pbnB1dGBcbmhhcyBhIGB2YWxpZGF0ZSgpYCBtZXRob2QgKHdoaWNoIGludGVybmFsbHkganVzdCBjaGVja3MgdGhlIGRpc3RyaWJ1dGVkIGBpbnB1dGAnc1xudmFsaWRpdHkpLCB3aGljaCBzZXRzIGFuIGBpbnZhbGlkYCBhdHRyaWJ1dGUgdGhhdCBjYW4gYWxzbyBiZSB1c2VkIGZvciBzdHlsaW5nLlxuXG5UbyB2YWxpZGF0ZSBhdXRvbWF0aWNhbGx5IGFzIHlvdSB0eXBlLCB5b3UgY2FuIHVzZSB0aGUgYGF1dG8tdmFsaWRhdGVgIGF0dHJpYnV0ZS5cblxuYGlyb24taW5wdXRgIGFsc28gZmlyZXMgYW4gYGlyb24taW5wdXQtdmFsaWRhdGVgIGV2ZW50IGFmdGVyIGB2YWxpZGF0ZSgpYCBpc1xuY2FsbGVkLiBZb3UgY2FuIHVzZSBpdCB0byBpbXBsZW1lbnQgYSBjdXN0b20gdmFsaWRhdG9yOlxuXG4gICAgdmFyIENhdHNPbmx5VmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGlyb25JbnB1dCkge1xuICAgICAgICB2YXIgdmFsaWQgPSAhaXJvbklucHV0LmJpbmRWYWx1ZSB8fCBpcm9uSW5wdXQuYmluZFZhbHVlID09PSAnY2F0JztcbiAgICAgICAgaXJvbklucHV0LmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaXJvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taW5wdXQtdmFsaWRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIENhdHNPbmx5LnZhbGlkYXRlKGlucHV0Mik7XG4gICAgfSk7XG5cbllvdSBjYW4gYWxzbyB1c2UgYW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYW4gW2BJcm9uVmFsaWRhdG9yQmVoYXZpb3JgXSgvZWxlbWVudC9Qb2x5bWVyRWxlbWVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvcikuXG5UaGlzIGV4YW1wbGUgY2FuIGFsc28gYmUgZm91bmQgaW4gdGhlIGRlbW8gZm9yIHRoaXMgZWxlbWVudDpcblxuICAgIDxpcm9uLWlucHV0IHZhbGlkYXRvcj1cImNhdHMtb25seVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFByZXZlbnRpbmcgaW52YWxpZCBpbnB1dFxuXG5JdCBtYXkgYmUgZGVzaXJhYmxlIHRvIG9ubHkgYWxsb3cgdXNlcnMgdG8gZW50ZXIgY2VydGFpbiBjaGFyYWN0ZXJzLiBZb3UgY2FuIHVzZSB0aGVcbmBhbGxvd2VkLXBhdHRlcm5gIGF0dHJpYnV0ZSB0byBhY2NvbXBsaXNoIHRoaXMuIFRoaXMgZmVhdHVyZVxuaXMgc2VwYXJhdGUgZnJvbSB2YWxpZGF0aW9uLCBhbmQgYGFsbG93ZWQtcGF0dGVybmAgZG9lcyBub3QgYWZmZWN0IGhvdyB0aGUgaW5wdXQgaXMgdmFsaWRhdGVkLlxuXG4gICAgLy8gT25seSBhbGxvdyB0eXBpbmcgZGlnaXRzLCBidXQgYSB2YWxpZCBpbnB1dCBoYXMgZXhhY3RseSA1IGRpZ2l0cy5cbiAgICA8aXJvbi1pbnB1dCBhbGxvd2VkLXBhdHRlcm49XCJbMC05XVwiPlxuICAgICAgPGlucHV0IHBhdHRlcm49XCJcXGR7NX1cIj5cbiAgICA8L2lyb24taW5wdXQ+XG5cbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24taW5wdXRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3QgaWQ9XCJjb250ZW50XCI+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdpcm9uLWlucHV0JyxcblxuICAgICAgYmVoYXZpb3JzOiBbXG4gICAgICAgIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JcbiAgICAgIF0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbmV2ZXIgYHZhbGlkYXRlKClgIGlzIGNhbGxlZC5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgaXJvbi1pbnB1dC12YWxpZGF0ZVxuICAgICAgICovXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlIHRoaXMgcHJvcGVydHkgaW5zdGVhZCBvZiBgdmFsdWVgIGZvciB0d28td2F5IGRhdGEgYmluZGluZywgb3IgdG9cbiAgICAgICAgICogc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGlucHV0LiAqKkRvIG5vdCoqIHVzZSB0aGUgZGlzdHJpYnV0ZWRcbiAgICAgICAgICogaW5wdXQncyBgdmFsdWVgIHByb3BlcnR5IHRvIHNldCBhIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZWQgcHJvcGVydHkgdGhhdCBlY2hvZXMgYGJpbmRWYWx1ZWAgKG1vc3RseSB1c2VkIGZvciBQb2x5bWVyIDEuMFxuICAgICAgICAgKiBiYWNrY29tcGF0aWJpbGl0eSwgaWYgeW91IHdlcmUgb25lLXdheSBiaW5kaW5nIHRvIHRoZSBQb2x5bWVyIDEuMFxuICAgICAgICAgKiBgaW5wdXQgaXM9XCJpcm9uLWlucHV0XCJgIHZhbHVlIGF0dHJpYnV0ZSkuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVWYWx1ZShiaW5kVmFsdWUpJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdleC1saWtlIGxpc3Qgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGFzIGlucHV0OyBhbGwgY2hhcmFjdGVycyBub3QgaW4gdGhlIGxpc3RcbiAgICAgICAgICogd2lsbCBiZSByZWplY3RlZC4gVGhlIHJlY29tbWVuZGVkIGZvcm1hdCBzaG91bGQgYmUgYSBsaXN0IG9mIGFsbG93ZWQgY2hhcmFjdGVycyxcbiAgICAgICAgICogZm9yIGV4YW1wbGUsIGBbYS16QS1aMC05ListITs6XWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgcGF0dGVybiByZXByZXNlbnRzIHRoZSBhbGxvd2VkIGNoYXJhY3RlcnMgZm9yIHRoZSBmaWVsZDsgYXMgdGhlIHVzZXIgaW5wdXRzIHRleHQsXG4gICAgICAgICAqIGVhY2ggaW5kaXZpZHVhbCBjaGFyYWN0ZXIgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgdGhlIHBhdHRlcm4gKHJhdGhlciB0aGFuIGNoZWNraW5nXG4gICAgICAgICAqIHRoZSBlbnRpcmUgdmFsdWUgYXMgYSB3aG9sZSkuIElmIGEgY2hhcmFjdGVyIGlzIG5vdCBhIG1hdGNoLCBpdCB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQYXN0ZWQgaW5wdXQgd2lsbCBoYXZlIGVhY2ggY2hhcmFjdGVyIGNoZWNrZWQgaW5kaXZpZHVhbGx5OyBpZiBhbnkgY2hhcmFjdGVyXG4gICAgICAgICAqIGRvZXNuJ3QgbWF0Y2ggYGFsbG93ZWRQYXR0ZXJuYCwgdGhlIGVudGlyZSBwYXN0ZWQgc3RyaW5nIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IGlmIHlvdSB3ZXJlIHVzaW5nIGBpcm9uLWlucHV0YCBpbiAxLjAsIHlvdSB3ZXJlIGFsc28gcmVxdWlyZWQgdG9cbiAgICAgICAgICogc2V0IGBwcmV2ZW50LWludmFsaWQtaW5wdXRgLiBUaGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgYXMgb2YgUG9seW1lciAyLjAsXG4gICAgICAgICAqIGFuZCB3aWxsIGJlIHNldCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaWYgYW4gYGFsbG93ZWRQYXR0ZXJuYCBpcyBwcm92aWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGFsbG93ZWRQYXR0ZXJuOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlIGFzIHlvdSB0eXBlLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgICBcbiAgICAgICAvKipcbiAgICAgICAgKiBUaGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICovXG4gICAgICAgIF9pbnB1dEVsZW1lbnQ6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX2JpbmRWYWx1ZUNoYW5nZWQoYmluZFZhbHVlLCBfaW5wdXRFbGVtZW50KSdcbiAgICAgIF0sXG5cbiAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAnaW5wdXQnOiAnX29uSW5wdXQnLFxuICAgICAgICAna2V5cHJlc3MnOiAnX29uS2V5cHJlc3MnXG4gICAgICB9LFxuXG4gICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dCA9ICcnO1xuICAgICAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGFkZGVkIGF0IGEgbGF0ZXIgdGltZSwgdXBkYXRlIHRoZSBpbnRlcm5hbCByZWZlcmVuY2UuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gUG9seW1lci5kb20odGhpcykub2JzZXJ2ZU5vZGVzKGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgICB0aGlzLl9pbml0U2xvdHRlZElucHV0KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LFxuXG4gICAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgICAgIFBvbHltZXIuZG9tKHRoaXMpLnVub2JzZXJ2ZU5vZGVzKHRoaXMuX29ic2VydmVyKTtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgPGlucHV0PiBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBnZXQgaW5wdXRFbGVtZW50ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICAgIH0sXG5cbiAgICAgIF9pbml0U2xvdHRlZElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50ID0gdGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpcmUoJ2lyb24taW5wdXQtcmVhZHknKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldCBfcGF0dGVyblJlZ0V4cCgpIHtcbiAgICAgICAgdmFyIHBhdHRlcm47XG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuKSB7XG4gICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAodGhpcy5hbGxvd2VkUGF0dGVybik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHBhdHRlcm4gPSAvWzAtOS4sZS1dLztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9XG4gICAgICAgKi9cbiAgICAgIF9iaW5kVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihiaW5kVmFsdWUsIGlucHV0RWxlbWVudCkge1xuICAgICAgICAvLyBUaGUgb2JzZXJ2ZXIgY291bGQgaGF2ZSBydW4gYmVmb3JlIGF0dGFjaGVkKCkgd2hlbiB3ZSBoYXZlIGFjdHVhbGx5IGluaXRpYWxpemVkXG4gICAgICAgIC8vIHRoaXMgcHJvcGVydHkuXG4gICAgICAgIGlmICghaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpbmRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChiaW5kVmFsdWUgIT09IGlucHV0RWxlbWVudC52YWx1ZSl7XG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBiaW5kVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYW51YWxseSBub3RpZnkgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIG5vdGlmeSB1bnRpbCBhZnRlciBzZXR0aW5nIHZhbHVlXG4gICAgICAgIHRoaXMuZmlyZSgnYmluZC12YWx1ZS1jaGFuZ2VkJywge3ZhbHVlOiBiaW5kVmFsdWV9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9vbklucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTmVlZCB0byB2YWxpZGF0ZSBlYWNoIG9mIHRoZSBjaGFyYWN0ZXJzIHBhc3RlZCBpZiB0aGV5IGhhdmVuJ3RcbiAgICAgICAgLy8gYmVlbiB2YWxpZGF0ZWQgaW5zaWRlIGBfb25LZXlwcmVzc2AgYWxyZWFkeS5cbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZFBhdHRlcm4gJiYgIXRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCkge1xuICAgICAgICAgIHZhciB2YWxpZCA9IHRoaXMuX2NoZWNrUGF0dGVyblZhbGlkaXR5KCk7XG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyKCdJbnZhbGlkIHN0cmluZyBvZiBjaGFyYWN0ZXJzIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWxpZElucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgX2lzUHJpbnRhYmxlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyBXaGF0IGEgY29udHJvbC9wcmludGFibGUgY2hhcmFjdGVyIGlzIHZhcmllcyB3aWxkbHkgYmFzZWQgb24gdGhlIGJyb3dzZXIuXG4gICAgICAgIC8vIC0gbW9zdCBjb250cm9sIGNoYXJhY3RlcnMgKGFycm93cywgYmFja3NwYWNlKSBkbyBub3Qgc2VuZCBhIGBrZXlwcmVzc2AgZXZlbnRcbiAgICAgICAgLy8gICBpbiBDaHJvbWUsIGJ1dCB0aGUgKmRvKiBvbiBGaXJlZm94XG4gICAgICAgIC8vIC0gaW4gRmlyZWZveCwgd2hlbiB0aGV5IGRvIHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50LCBjb250cm9sIGNoYXJzIGhhdmVcbiAgICAgICAgLy8gICBhIGNoYXJDb2RlID0gMCwga2V5Q29kZSA9IHh4IChmb3IgZXguIDQwIGZvciBkb3duIGFycm93KVxuICAgICAgICAvLyAtIHByaW50YWJsZSBjaGFyYWN0ZXJzIGFsd2F5cyBzZW5kIGEga2V5cHJlc3MgZXZlbnQuXG4gICAgICAgIC8vIC0gaW4gRmlyZWZveCwgcHJpbnRhYmxlIGNoYXJzIGFsd2F5cyBoYXZlIGEga2V5Q29kZSA9IDAuIEluIENocm9tZSwgdGhlIGtleUNvZGVcbiAgICAgICAgLy8gICBhbHdheXMgbWF0Y2hlcyB0aGUgY2hhckNvZGUuXG4gICAgICAgIC8vIE5vbmUgb2YgdGhpcyBtYWtlcyBhbnkgc2Vuc2UuXG5cbiAgICAgICAgLy8gRm9yIHRoZXNlIGtleXMsIEFTQ0lJIGNvZGUgPT0gYnJvd3NlciBrZXljb2RlLlxuICAgICAgICB2YXIgYW55Tm9uUHJpbnRhYmxlID1cbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA4KSAgIHx8ICAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA5KSAgIHx8ICAvLyB0YWJcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxMykgIHx8ICAvLyBlbnRlclxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDI3KTsgICAgIC8vIGVzY2FwZVxuXG4gICAgICAgIC8vIEZvciB0aGVzZSBrZXlzLCBtYWtlIHN1cmUgaXQncyBhIGJyb3dzZXIga2V5Y29kZSBhbmQgbm90IGFuIEFTQ0lJIGNvZGUuXG4gICAgICAgIHZhciBtb3pOb25QcmludGFibGUgPVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDE5KSAgfHwgIC8vIHBhdXNlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjApICB8fCAgLy8gY2FwcyBsb2NrXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDUpICB8fCAgLy8gaW5zZXJ0XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDYpICB8fCAgLy8gZGVsZXRlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTQ0KSB8fCAgLy8gbnVtIGxvY2tcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDUpIHx8ICAvLyBzY3JvbGwgbG9ja1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID4gMzIgJiYgZXZlbnQua2V5Q29kZSA8IDQxKSAgIHx8IC8vIHBhZ2UgdXAvZG93biwgZW5kLCBob21lLCBhcnJvd3NcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDExMSAmJiBldmVudC5rZXlDb2RlIDwgMTI0KTsgLy8gZm4ga2V5c1xuXG4gICAgICAgIHJldHVybiAhYW55Tm9uUHJpbnRhYmxlICYmICEoZXZlbnQuY2hhckNvZGUgPT0gMCAmJiBtb3pOb25QcmludGFibGUpO1xuICAgICAgfSxcblxuICAgICAgX29uS2V5cHJlc3M6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxvd2VkUGF0dGVybiAmJiB0aGlzLnR5cGUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWdleHAgPSB0aGlzLl9wYXR0ZXJuUmVnRXhwO1xuICAgICAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGtleXMgYW5kIGJhY2tzcGFjZVxuICAgICAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoZSBwYXR0ZXJuIGVpdGhlciBoZXJlIG9yIGluIGBfb25JbnB1dGAsIGJ1dCBub3QgaW4gYm90aC5cbiAgICAgICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGhpc0NoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJpbnRhYmxlKGV2ZW50KSAmJiAhcmVnZXhwLnRlc3QodGhpc0NoYXIpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoJ0ludmFsaWQgY2hhcmFjdGVyICcgKyB0aGlzQ2hhciArICcgbm90IGVudGVyZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9jaGVja1BhdHRlcm5WYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWdleHAgPSB0aGlzLl9wYXR0ZXJuUmVnRXhwO1xuICAgICAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXJlZ2V4cC50ZXN0KHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIFRoZSB2YWxpZGF0b3IgcHJvdmlkZWQgaW4gYHZhbGlkYXRvcmAgd2lsbCBiZSB1c2VkIGZpcnN0LFxuICAgICAgICogdGhlbiBhbnkgY29uc3RyYWludHMuXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2UgdGhlIG5lc3RlZCBpbnB1dCdzIG5hdGl2ZSB2YWxpZGl0eS5cbiAgICAgICAgdmFyIHZhbGlkID0gIHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICAvLyBPbmx5IGRvIGV4dHJhIGNoZWNraW5nIGlmIHRoZSBicm93c2VyIHRob3VnaHQgdGhpcyB3YXMgdmFsaWQuXG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIC8vIEVtcHR5LCByZXF1aXJlZCBpbnB1dCBpcyBpbnZhbGlkXG4gICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5iaW5kVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yLnZhbGlkYXRlLmNhbGwodGhpcywgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXZhbGlkYXRlJyk7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH0sXG5cbiAgICAgIF9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXI6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywgeyB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVWYWx1ZTogZnVuY3Rpb24oYmluZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBiaW5kVmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmBpcm9uLWExMXktYW5ub3VuY2VyYCBpcyBhIHNpbmdsZXRvbiBlbGVtZW50IHRoYXQgaXMgaW50ZW5kZWQgdG8gYWRkIGExMXlcbnRvIGZlYXR1cmVzIHRoYXQgcmVxdWlyZSBvbi1kZW1hbmQgYW5ub3VuY2VtZW50IGZyb20gc2NyZWVuIHJlYWRlcnMuIEluXG5vcmRlciB0byBtYWtlIHVzZSBvZiB0aGUgYW5ub3VuY2VyLCBpdCBpcyBiZXN0IHRvIHJlcXVlc3QgaXRzIGF2YWlsYWJpbGl0eVxuaW4gdGhlIGFubm91bmNpbmcgZWxlbWVudC5cblxuRXhhbXBsZTpcblxuICAgIFBvbHltZXIoe1xuXG4gICAgICBpczogJ3gtY2hhdHR5JyxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgY3JlYXRlIHRoZSBzaW5nbGV0b24gZWxlbWVudCBpZiBpdCBoYXMgbm90XG4gICAgICAgIC8vIGJlZW4gY3JlYXRlZCB5ZXQ6XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG5BZnRlciB0aGUgYGlyb24tYTExeS1hbm5vdW5jZXJgIGhhcyBiZWVuIG1hZGUgYXZhaWxhYmxlLCBlbGVtZW50cyBjYW5cbm1ha2UgYW5ub3VuY2VzIGJ5IGZpcmluZyBidWJibGluZyBgaXJvbi1hbm5vdW5jZWAgZXZlbnRzLlxuXG5FeGFtcGxlOlxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywge1xuICAgICAgdGV4dDogJ1RoaXMgaXMgYW4gYW5ub3VuY2VtZW50ISdcbiAgICB9LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbk5vdGU6IGFubm91bmNlbWVudHMgYXJlIG9ubHkgYXVkaWJsZSBpZiB5b3UgaGF2ZSBhIHNjcmVlbiByZWFkZXIgZW5hYmxlZC5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1hMTF5LWFubm91bmNlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsMHB4LDBweCwwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBhcmlhLWxpdmUkPVwiW1ttb2RlXV1cIj5bW190ZXh0XV08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyID0gUG9seW1lcih7XG4gICAgICAgIGlzOiAnaXJvbi1hMTF5LWFubm91bmNlcicsXG5cbiAgICAgICAgcHJvcGVydGllczoge1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIHZhbHVlIG9mIG1vZGUgaXMgdXNlZCB0byBzZXQgdGhlIGBhcmlhLWxpdmVgIGF0dHJpYnV0ZVxuICAgICAgICAgICAqIGZvciB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkLiBWYWxpZCB2YWx1ZXMgYXJlOiBgb2ZmYCxcbiAgICAgICAgICAgKiBgcG9saXRlYCBhbmQgYGFzc2VydGl2ZWAuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdwb2xpdGUnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIF90ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24tYW5ub3VuY2UnLCB0aGlzLl9vbklyb25Bbm5vdW5jZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2F1c2UgYSB0ZXh0IHN0cmluZyB0byBiZSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGFubm91bmNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGFubm91bmNlOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgICAgICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9vbklyb25Bbm5vdW5jZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFubm91bmNlKGV2ZW50LmRldGFpbC50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gbnVsbDtcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWExMXktYW5ub3VuY2VyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1tZXRhL2lyb24tbWV0YS5odG1sXCI+XG5cbjxzY3JpcHQ+XG4gIC8qKlxuICAgKiBTaW5nbGV0b24gSXJvbk1ldGEgaW5zdGFuY2UuXG4gICAqL1xuICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIGBVc2UgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGVsZW1lbnQgdGhhdCB2YWxpZGF0ZXMgdXNlciBpbnB1dC5cbiAgICogVXNlIHRoZSByZWxhdGVkIGBQb2x5bWVyLklyb25WYWxpZGF0b3JCZWhhdmlvcmAgdG8gYWRkIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIHRvIGFuIGlyb24taW5wdXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGFuIGA8aXJvbi1mb3JtPmAgZWxlbWVudCB2YWxpZGF0ZXMgaXRzIGZpZWxkcyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHN1Ym1pdCBidXR0b24uXG4gICAqIFRvIHZhbGlkYXRlIGEgZm9ybSBpbXBlcmF0aXZlbHksIGNhbGwgdGhlIGZvcm0ncyBgdmFsaWRhdGUoKWAgbWV0aG9kLCB3aGljaCBpbiB0dXJuIHdpbGxcbiAgICogY2FsbCBgdmFsaWRhdGUoKWAgb24gYWxsIGl0cyBjaGlsZHJlbi4gQnkgdXNpbmcgYFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgLCB5b3VyXG4gICAqIGN1c3RvbSBlbGVtZW50IHdpbGwgZ2V0IGEgcHVibGljIGB2YWxpZGF0ZSgpYCwgd2hpY2hcbiAgICogd2lsbCByZXR1cm4gdGhlIHZhbGlkaXR5IG9mIHRoZSBlbGVtZW50LCBhbmQgYSBjb3JyZXNwb25kaW5nIGBpbnZhbGlkYCBhdHRyaWJ1dGUsXG4gICAqIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nLlxuICAgKlxuICAgKiBUbyBpbXBsZW1lbnQgdGhlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIG9mIHlvdXIgZWxlbWVudCwgeW91IG11c3Qgb3ZlcnJpZGVcbiAgICogdGhlIHByb3RlY3RlZCBgX2dldFZhbGlkaXR5KClgIG1ldGhvZCBvZiB0aGlzIGJlaGF2aW91ciwgcmF0aGVyIHRoYW4gYHZhbGlkYXRlKClgLlxuICAgKiBTZWUgW3RoaXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1mb3JtL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLWVsZW1lbnQuaHRtbClcbiAgICogZm9yIGFuIGV4YW1wbGUuXG4gICAqXG4gICAqICMjIyBBY2Nlc3NpYmlsaXR5XG4gICAqXG4gICAqIENoYW5naW5nIHRoZSBgaW52YWxpZGAgcHJvcGVydHksIGVpdGhlciBtYW51YWxseSBvciBieSBjYWxsaW5nIGB2YWxpZGF0ZSgpYCB3aWxsIHVwZGF0ZSB0aGVcbiAgICogYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlLlxuICAgKlxuICAgKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgICogQHBvbHltZXJCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvciA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS5cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBsYXN0IGNhbGwgdG8gYHZhbGlkYXRlYCBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJ1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSA9IG5ldyBQb2x5bWVyLklyb25NZXRhKHt0eXBlOiAndmFsaWRhdG9yJ30pO1xuICAgIH0sXG5cbiAgICBfaW52YWxpZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUmVjb21wdXRlIHRoaXMgZXZlcnkgdGltZSBpdCdzIG5lZWRlZCwgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIHRoZVxuICAgICAqIHVuZGVybHlpbmcgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhIGhhcyBjaGFuZ2VkLiAqL1xuICAgIGdldCBfdmFsaWRhdG9yKCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhICYmXG4gICAgICAgICAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEuYnlLZXkodGhpcy52YWxpZGF0b3IpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWxpZGF0b3IgYHZhbGlkYXRvcmAgZXhpc3RzLlxuICAgICAqL1xuICAgIGhhc1ZhbGlkYXRvcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yICE9IG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHVwZGF0ZXMgYGludmFsaWRgLiBJZiB5b3Ugd2FudFxuICAgICAqIHlvdXIgZWxlbWVudCB0byBoYXZlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2Q7XG4gICAgICogb3ZlcnJpZGUgYF9nZXRWYWxpZGl0eSh2YWx1ZSlgIGluc3RlYWQuXG5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgRGVwcmVjYXRlZDogVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC4gQnkgZGVmYXVsdCxcbiAgICAgKiBpdCBpcyBwYXNzZWQgdG8gdGhlIHZhbGlkYXRvcidzIGB2YWxpZGF0ZSgpYCBmdW5jdGlvbiwgaWYgYSB2YWxpZGF0b3IgaXMgc2V0LlxuICAgICAqIElmIHRoaXMgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZCwgdGhlbiB0aGUgZWxlbWVudCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgICAgKiBpcyB1c2VkLCBpZiBpdCBleGlzdHMuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgICAqL1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gSWYgdGhpcyBpcyBhbiBlbGVtZW50IHRoYXQgYWxzbyBoYXMgYSB2YWx1ZSBwcm9wZXJ0eSwgYW5kIHRoZXJlIHdhc1xuICAgICAgLy8gbm8gZXhwbGljaXQgdmFsdWUgYXJndW1lbnQgcGFzc2VkLCB1c2UgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdGhpcy5fZ2V0VmFsaWRpdHkodGhpcy52YWx1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh2YWx1ZSk7XG4gICAgICByZXR1cm4gIXRoaXMuaW52YWxpZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuICBCeSBkZWZhdWx0LCBpdCBpcyBwYXNzZWRcbiAgICAgKiB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuIFlvdVxuICAgICAqIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBpbXBsZW1lbnQgY3VzdG9tIHZhbGlkaXR5XG4gICAgICogbG9naWMgZm9yIHlvdXIgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC5cbiAgICAgKi9cblxuICAgIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmhhc1ZhbGlkYXRvcigpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4gIC8vIEdlbmVyYXRlIHVuaXF1ZSwgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIElEcyBmb3IgbGFiZWxzIChuZWVkZWQgYnlcbiAgLy8gYXJpYS1sYWJlbGxlZGJ5KSBhbmQgYWRkLW9ucy5cbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyID0ge307XG4gIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCA9IDE7XG4gIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0QWRkb25JRCA9IDE7XG5cbiAgLyoqXG4gICAqIFVzZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIHRvIGltcGxlbWVudCBpbnB1dHMgd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBUaGlzXG4gICAqIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGJ5IGA8cGFwZXItaW5wdXQ+YC4gSXQgZXhwb3NlcyBhIG51bWJlciBvZiBwcm9wZXJ0aWVzIGZyb21cbiAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBhbmQgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gIGFuZCB0aGV5IHNob3VsZCBiZSBib3VuZCBpbiB5b3VyXG4gICAqIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGUgaW5wdXQgZWxlbWVudCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGBpbnB1dEVsZW1lbnRgIHByb3BlcnR5IGlmIHlvdSBuZWVkIHRvIGFjY2Vzc1xuICAgKiBwcm9wZXJ0aWVzIG9yIG1ldGhvZHMgdGhhdCBhcmUgbm90IGV4cG9zZWQuXG4gICAqIEBwb2x5bWVyQmVoYXZpb3IgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JcbiAgICovXG4gIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9ySW1wbCA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgaW5wdXQgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgY2hhbmdlXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGFiZWwgZm9yIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogYDxsYWJlbD5gJ3MgY29udGVudCBhbmQgYGhpZGRlbmAgcHJvcGVydHksIGUuZy5cbiAgICAgICAqIGA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPmAgaW4geW91ciBgdGVtcGxhdGVgXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aXJvbi1pbnB1dD5gJ3MgYGJpbmRWYWx1ZWBcbiAgICAgICAqIHByb3BlcnR5LCBvciB0aGUgdmFsdWUgcHJvcGVydHkgb2YgeW91ciBpbnB1dCB0aGF0IGlzIGBub3RpZnk6dHJ1ZWAuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiBib3RoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBkaXNhYmxlZGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byBib3RoIHRoZVxuICAgICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGFuZCB0aGUgaW5wdXQncyBgaW52YWxpZGAgcHJvcGVydHkuXG4gICAgICAgKlxuICAgICAgICogSWYgYGF1dG9WYWxpZGF0ZWAgaXMgdHJ1ZSwgdGhlIGBpbnZhbGlkYCBhdHRyaWJ1dGUgaXMgbWFuYWdlZCBhdXRvbWF0aWNhbGx5LFxuICAgICAgICogd2hpY2ggY2FuIGNsb2JiZXIgYXR0ZW1wdHMgdG8gbWFuYWdlIGl0IG1hbnVhbGx5LlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGlzIHRvIHNwZWNpZnkgdGhlIHBhdHRlcm4gYWxsb3dlZCBieSBgcHJldmVudEludmFsaWRJbnB1dGAuIElmXG4gICAgICAgKiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhbGxvd2VkUGF0dGVybmBcbiAgICAgICAqIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhbGxvd2VkUGF0dGVybjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGlucHV0LiBUaGUgc3VwcG9ydGVkIHR5cGVzIGFyZSB0aGVcbiAgICAgICAqIFtuYXRpdmUgaW5wdXQncyB0eXBlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fPGlucHV0Pl90eXBlcykuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsXG4gICAgICAgKiBiaW5kIHRoaXMgdG8gdGhlIChQb2x5bWVyIDEpIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIG9yIChQb2x5bWVyIDIpXG4gICAgICAgKiBgPGlyb24taW5wdXQ+YCdzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRhdGFsaXN0IG9mIHRoZSBpbnB1dCAoaWYgYW55KS4gVGhpcyBzaG91bGQgbWF0Y2ggdGhlIGlkIG9mIGFuIGV4aXN0aW5nIGA8ZGF0YWxpc3Q+YC5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGxpc3RgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHBhdHRlcm4gdG8gdmFsaWRhdGUgdGhlIGBpbnB1dGAgd2l0aC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHBhdHRlcm5gIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBwYXR0ZXJuOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlcXVpcmVkYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCxcbiAgICAgICAqIGJpbmQgdGhpcyB0byB0aGUgYDxwYXBlci1pbnB1dC1lcnJvcj5gJ3MgY29udGVudCwgaWYgdXNpbmcuXG4gICAgICAgKi9cbiAgICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gc2hvdyBhIGNoYXJhY3RlciBjb3VudGVyLlxuICAgICAgICovXG4gICAgICBjaGFyQ291bnRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgbm9MYWJlbEZsb2F0YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbm9MYWJlbEZsb2F0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgdGhlIGxhYmVsLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZS4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhdXRvVmFsaWRhdGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE5hbWUgb2YgdGhlIHZhbGlkYXRvciB0byB1c2UuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGB2YWxpZGF0b3JgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvLyBIVE1MSW5wdXRFbGVtZW50IGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvbXBsZXRlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdvZmYnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9mb2N1c2AgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9mb2N1czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19hdXRvZm9jdXNDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBpbnB1dG1vZGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBpbnB1dG1vZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtaW5sZW5ndGhgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtaW5sZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhsZW5ndGhgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtaW5gIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtYXhpbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBDYW4gYmUgYSBTdHJpbmcgKGUuZy4gYFwiMjAwMC0wMS0wMVwiYCkgb3IgYSBOdW1iZXIgKGUuZy4gYDJgKS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGltaXRzIHRoZSBudW1lcmljIG9yIGRhdGUtdGltZSBpbmNyZW1lbnRzLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc3RlcGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG5hbWVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHBsYWNlaG9sZGVyIHN0cmluZyBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwuIElmIHRoaXMgaXMgc2V0LCB0aGUgbGFiZWwgd2lsbCBhbHdheXMgZmxvYXQuXG4gICAgICAgKi9cbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gbmVlZCB0byBzZXQgYSBkZWZhdWx0IHNvIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbCBpcyBydW5cbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlYWRvbmx5YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHNpemVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBzaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLy8gTm9uc3RhbmRhcmQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY2FwaXRhbGl6ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9jYXBpdGFsaXplOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdub25lJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY29ycmVjdGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb3JyZWN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdvZmYnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9zYXZlYCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPXNlYXJjaC5cbiAgICAgICAqL1xuICAgICAgYXV0b3NhdmU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlc3VsdHNgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAgICovXG4gICAgICByZXN1bHRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhY2NlcHRgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgICAqL1xuICAgICAgYWNjZXB0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG11bHRpcGxlYCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPWZpbGUuXG4gICAgICAgKi9cbiAgICAgIG11bHRpcGxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9hcmlhRGVzY3JpYmVkQnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIF9hcmlhTGFiZWxsZWRCeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIGxpc3RlbmVyczoge1xuICAgICAgJ2FkZG9uLWF0dGFjaGVkJzogJ19vbkFkZG9uQXR0YWNoZWQnLFxuICAgIH0sXG5cbiAgICBrZXlCaW5kaW5nczoge1xuICAgICAgJ3NoaWZ0K3RhYjprZXlkb3duJzogJ19vblNoaWZ0VGFiRG93bidcbiAgICB9LFxuXG4gICAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICAgIHRhYmluZGV4OiAwXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBUaGVzZSB0eXBlcyBoYXZlIHNvbWUgZGVmYXVsdCBwbGFjZWhvbGRlciB0ZXh0OyBvdmVybGFwcGluZ1xuICAgICAgLy8gdGhlIGxhYmVsIG9uIHRvcCBvZiBpdCBsb29rcyB0ZXJyaWJsZS4gQXV0by1mbG9hdCB0aGUgbGFiZWwgaW4gdGhpcyBjYXNlLlxuICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQgPSBbXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJ0aW1lXCIsIFwid2Vla1wiLCBcImZpbGVcIl07XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUFyaWFMYWJlbGxlZEJ5KCk7XG5cbiAgICAgIC8vIEluIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCwgdGhpcyBpcyBoYW5kbGVkIGluIGBvbklyb25JbnB1dFJlYWR5YCxcbiAgICAgIC8vIGkuZS4gYWZ0ZXIgdGhlIG5hdGl2ZSBpbnB1dCBoYXMgZmluaXNoZWQgZGlzdHJpYnV0aW5nLiBJbiB0aGUgMS4wIHZlcnNpb24sXG4gICAgICAvLyB0aGUgaW5wdXQgaXMgaW4gdGhlIHNoYWRvdyB0cmVlLCBzbyBpdCdzIGFscmVhZHkgYXZhaWxhYmxlLlxuICAgICAgaWYgKCFQb2x5bWVyLkVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50LnR5cGUpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXBwZW5kU3RyaW5nV2l0aFNwYWNlOiBmdW5jdGlvbihzdHIsIG1vcmUpIHtcbiAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyICsgJyAnICsgbW9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG1vcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIHRhcmdldCA9IFBvbHltZXIuZG9tKGV2ZW50KS5yb290VGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5pZCkge1xuICAgICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPSB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCB0YXJnZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlkID0gJ3BhcGVyLWlucHV0LWFkZC1vbi0nICsgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRBZGRvbklEKys7XG4gICAgICAgIHRhcmdldC5pZCA9IGlkO1xuICAgICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPSB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCBpZCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgaW5wdXQgZWxlbWVudCBhbmQgc2V0cyBhbiBlcnJvciBzdHlsZSBpZiBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGb3J3YXJkIGZvY3VzIHRvIGlucHV0RWxlbWVudC4gT3ZlcnJpZGVuIGZyb20gSXJvbkNvbnRyb2xTdGF0ZS5cbiAgICAgKi9cbiAgICBfZm9jdXNCbHVySGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZS5fZm9jdXNCbHVySGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZm9jdXMgdG8gdGhlIG5lc3RlZCBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIXRoaXMuX3NoaWZ0VGFiUHJlc3NlZCAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgc2hpZnQrdGFiIGtleXByZXNzIGlzIGRldGVjdGVkIGJ5IHRoZSBtZW51LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAgICovXG4gICAgX29uU2hpZnRUYWJEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIG9sZFRhYkluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBvbGRUYWJJbmRleCk7XG4gICAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgfSwgMSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIGBhdXRvVmFsaWRhdGVgIGlzIHRydWUsIHRoZW4gdmFsaWRhdGVzIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIF9oYW5kbGVBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKVxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmVzIHRoZSBjdXJzb3IgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIGFmdGVyIHVwZGF0aW5nIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHNhdmVkLlxuICAgICAqL1xuICAgIHVwZGF0ZVZhbHVlQW5kUHJlc2VydmVDYXJldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgIC8vIE5vdCBhbGwgZWxlbWVudHMgbWlnaHQgaGF2ZSBzZWxlY3Rpb24sIGFuZCBldmVuIGlmIHRoZXkgaGF2ZSB0aGVcbiAgICAgIC8vIHJpZ2h0IHByb3BlcnRpZXMsIGFjY2Vzc2luZyB0aGVtIG1pZ2h0IHRocm93IGFuIGV4Y2VwdGlvbiAobGlrZSBmb3JcbiAgICAgIC8vIDxpbnB1dCB0eXBlPW51bWJlcj4pXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIFRoZSBjdXJzb3IgYXV0b21hdGljYWxseSBqdW1wcyB0byB0aGUgZW5kIGFmdGVyIHJlLXNldHRpbmcgdGhlIHZhbHVlLFxuICAgICAgICAvLyBzbyByZXN0b3JlIGl0IHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEp1c3Qgc2V0IHRoZSB2YWx1ZSBhbmQgZ2l2ZSB1cCBvbiB0aGUgY2FyZXQuXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsOiBmdW5jdGlvbihhbHdheXNGbG9hdExhYmVsLCBwbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyIHx8IGFsd2F5c0Zsb2F0TGFiZWw7XG4gICAgfSxcblxuICAgIF91cGRhdGVBcmlhTGFiZWxsZWRCeTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFiZWwgPSBQb2x5bWVyLmRvbSh0aGlzLnJvb3QpLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgIHRoaXMuX2FyaWFMYWJlbGxlZEJ5ID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBsYWJlbGxlZEJ5O1xuICAgICAgaWYgKGxhYmVsLmlkKSB7XG4gICAgICAgIGxhYmVsbGVkQnkgPSBsYWJlbC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsbGVkQnkgPSAncGFwZXItaW5wdXQtbGFiZWwtJyArIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCsrO1xuICAgICAgICBsYWJlbC5pZCA9IGxhYmVsbGVkQnk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9IGxhYmVsbGVkQnk7XG4gICAgfSxcblxuICAgIF9vbkNoYW5nZTpmdW5jdGlvbihldmVudCkge1xuICAgICAgLy8gSW4gdGhlIFNoYWRvdyBET00sIHRoZSBgY2hhbmdlYCBldmVudCBpcyBub3QgbGVha2VkIGludG8gdGhlXG4gICAgICAvLyBhbmNlc3RvciB0cmVlLCBzbyB3ZSBtdXN0IGRvIHRoaXMgbWFudWFsbHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHRoaXMuZmlyZShldmVudC50eXBlLCB7c291cmNlRXZlbnQ6IGV2ZW50fSwge1xuICAgICAgICAgIG5vZGU6IHRoaXMsXG4gICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBldmVudC5jYW5jZWxhYmxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXV0b2ZvY3VzQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBGaXJlZm94IGRvZXNuJ3QgcmVzcGVjdCB0aGUgYXV0b2ZvY3VzIGF0dHJpYnV0ZSBpZiBpdCdzIGFwcGxpZWQgYWZ0ZXJcbiAgICAgIC8vIHRoZSBwYWdlIGlzIGxvYWRlZCAoQ2hyb21lL1dlYktpdCBkbyByZXNwZWN0IGl0KSwgcHJldmVudGluZyBhblxuICAgICAgLy8gYXV0b2ZvY3VzIGF0dHJpYnV0ZSBzcGVjaWZpZWQgaW4gbWFya3VwIGZyb20gdGFraW5nIGVmZmVjdCB3aGVuIHRoZVxuICAgICAgLy8gZWxlbWVudCBpcyB1cGdyYWRlZC4gQXMgYSB3b3JrYXJvdW5kLCBpZiB0aGUgYXV0b2ZvY3VzIHByb3BlcnR5IGlzIHNldCxcbiAgICAgIC8vIGFuZCB0aGUgZm9jdXMgaGFzbid0IGFscmVhZHkgYmVlbiBtb3ZlZCBlbHNld2hlcmUsIHdlIHRha2UgZm9jdXMuXG4gICAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgdGhpcy5fZm9jdXNhYmxlRWxlbWVudCkge1xuXG4gICAgICAgIC8vIEluIElFIDExLCB0aGUgZGVmYXVsdCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiBiZSB0aGUgcGFnZSdzXG4gICAgICAgIC8vIG91dGVybW9zdCBodG1sIGVsZW1lbnQsIGJ1dCB0aGVyZSBhcmUgYWxzbyBjYXNlcyAodW5kZXIgdGhlXG4gICAgICAgIC8vIHBvbHlmaWxsPykgaW4gd2hpY2ggdGhlIGFjdGl2ZUVsZW1lbnQgaXMgbm90IGEgcmVhbCBIVE1MRWxlbWVudCwgYnV0XG4gICAgICAgIC8vIGp1c3QgYSBwbGFpbiBvYmplY3QuIFdlIGlkZW50aWZ5IHRoZSBsYXR0ZXIgY2FzZSBhcyBoYXZpbmcgbm8gdmFsaWRcbiAgICAgICAgLy8gYWN0aXZlRWxlbWVudC5cbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB2YXIgaXNBY3RpdmVFbGVtZW50VmFsaWQgPSBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gSGFzIHNvbWUgb3RoZXIgZWxlbWVudCBoYXMgYWxyZWFkeSB0YWtlbiB0aGUgZm9jdXM/XG4gICAgICAgIHZhciBpc1NvbWVFbGVtZW50QWN0aXZlID0gaXNBY3RpdmVFbGVtZW50VmFsaWQgJiZcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLyogSUUgMTEgKi9cbiAgICAgICAgaWYgKCFpc1NvbWVFbGVtZW50QWN0aXZlKSB7XG4gICAgICAgICAgLy8gTm8gc3BlY2lmaWMgZWxlbWVudCBoYXMgdGFrZW4gdGhlIGZvY3VzIHlldCwgc28gd2UgY2FuIHRha2UgaXQuXG4gICAgICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBAcG9seW1lckJlaGF2aW9yICovXG4gIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yID0gW1xuICAgIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBQb2x5bWVyLklyb25BMTF5S2V5c0JlaGF2aW9yLFxuICAgIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9ySW1wbFxuICBdO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sXCI+XG5cbjwhLS1cbmA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyPmAgaXMgYSBjaGFyYWN0ZXIgY291bnRlciBmb3IgdXNlIHdpdGggYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gSXRcbnNob3dzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBlbnRlcmVkIGluIHRoZSBpbnB1dCBhbmQgdGhlIG1heCBsZW5ndGggaWYgaXQgaXMgc3BlY2lmaWVkLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XCIyMFwiPlxuICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlcj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBtaXhpbiBpcyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHwgYHt9YFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXQtY2hhci1jb3VudGVyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY2hhci1jb3VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNwYW4+W1tfY2hhckNvdW50ZXJTdHJdXTwvc3Bhbj5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXInLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yXG4gICAgXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIF9jaGFyQ291bnRlclN0cjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnMCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBvdmVycmlkZXMgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpbiBQYXBlcklucHV0QWRkb25CZWhhdmlvci5cbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBpbnZhbGlkOiBib29sZWFuXG4gICAgICogfX0gc3RhdGUgLVxuICAgICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqICAgICB2YWx1ZTogVGhlIGlucHV0IHZhbHVlLlxuICAgICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIGlmICghc3RhdGUuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RhdGUudmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgICAgdmFyIGNvdW50ZXIgPSBzdGF0ZS52YWx1ZS50b1N0cmluZygpLmxlbmd0aC50b1N0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGUuaW5wdXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbWF4bGVuZ3RoJykpIHtcbiAgICAgICAgY291bnRlciArPSAnLycgKyBzdGF0ZS5pbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2hhckNvdW50ZXJTdHIgPSBjb3VudGVyO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWwiLCJcbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnRvQm9keShcIjxsaW5rIHJlbD1zdHlsZXNoZWV0IHR5cGU9dGV4dC9jc3MgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjQwMCw3MDB8Um9ib3RvOjQwMCwzMDAsMzAwaXRhbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWNcXFwiIGNyb3Nzb3JpZ2luPWFub255bW91cz5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2ZvbnQtcm9ib3RvL3JvYm90by5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sXCI+XG5cbjwhLS1cbmA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXMgYSBjb250YWluZXIgZm9yIGEgYDxsYWJlbD5gLCBhbiBgPGlyb24taW5wdXQ+YCBvclxuYDx0ZXh0YXJlYT5gIGFuZCBvcHRpb25hbCBhZGQtb24gZWxlbWVudHMgc3VjaCBhcyBhbiBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlclxuY291bnRlciwgdXNlZCB0byBpbXBsZW1lbnQgTWF0ZXJpYWwgRGVzaWduIHRleHQgZmllbGRzLlxuXG5Gb3IgZXhhbXBsZTpcblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgIDxpcm9uLWlucHV0IHNsb3Q9XCJpbnB1dFwiPlxuICAgICAgICA8aW5wdXQ+XG4gICAgICA8L2lyb24taW5wdXQ+XG4gICAgICAvLyBJbiBQb2x5bWVyIDEuMCwgeW91IHdvdWxkIHVzZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIHNsb3Q9XCJpbnB1dFwiPmAgaW5zdGVhZCBvZiB0aGUgYWJvdmUuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbllvdSBjYW4gc3R5bGUgdGhlIG5lc3RlZCA8aW5wdXQ+IGhvd2V2ZXIgeW91IHdhbnQ7IGlmIHlvdSB3YW50IGl0IHRvIGxvb2sgbGlrZSBhXG5NYXRlcmlhbCBEZXNpZ24gaW5wdXQsIHlvdSBjYW4gc3R5bGUgaXQgd2l0aCB0aGUgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlIG1peGluLlxuXG5EbyBub3Qgd3JhcCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGFyb3VuZCBlbGVtZW50cyB0aGF0IGFscmVhZHkgaW5jbHVkZSBpdCwgc3VjaCBhcyBgPHBhcGVyLWlucHV0PmAuXG5Eb2luZyBzbyBtYXkgY2F1c2UgZXZlbnRzIHRvIGJvdW5jZSBpbmZpbml0ZWx5IGJldHdlZW4gdGhlIGNvbnRhaW5lciBhbmQgaXRzIGNvbnRhaW5lZCBlbGVtZW50LlxuXG4jIyMgTGlzdGVuaW5nIGZvciBpbnB1dCBjaGFuZ2VzXG5cbkJ5IGRlZmF1bHQsIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXMgb24gdGhlIGBiaW5kLXZhbHVlYCBhdHRyaWJ1dGUgb24gaXRzIGNoaWxkcmVuIG5vZGVzIGFuZCBwZXJmb3JtXG50YXNrcyBzdWNoIGFzIGF1dG8tdmFsaWRhdGluZyBhbmQgbGFiZWwgc3R5bGluZyB3aGVuIHRoZSBgYmluZC12YWx1ZWAgY2hhbmdlcy4gWW91IGNhbiBjb25maWd1cmVcbnRoZSBhdHRyaWJ1dGUgaXQgbGlzdGVucyB0byB3aXRoIHRoZSBgYXR0ci1mb3ItdmFsdWVgIGF0dHJpYnV0ZS5cblxuIyMjIFVzaW5nIGEgY3VzdG9tIGlucHV0IGVsZW1lbnRcblxuWW91IGNhbiB1c2UgYSBjdXN0b20gaW5wdXQgZWxlbWVudCBpbiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAsIGZvciBleGFtcGxlIHRvIGltcGxlbWVudCBhXG5jb21wb3VuZCBpbnB1dCBmaWVsZCBsaWtlIGEgc29jaWFsIHNlY3VyaXR5IG51bWJlciBpbnB1dC4gVGhlIGN1c3RvbSBpbnB1dCBlbGVtZW50IHNob3VsZCBoYXZlIHRoZVxuYHBhcGVyLWlucHV0LWlucHV0YCBjbGFzcywgaGF2ZSBhIGBub3RpZnk6dHJ1ZWAgdmFsdWUgcHJvcGVydHkgYW5kIG9wdGlvbmFsbHkgaW1wbGVtZW50c1xuYFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgIGlmIGl0IGlzIHZhbGlkYXRhYmxlLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBhdHRyLWZvci12YWx1ZT1cInNzbi12YWx1ZVwiPlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPlNvY2lhbCBzZWN1cml0eSBudW1iZXI8L2xhYmVsPlxuICAgICAgPHNzbi1pbnB1dCBzbG90PVwiaW5wdXRcIiBjbGFzcz1cInBhcGVyLWlucHV0LWlucHV0XCI+PC9zc24taW5wdXQ+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cblxuSWYgeW91J3JlIHVzaW5nIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpbXBlcmF0aXZlbHksIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZVxudGhhdCB5b3UgYXR0YWNoIGl0cyBjaGlsZHJlbiAodGhlIGBpcm9uLWlucHV0YCBhbmQgdGhlIG9wdGlvbmFsIGBsYWJlbGApIGJlZm9yZSB5b3VcbmF0dGFjaCB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpdHNlbGYsIHNvIHRoYXQgaXQgY2FuIGJlIHNldCB1cCBjb3JyZWN0bHkuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbklmIHRoZSBgYXV0by12YWxpZGF0ZWAgYXR0cmlidXRlIGlzIHNldCwgdGhlIGlucHV0IGNvbnRhaW5lciB3aWxsIHZhbGlkYXRlIHRoZSBpbnB1dCBhbmQgdXBkYXRlXG50aGUgY29udGFpbmVyIHN0eWxpbmcgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlcy5cblxuIyMjIEFkZC1vbnNcblxuQWRkLW9ucyBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdpdGggdGhlIGBhZGQtb25gIGF0dHJpYnV0ZSBhbmRcbmltcGxlbWVudHMgdGhlIGBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yYCBiZWhhdmlvci4gVGhleSBhcmUgbm90aWZpZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbm9yIHZhbGlkaXR5IGNoYW5nZXMsIGFuZCBtYXkgaW1wbGVtZW50IGZ1bmN0aW9uYWxpdHkgc3VjaCBhcyBlcnJvciBtZXNzYWdlcyBvciBjaGFyYWN0ZXIgY291bnRlcnMuXG5UaGV5IGFwcGVhciBhdCB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dC5cblxuIyMjIFByZWZpeGVzIGFuZCBzdWZmaXhlc1xuVGhlc2UgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aXRoIHRoZSBgcHJlZml4YFxub3IgYHN1ZmZpeGAgYXR0cmlidXRlLCBhbmQgYXJlIGRpc3BsYXllZCBpbmxpbmUgd2l0aCB0aGUgaW5wdXQsIGJlZm9yZSBvciBhZnRlci5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8ZGl2IHNsb3Q9XCJwcmVmaXhcIj4kPC9kaXY+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+VG90YWw8L2xhYmVsPlxuICAgICAgPGlyb24taW5wdXQgc2xvdD1cImlucHV0XCI+XG4gICAgICAgIDxpbnB1dD5cbiAgICAgIDwvaXJvbi1pbnB1dD5cbiAgICAgIC8vIEluIFBvbHltZXIgMS4wLCB5b3Ugd291bGQgdXNlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgc2xvdD1cImlucHV0XCI+YCBpbnN0ZWFkIG9mIHRoZSBhYm92ZS5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBmb2N1c2VkIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgaXMgaW52YWxpZCB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yYCB8IElucHV0IGZvcmVncm91bmQgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGFpbmVyIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciB3aGVuIGl0J3MgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWxgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZ2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIGZsb2F0aW5nIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHdoZW4gZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1pbnZhbGlkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHdoZW4gaW52YWxpZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgc3Bpbm5lciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IGNsZWFyIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBJbnRlcm5ldCBFeHBsb3JlciBjbGVhciBidXR0b24gfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LXByZWZpeGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBwcmVmaXggfCBge31gXG5gLS1wYXBlci1pbnB1dC1zdWZmaXhgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgc3VmZml4IHwgYHt9YFxuXG5UaGlzIGVsZW1lbnQgaXMgYGRpc3BsYXk6YmxvY2tgIGJ5IGRlZmF1bHQsIGJ1dCB5b3UgY2FuIHNldCB0aGUgYGlubGluZWAgYXR0cmlidXRlIHRvIG1ha2UgaXRcbmBkaXNwbGF5OmlubGluZS1ibG9ja2AuXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dC1jb250YWluZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZToge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogdG8gbWFrZSBhIHN0YWNraW5nIGNvbnRleHQgKi9cbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW5saW5lXSkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuMzM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZmxvYXRlZC1sYWJlbC1wbGFjZWhvbGRlciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZS5pcy1oaWdobGlnaHRlZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWludmFsaWQgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cywgd2lkdGggMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgd2lkdGggMC4yNXM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuNzUpO1xuXG4gICAgICAgIC8qIFNpbmNlIHdlIHNjYWxlIHRvIDc1LzEwMCBvZiB0aGUgc2l6ZSwgd2UgYWN0dWFsbHkgaGF2ZSAxMDAvNzUgb2YgdGhlXG4gICAgICAgIG9yaWdpbmFsIHNwYWNlIG5vdyBhdmFpbGFibGUgKi9cbiAgICAgICAgd2lkdGg6IDEzMyU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nO1xuICAgICAgfVxuXG4gICAgICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgLyogVE9ETyhub21zKTogRmlndXJlIG91dCB3aHkgbGVhdmluZyB0aGUgd2lkdGggYXQgMTMzJSBiZWZvcmUgdGhlIGFuaW1hdGlvblxuICAgICAgICAgKiBhY3R1YWxseSBtYWtlc1xuICAgICAgICAgKiBpdCB3aWRlciBvbiB0aGUgcmlnaHQgc2lkZSwgbm90IGxlZnQgc2lkZSwgYXMgeW91IHdvdWxkIGV4cGVjdCBpbiBSVEwgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlkZGVuIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaXJvbi1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtaW52YWxpZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByZWZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtcHJlZml4O1xuICAgICAgfVxuXG4gICAgICAuc3VmZml4IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1ub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCkge1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQuaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXRlZC1sYWJlbC1wbGFjZWhvbGRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGhpZGRlbj1cIltbbm9MYWJlbEZsb2F0XV1cIj4mbmJzcDs8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInByZWZpeFwiPjxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+PC9zcGFuPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVJbnB1dENvbnRlbnRDbGFzcyhub0xhYmVsRmxvYXQsYWx3YXlzRmxvYXRMYWJlbCxmb2N1c2VkLGludmFsaWQsX2lucHV0SGFzQ29udGVudCldXVwiIGlkPVwibGFiZWxBbmRJbnB1dENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj48L3Nsb3Q+XG4gICAgICAgIDxzbG90IG5hbWU9XCJpbnB1dFwiPjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInN1ZmZpeFwiPjxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlVW5kZXJsaW5lQ2xhc3MoZm9jdXNlZCxpbnZhbGlkKV1dXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidW5mb2N1c2VkLWxpbmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb2N1c2VkLWxpbmVcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZUFkZE9uQ29udGVudENsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPHNsb3QgbmFtZT1cImFkZC1vblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dC1jb250YWluZXInLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gVGhlIGxhYmVsIGRpc2FwcGVhcnMgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaXNcbiAgICAgICAqIG5vdCBudWxsLlxuICAgICAgICovXG4gICAgICBub0xhYmVsRmxvYXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAgICAgKi9cbiAgICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBhdHRyaWJ1dGUgdG8gbGlzdGVuIGZvciB2YWx1ZSBjaGFuZ2VzIG9uLlxuICAgICAgICovXG4gICAgICBhdHRyRm9yVmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2JpbmQtdmFsdWUnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlIHdoZW4gaXQgY2hhbmdlcy5cbiAgICAgICAqL1xuICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBpcyBpbnZhbGlkLiBUaGlzIHByb3BlcnR5IGlzIHNldCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIGlucHV0IHZhbHVlXG4gICAgICAgKiBjaGFuZ2VzIGlmIGF1dG8tdmFsaWRhdGluZywgb3Igd2hlbiB0aGUgYGlyb24taW5wdXQtdmFsaWRhdGVgIGV2ZW50IGlzIGhlYXJkIGZyb20gYSBjaGlsZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICBvYnNlcnZlcjogJ19pbnZhbGlkQ2hhbmdlZCcsXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBoYXMgZm9jdXMuXG4gICAgICAgKi9cbiAgICAgIGZvY3VzZWQ6IHtcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICBfYWRkb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIC8vIGRvIG5vdCBzZXQgYSBkZWZhdWx0IHZhbHVlIGhlcmUgaW50ZW50aW9uYWxseSAtIGl0IHdpbGwgYmUgaW5pdGlhbGl6ZWQgbGF6aWx5IHdoZW4gYVxuICAgICAgICAvLyBkaXN0cmlidXRlZCBjaGlsZCBpcyBhdHRhY2hlZCwgd2hpY2ggbWF5IG9jY3VyIGJlZm9yZSBjb25maWd1cmF0aW9uIGZvciB0aGlzIGVsZW1lbnRcbiAgICAgICAgLy8gaW4gcG9seWZpbGwuXG4gICAgICB9LFxuXG4gICAgICBfaW5wdXRIYXNDb250ZW50OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgX2lucHV0U2VsZWN0b3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2lucHV0LGlyb24taW5wdXQsdGV4dGFyZWEsLnBhcGVyLWlucHV0LWlucHV0J1xuICAgICAgfSxcblxuICAgICAgX2JvdW5kT25Gb2N1czoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZE9uQmx1cjoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JvdW5kT25JbnB1dDoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZFZhbHVlQ2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vblZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGxpc3RlbmVyczoge1xuICAgICAgJ2FkZG9uLWF0dGFjaGVkJzogJ19vbkFkZG9uQXR0YWNoZWQnLFxuICAgICAgJ2lyb24taW5wdXQtdmFsaWRhdGUnOiAnX29uSXJvbklucHV0VmFsaWRhdGUnXG4gICAgfSxcblxuICAgIGdldCBfdmFsdWVDaGFuZ2VkRXZlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyRm9yVmFsdWUgKyAnLWNoYW5nZWQnO1xuICAgIH0sXG5cbiAgICBnZXQgX3Byb3BlcnR5Rm9yVmFsdWUoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5DYXNlTWFwLmRhc2hUb0NhbWVsQ2FzZSh0aGlzLmF0dHJGb3JWYWx1ZSk7XG4gICAgfSxcblxuICAgIGdldCBfaW5wdXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuZG9tKHRoaXMpLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRTZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIGdldCBfaW5wdXRFbGVtZW50VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdIHx8IHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZTtcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLl9hZGRvbnMpIHtcbiAgICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYm91bmRPbkZvY3VzLCB0cnVlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kT25CbHVyLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYXR0ckZvclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuX3ZhbHVlQ2hhbmdlZEV2ZW50LCB0aGlzLl9ib3VuZFZhbHVlQ2hhbmdlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICAgIGlmICh0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSAmJiB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSAhPSAnJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVmFsdWUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uQWRkb25BdHRhY2hlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5fYWRkb25zKSB7XG4gICAgICAgIHRoaXMuX2FkZG9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0aGlzLl9hZGRvbnMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgICB0aGlzLl9hZGRvbnMucHVzaCh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlVmFsdWUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25Gb2N1czogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zZXRGb2N1c2VkKHRydWUpO1xuICAgIH0sXG5cbiAgICBfb25CbHVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldEZvY3VzZWQoZmFsc2UpO1xuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgX29uSW5wdXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZShldmVudC50YXJnZXQpO1xuICAgIH0sXG5cbiAgICBfb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgaW5wdXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIC8vIFByb2JsZW06IGlmIHRoZSBpbnB1dCBpcyByZXF1aXJlZCBidXQgaGFzIG5vIHRleHQgZW50ZXJlZCwgd2Ugc2hvdWxkXG4gICAgICAvLyBvbmx5IHZhbGlkYXRlIGl0IG9uIGJsdXIgKHNvIHRoYXQgYW4gZW1wdHkgZm9ybSBkb2Vzbid0IGNvbWUgdXAgcmVkXG4gICAgICAvLyBpbW1lZGlhdGVseTsgaG93ZXZlciwgaW4gdGhpcyBoYW5kbGVyLCB3ZSBkb24ndCBrbm93IHdoZXRoZXIgdGhpcyBpc1xuICAgICAgLy8gdGhlIGJvb3RpbmcgdXAgdmFsdWUgb3IgYSB2YWx1ZSBpbiB0aGUgZnV0dXJlLiBJIGFtIGFzc3VtaW5nIHRoYXQgdGhlXG4gICAgICAvLyBjYXNlICB3ZSBjYXJlIGFib3V0IG1hbmlmZXN0cyBpdHNlbGYgd2hlbiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxuICAgICAgLy8gSWYgdGhpcyBjYXVzZXMgZnV0dXJlIHByb2JsZW1zLCB3ZSBuZWVkIHRvIGRvIHNvbWV0aGluZyBsaWtlIHRyYWNrIHdoZXRoZXJcbiAgICAgIC8vIHRoZSBpcm9uLWlucHV0LXJlYWR5IGV2ZW50IGhhcyBmaXJlZCwgYW5kIHRoaXMgaGFuZGxlciBjYW1lIGJlZm9yZSB0aGF0LlxuXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfSxcblxuICAgIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oaW5wdXRFbGVtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcblxuICAgICAgLy8gdHlwZT1cIm51bWJlclwiIGhhY2sgbmVlZGVkIGJlY2F1c2UgdGhpcy52YWx1ZSBpcyBlbXB0eSB1bnRpbCBpdCdzIHZhbGlkXG4gICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDAgfHwgKGlucHV0RWxlbWVudC50eXBlID09PSAnbnVtYmVyJyAmJiAhaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkpIHtcbiAgICAgICAgdGhpcy5faW5wdXRIYXNDb250ZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lucHV0SGFzQ29udGVudCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZUFkZG9ucyh7XG4gICAgICAgIGlucHV0RWxlbWVudDogaW5wdXRFbGVtZW50LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGludmFsaWQ6IHRoaXMuaW52YWxpZFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZTogZnVuY3Rpb24oaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUgJiYgaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHZhciB2YWxpZDtcblxuICAgICAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkYXRlKSB7XG4gICAgICAgICAgdmFsaWQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkID0gaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGwgdGhpcyBsYXN0IHRvIG5vdGlmeSB0aGUgYWRkLW9ucy5cbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKGlucHV0RWxlbWVudCk7XG4gICAgfSxcblxuICAgIF9vbklyb25JbnB1dFZhbGlkYXRlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy5pbnZhbGlkID0gdGhpcy5faW5wdXRFbGVtZW50LmludmFsaWQ7XG4gICAgfSxcblxuICAgIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fYWRkb25zKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWRkb25zKHtpbnZhbGlkOiB0aGlzLmludmFsaWR9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGlzIHRvIHVwZGF0ZSB0aGUgc3RhdGUgb2YgYWRkLW9ucy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgQWRkLW9uIHN0YXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZUFkZG9uczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIGZvciAodmFyIGFkZG9uLCBpbmRleCA9IDA7IGFkZG9uID0gdGhpcy5fYWRkb25zW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBhZGRvbi51cGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY29tcHV0ZUlucHV0Q29udGVudENsYXNzOiBmdW5jdGlvbihub0xhYmVsRmxvYXQsIGFsd2F5c0Zsb2F0TGFiZWwsIGZvY3VzZWQsIGludmFsaWQsIF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgIHZhciBjbHMgPSAnaW5wdXQtY29udGVudCc7XG4gICAgICBpZiAoIW5vTGFiZWxGbG9hdCkge1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG5cbiAgICAgICAgaWYgKGFsd2F5c0Zsb2F0TGFiZWwgfHwgX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWZsb2F0aW5nJztcbiAgICAgICAgICAvLyBJZiB0aGUgbGFiZWwgaXMgZmxvYXRpbmcsIGlnbm9yZSBhbnkgb2Zmc2V0cyB0aGF0IG1heSBoYXZlIGJlZW5cbiAgICAgICAgICAvLyBhcHBsaWVkIGZyb20gYSBwcmVmaXggZWxlbWVudC5cbiAgICAgICAgICB0aGlzLiQubGFiZWxBbmRJbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuXG4gICAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgICAgY2xzICs9IFwiIGxhYmVsLWlzLWhpZ2hsaWdodGVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdoZW4gdGhlIGxhYmVsIGlzIG5vdCBmbG9hdGluZywgaXQgc2hvdWxkIG92ZXJsYXAgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLiQubGFiZWxBbmRJbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtaGlkZGVuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgICBjbHMgKz0gJyBmb2N1c2VkJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbHM7XG4gICAgfSxcblxuICAgIF9jb21wdXRlVW5kZXJsaW5lQ2xhc3M6IGZ1bmN0aW9uKGZvY3VzZWQsIGludmFsaWQpIHtcbiAgICAgIHZhciBjbHMgPSAndW5kZXJsaW5lJztcbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWhpZ2hsaWdodGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNscztcbiAgICB9LFxuXG4gICAgX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzczogZnVuY3Rpb24oZm9jdXNlZCwgaW52YWxpZCkge1xuICAgICAgdmFyIGNscyA9ICdhZGQtb24tY29udGVudCc7XG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1oaWdobGlnaHRlZCdcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbHM7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1jb250YWluZXIuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sXCI+XG5cbjwhLS1cbmA8cGFwZXItaW5wdXQtZXJyb3I+YCBpcyBhbiBlcnJvciBtZXNzYWdlIGZvciB1c2Ugd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBUaGUgZXJyb3IgaXNcbmRpc3BsYXllZCB3aGVuIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGlzIGBpbnZhbGlkYC5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8aW5wdXQgcGF0dGVybj1cIlswLTldKlwiPlxuICAgICAgPHBhcGVyLWlucHV0LWVycm9yIHNsb3Q9XCJhZGQtb25cIj5Pbmx5IG51bWJlcnMgYXJlIGFsbG93ZWQhPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yYCB8IFRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSBlcnJvciB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtZXJyb3JgICAgICAgICAgICAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZXJyb3IgICAgICAgIHwgYHt9YFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXQtZXJyb3JcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtZXJyb3I7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH07XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dC1lcnJvcicsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBlcnJvciBpcyBzaG93aW5nLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBvdmVycmlkZXMgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpbiBQYXBlcklucHV0QWRkb25CZWhhdmlvci5cbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBpbnZhbGlkOiBib29sZWFuXG4gICAgICogfX0gc3RhdGUgLVxuICAgICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqICAgICB2YWx1ZTogVGhlIGlucHV0IHZhbHVlLlxuICAgICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHRoaXMuX3NldEludmFsaWQoc3RhdGUuaW52YWxpZCk7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1lcnJvci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlcy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1jYXJkYCBpcyBhIGNvbnRhaW5lciB3aXRoIGEgZHJvcCBzaGFkb3cuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlNvbWUgY29udGVudDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPlNvbWUgYWN0aW9uPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbkV4YW1wbGUgLSB0b3AgY2FyZCBpbWFnZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCIgaW1hZ2U9XCIvcGF0aC90by9pbWFnZS5wbmdcIiBhbHQ9XCJpbWFnZVwiPlxuICAgICAgLi4uXG4gICAgPC9wYXBlci1jYXJkPlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5CeSBkZWZhdWx0LCB0aGUgYGFyaWEtbGFiZWxgIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZSBvZiB0aGUgYGhlYWRpbmdgIGF0dHJpYnV0ZS5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvcmAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY2FyZCB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgaGVhZGVyIHRleHQgfCBgIzAwMGBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRpdGxlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2VgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRleHQgb3ZlcmxhcHBpbmcgdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgY29udGVudCBzZWN0aW9ufCBge31gXG5gLS1wYXBlci1jYXJkLWFjdGlvbnNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBhY3Rpb24gc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1jYXJkXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWNhcmRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZDtcbiAgICAgIH1cblxuICAgICAgLyogSUUgMTAgc3VwcG9ydCBmb3IgSFRNTDUgaGlkZGVuIGF0dHIgKi9cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciBpcm9uLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWlyb24taW1hZ2Utd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3IsICMwMDApO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQub3Zlci1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtYWN0aW9ucztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjFcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiM1wiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjRcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aXJvbi1pbWFnZVxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpbWFnZV1dXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbiQ9XCJbW19pc0hpZGRlbihpbWFnZSldXVwiXG4gICAgICAgICAgc3JjPVwiW1tpbWFnZV1dXCJcbiAgICAgICAgICBhbHQ9XCJbW2FsdF1dXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJJbWFnZV1dXCJcbiAgICAgICAgICBwcmVsb2FkPVwiW1twcmVsb2FkSW1hZ2VdXVwiXG4gICAgICAgICAgZmFkZT1cIltbZmFkZUltYWdlXV1cIj48L2lyb24taW1hZ2U+XG4gICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFoZWFkaW5nXV1cIiBjbGFzcyQ9XCJ0aXRsZS10ZXh0IFtbX2NvbXB1dGVIZWFkaW5nQ2xhc3MoaW1hZ2UpXV1cIj5bW2hlYWRpbmddXTwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWNhcmQnLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNhcmQuXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkaW5nOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICBvYnNlcnZlcjogJ19oZWFkaW5nQ2hhbmdlZCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVybCBvZiB0aGUgdGl0bGUgaW1hZ2Ugb2YgdGhlIGNhcmQuXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgYWx0ZXJuYXRpdmUgb2YgdGhlIGNhcmQncyB0aXRsZSBpbWFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGFsdDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgaW1hZ2UgdXJsIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlXG4gICAgICAgICAqIGBwbGFjZWhvbGRlcmAgaW1hZ2UgdG8gYmUgc2hvd24gdW50aWwgdGhlIGltYWdlIGlzIGZ1bGx5IHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJlbG9hZEltYWdlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgcHJlbG9hZEltYWdlYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlSW1hZ2VgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGVcbiAgICAgICAgICogaW1hZ2UgdG8gZmFkZSBpbnRvIHBsYWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZmFkZUltYWdlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpbWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBiYWNrZ3JvdW5kL3BsYWNlaG9sZGVyIHVudGlsIHRoZSBzcmMgaW1hZ2UgaGFzXG4gICAgICAgICAqIGxvYWRlZC4gVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnQgcmVuZGVyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXJJbWFnZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgei1kZXB0aCBvZiB0aGUgY2FyZCwgZnJvbSAwLTUuXG4gICAgICAgICAqL1xuICAgICAgICBlbGV2YXRpb246IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgdG8gYW5pbWF0ZSB0aGUgY2FyZCBzaGFkb3cgd2hlbiBzZXR0aW5nIGEgbmV3XG4gICAgICAgICAqIGB6YCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGVkU2hhZG93OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZC1vbmx5IHByb3BlcnR5IHVzZWQgdG8gcGFzcyBkb3duIHRoZSBgYW5pbWF0ZWRTaGFkb3dgIHZhbHVlIHRvXG4gICAgICAgICAqIHRoZSB1bmRlcmx5aW5nIHBhcGVyLW1hdGVyaWFsIHN0eWxlIChzaW5jZSB0aGV5IGhhdmUgZGlmZmVyZW50IG5hbWVzKS5cbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUFuaW1hdGVkKGFuaW1hdGVkU2hhZG93KSdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXQgZnVuY3Rpb24gZm9yIGFyaWEtaGlkZGVuLiBVc2UgdGhlICEgb3BlcmF0b3IgcmVzdWx0cyBpbiB0aGVcbiAgICAgICAqIGVtcHR5IHN0cmluZyB3aGVuIGdpdmVuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAgKi9cbiAgICAgIF9pc0hpZGRlbjogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgICAgIH0sXG5cbiAgICAgIF9oZWFkaW5nQ2hhbmdlZDogZnVuY3Rpb24oaGVhZGluZykge1xuICAgICAgICB2YXIgY3VycmVudEhlYWRpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaGVhZGluZycpLFxuICAgICAgICAgICAgY3VycmVudExhYmVsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRMYWJlbCAhPT0gJ3N0cmluZycgfHwgY3VycmVudExhYmVsID09PSBjdXJyZW50SGVhZGluZykge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgaGVhZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSGVhZGluZ0NsYXNzOiBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICByZXR1cm4gaW1hZ2UgPyAnIG92ZXItaW1hZ2UnIDogJyc7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUFuaW1hdGVkOiBmdW5jdGlvbihhbmltYXRlZFNoYWRvdykge1xuICAgICAgICByZXR1cm4gYW5pbWF0ZWRTaGFkb3c7XG4gICAgICB9XG4gICAgfSk7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1jYXJkL3BhcGVyLWNhcmQuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmBpcm9uLWltYWdlYCBpcyBhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIGFuIGltYWdlIHRoYXQgcHJvdmlkZXMgdXNlZnVsIHNpemluZyBhbmRcbnByZWxvYWRpbmcgb3B0aW9ucyBub3QgZm91bmQgb24gdGhlIHN0YW5kYXJkIGA8aW1nPmAgdGFnLlxuXG5UaGUgYHNpemluZ2Agb3B0aW9uIGFsbG93cyB0aGUgaW1hZ2UgdG8gYmUgZWl0aGVyIGNyb3BwZWQgKGBjb3ZlcmApIG9yXG5sZXR0ZXJib3hlZCAoYGNvbnRhaW5gKSB0byBmaWxsIGEgZml4ZWQgdXNlci1zaXplIHBsYWNlZCBvbiB0aGUgZWxlbWVudC5cblxuVGhlIGBwcmVsb2FkYCBvcHRpb24gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSByZW5kZXJpbmcgdGhlIGltYWdlIHVudGlsIHRoZVxuaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLiAgSW4gdGhlIGludGVyaW0sIGVpdGhlciB0aGUgZWxlbWVudCdzIENTUyBgYmFja2dyb3VuZC1jb2xvcmBcbmNhbiBiZSBiZSB1c2VkIGFzIHRoZSBwbGFjZWhvbGRlciwgb3IgdGhlIGBwbGFjZWhvbGRlcmAgcHJvcGVydHkgY2FuIGJlXG5zZXQgdG8gYSBVUkwgKHByZWZlcmFibHkgYSBkYXRhLVVSSSwgZm9yIGluc3RhbnQgcmVuZGVyaW5nKSBmb3IgYW5cbnBsYWNlaG9sZGVyIGltYWdlLlxuXG5UaGUgYGZhZGVgIG9wdGlvbiAob25seSB2YWxpZCB3aGVuIGBwcmVsb2FkYCBpcyBzZXQpIHdpbGwgY2F1c2UgdGhlIHBsYWNlaG9sZGVyXG5pbWFnZS9jb2xvciB0byBiZSBmYWRlZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgcmVuZGVyZWQuXG5cbkV4YW1wbGVzOlxuXG4gIEJhc2ljYWxseSBpZGVudGljYWwgdG8gYDxpbWcgc3JjPVwiLi4uXCI+YCB0YWc6XG5cbiAgICA8aXJvbi1pbWFnZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGxldHRlcmJveCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvbnRhaW5cIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBjcm9wIHRoZSBpbWFnZSB0byBmaXQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgc2l6aW5nPVwiY292ZXJcIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBzaG93IGxpZ2h0LWdyYXkgYmFja2dyb3VuZCB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBhIGJhc2UtNjQgZW5jb2RlZCBwbGFjZWhvbGRlciBpbWFnZSB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgcGxhY2Vob2xkZXI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsLi4uXCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGZhZGUgdGhlIGxpZ2h0LWdyYXkgYmFja2dyb3VuZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgbG9hZGVkOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBmYWRlIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1pcm9uLWltYWdlLXBsYWNlaG9sZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gI3BsYWNlaG9sZGVyIHwgYHt9YFxuYC0taXJvbi1pbWFnZS13aWR0aGAgfCBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuYC0taXJvbi1pbWFnZS1oZWlnaHRgIHwgU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVkIGltYWdlIHwgYGF1dG9gXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZWxlbWVudCBpcm9uLWltYWdlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24taW1hZ2VcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNiYXNlVVJJQW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWltYWdlLXdpZHRoLCBhdXRvKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWltYWdlLWhlaWdodCwgYXV0byk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjc2l6ZWRJbWdEaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NpemluZ10pICNpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjcGxhY2Vob2xkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgQGFwcGx5IC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyLmZhZGVkLW91dCB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhIGlkPVwiYmFzZVVSSUFuY2hvclwiIGhyZWY9XCIjXCI+PC9hPlxuICAgIDxkaXYgaWQ9XCJzaXplZEltZ0RpdlwiXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIGhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2SGlkZGVuKHNpemluZyldXVwiXG4gICAgICBhcmlhLWhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUhpZGRlbihhbHQpXV1cIlxuICAgICAgYXJpYS1sYWJlbCQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUxhYmVsKGFsdCwgc3JjKV1dXCI+PC9kaXY+XG4gICAgPGltZyBpZD1cImltZ1wiXG4gICAgICBhbHQkPVwiW1thbHRdXVwiXG4gICAgICBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0hpZGRlbihzaXppbmcpXV1cIlxuICAgICAgY3Jvc3NvcmlnaW4kPVwiW1tjcm9zc29yaWdpbl1dXCJcbiAgICAgIG9uLWxvYWQ9XCJfaW1nT25Mb2FkXCJcbiAgICAgIG9uLWVycm9yPVwiX2ltZ09uRXJyb3JcIj5cbiAgICA8ZGl2IGlkPVwicGxhY2Vob2xkZXJcIlxuICAgICAgaGlkZGVuJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbihwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIlxuICAgICAgY2xhc3MkPVwiW1tfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lKHByZWxvYWQsIGZhZGUsIGxvYWRpbmcsIGxvYWRlZCldXVwiPjwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ2lyb24taW1hZ2UnLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgVVJMIG9mIGFuIGltYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNob3J0IHRleHQgYWx0ZXJuYXRpdmUgZm9yIHRoZSBpbWFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGFsdDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDT1JTIGVuYWJsZWQgaW1hZ2VzIHN1cHBvcnQ6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXG4gICAgICAgICAqL1xuICAgICAgICBjcm9zc29yaWdpbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRydWUsIHRoZSBpbWFnZSBpcyBwcmV2ZW50ZWQgZnJvbSBsb2FkaW5nIGFuZCBhbnkgcGxhY2Vob2xkZXIgaXNcbiAgICAgICAgICogc2hvd24uICBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBhIGJpbmRpbmcgdG8gdGhlIHNyYyBwcm9wZXJ0eSBpcyBrbm93biB0b1xuICAgICAgICAgKiBiZSBpbnZhbGlkLCB0byBwcmV2ZW50IDQwNCByZXF1ZXN0cy5cbiAgICAgICAgICovXG4gICAgICAgIHByZXZlbnRMb2FkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBpbWFnZS4gIFZhbGlkIHZhbHVlcyBhcmUgYGNvbnRhaW5gIChmdWxsXG4gICAgICAgICAqIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBhbmRcbiAgICAgICAgICogbGV0dGVyYm94ZWQpIG9yIGBjb3ZlcmAgKGltYWdlIGlzIGNyb3BwZWQgaW4gb3JkZXIgdG8gZnVsbHkgY292ZXIgdGhlXG4gICAgICAgICAqIGJvdW5kcyBvZiB0aGUgZWxlbWVudCksIG9yIGBudWxsYCAoZGVmYXVsdDogaW1hZ2UgdGFrZXMgbmF0dXJhbCBzaXplKS5cbiAgICAgICAgICovXG4gICAgICAgIHNpemluZzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBhIHNpemluZyBvcHRpb24gaXMgdXNlZCAoYGNvdmVyYCBvciBgY29udGFpbmApLCB0aGlzIGRldGVybWluZXNcbiAgICAgICAgICogaG93IHRoZSBpbWFnZSBpcyBhbGlnbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBib3VuZHMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ2NlbnRlcidcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGBzcmNgIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlIGBwbGFjZWhvbGRlcmBcbiAgICAgICAgICogaW1hZ2UgdG8gYmUgc2hvd24gdW50aWwgdGhlIG5ldyBpbWFnZSBoYXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJlbG9hZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlIGhhc1xuICAgICAgICAgKiBsb2FkZWQuICBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudCByZW5kZXJpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBvYnNlcnZlcjogJ19wbGFjZWhvbGRlckNoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZWxvYWRgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGUgaW1hZ2UgdG9cbiAgICAgICAgICogZmFkZSBpbnRvIHBsYWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZmFkZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IGlzIHRydWUgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZGVkOiB7XG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IHRyYWNrcyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgaW1hZ2Ugd2hlbiB0aGUgYHByZWxvYWRgXG4gICAgICAgICAqIG9wdGlvbiBpcyB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBzZXQgYHNyY2AgZmFpbGVkIHRvIGxvYWQuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZVxuICAgICAgICAgKiBzZXQgdmlhIENTUy5cbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfd2lkdGhDaGFuZ2VkJyxcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBoZWlnaHQgb2YgaW1hZ2UgKGUuZy4gdmlhIGJpbmRpbmcpOyBzaXplIG1heSBhbHNvIGJlXG4gICAgICAgICAqIHNldCB2aWEgQ1NTLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXR0cmlidXRlIGhlaWdodFxuICAgICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfaGVpZ2h0Q2hhbmdlZCcsXG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ190cmFuc2Zvcm1DaGFuZ2VkKHNpemluZywgcG9zaXRpb24pJyxcbiAgICAgICAgJ19sb2FkU3RhdGVPYnNlcnZlcihzcmMsIHByZXZlbnRMb2FkKSdcbiAgICAgIF0sXG5cbiAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICAgICAgfSxcblxuICAgICAgX2ltZ09uTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgICB9LFxuXG4gICAgICBfaW1nT25FcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3IodHJ1ZSk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZVBsYWNlaG9sZGVySGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnByZWxvYWQgfHwgKCF0aGlzLmZhZGUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByZWxvYWQgJiYgdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpID8gJ2ZhZGVkLW91dCcgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nRGl2SGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnNpemluZztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nRGl2QVJJQUhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsdCA9PT0gJycgPyAndHJ1ZScgOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmFsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvbHltZXIuUmVzb2x2ZVVybC5yZXNvbHZlVXJsIHdpbGwgcmVzb2x2ZSAnJyByZWxhdGl2ZSB0byBhIFVSTCB4IHRvXG4gICAgICAgIC8vIHRoYXQgVVJMIHgsIGJ1dCAnJyBpcyB0aGUgZGVmYXVsdCBmb3Igc3JjLlxuICAgICAgICBpZiAodGhpcy5zcmMgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9URTogVXNlIG9mIGBVUkxgIHdhcyByZW1vdmVkIGhlcmUgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgICAvLyBjb25zdHJ1Y3RpbmcgaXQuIElmIHRoaXMgZW5kcyB1cCBiZWluZyBwcm9ibGVtYXRpYywgd2Ugc2hvdWxkXG4gICAgICAgIC8vIGNvbnNpZGVyIHJldmVydGluZyBhbmQgYWRkaW5nIHRoZSBVUkwgcG9seWZpbGwgYXMgYSBkZXYgZGVwZW5kZW5jeS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYyk7XG4gICAgICAgIC8vIFJlbW92ZSBxdWVyeSBwYXJ0cywgZ2V0IGZpbGUgbmFtZS5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLnJlcGxhY2UoL1s/fCNdLiovZywgJycpLnNwbGl0KCcvJykucG9wKCk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0hpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc2l6aW5nO1xuICAgICAgfSxcblxuICAgICAgX3dpZHRoQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBpc05hTih0aGlzLndpZHRoKSA/IHRoaXMud2lkdGggOiB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIF9oZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBpc05hTih0aGlzLmhlaWdodCkgPyB0aGlzLmhlaWdodCA6IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIF9sb2FkU3RhdGVPYnNlcnZlcjogZnVuY3Rpb24oc3JjLCBwcmV2ZW50TG9hZCkge1xuICAgICAgICB2YXIgbmV3UmVzb2x2ZWRTcmMgPSB0aGlzLl9yZXNvbHZlU3JjKHNyYyk7XG4gICAgICAgIGlmIChuZXdSZXNvbHZlZFNyYyA9PT0gdGhpcy5fcmVzb2x2ZWRTcmMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICAgICAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgICAgICBpZiAoc3JjID09PSAnJyB8fCBwcmV2ZW50TG9hZCkge1xuICAgICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gbmV3UmVzb2x2ZWRTcmM7XG4gICAgICAgICAgdGhpcy4kLmltZy5zcmMgPSB0aGlzLl9yZXNvbHZlZFNyYztcbiAgICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyB0aGlzLl9yZXNvbHZlZFNyYyArICdcIiknO1xuXG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX3BsYWNlaG9sZGVyQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJC5wbGFjZWhvbGRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPyAndXJsKFwiJyArIHRoaXMucGxhY2Vob2xkZXIgKyAnXCIpJyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX3RyYW5zZm9ybUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2l6ZWRJbWdEaXZTdHlsZSA9IHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZTtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGU7XG5cbiAgICAgICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICAgIHRoaXMuc2l6aW5nO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxuICAgICAgICAgIHRoaXMuc2l6aW5nID8gdGhpcy5wb3NpdGlvbiA6ICcnO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9XG4gICAgICAgICAgdGhpcy5zaXppbmcgPyAnbm8tcmVwZWF0JyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX3Jlc29sdmVTcmM6IGZ1bmN0aW9uKHRlc3RTcmMpIHtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gUG9seW1lci5SZXNvbHZlVXJsLnJlc29sdmVVcmwodGVzdFNyYywgdGhpcy4kLmJhc2VVUklBbmNob3IuaHJlZik7XG4gICAgICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAgICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgICAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgICAgIGlmIChyZXNvbHZlZFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgLy8gSW4gSUUgbG9jYXRpb24ub3JpZ2luIG1pZ2h0IG5vdCB3b3JrXG4gICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzYzODAyL2xvY2F0aW9uLW9yaWdpbi1pcy11bmRlZmluZWQtaW4taWUtMTEtb24td2luZG93cy0xMC1idXQtd29ya3Mtb24td2luZG93cy03XG4gICAgICAgICAgcmVzb2x2ZWQgPSAobG9jYXRpb24ub3JpZ2luIHx8IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpICsgcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWwiLCJcbnJlcXVpcmUoJy4uLy4uL3BvbHltZXIvcG9seW1lci5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL3NoYWRvdy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItbWF0ZXJpYWwtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT46aG9zdCxodG1sey0tcGFwZXItbWF0ZXJpYWw6e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMmRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi00ZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTZkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tOGRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO307fS5wYXBlci1tYXRlcmlhbCw6aG9zdCgucGFwZXItbWF0ZXJpYWwpe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIxXFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMVxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMlxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjJcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjNcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIzXFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI0XFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNFxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNVxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjVcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuXG5gaXJvbi1saXN0YCBkaXNwbGF5cyBhIHZpcnR1YWwsICdpbmZpbml0ZScgbGlzdC4gVGhlIHRlbXBsYXRlIGluc2lkZVxudGhlIGlyb24tbGlzdCBlbGVtZW50IHJlcHJlc2VudHMgdGhlIERPTSB0byBjcmVhdGUgZm9yIGVhY2ggbGlzdCBpdGVtLlxuVGhlIGBpdGVtc2AgcHJvcGVydHkgc3BlY2lmaWVzIGFuIGFycmF5IG9mIGxpc3QgaXRlbSBkYXRhLlxuXG5Gb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgbm90IGV2ZXJ5IGl0ZW0gaW4gdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXQgb25jZTtcbmluc3RlYWQgYSBzbWFsbCBzdWJzZXQgb2YgYWN0dWFsIHRlbXBsYXRlIGVsZW1lbnRzICooZW5vdWdoIHRvIGZpbGwgdGhlIHZpZXdwb3J0KSpcbmFyZSByZW5kZXJlZCBhbmQgcmV1c2VkIGFzIHRoZSB1c2VyIHNjcm9sbHMuIEFzIHN1Y2gsIGl0IGlzIGltcG9ydGFudCB0aGF0IGFsbFxuc3RhdGUgb2YgdGhlIGxpc3QgdGVtcGxhdGUgaXMgYm91bmQgdG8gdGhlIG1vZGVsIGRyaXZpbmcgaXQsIHNpbmNlIHRoZSB2aWV3IG1heVxuYmUgcmV1c2VkIHdpdGggYSBuZXcgbW9kZWwgYXQgYW55IHRpbWUuIFBhcnRpY3VsYXJseSwgYW55IHN0YXRlIHRoYXQgbWF5IGNoYW5nZVxuYXMgdGhlIHJlc3VsdCBvZiBhIHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgbGlzdCBpdGVtIG11c3QgYmUgYm91bmQgdG8gdGhlIG1vZGVsXG50byBhdm9pZCB2aWV3IHN0YXRlIGluY29uc2lzdGVuY3kuXG5cbiMjIyBTaXppbmcgaXJvbi1saXN0XG5cbmBpcm9uLWxpc3RgIG11c3QgZWl0aGVyIGJlIGV4cGxpY2l0bHkgc2l6ZWQsIG9yIGRlbGVnYXRlIHNjcm9sbGluZyB0byBhblxuZXhwbGljaXRseSBzaXplZCBwYXJlbnQuIEJ5IFwiZXhwbGljaXRseSBzaXplZFwiLCB3ZSBtZWFuIGl0IGVpdGhlciBoYXMgYW4gZXhwbGljaXRcbkNTUyBgaGVpZ2h0YCBwcm9wZXJ0eSBzZXQgdmlhIGEgY2xhc3Mgb3IgaW5saW5lIHN0eWxlLCBvciBlbHNlIGlzIHNpemVkIGJ5IG90aGVyXG5sYXlvdXQgbWVhbnMgKGUuZy4gdGhlIGBmbGV4YCBvciBgZml0YCBjbGFzc2VzKS5cblxuIyMjIyBGbGV4Ym94IC0gW2pzYmluXShodHRwOi8vanNiaW4uY29tL2tva2FraS9lZGl0P2h0bWwsb3V0cHV0KVxuXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBFeHBsaWNpdCBzaXplIC0gW2pzYmluXShodHRwOi8vanNiaW4uY29tL3BpYmVmby9lZGl0P2h0bWwsb3V0cHV0KVxuYGBgaHRtbFxuPHRlbXBsYXRlIGlzPVwieC1saXN0XCI+XG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpcm9uLWxpc3Qge1xuICAgICAgaGVpZ2h0OiAxMDB2aDsgLyogZG9uJ3QgdXNlICUgdmFsdWVzIHVubGVzcyB0aGUgcGFyZW50IGVsZW1lbnQgaXMgc2l6ZWQuICovXG4gICAgfVxuICA8L3N0eWxlPlxuICA8aXJvbi1saXN0IGl0ZW1zPVwiW1tpdGVtc11dXCI+XG4gICAgPHRlbXBsYXRlPlxuICAgICAgPGRpdj5cbiAgICAgICAgLi4uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2lyb24tbGlzdD5cbjwvdGVtcGxhdGU+XG5gYGBcbiMjIyMgTWFpbiBkb2N1bWVudCBzY3JvbGxpbmcgLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20vY29qdWxpL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48aGVhZD5cbiAgPHN0eWxlPlxuICAgIGJvZHkge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGFwcC10b29sYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICBpcm9uLWxpc3Qge1xuICAgICAgLyogYWRkIHBhZGRpbmcgc2luY2UgdGhlIGFwcC10b29sYmFyIGlzIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8YXBwLXRvb2xiYXI+QXBwIG5hbWU8L2FwcC10b29sYmFyPlxuICA8aXJvbi1saXN0IHNjcm9sbC10YXJnZXQ9XCJkb2N1bWVudFwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L2JvZHk+XG5gYGBcblxuYGlyb24tbGlzdGAgbXVzdCBiZSBnaXZlbiBhIGA8dGVtcGxhdGU+YCB3aGljaCBjb250YWlucyBleGFjdGx5IG9uZSBlbGVtZW50LiBJbiB0aGUgZXhhbXBsZXNcbmFib3ZlIHdlIHVzZWQgYSBgPGRpdj5gLCBidXQgeW91IGNhbiBwcm92aWRlIGFueSBlbGVtZW50IChpbmNsdWRpbmcgY3VzdG9tIGVsZW1lbnRzKS5cblxuIyMjIFRlbXBsYXRlIG1vZGVsXG5cbkxpc3QgaXRlbSB0ZW1wbGF0ZXMgc2hvdWxkIGJpbmQgdG8gdGVtcGxhdGUgbW9kZWxzIG9mIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuXG5gYGBqc1xue1xuICBpbmRleDogMCwgICAgICAgIC8vIGluZGV4IGluIHRoZSBpdGVtIGFycmF5XG4gIHNlbGVjdGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB0aGUgY3VycmVudCBpdGVtIGlzIHNlbGVjdGVkXG4gIHRhYkluZGV4OiAtMSwgICAgLy8gYSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgdGFiSW5kZXggZm9yIGZvY3VzIG1hbmFnZW1lbnRcbiAgaXRlbToge30gICAgICAgICAvLyB1c2VyIGRhdGEgY29ycmVzcG9uZGluZyB0byBpdGVtc1tpbmRleF1cbn1cbmBgYFxuXG5BbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSB1c2VkIGFzIGRhdGEgaW5kZXggYnkgY2hhbmdpbmcgdGhlXG5gaW5kZXhBc2AgcHJvcGVydHkuIFRoZSBgYXNgIHByb3BlcnR5IGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZ1xuc2NvcGUgZm9yIHRoZSBhcnJheS5cblxuRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgYGRhdGFgIGFycmF5OlxuXG4jIyMjIyBkYXRhLmpzb25cblxuYGBganNcbltcbiAge1wibmFtZVwiOiBcIkJvYlwifSxcbiAge1wibmFtZVwiOiBcIlRpbVwifSxcbiAge1wibmFtZVwiOiBcIk1pa2VcIn1cbl1cbmBgYFxuXG5UaGUgZm9sbG93aW5nIGNvZGUgd291bGQgcmVuZGVyIHRoZSBsaXN0IChub3RlIHRoZSBuYW1lIHByb3BlcnR5IGlzIGJvdW5kIGZyb20gdGhlIG1vZGVsXG5vYmplY3QgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIHNjb3BlKTpcblxuYGBgaHRtbFxuPGlyb24tYWpheCB1cmw9XCJkYXRhLmpzb25cIiBsYXN0LXJlc3BvbnNlPVwie3tkYXRhfX1cIiBhdXRvPjwvaXJvbi1hamF4PlxuPGlyb24tbGlzdCBpdGVtcz1cIltbZGF0YV1dXCIgYXM9XCJpdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgTmFtZTogW1tpdGVtLm5hbWVdXVxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9pcm9uLWxpc3Q+XG5gYGBcblxuIyMjIEdyaWQgbGF5b3V0XG5cbmBpcm9uLWxpc3RgIHN1cHBvcnRzIGEgZ3JpZCBsYXlvdXQgaW4gYWRkaXRpb24gdG8gbGluZWFyIGxheW91dCBieSBzZXR0aW5nXG50aGUgYGdyaWRgIGF0dHJpYnV0ZS4gIEluIHRoaXMgY2FzZSwgdGhlIGxpc3QgdGVtcGxhdGUgaXRlbSBtdXN0IGhhdmUgYm90aCBmaXhlZFxud2lkdGggYW5kIGhlaWdodCAoZS5nLiB2aWEgQ1NTKS4gQmFzZWQgb24gdGhpcywgdGhlIG51bWJlciBvZiBpdGVtc1xucGVyIHJvdyBhcmUgZGV0ZXJtaW5lZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBsaXN0IHZpZXdwb3J0LlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5gaXJvbi1saXN0YCBhdXRvbWF0aWNhbGx5IG1hbmFnZXMgdGhlIGZvY3VzIHN0YXRlIGZvciB0aGUgaXRlbXMuIEl0IGFsc28gcHJvdmlkZXNcbmEgYHRhYkluZGV4YCBwcm9wZXJ0eSB3aXRoaW4gdGhlIHRlbXBsYXRlIHNjb3BlIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24uXG5Gb3IgZXhhbXBsZSwgdXNlcnMgY2FuIHByZXNzIHRoZSB1cCBhbmQgZG93biBrZXlzIHRvIG1vdmUgdG8gcHJldmlvdXMgYW5kIG5leHRcbml0ZW1zIGluIHRoZSBsaXN0OlxuXG5gYGBodG1sXG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXYgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCI+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgU3R5bGluZ1xuXG5Zb3UgY2FuIHVzZSB0aGUgYC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcmAgbWl4aW4gdG8gc3R5bGUgdGhlIGNvbnRhaW5lciBvZiBpdGVtczpcblxuYGBgY3NzXG5pcm9uLWxpc3Qge1xuIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfTtcbn1cbmBgYFxuXG4jIyMgUmVzaXppbmdcblxuYGlyb24tbGlzdGAgbGF5cyBvdXQgdGhlIGl0ZW1zIHdoZW4gaXQgcmVjZWl2ZXMgYSBub3RpZmljYXRpb24gdmlhIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50LlxuVGhpcyBldmVudCBpcyBmaXJlZCBieSBhbnkgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYElyb25SZXNpemFibGVCZWhhdmlvcmAuXG5cbkJ5IGRlZmF1bHQsIGVsZW1lbnRzIHN1Y2ggYXMgYGlyb24tcGFnZXNgLCBgcGFwZXItdGFic2Agb3IgYHBhcGVyLWRpYWxvZ2Agd2lsbCB0cmlnZ2VyXG50aGlzIGV2ZW50IGF1dG9tYXRpY2FsbHkuIElmIHlvdSBoaWRlIHRoZSBsaXN0IG1hbnVhbGx5IChlLmcuIHlvdSB1c2UgYGRpc3BsYXk6IG5vbmVgKVxueW91IG1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgIG9yIGZpcmUgdGhpcyBldmVudCBtYW51YWxseSByaWdodFxuYWZ0ZXIgdGhlIGxpc3QgYmVjYW1lIHZpc2libGUgYWdhaW4uIEZvciBleGFtcGxlOlxuXG5gYGBqc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaXJvbi1saXN0JykuZmlyZSgnaXJvbi1yZXNpemUnKTtcbmBgYFxuXG4jIyMgV2hlbiBzaG91bGQgYDxpcm9uLWxpc3Q+YCBiZSB1c2VkP1xuXG5gaXJvbi1saXN0YCBzaG91bGQgYmUgdXNlZCB3aGVuIGEgcGFnZSBoYXMgc2lnbmlmaWNhbnRseSBtb3JlIERPTSBub2RlcyB0aGFuIHRoZSBvbmVzXG52aXNpYmxlIG9uIHRoZSBzY3JlZW4uIGUuZy4gdGhlIHBhZ2UgaGFzIDUwMCBub2RlcywgYnV0IG9ubHkgMjAgYXJlIHZpc2libGUgYXQgYSB0aW1lLlxuVGhpcyBpcyB3aHkgd2UgcmVmZXIgdG8gaXQgYXMgYSBgdmlydHVhbGAgbGlzdC4gSW4gdGhpcyBjYXNlLCBhIGBkb20tcmVwZWF0YCB3aWxsIHN0aWxsXG5jcmVhdGUgNTAwIG5vZGVzIHdoaWNoIGNvdWxkIHNsb3cgZG93biB0aGUgd2ViIGFwcCwgYnV0IGBpcm9uLWxpc3RgIHdpbGwgb25seSBjcmVhdGUgMjAuXG5cbkhvd2V2ZXIsIGhhdmluZyBhbiBgaXJvbi1saXN0YCBkb2VzIG5vdCBtZWFuIHRoYXQgeW91IGNhbiBsb2FkIGFsbCB0aGUgZGF0YSBhdCBvbmNlLlxuU2F5IHlvdSBoYXZlIGEgbWlsbGlvbiByZWNvcmRzIGluIHRoZSBkYXRhYmFzZSwgeW91IHdhbnQgdG8gc3BsaXQgdGhlIGRhdGEgaW50byBwYWdlc1xuc28geW91IGNhbiBicmluZyBpbiBhIHBhZ2UgYXQgdGhlIHRpbWUuIFRoZSBwYWdlIGNvdWxkIGNvbnRhaW4gNTAwIGl0ZW1zLCBhbmQgaXJvbi1saXN0XG53aWxsIG9ubHkgcmVuZGVyIDIwLlxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50XG5AZWxlbWVudCBpcm9uLWxpc3RcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWxpc3RcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWF4LWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjaXRlbXMge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2dyaWRdKSkgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhcnJheS1zZWxlY3RvclxuICAgICAgICBpZD1cInNlbGVjdG9yXCJcbiAgICAgICAgaXRlbXM9XCJ7e2l0ZW1zfX1cIlxuICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWRJdGVtc319XCJcbiAgICAgICAgc2VsZWN0ZWQtaXRlbT1cInt7c2VsZWN0ZWRJdGVtfX1cIj48L2FycmF5LXNlbGVjdG9yPlxuXG4gICAgPGRpdiBpZD1cIml0ZW1zXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLyk7XG4gIHZhciBJT1NfVE9VQ0hfU0NST0xMSU5HID0gSU9TICYmIElPU1sxXSA+PSA4O1xuICB2YXIgREVGQVVMVF9QSFlTSUNBTF9DT1VOVCA9IDM7XG4gIHZhciBISURERU5fWSA9ICctMTAwMDBweCc7XG4gIHZhciBJVEVNX1dJRFRIID0gMDtcbiAgdmFyIElURU1fSEVJR0hUID0gMTtcbiAgdmFyIFNFQ1JFVF9UQUJJTkRFWCA9IC0xMDA7XG4gIHZhciBJU19WMiA9IFBvbHltZXIuZmx1c2ggIT0gbnVsbDtcbiAgdmFyIEFOSU1BVElPTl9GUkFNRSA9IElTX1YyID8gUG9seW1lci5Bc3luYy5hbmltYXRpb25GcmFtZSA6IDA7XG4gIHZhciBJRExFX1RJTUUgPSBJU19WMiA/IFBvbHltZXIuQXN5bmMuaWRsZVBlcmlvZCA6IDE7XG4gIHZhciBNSUNST19UQVNLID0gSVNfVjIgPyBQb2x5bWVyLkFzeW5jLm1pY3JvVGFzayA6IDI7XG5cbiAgLyogUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IgaXMgb25seSBhdmFpbGFibGUgd2l0aCBQb2x5bWVyIDIuMC4gKi9cbiAgaWYgKCFQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvcikge1xuICAgIC8qIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgICBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciA9IHt9O1xuICB9XG5cbiAgUG9seW1lcih7XG5cbiAgICBpczogJ2lyb24tbGlzdCcsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gYXJyYXkgY29udGFpbmluZyBpdGVtcyBkZXRlcm1pbmluZyBob3cgbWFueSBpbnN0YW5jZXMgb2YgdGhlIHRlbXBsYXRlXG4gICAgICAgKiB0byBzdGFtcCBhbmQgdGhhdCB0aGF0IGVhY2ggdGVtcGxhdGUgaW5zdGFuY2Ugc2hvdWxkIGJpbmQgdG8uXG4gICAgICAgKi9cbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgZm9yIHRoZSBhcnJheVxuICAgICAgICogZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAgICAgICAqL1xuICAgICAgYXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2l0ZW0nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgd2l0aCB0aGUgaW5kZXhcbiAgICAgICAqIGZvciB0aGUgcm93LlxuICAgICAgICovXG4gICAgICBpbmRleEFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdpbmRleCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB0byBpbmRpY2F0ZVxuICAgICAgICogaWYgdGhlIHJvdyBpcyBzZWxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRBczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnc2VsZWN0ZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXMgYSBncmlkLiBHcmlkIGl0ZW1zIG11c3QgaGF2ZVxuICAgICAgICogZml4ZWQgd2lkdGggYW5kIGhlaWdodCBzZXQgdmlhIENTUy4gZS5nLlxuICAgICAgICpcbiAgICAgICAqIGBgYGh0bWxcbiAgICAgICAqIDxpcm9uLWxpc3QgZ3JpZD5cbiAgICAgICAqICAgPHRlbXBsYXRlPlxuICAgICAgICogICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1wiPiAxMDB4MTAwIDwvZGl2PlxuICAgICAgICogICA8L3RlbXBsYXRlPlxuICAgICAgICogPC9pcm9uLWxpc3Q+XG4gICAgICAgKiBgYGBcbiAgICAgICAqL1xuICAgICAgZ3JpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZ3JpZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSwgdGFwcGluZyBhIHJvdyB3aWxsIHNlbGVjdCB0aGUgaXRlbSwgcGxhY2luZyBpdHMgZGF0YSBtb2RlbFxuICAgICAgICogaW4gdGhlIHNldCBvZiBzZWxlY3RlZCBpdGVtcyByZXRyaWV2YWJsZSB2aWEgdGhlIHNlbGVjdGlvbiBwcm9wZXJ0eS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlIHRoYXQgdGFwcGluZyBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBsaXN0IGl0ZW0gd2lsbCBub3RcbiAgICAgICAqIHJlc3VsdCBpbiBzZWxlY3Rpb24sIHNpbmNlIHRoZXkgYXJlIHByZXN1bWVkIHRvIGhhdmUgdGhlaXIgKiBvd24gYWN0aW9uLlxuICAgICAgICovXG4gICAgICBzZWxlY3Rpb25FbmFibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgZmFsc2UsIHRoaXMgaXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBgbnVsbGBcbiAgICAgICAqIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkSXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgdHJ1ZSwgdGhpcyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBzZWxlY3RlZCBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGB0cnVlYCwgbXVsdGlwbGUgaXRlbXMgbWF5IGJlIHNlbGVjdGVkIGF0IG9uY2UgKGluIHRoaXMgY2FzZSxcbiAgICAgICAqIGBzZWxlY3RlZGAgaXMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zKS4gIFdoZW4gYGZhbHNlYCxcbiAgICAgICAqIG9ubHkgb25lIGl0ZW0gbWF5IGJlIHNlbGVjdGVkIGF0IGEgdGltZS5cbiAgICAgICAqL1xuICAgICAgbXVsdGlTZWxlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvZmZzZXQgdG9wIGZyb20gdGhlIHNjcm9sbGluZyBlbGVtZW50IHRvIHRoZSBpcm9uLWxpc3QgZWxlbWVudC5cbiAgICAgICAqIFRoaXMgdmFsdWUgY2FuIGJlIGNvbXB1dGVkIHVzaW5nIHRoZSBwb3NpdGlvbiByZXR1cm5lZCBieSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClgXG4gICAgICAgKiBhbHRob3VnaCBpdCdzIHByZWZlcnJlZCB0byB1c2UgYSBjb25zdGFudCB2YWx1ZSB3aGVuIHBvc3NpYmxlLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdXNlZnVsIHdoZW4gYW4gZXh0ZXJuYWwgc2Nyb2xsaW5nIGVsZW1lbnQgaXMgdXNlZCBhbmQgdGhlcmUnc1xuICAgICAgICogc29tZSBvZmZzZXQgYmV0d2VlbiB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgYW5kIHRoZSBsaXN0LlxuICAgICAgICogRm9yIGV4YW1wbGU6IGEgaGVhZGVyIGlzIHBsYWNlZCBhYm92ZSB0aGUgbGlzdC5cbiAgICAgICAqL1xuICAgICAgc2Nyb2xsT2Zmc2V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAnX2l0ZW1zQ2hhbmdlZChpdGVtcy4qKScsXG4gICAgICAnX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkKHNlbGVjdGlvbkVuYWJsZWQpJyxcbiAgICAgICdfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkKG11bHRpU2VsZWN0aW9uKScsXG4gICAgICAnX3NldE92ZXJmbG93KHNjcm9sbFRhcmdldCwgc2Nyb2xsT2Zmc2V0KSdcbiAgICBdLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlRlbXBsYXRpemVyLFxuICAgICAgUG9seW1lci5Jcm9uUmVzaXphYmxlQmVoYXZpb3IsXG4gICAgICBQb2x5bWVyLklyb25TY3JvbGxUYXJnZXRCZWhhdmlvcixcbiAgICAgIFBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbyBvZiBoaWRkZW4gdGlsZXMgdGhhdCBzaG91bGQgcmVtYWluIGluIHRoZSBzY3JvbGwgZGlyZWN0aW9uLlxuICAgICAqIFJlY29tbWVuZGVkIHZhbHVlIH4wLjUsIHNvIGl0IHdpbGwgZGlzdHJpYnV0ZSB0aWxlcyBldmVseSBpbiBib3RoIGRpcmVjdGlvbnMuXG4gICAgICovXG4gICAgX3JhdGlvOiAwLjUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFkZGluZy10b3AgdmFsdWUgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIF9zY3JvbGxlclBhZGRpbmdUb3A6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGBzY3JvbGxUb3BgLlxuICAgICAqL1xuICAgIF9zY3JvbGxQb3NpdGlvbjogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdW0gb2YgdGhlIGhlaWdodHMgb2YgYWxsIHRoZSB0aWxlcyBpbiB0aGUgRE9NLlxuICAgICAqL1xuICAgIF9waHlzaWNhbFNpemU6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXZlcmFnZSBgb2Zmc2V0SGVpZ2h0YCBvZiB0aGUgdGlsZXMgb2JzZXJ2ZWQgdGlsbCBub3cuXG4gICAgICovXG4gICAgX3BoeXNpY2FsQXZlcmFnZTogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdGlsZXMgd2hpY2ggYG9mZnNldEhlaWdodGAgPiAwIG9ic2VydmVkIHVudGlsIG5vdy5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxBdmVyYWdlQ291bnQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgaXRlbSByZW5kZXJlZCBpbiB0aGUgYF9waHlzaWNhbFN0YXJ0YFxuICAgICAqIHRpbGUgcmVsYXRpdmUgdG8gdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgICAqL1xuICAgIF9waHlzaWNhbFRvcDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgX3ZpcnR1YWxDb3VudDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlc3RpbWF0ZWQgc2Nyb2xsIGhlaWdodCBiYXNlZCBvbiBgX3BoeXNpY2FsQXZlcmFnZWBcbiAgICAgKi9cbiAgICBfZXN0U2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbCBoZWlnaHQgb2YgdGhlIGRvbSBub2RlXG4gICAgICovXG4gICAgX3Njcm9sbEhlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mIGxpc3QuXG4gICAgICovXG4gICAgX3ZpZXdwb3J0SGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBsaXN0LiBUaGlzIGlzIHJlZmVycmVkIGFzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY29udGV4dCBvZiBsaXN0LlxuICAgICAqL1xuICAgIF92aWV3cG9ydFdpZHRoOiAwLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGN1cnJlbnRseSBpbiB0aGUgdHJlZVxuICAgICAqIEB0eXBlIHs/QXJyYXk8IVRlbXBsYXRpemVyTm9kZT59XG4gICAgICovXG4gICAgX3BoeXNpY2FsSXRlbXM6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBoZWlnaHRzIGZvciBlYWNoIGl0ZW0gaW4gYF9waHlzaWNhbEl0ZW1zYFxuICAgICAqIEB0eXBlIHs/QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxTaXplczogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgY2FjaGVkIHZhbHVlIGZvciB0aGUgZmlyc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgKiBTZWUgYGZpcnN0VmlzaWJsZUluZGV4YFxuICAgICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgICAqL1xuICAgIF9maXJzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgUG9seW1lciBjb2xsZWN0aW9uIGZvciB0aGUgaXRlbXMuXG4gICAgICogQHR5cGUgez9Qb2x5bWVyLkNvbGxlY3Rpb259XG4gICAgICovXG4gICAgX2NvbGxlY3Rpb246IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBIGNhY2hlZCB2YWx1ZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgKiBTZWUgYGxhc3RWaXNpYmxlSW5kZXhgXG4gICAgICogQHR5cGUgez9udW1iZXJ9XG4gICAgICovXG4gICAgX2xhc3RWaXNpYmxlSW5kZXhWYWw6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IG51bWJlciBvZiBwYWdlcyB0byByZW5kZXIuIE9uZSBwYWdlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGhlaWdodCBvZiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBfbWF4UGFnZXM6IDIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGZvY3VzZWQgcGh5c2ljYWwgaXRlbS5cbiAgICAgKi9cbiAgICBfZm9jdXNlZEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmlydHVhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkVmlydHVhbEluZGV4OiAtMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwaHlzaWNhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkUGh5c2ljYWxJbmRleDogLTEsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGhlIGl0ZW0gdGhhdCBpcyBmb2N1c2VkIGlmIGl0IGlzIG1vdmVkIG9mZnNjcmVlbi5cbiAgICAgKiBAcHJpdmF0ZSB7P1RlbXBsYXRpemVyTm9kZX1cbiAgICAgKi9cbiAgICBfb2Zmc2NyZWVuRm9jdXNlZEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbSB0aGF0IGJhY2tmaWxscyB0aGUgYF9vZmZzY3JlZW5Gb2N1c2VkSXRlbWAgaW4gdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogbGlzdCB3aGVuIHRoYXQgaXRlbSBpcyBtb3ZlZCBvZmZzY3JlZW4uXG4gICAgICovXG4gICAgX2ZvY3VzQmFja2ZpbGxJdGVtOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gaXRlbXMgcGVyIHJvd1xuICAgICAqL1xuICAgIF9pdGVtc1BlclJvdzogMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiBlYWNoIGdyaWQgaXRlbVxuICAgICAqL1xuICAgIF9pdGVtV2lkdGg6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cgaW4gZ3JpZCBsYXlvdXQuXG4gICAgICovXG4gICAgX3Jvd0hlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb3N0IG9mIHN0YW1waW5nIGEgdGVtcGxhdGUgaW4gbXMuXG4gICAgICovXG4gICAgX3RlbXBsYXRlQ29zdDogMCxcblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCB0byBwYXNzIGV2ZW50Lm1vZGVsIHByb3BlcnR5IHRvIGRlY2xhcmF0aXZlIGV2ZW50IGhhbmRsZXJzIC1cbiAgICAgKiBzZWUgcG9seW1lci9wb2x5bWVyIzQzMzkuXG4gICAgICovXG4gICAgX3BhcmVudE1vZGVsOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGJvdHRvbSBvZiB0aGUgcGh5c2ljYWwgY29udGVudC5cbiAgICAgKi9cbiAgICBnZXQgX3BoeXNpY2FsQm90dG9tKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm90dG9tIG9mIHRoZSBzY3JvbGwuXG4gICAgICovXG4gICAgZ2V0IF9zY3JvbGxCb3R0b20oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsUG9zaXRpb24gKyB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG4tdGggaXRlbSByZW5kZXJlZCBpbiB0aGUgbGFzdCBwaHlzaWNhbCBpdGVtLlxuICAgICAqL1xuICAgIGdldCBfdmlydHVhbEVuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyB0aGlzLl9waHlzaWNhbENvdW50IC0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcGh5c2ljYWwgY29udGVudCB0aGF0IGlzbid0IG9uIHRoZSBzY3JlZW4uXG4gICAgICovXG4gICAgZ2V0IF9oaWRkZW5Db250ZW50U2l6ZSgpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5ncmlkID8gdGhpcy5fcGh5c2ljYWxSb3dzICogdGhpcy5fcm93SGVpZ2h0IDogdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgICAgcmV0dXJuIHNpemUgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGZvciB0aGUgX3VzZXJUZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBnZXQgX2l0ZW1zUGFyZW50KCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuZG9tKFBvbHltZXIuZG9tKHRoaXMuX3VzZXJUZW1wbGF0ZSkucGFyZW50Tm9kZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHNjcm9sbCB0b3AgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IF9tYXhTY3JvbGxUb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fdmlld3BvcnRIZWlnaHQgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXJnZXN0IG4tdGggdmFsdWUgZm9yIGFuIGl0ZW0gc3VjaCB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCBpbiBgX3BoeXNpY2FsU3RhcnRgLlxuICAgICAqL1xuICAgIGdldCBfbWF4VmlydHVhbFN0YXJ0KCkge1xuICAgICAgdmFyIHZpcnR1YWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3codGhpcy5fdmlydHVhbENvdW50KTtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCB2aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50KTtcbiAgICB9LFxuXG4gICAgc2V0IF92aXJ0dWFsU3RhcnQodmFsKSB7XG4gICAgICB2YWwgPSB0aGlzLl9jbGFtcCh2YWwsIDAsIHRoaXMuX21heFZpcnR1YWxTdGFydCk7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfdmlydHVhbFN0YXJ0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydFZhbCB8fCAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgay10aCB0aWxlIHRoYXQgaXMgYXQgdGhlIHRvcCBvZiB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgc2V0IF9waHlzaWNhbFN0YXJ0KHZhbCkge1xuICAgICAgdmFsID0gdmFsICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgIHZhbCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsID0gdmFsO1xuICAgIH0sXG5cbiAgICBnZXQgX3BoeXNpY2FsU3RhcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxTdGFydFZhbCB8fCAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgay10aCB0aWxlIHRoYXQgaXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgZ2V0IF9waHlzaWNhbEVuZCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcGh5c2ljYWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxKSAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgfSxcblxuICAgIHNldCBfcGh5c2ljYWxDb3VudCh2YWwpIHtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbENvdW50VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGltYWwgcGh5c2ljYWwgc2l6ZSBzdWNoIHRoYXQgd2Ugd2lsbCBoYXZlIGVub3VnaCBwaHlzaWNhbCBpdGVtc1xuICAgICAqIHRvIGZpbGwgdXAgdGhlIHZpZXdwb3J0IGFuZCByZWN5Y2xlIHdoZW4gdGhlIHVzZXIgc2Nyb2xscy5cbiAgICAgKlxuICAgICAqIFRoaXMgZGVmYXVsdCB2YWx1ZSBhc3N1bWVzIHRoYXQgd2Ugd2lsbCBhdCBsZWFzdCBoYXZlIHRoZSBlcXVpdmFsZW50XG4gICAgICogdG8gYSB2aWV3cG9ydCBvZiBwaHlzaWNhbCBpdGVtcyBhYm92ZSBhbmQgYmVsb3cgdGhlIHVzZXIncyB2aWV3cG9ydC5cbiAgICAgKi9cbiAgICBnZXQgX29wdFBoeXNpY2FsU2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aWV3cG9ydEhlaWdodCA9PT0gMCA/IEluZmluaXR5IDogdGhpcy5fdmlld3BvcnRIZWlnaHQgKiB0aGlzLl9tYXhQYWdlcztcbiAgICB9LFxuXG4gICAvKipcbiAgICAqIFRydWUgaWYgdGhlIGN1cnJlbnQgbGlzdCBpcyB2aXNpYmxlLlxuICAgICovXG4gICAgZ2V0IF9pc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm9mZnNldFdpZHRoIHx8IHRoaXMub2Zmc2V0SGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBmaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbDtcbiAgICAgIGlmIChpZHggPT0gbnVsbCkge1xuICAgICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcblxuICAgICAgICBpZHggPSB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcblxuICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA+IHRoaXMuX3Njcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkID8gdmlkeCAtICh2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3cpIDogdmlkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSGFuZGxlIGEgcGFydGlhbGx5IHJlbmRlcmVkIGZpbmFsIHJvdyBpbiBncmlkIG1vZGVcbiAgICAgICAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEgPT09IHZpZHgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCAwO1xuICAgICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZHg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBsYXN0VmlzaWJsZUluZGV4KCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgIGlkeCA9IE1hdGgubWluKHRoaXMuX3ZpcnR1YWxDb3VudCxcbiAgICAgICAgICAgICAgdGhpcy5maXJzdFZpc2libGVJbmRleCArIHRoaXMuX2VzdFJvd3NJblZpZXcgKiB0aGlzLl9pdGVtc1BlclJvdyAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgICBpZiAocGh5c2ljYWxPZmZzZXQgPCB0aGlzLl9zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgaWR4ID0gdmlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9LFxuXG4gICAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdldCBfdmlydHVhbFJvd0NvdW50KCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl92aXJ0dWFsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfSxcblxuICAgIGdldCBfZXN0Um93c0luVmlldygpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlld3BvcnRIZWlnaHQgLyB0aGlzLl9yb3dIZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXQgX3BoeXNpY2FsUm93cygpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9LFxuXG4gICAgZ2V0IF9zY3JvbGxPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsZXJQYWRkaW5nVG9wICsgdGhpcy5zY3JvbGxPZmZzZXQ7XG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9kaWRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICAvLyBgaXJvbi1yZXNpemVgIGlzIGZpcmVkIHdoZW4gdGhlIGxpc3QgaXMgYXR0YWNoZWQgaWYgdGhlIGV2ZW50IGlzIGFkZGVkXG4gICAgICAvLyBiZWZvcmUgYXR0YWNoZWQgY2F1c2luZyB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgICAgdGhpcy5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2tleWRvd24nLCAnX2tleWRvd25IYW5kbGVyJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgaWYgdGhpcyBlbGVtZW50IGhhcyBpdHMgb3duIHNjcm9sbGluZyByZWdpb25cbiAgICAgKi9cbiAgICBfc2V0T3ZlcmZsb3c6IGZ1bmN0aW9uKHNjcm9sbFRhcmdldCkge1xuICAgICAgdGhpcy5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IHNjcm9sbFRhcmdldCA9PT0gdGhpcyA/ICd0b3VjaCcgOiAnJztcbiAgICAgIHRoaXMuc3R5bGUub3ZlcmZsb3dZID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ2F1dG8nIDogJyc7XG4gICAgICAvLyBDbGVhciBjYWNoZS5cbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAgICogc2l6ZSBvciBDU1MgcGFkZGluZy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAgICovXG4gICAgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICAgIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCA9IHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gMCA6XG4gICAgICAgICAgcGFyc2VJbnQoc3R5bGVzWydwYWRkaW5nLXRvcCddLCAxMCk7XG4gICAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgICAgdGhpcy5fdmlld3BvcnRXaWR0aCA9IHRoaXMuJC5pdGVtcy5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5fc2Nyb2xsVGFyZ2V0SGVpZ2h0O1xuICAgICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICAgKi9cbiAgICBfc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICAgIHZhciBkZWx0YSA9IHNjcm9sbFRvcCAtIHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9IGRlbHRhID49IDA7XG4gICAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcbiAgICAgIC8vIENsZWFyIGluZGV4ZXMgZm9yIGZpcnN0IGFuZCBsYXN0IHZpc2libGUgaW5kZXhlcy5cbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgLy8gUmFuZG9tIGFjY2Vzcy5cbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgICBkZWx0YSA9IGRlbHRhIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB2YXIgaWR4QWRqdXN0bWVudCA9IE1hdGgucm91bmQoZGVsdGEgLyB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UpICogdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGlkeEFkanVzdG1lbnQ7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgICAgLy8gRXN0aW1hdGUgbmV3IHBoeXNpY2FsIG9mZnNldC5cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSBNYXRoLmZsb29yKHRoaXMuX3ZpcnR1YWxTdGFydCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciByZXVzYWJsZXMgPSB0aGlzLl9nZXRSZXVzYWJsZXMoaXNTY3JvbGxpbmdEb3duKTtcbiAgICAgICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlKHJldXNhYmxlcy5pbmRleGVzLCBpc1Njcm9sbGluZ0Rvd24gPyBudWxsIDogcmV1c2FibGVzLmluZGV4ZXMpO1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX2luY3JlYXNlUG9vbElmTmVlZGVkJywgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZCh0aGlzLCAwKSwgTUlDUk9fVEFTSyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGluZGV4ZXMgb2YgdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdGhhdCBtaWdodCBiZSByZXVzZWQgYW5kIHRoZSBwaHlzaWNhbFRvcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbVRvcCBJZiB0aGUgcG90ZW50aWFsIHJldXNhYmxlIGl0ZW1zIGFyZSBhYm92ZSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKi9cbiAgICBfZ2V0UmV1c2FibGVzOiBmdW5jdGlvbihmcm9tVG9wKSB7XG4gICAgICB2YXIgaXRoLCBsYXN0SXRoLCBvZmZzZXRDb250ZW50LCBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICB2YXIgaWR4cyA9IFtdO1xuICAgICAgdmFyIHByb3RlY3RlZE9mZnNldENvbnRlbnQgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZSAqIHRoaXMuX3JhdGlvO1xuICAgICAgdmFyIHZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHZhciB2aXJ0dWFsRW5kID0gdGhpcy5fdmlydHVhbEVuZDtcbiAgICAgIHZhciBwaHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIHZhciB0b3AgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBib3R0b20gPSB0aGlzLl9waHlzaWNhbEJvdHRvbSArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsQm90dG9tID0gdGhpcy5fc2Nyb2xsQm90dG9tO1xuXG4gICAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgICBpdGggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxFbmQ7XG4gICAgICAgIG9mZnNldENvbnRlbnQgPSBzY3JvbGxUb3AgLSB0b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIG9mZnNldENvbnRlbnQgPSBib3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBwaHlzaWNhbEl0ZW1IZWlnaHQgPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoaXRoKTtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IG9mZnNldENvbnRlbnQgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgIGlmIChpZHhzLmxlbmd0aCA+PSBwaHlzaWNhbENvdW50IHx8IG9mZnNldENvbnRlbnQgPD0gcHJvdGVjdGVkT2Zmc2V0Q29udGVudCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICAgIGlmICh2aXJ0dWFsRW5kICsgaWR4cy5sZW5ndGggKyAxID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICAgIGlmICh0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQgPj0gc2Nyb2xsVG9wIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWR4cy5wdXNoKGl0aCk7XG4gICAgICAgICAgdG9wID0gdG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICAgIGl0aCA9IChpdGggKyAxKSAlIHBoeXNpY2FsQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICAgIGlmICh2aXJ0dWFsU3RhcnQgLSBpZHhzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgICAgaWYgKHRvcCArIHRoaXMuX3BoeXNpY2FsU2l6ZSAtIHBoeXNpY2FsSXRlbUhlaWdodCA8PSBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgICB0b3AgPSB0b3AgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgICAgaXRoID0gKGl0aCA9PT0gMCkgPyBwaHlzaWNhbENvdW50IC0gMSA6IGl0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGluZGV4ZXM6IGlkeHMsIHBoeXNpY2FsVG9wOiB0b3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGl0ZW1zLCBzdGFydGluZyBmcm9tIHRoZSBgX3ZpcnR1YWxTdGFydGAgaXRlbS5cbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBtb3ZpbmdVcFxuICAgICAqL1xuICAgIF91cGRhdGU6IGZ1bmN0aW9uKGl0ZW1TZXQsIG1vdmluZ1VwKSB7XG4gICAgICBpZiAoKGl0ZW1TZXQgJiYgaXRlbVNldC5sZW5ndGggPT09IDApIHx8IHRoaXMuX3BoeXNpY2FsQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFuYWdlRm9jdXMoKTtcbiAgICAgIHRoaXMuX2Fzc2lnbk1vZGVscyhpdGVtU2V0KTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoaXRlbVNldCk7XG4gICAgICAvLyBBZGp1c3Qgb2Zmc2V0IGFmdGVyIG1lYXN1cmluZy5cbiAgICAgIGlmIChtb3ZpbmdVcCkge1xuICAgICAgICB3aGlsZSAobW92aW5nVXAubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGlkeCA9IG1vdmluZ1VwLnBvcCgpO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIC09IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpZHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvb2wgb2YgRE9NIGVsZW1lbnRzIGFuZCBhdHRhY2hlcyB0aGVtIHRvIHRoZSBsb2NhbCBkb20uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBwb29sXG4gICAgICovXG4gICAgX2NyZWF0ZVBvb2w6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHRoaXMuX2Vuc3VyZVRlbXBsYXRpemVkKCk7XG4gICAgICB2YXIgaSwgaW5zdDtcbiAgICAgIHZhciBwaHlzaWNhbEl0ZW1zID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgICAgLy8gVE9ETyhibGFzdGVuKTpcbiAgICAgICAgLy8gRmlyc3QgZWxlbWVudCBjaGlsZCBpcyBpdGVtOyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IGNoaWxkcmVuWzBdXG4gICAgICAgIC8vIG9uIGEgZG9jIGZyYWdtZW50LiBUZXN0IHRoaXMgdG8gc2VlIGlmIGl0IHN0aWxsIG1hdHRlcnMuXG4gICAgICAgIHBoeXNpY2FsSXRlbXNbaV0gPSBpbnN0LnJvb3QucXVlcnlTZWxlY3RvcignKicpO1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5hcHBlbmRDaGlsZChpbnN0LnJvb3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBoeXNpY2FsSXRlbXM7XG4gICAgfSxcblxuICAgIF9pc0NsaWVudEZ1bGw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEJvdHRvbSAhPSAwICYmIHRoaXMuX3BoeXNpY2FsQm90dG9tLTEgPj0gdGhpcy5fc2Nyb2xsQm90dG9tICYmXG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPD0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluY3JlYXNlcyB0aGUgcG9vbCBzaXplLlxuICAgICAqL1xuICAgIF9pbmNyZWFzZVBvb2xJZk5lZWRlZDogZnVuY3Rpb24oY291bnQpIHtcbiAgICAgIHZhciBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NsYW1wKHRoaXMuX3BoeXNpY2FsQ291bnQgKyBjb3VudCxcbiAgICAgICAgICBERUZBVUxUX1BIWVNJQ0FMX0NPVU5ULCB0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQpO1xuICAgICAgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jb252ZXJ0SW5kZXhUb0NvbXBsZXRlUm93KG5leHRQaHlzaWNhbENvdW50KTtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFyIGNvcnJlY3Rpb24gPSBuZXh0UGh5c2ljYWxDb3VudCAlIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICBpZiAoY29ycmVjdGlvbiAmJiBuZXh0UGh5c2ljYWxDb3VudCAtIGNvcnJlY3Rpb24gPD0gdGhpcy5fcGh5c2ljYWxDb3VudCkge1xuICAgICAgICAgIG5leHRQaHlzaWNhbENvdW50ICs9IHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICB9XG4gICAgICAgIG5leHRQaHlzaWNhbENvdW50IC09IGNvcnJlY3Rpb247XG4gICAgICB9XG4gICAgICB2YXIgZGVsdGEgPSBuZXh0UGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgICB2YXIgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcblxuICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgIHZhciB0cyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgLy8gQ29uY2F0IGFycmF5cyBpbiBwbGFjZS5cbiAgICAgICAgW10ucHVzaC5hcHBseSh0aGlzLl9waHlzaWNhbEl0ZW1zLCB0aGlzLl9jcmVhdGVQb29sKGRlbHRhKSk7XG4gICAgICAgIFtdLnB1c2guYXBwbHkodGhpcy5fcGh5c2ljYWxTaXplcywgbmV3IEFycmF5KGRlbHRhKSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50ICsgZGVsdGE7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGh5c2ljYWwgc3RhcnQgaWYgaXQgbmVlZHMgdG8gcHJlc2VydmUgdGhlIG1vZGVsIG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uLCB0aGUgZm9jdXNlZCBpdGVtIGlzIGN1cnJlbnRseSByZW5kZXJlZCBhbmQgaXRzIG1vZGVsIHdvdWxkXG4gICAgICAgIC8vIGhhdmUgY2hhbmdlZCBhZnRlciBpbmNyZWFzaW5nIHRoZSBwb29sIGlmIHRoZSBwaHlzaWNhbCBzdGFydCByZW1haW5lZCB1bmNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLl9waHlzaWNhbFN0YXJ0ID4gdGhpcy5fcGh5c2ljYWxFbmQgJiZcbiAgICAgICAgICAgIHRoaXMuX2lzSW5kZXhSZW5kZXJlZCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSAmJlxuICAgICAgICAgICAgdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSA8IHRoaXMuX3BoeXNpY2FsRW5kKSB7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb3N0ID0gKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIHRzKSAvIGRlbHRhO1xuICAgICAgICBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuICAgICAgfVxuICAgICAgLy8gVGhlIHVwcGVyIGJvdW5kcyBpcyBub3QgZml4ZWQgd2hlbiBkZWFsaW5nIHdpdGggYSBncmlkIHRoYXQgZG9lc24ndFxuICAgICAgLy8gZmlsbCBpdCdzIGxhc3Qgcm93IHdpdGggdGhlIGV4YWN0IG51bWJlciBvZiBpdGVtcyBwZXIgcm93LlxuICAgICAgaWYgKHRoaXMuX3ZpcnR1YWxFbmQgPj0gdGhpcy5fdmlydHVhbENvdW50IC0gMSB8fCBuZXh0SW5jcmVhc2UgPT09IDApIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbmV4dEluY3JlYXNlXG4gICAgICAgICAgKSwgTUlDUk9fVEFTSyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsU2l6ZSA8IHRoaXMuX29wdFBoeXNpY2FsU2l6ZSkge1xuICAgICAgICAvLyBZaWVsZCBhbmQgaW5jcmVhc2UgdGhlIHBvb2wgZHVyaW5nIGlkbGUgdGltZSB1bnRpbCB0aGUgcGh5c2ljYWwgc2l6ZSBpcyBvcHRpbWFsLlxuICAgICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuX2NsYW1wKE1hdGgucm91bmQoNTAgLyB0aGlzLl90ZW1wbGF0ZUNvc3QpLCAxLCBuZXh0SW5jcmVhc2UpXG4gICAgICAgICAgKSwgSURMRV9USU1FKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgYSBuZXcgbGlzdC5cbiAgICAgKi9cbiAgICBfcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICF0aGlzLl9pc1Zpc2libGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgIT09IDApIHtcbiAgICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyh0cnVlKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSByZXVzYWJsZXMucGh5c2ljYWxUb3A7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3VwZGF0ZShyZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydHVhbENvdW50ID4gMCkge1xuICAgICAgICAvLyBJbml0aWFsIHJlbmRlclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZChERUZBVUxUX1BIWVNJQ0FMX0NPVU5UKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVtcGxldGl6ZXMgdGhlIHVzZXIgdGVtcGxhdGUuXG4gICAgICovXG4gICAgX2Vuc3VyZVRlbXBsYXRpemVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmN0b3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXNlclRlbXBsYXRlID0gdGhpcy5xdWVyeUVmZmVjdGl2ZUNoaWxkcmVuKCd0ZW1wbGF0ZScpO1xuICAgICAgaWYgKCF0aGlzLl91c2VyVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdpcm9uLWxpc3QgcmVxdWlyZXMgYSB0ZW1wbGF0ZSB0byBiZSBwcm92aWRlZCBpbiBsaWdodC1kb20nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbnN0YW5jZVByb3BzID0ge307XG4gICAgICBpbnN0YW5jZVByb3BzLl9fa2V5X18gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wc1t0aGlzLmFzXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuaW5kZXhBc10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wc1t0aGlzLnNlbGVjdGVkQXNdID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHMudGFiSW5kZXggPSB0cnVlO1xuICAgICAgdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluc3RhbmNlUHJvcHM7XG4gICAgICB0aGlzLnRlbXBsYXRpemUodGhpcy5fdXNlclRlbXBsYXRlLCB0aGlzLm11dGFibGVEYXRhKTtcbiAgICB9LFxuXG4gICAgX2dyaWRDaGFuZ2VkOiBmdW5jdGlvbihuZXdHcmlkLCBvbGRHcmlkKSB7XG4gICAgICBpZiAodHlwZW9mIG9sZEdyaWQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICBuZXdHcmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBpdGVtcyBoYXZlIGNoYW5nZWQuIFRoYXQgaXMsIHJlc3NpZ25tZW50c1xuICAgICAqIHRvIGBpdGVtc2AsIHNwbGljZXMgb3IgdXBkYXRlcyB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqL1xuICAgIF9pdGVtc0NoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgICAgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMnKSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gMDtcbiAgICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IHRoaXMuaXRlbXMgJiYgUG9seW1lci5Db2xsZWN0aW9uID9cbiAgICAgICAgICAgIFBvbHltZXIuQ29sbGVjdGlvbi5nZXQodGhpcy5pdGVtcykgOiBudWxsO1xuICAgICAgICB0aGlzLl9waHlzaWNhbEluZGV4Rm9yS2V5ID0ge307XG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50IHx8IDA7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXMgPSB0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzID0gdGhpcy5fcGh5c2ljYWxTaXplcyB8fCBbXTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb3AgPiB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucGF0aCA9PT0gJ2l0ZW1zLnNwbGljZXMnKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdFZpcnR1YWxJbmRleChjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzKTtcbiAgICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgICAgLy8gUmVuZGVyIG9ubHkgaWYgdGhlIGFmZmVjdGVkIGluZGV4IGlzIHJlbmRlcmVkLlxuICAgICAgICB2YXIgYWZmZWN0ZWRJbmRleFJlbmRlcmVkID0gY2hhbmdlLnZhbHVlLmluZGV4U3BsaWNlcy5zb21lKGZ1bmN0aW9uKHNwbGljZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0luZGV4UmVuZGVyZWQoc3BsaWNlLmluZGV4KTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5faXNDbGllbnRGdWxsKCkgfHwgYWZmZWN0ZWRJbmRleFJlbmRlcmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggIT09ICdpdGVtcy5sZW5ndGgnKSB7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRJdGVtUGF0aChjaGFuZ2UucGF0aCwgY2hhbmdlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRJdGVtUGF0aDogZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDYpOyAvLyAnaXRlbXMuJy5sZW5ndGggPT0gNlxuICAgICAgdmFyIGRvdCA9IHBhdGguaW5kZXhPZignLicpICsgMTtcbiAgICAgIGlmIChkb3QgPT09IDApIHtcbiAgICAgICAgZG90ID0gcGF0aC5sZW5ndGg7XG4gICAgICB9XG4gICAgICB2YXIgaWR4ID0gSVNfVjJcbiAgICAgICAgICA/IHBhcnNlSW50KHBhdGguc3Vic3RyaW5nKDAsIGRvdCksIDEwKVxuICAgICAgICAgIC8vIEV4dHJhY3QgYCNgIGZyb20gYHBhdGhgLlxuICAgICAgICAgIDogcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMSwgZG90KSwgMTApO1xuICAgICAgdmFyIG9mZnNjcmVlbkl0ZW0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbTtcbiAgICAgIHZhciBpc0luZGV4UmVuZGVyZWQgPSB0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KTtcbiAgICAgIHZhciBpbnN0O1xuICAgICAgdmFyIHBpZHg7XG5cbiAgICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgcGlkeCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgoaWR4KTtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgfSBlbHNlIGlmIChvZmZzY3JlZW5JdGVtKSB7XG4gICAgICAgIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvZmZzY3JlZW5JdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5zdCB8fCBpbnN0W3RoaXMuaW5kZXhBc10gIT09IGlkeCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoZG90KTtcbiAgICAgIHBhdGggPSB0aGlzLmFzICsgKHBhdGggPyAnLicgKyBwYXRoIDogJycpO1xuICAgICAgSVNfVjJcbiAgICAgICAgPyBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHlPclBhdGgocGF0aCwgdmFsdWUsIGZhbHNlLCB0cnVlKVxuICAgICAgICA6IGluc3Qubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICBpbnN0Ll9mbHVzaFByb3BlcnRpZXMgJiYgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzKHRydWUpO1xuICAgICAgLy8gVE9ETyhibGFzdGVuKTogVjEgZG9lc24ndCBkbyB0aGlzIGFuZCBpdCdzIGEgYnVnXG4gICAgICBpZiAoaXNJbmRleFJlbmRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3BpZHhdKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshQXJyYXk8IVBvbHltZXJTcGxpY2U+fSBzcGxpY2VzXG4gICAgICovXG4gICAgX2FkanVzdFZpcnR1YWxJbmRleDogZnVuY3Rpb24oc3BsaWNlcykge1xuICAgICAgc3BsaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNwbGljZSkge1xuICAgICAgICAvLyBkZXNlbGVjdCByZW1vdmVkIGl0ZW1zXG4gICAgICAgIHNwbGljZS5yZW1vdmVkLmZvckVhY2godGhpcy5fcmVtb3ZlSXRlbSwgdGhpcyk7XG4gICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byBjYXJlIGFib3V0IGNoYW5nZXMgaGFwcGVuaW5nIGFib3ZlIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgIGlmIChzcGxpY2UuaW5kZXggPCB0aGlzLl92aXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgc3BsaWNlLmFkZGVkQ291bnQgLSBzcGxpY2UucmVtb3ZlZC5sZW5ndGgsXG4gICAgICAgICAgICAgIHNwbGljZS5pbmRleCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgZGVsdGE7XG4gICAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyBkZWx0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfcmVtb3ZlSXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KGl0ZW0pO1xuICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGZvY3VzZWQgaXRlbVxuICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJdGVtICYmIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKVt0aGlzLmFzXSA9PT0gaXRlbSkge1xuICAgICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYSBwcm92aWRlZCBmdW5jdGlvbiBwZXIgZXZlcnkgcGh5c2ljYWwgaW5kZXggaW4gYGl0ZW1TZXRgXG4gICAgICogYGl0ZW1TZXRgIGRlZmF1bHQgdmFsdWUgaXMgZXF1aXZhbGVudCB0byB0aGUgZW50aXJlIHNldCBvZiBwaHlzaWNhbCBpbmRleGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyLCBudW1iZXIpfSBmblxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX2l0ZXJhdGVJdGVtczogZnVuY3Rpb24oZm4sIGl0ZW1TZXQpIHtcbiAgICAgIHZhciBwaWR4LCB2aWR4LCBydG4sIGk7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIGl0ZW1TZXQpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1TZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwaWR4ID0gaXRlbVNldFtpXTtcbiAgICAgICAgICB2aWR4ID0gdGhpcy5fY29tcHV0ZVZpZHgocGlkeCk7XG4gICAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGlkeCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIHZpZHggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICAgIGZvciAoOyBwaWR4IDwgdGhpcy5fcGh5c2ljYWxDb3VudDsgcGlkeCsrLCB2aWR4KyspIHtcbiAgICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAocGlkeCA9IDA7IHBpZHggPCB0aGlzLl9waHlzaWNhbFN0YXJ0OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlydHVhbCBpbmRleCBmb3IgYSBnaXZlbiBwaHlzaWNhbCBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpZHggUGh5c2ljYWwgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgX2NvbXB1dGVWaWR4OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgICBpZiAocGlkeCA+PSB0aGlzLl9waHlzaWNhbFN0YXJ0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAocGlkeCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArICh0aGlzLl9waHlzaWNhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxTdGFydCkgKyBwaWR4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIHRoZSBkYXRhIG1vZGVscyB0byBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqL1xuICAgIF9hc3NpZ25Nb2RlbHM6IGZ1bmN0aW9uKGl0ZW1TZXQpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zW3ZpZHhdO1xuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlbCk7XG4gICAgICAgICAgaW5zdC5fX2tleV9fID0gdGhpcy5fY29sbGVjdGlvbiA/IHRoaXMuX2NvbGxlY3Rpb24uZ2V0S2V5KGl0ZW0pIDogbnVsbDtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5hcywgaXRlbSk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsIHRoaXMuc2VsZWN0ZWRBcywgdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmluZGV4QXMsIHZpZHgpO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCAndGFiSW5kZXgnLCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID09PSB2aWR4ID8gMCA6IC0xKTtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEluZGV4Rm9yS2V5W2luc3QuX19rZXlfX10gPSBwaWR4O1xuICAgICAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSwgaXRlbVNldCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGhlaWdodCBmb3IgYSBnaXZlbiBzZXQgb2YgaXRlbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqL1xuICAgIF91cGRhdGVNZXRyaWNzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgZGlzdHJpYnV0ZWQgYWxsIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgICAgLy8gc28gd2UgY2FuIG1lYXN1cmUgdGhlbS5cbiAgICAgIFBvbHltZXIuZmx1c2ggPyBQb2x5bWVyLmZsdXNoKCkgOiBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuXG4gICAgICB2YXIgbmV3UGh5c2ljYWxTaXplID0gMDtcbiAgICAgIHZhciBvbGRQaHlzaWNhbFNpemUgPSAwO1xuICAgICAgdmFyIHByZXZBdmdDb3VudCA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50O1xuICAgICAgdmFyIHByZXZQaHlzaWNhbEF2ZyA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgb2xkUGh5c2ljYWxTaXplICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gfHwgMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA/IDEgOiAwO1xuICAgICAgfSwgaXRlbVNldCk7XG5cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplID0gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRQaHlzaWNhbFNpemUgPSAodGhpcy5faXRlbXNQZXJSb3cgPT09IDEpID8gb2xkUGh5c2ljYWxTaXplIDogIE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemUgPSB0aGlzLl9waHlzaWNhbFNpemUgKyBuZXdQaHlzaWNhbFNpemUgLSBvbGRQaHlzaWNhbFNpemU7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gMTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXZlcmFnZSBpZiBpdCBtZWFzdXJlZCBzb21ldGhpbmcuXG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgIT09IHByZXZBdmdDb3VudCkge1xuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKChwcmV2UGh5c2ljYWxBdmcgKiBwcmV2QXZnQ291bnQpICsgbmV3UGh5c2ljYWxTaXplKSAvXG4gICAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVHcmlkTWV0cmljczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pdGVtV2lkdGggPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/IHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyMDA7XG4gICAgICB0aGlzLl9yb3dIZWlnaHQgPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/IHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0ub2Zmc2V0SGVpZ2h0IDogMjAwO1xuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtV2lkdGggPyBNYXRoLmZsb29yKHRoaXMuX3ZpZXdwb3J0V2lkdGggLyB0aGlzLl9pdGVtV2lkdGgpIDogdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwaHlzaWNhbCBpdGVtcy5cbiAgICAgKi9cbiAgICBfcG9zaXRpb25JdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9hZGp1c3RTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgICB2YXIgeSA9IHRoaXMuX3BoeXNpY2FsVG9wO1xuXG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhciB0b3RhbEl0ZW1XaWR0aCA9IHRoaXMuX2l0ZW1zUGVyUm93ICogdGhpcy5faXRlbVdpZHRoO1xuICAgICAgICB2YXIgcm93T2Zmc2V0ID0gKHRoaXMuX3ZpZXdwb3J0V2lkdGggLSB0b3RhbEl0ZW1XaWR0aCkgLyAyO1xuXG4gICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgdmFyIG1vZHVsdXMgPSB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKChtb2R1bHVzICogdGhpcy5faXRlbVdpZHRoKSArIHJvd09mZnNldCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICAgICAgICB4ID0geCAqIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZTNkKHggKyAncHgnLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck5leHRSb3codmlkeCkpIHtcbiAgICAgICAgICAgIHkgKz0gdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgeSArICdweCcsIDAsIHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQ6IGZ1bmN0aW9uKHBpZHgpIHtcbiAgICAgIGlmICghdGhpcy5ncmlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbXB1dGVWaWR4KHBpZHgpICUgdGhpcy5faXRlbXNQZXJSb3cgIT09IHRoaXMuX2l0ZW1zUGVyUm93IC0gMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMsIGJhc2VkIG9uIHRoZSBjdXJyZW50IGluZGV4LFxuICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgICAqIHRvIGJlIHJlbmRlcmVkIG9uIGEgbmV3IHJvdy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgICByZXR1cm4gdmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93ID09PSB0aGlzLl9pdGVtc1BlclJvdyAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIGl0IHdhcyBvdmVyZXN0aW1hdGVkLlxuICAgICAqL1xuICAgIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGVsdGFIZWlnaHQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgPT09IDAgPyB0aGlzLl9waHlzaWNhbFRvcCA6XG4gICAgICAgICAgTWF0aC5taW4odGhpcy5fc2Nyb2xsUG9zaXRpb24gKyB0aGlzLl9waHlzaWNhbFRvcCwgMCk7XG4gICAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgICAgaWYgKGRlbHRhSGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgLSBkZWx0YUhlaWdodDtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgICAgLy8ganVraW5nIHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgaW50ZXJpYWwgc2Nyb2xsaW5nIG9uIGlPUyBpcyBubyBidWVub1xuICAgICAgICBpZiAoIUlPU19UT1VDSF9TQ1JPTExJTkcgJiYgc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwuXG4gICAgICovXG4gICAgX3Jlc2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKHBvcykge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ICYmIHBvcyA+PSAwKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNjcm9sbCBoZWlnaHQsIHRoYXQncyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50LFxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VVcGRhdGUgSWYgdHJ1ZSwgdXBkYXRlcyB0aGUgaGVpZ2h0IG5vIG1hdHRlciB3aGF0LlxuICAgICAqL1xuICAgIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2VzdFNjcm9sbEhlaWdodCA9IHRoaXMuX3ZpcnR1YWxSb3dDb3VudCAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VzdFNjcm9sbEhlaWdodCA9ICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50IC0gdGhpcy5fdmlydHVhbFN0YXJ0LCAwKSAqIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgICB9XG4gICAgICBmb3JjZVVwZGF0ZSA9IGZvcmNlVXBkYXRlIHx8IHRoaXMuX3Njcm9sbEhlaWdodCA9PT0gMDtcbiAgICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgICAgZm9yY2VVcGRhdGUgPSBmb3JjZVVwZGF0ZSB8fCB0aGlzLmdyaWQgJiYgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA8IHRoaXMuX2VzdFNjcm9sbEhlaWdodDtcbiAgICAgIC8vIEFtb3J0aXplIGhlaWdodCBhZGp1c3RtZW50LCBzbyBpdCB3b24ndCB0cmlnZ2VyIGxhcmdlIHJlcGFpbnRzIHRvbyBvZnRlbi5cbiAgICAgIGlmIChmb3JjZVVwZGF0ZSB8fCBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGl0ZW0gaW4gdGhlIHZpcnR1YWwgbGlzdCByZWdhcmRsZXNzXG4gICAgICogb2YgdGhlIHBoeXNpY2FsIGl0ZW1zIGluIHRoZSBET00gdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2Nyb2xsVG9JdGVtXG4gICAgICogQHBhcmFtIHsoT2JqZWN0KX0gaXRlbSBUaGUgaXRlbSB0byBiZSBzY3JvbGxlZCB0b1xuICAgICAqL1xuICAgIHNjcm9sbFRvSXRlbTogZnVuY3Rpb24oaXRlbSl7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgICAqIG9mIHRoZSBwaHlzaWNhbCBpdGVtcyBpbiB0aGUgRE9NIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IFRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgICAqL1xuICAgIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgaWYgKHR5cGVvZiBpZHggIT09ICdudW1iZXInIHx8IGlkeCA8IDAgfHwgaWR4ID4gdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFBvbHltZXIuZmx1c2ggPyBQb2x5bWVyLmZsdXNoKCkgOiBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuICAgICAgLy8gSXRlbXMgc2hvdWxkIGhhdmUgYmVlbiByZW5kZXJlZCBwcmlvciBzY3JvbGxpbmcgdG8gYW4gaW5kZXguXG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZHggPSB0aGlzLl9jbGFtcChpZHgsIDAsIHRoaXMuX3ZpcnR1YWxDb3VudC0xKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdmlydHVhbCBzdGFydCBvbmx5IHdoZW4gbmVlZGVkLlxuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSB8fCBpZHggPj0gdGhpcy5fbWF4VmlydHVhbFN0YXJ0KSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuZ3JpZCA/IChpZHggLSB0aGlzLl9pdGVtc1BlclJvdyAqIDIpIDogKGlkeCAtIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFuYWdlRm9jdXMoKTtcbiAgICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcygpO1xuICAgICAgLy8gRXN0aW1hdGUgbmV3IHBoeXNpY2FsIG9mZnNldC5cbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgICB2YXIgY3VycmVudFRvcEl0ZW0gPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdmFyIGN1cnJlbnRWaXJ0dWFsSXRlbSA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHZhciB0YXJnZXRPZmZzZXRUb3AgPSAwO1xuICAgICAgdmFyIGhpZGRlbkNvbnRlbnRTaXplID0gdGhpcy5faGlkZGVuQ29udGVudFNpemU7XG4gICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gYXMgbXVjaCBhcyB3ZSBjYW4uXG4gICAgICB3aGlsZSAoY3VycmVudFZpcnR1YWxJdGVtIDwgaWR4ICYmIHRhcmdldE9mZnNldFRvcCA8PSBoaWRkZW5Db250ZW50U2l6ZSkge1xuICAgICAgICB0YXJnZXRPZmZzZXRUb3AgPSB0YXJnZXRPZmZzZXRUb3AgKyB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoY3VycmVudFRvcEl0ZW0pO1xuICAgICAgICBjdXJyZW50VG9wSXRlbSA9IChjdXJyZW50VG9wSXRlbSArIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgICAgY3VycmVudFZpcnR1YWxJdGVtKys7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUodHJ1ZSk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0ICsgdGFyZ2V0T2Zmc2V0VG9wKTtcbiAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgICAgLy8gY2xlYXIgY2FjaGVkIHZpc2libGUgaW5kZXguXG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHBoeXNpY2FsIGF2ZXJhZ2UgYW5kIHRoZSBhdmVyYWdlIGNvdW50LlxuICAgICAqL1xuICAgIF9yZXNldEF2ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYGlyb24tcmVzaXplYCBldmVudCB0cmlnZ2VyZWQgYnkgYElyb25SZXNpemFibGVCZWhhdmlvcmBcbiAgICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlc2l6ZWQuXG4gICAgICovXG4gICAgX3Jlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY2xlYXIgY2FjaGVkIHZpc2libGUgaW5kZXguXG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIC8vIFNraXAgdGhlIHJlc2l6ZSBldmVudCBvbiB0b3VjaCBkZXZpY2VzIHdoZW4gdGhlIGFkZHJlc3MgYmFyIHNsaWRlcyB1cC5cbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5hYnModGhpcy5fdmlld3BvcnRIZWlnaHQgLSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgICAgLy8gUmVpbnN0YWxsIHRoZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VsZWN0SXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VsZWN0SW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICBzZWxlY3RJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5tdWx0aVNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleCkge1xuICAgICAgICAvLyB2MlxuICAgICAgICB0aGlzLiQuc2VsZWN0b3Iuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdjFcbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLnNlbGVjdCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZGVzZWxlY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBkZXNlbGVjdEl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGRlc2VsZWN0SW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICBkZXNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgICBtb2RlbFt0aGlzLnNlbGVjdGVkQXNdID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3RJbmRleCkge1xuICAgICAgICAvLyB2MlxuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3RJbmRleChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2MVxuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhIGdpdmVuIGl0ZW0gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW1cbiAgICAgKiBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gb2JqZWN0LlxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXlcbiAgICAgKiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgaXRlbSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbkZvckluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdmFyIGlzU2VsZWN0ZWQgPSB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkXG4gICAgICAgICAgPyB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkKGluZGV4KSA6IHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RJbmRleChpbmRleCkgOiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xlYXJTZWxlY3Rpb25cbiAgICAgKi9cbiAgICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKVt0aGlzLnNlbGVjdGVkQXNdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJC5zZWxlY3Rvci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYHRhcGAgaWYgYHNlbGVjdGlvbkVuYWJsZWRgIGlzIHRydWUsXG4gICAgICogaXQgd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBfc2VsZWN0aW9uRW5hYmxlZENoYW5nZWQ6IGZ1bmN0aW9uKHNlbGVjdGlvbkVuYWJsZWQpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gc2VsZWN0aW9uRW5hYmxlZCA/IHRoaXMubGlzdGVuIDogdGhpcy51bmxpc3RlbjtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0aGlzLCAndGFwJywgJ19zZWxlY3Rpb25IYW5kbGVyJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbiBpdGVtIGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIF9zZWxlY3Rpb25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBtb2RlbFRhYkluZGV4LCBhY3RpdmVFbFRhYkluZGV4O1xuICAgICAgdmFyIHRhcmdldCA9IFBvbHltZXIuZG9tKGUpLnBhdGhbMF07XG4gICAgICB2YXIgaXRlbXNIb3N0ID0gdGhpcy5faXRlbXNQYXJlbnQubm9kZS5kb21Ib3N0O1xuICAgICAgdmFyIGFjdGl2ZUVsID0gUG9seW1lci5kb20oaXRlbXNIb3N0ID8gaXRlbXNIb3N0LnJvb3QgOiBkb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgICAgIHZhciBwaHlzaWNhbEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgobW9kZWxbdGhpcy5pbmRleEFzXSldO1xuICAgICAgLy8gU2FmYXJpIGRvZXMgbm90IGZvY3VzIGNlcnRhaW4gZm9ybSBjb250cm9scyB2aWEgbW91c2VcbiAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTgwNDNcbiAgICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnIHx8XG4gICAgICAgICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2J1dHRvbicgfHxcbiAgICAgICAgICB0YXJnZXQubG9jYWxOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBTZXQgYSB0ZW1wb3JhcnkgdGFiaW5kZXhcbiAgICAgIG1vZGVsVGFiSW5kZXggPSBtb2RlbC50YWJJbmRleDtcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgICAgYWN0aXZlRWxUYWJJbmRleCA9IGFjdGl2ZUVsID8gYWN0aXZlRWwudGFiSW5kZXggOiAtMTtcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gbW9kZWxUYWJJbmRleDtcbiAgICAgIC8vIE9ubHkgc2VsZWN0IHRoZSBpdGVtIGlmIHRoZSB0YXAgd2Fzbid0IG9uIGEgZm9jdXNhYmxlIGNoaWxkXG4gICAgICAvLyBvciB0aGUgZWxlbWVudCBib3VuZCB0byBgdGFiSW5kZXhgXG4gICAgICBpZiAoYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtICE9PSBhY3RpdmVFbCAmJiBwaHlzaWNhbEl0ZW0uY29udGFpbnMoYWN0aXZlRWwpICYmIGFjdGl2ZUVsVGFiSW5kZXggIT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckl0ZW0obW9kZWxbdGhpcy5hc10pO1xuICAgIH0sXG5cbiAgICBfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkOiBmdW5jdGlvbihtdWx0aVNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLm11bHRpID0gbXVsdGlTZWxlY3Rpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHNpemUgb2YgYSBnaXZlbiBsaXN0IGl0ZW0uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1cGRhdGVTaXplRm9ySW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICB1cGRhdGVTaXplRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFt0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0ZW1wb3JhcnkgYmFja2ZpbGwgaXRlbSBpbiB0aGUgcmVuZGVyZWQgcG9vbCBvZiBwaHlzaWNhbCBpdGVtc1xuICAgICAqIHRvIHJlcGxhY2UgdGhlIG1haW4gZm9jdXNlZCBpdGVtLiBUaGUgZm9jdXNlZCBpdGVtIGhhcyB0YWJJbmRleCA9IDBcbiAgICAgKiBhbmQgbWlnaHQgYmUgY3VycmVudGx5IGZvY3VzZWQgYnkgdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIGR5bmFtaWMgcmVwbGFjZW1lbnQgaGVscHMgdG8gcHJlc2VydmUgdGhlIGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIF9tYW5hZ2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG5cbiAgICAgIGlmIChmaWR4ID49IDAgJiYgZmlkeCA8IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgaW5kZXgsIGNoZWNrIGlmIHRoYXQgaW5kZXggaXMgcmVuZGVyZWRcbiAgICAgICAgLy8gaW4gYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGZpZHgpKSB7XG4gICAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlRm9jdXNCYWNrZmlsbEl0ZW0oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwICYmIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSwgYXNzaWduIHRoZSBpbml0aWFsIGZvY3VzZWQgaW5kZXguXG4gICAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX3BoeXNpY2FsU3RhcnRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHJhbmRvbSBpbmRleCB0byB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdGhhdCBjb21wbGV0ZXMgaXQncyByb3cuXG4gICAgICogQWxsb3dzIGZvciBiZXR0ZXIgb3JkZXIgYW5kIGZpbGwgY29tcHV0YXRpb24gd2hlbiBncmlkID09IHRydWUuXG4gICAgICovXG4gICAgX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3c6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgLy8gd2hlbiBncmlkID09IGZhbHNlIF9pdGVtUGVyUm93IGNhbiBiZSB1bnNldC5cbiAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gdGhpcy5faXRlbXNQZXJSb3cgfHwgMTtcbiAgICAgIHJldHVybiB0aGlzLmdyaWQgPyBNYXRoLmNlaWwoaWR4IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5faXRlbXNQZXJSb3cgOiBpZHg7XG4gICAgfSxcblxuICAgIF9pc0luZGV4UmVuZGVyZWQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIGlkeCA+PSB0aGlzLl92aXJ0dWFsU3RhcnQgJiYgaWR4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgfSxcblxuICAgIF9pc0luZGV4VmlzaWJsZTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gaWR4ID49IHRoaXMuZmlyc3RWaXNpYmxlSW5kZXggJiYgaWR4IDw9IHRoaXMubGFzdFZpc2libGVJbmRleDtcbiAgICB9LFxuXG4gICAgX2dldFBoeXNpY2FsSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKGlkeCAtIHRoaXMuX3ZpcnR1YWxTdGFydCkpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB9LFxuXG4gICAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKGlkeCk7XG4gICAgfSxcblxuICAgIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBpZiAoaWR4IDwgMCB8fCBpZHggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgLy8gc2Nyb2xsIHRvIGluZGV4IHRvIG1ha2Ugc3VyZSBpdCdzIHJlbmRlcmVkXG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChpZHgpO1xuICAgICAgfVxuICAgICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHBoeXNpY2FsSXRlbSk7XG4gICAgICB2YXIgZm9jdXNhYmxlO1xuICAgICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgICAgbW9kZWwudGFiSW5kZXggPSBTRUNSRVRfVEFCSU5ERVg7XG4gICAgICAvLyBjaGVjayBpZiBmb2N1c2FibGUgZWxlbWVudCBpcyB0aGUgcGh5c2ljYWwgaXRlbVxuICAgICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICAgZm9jdXNhYmxlID0gcGh5c2ljYWxJdGVtO1xuICAgICAgfVxuICAgICAgLy8gc2VhcmNoIGZvciB0aGUgZWxlbWVudCB3aGljaCB0YWJpbmRleCBpcyBib3VuZCB0byB0aGUgc2VjcmV0IHRhYiBpbmRleFxuICAgICAgaWYgKCFmb2N1c2FibGUpIHtcbiAgICAgICAgZm9jdXNhYmxlID0gUG9seW1lci5kb20ocGh5c2ljYWxJdGVtKS5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXg9XCInICsgU0VDUkVUX1RBQklOREVYICsgJ1wiXScpO1xuICAgICAgfVxuICAgICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgICBtb2RlbC50YWJJbmRleCA9IDA7XG4gICAgICAvLyBmb2N1cyB0aGUgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgICBmb2N1c2FibGUgJiYgZm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5faXRlbXNQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSAtMTtcbiAgICB9LFxuXG4gICAgX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4O1xuXG4gICAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuc3RhbXAobnVsbCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICAgIH1cbiAgICAgIC8vIFNldCB0aGUgb2ZmY3JlZW4gZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKS50YWJJbmRleCA9IDA7XG4gICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtO1xuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSBmcGlkeDtcbiAgICAgIC8vIEhpZGUgdGhlIGZvY3VzZWQgcGh5c2ljYWwuXG4gICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfSxcblxuICAgIF9yZXN0b3JlRm9jdXNlZEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBBc3NpZ24gbW9kZWxzIHRvIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgICAvLyBHZXQgdGhlIG5ldyBwaHlzaWNhbCBpbmRleCBmb3IgdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgICB2YXIgZnBpZHggPSB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleDtcblxuICAgICAgdmFyIG9uU2NyZWVuSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdO1xuICAgICAgaWYgKCFvblNjcmVlbkl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9uU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvblNjcmVlbkl0ZW0pO1xuICAgICAgdmFyIG9mZlNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgICAgLy8gUmVzdG9yZXMgdGhlIHBoeXNpY2FsIGl0ZW0gb25seSB3aGVuIGl0IGhhcyB0aGUgc2FtZSBtb2RlbFxuICAgICAgLy8gYXMgdGhlIG9mZnNjcmVlbiBvbmUuIFVzZSBrZXkgZm9yIGNvbXBhcmlzb24gc2luY2UgdXNlcnMgY2FuIHNldFxuICAgICAgLy8gYSBuZXcgaXRlbSB2aWEgc2V0KCdpdGVtcy5pZHgnKS5cbiAgICAgIGlmIChvblNjcmVlbkluc3RhbmNlW3RoaXMuYXNdID09PSBvZmZTY3JlZW5JbnN0YW5jZVt0aGlzLmFzXSkge1xuICAgICAgICAvLyBGbGlwIHRoZSBmb2N1cyBiYWNrZmlsbC5cbiAgICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBvblNjcmVlbkl0ZW07XG4gICAgICAgIG9uU2NyZWVuSW5zdGFuY2UudGFiSW5kZXggPSAtMTtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgICAvLyBIaWRlIHRoZSBwaHlzaWNhbCBpdGVtIHRoYXQgYmFja2ZpbGxzLlxuICAgICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgfSxcblxuICAgIF9kaWRGb2N1czogZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRhcmdldE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgdmFyIGZvY3VzZWRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKTtcbiAgICAgIHZhciBoYXNPZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtICE9PSBudWxsO1xuICAgICAgdmFyIGZpZHggPSB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4O1xuICAgICAgaWYgKCF0YXJnZXRNb2RlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZm9jdXNlZE1vZGVsID09PSB0YXJnZXRNb2RlbCkge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBmb2N1c2VkIHRoZSBzYW1lIGl0ZW0sIHRoZW4gYnJpbmcgaXQgaW50byB2aWV3IGlmIGl0J3Mgbm90IHZpc2libGUuXG4gICAgICAgIGlmICghdGhpcy5faXNJbmRleFZpc2libGUoZmlkeCkpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoZmlkeCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICAvLyBSZXN0b3JlIHRhYkluZGV4IGZvciB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbS5cbiAgICAgICAgaWYgKGZvY3VzZWRNb2RlbCkge1xuICAgICAgICAgIGZvY3VzZWRNb2RlbC50YWJJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgdGFiSW5kZXggZm9yIHRoZSBuZXh0IGZvY3VzZWQgaXRlbS5cbiAgICAgICAgdGFyZ2V0TW9kZWwudGFiSW5kZXggPSAwO1xuICAgICAgICBmaWR4ID0gdGFyZ2V0TW9kZWxbdGhpcy5pbmRleEFzXTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGZpZHg7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChmaWR4KTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4XTtcbiAgICAgICAgaWYgKGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtICYmICF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9rZXlkb3duSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAvKiBBUlJPV19ET1dOICovIDQwOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX1JJR0hUICovIDM5OlxuICAgICAgICAgIGlmICh0aGlzLmdyaWQpIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAtMSA6IDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBBUlJPV19VUCAqLyAzODpcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IC0gKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX0xFRlQgKi8gMzc6XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZCkgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IDEgOiAtMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEVOVEVSICovIDEzOlxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkhhbmRsZXIoZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpO1xuICAgIH0sXG5cbiAgICBfZGVib3VuY2U6IGZ1bmN0aW9uKG5hbWUsIGNiLCBhc3luY01vZHVsZSkge1xuICAgICAgaWYgKElTX1YyKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlcnMgPSB0aGlzLl9kZWJvdW5jZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLl9kZWJvdW5jZXJzW25hbWVdID0gUG9seW1lci5EZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgICAgdGhpcy5fZGVib3VuY2Vyc1tuYW1lXSxcbiAgICAgICAgICBhc3luY01vZHVsZSxcbiAgICAgICAgICBjYi5iaW5kKHRoaXMpKTtcbiAgICAgICAgUG9seW1lci5lbnF1ZXVlRGVib3VuY2VyKHRoaXMuX2RlYm91bmNlcnNbbmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUG9seW1lci5kb20uYWRkRGVib3VuY2VyKHRoaXMuZGVib3VuY2UobmFtZSwgY2IpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQcm9wZXJ0eTogZnVuY3Rpb24oaW5zdCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChJU19WMikge1xuICAgICAgICBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjIgKi9cbiAgICBfZm9yd2FyZEhvc3RQcm9wVjI6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5mb3J3YXJkSG9zdFByb3AocHJvcCwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9ub3RpZnlJbnN0YW5jZVByb3BWMjogZnVuY3Rpb24oaW5zdCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgaWYgKFBvbHltZXIuUGF0aC5tYXRjaGVzKHRoaXMuYXMsIHByb3ApKSB7XG4gICAgICAgIHZhciBpZHggPSBpbnN0W3RoaXMuaW5kZXhBc107XG4gICAgICAgIGlmIChwcm9wID09IHRoaXMuYXMpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zW2lkeF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeVBhdGgoUG9seW1lci5QYXRoLnRyYW5zbGF0ZSh0aGlzLmFzLCAnaXRlbXMuJyArIGlkeCwgcHJvcCksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogVGVtcGxhdGl6ZXIgYmluZGluZ3MgZm9yIHYxICovXG4gICAgX2dldFN0YW1wZWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxJdGVtcztcbiAgICB9LFxuXG4gICAgX2ZvcndhcmRJbnN0YW5jZVBhdGg6IGZ1bmN0aW9uKGluc3QsIHBhdGgsIHZhbHVlKSB7XG4gICAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuYXMgKyAnLicpID09PSAwKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UGF0aCgnaXRlbXMuJyArIGluc3QuX19rZXlfXyArICcuJyArXG4gICAgICAgICAgICBwYXRoLnNsaWNlKHRoaXMuYXMubGVuZ3RoICsgMSksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQYXJlbnRQYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQYXJlbnRQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSlbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICB9KTtcblxufSkoKTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmlyb24tcmVxdWVzdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIFhNTEh0dHBSZXF1ZXN0cy5cblxuICAgIDxpcm9uLXJlcXVlc3QgaWQ9XCJ4aHJcIj48L2lyb24tcmVxdWVzdD5cbiAgICAuLi5cbiAgICB0aGlzLiQueGhyLnNlbmQoe3VybDogdXJsLCBib2R5OiBwYXJhbXN9KTtcbi0tPlxuPHNjcmlwdD5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIFBvbHltZXIoe1xuICAgIGlzOiAnaXJvbi1yZXF1ZXN0JyxcblxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZSB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgICAgICogbmV0d29yayByZXF1ZXN0LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtYTUxIdHRwUmVxdWVzdH1cbiAgICAgICAqL1xuICAgICAgeGhyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGFyc2VkIHJlc3BvbnNlIGJvZHksIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseVxuICAgICAgICogcmVzb2x2ZWQuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUgeyp9XG4gICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgKi9cbiAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBzdGF0dXMgY29kZSwgaWYgdGhlIGB4aHJgIGhhcyBjb21wbGV0ZWx5IHJlc29sdmVkLlxuICAgICAgICovXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc3RhdHVzIHRleHQsIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseSByZXNvbHZlZC5cbiAgICAgICAqL1xuICAgICAgc3RhdHVzVGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBgeGhyYCByZXNwb25zZSBjb21lcyBiYWNrLCBvciByZWplY3RzXG4gICAgICAgKiBpZiB0aGVyZSBpcyBhbiBlcnJvciBiZWZvcmUgdGhlIGB4aHJgIGNvbXBsZXRlcy5cbiAgICAgICAqIFRoZSByZXNvbHZlIGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGFzIGFuIGFyZ3VtZW50LlxuICAgICAgICogQnkgZGVmYXVsdCwgdGhlIHJlamVjdCBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhbiBgRXJyb3JgIGFzIGFuIGFyZ3VtZW50LlxuICAgICAgICogSWYgYHJlamVjdFdpdGhSZXF1ZXN0YCBpcyB0cnVlLCB0aGUgcmVqZWN0IGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIGFuIFxuICAgICAgICogb2JqZWN0IHdpdGggdHdvIGtleXM6IGByZXF1ZXN0YCwgdGhlIG9yaWdpbmFsIHJlcXVlc3QsIGFuZCBgZXJyb3JgLCB0aGUgXG4gICAgICAgKiBlcnJvciBvYmplY3QuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgKi9cbiAgICAgIGNvbXBsZXRlczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVDb21wbGV0ZXMgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMgPSByZWplY3Q7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBvYmplY3QgdGhhdCBjb250YWlucyBwcm9ncmVzcyBpbmZvcm1hdGlvbiBlbWl0dGVkIGJ5IHRoZSBYSFIgaWZcbiAgICAgICAqIGF2YWlsYWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBAZGVmYXVsdCB7fVxuICAgICAgICovXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWJvcnRlZCB3aWxsIGJlIHRydWUgaWYgYW4gYWJvcnQgb2YgdGhlIHJlcXVlc3QgaXMgYXR0ZW1wdGVkLlxuICAgICAgICovXG4gICAgICBhYm9ydGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXJyb3JlZCB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgZmlyZWQgYW4gZXJyb3IgZXZlbnQgZnJvbSB0aGVcbiAgICAgICAqIFhIUiBvYmplY3QgKG1haW5seSBuZXR3b3JrIGVycm9ycykuXG4gICAgICAgKi9cbiAgICAgIGVycm9yZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRpbWVkT3V0IHdpbGwgYmUgdHJ1ZSBpZiB0aGUgWEhSIHRocmV3IGEgdGltZW91dCBldmVudC5cbiAgICAgICAqL1xuICAgICAgdGltZWRPdXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN1Y2NlZWRlZCBpcyB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC4gVGhlIHJlcXVlc3Qgc3VjY2VlZGVkIGlmIGl0XG4gICAgICogbG9hZGVkIHdpdGhvdXQgZXJyb3IsIHdhc24ndCBhYm9ydGVkLCBhbmQgdGhlIHN0YXR1cyBjb2RlIGlzIOKJpSAyMDAsIGFuZFxuICAgICAqIDwgMzAwLCBvciBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgMC5cbiAgICAgKlxuICAgICAqIFRoZSBzdGF0dXMgY29kZSAwIGlzIGFjY2VwdGVkIGFzIGEgc3VjY2VzcyBiZWNhdXNlIHNvbWUgc2NoZW1lcyAtIGUuZy5cbiAgICAgKiBmaWxlOi8vIC0gZG9uJ3QgcHJvdmlkZSBzdGF0dXMgY29kZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzdWNjZWVkZWQoKSB7XG4gICAgICBpZiAodGhpcy5lcnJvcmVkIHx8IHRoaXMuYWJvcnRlZCB8fCB0aGlzLnRpbWVkT3V0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnhoci5zdGF0dXMgfHwgMDtcblxuICAgICAgLy8gTm90ZTogaWYgd2UgYXJlIHVzaW5nIHRoZSBmaWxlOi8vIHByb3RvY29sLCB0aGUgc3RhdHVzIGNvZGUgd2lsbCBiZSAwXG4gICAgICAvLyBmb3IgYWxsIG91dGNvbWVzIChzdWNjZXNzZnVsIG9yIG90aGVyd2lzZSkuXG4gICAgICByZXR1cm4gc3RhdHVzID09PSAwIHx8XG4gICAgICAgIChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGFuIEhUVFAgcmVxdWVzdCB0byB0aGUgc2VydmVyIGFuZCByZXR1cm5zIGEgcHJvbWlzZSAoc2VlIHRoZSBgY29tcGxldGVzYFxuICAgICAqIHByb3BlcnR5IGZvciBkZXRhaWxzKS5cbiAgICAgKlxuICAgICAqIFRoZSBoYW5kbGluZyBvZiB0aGUgYGJvZHlgIHBhcmFtZXRlciB3aWxsIHZhcnkgYmFzZWQgb24gdGhlIENvbnRlbnQtVHlwZVxuICAgICAqIGhlYWRlci4gU2VlIHRoZSBkb2NzIGZvciBpcm9uLWFqYXgncyBgYm9keWAgcHJvcGVydHkgZm9yIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIHVybDogc3RyaW5nLFxuICAgICAqICAgbWV0aG9kOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBhc3luYzogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgKiAgIGJvZHk6IChBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd8QmxvYnxEb2N1bWVudHxGb3JtRGF0YXxudWxsfHN0cmluZ3x1bmRlZmluZWR8T2JqZWN0KSxcbiAgICAgKiAgIGhlYWRlcnM6IChPYmplY3R8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGhhbmRsZUFzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBqc29uUHJlZml4OiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICB3aXRoQ3JlZGVudGlhbHM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICB0aW1lb3V0OiAoTnVtYmVyfHVuZGVmaW5lZCksXG4gICAgICogICByZWplY3RXaXRoUmVxdWVzdDogKGJvb2xlYW58dW5kZWZpbmVkKX19IG9wdGlvbnMgLVxuICAgICAqICAgLSB1cmwgVGhlIHVybCB0byB3aGljaCB0aGUgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqICAgLSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSwgZGVmYXVsdCBpcyBHRVQuXG4gICAgICogICAtIGFzeW5jIEJ5IGRlZmF1bHQsIGFsbCByZXF1ZXN0cyBhcmUgc2VudCBhc3luY2hyb25vdXNseS4gVG8gc2VuZCBzeW5jaHJvbm91cyByZXF1ZXN0cyxcbiAgICAgKiAgICAgICAgIHNldCB0byBmYWxzZS5cbiAgICAgKiAgIC0gIGJvZHkgVGhlIGNvbnRlbnQgZm9yIHRoZSByZXF1ZXN0IGJvZHkgZm9yIFBPU1QgbWV0aG9kLlxuICAgICAqICAgLSAgaGVhZGVycyBIVFRQIHJlcXVlc3QgaGVhZGVycy5cbiAgICAgKiAgIC0gIGhhbmRsZUFzIFRoZSByZXNwb25zZSB0eXBlLiBEZWZhdWx0IGlzICd0ZXh0Jy5cbiAgICAgKiAgIC0gIHdpdGhDcmVkZW50aWFscyBXaGV0aGVyIG9yIG5vdCB0byBzZW5kIGNyZWRlbnRpYWxzIG9uIHRoZSByZXF1ZXN0LiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgICAqICAgLSAgdGltZW91dCAtIFRpbWVvdXQgZm9yIHJlcXVlc3QsIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiAgIC0gIHJlamVjdFdpdGhSZXF1ZXN0IFNldCB0byB0cnVlIHRvIGluY2x1ZGUgdGhlIHJlcXVlc3Qgb2JqZWN0IHdpdGggcHJvbWlzZSByZWplY3Rpb25zLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgc2VuZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHhociA9IHRoaXMueGhyO1xuXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICB0aGlzLl9zZXRQcm9ncmVzcyh7XG4gICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogcHJvZ3Jlc3MubGVuZ3RoQ29tcHV0YWJsZSxcbiAgICAgICAgICBsb2FkZWQ6IHByb2dyZXNzLmxvYWRlZCxcbiAgICAgICAgICB0b3RhbDogcHJvZ3Jlc3MudG90YWxcbiAgICAgICAgfSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICB0aGlzLl9zZXRFcnJvcmVkKHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCd0aW1lb3V0JywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2V0VGltZWRPdXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBvcHRpb25zLnJlamVjdFdpdGhSZXF1ZXN0ID8ge1xuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICByZXF1ZXN0OiB0aGlzXG4gICAgICAgIH0gOiBlcnJvcjtcbiAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMocmVzcG9uc2UpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3NldEFib3J0ZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZC4nKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIENhbGxlZCBhZnRlciBhbGwgb2YgdGhlIGFib3ZlLlxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuX3NldFJlc3BvbnNlKHRoaXMucGFyc2VSZXNwb25zZSgpKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3VjY2VlZGVkKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdUaGUgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZTogJyArIHRoaXMueGhyLnN0YXR1cyk7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMocmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb2x2ZUNvbXBsZXRlcyh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIG9wdGlvbnMudXJsLFxuICAgICAgICBvcHRpb25zLmFzeW5jICE9PSBmYWxzZVxuICAgICAgKTtcblxuICAgICAgdmFyIGFjY2VwdFR5cGUgPSB7XG4gICAgICAgICdqc29uJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAndGV4dCc6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgJ2h0bWwnOiAndGV4dC9odG1sJyxcbiAgICAgICAgJ3htbCc6ICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgICAnYXJyYXlidWZmZXInOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICAgICAgfVtvcHRpb25zLmhhbmRsZUFzXTtcbiAgICAgIHZhciBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB2YXIgbmV3SGVhZGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICBuZXdIZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICAgIGhlYWRlcnMgPSBuZXdIZWFkZXJzO1xuXG4gICAgICBpZiAoYWNjZXB0VHlwZSAmJiAhaGVhZGVyc1snYWNjZXB0J10pIHtcbiAgICAgICAgaGVhZGVyc1snYWNjZXB0J10gPSBhY2NlcHRUeXBlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihyZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3QocmVxdWVzdEhlYWRlcikpIHtcbiAgICAgICAgICBQb2x5bWVyLkJhc2UuX2Vycm9yKCdIZWFkZXJzIG11c3QgYmUgbG93ZXIgY2FzZSwgZ290JywgcmVxdWVzdEhlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgcmVxdWVzdEhlYWRlcixcbiAgICAgICAgICBoZWFkZXJzW3JlcXVlc3RIZWFkZXJdXG4gICAgICAgICk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgaWYgKG9wdGlvbnMuYXN5bmMgIT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFzeW5jKSB7XG4gICAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlQXMgPSBvcHRpb25zLmhhbmRsZUFzO1xuXG4gICAgICAgIC8vIElmIGEgSlNPTiBwcmVmaXggaXMgcHJlc2VudCwgdGhlIHJlc3BvbnNlVHlwZSBtdXN0IGJlICd0ZXh0JyBvciB0aGVcbiAgICAgICAgLy8gYnJvd3NlciB3b27igJl0IGJlIGFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlLlxuICAgICAgICBpZiAoISFvcHRpb25zLmpzb25QcmVmaXggfHwgIWhhbmRsZUFzKSB7XG4gICAgICAgICAgaGFuZGxlQXMgPSAndGV4dCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBJRSwgYHhoci5yZXNwb25zZVR5cGVgIGlzIGFuIGVtcHR5IHN0cmluZyB3aGVuIHRoZSByZXNwb25zZVxuICAgICAgICAvLyByZXR1cm5zLiBIZW5jZSwgY2FjaGluZyBpdCBhcyBgeGhyLl9yZXNwb25zZVR5cGVgLlxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0geGhyLl9yZXNwb25zZVR5cGUgPSBoYW5kbGVBcztcblxuICAgICAgICAvLyBDYWNoZSB0aGUgSlNPTiBwcmVmaXgsIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy5qc29uUHJlZml4KSB7XG4gICAgICAgICAgeGhyLl9qc29uUHJlZml4ID0gb3B0aW9ucy5qc29uUHJlZml4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuXG5cbiAgICAgIHZhciBib2R5ID0gdGhpcy5fZW5jb2RlQm9keU9iamVjdChvcHRpb25zLmJvZHksIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKTtcblxuICAgICAgeGhyLnNlbmQoXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8XG4gICAgICAgICAgICAgICAgICAgbnVsbHxzdHJpbmd8dW5kZWZpbmVkfSAqL1xuICAgICAgICAoYm9keSkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHBhcnNlIHRoZSByZXNwb25zZSBib2R5IG9mIHRoZSBYSFIuIElmIHBhcnNpbmcgc3VjY2VlZHMsXG4gICAgICogdGhlIHZhbHVlIHJldHVybmVkIHdpbGwgYmUgZGVzZXJpYWxpemVkIGJhc2VkIG9uIHRoZSBgcmVzcG9uc2VUeXBlYFxuICAgICAqIHNldCBvbiB0aGUgWEhSLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHBhcnNlZCByZXNwb25zZSxcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgdGhlcmUgd2FzIGFuIGVtcHR5IHJlc3BvbnNlIG9yIHBhcnNpbmcgZmFpbGVkLlxuICAgICAqL1xuICAgIHBhcnNlUmVzcG9uc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHhociA9IHRoaXMueGhyO1xuICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IHhoci5yZXNwb25zZVR5cGUgfHwgeGhyLl9yZXNwb25zZVR5cGU7XG4gICAgICB2YXIgcHJlZmVyUmVzcG9uc2VUZXh0ID0gIXRoaXMueGhyLnJlc3BvbnNlVHlwZTtcbiAgICAgIHZhciBwcmVmaXhMZW4gPSAoeGhyLl9qc29uUHJlZml4ICYmIHhoci5fanNvblByZWZpeC5sZW5ndGgpIHx8IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAvLyBJZiB0aGUgeGhyIG9iamVjdCBkb2Vzbid0IGhhdmUgYSBuYXR1cmFsIGB4aHIucmVzcG9uc2VUeXBlYCxcbiAgICAgICAgICAgIC8vIHdlIGNhbiBhc3N1bWUgdGhhdCB0aGUgYnJvd3NlciBoYXNuJ3QgcGFyc2VkIHRoZSByZXNwb25zZSBmb3IgdXMsXG4gICAgICAgICAgICAvLyBhbmQgc28gcGFyc2luZyBpcyBvdXIgcmVzcG9uc2liaWxpdHkuIExpa2V3aXNlIGlmIHJlc3BvbnNlIGlzXG4gICAgICAgICAgICAvLyB1bmRlZmluZWQsIGFzIHRoZXJlJ3Mgbm8gd2F5IHRvIGVuY29kZSB1bmRlZmluZWQgaW4gSlNPTi5cbiAgICAgICAgICAgIGlmIChwcmVmZXJSZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gVHJ5IHRvIGVtdWxhdGUgdGhlIEpTT04gc2VjdGlvbiBvZiB0aGUgcmVzcG9uc2UgYm9keSBzZWN0aW9uIG9mXG4gICAgICAgICAgICAgIC8vIHRoZSBzcGVjOiBodHRwczovL3hoci5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlLWJvZHlcbiAgICAgICAgICAgICAgLy8gVGhhdCBpcyB0byBzYXksIHdlIHRyeSB0byBwYXJzZSBhcyBKU09OLCBidXQgaWYgYW55dGhpbmcgZ29lc1xuICAgICAgICAgICAgICAvLyB3cm9uZyByZXR1cm4gbnVsbC5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgY2FzZSAneG1sJzpcbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgY2FzZSAnYmxvYic6XG4gICAgICAgICAgY2FzZSAnZG9jdW1lbnQnOlxuICAgICAgICAgIGNhc2UgJ2FycmF5YnVmZmVyJzpcbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgLy8gSWYgYHByZWZpeExlbmAgaXMgc2V0LCBpdCBpbXBsaWVzIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcGFyc2VkXG4gICAgICAgICAgICAvLyBhcyBKU09OIG9uY2UgdGhlIHByZWZpeCBvZiBsZW5ndGggYHByZWZpeExlbmAgaXMgc3RyaXBwZWQgZnJvbVxuICAgICAgICAgICAgLy8gaXQuIEVtdWxhdGUgdGhlIGJlaGF2aW9yIGFib3ZlIHdoZXJlIG51bGwgaXMgcmV0dXJuZWQgb24gZmFpbHVyZVxuICAgICAgICAgICAgLy8gdG8gcGFyc2UuXG4gICAgICAgICAgICBpZiAocHJlZml4TGVuKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dC5zdWJzdHJpbmcocHJlZml4TGVuKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKG5ldyBFcnJvcignQ291bGQgbm90IHBhcnNlIHJlc3BvbnNlLiAnICsgZS5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhYm9ydDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zZXRBYm9ydGVkKHRydWUpO1xuICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBib2R5IFRoZSBnaXZlbiBib2R5IG9mIHRoZSByZXF1ZXN0IHRvIHRyeSBhbmQgZW5jb2RlLlxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gY29udGVudFR5cGUgVGhlIGdpdmVuIGNvbnRlbnQgdHlwZSwgdG8gaW5mZXIgYW4gZW5jb2RpbmdcbiAgICAgKiAgICAgZnJvbS5cbiAgICAgKiBAcmV0dXJuIHsqfSBFaXRoZXIgdGhlIGVuY29kZWQgYm9keSBhcyBhIHN0cmluZywgaWYgc3VjY2Vzc2Z1bCxcbiAgICAgKiAgICAgb3IgdGhlIHVuYWx0ZXJlZCBib2R5IG9iamVjdCBpZiBubyBlbmNvZGluZyBjb3VsZCBiZSBpbmZlcnJlZC5cbiAgICAgKi9cbiAgICBfZW5jb2RlQm9keU9iamVjdDogZnVuY3Rpb24oYm9keSwgY29udGVudFR5cGUpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYm9keTsgIC8vIEFscmVhZHkgZW5jb2RlZC5cbiAgICAgIH1cbiAgICAgIHZhciBib2R5T2JqID0gLyoqIEB0eXBlIHtPYmplY3R9ICovIChib2R5KTtcbiAgICAgIHN3aXRjaChjb250ZW50VHlwZSkge1xuICAgICAgICBjYXNlKCdhcHBsaWNhdGlvbi9qc29uJyk6XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvZHlPYmopO1xuICAgICAgICBjYXNlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5fd3d3Rm9ybVVybEVuY29kZShib2R5T2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZW5jb2RlIGFzIHgtd3d3LWZvcm0tdXJsZW5jb2RlZC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC5cbiAgICAgKi9cbiAgICBfd3d3Rm9ybVVybEVuY29kZTogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB2YXIgcGllY2VzID0gW107XG4gICAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIC8vIFRPRE8ocmljdGljKTogaGFuZGxlIGFycmF5IHZhbHVlcyBoZXJlLCBpbiBhIGNvbnNpc3RlbnQgd2F5IHdpdGhcbiAgICAgICAgLy8gICBpcm9uLWFqYXggcGFyYW1zLlxuICAgICAgICBwaWVjZXMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZShrZXkpICsgJz0nICtcbiAgICAgICAgICAgIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZShvYmplY3Rba2V5XSkpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oJyYnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBzdHIgQSBrZXkgb3IgdmFsdWUgdG8gZW5jb2RlIGFzIHgtd3d3LWZvcm0tdXJsZW5jb2RlZC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC5cbiAgICAgKi9cbiAgICBfd3d3Rm9ybVVybEVuY29kZVBpZWNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIC8vIFNwZWMgc2F5cyB0byBub3JtYWxpemUgbmV3bGluZXMgdG8gXFxyXFxuIGFuZCByZXBsYWNlICUyMCBzcGFjZXMgd2l0aCArLlxuICAgICAgLy8galF1ZXJ5IGRvZXMgdGhpcyBhcyB3ZWxsLCBzbyB0aGlzIGlzIGxpa2VseSB0byBiZSB3aWRlbHkgY29tcGF0aWJsZS5cbiAgICAgIGlmIChzdHIgPT09IG51bGwgfHwgc3RyID09PSB1bmRlZmluZWQgfHwgIXN0ci50b1N0cmluZykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbi9nLCAnXFxyXFxuJykpXG4gICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc3RhdHVzIGNvZGUgYW5kIHN0YXR1cyB0ZXh0LlxuICAgICAqL1xuICAgIF91cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0U3RhdHVzKHRoaXMueGhyLnN0YXR1cyk7XG4gICAgICB0aGlzLl9zZXRTdGF0dXNUZXh0KCh0aGlzLnhoci5zdGF0dXNUZXh0ID09PSB1bmRlZmluZWQpID8gJycgOiB0aGlzLnhoci5zdGF0dXNUZXh0KTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLXJlcXVlc3QuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4vcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLmh0bWxcIj5cblxuPCEtLVxuICBgcGFwZXItYXV0b2NvbXBsZXRlYFxuXG4gICoqRnJvbSB2My54LngsIHRoaXMgY29tcG9uZW50IG9ubHkgd29ya3Mgd2l0aCBQb2x5bWVyIDEuNysgb3IgMi4wKy4qKlxuXG4gIFshW1B1Ymxpc2hlZCBvbiB3ZWJjb21wb25lbnRzLm9yZ10oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS93ZWJjb21wb25lbnRzLm9yZy1wdWJsaXNoZWQtYmx1ZS5zdmcpXShodHRwczovL3d3dy53ZWJjb21wb25lbnRzLm9yZy9lbGVtZW50L2VsbGlwdGljYWxqcy9wYXBlci1hdXRvY29tcGxldGUpXG5cbiAgWyFbU2F1Y2UgVGVzdCBTdGF0dXNdKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS9icm93c2VyLW1hdHJpeC9qaHVlc29zLnN2ZyldKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS91L2podWVzb3MpXG5cbiAgcGFwZXItYXV0b2NvbXBsZXRlIGV4dGVuZHMgZWFybGllciBlZmZvcnRzIHN1Y2ggYXMgdGhpcyAoaHR0cHM6Ly9naXRodWIuY29tL3JvZG8xMTExL3BhcGVyLWlucHV0LWF1dG9jb21wbGV0ZSlcbiAgdG8gcHJvdmlkZSBrZXlib2FyZCBzdXBwb3J0LCByZW1vdGUgYmluZGluZyBhbmQgcmVzdWx0cyBzY3JvbGxpbmcuXG5cbiAgSXQgaXMgKippbXBvcnRhbnQgdG8gcHJvdmlkZSBib3RoIGB0ZXh0UHJvcGVydHlgIGFuZCBgdmFsdWVQcm9wZXJ0eWAgd2hlbiB3b3JraW5nIHdpdGggYSBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uIGFuZFxuICBvciBjdXN0b20gdGVtcGxhdGVzLioqIFRoZXkgYXJlIG5lZWRlZCB0byBrZWVwIHRoZSBjb21wb25lbnQgYWNjZXNzaWJsZSBhbmQgZm9yIHRoZSBldmVudHMgKGUuZy4gb25TZWxlY3QpIHRvIGtlZXBcbiAgd29ya2luZy5cblxuICBUbyBpbnRlZ3JhdGUgd2l0aCBgaXJvbi1pbnB1dGAsIHlvdSBtdXN0IHNldCB0aGUgYG5hbWVgIG9wdGlvbi4gVGhlIHNlbGVjdGVkIGB2YWx1ZWAgd2lsbCBiZSBleHBvc2VkLCAqKm5vdCoqIHRoZVxuICBgdGV4dGAgdmFsdWUsXG5cbiAgIyMjIEFib3V0IFBvbHltZXIgMS54IGFuZCAyLnggQ29tcGF0aWJpbGl0eVxuICBGcm9tIHZlcnNpb24gYDMueC54YCwgdGhpcyBjb21wb25lbnQgd29yayB3aXRoIGJvdGggUG9seW1lciAxLjcrIG9yIFBvbHltZXIgMi4wKyBQbGVhc2UgdGFrZSBhIGxvb2sgdG8gdGhlXG4gIFtNSUdSQVRJT04ubWRdKC4vTUlHUkFUSU9OLm1kKSBmaWxlIHRoYXQgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAjIyMgQ3VzdG9tIHNlYXJjaFxuICBUaGlzIGNvbXBvbmVudCBoYXMgdGhlIHB1YmxpYyBtZXRob2QgYHF1ZXJ5Rm5gIHRoYXQgaXMgY2FsbGVkIGluIGVhY2gga2V5IHN0cm9rZSBhbmQgaXQgaXMgcmVzcG9uc2libGUgdG8gcXVlcnlcbiAgYWxsIGl0ZW1zIGluIHRoZSBgc291cmNlYCBhbmQgcmV0dXJucyBvbmx5IHRob3NlIGl0ZW1zIHRoYXQgbWF0Y2hlcyBjZXJ0YWluIGZpbHRlcmluZyBjcml0ZXJpYS4gQnkgZGVmYXVsdCwgdGhpc1xuICBjb21wb25lbnQgc2VhcmNoZXMgZm9yIGl0ZW1zIHRoYXQgc3RhcnQgd2l0aCB0aGUgcmVjZW50IHF1ZXJ5IChjYXNlIGluc2Vuc2l0aXZlKS5cbiAgWW91IGNhbiBvdmVycmlkZSB0aGlzIGJlaGF2aW9yIHByb3ZpZGluZyB5b3VyIG93biBxdWVyeSBmdW5jdGlvbiwgYXMgbG9uZyBhcyB0aGVzZSB0d28gcmVxdWlyZW1lbnRzIGFyZSBmdWxmaWxsZWQ6XG4gIC0gVGhlIHF1ZXJ5IGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLlxuICAtIFRoZSBBUEkgaXMgcmVzcGVjdGVkIGFuZCB0aGUgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGFuIEFycmF5LlxuICBUaGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgZWFjaCBzdWdnZXN0aW9uIGRlcGVuZHMgb24gdGhlIHN0cnVjdHVyZSBvZiBlYWNoIG9iamVjdCB0aGF0IHRoaXMgbWV0aG9kIHJldHVybnMuIEZvciB0aGVcbiAgZGVmYXVsdCB0ZW1wbGF0ZSwgZWFjaCBzdWdnZXN0aW9uIHNob3VsZCBmb2xsb3cgdGhpcyBvYmplY3Qgc3RydWN0dXJlOlxuICBgYGBcbiAgICB7XG4gICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgfVxuICBgYGBcblxuICBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIGEgbG9jYWwgZGF0YSBzb3VyY2UgaXMgdXNlZC4gV2hlbiB1c2luZyBhIGByZW1vdGVEYXRhU291cmNlYCB1c2VyIGlzIHJlc3BvbnNpYmxlIGZvclxuICBkb2luZyB0aGUgc2VhcmNoIGFuZCBzcGVjaWZ5IHN1Z2dlc3Rpb25zIG1hbnVhbGx5LlxuXG4gICMjIyBDdXN0b20gdGVtcGxhdGVzXG4gIEEgdGVtcGxhdGUgZm9yIGVhY2ggc3VnZ2VzdGlvbiBjYW4gYmUgcHJvdmlkZWQsIGJ1dCBmb3Igbm93LCB0aGVyZSBhcmUgbGltaXRhdGlvbnMgaW4gdGhlIHdheSB5b3UgY2FuIGN1c3RvbWl6ZVxuICB0aGUgdGVtcGxhdGUuIFBsZWFzZSwgcmVhZCB0aGlzIHNlY3Rpb24gY2FyZWZ1bGx5IHRvIGtub3cgdGhlbS5cbiAgSW4gb3JkZXIgdG8gc2V0IHlvdXIgb3duIHRlbXBsYXRlLCB5b3UgbmVlZCB0byBhZGQgYSBgPHRlbXBsYXRlPmAgdGFnIHdpdGggdGhlIGF0dHJpYnV0ZVxuICBgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZWAgYW5kIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuXG4gIGBgYGh0bWxcbiAgPHBhcGVyLWF1dG9jb21wbGV0ZT5cbiAgICA8dGVtcGxhdGUgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZT5cbiAgICAgIDxwYXBlci1pdGVtIG9uLXRhcD1cIl9vblNlbGVjdFwiIGlkJD1cIltbX2dldFN1Z2dlc3Rpb25JZChpbmRleCldXVwiIHJvbGU9XCJvcHRpb25cIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIC8qKiBTdHlsZXMgZm9yIHlvdXIgY3VzdG9tIHRlbXBsYXRlIGhlcmUgKiovXG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgWU9VUiBDVVNUT00gVEVNUExBVEVcbiAgICAgICAgPHBhcGVyLXJpcHBsZT48L3BhcGVyLXJpcHBsZT5cbiAgICAgIDwvcGFwZXItaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3BhcGVyLWF1dG9jb21wbGV0ZT5cbiAgYGBgXG5cbiAgWW91IG5lZWQgdG8gYWx3YXlzIG1haW50YWluIHRoaXMgc3RydWN0dXJlLiBUaGVuIHlvdSBjYW4gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHBhcGVyLWl0ZW0uIFRoZXNlIGFyZSB0aGUgcmVhc29uc1xuICB3aHkgeW91IG5lZWQgdG8gbWFpbnRhaW4gaXQ6XG5cbiAgLSBgX29uU2VsZWN0YCBpdCBpcyB2ZXJ5IGltcG9ydGFudCBiZWNhdXNlIGl0IHdpbGwgbm90aWZ5IHRoZSBgYXV0b2NvbXBsZXRlYCBjb21wb25lbnQgd2hlbiB1c2VyIHNlbGVjdHMgb25lIGl0ZW0uXG4gIElmIHlvdSBkb24ndCBhZGQgdGhpcyBvcHRpb24sIHdoZW4gdXNlciBjbGlja3MgaW4gb25lIG9mIHRoZSBpdGVtcywgbm90aGluZyB3aWxsIGhhcHBlbi5cbiAgLSBgaWRgLCBgcm9sZWAgYW5kIGBhcmlhLXNlbGVjdGVkYCBuZWVkIHRvIGJlIHRoZXJlIGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMuIElmIHlvdSBkb24ndCBzZXQgdGhlbSwgdGhlIGNvbXBvbmVudFxuICB3aWxsIGNvbnRpbnVlIHdvcmtpbmcgYnV0IGl0IHdpbGwgbm90IGJlIGFjY2Vzc2libGUgZm9yIHVzZXJzIHdpdGggZGlzYWJpbGl0aWVzLlxuXG4gIEl0IGlzIGltcG9ydGFudCB0byBjbGFyaWZ5IHRoYXQgbWV0aG9kcyBgX29uU2VsZWN0YCBhbmQgYF9nZXRTdWdnZXN0aW9uSWRgIGRvIG5vdCBuZWVkIHRvIGJlIGltcGxlbWVudGVkLiBUaGV5IGFyZVxuICBwYXJ0IG9mIHRoZSBsb2dpYyBvZiBgcGFwZXItYXV0b2NvbXBsZXRlYC5cblxuICBXaGVuIHByb3ZpZGluZyB5b3VyIG93biBjdXN0b20gdGVtcGxhdGUsIHlvdSBtaWdodCBhbHNvIG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uLiBUaGUgcmVhc29uXG4gIGZvciB0aGF0IGlzIHRoYXQgdGhlIGRlZmF1bHQgc2VhcmNoIGZ1bmN0aW9uIG9ubHkgZXhwb3NlcyB0ZXh0IGFuZCB2YWx1ZSBpbiB0aGUgcmVzdWx0cy4gSWYgZWFjaCBpdGVtIGluIHlvdXIgZGF0YVxuICBzb3VyY2UgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiwgdGhlbiB5b3Ugd29uJ3QgYmUgYWJsZSB0byBhY2Nlc3MgaXQuIFNlZSB0aGUgY29kZSBvZiB0aGUgYDxhZGRyZXNzLWF1dG9jb21wbGV0ZT5gXG4gIGVsZW1lbnQgaW4gdGhlIGRlbW8gZm9sZGVyIGZvciBhIGNvbXBsZXRlIGV4YW1wbGUuXG5cbiAgQW5vdGhlciBpbXBvcnRhbnQgdGhpbmcgdG8gcG9pbnQgb3V0IGlzIHJlbGF0ZWQgdG8gdGhlIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSBpbiB0aGUgcmVzdWx0cy4gVGhlIGhlaWdodCBvZlxuICB0aGUgc3VnZ2VzdGlvbiB0ZW1wbGF0ZSBjaGFuZ2VzIGR5bmFtaWNhbGx5IGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IG9mIGEgc3VnZ2VzdGlvbiBpdGVtLiBIb3dldmVyLCB0aGUgZm9sbG93aW5nXG4gIGFzc3VtcHRpb25zIHdlcmUgbWFkZTpcbiAgLSBBbGwgc3VnZ2VzdGlvbnMgaXRlbXMgaGF2ZSB0aGUgc2FtZSBoZWlnaHRcbiAgLSBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpcyBmaXhlZCBhbmQgY2FuIGJlIGRldGVybWluZWQgYXQgYW55IHRpbWUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byB1c2UgaW1hZ2VzIGluIHRoZVxuICByZXN1bHRzLCBtYWtlIHN1cmUgdGhleSBoYXZlIGEgcGxhY2Vob2xkZXIgb3IgYSBmaXhlZCBoZWlnaHQuXG5cbiAgIyMjIFN0eWxpbmdcblxuICBgPHBhcGVyLWF1dG9jb21wbGV0ZT5gIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGluc1xuICBmb3Igc3R5bGluZzpcblxuICBDdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbiAgLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbiAgYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yYCB8IHNldHMgdGhlIGNvbXBvbmVudHMgaW5wdXQgY29udGFpbmVyIGZvY3VzIGNvbG9yIHwgYHZhcigtLXByaW1hcnktY29sb3IpYFxuICBgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtaXRlbS1taW4taGVpZ2h0YCB8IG1pbiBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gfCBgMzZweGBcbiAgYC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLXdyYXBwZXJgIHwgbWl4aW4gdG8gYXBwbHkgdG8gdGhlIHN1Z2dlc3Rpb25zIGNvbnRhaW5lciB8IGB7fWBcblxuICAjIyMgQWNjZXNzaWJpbGl0eVxuXG4gIFRoaXMgY29tcG9uZW50IGlzIGZyaWVuZGx5IHdpdGggc2NyZWVuIHJlYWRlcnMgKHRlc3RlZCBvbmx5IHdpdGggVm9pY2VPdmVyIGFuZCBOVkRBIGluIFdpbmRvd3MpOiBjdXJyZW50IHNlbGVjdGlvblxuICBhbmQgYWN0aXZlIHN1Z2dlc3Rpb24gYXJlIGFubm91bmNlZC5cblxuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1hdXRvY29tcGxldGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgLS1wYXBlci1pY29uLWJ1dHRvbjoge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjoge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIgcGFwZXItaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NsZWFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgLnNyLW9ubHkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIHtcbiAgICAgICAgLS1zdWdnZXN0aW9ucy13cmFwcGVyOiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLXdyYXBwZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1pdGVtLW1pbi1oZWlnaHQsIDM2cHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1vd25zPVwic3VnZ2VzdGlvbnNXcmFwcGVyXCIgYXJpYS1leHBhbmRlZCQ9XCJbW19pc1N1Z2dlc3Rpb25zT3BlbmVkXV1cIj5cbiAgICAgIDwhLS0gRm9yIGFjY2Vzc2liaWxpdHksIGl0IGlzIG5lZWRlZCB0byBoYXZlIGEgbGFiZWwgb3IgYXJpYS1sYWJlbC4gTGFiZWwgaXMgcHJlZmVycmVkIC0tPlxuICAgICAgPGxhYmVsIGZvcj1cImF1dG9jb21wbGV0ZUlucHV0XCIgY2xhc3M9XCJzci1vbmx5XCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPCEtLSBBZGRpbmcgYSBoaWRkZW4gaW5wdXQgdG8gaW50ZWdyYXRlIHdpdGggaXJvbi1mb3JtLCBpZiByZXF1aXJlZCAtLT5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHZhbHVlJD1cIltbdmFsdWVdXVwiID5cblxuICAgICAgPHBhcGVyLWlucHV0IGlkPVwiYXV0b2NvbXBsZXRlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwie3tkaXNhYmxlZH19XCJcbiAgICAgICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2UkPVwiW1tlcnJvck1lc3NhZ2VdXVwiXG4gICAgICAgICAgICAgICAgICAgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIlxuICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCJcbiAgICAgICAgICAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW2Fsd2F5c0Zsb2F0TGFiZWxdXVwiXG4gICAgICAgICAgICAgICAgICAgY2hhci1jb3VudGVyJD1cIltbY2hhckNvdW50ZXJdXVwiXG4gICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCJcblxuICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtbXVsdGlsaW5lPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudCQ9XCJbW19oaWdobGlnaHRlZFN1Z2dlc3Rpb24uZWxlbWVudElkXV1cIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYXV0b2NvbXBsZXRlU3RhdHVzIHN1Z2dlc3Rpb25zV3JhcHBlclwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgICA8IS0tIFRPRE86IHJlbW92ZSB0YWJpbmRleCB3b3JrYXJvdW5kIHdoZW4gIGlzIGZpeGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzMyNCAtLT5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBzdWZmaXggaWQ9XCJjbGVhclwiIGljb249XCJjbGVhclwiIG9uLWNsaWNrPVwiX2NsZWFyXCIgdGFiaW5kZXg9XCItMVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwhLS0gdG8gYW5ub3VuY2UgY3VycmVudCBzZWxlY3Rpb24gdG8gc2NyZWVuIHJlYWRlciAtLT5cbiAgICAgIDxzcGFuIGlkPVwiYXV0b2NvbXBsZXRlU3RhdHVzXCIgcm9sZT1cInN0YXR1c1wiIGNsYXNzPVwic3Itb25seVwiPltbX2hpZ2hsaWdodGVkU3VnZ2VzdGlvbi50ZXh0VmFsdWVdXTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMgZm9yPVwiYXV0b2NvbXBsZXRlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJbW21pbkxlbmd0aF1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtcHJvcGVydHk9XCJbW3RleHRQcm9wZXJ0eV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwiW1t2YWx1ZVByb3BlcnR5XV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQtb3B0aW9uPVwie3tfc2VsZWN0ZWRPcHRpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9XCJbW3NvdXJjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZS1zb3VyY2U9XCJbW3JlbW90ZVNvdXJjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LWZuPVwiW1txdWVyeUZuXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQtbmFtZXNwYWNlPVwiW1tldmVudE5hbWVzcGFjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkLXN1Z2dlc3Rpb249XCJ7e19oaWdobGlnaHRlZFN1Z2dlc3Rpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcy1vcGVuPVwie3tfaXNTdWdnZXN0aW9uc09wZW5lZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC1maXJzdD1cIltbaGlnaGxpZ2h0Rmlyc3RdXVwiPlxuXG4gICAgICA8c2xvdCBpZD1cInRlbXBsYXRlc1wiIG5hbWU9XCJhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlXCI+PC9zbG90PlxuXG4gICAgPC9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48c2NyaXB0PlxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaXMgUG9seWZpbGwgaXMgbmVlZGVkIGZvciB0aGlzIHZlcnNpb24gdG8gd29yayB3aXRoIElFMTEgYW5kIFBvbHltZXIgMS54XG4gICAgLy8gVE9ETzogZmluZCBvdXQgd2h5IHRoaXMgaXMgbmVlZGVkIGluIElFMTFcbiAgICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFyZ3VtZW50KSB7XG4gICAgICAgICAgYXJndW1lbnQgPSBhcmd1bWVudCB8fCB3aW5kb3c7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYXJndW1lbnQsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWF1dG9jb21wbGV0ZScsXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBhdXRvVmFsaWRhdGVgIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGVycm9yTWVzc2FnZWAgVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBsYWJlbGAgVGV4dCB0byBkaXNwbGF5IGFzIHRoZSBpbnB1dCBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYG5vTGFiZWxGbG9hdGAgU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAgICAgICAqL1xuICAgICAgICBub0xhYmVsRmxvYXQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgYWx3YXlzRmxvYXRMYWJlbGAgU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGByZXF1aXJlZGAgU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBzb3VyY2VgIEFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgb3B0aW9ucyB0byBleGVjdXRlIHRoZSBhdXRvY29tcGxldGUgZmVhdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdGV4dCBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dFByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdmFsdWUgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlUHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHZhbHVlYCBTZWxlY3RlZCBvYmplY3QgZnJvbSB0aGUgc3VnZ2VzdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudC9zZWxlY3RlZCB0ZXh0IG9mIHRoZSBpbnB1dFxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGUgc2hvd2luZyB0aGUgY2xlYXIgWCBidXR0b25cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVTaG93Q2xlYXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyB0byBhIHJlbW90ZSBkYXRhIHNvdXJjZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlU291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgdHlwZSBzZXBhcmF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50TmFtZXNwYWNlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnLSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWluaW11bSBsZW5ndGggdG8gdHJpZ2dlciBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBwYXR0ZXJuYCBQYXR0ZXJuIHRvIHZhbGlkYXRlIGlucHV0IGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICBwYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFsbG93ZWRQYXR0ZXJuYCBhbGxvd2VkUGF0dGVybiB0byB2YWxpZGF0ZSBpbnB1dCBmaWVsZFxuICAgICAgICAgKi9cbiAgICAgICAgYWxsb3dlZFBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRvIGB0cnVlYCB0byBzaG93IGEgY2hhcmFjdGVyIGNvdW50ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBjaGFyQ291bnRlcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSB0byBiZSB1c2VkIGJ5IHRoZSBhdXRvY29tcGxldGUgaW5wdXQuIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHdhbnRlZCB0byBiZSBpbnRlZ3JhdGVkIHdpdGggaXJvbi1mb3JtLlxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIGZpbHRlciBhdmFpbGFibGUgaXRlbXMuIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgdXNlZCBieSBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMsXG4gICAgICAgICAqIGl0IGlzIGFsc28gZXhwb3NlZCBoZXJlIHNvIGl0IGlzIHBvc3NpYmxlIHRvIHByb3ZpZGUgYSBjdXN0b20gcXVlcnlGbi5cbiAgICAgICAgICovXG4gICAgICAgIHF1ZXJ5Rm46IHtcbiAgICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGl0IHdpbGwgYWx3YXlzIGhpZ2hsaWdodCB0aGUgZmlyc3QgcmVzdWx0IGVhY2ggdGltZSBuZXcgc3VnZ2VzdGlvbnMgYXJlIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgICBoaWdobGlnaHRGaXJzdDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKioqKioqKioqKipcbiAgICAgICAgKiBQUklWQVRFXG4gICAgICAgICoqKioqKioqKioqKiovXG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIG5lZWQgX3ZhbHVlIGFuZCBfdGV4dCBwcm9wZXJ0aWVzLiBJdCBzZWVtcyB0aGV5IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIF92YWx1ZToge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dDoge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNsZWFyIGJ1dHRvbiBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgX2lzQ2xlYXJCdXR0b25WaXNpYmxlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1Z2dlc3Rpb24gcG9wdXAgaXMgdmlzaWJsZSBvciBub3QuXG4gICAgICAgICAqL1xuICAgICAgICBfaXNTdWdnZXN0aW9uc09wZW5lZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9iamVjdCBjb250YWluaW5nIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3NlbGVjdGVkT3B0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX3RleHRPYnNlcnZlcih0ZXh0KSdcbiAgICAgIF0sXG5cbiAgICAgIC8vIEVsZW1lbnQgTGlmZWN5Y2xlXG4gICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdhdXRvY29tcGxldGUnICsgdGhpcy5ldmVudE5hbWVzcGFjZSArICdzZWxlY3RlZCcsXG4gICAgICAgICAgdGhpcy5fb25BdXRvY29tcGxldGVTZWxlY3RlZC5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENsZWFycyB0aGUgaW5wdXQgdGV4dFxuICAgICAgICovXG4gICAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdyZXNldC1ibHVyJyk7XG5cbiAgICAgICAgdGhpcy5faGlkZUNsZWFyQnV0dG9uKCk7XG5cbiAgICAgICAgLy8gRml4OiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy80OTNcbiAgICAgICAgaWYgKCF0aGlzLiQuYXV0b2NvbXBsZXRlSW5wdXQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIERpc3BhdGNoZXMgYXV0b2NvbXBsZXRlIGV2ZW50c1xuICAgICAgICovXG4gICAgICBfZmlyZUV2ZW50OiBmdW5jdGlvbiAob3B0aW9uLCBldnQpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fZ2V0SWQoKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gJ2F1dG9jb21wbGV0ZScgKyB0aGlzLmV2ZW50TmFtZXNwYWNlICsgZXZ0O1xuXG4gICAgICAgIHRoaXMuZmlyZShldmVudCwge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV0gfHwgb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIHRleHQ6IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0gfHwgb3B0aW9uLnRleHQsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPbiB0ZXh0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAqL1xuICAgICAgX3RleHRPYnNlcnZlcjogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgJiYgdGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBhdXRvY29tcGxldGUgc2VsZWN0aW9uXG4gICAgICAgKi9cbiAgICAgIF9vbkF1dG9jb21wbGV0ZVNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IGV2ZW50LmRldGFpbDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLnRleHQgPSBzZWxlY3Rpb24udGV4dDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hvdyB0aGUgY2xlYXIgYnV0dG9uIChYKVxuICAgICAgICovXG4gICAgICBfc2hvd0NsZWFyQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTaG93Q2xlYXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuY2xlYXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGUgdGhlIGNsZWFyIGJ1dHRvbiAoWClcbiAgICAgICAqL1xuICAgICAgX2hpZGVDbGVhckJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kLmNsZWFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBfZ2V0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGlmICghaWQpIGlkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LFxuXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogUFVCTElDXG4gICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHRleHQvdmFsdWUgb3B0aW9uIG9mIHRoZSBpbnB1dFxuICAgICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgZ2V0T3B0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdGV4dC92YWx1ZSBvcHRpb24gb2YgdGhlIGlucHV0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cbiAgICAgIHNldE9wdGlvbjogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV0gfHwgb3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24oKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGlzYWJsZXMgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVuYWJsZXMgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3VnZ2VzdGlvbnNcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAgICovXG4gICAgICBzdWdnZXN0aW9uczogZnVuY3Rpb24gKGFycikge1xuICAgICAgICB0aGlzLiQucGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9ucy5zdWdnZXN0aW9ucyhhcnIpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBWYWxpZGF0ZXMgdGhlIGlucHV0XG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC52YWxpZGF0ZSgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgaW5wdXRcbiAgICAgICAqL1xuICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXNldHMgdGhlIGN1cnJlbnQgaW5wdXQgKERFUFJFQ0FURUQ6IHBsZWFzZSB1c2UgY2xlYXIpXG4gICAgICAgKi9cbiAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGVzIHRoZSBzdWdnZXN0aW9ucyBwb3B1cFxuICAgICAgICovXG4gICAgICBoaWRlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faGlkZUNsZWFyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuJC5wYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGxvd3MgY2FsbGluZyB0aGUgb25TZWxlY3QgZnVuY3Rpb24gZnJvbSBvdXRzaWRlXG4gICAgICAgKiBUaGlzIGluIHRpbWUgdHJpZ2dlcnMgdGhlIGF1dG9jb21wbGV0ZS1zZWxlY3RlZCBldmVudFxuICAgICAgICogd2l0aCBhbGwgdGhlIGRhdGEgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgb25TZWxlY3RIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kLnBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMuX29uU2VsZWN0KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIGEgc2VsZWN0aW9uIGlzIG1hZGVcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXNlbGVjdGVkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgY2hhbmdlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1jaGFuZ2VcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtZm9jdXNcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBibHVyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgcmVzZXQvY2xlYXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXJlc2V0LWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cbiAgICB9KTtcbiAgfSgpKTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2lyb24taWNvbi9pcm9uLWljb24uaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPWljb25zIHNpemU9MjQ+IDxzdmc+PGRlZnM+IDxnIGlkPTNkLXJvdGF0aW9uPjxwYXRoIGQ9XFxcIk03LjUyIDIxLjQ4QzQuMjUgMTkuOTQgMS45MSAxNi43NiAxLjU1IDEzSC4wNUMuNTYgMTkuMTYgNS43MSAyNCAxMiAyNGwuNjYtLjAzLTMuODEtMy44MS0xLjMzIDEuMzJ6bS44OS02LjUyYy0uMTkgMC0uMzctLjAzLS41Mi0uMDgtLjE2LS4wNi0uMjktLjEzLS40LS4yNC0uMTEtLjEtLjItLjIyLS4yNi0uMzctLjA2LS4xNC0uMDktLjMtLjA5LS40N2gtMS4zYzAgLjM2LjA3LjY4LjIxLjk1LjE0LjI3LjMzLjUuNTYuNjkuMjQuMTguNTEuMzIuODIuNDEuMy4xLjYyLjE1Ljk2LjE1LjM3IDAgLjcyLS4wNSAxLjAzLS4xNS4zMi0uMS42LS4yNS44My0uNDRzLjQyLS40My41NS0uNzJjLjEzLS4yOS4yLS42MS4yLS45NyAwLS4xOS0uMDItLjM4LS4wNy0uNTYtLjA1LS4xOC0uMTItLjM1LS4yMy0uNTEtLjEtLjE2LS4yNC0uMy0uNC0uNDMtLjE3LS4xMy0uMzctLjIzLS42MS0uMzEuMi0uMDkuMzctLjIuNTItLjMzLjE1LS4xMy4yNy0uMjcuMzctLjQyLjEtLjE1LjE3LS4zLjIyLS40Ni4wNS0uMTYuMDctLjMyLjA3LS40OCAwLS4zNi0uMDYtLjY4LS4xOC0uOTYtLjEyLS4yOC0uMjktLjUxLS41MS0uNjktLjItLjE5LS40Ny0uMzMtLjc3LS40M0M5LjEgOC4wNSA4Ljc2IDggOC4zOSA4Yy0uMzYgMC0uNjkuMDUtMSAuMTYtLjMuMTEtLjU3LjI2LS43OS40NS0uMjEuMTktLjM4LjQxLS41MS42Ny0uMTIuMjYtLjE4LjU0LS4xOC44NWgxLjNjMC0uMTcuMDMtLjMyLjA5LS40NXMuMTQtLjI1LjI1LS4zNGMuMTEtLjA5LjIzLS4xNy4zOC0uMjIuMTUtLjA1LjMtLjA4LjQ4LS4wOC40IDAgLjcuMS44OS4zMS4xOS4yLjI5LjQ5LjI5Ljg2IDAgLjE4LS4wMy4zNC0uMDguNDktLjA1LjE1LS4xNC4yNy0uMjUuMzctLjExLjEtLjI1LjE4LS40MS4yNC0uMTYuMDYtLjM2LjA5LS41OC4wOUg3LjV2MS4wM2guNzdjLjIyIDAgLjQyLjAyLjYuMDdzLjMzLjEzLjQ1LjIzYy4xMi4xMS4yMi4yNC4yOS40LjA3LjE2LjEuMzUuMS41NyAwIC40MS0uMTIuNzItLjM1LjkzLS4yMy4yMy0uNTUuMzMtLjk1LjMzem04LjU1LTUuOTJjLS4zMi0uMzMtLjctLjU5LTEuMTQtLjc3LS40My0uMTgtLjkyLS4yNy0xLjQ2LS4yN0gxMnY4aDIuM2MuNTUgMCAxLjA2LS4wOSAxLjUxLS4yNy40NS0uMTguODQtLjQzIDEuMTYtLjc2LjMyLS4zMy41Ny0uNzMuNzQtMS4xOS4xNy0uNDcuMjYtLjk5LjI2LTEuNTd2LS40YzAtLjU4LS4wOS0xLjEtLjI2LTEuNTctLjE4LS40Ny0uNDMtLjg3LS43NS0xLjJ6bS0uMzkgMy4xNmMwIC40Mi0uMDUuNzktLjE0IDEuMTMtLjEuMzMtLjI0LjYyLS40My44NS0uMTkuMjMtLjQzLjQxLS43MS41My0uMjkuMTItLjYyLjE4LS45OS4xOGgtLjkxVjkuMTJoLjk3Yy43MiAwIDEuMjcuMjMgMS42NC42OS4zOC40Ni41NyAxLjEyLjU3IDEuOTl2LjR6TTEyIDBsLS42Ni4wMyAzLjgxIDMuODEgMS4zMy0xLjMzYzMuMjcgMS41NSA1LjYxIDQuNzIgNS45NiA4LjQ4aDEuNUMyMy40NCA0Ljg0IDE4LjI5IDAgMTIgMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY2Vzc2liaWxpdHk+PHBhdGggZD1cXFwiTTEyIDJjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yem05IDdoLTZ2MTNoLTJ2LTZoLTJ2Nkg5VjlIM1Y3aDE4djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2Nlc3NpYmxlPjxjaXJjbGUgY3g9MTIgY3k9NCByPTI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE5IDEzdi0yYy0xLjU0LjAyLTMuMDktLjc1LTQuMDctMS44M2wtMS4yOS0xLjQzYy0uMTctLjE5LS4zOC0uMzQtLjYxLS40NS0uMDEgMC0uMDEtLjAxLS4wMi0uMDFIMTNjLS4zNS0uMi0uNzUtLjMtMS4xOS0uMjZDMTAuNzYgNy4xMSAxMCA4LjA0IDEwIDkuMDlWMTVjMCAxLjEuOSAyIDIgMmg1djVoMnYtNS41YzAtMS4xLS45LTItMi0yaC0zdi0zLjQ1YzEuMjkgMS4wNyAzLjI1IDEuOTQgNSAxLjk1em0tNi4xNyA1Yy0uNDEgMS4xNi0xLjUyIDItMi44MyAyLTEuNjYgMC0zLTEuMzQtMy0zIDAtMS4zMS44NC0yLjQxIDItMi44M1YxMi4xYy0yLjI4LjQ2LTQgMi40OC00IDQuOSAwIDIuNzYgMi4yNCA1IDUgNSAyLjQyIDAgNC40NC0xLjcyIDQuOS00aC0yLjA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1iYWxhbmNlPjxwYXRoIGQ9XFxcIk00IDEwdjdoM3YtN0g0em02IDB2N2gzdi03aC0zek0yIDIyaDE5di0zSDJ2M3ptMTQtMTJ2N2gzdi03aC0zem0tNC41LTlMMiA2djJoMTlWNmwtOS41LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJhbGFuY2Utd2FsbGV0PjxwYXRoIGQ9XFxcIk0yMSAxOHYxYzAgMS4xLS45IDItMiAySDVjLTEuMTEgMC0yLS45LTItMlY1YzAtMS4xLjg5LTIgMi0yaDE0YzEuMSAwIDIgLjkgMiAydjFoLTljLTEuMTEgMC0yIC45LTIgMnY4YzAgMS4xLjg5IDIgMiAyaDl6bS05LTJoMTBWOEgxMnY4em00LTIuNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJveD48cGF0aCBkPVxcXCJNMyA1djE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJINWMtMS4xMSAwLTIgLjktMiAyem0xMiA0YzAgMS42Ni0xLjM0IDMtMyAzcy0zLTEuMzQtMy0zIDEuMzQtMyAzLTMgMyAxLjM0IDMgM3ptLTkgOGMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2MUg2di0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTAgMTQuMmMtMi41IDAtNC43MS0xLjI4LTYtMy4yMi4wMy0xLjk5IDQtMy4wOCA2LTMuMDggMS45OSAwIDUuOTcgMS4wOSA2IDMuMDgtMS4yOSAxLjk0LTMuNSAzLjIyLTYgMy4yMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZD48cGF0aCBkPVxcXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWFsZXJ0PjxwYXRoIGQ9XFxcIk0xMC4wMSAyMS4wMWMwIDEuMS44OSAxLjk5IDEuOTkgMS45OXMxLjk5LS44OSAxLjk5LTEuOTloLTMuOTh6bTguODctNC4xOVYxMWMwLTMuMjUtMi4yNS01Ljk3LTUuMjktNi42OXYtLjcyQzEzLjU5IDIuNzEgMTIuODggMiAxMiAycy0xLjU5LjcxLTEuNTkgMS41OXYuNzJDNy4zNyA1LjAzIDUuMTIgNy43NSA1LjEyIDExdjUuODJMMyAxOC45NFYyMGgxOHYtMS4wNmwtMi4xMi0yLjEyek0xNiAxMy4wMWgtM3YzaC0ydi0zSDhWMTFoM1Y4aDJ2M2gzdjIuMDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMiAxMGgtNHY0aC0ydi00SDd2LTJoNFY3aDJ2NGg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExaC00djRoLTJ2LTRIN3YtMmg0VjdoMnY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1jaXJjbGUtb3V0bGluZT48cGF0aCBkPVxcXCJNMTMgN2gtMnY0SDd2Mmg0djRoMnYtNGg0di0yaC00Vjd6bS0xLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTExIDloMlY2aDNWNGgtM1YxaC0ydjNIOHYyaDN2M3ptLTQgOWMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnptMTAgMGMtMS4xIDAtMS45OS45LTEuOTkgMnMuODkgMiAxLjk5IDIgMi0uOSAyLTItLjktMi0yLTJ6bS05LjgzLTMuMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy44Ni03LjAxTDE5LjQyIDRoLS4wMWwtMS4xIDItMi43NiA1SDguNTNsLS4xMy0uMjdMNi4xNiA2bC0uOTUtMi0uOTQtMkgxdjJoMmwzLjYgNy41OS0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoMTJ2LTJINy40MmMtLjEzIDAtLjI1LS4xMS0uMjUtLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0+PHBhdGggZD1cXFwiTTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTEyLjUgOEgxMXY2bDQuNzUgMi44NS43NS0xLjIzLTQtMi4zN1Y4ek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtLWFkZD48cGF0aCBkPVxcXCJNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6bTEtMTFoLTJ2M0g4djJoM3YzaDJ2LTNoM3YtMmgtM1Y5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tb2ZmPjxwYXRoIGQ9XFxcIk0xMiA2YzMuODcgMCA3IDMuMTMgNyA3IDAgLjg0LS4xNiAxLjY1LS40MyAyLjRsMS41MiAxLjUyYy41OC0xLjE5LjkxLTIuNTEuOTEtMy45MiAwLTQuOTctNC4wMy05LTktOS0xLjQxIDAtMi43My4zMy0zLjkyLjkxTDkuNiA2LjQzQzEwLjM1IDYuMTYgMTEuMTYgNiAxMiA2em0xMC0uMjhsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek0yLjkyIDIuMjlMMS42NSAzLjU3IDIuOTggNC45bC0xLjExLjkzIDEuNDIgMS40MiAxLjExLS45NC44LjhDMy44MyA4LjY5IDMgMTAuNzUgMyAxM2MwIDQuOTcgNC4wMiA5IDkgOSAyLjI1IDAgNC4zMS0uODMgNS44OS0yLjJsMi4yIDIuMiAxLjI3LTEuMjdMMy44OSAzLjI3bC0uOTctLjk4em0xMy41NSAxNi4xQzE1LjI2IDE5LjM5IDEzLjcgMjAgMTIgMjBjLTMuODcgMC03LTMuMTMtNy03IDAtMS43LjYxLTMuMjYgMS42MS00LjQ3bDkuODYgOS44NnpNOC4wMiAzLjI4TDYuNiAxLjg2bC0uODYuNzEgMS40MiAxLjQyLjg2LS43MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtLW9uPjxwYXRoIGQ9XFxcIk0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3ptLTEuNDYtNS40N0w4LjQxIDEyLjRsLTEuMDYgMS4wNiAzLjE4IDMuMTggNi02LTEuMDYtMS4wNi00LjkzIDQuOTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGwtb3V0PjxwYXRoIGQ9XFxcIk0xNi4yMSA0LjE2bDQgNHYtNHptNCAxMmwtNCA0aDR6bS0xMiA0bC00LTR2NHptLTQtMTJsNC00aC00em0xMi45NS0uOTVjLTIuNzMtMi43My03LjE3LTIuNzMtOS45IDBzLTIuNzMgNy4xNyAwIDkuOSA3LjE3IDIuNzMgOS45IDAgMi43My03LjE2IDAtOS45em0tMS4xIDguOGMtMi4xMyAyLjEzLTUuNTcgMi4xMy03LjcgMHMtMi4xMy01LjU3IDAtNy43IDUuNTctMi4xMyA3LjcgMCAyLjEzIDUuNTcgMCA3Ljd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbmRyb2lkPjxwYXRoIGQ9XFxcIk02IDE4YzAgLjU1LjQ1IDEgMSAxaDF2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgydjMuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjVWMTloMWMuNTUgMCAxLS40NSAxLTFWOEg2djEwek0zLjUgOEMyLjY3IDggMiA4LjY3IDIgOS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVTNSAxNy4zMyA1IDE2LjV2LTdDNSA4LjY3IDQuMzMgOCAzLjUgOHptMTcgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjV2N2MwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjV2LTdjMC0uODMtLjY3LTEuNS0xLjUtMS41em0tNC45Ny01Ljg0bDEuMy0xLjNjLjItLjIuMi0uNTEgMC0uNzEtLjItLjItLjUxLS4yLS43MSAwbC0xLjQ4IDEuNDhDMTMuODUgMS4yMyAxMi45NSAxIDEyIDFjLS45NiAwLTEuODYuMjMtMi42Ni42M0w3Ljg1LjE1Yy0uMi0uMi0uNTEtLjItLjcxIDAtLjIuMi0uMi41MSAwIC43MWwxLjMxIDEuMzFDNi45NyAzLjI2IDYgNS4wMSA2IDdoMTJjMC0xLjk5LS45Ny0zLjc1LTIuNDctNC44NHpNMTAgNUg5VjRoMXYxem01IDBoLTFWNGgxdjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbm5vdW5jZW1lbnQ+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyA5aC0yVjVoMnY2em0wIDRoLTJ2LTJoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXBwcz48cGF0aCBkPVxcXCJNNCA4aDRWNEg0djR6bTYgMTJoNHYtNGgtNHY0em0tNiAwaDR2LTRINHY0em0wLTZoNHYtNEg0djR6bTYgMGg0di00aC00djR6bTYtMTB2NGg0VjRoLTR6bS02IDRoNFY0aC00djR6bTYgNmg0di00aC00djR6bTAgNmg0di00aC00djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcmNoaXZlPjxwYXRoIGQ9XFxcIk0yMC41NCA1LjIzbC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTYuNTVMMy40NiA1LjIzQzMuMTcgNS41NyAzIDYuMDIgMyA2LjVWMTljMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2LjVjMC0uNDgtLjE3LS45My0uNDYtMS4yN3pNMTIgMTcuNUw2LjUgMTJIMTB2LTJoNHYyaDMuNUwxMiAxNy41ek01LjEyIDVsLjgxLTFoMTJsLjk0IDFINS4xMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWJhY2s+PHBhdGggZD1cXFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kb3dud2FyZD48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZHJvcC1kb3duPjxwYXRoIGQ9XFxcIk03IDEwbDUgNSA1LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLWRvd24tY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDEybC00LTRoOGwtNCA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZHJvcC11cD48cGF0aCBkPVxcXCJNNyAxNGw1LTUgNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZm9yd2FyZD48cGF0aCBkPVxcXCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LXVwd2FyZD48cGF0aCBkPVxcXCJNNCAxMmwxLjQxIDEuNDFMMTEgNy44M1YyMGgyVjcuODNsNS41OCA1LjU5TDIwIDEybC04LTgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNwZWN0LXJhdGlvPjxwYXRoIGQ9XFxcIk0xOSAxMmgtMnYzaC0zdjJoNXYtNXpNNyA5aDNWN0g1djVoMlY5em0xNC02SDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3Nlc3NtZW50PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpNOSAxN0g3di03aDJ2N3ptNCAwaC0yVjdoMnYxMHptNCAwaC0ydi00aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQ+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0yIDE0SDd2LTJoN3Yyem0zLTRIN3YtMmgxMHYyem0wLTRIN1Y3aDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LWluZD48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTAgNGMxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTYgMTJINnYtMS40YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMVYxOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtbGF0ZT48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNiAxNWgtMnYtMmgydjJ6bTAtNGgtMlY4aDJ2NnptLTEtOWMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1yZXR1cm4+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem00IDEyaC00djNsLTUtNSA1LTV2M2g0djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXJldHVybmVkPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMCAxNWwtNS01aDNWOWg0djRoM2wtNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC10dXJuZWQtaW4+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0tMiAxNGwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXR0YWNobWVudD48cGF0aCBkPVxcXCJNMiAxMi41QzIgOS40NiA0LjQ2IDcgNy41IDdIMThjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDRIOS41QzguMTIgMTUgNyAxMy44OCA3IDEyLjVTOC4xMiAxMCA5LjUgMTBIMTd2Mkg5LjQxYy0uNTUgMC0uNTUgMSAwIDFIMThjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0ySDcuNUM1LjU3IDkgNCAxMC41NyA0IDEyLjVTNS41NyAxNiA3LjUgMTZIMTd2Mkg3LjVDNC40NiAxOCAyIDE1LjU0IDIgMTIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWF1dG9yZW5ldz48cGF0aCBkPVxcXCJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmFja3NwYWNlPjxwYXRoIGQ9XFxcIk0yMiAzSDdjLS42OSAwLTEuMjMuMzUtMS41OS44OEwwIDEybDUuNDEgOC4xMWMuMzYuNTMuOS44OSAxLjU5Ljg5aDE1YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0zIDEyLjU5TDE3LjU5IDE3IDE0IDEzLjQxIDEwLjQxIDE3IDkgMTUuNTkgMTIuNTkgMTIgOSA4LjQxIDEwLjQxIDcgMTQgMTAuNTkgMTcuNTkgNyAxOSA4LjQxIDE1LjQxIDEyIDE5IDE1LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmFja3VwPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmxvY2s+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTQgMTJjMC00LjQyIDMuNTgtOCA4LTggMS44NSAwIDMuNTUuNjMgNC45IDEuNjlMNS42OSAxNi45QzQuNjMgMTUuNTUgNCAxMy44NSA0IDEyem04IDhjLTEuODUgMC0zLjU1LS42My00LjktMS42OUwxOC4zMSA3LjFDMTkuMzcgOC40NSAyMCAxMC4xNSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2s+PHBhdGggZD1cXFwiTTE4IDJINmMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek02IDRoNXY4bC0yLjUtMS41TDYgMTJWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2ttYXJrPjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ib29rbWFyay1ib3JkZXI+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnptMCAxNWwtNS0yLjE4TDcgMThWNWgxMHYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJ1Zy1yZXBvcnQ+PHBhdGggZD1cXFwiTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJ1aWxkPjxwYXRoIGQ9XFxcIk0yMi43IDE5bC05LjEtOS4xYy45LTIuMy40LTUtMS41LTYuOS0yLTItNS0yLjQtNy40LTEuM0w5IDYgNiA5IDEuNiA0LjdDLjQgNy4xLjkgMTAuMSAyLjkgMTIuMWMxLjkgMS45IDQuNiAyLjQgNi45IDEuNWw5LjEgOS4xYy40LjQgMSAuNCAxLjQgMGwyLjMtMi4zYy41LS40LjUtMS4xLjEtMS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FjaGVkPjxwYXRoIGQ9XFxcIk0xOSA4bC00IDRoM2MwIDMuMzEtMi42OSA2LTYgNi0xLjAxIDAtMS45Ny0uMjUtMi44LS43bC0xLjQ2IDEuNDZDOC45NyAxOS41NCAxMC40MyAyMCAxMiAyMGM0LjQyIDAgOC0zLjU4IDgtOGgzbC00LTR6TTYgMTJjMC0zLjMxIDIuNjktNiA2LTYgMS4wMSAwIDEuOTcuMjUgMi44LjdsMS40Ni0xLjQ2QzE1LjAzIDQuNDYgMTMuNTcgNCAxMiA0Yy00LjQyIDAtOCAzLjU4LTggOEgxbDQgNCA0LTRINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhbWVyYS1lbmhhbmNlPjxwYXRoIGQ9XFxcIk05IDNMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMmgtMy4xN0wxNSAzSDl6bTMgMTVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLTFsMS4yNS0yLjc1TDE2IDEzbC0yLjc1LTEuMjVMMTIgOWwtMS4yNSAyLjc1TDggMTNsMi43NSAxLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FuY2VsPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhcmQtZ2lmdGNhcmQ+PHBhdGggZD1cXFwiTTIwIDZoLTIuMThjLjExLS4zMS4xOC0uNjUuMTgtMSAwLTEuNjYtMS4zNC0zLTMtMy0xLjA1IDAtMS45Ni41NC0yLjUgMS4zNWwtLjUuNjctLjUtLjY4QzEwLjk2IDIuNTQgMTAuMDUgMiA5IDIgNy4zNCAyIDYgMy4zNCA2IDVjMCAuMzUuMDcuNjkuMTggMUg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS01LTJjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXpNOSA0Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTExIDE1SDR2LTJoMTZ2MnptMC01SDRWOGg1LjA4TDcgMTAuODMgOC42MiAxMiAxMSA4Ljc2bDEtMS4zNiAxIDEuMzZMMTUuMzggMTIgMTcgMTAuODMgMTQuOTIgOEgyMHY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FyZC1tZW1iZXJzaGlwPjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDR2NWw0LTIgNCAydi01aDRjMS4xMSAwIDItLjg5IDItMlY0YzAtMS4xMS0uODktMi0yLTJ6bTAgMTNINHYtMmgxNnYyem0wLTVINFY0aDE2djZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYXJkLXRyYXZlbD48cGF0aCBkPVxcXCJNMjAgNmgtM1Y0YzAtMS4xMS0uODktMi0yLTJIOWMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yek05IDRoNnYySDlWNHptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDN2MmgyVjhoNnYyaDJWOGgzdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGFuZ2UtaGlzdG9yeT48cGF0aCBkPVxcXCJNMTIgNy43N0wxOC4zOSAxOEg1LjYxTDEyIDcuNzdNMTIgNEwyIDIwaDIwTDEyIDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjaz48cGF0aCBkPVxcXCJNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjay1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTkgMTRsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrLWJveC1vdXRsaW5lLWJsYW5rPjxwYXRoIGQ9XFxcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2stY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hldnJvbi1sZWZ0PjxwYXRoIGQ9XFxcIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hldnJvbi1yaWdodD48cGF0aCBkPVxcXCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaHJvbWUtcmVhZGVyLW1vZGU+PHBhdGggZD1cXFwiTTEzIDEyaDd2MS41aC03em0wLTIuNWg3VjExaC03em0wIDVoN1YxNmgtN3pNMjEgNEgzYy0xLjEgMC0yIC45LTIgMnYxM2MwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTVoLTlWNmg5djEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xhc3M+PHBhdGggZD1cXFwiTTE4IDJINmMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek02IDRoNXY4bC0yLjUtMS41TDYgMTJWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsZWFyPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG9zZT48cGF0aCBkPVxcXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNC41IDE0SDhjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTNsLjE0LjAxQzguNTggOC4yOCAxMC4xMyA3IDEyIDdjMi4yMSAwIDQgMS43OSA0IDRoLjVjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVTMTcuODggMTYgMTYuNSAxNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLWRvbmU+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTAgMTdsLTMuNS0zLjUgMS40MS0xLjQxTDEwIDE0LjE3IDE1LjE4IDlsMS40MSAxLjQxTDEwIDE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtZG93bmxvYWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTcgMTNsLTUgNS01LTVoM1Y5aDR2NGgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtb2ZmPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNGMtMS40OCAwLTIuODUuNDMtNC4wMSAxLjE3bDEuNDYgMS40NkMxMC4yMSA2LjIzIDExLjA4IDYgMTIgNmMzLjA0IDAgNS41IDIuNDYgNS41IDUuNXYuNUgxOWMxLjY2IDAgMyAxLjM0IDMgMyAwIDEuMTMtLjY0IDIuMTEtMS41NiAyLjYybDEuNDUgMS40NUMyMy4xNiAxOC4xNiAyNCAxNi42OCAyNCAxNWMwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMyA1LjI3bDIuNzUgMi43NEMyLjU2IDguMTUgMCAxMC43NyAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDExLjczbDIgMkwyMSAyMC43MyA0LjI3IDQgMyA1LjI3ek03LjczIDEwbDggOEg2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00aDEuNzN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1xdWV1ZT48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xOSAxOEg2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00aC43MUM3LjM3IDcuNjkgOS40OCA2IDEyIDZjMy4wNCAwIDUuNSAyLjQ2IDUuNSA1LjV2LjVIMTljMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC11cGxvYWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb2RlPjxwYXRoIGQ9XFxcIk05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29tcGFyZS1hcnJvd3M+PHBhdGggZD1cXFwiTTkuMDEgMTRIMnYyaDcuMDF2M0wxMyAxNWwtMy45OS00djN6bTUuOTgtMXYtM0gyMlY4aC03LjAxVjVMMTEgOWwzLjk5IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb250ZW50LWNvcHk+PHBhdGggZD1cXFwiTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29udGVudC1jdXQ+PHBhdGggZD1cXFwiTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbnRlbnQtcGFzdGU+PHBhdGggZD1cXFwiTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvcHlyaWdodD48cGF0aCBkPVxcXCJNMTAuMDggMTAuODZjLjA1LS4zMy4xNi0uNjIuMy0uODdzLjM0LS40Ni41OS0uNjJjLjI0LS4xNS41NC0uMjIuOTEtLjIzLjIzLjAxLjQ0LjA1LjYzLjEzLjIuMDkuMzguMjEuNTIuMzZzLjI1LjMzLjM0LjUzLjEzLjQyLjE0LjY0aDEuNzljLS4wMi0uNDctLjExLS45LS4yOC0xLjI5cy0uNC0uNzMtLjctMS4wMS0uNjYtLjUtMS4wOC0uNjYtLjg4LS4yMy0xLjM5LS4yM2MtLjY1IDAtMS4yMi4xMS0xLjcuMzRzLS44OC41My0xLjIuOTItLjU2Ljg0LS43MSAxLjM2UzggMTEuMjkgOCAxMS44N3YuMjdjMCAuNTguMDggMS4xMi4yMyAxLjY0cy4zOS45Ny43MSAxLjM1LjcyLjY5IDEuMi45MSAxLjA1LjM0IDEuNy4zNGMuNDcgMCAuOTEtLjA4IDEuMzItLjIzcy43Ny0uMzYgMS4wOC0uNjMuNTYtLjU4Ljc0LS45NC4yOS0uNzQuMy0xLjE1aC0xLjc5Yy0uMDEuMjEtLjA2LjQtLjE1LjU4cy0uMjEuMzMtLjM2LjQ2LS4zMi4yMy0uNTIuM2MtLjE5LjA3LS4zOS4wOS0uNi4xLS4zNi0uMDEtLjY2LS4wOC0uODktLjIzLS4yNS0uMTYtLjQ1LS4zNy0uNTktLjYycy0uMjUtLjU1LS4zLS44OC0uMDgtLjY3LS4wOC0xdi0uMjdjMC0uMzUuMDMtLjY4LjA4LTEuMDF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y3JlYXRlPjxwYXRoIGQ9XFxcIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVhdGUtbmV3LWZvbGRlcj48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTEgOGgtM3YzaC0ydi0zaC0zdi0yaDNWOWgydjNoM3YyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y3JlZGl0LWNhcmQ+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRhc2hib2FyZD48cGF0aCBkPVxcXCJNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kYXRlLXJhbmdlPjxwYXRoIGQ9XFxcIk05IDExSDd2Mmgydi0yem00IDBoLTJ2Mmgydi0yem00IDBoLTJ2Mmgydi0yem0yLTdoLTFWMmgtMnYySDhWMkg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAyMGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOWgxNHYxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlbGV0ZT48cGF0aCBkPVxcXCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlLWZvcmV2ZXI+PHBhdGggZD1cXFwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnptMi40Ni03LjEybDEuNDEtMS40MUwxMiAxMi41OWwyLjEyLTIuMTIgMS40MSAxLjQxTDEzLjQxIDE0bDIuMTIgMi4xMi0xLjQxIDEuNDFMMTIgMTUuNDFsLTIuMTIgMi4xMi0xLjQxLTEuNDFMMTAuNTkgMTRsLTIuMTMtMi4xMnpNMTUuNSA0bC0xLTFoLTVsLTEgMUg1djJoMTRWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlbGV0ZS1zd2VlcD48cGF0aCBkPVxcXCJNMTUgMTZoNHYyaC00em0wLThoN3YyaC03em0wIDRoNnYyaC02ek0zIDE4YzAgMS4xLjkgMiAyIDJoNmMxLjEgMCAyLS45IDItMlY4SDN2MTB6TTE0IDVoLTNsLTEtMUg2TDUgNUgydjJoMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZXNjcmlwdGlvbj48cGF0aCBkPVxcXCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE2SDh2LTJoOHYyem0wLTRIOHYtMmg4djJ6bS0zLTVWMy41TDE4LjUgOUgxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRucz48cGF0aCBkPVxcXCJNMjAgMTNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xdi02YzAtLjU1LS40NS0xLTEtMXpNNyAxOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6TTIwIDNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xVjRjMC0uNTUtLjQ1LTEtMS0xek03IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9uZT48cGF0aCBkPVxcXCJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9uZS1hbGw+PHBhdGggZD1cXFwiTTE4IDdsLTEuNDEtMS40MS02LjM0IDYuMzQgMS40MSAxLjQxTDE4IDd6bTQuMjQtMS40MUwxMS42NiAxNi4xNyA3LjQ4IDEybC0xLjQxIDEuNDFMMTEuNjYgMTlsMTItMTItMS40Mi0xLjQxek0uNDEgMTMuNDFMNiAxOWwxLjQxLTEuNDFMMS44MyAxMiAuNDEgMTMuNDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb251dC1sYXJnZT48cGF0aCBkPVxcXCJNMTEgNS4wOFYyYy01IC41LTkgNC44MS05IDEwczQgOS41IDkgMTB2LTMuMDhjLTMtLjQ4LTYtMy40LTYtNi45MnMzLTYuNDQgNi02Ljkyek0xOC45NyAxMUgyMmMtLjQ3LTUtNC04LjUzLTktOXYzLjA4QzE2IDUuNTEgMTguNTQgOCAxOC45NyAxMXpNMTMgMTguOTJWMjJjNS0uNDcgOC41My00IDktOWgtMy4wM2MtLjQzIDMtMi45NyA1LjQ5LTUuOTcgNS45MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbnV0LXNtYWxsPjxwYXRoIGQ9XFxcIk0xMSA5LjE2VjJjLTUgLjUtOSA0Ljc5LTkgMTBzNCA5LjUgOSAxMHYtNy4xNmMtMS0uNDEtMi0xLjUyLTItMi44NHMxLTIuNDMgMi0yLjg0ek0xNC44NiAxMUgyMmMtLjQ4LTQuNzUtNC04LjUzLTktOXY3LjE2YzEgLjMgMS41Mi45OCAxLjg2IDEuODR6TTEzIDE0Ljg0VjIyYzUtLjQ3IDguNTItNC4yNSA5LTloLTcuMTRjLS4zNC44Ni0uODYgMS41NC0xLjg2IDEuODR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kcmFmdHM+PHBhdGggZD1cXFwiTTIxLjk5IDhjMC0uNzItLjM3LTEuMzUtLjk0LTEuN0wxMiAxIDIuOTUgNi4zQzIuMzggNi42NSAyIDcuMjggMiA4djEwYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJsLS4wMS0xMHpNMTIgMTNMMy43NCA3Ljg0IDEyIDNsOC4yNiA0Ljg0TDEyIDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZWplY3Q+PHBhdGggZD1cXFwiTTUgMTdoMTR2Mkg1em03LTEyTDUuMzMgMTVoMTMuMzR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1lcnJvcj48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVycm9yLW91dGxpbmU+PHBhdGggZD1cXFwiTTExIDE1aDJ2MmgtMnptMC04aDJ2NmgtMnptLjk5LTVDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV1cm8tc3ltYm9sPjxwYXRoIGQ9XFxcIk0xNSAxOC41Yy0yLjUxIDAtNC42OC0xLjQyLTUuNzYtMy41SDE1di0ySDguNThjLS4wNS0uMzMtLjA4LS42Ni0uMDgtMXMuMDMtLjY3LjA4LTFIMTVWOUg5LjI0QzEwLjMyIDYuOTIgMTIuNSA1LjUgMTUgNS41YzEuNjEgMCAzLjA5LjU5IDQuMjMgMS41N0wyMSA1LjNDMTkuNDEgMy44NyAxNy4zIDMgMTUgM2MtMy45MiAwLTcuMjQgMi41MS04LjQ4IDZIM3YyaDMuMDZjLS4wNC4zMy0uMDYuNjYtLjA2IDEgMCAuMzQuMDIuNjcuMDYgMUgzdjJoMy41MmMxLjI0IDMuNDkgNC41NiA2IDguNDggNiAyLjMxIDAgNC40MS0uODcgNi0yLjNsLTEuNzgtMS43N2MtMS4xMy45OC0yLjYgMS41Ny00LjIyIDEuNTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ldmVudD48cGF0aCBkPVxcXCJNMTcgMTJoLTV2NWg1di01ek0xNiAxdjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJoLTFWMWgtMnptMyAxOEg1VjhoMTR2MTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ldmVudC1zZWF0PjxwYXRoIGQ9XFxcIk00IDE4djNoM3YtM2gxMHYzaDN2LTZINHptMTUtOGgzdjNoLTN6TTIgMTBoM3YzSDJ6bTE1IDNIN1Y1YzAtMS4xLjktMiAyLTJoNmMxLjEgMCAyIC45IDIgMnY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhpdC10by1hcHA+PHBhdGggZD1cXFwiTTEwLjA5IDE1LjU5TDExLjUgMTdsNS01LTUtNS0xLjQxIDEuNDFMMTIuNjcgMTFIM3YyaDkuNjdsLTIuNTggMi41OXpNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2NGgyVjVoMTR2MTRINXYtNEgzdjRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGFuZC1sZXNzPjxwYXRoIGQ9XFxcIk0xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGFuZC1tb3JlPjxwYXRoIGQ9XFxcIk0xNi41OSA4LjU5TDEyIDEzLjE3IDcuNDEgOC41OSA2IDEwbDYgNiA2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHBsb3JlPjxwYXRoIGQ9XFxcIk0xMiAxMC45Yy0uNjEgMC0xLjEuNDktMS4xIDEuMXMuNDkgMS4xIDEuMSAxLjFjLjYxIDAgMS4xLS40OSAxLjEtMS4xcy0uNDktMS4xLTEuMS0xLjF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTIuMTkgMTIuMTlMNiAxOGwzLjgxLTguMTlMMTggNmwtMy44MSA4LjE5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXh0ZW5zaW9uPjxwYXRoIGQ9XFxcIk0yMC41IDExSDE5VjdjMC0xLjEtLjktMi0yLTJoLTRWMy41QzEzIDIuMTIgMTEuODggMSAxMC41IDFTOCAyLjEyIDggMy41VjVINGMtMS4xIDAtMS45OS45LTEuOTkgMnYzLjhIMy41YzEuNDkgMCAyLjcgMS4yMSAyLjcgMi43cy0xLjIxIDIuNy0yLjcgMi43SDJWMjBjMCAxLjEuOSAyIDIgMmgzLjh2LTEuNWMwLTEuNDkgMS4yMS0yLjcgMi43LTIuNyAxLjQ5IDAgMi43IDEuMjEgMi43IDIuN1YyMkgxN2MxLjEgMCAyLS45IDItMnYtNGgxLjVjMS4zOCAwIDIuNS0xLjEyIDIuNS0yLjVTMjEuODggMTEgMjAuNSAxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZhY2U+PHBhdGggZD1cXFwiTTkgMTEuNzVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1cy41NiAxLjI1IDEuMjUgMS4yNSAxLjI1LS41NiAxLjI1LTEuMjUtLjU2LTEuMjUtMS4yNS0xLjI1em02IDBjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1cy41NiAxLjI1IDEuMjUgMS4yNSAxLjI1LS41NiAxLjI1LTEuMjUtLjU2LTEuMjUtMS4yNS0xLjI1ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOCAwLS4yOS4wMi0uNTguMDUtLjg2IDIuMzYtMS4wNSA0LjIzLTIuOTggNS4yMS01LjM3QzExLjA3IDguMzMgMTQuMDUgMTAgMTcuNDIgMTBjLjc4IDAgMS41My0uMDkgMi4yNS0uMjYuMjEuNzEuMzMgMS40Ny4zMyAyLjI2IDAgNC40MS0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmF2b3JpdGU+PHBhdGggZD1cXFwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mYXZvcml0ZS1ib3JkZXI+PHBhdGggZD1cXFwiTTE2LjUgM2MtMS43NCAwLTMuNDEuODEtNC41IDIuMDlDMTAuOTEgMy44MSA5LjI0IDMgNy41IDMgNC40MiAzIDIgNS40MiAyIDguNWMwIDMuNzggMy40IDYuODYgOC41NSAxMS41NEwxMiAyMS4zNWwxLjQ1LTEuMzJDMTguNiAxNS4zNiAyMiAxMi4yOCAyMiA4LjUgMjIgNS40MiAxOS41OCAzIDE2LjUgM3ptLTQuNCAxNS41NWwtLjEuMS0uMS0uMUM3LjE0IDE0LjI0IDQgMTEuMzkgNCA4LjUgNCA2LjUgNS41IDUgNy41IDVjMS41NCAwIDMuMDQuOTkgMy41NyAyLjM2aDEuODdDMTMuNDYgNS45OSAxNC45NiA1IDE2LjUgNWMyIDAgMy41IDEuNSAzLjUgMy41IDAgMi44OS0zLjE0IDUuNzQtNy45IDEwLjA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmVlZGJhY2s+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyAxMmgtMnYtMmgydjJ6bTAtNGgtMlY2aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbGUtZG93bmxvYWQ+PHBhdGggZD1cXFwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbGUtdXBsb2FkPjxwYXRoIGQ9XFxcIk05IDE2aDZ2LTZoNGwtNy03LTcgN2g0em0tNCAyaDE0djJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbHRlci1saXN0PjxwYXRoIGQ9XFxcIk0xMCAxOGg0di0yaC00djJ6TTMgNnYyaDE4VjZIM3ptMyA3aDEydi0ySDZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbmQtaW4tcGFnZT48cGF0aCBkPVxcXCJNMjAgMTkuNTlWOGwtNi02SDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMuNDUgMCAuODUtLjE1IDEuMTktLjRsLTQuNDMtNC40M2MtLjguNTItMS43NC44My0yLjc2LjgzLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNWMwIDEuMDItLjMxIDEuOTYtLjgzIDIuNzVMMjAgMTkuNTl6TTkgMTNjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtMy0xLjM0LTMtMy0zLTMgMS4zNC0zIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maW5kLXJlcGxhY2U+PHBhdGggZD1cXFwiTTExIDZjMS4zOCAwIDIuNjMuNTYgMy41NCAxLjQ2TDEyIDEwaDZWNGwtMi4wNSAyLjA1QzE0LjY4IDQuNzggMTIuOTMgNCAxMSA0Yy0zLjUzIDAtNi40MyAyLjYxLTYuOTIgNkg2LjFjLjQ2LTIuMjggMi40OC00IDQuOS00em01LjY0IDkuMTRjLjY2LS45IDEuMTItMS45NyAxLjI4LTMuMTRIMTUuOWMtLjQ2IDIuMjgtMi40OCA0LTQuOSA0LTEuMzggMC0yLjYzLS41Ni0zLjU0LTEuNDZMMTAgMTJINHY2bDIuMDUtMi4wNUM3LjMyIDE3LjIyIDkuMDcgMTggMTEgMThjMS41NSAwIDIuOTgtLjUxIDQuMTQtMS4zNkwyMCAyMS40OSAyMS40OSAyMGwtNC44NS00Ljg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmluZ2VycHJpbnQ+PHBhdGggZD1cXFwiTTE3LjgxIDQuNDdjLS4wOCAwLS4xNi0uMDItLjIzLS4wNkMxNS42NiAzLjQyIDE0IDMgMTIuMDEgM2MtMS45OCAwLTMuODYuNDctNS41NyAxLjQxLS4yNC4xMy0uNTQuMDQtLjY4LS4yLS4xMy0uMjQtLjA0LS41NS4yLS42OEM3LjgyIDIuNTIgOS44NiAyIDEyLjAxIDJjMi4xMyAwIDMuOTkuNDcgNi4wMyAxLjUyLjI1LjEzLjM0LjQzLjIxLjY3LS4wOS4xOC0uMjYuMjgtLjQ0LjI4ek0zLjUgOS43MmMtLjEgMC0uMi0uMDMtLjI5LS4wOS0uMjMtLjE2LS4yOC0uNDctLjEyLS43Ljk5LTEuNCAyLjI1LTIuNSAzLjc1LTMuMjdDOS45OCA0LjA0IDE0IDQuMDMgMTcuMTUgNS42NWMxLjUuNzcgMi43NiAxLjg2IDMuNzUgMy4yNS4xNi4yMi4xMS41NC0uMTIuNy0uMjMuMTYtLjU0LjExLS43LS4xMi0uOS0xLjI2LTIuMDQtMi4yNS0zLjM5LTIuOTQtMi44Ny0xLjQ3LTYuNTQtMS40Ny05LjQuMDEtMS4zNi43LTIuNSAxLjctMy40IDIuOTYtLjA4LjE0LS4yMy4yMS0uMzkuMjF6bTYuMjUgMTIuMDdjLS4xMyAwLS4yNi0uMDUtLjM1LS4xNS0uODctLjg3LTEuMzQtMS40My0yLjAxLTIuNjQtLjY5LTEuMjMtMS4wNS0yLjczLTEuMDUtNC4zNCAwLTIuOTcgMi41NC01LjM5IDUuNjYtNS4zOXM1LjY2IDIuNDIgNS42NiA1LjM5YzAgLjI4LS4yMi41LS41LjVzLS41LS4yMi0uNS0uNWMwLTIuNDItMi4wOS00LjM5LTQuNjYtNC4zOS0yLjU3IDAtNC42NiAxLjk3LTQuNjYgNC4zOSAwIDEuNDQuMzIgMi43Ny45MyAzLjg1LjY0IDEuMTUgMS4wOCAxLjY0IDEuODUgMi40Mi4xOS4yLjE5LjUxIDAgLjcxLS4xMS4xLS4yNC4xNS0uMzcuMTV6bTcuMTctMS44NWMtMS4xOSAwLTIuMjQtLjMtMy4xLS44OS0xLjQ5LTEuMDEtMi4zOC0yLjY1LTIuMzgtNC4zOSAwLS4yOC4yMi0uNS41LS41cy41LjIyLjUuNWMwIDEuNDEuNzIgMi43NCAxLjk0IDMuNTYuNzEuNDggMS41NC43MSAyLjU0LjcxLjI0IDAgLjY0LS4wMyAxLjA0LS4xLjI3LS4wNS41My4xMy41OC40MS4wNS4yNy0uMTMuNTMtLjQxLjU4LS41Ny4xMS0xLjA3LjEyLTEuMjEuMTJ6TTE0LjkxIDIyYy0uMDQgMC0uMDktLjAxLS4xMy0uMDItMS41OS0uNDQtMi42My0xLjAzLTMuNzItMi4xLTEuNC0xLjM5LTIuMTctMy4yNC0yLjE3LTUuMjIgMC0xLjYyIDEuMzgtMi45NCAzLjA4LTIuOTQgMS43IDAgMy4wOCAxLjMyIDMuMDggMi45NCAwIDEuMDcuOTMgMS45NCAyLjA4IDEuOTRzMi4wOC0uODcgMi4wOC0xLjk0YzAtMy43Ny0zLjI1LTYuODMtNy4yNS02LjgzLTIuODQgMC01LjQ0IDEuNTgtNi42MSA0LjAzLS4zOS44MS0uNTkgMS43Ni0uNTkgMi44IDAgLjc4LjA3IDIuMDEuNjcgMy42MS4xLjI2LS4wMy41NS0uMjkuNjQtLjI2LjEtLjU1LS4wNC0uNjQtLjI5LS40OS0xLjMxLS43My0yLjYxLS43My0zLjk2IDAtMS4yLjIzLTIuMjkuNjgtMy4yNCAxLjMzLTIuNzkgNC4yOC00LjYgNy41MS00LjYgNC41NSAwIDguMjUgMy41MSA4LjI1IDcuODMgMCAxLjYyLTEuMzggMi45NC0zLjA4IDIuOTRzLTMuMDgtMS4zMi0zLjA4LTIuOTRjMC0xLjA3LS45My0xLjk0LTIuMDgtMS45NHMtMi4wOC44Ny0yLjA4IDEuOTRjMCAxLjcxLjY2IDMuMzEgMS44NyA0LjUxLjk1Ljk0IDEuODYgMS40NiAzLjI3IDEuODUuMjcuMDcuNDIuMzUuMzUuNjEtLjA1LjIzLS4yNi4zOC0uNDcuMzh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maXJzdC1wYWdlPjxwYXRoIGQ9XFxcIk0xOC40MSAxNi41OUwxMy44MiAxMmw0LjU5LTQuNTlMMTcgNmwtNiA2IDYgNnpNNiA2aDJ2MTJINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsYWc+PHBhdGggZD1cXFwiTTE0LjQgNkwxNCA0SDV2MTdoMnYtN2g1LjZsLjQgMmg3VjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlnaHQtbGFuZD48cGF0aCBkPVxcXCJNMi41IDE5aDE5djJoLTE5em03LjE4LTUuNzNsNC4zNSAxLjE2IDUuMzEgMS40MmMuOC4yMSAxLjYyLS4yNiAxLjg0LTEuMDYuMjEtLjgtLjI2LTEuNjItMS4wNi0xLjg0bC01LjMxLTEuNDItMi43Ni05LjAyTDEwLjEyIDJ2OC4yOEw1LjE1IDguOTVsLS45My0yLjMyLTEuNDUtLjM5djUuMTdsMS42LjQzIDUuMzEgMS40M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaWdodC10YWtlb2ZmPjxwYXRoIGQ9XFxcIk0yLjUgMTloMTl2MmgtMTl6bTE5LjU3LTkuMzZjLS4yMS0uOC0xLjA0LTEuMjgtMS44NC0xLjA2TDE0LjkyIDEwbC02LjktNi40My0xLjkzLjUxIDQuMTQgNy4xNy00Ljk3IDEuMzMtMS45Ny0xLjU0LTEuNDUuMzkgMS44MiAzLjE2Ljc3IDEuMzMgMS42LS40MyA1LjMxLTEuNDIgNC4zNS0xLjE2TDIxIDExLjQ5Yy44MS0uMjMgMS4yOC0xLjA1IDEuMDctMS44NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaXAtdG8tYmFjaz48cGF0aCBkPVxcXCJNOSA3SDd2MmgyVjd6bTAgNEg3djJoMnYtMnptMC04Yy0xLjExIDAtMiAuOS0yIDJoMlYzem00IDEyaC0ydjJoMnYtMnptNi0xMnYyaDJjMC0xLjEtLjktMi0yLTJ6bS02IDBoLTJ2MmgyVjN6TTkgMTd2LTJIN2MwIDEuMS44OSAyIDIgMnptMTAtNGgydi0yaC0ydjJ6bTAtNGgyVjdoLTJ2MnptMCA4YzEuMSAwIDItLjkgMi0yaC0ydjJ6TTUgN0gzdjEyYzAgMS4xLjg5IDIgMiAyaDEydi0ySDVWN3ptMTAtMmgyVjNoLTJ2MnptMCAxMmgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlwLXRvLWZyb250PjxwYXRoIGQ9XFxcIk0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTIgNHYtMkgzYzAgMS4xLjg5IDIgMiAyek0zIDloMlY3SDN2MnptMTIgMTJoMnYtMmgtMnYyem00LTE4SDljLTEuMTEgMC0yIC45LTIgMnYxMGMwIDEuMS44OSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDEySDlWNWgxMHYxMHptLTggNmgydi0yaC0ydjJ6bS00IDBoMnYtMkg3djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb2xkZXI+PHBhdGggZD1cXFwiTTEwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMmgtOGwtMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9sZGVyLW9wZW4+PHBhdGggZD1cXFwiTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0wIDEySDRWOGgxNnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbGRlci1zaGFyZWQ+PHBhdGggZD1cXFwiTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0tNSAzYzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMi0yLS45LTItMiAuOS0yIDItMnptNCA4aC04di0xYzAtMS4zMyAyLjY3LTIgNC0yczQgLjY3IDQgMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9udC1kb3dubG9hZD48cGF0aCBkPVxcXCJNOS45MyAxMy41aDQuMTRMMTIgNy45OHpNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS00LjA1IDE2LjVsLTEuMTQtM0g5LjE3bC0xLjEyIDNINS45Nmw1LjExLTEzaDEuODZsNS4xMSAxM2gtMi4wOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvcndhcmQ+PHBhdGggZD1cXFwiTTEyIDhWNGw4IDgtOCA4di00SDRWOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZ1bGxzY3JlZW4+PHBhdGggZD1cXFwiTTcgMTRINXY1aDV2LTJIN3YtM3ptLTItNGgyVjdoM1Y1SDV2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTQgNXYyaDN2M2gyVjVoLTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mdWxsc2NyZWVuLWV4aXQ+PHBhdGggZD1cXFwiTTUgMTZoM3YzaDJ2LTVINXYyem0zLThINXYyaDVWNUg4djN6bTYgMTFoMnYtM2gzdi0yaC01djV6bTItMTFWNWgtMnY1aDVWOGgtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWctdHJhbnNsYXRlPjxwYXRoIGQ9XFxcIk0yMCA1aC05LjEyTDEwIDJINGMtMS4xIDAtMiAuOS0yIDJ2MTNjMCAxLjEuOSAyIDIgMmg3bDEgM2g4YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6TTcuMTcgMTQuNTljLTIuMjUgMC00LjA5LTEuODMtNC4wOS00LjA5czEuODMtNC4wOSA0LjA5LTQuMDljMS4wNCAwIDEuOTkuMzcgMi43NCAxLjA3bC4wNy4wNi0xLjIzIDEuMTgtLjA2LS4wNWMtLjI5LS4yNy0uNzgtLjU5LTEuNTItLjU5LTEuMzEgMC0yLjM4IDEuMDktMi4zOCAyLjQyczEuMDcgMi40MiAyLjM4IDIuNDJjMS4zNyAwIDEuOTYtLjg3IDIuMTItMS40Nkg3LjA4VjkuOTFoMy45NWwuMDEuMDdjLjA0LjIxLjA1LjQuMDUuNjEgMCAyLjM1LTEuNjEgNC0zLjkyIDR6bTYuMDMtMS43MWMuMzMuNi43NCAxLjE4IDEuMTkgMS43bC0uNTQuNTMtLjY1LTIuMjN6bS43Ny0uNzZoLS45OWwtLjMxLTEuMDRoMy45OXMtLjM0IDEuMzEtMS41NiAyLjc0Yy0uNTItLjYyLS44OS0xLjIzLTEuMTMtMS43ek0yMSAyMGMwIC41NS0uNDUgMS0xIDFoLTdsMi0yLS44MS0yLjc3LjkyLS45MkwxNy43OSAxOGwuNzMtLjczLTIuNzEtMi42OGMuOS0xLjAzIDEuNi0yLjI1IDEuOTItMy41MUgxOXYtMS4wNGgtMy42NFY5aC0xLjA0djEuMDRoLTEuOTZMMTEuMTggNkgyMGMuNTUgMCAxIC40NSAxIDF2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1nYXZlbD48cGF0aCBkPVxcXCJNMSAyMWgxMnYySDF6TTUuMjQ1IDguMDdsMi44My0yLjgyNyAxNC4xNCAxNC4xNDItMi44MjggMi44Mjh6TTEyLjMxNyAxbDUuNjU3IDUuNjU2LTIuODMgMi44My01LjY1NC01LjY2ek0zLjgyNSA5LjQ4NWw1LjY1NyA1LjY1Ny0yLjgyOCAyLjgyOC01LjY1Ny01LjY1N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdlc3R1cmU+PHBhdGggZD1cXFwiTTQuNTkgNi44OWMuNy0uNzEgMS40LTEuMzUgMS43MS0xLjIyLjUuMiAwIDEuMDMtLjMgMS41Mi0uMjUuNDItMi44NiAzLjg5LTIuODYgNi4zMSAwIDEuMjguNDggMi4zNCAxLjM0IDIuOTguNzUuNTYgMS43NC43MyAyLjY0LjQ2IDEuMDctLjMxIDEuOTUtMS40IDMuMDYtMi43NyAxLjIxLTEuNDkgMi44My0zLjQ0IDQuMDgtMy40NCAxLjYzIDAgMS42NSAxLjAxIDEuNzYgMS43OS0zLjc4LjY0LTUuMzggMy42Ny01LjM4IDUuMzcgMCAxLjcgMS40NCAzLjA5IDMuMjEgMy4wOSAxLjYzIDAgNC4yOS0xLjMzIDQuNjktNi4xSDIxdi0yLjVoLTIuNDdjLS4xNS0xLjY1LTEuMDktNC4yLTQuMDMtNC4yLTIuMjUgMC00LjE4IDEuOTEtNC45NCAyLjg0LS41OC43My0yLjA2IDIuNDgtMi4yOSAyLjcyLS4yNS4zLS42OC44NC0xLjExLjg0LS40NSAwLS43Mi0uODMtLjM2LTEuOTIuMzUtMS4wOSAxLjQtMi44NiAxLjg1LTMuNTIuNzgtMS4xNCAxLjMtMS45MiAxLjMtMy4yOEM4Ljk1IDMuNjkgNy4zMSAzIDYuNDQgMyA1LjEyIDMgMy45NyA0IDMuNzIgNC4yNWMtLjM2LjM2LS42Ni42Ni0uODguOTNsMS43NSAxLjcxem05LjI5IDExLjY2Yy0uMzEgMC0uNzQtLjI2LS43NC0uNzIgMC0uNi43My0yLjIgMi44Ny0yLjc2LS4zIDIuNjktMS40MyAzLjQ4LTIuMTMgMy40OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdldC1hcHA+PHBhdGggZD1cXFwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdpZj48cGF0aCBkPVxcXCJNMTEuNSA5SDEzdjZoLTEuNXpNOSA5SDZjLS42IDAtMSAuNS0xIDF2NGMwIC41LjQgMSAxIDFoM2MuNiAwIDEtLjUgMS0xdi0ySDguNXYxLjVoLTJ2LTNIMTBWMTBjMC0uNS0uNC0xLTEtMXptMTAgMS41VjloLTQuNXY2SDE2di0yaDJ2LTEuNWgtMnYtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdyYWRlPjxwYXRoIGQ9XFxcIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdyb3VwLXdvcms+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTggMTcuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6TTkuNSA4YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41czIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNVM5LjUgOS4zOCA5LjUgOHptNi41IDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1oZWxwPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE3aC0ydi0yaDJ2MnptMi4wNy03Ljc1bC0uOS45MkMxMy40NSAxMi45IDEzIDEzLjUgMTMgMTVoLTJ2LS41YzAtMS4xLjQ1LTIuMSAxLjE3LTIuODNsMS4yNC0xLjI2Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAySDhjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIC44OC0uMzYgMS42OC0uOTMgMi4yNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhlbHAtb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMThoMnYtMmgtMnYyem0xLTE2QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMC0xNGMtMi4yMSAwLTQgMS43OS00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNSAwLTIuMjEtMS43OS00LTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhpZ2hsaWdodC1vZmY+PHBhdGggZD1cXFwiTTE0LjU5IDhMMTIgMTAuNTkgOS40MSA4IDggOS40MSAxMC41OSAxMiA4IDE0LjU5IDkuNDEgMTYgMTIgMTMuNDEgMTQuNTkgMTYgMTYgMTQuNTkgMTMuNDEgMTIgMTYgOS40MSAxNC41OSA4ek0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhpc3Rvcnk+PHBhdGggZD1cXFwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvbWU+PHBhdGggZD1cXFwiTTEwIDIwdi02aDR2Nmg1di04aDNMMTIgMyAyIDEyaDN2OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvdXJnbGFzcy1lbXB0eT48cGF0aCBkPVxcXCJNNiAydjZoLjAxTDYgOC4wMSAxMCAxMmwtNCA0IC4wMS4wMUg2VjIyaDEydi01Ljk5aC0uMDFMMTggMTZsLTQtNCA0LTMuOTktLjAxLS4wMUgxOFYySDZ6bTEwIDE0LjVWMjBIOHYtMy41bDQtNCA0IDR6bS00LTVsLTQtNFY0aDh2My41bC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob3VyZ2xhc3MtZnVsbD48cGF0aCBkPVxcXCJNNiAydjZoLjAxTDYgOC4wMSAxMCAxMmwtNCA0IC4wMS4wMUg2VjIyaDEydi01Ljk5aC0uMDFMMTggMTZsLTQtNCA0LTMuOTktLjAxLS4wMUgxOFYySDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1odHRwPjxwYXRoIGQ9XFxcIk00LjUgMTFoLTJWOUgxdjZoMS41di0yLjVoMlYxNUg2VjlINC41djJ6bTIuNS0uNWgxLjVWMTVIMTB2LTQuNWgxLjVWOUg3djEuNXptNS41IDBIMTRWMTVoMS41di00LjVIMTdWOWgtNC41djEuNXptOS0xLjVIMTh2NmgxLjV2LTJoMmMuOCAwIDEuNS0uNyAxLjUtMS41di0xYzAtLjgtLjctMS41LTEuNS0xLjV6bTAgMi41aC0ydi0xaDJ2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWh0dHBzPjxwYXRoIGQ9XFxcIk0xOCA4aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS02IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0zLjEtOUg4LjlWNmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW1wb3J0YW50LWRldmljZXM+PHBhdGggZD1cXFwiTTIzIDExLjAxTDE4IDExYy0uNTUgMC0xIC40NS0xIDF2OWMwIC41NS40NSAxIDEgMWg1Yy41NSAwIDEtLjQ1IDEtMXYtOWMwLS41NS0uNDUtLjk5LTEtLjk5ek0yMyAyMGgtNXYtN2g1djd6TTIwIDJIMkMuODkgMiAwIDIuODkgMCA0djEyYzAgMS4xLjg5IDIgMiAyaDd2Mkg3djJoOHYtMmgtMnYtMmgydi0ySDJWNGgxOHY1aDJWNGMwLTEuMTEtLjktMi0yLTJ6bS04LjAzIDdMMTEgNmwtLjk3IDNIN2wyLjQ3IDEuNzYtLjk0IDIuOTEgMi40Ny0xLjggMi40NyAxLjgtLjk0LTIuOTFMMTUgOWgtMy4wM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDQuOTljLTEuMTEgMC0xLjk4Ljg5LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjExLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluZGV0ZXJtaW5hdGUtY2hlY2stYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTIgMTBIN3YtMmgxMHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5mbz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluZm8tb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMTdoMnYtNmgtMnY2em0xLTE1QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpNMTEgOWgyVjdoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWlucHV0PjxwYXRoIGQ9XFxcIk0yMSAzLjAxSDNjLTEuMSAwLTIgLjktMiAyVjloMlY0Ljk5aDE4djE0LjAzSDNWMTVIMXY0LjAxYzAgMS4xLjkgMS45OCAyIDEuOThoMThjMS4xIDAgMi0uODggMi0xLjk4di0xNGMwLTEuMTEtLjktMi0yLTJ6TTExIDE2bDQtNC00LTR2M0gxdjJoMTB2M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWludmVydC1jb2xvcnM+PHBhdGggZD1cXFwiTTE3LjY2IDcuOTNMMTIgMi4yNyA2LjM0IDcuOTNjLTMuMTIgMy4xMi0zLjEyIDguMTkgMCAxMS4zMUM3LjkgMjAuOCA5Ljk1IDIxLjU4IDEyIDIxLjU4YzIuMDUgMCA0LjEtLjc4IDUuNjYtMi4zNCAzLjEyLTMuMTIgMy4xMi04LjE5IDAtMTEuMzF6TTEyIDE5LjU5Yy0xLjYgMC0zLjExLS42Mi00LjI0LTEuNzZDNi42MiAxNi42OSA2IDE1LjE5IDYgMTMuNTlzLjYyLTMuMTEgMS43Ni00LjI0TDEyIDUuMXYxNC40OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhYmVsPjxwYXRoIGQ9XFxcIk0xNy42MyA1Ljg0QzE3LjI3IDUuMzMgMTYuNjcgNSAxNiA1TDUgNS4wMUMzLjkgNS4wMSAzIDUuOSAzIDd2MTBjMCAxLjEuOSAxLjk5IDIgMS45OUwxNiAxOWMuNjcgMCAxLjI3LS4zMyAxLjYzLS44NEwyMiAxMmwtNC4zNy02LjE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFiZWwtb3V0bGluZT48cGF0aCBkPVxcXCJNMTcuNjMgNS44NEMxNy4yNyA1LjMzIDE2LjY3IDUgMTYgNUw1IDUuMDFDMy45IDUuMDEgMyA1LjkgMyA3djEwYzAgMS4xLjkgMS45OSAyIDEuOTlMMTYgMTljLjY3IDAgMS4yNy0uMzMgMS42My0uODRMMjIgMTJsLTQuMzctNi4xNnpNMTYgMTdINVY3aDExbDMuNTUgNUwxNiAxN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhbmd1YWdlPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem02LjkzIDZoLTIuOTVjLS4zMi0xLjI1LS43OC0yLjQ1LTEuMzgtMy41NiAxLjg0LjYzIDMuMzcgMS45MSA0LjMzIDMuNTZ6TTEyIDQuMDRjLjgzIDEuMiAxLjQ4IDIuNTMgMS45MSAzLjk2aC0zLjgyYy40My0xLjQzIDEuMDgtMi43NiAxLjkxLTMuOTZ6TTQuMjYgMTRDNC4xIDEzLjM2IDQgMTIuNjkgNCAxMnMuMS0xLjM2LjI2LTJoMy4zOGMtLjA4LjY2LS4xNCAxLjMyLS4xNCAyIDAgLjY4LjA2IDEuMzQuMTQgMkg0LjI2em0uODIgMmgyLjk1Yy4zMiAxLjI1Ljc4IDIuNDUgMS4zOCAzLjU2LTEuODQtLjYzLTMuMzctMS45LTQuMzMtMy41NnptMi45NS04SDUuMDhjLjk2LTEuNjYgMi40OS0yLjkzIDQuMzMtMy41NkM4LjgxIDUuNTUgOC4zNSA2Ljc1IDguMDMgOHpNMTIgMTkuOTZjLS44My0xLjItMS40OC0yLjUzLTEuOTEtMy45NmgzLjgyYy0uNDMgMS40My0xLjA4IDIuNzYtMS45MSAzLjk2ek0xNC4zNCAxNEg5LjY2Yy0uMDktLjY2LS4xNi0xLjMyLS4xNi0yIDAtLjY4LjA3LTEuMzUuMTYtMmg0LjY4Yy4wOS42NS4xNiAxLjMyLjE2IDIgMCAuNjgtLjA3IDEuMzQtLjE2IDJ6bS4yNSA1LjU2Yy42LTEuMTEgMS4wNi0yLjMxIDEuMzgtMy41NmgyLjk1Yy0uOTYgMS42NS0yLjQ5IDIuOTMtNC4zMyAzLjU2ek0xNi4zNiAxNGMuMDgtLjY2LjE0LTEuMzIuMTQtMiAwLS42OC0uMDYtMS4zNC0uMTQtMmgzLjM4Yy4xNi42NC4yNiAxLjMxLjI2IDJzLS4xIDEuMzYtLjI2IDJoLTMuMzh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYXN0LXBhZ2U+PHBhdGggZD1cXFwiTTUuNTkgNy40MUwxMC4xOCAxMmwtNC41OSA0LjU5TDcgMThsNi02LTYtNnpNMTYgNmgydjEyaC0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGF1bmNoPjxwYXRoIGQ9XFxcIk0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpZ2h0YnVsYi1vdXRsaW5lPjxwYXRoIGQ9XFxcIk05IDIxYzAgLjU1LjQ1IDEgMSAxaDRjLjU1IDAgMS0uNDUgMS0xdi0xSDl2MXptMy0xOUM4LjE0IDIgNSA1LjE0IDUgOWMwIDIuMzggMS4xOSA0LjQ3IDMgNS43NFYxN2MwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMXYtMi4yNmMxLjgxLTEuMjcgMy0zLjM2IDMtNS43NCAwLTMuODYtMy4xNC03LTctN3ptMi44NSAxMS4xbC0uODUuNlYxNmgtNHYtMi4zbC0uODUtLjZDNy44IDEyLjE2IDcgMTAuNjMgNyA5YzAtMi43NiAyLjI0LTUgNS01czUgMi4yNCA1IDVjMCAxLjYzLS44IDMuMTYtMi4xNSA0LjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5lLXN0eWxlPjxwYXRoIGQ9XFxcIk0zIDE2aDV2LTJIM3Yyem02LjUgMGg1di0yaC01djJ6bTYuNSAwaDV2LTJoLTV2MnpNMyAyMGgydi0ySDN2MnptNCAwaDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyek0zIDEyaDh2LTJIM3Yyem0xMCAwaDh2LTJoLTh2MnpNMyA0djRoMThWNEgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGluZS13ZWlnaHQ+PHBhdGggZD1cXFwiTTMgMTdoMTh2LTJIM3Yyem0wIDNoMTh2LTFIM3Yxem0wLTdoMTh2LTNIM3Yzem0wLTl2NGgxOFY0SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5rPjxwYXRoIGQ9XFxcIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpc3Q+PHBhdGggZD1cXFwiTTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMC04aDJWN0gzdjJ6bTQgNGgxNHYtMkg3djJ6bTAgNGgxNHYtMkg3djJ6TTcgN3YyaDE0VjdIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2s+PHBhdGggZD1cXFwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptLTYgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTMuMS05SDguOVY2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NrLW9wZW4+PHBhdGggZD1cXFwiTTEyIDE3YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNi05aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNmgxLjljMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0wIDEySDZWMTBoMTJ2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NrLW91dGxpbmU+PHBhdGggZD1cXFwiTTEyIDE3YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNi05aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6TTguOSA2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xczMuMSAxLjM5IDMuMSAzLjF2Mkg4LjlWNnpNMTggMjBINlYxMGgxMnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvdy1wcmlvcml0eT48cGF0aCBkPVxcXCJNMTQgNWg4djJoLTh6bTAgNS41aDh2MmgtOHptMCA1LjVoOHYyaC04ek0yIDExLjVDMiAxNS4wOCA0LjkyIDE4IDguNSAxOEg5djJsMy0zLTMtM3YyaC0uNUM2LjAyIDE2IDQgMTMuOTggNCAxMS41UzYuMDIgNyA4LjUgN0gxMlY1SDguNUM0LjkyIDUgMiA3LjkyIDIgMTEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxveWFsdHk+PHBhdGggZD1cXFwiTTIxLjQxIDExLjU4bC05LTlDMTIuMDUgMi4yMiAxMS41NSAyIDExIDJINGMtMS4xIDAtMiAuOS0yIDJ2N2MwIC41NS4yMiAxLjA1LjU5IDEuNDJsOSA5Yy4zNi4zNi44Ni41OCAxLjQxLjU4LjU1IDAgMS4wNS0uMjIgMS40MS0uNTlsNy03Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0uNTUtLjIzLTEuMDYtLjU5LTEuNDJ6TTUuNSA3QzQuNjcgNyA0IDYuMzMgNCA1LjVTNC42NyA0IDUuNSA0IDcgNC42NyA3IDUuNSA2LjMzIDcgNS41IDd6bTExLjc3IDguMjdMMTMgMTkuNTRsLTQuMjctNC4yN0M4LjI4IDE0LjgxIDggMTQuMTkgOCAxMy41YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41LjY5IDAgMS4zMi4yOCAxLjc3Ljc0bC43My43Mi43My0uNzNjLjQ1LS40NSAxLjA4LS43MyAxLjc3LS43MyAxLjM4IDAgMi41IDEuMTIgMi41IDIuNSAwIC42OS0uMjggMS4zMi0uNzMgMS43N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1haWw+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWFya3VucmVhZD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXJrdW5yZWFkLW1haWxib3g+PHBhdGggZD1cXFwiTTIwIDZIMTB2Nkg4VjRoNlYwSDZ2Nkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tZW51PjxwYXRoIGQ9XFxcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW9yZS1ob3Jpej48cGF0aCBkPVxcXCJNNiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTEyIDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0tNiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vcmUtdmVydD48cGF0aCBkPVxcXCJNMTIgOGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3RvcmN5Y2xlPjxwYXRoIGQ9XFxcIk0xOS40NCA5LjAzTDE1LjQxIDVIMTF2MmgzLjU5bDIgMkg1Yy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1YzIuNDYgMCA0LjQ1LTEuNjkgNC45LTRoMS42NWwyLjc3LTIuNzdjLS4yMS41NC0uMzIgMS4xNC0uMzIgMS43NyAwIDIuOCAyLjIgNSA1IDVzNS0yLjIgNS01YzAtMi42NS0xLjk3LTQuNzctNC41Ni00Ljk3ek03LjgyIDE1QzcuNCAxNi4xNSA2LjI4IDE3IDUgMTdjLTEuNjMgMC0zLTEuMzctMy0zczEuMzctMyAzLTNjMS4yOCAwIDIuNC44NSAyLjgyIDJINXYyaDIuODJ6TTE5IDE3Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vdmUtdG8taW5ib3g+PHBhdGggZD1cXFwiTTE5IDNINC45OWMtMS4xMSAwLTEuOTguOS0xLjk4IDJMMyAxOWMwIDEuMS44OCAyIDEuOTkgMkgxOWMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHptLTMtNWgtMlY3aC00djNIOGw0IDQgNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bmV4dC13ZWVrPjxwYXRoIGQ9XFxcIk0yMCA3aC00VjVjMC0uNTUtLjIyLTEuMDUtLjU5LTEuNDFDMTUuMDUgMy4yMiAxNC41NSAzIDE0IDNoLTRjLTEuMSAwLTIgLjktMiAydjJINGMtMS4xIDAtMiAuOS0yIDJ2MTFjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY5YzAtMS4xLS45LTItMi0yek0xMCA1aDR2MmgtNFY1em0xIDEzLjVsLTEtMSAzLTMtMy0zIDEtMSA0IDQtNCA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bm90ZS1hZGQ+PHBhdGggZD1cXFwiTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4YzEuMSAwIDItLjkgMi0yVjhsLTYtNnptMiAxNGgtM3YzaC0ydi0zSDh2LTJoM3YtM2gydjNoM3Yyem0tMy03VjMuNUwxOC41IDlIMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vZmZsaW5lLXBpbj48cGF0aCBkPVxcXCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6bTUgMTZIN3YtMmgxMHYyem0tNi43LTRMNyAxMC43bDEuNC0xLjQgMS45IDEuOSA1LjMtNS4zTDE3IDcuMyAxMC4zIDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3BhY2l0eT48cGF0aCBkPVxcXCJNMTcuNjYgOEwxMiAyLjM1IDYuMzQgOEM0Ljc4IDkuNTYgNCAxMS42NCA0IDEzLjY0cy43OCA0LjExIDIuMzQgNS42NyAzLjYxIDIuMzUgNS42NiAyLjM1IDQuMS0uNzkgNS42Ni0yLjM1UzIwIDE1LjY0IDIwIDEzLjY0IDE5LjIyIDkuNTYgMTcuNjYgOHpNNiAxNGMuMDEtMiAuNjItMy4yNyAxLjc2LTQuNEwxMiA1LjI3bDQuMjQgNC4zOEMxNy4zOCAxMC43NyAxNy45OSAxMiAxOCAxNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3Blbi1pbi1icm93c2VyPjxwYXRoIGQ9XFxcIk0xOSA0SDVjLTEuMTEgMC0yIC45LTIgMnYxMmMwIDEuMS44OSAyIDIgMmg0di0ySDVWOGgxNHYxMGgtNHYyaDRjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uODktMi0yLTJ6bS03IDZsLTQgNGgzdjZoMnYtNmgzbC00LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLWluLW5ldz48cGF0aCBkPVxcXCJNMTkgMTlINVY1aDdWM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJ2N3pNMTQgM3YyaDMuNTlsLTkuODMgOS44MyAxLjQxIDEuNDFMMTkgNi40MVYxMGgyVjNoLTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLXdpdGg+PHBhdGggZD1cXFwiTTEwIDloNFY2aDNsLTUtNS01IDVoM3Yzem0tMSAxSDZWN2wtNSA1IDUgNXYtM2gzdi00em0xNCAybC01LTV2M2gtM3Y0aDN2M2w1LTV6bS05IDNoLTR2M0g3bDUgNSA1LTVoLTN2LTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wYWdldmlldz48cGF0aCBkPVxcXCJNMTEuNSA5QzEwLjEyIDkgOSAxMC4xMiA5IDExLjVzMS4xMiAyLjUgMi41IDIuNSAyLjUtMS4xMiAyLjUtMi41UzEyLjg4IDkgMTEuNSA5ek0yMCA0SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptLTMuMjEgMTQuMjFsLTIuOTEtMi45MWMtLjY5LjQ0LTEuNTEuNy0yLjM5LjdDOS4wMSAxNiA3IDEzLjk5IDcgMTEuNVM5LjAxIDcgMTEuNSA3IDE2IDkuMDEgMTYgMTEuNWMwIC44OC0uMjYgMS42OS0uNyAyLjM5bDIuOTEgMi45LTEuNDIgMS40MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBhbi10b29sPjxwYXRoIGQ9XFxcIk0yMyA1LjVWMjBjMCAyLjItMS44IDQtNCA0aC03LjNjLTEuMDggMC0yLjEtLjQzLTIuODUtMS4xOUwxIDE0LjgzczEuMjYtMS4yMyAxLjMtMS4yNWMuMjItLjE5LjQ5LS4yOS43OS0uMjkuMjIgMCAuNDIuMDYuNi4xNi4wNC4wMSA0LjMxIDIuNDYgNC4zMSAyLjQ2VjRjMC0uODMuNjctMS41IDEuNS0xLjVTMTEgMy4xNyAxMSA0djdoMVYxLjVjMC0uODMuNjctMS41IDEuNS0xLjVTMTUgLjY3IDE1IDEuNVYxMWgxVjIuNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNVYxMWgxVjUuNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBheW1lbnQ+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tY2FtZXJhLW1pYz48cGF0aCBkPVxcXCJNMjAgNWgtMy4xN0wxNSAzSDlMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YtMi4wOWMtMi44My0uNDgtNS0yLjk0LTUtNS45MWgyYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTRoMmMwIDIuOTctMi4xNyA1LjQzLTUgNS45MVYyMWg3YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bS02IDhjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yVjljMC0xLjEuOS0yIDItMnMyIC45IDIgMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1jb250YWN0LWNhbGVuZGFyPjxwYXRoIGQ9XFxcIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptNiAxMkg2di0xYzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1kYXRhLXNldHRpbmc+PHBhdGggZD1cXFwiTTE4Ljk5IDExLjVjLjM0IDAgLjY3LjAzIDEgLjA3TDIwIDAgMCAyMGgxMS41NmMtLjA0LS4zMy0uMDctLjY2LS4wNy0xIDAtNC4xNCAzLjM2LTcuNSA3LjUtNy41em0zLjcxIDcuOTljLjAyLS4xNi4wNC0uMzIuMDQtLjQ5IDAtLjE3LS4wMS0uMzMtLjA0LS40OWwxLjA2LS44M2MuMDktLjA4LjEyLS4yMS4wNi0uMzJsLTEtMS43M2MtLjA2LS4xMS0uMTktLjE1LS4zMS0uMTFsLTEuMjQuNWMtLjI2LS4yLS41NC0uMzctLjg1LS40OWwtLjE5LTEuMzJjLS4wMS0uMTItLjEyLS4yMS0uMjQtLjIxaC0yYy0uMTIgMC0uMjMuMDktLjI1LjIxbC0uMTkgMS4zMmMtLjMuMTMtLjU5LjI5LS44NS40OWwtMS4yNC0uNWMtLjExLS4wNC0uMjQgMC0uMzEuMTFsLTEgMS43M2MtLjA2LjExLS4wNC4yNC4wNi4zMmwxLjA2LjgzYy0uMDIuMTYtLjAzLjMyLS4wMy40OSAwIC4xNy4wMS4zMy4wMy40OWwtMS4wNi44M2MtLjA5LjA4LS4xMi4yMS0uMDYuMzJsMSAxLjczYy4wNi4xMS4xOS4xNS4zMS4xMWwxLjI0LS41Yy4yNi4yLjU0LjM3Ljg1LjQ5bC4xOSAxLjMyYy4wMi4xMi4xMi4yMS4yNS4yMWgyYy4xMiAwIC4yMy0uMDkuMjUtLjIxbC4xOS0xLjMyYy4zLS4xMy41OS0uMjkuODQtLjQ5bDEuMjUuNWMuMTEuMDQuMjQgMCAuMzEtLjExbDEtMS43M2MuMDYtLjExLjAzLS4yNC0uMDYtLjMybC0xLjA3LS44M3ptLTMuNzEgMS4wMWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWRldmljZS1pbmZvcm1hdGlvbj48cGF0aCBkPVxcXCJNMTMgN2gtMnYyaDJWN3ptMCA0aC0ydjZoMnYtNnptNC05Ljk5TDcgMWMtMS4xIDAtMiAuOS0yIDJ2MThjMCAxLjEuOSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlYzYzAtMS4xLS45LTEuOTktMi0xLjk5ek0xNyAxOUg3VjVoMTB2MTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWlkZW50aXR5PjxwYXRoIGQ9XFxcIk0xMiA1LjljMS4xNiAwIDIuMS45NCAyLjEgMi4xcy0uOTQgMi4xLTIuMSAyLjFTOS45IDkuMTYgOS45IDhzLjk0LTIuMSAyLjEtMi4xbTAgOWMyLjk3IDAgNi4xIDEuNDYgNi4xIDIuMXYxLjFINS45VjE3YzAtLjY0IDMuMTMtMi4xIDYuMS0yLjFNMTIgNEM5Ljc5IDQgOCA1Ljc5IDggOHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCA5Yy0yLjY3IDAtOCAxLjM0LTggNHYzaDE2di0zYzAtMi42Ni01LjMzLTQtOC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1tZWRpYT48cGF0aCBkPVxcXCJNMiA2SDB2NWguMDFMMCAyMGMwIDEuMS45IDIgMiAyaDE4di0ySDJWNnptMjAtMmgtOGwtMi0ySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6TTcgMTVsNC41LTYgMy41IDQuNTEgMi41LTMuMDFMMjEgMTVIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tcGhvbmUtbXNnPjxwYXRoIGQ9XFxcIk0yMCAxNS41Yy0xLjI1IDAtMi40NS0uMi0zLjU3LS41Ny0uMzUtLjExLS43NC0uMDMtMS4wMi4yNGwtMi4yIDIuMmMtMi44My0xLjQ0LTUuMTUtMy43NS02LjU5LTYuNThsMi4yLTIuMjFjLjI4LS4yNy4zNi0uNjYuMjUtMS4wMUM4LjcgNi40NSA4LjUgNS4yNSA4LjUgNGMwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIDAgOS4zOSA3LjYxIDE3IDE3IDE3IC41NSAwIDEtLjQ1IDEtMXYtMy41YzAtLjU1LS40NS0xLTEtMXpNMTIgM3YxMGwzLTNoNlYzaC05elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1zY2FuLXdpZmk+PHBhdGggZD1cXFwiTTEyIDNDNi45NSAzIDMuMTUgNC44NSAwIDcuMjNMMTIgMjIgMjQgNy4yNUMyMC44NSA0Ljg3IDE3LjA1IDMgMTIgM3ptMSAxM2gtMnYtNmgydjZ6bS0yLThWNmgydjJoLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXRzPjxjaXJjbGUgY3g9NC41IGN5PTkuNSByPTIuNT48L2NpcmNsZT48Y2lyY2xlIGN4PTkgY3k9NS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9MTUgY3k9NS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9MTkuNSBjeT05LjUgcj0yLjU+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE3LjM0IDE0Ljg2Yy0uODctMS4wMi0xLjYtMS44OS0yLjQ4LTIuOTEtLjQ2LS41NC0xLjA1LTEuMDgtMS43NS0xLjMyLS4xMS0uMDQtLjIyLS4wNy0uMzMtLjA5LS4yNS0uMDQtLjUyLS4wNC0uNzgtLjA0cy0uNTMgMC0uNzkuMDVjLS4xMS4wMi0uMjIuMDUtLjMzLjA5LS43LjI0LTEuMjguNzgtMS43NSAxLjMyLS44NyAxLjAyLTEuNiAxLjg5LTIuNDggMi45MS0xLjMxIDEuMzEtMi45MiAyLjc2LTIuNjIgNC43OS4yOSAxLjAyIDEuMDIgMi4wMyAyLjMzIDIuMzIuNzMuMTUgMy4wNi0uNDQgNS41NC0uNDRoLjE4YzIuNDggMCA0LjgxLjU4IDUuNTQuNDQgMS4zMS0uMjkgMi4wNC0xLjMxIDIuMzMtMi4zMi4zMS0yLjA0LTEuMy0zLjQ5LTIuNjEtNC44elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGljdHVyZS1pbi1waWN0dXJlPjxwYXRoIGQ9XFxcIk0xOSA3aC04djZoOFY3em0yLTRIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOThWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOThoMTh2MTQuMDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waWN0dXJlLWluLXBpY3R1cmUtYWx0PjxwYXRoIGQ9XFxcIk0xOSAxMWgtOHY2aDh2LTZ6bTQgOFY0Ljk4QzIzIDMuODggMjIuMSAzIDIxIDNIM2MtMS4xIDAtMiAuODgtMiAxLjk4VjE5YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ6bS0yIC4wMkgzVjQuOTdoMTh2MTQuMDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wbGF5LWZvci13b3JrPjxwYXRoIGQ9XFxcIk0xMSA1djUuNTlINy41bDQuNSA0LjUgNC41LTQuNUgxM1Y1aC0yem0tNSA5YzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZoLTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTRINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBvbHltZXI+PHBhdGggZD1cXFwiTTE5IDRoLTRMNy4xMSAxNi42MyA0LjUgMTIgOSA0SDVMLjUgMTIgNSAyMGg0bDcuODktMTIuNjNMMTkuNSAxMiAxNSAyMGg0bDQuNS04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cG93ZXItc2V0dGluZ3MtbmV3PjxwYXRoIGQ9XFxcIk0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJDMTcuOTkgNy44NiAxOSA5LjgxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3cy03LTMuMTMtNy03YzAtMi4xOSAxLjAxLTQuMTQgMi41OC01LjQyTDYuMTcgNS4xN0M0LjIzIDYuODIgMyA5LjI2IDMgMTJjMCA0Ljk3IDQuMDMgOSA5IDlzOS00LjAzIDktOWMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXByZWduYW50LXdvbWFuPjxwYXRoIGQ9XFxcIk05IDRjMC0xLjExLjg5LTIgMi0yczIgLjg5IDIgMi0uODkgMi0yIDItMi0uODktMi0yem03IDljLS4wMS0xLjM0LS44My0yLjUxLTItMyAwLTEuNjYtMS4zNC0zLTMtM3MtMyAxLjM0LTMgM3Y3aDJ2NWgzdi01aDN2LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wcmludD48cGF0aCBkPVxcXCJNMTkgOEg1Yy0xLjY2IDAtMyAxLjM0LTMgM3Y2aDR2NGgxMnYtNGg0di02YzAtMS42Ni0xLjM0LTMtMy0zem0tMyAxMUg4di01aDh2NXptMy03Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6bS0xLTlINnY0aDEyVjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1xdWVyeS1idWlsZGVyPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6bS41LTEzSDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1xdWVzdGlvbi1hbnN3ZXI+PHBhdGggZD1cXFwiTTIxIDZoLTJ2OUg2djJjMCAuNTUuNDUgMSAxIDFoMTFsNCA0VjdjMC0uNTUtLjQ1LTEtMS0xem0tNCA2VjNjMC0uNTUtLjQ1LTEtMS0xSDNjLS41NSAwLTEgLjQ1LTEgMXYxNGw0LTRoMTBjLjU1IDAgMS0uNDUgMS0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmFkaW8tYnV0dG9uLWNoZWNrZWQ+PHBhdGggZD1cXFwiTTEyIDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDUgNS0yLjI0IDUtNS0yLjI0LTUtNS01em0wLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmFkaW8tYnV0dG9uLXVuY2hlY2tlZD48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWNlaXB0PjxwYXRoIGQ9XFxcIk0xOCAxN0g2di0yaDEydjJ6bTAtNEg2di0yaDEydjJ6bTAtNEg2VjdoMTJ2MnpNMyAyMmwxLjUtMS41TDYgMjJsMS41LTEuNUw5IDIybDEuNS0xLjVMMTIgMjJsMS41LTEuNUwxNSAyMmwxLjUtMS41TDE4IDIybDEuNS0xLjVMMjEgMjJWMmwtMS41IDEuNUwxOCAybC0xLjUgMS41TDE1IDJsLTEuNSAxLjVMMTIgMmwtMS41IDEuNUw5IDIgNy41IDMuNSA2IDIgNC41IDMuNSAzIDJ2MjB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWNvcmQtdm9pY2Utb3Zlcj48Y2lyY2xlIGN4PTkgY3k9OSByPTQ+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTkgMTVjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6bTcuNzYtOS42NGwtMS42OCAxLjY5Yy44NCAxLjE4Ljg0IDIuNzEgMCAzLjg5bDEuNjggMS42OWMyLjAyLTIuMDIgMi4wMi01LjA3IDAtNy4yN3pNMjAuMDcgMmwtMS42MyAxLjYzYzIuNzcgMy4wMiAyLjc3IDcuNTYgMCAxMC43NEwyMC4wNyAxNmMzLjktMy44OSAzLjkxLTkuOTUgMC0xNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZGVlbT48cGF0aCBkPVxcXCJNMjAgNmgtMi4xOGMuMTEtLjMxLjE4LS42NS4xOC0xIDAtMS42Ni0xLjM0LTMtMy0zLTEuMDUgMC0xLjk2LjU0LTIuNSAxLjM1bC0uNS42Ny0uNS0uNjhDMTAuOTYgMi41NCAxMC4wNSAyIDkgMiA3LjM0IDIgNiAzLjM0IDYgNWMwIC4zNS4wNy42OS4xOCAxSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTUtMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek05IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDUuMDhMNyAxMC44MyA4LjYyIDEyIDExIDguNzZsMS0xLjM2IDEgMS4zNkwxNS4zOCAxMiAxNyAxMC44MyAxNC45MiA4SDIwdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWRvPjxwYXRoIGQ9XFxcIk0xOC40IDEwLjZDMTYuNTUgOC45OSAxNC4xNSA4IDExLjUgOGMtNC42NSAwLTguNTggMy4wMy05Ljk2IDcuMjJMMy45IDE2YzEuMDUtMy4xOSA0LjA1LTUuNSA3LjYtNS41IDEuOTUgMCAzLjczLjcyIDUuMTIgMS44OEwxMyAxNmg5VjdsLTMuNiAzLjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWZyZXNoPjxwYXRoIGQ9XFxcIk0xNy42NSA2LjM1QzE2LjIgNC45IDE0LjIxIDQgMTIgNGMtNC40MiAwLTcuOTkgMy41OC03Ljk5IDhzMy41NyA4IDcuOTkgOGMzLjczIDAgNi44NC0yLjU1IDcuNzMtNmgtMi4wOGMtLjgyIDIuMzMtMy4wNCA0LTUuNjUgNC0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02YzEuNjYgMCAzLjE0LjY5IDQuMjIgMS43OEwxMyAxMWg3VjRsLTIuMzUgMi4zNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZT48cGF0aCBkPVxcXCJNMTkgMTNINXYtMmgxNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNSAxMUg3di0yaDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtY2lyY2xlLW91dGxpbmU+PHBhdGggZD1cXFwiTTcgMTF2MmgxMHYtMkg3em01LTlDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlLXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTIyLjczIDIyLjczTDIuNzcgMi43NyAyIDJsLS43My0uNzNMMCAyLjU0bDQuMzkgNC4zOSAyLjIxIDQuNjYtMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDcuNDZsMS4zOCAxLjM4Yy0uNS4zNi0uODMuOTUtLjgzIDEuNjIgMCAxLjEuODkgMiAxLjk5IDIgLjY3IDAgMS4yNi0uMzMgMS42Mi0uODRMMjEuNDYgMjRsMS4yNy0xLjI3ek03LjQyIDE1Yy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoMi4zNmwyIDJINy40MnptOC4xMy0yYy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg2LjU0bDkuMDEgOXpNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlb3JkZXI+PHBhdGggZD1cXFwiTTMgMTVoMTh2LTJIM3Yyem0wIDRoMTh2LTJIM3Yyem0wLThoMThWOUgzdjJ6bTAtNnYyaDE4VjVIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcGx5PjxwYXRoIGQ9XFxcIk0xMCA5VjVsLTcgNyA3IDd2LTQuMWM1IDAgOC41IDEuNiAxMSA1LjEtMS01LTQtMTAtMTEtMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBseS1hbGw+PHBhdGggZD1cXFwiTTcgOFY1bC03IDcgNyA3di0zbC00LTQgNC00em02IDFWNWwtNyA3IDcgN3YtNC4xYzUgMCA4LjUgMS42IDExIDUuMS0xLTUtNC0xMC0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcG9ydD48cGF0aCBkPVxcXCJNMTUuNzMgM0g4LjI3TDMgOC4yN3Y3LjQ2TDguMjcgMjFoNy40NkwyMSAxNS43M1Y4LjI3TDE1LjczIDN6TTEyIDE3LjNjLS43MiAwLTEuMy0uNTgtMS4zLTEuMyAwLS43Mi41OC0xLjMgMS4zLTEuMy43MiAwIDEuMy41OCAxLjMgMS4zIDAgLjcyLS41OCAxLjMtMS4zIDEuM3ptMS00LjNoLTJWN2gydjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBvcnQtcHJvYmxlbT48cGF0aCBkPVxcXCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVzdG9yZT48cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVzdG9yZS1wYWdlPjxwYXRoIGQ9XFxcIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bS0yIDE2Yy0yLjA1IDAtMy44MS0xLjI0LTQuNTgtM2gxLjcxYy42My45IDEuNjggMS41IDIuODcgMS41IDEuOTMgMCAzLjUtMS41NyAzLjUtMy41UzEzLjkzIDkuNSAxMiA5LjVjLTEuMzUgMC0yLjUyLjc4LTMuMSAxLjlsMS42IDEuNmgtNFY5bDEuMyAxLjNDOC42OSA4LjkyIDEwLjIzIDggMTIgOGMyLjc2IDAgNSAyLjI0IDUgNXMtMi4yNCA1LTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJvb20+PHBhdGggZD1cXFwiTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm91bmRlZC1jb3JuZXI+PHBhdGggZD1cXFwiTTE5IDE5aDJ2MmgtMnYtMnptMC0yaDJ2LTJoLTJ2MnpNMyAxM2gydi0ySDN2MnptMCA0aDJ2LTJIM3Yyem0wLThoMlY3SDN2MnptMC00aDJWM0gzdjJ6bTQgMGgyVjNIN3Yyem04IDE2aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6bS04IDBoMnYtMkg3djJ6bS00IDBoMnYtMkgzdjJ6TTIxIDhjMC0yLjc2LTIuMjQtNS01LTVoLTV2Mmg1YzEuNjUgMCAzIDEuMzUgMyAzdjVoMlY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm93aW5nPjxwYXRoIGQ9XFxcIk04LjUgMTQuNUw0IDE5bDEuNSAxLjVMOSAxN2gybC0yLjUtMi41ek0xNSAxYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNiAyMC4wMUwxOCAyNGwtMi45OS0zLjAxVjE5LjVsLTcuMS03LjA5Yy0uMzEuMDUtLjYxLjA3LS45MS4wN3YtMi4xNmMxLjY2LjAzIDMuNjEtLjg3IDQuNjctMi4wNGwxLjQtMS41NWMuMTktLjIxLjQzLS4zOC42OS0uNS4yOS0uMTQuNjItLjIzLjk2LS4yM2guMDNDMTUuOTkgNi4wMSAxNyA3LjAyIDE3IDguMjZ2NS43NWMwIC44NC0uMzUgMS42MS0uOTIgMi4xNmwtMy41OC0zLjU4di0yLjI3Yy0uNjMuNTItMS40MyAxLjAyLTIuMjkgMS4zOUwxNi41IDE4SDE4bDMgMy4wMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNhdmU+PHBhdGggZD1cXFwiTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2NoZWR1bGU+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptLjUtMTNIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNlYXJjaD48cGF0aCBkPVxcXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNlbGVjdC1hbGw+PHBhdGggZD1cXFwiTTMgNWgyVjNjLTEuMSAwLTIgLjktMiAyem0wIDhoMnYtMkgzdjJ6bTQgOGgydi0ySDd2MnpNMyA5aDJWN0gzdjJ6bTEwLTZoLTJ2MmgyVjN6bTYgMHYyaDJjMC0xLjEtLjktMi0yLTJ6TTUgMjF2LTJIM2MwIDEuMS45IDIgMiAyem0tMi00aDJ2LTJIM3Yyek05IDNIN3YyaDJWM3ptMiAxOGgydi0yaC0ydjJ6bTgtOGgydi0yaC0ydjJ6bTAgOGMxLjEgMCAyLS45IDItMmgtMnYyem0wLTEyaDJWN2gtMnYyem0wIDhoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptMC0xNmgyVjNoLTJ2MnpNNyAxN2gxMFY3SDd2MTB6bTItOGg2djZIOVY5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VuZD48cGF0aCBkPVxcXCJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncz48cGF0aCBkPVxcXCJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVDMTQuNDYgMi4xOCAxNC4yNSAyIDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWFwcGxpY2F0aW9ucz48cGF0aCBkPVxcXCJNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmMtLjA5LS4xNS0uMDUtLjM0LjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmMtLjEzLS4xMS0uMTctLjMtLjA4LS40NWwxLjQtMi40MmMuMDktLjE1LjI3LS4yMS40My0uMTVsMS43NC43Yy4zNi0uMjguNzYtLjUxIDEuMTgtLjY5bC4yNi0xLjg1Yy4wMy0uMTcuMTgtLjMuMzUtLjNoMi44Yy4xNyAwIC4zMi4xMy4zNS4yOWwuMjYgMS44NWMuNDMuMTguODIuNDEgMS4xOC42OWwxLjc0LS43Yy4xNi0uMDYuMzQgMCAuNDMuMTVsMS40IDIuNDJjLjA5LjE1LjA1LjM0LS4wOC40NWwtMS40OCAxLjE2Yy4wMy4yMy4wNS40Ni4wNS42OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJhY2t1cC1yZXN0b3JlPjxwYXRoIGQ9XFxcIk0xNCAxMmMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6bS0yLTljLTQuOTcgMC05IDQuMDMtOSA5SDBsNCA0IDQtNEg1YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS41MSAwLTIuOTEtLjQ5LTQuMDYtMS4zbC0xLjQyIDEuNDRDOC4wNCAyMC4zIDkuOTQgMjEgMTIgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1ibHVldG9vdGg+PHBhdGggZD1cXFwiTTExIDI0aDJ2LTJoLTJ2MnptLTQgMGgydi0ySDd2MnptOCAwaDJ2LTJoLTJ2MnptMi43MS0xOC4yOUwxMiAwaC0xdjcuNTlMNi40MSAzIDUgNC40MSAxMC41OSAxMCA1IDE1LjU5IDYuNDEgMTcgMTEgMTIuNDFWMjBoMWw1LjcxLTUuNzEtNC4zLTQuMjkgNC4zLTQuMjl6TTEzIDMuODNsMS44OCAxLjg4TDEzIDcuNTlWMy44M3ptMS44OCAxMC40NkwxMyAxNi4xN3YtMy43NmwxLjg4IDEuODh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1icmlnaHRuZXNzPjxwYXRoIGQ9XFxcIk0yMSAzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6TTggMTZoMi41bDEuNSAxLjUgMS41LTEuNUgxNnYtMi41bDEuNS0xLjUtMS41LTEuNVY4aC0yLjVMMTIgNi41IDEwLjUgOEg4djIuNUw2LjUgMTIgOCAxMy41VjE2em00LTdjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDNWOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWNlbGw+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6TTE2IC4wMUw4IDBDNi45IDAgNiAuOSA2IDJ2MTZjMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjJjMC0xLjEtLjktMS45OS0yLTEuOTl6TTE2IDE2SDhWNGg4djEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtZXRoZXJuZXQ+PHBhdGggZD1cXFwiTTcuNzcgNi43Nkw2LjIzIDUuNDguODIgMTJsNS40MSA2LjUyIDEuNTQtMS4yOEwzLjQyIDEybDQuMzUtNS4yNHpNNyAxM2gydi0ySDd2MnptMTAtMmgtMnYyaDJ2LTJ6bS02IDJoMnYtMmgtMnYyem02Ljc3LTcuNTJsLTEuNTQgMS4yOEwyMC41OCAxMmwtNC4zNSA1LjI0IDEuNTQgMS4yOEwyMy4xOCAxMmwtNS40MS02LjUyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtYW50ZW5uYT48cGF0aCBkPVxcXCJNMTIgNWMtMy44NyAwLTcgMy4xMy03IDdoMmMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1aDJjMC0zLjg3LTMuMTMtNy03LTd6bTEgOS4yOWMuODgtLjM5IDEuNS0xLjI2IDEuNS0yLjI5IDAtMS4zOC0xLjEyLTIuNS0yLjUtMi41UzkuNSAxMC42MiA5LjUgMTJjMCAxLjAyLjYyIDEuOSAxLjUgMi4yOXYzLjNMNy41OSAyMSA5IDIyLjQxbDMtMyAzIDNMMTYuNDEgMjEgMTMgMTcuNTl2LTMuM3pNMTIgMUM1LjkzIDEgMSA1LjkzIDEgMTJoMmMwLTQuOTcgNC4wMy05IDktOXM5IDQuMDMgOSA5aDJjMC02LjA3LTQuOTMtMTEtMTEtMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1jb21wb25lbnQ+PHBhdGggZD1cXFwiTTUgMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDF2Nmg2VjZINVYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0ySDl2MnptLTggMGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThDNi4xNiAxOC40IDcgMTcuMyA3IDE2di0ySDF2MnpNMjEgNlYyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRoLTJ2Nmg2VjZoLTJ6bS04LTRjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEg5djZoNlY2aC0yVjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJoLTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWNvbXBvc2l0ZT48cGF0aCBkPVxcXCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtaGRtaT48cGF0aCBkPVxcXCJNMTggN1Y0YzAtMS4xLS45LTItMi0ySDhjLTEuMSAwLTIgLjktMiAydjNINXY2bDMgNnYzaDh2LTNsMy02VjdoLTF6TTggNGg4djNoLTJWNWgtMXYyaC0yVjVoLTF2Mkg4VjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1zdmlkZW8+PHBhdGggZD1cXFwiTTggMTEuNWMwLS44My0uNjctMS41LTEuNS0xLjVTNSAxMC42NyA1IDExLjUgNS42NyAxMyA2LjUgMTMgOCAxMi4zMyA4IDExLjV6bTctNWMwLS44My0uNjctMS41LTEuNS0xLjVoLTNDOS42NyA1IDkgNS42NyA5IDYuNVM5LjY3IDggMTAuNSA4aDNjLjgzIDAgMS41LS42NyAxLjUtMS41ek04LjUgMTVjLS44MyAwLTEuNS42Ny0xLjUgMS41UzcuNjcgMTggOC41IDE4czEuNS0uNjcgMS41LTEuNVM5LjMzIDE1IDguNSAxNXpNMTIgMUM1LjkzIDEgMSA1LjkzIDEgMTJzNC45MyAxMSAxMSAxMSAxMS00LjkzIDExLTExUzE4LjA3IDEgMTIgMXptMCAyMGMtNC45NiAwLTktNC4wNC05LTlzNC4wNC05IDktOSA5IDQuMDQgOSA5LTQuMDQgOS05IDl6bTUuNS0xMWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6bS0yIDVjLS44MyAwLTEuNS42Ny0xLjUgMS41cy42NyAxLjUgMS41IDEuNSAxLjUtLjY3IDEuNS0xLjUtLjY3LTEuNS0xLjUtMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3Mtb3ZlcnNjYW4+PHBhdGggZD1cXFwiTTEyLjAxIDUuNUwxMCA4aDRsLTEuOTktMi41ek0xOCAxMHY0bDIuNS0xLjk5TDE4IDEwek02IDEwbC0yLjUgMi4wMUw2IDE0di00em04IDZoLTRsMi4wMSAyLjVMMTQgMTZ6bTctMTNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXBob25lPjxwYXRoIGQ9XFxcIk0xMyA5aC0ydjJoMlY5em00IDBoLTJ2MmgyVjl6bTMgNi41Yy0xLjI1IDAtMi40NS0uMi0zLjU3LS41Ny0uMzUtLjExLS43NC0uMDMtMS4wMi4yNGwtMi4yIDIuMmMtMi44My0xLjQ0LTUuMTUtMy43NS02LjU5LTYuNThsMi4yLTIuMjFjLjI4LS4yNy4zNi0uNjYuMjUtMS4wMUM4LjcgNi40NSA4LjUgNS4yNSA4LjUgNGMwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIDAgOS4zOSA3LjYxIDE3IDE3IDE3IC41NSAwIDEtLjQ1IDEtMXYtMy41YzAtLjU1LS40NS0xLTEtMXpNMTkgOXYyaDJWOWgtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXBvd2VyPjxwYXRoIGQ9XFxcIk03IDI0aDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem0yLTIyaC0ydjEwaDJWMnptMy41NiAyLjQ0bC0xLjQ1IDEuNDVDMTYuODQgNi45NCAxOCA4LjgzIDE4IDExYzAgMy4zMS0yLjY5IDYtNiA2cy02LTIuNjktNi02YzAtMi4xNyAxLjE2LTQuMDYgMi44OC01LjEyTDcuNDQgNC40NEM1LjM2IDUuODggNCA4LjI4IDQgMTFjMCA0LjQyIDMuNTggOCA4IDhzOC0zLjU4IDgtOGMwLTIuNzItMS4zNi01LjEyLTMuNDQtNi41NnpNMTUgMjRoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcmVtb3RlPjxwYXRoIGQ9XFxcIk0xNSA5SDljLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMVYxMGMwLS41NS0uNDUtMS0xLTF6bS0zIDZjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyek03LjA1IDYuMDVsMS40MSAxLjQxQzkuMzcgNi41NiAxMC42MiA2IDEyIDZzMi42My41NiAzLjU0IDEuNDZsMS40MS0xLjQxQzE1LjY4IDQuNzggMTMuOTMgNCAxMiA0cy0zLjY4Ljc4LTQuOTUgMi4wNXpNMTIgMEM4Ljk2IDAgNi4yMSAxLjIzIDQuMjIgMy4yMmwxLjQxIDEuNDFDNy4yNiAzLjAxIDkuNTEgMiAxMiAyczQuNzQgMS4wMSA2LjM2IDIuNjRsMS40MS0xLjQxQzE3Ljc5IDEuMjMgMTUuMDQgMCAxMiAwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3Mtdm9pY2U+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTUtMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNGMwLTEuNjYtMS4zNC0zLTMtM1M5IDIuMzQgOSA0djZjMCAxLjY2IDEuMzQgMyAzIDN6bS0xIDExaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptNC0xNGgtMS43YzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxMyA2LjcgMTBINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMGgydi0zLjI4YzMuMjgtLjQ5IDYtMy4zMSA2LTYuNzJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wPjxwYXRoIGQ9XFxcIk0xNiA2VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDJ2MTNjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmgtNnptLTYtMmg0djJoLTRWNHpNOSAxOFY5bDcuNSA0TDkgMTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wLXR3bz48cGF0aCBkPVxcXCJNMyA5SDF2MTFjMCAxLjExLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS44OSAyLTJIM1Y5em0xNS00VjNjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDV2MTFjMCAxLjExLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS44OSAyLTJWNWgtNXptLTYtMmg0djJoLTRWM3ptMCAxMlY4bDUuNSAzLTUuNSA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2hvcHBpbmctYmFza2V0PjxwYXRoIGQ9XFxcIk0xNy4yMSA5bC00LjM4LTYuNTZjLS4xOS0uMjgtLjUxLS40Mi0uODMtLjQyLS4zMiAwLS42NC4xNC0uODMuNDNMNi43OSA5SDJjLS41NSAwLTEgLjQ1LTEgMSAwIC4wOS4wMS4xOC4wNC4yN2wyLjU0IDkuMjdjLjIzLjg0IDEgMS40NiAxLjkyIDEuNDZoMTNjLjkyIDAgMS42OS0uNjIgMS45My0xLjQ2bDIuNTQtOS4yN0wyMyAxMGMwLS41NS0uNDUtMS0xLTFoLTQuNzl6TTkgOWwzLTQuNEwxNSA5SDl6bTMgOGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wcGluZy1jYXJ0PjxwYXRoIGQ9XFxcIk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c29ydD48cGF0aCBkPVxcXCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3BlYWtlci1ub3Rlcz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTggMTRINnYtMmgydjJ6bTAtM0g2VjloMnYyem0wLTNINlY2aDJ2MnptNyA2aC01di0yaDV2MnptMy0zaC04VjloOHYyem0wLTNoLThWNmg4djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zcGVha2VyLW5vdGVzLW9mZj48cGF0aCBkPVxcXCJNMTAuNTQgMTFsLS41NC0uNTRMNy41NCA4IDYgNi40NiAyLjM4IDIuODQgMS4yNyAxLjczIDAgM2wyLjAxIDIuMDFMMiAyMmw0LTRoOWw1LjczIDUuNzNMMjIgMjIuNDYgMTcuNTQgMThsLTctN3pNOCAxNEg2di0yaDJ2MnptLTItM1Y5bDIgMkg2em0xNC05SDQuMDhMMTAgNy45MlY2aDh2MmgtNy45MmwxIDFIMTh2MmgtNC45Mmw2Ljk5IDYuOTlDMjEuMTQgMTcuOTUgMjIgMTcuMDggMjIgMTZWNGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNwZWxsY2hlY2s+PHBhdGggZD1cXFwiTTEyLjQ1IDE2aDIuMDlMOS40MyAzSDcuNTdMMi40NiAxNmgyLjA5bDEuMTItM2g1LjY0bDEuMTQgM3ptLTYuMDItNUw4LjUgNS40OCAxMC41NyAxMUg2LjQzem0xNS4xNi41OWwtOC4wOSA4LjA5TDkuODMgMTZsLTEuNDEgMS40MSA1LjA5IDUuMDlMMjMgMTNsLTEuNDEtMS40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXI+PHBhdGggZD1cXFwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3Rhci1ib3JkZXI+PHBhdGggZD1cXFwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFyLWhhbGY+PHBhdGggZD1cXFwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRWNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXJzPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem00LjI0IDE2TDEyIDE1LjQ1IDcuNzcgMThsMS4xMi00LjgxLTMuNzMtMy4yMyA0LjkyLS40MkwxMiA1bDEuOTIgNC41MyA0LjkyLjQyLTMuNzMgMy4yM0wxNi4yMyAxOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0b3JlPjxwYXRoIGQ9XFxcIk0yMCA0SDR2MmgxNlY0em0xIDEwdi0ybC0xLTVINGwtMSA1djJoMXY2aDEwdi02aDR2Nmgydi02aDF6bS05IDRINnYtNGg2djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJkaXJlY3RvcnktYXJyb3ctbGVmdD48cGF0aCBkPVxcXCJNMTEgOWwxLjQyIDEuNDJMOC44MyAxNEgxOFY0aDJ2MTJIOC44M2wzLjU5IDMuNThMMTEgMjFsLTYtNiA2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJkaXJlY3RvcnktYXJyb3ctcmlnaHQ+PHBhdGggZD1cXFwiTTE5IDE1bC02IDYtMS40Mi0xLjQyTDE1LjE3IDE2SDRWNGgydjEwaDkuMTdsLTMuNTktMy41OEwxMyA5bDYgNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmplY3Q+PHBhdGggZD1cXFwiTTE0IDE3SDR2MmgxMHYtMnptNi04SDR2MmgxNlY5ek00IDE1aDE2di0ySDR2MnpNNCA1djJoMTZWNUg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3VwZXJ2aXNvci1hY2NvdW50PjxwYXRoIGQ9XFxcIk0xNi41IDEyYzEuMzggMCAyLjQ5LTEuMTIgMi40OS0yLjVTMTcuODggNyAxNi41IDdDMTUuMTIgNyAxNCA4LjEyIDE0IDkuNXMxLjEyIDIuNSAyLjUgMi41ek05IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzEwLjY2IDUgOSA1QzcuMzQgNSA2IDYuMzQgNiA4czEuMzQgMyAzIDN6bTcuNSAzYy0xLjgzIDAtNS41LjkyLTUuNSAyLjc1VjE5aDExdi0yLjI1YzAtMS44My0zLjY3LTIuNzUtNS41LTIuNzV6TTkgMTNjLTIuMzMgMC03IDEuMTctNyAzLjVWMTloN3YtMi4yNWMwLS44NS4zMy0yLjM0IDIuMzctMy40N0MxMC41IDEzLjEgOS42NiAxMyA5IDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC1ob3Jpej48cGF0aCBkPVxcXCJNNi45OSAxMUwzIDE1bDMuOTkgNHYtM0gxNHYtMkg2Ljk5di0zek0yMSA5bC0zLjk5LTR2M0gxMHYyaDcuMDF2M0wyMSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC12ZXJ0PjxwYXRoIGQ9XFxcIk0xNiAxNy4wMVYxMGgtMnY3LjAxaC0zTDE1IDIxbDQtMy45OWgtM3pNOSAzTDUgNi45OWgzVjE0aDJWNi45OWgzTDkgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN3YXAtdmVydGljYWwtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek02LjUgOUwxMCA1LjUgMTMuNSA5SDExdjRIOVY5SDYuNXptMTEgNkwxNCAxOC41IDEwLjUgMTVIMTN2LTRoMnY0aDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN5c3RlbS11cGRhdGUtYWx0PjxwYXRoIGQ9XFxcIk0xMiAxNi41bDQtNGgtM3YtOWgtMnY5SDhsNCA0em05LTEzaC02djEuOTloNnYxNC4wM0gzVjUuNDloNlYzLjVIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtMTRjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10YWI+PHBhdGggZD1cXFwiTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10YWItdW5zZWxlY3RlZD48cGF0aCBkPVxcXCJNMSA5aDJWN0gxdjJ6bTAgNGgydi0ySDF2MnptMC04aDJWM2MtMS4xIDAtMiAuOS0yIDJ6bTggMTZoMnYtMkg5djJ6bS04LTRoMnYtMkgxdjJ6bTIgNHYtMkgxYzAgMS4xLjkgMiAyIDJ6TTIxIDNoLTh2NmgxMFY1YzAtMS4xLS45LTItMi0yem0wIDE0aDJ2LTJoLTJ2MnpNOSA1aDJWM0g5djJ6TTUgMjFoMnYtMkg1djJ6TTUgNWgyVjNINXYyem0xNiAxNmMxLjEgMCAyLS45IDItMmgtMnYyem0wLThoMnYtMmgtMnYyem0tOCA4aDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRleHQtZm9ybWF0PjxwYXRoIGQ9XFxcIk01IDE3djJoMTR2LTJINXptNC41LTQuMmg1bC45IDIuMmgyLjFMMTIuNzUgNGgtMS41TDYuNSAxNWgyLjFsLjktMi4yek0xMiA1Ljk4TDEzLjg3IDExaC0zLjc0TDEyIDUuOTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aGVhdGVycz48cGF0aCBkPVxcXCJNMTggM3YyaC0yVjNIOHYySDZWM0g0djE4aDJ2LTJoMnYyaDh2LTJoMnYyaDJWM2gtMnpNOCAxN0g2di0yaDJ2MnptMC00SDZ2LTJoMnYyem0wLTRINlY3aDJ2MnptMTAgOGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRodW1iLWRvd24+PHBhdGggZD1cXFwiTTE1IDNINmMtLjgzIDAtMS41NC41LTEuODQgMS4yMmwtMy4wMiA3LjA1Yy0uMDkuMjMtLjE0LjQ3LS4xNC43M3YxLjkxbC4wMS4wMUwxIDE0YzAgMS4xLjkgMiAyIDJoNi4zMWwtLjk1IDQuNTctLjAzLjMyYzAgLjQxLjE3Ljc5LjQ0IDEuMDZMOS44MyAyM2w2LjU5LTYuNTljLjM2LS4zNi41OC0uODYuNTgtMS40MVY1YzAtMS4xLS45LTItMi0yem00IDB2MTJoNFYzaC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWItdXA+PHBhdGggZD1cXFwiTTEgMjFoNFY5SDF2MTJ6bTIyLTExYzAtMS4xLS45LTItMi0yaC02LjMxbC45NS00LjU3LjAzLS4zMmMwLS40MS0uMTctLjc5LS40NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41IDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0xLjkxbC0uMDEtLjAxTDIzIDEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWJzLXVwLWRvd24+PHBhdGggZD1cXFwiTTEyIDZjMC0uNTUtLjQ1LTEtMS0xSDUuODJsLjY2LTMuMTguMDItLjIzYzAtLjMxLS4xMy0uNTktLjMzLS44TDUuMzggMCAuNDQgNC45NEMuMTcgNS4yMSAwIDUuNTkgMCA2djYuNWMwIC44My42NyAxLjUgMS41IDEuNWg2Ljc1Yy42MiAwIDEuMTUtLjM4IDEuMzgtLjkxbDIuMjYtNS4yOWMuMDctLjE3LjExLS4zNi4xMS0uNTVWNnptMTAuNSA0aC02Ljc1Yy0uNjIgMC0xLjE1LjM4LTEuMzguOTFsLTIuMjYgNS4yOWMtLjA3LjE3LS4xMS4zNi0uMTEuNTVWMThjMCAuNTUuNDUgMSAxIDFoNS4xOGwtLjY2IDMuMTgtLjAyLjI0YzAgLjMxLjEzLjU5LjMzLjhsLjc5Ljc4IDQuOTQtNC45NGMuMjctLjI3LjQ0LS42NS40NC0xLjA2di02LjVjMC0uODMtLjY3LTEuNS0xLjUtMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGltZWxpbmU+PHBhdGggZD1cXFwiTTIzIDhjMCAxLjEtLjkgMi0yIDItLjE4IDAtLjM1LS4wMi0uNTEtLjA3bC0zLjU2IDMuNTVjLjA1LjE2LjA3LjM0LjA3LjUyIDAgMS4xLS45IDItMiAycy0yLS45LTItMmMwLS4xOC4wMi0uMzYuMDctLjUybC0yLjU1LTIuNTVjLS4xNi4wNS0uMzQuMDctLjUyLjA3cy0uMzYtLjAyLS41Mi0uMDdsLTQuNTUgNC41NmMuMDUuMTYuMDcuMzMuMDcuNTEgMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yYy4xOCAwIC4zNS4wMi41MS4wN2w0LjU2LTQuNTVDOC4wMiA5LjM2IDggOS4xOCA4IDljMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIC4xOC0uMDIuMzYtLjA3LjUybDIuNTUgMi41NWMuMTYtLjA1LjM0LS4wNy41Mi0uMDdzLjM2LjAyLjUyLjA3bDMuNTUtMy41NkMxOS4wMiA4LjM1IDE5IDguMTggMTkgOGMwLTEuMS45LTIgMi0yczIgLjkgMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9jPjxwYXRoIGQ9XFxcIk0zIDloMTRWN0gzdjJ6bTAgNGgxNHYtMkgzdjJ6bTAgNGgxNHYtMkgzdjJ6bTE2IDBoMnYtMmgtMnYyem0wLTEwdjJoMlY3aC0yem0wIDZoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9kYXk+PHBhdGggZD1cXFwiTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOGgxNHYxMXpNNyAxMGg1djVIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRvbGw+PHBhdGggZD1cXFwiTTE1IDRjLTQuNDIgMC04IDMuNTgtOCA4czMuNTggOCA4IDggOC0zLjU4IDgtOC0zLjU4LTgtOC04em0wIDE0Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnpNMyAxMmMwLTIuNjEgMS42Ny00LjgzIDQtNS42NVY0LjI2QzMuNTUgNS4xNSAxIDguMjcgMSAxMnMyLjU1IDYuODUgNiA3Ljc0di0yLjA5Yy0yLjMzLS44Mi00LTMuMDQtNC01LjY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG91Y2gtYXBwPjxwYXRoIGQ9XFxcIk05IDExLjI0VjcuNUM5IDYuMTIgMTAuMTIgNSAxMS41IDVTMTQgNi4xMiAxNCA3LjV2My43NGMxLjIxLS44MSAyLTIuMTggMi0zLjc0QzE2IDUuMDEgMTMuOTkgMyAxMS41IDNTNyA1LjAxIDcgNy41YzAgMS41Ni43OSAyLjkzIDIgMy43NHptOS44NCA0LjYzbC00LjU0LTIuMjZjLS4xNy0uMDctLjM1LS4xMS0uNTQtLjExSDEzdi02YzAtLjgzLS42Ny0xLjUtMS41LTEuNVMxMCA2LjY3IDEwIDcuNXYxMC43NGwtMy40My0uNzJjLS4wOC0uMDEtLjE1LS4wMy0uMjQtLjAzLS4zMSAwLS41OS4xMy0uNzkuMzNsLS43OS44IDQuOTQgNC45NGMuMjcuMjcuNjUuNDQgMS4wNi40NGg2Ljc5Yy43NSAwIDEuMzMtLjU1IDEuNDQtMS4yOGwuNzUtNS4yN2MuMDEtLjA3LjAyLS4xNC4wMi0uMiAwLS42Mi0uMzgtMS4xNi0uOTEtMS4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYWNrLWNoYW5nZXM+PHBhdGggZD1cXFwiTTE5LjA3IDQuOTNsLTEuNDEgMS40MUMxOS4xIDcuNzkgMjAgOS43OSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHMtOC0zLjU4LTgtOGMwLTQuMDggMy4wNS03LjQ0IDctNy45M3YyLjAyQzguMTYgNi41NyA2IDkuMDMgNiAxMmMwIDMuMzEgMi42OSA2IDYgNnM2LTIuNjkgNi02YzAtMS42Ni0uNjctMy4xNi0xLjc2LTQuMjRsLTEuNDEgMS40MUMxNS41NSA5LjkgMTYgMTAuOSAxNiAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNGMwLTEuODYgMS4yOC0zLjQxIDMtMy44NnYyLjE0Yy0uNi4zNS0xIC45OC0xIDEuNzIgMCAxLjEuOSAyIDIgMnMyLS45IDItMmMwLS43NC0uNC0xLjM4LTEtMS43MlYyaC0xQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBjMC0yLjc2LTEuMTItNS4yNi0yLjkzLTcuMDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFuc2xhdGU+PHBhdGggZD1cXFwiTTEyLjg3IDE1LjA3bC0yLjU0LTIuNTEuMDMtLjAzYzEuNzQtMS45NCAyLjk4LTQuMTcgMy43MS02LjUzSDE3VjRoLTdWMkg4djJIMXYxLjk5aDExLjE3QzExLjUgNy45MiAxMC40NCA5Ljc1IDkgMTEuMzUgOC4wNyAxMC4zMiA3LjMgOS4xOSA2LjY5IDhoLTJjLjczIDEuNjMgMS43MyAzLjE3IDIuOTggNC41NmwtNS4wOSA1LjAyTDQgMTlsNS01IDMuMTEgMy4xMS43Ni0yLjA0ek0xOC41IDEwaC0yTDEyIDIyaDJsMS4xMi0zaDQuNzVMMjEgMjJoMmwtNC41LTEyem0tMi42MiA3bDEuNjItNC4zM0wxOS4xMiAxN2gtMy4yNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyZW5kaW5nLWRvd24+PHBhdGggZD1cXFwiTTE2IDE4bDIuMjktMi4yOS00Ljg4LTQuODgtNCA0TDIgNy40MSAzLjQxIDZsNiA2IDQtNCA2LjMgNi4yOUwyMiAxMnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctZmxhdD48cGF0aCBkPVxcXCJNMjIgMTJsLTQtNHYzSDN2MmgxNXYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctdXA+PHBhdGggZD1cXFwiTTE2IDZsMi4yOSAyLjI5LTQuODggNC44OC00LTRMMiAxNi41OSAzLjQxIDE4bDYtNiA0IDQgNi4zLTYuMjlMMjIgMTJWNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXR1cm5lZC1pbj48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHVybmVkLWluLW5vdD48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5hcmNoaXZlPjxwYXRoIGQ9XFxcIk0yMC41NSA1LjIybC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTUuNTVMMy40NiA1LjIyQzMuMTcgNS41NyAzIDYuMDEgMyA2LjVWMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ5LS4xNy0uOTMtLjQ1LTEuMjh6TTEyIDkuNWw1LjUgNS41SDE0djJoLTR2LTJINi41TDEyIDkuNXpNNS4xMiA1bC44Mi0xaDEybC45MyAxSDUuMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmRvPjxwYXRoIGQ9XFxcIk0xMi41IDhjLTIuNjUgMC01LjA1Ljk5LTYuOSAyLjZMMiA3djloOWwtMy42Mi0zLjYyYzEuMzktMS4xNiAzLjE2LTEuODggNS4xMi0xLjg4IDMuNTQgMCA2LjU1IDIuMzEgNy42IDUuNWwyLjM3LS43OEMyMS4wOCAxMS4wMyAxNy4xNSA4IDEyLjUgOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuZm9sZC1sZXNzPjxwYXRoIGQ9XFxcIk03LjQxIDE4LjU5TDguODMgMjAgMTIgMTYuODMgMTUuMTcgMjBsMS40MS0xLjQxTDEyIDE0bC00LjU5IDQuNTl6bTkuMTgtMTMuMThMMTUuMTcgNCAxMiA3LjE3IDguODMgNCA3LjQxIDUuNDEgMTIgMTBsNC41OS00LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5mb2xkLW1vcmU+PHBhdGggZD1cXFwiTTEyIDUuODNMMTUuMTcgOWwxLjQxLTEuNDFMMTIgMyA3LjQxIDcuNTkgOC44MyA5IDEyIDUuODN6bTAgMTIuMzRMOC44MyAxNWwtMS40MSAxLjQxTDEyIDIxbDQuNTktNC41OUwxNS4xNyAxNSAxMiAxOC4xN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVwZGF0ZT48cGF0aCBkPVxcXCJNMjEgMTAuMTJoLTYuNzhsMi43NC0yLjgyYy0yLjczLTIuNy03LjE1LTIuOC05Ljg4LS4xLTIuNzMgMi43MS0yLjczIDcuMDggMCA5Ljc5IDIuNzMgMi43MSA3LjE1IDIuNzEgOS44OCAwQzE4LjMyIDE1LjY1IDE5IDE0LjA4IDE5IDEyLjFoMmMwIDEuOTgtLjg4IDQuNTUtMi42NCA2LjI5LTMuNTEgMy40OC05LjIxIDMuNDgtMTIuNzIgMC0zLjUtMy40Ny0zLjUzLTkuMTEtLjAyLTEyLjU4IDMuNTEtMy40NyA5LjE0LTMuNDcgMTIuNjUgMEwyMSAzdjcuMTJ6TTEyLjUgOHY0LjI1bDMuNSAyLjA4LS43MiAxLjIxTDExIDEzVjhoMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmVyaWZpZWQtdXNlcj48cGF0aCBkPVxcXCJNMTIgMUwzIDV2NmMwIDUuNTUgMy44NCAxMC43NCA5IDEyIDUuMTYtMS4yNiA5LTYuNDUgOS0xMlY1bC05LTR6bS0yIDE2bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWFnZW5kYT48cGF0aCBkPVxcXCJNMjAgMTNIM2MtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTdjLjU1IDAgMS0uNDUgMS0xdi02YzAtLjU1LS40NS0xLTEtMXptMC0xMEgzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWFycmF5PjxwYXRoIGQ9XFxcIk00IDE4aDNWNUg0djEzek0xOCA1djEzaDNWNWgtM3pNOCAxOGg5VjVIOHYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctY2Fyb3VzZWw+PHBhdGggZD1cXFwiTTcgMTloMTBWNEg3djE1em0tNS0yaDRWNkgydjExek0xOCA2djExaDRWNmgtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctY29sdW1uPjxwYXRoIGQ9XFxcIk0xMCAxOGg1VjVoLTV2MTN6bS02IDBoNVY1SDR2MTN6TTE2IDV2MTNoNVY1aC01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1kYXk+PHBhdGggZD1cXFwiTTIgMjFoMTl2LTNIMnYzek0yMCA4SDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMVY5YzAtLjU1LS40NS0xLTEtMXpNMiAzdjNoMTlWM0gyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1oZWFkbGluZT48cGF0aCBkPVxcXCJNNCAxNWgxNnYtMkg0djJ6bTAgNGgxNnYtMkg0djJ6bTAtOGgxNlY5SDR2MnptMC02djJoMTZWNUg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1saXN0PjxwYXRoIGQ9XFxcIk00IDE0aDR2LTRINHY0em0wIDVoNHYtNEg0djR6TTQgOWg0VjVINHY0em01IDVoMTJ2LTRIOXY0em0wIDVoMTJ2LTRIOXY0ek05IDV2NGgxMlY1SDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LW1vZHVsZT48cGF0aCBkPVxcXCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctcXVpbHQ+PHBhdGggZD1cXFwiTTEwIDE4aDV2LTZoLTV2NnptLTYgMGg1VjVINHYxM3ptMTIgMGg1di02aC01djZ6TTEwIDV2NmgxMVY1SDEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1zdHJlYW0+PHBhdGggZD1cXFwiTTQgMThoMTd2LTZINHY2ek00IDV2NmgxN1Y1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LXdlZWs+PHBhdGggZD1cXFwiTTYgNUgzYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6bTE0IDBoLTNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXptLTcgMGgtM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlzaWJpbGl0eT48cGF0aCBkPVxcXCJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXpNMTIgMTdjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy0xLjM0IDMtMy0xLjM0LTMtMy0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlzaWJpbGl0eS1vZmY+PHBhdGggZD1cXFwiTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d2FybmluZz48cGF0aCBkPVxcXCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d2F0Y2gtbGF0ZXI+PHBhdGggZD1cXFwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE3LjUgMiAxMiAyem00LjIgMTQuMkwxMSAxM1Y3aDEuNXY1LjJsNC41IDIuNy0uOCAxLjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13ZWVrZW5kPjxwYXRoIGQ9XFxcIk0yMSAxMGMtMS4xIDAtMiAuOS0yIDJ2M0g1di0zYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnY1YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6bS0zLTVINmMtMS4xIDAtMiAuOS0yIDJ2Mi4xNWMxLjE2LjQxIDIgMS41MSAyIDIuODJWMTRoMTJ2LTIuMDNjMC0xLjMuODQtMi40IDItMi44MlY3YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d29yaz48cGF0aCBkPVxcXCJNMjAgNmgtNFY0YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNGg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD15b3V0dWJlLXNlYXJjaGVkLWZvcj48cGF0aCBkPVxcXCJNMTcuMDEgMTRoLS44bC0uMjctLjI3Yy45OC0xLjE0IDEuNTctMi42MSAxLjU3LTQuMjMgMC0zLjU5LTIuOTEtNi41LTYuNS02LjVzLTYuNSAzLTYuNSA2LjVIMmwzLjg0IDQgNC4xNi00SDYuNTFDNi41MSA3IDguNTMgNSAxMS4wMSA1czQuNSAyLjAxIDQuNSA0LjVjMCAyLjQ4LTIuMDIgNC41LTQuNSA0LjUtLjY1IDAtMS4yNi0uMTQtMS44Mi0uMzhMNy43MSAxNS4xYy45Ny41NyAyLjA5LjkgMy4zLjkgMS42MSAwIDMuMDgtLjU5IDQuMjItMS41N2wuMjcuMjd2Ljc5bDUuMDEgNC45OUwyMiAxOWwtNC45OS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9em9vbS1pbj48cGF0aCBkPVxcXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHptMi41LTRoLTJ2Mkg5di0ySDdWOWgyVjdoMXYyaDJ2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXpvb20tb3V0PjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0ek03IDloNXYxSDd6XFxcIj48L3BhdGg+PC9nPiA8L2RlZnM+PC9zdmc+IDwvaXJvbi1pY29uc2V0LXN2Zz5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24taWNvbnMvaXJvbi1pY29ucy5odG1sIiwiPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaXRlbS9wYXBlci1pdGVtLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC5odG1sXCI+XG5cbjwhLS1cbiAgYHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uc2BcblxuICAqKkZyb20gdjMueC54LCB0aGlzIGNvbXBvbmVudCBvbmx5IHdvcmtzIHdpdGggUG9seW1lciAxLjcrIG9yIDIuMCsuKipcblxuICBbIVtQdWJsaXNoZWQgb24gd2ViY29tcG9uZW50cy5vcmddKGh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vYmFkZ2Uvd2ViY29tcG9uZW50cy5vcmctcHVibGlzaGVkLWJsdWUuc3ZnKV0oaHR0cHM6Ly93d3cud2ViY29tcG9uZW50cy5vcmcvZWxlbWVudC9lbGxpcHRpY2FsanMvcGFwZXItYXV0b2NvbXBsZXRlKVxuXG4gIFshW1NhdWNlIFRlc3QgU3RhdHVzXShodHRwczovL3NhdWNlbGFicy5jb20vYnJvd3Nlci1tYXRyaXgvamh1ZXNvcy5zdmcpXShodHRwczovL3NhdWNlbGFicy5jb20vdS9qaHVlc29zKVxuXG4gIEFsbG93cyB0byBhZGQgYXV0b2NvbXBsZXRlIGNhcGFiaWxpdGllcyB0byBhbnkgaW5wdXQgZmllbGQuIFRoaXMgaXMgZGVzaXJhYmxlIHdoZW4geW91IGhhdmUgYW4gaW5wdXQgZmllbGQgd2l0aCBjdXN0b21cbiAgbG9naWMgYW5kIHlvdSBqdXN0IHdhbnQgdG8gYWRkIHRoZSBmZWF0dXJlIHRvIGhlbHAgdXNlcnMgd2l0aCB0aGUgc2VsZWN0aW9uLiBJZiB5b3Ugd2FudCB0byB1c2UgaXQgaW4gY29tYmluYXRpb24gd2l0aFxuICBhIHJlZ3VsYXIgYDxwYXBlci1pbnB1dD5gLCB5b3UgY2FuIHVzZSBgPHBhcGVyLWF1dG9jb21wbGV0ZT5gLlxuXG4gIEV4YW1wbGU6XG4gIGBgYFxuICA8ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlLXdyYXBwZXJcIj5cbiAgICA8cGFwZXItaW5wdXQgaWQ9XCJteUlucHV0XCIgbGFiZWw9XCJTZWxlY3QgU3RhdGVcIj48L3BhcGVyLWlucHV0PlxuXG4gICAgPHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uc1xuICAgICAgZm9yPVwibXlJbnB1dFwiXG4gICAgICBzb3VyY2U9XCJbW2FjY291bnRzXV1cIj48L3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucz5cbiAgPC9kaXY+XG4gIGBgYFxuXG4gIEl0IGlzICoqaW1wb3J0YW50IHRvIHByb3ZpZGUgYm90aCBgdGV4dFByb3BlcnR5YCBhbmQgYHZhbHVlUHJvcGVydHlgIHdoZW4gd29ya2luZyB3aXRoIGEgY3VzdG9tIHNlYXJjaCBmdW5jdGlvbiBhbmRcbiAgb3IgY3VzdG9tIHRlbXBsYXRlcy4qKiBUaGV5IGFyZSBuZWVkZWQgdG8ga2VlcCB0aGUgY29tcG9uZW50IGFjY2Vzc2libGUgYW5kIGZvciB0aGUgZXZlbnRzIChlLmcuIG9uU2VsZWN0KSB0byBrZWVwXG4gIHdvcmtpbmcuXG5cbiAgIyMjIEFib3V0IFBvbHltZXIgMS54IGFuZCAyLnggQ29tcGF0aWJpbGl0eVxuICBGcm9tIHZlcnNpb24gYDMueC54YCwgdGhpcyBjb21wb25lbnQgd29yayB3aXRoIGJvdGggUG9seW1lciAxLjcrIG9yIFBvbHltZXIgMi4wKyBQbGVhc2UgdGFrZSBhIGxvb2sgdG8gdGhlXG4gIFtNSUdSQVRJT04ubWRdKC4vTUlHUkFUSU9OLm1kKSBmaWxlIHRoYXQgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAjIyMgQ3VzdG9tIHNlYXJjaFxuICBUaGlzIGNvbXBvbmVudCBoYXMgdGhlIHB1YmxpYyBtZXRob2QgYHF1ZXJ5Rm5gIHRoYXQgaXMgY2FsbGVkIGluIGVhY2gga2V5IHN0cm9rZSBhbmQgaXQgaXMgcmVzcG9uc2libGUgdG8gcXVlcnlcbiAgYWxsIGl0ZW1zIGluIHRoZSBgc291cmNlYCBhbmQgcmV0dXJucyBvbmx5IHRob3NlIGl0ZW1zIHRoYXQgbWF0Y2hlcyBjZXJ0YWluIGZpbHRlcmluZyBjcml0ZXJpYS4gQnkgZGVmYXVsdCwgdGhpc1xuICBjb21wb25lbnQgc2VhcmNoIGZvciBpdGVtcyB0aGF0IHN0YXJ0IHdpdGggdGhlIHJlY2VudCBxdWVyeSAoY2FzZSBpbnNlbnNpdGl2ZSkuXG4gIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBiZWhhdmlvciBwcm92aWRpbmcgeW91ciBvd24gcXVlcnkgZnVuY3Rpb24sIGFzIGxvbmcgYXMgdGhlc2UgdHdvIHJlcXVpcmVtZW50cyBhcmUgZnVsZmlsbDpcblxuICAtIFRoZSBxdWVyeSBmdW5jdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAgLSBUaGUgQVBJIGlzIHJlc3BlY3RlZCBhbmQgdGhlIG1ldGhvZCBhbHdheXMgcmV0dXJuIGFuIEFycmF5LlxuXG5cbiAgVGhlIHRlbXBsYXRlIHVzZSB0byByZW5kZXIgZWFjaCBzdWdnZXN0aW9uIGRlcGVuZHMgb24gdGhlIHN0cnVjdHVyZSBvZiBlYWNoIG9iamVjdCB0aGF0IHRoaXMgbWV0aG9kIHJldHVybnMuIEZvciB0aGVcbiAgZGVmYXVsdCB0ZW1wbGF0ZSwgZWFjaCBzdWdnZXN0aW9uIHNob3VsZCBmb2xsb3cgdGhpcyBvYmplY3Qgc3RydWN0dXJlOlxuXG4gIGBgYFxuICAgIHtcbiAgICAgIHRleHQ6IG9ialRleHQsXG4gICAgICB2YWx1ZTogb2JqVmFsdWVcbiAgICB9XG4gIGBgYFxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gYSBsb2NhbCBkYXRhIHNvdXJjZSBpcyB1c2VkLiBXaGVuIHVzaW5nIGEgYHJlbW90ZURhdGFTb3VyY2VgIHVzZXIgaXMgcmVzcG9uc2libGUgb2ZcbiAgZG9pbmcgdGhlIHNlYXJjaCBhbmQgc3BlY2lmeSBzdWdnZXN0aW9ucyBtYW51YWxseS5cblxuICAjIyMgQ3VzdG9tIHRlbXBsYXRlc1xuICBBIHRlbXBsYXRlIGZvciBlYWNoIHN1Z2dlc3Rpb24gY2FuIGJlIHByb3ZpZGVkLCBidXQgZm9yIG5vdywgdGhlcmUgYXJlIGxpbWl0YXRpb25zIGluIHRoZSB3YXkgeW91IGNhbiBjdXN0b21pemVcbiAgdGhlIHRlbXBsYXRlLiBQbGVhc2UgcmVhZCB0aGUgdGhlIGZvbGxvd2luZyBzZWN0aW9ucyBjYXJlZnVsbHkuXG4gIEluIG9yZGVyIHRvIHNldCB5b3VyIG93biB0ZW1wbGF0ZSwgeW91IG5lZWQgdG8gYWRkIGEgYDx0ZW1wbGF0ZT5gIHRhZyB3aXRoIHRoZSBzbG90IG5hbWVcbiAgYGF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVgIGFuZCBhIHN0cnVjdHVyZSBlcXVpdmFsZW50IHRvIHRoZSBvbmUgc2hvd24gaW4gdGhlIGA8YWNjb3VudC1hdXRvY29tcGxldGU+YCBjb21wb25lbnQgaW5cbiAgdGhlIGRlbW8uXG5cbiAgWW91IG5lZWQgdG8gYWx3YXlzIG1haW50YWluIHRoaXMgc3RydWN0dXJlLiBUaGVuIHlvdSBjYW4gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHBhcGVyLWl0ZW0uIFRoZXNlIGFyZSB0aGUgcmVhc29uc1xuICB3aHkgeW91IG5lZWQgdG8gbWFpbnRhaW4gaXQ6XG5cbiAgLSBgb25TZWxlY3RIYW5kbGVyYCBpdCBpcyB2ZXJ5IGltcG9ydGFudCBiZWNhdXNlIGl0IHdpbGwgbm90aWZ5IHRoZSBgYXV0b2NvbXBsZXRlYCBjb21wb25lbnQgd2hlbiB1c2VyIHNlbGVjdHMgb25lIGl0ZW0uXG4gIElmIHlvdSBkb24ndCBhZGQgdGhpcyBvcHRpb24sIHdoZW4gdXNlciBjbGlja3MgaW4gb25lIG9mIHRoZSBpdGVtcywgbm90aGluZyB3aWxsIGhhcHBlbi5cbiAgLSBgaWRgLCBgcm9sZWAgYW5kIGBhcmlhLXNlbGVjdGVkYCBuZWVkIHRvIGJlIHRoZXJlIGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMuIElmIHlvdSBkb24ndCBzZXQgdGhlbSwgdGhlIGNvbXBvbmVudFxuICB3aWxsIGNvbnRpbnVlIHdvcmtpbmcgYnV0IGl0IHdpbGwgbm90IGJlIGFjY2Vzc2libGUgZm9yIHVzZXIgd2l0aCBkaXNhYmlsaXRpZXMuXG5cblxuICBJdCBpcyBpbXBvcnRhbnQgdG8gY2xhcmlmeSB0aGF0IG1ldGhvZHMgYF9vblNlbGVjdGAgYW5kIGBfZ2V0U3VnZ2VzdGlvbklkYCBkbyBub3QgbmVlZCB0byBiZSBpbXBsZW1lbnRlZC4gVGhleSBhcmVcbiAgcGFydCBvZiB0aGUgbG9naWMgb2YgYHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uc2AuXG5cbiAgV2hlbiBwcm92aWRpbmcgeW91ciBvd24gY3VzdG9tIHRlbXBsYXRlLCB5b3UgbWlnaHQgYWxzbyBuZWVkIHRvIHByb3ZpZGUgeW91ciBvd24gY3VzdG9tIHNlYXJjaCBmdW5jdGlvbi4gVGhlIHJlYXNvblxuICBmb3IgdGhhdCBpcyB0aGF0IHRoZSBkZWZhdWx0IHNlYXJjaCBmdW5jdGlvbiBvbmx5IGV4cG9zZXMgdGV4dCBhbmQgdmFsdWUgaW4gdGhlIHJlc3VsdHMuIElmIGVhY2ggaXRlbSBpbiB5b3VyIGRhdGFcbiAgc291cmNlIGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24sIHRoZW4geW91IHdvbid0IGJlIGFibGUgdG8gYWNjZXNzIGl0LiBTZWUgdGhlIGNvZGUgb2YgYDxhZGRyZXNzLWF1dG9jb21wbGV0ZT5gXG4gIGVsZW1lbnQgaW4gdGhlIGRlbW8gZm9sZGVyIGZvciBhIGNvbXBsZXRlIGV4YW1wbGUuXG5cbiAgQW5vdGhlciBpbXBvcnRhbnQgdGhpbmcgdG8gcG9pbnQgb3V0IGlzIHJlbGF0ZWQgdG8gdGhlIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSBpbiB0aGUgcmVzdWx0cy4gVGhlIGhlaWdodCBvZlxuICB0aGUgc3VnZ2VzdGlvbiB0ZW1wbGF0ZSBjaGFuZ2VzIGR5bmFtaWNhbGx5IGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IG9mIGEgc3VnZ2VzdGlvbiBpdGVtLiBIb3dldmVyLCB0aGUgZm9sbG93aW5nXG4gIGFzc3VtcHRpb25zIHdlcmUgbWFkZTpcbiAgLSBBbGwgc3VnZ2VzdGlvbnMgaXRlbXMgaGF2ZSB0aGUgc2FtZSBoZWlnaHRcbiAgLSBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpcyBmaXhlZCBhbmQgY2FuIGJlIGRldGVybWluZWQgYXQgYW55IHRpbWUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byB1c2UgaW1hZ2VzIGluIHRoZVxuICByZXN1bHRzLCBtYWtlIHN1cmUgdGhleSBoYXZlIGEgcGxhY2Vob2xkZXIgb3IgYSBmaXhlZCBoZWlnaHQuXG5cblxuICAjIyMgU3R5bGluZ1xuXG4gIGA8cGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zPmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zXG4gIGZvciBzdHlsaW5nOlxuXG4gIEN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuICAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuICBgLS1wYXBlci1pdGVtLW1pbi1oZWlnaHRgIHwgcGFwZXIgaXRlbSBtaW4gaGVpZ2h0IHwgYDM2cHhgXG4gIGAtLXN1Z2dlc3Rpb25zLXdyYXBwZXJgIHwgbWl4aW4gdG8gYXBwbHkgdG8gdGhlIHN1Z2dlc3Rpb25zIGNvbnRhaW5lciB8IGB7fWBcbiAgYC0tc3VnZ2VzdGlvbnMtaXRlbWAgfCBtaXhpbiB0byBhcHBseSB0byB0aGUgc3VnZ2VzdGlvbnMgaXRlbXMgfCBge31gXG5cbiAgIyMjIEFjY2Vzc2liaWxpdHlcbiAgVGhpcyBjb21wb25lbnQgZXhwb3NlcyBjZXJ0YWluIG5lY2Vzc2FyeSB2YWx1ZXMgaW4gb3JkZXIgdG8gbWFrZSB5b3VyIGNvbXBvbmVudCBhY2Nlc3NpYmxlLiBXaGVuIGNoZWNraW5nIHRoZSBBUklBXG4gIHNwZWNzLCBpdCBpcyBzYWlkIHRoYXQgeW91IG5lZWQgdG8gaW5mb3JtIHVzZXJzIG9mIHRoZSBmb2xsb3dpbmcgY2hhbmdlczpcbiAgLSBXaGV0aGVyIHRoZSBwb3B1cCB3aXRoIHN1Z2dlc3Rpb25zIGlzIG9wZW4gb3Igbm90LlxuICAtIElkIG9mIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgZWxlbWVudFxuXG4gWW91IGNhbiBhY2Nlc3MgdGhlc2UgdmFsdWVzIHVzaW5nIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogYGlzT3BlbmAgYW5kIGBoaWdobGlnaHRlZFN1Z2dlc3Rpb25gLiBUaGUgaWQgb2YgZWFjaFxuIGVsZW1lbnQgaW4gaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uIGEgcmFuZG9tIGFuZCB1bmlxdWUgaWQuXG5cbiBJbiBhZGRpdGlvbiwgYXMgbG9uZyBhcyBkZXZlbG9wZXJzIGZvbGxvdyB0aGUgZ2VuZXJhbCBzdHJ1Y3R1cmUgb2YgZWFjaCBzdWdnZXN0aW9uIHRlbXBsYXRlLCB0aGUgZm9sbG93aW5nIEExMVlcbiBmZWF0dXJlcyBhcmUgc2V0IGluIGVhY2ggc3VnZ2VzdGlvbjpcbiAtIGByb2xlPVwib3B0aW9uXCJgXG4gLSBgYXJpYS1zZWxlY3RlZD1cInRydWV8ZmFsc2VcImAuIFRoaXMgdmFsdWUgd2lsbCBiZSBmYWxzZSBmb3IgYWxsIHN1Z2dlc3Rpb24gZXhjZXB0IGluIHRoZSBvbmUgd2hpY2ggaXMgY3VycmVudGx5XG4gaGlnaGxpZ2h0ZWQuXG5cbiAgQGRlbW8gZGVtby9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtZGVtby5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIHBhcGVyLW1hdGVyaWFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MnB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgIEBhcHBseSAtLXN1Z2dlc3Rpb25zLXdyYXBwZXI7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0sXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaXRlbSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDM2cHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbiAgICAgICAgQGFwcGx5IC0tc3VnZ2VzdGlvbnMtaXRlbTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbTpob3ZlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pdGVtOmhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0uYWN0aXZlLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWl0ZW0uYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElFMTEgcGFwZXItaXRlbSBtaW4taGVpZ2h0IGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pdGVtL2lzc3Vlcy8zNVxuICAgICAgICovXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgMzZweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXY+XG4gICAgICA8IS0tIHVuc2VsZWN0YWJsZSBpcyBuZWVkZWQgdG8gZml4IGFuIGlzc3VlIHJlbGF0ZWQgdG8gdGhlIGZvY3VzIGJlaW5nIHRha2VuIGF3YXkgd2hlbiBjbGlja2luZyBpbiB0aGVcbiAgICAgICByZXN1bHRzIHNjcm9sbGJhciAtLT5cbiAgICAgIDxwYXBlci1tYXRlcmlhbCBlbGV2YXRpb249XCIxXCIgaWQ9XCJzdWdnZXN0aW9uc1dyYXBwZXJcIiB1bnNlbGVjdGFibGU9XCJvblwiPjwvcGFwZXItbWF0ZXJpYWw+XG5cbiAgICAgIDwhLS0gRGVmYXVsdCBzdWdnZXN0aW9uIHRlbXBsYXRlIC0tPlxuICAgICAgPHRlbXBsYXRlIGlkPVwiZGVmYXVsdFRlbXBsYXRlXCI+XG4gICAgICAgIDxwYXBlci1pdGVtIGlkJD1cIltbX2dldFN1Z2dlc3Rpb25JZChpbmRleCldXVwiIHJvbGU9XCJvcHRpb25cIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIiBvbi10YXA9XCJfb25TZWxlY3RcIj5cbiAgICAgICAgICA8ZGl2PltbX2dldEl0ZW1UZXh0KGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gIDwhLS0gQ3VzdG9tIHRlbXBsYXRlIC0tPlxuICA8c2xvdCBpZD1cInRlbXBsYXRlc1wiIG5hbWU9XCJhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlXCI+PC9zbG90PlxuICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgRElSRUNUSU9OID0ge1xuICAgICAgVVA6ICd1cCcsXG4gICAgICBET1dOOiAnZG93bidcbiAgICB9O1xuXG4gICAgdmFyIEtFWV9DT0RFUyA9IHtcbiAgICAgIExFRlRfQVJST1c6IDM3LFxuICAgICAgUklHSFRfQVJST1c6IDM5LFxuICAgICAgVVBfQVJST1c6IDM4LFxuICAgICAgRE9XTl9BUlJPVzogNDAsXG4gICAgICBFTlRFUjogMTMsXG4gICAgICBFU0NBUEU6IDI3XG4gICAgfTtcblxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMnLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5UZW1wbGF0aXplclxuICAgICAgXSxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWQgb2YgaW5wdXRcbiAgICAgICAgICovXG4gICAgICAgICdmb3InOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGB0cnVlYCBpZiB0aGUgc3VnZ2VzdGlvbnMgbGlzdCBpcyBvcGVuLCBgZmFsc2Ugb3RoZXJ3aXNlYFxuICAgICAgICAgKi9cbiAgICAgICAgaXNPcGVuOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1pbmltdW0gbGVuZ3RoIHRvIHRyaWdnZXIgc3VnZ2VzdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXggbnVtYmVyIG9mIHN1Z2dlc3Rpb25zIHRvIGJlIGRpc3BsYXllZCB3aXRob3V0IHNjcm9sbGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbWF4Vmlld2FibGVJdGVtczoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogN1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB0ZXh0IHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0UHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB2YWx1ZSBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgc291cmNlYCBBcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIG9wdGlvbnMgdG8gZXhlY3V0ZSB0aGUgYXV0b2NvbXBsZXRlIGZlYXR1cmVcbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBzZWxlY3RlZCBvcHRpb24uIFRoZSBzdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdCBkZXBlbmRzIG9uIHRoZVxuICAgICAgICAgKiAgc3RydWN0dXJlIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZE9wdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgdG8gYSByZW1vdGUgZGF0YSBzb3VyY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZVNvdXJjZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IHR5cGUgc2VwYXJhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBldmVudE5hbWVzcGFjZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJy0nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnQgaGlnaGxpZ2h0ZWQgc3VnZ2VzdGlvbi4gVGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IGlzOlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICoge1xuICAgICAgICAgKiAgICBlbGVtZW50SWQ6IElEIC8vIGlkIG9mIHRoZSBoaWdobGlnaHRlZCBET00gZWxlbWVudFxuICAgICAgICAgKiAgICBvcHRpb246IC8vIGhpZ2hsaWdodGVkIG9wdGlvbiBkYXRhXG4gICAgICAgICAqIH1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICBoaWdobGlnaHRlZFN1Z2dlc3Rpb246IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIGZpbHRlciBhdmFpbGFibGUgaXRlbXMuIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgdXNlZCBieSBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMsXG4gICAgICAgICAqIGl0IGlzIGFsc28gZXhwb3NlZCBoZXJlIHNvIGl0IGlzIHBvc3NpYmxlIHRvIHByb3ZpZGUgYSBjdXN0b20gcXVlcnlGbi5cbiAgICAgICAgICovXG4gICAgICAgICBxdWVyeUZuOiB7XG4gICAgICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBpdCB3aWxsIGFsd2F5cyBoaWdobGlnaHQgdGhlIGZpcnN0IHJlc3VsdCBlYWNoIHRpbWUgbmV3IHN1Z2dlc3Rpb25zIGFyZSBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBoaWdobGlnaHRGaXJzdDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBfc3VnZ2VzdGlvbnNgIEFycmF5IHdpdGggdGhlIGFjdHVhbCBzdWdnZXN0aW9ucyB0byBkaXNwbGF5XG4gICAgICAgICAqL1xuICAgICAgICBfc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICBvYnNlcnZlcjogJ19vblN1Z2dlc3Rpb25zQ2hhbmdlZCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBpbiB0aGUgc3VnZ2VzdGlvbnMgcG9wdXAgb2YgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBlbGVtZW50LCBiZWluZyBgMGAgdGhlIGZpcnN0IG9uZSxcbiAgICAgICAgICogYW5kIGB0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggLSAxYCB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgX2N1cnJlbnRJbmRleDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwuIFRoZW4gdGhlIGBzY3JvbGxUb3BgIHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgbXVsdGlwbHlpbmcgdGhlXG4gICAgICAgICAqIGBfaXRlbUhlaWdodGAgd2l0aCB0aGUgY3VycmVudCBpbmRleC5cbiAgICAgICAgICovXG4gICAgICAgIF9zY3JvbGxJbmRleDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGVsZW1lbnQgaW4gcGl4ZWxzXG4gICAgICAgICAqL1xuICAgICAgICBfaXRlbUhlaWdodDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMzYsXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfaXRlbUhlaWdodENoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgX3ZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIF90ZXh0OiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHZhbHVlIGlzIHVzZWQgYXMgYSBiYXNlIHRvIGdlbmVyYXRlIHVuaXF1ZSBpbmRpdmlkdWFsIGlkcyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gZWFjaCBzdWdnZXN0aW9uIGZvclxuICAgICAgICAgKiBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBfaWRJdGVtU2VlZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ2FyaWEtJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJy0nICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApKSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gYmluZGVkIGZ1bmN0aW9ucyBzbyB3ZSBjYW4gY2FsbCByZW1vdmVFdmVudExpc3RlbmVyIG9uIGVsZW1lbnQgZGV0YWNoZWRcbiAgICAgICAgICovXG4gICAgICAgIF9iaW5kZWRGdW5jdGlvbnM6IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIF9vbktleXByZXNzOiBudWxsLFxuICAgICAgICAgICAgICBfb25Gb2N1czogbnVsbCxcbiAgICAgICAgICAgICAgX29uQmx1cjogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdGhlIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSBoYXMgYmVlbiBhbHJlYWR5IGNhbGN1bGF0ZWQuXG4gICAgICAgICAqIFRoZSBhc3N1bXB0aW9uIGlzIHRoYXQgaXRlbSBoZWlnaHQgaXMgZml4ZWQgYW5kIGl0IHdpbGwgbm90IGNoYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIF9oYXNJdGVtSGlnaEJlZW5DYWxjdWxhdGVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVG8gYXZvaWQgdW5uZWNlc3NhcnkgYWNjZXNzIHRvIHRoZSBET00sIHdlIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgdGVtcGxhdGUgYmVpbmcgdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgX19jdXN0b21UcGxSZWY6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLy8gRWxlbWVudCBMaWZlY3ljbGVcblxuICAgICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IHRvIGJlIGFibGUgdG8gYWNjZXNzIGNvbXBvbmVudCBtZXRob2RzIGluc2lkZSB0aGUgdGVtcGxhdGVzIHVzZWQgd2l0aCBUZW1wbGF0aXplclxuICAgICAgICB0aGlzLmRhdGFIb3N0ID0gdGhpcztcblxuICAgICAgICAvLyBOZWVkIHRvIGNhcHR1cmUgbW91c2Vkb3duIHRvIHByZXZlbnQgdGhlIGZvY3VzIHRvIHN3aXRjaCBmcm9tIGlucHV0IGZpZWxkIHdoZW4gdXNlciBjbGlja3MgaW4gdGhlIHNjcm9sbGJhclxuICAgICAgICAvLyBhbmQgdGhlIGF1dG9zdWdnZXN0IGlzIGEgY2hpbGQgb2YgYW4gZWxlbWVudCB3aXRoIHRhYmluZGV4LlxuICAgICAgICB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZW5mb3JjZSB0aGF0IGRhdGFIb3N0IGlzIHRoZSBzdWdnZXN0aW9ucyBhbmQgbm90IHRoZSBjdXN0b20gcG9seW1lciBlbGVtZW50IHdoZXJlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAvLyBpcyBkZWZpbmVkLiBJZiB3ZSBkbyBub3QgZG8gdGhpcywgaXQgd29uJ3QgYmUgcG9zc2libGUgdG8gYWNjZXNzIHBhcGVyU3VnZ2VzdGlvbnMgZnJvbSB0aGUgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gYWNoaWV2ZSB0aGlzIHdpdGhvdXQgbW9kaWZ5aW5nIFBvbHltZXIgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgICAgICB0aGlzLl9zdWdnZXN0aW9uVGVtcGxhdGUuX19kYXRhSG9zdCA9IHRoaXM7XG4gICAgICAgIHRoaXMudGVtcGxhdGl6ZSh0aGlzLl9zdWdnZXN0aW9uVGVtcGxhdGUpO1xuICAgICAgfSxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmZvcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBpbnB1dCBmaWVsZCB3aXRoIGlkOiAnICsgdGhpcy5mb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbktleXByZXNzID0gdGhpcy5fb25LZXlwcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uS2V5cHJlc3MpO1xuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25Gb2N1cyk7XG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uQmx1cik7XG4gICAgICB9LFxuXG4gICAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbmNlbERlYm91bmNlcignX29uU3VnZ2VzdGlvbkNoYW5nZWQnKTtcblxuICAgICAgICB0aGlzLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25LZXlwcmVzcyk7XG4gICAgICAgIHRoaXMuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkZvY3VzKTtcbiAgICAgICAgdGhpcy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25CbHVyKTtcblxuICAgICAgICB0aGlzLl9pbnB1dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX19jdXN0b21UcGxSZWYgPSBudWxsO1xuICAgICAgfSxcblxuICAgICAgLy8gRWxlbWVudCBCZWhhdmlvclxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgdGV4dCBwcm9wZXJ0eSBmcm9tIHRoZSBzdWdnZXN0aW9uXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VnZ2VzdGlvbiBUaGUgc3VnZ2VzdGlvbiBpdGVtXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIF9nZXRJdGVtVGV4dDogZnVuY3Rpb24gKHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25bdGhpcy50ZXh0UHJvcGVydHldO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTaG93IHRoZSBzdWdnZXN0aW9ucyB3cmFwcGVyXG4gICAgICAgKi9cbiAgICAgIF9zaG93U3VnZ2VzdGlvbnNXcmFwcGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc1dyYXBwZXIgPSB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyO1xuXG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlIHRoZSBzdWdnZXN0aW9ucyB3cmFwcGVyXG4gICAgICAgKi9cbiAgICAgIF9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc1dyYXBwZXIgPSB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyO1xuXG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZFN1Z2dlc3Rpb24gPSB7fTtcblxuICAgICAgICB0aGlzLl9jbGVhclN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICBfaGFuZGxlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucmVtb3RlU291cmNlKSB0aGlzLl9jcmVhdGVTdWdnZXN0aW9ucyhldmVudCk7XG4gICAgICAgIGVsc2UgdGhpcy5fcmVtb3RlU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIF9yZW1vdGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9pbnB1dC52YWx1ZTtcblxuICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgIHRleHQ6IHZhbHVlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9maXJlRXZlbnQob3B0aW9uLCAnY2hhbmdlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JpbmRTdWdnZXN0aW9uczogZnVuY3Rpb24gKGFycikge1xuICAgICAgICBpZiAoYXJyLmxlbmd0aCAmJiBhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gYXJyO1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuX3Njcm9sbEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfY3JlYXRlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsSW5kZXggPSAwO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAvLyBTZWFyY2ggZm9yIHRoZSB3b3JkIGluIHRoZSBzb3VyY2UgcHJvcGVydGllcy5cbiAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQ2FsbCBxdWVyeUZuLiBVc2VyIGNhbiBvdmVycmlkZSBxdWVyeUZuKCkgdG8gcHJvdmlkZSBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5xdWVyeUZuKHRoaXMuc291cmNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldCBfc3VnZ2VzdGlvblRlbXBsYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fX2N1c3RvbVRwbFJlZikge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9fY3VzdG9tVHBsUmVmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXN0b21UZW1wbGF0ZSA9IHRoaXMuZ2V0RWZmZWN0aXZlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5fX2N1c3RvbVRwbFJlZiA9IGN1c3RvbVRlbXBsYXRlLmxlbmd0aCA+IDAgPyBjdXN0b21UZW1wbGF0ZVswXSA6IHRoaXMuJC5kZWZhdWx0VGVtcGxhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX19jdXN0b21UcGxSZWY7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbmRlciBzdWdnZXN0aW9ucyBpbiB0aGUgc3VnZ2VzdGlvbnNXcmFwcGVyIGNvbnRhaW5lclxuICAgICAgICogQHBhcmFtIHtBcnJheX0gc3VnZ2VzdGlvbnMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgc3VnZ2VzdGlvbnMgdG8gYmUgcmVuZGVyZWQuIFRoaXMgdmFsdWUgaXMgbm90IG9wdGlvbmFsLCBzb1xuICAgICAgICogICAgaW4gY2FzZSBubyBzdWdnZXN0aW9ucyBuZWVkIHRvIGJlIHJlbmRlcmVkLCB5b3Ugc2hvdWxkIGVpdGhlciBub3QgY2FsbCB0aGlzIG1ldGhvZCBvciBwcm92aWRlIGFuIGVtcHR5IGFycmF5LlxuICAgICAgICovXG4gICAgICBfcmVuZGVyU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChzdWdnZXN0aW9ucykge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBQb2x5bWVyLmRvbSh0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyKTtcbiAgICAgICAgdmFyIGlzUG9seW1lcjEgPSAhUG9seW1lci5FbGVtZW50O1xuXG4gICAgICAgIHRoaXMuX2NsZWFyU3VnZ2VzdGlvbnMoKTtcblxuICAgICAgICBbXS5zbGljZS5jYWxsKHN1Z2dlc3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQsIGluZGV4KSB7XG4gICAgICAgICAgLy8gY2xvbmUgdGhlIHRlbXBsYXRlIGFuZCBiaW5kIHdpdGggdGhlIG1vZGVsXG4gICAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zdGFtcCgpO1xuICAgICAgICAgIGNsb25lLml0ZW0gPSByZXN1bHQ7XG4gICAgICAgICAgY2xvbmUuaW5kZXggPSBpbmRleDtcblxuICAgICAgICAgIC8vIERpZmZlcmVudCBzdGFtcGluZyBtb2RlIGJhc2VkIG9uIFBvbHltZXIgdmVyc2lvblxuICAgICAgICAgIGlmIChpc1BvbHltZXIxKSB7XG4gICAgICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZS5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lLnJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgX2NsZWFyU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gUG9seW1lci5kb20odGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlciksXG4gICAgICAgICAgbGFzdDtcbiAgICAgICAgd2hpbGUgKGxhc3QgPSBzdWdnZXN0aW9uc0NvbnRhaW5lci5sYXN0Q2hpbGQpIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxhc3QpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBMaXN0ZW5lciB0byBjaGFuZ2VzIHRvIF9zdWdnZXN0aW9ucyBzdGF0ZVxuICAgICAgICovXG4gICAgICBfb25TdWdnZXN0aW9uc0NoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZSgnX29uU3VnZ2VzdGlvbkNoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyU3VnZ2VzdGlvbnModGhpcy5fc3VnZ2VzdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faGlkZVN1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFBvbHltZXIuZG9tLmZsdXNoKCk7XG5cbiAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbCgpO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLl9oYXNJdGVtSGlnaEJlZW5DYWxjdWxhdGVkKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RTdWdnZXN0aW9uRWxlbWVudCA9IHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIucXVlcnlTZWxlY3RvcigncGFwZXItaXRlbScpO1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RTdWdnZXN0aW9uRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBVcGRhdGUgbWF4SGVpZ2h0IG9mIHN1Z2dlc3Rpb25zIHdyYXBwZXIgZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIHJlc3VsdFxuICAgICAgICAgICAgICB0aGlzLl9pdGVtSGVpZ2h0ID0gZmlyc3RTdWdnZXN0aW9uRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgdGhpcy5faGFzSXRlbUhpZ2hCZWVuQ2FsY3VsYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0Rmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVIaWdobGlnaHRlZChESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGlvbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuX3N1Z2dlc3Rpb25zW2luZGV4XTtcblxuICAgICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IHNlbGVjdGVkT3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uO1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgdGhpcy5fZW1wdHlJdGVtcygpO1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChzZWxlY3RlZE9wdGlvbiwgJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IGFsbCBzdWdnZXN0aW9uIGVsZW1lbnRzXG4gICAgICAgKiBAcmV0dXJuIHtBcnJheX0gYSBsaXN0IG9mIGFsbCBzdWdnZXN0aW9uIGVsZW1lbnRzXG4gICAgICAgKi9cbiAgICAgIF9nZXRJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdwYXBlci1pdGVtJyk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVtcHR5IHRoZSBsaXN0IG9mIGN1cnJlbnQgc3VnZ2VzdGlvbnMgYmVpbmcgZGlzcGxheWVkXG4gICAgICAgKi9cbiAgICAgIF9lbXB0eUl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICB9LFxuXG4gICAgICBfZ2V0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGlmICghaWQpIGlkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgdGhlIGFjdGl2ZSBzdGF0ZSBmcm9tIGFsbCBzdWdnZXN0aW9uIGl0ZW1zXG4gICAgICAgKi9cbiAgICAgIF9yZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICBbXS5zbGljZS5jYWxsKGl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogS2V5IHByZXNzIGV2ZW50IGhhbmRsZXJcbiAgICAgICAqL1xuICAgICAgX29uS2V5cHJlc3M6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS0VZX0NPREVTLkRPV05fQVJST1c6XG4gICAgICAgICAgdGhpcy5fbW92ZUhpZ2hsaWdodGVkKERJUkVDVElPTi5ET1dOKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuVVBfQVJST1c6XG4gICAgICAgICAgdGhpcy5fbW92ZUhpZ2hsaWdodGVkKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOlxuICAgICAgICAgIHRoaXMuX2tleWVudGVyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS0VZX0NPREVTLkVTQ0FQRTpcbiAgICAgICAgICB0aGlzLl9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gRm9yIGxlZnQgYW5kIHJpZ2h0IGFycm93LCBjb21wb25lbnQgc2hvdWxkIGRvIG5vdGhpbmdcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuTEVGVF9BUlJPVzpcbiAgICAgICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuUklHSFRfQVJST1c6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5faGFuZGxlU3VnZ2VzdGlvbnMoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBrZXkgRU5URVIgcHJlc3MgZXZlbnRcbiAgICAgICAqL1xuICAgICAgX2tleWVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgdGhpcy5fY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXg7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiAgTW92ZSB0aGUgY3VycmVudCBoaWdobGlnaHRlZCBzdWdnZXN0aW9uIHVwIG9yIGRvd25cbiAgICAgICAqICBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFBvc3NpYmxlIHZhbHVlcyBhcmUgRElSRUNUSU9OLlVQIG9yIERJUkVDVElPTi5ET1dOXG4gICAgICAgKi9cbiAgICAgIF9tb3ZlSGlnaGxpZ2h0ZWQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKTtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG51bWJlck9mSXRlbXMgPSBpdGVtcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHZhciBpc0ZpcnN0SXRlbSA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gMDtcbiAgICAgICAgdmFyIGlzTGFzdEl0ZW0gPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IG51bWJlck9mSXRlbXM7XG4gICAgICAgIHZhciBpc05vSXRlbUhpZ2hsaWdodGVkID0gdGhpcy5fY3VycmVudEluZGV4ID09PSAtMTtcblxuICAgICAgICBpZiAoKGlzTm9JdGVtSGlnaGxpZ2h0ZWQgfHwgaXNGaXJzdEl0ZW0pICYmIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gbnVtYmVyT2ZJdGVtcztcbiAgICAgICAgfSBlbHNlIGlmIChpc0xhc3RJdGVtICYmIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtb2RpZmllciA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04gPyAxIDogLTE7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gdGhpcy5fY3VycmVudEluZGV4ICsgbW9kaWZpZXI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGlnaGxpZ2h0ZWRPcHRpb24gPSB0aGlzLl9zdWdnZXN0aW9uc1t0aGlzLl9jdXJyZW50SW5kZXhdO1xuICAgICAgICB2YXIgaGlnaGxpZ2h0ZWRJdGVtID0gaXRlbXNbdGhpcy5fY3VycmVudEluZGV4XTtcblxuICAgICAgICB0aGlzLl9yZW1vdmVBY3RpdmUoaXRlbXMpO1xuXG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG5cbiAgICAgICAgdGhpcy5fc2V0SGlnaGxpZ2h0ZWRTdWdnZXN0aW9uKGhpZ2hsaWdodGVkT3B0aW9uLCBoaWdobGlnaHRlZEl0ZW0uaWQpO1xuXG4gICAgICAgIHRoaXMuX3Njcm9sbChkaXJlY3Rpb24pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBNb3ZlIHNjcm9sbCAoaWYgbmVlZGVkKSB0byBkaXNwbGF5IHRoZSBhY3RpdmUgZWxlbWVudCBpbiB0aGUgc3VnZ2VzdGlvbnMgbGlzdC5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gRGlyZWN0aW9uIHRvIHNjcm9sbC4gUG9zc2libGUgdmFsdWVzIGFyZSBgRElSRUNUSU9OLlVQYCBhbmQgYERJUkVDVElPTi5ET1dOYC5cbiAgICAgICAqL1xuICAgICAgX3Njcm9sbDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgbmV3U2Nyb2xsVmFsdWUsIGlzU2VsZWN0ZWRPdXRPZlZpZXc7XG5cbiAgICAgICAgdmFyIHZpZXdJbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleCAtIHRoaXMuX3Njcm9sbEluZGV4O1xuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyBvbmx5IHdoZW4gdXNlciBzd2l0Y2ggZnJvbSBsYXN0IGl0ZW0gdG8gZmlyc3Qgb25lXG4gICAgICAgIHZhciBpc0ZpcnN0SXRlbUFuZE91dE9mVmlldyA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gMCAmJiB2aWV3SW5kZXggPCAwO1xuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyBvbmx5IHdoZW4gdXNlciBzd2l0Y2ggZnJvbSBmaXJzdCBvciBubyBpdGVtIHRvIGxhc3Qgb25lXG4gICAgICAgIHZhciBpc0xhc3RJdGVtQW5kT3V0T2ZWaWV3ID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPT09IHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgJiYgdmlld0luZGV4ID49IHRoaXMubWF4Vmlld2FibGVJdGVtcztcblxuICAgICAgICBpZiAoaXNGaXJzdEl0ZW1BbmRPdXRPZlZpZXcgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTikge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gMDtcbiAgICAgICAgICBpc1NlbGVjdGVkT3V0T2ZWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0xhc3RJdGVtQW5kT3V0T2ZWaWV3ICYmIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSB0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggLSB0aGlzLm1heFZpZXdhYmxlSXRlbXM7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IHRoaXMuX3Njcm9sbEluZGV4IC0gMTtcbiAgICAgICAgICBpc1NlbGVjdGVkT3V0T2ZWaWV3ID0gdmlld0luZGV4IDwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IHRoaXMuX3Njcm9sbEluZGV4ICsgMTtcbiAgICAgICAgICBpc1NlbGVjdGVkT3V0T2ZWaWV3ID0gdmlld0luZGV4ID49IHRoaXMubWF4Vmlld2FibGVJdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgd2hlbiB0aGUgY3VycmVudCBhY3RpdmUgZWxlbWVudCBpcyBvdXQgb2Ygdmlldywgd2UgbmVlZCB0byBtb3ZlIHRoZSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsXG4gICAgICAgIGlmIChpc1NlbGVjdGVkT3V0T2ZWaWV3KSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsSW5kZXggPSBuZXdTY3JvbGxWYWx1ZTtcbiAgICAgICAgICB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbEluZGV4ICogdGhpcy5faXRlbUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXNldCBzY3JvbGwgYmFjayB0byB6ZXJvXG4gICAgICAgKi9cbiAgICAgIF9yZXNldFNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGUgY3VycmVudCBoaWdobGlnaHRlZCBzdWdnZXN0aW9uXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uIERhdGEgb2YgdGhlIGhpZ2hsaWdodGVkIG9wdGlvblxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBpZCBvZiB0aGUgaGlnaGxpZ2h0ZWQgZG9tIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIF9zZXRIaWdobGlnaHRlZFN1Z2dlc3Rpb246IGZ1bmN0aW9uIChvcHRpb24sIGVsZW1lbnRJZCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkU3VnZ2VzdGlvbiA9IHtcbiAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICBlbGVtZW50SWQ6IGVsZW1lbnRJZCxcbiAgICAgICAgICB0ZXh0VmFsdWU6IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0sXG4gICAgICAgICAgdmFsdWU6IG9wdGlvblt0aGlzLnZhbHVlUHJvcGVydHldXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBfZmlyZUV2ZW50OiBmdW5jdGlvbiAob3B0aW9uLCBldnQpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fZ2V0SWQoKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gJ2F1dG9jb21wbGV0ZScgKyB0aGlzLmV2ZW50TmFtZXNwYWNlICsgZXZ0O1xuXG4gICAgICAgIHRoaXMuZmlyZShldmVudCwge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV0gfHwgb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIHRleHQ6IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0gfHwgb3B0aW9uLnRleHQsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgX29uU2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCkuaW5kZXg7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbihpbmRleCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBvbkJsdXIgZXZlbnRcbiAgICAgICAqL1xuICAgICAgX29uQmx1cjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdibHVyJyk7XG5cbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIG9uRm9jdXMgZXZlbnRcbiAgICAgICAqL1xuICAgICAgX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN1Z2dlc3Rpb25zKGV2ZW50KTtcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQob3B0aW9uLCAnZm9jdXMnKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogR2VuZXJhdGUgYSBzdWdnZXN0aW9uIGlkIGZvciBhIGNlcnRhaW4gaW5kZXhcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBQb3NpdGlvbiBvZiB0aGUgZWxlbWVudCBpbiB0aGUgc3VnZ2VzdGlvbnMgbGlzdFxuICAgICAgICogQHJldHVybnMge3N0cmluZ30gYSB1bmlxdWUgaWQgYmFzZWQgb24gdGhlIF9pZEl0ZW1TZWVkIGFuZCB0aGUgcG9zaXRpb24gb2YgdGhhdCBlbGVtZW50IGluIHRoZSBzdWdnZXN0aW9ucyBwb3B1cFxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX2dldFN1Z2dlc3Rpb25JZDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZEl0ZW1TZWVkICsgJy0nICsgaW5kZXg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gaXRlbSBoZWlnaHQgaXMgY2hhbmdlZCwgdGhlIG1heEhlaWdodCBvZiB0aGUgc3VnZ2VzdGlvbldyYXBwZXIgbmVlZCB0byBiZSB1cGRhdGVkXG4gICAgICAgKi9cbiAgICAgIF9pdGVtSGVpZ2h0Q2hhbmdlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuX2l0ZW1IZWlnaHQgKiB0aGlzLm1heFZpZXdhYmxlSXRlbXMgKyAncHgnO1xuICAgICAgfSxcblxuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAqIFBVQkxJQ1xuICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB0aGUgY29tcG9uZW50J3MgY3VycmVudCBzdWdnZXN0aW9uc1xuICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICAgKi9cbiAgICAgIHN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHRoaXMuX2JpbmRTdWdnZXN0aW9ucyhhcnIpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlcyB0aGUgc3VnZ2VzdGlvbnMgcG9wdXBcbiAgICAgICAqL1xuICAgICAgaGlkZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUXVlcnkgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGVhY2gga2V5c3Ryb2tlIHRvIHF1ZXJ5IHRoZSBkYXRhIHNvdXJjZSBhbmQgcmV0dXJucyB0aGUgc3VnZ2VzdGlvbnMgdGhhdCBtYXRjaGVzXG4gICAgICAgKiB3aXRoIHRoZSBmaWx0ZXJpbmcgbG9naWMgaW5jbHVkZWQuXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhc291cmNlIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGl0ZW1zIGJlZm9yZSBmaWx0ZXJpbmdcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBDdXJyZW50IHZhbHVlIGluIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIG9ubHkgdGhvc2UgaXRlbXMgaW4gdGhlIGRhdGEgc291cmNlIHRoYXQgbWF0Y2hlcyB0aGUgZmlsdGVyaW5nIGxvZ2ljLlxuICAgICAgICovXG4gICAgICBxdWVyeUZuOiBmdW5jdGlvbiAoZGF0YXNvdXJjZSwgcXVlcnkpIHtcbiAgICAgICAgdmFyIHF1ZXJ5UmVzdWx0ID0gW107XG5cbiAgICAgICAgZGF0YXNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgdmFyIG9ialRleHQsIG9ialZhbHVlO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqVGV4dCA9IGl0ZW1bdGhpcy50ZXh0UHJvcGVydHldO1xuICAgICAgICAgICAgb2JqVmFsdWUgPSBpdGVtW3RoaXMudmFsdWVQcm9wZXJ0eV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialRleHQgPSBpdGVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBvYmpWYWx1ZSA9IG9ialRleHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9ialRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTk9URTogdGhlIHN0cnVjdHVyZSBvZiB0aGUgcmVzdWx0IG9iamVjdCBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgdGVtcGxhdGUuIEZvciBjdXN0b20gdGVtcGxhdGVzLCB5b3VcbiAgICAgICAgICAgIC8vIG1pZ2h0IG5lZWQgdG8gcmV0dXJuIG1vcmUgZGF0YVxuICAgICAgICAgICAgcXVlcnlSZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIHRleHQ6IG9ialRleHQsXG4gICAgICAgICAgICAgIHZhbHVlOiBvYmpWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBxdWVyeVJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIGEgc2VsZWN0aW9uIGlzIG1hZGVcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXNlbGVjdGVkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgY2hhbmdlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1jaGFuZ2VcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtZm9jdXNcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBibHVyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgcmVzZXQvY2xlYXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXJlc2V0LWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cbiAgICB9KTtcbiAgfSgpKTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuaHRtbFwiPlxuXG48IS0tXG5gUGFwZXJJdGVtQmVoYXZpb3JgIGlzIGEgY29udmVuaWVuY2UgYmVoYXZpb3Igc2hhcmVkIGJ5IDxwYXBlci1pdGVtPiBhbmRcbjxwYXBlci1pY29uLWl0ZW0+IHRoYXQgbWFuYWdlcyB0aGUgc2hhcmVkIGNvbnRyb2wgc3RhdGVzIGFuZCBhdHRyaWJ1dGVzIG9mXG50aGUgaXRlbXMuXG4tLT5cblxuPHNjcmlwdD5cbiAgLyoqIEBwb2x5bWVyQmVoYXZpb3IgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvciAqL1xuICBQb2x5bWVyLlBhcGVySXRlbUJlaGF2aW9ySW1wbCA9IHtcbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICB0YWJpbmRleDogJzAnXG4gICAgfVxuICB9O1xuXG4gIC8qKiBAcG9seW1lckJlaGF2aW9yICovXG4gIFBvbHltZXIuUGFwZXJJdGVtQmVoYXZpb3IgPSBbXG4gICAgUG9seW1lci5Jcm9uQnV0dG9uU3RhdGUsXG4gICAgUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlLFxuICAgIFBvbHltZXIuUGFwZXJJdGVtQmVoYXZpb3JJbXBsXG4gIF07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJlaGF2aW9yLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL3BhcGVyLXN0eWxlcy9jb2xvci5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+LnBhcGVyLWl0ZW0sOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OnZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCw0OHB4KTtwYWRkaW5nOjAgMTZweH0ucGFwZXItaXRlbXtAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO3RleHQtYWxpZ246bGVmdH0ucGFwZXItaXRlbVtoaWRkZW5dLDpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQsOmhvc3QoLmlyb24tc2VsZWN0ZWQpe2ZvbnQtd2VpZ2h0OnZhcigtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0LGJvbGQpO0BhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7fS5wYXBlci1pdGVtW2Rpc2FibGVkXSw6aG9zdChbZGlzYWJsZWRdKXtjb2xvcjp2YXIoLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yLHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpKTtAYXBwbHkgLS1wYXBlci1pdGVtLWRpc2FibGVkO30ucGFwZXItaXRlbTpmb2N1cyw6aG9zdCg6Zm9jdXMpe3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6MDtAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQ7fS5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSw6aG9zdCg6Zm9jdXMpOmJlZm9yZXtAYXBwbHkgLS1sYXlvdXQtZml0O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2NvbnRlbnQ6Jyc7b3BhY2l0eTp2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7cG9pbnRlci1ldmVudHM6bm9uZTtAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO308L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5odG1sIiwiXG5yZXF1aXJlKCcuLi9wYXBlci1zdHlsZXMvc2hhZG93Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1wYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT46aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtlbGV2YXRpb249XFxcIjFcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjJcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi00ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjNcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjRcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjVcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO308L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2lyb24taWNvbi9pcm9uLWljb24uaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPW1hcHMgc2l6ZT0yND4gPHN2Zz48ZGVmcz4gPGcgaWQ9YWRkLWxvY2F0aW9uPjxwYXRoIGQ9XFxcIk0xMiAyQzguMTQgMiA1IDUuMTQgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg2LTMuMTQtNy03LTd6bTQgOGgtM3YzaC0ydi0zSDhWOGgzVjVoMnYzaDN2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJlZW5oZXJlPjxwYXRoIGQ9XFxcIk0xOSAxSDVjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMyAxNS45M2MwIC42OS4zNSAxLjMuODggMS42NkwxMiAyM2w4LjExLTUuNDFjLjUzLS4zNi44OC0uOTcuODgtMS42NkwyMSAzYzAtMS4xLS45LTItMi0yem0tOSAxNWwtNS01IDEuNDEtMS40MUwxMCAxMy4xN2w3LjU5LTcuNTlMMTkgN2wtOSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucz48cGF0aCBkPVxcXCJNMjEuNzEgMTEuMjlsLTktOWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTkgOWMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWw5IDljLjM5LjM5IDEuMDIuMzkgMS40MSAwbDktOWMuMzktLjM4LjM5LTEuMDEgMC0xLjQxek0xNCAxNC41VjEyaC00djNIOHYtNGMwLS41NS40NS0xIDEtMWg1VjcuNWwzLjUgMy41LTMuNSAzLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kaXJlY3Rpb25zLWJpa2U+PHBhdGggZD1cXFwiTTE1LjUgNS41YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnpNNSAxMmMtMi44IDAtNSAyLjItNSA1czIuMiA1IDUgNSA1LTIuMiA1LTUtMi4yLTUtNS01em0wIDguNWMtMS45IDAtMy41LTEuNi0zLjUtMy41czEuNi0zLjUgMy41LTMuNSAzLjUgMS42IDMuNSAzLjUtMS42IDMuNS0zLjUgMy41em01LjgtMTBsMi40LTIuNC44LjhjMS4zIDEuMyAzIDIuMSA1LjEgMi4xVjljLTEuNSAwLTIuNy0uNi0zLjYtMS41bC0xLjktMS45Yy0uNS0uNC0xLS42LTEuNi0uNnMtMS4xLjItMS40LjZMNy44IDguNGMtLjQuNC0uNi45LS42IDEuNCAwIC42LjIgMS4xLjYgMS40TDExIDE0djVoMnYtNi4ybC0yLjItMi4zek0xOSAxMmMtMi44IDAtNSAyLjItNSA1czIuMiA1IDUgNSA1LTIuMiA1LTUtMi4yLTUtNS01em0wIDguNWMtMS45IDAtMy41LTEuNi0zLjUtMy41czEuNi0zLjUgMy41LTMuNSAzLjUgMS42IDMuNSAzLjUtMS42IDMuNS0zLjUgMy41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1ib2F0PjxwYXRoIGQ9XFxcIk0yMCAyMWMtMS4zOSAwLTIuNzgtLjQ3LTQtMS4zMi0yLjQ0IDEuNzEtNS41NiAxLjcxLTggMEM2Ljc4IDIwLjUzIDUuMzkgMjEgNCAyMUgydjJoMmMxLjM4IDAgMi43NC0uMzUgNC0uOTkgMi41MiAxLjI5IDUuNDggMS4yOSA4IDAgMS4yNi42NSAyLjYyLjk5IDQgLjk5aDJ2LTJoLTJ6TTMuOTUgMTlINGMxLjYgMCAzLjAyLS44OCA0LTIgLjk4IDEuMTIgMi40IDIgNCAyczMuMDItLjg4IDQtMmMuOTggMS4xMiAyLjQgMiA0IDJoLjA1bDEuODktNi42OGMuMDgtLjI2LjA2LS41NC0uMDYtLjc4cy0uMzQtLjQyLS42LS41TDIwIDEwLjYyVjZjMC0xLjEtLjktMi0yLTJoLTNWMUg5djNINmMtMS4xIDAtMiAuOS0yIDJ2NC42MmwtMS4yOS40MmMtLjI2LjA4LS40OC4yNi0uNi41cy0uMTUuNTItLjA2Ljc4TDMuOTUgMTl6TTYgNmgxMnYzLjk3TDEyIDggNiA5Ljk3VjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kaXJlY3Rpb25zLWJ1cz48cGF0aCBkPVxcXCJNNCAxNmMwIC44OC4zOSAxLjY3IDEgMi4yMlYyMGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWg4djFjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTEuNzhjLjYxLS41NSAxLTEuMzQgMS0yLjIyVjZjMC0zLjUtMy41OC00LTgtNHMtOCAuNS04IDR2MTB6bTMuNSAxYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNi42NyAxNCA3LjUgMTRzMS41LjY3IDEuNSAxLjVTOC4zMyAxNyA3LjUgMTd6bTkgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6bTEuNS02SDZWNmgxMnY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1jYXI+PHBhdGggZD1cXFwiTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNWgtMTFjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTJ2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTMgNi41IDEzczEuNS42NyAxLjUgMS41UzcuMzMgMTYgNi41IDE2em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwxLjUtNC41aDExTDE5IDExSDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kaXJlY3Rpb25zLXJhaWx3YXk+PHBhdGggZD1cXFwiTTQgMTUuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgxMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY1YzAtMy41LTMuNTgtNC04LTRzLTggLjUtOCA0djEwLjV6bTggMS41Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptNi03SDZWNWgxMnY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1ydW4+PHBhdGggZD1cXFwiTTEzLjQ5IDUuNDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0tMy42IDEzLjlsMS00LjQgMi4xIDJ2Nmgydi03LjVsLTIuMS0yIC42LTNjMS4zIDEuNSAzLjMgMi41IDUuNSAyLjV2LTJjLTEuOSAwLTMuNS0xLTQuMy0yLjRsLTEtMS42Yy0uNC0uNi0xLTEtMS43LTEtLjMgMC0uNS4xLS44LjFsLTUuMiAyLjJ2NC43aDJ2LTMuNGwxLjgtLjctMS42IDguMS00LjktMS0uNCAyIDcgMS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1zdWJ3YXk+PHBhdGggZD1cXFwiTTEyIDJjLTQuNDIgMC04IC41LTggNHY5LjVDNCAxNy40MyA1LjU3IDE5IDcuNSAxOUw2IDIwLjV2LjVoMTJ2LS41TDE2LjUgMTljMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVWNmMwLTMuNS0zLjU4LTQtOC00ek03LjUgMTdjLS44MyAwLTEuNS0uNjctMS41LTEuNVM2LjY3IDE0IDcuNSAxNHMxLjUuNjcgMS41IDEuNVM4LjMzIDE3IDcuNSAxN3ptMy41LTZINlY2aDV2NXptNS41IDZjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xLjUtNmgtNVY2aDV2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtdHJhbnNpdD48cGF0aCBkPVxcXCJNMTIgMmMtNC40MiAwLTggLjUtOCA0djkuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgxMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY2YzAtMy41LTMuNTgtNC04LTR6TTcuNSAxN2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em0zLjUtNkg2VjZoNXY1em01LjUgNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6bTEuNS02aC01VjZoNXY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy13YWxrPjxwYXRoIGQ9XFxcIk0xMy41IDUuNWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTkuOCA4LjlMNyAyM2gyLjFsMS44LTggMi4xIDJ2Nmgydi03LjVsLTIuMS0yIC42LTNDMTQuOCAxMiAxNi44IDEzIDE5IDEzdi0yYy0xLjkgMC0zLjUtMS00LjMtMi40bC0xLTEuNmMtLjQtLjYtMS0xLTEuNy0xLS4zIDAtLjUuMS0uOC4xTDYgOC4zVjEzaDJWOS42bDEuOC0uN1xcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZWRpdC1sb2NhdGlvbj48cGF0aCBkPVxcXCJNMTIgMkM4LjE0IDIgNSA1LjE0IDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ni0zLjE0LTctNy03em0tMS41NiAxMEg5di0xLjQ0bDMuMzUtMy4zNCAxLjQzIDEuNDNMMTAuNDQgMTJ6bTQuNDUtNC40NWwtLjcuNy0xLjQ0LTEuNDQuNy0uN2MuMTUtLjE1LjM5LS4xNS41NCAwbC45LjljLjE1LjE1LjE1LjM5IDAgLjU0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXYtc3RhdGlvbj48cGF0aCBkPVxcXCJNMTkuNzcgNy4yM2wuMDEtLjAxLTMuNzItMy43MkwxNSA0LjU2bDIuMTEgMi4xMWMtLjk0LjM2LTEuNjEgMS4yNi0xLjYxIDIuMzMgMCAxLjM4IDEuMTIgMi41IDIuNSAyLjUuMzYgMCAuNjktLjA4IDEtLjIxdjcuMjFjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFWMTRjMC0xLjEtLjktMi0yLTJoLTFWNWMwLTEuMS0uOS0yLTItMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmgxMHYtNy41aDEuNXY1YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41czIuNS0xLjEyIDIuNS0yLjVWOWMwLS42OS0uMjgtMS4zMi0uNzMtMS43N3pNMTggMTBjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpNOCAxOHYtNC41SDZMMTAgNnY1aDJsLTQgN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaWdodD48cGF0aCBkPVxcXCJNMTAuMTggOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMSAxNnYtMmwtOC01VjMuNWMwLS44My0uNjctMS41LTEuNS0xLjVTMTAgMi42NyAxMCAzLjVWOWwtOCA1djJsOC0yLjVWMTlsLTIgMS41VjIybDMuNS0xIDMuNSAxdi0xLjVMMTMgMTl2LTUuNWw4IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvdGVsPjxwYXRoIGQ9XFxcIk03IDEzYzEuNjYgMCAzLTEuMzQgMy0zUzguNjYgNyA3IDdzLTMgMS4zNC0zIDMgMS4zNCAzIDMgM3ptMTItNmgtOHY3SDNWNUgxdjE1aDJ2LTNoMTh2M2gydi05YzAtMi4yMS0xLjc5LTQtNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGF5ZXJzPjxwYXRoIGQ9XFxcIk0xMS45OSAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDktNy0xLjYzLTEuMjctNy4zOCA1Ljc0ek0xMiAxNmw3LjM2LTUuNzNMMjEgOWwtOS03LTkgNyAxLjYzIDEuMjdMMTIgMTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYXllcnMtY2xlYXI+PHBhdGggZD1cXFwiTTE5LjgxIDE0Ljk5bDEuMTktLjkyLTEuNDMtMS40My0xLjE5LjkyIDEuNDMgMS40M3ptLS40NS00LjcyTDIxIDlsLTktNy0yLjkxIDIuMjcgNy44NyA3Ljg4IDIuNC0xLjg4ek0zLjI3IDFMMiAyLjI3bDQuMjIgNC4yMkwzIDlsMS42MyAxLjI3TDEyIDE2bDIuMS0xLjYzIDEuNDMgMS40M0wxMiAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDQuOTUtMy44NUwyMC43MyAyMSAyMiAxOS43MyAzLjI3IDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1hY3Rpdml0eT48cGF0aCBkPVxcXCJNMjAgMTJjMC0xLjEuOS0yIDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJ2NGMxLjEgMCAxLjk5LjkgMS45OSAycy0uODkgMi0yIDJ2NGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0ydi00Yy0xLjEgMC0yLS45LTItMnptLTQuNDIgNC44TDEyIDE0LjVsLTMuNTggMi4zIDEuMDgtNC4xMi0zLjI5LTIuNjkgNC4yNC0uMjVMMTIgNS44bDEuNTQgMy45NSA0LjI0LjI1LTMuMjkgMi42OSAxLjA5IDQuMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1haXJwb3J0PjxwYXRoIGQ9XFxcIk0yMSAxNnYtMmwtOC01VjMuNWMwLS44My0uNjctMS41LTEuNS0xLjVTMTAgMi42NyAxMCAzLjVWOWwtOCA1djJsOC0yLjVWMTlsLTIgMS41VjIybDMuNS0xIDMuNSAxdi0xLjVMMTMgMTl2LTUuNWw4IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWF0bT48cGF0aCBkPVxcXCJNMTEgMTdoMnYtMWgxYy41NSAwIDEtLjQ1IDEtMXYtM2MwLS41NS0uNDUtMS0xLTFoLTN2LTFoNFY4aC0yVjdoLTJ2MWgtMWMtLjU1IDAtMSAuNDUtMSAxdjNjMCAuNTUuNDUgMSAxIDFoM3YxSDl2MmgydjF6bTktMTNINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDRWNmgxNnYxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWJhcj48cGF0aCBkPVxcXCJNMjEgNVYzSDN2Mmw4IDl2NUg2djJoMTJ2LTJoLTV2LTVsOC05ek03LjQzIDdMNS42NiA1aDEyLjY5bC0xLjc4IDJINy40M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWNhZmU+PHBhdGggZD1cXFwiTTIwIDNINHYxMGMwIDIuMjEgMS43OSA0IDQgNGg2YzIuMjEgMCA0LTEuNzkgNC00di0zaDJjMS4xMSAwIDItLjg5IDItMlY1YzAtMS4xMS0uODktMi0yLTJ6bTAgNWgtMlY1aDJ2M3pNMiAyMWgxOHYtMkgydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1jYXItd2FzaD48cGF0aCBkPVxcXCJNMTcgNWMuODMgMCAxLjUtLjY3IDEuNS0xLjUgMC0xLTEuNS0yLjctMS41LTIuN3MtMS41IDEuNy0xLjUgMi43YzAgLjgzLjY3IDEuNSAxLjUgMS41em0tNSAwYy44MyAwIDEuNS0uNjcgMS41LTEuNSAwLTEtMS41LTIuNy0xLjUtMi43cy0xLjUgMS43LTEuNSAyLjdjMCAuODMuNjcgMS41IDEuNSAxLjV6TTcgNWMuODMgMCAxLjUtLjY3IDEuNS0xLjVDOC41IDIuNSA3IC44IDcgLjhTNS41IDIuNSA1LjUgMy41QzUuNSA0LjMzIDYuMTcgNSA3IDV6bTExLjkyIDMuMDFDMTguNzIgNy40MiAxOC4xNiA3IDE3LjUgN2gtMTFjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTR2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxOGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTUgNi41IDE1czEuNS42NyAxLjUgMS41UzcuMzMgMTggNi41IDE4em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxM2wxLjUtNC41aDExTDE5IDEzSDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1jb252ZW5pZW5jZS1zdG9yZT48cGF0aCBkPVxcXCJNMTkgN1Y0SDV2M0gydjEzaDh2LTRoNHY0aDhWN2gtM3ptLTggM0g5djFoMnYxSDhWOWgyVjhIOFY3aDN2M3ptNSAyaC0xdi0yaC0yVjdoMXYyaDFWN2gxdjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1kaW5pbmc+PHBhdGggZD1cXFwiTTguMSAxMy4zNGwyLjgzLTIuODNMMy45MSAzLjVjLTEuNTYgMS41Ni0xLjU2IDQuMDkgMCA1LjY2bDQuMTkgNC4xOHptNi43OC0xLjgxYzEuNTMuNzEgMy42OC4yMSA1LjI3LTEuMzggMS45MS0xLjkxIDIuMjgtNC42NS44MS02LjEyLTEuNDYtMS40Ni00LjItMS4xLTYuMTIuODEtMS41OSAxLjU5LTIuMDkgMy43NC0xLjM4IDUuMjdMMy43IDE5Ljg3bDEuNDEgMS40MUwxMiAxNC40MWw2Ljg4IDYuODggMS40MS0xLjQxTDEzLjQxIDEzbDEuNDctMS40N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWRyaW5rPjxwYXRoIGQ9XFxcIk0zIDJsMi4wMSAxOC4yM0M1LjEzIDIxLjIzIDUuOTcgMjIgNyAyMmgxMGMxLjAzIDAgMS44Ny0uNzcgMS45OS0xLjc3TDIxIDJIM3ptOSAxN2MtMS42NiAwLTMtMS4zNC0zLTMgMC0yIDMtNS40IDMtNS40czMgMy40IDMgNS40YzAgMS42Ni0xLjM0IDMtMyAzem02LjMzLTExSDUuNjdsLS40NC00aDEzLjUzbC0uNDMgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWZsb3Jpc3Q+PHBhdGggZD1cXFwiTTEyIDIyYzQuOTcgMCA5LTQuMDMgOS05LTQuOTcgMC05IDQuMDMtOSA5ek01LjYgMTAuMjVjMCAxLjM4IDEuMTIgMi41IDIuNSAyLjUuNTMgMCAxLjAxLS4xNiAxLjQyLS40NGwtLjAyLjE5YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41czIuNS0xLjEyIDIuNS0yLjVsLS4wMi0uMTljLjQuMjguODkuNDQgMS40Mi40NCAxLjM4IDAgMi41LTEuMTIgMi41LTIuNSAwLTEtLjU5LTEuODUtMS40My0yLjI1Ljg0LS40IDEuNDMtMS4yNSAxLjQzLTIuMjUgMC0xLjM4LTEuMTItMi41LTIuNS0yLjUtLjUzIDAtMS4wMS4xNi0xLjQyLjQ0bC4wMi0uMTlDMTQuNSAyLjEyIDEzLjM4IDEgMTIgMVM5LjUgMi4xMiA5LjUgMy41bC4wMi4xOWMtLjQtLjI4LS44OS0uNDQtMS40Mi0uNDQtMS4zOCAwLTIuNSAxLjEyLTIuNSAyLjUgMCAxIC41OSAxLjg1IDEuNDMgMi4yNS0uODQuNC0xLjQzIDEuMjUtMS40MyAyLjI1ek0xMiA1LjVjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVzLTEuMTIgMi41LTIuNSAyLjVTOS41IDkuMzggOS41IDhzMS4xMi0yLjUgMi41LTIuNXpNMyAxM2MwIDQuOTcgNC4wMyA5IDkgOSAwLTQuOTctNC4wMy05LTktOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWdhcy1zdGF0aW9uPjxwYXRoIGQ9XFxcIk0xOS43NyA3LjIzbC4wMS0uMDEtMy43Mi0zLjcyTDE1IDQuNTZsMi4xMSAyLjExYy0uOTQuMzYtMS42MSAxLjI2LTEuNjEgMi4zMyAwIDEuMzggMS4xMiAyLjUgMi41IDIuNS4zNiAwIC42OS0uMDggMS0uMjF2Ny4yMWMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMVYxNGMwLTEuMS0uOS0yLTItMmgtMVY1YzAtMS4xLS45LTItMi0ySDZjLTEuMSAwLTIgLjktMiAydjE2aDEwdi03LjVoMS41djVjMCAxLjM4IDEuMTIgMi41IDIuNSAyLjVzMi41LTEuMTIgMi41LTIuNVY5YzAtLjY5LS4yOC0xLjMyLS43My0xLjc3ek0xMiAxMEg2VjVoNnY1em02IDBjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWdyb2Nlcnktc3RvcmU+PHBhdGggZD1cXFwiTTcgMThjLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6TTEgMnYyaDJsMy42IDcuNTktMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDEydi0ySDcuNDJjLS4xNCAwLS4yNS0uMTEtLjI1LS4yNWwuMDMtLjEyLjktMS42M2g3LjQ1Yy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg1LjIxbC0uOTQtMkgxem0xNiAxNmMtMS4xIDAtMS45OS45LTEuOTkgMnMuODkgMiAxLjk5IDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1ob3NwaXRhbD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMSAxMWgtNHY0aC00di00SDZ2LTRoNFY2aDR2NGg0djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1ob3RlbD48cGF0aCBkPVxcXCJNNyAxM2MxLjY2IDAgMy0xLjM0IDMtM1M4LjY2IDcgNyA3cy0zIDEuMzQtMyAzIDEuMzQgMyAzIDN6bTEyLTZoLTh2N0gzVjVIMXYxNWgydi0zaDE4djNoMnYtOWMwLTIuMjEtMS43OS00LTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWxhdW5kcnktc2VydmljZT48cGF0aCBkPVxcXCJNOS4xNyAxNi44M2MxLjU2IDEuNTYgNC4xIDEuNTYgNS42NiAwIDEuNTYtMS41NiAxLjU2LTQuMSAwLTUuNjZsLTUuNjYgNS42NnpNMTggMi4wMUw2IDJjLTEuMTEgMC0yIC44OS0yIDJ2MTZjMCAxLjExLjg5IDIgMiAyaDEyYzEuMTEgMCAyLS44OSAyLTJWNGMwLTEuMTEtLjg5LTEuOTktMi0xLjk5ek0xMCA0Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6TTcgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem01IDE2Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLWxpYnJhcnk+PHBhdGggZD1cXFwiTTEyIDExLjU1QzkuNjQgOS4zNSA2LjQ4IDggMyA4djExYzMuNDggMCA2LjY0IDEuMzUgOSAzLjU1IDIuMzYtMi4xOSA1LjUyLTMuNTUgOS0zLjU1VjhjLTMuNDggMC02LjY0IDEuMzUtOSAzLjU1ek0xMiA4YzEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDMgMS4zNCAzIDMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLW1hbGw+PHBhdGggZD1cXFwiTTE5IDZoLTJjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNkg1Yy0xLjEgMC0xLjk5LjktMS45OSAyTDMgMjBjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0tNy0zYzEuNjYgMCAzIDEuMzQgMyAzSDljMC0xLjY2IDEuMzQtMyAzLTN6bTAgMTBjLTIuNzYgMC01LTIuMjQtNS01aDJjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtM2gyYzAgMi43Ni0yLjI0IDUtNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtbW92aWVzPjxwYXRoIGQ9XFxcIk0xOCAzdjJoLTJWM0g4djJINlYzSDR2MThoMnYtMmgydjJoOHYtMmgydjJoMlYzaC0yek04IDE3SDZ2LTJoMnYyem0wLTRINnYtMmgydjJ6bTAtNEg2VjdoMnYyem0xMCA4aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0yVjdoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtb2ZmZXI+PHBhdGggZD1cXFwiTTIxLjQxIDExLjU4bC05LTlDMTIuMDUgMi4yMiAxMS41NSAyIDExIDJINGMtMS4xIDAtMiAuOS0yIDJ2N2MwIC41NS4yMiAxLjA1LjU5IDEuNDJsOSA5Yy4zNi4zNi44Ni41OCAxLjQxLjU4LjU1IDAgMS4wNS0uMjIgMS40MS0uNTlsNy03Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0uNTUtLjIzLTEuMDYtLjU5LTEuNDJ6TTUuNSA3QzQuNjcgNyA0IDYuMzMgNCA1LjVTNC42NyA0IDUuNSA0IDcgNC42NyA3IDUuNSA2LjMzIDcgNS41IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wYXJraW5nPjxwYXRoIGQ9XFxcIk0xMyAzSDZ2MThoNHYtNmgzYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02em0uMiA4SDEwVjdoMy4yYzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXBoYXJtYWN5PjxwYXRoIGQ9XFxcIk0yMSA1aC0yLjY0bDEuMTQtMy4xNEwxNy4xNSAxbC0xLjQ2IDRIM3YybDIgNi0yIDZ2MmgxOHYtMmwtMi02IDItNlY1em0tNSA5aC0zdjNoLTJ2LTNIOHYtMmgzVjloMnYzaDN2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXBob25lPjxwYXRoIGQ9XFxcIk02LjYyIDEwLjc5YzEuNDQgMi44MyAzLjc2IDUuMTQgNi41OSA2LjU5bDIuMi0yLjJjLjI3LS4yNy42Ny0uMzYgMS4wMi0uMjQgMS4xMi4zNyAyLjMzLjU3IDMuNTcuNTcuNTUgMCAxIC40NSAxIDFWMjBjMCAuNTUtLjQ1IDEtMSAxLTkuMzkgMC0xNy03LjYxLTE3LTE3IDAtLjU1LjQ1LTEgMS0xaDMuNWMuNTUgMCAxIC40NSAxIDEgMCAxLjI1LjIgMi40NS41NyAzLjU3LjExLjM1LjAzLjc0LS4yNSAxLjAybC0yLjIgMi4yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtcGl6emE+PHBhdGggZD1cXFwiTTEyIDJDOC40MyAyIDUuMjMgMy41NCAzLjAxIDZMMTIgMjJsOC45OS0xNkMxOC43OCAzLjU1IDE1LjU3IDIgMTIgMnpNNyA3YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bTUgOGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wbGF5PjxwYXRoIGQ9XFxcIk0yMCAxMmMwLTEuMS45LTIgMi0yVjZjMC0xLjEtLjktMi0yLTJINGMtMS4xIDAtMS45OS45LTEuOTkgMnY0YzEuMSAwIDEuOTkuOSAxLjk5IDJzLS44OSAyLTIgMnY0YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJ2LTRjLTEuMSAwLTItLjktMi0yem0tNC40MiA0LjhMMTIgMTQuNWwtMy41OCAyLjMgMS4wOC00LjEyLTMuMjktMi42OSA0LjI0LS4yNUwxMiA1LjhsMS41NCAzLjk1IDQuMjQuMjUtMy4yOSAyLjY5IDEuMDkgNC4xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXBvc3Qtb2ZmaWNlPjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXByaW50c2hvcD48cGF0aCBkPVxcXCJNMTkgOEg1Yy0xLjY2IDAtMyAxLjM0LTMgM3Y2aDR2NGgxMnYtNGg0di02YzAtMS42Ni0xLjM0LTMtMy0zem0tMyAxMUg4di01aDh2NXptMy03Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6bS0xLTlINnY0aDEyVjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1zZWU+PGNpcmNsZSBjeD0xMiBjeT0xMiByPTMuMj48L2NpcmNsZT48cGF0aCBkPVxcXCJNOSAyTDcuMTcgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJoLTMuMTdMMTUgMkg5em0zIDE1Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXNoaXBwaW5nPjxwYXRoIGQ9XFxcIk0yMCA4aC0zVjRIM2MtMS4xIDAtMiAuOS0yIDJ2MTFoMmMwIDEuNjYgMS4zNCAzIDMgM3MzLTEuMzQgMy0zaDZjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtM2gydi01bC0zLTR6TTYgMTguNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6bTEzLjUtOWwxLjk2IDIuNUgxN1Y5LjVoMi41em0tMS41IDljLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtdGF4aT48cGF0aCBkPVxcXCJNMTguOTIgNi4wMUMxOC43MiA1LjQyIDE4LjE2IDUgMTcuNSA1SDE1VjNIOXYySDYuNWMtLjY2IDAtMS4yMS40Mi0xLjQyIDEuMDFMMyAxMnY4YzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi0xaDEydjFjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LThsLTIuMDgtNS45OXpNNi41IDE2Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNS42NyAxMyA2LjUgMTNzMS41LjY3IDEuNSAxLjVTNy4zMyAxNiA2LjUgMTZ6bTExIDBjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41ek01IDExbDEuNS00LjVoMTFMMTkgMTFINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1hcD48cGF0aCBkPVxcXCJNMjAuNSAzbC0uMTYuMDNMMTUgNS4xIDkgMyAzLjM2IDQuOWMtLjIxLjA3LS4zNi4yNS0uMzYuNDhWMjAuNWMwIC4yOC4yMi41LjUuNWwuMTYtLjAzTDkgMTguOWw2IDIuMSA1LjY0LTEuOWMuMjEtLjA3LjM2LS4yNS4zNi0uNDhWMy41YzAtLjI4LS4yMi0uNS0uNS0uNXpNMTUgMTlsLTYtMi4xMVY1bDYgMi4xMVYxOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW15LWxvY2F0aW9uPjxwYXRoIGQ9XFxcIk0xMiA4Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptOC45NCAzYy0uNDYtNC4xNy0zLjc3LTcuNDgtNy45NC03Ljk0VjFoLTJ2Mi4wNkM2LjgzIDMuNTIgMy41MiA2LjgzIDMuMDYgMTFIMXYyaDIuMDZjLjQ2IDQuMTcgMy43NyA3LjQ4IDcuOTQgNy45NFYyM2gydi0yLjA2YzQuMTctLjQ2IDcuNDgtMy43NyA3Ljk0LTcuOTRIMjN2LTJoLTIuMDZ6TTEyIDE5Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW5hdmlnYXRpb24+PHBhdGggZD1cXFwiTTEyIDJMNC41IDIwLjI5bC43MS43MUwxMiAxOGw2Ljc5IDMgLjcxLS43MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW5lYXItbWU+PHBhdGggZD1cXFwiTTIxIDNMMyAxMC41M3YuOThsNi44NCAyLjY1TDEyLjQ4IDIxaC45OEwyMSAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVyc29uLXBpbj48cGF0aCBkPVxcXCJNMTkgMkg1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoNGwzIDMgMy0zaDRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgMy4zYzEuNDkgMCAyLjcgMS4yMSAyLjcgMi43IDAgMS40OS0xLjIxIDIuNy0yLjcgMi43LTEuNDkgMC0yLjctMS4yMS0yLjctMi43IDAtMS40OSAxLjIxLTIuNyAyLjctMi43ek0xOCAxNkg2di0uOWMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2Ljl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJzb24tcGluLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM4LjE0IDIgNSA1LjE0IDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ni0zLjE0LTctNy03em0wIDJjMS4xIDAgMiAuOSAyIDIgMCAxLjExLS45IDItMiAycy0yLS44OS0yLTJjMC0xLjEuOS0yIDItMnptMCAxMGMtMS42NyAwLTMuMTQtLjg1LTQtMi4xNS4wMi0xLjMyIDIuNjctMi4wNSA0LTIuMDVzMy45OC43MyA0IDIuMDVjLS44NiAxLjMtMi4zMyAyLjE1LTQgMi4xNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBpbi1kcm9wPjxwYXRoIGQ9XFxcIk0xOCA4YzAtMy4zMS0yLjY5LTYtNi02UzYgNC42OSA2IDhjMCA0LjUgNiAxMSA2IDExczYtNi41IDYtMTF6bS04IDBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uODkgMi0yIDJjLTEuMSAwLTItLjktMi0yek01IDIwdjJoMTR2LTJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBsYWNlPjxwYXRoIGQ9XFxcIk0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6bTAgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJhdGUtcmV2aWV3PjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNNiAxNHYtMi40N2w2Ljg4LTYuODhjLjItLjIuNTEtLjIuNzEgMGwxLjc3IDEuNzdjLjIuMi4yLjUxIDAgLjcxTDguNDcgMTRINnptMTIgMGgtNy41bDItMkgxOHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVzdGF1cmFudD48cGF0aCBkPVxcXCJNMTEgOUg5VjJIN3Y3SDVWMkgzdjdjMCAyLjEyIDEuNjYgMy44NCAzLjc1IDMuOTdWMjJoMi41di05LjAzQzExLjM0IDEyLjg0IDEzIDExLjEyIDEzIDlWMmgtMnY3em01LTN2OGgyLjV2OEgyMVYyYy0yLjc2IDAtNSAyLjI0LTUgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlc3RhdXJhbnQtbWVudT48cGF0aCBkPVxcXCJNOC4xIDEzLjM0bDIuODMtMi44M0wzLjkxIDMuNWMtMS41NiAxLjU2LTEuNTYgNC4wOSAwIDUuNjZsNC4xOSA0LjE4em02Ljc4LTEuODFjMS41My43MSAzLjY4LjIxIDUuMjctMS4zOCAxLjkxLTEuOTEgMi4yOC00LjY1LjgxLTYuMTItMS40Ni0xLjQ2LTQuMi0xLjEtNi4xMi44MS0xLjU5IDEuNTktMi4wOSAzLjc0LTEuMzggNS4yN0wzLjcgMTkuODdsMS40MSAxLjQxTDEyIDE0LjQxbDYuODggNi44OCAxLjQxLTEuNDFMMTMuNDEgMTNsMS40Ny0xLjQ3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2F0ZWxsaXRlPjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpNNSA0Ljk5aDNDOCA2LjY1IDYuNjYgOCA1IDhWNC45OXpNNSAxMnYtMmMyLjc2IDAgNS0yLjI1IDUtNS4wMWgyQzEyIDguODYgOC44NyAxMiA1IDEyem0wIDZsMy41LTQuNSAyLjUgMy4wMUwxNC41IDEybDQuNSA2SDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdG9yZS1tYWxsLWRpcmVjdG9yeT48cGF0aCBkPVxcXCJNMjAgNEg0djJoMTZWNHptMSAxMHYtMmwtMS01SDRsLTEgNXYyaDF2NmgxMHYtNmg0djZoMnYtNmgxem0tOSA0SDZ2LTRoNnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RyZWV0dmlldz48cGF0aCBkPVxcXCJNMTIuNTYgMTQuMzNjLS4zNC4yNy0uNTYuNy0uNTYgMS4xN1YyMWg3YzEuMSAwIDItLjkgMi0ydi01Ljk4Yy0uOTQtLjMzLTEuOTUtLjUyLTMtLjUyLTIuMDMgMC0zLjkzLjctNS40NCAxLjgzelxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9MTggY3k9NiByPTU+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTExLjUgNmMwLTEuMDguMjctMi4xLjc0LTNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAuNTUuMjMgMS4wNS41OSAxLjQxbDkuODItOS44MkMxMi4yMyA5LjQyIDExLjUgNy44IDExLjUgNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YndheT48Y2lyY2xlIGN4PTE1LjUgY3k9MTYgcj0xPjwvY2lyY2xlPjxjaXJjbGUgY3g9OC41IGN5PTE2IHI9MT48L2NpcmNsZT48cGF0aCBkPVxcXCJNNy4wMSA5aDEwdjVoLTEwek0xNy44IDIuOEMxNiAyLjA5IDEzLjg2IDIgMTIgMmMtMS44NiAwLTQgLjA5LTUuOC44QzMuNTMgMy44NCAyIDYuMDUgMiA4Ljg2VjIyaDIwVjguODZjMC0yLjgxLTEuNTMtNS4wMi00LjItNi4wNnptLjIgMTMuMDhjMCAxLjQ1LTEuMTggMi42Mi0yLjYzIDIuNjJsMS4xMyAxLjEyVjIwSDE1bC0xLjUtMS41aC0yLjgzTDkuMTcgMjBINy41di0uMzhsMS4xMi0xLjEyQzcuMTggMTguNSA2IDE3LjMyIDYgMTUuODhWOWMwLTIuNjMgMy0zIDYtMyAzLjMyIDAgNiAuMzggNiAzdjYuODh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10ZXJyYWluPjxwYXRoIGQ9XFxcIk0xNCA2bC0zLjc1IDUgMi44NSAzLjgtMS42IDEuMkM5LjgxIDEzLjc1IDcgMTAgNyAxMGwtNiA4aDIyTDE0IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFmZmljPjxwYXRoIGQ9XFxcIk0yMCAxMGgtM1Y4Ljg2YzEuNzItLjQ1IDMtMiAzLTMuODZoLTNWNGMwLS41NS0uNDUtMS0xLTFIOGMtLjU1IDAtMSAuNDUtMSAxdjFINGMwIDEuODYgMS4yOCAzLjQxIDMgMy44NlYxMEg0YzAgMS44NiAxLjI4IDMuNDEgMyAzLjg2VjE1SDRjMCAxLjg2IDEuMjggMy40MSAzIDMuODZWMjBjMCAuNTUuNDUgMSAxIDFoOGMuNTUgMCAxLS40NSAxLTF2LTEuMTRjMS43Mi0uNDUgMy0yIDMtMy44NmgtM3YtMS4xNGMxLjcyLS40NSAzLTIgMy0zLjg2em0tOCA5Yy0xLjExIDAtMi0uOS0yLTJzLjg5LTIgMi0yYzEuMSAwIDIgLjkgMiAycy0uODkgMi0yIDJ6bTAtNWMtMS4xMSAwLTItLjktMi0ycy44OS0yIDItMmMxLjEgMCAyIC45IDIgMnMtLjg5IDItMiAyem0wLTVjLTEuMTEgMC0yLS45LTItMiAwLTEuMTEuODktMiAyLTIgMS4xIDAgMiAuODkgMiAyIDAgMS4xLS44OSAyLTIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYWluPjxwYXRoIGQ9XFxcIk0xMiAyYy00IDAtOCAuNS04IDR2OS41QzQgMTcuNDMgNS41NyAxOSA3LjUgMTlMNiAyMC41di41aDIuMjNsMi0ySDE0bDIgMmgydi0uNUwxNi41IDE5YzEuOTMgMCAzLjUtMS41NyAzLjUtMy41VjZjMC0zLjUtMy41OC00LTgtNHpNNy41IDE3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNi42NyAxNCA3LjUgMTRzMS41LjY3IDEuNSAxLjVTOC4zMyAxNyA3LjUgMTd6bTMuNS03SDZWNmg1djR6bTIgMFY2aDV2NGgtNXptMy41IDdjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhbT48cGF0aCBkPVxcXCJNMTkgMTYuOTRWOC41YzAtMi43OS0yLjYxLTMuNC02LjAxLTMuNDlsLjc2LTEuNTFIMTdWMkg3djEuNWg0Ljc1bC0uNzYgMS41MkM3Ljg2IDUuMTEgNSA1LjczIDUgOC41djguNDRjMCAxLjQ1IDEuMTkgMi42NiAyLjU5IDIuOTdMNiAyMS41di41aDIuMjNsMi0ySDE0bDIgMmgydi0uNUwxNi41IDIwaC0uMDhjMS42OSAwIDIuNTgtMS4zNyAyLjU4LTMuMDZ6bS03IDEuNTZjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em01LTQuNUg3VjloMTB2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYW5zZmVyLXdpdGhpbi1hLXN0YXRpb24+PHBhdGggZD1cXFwiTTE2LjQ5IDE1LjV2LTEuNzVMMTQgMTYuMjVsMi40OSAyLjVWMTdIMjJ2LTEuNXptMy4wMiA0LjI1SDE0djEuNWg1LjUxVjIzTDIyIDIwLjUgMTkuNTEgMTh6TTkuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek01Ljc1IDguOUwzIDIzaDIuMWwxLjc1LThMOSAxN3Y2aDJ2LTcuNTVMOC45NSAxMy40bC42LTNDMTAuODUgMTIgMTIuOCAxMyAxNSAxM3YtMmMtMS44NSAwLTMuNDUtMS00LjM1LTIuNDVsLS45NS0xLjZDOS4zNSA2LjM1IDguNyA2IDggNmMtLjI1IDAtLjUuMDUtLjc1LjE1TDIgOC4zVjEzaDJWOS42NWwxLjc1LS43NVxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9em9vbS1vdXQtbWFwPjxwYXRoIGQ9XFxcIk0xNSAzbDIuMyAyLjMtMi44OSAyLjg3IDEuNDIgMS40MkwxOC43IDYuNyAyMSA5VjN6TTMgOWwyLjMtMi4zIDIuODcgMi44OSAxLjQyLTEuNDJMNi43IDUuMyA5IDNIM3ptNiAxMmwtMi4zLTIuMyAyLjg5LTIuODctMS40Mi0xLjQyTDUuMyAxNy4zIDMgMTV2NnptMTItNmwtMi4zIDIuMy0yLjg3LTIuODktMS40MiAxLjQyIDIuODkgMi44N0wxNSAyMWg2elxcXCI+PC9wYXRoPjwvZz4gPC9kZWZzPjwvc3ZnPiA8L2lyb24taWNvbnNldC1zdmc+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWljb25zL21hcHMtaWNvbnMuaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=