$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navigasibar').addClass("wush");
        }else{
            $('.navigasibar').removeClass("wush");
        }
    });
    // kita beralih (togle) ke menu atau navigasi Script
    $('.tombol-mnu').click(function(){
        $('.navigasibar .menu').toggleClass("aktif");
        $('.tombol-mnu i').toggleClass("aktif");
    });
});

// ini js untuk belajar adik
// const nama = "fiki";
// let usia = 15;

// function fiki(){
//     let cariFiki;

//     if (usia > 10){
//         cariFiki = "kamu yang saya cari";
//     }else{
//         cariFiki = "salah orang bro";
//     }

//     return console.log('ketemu juga', cariFiki)
// }

// console.log(nama)
// console.log(usia)
// fiki();