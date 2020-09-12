// Variable to pull and set the time at the top of the planner
var currentDate = moment().format("dddd, MMMM do, LT");
console.log(currentDate);
// Variables to pull from to set the time
var numericalHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var visibleHours = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

$("#currentDay").text(currentDate);

// create for loop that will run through the hours to create each time block
function timeblockBuilder() {
  //  $("#currentDay").text(currentDate);
  for (i = 0; i < visibleHours.length; i++) {
    var divRow = $("<div></div>");
    divRow.addClass("row");

    $(divRow).append(
      $("<div/>")
        .attr("id", `${numericalHours[i]}`)
        .addClass("col-sm-2 hour")
        .append("<p/>")
        .text(`${visibleHours[i]}`)
    );

    $(divRow).append($("<div/>").addClass("col-sm-8").append("<textarea/>"));

    $(divRow).append(
      $("<div/>").addClass("col-sm-2 saveBtn").append("<button/>").text(`save`)
    );

    $("#full").append(divRow);
  }
}
timeblockBuilder();
// not sure if I want to dynamically create columns, or should I have the culumns preset?
// needs to contain button for saving the text on the right side
// needs to contain time on th left side
// intractive text that saves to local storage in the middle

// write function that will color each timeblock for past, present, and future

{
  /* <div class="row">
  <div class="col-sm-2" id="#hour"></div>
  <div class="col-sm-8" id=""></div>
  <div class="col-sm-2" id="#saveBtn"></div>
</div>; */
}
