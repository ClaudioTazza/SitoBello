class DataLoader {
  constructor(url) {
    this.url = url;
  }

  loadData(target) {
    $.ajax(this.url)
      .done(function (data) {
        var jsonData = JSON.parse(data);
        this.createPage(target, jsonData);
      })
      .fail(function () {
        alert('error');
      });
  }
}

class ListaEventi extends DataLoader {
  createPage(target, jsonData) {
    target.html(jsonData);
  }
}
