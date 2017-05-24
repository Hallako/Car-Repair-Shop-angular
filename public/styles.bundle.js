webpackJsonp([2,4],{

/***/ 111:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91).Buffer))

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(517);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(577)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-2!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-2!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "/*!\n * FullCalendar v3.4.0 Stylesheet\n * Docs & License: https://fullcalendar.io/\n * (c) 2017 Adam Shaw\n */\n\n.fc {\n    direction: ltr;\n    text-align: left;\n}\n\n.fc-rtl {\n    text-align: right;\n}\n\nbody .fc {\n    /* extra precedence to overcome jqui */\n    font-size: 1em;\n}\n\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n\n/* for gutter border */\n\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n    border-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n    background-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n    background: #eee;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n    color: #666;\n}\n\n.fc-unthemed td.fc-today {\n    background: #fcf8e3;\n}\n\n.fc-highlight {\n    /* when user is selecting cells */\n    background: #595959;\n    opacity: .3;\n}\n\n.fc-bgevent {\n    /* default look for background events */\n    background: rgb(143, 223, 130);\n    opacity: .3;\n}\n\n.fc-nonbusiness {\n    /* default look for non-business-hours areas */\n    /* will inherit .fc-bgevent's styles */\n    background: #d7d7d7;\n}\n\n.fc-unthemed .fc-disabled-day {\n    background: #d7d7d7;\n    opacity: .3;\n}\n\n.ui-widget .fc-disabled-day {\n    /* themed */\n    background-image: none;\n}\n\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-icon {\n    display: inline-block;\n    height: 1em;\n    line-height: 1em;\n    font-size: 1em;\n    text-align: center;\n    overflow: hidden;\n    font-family: \"Courier New\", Courier, monospace;\n    /* don't allow browser text-selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n\n/*\nAcceptable font-family overrides for individual icons:\n\t\"Arial\", sans-serif\n\t\"Times New Roman\", serif\n\nNOTE: use percentage font sizes or else old IE chokes\n*/\n\n.fc-icon:after {\n    position: relative;\n}\n\n.fc-icon-left-single-arrow:after {\n    content: \"\\2039\";\n    font-weight: bold;\n    font-size: 200%;\n    top: -7%;\n}\n\n.fc-icon-right-single-arrow:after {\n    content: \"\\203A\";\n    font-weight: bold;\n    font-size: 200%;\n    top: -7%;\n}\n\n.fc-icon-left-double-arrow:after {\n    content: \"\\AB\";\n    font-size: 160%;\n    top: -7%;\n}\n\n.fc-icon-right-double-arrow:after {\n    content: \"\\BB\";\n    font-size: 160%;\n    top: -7%;\n}\n\n.fc-icon-left-triangle:after {\n    content: \"\\25C4\";\n    font-size: 125%;\n    top: 3%;\n}\n\n.fc-icon-right-triangle:after {\n    content: \"\\25BA\";\n    font-size: 125%;\n    top: 3%;\n}\n\n.fc-icon-down-triangle:after {\n    content: \"\\25BC\";\n    font-size: 125%;\n    top: 2%;\n}\n\n.fc-icon-x:after {\n    content: \"\\D7\";\n    font-size: 200%;\n    top: 6%;\n}\n\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n\n.fc button {\n    /* force height to include the border and padding */\n    box-sizing: border-box;\n    /* dimensions */\n    margin: 0;\n    height: 2.1em;\n    padding: 0 .6em;\n    /* text & cursor */\n    font-size: 1em;\n    /* normalize */\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n\n/* Firefox has an annoying inner border */\n\n.fc button::-moz-focus-inner {\n    margin: 0;\n    padding: 0;\n}\n\n.fc-state-default {\n    /* non-theme */\n    border: 1px solid;\n}\n\n.fc-state-default.fc-corner-left {\n    /* non-theme */\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.fc-state-default.fc-corner-right {\n    /* non-theme */\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\n\n/* icons in buttons */\n\n.fc button .fc-icon {\n    /* non-theme */\n    position: relative;\n    top: -0.05em;\n    /* seems to be a good adjustment across browsers */\n    margin: 0 .2em;\n    vertical-align: middle;\n}\n\n\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n\n.fc-state-default {\n    background-color: #f5f5f5;\n    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n    background-repeat: repeat-x;\n    border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n    color: #333;\n    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n    color: #333333;\n    background-color: #e6e6e6;\n}\n\n.fc-state-hover {\n    color: #333333;\n    text-decoration: none;\n    background-position: 0 -15px;\n    transition: background-position 0.1s linear;\n}\n\n.fc-state-down,\n.fc-state-active {\n    background-color: #cccccc;\n    background-image: none;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-disabled {\n    cursor: default;\n    background-image: none;\n    opacity: 0.65;\n    box-shadow: none;\n}\n\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n\n.fc-button-group {\n    display: inline-block;\n}\n\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n\n.fc .fc-button-group>* {\n    /* extra precedence b/c buttons have margin set to zero */\n    float: left;\n    margin: 0 0 0 -1px;\n}\n\n.fc .fc-button-group> :first-child {\n    /* same */\n    margin-left: 0;\n}\n\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n\n.fc-popover {\n    position: absolute;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .15);\n}\n\n.fc-popover .fc-header {\n    /* TODO: be more consistent with fc-head/fc-body */\n    padding: 2px 4px;\n}\n\n.fc-popover .fc-header .fc-title {\n    margin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n    cursor: pointer;\n}\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n    float: left;\n}\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n    float: right;\n}\n\n\n/* unthemed */\n\n.fc-unthemed .fc-popover {\n    border-width: 1px;\n    border-style: solid;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n    font-size: .9em;\n    margin-top: 2px;\n}\n\n\n/* jqui themed */\n\n.fc-popover>.ui-widget-header+.ui-widget-content {\n    border-top: 0;\n    /* where they meet, let the header have the border */\n}\n\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n\n.fc-divider {\n    border-style: solid;\n    border-width: 1px;\n}\n\nhr.fc-divider {\n    height: 0;\n    margin: 0;\n    padding: 0 0 2px;\n    /* height is unreliable across browsers, so use padding */\n    border-width: 1px 0;\n}\n\n.fc-clear {\n    clear: both;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n    /* these element should always cling to top-left/right corners */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.fc-bg {\n    bottom: 0;\n    /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n    height: 100%;\n    /* strech bg to bottom edge */\n}\n\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n\n.fc table {\n    width: 100%;\n    box-sizing: border-box;\n    /* fix scrollbar issue in firefox */\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em;\n    /* normalize cross-browser */\n}\n\n.fc th {\n    text-align: center;\n}\n\n.fc th,\n.fc td {\n    border-style: solid;\n    border-width: 1px;\n    padding: 0;\n    vertical-align: top;\n}\n\n.fc td.fc-today {\n    border-style: double;\n    /* overcome neighboring borders */\n}\n\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\n\na[data-goto] {\n    cursor: pointer;\n}\n\na[data-goto]:hover {\n    text-decoration: underline;\n}\n\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-row {\n    /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n    /* no visible border by default. but make available if need be (scrollbar width compensation) */\n    border-style: solid;\n    border-width: 0;\n}\n\n.fc-row table {\n    /* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n    border-left: 0 hidden transparent;\n    border-right: 0 hidden transparent;\n    /* no bottom borders on rows */\n    border-bottom: 0 hidden transparent;\n}\n\n.fc-row:first-child table {\n    border-top: 0 hidden transparent;\n    /* no top border on first row */\n}\n\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-row {\n    position: relative;\n}\n\n.fc-row .fc-bg {\n    z-index: 1;\n}\n\n\n/* highlighting cells & background event skeleton */\n\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n    bottom: 0;\n    /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n    height: 100%;\n    /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n    border-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n    z-index: 2;\n}\n\n.fc-row .fc-highlight-skeleton {\n    z-index: 3;\n}\n\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n\n.fc-row .fc-content-skeleton {\n    position: relative;\n    z-index: 4;\n    padding-bottom: 2px;\n    /* matches the space above the events */\n}\n\n.fc-row .fc-helper-skeleton {\n    z-index: 5;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n    /* see-through to the background below */\n    background: none;\n    /* in case <td>s are globally styled */\n    border-color: transparent;\n    /* don't put a border between events and/or the day number */\n    border-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td,\n\n/* cells with events inside (so NOT the day number cell) */\n\n.fc-row .fc-helper-skeleton tbody td {\n    /* don't put a border between event cells */\n    border-top: 0;\n}\n\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n\n.fc-scroller {\n    -webkit-overflow-scrolling: touch;\n}\n\n\n/* TODO: move to agenda/basic */\n\n.fc-scroller>.fc-day-grid,\n.fc-scroller>.fc-time-grid {\n    position: relative;\n    /* re-scope all positions */\n    width: 100%;\n    /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event {\n    position: relative;\n    /* for resize handle and other inner positioning */\n    display: block;\n    /* make the <a> tag block */\n    font-size: .85em;\n    line-height: 1.3;\n    border-radius: 3px;\n    border: 1px solid #3a87ad;\n    /* default BORDER color */\n    font-weight: normal;\n    /* undo jqui's ui-widget-header bold */\n}\n\n.fc-event,\n.fc-event-dot {\n    background-color: #3a87ad;\n    /* default BACKGROUND color */\n}\n\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n    color: #fff;\n    /* default TEXT color */\n    text-decoration: none;\n    /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n    cursor: pointer;\n    /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed,\n\n/* causes a \"warning\" cursor. applied on body */\n\n.fc-not-allowed .fc-event {\n    /* to override an event's custom cursor */\n    cursor: not-allowed;\n}\n\n.fc-event .fc-bg {\n    /* the generic .fc-bg already does position */\n    z-index: 1;\n    background: #fff;\n    opacity: .25;\n}\n\n.fc-event .fc-content {\n    position: relative;\n    z-index: 2;\n}\n\n\n/* resizer (cursor AND touch devices) */\n\n.fc-event .fc-resizer {\n    position: absolute;\n    z-index: 4;\n}\n\n\n/* resizer (touch devices) */\n\n.fc-event .fc-resizer {\n    display: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n    /* only show when hovering or selected (with touch) */\n    display: block;\n}\n\n\n/* hit area */\n\n.fc-event.fc-selected .fc-resizer:before {\n    /* 40x40 touch area */\n    content: \"\";\n    position: absolute;\n    z-index: 9999;\n    /* user of this util can scope within a lower z-index */\n    top: 50%;\n    left: 50%;\n    width: 40px;\n    height: 40px;\n    margin-left: -20px;\n    margin-top: -20px;\n}\n\n.fc-helper {\n    background-color: #595959;\n}\n\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event.fc-selected {\n    z-index: 9999 !important;\n    /* overcomes inline z-index */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected.fc-dragging {\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n\n\n/* bigger touch area when selected */\n\n.fc-h-event.fc-selected:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    /* below resizers */\n    top: -10px;\n    bottom: -10px;\n    left: 0;\n    right: 0;\n}\n\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n    margin-left: 0;\n    border-left-width: 0;\n    padding-left: 1px;\n    /* replace the border with padding */\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n    margin-right: 0;\n    border-right-width: 0;\n    padding-right: 1px;\n    /* replace the border with padding */\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n\n/* resizer (cursor AND touch devices) */\n\n\n/* left resizer  */\n\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n    cursor: w-resize;\n    left: -1px;\n    /* overcome border */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n    cursor: e-resize;\n    right: -1px;\n    /* overcome border */\n}\n\n\n/* resizer (mouse devices) */\n\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n    width: 7px;\n    top: -1px;\n    /* overcome top border */\n    bottom: -1px;\n    /* overcome bottom border */\n}\n\n\n/* resizer (touch devices) */\n\n.fc-h-event.fc-selected .fc-resizer {\n    /* 8x8 little dot */\n    border-radius: 4px;\n    border-width: 1px;\n    width: 6px;\n    height: 6px;\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    /* vertically center */\n    top: 50%;\n    margin-top: -4px;\n}\n\n\n/* left resizer  */\n\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n    margin-left: -4px;\n    /* centers the 8x8 dot on the left edge */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n    margin-right: -4px;\n    /* centers the 8x8 dot on the right edge */\n}\n\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-day-grid-event {\n    margin: 1px 2px 0;\n    /* spacing between events and edges */\n    padding: 0 1px;\n}\n\ntr:first-child>td>.fc-day-grid-event {\n    margin-top: 2px;\n    /* a little bit more space before the first event */\n}\n\n.fc-day-grid-event.fc-selected:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    /* same z-index as fc-bg, behind text */\n    /* overcome the borders */\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    left: -1px;\n    /* darkening effect */\n    background: #000;\n    opacity: .25;\n}\n\n.fc-day-grid-event .fc-content {\n    /* force events to be one-line tall */\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n    font-weight: bold;\n}\n\n\n/* resizer (cursor devices) */\n\n\n/* left resizer  */\n\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n    margin-left: -2px;\n    /* to the day cell's edge */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n    margin-right: -2px;\n    /* to the day cell's edge */\n}\n\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n\n\n/* \"more\" link that represents hidden events */\n\na.fc-more {\n    margin: 1px 3px;\n    font-size: .85em;\n    cursor: pointer;\n    text-decoration: none;\n}\n\na.fc-more:hover {\n    text-decoration: underline;\n}\n\n.fc-limited {\n    /* rows and cells that are hidden because of a \"more\" link */\n    display: none;\n}\n\n\n/* popover that appears when \"more\" link is clicked */\n\n.fc-day-grid .fc-row {\n    z-index: 1;\n    /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n    z-index: 2;\n    width: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n    padding: 10px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-now-indicator {\n    position: absolute;\n    border: 0 solid red;\n}\n\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unselectable {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n\n.fc-toolbar {\n    text-align: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n    margin-top: 1em;\n}\n\n.fc-toolbar .fc-left {\n    float: left;\n}\n\n.fc-toolbar .fc-right {\n    float: right;\n}\n\n.fc-toolbar .fc-center {\n    display: inline-block;\n}\n\n\n/* the things within each left/right/center section */\n\n.fc .fc-toolbar>*>* {\n    /* extra precedence to override button border margins */\n    float: left;\n    margin-left: .75em;\n}\n\n\n/* the first thing within each left/center/right section */\n\n.fc .fc-toolbar>*> :first-child {\n    /* extra precedence to override button border margins */\n    margin-left: 0;\n}\n\n\n/* title text */\n\n.fc-toolbar h2 {\n    margin: 0;\n}\n\n\n/* button layering (for border precedence) */\n\n.fc-toolbar button {\n    position: relative;\n}\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n    z-index: 2;\n}\n\n.fc-toolbar .fc-state-down {\n    z-index: 3;\n}\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n    z-index: 4;\n}\n\n.fc-toolbar button:focus {\n    z-index: 5;\n}\n\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n\n\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n    box-sizing: content-box;\n}\n\n.fc-view,\n\n/* scope positioning and z-index's for everything within the view */\n\n.fc-view>table {\n    /* so dragged elements can be above the view's main element */\n    position: relative;\n    z-index: 1;\n}\n\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n\n\n/* day row structure */\n\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n    /* there may be week numbers in these views, so no padding-top */\n    padding-bottom: 1em;\n    /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-basic-view .fc-body .fc-row {\n    min-height: 4em;\n    /* ensure that all rows are at least this tall */\n}\n\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n\n.fc-row.fc-rigid {\n    overflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n/* week and day number styling */\n\n.fc-day-top.fc-other-month {\n    opacity: 0.3;\n}\n\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n    padding: 2px;\n}\n\n.fc-basic-view th.fc-week-number,\n.fc-basic-view th.fc-day-number {\n    padding: 0 2px;\n    /* column headers can't have as much v space */\n}\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-day-number {\n    float: right;\n}\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-day-number {\n    float: left;\n}\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-week-number {\n    float: left;\n    border-radius: 0 0 3px 0;\n}\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-week-number {\n    float: right;\n    border-radius: 0 0 0 3px;\n}\n\n.fc-basic-view .fc-day-top .fc-week-number {\n    min-width: 1.5em;\n    text-align: center;\n    background-color: #f2f2f2;\n    color: #808080;\n}\n\n\n/* when week/day number have own column */\n\n.fc-basic-view td.fc-week-number {\n    text-align: center;\n}\n\n.fc-basic-view td.fc-week-number>* {\n    /* work around the way we do column resizing and ensure a minimum width */\n    display: inline-block;\n    min-width: 1.25em;\n}\n\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n\n.fc-agenda-view .fc-day-grid {\n    position: relative;\n    z-index: 2;\n    /* so the \"more..\" popover will be over the time grid */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row {\n    min-height: 3em;\n    /* all-day section will never get shorter than this */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n    padding-bottom: 1em;\n    /* give space underneath events for clicking/selecting days */\n}\n\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-axis {\n    /* .fc to overcome default cell styles */\n    vertical-align: middle;\n    padding: 0 4px;\n    white-space: nowrap;\n}\n\n.fc-ltr .fc-axis {\n    text-align: right;\n}\n\n.fc-rtl .fc-axis {\n    text-align: left;\n}\n\n.ui-widget td.fc-axis {\n    font-weight: normal;\n    /* overcome jqui theme making it bold */\n}\n\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid-container,\n\n/* so scroll container's z-index is below all-day */\n\n.fc-time-grid {\n    /* so slats/bg/content/etc positions get scoped within here */\n    position: relative;\n    z-index: 1;\n}\n\n.fc-time-grid {\n    min-height: 100%;\n    /* so if height setting is 'auto', .fc-bg stretches to fill height */\n}\n\n.fc-time-grid table {\n    /* don't put outer borders on slats/bg/content/etc */\n    border: 0 hidden transparent;\n}\n\n.fc-time-grid>.fc-bg {\n    z-index: 1;\n}\n\n.fc-time-grid .fc-slats,\n.fc-time-grid>hr {\n    /* the <hr> AgendaView injects when grid is shorter than scroller */\n    position: relative;\n    z-index: 2;\n}\n\n.fc-time-grid .fc-content-col {\n    position: relative;\n    /* because now-indicator lives directly inside */\n}\n\n.fc-time-grid .fc-content-skeleton {\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n/* divs within a cell within the fc-content-skeleton */\n\n.fc-time-grid .fc-business-container {\n    position: relative;\n    z-index: 1;\n}\n\n.fc-time-grid .fc-bgevent-container {\n    position: relative;\n    z-index: 2;\n}\n\n.fc-time-grid .fc-highlight-container {\n    position: relative;\n    z-index: 3;\n}\n\n.fc-time-grid .fc-event-container {\n    position: relative;\n    z-index: 4;\n}\n\n.fc-time-grid .fc-now-indicator-line {\n    z-index: 5;\n}\n\n.fc-time-grid .fc-helper-container {\n    /* also is fc-event-container */\n    position: relative;\n    z-index: 6;\n}\n\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-slats td {\n    height: 1.5em;\n    border-bottom: 0;\n    /* each cell is responsible for its top border */\n}\n\n.fc-time-grid .fc-slats .fc-minor td {\n    border-top-style: dotted;\n}\n\n.fc-time-grid .fc-slats .ui-widget-content {\n    /* for jqui theme */\n    background: none;\n    /* see through to fc-bg */\n}\n\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-highlight-container {\n    /* a div within a cell within the fc-highlight-skeleton */\n    position: relative;\n    /* scopes the left/right of the fc-highlight to be in the column */\n}\n\n.fc-time-grid .fc-highlight {\n    position: absolute;\n    left: 0;\n    right: 0;\n    /* top and bottom will be in by JS */\n}\n\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n\n.fc-ltr .fc-time-grid .fc-event-container {\n    /* space on the sides of events for LTR (default) */\n    margin: 0 2.5% 0 2px;\n}\n\n.fc-rtl .fc-time-grid .fc-event-container {\n    /* space on the sides of events for RTL */\n    margin: 0 2px 0 2.5%;\n}\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n    position: absolute;\n    z-index: 1;\n    /* scope inner z-index's */\n}\n\n.fc-time-grid .fc-bgevent {\n    /* background events always span full width */\n    left: 0;\n    right: 0;\n}\n\n\n/* Generic Vertical Event\n--------------------------------------------------------------------------------------------------*/\n\n.fc-v-event.fc-not-start {\n    /* events that are continuing from another day */\n    /* replace space made by the top border with padding */\n    border-top-width: 0;\n    padding-top: 1px;\n    /* remove top rounded corners */\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.fc-v-event.fc-not-end {\n    /* replace space made by the top border with padding */\n    border-bottom-width: 0;\n    padding-bottom: 1px;\n    /* remove bottom rounded corners */\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-time-grid-event {\n    overflow: hidden;\n    /* don't let the bg flow over rounded corners */\n}\n\n.fc-time-grid-event.fc-selected {\n    /* need to allow touch resizers to extend outside event's bounding box */\n    /* common fc-selected styles hide the fc-bg, so don't need this anyway */\n    overflow: visible;\n}\n\n.fc-time-grid-event.fc-selected .fc-bg {\n    display: none;\n    /* hide semi-white background, to appear darker */\n}\n\n.fc-time-grid-event .fc-content {\n    overflow: hidden;\n    /* for when .fc-selected */\n}\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n    padding: 0 1px;\n}\n\n.fc-time-grid-event .fc-time {\n    font-size: .85em;\n    white-space: nowrap;\n}\n\n\n/* short mode, where time and title are on the same line */\n\n.fc-time-grid-event.fc-short .fc-content {\n    /* don't wrap to second line (now that contents will be inline) */\n    white-space: nowrap;\n}\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n    /* put the time and title on the same line */\n    display: inline-block;\n    vertical-align: top;\n}\n\n.fc-time-grid-event.fc-short .fc-time span {\n    display: none;\n    /* don't display the full time text... */\n}\n\n.fc-time-grid-event.fc-short .fc-time:before {\n    content: attr(data-start);\n    /* ...instead, display only the start time */\n}\n\n.fc-time-grid-event.fc-short .fc-time:after {\n    content: \"\\A0-\\A0\";\n    /* seperate with a dash, wrapped in nbsp's */\n}\n\n.fc-time-grid-event.fc-short .fc-title {\n    font-size: .85em;\n    /* make the title text the same size as the time */\n    padding: 0;\n    /* undo padding from above */\n}\n\n\n/* resizer (cursor device) */\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 8px;\n    overflow: hidden;\n    line-height: 8px;\n    font-size: 11px;\n    font-family: monospace;\n    text-align: center;\n    cursor: s-resize;\n}\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n    content: \"=\";\n}\n\n\n/* resizer (touch device) */\n\n.fc-time-grid-event.fc-selected .fc-resizer {\n    /* 10x10 dot */\n    border-radius: 5px;\n    border-width: 1px;\n    width: 8px;\n    height: 8px;\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    /* horizontally center */\n    left: 50%;\n    margin-left: -5px;\n    /* center on the bottom edge */\n    bottom: -5px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-now-indicator-line {\n    border-top-width: 1px;\n    left: 0;\n    right: 0;\n}\n\n\n/* arrow on axis */\n\n.fc-time-grid .fc-now-indicator-arrow {\n    margin-top: -5px;\n    /* vertically center on top coordinate */\n}\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n    left: 0;\n    /* triangle pointing right... */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n}\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n    right: 0;\n    /* triangle pointing left... */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n}\n\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n\n\n/* possibly reusable */\n\n.fc-event-dot {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n}\n\n\n/* view wrapper */\n\n.fc-rtl .fc-list-view {\n    direction: rtl;\n    /* unlike core views, leverage browser RTL */\n}\n\n.fc-list-view {\n    border-width: 1px;\n    border-style: solid;\n}\n\n\n/* table resets */\n\n.fc .fc-list-table {\n    table-layout: auto;\n    /* for shrinkwrapping cell content */\n}\n\n.fc-list-table td {\n    border-width: 1px 0 0;\n    padding: 8px 14px;\n}\n\n.fc-list-table tr:first-child td {\n    border-top-width: 0;\n}\n\n\n/* day headings with the list */\n\n.fc-list-heading {\n    border-bottom-width: 1px;\n}\n\n.fc-list-heading td {\n    font-weight: bold;\n}\n\n.fc-ltr .fc-list-heading-main {\n    float: left;\n}\n\n.fc-ltr .fc-list-heading-alt {\n    float: right;\n}\n\n.fc-rtl .fc-list-heading-main {\n    float: right;\n}\n\n.fc-rtl .fc-list-heading-alt {\n    float: left;\n}\n\n\n/* event list items */\n\n.fc-list-item.fc-has-url {\n    cursor: pointer;\n    /* whole row will be clickable */\n}\n\n.fc-list-item:hover td {\n    background-color: #f5f5f5;\n}\n\n.fc-list-item-marker,\n.fc-list-item-time {\n    white-space: nowrap;\n    width: 1px;\n}\n\n\n/* make the dot closer to the event title */\n\n.fc-ltr .fc-list-item-marker {\n    padding-right: 0;\n}\n\n.fc-rtl .fc-list-item-marker {\n    padding-left: 0;\n}\n\n.fc-list-item-title a {\n    /* every event title cell has an <a> tag */\n    text-decoration: none;\n    color: inherit;\n}\n\n.fc-list-item-title a[href]:hover {\n    /* hover effect only on titles with hrefs */\n    text-decoration: underline;\n}\n\n\n/* message when no events */\n\n.fc-list-empty-wrap2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.fc-list-empty-wrap1 {\n    width: 100%;\n    height: 100%;\n    display: table;\n}\n\n.fc-list-empty {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.fc-unthemed .fc-list-empty {\n    /* theme will provide own background */\n    background-color: #eee;\n}", ""]);

// exports


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports
exports.i(__webpack_require__(516), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n.flash-message {\r\n    z-index: 9999;\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 577:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(90)
var ieee754 = __webpack_require__(111)
var isArray = __webpack_require__(112)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ })

},[581]);
//# sourceMappingURL=styles.bundle.js.map