$(function () {
  function osmond() {
    $("#output").html("");
    var davarian = $("#prefix").val();
    if (davarian != "") {
      if (davarian.charAt(davarian.length - 1) == "/") {
        davarian = davarian.substring(0, davarian.length - 1);
      }
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(davarian)) {
        if (davarian.charAt(0) != "/") {
          davarian = "/" + davarian;
        }
      }
    }
    var yoo = $("#input").val();
    var quannah = $("#input").val();
    var arjean = new DOMParser();
    var sayen = arjean.parseFromString(yoo, "text/html");
    var payman = [];
    var karamo = [];
    var zamarah = [];
    var ozelia = [];
    var emanda = [];
    var teagan = [];
    var jodeane = sayen.querySelectorAll("link[href]");
    var tzivy = sayen.querySelectorAll("script[src]");
    var quali = sayen.querySelectorAll("a[href]");
    var anayelly = sayen.querySelectorAll("img[src]");
    var wysdom = sayen.querySelectorAll("video[poster]");
    var isaian = sayen.querySelectorAll("source[src]");
    for (var rillie = 0; rillie < jodeane.length; ++rillie) {
      if (jodeane[rillie].getAttribute("href") !== null) {
        if (payman.indexOf(jodeane[rillie].getAttribute("href")) < 0) {
          payman.push(jodeane[rillie].getAttribute("href"));
        }
      }
    }
    for (var rillie = 0; rillie < tzivy.length; ++rillie) {
      if (tzivy[rillie].getAttribute("src") !== null) {
        if (karamo.indexOf(tzivy[rillie].getAttribute("src")) < 0) {
          karamo.push(tzivy[rillie].getAttribute("src"));
        }
      }
    }
    for (var rillie = 0; rillie < quali.length; ++rillie) {
      if (quali[rillie].getAttribute("href") !== null) {
        if (zamarah.indexOf(quali[rillie].getAttribute("href")) < 0) {
          zamarah.push(quali[rillie].getAttribute("href"));
        }
      }
    }
    for (var rillie = 0; rillie < anayelly.length; ++rillie) {
      if (anayelly[rillie].getAttribute("src") !== null) {
        if (ozelia.indexOf(anayelly[rillie].getAttribute("src")) < 0) {
          ozelia.push(anayelly[rillie].getAttribute("src"));
        }
      }
    }
    for (var rillie = 0; rillie < anayelly.length; ++rillie) {
      if (anayelly[rillie].getAttribute("src") !== null) {
        if (ozelia.indexOf(anayelly[rillie].getAttribute("src")) < 0) {
          ozelia.push(anayelly[rillie].getAttribute("src"));
        }
      }
    }
    for (var rillie = 0; rillie < wysdom.length; ++rillie) {
      if (wysdom[rillie].getAttribute("poster") !== null) {
        if (emanda.indexOf(wysdom[rillie].getAttribute("poster")) < 0) {
          emanda.push(wysdom[rillie].getAttribute("poster"));
        }
      }
    }
    for (var rillie = 0; rillie < isaian.length; ++rillie) {
      if (isaian[rillie].getAttribute("src") !== null) {
        if (teagan.indexOf(isaian[rillie].getAttribute("src")) < 0) {
          teagan.push(isaian[rillie].getAttribute("src"));
        }
      }
    }
    payman.forEach(function (hatina) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(hatina)) {
        var bhumika = 'href="' + hatina + '"';
        var maynor = davarian;
        if (hatina.charAt(0) == "/") {
          hatina = maynor + hatina;
        } else {
          hatina = maynor + "/" + hatina;
        }
        var tenicka = 'href="{{ asset("' + hatina + '") }}"';
        quannah = quannah.split(bhumika).join(tenicka);
      }
    });
    karamo.forEach(function (manzi) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(manzi)) {
        var raaid = 'src="' + manzi + '"';
        var latalia = davarian;
        if (manzi.charAt(0) == "/") {
          manzi = latalia + manzi;
        } else {
          manzi = latalia + "/" + manzi;
        }
        var tiamarie = 'src="{{ asset("' + manzi + '") }}"';
        quannah = quannah.split(raaid).join(tiamarie);
      }
    });
    zamarah.forEach(function (jordun) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(jordun)) {
        var yvonne = 'href="' + jordun + '"';
        var uday = 'href="{{ url("' + jordun + '") }}"';
        quannah = quannah.split(yvonne).join(uday);
      }
    });
    ozelia.forEach(function (breiden) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(breiden)) {
        var saffiya = 'src="' + breiden + '"';
        var lawarren = davarian;
        if (breiden.charAt(0) == "/") {
          breiden = lawarren + breiden;
        } else {
          breiden = lawarren + "/" + breiden;
        }
        var elgan = 'src="{{ asset("' + breiden + '") }}"';
        quannah = quannah.split(saffiya).join(elgan);
      }
    });
    emanda.forEach(function (irven) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(irven)) {
        var alnesha = 'poster="' + irven + '"';
        var fardin = davarian;
        if (irven.charAt(0) == "/") {
          irven = fardin + irven;
        } else {
          irven = fardin + "/" + irven;
        }
        var mickie = 'poster="{{ asset("' + irven + '") }}"';
        quannah = quannah.split(alnesha).join(mickie);
      }
    });
    teagan.forEach(function (derriah) {
      if (!new RegExp("^(?:[a-z]+:)?//", "i").test(derriah)) {
        var almedia = 'src="' + derriah + '"';
        var jazaya = davarian;
        if (derriah.charAt(0) == "/") {
          derriah = jazaya + derriah;
        } else {
          derriah = jazaya + "/" + derriah;
        }
        var aquileo = 'src="{{ asset("' + derriah + '") }}"';
        quannah = quannah.split(almedia).join(aquileo);
      }
    });
    $("#output").val(quannah);
  }
  $("#btn-convert").on("click", function () {
    osmond();
  });
});
