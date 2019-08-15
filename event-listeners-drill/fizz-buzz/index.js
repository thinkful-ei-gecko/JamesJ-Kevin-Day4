'use strict';

$('#number-chooser').submit(function(event) {
  event.preventDefault();
  // maybe clear js-results
  let numTimes = $('#number-choice').val();

  for (let i = 1; i <= numTimes; i++) {
    let appliedClass = typeof(fizzBuzz(i)) !== 'number' ? ` ${fizzBuzz(i)}` : '';

    $('.js-results').append(`
    <div class='fizz-buzz-item${appliedClass}'>
      <span>${fizzBuzz(i)}</span>
    </div>`);
  }
});

function fizzBuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  else if (num % 3 === 0) {
    return 'fizz';
  }
  else {
    return num;
  }
}