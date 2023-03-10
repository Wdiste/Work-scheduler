  // shorthand for $(document).ready(function(args){...})
$(function () {
  // set up current day for display in header format: (Jan 1, 2022)
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, HH:MM'));

  // save user input form data to schedule in localData
  $('.saveBtn').on('click', (event) => {
    event.preventDefault();
    // find parent of button then child containing textarea
    const textInput = $(event.target).parents().children('textarea');
    // get unique id from event parent
    const divId = $(event.target).parent().attr('id');
    // save user input
    localStorage.setItem(divId, textInput.val());

  // for testing:  
  //   console.log('textarea for button input is:');
  //   console.log(textInput);
  // console.log('ID for button div is: ' + divId);
  });

  // for loop to check each hour block when page is opened
  for(i = 9; i < 18; i++) {
    const timeBlock = $(`#hour-${i}`);
    let currentTime = today.format('HH');
  // for testing:
  // console.log('hour = ' + currentTime);
  // console.log(timeBlock);

  // compare time block to current hour and switch class
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
  
  // use the divId format to call local data keys
    let storedData = localStorage.getItem(`hour-${i}`);
    console.log(`stored data: ${storedData}`);

  // initialize from localStorage if not null
    if(storedData !== 'null'){
      timeBlock.children('textarea').text(storedData);
    }
  };
});

