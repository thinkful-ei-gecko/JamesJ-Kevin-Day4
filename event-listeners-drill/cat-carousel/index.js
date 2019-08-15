'use strict';

$('.thumbnail').on('click keypress', e => {
  console.log($(e.currentTarget).find('img'));
  let clickedImg = $(e.currentTarget).find('img').clone();
  $('.hero img').replaceWith(clickedImg);
});
