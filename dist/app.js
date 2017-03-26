/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(7);

	var Elm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Main.elm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var mountNode = document.getElementById('main');

	var app = Elm.Main.embed(mountNode);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js?sourceMap!./../postcss-loader/index.js!./../sass-loader/index.js?sourceMap!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js?sourceMap!./../postcss-loader/index.js!./../sass-loader/index.js?sourceMap!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n", "", {"version":3,"sources":["/./node_modules/normalize.css/node_modules/normalize.css/normalize.css","/./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"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","file":"normalize.css","sourcesContent":["/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.sass", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".default-button, .green-button, .red-button {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  border: none;\n  cursor: pointer;\n  background: none;\n  -webkit-transition: background-color 150ms ease-in-out, color 150ms ease-in-out;\n  transition: background-color 150ms ease-in-out, color 150ms ease-in-out; }\n\nbody {\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #e0dfd5; }\n\n.widget-container {\n  width: 300px;\n  height: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.widget {\n  width: 100%;\n  background-color: #313638;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.widget-switch-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.widget-switch {\n  font-family: \"Didact Gothic\", sans-serif;\n  background-color: #313638;\n  color: #e8e9eb;\n  display: block;\n  width: 100px;\n  height: auto;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.timestamp {\n  font-family: \"Dosis\", sans-serif;\n  font-weight: 200;\n  width: 100%;\n  font-size: 50px;\n  text-align: center;\n  color: #e8e9eb;\n  margin: 0 auto;\n  padding: 5px 0 10px 0; }\n\n.digit-box {\n  color: #e8e9eb;\n  display: inline;\n  outline: none;\n  font-size: 40px;\n  width: 50px;\n  background: transparent;\n  border: none;\n  border-bottom: 0.03em solid rgba(232, 233, 235, 0.5);\n  text-align: center; }\n  .digit-box:focus {\n    border-bottom: 0.03em solid #e8e9eb; }\n  .digit-box::-moz-selection {\n    background: #616a6e; }\n  .digit-box::selection {\n    background: #616a6e; }\n\n.clock-widget .timestamp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-right: 0.8em;\n  padding-left: 0.8em;\n  box-sizing: border-box; }\n\n.clock-time {\n  display: inline-block; }\n\n.meridien {\n  margin-left: 15px; }\n\n.widget-switch-icon, .widget-switch-text {\n  display: block;\n  text-align: center;\n  padding: 2px;\n  margin: auto; }\n\n.widget-switch-text {\n  padding-bottom: 4px; }\n\n.widget-switch.inactive {\n  color: rgba(232, 233, 235, 0.7); }\n  .widget-switch.inactive .widget-switch-icon {\n    color: inherit; }\n  .widget-switch.inactive .widget-switch-text {\n    color: inherit; }\n\n.stopwatch-widget .timestamp, .timer-widget .timestamp {\n  border-bottom: 1px solid rgba(224, 223, 213, 0.2); }\n\n.flex-button-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80%;\n  padding: 10px 0; }\n\n.default-button {\n  color: #e8e9eb;\n  border: 1px solid #e8e9eb; }\n  .default-button:hover {\n    color: #313638;\n    background-color: #e8e9eb; }\n  .default-button:active {\n    color: #313638;\n    background-color: #cdcfd3; }\n\n.green-button {\n  color: #87a878;\n  border: 1px solid #87a878; }\n  .green-button:hover {\n    color: #313638;\n    background-color: #87a878; }\n\n.red-button {\n  color: #db4c40;\n  border: 1px solid #db4c40; }\n  .red-button:hover {\n    color: #313638;\n    background-color: #db4c40; }\n\n.lap-list {\n  color: #e8e9eb;\n  width: 100%;\n  max-height: 88px;\n  overflow: auto;\n  margin: 0;\n  padding-left: 0;\n  list-style: none; }\n  .lap-list li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 5px 40px;\n    border-bottom: 1px solid rgba(224, 223, 213, 0.2); }\n    .lap-list li:last-child {\n      border-bottom: none; }\n  .lap-list .fastest-lap {\n    color: #87a878; }\n  .lap-list .slowest-lap {\n    color: #db4c40; }\n\n.inactive {\n  background-color: #495053; }\n\n.disabled {\n  opacity: 0.5;\n  background-color: transparent;\n  color: #e8e9eb;\n  cursor: default; }\n  .disabled:hover {\n    background-color: transparent;\n    color: #e8e9eb; }\n  .disabled:active {\n    background-color: transparent;\n    color: #e8e9eb; }\n\n.hidden {\n  display: none; }\n", "", {"version":3,"sources":["/./src/style/src/style/main.sass"],"names":[],"mappings":"AAmBA;EACC,YAAW;EACX,aAAY;EACZ,oBAAmB;EACnB,aAAY;EACZ,gBAAe;EACf,iBAAgB;EAChB,gFAAuE;EAAvE,wEAAuE,EAAI;;AAE5E;EACC,kBAAiB;EAlBjB,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAkB4B;EAlB5B,8BAkB4B;MAlB5B,6BAkB4B;UAlB5B,yBAkB4B;EAjB5B,yBAiBoC;MAjBpC,sBAiBoC;UAjBpC,wBAiBoC;EAhBpC,0BAgB4C;MAhB5C,uBAgB4C;UAhB5C,oBAgB4C;EAC5C,0BA9BkB,EA8Ba;;AAEhC;EACC,aAAY;EACZ,aAAY;EACZ,0BAAiB;KAAjB,uBAAiB;MAAjB,sBAAiB;UAAjB,kBAAiB,EAAI;;AAEtB;EACC,YAAW;EACX,0BAtCoB;EASpB,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BA6B4B;EA7B5B,8BA6B4B;MA7B5B,6BA6B4B;UA7B5B,yBA6B4B;EA5B5B,wBA4BwC;MA5BxC,qBA4BwC;UA5BxC,4BA4BwC;EA3BxC,0BA2BgD;MA3BhD,uBA2BgD;UA3BhD,oBA2BgD,EAAI;;AAErD;EAhCC,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAgCyB;EAhCzB,8BAgCyB;MAhCzB,0BAgCyB;UAhCzB,sBAgCyB;EA/BzB,yBA+BiC;MA/BjC,sBA+BiC;UA/BjC,wBA+BiC;EA9BjC,0BA8ByC;MA9BzC,uBA8ByC;UA9BzC,oBA8ByC,EAAI;;AAE9C;EACC,yCAxCmC;EAyCnC,0BA9CoB;EA+CpB,eAjDc;EAkDd,eAAc;EACd,aAAY;EACZ,aAAY;EACZ,gBAAe;EACf,0BAAiB;KAAjB,uBAAiB;MAAjB,sBAAiB;UAAjB,kBAAiB,EAAI;;AAEtB;EACC,iCAnD0B;EAoD1B,iBAAgB;EAChB,YAAW;EACX,gBAAe;EACf,mBAAkB;EAClB,eA9Dc;EA+Dd,eAAc;EACd,sBAAqB,EAAI;;AAE1B;EACE,eAnEa;EAoEb,gBAAe;EACf,cAAa;EACb,gBAAe;EACf,YAAW;EACX,wBAAuB;EACvB,aAAY;EACZ,qDAAuD;EACvD,mBAAkB,EAI2B;EAb/C;IAWI,oCA7EW,EA6E0B;EAXzC;IAaI,oBAAsC,EAAG;EAb7C;IAaI,oBAAsC,EAAG;;AAE7C;EAtEC,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAsE4B;EAtE5B,8BAsE4B;MAtE5B,0BAsE4B;UAtE5B,sBAsE4B;EArE5B,0BAqE2C;MArE3C,uBAqE2C;UArE3C,+BAqE2C;EApE3C,0BAoEmD;MApEnD,uBAoEmD;UApEnD,oBAoEmD;EAChD,qBAAoB;EACpB,oBAAmB;EACnB,uBAAsB,EAAI;;AAE9B;EACI,sBAAqB,EAAI;;AAE7B;EACC,kBAAiB,EAAI;;AAEtB;EACC,eAAc;EACd,mBAAkB;EAClB,aAAY;EACZ,aAAY,EAAI;;AAEjB;EACC,oBAAmB,EAAI;;AAExB;EACC,gCAAkC,EAIb;EALtB;IAGE,eAAc,EAAI;EAHpB;IAKE,eAAc,EAAI;;AAEpB;EACC,kDAAwD,EAAG;;AAE5D;EArGC,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,+BAqGyB;EArGzB,8BAqGyB;MArGzB,0BAqGyB;UArGzB,sBAqGyB;EApGzB,0BAoGuC;MApGvC,8BAoGuC;EAnGvC,0BAmG+C;MAnG/C,uBAmG+C;UAnG/C,oBAmG+C;EAC/C,WAAU;EACV,gBAAe,EAAI;;AAGpB;EAEC,eAxHc;EAyHd,0BAzHc,EA+H6B;EAT5C;IAKE,eAzHmB;IA0HnB,0BA5Ha,EA4Hc;EAN7B;IAQE,eA5HmB;IA6HnB,0BAAqC,EAAG;;AAE1C;EAEC,eAhIkB;EAiIlB,0BAjIkB,EAoIgB;EANnC;IAKE,eApImB;IAqInB,0BApIiB,EAoIc;;AAEjC;EAEC,eAvIiB;EAwIjB,0BAxIiB,EA2IgB;EANlC;IAKE,eA5ImB;IA6InB,0BA3IgB,EA2Ic;;AAEhC;EACC,eAlJc;EAmJd,YAAW;EACX,iBAAgB;EAChB,eAAc;EACd,UAAS;EACT,gBAAe;EACf,iBAAgB,EAUM;EAjBvB;IAtIC,qBAAa;IAAb,qBAAa;IAAb,cAAa;IACb,+BA8I0B;IA9I1B,8BA8I0B;QA9I1B,0BA8I0B;YA9I1B,sBA8I0B;IA7I1B,0BA6IyC;QA7IzC,uBA6IyC;YA7IzC,+BA6IyC;IA5IzC,0BA4IiD;QA5IjD,uBA4IiD;YA5IjD,oBA4IiD;IAChD,kBAAiB;IACjB,kDAAwD,EAE9B;IAb5B;MAaG,oBAAmB,EAAI;EAb1B;IAeE,eA7JiB,EA6JG;EAftB;IAiBE,eA9JgB,EA8JG;;AAIrB;EACC,0BAA4C,EAAG;;AAEhD;EACI,aAAY;EACZ,8BAA6B;EAC7B,eA5KW;EA6KX,gBAAe,EAMO;EAV1B;IAMQ,8BAA6B;IAC7B,eAhLO,EAgLS;EAPxB;IASQ,8BAA6B;IAC7B,eAnLO,EAmLS;;AAExB;EACC,cAAa,EAAI","file":"main.sass","sourcesContent":["$white:\t#e8e9eb;\n$off-white:\t#e0dfd5;\n$black-chalk: #313638;\n$green-tea:\t#87a878;\n$flat-red: #db4c40;\n\n$dosis: 'Dosis', sans-serif;\n$didact: 'Didact Gothic', sans-serif;\n\n\n@mixin flex($row, $wrap, $justify, $align) {\n\tdisplay: flex;\n\tflex-flow: $row $wrap;\n\tjustify-content: $justify;\n\talign-items: $align; }\n\n%fade-in-out {\n\ttransition: background-color 150ms ease-in-out; }\n\n%round-button {\n\twidth: 80px;\n\theight: 80px;\n\tborder-radius: 100%;\n\tborder: none;\n\tcursor: pointer;\n\tbackground: none;\n\ttransition: background-color 150ms ease-in-out, color 150ms ease-in-out; }\n\nbody {\n\tmin-height: 100vh;\n\t@include flex(column, nowrap, center, center);\n\tbackground-color: $off-white; }\n\n.widget-container {\n\twidth: 300px;\n\theight: auto;\n\tuser-select: none; }\n\n.widget {\n\twidth: 100%;\n\tbackground-color: $black-chalk;\n\t@include flex(column, nowrap, flex-start, center); }\n\n.widget-switch-group {\n\t@include flex(row, nowrap, center, center); }\n\n.widget-switch {\n\tfont-family: $didact;\n\tbackground-color: $black-chalk;\n\tcolor: $white;\n\tdisplay: block;\n\twidth: 100px;\n\theight: auto;\n\tcursor: pointer;\n\tuser-select: none; }\n\n.timestamp {\n\tfont-family: $dosis;\n\tfont-weight: 200;\n\twidth: 100%;\n\tfont-size: 50px;\n\ttext-align: center;\n\tcolor: $white;\n\tmargin: 0 auto;\n\tpadding: 5px 0 10px 0; }\n\n.digit-box {\n  color: $white;\n  display: inline;\n  outline: none;\n  font-size: 40px;\n  width: 50px;\n  background: transparent;\n  border: none;\n  border-bottom: 0.03em solid transparentize($white, 0.5);\n  text-align: center;\n  &:focus {\n    border-bottom: 0.03em solid $white; }\n  &::selection {\n    background: lighten($black-chalk, 20%); } }\n\n.clock-widget .timestamp {\n    @include flex(row, nowrap, space-between, center);\n    padding-right: 0.8em;\n    padding-left: 0.8em;\n    box-sizing: border-box; }\n\n.clock-time {\n    display: inline-block; }\n\n.meridien {\n\tmargin-left: 15px; }\n\n.widget-switch-icon, .widget-switch-text {\n\tdisplay: block;\n\ttext-align: center;\n\tpadding: 2px;\n\tmargin: auto; }\n\n.widget-switch-text {\n\tpadding-bottom: 4px; }\n\n.widget-switch.inactive {\n\tcolor: transparentize($white, 0.3);\n\t.widget-switch-icon {\n\t\tcolor: inherit; }\n\t.widget-switch-text {\n\t\tcolor: inherit; } }\n\n.stopwatch-widget .timestamp, .timer-widget .timestamp {\n\tborder-bottom: 1px solid transparentize($off-white, 0.8); }\n\n.flex-button-group {\n\t@include flex(row, nowrap, space-around, center);\n\twidth: 80%;\n\tpadding: 10px 0; }\n\n\n.default-button {\n\t@extend %round-button;\n\tcolor: $white;\n\tborder: 1px solid $white;\n\t&:hover {\n\t\tcolor: $black-chalk;\n\t\tbackground-color: $white; }\n\t&:active {\n\t\tcolor: $black-chalk;\n\t\tbackground-color: darken($white, 10%); } }\n\n.green-button {\n\t@extend %round-button;\n\tcolor: $green-tea;\n\tborder: 1px solid $green-tea;\n\t&:hover {\n\t\tcolor: $black-chalk;\n\t\tbackground-color: $green-tea; } }\n\n.red-button {\n\t@extend %round-button;\n\tcolor: $flat-red;\n\tborder: 1px solid $flat-red;\n\t&:hover {\n\t\tcolor: $black-chalk;\n\t\tbackground-color: $flat-red; } }\n\n.lap-list {\n\tcolor: $white;\n\twidth: 100%;\n\tmax-height: 88px;\n\toverflow: auto;\n\tmargin: 0;\n\tpadding-left: 0;\n\tlist-style: none;\n\tli {\n\t\t@include flex(row, nowrap, space-between, center);\n\t\tpadding: 5px 40px;\n\t\tborder-bottom: 1px solid transparentize($off-white, 0.8);\n\t\t&:last-child {\n\t\t\tborder-bottom: none; } }\n\t.fastest-lap {\n\t\tcolor: $green-tea; }\n\t.slowest-lap {\n\t\tcolor: $flat-red; } }\n\n// States\n\n.inactive {\n\tbackground-color: lighten($black-chalk, 10%); }\n\n.disabled {\n    opacity: 0.5;\n    background-color: transparent;\n    color: $white;\n    cursor: default;\n    &:hover {\n        background-color: transparent;\n        color: $white; }\n    &:active {\n        background-color: transparent;\n        color: $white; } }\n\n.hidden {\n\tdisplay: none; }\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ }
/******/ ]);