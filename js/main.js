$(document).ready(function() {

    $.ajax({          //Зчитуємо дані
        url: "data.json",
        success: function(data){
            var a = data;

            for(var i=0; i<3; i++){			//Додаємо 5 блоків у wrapper і завантажуємо туди дані
                var b = a[i];
                var c = '.z'+i;
                $("#items").append($('<div class="block z'+i+'"></div>'));
                $(c).append($('<a class="item-image__a"><img src="'+b.image+'" class="item-image"></a><a class="h1__a"><h1>'+b.title+'</h1></a><h3>'+b.date+' <span class="sign">|</span> <span>'+b.author+'</span> <span class="sign">|</span> <a href="#" class="text__tag">'+b.tag+'</a></h3><p class="text">'+b.text+'<a href="#" class="text__a"> > </a></p><p class="text__comments"> <i class="fa fa-eye" aria-hidden="true"></i> '+b.views+' <span class="sign sign-comments">|</span> <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#" class="text__comments__a">'+b.comments+'</a></p>'));
            }
        }
    })

    var k = "";

    $('#button__more').on('click', function() { 	// По кліку зчитуємо дані
        $.ajax({
            url: "data.json",
            success: function(data){
                var a = data;

                k = k + 3;				// Беремо наступні 3 об'єктів з масиву

                for(var i=k; i<k+1; i++){
                    if(i!==a.length){
                        var b = a[i];
                        var c = '.z'+i;
                        $("#items").append($('<div class="block z'+i+'"></div>'));
                        $(c).append($('<a class="item-image__a"><img src="'+b.image+'" class="item-image"></a><a class="h1__a"><h1>'+b.title+'</h1></a><h3>'+b.date+' <span class="sign">|</span> <span>'+b.author+'</span> <span class="sign">|</span> <a href="#" class="text__tag">'+b.tag+'</a></h3><p class="text">'+b.text+'<a href="#" class="text__a"> > </a></p><p class="text__comments"> <i class="fa fa-eye" aria-hidden="true"></i> '+b.views+' <span class="sign sign-comments">|</span> <i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#" class="text__comments__a">'+b.comments+'</a></p>'));
                    }else{
                        $('#button__more').css("visibility", "hidden");
                        $('#button__back').css("visibility", "visible");    // Якщо масив закінчується, ховаємо кнопку
                        return false;
                    }
                }
            }
        })
    });


    $("#button__back").click(function() {
        $("html, body").animate({
            scrollTop: $('#articles').offset().top - 67
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $('#logo').click(function() {
        $("html, body").animate({
            scrollTop: $('#articles').offset().top - 67
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


    $('#touch-menu').click(function() {

        if($(this).text() == 'Menu') {

            $('#menu').css({display: 'block'});

            $('li:nth-of-type(1)').animate({ left: "0" }, 300);
            $('li:nth-of-type(2)').animate({ right: "0" }, 400);
            $('li:nth-of-type(3)').animate({ left: "0" }, 500);
            $('li:nth-of-type(4)').animate({ right: "0" }, 600);
            $('li:nth-of-type(5)').animate({ left: "0" }, 700);
            $('li:nth-of-type(6)').animate({ right: "0" }, 800);

            setTimeout(function(){
                $('#touch-menu').text('Close');
            }, 800);

        }else{

            $('li:nth-of-type(6)').animate({ right: "-100%" }, 300);
            $('li:nth-of-type(5)').animate({ left: "-100%" }, 400);
            $('li:nth-of-type(4)').animate({ right: "-100%" }, 500);
            $('li:nth-of-type(3)').animate({ left: "-100%" }, 600);
            $('li:nth-of-type(2)').animate({ right: "-100%" }, 700);
            $('li:nth-of-type(1)').animate({ left: "-100%" }, 800);

            setTimeout(function(){
                $('#touch-menu').text('Menu');
                $('#menu').css('display', 'none');
            }, 800);
        }

        $(window).resize(function(){
            if($(window).width() > 992) {
                $('#menu').css('display', 'flex');
            }else if($(this).text() == 'Menu'){
                $('#menu').css('display', 'none');
            }else{
                $('#menu').css('display', 'block');
            }
        });
    });


})
