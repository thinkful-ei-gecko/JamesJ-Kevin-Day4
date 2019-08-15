'use strict';

$('.thumbnail').on('click', e => {
  console.log(e.target);
  let clickedImg = $(e.target).clone();
  $('.hero img').replaceWith(clickedImg);
});
