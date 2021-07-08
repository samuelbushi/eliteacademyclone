function hidepop(){
    document.getElementById("welcome").style.display = "none";
}

function showpop(){
    document.getElementById("welcome").style.display = "block";
}

function sConsole() {
    var data1 = document.getElementById("emer");
    console.log(data1.value);

    var mbiemer = document.getElementById("mbiemer");
    console.log(mbiemer.value);

    var mashkull = document.getElementById("mashkull");
    console.log(mashkull.value);


    var email = document.getElementById("email");
    console.log(email.value);

    var ditelindje = document.getElementById("ditelindje");
    console.log(ditelindje.value);

    var passwordi = document.getElementById("passwordi");
    console.log(passwordi.value);
  }

  function sConsoleContact() {
    var data1 = document.getElementById("emer");
    console.log(data1.value);

    var data2 = document.getElementById("email");
    console.log(data2.value);

    var data3 = document.getElementById("mesax");
    console.log(data3.value);

  }