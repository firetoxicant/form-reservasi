function validasiNama(){
    let nama = document.getElementById("nama").value;
    let pola = /^[a-zA-Z' ]+$/;

    if(!pola.test(nama)){
        alert("Nama hanya boleh berisi huruf.");
        return false;
    }
    else{
        alert("Nama (" + nama + ") valid");
        return true;
    }
}