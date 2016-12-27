$(document).ready(function () {
  const $menuItem = $('.nav-item');
  $menuItem.each(function () {
    $(this).on('click', menuHandler);
  });
});

function menuHandler(e) {
  switch($(e.target).data('page')) {
    case 'menu-1':
      url = 'listaeventi.php';
      break;
    default:
      url = null;
      break;
  }

  if (url) router(new DataLoader(url));
}

function router(page) {
  console.log(page.url);
  const $main = $('main');
  $main.html('');
  $main.html(page.url);
}
