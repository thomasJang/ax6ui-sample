webpackJsonp([11],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ax6ui = __webpack_require__(16);

__webpack_require__(74);

var html = "\n<a class=\"waves-effect waves-light btn\" data-btn=\"alert\">alert</a>\n<a class=\"waves-effect waves-light btn\" data-btn=\"confirm\">confirm</a>\n<a class=\"waves-effect waves-light btn\" data-btn=\"prompt\">prompt</a>\n<hr/>\n<a class=\"waves-effect waves-light btn\" data-btn=\"dblalert\">double alert call</a>\n<a class=\"waves-effect waves-light btn\" data-btn=\"dblconfirm\">double confirm call</a>\n";
var fn = {
  moduleRun: function moduleRun($body) {

    var dialog = new _ax6ui.AX6UIDialog();
    dialog.setConfig({});

    $body.on("click", '[data-btn]', function (e) {
      var btn = e.currentTarget.getAttribute("data-btn");
      var processor = {
        alert: function alert() {
          dialog.alert({
            msg: "alert " + new Date(),
            onStateChanged: function onStateChanged(res) {
              if (res.state == "open") {
                //$body.append($btn);
              }
              if (res.state == "close") {
                //$btn.remove();
              }
            }
          });
        },
        confirm: function confirm() {
          dialog.confirm({
            title: "예/아니오",
            msg: "당신은 개발자 입니까?",
            btns: {
              Y: { label: "예" },
              N: { label: "아니오" }
            }
          }, function (res) {
            console.log(res);
          });
        },
        prompt: function prompt() {
          dialog.prompt({
            title: "prompt",
            msg: '다음의 값을 입력하세요.',
            input: {
              data1: { label: "data1의 라벨", type: "password" },
              data2: { label: "data2의 라벨" }
            }
          }, function () {
            console.log(this);
          });
        },
        dblalert: function dblalert() {
          dialog.alert({
            msg: "alert " + (new Date() + " close 1s later"),
            onStateChanged: function onStateChanged(res) {
              if (res.state == "open") {
                //$body.append($btn);
              }
              if (res.state == "close") {
                //$btn.remove();
              }
            }
          });

          setTimeout(function () {
            dialog.close();
            dialog.alert({
              msg: "alert " + new Date()
            });
          }, 1000);
        },
        dblconfirm: function dblconfirm() {
          dialog.confirm({
            title: "예/아니오",
            msg: "당신은 개발자 입니까? 버튼을 누르면 한번 더 물어봅니다.",
            btns: {
              Y: { label: "예" },
              N: { label: "아니오" }
            }
          }, function (res) {
            console.log(res);
          });

          dialog.confirm({
            title: "예/아니오",
            msg: "당신은 개발자 입니까?",
            btns: {
              K: { label: "예" },
              S: { label: "아니오" }
            }
          }, function (res) {
            console.log(res);
          });
        }
      };

      if (btn in processor) {
        processor[btn]();
      }
    });
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@-webkit-keyframes ax-dialog {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: scaleX(1); }\n  0.1% {\n    opacity: 0.0;\n    -webkit-transform: scaleX(1.3); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: scaleX(1); } }\n\n@-moz-keyframes ax-dialog {\n  0% {\n    opacity: 0.0;\n    -moz-transform: scaleX(1); }\n  0.1% {\n    opacity: 0.0;\n    -moz-transform: scaleX(1.3); }\n  100% {\n    opacity: 1.0;\n    -moz-transform: scaleX(1); } }\n\n@keyframes ax-dialog {\n  0% {\n    opacity: 0.0;\n    -webkit-transform: scaleX(1);\n    -moz-transform: scaleX(1);\n    -ms-transform: scaleX(1);\n    -o-transform: scaleX(1);\n    transform: scaleX(1); }\n  0.1% {\n    opacity: 0.0;\n    -webkit-transform: scaleX(1.3);\n    -moz-transform: scaleX(1.3);\n    -ms-transform: scaleX(1.3);\n    -o-transform: scaleX(1.3);\n    transform: scaleX(1.3); }\n  100% {\n    opacity: 1.0;\n    -webkit-transform: scaleX(1);\n    -moz-transform: scaleX(1);\n    -ms-transform: scaleX(1);\n    -o-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n@-webkit-keyframes ax-dialog-destroy {\n  from {\n    -webkit-transform: translate(0, 0);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(0, 50%);\n    opacity: 0.0; } }\n\n@-moz-keyframes ax-dialog-destroy {\n  from {\n    -moz-transform: translate(0, 0);\n    opacity: 1.0; }\n  to {\n    -moz-transform: translate(0, 50%);\n    opacity: 0.0; } }\n\n@keyframes ax-dialog-destroy {\n  from {\n    -webkit-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(0, 50%);\n    -moz-transform: translate(0, 50%);\n    -ms-transform: translate(0, 50%);\n    -o-transform: translate(0, 50%);\n    transform: translate(0, 50%);\n    opacity: 0.0; } }\n\n[data-ax6ui-dialog] {\n  -webkit-animation: ax-dialog 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -moz-animation: ax-dialog 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  animation: ax-dialog 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  box-sizing: border-box;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.175);\n  z-index: 2000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  border: 1px solid #ddd; }\n  [data-ax6ui-dialog] .ax-dialog-header {\n    font-weight: 600;\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent; }\n    [data-ax6ui-dialog] .ax-dialog-header .badge {\n      font-size: 0.8em;\n      color: #f5f5f5;\n      background-color: #333; }\n  [data-ax6ui-dialog] .ax-dialog-body {\n    padding: 15px;\n    text-align: center; }\n    [data-ax6ui-dialog] .ax-dialog-body .ax-dialog-msg {\n      padding-top: 15px;\n      padding-bottom: 15px; }\n    [data-ax6ui-dialog] .ax-dialog-body .ax-dialog-prompt {\n      text-align: left;\n      padding-bottom: 7.5px; }\n    [data-ax6ui-dialog] .ax-dialog-body .ax-dialog-buttons {\n      margin-top: 15px; }\n      [data-ax6ui-dialog] .ax-dialog-body .ax-dialog-buttons button:not(:last-child) {\n        margin-right: 3px; }\n    [data-ax6ui-dialog] .ax-dialog-body [data-dialog-els=\"additional-content\"] {\n      margin-top: 15px; }\n  [data-ax6ui-dialog] .ax-dialog-header {\n    color: #333;\n    background: #f5f5f5; }\n    [data-ax6ui-dialog] .ax-dialog-header .badge {\n      color: #f5f5f5;\n      background-color: #333; }\n  [data-ax6ui-dialog].destroy {\n    -webkit-animation: ax-dialog-destroy 0.15s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards;\n    -moz-animation: ax-dialog-destroy 0.15s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards;\n    animation: ax-dialog-destroy 0.15s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSURpYWxvZy9zdHlsZS5zY3NzP2YzNzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJRGlhbG9nL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiaHRtbCIsImZuIiwibW9kdWxlUnVuIiwiJGJvZHkiLCJkaWFsb2ciLCJzZXRDb25maWciLCJvbiIsImUiLCJidG4iLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwicHJvY2Vzc29yIiwiYWxlcnQiLCJtc2ciLCJEYXRlIiwib25TdGF0ZUNoYW5nZWQiLCJyZXMiLCJzdGF0ZSIsImNvbmZpcm0iLCJ0aXRsZSIsImJ0bnMiLCJZIiwibGFiZWwiLCJOIiwiY29uc29sZSIsImxvZyIsInByb21wdCIsImlucHV0IiwiZGF0YTEiLCJ0eXBlIiwiZGF0YTIiLCJkYmxhbGVydCIsInNldFRpbWVvdXQiLCJjbG9zZSIsImRibGNvbmZpcm0iLCJLIiwiUyIsIm1vZHVsZURlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQUlBLGthQUFKO0FBUUEsSUFBSUMsS0FBSztBQUNQQyxhQUFXLG1CQUFVQyxLQUFWLEVBQWlCOztBQUUxQixRQUFJQyxTQUFTLHdCQUFiO0FBQ0FBLFdBQU9DLFNBQVAsQ0FBaUIsRUFBakI7O0FBRUFGLFVBQU1HLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFlBQWxCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQyxVQUFJQyxNQUFNRCxFQUFFRSxhQUFGLENBQWdCQyxZQUFoQixDQUE2QixVQUE3QixDQUFWO0FBQ0EsVUFBSUMsWUFBWTtBQUNkQyxhQURjLG1CQUNOO0FBQ05SLGlCQUFPUSxLQUFQLENBQWE7QUFDWEMsaUJBQUssV0FBVyxJQUFJQyxJQUFKLEVBREw7QUFFWEMsNEJBQWdCLHdCQUFVQyxH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QUF3Riw0QkFBNEIsRUFBRSxvRkFBb0YseUJBQXlCLEVBQUUsMkNBQTJDLGtCQUFrQiwwQkFBMEIsRUFBRSxvREFBb0QsdUJBQXVCLCtCQUErQixFQUFFLGlDQUFpQyxpR0FBaUcsOEZBQThGLHlGQUF5RixFQUFFOztBQUVuN0giLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBWDZVdGlsIGFzIFUsIEFYNlVJRGlhbG9nIGFzIERpYWxvZyB9IGZyb20gXCJheDZ1aVwiO1xuaW1wb3J0IFwiYXg2dWkvQVg2VUlEaWFsb2cvc3R5bGUuc2Nzc1wiO1xuXG5sZXQgaHRtbCA9IGBcbjxhIGNsYXNzPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIGRhdGEtYnRuPVwiYWxlcnRcIj5hbGVydDwvYT5cbjxhIGNsYXNzPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIGRhdGEtYnRuPVwiY29uZmlybVwiPmNvbmZpcm08L2E+XG48YSBjbGFzcz1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBkYXRhLWJ0bj1cInByb21wdFwiPnByb21wdDwvYT5cbjxoci8+XG48YSBjbGFzcz1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBkYXRhLWJ0bj1cImRibGFsZXJ0XCI+ZG91YmxlIGFsZXJ0IGNhbGw8L2E+XG48YSBjbGFzcz1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBkYXRhLWJ0bj1cImRibGNvbmZpcm1cIj5kb3VibGUgY29uZmlybSBjYWxsPC9hPlxuYDtcbmxldCBmbiA9IHtcbiAgbW9kdWxlUnVuOiBmdW5jdGlvbiAoJGJvZHkpIHtcblxuICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XG4gICAgZGlhbG9nLnNldENvbmZpZyh7fSk7XG5cbiAgICAkYm9keS5vbihcImNsaWNrXCIsICdbZGF0YS1idG5dJywgKGUpID0+IHtcbiAgICAgIGxldCBidG4gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1idG5cIik7XG4gICAgICBsZXQgcHJvY2Vzc29yID0ge1xuICAgICAgICBhbGVydCgpIHtcbiAgICAgICAgICBkaWFsb2cuYWxlcnQoe1xuICAgICAgICAgICAgbXNnOiBcImFsZXJ0IFwiICsgbmV3IERhdGUoKSxcbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMuc3RhdGUgPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgICAgICAvLyRib2R5LmFwcGVuZCgkYnRuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocmVzLnN0YXRlID09IFwiY2xvc2VcIikge1xuICAgICAgICAgICAgICAgIC8vJGJ0bi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25maXJtKCkge1xuICAgICAgICAgIGRpYWxvZy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIuyYiC/slYTri4jsmKRcIixcbiAgICAgICAgICAgIG1zZzogXCLri7nsi6DsnYAg6rCc67Cc7J6QIOyeheuLiOq5jD9cIixcbiAgICAgICAgICAgIGJ0bnM6IHtcbiAgICAgICAgICAgICAgWToge2xhYmVsOiBcIuyYiFwifSxcbiAgICAgICAgICAgICAgTjoge2xhYmVsOiBcIuyVhOuLiOyYpFwifVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb21wdCgpIHtcbiAgICAgICAgICBkaWFsb2cucHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbXNnOiAn64uk7J2M7J2YIOqwkuydhCDsnoXroKXtlZjshLjsmpQuJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgIGRhdGExOiB7bGFiZWw6IFwiZGF0YTHsnZgg652867KoXCIsIHR5cGU6IFwicGFzc3dvcmRcIn0sXG4gICAgICAgICAgICAgIGRhdGEyOiB7bGFiZWw6IFwiZGF0YTLsnZgg652867KoXCJ9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRibGFsZXJ0KCkge1xuICAgICAgICAgIGRpYWxvZy5hbGVydCh7XG4gICAgICAgICAgICBtc2c6IFwiYWxlcnQgXCIgKyAobmV3IERhdGUoKSArIFwiIGNsb3NlIDFzIGxhdGVyXCIpLFxuICAgICAgICAgICAgb25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0ZSA9PSBcIm9wZW5cIikge1xuICAgICAgICAgICAgICAgIC8vJGJvZHkuYXBwZW5kKCRidG4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZXMuc3RhdGUgPT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8kYnRuLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgZGlhbG9nLmFsZXJ0KHtcbiAgICAgICAgICAgICAgbXNnOiBcImFsZXJ0IFwiICsgKG5ldyBEYXRlKCkpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBkYmxjb25maXJtKCkge1xuICAgICAgICAgIGRpYWxvZy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIuyYiC/slYTri4jsmKRcIixcbiAgICAgICAgICAgIG1zZzogXCLri7nsi6DsnYAg6rCc67Cc7J6QIOyeheuLiOq5jD8g67KE7Yq87J2EIOuIhOultOuptCDtlZzrsogg642UIOusvOyWtOu0heuLiOuLpC5cIixcbiAgICAgICAgICAgIGJ0bnM6IHtcbiAgICAgICAgICAgICAgWToge2xhYmVsOiBcIuyYiFwifSxcbiAgICAgICAgICAgICAgTjoge2xhYmVsOiBcIuyVhOuLiOyYpFwifVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBkaWFsb2cuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCLsmIgv7JWE64uI7JikXCIsXG4gICAgICAgICAgICBtc2c6IFwi64u57Iug7J2AIOqwnOuwnOyekCDsnoXri4jquYw/XCIsXG4gICAgICAgICAgICBidG5zOiB7XG4gICAgICAgICAgICAgIEs6IHtsYWJlbDogXCLsmIhcIn0sXG4gICAgICAgICAgICAgIFM6IHtsYWJlbDogXCLslYTri4jsmKRcIn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgaWYgKGJ0biBpbiBwcm9jZXNzb3IpIHtcbiAgICAgICAgcHJvY2Vzc29yW2J0bl0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9LFxuICBtb2R1bGVEZXN0cm95OiBmdW5jdGlvbiAoJGJvZHkpIHtcbiAgICAkYm9keS5vZmYoXCJjbGlja1wiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBodG1sOiBodG1sLFxuICBmbjogZm5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhbG9nLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlEaWFsb2cvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgYXgtZGlhbG9nIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XFxuICAwLjElIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxLjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBheC1kaWFsb2cge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjA7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXG4gIDAuMSUge1xcbiAgICBvcGFjaXR5OiAwLjA7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMS4zKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEuMDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBheC1kaWFsb2cge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XFxuICAwLjElIHtcXG4gICAgb3BhY2l0eTogMC4wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMyk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMS4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDEuMyk7XFxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKDEuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxLjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXgtZGlhbG9nLWRlc3Ryb3kge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIG9wYWNpdHk6IDEuMDsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICAgIG9wYWNpdHk6IDAuMDsgfSB9XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGF4LWRpYWxvZy1kZXN0cm95IHtcXG4gIGZyb20ge1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBvcGFjaXR5OiAxLjA7IH1cXG4gIHRvIHtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXgtZGlhbG9nLWRlc3Ryb3kge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBvcGFjaXR5OiAxLjA7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbiAgICBvcGFjaXR5OiAwLjA7IH0gfVxcblxcbltkYXRhLWF4NnVpLWRpYWxvZ10ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGF4LWRpYWxvZyAwLjE1cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XFxuICAtbW96LWFuaW1hdGlvbjogYXgtZGlhbG9nIDAuMTVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcXG4gIGFuaW1hdGlvbjogYXgtZGlhbG9nIDAuMTVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xcbiAgei1pbmRleDogMjAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgfVxcbiAgW2RhdGEtYXg2dWktZGlhbG9nXSAuYXgtZGlhbG9nLWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XFxuICAgIFtkYXRhLWF4NnVpLWRpYWxvZ10gLmF4LWRpYWxvZy1oZWFkZXIgLmJhZGdlIHtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cXG4gIFtkYXRhLWF4NnVpLWRpYWxvZ10gLmF4LWRpYWxvZy1ib2R5IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIFtkYXRhLWF4NnVpLWRpYWxvZ10gLmF4LWRpYWxvZy1ib2R5IC5heC1kaWFsb2ctbXNnIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDsgfVxcbiAgICBbZGF0YS1heDZ1aS1kaWFsb2ddIC5heC1kaWFsb2ctYm9keSAuYXgtZGlhbG9nLXByb21wdCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNy41cHg7IH1cXG4gICAgW2RhdGEtYXg2dWktZGlhbG9nXSAuYXgtZGlhbG9nLWJvZHkgLmF4LWRpYWxvZy1idXR0b25zIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuICAgICAgW2RhdGEtYXg2dWktZGlhbG9nXSAuYXgtZGlhbG9nLWJvZHkgLmF4LWRpYWxvZy1idXR0b25zIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4OyB9XFxuICAgIFtkYXRhLWF4NnVpLWRpYWxvZ10gLmF4LWRpYWxvZy1ib2R5IFtkYXRhLWRpYWxvZy1lbHM9XFxcImFkZGl0aW9uYWwtY29udGVudFxcXCJdIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuICBbZGF0YS1heDZ1aS1kaWFsb2ddIC5heC1kaWFsb2ctaGVhZGVyIHtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cXG4gICAgW2RhdGEtYXg2dWktZGlhbG9nXSAuYXgtZGlhbG9nLWhlYWRlciAuYmFkZ2Uge1xcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cXG4gIFtkYXRhLWF4NnVpLWRpYWxvZ10uZGVzdHJveSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBheC1kaWFsb2ctZGVzdHJveSAwLjE1cyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSBmb3J3YXJkcztcXG4gICAgLW1vei1hbmltYXRpb246IGF4LWRpYWxvZy1kZXN0cm95IDAuMTVzIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpIGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IGF4LWRpYWxvZy1kZXN0cm95IDAuMTVzIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpIGZvcndhcmRzOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2F4NnVpL0FYNlVJRGlhbG9nL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMSJdLCJzb3VyY2VSb290IjoiIn0=