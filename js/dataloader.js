class DataLoader {
  constructor(url) {
    this.url = url;
  }

  loadData(target) {
    const _this = this;

    if (!this.url) {
      this.createPage(target);
      return;
    }

    $.ajax(this.url)
      .done(function (data) {
        const jsonData = JSON.parse(data);
        _this.createPage(target, jsonData);
      })
      .fail(function () {
        alert('errore nel caricamento dei dati');
      });
  }
}

class ListaEventi extends DataLoader {
  createPage(target, jsonData) {
    let i;
    for (i = 0; i < jsonData.length; i++) {
      const elemento = $('<h4>').html(jsonData[i].Nome);
      target.append(elemento);
    }
  }
}

class PaginaVuota extends DataLoader {
  createPage(target) {
    target.append($('<h1>').html('Pagina Vuota'));
  }
}
