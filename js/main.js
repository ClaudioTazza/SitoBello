$(document).ready(function () {
  const $menuItem = $('.nav-item');
  $menuItem.each(function () {
    $(this).on('click', menuHandler);
  });
});

function menuHandler(e) {
  let page;

  switch ($(e.target).data('page')) {
    case 'menu-1':
      page = new ListaEventi('listaeventi.php');
      break;
    case 'menu-2':
      page = new PaginaVuota(null);
      break;
    case 'menu-3':
      page = new PaginaVuota(null);
      break;
    default:
      page = null;
      break;
  }

  if (page) router(page);
}

function router(page) {
  const $main = $('main');
  $main.html('');
  page.loadData($main);
}
