// checks if the document is ready first before displaying everything!
$(document).ready(function () {
  console.log("ready!");
});
// Variable to pull and set the time at the top of the planner
var currentDate = moment().format("dddd, D MMMM");
var currentHour = moment().hours();
console.log(currentDate);
console.log(currentHour);
// Variables to pull from to set the time values and the numerial set that assigns each row in order to p
var numericalHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
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
// sets the current date at the top of the page
$("#currentDay").text(currentDate);


// Sets the div rows that the content wil be populated in
var divRow = $("<div></div>");
// create for loop that will run through the hours to create each time block
function timeblockBuilder() {
  //  $("#currentDay").text(currentDate);
  for (i = 0; i < visibleHours.length; i++) {
    var divRow = $("<div></div>");
    divRow.addClass("row");
    // creates the hours list to the left side of the main content that will correlate what our it is to the text.
    $(divRow).append(
      $("<div/>")
        .attr("data-time", $[numericalHours[i]])
        .addClass("col-sm-1 hour")
        .append("<p/>")
        .text([visibleHours[i]])
    );
    //creates the text area for the user to input their daily tasks
    var newTextArea = $("<textarea>")
      .addClass("col-sm-10 description")
      .attr("data-time", numericalHours[i]);
    $(divRow).append(newTextArea);
    // runs the if statement to check if there is any stored info. if there is, it places it into the correct text areas corresponding the hour
    if (localStorage.getItem(numericalHours[i])) {
      newTextArea.text(localStorage.getItem(numericalHours[i]));
    }
    // creates the buttons that will be generated on the right side of the planner
    var btnArea = $("<button class='col-sm-1 saveBtn far fa-save'>").attr(
      "data-time",
      numericalHours[i]
    );
    $(divRow).append(btnArea);
    //   appends all of the created rows into the main container
    $("#full").append(divRow);
    //    checks the time for the user and places the correct CSS for the current timeframe.
    if (currentHour == numericalHours[i]) {
      newTextArea.addClass("present");
    } else if (numericalHours[i] < currentHour) {
      newTextArea.addClass("past");
    } else {
      newTextArea.addClass("future");
    }
  }
}
// Saves the text the user inputted to local storage
$(document).on("click", ".saveBtn", function (event) {
  var storedHour = $(this).attr("data-time");
  var storedText = $(this).siblings(".description").val();
  localStorage.setItem(storedHour, storedText);
});
// Runs the timeblock builder to create the time blocks with MomentJS !
timeblockBuilder();
