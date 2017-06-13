webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../fullcalendar/dist/fullcalendar.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n.flash-message {\r\n    z-index: 9999;\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.jumborton {\r\n    height: 400px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../fullcalendar/dist/fullcalendar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * FullCalendar v3.4.0 Stylesheet\n * Docs & License: https://fullcalendar.io/\n * (c) 2017 Adam Shaw\n */\n\n.fc {\n    direction: ltr;\n    text-align: left;\n}\n\n.fc-rtl {\n    text-align: right;\n}\n\nbody .fc {\n    /* extra precedence to overcome jqui */\n    font-size: 1em;\n}\n\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n\n/* for gutter border */\n\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n    border-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n    background-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n    background: #eee;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n    color: #666;\n}\n\n.fc-unthemed td.fc-today {\n    background: #fcf8e3;\n}\n\n.fc-highlight {\n    /* when user is selecting cells */\n    background: #595959;\n    opacity: .3;\n}\n\n.fc-bgevent {\n    /* default look for background events */\n    background: rgb(143, 223, 130);\n    opacity: .3;\n}\n\n.fc-nonbusiness {\n    /* default look for non-business-hours areas */\n    /* will inherit .fc-bgevent's styles */\n    background: #d7d7d7;\n}\n\n.fc-unthemed .fc-disabled-day {\n    background: #d7d7d7;\n    opacity: .3;\n}\n\n.ui-widget .fc-disabled-day {\n    /* themed */\n    background-image: none;\n}\n\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-icon {\n    display: inline-block;\n    height: 1em;\n    line-height: 1em;\n    font-size: 1em;\n    text-align: center;\n    overflow: hidden;\n    font-family: \"Courier New\", Courier, monospace;\n    /* don't allow browser text-selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n\n/*\nAcceptable font-family overrides for individual icons:\n\t\"Arial\", sans-serif\n\t\"Times New Roman\", serif\n\nNOTE: use percentage font sizes or else old IE chokes\n*/\n\n.fc-icon:after {\n    position: relative;\n}\n\n.fc-icon-left-single-arrow:after {\n    content: \"\\2039\";\n    font-weight: bold;\n    font-size: 200%;\n    top: -7%;\n}\n\n.fc-icon-right-single-arrow:after {\n    content: \"\\203A\";\n    font-weight: bold;\n    font-size: 200%;\n    top: -7%;\n}\n\n.fc-icon-left-double-arrow:after {\n    content: \"\\AB\";\n    font-size: 160%;\n    top: -7%;\n}\n\n.fc-icon-right-double-arrow:after {\n    content: \"\\BB\";\n    font-size: 160%;\n    top: -7%;\n}\n\n.fc-icon-left-triangle:after {\n    content: \"\\25C4\";\n    font-size: 125%;\n    top: 3%;\n}\n\n.fc-icon-right-triangle:after {\n    content: \"\\25BA\";\n    font-size: 125%;\n    top: 3%;\n}\n\n.fc-icon-down-triangle:after {\n    content: \"\\25BC\";\n    font-size: 125%;\n    top: 2%;\n}\n\n.fc-icon-x:after {\n    content: \"\\D7\";\n    font-size: 200%;\n    top: 6%;\n}\n\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n\n.fc button {\n    /* force height to include the border and padding */\n    box-sizing: border-box;\n    /* dimensions */\n    margin: 0;\n    height: 2.1em;\n    padding: 0 .6em;\n    /* text & cursor */\n    font-size: 1em;\n    /* normalize */\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n\n/* Firefox has an annoying inner border */\n\n.fc button::-moz-focus-inner {\n    margin: 0;\n    padding: 0;\n}\n\n.fc-state-default {\n    /* non-theme */\n    border: 1px solid;\n}\n\n.fc-state-default.fc-corner-left {\n    /* non-theme */\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.fc-state-default.fc-corner-right {\n    /* non-theme */\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\n\n/* icons in buttons */\n\n.fc button .fc-icon {\n    /* non-theme */\n    position: relative;\n    top: -0.05em;\n    /* seems to be a good adjustment across browsers */\n    margin: 0 .2em;\n    vertical-align: middle;\n}\n\n\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n\n.fc-state-default {\n    background-color: #f5f5f5;\n    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n    background-repeat: repeat-x;\n    border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n    color: #333;\n    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n    color: #333333;\n    background-color: #e6e6e6;\n}\n\n.fc-state-hover {\n    color: #333333;\n    text-decoration: none;\n    background-position: 0 -15px;\n    transition: background-position 0.1s linear;\n}\n\n.fc-state-down,\n.fc-state-active {\n    background-color: #cccccc;\n    background-image: none;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.fc-state-disabled {\n    cursor: default;\n    background-image: none;\n    opacity: 0.65;\n    box-shadow: none;\n}\n\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n\n.fc-button-group {\n    display: inline-block;\n}\n\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n\n.fc .fc-button-group>* {\n    /* extra precedence b/c buttons have margin set to zero */\n    float: left;\n    margin: 0 0 0 -1px;\n}\n\n.fc .fc-button-group> :first-child {\n    /* same */\n    margin-left: 0;\n}\n\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n\n.fc-popover {\n    position: absolute;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .15);\n}\n\n.fc-popover .fc-header {\n    /* TODO: be more consistent with fc-head/fc-body */\n    padding: 2px 4px;\n}\n\n.fc-popover .fc-header .fc-title {\n    margin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n    cursor: pointer;\n}\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n    float: left;\n}\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n    float: right;\n}\n\n\n/* unthemed */\n\n.fc-unthemed .fc-popover {\n    border-width: 1px;\n    border-style: solid;\n}\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n    font-size: .9em;\n    margin-top: 2px;\n}\n\n\n/* jqui themed */\n\n.fc-popover>.ui-widget-header+.ui-widget-content {\n    border-top: 0;\n    /* where they meet, let the header have the border */\n}\n\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n\n.fc-divider {\n    border-style: solid;\n    border-width: 1px;\n}\n\nhr.fc-divider {\n    height: 0;\n    margin: 0;\n    padding: 0 0 2px;\n    /* height is unreliable across browsers, so use padding */\n    border-width: 1px 0;\n}\n\n.fc-clear {\n    clear: both;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n    /* these element should always cling to top-left/right corners */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.fc-bg {\n    bottom: 0;\n    /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n    height: 100%;\n    /* strech bg to bottom edge */\n}\n\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n\n.fc table {\n    width: 100%;\n    box-sizing: border-box;\n    /* fix scrollbar issue in firefox */\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em;\n    /* normalize cross-browser */\n}\n\n.fc th {\n    text-align: center;\n}\n\n.fc th,\n.fc td {\n    border-style: solid;\n    border-width: 1px;\n    padding: 0;\n    vertical-align: top;\n}\n\n.fc td.fc-today {\n    border-style: double;\n    /* overcome neighboring borders */\n}\n\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\n\na[data-goto] {\n    cursor: pointer;\n}\n\na[data-goto]:hover {\n    text-decoration: underline;\n}\n\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-row {\n    /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n    /* no visible border by default. but make available if need be (scrollbar width compensation) */\n    border-style: solid;\n    border-width: 0;\n}\n\n.fc-row table {\n    /* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n    border-left: 0 hidden transparent;\n    border-right: 0 hidden transparent;\n    /* no bottom borders on rows */\n    border-bottom: 0 hidden transparent;\n}\n\n.fc-row:first-child table {\n    border-top: 0 hidden transparent;\n    /* no top border on first row */\n}\n\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-row {\n    position: relative;\n}\n\n.fc-row .fc-bg {\n    z-index: 1;\n}\n\n\n/* highlighting cells & background event skeleton */\n\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n    bottom: 0;\n    /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n    height: 100%;\n    /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n    border-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n    z-index: 2;\n}\n\n.fc-row .fc-highlight-skeleton {\n    z-index: 3;\n}\n\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n\n.fc-row .fc-content-skeleton {\n    position: relative;\n    z-index: 4;\n    padding-bottom: 2px;\n    /* matches the space above the events */\n}\n\n.fc-row .fc-helper-skeleton {\n    z-index: 5;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n    /* see-through to the background below */\n    background: none;\n    /* in case <td>s are globally styled */\n    border-color: transparent;\n    /* don't put a border between events and/or the day number */\n    border-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td,\n\n/* cells with events inside (so NOT the day number cell) */\n\n.fc-row .fc-helper-skeleton tbody td {\n    /* don't put a border between event cells */\n    border-top: 0;\n}\n\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n\n.fc-scroller {\n    -webkit-overflow-scrolling: touch;\n}\n\n\n/* TODO: move to agenda/basic */\n\n.fc-scroller>.fc-day-grid,\n.fc-scroller>.fc-time-grid {\n    position: relative;\n    /* re-scope all positions */\n    width: 100%;\n    /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event {\n    position: relative;\n    /* for resize handle and other inner positioning */\n    display: block;\n    /* make the <a> tag block */\n    font-size: .85em;\n    line-height: 1.3;\n    border-radius: 3px;\n    border: 1px solid #3a87ad;\n    /* default BORDER color */\n    font-weight: normal;\n    /* undo jqui's ui-widget-header bold */\n}\n\n.fc-event,\n.fc-event-dot {\n    background-color: #3a87ad;\n    /* default BACKGROUND color */\n}\n\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n    color: #fff;\n    /* default TEXT color */\n    text-decoration: none;\n    /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n    cursor: pointer;\n    /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed,\n\n/* causes a \"warning\" cursor. applied on body */\n\n.fc-not-allowed .fc-event {\n    /* to override an event's custom cursor */\n    cursor: not-allowed;\n}\n\n.fc-event .fc-bg {\n    /* the generic .fc-bg already does position */\n    z-index: 1;\n    background: #fff;\n    opacity: .25;\n}\n\n.fc-event .fc-content {\n    position: relative;\n    z-index: 2;\n}\n\n\n/* resizer (cursor AND touch devices) */\n\n.fc-event .fc-resizer {\n    position: absolute;\n    z-index: 4;\n}\n\n\n/* resizer (touch devices) */\n\n.fc-event .fc-resizer {\n    display: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n    /* only show when hovering or selected (with touch) */\n    display: block;\n}\n\n\n/* hit area */\n\n.fc-event.fc-selected .fc-resizer:before {\n    /* 40x40 touch area */\n    content: \"\";\n    position: absolute;\n    z-index: 9999;\n    /* user of this util can scope within a lower z-index */\n    top: 50%;\n    left: 50%;\n    width: 40px;\n    height: 40px;\n    margin-left: -20px;\n    margin-top: -20px;\n}\n\n.fc-helper {\n    background-color: #595959;\n}\n\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-event.fc-selected {\n    z-index: 9999 !important;\n    /* overcomes inline z-index */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected.fc-dragging {\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n\n\n/* bigger touch area when selected */\n\n.fc-h-event.fc-selected:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    /* below resizers */\n    top: -10px;\n    bottom: -10px;\n    left: 0;\n    right: 0;\n}\n\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n    margin-left: 0;\n    border-left-width: 0;\n    padding-left: 1px;\n    /* replace the border with padding */\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n    margin-right: 0;\n    border-right-width: 0;\n    padding-right: 1px;\n    /* replace the border with padding */\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n\n/* resizer (cursor AND touch devices) */\n\n\n/* left resizer  */\n\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n    cursor: w-resize;\n    left: -1px;\n    /* overcome border */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n    cursor: e-resize;\n    right: -1px;\n    /* overcome border */\n}\n\n\n/* resizer (mouse devices) */\n\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n    width: 7px;\n    top: -1px;\n    /* overcome top border */\n    bottom: -1px;\n    /* overcome bottom border */\n}\n\n\n/* resizer (touch devices) */\n\n.fc-h-event.fc-selected .fc-resizer {\n    /* 8x8 little dot */\n    border-radius: 4px;\n    border-width: 1px;\n    width: 6px;\n    height: 6px;\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    /* vertically center */\n    top: 50%;\n    margin-top: -4px;\n}\n\n\n/* left resizer  */\n\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n    margin-left: -4px;\n    /* centers the 8x8 dot on the left edge */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n    margin-right: -4px;\n    /* centers the 8x8 dot on the right edge */\n}\n\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-day-grid-event {\n    margin: 1px 2px 0;\n    /* spacing between events and edges */\n    padding: 0 1px;\n}\n\ntr:first-child>td>.fc-day-grid-event {\n    margin-top: 2px;\n    /* a little bit more space before the first event */\n}\n\n.fc-day-grid-event.fc-selected:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    /* same z-index as fc-bg, behind text */\n    /* overcome the borders */\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    left: -1px;\n    /* darkening effect */\n    background: #000;\n    opacity: .25;\n}\n\n.fc-day-grid-event .fc-content {\n    /* force events to be one-line tall */\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n    font-weight: bold;\n}\n\n\n/* resizer (cursor devices) */\n\n\n/* left resizer  */\n\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n    margin-left: -2px;\n    /* to the day cell's edge */\n}\n\n\n/* right resizer */\n\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n    margin-right: -2px;\n    /* to the day cell's edge */\n}\n\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n\n\n/* \"more\" link that represents hidden events */\n\na.fc-more {\n    margin: 1px 3px;\n    font-size: .85em;\n    cursor: pointer;\n    text-decoration: none;\n}\n\na.fc-more:hover {\n    text-decoration: underline;\n}\n\n.fc-limited {\n    /* rows and cells that are hidden because of a \"more\" link */\n    display: none;\n}\n\n\n/* popover that appears when \"more\" link is clicked */\n\n.fc-day-grid .fc-row {\n    z-index: 1;\n    /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n    z-index: 2;\n    width: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n    padding: 10px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-now-indicator {\n    position: absolute;\n    border: 0 solid red;\n}\n\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n\n.fc-unselectable {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n\n.fc-toolbar {\n    text-align: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n    margin-top: 1em;\n}\n\n.fc-toolbar .fc-left {\n    float: left;\n}\n\n.fc-toolbar .fc-right {\n    float: right;\n}\n\n.fc-toolbar .fc-center {\n    display: inline-block;\n}\n\n\n/* the things within each left/right/center section */\n\n.fc .fc-toolbar>*>* {\n    /* extra precedence to override button border margins */\n    float: left;\n    margin-left: .75em;\n}\n\n\n/* the first thing within each left/center/right section */\n\n.fc .fc-toolbar>*> :first-child {\n    /* extra precedence to override button border margins */\n    margin-left: 0;\n}\n\n\n/* title text */\n\n.fc-toolbar h2 {\n    margin: 0;\n}\n\n\n/* button layering (for border precedence) */\n\n.fc-toolbar button {\n    position: relative;\n}\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n    z-index: 2;\n}\n\n.fc-toolbar .fc-state-down {\n    z-index: 3;\n}\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n    z-index: 4;\n}\n\n.fc-toolbar button:focus {\n    z-index: 5;\n}\n\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n\n\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n    box-sizing: content-box;\n}\n\n.fc-view,\n\n/* scope positioning and z-index's for everything within the view */\n\n.fc-view>table {\n    /* so dragged elements can be above the view's main element */\n    position: relative;\n    z-index: 1;\n}\n\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n\n\n/* day row structure */\n\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n    /* there may be week numbers in these views, so no padding-top */\n    padding-bottom: 1em;\n    /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-basic-view .fc-body .fc-row {\n    min-height: 4em;\n    /* ensure that all rows are at least this tall */\n}\n\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n\n.fc-row.fc-rigid {\n    overflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n/* week and day number styling */\n\n.fc-day-top.fc-other-month {\n    opacity: 0.3;\n}\n\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n    padding: 2px;\n}\n\n.fc-basic-view th.fc-week-number,\n.fc-basic-view th.fc-day-number {\n    padding: 0 2px;\n    /* column headers can't have as much v space */\n}\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-day-number {\n    float: right;\n}\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-day-number {\n    float: left;\n}\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-week-number {\n    float: left;\n    border-radius: 0 0 3px 0;\n}\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-week-number {\n    float: right;\n    border-radius: 0 0 0 3px;\n}\n\n.fc-basic-view .fc-day-top .fc-week-number {\n    min-width: 1.5em;\n    text-align: center;\n    background-color: #f2f2f2;\n    color: #808080;\n}\n\n\n/* when week/day number have own column */\n\n.fc-basic-view td.fc-week-number {\n    text-align: center;\n}\n\n.fc-basic-view td.fc-week-number>* {\n    /* work around the way we do column resizing and ensure a minimum width */\n    display: inline-block;\n    min-width: 1.25em;\n}\n\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n\n.fc-agenda-view .fc-day-grid {\n    position: relative;\n    z-index: 2;\n    /* so the \"more..\" popover will be over the time grid */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row {\n    min-height: 3em;\n    /* all-day section will never get shorter than this */\n}\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n    padding-bottom: 1em;\n    /* give space underneath events for clicking/selecting days */\n}\n\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n\n.fc .fc-axis {\n    /* .fc to overcome default cell styles */\n    vertical-align: middle;\n    padding: 0 4px;\n    white-space: nowrap;\n}\n\n.fc-ltr .fc-axis {\n    text-align: right;\n}\n\n.fc-rtl .fc-axis {\n    text-align: left;\n}\n\n.ui-widget td.fc-axis {\n    font-weight: normal;\n    /* overcome jqui theme making it bold */\n}\n\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid-container,\n\n/* so scroll container's z-index is below all-day */\n\n.fc-time-grid {\n    /* so slats/bg/content/etc positions get scoped within here */\n    position: relative;\n    z-index: 1;\n}\n\n.fc-time-grid {\n    min-height: 100%;\n    /* so if height setting is 'auto', .fc-bg stretches to fill height */\n}\n\n.fc-time-grid table {\n    /* don't put outer borders on slats/bg/content/etc */\n    border: 0 hidden transparent;\n}\n\n.fc-time-grid>.fc-bg {\n    z-index: 1;\n}\n\n.fc-time-grid .fc-slats,\n.fc-time-grid>hr {\n    /* the <hr> AgendaView injects when grid is shorter than scroller */\n    position: relative;\n    z-index: 2;\n}\n\n.fc-time-grid .fc-content-col {\n    position: relative;\n    /* because now-indicator lives directly inside */\n}\n\n.fc-time-grid .fc-content-skeleton {\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n\n/* divs within a cell within the fc-content-skeleton */\n\n.fc-time-grid .fc-business-container {\n    position: relative;\n    z-index: 1;\n}\n\n.fc-time-grid .fc-bgevent-container {\n    position: relative;\n    z-index: 2;\n}\n\n.fc-time-grid .fc-highlight-container {\n    position: relative;\n    z-index: 3;\n}\n\n.fc-time-grid .fc-event-container {\n    position: relative;\n    z-index: 4;\n}\n\n.fc-time-grid .fc-now-indicator-line {\n    z-index: 5;\n}\n\n.fc-time-grid .fc-helper-container {\n    /* also is fc-event-container */\n    position: relative;\n    z-index: 6;\n}\n\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-slats td {\n    height: 1.5em;\n    border-bottom: 0;\n    /* each cell is responsible for its top border */\n}\n\n.fc-time-grid .fc-slats .fc-minor td {\n    border-top-style: dotted;\n}\n\n.fc-time-grid .fc-slats .ui-widget-content {\n    /* for jqui theme */\n    background: none;\n    /* see through to fc-bg */\n}\n\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-highlight-container {\n    /* a div within a cell within the fc-highlight-skeleton */\n    position: relative;\n    /* scopes the left/right of the fc-highlight to be in the column */\n}\n\n.fc-time-grid .fc-highlight {\n    position: absolute;\n    left: 0;\n    right: 0;\n    /* top and bottom will be in by JS */\n}\n\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n\n.fc-ltr .fc-time-grid .fc-event-container {\n    /* space on the sides of events for LTR (default) */\n    margin: 0 2.5% 0 2px;\n}\n\n.fc-rtl .fc-time-grid .fc-event-container {\n    /* space on the sides of events for RTL */\n    margin: 0 2px 0 2.5%;\n}\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n    position: absolute;\n    z-index: 1;\n    /* scope inner z-index's */\n}\n\n.fc-time-grid .fc-bgevent {\n    /* background events always span full width */\n    left: 0;\n    right: 0;\n}\n\n\n/* Generic Vertical Event\n--------------------------------------------------------------------------------------------------*/\n\n.fc-v-event.fc-not-start {\n    /* events that are continuing from another day */\n    /* replace space made by the top border with padding */\n    border-top-width: 0;\n    padding-top: 1px;\n    /* remove top rounded corners */\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.fc-v-event.fc-not-end {\n    /* replace space made by the top border with padding */\n    border-bottom-width: 0;\n    padding-bottom: 1px;\n    /* remove bottom rounded corners */\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n\n.fc-time-grid-event {\n    overflow: hidden;\n    /* don't let the bg flow over rounded corners */\n}\n\n.fc-time-grid-event.fc-selected {\n    /* need to allow touch resizers to extend outside event's bounding box */\n    /* common fc-selected styles hide the fc-bg, so don't need this anyway */\n    overflow: visible;\n}\n\n.fc-time-grid-event.fc-selected .fc-bg {\n    display: none;\n    /* hide semi-white background, to appear darker */\n}\n\n.fc-time-grid-event .fc-content {\n    overflow: hidden;\n    /* for when .fc-selected */\n}\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n    padding: 0 1px;\n}\n\n.fc-time-grid-event .fc-time {\n    font-size: .85em;\n    white-space: nowrap;\n}\n\n\n/* short mode, where time and title are on the same line */\n\n.fc-time-grid-event.fc-short .fc-content {\n    /* don't wrap to second line (now that contents will be inline) */\n    white-space: nowrap;\n}\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n    /* put the time and title on the same line */\n    display: inline-block;\n    vertical-align: top;\n}\n\n.fc-time-grid-event.fc-short .fc-time span {\n    display: none;\n    /* don't display the full time text... */\n}\n\n.fc-time-grid-event.fc-short .fc-time:before {\n    content: attr(data-start);\n    /* ...instead, display only the start time */\n}\n\n.fc-time-grid-event.fc-short .fc-time:after {\n    content: \"\\A0-\\A0\";\n    /* seperate with a dash, wrapped in nbsp's */\n}\n\n.fc-time-grid-event.fc-short .fc-title {\n    font-size: .85em;\n    /* make the title text the same size as the time */\n    padding: 0;\n    /* undo padding from above */\n}\n\n\n/* resizer (cursor device) */\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 8px;\n    overflow: hidden;\n    line-height: 8px;\n    font-size: 11px;\n    font-family: monospace;\n    text-align: center;\n    cursor: s-resize;\n}\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n    content: \"=\";\n}\n\n\n/* resizer (touch device) */\n\n.fc-time-grid-event.fc-selected .fc-resizer {\n    /* 10x10 dot */\n    border-radius: 5px;\n    border-width: 1px;\n    width: 8px;\n    height: 8px;\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    /* horizontally center */\n    left: 50%;\n    margin-left: -5px;\n    /* center on the bottom edge */\n    bottom: -5px;\n}\n\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n\n.fc-time-grid .fc-now-indicator-line {\n    border-top-width: 1px;\n    left: 0;\n    right: 0;\n}\n\n\n/* arrow on axis */\n\n.fc-time-grid .fc-now-indicator-arrow {\n    margin-top: -5px;\n    /* vertically center on top coordinate */\n}\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n    left: 0;\n    /* triangle pointing right... */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n}\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n    right: 0;\n    /* triangle pointing left... */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n}\n\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n\n\n/* possibly reusable */\n\n.fc-event-dot {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n}\n\n\n/* view wrapper */\n\n.fc-rtl .fc-list-view {\n    direction: rtl;\n    /* unlike core views, leverage browser RTL */\n}\n\n.fc-list-view {\n    border-width: 1px;\n    border-style: solid;\n}\n\n\n/* table resets */\n\n.fc .fc-list-table {\n    table-layout: auto;\n    /* for shrinkwrapping cell content */\n}\n\n.fc-list-table td {\n    border-width: 1px 0 0;\n    padding: 8px 14px;\n}\n\n.fc-list-table tr:first-child td {\n    border-top-width: 0;\n}\n\n\n/* day headings with the list */\n\n.fc-list-heading {\n    border-bottom-width: 1px;\n}\n\n.fc-list-heading td {\n    font-weight: bold;\n}\n\n.fc-ltr .fc-list-heading-main {\n    float: left;\n}\n\n.fc-ltr .fc-list-heading-alt {\n    float: right;\n}\n\n.fc-rtl .fc-list-heading-main {\n    float: right;\n}\n\n.fc-rtl .fc-list-heading-alt {\n    float: left;\n}\n\n\n/* event list items */\n\n.fc-list-item.fc-has-url {\n    cursor: pointer;\n    /* whole row will be clickable */\n}\n\n.fc-list-item:hover td {\n    background-color: #f5f5f5;\n}\n\n.fc-list-item-marker,\n.fc-list-item-time {\n    white-space: nowrap;\n    width: 1px;\n}\n\n\n/* make the dot closer to the event title */\n\n.fc-ltr .fc-list-item-marker {\n    padding-right: 0;\n}\n\n.fc-rtl .fc-list-item-marker {\n    padding-left: 0;\n}\n\n.fc-list-item-title a {\n    /* every event title cell has an <a> tag */\n    text-decoration: none;\n    color: inherit;\n}\n\n.fc-list-item-title a[href]:hover {\n    /* hover effect only on titles with hrefs */\n    text-decoration: underline;\n}\n\n\n/* message when no events */\n\n.fc-list-empty-wrap2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.fc-list-empty-wrap1 {\n    width: 100%;\n    height: 100%;\n    display: table;\n}\n\n.fc-list-empty {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.fc-unthemed .fc-list-empty {\n    /* theme will provide own background */\n    background-color: #eee;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
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

	if (useSourceMap && typeof btoa === 'function') {
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
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map