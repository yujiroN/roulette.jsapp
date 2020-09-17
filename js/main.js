'use strict';


$(function () {
    var stock,num,idx,time,timerId,swap;

    $('#start').on('click', function () {
        timerId = setInterval(function () {
            idx = Math.floor(Math.random() * num);
            $('.roulette__box h2').removeClass('selected').eq(stock[idx]).addClass('selected');
        },time);
        $('#start,#reset').prop('disabled', true);
        $('#stop').prop('disabled', false);
    });

    $('#stop').on('click', function () {
        clearInterval(timerId);
        $('.roulette__box h2').eq(stock[idx]);
        // num--;
        swap = stock[num];
        stock[num] = stock[idx];
        stock[idx] = swap;
        $('#start').prop('disabled', num <= 1);
        $('#stop').prop('disabled', true);
        $('#reset').prop('disabled', false);
        console.log(stock);

        confirm('Is this alright?');
    });

    $('#reset').on('click', function() {

        stock = [];
        for(var i = 0; i < 6; i++) stock.push(i);
        num = 6;
        time = 1;
        idx = null;
        $('.roulette__box h2').removeClass('selected');
        $('#start').prop('disabled', false);
        $('#stop').prop('disabled', true);

        
    }).trigger('click');
});