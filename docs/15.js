webpackJsonp([15],{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _ax6ui = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = "\n<div class=\"row\">\n    <div class=\"col s12 m6\">\n        <label for=\"money_formatter\">Money Formatter</label>\n        <input type=\"text\" id=\"money_formatter\" data-ax6formatter=\"money\" value=\"\" />\n    </div>\n    <div class=\"col s12 m6\">\n        <button class=\"btn\" data-btn=\"bind-money\">bind</button>\n        <button class=\"btn\" data-btn=\"unbind-money\">unbind</button>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s12\">\n        <label for=\"money_int_formatter\">Money(int) Formatter</label>\n        <input type=\"text\" id=\"money_int_formatter\" data-ax6formatter=\"money(int)\" value=\"\" />\n        \n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s12 m6\">\n        <label for=\"date_formatter\">Date Formatter</label>\n        <input type=\"text\" id=\"date_formatter\" data-ax6formatter=\"date\" value=\"\" />\n        \n    </div>\n    <div class=\"col s12 m6\">\n        <button class=\"btn\" data-btn=\"bind-date\">bind</button>\n        <button class=\"btn\" data-btn=\"unbind-date\">unbind</button>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s12\">\n        <label for=\"date_time_formatter\">Date(time) Formatter</label>\n        <input type=\"text\" id=\"date_time_formatter\" data-ax6formatter=\"date(time)\" value=\"\" />\n        \n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s12\">\n        <label for=\"time_formatter\">Time Formatter</label>\n        <input type=\"text\" id=\"time_formatter\" data-ax6formatter=\"time\" value=\"\" />\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col s12\">\n        <label for=\"my_formatter\">myPattern</label>\n        <input type=\"text\" id=\"my_formatter\" data-ax6formatter=\"myPattern\" value=\"\" />\n    </div>\n</div>\n";
var fn = {
  moduleRun: function moduleRun($body) {
    var formatter = new _ax6ui.AX6UIFormatter();

    formatter.bind({
      target: (0, _jqmin2.default)('[data-ax6formatter="money(int)"]')
    });
    formatter.bind({
      target: (0, _jqmin2.default)('[data-ax6formatter="date(time)"]')
    });
    formatter.bind({
      target: (0, _jqmin2.default)('[data-ax6formatter="time"]')
    });

    // 사용자 정의 포멧터 정의
    _ax6ui.AX6UIFormatter.setFormatter({
      "myPattern": {
        getEnterableKeyCodes: function getEnterableKeyCodes(_opts) {
          var enterableKeyCodes = {
            '189': '-' // eventKeyCode
          };
          return Object.assign(enterableKeyCodes, _ax6ui.AX6UIFormatter.getCtrlKeys(), _ax6ui.AX6UIFormatter.getNumKeys());
        },
        getPatternValue: function getPatternValue(_opts, optIdx, e, val, eType) {
          val = val.replace(/\D/g, "");
          var regExpPattern = /^([0-9]{2})\-?([0-9]{2})?\-?([0-9]{2})?\-?([0-9]{2})?/;
          return val.replace(regExpPattern, function (a, b) {
            var nval = [arguments[1]];
            if (arguments[2]) nval.push(arguments[2]);
            if (arguments[3]) nval.push(arguments[3]);
            if (arguments[4]) nval.push(arguments[4]);
            return nval.join("-");
          });
        }
      }
    });

    formatter.bind({
      target: (0, _jqmin2.default)('[data-ax6formatter="myPattern"]')
    });

    $body.on("click", '[data-btn]', function () {
      var btn = this.getAttribute("data-btn");
      var processor = {
        "bind-money": function bindMoney() {
          formatter.bind({
            target: (0, _jqmin2.default)('[data-ax6formatter="money"]')
          });
        },
        "unbind-money": function unbindMoney() {
          formatter.unbind({
            target: (0, _jqmin2.default)('[data-ax6formatter="money"]')
          });
        },
        "bind-date": function bindDate() {
          formatter.bind({
            target: (0, _jqmin2.default)('[data-ax6formatter="date"]')
          });
        },
        "unbind-date": function unbindDate() {
          formatter.unbind({
            target: (0, _jqmin2.default)('[data-ax6formatter="date"]')
          });
        }
      };
      processor[btn]();
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0dGVyLmpzIl0sIm5hbWVzIjpbImh0bWwiLCJmbiIsIm1vZHVsZVJ1biIsIiRib2R5IiwiZm9ybWF0dGVyIiwiYmluZCIsInRhcmdldCIsInNldEZvcm1hdHRlciIsImdldEVudGVyYWJsZUtleUNvZGVzIiwiX29wdHMiLCJlbnRlcmFibGVLZXlDb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsImdldEN0cmxLZXlzIiwiZ2V0TnVtS2V5cyIsImdldFBhdHRlcm5WYWx1ZSIsIm9wdElkeCIsImUiLCJ2YWwiLCJlVHlwZSIsInJlcGxhY2UiLCJyZWdFeHBQYXR0ZXJuIiwiYSIsImIiLCJudmFsIiwiYXJndW1lbnRzIiwicHVzaCIsImpvaW4iLCJvbiIsImJ0biIsImdldEF0dHJpYnV0ZSIsInByb2Nlc3NvciIsInVuYmluZCIsIm1vZHVsZURlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFJQSw2eERBQUo7QUFzREEsSUFBSUMsS0FBSztBQUNQQyxhQUFXLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFFBQUlDLFlBQVksMkJBQWhCOztBQUVBQSxjQUFVQyxJQUFWLENBQWU7QUFDYkMsY0FBUSxxQkFBRSxrQ0FBRjtBQURLLEtBQWY7QUFHQUYsY0FBVUMsSUFBVixDQUFlO0FBQ2JDLGNBQVEscUJBQUUsa0NBQUY7QUFESyxLQUFmO0FBR0FGLGNBQVVDLElBQVYsQ0FBZTtBQUNiQyxjQUFRLHFCQUFFLDRCQUFGO0FBREssS0FBZjs7QUFJQTtBQUNBLDBCQUFVQyxZQUFWLENBQXVCO0FBQ3JCLG1CQUFhO0FBQ1hDLDhCQUFzQiw4QkFBVUMsS0FBVixFQUFpQjtBQUNyQyxjQUFJQyxvQkFBb0I7QUFDdEIsbUJBQU8sR0FEZSxDQUNYO0FBRFcsV0FBeEI7QUFHQSxpQkFBT0MsT0FBT0MsTUFBUCxDQUNMRixpQkFESyxFQUVMLHNCQUFVRyxXQUFWLEVBRkssRUFHTCxzQkFBVUMsVUFBVixFQUhLLENBQVA7QUFLRCxTQVZVO0FBV1hDLHlCQUFpQix5QkFBVU4sS0FBVixFQUFpQk8sTUFBakIsRUFBeUJDLENBQXpCLEVBQTRCQyxHQUE1QixFQUFpQ0MsS0FBakMsRUFBd0M7QUFDdkRELGdCQUFNQSxJQUFJRSxPQUFKLENBQVksS0FBWixFQUFtQixFQUFuQixDQUFOO0FBQ0EsY0FBSUMsZ0JBQWdCLHVEQUFwQjtBQUNBLGlCQUFPSCxJQUFJRSxPQUFKLENBQVlDLGFBQVosRUFBMkIsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hELGdCQUFJQyxPQUFPLENBQUNDLFVBQVUsQ0FBVixDQUFELENBQVg7QUFDQSxnQkFBSUEsVUFBVSxDQUFWLENBQUosRUFBa0JELEtBQUtFLElBQUwsQ0FBVUQsVUFBVSxDQUFWLENBQVY7QUFDbEIsZ0JBQUlBLFVBQVUsQ0FBVixDQUFKLEVBQWtCRCxLQUFLRSxJQUFMLENBQVVELFVBQVUsQ0FBVixDQUFWO0FBQ2xCLGdCQUFJQSxVQUFVLENBQVYsQ0FBSixFQUFrQkQsS0FBS0UsSUFBTCxDQUFVRCxVQUFVLENBQVYsQ0FBVjtBQUNsQixtQkFBT0QsS0FBS0csSUFBTCxDQUFVLEdBQVYsQ0FBUDtBQUNELFdBTk0sQ0FBUDtBQU9EO0FBckJVO0FBRFEsS0FBdkI7O0FBMEJBdkIsY0FBVUMsSUFBVixDQUFlO0FBQ2JDLGNBQVEscUJBQUUsaUNBQUY7QUFESyxLQUFmOztBQUlBSCxVQUFNeUIsRUFBTixDQUFTLE9BQVQsRUFBa0IsWUFBbEIsRUFBZ0MsWUFBWTtBQUMxQyxVQUFJQyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBVjtBQUNBLFVBQUlDLFlBQVk7QUFDZCxvQkFEYyx1QkFDQztBQUNiM0Isb0JBQVVDLElBQVYsQ0FBZTtBQUNiQyxvQkFBUSxxQkFBRSw2QkFBRjtBQURLLFdBQWY7QUFHRCxTQUxhO0FBTWQsc0JBTmMseUJBTUc7QUFDZkYsb0JBQVU0QixNQUFWLENBQWlCO0FBQ2YxQixvQkFBUSxxQkFBRSw2QkFBRjtBQURPLFdBQWpCO0FBR0QsU0FWYTtBQVdkLG1CQVhjLHNCQVdBO0FBQ1pGLG9CQUFVQyxJQUFWLENBQWU7QUFDYkMsb0JBQVEscUJBQUUsNEJBQUY7QUFESyxXQUFmO0FBR0QsU0FmYTtBQWdCZCxxQkFoQmMsd0JBZ0JFO0FBQ2RGLG9CQUFVNEIsTUFBVixDQUFpQjtBQUNmMUIsb0JBQVEscUJBQUUsNEJBQUY7QUFETyxXQUFqQjtBQUdEO0FBcEJhLE9BQWhCO0FBc0JBeUIsZ0JBQVVGLEdBQVY7QUFDRCxLQXpCRDtBQTBCRCxHQXZFTTtBQXdFUEksaUJBQWUsdUJBQVU5QixLQUFWLEVBQWlCO0FBQzlCQSxVQUFNK0IsR0FBTixDQUFVLE9BQVY7QUFDRDtBQTFFTSxDQUFUOztrQkE2RWU7QUFDYmxDLFFBQU1BLElBRE87QUFFYkMsTUFBSUE7QUFGUyxDIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxbWluXCI7XG5pbXBvcnQgeyBBWDZVSUZvcm1hdHRlciBhcyBGb3JtYXR0ZXIgfSBmcm9tIFwiYXg2dWlcIjtcblxuXG5sZXQgaHRtbCA9IGBcbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtNlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibW9uZXlfZm9ybWF0dGVyXCI+TW9uZXkgRm9ybWF0dGVyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb25leV9mb3JtYXR0ZXJcIiBkYXRhLWF4NmZvcm1hdHRlcj1cIm1vbmV5XCIgdmFsdWU9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyIG02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBkYXRhLWJ0bj1cImJpbmQtbW9uZXlcIj5iaW5kPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBkYXRhLWJ0bj1cInVuYmluZC1tb25leVwiPnVuYmluZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibW9uZXlfaW50X2Zvcm1hdHRlclwiPk1vbmV5KGludCkgRm9ybWF0dGVyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb25leV9pbnRfZm9ybWF0dGVyXCIgZGF0YS1heDZmb3JtYXR0ZXI9XCJtb25leShpbnQpXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICBcbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBzMTIgbTZcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVfZm9ybWF0dGVyXCI+RGF0ZSBGb3JtYXR0ZXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGVfZm9ybWF0dGVyXCIgZGF0YS1heDZmb3JtYXR0ZXI9XCJkYXRlXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtNlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgZGF0YS1idG49XCJiaW5kLWRhdGVcIj5iaW5kPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBkYXRhLWJ0bj1cInVuYmluZC1kYXRlXCI+dW5iaW5kPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlX3RpbWVfZm9ybWF0dGVyXCI+RGF0ZSh0aW1lKSBGb3JtYXR0ZXI8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGVfdGltZV9mb3JtYXR0ZXJcIiBkYXRhLWF4NmZvcm1hdHRlcj1cImRhdGUodGltZSlcIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGltZV9mb3JtYXR0ZXJcIj5UaW1lIEZvcm1hdHRlcjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGltZV9mb3JtYXR0ZXJcIiBkYXRhLWF4NmZvcm1hdHRlcj1cInRpbWVcIiB2YWx1ZT1cIlwiIC8+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJteV9mb3JtYXR0ZXJcIj5teVBhdHRlcm48L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm15X2Zvcm1hdHRlclwiIGRhdGEtYXg2Zm9ybWF0dGVyPVwibXlQYXR0ZXJuXCIgdmFsdWU9XCJcIiAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gO1xubGV0IGZuID0ge1xuICBtb2R1bGVSdW46IGZ1bmN0aW9uICgkYm9keSkge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgRm9ybWF0dGVyKCk7XG5cbiAgICBmb3JtYXR0ZXIuYmluZCh7XG4gICAgICB0YXJnZXQ6ICQoJ1tkYXRhLWF4NmZvcm1hdHRlcj1cIm1vbmV5KGludClcIl0nKVxuICAgIH0pO1xuICAgIGZvcm1hdHRlci5iaW5kKHtcbiAgICAgIHRhcmdldDogJCgnW2RhdGEtYXg2Zm9ybWF0dGVyPVwiZGF0ZSh0aW1lKVwiXScpXG4gICAgfSk7XG4gICAgZm9ybWF0dGVyLmJpbmQoe1xuICAgICAgdGFyZ2V0OiAkKCdbZGF0YS1heDZmb3JtYXR0ZXI9XCJ0aW1lXCJdJylcbiAgICB9KTtcblxuICAgIC8vIOyCrOyaqeyekCDsoJXsnZgg7Y+s66mn7YSwIOygleydmFxuICAgIEZvcm1hdHRlci5zZXRGb3JtYXR0ZXIoe1xuICAgICAgXCJteVBhdHRlcm5cIjoge1xuICAgICAgICBnZXRFbnRlcmFibGVLZXlDb2RlczogZnVuY3Rpb24gKF9vcHRzKSB7XG4gICAgICAgICAgbGV0IGVudGVyYWJsZUtleUNvZGVzID0ge1xuICAgICAgICAgICAgJzE4OSc6ICctJyAvLyBldmVudEtleUNvZGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgZW50ZXJhYmxlS2V5Q29kZXMsXG4gICAgICAgICAgICBGb3JtYXR0ZXIuZ2V0Q3RybEtleXMoKSxcbiAgICAgICAgICAgIEZvcm1hdHRlci5nZXROdW1LZXlzKClcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQYXR0ZXJuVmFsdWU6IGZ1bmN0aW9uIChfb3B0cywgb3B0SWR4LCBlLCB2YWwsIGVUeXBlKSB7XG4gICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICBsZXQgcmVnRXhwUGF0dGVybiA9IC9eKFswLTldezJ9KVxcLT8oWzAtOV17Mn0pP1xcLT8oWzAtOV17Mn0pP1xcLT8oWzAtOV17Mn0pPy87XG4gICAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKHJlZ0V4cFBhdHRlcm4sIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBsZXQgbnZhbCA9IFthcmd1bWVudHNbMV1dO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1syXSkgbnZhbC5wdXNoKGFyZ3VtZW50c1syXSk7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzWzNdKSBudmFsLnB1c2goYXJndW1lbnRzWzNdKTtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbNF0pIG52YWwucHVzaChhcmd1bWVudHNbNF0pO1xuICAgICAgICAgICAgcmV0dXJuIG52YWwuam9pbihcIi1cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvcm1hdHRlci5iaW5kKHtcbiAgICAgIHRhcmdldDogJCgnW2RhdGEtYXg2Zm9ybWF0dGVyPVwibXlQYXR0ZXJuXCJdJylcbiAgICB9KTtcblxuICAgICRib2R5Lm9uKFwiY2xpY2tcIiwgJ1tkYXRhLWJ0bl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYnRuID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJ0blwiKTtcbiAgICAgIGxldCBwcm9jZXNzb3IgPSB7XG4gICAgICAgIFwiYmluZC1tb25leVwiKCkge1xuICAgICAgICAgIGZvcm1hdHRlci5iaW5kKHtcbiAgICAgICAgICAgIHRhcmdldDogJCgnW2RhdGEtYXg2Zm9ybWF0dGVyPVwibW9uZXlcIl0nKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBcInVuYmluZC1tb25leVwiKCkge1xuICAgICAgICAgIGZvcm1hdHRlci51bmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAkKCdbZGF0YS1heDZmb3JtYXR0ZXI9XCJtb25leVwiXScpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmluZC1kYXRlXCIoKSB7XG4gICAgICAgICAgZm9ybWF0dGVyLmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAkKCdbZGF0YS1heDZmb3JtYXR0ZXI9XCJkYXRlXCJdJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmJpbmQtZGF0ZVwiKCkge1xuICAgICAgICAgIGZvcm1hdHRlci51bmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAkKCdbZGF0YS1heDZmb3JtYXR0ZXI9XCJkYXRlXCJdJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHByb2Nlc3NvcltidG5dKCk7XG4gICAgfSlcbiAgfSxcbiAgbW9kdWxlRGVzdHJveTogZnVuY3Rpb24gKCRib2R5KSB7XG4gICAgJGJvZHkub2ZmKFwiY2xpY2tcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaHRtbDogaHRtbCxcbiAgZm46IGZuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1hdHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=