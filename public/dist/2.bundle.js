webpackJsonp([2],{

/***/ 116:
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

__webpack_require__(152);

__webpack_require__(36);

__webpack_require__(123);

__webpack_require__(121);

__webpack_require__(44);

__webpack_require__(127);

__webpack_require__(129);

__webpack_require__(151);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=publisher-details> <template> <style include=shared-styles>:host{display:block;padding:10px}iron-list{height:100vh;max-width:500px}</style> <app-location route={{route}} path={{path}}></app-location> <iron-ajax url=http://192.168.178.32:4000/graphql on-response=handleResponse content-type=application/json handle-as=json method=POST body=[[body]] auto=\"\"></iron-ajax> <h1>[[data.publishername]]</h1> <div> <games-listfragment data=[[data.publishergames]]></games-listfragment> </div> </template> </dom-module>");

var PublisherDetails = function (_Polymer$Element) {
  _inherits(PublisherDetails, _Polymer$Element);

  function PublisherDetails() {
    _classCallCheck(this, PublisherDetails);

    return _possibleConstructorReturn(this, (PublisherDetails.__proto__ || Object.getPrototypeOf(PublisherDetails)).apply(this, arguments));
  }

  _createClass(PublisherDetails, [{
    key: 'getBody',
    value: function getBody(path) {
      var publisherid = path.match(/\d+/)[0];
      console.log(path);
      return { query: 'query { publisher(publisherid: ' + publisherid + ') { publisherid publishername publishergames {gameid gamename year type } }}' };
    }
  }, {
    key: 'inc',
    value: function inc(idx) {
      return idx + 1;
    }
  }, {
    key: 'handleResponse',
    value: function handleResponse(event) {
      this.set('data', event.detail.response.data.publisher);
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'publisher-details';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        route: String,
        path: String,
        queryParams: Object,
        filterstr: String,
        data: {
          type: Array,
          notify: true
        },
        body: {
          type: Object,
          computed: "getBody(path)"
        }

      };
    }
  }]);

  return PublisherDetails;
}(Polymer.Element);

window.customElements.define(PublisherDetails.is, PublisherDetails);

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

__webpack_require__(146);

__webpack_require__(36);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=luding-card> <template> <style>:host{display:block}</style> <custom-style> <style is=custom-style>paper-icon-button.active{color:var(--paper-pink-500);--paper-icon-button-ink-color:var(--paper-indigo-500)}paper-icon-button.pink:hover{background-color:var(--paper-pink-500);color:#fff}paper-icon-button.blue{--paper-icon-button-ink-color:var(--paper-orange-500);background-color:var(--paper-light-blue-500);color:#fff;border-radius:3px;padding:2px}.rate{padding:0;margin-bottom:3px;width:100%}.rate-header{align-self:center;flex-grow:4}.title{@apply --paper-font-headline;font-size:140%}.subtitle{@apply --paper-font-subhead;color:var(--paper-grey-600)}.rate-name{margin:0}.card-content{padding:2px 5px;display:flex;flex-wrap:wrap;justify-content:space-between}paper-icon-button.rate-icon{--iron-icon-fill-color:white;--iron-icon-stroke-color:var(--paper-grey-600)}</style> </custom-style> <app-localstorage-document id=storage key=[[item.authorid]] data={{active}} debug=\"\"></app-localstorage-document> <paper-card class=rate> <div class=card-content> <div class=rate-header> <h3 style=margin:0> <slot name=title class=title></slot> </h3> <slot name=subtitle class=subtitle></slot> </div> <div class=rate-name> <paper-icon-button class$=[[active]] right=\"\" icon=favorite on-tap=toggle></paper-icon-button> <paper-icon-button right=\"\" icon=star on-tap=toggle></paper-icon-button> <paper-icon-button right=\"\" icon=icons:arrow-forward on-tap=navigate> </paper-icon-button> <slot name=actions class=actions></slot> </div> </div> </paper-card> </template> </dom-module>");

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


__webpack_require__(147);

__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=app-localstorage-document> </dom-module>");

'use strict';

/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */
Polymer({
  is: 'app-localstorage-document',

  behaviors: [Polymer.AppStorageBehavior],

  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: '__computeStorage(sessionOnly)'
    }
  },

  observers: ['__storageSourceChanged(storage, key)'],

  attached: function attached() {
    this.listen(window, 'storage', '__onStorage');
    this.listen(window.top, 'app-local-storage-changed', '__onAppLocalStorageChanged');
  },

  detached: function detached() {
    this.unlisten(window, 'storage', '__onStorage');
    this.unlisten(window.top, 'app-local-storage-changed', '__onAppLocalStorageChanged');
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function saveValue(key) {
    try {
      this.__setStorageValue( /*{@type if (key ty){String}}*/key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key = /** @type {String} */key;

    return Promise.resolve();
  },

  reset: function reset() {
    this.key = null;
    this.data = this.zeroValue;
  },

  destroy: function destroy() {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },

  getStoredValue: function getStoredValue(path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },

  setStoredValue: function setStoredValue(path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire('app-local-storage-changed', this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },

  __computeStorage: function __computeStorage(sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },

  __storageSourceChanged: function __storageSourceChanged(storage, key) {
    this._initializeStoredValue();
  },

  __onStorage: function __onStorage(event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set('data', this.__parseValueFromStorage());
    });
  },

  __onAppLocalStorageChanged: function __onAppLocalStorageChanged(event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }
    this.syncToMemory(function () {
      this.set('data', event.detail.data);
    });
  },

  __parseValueFromStorage: function __parseValueFromStorage() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error('Failed to parse value from storage for', this.key);
    }
  },

  __setStorageValue: function __setStorageValue(key, value) {
    this.storage.setItem(this.key, JSON.stringify(this.data));
  }
});

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

(function () {
  'use strict';

  var SPLICES_RX = /\.splices$/;
  var LENGTH_RX = /\.length$/;
  var NUMBER_RX = /\.?#?([0-9]+)$/;

  /**
   * AppStorageBehavior is an abstract behavior that makes it easy to
   * synchronize in-memory data and a persistent storage system, such as
   * the browser's IndexedDB, or a remote database like Firebase.
   *
   * For examples of how to use this behavior to write your own app storage
   * elements see `<app-localstorage-document>` here, or check out
   * [polymerfire](https://github.com/Firebase/polymerfire) and
   * [app-pouchdb](https://github.com/PolymerElements/app-pouchdb).
   *
   * @polymerBehavior
   */
  Polymer.AppStorageBehavior = {
    properties: {
      /**
       * The data to synchronize.
       */
      data: {
        type: Object,
        notify: true,
        value: function value() {
          return this.zeroValue;
        }
      },

      /**
       * If this is true transactions will happen one after the other,
       * never in parallel.
       *
       * Specifically, no transaction will begin until every previously
       * enqueued transaction by this element has completed.
       *
       * If it is false, new transactions will be executed as they are
       * received.
       */
      sequentialTransactions: {
        type: Boolean,
        value: false
      },

      /**
       * When true, will perform detailed logging.
       */
      log: {
        type: Boolean,
        value: false
      }
    },

    observers: ['__dataChanged(data.*)'],

    created: function created() {
      this.__initialized = false;
      this.__syncingToMemory = false;
      this.__initializingStoredValue = null;
      this.__transactionQueueAdvances = Promise.resolve();
    },

    ready: function ready() {
      this._initializeStoredValue();
    },

    /**
     * Override this getter to return true if the value has never been
     * persisted to storage.
     *
     * @type {boolean}
     */
    get isNew() {
      return true;
    },

    /**
     * A promise that will resolve once all queued transactions
     * have completed.
     *
     * This field is updated as new transactions are enqueued, so it will
     * only wait for transactions which were enqueued when the field
     * was accessed.
     *
     * This promise never rejects.
     *
     * @type {Promise}
     */
    get transactionsComplete() {
      return this.__transactionQueueAdvances;
    },

    /**
     * Override this getter to define the default value to use when
     * there's no data stored.
     *
     * @type {*}
     */
    get zeroValue() {
      return undefined;
    },

    /**
     * Override this method.
     *
     * If the data value represented by this storage instance is new, this
     * method generates an attempt to write the value to storage.
     *
     *
     * @param {*} args
     * @return {Promise} a Promise that settles only once the write has.
     */
    saveValue: function saveValue(args) {
      return Promise.resolve();
    },

    /**
     * Optional. Override this method to clear out the mapping of this
     * storage object and a logical location within storage.
     *
     * If this method is supported, after it's called, isNew() should be
     * true.
     */
    reset: function reset() {},

    /**
     * Remove the data from storage.
     *
     * @return {Promise} A promise that settles once the destruction is
     *   complete.
     */
    destroy: function destroy() {
      this.data = this.zeroValue;
      return this.saveValue();
    },

    /**
     * Perform the initial sync between storage and memory. This method
     * is called automatically while the element is being initialized.
     * Implementations may override it.
     *
     * If an implementation intends to call this method, it should instead
     * call _initializeStoredValue, which provides reentrancy protection.
     *
     * @return {Promise} A promise that settles once this process is
     *     complete.
     */
    initializeStoredValue: function initializeStoredValue() {
      if (this.isNew) {
        return Promise.resolve();
      }

      // If this is not a "new" model, then we should attempt
      // to read an initial value from storage:
      return this._getStoredValue('data').then(function (data) {
        this._log('Got stored value!', data, this.data);
        if (data == null) {
          return this._setStoredValue('data', this.data || this.zeroValue);
        } else {
          this.syncToMemory(function () {
            this.set('data', data);
          });
        }
      }.bind(this));
    },

    /**
     * Override this method to implement reading a value from storage.
     *
     *
     * @param {string} storagePath The path (through storage) of the value to
     *   create, relative to the root of storage associated with this instance.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. _If there is no
     *   such value at the provided path through storage, then the promise will
     *   resolve to `undefined`._ The promise will be rejected if the transaction
     *   fails for any reason.
     */
    getStoredValue: function getStoredValue(storagePath) {
      return Promise.resolve();
    },

    /**
     * Override this method to implement creating and updating
     * stored values.
     *
     *
     * @param {string} storagePath The path of the value to update, relative
     *   to the root storage path configured for this instance.
     * @param {*} value The updated in-memory value to apply to the stored value
     *   at the provided path.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. The promise
     *   will be rejected if the transaction fails for any reason.
     */
    setStoredValue: function setStoredValue(storagePath, value) {
      return Promise.resolve(value);
    },

    /**
     * Maps a Polymer databinding path to the corresponding path in the
     * storage system. Override to define a custom mapping.
     *
     * The inverse of storagePathToMemoryPath.
     *
     * @param {string} path An in-memory path through a storage object.
     * @return {string} The provided path mapped to the equivalent location in
     *   storage. This mapped version of the path is suitable for use with the
     *   CRUD operations on both memory and storage.
     */
    memoryPathToStoragePath: function memoryPathToStoragePath(path) {
      return path;
    },

    /**
     * Maps a storage path to the corresponding Polymer databinding path.
     * Override to define a custom mapping.
     *
     * The inverse of memoryPathToStoragePath.
     *
     * @param {string} path The storage path through a storage object.
     * @return {string} The provided path through storage mapped to the
     *   equivalent Polymer path through the in-memory representation of storage.
     */
    storagePathToMemoryPath: function storagePathToMemoryPath(path) {
      return path;
    },

    /**
     * Enables performing transformations on the in-memory representation of
     * storage without activating observers that will cause those
     * transformations to be re-applied to the storage backend. This is useful
     * for preventing redundant (or cyclical) application of transformations.
     *
     * @param {Function} operation A function that will perform the desired
     *   transformation. It will be called synchronously, when it is safe to
     *   apply the transformation.
     */
    syncToMemory: function syncToMemory(operation) {
      if (this.__syncingToMemory) {
        return;
      }

      this._group('Sync to memory.');

      this.__syncingToMemory = true;
      operation.call(this);
      this.__syncingToMemory = false;

      this._groupEnd('Sync to memory.');
    },

    /**
     * A convenience method. Returns true iff value is null, undefined,
     * an empty array, or an object with no keys.
     */
    valueIsEmpty: function valueIsEmpty(value) {
      if (Array.isArray(value)) {
        return value.length === 0;
      } else if (Object.prototype.isPrototypeOf(value)) {
        return Object.keys(value).length === 0;
      } else {
        return value == null;
      }
    },

    /**
     * Like `getStoredValue` but called with a Polymer path rather than
     * a storage path.
     *
     * @param {string} path The Polymer path to get.
     * @return {Promise} A Promise of the value stored at that path.
     */
    _getStoredValue: function _getStoredValue(path) {
      return this.getStoredValue(this.memoryPathToStoragePath(path));
    },

    /**
     * Like `setStoredValue` but called with a Polymer path rather than
     * a storage path.
     *
     * @param {string} path The Polymer path to update.
     * @param {*} value The updated in-memory value to apply to the stored value
     *   at the provided path.
     * @return {Promise} A promise that resolves with the canonical value stored
     *   at the provided path when the transaction has completed. The promise
     *   will be rejected if the transaction fails for any reason.
     */
    _setStoredValue: function _setStoredValue(path, value) {
      return this.setStoredValue(this.memoryPathToStoragePath(path), value);
    },

    /**
     * Enqueues the given function in the transaction queue.
     *
     * The transaction queue allows for optional parallelism/sequentiality
     * via the `sequentialTransactions` boolean property, as well as giving
     * the user a convenient way to wait for all pending transactions to
     * finish.
     *
     * The given function may be called immediately or after an arbitrary
     * delay. Its `this` context will be bound to the element.
     *
     * If the transaction performs any asynchronous operations it must
     * return a promise.
     *
     * @param {Function} transaction A function implementing the transaction.
     * @return {Promise} A promise that resolves once the transaction has
     *   finished. This promise will never reject.
     */
    _enqueueTransaction: function _enqueueTransaction(transaction) {
      if (this.sequentialTransactions) {
        transaction = transaction.bind(this);
      } else {
        var result = transaction.call(this);
        transaction = function transaction() {
          return result;
        };
      }

      return this.__transactionQueueAdvances = this.__transactionQueueAdvances.then(transaction).catch(function (error) {
        this._error('Error performing queued transaction.', error);
      }.bind(this));
    },

    /**
     * A wrapper around `console.log`.
     */
    _log: function _log() {
      if (this.log) {
        console.log.apply(console, arguments);
      }
    },

    /**
     * A wrapper around `console.error`.
     */
    _error: function _error() {
      if (this.log) {
        console.error.apply(console, arguments);
      }
    },

    /**
     * A wrapper around `console.group`.
     */
    _group: function _group() {
      if (this.log) {
        console.group.apply(console, arguments);
      }
    },

    /**
     * A wrapper around `console.groupEnd`.
     */
    _groupEnd: function _groupEnd() {
      if (this.log) {
        console.groupEnd.apply(console, arguments);
      }
    },

    /**
     * A reentrancy-save wrapper around `this.initializeStoredValue`.
     * Prefer calling this method over that one.
     *
     * @return {Promise} The result of calling `initializeStoredValue`,
     *   or `undefined` if called while initializing.
     */
    _initializeStoredValue: function _initializeStoredValue() {
      if (this.__initializingStoredValue) {
        return;
      }

      this._group('Initializing stored value.');

      var initializingStoredValue = this.__initializingStoredValue = this.initializeStoredValue().then(function () {
        this.__initialized = true;
        this.__initializingStoredValue = null;
        this._groupEnd('Initializing stored value.');
      }.bind(this));

      return this._enqueueTransaction(function () {
        return initializingStoredValue;
      });
    },

    __dataChanged: function __dataChanged(change) {
      if (this.isNew || this.__syncingToMemory || !this.__initialized || this.__pathCanBeIgnored(change.path)) {
        return;
      }

      var path = this.__normalizeMemoryPath(change.path);
      var value = change.value;
      var indexSplices = value && value.indexSplices;

      this._enqueueTransaction(function () {

        this._log('Setting', path + ':', indexSplices || value);

        if (indexSplices && this.__pathIsSplices(path)) {
          path = this.__parentPath(path);
          value = this.get(path);
        }

        return this._setStoredValue(path, value);
      });
    },

    __normalizeMemoryPath: function __normalizeMemoryPath(path) {
      var parts = path.split('.');
      var parentPath = [];
      var currentPath = [];
      var normalizedPath = [];
      var index;

      for (var i = 0; i < parts.length; ++i) {
        currentPath.push(parts[i]);
        if (/^#/.test(parts[i])) {
          normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)));
        } else {
          normalizedPath.push(parts[i]);
        }
        parentPath.push(parts[i]);
      }

      return normalizedPath.join('.');
    },

    __parentPath: function __parentPath(path) {
      var parentPath = path.split('.');
      return parentPath.slice(0, parentPath.length - 1).join('.');
    },

    __pathCanBeIgnored: function __pathCanBeIgnored(path) {
      return LENGTH_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
    },

    __pathIsSplices: function __pathIsSplices(path) {
      return SPLICES_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
    },

    __pathRefersToArray: function __pathRefersToArray(path) {
      return (SPLICES_RX.test(path) || LENGTH_RX.test(path)) && Array.isArray(this.get(this.__parentPath(path)));
    },

    __pathTailToIndex: function __pathTailToIndex(path) {
      var tail = path.split('.').pop();
      return window.parseInt(tail.replace(NUMBER_RX, '$1'), 10);
    }
  };
})();

/***/ }),

/***/ 148:
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

RegisterHtmlTemplate.register("<dom-module id=luding-search> <template> <style include=shared-styles>:host{display:block;padding:0}paper-spinner-lite.orange{--paper-spinner-color:var(--google-yellow-500)}</style> <iron-a11y-keys id=a11y target=[[target]] keys=enter on-keys-pressed=search></iron-a11y-keys> <paper-input id=input label=Suche style=max-width:500px value={{filterstr}}> <div slot=suffix> <paper-spinner-lite active={{loading}} class=orange></paper-spinner-lite> <paper-icon-button icon=search on-tap=search></paper-icon-button> </div> </paper-input> <iron-ajax id=ajax loading={{loading}} url=http://192.168.178.32:4000/graphql debounce-duration=300 on-response=handleResponse content-type=application/json handle-as=json method=POST body=[[query]]></iron-ajax> </template> </dom-module>");

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

/***/ 151:
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

__webpack_require__(148);

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

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(39);

__webpack_require__(40);

var RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=maps size=24> <svg><defs> <g id=add-location><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z\"></path></g> <g id=beenhere><path d=\"M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z\"></path></g> <g id=directions><path d=\"M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z\"></path></g> <g id=directions-bike><path d=\"M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z\"></path></g> <g id=directions-boat><path d=\"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z\"></path></g> <g id=directions-bus><path d=\"M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z\"></path></g> <g id=directions-car><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g> <g id=directions-railway><path d=\"M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z\"></path></g> <g id=directions-run><path d=\"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z\"></path></g> <g id=directions-subway><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g> <g id=directions-transit><path d=\"M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z\"></path></g> <g id=directions-walk><path d=\"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7\"></path></g> <g id=edit-location><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z\"></path></g> <g id=ev-station><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z\"></path></g> <g id=flight><path d=\"M10.18 9\"></path><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g> <g id=hotel><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g> <g id=layers><path d=\"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z\"></path></g> <g id=layers-clear><path d=\"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z\"></path></g> <g id=local-activity><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g> <g id=local-airport><path d=\"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z\"></path></g> <g id=local-atm><path d=\"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z\"></path></g> <g id=local-bar><path d=\"M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z\"></path></g> <g id=local-cafe><path d=\"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z\"></path></g> <g id=local-car-wash><path d=\"M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z\"></path></g> <g id=local-convenience-store><path d=\"M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z\"></path></g> <g id=local-dining><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g> <g id=local-drink><path d=\"M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z\"></path></g> <g id=local-florist><path d=\"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z\"></path></g> <g id=local-gas-station><path d=\"M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g> <g id=local-grocery-store><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=local-hospital><path d=\"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z\"></path></g> <g id=local-hotel><path d=\"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z\"></path></g> <g id=local-laundry-service><path d=\"M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"></path></g> <g id=local-library><path d=\"M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z\"></path></g> <g id=local-mall><path d=\"M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z\"></path></g> <g id=local-movies><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g> <g id=local-offer><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z\"></path></g> <g id=local-parking><path d=\"M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z\"></path></g> <g id=local-pharmacy><path d=\"M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z\"></path></g> <g id=local-phone><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g> <g id=local-pizza><path d=\"M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=local-play><path d=\"M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z\"></path></g> <g id=local-post-office><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=local-printshop><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g> <g id=local-see><circle cx=12 cy=12 r=3.2></circle><path d=\"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"></path></g> <g id=local-shipping><path d=\"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=local-taxi><path d=\"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z\"></path></g> <g id=map><path d=\"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z\"></path></g> <g id=my-location><path d=\"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g> <g id=navigation><path d=\"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z\"></path></g> <g id=near-me><path d=\"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"></path></g> <g id=person-pin><path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z\"></path></g> <g id=person-pin-circle><path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z\"></path></g> <g id=pin-drop><path d=\"M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z\"></path></g> <g id=place><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=rate-review><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z\"></path></g> <g id=restaurant><path d=\"M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z\"></path></g> <g id=restaurant-menu><path d=\"M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z\"></path></g> <g id=satellite><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z\"></path></g> <g id=store-mall-directory><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g> <g id=streetview><path d=\"M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z\"></path><circle cx=18 cy=6 r=5></circle><path d=\"M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z\"></path></g> <g id=subway><circle cx=15.5 cy=16 r=1></circle><circle cx=8.5 cy=16 r=1></circle><path d=\"M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z\"></path></g> <g id=terrain><path d=\"M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z\"></path></g> <g id=traffic><path d=\"M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z\"></path></g> <g id=train><path d=\"M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=tram><path d=\"M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z\"></path></g> <g id=transfer-within-a-station><path d=\"M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75\"></path></g> <g id=zoom-out-map><path d=\"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHVibGlzaGVyLWRldGFpbHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXkta2V5cy9pcm9uLWExMXkta2V5cy5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sdWRpbmctY2FyZC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbnB1dC9pcm9uLWlucHV0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNoYXItY291bnRlci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1lcnJvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1yZXF1ZXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FwcC1zdG9yYWdlL2FwcC1sb2NhbHN0b3JhZ2UvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sdWRpbmctc2VhcmNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzLWxpc3RmcmFnbWVudC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9tYXBzLWljb25zLmh0bWwiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlZ2lzdGVySHRtbFRlbXBsYXRlIiwicmVnaXN0ZXIiLCJ0b0JvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQW9ESTs7SUFBdUI7Ozs7Ozs7Ozs7OzRCQXFCVCxNQUFFO0FBQ1osVUFBa0IsY0FBTSxLQUFNLE1BQU8sT0FBRTtBQUNoQyxjQUFJLElBQUs7QUFDZCxhQUFPLEVBQVMsMkNBQ3BCO0FBQ0c7Ozt3QkFBSSxLQUFFO0FBQ1AsYUFBVyxNQUNiO0FBQ2M7OzttQ0FBTSxPQUFFO0FBQ2hCLFdBQUksSUFBTyxRQUFPLE1BQU8sT0FBUyxTQUFLLEtBQzdDO0FBRUY7Ozt3QkFoQ2tCO0FBQUUsYUFBNEI7QUFFeEI7Ozt3QkFBRTtBQUN0QjtBQUNPLGVBQVE7QUFDVCxjQUFRO0FBQ0QscUJBQVE7QUFDVixtQkFBUTtBQUNiO0FBQ0UsZ0JBQU87QUFDTCxrQkFDUDtBQUhLO0FBSUY7QUFDRSxnQkFBUTtBQUNKLG9CQUtkO0FBUFU7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QUFRO0FBQzlDLGFBQWMsY0FBQyxJQUFlLFlBQ3RDO0FBQ087Ozs0QkFBTSxPQUFFO0FBQ1QsV0FBRSxFQUFLLEtBQUssS0FDbEI7QUFDRjs7O3dCQXRCa0I7QUFBRSxhQUE2QjtBQUV6Qjs7O3dCQUFFO0FBQ3RCO0FBQ007QUFDRSxnQkFBTztBQUNMLGtCQUFNO0FBQ0osb0JBSWQ7QUFQVTtBQUREO0FBU047Ozs7RUFia0MsUUFDdkI7O0FBd0JWLE9BQWUsZUFBTyxPQUFrQixrQkFBRyxJQUFvQixtQjs7Ozs7Ozs7OztBQ25GekUsbUJBQUFGLENBQVEsRUFBUjs7QUFFQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBLElBQU1DLHVCQUF1QixtQkFBQUQsQ0FBUSxDQUFSLENBQTdCOztBQUVBQyxxQkFBcUJFLE1BQXJCLENBQTRCLHE2akJBQTVCLEUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbi0tPlxyXG5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9tYXBzLWljb25zLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hamF4L2lyb24tYWpheC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2FwcC1yb3V0ZS9hcHAtbG9jYXRpb24uaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuL2NvbXBvbmVudHMvbHVkaW5nLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9nYW1lcy1saXN0ZnJhZ21lbnQuaHRtbFwiPlxyXG5cclxuXHJcbjxkb20tbW9kdWxlIGlkPVwicHVibGlzaGVyLWRldGFpbHNcIj5cclxuICA8dGVtcGxhdGU+XHJcbiAgICA8c3R5bGUgaW5jbHVkZT1cInNoYXJlZC1zdHlsZXNcIj5cclxuICAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXJvbi1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLiAqL1xyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8YXBwLWxvY2F0aW9uIHJvdXRlPXt7cm91dGV9fSBwYXRoPXt7cGF0aH19ID48L2FwcC1sb2NhdGlvbj5cclxuICAgIDxpcm9uLWFqYXggdXJsPVwiaHR0cDovLzE5Mi4xNjguMTc4LjMyOjQwMDAvZ3JhcGhxbFwiIG9uLXJlc3BvbnNlPVwiaGFuZGxlUmVzcG9uc2VcIiBjb250ZW50LXR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCIgaGFuZGxlLWFzPVwianNvblwiXHJcbiAgICAgIG1ldGhvZD1cIlBPU1RcIiBib2R5PVtbYm9keV1dIGF1dG8+PC9pcm9uLWFqYXg+XHJcblxyXG4gICAgPGgxPltbZGF0YS5wdWJsaXNoZXJuYW1lXV08L2gxPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGdhbWVzLWxpc3RmcmFnbWVudCBkYXRhPVwiW1tkYXRhLnB1Ymxpc2hlcmdhbWVzXV1cIj48L2dhbWVzLWxpc3RmcmFnbWVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L3RlbXBsYXRlPlxyXG5cclxuICA8c2NyaXB0PlxyXG4gICAgY2xhc3MgUHVibGlzaGVyRGV0YWlscyBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XHJcbiAgICAgIHN0YXRpYyBnZXQgaXMoKSB7IHJldHVybiAncHVibGlzaGVyLWRldGFpbHMnOyB9XHJcblxyXG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJvdXRlOiBTdHJpbmcsXHJcbiAgICAgICAgICBwYXRoOiBTdHJpbmcsXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgICAgZmlsdGVyc3RyOiBTdHJpbmcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBub3RpZnk6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiZ2V0Qm9keShwYXRoKVwiXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgZ2V0Qm9keShwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgcHVibGlzaGVyaWQgPSBwYXRoLm1hdGNoKC9cXGQrLylbMF1cclxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKVxyXG4gICAgICAgICAgcmV0dXJuIHsgcXVlcnk6IGBxdWVyeSB7IHB1Ymxpc2hlcihwdWJsaXNoZXJpZDogJHtwdWJsaXNoZXJpZH0pIHsgcHVibGlzaGVyaWQgcHVibGlzaGVybmFtZSBwdWJsaXNoZXJnYW1lcyB7Z2FtZWlkIGdhbWVuYW1lIHllYXIgdHlwZSB9IH19YCB9XHJcbiAgICAgIH1cclxuICAgICAgaW5jKGlkeCkge1xyXG4gICAgICAgIHJldHVybiBpZHggKyAxXHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlUmVzcG9uc2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldCgnZGF0YScsIGV2ZW50LmRldGFpbC5yZXNwb25zZS5kYXRhLnB1Ymxpc2hlcilcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFB1Ymxpc2hlckRldGFpbHMuaXMsIFB1Ymxpc2hlckRldGFpbHMpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1Ymxpc2hlci1kZXRhaWxzLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLWNhcmRgIGlzIGEgY29udGFpbmVyIHdpdGggYSBkcm9wIHNoYWRvdy5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+U29tZSBjb250ZW50PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+U29tZSBhY3Rpb248L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItY2FyZD5cblxuRXhhbXBsZSAtIHRvcCBjYXJkIGltYWdlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIiBpbWFnZT1cIi9wYXRoL3RvL2ltYWdlLnBuZ1wiIGFsdD1cImltYWdlXCI+XG4gICAgICAuLi5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkJ5IGRlZmF1bHQsIHRoZSBgYXJpYS1sYWJlbGAgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlIG9mIHRoZSBgaGVhZGluZ2AgYXR0cmlidXRlLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBjYXJkIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBoZWFkZXIgdGV4dCB8IGAjMDAwYFxuYC0tcGFwZXItY2FyZC1oZWFkZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGV4dCBvdmVybGFwcGluZyB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWNvbnRlbnRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBjb250ZW50IHNlY3Rpb258IGB7fWBcbmAtLXBhcGVyLWNhcmQtYWN0aW9uc2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGFjdGlvbiBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIHwgYHt9YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWNhcmRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItY2FyZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkO1xuICAgICAgfVxuXG4gICAgICAvKiBJRSAxMCBzdXBwb3J0IGZvciBIVE1MNSBoaWRkZW4gYXR0ciAqL1xuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIGlyb24taW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taXJvbi1pbWFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvciwgIzAwMCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dC5vdmVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1hY3Rpb25zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjJcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIzXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjVcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxpcm9uLWltYWdlXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWltYWdlXV1cIlxuICAgICAgICAgIGFyaWEtaGlkZGVuJD1cIltbX2lzSGlkZGVuKGltYWdlKV1dXCJcbiAgICAgICAgICBzcmM9XCJbW2ltYWdlXV1cIlxuICAgICAgICAgIGFsdD1cIltbYWx0XV1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlckltYWdlXV1cIlxuICAgICAgICAgIHByZWxvYWQ9XCJbW3ByZWxvYWRJbWFnZV1dXCJcbiAgICAgICAgICBmYWRlPVwiW1tmYWRlSW1hZ2VdXVwiPjwvaXJvbi1pbWFnZT5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIWhlYWRpbmddXVwiIGNsYXNzJD1cInRpdGxlLXRleHQgW1tfY29tcHV0ZUhlYWRpbmdDbGFzcyhpbWFnZSldXVwiPltbaGVhZGluZ11dPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItY2FyZCcsXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRpbmc6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgIG9ic2VydmVyOiAnX2hlYWRpbmdDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXJsIG9mIHRoZSB0aXRsZSBpbWFnZSBvZiB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCBhbHRlcm5hdGl2ZSBvZiB0aGUgY2FyZCdzIHRpdGxlIGltYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgYWx0OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBpbWFnZSB1cmwgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGVcbiAgICAgICAgICogYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgaW1hZ2UgaXMgZnVsbHkgcmVuZGVyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBwcmVsb2FkSW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVsb2FkSW1hZ2VgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVJbWFnZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZVxuICAgICAgICAgKiBpbWFnZSB0byBmYWRlIGludG8gcGxhY2UuXG4gICAgICAgICAqL1xuICAgICAgICBmYWRlSW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZSBoYXNcbiAgICAgICAgICogbG9hZGVkLiBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudCByZW5kZXJpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlckltYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoZSBjYXJkLCBmcm9tIDAtNS5cbiAgICAgICAgICovXG4gICAgICAgIGVsZXZhdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBjYXJkIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgICAgICogYHpgIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0ZWRTaGFkb3c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgcHJvcGVydHkgdXNlZCB0byBwYXNzIGRvd24gdGhlIGBhbmltYXRlZFNoYWRvd2AgdmFsdWUgdG9cbiAgICAgICAgICogdGhlIHVuZGVybHlpbmcgcGFwZXItbWF0ZXJpYWwgc3R5bGUgKHNpbmNlIHRoZXkgaGF2ZSBkaWZmZXJlbnQgbmFtZXMpLlxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQW5pbWF0ZWQoYW5pbWF0ZWRTaGFkb3cpJ1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZvcm1hdCBmdW5jdGlvbiBmb3IgYXJpYS1oaWRkZW4uIFVzZSB0aGUgISBvcGVyYXRvciByZXN1bHRzIGluIHRoZVxuICAgICAgICogZW1wdHkgc3RyaW5nIHdoZW4gZ2l2ZW4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgX2lzSGlkZGVuOiBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICByZXR1cm4gaW1hZ2UgPyAnZmFsc2UnIDogJ3RydWUnO1xuICAgICAgfSxcblxuICAgICAgX2hlYWRpbmdDaGFuZ2VkOiBmdW5jdGlvbihoZWFkaW5nKSB7XG4gICAgICAgIHZhciBjdXJyZW50SGVhZGluZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdoZWFkaW5nJyksXG4gICAgICAgICAgICBjdXJyZW50TGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudExhYmVsICE9PSAnc3RyaW5nJyB8fCBjdXJyZW50TGFiZWwgPT09IGN1cnJlbnRIZWFkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBoZWFkaW5nKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVIZWFkaW5nQ2xhc3M6IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZSA/ICcgb3Zlci1pbWFnZScgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlQW5pbWF0ZWQ6IGZ1bmN0aW9uKGFuaW1hdGVkU2hhZG93KSB7XG4gICAgICAgIHJldHVybiBhbmltYXRlZFNoYWRvdztcbiAgICAgIH1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1pbnB1dC9pcm9uLWlucHV0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1jb250YWluZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWVycm9yLmh0bWxcIj5cblxuPCEtLVxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dCBmaWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG4gICAgPHBhcGVyLWlucHV0IGNoYXItY291bnRlciBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWlucHV0XG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHRvIG1ha2UgYSBzdGFja2luZyBjb250ZXh0ICovXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0O1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgaWQ9XCJjb250YWluZXJcIlxuICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW19jb21wdXRlQWx3YXlzRmxvYXRMYWJlbChhbHdheXNGbG9hdExhYmVsLHBsYWNlaG9sZGVyKV1dXCJcbiAgICAgICAgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb3I9XCJpbnB1dFwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDxzcGFuIGlkPVwidGVtcGxhdGUtcGxhY2Vob2xkZXJcIj48L3NwYW4+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICA8L3RlbXBsYXRlPlxuXG4gIDwhLS0gVGhpcyBpcyBhIGZyZXNoIG5ldyBoZWxsIHRvIG1ha2UgdGhpcyBlbGVtZW50IGh5YnJpZC4gQmFzaWNhbGx5LCBpbiAyLjBcbiAgICB3ZSBsb3N0IGlzPSwgc28gdGhlIGV4YW1wbGUgc2FtZSB0ZW1wbGF0ZSBjYW4ndCBiZSB1c2VkIHdpdGggaXJvbi1pbnB1dCAxLjAgYW5kIDIuMC5cbiAgICBFeHBlY3Qgc29tZSBjb25kaXRpb25hbCBjb2RlIChlc3BlY2lhbGx5IGluIHRoZSB0ZXN0cykuXG4gICAtLT5cbiAgPHRlbXBsYXRlIGlkPVwidjBcIj5cbiAgICA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgaWQ9XCJpbnB1dFwiIHNsb3Q9XCJpbnB1dFwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiXG4gICAgICAgIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgIHRpdGxlJD1cIltbdGl0bGVdXVwiXG4gICAgICAgIGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBpbnZhbGlkPVwie3tpbnZhbGlkfX1cIlxuICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXQ9XCJbW3ByZXZlbnRJbnZhbGlkSW5wdXRdXVwiXG4gICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIlxuICAgICAgICB0eXBlJD1cIltbdHlwZV1dXCJcbiAgICAgICAgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCJcbiAgICAgICAgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiXG4gICAgICAgIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCJcbiAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICBtaW4kPVwiW1ttaW5dXVwiXG4gICAgICAgIG1heCQ9XCJbW21heF1dXCJcbiAgICAgICAgc3RlcCQ9XCJbW3N0ZXBdXVwiXG4gICAgICAgIG5hbWUkPVwiW1tuYW1lXV1cIlxuICAgICAgICBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIlxuICAgICAgICBsaXN0JD1cIltbbGlzdF1dXCJcbiAgICAgICAgc2l6ZSQ9XCJbW3NpemVdXVwiXG4gICAgICAgIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiXG4gICAgICAgIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiXG4gICAgICAgIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiXG4gICAgICAgIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiXG4gICAgICAgIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIlxuICAgICAgICBhY2NlcHQkPVwiW1thY2NlcHRdXVwiXG4gICAgICAgIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiPlxuICA8L3RlbXBsYXRlPlxuXG4gIDx0ZW1wbGF0ZSBpZD1cInYxXCI+XG4gICAgPCEtLSBOZWVkIHRvIGJpbmQgbWF4bGVuZ3RoIHNvIHRoYXQgdGhlIHBhcGVyLWlucHV0LWNoYXItY291bnRlciB3b3JrcyBjb3JyZWN0bHkgLS0+XG4gICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIGlkPVwiaW5wdXRcIiBzbG90PVwiaW5wdXRcIlxuICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiXG4gICAgICAgIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgIDxpbnB1dCBpZD1cIm5hdGl2ZUlucHV0XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgdGl0bGUkPVwiW1t0aXRsZV1dXCJcbiAgICAgICAgdHlwZSQ9XCJbW3R5cGVdXVwiXG4gICAgICAgIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIlxuICAgICAgICByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIlxuICAgICAgICBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiXG4gICAgICAgIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIlxuICAgICAgICBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiXG4gICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgbWluJD1cIltbbWluXV1cIlxuICAgICAgICBtYXgkPVwiW1ttYXhdXVwiXG4gICAgICAgIHN0ZXAkPVwiW1tzdGVwXV1cIlxuICAgICAgICBuYW1lJD1cIltbbmFtZV1dXCJcbiAgICAgICAgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCJcbiAgICAgICAgbGlzdCQ9XCJbW2xpc3RdXVwiXG4gICAgICAgIHNpemUkPVwiW1tzaXplXV1cIlxuICAgICAgICBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIlxuICAgICAgICBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIlxuICAgICAgICB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIlxuICAgICAgICBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIlxuICAgICAgICByZXN1bHRzJD1cIltbcmVzdWx0c11dXCJcbiAgICAgICAgYWNjZXB0JD1cIltbYWNjZXB0XV1cIlxuICAgICAgICBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIj5cbiAgICA8L2lyb24taW5wdXQ+XG4gIDwvdGVtcGxhdGU+XG5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dCcsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yLFxuICAgICAgUG9seW1lci5Jcm9uRm9ybUVsZW1lbnRCZWhhdmlvclxuICAgIF0sXG5cbiAgICBiZWZvcmVSZWdpc3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHRlbGwgd2hpY2gga2luZCBvZiBvZiB0ZW1wbGF0ZSB0byBzdGFtcCBiYXNlZCBvblxuICAgICAgLy8gd2hhdCBraW5kIG9mIGBpcm9uLWlucHV0YCB3ZSBnb3QsIGJ1dCBiZWNhdXNlIG9mIHBvbHlmaWxscyBhbmRcbiAgICAgIC8vIGN1c3RvbSBlbGVtZW50cyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHYwIGFuZCB2MSwgdGhlIHNhZmVzdCBiZXQgaXNcbiAgICAgIC8vIHRvIGNoZWNrIGEgcGFydGljdWxhciBtZXRob2Qgd2Uga25vdyB0aGUgaXJvbi1pbnB1dCMyLnggY2FuIGhhdmUuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGhhdmUgaXQsIHRoZW4gaXQncyBhbiBpcm9uLWlucHV0IzEueC5cbiAgICAgIHZhciBpcm9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWlucHV0Jyk7XG4gICAgICB2YXIgdmVyc2lvbiA9IHR5cGVvZiBpcm9uSW5wdXQuX2luaXRTbG90dGVkSW5wdXQgPT0gJ2Z1bmN0aW9uJyA/ICd2MScgOiAndjAnO1xuICAgICAgdmFyIHRlbXBsYXRlID0gUG9seW1lci5Eb21Nb2R1bGUuaW1wb3J0KCdwYXBlci1pbnB1dCcsICd0ZW1wbGF0ZScpO1xuICAgICAgdmFyIGlucHV0VGVtcGxhdGUgPSBQb2x5bWVyLkRvbU1vZHVsZS5pbXBvcnQoJ3BhcGVyLWlucHV0JywgJ3RlbXBsYXRlIycgKyB2ZXJzaW9uKTtcbiAgICAgIHZhciBpbnB1dFBsYWNlaG9sZGVyID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGxhdGUtcGxhY2Vob2xkZXInKTtcbiAgICAgIGlmIChpbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXRUZW1wbGF0ZS5jb250ZW50LCBpbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaXQncyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCBwcm9iYWJseSBpbiBzdXBlcmNsYXNzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb20gUGFwZXJJbnB1dEJlaGF2aW9yXG4gICAgICogdG8gY29ycmVjdGx5IGZvY3VzIHRoZSBuYXRpdmUgaW5wdXQuXG4gICAgICovXG4gICAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuRWxlbWVudCA/IHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQgOiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAgIC8vIEluIDIuMCwgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYF9vbklyb25JbnB1dFJlYWR5YCBpcyBkb25lIGluXG4gICAgLy8gUGFwZXJJbnB1dEJlaGF2aW9yOjphdHRhY2hlZC5cbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICdpcm9uLWlucHV0LXJlYWR5JzogJ19vbklyb25JbnB1dFJlYWR5J1xuICAgIH0sXG5cbiAgICBfb25Jcm9uSW5wdXRSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgICAgaWYgKCEhdGhpcy5pbnB1dEVsZW1lbnQuYmluZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuJC5jb250YWluZXIuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJpcm9uLXJlcXVlc3QuaHRtbFwiPlxuXG48IS0tXG5UaGUgYGlyb24tYWpheGAgZWxlbWVudCBleHBvc2VzIG5ldHdvcmsgcmVxdWVzdCBmdW5jdGlvbmFsaXR5LlxuXG4gICAgPGlyb24tYWpheFxuICAgICAgICBhdXRvXG4gICAgICAgIHVybD1cImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoXCJcbiAgICAgICAgcGFyYW1zPSd7XCJwYXJ0XCI6XCJzbmlwcGV0XCIsIFwicVwiOlwicG9seW1lclwiLCBcImtleVwiOiBcIllPVVRVQkVfQVBJX0tFWVwiLCBcInR5cGVcIjogXCJ2aWRlb1wifSdcbiAgICAgICAgaGFuZGxlLWFzPVwianNvblwiXG4gICAgICAgIG9uLXJlc3BvbnNlPVwiaGFuZGxlUmVzcG9uc2VcIlxuICAgICAgICBkZWJvdW5jZS1kdXJhdGlvbj1cIjMwMFwiPjwvaXJvbi1hamF4PlxuXG5XaXRoIGBhdXRvYCBzZXQgdG8gYHRydWVgLCB0aGUgZWxlbWVudCBwZXJmb3JtcyBhIHJlcXVlc3Qgd2hlbmV2ZXJcbml0cyBgdXJsYCwgYHBhcmFtc2Agb3IgYGJvZHlgIHByb3BlcnRpZXMgYXJlIGNoYW5nZWQuIEF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkXG5yZXF1ZXN0cyB3aWxsIGJlIGRlYm91bmNlZCBpbiB0aGUgY2FzZSB0aGF0IG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGNoYW5nZWRcbnNlcXVlbnRpYWxseS5cblxuTm90ZTogVGhlIGBwYXJhbXNgIGF0dHJpYnV0ZSBtdXN0IGJlIGRvdWJsZSBxdW90ZWQgSlNPTi5cblxuWW91IGNhbiB0cmlnZ2VyIGEgcmVxdWVzdCBleHBsaWNpdGx5IGJ5IGNhbGxpbmcgYGdlbmVyYXRlUmVxdWVzdGAgb24gdGhlXG5lbGVtZW50LlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4tLT5cblxuPHNjcmlwdD5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIFBvbHltZXIoe1xuXG4gICAgaXM6ICdpcm9uLWFqYXgnLFxuXG4gICAgLyoqXG4gICAgICogRmlyZWQgYmVmb3JlIGEgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tYWpheC1wcmVzZW5kXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIGEgcmVxdWVzdCBpcyBzZW50LlxuICAgICAqXG4gICAgICogQGV2ZW50IHJlcXVlc3RcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LXJlcXVlc3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYSByZXNwb25zZSBpcyByZWNlaXZlZC5cbiAgICAgKlxuICAgICAqIEBldmVudCByZXNwb25zZVxuICAgICAqIEBldmVudCBpcm9uLWFqYXgtcmVzcG9uc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYW4gZXJyb3IgaXMgcmVjZWl2ZWQuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgZXJyb3JcbiAgICAgKiBAZXZlbnQgaXJvbi1hamF4LWVycm9yXG4gICAgICovXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIFVSTCB0YXJnZXQgb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcXVlcnkgcGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGVcbiAgICAgICAqIHNwZWNpZmllZCBgdXJsYCB3aGVuIGdlbmVyYXRpbmcgYSByZXF1ZXN0LiBJZiB5b3Ugd2lzaCB0byBzZXQgdGhlIGJvZHlcbiAgICAgICAqIGNvbnRlbnQgd2hlbiBtYWtpbmcgYSBQT1NUIHJlcXVlc3QsIHlvdSBzaG91bGQgdXNlIHRoZSBgYm9keWAgcHJvcGVydHlcbiAgICAgICAqIGluc3RlYWQuXG4gICAgICAgKi9cbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBzdWNoIGFzICdHRVQnLCAnUE9TVCcsICdQVVQnLCBvciAnREVMRVRFJy5cbiAgICAgICAqIERlZmF1bHQgaXMgJ0dFVCcuXG4gICAgICAgKi9cbiAgICAgIG1ldGhvZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnR0VUJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBIVFRQIHJlcXVlc3QgaGVhZGVycyB0byBzZW5kLlxuICAgICAgICpcbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKlxuICAgICAgICogICAgIDxpcm9uLWFqYXhcbiAgICAgICAqICAgICAgICAgYXV0b1xuICAgICAgICogICAgICAgICB1cmw9XCJodHRwOi8vc29tZXNpdGUuY29tXCJcbiAgICAgICAqICAgICAgICAgaGVhZGVycz0ne1wiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCJ9J1xuICAgICAgICogICAgICAgICBoYW5kbGUtYXM9XCJqc29uXCI+PC9pcm9uLWFqYXg+XG4gICAgICAgKlxuICAgICAgICogTm90ZTogc2V0dGluZyBhIGBDb250ZW50LVR5cGVgIGhlYWRlciBoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlIHZhbHVlXG4gICAgICAgKiBzcGVjaWZpZWQgYnkgdGhlIGBjb250ZW50VHlwZWAgcHJvcGVydHkgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDb250ZW50IHR5cGUgdG8gdXNlIHdoZW4gc2VuZGluZyBkYXRhLiBJZiB0aGUgYGNvbnRlbnRUeXBlYCBwcm9wZXJ0eVxuICAgICAgICogaXMgc2V0IGFuZCBhIGBDb250ZW50LVR5cGVgIGhlYWRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIGBoZWFkZXJzYFxuICAgICAgICogcHJvcGVydHksIHRoZSBgaGVhZGVyc2AgcHJvcGVydHkgdmFsdWUgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gICAgICAgKlxuICAgICAgICogVmFyaWVzIHRoZSBoYW5kbGluZyBvZiB0aGUgYGJvZHlgIHBhcmFtLlxuICAgICAgICovXG4gICAgICBjb250ZW50VHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEJvZHkgY29udGVudCB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QsIHR5cGljYWxseSB1c2VkIHdpdGggXCJQT1NUXCJcbiAgICAgICAqIHJlcXVlc3RzLlxuICAgICAgICpcbiAgICAgICAqIElmIGJvZHkgaXMgYSBzdHJpbmcgaXQgd2lsbCBiZSBzZW50IHVubW9kaWZpZWQuXG4gICAgICAgKlxuICAgICAgICogSWYgQ29udGVudC1UeXBlIGlzIHNldCB0byBhIHZhbHVlIGxpc3RlZCBiZWxvdywgdGhlblxuICAgICAgICogdGhlIGJvZHkgd2lsbCBiZSBlbmNvZGVkIGFjY29yZGluZ2x5LlxuICAgICAgICpcbiAgICAgICAqICAgICogYGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cImBcbiAgICAgICAqICAgICAgKiBib2R5IGlzIGVuY29kZWQgbGlrZSBge1wiZm9vXCI6XCJiYXIgYmF6XCIsXCJ4XCI6MX1gXG4gICAgICAgKiAgICAqIGBjb250ZW50LXR5cGU9XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcImBcbiAgICAgICAqICAgICAgKiBib2R5IGlzIGVuY29kZWQgbGlrZSBgZm9vPWJhcitiYXomeD0xYFxuICAgICAgICpcbiAgICAgICAqIE90aGVyd2lzZSB0aGUgYm9keSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgYnJvd3NlciB1bm1vZGlmaWVkLCBhbmQgaXRcbiAgICAgICAqIHdpbGwgaGFuZGxlIGFueSBlbmNvZGluZyAoZS5nLiBmb3IgRm9ybURhdGEsIEJsb2IsIEFycmF5QnVmZmVyKS5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdClcbiAgICAgICAqL1xuICAgICAgYm9keToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRvZ2dsZSB3aGV0aGVyIFhIUiBpcyBzeW5jaHJvbm91cyBvciBhc3luY2hyb25vdXMuIERvbid0IGNoYW5nZSB0aGlzXG4gICAgICAgKiB0byB0cnVlIHVubGVzcyBZb3UgS25vdyBXaGF0IFlvdSBBcmUgRG9pbmfihKIuXG4gICAgICAgKi9cbiAgICAgIHN5bmM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB3aGF0IGRhdGEgdG8gc3RvcmUgaW4gdGhlIGByZXNwb25zZWAgcHJvcGVydHksIGFuZFxuICAgICAgICogdG8gZGVsaXZlciBhcyBgZXZlbnQuZGV0YWlsLnJlc3BvbnNlYCBpbiBgcmVzcG9uc2VgIGV2ZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBPbmUgb2Y6XG4gICAgICAgKlxuICAgICAgICogICAgYHRleHRgOiB1c2VzIGBYSFIucmVzcG9uc2VUZXh0YC5cbiAgICAgICAqXG4gICAgICAgKiAgICBgeG1sYDogdXNlcyBgWEhSLnJlc3BvbnNlWE1MYC5cbiAgICAgICAqXG4gICAgICAgKiAgICBganNvbmA6IHVzZXMgYFhIUi5yZXNwb25zZVRleHRgIHBhcnNlZCBhcyBKU09OLlxuICAgICAgICpcbiAgICAgICAqICAgIGBhcnJheWJ1ZmZlcmA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKlxuICAgICAgICogICAgYGJsb2JgOiB1c2VzIGBYSFIucmVzcG9uc2VgLlxuICAgICAgICpcbiAgICAgICAqICAgIGBkb2N1bWVudGA6IHVzZXMgYFhIUi5yZXNwb25zZWAuXG4gICAgICAgKi9cbiAgICAgIGhhbmRsZUFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdqc29uJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhlIHdpdGhDcmVkZW50aWFscyBmbGFnIG9uIHRoZSByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGUgdGltZW91dCBmbGFnIG9uIHRoZSByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICB0aW1lb3V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgYXV0b21hdGljYWxseSBwZXJmb3JtcyBhbiBBamF4IHJlcXVlc3Qgd2hlbiBlaXRoZXIgYHVybGAgb3JcbiAgICAgICAqIGBwYXJhbXNgIGNoYW5nZXMuXG4gICAgICAgKi9cbiAgICAgIGF1dG86IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIGVycm9yIG1lc3NhZ2VzIHdpbGwgYXV0b21hdGljYWxseSBiZSBsb2dnZWQgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgKi9cbiAgICAgIHZlcmJvc2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtb3N0IHJlY2VudCByZXF1ZXN0IG1hZGUgYnkgdGhpcyBpcm9uLWFqYXggZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbGFzdFJlcXVlc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgd2hpbGUgbGFzdFJlcXVlc3QgaXMgaW4gZmxpZ2h0LlxuICAgICAgICovXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogbGFzdFJlcXVlc3QncyByZXNwb25zZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlIHRoYXQgbGFzdFJlc3BvbnNlIGFuZCBsYXN0RXJyb3IgYXJlIHNldCB3aGVuIGxhc3RSZXF1ZXN0IGZpbmlzaGVzLFxuICAgICAgICogc28gaWYgbG9hZGluZyBpcyB0cnVlLCB0aGVuIGxhc3RSZXNwb25zZSBhbmQgbGFzdEVycm9yIHdpbGwgY29ycmVzcG9uZFxuICAgICAgICogdG8gdGhlIHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgcmVxdWVzdC5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgcmVzcG9uc2UgaXMgZGV0ZXJtaW5lZCBieSB0aGUgdmFsdWUgb2YgYGhhbmRsZUFzYCBhdFxuICAgICAgICogdGhlIHRpbWUgdGhhdCB0aGUgcmVxdWVzdCB3YXMgZ2VuZXJhdGVkLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGxhc3RSZXNwb25zZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogbGFzdFJlcXVlc3QncyBlcnJvciwgaWYgYW55LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGxhc3RFcnJvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gQXJyYXkgb2YgYWxsIGluLWZsaWdodCByZXF1ZXN0cyBvcmlnaW5hdGluZyBmcm9tIHRoaXMgaXJvbi1hamF4XG4gICAgICAgKiBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBhY3RpdmVSZXF1ZXN0czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBMZW5ndGggb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZGVib3VuY2UgbXVsdGlwbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgcmVxdWVzdHMuXG4gICAgICAgKi9cbiAgICAgIGRlYm91bmNlRHVyYXRpb246IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFByZWZpeCB0byBiZSBzdHJpcHBlZCBmcm9tIGEgSlNPTiByZXNwb25zZSBiZWZvcmUgcGFyc2luZyBpdC5cbiAgICAgICAqXG4gICAgICAgKiBJbiBvcmRlciB0byBwcmV2ZW50IGFuIGF0dGFjayB1c2luZyBDU1JGIHdpdGggQXJyYXkgcmVzcG9uc2VzXG4gICAgICAgKiAoaHR0cDovL2hhYWNrZWQuY29tL2FyY2hpdmUvMjAwOC8xMS8yMC9hbmF0b215LW9mLWEtc3VidGxlLWpzb24tdnVsbmVyYWJpbGl0eS5hc3B4LylcbiAgICAgICAqIG1hbnkgYmFja2VuZHMgd2lsbCBtaXRpZ2F0ZSB0aGlzIGJ5IHByZWZpeGluZyBhbGwgSlNPTiByZXNwb25zZSBib2RpZXNcbiAgICAgICAqIHdpdGggYSBzdHJpbmcgdGhhdCB3b3VsZCBiZSBub25zZW5zaWNhbCB0byBhIEphdmFTY3JpcHQgcGFyc2VyLlxuICAgICAgICpcbiAgICAgICAqL1xuICAgICAganNvblByZWZpeDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBCeSBkZWZhdWx0LCBpcm9uLWFqYXgncyBldmVudHMgZG8gbm90IGJ1YmJsZS4gU2V0dGluZyB0aGlzIGF0dHJpYnV0ZSB3aWxsIGNhdXNlIGl0c1xuICAgICAgICogcmVxdWVzdCBhbmQgcmVzcG9uc2UgZXZlbnRzIGFzIHdlbGwgYXMgaXRzIGlyb24tYWpheC1yZXF1ZXN0LCAtcmVzcG9uc2UsICBhbmQgLWVycm9yXG4gICAgICAgKiBldmVudHMgdG8gYnViYmxlIHRvIHRoZSB3aW5kb3cgb2JqZWN0LiBUaGUgdmFuaWxsYSBlcnJvciBldmVudCBuZXZlciBidWJibGVzIHdoZW5cbiAgICAgICAqIHVzaW5nIHNoYWRvdyBkb20gZXZlbiBpZiB0aGlzLmJ1YmJsZXMgaXMgdHJ1ZSBiZWNhdXNlIGEgc2NvcGVkIGZsYWcgaXMgbm90IHBhc3NlZCB3aXRoXG4gICAgICAgKiBpdCAoZmlyc3QgbGluaykgYW5kIGJlY2F1c2UgdGhlIHNoYWRvdyBkb20gc3BlYyBkaWQgbm90IHVzZWQgdG8gYWxsb3cgY2VydGFpbiBldmVudHMsXG4gICAgICAgKiBpbmNsdWRpbmcgZXZlbnRzIG5hbWVkIGVycm9yLCB0byBsZWFrIG91dHNpZGUgb2Ygc2hhZG93IHRyZWVzIChzZWNvbmQgbGluaykuXG4gICAgICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jc2NvcGVkLWZsYWdcbiAgICAgICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDE1L1dELXNoYWRvdy1kb20tMjAxNTEyMTUvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXNcbiAgICAgICAqL1xuICAgICAgYnViYmxlczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hhbmdlcyB0aGUgW2Bjb21wbGV0ZXNgXShpcm9uLXJlcXVlc3QjcHJvcGVydHktY29tcGxldGVzKSBwcm9taXNlIGNoYWluIFxuICAgICAgICogZnJvbSBgZ2VuZXJhdGVSZXF1ZXN0YCB0byByZWplY3Qgd2l0aCBhbiBvYmplY3RcbiAgICAgICAqIGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHJlcXVlc3QsIGFzIHdlbGwgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgICAqIElmIGZhbHNlIChkZWZhdWx0KSwgdGhlIHByb21pc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yIG1lc3NhZ2Ugb25seS5cbiAgICAgICAqL1xuICAgICAgcmVqZWN0V2l0aFJlcXVlc3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfYm91bmRIYW5kbGVSZXNwb25zZToge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVSZXNwb25zZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9ic2VydmVyczogW1xuICAgICAgJ19yZXF1ZXN0T3B0aW9uc0NoYW5nZWQodXJsLCBtZXRob2QsIHBhcmFtcy4qLCBoZWFkZXJzLCBjb250ZW50VHlwZSwgJyArXG4gICAgICAgICAgJ2JvZHksIHN5bmMsIGhhbmRsZUFzLCBqc29uUHJlZml4LCB3aXRoQ3JlZGVudGlhbHMsIHRpbWVvdXQsIGF1dG8pJ1xuICAgIF0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBgdXJsYCwgc2VyaWFsaXplZCBmcm9tXG4gICAgICogdGhlIGN1cnJlbnQgdmFsdWUgb2YgYHBhcmFtc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHF1ZXJ5U3RyaW5nICgpIHtcbiAgICAgIHZhciBxdWVyeVBhcnRzID0gW107XG4gICAgICB2YXIgcGFyYW07XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIGZvciAocGFyYW0gaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnBhcmFtc1twYXJhbV07XG4gICAgICAgIHBhcmFtID0gd2luZG93LmVuY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcXVlcnlQYXJ0cy5wdXNoKHBhcmFtICsgJz0nICsgd2luZG93LmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHF1ZXJ5UGFydHMucHVzaChwYXJhbSArICc9JyArIHdpbmRvdy5lbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeVBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBxdWVyeVBhcnRzLmpvaW4oJyYnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGB1cmxgIHdpdGggcXVlcnkgc3RyaW5nIChpZiBgcGFyYW1zYCBhcmUgc3BlY2lmaWVkKSwgc3VpdGFibGUgZm9yXG4gICAgICogcHJvdmlkaW5nIHRvIGFuIGBpcm9uLXJlcXVlc3RgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCByZXF1ZXN0VXJsKCkge1xuICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gdGhpcy5xdWVyeVN0cmluZztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnVybCB8fCAnJztcblxuICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHZhciBiaW5kaW5nQ2hhciA9IHVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JztcbiAgICAgICAgcmV0dXJuIHVybCArIGJpbmRpbmdDaGFyICsgcXVlcnlTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hcHMgaGVhZGVyIG5hbWVzIHRvIGhlYWRlciB2YWx1ZXMsIGZpcnN0IGFwcGx5aW5nIHRoZVxuICAgICAqIHRoZSB2YWx1ZSBvZiBgQ29udGVudC1UeXBlYCBhbmQgdGhlbiBvdmVybGF5aW5nIHRoZSBoZWFkZXJzIHNwZWNpZmllZFxuICAgICAqIGluIHRoZSBgaGVhZGVyc2AgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHJlcXVlc3RIZWFkZXJzKCkge1xuICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuY29udGVudFR5cGU7XG4gICAgICBpZiAoY29udGVudFR5cGUgPT0gbnVsbCAmJiAodHlwZW9mIHRoaXMuYm9keSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSBjb250ZW50VHlwZTtcbiAgICAgIH1cbiAgICAgIHZhciBoZWFkZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGhlYWRlciBpbiB0aGlzLmhlYWRlcnMpIHtcbiAgICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSB0aGlzLmhlYWRlcnNbaGVhZGVyXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IG9wdGlvbnMgc3VpdGFibGUgZm9yIGdlbmVyYXRpbmcgYW4gYGlyb24tcmVxdWVzdGAgaW5zdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYGlyb24tYWpheGAgaW5zdGFuY2UncyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7e1xuICAgICAqICAgdXJsOiBzdHJpbmcsXG4gICAgICogICBtZXRob2Q6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGFzeW5jOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAqICAgYm9keTogKEFycmF5QnVmZmVyfEFycmF5QnVmZmVyVmlld3xCbG9ifERvY3VtZW50fEZvcm1EYXRhfG51bGx8c3RyaW5nfHVuZGVmaW5lZHxPYmplY3QpLFxuICAgICAqICAgaGVhZGVyczogKE9iamVjdHx1bmRlZmluZWQpLFxuICAgICAqICAgaGFuZGxlQXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGpzb25QcmVmaXg6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHdpdGhDcmVkZW50aWFsczogKGJvb2xlYW58dW5kZWZpbmVkKX19XG4gICAgICovXG4gICAgdG9SZXF1ZXN0T3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHRoaXMucmVxdWVzdFVybCB8fCAnJyxcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogdGhpcy5yZXF1ZXN0SGVhZGVycyxcbiAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICBhc3luYzogIXRoaXMuc3luYyxcbiAgICAgICAgaGFuZGxlQXM6IHRoaXMuaGFuZGxlQXMsXG4gICAgICAgIGpzb25QcmVmaXg6IHRoaXMuanNvblByZWZpeCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICByZWplY3RXaXRoUmVxdWVzdDogdGhpcy5yZWplY3RXaXRoUmVxdWVzdCxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIEFKQVggcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyFJcm9uUmVxdWVzdEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZXF1ZXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gLyoqIEB0eXBlIHshSXJvblJlcXVlc3RFbGVtZW50fSAqLyAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1yZXF1ZXN0JykpO1xuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0gdGhpcy50b1JlcXVlc3RPcHRpb25zKCk7XG5cbiAgICAgIHRoaXMucHVzaCgnYWN0aXZlUmVxdWVzdHMnLCByZXF1ZXN0KTtcblxuICAgICAgcmVxdWVzdC5jb21wbGV0ZXMudGhlbihcbiAgICAgICAgdGhpcy5fYm91bmRIYW5kbGVSZXNwb25zZVxuICAgICAgKS5jYXRjaChcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IuYmluZCh0aGlzLCByZXF1ZXN0KVxuICAgICAgKS50aGVuKFxuICAgICAgICB0aGlzLl9kaXNjYXJkUmVxdWVzdC5iaW5kKHRoaXMsIHJlcXVlc3QpXG4gICAgICApO1xuXG4gICAgICB2YXIgZXZ0ID0gdGhpcy5maXJlKCdpcm9uLWFqYXgtcHJlc2VuZCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtidWJibGVzOiB0aGlzLmJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWV9KTtcblxuICAgICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdC5yZWplY3RDb21wbGV0ZXMocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LnNlbmQocmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9zZXRMYXN0UmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgIHRoaXMuX3NldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIHRoaXMuZmlyZSgncmVxdWVzdCcsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgb3B0aW9uczogcmVxdWVzdE9wdGlvbnNcbiAgICAgIH0sIHtcbiAgICAgICAgYnViYmxlczogdGhpcy5idWJibGVzLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1hamF4LXJlcXVlc3QnLCB7XG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgIG9wdGlvbnM6IHJlcXVlc3RPcHRpb25zXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVJlc3BvbnNlOiBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgICBpZiAocmVxdWVzdCA9PT0gdGhpcy5sYXN0UmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9zZXRMYXN0UmVzcG9uc2UocmVxdWVzdC5yZXNwb25zZSk7XG4gICAgICAgIHRoaXMuX3NldExhc3RFcnJvcihudWxsKTtcbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcmUoJ3Jlc3BvbnNlJywgcmVxdWVzdCwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1hamF4LXJlc3BvbnNlJywgcmVxdWVzdCwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbihyZXF1ZXN0LCBlcnJvcikge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICBQb2x5bWVyLkJhc2UuX2Vycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3QgPT09IHRoaXMubGFzdFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5fc2V0TGFzdEVycm9yKHtcbiAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICBzdGF0dXM6IHJlcXVlc3QueGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0Lnhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHJlc3BvbnNlOiByZXF1ZXN0Lnhoci5yZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2V0TGFzdFJlc3BvbnNlKG51bGwpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGVzdHMgZmFpbCBpZiB0aGlzIGdvZXMgYWZ0ZXIgdGhlIG5vcm1hbCB0aGlzLmZpcmUoJ2Vycm9yJywgLi4uKVxuICAgICAgdGhpcy5maXJlKCdpcm9uLWFqYXgtZXJyb3InLCB7XG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSwge1xuICAgICAgICBidWJibGVzOiB0aGlzLmJ1YmJsZXMsXG4gICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maXJlKCdlcnJvcicsIHtcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9LCB7XG4gICAgICAgIGJ1YmJsZXM6IHRoaXMuYnViYmxlcyxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfZGlzY2FyZFJlcXVlc3Q6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgIHZhciByZXF1ZXN0SW5kZXggPSB0aGlzLmFjdGl2ZVJlcXVlc3RzLmluZGV4T2YocmVxdWVzdCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0SW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnNwbGljZSgnYWN0aXZlUmVxdWVzdHMnLCByZXF1ZXN0SW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmVxdWVzdE9wdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGVib3VuY2UoJ2dlbmVyYXRlLXJlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvKSB7XG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZVJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWJvdW5jZUR1cmF0aW9uKTtcbiAgICB9LFxuXG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYWpheC9pcm9uLWFqYXguaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuXG5gaXJvbi1saXN0YCBkaXNwbGF5cyBhIHZpcnR1YWwsICdpbmZpbml0ZScgbGlzdC4gVGhlIHRlbXBsYXRlIGluc2lkZVxudGhlIGlyb24tbGlzdCBlbGVtZW50IHJlcHJlc2VudHMgdGhlIERPTSB0byBjcmVhdGUgZm9yIGVhY2ggbGlzdCBpdGVtLlxuVGhlIGBpdGVtc2AgcHJvcGVydHkgc3BlY2lmaWVzIGFuIGFycmF5IG9mIGxpc3QgaXRlbSBkYXRhLlxuXG5Gb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgbm90IGV2ZXJ5IGl0ZW0gaW4gdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXQgb25jZTtcbmluc3RlYWQgYSBzbWFsbCBzdWJzZXQgb2YgYWN0dWFsIHRlbXBsYXRlIGVsZW1lbnRzICooZW5vdWdoIHRvIGZpbGwgdGhlIHZpZXdwb3J0KSpcbmFyZSByZW5kZXJlZCBhbmQgcmV1c2VkIGFzIHRoZSB1c2VyIHNjcm9sbHMuIEFzIHN1Y2gsIGl0IGlzIGltcG9ydGFudCB0aGF0IGFsbFxuc3RhdGUgb2YgdGhlIGxpc3QgdGVtcGxhdGUgaXMgYm91bmQgdG8gdGhlIG1vZGVsIGRyaXZpbmcgaXQsIHNpbmNlIHRoZSB2aWV3IG1heVxuYmUgcmV1c2VkIHdpdGggYSBuZXcgbW9kZWwgYXQgYW55IHRpbWUuIFBhcnRpY3VsYXJseSwgYW55IHN0YXRlIHRoYXQgbWF5IGNoYW5nZVxuYXMgdGhlIHJlc3VsdCBvZiBhIHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgbGlzdCBpdGVtIG11c3QgYmUgYm91bmQgdG8gdGhlIG1vZGVsXG50byBhdm9pZCB2aWV3IHN0YXRlIGluY29uc2lzdGVuY3kuXG5cbiMjIyBTaXppbmcgaXJvbi1saXN0XG5cbmBpcm9uLWxpc3RgIG11c3QgZWl0aGVyIGJlIGV4cGxpY2l0bHkgc2l6ZWQsIG9yIGRlbGVnYXRlIHNjcm9sbGluZyB0byBhblxuZXhwbGljaXRseSBzaXplZCBwYXJlbnQuIEJ5IFwiZXhwbGljaXRseSBzaXplZFwiLCB3ZSBtZWFuIGl0IGVpdGhlciBoYXMgYW4gZXhwbGljaXRcbkNTUyBgaGVpZ2h0YCBwcm9wZXJ0eSBzZXQgdmlhIGEgY2xhc3Mgb3IgaW5saW5lIHN0eWxlLCBvciBlbHNlIGlzIHNpemVkIGJ5IG90aGVyXG5sYXlvdXQgbWVhbnMgKGUuZy4gdGhlIGBmbGV4YCBvciBgZml0YCBjbGFzc2VzKS5cblxuIyMjIyBGbGV4Ym94IC0gW2pzYmluXShodHRwOi8vanNiaW4uY29tL2tva2FraS9lZGl0P2h0bWwsb3V0cHV0KVxuXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBFeHBsaWNpdCBzaXplIC0gW2pzYmluXShodHRwOi8vanNiaW4uY29tL3BpYmVmby9lZGl0P2h0bWwsb3V0cHV0KVxuYGBgaHRtbFxuPHRlbXBsYXRlIGlzPVwieC1saXN0XCI+XG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpcm9uLWxpc3Qge1xuICAgICAgaGVpZ2h0OiAxMDB2aDsgLyogZG9uJ3QgdXNlICUgdmFsdWVzIHVubGVzcyB0aGUgcGFyZW50IGVsZW1lbnQgaXMgc2l6ZWQuICovXG4gICAgfVxuICA8L3N0eWxlPlxuICA8aXJvbi1saXN0IGl0ZW1zPVwiW1tpdGVtc11dXCI+XG4gICAgPHRlbXBsYXRlPlxuICAgICAgPGRpdj5cbiAgICAgICAgLi4uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2lyb24tbGlzdD5cbjwvdGVtcGxhdGU+XG5gYGBcbiMjIyMgTWFpbiBkb2N1bWVudCBzY3JvbGxpbmcgLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20vY29qdWxpL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48aGVhZD5cbiAgPHN0eWxlPlxuICAgIGJvZHkge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGFwcC10b29sYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICBpcm9uLWxpc3Qge1xuICAgICAgLyogYWRkIHBhZGRpbmcgc2luY2UgdGhlIGFwcC10b29sYmFyIGlzIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8YXBwLXRvb2xiYXI+QXBwIG5hbWU8L2FwcC10b29sYmFyPlxuICA8aXJvbi1saXN0IHNjcm9sbC10YXJnZXQ9XCJkb2N1bWVudFwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L2JvZHk+XG5gYGBcblxuYGlyb24tbGlzdGAgbXVzdCBiZSBnaXZlbiBhIGA8dGVtcGxhdGU+YCB3aGljaCBjb250YWlucyBleGFjdGx5IG9uZSBlbGVtZW50LiBJbiB0aGUgZXhhbXBsZXNcbmFib3ZlIHdlIHVzZWQgYSBgPGRpdj5gLCBidXQgeW91IGNhbiBwcm92aWRlIGFueSBlbGVtZW50IChpbmNsdWRpbmcgY3VzdG9tIGVsZW1lbnRzKS5cblxuIyMjIFRlbXBsYXRlIG1vZGVsXG5cbkxpc3QgaXRlbSB0ZW1wbGF0ZXMgc2hvdWxkIGJpbmQgdG8gdGVtcGxhdGUgbW9kZWxzIG9mIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuXG5gYGBqc1xue1xuICBpbmRleDogMCwgICAgICAgIC8vIGluZGV4IGluIHRoZSBpdGVtIGFycmF5XG4gIHNlbGVjdGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB0aGUgY3VycmVudCBpdGVtIGlzIHNlbGVjdGVkXG4gIHRhYkluZGV4OiAtMSwgICAgLy8gYSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgdGFiSW5kZXggZm9yIGZvY3VzIG1hbmFnZW1lbnRcbiAgaXRlbToge30gICAgICAgICAvLyB1c2VyIGRhdGEgY29ycmVzcG9uZGluZyB0byBpdGVtc1tpbmRleF1cbn1cbmBgYFxuXG5BbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSB1c2VkIGFzIGRhdGEgaW5kZXggYnkgY2hhbmdpbmcgdGhlXG5gaW5kZXhBc2AgcHJvcGVydHkuIFRoZSBgYXNgIHByb3BlcnR5IGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZ1xuc2NvcGUgZm9yIHRoZSBhcnJheS5cblxuRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgYGRhdGFgIGFycmF5OlxuXG4jIyMjIyBkYXRhLmpzb25cblxuYGBganNcbltcbiAge1wibmFtZVwiOiBcIkJvYlwifSxcbiAge1wibmFtZVwiOiBcIlRpbVwifSxcbiAge1wibmFtZVwiOiBcIk1pa2VcIn1cbl1cbmBgYFxuXG5UaGUgZm9sbG93aW5nIGNvZGUgd291bGQgcmVuZGVyIHRoZSBsaXN0IChub3RlIHRoZSBuYW1lIHByb3BlcnR5IGlzIGJvdW5kIGZyb20gdGhlIG1vZGVsXG5vYmplY3QgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIHNjb3BlKTpcblxuYGBgaHRtbFxuPGlyb24tYWpheCB1cmw9XCJkYXRhLmpzb25cIiBsYXN0LXJlc3BvbnNlPVwie3tkYXRhfX1cIiBhdXRvPjwvaXJvbi1hamF4PlxuPGlyb24tbGlzdCBpdGVtcz1cIltbZGF0YV1dXCIgYXM9XCJpdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgTmFtZTogW1tpdGVtLm5hbWVdXVxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9pcm9uLWxpc3Q+XG5gYGBcblxuIyMjIEdyaWQgbGF5b3V0XG5cbmBpcm9uLWxpc3RgIHN1cHBvcnRzIGEgZ3JpZCBsYXlvdXQgaW4gYWRkaXRpb24gdG8gbGluZWFyIGxheW91dCBieSBzZXR0aW5nXG50aGUgYGdyaWRgIGF0dHJpYnV0ZS4gIEluIHRoaXMgY2FzZSwgdGhlIGxpc3QgdGVtcGxhdGUgaXRlbSBtdXN0IGhhdmUgYm90aCBmaXhlZFxud2lkdGggYW5kIGhlaWdodCAoZS5nLiB2aWEgQ1NTKS4gQmFzZWQgb24gdGhpcywgdGhlIG51bWJlciBvZiBpdGVtc1xucGVyIHJvdyBhcmUgZGV0ZXJtaW5lZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBsaXN0IHZpZXdwb3J0LlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5gaXJvbi1saXN0YCBhdXRvbWF0aWNhbGx5IG1hbmFnZXMgdGhlIGZvY3VzIHN0YXRlIGZvciB0aGUgaXRlbXMuIEl0IGFsc28gcHJvdmlkZXNcbmEgYHRhYkluZGV4YCBwcm9wZXJ0eSB3aXRoaW4gdGhlIHRlbXBsYXRlIHNjb3BlIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24uXG5Gb3IgZXhhbXBsZSwgdXNlcnMgY2FuIHByZXNzIHRoZSB1cCBhbmQgZG93biBrZXlzIHRvIG1vdmUgdG8gcHJldmlvdXMgYW5kIG5leHRcbml0ZW1zIGluIHRoZSBsaXN0OlxuXG5gYGBodG1sXG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXYgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCI+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgU3R5bGluZ1xuXG5Zb3UgY2FuIHVzZSB0aGUgYC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcmAgbWl4aW4gdG8gc3R5bGUgdGhlIGNvbnRhaW5lciBvZiBpdGVtczpcblxuYGBgY3NzXG5pcm9uLWxpc3Qge1xuIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfTtcbn1cbmBgYFxuXG4jIyMgUmVzaXppbmdcblxuYGlyb24tbGlzdGAgbGF5cyBvdXQgdGhlIGl0ZW1zIHdoZW4gaXQgcmVjZWl2ZXMgYSBub3RpZmljYXRpb24gdmlhIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50LlxuVGhpcyBldmVudCBpcyBmaXJlZCBieSBhbnkgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYElyb25SZXNpemFibGVCZWhhdmlvcmAuXG5cbkJ5IGRlZmF1bHQsIGVsZW1lbnRzIHN1Y2ggYXMgYGlyb24tcGFnZXNgLCBgcGFwZXItdGFic2Agb3IgYHBhcGVyLWRpYWxvZ2Agd2lsbCB0cmlnZ2VyXG50aGlzIGV2ZW50IGF1dG9tYXRpY2FsbHkuIElmIHlvdSBoaWRlIHRoZSBsaXN0IG1hbnVhbGx5IChlLmcuIHlvdSB1c2UgYGRpc3BsYXk6IG5vbmVgKVxueW91IG1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgIG9yIGZpcmUgdGhpcyBldmVudCBtYW51YWxseSByaWdodFxuYWZ0ZXIgdGhlIGxpc3QgYmVjYW1lIHZpc2libGUgYWdhaW4uIEZvciBleGFtcGxlOlxuXG5gYGBqc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaXJvbi1saXN0JykuZmlyZSgnaXJvbi1yZXNpemUnKTtcbmBgYFxuXG4jIyMgV2hlbiBzaG91bGQgYDxpcm9uLWxpc3Q+YCBiZSB1c2VkP1xuXG5gaXJvbi1saXN0YCBzaG91bGQgYmUgdXNlZCB3aGVuIGEgcGFnZSBoYXMgc2lnbmlmaWNhbnRseSBtb3JlIERPTSBub2RlcyB0aGFuIHRoZSBvbmVzXG52aXNpYmxlIG9uIHRoZSBzY3JlZW4uIGUuZy4gdGhlIHBhZ2UgaGFzIDUwMCBub2RlcywgYnV0IG9ubHkgMjAgYXJlIHZpc2libGUgYXQgYSB0aW1lLlxuVGhpcyBpcyB3aHkgd2UgcmVmZXIgdG8gaXQgYXMgYSBgdmlydHVhbGAgbGlzdC4gSW4gdGhpcyBjYXNlLCBhIGBkb20tcmVwZWF0YCB3aWxsIHN0aWxsXG5jcmVhdGUgNTAwIG5vZGVzIHdoaWNoIGNvdWxkIHNsb3cgZG93biB0aGUgd2ViIGFwcCwgYnV0IGBpcm9uLWxpc3RgIHdpbGwgb25seSBjcmVhdGUgMjAuXG5cbkhvd2V2ZXIsIGhhdmluZyBhbiBgaXJvbi1saXN0YCBkb2VzIG5vdCBtZWFuIHRoYXQgeW91IGNhbiBsb2FkIGFsbCB0aGUgZGF0YSBhdCBvbmNlLlxuU2F5IHlvdSBoYXZlIGEgbWlsbGlvbiByZWNvcmRzIGluIHRoZSBkYXRhYmFzZSwgeW91IHdhbnQgdG8gc3BsaXQgdGhlIGRhdGEgaW50byBwYWdlc1xuc28geW91IGNhbiBicmluZyBpbiBhIHBhZ2UgYXQgdGhlIHRpbWUuIFRoZSBwYWdlIGNvdWxkIGNvbnRhaW4gNTAwIGl0ZW1zLCBhbmQgaXJvbi1saXN0XG53aWxsIG9ubHkgcmVuZGVyIDIwLlxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50XG5AZWxlbWVudCBpcm9uLWxpc3RcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWxpc3RcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWF4LWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjaXRlbXMge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2dyaWRdKSkgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhcnJheS1zZWxlY3RvclxuICAgICAgICBpZD1cInNlbGVjdG9yXCJcbiAgICAgICAgaXRlbXM9XCJ7e2l0ZW1zfX1cIlxuICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWRJdGVtc319XCJcbiAgICAgICAgc2VsZWN0ZWQtaXRlbT1cInt7c2VsZWN0ZWRJdGVtfX1cIj48L2FycmF5LXNlbGVjdG9yPlxuXG4gICAgPGRpdiBpZD1cIml0ZW1zXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLyk7XG4gIHZhciBJT1NfVE9VQ0hfU0NST0xMSU5HID0gSU9TICYmIElPU1sxXSA+PSA4O1xuICB2YXIgREVGQVVMVF9QSFlTSUNBTF9DT1VOVCA9IDM7XG4gIHZhciBISURERU5fWSA9ICctMTAwMDBweCc7XG4gIHZhciBJVEVNX1dJRFRIID0gMDtcbiAgdmFyIElURU1fSEVJR0hUID0gMTtcbiAgdmFyIFNFQ1JFVF9UQUJJTkRFWCA9IC0xMDA7XG4gIHZhciBJU19WMiA9IFBvbHltZXIuZmx1c2ggIT0gbnVsbDtcbiAgdmFyIEFOSU1BVElPTl9GUkFNRSA9IElTX1YyID8gUG9seW1lci5Bc3luYy5hbmltYXRpb25GcmFtZSA6IDA7XG4gIHZhciBJRExFX1RJTUUgPSBJU19WMiA/IFBvbHltZXIuQXN5bmMuaWRsZVBlcmlvZCA6IDE7XG4gIHZhciBNSUNST19UQVNLID0gSVNfVjIgPyBQb2x5bWVyLkFzeW5jLm1pY3JvVGFzayA6IDI7XG5cbiAgLyogUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IgaXMgb25seSBhdmFpbGFibGUgd2l0aCBQb2x5bWVyIDIuMC4gKi9cbiAgaWYgKCFQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvcikge1xuICAgIC8qIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgICBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciA9IHt9O1xuICB9XG5cbiAgUG9seW1lcih7XG5cbiAgICBpczogJ2lyb24tbGlzdCcsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gYXJyYXkgY29udGFpbmluZyBpdGVtcyBkZXRlcm1pbmluZyBob3cgbWFueSBpbnN0YW5jZXMgb2YgdGhlIHRlbXBsYXRlXG4gICAgICAgKiB0byBzdGFtcCBhbmQgdGhhdCB0aGF0IGVhY2ggdGVtcGxhdGUgaW5zdGFuY2Ugc2hvdWxkIGJpbmQgdG8uXG4gICAgICAgKi9cbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgZm9yIHRoZSBhcnJheVxuICAgICAgICogZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAgICAgICAqL1xuICAgICAgYXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2l0ZW0nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgd2l0aCB0aGUgaW5kZXhcbiAgICAgICAqIGZvciB0aGUgcm93LlxuICAgICAgICovXG4gICAgICBpbmRleEFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdpbmRleCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB0byBpbmRpY2F0ZVxuICAgICAgICogaWYgdGhlIHJvdyBpcyBzZWxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRBczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnc2VsZWN0ZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXMgYSBncmlkLiBHcmlkIGl0ZW1zIG11c3QgaGF2ZVxuICAgICAgICogZml4ZWQgd2lkdGggYW5kIGhlaWdodCBzZXQgdmlhIENTUy4gZS5nLlxuICAgICAgICpcbiAgICAgICAqIGBgYGh0bWxcbiAgICAgICAqIDxpcm9uLWxpc3QgZ3JpZD5cbiAgICAgICAqICAgPHRlbXBsYXRlPlxuICAgICAgICogICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1wiPiAxMDB4MTAwIDwvZGl2PlxuICAgICAgICogICA8L3RlbXBsYXRlPlxuICAgICAgICogPC9pcm9uLWxpc3Q+XG4gICAgICAgKiBgYGBcbiAgICAgICAqL1xuICAgICAgZ3JpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZ3JpZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSwgdGFwcGluZyBhIHJvdyB3aWxsIHNlbGVjdCB0aGUgaXRlbSwgcGxhY2luZyBpdHMgZGF0YSBtb2RlbFxuICAgICAgICogaW4gdGhlIHNldCBvZiBzZWxlY3RlZCBpdGVtcyByZXRyaWV2YWJsZSB2aWEgdGhlIHNlbGVjdGlvbiBwcm9wZXJ0eS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlIHRoYXQgdGFwcGluZyBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBsaXN0IGl0ZW0gd2lsbCBub3RcbiAgICAgICAqIHJlc3VsdCBpbiBzZWxlY3Rpb24sIHNpbmNlIHRoZXkgYXJlIHByZXN1bWVkIHRvIGhhdmUgdGhlaXIgKiBvd24gYWN0aW9uLlxuICAgICAgICovXG4gICAgICBzZWxlY3Rpb25FbmFibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgZmFsc2UsIHRoaXMgaXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBgbnVsbGBcbiAgICAgICAqIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkSXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgdHJ1ZSwgdGhpcyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBzZWxlY3RlZCBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGB0cnVlYCwgbXVsdGlwbGUgaXRlbXMgbWF5IGJlIHNlbGVjdGVkIGF0IG9uY2UgKGluIHRoaXMgY2FzZSxcbiAgICAgICAqIGBzZWxlY3RlZGAgaXMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zKS4gIFdoZW4gYGZhbHNlYCxcbiAgICAgICAqIG9ubHkgb25lIGl0ZW0gbWF5IGJlIHNlbGVjdGVkIGF0IGEgdGltZS5cbiAgICAgICAqL1xuICAgICAgbXVsdGlTZWxlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvZmZzZXQgdG9wIGZyb20gdGhlIHNjcm9sbGluZyBlbGVtZW50IHRvIHRoZSBpcm9uLWxpc3QgZWxlbWVudC5cbiAgICAgICAqIFRoaXMgdmFsdWUgY2FuIGJlIGNvbXB1dGVkIHVzaW5nIHRoZSBwb3NpdGlvbiByZXR1cm5lZCBieSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClgXG4gICAgICAgKiBhbHRob3VnaCBpdCdzIHByZWZlcnJlZCB0byB1c2UgYSBjb25zdGFudCB2YWx1ZSB3aGVuIHBvc3NpYmxlLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdXNlZnVsIHdoZW4gYW4gZXh0ZXJuYWwgc2Nyb2xsaW5nIGVsZW1lbnQgaXMgdXNlZCBhbmQgdGhlcmUnc1xuICAgICAgICogc29tZSBvZmZzZXQgYmV0d2VlbiB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgYW5kIHRoZSBsaXN0LlxuICAgICAgICogRm9yIGV4YW1wbGU6IGEgaGVhZGVyIGlzIHBsYWNlZCBhYm92ZSB0aGUgbGlzdC5cbiAgICAgICAqL1xuICAgICAgc2Nyb2xsT2Zmc2V0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAnX2l0ZW1zQ2hhbmdlZChpdGVtcy4qKScsXG4gICAgICAnX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkKHNlbGVjdGlvbkVuYWJsZWQpJyxcbiAgICAgICdfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkKG11bHRpU2VsZWN0aW9uKScsXG4gICAgICAnX3NldE92ZXJmbG93KHNjcm9sbFRhcmdldCwgc2Nyb2xsT2Zmc2V0KSdcbiAgICBdLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlRlbXBsYXRpemVyLFxuICAgICAgUG9seW1lci5Jcm9uUmVzaXphYmxlQmVoYXZpb3IsXG4gICAgICBQb2x5bWVyLklyb25TY3JvbGxUYXJnZXRCZWhhdmlvcixcbiAgICAgIFBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbyBvZiBoaWRkZW4gdGlsZXMgdGhhdCBzaG91bGQgcmVtYWluIGluIHRoZSBzY3JvbGwgZGlyZWN0aW9uLlxuICAgICAqIFJlY29tbWVuZGVkIHZhbHVlIH4wLjUsIHNvIGl0IHdpbGwgZGlzdHJpYnV0ZSB0aWxlcyBldmVseSBpbiBib3RoIGRpcmVjdGlvbnMuXG4gICAgICovXG4gICAgX3JhdGlvOiAwLjUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFkZGluZy10b3AgdmFsdWUgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIF9zY3JvbGxlclBhZGRpbmdUb3A6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIGBzY3JvbGxUb3BgLlxuICAgICAqL1xuICAgIF9zY3JvbGxQb3NpdGlvbjogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdW0gb2YgdGhlIGhlaWdodHMgb2YgYWxsIHRoZSB0aWxlcyBpbiB0aGUgRE9NLlxuICAgICAqL1xuICAgIF9waHlzaWNhbFNpemU6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXZlcmFnZSBgb2Zmc2V0SGVpZ2h0YCBvZiB0aGUgdGlsZXMgb2JzZXJ2ZWQgdGlsbCBub3cuXG4gICAgICovXG4gICAgX3BoeXNpY2FsQXZlcmFnZTogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdGlsZXMgd2hpY2ggYG9mZnNldEhlaWdodGAgPiAwIG9ic2VydmVkIHVudGlsIG5vdy5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxBdmVyYWdlQ291bnQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgaXRlbSByZW5kZXJlZCBpbiB0aGUgYF9waHlzaWNhbFN0YXJ0YFxuICAgICAqIHRpbGUgcmVsYXRpdmUgdG8gdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgICAqL1xuICAgIF9waHlzaWNhbFRvcDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgX3ZpcnR1YWxDb3VudDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlc3RpbWF0ZWQgc2Nyb2xsIGhlaWdodCBiYXNlZCBvbiBgX3BoeXNpY2FsQXZlcmFnZWBcbiAgICAgKi9cbiAgICBfZXN0U2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbCBoZWlnaHQgb2YgdGhlIGRvbSBub2RlXG4gICAgICovXG4gICAgX3Njcm9sbEhlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mIGxpc3QuXG4gICAgICovXG4gICAgX3ZpZXdwb3J0SGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBsaXN0LiBUaGlzIGlzIHJlZmVycmVkIGFzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY29udGV4dCBvZiBsaXN0LlxuICAgICAqL1xuICAgIF92aWV3cG9ydFdpZHRoOiAwLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGN1cnJlbnRseSBpbiB0aGUgdHJlZVxuICAgICAqIEB0eXBlIHs/QXJyYXk8IVRlbXBsYXRpemVyTm9kZT59XG4gICAgICovXG4gICAgX3BoeXNpY2FsSXRlbXM6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBoZWlnaHRzIGZvciBlYWNoIGl0ZW0gaW4gYF9waHlzaWNhbEl0ZW1zYFxuICAgICAqIEB0eXBlIHs/QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxTaXplczogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgY2FjaGVkIHZhbHVlIGZvciB0aGUgZmlyc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgKiBTZWUgYGZpcnN0VmlzaWJsZUluZGV4YFxuICAgICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgICAqL1xuICAgIF9maXJzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgUG9seW1lciBjb2xsZWN0aW9uIGZvciB0aGUgaXRlbXMuXG4gICAgICogQHR5cGUgez9Qb2x5bWVyLkNvbGxlY3Rpb259XG4gICAgICovXG4gICAgX2NvbGxlY3Rpb246IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBBIGNhY2hlZCB2YWx1ZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgKiBTZWUgYGxhc3RWaXNpYmxlSW5kZXhgXG4gICAgICogQHR5cGUgez9udW1iZXJ9XG4gICAgICovXG4gICAgX2xhc3RWaXNpYmxlSW5kZXhWYWw6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IG51bWJlciBvZiBwYWdlcyB0byByZW5kZXIuIE9uZSBwYWdlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGhlaWdodCBvZiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBfbWF4UGFnZXM6IDIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGZvY3VzZWQgcGh5c2ljYWwgaXRlbS5cbiAgICAgKi9cbiAgICBfZm9jdXNlZEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmlydHVhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkVmlydHVhbEluZGV4OiAtMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwaHlzaWNhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkUGh5c2ljYWxJbmRleDogLTEsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGhlIGl0ZW0gdGhhdCBpcyBmb2N1c2VkIGlmIGl0IGlzIG1vdmVkIG9mZnNjcmVlbi5cbiAgICAgKiBAcHJpdmF0ZSB7P1RlbXBsYXRpemVyTm9kZX1cbiAgICAgKi9cbiAgICBfb2Zmc2NyZWVuRm9jdXNlZEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbSB0aGF0IGJhY2tmaWxscyB0aGUgYF9vZmZzY3JlZW5Gb2N1c2VkSXRlbWAgaW4gdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogbGlzdCB3aGVuIHRoYXQgaXRlbSBpcyBtb3ZlZCBvZmZzY3JlZW4uXG4gICAgICovXG4gICAgX2ZvY3VzQmFja2ZpbGxJdGVtOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gaXRlbXMgcGVyIHJvd1xuICAgICAqL1xuICAgIF9pdGVtc1BlclJvdzogMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiBlYWNoIGdyaWQgaXRlbVxuICAgICAqL1xuICAgIF9pdGVtV2lkdGg6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cgaW4gZ3JpZCBsYXlvdXQuXG4gICAgICovXG4gICAgX3Jvd0hlaWdodDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb3N0IG9mIHN0YW1waW5nIGEgdGVtcGxhdGUgaW4gbXMuXG4gICAgICovXG4gICAgX3RlbXBsYXRlQ29zdDogMCxcblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCB0byBwYXNzIGV2ZW50Lm1vZGVsIHByb3BlcnR5IHRvIGRlY2xhcmF0aXZlIGV2ZW50IGhhbmRsZXJzIC1cbiAgICAgKiBzZWUgcG9seW1lci9wb2x5bWVyIzQzMzkuXG4gICAgICovXG4gICAgX3BhcmVudE1vZGVsOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGJvdHRvbSBvZiB0aGUgcGh5c2ljYWwgY29udGVudC5cbiAgICAgKi9cbiAgICBnZXQgX3BoeXNpY2FsQm90dG9tKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm90dG9tIG9mIHRoZSBzY3JvbGwuXG4gICAgICovXG4gICAgZ2V0IF9zY3JvbGxCb3R0b20oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsUG9zaXRpb24gKyB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG4tdGggaXRlbSByZW5kZXJlZCBpbiB0aGUgbGFzdCBwaHlzaWNhbCBpdGVtLlxuICAgICAqL1xuICAgIGdldCBfdmlydHVhbEVuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyB0aGlzLl9waHlzaWNhbENvdW50IC0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcGh5c2ljYWwgY29udGVudCB0aGF0IGlzbid0IG9uIHRoZSBzY3JlZW4uXG4gICAgICovXG4gICAgZ2V0IF9oaWRkZW5Db250ZW50U2l6ZSgpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5ncmlkID8gdGhpcy5fcGh5c2ljYWxSb3dzICogdGhpcy5fcm93SGVpZ2h0IDogdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgICAgcmV0dXJuIHNpemUgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGZvciB0aGUgX3VzZXJUZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBnZXQgX2l0ZW1zUGFyZW50KCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuZG9tKFBvbHltZXIuZG9tKHRoaXMuX3VzZXJUZW1wbGF0ZSkucGFyZW50Tm9kZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHNjcm9sbCB0b3AgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IF9tYXhTY3JvbGxUb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fdmlld3BvcnRIZWlnaHQgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXJnZXN0IG4tdGggdmFsdWUgZm9yIGFuIGl0ZW0gc3VjaCB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCBpbiBgX3BoeXNpY2FsU3RhcnRgLlxuICAgICAqL1xuICAgIGdldCBfbWF4VmlydHVhbFN0YXJ0KCkge1xuICAgICAgdmFyIHZpcnR1YWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3codGhpcy5fdmlydHVhbENvdW50KTtcbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCB2aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50KTtcbiAgICB9LFxuXG4gICAgc2V0IF92aXJ0dWFsU3RhcnQodmFsKSB7XG4gICAgICB2YWwgPSB0aGlzLl9jbGFtcCh2YWwsIDAsIHRoaXMuX21heFZpcnR1YWxTdGFydCk7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfdmlydHVhbFN0YXJ0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydFZhbCB8fCAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgay10aCB0aWxlIHRoYXQgaXMgYXQgdGhlIHRvcCBvZiB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgc2V0IF9waHlzaWNhbFN0YXJ0KHZhbCkge1xuICAgICAgdmFsID0gdmFsICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgIHZhbCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsID0gdmFsO1xuICAgIH0sXG5cbiAgICBnZXQgX3BoeXNpY2FsU3RhcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxTdGFydFZhbCB8fCAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgay10aCB0aWxlIHRoYXQgaXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgZ2V0IF9waHlzaWNhbEVuZCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcGh5c2ljYWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxKSAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgfSxcblxuICAgIHNldCBfcGh5c2ljYWxDb3VudCh2YWwpIHtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbENvdW50VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGltYWwgcGh5c2ljYWwgc2l6ZSBzdWNoIHRoYXQgd2Ugd2lsbCBoYXZlIGVub3VnaCBwaHlzaWNhbCBpdGVtc1xuICAgICAqIHRvIGZpbGwgdXAgdGhlIHZpZXdwb3J0IGFuZCByZWN5Y2xlIHdoZW4gdGhlIHVzZXIgc2Nyb2xscy5cbiAgICAgKlxuICAgICAqIFRoaXMgZGVmYXVsdCB2YWx1ZSBhc3N1bWVzIHRoYXQgd2Ugd2lsbCBhdCBsZWFzdCBoYXZlIHRoZSBlcXVpdmFsZW50XG4gICAgICogdG8gYSB2aWV3cG9ydCBvZiBwaHlzaWNhbCBpdGVtcyBhYm92ZSBhbmQgYmVsb3cgdGhlIHVzZXIncyB2aWV3cG9ydC5cbiAgICAgKi9cbiAgICBnZXQgX29wdFBoeXNpY2FsU2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aWV3cG9ydEhlaWdodCA9PT0gMCA/IEluZmluaXR5IDogdGhpcy5fdmlld3BvcnRIZWlnaHQgKiB0aGlzLl9tYXhQYWdlcztcbiAgICB9LFxuXG4gICAvKipcbiAgICAqIFRydWUgaWYgdGhlIGN1cnJlbnQgbGlzdCBpcyB2aXNpYmxlLlxuICAgICovXG4gICAgZ2V0IF9pc1Zpc2libGUoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm9mZnNldFdpZHRoIHx8IHRoaXMub2Zmc2V0SGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBmaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbDtcbiAgICAgIGlmIChpZHggPT0gbnVsbCkge1xuICAgICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcblxuICAgICAgICBpZHggPSB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcblxuICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA+IHRoaXMuX3Njcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkID8gdmlkeCAtICh2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3cpIDogdmlkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSGFuZGxlIGEgcGFydGlhbGx5IHJlbmRlcmVkIGZpbmFsIHJvdyBpbiBncmlkIG1vZGVcbiAgICAgICAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEgPT09IHZpZHgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCAwO1xuICAgICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IGlkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZHg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBsYXN0VmlzaWJsZUluZGV4KCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgIGlkeCA9IE1hdGgubWluKHRoaXMuX3ZpcnR1YWxDb3VudCxcbiAgICAgICAgICAgICAgdGhpcy5maXJzdFZpc2libGVJbmRleCArIHRoaXMuX2VzdFJvd3NJblZpZXcgKiB0aGlzLl9pdGVtc1BlclJvdyAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgICBpZiAocGh5c2ljYWxPZmZzZXQgPCB0aGlzLl9zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgaWR4ID0gdmlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9LFxuXG4gICAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdldCBfdmlydHVhbFJvd0NvdW50KCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl92aXJ0dWFsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfSxcblxuICAgIGdldCBfZXN0Um93c0luVmlldygpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlld3BvcnRIZWlnaHQgLyB0aGlzLl9yb3dIZWlnaHQpO1xuICAgIH0sXG5cbiAgICBnZXQgX3BoeXNpY2FsUm93cygpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9LFxuXG4gICAgZ2V0IF9zY3JvbGxPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsZXJQYWRkaW5nVG9wICsgdGhpcy5zY3JvbGxPZmZzZXQ7XG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9kaWRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICAvLyBgaXJvbi1yZXNpemVgIGlzIGZpcmVkIHdoZW4gdGhlIGxpc3QgaXMgYXR0YWNoZWQgaWYgdGhlIGV2ZW50IGlzIGFkZGVkXG4gICAgICAvLyBiZWZvcmUgYXR0YWNoZWQgY2F1c2luZyB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgICAgdGhpcy5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2tleWRvd24nLCAnX2tleWRvd25IYW5kbGVyJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgaWYgdGhpcyBlbGVtZW50IGhhcyBpdHMgb3duIHNjcm9sbGluZyByZWdpb25cbiAgICAgKi9cbiAgICBfc2V0T3ZlcmZsb3c6IGZ1bmN0aW9uKHNjcm9sbFRhcmdldCkge1xuICAgICAgdGhpcy5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IHNjcm9sbFRhcmdldCA9PT0gdGhpcyA/ICd0b3VjaCcgOiAnJztcbiAgICAgIHRoaXMuc3R5bGUub3ZlcmZsb3dZID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ2F1dG8nIDogJyc7XG4gICAgICAvLyBDbGVhciBjYWNoZS5cbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAgICogc2l6ZSBvciBDU1MgcGFkZGluZy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAgICovXG4gICAgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICAgIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCA9IHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gMCA6XG4gICAgICAgICAgcGFyc2VJbnQoc3R5bGVzWydwYWRkaW5nLXRvcCddLCAxMCk7XG4gICAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgICAgdGhpcy5fdmlld3BvcnRXaWR0aCA9IHRoaXMuJC5pdGVtcy5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5fc2Nyb2xsVGFyZ2V0SGVpZ2h0O1xuICAgICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICAgKi9cbiAgICBfc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICAgIHZhciBkZWx0YSA9IHNjcm9sbFRvcCAtIHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9IGRlbHRhID49IDA7XG4gICAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcbiAgICAgIC8vIENsZWFyIGluZGV4ZXMgZm9yIGZpcnN0IGFuZCBsYXN0IHZpc2libGUgaW5kZXhlcy5cbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgLy8gUmFuZG9tIGFjY2Vzcy5cbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgICBkZWx0YSA9IGRlbHRhIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB2YXIgaWR4QWRqdXN0bWVudCA9IE1hdGgucm91bmQoZGVsdGEgLyB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UpICogdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGlkeEFkanVzdG1lbnQ7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgICAgLy8gRXN0aW1hdGUgbmV3IHBoeXNpY2FsIG9mZnNldC5cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSBNYXRoLmZsb29yKHRoaXMuX3ZpcnR1YWxTdGFydCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciByZXVzYWJsZXMgPSB0aGlzLl9nZXRSZXVzYWJsZXMoaXNTY3JvbGxpbmdEb3duKTtcbiAgICAgICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlKHJldXNhYmxlcy5pbmRleGVzLCBpc1Njcm9sbGluZ0Rvd24gPyBudWxsIDogcmV1c2FibGVzLmluZGV4ZXMpO1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX2luY3JlYXNlUG9vbElmTmVlZGVkJywgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZCh0aGlzLCAwKSwgTUlDUk9fVEFTSyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGluZGV4ZXMgb2YgdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdGhhdCBtaWdodCBiZSByZXVzZWQgYW5kIHRoZSBwaHlzaWNhbFRvcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbVRvcCBJZiB0aGUgcG90ZW50aWFsIHJldXNhYmxlIGl0ZW1zIGFyZSBhYm92ZSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKi9cbiAgICBfZ2V0UmV1c2FibGVzOiBmdW5jdGlvbihmcm9tVG9wKSB7XG4gICAgICB2YXIgaXRoLCBsYXN0SXRoLCBvZmZzZXRDb250ZW50LCBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICB2YXIgaWR4cyA9IFtdO1xuICAgICAgdmFyIHByb3RlY3RlZE9mZnNldENvbnRlbnQgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZSAqIHRoaXMuX3JhdGlvO1xuICAgICAgdmFyIHZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHZhciB2aXJ0dWFsRW5kID0gdGhpcy5fdmlydHVhbEVuZDtcbiAgICAgIHZhciBwaHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIHZhciB0b3AgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBib3R0b20gPSB0aGlzLl9waHlzaWNhbEJvdHRvbSArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsQm90dG9tID0gdGhpcy5fc2Nyb2xsQm90dG9tO1xuXG4gICAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgICBpdGggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxFbmQ7XG4gICAgICAgIG9mZnNldENvbnRlbnQgPSBzY3JvbGxUb3AgLSB0b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIG9mZnNldENvbnRlbnQgPSBib3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBwaHlzaWNhbEl0ZW1IZWlnaHQgPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoaXRoKTtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IG9mZnNldENvbnRlbnQgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgIGlmIChpZHhzLmxlbmd0aCA+PSBwaHlzaWNhbENvdW50IHx8IG9mZnNldENvbnRlbnQgPD0gcHJvdGVjdGVkT2Zmc2V0Q29udGVudCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICAgIGlmICh2aXJ0dWFsRW5kICsgaWR4cy5sZW5ndGggKyAxID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICAgIGlmICh0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQgPj0gc2Nyb2xsVG9wIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWR4cy5wdXNoKGl0aCk7XG4gICAgICAgICAgdG9wID0gdG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICAgIGl0aCA9IChpdGggKyAxKSAlIHBoeXNpY2FsQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICAgIGlmICh2aXJ0dWFsU3RhcnQgLSBpZHhzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgICAgaWYgKHRvcCArIHRoaXMuX3BoeXNpY2FsU2l6ZSAtIHBoeXNpY2FsSXRlbUhlaWdodCA8PSBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgICB0b3AgPSB0b3AgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgICAgaXRoID0gKGl0aCA9PT0gMCkgPyBwaHlzaWNhbENvdW50IC0gMSA6IGl0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGluZGV4ZXM6IGlkeHMsIHBoeXNpY2FsVG9wOiB0b3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGl0ZW1zLCBzdGFydGluZyBmcm9tIHRoZSBgX3ZpcnR1YWxTdGFydGAgaXRlbS5cbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBtb3ZpbmdVcFxuICAgICAqL1xuICAgIF91cGRhdGU6IGZ1bmN0aW9uKGl0ZW1TZXQsIG1vdmluZ1VwKSB7XG4gICAgICBpZiAoKGl0ZW1TZXQgJiYgaXRlbVNldC5sZW5ndGggPT09IDApIHx8IHRoaXMuX3BoeXNpY2FsQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFuYWdlRm9jdXMoKTtcbiAgICAgIHRoaXMuX2Fzc2lnbk1vZGVscyhpdGVtU2V0KTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoaXRlbVNldCk7XG4gICAgICAvLyBBZGp1c3Qgb2Zmc2V0IGFmdGVyIG1lYXN1cmluZy5cbiAgICAgIGlmIChtb3ZpbmdVcCkge1xuICAgICAgICB3aGlsZSAobW92aW5nVXAubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGlkeCA9IG1vdmluZ1VwLnBvcCgpO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIC09IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpZHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvb2wgb2YgRE9NIGVsZW1lbnRzIGFuZCBhdHRhY2hlcyB0aGVtIHRvIHRoZSBsb2NhbCBkb20uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBwb29sXG4gICAgICovXG4gICAgX2NyZWF0ZVBvb2w6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHRoaXMuX2Vuc3VyZVRlbXBsYXRpemVkKCk7XG4gICAgICB2YXIgaSwgaW5zdDtcbiAgICAgIHZhciBwaHlzaWNhbEl0ZW1zID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgICAgLy8gVE9ETyhibGFzdGVuKTpcbiAgICAgICAgLy8gRmlyc3QgZWxlbWVudCBjaGlsZCBpcyBpdGVtOyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IGNoaWxkcmVuWzBdXG4gICAgICAgIC8vIG9uIGEgZG9jIGZyYWdtZW50LiBUZXN0IHRoaXMgdG8gc2VlIGlmIGl0IHN0aWxsIG1hdHRlcnMuXG4gICAgICAgIHBoeXNpY2FsSXRlbXNbaV0gPSBpbnN0LnJvb3QucXVlcnlTZWxlY3RvcignKicpO1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5hcHBlbmRDaGlsZChpbnN0LnJvb3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBoeXNpY2FsSXRlbXM7XG4gICAgfSxcblxuICAgIF9pc0NsaWVudEZ1bGw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbEJvdHRvbSAhPSAwICYmIHRoaXMuX3BoeXNpY2FsQm90dG9tLTEgPj0gdGhpcy5fc2Nyb2xsQm90dG9tICYmXG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPD0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluY3JlYXNlcyB0aGUgcG9vbCBzaXplLlxuICAgICAqL1xuICAgIF9pbmNyZWFzZVBvb2xJZk5lZWRlZDogZnVuY3Rpb24oY291bnQpIHtcbiAgICAgIHZhciBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NsYW1wKHRoaXMuX3BoeXNpY2FsQ291bnQgKyBjb3VudCxcbiAgICAgICAgICBERUZBVUxUX1BIWVNJQ0FMX0NPVU5ULCB0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQpO1xuICAgICAgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jb252ZXJ0SW5kZXhUb0NvbXBsZXRlUm93KG5leHRQaHlzaWNhbENvdW50KTtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFyIGNvcnJlY3Rpb24gPSBuZXh0UGh5c2ljYWxDb3VudCAlIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICBpZiAoY29ycmVjdGlvbiAmJiBuZXh0UGh5c2ljYWxDb3VudCAtIGNvcnJlY3Rpb24gPD0gdGhpcy5fcGh5c2ljYWxDb3VudCkge1xuICAgICAgICAgIG5leHRQaHlzaWNhbENvdW50ICs9IHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgICB9XG4gICAgICAgIG5leHRQaHlzaWNhbENvdW50IC09IGNvcnJlY3Rpb247XG4gICAgICB9XG4gICAgICB2YXIgZGVsdGEgPSBuZXh0UGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgICB2YXIgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcblxuICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgIHZhciB0cyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgLy8gQ29uY2F0IGFycmF5cyBpbiBwbGFjZS5cbiAgICAgICAgW10ucHVzaC5hcHBseSh0aGlzLl9waHlzaWNhbEl0ZW1zLCB0aGlzLl9jcmVhdGVQb29sKGRlbHRhKSk7XG4gICAgICAgIFtdLnB1c2guYXBwbHkodGhpcy5fcGh5c2ljYWxTaXplcywgbmV3IEFycmF5KGRlbHRhKSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50ICsgZGVsdGE7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGh5c2ljYWwgc3RhcnQgaWYgaXQgbmVlZHMgdG8gcHJlc2VydmUgdGhlIG1vZGVsIG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uLCB0aGUgZm9jdXNlZCBpdGVtIGlzIGN1cnJlbnRseSByZW5kZXJlZCBhbmQgaXRzIG1vZGVsIHdvdWxkXG4gICAgICAgIC8vIGhhdmUgY2hhbmdlZCBhZnRlciBpbmNyZWFzaW5nIHRoZSBwb29sIGlmIHRoZSBwaHlzaWNhbCBzdGFydCByZW1haW5lZCB1bmNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLl9waHlzaWNhbFN0YXJ0ID4gdGhpcy5fcGh5c2ljYWxFbmQgJiZcbiAgICAgICAgICAgIHRoaXMuX2lzSW5kZXhSZW5kZXJlZCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSAmJlxuICAgICAgICAgICAgdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSA8IHRoaXMuX3BoeXNpY2FsRW5kKSB7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb3N0ID0gKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIHRzKSAvIGRlbHRhO1xuICAgICAgICBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuICAgICAgfVxuICAgICAgLy8gVGhlIHVwcGVyIGJvdW5kcyBpcyBub3QgZml4ZWQgd2hlbiBkZWFsaW5nIHdpdGggYSBncmlkIHRoYXQgZG9lc24ndFxuICAgICAgLy8gZmlsbCBpdCdzIGxhc3Qgcm93IHdpdGggdGhlIGV4YWN0IG51bWJlciBvZiBpdGVtcyBwZXIgcm93LlxuICAgICAgaWYgKHRoaXMuX3ZpcnR1YWxFbmQgPj0gdGhpcy5fdmlydHVhbENvdW50IC0gMSB8fCBuZXh0SW5jcmVhc2UgPT09IDApIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbmV4dEluY3JlYXNlXG4gICAgICAgICAgKSwgTUlDUk9fVEFTSyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsU2l6ZSA8IHRoaXMuX29wdFBoeXNpY2FsU2l6ZSkge1xuICAgICAgICAvLyBZaWVsZCBhbmQgaW5jcmVhc2UgdGhlIHBvb2wgZHVyaW5nIGlkbGUgdGltZSB1bnRpbCB0aGUgcGh5c2ljYWwgc2l6ZSBpcyBvcHRpbWFsLlxuICAgICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuX2NsYW1wKE1hdGgucm91bmQoNTAgLyB0aGlzLl90ZW1wbGF0ZUNvc3QpLCAxLCBuZXh0SW5jcmVhc2UpXG4gICAgICAgICAgKSwgSURMRV9USU1FKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgYSBuZXcgbGlzdC5cbiAgICAgKi9cbiAgICBfcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICF0aGlzLl9pc1Zpc2libGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgIT09IDApIHtcbiAgICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyh0cnVlKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSByZXVzYWJsZXMucGh5c2ljYWxUb3A7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3VwZGF0ZShyZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydHVhbENvdW50ID4gMCkge1xuICAgICAgICAvLyBJbml0aWFsIHJlbmRlclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZChERUZBVUxUX1BIWVNJQ0FMX0NPVU5UKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVtcGxldGl6ZXMgdGhlIHVzZXIgdGVtcGxhdGUuXG4gICAgICovXG4gICAgX2Vuc3VyZVRlbXBsYXRpemVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmN0b3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXNlclRlbXBsYXRlID0gdGhpcy5xdWVyeUVmZmVjdGl2ZUNoaWxkcmVuKCd0ZW1wbGF0ZScpO1xuICAgICAgaWYgKCF0aGlzLl91c2VyVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdpcm9uLWxpc3QgcmVxdWlyZXMgYSB0ZW1wbGF0ZSB0byBiZSBwcm92aWRlZCBpbiBsaWdodC1kb20nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbnN0YW5jZVByb3BzID0ge307XG4gICAgICBpbnN0YW5jZVByb3BzLl9fa2V5X18gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wc1t0aGlzLmFzXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuaW5kZXhBc10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wc1t0aGlzLnNlbGVjdGVkQXNdID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHMudGFiSW5kZXggPSB0cnVlO1xuICAgICAgdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluc3RhbmNlUHJvcHM7XG4gICAgICB0aGlzLnRlbXBsYXRpemUodGhpcy5fdXNlclRlbXBsYXRlLCB0aGlzLm11dGFibGVEYXRhKTtcbiAgICB9LFxuXG4gICAgX2dyaWRDaGFuZ2VkOiBmdW5jdGlvbihuZXdHcmlkLCBvbGRHcmlkKSB7XG4gICAgICBpZiAodHlwZW9mIG9sZEdyaWQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICBuZXdHcmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBpdGVtcyBoYXZlIGNoYW5nZWQuIFRoYXQgaXMsIHJlc3NpZ25tZW50c1xuICAgICAqIHRvIGBpdGVtc2AsIHNwbGljZXMgb3IgdXBkYXRlcyB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqL1xuICAgIF9pdGVtc0NoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgICAgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMnKSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gMDtcbiAgICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IHRoaXMuaXRlbXMgJiYgUG9seW1lci5Db2xsZWN0aW9uID9cbiAgICAgICAgICAgIFBvbHltZXIuQ29sbGVjdGlvbi5nZXQodGhpcy5pdGVtcykgOiBudWxsO1xuICAgICAgICB0aGlzLl9waHlzaWNhbEluZGV4Rm9yS2V5ID0ge307XG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50IHx8IDA7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXMgPSB0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzID0gdGhpcy5fcGh5c2ljYWxTaXplcyB8fCBbXTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb3AgPiB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucGF0aCA9PT0gJ2l0ZW1zLnNwbGljZXMnKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdFZpcnR1YWxJbmRleChjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzKTtcbiAgICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgICAgLy8gUmVuZGVyIG9ubHkgaWYgdGhlIGFmZmVjdGVkIGluZGV4IGlzIHJlbmRlcmVkLlxuICAgICAgICB2YXIgYWZmZWN0ZWRJbmRleFJlbmRlcmVkID0gY2hhbmdlLnZhbHVlLmluZGV4U3BsaWNlcy5zb21lKGZ1bmN0aW9uKHNwbGljZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0luZGV4UmVuZGVyZWQoc3BsaWNlLmluZGV4KTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5faXNDbGllbnRGdWxsKCkgfHwgYWZmZWN0ZWRJbmRleFJlbmRlcmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggIT09ICdpdGVtcy5sZW5ndGgnKSB7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRJdGVtUGF0aChjaGFuZ2UucGF0aCwgY2hhbmdlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRJdGVtUGF0aDogZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDYpOyAvLyAnaXRlbXMuJy5sZW5ndGggPT0gNlxuICAgICAgdmFyIGRvdCA9IHBhdGguaW5kZXhPZignLicpICsgMTtcbiAgICAgIGlmIChkb3QgPT09IDApIHtcbiAgICAgICAgZG90ID0gcGF0aC5sZW5ndGg7XG4gICAgICB9XG4gICAgICB2YXIgaWR4ID0gSVNfVjJcbiAgICAgICAgICA/IHBhcnNlSW50KHBhdGguc3Vic3RyaW5nKDAsIGRvdCksIDEwKVxuICAgICAgICAgIC8vIEV4dHJhY3QgYCNgIGZyb20gYHBhdGhgLlxuICAgICAgICAgIDogcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMSwgZG90KSwgMTApO1xuICAgICAgdmFyIG9mZnNjcmVlbkl0ZW0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbTtcbiAgICAgIHZhciBpc0luZGV4UmVuZGVyZWQgPSB0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KTtcbiAgICAgIHZhciBpbnN0O1xuICAgICAgdmFyIHBpZHg7XG5cbiAgICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgcGlkeCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgoaWR4KTtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgfSBlbHNlIGlmIChvZmZzY3JlZW5JdGVtKSB7XG4gICAgICAgIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvZmZzY3JlZW5JdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5zdCB8fCBpbnN0W3RoaXMuaW5kZXhBc10gIT09IGlkeCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoZG90KTtcbiAgICAgIHBhdGggPSB0aGlzLmFzICsgKHBhdGggPyAnLicgKyBwYXRoIDogJycpO1xuICAgICAgSVNfVjJcbiAgICAgICAgPyBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHlPclBhdGgocGF0aCwgdmFsdWUsIGZhbHNlLCB0cnVlKVxuICAgICAgICA6IGluc3Qubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICBpbnN0Ll9mbHVzaFByb3BlcnRpZXMgJiYgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzKHRydWUpO1xuICAgICAgLy8gVE9ETyhibGFzdGVuKTogVjEgZG9lc24ndCBkbyB0aGlzIGFuZCBpdCdzIGEgYnVnXG4gICAgICBpZiAoaXNJbmRleFJlbmRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3BpZHhdKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshQXJyYXk8IVBvbHltZXJTcGxpY2U+fSBzcGxpY2VzXG4gICAgICovXG4gICAgX2FkanVzdFZpcnR1YWxJbmRleDogZnVuY3Rpb24oc3BsaWNlcykge1xuICAgICAgc3BsaWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNwbGljZSkge1xuICAgICAgICAvLyBkZXNlbGVjdCByZW1vdmVkIGl0ZW1zXG4gICAgICAgIHNwbGljZS5yZW1vdmVkLmZvckVhY2godGhpcy5fcmVtb3ZlSXRlbSwgdGhpcyk7XG4gICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byBjYXJlIGFib3V0IGNoYW5nZXMgaGFwcGVuaW5nIGFib3ZlIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgIGlmIChzcGxpY2UuaW5kZXggPCB0aGlzLl92aXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgc3BsaWNlLmFkZGVkQ291bnQgLSBzcGxpY2UucmVtb3ZlZC5sZW5ndGgsXG4gICAgICAgICAgICAgIHNwbGljZS5pbmRleCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgZGVsdGE7XG4gICAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyBkZWx0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfcmVtb3ZlSXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KGl0ZW0pO1xuICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGZvY3VzZWQgaXRlbVxuICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJdGVtICYmIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKVt0aGlzLmFzXSA9PT0gaXRlbSkge1xuICAgICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYSBwcm92aWRlZCBmdW5jdGlvbiBwZXIgZXZlcnkgcGh5c2ljYWwgaW5kZXggaW4gYGl0ZW1TZXRgXG4gICAgICogYGl0ZW1TZXRgIGRlZmF1bHQgdmFsdWUgaXMgZXF1aXZhbGVudCB0byB0aGUgZW50aXJlIHNldCBvZiBwaHlzaWNhbCBpbmRleGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyLCBudW1iZXIpfSBmblxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX2l0ZXJhdGVJdGVtczogZnVuY3Rpb24oZm4sIGl0ZW1TZXQpIHtcbiAgICAgIHZhciBwaWR4LCB2aWR4LCBydG4sIGk7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIGl0ZW1TZXQpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1TZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwaWR4ID0gaXRlbVNldFtpXTtcbiAgICAgICAgICB2aWR4ID0gdGhpcy5fY29tcHV0ZVZpZHgocGlkeCk7XG4gICAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGlkeCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIHZpZHggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICAgIGZvciAoOyBwaWR4IDwgdGhpcy5fcGh5c2ljYWxDb3VudDsgcGlkeCsrLCB2aWR4KyspIHtcbiAgICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAocGlkeCA9IDA7IHBpZHggPCB0aGlzLl9waHlzaWNhbFN0YXJ0OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlydHVhbCBpbmRleCBmb3IgYSBnaXZlbiBwaHlzaWNhbCBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpZHggUGh5c2ljYWwgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgX2NvbXB1dGVWaWR4OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgICBpZiAocGlkeCA+PSB0aGlzLl9waHlzaWNhbFN0YXJ0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAocGlkeCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArICh0aGlzLl9waHlzaWNhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxTdGFydCkgKyBwaWR4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIHRoZSBkYXRhIG1vZGVscyB0byBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqL1xuICAgIF9hc3NpZ25Nb2RlbHM6IGZ1bmN0aW9uKGl0ZW1TZXQpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zW3ZpZHhdO1xuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlbCk7XG4gICAgICAgICAgaW5zdC5fX2tleV9fID0gdGhpcy5fY29sbGVjdGlvbiA/IHRoaXMuX2NvbGxlY3Rpb24uZ2V0S2V5KGl0ZW0pIDogbnVsbDtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5hcywgaXRlbSk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsIHRoaXMuc2VsZWN0ZWRBcywgdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmluZGV4QXMsIHZpZHgpO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCAndGFiSW5kZXgnLCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID09PSB2aWR4ID8gMCA6IC0xKTtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEluZGV4Rm9yS2V5W2luc3QuX19rZXlfX10gPSBwaWR4O1xuICAgICAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSwgaXRlbVNldCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGhlaWdodCBmb3IgYSBnaXZlbiBzZXQgb2YgaXRlbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgICAqL1xuICAgIF91cGRhdGVNZXRyaWNzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgZGlzdHJpYnV0ZWQgYWxsIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgICAgLy8gc28gd2UgY2FuIG1lYXN1cmUgdGhlbS5cbiAgICAgIFBvbHltZXIuZmx1c2ggPyBQb2x5bWVyLmZsdXNoKCkgOiBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuXG4gICAgICB2YXIgbmV3UGh5c2ljYWxTaXplID0gMDtcbiAgICAgIHZhciBvbGRQaHlzaWNhbFNpemUgPSAwO1xuICAgICAgdmFyIHByZXZBdmdDb3VudCA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50O1xuICAgICAgdmFyIHByZXZQaHlzaWNhbEF2ZyA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgb2xkUGh5c2ljYWxTaXplICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gfHwgMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBuZXdQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA/IDEgOiAwO1xuICAgICAgfSwgaXRlbVNldCk7XG5cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplID0gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRQaHlzaWNhbFNpemUgPSAodGhpcy5faXRlbXNQZXJSb3cgPT09IDEpID8gb2xkUGh5c2ljYWxTaXplIDogIE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemUgPSB0aGlzLl9waHlzaWNhbFNpemUgKyBuZXdQaHlzaWNhbFNpemUgLSBvbGRQaHlzaWNhbFNpemU7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gMTtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0aGUgYXZlcmFnZSBpZiBpdCBtZWFzdXJlZCBzb21ldGhpbmcuXG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgIT09IHByZXZBdmdDb3VudCkge1xuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgKChwcmV2UGh5c2ljYWxBdmcgKiBwcmV2QXZnQ291bnQpICsgbmV3UGh5c2ljYWxTaXplKSAvXG4gICAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVHcmlkTWV0cmljczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pdGVtV2lkdGggPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/IHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAyMDA7XG4gICAgICB0aGlzLl9yb3dIZWlnaHQgPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/IHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0ub2Zmc2V0SGVpZ2h0IDogMjAwO1xuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtV2lkdGggPyBNYXRoLmZsb29yKHRoaXMuX3ZpZXdwb3J0V2lkdGggLyB0aGlzLl9pdGVtV2lkdGgpIDogdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwaHlzaWNhbCBpdGVtcy5cbiAgICAgKi9cbiAgICBfcG9zaXRpb25JdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9hZGp1c3RTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgICB2YXIgeSA9IHRoaXMuX3BoeXNpY2FsVG9wO1xuXG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHZhciB0b3RhbEl0ZW1XaWR0aCA9IHRoaXMuX2l0ZW1zUGVyUm93ICogdGhpcy5faXRlbVdpZHRoO1xuICAgICAgICB2YXIgcm93T2Zmc2V0ID0gKHRoaXMuX3ZpZXdwb3J0V2lkdGggLSB0b3RhbEl0ZW1XaWR0aCkgLyAyO1xuXG4gICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgdmFyIG1vZHVsdXMgPSB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKChtb2R1bHVzICogdGhpcy5faXRlbVdpZHRoKSArIHJvd09mZnNldCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICAgICAgICB4ID0geCAqIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZTNkKHggKyAncHgnLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck5leHRSb3codmlkeCkpIHtcbiAgICAgICAgICAgIHkgKz0gdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgeSArICdweCcsIDAsIHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQ6IGZ1bmN0aW9uKHBpZHgpIHtcbiAgICAgIGlmICghdGhpcy5ncmlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbXB1dGVWaWR4KHBpZHgpICUgdGhpcy5faXRlbXNQZXJSb3cgIT09IHRoaXMuX2l0ZW1zUGVyUm93IC0gMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMsIGJhc2VkIG9uIHRoZSBjdXJyZW50IGluZGV4LFxuICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgICAqIHRvIGJlIHJlbmRlcmVkIG9uIGEgbmV3IHJvdy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgICByZXR1cm4gdmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93ID09PSB0aGlzLl9pdGVtc1BlclJvdyAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIGl0IHdhcyBvdmVyZXN0aW1hdGVkLlxuICAgICAqL1xuICAgIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGVsdGFIZWlnaHQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgPT09IDAgPyB0aGlzLl9waHlzaWNhbFRvcCA6XG4gICAgICAgICAgTWF0aC5taW4odGhpcy5fc2Nyb2xsUG9zaXRpb24gKyB0aGlzLl9waHlzaWNhbFRvcCwgMCk7XG4gICAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgICAgaWYgKGRlbHRhSGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgLSBkZWx0YUhlaWdodDtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgICAgLy8ganVraW5nIHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgaW50ZXJpYWwgc2Nyb2xsaW5nIG9uIGlPUyBpcyBubyBidWVub1xuICAgICAgICBpZiAoIUlPU19UT1VDSF9TQ1JPTExJTkcgJiYgc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwuXG4gICAgICovXG4gICAgX3Jlc2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKHBvcykge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ICYmIHBvcyA+PSAwKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNjcm9sbCBoZWlnaHQsIHRoYXQncyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50LFxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VVcGRhdGUgSWYgdHJ1ZSwgdXBkYXRlcyB0aGUgaGVpZ2h0IG5vIG1hdHRlciB3aGF0LlxuICAgICAqL1xuICAgIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2VzdFNjcm9sbEhlaWdodCA9IHRoaXMuX3ZpcnR1YWxSb3dDb3VudCAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VzdFNjcm9sbEhlaWdodCA9ICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50IC0gdGhpcy5fdmlydHVhbFN0YXJ0LCAwKSAqIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgICB9XG4gICAgICBmb3JjZVVwZGF0ZSA9IGZvcmNlVXBkYXRlIHx8IHRoaXMuX3Njcm9sbEhlaWdodCA9PT0gMDtcbiAgICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgICAgZm9yY2VVcGRhdGUgPSBmb3JjZVVwZGF0ZSB8fCB0aGlzLmdyaWQgJiYgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA8IHRoaXMuX2VzdFNjcm9sbEhlaWdodDtcbiAgICAgIC8vIEFtb3J0aXplIGhlaWdodCBhZGp1c3RtZW50LCBzbyBpdCB3b24ndCB0cmlnZ2VyIGxhcmdlIHJlcGFpbnRzIHRvbyBvZnRlbi5cbiAgICAgIGlmIChmb3JjZVVwZGF0ZSB8fCBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGl0ZW0gaW4gdGhlIHZpcnR1YWwgbGlzdCByZWdhcmRsZXNzXG4gICAgICogb2YgdGhlIHBoeXNpY2FsIGl0ZW1zIGluIHRoZSBET00gdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2Nyb2xsVG9JdGVtXG4gICAgICogQHBhcmFtIHsoT2JqZWN0KX0gaXRlbSBUaGUgaXRlbSB0byBiZSBzY3JvbGxlZCB0b1xuICAgICAqL1xuICAgIHNjcm9sbFRvSXRlbTogZnVuY3Rpb24oaXRlbSl7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgICAqIG9mIHRoZSBwaHlzaWNhbCBpdGVtcyBpbiB0aGUgRE9NIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IFRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgICAqL1xuICAgIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgaWYgKHR5cGVvZiBpZHggIT09ICdudW1iZXInIHx8IGlkeCA8IDAgfHwgaWR4ID4gdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFBvbHltZXIuZmx1c2ggPyBQb2x5bWVyLmZsdXNoKCkgOiBQb2x5bWVyLmRvbS5mbHVzaCgpO1xuICAgICAgLy8gSXRlbXMgc2hvdWxkIGhhdmUgYmVlbiByZW5kZXJlZCBwcmlvciBzY3JvbGxpbmcgdG8gYW4gaW5kZXguXG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZHggPSB0aGlzLl9jbGFtcChpZHgsIDAsIHRoaXMuX3ZpcnR1YWxDb3VudC0xKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdmlydHVhbCBzdGFydCBvbmx5IHdoZW4gbmVlZGVkLlxuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSB8fCBpZHggPj0gdGhpcy5fbWF4VmlydHVhbFN0YXJ0KSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuZ3JpZCA/IChpZHggLSB0aGlzLl9pdGVtc1BlclJvdyAqIDIpIDogKGlkeCAtIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFuYWdlRm9jdXMoKTtcbiAgICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcygpO1xuICAgICAgLy8gRXN0aW1hdGUgbmV3IHBoeXNpY2FsIG9mZnNldC5cbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgICB2YXIgY3VycmVudFRvcEl0ZW0gPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdmFyIGN1cnJlbnRWaXJ0dWFsSXRlbSA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHZhciB0YXJnZXRPZmZzZXRUb3AgPSAwO1xuICAgICAgdmFyIGhpZGRlbkNvbnRlbnRTaXplID0gdGhpcy5faGlkZGVuQ29udGVudFNpemU7XG4gICAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gYXMgbXVjaCBhcyB3ZSBjYW4uXG4gICAgICB3aGlsZSAoY3VycmVudFZpcnR1YWxJdGVtIDwgaWR4ICYmIHRhcmdldE9mZnNldFRvcCA8PSBoaWRkZW5Db250ZW50U2l6ZSkge1xuICAgICAgICB0YXJnZXRPZmZzZXRUb3AgPSB0YXJnZXRPZmZzZXRUb3AgKyB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoY3VycmVudFRvcEl0ZW0pO1xuICAgICAgICBjdXJyZW50VG9wSXRlbSA9IChjdXJyZW50VG9wSXRlbSArIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgICAgY3VycmVudFZpcnR1YWxJdGVtKys7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUodHJ1ZSk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0ICsgdGFyZ2V0T2Zmc2V0VG9wKTtcbiAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgICAgLy8gY2xlYXIgY2FjaGVkIHZpc2libGUgaW5kZXguXG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHBoeXNpY2FsIGF2ZXJhZ2UgYW5kIHRoZSBhdmVyYWdlIGNvdW50LlxuICAgICAqL1xuICAgIF9yZXNldEF2ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50ID0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBoYW5kbGVyIGZvciB0aGUgYGlyb24tcmVzaXplYCBldmVudCB0cmlnZ2VyZWQgYnkgYElyb25SZXNpemFibGVCZWhhdmlvcmBcbiAgICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlc2l6ZWQuXG4gICAgICovXG4gICAgX3Jlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY2xlYXIgY2FjaGVkIHZpc2libGUgaW5kZXguXG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAgIC8vIFNraXAgdGhlIHJlc2l6ZSBldmVudCBvbiB0b3VjaCBkZXZpY2VzIHdoZW4gdGhlIGFkZHJlc3MgYmFyIHNsaWRlcyB1cC5cbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5hYnModGhpcy5fdmlld3BvcnRIZWlnaHQgLSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgICAgLy8gUmVpbnN0YWxsIHRoZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcih0cnVlKTtcbiAgICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VsZWN0SXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VsZWN0SW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICBzZWxlY3RJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5tdWx0aVNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleCkge1xuICAgICAgICAvLyB2MlxuICAgICAgICB0aGlzLiQuc2VsZWN0b3Iuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdjFcbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLnNlbGVjdCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZGVzZWxlY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBkZXNlbGVjdEl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGRlc2VsZWN0SW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICBkZXNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgICBtb2RlbFt0aGlzLnNlbGVjdGVkQXNdID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3RJbmRleCkge1xuICAgICAgICAvLyB2MlxuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3RJbmRleChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2MVxuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhIGdpdmVuIGl0ZW0gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW1cbiAgICAgKiBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gb2JqZWN0LlxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXlcbiAgICAgKiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgaXRlbSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbkZvckluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdmFyIGlzU2VsZWN0ZWQgPSB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkXG4gICAgICAgICAgPyB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkKGluZGV4KSA6IHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RJbmRleChpbmRleCkgOiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xlYXJTZWxlY3Rpb25cbiAgICAgKi9cbiAgICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKVt0aGlzLnNlbGVjdGVkQXNdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJC5zZWxlY3Rvci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYHRhcGAgaWYgYHNlbGVjdGlvbkVuYWJsZWRgIGlzIHRydWUsXG4gICAgICogaXQgd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBfc2VsZWN0aW9uRW5hYmxlZENoYW5nZWQ6IGZ1bmN0aW9uKHNlbGVjdGlvbkVuYWJsZWQpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gc2VsZWN0aW9uRW5hYmxlZCA/IHRoaXMubGlzdGVuIDogdGhpcy51bmxpc3RlbjtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0aGlzLCAndGFwJywgJ19zZWxlY3Rpb25IYW5kbGVyJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbiBpdGVtIGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIF9zZWxlY3Rpb25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBtb2RlbFRhYkluZGV4LCBhY3RpdmVFbFRhYkluZGV4O1xuICAgICAgdmFyIHRhcmdldCA9IFBvbHltZXIuZG9tKGUpLnBhdGhbMF07XG4gICAgICB2YXIgaXRlbXNIb3N0ID0gdGhpcy5faXRlbXNQYXJlbnQubm9kZS5kb21Ib3N0O1xuICAgICAgdmFyIGFjdGl2ZUVsID0gUG9seW1lci5kb20oaXRlbXNIb3N0ID8gaXRlbXNIb3N0LnJvb3QgOiBkb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgICAgIHZhciBwaHlzaWNhbEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgobW9kZWxbdGhpcy5pbmRleEFzXSldO1xuICAgICAgLy8gU2FmYXJpIGRvZXMgbm90IGZvY3VzIGNlcnRhaW4gZm9ybSBjb250cm9scyB2aWEgbW91c2VcbiAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTgwNDNcbiAgICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnIHx8XG4gICAgICAgICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2J1dHRvbicgfHxcbiAgICAgICAgICB0YXJnZXQubG9jYWxOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBTZXQgYSB0ZW1wb3JhcnkgdGFiaW5kZXhcbiAgICAgIG1vZGVsVGFiSW5kZXggPSBtb2RlbC50YWJJbmRleDtcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgICAgYWN0aXZlRWxUYWJJbmRleCA9IGFjdGl2ZUVsID8gYWN0aXZlRWwudGFiSW5kZXggOiAtMTtcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gbW9kZWxUYWJJbmRleDtcbiAgICAgIC8vIE9ubHkgc2VsZWN0IHRoZSBpdGVtIGlmIHRoZSB0YXAgd2Fzbid0IG9uIGEgZm9jdXNhYmxlIGNoaWxkXG4gICAgICAvLyBvciB0aGUgZWxlbWVudCBib3VuZCB0byBgdGFiSW5kZXhgXG4gICAgICBpZiAoYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtICE9PSBhY3RpdmVFbCAmJiBwaHlzaWNhbEl0ZW0uY29udGFpbnMoYWN0aXZlRWwpICYmIGFjdGl2ZUVsVGFiSW5kZXggIT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckl0ZW0obW9kZWxbdGhpcy5hc10pO1xuICAgIH0sXG5cbiAgICBfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkOiBmdW5jdGlvbihtdWx0aVNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLm11bHRpID0gbXVsdGlTZWxlY3Rpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHNpemUgb2YgYSBnaXZlbiBsaXN0IGl0ZW0uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1cGRhdGVTaXplRm9ySW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKi9cbiAgICB1cGRhdGVTaXplRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFt0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0ZW1wb3JhcnkgYmFja2ZpbGwgaXRlbSBpbiB0aGUgcmVuZGVyZWQgcG9vbCBvZiBwaHlzaWNhbCBpdGVtc1xuICAgICAqIHRvIHJlcGxhY2UgdGhlIG1haW4gZm9jdXNlZCBpdGVtLiBUaGUgZm9jdXNlZCBpdGVtIGhhcyB0YWJJbmRleCA9IDBcbiAgICAgKiBhbmQgbWlnaHQgYmUgY3VycmVudGx5IGZvY3VzZWQgYnkgdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIGR5bmFtaWMgcmVwbGFjZW1lbnQgaGVscHMgdG8gcHJlc2VydmUgdGhlIGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIF9tYW5hZ2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG5cbiAgICAgIGlmIChmaWR4ID49IDAgJiYgZmlkeCA8IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgaW5kZXgsIGNoZWNrIGlmIHRoYXQgaW5kZXggaXMgcmVuZGVyZWRcbiAgICAgICAgLy8gaW4gYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGZpZHgpKSB7XG4gICAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlRm9jdXNCYWNrZmlsbEl0ZW0oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwICYmIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSwgYXNzaWduIHRoZSBpbml0aWFsIGZvY3VzZWQgaW5kZXguXG4gICAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX3BoeXNpY2FsU3RhcnRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHJhbmRvbSBpbmRleCB0byB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdGhhdCBjb21wbGV0ZXMgaXQncyByb3cuXG4gICAgICogQWxsb3dzIGZvciBiZXR0ZXIgb3JkZXIgYW5kIGZpbGwgY29tcHV0YXRpb24gd2hlbiBncmlkID09IHRydWUuXG4gICAgICovXG4gICAgX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3c6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgLy8gd2hlbiBncmlkID09IGZhbHNlIF9pdGVtUGVyUm93IGNhbiBiZSB1bnNldC5cbiAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gdGhpcy5faXRlbXNQZXJSb3cgfHwgMTtcbiAgICAgIHJldHVybiB0aGlzLmdyaWQgPyBNYXRoLmNlaWwoaWR4IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5faXRlbXNQZXJSb3cgOiBpZHg7XG4gICAgfSxcblxuICAgIF9pc0luZGV4UmVuZGVyZWQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIGlkeCA+PSB0aGlzLl92aXJ0dWFsU3RhcnQgJiYgaWR4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgfSxcblxuICAgIF9pc0luZGV4VmlzaWJsZTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gaWR4ID49IHRoaXMuZmlyc3RWaXNpYmxlSW5kZXggJiYgaWR4IDw9IHRoaXMubGFzdFZpc2libGVJbmRleDtcbiAgICB9LFxuXG4gICAgX2dldFBoeXNpY2FsSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKGlkeCAtIHRoaXMuX3ZpcnR1YWxTdGFydCkpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB9LFxuXG4gICAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKGlkeCk7XG4gICAgfSxcblxuICAgIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBpZiAoaWR4IDwgMCB8fCBpZHggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgLy8gc2Nyb2xsIHRvIGluZGV4IHRvIG1ha2Ugc3VyZSBpdCdzIHJlbmRlcmVkXG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChpZHgpO1xuICAgICAgfVxuICAgICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHBoeXNpY2FsSXRlbSk7XG4gICAgICB2YXIgZm9jdXNhYmxlO1xuICAgICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgICAgbW9kZWwudGFiSW5kZXggPSBTRUNSRVRfVEFCSU5ERVg7XG4gICAgICAvLyBjaGVjayBpZiBmb2N1c2FibGUgZWxlbWVudCBpcyB0aGUgcGh5c2ljYWwgaXRlbVxuICAgICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICAgZm9jdXNhYmxlID0gcGh5c2ljYWxJdGVtO1xuICAgICAgfVxuICAgICAgLy8gc2VhcmNoIGZvciB0aGUgZWxlbWVudCB3aGljaCB0YWJpbmRleCBpcyBib3VuZCB0byB0aGUgc2VjcmV0IHRhYiBpbmRleFxuICAgICAgaWYgKCFmb2N1c2FibGUpIHtcbiAgICAgICAgZm9jdXNhYmxlID0gUG9seW1lci5kb20ocGh5c2ljYWxJdGVtKS5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXg9XCInICsgU0VDUkVUX1RBQklOREVYICsgJ1wiXScpO1xuICAgICAgfVxuICAgICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgICBtb2RlbC50YWJJbmRleCA9IDA7XG4gICAgICAvLyBmb2N1cyB0aGUgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgICBmb2N1c2FibGUgJiYgZm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5faXRlbXNQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSAtMTtcbiAgICB9LFxuXG4gICAgX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4O1xuXG4gICAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuc3RhbXAobnVsbCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICAgIH1cbiAgICAgIC8vIFNldCB0aGUgb2ZmY3JlZW4gZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKS50YWJJbmRleCA9IDA7XG4gICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtO1xuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSBmcGlkeDtcbiAgICAgIC8vIEhpZGUgdGhlIGZvY3VzZWQgcGh5c2ljYWwuXG4gICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfSxcblxuICAgIF9yZXN0b3JlRm9jdXNlZEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBBc3NpZ24gbW9kZWxzIHRvIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgICAvLyBHZXQgdGhlIG5ldyBwaHlzaWNhbCBpbmRleCBmb3IgdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgICB2YXIgZnBpZHggPSB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleDtcblxuICAgICAgdmFyIG9uU2NyZWVuSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdO1xuICAgICAgaWYgKCFvblNjcmVlbkl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9uU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvblNjcmVlbkl0ZW0pO1xuICAgICAgdmFyIG9mZlNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgICAgLy8gUmVzdG9yZXMgdGhlIHBoeXNpY2FsIGl0ZW0gb25seSB3aGVuIGl0IGhhcyB0aGUgc2FtZSBtb2RlbFxuICAgICAgLy8gYXMgdGhlIG9mZnNjcmVlbiBvbmUuIFVzZSBrZXkgZm9yIGNvbXBhcmlzb24gc2luY2UgdXNlcnMgY2FuIHNldFxuICAgICAgLy8gYSBuZXcgaXRlbSB2aWEgc2V0KCdpdGVtcy5pZHgnKS5cbiAgICAgIGlmIChvblNjcmVlbkluc3RhbmNlW3RoaXMuYXNdID09PSBvZmZTY3JlZW5JbnN0YW5jZVt0aGlzLmFzXSkge1xuICAgICAgICAvLyBGbGlwIHRoZSBmb2N1cyBiYWNrZmlsbC5cbiAgICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBvblNjcmVlbkl0ZW07XG4gICAgICAgIG9uU2NyZWVuSW5zdGFuY2UudGFiSW5kZXggPSAtMTtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgICAvLyBIaWRlIHRoZSBwaHlzaWNhbCBpdGVtIHRoYXQgYmFja2ZpbGxzLlxuICAgICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgfSxcblxuICAgIF9kaWRGb2N1czogZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHRhcmdldE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgdmFyIGZvY3VzZWRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKTtcbiAgICAgIHZhciBoYXNPZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtICE9PSBudWxsO1xuICAgICAgdmFyIGZpZHggPSB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4O1xuICAgICAgaWYgKCF0YXJnZXRNb2RlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZm9jdXNlZE1vZGVsID09PSB0YXJnZXRNb2RlbCkge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBmb2N1c2VkIHRoZSBzYW1lIGl0ZW0sIHRoZW4gYnJpbmcgaXQgaW50byB2aWV3IGlmIGl0J3Mgbm90IHZpc2libGUuXG4gICAgICAgIGlmICghdGhpcy5faXNJbmRleFZpc2libGUoZmlkeCkpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoZmlkeCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgICAvLyBSZXN0b3JlIHRhYkluZGV4IGZvciB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbS5cbiAgICAgICAgaWYgKGZvY3VzZWRNb2RlbCkge1xuICAgICAgICAgIGZvY3VzZWRNb2RlbC50YWJJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgdGFiSW5kZXggZm9yIHRoZSBuZXh0IGZvY3VzZWQgaXRlbS5cbiAgICAgICAgdGFyZ2V0TW9kZWwudGFiSW5kZXggPSAwO1xuICAgICAgICBmaWR4ID0gdGFyZ2V0TW9kZWxbdGhpcy5pbmRleEFzXTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGZpZHg7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChmaWR4KTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4XTtcbiAgICAgICAgaWYgKGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtICYmICF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9rZXlkb3duSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAvKiBBUlJPV19ET1dOICovIDQwOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX1JJR0hUICovIDM5OlxuICAgICAgICAgIGlmICh0aGlzLmdyaWQpIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAtMSA6IDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBBUlJPV19VUCAqLyAzODpcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IC0gKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX0xFRlQgKi8gMzc6XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZCkgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IDEgOiAtMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEVOVEVSICovIDEzOlxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkhhbmRsZXIoZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpO1xuICAgIH0sXG5cbiAgICBfZGVib3VuY2U6IGZ1bmN0aW9uKG5hbWUsIGNiLCBhc3luY01vZHVsZSkge1xuICAgICAgaWYgKElTX1YyKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlcnMgPSB0aGlzLl9kZWJvdW5jZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLl9kZWJvdW5jZXJzW25hbWVdID0gUG9seW1lci5EZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgICAgdGhpcy5fZGVib3VuY2Vyc1tuYW1lXSxcbiAgICAgICAgICBhc3luY01vZHVsZSxcbiAgICAgICAgICBjYi5iaW5kKHRoaXMpKTtcbiAgICAgICAgUG9seW1lci5lbnF1ZXVlRGVib3VuY2VyKHRoaXMuX2RlYm91bmNlcnNbbmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUG9seW1lci5kb20uYWRkRGVib3VuY2VyKHRoaXMuZGVib3VuY2UobmFtZSwgY2IpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQcm9wZXJ0eTogZnVuY3Rpb24oaW5zdCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChJU19WMikge1xuICAgICAgICBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjIgKi9cbiAgICBfZm9yd2FyZEhvc3RQcm9wVjI6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5mb3J3YXJkSG9zdFByb3AocHJvcCwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9ub3RpZnlJbnN0YW5jZVByb3BWMjogZnVuY3Rpb24oaW5zdCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgaWYgKFBvbHltZXIuUGF0aC5tYXRjaGVzKHRoaXMuYXMsIHByb3ApKSB7XG4gICAgICAgIHZhciBpZHggPSBpbnN0W3RoaXMuaW5kZXhBc107XG4gICAgICAgIGlmIChwcm9wID09IHRoaXMuYXMpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zW2lkeF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeVBhdGgoUG9seW1lci5QYXRoLnRyYW5zbGF0ZSh0aGlzLmFzLCAnaXRlbXMuJyArIGlkeCwgcHJvcCksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogVGVtcGxhdGl6ZXIgYmluZGluZ3MgZm9yIHYxICovXG4gICAgX2dldFN0YW1wZWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxJdGVtcztcbiAgICB9LFxuXG4gICAgX2ZvcndhcmRJbnN0YW5jZVBhdGg6IGZ1bmN0aW9uKGluc3QsIHBhdGgsIHZhbHVlKSB7XG4gICAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuYXMgKyAnLicpID09PSAwKSB7XG4gICAgICAgIHRoaXMubm90aWZ5UGF0aCgnaXRlbXMuJyArIGluc3QuX19rZXlfXyArICcuJyArXG4gICAgICAgICAgICBwYXRoLnNsaWNlKHRoaXMuYXMubGVuZ3RoICsgMSksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQYXJlbnRQYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX2ZvcndhcmRQYXJlbnRQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSlbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICB9KTtcblxufSkoKTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWljb25zL2lyb24taWNvbnMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4vcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLmh0bWxcIj5cblxuPCEtLVxuICBgcGFwZXItYXV0b2NvbXBsZXRlYFxuXG4gICoqRnJvbSB2My54LngsIHRoaXMgY29tcG9uZW50IG9ubHkgd29ya3Mgd2l0aCBQb2x5bWVyIDEuNysgb3IgMi4wKy4qKlxuXG4gIFshW1B1Ymxpc2hlZCBvbiB3ZWJjb21wb25lbnRzLm9yZ10oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS93ZWJjb21wb25lbnRzLm9yZy1wdWJsaXNoZWQtYmx1ZS5zdmcpXShodHRwczovL3d3dy53ZWJjb21wb25lbnRzLm9yZy9lbGVtZW50L2VsbGlwdGljYWxqcy9wYXBlci1hdXRvY29tcGxldGUpXG5cbiAgWyFbU2F1Y2UgVGVzdCBTdGF0dXNdKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS9icm93c2VyLW1hdHJpeC9qaHVlc29zLnN2ZyldKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS91L2podWVzb3MpXG5cbiAgcGFwZXItYXV0b2NvbXBsZXRlIGV4dGVuZHMgZWFybGllciBlZmZvcnRzIHN1Y2ggYXMgdGhpcyAoaHR0cHM6Ly9naXRodWIuY29tL3JvZG8xMTExL3BhcGVyLWlucHV0LWF1dG9jb21wbGV0ZSlcbiAgdG8gcHJvdmlkZSBrZXlib2FyZCBzdXBwb3J0LCByZW1vdGUgYmluZGluZyBhbmQgcmVzdWx0cyBzY3JvbGxpbmcuXG5cbiAgSXQgaXMgKippbXBvcnRhbnQgdG8gcHJvdmlkZSBib3RoIGB0ZXh0UHJvcGVydHlgIGFuZCBgdmFsdWVQcm9wZXJ0eWAgd2hlbiB3b3JraW5nIHdpdGggYSBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uIGFuZFxuICBvciBjdXN0b20gdGVtcGxhdGVzLioqIFRoZXkgYXJlIG5lZWRlZCB0byBrZWVwIHRoZSBjb21wb25lbnQgYWNjZXNzaWJsZSBhbmQgZm9yIHRoZSBldmVudHMgKGUuZy4gb25TZWxlY3QpIHRvIGtlZXBcbiAgd29ya2luZy5cblxuICBUbyBpbnRlZ3JhdGUgd2l0aCBgaXJvbi1pbnB1dGAsIHlvdSBtdXN0IHNldCB0aGUgYG5hbWVgIG9wdGlvbi4gVGhlIHNlbGVjdGVkIGB2YWx1ZWAgd2lsbCBiZSBleHBvc2VkLCAqKm5vdCoqIHRoZVxuICBgdGV4dGAgdmFsdWUsXG5cbiAgIyMjIEFib3V0IFBvbHltZXIgMS54IGFuZCAyLnggQ29tcGF0aWJpbGl0eVxuICBGcm9tIHZlcnNpb24gYDMueC54YCwgdGhpcyBjb21wb25lbnQgd29yayB3aXRoIGJvdGggUG9seW1lciAxLjcrIG9yIFBvbHltZXIgMi4wKyBQbGVhc2UgdGFrZSBhIGxvb2sgdG8gdGhlXG4gIFtNSUdSQVRJT04ubWRdKC4vTUlHUkFUSU9OLm1kKSBmaWxlIHRoYXQgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbi5cblxuICAjIyMgQ3VzdG9tIHNlYXJjaFxuICBUaGlzIGNvbXBvbmVudCBoYXMgdGhlIHB1YmxpYyBtZXRob2QgYHF1ZXJ5Rm5gIHRoYXQgaXMgY2FsbGVkIGluIGVhY2gga2V5IHN0cm9rZSBhbmQgaXQgaXMgcmVzcG9uc2libGUgdG8gcXVlcnlcbiAgYWxsIGl0ZW1zIGluIHRoZSBgc291cmNlYCBhbmQgcmV0dXJucyBvbmx5IHRob3NlIGl0ZW1zIHRoYXQgbWF0Y2hlcyBjZXJ0YWluIGZpbHRlcmluZyBjcml0ZXJpYS4gQnkgZGVmYXVsdCwgdGhpc1xuICBjb21wb25lbnQgc2VhcmNoZXMgZm9yIGl0ZW1zIHRoYXQgc3RhcnQgd2l0aCB0aGUgcmVjZW50IHF1ZXJ5IChjYXNlIGluc2Vuc2l0aXZlKS5cbiAgWW91IGNhbiBvdmVycmlkZSB0aGlzIGJlaGF2aW9yIHByb3ZpZGluZyB5b3VyIG93biBxdWVyeSBmdW5jdGlvbiwgYXMgbG9uZyBhcyB0aGVzZSB0d28gcmVxdWlyZW1lbnRzIGFyZSBmdWxmaWxsZWQ6XG4gIC0gVGhlIHF1ZXJ5IGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLlxuICAtIFRoZSBBUEkgaXMgcmVzcGVjdGVkIGFuZCB0aGUgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGFuIEFycmF5LlxuICBUaGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgZWFjaCBzdWdnZXN0aW9uIGRlcGVuZHMgb24gdGhlIHN0cnVjdHVyZSBvZiBlYWNoIG9iamVjdCB0aGF0IHRoaXMgbWV0aG9kIHJldHVybnMuIEZvciB0aGVcbiAgZGVmYXVsdCB0ZW1wbGF0ZSwgZWFjaCBzdWdnZXN0aW9uIHNob3VsZCBmb2xsb3cgdGhpcyBvYmplY3Qgc3RydWN0dXJlOlxuICBgYGBcbiAgICB7XG4gICAgICB0ZXh0OiBvYmpUZXh0LFxuICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgfVxuICBgYGBcblxuICBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIGEgbG9jYWwgZGF0YSBzb3VyY2UgaXMgdXNlZC4gV2hlbiB1c2luZyBhIGByZW1vdGVEYXRhU291cmNlYCB1c2VyIGlzIHJlc3BvbnNpYmxlIGZvclxuICBkb2luZyB0aGUgc2VhcmNoIGFuZCBzcGVjaWZ5IHN1Z2dlc3Rpb25zIG1hbnVhbGx5LlxuXG4gICMjIyBDdXN0b20gdGVtcGxhdGVzXG4gIEEgdGVtcGxhdGUgZm9yIGVhY2ggc3VnZ2VzdGlvbiBjYW4gYmUgcHJvdmlkZWQsIGJ1dCBmb3Igbm93LCB0aGVyZSBhcmUgbGltaXRhdGlvbnMgaW4gdGhlIHdheSB5b3UgY2FuIGN1c3RvbWl6ZVxuICB0aGUgdGVtcGxhdGUuIFBsZWFzZSwgcmVhZCB0aGlzIHNlY3Rpb24gY2FyZWZ1bGx5IHRvIGtub3cgdGhlbS5cbiAgSW4gb3JkZXIgdG8gc2V0IHlvdXIgb3duIHRlbXBsYXRlLCB5b3UgbmVlZCB0byBhZGQgYSBgPHRlbXBsYXRlPmAgdGFnIHdpdGggdGhlIGF0dHJpYnV0ZVxuICBgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZWAgYW5kIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuXG4gIGBgYGh0bWxcbiAgPHBhcGVyLWF1dG9jb21wbGV0ZT5cbiAgICA8dGVtcGxhdGUgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZT5cbiAgICAgIDxwYXBlci1pdGVtIG9uLXRhcD1cIl9vblNlbGVjdFwiIGlkJD1cIltbX2dldFN1Z2dlc3Rpb25JZChpbmRleCldXVwiIHJvbGU9XCJvcHRpb25cIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIC8qKiBTdHlsZXMgZm9yIHlvdXIgY3VzdG9tIHRlbXBsYXRlIGhlcmUgKiovXG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgWU9VUiBDVVNUT00gVEVNUExBVEVcbiAgICAgICAgPHBhcGVyLXJpcHBsZT48L3BhcGVyLXJpcHBsZT5cbiAgICAgIDwvcGFwZXItaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3BhcGVyLWF1dG9jb21wbGV0ZT5cbiAgYGBgXG5cbiAgWW91IG5lZWQgdG8gYWx3YXlzIG1haW50YWluIHRoaXMgc3RydWN0dXJlLiBUaGVuIHlvdSBjYW4gY3VzdG9taXplIHRoZSBjb250ZW50IG9mIHBhcGVyLWl0ZW0uIFRoZXNlIGFyZSB0aGUgcmVhc29uc1xuICB3aHkgeW91IG5lZWQgdG8gbWFpbnRhaW4gaXQ6XG5cbiAgLSBgX29uU2VsZWN0YCBpdCBpcyB2ZXJ5IGltcG9ydGFudCBiZWNhdXNlIGl0IHdpbGwgbm90aWZ5IHRoZSBgYXV0b2NvbXBsZXRlYCBjb21wb25lbnQgd2hlbiB1c2VyIHNlbGVjdHMgb25lIGl0ZW0uXG4gIElmIHlvdSBkb24ndCBhZGQgdGhpcyBvcHRpb24sIHdoZW4gdXNlciBjbGlja3MgaW4gb25lIG9mIHRoZSBpdGVtcywgbm90aGluZyB3aWxsIGhhcHBlbi5cbiAgLSBgaWRgLCBgcm9sZWAgYW5kIGBhcmlhLXNlbGVjdGVkYCBuZWVkIHRvIGJlIHRoZXJlIGZvciBhY2Nlc3NpYmlsaXR5IHJlYXNvbnMuIElmIHlvdSBkb24ndCBzZXQgdGhlbSwgdGhlIGNvbXBvbmVudFxuICB3aWxsIGNvbnRpbnVlIHdvcmtpbmcgYnV0IGl0IHdpbGwgbm90IGJlIGFjY2Vzc2libGUgZm9yIHVzZXJzIHdpdGggZGlzYWJpbGl0aWVzLlxuXG4gIEl0IGlzIGltcG9ydGFudCB0byBjbGFyaWZ5IHRoYXQgbWV0aG9kcyBgX29uU2VsZWN0YCBhbmQgYF9nZXRTdWdnZXN0aW9uSWRgIGRvIG5vdCBuZWVkIHRvIGJlIGltcGxlbWVudGVkLiBUaGV5IGFyZVxuICBwYXJ0IG9mIHRoZSBsb2dpYyBvZiBgcGFwZXItYXV0b2NvbXBsZXRlYC5cblxuICBXaGVuIHByb3ZpZGluZyB5b3VyIG93biBjdXN0b20gdGVtcGxhdGUsIHlvdSBtaWdodCBhbHNvIG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uLiBUaGUgcmVhc29uXG4gIGZvciB0aGF0IGlzIHRoYXQgdGhlIGRlZmF1bHQgc2VhcmNoIGZ1bmN0aW9uIG9ubHkgZXhwb3NlcyB0ZXh0IGFuZCB2YWx1ZSBpbiB0aGUgcmVzdWx0cy4gSWYgZWFjaCBpdGVtIGluIHlvdXIgZGF0YVxuICBzb3VyY2UgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiwgdGhlbiB5b3Ugd29uJ3QgYmUgYWJsZSB0byBhY2Nlc3MgaXQuIFNlZSB0aGUgY29kZSBvZiB0aGUgYDxhZGRyZXNzLWF1dG9jb21wbGV0ZT5gXG4gIGVsZW1lbnQgaW4gdGhlIGRlbW8gZm9sZGVyIGZvciBhIGNvbXBsZXRlIGV4YW1wbGUuXG5cbiAgQW5vdGhlciBpbXBvcnRhbnQgdGhpbmcgdG8gcG9pbnQgb3V0IGlzIHJlbGF0ZWQgdG8gdGhlIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSBpbiB0aGUgcmVzdWx0cy4gVGhlIGhlaWdodCBvZlxuICB0aGUgc3VnZ2VzdGlvbiB0ZW1wbGF0ZSBjaGFuZ2VzIGR5bmFtaWNhbGx5IGRlcGVuZGluZyBvbiB0aGUgaGVpZ2h0IG9mIGEgc3VnZ2VzdGlvbiBpdGVtLiBIb3dldmVyLCB0aGUgZm9sbG93aW5nXG4gIGFzc3VtcHRpb25zIHdlcmUgbWFkZTpcbiAgLSBBbGwgc3VnZ2VzdGlvbnMgaXRlbXMgaGF2ZSB0aGUgc2FtZSBoZWlnaHRcbiAgLSBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpcyBmaXhlZCBhbmQgY2FuIGJlIGRldGVybWluZWQgYXQgYW55IHRpbWUuIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byB1c2UgaW1hZ2VzIGluIHRoZVxuICByZXN1bHRzLCBtYWtlIHN1cmUgdGhleSBoYXZlIGEgcGxhY2Vob2xkZXIgb3IgYSBmaXhlZCBoZWlnaHQuXG5cbiAgIyMjIFN0eWxpbmdcblxuICBgPHBhcGVyLWF1dG9jb21wbGV0ZT5gIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGluc1xuICBmb3Igc3R5bGluZzpcblxuICBDdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbiAgLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbiAgYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yYCB8IHNldHMgdGhlIGNvbXBvbmVudHMgaW5wdXQgY29udGFpbmVyIGZvY3VzIGNvbG9yIHwgYHZhcigtLXByaW1hcnktY29sb3IpYFxuICBgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtaXRlbS1taW4taGVpZ2h0YCB8IG1pbiBoZWlnaHQgb2YgZWFjaCBzdWdnZXN0aW9uIGl0ZW0gfCBgMzZweGBcbiAgYC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLXdyYXBwZXJgIHwgbWl4aW4gdG8gYXBwbHkgdG8gdGhlIHN1Z2dlc3Rpb25zIGNvbnRhaW5lciB8IGB7fWBcblxuICAjIyMgQWNjZXNzaWJpbGl0eVxuXG4gIFRoaXMgY29tcG9uZW50IGlzIGZyaWVuZGx5IHdpdGggc2NyZWVuIHJlYWRlcnMgKHRlc3RlZCBvbmx5IHdpdGggVm9pY2VPdmVyIGFuZCBOVkRBIGluIFdpbmRvd3MpOiBjdXJyZW50IHNlbGVjdGlvblxuICBhbmQgYWN0aXZlIHN1Z2dlc3Rpb24gYXJlIGFubm91bmNlZC5cblxuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1hdXRvY29tcGxldGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgLS1wYXBlci1pY29uLWJ1dHRvbjoge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjoge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIgcGFwZXItaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NsZWFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgLnNyLW9ubHkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIHtcbiAgICAgICAgLS1zdWdnZXN0aW9ucy13cmFwcGVyOiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLXdyYXBwZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1pdGVtLW1pbi1oZWlnaHQsIDM2cHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1vd25zPVwic3VnZ2VzdGlvbnNXcmFwcGVyXCIgYXJpYS1leHBhbmRlZCQ9XCJbW19pc1N1Z2dlc3Rpb25zT3BlbmVkXV1cIj5cbiAgICAgIDwhLS0gRm9yIGFjY2Vzc2liaWxpdHksIGl0IGlzIG5lZWRlZCB0byBoYXZlIGEgbGFiZWwgb3IgYXJpYS1sYWJlbC4gTGFiZWwgaXMgcHJlZmVycmVkIC0tPlxuICAgICAgPGxhYmVsIGZvcj1cImF1dG9jb21wbGV0ZUlucHV0XCIgY2xhc3M9XCJzci1vbmx5XCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPCEtLSBBZGRpbmcgYSBoaWRkZW4gaW5wdXQgdG8gaW50ZWdyYXRlIHdpdGggaXJvbi1mb3JtLCBpZiByZXF1aXJlZCAtLT5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHZhbHVlJD1cIltbdmFsdWVdXVwiID5cblxuICAgICAgPHBhcGVyLWlucHV0IGlkPVwiYXV0b2NvbXBsZXRlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwie3tkaXNhYmxlZH19XCJcbiAgICAgICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2UkPVwiW1tlcnJvck1lc3NhZ2VdXVwiXG4gICAgICAgICAgICAgICAgICAgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIlxuICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCJcbiAgICAgICAgICAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW2Fsd2F5c0Zsb2F0TGFiZWxdXVwiXG4gICAgICAgICAgICAgICAgICAgY2hhci1jb3VudGVyJD1cIltbY2hhckNvdW50ZXJdXVwiXG4gICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCJcblxuICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtbXVsdGlsaW5lPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudCQ9XCJbW19oaWdobGlnaHRlZFN1Z2dlc3Rpb24uZWxlbWVudElkXV1cIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYXV0b2NvbXBsZXRlU3RhdHVzIHN1Z2dlc3Rpb25zV3JhcHBlclwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgICA8IS0tIFRPRE86IHJlbW92ZSB0YWJpbmRleCB3b3JrYXJvdW5kIHdoZW4gIGlzIGZpeGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzMyNCAtLT5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBzdWZmaXggaWQ9XCJjbGVhclwiIGljb249XCJjbGVhclwiIG9uLWNsaWNrPVwiX2NsZWFyXCIgdGFiaW5kZXg9XCItMVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwhLS0gdG8gYW5ub3VuY2UgY3VycmVudCBzZWxlY3Rpb24gdG8gc2NyZWVuIHJlYWRlciAtLT5cbiAgICAgIDxzcGFuIGlkPVwiYXV0b2NvbXBsZXRlU3RhdHVzXCIgcm9sZT1cInN0YXR1c1wiIGNsYXNzPVwic3Itb25seVwiPltbX2hpZ2hsaWdodGVkU3VnZ2VzdGlvbi50ZXh0VmFsdWVdXTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMgZm9yPVwiYXV0b2NvbXBsZXRlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJbW21pbkxlbmd0aF1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtcHJvcGVydHk9XCJbW3RleHRQcm9wZXJ0eV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwiW1t2YWx1ZVByb3BlcnR5XV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQtb3B0aW9uPVwie3tfc2VsZWN0ZWRPcHRpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9XCJbW3NvdXJjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZS1zb3VyY2U9XCJbW3JlbW90ZVNvdXJjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LWZuPVwiW1txdWVyeUZuXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQtbmFtZXNwYWNlPVwiW1tldmVudE5hbWVzcGFjZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkLXN1Z2dlc3Rpb249XCJ7e19oaWdobGlnaHRlZFN1Z2dlc3Rpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcy1vcGVuPVwie3tfaXNTdWdnZXN0aW9uc09wZW5lZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC1maXJzdD1cIltbaGlnaGxpZ2h0Rmlyc3RdXVwiPlxuXG4gICAgICA8c2xvdCBpZD1cInRlbXBsYXRlc1wiIG5hbWU9XCJhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlXCI+PC9zbG90PlxuXG4gICAgPC9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48c2NyaXB0PlxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaXMgUG9seWZpbGwgaXMgbmVlZGVkIGZvciB0aGlzIHZlcnNpb24gdG8gd29yayB3aXRoIElFMTEgYW5kIFBvbHltZXIgMS54XG4gICAgLy8gVE9ETzogZmluZCBvdXQgd2h5IHRoaXMgaXMgbmVlZGVkIGluIElFMTFcbiAgICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFyZ3VtZW50KSB7XG4gICAgICAgICAgYXJndW1lbnQgPSBhcmd1bWVudCB8fCB3aW5kb3c7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYXJndW1lbnQsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWF1dG9jb21wbGV0ZScsXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBhdXRvVmFsaWRhdGVgIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGVycm9yTWVzc2FnZWAgVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBsYWJlbGAgVGV4dCB0byBkaXNwbGF5IGFzIHRoZSBpbnB1dCBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYG5vTGFiZWxGbG9hdGAgU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAgICAgICAqL1xuICAgICAgICBub0xhYmVsRmxvYXQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgYWx3YXlzRmxvYXRMYWJlbGAgU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGByZXF1aXJlZGAgU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBzb3VyY2VgIEFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgb3B0aW9ucyB0byBleGVjdXRlIHRoZSBhdXRvY29tcGxldGUgZmVhdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdGV4dCBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dFByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndGV4dCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydHkgb2YgbG9jYWwgZGF0YXNvdXJjZSB0byBhcyB0aGUgdmFsdWUgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlUHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHZhbHVlYCBTZWxlY3RlZCBvYmplY3QgZnJvbSB0aGUgc3VnZ2VzdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudC9zZWxlY3RlZCB0ZXh0IG9mIHRoZSBpbnB1dFxuICAgICAgICAgKi9cbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGUgc2hvd2luZyB0aGUgY2xlYXIgWCBidXR0b25cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVTaG93Q2xlYXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyB0byBhIHJlbW90ZSBkYXRhIHNvdXJjZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlU291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgdHlwZSBzZXBhcmF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50TmFtZXNwYWNlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnLSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWluaW11bSBsZW5ndGggdG8gdHJpZ2dlciBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBwYXR0ZXJuYCBQYXR0ZXJuIHRvIHZhbGlkYXRlIGlucHV0IGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICBwYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFsbG93ZWRQYXR0ZXJuYCBhbGxvd2VkUGF0dGVybiB0byB2YWxpZGF0ZSBpbnB1dCBmaWVsZFxuICAgICAgICAgKi9cbiAgICAgICAgYWxsb3dlZFBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRvIGB0cnVlYCB0byBzaG93IGEgY2hhcmFjdGVyIGNvdW50ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBjaGFyQ291bnRlcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSB0byBiZSB1c2VkIGJ5IHRoZSBhdXRvY29tcGxldGUgaW5wdXQuIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHdhbnRlZCB0byBiZSBpbnRlZ3JhdGVkIHdpdGggaXJvbi1mb3JtLlxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB1c2VkIHRvIGZpbHRlciBhdmFpbGFibGUgaXRlbXMuIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgdXNlZCBieSBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMsXG4gICAgICAgICAqIGl0IGlzIGFsc28gZXhwb3NlZCBoZXJlIHNvIGl0IGlzIHBvc3NpYmxlIHRvIHByb3ZpZGUgYSBjdXN0b20gcXVlcnlGbi5cbiAgICAgICAgICovXG4gICAgICAgIHF1ZXJ5Rm46IHtcbiAgICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGl0IHdpbGwgYWx3YXlzIGhpZ2hsaWdodCB0aGUgZmlyc3QgcmVzdWx0IGVhY2ggdGltZSBuZXcgc3VnZ2VzdGlvbnMgYXJlIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgICBoaWdobGlnaHRGaXJzdDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKioqKioqKioqKipcbiAgICAgICAgKiBQUklWQVRFXG4gICAgICAgICoqKioqKioqKioqKiovXG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIG5lZWQgX3ZhbHVlIGFuZCBfdGV4dCBwcm9wZXJ0aWVzLiBJdCBzZWVtcyB0aGV5IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIF92YWx1ZToge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICBfdGV4dDoge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNsZWFyIGJ1dHRvbiBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgX2lzQ2xlYXJCdXR0b25WaXNpYmxlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1Z2dlc3Rpb24gcG9wdXAgaXMgdmlzaWJsZSBvciBub3QuXG4gICAgICAgICAqL1xuICAgICAgICBfaXNTdWdnZXN0aW9uc09wZW5lZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9iamVjdCBjb250YWluaW5nIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3NlbGVjdGVkT3B0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX3RleHRPYnNlcnZlcih0ZXh0KSdcbiAgICAgIF0sXG5cbiAgICAgIC8vIEVsZW1lbnQgTGlmZWN5Y2xlXG4gICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdhdXRvY29tcGxldGUnICsgdGhpcy5ldmVudE5hbWVzcGFjZSArICdzZWxlY3RlZCcsXG4gICAgICAgICAgdGhpcy5fb25BdXRvY29tcGxldGVTZWxlY3RlZC5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENsZWFycyB0aGUgaW5wdXQgdGV4dFxuICAgICAgICovXG4gICAgICBfY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdyZXNldC1ibHVyJyk7XG5cbiAgICAgICAgdGhpcy5faGlkZUNsZWFyQnV0dG9uKCk7XG5cbiAgICAgICAgLy8gRml4OiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy80OTNcbiAgICAgICAgaWYgKCF0aGlzLiQuYXV0b2NvbXBsZXRlSW5wdXQuZm9jdXNlZCkge1xuICAgICAgICAgIHRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIERpc3BhdGNoZXMgYXV0b2NvbXBsZXRlIGV2ZW50c1xuICAgICAgICovXG4gICAgICBfZmlyZUV2ZW50OiBmdW5jdGlvbiAob3B0aW9uLCBldnQpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fZ2V0SWQoKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gJ2F1dG9jb21wbGV0ZScgKyB0aGlzLmV2ZW50TmFtZXNwYWNlICsgZXZ0O1xuXG4gICAgICAgIHRoaXMuZmlyZShldmVudCwge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV0gfHwgb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIHRleHQ6IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0gfHwgb3B0aW9uLnRleHQsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPbiB0ZXh0IGV2ZW50IGhhbmRsZXJcbiAgICAgICAqL1xuICAgICAgX3RleHRPYnNlcnZlcjogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgJiYgdGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBhdXRvY29tcGxldGUgc2VsZWN0aW9uXG4gICAgICAgKi9cbiAgICAgIF9vbkF1dG9jb21wbGV0ZVNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IGV2ZW50LmRldGFpbDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLnRleHQgPSBzZWxlY3Rpb24udGV4dDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hvdyB0aGUgY2xlYXIgYnV0dG9uIChYKVxuICAgICAgICovXG4gICAgICBfc2hvd0NsZWFyQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTaG93Q2xlYXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuY2xlYXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGUgdGhlIGNsZWFyIGJ1dHRvbiAoWClcbiAgICAgICAqL1xuICAgICAgX2hpZGVDbGVhckJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kLmNsZWFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBfZ2V0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGlmICghaWQpIGlkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LFxuXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogUFVCTElDXG4gICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHRleHQvdmFsdWUgb3B0aW9uIG9mIHRoZSBpbnB1dFxuICAgICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgZ2V0T3B0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdGV4dC92YWx1ZSBvcHRpb24gb2YgdGhlIGlucHV0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cbiAgICAgIHNldE9wdGlvbjogZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25bdGhpcy50ZXh0UHJvcGVydHldIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV0gfHwgb3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24oKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGlzYWJsZXMgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVuYWJsZXMgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3VnZ2VzdGlvbnNcbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAgICovXG4gICAgICBzdWdnZXN0aW9uczogZnVuY3Rpb24gKGFycikge1xuICAgICAgICB0aGlzLiQucGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9ucy5zdWdnZXN0aW9ucyhhcnIpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBWYWxpZGF0ZXMgdGhlIGlucHV0XG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC52YWxpZGF0ZSgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgaW5wdXRcbiAgICAgICAqL1xuICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXNldHMgdGhlIGN1cnJlbnQgaW5wdXQgKERFUFJFQ0FURUQ6IHBsZWFzZSB1c2UgY2xlYXIpXG4gICAgICAgKi9cbiAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGVzIHRoZSBzdWdnZXN0aW9ucyBwb3B1cFxuICAgICAgICovXG4gICAgICBoaWRlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faGlkZUNsZWFyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuJC5wYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGxvd3MgY2FsbGluZyB0aGUgb25TZWxlY3QgZnVuY3Rpb24gZnJvbSBvdXRzaWRlXG4gICAgICAgKiBUaGlzIGluIHRpbWUgdHJpZ2dlcnMgdGhlIGF1dG9jb21wbGV0ZS1zZWxlY3RlZCBldmVudFxuICAgICAgICogd2l0aCBhbGwgdGhlIGRhdGEgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgb25TZWxlY3RIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4kLnBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMuX29uU2VsZWN0KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIGEgc2VsZWN0aW9uIGlzIG1hZGVcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXNlbGVjdGVkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgY2hhbmdlXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1jaGFuZ2VcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBmb2N1c1xuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtZm9jdXNcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBibHVyXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1ibHVyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvblxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgb24gaW5wdXQgcmVzZXQvY2xlYXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLXJlc2V0LWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cbiAgICB9KTtcbiAgfSgpKTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9jb2xvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItc3Bpbm5lci1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItc3Bpbm5lci1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmIGFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBzaW5nbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBpcyBibHVlLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBiZSBhIGRpZmZlcmVudCBjb2xvci5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWYgbm90IHByb3ZpZGVkLFxuaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLlxuRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZSBlbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZFxuaW4gYW5vdGhlciBmb3JtIChlLmcuIGEgdGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzcGlubmVyIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXItbGl0ZVxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItc3Bpbm5lci1saXRlXCI+XG4gIDx0ZW1wbGF0ZSBzdHJpcC13aGl0ZXNwYWNlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPGRpdlxuICAgICAgICBpZD1cInNwaW5uZXJDb250YWluZXJcIlxuICAgICAgICBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiXG4gICAgICAgIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIlxuICAgICAgICBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItc3Bpbm5lci1saXRlJyxcblxuICAgICAgYmVoYXZpb3JzOiBbXG4gICAgICAgIFBvbHltZXIuUGFwZXJTcGlubmVyQmVoYXZpb3JcbiAgICAgIF1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmh0bWxcIj5cblxuPHNjcmlwdD5cblxuLyoqXG5gaXJvbi1hMTF5LWtleXNgIHByb3ZpZGVzIGEgY3Jvc3MtYnJvd3NlciBpbnRlcmZhY2UgZm9yIHByb2Nlc3NpbmdcbmtleWJvYXJkIGNvbW1hbmRzLiBUaGUgaW50ZXJmYWNlIGFkaGVyZXMgdG8gW1dBSS1BUklBIGJlc3RcbnByYWN0aWNlc10oaHR0cDovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNrYmRfZ2VuZXJhbF9iaW5kaW5nKS5cbkl0IHVzZXMgYW4gZXhwcmVzc2l2ZSBzeW50YXggdG8gZmlsdGVyIGtleSBwcmVzc2VzLlxuXG4jIyBCYXNpYyB1c2FnZVxuXG5UaGUgc2FtcGxlIGNvZGUgYmVsb3cgaXMgYSBwb3J0aW9uIG9mIGEgY3VzdG9tIGVsZW1lbnQuIFRoZSBnb2FsIGlzIHRvIGNhbGxcbnRoZSBgb25FbnRlcmAgbWV0aG9kIHdoZW5ldmVyIHRoZSBgcGFwZXItaW5wdXRgIGVsZW1lbnQgaXMgaW4gZm9jdXMgYW5kXG50aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZC5cblxuICAgIDxpcm9uLWExMXkta2V5cyBpZD1cImExMXlcIiB0YXJnZXQ9XCJbW3RhcmdldF1dXCIga2V5cz1cImVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uLWtleXMtcHJlc3NlZD1cIm9uRW50ZXJcIj48L2lyb24tYTExeS1rZXlzPlxuICAgIDxwYXBlci1pbnB1dCBpZD1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHNvbWV0aGluZy4gUHJlc3MgZW50ZXIuIENoZWNrIGNvbnNvbGUuXCJcbiAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3VzZXJJbnB1dDo6aW5wdXR9fVwiPjwvcGFwZXItaW5wdXQ+XG5cblRoZSBjdXN0b20gZWxlbWVudCBkZWNsYXJlcyBhbiBgaXJvbi1hMTF5LWtleXNgIGVsZW1lbnQgdGhhdCBpcyBib3VuZCB0byBhXG5wcm9wZXJ0eSBjYWxsZWQgYHRhcmdldGAuIFRoZSBgdGFyZ2V0YCBwcm9wZXJ0eVxubmVlZHMgdG8gZXZhbHVhdGUgdG8gdGhlIGBwYXBlci1pbnB1dGAgbm9kZS4gYGlyb24tYTExeS1rZXlzYCByZWdpc3RlcnNcbmFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSB0YXJnZXQgbm9kZSB1c2luZyBQb2x5bWVyJ3MgW2Fubm90YXRlZCBldmVudCBoYW5kbGVyXG5zeW50YXhdKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvZXZlbnRzLmh0bWwjYW5ub3RhdGVkLWxpc3RlbmVycykuIGB7e3VzZXJJbnB1dDo6aW5wdXR9fWAgc2V0cyB0aGUgYHVzZXJJbnB1dGAgcHJvcGVydHkgdG8gdGhlXG51c2VyJ3MgaW5wdXQgb24gZWFjaCBrZXlzdHJva2UuXG5cblRoZSBsYXN0IHN0ZXAgaXMgdG8gbGluayB0aGUgdHdvIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VzdG9tIGVsZW1lbnQnc1xucmVnaXN0cmF0aW9uLlxuXG4gICAgLi4uXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdXNlcklucHV0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kLmlucHV0O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgb25FbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbnB1dCk7XG4gICAgfVxuICAgIC4uLlxuXG4jIyBUaGUgYGtleXNgIGF0dHJpYnV0ZVxuXG5UaGUgYGtleXNgIGF0dHJpYnV0ZSBleHByZXNzZXMgd2hhdCBjb21iaW5hdGlvbiBvZiBrZXlzIHRyaWdnZXJzIHRoZSBldmVudC5cblxuVGhlIGF0dHJpYnV0ZSBhY2NlcHRzIGEgc3BhY2Utc2VwYXJhdGVkLCBwbHVzLXNpZ24tY29uY2F0ZW5hdGVkXG5zZXQgb2YgbW9kaWZpZXIga2V5cyBhbmQgc29tZSBjb21tb24ga2V5Ym9hcmQga2V5cy5cblxuVGhlIGNvbW1vbiBrZXlzIGFyZTogYGEtemAsIGAwLTlgICh0b3Agcm93IGFuZCBudW1iZXIgcGFkKSwgYCpgIChzaGlmdCA4IGFuZFxubnVtYmVyIHBhZCksIGBGMS1GMTJgLCBgUGFnZSBVcGAsIGBQYWdlIERvd25gLCBgTGVmdCBBcnJvd2AsIGBSaWdodCBBcnJvd2AsXG5gRG93biBBcnJvd2AsIGBVcCBBcnJvd2AsIGBIb21lYCwgYEVuZGAsIGBFc2NhcGVgLCBgU3BhY2VgLCBgVGFiYCwgYEVudGVyYC5cblxuVGhlIG1vZGlmaWVyIGtleXMgYXJlOiBgU2hpZnRgLCBgQ29udHJvbGAsIGBBbHRgLCBgTWV0YWAuXG5cbkFsbCBrZXlzIGFyZSBleHBlY3RlZCB0byBiZSBsb3dlcmNhc2UgYW5kIHNob3J0ZW5lZC4gRS5nLlxuYExlZnQgQXJyb3dgIGlzIGBsZWZ0YCwgYFBhZ2UgRG93bmAgaXMgYHBhZ2Vkb3duYCwgYENvbnRyb2xgIGlzIGBjdHJsYCxcbmBGMWAgaXMgYGYxYCwgYEVzY2FwZWAgaXMgYGVzY2AsIGV0Yy5cblxuIyMjIEdyYW1tYXJcblxuQmVsb3cgaXMgdGhlIFtFQk5GXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0V4dGVuZGVkX0JhY2t1cyVFMiU4MCU5M05hdXJfRm9ybSlcbkdyYW1tYXIgb2YgdGhlIGBrZXlzYCBhdHRyaWJ1dGUuXG5cbiAgICBtb2RpZmllciA9IFwic2hpZnRcIiB8IFwiY3RybFwiIHwgXCJhbHRcIiB8IFwibWV0YVwiO1xuICAgIGFzY2lpID0gPyAvW2EtejAtOV0vID8gO1xuICAgIGZua2V5ID0gPyBmMSB0aHJvdWdoIGYxMiA/IDtcbiAgICBhcnJvdyA9IFwidXBcIiB8IFwiZG93blwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgO1xuICAgIGtleSA9IFwidGFiXCIgfCBcImVzY1wiIHwgXCJzcGFjZVwiIHwgXCIqXCIgfCBcInBhZ2V1cFwiIHwgXCJwYWdlZG93blwiIHxcbiAgICAgICAgICBcImhvbWVcIiB8IFwiZW5kXCIgfCBhcnJvdyB8IGFzY2lpIHwgZm5rZXk7XG4gICAgZXZlbnQgPSBcImtleXByZXNzXCIgfCBcImtleWRvd25cIiB8IFwia2V5dXBcIjtcbiAgICBrZXljb21ibyA9IHsgbW9kaWZpZXIsIFwiK1wiIH0sIGtleSwgWyBcIjpcIiwgZXZlbnQgXSA7XG4gICAga2V5cyA9IGtleWNvbWJvLCB7IFwiIFwiLCBrZXljb21ibyB9IDtcblxuIyMjIEV4YW1wbGVcblxuR2l2ZW4gdGhlIGZvbGxvd2luZyB2YWx1ZSBmb3IgYGtleXNgOlxuXG5gY3RybCtzaGlmdCtmNyB1cCBwYWdlZG93biBlc2Mgc3BhY2UgYWx0K21gXG5cblRoZSBldmVudCBpcyBmaXJlZCBpZiBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXkgY29tYmluYXRpb25zIGFyZSBmaXJlZDpcbmBDb250cm9sYCBhbmQgYFNoaWZ0YCBhbmQgYEY3YCBrZXlzLCBgVXAgQXJyb3dgIGtleSwgYFBhZ2UgRG93bmAga2V5LFxuYEVzY2FwZWAga2V5LCBgU3BhY2VgIGtleSwgYEFsdGAgYW5kIGBNYCBrZXlzLlxuXG4jIyMgV0FJLUFSSUEgU2xpZGVyIEV4YW1wbGVcblxuVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIHRoZSBzZXQgb2Yga2V5cyB0aGF0IGZ1bGZpbGxzIFdBSS1BUklBJ3Ncblwic2xpZGVyXCIgcm9sZSBbYmVzdFxucHJhY3RpY2VzXShodHRwOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI3NsaWRlcik6XG5cbiAgICA8aXJvbi1hMTF5LWtleXMgdGFyZ2V0PVwiW1t0YXJnZXRdXVwiIGtleXM9XCJsZWZ0IHBhZ2Vkb3duIGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBvbi1rZXlzLXByZXNzZWQ9XCJkZWNyZW1lbnRcIj48L2lyb24tYTExeS1rZXlzPlxuICAgIDxpcm9uLWExMXkta2V5cyB0YXJnZXQ9XCJbW3RhcmdldF1dXCIga2V5cz1cInJpZ2h0IHBhZ2V1cCB1cFwiXG4gICAgICAgICAgICAgICAgICAgIG9uLWtleXMtcHJlc3NlZD1cImluY3JlbWVudFwiPjwvaXJvbi1hMTF5LWtleXM+XG4gICAgPGlyb24tYTExeS1rZXlzIHRhcmdldD1cIltbdGFyZ2V0XV1cIiBrZXlzPVwiaG9tZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uLWtleXMtcHJlc3NlZD1cInNldE1pblwiPjwvaXJvbi1hMTF5LWtleXM+XG4gICAgPGlyb24tYTExeS1rZXlzIHRhcmdldD1cIltbdGFyZ2V0XV1cIiBrZXlzPVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgb24ta2V5cy1wcmVzc2VkPVwic2V0TWF4XCI+PC9pcm9uLWExMXkta2V5cz5cblxuVGhlIGB0YXJnZXRgIHByb3BlcnRpZXMgbXVzdCBldmFsdWF0ZSB0byBhIG5vZGUuIFNlZSB0aGUgYmFzaWMgdXNhZ2VcbmV4YW1wbGUgYWJvdmUuXG5cbkVhY2ggb2YgdGhlIHZhbHVlcyBmb3IgdGhlIGBvbi1rZXlzLXByZXNzZWRgIGF0dHJpYnV0ZXMgbXVzdCBldmFsdXRlXG50byBtZXRob2RzLiBUaGUgYGluY3JlbWVudGAgbWV0aG9kIHNob3VsZCBtb3ZlIHRoZSBzbGlkZXIgYSBzZXQgYW1vdW50XG50b3dhcmQgdGhlIG1heGltdW0gdmFsdWUuIGBkZWNyZW1lbnRgIHNob3VsZCBtb3ZlIHRoZSBzbGlkZXIgYSBzZXQgYW1vdW50XG50b3dhcmQgdGhlIG1pbmltdW0gdmFsdWUuIGBzZXRNaW5gIHNob3VsZCBtb3ZlIHRoZSBzbGlkZXIgdG8gdGhlIG1pbmltdW1cbnZhbHVlLiBgc2V0TWF4YCBzaG91bGQgbW92ZSB0aGUgc2xpZGVyIHRvIHRoZSBtYXhpbXVtIHZhbHVlLlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5cblxuXG4gIFBvbHltZXIoe1xuICAgIGlzOiAnaXJvbi1hMTF5LWtleXMnLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLklyb25BMTF5S2V5c0JlaGF2aW9yXG4gICAgXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKiBAdHlwZSB7P05vZGV9ICovXG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogJ190YXJnZXRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTcGFjZSBkZWxpbWl0ZWQgbGlzdCBvZiBrZXlzIHdoZXJlIGVhY2gga2V5IGZvbGxvd3MgdGhlIGZvcm1hdDpcbiAgICAgICAqIGBbTU9ESUZJRVIrXSpLRVlbOkVWRU5UXWAuXG4gICAgICAgKiBlLmcuIGBrZXlzPVwic3BhY2UgY3RybCtzaGlmdCt0YWIgZW50ZXI6a2V5dXBcImAuXG4gICAgICAgKiBNb3JlIGRldGFpbCBjYW4gYmUgZm91bmQgaW4gdGhlIFwiR3JhbW1hclwiIHNlY3Rpb24gb2YgdGhlIGRvY3VtZW50YXRpb25cbiAgICAgICAqL1xuICAgICAga2V5czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfa2V5c0NoYW5nZWQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF90YXJnZXRDaGFuZ2VkOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIHRoaXMua2V5RXZlbnRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgfSxcblxuICAgIF9rZXlzQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlbW92ZU93bktleUJpbmRpbmdzKCk7XG4gICAgICB0aGlzLmFkZE93bktleUJpbmRpbmcodGhpcy5rZXlzLCAnX2ZpcmVLZXlzUHJlc3NlZCcpO1xuICAgIH0sXG5cbiAgICBfZmlyZUtleXNQcmVzc2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy5maXJlKCdrZXlzLXByZXNzZWQnLCBldmVudC5kZXRhaWwsIHt9KTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1rZXlzL2lyb24tYTExeS1rZXlzLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9zaGFkb3cuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1tYXRlcmlhbGAgaXMgYSBjb250YWluZXIgdGhhdCByZW5kZXJzIHR3byBzaGFkb3dzIG9uIHRvcCBvZiBlYWNoIG90aGVyIHRvXG5jcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1tYXRlcmlhbCBlbGV2YXRpb249XCIxXCI+XG4gICAgICAuLi4gY29udGVudCAuLi5cbiAgICA8L3BhcGVyLW1hdGVyaWFsPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItbWF0ZXJpYWxcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW2FuaW1hdGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1zaGFkb3ctdHJhbnNpdGlvbjtcbiAgICAgIH1cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItbWF0ZXJpYWwnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgei1kZXB0aCBvZiB0aGlzIGVsZW1lbnQsIGZyb20gMC01LiBTZXR0aW5nIHRvIDAgd2lsbCByZW1vdmUgdGhlXG4gICAgICAgKiBzaGFkb3csIGFuZCBlYWNoIGluY3JlYXNpbmcgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIHdpbGwgYmUgXCJkZWVwZXJcIlxuICAgICAgICogdGhhbiB0aGUgbGFzdC5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGVsZXZhdGlvblxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAxXG4gICAgICAgKi9cbiAgICAgIGVsZXZhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBzaGFkb3cgd2hlbiBzZXR0aW5nIGEgbmV3XG4gICAgICAgKiBgZWxldmF0aW9uYCB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGFuaW1hdGVkXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBhbmltYXRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIlxucmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9c2hhcmVkLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+LmNhcmR7bWFyZ2luOjI0cHg7cGFkZGluZzoxNnB4O2NvbG9yOiM3NTc1NzU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKX0uY2lyY2xle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjY0cHg7aGVpZ2h0OjY0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzU1NTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNkZGQ7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6NjRweH1oMXttYXJnaW46MTZweCAwO2NvbG9yOiMyMTIxMjE7Zm9udC1zaXplOjIycHh9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQtc3R5bGVzLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4gIC8qKlxuICAgKiBVc2UgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBhZGQtb24gZm9yIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIEFcbiAgICogYWRkLW9uIGFwcGVhcnMgYmVsb3cgdGhlIGlucHV0LCBhbmQgbWF5IGRpc3BsYXkgaW5mb3JtYXRpb24gYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZFxuICAgKiB2YWxpZGl0eSBzdWNoIGFzIGEgY2hhcmFjdGVyIGNvdW50ZXIgb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICogQHBvbHltZXJCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvciA9IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWRvbS9pc3N1ZXMvOTZcbiAgICAgIFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICB0aGlzLmZpcmUoJ2FkZG9uLWF0dGFjaGVkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmdW5jdGlvbiBjYWxsZWQgYnkgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBvciB2YWxpZGl0eSBjaGFuZ2VzLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIH1cblxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvYXBwLXN0b3JhZ2UvYXBwLWxvY2Fsc3RvcmFnZS9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxyXG5cclxuXHJcbjxkb20tbW9kdWxlIGlkPVwibHVkaW5nLWNhcmRcIj5cclxuICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Y3VzdG9tLXN0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIHBhcGVyLWljb24tYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXBpbmstNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uLWluay1jb2xvcjogdmFyKC0tcGFwZXItaW5kaWdvLTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFwZXItaWNvbi1idXR0b24ucGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItcGluay01MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5ibHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uLWluay1jb2xvcjogdmFyKC0tcGFwZXItb3JhbmdlLTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItbGlnaHQtYmx1ZS01MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmF0ZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZ3JleS02MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yYXRlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5yYXRlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC0taXJvbi1pY29uLWZpbGwtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taXJvbi1pY29uLXN0cm9rZS1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS02MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvY3VzdG9tLXN0eWxlPlxyXG4gICAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGlkPVwic3RvcmFnZVwiIGtleT1cIltbaXRlbS5hdXRob3JpZF1dXCIgZGF0YT1cInt7YWN0aXZlfX1cIiBkZWJ1Zz48L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XHJcbiAgICAgICAgPHBhcGVyLWNhcmQgY2xhc3M9XCJyYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjogMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwidGl0bGVcIiBjbGFzcz1cInRpdGxlXCI+PC9zbG90PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInN1YnRpdGxlXCIgY2xhc3M9XCJzdWJ0aXRsZVwiPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBjbGFzcyQ9XCJbW2FjdGl2ZV1dXCIgcmlnaHQgaWNvbj1cImZhdm9yaXRlXCIgb24tdGFwPVwidG9nZ2xlXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gcmlnaHQgaWNvbj1cInN0YXJcIiBvbi10YXA9XCJ0b2dnbGVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiByaWdodCBpY29uPVwiaWNvbnM6YXJyb3ctZm9yd2FyZFwiIG9uLXRhcD1cIm5hdmlnYXRlXCI+IDwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFjdGlvbnNcIiBjbGFzcz1cImFjdGlvbnNcIj48L3Nsb3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9wYXBlci1jYXJkPlxyXG5cclxuXHJcblxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8c2NyaXB0PlxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGBsdWRpbmctY2FyZGAgRGVzY3JpcHRpb25cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBzdW1tYXJ5IFNob3J0RGVzY3JpcHRpb24uXHJcbiAgICAgICAgICogQGN1c3RvbUVsZW1lbnRcclxuICAgICAgICAgKiBAcG9seW1lclxyXG4gICAgICAgICAqIEBleHRlbmRzIHtQb2x5bWVyLkVsZW1lbnR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3MgTHVkaW5nQ2FyZCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTdHJpbmcgcHJvdmlkaW5nIHRoZSB0YWcgbmFtZSB0byByZWdpc3RlciB0aGUgZWxlbWVudCB1bmRlci5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBnZXQgaXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2x1ZGluZy1jYXJkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9iamVjdCBkZXNjcmliaW5nIHByb3BlcnR5LXJlbGF0ZWQgbWV0YWRhdGEgdXNlZCBieSBQb2x5bWVyIGZlYXR1cmVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ29kZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6ICdpc0FjdGl2ZShpdGVtKSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5zdGFuY2Ugb2YgdGhlIGVsZW1lbnQgaXMgY3JlYXRlZC91cGdyYWRlZC4gVXNlOiBpbml0aWFsaXppbmcgc3RhdGUsXHJcbiAgICAgICAgICAgICAqIHNldCB1cCBldmVudCBsaXN0ZW5lcnMsIGNyZWF0ZSBzaGFkb3cgZG9tLlxyXG4gICAgICAgICAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZSBmb3Igb25lLXRpbWUgY29uZmlndXJhdGlvbiBvZiB5b3VyIGNvbXBvbmVudCBhZnRlciBsb2NhbCBET00gaXMgaW5pdGlhbGl6ZWQuIFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZHkoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5yZWFkeSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFBvbHltZXIuUmVuZGVyU3RhdHVzLmFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9nZ2xlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uYWN0aXZlID0gIXRoaXMuaXRlbS5hY3RpdmVcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvZGV0YWlscyh0aGlzLml0ZW1bdGhpcy5vYmppZF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNBY3RpdmUoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYWN0aXZleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoTHVkaW5nQ2FyZC5pcywgTHVkaW5nQ2FyZCk7XHJcbiAgICA8L3NjcmlwdD5cclxuPC9kb20tbW9kdWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2x1ZGluZy1jYXJkLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2lyb24taWNvbi9pcm9uLWljb24uaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPWljb25zIHNpemU9MjQ+IDxzdmc+PGRlZnM+IDxnIGlkPTNkLXJvdGF0aW9uPjxwYXRoIGQ9XFxcIk03LjUyIDIxLjQ4QzQuMjUgMTkuOTQgMS45MSAxNi43NiAxLjU1IDEzSC4wNUMuNTYgMTkuMTYgNS43MSAyNCAxMiAyNGwuNjYtLjAzLTMuODEtMy44MS0xLjMzIDEuMzJ6bS44OS02LjUyYy0uMTkgMC0uMzctLjAzLS41Mi0uMDgtLjE2LS4wNi0uMjktLjEzLS40LS4yNC0uMTEtLjEtLjItLjIyLS4yNi0uMzctLjA2LS4xNC0uMDktLjMtLjA5LS40N2gtMS4zYzAgLjM2LjA3LjY4LjIxLjk1LjE0LjI3LjMzLjUuNTYuNjkuMjQuMTguNTEuMzIuODIuNDEuMy4xLjYyLjE1Ljk2LjE1LjM3IDAgLjcyLS4wNSAxLjAzLS4xNS4zMi0uMS42LS4yNS44My0uNDRzLjQyLS40My41NS0uNzJjLjEzLS4yOS4yLS42MS4yLS45NyAwLS4xOS0uMDItLjM4LS4wNy0uNTYtLjA1LS4xOC0uMTItLjM1LS4yMy0uNTEtLjEtLjE2LS4yNC0uMy0uNC0uNDMtLjE3LS4xMy0uMzctLjIzLS42MS0uMzEuMi0uMDkuMzctLjIuNTItLjMzLjE1LS4xMy4yNy0uMjcuMzctLjQyLjEtLjE1LjE3LS4zLjIyLS40Ni4wNS0uMTYuMDctLjMyLjA3LS40OCAwLS4zNi0uMDYtLjY4LS4xOC0uOTYtLjEyLS4yOC0uMjktLjUxLS41MS0uNjktLjItLjE5LS40Ny0uMzMtLjc3LS40M0M5LjEgOC4wNSA4Ljc2IDggOC4zOSA4Yy0uMzYgMC0uNjkuMDUtMSAuMTYtLjMuMTEtLjU3LjI2LS43OS40NS0uMjEuMTktLjM4LjQxLS41MS42Ny0uMTIuMjYtLjE4LjU0LS4xOC44NWgxLjNjMC0uMTcuMDMtLjMyLjA5LS40NXMuMTQtLjI1LjI1LS4zNGMuMTEtLjA5LjIzLS4xNy4zOC0uMjIuMTUtLjA1LjMtLjA4LjQ4LS4wOC40IDAgLjcuMS44OS4zMS4xOS4yLjI5LjQ5LjI5Ljg2IDAgLjE4LS4wMy4zNC0uMDguNDktLjA1LjE1LS4xNC4yNy0uMjUuMzctLjExLjEtLjI1LjE4LS40MS4yNC0uMTYuMDYtLjM2LjA5LS41OC4wOUg3LjV2MS4wM2guNzdjLjIyIDAgLjQyLjAyLjYuMDdzLjMzLjEzLjQ1LjIzYy4xMi4xMS4yMi4yNC4yOS40LjA3LjE2LjEuMzUuMS41NyAwIC40MS0uMTIuNzItLjM1LjkzLS4yMy4yMy0uNTUuMzMtLjk1LjMzem04LjU1LTUuOTJjLS4zMi0uMzMtLjctLjU5LTEuMTQtLjc3LS40My0uMTgtLjkyLS4yNy0xLjQ2LS4yN0gxMnY4aDIuM2MuNTUgMCAxLjA2LS4wOSAxLjUxLS4yNy40NS0uMTguODQtLjQzIDEuMTYtLjc2LjMyLS4zMy41Ny0uNzMuNzQtMS4xOS4xNy0uNDcuMjYtLjk5LjI2LTEuNTd2LS40YzAtLjU4LS4wOS0xLjEtLjI2LTEuNTctLjE4LS40Ny0uNDMtLjg3LS43NS0xLjJ6bS0uMzkgMy4xNmMwIC40Mi0uMDUuNzktLjE0IDEuMTMtLjEuMzMtLjI0LjYyLS40My44NS0uMTkuMjMtLjQzLjQxLS43MS41My0uMjkuMTItLjYyLjE4LS45OS4xOGgtLjkxVjkuMTJoLjk3Yy43MiAwIDEuMjcuMjMgMS42NC42OS4zOC40Ni41NyAxLjEyLjU3IDEuOTl2LjR6TTEyIDBsLS42Ni4wMyAzLjgxIDMuODEgMS4zMy0xLjMzYzMuMjcgMS41NSA1LjYxIDQuNzIgNS45NiA4LjQ4aDEuNUMyMy40NCA0Ljg0IDE4LjI5IDAgMTIgMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY2Vzc2liaWxpdHk+PHBhdGggZD1cXFwiTTEyIDJjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yem05IDdoLTZ2MTNoLTJ2LTZoLTJ2Nkg5VjlIM1Y3aDE4djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2Nlc3NpYmxlPjxjaXJjbGUgY3g9MTIgY3k9NCByPTI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE5IDEzdi0yYy0xLjU0LjAyLTMuMDktLjc1LTQuMDctMS44M2wtMS4yOS0xLjQzYy0uMTctLjE5LS4zOC0uMzQtLjYxLS40NS0uMDEgMC0uMDEtLjAxLS4wMi0uMDFIMTNjLS4zNS0uMi0uNzUtLjMtMS4xOS0uMjZDMTAuNzYgNy4xMSAxMCA4LjA0IDEwIDkuMDlWMTVjMCAxLjEuOSAyIDIgMmg1djVoMnYtNS41YzAtMS4xLS45LTItMi0yaC0zdi0zLjQ1YzEuMjkgMS4wNyAzLjI1IDEuOTQgNSAxLjk1em0tNi4xNyA1Yy0uNDEgMS4xNi0xLjUyIDItMi44MyAyLTEuNjYgMC0zLTEuMzQtMy0zIDAtMS4zMS44NC0yLjQxIDItMi44M1YxMi4xYy0yLjI4LjQ2LTQgMi40OC00IDQuOSAwIDIuNzYgMi4yNCA1IDUgNSAyLjQyIDAgNC40NC0xLjcyIDQuOS00aC0yLjA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1iYWxhbmNlPjxwYXRoIGQ9XFxcIk00IDEwdjdoM3YtN0g0em02IDB2N2gzdi03aC0zek0yIDIyaDE5di0zSDJ2M3ptMTQtMTJ2N2gzdi03aC0zem0tNC41LTlMMiA2djJoMTlWNmwtOS41LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJhbGFuY2Utd2FsbGV0PjxwYXRoIGQ9XFxcIk0yMSAxOHYxYzAgMS4xLS45IDItMiAySDVjLTEuMTEgMC0yLS45LTItMlY1YzAtMS4xLjg5LTIgMi0yaDE0YzEuMSAwIDIgLjkgMiAydjFoLTljLTEuMTEgMC0yIC45LTIgMnY4YzAgMS4xLjg5IDIgMiAyaDl6bS05LTJoMTBWOEgxMnY4em00LTIuNWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJveD48cGF0aCBkPVxcXCJNMyA1djE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJINWMtMS4xMSAwLTIgLjktMiAyem0xMiA0YzAgMS42Ni0xLjM0IDMtMyAzcy0zLTEuMzQtMy0zIDEuMzQtMyAzLTMgMyAxLjM0IDMgM3ptLTkgOGMwLTIgNC0zLjEgNi0zLjFzNiAxLjEgNiAzLjF2MUg2di0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjb3VudC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTAgMTQuMmMtMi41IDAtNC43MS0xLjI4LTYtMy4yMi4wMy0xLjk5IDQtMy4wOCA2LTMuMDggMS45OSAwIDUuOTcgMS4wOSA2IDMuMDgtMS4yOSAxLjk0LTMuNSAzLjIyLTYgMy4yMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZD48cGF0aCBkPVxcXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWFsZXJ0PjxwYXRoIGQ9XFxcIk0xMC4wMSAyMS4wMWMwIDEuMS44OSAxLjk5IDEuOTkgMS45OXMxLjk5LS44OSAxLjk5LTEuOTloLTMuOTh6bTguODctNC4xOVYxMWMwLTMuMjUtMi4yNS01Ljk3LTUuMjktNi42OXYtLjcyQzEzLjU5IDIuNzEgMTIuODggMiAxMiAycy0xLjU5LjcxLTEuNTkgMS41OXYuNzJDNy4zNyA1LjAzIDUuMTIgNy43NSA1LjEyIDExdjUuODJMMyAxOC45NFYyMGgxOHYtMS4wNmwtMi4xMi0yLjEyek0xNiAxMy4wMWgtM3YzaC0ydi0zSDhWMTFoM1Y4aDJ2M2gzdjIuMDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMiAxMGgtNHY0aC0ydi00SDd2LTJoNFY3aDJ2NGg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExaC00djRoLTJ2LTRIN3YtMmg0VjdoMnY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1jaXJjbGUtb3V0bGluZT48cGF0aCBkPVxcXCJNMTMgN2gtMnY0SDd2Mmg0djRoMnYtNGg0di0yaC00Vjd6bS0xLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTExIDloMlY2aDNWNGgtM1YxaC0ydjNIOHYyaDN2M3ptLTQgOWMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnptMTAgMGMtMS4xIDAtMS45OS45LTEuOTkgMnMuODkgMiAxLjk5IDIgMi0uOSAyLTItLjktMi0yLTJ6bS05LjgzLTMuMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy44Ni03LjAxTDE5LjQyIDRoLS4wMWwtMS4xIDItMi43NiA1SDguNTNsLS4xMy0uMjdMNi4xNiA2bC0uOTUtMi0uOTQtMkgxdjJoMmwzLjYgNy41OS0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoMTJ2LTJINy40MmMtLjEzIDAtLjI1LS4xMS0uMjUtLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0+PHBhdGggZD1cXFwiTTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTEyLjUgOEgxMXY2bDQuNzUgMi44NS43NS0xLjIzLTQtMi4zN1Y4ek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtLWFkZD48cGF0aCBkPVxcXCJNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMiA5IDkgOWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptMCAxNmMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6bTEtMTFoLTJ2M0g4djJoM3YzaDJ2LTNoM3YtMmgtM1Y5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tb2ZmPjxwYXRoIGQ9XFxcIk0xMiA2YzMuODcgMCA3IDMuMTMgNyA3IDAgLjg0LS4xNiAxLjY1LS40MyAyLjRsMS41MiAxLjUyYy41OC0xLjE5LjkxLTIuNTEuOTEtMy45MiAwLTQuOTctNC4wMy05LTktOS0xLjQxIDAtMi43My4zMy0zLjkyLjkxTDkuNiA2LjQzQzEwLjM1IDYuMTYgMTEuMTYgNiAxMiA2em0xMC0uMjhsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek0yLjkyIDIuMjlMMS42NSAzLjU3IDIuOTggNC45bC0xLjExLjkzIDEuNDIgMS40MiAxLjExLS45NC44LjhDMy44MyA4LjY5IDMgMTAuNzUgMyAxM2MwIDQuOTcgNC4wMiA5IDkgOSAyLjI1IDAgNC4zMS0uODMgNS44OS0yLjJsMi4yIDIuMiAxLjI3LTEuMjdMMy44OSAzLjI3bC0uOTctLjk4em0xMy41NSAxNi4xQzE1LjI2IDE5LjM5IDEzLjcgMjAgMTIgMjBjLTMuODcgMC03LTMuMTMtNy03IDAtMS43LjYxLTMuMjYgMS42MS00LjQ3bDkuODYgOS44NnpNOC4wMiAzLjI4TDYuNiAxLjg2bC0uODYuNzEgMS40MiAxLjQyLjg2LS43MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsYXJtLW9uPjxwYXRoIGQ9XFxcIk0yMiA1LjcybC00LjYtMy44Ni0xLjI5IDEuNTMgNC42IDMuODZMMjIgNS43MnpNNy44OCAzLjM5TDYuNiAxLjg2IDIgNS43MWwxLjI5IDEuNTMgNC41OS0zLjg1ek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3ptLTEuNDYtNS40N0w4LjQxIDEyLjRsLTEuMDYgMS4wNiAzLjE4IDMuMTggNi02LTEuMDYtMS4wNi00LjkzIDQuOTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGwtb3V0PjxwYXRoIGQ9XFxcIk0xNi4yMSA0LjE2bDQgNHYtNHptNCAxMmwtNCA0aDR6bS0xMiA0bC00LTR2NHptLTQtMTJsNC00aC00em0xMi45NS0uOTVjLTIuNzMtMi43My03LjE3LTIuNzMtOS45IDBzLTIuNzMgNy4xNyAwIDkuOSA3LjE3IDIuNzMgOS45IDAgMi43My03LjE2IDAtOS45em0tMS4xIDguOGMtMi4xMyAyLjEzLTUuNTcgMi4xMy03LjcgMHMtMi4xMy01LjU3IDAtNy43IDUuNTctMi4xMyA3LjcgMCAyLjEzIDUuNTcgMCA3Ljd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbmRyb2lkPjxwYXRoIGQ9XFxcIk02IDE4YzAgLjU1LjQ1IDEgMSAxaDF2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgydjMuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjVWMTloMWMuNTUgMCAxLS40NSAxLTFWOEg2djEwek0zLjUgOEMyLjY3IDggMiA4LjY3IDIgOS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVTNSAxNy4zMyA1IDE2LjV2LTdDNSA4LjY3IDQuMzMgOCAzLjUgOHptMTcgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjV2N2MwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjV2LTdjMC0uODMtLjY3LTEuNS0xLjUtMS41em0tNC45Ny01Ljg0bDEuMy0xLjNjLjItLjIuMi0uNTEgMC0uNzEtLjItLjItLjUxLS4yLS43MSAwbC0xLjQ4IDEuNDhDMTMuODUgMS4yMyAxMi45NSAxIDEyIDFjLS45NiAwLTEuODYuMjMtMi42Ni42M0w3Ljg1LjE1Yy0uMi0uMi0uNTEtLjItLjcxIDAtLjIuMi0uMi41MSAwIC43MWwxLjMxIDEuMzFDNi45NyAzLjI2IDYgNS4wMSA2IDdoMTJjMC0xLjk5LS45Ny0zLjc1LTIuNDctNC44NHpNMTAgNUg5VjRoMXYxem01IDBoLTFWNGgxdjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbm5vdW5jZW1lbnQ+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyA5aC0yVjVoMnY2em0wIDRoLTJ2LTJoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXBwcz48cGF0aCBkPVxcXCJNNCA4aDRWNEg0djR6bTYgMTJoNHYtNGgtNHY0em0tNiAwaDR2LTRINHY0em0wLTZoNHYtNEg0djR6bTYgMGg0di00aC00djR6bTYtMTB2NGg0VjRoLTR6bS02IDRoNFY0aC00djR6bTYgNmg0di00aC00djR6bTAgNmg0di00aC00djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcmNoaXZlPjxwYXRoIGQ9XFxcIk0yMC41NCA1LjIzbC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTYuNTVMMy40NiA1LjIzQzMuMTcgNS41NyAzIDYuMDIgMyA2LjVWMTljMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2LjVjMC0uNDgtLjE3LS45My0uNDYtMS4yN3pNMTIgMTcuNUw2LjUgMTJIMTB2LTJoNHYyaDMuNUwxMiAxNy41ek01LjEyIDVsLjgxLTFoMTJsLjk0IDFINS4xMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWJhY2s+PHBhdGggZD1cXFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kb3dud2FyZD48cGF0aCBkPVxcXCJNMjAgMTJsLTEuNDEtMS40MUwxMyAxNi4xN1Y0aC0ydjEyLjE3bC01LjU4LTUuNTlMNCAxMmw4IDggOC04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZHJvcC1kb3duPjxwYXRoIGQ9XFxcIk03IDEwbDUgNSA1LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLWRvd24tY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDEybC00LTRoOGwtNCA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZHJvcC11cD48cGF0aCBkPVxcXCJNNyAxNGw1LTUgNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctZm9yd2FyZD48cGF0aCBkPVxcXCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LXVwd2FyZD48cGF0aCBkPVxcXCJNNCAxMmwxLjQxIDEuNDFMMTEgNy44M1YyMGgyVjcuODNsNS41OCA1LjU5TDIwIDEybC04LTgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNwZWN0LXJhdGlvPjxwYXRoIGQ9XFxcIk0xOSAxMmgtMnYzaC0zdjJoNXYtNXpNNyA5aDNWN0g1djVoMlY5em0xNC02SDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3Nlc3NtZW50PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpNOSAxN0g3di03aDJ2N3ptNCAwaC0yVjdoMnYxMHptNCAwaC0ydi00aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQ+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0yIDE0SDd2LTJoN3Yyem0zLTRIN3YtMmgxMHYyem0wLTRIN1Y3aDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LWluZD48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTAgNGMxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTYgMTJINnYtMS40YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMVYxOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtbGF0ZT48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNiAxNWgtMnYtMmgydjJ6bTAtNGgtMlY4aDJ2NnptLTEtOWMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1yZXR1cm4+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem00IDEyaC00djNsLTUtNSA1LTV2M2g0djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXJldHVybmVkPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMCAxNWwtNS01aDNWOWg0djRoM2wtNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC10dXJuZWQtaW4+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0tMiAxNGwtNC00IDEuNDEtMS40MUwxMCAxNC4xN2w2LjU5LTYuNTlMMTggOWwtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXR0YWNobWVudD48cGF0aCBkPVxcXCJNMiAxMi41QzIgOS40NiA0LjQ2IDcgNy41IDdIMThjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDRIOS41QzguMTIgMTUgNyAxMy44OCA3IDEyLjVTOC4xMiAxMCA5LjUgMTBIMTd2Mkg5LjQxYy0uNTUgMC0uNTUgMSAwIDFIMThjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0ySDcuNUM1LjU3IDkgNCAxMC41NyA0IDEyLjVTNS41NyAxNiA3LjUgMTZIMTd2Mkg3LjVDNC40NiAxOCAyIDE1LjU0IDIgMTIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWF1dG9yZW5ldz48cGF0aCBkPVxcXCJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmFja3NwYWNlPjxwYXRoIGQ9XFxcIk0yMiAzSDdjLS42OSAwLTEuMjMuMzUtMS41OS44OEwwIDEybDUuNDEgOC4xMWMuMzYuNTMuOS44OSAxLjU5Ljg5aDE1YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0zIDEyLjU5TDE3LjU5IDE3IDE0IDEzLjQxIDEwLjQxIDE3IDkgMTUuNTkgMTIuNTkgMTIgOSA4LjQxIDEwLjQxIDcgMTQgMTAuNTkgMTcuNTkgNyAxOSA4LjQxIDE1LjQxIDEyIDE5IDE1LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmFja3VwPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE0IDEzdjRoLTR2LTRIN2w1LTUgNSA1aC0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YmxvY2s+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTQgMTJjMC00LjQyIDMuNTgtOCA4LTggMS44NSAwIDMuNTUuNjMgNC45IDEuNjlMNS42OSAxNi45QzQuNjMgMTUuNTUgNCAxMy44NSA0IDEyem04IDhjLTEuODUgMC0zLjU1LS42My00LjktMS42OUwxOC4zMSA3LjFDMTkuMzcgOC40NSAyMCAxMC4xNSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2s+PHBhdGggZD1cXFwiTTE4IDJINmMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek02IDRoNXY4bC0yLjUtMS41TDYgMTJWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2ttYXJrPjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ib29rbWFyay1ib3JkZXI+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnptMCAxNWwtNS0yLjE4TDcgMThWNWgxMHYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJ1Zy1yZXBvcnQ+PHBhdGggZD1cXFwiTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJ1aWxkPjxwYXRoIGQ9XFxcIk0yMi43IDE5bC05LjEtOS4xYy45LTIuMy40LTUtMS41LTYuOS0yLTItNS0yLjQtNy40LTEuM0w5IDYgNiA5IDEuNiA0LjdDLjQgNy4xLjkgMTAuMSAyLjkgMTIuMWMxLjkgMS45IDQuNiAyLjQgNi45IDEuNWw5LjEgOS4xYy40LjQgMSAuNCAxLjQgMGwyLjMtMi4zYy41LS40LjUtMS4xLjEtMS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FjaGVkPjxwYXRoIGQ9XFxcIk0xOSA4bC00IDRoM2MwIDMuMzEtMi42OSA2LTYgNi0xLjAxIDAtMS45Ny0uMjUtMi44LS43bC0xLjQ2IDEuNDZDOC45NyAxOS41NCAxMC40MyAyMCAxMiAyMGM0LjQyIDAgOC0zLjU4IDgtOGgzbC00LTR6TTYgMTJjMC0zLjMxIDIuNjktNiA2LTYgMS4wMSAwIDEuOTcuMjUgMi44LjdsMS40Ni0xLjQ2QzE1LjAzIDQuNDYgMTMuNTcgNCAxMiA0Yy00LjQyIDAtOCAzLjU4LTggOEgxbDQgNCA0LTRINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhbWVyYS1lbmhhbmNlPjxwYXRoIGQ9XFxcIk05IDNMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMmgtMy4xN0wxNSAzSDl6bTMgMTVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLTFsMS4yNS0yLjc1TDE2IDEzbC0yLjc1LTEuMjVMMTIgOWwtMS4yNSAyLjc1TDggMTNsMi43NSAxLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FuY2VsPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhcmQtZ2lmdGNhcmQ+PHBhdGggZD1cXFwiTTIwIDZoLTIuMThjLjExLS4zMS4xOC0uNjUuMTgtMSAwLTEuNjYtMS4zNC0zLTMtMy0xLjA1IDAtMS45Ni41NC0yLjUgMS4zNWwtLjUuNjctLjUtLjY4QzEwLjk2IDIuNTQgMTAuMDUgMiA5IDIgNy4zNCAyIDYgMy4zNCA2IDVjMCAuMzUuMDcuNjkuMTggMUg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS01LTJjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXpNOSA0Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTExIDE1SDR2LTJoMTZ2MnptMC01SDRWOGg1LjA4TDcgMTAuODMgOC42MiAxMiAxMSA4Ljc2bDEtMS4zNiAxIDEuMzZMMTUuMzggMTIgMTcgMTAuODMgMTQuOTIgOEgyMHY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FyZC1tZW1iZXJzaGlwPjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDR2NWw0LTIgNCAydi01aDRjMS4xMSAwIDItLjg5IDItMlY0YzAtMS4xMS0uODktMi0yLTJ6bTAgMTNINHYtMmgxNnYyem0wLTVINFY0aDE2djZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYXJkLXRyYXZlbD48cGF0aCBkPVxcXCJNMjAgNmgtM1Y0YzAtMS4xMS0uODktMi0yLTJIOWMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yek05IDRoNnYySDlWNHptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDN2MmgyVjhoNnYyaDJWOGgzdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGFuZ2UtaGlzdG9yeT48cGF0aCBkPVxcXCJNMTIgNy43N0wxOC4zOSAxOEg1LjYxTDEyIDcuNzdNMTIgNEwyIDIwaDIwTDEyIDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjaz48cGF0aCBkPVxcXCJNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjay1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTkgMTRsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrLWJveC1vdXRsaW5lLWJsYW5rPjxwYXRoIGQ9XFxcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2stY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hldnJvbi1sZWZ0PjxwYXRoIGQ9XFxcIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hldnJvbi1yaWdodD48cGF0aCBkPVxcXCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaHJvbWUtcmVhZGVyLW1vZGU+PHBhdGggZD1cXFwiTTEzIDEyaDd2MS41aC03em0wLTIuNWg3VjExaC03em0wIDVoN1YxNmgtN3pNMjEgNEgzYy0xLjEgMC0yIC45LTIgMnYxM2MwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTVoLTlWNmg5djEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xhc3M+PHBhdGggZD1cXFwiTTE4IDJINmMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yek02IDRoNXY4bC0yLjUtMS41TDYgMTJWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsZWFyPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG9zZT48cGF0aCBkPVxcXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNC41IDE0SDhjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTNsLjE0LjAxQzguNTggOC4yOCAxMC4xMyA3IDEyIDdjMi4yMSAwIDQgMS43OSA0IDRoLjVjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVTMTcuODggMTYgMTYuNSAxNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLWRvbmU+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTAgMTdsLTMuNS0zLjUgMS40MS0xLjQxTDEwIDE0LjE3IDE1LjE4IDlsMS40MSAxLjQxTDEwIDE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtZG93bmxvYWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTcgMTNsLTUgNS01LTVoM1Y5aDR2NGgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtb2ZmPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNGMtMS40OCAwLTIuODUuNDMtNC4wMSAxLjE3bDEuNDYgMS40NkMxMC4yMSA2LjIzIDExLjA4IDYgMTIgNmMzLjA0IDAgNS41IDIuNDYgNS41IDUuNXYuNUgxOWMxLjY2IDAgMyAxLjM0IDMgMyAwIDEuMTMtLjY0IDIuMTEtMS41NiAyLjYybDEuNDUgMS40NUMyMy4xNiAxOC4xNiAyNCAxNi42OCAyNCAxNWMwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMyA1LjI3bDIuNzUgMi43NEMyLjU2IDguMTUgMCAxMC43NyAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDExLjczbDIgMkwyMSAyMC43MyA0LjI3IDQgMyA1LjI3ek03LjczIDEwbDggOEg2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00aDEuNzN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1xdWV1ZT48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xOSAxOEg2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00aC43MUM3LjM3IDcuNjkgOS40OCA2IDEyIDZjMy4wNCAwIDUuNSAyLjQ2IDUuNSA1LjV2LjVIMTljMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC11cGxvYWQ+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb2RlPjxwYXRoIGQ9XFxcIk05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29tcGFyZS1hcnJvd3M+PHBhdGggZD1cXFwiTTkuMDEgMTRIMnYyaDcuMDF2M0wxMyAxNWwtMy45OS00djN6bTUuOTgtMXYtM0gyMlY4aC03LjAxVjVMMTEgOWwzLjk5IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb250ZW50LWNvcHk+PHBhdGggZD1cXFwiTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29udGVudC1jdXQ+PHBhdGggZD1cXFwiTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbnRlbnQtcGFzdGU+PHBhdGggZD1cXFwiTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvcHlyaWdodD48cGF0aCBkPVxcXCJNMTAuMDggMTAuODZjLjA1LS4zMy4xNi0uNjIuMy0uODdzLjM0LS40Ni41OS0uNjJjLjI0LS4xNS41NC0uMjIuOTEtLjIzLjIzLjAxLjQ0LjA1LjYzLjEzLjIuMDkuMzguMjEuNTIuMzZzLjI1LjMzLjM0LjUzLjEzLjQyLjE0LjY0aDEuNzljLS4wMi0uNDctLjExLS45LS4yOC0xLjI5cy0uNC0uNzMtLjctMS4wMS0uNjYtLjUtMS4wOC0uNjYtLjg4LS4yMy0xLjM5LS4yM2MtLjY1IDAtMS4yMi4xMS0xLjcuMzRzLS44OC41My0xLjIuOTItLjU2Ljg0LS43MSAxLjM2UzggMTEuMjkgOCAxMS44N3YuMjdjMCAuNTguMDggMS4xMi4yMyAxLjY0cy4zOS45Ny43MSAxLjM1LjcyLjY5IDEuMi45MSAxLjA1LjM0IDEuNy4zNGMuNDcgMCAuOTEtLjA4IDEuMzItLjIzcy43Ny0uMzYgMS4wOC0uNjMuNTYtLjU4Ljc0LS45NC4yOS0uNzQuMy0xLjE1aC0xLjc5Yy0uMDEuMjEtLjA2LjQtLjE1LjU4cy0uMjEuMzMtLjM2LjQ2LS4zMi4yMy0uNTIuM2MtLjE5LjA3LS4zOS4wOS0uNi4xLS4zNi0uMDEtLjY2LS4wOC0uODktLjIzLS4yNS0uMTYtLjQ1LS4zNy0uNTktLjYycy0uMjUtLjU1LS4zLS44OC0uMDgtLjY3LS4wOC0xdi0uMjdjMC0uMzUuMDMtLjY4LjA4LTEuMDF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y3JlYXRlPjxwYXRoIGQ9XFxcIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVhdGUtbmV3LWZvbGRlcj48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTEgOGgtM3YzaC0ydi0zaC0zdi0yaDNWOWgydjNoM3YyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y3JlZGl0LWNhcmQ+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRhc2hib2FyZD48cGF0aCBkPVxcXCJNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kYXRlLXJhbmdlPjxwYXRoIGQ9XFxcIk05IDExSDd2Mmgydi0yem00IDBoLTJ2Mmgydi0yem00IDBoLTJ2Mmgydi0yem0yLTdoLTFWMmgtMnYySDhWMkg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAyMGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOWgxNHYxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlbGV0ZT48cGF0aCBkPVxcXCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlLWZvcmV2ZXI+PHBhdGggZD1cXFwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnptMi40Ni03LjEybDEuNDEtMS40MUwxMiAxMi41OWwyLjEyLTIuMTIgMS40MSAxLjQxTDEzLjQxIDE0bDIuMTIgMi4xMi0xLjQxIDEuNDFMMTIgMTUuNDFsLTIuMTIgMi4xMi0xLjQxLTEuNDFMMTAuNTkgMTRsLTIuMTMtMi4xMnpNMTUuNSA0bC0xLTFoLTVsLTEgMUg1djJoMTRWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlbGV0ZS1zd2VlcD48cGF0aCBkPVxcXCJNMTUgMTZoNHYyaC00em0wLThoN3YyaC03em0wIDRoNnYyaC02ek0zIDE4YzAgMS4xLjkgMiAyIDJoNmMxLjEgMCAyLS45IDItMlY4SDN2MTB6TTE0IDVoLTNsLTEtMUg2TDUgNUgydjJoMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZXNjcmlwdGlvbj48cGF0aCBkPVxcXCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE2SDh2LTJoOHYyem0wLTRIOHYtMmg4djJ6bS0zLTVWMy41TDE4LjUgOUgxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRucz48cGF0aCBkPVxcXCJNMjAgMTNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xdi02YzAtLjU1LS40NS0xLTEtMXpNNyAxOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6TTIwIDNINGMtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xVjRjMC0uNTUtLjQ1LTEtMS0xek03IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9uZT48cGF0aCBkPVxcXCJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9uZS1hbGw+PHBhdGggZD1cXFwiTTE4IDdsLTEuNDEtMS40MS02LjM0IDYuMzQgMS40MSAxLjQxTDE4IDd6bTQuMjQtMS40MUwxMS42NiAxNi4xNyA3LjQ4IDEybC0xLjQxIDEuNDFMMTEuNjYgMTlsMTItMTItMS40Mi0xLjQxek0uNDEgMTMuNDFMNiAxOWwxLjQxLTEuNDFMMS44MyAxMiAuNDEgMTMuNDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb251dC1sYXJnZT48cGF0aCBkPVxcXCJNMTEgNS4wOFYyYy01IC41LTkgNC44MS05IDEwczQgOS41IDkgMTB2LTMuMDhjLTMtLjQ4LTYtMy40LTYtNi45MnMzLTYuNDQgNi02Ljkyek0xOC45NyAxMUgyMmMtLjQ3LTUtNC04LjUzLTktOXYzLjA4QzE2IDUuNTEgMTguNTQgOCAxOC45NyAxMXpNMTMgMTguOTJWMjJjNS0uNDcgOC41My00IDktOWgtMy4wM2MtLjQzIDMtMi45NyA1LjQ5LTUuOTcgNS45MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbnV0LXNtYWxsPjxwYXRoIGQ9XFxcIk0xMSA5LjE2VjJjLTUgLjUtOSA0Ljc5LTkgMTBzNCA5LjUgOSAxMHYtNy4xNmMtMS0uNDEtMi0xLjUyLTItMi44NHMxLTIuNDMgMi0yLjg0ek0xNC44NiAxMUgyMmMtLjQ4LTQuNzUtNC04LjUzLTktOXY3LjE2YzEgLjMgMS41Mi45OCAxLjg2IDEuODR6TTEzIDE0Ljg0VjIyYzUtLjQ3IDguNTItNC4yNSA5LTloLTcuMTRjLS4zNC44Ni0uODYgMS41NC0xLjg2IDEuODR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kcmFmdHM+PHBhdGggZD1cXFwiTTIxLjk5IDhjMC0uNzItLjM3LTEuMzUtLjk0LTEuN0wxMiAxIDIuOTUgNi4zQzIuMzggNi42NSAyIDcuMjggMiA4djEwYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJsLS4wMS0xMHpNMTIgMTNMMy43NCA3Ljg0IDEyIDNsOC4yNiA0Ljg0TDEyIDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZWplY3Q+PHBhdGggZD1cXFwiTTUgMTdoMTR2Mkg1em03LTEyTDUuMzMgMTVoMTMuMzR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1lcnJvcj48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVycm9yLW91dGxpbmU+PHBhdGggZD1cXFwiTTExIDE1aDJ2MmgtMnptMC04aDJ2NmgtMnptLjk5LTVDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV1cm8tc3ltYm9sPjxwYXRoIGQ9XFxcIk0xNSAxOC41Yy0yLjUxIDAtNC42OC0xLjQyLTUuNzYtMy41SDE1di0ySDguNThjLS4wNS0uMzMtLjA4LS42Ni0uMDgtMXMuMDMtLjY3LjA4LTFIMTVWOUg5LjI0QzEwLjMyIDYuOTIgMTIuNSA1LjUgMTUgNS41YzEuNjEgMCAzLjA5LjU5IDQuMjMgMS41N0wyMSA1LjNDMTkuNDEgMy44NyAxNy4zIDMgMTUgM2MtMy45MiAwLTcuMjQgMi41MS04LjQ4IDZIM3YyaDMuMDZjLS4wNC4zMy0uMDYuNjYtLjA2IDEgMCAuMzQuMDIuNjcuMDYgMUgzdjJoMy41MmMxLjI0IDMuNDkgNC41NiA2IDguNDggNiAyLjMxIDAgNC40MS0uODcgNi0yLjNsLTEuNzgtMS43N2MtMS4xMy45OC0yLjYgMS41Ny00LjIyIDEuNTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ldmVudD48cGF0aCBkPVxcXCJNMTcgMTJoLTV2NWg1di01ek0xNiAxdjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJoLTFWMWgtMnptMyAxOEg1VjhoMTR2MTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ldmVudC1zZWF0PjxwYXRoIGQ9XFxcIk00IDE4djNoM3YtM2gxMHYzaDN2LTZINHptMTUtOGgzdjNoLTN6TTIgMTBoM3YzSDJ6bTE1IDNIN1Y1YzAtMS4xLjktMiAyLTJoNmMxLjEgMCAyIC45IDIgMnY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhpdC10by1hcHA+PHBhdGggZD1cXFwiTTEwLjA5IDE1LjU5TDExLjUgMTdsNS01LTUtNS0xLjQxIDEuNDFMMTIuNjcgMTFIM3YyaDkuNjdsLTIuNTggMi41OXpNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2NGgyVjVoMTR2MTRINXYtNEgzdjRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGFuZC1sZXNzPjxwYXRoIGQ9XFxcIk0xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGFuZC1tb3JlPjxwYXRoIGQ9XFxcIk0xNi41OSA4LjU5TDEyIDEzLjE3IDcuNDEgOC41OSA2IDEwbDYgNiA2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHBsb3JlPjxwYXRoIGQ9XFxcIk0xMiAxMC45Yy0uNjEgMC0xLjEuNDktMS4xIDEuMXMuNDkgMS4xIDEuMSAxLjFjLjYxIDAgMS4xLS40OSAxLjEtMS4xcy0uNDktMS4xLTEuMS0xLjF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTIuMTkgMTIuMTlMNiAxOGwzLjgxLTguMTlMMTggNmwtMy44MSA4LjE5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXh0ZW5zaW9uPjxwYXRoIGQ9XFxcIk0yMC41IDExSDE5VjdjMC0xLjEtLjktMi0yLTJoLTRWMy41QzEzIDIuMTIgMTEuODggMSAxMC41IDFTOCAyLjEyIDggMy41VjVINGMtMS4xIDAtMS45OS45LTEuOTkgMnYzLjhIMy41YzEuNDkgMCAyLjcgMS4yMSAyLjcgMi43cy0xLjIxIDIuNy0yLjcgMi43SDJWMjBjMCAxLjEuOSAyIDIgMmgzLjh2LTEuNWMwLTEuNDkgMS4yMS0yLjcgMi43LTIuNyAxLjQ5IDAgMi43IDEuMjEgMi43IDIuN1YyMkgxN2MxLjEgMCAyLS45IDItMnYtNGgxLjVjMS4zOCAwIDIuNS0xLjEyIDIuNS0yLjVTMjEuODggMTEgMjAuNSAxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZhY2U+PHBhdGggZD1cXFwiTTkgMTEuNzVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1cy41NiAxLjI1IDEuMjUgMS4yNSAxLjI1LS41NiAxLjI1LTEuMjUtLjU2LTEuMjUtMS4yNS0xLjI1em02IDBjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1cy41NiAxLjI1IDEuMjUgMS4yNSAxLjI1LS41NiAxLjI1LTEuMjUtLjU2LTEuMjUtMS4yNS0xLjI1ek0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOCAwLS4yOS4wMi0uNTguMDUtLjg2IDIuMzYtMS4wNSA0LjIzLTIuOTggNS4yMS01LjM3QzExLjA3IDguMzMgMTQuMDUgMTAgMTcuNDIgMTBjLjc4IDAgMS41My0uMDkgMi4yNS0uMjYuMjEuNzEuMzMgMS40Ny4zMyAyLjI2IDAgNC40MS0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmF2b3JpdGU+PHBhdGggZD1cXFwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mYXZvcml0ZS1ib3JkZXI+PHBhdGggZD1cXFwiTTE2LjUgM2MtMS43NCAwLTMuNDEuODEtNC41IDIuMDlDMTAuOTEgMy44MSA5LjI0IDMgNy41IDMgNC40MiAzIDIgNS40MiAyIDguNWMwIDMuNzggMy40IDYuODYgOC41NSAxMS41NEwxMiAyMS4zNWwxLjQ1LTEuMzJDMTguNiAxNS4zNiAyMiAxMi4yOCAyMiA4LjUgMjIgNS40MiAxOS41OCAzIDE2LjUgM3ptLTQuNCAxNS41NWwtLjEuMS0uMS0uMUM3LjE0IDE0LjI0IDQgMTEuMzkgNCA4LjUgNCA2LjUgNS41IDUgNy41IDVjMS41NCAwIDMuMDQuOTkgMy41NyAyLjM2aDEuODdDMTMuNDYgNS45OSAxNC45NiA1IDE2LjUgNWMyIDAgMy41IDEuNSAzLjUgMy41IDAgMi44OS0zLjE0IDUuNzQtNy45IDEwLjA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmVlZGJhY2s+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDIybDQtNGgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyAxMmgtMnYtMmgydjJ6bTAtNGgtMlY2aDJ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbGUtZG93bmxvYWQ+PHBhdGggZD1cXFwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbGUtdXBsb2FkPjxwYXRoIGQ9XFxcIk05IDE2aDZ2LTZoNGwtNy03LTcgN2g0em0tNCAyaDE0djJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbHRlci1saXN0PjxwYXRoIGQ9XFxcIk0xMCAxOGg0di0yaC00djJ6TTMgNnYyaDE4VjZIM3ptMyA3aDEydi0ySDZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbmQtaW4tcGFnZT48cGF0aCBkPVxcXCJNMjAgMTkuNTlWOGwtNi02SDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMuNDUgMCAuODUtLjE1IDEuMTktLjRsLTQuNDMtNC40M2MtLjguNTItMS43NC44My0yLjc2LjgzLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNWMwIDEuMDItLjMxIDEuOTYtLjgzIDIuNzVMMjAgMTkuNTl6TTkgMTNjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtMy0xLjM0LTMtMy0zLTMgMS4zNC0zIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maW5kLXJlcGxhY2U+PHBhdGggZD1cXFwiTTExIDZjMS4zOCAwIDIuNjMuNTYgMy41NCAxLjQ2TDEyIDEwaDZWNGwtMi4wNSAyLjA1QzE0LjY4IDQuNzggMTIuOTMgNCAxMSA0Yy0zLjUzIDAtNi40MyAyLjYxLTYuOTIgNkg2LjFjLjQ2LTIuMjggMi40OC00IDQuOS00em01LjY0IDkuMTRjLjY2LS45IDEuMTItMS45NyAxLjI4LTMuMTRIMTUuOWMtLjQ2IDIuMjgtMi40OCA0LTQuOSA0LTEuMzggMC0yLjYzLS41Ni0zLjU0LTEuNDZMMTAgMTJINHY2bDIuMDUtMi4wNUM3LjMyIDE3LjIyIDkuMDcgMTggMTEgMThjMS41NSAwIDIuOTgtLjUxIDQuMTQtMS4zNkwyMCAyMS40OSAyMS40OSAyMGwtNC44NS00Ljg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmluZ2VycHJpbnQ+PHBhdGggZD1cXFwiTTE3LjgxIDQuNDdjLS4wOCAwLS4xNi0uMDItLjIzLS4wNkMxNS42NiAzLjQyIDE0IDMgMTIuMDEgM2MtMS45OCAwLTMuODYuNDctNS41NyAxLjQxLS4yNC4xMy0uNTQuMDQtLjY4LS4yLS4xMy0uMjQtLjA0LS41NS4yLS42OEM3LjgyIDIuNTIgOS44NiAyIDEyLjAxIDJjMi4xMyAwIDMuOTkuNDcgNi4wMyAxLjUyLjI1LjEzLjM0LjQzLjIxLjY3LS4wOS4xOC0uMjYuMjgtLjQ0LjI4ek0zLjUgOS43MmMtLjEgMC0uMi0uMDMtLjI5LS4wOS0uMjMtLjE2LS4yOC0uNDctLjEyLS43Ljk5LTEuNCAyLjI1LTIuNSAzLjc1LTMuMjdDOS45OCA0LjA0IDE0IDQuMDMgMTcuMTUgNS42NWMxLjUuNzcgMi43NiAxLjg2IDMuNzUgMy4yNS4xNi4yMi4xMS41NC0uMTIuNy0uMjMuMTYtLjU0LjExLS43LS4xMi0uOS0xLjI2LTIuMDQtMi4yNS0zLjM5LTIuOTQtMi44Ny0xLjQ3LTYuNTQtMS40Ny05LjQuMDEtMS4zNi43LTIuNSAxLjctMy40IDIuOTYtLjA4LjE0LS4yMy4yMS0uMzkuMjF6bTYuMjUgMTIuMDdjLS4xMyAwLS4yNi0uMDUtLjM1LS4xNS0uODctLjg3LTEuMzQtMS40My0yLjAxLTIuNjQtLjY5LTEuMjMtMS4wNS0yLjczLTEuMDUtNC4zNCAwLTIuOTcgMi41NC01LjM5IDUuNjYtNS4zOXM1LjY2IDIuNDIgNS42NiA1LjM5YzAgLjI4LS4yMi41LS41LjVzLS41LS4yMi0uNS0uNWMwLTIuNDItMi4wOS00LjM5LTQuNjYtNC4zOS0yLjU3IDAtNC42NiAxLjk3LTQuNjYgNC4zOSAwIDEuNDQuMzIgMi43Ny45MyAzLjg1LjY0IDEuMTUgMS4wOCAxLjY0IDEuODUgMi40Mi4xOS4yLjE5LjUxIDAgLjcxLS4xMS4xLS4yNC4xNS0uMzcuMTV6bTcuMTctMS44NWMtMS4xOSAwLTIuMjQtLjMtMy4xLS44OS0xLjQ5LTEuMDEtMi4zOC0yLjY1LTIuMzgtNC4zOSAwLS4yOC4yMi0uNS41LS41cy41LjIyLjUuNWMwIDEuNDEuNzIgMi43NCAxLjk0IDMuNTYuNzEuNDggMS41NC43MSAyLjU0LjcxLjI0IDAgLjY0LS4wMyAxLjA0LS4xLjI3LS4wNS41My4xMy41OC40MS4wNS4yNy0uMTMuNTMtLjQxLjU4LS41Ny4xMS0xLjA3LjEyLTEuMjEuMTJ6TTE0LjkxIDIyYy0uMDQgMC0uMDktLjAxLS4xMy0uMDItMS41OS0uNDQtMi42My0xLjAzLTMuNzItMi4xLTEuNC0xLjM5LTIuMTctMy4yNC0yLjE3LTUuMjIgMC0xLjYyIDEuMzgtMi45NCAzLjA4LTIuOTQgMS43IDAgMy4wOCAxLjMyIDMuMDggMi45NCAwIDEuMDcuOTMgMS45NCAyLjA4IDEuOTRzMi4wOC0uODcgMi4wOC0xLjk0YzAtMy43Ny0zLjI1LTYuODMtNy4yNS02LjgzLTIuODQgMC01LjQ0IDEuNTgtNi42MSA0LjAzLS4zOS44MS0uNTkgMS43Ni0uNTkgMi44IDAgLjc4LjA3IDIuMDEuNjcgMy42MS4xLjI2LS4wMy41NS0uMjkuNjQtLjI2LjEtLjU1LS4wNC0uNjQtLjI5LS40OS0xLjMxLS43My0yLjYxLS43My0zLjk2IDAtMS4yLjIzLTIuMjkuNjgtMy4yNCAxLjMzLTIuNzkgNC4yOC00LjYgNy41MS00LjYgNC41NSAwIDguMjUgMy41MSA4LjI1IDcuODMgMCAxLjYyLTEuMzggMi45NC0zLjA4IDIuOTRzLTMuMDgtMS4zMi0zLjA4LTIuOTRjMC0xLjA3LS45My0xLjk0LTIuMDgtMS45NHMtMi4wOC44Ny0yLjA4IDEuOTRjMCAxLjcxLjY2IDMuMzEgMS44NyA0LjUxLjk1Ljk0IDEuODYgMS40NiAzLjI3IDEuODUuMjcuMDcuNDIuMzUuMzUuNjEtLjA1LjIzLS4yNi4zOC0uNDcuMzh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maXJzdC1wYWdlPjxwYXRoIGQ9XFxcIk0xOC40MSAxNi41OUwxMy44MiAxMmw0LjU5LTQuNTlMMTcgNmwtNiA2IDYgNnpNNiA2aDJ2MTJINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsYWc+PHBhdGggZD1cXFwiTTE0LjQgNkwxNCA0SDV2MTdoMnYtN2g1LjZsLjQgMmg3VjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlnaHQtbGFuZD48cGF0aCBkPVxcXCJNMi41IDE5aDE5djJoLTE5em03LjE4LTUuNzNsNC4zNSAxLjE2IDUuMzEgMS40MmMuOC4yMSAxLjYyLS4yNiAxLjg0LTEuMDYuMjEtLjgtLjI2LTEuNjItMS4wNi0xLjg0bC01LjMxLTEuNDItMi43Ni05LjAyTDEwLjEyIDJ2OC4yOEw1LjE1IDguOTVsLS45My0yLjMyLTEuNDUtLjM5djUuMTdsMS42LjQzIDUuMzEgMS40M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaWdodC10YWtlb2ZmPjxwYXRoIGQ9XFxcIk0yLjUgMTloMTl2MmgtMTl6bTE5LjU3LTkuMzZjLS4yMS0uOC0xLjA0LTEuMjgtMS44NC0xLjA2TDE0LjkyIDEwbC02LjktNi40My0xLjkzLjUxIDQuMTQgNy4xNy00Ljk3IDEuMzMtMS45Ny0xLjU0LTEuNDUuMzkgMS44MiAzLjE2Ljc3IDEuMzMgMS42LS40MyA1LjMxLTEuNDIgNC4zNS0xLjE2TDIxIDExLjQ5Yy44MS0uMjMgMS4yOC0xLjA1IDEuMDctMS44NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaXAtdG8tYmFjaz48cGF0aCBkPVxcXCJNOSA3SDd2MmgyVjd6bTAgNEg3djJoMnYtMnptMC04Yy0xLjExIDAtMiAuOS0yIDJoMlYzem00IDEyaC0ydjJoMnYtMnptNi0xMnYyaDJjMC0xLjEtLjktMi0yLTJ6bS02IDBoLTJ2MmgyVjN6TTkgMTd2LTJIN2MwIDEuMS44OSAyIDIgMnptMTAtNGgydi0yaC0ydjJ6bTAtNGgyVjdoLTJ2MnptMCA4YzEuMSAwIDItLjkgMi0yaC0ydjJ6TTUgN0gzdjEyYzAgMS4xLjg5IDIgMiAyaDEydi0ySDVWN3ptMTAtMmgyVjNoLTJ2MnptMCAxMmgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlwLXRvLWZyb250PjxwYXRoIGQ9XFxcIk0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTIgNHYtMkgzYzAgMS4xLjg5IDIgMiAyek0zIDloMlY3SDN2MnptMTIgMTJoMnYtMmgtMnYyem00LTE4SDljLTEuMTEgMC0yIC45LTIgMnYxMGMwIDEuMS44OSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDEySDlWNWgxMHYxMHptLTggNmgydi0yaC0ydjJ6bS00IDBoMnYtMkg3djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb2xkZXI+PHBhdGggZD1cXFwiTTEwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMmgtOGwtMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9sZGVyLW9wZW4+PHBhdGggZD1cXFwiTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0wIDEySDRWOGgxNnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbGRlci1zaGFyZWQ+PHBhdGggZD1cXFwiTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yem0tNSAzYzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMi0yLS45LTItMiAuOS0yIDItMnptNCA4aC04di0xYzAtMS4zMyAyLjY3LTIgNC0yczQgLjY3IDQgMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9udC1kb3dubG9hZD48cGF0aCBkPVxcXCJNOS45MyAxMy41aDQuMTRMMTIgNy45OHpNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS00LjA1IDE2LjVsLTEuMTQtM0g5LjE3bC0xLjEyIDNINS45Nmw1LjExLTEzaDEuODZsNS4xMSAxM2gtMi4wOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvcndhcmQ+PHBhdGggZD1cXFwiTTEyIDhWNGw4IDgtOCA4di00SDRWOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZ1bGxzY3JlZW4+PHBhdGggZD1cXFwiTTcgMTRINXY1aDV2LTJIN3YtM3ptLTItNGgyVjdoM1Y1SDV2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTQgNXYyaDN2M2gyVjVoLTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mdWxsc2NyZWVuLWV4aXQ+PHBhdGggZD1cXFwiTTUgMTZoM3YzaDJ2LTVINXYyem0zLThINXYyaDVWNUg4djN6bTYgMTFoMnYtM2gzdi0yaC01djV6bTItMTFWNWgtMnY1aDVWOGgtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWctdHJhbnNsYXRlPjxwYXRoIGQ9XFxcIk0yMCA1aC05LjEyTDEwIDJINGMtMS4xIDAtMiAuOS0yIDJ2MTNjMCAxLjEuOSAyIDIgMmg3bDEgM2g4YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6TTcuMTcgMTQuNTljLTIuMjUgMC00LjA5LTEuODMtNC4wOS00LjA5czEuODMtNC4wOSA0LjA5LTQuMDljMS4wNCAwIDEuOTkuMzcgMi43NCAxLjA3bC4wNy4wNi0xLjIzIDEuMTgtLjA2LS4wNWMtLjI5LS4yNy0uNzgtLjU5LTEuNTItLjU5LTEuMzEgMC0yLjM4IDEuMDktMi4zOCAyLjQyczEuMDcgMi40MiAyLjM4IDIuNDJjMS4zNyAwIDEuOTYtLjg3IDIuMTItMS40Nkg3LjA4VjkuOTFoMy45NWwuMDEuMDdjLjA0LjIxLjA1LjQuMDUuNjEgMCAyLjM1LTEuNjEgNC0zLjkyIDR6bTYuMDMtMS43MWMuMzMuNi43NCAxLjE4IDEuMTkgMS43bC0uNTQuNTMtLjY1LTIuMjN6bS43Ny0uNzZoLS45OWwtLjMxLTEuMDRoMy45OXMtLjM0IDEuMzEtMS41NiAyLjc0Yy0uNTItLjYyLS44OS0xLjIzLTEuMTMtMS43ek0yMSAyMGMwIC41NS0uNDUgMS0xIDFoLTdsMi0yLS44MS0yLjc3LjkyLS45MkwxNy43OSAxOGwuNzMtLjczLTIuNzEtMi42OGMuOS0xLjAzIDEuNi0yLjI1IDEuOTItMy41MUgxOXYtMS4wNGgtMy42NFY5aC0xLjA0djEuMDRoLTEuOTZMMTEuMTggNkgyMGMuNTUgMCAxIC40NSAxIDF2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1nYXZlbD48cGF0aCBkPVxcXCJNMSAyMWgxMnYySDF6TTUuMjQ1IDguMDdsMi44My0yLjgyNyAxNC4xNCAxNC4xNDItMi44MjggMi44Mjh6TTEyLjMxNyAxbDUuNjU3IDUuNjU2LTIuODMgMi44My01LjY1NC01LjY2ek0zLjgyNSA5LjQ4NWw1LjY1NyA1LjY1Ny0yLjgyOCAyLjgyOC01LjY1Ny01LjY1N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdlc3R1cmU+PHBhdGggZD1cXFwiTTQuNTkgNi44OWMuNy0uNzEgMS40LTEuMzUgMS43MS0xLjIyLjUuMiAwIDEuMDMtLjMgMS41Mi0uMjUuNDItMi44NiAzLjg5LTIuODYgNi4zMSAwIDEuMjguNDggMi4zNCAxLjM0IDIuOTguNzUuNTYgMS43NC43MyAyLjY0LjQ2IDEuMDctLjMxIDEuOTUtMS40IDMuMDYtMi43NyAxLjIxLTEuNDkgMi44My0zLjQ0IDQuMDgtMy40NCAxLjYzIDAgMS42NSAxLjAxIDEuNzYgMS43OS0zLjc4LjY0LTUuMzggMy42Ny01LjM4IDUuMzcgMCAxLjcgMS40NCAzLjA5IDMuMjEgMy4wOSAxLjYzIDAgNC4yOS0xLjMzIDQuNjktNi4xSDIxdi0yLjVoLTIuNDdjLS4xNS0xLjY1LTEuMDktNC4yLTQuMDMtNC4yLTIuMjUgMC00LjE4IDEuOTEtNC45NCAyLjg0LS41OC43My0yLjA2IDIuNDgtMi4yOSAyLjcyLS4yNS4zLS42OC44NC0xLjExLjg0LS40NSAwLS43Mi0uODMtLjM2LTEuOTIuMzUtMS4wOSAxLjQtMi44NiAxLjg1LTMuNTIuNzgtMS4xNCAxLjMtMS45MiAxLjMtMy4yOEM4Ljk1IDMuNjkgNy4zMSAzIDYuNDQgMyA1LjEyIDMgMy45NyA0IDMuNzIgNC4yNWMtLjM2LjM2LS42Ni42Ni0uODguOTNsMS43NSAxLjcxem05LjI5IDExLjY2Yy0uMzEgMC0uNzQtLjI2LS43NC0uNzIgMC0uNi43My0yLjIgMi44Ny0yLjc2LS4zIDIuNjktMS40MyAzLjQ4LTIuMTMgMy40OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdldC1hcHA+PHBhdGggZD1cXFwiTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdpZj48cGF0aCBkPVxcXCJNMTEuNSA5SDEzdjZoLTEuNXpNOSA5SDZjLS42IDAtMSAuNS0xIDF2NGMwIC41LjQgMSAxIDFoM2MuNiAwIDEtLjUgMS0xdi0ySDguNXYxLjVoLTJ2LTNIMTBWMTBjMC0uNS0uNC0xLTEtMXptMTAgMS41VjloLTQuNXY2SDE2di0yaDJ2LTEuNWgtMnYtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdyYWRlPjxwYXRoIGQ9XFxcIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdyb3VwLXdvcms+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTggMTcuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6TTkuNSA4YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41czIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNVM5LjUgOS4zOCA5LjUgOHptNi41IDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1oZWxwPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE3aC0ydi0yaDJ2MnptMi4wNy03Ljc1bC0uOS45MkMxMy40NSAxMi45IDEzIDEzLjUgMTMgMTVoLTJ2LS41YzAtMS4xLjQ1LTIuMSAxLjE3LTIuODNsMS4yNC0xLjI2Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAySDhjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIC44OC0uMzYgMS42OC0uOTMgMi4yNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhlbHAtb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMThoMnYtMmgtMnYyem0xLTE2QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMC0xNGMtMi4yMSAwLTQgMS43OS00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNSAwLTIuMjEtMS43OS00LTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhpZ2hsaWdodC1vZmY+PHBhdGggZD1cXFwiTTE0LjU5IDhMMTIgMTAuNTkgOS40MSA4IDggOS40MSAxMC41OSAxMiA4IDE0LjU5IDkuNDEgMTYgMTIgMTMuNDEgMTQuNTkgMTYgMTYgMTQuNTkgMTMuNDEgMTIgMTYgOS40MSAxNC41OSA4ek0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhpc3Rvcnk+PHBhdGggZD1cXFwiTTEzIDNjLTQuOTcgMC05IDQuMDMtOSA5SDFsMy44OSAzLjg5LjA3LjE0TDkgMTJINmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3LTMuMTMgNy03IDdjLTEuOTMgMC0zLjY4LS43OS00Ljk0LTIuMDZsLTEuNDIgMS40MkM4LjI3IDE5Ljk5IDEwLjUxIDIxIDEzIDIxYzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0tMSA1djVsNC4yOCAyLjU0LjcyLTEuMjEtMy41LTIuMDhWOEgxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvbWU+PHBhdGggZD1cXFwiTTEwIDIwdi02aDR2Nmg1di04aDNMMTIgMyAyIDEyaDN2OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvdXJnbGFzcy1lbXB0eT48cGF0aCBkPVxcXCJNNiAydjZoLjAxTDYgOC4wMSAxMCAxMmwtNCA0IC4wMS4wMUg2VjIyaDEydi01Ljk5aC0uMDFMMTggMTZsLTQtNCA0LTMuOTktLjAxLS4wMUgxOFYySDZ6bTEwIDE0LjVWMjBIOHYtMy41bDQtNCA0IDR6bS00LTVsLTQtNFY0aDh2My41bC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob3VyZ2xhc3MtZnVsbD48cGF0aCBkPVxcXCJNNiAydjZoLjAxTDYgOC4wMSAxMCAxMmwtNCA0IC4wMS4wMUg2VjIyaDEydi01Ljk5aC0uMDFMMTggMTZsLTQtNCA0LTMuOTktLjAxLS4wMUgxOFYySDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1odHRwPjxwYXRoIGQ9XFxcIk00LjUgMTFoLTJWOUgxdjZoMS41di0yLjVoMlYxNUg2VjlINC41djJ6bTIuNS0uNWgxLjVWMTVIMTB2LTQuNWgxLjVWOUg3djEuNXptNS41IDBIMTRWMTVoMS41di00LjVIMTdWOWgtNC41djEuNXptOS0xLjVIMTh2NmgxLjV2LTJoMmMuOCAwIDEuNS0uNyAxLjUtMS41di0xYzAtLjgtLjctMS41LTEuNS0xLjV6bTAgMi41aC0ydi0xaDJ2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWh0dHBzPjxwYXRoIGQ9XFxcIk0xOCA4aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bS02IDljLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyem0zLjEtOUg4LjlWNmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW1wb3J0YW50LWRldmljZXM+PHBhdGggZD1cXFwiTTIzIDExLjAxTDE4IDExYy0uNTUgMC0xIC40NS0xIDF2OWMwIC41NS40NSAxIDEgMWg1Yy41NSAwIDEtLjQ1IDEtMXYtOWMwLS41NS0uNDUtLjk5LTEtLjk5ek0yMyAyMGgtNXYtN2g1djd6TTIwIDJIMkMuODkgMiAwIDIuODkgMCA0djEyYzAgMS4xLjg5IDIgMiAyaDd2Mkg3djJoOHYtMmgtMnYtMmgydi0ySDJWNGgxOHY1aDJWNGMwLTEuMTEtLjktMi0yLTJ6bS04LjAzIDdMMTEgNmwtLjk3IDNIN2wyLjQ3IDEuNzYtLjk0IDIuOTEgMi40Ny0xLjggMi40NyAxLjgtLjk0LTIuOTFMMTUgOWgtMy4wM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDQuOTljLTEuMTEgMC0xLjk4Ljg5LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjExLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluZGV0ZXJtaW5hdGUtY2hlY2stYm94PjxwYXRoIGQ9XFxcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTIgMTBIN3YtMmgxMHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5mbz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWluZm8tb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMTdoMnYtNmgtMnY2em0xLTE1QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHpNMTEgOWgyVjdoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWlucHV0PjxwYXRoIGQ9XFxcIk0yMSAzLjAxSDNjLTEuMSAwLTIgLjktMiAyVjloMlY0Ljk5aDE4djE0LjAzSDNWMTVIMXY0LjAxYzAgMS4xLjkgMS45OCAyIDEuOThoMThjMS4xIDAgMi0uODggMi0xLjk4di0xNGMwLTEuMTEtLjktMi0yLTJ6TTExIDE2bDQtNC00LTR2M0gxdjJoMTB2M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWludmVydC1jb2xvcnM+PHBhdGggZD1cXFwiTTE3LjY2IDcuOTNMMTIgMi4yNyA2LjM0IDcuOTNjLTMuMTIgMy4xMi0zLjEyIDguMTkgMCAxMS4zMUM3LjkgMjAuOCA5Ljk1IDIxLjU4IDEyIDIxLjU4YzIuMDUgMCA0LjEtLjc4IDUuNjYtMi4zNCAzLjEyLTMuMTIgMy4xMi04LjE5IDAtMTEuMzF6TTEyIDE5LjU5Yy0xLjYgMC0zLjExLS42Mi00LjI0LTEuNzZDNi42MiAxNi42OSA2IDE1LjE5IDYgMTMuNTlzLjYyLTMuMTEgMS43Ni00LjI0TDEyIDUuMXYxNC40OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhYmVsPjxwYXRoIGQ9XFxcIk0xNy42MyA1Ljg0QzE3LjI3IDUuMzMgMTYuNjcgNSAxNiA1TDUgNS4wMUMzLjkgNS4wMSAzIDUuOSAzIDd2MTBjMCAxLjEuOSAxLjk5IDIgMS45OUwxNiAxOWMuNjcgMCAxLjI3LS4zMyAxLjYzLS44NEwyMiAxMmwtNC4zNy02LjE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFiZWwtb3V0bGluZT48cGF0aCBkPVxcXCJNMTcuNjMgNS44NEMxNy4yNyA1LjMzIDE2LjY3IDUgMTYgNUw1IDUuMDFDMy45IDUuMDEgMyA1LjkgMyA3djEwYzAgMS4xLjkgMS45OSAyIDEuOTlMMTYgMTljLjY3IDAgMS4yNy0uMzMgMS42My0uODRMMjIgMTJsLTQuMzctNi4xNnpNMTYgMTdINVY3aDExbDMuNTUgNUwxNiAxN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhbmd1YWdlPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem02LjkzIDZoLTIuOTVjLS4zMi0xLjI1LS43OC0yLjQ1LTEuMzgtMy41NiAxLjg0LjYzIDMuMzcgMS45MSA0LjMzIDMuNTZ6TTEyIDQuMDRjLjgzIDEuMiAxLjQ4IDIuNTMgMS45MSAzLjk2aC0zLjgyYy40My0xLjQzIDEuMDgtMi43NiAxLjkxLTMuOTZ6TTQuMjYgMTRDNC4xIDEzLjM2IDQgMTIuNjkgNCAxMnMuMS0xLjM2LjI2LTJoMy4zOGMtLjA4LjY2LS4xNCAxLjMyLS4xNCAyIDAgLjY4LjA2IDEuMzQuMTQgMkg0LjI2em0uODIgMmgyLjk1Yy4zMiAxLjI1Ljc4IDIuNDUgMS4zOCAzLjU2LTEuODQtLjYzLTMuMzctMS45LTQuMzMtMy41NnptMi45NS04SDUuMDhjLjk2LTEuNjYgMi40OS0yLjkzIDQuMzMtMy41NkM4LjgxIDUuNTUgOC4zNSA2Ljc1IDguMDMgOHpNMTIgMTkuOTZjLS44My0xLjItMS40OC0yLjUzLTEuOTEtMy45NmgzLjgyYy0uNDMgMS40My0xLjA4IDIuNzYtMS45MSAzLjk2ek0xNC4zNCAxNEg5LjY2Yy0uMDktLjY2LS4xNi0xLjMyLS4xNi0yIDAtLjY4LjA3LTEuMzUuMTYtMmg0LjY4Yy4wOS42NS4xNiAxLjMyLjE2IDIgMCAuNjgtLjA3IDEuMzQtLjE2IDJ6bS4yNSA1LjU2Yy42LTEuMTEgMS4wNi0yLjMxIDEuMzgtMy41NmgyLjk1Yy0uOTYgMS42NS0yLjQ5IDIuOTMtNC4zMyAzLjU2ek0xNi4zNiAxNGMuMDgtLjY2LjE0LTEuMzIuMTQtMiAwLS42OC0uMDYtMS4zNC0uMTQtMmgzLjM4Yy4xNi42NC4yNiAxLjMxLjI2IDJzLS4xIDEuMzYtLjI2IDJoLTMuMzh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYXN0LXBhZ2U+PHBhdGggZD1cXFwiTTUuNTkgNy40MUwxMC4xOCAxMmwtNC41OSA0LjU5TDcgMThsNi02LTYtNnpNMTYgNmgydjEyaC0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGF1bmNoPjxwYXRoIGQ9XFxcIk0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpZ2h0YnVsYi1vdXRsaW5lPjxwYXRoIGQ9XFxcIk05IDIxYzAgLjU1LjQ1IDEgMSAxaDRjLjU1IDAgMS0uNDUgMS0xdi0xSDl2MXptMy0xOUM4LjE0IDIgNSA1LjE0IDUgOWMwIDIuMzggMS4xOSA0LjQ3IDMgNS43NFYxN2MwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMXYtMi4yNmMxLjgxLTEuMjcgMy0zLjM2IDMtNS43NCAwLTMuODYtMy4xNC03LTctN3ptMi44NSAxMS4xbC0uODUuNlYxNmgtNHYtMi4zbC0uODUtLjZDNy44IDEyLjE2IDcgMTAuNjMgNyA5YzAtMi43NiAyLjI0LTUgNS01czUgMi4yNCA1IDVjMCAxLjYzLS44IDMuMTYtMi4xNSA0LjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5lLXN0eWxlPjxwYXRoIGQ9XFxcIk0zIDE2aDV2LTJIM3Yyem02LjUgMGg1di0yaC01djJ6bTYuNSAwaDV2LTJoLTV2MnpNMyAyMGgydi0ySDN2MnptNCAwaDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyek0zIDEyaDh2LTJIM3Yyem0xMCAwaDh2LTJoLTh2MnpNMyA0djRoMThWNEgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGluZS13ZWlnaHQ+PHBhdGggZD1cXFwiTTMgMTdoMTh2LTJIM3Yyem0wIDNoMTh2LTFIM3Yxem0wLTdoMTh2LTNIM3Yzem0wLTl2NGgxOFY0SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5rPjxwYXRoIGQ9XFxcIk0zLjkgMTJjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFoNFY3SDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDVoNHYtMS45SDdjLTEuNzEgMC0zLjEtMS4zOS0zLjEtMy4xek04IDEzaDh2LTJIOHYyem05LTZoLTR2MS45aDRjMS43MSAwIDMuMSAxLjM5IDMuMSAzLjFzLTEuMzkgMy4xLTMuMSAzLjFoLTRWMTdoNGMyLjc2IDAgNS0yLjI0IDUtNXMtMi4yNC01LTUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpc3Q+PHBhdGggZD1cXFwiTTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMC04aDJWN0gzdjJ6bTQgNGgxNHYtMkg3djJ6bTAgNGgxNHYtMkg3djJ6TTcgN3YyaDE0VjdIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2s+PHBhdGggZD1cXFwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptLTYgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTMuMS05SDguOVY2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NrLW9wZW4+PHBhdGggZD1cXFwiTTEyIDE3YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNi05aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNmgxLjljMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0wIDEySDZWMTBoMTJ2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NrLW91dGxpbmU+PHBhdGggZD1cXFwiTTEyIDE3YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNi05aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6TTguOSA2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xczMuMSAxLjM5IDMuMSAzLjF2Mkg4LjlWNnpNMTggMjBINlYxMGgxMnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvdy1wcmlvcml0eT48cGF0aCBkPVxcXCJNMTQgNWg4djJoLTh6bTAgNS41aDh2MmgtOHptMCA1LjVoOHYyaC04ek0yIDExLjVDMiAxNS4wOCA0LjkyIDE4IDguNSAxOEg5djJsMy0zLTMtM3YyaC0uNUM2LjAyIDE2IDQgMTMuOTggNCAxMS41UzYuMDIgNyA4LjUgN0gxMlY1SDguNUM0LjkyIDUgMiA3LjkyIDIgMTEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxveWFsdHk+PHBhdGggZD1cXFwiTTIxLjQxIDExLjU4bC05LTlDMTIuMDUgMi4yMiAxMS41NSAyIDExIDJINGMtMS4xIDAtMiAuOS0yIDJ2N2MwIC41NS4yMiAxLjA1LjU5IDEuNDJsOSA5Yy4zNi4zNi44Ni41OCAxLjQxLjU4LjU1IDAgMS4wNS0uMjIgMS40MS0uNTlsNy03Yy4zNy0uMzYuNTktLjg2LjU5LTEuNDEgMC0uNTUtLjIzLTEuMDYtLjU5LTEuNDJ6TTUuNSA3QzQuNjcgNyA0IDYuMzMgNCA1LjVTNC42NyA0IDUuNSA0IDcgNC42NyA3IDUuNSA2LjMzIDcgNS41IDd6bTExLjc3IDguMjdMMTMgMTkuNTRsLTQuMjctNC4yN0M4LjI4IDE0LjgxIDggMTQuMTkgOCAxMy41YzAtMS4zOCAxLjEyLTIuNSAyLjUtMi41LjY5IDAgMS4zMi4yOCAxLjc3Ljc0bC43My43Mi43My0uNzNjLjQ1LS40NSAxLjA4LS43MyAxLjc3LS43MyAxLjM4IDAgMi41IDEuMTIgMi41IDIuNSAwIC42OS0uMjggMS4zMi0uNzMgMS43N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1haWw+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWFya3VucmVhZD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXJrdW5yZWFkLW1haWxib3g+PHBhdGggZD1cXFwiTTIwIDZIMTB2Nkg4VjRoNlYwSDZ2Nkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tZW51PjxwYXRoIGQ9XFxcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW9yZS1ob3Jpej48cGF0aCBkPVxcXCJNNiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTEyIDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0tNiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vcmUtdmVydD48cGF0aCBkPVxcXCJNMTIgOGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6bTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3RvcmN5Y2xlPjxwYXRoIGQ9XFxcIk0xOS40NCA5LjAzTDE1LjQxIDVIMTF2MmgzLjU5bDIgMkg1Yy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1YzIuNDYgMCA0LjQ1LTEuNjkgNC45LTRoMS42NWwyLjc3LTIuNzdjLS4yMS41NC0uMzIgMS4xNC0uMzIgMS43NyAwIDIuOCAyLjIgNSA1IDVzNS0yLjIgNS01YzAtMi42NS0xLjk3LTQuNzctNC41Ni00Ljk3ek03LjgyIDE1QzcuNCAxNi4xNSA2LjI4IDE3IDUgMTdjLTEuNjMgMC0zLTEuMzctMy0zczEuMzctMyAzLTNjMS4yOCAwIDIuNC44NSAyLjgyIDJINXYyaDIuODJ6TTE5IDE3Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vdmUtdG8taW5ib3g+PHBhdGggZD1cXFwiTTE5IDNINC45OWMtMS4xMSAwLTEuOTguOS0xLjk4IDJMMyAxOWMwIDEuMS44OCAyIDEuOTkgMkgxOWMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHptLTMtNWgtMlY3aC00djNIOGw0IDQgNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bmV4dC13ZWVrPjxwYXRoIGQ9XFxcIk0yMCA3aC00VjVjMC0uNTUtLjIyLTEuMDUtLjU5LTEuNDFDMTUuMDUgMy4yMiAxNC41NSAzIDE0IDNoLTRjLTEuMSAwLTIgLjktMiAydjJINGMtMS4xIDAtMiAuOS0yIDJ2MTFjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY5YzAtMS4xLS45LTItMi0yek0xMCA1aDR2MmgtNFY1em0xIDEzLjVsLTEtMSAzLTMtMy0zIDEtMSA0IDQtNCA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bm90ZS1hZGQ+PHBhdGggZD1cXFwiTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4YzEuMSAwIDItLjkgMi0yVjhsLTYtNnptMiAxNGgtM3YzaC0ydi0zSDh2LTJoM3YtM2gydjNoM3Yyem0tMy03VjMuNUwxOC41IDlIMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vZmZsaW5lLXBpbj48cGF0aCBkPVxcXCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6bTUgMTZIN3YtMmgxMHYyem0tNi43LTRMNyAxMC43bDEuNC0xLjQgMS45IDEuOSA1LjMtNS4zTDE3IDcuMyAxMC4zIDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3BhY2l0eT48cGF0aCBkPVxcXCJNMTcuNjYgOEwxMiAyLjM1IDYuMzQgOEM0Ljc4IDkuNTYgNCAxMS42NCA0IDEzLjY0cy43OCA0LjExIDIuMzQgNS42NyAzLjYxIDIuMzUgNS42NiAyLjM1IDQuMS0uNzkgNS42Ni0yLjM1UzIwIDE1LjY0IDIwIDEzLjY0IDE5LjIyIDkuNTYgMTcuNjYgOHpNNiAxNGMuMDEtMiAuNjItMy4yNyAxLjc2LTQuNEwxMiA1LjI3bDQuMjQgNC4zOEMxNy4zOCAxMC43NyAxNy45OSAxMiAxOCAxNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9b3Blbi1pbi1icm93c2VyPjxwYXRoIGQ9XFxcIk0xOSA0SDVjLTEuMTEgMC0yIC45LTIgMnYxMmMwIDEuMS44OSAyIDIgMmg0di0ySDVWOGgxNHYxMGgtNHYyaDRjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uODktMi0yLTJ6bS03IDZsLTQgNGgzdjZoMnYtNmgzbC00LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLWluLW5ldz48cGF0aCBkPVxcXCJNMTkgMTlINVY1aDdWM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJ2N3pNMTQgM3YyaDMuNTlsLTkuODMgOS44MyAxLjQxIDEuNDFMMTkgNi40MVYxMGgyVjNoLTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLXdpdGg+PHBhdGggZD1cXFwiTTEwIDloNFY2aDNsLTUtNS01IDVoM3Yzem0tMSAxSDZWN2wtNSA1IDUgNXYtM2gzdi00em0xNCAybC01LTV2M2gtM3Y0aDN2M2w1LTV6bS05IDNoLTR2M0g3bDUgNSA1LTVoLTN2LTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wYWdldmlldz48cGF0aCBkPVxcXCJNMTEuNSA5QzEwLjEyIDkgOSAxMC4xMiA5IDExLjVzMS4xMiAyLjUgMi41IDIuNSAyLjUtMS4xMiAyLjUtMi41UzEyLjg4IDkgMTEuNSA5ek0yMCA0SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptLTMuMjEgMTQuMjFsLTIuOTEtMi45MWMtLjY5LjQ0LTEuNTEuNy0yLjM5LjdDOS4wMSAxNiA3IDEzLjk5IDcgMTEuNVM5LjAxIDcgMTEuNSA3IDE2IDkuMDEgMTYgMTEuNWMwIC44OC0uMjYgMS42OS0uNyAyLjM5bDIuOTEgMi45LTEuNDIgMS40MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBhbi10b29sPjxwYXRoIGQ9XFxcIk0yMyA1LjVWMjBjMCAyLjItMS44IDQtNCA0aC03LjNjLTEuMDggMC0yLjEtLjQzLTIuODUtMS4xOUwxIDE0LjgzczEuMjYtMS4yMyAxLjMtMS4yNWMuMjItLjE5LjQ5LS4yOS43OS0uMjkuMjIgMCAuNDIuMDYuNi4xNi4wNC4wMSA0LjMxIDIuNDYgNC4zMSAyLjQ2VjRjMC0uODMuNjctMS41IDEuNS0xLjVTMTEgMy4xNyAxMSA0djdoMVYxLjVjMC0uODMuNjctMS41IDEuNS0xLjVTMTUgLjY3IDE1IDEuNVYxMWgxVjIuNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNVYxMWgxVjUuNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBheW1lbnQ+PHBhdGggZD1cXFwiTTIwIDRINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmMwLTEuMTEtLjg5LTItMi0yem0wIDE0SDR2LTZoMTZ2NnptMC0xMEg0VjZoMTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tY2FtZXJhLW1pYz48cGF0aCBkPVxcXCJNMjAgNWgtMy4xN0wxNSAzSDlMNy4xNyA1SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YtMi4wOWMtMi44My0uNDgtNS0yLjk0LTUtNS45MWgyYzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTRoMmMwIDIuOTctMi4xNyA1LjQzLTUgNS45MVYyMWg3YzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bS02IDhjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yVjljMC0xLjEuOS0yIDItMnMyIC45IDIgMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1jb250YWN0LWNhbGVuZGFyPjxwYXRoIGQ9XFxcIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptNiAxMkg2di0xYzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1kYXRhLXNldHRpbmc+PHBhdGggZD1cXFwiTTE4Ljk5IDExLjVjLjM0IDAgLjY3LjAzIDEgLjA3TDIwIDAgMCAyMGgxMS41NmMtLjA0LS4zMy0uMDctLjY2LS4wNy0xIDAtNC4xNCAzLjM2LTcuNSA3LjUtNy41em0zLjcxIDcuOTljLjAyLS4xNi4wNC0uMzIuMDQtLjQ5IDAtLjE3LS4wMS0uMzMtLjA0LS40OWwxLjA2LS44M2MuMDktLjA4LjEyLS4yMS4wNi0uMzJsLTEtMS43M2MtLjA2LS4xMS0uMTktLjE1LS4zMS0uMTFsLTEuMjQuNWMtLjI2LS4yLS41NC0uMzctLjg1LS40OWwtLjE5LTEuMzJjLS4wMS0uMTItLjEyLS4yMS0uMjQtLjIxaC0yYy0uMTIgMC0uMjMuMDktLjI1LjIxbC0uMTkgMS4zMmMtLjMuMTMtLjU5LjI5LS44NS40OWwtMS4yNC0uNWMtLjExLS4wNC0uMjQgMC0uMzEuMTFsLTEgMS43M2MtLjA2LjExLS4wNC4yNC4wNi4zMmwxLjA2LjgzYy0uMDIuMTYtLjAzLjMyLS4wMy40OSAwIC4xNy4wMS4zMy4wMy40OWwtMS4wNi44M2MtLjA5LjA4LS4xMi4yMS0uMDYuMzJsMSAxLjczYy4wNi4xMS4xOS4xNS4zMS4xMWwxLjI0LS41Yy4yNi4yLjU0LjM3Ljg1LjQ5bC4xOSAxLjMyYy4wMi4xMi4xMi4yMS4yNS4yMWgyYy4xMiAwIC4yMy0uMDkuMjUtLjIxbC4xOS0xLjMyYy4zLS4xMy41OS0uMjkuODQtLjQ5bDEuMjUuNWMuMTEuMDQuMjQgMCAuMzEtLjExbDEtMS43M2MuMDYtLjExLjAzLS4yNC0uMDYtLjMybC0xLjA3LS44M3ptLTMuNzEgMS4wMWMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWRldmljZS1pbmZvcm1hdGlvbj48cGF0aCBkPVxcXCJNMTMgN2gtMnYyaDJWN3ptMCA0aC0ydjZoMnYtNnptNC05Ljk5TDcgMWMtMS4xIDAtMiAuOS0yIDJ2MThjMCAxLjEuOSAyIDIgMmgxMGMxLjEgMCAyLS45IDItMlYzYzAtMS4xLS45LTEuOTktMi0xLjk5ek0xNyAxOUg3VjVoMTB2MTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWlkZW50aXR5PjxwYXRoIGQ9XFxcIk0xMiA1LjljMS4xNiAwIDIuMS45NCAyLjEgMi4xcy0uOTQgMi4xLTIuMSAyLjFTOS45IDkuMTYgOS45IDhzLjk0LTIuMSAyLjEtMi4xbTAgOWMyLjk3IDAgNi4xIDEuNDYgNi4xIDIuMXYxLjFINS45VjE3YzAtLjY0IDMuMTMtMi4xIDYuMS0yLjFNMTIgNEM5Ljc5IDQgOCA1Ljc5IDggOHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCA5Yy0yLjY3IDAtOCAxLjM0LTggNHYzaDE2di0zYzAtMi42Ni01LjMzLTQtOC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1tZWRpYT48cGF0aCBkPVxcXCJNMiA2SDB2NWguMDFMMCAyMGMwIDEuMS45IDIgMiAyaDE4di0ySDJWNnptMjAtMmgtOGwtMi0ySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6TTcgMTVsNC41LTYgMy41IDQuNTEgMi41LTMuMDFMMjEgMTVIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tcGhvbmUtbXNnPjxwYXRoIGQ9XFxcIk0yMCAxNS41Yy0xLjI1IDAtMi40NS0uMi0zLjU3LS41Ny0uMzUtLjExLS43NC0uMDMtMS4wMi4yNGwtMi4yIDIuMmMtMi44My0xLjQ0LTUuMTUtMy43NS02LjU5LTYuNThsMi4yLTIuMjFjLjI4LS4yNy4zNi0uNjYuMjUtMS4wMUM4LjcgNi40NSA4LjUgNS4yNSA4LjUgNGMwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIDAgOS4zOSA3LjYxIDE3IDE3IDE3IC41NSAwIDEtLjQ1IDEtMXYtMy41YzAtLjU1LS40NS0xLTEtMXpNMTIgM3YxMGwzLTNoNlYzaC05elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1zY2FuLXdpZmk+PHBhdGggZD1cXFwiTTEyIDNDNi45NSAzIDMuMTUgNC44NSAwIDcuMjNMMTIgMjIgMjQgNy4yNUMyMC44NSA0Ljg3IDE3LjA1IDMgMTIgM3ptMSAxM2gtMnYtNmgydjZ6bS0yLThWNmgydjJoLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXRzPjxjaXJjbGUgY3g9NC41IGN5PTkuNSByPTIuNT48L2NpcmNsZT48Y2lyY2xlIGN4PTkgY3k9NS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9MTUgY3k9NS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9MTkuNSBjeT05LjUgcj0yLjU+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE3LjM0IDE0Ljg2Yy0uODctMS4wMi0xLjYtMS44OS0yLjQ4LTIuOTEtLjQ2LS41NC0xLjA1LTEuMDgtMS43NS0xLjMyLS4xMS0uMDQtLjIyLS4wNy0uMzMtLjA5LS4yNS0uMDQtLjUyLS4wNC0uNzgtLjA0cy0uNTMgMC0uNzkuMDVjLS4xMS4wMi0uMjIuMDUtLjMzLjA5LS43LjI0LTEuMjguNzgtMS43NSAxLjMyLS44NyAxLjAyLTEuNiAxLjg5LTIuNDggMi45MS0xLjMxIDEuMzEtMi45MiAyLjc2LTIuNjIgNC43OS4yOSAxLjAyIDEuMDIgMi4wMyAyLjMzIDIuMzIuNzMuMTUgMy4wNi0uNDQgNS41NC0uNDRoLjE4YzIuNDggMCA0LjgxLjU4IDUuNTQuNDQgMS4zMS0uMjkgMi4wNC0xLjMxIDIuMzMtMi4zMi4zMS0yLjA0LTEuMy0zLjQ5LTIuNjEtNC44elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGljdHVyZS1pbi1waWN0dXJlPjxwYXRoIGQ9XFxcIk0xOSA3aC04djZoOFY3em0yLTRIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOThWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOThoMTh2MTQuMDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waWN0dXJlLWluLXBpY3R1cmUtYWx0PjxwYXRoIGQ9XFxcIk0xOSAxMWgtOHY2aDh2LTZ6bTQgOFY0Ljk4QzIzIDMuODggMjIuMSAzIDIxIDNIM2MtMS4xIDAtMiAuODgtMiAxLjk4VjE5YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ6bS0yIC4wMkgzVjQuOTdoMTh2MTQuMDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wbGF5LWZvci13b3JrPjxwYXRoIGQ9XFxcIk0xMSA1djUuNTlINy41bDQuNSA0LjUgNC41LTQuNUgxM1Y1aC0yem0tNSA5YzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZoLTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTRINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBvbHltZXI+PHBhdGggZD1cXFwiTTE5IDRoLTRMNy4xMSAxNi42MyA0LjUgMTIgOSA0SDVMLjUgMTIgNSAyMGg0bDcuODktMTIuNjNMMTkuNSAxMiAxNSAyMGg0bDQuNS04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cG93ZXItc2V0dGluZ3MtbmV3PjxwYXRoIGQ9XFxcIk0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJDMTcuOTkgNy44NiAxOSA5LjgxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3cy03LTMuMTMtNy03YzAtMi4xOSAxLjAxLTQuMTQgMi41OC01LjQyTDYuMTcgNS4xN0M0LjIzIDYuODIgMyA5LjI2IDMgMTJjMCA0Ljk3IDQuMDMgOSA5IDlzOS00LjAzIDktOWMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXByZWduYW50LXdvbWFuPjxwYXRoIGQ9XFxcIk05IDRjMC0xLjExLjg5LTIgMi0yczIgLjg5IDIgMi0uODkgMi0yIDItMi0uODktMi0yem03IDljLS4wMS0xLjM0LS44My0yLjUxLTItMyAwLTEuNjYtMS4zNC0zLTMtM3MtMyAxLjM0LTMgM3Y3aDJ2NWgzdi01aDN2LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wcmludD48cGF0aCBkPVxcXCJNMTkgOEg1Yy0xLjY2IDAtMyAxLjM0LTMgM3Y2aDR2NGgxMnYtNGg0di02YzAtMS42Ni0xLjM0LTMtMy0zem0tMyAxMUg4di01aDh2NXptMy03Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6bS0xLTlINnY0aDEyVjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1xdWVyeS1idWlsZGVyPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6bS41LTEzSDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1xdWVzdGlvbi1hbnN3ZXI+PHBhdGggZD1cXFwiTTIxIDZoLTJ2OUg2djJjMCAuNTUuNDUgMSAxIDFoMTFsNCA0VjdjMC0uNTUtLjQ1LTEtMS0xem0tNCA2VjNjMC0uNTUtLjQ1LTEtMS0xSDNjLS41NSAwLTEgLjQ1LTEgMXYxNGw0LTRoMTBjLjU1IDAgMS0uNDUgMS0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmFkaW8tYnV0dG9uLWNoZWNrZWQ+PHBhdGggZD1cXFwiTTEyIDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDUgNS0yLjI0IDUtNS0yLjI0LTUtNS01em0wLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmFkaW8tYnV0dG9uLXVuY2hlY2tlZD48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWNlaXB0PjxwYXRoIGQ9XFxcIk0xOCAxN0g2di0yaDEydjJ6bTAtNEg2di0yaDEydjJ6bTAtNEg2VjdoMTJ2MnpNMyAyMmwxLjUtMS41TDYgMjJsMS41LTEuNUw5IDIybDEuNS0xLjVMMTIgMjJsMS41LTEuNUwxNSAyMmwxLjUtMS41TDE4IDIybDEuNS0xLjVMMjEgMjJWMmwtMS41IDEuNUwxOCAybC0xLjUgMS41TDE1IDJsLTEuNSAxLjVMMTIgMmwtMS41IDEuNUw5IDIgNy41IDMuNSA2IDIgNC41IDMuNSAzIDJ2MjB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWNvcmQtdm9pY2Utb3Zlcj48Y2lyY2xlIGN4PTkgY3k9OSByPTQ+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTkgMTVjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6bTcuNzYtOS42NGwtMS42OCAxLjY5Yy44NCAxLjE4Ljg0IDIuNzEgMCAzLjg5bDEuNjggMS42OWMyLjAyLTIuMDIgMi4wMi01LjA3IDAtNy4yN3pNMjAuMDcgMmwtMS42MyAxLjYzYzIuNzcgMy4wMiAyLjc3IDcuNTYgMCAxMC43NEwyMC4wNyAxNmMzLjktMy44OSAzLjkxLTkuOTUgMC0xNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZGVlbT48cGF0aCBkPVxcXCJNMjAgNmgtMi4xOGMuMTEtLjMxLjE4LS42NS4xOC0xIDAtMS42Ni0xLjM0LTMtMy0zLTEuMDUgMC0xLjk2LjU0LTIuNSAxLjM1bC0uNS42Ny0uNS0uNjhDMTAuOTYgMi41NCAxMC4wNSAyIDkgMiA3LjM0IDIgNiAzLjM0IDYgNWMwIC4zNS4wNy42OS4xOCAxSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTUtMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek05IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDUuMDhMNyAxMC44MyA4LjYyIDEyIDExIDguNzZsMS0xLjM2IDEgMS4zNkwxNS4zOCAxMiAxNyAxMC44MyAxNC45MiA4SDIwdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWRvPjxwYXRoIGQ9XFxcIk0xOC40IDEwLjZDMTYuNTUgOC45OSAxNC4xNSA4IDExLjUgOGMtNC42NSAwLTguNTggMy4wMy05Ljk2IDcuMjJMMy45IDE2YzEuMDUtMy4xOSA0LjA1LTUuNSA3LjYtNS41IDEuOTUgMCAzLjczLjcyIDUuMTIgMS44OEwxMyAxNmg5VjdsLTMuNiAzLjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZWZyZXNoPjxwYXRoIGQ9XFxcIk0xNy42NSA2LjM1QzE2LjIgNC45IDE0LjIxIDQgMTIgNGMtNC40MiAwLTcuOTkgMy41OC03Ljk5IDhzMy41NyA4IDcuOTkgOGMzLjczIDAgNi44NC0yLjU1IDcuNzMtNmgtMi4wOGMtLjgyIDIuMzMtMy4wNCA0LTUuNjUgNC0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02YzEuNjYgMCAzLjE0LjY5IDQuMjIgMS43OEwxMyAxMWg3VjRsLTIuMzUgMi4zNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZT48cGF0aCBkPVxcXCJNMTkgMTNINXYtMmgxNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlLWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNSAxMUg3di0yaDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtY2lyY2xlLW91dGxpbmU+PHBhdGggZD1cXFwiTTcgMTF2MmgxMHYtMkg3em01LTlDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlLXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTIyLjczIDIyLjczTDIuNzcgMi43NyAyIDJsLS43My0uNzNMMCAyLjU0bDQuMzkgNC4zOSAyLjIxIDQuNjYtMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDcuNDZsMS4zOCAxLjM4Yy0uNS4zNi0uODMuOTUtLjgzIDEuNjIgMCAxLjEuODkgMiAxLjk5IDIgLjY3IDAgMS4yNi0uMzMgMS42Mi0uODRMMjEuNDYgMjRsMS4yNy0xLjI3ek03LjQyIDE1Yy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoMi4zNmwyIDJINy40MnptOC4xMy0yYy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg2LjU0bDkuMDEgOXpNNyAxOGMtMS4xIDAtMS45OS45LTEuOTkgMlM1LjkgMjIgNyAyMnMyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlb3JkZXI+PHBhdGggZD1cXFwiTTMgMTVoMTh2LTJIM3Yyem0wIDRoMTh2LTJIM3Yyem0wLThoMThWOUgzdjJ6bTAtNnYyaDE4VjVIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcGx5PjxwYXRoIGQ9XFxcIk0xMCA5VjVsLTcgNyA3IDd2LTQuMWM1IDAgOC41IDEuNiAxMSA1LjEtMS01LTQtMTAtMTEtMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBseS1hbGw+PHBhdGggZD1cXFwiTTcgOFY1bC03IDcgNyA3di0zbC00LTQgNC00em02IDFWNWwtNyA3IDcgN3YtNC4xYzUgMCA4LjUgMS42IDExIDUuMS0xLTUtNC0xMC0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcG9ydD48cGF0aCBkPVxcXCJNMTUuNzMgM0g4LjI3TDMgOC4yN3Y3LjQ2TDguMjcgMjFoNy40NkwyMSAxNS43M1Y4LjI3TDE1LjczIDN6TTEyIDE3LjNjLS43MiAwLTEuMy0uNTgtMS4zLTEuMyAwLS43Mi41OC0xLjMgMS4zLTEuMy43MiAwIDEuMy41OCAxLjMgMS4zIDAgLjcyLS41OCAxLjMtMS4zIDEuM3ptMS00LjNoLTJWN2gydjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXBvcnQtcHJvYmxlbT48cGF0aCBkPVxcXCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVzdG9yZT48cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVzdG9yZS1wYWdlPjxwYXRoIGQ9XFxcIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bS0yIDE2Yy0yLjA1IDAtMy44MS0xLjI0LTQuNTgtM2gxLjcxYy42My45IDEuNjggMS41IDIuODcgMS41IDEuOTMgMCAzLjUtMS41NyAzLjUtMy41UzEzLjkzIDkuNSAxMiA5LjVjLTEuMzUgMC0yLjUyLjc4LTMuMSAxLjlsMS42IDEuNmgtNFY5bDEuMyAxLjNDOC42OSA4LjkyIDEwLjIzIDggMTIgOGMyLjc2IDAgNSAyLjI0IDUgNXMtMi4yNCA1LTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJvb20+PHBhdGggZD1cXFwiTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm91bmRlZC1jb3JuZXI+PHBhdGggZD1cXFwiTTE5IDE5aDJ2MmgtMnYtMnptMC0yaDJ2LTJoLTJ2MnpNMyAxM2gydi0ySDN2MnptMCA0aDJ2LTJIM3Yyem0wLThoMlY3SDN2MnptMC00aDJWM0gzdjJ6bTQgMGgyVjNIN3Yyem04IDE2aDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6bS04IDBoMnYtMkg3djJ6bS00IDBoMnYtMkgzdjJ6TTIxIDhjMC0yLjc2LTIuMjQtNS01LTVoLTV2Mmg1YzEuNjUgMCAzIDEuMzUgMyAzdjVoMlY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm93aW5nPjxwYXRoIGQ9XFxcIk04LjUgMTQuNUw0IDE5bDEuNSAxLjVMOSAxN2gybC0yLjUtMi41ek0xNSAxYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNiAyMC4wMUwxOCAyNGwtMi45OS0zLjAxVjE5LjVsLTcuMS03LjA5Yy0uMzEuMDUtLjYxLjA3LS45MS4wN3YtMi4xNmMxLjY2LjAzIDMuNjEtLjg3IDQuNjctMi4wNGwxLjQtMS41NWMuMTktLjIxLjQzLS4zOC42OS0uNS4yOS0uMTQuNjItLjIzLjk2LS4yM2guMDNDMTUuOTkgNi4wMSAxNyA3LjAyIDE3IDguMjZ2NS43NWMwIC44NC0uMzUgMS42MS0uOTIgMi4xNmwtMy41OC0zLjU4di0yLjI3Yy0uNjMuNTItMS40MyAxLjAyLTIuMjkgMS4zOUwxNi41IDE4SDE4bDMgMy4wMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNhdmU+PHBhdGggZD1cXFwiTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2NoZWR1bGU+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptLjUtMTNIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNlYXJjaD48cGF0aCBkPVxcXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNlbGVjdC1hbGw+PHBhdGggZD1cXFwiTTMgNWgyVjNjLTEuMSAwLTIgLjktMiAyem0wIDhoMnYtMkgzdjJ6bTQgOGgydi0ySDd2MnpNMyA5aDJWN0gzdjJ6bTEwLTZoLTJ2MmgyVjN6bTYgMHYyaDJjMC0xLjEtLjktMi0yLTJ6TTUgMjF2LTJIM2MwIDEuMS45IDIgMiAyem0tMi00aDJ2LTJIM3Yyek05IDNIN3YyaDJWM3ptMiAxOGgydi0yaC0ydjJ6bTgtOGgydi0yaC0ydjJ6bTAgOGMxLjEgMCAyLS45IDItMmgtMnYyem0wLTEyaDJWN2gtMnYyem0wIDhoMnYtMmgtMnYyem0tNCA0aDJ2LTJoLTJ2MnptMC0xNmgyVjNoLTJ2MnpNNyAxN2gxMFY3SDd2MTB6bTItOGg2djZIOVY5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VuZD48cGF0aCBkPVxcXCJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncz48cGF0aCBkPVxcXCJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVDMTQuNDYgMi4xOCAxNC4yNSAyIDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWFwcGxpY2F0aW9ucz48cGF0aCBkPVxcXCJNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmMtLjA5LS4xNS0uMDUtLjM0LjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmMtLjEzLS4xMS0uMTctLjMtLjA4LS40NWwxLjQtMi40MmMuMDktLjE1LjI3LS4yMS40My0uMTVsMS43NC43Yy4zNi0uMjguNzYtLjUxIDEuMTgtLjY5bC4yNi0xLjg1Yy4wMy0uMTcuMTgtLjMuMzUtLjNoMi44Yy4xNyAwIC4zMi4xMy4zNS4yOWwuMjYgMS44NWMuNDMuMTguODIuNDEgMS4xOC42OWwxLjc0LS43Yy4xNi0uMDYuMzQgMCAuNDMuMTVsMS40IDIuNDJjLjA5LjE1LjA1LjM0LS4wOC40NWwtMS40OCAxLjE2Yy4wMy4yMy4wNS40Ni4wNS42OXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJhY2t1cC1yZXN0b3JlPjxwYXRoIGQ9XFxcIk0xNCAxMmMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6bS0yLTljLTQuOTcgMC05IDQuMDMtOSA5SDBsNCA0IDQtNEg1YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS41MSAwLTIuOTEtLjQ5LTQuMDYtMS4zbC0xLjQyIDEuNDRDOC4wNCAyMC4zIDkuOTQgMjEgMTIgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1ibHVldG9vdGg+PHBhdGggZD1cXFwiTTExIDI0aDJ2LTJoLTJ2MnptLTQgMGgydi0ySDd2MnptOCAwaDJ2LTJoLTJ2MnptMi43MS0xOC4yOUwxMiAwaC0xdjcuNTlMNi40MSAzIDUgNC40MSAxMC41OSAxMCA1IDE1LjU5IDYuNDEgMTcgMTEgMTIuNDFWMjBoMWw1LjcxLTUuNzEtNC4zLTQuMjkgNC4zLTQuMjl6TTEzIDMuODNsMS44OCAxLjg4TDEzIDcuNTlWMy44M3ptMS44OCAxMC40NkwxMyAxNi4xN3YtMy43NmwxLjg4IDEuODh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1icmlnaHRuZXNzPjxwYXRoIGQ9XFxcIk0yMSAzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNi4wMUgzVjQuOTloMTh2MTQuMDJ6TTggMTZoMi41bDEuNSAxLjUgMS41LTEuNUgxNnYtMi41bDEuNS0xLjUtMS41LTEuNVY4aC0yLjVMMTIgNi41IDEwLjUgOEg4djIuNUw2LjUgMTIgOCAxMy41VjE2em00LTdjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDNWOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWNlbGw+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6TTE2IC4wMUw4IDBDNi45IDAgNiAuOSA2IDJ2MTZjMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjJjMC0xLjEtLjktMS45OS0yLTEuOTl6TTE2IDE2SDhWNGg4djEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtZXRoZXJuZXQ+PHBhdGggZD1cXFwiTTcuNzcgNi43Nkw2LjIzIDUuNDguODIgMTJsNS40MSA2LjUyIDEuNTQtMS4yOEwzLjQyIDEybDQuMzUtNS4yNHpNNyAxM2gydi0ySDd2MnptMTAtMmgtMnYyaDJ2LTJ6bS02IDJoMnYtMmgtMnYyem02Ljc3LTcuNTJsLTEuNTQgMS4yOEwyMC41OCAxMmwtNC4zNSA1LjI0IDEuNTQgMS4yOEwyMy4xOCAxMmwtNS40MS02LjUyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtYW50ZW5uYT48cGF0aCBkPVxcXCJNMTIgNWMtMy44NyAwLTcgMy4xMy03IDdoMmMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1aDJjMC0zLjg3LTMuMTMtNy03LTd6bTEgOS4yOWMuODgtLjM5IDEuNS0xLjI2IDEuNS0yLjI5IDAtMS4zOC0xLjEyLTIuNS0yLjUtMi41UzkuNSAxMC42MiA5LjUgMTJjMCAxLjAyLjYyIDEuOSAxLjUgMi4yOXYzLjNMNy41OSAyMSA5IDIyLjQxbDMtMyAzIDNMMTYuNDEgMjEgMTMgMTcuNTl2LTMuM3pNMTIgMUM1LjkzIDEgMSA1LjkzIDEgMTJoMmMwLTQuOTcgNC4wMy05IDktOXM5IDQuMDMgOSA5aDJjMC02LjA3LTQuOTMtMTEtMTEtMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1jb21wb25lbnQ+PHBhdGggZD1cXFwiTTUgMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDF2Nmg2VjZINVYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0ySDl2MnptLTggMGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThDNi4xNiAxOC40IDcgMTcuMyA3IDE2di0ySDF2MnpNMjEgNlYyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRoLTJ2Nmg2VjZoLTJ6bS04LTRjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEg5djZoNlY2aC0yVjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJoLTZ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWNvbXBvc2l0ZT48cGF0aCBkPVxcXCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtaGRtaT48cGF0aCBkPVxcXCJNMTggN1Y0YzAtMS4xLS45LTItMi0ySDhjLTEuMSAwLTIgLjktMiAydjNINXY2bDMgNnYzaDh2LTNsMy02VjdoLTF6TTggNGg4djNoLTJWNWgtMXYyaC0yVjVoLTF2Mkg4VjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1zdmlkZW8+PHBhdGggZD1cXFwiTTggMTEuNWMwLS44My0uNjctMS41LTEuNS0xLjVTNSAxMC42NyA1IDExLjUgNS42NyAxMyA2LjUgMTMgOCAxMi4zMyA4IDExLjV6bTctNWMwLS44My0uNjctMS41LTEuNS0xLjVoLTNDOS42NyA1IDkgNS42NyA5IDYuNVM5LjY3IDggMTAuNSA4aDNjLjgzIDAgMS41LS42NyAxLjUtMS41ek04LjUgMTVjLS44MyAwLTEuNS42Ny0xLjUgMS41UzcuNjcgMTggOC41IDE4czEuNS0uNjcgMS41LTEuNVM5LjMzIDE1IDguNSAxNXpNMTIgMUM1LjkzIDEgMSA1LjkzIDEgMTJzNC45MyAxMSAxMSAxMSAxMS00LjkzIDExLTExUzE4LjA3IDEgMTIgMXptMCAyMGMtNC45NiAwLTktNC4wNC05LTlzNC4wNC05IDktOSA5IDQuMDQgOSA5LTQuMDQgOS05IDl6bTUuNS0xMWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6bS0yIDVjLS44MyAwLTEuNS42Ny0xLjUgMS41cy42NyAxLjUgMS41IDEuNSAxLjUtLjY3IDEuNS0xLjUtLjY3LTEuNS0xLjUtMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3Mtb3ZlcnNjYW4+PHBhdGggZD1cXFwiTTEyLjAxIDUuNUwxMCA4aDRsLTEuOTktMi41ek0xOCAxMHY0bDIuNS0xLjk5TDE4IDEwek02IDEwbC0yLjUgMi4wMUw2IDE0di00em04IDZoLTRsMi4wMSAyLjVMMTQgMTZ6bTctMTNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXBob25lPjxwYXRoIGQ9XFxcIk0xMyA5aC0ydjJoMlY5em00IDBoLTJ2MmgyVjl6bTMgNi41Yy0xLjI1IDAtMi40NS0uMi0zLjU3LS41Ny0uMzUtLjExLS43NC0uMDMtMS4wMi4yNGwtMi4yIDIuMmMtMi44My0xLjQ0LTUuMTUtMy43NS02LjU5LTYuNThsMi4yLTIuMjFjLjI4LS4yNy4zNi0uNjYuMjUtMS4wMUM4LjcgNi40NSA4LjUgNS4yNSA4LjUgNGMwLS41NS0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIDAgOS4zOSA3LjYxIDE3IDE3IDE3IC41NSAwIDEtLjQ1IDEtMXYtMy41YzAtLjU1LS40NS0xLTEtMXpNMTkgOXYyaDJWOWgtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLXBvd2VyPjxwYXRoIGQ9XFxcIk03IDI0aDJ2LTJIN3Yyem00IDBoMnYtMmgtMnYyem0yLTIyaC0ydjEwaDJWMnptMy41NiAyLjQ0bC0xLjQ1IDEuNDVDMTYuODQgNi45NCAxOCA4LjgzIDE4IDExYzAgMy4zMS0yLjY5IDYtNiA2cy02LTIuNjktNi02YzAtMi4xNyAxLjE2LTQuMDYgMi44OC01LjEyTDcuNDQgNC40NEM1LjM2IDUuODggNCA4LjI4IDQgMTFjMCA0LjQyIDMuNTggOCA4IDhzOC0zLjU4IDgtOGMwLTIuNzItMS4zNi01LjEyLTMuNDQtNi41NnpNMTUgMjRoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcmVtb3RlPjxwYXRoIGQ9XFxcIk0xNSA5SDljLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMVYxMGMwLS41NS0uNDUtMS0xLTF6bS0zIDZjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyek03LjA1IDYuMDVsMS40MSAxLjQxQzkuMzcgNi41NiAxMC42MiA2IDEyIDZzMi42My41NiAzLjU0IDEuNDZsMS40MS0xLjQxQzE1LjY4IDQuNzggMTMuOTMgNCAxMiA0cy0zLjY4Ljc4LTQuOTUgMi4wNXpNMTIgMEM4Ljk2IDAgNi4yMSAxLjIzIDQuMjIgMy4yMmwxLjQxIDEuNDFDNy4yNiAzLjAxIDkuNTEgMiAxMiAyczQuNzQgMS4wMSA2LjM2IDIuNjRsMS40MS0xLjQxQzE3Ljc5IDEuMjMgMTUuMDQgMCAxMiAwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3Mtdm9pY2U+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTUtMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNGMwLTEuNjYtMS4zNC0zLTMtM1M5IDIuMzQgOSA0djZjMCAxLjY2IDEuMzQgMyAzIDN6bS0xIDExaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptNC0xNGgtMS43YzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxMyA2LjcgMTBINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMGgydi0zLjI4YzMuMjgtLjQ5IDYtMy4zMSA2LTYuNzJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wPjxwYXRoIGQ9XFxcIk0xNiA2VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDJ2MTNjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWNmgtNnptLTYtMmg0djJoLTRWNHpNOSAxOFY5bDcuNSA0TDkgMTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wLXR3bz48cGF0aCBkPVxcXCJNMyA5SDF2MTFjMCAxLjExLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS44OSAyLTJIM1Y5em0xNS00VjNjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDV2MTFjMCAxLjExLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS44OSAyLTJWNWgtNXptLTYtMmg0djJoLTRWM3ptMCAxMlY4bDUuNSAzLTUuNSA0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2hvcHBpbmctYmFza2V0PjxwYXRoIGQ9XFxcIk0xNy4yMSA5bC00LjM4LTYuNTZjLS4xOS0uMjgtLjUxLS40Mi0uODMtLjQyLS4zMiAwLS42NC4xNC0uODMuNDNMNi43OSA5SDJjLS41NSAwLTEgLjQ1LTEgMSAwIC4wOS4wMS4xOC4wNC4yN2wyLjU0IDkuMjdjLjIzLjg0IDEgMS40NiAxLjkyIDEuNDZoMTNjLjkyIDAgMS42OS0uNjIgMS45My0xLjQ2bDIuNTQtOS4yN0wyMyAxMGMwLS41NS0uNDUtMS0xLTFoLTQuNzl6TTkgOWwzLTQuNEwxNSA5SDl6bTMgOGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wcGluZy1jYXJ0PjxwYXRoIGQ9XFxcIk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c29ydD48cGF0aCBkPVxcXCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3BlYWtlci1ub3Rlcz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTggMTRINnYtMmgydjJ6bTAtM0g2VjloMnYyem0wLTNINlY2aDJ2MnptNyA2aC01di0yaDV2MnptMy0zaC04VjloOHYyem0wLTNoLThWNmg4djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zcGVha2VyLW5vdGVzLW9mZj48cGF0aCBkPVxcXCJNMTAuNTQgMTFsLS41NC0uNTRMNy41NCA4IDYgNi40NiAyLjM4IDIuODQgMS4yNyAxLjczIDAgM2wyLjAxIDIuMDFMMiAyMmw0LTRoOWw1LjczIDUuNzNMMjIgMjIuNDYgMTcuNTQgMThsLTctN3pNOCAxNEg2di0yaDJ2MnptLTItM1Y5bDIgMkg2em0xNC05SDQuMDhMMTAgNy45MlY2aDh2MmgtNy45MmwxIDFIMTh2MmgtNC45Mmw2Ljk5IDYuOTlDMjEuMTQgMTcuOTUgMjIgMTcuMDggMjIgMTZWNGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNwZWxsY2hlY2s+PHBhdGggZD1cXFwiTTEyLjQ1IDE2aDIuMDlMOS40MyAzSDcuNTdMMi40NiAxNmgyLjA5bDEuMTItM2g1LjY0bDEuMTQgM3ptLTYuMDItNUw4LjUgNS40OCAxMC41NyAxMUg2LjQzem0xNS4xNi41OWwtOC4wOSA4LjA5TDkuODMgMTZsLTEuNDEgMS40MSA1LjA5IDUuMDlMMjMgMTNsLTEuNDEtMS40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXI+PHBhdGggZD1cXFwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3Rhci1ib3JkZXI+PHBhdGggZD1cXFwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFyLWhhbGY+PHBhdGggZD1cXFwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRWNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXJzPjxwYXRoIGQ9XFxcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyem00LjI0IDE2TDEyIDE1LjQ1IDcuNzcgMThsMS4xMi00LjgxLTMuNzMtMy4yMyA0LjkyLS40MkwxMiA1bDEuOTIgNC41MyA0LjkyLjQyLTMuNzMgMy4yM0wxNi4yMyAxOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0b3JlPjxwYXRoIGQ9XFxcIk0yMCA0SDR2MmgxNlY0em0xIDEwdi0ybC0xLTVINGwtMSA1djJoMXY2aDEwdi02aDR2Nmgydi02aDF6bS05IDRINnYtNGg2djR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJkaXJlY3RvcnktYXJyb3ctbGVmdD48cGF0aCBkPVxcXCJNMTEgOWwxLjQyIDEuNDJMOC44MyAxNEgxOFY0aDJ2MTJIOC44M2wzLjU5IDMuNThMMTEgMjFsLTYtNiA2LTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJkaXJlY3RvcnktYXJyb3ctcmlnaHQ+PHBhdGggZD1cXFwiTTE5IDE1bC02IDYtMS40Mi0xLjQyTDE1LjE3IDE2SDRWNGgydjEwaDkuMTdsLTMuNTktMy41OEwxMyA5bDYgNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmplY3Q+PHBhdGggZD1cXFwiTTE0IDE3SDR2MmgxMHYtMnptNi04SDR2MmgxNlY5ek00IDE1aDE2di0ySDR2MnpNNCA1djJoMTZWNUg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3VwZXJ2aXNvci1hY2NvdW50PjxwYXRoIGQ9XFxcIk0xNi41IDEyYzEuMzggMCAyLjQ5LTEuMTIgMi40OS0yLjVTMTcuODggNyAxNi41IDdDMTUuMTIgNyAxNCA4LjEyIDE0IDkuNXMxLjEyIDIuNSAyLjUgMi41ek05IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzEwLjY2IDUgOSA1QzcuMzQgNSA2IDYuMzQgNiA4czEuMzQgMyAzIDN6bTcuNSAzYy0xLjgzIDAtNS41LjkyLTUuNSAyLjc1VjE5aDExdi0yLjI1YzAtMS44My0zLjY3LTIuNzUtNS41LTIuNzV6TTkgMTNjLTIuMzMgMC03IDEuMTctNyAzLjVWMTloN3YtMi4yNWMwLS44NS4zMy0yLjM0IDIuMzctMy40N0MxMC41IDEzLjEgOS42NiAxMyA5IDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC1ob3Jpej48cGF0aCBkPVxcXCJNNi45OSAxMUwzIDE1bDMuOTkgNHYtM0gxNHYtMkg2Ljk5di0zek0yMSA5bC0zLjk5LTR2M0gxMHYyaDcuMDF2M0wyMSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC12ZXJ0PjxwYXRoIGQ9XFxcIk0xNiAxNy4wMVYxMGgtMnY3LjAxaC0zTDE1IDIxbDQtMy45OWgtM3pNOSAzTDUgNi45OWgzVjE0aDJWNi45OWgzTDkgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN3YXAtdmVydGljYWwtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek02LjUgOUwxMCA1LjUgMTMuNSA5SDExdjRIOVY5SDYuNXptMTEgNkwxNCAxOC41IDEwLjUgMTVIMTN2LTRoMnY0aDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN5c3RlbS11cGRhdGUtYWx0PjxwYXRoIGQ9XFxcIk0xMiAxNi41bDQtNGgtM3YtOWgtMnY5SDhsNCA0em05LTEzaC02djEuOTloNnYxNC4wM0gzVjUuNDloNlYzLjVIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtMTRjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10YWI+PHBhdGggZD1cXFwiTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10YWItdW5zZWxlY3RlZD48cGF0aCBkPVxcXCJNMSA5aDJWN0gxdjJ6bTAgNGgydi0ySDF2MnptMC04aDJWM2MtMS4xIDAtMiAuOS0yIDJ6bTggMTZoMnYtMkg5djJ6bS04LTRoMnYtMkgxdjJ6bTIgNHYtMkgxYzAgMS4xLjkgMiAyIDJ6TTIxIDNoLTh2NmgxMFY1YzAtMS4xLS45LTItMi0yem0wIDE0aDJ2LTJoLTJ2MnpNOSA1aDJWM0g5djJ6TTUgMjFoMnYtMkg1djJ6TTUgNWgyVjNINXYyem0xNiAxNmMxLjEgMCAyLS45IDItMmgtMnYyem0wLThoMnYtMmgtMnYyem0tOCA4aDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRleHQtZm9ybWF0PjxwYXRoIGQ9XFxcIk01IDE3djJoMTR2LTJINXptNC41LTQuMmg1bC45IDIuMmgyLjFMMTIuNzUgNGgtMS41TDYuNSAxNWgyLjFsLjktMi4yek0xMiA1Ljk4TDEzLjg3IDExaC0zLjc0TDEyIDUuOTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aGVhdGVycz48cGF0aCBkPVxcXCJNMTggM3YyaC0yVjNIOHYySDZWM0g0djE4aDJ2LTJoMnYyaDh2LTJoMnYyaDJWM2gtMnpNOCAxN0g2di0yaDJ2MnptMC00SDZ2LTJoMnYyem0wLTRINlY3aDJ2MnptMTAgOGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRodW1iLWRvd24+PHBhdGggZD1cXFwiTTE1IDNINmMtLjgzIDAtMS41NC41LTEuODQgMS4yMmwtMy4wMiA3LjA1Yy0uMDkuMjMtLjE0LjQ3LS4xNC43M3YxLjkxbC4wMS4wMUwxIDE0YzAgMS4xLjkgMiAyIDJoNi4zMWwtLjk1IDQuNTctLjAzLjMyYzAgLjQxLjE3Ljc5LjQ0IDEuMDZMOS44MyAyM2w2LjU5LTYuNTljLjM2LS4zNi41OC0uODYuNTgtMS40MVY1YzAtMS4xLS45LTItMi0yem00IDB2MTJoNFYzaC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWItdXA+PHBhdGggZD1cXFwiTTEgMjFoNFY5SDF2MTJ6bTIyLTExYzAtMS4xLS45LTItMi0yaC02LjMxbC45NS00LjU3LjAzLS4zMmMwLS40MS0uMTctLjc5LS40NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41IDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0xLjkxbC0uMDEtLjAxTDIzIDEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWJzLXVwLWRvd24+PHBhdGggZD1cXFwiTTEyIDZjMC0uNTUtLjQ1LTEtMS0xSDUuODJsLjY2LTMuMTguMDItLjIzYzAtLjMxLS4xMy0uNTktLjMzLS44TDUuMzggMCAuNDQgNC45NEMuMTcgNS4yMSAwIDUuNTkgMCA2djYuNWMwIC44My42NyAxLjUgMS41IDEuNWg2Ljc1Yy42MiAwIDEuMTUtLjM4IDEuMzgtLjkxbDIuMjYtNS4yOWMuMDctLjE3LjExLS4zNi4xMS0uNTVWNnptMTAuNSA0aC02Ljc1Yy0uNjIgMC0xLjE1LjM4LTEuMzguOTFsLTIuMjYgNS4yOWMtLjA3LjE3LS4xMS4zNi0uMTEuNTVWMThjMCAuNTUuNDUgMSAxIDFoNS4xOGwtLjY2IDMuMTgtLjAyLjI0YzAgLjMxLjEzLjU5LjMzLjhsLjc5Ljc4IDQuOTQtNC45NGMuMjctLjI3LjQ0LS42NS40NC0xLjA2di02LjVjMC0uODMtLjY3LTEuNS0xLjUtMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGltZWxpbmU+PHBhdGggZD1cXFwiTTIzIDhjMCAxLjEtLjkgMi0yIDItLjE4IDAtLjM1LS4wMi0uNTEtLjA3bC0zLjU2IDMuNTVjLjA1LjE2LjA3LjM0LjA3LjUyIDAgMS4xLS45IDItMiAycy0yLS45LTItMmMwLS4xOC4wMi0uMzYuMDctLjUybC0yLjU1LTIuNTVjLS4xNi4wNS0uMzQuMDctLjUyLjA3cy0uMzYtLjAyLS41Mi0uMDdsLTQuNTUgNC41NmMuMDUuMTYuMDcuMzMuMDcuNTEgMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yYy4xOCAwIC4zNS4wMi41MS4wN2w0LjU2LTQuNTVDOC4wMiA5LjM2IDggOS4xOCA4IDljMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIC4xOC0uMDIuMzYtLjA3LjUybDIuNTUgMi41NWMuMTYtLjA1LjM0LS4wNy41Mi0uMDdzLjM2LjAyLjUyLjA3bDMuNTUtMy41NkMxOS4wMiA4LjM1IDE5IDguMTggMTkgOGMwLTEuMS45LTIgMi0yczIgLjkgMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9jPjxwYXRoIGQ9XFxcIk0zIDloMTRWN0gzdjJ6bTAgNGgxNHYtMkgzdjJ6bTAgNGgxNHYtMkgzdjJ6bTE2IDBoMnYtMmgtMnYyem0wLTEwdjJoMlY3aC0yem0wIDZoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9kYXk+PHBhdGggZD1cXFwiTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOGgxNHYxMXpNNyAxMGg1djVIN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRvbGw+PHBhdGggZD1cXFwiTTE1IDRjLTQuNDIgMC04IDMuNTgtOCA4czMuNTggOCA4IDggOC0zLjU4IDgtOC0zLjU4LTgtOC04em0wIDE0Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnpNMyAxMmMwLTIuNjEgMS42Ny00LjgzIDQtNS42NVY0LjI2QzMuNTUgNS4xNSAxIDguMjcgMSAxMnMyLjU1IDYuODUgNiA3Ljc0di0yLjA5Yy0yLjMzLS44Mi00LTMuMDQtNC01LjY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG91Y2gtYXBwPjxwYXRoIGQ9XFxcIk05IDExLjI0VjcuNUM5IDYuMTIgMTAuMTIgNSAxMS41IDVTMTQgNi4xMiAxNCA3LjV2My43NGMxLjIxLS44MSAyLTIuMTggMi0zLjc0QzE2IDUuMDEgMTMuOTkgMyAxMS41IDNTNyA1LjAxIDcgNy41YzAgMS41Ni43OSAyLjkzIDIgMy43NHptOS44NCA0LjYzbC00LjU0LTIuMjZjLS4xNy0uMDctLjM1LS4xMS0uNTQtLjExSDEzdi02YzAtLjgzLS42Ny0xLjUtMS41LTEuNVMxMCA2LjY3IDEwIDcuNXYxMC43NGwtMy40My0uNzJjLS4wOC0uMDEtLjE1LS4wMy0uMjQtLjAzLS4zMSAwLS41OS4xMy0uNzkuMzNsLS43OS44IDQuOTQgNC45NGMuMjcuMjcuNjUuNDQgMS4wNi40NGg2Ljc5Yy43NSAwIDEuMzMtLjU1IDEuNDQtMS4yOGwuNzUtNS4yN2MuMDEtLjA3LjAyLS4xNC4wMi0uMiAwLS42Mi0uMzgtMS4xNi0uOTEtMS4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYWNrLWNoYW5nZXM+PHBhdGggZD1cXFwiTTE5LjA3IDQuOTNsLTEuNDEgMS40MUMxOS4xIDcuNzkgMjAgOS43OSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHMtOC0zLjU4LTgtOGMwLTQuMDggMy4wNS03LjQ0IDctNy45M3YyLjAyQzguMTYgNi41NyA2IDkuMDMgNiAxMmMwIDMuMzEgMi42OSA2IDYgNnM2LTIuNjkgNi02YzAtMS42Ni0uNjctMy4xNi0xLjc2LTQuMjRsLTEuNDEgMS40MUMxNS41NSA5LjkgMTYgMTAuOSAxNiAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNGMwLTEuODYgMS4yOC0zLjQxIDMtMy44NnYyLjE0Yy0uNi4zNS0xIC45OC0xIDEuNzIgMCAxLjEuOSAyIDIgMnMyLS45IDItMmMwLS43NC0uNC0xLjM4LTEtMS43MlYyaC0xQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBjMC0yLjc2LTEuMTItNS4yNi0yLjkzLTcuMDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFuc2xhdGU+PHBhdGggZD1cXFwiTTEyLjg3IDE1LjA3bC0yLjU0LTIuNTEuMDMtLjAzYzEuNzQtMS45NCAyLjk4LTQuMTcgMy43MS02LjUzSDE3VjRoLTdWMkg4djJIMXYxLjk5aDExLjE3QzExLjUgNy45MiAxMC40NCA5Ljc1IDkgMTEuMzUgOC4wNyAxMC4zMiA3LjMgOS4xOSA2LjY5IDhoLTJjLjczIDEuNjMgMS43MyAzLjE3IDIuOTggNC41NmwtNS4wOSA1LjAyTDQgMTlsNS01IDMuMTEgMy4xMS43Ni0yLjA0ek0xOC41IDEwaC0yTDEyIDIyaDJsMS4xMi0zaDQuNzVMMjEgMjJoMmwtNC41LTEyem0tMi42MiA3bDEuNjItNC4zM0wxOS4xMiAxN2gtMy4yNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyZW5kaW5nLWRvd24+PHBhdGggZD1cXFwiTTE2IDE4bDIuMjktMi4yOS00Ljg4LTQuODgtNCA0TDIgNy40MSAzLjQxIDZsNiA2IDQtNCA2LjMgNi4yOUwyMiAxMnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctZmxhdD48cGF0aCBkPVxcXCJNMjIgMTJsLTQtNHYzSDN2MmgxNXYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctdXA+PHBhdGggZD1cXFwiTTE2IDZsMi4yOSAyLjI5LTQuODggNC44OC00LTRMMiAxNi41OSAzLjQxIDE4bDYtNiA0IDQgNi4zLTYuMjlMMjIgMTJWNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXR1cm5lZC1pbj48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHVybmVkLWluLW5vdD48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5hcmNoaXZlPjxwYXRoIGQ9XFxcIk0yMC41NSA1LjIybC0xLjM5LTEuNjhDMTguODggMy4yMSAxOC40NyAzIDE4IDNINmMtLjQ3IDAtLjg4LjIxLTEuMTUuNTVMMy40NiA1LjIyQzMuMTcgNS41NyAzIDYuMDEgMyA2LjVWMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ5LS4xNy0uOTMtLjQ1LTEuMjh6TTEyIDkuNWw1LjUgNS41SDE0djJoLTR2LTJINi41TDEyIDkuNXpNNS4xMiA1bC44Mi0xaDEybC45MyAxSDUuMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmRvPjxwYXRoIGQ9XFxcIk0xMi41IDhjLTIuNjUgMC01LjA1Ljk5LTYuOSAyLjZMMiA3djloOWwtMy42Mi0zLjYyYzEuMzktMS4xNiAzLjE2LTEuODggNS4xMi0xLjg4IDMuNTQgMCA2LjU1IDIuMzEgNy42IDUuNWwyLjM3LS43OEMyMS4wOCAxMS4wMyAxNy4xNSA4IDEyLjUgOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuZm9sZC1sZXNzPjxwYXRoIGQ9XFxcIk03LjQxIDE4LjU5TDguODMgMjAgMTIgMTYuODMgMTUuMTcgMjBsMS40MS0xLjQxTDEyIDE0bC00LjU5IDQuNTl6bTkuMTgtMTMuMThMMTUuMTcgNCAxMiA3LjE3IDguODMgNCA3LjQxIDUuNDEgMTIgMTBsNC41OS00LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5mb2xkLW1vcmU+PHBhdGggZD1cXFwiTTEyIDUuODNMMTUuMTcgOWwxLjQxLTEuNDFMMTIgMyA3LjQxIDcuNTkgOC44MyA5IDEyIDUuODN6bTAgMTIuMzRMOC44MyAxNWwtMS40MSAxLjQxTDEyIDIxbDQuNTktNC41OUwxNS4xNyAxNSAxMiAxOC4xN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVwZGF0ZT48cGF0aCBkPVxcXCJNMjEgMTAuMTJoLTYuNzhsMi43NC0yLjgyYy0yLjczLTIuNy03LjE1LTIuOC05Ljg4LS4xLTIuNzMgMi43MS0yLjczIDcuMDggMCA5Ljc5IDIuNzMgMi43MSA3LjE1IDIuNzEgOS44OCAwQzE4LjMyIDE1LjY1IDE5IDE0LjA4IDE5IDEyLjFoMmMwIDEuOTgtLjg4IDQuNTUtMi42NCA2LjI5LTMuNTEgMy40OC05LjIxIDMuNDgtMTIuNzIgMC0zLjUtMy40Ny0zLjUzLTkuMTEtLjAyLTEyLjU4IDMuNTEtMy40NyA5LjE0LTMuNDcgMTIuNjUgMEwyMSAzdjcuMTJ6TTEyLjUgOHY0LjI1bDMuNSAyLjA4LS43MiAxLjIxTDExIDEzVjhoMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmVyaWZpZWQtdXNlcj48cGF0aCBkPVxcXCJNMTIgMUwzIDV2NmMwIDUuNTUgMy44NCAxMC43NCA5IDEyIDUuMTYtMS4yNiA5LTYuNDUgOS0xMlY1bC05LTR6bS0yIDE2bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWFnZW5kYT48cGF0aCBkPVxcXCJNMjAgMTNIM2MtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTdjLjU1IDAgMS0uNDUgMS0xdi02YzAtLjU1LS40NS0xLTEtMXptMC0xMEgzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWFycmF5PjxwYXRoIGQ9XFxcIk00IDE4aDNWNUg0djEzek0xOCA1djEzaDNWNWgtM3pNOCAxOGg5VjVIOHYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctY2Fyb3VzZWw+PHBhdGggZD1cXFwiTTcgMTloMTBWNEg3djE1em0tNS0yaDRWNkgydjExek0xOCA2djExaDRWNmgtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctY29sdW1uPjxwYXRoIGQ9XFxcIk0xMCAxOGg1VjVoLTV2MTN6bS02IDBoNVY1SDR2MTN6TTE2IDV2MTNoNVY1aC01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1kYXk+PHBhdGggZD1cXFwiTTIgMjFoMTl2LTNIMnYzek0yMCA4SDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMVY5YzAtLjU1LS40NS0xLTEtMXpNMiAzdjNoMTlWM0gyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1oZWFkbGluZT48cGF0aCBkPVxcXCJNNCAxNWgxNnYtMkg0djJ6bTAgNGgxNnYtMkg0djJ6bTAtOGgxNlY5SDR2MnptMC02djJoMTZWNUg0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1saXN0PjxwYXRoIGQ9XFxcIk00IDE0aDR2LTRINHY0em0wIDVoNHYtNEg0djR6TTQgOWg0VjVINHY0em01IDVoMTJ2LTRIOXY0em0wIDVoMTJ2LTRIOXY0ek05IDV2NGgxMlY1SDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LW1vZHVsZT48cGF0aCBkPVxcXCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctcXVpbHQ+PHBhdGggZD1cXFwiTTEwIDE4aDV2LTZoLTV2NnptLTYgMGg1VjVINHYxM3ptMTIgMGg1di02aC01djZ6TTEwIDV2NmgxMVY1SDEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1zdHJlYW0+PHBhdGggZD1cXFwiTTQgMThoMTd2LTZINHY2ek00IDV2NmgxN1Y1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LXdlZWs+PHBhdGggZD1cXFwiTTYgNUgzYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6bTE0IDBoLTNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXptLTcgMGgtM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlzaWJpbGl0eT48cGF0aCBkPVxcXCJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXpNMTIgMTdjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy0xLjM0IDMtMy0xLjM0LTMtMy0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlzaWJpbGl0eS1vZmY+PHBhdGggZD1cXFwiTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d2FybmluZz48cGF0aCBkPVxcXCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d2F0Y2gtbGF0ZXI+PHBhdGggZD1cXFwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE3LjUgMiAxMiAyem00LjIgMTQuMkwxMSAxM1Y3aDEuNXY1LjJsNC41IDIuNy0uOCAxLjN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13ZWVrZW5kPjxwYXRoIGQ9XFxcIk0yMSAxMGMtMS4xIDAtMiAuOS0yIDJ2M0g1di0zYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnY1YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6bS0zLTVINmMtMS4xIDAtMiAuOS0yIDJ2Mi4xNWMxLjE2LjQxIDIgMS41MSAyIDIuODJWMTRoMTJ2LTIuMDNjMC0xLjMuODQtMi40IDItMi44MlY3YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9d29yaz48cGF0aCBkPVxcXCJNMjAgNmgtNFY0YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNGg0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD15b3V0dWJlLXNlYXJjaGVkLWZvcj48cGF0aCBkPVxcXCJNMTcuMDEgMTRoLS44bC0uMjctLjI3Yy45OC0xLjE0IDEuNTctMi42MSAxLjU3LTQuMjMgMC0zLjU5LTIuOTEtNi41LTYuNS02LjVzLTYuNSAzLTYuNSA2LjVIMmwzLjg0IDQgNC4xNi00SDYuNTFDNi41MSA3IDguNTMgNSAxMS4wMSA1czQuNSAyLjAxIDQuNSA0LjVjMCAyLjQ4LTIuMDIgNC41LTQuNSA0LjUtLjY1IDAtMS4yNi0uMTQtMS44Mi0uMzhMNy43MSAxNS4xYy45Ny41NyAyLjA5LjkgMy4zLjkgMS42MSAwIDMuMDgtLjU5IDQuMjItMS41N2wuMjcuMjd2Ljc5bDUuMDEgNC45OUwyMiAxOWwtNC45OS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9em9vbS1pbj48cGF0aCBkPVxcXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHptMi41LTRoLTJ2Mkg5di0ySDdWOWgyVjdoMXYyaDJ2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXpvb20tb3V0PjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0ek03IDloNXYxSDd6XFxcIj48L3BhdGg+PC9nPiA8L2RlZnM+PC9zdmc+IDwvaXJvbi1pY29uc2V0LXN2Zz5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24taWNvbnMvaXJvbi1pY29ucy5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cblxuPHNjcmlwdD5cbiAgLyoqXG4gIFBvbHltZXIuSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgZW5hYmxlcyBhIGN1c3RvbSBlbGVtZW50IHRvIGJlIGluY2x1ZGVkXG4gIGluIGFuIGBpcm9uLWZvcm1gLlxuXG4gIEV2ZW50cyBgaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXJgIGFuZCBgaXJvbi1mb3JtLWVsZW1lbnQtdW5yZWdpc3RlcmAgYXJlIG5vdCBmaXJlZCBvbiBQb2x5bWVyIDIuMC5cblxuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvclxuICAqL1xuICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGFkZGVkIHRvIGFuIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBpcm9uLWZvcm0tZWxlbWVudC1yZWdpc3RlclxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gYW4gYGlyb24tZm9ybWAuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24tZm9ybS1lbGVtZW50LXVucmVnaXN0ZXJcbiAgICAgICAqL1xuICAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgdXNlZCBpbiBhIGZvcm0sIGFcbiAgICAgICAqIGN1c3RvbSBlbGVtZW50IHRoYXQgdXNlcyB0aGlzIGJlaGF2aW9yIHNob3VsZCBhbHNvIHVzZVxuICAgICAgICogUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvciBhbmQgZGVmaW5lIGEgY3VzdG9tIHZhbGlkYXRpb24gbWV0aG9kLlxuICAgICAgICogT3RoZXJ3aXNlLCBhIGByZXF1aXJlZGAgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBjb25zaWRlcmVkIHZhbGlkLlxuICAgICAgICogSXQncyBhbHNvIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHRvIHByb3ZpZGUgYSB2aXN1YWwgc3R5bGUgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgKiB3aGVuIGl0cyB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGZvcm0gdGhhdCB0aGUgZWxlbWVudCBpcyByZWdpc3RlcmVkIHRvLlxuICAgICAgICovXG4gICAgICBfcGFyZW50Rm9ybToge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IFBvbHltZXIuRWxlbWVudCA/IG51bGwgOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIE5vdGU6IHRoZSBpcm9uLWZvcm0gdGhhdCB0aGlzIGVsZW1lbnQgYmVsb25ncyB0byB3aWxsIHNldCB0aGlzXG4gICAgICAvLyBlbGVtZW50J3MgX3BhcmVudEZvcm0gcHJvcGVydHkgd2hlbiBoYW5kbGluZyB0aGlzIGV2ZW50LlxuICAgICAgdGhpcy5maXJlKCdpcm9uLWZvcm0tZWxlbWVudC1yZWdpc3RlcicpO1xuICAgIH0sXG5cbiAgICBkZXRhY2hlZDogUG9seW1lci5FbGVtZW50ID8gbnVsbCA6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudEZvcm0pIHtcbiAgICAgICAgdGhpcy5fcGFyZW50Rm9ybS5maXJlKCdpcm9uLWZvcm0tZWxlbWVudC11bnJlZ2lzdGVyJywge3RhcmdldDogdGhpc30pO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5gPGlyb24taW5wdXQ+YCBpcyBhIHdyYXBwZXIgdG8gYSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQsIHRoYXQgYWRkcyB0d28td2F5IGJpbmRpbmdcbmFuZCBwcmV2ZW50aW9uIG9mIGludmFsaWQgaW5wdXQuIFRvIHVzZSBpdCwgeW91IG11c3QgZGlzdHJpYnV0ZSBhIG5hdGl2ZSBgPGlucHV0PmBcbnlvdXJzZWxmLiBZb3UgY2FuIGNvbnRpbnVlIHRvIHVzZSB0aGUgbmF0aXZlIGBpbnB1dGAgYXMgeW91IHdvdWxkIG5vcm1hbGx5OlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4gICAgPGlyb24taW5wdXQ+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGlzYWJsZWQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG4jIyMgVHdvLXdheSBiaW5kaW5nXG5cbkJ5IGRlZmF1bHQgeW91IGNhbiBvbmx5IGdldCBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCdzIGB2YWx1ZWBcbmR1ZSB0byB1c2VyIGlucHV0OlxuXG4gICAgPGlucHV0IHZhbHVlPVwie3tteVZhbHVlOjppbnB1dH19XCI+XG5cblRoaXMgbWVhbnMgdGhhdCBpZiB5b3UgaW1wZXJhdGl2ZWx5IHNldCB0aGUgdmFsdWUgKGkuZS4gYHNvbWVOYXRpdmVJbnB1dC52YWx1ZSA9ICdmb28nYCksXG5ubyBldmVudHMgd2lsbCBiZSBmaXJlZCBhbmQgdGhpcyBjaGFuZ2UgY2Fubm90IGJlIG9ic2VydmVkLlxuXG5gaXJvbi1pbnB1dGAgYWRkcyB0aGUgYGJpbmQtdmFsdWVgIHByb3BlcnR5IHRoYXQgbWlycm9ycyB0aGUgbmF0aXZlIGBpbnB1dGAncyAnYHZhbHVlYCBwcm9wZXJ0eTsgdGhpc1xucHJvcGVydHkgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuYGJpbmQtdmFsdWVgIHdpbGwgbm90aWZ5IGlmIGl0IGlzIGNoYW5nZWQgZWl0aGVyIGJ5IHVzZXIgaW5wdXQgb3IgYnkgc2NyaXB0LlxuXG4gICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7bXlWYWx1ZX19XCI+XG4gICAgICA8aW5wdXQ+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5Ob3RlOiB0aGlzIG1lYW5zIHRoYXQgaWYgeW91IHdhbnQgdG8gaW1wZXJhdGl2ZWx5IHNldCB0aGUgbmF0aXZlIGBpbnB1dGAncywgeW91IF9tdXN0X1xuc2V0IGBiaW5kLXZhbHVlYCBpbnN0ZWFkLCBzbyB0aGF0IHRoZSB3cmFwcGVyIGBpcm9uLWlucHV0YCBjYW4gYmUgbm90aWZpZWQuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbmBpcm9uLWlucHV0YCB1c2VzIHRoZSBuYXRpdmUgYGlucHV0YCdzIHZhbGlkYXRpb24uIEZvciBzaW1wbGljaXR5LCBgaXJvbi1pbnB1dGBcbmhhcyBhIGB2YWxpZGF0ZSgpYCBtZXRob2QgKHdoaWNoIGludGVybmFsbHkganVzdCBjaGVja3MgdGhlIGRpc3RyaWJ1dGVkIGBpbnB1dGAnc1xudmFsaWRpdHkpLCB3aGljaCBzZXRzIGFuIGBpbnZhbGlkYCBhdHRyaWJ1dGUgdGhhdCBjYW4gYWxzbyBiZSB1c2VkIGZvciBzdHlsaW5nLlxuXG5UbyB2YWxpZGF0ZSBhdXRvbWF0aWNhbGx5IGFzIHlvdSB0eXBlLCB5b3UgY2FuIHVzZSB0aGUgYGF1dG8tdmFsaWRhdGVgIGF0dHJpYnV0ZS5cblxuYGlyb24taW5wdXRgIGFsc28gZmlyZXMgYW4gYGlyb24taW5wdXQtdmFsaWRhdGVgIGV2ZW50IGFmdGVyIGB2YWxpZGF0ZSgpYCBpc1xuY2FsbGVkLiBZb3UgY2FuIHVzZSBpdCB0byBpbXBsZW1lbnQgYSBjdXN0b20gdmFsaWRhdG9yOlxuXG4gICAgdmFyIENhdHNPbmx5VmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGlyb25JbnB1dCkge1xuICAgICAgICB2YXIgdmFsaWQgPSAhaXJvbklucHV0LmJpbmRWYWx1ZSB8fCBpcm9uSW5wdXQuYmluZFZhbHVlID09PSAnY2F0JztcbiAgICAgICAgaXJvbklucHV0LmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaXJvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taW5wdXQtdmFsaWRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIENhdHNPbmx5LnZhbGlkYXRlKGlucHV0Mik7XG4gICAgfSk7XG5cbllvdSBjYW4gYWxzbyB1c2UgYW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYW4gW2BJcm9uVmFsaWRhdG9yQmVoYXZpb3JgXSgvZWxlbWVudC9Qb2x5bWVyRWxlbWVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvcikuXG5UaGlzIGV4YW1wbGUgY2FuIGFsc28gYmUgZm91bmQgaW4gdGhlIGRlbW8gZm9yIHRoaXMgZWxlbWVudDpcblxuICAgIDxpcm9uLWlucHV0IHZhbGlkYXRvcj1cImNhdHMtb25seVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFByZXZlbnRpbmcgaW52YWxpZCBpbnB1dFxuXG5JdCBtYXkgYmUgZGVzaXJhYmxlIHRvIG9ubHkgYWxsb3cgdXNlcnMgdG8gZW50ZXIgY2VydGFpbiBjaGFyYWN0ZXJzLiBZb3UgY2FuIHVzZSB0aGVcbmBhbGxvd2VkLXBhdHRlcm5gIGF0dHJpYnV0ZSB0byBhY2NvbXBsaXNoIHRoaXMuIFRoaXMgZmVhdHVyZVxuaXMgc2VwYXJhdGUgZnJvbSB2YWxpZGF0aW9uLCBhbmQgYGFsbG93ZWQtcGF0dGVybmAgZG9lcyBub3QgYWZmZWN0IGhvdyB0aGUgaW5wdXQgaXMgdmFsaWRhdGVkLlxuXG4gICAgLy8gT25seSBhbGxvdyB0eXBpbmcgZGlnaXRzLCBidXQgYSB2YWxpZCBpbnB1dCBoYXMgZXhhY3RseSA1IGRpZ2l0cy5cbiAgICA8aXJvbi1pbnB1dCBhbGxvd2VkLXBhdHRlcm49XCJbMC05XVwiPlxuICAgICAgPGlucHV0IHBhdHRlcm49XCJcXGR7NX1cIj5cbiAgICA8L2lyb24taW5wdXQ+XG5cbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24taW5wdXRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3QgaWQ9XCJjb250ZW50XCI+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdpcm9uLWlucHV0JyxcblxuICAgICAgYmVoYXZpb3JzOiBbXG4gICAgICAgIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JcbiAgICAgIF0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbmV2ZXIgYHZhbGlkYXRlKClgIGlzIGNhbGxlZC5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgaXJvbi1pbnB1dC12YWxpZGF0ZVxuICAgICAgICovXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlIHRoaXMgcHJvcGVydHkgaW5zdGVhZCBvZiBgdmFsdWVgIGZvciB0d28td2F5IGRhdGEgYmluZGluZywgb3IgdG9cbiAgICAgICAgICogc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGlucHV0LiAqKkRvIG5vdCoqIHVzZSB0aGUgZGlzdHJpYnV0ZWRcbiAgICAgICAgICogaW5wdXQncyBgdmFsdWVgIHByb3BlcnR5IHRvIHNldCBhIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZWQgcHJvcGVydHkgdGhhdCBlY2hvZXMgYGJpbmRWYWx1ZWAgKG1vc3RseSB1c2VkIGZvciBQb2x5bWVyIDEuMFxuICAgICAgICAgKiBiYWNrY29tcGF0aWJpbGl0eSwgaWYgeW91IHdlcmUgb25lLXdheSBiaW5kaW5nIHRvIHRoZSBQb2x5bWVyIDEuMFxuICAgICAgICAgKiBgaW5wdXQgaXM9XCJpcm9uLWlucHV0XCJgIHZhbHVlIGF0dHJpYnV0ZSkuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVWYWx1ZShiaW5kVmFsdWUpJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdleC1saWtlIGxpc3Qgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGFzIGlucHV0OyBhbGwgY2hhcmFjdGVycyBub3QgaW4gdGhlIGxpc3RcbiAgICAgICAgICogd2lsbCBiZSByZWplY3RlZC4gVGhlIHJlY29tbWVuZGVkIGZvcm1hdCBzaG91bGQgYmUgYSBsaXN0IG9mIGFsbG93ZWQgY2hhcmFjdGVycyxcbiAgICAgICAgICogZm9yIGV4YW1wbGUsIGBbYS16QS1aMC05ListITs6XWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgcGF0dGVybiByZXByZXNlbnRzIHRoZSBhbGxvd2VkIGNoYXJhY3RlcnMgZm9yIHRoZSBmaWVsZDsgYXMgdGhlIHVzZXIgaW5wdXRzIHRleHQsXG4gICAgICAgICAqIGVhY2ggaW5kaXZpZHVhbCBjaGFyYWN0ZXIgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgdGhlIHBhdHRlcm4gKHJhdGhlciB0aGFuIGNoZWNraW5nXG4gICAgICAgICAqIHRoZSBlbnRpcmUgdmFsdWUgYXMgYSB3aG9sZSkuIElmIGEgY2hhcmFjdGVyIGlzIG5vdCBhIG1hdGNoLCBpdCB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQYXN0ZWQgaW5wdXQgd2lsbCBoYXZlIGVhY2ggY2hhcmFjdGVyIGNoZWNrZWQgaW5kaXZpZHVhbGx5OyBpZiBhbnkgY2hhcmFjdGVyXG4gICAgICAgICAqIGRvZXNuJ3QgbWF0Y2ggYGFsbG93ZWRQYXR0ZXJuYCwgdGhlIGVudGlyZSBwYXN0ZWQgc3RyaW5nIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IGlmIHlvdSB3ZXJlIHVzaW5nIGBpcm9uLWlucHV0YCBpbiAxLjAsIHlvdSB3ZXJlIGFsc28gcmVxdWlyZWQgdG9cbiAgICAgICAgICogc2V0IGBwcmV2ZW50LWludmFsaWQtaW5wdXRgLiBUaGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgYXMgb2YgUG9seW1lciAyLjAsXG4gICAgICAgICAqIGFuZCB3aWxsIGJlIHNldCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaWYgYW4gYGFsbG93ZWRQYXR0ZXJuYCBpcyBwcm92aWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGFsbG93ZWRQYXR0ZXJuOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlIGFzIHlvdSB0eXBlLlxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1ZhbGlkYXRlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgICBcbiAgICAgICAvKipcbiAgICAgICAgKiBUaGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICovXG4gICAgICAgIF9pbnB1dEVsZW1lbnQ6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX2JpbmRWYWx1ZUNoYW5nZWQoYmluZFZhbHVlLCBfaW5wdXRFbGVtZW50KSdcbiAgICAgIF0sXG5cbiAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAnaW5wdXQnOiAnX29uSW5wdXQnLFxuICAgICAgICAna2V5cHJlc3MnOiAnX29uS2V5cHJlc3MnXG4gICAgICB9LFxuXG4gICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dCA9ICcnO1xuICAgICAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGFkZGVkIGF0IGEgbGF0ZXIgdGltZSwgdXBkYXRlIHRoZSBpbnRlcm5hbCByZWZlcmVuY2UuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gUG9seW1lci5kb20odGhpcykub2JzZXJ2ZU5vZGVzKGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgICB0aGlzLl9pbml0U2xvdHRlZElucHV0KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LFxuXG4gICAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgICAgIFBvbHltZXIuZG9tKHRoaXMpLnVub2JzZXJ2ZU5vZGVzKHRoaXMuX29ic2VydmVyKTtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgPGlucHV0PiBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBnZXQgaW5wdXRFbGVtZW50ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICAgIH0sXG5cbiAgICAgIF9pbml0U2xvdHRlZElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50ID0gdGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpcmUoJ2lyb24taW5wdXQtcmVhZHknKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldCBfcGF0dGVyblJlZ0V4cCgpIHtcbiAgICAgICAgdmFyIHBhdHRlcm47XG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuKSB7XG4gICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAodGhpcy5hbGxvd2VkUGF0dGVybik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHBhdHRlcm4gPSAvWzAtOS4sZS1dLztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9XG4gICAgICAgKi9cbiAgICAgIF9iaW5kVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbihiaW5kVmFsdWUsIGlucHV0RWxlbWVudCkge1xuICAgICAgICAvLyBUaGUgb2JzZXJ2ZXIgY291bGQgaGF2ZSBydW4gYmVmb3JlIGF0dGFjaGVkKCkgd2hlbiB3ZSBoYXZlIGFjdHVhbGx5IGluaXRpYWxpemVkXG4gICAgICAgIC8vIHRoaXMgcHJvcGVydHkuXG4gICAgICAgIGlmICghaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpbmRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChiaW5kVmFsdWUgIT09IGlucHV0RWxlbWVudC52YWx1ZSl7XG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBiaW5kVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYW51YWxseSBub3RpZnkgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIG5vdGlmeSB1bnRpbCBhZnRlciBzZXR0aW5nIHZhbHVlXG4gICAgICAgIHRoaXMuZmlyZSgnYmluZC12YWx1ZS1jaGFuZ2VkJywge3ZhbHVlOiBiaW5kVmFsdWV9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9vbklucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTmVlZCB0byB2YWxpZGF0ZSBlYWNoIG9mIHRoZSBjaGFyYWN0ZXJzIHBhc3RlZCBpZiB0aGV5IGhhdmVuJ3RcbiAgICAgICAgLy8gYmVlbiB2YWxpZGF0ZWQgaW5zaWRlIGBfb25LZXlwcmVzc2AgYWxyZWFkeS5cbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZFBhdHRlcm4gJiYgIXRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCkge1xuICAgICAgICAgIHZhciB2YWxpZCA9IHRoaXMuX2NoZWNrUGF0dGVyblZhbGlkaXR5KCk7XG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyKCdJbnZhbGlkIHN0cmluZyBvZiBjaGFyYWN0ZXJzIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWxpZElucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgX2lzUHJpbnRhYmxlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyBXaGF0IGEgY29udHJvbC9wcmludGFibGUgY2hhcmFjdGVyIGlzIHZhcmllcyB3aWxkbHkgYmFzZWQgb24gdGhlIGJyb3dzZXIuXG4gICAgICAgIC8vIC0gbW9zdCBjb250cm9sIGNoYXJhY3RlcnMgKGFycm93cywgYmFja3NwYWNlKSBkbyBub3Qgc2VuZCBhIGBrZXlwcmVzc2AgZXZlbnRcbiAgICAgICAgLy8gICBpbiBDaHJvbWUsIGJ1dCB0aGUgKmRvKiBvbiBGaXJlZm94XG4gICAgICAgIC8vIC0gaW4gRmlyZWZveCwgd2hlbiB0aGV5IGRvIHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50LCBjb250cm9sIGNoYXJzIGhhdmVcbiAgICAgICAgLy8gICBhIGNoYXJDb2RlID0gMCwga2V5Q29kZSA9IHh4IChmb3IgZXguIDQwIGZvciBkb3duIGFycm93KVxuICAgICAgICAvLyAtIHByaW50YWJsZSBjaGFyYWN0ZXJzIGFsd2F5cyBzZW5kIGEga2V5cHJlc3MgZXZlbnQuXG4gICAgICAgIC8vIC0gaW4gRmlyZWZveCwgcHJpbnRhYmxlIGNoYXJzIGFsd2F5cyBoYXZlIGEga2V5Q29kZSA9IDAuIEluIENocm9tZSwgdGhlIGtleUNvZGVcbiAgICAgICAgLy8gICBhbHdheXMgbWF0Y2hlcyB0aGUgY2hhckNvZGUuXG4gICAgICAgIC8vIE5vbmUgb2YgdGhpcyBtYWtlcyBhbnkgc2Vuc2UuXG5cbiAgICAgICAgLy8gRm9yIHRoZXNlIGtleXMsIEFTQ0lJIGNvZGUgPT0gYnJvd3NlciBrZXljb2RlLlxuICAgICAgICB2YXIgYW55Tm9uUHJpbnRhYmxlID1cbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA4KSAgIHx8ICAvLyBiYWNrc3BhY2VcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA5KSAgIHx8ICAvLyB0YWJcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxMykgIHx8ICAvLyBlbnRlclxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDI3KTsgICAgIC8vIGVzY2FwZVxuXG4gICAgICAgIC8vIEZvciB0aGVzZSBrZXlzLCBtYWtlIHN1cmUgaXQncyBhIGJyb3dzZXIga2V5Y29kZSBhbmQgbm90IGFuIEFTQ0lJIGNvZGUuXG4gICAgICAgIHZhciBtb3pOb25QcmludGFibGUgPVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDE5KSAgfHwgIC8vIHBhdXNlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjApICB8fCAgLy8gY2FwcyBsb2NrXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDUpICB8fCAgLy8gaW5zZXJ0XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNDYpICB8fCAgLy8gZGVsZXRlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTQ0KSB8fCAgLy8gbnVtIGxvY2tcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDUpIHx8ICAvLyBzY3JvbGwgbG9ja1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID4gMzIgJiYgZXZlbnQua2V5Q29kZSA8IDQxKSAgIHx8IC8vIHBhZ2UgdXAvZG93biwgZW5kLCBob21lLCBhcnJvd3NcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDExMSAmJiBldmVudC5rZXlDb2RlIDwgMTI0KTsgLy8gZm4ga2V5c1xuXG4gICAgICAgIHJldHVybiAhYW55Tm9uUHJpbnRhYmxlICYmICEoZXZlbnQuY2hhckNvZGUgPT0gMCAmJiBtb3pOb25QcmludGFibGUpO1xuICAgICAgfSxcblxuICAgICAgX29uS2V5cHJlc3M6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxvd2VkUGF0dGVybiAmJiB0aGlzLnR5cGUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWdleHAgPSB0aGlzLl9wYXR0ZXJuUmVnRXhwO1xuICAgICAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGtleXMgYW5kIGJhY2tzcGFjZVxuICAgICAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoZSBwYXR0ZXJuIGVpdGhlciBoZXJlIG9yIGluIGBfb25JbnB1dGAsIGJ1dCBub3QgaW4gYm90aC5cbiAgICAgICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGhpc0NoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJpbnRhYmxlKGV2ZW50KSAmJiAhcmVnZXhwLnRlc3QodGhpc0NoYXIpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoJ0ludmFsaWQgY2hhcmFjdGVyICcgKyB0aGlzQ2hhciArICcgbm90IGVudGVyZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9jaGVja1BhdHRlcm5WYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWdleHAgPSB0aGlzLl9wYXR0ZXJuUmVnRXhwO1xuICAgICAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXJlZ2V4cC50ZXN0KHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIFRoZSB2YWxpZGF0b3IgcHJvdmlkZWQgaW4gYHZhbGlkYXRvcmAgd2lsbCBiZSB1c2VkIGZpcnN0LFxuICAgICAgICogdGhlbiBhbnkgY29uc3RyYWludHMuXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2UgdGhlIG5lc3RlZCBpbnB1dCdzIG5hdGl2ZSB2YWxpZGl0eS5cbiAgICAgICAgdmFyIHZhbGlkID0gIHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICAvLyBPbmx5IGRvIGV4dHJhIGNoZWNraW5nIGlmIHRoZSBicm93c2VyIHRob3VnaHQgdGhpcyB3YXMgdmFsaWQuXG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgIC8vIEVtcHR5LCByZXF1aXJlZCBpbnB1dCBpcyBpbnZhbGlkXG4gICAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5iaW5kVmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yLnZhbGlkYXRlLmNhbGwodGhpcywgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXZhbGlkYXRlJyk7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH0sXG5cbiAgICAgIF9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXI6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywgeyB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVWYWx1ZTogZnVuY3Rpb24oYmluZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBiaW5kVmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjwhLS1cbmBpcm9uLWExMXktYW5ub3VuY2VyYCBpcyBhIHNpbmdsZXRvbiBlbGVtZW50IHRoYXQgaXMgaW50ZW5kZWQgdG8gYWRkIGExMXlcbnRvIGZlYXR1cmVzIHRoYXQgcmVxdWlyZSBvbi1kZW1hbmQgYW5ub3VuY2VtZW50IGZyb20gc2NyZWVuIHJlYWRlcnMuIEluXG5vcmRlciB0byBtYWtlIHVzZSBvZiB0aGUgYW5ub3VuY2VyLCBpdCBpcyBiZXN0IHRvIHJlcXVlc3QgaXRzIGF2YWlsYWJpbGl0eVxuaW4gdGhlIGFubm91bmNpbmcgZWxlbWVudC5cblxuRXhhbXBsZTpcblxuICAgIFBvbHltZXIoe1xuXG4gICAgICBpczogJ3gtY2hhdHR5JyxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgY3JlYXRlIHRoZSBzaW5nbGV0b24gZWxlbWVudCBpZiBpdCBoYXMgbm90XG4gICAgICAgIC8vIGJlZW4gY3JlYXRlZCB5ZXQ6XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG5BZnRlciB0aGUgYGlyb24tYTExeS1hbm5vdW5jZXJgIGhhcyBiZWVuIG1hZGUgYXZhaWxhYmxlLCBlbGVtZW50cyBjYW5cbm1ha2UgYW5ub3VuY2VzIGJ5IGZpcmluZyBidWJibGluZyBgaXJvbi1hbm5vdW5jZWAgZXZlbnRzLlxuXG5FeGFtcGxlOlxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywge1xuICAgICAgdGV4dDogJ1RoaXMgaXMgYW4gYW5ub3VuY2VtZW50ISdcbiAgICB9LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbk5vdGU6IGFubm91bmNlbWVudHMgYXJlIG9ubHkgYXVkaWJsZSBpZiB5b3UgaGF2ZSBhIHNjcmVlbiByZWFkZXIgZW5hYmxlZC5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1hMTF5LWFubm91bmNlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsMHB4LDBweCwwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBhcmlhLWxpdmUkPVwiW1ttb2RlXV1cIj5bW190ZXh0XV08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyID0gUG9seW1lcih7XG4gICAgICAgIGlzOiAnaXJvbi1hMTF5LWFubm91bmNlcicsXG5cbiAgICAgICAgcHJvcGVydGllczoge1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIHZhbHVlIG9mIG1vZGUgaXMgdXNlZCB0byBzZXQgdGhlIGBhcmlhLWxpdmVgIGF0dHJpYnV0ZVxuICAgICAgICAgICAqIGZvciB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkLiBWYWxpZCB2YWx1ZXMgYXJlOiBgb2ZmYCxcbiAgICAgICAgICAgKiBgcG9saXRlYCBhbmQgYGFzc2VydGl2ZWAuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdwb2xpdGUnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIF90ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24tYW5ub3VuY2UnLCB0aGlzLl9vbklyb25Bbm5vdW5jZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2F1c2UgYSB0ZXh0IHN0cmluZyB0byBiZSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGFubm91bmNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGFubm91bmNlOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgICAgICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9vbklyb25Bbm5vdW5jZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFubm91bmNlKGV2ZW50LmRldGFpbC50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gbnVsbDtcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWExMXktYW5ub3VuY2VyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1tZXRhL2lyb24tbWV0YS5odG1sXCI+XG5cbjxzY3JpcHQ+XG4gIC8qKlxuICAgKiBTaW5nbGV0b24gSXJvbk1ldGEgaW5zdGFuY2UuXG4gICAqL1xuICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIGBVc2UgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGVsZW1lbnQgdGhhdCB2YWxpZGF0ZXMgdXNlciBpbnB1dC5cbiAgICogVXNlIHRoZSByZWxhdGVkIGBQb2x5bWVyLklyb25WYWxpZGF0b3JCZWhhdmlvcmAgdG8gYWRkIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIHRvIGFuIGlyb24taW5wdXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGFuIGA8aXJvbi1mb3JtPmAgZWxlbWVudCB2YWxpZGF0ZXMgaXRzIGZpZWxkcyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHN1Ym1pdCBidXR0b24uXG4gICAqIFRvIHZhbGlkYXRlIGEgZm9ybSBpbXBlcmF0aXZlbHksIGNhbGwgdGhlIGZvcm0ncyBgdmFsaWRhdGUoKWAgbWV0aG9kLCB3aGljaCBpbiB0dXJuIHdpbGxcbiAgICogY2FsbCBgdmFsaWRhdGUoKWAgb24gYWxsIGl0cyBjaGlsZHJlbi4gQnkgdXNpbmcgYFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgLCB5b3VyXG4gICAqIGN1c3RvbSBlbGVtZW50IHdpbGwgZ2V0IGEgcHVibGljIGB2YWxpZGF0ZSgpYCwgd2hpY2hcbiAgICogd2lsbCByZXR1cm4gdGhlIHZhbGlkaXR5IG9mIHRoZSBlbGVtZW50LCBhbmQgYSBjb3JyZXNwb25kaW5nIGBpbnZhbGlkYCBhdHRyaWJ1dGUsXG4gICAqIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nLlxuICAgKlxuICAgKiBUbyBpbXBsZW1lbnQgdGhlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIG9mIHlvdXIgZWxlbWVudCwgeW91IG11c3Qgb3ZlcnJpZGVcbiAgICogdGhlIHByb3RlY3RlZCBgX2dldFZhbGlkaXR5KClgIG1ldGhvZCBvZiB0aGlzIGJlaGF2aW91ciwgcmF0aGVyIHRoYW4gYHZhbGlkYXRlKClgLlxuICAgKiBTZWUgW3RoaXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1mb3JtL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLWVsZW1lbnQuaHRtbClcbiAgICogZm9yIGFuIGV4YW1wbGUuXG4gICAqXG4gICAqICMjIyBBY2Nlc3NpYmlsaXR5XG4gICAqXG4gICAqIENoYW5naW5nIHRoZSBgaW52YWxpZGAgcHJvcGVydHksIGVpdGhlciBtYW51YWxseSBvciBieSBjYWxsaW5nIGB2YWxpZGF0ZSgpYCB3aWxsIHVwZGF0ZSB0aGVcbiAgICogYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlLlxuICAgKlxuICAgKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgICogQHBvbHltZXJCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvciA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS5cbiAgICAgICAqL1xuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBsYXN0IGNhbGwgdG8gYHZhbGlkYXRlYCBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJ1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSA9IG5ldyBQb2x5bWVyLklyb25NZXRhKHt0eXBlOiAndmFsaWRhdG9yJ30pO1xuICAgIH0sXG5cbiAgICBfaW52YWxpZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUmVjb21wdXRlIHRoaXMgZXZlcnkgdGltZSBpdCdzIG5lZWRlZCwgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIHRoZVxuICAgICAqIHVuZGVybHlpbmcgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhIGhhcyBjaGFuZ2VkLiAqL1xuICAgIGdldCBfdmFsaWRhdG9yKCkge1xuICAgICAgcmV0dXJuIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhICYmXG4gICAgICAgICAgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEuYnlLZXkodGhpcy52YWxpZGF0b3IpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWxpZGF0b3IgYHZhbGlkYXRvcmAgZXhpc3RzLlxuICAgICAqL1xuICAgIGhhc1ZhbGlkYXRvcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yICE9IG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHVwZGF0ZXMgYGludmFsaWRgLiBJZiB5b3Ugd2FudFxuICAgICAqIHlvdXIgZWxlbWVudCB0byBoYXZlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2Q7XG4gICAgICogb3ZlcnJpZGUgYF9nZXRWYWxpZGl0eSh2YWx1ZSlgIGluc3RlYWQuXG5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgRGVwcmVjYXRlZDogVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC4gQnkgZGVmYXVsdCxcbiAgICAgKiBpdCBpcyBwYXNzZWQgdG8gdGhlIHZhbGlkYXRvcidzIGB2YWxpZGF0ZSgpYCBmdW5jdGlvbiwgaWYgYSB2YWxpZGF0b3IgaXMgc2V0LlxuICAgICAqIElmIHRoaXMgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZCwgdGhlbiB0aGUgZWxlbWVudCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgICAgKiBpcyB1c2VkLCBpZiBpdCBleGlzdHMuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgICAqL1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gSWYgdGhpcyBpcyBhbiBlbGVtZW50IHRoYXQgYWxzbyBoYXMgYSB2YWx1ZSBwcm9wZXJ0eSwgYW5kIHRoZXJlIHdhc1xuICAgICAgLy8gbm8gZXhwbGljaXQgdmFsdWUgYXJndW1lbnQgcGFzc2VkLCB1c2UgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdGhpcy5fZ2V0VmFsaWRpdHkodGhpcy52YWx1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh2YWx1ZSk7XG4gICAgICByZXR1cm4gIXRoaXMuaW52YWxpZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuICBCeSBkZWZhdWx0LCBpdCBpcyBwYXNzZWRcbiAgICAgKiB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuIFlvdVxuICAgICAqIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBpbXBsZW1lbnQgY3VzdG9tIHZhbGlkaXR5XG4gICAgICogbG9naWMgZm9yIHlvdXIgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC5cbiAgICAgKi9cblxuICAgIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmhhc1ZhbGlkYXRvcigpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4gIC8vIEdlbmVyYXRlIHVuaXF1ZSwgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIElEcyBmb3IgbGFiZWxzIChuZWVkZWQgYnlcbiAgLy8gYXJpYS1sYWJlbGxlZGJ5KSBhbmQgYWRkLW9ucy5cbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyID0ge307XG4gIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCA9IDE7XG4gIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0QWRkb25JRCA9IDE7XG5cbiAgLyoqXG4gICAqIFVzZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIHRvIGltcGxlbWVudCBpbnB1dHMgd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBUaGlzXG4gICAqIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGJ5IGA8cGFwZXItaW5wdXQ+YC4gSXQgZXhwb3NlcyBhIG51bWJlciBvZiBwcm9wZXJ0aWVzIGZyb21cbiAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBhbmQgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gIGFuZCB0aGV5IHNob3VsZCBiZSBib3VuZCBpbiB5b3VyXG4gICAqIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGUgaW5wdXQgZWxlbWVudCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGBpbnB1dEVsZW1lbnRgIHByb3BlcnR5IGlmIHlvdSBuZWVkIHRvIGFjY2Vzc1xuICAgKiBwcm9wZXJ0aWVzIG9yIG1ldGhvZHMgdGhhdCBhcmUgbm90IGV4cG9zZWQuXG4gICAqIEBwb2x5bWVyQmVoYXZpb3IgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JcbiAgICovXG4gIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9ySW1wbCA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgaW5wdXQgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgY2hhbmdlXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGFiZWwgZm9yIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogYDxsYWJlbD5gJ3MgY29udGVudCBhbmQgYGhpZGRlbmAgcHJvcGVydHksIGUuZy5cbiAgICAgICAqIGA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPmAgaW4geW91ciBgdGVtcGxhdGVgXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aXJvbi1pbnB1dD5gJ3MgYGJpbmRWYWx1ZWBcbiAgICAgICAqIHByb3BlcnR5LCBvciB0aGUgdmFsdWUgcHJvcGVydHkgb2YgeW91ciBpbnB1dCB0aGF0IGlzIGBub3RpZnk6dHJ1ZWAuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiBib3RoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBkaXNhYmxlZGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byBib3RoIHRoZVxuICAgICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGFuZCB0aGUgaW5wdXQncyBgaW52YWxpZGAgcHJvcGVydHkuXG4gICAgICAgKlxuICAgICAgICogSWYgYGF1dG9WYWxpZGF0ZWAgaXMgdHJ1ZSwgdGhlIGBpbnZhbGlkYCBhdHRyaWJ1dGUgaXMgbWFuYWdlZCBhdXRvbWF0aWNhbGx5LFxuICAgICAgICogd2hpY2ggY2FuIGNsb2JiZXIgYXR0ZW1wdHMgdG8gbWFuYWdlIGl0IG1hbnVhbGx5LlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0aGlzIHRvIHNwZWNpZnkgdGhlIHBhdHRlcm4gYWxsb3dlZCBieSBgcHJldmVudEludmFsaWRJbnB1dGAuIElmXG4gICAgICAgKiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhbGxvd2VkUGF0dGVybmBcbiAgICAgICAqIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhbGxvd2VkUGF0dGVybjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGlucHV0LiBUaGUgc3VwcG9ydGVkIHR5cGVzIGFyZSB0aGVcbiAgICAgICAqIFtuYXRpdmUgaW5wdXQncyB0eXBlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fPGlucHV0Pl90eXBlcykuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsXG4gICAgICAgKiBiaW5kIHRoaXMgdG8gdGhlIChQb2x5bWVyIDEpIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIG9yIChQb2x5bWVyIDIpXG4gICAgICAgKiBgPGlyb24taW5wdXQ+YCdzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRhdGFsaXN0IG9mIHRoZSBpbnB1dCAoaWYgYW55KS4gVGhpcyBzaG91bGQgbWF0Y2ggdGhlIGlkIG9mIGFuIGV4aXN0aW5nIGA8ZGF0YWxpc3Q+YC5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGxpc3RgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHBhdHRlcm4gdG8gdmFsaWRhdGUgdGhlIGBpbnB1dGAgd2l0aC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHBhdHRlcm5gIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBwYXR0ZXJuOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlcXVpcmVkYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCxcbiAgICAgICAqIGJpbmQgdGhpcyB0byB0aGUgYDxwYXBlci1pbnB1dC1lcnJvcj5gJ3MgY29udGVudCwgaWYgdXNpbmcuXG4gICAgICAgKi9cbiAgICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gc2hvdyBhIGNoYXJhY3RlciBjb3VudGVyLlxuICAgICAgICovXG4gICAgICBjaGFyQ291bnRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgbm9MYWJlbEZsb2F0YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbm9MYWJlbEZsb2F0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgdGhlIGxhYmVsLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZS4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhdXRvVmFsaWRhdGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE5hbWUgb2YgdGhlIHZhbGlkYXRvciB0byB1c2UuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGB2YWxpZGF0b3JgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvLyBIVE1MSW5wdXRFbGVtZW50IGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvbXBsZXRlYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdvZmYnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9mb2N1c2AgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9mb2N1czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19hdXRvZm9jdXNDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBpbnB1dG1vZGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBpbnB1dG1vZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtaW5sZW5ndGhgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtaW5sZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhsZW5ndGhgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtaW5gIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtYXhpbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICAgKiBDYW4gYmUgYSBTdHJpbmcgKGUuZy4gYFwiMjAwMC0wMS0wMVwiYCkgb3IgYSBOdW1iZXIgKGUuZy4gYDJgKS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGltaXRzIHRoZSBudW1lcmljIG9yIGRhdGUtdGltZSBpbmNyZW1lbnRzLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc3RlcGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG5hbWVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHBsYWNlaG9sZGVyIHN0cmluZyBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwuIElmIHRoaXMgaXMgc2V0LCB0aGUgbGFiZWwgd2lsbCBhbHdheXMgZmxvYXQuXG4gICAgICAgKi9cbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gbmVlZCB0byBzZXQgYSBkZWZhdWx0IHNvIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbCBpcyBydW5cbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlYWRvbmx5YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHNpemVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBzaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLy8gTm9uc3RhbmRhcmQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY2FwaXRhbGl6ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9jYXBpdGFsaXplOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdub25lJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY29ycmVjdGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb3JyZWN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdvZmYnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9zYXZlYCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPXNlYXJjaC5cbiAgICAgICAqL1xuICAgICAgYXV0b3NhdmU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlc3VsdHNgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAgICovXG4gICAgICByZXN1bHRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhY2NlcHRgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgICAqL1xuICAgICAgYWNjZXB0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG11bHRpcGxlYCBwcm9wZXJ0eSxcbiAgICAgICAqIHVzZWQgd2l0aCB0eXBlPWZpbGUuXG4gICAgICAgKi9cbiAgICAgIG11bHRpcGxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9hcmlhRGVzY3JpYmVkQnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIF9hcmlhTGFiZWxsZWRCeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIGxpc3RlbmVyczoge1xuICAgICAgJ2FkZG9uLWF0dGFjaGVkJzogJ19vbkFkZG9uQXR0YWNoZWQnLFxuICAgIH0sXG5cbiAgICBrZXlCaW5kaW5nczoge1xuICAgICAgJ3NoaWZ0K3RhYjprZXlkb3duJzogJ19vblNoaWZ0VGFiRG93bidcbiAgICB9LFxuXG4gICAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICAgIHRhYmluZGV4OiAwXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBUaGVzZSB0eXBlcyBoYXZlIHNvbWUgZGVmYXVsdCBwbGFjZWhvbGRlciB0ZXh0OyBvdmVybGFwcGluZ1xuICAgICAgLy8gdGhlIGxhYmVsIG9uIHRvcCBvZiBpdCBsb29rcyB0ZXJyaWJsZS4gQXV0by1mbG9hdCB0aGUgbGFiZWwgaW4gdGhpcyBjYXNlLlxuICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQgPSBbXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsXG4gICAgICAgICAgXCJ0aW1lXCIsIFwid2Vla1wiLCBcImZpbGVcIl07XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUFyaWFMYWJlbGxlZEJ5KCk7XG5cbiAgICAgIC8vIEluIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCwgdGhpcyBpcyBoYW5kbGVkIGluIGBvbklyb25JbnB1dFJlYWR5YCxcbiAgICAgIC8vIGkuZS4gYWZ0ZXIgdGhlIG5hdGl2ZSBpbnB1dCBoYXMgZmluaXNoZWQgZGlzdHJpYnV0aW5nLiBJbiB0aGUgMS4wIHZlcnNpb24sXG4gICAgICAvLyB0aGUgaW5wdXQgaXMgaW4gdGhlIHNoYWRvdyB0cmVlLCBzbyBpdCdzIGFscmVhZHkgYXZhaWxhYmxlLlxuICAgICAgaWYgKCFQb2x5bWVyLkVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50LnR5cGUpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXBwZW5kU3RyaW5nV2l0aFNwYWNlOiBmdW5jdGlvbihzdHIsIG1vcmUpIHtcbiAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyICsgJyAnICsgbW9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG1vcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIHRhcmdldCA9IFBvbHltZXIuZG9tKGV2ZW50KS5yb290VGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5pZCkge1xuICAgICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPSB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCB0YXJnZXQuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlkID0gJ3BhcGVyLWlucHV0LWFkZC1vbi0nICsgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRBZGRvbklEKys7XG4gICAgICAgIHRhcmdldC5pZCA9IGlkO1xuICAgICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPSB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCBpZCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgaW5wdXQgZWxlbWVudCBhbmQgc2V0cyBhbiBlcnJvciBzdHlsZSBpZiBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGb3J3YXJkIGZvY3VzIHRvIGlucHV0RWxlbWVudC4gT3ZlcnJpZGVuIGZyb20gSXJvbkNvbnRyb2xTdGF0ZS5cbiAgICAgKi9cbiAgICBfZm9jdXNCbHVySGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZS5fZm9jdXNCbHVySGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZm9jdXMgdG8gdGhlIG5lc3RlZCBpbnB1dC5cbiAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIXRoaXMuX3NoaWZ0VGFiUHJlc3NlZCAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgc2hpZnQrdGFiIGtleXByZXNzIGlzIGRldGVjdGVkIGJ5IHRoZSBtZW51LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAgICovXG4gICAgX29uU2hpZnRUYWJEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIG9sZFRhYkluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBvbGRUYWJJbmRleCk7XG4gICAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgfSwgMSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIGBhdXRvVmFsaWRhdGVgIGlzIHRydWUsIHRoZW4gdmFsaWRhdGVzIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIF9oYW5kbGVBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKVxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmVzIHRoZSBjdXJzb3IgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIGFmdGVyIHVwZGF0aW5nIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHNhdmVkLlxuICAgICAqL1xuICAgIHVwZGF0ZVZhbHVlQW5kUHJlc2VydmVDYXJldDogZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgIC8vIE5vdCBhbGwgZWxlbWVudHMgbWlnaHQgaGF2ZSBzZWxlY3Rpb24sIGFuZCBldmVuIGlmIHRoZXkgaGF2ZSB0aGVcbiAgICAgIC8vIHJpZ2h0IHByb3BlcnRpZXMsIGFjY2Vzc2luZyB0aGVtIG1pZ2h0IHRocm93IGFuIGV4Y2VwdGlvbiAobGlrZSBmb3JcbiAgICAgIC8vIDxpbnB1dCB0eXBlPW51bWJlcj4pXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIFRoZSBjdXJzb3IgYXV0b21hdGljYWxseSBqdW1wcyB0byB0aGUgZW5kIGFmdGVyIHJlLXNldHRpbmcgdGhlIHZhbHVlLFxuICAgICAgICAvLyBzbyByZXN0b3JlIGl0IHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEp1c3Qgc2V0IHRoZSB2YWx1ZSBhbmQgZ2l2ZSB1cCBvbiB0aGUgY2FyZXQuXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsOiBmdW5jdGlvbihhbHdheXNGbG9hdExhYmVsLCBwbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyIHx8IGFsd2F5c0Zsb2F0TGFiZWw7XG4gICAgfSxcblxuICAgIF91cGRhdGVBcmlhTGFiZWxsZWRCeTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFiZWwgPSBQb2x5bWVyLmRvbSh0aGlzLnJvb3QpLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgIHRoaXMuX2FyaWFMYWJlbGxlZEJ5ID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBsYWJlbGxlZEJ5O1xuICAgICAgaWYgKGxhYmVsLmlkKSB7XG4gICAgICAgIGxhYmVsbGVkQnkgPSBsYWJlbC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsbGVkQnkgPSAncGFwZXItaW5wdXQtbGFiZWwtJyArIFBvbHltZXIuUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCsrO1xuICAgICAgICBsYWJlbC5pZCA9IGxhYmVsbGVkQnk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9IGxhYmVsbGVkQnk7XG4gICAgfSxcblxuICAgIF9vbkNoYW5nZTpmdW5jdGlvbihldmVudCkge1xuICAgICAgLy8gSW4gdGhlIFNoYWRvdyBET00sIHRoZSBgY2hhbmdlYCBldmVudCBpcyBub3QgbGVha2VkIGludG8gdGhlXG4gICAgICAvLyBhbmNlc3RvciB0cmVlLCBzbyB3ZSBtdXN0IGRvIHRoaXMgbWFudWFsbHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHRoaXMuZmlyZShldmVudC50eXBlLCB7c291cmNlRXZlbnQ6IGV2ZW50fSwge1xuICAgICAgICAgIG5vZGU6IHRoaXMsXG4gICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBldmVudC5jYW5jZWxhYmxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXV0b2ZvY3VzQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBGaXJlZm94IGRvZXNuJ3QgcmVzcGVjdCB0aGUgYXV0b2ZvY3VzIGF0dHJpYnV0ZSBpZiBpdCdzIGFwcGxpZWQgYWZ0ZXJcbiAgICAgIC8vIHRoZSBwYWdlIGlzIGxvYWRlZCAoQ2hyb21lL1dlYktpdCBkbyByZXNwZWN0IGl0KSwgcHJldmVudGluZyBhblxuICAgICAgLy8gYXV0b2ZvY3VzIGF0dHJpYnV0ZSBzcGVjaWZpZWQgaW4gbWFya3VwIGZyb20gdGFraW5nIGVmZmVjdCB3aGVuIHRoZVxuICAgICAgLy8gZWxlbWVudCBpcyB1cGdyYWRlZC4gQXMgYSB3b3JrYXJvdW5kLCBpZiB0aGUgYXV0b2ZvY3VzIHByb3BlcnR5IGlzIHNldCxcbiAgICAgIC8vIGFuZCB0aGUgZm9jdXMgaGFzbid0IGFscmVhZHkgYmVlbiBtb3ZlZCBlbHNld2hlcmUsIHdlIHRha2UgZm9jdXMuXG4gICAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgdGhpcy5fZm9jdXNhYmxlRWxlbWVudCkge1xuXG4gICAgICAgIC8vIEluIElFIDExLCB0aGUgZGVmYXVsdCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiBiZSB0aGUgcGFnZSdzXG4gICAgICAgIC8vIG91dGVybW9zdCBodG1sIGVsZW1lbnQsIGJ1dCB0aGVyZSBhcmUgYWxzbyBjYXNlcyAodW5kZXIgdGhlXG4gICAgICAgIC8vIHBvbHlmaWxsPykgaW4gd2hpY2ggdGhlIGFjdGl2ZUVsZW1lbnQgaXMgbm90IGEgcmVhbCBIVE1MRWxlbWVudCwgYnV0XG4gICAgICAgIC8vIGp1c3QgYSBwbGFpbiBvYmplY3QuIFdlIGlkZW50aWZ5IHRoZSBsYXR0ZXIgY2FzZSBhcyBoYXZpbmcgbm8gdmFsaWRcbiAgICAgICAgLy8gYWN0aXZlRWxlbWVudC5cbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB2YXIgaXNBY3RpdmVFbGVtZW50VmFsaWQgPSBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gSGFzIHNvbWUgb3RoZXIgZWxlbWVudCBoYXMgYWxyZWFkeSB0YWtlbiB0aGUgZm9jdXM/XG4gICAgICAgIHZhciBpc1NvbWVFbGVtZW50QWN0aXZlID0gaXNBY3RpdmVFbGVtZW50VmFsaWQgJiZcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLyogSUUgMTEgKi9cbiAgICAgICAgaWYgKCFpc1NvbWVFbGVtZW50QWN0aXZlKSB7XG4gICAgICAgICAgLy8gTm8gc3BlY2lmaWMgZWxlbWVudCBoYXMgdGFrZW4gdGhlIGZvY3VzIHlldCwgc28gd2UgY2FuIHRha2UgaXQuXG4gICAgICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBAcG9seW1lckJlaGF2aW9yICovXG4gIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yID0gW1xuICAgIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBQb2x5bWVyLklyb25BMTF5S2V5c0JlaGF2aW9yLFxuICAgIFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9ySW1wbFxuICBdO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5odG1sXCI+XG5cbjwhLS1cbmA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyPmAgaXMgYSBjaGFyYWN0ZXIgY291bnRlciBmb3IgdXNlIHdpdGggYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gSXRcbnNob3dzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBlbnRlcmVkIGluIHRoZSBpbnB1dCBhbmQgdGhlIG1heCBsZW5ndGggaWYgaXQgaXMgc3BlY2lmaWVkLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XCIyMFwiPlxuICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlcj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBtaXhpbiBpcyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHwgYHt9YFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaW5wdXQtY2hhci1jb3VudGVyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY2hhci1jb3VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNwYW4+W1tfY2hhckNvdW50ZXJTdHJdXTwvc3Bhbj5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cblxuPHNjcmlwdD5cbiAgUG9seW1lcih7XG4gICAgaXM6ICdwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXInLFxuXG4gICAgYmVoYXZpb3JzOiBbXG4gICAgICBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yXG4gICAgXSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIF9jaGFyQ291bnRlclN0cjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnMCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBvdmVycmlkZXMgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpbiBQYXBlcklucHV0QWRkb25CZWhhdmlvci5cbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAgICogICBpbnZhbGlkOiBib29sZWFuXG4gICAgICogfX0gc3RhdGUgLVxuICAgICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqICAgICB2YWx1ZTogVGhlIGlucHV0IHZhbHVlLlxuICAgICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIGlmICghc3RhdGUuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RhdGUudmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgICAgdmFyIGNvdW50ZXIgPSBzdGF0ZS52YWx1ZS50b1N0cmluZygpLmxlbmd0aC50b1N0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGUuaW5wdXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbWF4bGVuZ3RoJykpIHtcbiAgICAgICAgY291bnRlciArPSAnLycgKyBzdGF0ZS5pbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2hhckNvdW50ZXJTdHIgPSBjb3VudGVyO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBhIGNvbnRhaW5lciBmb3IgYSBgPGxhYmVsPmAsIGFuIGA8aXJvbi1pbnB1dD5gIG9yXG5gPHRleHRhcmVhPmAgYW5kIG9wdGlvbmFsIGFkZC1vbiBlbGVtZW50cyBzdWNoIGFzIGFuIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyXG5jb3VudGVyLCB1c2VkIHRvIGltcGxlbWVudCBNYXRlcmlhbCBEZXNpZ24gdGV4dCBmaWVsZHMuXG5cbkZvciBleGFtcGxlOlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgPGlyb24taW5wdXQgc2xvdD1cImlucHV0XCI+XG4gICAgICAgIDxpbnB1dD5cbiAgICAgIDwvaXJvbi1pbnB1dD5cbiAgICAgIC8vIEluIFBvbHltZXIgMS4wLCB5b3Ugd291bGQgdXNlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgc2xvdD1cImlucHV0XCI+YCBpbnN0ZWFkIG9mIHRoZSBhYm92ZS5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuWW91IGNhbiBzdHlsZSB0aGUgbmVzdGVkIDxpbnB1dD4gaG93ZXZlciB5b3Ugd2FudDsgaWYgeW91IHdhbnQgaXQgdG8gbG9vayBsaWtlIGFcbk1hdGVyaWFsIERlc2lnbiBpbnB1dCwgeW91IGNhbiBzdHlsZSBpdCB3aXRoIHRoZSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGUgbWl4aW4uXG5cbkRvIG5vdCB3cmFwIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYXJvdW5kIGVsZW1lbnRzIHRoYXQgYWxyZWFkeSBpbmNsdWRlIGl0LCBzdWNoIGFzIGA8cGFwZXItaW5wdXQ+YC5cbkRvaW5nIHNvIG1heSBjYXVzZSBldmVudHMgdG8gYm91bmNlIGluZmluaXRlbHkgYmV0d2VlbiB0aGUgY29udGFpbmVyIGFuZCBpdHMgY29udGFpbmVkIGVsZW1lbnQuXG5cbiMjIyBMaXN0ZW5pbmcgZm9yIGlucHV0IGNoYW5nZXNcblxuQnkgZGVmYXVsdCwgaXQgbGlzdGVucyBmb3IgY2hhbmdlcyBvbiB0aGUgYGJpbmQtdmFsdWVgIGF0dHJpYnV0ZSBvbiBpdHMgY2hpbGRyZW4gbm9kZXMgYW5kIHBlcmZvcm1cbnRhc2tzIHN1Y2ggYXMgYXV0by12YWxpZGF0aW5nIGFuZCBsYWJlbCBzdHlsaW5nIHdoZW4gdGhlIGBiaW5kLXZhbHVlYCBjaGFuZ2VzLiBZb3UgY2FuIGNvbmZpZ3VyZVxudGhlIGF0dHJpYnV0ZSBpdCBsaXN0ZW5zIHRvIHdpdGggdGhlIGBhdHRyLWZvci12YWx1ZWAgYXR0cmlidXRlLlxuXG4jIyMgVXNpbmcgYSBjdXN0b20gaW5wdXQgZWxlbWVudFxuXG5Zb3UgY2FuIHVzZSBhIGN1c3RvbSBpbnB1dCBlbGVtZW50IGluIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCwgZm9yIGV4YW1wbGUgdG8gaW1wbGVtZW50IGFcbmNvbXBvdW5kIGlucHV0IGZpZWxkIGxpa2UgYSBzb2NpYWwgc2VjdXJpdHkgbnVtYmVyIGlucHV0LiBUaGUgY3VzdG9tIGlucHV0IGVsZW1lbnQgc2hvdWxkIGhhdmUgdGhlXG5gcGFwZXItaW5wdXQtaW5wdXRgIGNsYXNzLCBoYXZlIGEgYG5vdGlmeTp0cnVlYCB2YWx1ZSBwcm9wZXJ0eSBhbmQgb3B0aW9uYWxseSBpbXBsZW1lbnRzXG5gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgaWYgaXQgaXMgdmFsaWRhdGFibGUuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGF0dHItZm9yLXZhbHVlPVwic3NuLXZhbHVlXCI+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+U29jaWFsIHNlY3VyaXR5IG51bWJlcjwvbGFiZWw+XG4gICAgICA8c3NuLWlucHV0IHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwicGFwZXItaW5wdXQtaW5wdXRcIj48L3Nzbi1pbnB1dD5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuXG5JZiB5b3UncmUgdXNpbmcgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGltcGVyYXRpdmVseSwgaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlXG50aGF0IHlvdSBhdHRhY2ggaXRzIGNoaWxkcmVuICh0aGUgYGlyb24taW5wdXRgIGFuZCB0aGUgb3B0aW9uYWwgYGxhYmVsYCkgYmVmb3JlIHlvdVxuYXR0YWNoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGl0c2VsZiwgc28gdGhhdCBpdCBjYW4gYmUgc2V0IHVwIGNvcnJlY3RseS5cblxuIyMjIFZhbGlkYXRpb25cblxuSWYgdGhlIGBhdXRvLXZhbGlkYXRlYCBhdHRyaWJ1dGUgaXMgc2V0LCB0aGUgaW5wdXQgY29udGFpbmVyIHdpbGwgdmFsaWRhdGUgdGhlIGlucHV0IGFuZCB1cGRhdGVcbnRoZSBjb250YWluZXIgc3R5bGluZyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLlxuXG4jIyMgQWRkLW9uc1xuXG5BZGQtb25zIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYGFkZC1vbmAgYXR0cmlidXRlIGFuZFxuaW1wbGVtZW50cyB0aGUgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIGJlaGF2aW9yLiBUaGV5IGFyZSBub3RpZmllZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxub3IgdmFsaWRpdHkgY2hhbmdlcywgYW5kIG1heSBpbXBsZW1lbnQgZnVuY3Rpb25hbGl0eSBzdWNoIGFzIGVycm9yIG1lc3NhZ2VzIG9yIGNoYXJhY3RlciBjb3VudGVycy5cblRoZXkgYXBwZWFyIGF0IHRoZSBib3R0b20gb2YgdGhlIGlucHV0LlxuXG4jIyMgUHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG5UaGVzZSBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdpdGggdGhlIGBwcmVmaXhgXG5vciBgc3VmZml4YCBhdHRyaWJ1dGUsIGFuZCBhcmUgZGlzcGxheWVkIGlubGluZSB3aXRoIHRoZSBpbnB1dCwgYmVmb3JlIG9yIGFmdGVyLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxkaXYgc2xvdD1cInByZWZpeFwiPiQ8L2Rpdj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Ub3RhbDwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gIGluc3RlYWQgb2YgdGhlIGFib3ZlLlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGZvY3VzZWQgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3JgIHwgSW5wdXQgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGFpbmVyIHdoZW4gaXQncyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gZmxvYXRpbmcgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBpbnZhbGlkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBzcGlubmVyIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIGNsZWFyIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtcHJlZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHByZWZpeCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LXN1ZmZpeGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBzdWZmaXggfCBge31gXG5cblRoaXMgZWxlbWVudCBpcyBgZGlzcGxheTpibG9ja2AgYnkgZGVmYXVsdCwgYnV0IHlvdSBjYW4gc2V0IHRoZSBgaW5saW5lYCBhdHRyaWJ1dGUgdG8gbWFrZSBpdFxuYGRpc3BsYXk6aW5saW5lLWJsb2NrYC5cbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0LWNvbnRhaW5lclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlOiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiB0byBtYWtlIGEgc3RhY2tpbmcgY29udGV4dCAqL1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbmxpbmVdKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC4zMztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5mbG9hdGVkLWxhYmVsLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWhpZ2hsaWdodGVkIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUuaXMtaW52YWxpZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuNzUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG5cbiAgICAgICAgLyogU2luY2Ugd2Ugc2NhbGUgdG8gNzUvMTAwIG9mIHRoZSBzaXplLCB3ZSBhY3R1YWxseSBoYXZlIDEwMC83NSBvZiB0aGVcbiAgICAgICAgb3JpZ2luYWwgc3BhY2Ugbm93IGF2YWlsYWJsZSAqL1xuICAgICAgICB3aWR0aDogMTMzJTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc7XG4gICAgICB9XG5cbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICAvKiBUT0RPKG5vbXMpOiBGaWd1cmUgb3V0IHdoeSBsZWF2aW5nIHRoZSB3aWR0aCBhdCAxMzMlIGJlZm9yZSB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAqIGFjdHVhbGx5IG1ha2VzXG4gICAgICAgICAqIGl0IHdpZGVyIG9uIHRoZSByaWdodCBzaWRlLCBub3QgbGVmdCBzaWRlLCBhcyB5b3Ugd291bGQgZXhwZWN0IGluIFJUTCAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlkZGVuIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCk6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1pbnZhbGlkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJlZml4IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1ub25lO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1wcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIC5zdWZmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtc3VmZml4O1xuICAgICAgfVxuXG4gICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKHRleHRhcmVhKSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmbG9hdGVkLWxhYmVsLXBsYWNlaG9sZGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgaGlkZGVuPVwiW1tub0xhYmVsRmxvYXRdXVwiPiZuYnNwOzwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlZml4XCI+PHNsb3QgbmFtZT1cInByZWZpeFwiPjwvc2xvdD48L3NwYW4+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZUlucHV0Q29udGVudENsYXNzKG5vTGFiZWxGbG9hdCxhbHdheXNGbG9hdExhYmVsLGZvY3VzZWQsaW52YWxpZCxfaW5wdXRIYXNDb250ZW50KV1dXCIgaWQ9XCJsYWJlbEFuZElucHV0Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD5cbiAgICAgICAgPHNsb3QgbmFtZT1cImlucHV0XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3VmZml4XCI+PHNsb3QgbmFtZT1cInN1ZmZpeFwiPjwvc2xvdD48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVVbmRlcmxpbmVDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1bmZvY3VzZWQtbGluZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvY3VzZWQtbGluZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlQWRkT25Db250ZW50Q2xhc3MoZm9jdXNlZCxpbnZhbGlkKV1dXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiYWRkLW9uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWNvbnRhaW5lcicsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBUaGUgbGFiZWwgZGlzYXBwZWFycyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBpc1xuICAgICAgICogbm90IG51bGwuXG4gICAgICAgKi9cbiAgICAgIG5vTGFiZWxGbG9hdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICAgICAqL1xuICAgICAgYWx3YXlzRmxvYXRMYWJlbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGF0dHJpYnV0ZSB0byBsaXN0ZW4gZm9yIHZhbHVlIGNoYW5nZXMgb24uXG4gICAgICAgKi9cbiAgICAgIGF0dHJGb3JWYWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnYmluZC12YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUgd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGlzIGludmFsaWQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbiAgICAgICAqIGNoYW5nZXMgaWYgYXV0by12YWxpZGF0aW5nLCBvciB3aGVuIHRoZSBgaXJvbi1pbnB1dC12YWxpZGF0ZWAgZXZlbnQgaXMgaGVhcmQgZnJvbSBhIGNoaWxkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJyxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGhhcyBmb2N1cy5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZDoge1xuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIF9hZGRvbnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgLy8gZG8gbm90IHNldCBhIGRlZmF1bHQgdmFsdWUgaGVyZSBpbnRlbnRpb25hbGx5IC0gaXQgd2lsbCBiZSBpbml0aWFsaXplZCBsYXppbHkgd2hlbiBhXG4gICAgICAgIC8vIGRpc3RyaWJ1dGVkIGNoaWxkIGlzIGF0dGFjaGVkLCB3aGljaCBtYXkgb2NjdXIgYmVmb3JlIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgZWxlbWVudFxuICAgICAgICAvLyBpbiBwb2x5ZmlsbC5cbiAgICAgIH0sXG5cbiAgICAgIF9pbnB1dEhhc0NvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfaW5wdXRTZWxlY3Rvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnaW5wdXQsaXJvbi1pbnB1dCx0ZXh0YXJlYSwucGFwZXItaW5wdXQtaW5wdXQnXG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbkZvY3VzOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JvdW5kT25CbHVyOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbklucHV0OiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JvdW5kVmFsdWVDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uVmFsdWVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgICAnaXJvbi1pbnB1dC12YWxpZGF0ZSc6ICdfb25Jcm9uSW5wdXRWYWxpZGF0ZSdcbiAgICB9LFxuXG4gICAgZ2V0IF92YWx1ZUNoYW5nZWRFdmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHJGb3JWYWx1ZSArICctY2hhbmdlZCc7XG4gICAgfSxcblxuICAgIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLkNhc2VNYXAuZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgICB9LFxuXG4gICAgZ2V0IF9pbnB1dEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5kb20odGhpcykucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dFNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgZ2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gfHwgdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLl9hZGRvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMsIHRydWUpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYm91bmRPbkJsdXIsIHRydWUpO1xuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5hdHRyRm9yVmFsdWUpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fdmFsdWVDaGFuZ2VkRXZlbnQsIHRoaXMuX2JvdW5kVmFsdWVDaGFuZ2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0KTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICYmIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9hZGRvbnMpIHtcbiAgICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKHRoaXMuX2FkZG9ucy5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2FkZG9ucy5wdXNoKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9vbkZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gICAgfSxcblxuICAgIF9vbkJsdXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBfb25JbnB1dDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfSxcblxuICAgIF9vblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBpbnB1dCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgLy8gUHJvYmxlbTogaWYgdGhlIGlucHV0IGlzIHJlcXVpcmVkIGJ1dCBoYXMgbm8gdGV4dCBlbnRlcmVkLCB3ZSBzaG91bGRcbiAgICAgIC8vIG9ubHkgdmFsaWRhdGUgaXQgb24gYmx1ciAoc28gdGhhdCBhbiBlbXB0eSBmb3JtIGRvZXNuJ3QgY29tZSB1cCByZWRcbiAgICAgIC8vIGltbWVkaWF0ZWx5OyBob3dldmVyLCBpbiB0aGlzIGhhbmRsZXIsIHdlIGRvbid0IGtub3cgd2hldGhlciB0aGlzIGlzXG4gICAgICAvLyB0aGUgYm9vdGluZyB1cCB2YWx1ZSBvciBhIHZhbHVlIGluIHRoZSBmdXR1cmUuIEkgYW0gYXNzdW1pbmcgdGhhdCB0aGVcbiAgICAgIC8vIGNhc2UgIHdlIGNhcmUgYWJvdXQgbWFuaWZlc3RzIGl0c2VsZiB3aGVuIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gICAgICAvLyBJZiB0aGlzIGNhdXNlcyBmdXR1cmUgcHJvYmxlbXMsIHdlIG5lZWQgdG8gZG8gc29tZXRoaW5nIGxpa2UgdHJhY2sgd2hldGhlclxuICAgICAgLy8gdGhlIGlyb24taW5wdXQtcmVhZHkgZXZlbnQgaGFzIGZpcmVkLCBhbmQgdGhpcyBoYW5kbGVyIGNhbWUgYmVmb3JlIHRoYXQuXG5cbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuXG4gICAgICAvLyB0eXBlPVwibnVtYmVyXCIgaGFjayBuZWVkZWQgYmVjYXVzZSB0aGlzLnZhbHVlIGlzIGVtcHR5IHVudGlsIGl0J3MgdmFsaWRcbiAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCB8fCAoaW5wdXRFbGVtZW50LnR5cGUgPT09ICdudW1iZXInICYmICFpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSkge1xuICAgICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5wdXRIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQWRkb25zKHtcbiAgICAgICAgaW5wdXRFbGVtZW50OiBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW52YWxpZDogdGhpcy5pbnZhbGlkXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSAmJiBpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHZhbGlkO1xuXG4gICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC52YWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWQgPSBpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbCB0aGlzIGxhc3QgdG8gbm90aWZ5IHRoZSBhZGQtb25zLlxuICAgICAgdGhpcy5faGFuZGxlVmFsdWUoaW5wdXRFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgX29uSXJvbklucHV0VmFsaWRhdGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9pbnB1dEVsZW1lbnQuaW52YWxpZDtcbiAgICB9LFxuXG4gICAgX2ludmFsaWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9hZGRvbnMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBZGRvbnMoe2ludmFsaWQ6IHRoaXMuaW52YWxpZH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgdG8gdXBkYXRlIHRoZSBzdGF0ZSBvZiBhZGQtb25zLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBBZGQtb24gc3RhdGUuXG4gICAgICovXG4gICAgdXBkYXRlQWRkb25zOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgZm9yICh2YXIgYWRkb24sIGluZGV4ID0gMDsgYWRkb24gPSB0aGlzLl9hZGRvbnNbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGFkZG9uLnVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jb21wdXRlSW5wdXRDb250ZW50Q2xhc3M6IGZ1bmN0aW9uKG5vTGFiZWxGbG9hdCwgYWx3YXlzRmxvYXRMYWJlbCwgZm9jdXNlZCwgaW52YWxpZCwgX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgdmFyIGNscyA9ICdpbnB1dC1jb250ZW50JztcbiAgICAgIGlmICghbm9MYWJlbEZsb2F0KSB7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblxuICAgICAgICBpZiAoYWx3YXlzRmxvYXRMYWJlbCB8fCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtZmxvYXRpbmcnO1xuICAgICAgICAgIC8vIElmIHRoZSBsYWJlbCBpcyBmbG9hdGluZywgaWdub3JlIGFueSBvZmZzZXRzIHRoYXQgbWF5IGhhdmUgYmVlblxuICAgICAgICAgIC8vIGFwcGxpZWQgZnJvbSBhIHByZWZpeCBlbGVtZW50LlxuICAgICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG5cbiAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgICAgICBjbHMgKz0gXCIgbGFiZWwtaXMtaGlnaGxpZ2h0ZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2hlbiB0aGUgbGFiZWwgaXMgbm90IGZsb2F0aW5nLCBpdCBzaG91bGQgb3ZlcmxhcCB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1oaWRkZW4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICAgIGNscyArPSAnIGZvY3VzZWQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNscztcbiAgICB9LFxuXG4gICAgX2NvbXB1dGVVbmRlcmxpbmVDbGFzczogZnVuY3Rpb24oZm9jdXNlZCwgaW52YWxpZCkge1xuICAgICAgdmFyIGNscyA9ICd1bmRlcmxpbmUnO1xuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH0sXG5cbiAgICBfY29tcHV0ZUFkZE9uQ29udGVudENsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgICB2YXIgY2xzID0gJ2FkZC1vbi1jb250ZW50JztcbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWhpZ2hsaWdodGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNscztcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1lcnJvcj5gIGlzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIHVzZSB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIFRoZSBlcnJvciBpc1xuZGlzcGxheWVkIHdoZW4gdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXMgYGludmFsaWRgLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiWzAtOV0qXCI+XG4gICAgICA8cGFwZXItaW5wdXQtZXJyb3Igc2xvdD1cImFkZC1vblwiPk9ubHkgbnVtYmVycyBhcmUgYWxsb3dlZCE8L3BhcGVyLWlucHV0LWVycm9yPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgVGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIGVycm9yIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1lcnJvcmAgICAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlcnJvciAgICAgICAgfCBge31gXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dC1lcnJvclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1lcnJvcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfTtcbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWVycm9yJyxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvclxuICAgIF0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGVycm9yIGlzIHNob3dpbmcuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG92ZXJyaWRlcyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGluIFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdGhpcy5fc2V0SW52YWxpZChzdGF0ZS5pbnZhbGlkKTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWVycm9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5gaXJvbi1pbWFnZWAgaXMgYW4gZWxlbWVudCBmb3IgZGlzcGxheWluZyBhbiBpbWFnZSB0aGF0IHByb3ZpZGVzIHVzZWZ1bCBzaXppbmcgYW5kXG5wcmVsb2FkaW5nIG9wdGlvbnMgbm90IGZvdW5kIG9uIHRoZSBzdGFuZGFyZCBgPGltZz5gIHRhZy5cblxuVGhlIGBzaXppbmdgIG9wdGlvbiBhbGxvd3MgdGhlIGltYWdlIHRvIGJlIGVpdGhlciBjcm9wcGVkIChgY292ZXJgKSBvclxubGV0dGVyYm94ZWQgKGBjb250YWluYCkgdG8gZmlsbCBhIGZpeGVkIHVzZXItc2l6ZSBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG5cblRoZSBgcHJlbG9hZGAgb3B0aW9uIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVuZGVyaW5nIHRoZSBpbWFnZSB1bnRpbCB0aGVcbmltYWdlIGlzIGZ1bGx5IGxvYWRlZC4gIEluIHRoZSBpbnRlcmltLCBlaXRoZXIgdGhlIGVsZW1lbnQncyBDU1MgYGJhY2tncm91bmQtY29sb3JgXG5jYW4gYmUgYmUgdXNlZCBhcyB0aGUgcGxhY2Vob2xkZXIsIG9yIHRoZSBgcGxhY2Vob2xkZXJgIHByb3BlcnR5IGNhbiBiZVxuc2V0IHRvIGEgVVJMIChwcmVmZXJhYmx5IGEgZGF0YS1VUkksIGZvciBpbnN0YW50IHJlbmRlcmluZykgZm9yIGFuXG5wbGFjZWhvbGRlciBpbWFnZS5cblxuVGhlIGBmYWRlYCBvcHRpb24gKG9ubHkgdmFsaWQgd2hlbiBgcHJlbG9hZGAgaXMgc2V0KSB3aWxsIGNhdXNlIHRoZSBwbGFjZWhvbGRlclxuaW1hZ2UvY29sb3IgdG8gYmUgZmFkZWQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIHJlbmRlcmVkLlxuXG5FeGFtcGxlczpcblxuICBCYXNpY2FsbHkgaWRlbnRpY2FsIHRvIGA8aW1nIHNyYz1cIi4uLlwiPmAgdGFnOlxuXG4gICAgPGlyb24taW1hZ2Ugc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBsZXR0ZXJib3ggdGhlIGltYWdlIHRvIGZpdDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBzaXppbmc9XCJjb250YWluXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgY3JvcCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvdmVyXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBsaWdodC1ncmF5IGJhY2tncm91bmQgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIHNob3cgYSBiYXNlLTY0IGVuY29kZWQgcGxhY2Vob2xkZXIgaW1hZ2UgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHBsYWNlaG9sZGVyPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LC4uLlwiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBmYWRlIHRoZSBsaWdodC1ncmF5IGJhY2tncm91bmQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1wiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgZmFkZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvICNwbGFjZWhvbGRlciB8IGB7fWBcbmAtLWlyb24taW1hZ2Utd2lkdGhgIHwgU2V0cyB0aGUgd2lkdGggb2YgdGhlIHdyYXBwZWQgaW1hZ2UgfCBgYXV0b2BcbmAtLWlyb24taW1hZ2UtaGVpZ2h0YCB8IFNldHMgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pbWFnZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWltYWdlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjYmFzZVVSSUFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNzaXplZEltZ0RpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pbWFnZS13aWR0aCwgYXV0byk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taXJvbi1pbWFnZS1oZWlnaHQsIGF1dG8pO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2l6aW5nXSkgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgIEBhcHBseSAtLWlyb24taW1hZ2UtcGxhY2Vob2xkZXI7XG4gICAgICB9XG5cbiAgICAgICNwbGFjZWhvbGRlci5mYWRlZC1vdXQge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8YSBpZD1cImJhc2VVUklBbmNob3JcIiBocmVmPVwiI1wiPjwvYT5cbiAgICA8ZGl2IGlkPVwic2l6ZWRJbWdEaXZcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkhpZGRlbihzaXppbmcpXV1cIlxuICAgICAgYXJpYS1oaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW4oYWx0KV1dXCJcbiAgICAgIGFyaWEtbGFiZWwkPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbChhbHQsIHNyYyldXVwiPjwvZGl2PlxuICAgIDxpbWcgaWQ9XCJpbWdcIlxuICAgICAgYWx0JD1cIltbYWx0XV1cIlxuICAgICAgaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdIaWRkZW4oc2l6aW5nKV1dXCJcbiAgICAgIGNyb3Nzb3JpZ2luJD1cIltbY3Jvc3NvcmlnaW5dXVwiXG4gICAgICBvbi1sb2FkPVwiX2ltZ09uTG9hZFwiXG4gICAgICBvbi1lcnJvcj1cIl9pbWdPbkVycm9yXCI+XG4gICAgPGRpdiBpZD1cInBsYWNlaG9sZGVyXCJcbiAgICAgIGhpZGRlbiQ9XCJbW19jb21wdXRlUGxhY2Vob2xkZXJIaWRkZW4ocHJlbG9hZCwgZmFkZSwgbG9hZGluZywgbG9hZGVkKV1dXCJcbiAgICAgIGNsYXNzJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZShwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIj48L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cblxuICA8c2NyaXB0PlxuICAgIFBvbHltZXIoe1xuICAgICAgaXM6ICdpcm9uLWltYWdlJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFVSTCBvZiBhbiBpbWFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHNyYzoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaG9ydCB0ZXh0IGFsdGVybmF0aXZlIGZvciB0aGUgaW1hZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBhbHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ09SUyBlbmFibGVkIGltYWdlcyBzdXBwb3J0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZVxuICAgICAgICAgKi9cbiAgICAgICAgY3Jvc3NvcmlnaW46IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCB0aGUgaW1hZ2UgaXMgcHJldmVudGVkIGZyb20gbG9hZGluZyBhbmQgYW55IHBsYWNlaG9sZGVyIGlzXG4gICAgICAgICAqIHNob3duLiAgVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gYSBiaW5kaW5nIHRvIHRoZSBzcmMgcHJvcGVydHkgaXMga25vd24gdG9cbiAgICAgICAgICogYmUgaW52YWxpZCwgdG8gcHJldmVudCA0MDQgcmVxdWVzdHMuXG4gICAgICAgICAqL1xuICAgICAgICBwcmV2ZW50TG9hZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgaW1hZ2UuICBWYWxpZCB2YWx1ZXMgYXJlIGBjb250YWluYCAoZnVsbFxuICAgICAgICAgKiBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIGlzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYW5kXG4gICAgICAgICAqIGxldHRlcmJveGVkKSBvciBgY292ZXJgIChpbWFnZSBpcyBjcm9wcGVkIGluIG9yZGVyIHRvIGZ1bGx5IGNvdmVyIHRoZVxuICAgICAgICAgKiBib3VuZHMgb2YgdGhlIGVsZW1lbnQpLCBvciBgbnVsbGAgKGRlZmF1bHQ6IGltYWdlIHRha2VzIG5hdHVyYWwgc2l6ZSkuXG4gICAgICAgICAqL1xuICAgICAgICBzaXppbmc6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYSBzaXppbmcgb3B0aW9uIGlzIHVzZWQgKGBjb3ZlcmAgb3IgYGNvbnRhaW5gKSwgdGhpcyBkZXRlcm1pbmVzXG4gICAgICAgICAqIGhvdyB0aGUgaW1hZ2UgaXMgYWxpZ25lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYm91bmRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICdjZW50ZXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBgc3JjYCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBgcGxhY2Vob2xkZXJgXG4gICAgICAgICAqIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBuZXcgaW1hZ2UgaGFzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZSBoYXNcbiAgICAgICAgICogbG9hZGVkLiAgVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnQgcmVuZGVyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgb2JzZXJ2ZXI6ICdfcGxhY2Vob2xkZXJDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVsb2FkYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlIGltYWdlIHRvXG4gICAgICAgICAqIGZhZGUgaW50byBwbGFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGZhZGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpcyB0cnVlIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGxvYWRlZDoge1xuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCB0cmFja3MgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGltYWdlIHdoZW4gdGhlIGBwcmVsb2FkYFxuICAgICAgICAgKiBvcHRpb24gaXMgdXNlZC5cbiAgICAgICAgICovXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgaW5kaWNhdGVzIHRoYXQgdGhlIGxhc3Qgc2V0IGBzcmNgIGZhaWxlZCB0byBsb2FkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB3aWR0aCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc28gYmVcbiAgICAgICAgICogc2V0IHZpYSBDU1MuXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDoge1xuICAgICAgICAgIG9ic2VydmVyOiAnX3dpZHRoQ2hhbmdlZCcsXG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgaGVpZ2h0IG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZVxuICAgICAgICAgKiBzZXQgdmlhIENTUy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGF0dHJpYnV0ZSBoZWlnaHRcbiAgICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDoge1xuICAgICAgICAgIG9ic2VydmVyOiAnX2hlaWdodENoYW5nZWQnLFxuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAgICdfdHJhbnNmb3JtQ2hhbmdlZChzaXppbmcsIHBvc2l0aW9uKScsXG4gICAgICAgICdfbG9hZFN0YXRlT2JzZXJ2ZXIoc3JjLCBwcmV2ZW50TG9hZCknXG4gICAgICBdLFxuXG4gICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9pbWdPbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldExvYWRlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgfSxcblxuICAgICAgX2ltZ09uRXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NldEVycm9yKHRydWUpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wcmVsb2FkIHx8ICghdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wcmVsb2FkICYmIHRoaXMuZmFkZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMubG9hZGVkKSA/ICdmYWRlZC1vdXQnIDogJyc7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zaXppbmc7XG4gICAgICB9LFxuXG4gICAgICBfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbHQgPT09ICcnID8gJ3RydWUnIDogdW5kZWZpbmVkO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdEaXZBUklBTGFiZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5hbHQgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hbHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb2x5bWVyLlJlc29sdmVVcmwucmVzb2x2ZVVybCB3aWxsIHJlc29sdmUgJycgcmVsYXRpdmUgdG8gYSBVUkwgeCB0b1xuICAgICAgICAvLyB0aGF0IFVSTCB4LCBidXQgJycgaXMgdGhlIGRlZmF1bHQgZm9yIHNyYy5cbiAgICAgICAgaWYgKHRoaXMuc3JjID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAgICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgICAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpO1xuICAgICAgICAvLyBSZW1vdmUgcXVlcnkgcGFydHMsIGdldCBmaWxlIG5hbWUuXG4gICAgICAgIHJldHVybiByZXNvbHZlZC5yZXBsYWNlKC9bP3wjXS4qL2csICcnKS5zcGxpdCgnLycpLnBvcCgpO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnNpemluZztcbiAgICAgIH0sXG5cbiAgICAgIF93aWR0aENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gaXNOYU4odGhpcy53aWR0aCkgPyB0aGlzLndpZHRoIDogdGhpcy53aWR0aCArICdweCc7XG4gICAgICB9LFxuXG4gICAgICBfaGVpZ2h0Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaXNOYU4odGhpcy5oZWlnaHQpID8gdGhpcy5oZWlnaHQgOiB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9LFxuXG4gICAgICBfbG9hZFN0YXRlT2JzZXJ2ZXI6IGZ1bmN0aW9uKHNyYywgcHJldmVudExvYWQpIHtcbiAgICAgICAgdmFyIG5ld1Jlc29sdmVkU3JjID0gdGhpcy5fcmVzb2x2ZVNyYyhzcmMpO1xuICAgICAgICBpZiAobmV3UmVzb2x2ZWRTcmMgPT09IHRoaXMuX3Jlc29sdmVkU3JjKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgICAgICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICAgICAgaWYgKHNyYyA9PT0gJycgfHwgcHJldmVudExvYWQpIHtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9IG5ld1Jlc29sdmVkU3JjO1xuICAgICAgICAgIHRoaXMuJC5pbWcuc3JjID0gdGhpcy5fcmVzb2x2ZWRTcmM7XG4gICAgICAgICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgdGhpcy5fcmVzb2x2ZWRTcmMgKyAnXCIpJztcblxuICAgICAgICAgIHRoaXMuX3NldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9wbGFjZWhvbGRlckNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID8gJ3VybChcIicgKyB0aGlzLnBsYWNlaG9sZGVyICsgJ1wiKScgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF90cmFuc2Zvcm1DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNpemVkSW1nRGl2U3R5bGUgPSB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGU7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlclN0eWxlID0gdGhpcy4kLnBsYWNlaG9sZGVyLnN0eWxlO1xuXG4gICAgICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgICB0aGlzLnNpemluZztcblxuICAgICAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICB0aGlzLnNpemluZyA/IHRoaXMucG9zaXRpb24gOiAnJztcblxuICAgICAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxuICAgICAgICAgIHRoaXMuc2l6aW5nID8gJ25vLXJlcGVhdCcgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9yZXNvbHZlU3JjOiBmdW5jdGlvbih0ZXN0U3JjKSB7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IFBvbHltZXIuUmVzb2x2ZVVybC5yZXNvbHZlVXJsKHRlc3RTcmMsIHRoaXMuJC5iYXNlVVJJQW5jaG9yLmhyZWYpO1xuICAgICAgICAvLyBOT1RFOiBVc2Ugb2YgYFVSTGAgd2FzIHJlbW92ZWQgaGVyZSBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0XG4gICAgICAgIC8vIGNvbnN0cnVjdGluZyBpdC4gSWYgdGhpcyBlbmRzIHVwIGJlaW5nIHByb2JsZW1hdGljLCB3ZSBzaG91bGRcbiAgICAgICAgLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIGFuZCBhZGRpbmcgdGhlIFVSTCBwb2x5ZmlsbCBhcyBhIGRldiBkZXBlbmRlbmN5LlxuICAgICAgICBpZiAocmVzb2x2ZWRbMF0gPT09ICcvJykge1xuICAgICAgICAgIC8vIEluIElFIGxvY2F0aW9uLm9yaWdpbiBtaWdodCBub3Qgd29ya1xuICAgICAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTc2MzgwMi9sb2NhdGlvbi1vcmlnaW4taXMtdW5kZWZpbmVkLWluLWllLTExLW9uLXdpbmRvd3MtMTAtYnV0LXdvcmtzLW9uLXdpbmRvd3MtN1xuICAgICAgICAgIHJlc29sdmVkID0gKGxvY2F0aW9uLm9yaWdpbiB8fCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KSArIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5odG1sIiwiXG5yZXF1aXJlKCcuLi8uLi9wb2x5bWVyL3BvbHltZXIuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9zaGFkb3cuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXBhcGVyLW1hdGVyaWFsLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+Omhvc3QsaHRtbHstLXBhcGVyLW1hdGVyaWFsOntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDt9O30ucGFwZXItbWF0ZXJpYWwsOmhvc3QoLnBhcGVyLW1hdGVyaWFsKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbDt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMVxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjFcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjJcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIyXFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIzXFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiM1xcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNFxcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjRcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjVcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI1XFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O308L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5pcm9uLXJlcXVlc3QgY2FuIGJlIHVzZWQgdG8gcGVyZm9ybSBYTUxIdHRwUmVxdWVzdHMuXG5cbiAgICA8aXJvbi1yZXF1ZXN0IGlkPVwieGhyXCI+PC9pcm9uLXJlcXVlc3Q+XG4gICAgLi4uXG4gICAgdGhpcy4kLnhoci5zZW5kKHt1cmw6IHVybCwgYm9keTogcGFyYW1zfSk7XG4tLT5cbjxzY3JpcHQ+XG4gICd1c2Ugc3RyaWN0JztcblxuICBQb2x5bWVyKHtcbiAgICBpczogJ2lyb24tcmVxdWVzdCcsXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgaGlkZGVuOiB0cnVlXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICAgICAqIG5ldHdvcmsgcmVxdWVzdC5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7WE1MSHR0cFJlcXVlc3R9XG4gICAgICAgKi9cbiAgICAgIHhocjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBhcnNlZCByZXNwb25zZSBib2R5LCBpZiB0aGUgYHhocmAgaGFzIGNvbXBsZXRlbHlcbiAgICAgICAqIHJlc29sdmVkLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICovXG4gICAgICByZXNwb25zZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc3RhdHVzIGNvZGUsIGlmIHRoZSBgeGhyYCBoYXMgY29tcGxldGVseSByZXNvbHZlZC5cbiAgICAgICAqL1xuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHN0YXR1cyB0ZXh0LCBpZiB0aGUgYHhocmAgaGFzIGNvbXBsZXRlbHkgcmVzb2x2ZWQuXG4gICAgICAgKi9cbiAgICAgIHN0YXR1c1RleHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYHhocmAgcmVzcG9uc2UgY29tZXMgYmFjaywgb3IgcmVqZWN0c1xuICAgICAgICogaWYgdGhlcmUgaXMgYW4gZXJyb3IgYmVmb3JlIHRoZSBgeGhyYCBjb21wbGV0ZXMuXG4gICAgICAgKiBUaGUgcmVzb2x2ZSBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCB0aGUgb3JpZ2luYWwgcmVxdWVzdCBhcyBhbiBhcmd1bWVudC5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIHRoZSByZWplY3QgY2FsbGJhY2sgaXMgY2FsbGVkIHdpdGggYW4gYEVycm9yYCBhcyBhbiBhcmd1bWVudC5cbiAgICAgICAqIElmIGByZWplY3RXaXRoUmVxdWVzdGAgaXMgdHJ1ZSwgdGhlIHJlamVjdCBjYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhbiBcbiAgICAgICAqIG9iamVjdCB3aXRoIHR3byBrZXlzOiBgcmVxdWVzdGAsIHRoZSBvcmlnaW5hbCByZXF1ZXN0LCBhbmQgYGVycm9yYCwgdGhlIFxuICAgICAgICogZXJyb3Igb2JqZWN0LlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtQcm9taXNlfVxuICAgICAgICovXG4gICAgICBjb21wbGV0ZXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ29tcGxldGVzID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzID0gcmVqZWN0O1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gZW1pdHRlZCBieSB0aGUgWEhSIGlmXG4gICAgICAgKiBhdmFpbGFibGUuXG4gICAgICAgKlxuICAgICAgICogQGRlZmF1bHQge31cbiAgICAgICAqL1xuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFib3J0ZWQgd2lsbCBiZSB0cnVlIGlmIGFuIGFib3J0IG9mIHRoZSByZXF1ZXN0IGlzIGF0dGVtcHRlZC5cbiAgICAgICAqL1xuICAgICAgYWJvcnRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVycm9yZWQgd2lsbCBiZSB0cnVlIGlmIHRoZSBicm93c2VyIGZpcmVkIGFuIGVycm9yIGV2ZW50IGZyb20gdGhlXG4gICAgICAgKiBYSFIgb2JqZWN0IChtYWlubHkgbmV0d29yayBlcnJvcnMpLlxuICAgICAgICovXG4gICAgICBlcnJvcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaW1lZE91dCB3aWxsIGJlIHRydWUgaWYgdGhlIFhIUiB0aHJldyBhIHRpbWVvdXQgZXZlbnQuXG4gICAgICAgKi9cbiAgICAgIHRpbWVkT3V0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdWNjZWVkZWQgaXMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuIFRoZSByZXF1ZXN0IHN1Y2NlZWRlZCBpZiBpdFxuICAgICAqIGxvYWRlZCB3aXRob3V0IGVycm9yLCB3YXNuJ3QgYWJvcnRlZCwgYW5kIHRoZSBzdGF0dXMgY29kZSBpcyDiiaUgMjAwLCBhbmRcbiAgICAgKiA8IDMwMCwgb3IgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIDAuXG4gICAgICpcbiAgICAgKiBUaGUgc3RhdHVzIGNvZGUgMCBpcyBhY2NlcHRlZCBhcyBhIHN1Y2Nlc3MgYmVjYXVzZSBzb21lIHNjaGVtZXMgLSBlLmcuXG4gICAgICogZmlsZTovLyAtIGRvbid0IHByb3ZpZGUgc3RhdHVzIGNvZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgc3VjY2VlZGVkKCkge1xuICAgICAgaWYgKHRoaXMuZXJyb3JlZCB8fCB0aGlzLmFib3J0ZWQgfHwgdGhpcy50aW1lZE91dCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy54aHIuc3RhdHVzIHx8IDA7XG5cbiAgICAgIC8vIE5vdGU6IGlmIHdlIGFyZSB1c2luZyB0aGUgZmlsZTovLyBwcm90b2NvbCwgdGhlIHN0YXR1cyBjb2RlIHdpbGwgYmUgMFxuICAgICAgLy8gZm9yIGFsbCBvdXRjb21lcyAoc3VjY2Vzc2Z1bCBvciBvdGhlcndpc2UpLlxuICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gMCB8fFxuICAgICAgICAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhbiBIVFRQIHJlcXVlc3QgdG8gdGhlIHNlcnZlciBhbmQgcmV0dXJucyBhIHByb21pc2UgKHNlZSB0aGUgYGNvbXBsZXRlc2BcbiAgICAgKiBwcm9wZXJ0eSBmb3IgZGV0YWlscykuXG4gICAgICpcbiAgICAgKiBUaGUgaGFuZGxpbmcgb2YgdGhlIGBib2R5YCBwYXJhbWV0ZXIgd2lsbCB2YXJ5IGJhc2VkIG9uIHRoZSBDb250ZW50LVR5cGVcbiAgICAgKiBoZWFkZXIuIFNlZSB0aGUgZG9jcyBmb3IgaXJvbi1hamF4J3MgYGJvZHlgIHByb3BlcnR5IGZvciBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICB1cmw6IHN0cmluZyxcbiAgICAgKiAgIG1ldGhvZDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgYXN5bmM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICogICBib2R5OiAoQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fEJsb2J8RG9jdW1lbnR8Rm9ybURhdGF8bnVsbHxzdHJpbmd8dW5kZWZpbmVkfE9iamVjdCksXG4gICAgICogICBoZWFkZXJzOiAoT2JqZWN0fHVuZGVmaW5lZCksXG4gICAgICogICBoYW5kbGVBczogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAganNvblByZWZpeDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgICAqICAgd2l0aENyZWRlbnRpYWxzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAqICAgdGltZW91dDogKE51bWJlcnx1bmRlZmluZWQpLFxuICAgICAqICAgcmVqZWN0V2l0aFJlcXVlc3Q6IChib29sZWFufHVuZGVmaW5lZCl9fSBvcHRpb25zIC1cbiAgICAgKiAgIC0gdXJsIFRoZSB1cmwgdG8gd2hpY2ggdGhlIHJlcXVlc3QgaXMgc2VudC5cbiAgICAgKiAgIC0gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UsIGRlZmF1bHQgaXMgR0VULlxuICAgICAqICAgLSBhc3luYyBCeSBkZWZhdWx0LCBhbGwgcmVxdWVzdHMgYXJlIHNlbnQgYXN5bmNocm9ub3VzbHkuIFRvIHNlbmQgc3luY2hyb25vdXMgcmVxdWVzdHMsXG4gICAgICogICAgICAgICBzZXQgdG8gZmFsc2UuXG4gICAgICogICAtICBib2R5IFRoZSBjb250ZW50IGZvciB0aGUgcmVxdWVzdCBib2R5IGZvciBQT1NUIG1ldGhvZC5cbiAgICAgKiAgIC0gIGhlYWRlcnMgSFRUUCByZXF1ZXN0IGhlYWRlcnMuXG4gICAgICogICAtICBoYW5kbGVBcyBUaGUgcmVzcG9uc2UgdHlwZS4gRGVmYXVsdCBpcyAndGV4dCcuXG4gICAgICogICAtICB3aXRoQ3JlZGVudGlhbHMgV2hldGhlciBvciBub3QgdG8gc2VuZCBjcmVkZW50aWFscyBvbiB0aGUgcmVxdWVzdC4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICAgKiAgIC0gIHRpbWVvdXQgLSBUaW1lb3V0IGZvciByZXF1ZXN0LCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogICAtICByZWplY3RXaXRoUmVxdWVzdCBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHRoZSByZXF1ZXN0IG9iamVjdCB3aXRoIHByb21pc2UgcmVqZWN0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHNlbmQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcblxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5fc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IHByb2dyZXNzLmxlbmd0aENvbXB1dGFibGUsXG4gICAgICAgICAgbG9hZGVkOiBwcm9ncmVzcy5sb2FkZWQsXG4gICAgICAgICAgdG90YWw6IHByb2dyZXNzLnRvdGFsXG4gICAgICAgIH0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fc2V0RXJyb3JlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCk7XG4gICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhyZXNwb25zZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigndGltZW91dCcsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMuX3NldFRpbWVkT3V0KHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gb3B0aW9ucy5yZWplY3RXaXRoUmVxdWVzdCA/IHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgcmVxdWVzdDogdGhpc1xuICAgICAgICB9IDogZXJyb3I7XG4gICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9zZXRBYm9ydGVkKHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQuJyk7XG4gICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIHJlcXVlc3Q6IHRoaXNcbiAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhyZXNwb25zZSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBDYWxsZWQgYWZ0ZXIgYWxsIG9mIHRoZSBhYm92ZS5cbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgICB0aGlzLl9zZXRSZXNwb25zZSh0aGlzLnBhcnNlUmVzcG9uc2UoKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1Y2NlZWRlZCkge1xuICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignVGhlIHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGU6ICcgKyB0aGlzLnhoci5zdGF0dXMpO1xuICAgICAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMucmVqZWN0V2l0aFJlcXVlc3QgPyB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICByZXF1ZXN0OiB0aGlzXG4gICAgICAgICAgfSA6IGVycm9yO1xuICAgICAgICAgIHRoaXMucmVqZWN0Q29tcGxldGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVDb21wbGV0ZXModGhpcyk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4oXG4gICAgICAgIG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgICBvcHRpb25zLnVybCxcbiAgICAgICAgb3B0aW9ucy5hc3luYyAhPT0gZmFsc2VcbiAgICAgICk7XG5cbiAgICAgIHZhciBhY2NlcHRUeXBlID0ge1xuICAgICAgICAnanNvbic6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3RleHQnOiAndGV4dC9wbGFpbicsXG4gICAgICAgICdodG1sJzogJ3RleHQvaHRtbCcsXG4gICAgICAgICd4bWwnOiAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICAgJ2FycmF5YnVmZmVyJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgICAgIH1bb3B0aW9ucy5oYW5kbGVBc107XG4gICAgICB2YXIgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIG5ld0hlYWRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgbmV3SGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSBoZWFkZXJzW2tleV07XG4gICAgICB9XG4gICAgICBoZWFkZXJzID0gbmV3SGVhZGVycztcblxuICAgICAgaWYgKGFjY2VwdFR5cGUgJiYgIWhlYWRlcnNbJ2FjY2VwdCddKSB7XG4gICAgICAgIGhlYWRlcnNbJ2FjY2VwdCddID0gYWNjZXB0VHlwZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24ocmVxdWVzdEhlYWRlcikge1xuICAgICAgICBpZiAoL1tBLVpdLy50ZXN0KHJlcXVlc3RIZWFkZXIpKSB7XG4gICAgICAgICAgUG9seW1lci5CYXNlLl9lcnJvcignSGVhZGVycyBtdXN0IGJlIGxvd2VyIGNhc2UsIGdvdCcsIHJlcXVlc3RIZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgIHJlcXVlc3RIZWFkZXIsXG4gICAgICAgICAgaGVhZGVyc1tyZXF1ZXN0SGVhZGVyXVxuICAgICAgICApO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmFzeW5jICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAob3B0aW9ucy5hc3luYykge1xuICAgICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZUFzID0gb3B0aW9ucy5oYW5kbGVBcztcblxuICAgICAgICAvLyBJZiBhIEpTT04gcHJlZml4IGlzIHByZXNlbnQsIHRoZSByZXNwb25zZVR5cGUgbXVzdCBiZSAndGV4dCcgb3IgdGhlXG4gICAgICAgIC8vIGJyb3dzZXIgd29u4oCZdCBiZSBhYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZS5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy5qc29uUHJlZml4IHx8ICFoYW5kbGVBcykge1xuICAgICAgICAgIGhhbmRsZUFzID0gJ3RleHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gSUUsIGB4aHIucmVzcG9uc2VUeXBlYCBpcyBhbiBlbXB0eSBzdHJpbmcgd2hlbiB0aGUgcmVzcG9uc2VcbiAgICAgICAgLy8gcmV0dXJucy4gSGVuY2UsIGNhY2hpbmcgaXQgYXMgYHhoci5fcmVzcG9uc2VUeXBlYC5cbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHhoci5fcmVzcG9uc2VUeXBlID0gaGFuZGxlQXM7XG5cbiAgICAgICAgLy8gQ2FjaGUgdGhlIEpTT04gcHJlZml4LCBpZiBpdCBleGlzdHMuXG4gICAgICAgIGlmICghIW9wdGlvbnMuanNvblByZWZpeCkge1xuICAgICAgICAgIHhoci5fanNvblByZWZpeCA9IG9wdGlvbnMuanNvblByZWZpeDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcblxuXG4gICAgICB2YXIgYm9keSA9IHRoaXMuX2VuY29kZUJvZHlPYmplY3Qob3B0aW9ucy5ib2R5LCBoZWFkZXJzWydjb250ZW50LXR5cGUnXSk7XG5cbiAgICAgIHhoci5zZW5kKFxuICAgICAgICAvKiogQHR5cGUge0FycmF5QnVmZmVyfEFycmF5QnVmZmVyVmlld3xCbG9ifERvY3VtZW50fEZvcm1EYXRhfFxuICAgICAgICAgICAgICAgICAgIG51bGx8c3RyaW5nfHVuZGVmaW5lZH0gKi9cbiAgICAgICAgKGJvZHkpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBwYXJzZSB0aGUgcmVzcG9uc2UgYm9keSBvZiB0aGUgWEhSLiBJZiBwYXJzaW5nIHN1Y2NlZWRzLFxuICAgICAqIHRoZSB2YWx1ZSByZXR1cm5lZCB3aWxsIGJlIGRlc2VyaWFsaXplZCBiYXNlZCBvbiB0aGUgYHJlc3BvbnNlVHlwZWBcbiAgICAgKiBzZXQgb24gdGhlIFhIUi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IFRoZSBwYXJzZWQgcmVzcG9uc2UsXG4gICAgICogb3IgdW5kZWZpbmVkIGlmIHRoZXJlIHdhcyBhbiBlbXB0eSByZXNwb25zZSBvciBwYXJzaW5nIGZhaWxlZC5cbiAgICAgKi9cbiAgICBwYXJzZVJlc3BvbnNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgICAgIHZhciByZXNwb25zZVR5cGUgPSB4aHIucmVzcG9uc2VUeXBlIHx8IHhoci5fcmVzcG9uc2VUeXBlO1xuICAgICAgdmFyIHByZWZlclJlc3BvbnNlVGV4dCA9ICF0aGlzLnhoci5yZXNwb25zZVR5cGU7XG4gICAgICB2YXIgcHJlZml4TGVuID0gKHhoci5fanNvblByZWZpeCAmJiB4aHIuX2pzb25QcmVmaXgubGVuZ3RoKSB8fCAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgLy8gSWYgdGhlIHhociBvYmplY3QgZG9lc24ndCBoYXZlIGEgbmF0dXJhbCBgeGhyLnJlc3BvbnNlVHlwZWAsXG4gICAgICAgICAgICAvLyB3ZSBjYW4gYXNzdW1lIHRoYXQgdGhlIGJyb3dzZXIgaGFzbid0IHBhcnNlZCB0aGUgcmVzcG9uc2UgZm9yIHVzLFxuICAgICAgICAgICAgLy8gYW5kIHNvIHBhcnNpbmcgaXMgb3VyIHJlc3BvbnNpYmlsaXR5LiBMaWtld2lzZSBpZiByZXNwb25zZSBpc1xuICAgICAgICAgICAgLy8gdW5kZWZpbmVkLCBhcyB0aGVyZSdzIG5vIHdheSB0byBlbmNvZGUgdW5kZWZpbmVkIGluIEpTT04uXG4gICAgICAgICAgICBpZiAocHJlZmVyUmVzcG9uc2VUZXh0IHx8IHhoci5yZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIFRyeSB0byBlbXVsYXRlIHRoZSBKU09OIHNlY3Rpb24gb2YgdGhlIHJlc3BvbnNlIGJvZHkgc2VjdGlvbiBvZlxuICAgICAgICAgICAgICAvLyB0aGUgc3BlYzogaHR0cHM6Ly94aHIuc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZS1ib2R5XG4gICAgICAgICAgICAgIC8vIFRoYXQgaXMgdG8gc2F5LCB3ZSB0cnkgdG8gcGFyc2UgYXMgSlNPTiwgYnV0IGlmIGFueXRoaW5nIGdvZXNcbiAgICAgICAgICAgICAgLy8gd3JvbmcgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIGNhc2UgJ3htbCc6XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgIGNhc2UgJ2Jsb2InOlxuICAgICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcbiAgICAgICAgICBjYXNlICdhcnJheWJ1ZmZlcic6XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIC8vIElmIGBwcmVmaXhMZW5gIGlzIHNldCwgaXQgaW1wbGllcyB0aGUgcmVzcG9uc2Ugc2hvdWxkIGJlIHBhcnNlZFxuICAgICAgICAgICAgLy8gYXMgSlNPTiBvbmNlIHRoZSBwcmVmaXggb2YgbGVuZ3RoIGBwcmVmaXhMZW5gIGlzIHN0cmlwcGVkIGZyb21cbiAgICAgICAgICAgIC8vIGl0LiBFbXVsYXRlIHRoZSBiZWhhdmlvciBhYm92ZSB3aGVyZSBudWxsIGlzIHJldHVybmVkIG9uIGZhaWx1cmVcbiAgICAgICAgICAgIC8vIHRvIHBhcnNlLlxuICAgICAgICAgICAgaWYgKHByZWZpeExlbikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQuc3Vic3RyaW5nKHByZWZpeExlbikpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnJlamVjdENvbXBsZXRlcyhuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSByZXNwb25zZS4gJyArIGUubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgYWJvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0QWJvcnRlZCh0cnVlKTtcbiAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gYm9keSBUaGUgZ2l2ZW4gYm9keSBvZiB0aGUgcmVxdWVzdCB0byB0cnkgYW5kIGVuY29kZS5cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IGNvbnRlbnRUeXBlIFRoZSBnaXZlbiBjb250ZW50IHR5cGUsIHRvIGluZmVyIGFuIGVuY29kaW5nXG4gICAgICogICAgIGZyb20uXG4gICAgICogQHJldHVybiB7Kn0gRWl0aGVyIHRoZSBlbmNvZGVkIGJvZHkgYXMgYSBzdHJpbmcsIGlmIHN1Y2Nlc3NmdWwsXG4gICAgICogICAgIG9yIHRoZSB1bmFsdGVyZWQgYm9keSBvYmplY3QgaWYgbm8gZW5jb2RpbmcgY291bGQgYmUgaW5mZXJyZWQuXG4gICAgICovXG4gICAgX2VuY29kZUJvZHlPYmplY3Q6IGZ1bmN0aW9uKGJvZHksIGNvbnRlbnRUeXBlKSB7XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGJvZHk7ICAvLyBBbHJlYWR5IGVuY29kZWQuXG4gICAgICB9XG4gICAgICB2YXIgYm9keU9iaiA9IC8qKiBAdHlwZSB7T2JqZWN0fSAqLyAoYm9keSk7XG4gICAgICBzd2l0Y2goY29udGVudFR5cGUpIHtcbiAgICAgICAgY2FzZSgnYXBwbGljYXRpb24vanNvbicpOlxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShib2R5T2JqKTtcbiAgICAgICAgY2FzZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3d3d0Zvcm1VcmxFbmNvZGUoYm9keU9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9keTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGVuY29kZSBhcyB4LXd3dy1mb3JtLXVybGVuY29kZWQuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAuXG4gICAgICovXG4gICAgX3d3d0Zvcm1VcmxFbmNvZGU6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgdmFyIHBpZWNlcyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAvLyBUT0RPKHJpY3RpYyk6IGhhbmRsZSBhcnJheSB2YWx1ZXMgaGVyZSwgaW4gYSBjb25zaXN0ZW50IHdheSB3aXRoXG4gICAgICAgIC8vICAgaXJvbi1hamF4IHBhcmFtcy5cbiAgICAgICAgcGllY2VzLnB1c2goXG4gICAgICAgICAgICB0aGlzLl93d3dGb3JtVXJsRW5jb2RlUGllY2Uoa2V5KSArICc9JyArXG4gICAgICAgICAgICB0aGlzLl93d3dGb3JtVXJsRW5jb2RlUGllY2Uob2JqZWN0W2tleV0pKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIHBpZWNlcy5qb2luKCcmJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gc3RyIEEga2V5IG9yIHZhbHVlIHRvIGVuY29kZSBhcyB4LXd3dy1mb3JtLXVybGVuY29kZWQuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAuXG4gICAgICovXG4gICAgX3d3d0Zvcm1VcmxFbmNvZGVQaWVjZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAvLyBTcGVjIHNheXMgdG8gbm9ybWFsaXplIG5ld2xpbmVzIHRvIFxcclxcbiBhbmQgcmVwbGFjZSAlMjAgc3BhY2VzIHdpdGggKy5cbiAgICAgIC8vIGpRdWVyeSBkb2VzIHRoaXMgYXMgd2VsbCwgc28gdGhpcyBpcyBsaWtlbHkgdG8gYmUgd2lkZWx5IGNvbXBhdGlibGUuXG4gICAgICBpZiAoc3RyID09PSBudWxsIHx8IHN0ciA9PT0gdW5kZWZpbmVkIHx8ICFzdHIudG9TdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG4vZywgJ1xcclxcbicpKVxuICAgICAgICAucmVwbGFjZSgvJTIwL2csICcrJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBjb2RlIGFuZCBzdGF0dXMgdGV4dC5cbiAgICAgKi9cbiAgICBfdXBkYXRlU3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldFN0YXR1cyh0aGlzLnhoci5zdGF0dXMpO1xuICAgICAgdGhpcy5fc2V0U3RhdHVzVGV4dCgodGhpcy54aHIuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogdGhpcy54aHIuc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1yZXF1ZXN0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4gIC8qKiBAcG9seW1lckJlaGF2aW9yICovXG4gIFBvbHltZXIuUGFwZXJTcGlubmVyQmVoYXZpb3IgPSB7XG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIERpc3BsYXlzIHRoZSBzcGlubmVyLlxuICAgICAgICovXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX19hY3RpdmVDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbHRlcm5hdGl2ZSB0ZXh0IGNvbnRlbnQgZm9yIGFjY2Vzc2liaWxpdHkgc3VwcG9ydC5cbiAgICAgICAqIElmIGFsdCBpcyBwcmVzZW50LCBpdCB3aWxsIGFkZCBhbiBhcmlhLWxhYmVsIHdob3NlIGNvbnRlbnQgbWF0Y2hlcyBhbHQgd2hlbiBhY3RpdmUuXG4gICAgICAgKiBJZiBhbHQgaXMgbm90IHByZXNlbnQsIGl0IHdpbGwgZGVmYXVsdCB0byAnbG9hZGluZycgYXMgdGhlIGFsdCB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgYWx0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdsb2FkaW5nJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfX2FsdENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfX2Nvb2xpbmdEb3duOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzOiBmdW5jdGlvbihhY3RpdmUsIGNvb2xpbmdEb3duKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBhY3RpdmUgfHwgY29vbGluZ0Rvd24gPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICBjb29saW5nRG93biA/ICdjb29sZG93bicgOiAnJ1xuICAgICAgXS5qb2luKCcgJyk7XG4gICAgfSxcblxuICAgIF9fYWN0aXZlQ2hhbmdlZDogZnVuY3Rpb24oYWN0aXZlLCBvbGQpIHtcbiAgICAgIHRoaXMuX19zZXRBcmlhSGlkZGVuKCFhY3RpdmUpO1xuICAgICAgdGhpcy5fX2Nvb2xpbmdEb3duID0gIWFjdGl2ZSAmJiBvbGQ7XG4gICAgfSxcblxuICAgIF9fYWx0Q2hhbmdlZDogZnVuY3Rpb24oYWx0KSB7XG4gICAgICAvLyB1c2VyLXByb3ZpZGVkIGBhcmlhLWxhYmVsYCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgcHJvdG90eXBlIGRlZmF1bHRcbiAgICAgIGlmIChhbHQgPT09ICdsb2FkaW5nJykge1xuICAgICAgICB0aGlzLmFsdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgYWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3NldEFyaWFIaWRkZW4oYWx0PT09JycpO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGFsdCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9fc2V0QXJpYUhpZGRlbjogZnVuY3Rpb24oaGlkZGVuKSB7XG4gICAgICB2YXIgYXR0ciA9ICdhcmlhLWhpZGRlbic7XG4gICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX19yZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2Nvb2xpbmdEb3duID0gZmFsc2U7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1iZWhhdmlvci5odG1sIiwiXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXBhcGVyLXNwaW5uZXItc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT46aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyOHB4O2hlaWdodDoyOHB4Oy0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb246MTU2OG1zOy0tcGFwZXItc3Bpbm5lci1leHBhbmQtY29udHJhY3QtZHVyYXRpb246MTMzM21zOy0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uOjUzMzJtczstLXBhcGVyLXNwaW5uZXItY29vbGRvd24tZHVyYXRpb246NDAwbXN9I3NwaW5uZXJDb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXJlY3Rpb246bHRyfSNzcGlubmVyQ29udGFpbmVyLmFjdGl2ZXstd2Via2l0LWFuaW1hdGlvbjpjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOmNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgY29udGFpbmVyLXJvdGF0ZXt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBjb250YWluZXItcm90YXRle3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnNwaW5uZXItbGF5ZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1jb2xvcjp2YXIoLS1wYXBlci1zcGlubmVyLWNvbG9yLHZhcigtLWdvb2dsZS1ibHVlLTUwMCkpfS5sYXllci0xe2JvcmRlci1jb2xvcjp2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3IsdmFyKC0tZ29vZ2xlLWJsdWUtNTAwKSl9LmxheWVyLTJ7Ym9yZGVyLWNvbG9yOnZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcix2YXIoLS1nb29nbGUtcmVkLTUwMCkpfS5sYXllci0ze2JvcmRlci1jb2xvcjp2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3IsdmFyKC0tZ29vZ2xlLXllbGxvdy01MDApKX0ubGF5ZXItNHtib3JkZXItY29sb3I6dmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yLHZhcigtLWdvb2dsZS1ncmVlbi01MDApKX0uYWN0aXZlIC5zcGlubmVyLWxheWVyey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmlsbC11bmZpbGwtcm90YXRlOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLXBhcGVyLXNwaW5uZXItZnVsbC1jeWNsZS1kdXJhdGlvbik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGU7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLXBhcGVyLXNwaW5uZXItZnVsbC1jeWNsZS1kdXJhdGlvbik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO29wYWNpdHk6MX0uYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTF7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMS1mYWRlLWluLW91dDthbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMS1mYWRlLWluLW91dH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTJ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMi1mYWRlLWluLW91dDthbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMi1mYWRlLWluLW91dH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTN7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMy1mYWRlLWluLW91dDthbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItMy1mYWRlLWluLW91dH0uYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItNC1mYWRlLWluLW91dDthbmltYXRpb24tbmFtZTpmaWxsLXVuZmlsbC1yb3RhdGUsbGF5ZXItNC1mYWRlLWluLW91dH1ALXdlYmtpdC1rZXlmcmFtZXMgZmlsbC11bmZpbGwtcm90YXRlezEyLjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTI1JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0zNy41JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDA1ZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDU0MGRlZyl9NjIuNSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDY3NWRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg4MTBkZWcpfTg3LjUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5NDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMDgwZGVnKX19QGtleWZyYW1lcyBmaWxsLXVuZmlsbC1yb3RhdGV7MTIuNSV7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfTI1JXt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9MzcuNSV7dHJhbnNmb3JtOnJvdGF0ZSg0MDVkZWcpfTUwJXt0cmFuc2Zvcm06cm90YXRlKDU0MGRlZyl9NjIuNSV7dHJhbnNmb3JtOnJvdGF0ZSg2NzVkZWcpfTc1JXt0cmFuc2Zvcm06cm90YXRlKDgxMGRlZyl9ODcuNSV7dHJhbnNmb3JtOnJvdGF0ZSg5NDVkZWcpfXRve3RyYW5zZm9ybTpyb3RhdGUoMTA4MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBsYXllci0xLWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MX0yNSV7b3BhY2l0eToxfTI2JXtvcGFjaXR5OjB9ODkle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBsYXllci0xLWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MX0yNSV7b3BhY2l0eToxfTI2JXtvcGFjaXR5OjB9ODkle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTItZmFkZS1pbi1vdXR7MCV7b3BhY2l0eTowfTE1JXtvcGFjaXR5OjB9MjUle29wYWNpdHk6MX01MCV7b3BhY2l0eToxfTUxJXtvcGFjaXR5OjB9dG97b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGxheWVyLTItZmFkZS1pbi1vdXR7MCV7b3BhY2l0eTowfTE1JXtvcGFjaXR5OjB9MjUle29wYWNpdHk6MX01MCV7b3BhY2l0eToxfTUxJXtvcGFjaXR5OjB9dG97b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItMy1mYWRlLWluLW91dHswJXtvcGFjaXR5OjB9NDAle29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTc1JXtvcGFjaXR5OjF9NzYle29wYWNpdHk6MH10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbGF5ZXItMy1mYWRlLWluLW91dHswJXtvcGFjaXR5OjB9NDAle29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTc1JXtvcGFjaXR5OjF9NzYle29wYWNpdHk6MH10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBsYXllci00LWZhZGUtaW4tb3V0ezAle29wYWNpdHk6MH02NSV7b3BhY2l0eTowfTc1JXtvcGFjaXR5OjF9OTAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbGF5ZXItNC1mYWRlLWluLW91dHswJXtvcGFjaXR5OjB9NjUle29wYWNpdHk6MH03NSV7b3BhY2l0eToxfTkwJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX0uY2lyY2xlLWNsaXBwZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NTAlO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtib3JkZXItY29sb3I6aW5oZXJpdH0uc3Bpbm5lci1sYXllcjo6YWZ0ZXJ7bGVmdDo0NSU7d2lkdGg6MTAlO2JvcmRlci10b3Atc3R5bGU6c29saWR9LmNpcmNsZS1jbGlwcGVyOjphZnRlciwuc3Bpbm5lci1sYXllcjo6YWZ0ZXJ7Y29udGVudDonJztib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym9yZGVyLXdpZHRoOnZhcigtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoLDNweCk7Ym9yZGVyLWNvbG9yOmluaGVyaXQ7Ym9yZGVyLXJhZGl1czo1MCV9LmNpcmNsZS1jbGlwcGVyOjphZnRlcntib3R0b206MDt3aWR0aDoyMDAlO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0uY2lyY2xlLWNsaXBwZXIubGVmdDo6YWZ0ZXJ7bGVmdDowO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyOWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMjlkZWcpfS5jaXJjbGUtY2xpcHBlci5yaWdodDo6YWZ0ZXJ7bGVmdDotMTAwJTtib3JkZXItbGVmdC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMjlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEyOWRlZyl9LmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXI6OmFmdGVyLC5hY3RpdmUgLmdhcC1wYXRjaDo6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246dmFyKC0tcGFwZXItc3Bpbm5lci1leHBhbmQtY29udHJhY3QtZHVyYXRpb24pOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLXBhcGVyLXNwaW5uZXItZXhwYW5kLWNvbnRyYWN0LWR1cmF0aW9uKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdDo6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpsZWZ0LXNwaW47YW5pbWF0aW9uLW5hbWU6bGVmdC1zcGlufS5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0OjphZnRlcnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJpZ2h0LXNwaW47YW5pbWF0aW9uLW5hbWU6cmlnaHQtc3Bpbn1ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzBkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzBkZWcpfX1Aa2V5ZnJhbWVzIGxlZnQtc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDEzMGRlZyl9NTAle3RyYW5zZm9ybTpyb3RhdGUoLTVkZWcpfXRve3RyYW5zZm9ybTpyb3RhdGUoMTMwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0LXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpfX1Aa2V5ZnJhbWVzIHJpZ2h0LXNwaW57MCV7dHJhbnNmb3JtOnJvdGF0ZSgtMTMwZGVnKX01MCV7dHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKX10b3t0cmFuc2Zvcm06cm90YXRlKC0xMzBkZWcpfX0jc3Bpbm5lckNvbnRhaW5lci5jb29sZG93bnstd2Via2l0LWFuaW1hdGlvbjpjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGUsZmFkZS1vdXQgdmFyKC0tcGFwZXItc3Bpbm5lci1jb29sZG93bi1kdXJhdGlvbikgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7YW5pbWF0aW9uOmNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZSxmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1vdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLW91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX08L3N0eWxlPiA8L3RlbXBsYXRlPiA8L2RvbS1tb2R1bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItc3R5bGVzLmh0bWwiLCI8bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLmh0bWxcIj5cblxuPCEtLVxuICBgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zYFxuXG4gICoqRnJvbSB2My54LngsIHRoaXMgY29tcG9uZW50IG9ubHkgd29ya3Mgd2l0aCBQb2x5bWVyIDEuNysgb3IgMi4wKy4qKlxuXG4gIFshW1B1Ymxpc2hlZCBvbiB3ZWJjb21wb25lbnRzLm9yZ10oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS93ZWJjb21wb25lbnRzLm9yZy1wdWJsaXNoZWQtYmx1ZS5zdmcpXShodHRwczovL3d3dy53ZWJjb21wb25lbnRzLm9yZy9lbGVtZW50L2VsbGlwdGljYWxqcy9wYXBlci1hdXRvY29tcGxldGUpXG5cbiAgWyFbU2F1Y2UgVGVzdCBTdGF0dXNdKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS9icm93c2VyLW1hdHJpeC9qaHVlc29zLnN2ZyldKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS91L2podWVzb3MpXG5cbiAgQWxsb3dzIHRvIGFkZCBhdXRvY29tcGxldGUgY2FwYWJpbGl0aWVzIHRvIGFueSBpbnB1dCBmaWVsZC4gVGhpcyBpcyBkZXNpcmFibGUgd2hlbiB5b3UgaGF2ZSBhbiBpbnB1dCBmaWVsZCB3aXRoIGN1c3RvbVxuICBsb2dpYyBhbmQgeW91IGp1c3Qgd2FudCB0byBhZGQgdGhlIGZlYXR1cmUgdG8gaGVscCB1c2VycyB3aXRoIHRoZSBzZWxlY3Rpb24uIElmIHlvdSB3YW50IHRvIHVzZSBpdCBpbiBjb21iaW5hdGlvbiB3aXRoXG4gIGEgcmVndWxhciBgPHBhcGVyLWlucHV0PmAsIHlvdSBjYW4gdXNlIGA8cGFwZXItYXV0b2NvbXBsZXRlPmAuXG5cbiAgRXhhbXBsZTpcbiAgYGBgXG4gIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtd3JhcHBlclwiPlxuICAgIDxwYXBlci1pbnB1dCBpZD1cIm15SW5wdXRcIiBsYWJlbD1cIlNlbGVjdCBTdGF0ZVwiPjwvcGFwZXItaW5wdXQ+XG5cbiAgICA8cGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zXG4gICAgICBmb3I9XCJteUlucHV0XCJcbiAgICAgIHNvdXJjZT1cIltbYWNjb3VudHNdXVwiPjwvcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zPlxuICA8L2Rpdj5cbiAgYGBgXG5cbiAgSXQgaXMgKippbXBvcnRhbnQgdG8gcHJvdmlkZSBib3RoIGB0ZXh0UHJvcGVydHlgIGFuZCBgdmFsdWVQcm9wZXJ0eWAgd2hlbiB3b3JraW5nIHdpdGggYSBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uIGFuZFxuICBvciBjdXN0b20gdGVtcGxhdGVzLioqIFRoZXkgYXJlIG5lZWRlZCB0byBrZWVwIHRoZSBjb21wb25lbnQgYWNjZXNzaWJsZSBhbmQgZm9yIHRoZSBldmVudHMgKGUuZy4gb25TZWxlY3QpIHRvIGtlZXBcbiAgd29ya2luZy5cblxuICAjIyMgQWJvdXQgUG9seW1lciAxLnggYW5kIDIueCBDb21wYXRpYmlsaXR5XG4gIEZyb20gdmVyc2lvbiBgMy54LnhgLCB0aGlzIGNvbXBvbmVudCB3b3JrIHdpdGggYm90aCBQb2x5bWVyIDEuNysgb3IgUG9seW1lciAyLjArIFBsZWFzZSB0YWtlIGEgbG9vayB0byB0aGVcbiAgW01JR1JBVElPTi5tZF0oLi9NSUdSQVRJT04ubWQpIGZpbGUgdGhhdCBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICMjIyBDdXN0b20gc2VhcmNoXG4gIFRoaXMgY29tcG9uZW50IGhhcyB0aGUgcHVibGljIG1ldGhvZCBgcXVlcnlGbmAgdGhhdCBpcyBjYWxsZWQgaW4gZWFjaCBrZXkgc3Ryb2tlIGFuZCBpdCBpcyByZXNwb25zaWJsZSB0byBxdWVyeVxuICBhbGwgaXRlbXMgaW4gdGhlIGBzb3VyY2VgIGFuZCByZXR1cm5zIG9ubHkgdGhvc2UgaXRlbXMgdGhhdCBtYXRjaGVzIGNlcnRhaW4gZmlsdGVyaW5nIGNyaXRlcmlhLiBCeSBkZWZhdWx0LCB0aGlzXG4gIGNvbXBvbmVudCBzZWFyY2ggZm9yIGl0ZW1zIHRoYXQgc3RhcnQgd2l0aCB0aGUgcmVjZW50IHF1ZXJ5IChjYXNlIGluc2Vuc2l0aXZlKS5cbiAgWW91IGNhbiBvdmVycmlkZSB0aGlzIGJlaGF2aW9yIHByb3ZpZGluZyB5b3VyIG93biBxdWVyeSBmdW5jdGlvbiwgYXMgbG9uZyBhcyB0aGVzZSB0d28gcmVxdWlyZW1lbnRzIGFyZSBmdWxmaWxsOlxuXG4gIC0gVGhlIHF1ZXJ5IGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLlxuICAtIFRoZSBBUEkgaXMgcmVzcGVjdGVkIGFuZCB0aGUgbWV0aG9kIGFsd2F5cyByZXR1cm4gYW4gQXJyYXkuXG5cblxuICBUaGUgdGVtcGxhdGUgdXNlIHRvIHJlbmRlciBlYWNoIHN1Z2dlc3Rpb24gZGVwZW5kcyBvbiB0aGUgc3RydWN0dXJlIG9mIGVhY2ggb2JqZWN0IHRoYXQgdGhpcyBtZXRob2QgcmV0dXJucy4gRm9yIHRoZVxuICBkZWZhdWx0IHRlbXBsYXRlLCBlYWNoIHN1Z2dlc3Rpb24gc2hvdWxkIGZvbGxvdyB0aGlzIG9iamVjdCBzdHJ1Y3R1cmU6XG5cbiAgYGBgXG4gICAge1xuICAgICAgdGV4dDogb2JqVGV4dCxcbiAgICAgIHZhbHVlOiBvYmpWYWx1ZVxuICAgIH1cbiAgYGBgXG5cbiAgVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiBhIGxvY2FsIGRhdGEgc291cmNlIGlzIHVzZWQuIFdoZW4gdXNpbmcgYSBgcmVtb3RlRGF0YVNvdXJjZWAgdXNlciBpcyByZXNwb25zaWJsZSBvZlxuICBkb2luZyB0aGUgc2VhcmNoIGFuZCBzcGVjaWZ5IHN1Z2dlc3Rpb25zIG1hbnVhbGx5LlxuXG4gICMjIyBDdXN0b20gdGVtcGxhdGVzXG4gIEEgdGVtcGxhdGUgZm9yIGVhY2ggc3VnZ2VzdGlvbiBjYW4gYmUgcHJvdmlkZWQsIGJ1dCBmb3Igbm93LCB0aGVyZSBhcmUgbGltaXRhdGlvbnMgaW4gdGhlIHdheSB5b3UgY2FuIGN1c3RvbWl6ZVxuICB0aGUgdGVtcGxhdGUuIFBsZWFzZSByZWFkIHRoZSB0aGUgZm9sbG93aW5nIHNlY3Rpb25zIGNhcmVmdWxseS5cbiAgSW4gb3JkZXIgdG8gc2V0IHlvdXIgb3duIHRlbXBsYXRlLCB5b3UgbmVlZCB0byBhZGQgYSBgPHRlbXBsYXRlPmAgdGFnIHdpdGggdGhlIHNsb3QgbmFtZVxuICBgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZWAgYW5kIGEgc3RydWN0dXJlIGVxdWl2YWxlbnQgdG8gdGhlIG9uZSBzaG93biBpbiB0aGUgYDxhY2NvdW50LWF1dG9jb21wbGV0ZT5gIGNvbXBvbmVudCBpblxuICB0aGUgZGVtby5cblxuICBZb3UgbmVlZCB0byBhbHdheXMgbWFpbnRhaW4gdGhpcyBzdHJ1Y3R1cmUuIFRoZW4geW91IGNhbiBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgcGFwZXItaXRlbS4gVGhlc2UgYXJlIHRoZSByZWFzb25zXG4gIHdoeSB5b3UgbmVlZCB0byBtYWludGFpbiBpdDpcblxuICAtIGBvblNlbGVjdEhhbmRsZXJgIGl0IGlzIHZlcnkgaW1wb3J0YW50IGJlY2F1c2UgaXQgd2lsbCBub3RpZnkgdGhlIGBhdXRvY29tcGxldGVgIGNvbXBvbmVudCB3aGVuIHVzZXIgc2VsZWN0cyBvbmUgaXRlbS5cbiAgSWYgeW91IGRvbid0IGFkZCB0aGlzIG9wdGlvbiwgd2hlbiB1c2VyIGNsaWNrcyBpbiBvbmUgb2YgdGhlIGl0ZW1zLCBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAtIGBpZGAsIGByb2xlYCBhbmQgYGFyaWEtc2VsZWN0ZWRgIG5lZWQgdG8gYmUgdGhlcmUgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucy4gSWYgeW91IGRvbid0IHNldCB0aGVtLCB0aGUgY29tcG9uZW50XG4gIHdpbGwgY29udGludWUgd29ya2luZyBidXQgaXQgd2lsbCBub3QgYmUgYWNjZXNzaWJsZSBmb3IgdXNlciB3aXRoIGRpc2FiaWxpdGllcy5cblxuXG4gIEl0IGlzIGltcG9ydGFudCB0byBjbGFyaWZ5IHRoYXQgbWV0aG9kcyBgX29uU2VsZWN0YCBhbmQgYF9nZXRTdWdnZXN0aW9uSWRgIGRvIG5vdCBuZWVkIHRvIGJlIGltcGxlbWVudGVkLiBUaGV5IGFyZVxuICBwYXJ0IG9mIHRoZSBsb2dpYyBvZiBgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zYC5cblxuICBXaGVuIHByb3ZpZGluZyB5b3VyIG93biBjdXN0b20gdGVtcGxhdGUsIHlvdSBtaWdodCBhbHNvIG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uLiBUaGUgcmVhc29uXG4gIGZvciB0aGF0IGlzIHRoYXQgdGhlIGRlZmF1bHQgc2VhcmNoIGZ1bmN0aW9uIG9ubHkgZXhwb3NlcyB0ZXh0IGFuZCB2YWx1ZSBpbiB0aGUgcmVzdWx0cy4gSWYgZWFjaCBpdGVtIGluIHlvdXIgZGF0YVxuICBzb3VyY2UgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiwgdGhlbiB5b3Ugd29uJ3QgYmUgYWJsZSB0byBhY2Nlc3MgaXQuIFNlZSB0aGUgY29kZSBvZiBgPGFkZHJlc3MtYXV0b2NvbXBsZXRlPmBcbiAgZWxlbWVudCBpbiB0aGUgZGVtbyBmb2xkZXIgZm9yIGEgY29tcGxldGUgZXhhbXBsZS5cblxuICBBbm90aGVyIGltcG9ydGFudCB0aGluZyB0byBwb2ludCBvdXQgaXMgcmVsYXRlZCB0byB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGluIHRoZSByZXN1bHRzLiBUaGUgaGVpZ2h0IG9mXG4gIHRoZSBzdWdnZXN0aW9uIHRlbXBsYXRlIGNoYW5nZXMgZHluYW1pY2FsbHkgZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgb2YgYSBzdWdnZXN0aW9uIGl0ZW0uIEhvd2V2ZXIsIHRoZSBmb2xsb3dpbmdcbiAgYXNzdW1wdGlvbnMgd2VyZSBtYWRlOlxuICAtIEFsbCBzdWdnZXN0aW9ucyBpdGVtcyBoYXZlIHRoZSBzYW1lIGhlaWdodFxuICAtIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGlzIGZpeGVkIGFuZCBjYW4gYmUgZGV0ZXJtaW5lZCBhdCBhbnkgdGltZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHVzZSBpbWFnZXMgaW4gdGhlXG4gIHJlc3VsdHMsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgYSBwbGFjZWhvbGRlciBvciBhIGZpeGVkIGhlaWdodC5cblxuXG4gICMjIyBTdHlsaW5nXG5cbiAgYDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+YCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnNcbiAgZm9yIHN0eWxpbmc6XG5cbiAgQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4gIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG4gIGAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodGAgfCBwYXBlciBpdGVtIG1pbiBoZWlnaHQgfCBgMzZweGBcbiAgYC0tc3VnZ2VzdGlvbnMtd3JhcHBlcmAgfCBtaXhpbiB0byBhcHBseSB0byB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyIHwgYHt9YFxuICBgLS1zdWdnZXN0aW9ucy1pdGVtYCB8IG1peGluIHRvIGFwcGx5IHRvIHRoZSBzdWdnZXN0aW9ucyBpdGVtcyB8IGB7fWBcblxuICAjIyMgQWNjZXNzaWJpbGl0eVxuICBUaGlzIGNvbXBvbmVudCBleHBvc2VzIGNlcnRhaW4gbmVjZXNzYXJ5IHZhbHVlcyBpbiBvcmRlciB0byBtYWtlIHlvdXIgY29tcG9uZW50IGFjY2Vzc2libGUuIFdoZW4gY2hlY2tpbmcgdGhlIEFSSUFcbiAgc3BlY3MsIGl0IGlzIHNhaWQgdGhhdCB5b3UgbmVlZCB0byBpbmZvcm0gdXNlcnMgb2YgdGhlIGZvbGxvd2luZyBjaGFuZ2VzOlxuICAtIFdoZXRoZXIgdGhlIHBvcHVwIHdpdGggc3VnZ2VzdGlvbnMgaXMgb3BlbiBvciBub3QuXG4gIC0gSWQgb2YgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBlbGVtZW50XG5cbiBZb3UgY2FuIGFjY2VzcyB0aGVzZSB2YWx1ZXMgdXNpbmcgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBgaXNPcGVuYCBhbmQgYGhpZ2hsaWdodGVkU3VnZ2VzdGlvbmAuIFRoZSBpZCBvZiBlYWNoXG4gZWxlbWVudCBpbiBoaWdobGlnaHRlZFN1Z2dlc3Rpb24gYSByYW5kb20gYW5kIHVuaXF1ZSBpZC5cblxuIEluIGFkZGl0aW9uLCBhcyBsb25nIGFzIGRldmVsb3BlcnMgZm9sbG93IHRoZSBnZW5lcmFsIHN0cnVjdHVyZSBvZiBlYWNoIHN1Z2dlc3Rpb24gdGVtcGxhdGUsIHRoZSBmb2xsb3dpbmcgQTExWVxuIGZlYXR1cmVzIGFyZSBzZXQgaW4gZWFjaCBzdWdnZXN0aW9uOlxuIC0gYHJvbGU9XCJvcHRpb25cImBcbiAtIGBhcmlhLXNlbGVjdGVkPVwidHJ1ZXxmYWxzZVwiYC4gVGhpcyB2YWx1ZSB3aWxsIGJlIGZhbHNlIGZvciBhbGwgc3VnZ2VzdGlvbiBleGNlcHQgaW4gdGhlIG9uZSB3aGljaCBpcyBjdXJyZW50bHlcbiBoaWdobGlnaHRlZC5cblxuICBAZGVtbyBkZW1vL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1kZW1vLmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgcGFwZXItbWF0ZXJpYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWF4LWhlaWdodDogMjUycHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgQGFwcGx5IC0tc3VnZ2VzdGlvbnMtd3JhcHBlcjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSxcbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pdGVtKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgMzZweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgICAgICBAYXBwbHkgLS1zdWdnZXN0aW9ucy1pdGVtO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtOmhvdmVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWl0ZW06aG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbS5hY3RpdmUsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaXRlbS5hY3RpdmUpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSUUxMSBwYXBlci1pdGVtIG1pbi1oZWlnaHQgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWl0ZW0vaXNzdWVzLzM1XG4gICAgICAgKi9cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCAzNnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdj5cbiAgICAgIDwhLS0gdW5zZWxlY3RhYmxlIGlzIG5lZWRlZCB0byBmaXggYW4gaXNzdWUgcmVsYXRlZCB0byB0aGUgZm9jdXMgYmVpbmcgdGFrZW4gYXdheSB3aGVuIGNsaWNraW5nIGluIHRoZVxuICAgICAgIHJlc3VsdHMgc2Nyb2xsYmFyIC0tPlxuICAgICAgPHBhcGVyLW1hdGVyaWFsIGVsZXZhdGlvbj1cIjFcIiBpZD1cInN1Z2dlc3Rpb25zV3JhcHBlclwiIHVuc2VsZWN0YWJsZT1cIm9uXCI+PC9wYXBlci1tYXRlcmlhbD5cblxuICAgICAgPCEtLSBEZWZhdWx0IHN1Z2dlc3Rpb24gdGVtcGxhdGUgLS0+XG4gICAgICA8dGVtcGxhdGUgaWQ9XCJkZWZhdWx0VGVtcGxhdGVcIj5cbiAgICAgICAgPHBhcGVyLWl0ZW0gaWQkPVwiW1tfZ2V0U3VnZ2VzdGlvbklkKGluZGV4KV1dXCIgcm9sZT1cIm9wdGlvblwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiIG9uLXRhcD1cIl9vblNlbGVjdFwiPlxuICAgICAgICAgIDxkaXY+W1tfZ2V0SXRlbVRleHQoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgPCEtLSBDdXN0b20gdGVtcGxhdGUgLS0+XG4gIDxzbG90IGlkPVwidGVtcGxhdGVzXCIgbmFtZT1cImF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVcIj48L3Nsb3Q+XG4gIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPHNjcmlwdD5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBESVJFQ1RJT04gPSB7XG4gICAgICBVUDogJ3VwJyxcbiAgICAgIERPV046ICdkb3duJ1xuICAgIH07XG5cbiAgICB2YXIgS0VZX0NPREVTID0ge1xuICAgICAgTEVGVF9BUlJPVzogMzcsXG4gICAgICBSSUdIVF9BUlJPVzogMzksXG4gICAgICBVUF9BUlJPVzogMzgsXG4gICAgICBET1dOX0FSUk9XOiA0MCxcbiAgICAgIEVOVEVSOiAxMyxcbiAgICAgIEVTQ0FQRTogMjdcbiAgICB9O1xuXG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucycsXG5cbiAgICAgIGJlaGF2aW9yczogW1xuICAgICAgICBQb2x5bWVyLlRlbXBsYXRpemVyXG4gICAgICBdLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZCBvZiBpbnB1dFxuICAgICAgICAgKi9cbiAgICAgICAgJ2Zvcic6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHRydWVgIGlmIHRoZSBzdWdnZXN0aW9ucyBsaXN0IGlzIG9wZW4sIGBmYWxzZSBvdGhlcndpc2VgXG4gICAgICAgICAqL1xuICAgICAgICBpc09wZW46IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWluaW11bSBsZW5ndGggdG8gdHJpZ2dlciBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1heCBudW1iZXIgb2Ygc3VnZ2VzdGlvbnMgdG8gYmUgZGlzcGxheWVkIHdpdGhvdXQgc2Nyb2xsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtYXhWaWV3YWJsZUl0ZW1zOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiA3XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHRleHQgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRleHRQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZVByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBzb3VyY2VgIEFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgb3B0aW9ucyB0byBleGVjdXRlIHRoZSBhdXRvY29tcGxldGUgZmVhdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHNlbGVjdGVkIG9wdGlvbi4gVGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IGRlcGVuZHMgb24gdGhlXG4gICAgICAgICAqICBzdHJ1Y3R1cmUgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBkYXRhIHNvdXJjZS5cbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyB0byBhIHJlbW90ZSBkYXRhIHNvdXJjZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlU291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgdHlwZSBzZXBhcmF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50TmFtZXNwYWNlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnLSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBoaWdobGlnaHRlZCBzdWdnZXN0aW9uLiBUaGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgaXM6XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgIGVsZW1lbnRJZDogSUQgLy8gaWQgb2YgdGhlIGhpZ2hsaWdodGVkIERPTSBlbGVtZW50XG4gICAgICAgICAqICAgIG9wdGlvbjogLy8gaGlnaGxpZ2h0ZWQgb3B0aW9uIGRhdGFcbiAgICAgICAgICogfVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodGVkU3VnZ2VzdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICB2YWx1ZToge30sXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIGF2YWlsYWJsZSBpdGVtcy4gVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSB1c2VkIGJ5IHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyxcbiAgICAgICAgICogaXQgaXMgYWxzbyBleHBvc2VkIGhlcmUgc28gaXQgaXMgcG9zc2libGUgdG8gcHJvdmlkZSBhIGN1c3RvbSBxdWVyeUZuLlxuICAgICAgICAgKi9cbiAgICAgICAgIHF1ZXJ5Rm46IHtcbiAgICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGl0IHdpbGwgYWx3YXlzIGhpZ2hsaWdodCB0aGUgZmlyc3QgcmVzdWx0IGVhY2ggdGltZSBuZXcgc3VnZ2VzdGlvbnMgYXJlIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodEZpcnN0OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYF9zdWdnZXN0aW9uc2AgQXJyYXkgd2l0aCB0aGUgYWN0dWFsIHN1Z2dlc3Rpb25zIHRvIGRpc3BsYXlcbiAgICAgICAgICovXG4gICAgICAgIF9zdWdnZXN0aW9uczoge1xuICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgIG9ic2VydmVyOiAnX29uU3VnZ2VzdGlvbnNDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIGluIHRoZSBzdWdnZXN0aW9ucyBwb3B1cCBvZiB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIGVsZW1lbnQsIGJlaW5nIGAwYCB0aGUgZmlyc3Qgb25lLFxuICAgICAgICAgKiBhbmQgYHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCAtIDFgIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAqL1xuICAgICAgICBfY3VycmVudEluZGV4OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC4gVGhlbiB0aGUgYHNjcm9sbFRvcGAgcG9zaXRpb24gaXMgY2FsY3VsYXRlZCBtdWx0aXBseWluZyB0aGVcbiAgICAgICAgICogYF9pdGVtSGVpZ2h0YCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAgICAgKi9cbiAgICAgICAgX3Njcm9sbEluZGV4OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gZWxlbWVudCBpbiBwaXhlbHNcbiAgICAgICAgICovXG4gICAgICAgIF9pdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAzNixcbiAgICAgICAgICBvYnNlcnZlcjogJ19pdGVtSGVpZ2h0Q2hhbmdlZCdcbiAgICAgICAgfSxcblxuICAgICAgICBfdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgX3RleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgdmFsdWUgaXMgdXNlZCBhcyBhIGJhc2UgdG8gZ2VuZXJhdGUgdW5pcXVlIGluZGl2aWR1YWwgaWRzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byBlYWNoIHN1Z2dlc3Rpb24gZm9yXG4gICAgICAgICAqIGFjY2Vzc2liaWxpdHkgcmVhc29ucy5cbiAgICAgICAgICovXG4gICAgICAgIF9pZEl0ZW1TZWVkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnYXJpYS0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnLScgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkpLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byBiaW5kZWQgZnVuY3Rpb25zIHNvIHdlIGNhbiBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXIgb24gZWxlbWVudCBkZXRhY2hlZFxuICAgICAgICAgKi9cbiAgICAgICAgX2JpbmRlZEZ1bmN0aW9uczoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgX29uS2V5cHJlc3M6IG51bGwsXG4gICAgICAgICAgICAgIF9vbkZvY3VzOiBudWxsLFxuICAgICAgICAgICAgICBfb25CbHVyOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGhhcyBiZWVuIGFscmVhZHkgY2FsY3VsYXRlZC5cbiAgICAgICAgICogVGhlIGFzc3VtcHRpb24gaXMgdGhhdCBpdGVtIGhlaWdodCBpcyBmaXhlZCBhbmQgaXQgd2lsbCBub3QgY2hhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUbyBhdm9pZCB1bm5lY2Vzc2FyeSBhY2Nlc3MgdG8gdGhlIERPTSwgd2Uga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCB0ZW1wbGF0ZSBiZWluZyB1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBfX2N1c3RvbVRwbFJlZjogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvLyBFbGVtZW50IExpZmVjeWNsZVxuXG4gICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgdG8gYmUgYWJsZSB0byBhY2Nlc3MgY29tcG9uZW50IG1ldGhvZHMgaW5zaWRlIHRoZSB0ZW1wbGF0ZXMgdXNlZCB3aXRoIFRlbXBsYXRpemVyXG4gICAgICAgIHRoaXMuZGF0YUhvc3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIE5lZWQgdG8gY2FwdHVyZSBtb3VzZWRvd24gdG8gcHJldmVudCB0aGUgZm9jdXMgdG8gc3dpdGNoIGZyb20gaW5wdXQgZmllbGQgd2hlbiB1c2VyIGNsaWNrcyBpbiB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIC8vIGFuZCB0aGUgYXV0b3N1Z2dlc3QgaXMgYSBjaGlsZCBvZiBhbiBlbGVtZW50IHdpdGggdGFiaW5kZXguXG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBlbmZvcmNlIHRoYXQgZGF0YUhvc3QgaXMgdGhlIHN1Z2dlc3Rpb25zIGFuZCBub3QgdGhlIGN1c3RvbSBwb2x5bWVyIGVsZW1lbnQgd2hlcmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIC8vIGlzIGRlZmluZWQuIElmIHdlIGRvIG5vdCBkbyB0aGlzLCBpdCB3b24ndCBiZSBwb3NzaWJsZSB0byBhY2Nlc3MgcGFwZXJTdWdnZXN0aW9ucyBmcm9tIHRoZSBjdXN0b20gdGVtcGxhdGVcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBhY2hpZXZlIHRoaXMgd2l0aG91dCBtb2RpZnlpbmcgUG9seW1lciBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25UZW1wbGF0ZS5fX2RhdGFIb3N0ID0gdGhpcztcbiAgICAgICAgdGhpcy50ZW1wbGF0aXplKHRoaXMuX3N1Z2dlc3Rpb25UZW1wbGF0ZSk7XG4gICAgICB9LFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZm9yKTtcblxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGlucHV0IGZpZWxkIHdpdGggaWQ6ICcgKyB0aGlzLmZvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uS2V5cHJlc3MgPSB0aGlzLl9vbktleXByZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25LZXlwcmVzcyk7XG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkZvY3VzKTtcbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25CbHVyKTtcbiAgICAgIH0sXG5cbiAgICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRGVib3VuY2VyKCdfb25TdWdnZXN0aW9uQ2hhbmdlZCcpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbktleXByZXNzKTtcbiAgICAgICAgdGhpcy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uRm9jdXMpO1xuICAgICAgICB0aGlzLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2N1c3RvbVRwbFJlZiA9IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyBFbGVtZW50IEJlaGF2aW9yXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSB0ZXh0IHByb3BlcnR5IGZyb20gdGhlIHN1Z2dlc3Rpb25cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWdnZXN0aW9uIFRoZSBzdWdnZXN0aW9uIGl0ZW1cbiAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgX2dldEl0ZW1UZXh0OiBmdW5jdGlvbiAoc3VnZ2VzdGlvbikge1xuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvblt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNob3cgdGhlIHN1Z2dlc3Rpb25zIHdyYXBwZXJcbiAgICAgICAqL1xuICAgICAgX3Nob3dTdWdnZXN0aW9uc1dyYXBwZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zV3JhcHBlciA9IHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXI7XG5cbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGUgdGhlIHN1Z2dlc3Rpb25zIHdyYXBwZXJcbiAgICAgICAqL1xuICAgICAgX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zV3JhcHBlciA9IHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXI7XG5cbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkU3VnZ2VzdGlvbiA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2NsZWFyU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIF9oYW5kbGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5yZW1vdGVTb3VyY2UpIHRoaXMuX2NyZWF0ZVN1Z2dlc3Rpb25zKGV2ZW50KTtcbiAgICAgICAgZWxzZSB0aGlzLl9yZW1vdGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgX3JlbW90ZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lucHV0LnZhbHVlO1xuXG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdjaGFuZ2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYmluZFN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIGlmIChhcnIubGVuZ3RoICYmIGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBhcnI7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsSW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9jcmVhdGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IDA7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIC8vIFNlYXJjaCBmb3IgdGhlIHdvcmQgaW4gdGhlIHNvdXJjZSBwcm9wZXJ0aWVzLlxuICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHF1ZXJ5Rm4uIFVzZXIgY2FuIG92ZXJyaWRlIHF1ZXJ5Rm4oKSB0byBwcm92aWRlIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb25hbGl0eVxuICAgICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLnF1ZXJ5Rm4odGhpcy5zb3VyY2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZ2V0IF9zdWdnZXN0aW9uVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fY3VzdG9tVHBsUmVmKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19jdXN0b21UcGxSZWY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1c3RvbVRlbXBsYXRlID0gdGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLl9fY3VzdG9tVHBsUmVmID0gY3VzdG9tVGVtcGxhdGUubGVuZ3RoID4gMCA/IGN1c3RvbVRlbXBsYXRlWzBdIDogdGhpcy4kLmRlZmF1bHRUZW1wbGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fX2N1c3RvbVRwbFJlZjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVuZGVyIHN1Z2dlc3Rpb25zIGluIHRoZSBzdWdnZXN0aW9uc1dyYXBwZXIgY29udGFpbmVyXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBzdWdnZXN0aW9ucyBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzdWdnZXN0aW9ucyB0byBiZSByZW5kZXJlZC4gVGhpcyB2YWx1ZSBpcyBub3Qgb3B0aW9uYWwsIHNvXG4gICAgICAgKiAgICBpbiBjYXNlIG5vIHN1Z2dlc3Rpb25zIG5lZWQgdG8gYmUgcmVuZGVyZWQsIHlvdSBzaG91bGQgZWl0aGVyIG5vdCBjYWxsIHRoaXMgbWV0aG9kIG9yIHByb3ZpZGUgYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIF9yZW5kZXJTdWdnZXN0aW9uczogZnVuY3Rpb24gKHN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IFBvbHltZXIuZG9tKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIpO1xuICAgICAgICB2YXIgaXNQb2x5bWVyMSA9ICFQb2x5bWVyLkVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fY2xlYXJTdWdnZXN0aW9ucygpO1xuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoc3VnZ2VzdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgaW5kZXgpIHtcbiAgICAgICAgICAvLyBjbG9uZSB0aGUgdGVtcGxhdGUgYW5kIGJpbmQgd2l0aCB0aGUgbW9kZWxcbiAgICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnN0YW1wKCk7XG4gICAgICAgICAgY2xvbmUuaXRlbSA9IHJlc3VsdDtcbiAgICAgICAgICBjbG9uZS5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgLy8gRGlmZmVyZW50IHN0YW1waW5nIG1vZGUgYmFzZWQgb24gUG9seW1lciB2ZXJzaW9uXG4gICAgICAgICAgaWYgKGlzUG9seW1lcjEpIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lLnJvb3QucXVlcnlTZWxlY3RvcignKicpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUucm9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LFxuXG4gICAgICBfY2xlYXJTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBQb2x5bWVyLmRvbSh0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyKSxcbiAgICAgICAgICBsYXN0O1xuICAgICAgICB3aGlsZSAobGFzdCA9IHN1Z2dlc3Rpb25zQ29udGFpbmVyLmxhc3RDaGlsZCkgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbmVyIHRvIGNoYW5nZXMgdG8gX3N1Z2dlc3Rpb25zIHN0YXRlXG4gICAgICAgKi9cbiAgICAgIF9vblN1Z2dlc3Rpb25zQ2hhbmdlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlKCdfb25TdWdnZXN0aW9uQ2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJTdWdnZXN0aW9ucyh0aGlzLl9zdWdnZXN0aW9ucyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1N1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUG9seW1lci5kb20uZmx1c2goKTtcblxuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsKCk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdFN1Z2dlc3Rpb25FbGVtZW50ID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdwYXBlci1pdGVtJyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFN1Z2dlc3Rpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBtYXhIZWlnaHQgb2Ygc3VnZ2VzdGlvbnMgd3JhcHBlciBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gcmVzdWx0XG4gICAgICAgICAgICAgIHRoaXMuX2l0ZW1IZWlnaHQgPSBmaXJzdFN1Z2dlc3Rpb25FbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICB0aGlzLl9oYXNJdGVtSGlnaEJlZW5DYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fbW92ZUhpZ2hsaWdodGVkKERJUkVDVElPTi5ET1dOKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0aW9uOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gdGhpcy5fc3VnZ2VzdGlvbnNbaW5kZXhdO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gc2VsZWN0ZWRPcHRpb25bdGhpcy50ZXh0UHJvcGVydHldO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gc2VsZWN0ZWRPcHRpb247XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICB0aGlzLl9lbXB0eUl0ZW1zKCk7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KHNlbGVjdGVkT3B0aW9uLCAnc2VsZWN0ZWQnKTtcblxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgYWxsIHN1Z2dlc3Rpb24gZWxlbWVudHNcbiAgICAgICAqIEByZXR1cm4ge0FycmF5fSBhIGxpc3Qgb2YgYWxsIHN1Z2dlc3Rpb24gZWxlbWVudHNcbiAgICAgICAqL1xuICAgICAgX2dldEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhcGVyLWl0ZW0nKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRW1wdHkgdGhlIGxpc3Qgb2YgY3VycmVudCBzdWdnZXN0aW9ucyBiZWluZyBkaXNwbGF5ZWRcbiAgICAgICAqL1xuICAgICAgX2VtcHR5SXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgIH0sXG5cbiAgICAgIF9nZXRJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKCFpZCkgaWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRoZSB0aGUgYWN0aXZlIHN0YXRlIGZyb20gYWxsIHN1Z2dlc3Rpb24gaXRlbXNcbiAgICAgICAqL1xuICAgICAgX3JlbW92ZUFjdGl2ZTogZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIFtdLnNsaWNlLmNhbGwoaXRlbXMpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBLZXkgcHJlc3MgZXZlbnQgaGFuZGxlclxuICAgICAgICovXG4gICAgICBfb25LZXlwcmVzczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRE9XTl9BUlJPVzpcbiAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5VUF9BUlJPVzpcbiAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLlVQKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5URVI6XG4gICAgICAgICAgdGhpcy5fa2V5ZW50ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRVNDQVBFOlxuICAgICAgICAgIHRoaXMuX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBGb3IgbGVmdCBhbmQgcmlnaHQgYXJyb3csIGNvbXBvbmVudCBzaG91bGQgZG8gbm90aGluZ1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5MRUZUX0FSUk9XOlxuICAgICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgICAgICBjYXNlIEtFWV9DT0RFUy5SSUdIVF9BUlJPVzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVTdWdnZXN0aW9ucyhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIGtleSBFTlRFUiBwcmVzcyBldmVudFxuICAgICAgICovXG4gICAgICBfa2V5ZW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiB0aGlzLl9jdXJyZW50SW5kZXggPiAtMSkge1xuICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqICBNb3ZlIHRoZSBjdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb24gdXAgb3IgZG93blxuICAgICAgICogIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gUG9zc2libGUgdmFsdWVzIGFyZSBESVJFQ1RJT04uVVAgb3IgRElSRUNUSU9OLkRPV05cbiAgICAgICAqL1xuICAgICAgX21vdmVIaWdobGlnaHRlZDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpO1xuXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbnVtYmVyT2ZJdGVtcyA9IGl0ZW1zLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdmFyIGlzRmlyc3RJdGVtID0gdGhpcy5fY3VycmVudEluZGV4ID09PSAwO1xuICAgICAgICB2YXIgaXNMYXN0SXRlbSA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gbnVtYmVyT2ZJdGVtcztcbiAgICAgICAgdmFyIGlzTm9JdGVtSGlnaGxpZ2h0ZWQgPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IC0xO1xuXG4gICAgICAgIGlmICgoaXNOb0l0ZW1IaWdobGlnaHRlZCB8fCBpc0ZpcnN0SXRlbSkgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBudW1iZXJPZkl0ZW1zO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdEl0ZW0gJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTikge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVyID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTiA/IDEgOiAtMTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggKyBtb2RpZmllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoaWdobGlnaHRlZE9wdGlvbiA9IHRoaXMuX3N1Z2dlc3Rpb25zW3RoaXMuX2N1cnJlbnRJbmRleF07XG4gICAgICAgIHZhciBoaWdobGlnaHRlZEl0ZW0gPSBpdGVtc1t0aGlzLl9jdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZUFjdGl2ZShpdGVtcyk7XG5cbiAgICAgICAgaGlnaGxpZ2h0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoaWdobGlnaHRlZEl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICB0aGlzLl9zZXRIaWdobGlnaHRlZFN1Z2dlc3Rpb24oaGlnaGxpZ2h0ZWRPcHRpb24sIGhpZ2hsaWdodGVkSXRlbS5pZCk7XG5cbiAgICAgICAgdGhpcy5fc2Nyb2xsKGRpcmVjdGlvbik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1vdmUgc2Nyb2xsIChpZiBuZWVkZWQpIHRvIGRpc3BsYXkgdGhlIGFjdGl2ZSBlbGVtZW50IGluIHRoZSBzdWdnZXN0aW9ucyBsaXN0LlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBEaXJlY3Rpb24gdG8gc2Nyb2xsLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBESVJFQ1RJT04uVVBgIGFuZCBgRElSRUNUSU9OLkRPV05gLlxuICAgICAgICovXG4gICAgICBfc2Nyb2xsOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBuZXdTY3JvbGxWYWx1ZSwgaXNTZWxlY3RlZE91dE9mVmlldztcblxuICAgICAgICB2YXIgdmlld0luZGV4ID0gdGhpcy5fY3VycmVudEluZGV4IC0gdGhpcy5fc2Nyb2xsSW5kZXg7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIG9ubHkgd2hlbiB1c2VyIHN3aXRjaCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdCBvbmVcbiAgICAgICAgdmFyIGlzRmlyc3RJdGVtQW5kT3V0T2ZWaWV3ID0gdGhpcy5fY3VycmVudEluZGV4ID09PSAwICYmIHZpZXdJbmRleCA8IDA7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIG9ubHkgd2hlbiB1c2VyIHN3aXRjaCBmcm9tIGZpcnN0IG9yIG5vIGl0ZW0gdG8gbGFzdCBvbmVcbiAgICAgICAgdmFyIGlzTGFzdEl0ZW1BbmRPdXRPZlZpZXcgPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSAmJiB2aWV3SW5kZXggPj0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuXG4gICAgICAgIGlmIChpc0ZpcnN0SXRlbUFuZE91dE9mVmlldyAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSAwO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdEl0ZW1BbmRPdXRPZlZpZXcgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCAtIHRoaXMubWF4Vmlld2FibGVJdGVtcztcbiAgICAgICAgICBpc1NlbGVjdGVkT3V0T2ZWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc2Nyb2xsSW5kZXggLSAxO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB2aWV3SW5kZXggPCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc2Nyb2xsSW5kZXggKyAxO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB2aWV3SW5kZXggPj0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSB3aGVuIHRoZSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGlzIG91dCBvZiB2aWV3LCB3ZSBuZWVkIHRvIG1vdmUgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWRPdXRPZlZpZXcpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IG5ld1Njcm9sbFZhbHVlO1xuICAgICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsSW5kZXggKiB0aGlzLl9pdGVtSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IHNjcm9sbCBiYWNrIHRvIHplcm9cbiAgICAgICAqL1xuICAgICAgX3Jlc2V0U2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSBjdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb25cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gRGF0YSBvZiB0aGUgaGlnaGxpZ2h0ZWQgb3B0aW9uXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIGlkIG9mIHRoZSBoaWdobGlnaHRlZCBkb20gZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgX3NldEhpZ2hsaWdodGVkU3VnZ2VzdGlvbjogZnVuY3Rpb24gKG9wdGlvbiwgZWxlbWVudElkKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uID0ge1xuICAgICAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgICAgIGVsZW1lbnRJZDogZWxlbWVudElkLFxuICAgICAgICAgIHRleHRWYWx1ZTogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV1cbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIF9maXJlRXZlbnQ6IGZ1bmN0aW9uIChvcHRpb24sIGV2dCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLl9nZXRJZCgpO1xuICAgICAgICB2YXIgZXZlbnQgPSAnYXV0b2NvbXBsZXRlJyArIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBldnQ7XG5cbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWUsXG4gICAgICAgICAgdGV4dDogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSB8fCBvcHRpb24udGV4dCxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBfb25TZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm1vZGVsRm9yRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KS5pbmRleDtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uKGluZGV4KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIG9uQmx1ciBldmVudFxuICAgICAgICovXG4gICAgICBfb25CbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2JsdXInKTtcblxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgb25Gb2N1cyBldmVudFxuICAgICAgICovXG4gICAgICBfb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5faGFuZGxlU3VnZ2VzdGlvbnMoZXZlbnQpO1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdmb2N1cycpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZW5lcmF0ZSBhIHN1Z2dlc3Rpb24gaWQgZm9yIGEgY2VydGFpbiBpbmRleFxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IGluIHRoZSBzdWdnZXN0aW9ucyBsaXN0XG4gICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhIHVuaXF1ZSBpZCBiYXNlZCBvbiB0aGUgX2lkSXRlbVNlZWQgYW5kIHRoZSBwb3NpdGlvbiBvZiB0aGF0IGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfZ2V0U3VnZ2VzdGlvbklkOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkSXRlbVNlZWQgKyAnLScgKyBpbmRleDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBpdGVtIGhlaWdodCBpcyBjaGFuZ2VkLCB0aGUgbWF4SGVpZ2h0IG9mIHRoZSBzdWdnZXN0aW9uV3JhcHBlciBuZWVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAqL1xuICAgICAgX2l0ZW1IZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5faXRlbUhlaWdodCAqIHRoaXMubWF4Vmlld2FibGVJdGVtcyArICdweCc7XG4gICAgICB9LFxuXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogUFVCTElDXG4gICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHRoZSBjb21wb25lbnQncyBjdXJyZW50IHN1Z2dlc3Rpb25zXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgICAqL1xuICAgICAgc3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdGhpcy5fYmluZFN1Z2dlc3Rpb25zKGFycik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGVzIHRoZSBzdWdnZXN0aW9ucyBwb3B1cFxuICAgICAgICovXG4gICAgICBoaWRlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5faGlkZVN1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBRdWVyeSBmdW5jdGlvbiBpcyBjYWxsZWQgb24gZWFjaCBrZXlzdHJva2UgdG8gcXVlcnkgdGhlIGRhdGEgc291cmNlIGFuZCByZXR1cm5zIHRoZSBzdWdnZXN0aW9ucyB0aGF0IG1hdGNoZXNcbiAgICAgICAqIHdpdGggdGhlIGZpbHRlcmluZyBsb2dpYyBpbmNsdWRlZC5cbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFzb3VyY2UgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgaXRlbXMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IEN1cnJlbnQgdmFsdWUgaW4gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgb25seSB0aG9zZSBpdGVtcyBpbiB0aGUgZGF0YSBzb3VyY2UgdGhhdCBtYXRjaGVzIHRoZSBmaWx0ZXJpbmcgbG9naWMuXG4gICAgICAgKi9cbiAgICAgIHF1ZXJ5Rm46IGZ1bmN0aW9uIChkYXRhc291cmNlLCBxdWVyeSkge1xuICAgICAgICB2YXIgcXVlcnlSZXN1bHQgPSBbXTtcblxuICAgICAgICBkYXRhc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICB2YXIgb2JqVGV4dCwgb2JqVmFsdWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmpUZXh0ID0gaXRlbVt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICAgICAgICBvYmpWYWx1ZSA9IGl0ZW1bdGhpcy52YWx1ZVByb3BlcnR5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqVGV4dCA9IGl0ZW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG9ialZhbHVlID0gb2JqVGV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob2JqVGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID09PSAwKSB7XG4gICAgICAgICAgICAvLyBOT1RFOiB0aGUgc3RydWN0dXJlIG9mIHRoZSByZXN1bHQgb2JqZWN0IG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCB0ZW1wbGF0ZS4gRm9yIGN1c3RvbSB0ZW1wbGF0ZXMsIHlvdVxuICAgICAgICAgICAgLy8gbWlnaHQgbmVlZCB0byByZXR1cm4gbW9yZSBkYXRhXG4gICAgICAgICAgICBxdWVyeVJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgdGV4dDogb2JqVGV4dCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtc2VsZWN0ZWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBjaGFuZ2VcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWNoYW5nZVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGZvY3VzXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1mb2N1c1xuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGJsdXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCByZXNldC9jbGVhclxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtcmVzZXQtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgIH0pO1xuICB9KCkpO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbCIsIlxucmVxdWlyZSgnLi4vcGFwZXItc3R5bGVzL3NoYWRvdy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcz4gPHRlbXBsYXRlPiA8c3R5bGU+Omhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdChbZWxldmF0aW9uPVxcXCIxXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMmRwO306aG9zdChbZWxldmF0aW9uPVxcXCIyXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO306aG9zdChbZWxldmF0aW9uPVxcXCIzXFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO306aG9zdChbZWxldmF0aW9uPVxcXCI0XFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tOGRwO306aG9zdChbZWxldmF0aW9uPVxcXCI1XFxcIl0pe0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDt9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlcy5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2FwcC1zdG9yYWdlLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGRvbS1tb2R1bGUgaWQ9XCJhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCI+XG4gIDxzY3JpcHQ+XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBzeW5jaHJvbml6ZXMgc3RvcmFnZSBiZXR3ZWVuIGFuIGluLW1lbW9yeVxuICAgICAqIHZhbHVlIGFuZCBhIGxvY2F0aW9uIGluIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlIHN5c3RlbS5cbiAgICAgKlxuICAgICAqIGxvY2FsU3RvcmFnZSBpcyBhIHNpbXBsZSBhbmQgd2lkZWx5IHN1cHBvcnRlZCBzdG9yYWdlIEFQSSB0aGF0IHByb3ZpZGVzIGJvdGhcbiAgICAgKiBwZXJtYW5lbnQgYW5kIHNlc3Npb24tYmFzZWQgc3RvcmFnZSBvcHRpb25zLiBVc2luZyBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICogeW91IGNhbiBlYXNpbHkgaW50ZWdyYXRlIGxvY2FsU3RvcmFnZSBpbnRvIHlvdXIgYXBwIHZpYSBub3JtYWwgUG9seW1lclxuICAgICAqIGRhdGFiaW5kaW5nLlxuICAgICAqXG4gICAgICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBpcyB0aGUgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIGFuIGVsZW1lbnRcbiAgICAgKiB0aGF0IHVzZXMgYEFwcFN0b3JhZ2VCZWhhdmlvcmAuIFJlYWRpbmcgaXRzIGNvZGUgaXMgYSBnb29kIHdheSB0byBnZXRcbiAgICAgKiBzdGFydGVkIHdyaXRpbmcgeW91ciBvd24gc3RvcmFnZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogRXhhbXBsZSB1c2U6XG4gICAgICpcbiAgICAgKiAgICAgPHBhcGVyLWlucHV0IHZhbHVlPVwie3tzZWFyY2h9fVwiPjwvcGFwZXItaW5wdXQ+XG4gICAgICogICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGtleT1cInNlYXJjaFwiIGRhdGE9XCJ7e3NlYXJjaH19XCI+XG4gICAgICogICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAgICAgKlxuICAgICAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZXMgY2hhbmdlcyB0byB0aGVcbiAgICAgKiBzYW1lIGtleSBhY3Jvc3MgbXVsdGlwbGUgdGFicy5cbiAgICAgKlxuICAgICAqIE9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZXMuXG4gICAgICovXG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQnLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5BcHBTdG9yYWdlQmVoYXZpb3JcbiAgICAgIF0sXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBle1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGtleToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdHJ1ZSwgdGhlIGRhdGEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNsZWFyZWQgZnJvbSBzdG9yYWdlIHdoZW5cbiAgICAgICAgICogdGhlIHBhZ2Ugc2Vzc2lvbiBlbmRzIChpLmUuIHdoZW4gdGhlIHVzZXIgaGFzIG5hdmlnYXRlZCBhd2F5IGZyb21cbiAgICAgICAgICogdGhlIHBhZ2UpLlxuICAgICAgICAgKi9cbiAgICAgICAgc2Vzc2lvbk9ubHk6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFaXRoZXIgYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIG9yIGB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VgLCBkZXBlbmRpbmcgb25cbiAgICAgICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmFnZToge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBjb21wdXRlZDogJ19fY29tcHV0ZVN0b3JhZ2Uoc2Vzc2lvbk9ubHkpJ1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ19fc3RvcmFnZVNvdXJjZUNoYW5nZWQoc3RvcmFnZSwga2V5KSdcbiAgICAgIF0sXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW4od2luZG93LCAnc3RvcmFnZScsICdfX29uU3RvcmFnZScpO1xuICAgICAgICB0aGlzLmxpc3RlbihcbiAgICAgICAgICAgIHdpbmRvdy50b3AsXG4gICAgICAgICAgICAnYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZCcsXG4gICAgICAgICAgICAnX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWQnKTtcbiAgICAgIH0sXG5cbiAgICAgIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy51bmxpc3Rlbih3aW5kb3csICdzdG9yYWdlJywgJ19fb25TdG9yYWdlJyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oXG4gICAgICAgICAgICB3aW5kb3cudG9wLFxuICAgICAgICAgICAgJ2FwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWQnLFxuICAgICAgICAgICAgJ19fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkJyk7XG4gICAgICB9LFxuXG4gICAgICBnZXQgaXNOZXcoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5rZXk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0b3JlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXksIGFuZCBpZiBzdWNjZXNzZnVsLCB1cGRhdGVzIHRoaXMua2V5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBuZXcga2V5IHRvIHVzZS5cbiAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICAgKi9cbiAgICAgIHNhdmVWYWx1ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5fX3NldFN0b3JhZ2VWYWx1ZSgvKntAdHlwZSBpZiAoa2V5IHR5KXtTdHJpbmd9fSova2V5LCB0aGlzLmRhdGEpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9LFxuXG4gICAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy56ZXJvVmFsdWU7XG4gICAgICB9LFxuXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSxcblxuICAgICAgZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fX3BhcnNlVmFsdWVGcm9tU3RvcmFnZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KHBhdGgsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sXG5cbiAgICAgIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5rZXkgIT0gbnVsbCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKHRoaXMua2V5LCB0aGlzLmRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmZpcmUoJ2FwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWQnLCB0aGlzLCB7XG4gICAgICAgICAgICBub2RlOiB3aW5kb3cudG9wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sXG5cbiAgICAgIF9fY29tcHV0ZVN0b3JhZ2U6IGZ1bmN0aW9uKHNlc3Npb25Pbmx5KSB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uT25seSA/IHdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICB9LFxuXG4gICAgICBfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkOiBmdW5jdGlvbihzdG9yYWdlLCBrZXkpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVN0b3JlZFZhbHVlKCk7XG4gICAgICB9LFxuXG4gICAgICBfX29uU3RvcmFnZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gdGhpcy5rZXkgfHxcbiAgICAgICAgICAgIGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLnNldCgnZGF0YScsIHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwgPT09IHRoaXMgfHxcbiAgICAgICAgICAgIGV2ZW50LmRldGFpbC5rZXkgIT09IHRoaXMua2V5IHx8XG4gICAgICAgICAgICBldmVudC5kZXRhaWwuc3RvcmFnZSAhPT0gdGhpcy5zdG9yYWdlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc2V0KCdkYXRhJywgZXZlbnQuZGV0YWlsLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcGFyc2UgdmFsdWUgZnJvbSBzdG9yYWdlIGZvcicsIHRoaXMua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX19zZXRTdG9yYWdlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvYXBwLXN0b3JhZ2UvYXBwLWxvY2Fsc3RvcmFnZS9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxzY3JpcHQ+XG4gIChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgU1BMSUNFU19SWCA9IC9cXC5zcGxpY2VzJC87XG4gICAgdmFyIExFTkdUSF9SWCA9IC9cXC5sZW5ndGgkLztcbiAgICB2YXIgTlVNQkVSX1JYID0gL1xcLj8jPyhbMC05XSspJC87XG5cbiAgICAvKipcbiAgICAgKiBBcHBTdG9yYWdlQmVoYXZpb3IgaXMgYW4gYWJzdHJhY3QgYmVoYXZpb3IgdGhhdCBtYWtlcyBpdCBlYXN5IHRvXG4gICAgICogc3luY2hyb25pemUgaW4tbWVtb3J5IGRhdGEgYW5kIGEgcGVyc2lzdGVudCBzdG9yYWdlIHN5c3RlbSwgc3VjaCBhc1xuICAgICAqIHRoZSBicm93c2VyJ3MgSW5kZXhlZERCLCBvciBhIHJlbW90ZSBkYXRhYmFzZSBsaWtlIEZpcmViYXNlLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGVzIG9mIGhvdyB0byB1c2UgdGhpcyBiZWhhdmlvciB0byB3cml0ZSB5b3VyIG93biBhcHAgc3RvcmFnZVxuICAgICAqIGVsZW1lbnRzIHNlZSBgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+YCBoZXJlLCBvciBjaGVjayBvdXRcbiAgICAgKiBbcG9seW1lcmZpcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GaXJlYmFzZS9wb2x5bWVyZmlyZSkgYW5kXG4gICAgICogW2FwcC1wb3VjaGRiXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2FwcC1wb3VjaGRiKS5cbiAgICAgKlxuICAgICAqIEBwb2x5bWVyQmVoYXZpb3JcbiAgICAgKi9cbiAgICBQb2x5bWVyLkFwcFN0b3JhZ2VCZWhhdmlvciA9IHtcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkYXRhIHRvIHN5bmNocm9uaXplLlxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuemVyb1ZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBpcyB0cnVlIHRyYW5zYWN0aW9ucyB3aWxsIGhhcHBlbiBvbmUgYWZ0ZXIgdGhlIG90aGVyLFxuICAgICAgICAgKiBuZXZlciBpbiBwYXJhbGxlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogU3BlY2lmaWNhbGx5LCBubyB0cmFuc2FjdGlvbiB3aWxsIGJlZ2luIHVudGlsIGV2ZXJ5IHByZXZpb3VzbHlcbiAgICAgICAgICogZW5xdWV1ZWQgdHJhbnNhY3Rpb24gYnkgdGhpcyBlbGVtZW50IGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGl0IGlzIGZhbHNlLCBuZXcgdHJhbnNhY3Rpb25zIHdpbGwgYmUgZXhlY3V0ZWQgYXMgdGhleSBhcmVcbiAgICAgICAgICogcmVjZWl2ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXF1ZW50aWFsVHJhbnNhY3Rpb25zOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCB3aWxsIHBlcmZvcm0gZGV0YWlsZWQgbG9nZ2luZy5cbiAgICAgICAgICovXG4gICAgICAgIGxvZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX19kYXRhQ2hhbmdlZChkYXRhLiopJ1xuICAgICAgXSxcblxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX19pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fc3luY2luZ1RvTWVtb3J5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVN0b3JlZFZhbHVlKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlIHRoaXMgZ2V0dGVyIHRvIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgbmV2ZXIgYmVlblxuICAgICAgICogcGVyc2lzdGVkIHRvIHN0b3JhZ2UuXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIGdldCBpc05ldygpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFsbCBxdWV1ZWQgdHJhbnNhY3Rpb25zXG4gICAgICAgKiBoYXZlIGNvbXBsZXRlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIGZpZWxkIGlzIHVwZGF0ZWQgYXMgbmV3IHRyYW5zYWN0aW9ucyBhcmUgZW5xdWV1ZWQsIHNvIGl0IHdpbGxcbiAgICAgICAqIG9ubHkgd2FpdCBmb3IgdHJhbnNhY3Rpb25zIHdoaWNoIHdlcmUgZW5xdWV1ZWQgd2hlbiB0aGUgZmllbGRcbiAgICAgICAqIHdhcyBhY2Nlc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHByb21pc2UgbmV2ZXIgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7UHJvbWlzZX1cbiAgICAgICAqL1xuICAgICAgZ2V0IHRyYW5zYWN0aW9uc0NvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGUgdGhpcyBnZXR0ZXIgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSB3aGVuXG4gICAgICAgKiB0aGVyZSdzIG5vIGRhdGEgc3RvcmVkLlxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICovXG4gICAgICBnZXQgemVyb1ZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGUgZGF0YSB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGlzIHN0b3JhZ2UgaW5zdGFuY2UgaXMgbmV3LCB0aGlzXG4gICAgICAgKiBtZXRob2QgZ2VuZXJhdGVzIGFuIGF0dGVtcHQgdG8gd3JpdGUgdGhlIHZhbHVlIHRvIHN0b3JhZ2UuXG4gICAgICAgKlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gYXJnc1xuICAgICAgICogQHJldHVybiB7UHJvbWlzZX0gYSBQcm9taXNlIHRoYXQgc2V0dGxlcyBvbmx5IG9uY2UgdGhlIHdyaXRlIGhhcy5cbiAgICAgICAqL1xuICAgICAgc2F2ZVZhbHVlOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9uYWwuIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIG91dCB0aGUgbWFwcGluZyBvZiB0aGlzXG4gICAgICAgKiBzdG9yYWdlIG9iamVjdCBhbmQgYSBsb2dpY2FsIGxvY2F0aW9uIHdpdGhpbiBzdG9yYWdlLlxuICAgICAgICpcbiAgICAgICAqIElmIHRoaXMgbWV0aG9kIGlzIHN1cHBvcnRlZCwgYWZ0ZXIgaXQncyBjYWxsZWQsIGlzTmV3KCkgc2hvdWxkIGJlXG4gICAgICAgKiB0cnVlLlxuICAgICAgICovXG4gICAgICByZXNldDogZnVuY3Rpb24oKSB7fSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHNldHRsZXMgb25jZSB0aGUgZGVzdHJ1Y3Rpb24gaXNcbiAgICAgICAqICAgY29tcGxldGUuXG4gICAgICAgKi9cbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnplcm9WYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZVZhbHVlKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm0gdGhlIGluaXRpYWwgc3luYyBiZXR3ZWVuIHN0b3JhZ2UgYW5kIG1lbW9yeS4gVGhpcyBtZXRob2RcbiAgICAgICAqIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgICAgICogSW1wbGVtZW50YXRpb25zIG1heSBvdmVycmlkZSBpdC5cbiAgICAgICAqXG4gICAgICAgKiBJZiBhbiBpbXBsZW1lbnRhdGlvbiBpbnRlbmRzIHRvIGNhbGwgdGhpcyBtZXRob2QsIGl0IHNob3VsZCBpbnN0ZWFkXG4gICAgICAgKiBjYWxsIF9pbml0aWFsaXplU3RvcmVkVmFsdWUsIHdoaWNoIHByb3ZpZGVzIHJlZW50cmFuY3kgcHJvdGVjdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCBzZXR0bGVzIG9uY2UgdGhpcyBwcm9jZXNzIGlzXG4gICAgICAgKiAgICAgY29tcGxldGUuXG4gICAgICAgKi9cbiAgICAgIGluaXRpYWxpemVTdG9yZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTmV3KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBcIm5ld1wiIG1vZGVsLCB0aGVuIHdlIHNob3VsZCBhdHRlbXB0XG4gICAgICAgIC8vIHRvIHJlYWQgYW4gaW5pdGlhbCB2YWx1ZSBmcm9tIHN0b3JhZ2U6XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdG9yZWRWYWx1ZSgnZGF0YScpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHRoaXMuX2xvZygnR290IHN0b3JlZCB2YWx1ZSEnLCBkYXRhLCB0aGlzLmRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXRTdG9yZWRWYWx1ZShcbiAgICAgICAgICAgICAgICAnZGF0YScsIHRoaXMuZGF0YSB8fCB0aGlzLnplcm9WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLnNldCgnZGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbXBsZW1lbnQgcmVhZGluZyBhIHZhbHVlIGZyb20gc3RvcmFnZS5cbiAgICAgICAqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VQYXRoIFRoZSBwYXRoICh0aHJvdWdoIHN0b3JhZ2UpIG9mIHRoZSB2YWx1ZSB0b1xuICAgICAgICogICBjcmVhdGUsIHJlbGF0aXZlIHRvIHRoZSByb290IG9mIHN0b3JhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5zdGFuY2UuXG4gICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjYW5vbmljYWwgdmFsdWUgc3RvcmVkXG4gICAgICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoIHdoZW4gdGhlIHRyYW5zYWN0aW9uIGhhcyBjb21wbGV0ZWQuIF9JZiB0aGVyZSBpcyBub1xuICAgICAgICogICBzdWNoIHZhbHVlIGF0IHRoZSBwcm92aWRlZCBwYXRoIHRocm91Z2ggc3RvcmFnZSwgdGhlbiB0aGUgcHJvbWlzZSB3aWxsXG4gICAgICAgKiAgIHJlc29sdmUgdG8gYHVuZGVmaW5lZGAuXyBUaGUgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIGlmIHRoZSB0cmFuc2FjdGlvblxuICAgICAgICogICBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAgICAgICAqL1xuICAgICAgZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHN0b3JhZ2VQYXRoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW1wbGVtZW50IGNyZWF0aW5nIGFuZCB1cGRhdGluZ1xuICAgICAgICogc3RvcmVkIHZhbHVlcy5cbiAgICAgICAqXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VQYXRoIFRoZSBwYXRoIG9mIHRoZSB2YWx1ZSB0byB1cGRhdGUsIHJlbGF0aXZlXG4gICAgICAgKiAgIHRvIHRoZSByb290IHN0b3JhZ2UgcGF0aCBjb25maWd1cmVkIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdXBkYXRlZCBpbi1tZW1vcnkgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHN0b3JlZCB2YWx1ZVxuICAgICAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aC5cbiAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNhbm9uaWNhbCB2YWx1ZSBzdG9yZWRcbiAgICAgICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGggd2hlbiB0aGUgdHJhbnNhY3Rpb24gaGFzIGNvbXBsZXRlZC4gVGhlIHByb21pc2VcbiAgICAgICAqICAgd2lsbCBiZSByZWplY3RlZCBpZiB0aGUgdHJhbnNhY3Rpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXG4gICAgICAgKi9cbiAgICAgIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihzdG9yYWdlUGF0aCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1hcHMgYSBQb2x5bWVyIGRhdGFiaW5kaW5nIHBhdGggdG8gdGhlIGNvcnJlc3BvbmRpbmcgcGF0aCBpbiB0aGVcbiAgICAgICAqIHN0b3JhZ2Ugc3lzdGVtLiBPdmVycmlkZSB0byBkZWZpbmUgYSBjdXN0b20gbWFwcGluZy5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgaW52ZXJzZSBvZiBzdG9yYWdlUGF0aFRvTWVtb3J5UGF0aC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBBbiBpbi1tZW1vcnkgcGF0aCB0aHJvdWdoIGEgc3RvcmFnZSBvYmplY3QuXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcm92aWRlZCBwYXRoIG1hcHBlZCB0byB0aGUgZXF1aXZhbGVudCBsb2NhdGlvbiBpblxuICAgICAgICogICBzdG9yYWdlLiBUaGlzIG1hcHBlZCB2ZXJzaW9uIG9mIHRoZSBwYXRoIGlzIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCB0aGVcbiAgICAgICAqICAgQ1JVRCBvcGVyYXRpb25zIG9uIGJvdGggbWVtb3J5IGFuZCBzdG9yYWdlLlxuICAgICAgICovXG4gICAgICBtZW1vcnlQYXRoVG9TdG9yYWdlUGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTWFwcyBhIHN0b3JhZ2UgcGF0aCB0byB0aGUgY29ycmVzcG9uZGluZyBQb2x5bWVyIGRhdGFiaW5kaW5nIHBhdGguXG4gICAgICAgKiBPdmVycmlkZSB0byBkZWZpbmUgYSBjdXN0b20gbWFwcGluZy5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgaW52ZXJzZSBvZiBtZW1vcnlQYXRoVG9TdG9yYWdlUGF0aC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc3RvcmFnZSBwYXRoIHRocm91Z2ggYSBzdG9yYWdlIG9iamVjdC5cbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHByb3ZpZGVkIHBhdGggdGhyb3VnaCBzdG9yYWdlIG1hcHBlZCB0byB0aGVcbiAgICAgICAqICAgZXF1aXZhbGVudCBQb2x5bWVyIHBhdGggdGhyb3VnaCB0aGUgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mIHN0b3JhZ2UuXG4gICAgICAgKi9cbiAgICAgIHN0b3JhZ2VQYXRoVG9NZW1vcnlQYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFbmFibGVzIHBlcmZvcm1pbmcgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBpbi1tZW1vcnkgcmVwcmVzZW50YXRpb24gb2ZcbiAgICAgICAqIHN0b3JhZ2Ugd2l0aG91dCBhY3RpdmF0aW5nIG9ic2VydmVycyB0aGF0IHdpbGwgY2F1c2UgdGhvc2VcbiAgICAgICAqIHRyYW5zZm9ybWF0aW9ucyB0byBiZSByZS1hcHBsaWVkIHRvIHRoZSBzdG9yYWdlIGJhY2tlbmQuIFRoaXMgaXMgdXNlZnVsXG4gICAgICAgKiBmb3IgcHJldmVudGluZyByZWR1bmRhbnQgKG9yIGN5Y2xpY2FsKSBhcHBsaWNhdGlvbiBvZiB0cmFuc2Zvcm1hdGlvbnMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3BlcmF0aW9uIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHBlcmZvcm0gdGhlIGRlc2lyZWRcbiAgICAgICAqICAgdHJhbnNmb3JtYXRpb24uIEl0IHdpbGwgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHksIHdoZW4gaXQgaXMgc2FmZSB0b1xuICAgICAgICogICBhcHBseSB0aGUgdHJhbnNmb3JtYXRpb24uXG4gICAgICAgKi9cbiAgICAgIHN5bmNUb01lbW9yeTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9fc3luY2luZ1RvTWVtb3J5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZ3JvdXAoJ1N5bmMgdG8gbWVtb3J5LicpO1xuXG4gICAgICAgIHRoaXMuX19zeW5jaW5nVG9NZW1vcnkgPSB0cnVlO1xuICAgICAgICBvcGVyYXRpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX2dyb3VwRW5kKCdTeW5jIHRvIG1lbW9yeS4nKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBjb252ZW5pZW5jZSBtZXRob2QuIFJldHVybnMgdHJ1ZSBpZmYgdmFsdWUgaXMgbnVsbCwgdW5kZWZpbmVkLFxuICAgICAgICogYW4gZW1wdHkgYXJyYXksIG9yIGFuIG9iamVjdCB3aXRoIG5vIGtleXMuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlSXNFbXB0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlrZSBgZ2V0U3RvcmVkVmFsdWVgIGJ1dCBjYWxsZWQgd2l0aCBhIFBvbHltZXIgcGF0aCByYXRoZXIgdGhhblxuICAgICAgICogYSBzdG9yYWdlIHBhdGguXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIFBvbHltZXIgcGF0aCB0byBnZXQuXG4gICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIFByb21pc2Ugb2YgdGhlIHZhbHVlIHN0b3JlZCBhdCB0aGF0IHBhdGguXG4gICAgICAgKi9cbiAgICAgIF9nZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdG9yZWRWYWx1ZSh0aGlzLm1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoKHBhdGgpKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlrZSBgc2V0U3RvcmVkVmFsdWVgIGJ1dCBjYWxsZWQgd2l0aCBhIFBvbHltZXIgcGF0aCByYXRoZXIgdGhhblxuICAgICAgICogYSBzdG9yYWdlIHBhdGguXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIFBvbHltZXIgcGF0aCB0byB1cGRhdGUuXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB1cGRhdGVkIGluLW1lbW9yeSB2YWx1ZSB0byBhcHBseSB0byB0aGUgc3RvcmVkIHZhbHVlXG4gICAgICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoLlxuICAgICAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY2Fub25pY2FsIHZhbHVlIHN0b3JlZFxuICAgICAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aCB3aGVuIHRoZSB0cmFuc2FjdGlvbiBoYXMgY29tcGxldGVkLiBUaGUgcHJvbWlzZVxuICAgICAgICogICB3aWxsIGJlIHJlamVjdGVkIGlmIHRoZSB0cmFuc2FjdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAgICAgICAqL1xuICAgICAgX3NldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdG9yZWRWYWx1ZSh0aGlzLm1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoKHBhdGgpLCB2YWx1ZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVucXVldWVzIHRoZSBnaXZlbiBmdW5jdGlvbiBpbiB0aGUgdHJhbnNhY3Rpb24gcXVldWUuXG4gICAgICAgKlxuICAgICAgICogVGhlIHRyYW5zYWN0aW9uIHF1ZXVlIGFsbG93cyBmb3Igb3B0aW9uYWwgcGFyYWxsZWxpc20vc2VxdWVudGlhbGl0eVxuICAgICAgICogdmlhIHRoZSBgc2VxdWVudGlhbFRyYW5zYWN0aW9uc2AgYm9vbGVhbiBwcm9wZXJ0eSwgYXMgd2VsbCBhcyBnaXZpbmdcbiAgICAgICAqIHRoZSB1c2VyIGEgY29udmVuaWVudCB3YXkgdG8gd2FpdCBmb3IgYWxsIHBlbmRpbmcgdHJhbnNhY3Rpb25zIHRvXG4gICAgICAgKiBmaW5pc2guXG4gICAgICAgKlxuICAgICAgICogVGhlIGdpdmVuIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgb3IgYWZ0ZXIgYW4gYXJiaXRyYXJ5XG4gICAgICAgKiBkZWxheS4gSXRzIGB0aGlzYCBjb250ZXh0IHdpbGwgYmUgYm91bmQgdG8gdGhlIGVsZW1lbnQuXG4gICAgICAgKlxuICAgICAgICogSWYgdGhlIHRyYW5zYWN0aW9uIHBlcmZvcm1zIGFueSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucyBpdCBtdXN0XG4gICAgICAgKiByZXR1cm4gYSBwcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zYWN0aW9uIEEgZnVuY3Rpb24gaW1wbGVtZW50aW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIHRyYW5zYWN0aW9uIGhhc1xuICAgICAgICogICBmaW5pc2hlZC4gVGhpcyBwcm9taXNlIHdpbGwgbmV2ZXIgcmVqZWN0LlxuICAgICAgICovXG4gICAgICBfZW5xdWV1ZVRyYW5zYWN0aW9uOiBmdW5jdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5zZXF1ZW50aWFsVHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByZXN1bHQgPSB0cmFuc2FjdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgIHRyYW5zYWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcyA9IHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXNcbiAgICAgICAgICAgIC50aGVuKHRyYW5zYWN0aW9uKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2Vycm9yKCdFcnJvciBwZXJmb3JtaW5nIHF1ZXVlZCB0cmFuc2FjdGlvbi4nLCBlcnJvcik7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmxvZ2AuXG4gICAgICAgKi9cbiAgICAgIF9sb2c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgd3JhcHBlciBhcm91bmQgYGNvbnNvbGUuZXJyb3JgLlxuICAgICAgICovXG4gICAgICBfZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSB3cmFwcGVyIGFyb3VuZCBgY29uc29sZS5ncm91cGAuXG4gICAgICAgKi9cbiAgICAgIF9ncm91cDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmdyb3VwRW5kYC5cbiAgICAgICAqL1xuICAgICAgX2dyb3VwRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZC5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVlbnRyYW5jeS1zYXZlIHdyYXBwZXIgYXJvdW5kIGB0aGlzLmluaXRpYWxpemVTdG9yZWRWYWx1ZWAuXG4gICAgICAgKiBQcmVmZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBvdmVyIHRoYXQgb25lLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSByZXN1bHQgb2YgY2FsbGluZyBgaW5pdGlhbGl6ZVN0b3JlZFZhbHVlYCxcbiAgICAgICAqICAgb3IgYHVuZGVmaW5lZGAgaWYgY2FsbGVkIHdoaWxlIGluaXRpYWxpemluZy5cbiAgICAgICAqL1xuICAgICAgX2luaXRpYWxpemVTdG9yZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ncm91cCgnSW5pdGlhbGl6aW5nIHN0b3JlZCB2YWx1ZS4nKTtcblxuICAgICAgICB2YXIgaW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPVxuICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0b3JlZFZhbHVlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBFbmQoJ0luaXRpYWxpemluZyBzdG9yZWQgdmFsdWUuJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbnF1ZXVlVHJhbnNhY3Rpb24oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxpemluZ1N0b3JlZFZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9fZGF0YUNoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgICAgICBpZiAodGhpcy5pc05ldyB8fFxuICAgICAgICAgICAgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSB8fFxuICAgICAgICAgICAgIXRoaXMuX19pbml0aWFsaXplZCB8fFxuICAgICAgICAgICAgdGhpcy5fX3BhdGhDYW5CZUlnbm9yZWQoY2hhbmdlLnBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLl9fbm9ybWFsaXplTWVtb3J5UGF0aChjaGFuZ2UucGF0aCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYW5nZS52YWx1ZTtcbiAgICAgICAgdmFyIGluZGV4U3BsaWNlcyA9IHZhbHVlICYmIHZhbHVlLmluZGV4U3BsaWNlcztcblxuICAgICAgICB0aGlzLl9lbnF1ZXVlVHJhbnNhY3Rpb24oZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICB0aGlzLl9sb2coJ1NldHRpbmcnLCBwYXRoICsgJzonLCBpbmRleFNwbGljZXMgfHwgdmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGluZGV4U3BsaWNlcyAmJiB0aGlzLl9fcGF0aElzU3BsaWNlcyhwYXRoKSkge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldChwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0U3RvcmVkVmFsdWUocGF0aCwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9fbm9ybWFsaXplTWVtb3J5UGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBwYXJlbnRQYXRoID0gW107XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IFtdO1xuICAgICAgICB2YXIgbm9ybWFsaXplZFBhdGggPSBbXTtcbiAgICAgICAgdmFyIGluZGV4O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjdXJyZW50UGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgICAgICBpZiAoL14jLy50ZXN0KHBhcnRzW2ldKSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZFBhdGgucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLmdldChwYXJlbnRQYXRoKS5pbmRleE9mKHRoaXMuZ2V0KGN1cnJlbnRQYXRoKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3JtYWxpemVkUGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50UGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkUGF0aC5qb2luKCcuJyk7XG4gICAgICB9LFxuXG4gICAgICBfX3BhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHBhcmVudFBhdGggPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIHJldHVybiBwYXJlbnRQYXRoLnNsaWNlKDAsIHBhcmVudFBhdGgubGVuZ3RoIC0gMSkuam9pbignLicpO1xuICAgICAgfSxcblxuICAgICAgX19wYXRoQ2FuQmVJZ25vcmVkOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBMRU5HVEhfUlgudGVzdChwYXRoKSAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmdldCh0aGlzLl9fcGFyZW50UGF0aChwYXRoKSkpO1xuICAgICAgfSxcblxuICAgICAgX19wYXRoSXNTcGxpY2VzOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBTUExJQ0VTX1JYLnRlc3QocGF0aCkgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5nZXQodGhpcy5fX3BhcmVudFBhdGgocGF0aCkpKTtcbiAgICAgIH0sXG5cbiAgICAgIF9fcGF0aFJlZmVyc1RvQXJyYXk6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIChTUExJQ0VTX1JYLnRlc3QocGF0aCkgfHwgTEVOR1RIX1JYLnRlc3QocGF0aCkpICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuZ2V0KHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpKSk7XG4gICAgICB9LFxuXG4gICAgICBfX3BhdGhUYWlsVG9JbmRleDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICB2YXIgdGFpbCA9IHBhdGguc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYXJzZUludCh0YWlsLnJlcGxhY2UoTlVNQkVSX1JYLCAnJDEnKSwgMTApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3IuaHRtbCIsIjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BvbHltZXIvcG9seW1lci1lbGVtZW50Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXkta2V5cy9pcm9uLWExMXkta2V5cy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi8uLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcblxyXG5cclxuXHJcbjxkb20tbW9kdWxlIGlkPVwibHVkaW5nLXNlYXJjaFwiPlxyXG4gICAgPHRlbXBsYXRlPlxyXG4gICAgICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFwZXItc3Bpbm5lci1saXRlLm9yYW5nZSB7XHJcbiAgICAgICAgICAgICAgICAtLXBhcGVyLXNwaW5uZXItY29sb3I6IHZhcigtLWdvb2dsZS15ZWxsb3ctNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGlyb24tYTExeS1rZXlzIGlkPVwiYTExeVwiIHRhcmdldD1cIltbdGFyZ2V0XV1cIiBrZXlzPVwiZW50ZXJcIiBvbi1rZXlzLXByZXNzZWQ9XCJzZWFyY2hcIj48L2lyb24tYTExeS1rZXlzPlxyXG4gICAgICAgIDxwYXBlci1pbnB1dCBpZD1cImlucHV0XCIgbGFiZWw9XCJTdWNoZVwiIHN0eWxlPVwibWF4LXdpZHRoOjUwMHB4XCIgdmFsdWU9XCJ7e2ZpbHRlcnN0cn19XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc2xvdD1cInN1ZmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmU9XCJ7e2xvYWRpbmd9fVwiIGNsYXNzPVwib3JhbmdlXCI+PC9wYXBlci1zcGlubmVyLWxpdGU+XHJcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInNlYXJjaFwiIG9uLXRhcD1cInNlYXJjaFwiPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XHJcblxyXG4gICAgICAgIDxpcm9uLWFqYXggaWQ9XCJhamF4XCIgbG9hZGluZz1cInt7bG9hZGluZ319XCIgdXJsPVwiaHR0cDovLzE5Mi4xNjguMTc4LjMyOjQwMDAvZ3JhcGhxbFwiIGRlYm91bmNlLWR1cmF0aW9uPVwiMzAwXCIgb24tcmVzcG9uc2U9XCJoYW5kbGVSZXNwb25zZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQtdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiBoYW5kbGUtYXM9XCJqc29uXCIgbWV0aG9kPVwiUE9TVFwiIGJvZHk9W1txdWVyeV1dPjwvaXJvbi1hamF4PlxyXG5cclxuXHJcblxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8c2NyaXB0PlxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGBsdWRpbmctc2VhcmNoYCBEZXNjcmlwdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHN1bW1hcnkgU2hvcnREZXNjcmlwdGlvbi5cclxuICAgICAgICAgKiBAY3VzdG9tRWxlbWVudFxyXG4gICAgICAgICAqIEBwb2x5bWVyXHJcbiAgICAgICAgICogQGV4dGVuZHMge1BvbHltZXIuRWxlbWVudH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzcyBMdWRpbmdTZWFyY2ggZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU3RyaW5nIHByb3ZpZGluZyB0aGUgdGFnIG5hbWUgdG8gcmVnaXN0ZXIgdGhlIGVsZW1lbnQgdW5kZXIuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0IGlzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsdWRpbmctc2VhcmNoJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9iamVjdCBkZXNjcmliaW5nIHByb3BlcnR5LXJlbGF0ZWQgbWV0YWRhdGEgdXNlZCBieSBQb2x5bWVyIGZlYXR1cmVzXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnN0cjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiBcIlwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlmdW5jdGlvbjogRnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXByb3A6IFN0cmluZ1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkL3VwZ3JhZGVkLiBVc2U6IGluaXRpYWxpemluZyBzdGF0ZSxcclxuICAgICAgICAgICAgICogc2V0IHVwIGV2ZW50IGxpc3RlbmVycywgY3JlYXRlIHNoYWRvdyBkb20uXHJcbiAgICAgICAgICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlIGZvciBvbmUtdGltZSBjb25maWd1cmF0aW9uIG9mIHlvdXIgY29tcG9uZW50IGFmdGVyIGxvY2FsIERPTSBpcyBpbml0aWFsaXplZC4gXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkeSgpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyLnJlYWR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUG9seW1lci5SZW5kZXJTdGF0dXMuYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuJC5pbnB1dDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VhcmNoKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnlmdW5jdGlvbih0aGlzLmZpbHRlcnN0cilcclxuICAgICAgICAgICAgICAgIHRoaXMuJC5hamF4LmdlbmVyYXRlUmVxdWVzdCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnZGF0YScsIFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdkYXRhJywgZXZlbnQuZGV0YWlsLnJlc3BvbnNlLmRhdGFbdGhpcy5yZXNwb25zZXByb3BdKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub3RpZnlQYXRoKCdkYXRhJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoTHVkaW5nU2VhcmNoLmlzLCBMdWRpbmdTZWFyY2gpO1xyXG4gICAgPC9zY3JpcHQ+XHJcbjwvZG9tLW1vZHVsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sdWRpbmctc2VhcmNoLmh0bWwiLCI8IS0tXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbi0tPlxyXG5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL2lyb24tbGlzdC9pcm9uLWxpc3QuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWFqYXgvaXJvbi1hamF4Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWExMXkta2V5cy9pcm9uLWExMXkta2V5cy5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuL2NvbXBvbmVudHMvbHVkaW5nLWNhcmQuaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9jb21wb25lbnRzL2x1ZGluZy1zZWFyY2guaHRtbFwiPlxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwic2hhcmVkLXN0eWxlcy5odG1sXCI+XHJcblxyXG48ZG9tLW1vZHVsZSBpZD1cImdhbWVzLWxpc3RmcmFnbWVudFwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwic2hhcmVkLXN0eWxlc1wiPlxyXG4gICAgICAgOmhvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXJvbi1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLiAqL1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgICA8aXJvbi1saXN0IGlkPVwibGlzdFwiIGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cclxuICAgICAgICA8dGVtcGxhdGU+XHJcbiAgICAgICAgICA8bHVkaW5nLWNhcmQgaXRlbT1cIltbaXRlbV1dXCIgZ29kZXRhaWxzPVwiW1tuYXZpZ2F0ZV1dXCIgb2JqaWQ9XCJnYW1laWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cInRpdGxlXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleDogd3JhcFwiPltbaW5jKGluZGV4KV1dLiBbW2l0ZW0uZ2FtZW5hbWVdXSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJzdWJ0aXRsZVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXg6IHdyYXA7IGZsZXgtb3JpZW50YXRpb246IHJvd1wiPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpdGVtLnllYXJdXVwiPihbW2l0ZW0ueWVhcl1dKTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tpdGVtLmdhbWVBdXRob3JzXV1cIiBhcz1cImF1dGhvclwiPiBbW2F1dGhvci5hdXRob3JHaXZOYW1lXV0gW1thdXRob3IuYXV0aG9yTGFzdE5hbWVdXSw8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbaXRlbS5nYW1lUHVibGlzaGVyc11dXCIgYXM9XCJwdWJsaXNoZXJcIj4gW1twdWJsaXNoZXIucHVibGlzaGVybmFtZV1dLDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbHVkaW5nLWNhcmQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9pcm9uLWxpc3Q+XHJcbiAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgPHNjcmlwdD5cclxuICAgIGNsYXNzIEdhbWVzTGlzdEZyYWdtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcclxuICAgICAgc3RhdGljIGdldCBpcygpIHsgcmV0dXJuICdnYW1lcy1saXN0ZnJhZ21lbnQnOyB9XHJcblxyXG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IFwicmVmcmVzaFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaW5jKGlkeCkge1xyXG4gICAgICAgIHJldHVybiBpZHggKyAxXHJcbiAgICAgIH1cclxuICAgICAgbmF2aWdhdGUob2JqaWQpIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsICcvZ2FtZS8nICsgb2JqaWQpO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9jYXRpb24tY2hhbmdlZCcpKTtcclxuICAgICAgfVxyXG4gICAgICByZWZyZXNoKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy4kLmxpc3QuZmlyZSgnaXJvbi1yZXNpemUnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShHYW1lc0xpc3RGcmFnbWVudC5pcywgR2FtZXNMaXN0RnJhZ21lbnQpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzLWxpc3RmcmFnbWVudC5odG1sIiwiXG5yZXF1aXJlKCcuLi9pcm9uLWljb24vaXJvbi1pY29uLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGlyb24taWNvbnNldC1zdmcgbmFtZT1tYXBzIHNpemU9MjQ+IDxzdmc+PGRlZnM+IDxnIGlkPWFkZC1sb2NhdGlvbj48cGF0aCBkPVxcXCJNMTIgMkM4LjE0IDIgNSA1LjE0IDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ni0zLjE0LTctNy03em00IDhoLTN2M2gtMnYtM0g4VjhoM1Y1aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iZWVuaGVyZT48cGF0aCBkPVxcXCJNMTkgMUg1Yy0xLjEgMC0xLjk5LjktMS45OSAyTDMgMTUuOTNjMCAuNjkuMzUgMS4zLjg4IDEuNjZMMTIgMjNsOC4xMS01LjQxYy41My0uMzYuODgtLjk3Ljg4LTEuNjZMMjEgM2MwLTEuMS0uOS0yLTItMnptLTkgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTMuMTdsNy41OS03LjU5TDE5IDdsLTkgOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnM+PHBhdGggZD1cXFwiTTIxLjcxIDExLjI5bC05LTljLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC05IDljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOSA5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMGw5LTljLjM5LS4zOC4zOS0xLjAxIDAtMS40MXpNMTQgMTQuNVYxMmgtNHYzSDh2LTRjMC0uNTUuNDUtMSAxLTFoNVY3LjVsMy41IDMuNS0zLjUgMy41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1iaWtlPjxwYXRoIGQ9XFxcIk0xNS41IDUuNWMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTUgMTJjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDUgNS0yLjIgNS01LTIuMi01LTUtNXptMCA4LjVjLTEuOSAwLTMuNS0xLjYtMy41LTMuNXMxLjYtMy41IDMuNS0zLjUgMy41IDEuNiAzLjUgMy41LTEuNiAzLjUtMy41IDMuNXptNS44LTEwbDIuNC0yLjQuOC44YzEuMyAxLjMgMyAyLjEgNS4xIDIuMVY5Yy0xLjUgMC0yLjctLjYtMy42LTEuNWwtMS45LTEuOWMtLjUtLjQtMS0uNi0xLjYtLjZzLTEuMS4yLTEuNC42TDcuOCA4LjRjLS40LjQtLjYuOS0uNiAxLjQgMCAuNi4yIDEuMS42IDEuNEwxMSAxNHY1aDJ2LTYuMmwtMi4yLTIuM3pNMTkgMTJjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDUgNS0yLjIgNS01LTIuMi01LTUtNXptMCA4LjVjLTEuOSAwLTMuNS0xLjYtMy41LTMuNXMxLjYtMy41IDMuNS0zLjUgMy41IDEuNiAzLjUgMy41LTEuNiAzLjUtMy41IDMuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtYm9hdD48cGF0aCBkPVxcXCJNMjAgMjFjLTEuMzkgMC0yLjc4LS40Ny00LTEuMzItMi40NCAxLjcxLTUuNTYgMS43MS04IDBDNi43OCAyMC41MyA1LjM5IDIxIDQgMjFIMnYyaDJjMS4zOCAwIDIuNzQtLjM1IDQtLjk5IDIuNTIgMS4yOSA1LjQ4IDEuMjkgOCAwIDEuMjYuNjUgMi42Mi45OSA0IC45OWgydi0yaC0yek0zLjk1IDE5SDRjMS42IDAgMy4wMi0uODggNC0yIC45OCAxLjEyIDIuNCAyIDQgMnMzLjAyLS44OCA0LTJjLjk4IDEuMTIgMi40IDIgNCAyaC4wNWwxLjg5LTYuNjhjLjA4LS4yNi4wNi0uNTQtLjA2LS43OHMtLjM0LS40Mi0uNi0uNUwyMCAxMC42MlY2YzAtMS4xLS45LTItMi0yaC0zVjFIOXYzSDZjLTEuMSAwLTIgLjktMiAydjQuNjJsLTEuMjkuNDJjLS4yNi4wOC0uNDguMjYtLjYuNXMtLjE1LjUyLS4wNi43OEwzLjk1IDE5ek02IDZoMTJ2My45N0wxMiA4IDYgOS45N1Y2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1idXM+PHBhdGggZD1cXFwiTTQgMTZjMCAuODguMzkgMS42NyAxIDIuMjJWMjBjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoOHYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi0xLjc4Yy42MS0uNTUgMS0xLjM0IDEtMi4yMlY2YzAtMy41LTMuNTgtNC04LTRzLTggLjUtOCA0djEwem0zLjUgMWMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em05IDBjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xLjUtNkg2VjZoMTJ2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtY2FyPjxwYXRoIGQ9XFxcIk0xOC45MiA2LjAxQzE4LjcyIDUuNDIgMTguMTYgNSAxNy41IDVoLTExYy0uNjYgMC0xLjIxLjQyLTEuNDIgMS4wMUwzIDEydjhjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoMTJ2MWMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtOGwtMi4wOC01Ljk5ek02LjUgMTZjLS44MyAwLTEuNS0uNjctMS41LTEuNVM1LjY3IDEzIDYuNSAxM3MxLjUuNjcgMS41IDEuNVM3LjMzIDE2IDYuNSAxNnptMTEgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6TTUgMTFsMS41LTQuNWgxMUwxOSAxMUg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGlyZWN0aW9ucy1yYWlsd2F5PjxwYXRoIGQ9XFxcIk00IDE1LjVDNCAxNy40MyA1LjU3IDE5IDcuNSAxOUw2IDIwLjV2LjVoMTJ2LS41TDE2LjUgMTljMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVWNWMwLTMuNS0zLjU4LTQtOC00cy04IC41LTggNHYxMC41em04IDEuNWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTYtN0g2VjVoMTJ2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtcnVuPjxwYXRoIGQ9XFxcIk0xMy40OSA1LjQ4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTMuNiAxMy45bDEtNC40IDIuMSAydjZoMnYtNy41bC0yLjEtMiAuNi0zYzEuMyAxLjUgMy4zIDIuNSA1LjUgMi41di0yYy0xLjkgMC0zLjUtMS00LjMtMi40bC0xLTEuNmMtLjQtLjYtMS0xLTEuNy0xLS4zIDAtLjUuMS0uOC4xbC01LjIgMi4ydjQuN2gydi0zLjRsMS44LS43LTEuNiA4LjEtNC45LTEtLjQgMiA3IDEuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtc3Vid2F5PjxwYXRoIGQ9XFxcIk0xMiAyYy00LjQyIDAtOCAuNS04IDR2OS41QzQgMTcuNDMgNS41NyAxOSA3LjUgMTlMNiAyMC41di41aDEydi0uNUwxNi41IDE5YzEuOTMgMCAzLjUtMS41NyAzLjUtMy41VjZjMC0zLjUtMy41OC00LTgtNHpNNy41IDE3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVTNi42NyAxNCA3LjUgMTRzMS41LjY3IDEuNSAxLjVTOC4zMyAxNyA3LjUgMTd6bTMuNS02SDZWNmg1djV6bTUuNSA2Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXptMS41LTZoLTVWNmg1djV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kaXJlY3Rpb25zLXRyYW5zaXQ+PHBhdGggZD1cXFwiTTEyIDJjLTQuNDIgMC04IC41LTggNHY5LjVDNCAxNy40MyA1LjU3IDE5IDcuNSAxOUw2IDIwLjV2LjVoMTJ2LS41TDE2LjUgMTljMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVWNmMwLTMuNS0zLjU4LTQtOC00ek03LjUgMTdjLS44MyAwLTEuNS0uNjctMS41LTEuNVM2LjY3IDE0IDcuNSAxNHMxLjUuNjcgMS41IDEuNVM4LjMzIDE3IDcuNSAxN3ptMy41LTZINlY2aDV2NXptNS41IDZjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xLjUtNmgtNVY2aDV2NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRpcmVjdGlvbnMtd2Fsaz48cGF0aCBkPVxcXCJNMTMuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek05LjggOC45TDcgMjNoMi4xbDEuOC04IDIuMSAydjZoMnYtNy41bC0yLjEtMiAuNi0zQzE0LjggMTIgMTYuOCAxMyAxOSAxM3YtMmMtMS45IDAtMy41LTEtNC4zLTIuNGwtMS0xLjZjLS40LS42LTEtMS0xLjctMS0uMyAwLS41LjEtLjguMUw2IDguM1YxM2gyVjkuNmwxLjgtLjdcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVkaXQtbG9jYXRpb24+PHBhdGggZD1cXFwiTTEyIDJDOC4xNCAyIDUgNS4xNCA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODYtMy4xNC03LTctN3ptLTEuNTYgMTBIOXYtMS40NGwzLjM1LTMuMzQgMS40MyAxLjQzTDEwLjQ0IDEyem00LjQ1LTQuNDVsLS43LjctMS40NC0xLjQ0LjctLjdjLjE1LS4xNS4zOS0uMTUuNTQgMGwuOS45Yy4xNS4xNS4xNS4zOSAwIC41NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2LXN0YXRpb24+PHBhdGggZD1cXFwiTTE5Ljc3IDcuMjNsLjAxLS4wMS0zLjcyLTMuNzJMMTUgNC41NmwyLjExIDIuMTFjLS45NC4zNi0xLjYxIDEuMjYtMS42MSAyLjMzIDAgMS4zOCAxLjEyIDIuNSAyLjUgMi41LjM2IDAgLjY5LS4wOCAxLS4yMXY3LjIxYzAgLjU1LS40NSAxLTEgMXMtMS0uNDUtMS0xVjE0YzAtMS4xLS45LTItMi0yaC0xVjVjMC0xLjEtLjktMi0yLTJINmMtMS4xIDAtMiAuOS0yIDJ2MTZoMTB2LTcuNWgxLjV2NWMwIDEuMzggMS4xMiAyLjUgMi41IDIuNXMyLjUtMS4xMiAyLjUtMi41VjljMC0uNjktLjI4LTEuMzItLjczLTEuNzd6TTE4IDEwYy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6TTggMTh2LTQuNUg2TDEwIDZ2NWgybC00IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mbGlnaHQ+PHBhdGggZD1cXFwiTTEwLjE4IDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjEgMTZ2LTJsLTgtNVYzLjVjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDIuNjcgMTAgMy41VjlsLTggNXYybDgtMi41VjE5bC0yIDEuNVYyMmwzLjUtMSAzLjUgMXYtMS41TDEzIDE5di01LjVsOCAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ob3RlbD48cGF0aCBkPVxcXCJNNyAxM2MxLjY2IDAgMy0xLjM0IDMtM1M4LjY2IDcgNyA3cy0zIDEuMzQtMyAzIDEuMzQgMyAzIDN6bTEyLTZoLTh2N0gzVjVIMXYxNWgydi0zaDE4djNoMnYtOWMwLTIuMjEtMS43OS00LTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxheWVycz48cGF0aCBkPVxcXCJNMTEuOTkgMTguNTRsLTcuMzctNS43M0wzIDE0LjA3bDkgNyA5LTctMS42My0xLjI3LTcuMzggNS43NHpNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGF5ZXJzLWNsZWFyPjxwYXRoIGQ9XFxcIk0xOS44MSAxNC45OWwxLjE5LS45Mi0xLjQzLTEuNDMtMS4xOS45MiAxLjQzIDEuNDN6bS0uNDUtNC43MkwyMSA5bC05LTctMi45MSAyLjI3IDcuODcgNy44OCAyLjQtMS44OHpNMy4yNyAxTDIgMi4yN2w0LjIyIDQuMjJMMyA5bDEuNjMgMS4yN0wxMiAxNmwyLjEtMS42MyAxLjQzIDEuNDNMMTIgMTguNTRsLTcuMzctNS43M0wzIDE0LjA3bDkgNyA0Ljk1LTMuODVMMjAuNzMgMjEgMjIgMTkuNzMgMy4yNyAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtYWN0aXZpdHk+PHBhdGggZD1cXFwiTTIwIDEyYzAtMS4xLjktMiAyLTJWNmMwLTEuMS0uOS0yLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjRjMS4xIDAgMS45OS45IDEuOTkgMnMtLjg5IDItMiAydjRjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMnYtNGMtMS4xIDAtMi0uOS0yLTJ6bS00LjQyIDQuOEwxMiAxNC41bC0zLjU4IDIuMyAxLjA4LTQuMTItMy4yOS0yLjY5IDQuMjQtLjI1TDEyIDUuOGwxLjU0IDMuOTUgNC4yNC4yNS0zLjI5IDIuNjkgMS4wOSA0LjExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtYWlycG9ydD48cGF0aCBkPVxcXCJNMjEgMTZ2LTJsLTgtNVYzLjVjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDIuNjcgMTAgMy41VjlsLTggNXYybDgtMi41VjE5bC0yIDEuNVYyMmwzLjUtMSAzLjUgMXYtMS41TDEzIDE5di01LjVsOCAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1hdG0+PHBhdGggZD1cXFwiTTExIDE3aDJ2LTFoMWMuNTUgMCAxLS40NSAxLTF2LTNjMC0uNTUtLjQ1LTEtMS0xaC0zdi0xaDRWOGgtMlY3aC0ydjFoLTFjLS41NSAwLTEgLjQ1LTEgMXYzYzAgLjU1LjQ1IDEgMSAxaDN2MUg5djJoMnYxem05LTEzSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE4YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjZjMC0xLjExLS44OS0yLTItMnptMCAxNEg0VjZoMTZ2MTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1iYXI+PHBhdGggZD1cXFwiTTIxIDVWM0gzdjJsOCA5djVINnYyaDEydi0yaC01di01bDgtOXpNNy40MyA3TDUuNjYgNWgxMi42OWwtMS43OCAySDcuNDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1jYWZlPjxwYXRoIGQ9XFxcIk0yMCAzSDR2MTBjMCAyLjIxIDEuNzkgNCA0IDRoNmMyLjIxIDAgNC0xLjc5IDQtNHYtM2gyYzEuMTEgMCAyLS44OSAyLTJWNWMwLTEuMTEtLjg5LTItMi0yem0wIDVoLTJWNWgydjN6TTIgMjFoMTh2LTJIMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtY2FyLXdhc2g+PHBhdGggZD1cXFwiTTE3IDVjLjgzIDAgMS41LS42NyAxLjUtMS41IDAtMS0xLjUtMi43LTEuNS0yLjdzLTEuNSAxLjctMS41IDIuN2MwIC44My42NyAxLjUgMS41IDEuNXptLTUgMGMuODMgMCAxLjUtLjY3IDEuNS0xLjUgMC0xLTEuNS0yLjctMS41LTIuN3MtMS41IDEuNy0xLjUgMi43YzAgLjgzLjY3IDEuNSAxLjUgMS41ek03IDVjLjgzIDAgMS41LS42NyAxLjUtMS41QzguNSAyLjUgNyAuOCA3IC44UzUuNSAyLjUgNS41IDMuNUM1LjUgNC4zMyA2LjE3IDUgNyA1em0xMS45MiAzLjAxQzE4LjcyIDcuNDIgMTguMTYgNyAxNy41IDdoLTExYy0uNjYgMC0xLjIxLjQyLTEuNDIgMS4wMUwzIDE0djhjMCAuNTUuNDUgMSAxIDFoMWMuNTUgMCAxLS40NSAxLTF2LTFoMTJ2MWMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtOGwtMi4wOC01Ljk5ek02LjUgMThjLS44MyAwLTEuNS0uNjctMS41LTEuNVM1LjY3IDE1IDYuNSAxNXMxLjUuNjcgMS41IDEuNVM3LjMzIDE4IDYuNSAxOHptMTEgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41cy42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6TTUgMTNsMS41LTQuNWgxMUwxOSAxM0g1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtY29udmVuaWVuY2Utc3RvcmU+PHBhdGggZD1cXFwiTTE5IDdWNEg1djNIMnYxM2g4di00aDR2NGg4VjdoLTN6bS04IDNIOXYxaDJ2MUg4VjloMlY4SDhWN2gzdjN6bTUgMmgtMXYtMmgtMlY3aDF2MmgxVjdoMXY1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtZGluaW5nPjxwYXRoIGQ9XFxcIk04LjEgMTMuMzRsMi44My0yLjgzTDMuOTEgMy41Yy0xLjU2IDEuNTYtMS41NiA0LjA5IDAgNS42Nmw0LjE5IDQuMTh6bTYuNzgtMS44MWMxLjUzLjcxIDMuNjguMjEgNS4yNy0xLjM4IDEuOTEtMS45MSAyLjI4LTQuNjUuODEtNi4xMi0xLjQ2LTEuNDYtNC4yLTEuMS02LjEyLjgxLTEuNTkgMS41OS0yLjA5IDMuNzQtMS4zOCA1LjI3TDMuNyAxOS44N2wxLjQxIDEuNDFMMTIgMTQuNDFsNi44OCA2Ljg4IDEuNDEtMS40MUwxMy40MSAxM2wxLjQ3LTEuNDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1kcmluaz48cGF0aCBkPVxcXCJNMyAybDIuMDEgMTguMjNDNS4xMyAyMS4yMyA1Ljk3IDIyIDcgMjJoMTBjMS4wMyAwIDEuODctLjc3IDEuOTktMS43N0wyMSAySDN6bTkgMTdjLTEuNjYgMC0zLTEuMzQtMy0zIDAtMiAzLTUuNCAzLTUuNHMzIDMuNCAzIDUuNGMwIDEuNjYtMS4zNCAzLTMgM3ptNi4zMy0xMUg1LjY3bC0uNDQtNGgxMy41M2wtLjQzIDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1mbG9yaXN0PjxwYXRoIGQ9XFxcIk0xMiAyMmM0Ljk3IDAgOS00LjAzIDktOS00Ljk3IDAtOSA0LjAzLTkgOXpNNS42IDEwLjI1YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41LjUzIDAgMS4wMS0uMTYgMS40Mi0uNDRsLS4wMi4xOWMwIDEuMzggMS4xMiAyLjUgMi41IDIuNXMyLjUtMS4xMiAyLjUtMi41bC0uMDItLjE5Yy40LjI4Ljg5LjQ0IDEuNDIuNDQgMS4zOCAwIDIuNS0xLjEyIDIuNS0yLjUgMC0xLS41OS0xLjg1LTEuNDMtMi4yNS44NC0uNCAxLjQzLTEuMjUgMS40My0yLjI1IDAtMS4zOC0xLjEyLTIuNS0yLjUtMi41LS41MyAwLTEuMDEuMTYtMS40Mi40NGwuMDItLjE5QzE0LjUgMi4xMiAxMy4zOCAxIDEyIDFTOS41IDIuMTIgOS41IDMuNWwuMDIuMTljLS40LS4yOC0uODktLjQ0LTEuNDItLjQ0LTEuMzggMC0yLjUgMS4xMi0yLjUgMi41IDAgMSAuNTkgMS44NSAxLjQzIDIuMjUtLjg0LjQtMS40MyAxLjI1LTEuNDMgMi4yNXpNMTIgNS41YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41cy0xLjEyIDIuNS0yLjUgMi41UzkuNSA5LjM4IDkuNSA4czEuMTItMi41IDIuNS0yLjV6TTMgMTNjMCA0Ljk3IDQuMDMgOSA5IDkgMC00Ljk3LTQuMDMtOS05LTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1nYXMtc3RhdGlvbj48cGF0aCBkPVxcXCJNMTkuNzcgNy4yM2wuMDEtLjAxLTMuNzItMy43MkwxNSA0LjU2bDIuMTEgMi4xMWMtLjk0LjM2LTEuNjEgMS4yNi0xLjYxIDIuMzMgMCAxLjM4IDEuMTIgMi41IDIuNSAyLjUuMzYgMCAuNjktLjA4IDEtLjIxdjcuMjFjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFWMTRjMC0xLjEtLjktMi0yLTJoLTFWNWMwLTEuMS0uOS0yLTItMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmgxMHYtNy41aDEuNXY1YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41czIuNS0xLjEyIDIuNS0yLjVWOWMwLS42OS0uMjgtMS4zMi0uNzMtMS43N3pNMTIgMTBINlY1aDZ2NXptNiAwYy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1ncm9jZXJ5LXN0b3JlPjxwYXRoIGQ9XFxcIk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yek0xIDJ2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTQgMC0uMjUtLjExLS4yNS0uMjVsLjAzLS4xMi45LTEuNjNoNy40NWMuNzUgMCAxLjQxLS40MSAxLjc1LTEuMDNsMy41OC02LjQ5Yy4wOC0uMTQuMTItLjMxLjEyLS40OCAwLS41NS0uNDUtMS0xLTFINS4yMWwtLjk0LTJIMXptMTYgMTZjLTEuMSAwLTEuOTkuOS0xLjk5IDJzLjg5IDIgMS45OSAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtaG9zcGl0YWw+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTEgMTFoLTR2NGgtNHYtNEg2di00aDRWNmg0djRoNHY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtaG90ZWw+PHBhdGggZD1cXFwiTTcgMTNjMS42NiAwIDMtMS4zNCAzLTNTOC42NiA3IDcgN3MtMyAxLjM0LTMgMyAxLjM0IDMgMyAzem0xMi02aC04djdIM1Y1SDF2MTVoMnYtM2gxOHYzaDJ2LTljMC0yLjIxLTEuNzktNC00LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1sYXVuZHJ5LXNlcnZpY2U+PHBhdGggZD1cXFwiTTkuMTcgMTYuODNjMS41NiAxLjU2IDQuMSAxLjU2IDUuNjYgMCAxLjU2LTEuNTYgMS41Ni00LjEgMC01LjY2bC01LjY2IDUuNjZ6TTE4IDIuMDFMNiAyYy0xLjExIDAtMiAuODktMiAydjE2YzAgMS4xMS44OSAyIDIgMmgxMmMxLjExIDAgMi0uODkgMi0yVjRjMC0xLjExLS44OS0xLjk5LTItMS45OXpNMTAgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek03IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNSAxNmMtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNiA2IDIuNjkgNiA2LTIuNjkgNi02IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1saWJyYXJ5PjxwYXRoIGQ9XFxcIk0xMiAxMS41NUM5LjY0IDkuMzUgNi40OCA4IDMgOHYxMWMzLjQ4IDAgNi42NCAxLjM1IDkgMy41NSAyLjM2LTIuMTkgNS41Mi0zLjU1IDktMy41NVY4Yy0zLjQ4IDAtNi42NCAxLjM1LTkgMy41NXpNMTIgOGMxLjY2IDAgMy0xLjM0IDMtM3MtMS4zNC0zLTMtMy0zIDEuMzQtMyAzIDEuMzQgMyAzIDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1tYWxsPjxwYXRoIGQ9XFxcIk0xOSA2aC0yYzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZINWMtMS4xIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnptLTctM2MxLjY2IDAgMyAxLjM0IDMgM0g5YzAtMS42NiAxLjM0LTMgMy0zem0wIDEwYy0yLjc2IDAtNS0yLjI0LTUtNWgyYzAgMS42NiAxLjM0IDMgMyAzczMtMS4zNCAzLTNoMmMwIDIuNzYtMi4yNCA1LTUgNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLW1vdmllcz48cGF0aCBkPVxcXCJNMTggM3YyaC0yVjNIOHYySDZWM0g0djE4aDJ2LTJoMnYyaDh2LTJoMnYyaDJWM2gtMnpNOCAxN0g2di0yaDJ2MnptMC00SDZ2LTJoMnYyem0wLTRINlY3aDJ2MnptMTAgOGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLW9mZmVyPjxwYXRoIGQ9XFxcIk0yMS40MSAxMS41OGwtOS05QzEyLjA1IDIuMjIgMTEuNTUgMiAxMSAySDRjLTEuMSAwLTIgLjktMiAydjdjMCAuNTUuMjIgMS4wNS41OSAxLjQybDkgOWMuMzYuMzYuODYuNTggMS40MS41OC41NSAwIDEuMDUtLjIyIDEuNDEtLjU5bDctN2MuMzctLjM2LjU5LS44Ni41OS0xLjQxIDAtLjU1LS4yMy0xLjA2LS41OS0xLjQyek01LjUgN0M0LjY3IDcgNCA2LjMzIDQgNS41UzQuNjcgNCA1LjUgNCA3IDQuNjcgNyA1LjUgNi4zMyA3IDUuNSA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtcGFya2luZz48cGF0aCBkPVxcXCJNMTMgM0g2djE4aDR2LTZoM2MzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNnptLjIgOEgxMFY3aDMuMmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1waGFybWFjeT48cGF0aCBkPVxcXCJNMjEgNWgtMi42NGwxLjE0LTMuMTRMMTcuMTUgMWwtMS40NiA0SDN2MmwyIDYtMiA2djJoMTh2LTJsLTItNiAyLTZWNXptLTUgOWgtM3YzaC0ydi0zSDh2LTJoM1Y5aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1waG9uZT48cGF0aCBkPVxcXCJNNi42MiAxMC43OWMxLjQ0IDIuODMgMy43NiA1LjE0IDYuNTkgNi41OWwyLjItMi4yYy4yNy0uMjcuNjctLjM2IDEuMDItLjI0IDEuMTIuMzcgMi4zMy41NyAzLjU3LjU3LjU1IDAgMSAuNDUgMSAxVjIwYzAgLjU1LS40NSAxLTEgMS05LjM5IDAtMTctNy42MS0xNy0xNyAwLS41NS40NS0xIDEtMWgzLjVjLjU1IDAgMSAuNDUgMSAxIDAgMS4yNS4yIDIuNDUuNTcgMy41Ny4xMS4zNS4wMy43NC0uMjUgMS4wMmwtMi4yIDIuMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXBpenphPjxwYXRoIGQ9XFxcIk0xMiAyQzguNDMgMiA1LjIzIDMuNTQgMy4wMSA2TDEyIDIybDguOTktMTZDMTguNzggMy41NSAxNS41NyAyIDEyIDJ6TTcgN2MwLTEuMS45LTIgMi0yczIgLjkgMiAyLS45IDItMiAyLTItLjktMi0yem01IDhjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtcGxheT48cGF0aCBkPVxcXCJNMjAgMTJjMC0xLjEuOS0yIDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJ2NGMxLjEgMCAxLjk5LjkgMS45OSAycy0uODkgMi0yIDJ2NGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0ydi00Yy0xLjEgMC0yLS45LTItMnptLTQuNDIgNC44TDEyIDE0LjVsLTMuNTggMi4zIDEuMDgtNC4xMi0zLjI5LTIuNjkgNC4yNC0uMjVMMTIgNS44bDEuNTQgMy45NSA0LjI0LjI1LTMuMjkgMi42OSAxLjA5IDQuMTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wb3N0LW9mZmljZT48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1wcmludHNob3A+PHBhdGggZD1cXFwiTTE5IDhINWMtMS42NiAwLTMgMS4zNC0zIDN2Nmg0djRoMTJ2LTRoNHYtNmMwLTEuNjYtMS4zNC0zLTMtM3ptLTMgMTFIOHYtNWg4djV6bTMtN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxem0tMS05SDZ2NGgxMlYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jYWwtc2VlPjxjaXJjbGUgY3g9MTIgY3k9MTIgcj0zLjI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sb2NhbC1zaGlwcGluZz48cGF0aCBkPVxcXCJNMjAgOGgtM1Y0SDNjLTEuMSAwLTIgLjktMiAydjExaDJjMCAxLjY2IDEuMzQgMyAzIDNzMy0xLjM0IDMtM2g2YzAgMS42NiAxLjM0IDMgMyAzczMtMS4zNCAzLTNoMnYtNWwtMy00ek02IDE4LjVjLS44MyAwLTEuNS0uNjctMS41LTEuNXMuNjctMS41IDEuNS0xLjUgMS41LjY3IDEuNSAxLjUtLjY3IDEuNS0xLjUgMS41em0xMy41LTlsMS45NiAyLjVIMTdWOS41aDIuNXptLTEuNSA5Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2FsLXRheGk+PHBhdGggZD1cXFwiTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNUgxNVYzSDl2Mkg2LjVjLS42NiAwLTEuMjEuNDItMS40MiAxLjAxTDMgMTJ2OGMwIC41NS40NSAxIDEgMWgxYy41NSAwIDEtLjQ1IDEtMXYtMWgxMnYxYzAgLjU1LjQ1IDEgMSAxaDFjLjU1IDAgMS0uNDUgMS0xdi04bC0yLjA4LTUuOTl6TTYuNSAxNmMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzUuNjcgMTMgNi41IDEzczEuNS42NyAxLjUgMS41UzcuMzMgMTYgNi41IDE2em0xMSAwYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpNNSAxMWwxLjUtNC41aDExTDE5IDExSDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXA+PHBhdGggZD1cXFwiTTIwLjUgM2wtLjE2LjAzTDE1IDUuMSA5IDMgMy4zNiA0LjljLS4yMS4wNy0uMzYuMjUtLjM2LjQ4VjIwLjVjMCAuMjguMjIuNS41LjVsLjE2LS4wM0w5IDE4LjlsNiAyLjEgNS42NC0xLjljLjIxLS4wNy4zNi0uMjUuMzYtLjQ4VjMuNWMwLS4yOC0uMjItLjUtLjUtLjV6TTE1IDE5bC02LTIuMTFWNWw2IDIuMTFWMTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1teS1sb2NhdGlvbj48cGF0aCBkPVxcXCJNMTIgOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTguOTQgM2MtLjQ2LTQuMTctMy43Ny03LjQ4LTcuOTQtNy45NFYxaC0ydjIuMDZDNi44MyAzLjUyIDMuNTIgNi44MyAzLjA2IDExSDF2MmgyLjA2Yy40NiA0LjE3IDMuNzcgNy40OCA3Ljk0IDcuOTRWMjNoMnYtMi4wNmM0LjE3LS40NiA3LjQ4LTMuNzcgNy45NC03Ljk0SDIzdi0yaC0yLjA2ek0xMiAxOWMtMy44NyAwLTctMy4xMy03LTdzMy4xMy03IDctNyA3IDMuMTMgNyA3LTMuMTMgNy03IDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uYXZpZ2F0aW9uPjxwYXRoIGQ9XFxcIk0xMiAyTDQuNSAyMC4yOWwuNzEuNzFMMTIgMThsNi43OSAzIC43MS0uNzF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uZWFyLW1lPjxwYXRoIGQ9XFxcIk0yMSAzTDMgMTAuNTN2Ljk4bDYuODQgMi42NUwxMi40OCAyMWguOThMMjEgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcnNvbi1waW4+PHBhdGggZD1cXFwiTTE5IDJINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDRsMyAzIDMtM2g0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDMuM2MxLjQ5IDAgMi43IDEuMjEgMi43IDIuNyAwIDEuNDktMS4yMSAyLjctMi43IDIuNy0xLjQ5IDAtMi43LTEuMjEtMi43LTIuNyAwLTEuNDkgMS4yMS0yLjcgMi43LTIuN3pNMTggMTZINnYtLjljMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xdi45elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVyc29uLXBpbi1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDOC4xNCAyIDUgNS4xNCA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODYtMy4xNC03LTctN3ptMCAyYzEuMSAwIDIgLjkgMiAyIDAgMS4xMS0uOSAyLTIgMnMtMi0uODktMi0yYzAtMS4xLjktMiAyLTJ6bTAgMTBjLTEuNjcgMC0zLjE0LS44NS00LTIuMTUuMDItMS4zMiAyLjY3LTIuMDUgNC0yLjA1czMuOTguNzMgNCAyLjA1Yy0uODYgMS4zLTIuMzMgMi4xNS00IDIuMTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waW4tZHJvcD48cGF0aCBkPVxcXCJNMTggOGMwLTMuMzEtMi42OS02LTYtNlM2IDQuNjkgNiA4YzAgNC41IDYgMTEgNiAxMXM2LTYuNSA2LTExem0tOCAwYzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjg5IDItMiAyYy0xLjEgMC0yLS45LTItMnpNNSAyMHYyaDE0di0ySDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wbGFjZT48cGF0aCBkPVxcXCJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYXRlLXJldmlldz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgMTR2LTIuNDdsNi44OC02Ljg4Yy4yLS4yLjUxLS4yLjcxIDBsMS43NyAxLjc3Yy4yLjIuMi41MSAwIC43MUw4LjQ3IDE0SDZ6bTEyIDBoLTcuNWwyLTJIMTh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlc3RhdXJhbnQ+PHBhdGggZD1cXFwiTTExIDlIOVYySDd2N0g1VjJIM3Y3YzAgMi4xMiAxLjY2IDMuODQgMy43NSAzLjk3VjIyaDIuNXYtOS4wM0MxMS4zNCAxMi44NCAxMyAxMS4xMiAxMyA5VjJoLTJ2N3ptNS0zdjhoMi41djhIMjFWMmMtMi43NiAwLTUgMi4yNC01IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0YXVyYW50LW1lbnU+PHBhdGggZD1cXFwiTTguMSAxMy4zNGwyLjgzLTIuODNMMy45MSAzLjVjLTEuNTYgMS41Ni0xLjU2IDQuMDkgMCA1LjY2bDQuMTkgNC4xOHptNi43OC0xLjgxYzEuNTMuNzEgMy42OC4yMSA1LjI3LTEuMzggMS45MS0xLjkxIDIuMjgtNC42NS44MS02LjEyLTEuNDYtMS40Ni00LjItMS4xLTYuMTIuODEtMS41OSAxLjU5LTIuMDkgMy43NC0xLjM4IDUuMjdMMy43IDE5Ljg3bDEuNDEgMS40MUwxMiAxNC40MWw2Ljg4IDYuODggMS40MS0xLjQxTDEzLjQxIDEzbDEuNDctMS40N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNhdGVsbGl0ZT48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTUgNC45OWgzQzggNi42NSA2LjY2IDggNSA4VjQuOTl6TTUgMTJ2LTJjMi43NiAwIDUtMi4yNSA1LTUuMDFoMkMxMiA4Ljg2IDguODcgMTIgNSAxMnptMCA2bDMuNS00LjUgMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RvcmUtbWFsbC1kaXJlY3Rvcnk+PHBhdGggZD1cXFwiTTIwIDRINHYyaDE2VjR6bTEgMTB2LTJsLTEtNUg0bC0xIDV2MmgxdjZoMTB2LTZoNHY2aDJ2LTZoMXptLTkgNEg2di00aDZ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0cmVldHZpZXc+PHBhdGggZD1cXFwiTTEyLjU2IDE0LjMzYy0uMzQuMjctLjU2LjctLjU2IDEuMTdWMjFoN2MxLjEgMCAyLS45IDItMnYtNS45OGMtLjk0LS4zMy0xLjk1LS41Mi0zLS41Mi0yLjAzIDAtMy45My43LTUuNDQgMS44M3pcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PTE4IGN5PTYgcj01PjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMS41IDZjMC0xLjA4LjI3LTIuMS43NC0zSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgLjU1LjIzIDEuMDUuNTkgMS40MWw5LjgyLTkuODJDMTIuMjMgOS40MiAxMS41IDcuOCAxMS41IDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdWJ3YXk+PGNpcmNsZSBjeD0xNS41IGN5PTE2IHI9MT48L2NpcmNsZT48Y2lyY2xlIGN4PTguNSBjeT0xNiByPTE+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTcuMDEgOWgxMHY1aC0xMHpNMTcuOCAyLjhDMTYgMi4wOSAxMy44NiAyIDEyIDJjLTEuODYgMC00IC4wOS01LjguOEMzLjUzIDMuODQgMiA2LjA1IDIgOC44NlYyMmgyMFY4Ljg2YzAtMi44MS0xLjUzLTUuMDItNC4yLTYuMDZ6bS4yIDEzLjA4YzAgMS40NS0xLjE4IDIuNjItMi42MyAyLjYybDEuMTMgMS4xMlYyMEgxNWwtMS41LTEuNWgtMi44M0w5LjE3IDIwSDcuNXYtLjM4bDEuMTItMS4xMkM3LjE4IDE4LjUgNiAxNy4zMiA2IDE1Ljg4VjljMC0yLjYzIDMtMyA2LTMgMy4zMiAwIDYgLjM4IDYgM3Y2Ljg4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGVycmFpbj48cGF0aCBkPVxcXCJNMTQgNmwtMy43NSA1IDIuODUgMy44LTEuNiAxLjJDOS44MSAxMy43NSA3IDEwIDcgMTBsLTYgOGgyMkwxNCA2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhZmZpYz48cGF0aCBkPVxcXCJNMjAgMTBoLTNWOC44NmMxLjcyLS40NSAzLTIgMy0zLjg2aC0zVjRjMC0uNTUtLjQ1LTEtMS0xSDhjLS41NSAwLTEgLjQ1LTEgMXYxSDRjMCAxLjg2IDEuMjggMy40MSAzIDMuODZWMTBINGMwIDEuODYgMS4yOCAzLjQxIDMgMy44NlYxNUg0YzAgMS44NiAxLjI4IDMuNDEgMyAzLjg2VjIwYzAgLjU1LjQ1IDEgMSAxaDhjLjU1IDAgMS0uNDUgMS0xdi0xLjE0YzEuNzItLjQ1IDMtMiAzLTMuODZoLTN2LTEuMTRjMS43Mi0uNDUgMy0yIDMtMy44NnptLTggOWMtMS4xMSAwLTItLjktMi0ycy44OS0yIDItMmMxLjEgMCAyIC45IDIgMnMtLjg5IDItMiAyem0wLTVjLTEuMTEgMC0yLS45LTItMnMuODktMiAyLTJjMS4xIDAgMiAuOSAyIDJzLS44OSAyLTIgMnptMC01Yy0xLjExIDAtMi0uOS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMSAwIDIgLjg5IDIgMiAwIDEuMS0uODkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFpbj48cGF0aCBkPVxcXCJNMTIgMmMtNCAwLTggLjUtOCA0djkuNUM0IDE3LjQzIDUuNTcgMTkgNy41IDE5TDYgMjAuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAxOWMxLjkzIDAgMy41LTEuNTcgMy41LTMuNVY2YzAtMy41LTMuNTgtNC04LTR6TTcuNSAxN2MtLjgzIDAtMS41LS42Ny0xLjUtMS41UzYuNjcgMTQgNy41IDE0czEuNS42NyAxLjUgMS41UzguMzMgMTcgNy41IDE3em0zLjUtN0g2VjZoNXY0em0yIDBWNmg1djRoLTV6bTMuNSA3Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYW0+PHBhdGggZD1cXFwiTTE5IDE2Ljk0VjguNWMwLTIuNzktMi42MS0zLjQtNi4wMS0zLjQ5bC43Ni0xLjUxSDE3VjJIN3YxLjVoNC43NWwtLjc2IDEuNTJDNy44NiA1LjExIDUgNS43MyA1IDguNXY4LjQ0YzAgMS40NSAxLjE5IDIuNjYgMi41OSAyLjk3TDYgMjEuNXYuNWgyLjIzbDItMkgxNGwyIDJoMnYtLjVMMTYuNSAyMGgtLjA4YzEuNjkgMCAyLjU4LTEuMzcgMi41OC0zLjA2em0tNyAxLjU2Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXptNS00LjVIN1Y5aDEwdjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmFuc2Zlci13aXRoaW4tYS1zdGF0aW9uPjxwYXRoIGQ9XFxcIk0xNi40OSAxNS41di0xLjc1TDE0IDE2LjI1bDIuNDkgMi41VjE3SDIydi0xLjV6bTMuMDIgNC4yNUgxNHYxLjVoNS41MVYyM0wyMiAyMC41IDE5LjUxIDE4ek05LjUgNS41YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnpNNS43NSA4LjlMMyAyM2gyLjFsMS43NS04TDkgMTd2Nmgydi03LjU1TDguOTUgMTMuNGwuNi0zQzEwLjg1IDEyIDEyLjggMTMgMTUgMTN2LTJjLTEuODUgMC0zLjQ1LTEtNC4zNS0yLjQ1bC0uOTUtMS42QzkuMzUgNi4zNSA4LjcgNiA4IDZjLS4yNSAwLS41LjA1LS43NS4xNUwyIDguM1YxM2gyVjkuNjVsMS43NS0uNzVcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXpvb20tb3V0LW1hcD48cGF0aCBkPVxcXCJNMTUgM2wyLjMgMi4zLTIuODkgMi44NyAxLjQyIDEuNDJMMTguNyA2LjcgMjEgOVYzek0zIDlsMi4zLTIuMyAyLjg3IDIuODkgMS40Mi0xLjQyTDYuNyA1LjMgOSAzSDN6bTYgMTJsLTIuMy0yLjMgMi44OS0yLjg3LTEuNDItMS40Mkw1LjMgMTcuMyAzIDE1djZ6bTEyLTZsLTIuMyAyLjMtMi44Ny0yLjg5LTEuNDIgMS40MiAyLjg5IDIuODdMMTUgMjFoNnpcXFwiPjwvcGF0aD48L2c+IDwvZGVmcz48L3N2Zz4gPC9pcm9uLWljb25zZXQtc3ZnPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9tYXBzLWljb25zLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9