webpackJsonp([0],{

/***/ 100:
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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(16);

__webpack_require__(32);

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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(91);

__webpack_require__(94);

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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<link rel=stylesheet type=text/css href=\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic\" crossorigin=anonymous>");

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(30);

__webpack_require__(91);

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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(30);

__webpack_require__(91);

__webpack_require__(94);

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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(107);

__webpack_require__(108);

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

/***/ 107:
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(92);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-material-styles> <template> <style>:host,html{--paper-material:{display:block;position:relative};--paper-material-elevation-1:{@apply --shadow-elevation-2dp;};--paper-material-elevation-2:{@apply --shadow-elevation-4dp;};--paper-material-elevation-3:{@apply --shadow-elevation-6dp;};--paper-material-elevation-4:{@apply --shadow-elevation-8dp;};--paper-material-elevation-5:{@apply --shadow-elevation-16dp;};}.paper-material,:host(.paper-material){@apply --paper-material;}.paper-material[elevation=\"1\"],:host(.paper-material[elevation=\"1\"]){@apply --paper-material-elevation-1;}.paper-material[elevation=\"2\"],:host(.paper-material[elevation=\"2\"]){@apply --paper-material-elevation-2;}.paper-material[elevation=\"3\"],:host(.paper-material[elevation=\"3\"]){@apply --paper-material-elevation-3;}.paper-material[elevation=\"4\"],:host(.paper-material[elevation=\"4\"]){@apply --paper-material-elevation-4;}.paper-material[elevation=\"5\"],:host(.paper-material[elevation=\"5\"]){@apply --paper-material-elevation-5;}</style> </template> </dom-module>");

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(17);

__webpack_require__(16);

__webpack_require__(34);

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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(93);

__webpack_require__(31);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(95);

__webpack_require__(33);

__webpack_require__(96);

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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

__webpack_require__(38);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=icons size=24> <svg><defs> <g id=3d-rotation><path d=\"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z\"></path></g> <g id=accessibility><path d=\"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z\"></path></g> <g id=accessible><circle cx=12 cy=4 r=2></circle><path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"></path></g> <g id=account-balance><path d=\"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z\"></path></g> <g id=account-balance-wallet><path d=\"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=account-box><path d=\"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\"></path></g> <g id=account-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"></path></g> <g id=add><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></g> <g id=add-alert><path d=\"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z\"></path></g> <g id=add-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\"></path></g> <g id=add-circle-outline><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=add-shopping-cart><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"></path></g> <g id=alarm><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"></path></g> <g id=alarm-add><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"></path></g> <g id=alarm-off><path d=\"M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z\"></path></g> <g id=alarm-on><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z\"></path></g> <g id=all-out><path d=\"M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z\"></path></g> <g id=android><path d=\"M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z\"></path></g> <g id=announcement><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z\"></path></g> <g id=apps><path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\"></path></g> <g id=archive><path d=\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\"></path></g> <g id=arrow-back><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g> <g id=arrow-downward><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"></path></g> <g id=arrow-drop-down><path d=\"M7 10l5 5 5-5z\"></path></g> <g id=arrow-drop-down-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z\"></path></g> <g id=arrow-drop-up><path d=\"M7 14l5-5 5 5z\"></path></g> <g id=arrow-forward><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"></path></g> <g id=arrow-upward><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"></path></g> <g id=aspect-ratio><path d=\"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=assessment><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z\"></path></g> <g id=assignment><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\"></path></g> <g id=assignment-ind><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z\"></path></g> <g id=assignment-late><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"></path></g> <g id=assignment-return><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z\"></path></g> <g id=assignment-returned><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z\"></path></g> <g id=assignment-turned-in><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=attachment><path d=\"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z\"></path></g> <g id=autorenew><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"></path></g> <g id=backspace><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></g> <g id=backup><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=block><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z\"></path></g> <g id=book><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=bookmark><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=bookmark-border><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=bug-report><path d=\"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z\"></path></g> <g id=build><path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"></path></g> <g id=cached><path d=\"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z\"></path></g> <g id=camera-enhance><path d=\"M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z\"></path></g> <g id=cancel><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\"></path></g> <g id=card-giftcard><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=card-membership><path d=\"M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z\"></path></g> <g id=card-travel><path d=\"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z\"></path></g> <g id=change-history><path d=\"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z\"></path></g> <g id=check><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"></path></g> <g id=check-box><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=check-box-outline-blank><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=check-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path></g> <g id=chevron-left><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g> <g id=chevron-right><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g> <g id=chrome-reader-mode><path d=\"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z\"></path></g> <g id=class><path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z\"></path></g> <g id=clear><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=close><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=cloud><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z\"></path></g> <g id=cloud-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z\"></path></g> <g id=cloud-done><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z\"></path></g> <g id=cloud-download><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z\"></path></g> <g id=cloud-off><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z\"></path></g> <g id=cloud-queue><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"></path></g> <g id=cloud-upload><path d=\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\"></path></g> <g id=code><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path></g> <g id=compare-arrows><path d=\"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z\"></path></g> <g id=content-copy><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path></g> <g id=content-cut><path d=\"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z\"></path></g> <g id=content-paste><path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path></g> <g id=copyright><path d=\"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=create><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></g> <g id=create-new-folder><path d=\"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"></path></g> <g id=credit-card><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=dashboard><path d=\"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z\"></path></g> <g id=date-range><path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path></g> <g id=delete><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-forever><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"></path></g> <g id=delete-sweep><path d=\"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z\"></path></g> <g id=description><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z\"></path></g> <g id=dns><path d=\"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=done><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g> <g id=done-all><path d=\"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z\"></path></g> <g id=donut-large><path d=\"M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z\"></path></g> <g id=donut-small><path d=\"M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z\"></path></g> <g id=drafts><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"></path></g> <g id=eject><path d=\"M5 17h14v2H5zm7-12L5.33 15h13.34z\"></path></g> <g id=error><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g> <g id=error-outline><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=euro-symbol><path d=\"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z\"></path></g> <g id=event><path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\"></path></g> <g id=event-seat><path d=\"M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z\"></path></g> <g id=exit-to-app><path d=\"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"></path></g> <g id=expand-less><path d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"></path></g> <g id=expand-more><path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path></g> <g id=explore><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"></path></g> <g id=extension><path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"></path></g> <g id=face><path d=\"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z\"></path></g> <g id=favorite><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"></path></g> <g id=favorite-border><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"></path></g> <g id=feedback><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z\"></path></g> <g id=file-download><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=file-upload><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g> <g id=filter-list><path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\"></path></g> <g id=find-in-page><path d=\"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z\"></path></g> <g id=find-replace><path d=\"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z\"></path></g> <g id=fingerprint><path d=\"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z\"></path></g> <g id=first-page><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"></path></g> <g id=flag><path d=\"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z\"></path></g> <g id=flight-land><path d=\"M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z\"></path></g> <g id=flight-takeoff><path d=\"M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z\"></path></g> <g id=flip-to-back><path d=\"M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z\"></path></g> <g id=flip-to-front><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z\"></path></g> <g id=folder><path d=\"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\"></path></g> <g id=folder-open><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path></g> <g id=folder-shared><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z\"></path></g> <g id=font-download><path d=\"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z\"></path></g> <g id=forward><path d=\"M12 8V4l8 8-8 8v-4H4V8z\"></path></g> <g id=fullscreen><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"></path></g> <g id=fullscreen-exit><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"></path></g> <g id=g-translate><path d=\"M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z\"></path></g> <g id=gavel><path d=\"M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z\"></path></g> <g id=gesture><path d=\"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z\"></path></g> <g id=get-app><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path></g> <g id=gif><path d=\"M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z\"></path></g> <g id=grade><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=group-work><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=help><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g> <g id=help-outline><path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z\"></path></g> <g id=highlight-off><path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=history><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=home><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"></path></g> <g id=hourglass-empty><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z\"></path></g> <g id=hourglass-full><path d=\"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z\"></path></g> <g id=http><path d=\"M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z\"></path></g> <g id=https><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=important-devices><path d=\"M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z\"></path></g> <g id=inbox><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"></path></g> <g id=indeterminate-check-box><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z\"></path></g> <g id=info><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"></path></g> <g id=info-outline><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"></path></g> <g id=input><path d=\"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z\"></path></g> <g id=invert-colors><path d=\"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z\"></path></g> <g id=label><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z\"></path></g> <g id=label-outline><path d=\"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z\"></path></g> <g id=language><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z\"></path></g> <g id=last-page><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"></path></g> <g id=launch><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=lightbulb-outline><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></g> <g id=line-style><path d=\"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z\"></path></g> <g id=line-weight><path d=\"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z\"></path></g> <g id=link><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"></path></g> <g id=list><path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path></g> <g id=lock><path d=\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\"></path></g> <g id=lock-open><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z\"></path></g> <g id=lock-outline><path d=\"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z\"></path></g> <g id=low-priority><path d=\"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z\"></path></g> <g id=loyalty><path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z\"></path></g> <g id=mail><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g> <g id=markunread-mailbox><path d=\"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"></path></g> <g id=menu><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g> <g id=more-horiz><path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=more-vert><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=motorcycle><path d=\"M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"></path></g> <g id=move-to-inbox><path d=\"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z\"></path></g> <g id=next-week><path d=\"M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z\"></path></g> <g id=note-add><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z\"></path></g> <g id=offline-pin><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z\"></path></g> <g id=opacity><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"></path></g> <g id=open-in-browser><path d=\"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z\"></path></g> <g id=open-in-new><path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"></path></g> <g id=open-with><path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path></g> <g id=pageview><path d=\"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z\"></path></g> <g id=pan-tool><path d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"></path></g> <g id=payment><path d=\"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z\"></path></g> <g id=perm-camera-mic><path d=\"M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z\"></path></g> <g id=perm-contact-calendar><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z\"></path></g> <g id=perm-data-setting><path d=\"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path></g> <g id=perm-device-information><path d=\"M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g> <g id=perm-identity><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\"></path></g> <g id=perm-media><path d=\"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z\"></path></g> <g id=perm-phone-msg><path d=\"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z\"></path></g> <g id=perm-scan-wifi><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g> <g id=pets><circle cx=4.5 cy=9.5 r=2.5></circle><circle cx=9 cy=5.5 r=2.5></circle><circle cx=15 cy=5.5 r=2.5></circle><circle cx=19.5 cy=9.5 r=2.5></circle><path d=\"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z\"></path></g> <g id=picture-in-picture><path d=\"M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z\"></path></g> <g id=picture-in-picture-alt><path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"></path></g> <g id=play-for-work><path d=\"M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z\"></path></g> <g id=polymer><path d=\"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z\"></path></g> <g id=power-settings-new><path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"></path></g> <g id=pregnant-woman><path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"></path></g> <g id=print><path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\"></path></g> <g id=query-builder><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=question-answer><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g> <g id=radio-button-checked><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=radio-button-unchecked><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"></path></g> <g id=receipt><path d=\"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z\"></path></g> <g id=record-voice-over><circle cx=9 cy=9 r=4></circle><path d=\"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z\"></path></g> <g id=redeem><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z\"></path></g> <g id=redo><path d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z\"></path></g> <g id=refresh><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g> <g id=remove><path d=\"M19 13H5v-2h14v2z\"></path></g> <g id=remove-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z\"></path></g> <g id=remove-circle-outline><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></g> <g id=remove-shopping-cart><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"></path></g> <g id=reorder><path d=\"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z\"></path></g> <g id=reply><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=reply-all><path d=\"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></g> <g id=report><path d=\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z\"></path></g> <g id=report-problem><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=restore><path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"></path></g> <g id=restore-page><path d=\"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"></path></g> <g id=room><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g> <g id=rounded-corner><path d=\"M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z\"></path></g> <g id=rowing><path d=\"M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z\"></path></g> <g id=save><path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path></g> <g id=schedule><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z\"></path></g> <g id=search><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path></g> <g id=select-all><path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path></g> <g id=send><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"></path></g> <g id=settings><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path></g> <g id=settings-applications><path d=\"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z\"></path></g> <g id=settings-backup-restore><path d=\"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z\"></path></g> <g id=settings-bluetooth><path d=\"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z\"></path></g> <g id=settings-brightness><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z\"></path></g> <g id=settings-cell><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z\"></path></g> <g id=settings-ethernet><path d=\"M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z\"></path></g> <g id=settings-input-antenna><path d=\"M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z\"></path></g> <g id=settings-input-component><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-composite><path d=\"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z\"></path></g> <g id=settings-input-hdmi><path d=\"M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z\"></path></g> <g id=settings-input-svideo><path d=\"M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path></g> <g id=settings-overscan><path d=\"M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z\"></path></g> <g id=settings-phone><path d=\"M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z\"></path></g> <g id=settings-power><path d=\"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z\"></path></g> <g id=settings-remote><path d=\"M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z\"></path></g> <g id=settings-voice><path d=\"M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z\"></path></g> <g id=shop><path d=\"M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z\"></path></g> <g id=shop-two><path d=\"M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z\"></path></g> <g id=shopping-basket><path d=\"M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g> <g id=shopping-cart><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g> <g id=sort><path d=\"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z\"></path></g> <g id=speaker-notes><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z\"></path></g> <g id=speaker-notes-off><path d=\"M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z\"></path></g> <g id=spellcheck><path d=\"M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z\"></path></g> <g id=star><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path></g> <g id=star-border><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=star-half><path d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"></path></g> <g id=stars><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"></path></g> <g id=store><path d=\"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z\"></path></g> <g id=subdirectory-arrow-left><path d=\"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"></path></g> <g id=subdirectory-arrow-right><path d=\"M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"></path></g> <g id=subject><path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"></path></g> <g id=supervisor-account><path d=\"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z\"></path></g> <g id=swap-horiz><path d=\"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"></path></g> <g id=swap-vert><path d=\"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z\"></path></g> <g id=swap-vertical-circle><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z\"></path></g> <g id=system-update-alt><path d=\"M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z\"></path></g> <g id=tab><path d=\"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z\"></path></g> <g id=tab-unselected><path d=\"M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z\"></path></g> <g id=text-format><path d=\"M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z\"></path></g> <g id=theaters><path d=\"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z\"></path></g> <g id=thumb-down><path d=\"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z\"></path></g> <g id=thumb-up><path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"></path></g> <g id=thumbs-up-down><path d=\"M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z\"></path></g> <g id=timeline><path d=\"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z\"></path></g> <g id=toc><path d=\"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z\"></path></g> <g id=today><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></g> <g id=toll><path d=\"M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z\"></path></g> <g id=touch-app><path d=\"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z\"></path></g> <g id=track-changes><path d=\"M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z\"></path></g> <g id=translate><path d=\"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z\"></path></g> <g id=trending-down><path d=\"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z\"></path></g> <g id=trending-flat><path d=\"M22 12l-4-4v3H3v2h15v3z\"></path></g> <g id=trending-up><path d=\"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z\"></path></g> <g id=turned-in><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z\"></path></g> <g id=turned-in-not><path d=\"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z\"></path></g> <g id=unarchive><path d=\"M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z\"></path></g> <g id=undo><path d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\"></path></g> <g id=unfold-less><path d=\"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z\"></path></g> <g id=unfold-more><path d=\"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z\"></path></g> <g id=update><path d=\"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z\"></path></g> <g id=verified-user><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z\"></path></g> <g id=view-agenda><path d=\"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z\"></path></g> <g id=view-array><path d=\"M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z\"></path></g> <g id=view-carousel><path d=\"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z\"></path></g> <g id=view-column><path d=\"M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z\"></path></g> <g id=view-day><path d=\"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z\"></path></g> <g id=view-headline><path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\"></path></g> <g id=view-list><path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\"></path></g> <g id=view-module><path d=\"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z\"></path></g> <g id=view-quilt><path d=\"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z\"></path></g> <g id=view-stream><path d=\"M4 18h17v-6H4v6zM4 5v6h17V5H4z\"></path></g> <g id=view-week><path d=\"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z\"></path></g> <g id=visibility><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"></path></g> <g id=visibility-off><path d=\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\"></path></g> <g id=warning><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> <g id=watch-later><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z\"></path></g> <g id=weekend><path d=\"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z\"></path></g> <g id=work><path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\"></path></g> <g id=youtube-searched-for><path d=\"M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z\"></path></g> <g id=zoom-in><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z\"></path></g> <g id=zoom-out><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(0);

__webpack_require__(95);

__webpack_require__(33);

__webpack_require__(96);

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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(36);

__webpack_require__(32);

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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(37);

__webpack_require__(30);

__webpack_require__(91);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-item-shared-styles> <template> <style>.paper-item,:host{display:block;position:relative;min-height:var(--paper-item-min-height,48px);padding:0 16px}.paper-item{@apply --paper-font-subhead;border:none;outline:0;background:#fff;width:100%;text-align:left}.paper-item[hidden],:host([hidden]){display:none!important}.paper-item.iron-selected,:host(.iron-selected){font-weight:var(--paper-item-selected-weight,bold);@apply --paper-item-selected;}.paper-item[disabled],:host([disabled]){color:var(--paper-item-disabled-color,var(--disabled-text-color));@apply --paper-item-disabled;}.paper-item:focus,:host(:focus){position:relative;outline:0;@apply --paper-item-focused;}.paper-item:focus:before,:host(:focus):before{@apply --layout-fit;background:currentColor;content:'';opacity:var(--dark-divider-opacity);pointer-events:none;@apply --paper-item-focused-before;}</style> </template> </dom-module>");

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(92);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-material-shared-styles> <template> <style>:host{display:block;position:relative}:host([elevation=\"1\"]){@apply --shadow-elevation-2dp;}:host([elevation=\"2\"]){@apply --shadow-elevation-4dp;}:host([elevation=\"3\"]){@apply --shadow-elevation-6dp;}:host([elevation=\"4\"]){@apply --shadow-elevation-8dp;}:host([elevation=\"5\"]){@apply --shadow-elevation-16dp;}</style> </template> </dom-module>");

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(6);

__webpack_require__(93);

__webpack_require__(106);

__webpack_require__(109);

__webpack_require__(31);

__webpack_require__(110);

__webpack_require__(90);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=my-view1> <template> <style include=shared-styles>:host{display:block;padding:10px}iron-list{height:100vh}</style> <div class=autocomplete-wrapper> <paper-input id=search label=Suche></paper-input> <paper-autocomplete-suggestions for=search source=[[autocompletes]]></paper-autocomplete-suggestions> </div> <iron-list items=[[items]]> <template> <paper-card heading=[[item.name]] image=http://placehold.it/150x50/FFC107/000000 alt=[[item.name]]> <div class=card-content> [[item.details]] </div> </paper-card> </template> </iron-list> </template> </dom-module>");

var MyView1 = function (_Polymer$Element) {
  _inherits(MyView1, _Polymer$Element);

  function MyView1() {
    _classCallCheck(this, MyView1);

    return _possibleConstructorReturn(this, (MyView1.__proto__ || Object.getPrototypeOf(MyView1)).apply(this, arguments));
  }

  _createClass(MyView1, null, [{
    key: 'is',
    get: function get() {
      return 'my-view1';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        autocompletes: {
          type: Array,
          value: function value() {
            return [{ text: "Scotland Yard" }];
          }
        },
        items: {
          type: Array,
          value: function value() {
            return [{ name: "Scotland Yard", details: "2-5 Spieler, Dauer: 90min, 1990", publisher: "Ravensburger" }, { name: "Mister X", details: "2-4 Spieler, Dauer: 30min, 2012", publisher: "Ravensburger" }];
          }
        }

      };
    }
  }]);

  return MyView1;
}(Polymer.Element);

window.customElements.define(MyView1.is, MyView1);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=shared-styles> <template> <style>.card{margin:24px;padding:16px;color:#757575;border-radius:5px;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.circle{display:inline-block;width:64px;height:64px;text-align:center;color:#555;border-radius:50%;background:#ddd;font-size:30px;line-height:64px}h1{margin:16px 0;color:#212121;font-size:22px}</style> </template> </dom-module>");

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(103);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--paper-font-common-base:{font-family:Roboto,Noto,sans-serif;-webkit-font-smoothing:antialiased};--paper-font-common-code:{font-family:'Roboto Mono',Consolas,Menlo,monospace;-webkit-font-smoothing:antialiased};--paper-font-common-expensive-kerning:{text-rendering:optimizeLegibility};--paper-font-common-nowrap:{white-space:nowrap;overflow:hidden;text-overflow:ellipsis};--paper-font-display4:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:112px;font-weight:300;letter-spacing:-.044em;line-height:120px};--paper-font-display3:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:56px;font-weight:400;letter-spacing:-.026em;line-height:60px};--paper-font-display2:{@apply --paper-font-common-base;font-size:45px;font-weight:400;letter-spacing:-.018em;line-height:48px};--paper-font-display1:{@apply --paper-font-common-base;font-size:34px;font-weight:400;letter-spacing:-.01em;line-height:40px};--paper-font-headline:{@apply --paper-font-common-base;font-size:24px;font-weight:400;letter-spacing:-.012em;line-height:32px};--paper-font-title:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:20px;font-weight:500;line-height:28px};--paper-font-subhead:{@apply --paper-font-common-base;font-size:16px;font-weight:400;line-height:24px};--paper-font-body2:{@apply --paper-font-common-base;font-size:14px;font-weight:500;line-height:24px};--paper-font-body1:{@apply --paper-font-common-base;font-size:14px;font-weight:400;line-height:20px};--paper-font-caption:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:12px;font-weight:400;letter-spacing:.011em;line-height:20px};--paper-font-menu:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:13px;font-weight:500;line-height:24px};--paper-font-button:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:14px;font-weight:500;letter-spacing:.018em;line-height:24px;text-transform:uppercase};--paper-font-code2:{@apply --paper-font-common-code;font-size:14px;font-weight:700;line-height:20px};--paper-font-code1:{@apply --paper-font-common-code;font-size:14px;font-weight:500;line-height:20px};}</style> </custom-style>");

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--shadow-transition:{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)};--shadow-none:{box-shadow:none};--shadow-elevation-2dp:{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)};--shadow-elevation-3dp:{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)};--shadow-elevation-4dp:{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)};--shadow-elevation-6dp:{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)};--shadow-elevation-8dp:{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)};--shadow-elevation-12dp:{box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)};--shadow-elevation-16dp:{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)};--shadow-elevation-24dp:{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)};}</style> </custom-style>");

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(101);

__webpack_require__(102);

__webpack_require__(104);

__webpack_require__(105);

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

/***/ 94:
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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(113);

__webpack_require__(114);

var RegisterHtmlTemplate = __webpack_require__(2);

RegisterHtmlTemplate.register("<dom-module id=paper-item> <template> <style include=paper-item-shared-styles></style> <style>:host{@apply --layout-horizontal;@apply --layout-center;@apply --paper-font-subhead;@apply --paper-item;}</style> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-item',

  behaviors: [Polymer.PaperItemBehavior]
});

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(92);

__webpack_require__(115);

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

/***/ 97:
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(99);

__webpack_require__(100);

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

/***/ 99:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNoYXItY291bnRlci5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvZm9udC1yb2JvdG8vcm9ib3RvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1jb250YWluZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1jYXJkL3BhcGVyLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlcy5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1saXN0L2lyb24tbGlzdC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1hdXRvY29tcGxldGUvcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1tYXRlcmlhbC9wYXBlci1tYXRlcmlhbC1zaGFyZWQtc3R5bGVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL215LXZpZXcxLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC1zdHlsZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvc2hhZG93Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sIl0sIm5hbWVzIjpbIlJlZ2lzdGVySHRtbFRlbXBsYXRlIiwicmVxdWlyZSIsInRvQm9keSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFpQlMsUUFBNkIsOEJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJuQyxRQUF5Qjs7QUFFcEI7Ozs7QUFJQztBQUNILFlBQ0w7QUFGVTs7Ozs7QUFPSjtBQUNDLGNBQU07QUFDTSwwQkFBTTtBQUNwQixZQUFTO0FBQ1IsYUFBTztBQUNKLGdCQUVYO0FBUFU7QUFYQzs7QUFvQkYsY0FBVyxzQkFBRTtBQUNkLFlBQTZCLDhCQUFFLElBQVcsUUFBUyxTQUFDLEVBQUssTUFDbEU7QUFBQzs7QUFFYyxtQkFBVywyQkFBRTtBQUN2QixRQUFLLEtBQVEsU0FBRTtBQUNaLFdBQWEsYUFBZSxnQkFDbEM7QUFBRSxXQUFLO0FBQ0QsV0FBZ0IsZ0JBQ3RCO0FBQ0Y7QUFBQzs7OztBQUlELE1BQWUsYUFBRTtBQUNmLFdBQWMsUUFBNkIsK0JBQ2hDLFFBQTRCLDRCQUFNLE1BQUssS0FDcEQ7QUFBQzs7Ozs7QUFLVyxnQkFBVyx3QkFBRTtBQUN2QixXQUFXLEtBQVksY0FDekI7QUFBQzs7Ozs7Ozs7Ozs7O0FBYU8sWUFBVSxrQkFBTSxPQUFFOzs7QUFHckIsUUFBTyxVQUFjLGFBQU8sS0FBTyxVQUFhLFdBQzdDLEtBQVMsVUFBRSxDQUFLLEtBQWEsYUFBSyxLQUN4QyxZQUNNLEtBQVMsVUFBRSxDQUFLLEtBQWEsYUFBTztBQUMxQyxXQUFPLENBQUssS0FDZDtBQUFDOzs7Ozs7Ozs7Ozs7QUFZVyxnQkFBVSxzQkFBTSxPQUFFO0FBQ3pCLFFBQUssS0FBZSxnQkFBRTtBQUN2QixhQUFXLEtBQVcsV0FBUyxTQUNqQzs7QUFDQSxXQUNGO0FBQ0Q7QUFyRmlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCM0IsUUFBa0IsbUJBQUk7QUFDdEIsUUFBaUIsaUJBQWEsY0FBRztBQUNqQyxRQUFp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Y0FBUTtBQUNQLGVBRVI7QUFKUTtBQVpHOztBQWtCTCxhQUFXLG1CQUFFO0FBQ2YsVUFBQyxDQUFRLFFBQWtCLGtCQUFTLFVBQUU7QUFDaEMsZ0JBQWtCLGtCQUFVLFdBQ3JDOzs7QUFFUSxlQUFLLEtBQWlCLGlCQUFnQixpQkFBTSxLQUFnQixnQkFBSyxLQUMzRTtBQUFDOzs7Ozs7O0FBT08sY0FBVSxrQkFBSyxNQUFFO0FBQ25CLFdBQU8sUUFBSTtBQUNYLFdBQU0sTUFBVSxZQUFFO0FBQ2hCLGFBQU8sUUFDYjtBQUFDLFNBQ0g7QUFBQzs7QUFFYyxxQkFBVSx5QkFBTSxPQUFFO0FBQzVCLFVBQU0sTUFBUSxVQUFRLE1BQU8sT0FBSyxNQUFFO0FBQ2pDLGFBQVMsU0FBTSxNQUFPLE9BQzVCO0FBQ0Y7QUFDQTtBQTlDa0MsR0FBRDs7QUFnRDVCLFVBQWtCLGtCQUFVLFdBQU07O0FBRWxDLFVBQWtCLGtCQUFxQixzQkFBVyxZQUFFO0FBQ3RELFFBQUMsQ0FBUSxRQUFrQixrQkFBUyxVQUFFO0FBQ2hDLGNBQWtCLGtCQUFVLFdBQVUsU0FBYyxjQUM3RDs7O0FBRVEsYUFBSyxLQUFZLFlBQVEsUUFBa0Isa0JBQ3JEO0FBQ0Y7QUFBSSxLIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLW1ldGEvaXJvbi1tZXRhLmh0bWxcIj5cblxuPHNjcmlwdD5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbiBJcm9uTWV0YSBpbnN0YW5jZS5cbiAgICovXG4gIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbnVsbDtcblxuICAvKipcbiAgICogYFVzZSBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gZWxlbWVudCB0aGF0IHZhbGlkYXRlcyB1c2VyIGlucHV0LlxuICAgKiBVc2UgdGhlIHJlbGF0ZWQgYFBvbHltZXIuSXJvblZhbGlkYXRvckJlaGF2aW9yYCB0byBhZGQgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgdG8gYW4gaXJvbi1pbnB1dC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYW4gYDxpcm9uLWZvcm0+YCBlbGVtZW50IHZhbGlkYXRlcyBpdHMgZmllbGRzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgc3VibWl0IGJ1dHRvbi5cbiAgICogVG8gdmFsaWRhdGUgYSBmb3JtIGltcGVyYXRpdmVseSwgY2FsbCB0aGUgZm9ybSdzIGB2YWxpZGF0ZSgpYCBtZXRob2QsIHdoaWNoIGluIHR1cm4gd2lsbFxuICAgKiBjYWxsIGB2YWxpZGF0ZSgpYCBvbiBhbGwgaXRzIGNoaWxkcmVuLiBCeSB1c2luZyBgUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAsIHlvdXJcbiAgICogY3VzdG9tIGVsZW1lbnQgd2lsbCBnZXQgYSBwdWJsaWMgYHZhbGlkYXRlKClgLCB3aGljaFxuICAgKiB3aWxsIHJldHVybiB0aGUgdmFsaWRpdHkgb2YgdGhlIGVsZW1lbnQsIGFuZCBhIGNvcnJlc3BvbmRpbmcgYGludmFsaWRgIGF0dHJpYnV0ZSxcbiAgICogd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcuXG4gICAqXG4gICAqIFRvIGltcGxlbWVudCB0aGUgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgb2YgeW91ciBlbGVtZW50LCB5b3UgbXVzdCBvdmVycmlkZVxuICAgKiB0aGUgcHJvdGVjdGVkIGBfZ2V0VmFsaWRpdHkoKWAgbWV0aG9kIG9mIHRoaXMgYmVoYXZpb3VyLCByYXRoZXIgdGhhbiBgdmFsaWRhdGUoKWAuXG4gICAqIFNlZSBbdGhpc10oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9pcm9uLWZvcm0vYmxvYi9tYXN0ZXIvZGVtby9zaW1wbGUtZWxlbWVudC5odG1sKVxuICAgKiBmb3IgYW4gZXhhbXBsZS5cbiAgICpcbiAgICogIyMjIEFjY2Vzc2liaWxpdHlcbiAgICpcbiAgICogQ2hhbmdpbmcgdGhlIGBpbnZhbGlkYCBwcm9wZXJ0eSwgZWl0aGVyIG1hbnVhbGx5IG9yIGJ5IGNhbGxpbmcgYHZhbGlkYXRlKClgIHdpbGwgdXBkYXRlIHRoZVxuICAgKiBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICAgKiBAcG9seW1lckJlaGF2aW9yXG4gICAqL1xuICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBOYW1lIG9mIHRoZSB2YWxpZGF0b3IgdG8gdXNlLlxuICAgICAgICovXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGxhc3QgY2FsbCB0byBgdmFsaWRhdGVgIGlzIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICByZWdpc3RlcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbmV3IFBvbHltZXIuSXJvbk1ldGEoe3R5cGU6ICd2YWxpZGF0b3InfSk7XG4gICAgfSxcblxuICAgIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAndHJ1ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBSZWNvbXB1dGUgdGhpcyBldmVyeSB0aW1lIGl0J3MgbmVlZGVkLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgdGhlXG4gICAgICogdW5kZXJseWluZyBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgaGFzIGNoYW5nZWQuICovXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgJiZcbiAgICAgICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YS5ieUtleSh0aGlzLnZhbGlkYXRvcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbGlkYXRvciBgdmFsaWRhdG9yYCBleGlzdHMuXG4gICAgICovXG4gICAgaGFzVmFsaWRhdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgIT0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBgdmFsdWVgIGlzIHZhbGlkLCBhbmQgdXBkYXRlcyBgaW52YWxpZGAuIElmIHlvdSB3YW50XG4gICAgICogeW91ciBlbGVtZW50IHRvIGhhdmUgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZDtcbiAgICAgKiBvdmVycmlkZSBgX2dldFZhbGlkaXR5KHZhbHVlKWAgaW5zdGVhZC5cblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBEZXByZWNhdGVkOiBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLiBCeSBkZWZhdWx0LFxuICAgICAqIGl0IGlzIHBhc3NlZCB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuXG4gICAgICogSWYgdGhpcyBhcmd1bWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIHRoZSBlbGVtZW50J3MgYHZhbHVlYCBwcm9wZXJ0eVxuICAgICAqIGlzIHVzZWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIGFuIGVsZW1lbnQgdGhhdCBhbHNvIGhhcyBhIHZhbHVlIHByb3BlcnR5LCBhbmQgdGhlcmUgd2FzXG4gICAgICAvLyBubyBleHBsaWNpdCB2YWx1ZSBhcmd1bWVudCBwYXNzZWQsIHVzZSB0aGUgZWxlbWVudCdzIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh0aGlzLnZhbHVlKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gIXRoaXMuX2dldFZhbGlkaXR5KHZhbHVlKTtcbiAgICAgIHJldHVybiAhdGhpcy5pbnZhbGlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gIEJ5IGRlZmF1bHQsIGl0IGlzIHBhc3NlZFxuICAgICAqIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzIHNldC4gWW91XG4gICAgICogc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGltcGxlbWVudCBjdXN0b20gdmFsaWRpdHlcbiAgICAgKiBsb2dpYyBmb3IgeW91ciBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgICAqL1xuXG4gICAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5odG1sXCI+XG5cbjxzY3JpcHQ+XG5cbiAgLy8gR2VuZXJhdGUgdW5pcXVlLCBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSURzIGZvciBsYWJlbHMgKG5lZWRlZCBieVxuICAvLyBhcmlhLWxhYmVsbGVkYnkpIGFuZCBhZGQtb25zLlxuICBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIgPSB7fTtcbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRMYWJlbElEID0gMTtcbiAgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRBZGRvbklEID0gMTtcblxuICAvKipcbiAgICogVXNlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGlucHV0cyB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIFRoaXNcbiAgICogYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgYnkgYDxwYXBlci1pbnB1dD5gLiBJdCBleHBvc2VzIGEgbnVtYmVyIG9mIHByb3BlcnRpZXMgZnJvbVxuICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGFuZCBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAgYW5kIHRoZXkgc2hvdWxkIGJlIGJvdW5kIGluIHlvdXJcbiAgICogdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoZSBpbnB1dCBlbGVtZW50IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgYGlucHV0RWxlbWVudGAgcHJvcGVydHkgaWYgeW91IG5lZWQgdG8gYWNjZXNzXG4gICAqIHByb3BlcnRpZXMgb3IgbWV0aG9kcyB0aGF0IGFyZSBub3QgZXhwb3NlZC5cbiAgICogQHBvbHltZXJCZWhhdmlvciBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JJbXBsID0ge1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYWJlbCBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiBgPGxhYmVsPmAncyBjb250ZW50IGFuZCBgaGlkZGVuYCBwcm9wZXJ0eSwgZS5nLlxuICAgICAgICogYDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiPltbbGFiZWxdXTwvbGFiZWw+YCBpbiB5b3VyIGB0ZW1wbGF0ZWBcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpcm9uLWlucHV0PmAncyBgYmluZFZhbHVlYFxuICAgICAgICogcHJvcGVydHksIG9yIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiB5b3VyIGlucHV0IHRoYXQgaXMgYG5vdGlmeTp0cnVlYC5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIGJvdGggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBhbmQgdGhlIGlucHV0J3MgYGRpc2FibGVkYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvIGJvdGggdGhlXG4gICAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBpbnZhbGlkYCBwcm9wZXJ0eS5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGUgYGludmFsaWRgIGF0dHJpYnV0ZSBpcyBtYW5hZ2VkIGF1dG9tYXRpY2FsbHksXG4gICAgICAgKiB3aGljaCBjYW4gY2xvYmJlciBhdHRlbXB0cyB0byBtYW5hZ2UgaXQgbWFudWFsbHkuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoaXMgdG8gc3BlY2lmeSB0aGUgcGF0dGVybiBhbGxvd2VkIGJ5IGBwcmV2ZW50SW52YWxpZElucHV0YC4gSWZcbiAgICAgICAqIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFsbG93ZWRQYXR0ZXJuYFxuICAgICAgICogcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGFsbG93ZWRQYXR0ZXJuOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgaW5wdXQuIFRoZSBzdXBwb3J0ZWQgdHlwZXMgYXJlIHRoZVxuICAgICAgICogW25hdGl2ZSBpbnB1dCdzIHR5cGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV88aW5wdXQ+X3R5cGVzKS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCxcbiAgICAgICAqIGJpbmQgdGhpcyB0byB0aGUgKFBvbHltZXIgMSkgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3Mgb3IgKFBvbHltZXIgMilcbiAgICAgICAqIGA8aXJvbi1pbnB1dD5gJ3MgYHR5cGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGF0YWxpc3Qgb2YgdGhlIGlucHV0IChpZiBhbnkpLiBUaGlzIHNob3VsZCBtYXRjaCB0aGUgaWQgb2YgYW4gZXhpc3RpbmcgYDxkYXRhbGlzdD5gLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbGlzdGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcGF0dGVybiB0byB2YWxpZGF0ZSB0aGUgYGlucHV0YCB3aXRoLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcGF0dGVybmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVxdWlyZWRgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkLiBJZiB5b3UncmUgdXNpbmdcbiAgICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LFxuICAgICAgICogYmluZCB0aGlzIHRvIHRoZSBgPHBhcGVyLWlucHV0LWVycm9yPmAncyBjb250ZW50LCBpZiB1c2luZy5cbiAgICAgICAqL1xuICAgICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBzaG93IGEgY2hhcmFjdGVyIGNvdW50ZXIuXG4gICAgICAgKi9cbiAgICAgIGNoYXJDb3VudGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBub0xhYmVsRmxvYXRgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBub0xhYmVsRmxvYXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAgICogdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYWx3YXlzRmxvYXRMYWJlbGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgICAqIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGF1dG9WYWxpZGF0ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICAgKiB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHZhbGlkYXRvcmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY29tcGxldGVgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ29mZidcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2ZvY3VzYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2ZvY3VzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX2F1dG9mb2N1c0NoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGlucHV0bW9kZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGlucHV0bW9kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmxlbmd0aGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1pbmxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGxlbmd0aGAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltdW0gKG51bWVyaWMgb3IgZGF0ZS10aW1lKSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1heGltdW0gKG51bWVyaWMgb3IgZGF0ZS10aW1lKSBpbnB1dCB2YWx1ZS5cbiAgICAgICAqIENhbiBiZSBhIFN0cmluZyAoZS5nLiBgXCIyMDAwLTAxLTAxXCJgKSBvciBhIE51bWJlciAoZS5nLiBgMmApLlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWF4YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBMaW1pdHMgdGhlIG51bWVyaWMgb3IgZGF0ZS10aW1lIGluY3JlbWVudHMuXG4gICAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBzdGVwYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgc3RlcDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbmFtZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcGxhY2Vob2xkZXIgc3RyaW5nIGluIGFkZGl0aW9uIHRvIHRoZSBsYWJlbC4gSWYgdGhpcyBpcyBzZXQsIHRoZSBsYWJlbCB3aWxsIGFsd2F5cyBmbG9hdC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvLyBuZWVkIHRvIHNldCBhIGRlZmF1bHQgc28gX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsIGlzIHJ1blxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVhZG9ubHlgIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc2l6ZWAgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHNpemU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvLyBOb25zdGFuZGFyZCBhdHRyaWJ1dGVzIGZvciBiaW5kaW5nIGlmIG5lZWRlZFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jYXBpdGFsaXplYCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NhcGl0YWxpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ25vbmUnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jb3JyZWN0YCBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgYXV0b2NvcnJlY3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ29mZidcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b3NhdmVgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAgICovXG4gICAgICBhdXRvc2F2ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVzdWx0c2AgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1zZWFyY2guXG4gICAgICAgKi9cbiAgICAgIHJlc3VsdHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFjY2VwdGAgcHJvcGVydHksXG4gICAgICAgKiB1c2VkIHdpdGggdHlwZT1maWxlLlxuICAgICAgICovXG4gICAgICBhY2NlcHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGVgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbXVsdGlwbGVgIHByb3BlcnR5LFxuICAgICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgICAqL1xuICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgX2FyaWFEZXNjcmliZWRCeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgX2FyaWFMYWJlbGxlZEJ5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgfSxcblxuICAgIGtleUJpbmRpbmdzOiB7XG4gICAgICAnc2hpZnQrdGFiOmtleWRvd24nOiAnX29uU2hpZnRUYWJEb3duJ1xuICAgIH0sXG5cbiAgICBob3N0QXR0cmlidXRlczoge1xuICAgICAgdGFiaW5kZXg6IDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXQgaW5wdXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5pbnB1dDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFRoZXNlIHR5cGVzIGhhdmUgc29tZSBkZWZhdWx0IHBsYWNlaG9sZGVyIHRleHQ7IG92ZXJsYXBwaW5nXG4gICAgICAvLyB0aGUgbGFiZWwgb24gdG9wIG9mIGl0IGxvb2tzIHRlcnJpYmxlLiBBdXRvLWZsb2F0IHRoZSBsYWJlbCBpbiB0aGlzIGNhc2UuXG4gICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dCA9IFtcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIixcbiAgICAgICAgICBcInRpbWVcIiwgXCJ3ZWVrXCIsIFwiZmlsZVwiXTtcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdXBkYXRlQXJpYUxhYmVsbGVkQnkoKTtcblxuICAgICAgLy8gSW4gdGhlIDIuMCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50LCB0aGlzIGlzIGhhbmRsZWQgaW4gYG9uSXJvbklucHV0UmVhZHlgLFxuICAgICAgLy8gaS5lLiBhZnRlciB0aGUgbmF0aXZlIGlucHV0IGhhcyBmaW5pc2hlZCBkaXN0cmlidXRpbmcuIEluIHRoZSAxLjAgdmVyc2lvbixcbiAgICAgIC8vIHRoZSBpbnB1dCBpcyBpbiB0aGUgc2hhZG93IHRyZWUsIHNvIGl0J3MgYWxyZWFkeSBhdmFpbGFibGUuXG4gICAgICBpZiAoIVBvbHltZXIuRWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy5pbnB1dEVsZW1lbnQudHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9hcHBlbmRTdHJpbmdXaXRoU3BhY2U6IGZ1bmN0aW9uKHN0ciwgbW9yZSkge1xuICAgICAgaWYgKHN0cikge1xuICAgICAgICBzdHIgPSBzdHIgKyAnICcgKyBtb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gbW9yZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcblxuICAgIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gUG9seW1lci5kb20oZXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmlkKSB7XG4gICAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIHRhcmdldC5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaWQgPSAncGFwZXItaW5wdXQtYWRkLW9uLScgKyBQb2x5bWVyLlBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQrKztcbiAgICAgICAgdGFyZ2V0LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIGlkKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBpbnB1dCBlbGVtZW50IGFuZCBzZXRzIGFuIGVycm9yIHN0eWxlIGlmIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZvcndhcmQgZm9jdXMgdG8gaW5wdXRFbGVtZW50LiBPdmVycmlkZW4gZnJvbSBJcm9uQ29udHJvbFN0YXRlLlxuICAgICAqL1xuICAgIF9mb2N1c0JsdXJIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlLl9mb2N1c0JsdXJIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBmb2N1cyB0byB0aGUgbmVzdGVkIGlucHV0LlxuICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhdGhpcy5fc2hpZnRUYWJQcmVzc2VkICYmIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBzaGlmdCt0YWIga2V5cHJlc3MgaXMgZGV0ZWN0ZWQgYnkgdGhlIG1lbnUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICAgKi9cbiAgICBfb25TaGlmdFRhYkRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgb2xkVGFiSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIG9sZFRhYkluZGV4KTtcbiAgICAgICAgdGhpcy5fc2hpZnRUYWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICB9LCAxKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgYGF1dG9WYWxpZGF0ZWAgaXMgdHJ1ZSwgdGhlbiB2YWxpZGF0ZXMgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgX2hhbmRsZUF1dG9WYWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUpXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgdGhlIGN1cnNvciB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gYWZ0ZXIgdXBkYXRpbmcgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgc2F2ZWQuXG4gICAgICovXG4gICAgdXBkYXRlVmFsdWVBbmRQcmVzZXJ2ZUNhcmV0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgLy8gTm90IGFsbCBlbGVtZW50cyBtaWdodCBoYXZlIHNlbGVjdGlvbiwgYW5kIGV2ZW4gaWYgdGhleSBoYXZlIHRoZVxuICAgICAgLy8gcmlnaHQgcHJvcGVydGllcywgYWNjZXNzaW5nIHRoZW0gbWlnaHQgdGhyb3cgYW4gZXhjZXB0aW9uIChsaWtlIGZvclxuICAgICAgLy8gPGlucHV0IHR5cGU9bnVtYmVyPilcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgLy8gVGhlIGN1cnNvciBhdXRvbWF0aWNhbGx5IGp1bXBzIHRvIHRoZSBlbmQgYWZ0ZXIgcmUtc2V0dGluZyB0aGUgdmFsdWUsXG4gICAgICAgIC8vIHNvIHJlc3RvcmUgaXQgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBzZXQgdGhlIHZhbHVlIGFuZCBnaXZlIHVwIG9uIHRoZSBjYXJldC5cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWw6IGZ1bmN0aW9uKGFsd2F5c0Zsb2F0TGFiZWwsIHBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIgfHwgYWx3YXlzRmxvYXRMYWJlbDtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUFyaWFMYWJlbGxlZEJ5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsYWJlbCA9IFBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgdGhpcy5fYXJpYUxhYmVsbGVkQnkgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGxhYmVsbGVkQnk7XG4gICAgICBpZiAobGFiZWwuaWQpIHtcbiAgICAgICAgbGFiZWxsZWRCeSA9IGxhYmVsLmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxsZWRCeSA9ICdwYXBlci1pbnB1dC1sYWJlbC0nICsgUG9seW1lci5QYXBlcklucHV0SGVscGVyLk5leHRMYWJlbElEKys7XG4gICAgICAgIGxhYmVsLmlkID0gbGFiZWxsZWRCeTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FyaWFMYWJlbGxlZEJ5ID0gbGFiZWxsZWRCeTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlOmZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAvLyBJbiB0aGUgU2hhZG93IERPTSwgdGhlIGBjaGFuZ2VgIGV2ZW50IGlzIG5vdCBsZWFrZWQgaW50byB0aGVcbiAgICAgIC8vIGFuY2VzdG9yIHRyZWUsIHNvIHdlIG11c3QgZG8gdGhpcyBtYW51YWxseS5cbiAgICAgIC8vIFNlZSBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL3NoYWRvdy8jZXZlbnRzLXRoYXQtYXJlLW5vdC1sZWFrZWQtaW50by1hbmNlc3Rvci10cmVlcy5cbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LnR5cGUsIHtzb3VyY2VFdmVudDogZXZlbnR9LCB7XG4gICAgICAgICAgbm9kZTogdGhpcyxcbiAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgIGNhbmNlbGFibGU6IGV2ZW50LmNhbmNlbGFibGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9hdXRvZm9jdXNDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEZpcmVmb3ggZG9lc24ndCByZXNwZWN0IHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIGlmIGl0J3MgYXBwbGllZCBhZnRlclxuICAgICAgLy8gdGhlIHBhZ2UgaXMgbG9hZGVkIChDaHJvbWUvV2ViS2l0IGRvIHJlc3BlY3QgaXQpLCBwcmV2ZW50aW5nIGFuXG4gICAgICAvLyBhdXRvZm9jdXMgYXR0cmlidXRlIHNwZWNpZmllZCBpbiBtYXJrdXAgZnJvbSB0YWtpbmcgZWZmZWN0IHdoZW4gdGhlXG4gICAgICAvLyBlbGVtZW50IGlzIHVwZ3JhZGVkLiBBcyBhIHdvcmthcm91bmQsIGlmIHRoZSBhdXRvZm9jdXMgcHJvcGVydHkgaXMgc2V0LFxuICAgICAgLy8gYW5kIHRoZSBmb2N1cyBoYXNuJ3QgYWxyZWFkeSBiZWVuIG1vdmVkIGVsc2V3aGVyZSwgd2UgdGFrZSBmb2N1cy5cbiAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG5cbiAgICAgICAgLy8gSW4gSUUgMTEsIHRoZSBkZWZhdWx0IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIHRoZSBwYWdlJ3NcbiAgICAgICAgLy8gb3V0ZXJtb3N0IGh0bWwgZWxlbWVudCwgYnV0IHRoZXJlIGFyZSBhbHNvIGNhc2VzICh1bmRlciB0aGVcbiAgICAgICAgLy8gcG9seWZpbGw/KSBpbiB3aGljaCB0aGUgYWN0aXZlRWxlbWVudCBpcyBub3QgYSByZWFsIEhUTUxFbGVtZW50LCBidXRcbiAgICAgICAgLy8ganVzdCBhIHBsYWluIG9iamVjdC4gV2UgaWRlbnRpZnkgdGhlIGxhdHRlciBjYXNlIGFzIGhhdmluZyBubyB2YWxpZFxuICAgICAgICAvLyBhY3RpdmVFbGVtZW50LlxuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBpc0FjdGl2ZUVsZW1lbnRWYWxpZCA9IGFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxuICAgICAgICAvLyBIYXMgc29tZSBvdGhlciBlbGVtZW50IGhhcyBhbHJlYWR5IHRha2VuIHRoZSBmb2N1cz9cbiAgICAgICAgdmFyIGlzU29tZUVsZW1lbnRBY3RpdmUgPSBpc0FjdGl2ZUVsZW1lbnRWYWxpZCAmJlxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvKiBJRSAxMSAqL1xuICAgICAgICBpZiAoIWlzU29tZUVsZW1lbnRBY3RpdmUpIHtcbiAgICAgICAgICAvLyBObyBzcGVjaWZpYyBlbGVtZW50IGhhcyB0YWtlbiB0aGUgZm9jdXMgeWV0LCBzbyB3ZSBjYW4gdGFrZSBpdC5cbiAgICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3IgPSBbXG4gICAgUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlLFxuICAgIFBvbHltZXIuSXJvbkExMXlLZXlzQmVoYXZpb3IsXG4gICAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JJbXBsXG4gIF07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+YCBpcyBhIGNoYXJhY3RlciBjb3VudGVyIGZvciB1c2Ugd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBJdFxuc2hvd3MgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGVudGVyZWQgaW4gdGhlIGlucHV0IGFuZCB0aGUgbWF4IGxlbmd0aCBpZiBpdCBpcyBzcGVjaWZpZWQuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGlucHV0IG1heGxlbmd0aD1cIjIwXCI+XG4gICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIG1peGluIGlzIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY2hhci1jb3VudGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgfCBge31gXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3Bhbj5bW19jaGFyQ291bnRlclN0cl1dPC9zcGFuPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWNoYXItY291bnRlcicsXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgX2NoYXJDb3VudGVyU3RyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG92ZXJyaWRlcyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGluIFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgaWYgKCFzdGF0ZS5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS52YWx1ZSA9IHN0YXRlLnZhbHVlIHx8ICcnO1xuXG4gICAgICB2YXIgY291bnRlciA9IHN0YXRlLnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChzdGF0ZS5pbnB1dEVsZW1lbnQuaGFzQXR0cmlidXRlKCdtYXhsZW5ndGgnKSkge1xuICAgICAgICBjb3VudGVyICs9ICcvJyArIHN0YXRlLmlucHV0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFyQ291bnRlclN0ciA9IGNvdW50ZXI7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuaHRtbCIsIlxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGxpbmsgcmVsPXN0eWxlc2hlZXQgdHlwZT10ZXh0L2NzcyBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMHxSb2JvdG86NDAwLDMwMCwzMDBpdGFsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpY1xcXCIgY3Jvc3NvcmlnaW49YW5vbnltb3VzPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvZm9udC1yb2JvdG8vcm9ib3RvLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBhIGNvbnRhaW5lciBmb3IgYSBgPGxhYmVsPmAsIGFuIGA8aXJvbi1pbnB1dD5gIG9yXG5gPHRleHRhcmVhPmAgYW5kIG9wdGlvbmFsIGFkZC1vbiBlbGVtZW50cyBzdWNoIGFzIGFuIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyXG5jb3VudGVyLCB1c2VkIHRvIGltcGxlbWVudCBNYXRlcmlhbCBEZXNpZ24gdGV4dCBmaWVsZHMuXG5cbkZvciBleGFtcGxlOlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgPGlyb24taW5wdXQgc2xvdD1cImlucHV0XCI+XG4gICAgICAgIDxpbnB1dD5cbiAgICAgIDwvaXJvbi1pbnB1dD5cbiAgICAgIC8vIEluIFBvbHltZXIgMS4wLCB5b3Ugd291bGQgdXNlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgc2xvdD1cImlucHV0XCI+YCBpbnN0ZWFkIG9mIHRoZSBhYm92ZS5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuWW91IGNhbiBzdHlsZSB0aGUgbmVzdGVkIDxpbnB1dD4gaG93ZXZlciB5b3Ugd2FudDsgaWYgeW91IHdhbnQgaXQgdG8gbG9vayBsaWtlIGFcbk1hdGVyaWFsIERlc2lnbiBpbnB1dCwgeW91IGNhbiBzdHlsZSBpdCB3aXRoIHRoZSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGUgbWl4aW4uXG5cbkRvIG5vdCB3cmFwIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYXJvdW5kIGVsZW1lbnRzIHRoYXQgYWxyZWFkeSBpbmNsdWRlIGl0LCBzdWNoIGFzIGA8cGFwZXItaW5wdXQ+YC5cbkRvaW5nIHNvIG1heSBjYXVzZSBldmVudHMgdG8gYm91bmNlIGluZmluaXRlbHkgYmV0d2VlbiB0aGUgY29udGFpbmVyIGFuZCBpdHMgY29udGFpbmVkIGVsZW1lbnQuXG5cbiMjIyBMaXN0ZW5pbmcgZm9yIGlucHV0IGNoYW5nZXNcblxuQnkgZGVmYXVsdCwgaXQgbGlzdGVucyBmb3IgY2hhbmdlcyBvbiB0aGUgYGJpbmQtdmFsdWVgIGF0dHJpYnV0ZSBvbiBpdHMgY2hpbGRyZW4gbm9kZXMgYW5kIHBlcmZvcm1cbnRhc2tzIHN1Y2ggYXMgYXV0by12YWxpZGF0aW5nIGFuZCBsYWJlbCBzdHlsaW5nIHdoZW4gdGhlIGBiaW5kLXZhbHVlYCBjaGFuZ2VzLiBZb3UgY2FuIGNvbmZpZ3VyZVxudGhlIGF0dHJpYnV0ZSBpdCBsaXN0ZW5zIHRvIHdpdGggdGhlIGBhdHRyLWZvci12YWx1ZWAgYXR0cmlidXRlLlxuXG4jIyMgVXNpbmcgYSBjdXN0b20gaW5wdXQgZWxlbWVudFxuXG5Zb3UgY2FuIHVzZSBhIGN1c3RvbSBpbnB1dCBlbGVtZW50IGluIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCwgZm9yIGV4YW1wbGUgdG8gaW1wbGVtZW50IGFcbmNvbXBvdW5kIGlucHV0IGZpZWxkIGxpa2UgYSBzb2NpYWwgc2VjdXJpdHkgbnVtYmVyIGlucHV0LiBUaGUgY3VzdG9tIGlucHV0IGVsZW1lbnQgc2hvdWxkIGhhdmUgdGhlXG5gcGFwZXItaW5wdXQtaW5wdXRgIGNsYXNzLCBoYXZlIGEgYG5vdGlmeTp0cnVlYCB2YWx1ZSBwcm9wZXJ0eSBhbmQgb3B0aW9uYWxseSBpbXBsZW1lbnRzXG5gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgaWYgaXQgaXMgdmFsaWRhdGFibGUuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGF0dHItZm9yLXZhbHVlPVwic3NuLXZhbHVlXCI+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+U29jaWFsIHNlY3VyaXR5IG51bWJlcjwvbGFiZWw+XG4gICAgICA8c3NuLWlucHV0IHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwicGFwZXItaW5wdXQtaW5wdXRcIj48L3Nzbi1pbnB1dD5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuXG5JZiB5b3UncmUgdXNpbmcgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGltcGVyYXRpdmVseSwgaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlXG50aGF0IHlvdSBhdHRhY2ggaXRzIGNoaWxkcmVuICh0aGUgYGlyb24taW5wdXRgIGFuZCB0aGUgb3B0aW9uYWwgYGxhYmVsYCkgYmVmb3JlIHlvdVxuYXR0YWNoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGl0c2VsZiwgc28gdGhhdCBpdCBjYW4gYmUgc2V0IHVwIGNvcnJlY3RseS5cblxuIyMjIFZhbGlkYXRpb25cblxuSWYgdGhlIGBhdXRvLXZhbGlkYXRlYCBhdHRyaWJ1dGUgaXMgc2V0LCB0aGUgaW5wdXQgY29udGFpbmVyIHdpbGwgdmFsaWRhdGUgdGhlIGlucHV0IGFuZCB1cGRhdGVcbnRoZSBjb250YWluZXIgc3R5bGluZyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLlxuXG4jIyMgQWRkLW9uc1xuXG5BZGQtb25zIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYGFkZC1vbmAgYXR0cmlidXRlIGFuZFxuaW1wbGVtZW50cyB0aGUgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIGJlaGF2aW9yLiBUaGV5IGFyZSBub3RpZmllZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxub3IgdmFsaWRpdHkgY2hhbmdlcywgYW5kIG1heSBpbXBsZW1lbnQgZnVuY3Rpb25hbGl0eSBzdWNoIGFzIGVycm9yIG1lc3NhZ2VzIG9yIGNoYXJhY3RlciBjb3VudGVycy5cblRoZXkgYXBwZWFyIGF0IHRoZSBib3R0b20gb2YgdGhlIGlucHV0LlxuXG4jIyMgUHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG5UaGVzZSBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdpdGggdGhlIGBwcmVmaXhgXG5vciBgc3VmZml4YCBhdHRyaWJ1dGUsIGFuZCBhcmUgZGlzcGxheWVkIGlubGluZSB3aXRoIHRoZSBpbnB1dCwgYmVmb3JlIG9yIGFmdGVyLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxkaXYgc2xvdD1cInByZWZpeFwiPiQ8L2Rpdj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Ub3RhbDwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gIGluc3RlYWQgb2YgdGhlIGFib3ZlLlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGZvY3VzZWQgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3JgIHwgSW5wdXQgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGFpbmVyIHdoZW4gaXQncyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gZmxvYXRpbmcgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBpbnZhbGlkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBzcGlubmVyIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIGNsZWFyIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtcHJlZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHByZWZpeCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LXN1ZmZpeGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBzdWZmaXggfCBge31gXG5cblRoaXMgZWxlbWVudCBpcyBgZGlzcGxheTpibG9ja2AgYnkgZGVmYXVsdCwgYnV0IHlvdSBjYW4gc2V0IHRoZSBgaW5saW5lYCBhdHRyaWJ1dGUgdG8gbWFrZSBpdFxuYGRpc3BsYXk6aW5saW5lLWJsb2NrYC5cbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0LWNvbnRhaW5lclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlOiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiB0byBtYWtlIGEgc3RhY2tpbmcgY29udGV4dCAqL1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbmxpbmVdKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC4zMztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5mbG9hdGVkLWxhYmVsLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWhpZ2hsaWdodGVkIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUuaXMtaW52YWxpZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuNzUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG5cbiAgICAgICAgLyogU2luY2Ugd2Ugc2NhbGUgdG8gNzUvMTAwIG9mIHRoZSBzaXplLCB3ZSBhY3R1YWxseSBoYXZlIDEwMC83NSBvZiB0aGVcbiAgICAgICAgb3JpZ2luYWwgc3BhY2Ugbm93IGF2YWlsYWJsZSAqL1xuICAgICAgICB3aWR0aDogMTMzJTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc7XG4gICAgICB9XG5cbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICAvKiBUT0RPKG5vbXMpOiBGaWd1cmUgb3V0IHdoeSBsZWF2aW5nIHRoZSB3aWR0aCBhdCAxMzMlIGJlZm9yZSB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAqIGFjdHVhbGx5IG1ha2VzXG4gICAgICAgICAqIGl0IHdpZGVyIG9uIHRoZSByaWdodCBzaWRlLCBub3QgbGVmdCBzaWRlLCBhcyB5b3Ugd291bGQgZXhwZWN0IGluIFJUTCAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlkZGVuIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCk6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1pbnZhbGlkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJlZml4IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1ub25lO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1wcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIC5zdWZmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtc3VmZml4O1xuICAgICAgfVxuXG4gICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKHRleHRhcmVhKSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmbG9hdGVkLWxhYmVsLXBsYWNlaG9sZGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgaGlkZGVuPVwiW1tub0xhYmVsRmxvYXRdXVwiPiZuYnNwOzwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicHJlZml4XCI+PHNsb3QgbmFtZT1cInByZWZpeFwiPjwvc2xvdD48L3NwYW4+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZUlucHV0Q29udGVudENsYXNzKG5vTGFiZWxGbG9hdCxhbHdheXNGbG9hdExhYmVsLGZvY3VzZWQsaW52YWxpZCxfaW5wdXRIYXNDb250ZW50KV1dXCIgaWQ9XCJsYWJlbEFuZElucHV0Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD5cbiAgICAgICAgPHNsb3QgbmFtZT1cImlucHV0XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3VmZml4XCI+PHNsb3QgbmFtZT1cInN1ZmZpeFwiPjwvc2xvdD48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVVbmRlcmxpbmVDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1bmZvY3VzZWQtbGluZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvY3VzZWQtbGluZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlQWRkT25Db250ZW50Q2xhc3MoZm9jdXNlZCxpbnZhbGlkKV1dXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiYWRkLW9uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWNvbnRhaW5lcicsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBUaGUgbGFiZWwgZGlzYXBwZWFycyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBpc1xuICAgICAgICogbm90IG51bGwuXG4gICAgICAgKi9cbiAgICAgIG5vTGFiZWxGbG9hdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICAgICAqL1xuICAgICAgYWx3YXlzRmxvYXRMYWJlbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGF0dHJpYnV0ZSB0byBsaXN0ZW4gZm9yIHZhbHVlIGNoYW5nZXMgb24uXG4gICAgICAgKi9cbiAgICAgIGF0dHJGb3JWYWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnYmluZC12YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUgd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGlzIGludmFsaWQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbiAgICAgICAqIGNoYW5nZXMgaWYgYXV0by12YWxpZGF0aW5nLCBvciB3aGVuIHRoZSBgaXJvbi1pbnB1dC12YWxpZGF0ZWAgZXZlbnQgaXMgaGVhcmQgZnJvbSBhIGNoaWxkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJyxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGhhcyBmb2N1cy5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZDoge1xuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIF9hZGRvbnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgLy8gZG8gbm90IHNldCBhIGRlZmF1bHQgdmFsdWUgaGVyZSBpbnRlbnRpb25hbGx5IC0gaXQgd2lsbCBiZSBpbml0aWFsaXplZCBsYXppbHkgd2hlbiBhXG4gICAgICAgIC8vIGRpc3RyaWJ1dGVkIGNoaWxkIGlzIGF0dGFjaGVkLCB3aGljaCBtYXkgb2NjdXIgYmVmb3JlIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgZWxlbWVudFxuICAgICAgICAvLyBpbiBwb2x5ZmlsbC5cbiAgICAgIH0sXG5cbiAgICAgIF9pbnB1dEhhc0NvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfaW5wdXRTZWxlY3Rvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnaW5wdXQsaXJvbi1pbnB1dCx0ZXh0YXJlYSwucGFwZXItaW5wdXQtaW5wdXQnXG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbkZvY3VzOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JvdW5kT25CbHVyOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYm91bmRPbklucHV0OiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2JvdW5kVmFsdWVDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uVmFsdWVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgICAnaXJvbi1pbnB1dC12YWxpZGF0ZSc6ICdfb25Jcm9uSW5wdXRWYWxpZGF0ZSdcbiAgICB9LFxuXG4gICAgZ2V0IF92YWx1ZUNoYW5nZWRFdmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHJGb3JWYWx1ZSArICctY2hhbmdlZCc7XG4gICAgfSxcblxuICAgIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICAgIHJldHVybiBQb2x5bWVyLkNhc2VNYXAuZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgICB9LFxuXG4gICAgZ2V0IF9pbnB1dEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5kb20odGhpcykucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dFNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgZ2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gfHwgdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgICB0aGlzLl9hZGRvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMsIHRydWUpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYm91bmRPbkJsdXIsIHRydWUpO1xuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5hdHRyRm9yVmFsdWUpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fdmFsdWVDaGFuZ2VkRXZlbnQsIHRoaXMuX2JvdW5kVmFsdWVDaGFuZ2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0KTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICYmIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25BZGRvbkF0dGFjaGVkOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9hZGRvbnMpIHtcbiAgICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKHRoaXMuX2FkZG9ucy5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2FkZG9ucy5wdXNoKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9vbkZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gICAgfSxcblxuICAgIF9vbkJsdXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBfb25JbnB1dDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfSxcblxuICAgIF9vblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBpbnB1dCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgLy8gUHJvYmxlbTogaWYgdGhlIGlucHV0IGlzIHJlcXVpcmVkIGJ1dCBoYXMgbm8gdGV4dCBlbnRlcmVkLCB3ZSBzaG91bGRcbiAgICAgIC8vIG9ubHkgdmFsaWRhdGUgaXQgb24gYmx1ciAoc28gdGhhdCBhbiBlbXB0eSBmb3JtIGRvZXNuJ3QgY29tZSB1cCByZWRcbiAgICAgIC8vIGltbWVkaWF0ZWx5OyBob3dldmVyLCBpbiB0aGlzIGhhbmRsZXIsIHdlIGRvbid0IGtub3cgd2hldGhlciB0aGlzIGlzXG4gICAgICAvLyB0aGUgYm9vdGluZyB1cCB2YWx1ZSBvciBhIHZhbHVlIGluIHRoZSBmdXR1cmUuIEkgYW0gYXNzdW1pbmcgdGhhdCB0aGVcbiAgICAgIC8vIGNhc2UgIHdlIGNhcmUgYWJvdXQgbWFuaWZlc3RzIGl0c2VsZiB3aGVuIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gICAgICAvLyBJZiB0aGlzIGNhdXNlcyBmdXR1cmUgcHJvYmxlbXMsIHdlIG5lZWQgdG8gZG8gc29tZXRoaW5nIGxpa2UgdHJhY2sgd2hldGhlclxuICAgICAgLy8gdGhlIGlyb24taW5wdXQtcmVhZHkgZXZlbnQgaGFzIGZpcmVkLCBhbmQgdGhpcyBoYW5kbGVyIGNhbWUgYmVmb3JlIHRoYXQuXG5cbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuXG4gICAgICAvLyB0eXBlPVwibnVtYmVyXCIgaGFjayBuZWVkZWQgYmVjYXVzZSB0aGlzLnZhbHVlIGlzIGVtcHR5IHVudGlsIGl0J3MgdmFsaWRcbiAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCB8fCAoaW5wdXRFbGVtZW50LnR5cGUgPT09ICdudW1iZXInICYmICFpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSkge1xuICAgICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5wdXRIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlQWRkb25zKHtcbiAgICAgICAgaW5wdXRFbGVtZW50OiBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW52YWxpZDogdGhpcy5pbnZhbGlkXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSAmJiBpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHZhbGlkO1xuXG4gICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC52YWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWQgPSBpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbCB0aGlzIGxhc3QgdG8gbm90aWZ5IHRoZSBhZGQtb25zLlxuICAgICAgdGhpcy5faGFuZGxlVmFsdWUoaW5wdXRFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgX29uSXJvbklucHV0VmFsaWRhdGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9pbnB1dEVsZW1lbnQuaW52YWxpZDtcbiAgICB9LFxuXG4gICAgX2ludmFsaWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9hZGRvbnMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBZGRvbnMoe2ludmFsaWQ6IHRoaXMuaW52YWxpZH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgdG8gdXBkYXRlIHRoZSBzdGF0ZSBvZiBhZGQtb25zLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBBZGQtb24gc3RhdGUuXG4gICAgICovXG4gICAgdXBkYXRlQWRkb25zOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgZm9yICh2YXIgYWRkb24sIGluZGV4ID0gMDsgYWRkb24gPSB0aGlzLl9hZGRvbnNbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGFkZG9uLnVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jb21wdXRlSW5wdXRDb250ZW50Q2xhc3M6IGZ1bmN0aW9uKG5vTGFiZWxGbG9hdCwgYWx3YXlzRmxvYXRMYWJlbCwgZm9jdXNlZCwgaW52YWxpZCwgX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgdmFyIGNscyA9ICdpbnB1dC1jb250ZW50JztcbiAgICAgIGlmICghbm9MYWJlbEZsb2F0KSB7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblxuICAgICAgICBpZiAoYWx3YXlzRmxvYXRMYWJlbCB8fCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtZmxvYXRpbmcnO1xuICAgICAgICAgIC8vIElmIHRoZSBsYWJlbCBpcyBmbG9hdGluZywgaWdub3JlIGFueSBvZmZzZXRzIHRoYXQgbWF5IGhhdmUgYmVlblxuICAgICAgICAgIC8vIGFwcGxpZWQgZnJvbSBhIHByZWZpeCBlbGVtZW50LlxuICAgICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG5cbiAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgICAgICBjbHMgKz0gXCIgbGFiZWwtaXMtaGlnaGxpZ2h0ZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2hlbiB0aGUgbGFiZWwgaXMgbm90IGZsb2F0aW5nLCBpdCBzaG91bGQgb3ZlcmxhcCB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1oaWRkZW4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICAgIGNscyArPSAnIGZvY3VzZWQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNscztcbiAgICB9LFxuXG4gICAgX2NvbXB1dGVVbmRlcmxpbmVDbGFzczogZnVuY3Rpb24oZm9jdXNlZCwgaW52YWxpZCkge1xuICAgICAgdmFyIGNscyA9ICd1bmRlcmxpbmUnO1xuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH0sXG5cbiAgICBfY29tcHV0ZUFkZE9uQ29udGVudENsYXNzOiBmdW5jdGlvbihmb2N1c2VkLCBpbnZhbGlkKSB7XG4gICAgICB2YXIgY2xzID0gJ2FkZC1vbi1jb250ZW50JztcbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWhpZ2hsaWdodGVkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNscztcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxwYXBlci1pbnB1dC1lcnJvcj5gIGlzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIHVzZSB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIFRoZSBlcnJvciBpc1xuZGlzcGxheWVkIHdoZW4gdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXMgYGludmFsaWRgLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiWzAtOV0qXCI+XG4gICAgICA8cGFwZXItaW5wdXQtZXJyb3Igc2xvdD1cImFkZC1vblwiPk9ubHkgbnVtYmVycyBhcmUgYWxsb3dlZCE8L3BhcGVyLWlucHV0LWVycm9yPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgVGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIGVycm9yIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1lcnJvcmAgICAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlcnJvciAgICAgICAgfCBge31gXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pbnB1dC1lcnJvclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1lcnJvcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfTtcbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0LWVycm9yJyxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvclxuICAgIF0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGVycm9yIGlzIHNob3dpbmcuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG92ZXJyaWRlcyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGluIFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdGhpcy5fc2V0SW52YWxpZChzdGF0ZS5pbnZhbGlkKTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWVycm9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1pbWFnZS9pcm9uLWltYWdlLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5odG1sXCI+XG5cbjwhLS1cbk1hdGVyaWFsIGRlc2lnbjogW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLWNhcmRgIGlzIGEgY29udGFpbmVyIHdpdGggYSBkcm9wIHNoYWRvdy5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+U29tZSBjb250ZW50PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+U29tZSBhY3Rpb248L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItY2FyZD5cblxuRXhhbXBsZSAtIHRvcCBjYXJkIGltYWdlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIiBpbWFnZT1cIi9wYXRoL3RvL2ltYWdlLnBuZ1wiIGFsdD1cImltYWdlXCI+XG4gICAgICAuLi5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkJ5IGRlZmF1bHQsIHRoZSBgYXJpYS1sYWJlbGAgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlIG9mIHRoZSBgaGVhZGluZ2AgYXR0cmlidXRlLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBjYXJkIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBoZWFkZXIgdGV4dCB8IGAjMDAwYFxuYC0tcGFwZXItY2FyZC1oZWFkZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGV4dCBvdmVybGFwcGluZyB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWNvbnRlbnRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBjb250ZW50IHNlY3Rpb258IGB7fWBcbmAtLXBhcGVyLWNhcmQtYWN0aW9uc2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGFjdGlvbiBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIHwgYHt9YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWNhcmRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItY2FyZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkO1xuICAgICAgfVxuXG4gICAgICAvKiBJRSAxMCBzdXBwb3J0IGZvciBIVE1MNSBoaWRkZW4gYXR0ciAqL1xuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIGlyb24taW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taXJvbi1pbWFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvciwgIzAwMCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dC5vdmVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1hY3Rpb25zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjJcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIzXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjVcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxpcm9uLWltYWdlXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWltYWdlXV1cIlxuICAgICAgICAgIGFyaWEtaGlkZGVuJD1cIltbX2lzSGlkZGVuKGltYWdlKV1dXCJcbiAgICAgICAgICBzcmM9XCJbW2ltYWdlXV1cIlxuICAgICAgICAgIGFsdD1cIltbYWx0XV1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlckltYWdlXV1cIlxuICAgICAgICAgIHByZWxvYWQ9XCJbW3ByZWxvYWRJbWFnZV1dXCJcbiAgICAgICAgICBmYWRlPVwiW1tmYWRlSW1hZ2VdXVwiPjwvaXJvbi1pbWFnZT5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIWhlYWRpbmddXVwiIGNsYXNzJD1cInRpdGxlLXRleHQgW1tfY29tcHV0ZUhlYWRpbmdDbGFzcyhpbWFnZSldXVwiPltbaGVhZGluZ11dPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItY2FyZCcsXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRpbmc6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgIG9ic2VydmVyOiAnX2hlYWRpbmdDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXJsIG9mIHRoZSB0aXRsZSBpbWFnZSBvZiB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCBhbHRlcm5hdGl2ZSBvZiB0aGUgY2FyZCdzIHRpdGxlIGltYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgYWx0OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBpbWFnZSB1cmwgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGVcbiAgICAgICAgICogYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgaW1hZ2UgaXMgZnVsbHkgcmVuZGVyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBwcmVsb2FkSW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVsb2FkSW1hZ2VgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVJbWFnZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZVxuICAgICAgICAgKiBpbWFnZSB0byBmYWRlIGludG8gcGxhY2UuXG4gICAgICAgICAqL1xuICAgICAgICBmYWRlSW1hZ2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZSBoYXNcbiAgICAgICAgICogbG9hZGVkLiBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudCByZW5kZXJpbmcuXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlckltYWdlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoZSBjYXJkLCBmcm9tIDAtNS5cbiAgICAgICAgICovXG4gICAgICAgIGVsZXZhdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBjYXJkIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgICAgICogYHpgIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0ZWRTaGFkb3c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkLW9ubHkgcHJvcGVydHkgdXNlZCB0byBwYXNzIGRvd24gdGhlIGBhbmltYXRlZFNoYWRvd2AgdmFsdWUgdG9cbiAgICAgICAgICogdGhlIHVuZGVybHlpbmcgcGFwZXItbWF0ZXJpYWwgc3R5bGUgKHNpbmNlIHRoZXkgaGF2ZSBkaWZmZXJlbnQgbmFtZXMpLlxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQW5pbWF0ZWQoYW5pbWF0ZWRTaGFkb3cpJ1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZvcm1hdCBmdW5jdGlvbiBmb3IgYXJpYS1oaWRkZW4uIFVzZSB0aGUgISBvcGVyYXRvciByZXN1bHRzIGluIHRoZVxuICAgICAgICogZW1wdHkgc3RyaW5nIHdoZW4gZ2l2ZW4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgX2lzSGlkZGVuOiBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICByZXR1cm4gaW1hZ2UgPyAnZmFsc2UnIDogJ3RydWUnO1xuICAgICAgfSxcblxuICAgICAgX2hlYWRpbmdDaGFuZ2VkOiBmdW5jdGlvbihoZWFkaW5nKSB7XG4gICAgICAgIHZhciBjdXJyZW50SGVhZGluZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdoZWFkaW5nJyksXG4gICAgICAgICAgICBjdXJyZW50TGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudExhYmVsICE9PSAnc3RyaW5nJyB8fCBjdXJyZW50TGFiZWwgPT09IGN1cnJlbnRIZWFkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBoZWFkaW5nKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVIZWFkaW5nQ2xhc3M6IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZSA/ICcgb3Zlci1pbWFnZScgOiAnJztcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlQW5pbWF0ZWQ6IGZ1bmN0aW9uKGFuaW1hdGVkU2hhZG93KSB7XG4gICAgICAgIHJldHVybiBhbmltYXRlZFNoYWRvdztcbiAgICAgIH1cbiAgICB9KTtcbiAgPC9zY3JpcHQ+XG48L2RvbS1tb2R1bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWNhcmQvcGFwZXItY2FyZC5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cblxuPCEtLVxuYGlyb24taW1hZ2VgIGlzIGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgYW4gaW1hZ2UgdGhhdCBwcm92aWRlcyB1c2VmdWwgc2l6aW5nIGFuZFxucHJlbG9hZGluZyBvcHRpb25zIG5vdCBmb3VuZCBvbiB0aGUgc3RhbmRhcmQgYDxpbWc+YCB0YWcuXG5cblRoZSBgc2l6aW5nYCBvcHRpb24gYWxsb3dzIHRoZSBpbWFnZSB0byBiZSBlaXRoZXIgY3JvcHBlZCAoYGNvdmVyYCkgb3JcbmxldHRlcmJveGVkIChgY29udGFpbmApIHRvIGZpbGwgYSBmaXhlZCB1c2VyLXNpemUgcGxhY2VkIG9uIHRoZSBlbGVtZW50LlxuXG5UaGUgYHByZWxvYWRgIG9wdGlvbiBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHJlbmRlcmluZyB0aGUgaW1hZ2UgdW50aWwgdGhlXG5pbWFnZSBpcyBmdWxseSBsb2FkZWQuICBJbiB0aGUgaW50ZXJpbSwgZWl0aGVyIHRoZSBlbGVtZW50J3MgQ1NTIGBiYWNrZ3JvdW5kLWNvbG9yYFxuY2FuIGJlIGJlIHVzZWQgYXMgdGhlIHBsYWNlaG9sZGVyLCBvciB0aGUgYHBsYWNlaG9sZGVyYCBwcm9wZXJ0eSBjYW4gYmVcbnNldCB0byBhIFVSTCAocHJlZmVyYWJseSBhIGRhdGEtVVJJLCBmb3IgaW5zdGFudCByZW5kZXJpbmcpIGZvciBhblxucGxhY2Vob2xkZXIgaW1hZ2UuXG5cblRoZSBgZmFkZWAgb3B0aW9uIChvbmx5IHZhbGlkIHdoZW4gYHByZWxvYWRgIGlzIHNldCkgd2lsbCBjYXVzZSB0aGUgcGxhY2Vob2xkZXJcbmltYWdlL2NvbG9yIHRvIGJlIGZhZGVkIG91dCBvbmNlIHRoZSBpbWFnZSBpcyByZW5kZXJlZC5cblxuRXhhbXBsZXM6XG5cbiAgQmFzaWNhbGx5IGlkZW50aWNhbCB0byBgPGltZyBzcmM9XCIuLi5cIj5gIHRhZzpcblxuICAgIDxpcm9uLWltYWdlIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS80MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgbGV0dGVyYm94IHRoZSBpbWFnZSB0byBmaXQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgc2l6aW5nPVwiY29udGFpblwiXG4gICAgICBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGNyb3AgdGhlIGltYWdlIHRvIGZpdDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBzaXppbmc9XCJjb3ZlclwiXG4gICAgICBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIHNob3cgbGlnaHQtZ3JheSBiYWNrZ3JvdW5kIHVudGlsIHRoZSBpbWFnZSBsb2FkczpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1wiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBzaG93IGEgYmFzZS02NCBlbmNvZGVkIHBsYWNlaG9sZGVyIGltYWdlIHVudGlsIHRoZSBpbWFnZSBsb2FkczpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBwbGFjZWhvbGRlcj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCwuLi5cIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgZmFkZSB0aGUgbGlnaHQtZ3JheSBiYWNrZ3JvdW5kIG91dCBvbmNlIHRoZSBpbWFnZSBpcyBsb2FkZWQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIGZhZGUgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taW1hZ2UtcGxhY2Vob2xkZXJgIHwgTWl4aW4gYXBwbGllZCB0byAjcGxhY2Vob2xkZXIgfCBge31gXG5gLS1pcm9uLWltYWdlLXdpZHRoYCB8IFNldHMgdGhlIHdpZHRoIG9mIHRoZSB3cmFwcGVkIGltYWdlIHwgYGF1dG9gXG5gLS1pcm9uLWltYWdlLWhlaWdodGAgfCBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZWQgaW1hZ2UgfCBgYXV0b2BcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taW1hZ2VcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1pbWFnZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI2Jhc2VVUklBbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjc2l6ZWRJbWdEaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IHZhcigtLWlyb24taW1hZ2Utd2lkdGgsIGF1dG8pO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlyb24taW1hZ2UtaGVpZ2h0LCBhdXRvKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NpemluZ10pICNzaXplZEltZ0RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2l6aW5nXSkgI2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNwbGFjZWhvbGRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICBAYXBwbHkgLS1pcm9uLWltYWdlLXBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICAjcGxhY2Vob2xkZXIuZmFkZWQtb3V0IHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGEgaWQ9XCJiYXNlVVJJQW5jaG9yXCIgaHJlZj1cIiNcIj48L2E+XG4gICAgPGRpdiBpZD1cInNpemVkSW1nRGl2XCJcbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdEaXZIaWRkZW4oc2l6aW5nKV1dXCJcbiAgICAgIGFyaWEtaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdEaXZBUklBSGlkZGVuKGFsdCldXVwiXG4gICAgICBhcmlhLWxhYmVsJD1cIltbX2NvbXB1dGVJbWdEaXZBUklBTGFiZWwoYWx0LCBzcmMpXV1cIj48L2Rpdj5cbiAgICA8aW1nIGlkPVwiaW1nXCJcbiAgICAgIGFsdCQ9XCJbW2FsdF1dXCJcbiAgICAgIGhpZGRlbiQ9XCJbW19jb21wdXRlSW1nSGlkZGVuKHNpemluZyldXVwiXG4gICAgICBjcm9zc29yaWdpbiQ9XCJbW2Nyb3Nzb3JpZ2luXV1cIlxuICAgICAgb24tbG9hZD1cIl9pbWdPbkxvYWRcIlxuICAgICAgb24tZXJyb3I9XCJfaW1nT25FcnJvclwiPlxuICAgIDxkaXYgaWQ9XCJwbGFjZWhvbGRlclwiXG4gICAgICBoaWRkZW4kPVwiW1tfY29tcHV0ZVBsYWNlaG9sZGVySGlkZGVuKHByZWxvYWQsIGZhZGUsIGxvYWRpbmcsIGxvYWRlZCldXVwiXG4gICAgICBjbGFzcyQ9XCJbW19jb21wdXRlUGxhY2Vob2xkZXJDbGFzc05hbWUocHJlbG9hZCwgZmFkZSwgbG9hZGluZywgbG9hZGVkKV1dXCI+PC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAnaXJvbi1pbWFnZScsXG5cbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBVUkwgb2YgYW4gaW1hZ2UuXG4gICAgICAgICAqL1xuICAgICAgICBzcmM6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2hvcnQgdGV4dCBhbHRlcm5hdGl2ZSBmb3IgdGhlIGltYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgYWx0OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENPUlMgZW5hYmxlZCBpbWFnZXMgc3VwcG9ydDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9DT1JTX2VuYWJsZWRfaW1hZ2VcbiAgICAgICAgICovXG4gICAgICAgIGNyb3Nzb3JpZ2luOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGltYWdlIGlzIHByZXZlbnRlZCBmcm9tIGxvYWRpbmcgYW5kIGFueSBwbGFjZWhvbGRlciBpc1xuICAgICAgICAgKiBzaG93bi4gIFRoaXMgbWF5IGJlIHVzZWZ1bCB3aGVuIGEgYmluZGluZyB0byB0aGUgc3JjIHByb3BlcnR5IGlzIGtub3duIHRvXG4gICAgICAgICAqIGJlIGludmFsaWQsIHRvIHByZXZlbnQgNDA0IHJlcXVlc3RzLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmVudExvYWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIGltYWdlLiAgVmFsaWQgdmFsdWVzIGFyZSBgY29udGFpbmAgKGZ1bGxcbiAgICAgICAgICogYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSBpcyBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50IGFuZFxuICAgICAgICAgKiBsZXR0ZXJib3hlZCkgb3IgYGNvdmVyYCAoaW1hZ2UgaXMgY3JvcHBlZCBpbiBvcmRlciB0byBmdWxseSBjb3ZlciB0aGVcbiAgICAgICAgICogYm91bmRzIG9mIHRoZSBlbGVtZW50KSwgb3IgYG51bGxgIChkZWZhdWx0OiBpbWFnZSB0YWtlcyBuYXR1cmFsIHNpemUpLlxuICAgICAgICAgKi9cbiAgICAgICAgc2l6aW5nOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGEgc2l6aW5nIG9wdGlvbiBpcyB1c2VkIChgY292ZXJgIG9yIGBjb250YWluYCksIHRoaXMgZGV0ZXJtaW5lc1xuICAgICAgICAgKiBob3cgdGhlIGltYWdlIGlzIGFsaWduZWQgd2l0aGluIHRoZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgICAgICovXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnY2VudGVyJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgYHNyY2AgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGUgYHBsYWNlaG9sZGVyYFxuICAgICAgICAgKiBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgbmV3IGltYWdlIGhhcyBsb2FkZWQuXG4gICAgICAgICAqL1xuICAgICAgICBwcmVsb2FkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpbWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBiYWNrZ3JvdW5kL3BsYWNlaG9sZGVyIHVudGlsIHRoZSBzcmMgaW1hZ2UgaGFzXG4gICAgICAgICAqIGxvYWRlZC4gIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50IHJlbmRlcmluZy5cbiAgICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIG9ic2VydmVyOiAnX3BsYWNlaG9sZGVyQ2hhbmdlZCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgcHJlbG9hZGAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZSBpbWFnZSB0b1xuICAgICAgICAgKiBmYWRlIGludG8gcGxhY2UuXG4gICAgICAgICAqL1xuICAgICAgICBmYWRlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgaXMgdHJ1ZSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAgICAgICAqL1xuICAgICAgICBsb2FkZWQ6IHtcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgdHJhY2tzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBpbWFnZSB3aGVuIHRoZSBgcHJlbG9hZGBcbiAgICAgICAgICogb3B0aW9uIGlzIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IGluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHNldCBgc3JjYCBmYWlsZWQgdG8gbG9hZC5cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgd2lkdGggb2YgaW1hZ2UgKGUuZy4gdmlhIGJpbmRpbmcpOyBzaXplIG1heSBhbHNvIGJlXG4gICAgICAgICAqIHNldCB2aWEgQ1NTLlxuICAgICAgICAgKi9cbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICBvYnNlcnZlcjogJ193aWR0aENoYW5nZWQnLFxuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIGhlaWdodCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc28gYmVcbiAgICAgICAgICogc2V0IHZpYSBDU1MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhdHRyaWJ1dGUgaGVpZ2h0XG4gICAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICBvYnNlcnZlcjogJ19oZWlnaHRDaGFuZ2VkJyxcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAnX3RyYW5zZm9ybUNoYW5nZWQoc2l6aW5nLCBwb3NpdGlvbiknLFxuICAgICAgICAnX2xvYWRTdGF0ZU9ic2VydmVyKHNyYywgcHJldmVudExvYWQpJ1xuICAgICAgXSxcblxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gJyc7XG4gICAgICB9LFxuXG4gICAgICBfaW1nT25Mb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuJC5pbWcuc3JjICE9PSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICAgIH0sXG5cbiAgICAgIF9pbWdPbkVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuJC5pbWcuc3JjICE9PSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJC5pbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXG4gICAgICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXRFcnJvcih0cnVlKTtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlUGxhY2Vob2xkZXJIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMucHJlbG9hZCB8fCAoIXRoaXMuZmFkZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMubG9hZGVkKTtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlUGxhY2Vob2xkZXJDbGFzc05hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucHJlbG9hZCAmJiB0aGlzLmZhZGUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCkgPyAnZmFkZWQtb3V0JyA6ICcnO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdEaXZIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc2l6aW5nO1xuICAgICAgfSxcblxuICAgICAgX2NvbXB1dGVJbWdEaXZBUklBSGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ID09PSAnJyA/ICd0cnVlJyA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nRGl2QVJJQUxhYmVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9seW1lci5SZXNvbHZlVXJsLnJlc29sdmVVcmwgd2lsbCByZXNvbHZlICcnIHJlbGF0aXZlIHRvIGEgVVJMIHggdG9cbiAgICAgICAgLy8gdGhhdCBVUkwgeCwgYnV0ICcnIGlzIHRoZSBkZWZhdWx0IGZvciBzcmMuXG4gICAgICAgIGlmICh0aGlzLnNyYyA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1RFOiBVc2Ugb2YgYFVSTGAgd2FzIHJlbW92ZWQgaGVyZSBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0XG4gICAgICAgIC8vIGNvbnN0cnVjdGluZyBpdC4gSWYgdGhpcyBlbmRzIHVwIGJlaW5nIHByb2JsZW1hdGljLCB3ZSBzaG91bGRcbiAgICAgICAgLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIGFuZCBhZGRpbmcgdGhlIFVSTCBwb2x5ZmlsbCBhcyBhIGRldiBkZXBlbmRlbmN5LlxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKTtcbiAgICAgICAgLy8gUmVtb3ZlIHF1ZXJ5IHBhcnRzLCBnZXQgZmlsZSBuYW1lLlxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQucmVwbGFjZSgvWz98I10uKi9nLCAnJykuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlSW1nSGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zaXppbmc7XG4gICAgICB9LFxuXG4gICAgICBfd2lkdGhDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGlzTmFOKHRoaXMud2lkdGgpID8gdGhpcy53aWR0aCA6IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgfSxcblxuICAgICAgX2hlaWdodENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGlzTmFOKHRoaXMuaGVpZ2h0KSA/IHRoaXMuaGVpZ2h0IDogdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfSxcblxuICAgICAgX2xvYWRTdGF0ZU9ic2VydmVyOiBmdW5jdGlvbihzcmMsIHByZXZlbnRMb2FkKSB7XG4gICAgICAgIHZhciBuZXdSZXNvbHZlZFNyYyA9IHRoaXMuX3Jlc29sdmVTcmMoc3JjKTtcbiAgICAgICAgaWYgKG5ld1Jlc29sdmVkU3JjID09PSB0aGlzLl9yZXNvbHZlZFNyYykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gJyc7XG4gICAgICAgIHRoaXMuJC5pbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXG4gICAgICAgIGlmIChzcmMgPT09ICcnIHx8IHByZXZlbnRMb2FkKSB7XG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSBuZXdSZXNvbHZlZFNyYztcbiAgICAgICAgICB0aGlzLiQuaW1nLnNyYyA9IHRoaXMuX3Jlc29sdmVkU3JjO1xuICAgICAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIHRoaXMuX3Jlc29sdmVkU3JjICsgJ1wiKSc7XG5cbiAgICAgICAgICB0aGlzLl9zZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfcGxhY2Vob2xkZXJDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kLnBsYWNlaG9sZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA/ICd1cmwoXCInICsgdGhpcy5wbGFjZWhvbGRlciArICdcIiknIDogJyc7XG4gICAgICB9LFxuXG4gICAgICBfdHJhbnNmb3JtQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzaXplZEltZ0RpdlN0eWxlID0gdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlO1xuICAgICAgICB2YXIgcGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMuJC5wbGFjZWhvbGRlci5zdHlsZTtcblxuICAgICAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgICAgdGhpcy5zaXppbmc7XG5cbiAgICAgICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgICAgdGhpcy5zaXppbmcgPyB0aGlzLnBvc2l0aW9uIDogJyc7XG5cbiAgICAgICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgICB0aGlzLnNpemluZyA/ICduby1yZXBlYXQnIDogJyc7XG4gICAgICB9LFxuXG4gICAgICBfcmVzb2x2ZVNyYzogZnVuY3Rpb24odGVzdFNyYykge1xuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBQb2x5bWVyLlJlc29sdmVVcmwucmVzb2x2ZVVybCh0ZXN0U3JjLCB0aGlzLiQuYmFzZVVSSUFuY2hvci5ocmVmKTtcbiAgICAgICAgLy8gTk9URTogVXNlIG9mIGBVUkxgIHdhcyByZW1vdmVkIGhlcmUgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgICAvLyBjb25zdHJ1Y3RpbmcgaXQuIElmIHRoaXMgZW5kcyB1cCBiZWluZyBwcm9ibGVtYXRpYywgd2Ugc2hvdWxkXG4gICAgICAgIC8vIGNvbnNpZGVyIHJldmVydGluZyBhbmQgYWRkaW5nIHRoZSBVUkwgcG9seWZpbGwgYXMgYSBkZXYgZGVwZW5kZW5jeS5cbiAgICAgICAgaWYgKHJlc29sdmVkWzBdID09PSAnLycpIHtcbiAgICAgICAgICAvLyBJbiBJRSBsb2NhdGlvbi5vcmlnaW4gbWlnaHQgbm90IHdvcmtcbiAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3NjM4MDIvbG9jYXRpb24tb3JpZ2luLWlzLXVuZGVmaW5lZC1pbi1pZS0xMS1vbi13aW5kb3dzLTEwLWJ1dC13b3Jrcy1vbi13aW5kb3dzLTdcbiAgICAgICAgICByZXNvbHZlZCA9IChsb2NhdGlvbi5vcmlnaW4gfHwgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCkgKyByZXNvbHZlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIDwvc2NyaXB0PlxuPC9kb20tbW9kdWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pcm9uLWltYWdlL2lyb24taW1hZ2UuaHRtbCIsIlxucmVxdWlyZSgnLi4vLi4vcG9seW1lci9wb2x5bWVyLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vc2hhZG93Lmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUucmVnaXN0ZXIoXCI8ZG9tLW1vZHVsZSBpZD1wYXBlci1tYXRlcmlhbC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPjpob3N0LGh0bWx7LS1wYXBlci1tYXRlcmlhbDp7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX07LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yOntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDt9Oy0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM6e0BhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO307LS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDp7QGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7fTstLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01OntAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7fTt9LnBhcGVyLW1hdGVyaWFsLDpob3N0KC5wYXBlci1tYXRlcmlhbCl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjFcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIxXFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCIyXFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiMlxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjt9LnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiM1xcXCJdLDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjNcXFwiXSl7QGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7fS5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XFxcIjRcXFwiXSw6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI0XFxcIl0pe0BhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O30ucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVxcXCI1XFxcIl0sOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cXFwiNVxcXCJdKXtAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTt9PC9zdHlsZT4gPC90ZW1wbGF0ZT4gPC9kb20tbW9kdWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlcy5odG1sIiwiPCEtLVxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbi0tPlxuXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IuaHRtbFwiPlxuXG48IS0tXG5cbmBpcm9uLWxpc3RgIGRpc3BsYXlzIGEgdmlydHVhbCwgJ2luZmluaXRlJyBsaXN0LiBUaGUgdGVtcGxhdGUgaW5zaWRlXG50aGUgaXJvbi1saXN0IGVsZW1lbnQgcmVwcmVzZW50cyB0aGUgRE9NIHRvIGNyZWF0ZSBmb3IgZWFjaCBsaXN0IGl0ZW0uXG5UaGUgYGl0ZW1zYCBwcm9wZXJ0eSBzcGVjaWZpZXMgYW4gYXJyYXkgb2YgbGlzdCBpdGVtIGRhdGEuXG5cbkZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBub3QgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdCBpcyByZW5kZXJlZCBhdCBvbmNlO1xuaW5zdGVhZCBhIHNtYWxsIHN1YnNldCBvZiBhY3R1YWwgdGVtcGxhdGUgZWxlbWVudHMgKihlbm91Z2ggdG8gZmlsbCB0aGUgdmlld3BvcnQpKlxuYXJlIHJlbmRlcmVkIGFuZCByZXVzZWQgYXMgdGhlIHVzZXIgc2Nyb2xscy4gQXMgc3VjaCwgaXQgaXMgaW1wb3J0YW50IHRoYXQgYWxsXG5zdGF0ZSBvZiB0aGUgbGlzdCB0ZW1wbGF0ZSBpcyBib3VuZCB0byB0aGUgbW9kZWwgZHJpdmluZyBpdCwgc2luY2UgdGhlIHZpZXcgbWF5XG5iZSByZXVzZWQgd2l0aCBhIG5ldyBtb2RlbCBhdCBhbnkgdGltZS4gUGFydGljdWxhcmx5LCBhbnkgc3RhdGUgdGhhdCBtYXkgY2hhbmdlXG5hcyB0aGUgcmVzdWx0IG9mIGEgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBsaXN0IGl0ZW0gbXVzdCBiZSBib3VuZCB0byB0aGUgbW9kZWxcbnRvIGF2b2lkIHZpZXcgc3RhdGUgaW5jb25zaXN0ZW5jeS5cblxuIyMjIFNpemluZyBpcm9uLWxpc3RcblxuYGlyb24tbGlzdGAgbXVzdCBlaXRoZXIgYmUgZXhwbGljaXRseSBzaXplZCwgb3IgZGVsZWdhdGUgc2Nyb2xsaW5nIHRvIGFuXG5leHBsaWNpdGx5IHNpemVkIHBhcmVudC4gQnkgXCJleHBsaWNpdGx5IHNpemVkXCIsIHdlIG1lYW4gaXQgZWl0aGVyIGhhcyBhbiBleHBsaWNpdFxuQ1NTIGBoZWlnaHRgIHByb3BlcnR5IHNldCB2aWEgYSBjbGFzcyBvciBpbmxpbmUgc3R5bGUsIG9yIGVsc2UgaXMgc2l6ZWQgYnkgb3RoZXJcbmxheW91dCBtZWFucyAoZS5nLiB0aGUgYGZsZXhgIG9yIGBmaXRgIGNsYXNzZXMpLlxuXG4jIyMjIEZsZXhib3ggLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20va29rYWtpL2VkaXQ/aHRtbCxvdXRwdXQpXG5cbmBgYGh0bWxcbjx0ZW1wbGF0ZSBpcz1cIngtbGlzdFwiPlxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBpdGVtcz1cIltbaXRlbXNdXVwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L3RlbXBsYXRlPlxuYGBgXG4jIyMjIEV4cGxpY2l0IHNpemUgLSBbanNiaW5dKGh0dHA6Ly9qc2Jpbi5jb20vcGliZWZvL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMHZoOyAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC4gKi9cbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBNYWluIGRvY3VtZW50IHNjcm9sbGluZyAtIFtqc2Jpbl0oaHR0cDovL2pzYmluLmNvbS9jb2p1bGkvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjxoZWFkPlxuICA8c3R5bGU+XG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgYXBwLXRvb2xiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICAvKiBhZGQgcGFkZGluZyBzaW5jZSB0aGUgYXBwLXRvb2xiYXIgaXMgZml4ZWQgYXQgdGhlIHRvcCAqL1xuICAgICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3Qgc2Nyb2xsLXRhcmdldD1cImRvY3VtZW50XCI+XG4gICAgPHRlbXBsYXRlPlxuICAgICAgPGRpdj5cbiAgICAgICAgLi4uXG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2lyb24tbGlzdD5cbjwvYm9keT5cbmBgYFxuXG5gaXJvbi1saXN0YCBtdXN0IGJlIGdpdmVuIGEgYDx0ZW1wbGF0ZT5gIHdoaWNoIGNvbnRhaW5zIGV4YWN0bHkgb25lIGVsZW1lbnQuIEluIHRoZSBleGFtcGxlc1xuYWJvdmUgd2UgdXNlZCBhIGA8ZGl2PmAsIGJ1dCB5b3UgY2FuIHByb3ZpZGUgYW55IGVsZW1lbnQgKGluY2x1ZGluZyBjdXN0b20gZWxlbWVudHMpLlxuXG4jIyMgVGVtcGxhdGUgbW9kZWxcblxuTGlzdCBpdGVtIHRlbXBsYXRlcyBzaG91bGQgYmluZCB0byB0ZW1wbGF0ZSBtb2RlbHMgb2YgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbmBgYGpzXG57XG4gIGluZGV4OiAwLCAgICAgICAgLy8gaW5kZXggaW4gdGhlIGl0ZW0gYXJyYXlcbiAgc2VsZWN0ZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgdGFiSW5kZXg6IC0xLCAgICAvLyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCB0YWJJbmRleCBmb3IgZm9jdXMgbWFuYWdlbWVudFxuICBpdGVtOiB7fSAgICAgICAgIC8vIHVzZXIgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGl0ZW1zW2luZGV4XVxufVxuYGBgXG5cbkFsdGVybmF0aXZlbHksIHlvdSBjYW4gY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYXMgZGF0YSBpbmRleCBieSBjaGFuZ2luZyB0aGVcbmBpbmRleEFzYCBwcm9wZXJ0eS4gVGhlIGBhc2AgcHJvcGVydHkgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nXG5zY29wZSBmb3IgdGhlIGFycmF5LlxuXG5Gb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBgZGF0YWAgYXJyYXk6XG5cbiMjIyMjIGRhdGEuanNvblxuXG5gYGBqc1xuW1xuICB7XCJuYW1lXCI6IFwiQm9iXCJ9LFxuICB7XCJuYW1lXCI6IFwiVGltXCJ9LFxuICB7XCJuYW1lXCI6IFwiTWlrZVwifVxuXVxuYGBgXG5cblRoZSBmb2xsb3dpbmcgY29kZSB3b3VsZCByZW5kZXIgdGhlIGxpc3QgKG5vdGUgdGhlIG5hbWUgcHJvcGVydHkgaXMgYm91bmQgZnJvbSB0aGUgbW9kZWxcbm9iamVjdCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgc2NvcGUpOlxuXG5gYGBodG1sXG48aXJvbi1hamF4IHVybD1cImRhdGEuanNvblwiIGxhc3QtcmVzcG9uc2U9XCJ7e2RhdGF9fVwiIGF1dG8+PC9pcm9uLWFqYXg+XG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgR3JpZCBsYXlvdXRcblxuYGlyb24tbGlzdGAgc3VwcG9ydHMgYSBncmlkIGxheW91dCBpbiBhZGRpdGlvbiB0byBsaW5lYXIgbGF5b3V0IGJ5IHNldHRpbmdcbnRoZSBgZ3JpZGAgYXR0cmlidXRlLiAgSW4gdGhpcyBjYXNlLCB0aGUgbGlzdCB0ZW1wbGF0ZSBpdGVtIG11c3QgaGF2ZSBib3RoIGZpeGVkXG53aWR0aCBhbmQgaGVpZ2h0IChlLmcuIHZpYSBDU1MpLiBCYXNlZCBvbiB0aGlzLCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG5wZXIgcm93IGFyZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGxpc3Qgdmlld3BvcnQuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmBpcm9uLWxpc3RgIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBpdGVtcy4gSXQgYWxzbyBwcm92aWRlc1xuYSBgdGFiSW5kZXhgIHByb3BlcnR5IHdpdGhpbiB0aGUgdGVtcGxhdGUgc2NvcGUgdGhhdCBjYW4gYmUgdXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbkZvciBleGFtcGxlLCB1c2VycyBjYW4gcHJlc3MgdGhlIHVwIGFuZCBkb3duIGtleXMgdG8gbW92ZSB0byBwcmV2aW91cyBhbmQgbmV4dFxuaXRlbXMgaW4gdGhlIGxpc3Q6XG5cbmBgYGh0bWxcbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBTdHlsaW5nXG5cbllvdSBjYW4gdXNlIHRoZSBgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyYCBtaXhpbiB0byBzdHlsZSB0aGUgY29udGFpbmVyIG9mIGl0ZW1zOlxuXG5gYGBjc3Ncbmlyb24tbGlzdCB7XG4gLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9O1xufVxuYGBgXG5cbiMjIyBSZXNpemluZ1xuXG5gaXJvbi1saXN0YCBsYXlzIG91dCB0aGUgaXRlbXMgd2hlbiBpdCByZWNlaXZlcyBhIG5vdGlmaWNhdGlvbiB2aWEgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQuXG5UaGlzIGV2ZW50IGlzIGZpcmVkIGJ5IGFueSBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYC5cblxuQnkgZGVmYXVsdCwgZWxlbWVudHMgc3VjaCBhcyBgaXJvbi1wYWdlc2AsIGBwYXBlci10YWJzYCBvciBgcGFwZXItZGlhbG9nYCB3aWxsIHRyaWdnZXJcbnRoaXMgZXZlbnQgYXV0b21hdGljYWxseS4gSWYgeW91IGhpZGUgdGhlIGxpc3QgbWFudWFsbHkgKGUuZy4geW91IHVzZSBgZGlzcGxheTogbm9uZWApXG55b3UgbWlnaHQgd2FudCB0byBpbXBsZW1lbnQgYElyb25SZXNpemFibGVCZWhhdmlvcmAgb3IgZmlyZSB0aGlzIGV2ZW50IG1hbnVhbGx5IHJpZ2h0XG5hZnRlciB0aGUgbGlzdCBiZWNhbWUgdmlzaWJsZSBhZ2Fpbi4gRm9yIGV4YW1wbGU6XG5cbmBgYGpzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpcm9uLWxpc3QnKS5maXJlKCdpcm9uLXJlc2l6ZScpO1xuYGBgXG5cbiMjIyBXaGVuIHNob3VsZCBgPGlyb24tbGlzdD5gIGJlIHVzZWQ/XG5cbmBpcm9uLWxpc3RgIHNob3VsZCBiZSB1c2VkIHdoZW4gYSBwYWdlIGhhcyBzaWduaWZpY2FudGx5IG1vcmUgRE9NIG5vZGVzIHRoYW4gdGhlIG9uZXNcbnZpc2libGUgb24gdGhlIHNjcmVlbi4gZS5nLiB0aGUgcGFnZSBoYXMgNTAwIG5vZGVzLCBidXQgb25seSAyMCBhcmUgdmlzaWJsZSBhdCBhIHRpbWUuXG5UaGlzIGlzIHdoeSB3ZSByZWZlciB0byBpdCBhcyBhIGB2aXJ0dWFsYCBsaXN0LiBJbiB0aGlzIGNhc2UsIGEgYGRvbS1yZXBlYXRgIHdpbGwgc3RpbGxcbmNyZWF0ZSA1MDAgbm9kZXMgd2hpY2ggY291bGQgc2xvdyBkb3duIHRoZSB3ZWIgYXBwLCBidXQgYGlyb24tbGlzdGAgd2lsbCBvbmx5IGNyZWF0ZSAyMC5cblxuSG93ZXZlciwgaGF2aW5nIGFuIGBpcm9uLWxpc3RgIGRvZXMgbm90IG1lYW4gdGhhdCB5b3UgY2FuIGxvYWQgYWxsIHRoZSBkYXRhIGF0IG9uY2UuXG5TYXkgeW91IGhhdmUgYSBtaWxsaW9uIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlLCB5b3Ugd2FudCB0byBzcGxpdCB0aGUgZGF0YSBpbnRvIHBhZ2VzXG5zbyB5b3UgY2FuIGJyaW5nIGluIGEgcGFnZSBhdCB0aGUgdGltZS4gVGhlIHBhZ2UgY291bGQgY29udGFpbiA1MDAgaXRlbXMsIGFuZCBpcm9uLWxpc3RcbndpbGwgb25seSByZW5kZXIgMjAuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRcbkBlbGVtZW50IGlyb24tbGlzdFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5cbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tbGlzdFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1tYXgtZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyB7XG4gICAgICAgIEBhcHBseSAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZ3JpZF0pKSAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGFycmF5LXNlbGVjdG9yXG4gICAgICAgIGlkPVwic2VsZWN0b3JcIlxuICAgICAgICBpdGVtcz1cInt7aXRlbXN9fVwiXG4gICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZEl0ZW1zfX1cIlxuICAgICAgICBzZWxlY3RlZC1pdGVtPVwie3tzZWxlY3RlZEl0ZW19fVwiPjwvYXJyYXktc2VsZWN0b3I+XG5cbiAgICA8ZGl2IGlkPVwiaXRlbXNcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cblxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBJT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKTtcbiAgdmFyIElPU19UT1VDSF9TQ1JPTExJTkcgPSBJT1MgJiYgSU9TWzFdID49IDg7XG4gIHZhciBERUZBVUxUX1BIWVNJQ0FMX0NPVU5UID0gMztcbiAgdmFyIEhJRERFTl9ZID0gJy0xMDAwMHB4JztcbiAgdmFyIElURU1fV0lEVEggPSAwO1xuICB2YXIgSVRFTV9IRUlHSFQgPSAxO1xuICB2YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcbiAgdmFyIElTX1YyID0gUG9seW1lci5mbHVzaCAhPSBudWxsO1xuICB2YXIgQU5JTUFUSU9OX0ZSQU1FID0gSVNfVjIgPyBQb2x5bWVyLkFzeW5jLmFuaW1hdGlvbkZyYW1lIDogMDtcbiAgdmFyIElETEVfVElNRSA9IElTX1YyID8gUG9seW1lci5Bc3luYy5pZGxlUGVyaW9kIDogMTtcbiAgdmFyIE1JQ1JPX1RBU0sgPSBJU19WMiA/IFBvbHltZXIuQXN5bmMubWljcm9UYXNrIDogMjtcblxuICAvKiBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciBpcyBvbmx5IGF2YWlsYWJsZSB3aXRoIFBvbHltZXIgMi4wLiAqL1xuICBpZiAoIVBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yKSB7XG4gICAgLyogQHBvbHltZXJCZWhhdmlvciAqL1xuICAgIFBvbHltZXIuT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yID0ge307XG4gIH1cblxuICBQb2x5bWVyKHtcblxuICAgIGlzOiAnaXJvbi1saXN0JyxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIGl0ZW1zIGRldGVybWluaW5nIGhvdyBtYW55IGluc3RhbmNlcyBvZiB0aGUgdGVtcGxhdGVcbiAgICAgICAqIHRvIHN0YW1wIGFuZCB0aGF0IHRoYXQgZWFjaCB0ZW1wbGF0ZSBpbnN0YW5jZSBzaG91bGQgYmluZCB0by5cbiAgICAgICAqL1xuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5XG4gICAgICAgKiBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIHRlbXBsYXRlIGluc3RhbmNlLlxuICAgICAgICovXG4gICAgICBhczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnaXRlbSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB3aXRoIHRoZSBpbmRleFxuICAgICAgICogZm9yIHRoZSByb3cuXG4gICAgICAgKi9cbiAgICAgIGluZGV4QXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2luZGV4J1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIHRvIGluZGljYXRlXG4gICAgICAgKiBpZiB0aGUgcm93IGlzIHNlbGVjdGVkLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEFzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdzZWxlY3RlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlLCB0aGUgbGlzdCBpcyByZW5kZXJlZCBhcyBhIGdyaWQuIEdyaWQgaXRlbXMgbXVzdCBoYXZlXG4gICAgICAgKiBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0IHNldCB2aWEgQ1NTLiBlLmcuXG4gICAgICAgKlxuICAgICAgICogYGBgaHRtbFxuICAgICAgICogPGlyb24tbGlzdCBncmlkPlxuICAgICAgICogICA8dGVtcGxhdGU+XG4gICAgICAgKiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XCI+IDEwMHgxMDAgPC9kaXY+XG4gICAgICAgKiAgIDwvdGVtcGxhdGU+XG4gICAgICAgKiA8L2lyb24tbGlzdD5cbiAgICAgICAqIGBgYFxuICAgICAgICovXG4gICAgICBncmlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19ncmlkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlLCB0YXBwaW5nIGEgcm93IHdpbGwgc2VsZWN0IHRoZSBpdGVtLCBwbGFjaW5nIGl0cyBkYXRhIG1vZGVsXG4gICAgICAgKiBpbiB0aGUgc2V0IG9mIHNlbGVjdGVkIGl0ZW1zIHJldHJpZXZhYmxlIHZpYSB0aGUgc2VsZWN0aW9uIHByb3BlcnR5LlxuICAgICAgICpcbiAgICAgICAqIE5vdGUgdGhhdCB0YXBwaW5nIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gdGhlIGxpc3QgaXRlbSB3aWxsIG5vdFxuICAgICAgICogcmVzdWx0IGluIHNlbGVjdGlvbiwgc2luY2UgdGhleSBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGVpciAqIG93biBhY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGlvbkVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyBmYWxzZSwgdGhpcyBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIGBudWxsYFxuICAgICAgICogaWYgbm8gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyB0cnVlLCB0aGlzIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHNlbGVjdGVkIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYHRydWVgLCBtdWx0aXBsZSBpdGVtcyBtYXkgYmUgc2VsZWN0ZWQgYXQgb25jZSAoaW4gdGhpcyBjYXNlLFxuICAgICAgICogYHNlbGVjdGVkYCBpcyBhbiBhcnJheSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMpLiAgV2hlbiBgZmFsc2VgLFxuICAgICAgICogb25seSBvbmUgaXRlbSBtYXkgYmUgc2VsZWN0ZWQgYXQgYSB0aW1lLlxuICAgICAgICovXG4gICAgICBtdWx0aVNlbGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG9mZnNldCB0b3AgZnJvbSB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgdG8gdGhlIGlyb24tbGlzdCBlbGVtZW50LlxuICAgICAgICogVGhpcyB2YWx1ZSBjYW4gYmUgY29tcHV0ZWQgdXNpbmcgdGhlIHBvc2l0aW9uIHJldHVybmVkIGJ5IGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWBcbiAgICAgICAqIGFsdGhvdWdoIGl0J3MgcHJlZmVycmVkIHRvIHVzZSBhIGNvbnN0YW50IHZhbHVlIHdoZW4gcG9zc2libGUuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyB1c2VmdWwgd2hlbiBhbiBleHRlcm5hbCBzY3JvbGxpbmcgZWxlbWVudCBpcyB1c2VkIGFuZCB0aGVyZSdzXG4gICAgICAgKiBzb21lIG9mZnNldCBiZXR3ZWVuIHRoZSBzY3JvbGxpbmcgZWxlbWVudCBhbmQgdGhlIGxpc3QuXG4gICAgICAgKiBGb3IgZXhhbXBsZTogYSBoZWFkZXIgaXMgcGxhY2VkIGFib3ZlIHRoZSBsaXN0LlxuICAgICAgICovXG4gICAgICBzY3JvbGxPZmZzZXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvYnNlcnZlcnM6IFtcbiAgICAgICdfaXRlbXNDaGFuZ2VkKGl0ZW1zLiopJyxcbiAgICAgICdfc2VsZWN0aW9uRW5hYmxlZENoYW5nZWQoc2VsZWN0aW9uRW5hYmxlZCknLFxuICAgICAgJ19tdWx0aVNlbGVjdGlvbkNoYW5nZWQobXVsdGlTZWxlY3Rpb24pJyxcbiAgICAgICdfc2V0T3ZlcmZsb3coc2Nyb2xsVGFyZ2V0LCBzY3JvbGxPZmZzZXQpJ1xuICAgIF0sXG5cbiAgICBiZWhhdmlvcnM6IFtcbiAgICAgIFBvbHltZXIuVGVtcGxhdGl6ZXIsXG4gICAgICBQb2x5bWVyLklyb25SZXNpemFibGVCZWhhdmlvcixcbiAgICAgIFBvbHltZXIuSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yLFxuICAgICAgUG9seW1lci5PcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3JcbiAgICBdLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHJhdGlvIG9mIGhpZGRlbiB0aWxlcyB0aGF0IHNob3VsZCByZW1haW4gaW4gdGhlIHNjcm9sbCBkaXJlY3Rpb24uXG4gICAgICogUmVjb21tZW5kZWQgdmFsdWUgfjAuNSwgc28gaXQgd2lsbCBkaXN0cmlidXRlIHRpbGVzIGV2ZWx5IGluIGJvdGggZGlyZWN0aW9ucy5cbiAgICAgKi9cbiAgICBfcmF0aW86IDAuNSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYWRkaW5nLXRvcCB2YWx1ZSBmb3IgdGhlIGxpc3QuXG4gICAgICovXG4gICAgX3Njcm9sbGVyUGFkZGluZ1RvcDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgYHNjcm9sbFRvcGAuXG4gICAgICovXG4gICAgX3Njcm9sbFBvc2l0aW9uOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHN1bSBvZiB0aGUgaGVpZ2h0cyBvZiBhbGwgdGhlIHRpbGVzIGluIHRoZSBET00uXG4gICAgICovXG4gICAgX3BoeXNpY2FsU2l6ZTogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdmVyYWdlIGBvZmZzZXRIZWlnaHRgIG9mIHRoZSB0aWxlcyBvYnNlcnZlZCB0aWxsIG5vdy5cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxBdmVyYWdlOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aWxlcyB3aGljaCBgb2Zmc2V0SGVpZ2h0YCA+IDAgb2JzZXJ2ZWQgdW50aWwgbm93LlxuICAgICAqL1xuICAgIF9waHlzaWNhbEF2ZXJhZ2VDb3VudDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBZIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHJlbmRlcmVkIGluIHRoZSBgX3BoeXNpY2FsU3RhcnRgXG4gICAgICogdGlsZSByZWxhdGl2ZSB0byB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAgICovXG4gICAgX3BoeXNpY2FsVG9wOiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBfdmlydHVhbENvdW50OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVzdGltYXRlZCBzY3JvbGwgaGVpZ2h0IGJhc2VkIG9uIGBfcGh5c2ljYWxBdmVyYWdlYFxuICAgICAqL1xuICAgIF9lc3RTY3JvbGxIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Nyb2xsIGhlaWdodCBvZiB0aGUgZG9tIG5vZGVcbiAgICAgKi9cbiAgICBfc2Nyb2xsSGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2YgbGlzdC5cbiAgICAgKi9cbiAgICBfdmlld3BvcnRIZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mIGxpc3QuXG4gICAgICovXG4gICAgX3ZpZXdwb3J0V2lkdGg6IDAsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBET00gbm9kZXMgdGhhdCBhcmUgY3VycmVudGx5IGluIHRoZSB0cmVlXG4gICAgICogQHR5cGUgez9BcnJheTwhVGVtcGxhdGl6ZXJOb2RlPn1cbiAgICAgKi9cbiAgICBfcGh5c2ljYWxJdGVtczogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGhlaWdodHMgZm9yIGVhY2ggaXRlbSBpbiBgX3BoeXNpY2FsSXRlbXNgXG4gICAgICogQHR5cGUgez9BcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIF9waHlzaWNhbFNpemVzOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBmaXJzdCB2aXNpYmxlIGluZGV4LlxuICAgICAqIFNlZSBgZmlyc3RWaXNpYmxlSW5kZXhgXG4gICAgICogQHR5cGUgez9udW1iZXJ9XG4gICAgICovXG4gICAgX2ZpcnN0VmlzaWJsZUluZGV4VmFsOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQSBQb2x5bWVyIGNvbGxlY3Rpb24gZm9yIHRoZSBpdGVtcy5cbiAgICAgKiBAdHlwZSB7P1BvbHltZXIuQ29sbGVjdGlvbn1cbiAgICAgKi9cbiAgICBfY29sbGVjdGlvbjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEEgY2FjaGVkIHZhbHVlIGZvciB0aGUgbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAqIFNlZSBgbGFzdFZpc2libGVJbmRleGBcbiAgICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICAgKi9cbiAgICBfbGFzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggbnVtYmVyIG9mIHBhZ2VzIHRvIHJlbmRlci4gT25lIHBhZ2UgaXMgZXF1aXZhbGVudCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIF9tYXhQYWdlczogMixcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAqL1xuICAgIF9mb2N1c2VkSXRlbTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2aXJ0dWFsIGluZGV4IG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICovXG4gICAgX2ZvY3VzZWRWaXJ0dWFsSW5kZXg6IC0xLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBoeXNpY2FsIGluZGV4IG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAgICovXG4gICAgX2ZvY3VzZWRQaHlzaWNhbEluZGV4OiAtMSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aGUgaXRlbSB0aGF0IGlzIGZvY3VzZWQgaWYgaXQgaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgICAqIEBwcml2YXRlIHs/VGVtcGxhdGl6ZXJOb2RlfVxuICAgICAqL1xuICAgIF9vZmZzY3JlZW5Gb2N1c2VkSXRlbTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtIHRoYXQgYmFja2ZpbGxzIHRoZSBgX29mZnNjcmVlbkZvY3VzZWRJdGVtYCBpbiB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAgKiBsaXN0IHdoZW4gdGhhdCBpdGVtIGlzIG1vdmVkIG9mZnNjcmVlbi5cbiAgICAgKi9cbiAgICBfZm9jdXNCYWNrZmlsbEl0ZW06IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBpdGVtcyBwZXIgcm93XG4gICAgICovXG4gICAgX2l0ZW1zUGVyUm93OiAxLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIGVhY2ggZ3JpZCBpdGVtXG4gICAgICovXG4gICAgX2l0ZW1XaWR0aDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHJvdyBpbiBncmlkIGxheW91dC5cbiAgICAgKi9cbiAgICBfcm93SGVpZ2h0OiAwLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvc3Qgb2Ygc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbiBtcy5cbiAgICAgKi9cbiAgICBfdGVtcGxhdGVDb3N0OiAwLFxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIHRvIHBhc3MgZXZlbnQubW9kZWwgcHJvcGVydHkgdG8gZGVjbGFyYXRpdmUgZXZlbnQgaGFuZGxlcnMgLVxuICAgICAqIHNlZSBwb2x5bWVyL3BvbHltZXIjNDMzOS5cbiAgICAgKi9cbiAgICBfcGFyZW50TW9kZWw6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm90dG9tIG9mIHRoZSBwaHlzaWNhbCBjb250ZW50LlxuICAgICAqL1xuICAgIGdldCBfcGh5c2ljYWxCb3R0b20oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBib3R0b20gb2YgdGhlIHNjcm9sbC5cbiAgICAgKi9cbiAgICBnZXQgX3Njcm9sbEJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbi10aCBpdGVtIHJlbmRlcmVkIGluIHRoZSBsYXN0IHBoeXNpY2FsIGl0ZW0uXG4gICAgICovXG4gICAgZ2V0IF92aXJ0dWFsRW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaHlzaWNhbCBjb250ZW50IHRoYXQgaXNuJ3Qgb24gdGhlIHNjcmVlbi5cbiAgICAgKi9cbiAgICBnZXQgX2hpZGRlbkNvbnRlbnRTaXplKCkge1xuICAgICAgdmFyIHNpemUgPSB0aGlzLmdyaWQgPyB0aGlzLl9waHlzaWNhbFJvd3MgKiB0aGlzLl9yb3dIZWlnaHQgOiB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgICByZXR1cm4gc2l6ZSAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vZGUgZm9yIHRoZSBfdXNlclRlbXBsYXRlLlxuICAgICAqL1xuICAgIGdldCBfaXRlbXNQYXJlbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5kb20oUG9seW1lci5kb20odGhpcy5fdXNlclRlbXBsYXRlKS5wYXJlbnROb2RlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gc2Nyb2xsIHRvcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgX21heFNjcm9sbFRvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhcmdlc3Qgbi10aCB2YWx1ZSBmb3IgYW4gaXRlbSBzdWNoIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkIGluIGBfcGh5c2ljYWxTdGFydGAuXG4gICAgICovXG4gICAgZ2V0IF9tYXhWaXJ0dWFsU3RhcnQoKSB7XG4gICAgICB2YXIgdmlydHVhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyh0aGlzLl92aXJ0dWFsQ291bnQpO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHZpcnR1YWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQpO1xuICAgIH0sXG5cbiAgICBzZXQgX3ZpcnR1YWxTdGFydCh2YWwpIHtcbiAgICAgIHZhbCA9IHRoaXMuX2NsYW1wKHZhbCwgMCwgdGhpcy5fbWF4VmlydHVhbFN0YXJ0KTtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydFZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgZ2V0IF92aXJ0dWFsU3RhcnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICAgKi9cbiAgICBzZXQgX3BoeXNpY2FsU3RhcnQodmFsKSB7XG4gICAgICB2YWwgPSB2YWwgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgdmFsID0gdGhpcy5fcGh5c2ljYWxDb3VudCArIHZhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgPSB2YWw7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxTdGFydCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsIHx8IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICAgKi9cbiAgICBnZXQgX3BoeXNpY2FsRW5kKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB9LFxuXG4gICAgc2V0IF9waHlzaWNhbENvdW50KHZhbCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudFZhbCA9IHZhbDtcbiAgICB9LFxuXG4gICAgZ2V0IF9waHlzaWNhbENvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgfHwgMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW1hbCBwaHlzaWNhbCBzaXplIHN1Y2ggdGhhdCB3ZSB3aWxsIGhhdmUgZW5vdWdoIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdG8gZmlsbCB1cCB0aGUgdmlld3BvcnQgYW5kIHJlY3ljbGUgd2hlbiB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqXG4gICAgICogVGhpcyBkZWZhdWx0IHZhbHVlIGFzc3VtZXMgdGhhdCB3ZSB3aWxsIGF0IGxlYXN0IGhhdmUgdGhlIGVxdWl2YWxlbnRcbiAgICAgKiB0byBhIHZpZXdwb3J0IG9mIHBoeXNpY2FsIGl0ZW1zIGFib3ZlIGFuZCBiZWxvdyB0aGUgdXNlcidzIHZpZXdwb3J0LlxuICAgICAqL1xuICAgIGdldCBfb3B0UGh5c2ljYWxTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID09PSAwID8gSW5maW5pdHkgOiB0aGlzLl92aWV3cG9ydEhlaWdodCAqIHRoaXMuX21heFBhZ2VzO1xuICAgIH0sXG5cbiAgIC8qKlxuICAgICogVHJ1ZSBpZiB0aGUgY3VycmVudCBsaXN0IGlzIHZpc2libGUuXG4gICAgKi9cbiAgICBnZXQgX2lzVmlzaWJsZSgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGZpcnN0VmlzaWJsZUluZGV4KCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsO1xuICAgICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICAgIGlkeCA9IHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuXG4gICAgICAgICAgaWYgKHBoeXNpY2FsT2Zmc2V0ID4gdGhpcy5fc2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQgPyB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdykgOiB2aWR4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIYW5kbGUgYSBwYXJ0aWFsbHkgcmVuZGVyZWQgZmluYWwgcm93IGluIGdyaWQgbW9kZVxuICAgICAgICAgIGlmICh0aGlzLmdyaWQgJiYgdGhpcy5fdmlydHVhbENvdW50IC0gMSA9PT0gdmlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IDA7XG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IGxhc3RWaXNpYmxlSW5kZXgoKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbDtcbiAgICAgIGlmIChpZHggPT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgaWR4ID0gTWF0aC5taW4odGhpcy5fdmlydHVhbENvdW50LFxuICAgICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICsgdGhpcy5fZXN0Um93c0luVmlldyAqIHRoaXMuX2l0ZW1zUGVyUm93IC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBoeXNpY2FsT2Zmc2V0ID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA8IHRoaXMuX3Njcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICBpZHggPSB2aWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH0sXG5cbiAgICBnZXQgX2RlZmF1bHRTY3JvbGxUYXJnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0IF92aXJ0dWFsUm93Q291bnQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpcnR1YWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9LFxuXG4gICAgZ2V0IF9lc3RSb3dzSW5WaWV3KCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl92aWV3cG9ydEhlaWdodCAvIHRoaXMuX3Jvd0hlaWdodCk7XG4gICAgfSxcblxuICAgIGdldCBfcGh5c2ljYWxSb3dzKCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgIH0sXG5cbiAgICBnZXQgX3Njcm9sbE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgKyB0aGlzLnNjcm9sbE9mZnNldDtcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2RpZEZvY3VzLmJpbmQodGhpcyksIHRydWUpO1xuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgIC8vIGBpcm9uLXJlc2l6ZWAgaXMgZmlyZWQgd2hlbiB0aGUgbGlzdCBpcyBhdHRhY2hlZCBpZiB0aGUgZXZlbnQgaXMgYWRkZWRcbiAgICAgIC8vIGJlZm9yZSBhdHRhY2hlZCBjYXVzaW5nIHVubmVjZXNzYXJ5IHdvcmsuXG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICAgIHRoaXMubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICAgIH0sXG5cbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMsICdpcm9uLXJlc2l6ZScsICdfcmVzaXplSGFuZGxlcicpO1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBpZiB0aGlzIGVsZW1lbnQgaGFzIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvblxuICAgICAqL1xuICAgIF9zZXRPdmVyZmxvdzogZnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSB7XG4gICAgICB0aGlzLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ3RvdWNoJyA6ICcnO1xuICAgICAgdGhpcy5zdHlsZS5vdmVyZmxvd1kgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAnYXV0bycgOiAnJztcbiAgICAgIC8vIENsZWFyIGNhY2hlLlxuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIGlmIHlvdSBkeW5hbWljYWxseSB1cGRhdGUgdGhlIHZpZXdwb3J0J3NcbiAgICAgKiBzaXplIG9yIENTUyBwYWRkaW5nLlxuICAgICAqXG4gICAgICogQG1ldGhvZCB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXNcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpO1xuICAgICAgdGhpcy5fc2Nyb2xsZXJQYWRkaW5nVG9wID0gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAwIDpcbiAgICAgICAgICBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICAgIHRoaXMuX2lzUlRMID0gQm9vbGVhbihzdHlsZXMuZGlyZWN0aW9uID09PSAncnRsJyk7XG4gICAgICB0aGlzLl92aWV3cG9ydFdpZHRoID0gdGhpcy4kLml0ZW1zLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgICB0aGlzLmdyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVjeWNsZXMgdGhlIHBoeXNpY2FsIGl0ZW1zIHdoZW4gbmVlZGVkLlxuICAgICAqL1xuICAgIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLl9tYXhTY3JvbGxUb3AsIHRoaXMuX3Njcm9sbFRvcCkpO1xuICAgICAgdmFyIGRlbHRhID0gc2Nyb2xsVG9wIC0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAgIC8vIFRyYWNrIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsVG9wO1xuICAgICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgICAgaWYgKE1hdGguYWJzKGRlbHRhKSA+IHRoaXMuX3BoeXNpY2FsU2l6ZSAmJiB0aGlzLl9waHlzaWNhbFNpemUgPiAwKSB7XG4gICAgICAgIGRlbHRhID0gZGVsdGEgLSB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgICAgIHZhciBpZHhBZGp1c3RtZW50ID0gTWF0aC5yb3VuZChkZWx0YSAvIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSkgKiB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBpZHhBZGp1c3RtZW50O1xuICAgICAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fdmlydHVhbFN0YXJ0IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCA+IDApIHtcbiAgICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyhpc1Njcm9sbGluZ0Rvd24pO1xuICAgICAgICBpZiAoaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSByZXVzYWJsZXMucGh5c2ljYWxUb3A7XG4gICAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGUocmV1c2FibGVzLmluZGV4ZXMsIGlzU2Nyb2xsaW5nRG93biA/IG51bGwgOiByZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlKCdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLCB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKHRoaXMsIDApLCBNSUNST19UQVNLKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgaW5kZXhlcyBvZiB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAgKiB0aGF0IG1pZ2h0IGJlIHJldXNlZCBhbmQgdGhlIHBoeXNpY2FsVG9wLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmcm9tVG9wIElmIHRoZSBwb3RlbnRpYWwgcmV1c2FibGUgaXRlbXMgYXJlIGFib3ZlIHRoZSBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqL1xuICAgIF9nZXRSZXVzYWJsZXM6IGZ1bmN0aW9uKGZyb21Ub3ApIHtcbiAgICAgIHZhciBpdGgsIGxhc3RJdGgsIG9mZnNldENvbnRlbnQsIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgIHZhciBpZHhzID0gW107XG4gICAgICB2YXIgcHJvdGVjdGVkT2Zmc2V0Q29udGVudCA9IHRoaXMuX2hpZGRlbkNvbnRlbnRTaXplICogdGhpcy5fcmF0aW87XG4gICAgICB2YXIgdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgdmFyIHZpcnR1YWxFbmQgPSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgICAgdmFyIHBoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgdmFyIHRvcCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgdmFyIGJvdHRvbSA9IHRoaXMuX3BoeXNpY2FsQm90dG9tICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIHZhciBzY3JvbGxCb3R0b20gPSB0aGlzLl9zY3JvbGxCb3R0b207XG5cbiAgICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IHNjcm9sbFRvcCAtIHRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgb2Zmc2V0Q29udGVudCA9IGJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICAgIH1cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHBoeXNpY2FsSXRlbUhlaWdodCA9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpdGgpO1xuICAgICAgICBvZmZzZXRDb250ZW50ID0gb2Zmc2V0Q29udGVudCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgaWYgKGlkeHMubGVuZ3RoID49IHBoeXNpY2FsQ291bnQgfHwgb2Zmc2V0Q29udGVudCA8PSBwcm90ZWN0ZWRPZmZzZXRDb250ZW50KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgICAgaWYgKHZpcnR1YWxFbmQgKyBpZHhzLmxlbmd0aCArIDEgPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgICAgaWYgKHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodCA+PSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgICB0b3AgPSB0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgICAgaXRoID0gKGl0aCArIDEpICUgcGh5c2ljYWxDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgICAgaWYgKHZpcnR1YWxTdGFydCAtIGlkeHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgICBpZiAodG9wICsgdGhpcy5fcGh5c2ljYWxTaXplIC0gcGh5c2ljYWxJdGVtSGVpZ2h0IDw9IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICAgIHRvcCA9IHRvcCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgICBpdGggPSAoaXRoID09PSAwKSA/IHBoeXNpY2FsQ291bnQgLSAxIDogaXRoIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgaW5kZXhlczogaWR4cywgcGh5c2ljYWxUb3A6IHRvcCAtIHRoaXMuX3Njcm9sbE9mZnNldCB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgaXRlbXMsIHN0YXJ0aW5nIGZyb20gdGhlIGBfdmlydHVhbFN0YXJ0YCBpdGVtLlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IG1vdmluZ1VwXG4gICAgICovXG4gICAgX3VwZGF0ZTogZnVuY3Rpb24oaXRlbVNldCwgbW92aW5nVXApIHtcbiAgICAgIGlmICgoaXRlbVNldCAmJiBpdGVtU2V0Lmxlbmd0aCA9PT0gMCkgfHwgdGhpcy5fcGh5c2ljYWxDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKGl0ZW1TZXQpO1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhpdGVtU2V0KTtcbiAgICAgIC8vIEFkanVzdCBvZmZzZXQgYWZ0ZXIgbWVhc3VyaW5nLlxuICAgICAgaWYgKG1vdmluZ1VwKSB7XG4gICAgICAgIHdoaWxlIChtb3ZpbmdVcC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gbW92aW5nVXAucG9wKCk7XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgLT0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9vbCBvZiBET00gZWxlbWVudHMgYW5kIGF0dGFjaGVzIHRoZW0gdG8gdGhlIGxvY2FsIGRvbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIHBvb2xcbiAgICAgKi9cbiAgICBfY3JlYXRlUG9vbDogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICAgIHZhciBpLCBpbnN0O1xuICAgICAgdmFyIHBoeXNpY2FsSXRlbXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGluc3QgPSB0aGlzLnN0YW1wKG51bGwpO1xuICAgICAgICAvLyBUT0RPKGJsYXN0ZW4pOlxuICAgICAgICAvLyBGaXJzdCBlbGVtZW50IGNoaWxkIGlzIGl0ZW07IFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgY2hpbGRyZW5bMF1cbiAgICAgICAgLy8gb24gYSBkb2MgZnJhZ21lbnQuIFRlc3QgdGhpcyB0byBzZWUgaWYgaXQgc3RpbGwgbWF0dGVycy5cbiAgICAgICAgcGh5c2ljYWxJdGVtc1tpXSA9IGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJyk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGh5c2ljYWxJdGVtcztcbiAgICB9LFxuXG4gICAgX2lzQ2xpZW50RnVsbDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsQm90dG9tICE9IDAgJiYgdGhpcy5fcGh5c2ljYWxCb3R0b20tMSA+PSB0aGlzLl9zY3JvbGxCb3R0b20gJiZcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA8PSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW5jcmVhc2VzIHRoZSBwb29sIHNpemUuXG4gICAgICovXG4gICAgX2luY3JlYXNlUG9vbElmTmVlZGVkOiBmdW5jdGlvbihjb3VudCkge1xuICAgICAgdmFyIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY2xhbXAodGhpcy5fcGh5c2ljYWxDb3VudCArIGNvdW50LFxuICAgICAgICAgIERFRkFVTFRfUEhZU0lDQUxfQ09VTlQsIHRoaXMuX3ZpcnR1YWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3cobmV4dFBoeXNpY2FsQ291bnQpO1xuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB2YXIgY29ycmVjdGlvbiA9IG5leHRQaHlzaWNhbENvdW50ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIGlmIChjb3JyZWN0aW9uICYmIG5leHRQaHlzaWNhbENvdW50IC0gY29ycmVjdGlvbiA8PSB0aGlzLl9waHlzaWNhbENvdW50KSB7XG4gICAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgKz0gdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgLT0gY29ycmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWx0YSA9IG5leHRQaHlzaWNhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIHZhciBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuXG4gICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgdmFyIHRzID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAvLyBDb25jYXQgYXJyYXlzIGluIHBsYWNlLlxuICAgICAgICBbXS5wdXNoLmFwcGx5KHRoaXMuX3BoeXNpY2FsSXRlbXMsIHRoaXMuX2NyZWF0ZVBvb2woZGVsdGEpKTtcbiAgICAgICAgW10ucHVzaC5hcHBseSh0aGlzLl9waHlzaWNhbFNpemVzLCBuZXcgQXJyYXkoZGVsdGEpKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyBkZWx0YTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwaHlzaWNhbCBzdGFydCBpZiBpdCBuZWVkcyB0byBwcmVzZXJ2ZSB0aGUgbW9kZWwgb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24sIHRoZSBmb2N1c2VkIGl0ZW0gaXMgY3VycmVudGx5IHJlbmRlcmVkIGFuZCBpdHMgbW9kZWwgd291bGRcbiAgICAgICAgLy8gaGF2ZSBjaGFuZ2VkIGFmdGVyIGluY3JlYXNpbmcgdGhlIHBvb2wgaWYgdGhlIHBoeXNpY2FsIHN0YXJ0IHJlbWFpbmVkIHVuY2hhbmdlZC5cbiAgICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsU3RhcnQgPiB0aGlzLl9waHlzaWNhbEVuZCAmJlxuICAgICAgICAgICAgdGhpcy5faXNJbmRleFJlbmRlcmVkKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpICYmXG4gICAgICAgICAgICB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpIDwgdGhpcy5fcGh5c2ljYWxFbmQpIHtcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvc3QgPSAod2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC0gdHMpIC8gZGVsdGE7XG4gICAgICAgIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG4gICAgICB9XG4gICAgICAvLyBUaGUgdXBwZXIgYm91bmRzIGlzIG5vdCBmaXhlZCB3aGVuIGRlYWxpbmcgd2l0aCBhIGdyaWQgdGhhdCBkb2Vzbid0XG4gICAgICAvLyBmaWxsIGl0J3MgbGFzdCByb3cgd2l0aCB0aGUgZXhhY3QgbnVtYmVyIG9mIGl0ZW1zIHBlciByb3cuXG4gICAgICBpZiAodGhpcy5fdmlydHVhbEVuZCA+PSB0aGlzLl92aXJ0dWFsQ291bnQgLSAxIHx8IG5leHRJbmNyZWFzZSA9PT0gMCkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNDbGllbnRGdWxsKCkpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBuZXh0SW5jcmVhc2VcbiAgICAgICAgICApLCBNSUNST19UQVNLKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGh5c2ljYWxTaXplIDwgdGhpcy5fb3B0UGh5c2ljYWxTaXplKSB7XG4gICAgICAgIC8vIFlpZWxkIGFuZCBpbmNyZWFzZSB0aGUgcG9vbCBkdXJpbmcgaWRsZSB0aW1lIHVudGlsIHRoZSBwaHlzaWNhbCBzaXplIGlzIG9wdGltYWwuXG4gICAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5fY2xhbXAoTWF0aC5yb3VuZCg1MCAvIHRoaXMuX3RlbXBsYXRlQ29zdCksIDEsIG5leHRJbmNyZWFzZSlcbiAgICAgICAgICApLCBJRExFX1RJTUUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBhIG5ldyBsaXN0LlxuICAgICAqL1xuICAgIF9yZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuX2lzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCAhPT0gMCkge1xuICAgICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKHRydWUpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwKSB7XG4gICAgICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKERFRkFVTFRfUEhZU0lDQUxfQ09VTlQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGV0aXplcyB0aGUgdXNlciB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBfZW5zdXJlVGVtcGxhdGl6ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl91c2VyVGVtcGxhdGUgPSB0aGlzLnF1ZXJ5RWZmZWN0aXZlQ2hpbGRyZW4oJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAoIXRoaXMuX3VzZXJUZW1wbGF0ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2lyb24tbGlzdCByZXF1aXJlcyBhIHRlbXBsYXRlIHRvIGJlIHByb3ZpZGVkIGluIGxpZ2h0LWRvbScpO1xuICAgICAgfVxuICAgICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7fTtcbiAgICAgIGluc3RhbmNlUHJvcHMuX19rZXlfXyA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuYXNdID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlUHJvcHNbdGhpcy5pbmRleEFzXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZVByb3BzW3RoaXMuc2VsZWN0ZWRBc10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2VQcm9wcy50YWJJbmRleCA9IHRydWU7XG4gICAgICB0aGlzLl9pbnN0YW5jZVByb3BzID0gaW5zdGFuY2VQcm9wcztcbiAgICAgIHRoaXMudGVtcGxhdGl6ZSh0aGlzLl91c2VyVGVtcGxhdGUsIHRoaXMubXV0YWJsZURhdGEpO1xuICAgIH0sXG5cbiAgICBfZ3JpZENoYW5nZWQ6IGZ1bmN0aW9uKG5ld0dyaWQsIG9sZEdyaWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2xkR3JpZCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgICBQb2x5bWVyLmZsdXNoID8gUG9seW1lci5mbHVzaCgpIDogUG9seW1lci5kb20uZmx1c2goKTtcbiAgICAgIG5ld0dyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGl0ZW1zIGhhdmUgY2hhbmdlZC4gVGhhdCBpcywgcmVzc2lnbm1lbnRzXG4gICAgICogdG8gYGl0ZW1zYCwgc3BsaWNlcyBvciB1cGRhdGVzIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICovXG4gICAgX2l0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlKSB7XG4gICAgICBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcycpIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSAwO1xuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uID0gdGhpcy5pdGVtcyAmJiBQb2x5bWVyLkNvbGxlY3Rpb24gP1xuICAgICAgICAgICAgUG9seW1lci5Db2xsZWN0aW9uLmdldCh0aGlzLml0ZW1zKSA6IG51bGw7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXkgPSB7fTtcbiAgICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgfHwgMDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtcyA9IHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW107XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXMgPSB0aGlzLl9waHlzaWNhbFNpemVzIHx8IFtdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvcCA+IHRoaXMuX3Njcm9sbE9mZnNldCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMuc3BsaWNlcycpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0VmlydHVhbEluZGV4KGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMpO1xuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgPSB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5sZW5ndGggOiAwO1xuICAgICAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYWZmZWN0ZWQgaW5kZXggaXMgcmVuZGVyZWQuXG4gICAgICAgIHZhciBhZmZlY3RlZEluZGV4UmVuZGVyZWQgPSBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5kZXhSZW5kZXJlZChzcGxpY2UuaW5kZXgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSB8fCBhZmZlY3RlZEluZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucGF0aCAhPT0gJ2l0ZW1zLmxlbmd0aCcpIHtcbiAgICAgICAgdGhpcy5fZm9yd2FyZEl0ZW1QYXRoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZEl0ZW1QYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoNik7IC8vICdpdGVtcy4nLmxlbmd0aCA9PSA2XG4gICAgICB2YXIgZG90ID0gcGF0aC5pbmRleE9mKCcuJykgKyAxO1xuICAgICAgaWYgKGRvdCA9PT0gMCkge1xuICAgICAgICBkb3QgPSBwYXRoLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHZhciBpZHggPSBJU19WMlxuICAgICAgICAgID8gcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMCwgZG90KSwgMTApXG4gICAgICAgICAgLy8gRXh0cmFjdCBgI2AgZnJvbSBgcGF0aGAuXG4gICAgICAgICAgOiBwYXJzZUludChwYXRoLnN1YnN0cmluZygxLCBkb3QpLCAxMCk7XG4gICAgICB2YXIgb2Zmc2NyZWVuSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgdmFyIGlzSW5kZXhSZW5kZXJlZCA9IHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpO1xuICAgICAgdmFyIGluc3Q7XG4gICAgICB2YXIgcGlkeDtcblxuICAgICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICBwaWR4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpO1xuICAgICAgICBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICB9IGVsc2UgaWYgKG9mZnNjcmVlbkl0ZW0pIHtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9mZnNjcmVlbkl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpbnN0IHx8IGluc3RbdGhpcy5pbmRleEFzXSAhPT0gaWR4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZyhkb3QpO1xuICAgICAgcGF0aCA9IHRoaXMuYXMgKyAocGF0aCA/ICcuJyArIHBhdGggOiAnJyk7XG4gICAgICBJU19WMlxuICAgICAgICA/IGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eU9yUGF0aChwYXRoLCB2YWx1ZSwgZmFsc2UsIHRydWUpXG4gICAgICAgIDogaW5zdC5ub3RpZnlQYXRoKHBhdGgsIHZhbHVlLCB0cnVlKTtcbiAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAvLyBUT0RPKGJsYXN0ZW4pOiBWMSBkb2Vzbid0IGRvIHRoaXMgYW5kIGl0J3MgYSBidWdcbiAgICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbcGlkeF0pO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyFBcnJheTwhUG9seW1lclNwbGljZT59IHNwbGljZXNcbiAgICAgKi9cbiAgICBfYWRqdXN0VmlydHVhbEluZGV4OiBmdW5jdGlvbihzcGxpY2VzKSB7XG4gICAgICBzcGxpY2VzLmZvckVhY2goZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgIC8vIGRlc2VsZWN0IHJlbW92ZWQgaXRlbXNcbiAgICAgICAgc3BsaWNlLnJlbW92ZWQuZm9yRWFjaCh0aGlzLl9yZW1vdmVJdGVtLCB0aGlzKTtcbiAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIGNhcmUgYWJvdXQgY2hhbmdlcyBoYXBwZW5pbmcgYWJvdmUgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgaWYgKHNwbGljZS5pbmRleCA8IHRoaXMuX3ZpcnR1YWxTdGFydCkge1xuICAgICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgc3BsaWNlLmluZGV4IC0gdGhpcy5fdmlydHVhbFN0YXJ0KTtcbiAgICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyBkZWx0YTtcbiAgICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArIGRlbHRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QoaXRlbSk7XG4gICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgZm9jdXNlZCBpdGVtXG4gICAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0gJiYgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pW3RoaXMuYXNdID09PSBpdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyBhIHByb3ZpZGVkIGZ1bmN0aW9uIHBlciBldmVyeSBwaHlzaWNhbCBpbmRleCBpbiBgaXRlbVNldGBcbiAgICAgKiBgaXRlbVNldGAgZGVmYXVsdCB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBlbnRpcmUgc2V0IG9mIHBoeXNpY2FsIGluZGV4ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyFmdW5jdGlvbihudW1iZXIsIG51bWJlcil9IGZuXG4gICAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICAgKi9cbiAgICBfaXRlcmF0ZUl0ZW1zOiBmdW5jdGlvbihmbiwgaXRlbVNldCkge1xuICAgICAgdmFyIHBpZHgsIHZpZHgsIHJ0biwgaTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgaXRlbVNldCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbVNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBpZHggPSBpdGVtU2V0W2ldO1xuICAgICAgICAgIHZpZHggPSB0aGlzLl9jb21wdXRlVmlkeChwaWR4KTtcbiAgICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaWR4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgICAgdmlkeCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgICAgZm9yICg7IHBpZHggPCB0aGlzLl9waHlzaWNhbENvdW50OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwaWR4ID0gMDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsU3RhcnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aXJ0dWFsIGluZGV4IGZvciBhIGdpdmVuIHBoeXNpY2FsIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGlkeCBQaHlzaWNhbCBpbmRleFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBfY29tcHV0ZVZpZHg6IGZ1bmN0aW9uKHBpZHgpIHtcbiAgICAgIGlmIChwaWR4ID49IHRoaXMuX3BoeXNpY2FsU3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIChwaWR4IC0gdGhpcy5fcGh5c2ljYWxTdGFydCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbFN0YXJ0KSArIHBpZHg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgdGhlIGRhdGEgbW9kZWxzIHRvIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX2Fzc2lnbk1vZGVsczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XTtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbdmlkeF07XG4gICAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGVsKTtcbiAgICAgICAgICBpbnN0Ll9fa2V5X18gPSB0aGlzLl9jb2xsZWN0aW9uID8gdGhpcy5fY29sbGVjdGlvbi5nZXRLZXkoaXRlbSkgOiBudWxsO1xuICAgICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmFzLCBpdGVtKTtcbiAgICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5zZWxlY3RlZEFzLCB0aGlzLiQuc2VsZWN0b3IuaXNTZWxlY3RlZChpdGVtKSk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsIHRoaXMuaW5kZXhBcywgdmlkeCk7XG4gICAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KGluc3QsICd0YWJJbmRleCcsIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPT09IHZpZHggPyAwIDogLTEpO1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlbaW5zdC5fX2tleV9fXSA9IHBpZHg7XG4gICAgICAgICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcyh0cnVlKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICB9XG4gICAgICB9LCBpdGVtU2V0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgaGVpZ2h0IGZvciBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAgICovXG4gICAgX3VwZGF0ZU1ldHJpY3M6IGZ1bmN0aW9uKGl0ZW1TZXQpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkaXN0cmlidXRlZCBhbGwgdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAgICAvLyBzbyB3ZSBjYW4gbWVhc3VyZSB0aGVtLlxuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG5cbiAgICAgIHZhciBuZXdQaHlzaWNhbFNpemUgPSAwO1xuICAgICAgdmFyIG9sZFBoeXNpY2FsU2l6ZSA9IDA7XG4gICAgICB2YXIgcHJldkF2Z0NvdW50ID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQ7XG4gICAgICB2YXIgcHJldlBoeXNpY2FsQXZnID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICBvbGRQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSB8fCAwO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG5ld1BoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID8gMSA6IDA7XG4gICAgICB9LCBpdGVtU2V0KTtcblxuICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemUgPSBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZFBoeXNpY2FsU2l6ZSA9ICh0aGlzLl9pdGVtc1BlclJvdyA9PT0gMSkgPyBvbGRQaHlzaWNhbFNpemUgOiAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9IHRoaXMuX3BoeXNpY2FsU2l6ZSArIG5ld1BoeXNpY2FsU2l6ZSAtIG9sZFBoeXNpY2FsU2l6ZTtcbiAgICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSAxO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSBhdmVyYWdlIGlmIGl0IG1lYXN1cmVkIHNvbWV0aGluZy5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCAhPT0gcHJldkF2Z0NvdW50KSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAoKHByZXZQaHlzaWNhbEF2ZyAqIHByZXZBdmdDb3VudCkgKyBuZXdQaHlzaWNhbFNpemUpIC9cbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZUdyaWRNZXRyaWNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2l0ZW1XaWR0aCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDIwMDtcbiAgICAgIHRoaXMuX3Jvd0hlaWdodCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5vZmZzZXRIZWlnaHQgOiAyMDA7XG4gICAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1XaWR0aCA/IE1hdGguZmxvb3IodGhpcy5fdmlld3BvcnRXaWR0aCAvIHRoaXMuX2l0ZW1XaWR0aCkgOiB0aGlzLl9pdGVtc1BlclJvdztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBoeXNpY2FsIGl0ZW1zLlxuICAgICAqL1xuICAgIF9wb3NpdGlvbkl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2FkanVzdFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgIHZhciB5ID0gdGhpcy5fcGh5c2ljYWxUb3A7XG5cbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdmFyIHRvdGFsSXRlbVdpZHRoID0gdGhpcy5faXRlbXNQZXJSb3cgKiB0aGlzLl9pdGVtV2lkdGg7XG4gICAgICAgIHZhciByb3dPZmZzZXQgPSAodGhpcy5fdmlld3BvcnRXaWR0aCAtIHRvdGFsSXRlbVdpZHRoKSAvIDI7XG5cbiAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICB2YXIgbW9kdWx1cyA9IHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoKG1vZHVsdXMgKiB0aGlzLl9pdGVtV2lkdGgpICsgcm93T2Zmc2V0KTtcbiAgICAgICAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgICAgICAgIHggPSB4ICogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlM2QoeCArICdweCcsIHkgKyAncHgnLCAwLCB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTmV4dFJvdyh2aWR4KSkge1xuICAgICAgICAgICAgeSArPSB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgICAgeSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudDogZnVuY3Rpb24ocGlkeCkge1xuICAgICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAgICogd2hldGhlciBvciBub3QgdGhlIG5leHQgaW5kZXggd2lsbCBuZWVkXG4gICAgICogdG8gYmUgcmVuZGVyZWQgb24gYSBuZXcgcm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZpZHggVmlydHVhbCBpbmRleFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgX3Nob3VsZFJlbmRlck5leHRSb3c6IGZ1bmN0aW9uKHZpZHgpIHtcbiAgICAgIHJldHVybiB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3cgPT09IHRoaXMuX2l0ZW1zUGVyUm93IC0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHdoZW4gaXQgd2FzIG92ZXJlc3RpbWF0ZWQuXG4gICAgICovXG4gICAgX2FkanVzdFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkZWx0YUhlaWdodCA9IHRoaXMuX3ZpcnR1YWxTdGFydCA9PT0gMCA/IHRoaXMuX3BoeXNpY2FsVG9wIDpcbiAgICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAgIC8vIE5vdGU6IHRoZSBkZWx0YSBjYW4gYmUgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gICAgICBpZiAoZGVsdGFIZWlnaHQgIT09IDApIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgICAgICAvLyBqdWtpbmcgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBpbnRlcmlhbCBzY3JvbGxpbmcgb24gaU9TIGlzIG5vIGJ1ZW5vXG4gICAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxUb3AgLSBkZWx0YUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICAgKi9cbiAgICBfcmVzZXRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24ocG9zKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9wID0gcG9zO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVVwZGF0ZSBJZiB0cnVlLCB1cGRhdGVzIHRoZSBoZWlnaHQgbm8gbWF0dGVyIHdoYXQuXG4gICAgICovXG4gICAgX3VwZGF0ZVNjcm9sbGVyU2l6ZTogZnVuY3Rpb24oZm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gKHRoaXMuX3BoeXNpY2FsQm90dG9tICtcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuX3ZpcnR1YWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQsIDApICogdGhpcy5fcGh5c2ljYWxBdmVyYWdlKTtcbiAgICAgIH1cbiAgICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgICAgZm9yY2VVcGRhdGUgPSBmb3JjZVVwZGF0ZSB8fCB0aGlzLl9zY3JvbGxQb3NpdGlvbiA+PSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgICBmb3JjZVVwZGF0ZSA9IGZvcmNlVXBkYXRlIHx8IHRoaXMuZ3JpZCAmJiB0aGlzLiQuaXRlbXMuc3R5bGUuaGVpZ2h0IDwgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0O1xuICAgICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgICAgaWYgKGZvcmNlVXBkYXRlIHx8IE1hdGguYWJzKHRoaXMuX2VzdFNjcm9sbEhlaWdodCAtIHRoaXMuX3Njcm9sbEhlaWdodCkgPj0gdGhpcy5fdmlld3BvcnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgaXRlbSBpbiB0aGUgdmlydHVhbCBsaXN0IHJlZ2FyZGxlc3NcbiAgICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzY3JvbGxUb0l0ZW1cbiAgICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAgICovXG4gICAgc2Nyb2xsVG9JdGVtOiBmdW5jdGlvbihpdGVtKXtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvSW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIHZpcnR1YWwgbGlzdCByZWdhcmRsZXNzXG4gICAgICogb2YgdGhlIHBoeXNpY2FsIGl0ZW1zIGluIHRoZSBET00gdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2Nyb2xsVG9JbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggVGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAgICovXG4gICAgc2Nyb2xsVG9JbmRleDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBpZiAodHlwZW9mIGlkeCAhPT0gJ251bWJlcicgfHwgaWR4IDwgMCB8fCBpZHggPiB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgUG9seW1lci5mbHVzaCA/IFBvbHltZXIuZmx1c2goKSA6IFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICAvLyBJdGVtcyBzaG91bGQgaGF2ZSBiZWVuIHJlbmRlcmVkIHByaW9yIHNjcm9sbGluZyB0byBhbiBpbmRleC5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlkeCA9IHRoaXMuX2NsYW1wKGlkeCwgMCwgdGhpcy5fdmlydHVhbENvdW50LTEpO1xuICAgICAgLy8gVXBkYXRlIHRoZSB2aXJ0dWFsIHN0YXJ0IG9ubHkgd2hlbiBuZWVkZWQuXG4gICAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpIHx8IGlkeCA+PSB0aGlzLl9tYXhWaXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5ncmlkID8gKGlkeCAtIHRoaXMuX2l0ZW1zUGVyUm93ICogMikgOiAoaWR4IC0gMSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgICB0aGlzLl91cGRhdGVNZXRyaWNzKCk7XG4gICAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSBNYXRoLmZsb29yKHRoaXMuX3ZpcnR1YWxTdGFydCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAgKiB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICAgIHZhciBjdXJyZW50VG9wSXRlbSA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICB2YXIgY3VycmVudFZpcnR1YWxJdGVtID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgdmFyIHRhcmdldE9mZnNldFRvcCA9IDA7XG4gICAgICB2YXIgaGlkZGVuQ29udGVudFNpemUgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZTtcbiAgICAgIC8vIHNjcm9sbCB0byB0aGUgaXRlbSBhcyBtdWNoIGFzIHdlIGNhbi5cbiAgICAgIHdoaWxlIChjdXJyZW50VmlydHVhbEl0ZW0gPCBpZHggJiYgdGFyZ2V0T2Zmc2V0VG9wIDw9IGhpZGRlbkNvbnRlbnRTaXplKSB7XG4gICAgICAgIHRhcmdldE9mZnNldFRvcCA9IHRhcmdldE9mZnNldFRvcCArIHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChjdXJyZW50VG9wSXRlbSk7XG4gICAgICAgIGN1cnJlbnRUb3BJdGVtID0gKGN1cnJlbnRUb3BJdGVtICsgMSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgICBjdXJyZW50VmlydHVhbEl0ZW0rKztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSh0cnVlKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24odGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQgKyB0YXJnZXRPZmZzZXRUb3ApO1xuICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoMCk7XG4gICAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcGh5c2ljYWwgYXZlcmFnZSBhbmQgdGhlIGF2ZXJhZ2UgY291bnQuXG4gICAgICovXG4gICAgX3Jlc2V0QXZlcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IHRyaWdnZXJlZCBieSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICAgICAqIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVzaXplZC5cbiAgICAgKi9cbiAgICBfcmVzaXplSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgICAgLy8gU2tpcCB0aGUgcmVzaXplIGV2ZW50IG9uIHRvdWNoIGRldmljZXMgd2hlbiB0aGUgYWRkcmVzcyBiYXIgc2xpZGVzIHVwLlxuICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLmFicyh0aGlzLl92aWV3cG9ydEhlaWdodCAtIHRoaXMuX3Njcm9sbFRhcmdldEhlaWdodCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1Zpc2libGUpIHtcbiAgICAgICAgICAvLyBSZWluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICAgIHRoaXMuX3Jlc2V0QXZlcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVuaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2Nyb2xsTGlzdGVuZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LCBBTklNQVRJT05fRlJBTUUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZWxlY3RJdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZWxlY3RJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICBtb2RlbFt0aGlzLnNlbGVjdGVkQXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4kLnNlbGVjdG9yLnNlbGVjdEluZGV4KSB7XG4gICAgICAgIC8vIHYyXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleChpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2MVxuICAgICAgICB0aGlzLiQuc2VsZWN0b3Iuc2VsZWN0KHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBkZXNlbGVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGRlc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVzZWxlY3RJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZGVzZWxlY3RJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIGRlc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdEluZGV4KSB7XG4gICAgICAgIC8vIHYyXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdEluZGV4KGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHYxXG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5kZXNlbGVjdCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGEgZ2l2ZW4gaXRlbSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgaXRlbVxuICAgICAqIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBvYmplY3QuXG4gICAgICovXG4gICAgdG9nZ2xlU2VsZWN0aW9uRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRvZ2dsZVNlbGVjdGlvbkZvckluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICovXG4gICAgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWRcbiAgICAgICAgICA/IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWQoaW5kZXgpIDogdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgICAgICBpc1NlbGVjdGVkID8gdGhpcy5kZXNlbGVjdEluZGV4KGluZGV4KSA6IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjbGVhclNlbGVjdGlvblxuICAgICAqL1xuICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kLnNlbGVjdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBgdGFwYCBpZiBgc2VsZWN0aW9uRW5hYmxlZGAgaXMgdHJ1ZSxcbiAgICAgKiBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIF9zZWxlY3Rpb25FbmFibGVkQ2hhbmdlZDogZnVuY3Rpb24oc2VsZWN0aW9uRW5hYmxlZCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSBzZWxlY3Rpb25FbmFibGVkID8gdGhpcy5saXN0ZW4gOiB0aGlzLnVubGlzdGVuO1xuICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHRoaXMsICd0YXAnLCAnX3NlbGVjdGlvbkhhbmRsZXInKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFuIGl0ZW0gZnJvbSBhbiBldmVudCBvYmplY3QuXG4gICAgICovXG4gICAgX3NlbGVjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1vZGVsVGFiSW5kZXgsIGFjdGl2ZUVsVGFiSW5kZXg7XG4gICAgICB2YXIgdGFyZ2V0ID0gUG9seW1lci5kb20oZSkucGF0aFswXTtcbiAgICAgIHZhciBpdGVtc0hvc3QgPSB0aGlzLl9pdGVtc1BhcmVudC5ub2RlLmRvbUhvc3Q7XG4gICAgICB2YXIgYWN0aXZlRWwgPSBQb2x5bWVyLmRvbShpdGVtc0hvc3QgPyBpdGVtc0hvc3Qucm9vdCA6IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50O1xuICAgICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChtb2RlbFt0aGlzLmluZGV4QXNdKV07XG4gICAgICAvLyBTYWZhcmkgZG9lcyBub3QgZm9jdXMgY2VydGFpbiBmb3JtIGNvbnRyb2xzIHZpYSBtb3VzZVxuICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExODA0M1xuICAgICAgaWYgKHRhcmdldC5sb2NhbE5hbWUgPT09ICdpbnB1dCcgfHxcbiAgICAgICAgICB0YXJnZXQubG9jYWxOYW1lID09PSAnYnV0dG9uJyB8fFxuICAgICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFNldCBhIHRlbXBvcmFyeSB0YWJpbmRleFxuICAgICAgbW9kZWxUYWJJbmRleCA9IG1vZGVsLnRhYkluZGV4O1xuICAgICAgbW9kZWwudGFiSW5kZXggPSBTRUNSRVRfVEFCSU5ERVg7XG4gICAgICBhY3RpdmVFbFRhYkluZGV4ID0gYWN0aXZlRWwgPyBhY3RpdmVFbC50YWJJbmRleCA6IC0xO1xuICAgICAgbW9kZWwudGFiSW5kZXggPSBtb2RlbFRhYkluZGV4O1xuICAgICAgLy8gT25seSBzZWxlY3QgdGhlIGl0ZW0gaWYgdGhlIHRhcCB3YXNuJ3Qgb24gYSBmb2N1c2FibGUgY2hpbGRcbiAgICAgIC8vIG9yIHRoZSBlbGVtZW50IGJvdW5kIHRvIGB0YWJJbmRleGBcbiAgICAgIGlmIChhY3RpdmVFbCAmJiBwaHlzaWNhbEl0ZW0gIT09IGFjdGl2ZUVsICYmIHBoeXNpY2FsSXRlbS5jb250YWlucyhhY3RpdmVFbCkgJiYgYWN0aXZlRWxUYWJJbmRleCAhPT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uRm9ySXRlbShtb2RlbFt0aGlzLmFzXSk7XG4gICAgfSxcblxuICAgIF9tdWx0aVNlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLiQuc2VsZWN0b3IubXVsdGkgPSBtdWx0aVNlbGVjdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiBhIGdpdmVuIGxpc3QgaXRlbS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdXBkYXRlU2l6ZUZvckl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB1cGRhdGVTaXplRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfSxcblxuICAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgICAqL1xuICAgIHVwZGF0ZVNpemVGb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmICghdGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBiYWNrZmlsbCBpdGVtIGluIHRoZSByZW5kZXJlZCBwb29sIG9mIHBoeXNpY2FsIGl0ZW1zXG4gICAgICogdG8gcmVwbGFjZSB0aGUgbWFpbiBmb2N1c2VkIGl0ZW0uIFRoZSBmb2N1c2VkIGl0ZW0gaGFzIHRhYkluZGV4ID0gMFxuICAgICAqIGFuZCBtaWdodCBiZSBjdXJyZW50bHkgZm9jdXNlZCBieSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIFRoaXMgZHluYW1pYyByZXBsYWNlbWVudCBoZWxwcyB0byBwcmVzZXJ2ZSB0aGUgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgX21hbmFnZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmaWR4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleDtcblxuICAgICAgaWYgKGZpZHggPj0gMCAmJiBmaWR4IDwgdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCBpbmRleCwgY2hlY2sgaWYgdGhhdCBpbmRleCBpcyByZW5kZXJlZFxuICAgICAgICAvLyBpbiBhIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoZmlkeCkpIHtcbiAgICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnR1YWxDb3VudCA+IDAgJiYgdGhpcy5fcGh5c2ljYWxDb3VudCA+IDApIHtcbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBhc3NpZ24gdGhlIGluaXRpYWwgZm9jdXNlZCBpbmRleC5cbiAgICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gdGhpcy5fdmlydHVhbFN0YXJ0O1xuICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fcGh5c2ljYWxTdGFydF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcmFuZG9tIGluZGV4IHRvIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IGNvbXBsZXRlcyBpdCdzIHJvdy5cbiAgICAgKiBBbGxvd3MgZm9yIGJldHRlciBvcmRlciBhbmQgZmlsbCBjb21wdXRhdGlvbiB3aGVuIGdyaWQgPT0gdHJ1ZS5cbiAgICAgKi9cbiAgICBfY29udmVydEluZGV4VG9Db21wbGV0ZVJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgICAvLyB3aGVuIGdyaWQgPT0gZmFsc2UgX2l0ZW1QZXJSb3cgY2FuIGJlIHVuc2V0LlxuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtc1BlclJvdyB8fCAxO1xuICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IE1hdGguY2VpbChpZHggLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9pdGVtc1BlclJvdyA6IGlkeDtcbiAgICB9LFxuXG4gICAgX2lzSW5kZXhSZW5kZXJlZDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gaWR4ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJiBpZHggPD0gdGhpcy5fdmlydHVhbEVuZDtcbiAgICB9LFxuXG4gICAgX2lzSW5kZXhWaXNpYmxlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiBpZHggPj0gdGhpcy5maXJzdFZpc2libGVJbmRleCAmJiBpZHggPD0gdGhpcy5sYXN0VmlzaWJsZUluZGV4O1xuICAgIH0sXG5cbiAgICBfZ2V0UGh5c2ljYWxJbmRleDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3BoeXNpY2FsU3RhcnQgKyAoaWR4IC0gdGhpcy5fdmlydHVhbFN0YXJ0KSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIH0sXG5cbiAgICBmb2N1c0l0ZW06IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oaWR4KTtcbiAgICB9LFxuXG4gICAgX2ZvY3VzUGh5c2ljYWxJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICAgIGlmICghdGhpcy5faXNJbmRleFJlbmRlcmVkKGlkeCkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGlkeCk7XG4gICAgICB9XG4gICAgICB2YXIgcGh5c2ljYWxJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGlkeCldO1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQocGh5c2ljYWxJdGVtKTtcbiAgICAgIHZhciBmb2N1c2FibGU7XG4gICAgICAvLyBzZXQgYSBzZWNyZXQgdGFiIGluZGV4XG4gICAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgICBpZiAocGh5c2ljYWxJdGVtLnRhYkluZGV4ID09PSBTRUNSRVRfVEFCSU5ERVgpIHtcbiAgICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgICB9XG4gICAgICAvLyBzZWFyY2ggZm9yIHRoZSBlbGVtZW50IHdoaWNoIHRhYmluZGV4IGlzIGJvdW5kIHRvIHRoZSBzZWNyZXQgdGFiIGluZGV4XG4gICAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgICBmb2N1c2FibGUgPSBQb2x5bWVyLmRvbShwaHlzaWNhbEl0ZW0pLnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleD1cIicgKyBTRUNSRVRfVEFCSU5ERVggKyAnXCJdJyk7XG4gICAgICB9XG4gICAgICAvLyByZXN0b3JlIHRoZSB0YWIgaW5kZXhcbiAgICAgIG1vZGVsLnRhYkluZGV4ID0gMDtcbiAgICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGlkeDtcbiAgICAgIGZvY3VzYWJsZSAmJiBmb2N1c2FibGUuZm9jdXMoKTtcbiAgICB9LFxuXG4gICAgX3JlbW92ZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlRm9jdXNCYWNrZmlsbEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBpbnN0LnJvb3QucXVlcnlTZWxlY3RvcignKicpO1xuICAgICAgICB0aGlzLl9pdGVtc1BhcmVudC5hcHBlbmRDaGlsZChpbnN0LnJvb3QpO1xuICAgICAgfVxuICAgICAgLy8gU2V0IHRoZSBvZmZjcmVlbiBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdO1xuICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pLnRhYkluZGV4ID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW07XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IGZwaWR4O1xuICAgICAgLy8gSGlkZSB0aGUgZm9jdXNlZCBwaHlzaWNhbC5cbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICB9LFxuXG4gICAgX3Jlc3RvcmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtIHx8IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEFzc2lnbiBtb2RlbHMgdG8gdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgICB0aGlzLl9hc3NpZ25Nb2RlbHMoKTtcbiAgICAgIC8vIEdldCB0aGUgbmV3IHBoeXNpY2FsIGluZGV4IGZvciB0aGUgZm9jdXNlZCBpbmRleC5cbiAgICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4O1xuXG4gICAgICB2YXIgb25TY3JlZW5JdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgICBpZiAoIW9uU2NyZWVuSXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb25TY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9uU2NyZWVuSXRlbSk7XG4gICAgICB2YXIgb2ZmU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgICAvLyBSZXN0b3JlcyB0aGUgcGh5c2ljYWwgaXRlbSBvbmx5IHdoZW4gaXQgaGFzIHRoZSBzYW1lIG1vZGVsXG4gICAgICAvLyBhcyB0aGUgb2Zmc2NyZWVuIG9uZS4gVXNlIGtleSBmb3IgY29tcGFyaXNvbiBzaW5jZSB1c2VycyBjYW4gc2V0XG4gICAgICAvLyBhIG5ldyBpdGVtIHZpYSBzZXQoJ2l0ZW1zLmlkeCcpLlxuICAgICAgaWYgKG9uU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10gPT09IG9mZlNjcmVlbkluc3RhbmNlW3RoaXMuYXNdKSB7XG4gICAgICAgIC8vIEZsaXAgdGhlIGZvY3VzIGJhY2tmaWxsLlxuICAgICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG9uU2NyZWVuSXRlbTtcbiAgICAgICAgb25TY3JlZW5JbnN0YW5jZS50YWJJbmRleCA9IC0xO1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW07XG4gICAgICAgIC8vIEhpZGUgdGhlIHBoeXNpY2FsIGl0ZW0gdGhhdCBiYWNrZmlsbHMuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB9LFxuXG4gICAgX2RpZEZvY3VzOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGFyZ2V0TW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgICB2YXIgZm9jdXNlZE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pO1xuICAgICAgdmFyIGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtID0gdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gIT09IG51bGw7XG4gICAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG4gICAgICBpZiAoIXRhcmdldE1vZGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChmb2N1c2VkTW9kZWwgPT09IHRhcmdldE1vZGVsKSB7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGZvY3VzZWQgdGhlIHNhbWUgaXRlbSwgdGhlbiBicmluZyBpdCBpbnRvIHZpZXcgaWYgaXQncyBub3QgdmlzaWJsZS5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0luZGV4VmlzaWJsZShmaWR4KSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChmaWR4KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICAgIC8vIFJlc3RvcmUgdGFiSW5kZXggZm9yIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtLlxuICAgICAgICBpZiAoZm9jdXNlZE1vZGVsKSB7XG4gICAgICAgICAgZm9jdXNlZE1vZGVsLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSB0YWJJbmRleCBmb3IgdGhlIG5leHQgZm9jdXNlZCBpdGVtLlxuICAgICAgICB0YXJnZXRNb2RlbC50YWJJbmRleCA9IDA7XG4gICAgICAgIGZpZHggPSB0YXJnZXRNb2RlbFt0aGlzLmluZGV4QXNdO1xuICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gZmlkeDtcbiAgICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGZpZHgpO1xuICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXhdO1xuICAgICAgICBpZiAoaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gJiYgIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2tleWRvd25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIC8qIEFSUk9XX0RPV04gKi8gNDA6XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogQVJST1dfUklHSFQgKi8gMzk6XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZCkgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IC0xIDogMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIC8qIEFSUk9XX1VQICovIDM4OlxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggLSAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogQVJST1dfTEVGVCAqLyAzNzpcbiAgICAgICAgICBpZiAodGhpcy5ncmlkKSB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuX2lzUlRMID8gMSA6IC0xKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogRU5URVIgKi8gMTM6XG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2KSk7XG4gICAgfSxcblxuICAgIF9kZWJvdW5jZTogZnVuY3Rpb24obmFtZSwgY2IsIGFzeW5jTW9kdWxlKSB7XG4gICAgICBpZiAoSVNfVjIpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VycyA9IHRoaXMuX2RlYm91bmNlcnMgfHwge307XG4gICAgICAgIHRoaXMuX2RlYm91bmNlcnNbbmFtZV0gPSBQb2x5bWVyLkRlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgICB0aGlzLl9kZWJvdW5jZXJzW25hbWVdLFxuICAgICAgICAgIGFzeW5jTW9kdWxlLFxuICAgICAgICAgIGNiLmJpbmQodGhpcykpO1xuICAgICAgICBQb2x5bWVyLmVucXVldWVEZWJvdW5jZXIodGhpcy5fZGVib3VuY2Vyc1tuYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQb2x5bWVyLmRvbS5hZGREZWJvdW5jZXIodGhpcy5kZWJvdW5jZShuYW1lLCBjYikpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZFByb3BlcnR5OiBmdW5jdGlvbihpbnN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKElTX1YyKSB7XG4gICAgICAgIGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MiAqL1xuICAgIF9mb3J3YXJkSG9zdFByb3BWMjogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pLmZvcndhcmRIb3N0UHJvcChwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX25vdGlmeUluc3RhbmNlUHJvcFYyOiBmdW5jdGlvbihpbnN0LCBwcm9wLCB2YWx1ZSkge1xuICAgICBpZiAoUG9seW1lci5QYXRoLm1hdGNoZXModGhpcy5hcywgcHJvcCkpIHtcbiAgICAgICAgdmFyIGlkeCA9IGluc3RbdGhpcy5pbmRleEFzXTtcbiAgICAgICAgaWYgKHByb3AgPT0gdGhpcy5hcykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaWR4XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5UGF0aChQb2x5bWVyLlBhdGgudHJhbnNsYXRlKHRoaXMuYXMsICdpdGVtcy4nICsgaWR4LCBwcm9wKSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjEgKi9cbiAgICBfZ2V0U3RhbXBlZENoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbEl0ZW1zO1xuICAgIH0sXG5cbiAgICBfZm9yd2FyZEluc3RhbmNlUGF0aDogZnVuY3Rpb24oaW5zdCwgcGF0aCwgdmFsdWUpIHtcbiAgICAgIGlmIChwYXRoLmluZGV4T2YodGhpcy5hcyArICcuJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKCdpdGVtcy4nICsgaW5zdC5fX2tleV9fICsgJy4nICtcbiAgICAgICAgICAgIHBhdGguc2xpY2UodGhpcy5hcy5sZW5ndGggKyAxKSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZm9yd2FyZFBhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5ub3RpZnlQYXRoKHBhdGgsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfZm9yd2FyZFBhcmVudFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1saXN0L2lyb24tbGlzdC5odG1sIiwiPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24taWNvbnMvaXJvbi1pY29ucy5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbFwiPlxuXG48IS0tXG4gIGBwYXBlci1hdXRvY29tcGxldGVgXG5cbiAgKipGcm9tIHYzLngueCwgdGhpcyBjb21wb25lbnQgb25seSB3b3JrcyB3aXRoIFBvbHltZXIgMS43KyBvciAyLjArLioqXG5cbiAgWyFbUHVibGlzaGVkIG9uIHdlYmNvbXBvbmVudHMub3JnXShodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL3dlYmNvbXBvbmVudHMub3JnLXB1Ymxpc2hlZC1ibHVlLnN2ZyldKGh0dHBzOi8vd3d3LndlYmNvbXBvbmVudHMub3JnL2VsZW1lbnQvZWxsaXB0aWNhbGpzL3BhcGVyLWF1dG9jb21wbGV0ZSlcblxuICBbIVtTYXVjZSBUZXN0IFN0YXR1c10oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2Jyb3dzZXItbWF0cml4L2podWVzb3Muc3ZnKV0oaHR0cHM6Ly9zYXVjZWxhYnMuY29tL3Uvamh1ZXNvcylcblxuICBwYXBlci1hdXRvY29tcGxldGUgZXh0ZW5kcyBlYXJsaWVyIGVmZm9ydHMgc3VjaCBhcyB0aGlzIChodHRwczovL2dpdGh1Yi5jb20vcm9kbzExMTEvcGFwZXItaW5wdXQtYXV0b2NvbXBsZXRlKVxuICB0byBwcm92aWRlIGtleWJvYXJkIHN1cHBvcnQsIHJlbW90ZSBiaW5kaW5nIGFuZCByZXN1bHRzIHNjcm9sbGluZy5cblxuICBJdCBpcyAqKmltcG9ydGFudCB0byBwcm92aWRlIGJvdGggYHRleHRQcm9wZXJ0eWAgYW5kIGB2YWx1ZVByb3BlcnR5YCB3aGVuIHdvcmtpbmcgd2l0aCBhIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24gYW5kXG4gIG9yIGN1c3RvbSB0ZW1wbGF0ZXMuKiogVGhleSBhcmUgbmVlZGVkIHRvIGtlZXAgdGhlIGNvbXBvbmVudCBhY2Nlc3NpYmxlIGFuZCBmb3IgdGhlIGV2ZW50cyAoZS5nLiBvblNlbGVjdCkgdG8ga2VlcFxuICB3b3JraW5nLlxuXG4gIFRvIGludGVncmF0ZSB3aXRoIGBpcm9uLWlucHV0YCwgeW91IG11c3Qgc2V0IHRoZSBgbmFtZWAgb3B0aW9uLiBUaGUgc2VsZWN0ZWQgYHZhbHVlYCB3aWxsIGJlIGV4cG9zZWQsICoqbm90KiogdGhlXG4gIGB0ZXh0YCB2YWx1ZSxcblxuICAjIyMgQWJvdXQgUG9seW1lciAxLnggYW5kIDIueCBDb21wYXRpYmlsaXR5XG4gIEZyb20gdmVyc2lvbiBgMy54LnhgLCB0aGlzIGNvbXBvbmVudCB3b3JrIHdpdGggYm90aCBQb2x5bWVyIDEuNysgb3IgUG9seW1lciAyLjArIFBsZWFzZSB0YWtlIGEgbG9vayB0byB0aGVcbiAgW01JR1JBVElPTi5tZF0oLi9NSUdSQVRJT04ubWQpIGZpbGUgdGhhdCBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICMjIyBDdXN0b20gc2VhcmNoXG4gIFRoaXMgY29tcG9uZW50IGhhcyB0aGUgcHVibGljIG1ldGhvZCBgcXVlcnlGbmAgdGhhdCBpcyBjYWxsZWQgaW4gZWFjaCBrZXkgc3Ryb2tlIGFuZCBpdCBpcyByZXNwb25zaWJsZSB0byBxdWVyeVxuICBhbGwgaXRlbXMgaW4gdGhlIGBzb3VyY2VgIGFuZCByZXR1cm5zIG9ubHkgdGhvc2UgaXRlbXMgdGhhdCBtYXRjaGVzIGNlcnRhaW4gZmlsdGVyaW5nIGNyaXRlcmlhLiBCeSBkZWZhdWx0LCB0aGlzXG4gIGNvbXBvbmVudCBzZWFyY2hlcyBmb3IgaXRlbXMgdGhhdCBzdGFydCB3aXRoIHRoZSByZWNlbnQgcXVlcnkgKGNhc2UgaW5zZW5zaXRpdmUpLlxuICBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgYmVoYXZpb3IgcHJvdmlkaW5nIHlvdXIgb3duIHF1ZXJ5IGZ1bmN0aW9uLCBhcyBsb25nIGFzIHRoZXNlIHR3byByZXF1aXJlbWVudHMgYXJlIGZ1bGZpbGxlZDpcbiAgLSBUaGUgcXVlcnkgZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuXG4gIC0gVGhlIEFQSSBpcyByZXNwZWN0ZWQgYW5kIHRoZSBtZXRob2QgYWx3YXlzIHJldHVybnMgYW4gQXJyYXkuXG4gIFRoZSB0ZW1wbGF0ZSB1c2VkIHRvIHJlbmRlciBlYWNoIHN1Z2dlc3Rpb24gZGVwZW5kcyBvbiB0aGUgc3RydWN0dXJlIG9mIGVhY2ggb2JqZWN0IHRoYXQgdGhpcyBtZXRob2QgcmV0dXJucy4gRm9yIHRoZVxuICBkZWZhdWx0IHRlbXBsYXRlLCBlYWNoIHN1Z2dlc3Rpb24gc2hvdWxkIGZvbGxvdyB0aGlzIG9iamVjdCBzdHJ1Y3R1cmU6XG4gIGBgYFxuICAgIHtcbiAgICAgIHRleHQ6IG9ialRleHQsXG4gICAgICB2YWx1ZTogb2JqVmFsdWVcbiAgICB9XG4gIGBgYFxuXG4gIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHdoZW4gYSBsb2NhbCBkYXRhIHNvdXJjZSBpcyB1c2VkLiBXaGVuIHVzaW5nIGEgYHJlbW90ZURhdGFTb3VyY2VgIHVzZXIgaXMgcmVzcG9uc2libGUgZm9yXG4gIGRvaW5nIHRoZSBzZWFyY2ggYW5kIHNwZWNpZnkgc3VnZ2VzdGlvbnMgbWFudWFsbHkuXG5cbiAgIyMjIEN1c3RvbSB0ZW1wbGF0ZXNcbiAgQSB0ZW1wbGF0ZSBmb3IgZWFjaCBzdWdnZXN0aW9uIGNhbiBiZSBwcm92aWRlZCwgYnV0IGZvciBub3csIHRoZXJlIGFyZSBsaW1pdGF0aW9ucyBpbiB0aGUgd2F5IHlvdSBjYW4gY3VzdG9taXplXG4gIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlLCByZWFkIHRoaXMgc2VjdGlvbiBjYXJlZnVsbHkgdG8ga25vdyB0aGVtLlxuICBJbiBvcmRlciB0byBzZXQgeW91ciBvd24gdGVtcGxhdGUsIHlvdSBuZWVkIHRvIGFkZCBhIGA8dGVtcGxhdGU+YCB0YWcgd2l0aCB0aGUgYXR0cmlidXRlXG4gIGBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlYCBhbmQgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbiAgYGBgaHRtbFxuICA8cGFwZXItYXV0b2NvbXBsZXRlPlxuICAgIDx0ZW1wbGF0ZSBhdXRvY29tcGxldGUtY3VzdG9tLXRlbXBsYXRlPlxuICAgICAgPHBhcGVyLWl0ZW0gb24tdGFwPVwiX29uU2VsZWN0XCIgaWQkPVwiW1tfZ2V0U3VnZ2VzdGlvbklkKGluZGV4KV1dXCIgcm9sZT1cIm9wdGlvblwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgLyoqIFN0eWxlcyBmb3IgeW91ciBjdXN0b20gdGVtcGxhdGUgaGVyZSAqKi9cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICBZT1VSIENVU1RPTSBURU1QTEFURVxuICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgPC9wYXBlci1pdGVtPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcGFwZXItYXV0b2NvbXBsZXRlPlxuICBgYGBcblxuICBZb3UgbmVlZCB0byBhbHdheXMgbWFpbnRhaW4gdGhpcyBzdHJ1Y3R1cmUuIFRoZW4geW91IGNhbiBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgcGFwZXItaXRlbS4gVGhlc2UgYXJlIHRoZSByZWFzb25zXG4gIHdoeSB5b3UgbmVlZCB0byBtYWludGFpbiBpdDpcblxuICAtIGBfb25TZWxlY3RgIGl0IGlzIHZlcnkgaW1wb3J0YW50IGJlY2F1c2UgaXQgd2lsbCBub3RpZnkgdGhlIGBhdXRvY29tcGxldGVgIGNvbXBvbmVudCB3aGVuIHVzZXIgc2VsZWN0cyBvbmUgaXRlbS5cbiAgSWYgeW91IGRvbid0IGFkZCB0aGlzIG9wdGlvbiwgd2hlbiB1c2VyIGNsaWNrcyBpbiBvbmUgb2YgdGhlIGl0ZW1zLCBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAtIGBpZGAsIGByb2xlYCBhbmQgYGFyaWEtc2VsZWN0ZWRgIG5lZWQgdG8gYmUgdGhlcmUgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucy4gSWYgeW91IGRvbid0IHNldCB0aGVtLCB0aGUgY29tcG9uZW50XG4gIHdpbGwgY29udGludWUgd29ya2luZyBidXQgaXQgd2lsbCBub3QgYmUgYWNjZXNzaWJsZSBmb3IgdXNlcnMgd2l0aCBkaXNhYmlsaXRpZXMuXG5cbiAgSXQgaXMgaW1wb3J0YW50IHRvIGNsYXJpZnkgdGhhdCBtZXRob2RzIGBfb25TZWxlY3RgIGFuZCBgX2dldFN1Z2dlc3Rpb25JZGAgZG8gbm90IG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQuIFRoZXkgYXJlXG4gIHBhcnQgb2YgdGhlIGxvZ2ljIG9mIGBwYXBlci1hdXRvY29tcGxldGVgLlxuXG4gIFdoZW4gcHJvdmlkaW5nIHlvdXIgb3duIGN1c3RvbSB0ZW1wbGF0ZSwgeW91IG1pZ2h0IGFsc28gbmVlZCB0byBwcm92aWRlIHlvdXIgb3duIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb24uIFRoZSByZWFzb25cbiAgZm9yIHRoYXQgaXMgdGhhdCB0aGUgZGVmYXVsdCBzZWFyY2ggZnVuY3Rpb24gb25seSBleHBvc2VzIHRleHQgYW5kIHZhbHVlIGluIHRoZSByZXN1bHRzLiBJZiBlYWNoIGl0ZW0gaW4geW91ciBkYXRhXG4gIHNvdXJjZSBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLCB0aGVuIHlvdSB3b24ndCBiZSBhYmxlIHRvIGFjY2VzcyBpdC4gU2VlIHRoZSBjb2RlIG9mIHRoZSBgPGFkZHJlc3MtYXV0b2NvbXBsZXRlPmBcbiAgZWxlbWVudCBpbiB0aGUgZGVtbyBmb2xkZXIgZm9yIGEgY29tcGxldGUgZXhhbXBsZS5cblxuICBBbm90aGVyIGltcG9ydGFudCB0aGluZyB0byBwb2ludCBvdXQgaXMgcmVsYXRlZCB0byB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGluIHRoZSByZXN1bHRzLiBUaGUgaGVpZ2h0IG9mXG4gIHRoZSBzdWdnZXN0aW9uIHRlbXBsYXRlIGNoYW5nZXMgZHluYW1pY2FsbHkgZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgb2YgYSBzdWdnZXN0aW9uIGl0ZW0uIEhvd2V2ZXIsIHRoZSBmb2xsb3dpbmdcbiAgYXNzdW1wdGlvbnMgd2VyZSBtYWRlOlxuICAtIEFsbCBzdWdnZXN0aW9ucyBpdGVtcyBoYXZlIHRoZSBzYW1lIGhlaWdodFxuICAtIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGlzIGZpeGVkIGFuZCBjYW4gYmUgZGV0ZXJtaW5lZCBhdCBhbnkgdGltZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHVzZSBpbWFnZXMgaW4gdGhlXG4gIHJlc3VsdHMsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgYSBwbGFjZWhvbGRlciBvciBhIGZpeGVkIGhlaWdodC5cblxuICAjIyMgU3R5bGluZ1xuXG4gIGA8cGFwZXItYXV0b2NvbXBsZXRlPmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zXG4gIGZvciBzdHlsaW5nOlxuXG4gIEN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuICAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuICBgLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3JgIHwgc2V0cyB0aGUgY29tcG9uZW50cyBpbnB1dCBjb250YWluZXIgZm9jdXMgY29sb3IgfCBgdmFyKC0tcHJpbWFyeS1jb2xvcilgXG4gIGAtLXBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1pdGVtLW1pbi1oZWlnaHRgIHwgbWluIGhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gaXRlbSB8IGAzNnB4YFxuICBgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtd3JhcHBlcmAgfCBtaXhpbiB0byBhcHBseSB0byB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyIHwgYHt9YFxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG5cbiAgVGhpcyBjb21wb25lbnQgaXMgZnJpZW5kbHkgd2l0aCBzY3JlZW4gcmVhZGVycyAodGVzdGVkIG9ubHkgd2l0aCBWb2ljZU92ZXIgYW5kIE5WREEgaW4gV2luZG93cyk6IGN1cnJlbnQgc2VsZWN0aW9uXG4gIGFuZCBhY3RpdmUgc3VnZ2VzdGlvbiBhcmUgYW5ub3VuY2VkLlxuXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWF1dG9jb21wbGV0ZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uOiB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyOiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtd3JhcHBlciBwYXBlci1pbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAjY2xlYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICAuc3Itb25seSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMge1xuICAgICAgICAtLXN1Z2dlc3Rpb25zLXdyYXBwZXI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMtd3JhcHBlcjtcbiAgICAgICAgfTtcblxuICAgICAgICAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodDogdmFyKC0tcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zLWl0ZW0tbWluLWhlaWdodCwgMzZweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCIgcm9sZT1cImNvbWJvYm94XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLW93bnM9XCJzdWdnZXN0aW9uc1dyYXBwZXJcIiBhcmlhLWV4cGFuZGVkJD1cIltbX2lzU3VnZ2VzdGlvbnNPcGVuZWRdXVwiPlxuICAgICAgPCEtLSBGb3IgYWNjZXNzaWJpbGl0eSwgaXQgaXMgbmVlZGVkIHRvIGhhdmUgYSBsYWJlbCBvciBhcmlhLWxhYmVsLiBMYWJlbCBpcyBwcmVmZXJyZWQgLS0+XG4gICAgICA8bGFiZWwgZm9yPVwiYXV0b2NvbXBsZXRlSW5wdXRcIiBjbGFzcz1cInNyLW9ubHlcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIEFkZGluZyBhIGhpZGRlbiBpbnB1dCB0byBpbnRlZ3JhdGUgd2l0aCBpcm9uLWZvcm0sIGlmIHJlcXVpcmVkIC0tPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lJD1cIltbbmFtZV1dXCIgdmFsdWUkPVwiW1t2YWx1ZV1dXCIgPlxuXG4gICAgICA8cGFwZXItaW5wdXQgaWQ9XCJhdXRvY29tcGxldGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiXG4gICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7e2Rpc2FibGVkfX1cIlxuICAgICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZSQ9XCJbW2Vycm9yTWVzc2FnZV1dXCJcbiAgICAgICAgICAgICAgICAgICByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiXG4gICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIltbcGF0dGVybl1dXCJcbiAgICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIlxuICAgICAgICAgICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbYWx3YXlzRmxvYXRMYWJlbF1dXCJcbiAgICAgICAgICAgICAgICAgICBjaGFyLWNvdW50ZXIkPVwiW1tjaGFyQ291bnRlcl1dXCJcbiAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIlxuXG4gICAgICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1tdWx0aWxpbmU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1hY3RpdmVkZXNjZW5kYW50JD1cIltbX2hpZ2hsaWdodGVkU3VnZ2VzdGlvbi5lbGVtZW50SWRdXVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJhdXRvY29tcGxldGVTdGF0dXMgc3VnZ2VzdGlvbnNXcmFwcGVyXCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICAgIDwhLS0gVE9ETzogcmVtb3ZlIHRhYmluZGV4IHdvcmthcm91bmQgd2hlbiAgaXMgZml4ZWQgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pbnB1dC9pc3N1ZXMvMzI0IC0tPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIHN1ZmZpeCBpZD1cImNsZWFyXCIgaWNvbj1cImNsZWFyXCIgb24tY2xpY2s9XCJfY2xlYXJcIiB0YWJpbmRleD1cIi0xXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPCEtLSB0byBhbm5vdW5jZSBjdXJyZW50IHNlbGVjdGlvbiB0byBzY3JlZW4gcmVhZGVyIC0tPlxuICAgICAgPHNwYW4gaWQ9XCJhdXRvY29tcGxldGVTdGF0dXNcIiByb2xlPVwic3RhdHVzXCIgY2xhc3M9XCJzci1vbmx5XCI+W1tfaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uLnRleHRWYWx1ZV1dPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyBmb3I9XCJhdXRvY29tcGxldGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWxlbmd0aD1cIltbbWluTGVuZ3RoXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1wcm9wZXJ0eT1cIltbdGV4dFByb3BlcnR5XV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJbW3ZhbHVlUHJvcGVydHldXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC1vcHRpb249XCJ7e19zZWxlY3RlZE9wdGlvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT1cIltbc291cmNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlLXNvdXJjZT1cIltbcmVtb3RlU291cmNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnktZm49XCJbW3F1ZXJ5Rm5dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC1uYW1lc3BhY2U9XCJbW2V2ZW50TmFtZXNwYWNlXV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQtc3VnZ2VzdGlvbj1cInt7X2hpZ2hsaWdodGVkU3VnZ2VzdGlvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW49XCJ7e19pc1N1Z2dlc3Rpb25zT3BlbmVkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LWZpcnN0PVwiW1toaWdobGlnaHRGaXJzdF1dXCI+XG5cbiAgICAgIDxzbG90IGlkPVwidGVtcGxhdGVzXCIgbmFtZT1cImF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVcIj48L3Nsb3Q+XG5cbiAgICA8L3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucz5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpcyBQb2x5ZmlsbCBpcyBuZWVkZWQgZm9yIHRoaXMgdmVyc2lvbiB0byB3b3JrIHdpdGggSUUxMSBhbmQgUG9seW1lciAxLnhcbiAgICAvLyBUT0RPOiBmaW5kIG91dCB3aHkgdGhpcyBpcyBuZWVkZWQgaW4gSUUxMVxuICAgIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXJndW1lbnQpIHtcbiAgICAgICAgICBhcmd1bWVudCA9IGFyZ3VtZW50IHx8IHdpbmRvdztcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChhcmd1bWVudCwgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAncGFwZXItYXV0b2NvbXBsZXRlJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogYGF1dG9WYWxpZGF0ZWAgU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgZXJyb3JNZXNzYWdlYCBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGludmFsaWQuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGxhYmVsYCBUZXh0IHRvIGRpc3BsYXkgYXMgdGhlIGlucHV0IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgbm9MYWJlbEZsb2F0YCBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICAgICAgICovXG4gICAgICAgIG5vTGFiZWxGbG9hdDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBhbHdheXNGbG9hdExhYmVsYCBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgZmxvYXQgbGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGxhY2Vob2xkZXIgdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHJlcXVpcmVkYCBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHNvdXJjZWAgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBvcHRpb25zIHRvIGV4ZWN1dGUgdGhlIGF1dG9jb21wbGV0ZSBmZWF0dXJlXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB0ZXh0IHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0UHJvcGVydHk6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0eSBvZiBsb2NhbCBkYXRhc291cmNlIHRvIGFzIHRoZSB2YWx1ZSBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdmFsdWVgIFNlbGVjdGVkIG9iamVjdCBmcm9tIHRoZSBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50L3NlbGVjdGVkIHRleHQgb2YgdGhlIGlucHV0XG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSBzaG93aW5nIHRoZSBjbGVhciBYIGJ1dHRvblxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNob3dDbGVhcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIHRvIGEgcmVtb3RlIGRhdGEgc291cmNlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGVTb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCB0eXBlIHNlcGFyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnROYW1lc3BhY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICctJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGxlbmd0aCB0byB0cmlnZ2VyIHN1Z2dlc3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHBhdHRlcm5gIFBhdHRlcm4gdG8gdmFsaWRhdGUgaW5wdXQgZmllbGRcbiAgICAgICAgICovXG4gICAgICAgIHBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWxsb3dlZFBhdHRlcm5gIGFsbG93ZWRQYXR0ZXJuIHRvIHZhbGlkYXRlIGlucHV0IGZpZWxkXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd2VkUGF0dGVybjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdG8gYHRydWVgIHRvIHNob3cgYSBjaGFyYWN0ZXIgY291bnRlci5cbiAgICAgICAgICovXG4gICAgICAgIGNoYXJDb3VudGVyOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIHRvIGJlIHVzZWQgYnkgdGhlIGF1dG9jb21wbGV0ZSBpbnB1dC4gVGhpcyBpcyBuZWNlc3NhcnkgaWYgd2FudGVkIHRvIGJlIGludGVncmF0ZWQgd2l0aCBpcm9uLWZvcm0uXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIGF2YWlsYWJsZSBpdGVtcy4gVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSB1c2VkIGJ5IHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyxcbiAgICAgICAgICogaXQgaXMgYWxzbyBleHBvc2VkIGhlcmUgc28gaXQgaXMgcG9zc2libGUgdG8gcHJvdmlkZSBhIGN1c3RvbSBxdWVyeUZuLlxuICAgICAgICAgKi9cbiAgICAgICAgcXVlcnlGbjoge1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgaXQgd2lsbCBhbHdheXMgaGlnaGxpZ2h0IHRoZSBmaXJzdCByZXN1bHQgZWFjaCB0aW1lIG5ldyBzdWdnZXN0aW9ucyBhcmUgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgIGhpZ2hsaWdodEZpcnN0OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKioqKioqKioqKioqKlxuICAgICAgICAqIFBSSVZBVEVcbiAgICAgICAgKioqKioqKioqKioqKi9cbiAgICAgICAgLy8gVE9ETzogY2hlY2sgaWYgd2UgbmVlZCBfdmFsdWUgYW5kIF90ZXh0IHByb3BlcnRpZXMuIEl0IHNlZW1zIHRoZXkgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgX3ZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIF90ZXh0OiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2xlYXIgYnV0dG9uIGlzIHZpc2libGUgb3Igbm90XG4gICAgICAgICAqL1xuICAgICAgICBfaXNDbGVhckJ1dHRvblZpc2libGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3VnZ2VzdGlvbiBwb3B1cCBpcyB2aXNpYmxlIG9yIG5vdC5cbiAgICAgICAgICovXG4gICAgICAgIF9pc1N1Z2dlc3Rpb25zT3BlbmVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfc2VsZWN0ZWRPcHRpb246IHtcbiAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb2JzZXJ2ZXJzOiBbXG4gICAgICAgICdfdGV4dE9ic2VydmVyKHRleHQpJ1xuICAgICAgXSxcblxuICAgICAgLy8gRWxlbWVudCBMaWZlY3ljbGVcbiAgICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2F1dG9jb21wbGV0ZScgKyB0aGlzLmV2ZW50TmFtZXNwYWNlICsgJ3NlbGVjdGVkJyxcbiAgICAgICAgICB0aGlzLl9vbkF1dG9jb21wbGV0ZVNlbGVjdGVkLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCB0ZXh0XG4gICAgICAgKi9cbiAgICAgIF9jbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICB0aGlzLl90ZXh0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ3Jlc2V0LWJsdXInKTtcblxuICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcblxuICAgICAgICAvLyBGaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzQ5M1xuICAgICAgICBpZiAoIXRoaXMuJC5hdXRvY29tcGxldGVJbnB1dC5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy4kLmF1dG9jb21wbGV0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGlzcGF0Y2hlcyBhdXRvY29tcGxldGUgZXZlbnRzXG4gICAgICAgKi9cbiAgICAgIF9maXJlRXZlbnQ6IGZ1bmN0aW9uIChvcHRpb24sIGV2dCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLl9nZXRJZCgpO1xuICAgICAgICB2YXIgZXZlbnQgPSAnYXV0b2NvbXBsZXRlJyArIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBldnQ7XG5cbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWUsXG4gICAgICAgICAgdGV4dDogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSB8fCBvcHRpb24udGV4dCxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIHRleHQgZXZlbnQgaGFuZGxlclxuICAgICAgICovXG4gICAgICBfdGV4dE9ic2VydmVyOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAodGV4dCAmJiB0ZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2hpZGVDbGVhckJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIGF1dG9jb21wbGV0ZSBzZWxlY3Rpb25cbiAgICAgICAqL1xuICAgICAgX29uQXV0b2NvbXBsZXRlU2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3Rpb24udmFsdWU7XG4gICAgICAgIHRoaXMudGV4dCA9IHNlbGVjdGlvbi50ZXh0O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTaG93IHRoZSBjbGVhciBidXR0b24gKFgpXG4gICAgICAgKi9cbiAgICAgIF9zaG93Q2xlYXJCdXR0b246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVNob3dDbGVhcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc0NsZWFyQnV0dG9uVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJC5jbGVhci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMuX2lzQ2xlYXJCdXR0b25WaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZSB0aGUgY2xlYXIgYnV0dG9uIChYKVxuICAgICAgICovXG4gICAgICBfaGlkZUNsZWFyQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQuY2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5faXNDbGVhckJ1dHRvblZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIF9nZXRJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKCFpZCkgaWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgKiBQVUJMSUNcbiAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdGV4dC92YWx1ZSBvcHRpb24gb2YgdGhlIGlucHV0XG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICBnZXRPcHRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB0aGUgY3VycmVudCB0ZXh0L3ZhbHVlIG9wdGlvbiBvZiB0aGUgaW5wdXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgICAgc2V0T3B0aW9uOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvblt0aGlzLnRleHRQcm9wZXJ0eV0gfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWU7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbigpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEaXNhYmxlcyB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRW5hYmxlcyB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB0aGUgY29tcG9uZW50J3MgY3VycmVudCBzdWdnZXN0aW9uc1xuICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICAgKi9cbiAgICAgIHN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHRoaXMuJC5wYXBlckF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25zLnN1Z2dlc3Rpb25zKGFycik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFZhbGlkYXRlcyB0aGUgaW5wdXRcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kLmF1dG9jb21wbGV0ZUlucHV0LnZhbGlkYXRlKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIENsZWFycyB0aGUgY3VycmVudCBpbnB1dFxuICAgICAgICovXG4gICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0cyB0aGUgY3VycmVudCBpbnB1dCAoREVQUkVDQVRFRDogcGxlYXNlIHVzZSBjbGVhcilcbiAgICAgICAqL1xuICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSGlkZXMgdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKi9cbiAgICAgIGhpZGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9oaWRlQ2xlYXJCdXR0b24oKTtcbiAgICAgICAgdGhpcy4kLnBhcGVyQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbnMuaGlkZVN1Z2dlc3Rpb25zKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFsbG93cyBjYWxsaW5nIHRoZSBvblNlbGVjdCBmdW5jdGlvbiBmcm9tIG91dHNpZGVcbiAgICAgICAqIFRoaXMgaW4gdGltZSB0cmlnZ2VycyB0aGUgYXV0b2NvbXBsZXRlLXNlbGVjdGVkIGV2ZW50XG4gICAgICAgKiB3aXRoIGFsbCB0aGUgZGF0YSByZXF1aXJlZFxuICAgICAgICovXG4gICAgICBvblNlbGVjdEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLiQucGFwZXJBdXRvY29tcGxldGVTdWdnZXN0aW9ucy5fb25TZWxlY3QoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtc2VsZWN0ZWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBjaGFuZ2VcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWNoYW5nZVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGZvY3VzXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1mb2N1c1xuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGJsdXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCByZXNldC9jbGVhclxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtcmVzZXQtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgIH0pO1xuICB9KCkpO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUuaHRtbCIsIlxucmVxdWlyZSgnLi4vaXJvbi1pY29uL2lyb24taWNvbi5odG1sJyk7XG5cbnJlcXVpcmUoJy4uL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnRvQm9keShcIjxpcm9uLWljb25zZXQtc3ZnIG5hbWU9aWNvbnMgc2l6ZT0yND4gPHN2Zz48ZGVmcz4gPGcgaWQ9M2Qtcm90YXRpb24+PHBhdGggZD1cXFwiTTcuNTIgMjEuNDhDNC4yNSAxOS45NCAxLjkxIDE2Ljc2IDEuNTUgMTNILjA1Qy41NiAxOS4xNiA1LjcxIDI0IDEyIDI0bC42Ni0uMDMtMy44MS0zLjgxLTEuMzMgMS4zMnptLjg5LTYuNTJjLS4xOSAwLS4zNy0uMDMtLjUyLS4wOC0uMTYtLjA2LS4yOS0uMTMtLjQtLjI0LS4xMS0uMS0uMi0uMjItLjI2LS4zNy0uMDYtLjE0LS4wOS0uMy0uMDktLjQ3aC0xLjNjMCAuMzYuMDcuNjguMjEuOTUuMTQuMjcuMzMuNS41Ni42OS4yNC4xOC41MS4zMi44Mi40MS4zLjEuNjIuMTUuOTYuMTUuMzcgMCAuNzItLjA1IDEuMDMtLjE1LjMyLS4xLjYtLjI1LjgzLS40NHMuNDItLjQzLjU1LS43MmMuMTMtLjI5LjItLjYxLjItLjk3IDAtLjE5LS4wMi0uMzgtLjA3LS41Ni0uMDUtLjE4LS4xMi0uMzUtLjIzLS41MS0uMS0uMTYtLjI0LS4zLS40LS40My0uMTctLjEzLS4zNy0uMjMtLjYxLS4zMS4yLS4wOS4zNy0uMi41Mi0uMzMuMTUtLjEzLjI3LS4yNy4zNy0uNDIuMS0uMTUuMTctLjMuMjItLjQ2LjA1LS4xNi4wNy0uMzIuMDctLjQ4IDAtLjM2LS4wNi0uNjgtLjE4LS45Ni0uMTItLjI4LS4yOS0uNTEtLjUxLS42OS0uMi0uMTktLjQ3LS4zMy0uNzctLjQzQzkuMSA4LjA1IDguNzYgOCA4LjM5IDhjLS4zNiAwLS42OS4wNS0xIC4xNi0uMy4xMS0uNTcuMjYtLjc5LjQ1LS4yMS4xOS0uMzguNDEtLjUxLjY3LS4xMi4yNi0uMTguNTQtLjE4Ljg1aDEuM2MwLS4xNy4wMy0uMzIuMDktLjQ1cy4xNC0uMjUuMjUtLjM0Yy4xMS0uMDkuMjMtLjE3LjM4LS4yMi4xNS0uMDUuMy0uMDguNDgtLjA4LjQgMCAuNy4xLjg5LjMxLjE5LjIuMjkuNDkuMjkuODYgMCAuMTgtLjAzLjM0LS4wOC40OS0uMDUuMTUtLjE0LjI3LS4yNS4zNy0uMTEuMS0uMjUuMTgtLjQxLjI0LS4xNi4wNi0uMzYuMDktLjU4LjA5SDcuNXYxLjAzaC43N2MuMjIgMCAuNDIuMDIuNi4wN3MuMzMuMTMuNDUuMjNjLjEyLjExLjIyLjI0LjI5LjQuMDcuMTYuMS4zNS4xLjU3IDAgLjQxLS4xMi43Mi0uMzUuOTMtLjIzLjIzLS41NS4zMy0uOTUuMzN6bTguNTUtNS45MmMtLjMyLS4zMy0uNy0uNTktMS4xNC0uNzctLjQzLS4xOC0uOTItLjI3LTEuNDYtLjI3SDEydjhoMi4zYy41NSAwIDEuMDYtLjA5IDEuNTEtLjI3LjQ1LS4xOC44NC0uNDMgMS4xNi0uNzYuMzItLjMzLjU3LS43My43NC0xLjE5LjE3LS40Ny4yNi0uOTkuMjYtMS41N3YtLjRjMC0uNTgtLjA5LTEuMS0uMjYtMS41Ny0uMTgtLjQ3LS40My0uODctLjc1LTEuMnptLS4zOSAzLjE2YzAgLjQyLS4wNS43OS0uMTQgMS4xMy0uMS4zMy0uMjQuNjItLjQzLjg1LS4xOS4yMy0uNDMuNDEtLjcxLjUzLS4yOS4xMi0uNjIuMTgtLjk5LjE4aC0uOTFWOS4xMmguOTdjLjcyIDAgMS4yNy4yMyAxLjY0LjY5LjM4LjQ2LjU3IDEuMTIuNTcgMS45OXYuNHpNMTIgMGwtLjY2LjAzIDMuODEgMy44MSAxLjMzLTEuMzNjMy4yNyAxLjU1IDUuNjEgNC43MiA1Ljk2IDguNDhoMS41QzIzLjQ0IDQuODQgMTguMjkgMCAxMiAwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWNjZXNzaWJpbGl0eT48cGF0aCBkPVxcXCJNMTIgMmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTkgN2gtNnYxM2gtMnYtNmgtMnY2SDlWOUgzVjdoMTh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY2Vzc2libGU+PGNpcmNsZSBjeD0xMiBjeT00IHI9Mj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTkgMTN2LTJjLTEuNTQuMDItMy4wOS0uNzUtNC4wNy0xLjgzbC0xLjI5LTEuNDNjLS4xNy0uMTktLjM4LS4zNC0uNjEtLjQ1LS4wMSAwLS4wMS0uMDEtLjAyLS4wMUgxM2MtLjM1LS4yLS43NS0uMy0xLjE5LS4yNkMxMC43NiA3LjExIDEwIDguMDQgMTAgOS4wOVYxNWMwIDEuMS45IDIgMiAyaDV2NWgydi01LjVjMC0xLjEtLjktMi0yLTJoLTN2LTMuNDVjMS4yOSAxLjA3IDMuMjUgMS45NCA1IDEuOTV6bS02LjE3IDVjLS40MSAxLjE2LTEuNTIgMi0yLjgzIDItMS42NiAwLTMtMS4zNC0zLTMgMC0xLjMxLjg0LTIuNDEgMi0yLjgzVjEyLjFjLTIuMjguNDYtNCAyLjQ4LTQgNC45IDAgMi43NiAyLjI0IDUgNSA1IDIuNDIgMCA0LjQ0LTEuNzIgNC45LTRoLTIuMDd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWJhbGFuY2U+PHBhdGggZD1cXFwiTTQgMTB2N2gzdi03SDR6bTYgMHY3aDN2LTdoLTN6TTIgMjJoMTl2LTNIMnYzem0xNC0xMnY3aDN2LTdoLTN6bS00LjUtOUwyIDZ2MmgxOVY2bC05LjUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtYmFsYW5jZS13YWxsZXQ+PHBhdGggZD1cXFwiTTIxIDE4djFjMCAxLjEtLjkgMi0yIDJINWMtMS4xMSAwLTItLjktMi0yVjVjMC0xLjEuODktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ2MWgtOWMtMS4xMSAwLTIgLjktMiAydjhjMCAxLjEuODkgMiAyIDJoOXptLTktMmgxMFY4SDEydjh6bTQtMi41Yy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFjY291bnQtYm94PjxwYXRoIGQ9XFxcIk0zIDV2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjExIDAtMiAuOS0yIDJ6bTEyIDRjMCAxLjY2LTEuMzQgMy0zIDNzLTMtMS4zNC0zLTMgMS4zNC0zIDMtMyAzIDEuMzQgMyAzem0tOSA4YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxSDZ2LTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hY2NvdW50LWNpcmNsZT48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkPjxwYXRoIGQ9XFxcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtYWxlcnQ+PHBhdGggZD1cXFwiTTEwLjAxIDIxLjAxYzAgMS4xLjg5IDEuOTkgMS45OSAxLjk5czEuOTktLjg5IDEuOTktMS45OWgtMy45OHptOC44Ny00LjE5VjExYzAtMy4yNS0yLjI1LTUuOTctNS4yOS02LjY5di0uNzJDMTMuNTkgMi43MSAxMi44OCAyIDEyIDJzLTEuNTkuNzEtMS41OSAxLjU5di43MkM3LjM3IDUuMDMgNS4xMiA3Ljc1IDUuMTIgMTF2NS44MkwzIDE4Ljk0VjIwaDE4di0xLjA2bC0yLjEyLTIuMTJ6TTE2IDEzLjAxaC0zdjNoLTJ2LTNIOFYxMWgzVjhoMnYzaDN2Mi4wMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0yIDEwaC00djRoLTJ2LTRIN3YtMmg0VjdoMnY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFkZC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWRkLWNpcmNsZS1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMyA3aC0ydjRIN3YyaDR2NGgydi00aDR2LTJoLTRWN3ptLTEtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hZGQtc2hvcHBpbmctY2FydD48cGF0aCBkPVxcXCJNMTEgOWgyVjZoM1Y0aC0zVjFoLTJ2M0g4djJoM3Yzem0tNCA5Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yem0xMCAwYy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMnptLTkuODMtMy4yNWwuMDMtLjEyLjktMS42M2g3LjQ1Yy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjg2LTcuMDFMMTkuNDIgNGgtLjAxbC0xLjEgMi0yLjc2IDVIOC41M2wtLjEzLS4yN0w2LjE2IDZsLS45NS0yLS45NC0ySDF2MmgybDMuNiA3LjU5LTEuMzUgMi40NWMtLjE2LjI4LS4yNS42MS0uMjUuOTYgMCAxLjEuOSAyIDIgMmgxMnYtMkg3LjQyYy0uMTMgMC0uMjUtLjExLS4yNS0uMjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybT48cGF0aCBkPVxcXCJNMjIgNS43MmwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTcuODggMy4zOUw2LjYgMS44NiAyIDUuNzFsMS4yOSAxLjUzIDQuNTktMy44NXpNMTIuNSA4SDExdjZsNC43NSAyLjg1Ljc1LTEuMjMtNC0yLjM3Vjh6TTEyIDRjLTQuOTcgMC05IDQuMDMtOSA5czQuMDIgOSA5IDljNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bTAgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tYWRkPjxwYXRoIGQ9XFxcIk03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek0xMiA0Yy00Ljk3IDAtOSA0LjAzLTkgOXM0LjAyIDkgOSA5YzQuOTcgMCA5LTQuMDMgOS05cy00LjAzLTktOS05em0wIDE2Yy0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03IDcgMy4xMyA3IDctMy4xMyA3LTcgN3ptMS0xMWgtMnYzSDh2MmgzdjNoMnYtM2gzdi0yaC0zVjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hbGFybS1vZmY+PHBhdGggZD1cXFwiTTEyIDZjMy44NyAwIDcgMy4xMyA3IDcgMCAuODQtLjE2IDEuNjUtLjQzIDIuNGwxLjUyIDEuNTJjLjU4LTEuMTkuOTEtMi41MS45MS0zLjkyIDAtNC45Ny00LjAzLTktOS05LTEuNDEgMC0yLjczLjMzLTMuOTIuOTFMOS42IDYuNDNDMTAuMzUgNi4xNiAxMS4xNiA2IDEyIDZ6bTEwLS4yOGwtNC42LTMuODYtMS4yOSAxLjUzIDQuNiAzLjg2TDIyIDUuNzJ6TTIuOTIgMi4yOUwxLjY1IDMuNTcgMi45OCA0LjlsLTEuMTEuOTMgMS40MiAxLjQyIDEuMTEtLjk0LjguOEMzLjgzIDguNjkgMyAxMC43NSAzIDEzYzAgNC45NyA0LjAyIDkgOSA5IDIuMjUgMCA0LjMxLS44MyA1Ljg5LTIuMmwyLjIgMi4yIDEuMjctMS4yN0wzLjg5IDMuMjdsLS45Ny0uOTh6bTEzLjU1IDE2LjFDMTUuMjYgMTkuMzkgMTMuNyAyMCAxMiAyMGMtMy44NyAwLTctMy4xMy03LTcgMC0xLjcuNjEtMy4yNiAxLjYxLTQuNDdsOS44NiA5Ljg2ek04LjAyIDMuMjhMNi42IDEuODZsLS44Ni43MSAxLjQyIDEuNDIuODYtLjcxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YWxhcm0tb24+PHBhdGggZD1cXFwiTTIyIDUuNzJsLTQuNi0zLjg2LTEuMjkgMS41MyA0LjYgMy44NkwyMiA1Ljcyek03Ljg4IDMuMzlMNi42IDEuODYgMiA1LjcxbDEuMjkgMS41MyA0LjU5LTMuODV6TTEyIDRjLTQuOTcgMC05IDQuMDMtOSA5czQuMDIgOSA5IDljNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bTAgMTZjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3em0tMS40Ni01LjQ3TDguNDEgMTIuNGwtMS4wNiAxLjA2IDMuMTggMy4xOCA2LTYtMS4wNi0xLjA2LTQuOTMgNC45NXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFsbC1vdXQ+PHBhdGggZD1cXFwiTTE2LjIxIDQuMTZsNCA0di00em00IDEybC00IDRoNHptLTEyIDRsLTQtNHY0em0tNC0xMmw0LTRoLTR6bTEyLjk1LS45NWMtMi43My0yLjczLTcuMTctMi43My05LjkgMHMtMi43MyA3LjE3IDAgOS45IDcuMTcgMi43MyA5LjkgMCAyLjczLTcuMTYgMC05Ljl6bS0xLjEgOC44Yy0yLjEzIDIuMTMtNS41NyAyLjEzLTcuNyAwcy0yLjEzLTUuNTcgMC03LjcgNS41Ny0yLjEzIDcuNyAwIDIuMTMgNS41NyAwIDcuN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFuZHJvaWQ+PHBhdGggZD1cXFwiTTYgMThjMCAuNTUuNDUgMSAxIDFoMXYzLjVjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41VjE5aDJ2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgxYy41NSAwIDEtLjQ1IDEtMVY4SDZ2MTB6TTMuNSA4QzIuNjcgOCAyIDguNjcgMiA5LjV2N2MwIC44My42NyAxLjUgMS41IDEuNVM1IDE3LjMzIDUgMTYuNXYtN0M1IDguNjcgNC4zMyA4IDMuNSA4em0xNyAwYy0uODMgMC0xLjUuNjctMS41IDEuNXY3YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNXYtN2MwLS44My0uNjctMS41LTEuNS0xLjV6bS00Ljk3LTUuODRsMS4zLTEuM2MuMi0uMi4yLS41MSAwLS43MS0uMi0uMi0uNTEtLjItLjcxIDBsLTEuNDggMS40OEMxMy44NSAxLjIzIDEyLjk1IDEgMTIgMWMtLjk2IDAtMS44Ni4yMy0yLjY2LjYzTDcuODUuMTVjLS4yLS4yLS41MS0uMi0uNzEgMC0uMi4yLS4yLjUxIDAgLjcxbDEuMzEgMS4zMUM2Ljk3IDMuMjYgNiA1LjAxIDYgN2gxMmMwLTEuOTktLjk3LTMuNzUtMi40Ny00Ljg0ek0xMCA1SDlWNGgxdjF6bTUgMGgtMVY0aDF2MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFubm91bmNlbWVudD48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDloLTJWNWgydjZ6bTAgNGgtMnYtMmgydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcHBzPjxwYXRoIGQ9XFxcIk00IDhoNFY0SDR2NHptNiAxMmg0di00aC00djR6bS02IDBoNHYtNEg0djR6bTAtNmg0di00SDR2NHptNiAwaDR2LTRoLTR2NHptNi0xMHY0aDRWNGgtNHptLTYgNGg0VjRoLTR2NHptNiA2aDR2LTRoLTR2NHptMCA2aDR2LTRoLTR2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFyY2hpdmU+PHBhdGggZD1cXFwiTTIwLjU0IDUuMjNsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNi41NUwzLjQ2IDUuMjNDMy4xNyA1LjU3IDMgNi4wMiAzIDYuNVYxOWMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjYuNWMwLS40OC0uMTctLjkzLS40Ni0xLjI3ek0xMiAxNy41TDYuNSAxMkgxMHYtMmg0djJoMy41TDEyIDE3LjV6TTUuMTIgNWwuODEtMWgxMmwuOTQgMUg1LjEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctYmFjaz48cGF0aCBkPVxcXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRvd253YXJkPjxwYXRoIGQ9XFxcIk0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLWRvd24+PHBhdGggZD1cXFwiTTcgMTBsNSA1IDUtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFycm93LWRyb3AtZG93bi1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMTJsLTQtNGg4bC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1kcm9wLXVwPjxwYXRoIGQ9XFxcIk03IDE0bDUtNSA1IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hcnJvdy1mb3J3YXJkPjxwYXRoIGQ9XFxcIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXJyb3ctdXB3YXJkPjxwYXRoIGQ9XFxcIk00IDEybDEuNDEgMS40MUwxMSA3LjgzVjIwaDJWNy44M2w1LjU4IDUuNTlMMjAgMTJsLTgtOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3BlY3QtcmF0aW8+PHBhdGggZD1cXFwiTTE5IDEyaC0ydjNoLTN2Mmg1di01ek03IDloM1Y3SDV2NWgyVjl6bTE0LTZIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2Vzc21lbnQ+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yek05IDE3SDd2LTdoMnY3em00IDBoLTJWN2gydjEwem00IDBoLTJ2LTRoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudD48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTIgMTRIN3YtMmg3djJ6bTMtNEg3di0yaDEwdjJ6bTAtNEg3VjdoMTB2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtaW5kPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMCA0YzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptNiAxMkg2di0xLjRjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xVjE5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXNzaWdubWVudC1sYXRlPjxwYXRoIGQ9XFxcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS02IDE1aC0ydi0yaDJ2MnptMC00aC0yVjhoMnY2em0tMS05Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXJldHVybj48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTQgMTJoLTR2M2wtNS01IDUtNXYzaDR2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWFzc2lnbm1lbnQtcmV0dXJuZWQ+PHBhdGggZD1cXFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0wIDE1bC01LTVoM1Y5aDR2NGgzbC01IDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hc3NpZ25tZW50LXR1cm5lZC1pbj48cGF0aCBkPVxcXCJNMTkgM2gtNC4xOEMxNC40IDEuODQgMTMuMyAxIDEyIDFjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bS0yIDE0bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1hdHRhY2htZW50PjxwYXRoIGQ9XFxcIk0yIDEyLjVDMiA5LjQ2IDQuNDYgNyA3LjUgN0gxOGMyLjIxIDAgNCAxLjc5IDQgNHMtMS43OSA0LTQgNEg5LjVDOC4xMiAxNSA3IDEzLjg4IDcgMTIuNVM4LjEyIDEwIDkuNSAxMEgxN3YySDkuNDFjLS41NSAwLS41NSAxIDAgMUgxOGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJINy41QzUuNTcgOSA0IDEwLjU3IDQgMTIuNVM1LjU3IDE2IDcuNSAxNkgxN3YySDcuNUM0LjQ2IDE4IDIgMTUuNTQgMiAxMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YXV0b3JlbmV3PjxwYXRoIGQ9XFxcIk0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iYWNrc3BhY2U+PHBhdGggZD1cXFwiTTIyIDNIN2MtLjY5IDAtMS4yMy4zNS0xLjU5Ljg4TDAgMTJsNS40MSA4LjExYy4zNi41My45Ljg5IDEuNTkuODloMTVjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTMgMTIuNTlMMTcuNTkgMTcgMTQgMTMuNDEgMTAuNDEgMTcgOSAxNS41OSAxMi41OSAxMiA5IDguNDEgMTAuNDEgNyAxNCAxMC41OSAxNy41OSA3IDE5IDguNDEgMTUuNDEgMTIgMTkgMTUuNTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1iYWNrdXA+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0IDkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDQgMi4zNCA4LjM2IDAgMTAuOTEgMCAxNGMwIDMuMzEgMi42OSA2IDYgNmgxM2MyLjc2IDAgNS0yLjI0IDUtNSAwLTIuNjQtMi4wNS00Ljc4LTQuNjUtNC45NnpNMTQgMTN2NGgtNHYtNEg3bDUtNSA1IDVoLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ibG9jaz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNNCAxMmMwLTQuNDIgMy41OC04IDgtOCAxLjg1IDAgMy41NS42MyA0LjkgMS42OUw1LjY5IDE2LjlDNC42MyAxNS41NSA0IDEzLjg1IDQgMTJ6bTggOGMtMS44NSAwLTMuNTUtLjYzLTQuOS0xLjY5TDE4LjMxIDcuMUMxOS4zNyA4LjQ1IDIwIDEwLjE1IDIwIDEyYzAgNC40Mi0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Ym9vaz48cGF0aCBkPVxcXCJNMTggMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgNGg1djhsLTIuNS0xLjVMNiAxMlY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Ym9va21hcms+PHBhdGggZD1cXFwiTTE3IDNIN2MtMS4xIDAtMS45OS45LTEuOTkgMkw1IDIxbDctMyA3IDNWNWMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWJvb2ttYXJrLWJvcmRlcj48cGF0aCBkPVxcXCJNMTcgM0g3Yy0xLjEgMC0xLjk5LjktMS45OSAyTDUgMjFsNy0zIDcgM1Y1YzAtMS4xLS45LTItMi0yem0wIDE1bC01LTIuMThMNyAxOFY1aDEwdjEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YnVnLXJlcG9ydD48cGF0aCBkPVxcXCJNMjAgOGgtMi44MWMtLjQ1LS43OC0xLjA3LTEuNDUtMS44Mi0xLjk2TDE3IDQuNDEgMTUuNTkgM2wtMi4xNyAyLjE3QzEyLjk2IDUuMDYgMTIuNDkgNSAxMiA1Yy0uNDkgMC0uOTYuMDYtMS40MS4xN0w4LjQxIDMgNyA0LjQxbDEuNjIgMS42M0M3Ljg4IDYuNTUgNy4yNiA3LjIyIDYuODEgOEg0djJoMi4wOWMtLjA1LjMzLS4wOS42Ni0uMDkgMXYxSDR2MmgydjFjMCAuMzQuMDQuNjcuMDkgMUg0djJoMi44MWMxLjA0IDEuNzkgMi45NyAzIDUuMTkgM3M0LjE1LTEuMjEgNS4xOS0zSDIwdi0yaC0yLjA5Yy4wNS0uMzMuMDktLjY2LjA5LTF2LTFoMnYtMmgtMnYtMWMwLS4zNC0uMDQtLjY3LS4wOS0xSDIwVjh6bS02IDhoLTR2LTJoNHYyem0wLTRoLTR2LTJoNHYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9YnVpbGQ+PHBhdGggZD1cXFwiTTIyLjcgMTlsLTkuMS05LjFjLjktMi4zLjQtNS0xLjUtNi45LTItMi01LTIuNC03LjQtMS4zTDkgNiA2IDkgMS42IDQuN0MuNCA3LjEuOSAxMC4xIDIuOSAxMi4xYzEuOSAxLjkgNC42IDIuNCA2LjkgMS41bDkuMSA5LjFjLjQuNCAxIC40IDEuNCAwbDIuMy0yLjNjLjUtLjQuNS0xLjEuMS0xLjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYWNoZWQ+PHBhdGggZD1cXFwiTTE5IDhsLTQgNGgzYzAgMy4zMS0yLjY5IDYtNiA2LTEuMDEgMC0xLjk3LS4yNS0yLjgtLjdsLTEuNDYgMS40NkM4Ljk3IDE5LjU0IDEwLjQzIDIwIDEyIDIwYzQuNDIgMCA4LTMuNTggOC04aDNsLTQtNHpNNiAxMmMwLTMuMzEgMi42OS02IDYtNiAxLjAxIDAgMS45Ny4yNSAyLjguN2wxLjQ2LTEuNDZDMTUuMDMgNC40NiAxMy41NyA0IDEyIDRjLTQuNDIgMC04IDMuNTgtOCA4SDFsNCA0IDQtNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FtZXJhLWVuaGFuY2U+PHBhdGggZD1cXFwiTTkgM0w3LjE3IDVINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDNIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtMWwxLjI1LTIuNzVMMTYgMTNsLTIuNzUtMS4yNUwxMiA5bC0xLjI1IDIuNzVMOCAxM2wyLjc1IDEuMjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYW5jZWw+PHBhdGggZD1cXFwiTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2FyZC1naWZ0Y2FyZD48cGF0aCBkPVxcXCJNMjAgNmgtMi4xOGMuMTEtLjMxLjE4LS42NS4xOC0xIDAtMS42Ni0xLjM0LTMtMy0zLTEuMDUgMC0xLjk2LjU0LTIuNSAxLjM1bC0uNS42Ny0uNS0uNjhDMTAuOTYgMi41NCAxMC4wNSAyIDkgMiA3LjM0IDIgNiAzLjM0IDYgNWMwIC4zNS4wNy42OS4xOCAxSDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTUtMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xek05IDRjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDUuMDhMNyAxMC44MyA4LjYyIDEyIDExIDguNzZsMS0xLjM2IDEgMS4zNkwxNS4zOCAxMiAxNyAxMC44MyAxNC45MiA4SDIwdjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jYXJkLW1lbWJlcnNoaXA+PHBhdGggZD1cXFwiTTIwIDJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMWMwIDEuMTEuODkgMiAyIDJoNHY1bDQtMiA0IDJ2LTVoNGMxLjExIDAgMi0uODkgMi0yVjRjMC0xLjExLS44OS0yLTItMnptMCAxM0g0di0yaDE2djJ6bTAtNUg0VjRoMTZ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNhcmQtdHJhdmVsPjxwYXRoIGQ9XFxcIk0yMCA2aC0zVjRjMC0xLjExLS44OS0yLTItMkg5Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6TTkgNGg2djJIOVY0em0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoM3YyaDJWOGg2djJoMlY4aDN2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoYW5nZS1oaXN0b3J5PjxwYXRoIGQ9XFxcIk0xMiA3Ljc3TDE4LjM5IDE4SDUuNjFMMTIgNy43N00xMiA0TDIgMjBoMjBMMTIgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrPjxwYXRoIGQ9XFxcIk05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNoZWNrLWJveD48cGF0aCBkPVxcXCJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjkgMi0yVjVjMC0xLjEtLjg5LTItMi0yem0tOSAxNGwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2hlY2stYm94LW91dGxpbmUtYmxhbms+PHBhdGggZD1cXFwiTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGVjay1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGV2cm9uLWxlZnQ+PHBhdGggZD1cXFwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jaGV2cm9uLXJpZ2h0PjxwYXRoIGQ9XFxcIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNocm9tZS1yZWFkZXItbW9kZT48cGF0aCBkPVxcXCJNMTMgMTJoN3YxLjVoLTd6bTAtMi41aDdWMTFoLTd6bTAgNWg3VjE2aC03ek0yMSA0SDNjLTEuMSAwLTIgLjktMiAydjEzYzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNWgtOVY2aDl2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbGFzcz48cGF0aCBkPVxcXCJNMTggMkg2Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTYgNGg1djhsLTIuNS0xLjVMNiAxMlY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xlYXI+PHBhdGggZD1cXFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3NlPjxwYXRoIGQ9XFxcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem00LjUgMTRIOGMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtM2wuMTQuMDFDOC41OCA4LjI4IDEwLjEzIDcgMTIgN2MyLjIxIDAgNCAxLjc5IDQgNGguNWMxLjM4IDAgMi41IDEuMTIgMi41IDIuNVMxNy44OCAxNiAxNi41IDE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y2xvdWQtZG9uZT48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xMCAxN2wtMy41LTMuNSAxLjQxLTEuNDFMMTAgMTQuMTcgMTUuMTggOWwxLjQxIDEuNDFMMTAgMTd6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1kb3dubG9hZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNyAxM2wtNSA1LTUtNWgzVjloNHY0aDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jbG91ZC1vZmY+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0Yy0xLjQ4IDAtMi44NS40My00LjAxIDEuMTdsMS40NiAxLjQ2QzEwLjIxIDYuMjMgMTEuMDggNiAxMiA2YzMuMDQgMCA1LjUgMi40NiA1LjUgNS41di41SDE5YzEuNjYgMCAzIDEuMzQgMyAzIDAgMS4xMy0uNjQgMi4xMS0xLjU2IDIuNjJsMS40NSAxLjQ1QzIzLjE2IDE4LjE2IDI0IDE2LjY4IDI0IDE1YzAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0zIDUuMjdsMi43NSAyLjc0QzIuNTYgOC4xNSAwIDEwLjc3IDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTEuNzNsMiAyTDIxIDIwLjczIDQuMjcgNCAzIDUuMjd6TTcuNzMgMTBsOCA4SDZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRoMS43M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLXF1ZXVlPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wNEMxOC42NyA2LjU5IDE1LjY0IDQgMTIgNCA5LjExIDQgNi42IDUuNjQgNS4zNSA4LjA0IDIuMzQgOC4zNiAwIDEwLjkxIDAgMTRjMCAzLjMxIDIuNjkgNiA2IDZoMTNjMi43NiAwIDUtMi4yNCA1LTUgMC0yLjY0LTIuMDUtNC43OC00LjY1LTQuOTZ6TTE5IDE4SDZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRoLjcxQzcuMzcgNy42OSA5LjQ4IDYgMTIgNmMzLjA0IDAgNS41IDIuNDYgNS41IDUuNXYuNUgxOWMxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNsb3VkLXVwbG9hZD48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvZGU+PHBhdGggZD1cXFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb21wYXJlLWFycm93cz48cGF0aCBkPVxcXCJNOS4wMSAxNEgydjJoNy4wMXYzTDEzIDE1bC0zLjk5LTR2M3ptNS45OC0xdi0zSDIyVjhoLTcuMDFWNUwxMSA5bDMuOTkgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNvbnRlbnQtY29weT48cGF0aCBkPVxcXCJNMTYgMUg0Yy0xLjEgMC0yIC45LTIgMnYxNGgyVjNoMTJWMXptMyA0SDhjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTFjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptMCAxNkg4VjdoMTF2MTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jb250ZW50LWN1dD48cGF0aCBkPVxcXCJNOS42NCA3LjY0Yy4yMy0uNS4zNi0xLjA1LjM2LTEuNjQgMC0yLjIxLTEuNzktNC00LTRTMiAzLjc5IDIgNnMxLjc5IDQgNCA0Yy41OSAwIDEuMTQtLjEzIDEuNjQtLjM2TDEwIDEybC0yLjM2IDIuMzZDNy4xNCAxNC4xMyA2LjU5IDE0IDYgMTRjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNGMwLS41OS0uMTMtMS4xNC0uMzYtMS42NEwxMiAxNGw3IDdoM3YtMUw5LjY0IDcuNjR6TTYgOGMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptMCAxMmMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptNi03LjVjLS4yOCAwLS41LS4yMi0uNS0uNXMuMjItLjUuNS0uNS41LjIyLjUuNS0uMjIuNS0uNS41ek0xOSAzbC02IDYgMiAyIDctN1YzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29udGVudC1wYXN0ZT48cGF0aCBkPVxcXCJNMTkgMmgtNC4xOEMxNC40Ljg0IDEzLjMgMCAxMiAwYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem03IDE4SDVWNGgydjNoMTBWNGgydjE2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Y29weXJpZ2h0PjxwYXRoIGQ9XFxcIk0xMC4wOCAxMC44NmMuMDUtLjMzLjE2LS42Mi4zLS44N3MuMzQtLjQ2LjU5LS42MmMuMjQtLjE1LjU0LS4yMi45MS0uMjMuMjMuMDEuNDQuMDUuNjMuMTMuMi4wOS4zOC4yMS41Mi4zNnMuMjUuMzMuMzQuNTMuMTMuNDIuMTQuNjRoMS43OWMtLjAyLS40Ny0uMTEtLjktLjI4LTEuMjlzLS40LS43My0uNy0xLjAxLS42Ni0uNS0xLjA4LS42Ni0uODgtLjIzLTEuMzktLjIzYy0uNjUgMC0xLjIyLjExLTEuNy4zNHMtLjg4LjUzLTEuMi45Mi0uNTYuODQtLjcxIDEuMzZTOCAxMS4yOSA4IDExLjg3di4yN2MwIC41OC4wOCAxLjEyLjIzIDEuNjRzLjM5Ljk3LjcxIDEuMzUuNzIuNjkgMS4yLjkxIDEuMDUuMzQgMS43LjM0Yy40NyAwIC45MS0uMDggMS4zMi0uMjNzLjc3LS4zNiAxLjA4LS42My41Ni0uNTguNzQtLjk0LjI5LS43NC4zLTEuMTVoLTEuNzljLS4wMS4yMS0uMDYuNC0uMTUuNThzLS4yMS4zMy0uMzYuNDYtLjMyLjIzLS41Mi4zYy0uMTkuMDctLjM5LjA5LS42LjEtLjM2LS4wMS0uNjYtLjA4LS44OS0uMjMtLjI1LS4xNi0uNDUtLjM3LS41OS0uNjJzLS4yNS0uNTUtLjMtLjg4LS4wOC0uNjctLjA4LTF2LS4yN2MwLS4zNS4wMy0uNjguMDgtMS4wMXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVhdGU+PHBhdGggZD1cXFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWNyZWF0ZS1uZXctZm9sZGVyPjxwYXRoIGQ9XFxcIk0yMCA2aC04bC0yLTJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMThjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tMSA4aC0zdjNoLTJ2LTNoLTN2LTJoM1Y5aDJ2M2gzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1jcmVkaXQtY2FyZD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2YzAtMS4xMS0uODktMi0yLTJ6bTAgMTRINHYtNmgxNnY2em0wLTEwSDRWNmgxNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGFzaGJvYXJkPjxwYXRoIGQ9XFxcIk0zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRhdGUtcmFuZ2U+PHBhdGggZD1cXFwiTTkgMTFIN3YyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTItN2gtMVYyaC0ydjJIOFYySDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY5aDE0djExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlPjxwYXRoIGQ9XFxcIk02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xIDFINXYyaDE0VjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kZWxldGUtZm9yZXZlcj48cGF0aCBkPVxcXCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyem0yLjQ2LTcuMTJsMS40MS0xLjQxTDEyIDEyLjU5bDIuMTItMi4xMiAxLjQxIDEuNDFMMTMuNDEgMTRsMi4xMiAyLjEyLTEuNDEgMS40MUwxMiAxNS40MWwtMi4xMiAyLjEyLTEuNDEtMS40MUwxMC41OSAxNGwtMi4xMy0yLjEyek0xNS41IDRsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZGVsZXRlLXN3ZWVwPjxwYXRoIGQ9XFxcIk0xNSAxNmg0djJoLTR6bTAtOGg3djJoLTd6bTAgNGg2djJoLTZ6TTMgMThjMCAxLjEuOSAyIDIgMmg2YzEuMSAwIDItLjkgMi0yVjhIM3YxMHpNMTQgNWgtM2wtMS0xSDZMNSA1SDJ2MmgxMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRlc2NyaXB0aW9uPjxwYXRoIGQ9XFxcIk0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bTIgMTZIOHYtMmg4djJ6bTAtNEg4di0yaDh2MnptLTMtNVYzLjVMMTguNSA5SDEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG5zPjxwYXRoIGQ9XFxcIk0yMCAxM0g0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xek03IDE5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpNMjAgM0g0Yy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxNmMuNTUgMCAxLS40NSAxLTFWNGMwLS41NS0uNDUtMS0xLTF6TTcgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb25lPjxwYXRoIGQ9XFxcIk05IDE2LjJMNC44IDEybC0xLjQgMS40TDkgMTkgMjEgN2wtMS40LTEuNEw5IDE2LjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1kb25lLWFsbD48cGF0aCBkPVxcXCJNMTggN2wtMS40MS0xLjQxLTYuMzQgNi4zNCAxLjQxIDEuNDFMMTggN3ptNC4yNC0xLjQxTDExLjY2IDE2LjE3IDcuNDggMTJsLTEuNDEgMS40MUwxMS42NiAxOWwxMi0xMi0xLjQyLTEuNDF6TS40MSAxMy40MUw2IDE5bDEuNDEtMS40MUwxLjgzIDEyIC40MSAxMy40MXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRvbnV0LWxhcmdlPjxwYXRoIGQ9XFxcIk0xMSA1LjA4VjJjLTUgLjUtOSA0LjgxLTkgMTBzNCA5LjUgOSAxMHYtMy4wOGMtMy0uNDgtNi0zLjQtNi02LjkyczMtNi40NCA2LTYuOTJ6TTE4Ljk3IDExSDIyYy0uNDctNS00LTguNTMtOS05djMuMDhDMTYgNS41MSAxOC41NCA4IDE4Ljk3IDExek0xMyAxOC45MlYyMmM1LS40NyA4LjUzLTQgOS05aC0zLjAzYy0uNDMgMy0yLjk3IDUuNDktNS45NyA1LjkyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZG9udXQtc21hbGw+PHBhdGggZD1cXFwiTTExIDkuMTZWMmMtNSAuNS05IDQuNzktOSAxMHM0IDkuNSA5IDEwdi03LjE2Yy0xLS40MS0yLTEuNTItMi0yLjg0czEtMi40MyAyLTIuODR6TTE0Ljg2IDExSDIyYy0uNDgtNC43NS00LTguNTMtOS05djcuMTZjMSAuMyAxLjUyLjk4IDEuODYgMS44NHpNMTMgMTQuODRWMjJjNS0uNDcgOC41Mi00LjI1IDktOWgtNy4xNGMtLjM0Ljg2LS44NiAxLjU0LTEuODYgMS44NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWRyYWZ0cz48cGF0aCBkPVxcXCJNMjEuOTkgOGMwLS43Mi0uMzctMS4zNS0uOTQtMS43TDEyIDEgMi45NSA2LjNDMi4zOCA2LjY1IDIgNy4yOCAyIDh2MTBjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMmwtLjAxLTEwek0xMiAxM0wzLjc0IDcuODQgMTIgM2w4LjI2IDQuODRMMTIgMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1lamVjdD48cGF0aCBkPVxcXCJNNSAxN2gxNHYySDV6bTctMTJMNS4zMyAxNWgxMy4zNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWVycm9yPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXJyb3Itb3V0bGluZT48cGF0aCBkPVxcXCJNMTEgMTVoMnYyaC0yem0wLThoMnY2aC0yem0uOTktNUM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXVyby1zeW1ib2w+PHBhdGggZD1cXFwiTTE1IDE4LjVjLTIuNTEgMC00LjY4LTEuNDItNS43Ni0zLjVIMTV2LTJIOC41OGMtLjA1LS4zMy0uMDgtLjY2LS4wOC0xcy4wMy0uNjcuMDgtMUgxNVY5SDkuMjRDMTAuMzIgNi45MiAxMi41IDUuNSAxNSA1LjVjMS42MSAwIDMuMDkuNTkgNC4yMyAxLjU3TDIxIDUuM0MxOS40MSAzLjg3IDE3LjMgMyAxNSAzYy0zLjkyIDAtNy4yNCAyLjUxLTguNDggNkgzdjJoMy4wNmMtLjA0LjMzLS4wNi42Ni0uMDYgMSAwIC4zNC4wMi42Ny4wNiAxSDN2MmgzLjUyYzEuMjQgMy40OSA0LjU2IDYgOC40OCA2IDIuMzEgMCA0LjQxLS44NyA2LTIuM2wtMS43OC0xLjc3Yy0xLjEzLjk4LTIuNiAxLjU3LTQuMjIgMS41N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2ZW50PjxwYXRoIGQ9XFxcIk0xNyAxMmgtNXY1aDV2LTV6TTE2IDF2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMmgtMVYxaC0yem0zIDE4SDVWOGgxNHYxMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV2ZW50LXNlYXQ+PHBhdGggZD1cXFwiTTQgMTh2M2gzdi0zaDEwdjNoM3YtNkg0em0xNS04aDN2M2gtM3pNMiAxMGgzdjNIMnptMTUgM0g3VjVjMC0xLjEuOS0yIDItMmg2YzEuMSAwIDIgLjkgMiAydjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leGl0LXRvLWFwcD48cGF0aCBkPVxcXCJNMTAuMDkgMTUuNTlMMTEuNSAxN2w1LTUtNS01LTEuNDEgMS40MUwxMi42NyAxMUgzdjJoOS42N2wtMi41OCAyLjU5ek0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnY0aDJWNWgxNHYxNEg1di00SDN2NGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhwYW5kLWxlc3M+PHBhdGggZD1cXFwiTTEyIDhsLTYgNiAxLjQxIDEuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZXhwYW5kLW1vcmU+PHBhdGggZD1cXFwiTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWV4cGxvcmU+PHBhdGggZD1cXFwiTTEyIDEwLjljLS42MSAwLTEuMS40OS0xLjEgMS4xcy40OSAxLjEgMS4xIDEuMWMuNjEgMCAxLjEtLjQ5IDEuMS0xLjFzLS40OS0xLjEtMS4xLTEuMXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMi4xOSAxMi4xOUw2IDE4bDMuODEtOC4xOUwxOCA2bC0zLjgxIDguMTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1leHRlbnNpb24+PHBhdGggZD1cXFwiTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmFjZT48cGF0aCBkPVxcXCJNOSAxMS43NWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6bTYgMGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVzLjU2IDEuMjUgMS4yNSAxLjI1IDEuMjUtLjU2IDEuMjUtMS4yNS0uNTYtMS4yNS0xLjI1LTEuMjV6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04IDAtLjI5LjAyLS41OC4wNS0uODYgMi4zNi0xLjA1IDQuMjMtMi45OCA1LjIxLTUuMzdDMTEuMDcgOC4zMyAxNC4wNSAxMCAxNy40MiAxMGMuNzggMCAxLjUzLS4wOSAyLjI1LS4yNi4yMS43MS4zMyAxLjQ3LjMzIDIuMjYgMCA0LjQxLTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mYXZvcml0ZT48cGF0aCBkPVxcXCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZhdm9yaXRlLWJvcmRlcj48cGF0aCBkPVxcXCJNMTYuNSAzYy0xLjc0IDAtMy40MS44MS00LjUgMi4wOUMxMC45MSAzLjgxIDkuMjQgMyA3LjUgMyA0LjQyIDMgMiA1LjQyIDIgOC41YzAgMy43OCAzLjQgNi44NiA4LjU1IDExLjU0TDEyIDIxLjM1bDEuNDUtMS4zMkMxOC42IDE1LjM2IDIyIDEyLjI4IDIyIDguNSAyMiA1LjQyIDE5LjU4IDMgMTYuNSAzem0tNC40IDE1LjU1bC0uMS4xLS4xLS4xQzcuMTQgMTQuMjQgNCAxMS4zOSA0IDguNSA0IDYuNSA1LjUgNSA3LjUgNWMxLjU0IDAgMy4wNC45OSAzLjU3IDIuMzZoMS44N0MxMy40NiA1Ljk5IDE0Ljk2IDUgMTYuNSA1YzIgMCAzLjUgMS41IDMuNSAzLjUgMCAyLjg5LTMuMTQgNS43NC03LjkgMTAuMDV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mZWVkYmFjaz48cGF0aCBkPVxcXCJNMjAgMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDEyaC0ydi0yaDJ2MnptMC00aC0yVjZoMnY0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsZS1kb3dubG9hZD48cGF0aCBkPVxcXCJNMTkgOWgtNFYzSDl2Nkg1bDcgNyA3LTd6TTUgMTh2MmgxNHYtMkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsZS11cGxvYWQ+PHBhdGggZD1cXFwiTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmlsdGVyLWxpc3Q+PHBhdGggZD1cXFwiTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmluZC1pbi1wYWdlPjxwYXRoIGQ9XFxcIk0yMCAxOS41OVY4bC02LTZINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4Yy40NSAwIC44NS0uMTUgMS4xOS0uNGwtNC40My00LjQzYy0uOC41Mi0xLjc0LjgzLTIuNzYuODMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1YzAgMS4wMi0uMzEgMS45Ni0uODMgMi43NUwyMCAxOS41OXpNOSAxM2MwIDEuNjYgMS4zNCAzIDMgM3MzLTEuMzQgMy0zLTEuMzQtMy0zLTMtMyAxLjM0LTMgM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpbmQtcmVwbGFjZT48cGF0aCBkPVxcXCJNMTEgNmMxLjM4IDAgMi42My41NiAzLjU0IDEuNDZMMTIgMTBoNlY0bC0yLjA1IDIuMDVDMTQuNjggNC43OCAxMi45MyA0IDExIDRjLTMuNTMgMC02LjQzIDIuNjEtNi45MiA2SDYuMWMuNDYtMi4yOCAyLjQ4LTQgNC45LTR6bTUuNjQgOS4xNGMuNjYtLjkgMS4xMi0xLjk3IDEuMjgtMy4xNEgxNS45Yy0uNDYgMi4yOC0yLjQ4IDQtNC45IDQtMS4zOCAwLTIuNjMtLjU2LTMuNTQtMS40NkwxMCAxMkg0djZsMi4wNS0yLjA1QzcuMzIgMTcuMjIgOS4wNyAxOCAxMSAxOGMxLjU1IDAgMi45OC0uNTEgNC4xNC0xLjM2TDIwIDIxLjQ5IDIxLjQ5IDIwbC00Ljg1LTQuODZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1maW5nZXJwcmludD48cGF0aCBkPVxcXCJNMTcuODEgNC40N2MtLjA4IDAtLjE2LS4wMi0uMjMtLjA2QzE1LjY2IDMuNDIgMTQgMyAxMi4wMSAzYy0xLjk4IDAtMy44Ni40Ny01LjU3IDEuNDEtLjI0LjEzLS41NC4wNC0uNjgtLjItLjEzLS4yNC0uMDQtLjU1LjItLjY4QzcuODIgMi41MiA5Ljg2IDIgMTIuMDEgMmMyLjEzIDAgMy45OS40NyA2LjAzIDEuNTIuMjUuMTMuMzQuNDMuMjEuNjctLjA5LjE4LS4yNi4yOC0uNDQuMjh6TTMuNSA5LjcyYy0uMSAwLS4yLS4wMy0uMjktLjA5LS4yMy0uMTYtLjI4LS40Ny0uMTItLjcuOTktMS40IDIuMjUtMi41IDMuNzUtMy4yN0M5Ljk4IDQuMDQgMTQgNC4wMyAxNy4xNSA1LjY1YzEuNS43NyAyLjc2IDEuODYgMy43NSAzLjI1LjE2LjIyLjExLjU0LS4xMi43LS4yMy4xNi0uNTQuMTEtLjctLjEyLS45LTEuMjYtMi4wNC0yLjI1LTMuMzktMi45NC0yLjg3LTEuNDctNi41NC0xLjQ3LTkuNC4wMS0xLjM2LjctMi41IDEuNy0zLjQgMi45Ni0uMDguMTQtLjIzLjIxLS4zOS4yMXptNi4yNSAxMi4wN2MtLjEzIDAtLjI2LS4wNS0uMzUtLjE1LS44Ny0uODctMS4zNC0xLjQzLTIuMDEtMi42NC0uNjktMS4yMy0xLjA1LTIuNzMtMS4wNS00LjM0IDAtMi45NyAyLjU0LTUuMzkgNS42Ni01LjM5czUuNjYgMi40MiA1LjY2IDUuMzljMCAuMjgtLjIyLjUtLjUuNXMtLjUtLjIyLS41LS41YzAtMi40Mi0yLjA5LTQuMzktNC42Ni00LjM5LTIuNTcgMC00LjY2IDEuOTctNC42NiA0LjM5IDAgMS40NC4zMiAyLjc3LjkzIDMuODUuNjQgMS4xNSAxLjA4IDEuNjQgMS44NSAyLjQyLjE5LjIuMTkuNTEgMCAuNzEtLjExLjEtLjI0LjE1LS4zNy4xNXptNy4xNy0xLjg1Yy0xLjE5IDAtMi4yNC0uMy0zLjEtLjg5LTEuNDktMS4wMS0yLjM4LTIuNjUtMi4zOC00LjM5IDAtLjI4LjIyLS41LjUtLjVzLjUuMjIuNS41YzAgMS40MS43MiAyLjc0IDEuOTQgMy41Ni43MS40OCAxLjU0LjcxIDIuNTQuNzEuMjQgMCAuNjQtLjAzIDEuMDQtLjEuMjctLjA1LjUzLjEzLjU4LjQxLjA1LjI3LS4xMy41My0uNDEuNTgtLjU3LjExLTEuMDcuMTItMS4yMS4xMnpNMTQuOTEgMjJjLS4wNCAwLS4wOS0uMDEtLjEzLS4wMi0xLjU5LS40NC0yLjYzLTEuMDMtMy43Mi0yLjEtMS40LTEuMzktMi4xNy0zLjI0LTIuMTctNS4yMiAwLTEuNjIgMS4zOC0yLjk0IDMuMDgtMi45NCAxLjcgMCAzLjA4IDEuMzIgMy4wOCAyLjk0IDAgMS4wNy45MyAxLjk0IDIuMDggMS45NHMyLjA4LS44NyAyLjA4LTEuOTRjMC0zLjc3LTMuMjUtNi44My03LjI1LTYuODMtMi44NCAwLTUuNDQgMS41OC02LjYxIDQuMDMtLjM5LjgxLS41OSAxLjc2LS41OSAyLjggMCAuNzguMDcgMi4wMS42NyAzLjYxLjEuMjYtLjAzLjU1LS4yOS42NC0uMjYuMS0uNTUtLjA0LS42NC0uMjktLjQ5LTEuMzEtLjczLTIuNjEtLjczLTMuOTYgMC0xLjIuMjMtMi4yOS42OC0zLjI0IDEuMzMtMi43OSA0LjI4LTQuNiA3LjUxLTQuNiA0LjU1IDAgOC4yNSAzLjUxIDguMjUgNy44MyAwIDEuNjItMS4zOCAyLjk0LTMuMDggMi45NHMtMy4wOC0xLjMyLTMuMDgtMi45NGMwLTEuMDctLjkzLTEuOTQtMi4wOC0xLjk0cy0yLjA4Ljg3LTIuMDggMS45NGMwIDEuNzEuNjYgMy4zMSAxLjg3IDQuNTEuOTUuOTQgMS44NiAxLjQ2IDMuMjcgMS44NS4yNy4wNy40Mi4zNS4zNS42MS0uMDUuMjMtLjI2LjM4LS40Ny4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZpcnN0LXBhZ2U+PHBhdGggZD1cXFwiTTE4LjQxIDE2LjU5TDEzLjgyIDEybDQuNTktNC41OUwxNyA2bC02IDYgNiA2ek02IDZoMnYxMkg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxhZz48cGF0aCBkPVxcXCJNMTQuNCA2TDE0IDRINXYxN2gydi03aDUuNmwuNCAyaDdWNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaWdodC1sYW5kPjxwYXRoIGQ9XFxcIk0yLjUgMTloMTl2MmgtMTl6bTcuMTgtNS43M2w0LjM1IDEuMTYgNS4zMSAxLjQyYy44LjIxIDEuNjItLjI2IDEuODQtMS4wNi4yMS0uOC0uMjYtMS42Mi0xLjA2LTEuODRsLTUuMzEtMS40Mi0yLjc2LTkuMDJMMTAuMTIgMnY4LjI4TDUuMTUgOC45NWwtLjkzLTIuMzItMS40NS0uMzl2NS4xN2wxLjYuNDMgNS4zMSAxLjQzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpZ2h0LXRha2VvZmY+PHBhdGggZD1cXFwiTTIuNSAxOWgxOXYyaC0xOXptMTkuNTctOS4zNmMtLjIxLS44LTEuMDQtMS4yOC0xLjg0LTEuMDZMMTQuOTIgMTBsLTYuOS02LjQzLTEuOTMuNTEgNC4xNCA3LjE3LTQuOTcgMS4zMy0xLjk3LTEuNTQtMS40NS4zOSAxLjgyIDMuMTYuNzcgMS4zMyAxLjYtLjQzIDUuMzEtMS40MiA0LjM1LTEuMTZMMjEgMTEuNDljLjgxLS4yMyAxLjI4LTEuMDUgMS4wNy0xLjg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZmxpcC10by1iYWNrPjxwYXRoIGQ9XFxcIk05IDdIN3YyaDJWN3ptMCA0SDd2Mmgydi0yem0wLThjLTEuMTEgMC0yIC45LTIgMmgyVjN6bTQgMTJoLTJ2Mmgydi0yem02LTEydjJoMmMwLTEuMS0uOS0yLTItMnptLTYgMGgtMnYyaDJWM3pNOSAxN3YtMkg3YzAgMS4xLjg5IDIgMiAyem0xMC00aDJ2LTJoLTJ2MnptMC00aDJWN2gtMnYyem0wIDhjMS4xIDAgMi0uOSAyLTJoLTJ2MnpNNSA3SDN2MTJjMCAxLjEuODkgMiAyIDJoMTJ2LTJINVY3em0xMC0yaDJWM2gtMnYyem0wIDEyaDJ2LTJoLTJ2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZsaXAtdG8tZnJvbnQ+PHBhdGggZD1cXFwiTTMgMTNoMnYtMkgzdjJ6bTAgNGgydi0ySDN2MnptMiA0di0ySDNjMCAxLjEuODkgMiAyIDJ6TTMgOWgyVjdIM3Yyem0xMiAxMmgydi0yaC0ydjJ6bTQtMThIOWMtMS4xMSAwLTIgLjktMiAydjEwYzAgMS4xLjg5IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTJIOVY1aDEwdjEwem0tOCA2aDJ2LTJoLTJ2MnptLTQgMGgydi0ySDd2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZvbGRlcj48cGF0aCBkPVxcXCJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb2xkZXItb3Blbj48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bTAgMTJINFY4aDE2djEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9sZGVyLXNoYXJlZD48cGF0aCBkPVxcXCJNMjAgNmgtOGwtMi0ySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bS01IDNjMS4xIDAgMiAuOSAyIDJzLS45IDItMiAyLTItLjktMi0yIC45LTIgMi0yem00IDhoLTh2LTFjMC0xLjMzIDIuNjctMiA0LTJzNCAuNjcgNCAydjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1mb250LWRvd25sb2FkPjxwYXRoIGQ9XFxcIk05LjkzIDEzLjVoNC4xNEwxMiA3Ljk4ek0yMCAySDRjLTEuMSAwLTIgLjktMiAydjE2YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTQuMDUgMTYuNWwtMS4xNC0zSDkuMTdsLTEuMTIgM0g1Ljk2bDUuMTEtMTNoMS44Nmw1LjExIDEzaC0yLjA5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zm9yd2FyZD48cGF0aCBkPVxcXCJNMTIgOFY0bDggOC04IDh2LTRINFY4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9ZnVsbHNjcmVlbj48cGF0aCBkPVxcXCJNNyAxNEg1djVoNXYtMkg3di0zem0tMi00aDJWN2gzVjVINXY1em0xMiA3aC0zdjJoNXYtNWgtMnYzek0xNCA1djJoM3YzaDJWNWgtNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWZ1bGxzY3JlZW4tZXhpdD48cGF0aCBkPVxcXCJNNSAxNmgzdjNoMnYtNUg1djJ6bTMtOEg1djJoNVY1SDh2M3ptNiAxMWgydi0zaDN2LTJoLTV2NXptMi0xMVY1aC0ydjVoNVY4aC0zelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Zy10cmFuc2xhdGU+PHBhdGggZD1cXFwiTTIwIDVoLTkuMTJMMTAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxM2MwIDEuMS45IDIgMiAyaDdsMSAzaDhjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnpNNy4xNyAxNC41OWMtMi4yNSAwLTQuMDktMS44My00LjA5LTQuMDlzMS44My00LjA5IDQuMDktNC4wOWMxLjA0IDAgMS45OS4zNyAyLjc0IDEuMDdsLjA3LjA2LTEuMjMgMS4xOC0uMDYtLjA1Yy0uMjktLjI3LS43OC0uNTktMS41Mi0uNTktMS4zMSAwLTIuMzggMS4wOS0yLjM4IDIuNDJzMS4wNyAyLjQyIDIuMzggMi40MmMxLjM3IDAgMS45Ni0uODcgMi4xMi0xLjQ2SDcuMDhWOS45MWgzLjk1bC4wMS4wN2MuMDQuMjEuMDUuNC4wNS42MSAwIDIuMzUtMS42MSA0LTMuOTIgNHptNi4wMy0xLjcxYy4zMy42Ljc0IDEuMTggMS4xOSAxLjdsLS41NC41My0uNjUtMi4yM3ptLjc3LS43NmgtLjk5bC0uMzEtMS4wNGgzLjk5cy0uMzQgMS4zMS0xLjU2IDIuNzRjLS41Mi0uNjItLjg5LTEuMjMtMS4xMy0xLjd6TTIxIDIwYzAgLjU1LS40NSAxLTEgMWgtN2wyLTItLjgxLTIuNzcuOTItLjkyTDE3Ljc5IDE4bC43My0uNzMtMi43MS0yLjY4Yy45LTEuMDMgMS42LTIuMjUgMS45Mi0zLjUxSDE5di0xLjA0aC0zLjY0VjloLTEuMDR2MS4wNGgtMS45NkwxMS4xOCA2SDIwYy41NSAwIDEgLjQ1IDEgMXYxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWdhdmVsPjxwYXRoIGQ9XFxcIk0xIDIxaDEydjJIMXpNNS4yNDUgOC4wN2wyLjgzLTIuODI3IDE0LjE0IDE0LjE0Mi0yLjgyOCAyLjgyOHpNMTIuMzE3IDFsNS42NTcgNS42NTYtMi44MyAyLjgzLTUuNjU0LTUuNjZ6TTMuODI1IDkuNDg1bDUuNjU3IDUuNjU3LTIuODI4IDIuODI4LTUuNjU3LTUuNjU3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2VzdHVyZT48cGF0aCBkPVxcXCJNNC41OSA2Ljg5Yy43LS43MSAxLjQtMS4zNSAxLjcxLTEuMjIuNS4yIDAgMS4wMy0uMyAxLjUyLS4yNS40Mi0yLjg2IDMuODktMi44NiA2LjMxIDAgMS4yOC40OCAyLjM0IDEuMzQgMi45OC43NS41NiAxLjc0LjczIDIuNjQuNDYgMS4wNy0uMzEgMS45NS0xLjQgMy4wNi0yLjc3IDEuMjEtMS40OSAyLjgzLTMuNDQgNC4wOC0zLjQ0IDEuNjMgMCAxLjY1IDEuMDEgMS43NiAxLjc5LTMuNzguNjQtNS4zOCAzLjY3LTUuMzggNS4zNyAwIDEuNyAxLjQ0IDMuMDkgMy4yMSAzLjA5IDEuNjMgMCA0LjI5LTEuMzMgNC42OS02LjFIMjF2LTIuNWgtMi40N2MtLjE1LTEuNjUtMS4wOS00LjItNC4wMy00LjItMi4yNSAwLTQuMTggMS45MS00Ljk0IDIuODQtLjU4LjczLTIuMDYgMi40OC0yLjI5IDIuNzItLjI1LjMtLjY4Ljg0LTEuMTEuODQtLjQ1IDAtLjcyLS44My0uMzYtMS45Mi4zNS0xLjA5IDEuNC0yLjg2IDEuODUtMy41Mi43OC0xLjE0IDEuMy0xLjkyIDEuMy0zLjI4QzguOTUgMy42OSA3LjMxIDMgNi40NCAzIDUuMTIgMyAzLjk3IDQgMy43MiA0LjI1Yy0uMzYuMzYtLjY2LjY2LS44OC45M2wxLjc1IDEuNzF6bTkuMjkgMTEuNjZjLS4zMSAwLS43NC0uMjYtLjc0LS43MiAwLS42LjczLTIuMiAyLjg3LTIuNzYtLjMgMi42OS0xLjQzIDMuNDgtMi4xMyAzLjQ4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2V0LWFwcD48cGF0aCBkPVxcXCJNMTkgOWgtNFYzSDl2Nkg1bDcgNyA3LTd6TTUgMTh2MmgxNHYtMkg1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z2lmPjxwYXRoIGQ9XFxcIk0xMS41IDlIMTN2NmgtMS41ek05IDlINmMtLjYgMC0xIC41LTEgMXY0YzAgLjUuNCAxIDEgMWgzYy42IDAgMS0uNSAxLTF2LTJIOC41djEuNWgtMnYtM0gxMFYxMGMwLS41LS40LTEtMS0xem0xMCAxLjVWOWgtNC41djZIMTZ2LTJoMnYtMS41aC0ydi0xelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z3JhZGU+PHBhdGggZD1cXFwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9Z3JvdXAtd29yaz48cGF0aCBkPVxcXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnpNOCAxNy41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpNOS41IDhjMC0xLjM4IDEuMTItMi41IDIuNS0yLjVzMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41UzkuNSA5LjM4IDkuNSA4em02LjUgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhlbHA+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGVscC1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGgyYzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAyLTMgMS43NS0zIDVoMmMwLTIuMjUgMy0yLjUgMy01IDAtMi4yMS0xLjc5LTQtNC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGlnaGxpZ2h0LW9mZj48cGF0aCBkPVxcXCJNMTQuNTkgOEwxMiAxMC41OSA5LjQxIDggOCA5LjQxIDEwLjU5IDEyIDggMTQuNTkgOS40MSAxNiAxMiAxMy40MSAxNC41OSAxNiAxNiAxNC41OSAxMy40MSAxMiAxNiA5LjQxIDE0LjU5IDh6TTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aGlzdG9yeT48cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aG9tZT48cGF0aCBkPVxcXCJNMTAgMjB2LTZoNHY2aDV2LThoM0wxMiAzIDIgMTJoM3Y4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aG91cmdsYXNzLWVtcHR5PjxwYXRoIGQ9XFxcIk02IDJ2NmguMDFMNiA4LjAxIDEwIDEybC00IDQgLjAxLjAxSDZWMjJoMTJ2LTUuOTloLS4wMUwxOCAxNmwtNC00IDQtMy45OS0uMDEtLjAxSDE4VjJINnptMTAgMTQuNVYyMEg4di0zLjVsNC00IDQgNHptLTQtNWwtNC00VjRoOHYzLjVsLTQgNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWhvdXJnbGFzcy1mdWxsPjxwYXRoIGQ9XFxcIk02IDJ2NmguMDFMNiA4LjAxIDEwIDEybC00IDQgLjAxLjAxSDZWMjJoMTJ2LTUuOTloLS4wMUwxOCAxNmwtNC00IDQtMy45OS0uMDEtLjAxSDE4VjJINnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWh0dHA+PHBhdGggZD1cXFwiTTQuNSAxMWgtMlY5SDF2NmgxLjV2LTIuNWgyVjE1SDZWOUg0LjV2MnptMi41LS41aDEuNVYxNUgxMHYtNC41aDEuNVY5SDd2MS41em01LjUgMEgxNFYxNWgxLjV2LTQuNUgxN1Y5aC00LjV2MS41em05LTEuNUgxOHY2aDEuNXYtMmgyYy44IDAgMS41LS43IDEuNS0xLjV2LTFjMC0uOC0uNy0xLjUtMS41LTEuNXptMCAyLjVoLTJ2LTFoMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aHR0cHM+PHBhdGggZD1cXFwiTTE4IDhoLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnptLTYgOWMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6bTMuMS05SDguOVY2YzAtMS43MSAxLjM5LTMuMSAzLjEtMy4xIDEuNzEgMCAzLjEgMS4zOSAzLjEgMy4xdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbXBvcnRhbnQtZGV2aWNlcz48cGF0aCBkPVxcXCJNMjMgMTEuMDFMMTggMTFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDVjLjU1IDAgMS0uNDUgMS0xdi05YzAtLjU1LS40NS0uOTktMS0uOTl6TTIzIDIwaC01di03aDV2N3pNMjAgMkgyQy44OSAyIDAgMi44OSAwIDR2MTJjMCAxLjEuODkgMiAyIDJoN3YySDd2Mmg4di0yaC0ydi0yaDJ2LTJIMlY0aDE4djVoMlY0YzAtMS4xMS0uOS0yLTItMnptLTguMDMgN0wxMSA2bC0uOTcgM0g3bDIuNDcgMS43Ni0uOTQgMi45MSAyLjQ3LTEuOCAyLjQ3IDEuOC0uOTQtMi45MUwxNSA5aC0zLjAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5ib3g+PHBhdGggZD1cXFwiTTE5IDNINC45OWMtMS4xMSAwLTEuOTguODktMS45OCAyTDMgMTljMCAxLjEuODggMiAxLjk5IDJIMTljMS4xIDAgMi0uOSAyLTJWNWMwLTEuMTEtLjktMi0yLTJ6bTAgMTJoLTRjMCAxLjY2LTEuMzUgMy0zIDNzLTMtMS4zNC0zLTNINC45OVY1SDE5djEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5kZXRlcm1pbmF0ZS1jaGVjay1ib3g+PHBhdGggZD1cXFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tMiAxMEg3di0yaDEwdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1pbmZvPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi02aDJ2NnptMC04aC0yVjdoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5mby1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xMSAxN2gydi02aC0ydjZ6bTEtMTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4ek0xMSA5aDJWN2gtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW5wdXQ+PHBhdGggZD1cXFwiTTIxIDMuMDFIM2MtMS4xIDAtMiAuOS0yIDJWOWgyVjQuOTloMTh2MTQuMDNIM1YxNUgxdjQuMDFjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOTh2LTE0YzAtMS4xMS0uOS0yLTItMnpNMTEgMTZsNC00LTQtNHYzSDF2MmgxMHYzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9aW52ZXJ0LWNvbG9ycz48cGF0aCBkPVxcXCJNMTcuNjYgNy45M0wxMiAyLjI3IDYuMzQgNy45M2MtMy4xMiAzLjEyLTMuMTIgOC4xOSAwIDExLjMxQzcuOSAyMC44IDkuOTUgMjEuNTggMTIgMjEuNThjMi4wNSAwIDQuMS0uNzggNS42Ni0yLjM0IDMuMTItMy4xMiAzLjEyLTguMTkgMC0xMS4zMXpNMTIgMTkuNTljLTEuNiAwLTMuMTEtLjYyLTQuMjQtMS43NkM2LjYyIDE2LjY5IDYgMTUuMTkgNiAxMy41OXMuNjItMy4xMSAxLjc2LTQuMjRMMTIgNS4xdjE0LjQ5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFiZWw+PHBhdGggZD1cXFwiTTE3LjYzIDUuODRDMTcuMjcgNS4zMyAxNi42NyA1IDE2IDVMNSA1LjAxQzMuOSA1LjAxIDMgNS45IDMgN3YxMGMwIDEuMS45IDEuOTkgMiAxLjk5TDE2IDE5Yy42NyAwIDEuMjctLjMzIDEuNjMtLjg0TDIyIDEybC00LjM3LTYuMTZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYWJlbC1vdXRsaW5lPjxwYXRoIGQ9XFxcIk0xNy42MyA1Ljg0QzE3LjI3IDUuMzMgMTYuNjcgNSAxNiA1TDUgNS4wMUMzLjkgNS4wMSAzIDUuOSAzIDd2MTBjMCAxLjEuOSAxLjk5IDIgMS45OUwxNiAxOWMuNjcgMCAxLjI3LS4zMyAxLjYzLS44NEwyMiAxMmwtNC4zNy02LjE2ek0xNiAxN0g1VjdoMTFsMy41NSA1TDE2IDE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGFuZ3VhZ2U+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTYuOTMgNmgtMi45NWMtLjMyLTEuMjUtLjc4LTIuNDUtMS4zOC0zLjU2IDEuODQuNjMgMy4zNyAxLjkxIDQuMzMgMy41NnpNMTIgNC4wNGMuODMgMS4yIDEuNDggMi41MyAxLjkxIDMuOTZoLTMuODJjLjQzLTEuNDMgMS4wOC0yLjc2IDEuOTEtMy45NnpNNC4yNiAxNEM0LjEgMTMuMzYgNCAxMi42OSA0IDEycy4xLTEuMzYuMjYtMmgzLjM4Yy0uMDguNjYtLjE0IDEuMzItLjE0IDIgMCAuNjguMDYgMS4zNC4xNCAySDQuMjZ6bS44MiAyaDIuOTVjLjMyIDEuMjUuNzggMi40NSAxLjM4IDMuNTYtMS44NC0uNjMtMy4zNy0xLjktNC4zMy0zLjU2em0yLjk1LThINS4wOGMuOTYtMS42NiAyLjQ5LTIuOTMgNC4zMy0zLjU2QzguODEgNS41NSA4LjM1IDYuNzUgOC4wMyA4ek0xMiAxOS45NmMtLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODJjLS40MyAxLjQzLTEuMDggMi43Ni0xLjkxIDMuOTZ6TTE0LjM0IDE0SDkuNjZjLS4wOS0uNjYtLjE2LTEuMzItLjE2LTIgMC0uNjguMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMiAwIC42OC0uMDcgMS4zNC0uMTYgMnptLjI1IDUuNTZjLjYtMS4xMSAxLjA2LTIuMzEgMS4zOC0zLjU2aDIuOTVjLS45NiAxLjY1LTIuNDkgMi45My00LjMzIDMuNTZ6TTE2LjM2IDE0Yy4wOC0uNjYuMTQtMS4zMi4xNC0yIDAtLjY4LS4wNi0xLjM0LS4xNC0yaDMuMzhjLjE2LjY0LjI2IDEuMzEuMjYgMnMtLjEgMS4zNi0uMjYgMmgtMy4zOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxhc3QtcGFnZT48cGF0aCBkPVxcXCJNNS41OSA3LjQxTDEwLjE4IDEybC00LjU5IDQuNTlMNyAxOGw2LTYtNi02ek0xNiA2aDJ2MTJoLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1sYXVuY2g+PHBhdGggZD1cXFwiTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGlnaHRidWxiLW91dGxpbmU+PHBhdGggZD1cXFwiTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjFsLS44NS42VjE2aC00di0yLjNsLS44NS0uNkM3LjggMTIuMTYgNyAxMC42MyA3IDljMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWMwIDEuNjMtLjggMy4xNi0yLjE1IDQuMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpbmUtc3R5bGU+PHBhdGggZD1cXFwiTTMgMTZoNXYtMkgzdjJ6bTYuNSAwaDV2LTJoLTV2MnptNi41IDBoNXYtMmgtNXYyek0zIDIwaDJ2LTJIM3Yyem00IDBoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6bTQgMGgydi0yaC0ydjJ6TTMgMTJoOHYtMkgzdjJ6bTEwIDBoOHYtMmgtOHYyek0zIDR2NGgxOFY0SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1saW5lLXdlaWdodD48cGF0aCBkPVxcXCJNMyAxN2gxOHYtMkgzdjJ6bTAgM2gxOHYtMUgzdjF6bTAtN2gxOHYtM0gzdjN6bTAtOXY0aDE4VjRIM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxpbms+PHBhdGggZD1cXFwiTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bGlzdD48cGF0aCBkPVxcXCJNMyAxM2gydi0ySDN2MnptMCA0aDJ2LTJIM3Yyem0wLThoMlY3SDN2MnptNCA0aDE0di0ySDd2MnptMCA0aDE0di0ySDd2MnpNNyA3djJoMTRWN0g3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG9jaz48cGF0aCBkPVxcXCJNMTggOGgtMVY2YzAtMi43Ni0yLjI0LTUtNS01UzcgMy4yNCA3IDZ2Mkg2Yy0xLjEgMC0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjEwYzAtMS4xLS45LTItMi0yem0tNiA5Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnptMy4xLTlIOC45VjZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjEgMS43MSAwIDMuMSAxLjM5IDMuMSAzLjF2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2stb3Blbj48cGF0aCBkPVxcXCJNMTIgMTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2aDEuOWMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYySDZjLTEuMSAwLTIgLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bTAgMTJINlYxMGgxMnYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPWxvY2stb3V0bGluZT48cGF0aCBkPVxcXCJNMTIgMTdjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgNyA2djJINmMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlYxMGMwLTEuMS0uOS0yLTItMnpNOC45IDZjMC0xLjcxIDEuMzktMy4xIDMuMS0zLjFzMy4xIDEuMzkgMy4xIDMuMXYySDguOVY2ek0xOCAyMEg2VjEwaDEydjEwelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG93LXByaW9yaXR5PjxwYXRoIGQ9XFxcIk0xNCA1aDh2MmgtOHptMCA1LjVoOHYyaC04em0wIDUuNWg4djJoLTh6TTIgMTEuNUMyIDE1LjA4IDQuOTIgMTggOC41IDE4SDl2MmwzLTMtMy0zdjJoLS41QzYuMDIgMTYgNCAxMy45OCA0IDExLjVTNi4wMiA3IDguNSA3SDEyVjVIOC41QzQuOTIgNSAyIDcuOTIgMiAxMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bG95YWx0eT48cGF0aCBkPVxcXCJNMjEuNDEgMTEuNThsLTktOUMxMi4wNSAyLjIyIDExLjU1IDIgMTEgMkg0Yy0xLjEgMC0yIC45LTIgMnY3YzAgLjU1LjIyIDEuMDUuNTkgMS40Mmw5IDljLjM2LjM2Ljg2LjU4IDEuNDEuNTguNTUgMCAxLjA1LS4yMiAxLjQxLS41OWw3LTdjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLS41NS0uMjMtMS4wNi0uNTktMS40MnpNNS41IDdDNC42NyA3IDQgNi4zMyA0IDUuNVM0LjY3IDQgNS41IDQgNyA0LjY3IDcgNS41IDYuMzMgNyA1LjUgN3ptMTEuNzcgOC4yN0wxMyAxOS41NGwtNC4yNy00LjI3QzguMjggMTQuODEgOCAxNC4xOSA4IDEzLjVjMC0xLjM4IDEuMTItMi41IDIuNS0yLjUuNjkgMCAxLjMyLjI4IDEuNzcuNzRsLjczLjcyLjczLS43M2MuNDUtLjQ1IDEuMDgtLjczIDEuNzctLjczIDEuMzggMCAyLjUgMS4xMiAyLjUgMi41IDAgLjY5LS4yOCAxLjMyLS43MyAxLjc3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bWFpbD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNS04LTVWNmw4IDUgOC01djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tYXJrdW5yZWFkPjxwYXRoIGQ9XFxcIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1hcmt1bnJlYWQtbWFpbGJveD48cGF0aCBkPVxcXCJNMjAgNkgxMHY2SDhWNGg2VjBINnY2SDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWOGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1lbnU+PHBhdGggZD1cXFwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1tb3JlLWhvcml6PjxwYXRoIGQ9XFxcIk02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW9yZS12ZXJ0PjxwYXRoIGQ9XFxcIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW1vdG9yY3ljbGU+PHBhdGggZD1cXFwiTTE5LjQ0IDkuMDNMMTUuNDEgNUgxMXYyaDMuNTlsMiAySDVjLTIuOCAwLTUgMi4yLTUgNXMyLjIgNSA1IDVjMi40NiAwIDQuNDUtMS42OSA0LjktNGgxLjY1bDIuNzctMi43N2MtLjIxLjU0LS4zMiAxLjE0LS4zMiAxLjc3IDAgMi44IDIuMiA1IDUgNXM1LTIuMiA1LTVjMC0yLjY1LTEuOTctNC43Ny00LjU2LTQuOTd6TTcuODIgMTVDNy40IDE2LjE1IDYuMjggMTcgNSAxN2MtMS42MyAwLTMtMS4zNy0zLTNzMS4zNy0zIDMtM2MxLjI4IDAgMi40Ljg1IDIuODIgMkg1djJoMi44MnpNMTkgMTdjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9bW92ZS10by1pbmJveD48cGF0aCBkPVxcXCJNMTkgM0g0Ljk5Yy0xLjExIDAtMS45OC45LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTJoLTRjMCAxLjY2LTEuMzUgMy0zIDNzLTMtMS4zNC0zLTNINC45OVY1SDE5djEwem0tMy01aC0yVjdoLTR2M0g4bDQgNCA0LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1uZXh0LXdlZWs+PHBhdGggZD1cXFwiTTIwIDdoLTRWNWMwLS41NS0uMjItMS4wNS0uNTktMS40MUMxNS4wNSAzLjIyIDE0LjU1IDMgMTQgM2gtNGMtMS4xIDAtMiAuOS0yIDJ2Mkg0Yy0xLjEgMC0yIC45LTIgMnYxMWMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjljMC0xLjEtLjktMi0yLTJ6TTEwIDVoNHYyaC00VjV6bTEgMTMuNWwtMS0xIDMtMy0zLTMgMS0xIDQgNC00IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1ub3RlLWFkZD48cGF0aCBkPVxcXCJNMTQgMkg2Yy0xLjEgMC0xLjk5LjktMS45OSAyTDQgMjBjMCAxLjEuODkgMiAxLjk5IDJIMThjMS4xIDAgMi0uOSAyLTJWOGwtNi02em0yIDE0aC0zdjNoLTJ2LTNIOHYtMmgzdi0zaDJ2M2gzdjJ6bS0zLTdWMy41TDE4LjUgOUgxM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9mZmxpbmUtcGluPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJzNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMFMxNy41IDIgMTIgMnptNSAxNkg3di0yaDEwdjJ6bS02LjctNEw3IDEwLjdsMS40LTEuNCAxLjkgMS45IDUuMy01LjNMMTcgNy4zIDEwLjMgMTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGFjaXR5PjxwYXRoIGQ9XFxcIk0xNy42NiA4TDEyIDIuMzUgNi4zNCA4QzQuNzggOS41NiA0IDExLjY0IDQgMTMuNjRzLjc4IDQuMTEgMi4zNCA1LjY3IDMuNjEgMi4zNSA1LjY2IDIuMzUgNC4xLS43OSA1LjY2LTIuMzVTMjAgMTUuNjQgMjAgMTMuNjQgMTkuMjIgOS41NiAxNy42NiA4ek02IDE0Yy4wMS0yIC42Mi0zLjI3IDEuNzYtNC40TDEyIDUuMjdsNC4yNCA0LjM4QzE3LjM4IDEwLjc3IDE3Ljk5IDEyIDE4IDE0SDZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1vcGVuLWluLWJyb3dzZXI+PHBhdGggZD1cXFwiTTE5IDRINWMtMS4xMSAwLTIgLjktMiAydjEyYzAgMS4xLjg5IDIgMiAyaDR2LTJINVY4aDE0djEwaC00djJoNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS44OS0yLTItMnptLTcgNmwtNCA0aDN2Nmgydi02aDNsLTQtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wZW4taW4tbmV3PjxwYXRoIGQ9XFxcIk0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPW9wZW4td2l0aD48cGF0aCBkPVxcXCJNMTAgOWg0VjZoM2wtNS01LTUgNWgzdjN6bS0xIDFINlY3bC01IDUgNSA1di0zaDN2LTR6bTE0IDJsLTUtNXYzaC0zdjRoM3YzbDUtNXptLTkgM2gtNHYzSDdsNSA1IDUtNWgtM3YtM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBhZ2V2aWV3PjxwYXRoIGQ9XFxcIk0xMS41IDlDMTAuMTIgOSA5IDEwLjEyIDkgMTEuNXMxLjEyIDIuNSAyLjUgMi41IDIuNS0xLjEyIDIuNS0yLjVTMTIuODggOSAxMS41IDl6TTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tMy4yMSAxNC4yMWwtMi45MS0yLjkxYy0uNjkuNDQtMS41MS43LTIuMzkuN0M5LjAxIDE2IDcgMTMuOTkgNyAxMS41UzkuMDEgNyAxMS41IDcgMTYgOS4wMSAxNiAxMS41YzAgLjg4LS4yNiAxLjY5LS43IDIuMzlsMi45MSAyLjktMS40MiAxLjQyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGFuLXRvb2w+PHBhdGggZD1cXFwiTTIzIDUuNVYyMGMwIDIuMi0xLjggNC00IDRoLTcuM2MtMS4wOCAwLTIuMS0uNDMtMi44NS0xLjE5TDEgMTQuODNzMS4yNi0xLjIzIDEuMy0xLjI1Yy4yMi0uMTkuNDktLjI5Ljc5LS4yOS4yMiAwIC40Mi4wNi42LjE2LjA0LjAxIDQuMzEgMi40NiA0LjMxIDIuNDZWNGMwLS44My42Ny0xLjUgMS41LTEuNVMxMSAzLjE3IDExIDR2N2gxVjEuNWMwLS44My42Ny0xLjUgMS41LTEuNVMxNSAuNjcgMTUgMS41VjExaDFWMi41YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41VjExaDFWNS41YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGF5bWVudD48cGF0aCBkPVxcXCJNMjAgNEg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2YzAtMS4xMS0uODktMi0yLTJ6bTAgMTRINHYtNmgxNnY2em0wLTEwSDRWNmgxNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1jYW1lcmEtbWljPjxwYXRoIGQ9XFxcIk0yMCA1aC0zLjE3TDE1IDNIOUw3LjE3IDVINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmg3di0yLjA5Yy0yLjgzLS40OC01LTIuOTQtNS01LjkxaDJjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNGgyYzAgMi45Ny0yLjE3IDUuNDMtNSA1LjkxVjIxaDdjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptLTYgOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJWOWMwLTEuMS45LTIgMi0yczIgLjkgMiAydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWNvbnRhY3QtY2FsZW5kYXI+PHBhdGggZD1cXFwiTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03IDNjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem02IDEySDZ2LTFjMC0yIDQtMy4xIDYtMy4xczYgMS4xIDYgMy4xdjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLWRhdGEtc2V0dGluZz48cGF0aCBkPVxcXCJNMTguOTkgMTEuNWMuMzQgMCAuNjcuMDMgMSAuMDdMMjAgMCAwIDIwaDExLjU2Yy0uMDQtLjMzLS4wNy0uNjYtLjA3LTEgMC00LjE0IDMuMzYtNy41IDcuNS03LjV6bTMuNzEgNy45OWMuMDItLjE2LjA0LS4zMi4wNC0uNDkgMC0uMTctLjAxLS4zMy0uMDQtLjQ5bDEuMDYtLjgzYy4wOS0uMDguMTItLjIxLjA2LS4zMmwtMS0xLjczYy0uMDYtLjExLS4xOS0uMTUtLjMxLS4xMWwtMS4yNC41Yy0uMjYtLjItLjU0LS4zNy0uODUtLjQ5bC0uMTktMS4zMmMtLjAxLS4xMi0uMTItLjIxLS4yNC0uMjFoLTJjLS4xMiAwLS4yMy4wOS0uMjUuMjFsLS4xOSAxLjMyYy0uMy4xMy0uNTkuMjktLjg1LjQ5bC0xLjI0LS41Yy0uMTEtLjA0LS4yNCAwLS4zMS4xMWwtMSAxLjczYy0uMDYuMTEtLjA0LjI0LjA2LjMybDEuMDYuODNjLS4wMi4xNi0uMDMuMzItLjAzLjQ5IDAgLjE3LjAxLjMzLjAzLjQ5bC0xLjA2LjgzYy0uMDkuMDgtLjEyLjIxLS4wNi4zMmwxIDEuNzNjLjA2LjExLjE5LjE1LjMxLjExbDEuMjQtLjVjLjI2LjIuNTQuMzcuODUuNDlsLjE5IDEuMzJjLjAyLjEyLjEyLjIxLjI1LjIxaDJjLjEyIDAgLjIzLS4wOS4yNS0uMjFsLjE5LTEuMzJjLjMtLjEzLjU5LS4yOS44NC0uNDlsMS4yNS41Yy4xMS4wNC4yNCAwIC4zMS0uMTFsMS0xLjczYy4wNi0uMTEuMDMtLjI0LS4wNi0uMzJsLTEuMDctLjgzem0tMy43MSAxLjAxYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0tZGV2aWNlLWluZm9ybWF0aW9uPjxwYXRoIGQ9XFxcIk0xMyA3aC0ydjJoMlY3em0wIDRoLTJ2Nmgydi02em00LTkuOTlMNyAxYy0xLjEgMC0yIC45LTIgMnYxOGMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjNjMC0xLjEtLjktMS45OS0yLTEuOTl6TTE3IDE5SDdWNWgxMHYxNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBlcm0taWRlbnRpdHk+PHBhdGggZD1cXFwiTTEyIDUuOWMxLjE2IDAgMi4xLjk0IDIuMSAyLjFzLS45NCAyLjEtMi4xIDIuMVM5LjkgOS4xNiA5LjkgOHMuOTQtMi4xIDIuMS0yLjFtMCA5YzIuOTcgMCA2LjEgMS40NiA2LjEgMi4xdjEuMUg1LjlWMTdjMC0uNjQgMy4xMy0yLjEgNi4xLTIuMU0xMiA0QzkuNzkgNCA4IDUuNzkgOCA4czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wIDljLTIuNjcgMC04IDEuMzQtOCA0djNoMTZ2LTNjMC0yLjY2LTUuMzMtNC04LTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLW1lZGlhPjxwYXRoIGQ9XFxcIk0yIDZIMHY1aC4wMUwwIDIwYzAgMS4xLjkgMiAyIDJoMTh2LTJIMlY2em0yMC0yaC04bC0yLTJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDE2YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnpNNyAxNWw0LjUtNiAzLjUgNC41MSAyLjUtMy4wMUwyMSAxNUg3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cGVybS1waG9uZS1tc2c+PHBhdGggZD1cXFwiTTIwIDE1LjVjLTEuMjUgMC0yLjQ1LS4yLTMuNTctLjU3LS4zNS0uMTEtLjc0LS4wMy0xLjAyLjI0bC0yLjIgMi4yYy0yLjgzLTEuNDQtNS4xNS0zLjc1LTYuNTktNi41OGwyLjItMi4yMWMuMjgtLjI3LjM2LS42Ni4yNS0xLjAxQzguNyA2LjQ1IDguNSA1LjI1IDguNSA0YzAtLjU1LS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDEgMCA5LjM5IDcuNjEgMTcgMTcgMTcgLjU1IDAgMS0uNDUgMS0xdi0zLjVjMC0uNTUtLjQ1LTEtMS0xek0xMiAzdjEwbDMtM2g2VjNoLTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wZXJtLXNjYW4td2lmaT48cGF0aCBkPVxcXCJNMTIgM0M2Ljk1IDMgMy4xNSA0Ljg1IDAgNy4yM0wxMiAyMiAyNCA3LjI1QzIwLjg1IDQuODcgMTcuMDUgMyAxMiAzem0xIDEzaC0ydi02aDJ2NnptLTItOFY2aDJ2MmgtMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBldHM+PGNpcmNsZSBjeD00LjUgY3k9OS41IHI9Mi41PjwvY2lyY2xlPjxjaXJjbGUgY3g9OSBjeT01LjUgcj0yLjU+PC9jaXJjbGU+PGNpcmNsZSBjeD0xNSBjeT01LjUgcj0yLjU+PC9jaXJjbGU+PGNpcmNsZSBjeD0xOS41IGN5PTkuNSByPTIuNT48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTcuMzQgMTQuODZjLS44Ny0xLjAyLTEuNi0xLjg5LTIuNDgtMi45MS0uNDYtLjU0LTEuMDUtMS4wOC0xLjc1LTEuMzItLjExLS4wNC0uMjItLjA3LS4zMy0uMDktLjI1LS4wNC0uNTItLjA0LS43OC0uMDRzLS41MyAwLS43OS4wNWMtLjExLjAyLS4yMi4wNS0uMzMuMDktLjcuMjQtMS4yOC43OC0xLjc1IDEuMzItLjg3IDEuMDItMS42IDEuODktMi40OCAyLjkxLTEuMzEgMS4zMS0yLjkyIDIuNzYtMi42MiA0Ljc5LjI5IDEuMDIgMS4wMiAyLjAzIDIuMzMgMi4zMi43My4xNSAzLjA2LS40NCA1LjU0LS40NGguMThjMi40OCAwIDQuODEuNTggNS41NC40NCAxLjMxLS4yOSAyLjA0LTEuMzEgMi4zMy0yLjMyLjMxLTIuMDQtMS4zLTMuNDktMi42MS00Ljh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1waWN0dXJlLWluLXBpY3R1cmU+PHBhdGggZD1cXFwiTTE5IDdoLTh2Nmg4Vjd6bTItNEgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OFY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OGgxOHYxNC4wM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBpY3R1cmUtaW4tcGljdHVyZS1hbHQ+PHBhdGggZD1cXFwiTTE5IDExaC04djZoOHYtNnptNCA4VjQuOThDMjMgMy44OCAyMi4xIDMgMjEgM0gzYy0xLjEgMC0yIC44OC0yIDEuOThWMTljMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnptLTIgLjAySDNWNC45N2gxOHYxNC4wNXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXBsYXktZm9yLXdvcms+PHBhdGggZD1cXFwiTTExIDV2NS41OUg3LjVsNC41IDQuNSA0LjUtNC41SDEzVjVoLTJ6bS01IDljMCAzLjMxIDIuNjkgNiA2IDZzNi0yLjY5IDYtNmgtMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNEg2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cG9seW1lcj48cGF0aCBkPVxcXCJNMTkgNGgtNEw3LjExIDE2LjYzIDQuNSAxMiA5IDRINUwuNSAxMiA1IDIwaDRsNy44OS0xMi42M0wxOS41IDEyIDE1IDIwaDRsNC41LTh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1wb3dlci1zZXR0aW5ncy1uZXc+PHBhdGggZD1cXFwiTTEzIDNoLTJ2MTBoMlYzem00LjgzIDIuMTdsLTEuNDIgMS40MkMxNy45OSA3Ljg2IDE5IDkuODEgMTkgMTJjMCAzLjg3LTMuMTMgNy03IDdzLTctMy4xMy03LTdjMC0yLjE5IDEuMDEtNC4xNCAyLjU4LTUuNDJMNi4xNyA1LjE3QzQuMjMgNi44MiAzIDkuMjYgMyAxMmMwIDQuOTcgNC4wMyA5IDkgOXM5LTQuMDMgOS05YzAtMi43NC0xLjIzLTUuMTgtMy4xNy02LjgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cHJlZ25hbnQtd29tYW4+PHBhdGggZD1cXFwiTTkgNGMwLTEuMTEuODktMiAyLTJzMiAuODkgMiAyLS44OSAyLTIgMi0yLS44OS0yLTJ6bTcgOWMtLjAxLTEuMzQtLjgzLTIuNTEtMi0zIDAtMS42Ni0xLjM0LTMtMy0zcy0zIDEuMzQtMyAzdjdoMnY1aDN2LTVoM3YtNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXByaW50PjxwYXRoIGQ9XFxcIk0xOSA4SDVjLTEuNjYgMC0zIDEuMzQtMyAzdjZoNHY0aDEydi00aDR2LTZjMC0xLjY2LTEuMzQtMy0zLTN6bS0zIDExSDh2LTVoOHY1em0zLTdjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXptLTEtOUg2djRoMTJWM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXF1ZXJ5LWJ1aWxkZXI+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptLjUtMTNIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXF1ZXN0aW9uLWFuc3dlcj48cGF0aCBkPVxcXCJNMjEgNmgtMnY5SDZ2MmMwIC41NS40NSAxIDEgMWgxMWw0IDRWN2MwLS41NS0uNDUtMS0xLTF6bS00IDZWM2MwLS41NS0uNDUtMS0xLTFIM2MtLjU1IDAtMSAuNDUtMSAxdjE0bDQtNGgxMGMuNTUgMCAxLS40NSAxLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYWRpby1idXR0b24tY2hlY2tlZD48cGF0aCBkPVxcXCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yYWRpby1idXR0b24tdW5jaGVja2VkPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlY2VpcHQ+PHBhdGggZD1cXFwiTTE4IDE3SDZ2LTJoMTJ2MnptMC00SDZ2LTJoMTJ2MnptMC00SDZWN2gxMnYyek0zIDIybDEuNS0xLjVMNiAyMmwxLjUtMS41TDkgMjJsMS41LTEuNUwxMiAyMmwxLjUtMS41TDE1IDIybDEuNS0xLjVMMTggMjJsMS41LTEuNUwyMSAyMlYybC0xLjUgMS41TDE4IDJsLTEuNSAxLjVMMTUgMmwtMS41IDEuNUwxMiAybC0xLjUgMS41TDkgMiA3LjUgMy41IDYgMiA0LjUgMy41IDMgMnYyMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlY29yZC12b2ljZS1vdmVyPjxjaXJjbGUgY3g9OSBjeT05IHI9ND48L2NpcmNsZT48cGF0aCBkPVxcXCJNOSAxNWMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHptNy43Ni05LjY0bC0xLjY4IDEuNjljLjg0IDEuMTguODQgMi43MSAwIDMuODlsMS42OCAxLjY5YzIuMDItMi4wMiAyLjAyLTUuMDcgMC03LjI3ek0yMC4wNyAybC0xLjYzIDEuNjNjMi43NyAzLjAyIDIuNzcgNy41NiAwIDEwLjc0TDIwLjA3IDE2YzMuOS0zLjg5IDMuOTEtOS45NSAwLTE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVkZWVtPjxwYXRoIGQ9XFxcIk0yMCA2aC0yLjE4Yy4xMS0uMzEuMTgtLjY1LjE4LTEgMC0xLjY2LTEuMzQtMy0zLTMtMS4wNSAwLTEuOTYuNTQtMi41IDEuMzVsLS41LjY3LS41LS42OEMxMC45NiAyLjU0IDEwLjA1IDIgOSAyIDcuMzQgMiA2IDMuMzQgNiA1YzAgLjM1LjA3LjY5LjE4IDFINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMTljMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yem0tNS0yYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6TTkgNGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoNS4wOEw3IDEwLjgzIDguNjIgMTIgMTEgOC43NmwxLTEuMzYgMSAxLjM2TDE1LjM4IDEyIDE3IDEwLjgzIDE0LjkyIDhIMjB2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZG8+PHBhdGggZD1cXFwiTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlZnJlc2g+PHBhdGggZD1cXFwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVtb3ZlPjxwYXRoIGQ9XFxcIk0xOSAxM0g1di0yaDE0djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtY2lyY2xlPjxwYXRoIGQ9XFxcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExSDd2LTJoMTB2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlbW92ZS1jaXJjbGUtb3V0bGluZT48cGF0aCBkPVxcXCJNNyAxMXYyaDEwdi0ySDd6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZW1vdmUtc2hvcHBpbmctY2FydD48cGF0aCBkPVxcXCJNMjIuNzMgMjIuNzNMMi43NyAyLjc3IDIgMmwtLjczLS43M0wwIDIuNTRsNC4zOSA0LjM5IDIuMjEgNC42Ni0xLjM1IDIuNDVjLS4xNi4yOC0uMjUuNjEtLjI1Ljk2IDAgMS4xLjkgMiAyIDJoNy40NmwxLjM4IDEuMzhjLS41LjM2LS44My45NS0uODMgMS42MiAwIDEuMS44OSAyIDEuOTkgMiAuNjcgMCAxLjI2LS4zMyAxLjYyLS44NEwyMS40NiAyNGwxLjI3LTEuMjd6TTcuNDIgMTVjLS4xNCAwLS4yNS0uMTEtLjI1LS4yNWwuMDMtLjEyLjktMS42M2gyLjM2bDIgMkg3LjQyem04LjEzLTJjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuNTgtNi40OWMuMDgtLjE0LjEyLS4zMS4xMi0uNDggMC0uNTUtLjQ1LTEtMS0xSDYuNTRsOS4wMSA5ek03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVvcmRlcj48cGF0aCBkPVxcXCJNMyAxNWgxOHYtMkgzdjJ6bTAgNGgxOHYtMkgzdjJ6bTAtOGgxOFY5SDN2MnptMC02djJoMThWNUgzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwbHk+PHBhdGggZD1cXFwiTTEwIDlWNWwtNyA3IDcgN3YtNC4xYzUgMCA4LjUgMS42IDExIDUuMS0xLTUtNC0xMC0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcGx5LWFsbD48cGF0aCBkPVxcXCJNNyA4VjVsLTcgNyA3IDd2LTNsLTQtNCA0LTR6bTYgMVY1bC03IDcgNyA3di00LjFjNSAwIDguNSAxLjYgMTEgNS4xLTEtNS00LTEwLTExLTExelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cmVwb3J0PjxwYXRoIGQ9XFxcIk0xNS43MyAzSDguMjdMMyA4LjI3djcuNDZMOC4yNyAyMWg3LjQ2TDIxIDE1LjczVjguMjdMMTUuNzMgM3pNMTIgMTcuM2MtLjcyIDAtMS4zLS41OC0xLjMtMS4zIDAtLjcyLjU4LTEuMyAxLjMtMS4zLjcyIDAgMS4zLjU4IDEuMyAxLjMgMCAuNzItLjU4IDEuMy0xLjMgMS4zem0xLTQuM2gtMlY3aDJ2NnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXJlcG9ydC1wcm9ibGVtPjxwYXRoIGQ9XFxcIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0b3JlPjxwYXRoIGQ9XFxcIk0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yZXN0b3JlLXBhZ2U+PHBhdGggZD1cXFwiTTE0IDJINmMtMS4xIDAtMS45OS45LTEuOTkgMkw0IDIwYzAgMS4xLjg5IDIgMS45OSAySDE4YzEuMSAwIDItLjkgMi0yVjhsLTYtNnptLTIgMTZjLTIuMDUgMC0zLjgxLTEuMjQtNC41OC0zaDEuNzFjLjYzLjkgMS42OCAxLjUgMi44NyAxLjUgMS45MyAwIDMuNS0xLjU3IDMuNS0zLjVTMTMuOTMgOS41IDEyIDkuNWMtMS4zNSAwLTIuNTIuNzgtMy4xIDEuOWwxLjYgMS42aC00VjlsMS4zIDEuM0M4LjY5IDguOTIgMTAuMjMgOCAxMiA4YzIuNzYgMCA1IDIuMjQgNSA1cy0yLjI0IDUtNSA1elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9cm9vbT48cGF0aCBkPVxcXCJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yb3VuZGVkLWNvcm5lcj48cGF0aCBkPVxcXCJNMTkgMTloMnYyaC0ydi0yem0wLTJoMnYtMmgtMnYyek0zIDEzaDJ2LTJIM3Yyem0wIDRoMnYtMkgzdjJ6bTAtOGgyVjdIM3Yyem0wLTRoMlYzSDN2MnptNCAwaDJWM0g3djJ6bTggMTZoMnYtMmgtMnYyem0tNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnptLTggMGgydi0ySDd2MnptLTQgMGgydi0ySDN2MnpNMjEgOGMwLTIuNzYtMi4yNC01LTUtNWgtNXYyaDVjMS42NSAwIDMgMS4zNSAzIDN2NWgyVjh6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1yb3dpbmc+PHBhdGggZD1cXFwiTTguNSAxNC41TDQgMTlsMS41IDEuNUw5IDE3aDJsLTIuNS0yLjV6TTE1IDFjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem02IDIwLjAxTDE4IDI0bC0yLjk5LTMuMDFWMTkuNWwtNy4xLTcuMDljLS4zMS4wNS0uNjEuMDctLjkxLjA3di0yLjE2YzEuNjYuMDMgMy42MS0uODcgNC42Ny0yLjA0bDEuNC0xLjU1Yy4xOS0uMjEuNDMtLjM4LjY5LS41LjI5LS4xNC42Mi0uMjMuOTYtLjIzaC4wM0MxNS45OSA2LjAxIDE3IDcuMDIgMTcgOC4yNnY1Ljc1YzAgLjg0LS4zNSAxLjYxLS45MiAyLjE2bC0zLjU4LTMuNTh2LTIuMjdjLS42My41Mi0xLjQzIDEuMDItMi4yOSAxLjM5TDE2LjUgMThIMThsMyAzLjAxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2F2ZT48cGF0aCBkPVxcXCJNMTcgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2wtNC00em0tNSAxNmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bTMtMTBINVY1aDEwdjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zY2hlZHVsZT48cGF0aCBkPVxcXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4em0uNS0xM0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VhcmNoPjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2VsZWN0LWFsbD48cGF0aCBkPVxcXCJNMyA1aDJWM2MtMS4xIDAtMiAuOS0yIDJ6bTAgOGgydi0ySDN2MnptNCA4aDJ2LTJIN3Yyek0zIDloMlY3SDN2MnptMTAtNmgtMnYyaDJWM3ptNiAwdjJoMmMwLTEuMS0uOS0yLTItMnpNNSAyMXYtMkgzYzAgMS4xLjkgMiAyIDJ6bS0yLTRoMnYtMkgzdjJ6TTkgM0g3djJoMlYzem0yIDE4aDJ2LTJoLTJ2MnptOC04aDJ2LTJoLTJ2MnptMCA4YzEuMSAwIDItLjkgMi0yaC0ydjJ6bTAtMTJoMlY3aC0ydjJ6bTAgOGgydi0yaC0ydjJ6bS00IDRoMnYtMmgtMnYyem0wLTE2aDJWM2gtMnYyek03IDE3aDEwVjdIN3YxMHptMi04aDZ2Nkg5Vjl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZW5kPjxwYXRoIGQ9XFxcIk0yLjAxIDIxTDIzIDEyIDIuMDEgMyAyIDEwbDE1IDItMTUgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzPjxwYXRoIGQ9XFxcIk0xOS40MyAxMi45OGMuMDQtLjMyLjA3LS42NC4wNy0uOThzLS4wMy0uNjYtLjA3LS45OGwyLjExLTEuNjVjLjE5LS4xNS4yNC0uNDIuMTItLjY0bC0yLTMuNDZjLS4xMi0uMjItLjM5LS4zLS42MS0uMjJsLTIuNDkgMWMtLjUyLS40LTEuMDgtLjczLTEuNjktLjk4bC0uMzgtMi42NUMxNC40NiAyLjE4IDE0LjI1IDIgMTQgMmgtNGMtLjI1IDAtLjQ2LjE4LS40OS40MmwtLjM4IDIuNjVjLS42MS4yNS0xLjE3LjU5LTEuNjkuOThsLTIuNDktMWMtLjIzLS4wOS0uNDkgMC0uNjEuMjJsLTIgMy40NmMtLjEzLjIyLS4wNy40OS4xMi42NGwyLjExIDEuNjVjLS4wNC4zMi0uMDcuNjUtLjA3Ljk4cy4wMy42Ni4wNy45OGwtMi4xMSAxLjY1Yy0uMTkuMTUtLjI0LjQyLS4xMi42NGwyIDMuNDZjLjEyLjIyLjM5LjMuNjEuMjJsMi40OS0xYy41Mi40IDEuMDguNzMgMS42OS45OGwuMzggMi42NWMuMDMuMjQuMjQuNDIuNDkuNDJoNGMuMjUgMCAuNDYtLjE4LjQ5LS40MmwuMzgtMi42NWMuNjEtLjI1IDEuMTctLjU5IDEuNjktLjk4bDIuNDkgMWMuMjMuMDkuNDkgMCAuNjEtLjIybDItMy40NmMuMTItLjIyLjA3LS40OS0uMTItLjY0bC0yLjExLTEuNjV6TTEyIDE1LjVjLTEuOTMgMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41IDMuNS0zLjUgMy41IDEuNTcgMy41IDMuNS0xLjU3IDMuNS0zLjUgMy41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYXBwbGljYXRpb25zPjxwYXRoIGQ9XFxcIk0xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjkgMi0yVjVjMC0xLjEtLjg5LTItMi0yem0tMS43NSA5YzAgLjIzLS4wMi40Ni0uMDUuNjhsMS40OCAxLjE2Yy4xMy4xMS4xNy4zLjA4LjQ1bC0xLjQgMi40MmMtLjA5LjE1LS4yNy4yMS0uNDMuMTVsLTEuNzQtLjdjLS4zNi4yOC0uNzYuNTEtMS4xOC42OWwtLjI2IDEuODVjLS4wMy4xNy0uMTguMy0uMzUuM2gtMi44Yy0uMTcgMC0uMzItLjEzLS4zNS0uMjlsLS4yNi0xLjg1Yy0uNDMtLjE4LS44Mi0uNDEtMS4xOC0uNjlsLTEuNzQuN2MtLjE2LjA2LS4zNCAwLS40My0uMTVsLTEuNC0yLjQyYy0uMDktLjE1LS4wNS0uMzQuMDgtLjQ1bDEuNDgtMS4xNmMtLjAzLS4yMy0uMDUtLjQ2LS4wNS0uNjkgMC0uMjMuMDItLjQ2LjA1LS42OGwtMS40OC0xLjE2Yy0uMTMtLjExLS4xNy0uMy0uMDgtLjQ1bDEuNC0yLjQyYy4wOS0uMTUuMjctLjIxLjQzLS4xNWwxLjc0LjdjLjM2LS4yOC43Ni0uNTEgMS4xOC0uNjlsLjI2LTEuODVjLjAzLS4xNy4xOC0uMy4zNS0uM2gyLjhjLjE3IDAgLjMyLjEzLjM1LjI5bC4yNiAxLjg1Yy40My4xOC44Mi40MSAxLjE4LjY5bDEuNzQtLjdjLjE2LS4wNi4zNCAwIC40My4xNWwxLjQgMi40MmMuMDkuMTUuMDUuMzQtLjA4LjQ1bC0xLjQ4IDEuMTZjLjAzLjIzLjA1LjQ2LjA1LjY5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtYmFja3VwLXJlc3RvcmU+PHBhdGggZD1cXFwiTTE0IDEyYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptLTItOWMtNC45NyAwLTkgNC4wMy05IDlIMGw0IDQgNC00SDVjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjUxIDAtMi45MS0uNDktNC4wNi0xLjNsLTEuNDIgMS40NEM4LjA0IDIwLjMgOS45NCAyMSAxMiAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJsdWV0b290aD48cGF0aCBkPVxcXCJNMTEgMjRoMnYtMmgtMnYyem0tNCAwaDJ2LTJIN3Yyem04IDBoMnYtMmgtMnYyem0yLjcxLTE4LjI5TDEyIDBoLTF2Ny41OUw2LjQxIDMgNSA0LjQxIDEwLjU5IDEwIDUgMTUuNTkgNi40MSAxNyAxMSAxMi40MVYyMGgxbDUuNzEtNS43MS00LjMtNC4yOSA0LjMtNC4yOXpNMTMgMy44M2wxLjg4IDEuODhMMTMgNy41OVYzLjgzem0xLjg4IDEwLjQ2TDEzIDE2LjE3di0zLjc2bDEuODggMS44OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWJyaWdodG5lc3M+PHBhdGggZD1cXFwiTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2LjAxSDNWNC45OWgxOHYxNC4wMnpNOCAxNmgyLjVsMS41IDEuNSAxLjUtMS41SDE2di0yLjVsMS41LTEuNS0xLjUtMS41VjhoLTIuNUwxMiA2LjUgMTAuNSA4SDh2Mi41TDYuNSAxMiA4IDEzLjVWMTZ6bTQtN2MxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgM1Y5elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtY2VsbD48cGF0aCBkPVxcXCJNNyAyNGgydi0ySDd2MnptNCAwaDJ2LTJoLTJ2MnptNCAwaDJ2LTJoLTJ2MnpNMTYgLjAxTDggMEM2LjkgMCA2IC45IDYgMnYxNmMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWMmMwLTEuMS0uOS0xLjk5LTItMS45OXpNMTYgMTZIOFY0aDh2MTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1ldGhlcm5ldD48cGF0aCBkPVxcXCJNNy43NyA2Ljc2TDYuMjMgNS40OC44MiAxMmw1LjQxIDYuNTIgMS41NC0xLjI4TDMuNDIgMTJsNC4zNS01LjI0ek03IDEzaDJ2LTJIN3Yyem0xMC0yaC0ydjJoMnYtMnptLTYgMmgydi0yaC0ydjJ6bTYuNzctNy41MmwtMS41NCAxLjI4TDIwLjU4IDEybC00LjM1IDUuMjQgMS41NCAxLjI4TDIzLjE4IDEybC01LjQxLTYuNTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1hbnRlbm5hPjxwYXRoIGQ9XFxcIk0xMiA1Yy0zLjg3IDAtNyAzLjEzLTcgN2gyYzAtMi43NiAyLjI0LTUgNS01czUgMi4yNCA1IDVoMmMwLTMuODctMy4xMy03LTctN3ptMSA5LjI5Yy44OC0uMzkgMS41LTEuMjYgMS41LTIuMjkgMC0xLjM4LTEuMTItMi41LTIuNS0yLjVTOS41IDEwLjYyIDkuNSAxMmMwIDEuMDIuNjIgMS45IDEuNSAyLjI5djMuM0w3LjU5IDIxIDkgMjIuNDFsMy0zIDMgM0wxNi40MSAyMSAxMyAxNy41OXYtMy4zek0xMiAxQzUuOTMgMSAxIDUuOTMgMSAxMmgyYzAtNC45NyA0LjAzLTkgOS05czkgNC4wMyA5IDloMmMwLTYuMDctNC45My0xMS0xMS0xMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LWNvbXBvbmVudD48cGF0aCBkPVxcXCJNNSAyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIMXY2aDZWNkg1VjJ6bTQgMTRjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4YzEuMTYtLjQxIDItMS41MSAyLTIuODJ2LTJIOXYyem0tOCAwYzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOEM2LjE2IDE4LjQgNyAxNy4zIDcgMTZ2LTJIMXYyek0yMSA2VjJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NGgtMnY2aDZWNmgtMnptLTgtNGMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0SDl2Nmg2VjZoLTJWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMmgtNnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtaW5wdXQtY29tcG9zaXRlPjxwYXRoIGQ9XFxcIk01IDJjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDF2NEgxdjZoNlY2SDVWMnptNCAxNGMwIDEuMy44NCAyLjQgMiAyLjgyVjIzaDJ2LTQuMThjMS4xNi0uNDEgMi0xLjUxIDItMi44MnYtMkg5djJ6bS04IDBjMCAxLjMuODQgMi40IDIgMi44MlYyM2gydi00LjE4QzYuMTYgMTguNCA3IDE3LjMgNyAxNnYtMkgxdjJ6TTIxIDZWMmMwLS41NS0uNDUtMS0xLTFzLTEgLjQ1LTEgMXY0aC0ydjZoNlY2aC0yem0tOC00YzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdjRIOXY2aDZWNmgtMlYyem00IDE0YzAgMS4zLjg0IDIuNCAyIDIuODJWMjNoMnYtNC4xOGMxLjE2LS40MSAyLTEuNTEgMi0yLjgydi0yaC02djJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1pbnB1dC1oZG1pPjxwYXRoIGQ9XFxcIk0xOCA3VjRjMC0xLjEtLjktMi0yLTJIOGMtMS4xIDAtMiAuOS0yIDJ2M0g1djZsMyA2djNoOHYtM2wzLTZWN2gtMXpNOCA0aDh2M2gtMlY1aC0xdjJoLTJWNWgtMXYySDhWNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNldHRpbmdzLWlucHV0LXN2aWRlbz48cGF0aCBkPVxcXCJNOCAxMS41YzAtLjgzLS42Ny0xLjUtMS41LTEuNVM1IDEwLjY3IDUgMTEuNSA1LjY3IDEzIDYuNSAxMyA4IDEyLjMzIDggMTEuNXptNy01YzAtLjgzLS42Ny0xLjUtMS41LTEuNWgtM0M5LjY3IDUgOSA1LjY3IDkgNi41UzkuNjcgOCAxMC41IDhoM2MuODMgMCAxLjUtLjY3IDEuNS0xLjV6TTguNSAxNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVTNy42NyAxOCA4LjUgMThzMS41LS42NyAxLjUtMS41UzkuMzMgMTUgOC41IDE1ek0xMiAxQzUuOTMgMSAxIDUuOTMgMSAxMnM0LjkzIDExIDExIDExIDExLTQuOTMgMTEtMTFTMTguMDcgMSAxMiAxem0wIDIwYy00Ljk2IDAtOS00LjA0LTktOXM0LjA0LTkgOS05IDkgNC4wNCA5IDktNC4wNCA5LTkgOXptNS41LTExYy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptLTIgNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1vdmVyc2Nhbj48cGF0aCBkPVxcXCJNMTIuMDEgNS41TDEwIDhoNGwtMS45OS0yLjV6TTE4IDEwdjRsMi41LTEuOTlMMTggMTB6TTYgMTBsLTIuNSAyLjAxTDYgMTR2LTR6bTggNmgtNGwyLjAxIDIuNUwxNCAxNnptNy0xM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTYuMDFIM1Y0Ljk5aDE4djE0LjAyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcGhvbmU+PHBhdGggZD1cXFwiTTEzIDloLTJ2MmgyVjl6bTQgMGgtMnYyaDJWOXptMyA2LjVjLTEuMjUgMC0yLjQ1LS4yLTMuNTctLjU3LS4zNS0uMTEtLjc0LS4wMy0xLjAyLjI0bC0yLjIgMi4yYy0yLjgzLTEuNDQtNS4xNS0zLjc1LTYuNTktNi41OGwyLjItMi4yMWMuMjgtLjI3LjM2LS42Ni4yNS0xLjAxQzguNyA2LjQ1IDguNSA1LjI1IDguNSA0YzAtLjU1LS40NS0xLTEtMUg0Yy0uNTUgMC0xIC40NS0xIDEgMCA5LjM5IDcuNjEgMTcgMTcgMTcgLjU1IDAgMS0uNDUgMS0xdi0zLjVjMC0uNTUtLjQ1LTEtMS0xek0xOSA5djJoMlY5aC0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c2V0dGluZ3MtcG93ZXI+PHBhdGggZD1cXFwiTTcgMjRoMnYtMkg3djJ6bTQgMGgydi0yaC0ydjJ6bTItMjJoLTJ2MTBoMlYyem0zLjU2IDIuNDRsLTEuNDUgMS40NUMxNi44NCA2Ljk0IDE4IDguODMgMTggMTFjMCAzLjMxLTIuNjkgNi02IDZzLTYtMi42OS02LTZjMC0yLjE3IDEuMTYtNC4wNiAyLjg4LTUuMTJMNy40NCA0LjQ0QzUuMzYgNS44OCA0IDguMjggNCAxMWMwIDQuNDIgMy41OCA4IDggOHM4LTMuNTggOC04YzAtMi43Mi0xLjM2LTUuMTItMy40NC02LjU2ek0xNSAyNGgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy1yZW1vdGU+PHBhdGggZD1cXFwiTTE1IDlIOWMtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xVjEwYzAtLjU1LS40NS0xLTEtMXptLTMgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6TTcuMDUgNi4wNWwxLjQxIDEuNDFDOS4zNyA2LjU2IDEwLjYyIDYgMTIgNnMyLjYzLjU2IDMuNTQgMS40NmwxLjQxLTEuNDFDMTUuNjggNC43OCAxMy45MyA0IDEyIDRzLTMuNjguNzgtNC45NSAyLjA1ek0xMiAwQzguOTYgMCA2LjIxIDEuMjMgNC4yMiAzLjIybDEuNDEgMS40MUM3LjI2IDMuMDEgOS41MSAyIDEyIDJzNC43NCAxLjAxIDYuMzYgMi42NGwxLjQxLTEuNDFDMTcuNzkgMS4yMyAxNS4wNCAwIDEyIDB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zZXR0aW5ncy12b2ljZT48cGF0aCBkPVxcXCJNNyAyNGgydi0ySDd2MnptNS0xMWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA0YzAtMS42Ni0xLjM0LTMtMy0zUzkgMi4zNCA5IDR2NmMwIDEuNjYgMS4zNCAzIDMgM3ptLTEgMTFoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyem00LTE0aC0xLjdjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDEzIDYuNyAxMEg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIwaDJ2LTMuMjhjMy4yOC0uNDkgNi0zLjMxIDYtNi43MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3A+PHBhdGggZD1cXFwiTTE2IDZWNGMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJIMnYxM2MwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY2aC02em0tNi0yaDR2MmgtNFY0ek05IDE4VjlsNy41IDRMOSAxOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3AtdHdvPjxwYXRoIGQ9XFxcIk0zIDlIMXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMkgzVjl6bTE1LTRWM2MwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINXYxMWMwIDEuMTEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjg5IDItMlY1aC01em0tNi0yaDR2MmgtNFYzem0wIDEyVjhsNS41IDMtNS41IDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zaG9wcGluZy1iYXNrZXQ+PHBhdGggZD1cXFwiTTE3LjIxIDlsLTQuMzgtNi41NmMtLjE5LS4yOC0uNTEtLjQyLS44My0uNDItLjMyIDAtLjY0LjE0LS44My40M0w2Ljc5IDlIMmMtLjU1IDAtMSAuNDUtMSAxIDAgLjA5LjAxLjE4LjA0LjI3bDIuNTQgOS4yN2MuMjMuODQgMSAxLjQ2IDEuOTIgMS40NmgxM2MuOTIgMCAxLjY5LS42MiAxLjkzLTEuNDZsMi41NC05LjI3TDIzIDEwYzAtLjU1LS40NS0xLTEtMWgtNC43OXpNOSA5bDMtNC40TDE1IDlIOXptMyA4Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNob3BwaW5nLWNhcnQ+PHBhdGggZD1cXFwiTTcgMThjLTEuMSAwLTEuOTkuOS0xLjk5IDJTNS45IDIyIDcgMjJzMi0uOSAyLTItLjktMi0yLTJ6TTEgMnYyaDJsMy42IDcuNTktMS4zNSAyLjQ1Yy0uMTYuMjgtLjI1LjYxLS4yNS45NiAwIDEuMS45IDIgMiAyaDEydi0ySDcuNDJjLS4xNCAwLS4yNS0uMTEtLjI1LS4yNWwuMDMtLjEyLjktMS42M2g3LjQ1Yy43NSAwIDEuNDEtLjQxIDEuNzUtMS4wM2wzLjU4LTYuNDljLjA4LS4xNC4xMi0uMzEuMTItLjQ4IDAtLjU1LS40NS0xLTEtMUg1LjIxbC0uOTQtMkgxem0xNiAxNmMtMS4xIDAtMS45OS45LTEuOTkgMnMuODkgMiAxLjk5IDIgMi0uOSAyLTItLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zb3J0PjxwYXRoIGQ9XFxcIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zcGVha2VyLW5vdGVzPjxwYXRoIGQ9XFxcIk0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnpNOCAxNEg2di0yaDJ2MnptMC0zSDZWOWgydjJ6bTAtM0g2VjZoMnYyem03IDZoLTV2LTJoNXYyem0zLTNoLThWOWg4djJ6bTAtM2gtOFY2aDh2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXNwZWFrZXItbm90ZXMtb2ZmPjxwYXRoIGQ9XFxcIk0xMC41NCAxMWwtLjU0LS41NEw3LjU0IDggNiA2LjQ2IDIuMzggMi44NCAxLjI3IDEuNzMgMCAzbDIuMDEgMi4wMUwyIDIybDQtNGg5bDUuNzMgNS43M0wyMiAyMi40NiAxNy41NCAxOGwtNy03ek04IDE0SDZ2LTJoMnYyem0tMi0zVjlsMiAySDZ6bTE0LTlINC4wOEwxMCA3LjkyVjZoOHYyaC03LjkybDEgMUgxOHYyaC00LjkybDYuOTkgNi45OUMyMS4xNCAxNy45NSAyMiAxNy4wOCAyMiAxNlY0YzAtMS4xLS45LTItMi0yelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3BlbGxjaGVjaz48cGF0aCBkPVxcXCJNMTIuNDUgMTZoMi4wOUw5LjQzIDNINy41N0wyLjQ2IDE2aDIuMDlsMS4xMi0zaDUuNjRsMS4xNCAzem0tNi4wMi01TDguNSA1LjQ4IDEwLjU3IDExSDYuNDN6bTE1LjE2LjU5bC04LjA5IDguMDlMOS44MyAxNmwtMS40MSAxLjQxIDUuMDkgNS4wOUwyMyAxM2wtMS40MS0xLjQxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3Rhcj48cGF0aCBkPVxcXCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdGFyLWJvcmRlcj48cGF0aCBkPVxcXCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN0YXItaGFsZj48cGF0aCBkPVxcXCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNFY2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RhcnM+PHBhdGggZD1cXFwiTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6bTQuMjQgMTZMMTIgMTUuNDUgNy43NyAxOGwxLjEyLTQuODEtMy43My0zLjIzIDQuOTItLjQyTDEyIDVsMS45MiA0LjUzIDQuOTIuNDItMy43MyAzLjIzTDE2LjIzIDE4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3RvcmU+PHBhdGggZD1cXFwiTTIwIDRINHYyaDE2VjR6bTEgMTB2LTJsLTEtNUg0bC0xIDV2MmgxdjZoMTB2LTZoNHY2aDJ2LTZoMXptLTkgNEg2di00aDZ2NHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmRpcmVjdG9yeS1hcnJvdy1sZWZ0PjxwYXRoIGQ9XFxcIk0xMSA5bDEuNDIgMS40Mkw4LjgzIDE0SDE4VjRoMnYxMkg4LjgzbDMuNTkgMy41OEwxMSAyMWwtNi02IDYtNnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXN1YmRpcmVjdG9yeS1hcnJvdy1yaWdodD48cGF0aCBkPVxcXCJNMTkgMTVsLTYgNi0xLjQyLTEuNDJMMTUuMTcgMTZINFY0aDJ2MTBoOS4xN2wtMy41OS0zLjU4TDEzIDlsNiA2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3ViamVjdD48cGF0aCBkPVxcXCJNMTQgMTdINHYyaDEwdi0yem02LThINHYyaDE2Vjl6TTQgMTVoMTZ2LTJINHYyek00IDV2MmgxNlY1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zdXBlcnZpc29yLWFjY291bnQ+PHBhdGggZD1cXFwiTTE2LjUgMTJjMS4zOCAwIDIuNDktMS4xMiAyLjQ5LTIuNVMxNy44OCA3IDE2LjUgN0MxNS4xMiA3IDE0IDguMTIgMTQgOS41czEuMTIgMi41IDIuNSAyLjV6TTkgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTAuNjYgNSA5IDVDNy4zNCA1IDYgNi4zNCA2IDhzMS4zNCAzIDMgM3ptNy41IDNjLTEuODMgMC01LjUuOTItNS41IDIuNzVWMTloMTF2LTIuMjVjMC0xLjgzLTMuNjctMi43NS01LjUtMi43NXpNOSAxM2MtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWg3di0yLjI1YzAtLjg1LjMzLTIuMzQgMi4zNy0zLjQ3QzEwLjUgMTMuMSA5LjY2IDEzIDkgMTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zd2FwLWhvcml6PjxwYXRoIGQ9XFxcIk02Ljk5IDExTDMgMTVsMy45OSA0di0zSDE0di0ySDYuOTl2LTN6TTIxIDlsLTMuOTktNHYzSDEwdjJoNy4wMXYzTDIxIDl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD1zd2FwLXZlcnQ+PHBhdGggZD1cXFwiTTE2IDE3LjAxVjEwaC0ydjcuMDFoLTNMMTUgMjFsNC0zLjk5aC0zek05IDNMNSA2Ljk5aDNWMTRoMlY2Ljk5aDNMOSAzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3dhcC12ZXJ0aWNhbC1jaXJjbGU+PHBhdGggZD1cXFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTYuNSA5TDEwIDUuNSAxMy41IDlIMTF2NEg5VjlINi41em0xMSA2TDE0IDE4LjUgMTAuNSAxNUgxM3YtNGgydjRoMi41elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9c3lzdGVtLXVwZGF0ZS1hbHQ+PHBhdGggZD1cXFwiTTEyIDE2LjVsNC00aC0zdi05aC0ydjlIOGw0IDR6bTktMTNoLTZ2MS45OWg2djE0LjAzSDNWNS40OWg2VjMuNUgzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0ydi0xNGMwLTEuMS0uOS0yLTItMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRhYj48cGF0aCBkPVxcXCJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZIM1Y1aDEwdjRoOHYxMHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRhYi11bnNlbGVjdGVkPjxwYXRoIGQ9XFxcIk0xIDloMlY3SDF2MnptMCA0aDJ2LTJIMXYyem0wLThoMlYzYy0xLjEgMC0yIC45LTIgMnptOCAxNmgydi0ySDl2MnptLTgtNGgydi0ySDF2MnptMiA0di0ySDFjMCAxLjEuOSAyIDIgMnpNMjEgM2gtOHY2aDEwVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTRoMnYtMmgtMnYyek05IDVoMlYzSDl2MnpNNSAyMWgydi0ySDV2MnpNNSA1aDJWM0g1djJ6bTE2IDE2YzEuMSAwIDItLjkgMi0yaC0ydjJ6bTAtOGgydi0yaC0ydjJ6bS04IDhoMnYtMmgtMnYyem00IDBoMnYtMmgtMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGV4dC1mb3JtYXQ+PHBhdGggZD1cXFwiTTUgMTd2MmgxNHYtMkg1em00LjUtNC4yaDVsLjkgMi4yaDIuMUwxMi43NSA0aC0xLjVMNi41IDE1aDIuMWwuOS0yLjJ6TTEyIDUuOThMMTMuODcgMTFoLTMuNzRMMTIgNS45OHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRoZWF0ZXJzPjxwYXRoIGQ9XFxcIk0xOCAzdjJoLTJWM0g4djJINlYzSDR2MThoMnYtMmgydjJoOHYtMmgydjJoMlYzaC0yek04IDE3SDZ2LTJoMnYyem0wLTRINnYtMmgydjJ6bTAtNEg2VjdoMnYyem0xMCA4aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0yVjdoMnYyelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dGh1bWItZG93bj48cGF0aCBkPVxcXCJNMTUgM0g2Yy0uODMgMC0xLjU0LjUtMS44NCAxLjIybC0zLjAyIDcuMDVjLS4wOS4yMy0uMTQuNDctLjE0LjczdjEuOTFsLjAxLjAxTDEgMTRjMCAxLjEuOSAyIDIgMmg2LjMxbC0uOTUgNC41Ny0uMDMuMzJjMCAuNDEuMTcuNzkuNDQgMS4wNkw5LjgzIDIzbDYuNTktNi41OWMuMzYtLjM2LjU4LS44Ni41OC0xLjQxVjVjMC0xLjEtLjktMi0yLTJ6bTQgMHYxMmg0VjNoLTR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aHVtYi11cD48cGF0aCBkPVxcXCJNMSAyMWg0VjlIMXYxMnptMjItMTFjMC0xLjEtLjktMi0yLTJoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLjQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjUgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTEuOTFsLS4wMS0uMDFMMjMgMTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aHVtYnMtdXAtZG93bj48cGF0aCBkPVxcXCJNMTIgNmMwLS41NS0uNDUtMS0xLTFINS44MmwuNjYtMy4xOC4wMi0uMjNjMC0uMzEtLjEzLS41OS0uMzMtLjhMNS4zOCAwIC40NCA0Ljk0Qy4xNyA1LjIxIDAgNS41OSAwIDZ2Ni41YzAgLjgzLjY3IDEuNSAxLjUgMS41aDYuNzVjLjYyIDAgMS4xNS0uMzggMS4zOC0uOTFsMi4yNi01LjI5Yy4wNy0uMTcuMTEtLjM2LjExLS41NVY2em0xMC41IDRoLTYuNzVjLS42MiAwLTEuMTUuMzgtMS4zOC45MWwtMi4yNiA1LjI5Yy0uMDcuMTctLjExLjM2LS4xMS41NVYxOGMwIC41NS40NSAxIDEgMWg1LjE4bC0uNjYgMy4xOC0uMDIuMjRjMCAuMzEuMTMuNTkuMzMuOGwuNzkuNzggNC45NC00Ljk0Yy4yNy0uMjcuNDQtLjY1LjQ0LTEuMDZ2LTYuNWMwLS44My0uNjctMS41LTEuNS0xLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10aW1lbGluZT48cGF0aCBkPVxcXCJNMjMgOGMwIDEuMS0uOSAyLTIgMi0uMTggMC0uMzUtLjAyLS41MS0uMDdsLTMuNTYgMy41NWMuMDUuMTYuMDcuMzQuMDcuNTIgMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yYzAtLjE4LjAyLS4zNi4wNy0uNTJsLTIuNTUtMi41NWMtLjE2LjA1LS4zNC4wNy0uNTIuMDdzLS4zNi0uMDItLjUyLS4wN2wtNC41NSA0LjU2Yy4wNS4xNi4wNy4zMy4wNy41MSAwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTJjLjE4IDAgLjM1LjAyLjUxLjA3bDQuNTYtNC41NUM4LjAyIDkuMzYgOCA5LjE4IDggOWMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgLjE4LS4wMi4zNi0uMDcuNTJsMi41NSAyLjU1Yy4xNi0uMDUuMzQtLjA3LjUyLS4wN3MuMzYuMDIuNTIuMDdsMy41NS0zLjU2QzE5LjAyIDguMzUgMTkgOC4xOCAxOSA4YzAtMS4xLjktMiAyLTJzMiAuOSAyIDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b2M+PHBhdGggZD1cXFwiTTMgOWgxNFY3SDN2MnptMCA0aDE0di0ySDN2MnptMCA0aDE0di0ySDN2MnptMTYgMGgydi0yaC0ydjJ6bTAtMTB2MmgyVjdoLTJ6bTAgNmgydi0yaC0ydjJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b2RheT48cGF0aCBkPVxcXCJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dG9sbD48cGF0aCBkPVxcXCJNMTUgNGMtNC40MiAwLTggMy41OC04IDhzMy41OCA4IDggOCA4LTMuNTggOC04LTMuNTgtOC04LTh6bTAgMTRjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2ek0zIDEyYzAtMi42MSAxLjY3LTQuODMgNC01LjY1VjQuMjZDMy41NSA1LjE1IDEgOC4yNyAxIDEyczIuNTUgNi44NSA2IDcuNzR2LTIuMDljLTIuMzMtLjgyLTQtMy4wNC00LTUuNjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10b3VjaC1hcHA+PHBhdGggZD1cXFwiTTkgMTEuMjRWNy41QzkgNi4xMiAxMC4xMiA1IDExLjUgNVMxNCA2LjEyIDE0IDcuNXYzLjc0YzEuMjEtLjgxIDItMi4xOCAyLTMuNzRDMTYgNS4wMSAxMy45OSAzIDExLjUgM1M3IDUuMDEgNyA3LjVjMCAxLjU2Ljc5IDIuOTMgMiAzLjc0em05Ljg0IDQuNjNsLTQuNTQtMi4yNmMtLjE3LS4wNy0uMzUtLjExLS41NC0uMTFIMTN2LTZjMC0uODMtLjY3LTEuNS0xLjUtMS41UzEwIDYuNjcgMTAgNy41djEwLjc0bC0zLjQzLS43MmMtLjA4LS4wMS0uMTUtLjAzLS4yNC0uMDMtLjMxIDAtLjU5LjEzLS43OS4zM2wtLjc5LjggNC45NCA0Ljk0Yy4yNy4yNy42NS40NCAxLjA2LjQ0aDYuNzljLjc1IDAgMS4zMy0uNTUgMS40NC0xLjI4bC43NS01LjI3Yy4wMS0uMDcuMDItLjE0LjAyLS4yIDAtLjYyLS4zOC0xLjE2LS45MS0xLjM4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJhY2stY2hhbmdlcz48cGF0aCBkPVxcXCJNMTkuMDcgNC45M2wtMS40MSAxLjQxQzE5LjEgNy43OSAyMCA5Ljc5IDIwIDEyYzAgNC40Mi0zLjU4IDgtOCA4cy04LTMuNTgtOC04YzAtNC4wOCAzLjA1LTcuNDQgNy03LjkzdjIuMDJDOC4xNiA2LjU3IDYgOS4wMyA2IDEyYzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZjMC0xLjY2LS42Ny0zLjE2LTEuNzYtNC4yNGwtMS40MSAxLjQxQzE1LjU1IDkuOSAxNiAxMC45IDE2IDEyYzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00YzAtMS44NiAxLjI4LTMuNDEgMy0zLjg2djIuMTRjLS42LjM1LTEgLjk4LTEgMS43MiAwIDEuMS45IDIgMiAyczItLjkgMi0yYzAtLjc0LS40LTEuMzgtMS0xLjcyVjJoLTFDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMGMwLTIuNzYtMS4xMi01LjI2LTIuOTMtNy4wN3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXRyYW5zbGF0ZT48cGF0aCBkPVxcXCJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHJlbmRpbmctZG93bj48cGF0aCBkPVxcXCJNMTYgMThsMi4yOS0yLjI5LTQuODgtNC44OC00IDRMMiA3LjQxIDMuNDEgNmw2IDYgNC00IDYuMyA2LjI5TDIyIDEydjZ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmVuZGluZy1mbGF0PjxwYXRoIGQ9XFxcIk0yMiAxMmwtNC00djNIM3YyaDE1djN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10cmVuZGluZy11cD48cGF0aCBkPVxcXCJNMTYgNmwyLjI5IDIuMjktNC44OCA0Ljg4LTQtNEwyIDE2LjU5IDMuNDEgMThsNi02IDQgNCA2LjMtNi4yOUwyMiAxMlY2elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dHVybmVkLWluPjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD10dXJuZWQtaW4tbm90PjxwYXRoIGQ9XFxcIk0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTVsLTUtMi4xOEw3IDE4VjVoMTB2MTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmFyY2hpdmU+PHBhdGggZD1cXFwiTTIwLjU1IDUuMjJsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNS41NUwzLjQ2IDUuMjJDMy4xNyA1LjU3IDMgNi4wMSAzIDYuNVYxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2LjVjMC0uNDktLjE3LS45My0uNDUtMS4yOHpNMTIgOS41bDUuNSA1LjVIMTR2MmgtNHYtMkg2LjVMMTIgOS41ek01LjEyIDVsLjgyLTFoMTJsLjkzIDFINS4xMnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXVuZG8+PHBhdGggZD1cXFwiTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dW5mb2xkLWxlc3M+PHBhdGggZD1cXFwiTTcuNDEgMTguNTlMOC44MyAyMCAxMiAxNi44MyAxNS4xNyAyMGwxLjQxLTEuNDFMMTIgMTRsLTQuNTkgNC41OXptOS4xOC0xMy4xOEwxNS4xNyA0IDEyIDcuMTcgOC44MyA0IDcuNDEgNS40MSAxMiAxMGw0LjU5LTQuNTl6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD11bmZvbGQtbW9yZT48cGF0aCBkPVxcXCJNMTIgNS44M0wxNS4xNyA5bDEuNDEtMS40MUwxMiAzIDcuNDEgNy41OSA4LjgzIDkgMTIgNS44M3ptMCAxMi4zNEw4LjgzIDE1bC0xLjQxIDEuNDFMMTIgMjFsNC41OS00LjU5TDE1LjE3IDE1IDEyIDE4LjE3elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dXBkYXRlPjxwYXRoIGQ9XFxcIk0yMSAxMC4xMmgtNi43OGwyLjc0LTIuODJjLTIuNzMtMi43LTcuMTUtMi44LTkuODgtLjEtMi43MyAyLjcxLTIuNzMgNy4wOCAwIDkuNzkgMi43MyAyLjcxIDcuMTUgMi43MSA5Ljg4IDBDMTguMzIgMTUuNjUgMTkgMTQuMDggMTkgMTIuMWgyYzAgMS45OC0uODggNC41NS0yLjY0IDYuMjktMy41MSAzLjQ4LTkuMjEgMy40OC0xMi43MiAwLTMuNS0zLjQ3LTMuNTMtOS4xMS0uMDItMTIuNTggMy41MS0zLjQ3IDkuMTQtMy40NyAxMi42NSAwTDIxIDN2Ny4xMnpNMTIuNSA4djQuMjVsMy41IDIuMDgtLjcyIDEuMjFMMTEgMTNWOGgxLjV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12ZXJpZmllZC11c2VyPjxwYXRoIGQ9XFxcIk0xMiAxTDMgNXY2YzAgNS41NSAzLjg0IDEwLjc0IDkgMTIgNS4xNi0xLjI2IDktNi40NSA5LTEyVjVsLTktNHptLTIgMTZsLTQtNCAxLjQxLTEuNDFMMTAgMTQuMTdsNi41OS02LjU5TDE4IDlsLTggOHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctYWdlbmRhPjxwYXRoIGQ9XFxcIk0yMCAxM0gzYy0uNTUgMC0xIC40NS0xIDF2NmMwIC41NS40NSAxIDEgMWgxN2MuNTUgMCAxLS40NSAxLTF2LTZjMC0uNTUtLjQ1LTEtMS0xem0wLTEwSDNjLS41NSAwLTEgLjQ1LTEgMXY2YzAgLjU1LjQ1IDEgMSAxaDE3Yy41NSAwIDEtLjQ1IDEtMVY0YzAtLjU1LS40NS0xLTEtMXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctYXJyYXk+PHBhdGggZD1cXFwiTTQgMThoM1Y1SDR2MTN6TTE4IDV2MTNoM1Y1aC0zek04IDE4aDlWNUg4djEzelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1jYXJvdXNlbD48cGF0aCBkPVxcXCJNNyAxOWgxMFY0SDd2MTV6bS01LTJoNFY2SDJ2MTF6TTE4IDZ2MTFoNFY2aC00elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1jb2x1bW4+PHBhdGggZD1cXFwiTTEwIDE4aDVWNWgtNXYxM3ptLTYgMGg1VjVINHYxM3pNMTYgNXYxM2g1VjVoLTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWRheT48cGF0aCBkPVxcXCJNMiAyMWgxOXYtM0gydjN6TTIwIDhIM2MtLjU1IDAtMSAuNDUtMSAxdjZjMCAuNTUuNDUgMSAxIDFoMTdjLjU1IDAgMS0uNDUgMS0xVjljMC0uNTUtLjQ1LTEtMS0xek0yIDN2M2gxOVYzSDJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWhlYWRsaW5lPjxwYXRoIGQ9XFxcIk00IDE1aDE2di0ySDR2MnptMCA0aDE2di0ySDR2MnptMC04aDE2VjlINHYyem0wLTZ2MmgxNlY1SDR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LWxpc3Q+PHBhdGggZD1cXFwiTTQgMTRoNHYtNEg0djR6bTAgNWg0di00SDR2NHpNNCA5aDRWNUg0djR6bTUgNWgxMnYtNEg5djR6bTAgNWgxMnYtNEg5djR6TTkgNXY0aDEyVjVIOXpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctbW9kdWxlPjxwYXRoIGQ9XFxcIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9dmlldy1xdWlsdD48cGF0aCBkPVxcXCJNMTAgMThoNXYtNmgtNXY2em0tNiAwaDVWNUg0djEzem0xMiAwaDV2LTZoLTV2NnpNMTAgNXY2aDExVjVIMTB6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aWV3LXN0cmVhbT48cGF0aCBkPVxcXCJNNCAxOGgxN3YtNkg0djZ6TTQgNXY2aDE3VjVINHpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXZpZXctd2Vlaz48cGF0aCBkPVxcXCJNNiA1SDNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXptMTQgMGgtM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xem0tNyAwaC0zYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aXNpYmlsaXR5PjxwYXRoIGQ9XFxcIk0xMiA0LjVDNyA0LjUgMi43MyA3LjYxIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNXM5LjI3LTMuMTEgMTEtNy41Yy0xLjczLTQuMzktNi03LjUtMTEtNy41ek0xMiAxN2MtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD12aXNpYmlsaXR5LW9mZj48cGF0aCBkPVxcXCJNMTIgN2MyLjc2IDAgNSAyLjI0IDUgNSAwIC42NS0uMTMgMS4yNi0uMzYgMS44M2wyLjkyIDIuOTJjMS41MS0xLjI2IDIuNy0yLjg5IDMuNDMtNC43NS0xLjczLTQuMzktNi03LjUtMTEtNy41LTEuNCAwLTIuNzQuMjUtMy45OC43bDIuMTYgMi4xNkMxMC43NCA3LjEzIDExLjM1IDcgMTIgN3pNMiA0LjI3bDIuMjggMi4yOC40Ni40NkMzLjA4IDguMyAxLjc4IDEwLjAyIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNSAxLjU1IDAgMy4wMy0uMyA0LjM4LS44NGwuNDIuNDJMMTkuNzMgMjIgMjEgMjAuNzMgMy4yNyAzIDIgNC4yN3pNNy41MyA5LjhsMS41NSAxLjU1Yy0uMDUuMjEtLjA4LjQzLS4wOC42NSAwIDEuNjYgMS4zNCAzIDMgMyAuMjIgMCAuNDQtLjAzLjY1LS4wOGwxLjU1IDEuNTVjLS42Ny4zMy0xLjQxLjUzLTIuMi41My0yLjc2IDAtNS0yLjI0LTUtNSAwLS43OS4yLTEuNTMuNTMtMi4yem00LjMxLS43OGwzLjE1IDMuMTUuMDItLjE2YzAtMS42Ni0xLjM0LTMtMy0zbC0uMTcuMDF6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13YXJuaW5nPjxwYXRoIGQ9XFxcIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13YXRjaC1sYXRlcj48cGF0aCBkPVxcXCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyczQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTBTMTcuNSAyIDEyIDJ6bTQuMiAxNC4yTDExIDEzVjdoMS41djUuMmw0LjUgMi43LS44IDEuM3pcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXdlZWtlbmQ+PHBhdGggZD1cXFwiTTIxIDEwYy0xLjEgMC0yIC45LTIgMnYzSDV2LTNjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnptLTMtNUg2Yy0xLjEgMC0yIC45LTIgMnYyLjE1YzEuMTYuNDEgMiAxLjUxIDIgMi44MlYxNGgxMnYtMi4wM2MwLTEuMy44NC0yLjQgMi0yLjgyVjdjMC0xLjEtLjktMi0yLTJ6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD13b3JrPjxwYXRoIGQ9XFxcIk0yMCA2aC00VjRjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDE5YzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjhjMC0xLjExLS44OS0yLTItMnptLTYgMGgtNFY0aDR2MnpcXFwiPjwvcGF0aD48L2c+IDxnIGlkPXlvdXR1YmUtc2VhcmNoZWQtZm9yPjxwYXRoIGQ9XFxcIk0xNy4wMSAxNGgtLjhsLS4yNy0uMjdjLjk4LTEuMTQgMS41Ny0yLjYxIDEuNTctNC4yMyAwLTMuNTktMi45MS02LjUtNi41LTYuNXMtNi41IDMtNi41IDYuNUgybDMuODQgNCA0LjE2LTRINi41MUM2LjUxIDcgOC41MyA1IDExLjAxIDVzNC41IDIuMDEgNC41IDQuNWMwIDIuNDgtMi4wMiA0LjUtNC41IDQuNS0uNjUgMC0xLjI2LS4xNC0xLjgyLS4zOEw3LjcxIDE1LjFjLjk3LjU3IDIuMDkuOSAzLjMuOSAxLjYxIDAgMy4wOC0uNTkgNC4yMi0xLjU3bC4yNy4yN3YuNzlsNS4wMSA0Ljk5TDIyIDE5bC00Ljk5LTV6XFxcIj48L3BhdGg+PC9nPiA8ZyBpZD16b29tLWluPjxwYXRoIGQ9XFxcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0em0yLjUtNGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxelxcXCI+PC9wYXRoPjwvZz4gPGcgaWQ9em9vbS1vdXQ+PHBhdGggZD1cXFwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3pcXFwiPjwvcGF0aD48L2c+IDwvZGVmcz48L3N2Zz4gPC9pcm9uLWljb25zZXQtc3ZnPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWwiLCI8bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vcG9seW1lci9wb2x5bWVyLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLmh0bWxcIj5cblxuPCEtLVxuICBgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zYFxuXG4gICoqRnJvbSB2My54LngsIHRoaXMgY29tcG9uZW50IG9ubHkgd29ya3Mgd2l0aCBQb2x5bWVyIDEuNysgb3IgMi4wKy4qKlxuXG4gIFshW1B1Ymxpc2hlZCBvbiB3ZWJjb21wb25lbnRzLm9yZ10oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS93ZWJjb21wb25lbnRzLm9yZy1wdWJsaXNoZWQtYmx1ZS5zdmcpXShodHRwczovL3d3dy53ZWJjb21wb25lbnRzLm9yZy9lbGVtZW50L2VsbGlwdGljYWxqcy9wYXBlci1hdXRvY29tcGxldGUpXG5cbiAgWyFbU2F1Y2UgVGVzdCBTdGF0dXNdKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS9icm93c2VyLW1hdHJpeC9qaHVlc29zLnN2ZyldKGh0dHBzOi8vc2F1Y2VsYWJzLmNvbS91L2podWVzb3MpXG5cbiAgQWxsb3dzIHRvIGFkZCBhdXRvY29tcGxldGUgY2FwYWJpbGl0aWVzIHRvIGFueSBpbnB1dCBmaWVsZC4gVGhpcyBpcyBkZXNpcmFibGUgd2hlbiB5b3UgaGF2ZSBhbiBpbnB1dCBmaWVsZCB3aXRoIGN1c3RvbVxuICBsb2dpYyBhbmQgeW91IGp1c3Qgd2FudCB0byBhZGQgdGhlIGZlYXR1cmUgdG8gaGVscCB1c2VycyB3aXRoIHRoZSBzZWxlY3Rpb24uIElmIHlvdSB3YW50IHRvIHVzZSBpdCBpbiBjb21iaW5hdGlvbiB3aXRoXG4gIGEgcmVndWxhciBgPHBhcGVyLWlucHV0PmAsIHlvdSBjYW4gdXNlIGA8cGFwZXItYXV0b2NvbXBsZXRlPmAuXG5cbiAgRXhhbXBsZTpcbiAgYGBgXG4gIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGUtd3JhcHBlclwiPlxuICAgIDxwYXBlci1pbnB1dCBpZD1cIm15SW5wdXRcIiBsYWJlbD1cIlNlbGVjdCBTdGF0ZVwiPjwvcGFwZXItaW5wdXQ+XG5cbiAgICA8cGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zXG4gICAgICBmb3I9XCJteUlucHV0XCJcbiAgICAgIHNvdXJjZT1cIltbYWNjb3VudHNdXVwiPjwvcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zPlxuICA8L2Rpdj5cbiAgYGBgXG5cbiAgSXQgaXMgKippbXBvcnRhbnQgdG8gcHJvdmlkZSBib3RoIGB0ZXh0UHJvcGVydHlgIGFuZCBgdmFsdWVQcm9wZXJ0eWAgd2hlbiB3b3JraW5nIHdpdGggYSBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uIGFuZFxuICBvciBjdXN0b20gdGVtcGxhdGVzLioqIFRoZXkgYXJlIG5lZWRlZCB0byBrZWVwIHRoZSBjb21wb25lbnQgYWNjZXNzaWJsZSBhbmQgZm9yIHRoZSBldmVudHMgKGUuZy4gb25TZWxlY3QpIHRvIGtlZXBcbiAgd29ya2luZy5cblxuICAjIyMgQWJvdXQgUG9seW1lciAxLnggYW5kIDIueCBDb21wYXRpYmlsaXR5XG4gIEZyb20gdmVyc2lvbiBgMy54LnhgLCB0aGlzIGNvbXBvbmVudCB3b3JrIHdpdGggYm90aCBQb2x5bWVyIDEuNysgb3IgUG9seW1lciAyLjArIFBsZWFzZSB0YWtlIGEgbG9vayB0byB0aGVcbiAgW01JR1JBVElPTi5tZF0oLi9NSUdSQVRJT04ubWQpIGZpbGUgdGhhdCBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICMjIyBDdXN0b20gc2VhcmNoXG4gIFRoaXMgY29tcG9uZW50IGhhcyB0aGUgcHVibGljIG1ldGhvZCBgcXVlcnlGbmAgdGhhdCBpcyBjYWxsZWQgaW4gZWFjaCBrZXkgc3Ryb2tlIGFuZCBpdCBpcyByZXNwb25zaWJsZSB0byBxdWVyeVxuICBhbGwgaXRlbXMgaW4gdGhlIGBzb3VyY2VgIGFuZCByZXR1cm5zIG9ubHkgdGhvc2UgaXRlbXMgdGhhdCBtYXRjaGVzIGNlcnRhaW4gZmlsdGVyaW5nIGNyaXRlcmlhLiBCeSBkZWZhdWx0LCB0aGlzXG4gIGNvbXBvbmVudCBzZWFyY2ggZm9yIGl0ZW1zIHRoYXQgc3RhcnQgd2l0aCB0aGUgcmVjZW50IHF1ZXJ5IChjYXNlIGluc2Vuc2l0aXZlKS5cbiAgWW91IGNhbiBvdmVycmlkZSB0aGlzIGJlaGF2aW9yIHByb3ZpZGluZyB5b3VyIG93biBxdWVyeSBmdW5jdGlvbiwgYXMgbG9uZyBhcyB0aGVzZSB0d28gcmVxdWlyZW1lbnRzIGFyZSBmdWxmaWxsOlxuXG4gIC0gVGhlIHF1ZXJ5IGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLlxuICAtIFRoZSBBUEkgaXMgcmVzcGVjdGVkIGFuZCB0aGUgbWV0aG9kIGFsd2F5cyByZXR1cm4gYW4gQXJyYXkuXG5cblxuICBUaGUgdGVtcGxhdGUgdXNlIHRvIHJlbmRlciBlYWNoIHN1Z2dlc3Rpb24gZGVwZW5kcyBvbiB0aGUgc3RydWN0dXJlIG9mIGVhY2ggb2JqZWN0IHRoYXQgdGhpcyBtZXRob2QgcmV0dXJucy4gRm9yIHRoZVxuICBkZWZhdWx0IHRlbXBsYXRlLCBlYWNoIHN1Z2dlc3Rpb24gc2hvdWxkIGZvbGxvdyB0aGlzIG9iamVjdCBzdHJ1Y3R1cmU6XG5cbiAgYGBgXG4gICAge1xuICAgICAgdGV4dDogb2JqVGV4dCxcbiAgICAgIHZhbHVlOiBvYmpWYWx1ZVxuICAgIH1cbiAgYGBgXG5cbiAgVGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgd2hlbiBhIGxvY2FsIGRhdGEgc291cmNlIGlzIHVzZWQuIFdoZW4gdXNpbmcgYSBgcmVtb3RlRGF0YVNvdXJjZWAgdXNlciBpcyByZXNwb25zaWJsZSBvZlxuICBkb2luZyB0aGUgc2VhcmNoIGFuZCBzcGVjaWZ5IHN1Z2dlc3Rpb25zIG1hbnVhbGx5LlxuXG4gICMjIyBDdXN0b20gdGVtcGxhdGVzXG4gIEEgdGVtcGxhdGUgZm9yIGVhY2ggc3VnZ2VzdGlvbiBjYW4gYmUgcHJvdmlkZWQsIGJ1dCBmb3Igbm93LCB0aGVyZSBhcmUgbGltaXRhdGlvbnMgaW4gdGhlIHdheSB5b3UgY2FuIGN1c3RvbWl6ZVxuICB0aGUgdGVtcGxhdGUuIFBsZWFzZSByZWFkIHRoZSB0aGUgZm9sbG93aW5nIHNlY3Rpb25zIGNhcmVmdWxseS5cbiAgSW4gb3JkZXIgdG8gc2V0IHlvdXIgb3duIHRlbXBsYXRlLCB5b3UgbmVlZCB0byBhZGQgYSBgPHRlbXBsYXRlPmAgdGFnIHdpdGggdGhlIHNsb3QgbmFtZVxuICBgYXV0b2NvbXBsZXRlLWN1c3RvbS10ZW1wbGF0ZWAgYW5kIGEgc3RydWN0dXJlIGVxdWl2YWxlbnQgdG8gdGhlIG9uZSBzaG93biBpbiB0aGUgYDxhY2NvdW50LWF1dG9jb21wbGV0ZT5gIGNvbXBvbmVudCBpblxuICB0aGUgZGVtby5cblxuICBZb3UgbmVlZCB0byBhbHdheXMgbWFpbnRhaW4gdGhpcyBzdHJ1Y3R1cmUuIFRoZW4geW91IGNhbiBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgcGFwZXItaXRlbS4gVGhlc2UgYXJlIHRoZSByZWFzb25zXG4gIHdoeSB5b3UgbmVlZCB0byBtYWludGFpbiBpdDpcblxuICAtIGBvblNlbGVjdEhhbmRsZXJgIGl0IGlzIHZlcnkgaW1wb3J0YW50IGJlY2F1c2UgaXQgd2lsbCBub3RpZnkgdGhlIGBhdXRvY29tcGxldGVgIGNvbXBvbmVudCB3aGVuIHVzZXIgc2VsZWN0cyBvbmUgaXRlbS5cbiAgSWYgeW91IGRvbid0IGFkZCB0aGlzIG9wdGlvbiwgd2hlbiB1c2VyIGNsaWNrcyBpbiBvbmUgb2YgdGhlIGl0ZW1zLCBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAtIGBpZGAsIGByb2xlYCBhbmQgYGFyaWEtc2VsZWN0ZWRgIG5lZWQgdG8gYmUgdGhlcmUgZm9yIGFjY2Vzc2liaWxpdHkgcmVhc29ucy4gSWYgeW91IGRvbid0IHNldCB0aGVtLCB0aGUgY29tcG9uZW50XG4gIHdpbGwgY29udGludWUgd29ya2luZyBidXQgaXQgd2lsbCBub3QgYmUgYWNjZXNzaWJsZSBmb3IgdXNlciB3aXRoIGRpc2FiaWxpdGllcy5cblxuXG4gIEl0IGlzIGltcG9ydGFudCB0byBjbGFyaWZ5IHRoYXQgbWV0aG9kcyBgX29uU2VsZWN0YCBhbmQgYF9nZXRTdWdnZXN0aW9uSWRgIGRvIG5vdCBuZWVkIHRvIGJlIGltcGxlbWVudGVkLiBUaGV5IGFyZVxuICBwYXJ0IG9mIHRoZSBsb2dpYyBvZiBgcGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zYC5cblxuICBXaGVuIHByb3ZpZGluZyB5b3VyIG93biBjdXN0b20gdGVtcGxhdGUsIHlvdSBtaWdodCBhbHNvIG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBjdXN0b20gc2VhcmNoIGZ1bmN0aW9uLiBUaGUgcmVhc29uXG4gIGZvciB0aGF0IGlzIHRoYXQgdGhlIGRlZmF1bHQgc2VhcmNoIGZ1bmN0aW9uIG9ubHkgZXhwb3NlcyB0ZXh0IGFuZCB2YWx1ZSBpbiB0aGUgcmVzdWx0cy4gSWYgZWFjaCBpdGVtIGluIHlvdXIgZGF0YVxuICBzb3VyY2UgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiwgdGhlbiB5b3Ugd29uJ3QgYmUgYWJsZSB0byBhY2Nlc3MgaXQuIFNlZSB0aGUgY29kZSBvZiBgPGFkZHJlc3MtYXV0b2NvbXBsZXRlPmBcbiAgZWxlbWVudCBpbiB0aGUgZGVtbyBmb2xkZXIgZm9yIGEgY29tcGxldGUgZXhhbXBsZS5cblxuICBBbm90aGVyIGltcG9ydGFudCB0aGluZyB0byBwb2ludCBvdXQgaXMgcmVsYXRlZCB0byB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGluIHRoZSByZXN1bHRzLiBUaGUgaGVpZ2h0IG9mXG4gIHRoZSBzdWdnZXN0aW9uIHRlbXBsYXRlIGNoYW5nZXMgZHluYW1pY2FsbHkgZGVwZW5kaW5nIG9uIHRoZSBoZWlnaHQgb2YgYSBzdWdnZXN0aW9uIGl0ZW0uIEhvd2V2ZXIsIHRoZSBmb2xsb3dpbmdcbiAgYXNzdW1wdGlvbnMgd2VyZSBtYWRlOlxuICAtIEFsbCBzdWdnZXN0aW9ucyBpdGVtcyBoYXZlIHRoZSBzYW1lIGhlaWdodFxuICAtIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGlzIGZpeGVkIGFuZCBjYW4gYmUgZGV0ZXJtaW5lZCBhdCBhbnkgdGltZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHVzZSBpbWFnZXMgaW4gdGhlXG4gIHJlc3VsdHMsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgYSBwbGFjZWhvbGRlciBvciBhIGZpeGVkIGhlaWdodC5cblxuXG4gICMjIyBTdHlsaW5nXG5cbiAgYDxwYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+YCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnNcbiAgZm9yIHN0eWxpbmc6XG5cbiAgQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4gIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG4gIGAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodGAgfCBwYXBlciBpdGVtIG1pbiBoZWlnaHQgfCBgMzZweGBcbiAgYC0tc3VnZ2VzdGlvbnMtd3JhcHBlcmAgfCBtaXhpbiB0byBhcHBseSB0byB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyIHwgYHt9YFxuICBgLS1zdWdnZXN0aW9ucy1pdGVtYCB8IG1peGluIHRvIGFwcGx5IHRvIHRoZSBzdWdnZXN0aW9ucyBpdGVtcyB8IGB7fWBcblxuICAjIyMgQWNjZXNzaWJpbGl0eVxuICBUaGlzIGNvbXBvbmVudCBleHBvc2VzIGNlcnRhaW4gbmVjZXNzYXJ5IHZhbHVlcyBpbiBvcmRlciB0byBtYWtlIHlvdXIgY29tcG9uZW50IGFjY2Vzc2libGUuIFdoZW4gY2hlY2tpbmcgdGhlIEFSSUFcbiAgc3BlY3MsIGl0IGlzIHNhaWQgdGhhdCB5b3UgbmVlZCB0byBpbmZvcm0gdXNlcnMgb2YgdGhlIGZvbGxvd2luZyBjaGFuZ2VzOlxuICAtIFdoZXRoZXIgdGhlIHBvcHVwIHdpdGggc3VnZ2VzdGlvbnMgaXMgb3BlbiBvciBub3QuXG4gIC0gSWQgb2YgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBlbGVtZW50XG5cbiBZb3UgY2FuIGFjY2VzcyB0aGVzZSB2YWx1ZXMgdXNpbmcgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBgaXNPcGVuYCBhbmQgYGhpZ2hsaWdodGVkU3VnZ2VzdGlvbmAuIFRoZSBpZCBvZiBlYWNoXG4gZWxlbWVudCBpbiBoaWdobGlnaHRlZFN1Z2dlc3Rpb24gYSByYW5kb20gYW5kIHVuaXF1ZSBpZC5cblxuIEluIGFkZGl0aW9uLCBhcyBsb25nIGFzIGRldmVsb3BlcnMgZm9sbG93IHRoZSBnZW5lcmFsIHN0cnVjdHVyZSBvZiBlYWNoIHN1Z2dlc3Rpb24gdGVtcGxhdGUsIHRoZSBmb2xsb3dpbmcgQTExWVxuIGZlYXR1cmVzIGFyZSBzZXQgaW4gZWFjaCBzdWdnZXN0aW9uOlxuIC0gYHJvbGU9XCJvcHRpb25cImBcbiAtIGBhcmlhLXNlbGVjdGVkPVwidHJ1ZXxmYWxzZVwiYC4gVGhpcyB2YWx1ZSB3aWxsIGJlIGZhbHNlIGZvciBhbGwgc3VnZ2VzdGlvbiBleGNlcHQgaW4gdGhlIG9uZSB3aGljaCBpcyBjdXJyZW50bHlcbiBoaWdobGlnaHRlZC5cblxuICBAZGVtbyBkZW1vL3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1kZW1vLmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9uc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgcGFwZXItbWF0ZXJpYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWF4LWhlaWdodDogMjUycHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgQGFwcGx5IC0tc3VnZ2VzdGlvbnMtd3JhcHBlcjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSxcbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pdGVtKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgMzZweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgICAgICBAYXBwbHkgLS1zdWdnZXN0aW9ucy1pdGVtO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtOmhvdmVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWl0ZW06aG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbS5hY3RpdmUsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaXRlbS5hY3RpdmUpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSUUxMSBwYXBlci1pdGVtIG1pbi1oZWlnaHQgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWl0ZW0vaXNzdWVzLzM1XG4gICAgICAgKi9cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCAzNnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdj5cbiAgICAgIDwhLS0gdW5zZWxlY3RhYmxlIGlzIG5lZWRlZCB0byBmaXggYW4gaXNzdWUgcmVsYXRlZCB0byB0aGUgZm9jdXMgYmVpbmcgdGFrZW4gYXdheSB3aGVuIGNsaWNraW5nIGluIHRoZVxuICAgICAgIHJlc3VsdHMgc2Nyb2xsYmFyIC0tPlxuICAgICAgPHBhcGVyLW1hdGVyaWFsIGVsZXZhdGlvbj1cIjFcIiBpZD1cInN1Z2dlc3Rpb25zV3JhcHBlclwiIHVuc2VsZWN0YWJsZT1cIm9uXCI+PC9wYXBlci1tYXRlcmlhbD5cblxuICAgICAgPCEtLSBEZWZhdWx0IHN1Z2dlc3Rpb24gdGVtcGxhdGUgLS0+XG4gICAgICA8dGVtcGxhdGUgaWQ9XCJkZWZhdWx0VGVtcGxhdGVcIj5cbiAgICAgICAgPHBhcGVyLWl0ZW0gaWQkPVwiW1tfZ2V0U3VnZ2VzdGlvbklkKGluZGV4KV1dXCIgcm9sZT1cIm9wdGlvblwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiIG9uLXRhcD1cIl9vblNlbGVjdFwiPlxuICAgICAgICAgIDxkaXY+W1tfZ2V0SXRlbVRleHQoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgPCEtLSBDdXN0b20gdGVtcGxhdGUgLS0+XG4gIDxzbG90IGlkPVwidGVtcGxhdGVzXCIgbmFtZT1cImF1dG9jb21wbGV0ZS1jdXN0b20tdGVtcGxhdGVcIj48L3Nsb3Q+XG4gIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPHNjcmlwdD5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBESVJFQ1RJT04gPSB7XG4gICAgICBVUDogJ3VwJyxcbiAgICAgIERPV046ICdkb3duJ1xuICAgIH07XG5cbiAgICB2YXIgS0VZX0NPREVTID0ge1xuICAgICAgTEVGVF9BUlJPVzogMzcsXG4gICAgICBSSUdIVF9BUlJPVzogMzksXG4gICAgICBVUF9BUlJPVzogMzgsXG4gICAgICBET1dOX0FSUk9XOiA0MCxcbiAgICAgIEVOVEVSOiAxMyxcbiAgICAgIEVTQ0FQRTogMjdcbiAgICB9O1xuXG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucycsXG5cbiAgICAgIGJlaGF2aW9yczogW1xuICAgICAgICBQb2x5bWVyLlRlbXBsYXRpemVyXG4gICAgICBdLFxuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZCBvZiBpbnB1dFxuICAgICAgICAgKi9cbiAgICAgICAgJ2Zvcic6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYHRydWVgIGlmIHRoZSBzdWdnZXN0aW9ucyBsaXN0IGlzIG9wZW4sIGBmYWxzZSBvdGhlcndpc2VgXG4gICAgICAgICAqL1xuICAgICAgICBpc09wZW46IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWluaW11bSBsZW5ndGggdG8gdHJpZ2dlciBzdWdnZXN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1heCBudW1iZXIgb2Ygc3VnZ2VzdGlvbnMgdG8gYmUgZGlzcGxheWVkIHdpdGhvdXQgc2Nyb2xsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtYXhWaWV3YWJsZUl0ZW1zOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiA3XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHRleHQgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRleHRQcm9wZXJ0eToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnR5IG9mIGxvY2FsIGRhdGFzb3VyY2UgdG8gYXMgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZVByb3BlcnR5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBzb3VyY2VgIEFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgb3B0aW9ucyB0byBleGVjdXRlIHRoZSBhdXRvY29tcGxldGUgZmVhdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHNlbGVjdGVkIG9wdGlvbi4gVGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IGRlcGVuZHMgb24gdGhlXG4gICAgICAgICAqICBzdHJ1Y3R1cmUgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBkYXRhIHNvdXJjZS5cbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uOiB7XG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyB0byBhIHJlbW90ZSBkYXRhIHNvdXJjZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlU291cmNlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgdHlwZSBzZXBhcmF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50TmFtZXNwYWNlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnLSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBoaWdobGlnaHRlZCBzdWdnZXN0aW9uLiBUaGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgaXM6XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgIGVsZW1lbnRJZDogSUQgLy8gaWQgb2YgdGhlIGhpZ2hsaWdodGVkIERPTSBlbGVtZW50XG4gICAgICAgICAqICAgIG9wdGlvbjogLy8gaGlnaGxpZ2h0ZWQgb3B0aW9uIGRhdGFcbiAgICAgICAgICogfVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodGVkU3VnZ2VzdGlvbjoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICB2YWx1ZToge30sXG4gICAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIGF2YWlsYWJsZSBpdGVtcy4gVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSB1c2VkIGJ5IHBhcGVyLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyxcbiAgICAgICAgICogaXQgaXMgYWxzbyBleHBvc2VkIGhlcmUgc28gaXQgaXMgcG9zc2libGUgdG8gcHJvdmlkZSBhIGN1c3RvbSBxdWVyeUZuLlxuICAgICAgICAgKi9cbiAgICAgICAgIHF1ZXJ5Rm46IHtcbiAgICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGl0IHdpbGwgYWx3YXlzIGhpZ2hsaWdodCB0aGUgZmlyc3QgcmVzdWx0IGVhY2ggdGltZSBuZXcgc3VnZ2VzdGlvbnMgYXJlIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodEZpcnN0OiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYF9zdWdnZXN0aW9uc2AgQXJyYXkgd2l0aCB0aGUgYWN0dWFsIHN1Z2dlc3Rpb25zIHRvIGRpc3BsYXlcbiAgICAgICAgICovXG4gICAgICAgIF9zdWdnZXN0aW9uczoge1xuICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgIG9ic2VydmVyOiAnX29uU3VnZ2VzdGlvbnNDaGFuZ2VkJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIGluIHRoZSBzdWdnZXN0aW9ucyBwb3B1cCBvZiB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIGVsZW1lbnQsIGJlaW5nIGAwYCB0aGUgZmlyc3Qgb25lLFxuICAgICAgICAgKiBhbmQgYHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCAtIDFgIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAqL1xuICAgICAgICBfY3VycmVudEluZGV4OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC4gVGhlbiB0aGUgYHNjcm9sbFRvcGAgcG9zaXRpb24gaXMgY2FsY3VsYXRlZCBtdWx0aXBseWluZyB0aGVcbiAgICAgICAgICogYF9pdGVtSGVpZ2h0YCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxuICAgICAgICAgKi9cbiAgICAgICAgX3Njcm9sbEluZGV4OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlaWdodCBvZiBlYWNoIHN1Z2dlc3Rpb24gZWxlbWVudCBpbiBwaXhlbHNcbiAgICAgICAgICovXG4gICAgICAgIF9pdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAzNixcbiAgICAgICAgICBvYnNlcnZlcjogJ19pdGVtSGVpZ2h0Q2hhbmdlZCdcbiAgICAgICAgfSxcblxuICAgICAgICBfdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgX3RleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgdmFsdWUgaXMgdXNlZCBhcyBhIGJhc2UgdG8gZ2VuZXJhdGUgdW5pcXVlIGluZGl2aWR1YWwgaWRzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byBlYWNoIHN1Z2dlc3Rpb24gZm9yXG4gICAgICAgICAqIGFjY2Vzc2liaWxpdHkgcmVhc29ucy5cbiAgICAgICAgICovXG4gICAgICAgIF9pZEl0ZW1TZWVkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHZhbHVlOiAnYXJpYS0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnLScgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkpLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byBiaW5kZWQgZnVuY3Rpb25zIHNvIHdlIGNhbiBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXIgb24gZWxlbWVudCBkZXRhY2hlZFxuICAgICAgICAgKi9cbiAgICAgICAgX2JpbmRlZEZ1bmN0aW9uczoge1xuICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgX29uS2V5cHJlc3M6IG51bGwsXG4gICAgICAgICAgICAgIF9vbkZvY3VzOiBudWxsLFxuICAgICAgICAgICAgICBfb25CbHVyOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0aGUgaGVpZ2h0IG9mIGVhY2ggc3VnZ2VzdGlvbiBpdGVtIGhhcyBiZWVuIGFscmVhZHkgY2FsY3VsYXRlZC5cbiAgICAgICAgICogVGhlIGFzc3VtcHRpb24gaXMgdGhhdCBpdGVtIGhlaWdodCBpcyBmaXhlZCBhbmQgaXQgd2lsbCBub3QgY2hhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUbyBhdm9pZCB1bm5lY2Vzc2FyeSBhY2Nlc3MgdG8gdGhlIERPTSwgd2Uga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCB0ZW1wbGF0ZSBiZWluZyB1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBfX2N1c3RvbVRwbFJlZjogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvLyBFbGVtZW50IExpZmVjeWNsZVxuXG4gICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgdG8gYmUgYWJsZSB0byBhY2Nlc3MgY29tcG9uZW50IG1ldGhvZHMgaW5zaWRlIHRoZSB0ZW1wbGF0ZXMgdXNlZCB3aXRoIFRlbXBsYXRpemVyXG4gICAgICAgIHRoaXMuZGF0YUhvc3QgPSB0aGlzO1xuXG4gICAgICAgIC8vIE5lZWQgdG8gY2FwdHVyZSBtb3VzZWRvd24gdG8gcHJldmVudCB0aGUgZm9jdXMgdG8gc3dpdGNoIGZyb20gaW5wdXQgZmllbGQgd2hlbiB1c2VyIGNsaWNrcyBpbiB0aGUgc2Nyb2xsYmFyXG4gICAgICAgIC8vIGFuZCB0aGUgYXV0b3N1Z2dlc3QgaXMgYSBjaGlsZCBvZiBhbiBlbGVtZW50IHdpdGggdGFiaW5kZXguXG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBlbmZvcmNlIHRoYXQgZGF0YUhvc3QgaXMgdGhlIHN1Z2dlc3Rpb25zIGFuZCBub3QgdGhlIGN1c3RvbSBwb2x5bWVyIGVsZW1lbnQgd2hlcmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIC8vIGlzIGRlZmluZWQuIElmIHdlIGRvIG5vdCBkbyB0aGlzLCBpdCB3b24ndCBiZSBwb3NzaWJsZSB0byBhY2Nlc3MgcGFwZXJTdWdnZXN0aW9ucyBmcm9tIHRoZSBjdXN0b20gdGVtcGxhdGVcbiAgICAgICAgLy8gVE9ETzogZmluZCBhIHdheSB0byBhY2hpZXZlIHRoaXMgd2l0aG91dCBtb2RpZnlpbmcgUG9seW1lciBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25UZW1wbGF0ZS5fX2RhdGFIb3N0ID0gdGhpcztcbiAgICAgICAgdGhpcy50ZW1wbGF0aXplKHRoaXMuX3N1Z2dlc3Rpb25UZW1wbGF0ZSk7XG4gICAgICB9LFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZm9yKTtcblxuICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGlucHV0IGZpZWxkIHdpdGggaWQ6ICcgKyB0aGlzLmZvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uS2V5cHJlc3MgPSB0aGlzLl9vbktleXByZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25LZXlwcmVzcyk7XG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkZvY3VzKTtcbiAgICAgICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JpbmRlZEZ1bmN0aW9ucy5fb25CbHVyKTtcbiAgICAgIH0sXG5cbiAgICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRGVib3VuY2VyKCdfb25TdWdnZXN0aW9uQ2hhbmdlZCcpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbktleXByZXNzKTtcbiAgICAgICAgdGhpcy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9iaW5kZWRGdW5jdGlvbnMuX29uRm9jdXMpO1xuICAgICAgICB0aGlzLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYmluZGVkRnVuY3Rpb25zLl9vbkJsdXIpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2N1c3RvbVRwbFJlZiA9IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyBFbGVtZW50IEJlaGF2aW9yXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSB0ZXh0IHByb3BlcnR5IGZyb20gdGhlIHN1Z2dlc3Rpb25cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWdnZXN0aW9uIFRoZSBzdWdnZXN0aW9uIGl0ZW1cbiAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgX2dldEl0ZW1UZXh0OiBmdW5jdGlvbiAoc3VnZ2VzdGlvbikge1xuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvblt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNob3cgdGhlIHN1Z2dlc3Rpb25zIHdyYXBwZXJcbiAgICAgICAqL1xuICAgICAgX3Nob3dTdWdnZXN0aW9uc1dyYXBwZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zV3JhcHBlciA9IHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXI7XG5cbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBzdWdnZXN0aW9uc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGUgdGhlIHN1Z2dlc3Rpb25zIHdyYXBwZXJcbiAgICAgICAqL1xuICAgICAgX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zV3JhcHBlciA9IHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXI7XG5cbiAgICAgICAgc3VnZ2VzdGlvbnNXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkU3VnZ2VzdGlvbiA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2NsZWFyU3VnZ2VzdGlvbnMoKTtcbiAgICAgIH0sXG5cbiAgICAgIF9oYW5kbGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5yZW1vdGVTb3VyY2UpIHRoaXMuX2NyZWF0ZVN1Z2dlc3Rpb25zKGV2ZW50KTtcbiAgICAgICAgZWxzZSB0aGlzLl9yZW1vdGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgX3JlbW90ZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lucHV0LnZhbHVlO1xuXG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdjaGFuZ2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfYmluZFN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIGlmIChhcnIubGVuZ3RoICYmIGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBhcnI7XG4gICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsSW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9jcmVhdGVTdWdnZXN0aW9uczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IDA7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIC8vIFNlYXJjaCBmb3IgdGhlIHdvcmQgaW4gdGhlIHNvdXJjZSBwcm9wZXJ0aWVzLlxuICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHF1ZXJ5Rm4uIFVzZXIgY2FuIG92ZXJyaWRlIHF1ZXJ5Rm4oKSB0byBwcm92aWRlIGN1c3RvbSBzZWFyY2ggZnVuY3Rpb25hbGl0eVxuICAgICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLnF1ZXJ5Rm4odGhpcy5zb3VyY2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZ2V0IF9zdWdnZXN0aW9uVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fY3VzdG9tVHBsUmVmKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19jdXN0b21UcGxSZWY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1c3RvbVRlbXBsYXRlID0gdGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLl9fY3VzdG9tVHBsUmVmID0gY3VzdG9tVGVtcGxhdGUubGVuZ3RoID4gMCA/IGN1c3RvbVRlbXBsYXRlWzBdIDogdGhpcy4kLmRlZmF1bHRUZW1wbGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fX2N1c3RvbVRwbFJlZjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVuZGVyIHN1Z2dlc3Rpb25zIGluIHRoZSBzdWdnZXN0aW9uc1dyYXBwZXIgY29udGFpbmVyXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBzdWdnZXN0aW9ucyBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzdWdnZXN0aW9ucyB0byBiZSByZW5kZXJlZC4gVGhpcyB2YWx1ZSBpcyBub3Qgb3B0aW9uYWwsIHNvXG4gICAgICAgKiAgICBpbiBjYXNlIG5vIHN1Z2dlc3Rpb25zIG5lZWQgdG8gYmUgcmVuZGVyZWQsIHlvdSBzaG91bGQgZWl0aGVyIG5vdCBjYWxsIHRoaXMgbWV0aG9kIG9yIHByb3ZpZGUgYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIF9yZW5kZXJTdWdnZXN0aW9uczogZnVuY3Rpb24gKHN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IFBvbHltZXIuZG9tKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIpO1xuICAgICAgICB2YXIgaXNQb2x5bWVyMSA9ICFQb2x5bWVyLkVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fY2xlYXJTdWdnZXN0aW9ucygpO1xuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoc3VnZ2VzdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgaW5kZXgpIHtcbiAgICAgICAgICAvLyBjbG9uZSB0aGUgdGVtcGxhdGUgYW5kIGJpbmQgd2l0aCB0aGUgbW9kZWxcbiAgICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnN0YW1wKCk7XG4gICAgICAgICAgY2xvbmUuaXRlbSA9IHJlc3VsdDtcbiAgICAgICAgICBjbG9uZS5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgLy8gRGlmZmVyZW50IHN0YW1waW5nIG1vZGUgYmFzZWQgb24gUG9seW1lciB2ZXJzaW9uXG4gICAgICAgICAgaWYgKGlzUG9seW1lcjEpIHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lLnJvb3QucXVlcnlTZWxlY3RvcignKicpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUucm9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LFxuXG4gICAgICBfY2xlYXJTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBQb2x5bWVyLmRvbSh0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyKSxcbiAgICAgICAgICBsYXN0O1xuICAgICAgICB3aGlsZSAobGFzdCA9IHN1Z2dlc3Rpb25zQ29udGFpbmVyLmxhc3RDaGlsZCkgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbmVyIHRvIGNoYW5nZXMgdG8gX3N1Z2dlc3Rpb25zIHN0YXRlXG4gICAgICAgKi9cbiAgICAgIF9vblN1Z2dlc3Rpb25zQ2hhbmdlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlKCdfb25TdWdnZXN0aW9uQ2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJTdWdnZXN0aW9ucyh0aGlzLl9zdWdnZXN0aW9ucyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1N1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU3VnZ2VzdGlvbnNXcmFwcGVyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUG9seW1lci5kb20uZmx1c2goKTtcblxuICAgICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsKCk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX2hhc0l0ZW1IaWdoQmVlbkNhbGN1bGF0ZWQpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdFN1Z2dlc3Rpb25FbGVtZW50ID0gdGhpcy4kLnN1Z2dlc3Rpb25zV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdwYXBlci1pdGVtJyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFN1Z2dlc3Rpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBtYXhIZWlnaHQgb2Ygc3VnZ2VzdGlvbnMgd3JhcHBlciBkZXBlbmRpbmcgb24gdGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gcmVzdWx0XG4gICAgICAgICAgICAgIHRoaXMuX2l0ZW1IZWlnaHQgPSBmaXJzdFN1Z2dlc3Rpb25FbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICB0aGlzLl9oYXNJdGVtSGlnaEJlZW5DYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fbW92ZUhpZ2hsaWdodGVkKERJUkVDVElPTi5ET1dOKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0aW9uOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gdGhpcy5fc3VnZ2VzdGlvbnNbaW5kZXhdO1xuXG4gICAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gc2VsZWN0ZWRPcHRpb25bdGhpcy50ZXh0UHJvcGVydHldO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gc2VsZWN0ZWRPcHRpb247XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICB0aGlzLl9lbXB0eUl0ZW1zKCk7XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KHNlbGVjdGVkT3B0aW9uLCAnc2VsZWN0ZWQnKTtcblxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgYWxsIHN1Z2dlc3Rpb24gZWxlbWVudHNcbiAgICAgICAqIEByZXR1cm4ge0FycmF5fSBhIGxpc3Qgb2YgYWxsIHN1Z2dlc3Rpb24gZWxlbWVudHNcbiAgICAgICAqL1xuICAgICAgX2dldEl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQuc3VnZ2VzdGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhcGVyLWl0ZW0nKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRW1wdHkgdGhlIGxpc3Qgb2YgY3VycmVudCBzdWdnZXN0aW9ucyBiZWluZyBkaXNwbGF5ZWRcbiAgICAgICAqL1xuICAgICAgX2VtcHR5SXRlbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgIH0sXG5cbiAgICAgIF9nZXRJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKCFpZCkgaWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRoZSB0aGUgYWN0aXZlIHN0YXRlIGZyb20gYWxsIHN1Z2dlc3Rpb24gaXRlbXNcbiAgICAgICAqL1xuICAgICAgX3JlbW92ZUFjdGl2ZTogZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIFtdLnNsaWNlLmNhbGwoaXRlbXMpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBLZXkgcHJlc3MgZXZlbnQgaGFuZGxlclxuICAgICAgICovXG4gICAgICBfb25LZXlwcmVzczogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRE9XTl9BUlJPVzpcbiAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5VUF9BUlJPVzpcbiAgICAgICAgICB0aGlzLl9tb3ZlSGlnaGxpZ2h0ZWQoRElSRUNUSU9OLlVQKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5URVI6XG4gICAgICAgICAgdGhpcy5fa2V5ZW50ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLRVlfQ09ERVMuRVNDQVBFOlxuICAgICAgICAgIHRoaXMuX2hpZGVTdWdnZXN0aW9uc1dyYXBwZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBGb3IgbGVmdCBhbmQgcmlnaHQgYXJyb3csIGNvbXBvbmVudCBzaG91bGQgZG8gbm90aGluZ1xuICAgICAgICBjYXNlIEtFWV9DT0RFUy5MRUZUX0FSUk9XOlxuICAgICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgICAgICBjYXNlIEtFWV9DT0RFUy5SSUdIVF9BUlJPVzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVTdWdnZXN0aW9ucyhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIGtleSBFTlRFUiBwcmVzcyBldmVudFxuICAgICAgICovXG4gICAgICBfa2V5ZW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiB0aGlzLl9jdXJyZW50SW5kZXggPiAtMSkge1xuICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqICBNb3ZlIHRoZSBjdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb24gdXAgb3IgZG93blxuICAgICAgICogIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb24gUG9zc2libGUgdmFsdWVzIGFyZSBESVJFQ1RJT04uVVAgb3IgRElSRUNUSU9OLkRPV05cbiAgICAgICAqL1xuICAgICAgX21vdmVIaWdobGlnaHRlZDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpO1xuXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbnVtYmVyT2ZJdGVtcyA9IGl0ZW1zLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdmFyIGlzRmlyc3RJdGVtID0gdGhpcy5fY3VycmVudEluZGV4ID09PSAwO1xuICAgICAgICB2YXIgaXNMYXN0SXRlbSA9IHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gbnVtYmVyT2ZJdGVtcztcbiAgICAgICAgdmFyIGlzTm9JdGVtSGlnaGxpZ2h0ZWQgPSB0aGlzLl9jdXJyZW50SW5kZXggPT09IC0xO1xuXG4gICAgICAgIGlmICgoaXNOb0l0ZW1IaWdobGlnaHRlZCB8fCBpc0ZpcnN0SXRlbSkgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBudW1iZXJPZkl0ZW1zO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdEl0ZW0gJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTikge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVyID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTiA/IDEgOiAtMTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggKyBtb2RpZmllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoaWdobGlnaHRlZE9wdGlvbiA9IHRoaXMuX3N1Z2dlc3Rpb25zW3RoaXMuX2N1cnJlbnRJbmRleF07XG4gICAgICAgIHZhciBoaWdobGlnaHRlZEl0ZW0gPSBpdGVtc1t0aGlzLl9jdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZUFjdGl2ZShpdGVtcyk7XG5cbiAgICAgICAgaGlnaGxpZ2h0ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoaWdobGlnaHRlZEl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICB0aGlzLl9zZXRIaWdobGlnaHRlZFN1Z2dlc3Rpb24oaGlnaGxpZ2h0ZWRPcHRpb24sIGhpZ2hsaWdodGVkSXRlbS5pZCk7XG5cbiAgICAgICAgdGhpcy5fc2Nyb2xsKGRpcmVjdGlvbik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1vdmUgc2Nyb2xsIChpZiBuZWVkZWQpIHRvIGRpc3BsYXkgdGhlIGFjdGl2ZSBlbGVtZW50IGluIHRoZSBzdWdnZXN0aW9ucyBsaXN0LlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBEaXJlY3Rpb24gdG8gc2Nyb2xsLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBESVJFQ1RJT04uVVBgIGFuZCBgRElSRUNUSU9OLkRPV05gLlxuICAgICAgICovXG4gICAgICBfc2Nyb2xsOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBuZXdTY3JvbGxWYWx1ZSwgaXNTZWxlY3RlZE91dE9mVmlldztcblxuICAgICAgICB2YXIgdmlld0luZGV4ID0gdGhpcy5fY3VycmVudEluZGV4IC0gdGhpcy5fc2Nyb2xsSW5kZXg7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIG9ubHkgd2hlbiB1c2VyIHN3aXRjaCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdCBvbmVcbiAgICAgICAgdmFyIGlzRmlyc3RJdGVtQW5kT3V0T2ZWaWV3ID0gdGhpcy5fY3VycmVudEluZGV4ID09PSAwICYmIHZpZXdJbmRleCA8IDA7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIG9ubHkgd2hlbiB1c2VyIHN3aXRjaCBmcm9tIGZpcnN0IG9yIG5vIGl0ZW0gdG8gbGFzdCBvbmVcbiAgICAgICAgdmFyIGlzTGFzdEl0ZW1BbmRPdXRPZlZpZXcgPVxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9PT0gdGhpcy5fc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSAmJiB2aWV3SW5kZXggPj0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuXG4gICAgICAgIGlmIChpc0ZpcnN0SXRlbUFuZE91dE9mVmlldyAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgICAgbmV3U2Nyb2xsVmFsdWUgPSAwO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdEl0ZW1BbmRPdXRPZlZpZXcgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgICAgICBuZXdTY3JvbGxWYWx1ZSA9IHRoaXMuX3N1Z2dlc3Rpb25zLmxlbmd0aCAtIHRoaXMubWF4Vmlld2FibGVJdGVtcztcbiAgICAgICAgICBpc1NlbGVjdGVkT3V0T2ZWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc2Nyb2xsSW5kZXggLSAxO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB2aWV3SW5kZXggPCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Njcm9sbFZhbHVlID0gdGhpcy5fc2Nyb2xsSW5kZXggKyAxO1xuICAgICAgICAgIGlzU2VsZWN0ZWRPdXRPZlZpZXcgPSB2aWV3SW5kZXggPj0gdGhpcy5tYXhWaWV3YWJsZUl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSB3aGVuIHRoZSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGlzIG91dCBvZiB2aWV3LCB3ZSBuZWVkIHRvIG1vdmUgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWRPdXRPZlZpZXcpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxJbmRleCA9IG5ld1Njcm9sbFZhbHVlO1xuICAgICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsSW5kZXggKiB0aGlzLl9pdGVtSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IHNjcm9sbCBiYWNrIHRvIHplcm9cbiAgICAgICAqL1xuICAgICAgX3Jlc2V0U2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSBjdXJyZW50IGhpZ2hsaWdodGVkIHN1Z2dlc3Rpb25cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gRGF0YSBvZiB0aGUgaGlnaGxpZ2h0ZWQgb3B0aW9uXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIGlkIG9mIHRoZSBoaWdobGlnaHRlZCBkb20gZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgX3NldEhpZ2hsaWdodGVkU3VnZ2VzdGlvbjogZnVuY3Rpb24gKG9wdGlvbiwgZWxlbWVudElkKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRTdWdnZXN0aW9uID0ge1xuICAgICAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgICAgIGVsZW1lbnRJZDogZWxlbWVudElkLFxuICAgICAgICAgIHRleHRWYWx1ZTogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uW3RoaXMudmFsdWVQcm9wZXJ0eV1cbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIF9maXJlRXZlbnQ6IGZ1bmN0aW9uIChvcHRpb24sIGV2dCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLl9nZXRJZCgpO1xuICAgICAgICB2YXIgZXZlbnQgPSAnYXV0b2NvbXBsZXRlJyArIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBldnQ7XG5cbiAgICAgICAgdGhpcy5maXJlKGV2ZW50LCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb25bdGhpcy52YWx1ZVByb3BlcnR5XSB8fCBvcHRpb24udmFsdWUsXG4gICAgICAgICAgdGV4dDogb3B0aW9uW3RoaXMudGV4dFByb3BlcnR5XSB8fCBvcHRpb24udGV4dCxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBfb25TZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm1vZGVsRm9yRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KS5pbmRleDtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uKGluZGV4KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIG9uQmx1ciBldmVudFxuICAgICAgICovXG4gICAgICBfb25CbHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KG9wdGlvbiwgJ2JsdXInKTtcblxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgb25Gb2N1cyBldmVudFxuICAgICAgICovXG4gICAgICBfb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5faGFuZGxlU3VnZ2VzdGlvbnMoZXZlbnQpO1xuXG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChvcHRpb24sICdmb2N1cycpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZW5lcmF0ZSBhIHN1Z2dlc3Rpb24gaWQgZm9yIGEgY2VydGFpbiBpbmRleFxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IGluIHRoZSBzdWdnZXN0aW9ucyBsaXN0XG4gICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhIHVuaXF1ZSBpZCBiYXNlZCBvbiB0aGUgX2lkSXRlbVNlZWQgYW5kIHRoZSBwb3NpdGlvbiBvZiB0aGF0IGVsZW1lbnQgaW4gdGhlIHN1Z2dlc3Rpb25zIHBvcHVwXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfZ2V0U3VnZ2VzdGlvbklkOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkSXRlbVNlZWQgKyAnLScgKyBpbmRleDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBpdGVtIGhlaWdodCBpcyBjaGFuZ2VkLCB0aGUgbWF4SGVpZ2h0IG9mIHRoZSBzdWdnZXN0aW9uV3JhcHBlciBuZWVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAqL1xuICAgICAgX2l0ZW1IZWlnaHRDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJC5zdWdnZXN0aW9uc1dyYXBwZXIuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5faXRlbUhlaWdodCAqIHRoaXMubWF4Vmlld2FibGVJdGVtcyArICdweCc7XG4gICAgICB9LFxuXG4gICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICogUFVCTElDXG4gICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHRoZSBjb21wb25lbnQncyBjdXJyZW50IHN1Z2dlc3Rpb25zXG4gICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgICAqL1xuICAgICAgc3VnZ2VzdGlvbnM6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgdGhpcy5fYmluZFN1Z2dlc3Rpb25zKGFycik7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZGVzIHRoZSBzdWdnZXN0aW9ucyBwb3B1cFxuICAgICAgICovXG4gICAgICBoaWRlU3VnZ2VzdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5faGlkZVN1Z2dlc3Rpb25zV3JhcHBlcigpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBRdWVyeSBmdW5jdGlvbiBpcyBjYWxsZWQgb24gZWFjaCBrZXlzdHJva2UgdG8gcXVlcnkgdGhlIGRhdGEgc291cmNlIGFuZCByZXR1cm5zIHRoZSBzdWdnZXN0aW9ucyB0aGF0IG1hdGNoZXNcbiAgICAgICAqIHdpdGggdGhlIGZpbHRlcmluZyBsb2dpYyBpbmNsdWRlZC5cbiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFzb3VyY2UgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgaXRlbXMgYmVmb3JlIGZpbHRlcmluZ1xuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IEN1cnJlbnQgdmFsdWUgaW4gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgb25seSB0aG9zZSBpdGVtcyBpbiB0aGUgZGF0YSBzb3VyY2UgdGhhdCBtYXRjaGVzIHRoZSBmaWx0ZXJpbmcgbG9naWMuXG4gICAgICAgKi9cbiAgICAgIHF1ZXJ5Rm46IGZ1bmN0aW9uIChkYXRhc291cmNlLCBxdWVyeSkge1xuICAgICAgICB2YXIgcXVlcnlSZXN1bHQgPSBbXTtcblxuICAgICAgICBkYXRhc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICB2YXIgb2JqVGV4dCwgb2JqVmFsdWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmpUZXh0ID0gaXRlbVt0aGlzLnRleHRQcm9wZXJ0eV07XG4gICAgICAgICAgICBvYmpWYWx1ZSA9IGl0ZW1bdGhpcy52YWx1ZVByb3BlcnR5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqVGV4dCA9IGl0ZW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG9ialZhbHVlID0gb2JqVGV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob2JqVGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID09PSAwKSB7XG4gICAgICAgICAgICAvLyBOT1RFOiB0aGUgc3RydWN0dXJlIG9mIHRoZSByZXN1bHQgb2JqZWN0IG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCB0ZW1wbGF0ZS4gRm9yIGN1c3RvbSB0ZW1wbGF0ZXMsIHlvdVxuICAgICAgICAgICAgLy8gbWlnaHQgbmVlZCB0byByZXR1cm4gbW9yZSBkYXRhXG4gICAgICAgICAgICBxdWVyeVJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgdGV4dDogb2JqVGV4dCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9ialZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZVxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtc2VsZWN0ZWRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCBjaGFuZ2VcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWNoYW5nZVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGZvY3VzXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGF1dG9jb21wbGV0ZS1mb2N1c1xuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIG9uIGlucHV0IGJsdXJcbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgYXV0b2NvbXBsZXRlLWJsdXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCBvbiBpbnB1dCByZXNldC9jbGVhclxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBhdXRvY29tcGxldGUtcmVzZXQtYmx1clxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25cbiAgICAgICAqL1xuICAgIH0pO1xuICB9KCkpO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWF1dG9jb21wbGV0ZS9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5odG1sXCI+XG5cbjwhLS1cbmBQYXBlckl0ZW1CZWhhdmlvcmAgaXMgYSBjb252ZW5pZW5jZSBiZWhhdmlvciBzaGFyZWQgYnkgPHBhcGVyLWl0ZW0+IGFuZFxuPHBhcGVyLWljb24taXRlbT4gdGhhdCBtYW5hZ2VzIHRoZSBzaGFyZWQgY29udHJvbCBzdGF0ZXMgYW5kIGF0dHJpYnV0ZXMgb2ZcbnRoZSBpdGVtcy5cbi0tPlxuXG48c2NyaXB0PlxuICAvKiogQHBvbHltZXJCZWhhdmlvciBQb2x5bWVyLlBhcGVySXRlbUJlaGF2aW9yICovXG4gIFBvbHltZXIuUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICAgIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgIHRhYmluZGV4OiAnMCdcbiAgICB9XG4gIH07XG5cbiAgLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbiAgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvciA9IFtcbiAgICBQb2x5bWVyLklyb25CdXR0b25TdGF0ZSxcbiAgICBQb2x5bWVyLklyb25Db250cm9sU3RhdGUsXG4gICAgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvckltcGxcbiAgXTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuaHRtbCIsIlxucmVxdWlyZSgnLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWwnKTtcblxucmVxdWlyZSgnLi4vcGFwZXItc3R5bGVzL2NvbG9yLmh0bWwnKTtcblxucmVxdWlyZSgnLi4vcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sJyk7XG5cbmNvbnN0IFJlZ2lzdGVySHRtbFRlbXBsYXRlID0gcmVxdWlyZSgncG9seW1lci13ZWJwYWNrLWxvYWRlci9yZWdpc3Rlci1odG1sLXRlbXBsYXRlJyk7XG5cblJlZ2lzdGVySHRtbFRlbXBsYXRlLnJlZ2lzdGVyKFwiPGRvbS1tb2R1bGUgaWQ9cGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzPiA8dGVtcGxhdGU+IDxzdHlsZT4ucGFwZXItaXRlbSw6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6dmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LDQ4cHgpO3BhZGRpbmc6MCAxNnB4fS5wYXBlci1pdGVte0BhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtib3JkZXI6bm9uZTtvdXRsaW5lOjA7YmFja2dyb3VuZDojZmZmO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpsZWZ0fS5wYXBlci1pdGVtW2hpZGRlbl0sOmhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnBhcGVyLWl0ZW0uaXJvbi1zZWxlY3RlZCw6aG9zdCguaXJvbi1zZWxlY3RlZCl7Zm9udC13ZWlnaHQ6dmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsYm9sZCk7QGFwcGx5IC0tcGFwZXItaXRlbS1zZWxlY3RlZDt9LnBhcGVyLWl0ZW1bZGlzYWJsZWRdLDpob3N0KFtkaXNhYmxlZF0pe2NvbG9yOnZhcigtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3IsdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO0BhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7fS5wYXBlci1pdGVtOmZvY3VzLDpob3N0KDpmb2N1cyl7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTowO0BhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDt9LnBhcGVyLWl0ZW06Zm9jdXM6YmVmb3JlLDpob3N0KDpmb2N1cyk6YmVmb3Jle0BhcHBseSAtLWxheW91dC1maXQ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Y29udGVudDonJztvcGFjaXR5OnZhcigtLWRhcmstZGl2aWRlci1vcGFjaXR5KTtwb2ludGVyLWV2ZW50czpub25lO0BhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmU7fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmh0bWwiLCJcbnJlcXVpcmUoJy4uL3BhcGVyLXN0eWxlcy9zaGFkb3cuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXBhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2VsZXZhdGlvbj1cXFwiMVxcXCJdKXtAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDt9Omhvc3QoW2VsZXZhdGlvbj1cXFwiMlxcXCJdKXtAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDt9Omhvc3QoW2VsZXZhdGlvbj1cXFwiM1xcXCJdKXtAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTZkcDt9Omhvc3QoW2VsZXZhdGlvbj1cXFwiNFxcXCJdKXtAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDt9Omhvc3QoW2VsZXZhdGlvbj1cXFwiNVxcXCJdKXtAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLW1hdGVyaWFsL3BhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbCIsIjwhLS1cclxuQGxpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxyXG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxyXG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcclxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cclxuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcclxuLS0+XHJcblxyXG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vYm93ZXJfY29tcG9uZW50cy9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0Lmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItY2FyZC9wYXBlci1jYXJkLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1saXN0L2lyb24tbGlzdC5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmh0bWxcIj5cclxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItYXV0b2NvbXBsZXRlL3BhcGVyLWF1dG9jb21wbGV0ZS5odG1sXCI+XHJcbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJzaGFyZWQtc3R5bGVzLmh0bWxcIj5cclxuXHJcbjxkb20tbW9kdWxlIGlkPVwibXktdmlldzFcIj5cclxuICA8dGVtcGxhdGU+XHJcbiAgICA8c3R5bGUgaW5jbHVkZT1cInNoYXJlZC1zdHlsZXNcIj5cclxuICAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXJvbi1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLiAqL1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS13cmFwcGVyXCI+XHJcbiAgICAgIDxwYXBlci1pbnB1dCBpZD1cInNlYXJjaFwiIGxhYmVsPVwiU3VjaGVcIj48L3BhcGVyLWlucHV0PlxyXG4gICAgICA8cGFwZXItYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIGZvcj1cInNlYXJjaFwiIHNvdXJjZT1cIltbYXV0b2NvbXBsZXRlc11dXCI+PC9wYXBlci1hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cclxuICAgICAgPHRlbXBsYXRlPlxyXG4gICAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIltbaXRlbS5uYW1lXV1cIiBpbWFnZT1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTUweDUwL0ZGQzEwNy8wMDAwMDBcIiBhbHQ9XCJbW2l0ZW0ubmFtZV1dXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICBbW2l0ZW0uZGV0YWlsc11dXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9wYXBlci1jYXJkPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9pcm9uLWxpc3Q+XHJcbiAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgPHNjcmlwdD5cclxuICAgIGNsYXNzIE15VmlldzEgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xyXG4gICAgICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ215LXZpZXcxJzsgfVxyXG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiBbeyB0ZXh0OiBcIlNjb3RsYW5kIFlhcmRcIiB9XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4gW1xyXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJTY290bGFuZCBZYXJkXCIsIGRldGFpbHM6XCIyLTUgU3BpZWxlciwgRGF1ZXI6IDkwbWluLCAxOTkwXCIsIHB1Ymxpc2hlcjogXCJSYXZlbnNidXJnZXJcIiB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJNaXN0ZXIgWFwiLCBkZXRhaWxzOlwiMi00IFNwaWVsZXIsIERhdWVyOiAzMG1pbiwgMjAxMlwiLCBwdWJsaXNoZXI6IFwiUmF2ZW5zYnVyZ2VyXCIgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKE15VmlldzEuaXMsIE15VmlldzEpO1xyXG4gIDwvc2NyaXB0PlxyXG48L2RvbS1tb2R1bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215LXZpZXcxLmh0bWwiLCJcbnJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS5yZWdpc3RlcihcIjxkb20tbW9kdWxlIGlkPXNoYXJlZC1zdHlsZXM+IDx0ZW1wbGF0ZT4gPHN0eWxlPi5jYXJke21hcmdpbjoyNHB4O3BhZGRpbmc6MTZweDtjb2xvcjojNzU3NTc1O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMiksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMil9LmNpcmNsZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM1NTU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojZGRkO2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjY0cHh9aDF7bWFyZ2luOjE2cHggMDtjb2xvcjojMjEyMTIxO2ZvbnQtc2l6ZToyMnB4fTwvc3R5bGU+IDwvdGVtcGxhdGU+IDwvZG9tLW1vZHVsZT5cIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkLXN0eWxlcy5odG1sIiwiXG5yZXF1aXJlKCcuLi9wb2x5bWVyL3BvbHltZXIuaHRtbCcpO1xuXG5yZXF1aXJlKCcuLi9mb250LXJvYm90by9yb2JvdG8uaHRtbCcpO1xuXG5jb25zdCBSZWdpc3Rlckh0bWxUZW1wbGF0ZSA9IHJlcXVpcmUoJ3BvbHltZXItd2VicGFjay1sb2FkZXIvcmVnaXN0ZXItaHRtbC10ZW1wbGF0ZScpO1xuXG5SZWdpc3Rlckh0bWxUZW1wbGF0ZS50b0JvZHkoXCI8Y3VzdG9tLXN0eWxlPiA8c3R5bGUgaXM9Y3VzdG9tLXN0eWxlPmh0bWx7LS1wYXBlci1mb250LWNvbW1vbi1iYXNlOntmb250LWZhbWlseTpSb2JvdG8sTm90byxzYW5zLXNlcmlmOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWR9Oy0tcGFwZXItZm9udC1jb21tb24tY29kZTp7Zm9udC1mYW1pbHk6J1JvYm90byBNb25vJyxDb25zb2xhcyxNZW5sbyxtb25vc3BhY2U7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZH07LS1wYXBlci1mb250LWNvbW1vbi1leHBlbnNpdmUta2VybmluZzp7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5fTstLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDp7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfTstLXBhcGVyLWZvbnQtZGlzcGxheTQ6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxMTJweDtmb250LXdlaWdodDozMDA7bGV0dGVyLXNwYWNpbmc6LS4wNDRlbTtsaW5lLWhlaWdodDoxMjBweH07LS1wYXBlci1mb250LWRpc3BsYXkzOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6NTZweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LS4wMjZlbTtsaW5lLWhlaWdodDo2MHB4fTstLXBhcGVyLWZvbnQtZGlzcGxheTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7Zm9udC1zaXplOjQ1cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi0uMDE4ZW07bGluZS1oZWlnaHQ6NDhweH07LS1wYXBlci1mb250LWRpc3BsYXkxOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzotLjAxZW07bGluZS1oZWlnaHQ6NDBweH07LS1wYXBlci1mb250LWhlYWRsaW5lOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzotLjAxMmVtO2xpbmUtaGVpZ2h0OjMycHh9Oy0tcGFwZXItZm9udC10aXRsZTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjI4cHh9Oy0tcGFwZXItZm9udC1zdWJoZWFkOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoyNHB4fTstLXBhcGVyLWZvbnQtYm9keTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjI0cHh9Oy0tcGFwZXItZm9udC1ib2R5MTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjBweH07LS1wYXBlci1mb250LWNhcHRpb246e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzouMDExZW07bGluZS1oZWlnaHQ6MjBweH07LS1wYXBlci1mb250LW1lbnU6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyNHB4fTstLXBhcGVyLWZvbnQtYnV0dG9uOntAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjAxOGVtO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTstLXBhcGVyLWZvbnQtY29kZTI6e0BhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWNvZGU7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjIwcHh9Oy0tcGFwZXItZm9udC1jb2RlMTp7QGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tY29kZTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MjBweH07fTwvc3R5bGU+IDwvY3VzdG9tLXN0eWxlPlwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbCIsIlxucmVxdWlyZSgnLi4vcG9seW1lci9wb2x5bWVyLmh0bWwnKTtcblxuY29uc3QgUmVnaXN0ZXJIdG1sVGVtcGxhdGUgPSByZXF1aXJlKCdwb2x5bWVyLXdlYnBhY2stbG9hZGVyL3JlZ2lzdGVyLWh0bWwtdGVtcGxhdGUnKTtcblxuUmVnaXN0ZXJIdG1sVGVtcGxhdGUudG9Cb2R5KFwiPGN1c3RvbS1zdHlsZT4gPHN0eWxlIGlzPWN1c3RvbS1zdHlsZT5odG1sey0tc2hhZG93LXRyYW5zaXRpb246e3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpfTstLXNoYWRvdy1ub25lOntib3gtc2hhZG93Om5vbmV9Oy0tc2hhZG93LWVsZXZhdGlvbi0yZHA6e2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKX07LS1zaGFkb3ctZWxldmF0aW9uLTNkcDp7Ym94LXNoYWRvdzowIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tNGRwOntib3gtc2hhZG93OjAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tNmRwOntib3gtc2hhZG93OjAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKSwwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLThkcDp7Ym94LXNoYWRvdzowIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpLDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tMTJkcDp7Ym94LXNoYWRvdzowIDEycHggMTZweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIycHggM3B4IHJnYmEoMCwwLDAsLjEyKSwwIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC40KX07LS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA6e2JveC1zaGFkb3c6MCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMiksMCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjQpfTstLXNoYWRvdy1lbGV2YXRpb24tMjRkcDp7Ym94LXNoYWRvdzowIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKSwwIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjQpfTt9PC9zdHlsZT4gPC9jdXN0b20tc3R5bGU+XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9wYXBlci1zdHlsZXMvc2hhZG93Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9pcm9uLWlucHV0L2lyb24taW5wdXQuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLWlucHV0LWNvbnRhaW5lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwicGFwZXItaW5wdXQtZXJyb3IuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0IGZpZWxkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3RleHQtZmllbGRzLmh0bWwpXG5cbmA8cGFwZXItaW5wdXQ+YCBpcyBhIHNpbmdsZS1saW5lIHRleHQgZmllbGQgd2l0aCBNYXRlcmlhbCBEZXNpZ24gc3R5bGluZy5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgbWF5IGluY2x1ZGUgYW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXIgY291bnRlci5cblxuICAgIDxwYXBlci1pbnB1dCBlcnJvci1tZXNzYWdlPVwiSW52YWxpZCBpbnB1dCFcIiBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cbiAgICA8cGFwZXItaW5wdXQgY2hhci1jb3VudGVyIGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBjYW4gYWxzbyBpbmNsdWRlIGN1c3RvbSBwcmVmaXggb3Igc3VmZml4IGVsZW1lbnRzLCB3aGljaCBhcmUgZGlzcGxheWVkXG5iZWZvcmUgb3IgYWZ0ZXIgdGhlIHRleHQgaW5wdXQgaXRzZWxmLiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZVxuY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBgcHJlZml4YCBhdHRyaWJ1dGUgKGFuZCBzaW1pbGFybHlcbmZvciBgc3VmZml4YCkuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJ0b3RhbFwiPlxuICAgICAgPGRpdiBwcmVmaXg+JDwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cbkEgYHBhcGVyLWlucHV0YCBjYW4gdXNlIHRoZSBuYXRpdmUgYHR5cGU9c2VhcmNoYCBvciBgdHlwZT1maWxlYCBmZWF0dXJlcy5cbkhvd2V2ZXIsIHNpbmNlIHdlIGNhbid0IGNvbnRyb2wgdGhlIG5hdGl2ZSBzdHlsaW5nIG9mIHRoZSBpbnB1dCAoc2VhcmNoIGljb24sXG5maWxlIGJ1dHRvbiwgZGF0ZSBwbGFjZWhvbGRlciwgZXRjLiksIGluIHRoZXNlIGNhc2VzIHRoZSBsYWJlbCB3aWxsIGJlXG5hdXRvbWF0aWNhbGx5IGZsb2F0ZWQuIFRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBjYW4gc3RpbGwgYmUgdXNlZCBmb3JcbmFkZGl0aW9uYWwgaW5mb3JtYXRpb25hbCB0ZXh0LlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwic2VhcmNoIVwiIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgY2F0c1wiIGF1dG9zYXZlPVwidGVzdFwiIHJlc3VsdHM9XCI1XCI+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgZm9yIG1vcmUgQVBJIGRvY3MuXG5cbiMjIyBGb2N1c1xuXG5UbyBmb2N1cyBhIHBhcGVyLWlucHV0LCB5b3UgY2FuIGNhbGwgdGhlIG5hdGl2ZSBgZm9jdXMoKWAgbWV0aG9kIGFzIGxvbmcgYXMgdGhlXG5wYXBlciBpbnB1dCBoYXMgYSB0YWIgaW5kZXguIFNpbWlsYXJseSwgYGJsdXIoKWAgd2lsbCBibHVyIHRoZSBlbGVtZW50LlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dENvbnRhaW5lcmAgZm9yIGEgbGlzdCBvZiBjdXN0b20gcHJvcGVydGllcyB1c2VkIHRvXG5zdHlsZSB0aGlzIGVsZW1lbnQuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWlucHV0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogdG8gbWFrZSBhIHN0YWNraW5nIGNvbnRleHQgKi9cbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiXG4gICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiXG4gICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIlxuICAgICAgICBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvcj1cImlucHV0XCIgc2xvdD1cImxhYmVsXCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPHNwYW4gaWQ9XCJ0ZW1wbGF0ZS1wbGFjZWhvbGRlclwiPjwvc3Bhbj5cblxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPCEtLSBUaGlzIGlzIGEgZnJlc2ggbmV3IGhlbGwgdG8gbWFrZSB0aGlzIGVsZW1lbnQgaHlicmlkLiBCYXNpY2FsbHksIGluIDIuMFxuICAgIHdlIGxvc3QgaXM9LCBzbyB0aGUgZXhhbXBsZSBzYW1lIHRlbXBsYXRlIGNhbid0IGJlIHVzZWQgd2l0aCBpcm9uLWlucHV0IDEuMCBhbmQgMi4wLlxuICAgIEV4cGVjdCBzb21lIGNvbmRpdGlvbmFsIGNvZGUgKGVzcGVjaWFsbHkgaW4gdGhlIHRlc3RzKS5cbiAgIC0tPlxuICA8dGVtcGxhdGUgaWQ9XCJ2MFwiPlxuICAgIDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBpZD1cImlucHV0XCIgc2xvdD1cImlucHV0XCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCJcbiAgICAgICAgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgdGl0bGUkPVwiW1t0aXRsZV1dXCJcbiAgICAgICAgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiXG4gICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dD1cIltbcHJldmVudEludmFsaWRJbnB1dF1dXCJcbiAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCJcbiAgICAgICAgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiXG4gICAgICAgIHR5cGUkPVwiW1t0eXBlXV1cIlxuICAgICAgICBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCJcbiAgICAgICAgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIlxuICAgICAgICBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCJcbiAgICAgICAgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIlxuICAgICAgICBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiXG4gICAgICAgIG1pbiQ9XCJbW21pbl1dXCJcbiAgICAgICAgbWF4JD1cIltbbWF4XV1cIlxuICAgICAgICBzdGVwJD1cIltbc3RlcF1dXCJcbiAgICAgICAgbmFtZSQ9XCJbW25hbWVdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiXG4gICAgICAgIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiXG4gICAgICAgIGxpc3QkPVwiW1tsaXN0XV1cIlxuICAgICAgICBzaXplJD1cIltbc2l6ZV1dXCJcbiAgICAgICAgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCJcbiAgICAgICAgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCJcbiAgICAgICAgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCJcbiAgICAgICAgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCJcbiAgICAgICAgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiXG4gICAgICAgIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCJcbiAgICAgICAgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCI+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHRlbXBsYXRlIGlkPVwidjFcIj5cbiAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3t2YWx1ZX19XCIgaWQ9XCJpbnB1dFwiIHNsb3Q9XCJpbnB1dFwiXG4gICAgICAgIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCJcbiAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCJcbiAgICAgICAgaW52YWxpZD1cInt7aW52YWxpZH19XCJcbiAgICAgICAgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiPlxuICAgICAgPGlucHV0IGlkPVwibmF0aXZlSW5wdXRcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnkkPVwiW1tfYXJpYUxhYmVsbGVkQnldXVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnkkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIlxuICAgICAgICBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICB0aXRsZSQ9XCJbW3RpdGxlXV1cIlxuICAgICAgICB0eXBlJD1cIltbdHlwZV1dXCJcbiAgICAgICAgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiXG4gICAgICAgIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCJcbiAgICAgICAgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiXG4gICAgICAgIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCJcbiAgICAgICAgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIlxuICAgICAgICBtaW4kPVwiW1ttaW5dXVwiXG4gICAgICAgIG1heCQ9XCJbW21heF1dXCJcbiAgICAgICAgc3RlcCQ9XCJbW3N0ZXBdXVwiXG4gICAgICAgIG5hbWUkPVwiW1tuYW1lXV1cIlxuICAgICAgICBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIlxuICAgICAgICBsaXN0JD1cIltbbGlzdF1dXCJcbiAgICAgICAgc2l6ZSQ9XCJbW3NpemVdXVwiXG4gICAgICAgIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiXG4gICAgICAgIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiXG4gICAgICAgIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiXG4gICAgICAgIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiXG4gICAgICAgIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIlxuICAgICAgICBhY2NlcHQkPVwiW1thY2NlcHRdXVwiXG4gICAgICAgIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiPlxuICAgIDwvaXJvbi1pbnB1dD5cbiAgPC90ZW1wbGF0ZT5cblxuPC9kb20tbW9kdWxlPlxuXG48c2NyaXB0PlxuICBQb2x5bWVyKHtcbiAgICBpczogJ3BhcGVyLWlucHV0JyxcblxuICAgIGJlaGF2aW9yczogW1xuICAgICAgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3IsXG4gICAgICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yXG4gICAgXSxcblxuICAgIGJlZm9yZVJlZ2lzdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gdGVsbCB3aGljaCBraW5kIG9mIG9mIHRlbXBsYXRlIHRvIHN0YW1wIGJhc2VkIG9uXG4gICAgICAvLyB3aGF0IGtpbmQgb2YgYGlyb24taW5wdXRgIHdlIGdvdCwgYnV0IGJlY2F1c2Ugb2YgcG9seWZpbGxzIGFuZFxuICAgICAgLy8gY3VzdG9tIGVsZW1lbnRzIGRpZmZlcmVuY2VzIGJldHdlZW4gdjAgYW5kIHYxLCB0aGUgc2FmZXN0IGJldCBpc1xuICAgICAgLy8gdG8gY2hlY2sgYSBwYXJ0aWN1bGFyIG1ldGhvZCB3ZSBrbm93IHRoZSBpcm9uLWlucHV0IzIueCBjYW4gaGF2ZS5cbiAgICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBpdCwgdGhlbiBpdCdzIGFuIGlyb24taW5wdXQjMS54LlxuICAgICAgdmFyIGlyb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24taW5wdXQnKTtcbiAgICAgIHZhciB2ZXJzaW9uID0gdHlwZW9mIGlyb25JbnB1dC5faW5pdFNsb3R0ZWRJbnB1dCA9PSAnZnVuY3Rpb24nID8gJ3YxJyA6ICd2MCc7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBQb2x5bWVyLkRvbU1vZHVsZS5pbXBvcnQoJ3BhcGVyLWlucHV0JywgJ3RlbXBsYXRlJyk7XG4gICAgICB2YXIgaW5wdXRUZW1wbGF0ZSA9IFBvbHltZXIuRG9tTW9kdWxlLmltcG9ydCgncGFwZXItaW5wdXQnLCAndGVtcGxhdGUjJyArIHZlcnNpb24pO1xuICAgICAgdmFyIGlucHV0UGxhY2Vob2xkZXIgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wbGF0ZS1wbGFjZWhvbGRlcicpO1xuICAgICAgaWYgKGlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbnB1dFRlbXBsYXRlLmNvbnRlbnQsIGlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSBpdCdzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2JhYmx5IGluIHN1cGVyY2xhc3NcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuIE92ZXJyaWRkZW4gZnJvbSBQYXBlcklucHV0QmVoYXZpb3JcbiAgICAgKiB0byBjb3JyZWN0bHkgZm9jdXMgdGhlIG5hdGl2ZSBpbnB1dC5cbiAgICAgKi9cbiAgICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gUG9seW1lci5FbGVtZW50ID8gdGhpcy5pbnB1dEVsZW1lbnQuX2lucHV0RWxlbWVudCA6IHRoaXMuaW5wdXRFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvLyBOb3RlOiBUaGlzIGV2ZW50IGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSAxLjAgdmVyc2lvbiBvZiB0aGlzIGVsZW1lbnQuXG4gICAgLy8gSW4gMi4wLCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBgX29uSXJvbklucHV0UmVhZHlgIGlzIGRvbmUgaW5cbiAgICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICAgIGxpc3RlbmVyczoge1xuICAgICAgJ2lyb24taW5wdXQtcmVhZHknOiAnX29uSXJvbklucHV0UmVhZHknXG4gICAgfSxcblxuICAgIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy4kLm5hdGl2ZUlucHV0LnR5cGUpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgICBpZiAoISF0aGlzLmlucHV0RWxlbWVudC5iaW5kVmFsdWUpIHtcbiAgICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48c2NyaXB0PlxuXG4gIC8qKlxuICAgKiBVc2UgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBhZGQtb24gZm9yIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuIEFcbiAgICogYWRkLW9uIGFwcGVhcnMgYmVsb3cgdGhlIGlucHV0LCBhbmQgbWF5IGRpc3BsYXkgaW5mb3JtYXRpb24gYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZFxuICAgKiB2YWxpZGl0eSBzdWNoIGFzIGEgY2hhcmFjdGVyIGNvdW50ZXIgb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICogQHBvbHltZXJCZWhhdmlvclxuICAgKi9cbiAgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvciA9IHtcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWRvbS9pc3N1ZXMvOTZcbiAgICAgIFBvbHltZXIuZG9tLmZsdXNoKCk7XG4gICAgICB0aGlzLmZpcmUoJ2FkZG9uLWF0dGFjaGVkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmdW5jdGlvbiBjYWxsZWQgYnkgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBvciB2YWxpZGl0eSBjaGFuZ2VzLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICAgKiB9fSBzdGF0ZSAtXG4gICAgICogICAgIGlucHV0RWxlbWVudDogVGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIH1cblxuICB9O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0Lmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pdGVtLWJlaGF2aW9yLmh0bWxcIj5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtMaXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2xpc3RzLmh0bWwpXG5cbmA8cGFwZXItaXRlbT5gIGlzIGFuIGludGVyYWN0aXZlIGxpc3QgaXRlbS4gQnkgZGVmYXVsdCwgaXQgaXMgYSBob3Jpem9udGFsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWQgdHdvLWxpbmUgYW5kIHRocmVlLWxpbmVcbml0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGEgYHBhcGVyLWxpc3Rib3hgXG53aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGUgYHBhcGVyLWl0ZW1gIGNsYXNzXG5hcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZCBzdHlsZXMpOlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPkluYm94PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TdGFycmVkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TZW50IG1haWw8L2J1dHRvbj5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCAgICAgfCBNaW5pbXVtIGhlaWdodCBvZiB0aGUgaXRlbSAgICAgICAgICAgICAgICAgICB8IGA0OHB4YFxuYC0tcGFwZXItaXRlbWAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtICAgICAgICAgICAgICAgICAgICB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSAgICAgICAgICAgfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyAgICAgICAgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgICAgICAgICAgIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyAgICAgICAgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyAgICAgICAgIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImxpc3RpdGVtXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB1c2FnZSwgaXQgbWF5IGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gc2V0XG5gcm9sZT1cIm1lbnVpdGVtXCJgLCBgcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcImAgb3IgYHJvbGU9XCJtZW51aXRlbXJhZGlvXCJgLlxuXG4gICAgPHBhcGVyLWl0ZW0gcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcIj5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgIFNob3cgeW91ciBzdGF0dXNcbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHBhcGVyLWNoZWNrYm94PjwvcGFwZXItY2hlY2tib3g+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWl0ZW1cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L3RlbXBsYXRlPlxuXG4gIDxzY3JpcHQ+XG4gICAgUG9seW1lcih7XG4gICAgICBpczogJ3BhcGVyLWl0ZW0nLFxuXG4gICAgICBiZWhhdmlvcnM6IFtcbiAgICAgICAgUG9seW1lci5QYXBlckl0ZW1CZWhhdmlvclxuICAgICAgXVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItaXRlbS9wYXBlci1pdGVtLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BhcGVyLXN0eWxlcy9zaGFkb3cuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cInBhcGVyLW1hdGVyaWFsLXNoYXJlZC1zdHlsZXMuaHRtbFwiPlxuXG48IS0tXG5NYXRlcmlhbCBkZXNpZ246IFtDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1tYXRlcmlhbGAgaXMgYSBjb250YWluZXIgdGhhdCByZW5kZXJzIHR3byBzaGFkb3dzIG9uIHRvcCBvZiBlYWNoIG90aGVyIHRvXG5jcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1tYXRlcmlhbCBlbGV2YXRpb249XCIxXCI+XG4gICAgICAuLi4gY29udGVudCAuLi5cbiAgICA8L3BhcGVyLW1hdGVyaWFsPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuLS0+XG5cbjxkb20tbW9kdWxlIGlkPVwicGFwZXItbWF0ZXJpYWxcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW2FuaW1hdGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1zaGFkb3ctdHJhbnNpdGlvbjtcbiAgICAgIH1cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxzY3JpcHQ+XG4gIFBvbHltZXIoe1xuICAgIGlzOiAncGFwZXItbWF0ZXJpYWwnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgei1kZXB0aCBvZiB0aGlzIGVsZW1lbnQsIGZyb20gMC01LiBTZXR0aW5nIHRvIDAgd2lsbCByZW1vdmUgdGhlXG4gICAgICAgKiBzaGFkb3csIGFuZCBlYWNoIGluY3JlYXNpbmcgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIHdpbGwgYmUgXCJkZWVwZXJcIlxuICAgICAgICogdGhhbiB0aGUgbGFzdC5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGVsZXZhdGlvblxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAxXG4gICAgICAgKi9cbiAgICAgIGVsZXZhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBzaGFkb3cgd2hlbiBzZXR0aW5nIGEgbmV3XG4gICAgICAgKiBgZWxldmF0aW9uYCB2YWx1ZS5cbiAgICAgICAqXG4gICAgICAgKiBAYXR0cmlidXRlIGFuaW1hdGVkXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBhbmltYXRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvcGFwZXItbWF0ZXJpYWwvcGFwZXItbWF0ZXJpYWwuaHRtbCIsIjwhLS1cbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4tLT5cblxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL3BvbHltZXIvcG9seW1lci5odG1sXCI+XG5cbjxzY3JpcHQ+XG4gIC8qKlxuICBQb2x5bWVyLklyb25Gb3JtRWxlbWVudEJlaGF2aW9yIGVuYWJsZXMgYSBjdXN0b20gZWxlbWVudCB0byBiZSBpbmNsdWRlZFxuICBpbiBhbiBgaXJvbi1mb3JtYC5cblxuICBFdmVudHMgYGlyb24tZm9ybS1lbGVtZW50LXJlZ2lzdGVyYCBhbmQgYGlyb24tZm9ybS1lbGVtZW50LXVucmVnaXN0ZXJgIGFyZSBub3QgZmlyZWQgb24gUG9seW1lciAyLjAuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAgKi9cbiAgUG9seW1lci5Jcm9uRm9ybUVsZW1lbnRCZWhhdmlvciA9IHtcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBhZGRlZCB0byBhbiBgaXJvbi1mb3JtYC5cbiAgICAgICAqXG4gICAgICAgKiBAZXZlbnQgaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXJcbiAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIGFuIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBpcm9uLWZvcm0tZWxlbWVudC11bnJlZ2lzdGVyXG4gICAgICAgKi9cbiAgICAgICBcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuIElmIHVzZWQgaW4gYSBmb3JtLCBhXG4gICAgICAgKiBjdXN0b20gZWxlbWVudCB0aGF0IHVzZXMgdGhpcyBiZWhhdmlvciBzaG91bGQgYWxzbyB1c2VcbiAgICAgICAqIFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IgYW5kIGRlZmluZSBhIGN1c3RvbSB2YWxpZGF0aW9uIG1ldGhvZC5cbiAgICAgICAqIE90aGVyd2lzZSwgYSBgcmVxdWlyZWRgIGVsZW1lbnQgd2lsbCBhbHdheXMgYmUgY29uc2lkZXJlZCB2YWxpZC5cbiAgICAgICAqIEl0J3MgYWxzbyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBwcm92aWRlIGEgdmlzdWFsIHN0eWxlIGZvciB0aGUgZWxlbWVudFxuICAgICAgICogd2hlbiBpdHMgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBmb3JtIHRoYXQgdGhlIGVsZW1lbnQgaXMgcmVnaXN0ZXJlZCB0by5cbiAgICAgICAqL1xuICAgICAgX3BhcmVudEZvcm06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9XG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiBQb2x5bWVyLkVsZW1lbnQgPyBudWxsIDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBOb3RlOiB0aGUgaXJvbi1mb3JtIHRoYXQgdGhpcyBlbGVtZW50IGJlbG9uZ3MgdG8gd2lsbCBzZXQgdGhpc1xuICAgICAgLy8gZWxlbWVudCdzIF9wYXJlbnRGb3JtIHByb3BlcnR5IHdoZW4gaGFuZGxpbmcgdGhpcyBldmVudC5cbiAgICAgIHRoaXMuZmlyZSgnaXJvbi1mb3JtLWVsZW1lbnQtcmVnaXN0ZXInKTtcbiAgICB9LFxuXG4gICAgZGV0YWNoZWQ6IFBvbHltZXIuRWxlbWVudCA/IG51bGwgOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnRGb3JtKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudEZvcm0uZmlyZSgnaXJvbi1mb3JtLWVsZW1lbnQtdW5yZWdpc3RlcicsIHt0YXJnZXQ6IHRoaXN9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuPGxpbmsgcmVsPVwiaW1wb3J0XCIgaHJlZj1cIi4uL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5odG1sXCI+XG48bGluayByZWw9XCJpbXBvcnRcIiBocmVmPVwiLi4vaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmh0bWxcIj5cblxuPCEtLVxuYDxpcm9uLWlucHV0PmAgaXMgYSB3cmFwcGVyIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50LCB0aGF0IGFkZHMgdHdvLXdheSBiaW5kaW5nXG5hbmQgcHJldmVudGlvbiBvZiBpbnZhbGlkIGlucHV0LiBUbyB1c2UgaXQsIHlvdSBtdXN0IGRpc3RyaWJ1dGUgYSBuYXRpdmUgYDxpbnB1dD5gXG55b3Vyc2VsZi4gWW91IGNhbiBjb250aW51ZSB0byB1c2UgdGhlIG5hdGl2ZSBgaW5wdXRgIGFzIHlvdSB3b3VsZCBub3JtYWxseTpcblxuICAgIDxpcm9uLWlucHV0PlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuICAgIDxpcm9uLWlucHV0PlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGRpc2FibGVkPlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFR3by13YXkgYmluZGluZ1xuXG5CeSBkZWZhdWx0IHlvdSBjYW4gb25seSBnZXQgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBhIG5hdGl2ZSBgPGlucHV0PmAncyBgdmFsdWVgXG5kdWUgdG8gdXNlciBpbnB1dDpcblxuICAgIDxpbnB1dCB2YWx1ZT1cInt7bXlWYWx1ZTo6aW5wdXR9fVwiPlxuXG5UaGlzIG1lYW5zIHRoYXQgaWYgeW91IGltcGVyYXRpdmVseSBzZXQgdGhlIHZhbHVlIChpLmUuIGBzb21lTmF0aXZlSW5wdXQudmFsdWUgPSAnZm9vJ2ApLFxubm8gZXZlbnRzIHdpbGwgYmUgZmlyZWQgYW5kIHRoaXMgY2hhbmdlIGNhbm5vdCBiZSBvYnNlcnZlZC5cblxuYGlyb24taW5wdXRgIGFkZHMgdGhlIGBiaW5kLXZhbHVlYCBwcm9wZXJ0eSB0aGF0IG1pcnJvcnMgdGhlIG5hdGl2ZSBgaW5wdXRgJ3MgJ2B2YWx1ZWAgcHJvcGVydHk7IHRoaXNcbnByb3BlcnR5IGNhbiBiZSB1c2VkIGZvciB0d28td2F5IGRhdGEgYmluZGluZy5cbmBiaW5kLXZhbHVlYCB3aWxsIG5vdGlmeSBpZiBpdCBpcyBjaGFuZ2VkIGVpdGhlciBieSB1c2VyIGlucHV0IG9yIGJ5IHNjcmlwdC5cblxuICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e215VmFsdWV9fVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuTm90ZTogdGhpcyBtZWFucyB0aGF0IGlmIHlvdSB3YW50IHRvIGltcGVyYXRpdmVseSBzZXQgdGhlIG5hdGl2ZSBgaW5wdXRgJ3MsIHlvdSBfbXVzdF9cbnNldCBgYmluZC12YWx1ZWAgaW5zdGVhZCwgc28gdGhhdCB0aGUgd3JhcHBlciBgaXJvbi1pbnB1dGAgY2FuIGJlIG5vdGlmaWVkLlxuXG4jIyMgVmFsaWRhdGlvblxuXG5gaXJvbi1pbnB1dGAgdXNlcyB0aGUgbmF0aXZlIGBpbnB1dGAncyB2YWxpZGF0aW9uLiBGb3Igc2ltcGxpY2l0eSwgYGlyb24taW5wdXRgXG5oYXMgYSBgdmFsaWRhdGUoKWAgbWV0aG9kICh3aGljaCBpbnRlcm5hbGx5IGp1c3QgY2hlY2tzIHRoZSBkaXN0cmlidXRlZCBgaW5wdXRgJ3NcbnZhbGlkaXR5KSwgd2hpY2ggc2V0cyBhbiBgaW52YWxpZGAgYXR0cmlidXRlIHRoYXQgY2FuIGFsc28gYmUgdXNlZCBmb3Igc3R5bGluZy5cblxuVG8gdmFsaWRhdGUgYXV0b21hdGljYWxseSBhcyB5b3UgdHlwZSwgeW91IGNhbiB1c2UgdGhlIGBhdXRvLXZhbGlkYXRlYCBhdHRyaWJ1dGUuXG5cbmBpcm9uLWlucHV0YCBhbHNvIGZpcmVzIGFuIGBpcm9uLWlucHV0LXZhbGlkYXRlYCBldmVudCBhZnRlciBgdmFsaWRhdGUoKWAgaXNcbmNhbGxlZC4gWW91IGNhbiB1c2UgaXQgdG8gaW1wbGVtZW50IGEgY3VzdG9tIHZhbGlkYXRvcjpcblxuICAgIHZhciBDYXRzT25seVZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbihpcm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gIWlyb25JbnB1dC5iaW5kVmFsdWUgfHwgaXJvbklucHV0LmJpbmRWYWx1ZSA9PT0gJ2NhdCc7XG4gICAgICAgIGlyb25JbnB1dC5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlyb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWlucHV0LXZhbGlkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBDYXRzT25seS52YWxpZGF0ZShpbnB1dDIpO1xuICAgIH0pO1xuXG5Zb3UgY2FuIGFsc28gdXNlIGFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGFuIFtgSXJvblZhbGlkYXRvckJlaGF2aW9yYF0oL2VsZW1lbnQvUG9seW1lckVsZW1lbnRzL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IpLlxuVGhpcyBleGFtcGxlIGNhbiBhbHNvIGJlIGZvdW5kIGluIHRoZSBkZW1vIGZvciB0aGlzIGVsZW1lbnQ6XG5cbiAgICA8aXJvbi1pbnB1dCB2YWxpZGF0b3I9XCJjYXRzLW9ubHlcIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBQcmV2ZW50aW5nIGludmFsaWQgaW5wdXRcblxuSXQgbWF5IGJlIGRlc2lyYWJsZSB0byBvbmx5IGFsbG93IHVzZXJzIHRvIGVudGVyIGNlcnRhaW4gY2hhcmFjdGVycy4gWW91IGNhbiB1c2UgdGhlXG5gYWxsb3dlZC1wYXR0ZXJuYCBhdHRyaWJ1dGUgdG8gYWNjb21wbGlzaCB0aGlzLiBUaGlzIGZlYXR1cmVcbmlzIHNlcGFyYXRlIGZyb20gdmFsaWRhdGlvbiwgYW5kIGBhbGxvd2VkLXBhdHRlcm5gIGRvZXMgbm90IGFmZmVjdCBob3cgdGhlIGlucHV0IGlzIHZhbGlkYXRlZC5cblxuICAgIC8vIE9ubHkgYWxsb3cgdHlwaW5nIGRpZ2l0cywgYnV0IGEgdmFsaWQgaW5wdXQgaGFzIGV4YWN0bHkgNSBkaWdpdHMuXG4gICAgPGlyb24taW5wdXQgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOV1cIj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiXFxkezV9XCI+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4tLT5cblxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWlucHV0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90IGlkPVwiY29udGVudFwiPjwvc2xvdD5cbiAgPC90ZW1wbGF0ZT5cbiAgPHNjcmlwdD5cbiAgICBQb2x5bWVyKHtcbiAgICAgIGlzOiAnaXJvbi1pbnB1dCcsXG5cbiAgICAgIGJlaGF2aW9yczogW1xuICAgICAgICBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yXG4gICAgICBdLFxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVkIHdoZW5ldmVyIGB2YWxpZGF0ZSgpYCBpcyBjYWxsZWQuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24taW5wdXQtdmFsaWRhdGVcbiAgICAgICAqL1xuXG4gICAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZSB0aGlzIHByb3BlcnR5IGluc3RlYWQgb2YgYHZhbHVlYCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcsIG9yIHRvXG4gICAgICAgICAqIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBpbnB1dC4gKipEbyBub3QqKiB1c2UgdGhlIGRpc3RyaWJ1dGVkXG4gICAgICAgICAqIGlucHV0J3MgYHZhbHVlYCBwcm9wZXJ0eSB0byBzZXQgYSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgYmluZFZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVkIHByb3BlcnR5IHRoYXQgZWNob2VzIGBiaW5kVmFsdWVgIChtb3N0bHkgdXNlZCBmb3IgUG9seW1lciAxLjBcbiAgICAgICAgICogYmFja2NvbXBhdGliaWxpdHksIGlmIHlvdSB3ZXJlIG9uZS13YXkgYmluZGluZyB0byB0aGUgUG9seW1lciAxLjBcbiAgICAgICAgICogYGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiYCB2YWx1ZSBhdHRyaWJ1dGUpLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlVmFsdWUoYmluZFZhbHVlKSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnZXgtbGlrZSBsaXN0IG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBhcyBpbnB1dDsgYWxsIGNoYXJhY3RlcnMgbm90IGluIHRoZSBsaXN0XG4gICAgICAgICAqIHdpbGwgYmUgcmVqZWN0ZWQuIFRoZSByZWNvbW1lbmRlZCBmb3JtYXQgc2hvdWxkIGJlIGEgbGlzdCBvZiBhbGxvd2VkIGNoYXJhY3RlcnMsXG4gICAgICAgICAqIGZvciBleGFtcGxlLCBgW2EtekEtWjAtOS4rLSE7Ol1gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHBhdHRlcm4gcmVwcmVzZW50cyB0aGUgYWxsb3dlZCBjaGFyYWN0ZXJzIGZvciB0aGUgZmllbGQ7IGFzIHRoZSB1c2VyIGlucHV0cyB0ZXh0LFxuICAgICAgICAgKiBlYWNoIGluZGl2aWR1YWwgY2hhcmFjdGVyIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoZSBwYXR0ZXJuIChyYXRoZXIgdGhhbiBjaGVja2luZ1xuICAgICAgICAgKiB0aGUgZW50aXJlIHZhbHVlIGFzIGEgd2hvbGUpLiBJZiBhIGNoYXJhY3RlciBpcyBub3QgYSBtYXRjaCwgaXQgd2lsbCBiZSByZWplY3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGFzdGVkIGlucHV0IHdpbGwgaGF2ZSBlYWNoIGNoYXJhY3RlciBjaGVja2VkIGluZGl2aWR1YWxseTsgaWYgYW55IGNoYXJhY3RlclxuICAgICAgICAgKiBkb2Vzbid0IG1hdGNoIGBhbGxvd2VkUGF0dGVybmAsIHRoZSBlbnRpcmUgcGFzdGVkIHN0cmluZyB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBpZiB5b3Ugd2VyZSB1c2luZyBgaXJvbi1pbnB1dGAgaW4gMS4wLCB5b3Ugd2VyZSBhbHNvIHJlcXVpcmVkIHRvXG4gICAgICAgICAqIHNldCBgcHJldmVudC1pbnZhbGlkLWlucHV0YC4gVGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIGFzIG9mIFBvbHltZXIgMi4wLFxuICAgICAgICAgKiBhbmQgd2lsbCBiZSBzZXQgYXV0b21hdGljYWxseSBmb3IgeW91IGlmIGFuIGBhbGxvd2VkUGF0dGVybmAgaXMgcHJvdmlkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBhbGxvd2VkUGF0dGVybjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSBhcyB5b3UgdHlwZS5cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgLyoqXG4gICAgICAgICogVGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAqL1xuICAgICAgICBfaW5wdXRFbGVtZW50OiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBvYnNlcnZlcnM6IFtcbiAgICAgICAgJ19iaW5kVmFsdWVDaGFuZ2VkKGJpbmRWYWx1ZSwgX2lucHV0RWxlbWVudCknXG4gICAgICBdLFxuXG4gICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgJ2lucHV0JzogJ19vbklucHV0JyxcbiAgICAgICAgJ2tleXByZXNzJzogJ19vbktleXByZXNzJ1xuICAgICAgfSxcblxuICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5fcGF0dGVybkFscmVhZHlDaGVja2VkID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhZGRlZCBhdCBhIGxhdGVyIHRpbWUsIHVwZGF0ZSB0aGUgaW50ZXJuYWwgcmVmZXJlbmNlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IFBvbHltZXIuZG9tKHRoaXMpLm9ic2VydmVOb2RlcyhmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgICAgdGhpcy5faW5pdFNsb3R0ZWRJbnB1dCgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSxcblxuICAgICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgICAgICBQb2x5bWVyLmRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIDxpbnB1dD4gZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZ2V0IGlucHV0RWxlbWVudCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnQ7XG4gICAgICB9LFxuXG4gICAgICBfaW5pdFNsb3R0ZWRJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudCA9IHRoaXMuZ2V0RWZmZWN0aXZlQ2hpbGRyZW4oKVswXTtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmJpbmRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXJlYWR5Jyk7XG4gICAgICB9LFxuXG4gICAgICBnZXQgX3BhdHRlcm5SZWdFeHAoKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuO1xuICAgICAgICBpZiAodGhpcy5hbGxvd2VkUGF0dGVybikge1xuICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHRoaXMuYWxsb3dlZFBhdHRlcm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBwYXR0ZXJuID0gL1swLTkuLGUtXS87XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzfVxuICAgICAgICovXG4gICAgICBfYmluZFZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oYmluZFZhbHVlLCBpbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgLy8gVGhlIG9ic2VydmVyIGNvdWxkIGhhdmUgcnVuIGJlZm9yZSBhdHRhY2hlZCgpIHdoZW4gd2UgaGF2ZSBhY3R1YWxseSBpbml0aWFsaXplZFxuICAgICAgICAvLyB0aGlzIHByb3BlcnR5LlxuICAgICAgICBpZiAoIWlucHV0RWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiaW5kVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoYmluZFZhbHVlICE9PSBpbnB1dEVsZW1lbnQudmFsdWUpe1xuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gYmluZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKSB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFudWFsbHkgbm90aWZ5IGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBub3RpZnkgdW50aWwgYWZ0ZXIgc2V0dGluZyB2YWx1ZVxuICAgICAgICB0aGlzLmZpcmUoJ2JpbmQtdmFsdWUtY2hhbmdlZCcsIHt2YWx1ZTogYmluZFZhbHVlfSk7XG4gICAgICB9LFxuXG4gICAgICBfb25JbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gdmFsaWRhdGUgZWFjaCBvZiB0aGUgY2hhcmFjdGVycyBwYXN0ZWQgaWYgdGhleSBoYXZlbid0XG4gICAgICAgIC8vIGJlZW4gdmFsaWRhdGVkIGluc2lkZSBgX29uS2V5cHJlc3NgIGFscmVhZHkuXG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuICYmICF0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQpIHtcbiAgICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLl9jaGVja1BhdHRlcm5WYWxpZGl0eSgpO1xuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcignSW52YWxpZCBzdHJpbmcgb2YgY2hhcmFjdGVycyBub3QgZW50ZXJlZC4nKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWxpZElucHV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRWYWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dCA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIF9pc1ByaW50YWJsZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gV2hhdCBhIGNvbnRyb2wvcHJpbnRhYmxlIGNoYXJhY3RlciBpcyB2YXJpZXMgd2lsZGx5IGJhc2VkIG9uIHRoZSBicm93c2VyLlxuICAgICAgICAvLyAtIG1vc3QgY29udHJvbCBjaGFyYWN0ZXJzIChhcnJvd3MsIGJhY2tzcGFjZSkgZG8gbm90IHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50XG4gICAgICAgIC8vICAgaW4gQ2hyb21lLCBidXQgdGhlICpkbyogb24gRmlyZWZveFxuICAgICAgICAvLyAtIGluIEZpcmVmb3gsIHdoZW4gdGhleSBkbyBzZW5kIGEgYGtleXByZXNzYCBldmVudCwgY29udHJvbCBjaGFycyBoYXZlXG4gICAgICAgIC8vICAgYSBjaGFyQ29kZSA9IDAsIGtleUNvZGUgPSB4eCAoZm9yIGV4LiA0MCBmb3IgZG93biBhcnJvdylcbiAgICAgICAgLy8gLSBwcmludGFibGUgY2hhcmFjdGVycyBhbHdheXMgc2VuZCBhIGtleXByZXNzIGV2ZW50LlxuICAgICAgICAvLyAtIGluIEZpcmVmb3gsIHByaW50YWJsZSBjaGFycyBhbHdheXMgaGF2ZSBhIGtleUNvZGUgPSAwLiBJbiBDaHJvbWUsIHRoZSBrZXlDb2RlXG4gICAgICAgIC8vICAgYWx3YXlzIG1hdGNoZXMgdGhlIGNoYXJDb2RlLlxuICAgICAgICAvLyBOb25lIG9mIHRoaXMgbWFrZXMgYW55IHNlbnNlLlxuXG4gICAgICAgIC8vIEZvciB0aGVzZSBrZXlzLCBBU0NJSSBjb2RlID09IGJyb3dzZXIga2V5Y29kZS5cbiAgICAgICAgdmFyIGFueU5vblByaW50YWJsZSA9XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOCkgICB8fCAgLy8gYmFja3NwYWNlXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOSkgICB8fCAgLy8gdGFiXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTMpICB8fCAgLy8gZW50ZXJcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAyNyk7ICAgICAvLyBlc2NhcGVcblxuICAgICAgICAvLyBGb3IgdGhlc2Uga2V5cywgbWFrZSBzdXJlIGl0J3MgYSBicm93c2VyIGtleWNvZGUgYW5kIG5vdCBhbiBBU0NJSSBjb2RlLlxuICAgICAgICB2YXIgbW96Tm9uUHJpbnRhYmxlID1cbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxOSkgIHx8ICAvLyBwYXVzZVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDIwKSAgfHwgIC8vIGNhcHMgbG9ja1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDQ1KSAgfHwgIC8vIGluc2VydFxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDQ2KSAgfHwgIC8vIGRlbGV0ZVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09IDE0NCkgfHwgIC8vIG51bSBsb2NrXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMTQ1KSB8fCAgLy8gc2Nyb2xsIGxvY2tcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDMyICYmIGV2ZW50LmtleUNvZGUgPCA0MSkgICB8fCAvLyBwYWdlIHVwL2Rvd24sIGVuZCwgaG9tZSwgYXJyb3dzXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAxMTEgJiYgZXZlbnQua2V5Q29kZSA8IDEyNCk7IC8vIGZuIGtleXNcblxuICAgICAgICByZXR1cm4gIWFueU5vblByaW50YWJsZSAmJiAhKGV2ZW50LmNoYXJDb2RlID09IDAgJiYgbW96Tm9uUHJpbnRhYmxlKTtcbiAgICAgIH0sXG5cbiAgICAgIF9vbktleXByZXNzOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dlZFBhdHRlcm4gJiYgdGhpcy50eXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICAgICAgaWYgKCFyZWdleHApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBrZXlzIGFuZCBiYWNrc3BhY2VcbiAgICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGUgcGF0dGVybiBlaXRoZXIgaGVyZSBvciBpbiBgX29uSW5wdXRgLCBidXQgbm90IGluIGJvdGguXG4gICAgICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRoaXNDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG4gICAgICAgIGlmICh0aGlzLl9pc1ByaW50YWJsZShldmVudCkgJiYgIXJlZ2V4cC50ZXN0KHRoaXNDaGFyKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyKCdJbnZhbGlkIGNoYXJhY3RlciAnICsgdGhpc0NoYXIgKyAnIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBfY2hlY2tQYXR0ZXJuVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICAgICAgaWYgKCFyZWdleHApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFyZWdleHAudGVzdCh0aGlzLmlucHV0RWxlbWVudC52YWx1ZVtpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBUaGUgdmFsaWRhdG9yIHByb3ZpZGVkIGluIGB2YWxpZGF0b3JgIHdpbGwgYmUgdXNlZCBmaXJzdCxcbiAgICAgICAqIHRoZW4gYW55IGNvbnN0cmFpbnRzLlxuICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICAgKi9cbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIHRoZSBuZXN0ZWQgaW5wdXQncyBuYXRpdmUgdmFsaWRpdHkuXG4gICAgICAgIHZhciB2YWxpZCA9ICB0aGlzLmlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgLy8gT25seSBkbyBleHRyYSBjaGVja2luZyBpZiB0aGUgYnJvd3NlciB0aG91Z2h0IHRoaXMgd2FzIHZhbGlkLlxuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAvLyBFbXB0eSwgcmVxdWlyZWQgaW5wdXQgaXMgaW52YWxpZFxuICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIHRoaXMuYmluZFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gUG9seW1lci5Jcm9uVmFsaWRhdGFibGVCZWhhdmlvci52YWxpZGF0ZS5jYWxsKHRoaXMsIHRoaXMuYmluZFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1pbnB1dC12YWxpZGF0ZScpO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9LFxuXG4gICAgICBfYW5ub3VuY2VJbnZhbGlkQ2hhcmFjdGVyOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHsgdGV4dDogbWVzc2FnZSB9KTtcbiAgICAgIH0sXG5cbiAgICAgIF9jb21wdXRlVmFsdWU6IGZ1bmN0aW9uKGJpbmRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYmluZFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1pbnB1dC9pcm9uLWlucHV0Lmh0bWwiLCI8IS0tXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuLS0+XG5cbjxsaW5rIHJlbD1cImltcG9ydFwiIGhyZWY9XCIuLi9wb2x5bWVyL3BvbHltZXIuaHRtbFwiPlxuXG48IS0tXG5gaXJvbi1hMTF5LWFubm91bmNlcmAgaXMgYSBzaW5nbGV0b24gZWxlbWVudCB0aGF0IGlzIGludGVuZGVkIHRvIGFkZCBhMTF5XG50byBmZWF0dXJlcyB0aGF0IHJlcXVpcmUgb24tZGVtYW5kIGFubm91bmNlbWVudCBmcm9tIHNjcmVlbiByZWFkZXJzLiBJblxub3JkZXIgdG8gbWFrZSB1c2Ugb2YgdGhlIGFubm91bmNlciwgaXQgaXMgYmVzdCB0byByZXF1ZXN0IGl0cyBhdmFpbGFiaWxpdHlcbmluIHRoZSBhbm5vdW5jaW5nIGVsZW1lbnQuXG5cbkV4YW1wbGU6XG5cbiAgICBQb2x5bWVyKHtcblxuICAgICAgaXM6ICd4LWNoYXR0eScsXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGNyZWF0ZSB0aGUgc2luZ2xldG9uIGVsZW1lbnQgaWYgaXQgaGFzIG5vdFxuICAgICAgICAvLyBiZWVuIGNyZWF0ZWQgeWV0OlxuICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuQWZ0ZXIgdGhlIGBpcm9uLWExMXktYW5ub3VuY2VyYCBoYXMgYmVlbiBtYWRlIGF2YWlsYWJsZSwgZWxlbWVudHMgY2FuXG5tYWtlIGFubm91bmNlcyBieSBmaXJpbmcgYnViYmxpbmcgYGlyb24tYW5ub3VuY2VgIGV2ZW50cy5cblxuRXhhbXBsZTpcblxuICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHtcbiAgICAgIHRleHQ6ICdUaGlzIGlzIGFuIGFubm91bmNlbWVudCEnXG4gICAgfSwgeyBidWJibGVzOiB0cnVlIH0pO1xuXG5Ob3RlOiBhbm5vdW5jZW1lbnRzIGFyZSBvbmx5IGF1ZGlibGUgaWYgeW91IGhhdmUgYSBzY3JlZW4gcmVhZGVyIGVuYWJsZWQuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbi0tPlxuXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tYTExeS1hbm5vdW5jZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LDBweCwwcHgsMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgYXJpYS1saXZlJD1cIltbbW9kZV1dXCI+W1tfdGV4dF1dPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG5cbiAgPHNjcmlwdD5cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlciA9IFBvbHltZXIoe1xuICAgICAgICBpczogJ2lyb24tYTExeS1hbm5vdW5jZXInLFxuXG4gICAgICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSB2YWx1ZSBvZiBtb2RlIGlzIHVzZWQgdG8gc2V0IHRoZSBgYXJpYS1saXZlYCBhdHRyaWJ1dGVcbiAgICAgICAgICAgKiBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGFubm91bmNlZC4gVmFsaWQgdmFsdWVzIGFyZTogYG9mZmAsXG4gICAgICAgICAgICogYHBvbGl0ZWAgYW5kIGBhc3NlcnRpdmVgLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncG9saXRlJ1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBfdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWFubm91bmNlJywgdGhpcy5fb25Jcm9uQW5ub3VuY2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhdXNlIGEgdGV4dCBzdHJpbmcgdG8gYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHNob3VsZCBiZSBhbm5vdW5jZWQuXG4gICAgICAgICAqL1xuICAgICAgICBhbm5vdW5jZTogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICAgICAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25Jcm9uQW5ub3VuY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hbm5vdW5jZShldmVudC5kZXRhaWwudGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IG51bGw7XG5cbiAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIVBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1hMTF5LWFubm91bmNlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKTtcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICA8L3NjcmlwdD5cbjwvZG9tLW1vZHVsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9