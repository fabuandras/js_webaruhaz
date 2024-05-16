export function kartyakLetrehoz(lista) {
  let txt = ``;
  lista.forEach((elem, index) => {
    txt += `
    <div class="container pt-5">
            <article class="col-md-12 row article-padding">
                <div class="col-md-4 row">
                    <div class="card bg-dark" style="width:300px">
                        <img class="card-img-top" src="${elem.kep}" alt="" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title text-white">${elem.nev}</h4>
                            <p class="card-text alapar">Alapár: <span>${elem.ar} millió Ft</span></p>
                            <h6 class="card-title text-white h6">Termékinformáció:</h6>
                            <p class="card-text text-white termekinformacio">${elem.termekinfo}</p>
                            <div class="text-right pt-3">
                                <button type="submit" id="submit" class="btn btn-outline-light fw-bold rounded-3 text-uppercase"><i
                                        class="fa fa-shopping-cart"></i> Kosárba</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
    </div>
    `
  });

  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}



/*

export function tablazatLetrehoz(lista) {
  let txt = "<div class='table-responsive pt-5'><table class='table table-dark table-striped'>";
  txt += "<thead><tr><th class='text-center'>Kép</th><th class='text-center'>Autó neve</th><th class='text-center'>Ára</th><th class='text-center'>Termékinformáció</th><th class='text-center'>Törlés</th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem, index) => {
    txt += `<tr>
      <td class='text-center'><img src="${elem.kep}" alt=""></td>
      <td class='text-center'>${elem.nev}</td>
      <td class='text-center'>${elem.ar}</td>
      <td class='text-left'>${elem.termekinfo}</td>
      <td class='text-center'><button id="${index}" class="btn btn-outline-light torol">🗑️</button></td>
      </tr>`;
  });
  txt += "</tbody></table></div>";
  return txt;
}

*/