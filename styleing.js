function kirim() {
    var name = document.getElementById("Nama").value;

    //error trapping 
    if(name.trim() === "") {
        alert("HARAP ISI NAMA");
        return;
    }

    var jum = parseInt(document.getElementById("Jumlah").value);
    var x = "";

    //error trapping
    if(isNaN(jum) || jum<1) {
        alert("HANYA ANGKA POSITIF DAN TIDAK BOLEH 0!");
        return;
    }

    for(var i=1; i<=jum; i++) {
        x += 
            "Pilihan " + i + ' : <input type="text" id="inputPilihan' + i + '"> <br>';
    }
    document.getElementById("formPilihan").innerHTML = x;
    document.getElementById("tombolPilihan").style.display = "block";
}

document
    .getElementById("tombolPilihan")
    .addEventListener("click", function () {
        var jum = parseInt(document.getElementById("Jumlah").value);
        for(var i=1; i<=jum; i++) {
            var inputPilihan = document.getElementById("inputPilihan" +i);
            var radioPilihan = document.createElement("input");
            radioPilihan.type = "radio";
            radioPilihan.id = "radioPilihan" + i;
            radioPilihan.name = "pilihan";
            radioPilihan.value = inputPilihan.value;

            var label = document.createElement("label");
            label.for = "radioPilihan" + i;
            label.textContent = "Pilihan " + i + " : " + inputPilihan.value;
            document.querySelector("form").appendChild(radioPilihan);
            document.querySelector("form").appendChild(label);
            document.querySelector("form").appendChild(document.createElement("br"));
        }
        document.getElementById("tombolSubmit").style.display = "block";
    });

function tampilkanData() {
    var radio = document.getElementsByName("pilihan");
    var dataPilih = "";
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        dataPilih = radio[i].value;
        break;
      }
    }
    var nama = document.getElementById("Nama").value;
    var jumlah = document.getElementById("Jumlah").value;
    var pilihan = "";
  
    // Error Traping
    if (dataPilih === "") {
      alert("Pilih salah satu dari pilihan yang tersedia!");
      return;
    }
  
    for (var i = 1; i <= jumlah; i++) {
      var inputPilihan = document.getElementById("inputPilihan" + i);
      pilihan += "Pilihan " + i + " : " + inputPilihan.value + ", ";
    }
  
    var output =
      "Hello World, I'm " +
      nama +
      ",I have a number of " +
      jumlah +
      " option, namely : " +
      pilihan +
      ", but I choose  " +
      dataPilih;
  
    document.getElementById("tampilan").innerHTML = output;
  }