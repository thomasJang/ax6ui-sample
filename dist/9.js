webpackJsonp([9],{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _ax6ui = __webpack_require__(16);

__webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = "\n<div id=\"making-div\" style=\"height:500px;background: #ccc;\">making div</div>\n<br/>\n<a class=\"waves-effect waves-light btn\" data-btn=\"mask\">Open Mask</a>\n<a class=\"waves-effect waves-light btn\" data-btn=\"mask-content\">Open Mask(with content)</a>\n<a class=\"waves-effect waves-light btn\" data-btn=\"mask-div\">Open Mask(masking)</a>\n";

var fn = {};
fn.moduleRun = function ($body) {
  /////~~~~~~~~~~~~~~~~~~
  fn.myMask = new _ax6ui.AX6UIMask();
  fn.myMask.setConfig({
    zIndex: 1000,
    onStateChanged: function onStateChanged() {
      console.log(this);
    }
  });

  fn.myMask.onClick = function () {
    console.log(this);
    fn.myMask.fadeOut();
  };

  $body.on("click", '[data-btn]', function (e) {
    var btn = e.currentTarget.getAttribute("data-btn");
    var processor = {
      mask: function mask() {
        fn.myMask.open();
      },
      "mask-content": function maskContent() {
        fn.myMask.open({
          content: "MASK CONTENT"
        });
      },
      "mask-div": function maskDiv() {
        fn.myMask.open({
          target: (0, _jqmin2.default)('#making-div')
        });
      }
    };

    if (btn in processor) {
      processor[btn]();
    }
  });
};

fn.moduleDestroy = function ($body) {
  fn.myMask.destory();
  fn.myMask = null;
  $body.off("click");
};

exports.default = {
  html: html,
  fn: fn
};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-mask {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 0.6; } }\n\n@-moz-keyframes ax-mask {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 0.6; } }\n\n@keyframes ax-mask {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 0.6; } }\n\n@-webkit-keyframes ax-mask-fade-out {\n  from {\n    opacity: 0.6; }\n  to {\n    opacity: 0.0; } }\n\n@-moz-keyframes ax-mask-fade-out {\n  from {\n    opacity: 0.6; }\n  to {\n    opacity: 0.0; } }\n\n@keyframes ax-mask-fade-out {\n  from {\n    opacity: 0.6; }\n  to {\n    opacity: 0.0; } }\n\n.ax-masking {\n  -webkit-filter: blur(3px);\n  -webkit-transform: scale(0.96);\n  -moz-transform: scale(0.96);\n  -ms-transform: scale(0.96);\n  -o-transform: scale(0.96);\n  transform: scale(0.96);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0); }\n\n[data-ax6ui-mask] {\n  box-sizing: border-box;\n  z-index: 1000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  [data-ax6ui-mask] *,\n  [data-ax6ui-mask] *:before,\n  [data-ax6ui-mask] *:after {\n    box-sizing: border-box; }\n  [data-ax6ui-mask] .ax-mask-bg {\n    z-index: 1;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: 0.6; }\n  [data-ax6ui-mask] .ax-mask-content {\n    z-index: 2;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    display: table;\n    vertical-align: middle;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0px 1px 0px #000; }\n    [data-ax6ui-mask] .ax-mask-content * {\n      color: inherit; }\n    [data-ax6ui-mask] .ax-mask-content > div {\n      display: table-cell;\n      vertical-align: middle;\n      text-align: center; }\n  [data-ax6ui-mask].fade-out {\n    -webkit-animation: ax-mask-fade-out 0.25s;\n    -moz-animation: ax-mask-fade-out 0.25s;\n    animation: ax-mask-fade-out 0.25s;\n    opacity: 0.0; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlNYXNrL3N0eWxlLnNjc3M/ZTM1NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlNYXNrL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiaHRtbCIsImZuIiwibW9kdWxlUnVuIiwiJGJvZHkiLCJteU1hc2siLCJzZXRDb25maWciLCJ6SW5kZXgiLCJvblN0YXRlQ2hhbmdlZCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwiZmFkZU91dCIsIm9uIiwiZSIsImJ0biIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJwcm9jZXNzb3IiLCJtYXNrIiwib3BlbiIsImNvbnRlbnQiLCJ0YXJnZXQiLCJtb2R1bGVEZXN0cm95IiwiZGVzdG9yeSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLHdXQUFOOztBQVFBLElBQUlDLEtBQUssRUFBVDtBQUNBQSxHQUFHQyxTQUFILEdBQWUsVUFBVUMsS0FBVixFQUFpQjtBQUM5QjtBQUNBRixLQUFHRyxNQUFILEdBQVksc0JBQVo7QUFDQUgsS0FBR0csTUFBSCxDQUFVQyxTQUFWLENBQW9CO0FBQ2xCQyxZQUFRLElBRFU7QUFFbEJDLG9CQUFnQiwwQkFBWTtBQUMxQkMsY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDRDtBQUppQixHQUFwQjs7QUFPQVIsS0FBR0csTUFBSCxDQUFVTSxPQUFWLEdBQW9CLFlBQVk7QUFDOUJGLFlBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FSLE9BQUdHLE1BQUgsQ0FBVU8sT0FBVjtBQUNELEdBSEQ7O0FBS0FSLFFBQU1TLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFlBQWxCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQyxRQUFJQyxNQUFNRCxFQUFFRSxhQUFGLENBQWdCQyxZQUFoQixDQUE2QixVQUE3QixDQUFWO0FBQ0EsUUFBSUMsWUFBWTtBQUNkQyxVQURjLGtCQUNQO0FBQ0xqQixXQUFHRyxNQUFILENBQVVlLElBQVY7QUFDRCxPQUhhO0FBSWQsb0JBSmMseUJBSUc7QUFDZmxCLFdBQUdHLE1BQUgsQ0FBVWUsSUFBVixDQUFlO0FBQ2JDLG1CQUFTO0FBREksU0FBZjtBQUdELE9BUmE7QUFTZCxnQkFUYyxxQkFTRDtBQUNYbkIsV0FBR0csTUFBSCxDQUFVZSxJQUFWLENBQWU7QUFDYkUsa0JBQVEscUJBQUUsYUFBRjtBQURLLFNBQWY7QUFHRDtBQWJhLEtBQWhCOztBQWdCQSxRQUFJUCxPQUFPRyxTQUFYLEVBQXNCO0FBQ3BCQSxnQkFBVUgsR0FBVjtBQUNEO0FBQ0YsR0FyQkQ7QUFzQkQsQ0FyQ0Q7O0FBdUNBYixHQUFHcUIsYUFBSCxHQUFtQixVQUFVbkIsS0FBVixFQUFpQjtBQUNsQ0YsS0FBR0csTUFBSCxDQUFVbUIsT0FBVjtBQUNBdEIsS0FBR0csTUFBSCxHQUFZLElBQVo7QUFDQUQsUUFBTXFCLEdBQU4sQ0FBVSxPQUFWO0FBQ0QsQ0FKRDs7a0JBTWU7QUFDYnhCLFFBQU1BLElBRE87QUFFYkMsTUFBSUE7QUFGUyxDOzs7Ozs7O0FDMURmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxVQUFVLG1CQUFtQixFQUFFLFFBQVEsbUJBQW1CLEVBQUUsRUFBRSw2QkFBNkIsVUFBVSxtQkFBbUIsRUFBRSxRQUFRLG1CQUFtQixFQUFFLEVBQUUsd0JBQXdCLFVBQVUsbUJBQW1CLEVBQUUsUUFBUSxtQkFBbUIsRUFBRSxFQUFFLHlDQUF5QyxVQUFVLG1CQUFtQixFQUFFLFFBQVEsbUJBQW1CLEVBQUUsRUFBRSxzQ0FBc0MsVUFBVSxtQkFBbUIsRUFBRSxRQUFRLG1CQUFtQixFQUFFLEVBQUUsaUNBQWlDLFVBQVUsbUJBQW1CLEVBQUUsUUFBUSxtQkFBbUIsRUFBRSxFQUFFLGlCQUFpQiw4QkFBOEIsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLDJCQUEyQixxQ0FBcUMsa0NBQWtDLGlDQUFpQyxnQ0FBZ0MsNkJBQTZCLEVBQUUsdUJBQXVCLDJCQUEyQixrQkFBa0Isb0JBQW9CLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLEVBQUUsc0ZBQXNGLDZCQUE2QixFQUFFLG1DQUFtQyxpQkFBaUIseUJBQXlCLGdCQUFnQixlQUFlLGtCQUFrQixtQkFBbUIsdUJBQXVCLG1CQUFtQixFQUFFLHdDQUF3QyxpQkFBaUIseUJBQXlCLGdCQUFnQixlQUFlLGtCQUFrQixtQkFBbUIscUJBQXFCLDZCQUE2Qix5QkFBeUIsa0JBQWtCLG9DQUFvQyxFQUFFLDRDQUE0Qyx1QkFBdUIsRUFBRSxnREFBZ0QsNEJBQTRCLCtCQUErQiwyQkFBMkIsRUFBRSxnQ0FBZ0MsZ0RBQWdELDZDQUE2Qyx3Q0FBd0MsbUJBQW1CLEVBQUU7O0FBRXBpRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxbWluXCI7XG5pbXBvcnQgeyBBWDZVSU1hc2sgYXMgTWFzayB9IGZyb20gXCJheDZ1aVwiO1xuaW1wb3J0IFwiYXg2dWkvQVg2VUlNYXNrL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgaHRtbCA9IGBcbjxkaXYgaWQ9XCJtYWtpbmctZGl2XCIgc3R5bGU9XCJoZWlnaHQ6NTAwcHg7YmFja2dyb3VuZDogI2NjYztcIj5tYWtpbmcgZGl2PC9kaXY+XG48YnIvPlxuPGEgY2xhc3M9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgZGF0YS1idG49XCJtYXNrXCI+T3BlbiBNYXNrPC9hPlxuPGEgY2xhc3M9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgZGF0YS1idG49XCJtYXNrLWNvbnRlbnRcIj5PcGVuIE1hc2sod2l0aCBjb250ZW50KTwvYT5cbjxhIGNsYXNzPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIGRhdGEtYnRuPVwibWFzay1kaXZcIj5PcGVuIE1hc2sobWFza2luZyk8L2E+XG5gO1xuXG5sZXQgZm4gPSB7fTtcbmZuLm1vZHVsZVJ1biA9IGZ1bmN0aW9uICgkYm9keSkge1xuICAvLy8vL35+fn5+fn5+fn5+fn5+fn5+flxuICBmbi5teU1hc2sgPSBuZXcgTWFzaygpO1xuICBmbi5teU1hc2suc2V0Q29uZmlnKHtcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZm4ubXlNYXNrLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgZm4ubXlNYXNrLmZhZGVPdXQoKTtcbiAgfTtcblxuICAkYm9keS5vbihcImNsaWNrXCIsICdbZGF0YS1idG5dJywgKGUpID0+IHtcbiAgICBsZXQgYnRuID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtYnRuXCIpO1xuICAgIGxldCBwcm9jZXNzb3IgPSB7XG4gICAgICBtYXNrKCkge1xuICAgICAgICBmbi5teU1hc2sub3BlbigpO1xuICAgICAgfSxcbiAgICAgIFwibWFzay1jb250ZW50XCIoKSB7XG4gICAgICAgIGZuLm15TWFzay5vcGVuKHtcbiAgICAgICAgICBjb250ZW50OiBcIk1BU0sgQ09OVEVOVFwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFwibWFzay1kaXZcIigpIHtcbiAgICAgICAgZm4ubXlNYXNrLm9wZW4oe1xuICAgICAgICAgIHRhcmdldDogJCgnI21ha2luZy1kaXYnKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGJ0biBpbiBwcm9jZXNzb3IpIHtcbiAgICAgIHByb2Nlc3NvcltidG5dKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZuLm1vZHVsZURlc3Ryb3kgPSBmdW5jdGlvbiAoJGJvZHkpIHtcbiAgZm4ubXlNYXNrLmRlc3RvcnkoKTtcbiAgZm4ubXlNYXNrID0gbnVsbDtcbiAgJGJvZHkub2ZmKFwiY2xpY2tcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGh0bWw6IGh0bWwsXG4gIGZuOiBmblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hc2suanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSU1hc2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgYXgtbWFzayB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuNjsgfSB9XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGF4LW1hc2sge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuMDsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjY7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXgtbWFzayB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDAuNjsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGF4LW1hc2stZmFkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheC1tYXNrLWZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwLjY7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMC4wOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGF4LW1hc2stZmFkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbi5heC1tYXNraW5nIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7IH1cXG5cXG5bZGF0YS1heDZ1aS1tYXNrXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgW2RhdGEtYXg2dWktbWFza10gKixcXG4gIFtkYXRhLWF4NnVpLW1hc2tdICo6YmVmb3JlLFxcbiAgW2RhdGEtYXg2dWktbWFza10gKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIFtkYXRhLWF4NnVpLW1hc2tdIC5heC1tYXNrLWJnIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBvcGFjaXR5OiAwLjY7IH1cXG4gIFtkYXRhLWF4NnVpLW1hc2tdIC5heC1tYXNrLWNvbnRlbnQge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzAwMDsgfVxcbiAgICBbZGF0YS1heDZ1aS1tYXNrXSAuYXgtbWFzay1jb250ZW50ICoge1xcbiAgICAgIGNvbG9yOiBpbmhlcml0OyB9XFxuICAgIFtkYXRhLWF4NnVpLW1hc2tdIC5heC1tYXNrLWNvbnRlbnQgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIFtkYXRhLWF4NnVpLW1hc2tdLmZhZGUtb3V0IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGF4LW1hc2stZmFkZS1vdXQgMC4yNXM7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBheC1tYXNrLWZhZGUtb3V0IDAuMjVzO1xcbiAgICBhbmltYXRpb246IGF4LW1hc2stZmFkZS1vdXQgMC4yNXM7XFxuICAgIG9wYWNpdHk6IDAuMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSU1hc2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==