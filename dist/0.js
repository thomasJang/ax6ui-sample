webpackJsonp([0],Array(55).concat([
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _axios = __webpack_require__(78);

var _axios2 = _interopRequireDefault(_axios);

var _ax6ui = __webpack_require__(16);

__webpack_require__(105);

__webpack_require__(76);

__webpack_require__(62);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = "\n<h4>Grid basic</h4>\n<div data-ax6ui-grid=\"grid-basic\" data-ax6ui-grid-config=\"{columns: [\n        {key: 'a', label: 'field A'},\n        {key: 'b', label: 'field B'},\n        {key: 'c', label: 'numbers C'},\n        {key: 'd', label: 'field D'},\n        {key: 'e', label: 'field E'},\n        {key: 'f', label: 'field F'},\n        {key: 'g', label: 'field G'},\n        {key: 'h', label: 'field H'}\n    ]}\" style=\"height: 200px;\"></div>\n    \n<h4>Grid formatter</h4>\n<div data-ax6ui-grid=\"grid-formatter\" style=\"height: 200px;\"></div>\n\n<h4>Grid column group</h4>\n<div data-ax6ui-grid=\"grid-column-group\" style=\"height: 200px;\"></div>\n\n<h4>Grid frozen col&row</h4>\n<div data-ax6ui-grid=\"grid-frozen\" style=\"height: 200px;\"></div>\n\n<h4>Grid context-menu</h4>\n<div data-ax6ui-grid=\"grid-context-menu\" style=\"height: 200px;\"></div>\n";
var fn = {
  moduleRun: function moduleRun($body) {

    _ax6ui.AX6UIGrid.setFormatter({
      "capital": function capital() {
        // 개발자가 직접 정의한.
        return this.value.toUpperCase();
      }
    });
    _ax6ui.AX6UIGrid.setCollector({});
    _ax6ui.AX6UIGrid.setTmpl({
      "page_status": function page_status() {
        return '<span>{{{progress}}} {{fromRowIndex}} - {{toRowIndex}} of {{dataRowCount}} {{#dataRealRowCount}}  현재페이지 {{.}}{{/dataRealRowCount}} {{#totalElements}}  전체갯수 {{.}}{{/totalElements}}</span>';
      }
    });

    var grid_basic = new _ax6ui.AX6UIGrid({
      target: $body.find('[data-ax6ui-grid="grid-basic"]')
    });

    // xhr 호출
    (0, _axios2.default)({
      method: 'get',
      url: 'http://api-demo.ax5.io/api/v1/ax5grid'
    }).then(function (res) {
      grid_basic.setData(res.data);
    }).catch(function (error) {
      console.log(error);
    });

    //
    new _ax6ui.AX6UIGrid({
      target: $body.find('[data-ax6ui-grid="grid-formatter"]'),
      showLineNumber: true,
      showRowSelector: true,
      multipleSelect: true,
      lineNumberColumnWidth: 40,
      rowSelectorColumnWidth: 27,
      columns: [{ key: 'a', label: 'field A' }, { key: 'b', label: 'field B', formatter: 'capital' }, { key: 'c', label: 'number C', formatter: 'money' // 그리드에 내장된 formatter
      }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000 }]);

    //
    new _ax6ui.AX6UIGrid({
      target: $body.find('[data-ax6ui-grid="grid-column-group"]'),
      columns: [{ key: "a", label: "field A" }, { key: "b", label: "field B" }, {
        key: "c", label: "field C", columns: [// child columns
        { key: "d", label: "field D" }, { key: "e", label: "field E" }, { key: "f", label: "field F" }]
      }, { key: "g", label: "field G" }, { key: "h", label: "field H" }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);

    //
    new _ax6ui.AX6UIGrid({
      target: $body.find('[data-ax6ui-grid="grid-frozen"]'),
      frozenColumnIndex: 3,
      frozenRowIndex: 2,
      columns: [{ key: "a", label: "field A", width: 80 }, { key: "b", label: "field B", width: 80 }, {
        label: "Group", columns: [// child columns
        { key: "d", label: "field D" }, { key: "e", label: "field E" }, { key: "f", label: "field F" }]
      }, { key: "c", label: "field C", width: 200 }, { key: "g", label: "field G", width: 300 }, { key: "h", label: "field H" }]
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);

    var menu = new _ax6ui.AX6UIMenu({
      // width: 200,
      iconWidth: 20,
      acceleratorWidth: 100,
      // offset: {left: 10, top: 10},
      itemClickAndClose: false,
      //position: "absolute",
      icons: {
        'arrow': '<i class="tiny material-icons">chevron_right</i>'
      },
      columnKeys: {
        label: 'name',
        items: 'chidren'
      },
      items: [{
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 0",
        chidren: [{
          check: {
            type: 'checkbox',
            name: 'A',
            value: '0',
            checked: false
          },
          name: "Menu Z",
          data: {},
          role: "",
          accelerator: "CmdOrCtrl+Z"
        }, {
          check: {
            type: 'checkbox',
            name: 'A',
            value: '1',
            checked: true
          },
          name: "Menu A",
          data: {},
          role: ""
          //accelerator: "CmdOrCtrl+A"
        }],
        filterType: "A"
      }, {
        divide: true,
        filterType: "A"
      }, {
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 1",
        chidren: [{
          name: "Menu Z",
          data: {},
          role: "",
          //accelerator: "CmdOrCtrl+Z",
          chidren: [{
            name: "Menu Z",
            data: {},
            role: ""
            //accelerator: "CmdOrCtrl+Z"
          }, {
            name: "Menu A",
            data: {},
            role: ""
            //accelerator: "CmdOrCtrl+A"
          }]
        }, {
          name: "Menu A",
          data: {},
          role: ""
          //accelerator: "CmdOrCtrl+A"
        }],
        filterType: "A"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '1',
          checked: false
        },
        icon: '<i class="tiny material-icons">class</i>',
        name: "Menu Parent 2"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '2',
          checked: false
        },
        name: "Menu Parent 3"
      }, {
        check: {
          type: 'radio',
          name: 'radioName',
          value: '3',
          checked: false
        },
        name: "Menu Parent 4"
      }, { divide: true }, {
        html: function html() {
          // console.log(this);
          return '<div style="text-align: center;">' + '<button class="btn btn-primary" data-menu-btn="OK">OK</button> ' + '<button class="btn btn-danger" data-menu-btn="CANCEL">CANCEL</button>' + '</div>';
        }
      }]
    });
    menu.onClick = function (item, param) {
      console.log(item, param);
    };

    new _ax6ui.AX6UIGrid({
      target: $body.find('[data-ax6ui-grid="grid-context-menu"]'),
      columns: [{ key: "a", label: "field A" }, { key: "b", label: "field B" }, { key: "c", label: "field C", formatter: "money" }, { key: "g", label: "field G" }, { key: "h", label: "field H" }],
      body: {
        onContextMenu: function onContextMenu(e, param) {
          // console.log(e);
          menu.popup(e, { param: param });
        }
      }
    }).setData([{ a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "장서우", g: "2010년", h: "woman" }, { a: "토마스", b: "Thomas", c: 50000, d: 500, e: "E", f: "이영희", g: "1977년", h: "woman" }]);
  },
  moduleDestroy: function moduleDestroy($body) {
    $body.off("click");
  }
};

exports.default = {
  html: html,
  fn: fn
};

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(64);
var isBuffer = __webpack_require__(80);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(60);
var normalizeHeaderName = __webpack_require__(82);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(66);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(66);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@-moz-keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@keyframes ax6-ui-calendar-fadeout {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.5; } }\n\n@-webkit-keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n@-moz-keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n@keyframes ax6-ui-calendar-fadein {\n  from {\n    opacity: 0.5; }\n  to {\n    opacity: 1.0; } }\n\n[data-ax6ui-calendar] {\n  box-sizing: border-box;\n  position: relative; }\n  [data-ax6ui-calendar] * {\n    box-sizing: border-box; }\n  [data-ax6ui-calendar] .calendar-control {\n    position: relative;\n    box-sizing: content-box;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5);\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 18px;\n    margin-bottom: 5px;\n    padding: 0;\n    color: #333; }\n    [data-ax6ui-calendar] .calendar-control .date-move-left, [data-ax6ui-calendar] .calendar-control .date-move-right {\n      display: block;\n      position: absolute;\n      overflow: hidden;\n      text-align: center;\n      font-size: 22px;\n      cursor: pointer;\n      text-decoration: none;\n      padding: 0; }\n      [data-ax6ui-calendar] .calendar-control .date-move-left i, [data-ax6ui-calendar] .calendar-control .date-move-left span, [data-ax6ui-calendar] .calendar-control .date-move-right i, [data-ax6ui-calendar] .calendar-control .date-move-right span {\n        line-height: inherit; }\n    [data-ax6ui-calendar] .calendar-control .date-move-left {\n      left: 0px;\n      top: 0px; }\n    [data-ax6ui-calendar] .calendar-control .date-move-right {\n      right: 0px;\n      top: 0px; }\n    [data-ax6ui-calendar] .calendar-control .date-display {\n      text-align: center; }\n      [data-ax6ui-calendar] .calendar-control .date-display [data-calendar-display] {\n        margin: 0px 10px;\n        cursor: pointer;\n        text-decoration: underline; }\n    [data-ax6ui-calendar] .calendar-control a {\n      color: #333; }\n    [data-ax6ui-calendar] .calendar-control a:hover {\n      color: #337ab7; }\n  [data-ax6ui-calendar] .calendar-body.fadein {\n    -webkit-animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    -moz-animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    animation: ax6-ui-calendar-fadein 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    opacity: 1.0; }\n  [data-ax6ui-calendar] .calendar-body.fadeout {\n    -webkit-animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    -moz-animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    animation: ax6-ui-calendar-fadeout 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);\n    opacity: 0.0; }\n  [data-ax6ui-calendar] .calendar-body table {\n    box-sizing: border-box;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 0 none; }\n    [data-ax6ui-calendar] .calendar-body table thead {\n      border: 0 none; }\n      [data-ax6ui-calendar] .calendar-body table thead td, [data-ax6ui-calendar] .calendar-body table thead th {\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 1em;\n        cursor: pointer;\n        text-align: center;\n        font-size: 12px;\n        padding: 0px 2px;\n        border: 0px none;\n        overflow: hidden;\n        background-color: #FFFFFF;\n        background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n        background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n        color: #6D6E70; }\n        [data-ax6ui-calendar] .calendar-body table thead td.calendar-col-0, [data-ax6ui-calendar] .calendar-body table thead th.calendar-col-0 {\n          color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table thead td.calendar-col-6, [data-ax6ui-calendar] .calendar-body table thead th.calendar-col-6 {\n          color: #32B4DC; }\n    [data-ax6ui-calendar] .calendar-body table tbody {\n      border: 0 none; }\n      [data-ax6ui-calendar] .calendar-body table tbody td, [data-ax6ui-calendar] .calendar-body table tbody th {\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 1em;\n        cursor: pointer;\n        text-align: center;\n        font-size: 14px;\n        border: 0px none;\n        background-color: #FFFFFF;\n        background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n        background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n        overflow: hidden;\n        /*\n          &.calendar-col-0 {\n              .calendar-item-day.live {\n                  color: $ax6ui-calendar-sun-text-color;\n                  @include extend-item-theme();\n              }\n          }\n          &.calendar-col-6 {\n              .calendar-item-day.live {\n                  color: $ax6ui-calendar-sat-text-color;\n                  @include extend-item-theme();\n              }\n          }\n          */ }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day {\n          position: relative;\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon {\n            position: absolute;\n            width: 100%;\n            text-align: center;\n            line-height: 11.2px;\n            font-size: 11.2px; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon.addon-header, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon.addon-header {\n              left: 0px;\n              top: 1px; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day span.addon.addon-footer, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day span.addon.addon-footer {\n              left: 0px;\n              bottom: 1px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live span.addon {\n              color: #A1A1A1; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live.sunday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live.sunday {\n              color: #C78B81; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.live.saturday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.live.saturday {\n              color: #32B4DC; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus.hover {\n              background-color: #32B4DC;\n              background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n              background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n              color: #fff !important; }\n              [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.focus.hover span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.focus.hover span.addon {\n                color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.period, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.period {\n            background-color: #82d3fa;\n            background-image: -webkit-linear-gradient(bottom, #82d3fa, #82d3fa);\n            background-image: linear-gradient(to top,#82d3fa, #82d3fa);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.period span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.period span.addon {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.selected-day, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.selected-day {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.selected-day span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.selected-day span.addon {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-day.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-day.holiday {\n            color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month {\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.hover {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.selected-month span.lunar, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.selected-month span.lunar {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-month.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-month.holiday {\n            color: #C78B81; }\n        [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year {\n          display: block;\n          width: 100%;\n          height: 100%;\n          vertical-align: middle;\n          border-radius: 5px;\n          overflow: hidden;\n          line-height: inherit;\n          background-color: #FFFFFF;\n          background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n          background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n          color: #C3C4C6;\n          font-size: 14px; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.live, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.live {\n            background-color: #F0F0F0;\n            background-image: -webkit-linear-gradient(bottom, #F0F0F0, #F0F0F0);\n            background-image: linear-gradient(to top,#F0F0F0, #F0F0F0);\n            color: #6D6E70; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.hover, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.hover {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.focus, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.focus {\n            background-color: #E67241;\n            background-image: -webkit-linear-gradient(bottom, #E67241, #E67241);\n            background-image: linear-gradient(to top,#E67241, #E67241);\n            color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year {\n            background-color: #32B4DC;\n            background-image: -webkit-linear-gradient(bottom, #32B4DC, #32B4DC);\n            background-image: linear-gradient(to top,#32B4DC, #32B4DC);\n            color: #fff !important; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year span.addon, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year span.addon {\n              color: #fff; }\n            [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.selected-year span.lunar, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.selected-year span.lunar {\n              color: #fff; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.disable, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.disable {\n            background-color: #FFFFFF;\n            background-image: -webkit-linear-gradient(bottom, #FFFFFF, #FFFFFF);\n            background-image: linear-gradient(to top,#FFFFFF, #FFFFFF);\n            color: #dddedf; }\n          [data-ax6ui-calendar] .calendar-body table tbody td .calendar-item-year.holiday, [data-ax6ui-calendar] .calendar-body table tbody th .calendar-item-year.holiday {\n            color: #C78B81; }\n", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(60);
var settle = __webpack_require__(83);
var buildURL = __webpack_require__(85);
var parseHeaders = __webpack_require__(86);
var isURLSameOrigin = __webpack_require__(87);
var createError = __webpack_require__(67);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(88);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(89);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(84);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0); } }\n\n@-moz-keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -moz-transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -moz-transform: translate(0, 0); } }\n\n@keyframes ax-picker {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: translate(0, 0%);\n    -moz-transform: translate(0, 0%);\n    -ms-transform: translate(0, 0%);\n    -o-transform: translate(0, 0%);\n    transform: translate(0, 0%); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); } }\n\n@-webkit-keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -webkit-transform: scale(0.8) translate(0, -10%); } }\n\n@-moz-keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -moz-transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -moz-transform: scale(0.8) translate(0, -10%); } }\n\n@keyframes ax-picker-destroy {\n  from {\n    opacity: 1.0;\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n  to {\n    opacity: 0.0;\n    -webkit-transform: scale(0.8) translate(0, -10%);\n    -moz-transform: scale(0.8) translate(0, -10%);\n    -ms-transform: scale(0.8) translate(0, -10%);\n    -o-transform: scale(0.8) translate(0, -10%);\n    transform: scale(0.8) translate(0, -10%); } }\n\n[data-ax6ui-picker] {\n  box-sizing: border-box;\n  z-index: 2000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  -moz-animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  animation: ax-picker 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transform-origin: center top;\n  -moz-transform-origin: center top;\n  -ms-transform-origin: center top;\n  -o-transform-origin: center top;\n  transform-origin: center top;\n  /* flip type\n  @include backface-visibility(visible);\n  @include transform(translateY(0%) rotateX(0deg));\n  */\n  background-color: #fff;\n  background-image: -webkit-linear-gradient(bottom, #fff);\n  background-image: linear-gradient(to top,#fff);\n  border: 1px solid;\n  border-color: #ddd;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.175); }\n  [data-ax6ui-picker] *,\n  [data-ax6ui-picker] *:before,\n  [data-ax6ui-picker] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-picker] .ax-picker-heading {\n    font-weight: 600;\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    color: #333;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5); }\n    [data-ax6ui-picker] .ax-picker-heading .badge {\n      font-size: 0.8em;\n      color: #f5f5f5;\n      background-color: #333;\n      background-image: -webkit-linear-gradient(bottom, #333);\n      background-image: linear-gradient(to top,#333); }\n  [data-ax6ui-picker] .ax-picker-body {\n    padding: 5px;\n    text-align: center; }\n    [data-ax6ui-picker] .ax-picker-body .ax-picker-content {\n      min-width: 50px; }\n      [data-ax6ui-picker] .ax-picker-body .ax-picker-content .ax-picker-content-box {\n        border: 0px solid;\n        border-color: none;\n        border-radius: 0px;\n        padding: 0px;\n        overflow: hidden; }\n    [data-ax6ui-picker] .ax-picker-body .ax-picker-buttons {\n      padding: 10px 0px 5px 0px; }\n      [data-ax6ui-picker] .ax-picker-body .ax-picker-buttons button:not(:last-child) {\n        margin-right: 3px; }\n  [data-ax6ui-picker].direction-top .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    top: 0; }\n    [data-ax6ui-picker].direction-top .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      top: -20px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-top .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      top: -18px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 20px solid #fff; }\n  [data-ax6ui-picker].direction-right .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    right: 0;\n    top: 50%; }\n    [data-ax6ui-picker].direction-right .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: -20px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-right .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: -18px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-left: 20px solid #fff; }\n  [data-ax6ui-picker].direction-bottom .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 50%;\n    bottom: 0; }\n    [data-ax6ui-picker].direction-bottom .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      bottom: -20px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-bottom .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -10px;\n      bottom: -18px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 20px solid #fff; }\n  [data-ax6ui-picker].direction-left .ax-picker-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 0;\n    top: 50%; }\n    [data-ax6ui-picker].direction-left .ax-picker-arrow:before {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -20px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-right: 20px solid #ddd; }\n    [data-ax6ui-picker].direction-left .ax-picker-arrow:after {\n      content: ' ';\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: -18px;\n      top: -10px;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      border-right: 20px solid #fff; }\n  [data-ax6ui-picker].destroy {\n    -webkit-animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    -moz-animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n    animation: ax-picker-destroy 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards; }\n  [data-ax6ui-picker].direction-top {\n    -webkit-transform-origin: center top;\n    -moz-transform-origin: center top;\n    -ms-transform-origin: center top;\n    -o-transform-origin: center top;\n    transform-origin: center top; }\n  [data-ax6ui-picker].direction-right {\n    -webkit-transform-origin: right center;\n    -moz-transform-origin: right center;\n    -ms-transform-origin: right center;\n    -o-transform-origin: right center;\n    transform-origin: right center; }\n  [data-ax6ui-picker].direction-bottom {\n    -webkit-transform-origin: center bottom;\n    -moz-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    -o-transform-origin: center bottom;\n    transform-origin: center bottom; }\n  [data-ax6ui-picker].direction-left {\n    -webkit-transform-origin: left center;\n    -moz-transform-origin: left center;\n    -ms-transform-origin: left center;\n    -o-transform-origin: left center;\n    transform-origin: left center; }\n\n.input-group[data-ax6picker] .input-group-addon {\n  cursor: pointer; }\n  .input-group[data-ax6picker] .input-group-addon:not(:last-child) {\n    border-left: 0 none;\n    border-right: 0 none; }\n  .input-group[data-ax6picker] .input-group-addon.color-preview {\n    padding: 0; }\n  .input-group[data-ax6picker] .input-group-addon [data-ax6picker-color=\"preview\"] {\n    display: block; }\n\n.form-group[data-ax6picker] .input-group-addon {\n  cursor: pointer; }\n  .form-group[data-ax6picker] .input-group-addon:not(:last-child) {\n    border-left: 0 none;\n    border-right: 0 none; }\n  .form-group[data-ax6picker] .input-group-addon.color-preview {\n    padding: 0; }\n  .form-group[data-ax6picker] .input-group-addon [data-ax6picker-color=\"preview\"] {\n    display: block; }\n", ""]);

// exports


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@-moz-keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@keyframes ax-menu {\n  0% {\n    opacity: 0.0; }\n  1% {\n    opacity: 0.0; }\n  100% {\n    opacity: 0.95; } }\n\n@-webkit-keyframes ax-menu-destroy {\n  from {\n    -webkit-transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: scale(0.5);\n    opacity: 0.0; } }\n\n@-moz-keyframes ax-menu-destroy {\n  from {\n    -moz-transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -moz-transform: scale(0.5);\n    opacity: 0.0; } }\n\n@keyframes ax-menu-destroy {\n  from {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: scale(0.5);\n    -moz-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    -o-transform: scale(0.5);\n    transform: scale(0.5);\n    opacity: 0.0; } }\n\n[data-ax6ui-menu] {\n  box-sizing: border-box;\n  z-index: 2000;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  .width: 100px;\n  opacity: 0.95;\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -moz-animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  animation: ax-menu 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transform-origin: center top;\n  -moz-transform-origin: center top;\n  -ms-transform-origin: center top;\n  -o-transform-origin: center top;\n  transform-origin: center top;\n  /* flip type\n  @include backface-visibility(visible);\n  @include transform(translateY(0%) rotateX(0deg));\n  */\n  background-color: #eee;\n  background-image: -webkit-linear-gradient(bottom, #eee);\n  background-image: linear-gradient(to top,#eee);\n  border: 1px solid;\n  border-color: #aaa;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n  color: #333; }\n  [data-ax6ui-menu] *,\n  [data-ax6ui-menu] *:before,\n  [data-ax6ui-menu] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-menu] .ax-menu-heading {\n    font-weight: 600;\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    color: #333;\n    background-color: #f5f5f5;\n    background-image: -webkit-linear-gradient(bottom, #f5f5f5);\n    background-image: linear-gradient(to top,#f5f5f5); }\n    [data-ax6ui-menu] .ax-menu-heading .badge {\n      font-size: 0.8em;\n      color: #f5f5f5;\n      background-color: #333;\n      background-image: -webkit-linear-gradient(bottom, #333);\n      background-image: linear-gradient(to top,#333); }\n  [data-ax6ui-menu] .ax-menu-body {\n    padding: 5px 0px;\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item {\n      padding: 4px 0px;\n      text-align: left;\n      background: #eee;\n      color: #444;\n      cursor: pointer;\n      font-size: 13px;\n      display: table;\n      position: relative;\n      border-collapse: separate;\n      box-sizing: border-box;\n      overflow: hidden;\n      width: 100%;\n      height: 18px; }\n      [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell {\n        box-sizing: border-box;\n        display: table-cell;\n        vertical-align: middle;\n        white-space: nowrap;\n        font-size: 13px;\n        line-height: 18px;\n        padding: 0px 0px 0px 0px;\n        user-select: none; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox {\n          overflow: hidden;\n          width: 18px;\n          text-align: center; }\n          [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap {\n            position: relative;\n            display: block;\n            width: 18px;\n            height: 18px; }\n            [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox:after {\n              content: '';\n              width: 10px;\n              height: 5px;\n              position: absolute;\n              top: 4px;\n              left: 4px;\n              border: 2px solid #444;\n              border-top: none;\n              border-right: none;\n              background: transparent;\n              opacity: 0.1;\n              -webkit-transform: rotate(-50deg);\n              -moz-transform: rotate(-50deg);\n              -ms-transform: rotate(-50deg);\n              -o-transform: rotate(-50deg);\n              transform: rotate(-50deg); }\n            [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap.useCheckBox[data-item-checked=\"true\"]:after {\n              opacity: 1; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-icon {\n          text-align: left; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-label {\n          padding-right: 10px; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator {\n          text-align: right;\n          padding: 0px 7px 0px 0px; }\n          [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-accelerator .item-wrap {\n            width: 100%;\n            vertical-align: middle;\n            display: inline-block;\n            max-width: 100%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            word-wrap: normal;\n            display: block; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item .ax-menu-item-cell.ax-menu-item-handle {\n          overflow: hidden;\n          width: 14px;\n          text-align: center; }\n      [data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover, [data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover {\n        background: #999;\n        color: #fff; }\n        [data-ax6ui-menu] .ax-menu-body .ax-menu-item:hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after, [data-ax6ui-menu] .ax-menu-body .ax-menu-item.hover .ax-menu-item-cell.ax-menu-item-checkbox .item-checkbox-wrap:after {\n          border-color: #fff; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item-divide {\n      border-top: 1px solid;\n      border-color: #aaaaaa;\n      margin: 5px 0px; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-item-html {\n      padding: 0px 5px;\n      text-align: left; }\n    [data-ax6ui-menu] .ax-menu-body .ax-menu-buttons button:not(:last-child) {\n      margin-right: 3px; }\n  [data-ax6ui-menu].direction-top {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 50%;\n      top: 0px; }\n      [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        top: -20px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-top.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        top: -18px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 20px solid #eee; }\n  [data-ax6ui-menu].direction-right {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n    [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      right: 0px;\n      top: 50%; }\n      [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        right: -20px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-right.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        right: -18px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 20px solid #eee; }\n  [data-ax6ui-menu].direction-bottom {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n    [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 50%;\n      bottom: 0px; }\n      [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        bottom: -20px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-top: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-bottom.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -10px;\n        bottom: -18px;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-top: 20px solid #eee; }\n  [data-ax6ui-menu].direction-left {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      left: 0px;\n      top: 50%; }\n      [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:before {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -20px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 20px solid #aaa; }\n      [data-ax6ui-menu].direction-left.with-arrow .ax-menu-arrow:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n        left: -18px;\n        top: -10px;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 20px solid #eee; }\n  [data-ax6ui-menu].destroy {\n    -webkit-animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n    -moz-animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n    animation: ax-menu-destroy 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards; }\n  [data-ax6ui-menu].direction-top {\n    -webkit-transform-origin: center top;\n    -moz-transform-origin: center top;\n    -ms-transform-origin: center top;\n    -o-transform-origin: center top;\n    transform-origin: center top; }\n  [data-ax6ui-menu].direction-right {\n    -webkit-transform-origin: right center;\n    -moz-transform-origin: right center;\n    -ms-transform-origin: right center;\n    -o-transform-origin: right center;\n    transform-origin: right center; }\n  [data-ax6ui-menu].direction-bottom {\n    -webkit-transform-origin: center bottom;\n    -moz-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    -o-transform-origin: center bottom;\n    transform-origin: center bottom; }\n  [data-ax6ui-menu].direction-left {\n    -webkit-transform-origin: left center;\n    -moz-transform-origin: left center;\n    -ms-transform-origin: left center;\n    -o-transform-origin: left center;\n    transform-origin: left center; }\n\n[data-ax6ui-menubar] {\n  box-sizing: border-box;\n  height: 100%;\n  position: relative; }\n  [data-ax6ui-menubar] .ax-menu-body {\n    display: table;\n    height: 100%;\n    border-collapse: separate;\n    box-sizing: border-box; }\n    [data-ax6ui-menubar] .ax-menu-body .ax-menu-item {\n      display: table-cell;\n      height: 100%;\n      vertical-align: middle;\n      white-space: nowrap;\n      box-sizing: border-box;\n      padding: 0px 10px;\n      cursor: pointer;\n      font-size: 13px; }\n      [data-ax6ui-menubar] .ax-menu-body .ax-menu-item .ax-menu-item-cell {\n        white-space: nowrap;\n        user-select: none; }\n  [data-ax6ui-menubar] .ax-menu-body .ax-menu-item {\n    color: #444; }\n    [data-ax6ui-menubar] .ax-menu-body .ax-menu-item:hover, [data-ax6ui-menubar] .ax-menu-body .ax-menu-item.hover {\n      background: #999;\n      color: #fff; }\n", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);
var bind = __webpack_require__(64);
var Axios = __webpack_require__(81);
var defaults = __webpack_require__(61);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(69);
axios.CancelToken = __webpack_require__(95);
axios.isCancel = __webpack_require__(68);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(96);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(61);
var utils = __webpack_require__(60);
var InterceptorManager = __webpack_require__(90);
var dispatchRequest = __webpack_require__(91);
var isAbsoluteURL = __webpack_require__(93);
var combineURLs = __webpack_require__(94);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(67);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);
var transformData = __webpack_require__(92);
var isCancel = __webpack_require__(68);
var defaults = __webpack_require__(61);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(60);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(69);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../css-loader/index.js!../../sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "[data-ax6ui-grid] {\n  box-sizing: border-box; }\n  [data-ax6ui-grid] *,\n  [data-ax6ui-grid] *:before,\n  [data-ax6ui-grid] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    background: #fff;\n    border: 1px solid #ccc;\n    overflow: hidden; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"hidden\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      left: -100%;\n      top: -100%;\n      height: 100%;\n      width: 100%; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] {\n      user-select: none;\n      margin: 0;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n      background-color: #FFFFFF;\n      background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n      background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n      border: 0 none;\n      border-bottom: 1px solid #ccc;\n      color: #222; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        overflow: hidden;\n        /*\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    transform: translate3d(0, 0, 0);\n    */ }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table {\n          table-layout: fixed;\n          border-collapse: separate;\n          border-spacing: 0;\n          border: 0 none;\n          width: 100%;\n          height: 100%; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr {\n            border-bottom: 0 none; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-0 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-1 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-2 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.tr-3 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr.hover {\n              background: #e1eef8; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-grouping-tr=\"true\"] {\n              background: #ffffe7; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] {\n              background: #e3f1ff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"lineNumber\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 1; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n              cursor: not-allowed;\n              background-color: #d7d7d7;\n              background-image: -webkit-linear-gradient(top, #d7d7d7, #e6e6e6);\n              background-image: linear-gradient(to bottom,#d7d7d7, #e6e6e6); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 0; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.merged {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td {\n              box-sizing: border-box;\n              overflow: hidden;\n              position: relative;\n              padding: 0;\n              font-size: 12px;\n              border: 0 none;\n              border-radius: 0;\n              cursor: pointer;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.hasBorder {\n                border-right: 1px solid #ccc;\n                border-bottom: 1px solid #ccc; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td.focused {\n                box-shadow: inset 0px 0px 1px 1px #0581f2; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td:hover {\n                background-color: #eee;\n                background-image: -webkit-linear-gradient(top, #eee, #eee);\n                background-image: linear-gradient(to bottom,#eee, #eee); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                border-right: 0 none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-selected] {\n                background: #e3f1ff;\n                border-color: #ccc;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-focused] {\n                box-shadow: inset 0px 0px 1px 1px #0581f2;\n                background: #fdfeff;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] {\n                cursor: pointer; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] [data-ax6grid-cellHolder] {\n                  padding: 5px; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%;\n                  width: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"][data-ax6grid-selected=\"true\"] .checkBox:after {\n                  opacity: 1; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] {\n                display: block;\n                box-sizing: border-box;\n                padding: 3px 5px;\n                font-size: 12px;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"left\"] {\n                  text-align: left; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"center\"] {\n                  text-align: center; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"right\"] {\n                  text-align: right; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-cellHolder=\"multiLine\"] {\n                  white-space: normal; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor] {\n                  position: absolute;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor]::-ms-clear {\n                    display: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] {\n                  position: absolute;\n                  display: block;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] .ax5select-display {\n                    height: 100%;\n                    border-radius: 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"] {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"]:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"][data-ax6grid-checked=\"true\"]:after {\n                    opacity: 1.0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-arrow] {\n                  display: inline-block;\n                  box-sizing: content-box;\n                  text-align: right;\n                  text-shadow: 0 -1px #fff;\n                  padding: 0 5px 0 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow] {\n                  cursor: pointer;\n                  text-decoration: none; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow]:hover {\n                    text-decoration: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"group\"] {\n                  display: inline-block; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"item\"] {\n                  display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] {\n          border-right: 1px solid #cccccc; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] table tr td {\n            text-align: center; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] {\n          border-right: 1px solid #cccccc;\n          background: #f2f2f2; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr {\n            background: #f2f2f2; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr td {\n              text-align: center;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-header\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"] {\n          border-right: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-right-body\"] {\n          border-bottom: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          border-top: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          background: #ffe7e2; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-panel] [data-ax6grid-panel-scroll] {\n          position: absolute;\n          left: 0;\n          top: 0; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-resizer] {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 4px;\n        height: 100%;\n        cursor: col-resize; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-resizer]:hover {\n          background: #ff3300;\n          opacity: 0.5; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort] {\n        position: relative;\n        width: 10;\n        height: 10;\n        display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort]:before {\n          top: 0;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 3.6px solid transparent;\n          border-right: 3.6px solid transparent;\n          border-bottom: 4.09091px solid #000;\n          background: transparent;\n          opacity: 0.3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort]:after {\n          bottom: 0;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 3.6px solid transparent;\n          border-right: 3.6px solid transparent;\n          border-top: 4.09091px solid #000;\n          background: transparent;\n          opacity: 0.3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"asc\"]:before {\n          top: 2px;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-bottom: 5px solid #000;\n          background: transparent;\n          opacity: 0.8; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"asc\"]:after {\n          display: none; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"desc\"]:before {\n          display: none; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-sort][data-ax6grid-column-sort-order=\"desc\"]:after {\n          bottom: 2px;\n          left: 0;\n          position: absolute;\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-top: 5px solid #000;\n          background: transparent;\n          opacity: 0.8; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-filter] {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 10;\n        height: 10;\n        cursor: pointer; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"header\"] [data-ax6grid-column-filter]:before {\n          content: ' ';\n          width: 0;\n          height: 0;\n          display: inline-block;\n          border-left: 5 solid transparent;\n          border-right: 5 solid transparent;\n          border-top: 10 solid #000;\n          background: transparent;\n          opacity: 1; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] {\n      margin: 0;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n      /*\n      @keyframes fadein {\n          from { opacity: 0; }\n          to   { opacity: 1; }\n      }\n\n      [data-ax6grid-panel-scroll=\"body\"]{\n          table {\n              @include animation(fadein 0.3s);\n          }\n      }\n      */ }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        overflow: hidden;\n        /*\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    transform: translate3d(0, 0, 0);\n    */ }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table {\n          table-layout: fixed;\n          border-collapse: separate;\n          border-spacing: 0;\n          border: 0 none;\n          width: 100%; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr {\n            border-bottom: 0 none; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-0 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-1 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-2 {\n              background: #f3f3f3; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.tr-3 {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr.hover {\n              background: #e1eef8; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-grouping-tr=\"true\"] {\n              background: #ffffe7; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] {\n              background: #e3f1ff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"lineNumber\"] {\n                box-shadow: none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-selected=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 1; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n              cursor: not-allowed;\n              background-color: #d7d7d7;\n              background-image: -webkit-linear-gradient(top, #d7d7d7, #e6e6e6);\n              background-image: linear-gradient(to bottom,#d7d7d7, #e6e6e6); }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr[data-ax6grid-disable-selection=\"true\"] td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                opacity: 0; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.merged {\n              background: #fff; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td {\n              box-sizing: border-box;\n              overflow: hidden;\n              position: relative;\n              padding: 0;\n              font-size: 12px;\n              border: 0 none;\n              border-radius: 0; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.hasBorder {\n                border-right: 1px solid #ccc;\n                border-bottom: 1px solid #ccc; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td.focused {\n                box-shadow: inset 0px 0px 1px 1px #0581f2; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-row=\"null\"] {\n                border-right: 0 none; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-selected] {\n                background: #e3f1ff;\n                border-color: #ccc;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-focused] {\n                box-shadow: inset 0px 0px 1px 1px #0581f2;\n                background: #fdfeff;\n                color: #000; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] {\n                cursor: pointer; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] [data-ax6grid-cellHolder] {\n                  padding: 5px; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%;\n                  width: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"] .checkBox:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td[data-ax6grid-column-attr=\"rowSelector\"][data-ax6grid-selected=\"true\"] .checkBox:after {\n                  opacity: 1; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] {\n                display: block;\n                box-sizing: border-box;\n                padding: 3px 5px;\n                font-size: 12px;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"left\"] {\n                  text-align: left; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"center\"] {\n                  text-align: center; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-text-align=\"right\"] {\n                  text-align: right; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder][data-ax6grid-cellHolder=\"multiLine\"] {\n                  white-space: normal; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor] {\n                  position: absolute;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor]::-ms-clear {\n                    display: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] {\n                  position: absolute;\n                  display: block;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  border: 0 none;\n                  background: #fff; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax5select] .ax5select-display {\n                    height: 100%;\n                    border-radius: 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"] {\n                  display: inline-block;\n                  position: relative;\n                  border: 1px solid #ccc;\n                  border-radius: 3px;\n                  background-color: #FFFFFF;\n                  background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n                  background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n                  height: 100%; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"]:after {\n                    content: '';\n                    width: 60%;\n                    height: 40%;\n                    position: absolute;\n                    top: 20%;\n                    right: 20%;\n                    border: 0.2em solid #3372ff;\n                    border-top: none;\n                    border-right: none;\n                    background: transparent;\n                    opacity: 0.0;\n                    -webkit-transform: rotate(-50deg);\n                    -moz-transform: rotate(-50deg);\n                    -ms-transform: rotate(-50deg);\n                    -o-transform: rotate(-50deg);\n                    transform: rotate(-50deg); }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-editor=\"checkbox\"][data-ax6grid-checked=\"true\"]:after {\n                    opacity: 1.0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-arrow] {\n                  display: inline-block;\n                  box-sizing: content-box;\n                  text-align: right;\n                  text-shadow: 0 -1px #fff;\n                  padding: 0 5px 0 0; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow] {\n                  cursor: pointer;\n                  text-decoration: none; }\n                  [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] a[data-ax6grid-tnode-arrow]:hover {\n                    text-decoration: none; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"group\"] {\n                  display: inline-block; }\n                [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] table tr td [data-ax6grid-cellHolder] [data-ax6grid-tnode-item=\"item\"] {\n                  display: inline-block; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] {\n          border-right: 1px solid #cccccc; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-header\"] table tr td {\n            text-align: center; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] {\n          border-right: 1px solid #cccccc;\n          background: #f2f2f2; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr {\n            background: #f2f2f2; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"aside-body\"] table tr td, [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"] table tr td {\n              text-align: center;\n              box-shadow: inset 1px 1px 0px 0px #fff; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-header\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"] {\n          border-right: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"top-right-body\"] {\n          border-bottom: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          border-top: 1px solid #b3b3b3; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-aside-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-left-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-body\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel][data-ax6grid-panel=\"bottom-right-body\"] {\n          background: #ffe7e2; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"body\"] [data-ax6grid-panel] [data-ax6grid-panel-scroll] {\n          position: absolute;\n          left: 0;\n          top: 0; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      overflow: hidden;\n      background-color: #FFFFFF;\n      background-image: -webkit-linear-gradient(top, #FFFFFF, #F0F0F0);\n      background-image: linear-gradient(to bottom,#FFFFFF, #F0F0F0);\n      border: 0 none;\n      border-top: 1px solid #ccc; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] {\n        margin: 0;\n        padding: 0;\n        display: table;\n        width: 100%;\n        height: 100%; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] {\n          margin: 0;\n          padding: 0;\n          display: table-cell;\n          vertical-align: middle;\n          text-align: left;\n          padding-left: 5px;\n          font-size: 12px; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] {\n            display: table; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell-paging\"] {\n              display: table-cell;\n              vertical-align: middle; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-navigation=\"cell-paging\"] {\n              padding: 0 5px; }\n            [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move] {\n              box-sizing: border-box;\n              min-width: 20px;\n              border-radius: 5px;\n              padding: 1px;\n              border: 0px none;\n              background: transparent;\n              font-size: 11px;\n              color: #222;\n              outline: 0; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move][data-ax6grid-page-selected=\"true\"], [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move]:active {\n                background-color: #888;\n                color: #fff; }\n              [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"navigation\"] [data-ax6grid-page-navigation=\"holder\"] [data-ax6grid-page-move]:hover {\n                text-decoration: underline; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"page\"] [data-ax6grid-page=\"holder\"] [data-ax6grid-page=\"status\"] {\n          margin: 0;\n          padding: 0;\n          display: table-cell;\n          text-align: right;\n          vertical-align: middle;\n          padding-right: 10px;\n          font-size: 12px;\n          color: #222; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] {\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      right: 0;\n      bottom: 0; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] {\n        box-sizing: border-box;\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        width: 15px;\n        height: 100%;\n        background: #f3f3f3;\n        border-left: 1px solid #ccc; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] [data-ax6grid-scroller=\"vertical-bar\"] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px;\n          box-sizing: border-box;\n          border: 0px solid #fff;\n          background: #ccc;\n          cursor: ns-resize; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"vertical\"] [data-ax6grid-scroller=\"vertical-bar\"]:hover {\n            border: 0px solid #ccc;\n            background: #bababa; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] {\n        box-sizing: border-box;\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        height: 15px;\n        width: 100%;\n        background: #f3f3f3;\n        border-top: 1px solid #ccc; }\n        [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] [data-ax6grid-scroller=\"horizontal-bar\"] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border-bottom-left-radius: 10px;\n          border-bottom-right-radius: 10px;\n          box-sizing: border-box;\n          border: 0px solid #fff;\n          background: #ccc;\n          cursor: ew-resize; }\n          [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"horizontal\"] [data-ax6grid-scroller=\"horizontal-bar\"]:hover {\n            border: 0px solid #ccc;\n            background: #bababa; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-container=\"scroller\"] [data-ax6grid-scroller=\"corner\"] {\n        position: absolute;\n        display: none;\n        right: 0;\n        bottom: 0;\n        width: 15px;\n        height: 15px;\n        background: #EAEDEF;\n        border-top: 1px solid #ccc;\n        border-left: 1px solid #ccc; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"horizontal\"] {\n      display: none; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"horizontal\"].live {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: #ff3300;\n        opacity: 0.5;\n        height: 100%;\n        width: 2px;\n        cursor: col-resize; }\n    [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"vertical\"] {\n      display: none; }\n      [data-ax6ui-grid] [data-ax6grid-container=\"root\"] [data-ax6grid-resizer=\"vertical\"].live {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: #ff3300;\n        opacity: 0.5;\n        height: 2px;\n        width: 100%;\n        cursor: row-resize; }\n", ""]);

// exports


/***/ })
]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJQ2FsZW5kYXIvc3R5bGUuc2Nzcz83M2IyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSUNhbGVuZGFyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSVBpY2tlci9zdHlsZS5zY3NzPzhkMTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJUGlja2VyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJTWVudS9zdHlsZS5zY3NzPzE0OGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJTWVudS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlHcmlkL3N0eWxlLnNjc3M/YzgxNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlHcmlkL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiaHRtbCIsImZuIiwibW9kdWxlUnVuIiwiJGJvZHkiLCJzZXRGb3JtYXR0ZXIiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwic2V0Q29sbGVjdG9yIiwic2V0VG1wbCIsImdyaWRfYmFzaWMiLCJ0YXJnZXQiLCJmaW5kIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInNldERhdGEiLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzaG93TGluZU51bWJlciIsInNob3dSb3dTZWxlY3RvciIsIm11bHRpcGxlU2VsZWN0IiwibGluZU51bWJlckNvbHVtbldpZHRoIiwicm93U2VsZWN0b3JDb2x1bW5XaWR0aCIsImNvbHVtbnMiLCJrZXkiLCJsYWJlbCIsImZvcm1hdHRlciIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiZnJvemVuQ29sdW1uSW5kZXgiLCJmcm96ZW5Sb3dJbmRleCIsIndpZHRoIiwibWVudSIsImljb25XaWR0aCIsImFjY2VsZXJhdG9yV2lkdGgiLCJpdGVtQ2xpY2tBbmRDbG9zZSIsImljb25zIiwiY29sdW1uS2V5cyIsIml0ZW1zIiwiaWNvbiIsIm5hbWUiLCJjaGlkcmVuIiwiY2hlY2siLCJ0eXBlIiwiY2hlY2tlZCIsInJvbGUiLCJhY2NlbGVyYXRvciIsImZpbHRlclR5cGUiLCJkaXZpZGUiLCJvbkNsaWNrIiwiaXRlbSIsInBhcmFtIiwiYm9keSIsIm9uQ29udGV4dE1lbnUiLCJwb3B1cCIsIm1v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LEVBQXdFQyxHQUFHLE9BQTNFLEVBRlMsRUFHVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBSFMsRUFJVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBSlMsRUFLVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBTFMsRUFNVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBTlMsRUFPVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBUFMsRUFRVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBUlMsRUFTVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBVFMsRUFVVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBVlMsRUFXVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBWFMsRUFZVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBWlMsRUFhVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9ELEVBQXdFQyxHQUFHLE9BQTNFLEVBYlMsRUFjVCxFQUFDUCxHQUFHLEtBQUosRUFBV0MsR0FBRyxRQUFkLEVBQXdCQyxHQUFHLEtBQTNCLEVBQWtDQyxHQUFHLEdBQXJDLEVBQTBDQyxHQUFHLEdBQTdDLEVBQWtEQyxHQUFHLEtBQXJELEVBQTREQyxHQUFHLE9BQS9E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UTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7OzsrQ0N2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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eGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFYNlVJR3JpZCBhcyBHcmlkLCBBWDZVSU1lbnUgYXMgTWVudSB9IGZyb20gXCJheDZ1aVwiO1xuaW1wb3J0IFwiYXg2dWkvQVg2VUlHcmlkL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcImF4NnVpL0FYNlVJTWVudS9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCJheDZ1aS9BWDZVSUNhbGVuZGFyL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcImF4NnVpL0FYNlVJUGlja2VyL3N0eWxlLnNjc3NcIjtcblxuXG5sZXQgaHRtbCA9IGBcbjxoND5HcmlkIGJhc2ljPC9oND5cbjxkaXYgZGF0YS1heDZ1aS1ncmlkPVwiZ3JpZC1iYXNpY1wiIGRhdGEtYXg2dWktZ3JpZC1jb25maWc9XCJ7Y29sdW1uczogW1xuICAgICAgICB7a2V5OiAnYScsIGxhYmVsOiAnZmllbGQgQSd9LFxuICAgICAgICB7a2V5OiAnYicsIGxhYmVsOiAnZmllbGQgQid9LFxuICAgICAgICB7a2V5OiAnYycsIGxhYmVsOiAnbnVtYmVycyBDJ30sXG4gICAgICAgIHtrZXk6ICdkJywgbGFiZWw6ICdmaWVsZCBEJ30sXG4gICAgICAgIHtrZXk6ICdlJywgbGFiZWw6ICdmaWVsZCBFJ30sXG4gICAgICAgIHtrZXk6ICdmJywgbGFiZWw6ICdmaWVsZCBGJ30sXG4gICAgICAgIHtrZXk6ICdnJywgbGFiZWw6ICdmaWVsZCBHJ30sXG4gICAgICAgIHtrZXk6ICdoJywgbGFiZWw6ICdmaWVsZCBIJ31cbiAgICBdfVwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDtcIj48L2Rpdj5cbiAgICBcbjxoND5HcmlkIGZvcm1hdHRlcjwvaDQ+XG48ZGl2IGRhdGEtYXg2dWktZ3JpZD1cImdyaWQtZm9ybWF0dGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4O1wiPjwvZGl2PlxuXG48aDQ+R3JpZCBjb2x1bW4gZ3JvdXA8L2g0PlxuPGRpdiBkYXRhLWF4NnVpLWdyaWQ9XCJncmlkLWNvbHVtbi1ncm91cFwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDtcIj48L2Rpdj5cblxuPGg0PkdyaWQgZnJvemVuIGNvbCZyb3c8L2g0PlxuPGRpdiBkYXRhLWF4NnVpLWdyaWQ9XCJncmlkLWZyb3plblwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDtcIj48L2Rpdj5cblxuPGg0PkdyaWQgY29udGV4dC1tZW51PC9oND5cbjxkaXYgZGF0YS1heDZ1aS1ncmlkPVwiZ3JpZC1jb250ZXh0LW1lbnVcIiBzdHlsZT1cImhlaWdodDogMjAwcHg7XCI+PC9kaXY+XG5gO1xubGV0IGZuID0ge1xuICBtb2R1bGVSdW46IGZ1bmN0aW9uICgkYm9keSkge1xuXG4gICAgR3JpZC5zZXRGb3JtYXR0ZXIoe1xuICAgICAgXCJjYXBpdGFsXCIoKSB7IC8vIOqwnOuwnOyekOqwgCDsp4HsoJEg7KCV7J2Y7ZWcLlxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIEdyaWQuc2V0Q29sbGVjdG9yKHt9KTtcbiAgICBHcmlkLnNldFRtcGwoe1xuICAgICAgXCJwYWdlX3N0YXR1c1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnPHNwYW4+e3t7cHJvZ3Jlc3N9fX0ge3tmcm9tUm93SW5kZXh9fSAtIHt7dG9Sb3dJbmRleH19IG9mIHt7ZGF0YVJvd0NvdW50fX0ge3sjZGF0YVJlYWxSb3dDb3VudH19ICDtmITsnqztjpjsnbTsp4Age3sufX17ey9kYXRhUmVhbFJvd0NvdW50fX0ge3sjdG90YWxFbGVtZW50c319ICDsoITssrTqsK/siJgge3sufX17ey90b3RhbEVsZW1lbnRzfX08L3NwYW4+JztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBncmlkX2Jhc2ljID0gbmV3IEdyaWQoe1xuICAgICAgdGFyZ2V0OiAkYm9keS5maW5kKCdbZGF0YS1heDZ1aS1ncmlkPVwiZ3JpZC1iYXNpY1wiXScpLFxuICAgIH0pO1xuXG4gICAgLy8geGhyIO2YuOy2nFxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICB1cmw6ICdodHRwOi8vYXBpLWRlbW8uYXg1LmlvL2FwaS92MS9heDVncmlkJ1xuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIGdyaWRfYmFzaWMuc2V0RGF0YShyZXMuZGF0YSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgLy9cbiAgICBuZXcgR3JpZCh7XG4gICAgICB0YXJnZXQ6ICRib2R5LmZpbmQoJ1tkYXRhLWF4NnVpLWdyaWQ9XCJncmlkLWZvcm1hdHRlclwiXScpLFxuICAgICAgc2hvd0xpbmVOdW1iZXI6IHRydWUsXG4gICAgICBzaG93Um93U2VsZWN0b3I6IHRydWUsXG4gICAgICBtdWx0aXBsZVNlbGVjdDogdHJ1ZSxcbiAgICAgIGxpbmVOdW1iZXJDb2x1bW5XaWR0aDogNDAsXG4gICAgICByb3dTZWxlY3RvckNvbHVtbldpZHRoOiAyNyxcbiAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAge2tleTogJ2EnLCBsYWJlbDogJ2ZpZWxkIEEnfSxcbiAgICAgICAge2tleTogJ2InLCBsYWJlbDogJ2ZpZWxkIEInLCBmb3JtYXR0ZXI6ICdjYXBpdGFsJ30sXG4gICAgICAgIHtrZXk6ICdjJywgbGFiZWw6ICdudW1iZXIgQycsIGZvcm1hdHRlcjogJ21vbmV5J30gLy8g6re466as65Oc7JeQIOuCtOyepeuQnCBmb3JtYXR0ZXJcbiAgICAgIF1cbiAgICB9KS5zZXREYXRhKFtcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMH1cbiAgICBdKTtcblxuICAgIC8vXG4gICAgbmV3IEdyaWQoe1xuICAgICAgdGFyZ2V0OiAkYm9keS5maW5kKCdbZGF0YS1heDZ1aS1ncmlkPVwiZ3JpZC1jb2x1bW4tZ3JvdXBcIl0nKSxcbiAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAge2tleTogXCJhXCIsIGxhYmVsOiBcImZpZWxkIEFcIn0sXG4gICAgICAgIHtrZXk6IFwiYlwiLCBsYWJlbDogXCJmaWVsZCBCXCJ9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNcIiwgbGFiZWw6IFwiZmllbGQgQ1wiLCBjb2x1bW5zOiBbIC8vIGNoaWxkIGNvbHVtbnNcbiAgICAgICAgICB7a2V5OiBcImRcIiwgbGFiZWw6IFwiZmllbGQgRFwifSxcbiAgICAgICAgICB7a2V5OiBcImVcIiwgbGFiZWw6IFwiZmllbGQgRVwifSxcbiAgICAgICAgICB7a2V5OiBcImZcIiwgbGFiZWw6IFwiZmllbGQgRlwifVxuICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtrZXk6IFwiZ1wiLCBsYWJlbDogXCJmaWVsZCBHXCJ9LFxuICAgICAgICB7a2V5OiBcImhcIiwgbGFiZWw6IFwiZmllbGQgSFwifVxuICAgICAgXVxuICAgIH0pLnNldERhdGEoW1xuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuyepeyEnOyasFwiLCBnOiBcIjIwMTDrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnbTsmIHtnaxcIiwgZzogXCIxOTc364WEXCIsIGg6IFwid29tYW5cIn1cbiAgICBdKTtcblxuICAgIC8vXG4gICAgbmV3IEdyaWQoe1xuICAgICAgdGFyZ2V0OiAkYm9keS5maW5kKCdbZGF0YS1heDZ1aS1ncmlkPVwiZ3JpZC1mcm96ZW5cIl0nKSxcbiAgICAgIGZyb3plbkNvbHVtbkluZGV4OiAzLFxuICAgICAgZnJvemVuUm93SW5kZXg6IDIsXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtrZXk6IFwiYVwiLCBsYWJlbDogXCJmaWVsZCBBXCIsIHdpZHRoOiA4MH0sXG4gICAgICAgIHtrZXk6IFwiYlwiLCBsYWJlbDogXCJmaWVsZCBCXCIsIHdpZHRoOiA4MH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJHcm91cFwiLCBjb2x1bW5zOiBbIC8vIGNoaWxkIGNvbHVtbnNcbiAgICAgICAgICB7a2V5OiBcImRcIiwgbGFiZWw6IFwiZmllbGQgRFwifSxcbiAgICAgICAgICB7a2V5OiBcImVcIiwgbGFiZWw6IFwiZmllbGQgRVwifSxcbiAgICAgICAgICB7a2V5OiBcImZcIiwgbGFiZWw6IFwiZmllbGQgRlwifVxuICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtrZXk6IFwiY1wiLCBsYWJlbDogXCJmaWVsZCBDXCIsIHdpZHRoOiAyMDB9LFxuICAgICAgICB7a2V5OiBcImdcIiwgbGFiZWw6IFwiZmllbGQgR1wiLCB3aWR0aDogMzAwfSxcbiAgICAgICAge2tleTogXCJoXCIsIGxhYmVsOiBcImZpZWxkIEhcIn1cbiAgICAgIF1cbiAgICB9KS5zZXREYXRhKFtcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnqXshJzsmrBcIiwgZzogXCIyMDEw64WEXCIsIGg6IFwid29tYW5cIn0sXG4gICAgICB7YTogXCLthqDrp4jsiqRcIiwgYjogXCJUaG9tYXNcIiwgYzogNTAwMDAsIGQ6IDUwMCwgZTogXCJFXCIsIGY6IFwi7J207JiB7Z2sXCIsIGc6IFwiMTk3N+uFhFwiLCBoOiBcIndvbWFuXCJ9LFxuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuyepeyEnOyasFwiLCBnOiBcIjIwMTDrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnbTsmIHtnaxcIiwgZzogXCIxOTc364WEXCIsIGg6IFwid29tYW5cIn0sXG4gICAgICB7YTogXCLthqDrp4jsiqRcIiwgYjogXCJUaG9tYXNcIiwgYzogNTAwMDAsIGQ6IDUwMCwgZTogXCJFXCIsIGY6IFwi7J6l7ISc7JqwXCIsIGc6IFwiMjAxMOuFhFwiLCBoOiBcIndvbWFuXCJ9LFxuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuydtOyYge2drFwiLCBnOiBcIjE5NzfrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnqXshJzsmrBcIiwgZzogXCIyMDEw64WEXCIsIGg6IFwid29tYW5cIn0sXG4gICAgICB7YTogXCLthqDrp4jsiqRcIiwgYjogXCJUaG9tYXNcIiwgYzogNTAwMDAsIGQ6IDUwMCwgZTogXCJFXCIsIGY6IFwi7J207JiB7Z2sXCIsIGc6IFwiMTk3N+uFhFwiLCBoOiBcIndvbWFuXCJ9LFxuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuyepeyEnOyasFwiLCBnOiBcIjIwMTDrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnbTsmIHtnaxcIiwgZzogXCIxOTc364WEXCIsIGg6IFwid29tYW5cIn0sXG4gICAgICB7YTogXCLthqDrp4jsiqRcIiwgYjogXCJUaG9tYXNcIiwgYzogNTAwMDAsIGQ6IDUwMCwgZTogXCJFXCIsIGY6IFwi7J6l7ISc7JqwXCIsIGc6IFwiMjAxMOuFhFwiLCBoOiBcIndvbWFuXCJ9LFxuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuydtOyYge2drFwiLCBnOiBcIjE5NzfrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnqXshJzsmrBcIiwgZzogXCIyMDEw64WEXCIsIGg6IFwid29tYW5cIn0sXG4gICAgICB7YTogXCLthqDrp4jsiqRcIiwgYjogXCJUaG9tYXNcIiwgYzogNTAwMDAsIGQ6IDUwMCwgZTogXCJFXCIsIGY6IFwi7J207JiB7Z2sXCIsIGc6IFwiMTk3N+uFhFwiLCBoOiBcIndvbWFuXCJ9XG4gICAgXSk7XG5cblxuICAgIGxldCBtZW51ID0gbmV3IE1lbnUoe1xuICAgICAgLy8gd2lkdGg6IDIwMCxcbiAgICAgIGljb25XaWR0aDogMjAsXG4gICAgICBhY2NlbGVyYXRvcldpZHRoOiAxMDAsXG4gICAgICAvLyBvZmZzZXQ6IHtsZWZ0OiAxMCwgdG9wOiAxMH0sXG4gICAgICBpdGVtQ2xpY2tBbmRDbG9zZTogZmFsc2UsXG4gICAgICAvL3Bvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBpY29uczoge1xuICAgICAgICAnYXJyb3cnOiAnPGkgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCI+Y2hldnJvbl9yaWdodDwvaT4nXG4gICAgICB9LFxuICAgICAgY29sdW1uS2V5czoge1xuICAgICAgICBsYWJlbDogJ25hbWUnLFxuICAgICAgICBpdGVtczogJ2NoaWRyZW4nXG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5jbGFzczwvaT4nLFxuICAgICAgICAgIG5hbWU6IFwiTWVudSBQYXJlbnQgMFwiLFxuICAgICAgICAgIGNoaWRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hlY2s6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5hbWU6IFwiTWVudSBaXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogXCJDbWRPckN0cmwrWlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGVjazoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0EnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuYW1lOiBcIk1lbnUgQVwiLFxuICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgcm9sZTogXCJcIlxuICAgICAgICAgICAgICAvL2FjY2VsZXJhdG9yOiBcIkNtZE9yQ3RybCtBXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpbHRlclR5cGU6IFwiQVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkaXZpZGU6IHRydWUsXG4gICAgICAgICAgZmlsdGVyVHlwZTogXCJBXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5jbGFzczwvaT4nLFxuICAgICAgICAgIG5hbWU6IFwiTWVudSBQYXJlbnQgMVwiLFxuICAgICAgICAgIGNoaWRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJNZW51IFpcIixcbiAgICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgICAgICAgIC8vYWNjZWxlcmF0b3I6IFwiQ21kT3JDdHJsK1pcIixcbiAgICAgICAgICAgICAgY2hpZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVudSBaXCIsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgIC8vYWNjZWxlcmF0b3I6IFwiQ21kT3JDdHJsK1pcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW51IEFcIixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJcIlxuICAgICAgICAgICAgICAgICAgLy9hY2NlbGVyYXRvcjogXCJDbWRPckN0cmwrQVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIk1lbnUgQVwiLFxuICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgcm9sZTogXCJcIlxuICAgICAgICAgICAgICAvL2FjY2VsZXJhdG9yOiBcIkNtZE9yQ3RybCtBXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpbHRlclR5cGU6IFwiQVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjaGVjazoge1xuICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgIG5hbWU6ICdyYWRpb05hbWUnLFxuICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCI+Y2xhc3M8L2k+JyxcbiAgICAgICAgICBuYW1lOiBcIk1lbnUgUGFyZW50IDJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2hlY2s6IHtcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICBuYW1lOiAncmFkaW9OYW1lJyxcbiAgICAgICAgICAgIHZhbHVlOiAnMicsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJNZW51IFBhcmVudCAzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNoZWNrOiB7XG4gICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgbmFtZTogJ3JhZGlvTmFtZScsXG4gICAgICAgICAgICB2YWx1ZTogJzMnLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiTWVudSBQYXJlbnQgNFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtkaXZpZGU6IHRydWV9LFxuICAgICAgICB7XG4gICAgICAgICAgaHRtbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+JyArXG4gICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1tZW51LWJ0bj1cIk9LXCI+T0s8L2J1dHRvbj4gJyArXG4gICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLW1lbnUtYnRuPVwiQ0FOQ0VMXCI+Q0FOQ0VMPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgIG1lbnUub25DbGljayA9IGZ1bmN0aW9uIChpdGVtLCBwYXJhbSkge1xuICAgICAgY29uc29sZS5sb2coaXRlbSwgcGFyYW0pO1xuICAgIH07XG5cbiAgICBuZXcgR3JpZCh7XG4gICAgICB0YXJnZXQ6ICRib2R5LmZpbmQoJ1tkYXRhLWF4NnVpLWdyaWQ9XCJncmlkLWNvbnRleHQtbWVudVwiXScpLFxuICAgICAgY29sdW1uczogW1xuICAgICAgICB7a2V5OiBcImFcIiwgbGFiZWw6IFwiZmllbGQgQVwifSxcbiAgICAgICAge2tleTogXCJiXCIsIGxhYmVsOiBcImZpZWxkIEJcIn0sXG4gICAgICAgIHtrZXk6IFwiY1wiLCBsYWJlbDogXCJmaWVsZCBDXCIsIGZvcm1hdHRlcjogXCJtb25leVwifSxcbiAgICAgICAge2tleTogXCJnXCIsIGxhYmVsOiBcImZpZWxkIEdcIn0sXG4gICAgICAgIHtrZXk6IFwiaFwiLCBsYWJlbDogXCJmaWVsZCBIXCJ9XG4gICAgICBdLFxuICAgICAgYm9keToge1xuICAgICAgICBvbkNvbnRleHRNZW51OiBmdW5jdGlvbiAoZSwgcGFyYW0pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICBtZW51LnBvcHVwKGUsIHtwYXJhbTogcGFyYW19KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnNldERhdGEoW1xuICAgICAge2E6IFwi7Yag66eI7IqkXCIsIGI6IFwiVGhvbWFzXCIsIGM6IDUwMDAwLCBkOiA1MDAsIGU6IFwiRVwiLCBmOiBcIuyepeyEnOyasFwiLCBnOiBcIjIwMTDrhYRcIiwgaDogXCJ3b21hblwifSxcbiAgICAgIHthOiBcIu2GoOuniOyKpFwiLCBiOiBcIlRob21hc1wiLCBjOiA1MDAwMCwgZDogNTAwLCBlOiBcIkVcIiwgZjogXCLsnbTsmIHtnaxcIiwgZzogXCIxOTc364WEXCIsIGg6IFwid29tYW5cIn1cbiAgICBdKTtcblxuICB9LFxuICBtb2R1bGVEZXN0cm95OiBmdW5jdGlvbiAoJGJvZHkpIHtcbiAgICAkYm9keS5vZmYoXCJjbGlja1wiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBodG1sOiBodG1sLFxuICBmbjogZm5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JpZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSUNhbGVuZGFyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDEyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgYXg2LXVpLWNhbGVuZGFyLWZhZGVvdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDEuMDsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjU7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheDYtdWktY2FsZW5kYXItZmFkZW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMS4wOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuNTsgfSB9XFxuXFxuQGtleWZyYW1lcyBheDYtdWktY2FsZW5kYXItZmFkZW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMS4wOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuNTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGF4Ni11aS1jYWxlbmRhci1mYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNTsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxLjA7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheDYtdWktY2FsZW5kYXItZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwLjU7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMS4wOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGF4Ni11aS1jYWxlbmRhci1mYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNTsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxLjA7IH0gfVxcblxcbltkYXRhLWF4NnVpLWNhbGVuZGFyXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2Y1ZjVmNSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI2Y1ZjVmNSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiAjMzMzOyB9XFxuICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCAuZGF0ZS1tb3ZlLWxlZnQsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCAuZGF0ZS1tb3ZlLXJpZ2h0IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgcGFkZGluZzogMDsgfVxcbiAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCAuZGF0ZS1tb3ZlLWxlZnQgaSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1jb250cm9sIC5kYXRlLW1vdmUtbGVmdCBzcGFuLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWNvbnRyb2wgLmRhdGUtbW92ZS1yaWdodCBpLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWNvbnRyb2wgLmRhdGUtbW92ZS1yaWdodCBzcGFuIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCAuZGF0ZS1tb3ZlLWxlZnQge1xcbiAgICAgIGxlZnQ6IDBweDtcXG4gICAgICB0b3A6IDBweDsgfVxcbiAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWNvbnRyb2wgLmRhdGUtbW92ZS1yaWdodCB7XFxuICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICB0b3A6IDBweDsgfVxcbiAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWNvbnRyb2wgLmRhdGUtZGlzcGxheSB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1jb250cm9sIC5kYXRlLWRpc3BsYXkgW2RhdGEtY2FsZW5kYXItZGlzcGxheV0ge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItY29udHJvbCBhIHtcXG4gICAgICBjb2xvcjogIzMzMzsgfVxcbiAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWNvbnRyb2wgYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMzMzdhYjc7IH1cXG4gIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keS5mYWRlaW4ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYXg2LXVpLWNhbGVuZGFyLWZhZGVpbiAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgICAtbW96LWFuaW1hdGlvbjogYXg2LXVpLWNhbGVuZGFyLWZhZGVpbiAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgICBhbmltYXRpb246IGF4Ni11aS1jYWxlbmRhci1mYWRlaW4gMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gICAgb3BhY2l0eTogMS4wOyB9XFxuICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkuZmFkZW91dCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBheDYtdWktY2FsZW5kYXItZmFkZW91dCAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgICAtbW96LWFuaW1hdGlvbjogYXg2LXVpLWNhbGVuZGFyLWZhZGVvdXQgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG4gICAgYW5pbWF0aW9uOiBheDYtdWktY2FsZW5kYXItZmFkZW91dCAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH1cXG4gIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgICBib3JkZXI6IDAgbm9uZTsgfVxcbiAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGhlYWQge1xcbiAgICAgIGJvcmRlcjogMCBub25lOyB9XFxuICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRoZWFkIHRkLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGhlYWQgdGgge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogMHB4IDJweDtcXG4gICAgICAgIGJvcmRlcjogMHB4IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNGRkZGRkYsICNGRkZGRkYpO1xcbiAgICAgICAgY29sb3I6ICM2RDZFNzA7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0aGVhZCB0ZC5jYWxlbmRhci1jb2wtMCwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRoZWFkIHRoLmNhbGVuZGFyLWNvbC0wIHtcXG4gICAgICAgICAgY29sb3I6ICNDNzhCODE7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0aGVhZCB0ZC5jYWxlbmRhci1jb2wtNiwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRoZWFkIHRoLmNhbGVuZGFyLWNvbC02IHtcXG4gICAgICAgICAgY29sb3I6ICMzMkI0REM7IH1cXG4gICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHtcXG4gICAgICBib3JkZXI6IDAgbm9uZTsgfVxcbiAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGJvcmRlcjogMHB4IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRkZGRkZGLCAjRkZGRkZGKTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLypcXG4gICAgICAgICAgJi5jYWxlbmRhci1jb2wtMCB7XFxuICAgICAgICAgICAgICAuY2FsZW5kYXItaXRlbS1kYXkubGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRheDZ1aS1jYWxlbmRhci1zdW4tdGV4dC1jb2xvcjtcXG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSBleHRlbmQtaXRlbS10aGVtZSgpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICAgICYuY2FsZW5kYXItY29sLTYge1xcbiAgICAgICAgICAgICAgLmNhbGVuZGFyLWl0ZW0tZGF5LmxpdmUge1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYXg2dWktY2FsZW5kYXItc2F0LXRleHQtY29sb3I7XFxuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZXh0ZW5kLWl0ZW0tdGhlbWUoKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICAqLyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5LCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tZGF5IHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRkZGRkZGLCAjRkZGRkZGKTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjRkZGRkZGLCAjRkZGRkZGKTtcXG4gICAgICAgICAgY29sb3I6ICNDM0M0QzY7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5IHNwYW4uYWRkb24sIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkgc3Bhbi5hZGRvbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEuMnB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuMnB4OyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheSBzcGFuLmFkZG9uLmFkZG9uLWhlYWRlciwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheSBzcGFuLmFkZG9uLmFkZG9uLWhlYWRlciB7XFxuICAgICAgICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICAgICAgICB0b3A6IDFweDsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1kYXkgc3Bhbi5hZGRvbi5hZGRvbi1mb290ZXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkgc3Bhbi5hZGRvbi5hZGRvbi1mb290ZXIge1xcbiAgICAgICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgICAgICAgYm90dG9tOiAxcHg7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5saXZlLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tZGF5LmxpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRjBGMEYwLCAjRjBGMEYwKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNGMEYwRjAsICNGMEYwRjApO1xcbiAgICAgICAgICAgIGNvbG9yOiAjNkQ2RTcwOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5saXZlIHNwYW4uYWRkb24sIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkubGl2ZSBzcGFuLmFkZG9uIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjQTFBMUExOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5saXZlLnN1bmRheSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5saXZlLnN1bmRheSB7XFxuICAgICAgICAgICAgICBjb2xvcjogI0M3OEI4MTsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1kYXkubGl2ZS5zYXR1cmRheSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5saXZlLnNhdHVyZGF5IHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzJCNERDOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1kYXkuZm9jdXMsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkuZm9jdXMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjcyNDE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRTY3MjQxLCAjRTY3MjQxKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNFNjcyNDEsICNFNjcyNDEpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5mb2N1cyBzcGFuLmFkZG9uLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tZGF5LmZvY3VzIHNwYW4uYWRkb24ge1xcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5LmZvY3VzLmhvdmVyLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tZGF5LmZvY3VzLmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMkI0REM7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICMzMkI0REMsICMzMkI0REMpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMzJCNERDLCAjMzJCNERDKTtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1kYXkuZm9jdXMuaG92ZXIgc3Bhbi5hZGRvbiwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5mb2N1cy5ob3ZlciBzcGFuLmFkZG9uIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5wZXJpb2QsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkucGVyaW9kIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJkM2ZhO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzgyZDNmYSwgIzgyZDNmYSk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjODJkM2ZhLCAjODJkM2ZhKTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLWRheS5wZXJpb2Qgc3Bhbi5hZGRvbiwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5wZXJpb2Qgc3Bhbi5hZGRvbiB7XFxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5LnNlbGVjdGVkLWRheSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5zZWxlY3RlZC1kYXkge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMkI0REM7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMzJCNERDLCAjMzJCNERDKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCMzMkI0REMsICMzMkI0REMpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5LnNlbGVjdGVkLWRheSBzcGFuLmFkZG9uLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tZGF5LnNlbGVjdGVkLWRheSBzcGFuLmFkZG9uIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1kYXkuZGlzYWJsZSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLWRheS5kaXNhYmxlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjRkZGRkZGLCAjRkZGRkZGKTtcXG4gICAgICAgICAgICBjb2xvcjogI2RkZGVkZjsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tZGF5LmhvbGlkYXksIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1kYXkuaG9saWRheSB7XFxuICAgICAgICAgICAgY29sb3I6ICNDNzhCODE7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1tb250aCwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLW1vbnRoIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgIGNvbG9yOiAjQzNDNEM2O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLW1vbnRoLmxpdmUsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1tb250aC5saXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI0YwRjBGMCwgI0YwRjBGMCk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjRjBGMEYwLCAjRjBGMEYwKTtcXG4gICAgICAgICAgICBjb2xvcjogIzZENkU3MDsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0tbW9udGguaG92ZXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1tb250aC5ob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyQjREQztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICMzMkI0REMsICMzMkI0REMpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIzMyQjREQywgIzMyQjREQyk7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLW1vbnRoLmZvY3VzLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tbW9udGguZm9jdXMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjcyNDE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRTY3MjQxLCAjRTY3MjQxKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNFNjcyNDEsICNFNjcyNDEpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1tb250aC5zZWxlY3RlZC1tb250aCwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLW1vbnRoLnNlbGVjdGVkLW1vbnRoIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJCNERDO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzMyQjREQywgIzMyQjREQyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMzJCNERDLCAjMzJCNERDKTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLW1vbnRoLnNlbGVjdGVkLW1vbnRoIHNwYW4uYWRkb24sIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1tb250aC5zZWxlY3RlZC1tb250aCBzcGFuLmFkZG9uIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLW1vbnRoLnNlbGVjdGVkLW1vbnRoIHNwYW4ubHVuYXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1tb250aC5zZWxlY3RlZC1tb250aCBzcGFuLmx1bmFyIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS1tb250aC5kaXNhYmxlLCBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGggLmNhbGVuZGFyLWl0ZW0tbW9udGguZGlzYWJsZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICNGRkZGRkYsICNGRkZGRkYpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgICAgY29sb3I6ICNkZGRlZGY7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLW1vbnRoLmhvbGlkYXksIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS1tb250aC5ob2xpZGF5IHtcXG4gICAgICAgICAgICBjb2xvcjogI0M3OEI4MTsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLXllYXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI0ZGRkZGRiwgI0ZGRkZGRik7XFxuICAgICAgICAgIGNvbG9yOiAjQzNDNEM2O1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLXllYXIubGl2ZSwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLXllYXIubGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICNGMEYwRjAsICNGMEYwRjApO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI0YwRjBGMCwgI0YwRjBGMCk7XFxuICAgICAgICAgICAgY29sb3I6ICM2RDZFNzA7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRkIC5jYWxlbmRhci1pdGVtLXllYXIuaG92ZXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyLmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJCNERDO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzMyQjREQywgIzMyQjREQyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMzJCNERDLCAjMzJCNERDKTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0teWVhci5mb2N1cywgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLXllYXIuZm9jdXMge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjcyNDE7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRTY3MjQxLCAjRTY3MjQxKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNFNjcyNDEsICNFNjcyNDEpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS15ZWFyLnNlbGVjdGVkLXllYXIsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyLnNlbGVjdGVkLXllYXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMkI0REM7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMzJCNERDLCAjMzJCNERDKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCMzMkI0REMsICMzMkI0REMpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1jYWxlbmRhcl0gLmNhbGVuZGFyLWJvZHkgdGFibGUgdGJvZHkgdGQgLmNhbGVuZGFyLWl0ZW0teWVhci5zZWxlY3RlZC15ZWFyIHNwYW4uYWRkb24sIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyLnNlbGVjdGVkLXllYXIgc3Bhbi5hZGRvbiB7XFxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS15ZWFyLnNlbGVjdGVkLXllYXIgc3Bhbi5sdW5hciwgW2RhdGEtYXg2dWktY2FsZW5kYXJdIC5jYWxlbmRhci1ib2R5IHRhYmxlIHRib2R5IHRoIC5jYWxlbmRhci1pdGVtLXllYXIuc2VsZWN0ZWQteWVhciBzcGFuLmx1bmFyIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS15ZWFyLmRpc2FibGUsIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyLmRpc2FibGUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjRkZGRkZGLCAjRkZGRkZGKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNGRkZGRkYsICNGRkZGRkYpO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZGRkZWRmOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0ZCAuY2FsZW5kYXItaXRlbS15ZWFyLmhvbGlkYXksIFtkYXRhLWF4NnVpLWNhbGVuZGFyXSAuY2FsZW5kYXItYm9keSB0YWJsZSB0Ym9keSB0aCAuY2FsZW5kYXItaXRlbS15ZWFyLmhvbGlkYXkge1xcbiAgICAgICAgICAgIGNvbG9yOiAjQzc4QjgxOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJQ2FsZW5kYXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMTIiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJUGlja2VyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgYXgtcGlja2VyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEuMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfSB9XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGF4LXBpY2tlciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxLjA7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXgtcGlja2VyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMS4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGF4LXBpY2tlci1kZXN0cm95IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxLjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KSB0cmFuc2xhdGUoMCwgLTEwJSk7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheC1waWNrZXItZGVzdHJveSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMS4wO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC0xMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGF4LXBpY2tlci1kZXN0cm95IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxLjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC0xMCUpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KSB0cmFuc2xhdGUoMCwgLTEwJSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC0xMCUpO1xcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC0xMCUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlKDAsIC0xMCUpOyB9IH1cXG5cXG5bZGF0YS1heDZ1aS1waWNrZXJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7XFxuICAtbW96LXBlcnNwZWN0aXZlOiAxMDAwO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGF4LXBpY2tlciAwLjFzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIGZvcndhcmRzO1xcbiAgLW1vei1hbmltYXRpb246IGF4LXBpY2tlciAwLjFzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBheC1waWNrZXIgMC4xcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSBmb3J3YXJkcztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gIC8qIGZsaXAgdHlwZVxcbiAgQGluY2x1ZGUgYmFja2ZhY2UtdmlzaWJpbGl0eSh2aXNpYmxlKTtcXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpKTtcXG4gICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmZmKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI2ZmZik7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTsgfVxcbiAgW2RhdGEtYXg2dWktcGlja2VyXSAqLFxcbiAgW2RhdGEtYXg2dWktcGlja2VyXSAqOmJlZm9yZSxcXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0gKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0gLmF4LXBpY2tlci1oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2Y1ZjVmNSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI2Y1ZjVmNSk7IH1cXG4gICAgW2RhdGEtYXg2dWktcGlja2VyXSAuYXgtcGlja2VyLWhlYWRpbmcgLmJhZGdlIHtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMzMzKTtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCMzMzMpOyB9XFxuICBbZGF0YS1heDZ1aS1waWNrZXJdIC5heC1waWNrZXItYm9keSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0gLmF4LXBpY2tlci1ib2R5IC5heC1waWNrZXItY29udGVudCB7XFxuICAgICAgbWluLXdpZHRoOiA1MHB4OyB9XFxuICAgICAgW2RhdGEtYXg2dWktcGlja2VyXSAuYXgtcGlja2VyLWJvZHkgLmF4LXBpY2tlci1jb250ZW50IC5heC1waWNrZXItY29udGVudC1ib3gge1xcbiAgICAgICAgYm9yZGVyOiAwcHggc29saWQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0gLmF4LXBpY2tlci1ib2R5IC5heC1waWNrZXItYnV0dG9ucyB7XFxuICAgICAgcGFkZGluZzogMTBweCAwcHggNXB4IDBweDsgfVxcbiAgICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0gLmF4LXBpY2tlci1ib2R5IC5heC1waWNrZXItYnV0dG9ucyBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgfVxcbiAgW2RhdGEtYXg2dWktcGlja2VyXS5kaXJlY3Rpb24tdG9wIC5heC1waWNrZXItYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAwOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLXRvcCAuYXgtcGlja2VyLWFycm93OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgbGVmdDogLTEwcHg7XFxuICAgICAgdG9wOiAtMjBweDtcXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjZGRkOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLXRvcCAuYXgtcGlja2VyLWFycm93OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBsZWZ0OiAtMTBweDtcXG4gICAgICB0b3A6IC0xOHB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNmZmY7IH1cXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLXJpZ2h0IC5heC1waWNrZXItYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwJTsgfVxcbiAgICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi1yaWdodCAuYXgtcGlja2VyLWFycm93OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgcmlnaHQ6IC0yMHB4O1xcbiAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNkZGQ7IH1cXG4gICAgW2RhdGEtYXg2dWktcGlja2VyXS5kaXJlY3Rpb24tcmlnaHQgLmF4LXBpY2tlci1hcnJvdzphZnRlciB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgcmlnaHQ6IC0xOHB4O1xcbiAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNmZmY7IH1cXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLWJvdHRvbSAuYXgtcGlja2VyLWFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi1ib3R0b20gLmF4LXBpY2tlci1hcnJvdzpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIGxlZnQ6IC0xMHB4O1xcbiAgICAgIGJvdHRvbTogLTIwcHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgI2RkZDsgfVxcbiAgICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi1ib3R0b20gLmF4LXBpY2tlci1hcnJvdzphZnRlciB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgbGVmdDogLTEwcHg7XFxuICAgICAgYm90dG9tOiAtMThweDtcXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjZmZmOyB9XFxuICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi1sZWZ0IC5heC1waWNrZXItYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNTAlOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLWxlZnQgLmF4LXBpY2tlci1hcnJvdzpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIGxlZnQ6IC0yMHB4O1xcbiAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCAjZGRkOyB9XFxuICAgIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLWxlZnQgLmF4LXBpY2tlci1hcnJvdzphZnRlciB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgbGVmdDogLTE4cHg7XFxuICAgICAgdG9wOiAtMTBweDtcXG4gICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkICNmZmY7IH1cXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGVzdHJveSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBheC1waWNrZXItZGVzdHJveSAwLjFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIGZvcndhcmRzO1xcbiAgICAtbW96LWFuaW1hdGlvbjogYXgtcGlja2VyLWRlc3Ryb3kgMC4xcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiBheC1waWNrZXItZGVzdHJveSAwLjFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIGZvcndhcmRzOyB9XFxuICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi10b3Age1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7IH1cXG4gIFtkYXRhLWF4NnVpLXBpY2tlcl0uZGlyZWN0aW9uLXJpZ2h0IHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjsgfVxcbiAgW2RhdGEtYXg2dWktcGlja2VyXS5kaXJlY3Rpb24tYm90dG9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tOyB9XFxuICBbZGF0YS1heDZ1aS1waWNrZXJdLmRpcmVjdGlvbi1sZWZ0IHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7IH1cXG5cXG4uaW5wdXQtZ3JvdXBbZGF0YS1heDZwaWNrZXJdIC5pbnB1dC1ncm91cC1hZGRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5pbnB1dC1ncm91cFtkYXRhLWF4NnBpY2tlcl0gLmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItbGVmdDogMCBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IDAgbm9uZTsgfVxcbiAgLmlucHV0LWdyb3VwW2RhdGEtYXg2cGlja2VyXSAuaW5wdXQtZ3JvdXAtYWRkb24uY29sb3ItcHJldmlldyB7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5pbnB1dC1ncm91cFtkYXRhLWF4NnBpY2tlcl0gLmlucHV0LWdyb3VwLWFkZG9uIFtkYXRhLWF4NnBpY2tlci1jb2xvcj1cXFwicHJldmlld1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZm9ybS1ncm91cFtkYXRhLWF4NnBpY2tlcl0gLmlucHV0LWdyb3VwLWFkZG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmZvcm0tZ3JvdXBbZGF0YS1heDZwaWNrZXJdIC5pbnB1dC1ncm91cC1hZGRvbjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7IH1cXG4gIC5mb3JtLWdyb3VwW2RhdGEtYXg2cGlja2VyXSAuaW5wdXQtZ3JvdXAtYWRkb24uY29sb3ItcHJldmlldyB7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5mb3JtLWdyb3VwW2RhdGEtYXg2cGlja2VyXSAuaW5wdXQtZ3JvdXAtYWRkb24gW2RhdGEtYXg2cGlja2VyLWNvbG9yPVxcXCJwcmV2aWV3XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSVBpY2tlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJTWVudS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIGF4LW1lbnUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjA7IH1cXG4gIDElIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC45NTsgfSB9XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGF4LW1lbnUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjA7IH1cXG4gIDElIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC45NTsgfSB9XFxuXFxuQGtleWZyYW1lcyBheC1tZW51IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9XFxuICAxJSB7XFxuICAgIG9wYWNpdHk6IDAuMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAuOTU7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBheC1tZW51LWRlc3Ryb3kge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMS4wOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheC1tZW51LWRlc3Ryb3kge1xcbiAgZnJvbSB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMS4wOyB9XFxuICB0byB7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXgtbWVudS1kZXN0cm95IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDEuMDsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbltkYXRhLWF4NnVpLW1lbnVdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICAud2lkdGg6IDEwMHB4O1xcbiAgb3BhY2l0eTogMC45NTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIC1tb3otcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGF4LW1lbnUgMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XFxuICAtbW96LWFuaW1hdGlvbjogYXgtbWVudSAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcXG4gIGFuaW1hdGlvbjogYXgtbWVudSAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gIC8qIGZsaXAgdHlwZVxcbiAgQGluY2x1ZGUgYmFja2ZhY2UtdmlzaWJpbGl0eSh2aXNpYmxlKTtcXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpKTtcXG4gICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZWVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsI2VlZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBjb2xvcjogIzMzMzsgfVxcbiAgW2RhdGEtYXg2dWktbWVudV0gKixcXG4gIFtkYXRhLWF4NnVpLW1lbnVdICo6YmVmb3JlLFxcbiAgW2RhdGEtYXg2dWktbWVudV0gKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZjVmNWY1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjZjVmNWY1KTsgfVxcbiAgICBbZGF0YS1heDZ1aS1tZW51XSAuYXgtbWVudS1oZWFkaW5nIC5iYWRnZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzMzMyk7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMzMzKTsgfVxcbiAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSB7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSB7XFxuICAgICAgcGFkZGluZzogNHB4IDBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgY29sb3I6ICM0NDQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxOHB4OyB9XFxuICAgICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIC5heC1tZW51LWl0ZW0tY2VsbCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIC5heC1tZW51LWl0ZW0tY2VsbC5heC1tZW51LWl0ZW0tY2hlY2tib3gge1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWNoZWNrYm94IC5pdGVtLWNoZWNrYm94LXdyYXAge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1tZW51XSAuYXgtbWVudS1ib2R5IC5heC1tZW51LWl0ZW0gLmF4LW1lbnUtaXRlbS1jZWxsLmF4LW1lbnUtaXRlbS1jaGVja2JveCAuaXRlbS1jaGVja2JveC13cmFwLnVzZUNoZWNrQm94OmFmdGVyIHtcXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHRvcDogNHB4O1xcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQ0NDtcXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1tZW51XSAuYXgtbWVudS1ib2R5IC5heC1tZW51LWl0ZW0gLmF4LW1lbnUtaXRlbS1jZWxsLmF4LW1lbnUtaXRlbS1jaGVja2JveCAuaXRlbS1jaGVja2JveC13cmFwLnVzZUNoZWNrQm94W2RhdGEtaXRlbS1jaGVja2VkPVxcXCJ0cnVlXFxcIl06YWZ0ZXIge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIC5heC1tZW51LWl0ZW0tY2VsbC5heC1tZW51LWl0ZW0taWNvbiB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWxhYmVsIHtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIC5heC1tZW51LWl0ZW0tY2VsbC5heC1tZW51LWl0ZW0tYWNjZWxlcmF0b3Ige1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgICAgcGFkZGluZzogMHB4IDdweCAwcHggMHB4OyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWFjY2VsZXJhdG9yIC5pdGVtLXdyYXAge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWhhbmRsZSB7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XSAuYXgtbWVudS1ib2R5IC5heC1tZW51LWl0ZW06aG92ZXIsIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbS5ob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTk5O1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbTpob3ZlciAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWNoZWNrYm94IC5pdGVtLWNoZWNrYm94LXdyYXA6YWZ0ZXIsIFtkYXRhLWF4NnVpLW1lbnVdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbS5ob3ZlciAuYXgtbWVudS1pdGVtLWNlbGwuYXgtbWVudS1pdGVtLWNoZWNrYm94IC5pdGVtLWNoZWNrYm94LXdyYXA6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7IH1cXG4gICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtLWRpdmlkZSB7XFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2FhYWFhYTtcXG4gICAgICBtYXJnaW46IDVweCAwcHg7IH1cXG4gICAgW2RhdGEtYXg2dWktbWVudV0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtLWh0bWwge1xcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICBbZGF0YS1heDZ1aS1tZW51XSAuYXgtbWVudS1ib2R5IC5heC1tZW51LWJ1dHRvbnMgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4OyB9XFxuICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tdG9wIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tdG9wLndpdGgtYXJyb3cgLmF4LW1lbnUtYXJyb3cge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRvcDogMHB4OyB9XFxuICAgICAgW2RhdGEtYXg2dWktbWVudV0uZGlyZWN0aW9uLXRvcC53aXRoLWFycm93IC5heC1tZW51LWFycm93OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcbiAgICAgICAgdG9wOiAtMjBweDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjYWFhOyB9XFxuICAgICAgW2RhdGEtYXg2dWktbWVudV0uZGlyZWN0aW9uLXRvcC53aXRoLWFycm93IC5heC1tZW51LWFycm93OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogLTEwcHg7XFxuICAgICAgICB0b3A6IC0xOHB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNlZWU7IH1cXG4gIFtkYXRhLWF4NnVpLW1lbnVdLmRpcmVjdGlvbi1yaWdodCB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7IH1cXG4gICAgW2RhdGEtYXg2dWktbWVudV0uZGlyZWN0aW9uLXJpZ2h0LndpdGgtYXJyb3cgLmF4LW1lbnUtYXJyb3cge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICB0b3A6IDUwJTsgfVxcbiAgICAgIFtkYXRhLWF4NnVpLW1lbnVdLmRpcmVjdGlvbi1yaWdodC53aXRoLWFycm93IC5heC1tZW51LWFycm93OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNhYWE7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tcmlnaHQud2l0aC1hcnJvdyAuYXgtbWVudS1hcnJvdzphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHJpZ2h0OiAtMThweDtcXG4gICAgICAgIHRvcDogLTEwcHg7XFxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNlZWU7IH1cXG4gIFtkYXRhLWF4NnVpLW1lbnVdLmRpcmVjdGlvbi1ib3R0b20ge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgIFtkYXRhLWF4NnVpLW1lbnVdLmRpcmVjdGlvbi1ib3R0b20ud2l0aC1hcnJvdyAuYXgtbWVudS1hcnJvdyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgYm90dG9tOiAwcHg7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tYm90dG9tLndpdGgtYXJyb3cgLmF4LW1lbnUtYXJyb3c6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogLTEwcHg7XFxuICAgICAgICBib3R0b206IC0yMHB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkICNhYWE7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tYm90dG9tLndpdGgtYXJyb3cgLmF4LW1lbnUtYXJyb3c6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyAnO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBsZWZ0OiAtMTBweDtcXG4gICAgICAgIGJvdHRvbTogLTE4cHg7XFxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgI2VlZTsgfVxcbiAgW2RhdGEtYXg2dWktbWVudV0uZGlyZWN0aW9uLWxlZnQge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgW2RhdGEtYXg2dWktbWVudV0uZGlyZWN0aW9uLWxlZnQud2l0aC1hcnJvdyAuYXgtbWVudS1hcnJvdyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgdG9wOiA1MCU7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tbGVmdC53aXRoLWFycm93IC5heC1tZW51LWFycm93OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IC0yMHB4O1xcbiAgICAgICAgdG9wOiAtMTBweDtcXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkICNhYWE7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tbGVmdC53aXRoLWFycm93IC5heC1tZW51LWFycm93OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogLTE4cHg7XFxuICAgICAgICB0b3A6IC0xMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgI2VlZTsgfVxcbiAgW2RhdGEtYXg2dWktbWVudV0uZGVzdHJveSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBheC1tZW51LWRlc3Ryb3kgMC4ycyBjdWJpYy1iZXppZXIoMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1KSBmb3J3YXJkcztcXG4gICAgLW1vei1hbmltYXRpb246IGF4LW1lbnUtZGVzdHJveSAwLjJzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpIGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IGF4LW1lbnUtZGVzdHJveSAwLjJzIGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpIGZvcndhcmRzOyB9XFxuICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tdG9wIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wOyB9XFxuICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tcmlnaHQge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyOyB9XFxuICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tYm90dG9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tOyB9XFxuICBbZGF0YS1heDZ1aS1tZW51XS5kaXJlY3Rpb24tbGVmdCB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyOyB9XFxuXFxuW2RhdGEtYXg2dWktbWVudWJhcl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgW2RhdGEtYXg2dWktbWVudWJhcl0gLmF4LW1lbnUtYm9keSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgW2RhdGEtYXg2dWktbWVudWJhcl0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxM3B4OyB9XFxuICAgICAgW2RhdGEtYXg2dWktbWVudWJhcl0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtIC5heC1tZW51LWl0ZW0tY2VsbCB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIFtkYXRhLWF4NnVpLW1lbnViYXJdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbSB7XFxuICAgIGNvbG9yOiAjNDQ0OyB9XFxuICAgIFtkYXRhLWF4NnVpLW1lbnViYXJdIC5heC1tZW51LWJvZHkgLmF4LW1lbnUtaXRlbTpob3ZlciwgW2RhdGEtYXg2dWktbWVudWJhcl0gLmF4LW1lbnUtYm9keSAuYXgtbWVudS1pdGVtLmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjOTk5O1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJTWVudS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlHcmlkL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLWF4NnVpLWdyaWRdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIFtkYXRhLWF4NnVpLWdyaWRdICosXFxuICBbZGF0YS1heDZ1aS1ncmlkXSAqOmJlZm9yZSxcXG4gIFtkYXRhLWF4NnVpLWdyaWRdICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGlkZGVuXFxcIl0ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtMTAwJTtcXG4gICAgICB0b3A6IC0xMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSB7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYsICNGMEYwRjApO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI0ZGRkZGRiwgI0YwRjBGMCk7XFxuICAgICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgY29sb3I6ICMyMjI7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIC8qXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgKi8gfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUge1xcbiAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcXG4gICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAgbm9uZTsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTAge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMzsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTEge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMzsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTMge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWVlZjg7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0cltkYXRhLWF4NmdyaWQtZ3JvdXBpbmctdHI9XFxcInRydWVcXFwiXSB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmU3OyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHJbZGF0YS1heDZncmlkLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZjFmZjsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHJbZGF0YS1heDZncmlkLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0gdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0cltkYXRhLWF4NmdyaWQtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB0ZFtkYXRhLWF4NmdyaWQtY29sdW1uLWF0dHI9XFxcImxpbmVOdW1iZXJcXFwiXSB7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHJbZGF0YS1heDZncmlkLWRpc2FibGUtc2VsZWN0aW9uPVxcXCJ0cnVlXFxcIl0gdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdIC5jaGVja0JveCB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Q3ZDdkNywgI2U2ZTZlNik7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNkN2Q3ZDcsICNlNmU2ZTYpOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0cltkYXRhLWF4NmdyaWQtZGlzYWJsZS1zZWxlY3Rpb249XFxcInRydWVcXFwiXSB0ZFtkYXRhLWF4NmdyaWQtY29sdW1uLWF0dHI9XFxcInJvd1NlbGVjdG9yXFxcIl0gLmNoZWNrQm94OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkLm1lcmdlZCB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQge1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwcHggMHB4ICNmZmY7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkLmhhc0JvcmRlciB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZC5mb2N1c2VkIHtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMXB4ICMwNTgxZjI7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlLCAjZWVlKTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZWVlLCAjZWVlKTsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1yb3c9XFxcIm51bGxcXFwiXSB7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tcm93PVxcXCJudWxsXFxcIl0ge1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDAgbm9uZTsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1zZWxlY3RlZF0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNmMWZmO1xcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZFtkYXRhLWF4NmdyaWQtY29sdW1uLWZvY3VzZWRdIHtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMXB4ICMwNTgxZjI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZlZmY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZFtkYXRhLWF4NmdyaWQtY29sdW1uLWF0dHI9XFxcInJvd1NlbGVjdG9yXFxcIl0ge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0ge1xcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZFtkYXRhLWF4NmdyaWQtY29sdW1uLWF0dHI9XFxcInJvd1NlbGVjdG9yXFxcIl0gLmNoZWNrQm94IHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRkZGRkZGLCAjRjBGMEYwKTtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNGRkZGRkYsICNGMEYwRjApO1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwJTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMmVtIHNvbGlkICMzMzcyZmY7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjA7XFxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XFxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XFxuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXVtkYXRhLWF4NmdyaWQtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdW2RhdGEtYXg2Z3JpZC10ZXh0LWFsaWduPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXVtkYXRhLWF4NmdyaWQtdGV4dC1hbGlnbj1cXFwiY2VudGVyXFxcIl0ge1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdW2RhdGEtYXg2Z3JpZC10ZXh0LWFsaWduPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyPVxcXCJtdWx0aUxpbmVcXFwiXSB7XFxuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yXSB7XFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDZncmlkLWVkaXRvcl06Oi1tcy1jbGVhciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gW2RhdGEtYXg1c2VsZWN0XSB7XFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDVzZWxlY3RdIC5heDVzZWxlY3QtZGlzcGxheSB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gW2RhdGEtYXg2Z3JpZC1lZGl0b3I9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNGRkZGRkYsICNGMEYwRjApO1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI0ZGRkZGRiwgI0YwRjBGMCk7XFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDZncmlkLWVkaXRvcj1cXFwiY2hlY2tib3hcXFwiXTphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAlO1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4yZW0gc29saWQgIzMzNzJmZjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDtcXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7IH1cXG4gICAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yPVxcXCJjaGVja2JveFxcXCJdW2RhdGEtYXg2Z3JpZC1jaGVja2VkPVxcXCJ0cnVlXFxcIl06YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gW2RhdGEtYXg2Z3JpZC10bm9kZS1hcnJvd10ge1xcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAtMXB4ICNmZmY7XFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHggMCAwOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gYVtkYXRhLWF4NmdyaWQtdG5vZGUtYXJyb3ddIHtcXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBhW2RhdGEtYXg2Z3JpZC10bm9kZS1hcnJvd106aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gW2RhdGEtYXg2Z3JpZC10bm9kZS1pdGVtPVxcXCJncm91cFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDZncmlkLXRub2RlLWl0ZW09XFxcIml0ZW1cXFwiXSB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWhlYWRlclxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjY2NjYzsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWhlYWRlclxcXCJdIHRhYmxlIHRyIHRkIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWFzaWRlLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJhc2lkZS1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWFzaWRlLWJvZHlcXFwiXSB7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtYXNpZGUtYm9keVxcXCJdIHRhYmxlIHRyLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tYXNpZGUtYm9keVxcXCJdIHRhYmxlIHRyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtYXNpZGUtYm9keVxcXCJdIHRhYmxlIHRyIHRkLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciB0ZCwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tYXNpZGUtYm9keVxcXCJdIHRhYmxlIHRyIHRkIHtcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMHB4IDBweCAjZmZmOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImxlZnQtaGVhZGVyXFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWxlZnQtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImxlZnQtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1sZWZ0LWJvZHlcXFwiXSB7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiM2IzYjM7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWFzaWRlLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtbGVmdC1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtcmlnaHQtYm9keVxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWFzaWRlLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tbGVmdC1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tcmlnaHQtYm9keVxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiM2IzYjM7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWFzaWRlLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tbGVmdC1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tcmlnaHQtYm9keVxcXCJdIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTdlMjsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gW2RhdGEtYXg2Z3JpZC1wYW5lbC1zY3JvbGxdIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLWNvbHVtbi1yZXNpemVyXSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBjdXJzb3I6IGNvbC1yZXNpemU7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImhlYWRlclxcXCJdIFtkYXRhLWF4NmdyaWQtY29sdW1uLXJlc2l6ZXJdOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmMzMwMDtcXG4gICAgICAgICAgb3BhY2l0eTogMC41OyB9XFxuICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tc29ydF0ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDEwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tc29ydF06YmVmb3JlIHtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBib3JkZXItbGVmdDogMy42cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMy42cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDQuMDkwOTFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgb3BhY2l0eTogMC4zOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLWNvbHVtbi1zb3J0XTphZnRlciB7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDMuNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDMuNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBib3JkZXItdG9wOiA0LjA5MDkxcHggc29saWQgIzAwMDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tc29ydF1bZGF0YS1heDZncmlkLWNvbHVtbi1zb3J0LW9yZGVyPVxcXCJhc2NcXFwiXTpiZWZvcmUge1xcbiAgICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJoZWFkZXJcXFwiXSBbZGF0YS1heDZncmlkLWNvbHVtbi1zb3J0XVtkYXRhLWF4NmdyaWQtY29sdW1uLXNvcnQtb3JkZXI9XFxcImFzY1xcXCJdOmFmdGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tc29ydF1bZGF0YS1heDZncmlkLWNvbHVtbi1zb3J0LW9yZGVyPVxcXCJkZXNjXFxcIl06YmVmb3JlIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tc29ydF1bZGF0YS1heDZncmlkLWNvbHVtbi1zb3J0LW9yZGVyPVxcXCJkZXNjXFxcIl06YWZ0ZXIge1xcbiAgICAgICAgICBib3R0b206IDJweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XFxuICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tZmlsdGVyXSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiaGVhZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1jb2x1bW4tZmlsdGVyXTpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDUgc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogNSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTAgc29saWQgIzAwMDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAvKlxcbiAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICB9XFxuXFxuICAgICAgW2RhdGEtYXg2Z3JpZC1wYW5lbC1zY3JvbGw9XFxcImJvZHlcXFwiXXtcXG4gICAgICAgICAgdGFibGUge1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKGZhZGVpbiAwLjNzKTtcXG4gICAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAqLyB9XFxuICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLypcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAqLyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUge1xcbiAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcXG4gICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMCBub25lOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTAge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMzsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ci50ci0xIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIudHItMiB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyLnRyLTMge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ci5ob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlZWY4OyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1ncm91cGluZy10cj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZTc7IH1cXG4gICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHJbZGF0YS1heDZncmlkLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZjFmZjsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwibGluZU51bWJlclxcXCJdIHtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1kaXNhYmxlLXNlbGVjdGlvbj1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSAuY2hlY2tCb3gge1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNkN2Q3ZDcsICNlNmU2ZTYpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZDdkN2Q3LCAjZTZlNmU2KTsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyW2RhdGEtYXg2Z3JpZC1kaXNhYmxlLXNlbGVjdGlvbj1cXFwidHJ1ZVxcXCJdIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkLm1lcmdlZCB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIHtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkLmhhc0JvcmRlciB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQuZm9jdXNlZCB7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCAjMDU4MWYyOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1yb3c9XFxcIm51bGxcXFwiXSB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMCBub25lOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1zZWxlY3RlZF0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTNmMWZmO1xcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNjY2M7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1mb2N1c2VkXSB7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCAjMDU4MWYyO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZWZmO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXSB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0ge1xcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdIC5jaGVja0JveCB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGRkZGRiwgI0YwRjBGMCk7XFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjRkZGRkZGLCAjRjBGMEYwKTtcXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGRbZGF0YS1heDZncmlkLWNvbHVtbi1hdHRyPVxcXCJyb3dTZWxlY3RvclxcXCJdIC5jaGVja0JveDphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAlO1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4yZW0gc29saWQgIzMzNzJmZjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDtcXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkW2RhdGEtYXg2Z3JpZC1jb2x1bW4tYXR0cj1cXFwicm93U2VsZWN0b3JcXFwiXVtkYXRhLWF4NmdyaWQtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSAuY2hlY2tCb3g6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl1bZGF0YS1heDZncmlkLXRleHQtYWxpZ249XFxcImxlZnRcXFwiXSB7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXVtkYXRhLWF4NmdyaWQtdGV4dC1hbGlnbj1cXFwiY2VudGVyXFxcIl0ge1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXVtkYXRhLWF4NmdyaWQtdGV4dC1hbGlnbj1cXFwicmlnaHRcXFwiXSB7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl1bZGF0YS1heDZncmlkLWNlbGxIb2xkZXI9XFxcIm11bHRpTGluZVxcXCJdIHtcXG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yXSB7XFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdIHRhYmxlIHRyIHRkIFtkYXRhLWF4NmdyaWQtY2VsbEhvbGRlcl0gW2RhdGEtYXg2Z3JpZC1lZGl0b3JdOjotbXMtY2xlYXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDVzZWxlY3RdIHtcXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gICAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBbZGF0YS1heDVzZWxlY3RdIC5heDVzZWxlY3QtZGlzcGxheSB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRkZGRkZGLCAjRjBGMEYwKTtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNGRkZGRkYsICNGMEYwRjApO1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yPVxcXCJjaGVja2JveFxcXCJdOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAlO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjAlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjJlbSBzb2xpZCAjMzM3MmZmO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4wO1xcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XFxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTUwZGVnKTsgfVxcbiAgICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtZWRpdG9yPVxcXCJjaGVja2JveFxcXCJdW2RhdGEtYXg2Z3JpZC1jaGVja2VkPVxcXCJ0cnVlXFxcIl06YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtdG5vZGUtYXJyb3ddIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTFweCAjZmZmO1xcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMDsgfVxcbiAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBhW2RhdGEtYXg2Z3JpZC10bm9kZS1hcnJvd10ge1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gdGFibGUgdHIgdGQgW2RhdGEtYXg2Z3JpZC1jZWxsSG9sZGVyXSBhW2RhdGEtYXg2Z3JpZC10bm9kZS1hcnJvd106aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtdG5vZGUtaXRlbT1cXFwiZ3JvdXBcXFwiXSB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgICAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXSB0YWJsZSB0ciB0ZCBbZGF0YS1heDZncmlkLWNlbGxIb2xkZXJdIFtkYXRhLWF4NmdyaWQtdG5vZGUtaXRlbT1cXFwiaXRlbVxcXCJdIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWhlYWRlclxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjY2NjYzsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJhc2lkZS1oZWFkZXJcXFwiXSB0YWJsZSB0ciB0ZCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtYXNpZGUtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJhc2lkZS1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1hc2lkZS1ib2R5XFxcIl0ge1xcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XFxuICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcInRvcC1hc2lkZS1ib2R5XFxcIl0gdGFibGUgdHIsIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcInRvcC1hc2lkZS1ib2R5XFxcIl0gdGFibGUgdHIgdGQsIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciB0ZCwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWFzaWRlLWJvZHlcXFwiXSB0YWJsZSB0ciB0ZCB7XFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDBweCAwcHggI2ZmZjsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwibGVmdC1oZWFkZXJcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWxlZnQtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJsZWZ0LWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWxlZnQtYm9keVxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2IzYjNiMzsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWFzaWRlLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwidG9wLWxlZnQtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJ0b3AtcmlnaHQtYm9keVxcXCJdIHtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2IzYjM7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1hc2lkZS1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1sZWZ0LWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLWJvZHlcXFwiXSwgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwiYm9keVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFuZWxdW2RhdGEtYXg2Z3JpZC1wYW5lbD1cXFwiYm90dG9tLXJpZ2h0LWJvZHlcXFwiXSB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjNiM2IzOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tYXNpZGUtYm9keVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF1bZGF0YS1heDZncmlkLXBhbmVsPVxcXCJib3R0b20tbGVmdC1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1ib2R5XFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcImJvZHlcXFwiXSBbZGF0YS1heDZncmlkLXBhbmVsXVtkYXRhLWF4NmdyaWQtcGFuZWw9XFxcImJvdHRvbS1yaWdodC1ib2R5XFxcIl0ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlN2UyOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJib2R5XFxcIl0gW2RhdGEtYXg2Z3JpZC1wYW5lbF0gW2RhdGEtYXg2Z3JpZC1wYW5lbC1zY3JvbGxdIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7IH1cXG4gICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicGFnZVxcXCJdIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI0ZGRkZGRiwgI0YwRjBGMCk7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjRkZGRkZGLCAjRjBGMEYwKTtcXG4gICAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYzsgfVxcbiAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInBhZ2VcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcImhvbGRlclxcXCJdIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJwYWdlXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcIm5hdmlnYXRpb25cXFwiXSB7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJwYWdlXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcIm5hdmlnYXRpb25cXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbmF2aWdhdGlvbj1cXFwiaG9sZGVyXFxcIl0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XFxuICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicGFnZVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwiaG9sZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJuYXZpZ2F0aW9uXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlLW5hdmlnYXRpb249XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZS1uYXZpZ2F0aW9uPVxcXCJjZWxsXFxcIl0sIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInBhZ2VcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwibmF2aWdhdGlvblxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZS1uYXZpZ2F0aW9uPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbmF2aWdhdGlvbj1cXFwiY2VsbC1wYWdpbmdcXFwiXSB7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInBhZ2VcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwibmF2aWdhdGlvblxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZS1uYXZpZ2F0aW9uPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbmF2aWdhdGlvbj1cXFwiY2VsbC1wYWdpbmdcXFwiXSB7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDsgfVxcbiAgICAgICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInBhZ2VcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwibmF2aWdhdGlvblxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZS1uYXZpZ2F0aW9uPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbW92ZV0ge1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMHB4IG5vbmU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xcbiAgICAgICAgICAgICAgb3V0bGluZTogMDsgfVxcbiAgICAgICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicGFnZVxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwiaG9sZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJuYXZpZ2F0aW9uXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlLW5hdmlnYXRpb249XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZS1tb3ZlXVtkYXRhLWF4NmdyaWQtcGFnZS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdLCBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJwYWdlXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcIm5hdmlnYXRpb25cXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbmF2aWdhdGlvbj1cXFwiaG9sZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlLW1vdmVdOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJwYWdlXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlPVxcXCJob2xkZXJcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcIm5hdmlnYXRpb25cXFwiXSBbZGF0YS1heDZncmlkLXBhZ2UtbmF2aWdhdGlvbj1cXFwiaG9sZGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1wYWdlLW1vdmVdOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInBhZ2VcXFwiXSBbZGF0YS1heDZncmlkLXBhZ2U9XFxcImhvbGRlclxcXCJdIFtkYXRhLWF4NmdyaWQtcGFnZT1cXFwic3RhdHVzXFxcIl0ge1xcbiAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGNvbG9yOiAjMjIyOyB9XFxuICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInNjcm9sbGVyXFxcIl0ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJzY3JvbGxlclxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcInZlcnRpY2FsXFxcIl0ge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYzsgfVxcbiAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwic2Nyb2xsZXJcXFwiXSBbZGF0YS1heDZncmlkLXNjcm9sbGVyPVxcXCJ2ZXJ0aWNhbFxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcInZlcnRpY2FsLWJhclxcXCJdIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7IH1cXG4gICAgICAgICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwic2Nyb2xsZXJcXFwiXSBbZGF0YS1heDZncmlkLXNjcm9sbGVyPVxcXCJ2ZXJ0aWNhbFxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcInZlcnRpY2FsLWJhclxcXCJdOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYWJhYmE7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJzY3JvbGxlclxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcImhvcml6b250YWxcXFwiXSB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7IH1cXG4gICAgICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInNjcm9sbGVyXFxcIl0gW2RhdGEtYXg2Z3JpZC1zY3JvbGxlcj1cXFwiaG9yaXpvbnRhbFxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcImhvcml6b250YWwtYmFyXFxcIl0ge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxcbiAgICAgICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJzY3JvbGxlclxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcImhvcml6b250YWxcXFwiXSBbZGF0YS1heDZncmlkLXNjcm9sbGVyPVxcXCJob3Jpem9udGFsLWJhclxcXCJdOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiYWJhYmE7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJzY3JvbGxlclxcXCJdIFtkYXRhLWF4NmdyaWQtc2Nyb2xsZXI9XFxcImNvcm5lclxcXCJdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI0VBRURFRjtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjOyB9XFxuICAgIFtkYXRhLWF4NnVpLWdyaWRdIFtkYXRhLWF4NmdyaWQtY29udGFpbmVyPVxcXCJyb290XFxcIl0gW2RhdGEtYXg2Z3JpZC1yZXNpemVyPVxcXCJob3Jpem9udGFsXFxcIl0ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtcmVzaXplcj1cXFwiaG9yaXpvbnRhbFxcXCJdLmxpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMzMwMDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAycHg7XFxuICAgICAgICBjdXJzb3I6IGNvbC1yZXNpemU7IH1cXG4gICAgW2RhdGEtYXg2dWktZ3JpZF0gW2RhdGEtYXg2Z3JpZC1jb250YWluZXI9XFxcInJvb3RcXFwiXSBbZGF0YS1heDZncmlkLXJlc2l6ZXI9XFxcInZlcnRpY2FsXFxcIl0ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICBbZGF0YS1heDZ1aS1ncmlkXSBbZGF0YS1heDZncmlkLWNvbnRhaW5lcj1cXFwicm9vdFxcXCJdIFtkYXRhLWF4NmdyaWQtcmVzaXplcj1cXFwidmVydGljYWxcXFwiXS5saXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjMzMDA7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgY3Vyc29yOiByb3ctcmVzaXplOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJR3JpZC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==