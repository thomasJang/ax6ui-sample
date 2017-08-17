webpackJsonp([10],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jqmin = __webpack_require__(1);

var _jqmin2 = _interopRequireDefault(_jqmin);

var _ax6ui = __webpack_require__(16);

__webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = {
  moduleRun: function moduleRun($body) {
    var rowPanel = {
      type: "row", // type : row, column, stack
      panels: [{
        type: "column",
        panels: [{
          type: "panel",
          name: "my name 1",
          color: "#ff3300",
          borderColor: "#000000",
          moduleName: "content",
          moduleState: {
            data1: "data1"
          }
        }, {
          type: "panel",
          name: "my name 2",
          moduleName: "content",
          moduleState: {
            data1: "data2"
          },
          key: "T"
        }]
      }, {
        type: "stack",
        panels: [{
          type: "panel",
          name: "my name 3",
          moduleName: "content",
          moduleState: {
            data1: "data3"
          },
          key: "A"
        }]
      }]
    };
    var statckPanel = {
      type: "stack",
      panels: [{
        type: "panel",
        name: "my name 3",
        key: "A",
        moduleName: "content",
        moduleState: {
          data1: "data3"
        }
      }, {
        type: "panel",
        name: "my name 4",
        key: "A",
        moduleName: "content",
        moduleState: {
          data1: "data3"
        }
      }]
    };

    var docker = new _ax6ui.AX6UIDocker({
      target: document.getElementById("docker1")
    });

    docker.repaint();
  },
  moduleDestroy: function moduleDestroy($body) {
    $body.off("click");
  }
};

exports.default = {
  html: "\n<h1>\uACF5\uC0AC\uC911.</h1>\n<div id=\"docker1\" style=\"height: 500px;background: #eee;padding: 5px;\"></div>\n\n<div style=\"padding: 20px 0;\">\n    \n</div>\n",
  fn: fn
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlEb2NrZXIvc3R5bGUuc2Nzcz81YzcxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSURvY2tlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2NrZXIuanMiXSwibmFtZXMiOlsiZm4iLCJtb2R1bGVSdW4iLCIkYm9keSIsInJvd1BhbmVsIiwidHlwZSIsInBhbmVscyIsIm5hbWUiLCJjb2xvciIsImJvcmRlckNvbG9yIiwibW9kdWxlTmFtZSIsIm1vZHVsZVN0YXRlIiwiZGF0YTEiLCJrZXkiLCJzdGF0Y2tQYW5lbCIsImRvY2tlciIsInRhcmdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXBhaW50IiwibW9kdWxlRGVzdHJveSIsIm9mZiIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxLQUFLO0FBQ1BDLGFBQVcsbUJBQVVDLEtBQVYsRUFBaUI7QUFDMUIsUUFBSUMsV0FBVztBQUNiQyxZQUFNLEtBRE8sRUFDQTtBQUNiQyxjQUFRLENBQ047QUFDRUQsY0FBTSxRQURSO0FBRUVDLGdCQUFRLENBQ047QUFDRUQsZ0JBQU0sT0FEUjtBQUVFRSxnQkFBTSxXQUZSO0FBR0VDLGlCQUFPLFNBSFQ7QUFJRUMsdUJBQWEsU0FKZjtBQUtFQyxzQkFBWSxTQUxkO0FBTUVDLHVCQUFhO0FBQ1hDLG1CQUFPO0FBREk7QUFOZixTQURNLEVBV047QUFDRVAsZ0JBQU0sT0FEUjtBQUVFRSxnQkFBTSxXQUZSO0FBR0VHLHNCQUFZLFNBSGQ7QUFJRUMsdUJBQWE7QUFDWEMsbUJBQU87QUFESSxXQUpmO0FBT0VDLGVBQUs7QUFQUCxTQVhNO0FBRlYsT0FETSxFQXlCTjtBQUNFUixjQUFNLE9BRFI7QUFFRUMsZ0JBQVEsQ0FDTjtBQUNFRCxnQkFBTSxPQURSO0FBRUVFLGdCQUFNLFdBRlI7QUFHRUcsc0JBQVksU0FIZDtBQUlFQyx1QkFBYTtBQUNYQyxtQkFBTztBQURJLFdBSmY7QUFPRUMsZUFBSztBQVBQLFNBRE07QUFGVixPQXpCTTtBQUZLLEtBQWY7QUEyQ0EsUUFBSUMsY0FBYztBQUNoQlQsWUFBTSxPQURVO0FBRWhCQyxjQUFRLENBQ047QUFDRUQsY0FBTSxPQURSO0FBRUVFLGNBQU0sV0FGUjtBQUdFTSxhQUFLLEdBSFA7QUFJRUgsb0JBQVksU0FKZDtBQUtFQyxxQkFBYTtBQUNYQyxpQkFBTztBQURJO0FBTGYsT0FETSxFQVVOO0FBQ0VQLGNBQU0sT0FEUjtBQUVFRSxjQUFNLFdBRlI7QUFHRU0sYUFBSyxHQUhQO0FBSUVILG9CQUFZLFNBSmQ7QUFLRUMscUJBQWE7QUFDWEMsaUJBQU87QUFESTtBQUxmLE9BVk07QUFGUSxLQUFsQjs7QUF3QkEsUUFBSUcsU0FBUyx1QkFBVztBQUN0QkMsY0FBUUMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QjtBQURjLEtBQVgsQ0FBYjs7QUFJQUgsV0FBT0ksT0FBUDtBQUNELEdBMUVNO0FBMkVQQyxpQkFBZSx1QkFBVWpCLEtBQVYsRUFBaUI7QUFDOUJBLFVBQU1rQixHQUFOLENBQVUsT0FBVjtBQUNEO0FBN0VNLENBQVQ7O2tCQWdGZTtBQUNiQywrS0FEYTtBQVNickIsTUFBSUE7QUFUUyxDIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXg2dWkvQVg2VUlEb2NrZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9heDZ1aS9BWDZVSURvY2tlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImltcG9ydCAkIGZyb20gXCJqcW1pblwiO1xuaW1wb3J0IHsgQVg2VUlEb2NrZXIgYXMgRG9ja2VyIH0gZnJvbSBcImF4NnVpXCI7XG5pbXBvcnQgXCJheDZ1aS9BWDZVSURvY2tlci9zdHlsZS5zY3NzXCI7XG5cbmxldCBmbiA9IHtcbiAgbW9kdWxlUnVuOiBmdW5jdGlvbiAoJGJvZHkpIHtcbiAgICBsZXQgcm93UGFuZWwgPSB7XG4gICAgICB0eXBlOiBcInJvd1wiLCAvLyB0eXBlIDogcm93LCBjb2x1bW4sIHN0YWNrXG4gICAgICBwYW5lbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXG4gICAgICAgICAgcGFuZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwicGFuZWxcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJteSBuYW1lIDFcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmMzMwMFwiLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICBtb2R1bGVTdGF0ZToge1xuICAgICAgICAgICAgICAgIGRhdGExOiBcImRhdGExXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJwYW5lbFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIm15IG5hbWUgMlwiLFxuICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgbW9kdWxlU3RhdGU6IHtcbiAgICAgICAgICAgICAgICBkYXRhMTogXCJkYXRhMlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleTogXCJUXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInN0YWNrXCIsXG4gICAgICAgICAgcGFuZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwicGFuZWxcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJteSBuYW1lIDNcIixcbiAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgIG1vZHVsZVN0YXRlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTE6IFwiZGF0YTNcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZXk6IFwiQVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBsZXQgc3RhdGNrUGFuZWwgPSB7XG4gICAgICB0eXBlOiBcInN0YWNrXCIsXG4gICAgICBwYW5lbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwicGFuZWxcIixcbiAgICAgICAgICBuYW1lOiBcIm15IG5hbWUgM1wiLFxuICAgICAgICAgIGtleTogXCJBXCIsXG4gICAgICAgICAgbW9kdWxlTmFtZTogXCJjb250ZW50XCIsXG4gICAgICAgICAgbW9kdWxlU3RhdGU6IHtcbiAgICAgICAgICAgIGRhdGExOiBcImRhdGEzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInBhbmVsXCIsXG4gICAgICAgICAgbmFtZTogXCJteSBuYW1lIDRcIixcbiAgICAgICAgICBrZXk6IFwiQVwiLFxuICAgICAgICAgIG1vZHVsZU5hbWU6IFwiY29udGVudFwiLFxuICAgICAgICAgIG1vZHVsZVN0YXRlOiB7XG4gICAgICAgICAgICBkYXRhMTogXCJkYXRhM1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG5cbiAgICBsZXQgZG9ja2VyID0gbmV3IERvY2tlcih7XG4gICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9ja2VyMVwiKVxuICAgIH0pO1xuXG4gICAgZG9ja2VyLnJlcGFpbnQoKTtcbiAgfSxcbiAgbW9kdWxlRGVzdHJveTogZnVuY3Rpb24gKCRib2R5KSB7XG4gICAgJGJvZHkub2ZmKFwiY2xpY2tcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaHRtbDogYFxuPGgxPuqzteyCrOykkS48L2gxPlxuPGRpdiBpZD1cImRvY2tlcjFcIiBzdHlsZT1cImhlaWdodDogNTAwcHg7YmFja2dyb3VuZDogI2VlZTtwYWRkaW5nOiA1cHg7XCI+PC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJwYWRkaW5nOiAyMHB4IDA7XCI+XG4gICAgXG48L2Rpdj5cbmAsXG4gIGZuOiBmblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb2NrZXIuanMiXSwic291cmNlUm9vdCI6IiJ9