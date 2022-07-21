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

// kuda script
$('.kudawks').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }

    }
});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.title').addClass("ngumpet");
//         }else{
//             $('.title').removeClass("ngumpet");
//         }
//     });
// });













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