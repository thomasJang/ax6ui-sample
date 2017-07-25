import $ from "jqmin";
import {AX6UICalendar as Calendar} from "ax6ui";

const $body = $("#sample-body");
let el = `
<div id="calendar-target-0" style="width:270px;"></div>
`;
$body.append(el);

/////~~~~~~~~~~~~~~~~~~
let today = new Date();
let myCalendar_0 = new Calendar({
    control: {
        left: '<i class="material-icons">keyboard_arrow_left</i>',
        yearTmpl: '%s',
        monthTmpl: '%s',
        right: '<i class="material-icons">keyboard_arrow_right</i>',
        yearFirst: true
    },
    dimensions: {
        itemPadding: 1,
        height: 250
    },
    target: document.getElementById("calendar-target-0"),
    displayDate: (new Date()),
    startOfWeek: 1,
    mode: "day",
    selectMode: "day",
    onClick: function () {
        console.log(myCalendar_0.getSelection());
    },
    onStateChanged: function () {
        console.log(this);
    },
    multipleSelect: 2
});