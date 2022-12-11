function buy() {
    event.preventDefault();

    let Name= document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let time = document.getElementById("time").value;
    let Tujuan = document.getElementById("Tujuan").value;
    let jumlah = document.getElementById("jumlah").value;


    if (Name == "Rian" && email == "riansatria882@gmail.com" && time == "10:00") {
        location.replace("sukses.html")
        alert("Ticket anda Sedang Di Proses :)");
    } else {
        alert("Masukkan kata yang benar :(");
    }

}