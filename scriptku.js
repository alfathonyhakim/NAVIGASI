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