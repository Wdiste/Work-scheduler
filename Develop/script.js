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

  for(i = 9; i < 18; i++) {
    const timeBlock = $(`#hour-${i}`);
    let currentTime = today.format('HH');
    console.log('hour = ' + currentTime);
    console.log(timeBlock);
    if(i < currentTime) {
      timeBlock.removeClass('present future');
      timeBlock.addClass('past');
    } else if(i == currentTime) {
      timeBlock.removeClass('past future');
      timeBlock.addClass('present');
    } else {
      timeBlock.removeClass('present past');
      timeBlock.addClass('future');
    };
  };
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
