webpackJsonp([3],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

__webpack_require__(120);

__webpack_require__(119);

__webpack_require__(122);

__webpack_require__(121);

__webpack_require__(124);

__webpack_require__(125);

__webpack_require__(36);

__webpack_require__(123);

__webpack_require__(129);

__webpack_require__(146);

__webpack_require__(149);

__webpack_require__(127);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=games-list> <template> <style include=shared-styles>:host{display:block;padding:0}.content{width:80%;margin-left:10%;padding:0 10px}iron-list{height:100vh;width:100%}</style> <paper-card class=content> <luding-search data={{data}} responseprop=games queryfunction=[[getBody]]> </luding-search> <games-listfragment data=[[data]]> </games-listfragment> </paper-card> </template> </dom-module>");

var GamesList = function (_Polymer$Element) {
  _inherits(GamesList, _Polymer$Element);

  function GamesList() {
    _classCallCheck(this, GamesList);

    return _possibleConstructorReturn(this, (GamesList.__proto__ || Object.getPrototypeOf(GamesList)).apply(this, arguments));
  }

  _createClass(GamesList, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(GamesList.prototype.__proto__ || Object.getPrototypeOf(GamesList.prototype), 'connectedCallback', this).call(this);
    }
  }, {
    key: 'inc',
    value: function inc(idx) {
      return idx + 1;
    }
  }, {
    key: 'getBody',
    value: function getBody(filterStr) {
      if (filterStr.length > 0) return {
        query: 'query {games(gamename:"' + filterStr + '") { gameid gamename year gamePublishers {   publishername   country   searchname } gameAuthors {   authorid   authorLastName   authorGivName   authorgames {     gamename   } } }}'
      };
      return {
        query: 'query {games { gameid gamename year gamePublishers {   publishername   country   searchname } gameAuthors {   authorid   authorLastName   authorGivName   authorgames {     gamename   } } }}'
      };
    }
  }, {
    key: 'navigate',
    value: function navigate(objid) {
      window.history.pushState({}, null, '/game/' + objid);
      window.dispatchEvent(new CustomEvent('location-changed'));
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'games-list';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        data: {
          type: Array,
          notify: true

        }
      };
    }
  }]);

  return GamesList;
}(Polymer.Element);

window.customElements.define(GamesList.is, GamesList);

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(139);

__webpack_require__(140);

__webpack_require__(8);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(131);

__webpack_require__(132);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(137);

__webpack_require__(138);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(0);

__webpack_require__(141);

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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(10);

__webpack_require__(6);

__webpack_require__(43);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(120);

__webpack_require__(36);

__webpack_require__(130);

__webpack_require__(144);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(126);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(22);

__webpack_require__(142);

__webpack_require__(143);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-spinner-lite> <template strip-whitespace=\"\"> <style include=paper-spinner-styles></style> <div id=spinnerContainer class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=__reset on-webkit-animation-end=__reset> <div class=spinner-layer> <div class=\"circle-clipper left\"></div> <div class=\"circle-clipper right\"></div> </div> </div> </template> </dom-module>");

Polymer({
  is: 'paper-spinner-lite',

  behaviors: [Polymer.PaperSpinnerBehavior]
});

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(6);

/**
`iron-a11y-keys` provides a cross-browser interface for processing
keyboard commands. The interface adheres to [WAI-ARIA best
practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
It uses an expressive syntax to filter key presses.

## Basic usage

The sample code below is a portion of a custom element. The goal is to call
the `onEnter` method whenever the `paper-input` element is in focus and
the `Enter` key is pressed.

    <iron-a11y-keys id="a11y" target="[[target]]" keys="enter"
                        on-keys-pressed="onEnter"></iron-a11y-keys>
    <paper-input id="input"
                 placeholder="Type something. Press enter. Check console."
                 value="{{userInput::input}}"></paper-input>

The custom element declares an `iron-a11y-keys` element that is bound to a
property called `target`. The `target` property
needs to evaluate to the `paper-input` node. `iron-a11y-keys` registers
an event handler for the target node using Polymer's [annotated event handler
syntax](https://www.polymer-project.org/1.0/docs/devguide/events.html#annotated-listeners). `{{userInput::input}}` sets the `userInput` property to the
user's input on each keystroke.

The last step is to link the two elements within the custom element's
registration.

    ...
    properties: {
      userInput: {
        type: String,
        notify: true,
      },
      target: {
        type: Object,
        value: function() {
          return this.$.input;
        }
      },
    },
    onEnter: function() {
      console.log(this.userInput);
    }
    ...

## The `keys` attribute

The `keys` attribute expresses what combination of keys triggers the event.

The attribute accepts a space-separated, plus-sign-concatenated
set of modifier keys and some common keyboard keys.

The common keys are: `a-z`, `0-9` (top row and number pad), `*` (shift 8 and
number pad), `F1-F12`, `Page Up`, `Page Down`, `Left Arrow`, `Right Arrow`,
`Down Arrow`, `Up Arrow`, `Home`, `End`, `Escape`, `Space`, `Tab`, `Enter`.

The modifier keys are: `Shift`, `Control`, `Alt`, `Meta`.

All keys are expected to be lowercase and shortened. E.g.
`Left Arrow` is `left`, `Page Down` is `pagedown`, `Control` is `ctrl`,
`F1` is `f1`, `Escape` is `esc`, etc.

### Grammar

Below is the [EBNF](http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form)
Grammar of the `keys` attribute.

    modifier = "shift" | "ctrl" | "alt" | "meta";
    ascii = ? /[a-z0-9]/ ? ;
    fnkey = ? f1 through f12 ? ;
    arrow = "up" | "down" | "left" | "right" ;
    key = "tab" | "esc" | "space" | "*" | "pageup" | "pagedown" |
          "home" | "end" | arrow | ascii | fnkey;
    event = "keypress" | "keydown" | "keyup";
    keycombo = { modifier, "+" }, key, [ ":", event ] ;
    keys = keycombo, { " ", keycombo } ;

### Example

Given the following value for `keys`:

`ctrl+shift+f7 up pagedown esc space alt+m`

The event is fired if any of the following key combinations are fired:
`Control` and `Shift` and `F7` keys, `Up Arrow` key, `Page Down` key,
`Escape` key, `Space` key, `Alt` and `M` keys.

### WAI-ARIA Slider Example

The following is an example of the set of keys that fulfills WAI-ARIA's
"slider" role [best
practices](http://www.w3.org/TR/wai-aria-practices/#slider):

    <iron-a11y-keys target="[[target]]" keys="left pagedown down"
                    on-keys-pressed="decrement"></iron-a11y-keys>
    <iron-a11y-keys target="[[target]]" keys="right pageup up"
                    on-keys-pressed="increment"></iron-a11y-keys>
    <iron-a11y-keys target="[[target]]" keys="home"
                    on-keys-pressed="setMin"></iron-a11y-keys>
    <iron-a11y-keys target="[[target]]" keys="end"
                    on-keys-pressed="setMax"></iron-a11y-keys>

The `target` properties must evaluate to a node. See the basic usage
example above.

Each of the values for the `on-keys-pressed` attributes must evalute
to methods. The `increment` method should move the slider a set amount
toward the maximum value. `decrement` should move the slider a set amount
toward the minimum value. `setMin` should move the slider to the minimum
value. `setMax` should move the slider to the maximum value.

@demo demo/index.html
*/

Polymer({
  is: 'iron-a11y-keys',

  behaviors: [Polymer.IronA11yKeysBehavior],

  properties: {
    /** @type {?Node} */
    target: {
      type: Object,
      observer: '_targetChanged'
    },

    /**
     * Space delimited list of keys where each key follows the format:
     * `[MODIFIER+]*KEY[:EVENT]`.
     * e.g. `keys="space ctrl+shift+tab enter:keyup"`.
     * More detail can be found in the "Grammar" section of the documentation
     */
    keys: {
      type: String,
      reflectToAttribute: true,
      observer: '_keysChanged'
    }
  },

  attached: function attached() {
    if (!this.target) {
      this.target = this.parentNode;
    }
  },

  _targetChanged: function _targetChanged(target) {
    this.keyEventTarget = target;
  },

  _keysChanged: function _keysChanged() {
    this.removeOwnKeyBindings();
    this.addOwnKeyBinding(this.keys, '_fireKeysPressed');
  },

  _fireKeysPressed: function _fireKeysPressed(event) {
    this.fire('keys-pressed', event.detail, {});
  }
});

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(38);

__webpack_require__(145);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ }),

/***/ 128:
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

__webpack_require__(119);

__webpack_require__(36);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=luding-card> <template> <style>:host{display:block}</style> <custom-style> <style is=custom-style>paper-icon-button.active{color:var(--paper-pink-500);--paper-icon-button-ink-color:var(--paper-indigo-500)}paper-icon-button.pink:hover{background-color:var(--paper-pink-500);color:#fff}paper-icon-button.blue{--paper-icon-button-ink-color:var(--paper-orange-500);background-color:var(--paper-light-blue-500);color:#fff;border-radius:3px;padding:2px}.rate{padding:0;margin-bottom:3px;width:100%}.rate-header{align-self:center;flex-grow:4}.title{@apply --paper-font-headline;font-size:140%}.subtitle{@apply --paper-font-subhead;color:var(--paper-grey-600)}.rate-name{margin:0}.card-content{padding:2px 5px;display:flex;flex-wrap:wrap;justify-content:space-between}paper-icon-button.rate-icon{--iron-icon-fill-color:white;--iron-icon-stroke-color:var(--paper-grey-600)}</style> </custom-style> <paper-card class=rate> <div class=card-content> <div class=rate-header> <h3 style=margin:0> <slot name=title class=title></slot> </h3> <slot name=subtitle class=subtitle></slot> </div> <div class=rate-name> <paper-icon-button class$=[[active]] right=\"\" icon=favorite on-tap=toggle></paper-icon-button> <paper-icon-button right=\"\" icon=star on-tap=toggle></paper-icon-button> <paper-icon-button right=\"\" icon=icons:arrow-forward on-tap=navigate> </paper-icon-button> <slot name=actions class=actions></slot> </div> </div> </paper-card> </template> </dom-module>");

/**
 * `luding-card` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */

var LudingCard = function (_Polymer$Element) {
    _inherits(LudingCard, _Polymer$Element);

    _createClass(LudingCard, null, [{
        key: 'is',

        /**
         * String providing the tag name to register the element under.
         */
        get: function get() {
            return 'luding-card';
        }

        /**
         * Object describing property-related metadata used by Polymer features
         */

    }, {
        key: 'properties',
        get: function get() {
            return {
                item: {
                    type: Array,
                    notify: true
                },
                objid: {
                    type: String,
                    value: ""
                },
                godetails: {
                    type: Function
                },
                active: {
                    type: String,
                    computed: 'isActive(item)'
                }
            };
        }

        /**
         * Instance of the element is created/upgraded. Use: initializing state,
         * set up event listeners, create shadow dom.
         * @constructor
         */

    }]);

    function LudingCard() {
        _classCallCheck(this, LudingCard);

        return _possibleConstructorReturn(this, (LudingCard.__proto__ || Object.getPrototypeOf(LudingCard)).call(this));
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */


    _createClass(LudingCard, [{
        key: 'ready',
        value: function ready() {
            _get(LudingCard.prototype.__proto__ || Object.getPrototypeOf(LudingCard.prototype), 'ready', this).call(this);

            Polymer.RenderStatus.afterNextRender(this, function () {});
        }
    }, {
        key: 'toggle',
        value: function toggle(event) {
            console.log(this.item);
            this.item.active = !this.item.active;
            event.target.toggleClass("active");
        }
    }, {
        key: 'navigate',
        value: function navigate(event) {
            this.godetails(this.item[this.objid]);
        }
    }, {
        key: 'isActive',
        value: function isActive(item) {
            return "activex";
        }
    }]);

    return LudingCard;
}(Polymer.Element);

window.customElements.define(LudingCard.is, LudingCard);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(39);

__webpack_require__(40);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=icons size=24> <svg><defs> <g id=3d-rotation><path d=\"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z\"></path></g> <g id=accessibility><path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"></path></g> <g id=accessible><circle cx=12 cy=4 r=2></circle><path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"></path></g> <g id=account-balance><path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"></path></g> <g id=account-balance-wallet><path d=\"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=account-box><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"></path></g> <g id=account-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"></path></g> <g id=add><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g> <g id=add-alert><path d=\"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z\"></path></g> <g id=add-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle-outline><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=add-shopping-cart><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"></path></g> <g id=alarm><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g> <g id=alarm-add><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g> <g id=alarm-off><path d=\"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z\"></path></g> <g id=alarm-on><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z\"></path></g> <g id=all-out><path d=\"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z\"></path></g> <g id=android><path d=\"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z\"></path></g> <g id=announcement><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z\"></path></g> <g id=apps><path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\"></path></g> <g id=archive><path d=\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"></path></g> <g id=arrow-back><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g> <g id=arrow-downward><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></g> <g id=arrow-drop-down><path d=\"M7 10l5 5 5-5z\"></path></g> <g id=arrow-drop-down-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z\"></path></g> <g id=arrow-drop-up><path d=\"M7 14l5-5 5 5z\"></path></g> <g id=arrow-forward><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path></g> <g id=arrow-upward><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></g> <g id=aspect-ratio><path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=assessment><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g> <g id=assignment><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></g> <g id=assignment-ind><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z\"></path></g> <g id=assignment-late><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g> <g id=assignment-return><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z\"></path></g> <g id=assignment-returned><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z\"></path></g> <g id=assignment-turned-in><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=attachment><path d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\"></path></g> <g id=autorenew><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"></path></g> <g id=backspace><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></g> <g id=backup><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=block><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z\"></path></g> <g id=book><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=bookmark><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=bookmark-border><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=bug-report><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"></path></g> <g id=build><path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"></path></g> <g id=cached><path d=\"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z\"></path></g> <g id=camera-enhance><path d=\"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z\"></path></g> <g id=cancel><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path></g> <g id=card-giftcard><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=card-membership><path d=\"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z\"></path></g> <g id=card-travel><path d=\"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z\"></path></g> <g id=change-history><path d=\"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z\"></path></g> <g id=check><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path></g> <g id=check-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=check-box-outline-blank><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=check-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=chevron-left><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g> <g id=chevron-right><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g> <g id=chrome-reader-mode><path d=\"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z\"></path></g> <g id=class><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=clear><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=close><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=cloud><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z\"></path></g> <g id=cloud-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z\"></path></g> <g id=cloud-done><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z\"></path></g> <g id=cloud-download><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\"></path></g> <g id=cloud-off><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z\"></path></g> <g id=cloud-queue><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"></path></g> <g id=cloud-upload><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=code><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></g> <g id=compare-arrows><path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"></path></g> <g id=content-copy><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path></g> <g id=content-cut><path d=\"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z\"></path></g> <g id=content-paste><path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path></g> <g id=copyright><path d=\"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=create><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g> <g id=create-new-folder><path d=\"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"></path></g> <g id=credit-card><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=dashboard><path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"></path></g> <g id=date-range><path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path></g> <g id=delete><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-forever><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-sweep><path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"></path></g> <g id=description><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"></path></g> <g id=dns><path d=\"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=done><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g> <g id=done-all><path d=\"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z\"></path></g> <g id=donut-large><path d=\"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z\"></path></g> <g id=donut-small><path d=\"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z\"></path></g> <g id=drafts><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"></path></g> <g id=eject><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"></path></g> <g id=error><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g> <g id=error-outline><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=euro-symbol><path d=\"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z\"></path></g> <g id=event><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g> <g id=event-seat><path d=\"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"></path></g> <g id=exit-to-app><path d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=expand-less><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path></g> <g id=expand-more><path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path></g> <g id=explore><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"></path></g> <g id=extension><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path></g> <g id=face><path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"></path></g> <g id=favorite><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"></path></g> <g id=favorite-border><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"></path></g> <g id=feedback><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g> <g id=file-download><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=file-upload><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g> <g id=filter-list><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path></g> <g id=find-in-page><path d=\"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"></path></g> <g id=find-replace><path d=\"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z\"></path></g> <g id=fingerprint><path d=\"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z\"></path></g> <g id=first-page><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"></path></g> <g id=flag><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g> <g id=flight-land><path d=\"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z\"></path></g> <g id=flight-takeoff><path d=\"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"></path></g> <g id=flip-to-back><path d=\"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z\"></path></g> <g id=flip-to-front><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z\"></path></g> <g id=folder><path d=\"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\"></path></g> <g id=folder-open><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path></g> <g id=folder-shared><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z\"></path></g> <g id=font-download><path d=\"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z\"></path></g> <g id=forward><path d=\"M12 8V4l8 8-8 8v-4H4V8z\"></path></g> <g id=fullscreen><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path></g> <g id=fullscreen-exit><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"></path></g> <g id=g-translate><path d=\"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z\"></path></g> <g id=gavel><path d=\"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z\"></path></g> <g id=gesture><path d=\"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z\"></path></g> <g id=get-app><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=gif><path d=\"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z\"></path></g> <g id=grade><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=group-work><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=help><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g> <g id=help-outline><path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path></g> <g id=highlight-off><path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=history><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=home><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"></path></g> <g id=hourglass-empty><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z\"></path></g> <g id=hourglass-full><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z\"></path></g> <g id=http><path d=\"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z\"></path></g> <g id=https><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=important-devices><path d=\"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"></path></g> <g id=inbox><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"></path></g> <g id=indeterminate-check-box><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"></path></g> <g id=info><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path></g> <g id=info-outline><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path></g> <g id=input><path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path></g> <g id=invert-colors><path d=\"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z\"></path></g> <g id=label><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z\"></path></g> <g id=label-outline><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"></path></g> <g id=language><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z\"></path></g> <g id=last-page><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"></path></g> <g id=launch><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=lightbulb-outline><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></g> <g id=line-style><path d=\"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z\"></path></g> <g id=line-weight><path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"></path></g> <g id=link><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g> <g id=list><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path></g> <g id=lock><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=lock-open><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z\"></path></g> <g id=lock-outline><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z\"></path></g> <g id=low-priority><path d=\"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z\"></path></g> <g id=loyalty><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z\"></path></g> <g id=mail><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread-mailbox><path d=\"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"></path></g> <g id=menu><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g> <g id=more-horiz><path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=more-vert><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=motorcycle><path d=\"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"></path></g> <g id=move-to-inbox><path d=\"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"></path></g> <g id=next-week><path d=\"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z\"></path></g> <g id=note-add><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"></path></g> <g id=offline-pin><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"></path></g> <g id=opacity><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"></path></g> <g id=open-in-browser><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"></path></g> <g id=open-in-new><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=open-with><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path></g> <g id=pageview><path d=\"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"></path></g> <g id=pan-tool><path d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path></g> <g id=payment><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=perm-camera-mic><path d=\"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z\"></path></g> <g id=perm-contact-calendar><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z\"></path></g> <g id=perm-data-setting><path d=\"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=perm-device-information><path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g> <g id=perm-identity><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g> <g id=perm-media><path d=\"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"></path></g> <g id=perm-phone-msg><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z\"></path></g> <g id=perm-scan-wifi><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g> <g id=pets><circle cx=4.5 cy=9.5 r=2.5></circle><circle cx=9 cy=5.5 r=2.5></circle><circle cx=15 cy=5.5 r=2.5></circle><circle cx=19.5 cy=9.5 r=2.5></circle><path d=\"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z\"></path></g> <g id=picture-in-picture><path d=\"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z\"></path></g> <g id=picture-in-picture-alt><path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"></path></g> <g id=play-for-work><path d=\"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z\"></path></g> <g id=polymer><path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"></path></g> <g id=power-settings-new><path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"></path></g> <g id=pregnant-woman><path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"></path></g> <g id=print><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g> <g id=query-builder><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=question-answer><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g> <g id=radio-button-checked><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=radio-button-unchecked><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=receipt><path d=\"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z\"></path></g> <g id=record-voice-over><circle cx=9 cy=9 r=4></circle><path d=\"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z\"></path></g> <g id=redeem><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=redo><path d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z\"></path></g> <g id=refresh><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g> <g id=remove><path d=\"M19 13H5v-2h14v2z\"></path></g> <g id=remove-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g> <g id=remove-circle-outline><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=remove-shopping-cart><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"></path></g> <g id=reorder><path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"></path></g> <g id=reply><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=reply-all><path d=\"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=report><path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z\"></path></g> <g id=report-problem><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=restore><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=restore-page><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"></path></g> <g id=room><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=rounded-corner><path d=\"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z\"></path></g> <g id=rowing><path d=\"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z\"></path></g> <g id=save><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path></g> <g id=schedule><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=search><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path></g> <g id=select-all><path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path></g> <g id=send><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"></path></g> <g id=settings><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path></g> <g id=settings-applications><path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z\"></path></g> <g id=settings-backup-restore><path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z\"></path></g> <g id=settings-bluetooth><path d=\"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z\"></path></g> <g id=settings-brightness><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z\"></path></g> <g id=settings-cell><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z\"></path></g> <g id=settings-ethernet><path d=\"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"></path></g> <g id=settings-input-antenna><path d=\"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z\"></path></g> <g id=settings-input-component><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-composite><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-hdmi><path d=\"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"></path></g> <g id=settings-input-svideo><path d=\"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g> <g id=settings-overscan><path d=\"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=settings-phone><path d=\"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z\"></path></g> <g id=settings-power><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"></path></g> <g id=settings-remote><path d=\"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z\"></path></g> <g id=settings-voice><path d=\"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z\"></path></g> <g id=shop><path d=\"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z\"></path></g> <g id=shop-two><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"></path></g> <g id=shopping-basket><path d=\"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=shopping-cart><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=sort><path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"></path></g> <g id=speaker-notes><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"></path></g> <g id=speaker-notes-off><path d=\"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z\"></path></g> <g id=spellcheck><path d=\"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z\"></path></g> <g id=star><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=star-border><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=star-half><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=stars><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"></path></g> <g id=store><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g> <g id=subdirectory-arrow-left><path d=\"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"></path></g> <g id=subdirectory-arrow-right><path d=\"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"></path></g> <g id=subject><path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"></path></g> <g id=supervisor-account><path d=\"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z\"></path></g> <g id=swap-horiz><path d=\"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"></path></g> <g id=swap-vert><path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path></g> <g id=swap-vertical-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path></g> <g id=system-update-alt><path d=\"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z\"></path></g> <g id=tab><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z\"></path></g> <g id=tab-unselected><path d=\"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g> <g id=text-format><path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"></path></g> <g id=theaters><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g> <g id=thumb-down><path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g> <g id=thumb-up><path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g> <g id=thumbs-up-down><path d=\"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z\"></path></g> <g id=timeline><path d=\"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z\"></path></g> <g id=toc><path d=\"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z\"></path></g> <g id=today><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></g> <g id=toll><path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z\"></path></g> <g id=touch-app><path d=\"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z\"></path></g> <g id=track-changes><path d=\"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z\"></path></g> <g id=translate><path d=\"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z\"></path></g> <g id=trending-down><path d=\"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z\"></path></g> <g id=trending-flat><path d=\"M22 12l-4-4v3H3v2h15v3z\"></path></g> <g id=trending-up><path d=\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z\"></path></g> <g id=turned-in><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=turned-in-not><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=unarchive><path d=\"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z\"></path></g> <g id=undo><path d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\"></path></g> <g id=unfold-less><path d=\"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z\"></path></g> <g id=unfold-more><path d=\"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z\"></path></g> <g id=update><path d=\"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z\"></path></g> <g id=verified-user><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=view-agenda><path d=\"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z\"></path></g> <g id=view-array><path d=\"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z\"></path></g> <g id=view-carousel><path d=\"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z\"></path></g> <g id=view-column><path d=\"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z\"></path></g> <g id=view-day><path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"></path></g> <g id=view-headline><path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"></path></g> <g id=view-list><path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\"></path></g> <g id=view-module><path d=\"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z\"></path></g> <g id=view-quilt><path d=\"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z\"></path></g> <g id=view-stream><path d=\"M4 18h17v-6H4v6zM4 5v6h17V5H4z\"></path></g> <g id=view-week><path d=\"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z\"></path></g> <g id=visibility><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g> <g id=visibility-off><path d=\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\"></path></g> <g id=warning><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=watch-later><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"></path></g> <g id=weekend><path d=\"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z\"></path></g> <g id=work><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"></path></g> <g id=youtube-searched-for><path d=\"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z\"></path></g> <g id=zoom-in><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z\"></path></g> <g id=zoom-out><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ }),

/***/ 131:
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(133);

__webpack_require__(134);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(11);

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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(6);

__webpack_require__(9);

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

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(37);

__webpack_require__(128);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(8);

__webpack_require__(37);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(8);

__webpack_require__(37);

__webpack_require__(128);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(38);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-material-styles> <template> <style>:host,html{--paper-material:{display:block;position:relative};--paper-material-elevation-1:{@apply --shadow-elevation-2dp;};--paper-material-elevation-2:{@apply --shadow-elevation-4dp;};--paper-material-elevation-3:{@apply --shadow-elevation-6dp;};--paper-material-elevation-4:{@apply --shadow-elevation-8dp;};--paper-material-elevation-5:{@apply --shadow-elevation-16dp;};}.paper-material,:host(.paper-material){@apply --paper-material;}.paper-material[elevation=\"1\"],:host(.paper-material[elevation=\"1\"]){@apply --paper-material-elevation-1;}.paper-material[elevation=\"2\"],:host(.paper-material[elevation=\"2\"]){@apply --paper-material-elevation-2;}.paper-material[elevation=\"3\"],:host(.paper-material[elevation=\"3\"]){@apply --paper-material-elevation-3;}.paper-material[elevation=\"4\"],:host(.paper-material[elevation=\"4\"]){@apply --paper-material-elevation-4;}.paper-material[elevation=\"5\"],:host(.paper-material[elevation=\"5\"]){@apply --paper-material-elevation-5;}</style> </template> </dom-module>");

/***/ }),

/***/ 141:
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/** @polymerBehavior */
Polymer.PaperSpinnerBehavior = {

  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt when active.
     * If alt is not present, it will default to 'loading' as the alt value.
     */
    alt: {
      type: String,
      value: 'loading',
      observer: '__altChanged'
    },

    __coolingDown: {
      type: Boolean,
      value: false
    }
  },

  __computeContainerClasses: function __computeContainerClasses(active, coolingDown) {
    return [active || coolingDown ? 'active' : '', coolingDown ? 'cooldown' : ''].join(' ');
  },

  __activeChanged: function __activeChanged(active, old) {
    this.__setAriaHidden(!active);
    this.__coolingDown = !active && old;
  },

  __altChanged: function __altChanged(alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');
      this.setAttribute('aria-label', alt);
    }
  },

  __setAriaHidden: function __setAriaHidden(hidden) {
    var attr = 'aria-hidden';
    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },

  __reset: function __reset() {
    this.active = false;
    this.__coolingDown = false;
  }
};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-spinner-styles> <template> <style>:host{display:inline-block;position:relative;width:28px;height:28px;--paper-spinner-container-rotation-duration:1568ms;--paper-spinner-expand-contract-duration:1333ms;--paper-spinner-full-cycle-duration:5332ms;--paper-spinner-cooldown-duration:400ms}#spinnerContainer{width:100%;height:100%;direction:ltr}#spinnerContainer.active{-webkit-animation:container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;animation:container-rotate var(--paper-spinner-container-rotation-duration) linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;white-space:nowrap;border-color:var(--paper-spinner-color,var(--google-blue-500))}.layer-1{border-color:var(--paper-spinner-layer-1-color,var(--google-blue-500))}.layer-2{border-color:var(--paper-spinner-layer-2-color,var(--google-red-500))}.layer-3{border-color:var(--paper-spinner-layer-3-color,var(--google-yellow-500))}.layer-4{border-color:var(--paper-spinner-layer-4-color,var(--google-green-500))}.active .spinner-layer{-webkit-animation-name:fill-unfill-rotate;-webkit-animation-duration:var(--paper-spinner-full-cycle-duration);-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-animation-iteration-count:infinite;animation-name:fill-unfill-rotate;animation-duration:var(--paper-spinner-full-cycle-duration);animation-timing-function:cubic-bezier(.4,0,.2,1);animation-iteration-count:infinite;opacity:1}.active .spinner-layer.layer-1{-webkit-animation-name:fill-unfill-rotate,layer-1-fade-in-out;animation-name:fill-unfill-rotate,layer-1-fade-in-out}.active .spinner-layer.layer-2{-webkit-animation-name:fill-unfill-rotate,layer-2-fade-in-out;animation-name:fill-unfill-rotate,layer-2-fade-in-out}.active .spinner-layer.layer-3{-webkit-animation-name:fill-unfill-rotate,layer-3-fade-in-out;animation-name:fill-unfill-rotate,layer-3-fade-in-out}.active .spinner-layer.layer-4{-webkit-animation-name:fill-unfill-rotate,layer-4-fade-in-out;animation-name:fill-unfill-rotate,layer-4-fade-in-out}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@-webkit-keyframes layer-1-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@keyframes layer-1-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@-webkit-keyframes layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}to{opacity:0}}@keyframes layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}to{opacity:0}}@-webkit-keyframes layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}to{opacity:0}}@keyframes layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}to{opacity:0}}@-webkit-keyframes layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}@keyframes layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.spinner-layer::after{left:45%;width:10%;border-top-style:solid}.circle-clipper::after,.spinner-layer::after{content:'';box-sizing:border-box;position:absolute;top:0;border-width:var(--paper-spinner-stroke-width,3px);border-color:inherit;border-radius:50%}.circle-clipper::after{bottom:0;width:200%;border-style:solid;border-bottom-color:transparent!important}.circle-clipper.left::after{left:0;border-right-color:transparent!important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right::after{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper::after,.active .gap-patch::after{-webkit-animation-duration:var(--paper-spinner-expand-contract-duration);-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-animation-iteration-count:infinite;animation-duration:var(--paper-spinner-expand-contract-duration);animation-timing-function:cubic-bezier(.4,0,.2,1);animation-iteration-count:infinite}.active .circle-clipper.left::after{-webkit-animation-name:left-spin;animation-name:left-spin}.active .circle-clipper.right::after{-webkit-animation-name:right-spin;animation-name:right-spin}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate var(--paper-spinner-container-rotation-duration) linear infinite,fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(.4,0,.2,1);animation:container-rotate var(--paper-spinner-container-rotation-duration) linear infinite,fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(.4,0,.2,1)}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}</style> </template> </dom-module>");

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(0);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(126);

var RegisterHtmlTemplate = __webpack_require__(1);

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

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-material-shared-styles> <template> <style>:host{display:block;position:relative}:host([elevation=\"1\"]){@apply --shadow-elevation-2dp;}:host([elevation=\"2\"]){@apply --shadow-elevation-4dp;}:host([elevation=\"3\"]){@apply --shadow-elevation-6dp;}:host([elevation=\"4\"]){@apply --shadow-elevation-8dp;}:host([elevation=\"5\"]){@apply --shadow-elevation-16dp;}</style> </template> </dom-module>");

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

__webpack_require__(119);

__webpack_require__(36);

__webpack_require__(120);

__webpack_require__(119);

__webpack_require__(122);

__webpack_require__(121);

__webpack_require__(124);

__webpack_require__(125);

__webpack_require__(36);

__webpack_require__(123);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=luding-search> <template> <style include=shared-styles>:host{display:block;padding:0}paper-spinner-lite.orange{--paper-spinner-color:var(--google-yellow-500)}</style> <iron-a11y-keys id=a11y target=[[target]] keys=enter on-keys-pressed=search></iron-a11y-keys> <paper-input id=input label=Suche style=max-width:500px value={{filterstr}}> <div slot=suffix> <paper-spinner-lite active={{loading}} class=orange></paper-spinner-lite> <paper-icon-button icon=search on-tap=search></paper-icon-button> </div> </paper-input> <iron-ajax id=ajax loading={{loading}} url=/api/graphql debounce-duration=300 on-response=handleResponse content-type=application/json handle-as=json method=POST body=[[query]]></iron-ajax> </template> </dom-module>");

/**
 * `luding-search` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */

var LudingSearch = function (_Polymer$Element) {
    _inherits(LudingSearch, _Polymer$Element);

    _createClass(LudingSearch, null, [{
        key: 'is',

        /**
         * String providing the tag name to register the element under.
         */
        get: function get() {
            return 'luding-search';
        }

        /**
         * Object describing property-related metadata used by Polymer features
         */

    }, {
        key: 'properties',
        get: function get() {
            return {
                filterstr: { type: String, value: "" },
                queryfunction: Function,
                target: {
                    type: Object
                },
                data: {
                    type: Array,
                    notify: true
                },
                responseprop: String

            };
        }

        /**
         * Instance of the element is created/upgraded. Use: initializing state,
         * set up event listeners, create shadow dom.
         * @constructor
         */

    }]);

    function LudingSearch() {
        _classCallCheck(this, LudingSearch);

        return _possibleConstructorReturn(this, (LudingSearch.__proto__ || Object.getPrototypeOf(LudingSearch)).call(this));
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */


    _createClass(LudingSearch, [{
        key: 'ready',
        value: function ready() {
            _get(LudingSearch.prototype.__proto__ || Object.getPrototypeOf(LudingSearch.prototype), 'ready', this).call(this);

            Polymer.RenderStatus.afterNextRender(this, function () {});
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            _get(LudingSearch.prototype.__proto__ || Object.getPrototypeOf(LudingSearch.prototype), 'connectedCallback', this).call(this);
            this.search();
            this.target = this.$.input;
        }
    }, {
        key: 'search',
        value: function search() {
            this.query = this.queryfunction(this.filterstr);
            this.$.ajax.generateRequest();
        }
    }, {
        key: 'handleResponse',
        value: function handleResponse(event) {
            this.set('data', []);
            this.set('data', event.detail.response.data[this.responseprop]);
            // this.notifyPath('data')
        }
    }]);

    return LudingSearch;
}(Polymer.Element);

window.customElements.define(LudingSearch.is, LudingSearch);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(7);

__webpack_require__(120);

__webpack_require__(119);

__webpack_require__(122);

__webpack_require__(121);

__webpack_require__(124);

__webpack_require__(125);

__webpack_require__(36);

__webpack_require__(123);

__webpack_require__(129);

__webpack_require__(146);

__webpack_require__(127);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=games-listfragment> <template> <style include=shared-styles>:host{display:block;padding:0}.content{width:80%;margin-left:10%;padding:0 10px}iron-list{height:100vh;width:100%}</style> <iron-list id=list items=[[data]] as=item> <template> <luding-card item=[[item]] godetails=[[navigate]] objid=gameid> <span slot=title style=display:flex;flex:wrap>[[inc(index)]]. [[item.gamename]] </span> <span slot=subtitle style=display:flex;flex:wrap;flex-orientation:row> <template is=dom-if if=[[item.year]]>([[item.year]])</template> <template is=dom-repeat items=[[item.gameAuthors]] as=author> [[author.authorGivName]] [[author.authorLastName]],</template> <template is=dom-repeat items=[[item.gamePublishers]] as=publisher> [[publisher.publishername]],</template> </span> </luding-card> </template> </iron-list> </template> </dom-module>");

var GamesListFragment = function (_Polymer$Element) {
  _inherits(GamesListFragment, _Polymer$Element);

  function GamesListFragment() {
    _classCallCheck(this, GamesListFragment);

    return _possibleConstructorReturn(this, (GamesListFragment.__proto__ || Object.getPrototypeOf(GamesListFragment)).apply(this, arguments));
  }

  _createClass(GamesListFragment, [{
    key: 'inc',
    value: function inc(idx) {
      return idx + 1;
    }
  }, {
    key: 'navigate',
    value: function navigate(objid) {
      window.history.pushState({}, null, '/game/' + objid);
      window.dispatchEvent(new CustomEvent('location-changed'));
    }
  }, {
    key: 'refresh',
    value: function refresh(event) {
      this.$.list.fire('iron-resize');
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'games-listfragment';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        data: {
          type: Array,
          notify: true,
          observer: "refresh"
        }
      };
    }
  }]);

  return GamesListFragment;
}(Polymer.Element);

window.customElements.define(GamesListFragment.is, GamesListFragment);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMtbGlzdC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1saXN0L2lyb24tbGlzdC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1rZXlzL2lyb24tYTExeS1rZXlzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2x1ZGluZy1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1jb250YWluZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWltYWdlL2lyb24taW1hZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLXJlcXVlc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLXN0eWxlcy5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2x1ZGluZy1zZWFyY2guaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMtbGlzdGZyYWdtZW50Lmh0bWwiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlZ2lzdGVySHRtbFRlbXBsYXRlIiwicmVnaXN0ZXIiLCJ0b0JvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBb0RJOztJQUFnQjs7Ozs7Ozs7Ozs7d0NBYU07QUFHcEI7QUFDRzs7O3dCQUFJLEtBQUU7QUFDUCxhQUFXLE1BQ2I7QUFDTzs7OzRCQUFVLFdBQUU7QUFDZCxVQUFVLFVBQVEsU0FBRztBQUViLDJDQUNUO0FBRk8sT0FBUDtBQUdGO0FBQ08sZUFFVDtBQUhTO0FBSUQ7Ozs2QkFBTSxPQUFFO0FBQ1IsYUFBUSxRQUFVLFVBQUcsSUFBTSxNQUFXLFdBQVE7QUFDOUMsYUFBYyxjQUFDLElBQWUsWUFDdEM7QUFDRjs7O3dCQWhDa0I7QUFBRSxhQUFxQjtBQUVqQjs7O3dCQUFFO0FBQ3RCO0FBQ007QUFDRSxnQkFBTztBQUNMLGtCQUtaOztBQVBVO0FBREQ7QUFTUzs7OztFQWJXLFFBQ2Y7O0FBa0NWLE9BQWUsZUFBTyxPQUFVLFVBQUcsSUFBWSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrRTlDO0FBQ0gsTUFBYzs7QUFFTjs7OztBQUlEO0FBQ0QsWUFBUTtBQUNQLGFBQUk7QUFDRCxnQkFDVDtBQUpROzs7OztBQVNKO0FBQ0MsWUFBUTtBQUNQLGFBQ047QUFITTs7Ozs7QUFRSjtBQUNHLFlBQ0w7QUFGSTs7Ozs7O0FBUU87QUFDTixZQUFTO0FBQ1IsYUFDTjtBQUhhOzs7Ozs7QUFTTDtBQUNILFlBQVM7QUFDUixhQUNO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Z0IsZ0JBQUssTUFBWSxZQUVyRCxDQUNKO0FBRWtCOzs7NENBQUU7QUFDUTtBQUNwQixpQkFBUTtBQUNSLGlCQUFRLFNBQU0sS0FBRSxFQUV4QjtBQUNPOzs7aUNBQUU7QUFDRCxpQkFBTyxRQUFNLEtBQWMsY0FBSyxLQUFVO0FBQzFDLGlCQUFFLEVBQUssS0FDZjtBQUVjOzs7dUNBQU0sT0FBRTtBQUNkLGlCQUFJLElBQU8sUUFBSztBQUNoQixpQkFBSSxJQUFPLFFBQU8sTUFBTyxPQUFTLFNBQUssS0FBSyxLQUFjO0FBRWxFO0FBRUo7Ozs7RUFoRWtDLFFBQVM7O0FBa0VyQyxPQUFlLGVBQU8sT0FBYSxhQUFHLElBQWUsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDMUQvRDs7SUFBd0I7Ozs7Ozs7Ozs7O3dCQWFmLEtBQUU7QUFDUCxhQUFXLE1BQ2I7QUFDUTs7OzZCQUFNLE9BQUU7QUFDUixhQUFRLFFBQVUsVUFBRyxJQUFNLE1BQVcsV0FBUTtBQUM5QyxhQUFjLGNBQUMsSUFBZSxZQUN0QztBQUNPOzs7NEJBQU0sT0FBRTtBQUNULFdBQUUsRUFBSyxLQUFLLEtBQ2xCO0FBQ0Y7Ozt3QkF0QmtCO0FBQUUsYUFBNkI7QUFFekI7Ozt3QkFBRTtBQUN0QjtBQUNNO0FBQ0UsZ0JBQU87QUFDTCxrQkFBTTtBQUNKLG9CQUlkO0FBUFU7QUFERDtBQVNOOzs7O0VBYmtDLFFBQ3ZCOztBQXdCVixPQUFlLGVBQU8sT0FBa0Isa0JBQUcsSUFBb0IsbUIiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbi0tPlxyXG5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXkta2V5cy9pcm9uLWExMXkta2V5cy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuL2NvbXBvbmVudHMvbHVkaW5nLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9jb21wb25lbnRzL2x1ZGluZy1zZWFyY2guaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9nYW1lcy1saXN0ZnJhZ21lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cImdhbWVzLWxpc3RcIj5cclxuICA8dGVtcGxhdGU+XHJcbiAgICA8c3R5bGUgaW5jbHVkZT1cInNoYXJlZC1zdHlsZXNcIj5cclxuICAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlyb24tbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC4gKi9cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxwYXBlci1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8bHVkaW5nLXNlYXJjaCBkYXRhPVwie3tkYXRhfX1cIiByZXNwb25zZXByb3A9XCJnYW1lc1wiIHF1ZXJ5ZnVuY3Rpb249XCJbW2dldEJvZHldXVwiID4gPC9sdWRpbmctc2VhcmNoPlxyXG4gICAgICA8Z2FtZXMtbGlzdGZyYWdtZW50IGRhdGE9XCJbW2RhdGFdXVwiPiA8L2dhbWVzLWxpc3RmcmFnbWVudD5cclxuICAgIDwvcGFwZXItY2FyZD5cclxuICA8L3RlbXBsYXRlPlxyXG5cclxuICA8c2NyaXB0PlxyXG4gICAgY2xhc3MgR2FtZXNMaXN0IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcclxuICAgICAgc3RhdGljIGdldCBpcygpIHsgcmV0dXJuICdnYW1lcy1saXN0JzsgfVxyXG5cclxuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBub3RpZnk6IHRydWVcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpbmMoaWR4KSB7XHJcbiAgICAgICAgcmV0dXJuIGlkeCArIDFcclxuICAgICAgfVxyXG4gICAgICBnZXRCb2R5KGZpbHRlclN0cikge1xyXG4gICAgICAgIGlmIChmaWx0ZXJTdHIubGVuZ3RoID4gMClcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkge2dhbWVzKGdhbWVuYW1lOlwiJHtmaWx0ZXJTdHJ9XCIpIHsgZ2FtZWlkIGdhbWVuYW1lIHllYXIgZ2FtZVB1Ymxpc2hlcnMgeyAgIHB1Ymxpc2hlcm5hbWUgICBjb3VudHJ5ICAgc2VhcmNobmFtZSB9IGdhbWVBdXRob3JzIHsgICBhdXRob3JpZCAgIGF1dGhvckxhc3ROYW1lICAgYXV0aG9yR2l2TmFtZSAgIGF1dGhvcmdhbWVzIHsgICAgIGdhbWVuYW1lICAgfSB9IH19YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBxdWVyeTogJ3F1ZXJ5IHtnYW1lcyB7IGdhbWVpZCBnYW1lbmFtZSB5ZWFyIGdhbWVQdWJsaXNoZXJzIHsgICBwdWJsaXNoZXJuYW1lICAgY291bnRyeSAgIHNlYXJjaG5hbWUgfSBnYW1lQXV0aG9ycyB7ICAgYXV0aG9yaWQgICBhdXRob3JMYXN0TmFtZSAgIGF1dGhvckdpdk5hbWUgICBhdXRob3JnYW1lcyB7ICAgICBnYW1lbmFtZSAgIH0gfSB9fSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbmF2aWdhdGUob2JqaWQpIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsICcvZ2FtZS8nICsgb2JqaWQpO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYXRpb24tY2hhbmdlZCcpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoR2FtZXNMaXN0LmlzLCBHYW1lc0xpc3QpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzLWxpc3QuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWltYWdlL2lyb24taW1hZ2UuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWxcIj5cblxuPCEtLVxuTWF0ZXJpYWwgZGVzaWduOiBbQ2FyZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9jYXJkcy5odG1sKVxuXG5gcGFwZXItY2FyZGAgaXMgYSBjb250YWluZXIgd2l0aCBhIGRyb3Agc2hhZG93LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5Tb21lIGNvbnRlbnQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5Tb21lIGFjdGlvbjwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1jYXJkPlxuXG5FeGFtcGxlIC0gdG9wIGNhcmQgaW1hZ2U6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiIGltYWdlPVwiL3BhdGgvdG8vaW1hZ2UucG5nXCIgYWx0PVwiaW1hZ2VcIj5cbiAgICAgIC4uLlxuICAgIDwvcGFwZXItY2FyZD5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQnkgZGVmYXVsdCwgdGhlIGBhcmlhLWxhYmVsYCB3aWxsIGJlIHNldCB0byB0aGUgdmFsdWUgb2YgdGhlIGBoZWFkaW5nYCBhdHRyaWJ1dGUuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNhcmQgfCBgLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGhlYWRlciB0ZXh0IHwgYCMwMDBgXG5gLS1wYXBlci1jYXJkLWhlYWRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0ZXh0IG92ZXJsYXBwaW5nIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGNvbnRlbnQgc2VjdGlvbnwgYHt9YFxuYC0tcGFwZXItY2FyZC1hY3Rpb25zYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgYWN0aW9uIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItY2FyZFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1jYXJkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQ7XG4gICAgICB9XG5cbiAgICAgIC8qIElFIDEwIHN1cHBvcnQgZm9yIEhUTUw1IGhpZGRlbiBhdHRyICovXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgaXJvbi1pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1pcm9uLWltYWdlLXdpZHRoOiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yLCAjMDAwKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0Lm92ZXItaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWFjdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMlwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGlyb24taW1hZ2VcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaW1hZ2VdXVwiXG4gICAgICAgICAgYXJpYS1oaWRkZW4kPVwiW1tfaXNIaWRkZW4oaW1hZ2UpXV1cIlxuICAgICAgICAgIHNyYz1cIltbaW1hZ2VdXVwiXG4gICAgICAgICAgYWx0PVwiW1thbHRdXVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVySW1hZ2VdXVwiXG4gICAgICAgICAgcHJlbG9hZD1cIltbcHJlbG9hZEltYWdlXV1cIlxuICAgICAgICAgIGZhZGU9XCJbW2ZhZGVJbWFnZV1dXCI+PC9pcm9uLWltYWdlPlxuICAgICAgPGRpdiBoaWRkZW4kPVwiW1shaGVhZGluZ11dXCIgY2xhc3MkPVwidGl0bGUtdGV4dCBbW19jb21wdXRlSGVhZGluZ0NsYXNzKGltYWdlKV1dXCI+W1toZWFkaW5nXV08L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdwYXBlci1jYXJkJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpdGxlIG9mIHRoZSBjYXJkLlxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGluZzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfaGVhZGluZ0NoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1cmwgb2YgdGhlIHRpdGxlIGltYWdlIG9mIHRoZSBjYXJkLlxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IGFsdGVybmF0aXZlIG9mIHRoZSBjYXJkJ3MgdGl0bGUgaW1hZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBhbHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGltYWdlIHVybCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZVxuICAgICAgICAgKiBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBpbWFnZSBpcyBmdWxseSByZW5kZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWRJbWFnZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZWxvYWRJbWFnZWAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZUltYWdlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlXG4gICAgICAgICAqIGltYWdlIHRvIGZhZGUgaW50byBwbGFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGZhZGVJbWFnZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlIGhhc1xuICAgICAgICAgKiBsb2FkZWQuIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50IHJlbmRlcmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVySW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHotZGVwdGggb2YgdGhlIGNhcmQsIGZyb20gMC01LlxuICAgICAgICAgKi9cbiAgICAgICAgZWxldmF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIGNhcmQgc2hhZG93IHdoZW4gc2V0dGluZyBhIG5ld1xuICAgICAgICAgKiBgemAgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlZFNoYWRvdzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSBwcm9wZXJ0eSB1c2VkIHRvIHBhc3MgZG93biB0aGUgYGFuaW1hdGVkU2hhZG93YCB2YWx1ZSB0b1xuICAgICAgICAgKiB0aGUgdW5kZXJseWluZyBwYXBlci1tYXRlcmlhbCBzdHlsZSAoc2luY2UgdGhleSBoYXZlIGRpZmZlcmVudCBuYW1lcykuXG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBbmltYXRlZChhbmltYXRlZFNoYWRvdyknXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRm9ybWF0IGZ1bmN0aW9uIGZvciBhcmlhLWhpZGRlbi4gVXNlIHRoZSAhIG9wZXJhdG9yIHJlc3VsdHMgaW4gdGhlXG4gICAgICAgKiBlbXB0eSBzdHJpbmcgd2hlbiBnaXZlbiBhIGZhbHN5IHZhbHVlLlxuICAgICAgICovXG4gICAgICBfaXNIaWRkZW46IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZSA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gICAgICB9LFxuXG4gICAgICBfaGVhZGluZ0NoYW5nZWQ6IGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWFkaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnKSxcbiAgICAgICAgICAgIGN1cnJlbnRMYWJlbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50TGFiZWwgIT09ICdzdHJpbmcnIHx8IGN1cnJlbnRMYWJlbCA9PT0gY3VycmVudEhlYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGhlYWRpbmcpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUhlYWRpbmdDbGFzczogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlID8gJyBvdmVyLWltYWdlJyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVBbmltYXRlZDogZnVuY3Rpb24oYW5pbWF0ZWRTaGFkb3cpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGVkU2hhZG93O1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtZXJyb3IuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0IGZpZWxkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3RleHQtZmllbGRzLmh0bWwpXG5cbmA8cGFwZXItaW5wdXQ+YCBpcyBhIHNpbmdsZS1saW5lIHRleHQgZmllbGQgd2l0aCBNYXRlcmlhbCBEZXNpZ24gc3R5bGluZy5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgbWF5IGluY2x1ZGUgYW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXIgY291bnRlci5cblxuICAgIDxwYXBlci1pbnB1dCBlcnJvci1tZXNzYWdlPVwiSW52YWxpZCBpbnB1dCFcIiBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cbiAgICA8cGFwZXItaW5wdXQgY2hhci1jb3VudGVyIGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBjYW4gYWxzbyBpbmNsdWRlIGN1c3RvbSBwcmVmaXggb3Igc3VmZml4IGVsZW1lbnRzLCB3aGljaCBhcmUgZGlzcGxheWVkXG5iZWZvcmUgb3IgYWZ0ZXIgdGhlIHRleHQgaW5wdXQgaXRzZWxmLiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZVxuY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBgcHJlZml4YCBhdHRyaWJ1dGUgKGFuZCBzaW1pbGFybHlcbmZvciBgc3VmZml4YCkuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJ0b3RhbFwiPlxuICAgICAgPGRpdiBwcmVmaXg+JDwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cbkEgYHBhcGVyLWlucHV0YCBjYW4gdXNlIHRoZSBuYXRpdmUgYHR5cGU9c2VhcmNoYCBvciBgdHlwZT1maWxlYCBmZWF0dXJlcy5cbkhvd2V2ZXIsIHNpbmNlIHdlIGNhbid0IGNvbnRyb2wgdGhlIG5hdGl2ZSBzdHlsaW5nIG9mIHRoZSBpbnB1dCAoc2VhcmNoIGljb24sXG5maWxlIGJ1dHRvbiwgZGF0ZSBwbGFjZWhvbGRlciwgZXRjLiksIGluIHRoZXNlIGNhc2VzIHRoZSBsYWJlbCB3aWxsIGJlXG5hdXRvbWF0aWNhbGx5IGZsb2F0ZWQuIFRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBjYW4gc3RpbGwgYmUgdXNlZCBmb3JcbmFkZGl0aW9uYWwgaW5mb3JtYXRpb25hbCB0ZXh0LlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwic2VhcmNoIVwiIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgY2F0c1wiIGF1dG9zYXZlPVwidGVzdFwiIHJlc3VsdHM9XCI1XCI+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgZm9yIG1vcmUgQVBJIGRvY3MuXG5cbiMjIyBGb2N1c1xuXG5UbyBmb2N1cyBhIHBhcGVyLWlucHV0LCB5b3UgY2FuIGNhbGwgdGhlIG5hdGl2ZSBgZm9jdXMoKWAgbWV0aG9kIGFzIGxvbmcgYXMgdGhlXG5wYXBlciBpbnB1dCBoYXMgYSB0YWIgaW5kZXguIFNpbWlsYXJseSwgYGJsdXIoKWAgd2lsbCBibHVyIHRoZSBlbGVtZW50LlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dENvbnRhaW5lcmAgZm9yIGEgbGlzdCBvZiBjdXN0b20gcHJvcGVydGllcyB1c2VkIHRvXG5zdHlsZSB0aGlzIGVsZW1lbnQuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogdG8gbWFrZSBhIHN0YWNraW5nIGNvbnRleHQgKi9cbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiXG4gICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiXG4gICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIlxuICAgICAgICBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvcj1cImlucHV0XCIgc2xvdD1cImxhYmVsXCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPHNwYW4gaWQ9XCJ0ZW1wbGF0ZS1wbGFjZWhvbGRlclwiPjwvc3Bhbj5cblxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPCEtLSBUaGlzIGlzIGEgZnJlc2ggbmV3IGhlbGwgdG8gbWFrZSB0aGlzIGVsZW1lbnQgaHlicmlkLiBCYXNpY2FsbHksIGluIDIuMFxuICAgIHdlIGxvc3QgaXM9LCBzbyB0aGUgZXhhbXBsZSBzYW1lIHRlbXBsYXRlIGNhbid0IGJlIHVzZWQgd2l0aCBpcm9uLWlucHV0IDEuMCBhbmQgMi4wLlxuICAgIEV4cGVjdCBzb21lIGNvbmRpdGlvbmFsIGNvZGUgKGVzcGVjaWFsbHkgaW4gdGhlIHRlc3RzKS5cbiAgIC0tPlxuICA8dGVtcGxhdGUgaWQ9XCJ2MFwiPlxuICAgIDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBpZD1cImlucHV0XCIgc2xvdD1cImlucHV0XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgdGl0bGUkPVwiW1t0aXRsZV1dXCJcbiAgICAgICAgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiXG4gICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dD1cIltbcHJldmVudEludmFsaWRJbnB1dF1dXCJcbiAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCJcbiAgICAgICAgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiXG4gICAgICAgIHR5cGUkPVwiW1t0eXBlXV1cIlxuICAgICAgICBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCJcbiAgICAgICAgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIlxuICAgICAgICBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCJcbiAgICAgICAgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIlxuICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgIG1pbiQ9XCJbW21pbl1dXCJcbiAgICAgICAgbWF4JD1cIltbbWF4XV1cIlxuICAgICAgICBzdGVwJD1cIltbc3RlcF1dXCJcbiAgICAgICAgbmFtZSQ9XCJbW25hbWVdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiXG4gICAgICAgIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiXG4gICAgICAgIGxpc3QkPVwiW1tsaXN0XV1cIlxuICAgICAgICBzaXplJD1cIltbc2l6ZV1dXCJcbiAgICAgICAgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCJcbiAgICAgICAgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCJcbiAgICAgICAgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCJcbiAgICAgICAgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCJcbiAgICAgICAgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiXG4gICAgICAgIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCJcbiAgICAgICAgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIGlkPVwidjFcIj5cbiAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3t2YWx1ZX19XCIgaWQ9XCJpbnB1dFwiIHNsb3Q9XCJpbnB1dFwiXG4gICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCJcbiAgICAgICAgaW52YWxpZD1cInt7aW52YWxpZH19XCJcbiAgICAgICAgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiPlxuICAgICAgPGlucHV0IGlkPVwibmF0aXZlSW5wdXRcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnkkPVwiW1tfYXJpYUxhYmVsbGVkQnldXVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnkkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIlxuICAgICAgICBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICB0aXRsZSQ9XCJbW3RpdGxlXV1cIlxuICAgICAgICB0eXBlJD1cIltbdHlwZV1dXCJcbiAgICAgICAgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCJcbiAgICAgICAgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiXG4gICAgICAgIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCJcbiAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICBtaW4kPVwiW1ttaW5dXVwiXG4gICAgICAgIG1heCQ9XCJbW21heF1dXCJcbiAgICAgICAgc3RlcCQ9XCJbW3N0ZXBdXVwiXG4gICAgICAgIG5hbWUkPVwiW1tuYW1lXV1cIlxuICAgICAgICBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIlxuICAgICAgICBsaXN0JD1cIltbbGlzdF1dXCJcbiAgICAgICAgc2l6ZSQ9XCJbW3NpemVdXVwiXG4gICAgICAgIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiXG4gICAgICAgIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiXG4gICAgICAgIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiXG4gICAgICAgIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiXG4gICAgICAgIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIlxuICAgICAgICBhY2NlcHQkPVwiW1thY2NlcHRdXVwiXG4gICAgICAgIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiPlxuICAgIDwvaXJvbi1pbnB1dD5cbiAgPC90ZW1wbGF0ZT5cblxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0JyxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3IsXG4gICAgICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yXG4gICAgXSxcblxuICAgIGJlZm9yZVJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gdGVsbCB3aGljaCBraW5kIG9mIG9mIHRlbXBsYXRlIHRvIHN0YW1wIGJhc2VkIG9uXG4gICAgICAvLyB3aGF0IGtpbmQgb2YgYGlyb24taW5wdXRgIHdlIGdvdCwgYnV0IGJlY2F1c2Ugb2YgcG9seWZpbGxzIGFuZFxuICAgICAgLy8gY3VzdG9tIGVsZW1lbnRzIGRpZmZlcmVuY2VzIGJldHdlZW4gdjAgYW5kIHYxLCB0aGUgc2FmZXN0IGJldCBpc1xuICAgICAgLy8gdG8gY2hlY2sgYSBwYXJ0aWN1bGFyIG1ldGhvZCB3ZSBrbm93IHRoZSBpcm9uLWlucHV0IzIueCBjYW4gaGF2ZS5cbiAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBpdCwgdGhlbiBpdCdzIGFuIGlyb24taW5wdXQjMS54LlxuICAgICAgdmFyIGlyb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24taW5wdXQnKTtcbiAgICAgIHZhciB2ZXJzaW9uID0gdHlwZW9mIGlyb25JbnB1dC5faW5pdFNsb3R0ZWRJbnB1dCA9PSAnZnVuY3Rpb24nID8gJ3YxJyA6ICd2MCc7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBQb2x5bWVyLkRvbU1vZHVsZS5pbXBvcnQoJ3BhcGVyLWlucHV0JywgJ3RlbXBsYXRlJyk7XG4gICAgICB2YXIgaW5wdXRUZW1wbGF0ZSA9IFBvbHltZXIuRG9tTW9kdWxlLmltcG9ydCgncGFwZXItaW5wdXQnLCAndGVtcGxhdGUjJyArIHZlcnNpb24pO1xuICAgICAgdmFyIGlucHV0UGxhY2Vob2xkZXIgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wbGF0ZS1wbGFjZWhvbGRlcicpO1xuICAgICAgaWYgKGlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbnB1dFRlbXBsYXRlLmNvbnRlbnQsIGlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSBpdCdzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2JhYmx5IGluIHN1cGVyY2xhc3NcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuIE92ZXJyaWRkZW4gZnJvbSBQYXBlcklucHV0QmVoYXZpb3JcbiAgICAgKiB0byBjb3JyZWN0bHkgZm9jdXMgdGhlIG5hdGl2ZSBpbnB1dC5cbiAgICAgKi9cbiAgICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5FbGVtZW50ID8gdGhpcy5pbnB1dEVsZW1lbnQuX2lucHV0RWxlbWVudCA6IHRoaXMuaW5wdXRFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvLyBOb3RlOiBUaGlzIGV2ZW50IGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSAxLjAgdmVyc2lvbiBvZiB0aGlzIGVsZW1lbnQuXG4gICAgLy8gSW4gMi4wLCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBgX29uSXJvbklucHV0UmVhZHlgIGlzIGRvbmUgaW5cbiAgICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICAgIGxpc3RlbmVyczoge1xuICAgICAgJ2lyb24taW5wdXQtcmVhZHknOiAnX29uSXJvbklucHV0UmVhZHknXG4gICAgfSxcblxuICAgIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy4kLm5hdGl2ZUlucHV0LnR5cGUpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgICBpZiAoISF0aGlzLmlucHV0RWxlbWVudC5iaW5kVmFsdWUpIHtcbiAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cImlyb24tcmVxdWVzdC5odG1sXCI+XG5cbjwhLS1cblRoZSBgaXJvbi1hamF4YCBlbGVtZW50IGV4cG9zZXMgbmV0d29yayByZXF1ZXN0IGZ1bmN0aW9uYWxpdHkuXG5cbiAgICA8aXJvbi1hamF4XG4gICAgICAgIGF1dG9cbiAgICAgICAgdXJsPVwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2hcIlxuICAgICAgICBwYXJhbXM9J3tcInBhcnRcIjpcInNuaXBwZXRcIiwgXCJxXCI6XCJwb2x5bWVyXCIsIFwia2V5XCI6IFwiWU9VVFVCRV9BUElfS0VZXCIsIFwidHlwZVwiOiBcInZpZGVvXCJ9J1xuICAgICAgICBoYW5kbGUtYXM9XCJqc29uXCJcbiAgICAgICAgb24tcmVzcG9uc2U9XCJoYW5kbGVSZXNwb25zZVwiXG4gICAgICAgIGRlYm91bmNlLWR1cmF0aW9uPVwiMzAwXCI+PC9pcm9uLWFqYXg+XG5cbldpdGggYGF1dG9gIHNldCB0byBgdHJ1ZWAsIHRoZSBlbGVtZW50IHBlcmZvcm1zIGEgcmVxdWVzdCB3aGVuZXZlclxuaXRzIGB1cmxgLCBgcGFyYW1zYCBvciBgYm9keWAgcHJvcGVydGllcyBhcmUgY2hhbmdlZC4gQXV0b21hdGljYWxseSBnZW5lcmF0ZWRcbnJlcXVlc3RzIHdpbGwgYmUgZGVib3VuY2VkIGluIHRoZSBjYXNlIHRoYXQgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgY2hhbmdlZFxuc2VxdWVudGlhbGx5LlxuXG5Ob3RlOiBUaGUgYHBhcmFtc2AgYXR0cmlidXRlIG11c3QgYmUgZG91YmxlIHF1b3RlZCBKU09OLlxuXG5Zb3UgY2FuIHRyaWdnZXIgYSByZXF1ZXN0IGV4cGxpY2l0bHkgYnkgY2FsbGluZyBgZ2VuZXJhdGVSZXF1ZXN0YCBvbiB0aGVcbmVsZW1lbnQuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbi0tPlxuXG48c2NyaXB0PlxuICAndXNlIHN0cmljdCc7XG5cbiAgUG9seW1lcih7XG5cbiAgICBpczogJ2lyb24tYWpheCcsXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCBiZWZvcmUgYSByZXF1ZXN0IGlzIHNlbnQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LXByZXNlbmRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSByZXF1ZXN0IGlzIHNlbnQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgcmVxdWVzdFxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtcmVxdWVzdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBhIHJlc3BvbnNlIGlzIHJlY2VpdmVkLlxuICAgICAqXG4gICAgICogQGV2ZW50IHJlc3BvbnNlXG4gICAgICogQGV2ZW50IGlyb24tYWpheC1yZXNwb25zZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBhbiBlcnJvciBpcyByZWNlaXZlZC5cbiAgICAgKlxuICAgICAqIEBldmVudCBlcnJvclxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtZXJyb3JcbiAgICAgKi9cblxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgVVJMIHRhcmdldCBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAqL1xuICAgICAgdXJsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBvYmplY3QgdGhhdCBjb250YWlucyBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZVxuICAgICAgICogc3BlY2lmaWVkIGB1cmxgIHdoZW4gZ2VuZXJhdGluZyBhIHJlcXVlc3QuIElmIHlvdSB3aXNoIHRvIHNldCB0aGUgYm9keVxuICAgICAgICogY29udGVudCB3aGVuIG1ha2luZyBhIFBPU1QgcmVxdWVzdCwgeW91IHNob3VsZCB1c2UgdGhlIGBib2R5YCBwcm9wZXJ0eVxuICAgICAgICogaW5zdGVhZC5cbiAgICAgICAqL1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIHN1Y2ggYXMgJ0dFVCcsICdQT1NUJywgJ1BVVCcsIG9yICdERUxFVEUnLlxuICAgICAgICogRGVmYXVsdCBpcyAnR0VUJy5cbiAgICAgICAqL1xuICAgICAgbWV0aG9kOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdHRVQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhUVFAgcmVxdWVzdCBoZWFkZXJzIHRvIHNlbmQuXG4gICAgICAgKlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqXG4gICAgICAgKiAgICAgPGlyb24tYWpheFxuICAgICAgICogICAgICAgICBhdXRvXG4gICAgICAgKiAgICAgICAgIHVybD1cImh0dHA6Ly9zb21lc2l0ZS5jb21cIlxuICAgICAgICogICAgICAgICBoZWFkZXJzPSd7XCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIn0nXG4gICAgICAgKiAgICAgICAgIGhhbmRsZS1hcz1cImpzb25cIj48L2lyb24tYWpheD5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBzZXR0aW5nIGEgYENvbnRlbnQtVHlwZWAgaGVhZGVyIGhlcmUgd2lsbCBvdmVycmlkZSB0aGUgdmFsdWVcbiAgICAgICAqIHNwZWNpZmllZCBieSB0aGUgYGNvbnRlbnRUeXBlYCBwcm9wZXJ0eSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnRlbnQgdHlwZSB0byB1c2Ugd2hlbiBzZW5kaW5nIGRhdGEuIElmIHRoZSBgY29udGVudFR5cGVgIHByb3BlcnR5XG4gICAgICAgKiBpcyBzZXQgYW5kIGEgYENvbnRlbnQtVHlwZWAgaGVhZGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgYGhlYWRlcnNgXG4gICAgICAgKiBwcm9wZXJ0eSwgdGhlIGBoZWFkZXJzYCBwcm9wZXJ0eSB2YWx1ZSB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAgICAgICAqXG4gICAgICAgKiBWYXJpZXMgdGhlIGhhbmRsaW5nIG9mIHRoZSBgYm9keWAgcGFyYW0uXG4gICAgICAgKi9cbiAgICAgIGNvbnRlbnRUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQm9keSBjb250ZW50IHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdCwgdHlwaWNhbGx5IHVzZWQgd2l0aCBcIlBPU1RcIlxuICAgICAgICogcmVxdWVzdHMuXG4gICAgICAgKlxuICAgICAgICogSWYgYm9keSBpcyBhIHN0cmluZyBpdCB3aWxsIGJlIHNlbnQgdW5tb2RpZmllZC5cbiAgICAgICAqXG4gICAgICAgKiBJZiBDb250ZW50LVR5cGUgaXMgc2V0IHRvIGEgdmFsdWUgbGlzdGVkIGJlbG93LCB0aGVuXG4gICAgICAgKiB0aGUgYm9keSB3aWxsIGJlIGVuY29kZWQgYWNjb3JkaW5nbHkuXG4gICAgICAgKlxuICAgICAgICogICAgKiBgY29udGVudC10eXBlPVwiYXBwbGljYXRpb24vanNvblwiYFxuICAgICAgICogICAgICAqIGJvZHkgaXMgZW5jb2RlZCBsaWtlIGB7XCJmb29cIjpcImJhciBiYXpcIixcInhcIjoxfWBcbiAgICAgICAqICAgICogYGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiYFxuICAgICAgICogICAgICAqIGJvZHkgaXMgZW5jb2RlZCBsaWtlIGBmb289YmFyK2JheiZ4PTFgXG4gICAgICAgKlxuICAgICAgICogT3RoZXJ3aXNlIHRoZSBib2R5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBicm93c2VyIHVubW9kaWZpZWQsIGFuZCBpdFxuICAgICAgICogd2lsbCBoYW5kbGUgYW55IGVuY29kaW5nIChlLmcuIGZvciBGb3JtRGF0YSwgQmxvYiwgQXJyYXlCdWZmZXIpLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIChBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd8QmxvYnxEb2N1bWVudHxGb3JtRGF0YXxudWxsfHN0cmluZ3x1bmRlZmluZWR8T2JqZWN0KVxuICAgICAgICovXG4gICAgICBib2R5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVG9nZ2xlIHdoZXRoZXIgWEhSIGlzIHN5bmNocm9ub3VzIG9yIGFzeW5jaHJvbm91cy4gRG9uJ3QgY2hhbmdlIHRoaXNcbiAgICAgICAqIHRvIHRydWUgdW5sZXNzIFlvdSBLbm93IFdoYXQgWW91IEFyZSBEb2luZ+KEoi5cbiAgICAgICAqL1xuICAgICAgc3luYzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHdoYXQgZGF0YSB0byBzdG9yZSBpbiB0aGUgYHJlc3BvbnNlYCBwcm9wZXJ0eSwgYW5kXG4gICAgICAgKiB0byBkZWxpdmVyIGFzIGBldmVudC5kZXRhaWwucmVzcG9uc2VgIGluIGByZXNwb25zZWAgZXZlbnRzLlxuICAgICAgICpcbiAgICAgICAqIE9uZSBvZjpcbiAgICAgICAqXG4gICAgICAgKiAgICBgdGV4dGA6IHVzZXMgYFhIUi5yZXNwb25zZVRleHRgLlxuICAgICAgICpcbiAgICAgICAqICAgIGB4bWxgOiB1c2VzIGBYSFIucmVzcG9uc2VYTUxgLlxuICAgICAgICpcbiAgICAgICAqICAgIGBqc29uYDogdXNlcyBgWEhSLnJlc3BvbnNlVGV4dGAgcGFyc2VkIGFzIEpTT04uXG4gICAgICAgKlxuICAgICAgICogICAgYGFycmF5YnVmZmVyYDogdXNlcyBgWEhSLnJlc3BvbnNlYC5cbiAgICAgICAqXG4gICAgICAgKiAgICBgYmxvYmA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKlxuICAgICAgICogICAgYGRvY3VtZW50YDogdXNlcyBgWEhSLnJlc3BvbnNlYC5cbiAgICAgICAqL1xuICAgICAgaGFuZGxlQXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2pzb24nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGUgd2l0aENyZWRlbnRpYWxzIGZsYWcgb24gdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHdpdGhDcmVkZW50aWFsczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSB0aW1lb3V0IGZsYWcgb24gdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCBhdXRvbWF0aWNhbGx5IHBlcmZvcm1zIGFuIEFqYXggcmVxdWVzdCB3aGVuIGVpdGhlciBgdXJsYCBvclxuICAgICAgICogYHBhcmFtc2AgY2hhbmdlcy5cbiAgICAgICAqL1xuICAgICAgYXV0bzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgZXJyb3IgbWVzc2FnZXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZS5cbiAgICAgICAqL1xuICAgICAgdmVyYm9zZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1vc3QgcmVjZW50IHJlcXVlc3QgbWFkZSBieSB0aGlzIGlyb24tYWpheCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBsYXN0UmVxdWVzdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSB3aGlsZSBsYXN0UmVxdWVzdCBpcyBpbiBmbGlnaHQuXG4gICAgICAgKi9cbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBsYXN0UmVxdWVzdCdzIHJlc3BvbnNlLlxuICAgICAgICpcbiAgICAgICAqIE5vdGUgdGhhdCBsYXN0UmVzcG9uc2UgYW5kIGxhc3RFcnJvciBhcmUgc2V0IHdoZW4gbGFzdFJlcXVlc3QgZmluaXNoZXMsXG4gICAgICAgKiBzbyBpZiBsb2FkaW5nIGlzIHRydWUsIHRoZW4gbGFzdFJlc3BvbnNlIGFuZCBsYXN0RXJyb3Igd2lsbCBjb3JyZXNwb25kXG4gICAgICAgKiB0byB0aGUgcmVzdWx0IG9mIHRoZSBwcmV2aW91cyByZXF1ZXN0LlxuICAgICAgICpcbiAgICAgICAqIFRoZSB0eXBlIG9mIHRoZSByZXNwb25zZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB2YWx1ZSBvZiBgaGFuZGxlQXNgIGF0XG4gICAgICAgKiB0aGUgdGltZSB0aGF0IHRoZSByZXF1ZXN0IHdhcyBnZW5lcmF0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgbGFzdFJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBsYXN0UmVxdWVzdCdzIGVycm9yLCBpZiBhbnkuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgbGFzdEVycm9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBBcnJheSBvZiBhbGwgaW4tZmxpZ2h0IHJlcXVlc3RzIG9yaWdpbmF0aW5nIGZyb20gdGhpcyBpcm9uLWFqYXhcbiAgICAgICAqIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGFjdGl2ZVJlcXVlc3RzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExlbmd0aCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBkZWJvdW5jZSBtdWx0aXBsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCByZXF1ZXN0cy5cbiAgICAgICAqL1xuICAgICAgZGVib3VuY2VEdXJhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUHJlZml4IHRvIGJlIHN0cmlwcGVkIGZyb20gYSBKU09OIHJlc3BvbnNlIGJlZm9yZSBwYXJzaW5nIGl0LlxuICAgICAgICpcbiAgICAgICAqIEluIG9yZGVyIHRvIHByZXZlbnQgYW4gYXR0YWNrIHVzaW5nIENTUkYgd2l0aCBBcnJheSByZXNwb25zZXNcbiAgICAgICAqIChodHRwOi8vaGFhY2tlZC5jb20vYXJjaGl2ZS8yMDA4LzExLzIwL2FuYXRvbXktb2YtYS1zdWJ0bGUtanNvbi12dWxuZXJhYmlsaXR5LmFzcHgvKVxuICAgICAgICogbWFueSBiYWNrZW5kcyB3aWxsIG1pdGlnYXRlIHRoaXMgYnkgcHJlZml4aW5nIGFsbCBKU09OIHJlc3BvbnNlIGJvZGllc1xuICAgICAgICogd2l0aCBhIHN0cmluZyB0aGF0IHdvdWxkIGJlIG5vbnNlbnNpY2FsIHRvIGEgSmF2YVNjcmlwdCBwYXJzZXIuXG4gICAgICAgKlxuICAgICAgICovXG4gICAgICBqc29uUHJlZml4OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEJ5IGRlZmF1bHQsIGlyb24tYWpheCdzIGV2ZW50cyBkbyBub3QgYnViYmxlLiBTZXR0aW5nIHRoaXMgYXR0cmlidXRlIHdpbGwgY2F1c2UgaXRzXG4gICAgICAgKiByZXF1ZXN0IGFuZCByZXNwb25zZSBldmVudHMgYXMgd2VsbCBhcyBpdHMgaXJvbi1hamF4LXJlcXVlc3QsIC1yZXNwb25zZSwgIGFuZCAtZXJyb3JcbiAgICAgICAqIGV2ZW50cyB0byBidWJibGUgdG8gdGhlIHdpbmRvdyBvYmplY3QuIFRoZSB2YW5pbGxhIGVycm9yIGV2ZW50IG5ldmVyIGJ1YmJsZXMgd2hlblxuICAgICAgICogdXNpbmcgc2hhZG93IGRvbSBldmVuIGlmIHRoaXMuYnViYmxlcyBpcyB0cnVlIGJlY2F1c2UgYSBzY29wZWQgZmxhZyBpcyBub3QgcGFzc2VkIHdpdGhcbiAgICAgICAqIGl0IChmaXJzdCBsaW5rKSBhbmQgYmVjYXVzZSB0aGUgc2hhZG93IGRvbSBzcGVjIGRpZCBub3QgdXNlZCB0byBhbGxvdyBjZXJ0YWluIGV2ZW50cyxcbiAgICAgICAqIGluY2x1ZGluZyBldmVudHMgbmFtZWQgZXJyb3IsIHRvIGxlYWsgb3V0c2lkZSBvZiBzaGFkb3cgdHJlZXMgKHNlY29uZCBsaW5rKS5cbiAgICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zaGFkb3ctZG9tLyNzY29wZWQtZmxhZ1xuICAgICAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTUvV0Qtc2hhZG93LWRvbS0yMDE1MTIxNS8jZXZlbnRzLXRoYXQtYXJlLW5vdC1sZWFrZWQtaW50by1hbmNlc3Rvci10cmVlc1xuICAgICAgICovXG4gICAgICBidWJibGVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2VzIHRoZSBbYGNvbXBsZXRlc2BdKGlyb24tcmVxdWVzdCNwcm9wZXJ0eS1jb21wbGV0ZXMpIHByb21pc2UgY2hhaW4gXG4gICAgICAgKiBmcm9tIGBnZW5lcmF0ZVJlcXVlc3RgIHRvIHJlamVjdCB3aXRoIGFuIG9iamVjdFxuICAgICAgICogY29udGFpbmluZyB0aGUgb3JpZ2luYWwgcmVxdWVzdCwgYXMgd2VsbCBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAgICogSWYgZmFsc2UgKGRlZmF1bHQpLCB0aGUgcHJvbWlzZSByZWplY3RzIHdpdGggYW4gZXJyb3IgbWVzc2FnZSBvbmx5LlxuICAgICAgICovXG4gICAgICByZWplY3RXaXRoUmVxdWVzdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZEhhbmRsZVJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAnX3JlcXVlc3RPcHRpb25zQ2hhbmdlZCh1cmwsIG1ldGhvZCwgcGFyYW1zLiosIGhlYWRlcnMsIGNvbnRlbnRUeXBlLCAnICtcbiAgICAgICAgICAnYm9keSwgc3luYywgaGFuZGxlQXMsIGpzb25QcmVmaXgsIHdpdGhDcmVkZW50aWFscywgdGltZW91dCwgYXV0byknXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIGB1cmxgLCBzZXJpYWxpemVkIGZyb21cbiAgICAgKiB0aGUgY3VycmVudCB2YWx1ZSBvZiBgcGFyYW1zYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgcXVlcnlTdHJpbmcgKCkge1xuICAgICAgdmFyIHF1ZXJ5UGFydHMgPSBbXTtcbiAgICAgIHZhciBwYXJhbTtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgZm9yIChwYXJhbSBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMucGFyYW1zW3BhcmFtXTtcbiAgICAgICAgcGFyYW0gPSB3aW5kb3cuZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBxdWVyeVBhcnRzLnB1c2gocGFyYW0gKyAnPScgKyB3aW5kb3cuZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2ldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgcXVlcnlQYXJ0cy5wdXNoKHBhcmFtICsgJz0nICsgd2luZG93LmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5UGFydHMucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHF1ZXJ5UGFydHMuam9pbignJicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHVybGAgd2l0aCBxdWVyeSBzdHJpbmcgKGlmIGBwYXJhbXNgIGFyZSBzcGVjaWZpZWQpLCBzdWl0YWJsZSBmb3JcbiAgICAgKiBwcm92aWRpbmcgdG8gYW4gYGlyb24tcmVxdWVzdGAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHJlcXVlc3RVcmwoKSB7XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSB0aGlzLnF1ZXJ5U3RyaW5nO1xuICAgICAgdmFyIHVybCA9IHRoaXMudXJsIHx8ICcnO1xuXG4gICAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdmFyIGJpbmRpbmdDaGFyID0gdXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nO1xuICAgICAgICByZXR1cm4gdXJsICsgYmluZGluZ0NoYXIgKyBxdWVyeVN0cmluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFwcyBoZWFkZXIgbmFtZXMgdG8gaGVhZGVyIHZhbHVlcywgZmlyc3QgYXBwbHlpbmcgdGhlXG4gICAgICogdGhlIHZhbHVlIG9mIGBDb250ZW50LVR5cGVgIGFuZCB0aGVuIG92ZXJsYXlpbmcgdGhlIGhlYWRlcnMgc3BlY2lmaWVkXG4gICAgICogaW4gdGhlIGBoZWFkZXJzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgcmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgICB2YXIgaGVhZGVycyA9IHt9O1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5jb250ZW50VHlwZTtcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PSBudWxsICYmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICBoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9IGNvbnRlbnRUeXBlO1xuICAgICAgfVxuICAgICAgdmFyIGhlYWRlcjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoaGVhZGVyIGluIHRoaXMuaGVhZGVycykge1xuICAgICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IHRoaXMuaGVhZGVyc1toZWFkZXJdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3Qgb3B0aW9ucyBzdWl0YWJsZSBmb3IgZ2VuZXJhdGluZyBhbiBgaXJvbi1yZXF1ZXN0YCBpbnN0YW5jZSBiYXNlZFxuICAgICAqIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBgaXJvbi1hamF4YCBpbnN0YW5jZSdzIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt7XG4gICAgICogICB1cmw6IHN0cmluZyxcbiAgICAgKiAgIG1ldGhvZDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgYXN5bmM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICBib2R5OiAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdCksXG4gICAgICogICBoZWFkZXJzOiAoT2JqZWN0fHVuZGVmaW5lZCksXG4gICAgICogICBoYW5kbGVBczogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAganNvblByZWZpeDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgd2l0aENyZWRlbnRpYWxzOiAoYm9vbGVhbnx1bmRlZmluZWQpfX1cbiAgICAgKi9cbiAgICB0b1JlcXVlc3RPcHRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdGhpcy5yZXF1ZXN0VXJsIHx8ICcnLFxuICAgICAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB0aGlzLnJlcXVlc3RIZWFkZXJzLFxuICAgICAgICBib2R5OiB0aGlzLmJvZHksXG4gICAgICAgIGFzeW5jOiAhdGhpcy5zeW5jLFxuICAgICAgICBoYW5kbGVBczogdGhpcy5oYW5kbGVBcyxcbiAgICAgICAganNvblByZWZpeDogdGhpcy5qc29uUHJlZml4LFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgIHJlamVjdFdpdGhSZXF1ZXN0OiB0aGlzLnJlamVjdFdpdGhSZXF1ZXN0LFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gQUpBWCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybiB7IUlyb25SZXF1ZXN0RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlcXVlc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSAvKiogQHR5cGUgeyFJcm9uUmVxdWVzdEVsZW1lbnR9ICovIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLXJlcXVlc3QnKSk7XG4gICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB0aGlzLnRvUmVxdWVzdE9wdGlvbnMoKTtcblxuICAgICAgdGhpcy5wdXNoKCdhY3RpdmVSZXF1ZXN0cycsIHJlcXVlc3QpO1xuXG4gICAgICByZXF1ZXN0LmNvbXBsZXRlcy50aGVuKFxuICAgICAgICB0aGlzLl9ib3VuZEhhbmRsZVJlc3BvbnNlXG4gICAgICApLmNhdGNoKFxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvci5iaW5kKHRoaXMsIHJlcXVlc3QpXG4gICAgICApLnRoZW4oXG4gICAgICAgIHRoaXMuX2Rpc2NhcmRSZXF1ZXN0LmJpbmQodGhpcywgcmVxdWVzdClcbiAgICAgICk7XG5cbiAgICAgIHZhciBldnQgPSB0aGlzLmZpcmUoJ2lyb24tYWpheC1wcmVzZW5kJywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9uc1xuICAgICAgfSwge2J1YmJsZXM6IHRoaXMuYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0LnJlamVjdENvbXBsZXRlcyhyZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuX3NldExhc3RSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgdGhpcy5fc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgdGhpcy5maXJlKCdyZXF1ZXN0Jywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBvcHRpb25zOiByZXF1ZXN0T3B0aW9uc1xuICAgICAgfSwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtcmVxdWVzdCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sXG5cbiAgICBfaGFuZGxlUmVzcG9uc2U6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgIGlmIChyZXF1ZXN0ID09PSB0aGlzLmxhc3RSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuX3NldExhc3RSZXNwb25zZShyZXF1ZXN0LnJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5fc2V0TGFzdEVycm9yKG51bGwpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlyZSgncmVzcG9uc2UnLCByZXF1ZXN0LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtcmVzcG9uc2UnLCByZXF1ZXN0LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlRXJyb3I6IGZ1bmN0aW9uKHJlcXVlc3QsIGVycm9yKSB7XG4gICAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICAgIFBvbHltZXIuQmFzZS5fZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdCA9PT0gdGhpcy5sYXN0UmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9zZXRMYXN0RXJyb3Ioe1xuICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC54aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3QueGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgcmVzcG9uc2U6IHJlcXVlc3QueGhyLnJlc3BvbnNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZXRMYXN0UmVzcG9uc2UobnVsbCk7XG4gICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBUZXN0cyBmYWlsIGlmIHRoaXMgZ29lcyBhZnRlciB0aGUgbm9ybWFsIHRoaXMuZmlyZSgnZXJyb3InLCAuLi4pXG4gICAgICB0aGlzLmZpcmUoJ2lyb24tYWpheC1lcnJvcicsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZpcmUoJ2Vycm9yJywge1xuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9kaXNjYXJkUmVxdWVzdDogZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgICAgdmFyIHJlcXVlc3RJbmRleCA9IHRoaXMuYWN0aXZlUmVxdWVzdHMuaW5kZXhPZihyZXF1ZXN0KTtcblxuICAgICAgaWYgKHJlcXVlc3RJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKCdhY3RpdmVSZXF1ZXN0cycsIHJlcXVlc3RJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9yZXF1ZXN0T3B0aW9uc0NoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kZWJvdW5jZSgnZ2VuZXJhdGUtcmVxdWVzdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy51cmwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG8pIHtcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmRlYm91bmNlRHVyYXRpb24pO1xuICAgIH0sXG5cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5cbmBpcm9uLWxpc3RgIGRpc3BsYXlzIGEgdmlydHVhbCwgJ2luZmluaXRlJyBsaXN0LiBUaGUgdGVtcGxhdGUgaW5zaWRlXG50aGUgaXJvbi1saXN0IGVsZW1lbnQgcmVwcmVzZW50cyB0aGUgRE9NIHRvIGNyZWF0ZSBmb3IgZWFjaCBsaXN0IGl0ZW0uXG5UaGUgYGl0ZW1zYCBwcm9wZXJ0eSBzcGVjaWZpZXMgYW4gYXJyYXkgb2YgbGlzdCBpdGVtIGRhdGEuXG5cbkZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBub3QgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdCBpcyByZW5kZXJlZCBhdCBvbmNlO1xuaW5zdGVhZCBhIHNtYWxsIHN1YnNldCBvZiBhY3R1YWwgdGVtcGxhdGUgZWxlbWVudHMgKihlbm91Z2ggdG8gZmlsbCB0aGUgdmlld3BvcnQpKlxuYXJlIHJlbmRlcmVkIGFuZCByZXVzZWQgYXMgdGhlIHVzZXIgc2Nyb2xscy4gQXMgc3VjaCwgaXQgaXMgaW1wb3J0YW50IHRoYXQgYWxsXG5zdGF0ZSBvZiB0aGUgbGlzdCB0ZW1wbGF0ZSBpcyBib3VuZCB0byB0aGUgbW9kZWwgZHJpdmluZyBpdCwgc2luY2UgdGhlIHZpZXcgbWF5XG5iZSByZXVzZWQgd2l0aCBhIG5ldyBtb2RlbCBhdCBhbnkgdGltZS4gUGFydGljdWxhcmx5LCBhbnkgc3RhdGUgdGhhdCBtYXkgY2hhbmdlXG5hcyB0aGUgcmVzdWx0IG9mIGEgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBsaXN0IGl0ZW0gbXVzdCBiZSBib3VuZCB0byB0aGUgbW9kZWxcbnRvIGF2b2lkIHZpZXcgc3RhdGUgaW5jb25zaXN0ZW5jeS5cblxuIyMjIFNpemluZyBpcm9uLWxpc3RcblxuYGlyb24tbGlzdGAgbXVzdCBlaXRoZXIgYmUgZXhwbGljaXRseSBzaXplZCwgb3IgZGVsZWdhdGUgc2Nyb2xsaW5nIHRvIGFuXG5leHBsaWNpdGx5IHNpemVkIHBhcmVudC4gQnkgXCJleHBsaWNpdGx5IHNpemVkXCIsIHdlIG1lYW4gaXQgZWl0aGVyIGhhcyBhbiBleHBsaWNpdFxuQ1NTIGBoZWlnaHRgIHByb3BlcnR5IHNldCB2aWEgYSBjbGFzcyBvciBpbmxpbmUgc3R5bGUsIG9yIGVsc2UgaXMgc2l6ZWQgYnkgb3RoZXJcbmxheW91dCBtZWFucyAoZS5nLiB0aGUgYGZsZXhgIG9yIGBmaXRgIGNsYXNzZXMpLlxuXG4jIyMjIEZsZXhib3ggLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20va29rYWtpL2VkaXQ/aHRtbCxvdXRwdXQpXG5cbmBgYGh0bWxcbjx0ZW1wbGF0ZSBpcz1cIngtbGlzdFwiPlxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBpdGVtcz1cIltbaXRlbXNdXVwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L3RlbXBsYXRlPlxuYGBgXG4jIyMjIEV4cGxpY2l0IHNpemUgLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20vcGliZWZvL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMHZoOyAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC4gKi9cbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBNYWluIGRvY3VtZW50IHNjcm9sbGluZyAtIFtqc2Jpbl0oaHR0cDovL2pzYmluLmNvbS9jb2p1bGkvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjxoZWFkPlxuICA8c3R5bGU+XG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgYXBwLXRvb2xiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICAvKiBhZGQgcGFkZGluZyBzaW5jZSB0aGUgYXBwLXRvb2xiYXIgaXMgZml4ZWQgYXQgdGhlIHRvcCAqL1xuICAgICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3Qgc2Nyb2xsLXRhcmdldD1cImRvY3VtZW50XCI+XG4gICAgPHRlbXBsYXRlPlxuICAgICAgPGRpdj5cbiAgICAgICAgLi4uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2lyb24tbGlzdD5cbjwvYm9keT5cbmBgYFxuXG5gaXJvbi1saXN0YCBtdXN0IGJlIGdpdmVuIGEgYDx0ZW1wbGF0ZT5gIHdoaWNoIGNvbnRhaW5zIGV4YWN0bHkgb25lIGVsZW1lbnQuIEluIHRoZSBleGFtcGxlc1xuYWJvdmUgd2UgdXNlZCBhIGA8ZGl2PmAsIGJ1dCB5b3UgY2FuIHByb3ZpZGUgYW55IGVsZW1lbnQgKGluY2x1ZGluZyBjdXN0b20gZWxlbWVudHMpLlxuXG4jIyMgVGVtcGxhdGUgbW9kZWxcblxuTGlzdCBpdGVtIHRlbXBsYXRlcyBzaG91bGQgYmluZCB0byB0ZW1wbGF0ZSBtb2RlbHMgb2YgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbmBgYGpzXG57XG4gIGluZGV4OiAwLCAgICAgICAgLy8gaW5kZXggaW4gdGhlIGl0ZW0gYXJyYXlcbiAgc2VsZWN0ZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgdGFiSW5kZXg6IC0xLCAgICAvLyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCB0YWJJbmRleCBmb3IgZm9jdXMgbWFuYWdlbWVudFxuICBpdGVtOiB7fSAgICAgICAgIC8vIHVzZXIgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGl0ZW1zW2luZGV4XVxufVxuYGBgXG5cbkFsdGVybmF0aXZlbHksIHlvdSBjYW4gY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYXMgZGF0YSBpbmRleCBieSBjaGFuZ2luZyB0aGVcbmBpbmRleEFzYCBwcm9wZXJ0eS4gVGhlIGBhc2AgcHJvcGVydHkgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nXG5zY29wZSBmb3IgdGhlIGFycmF5LlxuXG5Gb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBgZGF0YWAgYXJyYXk6XG5cbiMjIyMjIGRhdGEuanNvblxuXG5gYGBqc1xuW1xuICB7XCJuYW1lXCI6IFwiQm9iXCJ9LFxuICB7XCJuYW1lXCI6IFwiVGltXCJ9LFxuICB7XCJuYW1lXCI6IFwiTWlrZVwifVxuXVxuYGBgXG5cblRoZSBmb2xsb3dpbmcgY29kZSB3b3VsZCByZW5kZXIgdGhlIGxpc3QgKG5vdGUgdGhlIG5hbWUgcHJvcGVydHkgaXMgYm91bmQgZnJvbSB0aGUgbW9kZWxcbm9iamVjdCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgc2NvcGUpOlxuXG5gYGBodG1sXG48aXJvbi1hamF4IHVybD1cImRhdGEuanNvblwiIGxhc3QtcmVzcG9uc2U9XCJ7e2RhdGF9fVwiIGF1dG8+PC9pcm9uLWFqYXg+XG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgR3JpZCBsYXlvdXRcblxuYGlyb24tbGlzdGAgc3VwcG9ydHMgYSBncmlkIGxheW91dCBpbiBhZGRpdGlvbiB0byBsaW5lYXIgbGF5b3V0IGJ5IHNldHRpbmdcbnRoZSBgZ3JpZGAgYXR0cmlidXRlLiAgSW4gdGhpcyBjYXNlLCB0aGUgbGlzdCB0ZW1wbGF0ZSBpdGVtIG11c3QgaGF2ZSBib3RoIGZpeGVkXG53aWR0aCBhbmQgaGVpZ2h0IChlLmcuIHZpYSBDU1MpLiBCYXNlZCBvbiB0aGlzLCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG5wZXIgcm93IGFyZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGxpc3Qgdmlld3BvcnQuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmBpcm9uLWxpc3RgIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBpdGVtcy4gSXQgYWxzbyBwcm92aWRlc1xuYSBgdGFiSW5kZXhgIHByb3BlcnR5IHdpdGhpbiB0aGUgdGVtcGxhdGUgc2NvcGUgdGhhdCBjYW4gYmUgdXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbkZvciBleGFtcGxlLCB1c2VycyBjYW4gcHJlc3MgdGhlIHVwIGFuZCBkb3duIGtleXMgdG8gbW92ZSB0byBwcmV2aW91cyBhbmQgbmV4dFxuaXRlbXMgaW4gdGhlIGxpc3Q6XG5cbmBgYGh0bWxcbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBTdHlsaW5nXG5cbllvdSBjYW4gdXNlIHRoZSBgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyYCBtaXhpbiB0byBzdHlsZSB0aGUgY29udGFpbmVyIG9mIGl0ZW1zOlxuXG5gYGBjc3Ncbmlyb24tbGlzdCB7XG4gLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9O1xufVxuYGBgXG5cbiMjIyBSZXNpemluZ1xuXG5gaXJvbi1saXN0YCBsYXlzIG91dCB0aGUgaXRlbXMgd2hlbiBpdCByZWNlaXZlcyBhIG5vdGlmaWNhdGlvbiB2aWEgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQuXG5UaGlzIGV2ZW50IGlzIGZpcmVkIGJ5IGFueSBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYC5cblxuQnkgZGVmYXVsdCwgZWxlbWVudHMgc3VjaCBhcyBgaXJvbi1wYWdlc2AsIGBwYXBlci10YWJzYCBvciBgcGFwZXItZGlhbG9nYCB3aWxsIHRyaWdnZXJcbnRoaXMgZXZlbnQgYXV0b21hdGljYWxseS4gSWYgeW91IGhpZGUgdGhlIGxpc3QgbWFudWFsbHkgKGUuZy4geW91IHVzZSBgZGlzcGxheTogbm9uZWApXG55b3UgbWlnaHQgd2FudCB0byBpbXBsZW1lbnQgYElyb25SZXNpemFibGVCZWhhdmlvcmAgb3IgZmlyZSB0aGlzIGV2ZW50IG1hbnVhbGx5IHJpZ2h0XG5hZnRlciB0aGUgbGlzdCBiZWNhbWUgdmlzaWJsZSBhZ2Fpbi4gRm9yIGV4YW1wbGU6XG5cbmBgYGpzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpcm9uLWxpc3QnKS5maXJlKCdpcm9uLXJlc2l6ZScpO1xuYGBgXG5cbiMjIyBXaGVuIHNob3VsZCBgPGlyb24tbGlzdD5gIGJlIHVzZWQ/XG5cbmBpcm9uLWxpc3RgIHNob3VsZCBiZSB1c2VkIHdoZW4gYSBwYWdlIGhhcyBzaWduaWZpY2FudGx5IG1vcmUgRE9NIG5vZGVzIHRoYW4gdGhlIG9uZXNcbnZpc2libGUgb24gdGhlIHNjcmVlbi4gZS5nLiB0aGUgcGFnZSBoYXMgNTAwIG5vZGVzLCBidXQgb25seSAyMCBhcmUgdmlzaWJsZSBhdCBhIHRpbWUuXG5UaGlzIGlzIHdoeSB3ZSByZWZlciB0byBpdCBhcyBhIGB2aXJ0dWFsYCBsaXN0LiBJbiB0aGlzIGNhc2UsIGEgYGRvbS1yZXBlYXRgIHdpbGwgc3RpbGxcbmNyZWF0ZSA1MDAgbm9kZXMgd2hpY2ggY291bGQgc2xvdyBkb3duIHRoZSB3ZWIgYXBwLCBidXQgYGlyb24tbGlzdGAgd2lsbCBvbmx5IGNyZWF0ZSAyMC5cblxuSG93ZXZlciwgaGF2aW5nIGFuIGBpcm9uLWxpc3RgIGRvZXMgbm90IG1lYW4gdGhhdCB5b3UgY2FuIGxvYWQgYWxsIHRoZSBkYXRhIGF0IG9uY2UuXG5TYXkgeW91IGhhdmUgYSBtaWxsaW9uIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlLCB5b3Ugd2FudCB0byBzcGxpdCB0aGUgZGF0YSBpbnRvIHBhZ2VzXG5zbyB5b3UgY2FuIGJyaW5nIGluIGEgcGFnZSBhdCB0aGUgdGltZS4gVGhlIHBhZ2UgY291bGQgY29udGFpbiA1MDAgaXRlbXMsIGFuZCBpcm9uLWxpc3RcbndpbGwgb25seSByZW5kZXIgMjAuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRcbkBlbGVtZW50IGlyb24tbGlzdFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5cbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tbGlzdFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1tYXgtZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyB7XG4gICAgICAgIEBhcHBseSAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZ3JpZF0pKSAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGFycmF5LXNlbGVjdG9yXG4gICAgICAgIGlkPVwic2VsZWN0b3JcIlxuICAgICAgICBpdGVtcz1cInt7aXRlbXN9fVwiXG4gICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZEl0ZW1zfX1cIlxuICAgICAgICBzZWxlY3RlZC1pdGVtPVwie3tzZWxlY3RlZEl0ZW19fVwiPjwvYXJyYXktc2VsZWN0b3I+XG5cbiAgICA8ZGl2IGlkPVwiaXRlbXNcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cblxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBJT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKTtcbiAgdmFyIElPU19UT1VDSF9TQ1JPTExJTkcgPSBJT1MgJiYgSU9TWzFdID49IDg7XG4gIHZhciBERUZBVUxUX1BIWVNJQ0FMX0NPVU5UID0gMztcbiAgdmFyIEhJRERFTl9ZID0gJy0xMDAwMHB4JztcbiAgdmFyIElURU1fV0lEVEggPSAwO1xuICB2YXIgSVRFTV9IRUlHSFQgPSAxO1xuICB2YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcbiAgdmFyIElTX1YyID0gUG9seW1lci5mbHVzaCAhPSBudWxsO1xuICB2YXIgQU5JTUFUSU9OX0ZSQU1FID0gSVNfVjIgPyBQb2x5bWVyLkFzeW5jLmFuaW1hdGlvbkZyYW1lIDogMDtcbiAgdmFyIElETEVfVElNRSA9IElTX1YyID8gUG9seW1lci5Bc3luYy5pZGxlUGVyaW9kIDogMTtcbiAgdmFyIE1JQ1JPX1RBU0sgPSBJU19WMiA/IFBvbHltZXIuQXN5bmMubWljcm9UYXNrIDogMjtcblxuICAvKiBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciBpcyBvbmx5IGF2YWlsYWJsZSB3aXRoIFBvbHltZXIgMi4wLiAqL1xuICBpZiAoIVBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yKSB7XG4gICAgLyogQHBvbHltZXJCZWhhdmlvciAqL1xuICAgIFBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yID0ge307XG4gIH1cblxuICBQb2x5bWVyKHtcblxuICAgIGlzOiAnaXJvbi1saXN0JyxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIGl0ZW1zIGRldGVybWluaW5nIGhvdyBtYW55IGluc3RhbmNlcyBvZiB0aGUgdGVtcGxhdGVcbiAgICAgICAqIHRvIHN0YW1wIGFuZCB0aGF0IHRoYXQgZWFjaCB0ZW1wbGF0ZSBpbnN0YW5jZSBzaG91bGQgYmluZCB0by5cbiAgICAgICAqL1xuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5XG4gICAgICAgKiBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIHRlbXBsYXRlIGluc3RhbmNlLlxuICAgICAgICovXG4gICAgICBhczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnaXRlbSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB3aXRoIHRoZSBpbmRleFxuICAgICAgICogZm9yIHRoZSByb3cuXG4gICAgICAgKi9cbiAgICAgIGluZGV4QXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2luZGV4J1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIHRvIGluZGljYXRlXG4gICAgICAgKiBpZiB0aGUgcm93IGlzIHNlbGVjdGVkLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdzZWxlY3RlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlLCB0aGUgbGlzdCBpcyByZW5kZXJlZCBhcyBhIGdyaWQuIEdyaWQgaXRlbXMgbXVzdCBoYXZlXG4gICAgICAgKiBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0IHNldCB2aWEgQ1NTLiBlLmcuXG4gICAgICAgKlxuICAgICAgICogYGBgaHRtbFxuICAgICAgICogPGlyb24tbGlzdCBncmlkPlxuICAgICAgICogICA8dGVtcGxhdGU+XG4gICAgICAgKiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XCI+IDEwMHgxMDAgPC9kaXY+XG4gICAgICAgKiAgIDwvdGVtcGxhdGU+XG4gICAgICAgKiA8L2lyb24tbGlzdD5cbiAgICAgICAqIGBgYFxuICAgICAgICovXG4gICAgICBncmlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19ncmlkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlLCB0YXBwaW5nIGEgcm93IHdpbGwgc2VsZWN0IHRoZSBpdGVtLCBwbGFjaW5nIGl0cyBkYXRhIG1vZGVsXG4gICAgICAgKiBpbiB0aGUgc2V0IG9mIHNlbGVjdGVkIGl0ZW1zIHJldHJpZXZhYmxlIHZpYSB0aGUgc2VsZWN0aW9uIHByb3BlcnR5LlxuICAgICAgICpcbiAgICAgICAqIE5vdGUgdGhhdCB0YXBwaW5nIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gdGhlIGxpc3QgaXRlbSB3aWxsIG5vdFxuICAgICAgICogcmVzdWx0IGluIHNlbGVjdGlvbiwgc2luY2UgdGhleSBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGVpciAqIG93biBhY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGlvbkVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyBmYWxzZSwgdGhpcyBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIGBudWxsYFxuICAgICAgICogaWYgbm8gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyB0cnVlLCB0aGlzIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHNlbGVjdGVkIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYHRydWVgLCBtdWx0aXBsZSBpdGVtcyBtYXkgYmUgc2VsZWN0ZWQgYXQgb25jZSAoaW4gdGhpcyBjYXNlLFxuICAgICAgICogYHNlbGVjdGVkYCBpcyBhbiBhcnJheSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMpLiAgV2hlbiBgZmFsc2VgLFxuICAgICAgICogb25seSBvbmUgaXRlbSBtYXkgYmUgc2VsZWN0ZWQgYXQgYSB0aW1lLlxuICAgICAgICovXG4gICAgICBtdWx0aVNlbGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG9mZnNldCB0b3AgZnJvbSB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgdG8gdGhlIGlyb24tbGlzdCBlbGVtZW50LlxuICAgICAgICogVGhpcyB2YWx1ZSBjYW4gYmUgY29tcHV0ZWQgdXNpbmcgdGhlIHBvc2l0aW9uIHJldHVybmVkIGJ5IGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWBcbiAgICAgICAqIGFsdGhvdWdoIGl0J3MgcHJlZmVycmVkIHRvIHVzZSBhIGNvbnN0YW50IHZhbHVlIHdoZW4gcG9zc2libGUuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyB1c2VmdWwgd2hlbiBhbiBleHRlcm5hbCBzY3JvbGxpbmcgZWxlbWVudCBpcyB1c2VkIGFuZCB0aGVyZSdzXG4gICAgICAgKiBzb21lIG9mZnNldCBiZXR3ZWVuIHRoZSBzY3JvbGxpbmcgZWxlbWVudCBhbmQgdGhlIGxpc3QuXG4gICAgICAgKiBGb3IgZXhhbXBsZTogYSBoZWFkZXIgaXMgcGxhY2VkIGFib3ZlIHRoZSBsaXN0LlxuICAgICAgICovXG4gICAgICBzY3JvbGxPZmZzZXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvYnNlcnZlcnM6IFtcbiAgICAgICdfaXRlbXNDaGFuZ2VkKGl0ZW1zLiopJyxcbiAgICAgICdfc2VsZWN0aW9uRW5hYmxlZENoYW5nZWQoc2VsZWN0aW9uRW5hYmxlZCknLFxuICAgICAgJ19tdWx0aVNlbGVjdGlvbkNoYW5nZWQobXVsdGlTZWxlY3Rpb24pJyxcbiAgICAgICdfc2V0T3ZlcmZsb3coc2Nyb2xsVGFyZ2V0LCBzY3JvbGxPZmZzZXQpJ1xuICAgIF0sXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuVGVtcGxhdGl6ZXIsXG4gICAgICBQb2x5bWVyLklyb25SZXNpemFibGVCZWhhdmlvcixcbiAgICAgIFBvbHltZXIuSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yLFxuICAgICAgUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHJhdGlvIG9mIGhpZGRlbiB0aWxlcyB0aGF0IHNob3VsZCByZW1haW4gaW4gdGhlIHNjcm9sbCBkaXJlY3Rpb24uXG4gICAgICogUmVjb21tZW5kZWQgdmFsdWUgfjAuNSwgc28gaXQgd2lsbCBkaXN0cmlidXRlIHRpbGVzIGV2ZWx5IGluIGJvdGggZGlyZWN0aW9ucy5cbiAgICAgKi9cbiAgICBfcmF0aW86IDAuNSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYWRkaW5nLXRvcCB2YWx1ZSBmb3IgdGhlIGxpc3QuXG4gICAgICovXG4gICAgX3Njcm9sbGVyUGFkZGluZ1RvcDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgYHNjcm9sbFRvcGAuXG4gICAgICovXG4gICAgX3Njcm9sbFBvc2l0aW9uOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHN1bSBvZiB0aGUgaGVpZ2h0cyBvZiBhbGwgdGhlIHRpbGVzIGluIHRoZSBET00uXG4gICAgICovXG4gICAgX3BoeXNpY2FsU2l6ZTogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdmVyYWdlIGBvZmZzZXRIZWlnaHRgIG9mIHRoZSB0aWxlcyBvYnNlcnZlZCB0aWxsIG5vdy5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxBdmVyYWdlOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aWxlcyB3aGljaCBgb2Zmc2V0SGVpZ2h0YCA+IDAgb2JzZXJ2ZWQgdW50aWwgbm93LlxuICAgICAqL1xuICAgIF9waHlzaWNhbEF2ZXJhZ2VDb3VudDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBZIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHJlbmRlcmVkIGluIHRoZSBgX3BoeXNpY2FsU3RhcnRgXG4gICAgICogdGlsZSByZWxhdGl2ZSB0byB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgX3BoeXNpY2FsVG9wOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBfdmlydHVhbENvdW50OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVzdGltYXRlZCBzY3JvbGwgaGVpZ2h0IGJhc2VkIG9uIGBfcGh5c2ljYWxBdmVyYWdlYFxuICAgICAqL1xuICAgIF9lc3RTY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Nyb2xsIGhlaWdodCBvZiB0aGUgZG9tIG5vZGVcbiAgICAgKi9cbiAgICBfc2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2YgbGlzdC5cbiAgICAgKi9cbiAgICBfdmlld3BvcnRIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mIGxpc3QuXG4gICAgICovXG4gICAgX3ZpZXdwb3J0V2lkdGg6IDAsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBET00gbm9kZXMgdGhhdCBhcmUgY3VycmVudGx5IGluIHRoZSB0cmVlXG4gICAgICogQHR5cGUgez9BcnJheTwhVGVtcGxhdGl6ZXJOb2RlPn1cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxJdGVtczogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGhlaWdodHMgZm9yIGVhY2ggaXRlbSBpbiBgX3BoeXNpY2FsSXRlbXNgXG4gICAgICogQHR5cGUgez9BcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIF9waHlzaWNhbFNpemVzOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBmaXJzdCB2aXNpYmxlIGluZGV4LlxuICAgICAqIFNlZSBgZmlyc3RWaXNpYmxlSW5kZXhgXG4gICAgICogQHR5cGUgez9udW1iZXJ9XG4gICAgICovXG4gICAgX2ZpcnN0VmlzaWJsZUluZGV4VmFsOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQSBQb2x5bWVyIGNvbGxlY3Rpb24gZm9yIHRoZSBpdGVtcy5cbiAgICAgKiBAdHlwZSB7P1BvbHltZXIuQ29sbGVjdGlvbn1cbiAgICAgKi9cbiAgICBfY29sbGVjdGlvbjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgY2FjaGVkIHZhbHVlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAqIFNlZSBgbGFzdFZpc2libGVJbmRleGBcbiAgICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICAgKi9cbiAgICBfbGFzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggbnVtYmVyIG9mIHBhZ2VzIHRvIHJlbmRlci4gT25lIHBhZ2UgaXMgZXF1aXZhbGVudCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIF9tYXhQYWdlczogMixcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkSXRlbTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2aXJ0dWFsIGluZGV4IG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICovXG4gICAgX2ZvY3VzZWRWaXJ0dWFsSW5kZXg6IC0xLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBoeXNpY2FsIGluZGV4IG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICovXG4gICAgX2ZvY3VzZWRQaHlzaWNhbEluZGV4OiAtMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aGUgaXRlbSB0aGF0IGlzIGZvY3VzZWQgaWYgaXQgaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgICAqIEBwcml2YXRlIHs/VGVtcGxhdGl6ZXJOb2RlfVxuICAgICAqL1xuICAgIF9vZmZzY3JlZW5Gb2N1c2VkSXRlbTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtIHRoYXQgYmFja2ZpbGxzIHRoZSBgX29mZnNjcmVlbkZvY3VzZWRJdGVtYCBpbiB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAgKiBsaXN0IHdoZW4gdGhhdCBpdGVtIGlzIG1vdmVkIG9mZnNjcmVlbi5cbiAgICAgKi9cbiAgICBfZm9jdXNCYWNrZmlsbEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBpdGVtcyBwZXIgcm93XG4gICAgICovXG4gICAgX2l0ZW1zUGVyUm93OiAxLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIGVhY2ggZ3JpZCBpdGVtXG4gICAgICovXG4gICAgX2l0ZW1XaWR0aDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHJvdyBpbiBncmlkIGxheW91dC5cbiAgICAgKi9cbiAgICBfcm93SGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvc3Qgb2Ygc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbiBtcy5cbiAgICAgKi9cbiAgICBfdGVtcGxhdGVDb3N0OiAwLFxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIHRvIHBhc3MgZXZlbnQubW9kZWwgcHJvcGVydHkgdG8gZGVjbGFyYXRpdmUgZXZlbnQgaGFuZGxlcnMgLVxuICAgICAqIHNlZSBwb2x5bWVyL3BvbHltZXIjNDMzOS5cbiAgICAgKi9cbiAgICBfcGFyZW50TW9kZWw6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm90dG9tIG9mIHRoZSBwaHlzaWNhbCBjb250ZW50LlxuICAgICAqL1xuICAgIGdldCBfcGh5c2ljYWxCb3R0b20oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBib3R0b20gb2YgdGhlIHNjcm9sbC5cbiAgICAgKi9cbiAgICBnZXQgX3Njcm9sbEJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbi10aCBpdGVtIHJlbmRlcmVkIGluIHRoZSBsYXN0IHBoeXNpY2FsIGl0ZW0uXG4gICAgICovXG4gICAgZ2V0IF92aXJ0dWFsRW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaHlzaWNhbCBjb250ZW50IHRoYXQgaXNuJ3Qgb24gdGhlIHNjcmVlbi5cbiAgICAgKi9cbiAgICBnZXQgX2hpZGRlbkNvbnRlbnRTaXplKCkge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLmdyaWQgPyB0aGlzLl9waHlzaWNhbFJvd3MgKiB0aGlzLl9yb3dIZWlnaHQgOiB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgICByZXR1cm4gc2l6ZSAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vZGUgZm9yIHRoZSBfdXNlclRlbXBsYXRlLlxuICAgICAqL1xuICAgIGdldCBfaXRlbXNQYXJlbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5kb20oUG9seW1lci5kb20odGhpcy5fdXNlclRlbXBsYXRlKS5wYXJlbnROb2RlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gc2Nyb2xsIHRvcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgX21heFNjcm9sbFRvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhcmdlc3Qgbi10aCB2YWx1ZSBmb3IgYW4gaXRlbSBzdWNoIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkIGluIGBfcGh5c2ljYWxTdGFydGAuXG4gICAgICovXG4gICAgZ2V0IF9tYXhWaXJ0dWFsU3RhcnQoKSB7XG4gICAgICB2YXIgdmlydHVhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyh0aGlzLl92aXJ0dWFsQ291bnQpO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHZpcnR1YWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQpO1xuICAgIH0sXG5cbiAgICBzZXQgX3ZpcnR1YWxTdGFydCh2YWwpIHtcbiAgICAgIHZhbCA9IHRoaXMuX2NsYW1wKHZhbCwgMCwgdGhpcy5fbWF4VmlydHVhbFN0YXJ0KTtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydFZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgZ2V0IF92aXJ0dWFsU3RhcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICAgKi9cbiAgICBzZXQgX3BoeXNpY2FsU3RhcnQodmFsKSB7XG4gICAgICB2YWwgPSB2YWwgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgdmFsID0gdGhpcy5fcGh5c2ljYWxDb3VudCArIHZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxTdGFydCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICAgKi9cbiAgICBnZXQgX3BoeXNpY2FsRW5kKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB9LFxuXG4gICAgc2V0IF9waHlzaWNhbENvdW50KHZhbCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudFZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgZ2V0IF9waHlzaWNhbENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgfHwgMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW1hbCBwaHlzaWNhbCBzaXplIHN1Y2ggdGhhdCB3ZSB3aWxsIGhhdmUgZW5vdWdoIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdG8gZmlsbCB1cCB0aGUgdmlld3BvcnQgYW5kIHJlY3ljbGUgd2hlbiB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqXG4gICAgICogVGhpcyBkZWZhdWx0IHZhbHVlIGFzc3VtZXMgdGhhdCB3ZSB3aWxsIGF0IGxlYXN0IGhhdmUgdGhlIGVxdWl2YWxlbnRcbiAgICAgKiB0byBhIHZpZXdwb3J0IG9mIHBoeXNpY2FsIGl0ZW1zIGFib3ZlIGFuZCBiZWxvdyB0aGUgdXNlcidzIHZpZXdwb3J0LlxuICAgICAqL1xuICAgIGdldCBfb3B0UGh5c2ljYWxTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID09PSAwID8gSW5maW5pdHkgOiB0aGlzLl92aWV3cG9ydEhlaWdodCAqIHRoaXMuX21heFBhZ2VzO1xuICAgIH0sXG5cbiAgIC8qKlxuICAgICogVHJ1ZSBpZiB0aGUgY3VycmVudCBsaXN0IGlzIHZpc2libGUuXG4gICAgKi9cbiAgICBnZXQgX2lzVmlzaWJsZSgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGZpcnN0VmlzaWJsZUluZGV4KCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsO1xuICAgICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICAgIGlkeCA9IHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuXG4gICAgICAgICAgaWYgKHBoeXNpY2FsT2Zmc2V0ID4gdGhpcy5fc2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQgPyB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdykgOiB2aWR4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIYW5kbGUgYSBwYXJ0aWFsbHkgcmVuZGVyZWQgZmluYWwgcm93IGluIGdyaWQgbW9kZVxuICAgICAgICAgIGlmICh0aGlzLmdyaWQgJiYgdGhpcy5fdmlydHVhbENvdW50IC0gMSA9PT0gdmlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IDA7XG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGxhc3RWaXNpYmxlSW5kZXgoKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbDtcbiAgICAgIGlmIChpZHggPT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgaWR4ID0gTWF0aC5taW4odGhpcy5fdmlydHVhbENvdW50LFxuICAgICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICsgdGhpcy5fZXN0Um93c0luVmlldyAqIHRoaXMuX2l0ZW1zUGVyUm93IC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBoeXNpY2FsT2Zmc2V0ID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA8IHRoaXMuX3Njcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICBpZHggPSB2aWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH0sXG5cbiAgICBnZXQgX2RlZmF1bHRTY3JvbGxUYXJnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0IF92aXJ0dWFsUm93Q291bnQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpcnR1YWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9LFxuXG4gICAgZ2V0IF9lc3RSb3dzSW5WaWV3KCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl92aWV3cG9ydEhlaWdodCAvIHRoaXMuX3Jvd0hlaWdodCk7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxSb3dzKCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgIH0sXG5cbiAgICBnZXQgX3Njcm9sbE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgKyB0aGlzLnNjcm9sbE9mZnNldDtcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2RpZEZvY3VzLmJpbmQodGhpcyksIHRydWUpO1xuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgIC8vIGBpcm9uLXJlc2l6ZWAgaXMgZmlyZWQgd2hlbiB0aGUgbGlzdCBpcyBhdHRhY2hlZCBpZiB0aGUgZXZlbnQgaXMgYWRkZWRcbiAgICAgIC8vIGJlZm9yZSBhdHRhY2hlZCBjYXVzaW5nIHVubmVjZXNzYXJ5IHdvcmsuXG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICAgIHRoaXMubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICAgIH0sXG5cbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMsICdpcm9uLXJlc2l6ZScsICdfcmVzaXplSGFuZGxlcicpO1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBpZiB0aGlzIGVsZW1lbnQgaGFzIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvblxuICAgICAqL1xuICAgIF9zZXRPdmVyZmxvdzogZnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSB7XG4gICAgICB0aGlzLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ3RvdWNoJyA6ICcnO1xuICAgICAgdGhpcy5zdHlsZS5vdmVyZmxvd1kgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAnYXV0bycgOiAnJztcbiAgICAgIC8vIENsZWFyIGNhY2hlLlxuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIGlmIHlvdSBkeW5hbWljYWxseSB1cGRhdGUgdGhlIHZpZXdwb3J0J3NcbiAgICAgKiBzaXplIG9yIENTUyBwYWRkaW5nLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXNcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpO1xuICAgICAgdGhpcy5fc2Nyb2xsZXJQYWRkaW5nVG9wID0gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAwIDpcbiAgICAgICAgICBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICAgIHRoaXMuX2lzUlRMID0gQm9vbGVhbihzdHlsZXMuZGlyZWN0aW9uID09PSAncnRsJyk7XG4gICAgICB0aGlzLl92aWV3cG9ydFdpZHRoID0gdGhpcy4kLml0ZW1zLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgICB0aGlzLmdyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVjeWNsZXMgdGhlIHBoeXNpY2FsIGl0ZW1zIHdoZW4gbmVlZGVkLlxuICAgICAqL1xuICAgIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLl9tYXhTY3JvbGxUb3AsIHRoaXMuX3Njcm9sbFRvcCkpO1xuICAgICAgdmFyIGRlbHRhID0gc2Nyb2xsVG9wIC0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAgIC8vIFRyYWNrIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsVG9wO1xuICAgICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgICAgaWYgKE1hdGguYWJzKGRlbHRhKSA+IHRoaXMuX3BoeXNpY2FsU2l6ZSAmJiB0aGlzLl9waHlzaWNhbFNpemUgPiAwKSB7XG4gICAgICAgIGRlbHRhID0gZGVsdGEgLSB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICAgIHZhciBpZHhBZGp1c3RtZW50ID0gTWF0aC5yb3VuZChkZWx0YSAvIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSkgKiB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBpZHhBZGp1c3RtZW50O1xuICAgICAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fdmlydHVhbFN0YXJ0IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCA+IDApIHtcbiAgICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyhpc1Njcm9sbGluZ0Rvd24pO1xuICAgICAgICBpZiAoaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSByZXVzYWJsZXMucGh5c2ljYWxUb3A7XG4gICAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGUocmV1c2FibGVzLmluZGV4ZXMsIGlzU2Nyb2xsaW5nRG93biA/IG51bGwgOiByZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKCdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLCB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKHRoaXMsIDApLCBNSUNST19UQVNLKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgaW5kZXhlcyBvZiB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAgKiB0aGF0IG1pZ2h0IGJlIHJldXNlZCBhbmQgdGhlIHBoeXNpY2FsVG9wLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmcm9tVG9wIElmIHRoZSBwb3RlbnRpYWwgcmV1c2FibGUgaXRlbXMgYXJlIGFib3ZlIHRoZSBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqL1xuICAgIF9nZXRSZXVzYWJsZXM6IGZ1bmN0aW9uKGZyb21Ub3ApIHtcbiAgICAgIHZhciBpdGgsIGxhc3RJdGgsIG9mZnNldENvbnRlbnQsIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgIHZhciBpZHhzID0gW107XG4gICAgICB2YXIgcHJvdGVjdGVkT2Zmc2V0Q29udGVudCA9IHRoaXMuX2hpZGRlbkNvbnRlbnRTaXplICogdGhpcy5fcmF0aW87XG4gICAgICB2YXIgdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgdmFyIHZpcnR1YWxFbmQgPSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgICAgdmFyIHBoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgdmFyIHRvcCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgdmFyIGJvdHRvbSA9IHRoaXMuX3BoeXNpY2FsQm90dG9tICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIHZhciBzY3JvbGxCb3R0b20gPSB0aGlzLl9zY3JvbGxCb3R0b207XG5cbiAgICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IHNjcm9sbFRvcCAtIHRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IGJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICAgIH1cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHBoeXNpY2FsSXRlbUhlaWdodCA9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpdGgpO1xuICAgICAgICBvZmZzZXRDb250ZW50ID0gb2Zmc2V0Q29udGVudCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgaWYgKGlkeHMubGVuZ3RoID49IHBoeXNpY2FsQ291bnQgfHwgb2Zmc2V0Q29udGVudCA8PSBwcm90ZWN0ZWRPZmZzZXRDb250ZW50KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgICAgaWYgKHZpcnR1YWxFbmQgKyBpZHhzLmxlbmd0aCArIDEgPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgICAgaWYgKHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodCA+PSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgICB0b3AgPSB0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgICAgaXRoID0gKGl0aCArIDEpICUgcGh5c2ljYWxDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgICAgaWYgKHZpcnR1YWxTdGFydCAtIGlkeHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgICBpZiAodG9wICsgdGhpcy5fcGh5c2ljYWxTaXplIC0gcGh5c2ljYWxJdGVtSGVpZ2h0IDw9IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICAgIHRvcCA9IHRvcCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgICBpdGggPSAoaXRoID09PSAwKSA/IHBoeXNpY2FsQ291bnQgLSAxIDogaXRoIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgaW5kZXhlczogaWR4cywgcGh5c2ljYWxUb3A6IHRvcCAtIHRoaXMuX3Njcm9sbE9mZnNldCB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgaXRlbXMsIHN0YXJ0aW5nIGZyb20gdGhlIGBfdmlydHVhbFN0YXJ0YCBpdGVtLlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IG1vdmluZ1VwXG4gICAgICovXG4gICAgX3VwZGF0ZTogZnVuY3Rpb24oaXRlbVNldCwgbW92aW5nVXApIHtcbiAgICAgIGlmICgoaXRlbVNldCAmJiBpdGVtU2V0Lmxlbmd0aCA9PT0gMCkgfHwgdGhpcy5fcGh5c2ljYWxDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKGl0ZW1TZXQpO1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhpdGVtU2V0KTtcbiAgICAgIC8vIEFkanVzdCBvZmZzZXQgYWZ0ZXIgbWVhc3VyaW5nLlxuICAgICAgaWYgKG1vdmluZ1VwKSB7XG4gICAgICAgIHdoaWxlIChtb3ZpbmdVcC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gbW92aW5nVXAucG9wKCk7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgLT0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9vbCBvZiBET00gZWxlbWVudHMgYW5kIGF0dGFjaGVzIHRoZW0gdG8gdGhlIGxvY2FsIGRvbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIHBvb2xcbiAgICAgKi9cbiAgICBfY3JlYXRlUG9vbDogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICAgIHZhciBpLCBpbnN0O1xuICAgICAgdmFyIHBoeXNpY2FsSXRlbXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGluc3QgPSB0aGlzLnN0YW1wKG51bGwpO1xuICAgICAgICAvLyBUT0RPKGJsYXN0ZW4pOlxuICAgICAgICAvLyBGaXJzdCBlbGVtZW50IGNoaWxkIGlzIGl0ZW07IFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgY2hpbGRyZW5bMF1cbiAgICAgICAgLy8gb24gYSBkb2MgZnJhZ21lbnQuIFRlc3QgdGhpcyB0byBzZWUgaWYgaXQgc3RpbGwgbWF0dGVycy5cbiAgICAgICAgcGh5c2ljYWxJdGVtc1tpXSA9IGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJyk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGh5c2ljYWxJdGVtcztcbiAgICB9LFxuXG4gICAgX2lzQ2xpZW50RnVsbDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsQm90dG9tICE9IDAgJiYgdGhpcy5fcGh5c2ljYWxCb3R0b20tMSA+PSB0aGlzLl9zY3JvbGxCb3R0b20gJiZcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA8PSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW5jcmVhc2VzIHRoZSBwb29sIHNpemUuXG4gICAgICovXG4gICAgX2luY3JlYXNlUG9vbElmTmVlZGVkOiBmdW5jdGlvbihjb3VudCkge1xuICAgICAgdmFyIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY2xhbXAodGhpcy5fcGh5c2ljYWxDb3VudCArIGNvdW50LFxuICAgICAgICAgIERFRkFVTFRfUEhZU0lDQUxfQ09VTlQsIHRoaXMuX3ZpcnR1YWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3cobmV4dFBoeXNpY2FsQ291bnQpO1xuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB2YXIgY29ycmVjdGlvbiA9IG5leHRQaHlzaWNhbENvdW50ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIGlmIChjb3JyZWN0aW9uICYmIG5leHRQaHlzaWNhbENvdW50IC0gY29ycmVjdGlvbiA8PSB0aGlzLl9waHlzaWNhbENvdW50KSB7XG4gICAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgKz0gdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgLT0gY29ycmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWx0YSA9IG5leHRQaHlzaWNhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIHZhciBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuXG4gICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgdmFyIHRzID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAvLyBDb25jYXQgYXJyYXlzIGluIHBsYWNlLlxuICAgICAgICBbXS5wdXNoLmFwcGx5KHRoaXMuX3BoeXNpY2FsSXRlbXMsIHRoaXMuX2NyZWF0ZVBvb2woZGVsdGEpKTtcbiAgICAgICAgW10ucHVzaC5hcHBseSh0aGlzLl9waHlzaWNhbFNpemVzLCBuZXcgQXJyYXkoZGVsdGEpKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyBkZWx0YTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwaHlzaWNhbCBzdGFydCBpZiBpdCBuZWVkcyB0byBwcmVzZXJ2ZSB0aGUgbW9kZWwgb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24sIHRoZSBmb2N1c2VkIGl0ZW0gaXMgY3VycmVudGx5IHJlbmRlcmVkIGFuZCBpdHMgbW9kZWwgd291bGRcbiAgICAgICAgLy8gaGF2ZSBjaGFuZ2VkIGFmdGVyIGluY3JlYXNpbmcgdGhlIHBvb2wgaWYgdGhlIHBoeXNpY2FsIHN0YXJ0IHJlbWFpbmVkIHVuY2hhbmdlZC5cbiAgICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsU3RhcnQgPiB0aGlzLl9waHlzaWNhbEVuZCAmJlxuICAgICAgICAgICAgdGhpcy5faXNJbmRleFJlbmRlcmVkKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpICYmXG4gICAgICAgICAgICB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpIDwgdGhpcy5fcGh5c2ljYWxFbmQpIHtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvc3QgPSAod2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC0gdHMpIC8gZGVsdGE7XG4gICAgICAgIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG4gICAgICB9XG4gICAgICAvLyBUaGUgdXBwZXIgYm91bmRzIGlzIG5vdCBmaXhlZCB3aGVuIGRlYWxpbmcgd2l0aCBhIGdyaWQgdGhhdCBkb2Vzbid0XG4gICAgICAvLyBmaWxsIGl0J3MgbGFzdCByb3cgd2l0aCB0aGUgZXhhY3QgbnVtYmVyIG9mIGl0ZW1zIHBlciByb3cuXG4gICAgICBpZiAodGhpcy5fdmlydHVhbEVuZCA+PSB0aGlzLl92aXJ0dWFsQ291bnQgLSAxIHx8IG5leHRJbmNyZWFzZSA9PT0gMCkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNDbGllbnRGdWxsKCkpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBuZXh0SW5jcmVhc2VcbiAgICAgICAgICApLCBNSUNST19UQVNLKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGh5c2ljYWxTaXplIDwgdGhpcy5fb3B0UGh5c2ljYWxTaXplKSB7XG4gICAgICAgIC8vIFlpZWxkIGFuZCBpbmNyZWFzZSB0aGUgcG9vbCBkdXJpbmcgaWRsZSB0aW1lIHVudGlsIHRoZSBwaHlzaWNhbCBzaXplIGlzIG9wdGltYWwuXG4gICAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5fY2xhbXAoTWF0aC5yb3VuZCg1MCAvIHRoaXMuX3RlbXBsYXRlQ29zdCksIDEsIG5leHRJbmNyZWFzZSlcbiAgICAgICAgICApLCBJRExFX1RJTUUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBhIG5ldyBsaXN0LlxuICAgICAqL1xuICAgIF9yZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuX2lzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCAhPT0gMCkge1xuICAgICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKHRydWUpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwKSB7XG4gICAgICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKERFRkFVTFRfUEhZU0lDQUxfQ09VTlQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGV0aXplcyB0aGUgdXNlciB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBfZW5zdXJlVGVtcGxhdGl6ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl91c2VyVGVtcGxhdGUgPSB0aGlzLnF1ZXJ5RWZmZWN0aXZlQ2hpbGRyZW4oJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAoIXRoaXMuX3VzZXJUZW1wbGF0ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2lyb24tbGlzdCByZXF1aXJlcyBhIHRlbXBsYXRlIHRvIGJlIHByb3ZpZGVkIGluIGxpZ2h0LWRvbScpO1xuICAgICAgfVxuICAgICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7fTtcbiAgICAgIGluc3RhbmNlUHJvcHMuX19rZXlfXyA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuYXNdID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHNbdGhpcy5pbmRleEFzXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuc2VsZWN0ZWRBc10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wcy50YWJJbmRleCA9IHRydWU7XG4gICAgICB0aGlzLl9pbnN0YW5jZVByb3BzID0gaW5zdGFuY2VQcm9wcztcbiAgICAgIHRoaXMudGVtcGxhdGl6ZSh0aGlzLl91c2VyVGVtcGxhdGUsIHRoaXMubXV0YWJsZURhdGEpO1xuICAgIH0sXG5cbiAgICBfZ3JpZENoYW5nZWQ6IGZ1bmN0aW9uKG5ld0dyaWQsIG9sZEdyaWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2xkR3JpZCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgICBQb2x5bWVyLmZsdXNoID8gUG9seW1lci5mbHVzaCgpIDogUG9seW1lci5kb20uZmx1c2goKTtcbiAgICAgIG5ld0dyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGl0ZW1zIGhhdmUgY2hhbmdlZC4gVGhhdCBpcywgcmVzc2lnbm1lbnRzXG4gICAgICogdG8gYGl0ZW1zYCwgc3BsaWNlcyBvciB1cGRhdGVzIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICovXG4gICAgX2l0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlKSB7XG4gICAgICBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcycpIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSAwO1xuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uID0gdGhpcy5pdGVtcyAmJiBQb2x5bWVyLkNvbGxlY3Rpb24gP1xuICAgICAgICAgICAgUG9seW1lci5Db2xsZWN0aW9uLmdldCh0aGlzLml0ZW1zKSA6IG51bGw7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXkgPSB7fTtcbiAgICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgfHwgMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtcyA9IHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW107XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXMgPSB0aGlzLl9waHlzaWNhbFNpemVzIHx8IFtdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvcCA+IHRoaXMuX3Njcm9sbE9mZnNldCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMuc3BsaWNlcycpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0VmlydHVhbEluZGV4KGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMpO1xuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICAgICAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYWZmZWN0ZWQgaW5kZXggaXMgcmVuZGVyZWQuXG4gICAgICAgIHZhciBhZmZlY3RlZEluZGV4UmVuZGVyZWQgPSBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5kZXhSZW5kZXJlZChzcGxpY2UuaW5kZXgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSB8fCBhZmZlY3RlZEluZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucGF0aCAhPT0gJ2l0ZW1zLmxlbmd0aCcpIHtcbiAgICAgICAgdGhpcy5fZm9yd2FyZEl0ZW1QYXRoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZEl0ZW1QYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoNik7IC8vICdpdGVtcy4nLmxlbmd0aCA9PSA2XG4gICAgICB2YXIgZG90ID0gcGF0aC5pbmRleE9mKCcuJykgKyAxO1xuICAgICAgaWYgKGRvdCA9PT0gMCkge1xuICAgICAgICBkb3QgPSBwYXRoLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSBJU19WMlxuICAgICAgICAgID8gcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMCwgZG90KSwgMTApXG4gICAgICAgICAgLy8gRXh0cmFjdCBgI2AgZnJvbSBgcGF0aGAuXG4gICAgICAgICAgOiBwYXJzZUludChwYXRoLnN1YnN0cmluZygxLCBkb3QpLCAxMCk7XG4gICAgICB2YXIgb2Zmc2NyZWVuSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgdmFyIGlzSW5kZXhSZW5kZXJlZCA9IHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpO1xuICAgICAgdmFyIGluc3Q7XG4gICAgICB2YXIgcGlkeDtcblxuICAgICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICBwaWR4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpO1xuICAgICAgICBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICB9IGVsc2UgaWYgKG9mZnNjcmVlbkl0ZW0pIHtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9mZnNjcmVlbkl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpbnN0IHx8IGluc3RbdGhpcy5pbmRleEFzXSAhPT0gaWR4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZyhkb3QpO1xuICAgICAgcGF0aCA9IHRoaXMuYXMgKyAocGF0aCA/ICcuJyArIHBhdGggOiAnJyk7XG4gICAgICBJU19WMlxuICAgICAgICA/IGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eU9yUGF0aChwYXRoLCB2YWx1ZSwgZmFsc2UsIHRydWUpXG4gICAgICAgIDogaW5zdC5ub3RpZnlQYXRoKHBhdGgsIHZhbHVlLCB0cnVlKTtcbiAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAvLyBUT0RPKGJsYXN0ZW4pOiBWMSBkb2Vzbid0IGRvIHRoaXMgYW5kIGl0J3MgYSBidWdcbiAgICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbcGlkeF0pO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyFBcnJheTwhUG9seW1lclNwbGljZT59IHNwbGljZXNcbiAgICAgKi9cbiAgICBfYWRqdXN0VmlydHVhbEluZGV4OiBmdW5jdGlvbihzcGxpY2VzKSB7XG4gICAgICBzcGxpY2VzLmZvckVhY2goZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgIC8vIGRlc2VsZWN0IHJlbW92ZWQgaXRlbXNcbiAgICAgICAgc3BsaWNlLnJlbW92ZWQuZm9yRWFjaCh0aGlzLl9yZW1vdmVJdGVtLCB0aGlzKTtcbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIGNhcmUgYWJvdXQgY2hhbmdlcyBoYXBwZW5pbmcgYWJvdmUgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgaWYgKHNwbGljZS5pbmRleCA8IHRoaXMuX3ZpcnR1YWxTdGFydCkge1xuICAgICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgc3BsaWNlLmluZGV4IC0gdGhpcy5fdmlydHVhbFN0YXJ0KTtcbiAgICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyBkZWx0YTtcbiAgICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArIGRlbHRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QoaXRlbSk7XG4gICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgZm9jdXNlZCBpdGVtXG4gICAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0gJiYgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pW3RoaXMuYXNdID09PSBpdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhIHByb3ZpZGVkIGZ1bmN0aW9uIHBlciBldmVyeSBwaHlzaWNhbCBpbmRleCBpbiBgaXRlbVNldGBcbiAgICAgKiBgaXRlbVNldGAgZGVmYXVsdCB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBlbnRpcmUgc2V0IG9mIHBoeXNpY2FsIGluZGV4ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFmdW5jdGlvbihudW1iZXIsIG51bWJlcil9IGZuXG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICAgKi9cbiAgICBfaXRlcmF0ZUl0ZW1zOiBmdW5jdGlvbihmbiwgaXRlbVNldCkge1xuICAgICAgdmFyIHBpZHgsIHZpZHgsIHJ0biwgaTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgaXRlbVNldCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbVNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBpZHggPSBpdGVtU2V0W2ldO1xuICAgICAgICAgIHZpZHggPSB0aGlzLl9jb21wdXRlVmlkeChwaWR4KTtcbiAgICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaWR4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgdmlkeCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgICAgZm9yICg7IHBpZHggPCB0aGlzLl9waHlzaWNhbENvdW50OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwaWR4ID0gMDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsU3RhcnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aXJ0dWFsIGluZGV4IGZvciBhIGdpdmVuIHBoeXNpY2FsIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGlkeCBQaHlzaWNhbCBpbmRleFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBfY29tcHV0ZVZpZHg6IGZ1bmN0aW9uKHBpZHgpIHtcbiAgICAgIGlmIChwaWR4ID49IHRoaXMuX3BoeXNpY2FsU3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIChwaWR4IC0gdGhpcy5fcGh5c2ljYWxTdGFydCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbFN0YXJ0KSArIHBpZHg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgdGhlIGRhdGEgbW9kZWxzIHRvIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX2Fzc2lnbk1vZGVsczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XTtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbdmlkeF07XG4gICAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGVsKTtcbiAgICAgICAgICBpbnN0Ll9fa2V5X18gPSB0aGlzLl9jb2xsZWN0aW9uID8gdGhpcy5fY29sbGVjdGlvbi5nZXRLZXkoaXRlbSkgOiBudWxsO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmFzLCBpdGVtKTtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5zZWxlY3RlZEFzLCB0aGlzLiQuc2VsZWN0b3IuaXNTZWxlY3RlZChpdGVtKSk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsIHRoaXMuaW5kZXhBcywgdmlkeCk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsICd0YWJJbmRleCcsIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPT09IHZpZHggPyAwIDogLTEpO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlbaW5zdC5fX2tleV9fXSA9IHBpZHg7XG4gICAgICAgICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcyh0cnVlKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9XG4gICAgICB9LCBpdGVtU2V0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgaGVpZ2h0IGZvciBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX3VwZGF0ZU1ldHJpY3M6IGZ1bmN0aW9uKGl0ZW1TZXQpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkaXN0cmlidXRlZCBhbGwgdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICAvLyBzbyB3ZSBjYW4gbWVhc3VyZSB0aGVtLlxuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG5cbiAgICAgIHZhciBuZXdQaHlzaWNhbFNpemUgPSAwO1xuICAgICAgdmFyIG9sZFBoeXNpY2FsU2l6ZSA9IDA7XG4gICAgICB2YXIgcHJldkF2Z0NvdW50ID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQ7XG4gICAgICB2YXIgcHJldlBoeXNpY2FsQXZnID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICBvbGRQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSB8fCAwO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG5ld1BoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID8gMSA6IDA7XG4gICAgICB9LCBpdGVtU2V0KTtcblxuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemUgPSBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZFBoeXNpY2FsU2l6ZSA9ICh0aGlzLl9pdGVtc1BlclJvdyA9PT0gMSkgPyBvbGRQaHlzaWNhbFNpemUgOiAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9IHRoaXMuX3BoeXNpY2FsU2l6ZSArIG5ld1BoeXNpY2FsU2l6ZSAtIG9sZFBoeXNpY2FsU2l6ZTtcbiAgICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSAxO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSBhdmVyYWdlIGlmIGl0IG1lYXN1cmVkIHNvbWV0aGluZy5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCAhPT0gcHJldkF2Z0NvdW50KSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAoKHByZXZQaHlzaWNhbEF2ZyAqIHByZXZBdmdDb3VudCkgKyBuZXdQaHlzaWNhbFNpemUpIC9cbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZUdyaWRNZXRyaWNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2l0ZW1XaWR0aCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDIwMDtcbiAgICAgIHRoaXMuX3Jvd0hlaWdodCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5vZmZzZXRIZWlnaHQgOiAyMDA7XG4gICAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1XaWR0aCA/IE1hdGguZmxvb3IodGhpcy5fdmlld3BvcnRXaWR0aCAvIHRoaXMuX2l0ZW1XaWR0aCkgOiB0aGlzLl9pdGVtc1BlclJvdztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBoeXNpY2FsIGl0ZW1zLlxuICAgICAqL1xuICAgIF9wb3NpdGlvbkl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2FkanVzdFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgIHZhciB5ID0gdGhpcy5fcGh5c2ljYWxUb3A7XG5cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFyIHRvdGFsSXRlbVdpZHRoID0gdGhpcy5faXRlbXNQZXJSb3cgKiB0aGlzLl9pdGVtV2lkdGg7XG4gICAgICAgIHZhciByb3dPZmZzZXQgPSAodGhpcy5fdmlld3BvcnRXaWR0aCAtIHRvdGFsSXRlbVdpZHRoKSAvIDI7XG5cbiAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICB2YXIgbW9kdWx1cyA9IHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoKG1vZHVsdXMgKiB0aGlzLl9pdGVtV2lkdGgpICsgcm93T2Zmc2V0KTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgICAgICAgIHggPSB4ICogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlM2QoeCArICdweCcsIHkgKyAncHgnLCAwLCB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTmV4dFJvdyh2aWR4KSkge1xuICAgICAgICAgICAgeSArPSB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgICAgeSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudDogZnVuY3Rpb24ocGlkeCkge1xuICAgICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAgICogd2hldGhlciBvciBub3QgdGhlIG5leHQgaW5kZXggd2lsbCBuZWVkXG4gICAgICogdG8gYmUgcmVuZGVyZWQgb24gYSBuZXcgcm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZpZHggVmlydHVhbCBpbmRleFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgX3Nob3VsZFJlbmRlck5leHRSb3c6IGZ1bmN0aW9uKHZpZHgpIHtcbiAgICAgIHJldHVybiB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3cgPT09IHRoaXMuX2l0ZW1zUGVyUm93IC0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHdoZW4gaXQgd2FzIG92ZXJlc3RpbWF0ZWQuXG4gICAgICovXG4gICAgX2FkanVzdFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkZWx0YUhlaWdodCA9IHRoaXMuX3ZpcnR1YWxTdGFydCA9PT0gMCA/IHRoaXMuX3BoeXNpY2FsVG9wIDpcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAgIC8vIE5vdGU6IHRoZSBkZWx0YSBjYW4gYmUgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gICAgICBpZiAoZGVsdGFIZWlnaHQgIT09IDApIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgICAgICAvLyBqdWtpbmcgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBpbnRlcmlhbCBzY3JvbGxpbmcgb24gaU9TIGlzIG5vIGJ1ZW5vXG4gICAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3AgLSBkZWx0YUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICAgKi9cbiAgICBfcmVzZXRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24ocG9zKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9wID0gcG9zO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVVwZGF0ZSBJZiB0cnVlLCB1cGRhdGVzIHRoZSBoZWlnaHQgbm8gbWF0dGVyIHdoYXQuXG4gICAgICovXG4gICAgX3VwZGF0ZVNjcm9sbGVyU2l6ZTogZnVuY3Rpb24oZm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gKHRoaXMuX3BoeXNpY2FsQm90dG9tICtcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuX3ZpcnR1YWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQsIDApICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlKTtcbiAgICAgIH1cbiAgICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgICAgZm9yY2VVcGRhdGUgPSBmb3JjZVVwZGF0ZSB8fCB0aGlzLl9zY3JvbGxQb3NpdGlvbiA+PSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgICBmb3JjZVVwZGF0ZSA9IGZvcmNlVXBkYXRlIHx8IHRoaXMuZ3JpZCAmJiB0aGlzLiQuaXRlbXMuc3R5bGUuaGVpZ2h0IDwgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0O1xuICAgICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgICAgaWYgKGZvcmNlVXBkYXRlIHx8IE1hdGguYWJzKHRoaXMuX2VzdFNjcm9sbEhlaWdodCAtIHRoaXMuX3Njcm9sbEhlaWdodCkgPj0gdGhpcy5fdmlld3BvcnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgaXRlbSBpbiB0aGUgdmlydHVhbCBsaXN0IHJlZ2FyZGxlc3NcbiAgICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzY3JvbGxUb0l0ZW1cbiAgICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAgICovXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbihpdGVtKXtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvSW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIHZpcnR1YWwgbGlzdCByZWdhcmRsZXNzXG4gICAgICogb2YgdGhlIHBoeXNpY2FsIGl0ZW1zIGluIHRoZSBET00gdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2Nyb2xsVG9JbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggVGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAgICovXG4gICAgc2Nyb2xsVG9JbmRleDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBpZiAodHlwZW9mIGlkeCAhPT0gJ251bWJlcicgfHwgaWR4IDwgMCB8fCBpZHggPiB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICAvLyBJdGVtcyBzaG91bGQgaGF2ZSBiZWVuIHJlbmRlcmVkIHByaW9yIHNjcm9sbGluZyB0byBhbiBpbmRleC5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlkeCA9IHRoaXMuX2NsYW1wKGlkeCwgMCwgdGhpcy5fdmlydHVhbENvdW50LTEpO1xuICAgICAgLy8gVXBkYXRlIHRoZSB2aXJ0dWFsIHN0YXJ0IG9ubHkgd2hlbiBuZWVkZWQuXG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpIHx8IGlkeCA+PSB0aGlzLl9tYXhWaXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5ncmlkID8gKGlkeCAtIHRoaXMuX2l0ZW1zUGVyUm93ICogMikgOiAoaWR4IC0gMSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKCk7XG4gICAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSBNYXRoLmZsb29yKHRoaXMuX3ZpcnR1YWxTdGFydCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAgKiB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICAgIHZhciBjdXJyZW50VG9wSXRlbSA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICB2YXIgY3VycmVudFZpcnR1YWxJdGVtID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgdmFyIHRhcmdldE9mZnNldFRvcCA9IDA7XG4gICAgICB2YXIgaGlkZGVuQ29udGVudFNpemUgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZTtcbiAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSBhcyBtdWNoIGFzIHdlIGNhbi5cbiAgICAgIHdoaWxlIChjdXJyZW50VmlydHVhbEl0ZW0gPCBpZHggJiYgdGFyZ2V0T2Zmc2V0VG9wIDw9IGhpZGRlbkNvbnRlbnRTaXplKSB7XG4gICAgICAgIHRhcmdldE9mZnNldFRvcCA9IHRhcmdldE9mZnNldFRvcCArIHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChjdXJyZW50VG9wSXRlbSk7XG4gICAgICAgIGN1cnJlbnRUb3BJdGVtID0gKGN1cnJlbnRUb3BJdGVtICsgMSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgICBjdXJyZW50VmlydHVhbEl0ZW0rKztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSh0cnVlKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24odGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQgKyB0YXJnZXRPZmZzZXRUb3ApO1xuICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoMCk7XG4gICAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcGh5c2ljYWwgYXZlcmFnZSBhbmQgdGhlIGF2ZXJhZ2UgY291bnQuXG4gICAgICovXG4gICAgX3Jlc2V0QXZlcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IHRyaWdnZXJlZCBieSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICAgICAqIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVzaXplZC5cbiAgICAgKi9cbiAgICBfcmVzaXplSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgLy8gU2tpcCB0aGUgcmVzaXplIGV2ZW50IG9uIHRvdWNoIGRldmljZXMgd2hlbiB0aGUgYWRkcmVzcyBiYXIgc2xpZGVzIHVwLlxuICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLmFicyh0aGlzLl92aWV3cG9ydEhlaWdodCAtIHRoaXMuX3Njcm9sbFRhcmdldEhlaWdodCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1Zpc2libGUpIHtcbiAgICAgICAgICAvLyBSZWluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICAgIHRoaXMuX3Jlc2V0QXZlcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVuaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2Nyb2xsTGlzdGVuZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCBBTklNQVRJT05fRlJBTUUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZWxlY3RJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZWxlY3RJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICBtb2RlbFt0aGlzLnNlbGVjdGVkQXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4kLnNlbGVjdG9yLnNlbGVjdEluZGV4KSB7XG4gICAgICAgIC8vIHYyXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2MVxuICAgICAgICB0aGlzLiQuc2VsZWN0b3Iuc2VsZWN0KHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBkZXNlbGVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGRlc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVzZWxlY3RJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZGVzZWxlY3RJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIGRlc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdEluZGV4KSB7XG4gICAgICAgIC8vIHYyXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdEluZGV4KGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHYxXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGEgZ2l2ZW4gaXRlbSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgaXRlbVxuICAgICAqIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBvYmplY3QuXG4gICAgICovXG4gICAgdG9nZ2xlU2VsZWN0aW9uRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRvZ2dsZVNlbGVjdGlvbkZvckluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICovXG4gICAgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWRcbiAgICAgICAgICA/IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWQoaW5kZXgpIDogdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgICAgICBpc1NlbGVjdGVkID8gdGhpcy5kZXNlbGVjdEluZGV4KGluZGV4KSA6IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjbGVhclNlbGVjdGlvblxuICAgICAqL1xuICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBgdGFwYCBpZiBgc2VsZWN0aW9uRW5hYmxlZGAgaXMgdHJ1ZSxcbiAgICAgKiBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIF9zZWxlY3Rpb25FbmFibGVkQ2hhbmdlZDogZnVuY3Rpb24oc2VsZWN0aW9uRW5hYmxlZCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSBzZWxlY3Rpb25FbmFibGVkID8gdGhpcy5saXN0ZW4gOiB0aGlzLnVubGlzdGVuO1xuICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHRoaXMsICd0YXAnLCAnX3NlbGVjdGlvbkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFuIGl0ZW0gZnJvbSBhbiBldmVudCBvYmplY3QuXG4gICAgICovXG4gICAgX3NlbGVjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1vZGVsVGFiSW5kZXgsIGFjdGl2ZUVsVGFiSW5kZXg7XG4gICAgICB2YXIgdGFyZ2V0ID0gUG9seW1lci5kb20oZSkucGF0aFswXTtcbiAgICAgIHZhciBpdGVtc0hvc3QgPSB0aGlzLl9pdGVtc1BhcmVudC5ub2RlLmRvbUhvc3Q7XG4gICAgICB2YXIgYWN0aXZlRWwgPSBQb2x5bWVyLmRvbShpdGVtc0hvc3QgPyBpdGVtc0hvc3Qucm9vdCA6IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50O1xuICAgICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChtb2RlbFt0aGlzLmluZGV4QXNdKV07XG4gICAgICAvLyBTYWZhcmkgZG9lcyBub3QgZm9jdXMgY2VydGFpbiBmb3JtIGNvbnRyb2xzIHZpYSBtb3VzZVxuICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExODA0M1xuICAgICAgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdpbnB1dCcgfHxcbiAgICAgICAgICB0YXJnZXQubG9jYWxOYW1lID09PSAnYnV0dG9uJyB8fFxuICAgICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFNldCBhIHRlbXBvcmFyeSB0YWJpbmRleFxuICAgICAgbW9kZWxUYWJJbmRleCA9IG1vZGVsLnRhYkluZGV4O1xuICAgICAgbW9kZWwudGFiSW5kZXggPSBTRUNSRVRfVEFCSU5ERVg7XG4gICAgICBhY3RpdmVFbFRhYkluZGV4ID0gYWN0aXZlRWwgPyBhY3RpdmVFbC50YWJJbmRleCA6IC0xO1xuICAgICAgbW9kZWwudGFiSW5kZXggPSBtb2RlbFRhYkluZGV4O1xuICAgICAgLy8gT25seSBzZWxlY3QgdGhlIGl0ZW0gaWYgdGhlIHRhcCB3YXNuJ3Qgb24gYSBmb2N1c2FibGUgY2hpbGRcbiAgICAgIC8vIG9yIHRoZSBlbGVtZW50IGJvdW5kIHRvIGB0YWJJbmRleGBcbiAgICAgIGlmIChhY3RpdmVFbCAmJiBwaHlzaWNhbEl0ZW0gIT09IGFjdGl2ZUVsICYmIHBoeXNpY2FsSXRlbS5jb250YWlucyhhY3RpdmVFbCkgJiYgYWN0aXZlRWxUYWJJbmRleCAhPT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uRm9ySXRlbShtb2RlbFt0aGlzLmFzXSk7XG4gICAgfSxcblxuICAgIF9tdWx0aVNlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLiQuc2VsZWN0b3IubXVsdGkgPSBtdWx0aVNlbGVjdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiBhIGdpdmVuIGxpc3QgaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdXBkYXRlU2l6ZUZvckl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB1cGRhdGVTaXplRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHVwZGF0ZVNpemVGb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmICghdGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBiYWNrZmlsbCBpdGVtIGluIHRoZSByZW5kZXJlZCBwb29sIG9mIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdG8gcmVwbGFjZSB0aGUgbWFpbiBmb2N1c2VkIGl0ZW0uIFRoZSBmb2N1c2VkIGl0ZW0gaGFzIHRhYkluZGV4ID0gMFxuICAgICAqIGFuZCBtaWdodCBiZSBjdXJyZW50bHkgZm9jdXNlZCBieSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIFRoaXMgZHluYW1pYyByZXBsYWNlbWVudCBoZWxwcyB0byBwcmVzZXJ2ZSB0aGUgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgX21hbmFnZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmaWR4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleDtcblxuICAgICAgaWYgKGZpZHggPj0gMCAmJiBmaWR4IDwgdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCBpbmRleCwgY2hlY2sgaWYgdGhhdCBpbmRleCBpcyByZW5kZXJlZFxuICAgICAgICAvLyBpbiBhIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoZmlkeCkpIHtcbiAgICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnR1YWxDb3VudCA+IDAgJiYgdGhpcy5fcGh5c2ljYWxDb3VudCA+IDApIHtcbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBhc3NpZ24gdGhlIGluaXRpYWwgZm9jdXNlZCBpbmRleC5cbiAgICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fcGh5c2ljYWxTdGFydF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcmFuZG9tIGluZGV4IHRvIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IGNvbXBsZXRlcyBpdCdzIHJvdy5cbiAgICAgKiBBbGxvd3MgZm9yIGJldHRlciBvcmRlciBhbmQgZmlsbCBjb21wdXRhdGlvbiB3aGVuIGdyaWQgPT0gdHJ1ZS5cbiAgICAgKi9cbiAgICBfY29udmVydEluZGV4VG9Db21wbGV0ZVJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgICAvLyB3aGVuIGdyaWQgPT0gZmFsc2UgX2l0ZW1QZXJSb3cgY2FuIGJlIHVuc2V0LlxuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtc1BlclJvdyB8fCAxO1xuICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IE1hdGguY2VpbChpZHggLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9pdGVtc1BlclJvdyA6IGlkeDtcbiAgICB9LFxuXG4gICAgX2lzSW5kZXhSZW5kZXJlZDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gaWR4ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJiBpZHggPD0gdGhpcy5fdmlydHVhbEVuZDtcbiAgICB9LFxuXG4gICAgX2lzSW5kZXhWaXNpYmxlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiBpZHggPj0gdGhpcy5maXJzdFZpc2libGVJbmRleCAmJiBpZHggPD0gdGhpcy5sYXN0VmlzaWJsZUluZGV4O1xuICAgIH0sXG5cbiAgICBfZ2V0UGh5c2ljYWxJbmRleDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3BoeXNpY2FsU3RhcnQgKyAoaWR4IC0gdGhpcy5fdmlydHVhbFN0YXJ0KSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIH0sXG5cbiAgICBmb2N1c0l0ZW06IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oaWR4KTtcbiAgICB9LFxuXG4gICAgX2ZvY3VzUGh5c2ljYWxJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICAgIGlmICghdGhpcy5faXNJbmRleFJlbmRlcmVkKGlkeCkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGlkeCk7XG4gICAgICB9XG4gICAgICB2YXIgcGh5c2ljYWxJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGlkeCldO1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQocGh5c2ljYWxJdGVtKTtcbiAgICAgIHZhciBmb2N1c2FibGU7XG4gICAgICAvLyBzZXQgYSBzZWNyZXQgdGFiIGluZGV4XG4gICAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgICBpZiAocGh5c2ljYWxJdGVtLnRhYkluZGV4ID09PSBTRUNSRVRfVEFCSU5ERVgpIHtcbiAgICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgICB9XG4gICAgICAvLyBzZWFyY2ggZm9yIHRoZSBlbGVtZW50IHdoaWNoIHRhYmluZGV4IGlzIGJvdW5kIHRvIHRoZSBzZWNyZXQgdGFiIGluZGV4XG4gICAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgICBmb2N1c2FibGUgPSBQb2x5bWVyLmRvbShwaHlzaWNhbEl0ZW0pLnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleD1cIicgKyBTRUNSRVRfVEFCSU5ERVggKyAnXCJdJyk7XG4gICAgICB9XG4gICAgICAvLyByZXN0b3JlIHRoZSB0YWIgaW5kZXhcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gMDtcbiAgICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGlkeDtcbiAgICAgIGZvY3VzYWJsZSAmJiBmb2N1c2FibGUuZm9jdXMoKTtcbiAgICB9LFxuXG4gICAgX3JlbW92ZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlRm9jdXNCYWNrZmlsbEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBpbnN0LnJvb3QucXVlcnlTZWxlY3RvcignKicpO1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5hcHBlbmRDaGlsZChpbnN0LnJvb3QpO1xuICAgICAgfVxuICAgICAgLy8gU2V0IHRoZSBvZmZjcmVlbiBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdO1xuICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pLnRhYkluZGV4ID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW07XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IGZwaWR4O1xuICAgICAgLy8gSGlkZSB0aGUgZm9jdXNlZCBwaHlzaWNhbC5cbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICB9LFxuXG4gICAgX3Jlc3RvcmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtIHx8IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEFzc2lnbiBtb2RlbHMgdG8gdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgICB0aGlzLl9hc3NpZ25Nb2RlbHMoKTtcbiAgICAgIC8vIEdldCB0aGUgbmV3IHBoeXNpY2FsIGluZGV4IGZvciB0aGUgZm9jdXNlZCBpbmRleC5cbiAgICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4O1xuXG4gICAgICB2YXIgb25TY3JlZW5JdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgICBpZiAoIW9uU2NyZWVuSXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb25TY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9uU2NyZWVuSXRlbSk7XG4gICAgICB2YXIgb2ZmU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgICAvLyBSZXN0b3JlcyB0aGUgcGh5c2ljYWwgaXRlbSBvbmx5IHdoZW4gaXQgaGFzIHRoZSBzYW1lIG1vZGVsXG4gICAgICAvLyBhcyB0aGUgb2Zmc2NyZWVuIG9uZS4gVXNlIGtleSBmb3IgY29tcGFyaXNvbiBzaW5jZSB1c2VycyBjYW4gc2V0XG4gICAgICAvLyBhIG5ldyBpdGVtIHZpYSBzZXQoJ2l0ZW1zLmlkeCcpLlxuICAgICAgaWYgKG9uU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10gPT09IG9mZlNjcmVlbkluc3RhbmNlW3RoaXMuYXNdKSB7XG4gICAgICAgIC8vIEZsaXAgdGhlIGZvY3VzIGJhY2tmaWxsLlxuICAgICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG9uU2NyZWVuSXRlbTtcbiAgICAgICAgb25TY3JlZW5JbnN0YW5jZS50YWJJbmRleCA9IC0xO1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW07XG4gICAgICAgIC8vIEhpZGUgdGhlIHBoeXNpY2FsIGl0ZW0gdGhhdCBiYWNrZmlsbHMuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB9LFxuXG4gICAgX2RpZEZvY3VzOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgICB2YXIgZm9jdXNlZE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pO1xuICAgICAgdmFyIGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtID0gdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gIT09IG51bGw7XG4gICAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG4gICAgICBpZiAoIXRhcmdldE1vZGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChmb2N1c2VkTW9kZWwgPT09IHRhcmdldE1vZGVsKSB7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGZvY3VzZWQgdGhlIHNhbWUgaXRlbSwgdGhlbiBicmluZyBpdCBpbnRvIHZpZXcgaWYgaXQncyBub3QgdmlzaWJsZS5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0luZGV4VmlzaWJsZShmaWR4KSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChmaWR4KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIC8vIFJlc3RvcmUgdGFiSW5kZXggZm9yIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtLlxuICAgICAgICBpZiAoZm9jdXNlZE1vZGVsKSB7XG4gICAgICAgICAgZm9jdXNlZE1vZGVsLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSB0YWJJbmRleCBmb3IgdGhlIG5leHQgZm9jdXNlZCBpdGVtLlxuICAgICAgICB0YXJnZXRNb2RlbC50YWJJbmRleCA9IDA7XG4gICAgICAgIGZpZHggPSB0YXJnZXRNb2RlbFt0aGlzLmluZGV4QXNdO1xuICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gZmlkeDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGZpZHgpO1xuICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXhdO1xuICAgICAgICBpZiAoaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gJiYgIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2tleWRvd25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIC8qIEFSUk9XX0RPV04gKi8gNDA6XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogQVJST1dfUklHSFQgKi8gMzk6XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZCkgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IC0xIDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX1VQICovIDM4OlxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggLSAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogQVJST1dfTEVGVCAqLyAzNzpcbiAgICAgICAgICBpZiAodGhpcy5ncmlkKSB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuX2lzUlRMID8gMSA6IC0xKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogRU5URVIgKi8gMTM6XG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2KSk7XG4gICAgfSxcblxuICAgIF9kZWJvdW5jZTogZnVuY3Rpb24obmFtZSwgY2IsIGFzeW5jTW9kdWxlKSB7XG4gICAgICBpZiAoSVNfVjIpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VycyA9IHRoaXMuX2RlYm91bmNlcnMgfHwge307XG4gICAgICAgIHRoaXMuX2RlYm91bmNlcnNbbmFtZV0gPSBQb2x5bWVyLkRlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgICB0aGlzLl9kZWJvdW5jZXJzW25hbWVdLFxuICAgICAgICAgIGFzeW5jTW9kdWxlLFxuICAgICAgICAgIGNiLmJpbmQodGhpcykpO1xuICAgICAgICBQb2x5bWVyLmVucXVldWVEZWJvdW5jZXIodGhpcy5fZGVib3VuY2Vyc1tuYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQb2x5bWVyLmRvbS5hZGREZWJvdW5jZXIodGhpcy5kZWJvdW5jZShuYW1lLCBjYikpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZFByb3BlcnR5OiBmdW5jdGlvbihpbnN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKElTX1YyKSB7XG4gICAgICAgIGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MiAqL1xuICAgIF9mb3J3YXJkSG9zdFByb3BWMjogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pLmZvcndhcmRIb3N0UHJvcChwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX25vdGlmeUluc3RhbmNlUHJvcFYyOiBmdW5jdGlvbihpbnN0LCBwcm9wLCB2YWx1ZSkge1xuICAgICBpZiAoUG9seW1lci5QYXRoLm1hdGNoZXModGhpcy5hcywgcHJvcCkpIHtcbiAgICAgICAgdmFyIGlkeCA9IGluc3RbdGhpcy5pbmRleEFzXTtcbiAgICAgICAgaWYgKHByb3AgPT0gdGhpcy5hcykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaWR4XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5UGF0aChQb2x5bWVyLlBhdGgudHJhbnNsYXRlKHRoaXMuYXMsICdpdGVtcy4nICsgaWR4LCBwcm9wKSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjEgKi9cbiAgICBfZ2V0U3RhbXBlZENoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbEl0ZW1zO1xuICAgIH0sXG5cbiAgICBfZm9yd2FyZEluc3RhbmNlUGF0aDogZnVuY3Rpb24oaW5zdCwgcGF0aCwgdmFsdWUpIHtcbiAgICAgIGlmIChwYXRoLmluZGV4T2YodGhpcy5hcyArICcuJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKCdpdGVtcy4nICsgaW5zdC5fX2tleV9fICsgJy4nICtcbiAgICAgICAgICAgIHBhdGguc2xpY2UodGhpcy5hcy5sZW5ndGggKyAxKSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZFBhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5ub3RpZnlQYXRoKHBhdGgsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfZm9yd2FyZFBhcmVudFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1saXN0L2lyb24tbGlzdC5odG1sIiwiPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24taWNvbnMvaXJvbi1pY29ucy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbFwiPlxuXG48IS0tXG4gIGBwYXBlci1hdXRvY29tcGxldGVgXG5cbiAgKipGcm9tIHYzLngueCwgdGhpcyBjb21wb25lbnQgb25seSB3b3JrcyB3aXRoIFBvbHltZXIgMS43KyBvciAyLjArLioqXG5cbiAgWyFbUHVibGlzaGVkIG9uIHdlYmNvbXBvbmVudHMub3JnXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3dlYmNvbXBvbmVudHMub3JnLXB1Ymxpc2hlZC1ibHVlLnN2ZyldKGh0dHBzOi8vd3d3LndlYmNvbXBvbmVudHMub3JnL2VsZW1lbnQvZWxsaXB0aWNhbGpzL3BhcGVyLWF1dG9jb21wbGV0ZSlcblxuICBbIVtTYXVjZSBUZXN0IFN0YXR1c10oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2Jyb3dzZXItbWF0cml4L2podWVzb3Muc3ZnKV0oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL3Uvamh1ZXNvcylcblxuICBwYXBlci1hdXRvY29tcGxldGUgZXh0ZW5kcyBlYXJsaWVyIGVmZm9ydHMgc3VjaCBhcyB0aGlzIChodHRwczovL2dpdGh1Yi5jb20vcm9kbzExMTEvcGFwZXItaW5wdXQtYXV0b2NvbXBsZXRlKVxuICB0byBwcm92aWRlIGtleWJvYXJkIHN1cHBvcnQsIHJlbW90ZSBiaW5kaW5nIGFuZCByZXN1bHRzIHNjcm9sbGluZy5cblxuICBJdCBpcyAqKmltcG9ydGFudCB0byBwcm92aWRlIGJvdGggYHRleHRQcm9wZXJ0eWAgYW5kIGB2YWx1ZVByb3BlcnR5YCB3aGVuIHdvcmtpbmcgd2l0aCBhIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24gYW5kXG4gIG9yIGN1c3RvbSB0ZW1wbGF0ZXMuKiogVGhleSBhcmUgbmVlZGVkIHRvIGtlZXAgdGhlIGNvbXBvbmVudCBhY2Nlc3NpYmxlIGFuZCBmb3IgdGhlIGV2ZW50cyAoZS5nLiBvblNlbGVjdCkgdG8ga2VlcFxuICB3b3JraW5nLlxuXG4gIFRvIGludGVncmF0ZSB3aXRoIGBpcm9uLWlucHV0YCwgeW91IG11c3Qgc2V0IHRoZSBgbmFtZWAgb3B0aW9uLiBUaGUgc2VsZWN0ZWQgYHZhbHVlYCB3aWxsIGJlIGV4cG9zZWQsICoqbm90KiogdGhlXG4gIGB0ZXh0YCB2YWx1ZSxcblxuICAjIyMgQWJvdXQgUG9seW1lciAxLnggYW5kIDIueCBDb21wYXRpYmlsaXR5XG4gIEZyb20gdmVyc2lvbiBgMy54LnhgLCB0aGlzIGNvbXBvbmVudCB3b3JrIHdpdGggYm90aCBQb2x5bWVyIDEuNysgb3IgUG9seW1lciAyLjArIFBsZWFzZSB0YWtlIGEgbG9vayB0byB0aGVcbiAgW01JR1JBVElPTi5tZF0oLi9NSUdSQVRJT04ubWQpIGZpbGUgdGhhdCBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICMjIyBDdXN0b20gc2VhcmNoXG4gIFRoaXMgY29tcG9uZW50IGhhcyB0aGUgcHVibGljIG1ldGhvZCBgcXVlcnlGbmAgdGhhdCBpcyBjYWxsZWQgaW4gZWFjaCBrZXkgc3Ryb2tlIGFuZCBpdCBpcyByZXNwb25zaWJsZSB0byBxdWVyeVxuICBhbGwgaXRlbXMgaW4gdGhlIGBzb3VyY2VgIGFuZCByZXR1cm5zIG9ubHkgdGhvc2UgaXRlbXMgdGhhdCBtYXRjaGVzIGNlcnRhaW4gZmlsdGVyaW5nIGNyaXRlcmlhLiBCeSBkZWZhdWx0LCB0aGlzXG4gIGNvbXBvbmVudCBzZWFyY2hlcyBmb3IgaXRlbXMgdGhhdCBzdGFydCB3aXRoIHRoZSByZWNlbnQgcXVlcnkgKGNhc2UgaW5zZW5zaXRpdmUpLlxuICBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgcHJvdmlkaW5nIHlvdXIgb3duIHF1ZXJ5IGZ1bmN0aW9uLCBhcyBsb25nIGFzIHRoZXNlIHR3byByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGxlZDpcbiAgLSBUaGUgcXVlcnkgZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuXG4gIC0gVGhlIEFQSSBpcyByZXNwZWN0ZWQgYW5kIHRoZSBtZXRob2QgYWx3YXlzIHJldHVybnMgYW4gQXJyYXkuXG4gIFRoZSB0ZW1wbGF0ZSB1c2VkIHRvIHJlbmRlciBlYWNoIHN1Z2dlc3Rpb24gZGVwZW5kcyBvbiB0aGUgc3RydWN0dXJlIG9mIGVhY2ggb2JqZWN0IHRoYXQgdGhpcyBtZXRob2QgcmV0dXJucy4gRm9yIHRoZVxuICBkZWZhdWx0IHRlbXBsYXRlLCBlYWNoIHN1Z2dlc3Rpb24gc2hvdWxkIGZvbGxvdyB0aGlzIG9iamVjdCBzdHJ1Y3R1cmU6XG4gIGBgYFxuICAgIHtcbiAgICAgIHRleHQ6IG9ialRleHQsXG4gICAgICB2YWx1ZTogb2JqVmFsdWVcbiAgICB9XG4gIGBgYFxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gYSBsb2NhbCBkYXRhIHNvdXJjZSBpcyB1c2VkLiBXaGVuIHVzaW5nIGEgYHJlbW90ZURhdGFTb3VyY2VgIHVzZXIgaXMgcmVzcG9uc2libGUgZm9yXG4gIGRvaW5nIHRoZSBzZWFyY2ggYW5kIHNwZWNpZnkgc3VnZ2VzdGlvbnMgbWFudWFsbHkuXG5cbiAgIyMjIEN1c3RvbSB0ZW1wbGF0ZXNcbiAgQSB0ZW1wbGF0ZSBmb3IgZWFjaCBzdWdnZXN0aW9uIGNhbiBiZSBwcm92aWRlZCwgYnV0IGZvciBub3csIHRoZXJlIGFyZSBsaW1pdGF0aW9ucyBpbiB0aGUgd2F5IHlvdSBjYW4gY3VzdG9taXplXG4gIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlLCByZWFkIHRoaXMgc2VjdGlvbiBjYXJlZnVsbHkgdG8ga25vdyB0aGVtLlxuICBJbiBvcmRlciB0byBzZXQgeW91ciBvd24gdGVtcGxhdGUsIHlvdSBuZWVkIHRvIGFkZCBhIGA8dGVtcGxhdGU+YCB0YWcgd2l0aCB0aGUgYXR0cmlidXRlXG4gIGBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlYCBhbmQgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbiAgYGBgaHRtbFxuICA8cGFwZXItYXV0b2NvbXBsZXRlPlxuICAgIDx0ZW1wbGF0ZSBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlPlxuICAgICAgPHBhcGVyLWl0ZW0gb24tdGFwPVwiX29uU2VsZWN0XCIgaWQkPVwiW1tfZ2V0U3VnZ2VzdGlvbklkKGluZGV4KV1dXCIgcm9sZT1cIm9wdGlvblwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgLyoqIFN0eWxlcyBmb3IgeW91ciBjdXN0b20gdGVtcGxhdGUgaGVyZSAqKi9cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICBZT1VSIENVU1RPTSBURU1QTEFURVxuICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgPC9wYXBlci1pdGVtPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcGFwZXItYXV0b2NvbXBsZXRlPlxuICBgYGBcblxuICBZb3UgbmVlZCB0byBhbHdheXMgbWFpbnRhaW4gdGhpcyBzdHJ1Y3R1cmUuIFRoZW4geW91IGNhbiBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgcGFwZXItaXRlbS4gVGhlc2UgYXJlIHRoZSByZWFzb25zXG4gIHdoeSB5b3UgbmVlZCB0byBtYWludGFpbiBpdDpcblxuICAtIGBfb25TZWxlY3RgIGl0IGlzIHZlcnkgaW1wb3J0YW50IGJlY2F1c2UgaXQgd2lsbCBub3RpZnkgdGhlIGBhdXRvY29tcGxldGVgIGNvbXBvbmVudCB3aGVuIHVzZXIgc2VsZWN0cyBvbmUgaXRlbS5cbiAgSWYgeW91IGRvbid0IGFkZCB0aGlzIG9wdGlvbiwgd2hlbiB1c2VyIGNsaWNrcyBpbiBvbmUgb2YgdGhlIGl0ZW1zLCBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAtIGBpZGAsIGByb2xlYCBhbmQgYGFyaWEtc2VsZWN0ZWRgIG5lZWQgdG8gYmUgdGhlcmUgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucy4gSWYgeW91IGRvbid0IHNldCB0aGVtLCB0aGUgY29tcG9uZW50XG4gIHdpbGwgY29udGludWUgd29ya2luZyBidXQgaXQgd2lsbCBub3QgYmUgYWNjZXNzaWJsZSBmb3IgdXNlcnMgd2l0aCBkaXNhYmlsaXRpZXMuXG5cbiAgSXQgaXMgaW1wb3J0YW50IHRvIGNsYXJpZnkgdGhhdCBtZXRob2RzIGBfb25TZWxlY3RgIGFuZCBgX2dldFN1Z2dlc3Rpb25JZGAgZG8gbm90IG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQuIFRoZXkgYXJlXG4gIHBhcnQgb2YgdGhlIGxvZ2ljIG9mIGBwYXBlci1hdXRvY29tcGxldGVgLlxuXG4gIFdoZW4gcHJvdmlkaW5nIHlvdXIgb3duIGN1c3RvbSB0ZW1wbGF0ZSwgeW91IG1pZ2h0IGFsc28gbmVlZCB0byBwcm92aWRlIHlvdXIgb3duIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24uIFRoZSByZWFzb25cbiAgZm9yIHRoYXQgaXMgdGhhdCB0aGUgZGVmYXVsdCBzZWFyY2ggZnVuY3Rpb24gb25seSBleHBvc2VzIHRleHQgYW5kIHZhbHVlIGluIHRoZSByZXN1bHRzLiBJZiBlYWNoIGl0ZW0gaW4geW91ciBkYXRhXG4gIHNvdXJjZSBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLCB0aGVuIHlvdSB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gU2VlIHRoZSBjb2RlIG9mIHRoZSBgPGFkZHJlc3MtYXV0b2NvbXBsZXRlPmBcbiAgZWxlbWVudCBpbiB0aGUgZGVtbyBmb2xkZXIgZm9yIGEgY29tcGxldGUgZXhhbXBsZS5cblxuICBBbm90aGVyIGltcG9ydGFudCB0aGluZyB0byBwb2ludCBvdXQgaXMgcmVsYXRlZCB0byB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGluIHRoZSByZXN1bHRzLiBUaGUgaGVpZ2h0IG9mXG4gIHRoZSBzdWdnZXN0aW9uIHRlbXBsYXRlIGNoYW5nZXMgZHluYW1pY2FsbHkgZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgb2YgYSBzdWdnZXN0aW9uIGl0ZW0uIEhvd2V2ZXIsIHRoZSBmb2xsb3dpbmdcbiAgYXNzdW1wdGlvbnMgd2VyZSBtYWRlOlxuICAtIEFsbCBzdWdnZXN0aW9ucyBpdGVtcyBoYXZlIHRoZSBzYW1lIGhlaWdodFxuICAtIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGlzIGZpeGVkIGFuZCBjYW4gYmUgZGV0ZXJtaW5lZCBhdCBhbnkgdGltZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHVzZSBpbWFnZXMgaW4gdGhlXG4gIHJlc3VsdHMsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgYSBwbGFjZWhvbGRlciBvciBhIGZpeGVkIGhlaWdodC5cblxuICAjIyMgU3R5bGluZ1xuXG4gIGA8cGFwZXItYXV0b2NvbXBsZXRlPmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zXG4gIGZvciBzdHlsaW5nOlxuXG4gIEN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuICAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuICBgLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3JgIHwgc2V0cyB0aGUgY29tcG9uZW50cyBpbnB1dCBjb250YWluZXIgZm9jdXMgY29sb3IgfCBgdmFyKC0tcHJpbWFyeS1jb2xvcilgXG4gIGAtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1pdGVtLW1pbi1oZWlnaHRgIHwgbWluIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSB8IGAzNnB4YFxuICBgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtd3JhcHBlcmAgfCBtaXhpbiB0byBhcHBseSB0byB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyIHwgYHt9YFxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG5cbiAgVGhpcyBjb21wb25lbnQgaXMgZnJpZW5kbHkgd2l0aCBzY3JlZW4gcmVhZGVycyAodGVzdGVkIG9ubHkgd2l0aCBWb2ljZU92ZXIgYW5kIE5WREEgaW4gV2luZG93cyk6IGN1cnJlbnQgc2VsZWN0aW9uXG4gIGFuZCBhY3RpdmUgc3VnZ2VzdGlvbiBhcmUgYW5ub3VuY2VkLlxuXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWF1dG9jb21wbGV0ZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uOiB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyOiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciBwYXBlci1pbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAjY2xlYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICAuc3Itb25seSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMge1xuICAgICAgICAtLXN1Z2dlc3Rpb25zLXdyYXBwZXI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtd3JhcHBlcjtcbiAgICAgICAgfTtcblxuICAgICAgICAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodDogdmFyKC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLWl0ZW0tbWluLWhlaWdodCwgMzZweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCIgcm9sZT1cImNvbWJvYm94XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLW93bnM9XCJzdWdnZXN0aW9uc1dyYXBwZXJcIiBhcmlhLWV4cGFuZGVkJD1cIltbX2lzU3VnZ2VzdGlvbnNPcGVuZWRdXVwiPlxuICAgICAgPCEtLSBGb3IgYWNjZXNzaWJpbGl0eSwgaXQgaXMgbmVlZGVkIHRvIGhhdmUgYSBsYWJlbCBvciBhcmlhLWxhYmVsLiBMYWJlbCBpcyBwcmVmZXJyZWQgLS0+XG4gICAgICA8bGFiZWwgZm9yPVwiYXV0b2NvbXBsZXRlSW5wdXRcIiBjbGFzcz1cInNyLW9ubHlcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIEFkZGluZyBhIGhpZGRlbiBpbnB1dCB0byBpbnRlZ3JhdGUgd2l0aCBpcm9uLWZvcm0sIGlmIHJlcXVpcmVkIC0tPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lJD1cIltbbmFtZV1dXCIgdmFsdWUkPVwiW1t2YWx1ZV1dXCIgPlxuXG4gICAgICA8cGFwZXItaW5wdXQgaWQ9XCJhdXRvY29tcGxldGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiXG4gICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7e2Rpc2FibGVkfX1cIlxuICAgICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZSQ9XCJbW2Vycm9yTWVzc2FnZV1dXCJcbiAgICAgICAgICAgICAgICAgICByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIltbcGF0dGVybl1dXCJcbiAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICAgICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbYWx3YXlzRmxvYXRMYWJlbF1dXCJcbiAgICAgICAgICAgICAgICAgICBjaGFyLWNvdW50ZXIkPVwiW1tjaGFyQ291bnRlcl1dXCJcbiAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIlxuXG4gICAgICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1tdWx0aWxpbmU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1hY3RpdmVkZXNjZW5kYW50JD1cIltbX2hpZ2hsaWdodGVkU3VnZ2VzdGlvbi5lbGVtZW50SWRdXVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJhdXRvY29tcGxldGVTdGF0dXMgc3VnZ2VzdGlvbnNXcmFwcGVyXCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICAgIDwhLS0gVE9ETzogcmVtb3ZlIHRhYmluZGV4IHdvcmthcm91bmQgd2hlbiAgaXMgZml4ZWQgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pbnB1dC9pc3N1ZXMvMzI0IC0tPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIHN1ZmZpeCBpZD1cImNsZWFyXCIgaWNvbj1cImNsZWFyXCIgb24tY2xpY2s9XCJfY2xlYXJcIiB0YWJpbmRleD1cIi0xXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPCEtLSB0byBhbm5vdW5jZSBjdXJyZW50IHNlbGVjdGlvbiB0byBzY3JlZW4gcmVhZGVyIC0tPlxuICAgICAgPHNwYW4gaWQ9XCJhdXRvY29tcGxldGVTdGF0dXNcIiByb2xlPVwic3RhdHVzXCIgY2xhc3M9XCJzci1vbmx5XCI+W1tfaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uLnRleHRWYWx1ZV1dPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyBmb3I9XCJhdXRvY29tcGxldGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWxlbmd0aD1cIltbbWluTGVuZ3RoXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1wcm9wZXJ0eT1cIltbdGV4dFByb3BlcnR5XV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJbW3ZhbHVlUHJvcGVydHldXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC1vcHRpb249XCJ7e19zZWxlY3RlZE9wdGlvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT1cIltbc291cmNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlLXNvdXJjZT1cIltbcmVtb3RlU291cmNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnktZm49XCJbW3F1ZXJ5Rm5dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC1uYW1lc3BhY2U9XCJbW2V2ZW50TmFtZXNwYWNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQtc3VnZ2VzdGlvbj1cInt7X2hpZ2hsaWdodGVkU3VnZ2VzdGlvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XCJ7e19pc1N1Z2dlc3Rpb25zT3BlbmVkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LWZpcnN0PVwiW1toaWdobGlnaHRGaXJzdF1dXCI+XG5cbiAgICAgIDxzbG90IGlkPVwidGVtcGxhdGVzXCIgbmFtZT1cImF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVcIj48L3Nsb3Q+XG5cbiAgICA8L3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucz5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpcyBQb2x5ZmlsbCBpcyBuZWVkZWQgZm9yIHRoaXMgdmVyc2lvbiB0byB3b3JrIHdpdGggSUUxMSBhbmQgUG9seW1lciAxLnhcbiAgICAvLyBUT0RPOiBmaW5kIG91dCB3aHkgdGhpcyBpcyBuZWVkZWQgaW4gSUUxMVxuICAgIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXJndW1lbnQpIHtcbiAgICAgICAgICBhcmd1bWVudCA9IGFyZ3VtZW50IHx8IHdpbmRvdztcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChhcmd1bWVudCwgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItYXV0b2NvbXBsZXRlJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogYGF1dG9WYWxpZGF0ZWAgU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgZXJyb3JNZXNzYWdlYCBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGludmFsaWQuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGxhYmVsYCBUZXh0IHRvIGRpc3BsYXkgYXMgdGhlIGlucHV0IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgbm9MYWJlbEZsb2F0YCBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICAgICAgICovXG4gICAgICAgIG5vTGFiZWxGbG9hdDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBhbHdheXNGbG9hdExhYmVsYCBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgbGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHJlcXVpcmVkYCBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHNvdXJjZWAgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBvcHRpb25zIHRvIGV4ZWN1dGUgdGhlIGF1dG9jb21wbGV0ZSBmZWF0dXJlXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB0ZXh0IHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0UHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB2YWx1ZSBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdmFsdWVgIFNlbGVjdGVkIG9iamVjdCBmcm9tIHRoZSBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50L3NlbGVjdGVkIHRleHQgb2YgdGhlIGlucHV0XG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSBzaG93aW5nIHRoZSBjbGVhciBYIGJ1dHRvblxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNob3dDbGVhcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIHRvIGEgcmVtb3RlIGRhdGEgc291cmNlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGVTb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCB0eXBlIHNlcGFyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnROYW1lc3BhY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICctJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGxlbmd0aCB0byB0cmlnZ2VyIHN1Z2dlc3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHBhdHRlcm5gIFBhdHRlcm4gdG8gdmFsaWRhdGUgaW5wdXQgZmllbGRcbiAgICAgICAgICovXG4gICAgICAgIHBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWxsb3dlZFBhdHRlcm5gIGFsbG93ZWRQYXR0ZXJuIHRvIHZhbGlkYXRlIGlucHV0IGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd2VkUGF0dGVybjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdG8gYHRydWVgIHRvIHNob3cgYSBjaGFyYWN0ZXIgY291bnRlci5cbiAgICAgICAgICovXG4gICAgICAgIGNoYXJDb3VudGVyOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIHRvIGJlIHVzZWQgYnkgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC4gVGhpcyBpcyBuZWNlc3NhcnkgaWYgd2FudGVkIHRvIGJlIGludGVncmF0ZWQgd2l0aCBpcm9uLWZvcm0uXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIGF2YWlsYWJsZSBpdGVtcy4gVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSB1c2VkIGJ5IHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyxcbiAgICAgICAgICogaXQgaXMgYWxzbyBleHBvc2VkIGhlcmUgc28gaXQgaXMgcG9zc2libGUgdG8gcHJvdmlkZSBhIGN1c3RvbSBxdWVyeUZuLlxuICAgICAgICAgKi9cbiAgICAgICAgcXVlcnlGbjoge1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgaXQgd2lsbCBhbHdheXMgaGlnaGxpZ2h0IHRoZSBmaXJzdCByZXN1bHQgZWFjaCB0aW1lIG5ldyBzdWdnZXN0aW9ucyBhcmUgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgIGhpZ2hsaWdodEZpcnN0OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKioqKioqKioqKioqKlxuICAgICAgICAqIFBSSVZBVEVcbiAgICAgICAgKioqKioqKioqKioqKi9cbiAgICAgICAgLy8gVE9ETzogY2hlY2sgaWYgd2UgbmVlZCBfdmFsdWUgYW5kIF90ZXh0IHByb3BlcnRpZXMuIEl0IHNlZW1zIHRoZXkgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgX3ZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIF90ZXh0OiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2xlYXIgYnV0dG9uIGlzIHZpc2libGUgb3Igbm90XG4gICAgICAgICAqL1xuICAgICAgICBfaXNDbGVhckJ1dHRvblZpc2libGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3VnZ2VzdGlvbiBwb3B1cCBpcyB2aXNpYmxlIG9yIG5vdC5cbiAgICAgICAgICovXG4gICAgICAgIF9pc1N1Z2dlc3Rpb25zT3BlbmVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfc2VsZWN0ZWRPcHRpb246IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAgICdfdGV4dE9ic2VydmVyKHRleHQpJ1xuICAgICAgXSxcblxuICAgICAgLy8gRWxlbWVudCBMaWZlY3ljbGVcbiAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2F1dG9jb21wbGV0ZScgKyB0aGlzLmV2ZW50TmFtZXNwYWNlICsgJ3NlbGVjdGVkJyxcbiAgICAgICAgICB0aGlzLl9vbkF1dG9jb21wbGV0ZVNlbGVjdGVkLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCB0ZXh0XG4gICAgICAgKi9cbiAgICAgIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICB0aGlzLl90ZXh0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ3Jlc2V0LWJsdXInKTtcblxuICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcblxuICAgICAgICAvLyBGaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzQ5M1xuICAgICAgICBpZiAoIXRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy4kLmF1dG9jb21wbGV0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGlzcGF0Y2hlcyBhdXRvY29tcGxldGUgZXZlbnRzXG4gICAgICAgKi9cbiAgICAgIF9maXJlRXZlbnQ6IGZ1bmN0aW9uIChvcHRpb24sIGV2dCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLl9nZXRJZCgpO1xuICAgICAgICB2YXIgZXZlbnQgPSAnYXV0b2NvbXBsZXRlJyArIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBldnQ7XG5cbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWUsXG4gICAgICAgICAgdGV4dDogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSB8fCBvcHRpb24udGV4dCxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIHRleHQgZXZlbnQgaGFuZGxlclxuICAgICAgICovXG4gICAgICBfdGV4dE9ic2VydmVyOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAodGV4dCAmJiB0ZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2hpZGVDbGVhckJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIGF1dG9jb21wbGV0ZSBzZWxlY3Rpb25cbiAgICAgICAqL1xuICAgICAgX29uQXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3Rpb24udmFsdWU7XG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50ZXh0O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTaG93IHRoZSBjbGVhciBidXR0b24gKFgpXG4gICAgICAgKi9cbiAgICAgIF9zaG93Q2xlYXJCdXR0b246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVNob3dDbGVhcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJC5jbGVhci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZSB0aGUgY2xlYXIgYnV0dG9uIChYKVxuICAgICAgICovXG4gICAgICBfaGlkZUNsZWFyQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuY2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIF9nZXRJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKCFpZCkgaWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgKiBQVUJMSUNcbiAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdGV4dC92YWx1ZSBvcHRpb24gb2YgdGhlIGlucHV0XG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBnZXRPcHRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB0aGUgY3VycmVudCB0ZXh0L3ZhbHVlIG9wdGlvbiBvZiB0aGUgaW5wdXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgICAgc2V0T3B0aW9uOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0gfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWU7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbigpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEaXNhYmxlcyB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRW5hYmxlcyB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB0aGUgY29tcG9uZW50J3MgY3VycmVudCBzdWdnZXN0aW9uc1xuICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICAgKi9cbiAgICAgIHN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHRoaXMuJC5wYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLnN1Z2dlc3Rpb25zKGFycik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFZhbGlkYXRlcyB0aGUgaW5wdXRcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kLmF1dG9jb21wbGV0ZUlucHV0LnZhbGlkYXRlKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENsZWFycyB0aGUgY3VycmVudCBpbnB1dFxuICAgICAgICovXG4gICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0cyB0aGUgY3VycmVudCBpbnB1dCAoREVQUkVDQVRFRDogcGxlYXNlIHVzZSBjbGVhcilcbiAgICAgICAqL1xuICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZXMgdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKi9cbiAgICAgIGhpZGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcbiAgICAgICAgdGhpcy4kLnBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFsbG93cyBjYWxsaW5nIHRoZSBvblNlbGVjdCBmdW5jdGlvbiBmcm9tIG91dHNpZGVcbiAgICAgICAqIFRoaXMgaW4gdGltZSB0cmlnZ2VycyB0aGUgYXV0b2NvbXBsZXRlLXNlbGVjdGVkIGV2ZW50XG4gICAgICAgKiB3aXRoIGFsbCB0aGUgZGF0YSByZXF1aXJlZFxuICAgICAgICovXG4gICAgICBvblNlbGVjdEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLiQucGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9ucy5fb25TZWxlY3QoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtc2VsZWN0ZWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBjaGFuZ2VcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWNoYW5nZVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGZvY3VzXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1mb2N1c1xuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGJsdXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCByZXNldC9jbGVhclxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtcmVzZXQtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgIH0pO1xuICB9KCkpO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2NvbG9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1zcGlubmVyLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1zcGlubmVyLXN0eWxlcy5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICYgYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIHNpbmdsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlPjwvcGFwZXItc3Bpbm5lci1saXRlPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGlzIGJsdWUuIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGJlIGEgZGlmZmVyZW50IGNvbG9yLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZiBub3QgcHJvdmlkZWQsXG5pdCBkZWZhdWx0cyB0byAnbG9hZGluZycuXG5FbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlIGVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkXG5pbiBhbm90aGVyIGZvcm0gKGUuZy4gYSB0ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNwaW5uZXIgfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lci1saXRlXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1zcGlubmVyLWxpdGVcIj5cbiAgPHRlbXBsYXRlIHN0cmlwLXdoaXRlc3BhY2U+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8ZGl2XG4gICAgICAgIGlkPVwic3Bpbm5lckNvbnRhaW5lclwiXG4gICAgICAgIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCJcbiAgICAgICAgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiXG4gICAgICAgIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdwYXBlci1zcGlubmVyLWxpdGUnLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5QYXBlclNwaW5uZXJCZWhhdmlvclxuICAgICAgXVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4vKipcbmBpcm9uLWExMXkta2V5c2AgcHJvdmlkZXMgYSBjcm9zcy1icm93c2VyIGludGVyZmFjZSBmb3IgcHJvY2Vzc2luZ1xua2V5Ym9hcmQgY29tbWFuZHMuIFRoZSBpbnRlcmZhY2UgYWRoZXJlcyB0byBbV0FJLUFSSUEgYmVzdFxucHJhY3RpY2VzXShodHRwOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI2tiZF9nZW5lcmFsX2JpbmRpbmcpLlxuSXQgdXNlcyBhbiBleHByZXNzaXZlIHN5bnRheCB0byBmaWx0ZXIga2V5IHByZXNzZXMuXG5cbiMjIEJhc2ljIHVzYWdlXG5cblRoZSBzYW1wbGUgY29kZSBiZWxvdyBpcyBhIHBvcnRpb24gb2YgYSBjdXN0b20gZWxlbWVudC4gVGhlIGdvYWwgaXMgdG8gY2FsbFxudGhlIGBvbkVudGVyYCBtZXRob2Qgd2hlbmV2ZXIgdGhlIGBwYXBlci1pbnB1dGAgZWxlbWVudCBpcyBpbiBmb2N1cyBhbmRcbnRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkLlxuXG4gICAgPGlyb24tYTExeS1rZXlzIGlkPVwiYTExeVwiIHRhcmdldD1cIltbdGFyZ2V0XV1cIiBrZXlzPVwiZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb24ta2V5cy1wcmVzc2VkPVwib25FbnRlclwiPjwvaXJvbi1hMTF5LWtleXM+XG4gICAgPHBhcGVyLWlucHV0IGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgc29tZXRoaW5nLiBQcmVzcyBlbnRlci4gQ2hlY2sgY29uc29sZS5cIlxuICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dXNlcklucHV0OjppbnB1dH19XCI+PC9wYXBlci1pbnB1dD5cblxuVGhlIGN1c3RvbSBlbGVtZW50IGRlY2xhcmVzIGFuIGBpcm9uLWExMXkta2V5c2AgZWxlbWVudCB0aGF0IGlzIGJvdW5kIHRvIGFcbnByb3BlcnR5IGNhbGxlZCBgdGFyZ2V0YC4gVGhlIGB0YXJnZXRgIHByb3BlcnR5XG5uZWVkcyB0byBldmFsdWF0ZSB0byB0aGUgYHBhcGVyLWlucHV0YCBub2RlLiBgaXJvbi1hMTF5LWtleXNgIHJlZ2lzdGVyc1xuYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIHRhcmdldCBub2RlIHVzaW5nIFBvbHltZXIncyBbYW5ub3RhdGVkIGV2ZW50IGhhbmRsZXJcbnN5bnRheF0oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9ldmVudHMuaHRtbCNhbm5vdGF0ZWQtbGlzdGVuZXJzKS4gYHt7dXNlcklucHV0OjppbnB1dH19YCBzZXRzIHRoZSBgdXNlcklucHV0YCBwcm9wZXJ0eSB0byB0aGVcbnVzZXIncyBpbnB1dCBvbiBlYWNoIGtleXN0cm9rZS5cblxuVGhlIGxhc3Qgc3RlcCBpcyB0byBsaW5rIHRoZSB0d28gZWxlbWVudHMgd2l0aGluIHRoZSBjdXN0b20gZWxlbWVudCdzXG5yZWdpc3RyYXRpb24uXG5cbiAgICAuLi5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB1c2VySW5wdXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbkVudGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcklucHV0KTtcbiAgICB9XG4gICAgLi4uXG5cbiMjIFRoZSBga2V5c2AgYXR0cmlidXRlXG5cblRoZSBga2V5c2AgYXR0cmlidXRlIGV4cHJlc3NlcyB3aGF0IGNvbWJpbmF0aW9uIG9mIGtleXMgdHJpZ2dlcnMgdGhlIGV2ZW50LlxuXG5UaGUgYXR0cmlidXRlIGFjY2VwdHMgYSBzcGFjZS1zZXBhcmF0ZWQsIHBsdXMtc2lnbi1jb25jYXRlbmF0ZWRcbnNldCBvZiBtb2RpZmllciBrZXlzIGFuZCBzb21lIGNvbW1vbiBrZXlib2FyZCBrZXlzLlxuXG5UaGUgY29tbW9uIGtleXMgYXJlOiBgYS16YCwgYDAtOWAgKHRvcCByb3cgYW5kIG51bWJlciBwYWQpLCBgKmAgKHNoaWZ0IDggYW5kXG5udW1iZXIgcGFkKSwgYEYxLUYxMmAsIGBQYWdlIFVwYCwgYFBhZ2UgRG93bmAsIGBMZWZ0IEFycm93YCwgYFJpZ2h0IEFycm93YCxcbmBEb3duIEFycm93YCwgYFVwIEFycm93YCwgYEhvbWVgLCBgRW5kYCwgYEVzY2FwZWAsIGBTcGFjZWAsIGBUYWJgLCBgRW50ZXJgLlxuXG5UaGUgbW9kaWZpZXIga2V5cyBhcmU6IGBTaGlmdGAsIGBDb250cm9sYCwgYEFsdGAsIGBNZXRhYC5cblxuQWxsIGtleXMgYXJlIGV4cGVjdGVkIHRvIGJlIGxvd2VyY2FzZSBhbmQgc2hvcnRlbmVkLiBFLmcuXG5gTGVmdCBBcnJvd2AgaXMgYGxlZnRgLCBgUGFnZSBEb3duYCBpcyBgcGFnZWRvd25gLCBgQ29udHJvbGAgaXMgYGN0cmxgLFxuYEYxYCBpcyBgZjFgLCBgRXNjYXBlYCBpcyBgZXNjYCwgZXRjLlxuXG4jIyMgR3JhbW1hclxuXG5CZWxvdyBpcyB0aGUgW0VCTkZdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXh0ZW5kZWRfQmFja3VzJUUyJTgwJTkzTmF1cl9Gb3JtKVxuR3JhbW1hciBvZiB0aGUgYGtleXNgIGF0dHJpYnV0ZS5cblxuICAgIG1vZGlmaWVyID0gXCJzaGlmdFwiIHwgXCJjdHJsXCIgfCBcImFsdFwiIHwgXCJtZXRhXCI7XG4gICAgYXNjaWkgPSA/IC9bYS16MC05XS8gPyA7XG4gICAgZm5rZXkgPSA/IGYxIHRocm91Z2ggZjEyID8gO1xuICAgIGFycm93ID0gXCJ1cFwiIHwgXCJkb3duXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiA7XG4gICAga2V5ID0gXCJ0YWJcIiB8IFwiZXNjXCIgfCBcInNwYWNlXCIgfCBcIipcIiB8IFwicGFnZXVwXCIgfCBcInBhZ2Vkb3duXCIgfFxuICAgICAgICAgIFwiaG9tZVwiIHwgXCJlbmRcIiB8IGFycm93IHwgYXNjaWkgfCBmbmtleTtcbiAgICBldmVudCA9IFwia2V5cHJlc3NcIiB8IFwia2V5ZG93blwiIHwgXCJrZXl1cFwiO1xuICAgIGtleWNvbWJvID0geyBtb2RpZmllciwgXCIrXCIgfSwga2V5LCBbIFwiOlwiLCBldmVudCBdIDtcbiAgICBrZXlzID0ga2V5Y29tYm8sIHsgXCIgXCIsIGtleWNvbWJvIH0gO1xuXG4jIyMgRXhhbXBsZVxuXG5HaXZlbiB0aGUgZm9sbG93aW5nIHZhbHVlIGZvciBga2V5c2A6XG5cbmBjdHJsK3NoaWZ0K2Y3IHVwIHBhZ2Vkb3duIGVzYyBzcGFjZSBhbHQrbWBcblxuVGhlIGV2ZW50IGlzIGZpcmVkIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleSBjb21iaW5hdGlvbnMgYXJlIGZpcmVkOlxuYENvbnRyb2xgIGFuZCBgU2hpZnRgIGFuZCBgRjdgIGtleXMsIGBVcCBBcnJvd2Aga2V5LCBgUGFnZSBEb3duYCBrZXksXG5gRXNjYXBlYCBrZXksIGBTcGFjZWAga2V5LCBgQWx0YCBhbmQgYE1gIGtleXMuXG5cbiMjIyBXQUktQVJJQSBTbGlkZXIgRXhhbXBsZVxuXG5UaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2YgdGhlIHNldCBvZiBrZXlzIHRoYXQgZnVsZmlsbHMgV0FJLUFSSUEnc1xuXCJzbGlkZXJcIiByb2xlIFtiZXN0XG5wcmFjdGljZXNdKGh0dHA6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8jc2xpZGVyKTpcblxuICAgIDxpcm9uLWExMXkta2V5cyB0YXJnZXQ9XCJbW3RhcmdldF1dXCIga2V5cz1cImxlZnQgcGFnZWRvd24gZG93blwiXG4gICAgICAgICAgICAgICAgICAgIG9uLWtleXMtcHJlc3NlZD1cImRlY3JlbWVudFwiPjwvaXJvbi1hMTF5LWtleXM+XG4gICAgPGlyb24tYTExeS1rZXlzIHRhcmdldD1cIltbdGFyZ2V0XV1cIiBrZXlzPVwicmlnaHQgcGFnZXVwIHVwXCJcbiAgICAgICAgICAgICAgICAgICAgb24ta2V5cy1wcmVzc2VkPVwiaW5jcmVtZW50XCI+PC9pcm9uLWExMXkta2V5cz5cbiAgICA8aXJvbi1hMTF5LWtleXMgdGFyZ2V0PVwiW1t0YXJnZXRdXVwiIGtleXM9XCJob21lXCJcbiAgICAgICAgICAgICAgICAgICAgb24ta2V5cy1wcmVzc2VkPVwic2V0TWluXCI+PC9pcm9uLWExMXkta2V5cz5cbiAgICA8aXJvbi1hMTF5LWtleXMgdGFyZ2V0PVwiW1t0YXJnZXRdXVwiIGtleXM9XCJlbmRcIlxuICAgICAgICAgICAgICAgICAgICBvbi1rZXlzLXByZXNzZWQ9XCJzZXRNYXhcIj48L2lyb24tYTExeS1rZXlzPlxuXG5UaGUgYHRhcmdldGAgcHJvcGVydGllcyBtdXN0IGV2YWx1YXRlIHRvIGEgbm9kZS4gU2VlIHRoZSBiYXNpYyB1c2FnZVxuZXhhbXBsZSBhYm92ZS5cblxuRWFjaCBvZiB0aGUgdmFsdWVzIGZvciB0aGUgYG9uLWtleXMtcHJlc3NlZGAgYXR0cmlidXRlcyBtdXN0IGV2YWx1dGVcbnRvIG1ldGhvZHMuIFRoZSBgaW5jcmVtZW50YCBtZXRob2Qgc2hvdWxkIG1vdmUgdGhlIHNsaWRlciBhIHNldCBhbW91bnRcbnRvd2FyZCB0aGUgbWF4aW11bSB2YWx1ZS4gYGRlY3JlbWVudGAgc2hvdWxkIG1vdmUgdGhlIHNsaWRlciBhIHNldCBhbW91bnRcbnRvd2FyZCB0aGUgbWluaW11bSB2YWx1ZS4gYHNldE1pbmAgc2hvdWxkIG1vdmUgdGhlIHNsaWRlciB0byB0aGUgbWluaW11bVxudmFsdWUuIGBzZXRNYXhgIHNob3VsZCBtb3ZlIHRoZSBzbGlkZXIgdG8gdGhlIG1heGltdW0gdmFsdWUuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblxuXG5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdpcm9uLWExMXkta2V5cycsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuSXJvbkExMXlLZXlzQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqIEB0eXBlIHs/Tm9kZX0gKi9cbiAgICAgIHRhcmdldDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiAnX3RhcmdldENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwYWNlIGRlbGltaXRlZCBsaXN0IG9mIGtleXMgd2hlcmUgZWFjaCBrZXkgZm9sbG93cyB0aGUgZm9ybWF0OlxuICAgICAgICogYFtNT0RJRklFUitdKktFWVs6RVZFTlRdYC5cbiAgICAgICAqIGUuZy4gYGtleXM9XCJzcGFjZSBjdHJsK3NoaWZ0K3RhYiBlbnRlcjprZXl1cFwiYC5cbiAgICAgICAqIE1vcmUgZGV0YWlsIGNhbiBiZSBmb3VuZCBpbiB0aGUgXCJHcmFtbWFyXCIgc2VjdGlvbiBvZiB0aGUgZG9jdW1lbnRhdGlvblxuICAgICAgICovXG4gICAgICBrZXlzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19rZXlzQ2hhbmdlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3RhcmdldENoYW5nZWQ6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgdGhpcy5rZXlFdmVudFRhcmdldCA9IHRhcmdldDtcbiAgICB9LFxuXG4gICAgX2tleXNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVtb3ZlT3duS2V5QmluZGluZ3MoKTtcbiAgICAgIHRoaXMuYWRkT3duS2V5QmluZGluZyh0aGlzLmtleXMsICdfZmlyZUtleXNQcmVzc2VkJyk7XG4gICAgfSxcblxuICAgIF9maXJlS2V5c1ByZXNzZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLmZpcmUoJ2tleXMtcHJlc3NlZCcsIGV2ZW50LmRldGFpbCwge30pO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hMTF5LWtleXMvaXJvbi1hMTF5LWtleXMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcy5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLW1hdGVyaWFsYCBpcyBhIGNvbnRhaW5lciB0aGF0IHJlbmRlcnMgdHdvIHNoYWRvd3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgdG9cbmNyZWF0ZSB0aGUgZWZmZWN0IG9mIGEgbGlmdGVkIHBpZWNlIG9mIHBhcGVyLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLW1hdGVyaWFsIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvcGFwZXItbWF0ZXJpYWw+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1tYXRlcmlhbFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbYW5pbWF0ZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXNoYWRvdy10cmFuc2l0aW9uO1xuICAgICAgfVxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1tYXRlcmlhbCcsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoaXMgZWxlbWVudCwgZnJvbSAwLTUuIFNldHRpbmcgdG8gMCB3aWxsIHJlbW92ZSB0aGVcbiAgICAgICAqIHNoYWRvdywgYW5kIGVhY2ggaW5jcmVhc2luZyBudW1iZXIgZ3JlYXRlciB0aGFuIDAgd2lsbCBiZSBcImRlZXBlclwiXG4gICAgICAgKiB0aGFuIHRoZSBsYXN0LlxuICAgICAgICpcbiAgICAgICAqIEBhdHRyaWJ1dGUgZWxldmF0aW9uXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDFcbiAgICAgICAqL1xuICAgICAgZWxldmF0aW9uOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogMVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgICAqIGBlbGV2YXRpb25gIHZhbHVlLlxuICAgICAgICpcbiAgICAgICAqIEBhdHRyaWJ1dGUgYW5pbWF0ZWRcbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIGFuaW1hdGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC5odG1sIiwiXG5yZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1zaGFyZWQtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT4uY2FyZHttYXJnaW46MjRweDtwYWRkaW5nOjE2cHg7Y29sb3I6Izc1NzU3NTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpfS5jaXJjbGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNTU1O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2RkZDtmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDo2NHB4fWgxe21hcmdpbjoxNnB4IDA7Y29sb3I6IzIxMjEyMTtmb250LXNpemU6MjJweH08L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC1zdHlsZXMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjxzY3JpcHQ+XG5cbiAgLyoqXG4gICAqIFVzZSBgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGFkZC1vbiBmb3IgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gQVxuICAgKiBhZGQtb24gYXBwZWFycyBiZWxvdyB0aGUgaW5wdXQsIGFuZCBtYXkgZGlzcGxheSBpbmZvcm1hdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kXG4gICAqIHZhbGlkaXR5IHN1Y2ggYXMgYSBjaGFyYWN0ZXIgY291bnRlciBvciBhbiBlcnJvciBtZXNzYWdlLlxuICAgKiBAcG9seW1lckJlaGF2aW9yXG4gICAqL1xuICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yID0ge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5ZG9tL2lzc3Vlcy85NlxuICAgICAgUG9seW1lci5kb20uZmx1c2goKTtcbiAgICAgIHRoaXMuZmlyZSgnYWRkb24tYXR0YWNoZWQnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIGNhbGxlZCBieSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdoZW4gdGhlIGlucHV0IHZhbHVlIG9yIHZhbGlkaXR5IGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgICAqIH19IHN0YXRlIC1cbiAgICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgfVxuXG4gIH07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sIiwiPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1jYXJkL3BhcGVyLWNhcmQuaHRtbFwiPlxyXG48IS0tIDxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL2FwcC1zdG9yYWdlL2FwcC1sb2NhbHN0b3JhZ2UvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudC5odG1sXCI+IC0tPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5odG1sXCI+XHJcblxyXG5cclxuPGRvbS1tb2R1bGUgaWQ9XCJsdWRpbmctY2FyZFwiPlxyXG4gICAgPHRlbXBsYXRlPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxjdXN0b20tc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgcGFwZXItaWNvbi1idXR0b24uYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItcGluay01MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFwZXItaWNvbi1idXR0b24taW5rLWNvbG9yOiB2YXIoLS1wYXBlci1pbmRpZ28tNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5waW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1waW5rLTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcGVyLWljb24tYnV0dG9uLmJsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFwZXItaWNvbi1idXR0b24taW5rLWNvbG9yOiB2YXIoLS1wYXBlci1vcmFuZ2UtNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1saWdodC1ibHVlLTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yYXRlLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTYwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJhdGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcGVyLWljb24tYnV0dG9uLnJhdGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pcm9uLWljb24tZmlsbC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTYwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9jdXN0b20tc3R5bGU+XHJcbiAgICAgICAgPCEtLSA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBpZD1cInN0b3JhZ2VcIiBrZXk9XCJbW2l0ZW0uYXV0aG9yaWRdXVwiIGRhdGE9XCJ7e2FjdGl2ZX19XCIgZGVidWc+PC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PiAtLT5cclxuICAgICAgICA8cGFwZXItY2FyZCBjbGFzcz1cInJhdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPVwibWFyZ2luOiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJ0aXRsZVwiIGNsYXNzPVwidGl0bGVcIj48L3Nsb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwic3VidGl0bGVcIiBjbGFzcz1cInN1YnRpdGxlXCI+PC9zbG90PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0ZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGNsYXNzJD1cIltbYWN0aXZlXV1cIiByaWdodCBpY29uPVwiZmF2b3JpdGVcIiBvbi10YXA9XCJ0b2dnbGVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiByaWdodCBpY29uPVwic3RhclwiIG9uLXRhcD1cInRvZ2dsZVwiPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHJpZ2h0IGljb249XCJpY29uczphcnJvdy1mb3J3YXJkXCIgb24tdGFwPVwibmF2aWdhdGVcIj4gPC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uc1wiIGNsYXNzPVwiYWN0aW9uc1wiPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3BhcGVyLWNhcmQ+XHJcblxyXG5cclxuXHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDxzY3JpcHQ+XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYGx1ZGluZy1jYXJkYCBEZXNjcmlwdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHN1bW1hcnkgU2hvcnREZXNjcmlwdGlvbi5cclxuICAgICAgICAgKiBAY3VzdG9tRWxlbWVudFxyXG4gICAgICAgICAqIEBwb2x5bWVyXHJcbiAgICAgICAgICogQGV4dGVuZHMge1BvbHltZXIuRWxlbWVudH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzcyBMdWRpbmdDYXJkIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFN0cmluZyBwcm92aWRpbmcgdGhlIHRhZyBuYW1lIHRvIHJlZ2lzdGVyIHRoZSBlbGVtZW50IHVuZGVyLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIGdldCBpcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbHVkaW5nLWNhcmQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT2JqZWN0IGRlc2NyaWJpbmcgcHJvcGVydHktcmVsYXRlZCBtZXRhZGF0YSB1c2VkIGJ5IFBvbHltZXIgZmVhdHVyZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvYmppZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnb2RldGFpbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDogJ2lzQWN0aXZlKGl0ZW0pJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkL3VwZ3JhZGVkLiBVc2U6IGluaXRpYWxpemluZyBzdGF0ZSxcclxuICAgICAgICAgICAgICogc2V0IHVwIGV2ZW50IGxpc3RlbmVycywgY3JlYXRlIHNoYWRvdyBkb20uXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlIGZvciBvbmUtdGltZSBjb25maWd1cmF0aW9uIG9mIHlvdXIgY29tcG9uZW50IGFmdGVyIGxvY2FsIERPTSBpcyBpbml0aWFsaXplZC4gXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkeSgpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyLnJlYWR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUG9seW1lci5SZW5kZXJTdGF0dXMuYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5hY3RpdmUgPSAhdGhpcy5pdGVtLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF2aWdhdGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29kZXRhaWxzKHRoaXMuaXRlbVt0aGlzLm9iamlkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0FjdGl2ZShpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhY3RpdmV4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShMdWRpbmdDYXJkLmlzLCBMdWRpbmdDYXJkKTtcclxuICAgIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbHVkaW5nLWNhcmQuaHRtbCIsIlxucmVxdWlyZSgnLi4vaXJvbi1pY29uL2lyb24taWNvbi5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnRvQm9keShcIjxpcm9uLWljb25zZXQtc3ZnIG5hbWU9aWNvbnMgc2l6ZT0yND4gPHN2Zz48ZGVmcz4gPGcgaWQ9M2Qtcm90YXRpb24+PHBhdGggZD1cXFwiTTcuNTIgMjEuNDhDNC4yNSAxOS45NCAxLjkxIDE2Ljc2IDEuNTUgMTNILjA1Qy41NiAxOS4xNiA1LjcxIDI0IDEyIDI0bC42Ni0uMDMtMy44MS0zLjgxLTEuMzMgMS4zMnptLjg5LTYuNTJjLS4xOSAwLS4zNy0uMDMtLjUyLS4wOC0uMTYtLjA2LS4yOS0uMTMtLjQtLjI0LS4xMS0uMS0uMi0uMjItLjI2LS4zNy0uMDYtLjE0LS4wOS0uMy0uMDktLjQ3aC0xLjNjMCAuMzYuMDcuNjguMjEuOTUuMTQuMjcuMzMuNS41Ni42OS4yNC4xOC41MS4zMi44Mi40MS4zLjEuNjIuMTUuOTYuMTUuMzcgMCAuNzItLjA1IDEuMDMtLjE1LjMyLS4xLjYtLjI1LjgzLS40NHMuNDItLjQzLjU1LS43MmMuMTMtLjI5LjItLjYxLjItLjk3IDAtLjE5LS4wMi0uMzgtLjA3LS41Ni0uMDUtLjE4LS4xMi0uMzUtLjIzLS41MS0uMS0uMTYtLjI0LS4zLS40LS40My0uMTctLjEzLS4zNy0uMjMtLjYxLS4zMS4yLS4wOS4zNy0uMi41Mi0uMzMuMTUtLjEzLjI3LS4yNy4zNy0uNDIuMS0uMTUuMTctLjMuMjItLjQ2LjA1LS4xNi4wNy0uMzIuMDctLjQ4IDAtLjM2LS4wNi0uNjgtLjE4LS45Ni0uMTItLjI4LS4yOS0uNTEtLjUxLS42OS0uMi0uMTktLjQ3LS4zMy0uNzctLjQzQzkuMSA4LjA1IDguNzYgOCA4LjM5IDhjLS4zNiAwLS42OS4wNS0xIC4xNi0uMy4xMS0uNTcuMjYtLjc5LjQ1LS4yMS4xOS0uMzguNDEtLjUxLjY3LS4xMi4yNi0uMTguNTQtLjE4Ljg1aDEuM2MwLS4xNy4wMy0uMzIuMDktLjQ1cy4xNC0uMjUuMjUtLjM0Yy4xMS0uMDkuMjMtLjE3LjM4LS4yMi4xNS0uMDUuMy0uMDguNDgtLjA4LjQgMCAuNy4xLjg5LjMxLjE5LjIuMjkuNDkuMjkuODYgMCAuMTgtLjAzLjM0LS4wOC40OS0uMDUuMTUtLjE0LjI3LS4yNS4zNy0uMTEuMS0uMjUuMTgtLjQxLjI0LS4xNi4wNi0uMzYuMDktLjU4LjA5SDcuNXYxLjAzaC43N2MuMjIgMCAuNDIuMDIuNi4wN3MuMzMuMTMuNDUuMjNjLjEyLjExLjIyLjI0LjI5LjQuMDcuMTYuMS4zNS4xLjU3IDAgLjQxLS4xMi43Mi0uMzUuOTMtLjIzLjIzLS41NS4zMy0uOTUuMzN6bTguNTUtNS45MmMtLjMyLS4zMy0uNy0uNTktMS4xNC0uNzctLjQzLS4xOC0uOTItLjI3LTEuNDYtLjI3SDEydjhoMi4zYy41NSAwIDEuMDYtLjA5IDEuNTEtLjI3LjQ1LS4xOC44NC0uNDMgMS4xNi0uNzYuMzItLjMzLjU3LS43My43NC0xLjE5LjE3LS40Ny4yNi0uOTkuMjYtMS41N3YtLjRjMC0uNTgtLjA5LTEuMS0uMjYtMS41Ny0uMTgtLjQ3LS40My0uODctLjc1LTEuMnptLS4zOSAzLjE2YzAgLjQyLS4wNS43OS0uMTQgMS4xMy0uMS4zMy0uMjQuNjItLjQzLjg1LS4xOS4yMy0uNDMuNDEtLjcxLjUzLS4yOS4xMi0uNjIuMTgtLjk5LjE4aC0uOTFWOS4xMmguOTdjLjcyIDAgMS4yNy4yMyAxLjY0LjY5LjM4LjQ2LjU3IDEuMTIuNTcgMS45OXYuNHpNMTIgMGwtLjY2LjAzIDMuODEgMy44MSAxLjMzLTEuMzNjMy4yNyAxLjU1IDUuNjEgNC43MiA1Ljk2IDguNDhoMS41QzIzLjQ0IDQuODQgMTguMjkgMCAxMiAwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjZXNzaWJpbGl0eT48cGF0aCBkPVxcXCJNMTIgMmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTkgN2gtNnYxM2gtMnYtNmgtMnY2SDlWOUgzVjdoMTh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY2Vzc2libGU+PGNpcmNsZSBjeD0xMiBjeT00IHI9Mj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTkgMTN2LTJjLTEuNTQuMDItMy4wOS0uNzUtNC4wNy0xLjgzbC0xLjI5LTEuNDNjLS4xNy0uMTktLjM4LS4zNC0uNjEtLjQ1LS4wMSAwLS4wMS0uMDEtLjAyLS4wMUgxM2MtLjM1LS4yLS43NS0uMy0xLjE5LS4yNkMxMC43NiA3LjExIDEwIDguMDQgMTAgOS4wOVYxNWMwIDEuMS45IDIgMiAyaDV2NWgydi01LjVjMC0xLjEtLjktMi0yLTJoLTN2LTMuNDVjMS4yOSAxLjA3IDMuMjUgMS45NCA1IDEuOTV6bS02LjE3IDVjLS40MSAxLjE2LTEuNTIgMi0yLjgzIDItMS42NiAwLTMtMS4zNC0zLTMgMC0xLjMxLjg0LTIuNDEgMi0yLjgzVjEyLjFjLTIuMjguNDYtNCAyLjQ4LTQgNC45IDAgMi43NiAyLjI0IDUgNSA1IDIuNDIgMCA0LjQ0LTEuNzIgNC45LTRoLTIuMDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJhbGFuY2U+PHBhdGggZD1cXFwiTTQgMTB2N2gzdi03SDR6bTYgMHY3aDN2LTdoLTN6TTIgMjJoMTl2LTNIMnYzem0xNC0xMnY3aDN2LTdoLTN6bS00LjUtOUwyIDZ2MmgxOVY2bC05LjUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtYmFsYW5jZS13YWxsZXQ+PHBhdGggZD1cXFwiTTIxIDE4djFjMCAxLjEtLjkgMi0yIDJINWMtMS4xMSAwLTItLjktMi0yVjVjMC0xLjEuODktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ2MWgtOWMtMS4xMSAwLTIgLjktMiAydjhjMCAxLjEuODkgMiAyIDJoOXptLTktMmgxMFY4SDEydjh6bTQtMi41Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtYm94PjxwYXRoIGQ9XFxcIk0zIDV2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjExIDAtMiAuOS0yIDJ6bTEyIDRjMCAxLjY2LTEuMzQgMy0zIDNzLTMtMS4zNC0zLTMgMS4zNC0zIDMtMyAzIDEuMzQgMyAzem0tOSA4YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxSDZ2LTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkPjxwYXRoIGQ9XFxcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtYWxlcnQ+PHBhdGggZD1cXFwiTTEwLjAxIDIxLjAxYzAgMS4xLjg5IDEuOTkgMS45OSAxLjk5czEuOTktLjg5IDEuOTktMS45OWgtMy45OHptOC44Ny00LjE5VjExYzAtMy4yNS0yLjI1LTUuOTctNS4yOS02LjY5di0uNzJDMTMuNTkgMi43MSAxMi44OCAyIDEyIDJzLTEuNTkuNzEtMS41OSAxLjU5di43MkM3LjM3IDUuMDMgNS4xMiA3Ljc1IDUuMTIgMTF2NS44MkwzIDE4Ljk0VjIwaDE4di0xLjA2bC0yLjEyLTIuMTJ6TTE2IDEzLjAxaC0zdjNoLTJ2LTNIOFYxMWgzVjhoMnYzaDN2Mi4wMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0yIDEwaC00djRoLTJ2LTRIN3YtMmg0VjdoMnY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWNpcmNsZS1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMyA3aC0ydjRIN3YyaDR2NGgydi00aDR2LTJoLTRWN3ptLTEtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtc2hvcHBpbmctY2FydD48cGF0aCBkPVxcXCJNMTEgOWgyVjZoM1Y0aC0zVjFoLTJ2M0g4djJoM3Yzem0tNCA5Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yem0xMCAwYy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMnptLTkuODMtMy4yNWwuMDMtLjEyLjktMS42M2g3LjQ1Yy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjg2LTcuMDFMMTkuNDIgNGgtLjAxbC0xLjEgMi0yLjc2IDVIOC41M2wtLjEzLS4yN0w2LjE2IDZsLS45NS0yLS45NC0ySDF2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTMgMC0uMjUtLjExLS4yNS0uMjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybT48cGF0aCBkPVxcXCJNMjIgNS43MmwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTcuODggMy4zOUw2LjYgMS44NiAyIDUuNzFsMS4yOSAxLjUzIDQuNTktMy44NXpNMTIuNSA4SDExdjZsNC43NSAyLjg1Ljc1LTEuMjMtNC0yLjM3Vjh6TTEyIDRjLTQuOTcgMC05IDQuMDMtOSA5czQuMDIgOSA5IDljNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bTAgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tYWRkPjxwYXRoIGQ9XFxcIk03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3ptMS0xMWgtMnYzSDh2MmgzdjNoMnYtM2gzdi0yaC0zVjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybS1vZmY+PHBhdGggZD1cXFwiTTEyIDZjMy44NyAwIDcgMy4xMyA3IDcgMCAuODQtLjE2IDEuNjUtLjQzIDIuNGwxLjUyIDEuNTJjLjU4LTEuMTkuOTEtMi41MS45MS0zLjkyIDAtNC45Ny00LjAzLTktOS05LTEuNDEgMC0yLjczLjMzLTMuOTIuOTFMOS42IDYuNDNDMTAuMzUgNi4xNiAxMS4xNiA2IDEyIDZ6bTEwLS4yOGwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTIuOTIgMi4yOUwxLjY1IDMuNTcgMi45OCA0LjlsLTEuMTEuOTMgMS40MiAxLjQyIDEuMTEtLjk0LjguOEMzLjgzIDguNjkgMyAxMC43NSAzIDEzYzAgNC45NyA0LjAyIDkgOSA5IDIuMjUgMCA0LjMxLS44MyA1Ljg5LTIuMmwyLjIgMi4yIDEuMjctMS4yN0wzLjg5IDMuMjdsLS45Ny0uOTh6bTEzLjU1IDE2LjFDMTUuMjYgMTkuMzkgMTMuNyAyMCAxMiAyMGMtMy44NyAwLTctMy4xMy03LTcgMC0xLjcuNjEtMy4yNiAxLjYxLTQuNDdsOS44NiA5Ljg2ek04LjAyIDMuMjhMNi42IDEuODZsLS44Ni43MSAxLjQyIDEuNDIuODYtLjcxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tb24+PHBhdGggZD1cXFwiTTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTEyIDRjLTQuOTcgMC05IDQuMDMtOSA5czQuMDIgOSA5IDljNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bTAgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3em0tMS40Ni01LjQ3TDguNDEgMTIuNGwtMS4wNiAxLjA2IDMuMTggMy4xOCA2LTYtMS4wNi0xLjA2LTQuOTMgNC45NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsbC1vdXQ+PHBhdGggZD1cXFwiTTE2LjIxIDQuMTZsNCA0di00em00IDEybC00IDRoNHptLTEyIDRsLTQtNHY0em0tNC0xMmw0LTRoLTR6bTEyLjk1LS45NWMtMi43My0yLjczLTcuMTctMi43My05LjkgMHMtMi43MyA3LjE3IDAgOS45IDcuMTcgMi43MyA5LjkgMCAyLjczLTcuMTYgMC05Ljl6bS0xLjEgOC44Yy0yLjEzIDIuMTMtNS41NyAyLjEzLTcuNyAwcy0yLjEzLTUuNTcgMC03LjcgNS41Ny0yLjEzIDcuNyAwIDIuMTMgNS41NyAwIDcuN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFuZHJvaWQ+PHBhdGggZD1cXFwiTTYgMThjMCAuNTUuNDUgMSAxIDFoMXYzLjVjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41VjE5aDJ2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgxYy41NSAwIDEtLjQ1IDEtMVY4SDZ2MTB6TTMuNSA4QzIuNjcgOCAyIDguNjcgMiA5LjV2N2MwIC44My42NyAxLjUgMS41IDEuNVM1IDE3LjMzIDUgMTYuNXYtN0M1IDguNjcgNC4zMyA4IDMuNSA4em0xNyAwYy0uODMgMC0xLjUuNjctMS41IDEuNXY3YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNXYtN2MwLS44My0uNjctMS41LTEuNS0xLjV6bS00Ljk3LTUuODRsMS4zLTEuM2MuMi0uMi4yLS41MSAwLS43MS0uMi0uMi0uNTEtLjItLjcxIDBsLTEuNDggMS40OEMxMy44NSAxLjIzIDEyLjk1IDEgMTIgMWMtLjk2IDAtMS44Ni4yMy0yLjY2LjYzTDcuODUuMTVjLS4yLS4yLS41MS0uMi0uNzEgMC0uMi4yLS4yLjUxIDAgLjcxbDEuMzEgMS4zMUM2Ljk3IDMuMjYgNiA1LjAxIDYgN2gxMmMwLTEuOTktLjk3LTMuNzUtMi40Ny00Ljg0ek0xMCA1SDlWNGgxdjF6bTUgMGgtMVY0aDF2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFubm91bmNlbWVudD48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDloLTJWNWgydjZ6bTAgNGgtMnYtMmgydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcHBzPjxwYXRoIGQ9XFxcIk00IDhoNFY0SDR2NHptNiAxMmg0di00aC00djR6bS02IDBoNHYtNEg0djR6bTAtNmg0di00SDR2NHptNiAwaDR2LTRoLTR2NHptNi0xMHY0aDRWNGgtNHptLTYgNGg0VjRoLTR2NHptNiA2aDR2LTRoLTR2NHptMCA2aDR2LTRoLTR2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFyY2hpdmU+PHBhdGggZD1cXFwiTTIwLjU0IDUuMjNsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNi41NUwzLjQ2IDUuMjNDMy4xNyA1LjU3IDMgNi4wMiAzIDYuNVYxOWMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjYuNWMwLS40OC0uMTctLjkzLS40Ni0xLjI3ek0xMiAxNy41TDYuNSAxMkgxMHYtMmg0djJoMy41TDEyIDE3LjV6TTUuMTIgNWwuODEtMWgxMmwuOTQgMUg1LjEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctYmFjaz48cGF0aCBkPVxcXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRvd253YXJkPjxwYXRoIGQ9XFxcIk0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLWRvd24+PHBhdGggZD1cXFwiTTcgMTBsNSA1IDUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRyb3AtZG93bi1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMTJsLTQtNGg4bC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLXVwPjxwYXRoIGQ9XFxcIk03IDE0bDUtNSA1IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1mb3J3YXJkPjxwYXRoIGQ9XFxcIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctdXB3YXJkPjxwYXRoIGQ9XFxcIk00IDEybDEuNDEgMS40MUwxMSA3LjgzVjIwaDJWNy44M2w1LjU4IDUuNTlMMjAgMTJsLTgtOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3BlY3QtcmF0aW8+PHBhdGggZD1cXFwiTTE5IDEyaC0ydjNoLTN2Mmg1di01ek03IDloM1Y3SDV2NWgyVjl6bTE0LTZIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2Vzc21lbnQ+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yek05IDE3SDd2LTdoMnY3em00IDBoLTJWN2gydjEwem00IDBoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudD48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTIgMTRIN3YtMmg3djJ6bTMtNEg3di0yaDEwdjJ6bTAtNEg3VjdoMTB2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtaW5kPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMCA0YzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptNiAxMkg2di0xLjRjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xVjE5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1sYXRlPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS02IDE1aC0ydi0yaDJ2MnptMC00aC0yVjhoMnY2em0tMS05Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXJldHVybj48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTQgMTJoLTR2M2wtNS01IDUtNXYzaDR2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtcmV0dXJuZWQ+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0wIDE1bC01LTVoM1Y5aDR2NGgzbC01IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXR1cm5lZC1pbj48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bS0yIDE0bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hdHRhY2htZW50PjxwYXRoIGQ9XFxcIk0yIDEyLjVDMiA5LjQ2IDQuNDYgNyA3LjUgN0gxOGMyLjIxIDAgNCAxLjc5IDQgNHMtMS43OSA0LTQgNEg5LjVDOC4xMiAxNSA3IDEzLjg4IDcgMTIuNVM4LjEyIDEwIDkuNSAxMEgxN3YySDkuNDFjLS41NSAwLS41NSAxIDAgMUgxOGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJINy41QzUuNTcgOSA0IDEwLjU3IDQgMTIuNVM1LjU3IDE2IDcuNSAxNkgxN3YySDcuNUM0LjQ2IDE4IDIgMTUuNTQgMiAxMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXV0b3JlbmV3PjxwYXRoIGQ9XFxcIk0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iYWNrc3BhY2U+PHBhdGggZD1cXFwiTTIyIDNIN2MtLjY5IDAtMS4yMy4zNS0xLjU5Ljg4TDAgMTJsNS40MSA4LjExYy4zNi41My45Ljg5IDEuNTkuODloMTVjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTMgMTIuNTlMMTcuNTkgMTcgMTQgMTMuNDEgMTAuNDEgMTcgOSAxNS41OSAxMi41OSAxMiA5IDguNDEgMTAuNDEgNyAxNCAxMC41OSAxNy41OSA3IDE5IDguNDEgMTUuNDEgMTIgMTkgMTUuNTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iYWNrdXA+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ibG9jaz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNNCAxMmMwLTQuNDIgMy41OC04IDgtOCAxLjg1IDAgMy41NS42MyA0LjkgMS42OUw1LjY5IDE2LjlDNC42MyAxNS41NSA0IDEzLjg1IDQgMTJ6bTggOGMtMS44NSAwLTMuNTUtLjYzLTQuOS0xLjY5TDE4LjMxIDcuMUMxOS4zNyA4LjQ1IDIwIDEwLjE1IDIwIDEyYzAgNC40Mi0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Ym9vaz48cGF0aCBkPVxcXCJNMTggMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgNGg1djhsLTIuNS0xLjVMNiAxMlY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Ym9va21hcms+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2ttYXJrLWJvcmRlcj48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YnVnLXJlcG9ydD48cGF0aCBkPVxcXCJNMjAgOGgtMi44MWMtLjQ1LS43OC0xLjA3LTEuNDUtMS44Mi0xLjk2TDE3IDQuNDEgMTUuNTkgM2wtMi4xNyAyLjE3QzEyLjk2IDUuMDYgMTIuNDkgNSAxMiA1Yy0uNDkgMC0uOTYuMDYtMS40MS4xN0w4LjQxIDMgNyA0LjQxbDEuNjIgMS42M0M3Ljg4IDYuNTUgNy4yNiA3LjIyIDYuODEgOEg0djJoMi4wOWMtLjA1LjMzLS4wOS42Ni0uMDkgMXYxSDR2MmgydjFjMCAuMzQuMDQuNjcuMDkgMUg0djJoMi44MWMxLjA0IDEuNzkgMi45NyAzIDUuMTkgM3M0LjE1LTEuMjEgNS4xOS0zSDIwdi0yaC0yLjA5Yy4wNS0uMzMuMDktLjY2LjA5LTF2LTFoMnYtMmgtMnYtMWMwLS4zNC0uMDQtLjY3LS4wOS0xSDIwVjh6bS02IDhoLTR2LTJoNHYyem0wLTRoLTR2LTJoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YnVpbGQ+PHBhdGggZD1cXFwiTTIyLjcgMTlsLTkuMS05LjFjLjktMi4zLjQtNS0xLjUtNi45LTItMi01LTIuNC03LjQtMS4zTDkgNiA2IDkgMS42IDQuN0MuNCA3LjEuOSAxMC4xIDIuOSAxMi4xYzEuOSAxLjkgNC42IDIuNCA2LjkgMS41bDkuMSA5LjFjLjQuNCAxIC40IDEuNCAwbDIuMy0yLjNjLjUtLjQuNS0xLjEuMS0xLjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYWNoZWQ+PHBhdGggZD1cXFwiTTE5IDhsLTQgNGgzYzAgMy4zMS0yLjY5IDYtNiA2LTEuMDEgMC0xLjk3LS4yNS0yLjgtLjdsLTEuNDYgMS40NkM4Ljk3IDE5LjU0IDEwLjQzIDIwIDEyIDIwYzQuNDIgMCA4LTMuNTggOC04aDNsLTQtNHpNNiAxMmMwLTMuMzEgMi42OS02IDYtNiAxLjAxIDAgMS45Ny4yNSAyLjguN2wxLjQ2LTEuNDZDMTUuMDMgNC40NiAxMy41NyA0IDEyIDRjLTQuNDIgMC04IDMuNTgtOCA4SDFsNCA0IDQtNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FtZXJhLWVuaGFuY2U+PHBhdGggZD1cXFwiTTkgM0w3LjE3IDVINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDNIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtMWwxLjI1LTIuNzVMMTYgMTNsLTIuNzUtMS4yNUwxMiA5bC0xLjI1IDIuNzVMOCAxM2wyLjc1IDEuMjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYW5jZWw+PHBhdGggZD1cXFwiTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FyZC1naWZ0Y2FyZD48cGF0aCBkPVxcXCJNMjAgNmgtMi4xOGMuMTEtLjMxLjE4LS42NS4xOC0xIDAtMS42Ni0xLjM0LTMtMy0zLTEuMDUgMC0xLjk2LjU0LTIuNSAxLjM1bC0uNS42Ny0uNS0uNjhDMTAuOTYgMi41NCAxMC4wNSAyIDkgMiA3LjM0IDIgNiAzLjM0IDYgNWMwIC4zNS4wNy42OS4xOCAxSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTUtMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek05IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDUuMDhMNyAxMC44MyA4LjYyIDEyIDExIDguNzZsMS0xLjM2IDEgMS4zNkwxNS4zOCAxMiAxNyAxMC44MyAxNC45MiA4SDIwdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYXJkLW1lbWJlcnNoaXA+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMWMwIDEuMTEuODkgMiAyIDJoNHY1bDQtMiA0IDJ2LTVoNGMxLjExIDAgMi0uODkgMi0yVjRjMC0xLjExLS44OS0yLTItMnptMCAxM0g0di0yaDE2djJ6bTAtNUg0VjRoMTZ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhcmQtdHJhdmVsPjxwYXRoIGQ9XFxcIk0yMCA2aC0zVjRjMC0xLjExLS44OS0yLTItMkg5Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6TTkgNGg2djJIOVY0em0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoM3YyaDJWOGg2djJoMlY4aDN2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoYW5nZS1oaXN0b3J5PjxwYXRoIGQ9XFxcIk0xMiA3Ljc3TDE4LjM5IDE4SDUuNjFMMTIgNy43N00xMiA0TDIgMjBoMjBMMTIgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrPjxwYXRoIGQ9XFxcIk05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrLWJveD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjkgMi0yVjVjMC0xLjEtLjg5LTItMi0yem0tOSAxNGwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2stYm94LW91dGxpbmUtYmxhbms+PHBhdGggZD1cXFwiTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjay1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGV2cm9uLWxlZnQ+PHBhdGggZD1cXFwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGV2cm9uLXJpZ2h0PjxwYXRoIGQ9XFxcIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNocm9tZS1yZWFkZXItbW9kZT48cGF0aCBkPVxcXCJNMTMgMTJoN3YxLjVoLTd6bTAtMi41aDdWMTFoLTd6bTAgNWg3VjE2aC03ek0yMSA0SDNjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNWgtOVY2aDl2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbGFzcz48cGF0aCBkPVxcXCJNMTggMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgNGg1djhsLTIuNS0xLjVMNiAxMlY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xlYXI+PHBhdGggZD1cXFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3NlPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem00LjUgMTRIOGMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtM2wuMTQuMDFDOC41OCA4LjI4IDEwLjEzIDcgMTIgN2MyLjIxIDAgNCAxLjc5IDQgNGguNWMxLjM4IDAgMi41IDEuMTIgMi41IDIuNVMxNy44OCAxNiAxNi41IDE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtZG9uZT48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xMCAxN2wtMy41LTMuNSAxLjQxLTEuNDFMMTAgMTQuMTcgMTUuMTggOWwxLjQxIDEuNDFMMTAgMTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1kb3dubG9hZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNyAxM2wtNSA1LTUtNWgzVjloNHY0aDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1vZmY+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0Yy0xLjQ4IDAtMi44NS40My00LjAxIDEuMTdsMS40NiAxLjQ2QzEwLjIxIDYuMjMgMTEuMDggNiAxMiA2YzMuMDQgMCA1LjUgMi40NiA1LjUgNS41di41SDE5YzEuNjYgMCAzIDEuMzQgMyAzIDAgMS4xMy0uNjQgMi4xMS0xLjU2IDIuNjJsMS40NSAxLjQ1QzIzLjE2IDE4LjE2IDI0IDE2LjY4IDI0IDE1YzAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0zIDUuMjdsMi43NSAyLjc0QzIuNTYgOC4xNSAwIDEwLjc3IDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTEuNzNsMiAyTDIxIDIwLjczIDQuMjcgNCAzIDUuMjd6TTcuNzMgMTBsOCA4SDZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRoMS43M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLXF1ZXVlPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE5IDE4SDZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRoLjcxQzcuMzcgNy42OSA5LjQ4IDYgMTIgNmMzLjA0IDAgNS41IDIuNDYgNS41IDUuNXYuNUgxOWMxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLXVwbG9hZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvZGU+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb21wYXJlLWFycm93cz48cGF0aCBkPVxcXCJNOS4wMSAxNEgydjJoNy4wMXYzTDEzIDE1bC0zLjk5LTR2M3ptNS45OC0xdi0zSDIyVjhoLTcuMDFWNUwxMSA5bDMuOTkgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbnRlbnQtY29weT48cGF0aCBkPVxcXCJNMTYgMUg0Yy0xLjEgMC0yIC45LTIgMnYxNGgyVjNoMTJWMXptMyA0SDhjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTFjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptMCAxNkg4VjdoMTF2MTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb250ZW50LWN1dD48cGF0aCBkPVxcXCJNOS42NCA3LjY0Yy4yMy0uNS4zNi0xLjA1LjM2LTEuNjQgMC0yLjIxLTEuNzktNC00LTRTMiAzLjc5IDIgNnMxLjc5IDQgNCA0Yy41OSAwIDEuMTQtLjEzIDEuNjQtLjM2TDEwIDEybC0yLjM2IDIuMzZDNy4xNCAxNC4xMyA2LjU5IDE0IDYgMTRjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNGMwLS41OS0uMTMtMS4xNC0uMzYtMS42NEwxMiAxNGw3IDdoM3YtMUw5LjY0IDcuNjR6TTYgOGMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptMCAxMmMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptNi03LjVjLS4yOCAwLS41LS4yMi0uNS0uNXMuMjItLjUuNS0uNS41LjIyLjUuNS0uMjIuNS0uNS41ek0xOSAzbC02IDYgMiAyIDctN1YzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29udGVudC1wYXN0ZT48cGF0aCBkPVxcXCJNMTkgMmgtNC4xOEMxNC40Ljg0IDEzLjMgMCAxMiAwYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem03IDE4SDVWNGgydjNoMTBWNGgydjE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29weXJpZ2h0PjxwYXRoIGQ9XFxcIk0xMC4wOCAxMC44NmMuMDUtLjMzLjE2LS42Mi4zLS44N3MuMzQtLjQ2LjU5LS42MmMuMjQtLjE1LjU0LS4yMi45MS0uMjMuMjMuMDEuNDQuMDUuNjMuMTMuMi4wOS4zOC4yMS41Mi4zNnMuMjUuMzMuMzQuNTMuMTMuNDIuMTQuNjRoMS43OWMtLjAyLS40Ny0uMTEtLjktLjI4LTEuMjlzLS40LS43My0uNy0xLjAxLS42Ni0uNS0xLjA4LS42Ni0uODgtLjIzLTEuMzktLjIzYy0uNjUgMC0xLjIyLjExLTEuNy4zNHMtLjg4LjUzLTEuMi45Mi0uNTYuODQtLjcxIDEuMzZTOCAxMS4yOSA4IDExLjg3di4yN2MwIC41OC4wOCAxLjEyLjIzIDEuNjRzLjM5Ljk3LjcxIDEuMzUuNzIuNjkgMS4yLjkxIDEuMDUuMzQgMS43LjM0Yy40NyAwIC45MS0uMDggMS4zMi0uMjNzLjc3LS4zNiAxLjA4LS42My41Ni0uNTguNzQtLjk0LjI5LS43NC4zLTEuMTVoLTEuNzljLS4wMS4yMS0uMDYuNC0uMTUuNThzLS4yMS4zMy0uMzYuNDYtLjMyLjIzLS41Mi4zYy0uMTkuMDctLjM5LjA5LS42LjEtLjM2LS4wMS0uNjYtLjA4LS44OS0uMjMtLjI1LS4xNi0uNDUtLjM3LS41OS0uNjJzLS4yNS0uNTUtLjMtLjg4LS4wOC0uNjctLjA4LTF2LS4yN2MwLS4zNS4wMy0uNjguMDgtMS4wMXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVhdGU+PHBhdGggZD1cXFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNyZWF0ZS1uZXctZm9sZGVyPjxwYXRoIGQ9XFxcIk0yMCA2aC04bC0yLTJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tMSA4aC0zdjNoLTJ2LTNoLTN2LTJoM1Y5aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVkaXQtY2FyZD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2YzAtMS4xMS0uODktMi0yLTJ6bTAgMTRINHYtNmgxNnY2em0wLTEwSDRWNmgxNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGFzaGJvYXJkPjxwYXRoIGQ9XFxcIk0zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRhdGUtcmFuZ2U+PHBhdGggZD1cXFwiTTkgMTFIN3YyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTItN2gtMVYyaC0ydjJIOFYySDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY5aDE0djExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlPjxwYXRoIGQ9XFxcIk02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xIDFINXYyaDE0VjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZWxldGUtZm9yZXZlcj48cGF0aCBkPVxcXCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyem0yLjQ2LTcuMTJsMS40MS0xLjQxTDEyIDEyLjU5bDIuMTItMi4xMiAxLjQxIDEuNDFMMTMuNDEgMTRsMi4xMiAyLjEyLTEuNDEgMS40MUwxMiAxNS40MWwtMi4xMiAyLjEyLTEuNDEtMS40MUwxMC41OSAxNGwtMi4xMy0yLjEyek0xNS41IDRsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlLXN3ZWVwPjxwYXRoIGQ9XFxcIk0xNSAxNmg0djJoLTR6bTAtOGg3djJoLTd6bTAgNGg2djJoLTZ6TTMgMThjMCAxLjEuOSAyIDIgMmg2YzEuMSAwIDItLjkgMi0yVjhIM3YxMHpNMTQgNWgtM2wtMS0xSDZMNSA1SDJ2MmgxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlc2NyaXB0aW9uPjxwYXRoIGQ9XFxcIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bTIgMTZIOHYtMmg4djJ6bTAtNEg4di0yaDh2MnptLTMtNVYzLjVMMTguNSA5SDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG5zPjxwYXRoIGQ9XFxcIk0yMCAxM0g0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xek03IDE5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpNMjAgM0g0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6TTcgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb25lPjxwYXRoIGQ9XFxcIk05IDE2LjJMNC44IDEybC0xLjQgMS40TDkgMTkgMjEgN2wtMS40LTEuNEw5IDE2LjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb25lLWFsbD48cGF0aCBkPVxcXCJNMTggN2wtMS40MS0xLjQxLTYuMzQgNi4zNCAxLjQxIDEuNDFMMTggN3ptNC4yNC0xLjQxTDExLjY2IDE2LjE3IDcuNDggMTJsLTEuNDEgMS40MUwxMS42NiAxOWwxMi0xMi0xLjQyLTEuNDF6TS40MSAxMy40MUw2IDE5bDEuNDEtMS40MUwxLjgzIDEyIC40MSAxMy40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbnV0LWxhcmdlPjxwYXRoIGQ9XFxcIk0xMSA1LjA4VjJjLTUgLjUtOSA0LjgxLTkgMTBzNCA5LjUgOSAxMHYtMy4wOGMtMy0uNDgtNi0zLjQtNi02LjkyczMtNi40NCA2LTYuOTJ6TTE4Ljk3IDExSDIyYy0uNDctNS00LTguNTMtOS05djMuMDhDMTYgNS41MSAxOC41NCA4IDE4Ljk3IDExek0xMyAxOC45MlYyMmM1LS40NyA4LjUzLTQgOS05aC0zLjAzYy0uNDMgMy0yLjk3IDUuNDktNS45NyA1LjkyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9udXQtc21hbGw+PHBhdGggZD1cXFwiTTExIDkuMTZWMmMtNSAuNS05IDQuNzktOSAxMHM0IDkuNSA5IDEwdi03LjE2Yy0xLS40MS0yLTEuNTItMi0yLjg0czEtMi40MyAyLTIuODR6TTE0Ljg2IDExSDIyYy0uNDgtNC43NS00LTguNTMtOS05djcuMTZjMSAuMyAxLjUyLjk4IDEuODYgMS44NHpNMTMgMTQuODRWMjJjNS0uNDcgOC41Mi00LjI1IDktOWgtNy4xNGMtLjM0Ljg2LS44NiAxLjU0LTEuODYgMS44NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRyYWZ0cz48cGF0aCBkPVxcXCJNMjEuOTkgOGMwLS43Mi0uMzctMS4zNS0uOTQtMS43TDEyIDEgMi45NSA2LjNDMi4zOCA2LjY1IDIgNy4yOCAyIDh2MTBjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMmwtLjAxLTEwek0xMiAxM0wzLjc0IDcuODQgMTIgM2w4LjI2IDQuODRMMTIgMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1lamVjdD48cGF0aCBkPVxcXCJNNSAxN2gxNHYySDV6bTctMTJMNS4zMyAxNWgxMy4zNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVycm9yPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXJyb3Itb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMTVoMnYyaC0yem0wLThoMnY2aC0yem0uOTktNUM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXVyby1zeW1ib2w+PHBhdGggZD1cXFwiTTE1IDE4LjVjLTIuNTEgMC00LjY4LTEuNDItNS43Ni0zLjVIMTV2LTJIOC41OGMtLjA1LS4zMy0uMDgtLjY2LS4wOC0xcy4wMy0uNjcuMDgtMUgxNVY5SDkuMjRDMTAuMzIgNi45MiAxMi41IDUuNSAxNSA1LjVjMS42MSAwIDMuMDkuNTkgNC4yMyAxLjU3TDIxIDUuM0MxOS40MSAzLjg3IDE3LjMgMyAxNSAzYy0zLjkyIDAtNy4yNCAyLjUxLTguNDggNkgzdjJoMy4wNmMtLjA0LjMzLS4wNi42Ni0uMDYgMSAwIC4zNC4wMi42Ny4wNiAxSDN2MmgzLjUyYzEuMjQgMy40OSA0LjU2IDYgOC40OCA2IDIuMzEgMCA0LjQxLS44NyA2LTIuM2wtMS43OC0xLjc3Yy0xLjEzLjk4LTIuNiAxLjU3LTQuMjIgMS41N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2ZW50PjxwYXRoIGQ9XFxcIk0xNyAxMmgtNXY1aDV2LTV6TTE2IDF2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMmgtMVYxaC0yem0zIDE4SDVWOGgxNHYxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2ZW50LXNlYXQ+PHBhdGggZD1cXFwiTTQgMTh2M2gzdi0zaDEwdjNoM3YtNkg0em0xNS04aDN2M2gtM3pNMiAxMGgzdjNIMnptMTUgM0g3VjVjMC0xLjEuOS0yIDItMmg2YzEuMSAwIDIgLjkgMiAydjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leGl0LXRvLWFwcD48cGF0aCBkPVxcXCJNMTAuMDkgMTUuNTlMMTEuNSAxN2w1LTUtNS01LTEuNDEgMS40MUwxMi42NyAxMUgzdjJoOS42N2wtMi41OCAyLjU5ek0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnY0aDJWNWgxNHYxNEg1di00SDN2NGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhwYW5kLWxlc3M+PHBhdGggZD1cXFwiTTEyIDhsLTYgNiAxLjQxIDEuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhwYW5kLW1vcmU+PHBhdGggZD1cXFwiTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGxvcmU+PHBhdGggZD1cXFwiTTEyIDEwLjljLS42MSAwLTEuMS40OS0xLjEgMS4xcy40OSAxLjEgMS4xIDEuMWMuNjEgMCAxLjEtLjQ5IDEuMS0xLjFzLS40OS0xLjEtMS4xLTEuMXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMi4xOSAxMi4xOUw2IDE4bDMuODEtOC4xOUwxOCA2bC0zLjgxIDguMTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHRlbnNpb24+PHBhdGggZD1cXFwiTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmFjZT48cGF0aCBkPVxcXCJNOSAxMS43NWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6bTYgMGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04IDAtLjI5LjAyLS41OC4wNS0uODYgMi4zNi0xLjA1IDQuMjMtMi45OCA1LjIxLTUuMzdDMTEuMDcgOC4zMyAxNC4wNSAxMCAxNy40MiAxMGMuNzggMCAxLjUzLS4wOSAyLjI1LS4yNi4yMS43MS4zMyAxLjQ3LjMzIDIuMjYgMCA0LjQxLTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mYXZvcml0ZT48cGF0aCBkPVxcXCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZhdm9yaXRlLWJvcmRlcj48cGF0aCBkPVxcXCJNMTYuNSAzYy0xLjc0IDAtMy40MS44MS00LjUgMi4wOUMxMC45MSAzLjgxIDkuMjQgMyA3LjUgMyA0LjQyIDMgMiA1LjQyIDIgOC41YzAgMy43OCAzLjQgNi44NiA4LjU1IDExLjU0TDEyIDIxLjM1bDEuNDUtMS4zMkMxOC42IDE1LjM2IDIyIDEyLjI4IDIyIDguNSAyMiA1LjQyIDE5LjU4IDMgMTYuNSAzem0tNC40IDE1LjU1bC0uMS4xLS4xLS4xQzcuMTQgMTQuMjQgNCAxMS4zOSA0IDguNSA0IDYuNSA1LjUgNSA3LjUgNWMxLjU0IDAgMy4wNC45OSAzLjU3IDIuMzZoMS44N0MxMy40NiA1Ljk5IDE0Ljk2IDUgMTYuNSA1YzIgMCAzLjUgMS41IDMuNSAzLjUgMCAyLjg5LTMuMTQgNS43NC03LjkgMTAuMDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mZWVkYmFjaz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDEyaC0ydi0yaDJ2MnptMC00aC0yVjZoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsZS1kb3dubG9hZD48cGF0aCBkPVxcXCJNMTkgOWgtNFYzSDl2Nkg1bDcgNyA3LTd6TTUgMTh2MmgxNHYtMkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsZS11cGxvYWQ+PHBhdGggZD1cXFwiTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsdGVyLWxpc3Q+PHBhdGggZD1cXFwiTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmluZC1pbi1wYWdlPjxwYXRoIGQ9XFxcIk0yMCAxOS41OVY4bC02LTZINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4Yy40NSAwIC44NS0uMTUgMS4xOS0uNGwtNC40My00LjQzYy0uOC41Mi0xLjc0LjgzLTIuNzYuODMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1YzAgMS4wMi0uMzEgMS45Ni0uODMgMi43NUwyMCAxOS41OXpNOSAxM2MwIDEuNjYgMS4zNCAzIDMgM3MzLTEuMzQgMy0zLTEuMzQtMy0zLTMtMyAxLjM0LTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbmQtcmVwbGFjZT48cGF0aCBkPVxcXCJNMTEgNmMxLjM4IDAgMi42My41NiAzLjU0IDEuNDZMMTIgMTBoNlY0bC0yLjA1IDIuMDVDMTQuNjggNC43OCAxMi45MyA0IDExIDRjLTMuNTMgMC02LjQzIDIuNjEtNi45MiA2SDYuMWMuNDYtMi4yOCAyLjQ4LTQgNC45LTR6bTUuNjQgOS4xNGMuNjYtLjkgMS4xMi0xLjk3IDEuMjgtMy4xNEgxNS45Yy0uNDYgMi4yOC0yLjQ4IDQtNC45IDQtMS4zOCAwLTIuNjMtLjU2LTMuNTQtMS40NkwxMCAxMkg0djZsMi4wNS0yLjA1QzcuMzIgMTcuMjIgOS4wNyAxOCAxMSAxOGMxLjU1IDAgMi45OC0uNTEgNC4xNC0xLjM2TDIwIDIxLjQ5IDIxLjQ5IDIwbC00Ljg1LTQuODZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maW5nZXJwcmludD48cGF0aCBkPVxcXCJNMTcuODEgNC40N2MtLjA4IDAtLjE2LS4wMi0uMjMtLjA2QzE1LjY2IDMuNDIgMTQgMyAxMi4wMSAzYy0xLjk4IDAtMy44Ni40Ny01LjU3IDEuNDEtLjI0LjEzLS41NC4wNC0uNjgtLjItLjEzLS4yNC0uMDQtLjU1LjItLjY4QzcuODIgMi41MiA5Ljg2IDIgMTIuMDEgMmMyLjEzIDAgMy45OS40NyA2LjAzIDEuNTIuMjUuMTMuMzQuNDMuMjEuNjctLjA5LjE4LS4yNi4yOC0uNDQuMjh6TTMuNSA5LjcyYy0uMSAwLS4yLS4wMy0uMjktLjA5LS4yMy0uMTYtLjI4LS40Ny0uMTItLjcuOTktMS40IDIuMjUtMi41IDMuNzUtMy4yN0M5Ljk4IDQuMDQgMTQgNC4wMyAxNy4xNSA1LjY1YzEuNS43NyAyLjc2IDEuODYgMy43NSAzLjI1LjE2LjIyLjExLjU0LS4xMi43LS4yMy4xNi0uNTQuMTEtLjctLjEyLS45LTEuMjYtMi4wNC0yLjI1LTMuMzktMi45NC0yLjg3LTEuNDctNi41NC0xLjQ3LTkuNC4wMS0xLjM2LjctMi41IDEuNy0zLjQgMi45Ni0uMDguMTQtLjIzLjIxLS4zOS4yMXptNi4yNSAxMi4wN2MtLjEzIDAtLjI2LS4wNS0uMzUtLjE1LS44Ny0uODctMS4zNC0xLjQzLTIuMDEtMi42NC0uNjktMS4yMy0xLjA1LTIuNzMtMS4wNS00LjM0IDAtMi45NyAyLjU0LTUuMzkgNS42Ni01LjM5czUuNjYgMi40MiA1LjY2IDUuMzljMCAuMjgtLjIyLjUtLjUuNXMtLjUtLjIyLS41LS41YzAtMi40Mi0yLjA5LTQuMzktNC42Ni00LjM5LTIuNTcgMC00LjY2IDEuOTctNC42NiA0LjM5IDAgMS40NC4zMiAyLjc3LjkzIDMuODUuNjQgMS4xNSAxLjA4IDEuNjQgMS44NSAyLjQyLjE5LjIuMTkuNTEgMCAuNzEtLjExLjEtLjI0LjE1LS4zNy4xNXptNy4xNy0xLjg1Yy0xLjE5IDAtMi4yNC0uMy0zLjEtLjg5LTEuNDktMS4wMS0yLjM4LTIuNjUtMi4zOC00LjM5IDAtLjI4LjIyLS41LjUtLjVzLjUuMjIuNS41YzAgMS40MS43MiAyLjc0IDEuOTQgMy41Ni43MS40OCAxLjU0LjcxIDIuNTQuNzEuMjQgMCAuNjQtLjAzIDEuMDQtLjEuMjctLjA1LjUzLjEzLjU4LjQxLjA1LjI3LS4xMy41My0uNDEuNTgtLjU3LjExLTEuMDcuMTItMS4yMS4xMnpNMTQuOTEgMjJjLS4wNCAwLS4wOS0uMDEtLjEzLS4wMi0xLjU5LS40NC0yLjYzLTEuMDMtMy43Mi0yLjEtMS40LTEuMzktMi4xNy0zLjI0LTIuMTctNS4yMiAwLTEuNjIgMS4zOC0yLjk0IDMuMDgtMi45NCAxLjcgMCAzLjA4IDEuMzIgMy4wOCAyLjk0IDAgMS4wNy45MyAxLjk0IDIuMDggMS45NHMyLjA4LS44NyAyLjA4LTEuOTRjMC0zLjc3LTMuMjUtNi44My03LjI1LTYuODMtMi44NCAwLTUuNDQgMS41OC02LjYxIDQuMDMtLjM5LjgxLS41OSAxLjc2LS41OSAyLjggMCAuNzguMDcgMi4wMS42NyAzLjYxLjEuMjYtLjAzLjU1LS4yOS42NC0uMjYuMS0uNTUtLjA0LS42NC0uMjktLjQ5LTEuMzEtLjczLTIuNjEtLjczLTMuOTYgMC0xLjIuMjMtMi4yOS42OC0zLjI0IDEuMzMtMi43OSA0LjI4LTQuNiA3LjUxLTQuNiA0LjU1IDAgOC4yNSAzLjUxIDguMjUgNy44MyAwIDEuNjItMS4zOCAyLjk0LTMuMDggMi45NHMtMy4wOC0xLjMyLTMuMDgtMi45NGMwLTEuMDctLjkzLTEuOTQtMi4wOC0xLjk0cy0yLjA4Ljg3LTIuMDggMS45NGMwIDEuNzEuNjYgMy4zMSAxLjg3IDQuNTEuOTUuOTQgMS44NiAxLjQ2IDMuMjcgMS44NS4yNy4wNy40Mi4zNS4zNS42MS0uMDUuMjMtLjI2LjM4LS40Ny4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpcnN0LXBhZ2U+PHBhdGggZD1cXFwiTTE4LjQxIDE2LjU5TDEzLjgyIDEybDQuNTktNC41OUwxNyA2bC02IDYgNiA2ek02IDZoMnYxMkg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxhZz48cGF0aCBkPVxcXCJNMTQuNCA2TDE0IDRINXYxN2gydi03aDUuNmwuNCAyaDdWNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaWdodC1sYW5kPjxwYXRoIGQ9XFxcIk0yLjUgMTloMTl2MmgtMTl6bTcuMTgtNS43M2w0LjM1IDEuMTYgNS4zMSAxLjQyYy44LjIxIDEuNjItLjI2IDEuODQtMS4wNi4yMS0uOC0uMjYtMS42Mi0xLjA2LTEuODRsLTUuMzEtMS40Mi0yLjc2LTkuMDJMMTAuMTIgMnY4LjI4TDUuMTUgOC45NWwtLjkzLTIuMzItMS40NS0uMzl2NS4xN2wxLjYuNDMgNS4zMSAxLjQzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpZ2h0LXRha2VvZmY+PHBhdGggZD1cXFwiTTIuNSAxOWgxOXYyaC0xOXptMTkuNTctOS4zNmMtLjIxLS44LTEuMDQtMS4yOC0xLjg0LTEuMDZMMTQuOTIgMTBsLTYuOS02LjQzLTEuOTMuNTEgNC4xNCA3LjE3LTQuOTcgMS4zMy0xLjk3LTEuNTQtMS40NS4zOSAxLjgyIDMuMTYuNzcgMS4zMyAxLjYtLjQzIDUuMzEtMS40MiA0LjM1LTEuMTZMMjEgMTEuNDljLjgxLS4yMyAxLjI4LTEuMDUgMS4wNy0xLjg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpcC10by1iYWNrPjxwYXRoIGQ9XFxcIk05IDdIN3YyaDJWN3ptMCA0SDd2Mmgydi0yem0wLThjLTEuMTEgMC0yIC45LTIgMmgyVjN6bTQgMTJoLTJ2Mmgydi0yem02LTEydjJoMmMwLTEuMS0uOS0yLTItMnptLTYgMGgtMnYyaDJWM3pNOSAxN3YtMkg3YzAgMS4xLjg5IDIgMiAyem0xMC00aDJ2LTJoLTJ2MnptMC00aDJWN2gtMnYyem0wIDhjMS4xIDAgMi0uOSAyLTJoLTJ2MnpNNSA3SDN2MTJjMCAxLjEuODkgMiAyIDJoMTJ2LTJINVY3em0xMC0yaDJWM2gtMnYyem0wIDEyaDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaXAtdG8tZnJvbnQ+PHBhdGggZD1cXFwiTTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMiA0di0ySDNjMCAxLjEuODkgMiAyIDJ6TTMgOWgyVjdIM3Yyem0xMiAxMmgydi0yaC0ydjJ6bTQtMThIOWMtMS4xMSAwLTIgLjktMiAydjEwYzAgMS4xLjg5IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTJIOVY1aDEwdjEwem0tOCA2aDJ2LTJoLTJ2MnptLTQgMGgydi0ySDd2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbGRlcj48cGF0aCBkPVxcXCJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb2xkZXItb3Blbj48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bTAgMTJINFY4aDE2djEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9sZGVyLXNoYXJlZD48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bS01IDNjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yem00IDhoLTh2LTFjMC0xLjMzIDIuNjctMiA0LTJzNCAuNjcgNCAydjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb250LWRvd25sb2FkPjxwYXRoIGQ9XFxcIk05LjkzIDEzLjVoNC4xNEwxMiA3Ljk4ek0yMCAySDRjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTQuMDUgMTYuNWwtMS4xNC0zSDkuMTdsLTEuMTIgM0g1Ljk2bDUuMTEtMTNoMS44Nmw1LjExIDEzaC0yLjA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9yd2FyZD48cGF0aCBkPVxcXCJNMTIgOFY0bDggOC04IDh2LTRINFY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZnVsbHNjcmVlbj48cGF0aCBkPVxcXCJNNyAxNEg1djVoNXYtMkg3di0zem0tMi00aDJWN2gzVjVINXY1em0xMiA3aC0zdjJoNXYtNWgtMnYzek0xNCA1djJoM3YzaDJWNWgtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZ1bGxzY3JlZW4tZXhpdD48cGF0aCBkPVxcXCJNNSAxNmgzdjNoMnYtNUg1djJ6bTMtOEg1djJoNVY1SDh2M3ptNiAxMWgydi0zaDN2LTJoLTV2NXptMi0xMVY1aC0ydjVoNVY4aC0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zy10cmFuc2xhdGU+PHBhdGggZD1cXFwiTTIwIDVoLTkuMTJMMTAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxM2MwIDEuMS45IDIgMiAyaDdsMSAzaDhjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnpNNy4xNyAxNC41OWMtMi4yNSAwLTQuMDktMS44My00LjA5LTQuMDlzMS44My00LjA5IDQuMDktNC4wOWMxLjA0IDAgMS45OS4zNyAyLjc0IDEuMDdsLjA3LjA2LTEuMjMgMS4xOC0uMDYtLjA1Yy0uMjktLjI3LS43OC0uNTktMS41Mi0uNTktMS4zMSAwLTIuMzggMS4wOS0yLjM4IDIuNDJzMS4wNyAyLjQyIDIuMzggMi40MmMxLjM3IDAgMS45Ni0uODcgMi4xMi0xLjQ2SDcuMDhWOS45MWgzLjk1bC4wMS4wN2MuMDQuMjEuMDUuNC4wNS42MSAwIDIuMzUtMS42MSA0LTMuOTIgNHptNi4wMy0xLjcxYy4zMy42Ljc0IDEuMTggMS4xOSAxLjdsLS41NC41My0uNjUtMi4yM3ptLjc3LS43NmgtLjk5bC0uMzEtMS4wNGgzLjk5cy0uMzQgMS4zMS0xLjU2IDIuNzRjLS41Mi0uNjItLjg5LTEuMjMtMS4xMy0xLjd6TTIxIDIwYzAgLjU1LS40NSAxLTEgMWgtN2wyLTItLjgxLTIuNzcuOTItLjkyTDE3Ljc5IDE4bC43My0uNzMtMi43MS0yLjY4Yy45LTEuMDMgMS42LTIuMjUgMS45Mi0zLjUxSDE5di0xLjA0aC0zLjY0VjloLTEuMDR2MS4wNGgtMS45NkwxMS4xOCA2SDIwYy41NSAwIDEgLjQ1IDEgMXYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdhdmVsPjxwYXRoIGQ9XFxcIk0xIDIxaDEydjJIMXpNNS4yNDUgOC4wN2wyLjgzLTIuODI3IDE0LjE0IDE0LjE0Mi0yLjgyOCAyLjgyOHpNMTIuMzE3IDFsNS42NTcgNS42NTYtMi44MyAyLjgzLTUuNjU0LTUuNjZ6TTMuODI1IDkuNDg1bDUuNjU3IDUuNjU3LTIuODI4IDIuODI4LTUuNjU3LTUuNjU3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2VzdHVyZT48cGF0aCBkPVxcXCJNNC41OSA2Ljg5Yy43LS43MSAxLjQtMS4zNSAxLjcxLTEuMjIuNS4yIDAgMS4wMy0uMyAxLjUyLS4yNS40Mi0yLjg2IDMuODktMi44NiA2LjMxIDAgMS4yOC40OCAyLjM0IDEuMzQgMi45OC43NS41NiAxLjc0LjczIDIuNjQuNDYgMS4wNy0uMzEgMS45NS0xLjQgMy4wNi0yLjc3IDEuMjEtMS40OSAyLjgzLTMuNDQgNC4wOC0zLjQ0IDEuNjMgMCAxLjY1IDEuMDEgMS43NiAxLjc5LTMuNzguNjQtNS4zOCAzLjY3LTUuMzggNS4zNyAwIDEuNyAxLjQ0IDMuMDkgMy4yMSAzLjA5IDEuNjMgMCA0LjI5LTEuMzMgNC42OS02LjFIMjF2LTIuNWgtMi40N2MtLjE1LTEuNjUtMS4wOS00LjItNC4wMy00LjItMi4yNSAwLTQuMTggMS45MS00Ljk0IDIuODQtLjU4LjczLTIuMDYgMi40OC0yLjI5IDIuNzItLjI1LjMtLjY4Ljg0LTEuMTEuODQtLjQ1IDAtLjcyLS44My0uMzYtMS45Mi4zNS0xLjA5IDEuNC0yLjg2IDEuODUtMy41Mi43OC0xLjE0IDEuMy0xLjkyIDEuMy0zLjI4QzguOTUgMy42OSA3LjMxIDMgNi40NCAzIDUuMTIgMyAzLjk3IDQgMy43MiA0LjI1Yy0uMzYuMzYtLjY2LjY2LS44OC45M2wxLjc1IDEuNzF6bTkuMjkgMTEuNjZjLS4zMSAwLS43NC0uMjYtLjc0LS43MiAwLS42LjczLTIuMiAyLjg3LTIuNzYtLjMgMi42OS0xLjQzIDMuNDgtMi4xMyAzLjQ4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2V0LWFwcD48cGF0aCBkPVxcXCJNMTkgOWgtNFYzSDl2Nkg1bDcgNyA3LTd6TTUgMTh2MmgxNHYtMkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2lmPjxwYXRoIGQ9XFxcIk0xMS41IDlIMTN2NmgtMS41ek05IDlINmMtLjYgMC0xIC41LTEgMXY0YzAgLjUuNCAxIDEgMWgzYy42IDAgMS0uNSAxLTF2LTJIOC41djEuNWgtMnYtM0gxMFYxMGMwLS41LS40LTEtMS0xem0xMCAxLjVWOWgtNC41djZIMTZ2LTJoMnYtMS41aC0ydi0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z3JhZGU+PHBhdGggZD1cXFwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z3JvdXAtd29yaz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNOCAxNy41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpNOS41IDhjMC0xLjM4IDEuMTItMi41IDIuNS0yLjVzMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41UzkuNSA5LjM4IDkuNSA4em02LjUgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhlbHA+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGVscC1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGgyYzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAyLTMgMS43NS0zIDVoMmMwLTIuMjUgMy0yLjUgMy01IDAtMi4yMS0xLjc5LTQtNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGlnaGxpZ2h0LW9mZj48cGF0aCBkPVxcXCJNMTQuNTkgOEwxMiAxMC41OSA5LjQxIDggOCA5LjQxIDEwLjU5IDEyIDggMTQuNTkgOS40MSAxNiAxMiAxMy40MSAxNC41OSAxNiAxNiAxNC41OSAxMy40MSAxMiAxNiA5LjQxIDE0LjU5IDh6TTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGlzdG9yeT48cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aG9tZT48cGF0aCBkPVxcXCJNMTAgMjB2LTZoNHY2aDV2LThoM0wxMiAzIDIgMTJoM3Y4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aG91cmdsYXNzLWVtcHR5PjxwYXRoIGQ9XFxcIk02IDJ2NmguMDFMNiA4LjAxIDEwIDEybC00IDQgLjAxLjAxSDZWMjJoMTJ2LTUuOTloLS4wMUwxOCAxNmwtNC00IDQtMy45OS0uMDEtLjAxSDE4VjJINnptMTAgMTQuNVYyMEg4di0zLjVsNC00IDQgNHptLTQtNWwtNC00VjRoOHYzLjVsLTQgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvdXJnbGFzcy1mdWxsPjxwYXRoIGQ9XFxcIk02IDJ2NmguMDFMNiA4LjAxIDEwIDEybC00IDQgLjAxLjAxSDZWMjJoMTJ2LTUuOTloLS4wMUwxOCAxNmwtNC00IDQtMy45OS0uMDEtLjAxSDE4VjJINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWh0dHA+PHBhdGggZD1cXFwiTTQuNSAxMWgtMlY5SDF2NmgxLjV2LTIuNWgyVjE1SDZWOUg0LjV2MnptMi41LS41aDEuNVYxNUgxMHYtNC41aDEuNVY5SDd2MS41em01LjUgMEgxNFYxNWgxLjV2LTQuNUgxN1Y5aC00LjV2MS41em05LTEuNUgxOHY2aDEuNXYtMmgyYy44IDAgMS41LS43IDEuNS0xLjV2LTFjMC0uOC0uNy0xLjUtMS41LTEuNXptMCAyLjVoLTJ2LTFoMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aHR0cHM+PHBhdGggZD1cXFwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptLTYgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTMuMS05SDguOVY2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbXBvcnRhbnQtZGV2aWNlcz48cGF0aCBkPVxcXCJNMjMgMTEuMDFMMTggMTFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDVjLjU1IDAgMS0uNDUgMS0xdi05YzAtLjU1LS40NS0uOTktMS0uOTl6TTIzIDIwaC01di03aDV2N3pNMjAgMkgyQy44OSAyIDAgMi44OSAwIDR2MTJjMCAxLjEuODkgMiAyIDJoN3YySDd2Mmg4di0yaC0ydi0yaDJ2LTJIMlY0aDE4djVoMlY0YzAtMS4xMS0uOS0yLTItMnptLTguMDMgN0wxMSA2bC0uOTcgM0g3bDIuNDcgMS43Ni0uOTQgMi45MSAyLjQ3LTEuOCAyLjQ3IDEuOC0uOTQtMi45MUwxNSA5aC0zLjAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5ib3g+PHBhdGggZD1cXFwiTTE5IDNINC45OWMtMS4xMSAwLTEuOTguODktMS45OCAyTDMgMTljMCAxLjEuODggMiAxLjk5IDJIMTljMS4xIDAgMi0uOSAyLTJWNWMwLTEuMTEtLjktMi0yLTJ6bTAgMTJoLTRjMCAxLjY2LTEuMzUgMy0zIDNzLTMtMS4zNC0zLTNINC45OVY1SDE5djEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5kZXRlcm1pbmF0ZS1jaGVjay1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMiAxMEg3di0yaDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbmZvPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi02aDJ2NnptMC04aC0yVjdoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5mby1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMSAxN2gydi02aC0ydjZ6bTEtMTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4ek0xMSA5aDJWN2gtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5wdXQ+PHBhdGggZD1cXFwiTTIxIDMuMDFIM2MtMS4xIDAtMiAuOS0yIDJWOWgyVjQuOTloMTh2MTQuMDNIM1YxNUgxdjQuMDFjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOTh2LTE0YzAtMS4xMS0uOS0yLTItMnpNMTEgMTZsNC00LTQtNHYzSDF2MmgxMHYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW52ZXJ0LWNvbG9ycz48cGF0aCBkPVxcXCJNMTcuNjYgNy45M0wxMiAyLjI3IDYuMzQgNy45M2MtMy4xMiAzLjEyLTMuMTIgOC4xOSAwIDExLjMxQzcuOSAyMC44IDkuOTUgMjEuNTggMTIgMjEuNThjMi4wNSAwIDQuMS0uNzggNS42Ni0yLjM0IDMuMTItMy4xMiAzLjEyLTguMTkgMC0xMS4zMXpNMTIgMTkuNTljLTEuNiAwLTMuMTEtLjYyLTQuMjQtMS43NkM2LjYyIDE2LjY5IDYgMTUuMTkgNiAxMy41OXMuNjItMy4xMSAxLjc2LTQuMjRMMTIgNS4xdjE0LjQ5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFiZWw+PHBhdGggZD1cXFwiTTE3LjYzIDUuODRDMTcuMjcgNS4zMyAxNi42NyA1IDE2IDVMNSA1LjAxQzMuOSA1LjAxIDMgNS45IDMgN3YxMGMwIDEuMS45IDEuOTkgMiAxLjk5TDE2IDE5Yy42NyAwIDEuMjctLjMzIDEuNjMtLjg0TDIyIDEybC00LjM3LTYuMTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYWJlbC1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xNy42MyA1Ljg0QzE3LjI3IDUuMzMgMTYuNjcgNSAxNiA1TDUgNS4wMUMzLjkgNS4wMSAzIDUuOSAzIDd2MTBjMCAxLjEuOSAxLjk5IDIgMS45OUwxNiAxOWMuNjcgMCAxLjI3LS4zMyAxLjYzLS44NEwyMiAxMmwtNC4zNy02LjE2ek0xNiAxN0g1VjdoMTFsMy41NSA1TDE2IDE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFuZ3VhZ2U+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTYuOTMgNmgtMi45NWMtLjMyLTEuMjUtLjc4LTIuNDUtMS4zOC0zLjU2IDEuODQuNjMgMy4zNyAxLjkxIDQuMzMgMy41NnpNMTIgNC4wNGMuODMgMS4yIDEuNDggMi41MyAxLjkxIDMuOTZoLTMuODJjLjQzLTEuNDMgMS4wOC0yLjc2IDEuOTEtMy45NnpNNC4yNiAxNEM0LjEgMTMuMzYgNCAxMi42OSA0IDEycy4xLTEuMzYuMjYtMmgzLjM4Yy0uMDguNjYtLjE0IDEuMzItLjE0IDIgMCAuNjguMDYgMS4zNC4xNCAySDQuMjZ6bS44MiAyaDIuOTVjLjMyIDEuMjUuNzggMi40NSAxLjM4IDMuNTYtMS44NC0uNjMtMy4zNy0xLjktNC4zMy0zLjU2em0yLjk1LThINS4wOGMuOTYtMS42NiAyLjQ5LTIuOTMgNC4zMy0zLjU2QzguODEgNS41NSA4LjM1IDYuNzUgOC4wMyA4ek0xMiAxOS45NmMtLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODJjLS40MyAxLjQzLTEuMDggMi43Ni0xLjkxIDMuOTZ6TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTIgMC0uNjguMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMiAwIC42OC0uMDcgMS4zNC0uMTYgMnptLjI1IDUuNTZjLjYtMS4xMSAxLjA2LTIuMzEgMS4zOC0zLjU2aDIuOTVjLS45NiAxLjY1LTIuNDkgMi45My00LjMzIDMuNTZ6TTE2LjM2IDE0Yy4wOC0uNjYuMTQtMS4zMi4xNC0yIDAtLjY4LS4wNi0xLjM0LS4xNC0yaDMuMzhjLjE2LjY0LjI2IDEuMzEuMjYgMnMtLjEgMS4zNi0uMjYgMmgtMy4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhc3QtcGFnZT48cGF0aCBkPVxcXCJNNS41OSA3LjQxTDEwLjE4IDEybC00LjU5IDQuNTlMNyAxOGw2LTYtNi02ek0xNiA2aDJ2MTJoLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYXVuY2g+PHBhdGggZD1cXFwiTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGlnaHRidWxiLW91dGxpbmU+PHBhdGggZD1cXFwiTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjFsLS44NS42VjE2aC00di0yLjNsLS44NS0uNkM3LjggMTIuMTYgNyAxMC42MyA3IDljMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWMwIDEuNjMtLjggMy4xNi0yLjE1IDQuMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpbmUtc3R5bGU+PHBhdGggZD1cXFwiTTMgMTZoNXYtMkgzdjJ6bTYuNSAwaDV2LTJoLTV2MnptNi41IDBoNXYtMmgtNXYyek0zIDIwaDJ2LTJIM3Yyem00IDBoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6TTMgMTJoOHYtMkgzdjJ6bTEwIDBoOHYtMmgtOHYyek0zIDR2NGgxOFY0SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5lLXdlaWdodD48cGF0aCBkPVxcXCJNMyAxN2gxOHYtMkgzdjJ6bTAgM2gxOHYtMUgzdjF6bTAtN2gxOHYtM0gzdjN6bTAtOXY0aDE4VjRIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpbms+PHBhdGggZD1cXFwiTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGlzdD48cGF0aCBkPVxcXCJNMyAxM2gydi0ySDN2MnptMCA0aDJ2LTJIM3Yyem0wLThoMlY3SDN2MnptNCA0aDE0di0ySDd2MnptMCA0aDE0di0ySDd2MnpNNyA3djJoMTRWN0g3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jaz48cGF0aCBkPVxcXCJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0tNiA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptMy4xLTlIOC45VjZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2stb3Blbj48cGF0aCBkPVxcXCJNMTIgMTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2aDEuOWMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bTAgMTJINlYxMGgxMnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2stb3V0bGluZT48cGF0aCBkPVxcXCJNMTIgMTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnpNOC45IDZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFzMy4xIDEuMzkgMy4xIDMuMXYySDguOVY2ek0xOCAyMEg2VjEwaDEydjEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG93LXByaW9yaXR5PjxwYXRoIGQ9XFxcIk0xNCA1aDh2MmgtOHptMCA1LjVoOHYyaC04em0wIDUuNWg4djJoLTh6TTIgMTEuNUMyIDE1LjA4IDQuOTIgMTggOC41IDE4SDl2MmwzLTMtMy0zdjJoLS41QzYuMDIgMTYgNCAxMy45OCA0IDExLjVTNi4wMiA3IDguNSA3SDEyVjVIOC41QzQuOTIgNSAyIDcuOTIgMiAxMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG95YWx0eT48cGF0aCBkPVxcXCJNMjEuNDEgMTEuNThsLTktOUMxMi4wNSAyLjIyIDExLjU1IDIgMTEgMkg0Yy0xLjEgMC0yIC45LTIgMnY3YzAgLjU1LjIyIDEuMDUuNTkgMS40Mmw5IDljLjM2LjM2Ljg2LjU4IDEuNDEuNTguNTUgMCAxLjA1LS4yMiAxLjQxLS41OWw3LTdjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLS41NS0uMjMtMS4wNi0uNTktMS40MnpNNS41IDdDNC42NyA3IDQgNi4zMyA0IDUuNVM0LjY3IDQgNS41IDQgNyA0LjY3IDcgNS41IDYuMzMgNyA1LjUgN3ptMTEuNzcgOC4yN0wxMyAxOS41NGwtNC4yNy00LjI3QzguMjggMTQuODEgOCAxNC4xOSA4IDEzLjVjMC0xLjM4IDEuMTItMi41IDIuNS0yLjUuNjkgMCAxLjMyLjI4IDEuNzcuNzRsLjczLjcyLjczLS43M2MuNDUtLjQ1IDEuMDgtLjczIDEuNzctLjczIDEuMzggMCAyLjUgMS4xMiAyLjUgMi41IDAgLjY5LS4yOCAxLjMyLS43MyAxLjc3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWFpbD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXJrdW5yZWFkPjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1hcmt1bnJlYWQtbWFpbGJveD48cGF0aCBkPVxcXCJNMjAgNkgxMHY2SDhWNGg2VjBINnY2SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1lbnU+PHBhdGggZD1cXFwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3JlLWhvcml6PjxwYXRoIGQ9XFxcIk02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW9yZS12ZXJ0PjxwYXRoIGQ9XFxcIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vdG9yY3ljbGU+PHBhdGggZD1cXFwiTTE5LjQ0IDkuMDNMMTUuNDEgNUgxMXYyaDMuNTlsMiAySDVjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDVjMi40NiAwIDQuNDUtMS42OSA0LjktNGgxLjY1bDIuNzctMi43N2MtLjIxLjU0LS4zMiAxLjE0LS4zMiAxLjc3IDAgMi44IDIuMiA1IDUgNXM1LTIuMiA1LTVjMC0yLjY1LTEuOTctNC43Ny00LjU2LTQuOTd6TTcuODIgMTVDNy40IDE2LjE1IDYuMjggMTcgNSAxN2MtMS42MyAwLTMtMS4zNy0zLTNzMS4zNy0zIDMtM2MxLjI4IDAgMi40Ljg1IDIuODIgMkg1djJoMi44MnpNMTkgMTdjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW92ZS10by1pbmJveD48cGF0aCBkPVxcXCJNMTkgM0g0Ljk5Yy0xLjExIDAtMS45OC45LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTJoLTRjMCAxLjY2LTEuMzUgMy0zIDNzLTMtMS4zNC0zLTNINC45OVY1SDE5djEwem0tMy01aC0yVjdoLTR2M0g4bDQgNCA0LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uZXh0LXdlZWs+PHBhdGggZD1cXFwiTTIwIDdoLTRWNWMwLS41NS0uMjItMS4wNS0uNTktMS40MUMxNS4wNSAzLjIyIDE0LjU1IDMgMTQgM2gtNGMtMS4xIDAtMiAuOS0yIDJ2Mkg0Yy0xLjEgMC0yIC45LTIgMnYxMWMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjljMC0xLjEtLjktMi0yLTJ6TTEwIDVoNHYyaC00VjV6bTEgMTMuNWwtMS0xIDMtMy0zLTMgMS0xIDQgNC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ub3RlLWFkZD48cGF0aCBkPVxcXCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE0aC0zdjNoLTJ2LTNIOHYtMmgzdi0zaDJ2M2gzdjJ6bS0zLTdWMy41TDE4LjUgOUgxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9mZmxpbmUtcGluPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMxNy41IDIgMTIgMnptNSAxNkg3di0yaDEwdjJ6bS02LjctNEw3IDEwLjdsMS40LTEuNCAxLjkgMS45IDUuMy01LjNMMTcgNy4zIDEwLjMgMTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGFjaXR5PjxwYXRoIGQ9XFxcIk0xNy42NiA4TDEyIDIuMzUgNi4zNCA4QzQuNzggOS41NiA0IDExLjY0IDQgMTMuNjRzLjc4IDQuMTEgMi4zNCA1LjY3IDMuNjEgMi4zNSA1LjY2IDIuMzUgNC4xLS43OSA1LjY2LTIuMzVTMjAgMTUuNjQgMjAgMTMuNjQgMTkuMjIgOS41NiAxNy42NiA4ek02IDE0Yy4wMS0yIC42Mi0zLjI3IDEuNzYtNC40TDEyIDUuMjdsNC4yNCA0LjM4QzE3LjM4IDEwLjc3IDE3Ljk5IDEyIDE4IDE0SDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLWluLWJyb3dzZXI+PHBhdGggZD1cXFwiTTE5IDRINWMtMS4xMSAwLTIgLjktMiAydjEyYzAgMS4xLjg5IDIgMiAyaDR2LTJINVY4aDE0djEwaC00djJoNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS44OS0yLTItMnptLTcgNmwtNCA0aDN2Nmgydi02aDNsLTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wZW4taW4tbmV3PjxwYXRoIGQ9XFxcIk0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wZW4td2l0aD48cGF0aCBkPVxcXCJNMTAgOWg0VjZoM2wtNS01LTUgNWgzdjN6bS0xIDFINlY3bC01IDUgNSA1di0zaDN2LTR6bTE0IDJsLTUtNXYzaC0zdjRoM3YzbDUtNXptLTkgM2gtNHYzSDdsNSA1IDUtNWgtM3YtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBhZ2V2aWV3PjxwYXRoIGQ9XFxcIk0xMS41IDlDMTAuMTIgOSA5IDEwLjEyIDkgMTEuNXMxLjEyIDIuNSAyLjUgMi41IDIuNS0xLjEyIDIuNS0yLjVTMTIuODggOSAxMS41IDl6TTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tMy4yMSAxNC4yMWwtMi45MS0yLjkxYy0uNjkuNDQtMS41MS43LTIuMzkuN0M5LjAxIDE2IDcgMTMuOTkgNyAxMS41UzkuMDEgNyAxMS41IDcgMTYgOS4wMSAxNiAxMS41YzAgLjg4LS4yNiAxLjY5LS43IDIuMzlsMi45MSAyLjktMS40MiAxLjQyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGFuLXRvb2w+PHBhdGggZD1cXFwiTTIzIDUuNVYyMGMwIDIuMi0xLjggNC00IDRoLTcuM2MtMS4wOCAwLTIuMS0uNDMtMi44NS0xLjE5TDEgMTQuODNzMS4yNi0xLjIzIDEuMy0xLjI1Yy4yMi0uMTkuNDktLjI5Ljc5LS4yOS4yMiAwIC40Mi4wNi42LjE2LjA0LjAxIDQuMzEgMi40NiA0LjMxIDIuNDZWNGMwLS44My42Ny0xLjUgMS41LTEuNVMxMSAzLjE3IDExIDR2N2gxVjEuNWMwLS44My42Ny0xLjUgMS41LTEuNVMxNSAuNjcgMTUgMS41VjExaDFWMi41YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41VjExaDFWNS41YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGF5bWVudD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2YzAtMS4xMS0uODktMi0yLTJ6bTAgMTRINHYtNmgxNnY2em0wLTEwSDRWNmgxNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1jYW1lcmEtbWljPjxwYXRoIGQ9XFxcIk0yMCA1aC0zLjE3TDE1IDNIOUw3LjE3IDVINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmg3di0yLjA5Yy0yLjgzLS40OC01LTIuOTQtNS01LjkxaDJjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGgyYzAgMi45Ny0yLjE3IDUuNDMtNSA1LjkxVjIxaDdjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptLTYgOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJWOWMwLTEuMS45LTIgMi0yczIgLjkgMiAydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWNvbnRhY3QtY2FsZW5kYXI+PHBhdGggZD1cXFwiTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDNjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem02IDEySDZ2LTFjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xdjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWRhdGEtc2V0dGluZz48cGF0aCBkPVxcXCJNMTguOTkgMTEuNWMuMzQgMCAuNjcuMDMgMSAuMDdMMjAgMCAwIDIwaDExLjU2Yy0uMDQtLjMzLS4wNy0uNjYtLjA3LTEgMC00LjE0IDMuMzYtNy41IDcuNS03LjV6bTMuNzEgNy45OWMuMDItLjE2LjA0LS4zMi4wNC0uNDkgMC0uMTctLjAxLS4zMy0uMDQtLjQ5bDEuMDYtLjgzYy4wOS0uMDguMTItLjIxLjA2LS4zMmwtMS0xLjczYy0uMDYtLjExLS4xOS0uMTUtLjMxLS4xMWwtMS4yNC41Yy0uMjYtLjItLjU0LS4zNy0uODUtLjQ5bC0uMTktMS4zMmMtLjAxLS4xMi0uMTItLjIxLS4yNC0uMjFoLTJjLS4xMiAwLS4yMy4wOS0uMjUuMjFsLS4xOSAxLjMyYy0uMy4xMy0uNTkuMjktLjg1LjQ5bC0xLjI0LS41Yy0uMTEtLjA0LS4yNCAwLS4zMS4xMWwtMSAxLjczYy0uMDYuMTEtLjA0LjI0LjA2LjMybDEuMDYuODNjLS4wMi4xNi0uMDMuMzItLjAzLjQ5IDAgLjE3LjAxLjMzLjAzLjQ5bC0xLjA2LjgzYy0uMDkuMDgtLjEyLjIxLS4wNi4zMmwxIDEuNzNjLjA2LjExLjE5LjE1LjMxLjExbDEuMjQtLjVjLjI2LjIuNTQuMzcuODUuNDlsLjE5IDEuMzJjLjAyLjEyLjEyLjIxLjI1LjIxaDJjLjEyIDAgLjIzLS4wOS4yNS0uMjFsLjE5LTEuMzJjLjMtLjEzLjU5LS4yOS44NC0uNDlsMS4yNS41Yy4xMS4wNC4yNCAwIC4zMS0uMTFsMS0xLjczYy4wNi0uMTEuMDMtLjI0LS4wNi0uMzJsLTEuMDctLjgzem0tMy43MSAxLjAxYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tZGV2aWNlLWluZm9ybWF0aW9uPjxwYXRoIGQ9XFxcIk0xMyA3aC0ydjJoMlY3em0wIDRoLTJ2Nmgydi02em00LTkuOTlMNyAxYy0xLjEgMC0yIC45LTIgMnYxOGMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjNjMC0xLjEtLjktMS45OS0yLTEuOTl6TTE3IDE5SDdWNWgxMHYxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0taWRlbnRpdHk+PHBhdGggZD1cXFwiTTEyIDUuOWMxLjE2IDAgMi4xLjk0IDIuMSAyLjFzLS45NCAyLjEtMi4xIDIuMVM5LjkgOS4xNiA5LjkgOHMuOTQtMi4xIDIuMS0yLjFtMCA5YzIuOTcgMCA2LjEgMS40NiA2LjEgMi4xdjEuMUg1LjlWMTdjMC0uNjQgMy4xMy0yLjEgNi4xLTIuMU0xMiA0QzkuNzkgNCA4IDUuNzkgOCA4czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wIDljLTIuNjcgMC04IDEuMzQtOCA0djNoMTZ2LTNjMC0yLjY2LTUuMzMtNC04LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLW1lZGlhPjxwYXRoIGQ9XFxcIk0yIDZIMHY1aC4wMUwwIDIwYzAgMS4xLjkgMiAyIDJoMTh2LTJIMlY2em0yMC0yaC04bC0yLTJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDE2YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnpNNyAxNWw0LjUtNiAzLjUgNC41MSAyLjUtMy4wMUwyMSAxNUg3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1waG9uZS1tc2c+PHBhdGggZD1cXFwiTTIwIDE1LjVjLTEuMjUgMC0yLjQ1LS4yLTMuNTctLjU3LS4zNS0uMTEtLjc0LS4wMy0xLjAyLjI0bC0yLjIgMi4yYy0yLjgzLTEuNDQtNS4xNS0zLjc1LTYuNTktNi41OGwyLjItMi4yMWMuMjgtLjI3LjM2LS42Ni4yNS0xLjAxQzguNyA2LjQ1IDguNSA1LjI1IDguNSA0YzAtLjU1LS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDEgMCA5LjM5IDcuNjEgMTcgMTcgMTcgLjU1IDAgMS0uNDUgMS0xdi0zLjVjMC0uNTUtLjQ1LTEtMS0xek0xMiAzdjEwbDMtM2g2VjNoLTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLXNjYW4td2lmaT48cGF0aCBkPVxcXCJNMTIgM0M2Ljk1IDMgMy4xNSA0Ljg1IDAgNy4yM0wxMiAyMiAyNCA3LjI1QzIwLjg1IDQuODcgMTcuMDUgMyAxMiAzem0xIDEzaC0ydi02aDJ2NnptLTItOFY2aDJ2MmgtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBldHM+PGNpcmNsZSBjeD00LjUgY3k9OS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9OSBjeT01LjUgcj0yLjU+PC9jaXJjbGU+PGNpcmNsZSBjeD0xNSBjeT01LjUgcj0yLjU+PC9jaXJjbGU+PGNpcmNsZSBjeD0xOS41IGN5PTkuNSByPTIuNT48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTcuMzQgMTQuODZjLS44Ny0xLjAyLTEuNi0xLjg5LTIuNDgtMi45MS0uNDYtLjU0LTEuMDUtMS4wOC0xLjc1LTEuMzItLjExLS4wNC0uMjItLjA3LS4zMy0uMDktLjI1LS4wNC0uNTItLjA0LS43OC0uMDRzLS41MyAwLS43OS4wNWMtLjExLjAyLS4yMi4wNS0uMzMuMDktLjcuMjQtMS4yOC43OC0xLjc1IDEuMzItLjg3IDEuMDItMS42IDEuODktMi40OCAyLjkxLTEuMzEgMS4zMS0yLjkyIDIuNzYtMi42MiA0Ljc5LjI5IDEuMDIgMS4wMiAyLjAzIDIuMzMgMi4zMi43My4xNSAzLjA2LS40NCA1LjU0LS40NGguMThjMi40OCAwIDQuODEuNTggNS41NC40NCAxLjMxLS4yOSAyLjA0LTEuMzEgMi4zMy0yLjMyLjMxLTIuMDQtMS4zLTMuNDktMi42MS00Ljh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waWN0dXJlLWluLXBpY3R1cmU+PHBhdGggZD1cXFwiTTE5IDdoLTh2Nmg4Vjd6bTItNEgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OFY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OGgxOHYxNC4wM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBpY3R1cmUtaW4tcGljdHVyZS1hbHQ+PHBhdGggZD1cXFwiTTE5IDExaC04djZoOHYtNnptNCA4VjQuOThDMjMgMy44OCAyMi4xIDMgMjEgM0gzYy0xLjEgMC0yIC44OC0yIDEuOThWMTljMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnptLTIgLjAySDNWNC45N2gxOHYxNC4wNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBsYXktZm9yLXdvcms+PHBhdGggZD1cXFwiTTExIDV2NS41OUg3LjVsNC41IDQuNSA0LjUtNC41SDEzVjVoLTJ6bS01IDljMCAzLjMxIDIuNjkgNiA2IDZzNi0yLjY5IDYtNmgtMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cG9seW1lcj48cGF0aCBkPVxcXCJNMTkgNGgtNEw3LjExIDE2LjYzIDQuNSAxMiA5IDRINUwuNSAxMiA1IDIwaDRsNy44OS0xMi42M0wxOS41IDEyIDE1IDIwaDRsNC41LTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wb3dlci1zZXR0aW5ncy1uZXc+PHBhdGggZD1cXFwiTTEzIDNoLTJ2MTBoMlYzem00LjgzIDIuMTdsLTEuNDIgMS40MkMxNy45OSA3Ljg2IDE5IDkuODEgMTkgMTJjMCAzLjg3LTMuMTMgNy03IDdzLTctMy4xMy03LTdjMC0yLjE5IDEuMDEtNC4xNCAyLjU4LTUuNDJMNi4xNyA1LjE3QzQuMjMgNi44MiAzIDkuMjYgMyAxMmMwIDQuOTcgNC4wMyA5IDkgOXM5LTQuMDMgOS05YzAtMi43NC0xLjIzLTUuMTgtMy4xNy02LjgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cHJlZ25hbnQtd29tYW4+PHBhdGggZD1cXFwiTTkgNGMwLTEuMTEuODktMiAyLTJzMiAuODkgMiAyLS44OSAyLTIgMi0yLS44OS0yLTJ6bTcgOWMtLjAxLTEuMzQtLjgzLTIuNTEtMi0zIDAtMS42Ni0xLjM0LTMtMy0zcy0zIDEuMzQtMyAzdjdoMnY1aDN2LTVoM3YtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXByaW50PjxwYXRoIGQ9XFxcIk0xOSA4SDVjLTEuNjYgMC0zIDEuMzQtMyAzdjZoNHY0aDEydi00aDR2LTZjMC0xLjY2LTEuMzQtMy0zLTN6bS0zIDExSDh2LTVoOHY1em0zLTdjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXptLTEtOUg2djRoMTJWM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXF1ZXJ5LWJ1aWxkZXI+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptLjUtMTNIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXF1ZXN0aW9uLWFuc3dlcj48cGF0aCBkPVxcXCJNMjEgNmgtMnY5SDZ2MmMwIC41NS40NSAxIDEgMWgxMWw0IDRWN2MwLS41NS0uNDUtMS0xLTF6bS00IDZWM2MwLS41NS0uNDUtMS0xLTFIM2MtLjU1IDAtMSAuNDUtMSAxdjE0bDQtNGgxMGMuNTUgMCAxLS40NSAxLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYWRpby1idXR0b24tY2hlY2tlZD48cGF0aCBkPVxcXCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYWRpby1idXR0b24tdW5jaGVja2VkPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlY2VpcHQ+PHBhdGggZD1cXFwiTTE4IDE3SDZ2LTJoMTJ2MnptMC00SDZ2LTJoMTJ2MnptMC00SDZWN2gxMnYyek0zIDIybDEuNS0xLjVMNiAyMmwxLjUtMS41TDkgMjJsMS41LTEuNUwxMiAyMmwxLjUtMS41TDE1IDIybDEuNS0xLjVMMTggMjJsMS41LTEuNUwyMSAyMlYybC0xLjUgMS41TDE4IDJsLTEuNSAxLjVMMTUgMmwtMS41IDEuNUwxMiAybC0xLjUgMS41TDkgMiA3LjUgMy41IDYgMiA0LjUgMy41IDMgMnYyMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlY29yZC12b2ljZS1vdmVyPjxjaXJjbGUgY3g9OSBjeT05IHI9ND48L2NpcmNsZT48cGF0aCBkPVxcXCJNOSAxNWMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHptNy43Ni05LjY0bC0xLjY4IDEuNjljLjg0IDEuMTguODQgMi43MSAwIDMuODlsMS42OCAxLjY5YzIuMDItMi4wMiAyLjAyLTUuMDcgMC03LjI3ek0yMC4wNyAybC0xLjYzIDEuNjNjMi43NyAzLjAyIDIuNzcgNy41NiAwIDEwLjc0TDIwLjA3IDE2YzMuOS0zLjg5IDMuOTEtOS45NSAwLTE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVkZWVtPjxwYXRoIGQ9XFxcIk0yMCA2aC0yLjE4Yy4xMS0uMzEuMTgtLjY1LjE4LTEgMC0xLjY2LTEuMzQtMy0zLTMtMS4wNSAwLTEuOTYuNTQtMi41IDEuMzVsLS41LjY3LS41LS42OEMxMC45NiAyLjU0IDEwLjA1IDIgOSAyIDcuMzQgMiA2IDMuMzQgNiA1YzAgLjM1LjA3LjY5LjE4IDFINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tNS0yYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6TTkgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoNS4wOEw3IDEwLjgzIDguNjIgMTIgMTEgOC43NmwxLTEuMzYgMSAxLjM2TDE1LjM4IDEyIDE3IDEwLjgzIDE0LjkyIDhIMjB2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZG8+PHBhdGggZD1cXFwiTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZnJlc2g+PHBhdGggZD1cXFwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlPjxwYXRoIGQ9XFxcIk0xOSAxM0g1di0yaDE0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExSDd2LTJoMTB2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZS1jaXJjbGUtb3V0bGluZT48cGF0aCBkPVxcXCJNNyAxMXYyaDEwdi0ySDd6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtc2hvcHBpbmctY2FydD48cGF0aCBkPVxcXCJNMjIuNzMgMjIuNzNMMi43NyAyLjc3IDIgMmwtLjczLS43M0wwIDIuNTRsNC4zOSA0LjM5IDIuMjEgNC42Ni0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoNy40NmwxLjM4IDEuMzhjLS41LjM2LS44My45NS0uODMgMS42MiAwIDEuMS44OSAyIDEuOTkgMiAuNjcgMCAxLjI2LS4zMyAxLjYyLS44NEwyMS40NiAyNGwxLjI3LTEuMjd6TTcuNDIgMTVjLS4xNCAwLS4yNS0uMTEtLjI1LS4yNWwuMDMtLjEyLjktMS42M2gyLjM2bDIgMkg3LjQyem04LjEzLTJjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuNTgtNi40OWMuMDgtLjE0LjEyLS4zMS4xMi0uNDggMC0uNTUtLjQ1LTEtMS0xSDYuNTRsOS4wMSA5ek03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVvcmRlcj48cGF0aCBkPVxcXCJNMyAxNWgxOHYtMkgzdjJ6bTAgNGgxOHYtMkgzdjJ6bTAtOGgxOFY5SDN2MnptMC02djJoMThWNUgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwbHk+PHBhdGggZD1cXFwiTTEwIDlWNWwtNyA3IDcgN3YtNC4xYzUgMCA4LjUgMS42IDExIDUuMS0xLTUtNC0xMC0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcGx5LWFsbD48cGF0aCBkPVxcXCJNNyA4VjVsLTcgNyA3IDd2LTNsLTQtNCA0LTR6bTYgMVY1bC03IDcgNyA3di00LjFjNSAwIDguNSAxLjYgMTEgNS4xLTEtNS00LTEwLTExLTExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwb3J0PjxwYXRoIGQ9XFxcIk0xNS43MyAzSDguMjdMMyA4LjI3djcuNDZMOC4yNyAyMWg3LjQ2TDIxIDE1LjczVjguMjdMMTUuNzMgM3pNMTIgMTcuM2MtLjcyIDAtMS4zLS41OC0xLjMtMS4zIDAtLjcyLjU4LTEuMyAxLjMtMS4zLjcyIDAgMS4zLjU4IDEuMyAxLjMgMCAuNzItLjU4IDEuMy0xLjMgMS4zem0xLTQuM2gtMlY3aDJ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcG9ydC1wcm9ibGVtPjxwYXRoIGQ9XFxcIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0b3JlPjxwYXRoIGQ9XFxcIk0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0b3JlLXBhZ2U+PHBhdGggZD1cXFwiTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4YzEuMSAwIDItLjkgMi0yVjhsLTYtNnptLTIgMTZjLTIuMDUgMC0zLjgxLTEuMjQtNC41OC0zaDEuNzFjLjYzLjkgMS42OCAxLjUgMi44NyAxLjUgMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVTMTMuOTMgOS41IDEyIDkuNWMtMS4zNSAwLTIuNTIuNzgtMy4xIDEuOWwxLjYgMS42aC00VjlsMS4zIDEuM0M4LjY5IDguOTIgMTAuMjMgOCAxMiA4YzIuNzYgMCA1IDIuMjQgNSA1cy0yLjI0IDUtNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm9vbT48cGF0aCBkPVxcXCJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yb3VuZGVkLWNvcm5lcj48cGF0aCBkPVxcXCJNMTkgMTloMnYyaC0ydi0yem0wLTJoMnYtMmgtMnYyek0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTAtOGgyVjdIM3Yyem0wLTRoMlYzSDN2MnptNCAwaDJWM0g3djJ6bTggMTZoMnYtMmgtMnYyem0tNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptLTggMGgydi0ySDd2MnptLTQgMGgydi0ySDN2MnpNMjEgOGMwLTIuNzYtMi4yNC01LTUtNWgtNXYyaDVjMS42NSAwIDMgMS4zNSAzIDN2NWgyVjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yb3dpbmc+PHBhdGggZD1cXFwiTTguNSAxNC41TDQgMTlsMS41IDEuNUw5IDE3aDJsLTIuNS0yLjV6TTE1IDFjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem02IDIwLjAxTDE4IDI0bC0yLjk5LTMuMDFWMTkuNWwtNy4xLTcuMDljLS4zMS4wNS0uNjEuMDctLjkxLjA3di0yLjE2YzEuNjYuMDMgMy42MS0uODcgNC42Ny0yLjA0bDEuNC0xLjU1Yy4xOS0uMjEuNDMtLjM4LjY5LS41LjI5LS4xNC42Mi0uMjMuOTYtLjIzaC4wM0MxNS45OSA2LjAxIDE3IDcuMDIgMTcgOC4yNnY1Ljc1YzAgLjg0LS4zNSAxLjYxLS45MiAyLjE2bC0zLjU4LTMuNTh2LTIuMjdjLS42My41Mi0xLjQzIDEuMDItMi4yOSAxLjM5TDE2LjUgMThIMThsMyAzLjAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2F2ZT48cGF0aCBkPVxcXCJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zY2hlZHVsZT48cGF0aCBkPVxcXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4em0uNS0xM0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VhcmNoPjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VsZWN0LWFsbD48cGF0aCBkPVxcXCJNMyA1aDJWM2MtMS4xIDAtMiAuOS0yIDJ6bTAgOGgydi0ySDN2MnptNCA4aDJ2LTJIN3Yyek0zIDloMlY3SDN2MnptMTAtNmgtMnYyaDJWM3ptNiAwdjJoMmMwLTEuMS0uOS0yLTItMnpNNSAyMXYtMkgzYzAgMS4xLjkgMiAyIDJ6bS0yLTRoMnYtMkgzdjJ6TTkgM0g3djJoMlYzem0yIDE4aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptMCA4YzEuMSAwIDItLjkgMi0yaC0ydjJ6bTAtMTJoMlY3aC0ydjJ6bTAgOGgydi0yaC0ydjJ6bS00IDRoMnYtMmgtMnYyem0wLTE2aDJWM2gtMnYyek03IDE3aDEwVjdIN3YxMHptMi04aDZ2Nkg5Vjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZW5kPjxwYXRoIGQ9XFxcIk0yLjAxIDIxTDIzIDEyIDIuMDEgMyAyIDEwbDE1IDItMTUgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzPjxwYXRoIGQ9XFxcIk0xOS40MyAxMi45OGMuMDQtLjMyLjA3LS42NC4wNy0uOThzLS4wMy0uNjYtLjA3LS45OGwyLjExLTEuNjVjLjE5LS4xNS4yNC0uNDIuMTItLjY0bC0yLTMuNDZjLS4xMi0uMjItLjM5LS4zLS42MS0uMjJsLTIuNDkgMWMtLjUyLS40LTEuMDgtLjczLTEuNjktLjk4bC0uMzgtMi42NUMxNC40NiAyLjE4IDE0LjI1IDIgMTQgMmgtNGMtLjI1IDAtLjQ2LjE4LS40OS40MmwtLjM4IDIuNjVjLS42MS4yNS0xLjE3LjU5LTEuNjkuOThsLTIuNDktMWMtLjIzLS4wOS0uNDkgMC0uNjEuMjJsLTIgMy40NmMtLjEzLjIyLS4wNy40OS4xMi42NGwyLjExIDEuNjVjLS4wNC4zMi0uMDcuNjUtLjA3Ljk4cy4wMy42Ni4wNy45OGwtMi4xMSAxLjY1Yy0uMTkuMTUtLjI0LjQyLS4xMi42NGwyIDMuNDZjLjEyLjIyLjM5LjMuNjEuMjJsMi40OS0xYy41Mi40IDEuMDguNzMgMS42OS45OGwuMzggMi42NWMuMDMuMjQuMjQuNDIuNDkuNDJoNGMuMjUgMCAuNDYtLjE4LjQ5LS40MmwuMzgtMi42NWMuNjEtLjI1IDEuMTctLjU5IDEuNjktLjk4bDIuNDkgMWMuMjMuMDkuNDkgMCAuNjEtLjIybDItMy40NmMuMTItLjIyLjA3LS40OS0uMTItLjY0bC0yLjExLTEuNjV6TTEyIDE1LjVjLTEuOTMgMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41IDMuNS0zLjUgMy41IDEuNTcgMy41IDMuNS0xLjU3IDMuNS0zLjUgMy41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYXBwbGljYXRpb25zPjxwYXRoIGQ9XFxcIk0xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjkgMi0yVjVjMC0xLjEtLjg5LTItMi0yem0tMS43NSA5YzAgLjIzLS4wMi40Ni0uMDUuNjhsMS40OCAxLjE2Yy4xMy4xMS4xNy4zLjA4LjQ1bC0xLjQgMi40MmMtLjA5LjE1LS4yNy4yMS0uNDMuMTVsLTEuNzQtLjdjLS4zNi4yOC0uNzYuNTEtMS4xOC42OWwtLjI2IDEuODVjLS4wMy4xNy0uMTguMy0uMzUuM2gtMi44Yy0uMTcgMC0uMzItLjEzLS4zNS0uMjlsLS4yNi0xLjg1Yy0uNDMtLjE4LS44Mi0uNDEtMS4xOC0uNjlsLTEuNzQuN2MtLjE2LjA2LS4zNCAwLS40My0uMTVsLTEuNC0yLjQyYy0uMDktLjE1LS4wNS0uMzQuMDgtLjQ1bDEuNDgtMS4xNmMtLjAzLS4yMy0uMDUtLjQ2LS4wNS0uNjkgMC0uMjMuMDItLjQ2LjA1LS42OGwtMS40OC0xLjE2Yy0uMTMtLjExLS4xNy0uMy0uMDgtLjQ1bDEuNC0yLjQyYy4wOS0uMTUuMjctLjIxLjQzLS4xNWwxLjc0LjdjLjM2LS4yOC43Ni0uNTEgMS4xOC0uNjlsLjI2LTEuODVjLjAzLS4xNy4xOC0uMy4zNS0uM2gyLjhjLjE3IDAgLjMyLjEzLjM1LjI5bC4yNiAxLjg1Yy40My4xOC44Mi40MSAxLjE4LjY5bDEuNzQtLjdjLjE2LS4wNi4zNCAwIC40My4xNWwxLjQgMi40MmMuMDkuMTUuMDUuMzQtLjA4LjQ1bC0xLjQ4IDEuMTZjLjAzLjIzLjA1LjQ2LjA1LjY5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYmFja3VwLXJlc3RvcmU+PHBhdGggZD1cXFwiTTE0IDEyYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptLTItOWMtNC45NyAwLTkgNC4wMy05IDlIMGw0IDQgNC00SDVjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjUxIDAtMi45MS0uNDktNC4wNi0xLjNsLTEuNDIgMS40NEM4LjA0IDIwLjMgOS45NCAyMSAxMiAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJsdWV0b290aD48cGF0aCBkPVxcXCJNMTEgMjRoMnYtMmgtMnYyem0tNCAwaDJ2LTJIN3Yyem04IDBoMnYtMmgtMnYyem0yLjcxLTE4LjI5TDEyIDBoLTF2Ny41OUw2LjQxIDMgNSA0LjQxIDEwLjU5IDEwIDUgMTUuNTkgNi40MSAxNyAxMSAxMi40MVYyMGgxbDUuNzEtNS43MS00LjMtNC4yOSA0LjMtNC4yOXpNMTMgMy44M2wxLjg4IDEuODhMMTMgNy41OVYzLjgzem0xLjg4IDEwLjQ2TDEzIDE2LjE3di0zLjc2bDEuODggMS44OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJyaWdodG5lc3M+PHBhdGggZD1cXFwiTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpNOCAxNmgyLjVsMS41IDEuNSAxLjUtMS41SDE2di0yLjVsMS41LTEuNS0xLjUtMS41VjhoLTIuNUwxMiA2LjUgMTAuNSA4SDh2Mi41TDYuNSAxMiA4IDEzLjVWMTZ6bTQtN2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgM1Y5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtY2VsbD48cGF0aCBkPVxcXCJNNyAyNGgydi0ySDd2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpNMTYgLjAxTDggMEM2LjkgMCA2IC45IDYgMnYxNmMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWMmMwLTEuMS0uOS0xLjk5LTItMS45OXpNMTYgMTZIOFY0aDh2MTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1ldGhlcm5ldD48cGF0aCBkPVxcXCJNNy43NyA2Ljc2TDYuMjMgNS40OC44MiAxMmw1LjQxIDYuNTIgMS41NC0xLjI4TDMuNDIgMTJsNC4zNS01LjI0ek03IDEzaDJ2LTJIN3Yyem0xMC0yaC0ydjJoMnYtMnptLTYgMmgydi0yaC0ydjJ6bTYuNzctNy41MmwtMS41NCAxLjI4TDIwLjU4IDEybC00LjM1IDUuMjQgMS41NCAxLjI4TDIzLjE4IDEybC01LjQxLTYuNTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1hbnRlbm5hPjxwYXRoIGQ9XFxcIk0xMiA1Yy0zLjg3IDAtNyAzLjEzLTcgN2gyYzAtMi43NiAyLjI0LTUgNS01czUgMi4yNCA1IDVoMmMwLTMuODctMy4xMy03LTctN3ptMSA5LjI5Yy44OC0uMzkgMS41LTEuMjYgMS41LTIuMjkgMC0xLjM4LTEuMTItMi41LTIuNS0yLjVTOS41IDEwLjYyIDkuNSAxMmMwIDEuMDIuNjIgMS45IDEuNSAyLjI5djMuM0w3LjU5IDIxIDkgMjIuNDFsMy0zIDMgM0wxNi40MSAyMSAxMyAxNy41OXYtMy4zek0xMiAxQzUuOTMgMSAxIDUuOTMgMSAxMmgyYzAtNC45NyA0LjAzLTkgOS05czkgNC4wMyA5IDloMmMwLTYuMDctNC45My0xMS0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWNvbXBvbmVudD48cGF0aCBkPVxcXCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtY29tcG9zaXRlPjxwYXRoIGQ9XFxcIk01IDJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEgxdjZoNlY2SDVWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMkg5djJ6bS04IDBjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4QzYuMTYgMTguNCA3IDE3LjMgNyAxNnYtMkgxdjJ6TTIxIDZWMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0aC0ydjZoNlY2aC0yem0tOC00YzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIOXY2aDZWNmgtMlYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0yaC02djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1oZG1pPjxwYXRoIGQ9XFxcIk0xOCA3VjRjMC0xLjEtLjktMi0yLTJIOGMtMS4xIDAtMiAuOS0yIDJ2M0g1djZsMyA2djNoOHYtM2wzLTZWN2gtMXpNOCA0aDh2M2gtMlY1aC0xdjJoLTJWNWgtMXYySDhWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LXN2aWRlbz48cGF0aCBkPVxcXCJNOCAxMS41YzAtLjgzLS42Ny0xLjUtMS41LTEuNVM1IDEwLjY3IDUgMTEuNSA1LjY3IDEzIDYuNSAxMyA4IDEyLjMzIDggMTEuNXptNy01YzAtLjgzLS42Ny0xLjUtMS41LTEuNWgtM0M5LjY3IDUgOSA1LjY3IDkgNi41UzkuNjcgOCAxMC41IDhoM2MuODMgMCAxLjUtLjY3IDEuNS0xLjV6TTguNSAxNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVTNy42NyAxOCA4LjUgMThzMS41LS42NyAxLjUtMS41UzkuMzMgMTUgOC41IDE1ek0xMiAxQzUuOTMgMSAxIDUuOTMgMSAxMnM0LjkzIDExIDExIDExIDExLTQuOTMgMTEtMTFTMTguMDcgMSAxMiAxem0wIDIwYy00Ljk2IDAtOS00LjA0LTktOXM0LjA0LTkgOS05IDkgNC4wNCA5IDktNC4wNCA5LTkgOXptNS41LTExYy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptLTIgNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1vdmVyc2Nhbj48cGF0aCBkPVxcXCJNMTIuMDEgNS41TDEwIDhoNGwtMS45OS0yLjV6TTE4IDEwdjRsMi41LTEuOTlMMTggMTB6TTYgMTBsLTIuNSAyLjAxTDYgMTR2LTR6bTggNmgtNGwyLjAxIDIuNUwxNCAxNnptNy0xM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTYuMDFIM1Y0Ljk5aDE4djE0LjAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcGhvbmU+PHBhdGggZD1cXFwiTTEzIDloLTJ2MmgyVjl6bTQgMGgtMnYyaDJWOXptMyA2LjVjLTEuMjUgMC0yLjQ1LS4yLTMuNTctLjU3LS4zNS0uMTEtLjc0LS4wMy0xLjAyLjI0bC0yLjIgMi4yYy0yLjgzLTEuNDQtNS4xNS0zLjc1LTYuNTktNi41OGwyLjItMi4yMWMuMjgtLjI3LjM2LS42Ni4yNS0xLjAxQzguNyA2LjQ1IDguNSA1LjI1IDguNSA0YzAtLjU1LS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDEgMCA5LjM5IDcuNjEgMTcgMTcgMTcgLjU1IDAgMS0uNDUgMS0xdi0zLjVjMC0uNTUtLjQ1LTEtMS0xek0xOSA5djJoMlY5aC0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcG93ZXI+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTItMjJoLTJ2MTBoMlYyem0zLjU2IDIuNDRsLTEuNDUgMS40NUMxNi44NCA2Ljk0IDE4IDguODMgMTggMTFjMCAzLjMxLTIuNjkgNi02IDZzLTYtMi42OS02LTZjMC0yLjE3IDEuMTYtNC4wNiAyLjg4LTUuMTJMNy40NCA0LjQ0QzUuMzYgNS44OCA0IDguMjggNCAxMWMwIDQuNDIgMy41OCA4IDggOHM4LTMuNTggOC04YzAtMi43Mi0xLjM2LTUuMTItMy40NC02LjU2ek0xNSAyNGgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1yZW1vdGU+PHBhdGggZD1cXFwiTTE1IDlIOWMtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xVjEwYzAtLjU1LS40NS0xLTEtMXptLTMgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6TTcuMDUgNi4wNWwxLjQxIDEuNDFDOS4zNyA2LjU2IDEwLjYyIDYgMTIgNnMyLjYzLjU2IDMuNTQgMS40NmwxLjQxLTEuNDFDMTUuNjggNC43OCAxMy45MyA0IDEyIDRzLTMuNjguNzgtNC45NSAyLjA1ek0xMiAwQzguOTYgMCA2LjIxIDEuMjMgNC4yMiAzLjIybDEuNDEgMS40MUM3LjI2IDMuMDEgOS41MSAyIDEyIDJzNC43NCAxLjAxIDYuMzYgMi42NGwxLjQxLTEuNDFDMTcuNzkgMS4yMyAxNS4wNCAwIDEyIDB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy12b2ljZT48cGF0aCBkPVxcXCJNNyAyNGgydi0ySDd2MnptNS0xMWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA0YzAtMS42Ni0xLjM0LTMtMy0zUzkgMi4zNCA5IDR2NmMwIDEuNjYgMS4zNCAzIDMgM3ptLTEgMTFoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyem00LTE0aC0xLjdjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDEzIDYuNyAxMEg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIwaDJ2LTMuMjhjMy4yOC0uNDkgNi0zLjMxIDYtNi43MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3A+PHBhdGggZD1cXFwiTTE2IDZWNGMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJIMnYxM2MwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2aC02em0tNi0yaDR2MmgtNFY0ek05IDE4VjlsNy41IDRMOSAxOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3AtdHdvPjxwYXRoIGQ9XFxcIk0zIDlIMXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMkgzVjl6bTE1LTRWM2MwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMlY1aC01em0tNi0yaDR2MmgtNFYzem0wIDEyVjhsNS41IDMtNS41IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wcGluZy1iYXNrZXQ+PHBhdGggZD1cXFwiTTE3LjIxIDlsLTQuMzgtNi41NmMtLjE5LS4yOC0uNTEtLjQyLS44My0uNDItLjMyIDAtLjY0LjE0LS44My40M0w2Ljc5IDlIMmMtLjU1IDAtMSAuNDUtMSAxIDAgLjA5LjAxLjE4LjA0LjI3bDIuNTQgOS4yN2MuMjMuODQgMSAxLjQ2IDEuOTIgMS40NmgxM2MuOTIgMCAxLjY5LS42MiAxLjkzLTEuNDZsMi41NC05LjI3TDIzIDEwYzAtLjU1LS40NS0xLTEtMWgtNC43OXpNOSA5bDMtNC40TDE1IDlIOXptMyA4Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTcgMThjLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6TTEgMnYyaDJsMy42IDcuNTktMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDEydi0ySDcuNDJjLS4xNCAwLS4yNS0uMTEtLjI1LS4yNWwuMDMtLjEyLjktMS42M2g3LjQ1Yy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg1LjIxbC0uOTQtMkgxem0xNiAxNmMtMS4xIDAtMS45OS45LTEuOTkgMnMuODkgMiAxLjk5IDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zb3J0PjxwYXRoIGQ9XFxcIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zcGVha2VyLW5vdGVzPjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNOCAxNEg2di0yaDJ2MnptMC0zSDZWOWgydjJ6bTAtM0g2VjZoMnYyem03IDZoLTV2LTJoNXYyem0zLTNoLThWOWg4djJ6bTAtM2gtOFY2aDh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNwZWFrZXItbm90ZXMtb2ZmPjxwYXRoIGQ9XFxcIk0xMC41NCAxMWwtLjU0LS41NEw3LjU0IDggNiA2LjQ2IDIuMzggMi44NCAxLjI3IDEuNzMgMCAzbDIuMDEgMi4wMUwyIDIybDQtNGg5bDUuNzMgNS43M0wyMiAyMi40NiAxNy41NCAxOGwtNy03ek04IDE0SDZ2LTJoMnYyem0tMi0zVjlsMiAySDZ6bTE0LTlINC4wOEwxMCA3LjkyVjZoOHYyaC03LjkybDEgMUgxOHYyaC00LjkybDYuOTkgNi45OUMyMS4xNCAxNy45NSAyMiAxNy4wOCAyMiAxNlY0YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3BlbGxjaGVjaz48cGF0aCBkPVxcXCJNMTIuNDUgMTZoMi4wOUw5LjQzIDNINy41N0wyLjQ2IDE2aDIuMDlsMS4xMi0zaDUuNjRsMS4xNCAzem0tNi4wMi01TDguNSA1LjQ4IDEwLjU3IDExSDYuNDN6bTE1LjE2LjU5bC04LjA5IDguMDlMOS44MyAxNmwtMS40MSAxLjQxIDUuMDkgNS4wOUwyMyAxM2wtMS40MS0xLjQxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3Rhcj48cGF0aCBkPVxcXCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFyLWJvcmRlcj48cGF0aCBkPVxcXCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXItaGFsZj48cGF0aCBkPVxcXCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNFY2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RhcnM+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RvcmU+PHBhdGggZD1cXFwiTTIwIDRINHYyaDE2VjR6bTEgMTB2LTJsLTEtNUg0bC0xIDV2MmgxdjZoMTB2LTZoNHY2aDJ2LTZoMXptLTkgNEg2di00aDZ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmRpcmVjdG9yeS1hcnJvdy1sZWZ0PjxwYXRoIGQ9XFxcIk0xMSA5bDEuNDIgMS40Mkw4LjgzIDE0SDE4VjRoMnYxMkg4LjgzbDMuNTkgMy41OEwxMSAyMWwtNi02IDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmRpcmVjdG9yeS1hcnJvdy1yaWdodD48cGF0aCBkPVxcXCJNMTkgMTVsLTYgNi0xLjQyLTEuNDJMMTUuMTcgMTZINFY0aDJ2MTBoOS4xN2wtMy41OS0zLjU4TDEzIDlsNiA2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3ViamVjdD48cGF0aCBkPVxcXCJNMTQgMTdINHYyaDEwdi0yem02LThINHYyaDE2Vjl6TTQgMTVoMTZ2LTJINHYyek00IDV2MmgxNlY1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdXBlcnZpc29yLWFjY291bnQ+PHBhdGggZD1cXFwiTTE2LjUgMTJjMS4zOCAwIDIuNDktMS4xMiAyLjQ5LTIuNVMxNy44OCA3IDE2LjUgN0MxNS4xMiA3IDE0IDguMTIgMTQgOS41czEuMTIgMi41IDIuNSAyLjV6TTkgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTAuNjYgNSA5IDVDNy4zNCA1IDYgNi4zNCA2IDhzMS4zNCAzIDMgM3ptNy41IDNjLTEuODMgMC01LjUuOTItNS41IDIuNzVWMTloMTF2LTIuMjVjMC0xLjgzLTMuNjctMi43NS01LjUtMi43NXpNOSAxM2MtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWg3di0yLjI1YzAtLjg1LjMzLTIuMzQgMi4zNy0zLjQ3QzEwLjUgMTMuMSA5LjY2IDEzIDkgMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zd2FwLWhvcml6PjxwYXRoIGQ9XFxcIk02Ljk5IDExTDMgMTVsMy45OSA0di0zSDE0di0ySDYuOTl2LTN6TTIxIDlsLTMuOTktNHYzSDEwdjJoNy4wMXYzTDIxIDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zd2FwLXZlcnQ+PHBhdGggZD1cXFwiTTE2IDE3LjAxVjEwaC0ydjcuMDFoLTNMMTUgMjFsNC0zLjk5aC0zek05IDNMNSA2Ljk5aDNWMTRoMlY2Ljk5aDNMOSAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC12ZXJ0aWNhbC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTYuNSA5TDEwIDUuNSAxMy41IDlIMTF2NEg5VjlINi41em0xMSA2TDE0IDE4LjUgMTAuNSAxNUgxM3YtNGgydjRoMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3lzdGVtLXVwZGF0ZS1hbHQ+PHBhdGggZD1cXFwiTTEyIDE2LjVsNC00aC0zdi05aC0ydjlIOGw0IDR6bTktMTNoLTZ2MS45OWg2djE0LjAzSDNWNS40OWg2VjMuNUgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0ydi0xNGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRhYj48cGF0aCBkPVxcXCJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZIM1Y1aDEwdjRoOHYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRhYi11bnNlbGVjdGVkPjxwYXRoIGQ9XFxcIk0xIDloMlY3SDF2MnptMCA0aDJ2LTJIMXYyem0wLThoMlYzYy0xLjEgMC0yIC45LTIgMnptOCAxNmgydi0ySDl2MnptLTgtNGgydi0ySDF2MnptMiA0di0ySDFjMCAxLjEuOSAyIDIgMnpNMjEgM2gtOHY2aDEwVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTRoMnYtMmgtMnYyek05IDVoMlYzSDl2MnpNNSAyMWgydi0ySDV2MnpNNSA1aDJWM0g1djJ6bTE2IDE2YzEuMSAwIDItLjkgMi0yaC0ydjJ6bTAtOGgydi0yaC0ydjJ6bS04IDhoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGV4dC1mb3JtYXQ+PHBhdGggZD1cXFwiTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRoZWF0ZXJzPjxwYXRoIGQ9XFxcIk0xOCAzdjJoLTJWM0g4djJINlYzSDR2MThoMnYtMmgydjJoOHYtMmgydjJoMlYzaC0yek04IDE3SDZ2LTJoMnYyem0wLTRINnYtMmgydjJ6bTAtNEg2VjdoMnYyem0xMCA4aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0yVjdoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWItZG93bj48cGF0aCBkPVxcXCJNMTUgM0g2Yy0uODMgMC0xLjU0LjUtMS44NCAxLjIybC0zLjAyIDcuMDVjLS4wOS4yMy0uMTQuNDctLjE0LjczdjEuOTFsLjAxLjAxTDEgMTRjMCAxLjEuOSAyIDIgMmg2LjMxbC0uOTUgNC41Ny0uMDMuMzJjMCAuNDEuMTcuNzkuNDQgMS4wNkw5LjgzIDIzbDYuNTktNi41OWMuMzYtLjM2LjU4LS44Ni41OC0xLjQxVjVjMC0xLjEtLjktMi0yLTJ6bTQgMHYxMmg0VjNoLTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aHVtYi11cD48cGF0aCBkPVxcXCJNMSAyMWg0VjlIMXYxMnptMjItMTFjMC0xLjEtLjktMi0yLTJoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLjQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjUgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTEuOTFsLS4wMS0uMDFMMjMgMTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aHVtYnMtdXAtZG93bj48cGF0aCBkPVxcXCJNMTIgNmMwLS41NS0uNDUtMS0xLTFINS44MmwuNjYtMy4xOC4wMi0uMjNjMC0uMzEtLjEzLS41OS0uMzMtLjhMNS4zOCAwIC40NCA0Ljk0Qy4xNyA1LjIxIDAgNS41OSAwIDZ2Ni41YzAgLjgzLjY3IDEuNSAxLjUgMS41aDYuNzVjLjYyIDAgMS4xNS0uMzggMS4zOC0uOTFsMi4yNi01LjI5Yy4wNy0uMTcuMTEtLjM2LjExLS41NVY2em0xMC41IDRoLTYuNzVjLS42MiAwLTEuMTUuMzgtMS4zOC45MWwtMi4yNiA1LjI5Yy0uMDcuMTctLjExLjM2LS4xMS41NVYxOGMwIC41NS40NSAxIDEgMWg1LjE4bC0uNjYgMy4xOC0uMDIuMjRjMCAuMzEuMTMuNTkuMzMuOGwuNzkuNzggNC45NC00Ljk0Yy4yNy0uMjcuNDQtLjY1LjQ0LTEuMDZ2LTYuNWMwLS44My0uNjctMS41LTEuNS0xLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aW1lbGluZT48cGF0aCBkPVxcXCJNMjMgOGMwIDEuMS0uOSAyLTIgMi0uMTggMC0uMzUtLjAyLS41MS0uMDdsLTMuNTYgMy41NWMuMDUuMTYuMDcuMzQuMDcuNTIgMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yYzAtLjE4LjAyLS4zNi4wNy0uNTJsLTIuNTUtMi41NWMtLjE2LjA1LS4zNC4wNy0uNTIuMDdzLS4zNi0uMDItLjUyLS4wN2wtNC41NSA0LjU2Yy4wNS4xNi4wNy4zMy4wNy41MSAwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTJjLjE4IDAgLjM1LjAyLjUxLjA3bDQuNTYtNC41NUM4LjAyIDkuMzYgOCA5LjE4IDggOWMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgLjE4LS4wMi4zNi0uMDcuNTJsMi41NSAyLjU1Yy4xNi0uMDUuMzQtLjA3LjUyLS4wN3MuMzYuMDIuNTIuMDdsMy41NS0zLjU2QzE5LjAyIDguMzUgMTkgOC4xOCAxOSA4YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b2M+PHBhdGggZD1cXFwiTTMgOWgxNFY3SDN2MnptMCA0aDE0di0ySDN2MnptMCA0aDE0di0ySDN2MnptMTYgMGgydi0yaC0ydjJ6bTAtMTB2MmgyVjdoLTJ6bTAgNmgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b2RheT48cGF0aCBkPVxcXCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9sbD48cGF0aCBkPVxcXCJNMTUgNGMtNC40MiAwLTggMy41OC04IDhzMy41OCA4IDggOCA4LTMuNTggOC04LTMuNTgtOC04LTh6bTAgMTRjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2ek0zIDEyYzAtMi42MSAxLjY3LTQuODMgNC01LjY1VjQuMjZDMy41NSA1LjE1IDEgOC4yNyAxIDEyczIuNTUgNi44NSA2IDcuNzR2LTIuMDljLTIuMzMtLjgyLTQtMy4wNC00LTUuNjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b3VjaC1hcHA+PHBhdGggZD1cXFwiTTkgMTEuMjRWNy41QzkgNi4xMiAxMC4xMiA1IDExLjUgNVMxNCA2LjEyIDE0IDcuNXYzLjc0YzEuMjEtLjgxIDItMi4xOCAyLTMuNzRDMTYgNS4wMSAxMy45OSAzIDExLjUgM1M3IDUuMDEgNyA3LjVjMCAxLjU2Ljc5IDIuOTMgMiAzLjc0em05Ljg0IDQuNjNsLTQuNTQtMi4yNmMtLjE3LS4wNy0uMzUtLjExLS41NC0uMTFIMTN2LTZjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDYuNjcgMTAgNy41djEwLjc0bC0zLjQzLS43MmMtLjA4LS4wMS0uMTUtLjAzLS4yNC0uMDMtLjMxIDAtLjU5LjEzLS43OS4zM2wtLjc5LjggNC45NCA0Ljk0Yy4yNy4yNy42NS40NCAxLjA2LjQ0aDYuNzljLjc1IDAgMS4zMy0uNTUgMS40NC0xLjI4bC43NS01LjI3Yy4wMS0uMDcuMDItLjE0LjAyLS4yIDAtLjYyLS4zOC0xLjE2LS45MS0xLjM4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhY2stY2hhbmdlcz48cGF0aCBkPVxcXCJNMTkuMDcgNC45M2wtMS40MSAxLjQxQzE5LjEgNy43OSAyMCA5Ljc5IDIwIDEyYzAgNC40Mi0zLjU4IDgtOCA4cy04LTMuNTgtOC04YzAtNC4wOCAzLjA1LTcuNDQgNy03LjkzdjIuMDJDOC4xNiA2LjU3IDYgOS4wMyA2IDEyYzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZjMC0xLjY2LS42Ny0zLjE2LTEuNzYtNC4yNGwtMS40MSAxLjQxQzE1LjU1IDkuOSAxNiAxMC45IDE2IDEyYzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00YzAtMS44NiAxLjI4LTMuNDEgMy0zLjg2djIuMTRjLS42LjM1LTEgLjk4LTEgMS43MiAwIDEuMS45IDIgMiAyczItLjkgMi0yYzAtLjc0LS40LTEuMzgtMS0xLjcyVjJoLTFDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMGMwLTIuNzYtMS4xMi01LjI2LTIuOTMtNy4wN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYW5zbGF0ZT48cGF0aCBkPVxcXCJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctZG93bj48cGF0aCBkPVxcXCJNMTYgMThsMi4yOS0yLjI5LTQuODgtNC44OC00IDRMMiA3LjQxIDMuNDEgNmw2IDYgNC00IDYuMyA2LjI5TDIyIDEydjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmVuZGluZy1mbGF0PjxwYXRoIGQ9XFxcIk0yMiAxMmwtNC00djNIM3YyaDE1djN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmVuZGluZy11cD48cGF0aCBkPVxcXCJNMTYgNmwyLjI5IDIuMjktNC44OCA0Ljg4LTQtNEwyIDE2LjU5IDMuNDEgMThsNi02IDQgNCA2LjMtNi4yOUwyMiAxMlY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHVybmVkLWluPjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10dXJuZWQtaW4tbm90PjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTVsLTUtMi4xOEw3IDE4VjVoMTB2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmFyY2hpdmU+PHBhdGggZD1cXFwiTTIwLjU1IDUuMjJsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNS41NUwzLjQ2IDUuMjJDMy4xNyA1LjU3IDMgNi4wMSAzIDYuNVYxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2LjVjMC0uNDktLjE3LS45My0uNDUtMS4yOHpNMTIgOS41bDUuNSA1LjVIMTR2MmgtNHYtMkg2LjVMMTIgOS41ek01LjEyIDVsLjgyLTFoMTJsLjkzIDFINS4xMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuZG8+PHBhdGggZD1cXFwiTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5mb2xkLWxlc3M+PHBhdGggZD1cXFwiTTcuNDEgMTguNTlMOC44MyAyMCAxMiAxNi44MyAxNS4xNyAyMGwxLjQxLTEuNDFMMTIgMTRsLTQuNTkgNC41OXptOS4xOC0xMy4xOEwxNS4xNyA0IDEyIDcuMTcgOC44MyA0IDcuNDEgNS40MSAxMiAxMGw0LjU5LTQuNTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmZvbGQtbW9yZT48cGF0aCBkPVxcXCJNMTIgNS44M0wxNS4xNyA5bDEuNDEtMS40MUwxMiAzIDcuNDEgNy41OSA4LjgzIDkgMTIgNS44M3ptMCAxMi4zNEw4LjgzIDE1bC0xLjQxIDEuNDFMMTIgMjFsNC41OS00LjU5TDE1LjE3IDE1IDEyIDE4LjE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dXBkYXRlPjxwYXRoIGQ9XFxcIk0yMSAxMC4xMmgtNi43OGwyLjc0LTIuODJjLTIuNzMtMi43LTcuMTUtMi44LTkuODgtLjEtMi43MyAyLjcxLTIuNzMgNy4wOCAwIDkuNzkgMi43MyAyLjcxIDcuMTUgMi43MSA5Ljg4IDBDMTguMzIgMTUuNjUgMTkgMTQuMDggMTkgMTIuMWgyYzAgMS45OC0uODggNC41NS0yLjY0IDYuMjktMy41MSAzLjQ4LTkuMjEgMy40OC0xMi43MiAwLTMuNS0zLjQ3LTMuNTMtOS4xMS0uMDItMTIuNTggMy41MS0zLjQ3IDkuMTQtMy40NyAxMi42NSAwTDIxIDN2Ny4xMnpNMTIuNSA4djQuMjVsMy41IDIuMDgtLjcyIDEuMjFMMTEgMTNWOGgxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12ZXJpZmllZC11c2VyPjxwYXRoIGQ9XFxcIk0xMiAxTDMgNXY2YzAgNS41NSAzLjg0IDEwLjc0IDkgMTIgNS4xNi0xLjI2IDktNi40NSA5LTEyVjVsLTktNHptLTIgMTZsLTQtNCAxLjQxLTEuNDFMMTAgMTQuMTdsNi41OS02LjU5TDE4IDlsLTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctYWdlbmRhPjxwYXRoIGQ9XFxcIk0yMCAxM0gzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xem0wLTEwSDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctYXJyYXk+PHBhdGggZD1cXFwiTTQgMThoM1Y1SDR2MTN6TTE4IDV2MTNoM1Y1aC0zek04IDE4aDlWNUg4djEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1jYXJvdXNlbD48cGF0aCBkPVxcXCJNNyAxOWgxMFY0SDd2MTV6bS01LTJoNFY2SDJ2MTF6TTE4IDZ2MTFoNFY2aC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1jb2x1bW4+PHBhdGggZD1cXFwiTTEwIDE4aDVWNWgtNXYxM3ptLTYgMGg1VjVINHYxM3pNMTYgNXYxM2g1VjVoLTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWRheT48cGF0aCBkPVxcXCJNMiAyMWgxOXYtM0gydjN6TTIwIDhIM2MtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTdjLjU1IDAgMS0uNDUgMS0xVjljMC0uNTUtLjQ1LTEtMS0xek0yIDN2M2gxOVYzSDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWhlYWRsaW5lPjxwYXRoIGQ9XFxcIk00IDE1aDE2di0ySDR2MnptMCA0aDE2di0ySDR2MnptMC04aDE2VjlINHYyem0wLTZ2MmgxNlY1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWxpc3Q+PHBhdGggZD1cXFwiTTQgMTRoNHYtNEg0djR6bTAgNWg0di00SDR2NHpNNCA5aDRWNUg0djR6bTUgNWgxMnYtNEg5djR6bTAgNWgxMnYtNEg5djR6TTkgNXY0aDEyVjVIOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctbW9kdWxlPjxwYXRoIGQ9XFxcIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1xdWlsdD48cGF0aCBkPVxcXCJNMTAgMThoNXYtNmgtNXY2em0tNiAwaDVWNUg0djEzem0xMiAwaDV2LTZoLTV2NnpNMTAgNXY2aDExVjVIMTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LXN0cmVhbT48cGF0aCBkPVxcXCJNNCAxOGgxN3YtNkg0djZ6TTQgNXY2aDE3VjVINHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctd2Vlaz48cGF0aCBkPVxcXCJNNiA1SDNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXptMTQgMGgtM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xem0tNyAwaC0zYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aXNpYmlsaXR5PjxwYXRoIGQ9XFxcIk0xMiA0LjVDNyA0LjUgMi43MyA3LjYxIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNXM5LjI3LTMuMTEgMTEtNy41Yy0xLjczLTQuMzktNi03LjUtMTEtNy41ek0xMiAxN2MtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aXNpYmlsaXR5LW9mZj48cGF0aCBkPVxcXCJNMTIgN2MyLjc2IDAgNSAyLjI0IDUgNSAwIC42NS0uMTMgMS4yNi0uMzYgMS44M2wyLjkyIDIuOTJjMS41MS0xLjI2IDIuNy0yLjg5IDMuNDMtNC43NS0xLjczLTQuMzktNi03LjUtMTEtNy41LTEuNCAwLTIuNzQuMjUtMy45OC43bDIuMTYgMi4xNkMxMC43NCA3LjEzIDExLjM1IDcgMTIgN3pNMiA0LjI3bDIuMjggMi4yOC40Ni40NkMzLjA4IDguMyAxLjc4IDEwLjAyIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNSAxLjU1IDAgMy4wMy0uMyA0LjM4LS44NGwuNDIuNDJMMTkuNzMgMjIgMjEgMjAuNzMgMy4yNyAzIDIgNC4yN3pNNy41MyA5LjhsMS41NSAxLjU1Yy0uMDUuMjEtLjA4LjQzLS4wOC42NSAwIDEuNjYgMS4zNCAzIDMgMyAuMjIgMCAuNDQtLjAzLjY1LS4wOGwxLjU1IDEuNTVjLS42Ny4zMy0xLjQxLjUzLTIuMi41My0yLjc2IDAtNS0yLjI0LTUtNSAwLS43OS4yLTEuNTMuNTMtMi4yem00LjMxLS43OGwzLjE1IDMuMTUuMDItLjE2YzAtMS42Ni0xLjM0LTMtMy0zbC0uMTcuMDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13YXJuaW5nPjxwYXRoIGQ9XFxcIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13YXRjaC1sYXRlcj48cGF0aCBkPVxcXCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6bTQuMiAxNC4yTDExIDEzVjdoMS41djUuMmw0LjUgMi43LS44IDEuM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXdlZWtlbmQ+PHBhdGggZD1cXFwiTTIxIDEwYy0xLjEgMC0yIC45LTIgMnYzSDV2LTNjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnptLTMtNUg2Yy0xLjEgMC0yIC45LTIgMnYyLjE1YzEuMTYuNDEgMiAxLjUxIDIgMi44MlYxNGgxMnYtMi4wM2MwLTEuMy44NC0yLjQgMi0yLjgyVjdjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13b3JrPjxwYXRoIGQ9XFxcIk0yMCA2aC00VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTYgMGgtNFY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXlvdXR1YmUtc2VhcmNoZWQtZm9yPjxwYXRoIGQ9XFxcIk0xNy4wMSAxNGgtLjhsLS4yNy0uMjdjLjk4LTEuMTQgMS41Ny0yLjYxIDEuNTctNC4yMyAwLTMuNTktMi45MS02LjUtNi41LTYuNXMtNi41IDMtNi41IDYuNUgybDMuODQgNCA0LjE2LTRINi41MUM2LjUxIDcgOC41MyA1IDExLjAxIDVzNC41IDIuMDEgNC41IDQuNWMwIDIuNDgtMi4wMiA0LjUtNC41IDQuNS0uNjUgMC0xLjI2LS4xNC0xLjgyLS4zOEw3LjcxIDE1LjFjLjk3LjU3IDIuMDkuOSAzLjMuOSAxLjYxIDAgMy4wOC0uNTkgNC4yMi0xLjU3bC4yNy4yN3YuNzlsNS4wMSA0Ljk5TDIyIDE5bC00Ljk5LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD16b29tLWluPjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0em0yLjUtNGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9em9vbS1vdXQ+PHBhdGggZD1cXFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3pcXFwiPjwvcGF0aD48L2c+IDwvZGVmcz48L3N2Zz4gPC9pcm9uLWljb25zZXQtc3ZnPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48c2NyaXB0PlxuICAvKipcbiAgUG9seW1lci5Jcm9uRm9ybUVsZW1lbnRCZWhhdmlvciBlbmFibGVzIGEgY3VzdG9tIGVsZW1lbnQgdG8gYmUgaW5jbHVkZWRcbiAgaW4gYW4gYGlyb24tZm9ybWAuXG5cbiAgRXZlbnRzIGBpcm9uLWZvcm0tZWxlbWVudC1yZWdpc3RlcmAgYW5kIGBpcm9uLWZvcm0tZWxlbWVudC11bnJlZ2lzdGVyYCBhcmUgbm90IGZpcmVkIG9uIFBvbHltZXIgMi4wLlxuXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICBAcG9seW1lckJlaGF2aW9yXG4gICovXG4gIFBvbHltZXIuSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgPSB7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgYWRkZWQgdG8gYW4gYGlyb24tZm9ybWAuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24tZm9ybS1lbGVtZW50LXJlZ2lzdGVyXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSBhbiBgaXJvbi1mb3JtYC5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgaXJvbi1mb3JtLWVsZW1lbnQtdW5yZWdpc3RlclxuICAgICAgICovXG4gICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLiBJZiB1c2VkIGluIGEgZm9ybSwgYVxuICAgICAgICogY3VzdG9tIGVsZW1lbnQgdGhhdCB1c2VzIHRoaXMgYmVoYXZpb3Igc2hvdWxkIGFsc28gdXNlXG4gICAgICAgKiBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yIGFuZCBkZWZpbmUgYSBjdXN0b20gdmFsaWRhdGlvbiBtZXRob2QuXG4gICAgICAgKiBPdGhlcndpc2UsIGEgYHJlcXVpcmVkYCBlbGVtZW50IHdpbGwgYWx3YXlzIGJlIGNvbnNpZGVyZWQgdmFsaWQuXG4gICAgICAgKiBJdCdzIGFsc28gc3Ryb25nbHkgcmVjb21tZW5kZWQgdG8gcHJvdmlkZSBhIHZpc3VhbCBzdHlsZSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAqIHdoZW4gaXRzIHZhbHVlIGlzIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZm9ybSB0aGF0IHRoZSBlbGVtZW50IGlzIHJlZ2lzdGVyZWQgdG8uXG4gICAgICAgKi9cbiAgICAgIF9wYXJlbnRGb3JtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogUG9seW1lci5FbGVtZW50ID8gbnVsbCA6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gTm90ZTogdGhlIGlyb24tZm9ybSB0aGF0IHRoaXMgZWxlbWVudCBiZWxvbmdzIHRvIHdpbGwgc2V0IHRoaXNcbiAgICAgIC8vIGVsZW1lbnQncyBfcGFyZW50Rm9ybSBwcm9wZXJ0eSB3aGVuIGhhbmRsaW5nIHRoaXMgZXZlbnQuXG4gICAgICB0aGlzLmZpcmUoJ2lyb24tZm9ybS1lbGVtZW50LXJlZ2lzdGVyJyk7XG4gICAgfSxcblxuICAgIGRldGFjaGVkOiBQb2x5bWVyLkVsZW1lbnQgPyBudWxsIDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fcGFyZW50Rm9ybSkge1xuICAgICAgICB0aGlzLl9wYXJlbnRGb3JtLmZpcmUoJ2lyb24tZm9ybS1lbGVtZW50LXVucmVnaXN0ZXInLCB7dGFyZ2V0OiB0aGlzfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5odG1sXCI+XG5cbjwhLS1cbmA8aXJvbi1pbnB1dD5gIGlzIGEgd3JhcHBlciB0byBhIG5hdGl2ZSBgPGlucHV0PmAgZWxlbWVudCwgdGhhdCBhZGRzIHR3by13YXkgYmluZGluZ1xuYW5kIHByZXZlbnRpb24gb2YgaW52YWxpZCBpbnB1dC4gVG8gdXNlIGl0LCB5b3UgbXVzdCBkaXN0cmlidXRlIGEgbmF0aXZlIGA8aW5wdXQ+YFxueW91cnNlbGYuIFlvdSBjYW4gY29udGludWUgdG8gdXNlIHRoZSBuYXRpdmUgYGlucHV0YCBhcyB5b3Ugd291bGQgbm9ybWFsbHk6XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBkaXNhYmxlZD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBUd28td2F5IGJpbmRpbmdcblxuQnkgZGVmYXVsdCB5b3UgY2FuIG9ubHkgZ2V0IG5vdGlmaWVkIG9mIGNoYW5nZXMgdG8gYSBuYXRpdmUgYDxpbnB1dD5gJ3MgYHZhbHVlYFxuZHVlIHRvIHVzZXIgaW5wdXQ6XG5cbiAgICA8aW5wdXQgdmFsdWU9XCJ7e215VmFsdWU6OmlucHV0fX1cIj5cblxuVGhpcyBtZWFucyB0aGF0IGlmIHlvdSBpbXBlcmF0aXZlbHkgc2V0IHRoZSB2YWx1ZSAoaS5lLiBgc29tZU5hdGl2ZUlucHV0LnZhbHVlID0gJ2ZvbydgKSxcbm5vIGV2ZW50cyB3aWxsIGJlIGZpcmVkIGFuZCB0aGlzIGNoYW5nZSBjYW5ub3QgYmUgb2JzZXJ2ZWQuXG5cbmBpcm9uLWlucHV0YCBhZGRzIHRoZSBgYmluZC12YWx1ZWAgcHJvcGVydHkgdGhhdCBtaXJyb3JzIHRoZSBuYXRpdmUgYGlucHV0YCdzICdgdmFsdWVgIHByb3BlcnR5OyB0aGlzXG5wcm9wZXJ0eSBjYW4gYmUgdXNlZCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcuXG5gYmluZC12YWx1ZWAgd2lsbCBub3RpZnkgaWYgaXQgaXMgY2hhbmdlZCBlaXRoZXIgYnkgdXNlciBpbnB1dCBvciBieSBzY3JpcHQuXG5cbiAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3tteVZhbHVlfX1cIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbk5vdGU6IHRoaXMgbWVhbnMgdGhhdCBpZiB5b3Ugd2FudCB0byBpbXBlcmF0aXZlbHkgc2V0IHRoZSBuYXRpdmUgYGlucHV0YCdzLCB5b3UgX211c3RfXG5zZXQgYGJpbmQtdmFsdWVgIGluc3RlYWQsIHNvIHRoYXQgdGhlIHdyYXBwZXIgYGlyb24taW5wdXRgIGNhbiBiZSBub3RpZmllZC5cblxuIyMjIFZhbGlkYXRpb25cblxuYGlyb24taW5wdXRgIHVzZXMgdGhlIG5hdGl2ZSBgaW5wdXRgJ3MgdmFsaWRhdGlvbi4gRm9yIHNpbXBsaWNpdHksIGBpcm9uLWlucHV0YFxuaGFzIGEgYHZhbGlkYXRlKClgIG1ldGhvZCAod2hpY2ggaW50ZXJuYWxseSBqdXN0IGNoZWNrcyB0aGUgZGlzdHJpYnV0ZWQgYGlucHV0YCdzXG52YWxpZGl0eSksIHdoaWNoIHNldHMgYW4gYGludmFsaWRgIGF0dHJpYnV0ZSB0aGF0IGNhbiBhbHNvIGJlIHVzZWQgZm9yIHN0eWxpbmcuXG5cblRvIHZhbGlkYXRlIGF1dG9tYXRpY2FsbHkgYXMgeW91IHR5cGUsIHlvdSBjYW4gdXNlIHRoZSBgYXV0by12YWxpZGF0ZWAgYXR0cmlidXRlLlxuXG5gaXJvbi1pbnB1dGAgYWxzbyBmaXJlcyBhbiBgaXJvbi1pbnB1dC12YWxpZGF0ZWAgZXZlbnQgYWZ0ZXIgYHZhbGlkYXRlKClgIGlzXG5jYWxsZWQuIFlvdSBjYW4gdXNlIGl0IHRvIGltcGxlbWVudCBhIGN1c3RvbSB2YWxpZGF0b3I6XG5cbiAgICB2YXIgQ2F0c09ubHlWYWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oaXJvbklucHV0KSB7XG4gICAgICAgIHZhciB2YWxpZCA9ICFpcm9uSW5wdXQuYmluZFZhbHVlIHx8IGlyb25JbnB1dC5iaW5kVmFsdWUgPT09ICdjYXQnO1xuICAgICAgICBpcm9uSW5wdXQuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICBpcm9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pbnB1dC12YWxpZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgQ2F0c09ubHkudmFsaWRhdGUoaW5wdXQyKTtcbiAgICB9KTtcblxuWW91IGNhbiBhbHNvIHVzZSBhbiBlbGVtZW50IGltcGxlbWVudGluZyBhbiBbYElyb25WYWxpZGF0b3JCZWhhdmlvcmBdKC9lbGVtZW50L1BvbHltZXJFbGVtZW50cy9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yKS5cblRoaXMgZXhhbXBsZSBjYW4gYWxzbyBiZSBmb3VuZCBpbiB0aGUgZGVtbyBmb3IgdGhpcyBlbGVtZW50OlxuXG4gICAgPGlyb24taW5wdXQgdmFsaWRhdG9yPVwiY2F0cy1vbmx5XCI+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4jIyMgUHJldmVudGluZyBpbnZhbGlkIGlucHV0XG5cbkl0IG1heSBiZSBkZXNpcmFibGUgdG8gb25seSBhbGxvdyB1c2VycyB0byBlbnRlciBjZXJ0YWluIGNoYXJhY3RlcnMuIFlvdSBjYW4gdXNlIHRoZVxuYGFsbG93ZWQtcGF0dGVybmAgYXR0cmlidXRlIHRvIGFjY29tcGxpc2ggdGhpcy4gVGhpcyBmZWF0dXJlXG5pcyBzZXBhcmF0ZSBmcm9tIHZhbGlkYXRpb24sIGFuZCBgYWxsb3dlZC1wYXR0ZXJuYCBkb2VzIG5vdCBhZmZlY3QgaG93IHRoZSBpbnB1dCBpcyB2YWxpZGF0ZWQuXG5cbiAgICAvLyBPbmx5IGFsbG93IHR5cGluZyBkaWdpdHMsIGJ1dCBhIHZhbGlkIGlucHV0IGhhcyBleGFjdGx5IDUgZGlnaXRzLlxuICAgIDxpcm9uLWlucHV0IGFsbG93ZWQtcGF0dGVybj1cIlswLTldXCI+XG4gICAgICA8aW5wdXQgcGF0dGVybj1cIlxcZHs1fVwiPlxuICAgIDwvaXJvbi1pbnB1dD5cblxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1pbnB1dFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdCBpZD1cImNvbnRlbnRcIj48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ2lyb24taW5wdXQnLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvclxuICAgICAgXSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuZXZlciBgdmFsaWRhdGUoKWAgaXMgY2FsbGVkLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBpcm9uLWlucHV0LXZhbGlkYXRlXG4gICAgICAgKi9cblxuICAgICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgdGhpcyBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGB2YWx1ZWAgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLCBvciB0b1xuICAgICAgICAgKiBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgaW5wdXQuICoqRG8gbm90KiogdXNlIHRoZSBkaXN0cmlidXRlZFxuICAgICAgICAgKiBpbnB1dCdzIGB2YWx1ZWAgcHJvcGVydHkgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRWYWx1ZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlZCBwcm9wZXJ0eSB0aGF0IGVjaG9lcyBgYmluZFZhbHVlYCAobW9zdGx5IHVzZWQgZm9yIFBvbHltZXIgMS4wXG4gICAgICAgICAqIGJhY2tjb21wYXRpYmlsaXR5LCBpZiB5b3Ugd2VyZSBvbmUtd2F5IGJpbmRpbmcgdG8gdGhlIFBvbHltZXIgMS4wXG4gICAgICAgICAqIGBpbnB1dCBpcz1cImlyb24taW5wdXRcImAgdmFsdWUgYXR0cmlidXRlKS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZVZhbHVlKGJpbmRWYWx1ZSknXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2V4LWxpa2UgbGlzdCBvZiBjaGFyYWN0ZXJzIGFsbG93ZWQgYXMgaW5wdXQ7IGFsbCBjaGFyYWN0ZXJzIG5vdCBpbiB0aGUgbGlzdFxuICAgICAgICAgKiB3aWxsIGJlIHJlamVjdGVkLiBUaGUgcmVjb21tZW5kZWQgZm9ybWF0IHNob3VsZCBiZSBhIGxpc3Qgb2YgYWxsb3dlZCBjaGFyYWN0ZXJzLFxuICAgICAgICAgKiBmb3IgZXhhbXBsZSwgYFthLXpBLVowLTkuKy0hOzpdYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBwYXR0ZXJuIHJlcHJlc2VudHMgdGhlIGFsbG93ZWQgY2hhcmFjdGVycyBmb3IgdGhlIGZpZWxkOyBhcyB0aGUgdXNlciBpbnB1dHMgdGV4dCxcbiAgICAgICAgICogZWFjaCBpbmRpdmlkdWFsIGNoYXJhY3RlciB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCB0aGUgcGF0dGVybiAocmF0aGVyIHRoYW4gY2hlY2tpbmdcbiAgICAgICAgICogdGhlIGVudGlyZSB2YWx1ZSBhcyBhIHdob2xlKS4gSWYgYSBjaGFyYWN0ZXIgaXMgbm90IGEgbWF0Y2gsIGl0IHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFBhc3RlZCBpbnB1dCB3aWxsIGhhdmUgZWFjaCBjaGFyYWN0ZXIgY2hlY2tlZCBpbmRpdmlkdWFsbHk7IGlmIGFueSBjaGFyYWN0ZXJcbiAgICAgICAgICogZG9lc24ndCBtYXRjaCBgYWxsb3dlZFBhdHRlcm5gLCB0aGUgZW50aXJlIHBhc3RlZCBzdHJpbmcgd2lsbCBiZSByZWplY3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogaWYgeW91IHdlcmUgdXNpbmcgYGlyb24taW5wdXRgIGluIDEuMCwgeW91IHdlcmUgYWxzbyByZXF1aXJlZCB0b1xuICAgICAgICAgKiBzZXQgYHByZXZlbnQtaW52YWxpZC1pbnB1dGAuIFRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCBhcyBvZiBQb2x5bWVyIDIuMCxcbiAgICAgICAgICogYW5kIHdpbGwgYmUgc2V0IGF1dG9tYXRpY2FsbHkgZm9yIHlvdSBpZiBhbiBgYWxsb3dlZFBhdHRlcm5gIGlzIHByb3ZpZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgYWxsb3dlZFBhdHRlcm46IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUgYXMgeW91IHR5cGUuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgIC8qKlxuICAgICAgICAqIFRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudC5cbiAgICAgICAgKi9cbiAgICAgICAgX2lucHV0RWxlbWVudDogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAgICdfYmluZFZhbHVlQ2hhbmdlZChiaW5kVmFsdWUsIF9pbnB1dEVsZW1lbnQpJ1xuICAgICAgXSxcblxuICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICdpbnB1dCc6ICdfb25JbnB1dCcsXG4gICAgICAgICdrZXlwcmVzcyc6ICdfb25LZXlwcmVzcydcbiAgICAgIH0sXG5cbiAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWxpZElucHV0ID0gJyc7XG4gICAgICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYWRkZWQgYXQgYSBsYXRlciB0aW1lLCB1cGRhdGUgdGhlIGludGVybmFsIHJlZmVyZW5jZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBQb2x5bWVyLmRvbSh0aGlzKS5vYnNlcnZlTm9kZXMoZnVuY3Rpb24oaW5mbykge1xuICAgICAgICAgIHRoaXMuX2luaXRTbG90dGVkSW5wdXQoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG5cbiAgICAgIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICAgICAgUG9seW1lci5kb20odGhpcykudW5vYnNlcnZlTm9kZXModGhpcy5fb2JzZXJ2ZXIpO1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCA8aW5wdXQ+IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGdldCBpbnB1dEVsZW1lbnQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50O1xuICAgICAgfSxcblxuICAgICAgX2luaXRTbG90dGVkSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKClbMF07XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5iaW5kVmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1pbnB1dC1yZWFkeScpO1xuICAgICAgfSxcblxuICAgICAgZ2V0IF9wYXR0ZXJuUmVnRXhwKCkge1xuICAgICAgICB2YXIgcGF0dGVybjtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZFBhdHRlcm4pIHtcbiAgICAgICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cCh0aGlzLmFsbG93ZWRQYXR0ZXJuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgcGF0dGVybiA9IC9bMC05LixlLV0vO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc31cbiAgICAgICAqL1xuICAgICAgX2JpbmRWYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKGJpbmRWYWx1ZSwgaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIC8vIFRoZSBvYnNlcnZlciBjb3VsZCBoYXZlIHJ1biBiZWZvcmUgYXR0YWNoZWQoKSB3aGVuIHdlIGhhdmUgYWN0dWFsbHkgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gdGhpcyBwcm9wZXJ0eS5cbiAgICAgICAgaWYgKCFpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmluZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGJpbmRWYWx1ZSAhPT0gaW5wdXRFbGVtZW50LnZhbHVlKXtcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IGJpbmRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hbnVhbGx5IG5vdGlmeSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gbm90aWZ5IHVudGlsIGFmdGVyIHNldHRpbmcgdmFsdWVcbiAgICAgICAgdGhpcy5maXJlKCdiaW5kLXZhbHVlLWNoYW5nZWQnLCB7dmFsdWU6IGJpbmRWYWx1ZX0pO1xuICAgICAgfSxcblxuICAgICAgX29uSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBOZWVkIHRvIHZhbGlkYXRlIGVhY2ggb2YgdGhlIGNoYXJhY3RlcnMgcGFzdGVkIGlmIHRoZXkgaGF2ZW4ndFxuICAgICAgICAvLyBiZWVuIHZhbGlkYXRlZCBpbnNpZGUgYF9vbktleXByZXNzYCBhbHJlYWR5LlxuICAgICAgICBpZiAodGhpcy5hbGxvd2VkUGF0dGVybiAmJiAhdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkKSB7XG4gICAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5fY2hlY2tQYXR0ZXJuVmFsaWRpdHkoKTtcbiAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoJ0ludmFsaWQgc3RyaW5nIG9mIGNoYXJhY3RlcnMgbm90IGVudGVyZWQuJyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kVmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBfaXNQcmludGFibGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIFdoYXQgYSBjb250cm9sL3ByaW50YWJsZSBjaGFyYWN0ZXIgaXMgdmFyaWVzIHdpbGRseSBiYXNlZCBvbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgLy8gLSBtb3N0IGNvbnRyb2wgY2hhcmFjdGVycyAoYXJyb3dzLCBiYWNrc3BhY2UpIGRvIG5vdCBzZW5kIGEgYGtleXByZXNzYCBldmVudFxuICAgICAgICAvLyAgIGluIENocm9tZSwgYnV0IHRoZSAqZG8qIG9uIEZpcmVmb3hcbiAgICAgICAgLy8gLSBpbiBGaXJlZm94LCB3aGVuIHRoZXkgZG8gc2VuZCBhIGBrZXlwcmVzc2AgZXZlbnQsIGNvbnRyb2wgY2hhcnMgaGF2ZVxuICAgICAgICAvLyAgIGEgY2hhckNvZGUgPSAwLCBrZXlDb2RlID0geHggKGZvciBleC4gNDAgZm9yIGRvd24gYXJyb3cpXG4gICAgICAgIC8vIC0gcHJpbnRhYmxlIGNoYXJhY3RlcnMgYWx3YXlzIHNlbmQgYSBrZXlwcmVzcyBldmVudC5cbiAgICAgICAgLy8gLSBpbiBGaXJlZm94LCBwcmludGFibGUgY2hhcnMgYWx3YXlzIGhhdmUgYSBrZXlDb2RlID0gMC4gSW4gQ2hyb21lLCB0aGUga2V5Q29kZVxuICAgICAgICAvLyAgIGFsd2F5cyBtYXRjaGVzIHRoZSBjaGFyQ29kZS5cbiAgICAgICAgLy8gTm9uZSBvZiB0aGlzIG1ha2VzIGFueSBzZW5zZS5cblxuICAgICAgICAvLyBGb3IgdGhlc2Uga2V5cywgQVNDSUkgY29kZSA9PSBicm93c2VyIGtleWNvZGUuXG4gICAgICAgIHZhciBhbnlOb25QcmludGFibGUgPVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDgpICAgfHwgIC8vIGJhY2tzcGFjZVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDkpICAgfHwgIC8vIHRhYlxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDEzKSAgfHwgIC8vIGVudGVyXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjcpOyAgICAgLy8gZXNjYXBlXG5cbiAgICAgICAgLy8gRm9yIHRoZXNlIGtleXMsIG1ha2Ugc3VyZSBpdCdzIGEgYnJvd3NlciBrZXljb2RlIGFuZCBub3QgYW4gQVNDSUkgY29kZS5cbiAgICAgICAgdmFyIG1vek5vblByaW50YWJsZSA9XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTkpICB8fCAgLy8gcGF1c2VcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAyMCkgIHx8ICAvLyBjYXBzIGxvY2tcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NSkgIHx8ICAvLyBpbnNlcnRcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NikgIHx8ICAvLyBkZWxldGVcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDQpIHx8ICAvLyBudW0gbG9ja1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDE0NSkgfHwgIC8vIHNjcm9sbCBsb2NrXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAzMiAmJiBldmVudC5rZXlDb2RlIDwgNDEpICAgfHwgLy8gcGFnZSB1cC9kb3duLCBlbmQsIGhvbWUsIGFycm93c1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID4gMTExICYmIGV2ZW50LmtleUNvZGUgPCAxMjQpOyAvLyBmbiBrZXlzXG5cbiAgICAgICAgcmV0dXJuICFhbnlOb25QcmludGFibGUgJiYgIShldmVudC5jaGFyQ29kZSA9PSAwICYmIG1vek5vblByaW50YWJsZSk7XG4gICAgICB9LFxuXG4gICAgICBfb25LZXlwcmVzczogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRQYXR0ZXJuICYmIHRoaXMudHlwZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlZ2V4cCA9IHRoaXMuX3BhdHRlcm5SZWdFeHA7XG4gICAgICAgIGlmICghcmVnZXhwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwga2V5cyBhbmQgYmFja3NwYWNlXG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhlIHBhdHRlcm4gZWl0aGVyIGhlcmUgb3IgaW4gYF9vbklucHV0YCwgYnV0IG5vdCBpbiBib3RoLlxuICAgICAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIHZhciB0aGlzQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQuY2hhckNvZGUpO1xuICAgICAgICBpZiAodGhpcy5faXNQcmludGFibGUoZXZlbnQpICYmICFyZWdleHAudGVzdCh0aGlzQ2hhcikpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcignSW52YWxpZCBjaGFyYWN0ZXIgJyArIHRoaXNDaGFyICsgJyBub3QgZW50ZXJlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2NoZWNrUGF0dGVyblZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlZ2V4cCA9IHRoaXMuX3BhdHRlcm5SZWdFeHA7XG4gICAgICAgIGlmICghcmVnZXhwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghcmVnZXhwLnRlc3QodGhpcy5pbnB1dEVsZW1lbnQudmFsdWVbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gVGhlIHZhbGlkYXRvciBwcm92aWRlZCBpbiBgdmFsaWRhdG9yYCB3aWxsIGJlIHVzZWQgZmlyc3QsXG4gICAgICAgKiB0aGVuIGFueSBjb25zdHJhaW50cy5cbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAgICovXG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgbmVzdGVkIGlucHV0J3MgbmF0aXZlIHZhbGlkaXR5LlxuICAgICAgICB2YXIgdmFsaWQgPSAgdGhpcy5pbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIC8vIE9ubHkgZG8gZXh0cmEgY2hlY2tpbmcgaWYgdGhlIGJyb3dzZXIgdGhvdWdodCB0aGlzIHdhcyB2YWxpZC5cbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgLy8gRW1wdHksIHJlcXVpcmVkIGlucHV0IGlzIGludmFsaWRcbiAgICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLmJpbmRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc1ZhbGlkYXRvcigpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IudmFsaWRhdGUuY2FsbCh0aGlzLCB0aGlzLmJpbmRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLmZpcmUoJ2lyb24taW5wdXQtdmFsaWRhdGUnKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfSxcblxuICAgICAgX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7IHRleHQ6IG1lc3NhZ2UgfSk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZVZhbHVlOiBmdW5jdGlvbihiaW5kVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGJpbmRWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24taW5wdXQvaXJvbi1pbnB1dC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cblxuPCEtLVxuYGlyb24tYTExeS1hbm5vdW5jZXJgIGlzIGEgc2luZ2xldG9uIGVsZW1lbnQgdGhhdCBpcyBpbnRlbmRlZCB0byBhZGQgYTExeVxudG8gZmVhdHVyZXMgdGhhdCByZXF1aXJlIG9uLWRlbWFuZCBhbm5vdW5jZW1lbnQgZnJvbSBzY3JlZW4gcmVhZGVycy4gSW5cbm9yZGVyIHRvIG1ha2UgdXNlIG9mIHRoZSBhbm5vdW5jZXIsIGl0IGlzIGJlc3QgdG8gcmVxdWVzdCBpdHMgYXZhaWxhYmlsaXR5XG5pbiB0aGUgYW5ub3VuY2luZyBlbGVtZW50LlxuXG5FeGFtcGxlOlxuXG4gICAgUG9seW1lcih7XG5cbiAgICAgIGlzOiAneC1jaGF0dHknLFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBjcmVhdGUgdGhlIHNpbmdsZXRvbiBlbGVtZW50IGlmIGl0IGhhcyBub3RcbiAgICAgICAgLy8gYmVlbiBjcmVhdGVkIHlldDpcbiAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbkFmdGVyIHRoZSBgaXJvbi1hMTF5LWFubm91bmNlcmAgaGFzIGJlZW4gbWFkZSBhdmFpbGFibGUsIGVsZW1lbnRzIGNhblxubWFrZSBhbm5vdW5jZXMgYnkgZmlyaW5nIGJ1YmJsaW5nIGBpcm9uLWFubm91bmNlYCBldmVudHMuXG5cbkV4YW1wbGU6XG5cbiAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7XG4gICAgICB0ZXh0OiAnVGhpcyBpcyBhbiBhbm5vdW5jZW1lbnQhJ1xuICAgIH0sIHsgYnViYmxlczogdHJ1ZSB9KTtcblxuTm90ZTogYW5ub3VuY2VtZW50cyBhcmUgb25seSBhdWRpYmxlIGlmIHlvdSBoYXZlIGEgc2NyZWVuIHJlYWRlciBlbmFibGVkLlxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWExMXktYW5ub3VuY2VyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjbGlwOiByZWN0KDBweCwwcHgsMHB4LDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGFyaWEtbGl2ZSQ9XCJbW21vZGVdXVwiPltbX3RleHRdXTwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIgPSBQb2x5bWVyKHtcbiAgICAgICAgaXM6ICdpcm9uLWExMXktYW5ub3VuY2VyJyxcblxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbW9kZSBpcyB1c2VkIHRvIHNldCB0aGUgYGFyaWEtbGl2ZWAgYXR0cmlidXRlXG4gICAgICAgICAgICogZm9yIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQuIFZhbGlkIHZhbHVlcyBhcmU6IGBvZmZgLFxuICAgICAgICAgICAqIGBwb2xpdGVgIGFuZCBgYXNzZXJ0aXZlYC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3BvbGl0ZSdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgX3RleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIVBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1hbm5vdW5jZScsIHRoaXMuX29uSXJvbkFubm91bmNlLmJpbmQodGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXVzZSBhIHRleHQgc3RyaW5nIHRvIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdGhhdCBzaG91bGQgYmUgYW5ub3VuY2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgYW5ub3VuY2U6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgICAgICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uSXJvbkFubm91bmNlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5ub3VuY2UoZXZlbnQuZGV0YWlsLnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBudWxsO1xuXG4gICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24tYTExeS1hbm5vdW5jZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSk7XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLW1ldGEvaXJvbi1tZXRhLmh0bWxcIj5cblxuPHNjcmlwdD5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbiBJcm9uTWV0YSBpbnN0YW5jZS5cbiAgICovXG4gIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbnVsbDtcblxuICAvKipcbiAgICogYFVzZSBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gZWxlbWVudCB0aGF0IHZhbGlkYXRlcyB1c2VyIGlucHV0LlxuICAgKiBVc2UgdGhlIHJlbGF0ZWQgYFBvbHltZXIuSXJvblZhbGlkYXRvckJlaGF2aW9yYCB0byBhZGQgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgdG8gYW4gaXJvbi1pbnB1dC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYW4gYDxpcm9uLWZvcm0+YCBlbGVtZW50IHZhbGlkYXRlcyBpdHMgZmllbGRzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgc3VibWl0IGJ1dHRvbi5cbiAgICogVG8gdmFsaWRhdGUgYSBmb3JtIGltcGVyYXRpdmVseSwgY2FsbCB0aGUgZm9ybSdzIGB2YWxpZGF0ZSgpYCBtZXRob2QsIHdoaWNoIGluIHR1cm4gd2lsbFxuICAgKiBjYWxsIGB2YWxpZGF0ZSgpYCBvbiBhbGwgaXRzIGNoaWxkcmVuLiBCeSB1c2luZyBgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAsIHlvdXJcbiAgICogY3VzdG9tIGVsZW1lbnQgd2lsbCBnZXQgYSBwdWJsaWMgYHZhbGlkYXRlKClgLCB3aGljaFxuICAgKiB3aWxsIHJldHVybiB0aGUgdmFsaWRpdHkgb2YgdGhlIGVsZW1lbnQsIGFuZCBhIGNvcnJlc3BvbmRpbmcgYGludmFsaWRgIGF0dHJpYnV0ZSxcbiAgICogd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcuXG4gICAqXG4gICAqIFRvIGltcGxlbWVudCB0aGUgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgb2YgeW91ciBlbGVtZW50LCB5b3UgbXVzdCBvdmVycmlkZVxuICAgKiB0aGUgcHJvdGVjdGVkIGBfZ2V0VmFsaWRpdHkoKWAgbWV0aG9kIG9mIHRoaXMgYmVoYXZpb3VyLCByYXRoZXIgdGhhbiBgdmFsaWRhdGUoKWAuXG4gICAqIFNlZSBbdGhpc10oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9pcm9uLWZvcm0vYmxvYi9tYXN0ZXIvZGVtby9zaW1wbGUtZWxlbWVudC5odG1sKVxuICAgKiBmb3IgYW4gZXhhbXBsZS5cbiAgICpcbiAgICogIyMjIEFjY2Vzc2liaWxpdHlcbiAgICpcbiAgICogQ2hhbmdpbmcgdGhlIGBpbnZhbGlkYCBwcm9wZXJ0eSwgZWl0aGVyIG1hbnVhbGx5IG9yIGJ5IGNhbGxpbmcgYHZhbGlkYXRlKClgIHdpbGwgdXBkYXRlIHRoZVxuICAgKiBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICAgKiBAcG9seW1lckJlaGF2aW9yXG4gICAqL1xuICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBOYW1lIG9mIHRoZSB2YWxpZGF0b3IgdG8gdXNlLlxuICAgICAgICovXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGxhc3QgY2FsbCB0byBgdmFsaWRhdGVgIGlzIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICByZWdpc3RlcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbmV3IFBvbHltZXIuSXJvbk1ldGEoe3R5cGU6ICd2YWxpZGF0b3InfSk7XG4gICAgfSxcblxuICAgIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAndHJ1ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBSZWNvbXB1dGUgdGhpcyBldmVyeSB0aW1lIGl0J3MgbmVlZGVkLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgdGhlXG4gICAgICogdW5kZXJseWluZyBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgaGFzIGNoYW5nZWQuICovXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgJiZcbiAgICAgICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YS5ieUtleSh0aGlzLnZhbGlkYXRvcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbGlkYXRvciBgdmFsaWRhdG9yYCBleGlzdHMuXG4gICAgICovXG4gICAgaGFzVmFsaWRhdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgIT0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBgdmFsdWVgIGlzIHZhbGlkLCBhbmQgdXBkYXRlcyBgaW52YWxpZGAuIElmIHlvdSB3YW50XG4gICAgICogeW91ciBlbGVtZW50IHRvIGhhdmUgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZDtcbiAgICAgKiBvdmVycmlkZSBgX2dldFZhbGlkaXR5KHZhbHVlKWAgaW5zdGVhZC5cblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBEZXByZWNhdGVkOiBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLiBCeSBkZWZhdWx0LFxuICAgICAqIGl0IGlzIHBhc3NlZCB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuXG4gICAgICogSWYgdGhpcyBhcmd1bWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIHRoZSBlbGVtZW50J3MgYHZhbHVlYCBwcm9wZXJ0eVxuICAgICAqIGlzIHVzZWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIGFuIGVsZW1lbnQgdGhhdCBhbHNvIGhhcyBhIHZhbHVlIHByb3BlcnR5LCBhbmQgdGhlcmUgd2FzXG4gICAgICAvLyBubyBleHBsaWNpdCB2YWx1ZSBhcmd1bWVudCBwYXNzZWQsIHVzZSB0aGUgZWxlbWVudCdzIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh0aGlzLnZhbHVlKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXRoaXMuX2dldFZhbGlkaXR5KHZhbHVlKTtcbiAgICAgIHJldHVybiAhdGhpcy5pbnZhbGlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gIEJ5IGRlZmF1bHQsIGl0IGlzIHBhc3NlZFxuICAgICAqIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzIHNldC4gWW91XG4gICAgICogc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGltcGxlbWVudCBjdXN0b20gdmFsaWRpdHlcbiAgICAgKiBsb2dpYyBmb3IgeW91ciBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgICAqL1xuXG4gICAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5odG1sXCI+XG5cbjxzY3JpcHQ+XG5cbiAgLy8gR2VuZXJhdGUgdW5pcXVlLCBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSURzIGZvciBsYWJlbHMgKG5lZWRlZCBieVxuICAvLyBhcmlhLWxhYmVsbGVkYnkpIGFuZCBhZGQtb25zLlxuICBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIgPSB7fTtcbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRMYWJlbElEID0gMTtcbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRBZGRvbklEID0gMTtcblxuICAvKipcbiAgICogVXNlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGlucHV0cyB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIFRoaXNcbiAgICogYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgYnkgYDxwYXBlci1pbnB1dD5gLiBJdCBleHBvc2VzIGEgbnVtYmVyIG9mIHByb3BlcnRpZXMgZnJvbVxuICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGFuZCBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAgYW5kIHRoZXkgc2hvdWxkIGJlIGJvdW5kIGluIHlvdXJcbiAgICogdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoZSBpbnB1dCBlbGVtZW50IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgYGlucHV0RWxlbWVudGAgcHJvcGVydHkgaWYgeW91IG5lZWQgdG8gYWNjZXNzXG4gICAqIHByb3BlcnRpZXMgb3IgbWV0aG9kcyB0aGF0IGFyZSBub3QgZXhwb3NlZC5cbiAgICogQHBvbHltZXJCZWhhdmlvciBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JJbXBsID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYWJlbCBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiBgPGxhYmVsPmAncyBjb250ZW50IGFuZCBgaGlkZGVuYCBwcm9wZXJ0eSwgZS5nLlxuICAgICAgICogYDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiPltbbGFiZWxdXTwvbGFiZWw+YCBpbiB5b3VyIGB0ZW1wbGF0ZWBcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpcm9uLWlucHV0PmAncyBgYmluZFZhbHVlYFxuICAgICAgICogcHJvcGVydHksIG9yIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiB5b3VyIGlucHV0IHRoYXQgaXMgYG5vdGlmeTp0cnVlYC5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIGJvdGggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBhbmQgdGhlIGlucHV0J3MgYGRpc2FibGVkYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvIGJvdGggdGhlXG4gICAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBpbnZhbGlkYCBwcm9wZXJ0eS5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGUgYGludmFsaWRgIGF0dHJpYnV0ZSBpcyBtYW5hZ2VkIGF1dG9tYXRpY2FsbHksXG4gICAgICAgKiB3aGljaCBjYW4gY2xvYmJlciBhdHRlbXB0cyB0byBtYW5hZ2UgaXQgbWFudWFsbHkuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoaXMgdG8gc3BlY2lmeSB0aGUgcGF0dGVybiBhbGxvd2VkIGJ5IGBwcmV2ZW50SW52YWxpZElucHV0YC4gSWZcbiAgICAgICAqIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFsbG93ZWRQYXR0ZXJuYFxuICAgICAgICogcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGFsbG93ZWRQYXR0ZXJuOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgaW5wdXQuIFRoZSBzdXBwb3J0ZWQgdHlwZXMgYXJlIHRoZVxuICAgICAgICogW25hdGl2ZSBpbnB1dCdzIHR5cGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV88aW5wdXQ+X3R5cGVzKS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCxcbiAgICAgICAqIGJpbmQgdGhpcyB0byB0aGUgKFBvbHltZXIgMSkgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3Mgb3IgKFBvbHltZXIgMilcbiAgICAgICAqIGA8aXJvbi1pbnB1dD5gJ3MgYHR5cGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGF0YWxpc3Qgb2YgdGhlIGlucHV0IChpZiBhbnkpLiBUaGlzIHNob3VsZCBtYXRjaCB0aGUgaWQgb2YgYW4gZXhpc3RpbmcgYDxkYXRhbGlzdD5gLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbGlzdGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcGF0dGVybiB0byB2YWxpZGF0ZSB0aGUgYGlucHV0YCB3aXRoLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcGF0dGVybmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVxdWlyZWRgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkLiBJZiB5b3UncmUgdXNpbmdcbiAgICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LFxuICAgICAgICogYmluZCB0aGlzIHRvIHRoZSBgPHBhcGVyLWlucHV0LWVycm9yPmAncyBjb250ZW50LCBpZiB1c2luZy5cbiAgICAgICAqL1xuICAgICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBzaG93IGEgY2hhcmFjdGVyIGNvdW50ZXIuXG4gICAgICAgKi9cbiAgICAgIGNoYXJDb3VudGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBub0xhYmVsRmxvYXRgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBub0xhYmVsRmxvYXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYWx3YXlzRmxvYXRMYWJlbGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGF1dG9WYWxpZGF0ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHZhbGlkYXRvcmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY29tcGxldGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ29mZidcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2ZvY3VzYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2ZvY3VzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX2F1dG9mb2N1c0NoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGlucHV0bW9kZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGlucHV0bW9kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmxlbmd0aGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1pbmxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGxlbmd0aGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltdW0gKG51bWVyaWMgb3IgZGF0ZS10aW1lKSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1heGltdW0gKG51bWVyaWMgb3IgZGF0ZS10aW1lKSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIENhbiBiZSBhIFN0cmluZyAoZS5nLiBgXCIyMDAwLTAxLTAxXCJgKSBvciBhIE51bWJlciAoZS5nLiBgMmApLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWF4YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBMaW1pdHMgdGhlIG51bWVyaWMgb3IgZGF0ZS10aW1lIGluY3JlbWVudHMuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBzdGVwYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgc3RlcDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbmFtZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcGxhY2Vob2xkZXIgc3RyaW5nIGluIGFkZGl0aW9uIHRvIHRoZSBsYWJlbC4gSWYgdGhpcyBpcyBzZXQsIHRoZSBsYWJlbCB3aWxsIGFsd2F5cyBmbG9hdC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvLyBuZWVkIHRvIHNldCBhIGRlZmF1bHQgc28gX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsIGlzIHJ1blxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVhZG9ubHlgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc2l6ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHNpemU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvLyBOb25zdGFuZGFyZCBhdHRyaWJ1dGVzIGZvciBiaW5kaW5nIGlmIG5lZWRlZFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jYXBpdGFsaXplYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NhcGl0YWxpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ25vbmUnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jb3JyZWN0YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NvcnJlY3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ29mZidcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b3NhdmVgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAgICovXG4gICAgICBhdXRvc2F2ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVzdWx0c2AgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1zZWFyY2guXG4gICAgICAgKi9cbiAgICAgIHJlc3VsdHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFjY2VwdGAgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1maWxlLlxuICAgICAgICovXG4gICAgICBhY2NlcHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGVgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbXVsdGlwbGVgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgICAqL1xuICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgX2FyaWFEZXNjcmliZWRCeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgX2FyaWFMYWJlbGxlZEJ5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgfSxcblxuICAgIGtleUJpbmRpbmdzOiB7XG4gICAgICAnc2hpZnQrdGFiOmtleWRvd24nOiAnX29uU2hpZnRUYWJEb3duJ1xuICAgIH0sXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgdGFiaW5kZXg6IDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXQgaW5wdXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5pbnB1dDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFRoZXNlIHR5cGVzIGhhdmUgc29tZSBkZWZhdWx0IHBsYWNlaG9sZGVyIHRleHQ7IG92ZXJsYXBwaW5nXG4gICAgICAvLyB0aGUgbGFiZWwgb24gdG9wIG9mIGl0IGxvb2tzIHRlcnJpYmxlLiBBdXRvLWZsb2F0IHRoZSBsYWJlbCBpbiB0aGlzIGNhc2UuXG4gICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dCA9IFtcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIixcbiAgICAgICAgICBcInRpbWVcIiwgXCJ3ZWVrXCIsIFwiZmlsZVwiXTtcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdXBkYXRlQXJpYUxhYmVsbGVkQnkoKTtcblxuICAgICAgLy8gSW4gdGhlIDIuMCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50LCB0aGlzIGlzIGhhbmRsZWQgaW4gYG9uSXJvbklucHV0UmVhZHlgLFxuICAgICAgLy8gaS5lLiBhZnRlciB0aGUgbmF0aXZlIGlucHV0IGhhcyBmaW5pc2hlZCBkaXN0cmlidXRpbmcuIEluIHRoZSAxLjAgdmVyc2lvbixcbiAgICAgIC8vIHRoZSBpbnB1dCBpcyBpbiB0aGUgc2hhZG93IHRyZWUsIHNvIGl0J3MgYWxyZWFkeSBhdmFpbGFibGUuXG4gICAgICBpZiAoIVBvbHltZXIuRWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy5pbnB1dEVsZW1lbnQudHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9hcHBlbmRTdHJpbmdXaXRoU3BhY2U6IGZ1bmN0aW9uKHN0ciwgbW9yZSkge1xuICAgICAgaWYgKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIgKyAnICcgKyBtb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gbW9yZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcblxuICAgIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gUG9seW1lci5kb20oZXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmlkKSB7XG4gICAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIHRhcmdldC5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaWQgPSAncGFwZXItaW5wdXQtYWRkLW9uLScgKyBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQrKztcbiAgICAgICAgdGFyZ2V0LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIGlkKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBpbnB1dCBlbGVtZW50IGFuZCBzZXRzIGFuIGVycm9yIHN0eWxlIGlmIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZvcndhcmQgZm9jdXMgdG8gaW5wdXRFbGVtZW50LiBPdmVycmlkZW4gZnJvbSBJcm9uQ29udHJvbFN0YXRlLlxuICAgICAqL1xuICAgIF9mb2N1c0JsdXJIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlLl9mb2N1c0JsdXJIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBmb2N1cyB0byB0aGUgbmVzdGVkIGlucHV0LlxuICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhdGhpcy5fc2hpZnRUYWJQcmVzc2VkICYmIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBzaGlmdCt0YWIga2V5cHJlc3MgaXMgZGV0ZWN0ZWQgYnkgdGhlIG1lbnUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICAgKi9cbiAgICBfb25TaGlmdFRhYkRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgb2xkVGFiSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIG9sZFRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5fc2hpZnRUYWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9LCAxKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgYGF1dG9WYWxpZGF0ZWAgaXMgdHJ1ZSwgdGhlbiB2YWxpZGF0ZXMgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgX2hhbmRsZUF1dG9WYWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUpXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgdGhlIGN1cnNvciB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gYWZ0ZXIgdXBkYXRpbmcgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgc2F2ZWQuXG4gICAgICovXG4gICAgdXBkYXRlVmFsdWVBbmRQcmVzZXJ2ZUNhcmV0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgLy8gTm90IGFsbCBlbGVtZW50cyBtaWdodCBoYXZlIHNlbGVjdGlvbiwgYW5kIGV2ZW4gaWYgdGhleSBoYXZlIHRoZVxuICAgICAgLy8gcmlnaHQgcHJvcGVydGllcywgYWNjZXNzaW5nIHRoZW0gbWlnaHQgdGhyb3cgYW4gZXhjZXB0aW9uIChsaWtlIGZvclxuICAgICAgLy8gPGlucHV0IHR5cGU9bnVtYmVyPilcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgLy8gVGhlIGN1cnNvciBhdXRvbWF0aWNhbGx5IGp1bXBzIHRvIHRoZSBlbmQgYWZ0ZXIgcmUtc2V0dGluZyB0aGUgdmFsdWUsXG4gICAgICAgIC8vIHNvIHJlc3RvcmUgaXQgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBzZXQgdGhlIHZhbHVlIGFuZCBnaXZlIHVwIG9uIHRoZSBjYXJldC5cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWw6IGZ1bmN0aW9uKGFsd2F5c0Zsb2F0TGFiZWwsIHBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIgfHwgYWx3YXlzRmxvYXRMYWJlbDtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUFyaWFMYWJlbGxlZEJ5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYWJlbCA9IFBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgdGhpcy5fYXJpYUxhYmVsbGVkQnkgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGxhYmVsbGVkQnk7XG4gICAgICBpZiAobGFiZWwuaWQpIHtcbiAgICAgICAgbGFiZWxsZWRCeSA9IGxhYmVsLmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxsZWRCeSA9ICdwYXBlci1pbnB1dC1sYWJlbC0nICsgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRMYWJlbElEKys7XG4gICAgICAgIGxhYmVsLmlkID0gbGFiZWxsZWRCeTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FyaWFMYWJlbGxlZEJ5ID0gbGFiZWxsZWRCeTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlOmZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAvLyBJbiB0aGUgU2hhZG93IERPTSwgdGhlIGBjaGFuZ2VgIGV2ZW50IGlzIG5vdCBsZWFrZWQgaW50byB0aGVcbiAgICAgIC8vIGFuY2VzdG9yIHRyZWUsIHNvIHdlIG11c3QgZG8gdGhpcyBtYW51YWxseS5cbiAgICAgIC8vIFNlZSBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL3NoYWRvdy8jZXZlbnRzLXRoYXQtYXJlLW5vdC1sZWFrZWQtaW50by1hbmNlc3Rvci10cmVlcy5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LnR5cGUsIHtzb3VyY2VFdmVudDogZXZlbnR9LCB7XG4gICAgICAgICAgbm9kZTogdGhpcyxcbiAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGV2ZW50LmNhbmNlbGFibGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9hdXRvZm9jdXNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEZpcmVmb3ggZG9lc24ndCByZXNwZWN0IHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIGlmIGl0J3MgYXBwbGllZCBhZnRlclxuICAgICAgLy8gdGhlIHBhZ2UgaXMgbG9hZGVkIChDaHJvbWUvV2ViS2l0IGRvIHJlc3BlY3QgaXQpLCBwcmV2ZW50aW5nIGFuXG4gICAgICAvLyBhdXRvZm9jdXMgYXR0cmlidXRlIHNwZWNpZmllZCBpbiBtYXJrdXAgZnJvbSB0YWtpbmcgZWZmZWN0IHdoZW4gdGhlXG4gICAgICAvLyBlbGVtZW50IGlzIHVwZ3JhZGVkLiBBcyBhIHdvcmthcm91bmQsIGlmIHRoZSBhdXRvZm9jdXMgcHJvcGVydHkgaXMgc2V0LFxuICAgICAgLy8gYW5kIHRoZSBmb2N1cyBoYXNuJ3QgYWxyZWFkeSBiZWVuIG1vdmVkIGVsc2V3aGVyZSwgd2UgdGFrZSBmb2N1cy5cbiAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG5cbiAgICAgICAgLy8gSW4gSUUgMTEsIHRoZSBkZWZhdWx0IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIHRoZSBwYWdlJ3NcbiAgICAgICAgLy8gb3V0ZXJtb3N0IGh0bWwgZWxlbWVudCwgYnV0IHRoZXJlIGFyZSBhbHNvIGNhc2VzICh1bmRlciB0aGVcbiAgICAgICAgLy8gcG9seWZpbGw/KSBpbiB3aGljaCB0aGUgYWN0aXZlRWxlbWVudCBpcyBub3QgYSByZWFsIEhUTUxFbGVtZW50LCBidXRcbiAgICAgICAgLy8ganVzdCBhIHBsYWluIG9iamVjdC4gV2UgaWRlbnRpZnkgdGhlIGxhdHRlciBjYXNlIGFzIGhhdmluZyBubyB2YWxpZFxuICAgICAgICAvLyBhY3RpdmVFbGVtZW50LlxuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBpc0FjdGl2ZUVsZW1lbnRWYWxpZCA9IGFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxuICAgICAgICAvLyBIYXMgc29tZSBvdGhlciBlbGVtZW50IGhhcyBhbHJlYWR5IHRha2VuIHRoZSBmb2N1cz9cbiAgICAgICAgdmFyIGlzU29tZUVsZW1lbnRBY3RpdmUgPSBpc0FjdGl2ZUVsZW1lbnRWYWxpZCAmJlxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvKiBJRSAxMSAqL1xuICAgICAgICBpZiAoIWlzU29tZUVsZW1lbnRBY3RpdmUpIHtcbiAgICAgICAgICAvLyBObyBzcGVjaWZpYyBlbGVtZW50IGhhcyB0YWtlbiB0aGUgZm9jdXMgeWV0LCBzbyB3ZSBjYW4gdGFrZSBpdC5cbiAgICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3IgPSBbXG4gICAgUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlLFxuICAgIFBvbHltZXIuSXJvbkExMXlLZXlzQmVoYXZpb3IsXG4gICAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JJbXBsXG4gIF07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+YCBpcyBhIGNoYXJhY3RlciBjb3VudGVyIGZvciB1c2Ugd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBJdFxuc2hvd3MgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGVudGVyZWQgaW4gdGhlIGlucHV0IGFuZCB0aGUgbWF4IGxlbmd0aCBpZiBpdCBpcyBzcGVjaWZpZWQuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGlucHV0IG1heGxlbmd0aD1cIjIwXCI+XG4gICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIG1peGluIGlzIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY2hhci1jb3VudGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgfCBge31gXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3Bhbj5bW19jaGFyQ291bnRlclN0cl1dPC9zcGFuPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWNoYXItY291bnRlcicsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgX2NoYXJDb3VudGVyU3RyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG92ZXJyaWRlcyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGluIFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgaWYgKCFzdGF0ZS5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS52YWx1ZSA9IHN0YXRlLnZhbHVlIHx8ICcnO1xuXG4gICAgICB2YXIgY291bnRlciA9IHN0YXRlLnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChzdGF0ZS5pbnB1dEVsZW1lbnQuaGFzQXR0cmlidXRlKCdtYXhsZW5ndGgnKSkge1xuICAgICAgICBjb3VudGVyICs9ICcvJyArIHN0YXRlLmlucHV0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFyQ291bnRlclN0ciA9IGNvdW50ZXI7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuXG48IS0tXG5gPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGlzIGEgY29udGFpbmVyIGZvciBhIGA8bGFiZWw+YCwgYW4gYDxpcm9uLWlucHV0PmAgb3JcbmA8dGV4dGFyZWE+YCBhbmQgb3B0aW9uYWwgYWRkLW9uIGVsZW1lbnRzIHN1Y2ggYXMgYW4gZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXJcbmNvdW50ZXIsIHVzZWQgdG8gaW1wbGVtZW50IE1hdGVyaWFsIERlc2lnbiB0ZXh0IGZpZWxkcy5cblxuRm9yIGV4YW1wbGU6XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gIGluc3RlYWQgb2YgdGhlIGFib3ZlLlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5Zb3UgY2FuIHN0eWxlIHRoZSBuZXN0ZWQgPGlucHV0PiBob3dldmVyIHlvdSB3YW50OyBpZiB5b3Ugd2FudCBpdCB0byBsb29rIGxpa2UgYVxuTWF0ZXJpYWwgRGVzaWduIGlucHV0LCB5b3UgY2FuIHN0eWxlIGl0IHdpdGggdGhlIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZSBtaXhpbi5cblxuRG8gbm90IHdyYXAgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBhcm91bmQgZWxlbWVudHMgdGhhdCBhbHJlYWR5IGluY2x1ZGUgaXQsIHN1Y2ggYXMgYDxwYXBlci1pbnB1dD5gLlxuRG9pbmcgc28gbWF5IGNhdXNlIGV2ZW50cyB0byBib3VuY2UgaW5maW5pdGVseSBiZXR3ZWVuIHRoZSBjb250YWluZXIgYW5kIGl0cyBjb250YWluZWQgZWxlbWVudC5cblxuIyMjIExpc3RlbmluZyBmb3IgaW5wdXQgY2hhbmdlc1xuXG5CeSBkZWZhdWx0LCBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzIG9uIHRoZSBgYmluZC12YWx1ZWAgYXR0cmlidXRlIG9uIGl0cyBjaGlsZHJlbiBub2RlcyBhbmQgcGVyZm9ybVxudGFza3Mgc3VjaCBhcyBhdXRvLXZhbGlkYXRpbmcgYW5kIGxhYmVsIHN0eWxpbmcgd2hlbiB0aGUgYGJpbmQtdmFsdWVgIGNoYW5nZXMuIFlvdSBjYW4gY29uZmlndXJlXG50aGUgYXR0cmlidXRlIGl0IGxpc3RlbnMgdG8gd2l0aCB0aGUgYGF0dHItZm9yLXZhbHVlYCBhdHRyaWJ1dGUuXG5cbiMjIyBVc2luZyBhIGN1c3RvbSBpbnB1dCBlbGVtZW50XG5cbllvdSBjYW4gdXNlIGEgY3VzdG9tIGlucHV0IGVsZW1lbnQgaW4gYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLCBmb3IgZXhhbXBsZSB0byBpbXBsZW1lbnQgYVxuY29tcG91bmQgaW5wdXQgZmllbGQgbGlrZSBhIHNvY2lhbCBzZWN1cml0eSBudW1iZXIgaW5wdXQuIFRoZSBjdXN0b20gaW5wdXQgZWxlbWVudCBzaG91bGQgaGF2ZSB0aGVcbmBwYXBlci1pbnB1dC1pbnB1dGAgY2xhc3MsIGhhdmUgYSBgbm90aWZ5OnRydWVgIHZhbHVlIHByb3BlcnR5IGFuZCBvcHRpb25hbGx5IGltcGxlbWVudHNcbmBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCBpZiBpdCBpcyB2YWxpZGF0YWJsZS5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgYXR0ci1mb3ItdmFsdWU9XCJzc24tdmFsdWVcIj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Tb2NpYWwgc2VjdXJpdHkgbnVtYmVyPC9sYWJlbD5cbiAgICAgIDxzc24taW5wdXQgc2xvdD1cImlucHV0XCIgY2xhc3M9XCJwYXBlci1pbnB1dC1pbnB1dFwiPjwvc3NuLWlucHV0PlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5cbklmIHlvdSdyZSB1c2luZyBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaW1wZXJhdGl2ZWx5LCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmVcbnRoYXQgeW91IGF0dGFjaCBpdHMgY2hpbGRyZW4gKHRoZSBgaXJvbi1pbnB1dGAgYW5kIHRoZSBvcHRpb25hbCBgbGFiZWxgKSBiZWZvcmUgeW91XG5hdHRhY2ggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXRzZWxmLCBzbyB0aGF0IGl0IGNhbiBiZSBzZXQgdXAgY29ycmVjdGx5LlxuXG4jIyMgVmFsaWRhdGlvblxuXG5JZiB0aGUgYGF1dG8tdmFsaWRhdGVgIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBpbnB1dCBjb250YWluZXIgd2lsbCB2YWxpZGF0ZSB0aGUgaW5wdXQgYW5kIHVwZGF0ZVxudGhlIGNvbnRhaW5lciBzdHlsaW5nIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG5cbiMjIyBBZGQtb25zXG5cbkFkZC1vbnMgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aXRoIHRoZSBgYWRkLW9uYCBhdHRyaWJ1dGUgYW5kXG5pbXBsZW1lbnRzIHRoZSBgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvcmAgYmVoYXZpb3IuIFRoZXkgYXJlIG5vdGlmaWVkIHdoZW4gdGhlIGlucHV0IHZhbHVlXG5vciB2YWxpZGl0eSBjaGFuZ2VzLCBhbmQgbWF5IGltcGxlbWVudCBmdW5jdGlvbmFsaXR5IHN1Y2ggYXMgZXJyb3IgbWVzc2FnZXMgb3IgY2hhcmFjdGVyIGNvdW50ZXJzLlxuVGhleSBhcHBlYXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQuXG5cbiMjIyBQcmVmaXhlcyBhbmQgc3VmZml4ZXNcblRoZXNlIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYHByZWZpeGBcbm9yIGBzdWZmaXhgIGF0dHJpYnV0ZSwgYW5kIGFyZSBkaXNwbGF5ZWQgaW5saW5lIHdpdGggdGhlIGlucHV0LCBiZWZvcmUgb3IgYWZ0ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGRpdiBzbG90PVwicHJlZml4XCI+JDwvZGl2PlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPlRvdGFsPC9sYWJlbD5cbiAgICAgIDxpcm9uLWlucHV0IHNsb3Q9XCJpbnB1dFwiPlxuICAgICAgICA8aW5wdXQ+XG4gICAgICA8L2lyb24taW5wdXQ+XG4gICAgICAvLyBJbiBQb2x5bWVyIDEuMCwgeW91IHdvdWxkIHVzZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIHNsb3Q9XCJpbnB1dFwiPmAgaW5zdGVhZCBvZiB0aGUgYWJvdmUuXG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgZm9jdXNlZCB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGlzIGludmFsaWQgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvcmAgfCBJbnB1dCBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgd2hlbiBpdCdzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmdgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiBmbG9hdGluZyB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtaW52YWxpZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGludmFsaWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IHNwaW5uZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBjbGVhciBidXR0b24gfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1wcmVmaXhgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgcHJlZml4IHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtc3VmZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHN1ZmZpeCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGlzIGBkaXNwbGF5OmJsb2NrYCBieSBkZWZhdWx0LCBidXQgeW91IGNhbiBzZXQgdGhlIGBpbmxpbmVgIGF0dHJpYnV0ZSB0byBtYWtlIGl0XG5gZGlzcGxheTppbmxpbmUtYmxvY2tgLlxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXQtY29udGFpbmVyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHRvIG1ha2UgYSBzdGFja2luZyBjb250ZXh0ICovXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICB9O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2lubGluZV0pIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBvcGFjaXR5OiAwLjMzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwxLDEpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUuaXMtaGlnaGxpZ2h0ZWQgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZS5pcy1pbnZhbGlkIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC51bmZvY3VzZWQtbGluZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC51bmZvY3VzZWQtbGluZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtYXV0bztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcblxuICAgICAgICAvKiBTaW5jZSB3ZSBzY2FsZSB0byA3NS8xMDAgb2YgdGhlIHNpemUsIHdlIGFjdHVhbGx5IGhhdmUgMTAwLzc1IG9mIHRoZVxuICAgICAgICBvcmlnaW5hbCBzcGFjZSBub3cgYXZhaWxhYmxlICovXG4gICAgICAgIHdpZHRoOiAxMzMlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZztcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIC8qIFRPRE8obm9tcyk6IEZpZ3VyZSBvdXQgd2h5IGxlYXZpbmcgdGhlIHdpZHRoIGF0IDEzMyUgYmVmb3JlIHRoZSBhbmltYXRpb25cbiAgICAgICAgICogYWN0dWFsbHkgbWFrZXNcbiAgICAgICAgICogaXQgd2lkZXIgb24gdGhlIHJpZ2h0IHNpZGUsIG5vdCBsZWZ0IHNpZGUsIGFzIHlvdSB3b3VsZCBleHBlY3QgaW4gUlRMICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlyb24taW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCk6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcmVmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXByZWZpeDtcbiAgICAgIH1cblxuICAgICAgLnN1ZmZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1zdWZmaXg7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBoaWRkZW49XCJbW25vTGFiZWxGbG9hdF1dXCI+Jm5ic3A7PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVmaXhcIj48c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90Pjwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlSW5wdXRDb250ZW50Q2xhc3Mobm9MYWJlbEZsb2F0LGFsd2F5c0Zsb2F0TGFiZWwsZm9jdXNlZCxpbnZhbGlkLF9pbnB1dEhhc0NvbnRlbnQpXV1cIiBpZD1cImxhYmVsQW5kSW5wdXRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PC9zbG90PlxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWZmaXhcIj48c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZVVuZGVybGluZUNsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVuZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJhZGQtb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQtY29udGFpbmVyJyxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIFRoZSBsYWJlbCBkaXNhcHBlYXJzIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzXG4gICAgICAgKiBub3QgbnVsbC5cbiAgICAgICAqL1xuICAgICAgbm9MYWJlbEZsb2F0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYXR0cmlidXRlIHRvIGxpc3RlbiBmb3IgdmFsdWUgY2hhbmdlcyBvbi5cbiAgICAgICAqL1xuICAgICAgYXR0ckZvclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdiaW5kLXZhbHVlJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIGl0IGNoYW5nZXMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgICogY2hhbmdlcyBpZiBhdXRvLXZhbGlkYXRpbmcsIG9yIHdoZW4gdGhlIGBpcm9uLWlucHV0LXZhbGlkYXRlYCBldmVudCBpcyBoZWFyZCBmcm9tIGEgY2hpbGQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaGFzIGZvY3VzLlxuICAgICAgICovXG4gICAgICBmb2N1c2VkOiB7XG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2FkZG9uczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICAvLyBkbyBub3Qgc2V0IGEgZGVmYXVsdCB2YWx1ZSBoZXJlIGludGVudGlvbmFsbHkgLSBpdCB3aWxsIGJlIGluaXRpYWxpemVkIGxhemlseSB3aGVuIGFcbiAgICAgICAgLy8gZGlzdHJpYnV0ZWQgY2hpbGQgaXMgYXR0YWNoZWQsIHdoaWNoIG1heSBvY2N1ciBiZWZvcmUgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIC8vIGluIHBvbHlmaWxsLlxuICAgICAgfSxcblxuICAgICAgX2lucHV0SGFzQ29udGVudDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF9pbnB1dFNlbGVjdG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdpbnB1dCxpcm9uLWlucHV0LHRleHRhcmVhLC5wYXBlci1pbnB1dC1pbnB1dCdcbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZE9uRm9jdXM6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbkJsdXI6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9ib3VuZE9uSW5wdXQ6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRWYWx1ZUNoYW5nZWQ6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25WYWx1ZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICdhZGRvbi1hdHRhY2hlZCc6ICdfb25BZGRvbkF0dGFjaGVkJyxcbiAgICAgICdpcm9uLWlucHV0LXZhbGlkYXRlJzogJ19vbklyb25JbnB1dFZhbGlkYXRlJ1xuICAgIH0sXG5cbiAgICBnZXQgX3ZhbHVlQ2hhbmdlZEV2ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0ckZvclZhbHVlICsgJy1jaGFuZ2VkJztcbiAgICB9LFxuXG4gICAgZ2V0IF9wcm9wZXJ0eUZvclZhbHVlKCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuQ2FzZU1hcC5kYXNoVG9DYW1lbENhc2UodGhpcy5hdHRyRm9yVmFsdWUpO1xuICAgIH0sXG5cbiAgICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLmRvbSh0aGlzKS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0U2VsZWN0b3IpO1xuICAgIH0sXG5cbiAgICBnZXQgX2lucHV0RWxlbWVudFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXSB8fCB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5fYWRkb25zKSB7XG4gICAgICAgIHRoaXMuX2FkZG9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cywgdHJ1ZSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1ciwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmF0dHJGb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl92YWx1ZUNoYW5nZWRFdmVudCwgdGhpcy5fYm91bmRWYWx1ZUNoYW5nZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgJiYgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT0gJycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLl9hZGRvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGhpcy5fYWRkb25zLmluZGV4T2YodGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fYWRkb25zLnB1c2godGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgX29uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgfSxcblxuICAgIF9vbklucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgX29uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAvLyBQcm9ibGVtOiBpZiB0aGUgaW5wdXQgaXMgcmVxdWlyZWQgYnV0IGhhcyBubyB0ZXh0IGVudGVyZWQsIHdlIHNob3VsZFxuICAgICAgLy8gb25seSB2YWxpZGF0ZSBpdCBvbiBibHVyIChzbyB0aGF0IGFuIGVtcHR5IGZvcm0gZG9lc24ndCBjb21lIHVwIHJlZFxuICAgICAgLy8gaW1tZWRpYXRlbHk7IGhvd2V2ZXIsIGluIHRoaXMgaGFuZGxlciwgd2UgZG9uJ3Qga25vdyB3aGV0aGVyIHRoaXMgaXNcbiAgICAgIC8vIHRoZSBib290aW5nIHVwIHZhbHVlIG9yIGEgdmFsdWUgaW4gdGhlIGZ1dHVyZS4gSSBhbSBhc3N1bWluZyB0aGF0IHRoZVxuICAgICAgLy8gY2FzZSAgd2UgY2FyZSBhYm91dCBtYW5pZmVzdHMgaXRzZWxmIHdoZW4gdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAgICAgIC8vIElmIHRoaXMgY2F1c2VzIGZ1dHVyZSBwcm9ibGVtcywgd2UgbmVlZCB0byBkbyBzb21ldGhpbmcgbGlrZSB0cmFjayB3aGV0aGVyXG4gICAgICAvLyB0aGUgaXJvbi1pbnB1dC1yZWFkeSBldmVudCBoYXMgZmlyZWQsIGFuZCB0aGlzIGhhbmRsZXIgY2FtZSBiZWZvcmUgdGhhdC5cblxuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZShldmVudC50YXJnZXQpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWU7XG5cbiAgICAgIC8vIHR5cGU9XCJudW1iZXJcIiBoYWNrIG5lZWRlZCBiZWNhdXNlIHRoaXMudmFsdWUgaXMgZW1wdHkgdW50aWwgaXQncyB2YWxpZFxuICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwIHx8IChpbnB1dEVsZW1lbnQudHlwZSA9PT0gJ251bWJlcicgJiYgIWlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0SGFzQ29udGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVBZGRvbnMoe1xuICAgICAgICBpbnB1dEVsZW1lbnQ6IGlucHV0RWxlbWVudCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbnZhbGlkOiB0aGlzLmludmFsaWRcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlICYmIGlucHV0RWxlbWVudCkge1xuICAgICAgICB2YXIgdmFsaWQ7XG5cbiAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGF0ZSkge1xuICAgICAgICAgIHZhbGlkID0gaW5wdXRFbGVtZW50LnZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHRoaXMgbGFzdCB0byBub3RpZnkgdGhlIGFkZC1vbnMuXG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZShpbnB1dEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBfb25Jcm9uSW5wdXRWYWxpZGF0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX2lucHV0RWxlbWVudC5pbnZhbGlkO1xuICAgIH0sXG5cbiAgICBfaW52YWxpZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLnVwZGF0ZUFkZG9ucyh7aW52YWxpZDogdGhpcy5pbnZhbGlkfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB0byB1cGRhdGUgdGhlIHN0YXRlIG9mIGFkZC1vbnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIEFkZC1vbiBzdGF0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVBZGRvbnM6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBmb3IgKHZhciBhZGRvbiwgaW5kZXggPSAwOyBhZGRvbiA9IHRoaXMuX2FkZG9uc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgYWRkb24udXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NvbXB1dGVJbnB1dENvbnRlbnRDbGFzczogZnVuY3Rpb24obm9MYWJlbEZsb2F0LCBhbHdheXNGbG9hdExhYmVsLCBmb2N1c2VkLCBpbnZhbGlkLCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICB2YXIgY2xzID0gJ2lucHV0LWNvbnRlbnQnO1xuICAgICAgaWYgKCFub0xhYmVsRmxvYXQpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXG4gICAgICAgIGlmIChhbHdheXNGbG9hdExhYmVsIHx8IF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1mbG9hdGluZyc7XG4gICAgICAgICAgLy8gSWYgdGhlIGxhYmVsIGlzIGZsb2F0aW5nLCBpZ25vcmUgYW55IG9mZnNldHMgdGhhdCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAgLy8gYXBwbGllZCBmcm9tIGEgcHJlZml4IGVsZW1lbnQuXG4gICAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcblxuICAgICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgICAgIGNscyArPSBcIiBsYWJlbC1pcy1oaWdobGlnaHRlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXaGVuIHRoZSBsYWJlbCBpcyBub3QgZmxvYXRpbmcsIGl0IHNob3VsZCBvdmVybGFwIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWhpZGRlbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgZm9jdXNlZCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH0sXG5cbiAgICBfY29tcHV0ZVVuZGVybGluZUNsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgICB2YXIgY2xzID0gJ3VuZGVybGluZSc7XG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgICBjbHMgKz0gJyBpcy1oaWdobGlnaHRlZCdcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbHM7XG4gICAgfSxcblxuICAgIF9jb21wdXRlQWRkT25Db250ZW50Q2xhc3M6IGZ1bmN0aW9uKGZvY3VzZWQsIGludmFsaWQpIHtcbiAgICAgIHZhciBjbHMgPSAnYWRkLW9uLWNvbnRlbnQnO1xuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5gPHBhcGVyLWlucHV0LWVycm9yPmAgaXMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgdXNlIHdpdGggYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gVGhlIGVycm9yIGlzXG5kaXNwbGF5ZWQgd2hlbiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBgaW52YWxpZGAuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGlucHV0IHBhdHRlcm49XCJbMC05XSpcIj5cbiAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBzbG90PVwiYWRkLW9uXCI+T25seSBudW1iZXJzIGFyZSBhbGxvd2VkITwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBUaGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgZXJyb3IgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWVycm9yYCAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGVycm9yICAgICAgICB8IGB7fWBcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0LWVycm9yXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWVycm9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9O1xuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItaW5wdXQtZXJyb3InLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yXG4gICAgXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgZXJyb3IgaXMgc2hvd2luZy5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgICAqIH19IHN0YXRlIC1cbiAgICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiAgICAgaW52YWxpZDogVHJ1ZSBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB0aGlzLl9zZXRJbnZhbGlkKHN0YXRlLmludmFsaWQpO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtZXJyb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmBpcm9uLWltYWdlYCBpcyBhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIGFuIGltYWdlIHRoYXQgcHJvdmlkZXMgdXNlZnVsIHNpemluZyBhbmRcbnByZWxvYWRpbmcgb3B0aW9ucyBub3QgZm91bmQgb24gdGhlIHN0YW5kYXJkIGA8aW1nPmAgdGFnLlxuXG5UaGUgYHNpemluZ2Agb3B0aW9uIGFsbG93cyB0aGUgaW1hZ2UgdG8gYmUgZWl0aGVyIGNyb3BwZWQgKGBjb3ZlcmApIG9yXG5sZXR0ZXJib3hlZCAoYGNvbnRhaW5gKSB0byBmaWxsIGEgZml4ZWQgdXNlci1zaXplIHBsYWNlZCBvbiB0aGUgZWxlbWVudC5cblxuVGhlIGBwcmVsb2FkYCBvcHRpb24gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSByZW5kZXJpbmcgdGhlIGltYWdlIHVudGlsIHRoZVxuaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLiAgSW4gdGhlIGludGVyaW0sIGVpdGhlciB0aGUgZWxlbWVudCdzIENTUyBgYmFja2dyb3VuZC1jb2xvcmBcbmNhbiBiZSBiZSB1c2VkIGFzIHRoZSBwbGFjZWhvbGRlciwgb3IgdGhlIGBwbGFjZWhvbGRlcmAgcHJvcGVydHkgY2FuIGJlXG5zZXQgdG8gYSBVUkwgKHByZWZlcmFibHkgYSBkYXRhLVVSSSwgZm9yIGluc3RhbnQgcmVuZGVyaW5nKSBmb3IgYW5cbnBsYWNlaG9sZGVyIGltYWdlLlxuXG5UaGUgYGZhZGVgIG9wdGlvbiAob25seSB2YWxpZCB3aGVuIGBwcmVsb2FkYCBpcyBzZXQpIHdpbGwgY2F1c2UgdGhlIHBsYWNlaG9sZGVyXG5pbWFnZS9jb2xvciB0byBiZSBmYWRlZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgcmVuZGVyZWQuXG5cbkV4YW1wbGVzOlxuXG4gIEJhc2ljYWxseSBpZGVudGljYWwgdG8gYDxpbWcgc3JjPVwiLi4uXCI+YCB0YWc6XG5cbiAgICA8aXJvbi1pbWFnZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGxldHRlcmJveCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvbnRhaW5cIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBjcm9wIHRoZSBpbWFnZSB0byBmaXQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgc2l6aW5nPVwiY292ZXJcIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBzaG93IGxpZ2h0LWdyYXkgYmFja2dyb3VuZCB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBhIGJhc2UtNjQgZW5jb2RlZCBwbGFjZWhvbGRlciBpbWFnZSB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgcGxhY2Vob2xkZXI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsLi4uXCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGZhZGUgdGhlIGxpZ2h0LWdyYXkgYmFja2dyb3VuZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgbG9hZGVkOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBmYWRlIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1pcm9uLWltYWdlLXBsYWNlaG9sZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gI3BsYWNlaG9sZGVyIHwgYHt9YFxuYC0taXJvbi1pbWFnZS13aWR0aGAgfCBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuYC0taXJvbi1pbWFnZS1oZWlnaHRgIHwgU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVkIGltYWdlIHwgYGF1dG9gXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZWxlbWVudCBpcm9uLWltYWdlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24taW1hZ2VcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNiYXNlVVJJQW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWltYWdlLXdpZHRoLCBhdXRvKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWltYWdlLWhlaWdodCwgYXV0byk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjc2l6ZWRJbWdEaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NpemluZ10pICNpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjcGxhY2Vob2xkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgQGFwcGx5IC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyLmZhZGVkLW91dCB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhIGlkPVwiYmFzZVVSSUFuY2hvclwiIGhyZWY9XCIjXCI+PC9hPlxuICAgIDxkaXYgaWQ9XCJzaXplZEltZ0RpdlwiXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIGhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2SGlkZGVuKHNpemluZyldXVwiXG4gICAgICBhcmlhLWhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUhpZGRlbihhbHQpXV1cIlxuICAgICAgYXJpYS1sYWJlbCQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUxhYmVsKGFsdCwgc3JjKV1dXCI+PC9kaXY+XG4gICAgPGltZyBpZD1cImltZ1wiXG4gICAgICBhbHQkPVwiW1thbHRdXVwiXG4gICAgICBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0hpZGRlbihzaXppbmcpXV1cIlxuICAgICAgY3Jvc3NvcmlnaW4kPVwiW1tjcm9zc29yaWdpbl1dXCJcbiAgICAgIG9uLWxvYWQ9XCJfaW1nT25Mb2FkXCJcbiAgICAgIG9uLWVycm9yPVwiX2ltZ09uRXJyb3JcIj5cbiAgICA8ZGl2IGlkPVwicGxhY2Vob2xkZXJcIlxuICAgICAgaGlkZGVuJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbihwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIlxuICAgICAgY2xhc3MkPVwiW1tfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lKHByZWxvYWQsIGZhZGUsIGxvYWRpbmcsIGxvYWRlZCldXVwiPjwvZGl2PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ2lyb24taW1hZ2UnLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgVVJMIG9mIGFuIGltYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNob3J0IHRleHQgYWx0ZXJuYXRpdmUgZm9yIHRoZSBpbWFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGFsdDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDT1JTIGVuYWJsZWQgaW1hZ2VzIHN1cHBvcnQ6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXG4gICAgICAgICAqL1xuICAgICAgICBjcm9zc29yaWdpbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRydWUsIHRoZSBpbWFnZSBpcyBwcmV2ZW50ZWQgZnJvbSBsb2FkaW5nIGFuZCBhbnkgcGxhY2Vob2xkZXIgaXNcbiAgICAgICAgICogc2hvd24uICBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBhIGJpbmRpbmcgdG8gdGhlIHNyYyBwcm9wZXJ0eSBpcyBrbm93biB0b1xuICAgICAgICAgKiBiZSBpbnZhbGlkLCB0byBwcmV2ZW50IDQwNCByZXF1ZXN0cy5cbiAgICAgICAgICovXG4gICAgICAgIHByZXZlbnRMb2FkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBpbWFnZS4gIFZhbGlkIHZhbHVlcyBhcmUgYGNvbnRhaW5gIChmdWxsXG4gICAgICAgICAqIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBhbmRcbiAgICAgICAgICogbGV0dGVyYm94ZWQpIG9yIGBjb3ZlcmAgKGltYWdlIGlzIGNyb3BwZWQgaW4gb3JkZXIgdG8gZnVsbHkgY292ZXIgdGhlXG4gICAgICAgICAqIGJvdW5kcyBvZiB0aGUgZWxlbWVudCksIG9yIGBudWxsYCAoZGVmYXVsdDogaW1hZ2UgdGFrZXMgbmF0dXJhbCBzaXplKS5cbiAgICAgICAgICovXG4gICAgICAgIHNpemluZzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBhIHNpemluZyBvcHRpb24gaXMgdXNlZCAoYGNvdmVyYCBvciBgY29udGFpbmApLCB0aGlzIGRldGVybWluZXNcbiAgICAgICAgICogaG93IHRoZSBpbWFnZSBpcyBhbGlnbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBib3VuZHMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ2NlbnRlcidcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGBzcmNgIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlIGBwbGFjZWhvbGRlcmBcbiAgICAgICAgICogaW1hZ2UgdG8gYmUgc2hvd24gdW50aWwgdGhlIG5ldyBpbWFnZSBoYXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJlbG9hZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlIGhhc1xuICAgICAgICAgKiBsb2FkZWQuICBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudCByZW5kZXJpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBvYnNlcnZlcjogJ19wbGFjZWhvbGRlckNoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZWxvYWRgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGUgaW1hZ2UgdG9cbiAgICAgICAgICogZmFkZSBpbnRvIHBsYWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZmFkZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IGlzIHRydWUgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZGVkOiB7XG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IHRyYWNrcyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgaW1hZ2Ugd2hlbiB0aGUgYHByZWxvYWRgXG4gICAgICAgICAqIG9wdGlvbiBpcyB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBzZXQgYHNyY2AgZmFpbGVkIHRvIGxvYWQuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZVxuICAgICAgICAgKiBzZXQgdmlhIENTUy5cbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfd2lkdGhDaGFuZ2VkJyxcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBoZWlnaHQgb2YgaW1hZ2UgKGUuZy4gdmlhIGJpbmRpbmcpOyBzaXplIG1heSBhbHNvIGJlXG4gICAgICAgICAqIHNldCB2aWEgQ1NTLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXR0cmlidXRlIGhlaWdodFxuICAgICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfaGVpZ2h0Q2hhbmdlZCcsXG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ190cmFuc2Zvcm1DaGFuZ2VkKHNpemluZywgcG9zaXRpb24pJyxcbiAgICAgICAgJ19sb2FkU3RhdGVPYnNlcnZlcihzcmMsIHByZXZlbnRMb2FkKSdcbiAgICAgIF0sXG5cbiAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICAgICAgfSxcblxuICAgICAgX2ltZ09uTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgICB9LFxuXG4gICAgICBfaW1nT25FcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3IodHJ1ZSk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZVBsYWNlaG9sZGVySGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnByZWxvYWQgfHwgKCF0aGlzLmZhZGUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByZWxvYWQgJiYgdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpID8gJ2ZhZGVkLW91dCcgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nRGl2SGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnNpemluZztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nRGl2QVJJQUhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsdCA9PT0gJycgPyAndHJ1ZScgOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmFsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvbHltZXIuUmVzb2x2ZVVybC5yZXNvbHZlVXJsIHdpbGwgcmVzb2x2ZSAnJyByZWxhdGl2ZSB0byBhIFVSTCB4IHRvXG4gICAgICAgIC8vIHRoYXQgVVJMIHgsIGJ1dCAnJyBpcyB0aGUgZGVmYXVsdCBmb3Igc3JjLlxuICAgICAgICBpZiAodGhpcy5zcmMgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9URTogVXNlIG9mIGBVUkxgIHdhcyByZW1vdmVkIGhlcmUgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgICAvLyBjb25zdHJ1Y3RpbmcgaXQuIElmIHRoaXMgZW5kcyB1cCBiZWluZyBwcm9ibGVtYXRpYywgd2Ugc2hvdWxkXG4gICAgICAgIC8vIGNvbnNpZGVyIHJldmVydGluZyBhbmQgYWRkaW5nIHRoZSBVUkwgcG9seWZpbGwgYXMgYSBkZXYgZGVwZW5kZW5jeS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYyk7XG4gICAgICAgIC8vIFJlbW92ZSBxdWVyeSBwYXJ0cywgZ2V0IGZpbGUgbmFtZS5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLnJlcGxhY2UoL1s/fCNdLiovZywgJycpLnNwbGl0KCcvJykucG9wKCk7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0hpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc2l6aW5nO1xuICAgICAgfSxcblxuICAgICAgX3dpZHRoQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBpc05hTih0aGlzLndpZHRoKSA/IHRoaXMud2lkdGggOiB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIF9oZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBpc05hTih0aGlzLmhlaWdodCkgPyB0aGlzLmhlaWdodCA6IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIF9sb2FkU3RhdGVPYnNlcnZlcjogZnVuY3Rpb24oc3JjLCBwcmV2ZW50TG9hZCkge1xuICAgICAgICB2YXIgbmV3UmVzb2x2ZWRTcmMgPSB0aGlzLl9yZXNvbHZlU3JjKHNyYyk7XG4gICAgICAgIGlmIChuZXdSZXNvbHZlZFNyYyA9PT0gdGhpcy5fcmVzb2x2ZWRTcmMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICAgICAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgICAgICBpZiAoc3JjID09PSAnJyB8fCBwcmV2ZW50TG9hZCkge1xuICAgICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gbmV3UmVzb2x2ZWRTcmM7XG4gICAgICAgICAgdGhpcy4kLmltZy5zcmMgPSB0aGlzLl9yZXNvbHZlZFNyYztcbiAgICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyB0aGlzLl9yZXNvbHZlZFNyYyArICdcIiknO1xuXG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX3BsYWNlaG9sZGVyQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJC5wbGFjZWhvbGRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPyAndXJsKFwiJyArIHRoaXMucGxhY2Vob2xkZXIgKyAnXCIpJyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX3RyYW5zZm9ybUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2l6ZWRJbWdEaXZTdHlsZSA9IHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZTtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGU7XG5cbiAgICAgICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICAgIHRoaXMuc2l6aW5nO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxuICAgICAgICAgIHRoaXMuc2l6aW5nID8gdGhpcy5wb3NpdGlvbiA6ICcnO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9XG4gICAgICAgICAgdGhpcy5zaXppbmcgPyAnbm8tcmVwZWF0JyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX3Jlc29sdmVTcmM6IGZ1bmN0aW9uKHRlc3RTcmMpIHtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gUG9seW1lci5SZXNvbHZlVXJsLnJlc29sdmVVcmwodGVzdFNyYywgdGhpcy4kLmJhc2VVUklBbmNob3IuaHJlZik7XG4gICAgICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAgICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgICAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgICAgIGlmIChyZXNvbHZlZFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgLy8gSW4gSUUgbG9jYXRpb24ub3JpZ2luIG1pZ2h0IG5vdCB3b3JrXG4gICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzYzODAyL2xvY2F0aW9uLW9yaWdpbi1pcy11bmRlZmluZWQtaW4taWUtMTEtb24td2luZG93cy0xMC1idXQtd29ya3Mtb24td2luZG93cy03XG4gICAgICAgICAgcmVzb2x2ZWQgPSAobG9jYXRpb24ub3JpZ2luIHx8IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpICsgcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWwiLCJcbnJlcXVpcmUoJy4uLy4uL3BvbHltZXIvcG9seW1lci5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL3NoYWRvdy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItbWF0ZXJpYWwtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT46aG9zdCxodG1sey0tcGFwZXItbWF0ZXJpYWw6e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMmRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi00ZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTZkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tOGRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO307fS5wYXBlci1tYXRlcmlhbCw6aG9zdCgucGFwZXItbWF0ZXJpYWwpe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIxXFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMVxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMlxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjJcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjNcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIzXFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI0XFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNFxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNVxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjVcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmlyb24tcmVxdWVzdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIFhNTEh0dHBSZXF1ZXN0cy5cblxuICAgIDxpcm9uLXJlcXVlc3QgaWQ9XCJ4aHJcIj48L2lyb24tcmVxdWVzdD5cbiAgICAuLi5cbiAgICB0aGlzLiQueGhyLnNlbmQoe3VybDogdXJsLCBib2R5OiBwYXJhbXN9KTtcbi0tPlxuPHNjcmlwdD5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIFBvbHltZXIoe1xuICAgIGlzOiAnaXJvbi1yZXF1ZXN0JyxcblxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICBoaWRkZW46IHRydWVcbiAgICB9LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZSB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgICAgICogbmV0d29yayByZXF1ZXN0LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtYTUxIdHRwUmVxdWVzdH1cbiAgICAgICAqL1xuICAgICAgeGhyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGFyc2VkIHJlc3BvbnNlIGJvZHksIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseVxuICAgICAgICogcmVzb2x2ZWQuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUgeyp9XG4gICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgKi9cbiAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBzdGF0dXMgY29kZSwgaWYgdGhlIGB4aHJgIGhhcyBjb21wbGV0ZWx5IHJlc29sdmVkLlxuICAgICAgICovXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc3RhdHVzIHRleHQsIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseSByZXNvbHZlZC5cbiAgICAgICAqL1xuICAgICAgc3RhdHVzVGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBgeGhyYCByZXNwb25zZSBjb21lcyBiYWNrLCBvciByZWplY3RzXG4gICAgICAgKiBpZiB0aGVyZSBpcyBhbiBlcnJvciBiZWZvcmUgdGhlIGB4aHJgIGNvbXBsZXRlcy5cbiAgICAgICAqIFRoZSByZXNvbHZlIGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGFzIGFuIGFyZ3VtZW50LlxuICAgICAgICogQnkgZGVmYXVsdCwgdGhlIHJlamVjdCBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhbiBgRXJyb3JgIGFzIGFuIGFyZ3VtZW50LlxuICAgICAgICogSWYgYHJlamVjdFdpdGhSZXF1ZXN0YCBpcyB0cnVlLCB0aGUgcmVqZWN0IGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIGFuIFxuICAgICAgICogb2JqZWN0IHdpdGggdHdvIGtleXM6IGByZXF1ZXN0YCwgdGhlIG9yaWdpbmFsIHJlcXVlc3QsIGFuZCBgZXJyb3JgLCB0aGUgXG4gICAgICAgKiBlcnJvciBvYmplY3QuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgKi9cbiAgICAgIGNvbXBsZXRlczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVDb21wbGV0ZXMgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMgPSByZWplY3Q7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBvYmplY3QgdGhhdCBjb250YWlucyBwcm9ncmVzcyBpbmZvcm1hdGlvbiBlbWl0dGVkIGJ5IHRoZSBYSFIgaWZcbiAgICAgICAqIGF2YWlsYWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBAZGVmYXVsdCB7fVxuICAgICAgICovXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWJvcnRlZCB3aWxsIGJlIHRydWUgaWYgYW4gYWJvcnQgb2YgdGhlIHJlcXVlc3QgaXMgYXR0ZW1wdGVkLlxuICAgICAgICovXG4gICAgICBhYm9ydGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXJyb3JlZCB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgZmlyZWQgYW4gZXJyb3IgZXZlbnQgZnJvbSB0aGVcbiAgICAgICAqIFhIUiBvYmplY3QgKG1haW5seSBuZXR3b3JrIGVycm9ycykuXG4gICAgICAgKi9cbiAgICAgIGVycm9yZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRpbWVkT3V0IHdpbGwgYmUgdHJ1ZSBpZiB0aGUgWEhSIHRocmV3IGEgdGltZW91dCBldmVudC5cbiAgICAgICAqL1xuICAgICAgdGltZWRPdXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN1Y2NlZWRlZCBpcyB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC4gVGhlIHJlcXVlc3Qgc3VjY2VlZGVkIGlmIGl0XG4gICAgICogbG9hZGVkIHdpdGhvdXQgZXJyb3IsIHdhc24ndCBhYm9ydGVkLCBhbmQgdGhlIHN0YXR1cyBjb2RlIGlzIOKJpSAyMDAsIGFuZFxuICAgICAqIDwgMzAwLCBvciBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgMC5cbiAgICAgKlxuICAgICAqIFRoZSBzdGF0dXMgY29kZSAwIGlzIGFjY2VwdGVkIGFzIGEgc3VjY2VzcyBiZWNhdXNlIHNvbWUgc2NoZW1lcyAtIGUuZy5cbiAgICAgKiBmaWxlOi8vIC0gZG9uJ3QgcHJvdmlkZSBzdGF0dXMgY29kZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzdWNjZWVkZWQoKSB7XG4gICAgICBpZiAodGhpcy5lcnJvcmVkIHx8IHRoaXMuYWJvcnRlZCB8fCB0aGlzLnRpbWVkT3V0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnhoci5zdGF0dXMgfHwgMDtcblxuICAgICAgLy8gTm90ZTogaWYgd2UgYXJlIHVzaW5nIHRoZSBmaWxlOi8vIHByb3RvY29sLCB0aGUgc3RhdHVzIGNvZGUgd2lsbCBiZSAwXG4gICAgICAvLyBmb3IgYWxsIG91dGNvbWVzIChzdWNjZXNzZnVsIG9yIG90aGVyd2lzZSkuXG4gICAgICByZXR1cm4gc3RhdHVzID09PSAwIHx8XG4gICAgICAgIChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGFuIEhUVFAgcmVxdWVzdCB0byB0aGUgc2VydmVyIGFuZCByZXR1cm5zIGEgcHJvbWlzZSAoc2VlIHRoZSBgY29tcGxldGVzYFxuICAgICAqIHByb3BlcnR5IGZvciBkZXRhaWxzKS5cbiAgICAgKlxuICAgICAqIFRoZSBoYW5kbGluZyBvZiB0aGUgYGJvZHlgIHBhcmFtZXRlciB3aWxsIHZhcnkgYmFzZWQgb24gdGhlIENvbnRlbnQtVHlwZVxuICAgICAqIGhlYWRlci4gU2VlIHRoZSBkb2NzIGZvciBpcm9uLWFqYXgncyBgYm9keWAgcHJvcGVydHkgZm9yIGRldGFpbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIHVybDogc3RyaW5nLFxuICAgICAqICAgbWV0aG9kOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBhc3luYzogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgKiAgIGJvZHk6IChBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd8QmxvYnxEb2N1bWVudHxGb3JtRGF0YXxudWxsfHN0cmluZ3x1bmRlZmluZWR8T2JqZWN0KSxcbiAgICAgKiAgIGhlYWRlcnM6IChPYmplY3R8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGhhbmRsZUFzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBqc29uUHJlZml4OiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICB3aXRoQ3JlZGVudGlhbHM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICB0aW1lb3V0OiAoTnVtYmVyfHVuZGVmaW5lZCksXG4gICAgICogICByZWplY3RXaXRoUmVxdWVzdDogKGJvb2xlYW58dW5kZWZpbmVkKX19IG9wdGlvbnMgLVxuICAgICAqICAgLSB1cmwgVGhlIHVybCB0byB3aGljaCB0aGUgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqICAgLSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSwgZGVmYXVsdCBpcyBHRVQuXG4gICAgICogICAtIGFzeW5jIEJ5IGRlZmF1bHQsIGFsbCByZXF1ZXN0cyBhcmUgc2VudCBhc3luY2hyb25vdXNseS4gVG8gc2VuZCBzeW5jaHJvbm91cyByZXF1ZXN0cyxcbiAgICAgKiAgICAgICAgIHNldCB0byBmYWxzZS5cbiAgICAgKiAgIC0gIGJvZHkgVGhlIGNvbnRlbnQgZm9yIHRoZSByZXF1ZXN0IGJvZHkgZm9yIFBPU1QgbWV0aG9kLlxuICAgICAqICAgLSAgaGVhZGVycyBIVFRQIHJlcXVlc3QgaGVhZGVycy5cbiAgICAgKiAgIC0gIGhhbmRsZUFzIFRoZSByZXNwb25zZSB0eXBlLiBEZWZhdWx0IGlzICd0ZXh0Jy5cbiAgICAgKiAgIC0gIHdpdGhDcmVkZW50aWFscyBXaGV0aGVyIG9yIG5vdCB0byBzZW5kIGNyZWRlbnRpYWxzIG9uIHRoZSByZXF1ZXN0LiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgICAqICAgLSAgdGltZW91dCAtIFRpbWVvdXQgZm9yIHJlcXVlc3QsIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiAgIC0gIHJlamVjdFdpdGhSZXF1ZXN0IFNldCB0byB0cnVlIHRvIGluY2x1ZGUgdGhlIHJlcXVlc3Qgb2JqZWN0IHdpdGggcHJvbWlzZSByZWplY3Rpb25zLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgc2VuZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHhociA9IHRoaXMueGhyO1xuXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICB0aGlzLl9zZXRQcm9ncmVzcyh7XG4gICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogcHJvZ3Jlc3MubGVuZ3RoQ29tcHV0YWJsZSxcbiAgICAgICAgICBsb2FkZWQ6IHByb2dyZXNzLmxvYWRlZCxcbiAgICAgICAgICB0b3RhbDogcHJvZ3Jlc3MudG90YWxcbiAgICAgICAgfSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICB0aGlzLl9zZXRFcnJvcmVkKHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCd0aW1lb3V0JywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2V0VGltZWRPdXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBvcHRpb25zLnJlamVjdFdpdGhSZXF1ZXN0ID8ge1xuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICByZXF1ZXN0OiB0aGlzXG4gICAgICAgIH0gOiBlcnJvcjtcbiAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMocmVzcG9uc2UpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3NldEFib3J0ZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZC4nKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIENhbGxlZCBhZnRlciBhbGwgb2YgdGhlIGFib3ZlLlxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuX3NldFJlc3BvbnNlKHRoaXMucGFyc2VSZXNwb25zZSgpKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3VjY2VlZGVkKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdUaGUgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZTogJyArIHRoaXMueGhyLnN0YXR1cyk7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgICAgdGhpcy5yZWplY3RDb21wbGV0ZXMocmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb2x2ZUNvbXBsZXRlcyh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgIG9wdGlvbnMudXJsLFxuICAgICAgICBvcHRpb25zLmFzeW5jICE9PSBmYWxzZVxuICAgICAgKTtcblxuICAgICAgdmFyIGFjY2VwdFR5cGUgPSB7XG4gICAgICAgICdqc29uJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAndGV4dCc6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgJ2h0bWwnOiAndGV4dC9odG1sJyxcbiAgICAgICAgJ3htbCc6ICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgICAnYXJyYXlidWZmZXInOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICAgICAgfVtvcHRpb25zLmhhbmRsZUFzXTtcbiAgICAgIHZhciBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB2YXIgbmV3SGVhZGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICBuZXdIZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICAgIGhlYWRlcnMgPSBuZXdIZWFkZXJzO1xuXG4gICAgICBpZiAoYWNjZXB0VHlwZSAmJiAhaGVhZGVyc1snYWNjZXB0J10pIHtcbiAgICAgICAgaGVhZGVyc1snYWNjZXB0J10gPSBhY2NlcHRUeXBlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihyZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3QocmVxdWVzdEhlYWRlcikpIHtcbiAgICAgICAgICBQb2x5bWVyLkJhc2UuX2Vycm9yKCdIZWFkZXJzIG11c3QgYmUgbG93ZXIgY2FzZSwgZ290JywgcmVxdWVzdEhlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgcmVxdWVzdEhlYWRlcixcbiAgICAgICAgICBoZWFkZXJzW3JlcXVlc3RIZWFkZXJdXG4gICAgICAgICk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgaWYgKG9wdGlvbnMuYXN5bmMgIT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmFzeW5jKSB7XG4gICAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlQXMgPSBvcHRpb25zLmhhbmRsZUFzO1xuXG4gICAgICAgIC8vIElmIGEgSlNPTiBwcmVmaXggaXMgcHJlc2VudCwgdGhlIHJlc3BvbnNlVHlwZSBtdXN0IGJlICd0ZXh0JyBvciB0aGVcbiAgICAgICAgLy8gYnJvd3NlciB3b27igJl0IGJlIGFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlLlxuICAgICAgICBpZiAoISFvcHRpb25zLmpzb25QcmVmaXggfHwgIWhhbmRsZUFzKSB7XG4gICAgICAgICAgaGFuZGxlQXMgPSAndGV4dCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBJRSwgYHhoci5yZXNwb25zZVR5cGVgIGlzIGFuIGVtcHR5IHN0cmluZyB3aGVuIHRoZSByZXNwb25zZVxuICAgICAgICAvLyByZXR1cm5zLiBIZW5jZSwgY2FjaGluZyBpdCBhcyBgeGhyLl9yZXNwb25zZVR5cGVgLlxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0geGhyLl9yZXNwb25zZVR5cGUgPSBoYW5kbGVBcztcblxuICAgICAgICAvLyBDYWNoZSB0aGUgSlNPTiBwcmVmaXgsIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy5qc29uUHJlZml4KSB7XG4gICAgICAgICAgeGhyLl9qc29uUHJlZml4ID0gb3B0aW9ucy5qc29uUHJlZml4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuXG5cbiAgICAgIHZhciBib2R5ID0gdGhpcy5fZW5jb2RlQm9keU9iamVjdChvcHRpb25zLmJvZHksIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKTtcblxuICAgICAgeGhyLnNlbmQoXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8XG4gICAgICAgICAgICAgICAgICAgbnVsbHxzdHJpbmd8dW5kZWZpbmVkfSAqL1xuICAgICAgICAoYm9keSkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHBhcnNlIHRoZSByZXNwb25zZSBib2R5IG9mIHRoZSBYSFIuIElmIHBhcnNpbmcgc3VjY2VlZHMsXG4gICAgICogdGhlIHZhbHVlIHJldHVybmVkIHdpbGwgYmUgZGVzZXJpYWxpemVkIGJhc2VkIG9uIHRoZSBgcmVzcG9uc2VUeXBlYFxuICAgICAqIHNldCBvbiB0aGUgWEhSLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHBhcnNlZCByZXNwb25zZSxcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgdGhlcmUgd2FzIGFuIGVtcHR5IHJlc3BvbnNlIG9yIHBhcnNpbmcgZmFpbGVkLlxuICAgICAqL1xuICAgIHBhcnNlUmVzcG9uc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHhociA9IHRoaXMueGhyO1xuICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IHhoci5yZXNwb25zZVR5cGUgfHwgeGhyLl9yZXNwb25zZVR5cGU7XG4gICAgICB2YXIgcHJlZmVyUmVzcG9uc2VUZXh0ID0gIXRoaXMueGhyLnJlc3BvbnNlVHlwZTtcbiAgICAgIHZhciBwcmVmaXhMZW4gPSAoeGhyLl9qc29uUHJlZml4ICYmIHhoci5fanNvblByZWZpeC5sZW5ndGgpIHx8IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAvLyBJZiB0aGUgeGhyIG9iamVjdCBkb2Vzbid0IGhhdmUgYSBuYXR1cmFsIGB4aHIucmVzcG9uc2VUeXBlYCxcbiAgICAgICAgICAgIC8vIHdlIGNhbiBhc3N1bWUgdGhhdCB0aGUgYnJvd3NlciBoYXNuJ3QgcGFyc2VkIHRoZSByZXNwb25zZSBmb3IgdXMsXG4gICAgICAgICAgICAvLyBhbmQgc28gcGFyc2luZyBpcyBvdXIgcmVzcG9uc2liaWxpdHkuIExpa2V3aXNlIGlmIHJlc3BvbnNlIGlzXG4gICAgICAgICAgICAvLyB1bmRlZmluZWQsIGFzIHRoZXJlJ3Mgbm8gd2F5IHRvIGVuY29kZSB1bmRlZmluZWQgaW4gSlNPTi5cbiAgICAgICAgICAgIGlmIChwcmVmZXJSZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gVHJ5IHRvIGVtdWxhdGUgdGhlIEpTT04gc2VjdGlvbiBvZiB0aGUgcmVzcG9uc2UgYm9keSBzZWN0aW9uIG9mXG4gICAgICAgICAgICAgIC8vIHRoZSBzcGVjOiBodHRwczovL3hoci5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlLWJvZHlcbiAgICAgICAgICAgICAgLy8gVGhhdCBpcyB0byBzYXksIHdlIHRyeSB0byBwYXJzZSBhcyBKU09OLCBidXQgaWYgYW55dGhpbmcgZ29lc1xuICAgICAgICAgICAgICAvLyB3cm9uZyByZXR1cm4gbnVsbC5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgY2FzZSAneG1sJzpcbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgY2FzZSAnYmxvYic6XG4gICAgICAgICAgY2FzZSAnZG9jdW1lbnQnOlxuICAgICAgICAgIGNhc2UgJ2FycmF5YnVmZmVyJzpcbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgLy8gSWYgYHByZWZpeExlbmAgaXMgc2V0LCBpdCBpbXBsaWVzIHRoZSByZXNwb25zZSBzaG91bGQgYmUgcGFyc2VkXG4gICAgICAgICAgICAvLyBhcyBKU09OIG9uY2UgdGhlIHByZWZpeCBvZiBsZW5ndGggYHByZWZpeExlbmAgaXMgc3RyaXBwZWQgZnJvbVxuICAgICAgICAgICAgLy8gaXQuIEVtdWxhdGUgdGhlIGJlaGF2aW9yIGFib3ZlIHdoZXJlIG51bGwgaXMgcmV0dXJuZWQgb24gZmFpbHVyZVxuICAgICAgICAgICAgLy8gdG8gcGFyc2UuXG4gICAgICAgICAgICBpZiAocHJlZml4TGVuKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dC5zdWJzdHJpbmcocHJlZml4TGVuKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKG5ldyBFcnJvcignQ291bGQgbm90IHBhcnNlIHJlc3BvbnNlLiAnICsgZS5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhYm9ydDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9zZXRBYm9ydGVkKHRydWUpO1xuICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBib2R5IFRoZSBnaXZlbiBib2R5IG9mIHRoZSByZXF1ZXN0IHRvIHRyeSBhbmQgZW5jb2RlLlxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gY29udGVudFR5cGUgVGhlIGdpdmVuIGNvbnRlbnQgdHlwZSwgdG8gaW5mZXIgYW4gZW5jb2RpbmdcbiAgICAgKiAgICAgZnJvbS5cbiAgICAgKiBAcmV0dXJuIHsqfSBFaXRoZXIgdGhlIGVuY29kZWQgYm9keSBhcyBhIHN0cmluZywgaWYgc3VjY2Vzc2Z1bCxcbiAgICAgKiAgICAgb3IgdGhlIHVuYWx0ZXJlZCBib2R5IG9iamVjdCBpZiBubyBlbmNvZGluZyBjb3VsZCBiZSBpbmZlcnJlZC5cbiAgICAgKi9cbiAgICBfZW5jb2RlQm9keU9iamVjdDogZnVuY3Rpb24oYm9keSwgY29udGVudFR5cGUpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYm9keTsgIC8vIEFscmVhZHkgZW5jb2RlZC5cbiAgICAgIH1cbiAgICAgIHZhciBib2R5T2JqID0gLyoqIEB0eXBlIHtPYmplY3R9ICovIChib2R5KTtcbiAgICAgIHN3aXRjaChjb250ZW50VHlwZSkge1xuICAgICAgICBjYXNlKCdhcHBsaWNhdGlvbi9qc29uJyk6XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvZHlPYmopO1xuICAgICAgICBjYXNlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5fd3d3Rm9ybVVybEVuY29kZShib2R5T2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib2R5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZW5jb2RlIGFzIHgtd3d3LWZvcm0tdXJsZW5jb2RlZC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC5cbiAgICAgKi9cbiAgICBfd3d3Rm9ybVVybEVuY29kZTogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB2YXIgcGllY2VzID0gW107XG4gICAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIC8vIFRPRE8ocmljdGljKTogaGFuZGxlIGFycmF5IHZhbHVlcyBoZXJlLCBpbiBhIGNvbnNpc3RlbnQgd2F5IHdpdGhcbiAgICAgICAgLy8gICBpcm9uLWFqYXggcGFyYW1zLlxuICAgICAgICBwaWVjZXMucHVzaChcbiAgICAgICAgICAgIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZShrZXkpICsgJz0nICtcbiAgICAgICAgICAgIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZShvYmplY3Rba2V5XSkpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICByZXR1cm4gcGllY2VzLmpvaW4oJyYnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBzdHIgQSBrZXkgb3IgdmFsdWUgdG8gZW5jb2RlIGFzIHgtd3d3LWZvcm0tdXJsZW5jb2RlZC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC5cbiAgICAgKi9cbiAgICBfd3d3Rm9ybVVybEVuY29kZVBpZWNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIC8vIFNwZWMgc2F5cyB0byBub3JtYWxpemUgbmV3bGluZXMgdG8gXFxyXFxuIGFuZCByZXBsYWNlICUyMCBzcGFjZXMgd2l0aCArLlxuICAgICAgLy8galF1ZXJ5IGRvZXMgdGhpcyBhcyB3ZWxsLCBzbyB0aGlzIGlzIGxpa2VseSB0byBiZSB3aWRlbHkgY29tcGF0aWJsZS5cbiAgICAgIGlmIChzdHIgPT09IG51bGwgfHwgc3RyID09PSB1bmRlZmluZWQgfHwgIXN0ci50b1N0cmluZykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbi9nLCAnXFxyXFxuJykpXG4gICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc3RhdHVzIGNvZGUgYW5kIHN0YXR1cyB0ZXh0LlxuICAgICAqL1xuICAgIF91cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0U3RhdHVzKHRoaXMueGhyLnN0YXR1cyk7XG4gICAgICB0aGlzLl9zZXRTdGF0dXNUZXh0KCh0aGlzLnhoci5zdGF0dXNUZXh0ID09PSB1bmRlZmluZWQpID8gJycgOiB0aGlzLnhoci5zdGF0dXNUZXh0KTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLXJlcXVlc3QuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjxzY3JpcHQ+XG5cbiAgLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgUG9seW1lci5QYXBlclNwaW5uZXJCZWhhdmlvciA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRGlzcGxheXMgdGhlIHNwaW5uZXIuXG4gICAgICAgKi9cbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfX2FjdGl2ZUNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFsdGVybmF0aXZlIHRleHQgY29udGVudCBmb3IgYWNjZXNzaWJpbGl0eSBzdXBwb3J0LlxuICAgICAgICogSWYgYWx0IGlzIHByZXNlbnQsIGl0IHdpbGwgYWRkIGFuIGFyaWEtbGFiZWwgd2hvc2UgY29udGVudCBtYXRjaGVzIGFsdCB3aGVuIGFjdGl2ZS5cbiAgICAgICAqIElmIGFsdCBpcyBub3QgcHJlc2VudCwgaXQgd2lsbCBkZWZhdWx0IHRvICdsb2FkaW5nJyBhcyB0aGUgYWx0IHZhbHVlLlxuICAgICAgICovXG4gICAgICBhbHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xvYWRpbmcnLFxuICAgICAgICBvYnNlcnZlcjogJ19fYWx0Q2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9fY29vbGluZ0Rvd246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIF9fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXM6IGZ1bmN0aW9uKGFjdGl2ZSwgY29vbGluZ0Rvd24pIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGFjdGl2ZSB8fCBjb29saW5nRG93biA/ICdhY3RpdmUnIDogJycsXG4gICAgICAgIGNvb2xpbmdEb3duID8gJ2Nvb2xkb3duJyA6ICcnXG4gICAgICBdLmpvaW4oJyAnKTtcbiAgICB9LFxuXG4gICAgX19hY3RpdmVDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmUsIG9sZCkge1xuICAgICAgdGhpcy5fX3NldEFyaWFIaWRkZW4oIWFjdGl2ZSk7XG4gICAgICB0aGlzLl9fY29vbGluZ0Rvd24gPSAhYWN0aXZlICYmIG9sZDtcbiAgICB9LFxuXG4gICAgX19hbHRDaGFuZ2VkOiBmdW5jdGlvbihhbHQpIHtcbiAgICAgIC8vIHVzZXItcHJvdmlkZWQgYGFyaWEtbGFiZWxgIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBwcm90b3R5cGUgZGVmYXVsdFxuICAgICAgaWYgKGFsdCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIHRoaXMuYWx0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBhbHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fc2V0QXJpYUhpZGRlbihhbHQ9PT0nJyk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYWx0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX19zZXRBcmlhSGlkZGVuOiBmdW5jdGlvbihoaWRkZW4pIHtcbiAgICAgIHZhciBhdHRyID0gJ2FyaWEtaGlkZGVuJztcbiAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfX3Jlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9fY29vbGluZ0Rvd24gPSBmYWxzZTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmh0bWwiLCJcbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItc3Bpbm5lci1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7LS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbjoxNTY4bXM7LS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbjoxMzMzbXM7LS1wYXBlci1zcGlubmVyLWZ1bGwtY3ljbGUtZHVyYXRpb246NTMzMm1zOy0tcGFwZXItc3Bpbm5lci1jb29sZG93bi1kdXJhdGlvbjo0MDBtc30jc3Bpbm5lckNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2RpcmVjdGlvbjpsdHJ9I3NwaW5uZXJDb250YWluZXIuYWN0aXZley13ZWJraXQtYW5pbWF0aW9uOmNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246Y29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlfUAtd2Via2l0LWtleWZyYW1lcyBjb250YWluZXItcm90YXRle3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGNvbnRhaW5lci1yb3RhdGV7dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uc3Bpbm5lci1sYXllcntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6MDt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLWNvbG9yOnZhcigtLXBhcGVyLXNwaW5uZXItY29sb3IsdmFyKC0tZ29vZ2xlLWJsdWUtNTAwKSl9LmxheWVyLTF7Ym9yZGVyLWNvbG9yOnZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcix2YXIoLS1nb29nbGUtYmx1ZS01MDApKX0ubGF5ZXItMntib3JkZXItY29sb3I6dmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yLHZhcigtLWdvb2dsZS1yZWQtNTAwKSl9LmxheWVyLTN7Ym9yZGVyLWNvbG9yOnZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcix2YXIoLS1nb29nbGUteWVsbG93LTUwMCkpfS5sYXllci00e2JvcmRlci1jb2xvcjp2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3IsdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCkpfS5hY3RpdmUgLnNwaW5uZXItbGF5ZXJ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGU7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7b3BhY2l0eToxfS5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItMXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0xLWZhZGUtaW4tb3V0O2FuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0xLWZhZGUtaW4tb3V0fS5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItMnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0yLWZhZGUtaW4tb3V0O2FuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0yLWZhZGUtaW4tb3V0fS5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItM3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0zLWZhZGUtaW4tb3V0O2FuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci0zLWZhZGUtaW4tb3V0fS5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItNHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci00LWZhZGUtaW4tb3V0O2FuaW1hdGlvbi1uYW1lOmZpbGwtdW5maWxsLXJvdGF0ZSxsYXllci00LWZhZGUtaW4tb3V0fUAtd2Via2l0LWtleWZyYW1lcyBmaWxsLXVuZmlsbC1yb3RhdGV7MTIuNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfTM3LjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0MDVkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNTQwZGVnKX02Mi41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNjc1ZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDgxMGRlZyl9ODcuNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDk0NWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEwODBkZWcpfX1Aa2V5ZnJhbWVzIGZpbGwtdW5maWxsLXJvdGF0ZXsxMi41JXt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9MjUle3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0zNy41JXt0cmFuc2Zvcm06cm90YXRlKDQwNWRlZyl9NTAle3RyYW5zZm9ybTpyb3RhdGUoNTQwZGVnKX02Mi41JXt0cmFuc2Zvcm06cm90YXRlKDY3NWRlZyl9NzUle3RyYW5zZm9ybTpyb3RhdGUoODEwZGVnKX04Ny41JXt0cmFuc2Zvcm06cm90YXRlKDk0NWRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxMDgwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTEtZmFkZS1pbi1vdXR7MCV7b3BhY2l0eToxfTI1JXtvcGFjaXR5OjF9MjYle29wYWNpdHk6MH04OSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGxheWVyLTEtZmFkZS1pbi1vdXR7MCV7b3BhY2l0eToxfTI1JXtvcGFjaXR5OjF9MjYle29wYWNpdHk6MH04OSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9dG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItMi1mYWRlLWluLW91dHswJXtvcGFjaXR5OjB9MTUle29wYWNpdHk6MH0yNSV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjF9NTEle29wYWNpdHk6MH10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbGF5ZXItMi1mYWRlLWluLW91dHswJXtvcGFjaXR5OjB9MTUle29wYWNpdHk6MH0yNSV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjF9NTEle29wYWNpdHk6MH10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBsYXllci0zLWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MH00MCV7b3BhY2l0eTowfTUwJXtvcGFjaXR5OjF9NzUle29wYWNpdHk6MX03NiV7b3BhY2l0eTowfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBsYXllci0zLWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MH00MCV7b3BhY2l0eTowfTUwJXtvcGFjaXR5OjF9NzUle29wYWNpdHk6MX03NiV7b3BhY2l0eTowfXRve29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTQtZmFkZS1pbi1vdXR7MCV7b3BhY2l0eTowfTY1JXtvcGFjaXR5OjB9NzUle29wYWNpdHk6MX05MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBsYXllci00LWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MH02NSV7b3BhY2l0eTowfTc1JXtvcGFjaXR5OjF9OTAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fS5jaXJjbGUtY2xpcHBlcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo1MCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1jb2xvcjppbmhlcml0fS5zcGlubmVyLWxheWVyOjphZnRlcntsZWZ0OjQ1JTt3aWR0aDoxMCU7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZH0uY2lyY2xlLWNsaXBwZXI6OmFmdGVyLC5zcGlubmVyLWxheWVyOjphZnRlcntjb250ZW50OicnO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3JkZXItd2lkdGg6dmFyKC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGgsM3B4KTtib3JkZXItY29sb3I6aW5oZXJpdDtib3JkZXItcmFkaXVzOjUwJX0uY2lyY2xlLWNsaXBwZXI6OmFmdGVye2JvdHRvbTowO3dpZHRoOjIwMCU7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5jaXJjbGUtY2xpcHBlci5sZWZ0OjphZnRlcntsZWZ0OjA7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTI5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEyOWRlZyl9LmNpcmNsZS1jbGlwcGVyLnJpZ2h0OjphZnRlcntsZWZ0Oi0xMDAlO2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEyOWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTI5ZGVnKX0uYWN0aXZlIC5jaXJjbGUtY2xpcHBlcjo6YWZ0ZXIsLmFjdGl2ZSAuZ2FwLXBhdGNoOjphZnRlcnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tcGFwZXItc3Bpbm5lci1leHBhbmQtY29udHJhY3QtZHVyYXRpb24pO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0uYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5sZWZ0OjphZnRlcnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmxlZnQtc3BpbjthbmltYXRpb24tbmFtZTpsZWZ0LXNwaW59LmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIucmlnaHQ6OmFmdGVyey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cmlnaHQtc3BpbjthbmltYXRpb24tbmFtZTpyaWdodC1zcGlufUAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzMGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzMGRlZyl9fUBrZXlmcmFtZXMgbGVmdC1zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMTMwZGVnKX01MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgxMzBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHQtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEzMGRlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEzMGRlZyl9fUBrZXlmcmFtZXMgcmlnaHQtc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpfTUwJXt0cmFuc2Zvcm06cm90YXRlKDVkZWcpfXRve3RyYW5zZm9ybTpyb3RhdGUoLTEzMGRlZyl9fSNzcGlubmVyQ29udGFpbmVyLmNvb2xkb3duey13ZWJraXQtYW5pbWF0aW9uOmNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZSxmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTthbmltYXRpb246Y29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlLGZhZGUtb3V0IHZhcigtLXBhcGVyLXNwaW5uZXItY29vbGRvd24tZHVyYXRpb24pIGN1YmljLWJlemllciguNCwwLC4yLDEpfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtb3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1zdHlsZXMuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbFwiPlxuXG48IS0tXG4gIGBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNgXG5cbiAgKipGcm9tIHYzLngueCwgdGhpcyBjb21wb25lbnQgb25seSB3b3JrcyB3aXRoIFBvbHltZXIgMS43KyBvciAyLjArLioqXG5cbiAgWyFbUHVibGlzaGVkIG9uIHdlYmNvbXBvbmVudHMub3JnXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3dlYmNvbXBvbmVudHMub3JnLXB1Ymxpc2hlZC1ibHVlLnN2ZyldKGh0dHBzOi8vd3d3LndlYmNvbXBvbmVudHMub3JnL2VsZW1lbnQvZWxsaXB0aWNhbGpzL3BhcGVyLWF1dG9jb21wbGV0ZSlcblxuICBbIVtTYXVjZSBUZXN0IFN0YXR1c10oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2Jyb3dzZXItbWF0cml4L2podWVzb3Muc3ZnKV0oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL3Uvamh1ZXNvcylcblxuICBBbGxvd3MgdG8gYWRkIGF1dG9jb21wbGV0ZSBjYXBhYmlsaXRpZXMgdG8gYW55IGlucHV0IGZpZWxkLiBUaGlzIGlzIGRlc2lyYWJsZSB3aGVuIHlvdSBoYXZlIGFuIGlucHV0IGZpZWxkIHdpdGggY3VzdG9tXG4gIGxvZ2ljIGFuZCB5b3UganVzdCB3YW50IHRvIGFkZCB0aGUgZmVhdHVyZSB0byBoZWxwIHVzZXJzIHdpdGggdGhlIHNlbGVjdGlvbi4gSWYgeW91IHdhbnQgdG8gdXNlIGl0IGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgYSByZWd1bGFyIGA8cGFwZXItaW5wdXQ+YCwgeW91IGNhbiB1c2UgYDxwYXBlci1hdXRvY29tcGxldGU+YC5cblxuICBFeGFtcGxlOlxuICBgYGBcbiAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS13cmFwcGVyXCI+XG4gICAgPHBhcGVyLWlucHV0IGlkPVwibXlJbnB1dFwiIGxhYmVsPVwiU2VsZWN0IFN0YXRlXCI+PC9wYXBlci1pbnB1dD5cblxuICAgIDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcbiAgICAgIGZvcj1cIm15SW5wdXRcIlxuICAgICAgc291cmNlPVwiW1thY2NvdW50c11dXCI+PC9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+XG4gIDwvZGl2PlxuICBgYGBcblxuICBJdCBpcyAqKmltcG9ydGFudCB0byBwcm92aWRlIGJvdGggYHRleHRQcm9wZXJ0eWAgYW5kIGB2YWx1ZVByb3BlcnR5YCB3aGVuIHdvcmtpbmcgd2l0aCBhIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24gYW5kXG4gIG9yIGN1c3RvbSB0ZW1wbGF0ZXMuKiogVGhleSBhcmUgbmVlZGVkIHRvIGtlZXAgdGhlIGNvbXBvbmVudCBhY2Nlc3NpYmxlIGFuZCBmb3IgdGhlIGV2ZW50cyAoZS5nLiBvblNlbGVjdCkgdG8ga2VlcFxuICB3b3JraW5nLlxuXG4gICMjIyBBYm91dCBQb2x5bWVyIDEueCBhbmQgMi54IENvbXBhdGliaWxpdHlcbiAgRnJvbSB2ZXJzaW9uIGAzLngueGAsIHRoaXMgY29tcG9uZW50IHdvcmsgd2l0aCBib3RoIFBvbHltZXIgMS43KyBvciBQb2x5bWVyIDIuMCsgUGxlYXNlIHRha2UgYSBsb29rIHRvIHRoZVxuICBbTUlHUkFUSU9OLm1kXSguL01JR1JBVElPTi5tZCkgZmlsZSB0aGF0IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgIyMjIEN1c3RvbSBzZWFyY2hcbiAgVGhpcyBjb21wb25lbnQgaGFzIHRoZSBwdWJsaWMgbWV0aG9kIGBxdWVyeUZuYCB0aGF0IGlzIGNhbGxlZCBpbiBlYWNoIGtleSBzdHJva2UgYW5kIGl0IGlzIHJlc3BvbnNpYmxlIHRvIHF1ZXJ5XG4gIGFsbCBpdGVtcyBpbiB0aGUgYHNvdXJjZWAgYW5kIHJldHVybnMgb25seSB0aG9zZSBpdGVtcyB0aGF0IG1hdGNoZXMgY2VydGFpbiBmaWx0ZXJpbmcgY3JpdGVyaWEuIEJ5IGRlZmF1bHQsIHRoaXNcbiAgY29tcG9uZW50IHNlYXJjaCBmb3IgaXRlbXMgdGhhdCBzdGFydCB3aXRoIHRoZSByZWNlbnQgcXVlcnkgKGNhc2UgaW5zZW5zaXRpdmUpLlxuICBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgcHJvdmlkaW5nIHlvdXIgb3duIHF1ZXJ5IGZ1bmN0aW9uLCBhcyBsb25nIGFzIHRoZXNlIHR3byByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGw6XG5cbiAgLSBUaGUgcXVlcnkgZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuXG4gIC0gVGhlIEFQSSBpcyByZXNwZWN0ZWQgYW5kIHRoZSBtZXRob2QgYWx3YXlzIHJldHVybiBhbiBBcnJheS5cblxuXG4gIFRoZSB0ZW1wbGF0ZSB1c2UgdG8gcmVuZGVyIGVhY2ggc3VnZ2VzdGlvbiBkZXBlbmRzIG9uIHRoZSBzdHJ1Y3R1cmUgb2YgZWFjaCBvYmplY3QgdGhhdCB0aGlzIG1ldGhvZCByZXR1cm5zLiBGb3IgdGhlXG4gIGRlZmF1bHQgdGVtcGxhdGUsIGVhY2ggc3VnZ2VzdGlvbiBzaG91bGQgZm9sbG93IHRoaXMgb2JqZWN0IHN0cnVjdHVyZTpcblxuICBgYGBcbiAgICB7XG4gICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgfVxuICBgYGBcblxuICBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIGEgbG9jYWwgZGF0YSBzb3VyY2UgaXMgdXNlZC4gV2hlbiB1c2luZyBhIGByZW1vdGVEYXRhU291cmNlYCB1c2VyIGlzIHJlc3BvbnNpYmxlIG9mXG4gIGRvaW5nIHRoZSBzZWFyY2ggYW5kIHNwZWNpZnkgc3VnZ2VzdGlvbnMgbWFudWFsbHkuXG5cbiAgIyMjIEN1c3RvbSB0ZW1wbGF0ZXNcbiAgQSB0ZW1wbGF0ZSBmb3IgZWFjaCBzdWdnZXN0aW9uIGNhbiBiZSBwcm92aWRlZCwgYnV0IGZvciBub3csIHRoZXJlIGFyZSBsaW1pdGF0aW9ucyBpbiB0aGUgd2F5IHlvdSBjYW4gY3VzdG9taXplXG4gIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHJlYWQgdGhlIHRoZSBmb2xsb3dpbmcgc2VjdGlvbnMgY2FyZWZ1bGx5LlxuICBJbiBvcmRlciB0byBzZXQgeW91ciBvd24gdGVtcGxhdGUsIHlvdSBuZWVkIHRvIGFkZCBhIGA8dGVtcGxhdGU+YCB0YWcgd2l0aCB0aGUgc2xvdCBuYW1lXG4gIGBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlYCBhbmQgYSBzdHJ1Y3R1cmUgZXF1aXZhbGVudCB0byB0aGUgb25lIHNob3duIGluIHRoZSBgPGFjY291bnQtYXV0b2NvbXBsZXRlPmAgY29tcG9uZW50IGluXG4gIHRoZSBkZW1vLlxuXG4gIFlvdSBuZWVkIHRvIGFsd2F5cyBtYWludGFpbiB0aGlzIHN0cnVjdHVyZS4gVGhlbiB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgY29udGVudCBvZiBwYXBlci1pdGVtLiBUaGVzZSBhcmUgdGhlIHJlYXNvbnNcbiAgd2h5IHlvdSBuZWVkIHRvIG1haW50YWluIGl0OlxuXG4gIC0gYG9uU2VsZWN0SGFuZGxlcmAgaXQgaXMgdmVyeSBpbXBvcnRhbnQgYmVjYXVzZSBpdCB3aWxsIG5vdGlmeSB0aGUgYGF1dG9jb21wbGV0ZWAgY29tcG9uZW50IHdoZW4gdXNlciBzZWxlY3RzIG9uZSBpdGVtLlxuICBJZiB5b3UgZG9uJ3QgYWRkIHRoaXMgb3B0aW9uLCB3aGVuIHVzZXIgY2xpY2tzIGluIG9uZSBvZiB0aGUgaXRlbXMsIG5vdGhpbmcgd2lsbCBoYXBwZW4uXG4gIC0gYGlkYCwgYHJvbGVgIGFuZCBgYXJpYS1zZWxlY3RlZGAgbmVlZCB0byBiZSB0aGVyZSBmb3IgYWNjZXNzaWJpbGl0eSByZWFzb25zLiBJZiB5b3UgZG9uJ3Qgc2V0IHRoZW0sIHRoZSBjb21wb25lbnRcbiAgd2lsbCBjb250aW51ZSB3b3JraW5nIGJ1dCBpdCB3aWxsIG5vdCBiZSBhY2Nlc3NpYmxlIGZvciB1c2VyIHdpdGggZGlzYWJpbGl0aWVzLlxuXG5cbiAgSXQgaXMgaW1wb3J0YW50IHRvIGNsYXJpZnkgdGhhdCBtZXRob2RzIGBfb25TZWxlY3RgIGFuZCBgX2dldFN1Z2dlc3Rpb25JZGAgZG8gbm90IG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQuIFRoZXkgYXJlXG4gIHBhcnQgb2YgdGhlIGxvZ2ljIG9mIGBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNgLlxuXG4gIFdoZW4gcHJvdmlkaW5nIHlvdXIgb3duIGN1c3RvbSB0ZW1wbGF0ZSwgeW91IG1pZ2h0IGFsc28gbmVlZCB0byBwcm92aWRlIHlvdXIgb3duIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24uIFRoZSByZWFzb25cbiAgZm9yIHRoYXQgaXMgdGhhdCB0aGUgZGVmYXVsdCBzZWFyY2ggZnVuY3Rpb24gb25seSBleHBvc2VzIHRleHQgYW5kIHZhbHVlIGluIHRoZSByZXN1bHRzLiBJZiBlYWNoIGl0ZW0gaW4geW91ciBkYXRhXG4gIHNvdXJjZSBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLCB0aGVuIHlvdSB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gU2VlIHRoZSBjb2RlIG9mIGA8YWRkcmVzcy1hdXRvY29tcGxldGU+YFxuICBlbGVtZW50IGluIHRoZSBkZW1vIGZvbGRlciBmb3IgYSBjb21wbGV0ZSBleGFtcGxlLlxuXG4gIEFub3RoZXIgaW1wb3J0YW50IHRoaW5nIHRvIHBvaW50IG91dCBpcyByZWxhdGVkIHRvIHRoZSBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gaW4gdGhlIHJlc3VsdHMuIFRoZSBoZWlnaHQgb2ZcbiAgdGhlIHN1Z2dlc3Rpb24gdGVtcGxhdGUgY2hhbmdlcyBkeW5hbWljYWxseSBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiBhIHN1Z2dlc3Rpb24gaXRlbS4gSG93ZXZlciwgdGhlIGZvbGxvd2luZ1xuICBhc3N1bXB0aW9ucyB3ZXJlIG1hZGU6XG4gIC0gQWxsIHN1Z2dlc3Rpb25zIGl0ZW1zIGhhdmUgdGhlIHNhbWUgaGVpZ2h0XG4gIC0gVGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gaXMgZml4ZWQgYW5kIGNhbiBiZSBkZXRlcm1pbmVkIGF0IGFueSB0aW1lLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gdXNlIGltYWdlcyBpbiB0aGVcbiAgcmVzdWx0cywgbWFrZSBzdXJlIHRoZXkgaGF2ZSBhIHBsYWNlaG9sZGVyIG9yIGEgZml4ZWQgaGVpZ2h0LlxuXG5cbiAgIyMjIFN0eWxpbmdcblxuICBgPHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucz5gIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGluc1xuICBmb3Igc3R5bGluZzpcblxuICBDdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbiAgLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbiAgYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IHBhcGVyIGl0ZW0gbWluIGhlaWdodCB8IGAzNnB4YFxuICBgLS1zdWdnZXN0aW9ucy13cmFwcGVyYCB8IG1peGluIHRvIGFwcGx5IHRvIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXIgfCBge31gXG4gIGAtLXN1Z2dlc3Rpb25zLWl0ZW1gIHwgbWl4aW4gdG8gYXBwbHkgdG8gdGhlIHN1Z2dlc3Rpb25zIGl0ZW1zIHwgYHt9YFxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG4gIFRoaXMgY29tcG9uZW50IGV4cG9zZXMgY2VydGFpbiBuZWNlc3NhcnkgdmFsdWVzIGluIG9yZGVyIHRvIG1ha2UgeW91ciBjb21wb25lbnQgYWNjZXNzaWJsZS4gV2hlbiBjaGVja2luZyB0aGUgQVJJQVxuICBzcGVjcywgaXQgaXMgc2FpZCB0aGF0IHlvdSBuZWVkIHRvIGluZm9ybSB1c2VycyBvZiB0aGUgZm9sbG93aW5nIGNoYW5nZXM6XG4gIC0gV2hldGhlciB0aGUgcG9wdXAgd2l0aCBzdWdnZXN0aW9ucyBpcyBvcGVuIG9yIG5vdC5cbiAgLSBJZCBvZiB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIGVsZW1lbnRcblxuIFlvdSBjYW4gYWNjZXNzIHRoZXNlIHZhbHVlcyB1c2luZyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IGBpc09wZW5gIGFuZCBgaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uYC4gVGhlIGlkIG9mIGVhY2hcbiBlbGVtZW50IGluIGhpZ2hsaWdodGVkU3VnZ2VzdGlvbiBhIHJhbmRvbSBhbmQgdW5pcXVlIGlkLlxuXG4gSW4gYWRkaXRpb24sIGFzIGxvbmcgYXMgZGV2ZWxvcGVycyBmb2xsb3cgdGhlIGdlbmVyYWwgc3RydWN0dXJlIG9mIGVhY2ggc3VnZ2VzdGlvbiB0ZW1wbGF0ZSwgdGhlIGZvbGxvd2luZyBBMTFZXG4gZmVhdHVyZXMgYXJlIHNldCBpbiBlYWNoIHN1Z2dlc3Rpb246XG4gLSBgcm9sZT1cIm9wdGlvblwiYFxuIC0gYGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlfGZhbHNlXCJgLiBUaGlzIHZhbHVlIHdpbGwgYmUgZmFsc2UgZm9yIGFsbCBzdWdnZXN0aW9uIGV4Y2VwdCBpbiB0aGUgb25lIHdoaWNoIGlzIGN1cnJlbnRseVxuIGhpZ2hsaWdodGVkLlxuXG4gIEBkZW1vIGRlbW8vcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLWRlbW8uaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBwYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNTJweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgICBAYXBwbHkgLS1zdWdnZXN0aW9ucy13cmFwcGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWl0ZW0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCAzNnB4KTtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXN1Z2dlc3Rpb25zLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW06aG92ZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaXRlbTpob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmFjdGl2ZSxcbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pdGVtLmFjdGl2ZSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBJRTExIHBhcGVyLWl0ZW0gbWluLWhlaWdodCBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaXRlbS9pc3N1ZXMvMzVcbiAgICAgICAqL1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDM2cHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2PlxuICAgICAgPCEtLSB1bnNlbGVjdGFibGUgaXMgbmVlZGVkIHRvIGZpeCBhbiBpc3N1ZSByZWxhdGVkIHRvIHRoZSBmb2N1cyBiZWluZyB0YWtlbiBhd2F5IHdoZW4gY2xpY2tpbmcgaW4gdGhlXG4gICAgICAgcmVzdWx0cyBzY3JvbGxiYXIgLS0+XG4gICAgICA8cGFwZXItbWF0ZXJpYWwgZWxldmF0aW9uPVwiMVwiIGlkPVwic3VnZ2VzdGlvbnNXcmFwcGVyXCIgdW5zZWxlY3RhYmxlPVwib25cIj48L3BhcGVyLW1hdGVyaWFsPlxuXG4gICAgICA8IS0tIERlZmF1bHQgc3VnZ2VzdGlvbiB0ZW1wbGF0ZSAtLT5cbiAgICAgIDx0ZW1wbGF0ZSBpZD1cImRlZmF1bHRUZW1wbGF0ZVwiPlxuICAgICAgICA8cGFwZXItaXRlbSBpZCQ9XCJbW19nZXRTdWdnZXN0aW9uSWQoaW5kZXgpXV1cIiByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgb24tdGFwPVwiX29uU2VsZWN0XCI+XG4gICAgICAgICAgPGRpdj5bW19nZXRJdGVtVGV4dChpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPHBhcGVyLXJpcHBsZT48L3BhcGVyLXJpcHBsZT5cbiAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICA8IS0tIEN1c3RvbSB0ZW1wbGF0ZSAtLT5cbiAgPHNsb3QgaWQ9XCJ0ZW1wbGF0ZXNcIiBuYW1lPVwiYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZVwiPjwvc2xvdD5cbiAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48c2NyaXB0PlxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIERJUkVDVElPTiA9IHtcbiAgICAgIFVQOiAndXAnLFxuICAgICAgRE9XTjogJ2Rvd24nXG4gICAgfTtcblxuICAgIHZhciBLRVlfQ09ERVMgPSB7XG4gICAgICBMRUZUX0FSUk9XOiAzNyxcbiAgICAgIFJJR0hUX0FSUk9XOiAzOSxcbiAgICAgIFVQX0FSUk9XOiAzOCxcbiAgICAgIERPV05fQVJST1c6IDQwLFxuICAgICAgRU5URVI6IDEzLFxuICAgICAgRVNDQVBFOiAyN1xuICAgIH07XG5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zJyxcblxuICAgICAgYmVoYXZpb3JzOiBbXG4gICAgICAgIFBvbHltZXIuVGVtcGxhdGl6ZXJcbiAgICAgIF0sXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElkIG9mIGlucHV0XG4gICAgICAgICAqL1xuICAgICAgICAnZm9yJzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdHJ1ZWAgaWYgdGhlIHN1Z2dlc3Rpb25zIGxpc3QgaXMgb3BlbiwgYGZhbHNlIG90aGVyd2lzZWBcbiAgICAgICAgICovXG4gICAgICAgIGlzT3Blbjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGxlbmd0aCB0byB0cmlnZ2VyIHN1Z2dlc3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWF4IG51bWJlciBvZiBzdWdnZXN0aW9ucyB0byBiZSBkaXNwbGF5ZWQgd2l0aG91dCBzY3JvbGxpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heFZpZXdhYmxlSXRlbXM6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdGV4dCBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dFByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdmFsdWUgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlUHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHNvdXJjZWAgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBvcHRpb25zIHRvIGV4ZWN1dGUgdGhlIGF1dG9jb21wbGV0ZSBmZWF0dXJlXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgb3B0aW9uLiBUaGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgZGVwZW5kcyBvbiB0aGVcbiAgICAgICAgICogIHN0cnVjdHVyZSBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGRhdGEgc291cmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb246IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIHRvIGEgcmVtb3RlIGRhdGEgc291cmNlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGVTb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCB0eXBlIHNlcGFyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnROYW1lc3BhY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICctJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb24uIFRoZSBzdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdCBpczpcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqIHtcbiAgICAgICAgICogICAgZWxlbWVudElkOiBJRCAvLyBpZCBvZiB0aGUgaGlnaGxpZ2h0ZWQgRE9NIGVsZW1lbnRcbiAgICAgICAgICogICAgb3B0aW9uOiAvLyBoaWdobGlnaHRlZCBvcHRpb24gZGF0YVxuICAgICAgICAgKiB9XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIHZhbHVlOiB7fSxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgYXZhaWxhYmxlIGl0ZW1zLiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IHVzZWQgYnkgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLFxuICAgICAgICAgKiBpdCBpcyBhbHNvIGV4cG9zZWQgaGVyZSBzbyBpdCBpcyBwb3NzaWJsZSB0byBwcm92aWRlIGEgY3VzdG9tIHF1ZXJ5Rm4uXG4gICAgICAgICAqL1xuICAgICAgICAgcXVlcnlGbjoge1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgaXQgd2lsbCBhbHdheXMgaGlnaGxpZ2h0IHRoZSBmaXJzdCByZXN1bHQgZWFjaCB0aW1lIG5ldyBzdWdnZXN0aW9ucyBhcmUgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0Rmlyc3Q6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgX3N1Z2dlc3Rpb25zYCBBcnJheSB3aXRoIHRoZSBhY3R1YWwgc3VnZ2VzdGlvbnMgdG8gZGlzcGxheVxuICAgICAgICAgKi9cbiAgICAgICAgX3N1Z2dlc3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfb25TdWdnZXN0aW9uc0NoYW5nZWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB0aGUgcG9zaXRpb24gaW4gdGhlIHN1Z2dlc3Rpb25zIHBvcHVwIG9mIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgZWxlbWVudCwgYmVpbmcgYDBgIHRoZSBmaXJzdCBvbmUsXG4gICAgICAgICAqIGFuZCBgdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMWAgdGhlIHBvc2l0aW9uIG9mIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICovXG4gICAgICAgIF9jdXJyZW50SW5kZXg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsLiBUaGVuIHRoZSBgc2Nyb2xsVG9wYCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIG11bHRpcGx5aW5nIHRoZVxuICAgICAgICAgKiBgX2l0ZW1IZWlnaHRgIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICAgICAqL1xuICAgICAgICBfc2Nyb2xsSW5kZXg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBlbGVtZW50IGluIHBpeGVsc1xuICAgICAgICAgKi9cbiAgICAgICAgX2l0ZW1IZWlnaHQ6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDM2LFxuICAgICAgICAgIG9ic2VydmVyOiAnX2l0ZW1IZWlnaHRDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIF92YWx1ZToge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dDoge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyB2YWx1ZSBpcyB1c2VkIGFzIGEgYmFzZSB0byBnZW5lcmF0ZSB1bmlxdWUgaW5kaXZpZHVhbCBpZHMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIGVhY2ggc3VnZ2VzdGlvbiBmb3JcbiAgICAgICAgICogYWNjZXNzaWJpbGl0eSByZWFzb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX2lkSXRlbVNlZWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICdhcmlhLScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICctJyArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSksXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIGJpbmRlZCBmdW5jdGlvbnMgc28gd2UgY2FuIGNhbGwgcmVtb3ZlRXZlbnRMaXN0ZW5lciBvbiBlbGVtZW50IGRldGFjaGVkXG4gICAgICAgICAqL1xuICAgICAgICBfYmluZGVkRnVuY3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBfb25LZXlwcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgX29uRm9jdXM6IG51bGwsXG4gICAgICAgICAgICAgIF9vbkJsdXI6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRoZSBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gaGFzIGJlZW4gYWxyZWFkeSBjYWxjdWxhdGVkLlxuICAgICAgICAgKiBUaGUgYXNzdW1wdGlvbiBpcyB0aGF0IGl0ZW0gaGVpZ2h0IGlzIGZpeGVkIGFuZCBpdCB3aWxsIG5vdCBjaGFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBfaGFzSXRlbUhpZ2hCZWVuQ2FsY3VsYXRlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvIGF2b2lkIHVubmVjZXNzYXJ5IGFjY2VzcyB0byB0aGUgRE9NLCB3ZSBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHRlbXBsYXRlIGJlaW5nIHVzZWRcbiAgICAgICAgICovXG4gICAgICAgIF9fY3VzdG9tVHBsUmVmOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVsZW1lbnQgTGlmZWN5Y2xlXG5cbiAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCB0byBiZSBhYmxlIHRvIGFjY2VzcyBjb21wb25lbnQgbWV0aG9kcyBpbnNpZGUgdGhlIHRlbXBsYXRlcyB1c2VkIHdpdGggVGVtcGxhdGl6ZXJcbiAgICAgICAgdGhpcy5kYXRhSG9zdCA9IHRoaXM7XG5cbiAgICAgICAgLy8gTmVlZCB0byBjYXB0dXJlIG1vdXNlZG93biB0byBwcmV2ZW50IHRoZSBmb2N1cyB0byBzd2l0Y2ggZnJvbSBpbnB1dCBmaWVsZCB3aGVuIHVzZXIgY2xpY2tzIGluIHRoZSBzY3JvbGxiYXJcbiAgICAgICAgLy8gYW5kIHRoZSBhdXRvc3VnZ2VzdCBpcyBhIGNoaWxkIG9mIGFuIGVsZW1lbnQgd2l0aCB0YWJpbmRleC5cbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIGVuZm9yY2UgdGhhdCBkYXRhSG9zdCBpcyB0aGUgc3VnZ2VzdGlvbnMgYW5kIG5vdCB0aGUgY3VzdG9tIHBvbHltZXIgZWxlbWVudCB3aGVyZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgLy8gaXMgZGVmaW5lZC4gSWYgd2UgZG8gbm90IGRvIHRoaXMsIGl0IHdvbid0IGJlIHBvc3NpYmxlIHRvIGFjY2VzcyBwYXBlclN1Z2dlc3Rpb25zIGZyb20gdGhlIGN1c3RvbSB0ZW1wbGF0ZVxuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGFjaGlldmUgdGhpcyB3aXRob3V0IG1vZGlmeWluZyBQb2x5bWVyIGludGVybmFsIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5fc3VnZ2VzdGlvblRlbXBsYXRlLl9fZGF0YUhvc3QgPSB0aGlzO1xuICAgICAgICB0aGlzLnRlbXBsYXRpemUodGhpcy5fc3VnZ2VzdGlvblRlbXBsYXRlKTtcbiAgICAgIH0sXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5mb3IpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgaW5wdXQgZmllbGQgd2l0aCBpZDogJyArIHRoaXMuZm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25LZXlwcmVzcyA9IHRoaXMuX29uS2V5cHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbktleXByZXNzKTtcbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uRm9jdXMpO1xuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIpO1xuICAgICAgfSxcblxuICAgICAgZGV0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEZWJvdW5jZXIoJ19vblN1Z2dlc3Rpb25DaGFuZ2VkJyk7XG5cbiAgICAgICAgdGhpcy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uS2V5cHJlc3MpO1xuICAgICAgICB0aGlzLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25Gb2N1cyk7XG4gICAgICAgIHRoaXMuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uQmx1cik7XG5cbiAgICAgICAgdGhpcy5faW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9fY3VzdG9tVHBsUmVmID0gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVsZW1lbnQgQmVoYXZpb3JcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIHRleHQgcHJvcGVydHkgZnJvbSB0aGUgc3VnZ2VzdGlvblxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN1Z2dlc3Rpb24gVGhlIHN1Z2dlc3Rpb24gaXRlbVxuICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICBfZ2V0SXRlbVRleHQ6IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9uW3RoaXMudGV4dFByb3BlcnR5XTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hvdyB0aGUgc3VnZ2VzdGlvbnMgd3JhcHBlclxuICAgICAgICovXG4gICAgICBfc2hvd1N1Z2dlc3Rpb25zV3JhcHBlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNXcmFwcGVyID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcjtcblxuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZSB0aGUgc3VnZ2VzdGlvbnMgd3JhcHBlclxuICAgICAgICovXG4gICAgICBfaGlkZVN1Z2dlc3Rpb25zV3JhcHBlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNXcmFwcGVyID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcjtcblxuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uID0ge307XG5cbiAgICAgICAgdGhpcy5fY2xlYXJTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgX2hhbmRsZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW90ZVNvdXJjZSkgdGhpcy5fY3JlYXRlU3VnZ2VzdGlvbnMoZXZlbnQpO1xuICAgICAgICBlbHNlIHRoaXMuX3JlbW90ZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICBfcmVtb3RlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5wdXQudmFsdWU7XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB2YWx1ZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2NoYW5nZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9iaW5kU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgaWYgKGFyci5sZW5ndGggJiYgYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IGFycjtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2NyZWF0ZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX3Njcm9sbEluZGV4ID0gMDtcblxuICAgICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgLy8gU2VhcmNoIGZvciB0aGUgd29yZCBpbiB0aGUgc291cmNlIHByb3BlcnRpZXMuXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIENhbGwgcXVlcnlGbi4gVXNlciBjYW4gb3ZlcnJpZGUgcXVlcnlGbigpIHRvIHByb3ZpZGUgY3VzdG9tIHNlYXJjaCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMucXVlcnlGbih0aGlzLnNvdXJjZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXQgX3N1Z2dlc3Rpb25UZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19jdXN0b21UcGxSZWYpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2N1c3RvbVRwbFJlZjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuX19jdXN0b21UcGxSZWYgPSBjdXN0b21UZW1wbGF0ZS5sZW5ndGggPiAwID8gY3VzdG9tVGVtcGxhdGVbMF0gOiB0aGlzLiQuZGVmYXVsdFRlbXBsYXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9fY3VzdG9tVHBsUmVmO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW5kZXIgc3VnZ2VzdGlvbnMgaW4gdGhlIHN1Z2dlc3Rpb25zV3JhcHBlciBjb250YWluZXJcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHN1Z2dlc3Rpb25zIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHN1Z2dlc3Rpb25zIHRvIGJlIHJlbmRlcmVkLiBUaGlzIHZhbHVlIGlzIG5vdCBvcHRpb25hbCwgc29cbiAgICAgICAqICAgIGluIGNhc2Ugbm8gc3VnZ2VzdGlvbnMgbmVlZCB0byBiZSByZW5kZXJlZCwgeW91IHNob3VsZCBlaXRoZXIgbm90IGNhbGwgdGhpcyBtZXRob2Qgb3IgcHJvdmlkZSBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAqL1xuICAgICAgX3JlbmRlclN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gUG9seW1lci5kb20odGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlcik7XG4gICAgICAgIHZhciBpc1BvbHltZXIxID0gIVBvbHltZXIuRWxlbWVudDtcblxuICAgICAgICB0aGlzLl9jbGVhclN1Z2dlc3Rpb25zKCk7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChzdWdnZXN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0LCBpbmRleCkge1xuICAgICAgICAgIC8vIGNsb25lIHRoZSB0ZW1wbGF0ZSBhbmQgYmluZCB3aXRoIHRoZSBtb2RlbFxuICAgICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc3RhbXAoKTtcbiAgICAgICAgICBjbG9uZS5pdGVtID0gcmVzdWx0O1xuICAgICAgICAgIGNsb25lLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAvLyBEaWZmZXJlbnQgc3RhbXBpbmcgbW9kZSBiYXNlZCBvbiBQb2x5bWVyIHZlcnNpb25cbiAgICAgICAgICBpZiAoaXNQb2x5bWVyMSkge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUucm9vdC5xdWVyeVNlbGVjdG9yKCcqJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZS5yb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG5cbiAgICAgIF9jbGVhclN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IFBvbHltZXIuZG9tKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIpLFxuICAgICAgICAgIGxhc3Q7XG4gICAgICAgIHdoaWxlIChsYXN0ID0gc3VnZ2VzdGlvbnNDb250YWluZXIubGFzdENoaWxkKSBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuZXIgdG8gY2hhbmdlcyB0byBfc3VnZ2VzdGlvbnMgc3RhdGVcbiAgICAgICAqL1xuICAgICAgX29uU3VnZ2VzdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2UoJ19vblN1Z2dlc3Rpb25DaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlclN1Z2dlc3Rpb25zKHRoaXMuX3N1Z2dlc3Rpb25zKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93U3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuXG4gICAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGwoKTtcblxuICAgICAgICAgIGlmICghdGhpcy5faGFzSXRlbUhpZ2hCZWVuQ2FsY3VsYXRlZCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQgPSB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWl0ZW0nKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIG1heEhlaWdodCBvZiBzdWdnZXN0aW9ucyB3cmFwcGVyIGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSByZXN1bHRcbiAgICAgICAgICAgICAgdGhpcy5faXRlbUhlaWdodCA9IGZpcnN0U3VnZ2VzdGlvbkVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgIHRoaXMuX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodEZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3Rpb246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLl9zdWdnZXN0aW9uc1tpbmRleF07XG5cbiAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBzZWxlY3RlZE9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RlZE9wdGlvbjtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgIHRoaXMuX2VtcHR5SXRlbXMoKTtcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQoc2VsZWN0ZWRPcHRpb24sICdzZWxlY3RlZCcpO1xuXG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBhbGwgc3VnZ2VzdGlvbiBlbGVtZW50c1xuICAgICAgICogQHJldHVybiB7QXJyYXl9IGEgbGlzdCBvZiBhbGwgc3VnZ2VzdGlvbiBlbGVtZW50c1xuICAgICAgICovXG4gICAgICBfZ2V0SXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgncGFwZXItaXRlbScpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbXB0eSB0aGUgbGlzdCBvZiBjdXJyZW50IHN1Z2dlc3Rpb25zIGJlaW5nIGRpc3BsYXllZFxuICAgICAgICovXG4gICAgICBfZW1wdHlJdGVtczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgfSxcblxuICAgICAgX2dldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAoIWlkKSBpZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIHRoZSBhY3RpdmUgc3RhdGUgZnJvbSBhbGwgc3VnZ2VzdGlvbiBpdGVtc1xuICAgICAgICovXG4gICAgICBfcmVtb3ZlQWN0aXZlOiBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgW10uc2xpY2UuY2FsbChpdGVtcykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEtleSBwcmVzcyBldmVudCBoYW5kbGVyXG4gICAgICAgKi9cbiAgICAgIF9vbktleXByZXNzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOX0FSUk9XOlxuICAgICAgICAgIHRoaXMuX21vdmVIaWdobGlnaHRlZChESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS0VZX0NPREVTLlVQX0FSUk9XOlxuICAgICAgICAgIHRoaXMuX21vdmVIaWdobGlnaHRlZChESVJFQ1RJT04uVVApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjpcbiAgICAgICAgICB0aGlzLl9rZXllbnRlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5FU0NBUEU6XG4gICAgICAgICAgdGhpcy5faGlkZVN1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEZvciBsZWZ0IGFuZCByaWdodCBhcnJvdywgY29tcG9uZW50IHNob3VsZCBkbyBub3RoaW5nXG4gICAgICAgIGNhc2UgS0VZX0NPREVTLkxFRlRfQVJST1c6XG4gICAgICAgICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgICAgIGNhc2UgS0VZX0NPREVTLlJJR0hUX0FSUk9XOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVN1Z2dlc3Rpb25zKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUga2V5IEVOVEVSIHByZXNzIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9rZXllbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snICYmIHRoaXMuX2N1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY3VycmVudEluZGV4O1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogIE1vdmUgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgc3VnZ2VzdGlvbiB1cCBvciBkb3duXG4gICAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBQb3NzaWJsZSB2YWx1ZXMgYXJlIERJUkVDVElPTi5VUCBvciBESVJFQ1RJT04uRE9XTlxuICAgICAgICovXG4gICAgICBfbW92ZUhpZ2hsaWdodGVkOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKCk7XG5cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW1iZXJPZkl0ZW1zID0gaXRlbXMubGVuZ3RoIC0gMTtcblxuICAgICAgICB2YXIgaXNGaXJzdEl0ZW0gPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IDA7XG4gICAgICAgIHZhciBpc0xhc3RJdGVtID0gdGhpcy5fY3VycmVudEluZGV4ID09PSBudW1iZXJPZkl0ZW1zO1xuICAgICAgICB2YXIgaXNOb0l0ZW1IaWdobGlnaHRlZCA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gLTE7XG5cbiAgICAgICAgaWYgKChpc05vSXRlbUhpZ2hsaWdodGVkIHx8IGlzRmlyc3RJdGVtKSAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IG51bWJlck9mSXRlbXM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMYXN0SXRlbSAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXIgPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOID8gMSA6IC0xO1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleCArIG1vZGlmaWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZ2hsaWdodGVkT3B0aW9uID0gdGhpcy5fc3VnZ2VzdGlvbnNbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgICAgdmFyIGhpZ2hsaWdodGVkSXRlbSA9IGl0ZW1zW3RoaXMuX2N1cnJlbnRJbmRleF07XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlQWN0aXZlKGl0ZW1zKTtcblxuICAgICAgICBoaWdobGlnaHRlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgIHRoaXMuX3NldEhpZ2hsaWdodGVkU3VnZ2VzdGlvbihoaWdobGlnaHRlZE9wdGlvbiwgaGlnaGxpZ2h0ZWRJdGVtLmlkKTtcblxuICAgICAgICB0aGlzLl9zY3JvbGwoZGlyZWN0aW9uKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTW92ZSBzY3JvbGwgKGlmIG5lZWRlZCkgdG8gZGlzcGxheSB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIGxpc3QuXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIERpcmVjdGlvbiB0byBzY3JvbGwuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYERJUkVDVElPTi5VUGAgYW5kIGBESVJFQ1RJT04uRE9XTmAuXG4gICAgICAgKi9cbiAgICAgIF9zY3JvbGw6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIG5ld1Njcm9sbFZhbHVlLCBpc1NlbGVjdGVkT3V0T2ZWaWV3O1xuXG4gICAgICAgIHZhciB2aWV3SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggLSB0aGlzLl9zY3JvbGxJbmRleDtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgb25seSB3aGVuIHVzZXIgc3dpdGNoIGZyb20gbGFzdCBpdGVtIHRvIGZpcnN0IG9uZVxuICAgICAgICB2YXIgaXNGaXJzdEl0ZW1BbmRPdXRPZlZpZXcgPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IDAgJiYgdmlld0luZGV4IDwgMDtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgb25seSB3aGVuIHVzZXIgc3dpdGNoIGZyb20gZmlyc3Qgb3Igbm8gaXRlbSB0byBsYXN0IG9uZVxuICAgICAgICB2YXIgaXNMYXN0SXRlbUFuZE91dE9mVmlldyA9XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID09PSB0aGlzLl9zdWdnZXN0aW9ucy5sZW5ndGggLSAxICYmIHZpZXdJbmRleCA+PSB0aGlzLm1heFZpZXdhYmxlSXRlbXM7XG5cbiAgICAgICAgaWYgKGlzRmlyc3RJdGVtQW5kT3V0T2ZWaWV3ICYmIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IDA7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMYXN0SXRlbUFuZE91dE9mVmlldyAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSB0aGlzLl9zY3JvbGxJbmRleCAtIDE7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHZpZXdJbmRleCA8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSB0aGlzLl9zY3JvbGxJbmRleCArIDE7XG4gICAgICAgICAgaXNTZWxlY3RlZE91dE9mVmlldyA9IHZpZXdJbmRleCA+PSB0aGlzLm1heFZpZXdhYmxlSXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IHdoZW4gdGhlIGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQgaXMgb3V0IG9mIHZpZXcsIHdlIG5lZWQgdG8gbW92ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbFxuICAgICAgICBpZiAoaXNTZWxlY3RlZE91dE9mVmlldykge1xuICAgICAgICAgIHRoaXMuX3Njcm9sbEluZGV4ID0gbmV3U2Nyb2xsVmFsdWU7XG4gICAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxJbmRleCAqIHRoaXMuX2l0ZW1IZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzZXQgc2Nyb2xsIGJhY2sgdG8gemVyb1xuICAgICAgICovXG4gICAgICBfcmVzZXRTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgc3VnZ2VzdGlvblxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiBEYXRhIG9mIHRoZSBoaWdobGlnaHRlZCBvcHRpb25cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgaWQgb2YgdGhlIGhpZ2hsaWdodGVkIGRvbSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBfc2V0SGlnaGxpZ2h0ZWRTdWdnZXN0aW9uOiBmdW5jdGlvbiAob3B0aW9uLCBlbGVtZW50SWQpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZFN1Z2dlc3Rpb24gPSB7XG4gICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgZWxlbWVudElkOiBlbGVtZW50SWQsXG4gICAgICAgICAgdGV4dFZhbHVlOiBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgX2ZpcmVFdmVudDogZnVuY3Rpb24gKG9wdGlvbiwgZXZ0KSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuX2dldElkKCk7XG4gICAgICAgIHZhciBldmVudCA9ICdhdXRvY29tcGxldGUnICsgdGhpcy5ldmVudE5hbWVzcGFjZSArIGV2dDtcblxuICAgICAgICB0aGlzLmZpcmUoZXZlbnQsIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvblt0aGlzLnZhbHVlUHJvcGVydHldIHx8IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICB0ZXh0OiBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldIHx8IG9wdGlvbi50ZXh0LFxuICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9vblNlbGVjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpLmluZGV4O1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgb25CbHVyIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9vbkJsdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9maXJlRXZlbnQob3B0aW9uLCAnYmx1cicpO1xuXG4gICAgICAgIHRoaXMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBvbkZvY3VzIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIF9vbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVTdWdnZXN0aW9ucyhldmVudCk7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2ZvY3VzJyk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGEgc3VnZ2VzdGlvbiBpZCBmb3IgYSBjZXJ0YWluIGluZGV4XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggUG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIGxpc3RcbiAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgdW5pcXVlIGlkIGJhc2VkIG9uIHRoZSBfaWRJdGVtU2VlZCBhbmQgdGhlIHBvc2l0aW9uIG9mIHRoYXQgZWxlbWVudCBpbiB0aGUgc3VnZ2VzdGlvbnMgcG9wdXBcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9nZXRTdWdnZXN0aW9uSWQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWRJdGVtU2VlZCArICctJyArIGluZGV4O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGl0ZW0gaGVpZ2h0IGlzIGNoYW5nZWQsIHRoZSBtYXhIZWlnaHQgb2YgdGhlIHN1Z2dlc3Rpb25XcmFwcGVyIG5lZWQgdG8gYmUgdXBkYXRlZFxuICAgICAgICovXG4gICAgICBfaXRlbUhlaWdodENoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLl9pdGVtSGVpZ2h0ICogdGhpcy5tYXhWaWV3YWJsZUl0ZW1zICsgJ3B4JztcbiAgICAgIH0sXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgKiBQVUJMSUNcbiAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3VnZ2VzdGlvbnNcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAgICovXG4gICAgICBzdWdnZXN0aW9uczogZnVuY3Rpb24gKGFycikge1xuICAgICAgICB0aGlzLl9iaW5kU3VnZ2VzdGlvbnMoYXJyKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZXMgdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKi9cbiAgICAgIGhpZGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLl9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFF1ZXJ5IGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBlYWNoIGtleXN0cm9rZSB0byBxdWVyeSB0aGUgZGF0YSBzb3VyY2UgYW5kIHJldHVybnMgdGhlIHN1Z2dlc3Rpb25zIHRoYXQgbWF0Y2hlc1xuICAgICAgICogd2l0aCB0aGUgZmlsdGVyaW5nIGxvZ2ljIGluY2x1ZGVkLlxuICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF0YXNvdXJjZSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBpdGVtcyBiZWZvcmUgZmlsdGVyaW5nXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgQ3VycmVudCB2YWx1ZSBpbiB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBvbmx5IHRob3NlIGl0ZW1zIGluIHRoZSBkYXRhIHNvdXJjZSB0aGF0IG1hdGNoZXMgdGhlIGZpbHRlcmluZyBsb2dpYy5cbiAgICAgICAqL1xuICAgICAgcXVlcnlGbjogZnVuY3Rpb24gKGRhdGFzb3VyY2UsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBxdWVyeVJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGRhdGFzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHZhciBvYmpUZXh0LCBvYmpWYWx1ZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9ialRleHQgPSBpdGVtW3RoaXMudGV4dFByb3BlcnR5XTtcbiAgICAgICAgICAgIG9ialZhbHVlID0gaXRlbVt0aGlzLnZhbHVlUHJvcGVydHldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpUZXh0ID0gaXRlbS50b1N0cmluZygpO1xuICAgICAgICAgICAgb2JqVmFsdWUgPSBvYmpUZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvYmpUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHJlc3VsdCBvYmplY3QgbWF0Y2hlcyB3aXRoIHRoZSBjdXJyZW50IHRlbXBsYXRlLiBGb3IgY3VzdG9tIHRlbXBsYXRlcywgeW91XG4gICAgICAgICAgICAvLyBtaWdodCBuZWVkIHRvIHJldHVybiBtb3JlIGRhdGFcbiAgICAgICAgICAgIHF1ZXJ5UmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgICAgICAgICB2YWx1ZTogb2JqVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1zZWxlY3RlZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGNoYW5nZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtY2hhbmdlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgZm9jdXNcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWZvY3VzXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgYmx1clxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IHJlc2V0L2NsZWFyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1yZXNldC1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG4gICAgfSk7XG4gIH0oKSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy5odG1sIiwiXG5yZXF1aXJlKCcuLi9wYXBlci1zdHlsZXMvc2hhZG93Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1wYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT46aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtlbGV2YXRpb249XFxcIjFcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjJcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi00ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjNcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjRcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7fTpob3N0KFtlbGV2YXRpb249XFxcIjVcXFwiXSl7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO308L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzLmh0bWwiLCI8bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1jYXJkL3BhcGVyLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWxpc3QvaXJvbi1saXN0Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hMTF5LWtleXMvaXJvbi1hMTF5LWtleXMuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUuaHRtbFwiPlxyXG5cclxuXHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cImx1ZGluZy1zZWFyY2hcIj5cclxuICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICA8c3R5bGUgaW5jbHVkZT1cInNoYXJlZC1zdHlsZXNcIj5cclxuICAgICAgICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcGVyLXNwaW5uZXItbGl0ZS5vcmFuZ2Uge1xyXG4gICAgICAgICAgICAgICAgLS1wYXBlci1zcGlubmVyLWNvbG9yOiB2YXIoLS1nb29nbGUteWVsbG93LTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxpcm9uLWExMXkta2V5cyBpZD1cImExMXlcIiB0YXJnZXQ9XCJbW3RhcmdldF1dXCIga2V5cz1cImVudGVyXCIgb24ta2V5cy1wcmVzc2VkPVwic2VhcmNoXCI+PC9pcm9uLWExMXkta2V5cz5cclxuICAgICAgICA8cGFwZXItaW5wdXQgaWQ9XCJpbnB1dFwiIGxhYmVsPVwiU3VjaGVcIiBzdHlsZT1cIm1heC13aWR0aDo1MDBweFwiIHZhbHVlPVwie3tmaWx0ZXJzdHJ9fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJzdWZmaXhcIj5cclxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlPVwie3tsb2FkaW5nfX1cIiBjbGFzcz1cIm9yYW5nZVwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxyXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJzZWFyY2hcIiBvbi10YXA9XCJzZWFyY2hcIj48L3BhcGVyLWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3BhcGVyLWlucHV0PlxyXG5cclxuICAgICAgICA8aXJvbi1hamF4IGlkPVwiYWpheFwiIGxvYWRpbmc9XCJ7e2xvYWRpbmd9fVwiIHVybD1cIi9hcGkvZ3JhcGhxbFwiIGRlYm91bmNlLWR1cmF0aW9uPVwiMzAwXCIgb24tcmVzcG9uc2U9XCJoYW5kbGVSZXNwb25zZVwiIGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICBoYW5kbGUtYXM9XCJqc29uXCIgbWV0aG9kPVwiUE9TVFwiIGJvZHk9W1txdWVyeV1dPjwvaXJvbi1hamF4PlxyXG5cclxuXHJcblxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8c2NyaXB0PlxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGBsdWRpbmctc2VhcmNoYCBEZXNjcmlwdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHN1bW1hcnkgU2hvcnREZXNjcmlwdGlvbi5cclxuICAgICAgICAgKiBAY3VzdG9tRWxlbWVudFxyXG4gICAgICAgICAqIEBwb2x5bWVyXHJcbiAgICAgICAgICogQGV4dGVuZHMge1BvbHltZXIuRWxlbWVudH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzcyBMdWRpbmdTZWFyY2ggZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU3RyaW5nIHByb3ZpZGluZyB0aGUgdGFnIG5hbWUgdG8gcmVnaXN0ZXIgdGhlIGVsZW1lbnQgdW5kZXIuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0IGlzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsdWRpbmctc2VhcmNoJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9iamVjdCBkZXNjcmliaW5nIHByb3BlcnR5LXJlbGF0ZWQgbWV0YWRhdGEgdXNlZCBieSBQb2x5bWVyIGZlYXR1cmVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnN0cjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiBcIlwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlmdW5jdGlvbjogRnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXByb3A6IFN0cmluZ1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkL3VwZ3JhZGVkLiBVc2U6IGluaXRpYWxpemluZyBzdGF0ZSxcclxuICAgICAgICAgICAgICogc2V0IHVwIGV2ZW50IGxpc3RlbmVycywgY3JlYXRlIHNoYWRvdyBkb20uXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlIGZvciBvbmUtdGltZSBjb25maWd1cmF0aW9uIG9mIHlvdXIgY29tcG9uZW50IGFmdGVyIGxvY2FsIERPTSBpcyBpbml0aWFsaXplZC4gXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkeSgpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyLnJlYWR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUG9seW1lci5SZW5kZXJTdGF0dXMuYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuJC5pbnB1dDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VhcmNoKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnlmdW5jdGlvbih0aGlzLmZpbHRlcnN0cilcclxuICAgICAgICAgICAgICAgIHRoaXMuJC5hamF4LmdlbmVyYXRlUmVxdWVzdCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnZGF0YScsIFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdkYXRhJywgZXZlbnQuZGV0YWlsLnJlc3BvbnNlLmRhdGFbdGhpcy5yZXNwb25zZXByb3BdKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub3RpZnlQYXRoKCdkYXRhJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoTHVkaW5nU2VhcmNoLmlzLCBMdWRpbmdTZWFyY2gpO1xyXG4gICAgPC9zY3JpcHQ+XHJcbjwvZG9tLW1vZHVsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sdWRpbmctc2VhcmNoLmh0bWwiLCI8IS0tXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbi0tPlxyXG5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXkta2V5cy9pcm9uLWExMXkta2V5cy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuL2NvbXBvbmVudHMvbHVkaW5nLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9jb21wb25lbnRzL2x1ZGluZy1zZWFyY2guaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cImdhbWVzLWxpc3RmcmFnbWVudFwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICAgOmhvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXJvbi1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLiAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgICA8aXJvbi1saXN0IGlkPVwibGlzdFwiIGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cclxuICAgICAgICA8dGVtcGxhdGU+XHJcbiAgICAgICAgICA8bHVkaW5nLWNhcmQgaXRlbT1cIltbaXRlbV1dXCIgZ29kZXRhaWxzPVwiW1tuYXZpZ2F0ZV1dXCIgb2JqaWQ9XCJnYW1laWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cInRpdGxlXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleDogd3JhcFwiPltbaW5jKGluZGV4KV1dLiBbW2l0ZW0uZ2FtZW5hbWVdXSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJzdWJ0aXRsZVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXg6IHdyYXA7IGZsZXgtb3JpZW50YXRpb246IHJvd1wiPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpdGVtLnllYXJdXVwiPihbW2l0ZW0ueWVhcl1dKTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tpdGVtLmdhbWVBdXRob3JzXV1cIiBhcz1cImF1dGhvclwiPiBbW2F1dGhvci5hdXRob3JHaXZOYW1lXV0gW1thdXRob3IuYXV0aG9yTGFzdE5hbWVdXSw8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbaXRlbS5nYW1lUHVibGlzaGVyc11dXCIgYXM9XCJwdWJsaXNoZXJcIj4gW1twdWJsaXNoZXIucHVibGlzaGVybmFtZV1dLDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbHVkaW5nLWNhcmQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9pcm9uLWxpc3Q+XHJcbiAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgPHNjcmlwdD5cclxuICAgIGNsYXNzIEdhbWVzTGlzdEZyYWdtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcclxuICAgICAgc3RhdGljIGdldCBpcygpIHsgcmV0dXJuICdnYW1lcy1saXN0ZnJhZ21lbnQnOyB9XHJcblxyXG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IFwicmVmcmVzaFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaW5jKGlkeCkge1xyXG4gICAgICAgIHJldHVybiBpZHggKyAxXHJcbiAgICAgIH1cclxuICAgICAgbmF2aWdhdGUob2JqaWQpIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsICcvZ2FtZS8nICsgb2JqaWQpO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYXRpb24tY2hhbmdlZCcpKTtcclxuICAgICAgfVxyXG4gICAgICByZWZyZXNoKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy4kLmxpc3QuZmlyZSgnaXJvbi1yZXNpemUnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShHYW1lc0xpc3RGcmFnbWVudC5pcywgR2FtZXNMaXN0RnJhZ21lbnQpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzLWxpc3RmcmFnbWVudC5odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==