$(document).ready(function () {
  console.log('pagina inizializzata');
  console.log('provo a prendere la lista degli elementi del menu');
  const $menuItem = $('.nav-item');
  console.log($menuItem);
  $menuItem.each(function () {
    console.log($(this).text());
    console.log($(this).data("page"));
  });
});
