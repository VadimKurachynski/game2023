function alerted1() {

  var el = document.getElementById('prompt1');
  el.style.display == 'none' ? el.style.display = 'initial' : el.style.display = 'none';
}

function alerted2() {
  let muz = document.getElementById('audio-prompt');
  muz.playbackRate = 3.5;

  if (muz.paused) {
    muz.play();
  } else {
    muz.pause();
  }


}


function prov() {
  let title = document.getElementsByTagName("title")[0].innerHTML;
  let otvet = "";
  switch (title) {
    case "1": otvet = "Открытка"; break;
    case "2": otvet = "Ягода малинка"; break;
    case "3": otvet = "Мальчик на девятке"; break;
    case "4": otvet = "Федерико Феллини"; break;
    case "5": otvet = "Прикольная"; break;
    case "6": otvet = "Пикачу"; break;
    case "7": otvet = "Витаминка"; break;
    case "8": otvet = "Малиновая лада"; break;
    case "9": otvet = "Солнце Монако"; break;
    case "10": otvet = "Чак Норрис"; break;

  }
  let el = document.getElementById('audiotext1').value;
  el = el.toLowerCase();
  otvet = otvet.toLowerCase();
  console.log(title + el + otvet);
  if (el == otvet) {
    var elv = document.getElementById('prompvideo');
    elv.style.display = 'initial';
    document.getElementById('nextbt').style.display = 'initial';
    document.getElementById('signupinput').value = "ВЕРНО!"
  } else {
    document.getElementById('signupinput').value = "НЕ ВЕРНО!"

  }

}

function provglavnaja() {
  var el = document.getElementById('kod').value;
  el = el.toLowerCase();
  if (el == "111") {
    document.getElementById('dkod').style.display = 'initial';
    document.getElementById('messagekod').value = "ВЕРНО!"
  } else {
    document.getElementById('messagekod').value = "НЕ ВЕРНО!"

  }

}


function see() {

  document.getElementById('picnn').style.display = 'initial';


}



let elem = document.getElementById('audiotext1');

elem.addEventListener('input', function () {
  // document.getElementById('signupinput').value = this.value;
  if (this.value.trim().length === 0) { document.getElementById('signupinput').value = "" }


});

// function next() {
//   let title = document.getElementsByTagName("title")[0].innerHTML;

//   window.open("/2.html", "SO");
//   console.log(title);

// }


