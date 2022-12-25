  // shorthand for $(document).ready(function(args){...})
$(function () {
  // set up current day for display in header format: (Jan 1, 2022)
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // save user input form data to schedule in localData
  $('.saveBtn').on('click', (event) => {
    event.preventDefault();
    // find parent of button then child containing textarea
    const textInput = $(event.target).parents().children('textarea');
    // get unique id from event parent
    const divId = $(event.target).parent().attr('id');
    // save user input
    localStorage.setItem(divId, textInput.val())
    console.log(textInput);
    console.log(divId);
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
