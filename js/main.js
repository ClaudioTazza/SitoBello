$(document).ready(function () {
  const $menuItem = $('.nav-item');
  $menuItem.each(function () {
    $(this).on('click', menuHandler);
  });
});

function menuHandler(e) {
  switch($(e.target).data('page')) {
    case 'menu-1':
      page = new ListaEventi('listaeventi.php');
      break;
    default:
      page = null;
      break;
  }

  if (page) router(page);
}

function router(page) {
  console.log(page.url);
  const $main = $('main');
  $main.html('');
  page.loadData($main);
}
