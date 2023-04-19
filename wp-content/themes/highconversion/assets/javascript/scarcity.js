
// Contador Potes
//Gera número randomico
var stock = Math.floor(Math.random() * ((stock + 20) - stock + 1)) + stock;

//Coloca contéudo no HTML, valor inicial do estoque
$(document).ready(function () {
  $('.produtos-restantes').html(stock);
});

function verify_stock() {
  stock_verify = $('.produtos-restantes:first').text();
  if (stock_verify <= 0) {
    $('.produtos-restantes').html(minstock);
  }
}


function sales(time, kit) {
  setTimeout(function () {
    stock = $('.produtos-restantes:first').text();
    $('.produtos-restantes').html(stock - kit);
    verify_stock();
  }, 1000 * time);
}


var time = [1, 2, 9, 11, 13, 25, 36, 47, 52, 69, 82, 99, 102, 120, 128, 132, 145, 158, 170, 186, 192, 205, 247, 299, 360, 420];

function isOdd(num) { return num % 2; }


$(window).on('scroll', function () {
  var start = ($('.produtos-restantes:first').offset().top) - 400;

  if ($(this).scrollTop() >= start) {
    $(window).off('scroll');
    checkScroll();
  }
});

function checkScroll() {
  time.forEach(function (item) {
    if (isOdd(item)) {
      kit = 3;
    } else {
      kit = 6;
    }
    sales(item, kit);
  });
}

checkScroll()