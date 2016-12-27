$(document).ready(function () {
  const $menuItem = $('.nav-item');
  $menuItem.each(function () {
    $(this).on('click', menuHandler);
  });
});

function menuHandler(e) {
  console.log($(e.target).data('page'));
}
