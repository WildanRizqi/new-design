const nama = "wildan rizqi";
let usia = 21;

let biodata = document.getElementById('biodata')
console.log(biodata);

function generateBiodata () {
    let generasi;
    if(usia > 14 && usia <=20) {
        generasi = "generasi remaja";
    } 
    else if(usia < 100 && usia >20) {
        generasi = "generasi dewasa";
    } 
    else{
        generasi = "generasi anak anak";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata()

