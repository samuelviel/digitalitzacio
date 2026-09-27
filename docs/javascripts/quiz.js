/* Qüestionaris autoavaluables
   Ús:  <div class="quiz" data-quiz="../assets/quizzes/u01.json"></div>
   El JSON té la forma { titol, preguntes: [{ id, enunciat, opcions: [{ text, correcta, retro }] }] }
   ------------------------------------------------------------------------- */

(function () {
  "use strict";

  var BARREJA = true;

  function barreja(llista) {
    var a = llista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  // "No ho sé" sempre al final
  function ordenaOpcions(opcions) {
    if (!BARREJA) return opcions.slice();
    var noHoSe = opcions.filter(function (o) { return /^no ho s/i.test(o.text); });
    var resta = opcions.filter(function (o) { return !/^no ho s/i.test(o.text); });
    return barreja(resta).concat(noHoSe);
  }

  function crea(tag, classe, text) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function llegeixMillor(clau) {
    try {
      var v = window.localStorage.getItem(clau);
      return v === null ? null : JSON.parse(v);
    } catch (e) {
      return null;
    }
  }

  function desaMillor(clau, valor) {
    try {
      window.localStorage.setItem(clau, JSON.stringify(valor));
    } catch (e) {
      /* mode privat o emmagatzematge bloquejat: no passa res */
    }
  }

  function missatge(encerts, total) {
    var pct = total ? encerts / total : 0;
    if (pct === 1) return "Perfecte. Tens la unitat molt clara.";
    if (pct >= 0.8) return "Molt bé. Repassa només el que has fallat.";
    if (pct >= 0.5) return "Vas pel bon camí, però convé tornar als apunts de la unitat.";
    return "Rellig la unitat amb calma i torna a intentar-ho: no hi ha límit d'intents.";
  }

  function construeix(contenidor, dades) {
    var clau = "quiz:" + (contenidor.dataset.quiz || dades.titol || "");
    contenidor.innerHTML = "";

    var preguntes = dades.preguntes.map(function (p) {
      return { dades: p, opcions: ordenaOpcions(p.opcions) };
    });
    var total = preguntes.length;

    // Barra superior
    var barra = crea("div", "quiz__barra");
    var etiqueta = crea("strong", null, "0 / " + total);
    var progres = crea("div", "quiz__progres");
    var farcit = crea("i");
    progres.appendChild(farcit);
    var nota = crea("span", null, "respostes");
    var millor = llegeixMillor(clau);
    var recordMarca = crea("span", null, millor === null ? "" : "Millor marca: " + millor + " / " + total);
    barra.appendChild(etiqueta);
    barra.appendChild(nota);
    barra.appendChild(progres);
    barra.appendChild(recordMarca);
    contenidor.appendChild(barra);

    var form = crea("form", "quiz__form");
    form.setAttribute("novalidate", "novalidate");

    preguntes.forEach(function (p, i) {
      var bloc = crea("div", "quiz__pregunta");
      bloc.id = "p-" + (p.dades.id || i + 1);

      var enunciat = crea("div", "quiz__enunciat");
      enunciat.appendChild(crea("span", "quiz__num", String(i + 1)));
      enunciat.appendChild(document.createTextNode(p.dades.enunciat));
      bloc.appendChild(enunciat);

      var llista = crea("ul", "quiz__opcions");
      p.opcions.forEach(function (o, j) {
        var li = crea("li");
        var etiquetaOpcio = crea("label", "quiz__opcio");
        var radio = crea("input");
        radio.type = "radio";
        radio.name = "q" + i;
        radio.value = String(j);
        etiquetaOpcio.appendChild(radio);
        etiquetaOpcio.appendChild(crea("span", null, o.text));
        li.appendChild(etiquetaOpcio);
        llista.appendChild(li);
      });
      bloc.appendChild(llista);
      form.appendChild(bloc);
    });

    contenidor.appendChild(form);

    var accions = crea("div", "quiz__accions");
    var comprova = crea("button", "quiz__boto", "Comprova les respostes");
    comprova.type = "button";
    var reinicia = crea("button", "quiz__boto quiz__boto--secundari", "Torna a començar");
    reinicia.type = "button";
    accions.appendChild(comprova);
    accions.appendChild(reinicia);
    contenidor.appendChild(accions);

    var resultat = crea("div");
    contenidor.appendChild(resultat);

    function respostes() {
      return preguntes.map(function (p, i) {
        var marcat = form.querySelector('input[name="q' + i + '"]:checked');
        return marcat === null ? null : parseInt(marcat.value, 10);
      });
    }

    function actualitzaProgres() {
      var fetes = respostes().filter(function (r) { return r !== null; }).length;
      etiqueta.textContent = fetes + " / " + total;
      farcit.style.width = (total ? (fetes / total) * 100 : 0) + "%";
    }

    form.addEventListener("change", actualitzaProgres);

    comprova.addEventListener("click", function () {
      var res = respostes();
      var encerts = 0;
      var primeraSenseRespondre = null;

      preguntes.forEach(function (p, i) {
        var bloc = form.children[i];
        var anterior = bloc.querySelector(".quiz__resposta");
        if (anterior) anterior.remove();

        var triada = res[i];
        if (triada === null && primeraSenseRespondre === null) primeraSenseRespondre = bloc;

        var encertada = triada !== null && p.opcions[triada].correcta === true;
        if (encertada) encerts++;
        bloc.dataset.estat = triada === null ? "" : (encertada ? "ok" : "ko");

        var etiquetes = bloc.querySelectorAll(".quiz__opcio");
        p.opcions.forEach(function (o, j) {
          etiquetes[j].classList.remove("quiz__opcio--correcta", "quiz__opcio--errada");
          if (o.correcta) etiquetes[j].classList.add("quiz__opcio--correcta");
          else if (triada === j) etiquetes[j].classList.add("quiz__opcio--errada");
        });

        var caixa = crea("div", "quiz__resposta");
        if (triada === null) {
          caixa.appendChild(crea("b", null, "Sense respondre"));
          var correcta = p.opcions.filter(function (o) { return o.correcta; })[0];
          if (correcta) {
            caixa.appendChild(document.createTextNode("La resposta correcta és: " + correcta.text + "."));
          }
        } else {
          caixa.appendChild(crea("b", null, encertada ? "Correcte" : "No és correcte"));
          caixa.appendChild(document.createTextNode(p.opcions[triada].retro || ""));
          if (!encertada) {
            var bona = p.opcions.filter(function (o) { return o.correcta; })[0];
            if (bona) {
              caixa.appendChild(crea("br"));
              caixa.appendChild(crea("b", null, "Resposta correcta"));
              caixa.appendChild(document.createTextNode(bona.text + ". " + (bona.retro || "")));
            }
          }
        }
        bloc.appendChild(caixa);
      });

      resultat.innerHTML = "";
      var caixaFinal = crea("div", "quiz__resultat");
      var titol = crea("h3");
      titol.appendChild(crea("em", null, encerts + " / " + total));
      caixaFinal.appendChild(titol);
      caixaFinal.appendChild(crea("p", null, missatge(encerts, total)));
      resultat.appendChild(caixaFinal);

      if (millor === null || encerts > millor) {
        millor = encerts;
        desaMillor(clau, encerts);
      }
      recordMarca.textContent = "Millor marca: " + millor + " / " + total;

      var desti = primeraSenseRespondre || caixaFinal;
      desti.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    reinicia.addEventListener("click", function () {
      construeix(contenidor, dades);
      contenidor.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    actualitzaProgres();
  }

  function inicia() {
    var caixes = document.querySelectorAll(".quiz[data-quiz]");
    Array.prototype.forEach.call(caixes, function (caixa) {
      if (caixa.dataset.carregat === "1") return;
      caixa.dataset.carregat = "1";
      caixa.innerHTML = '<div class="quiz__carregant">Carregant el qüestionari…</div>';

      fetch(caixa.dataset.quiz, { cache: "no-cache" })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then(function (dades) { construeix(caixa, dades); })
        .catch(function () {
          caixa.innerHTML =
            '<div class="quiz__carregant">No s\'ha pogut carregar el qüestionari. ' +
            "Recarrega la pàgina o avisa el professorat.</div>";
        });
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(inicia); // navegació instantània de Material
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicia);
  } else {
    inicia();
  }
})();
