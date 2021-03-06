$(document).ready(function() {
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";  


    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text h4").animated("fadeInUp", "fadeOutDown");
    $(".head").animated("fadeInUp", "fadeOutDown");

    $(".appear-side > div:nth-child(1)").animated("flipInY", "flipOutY");
    $(".appear-side").children(2).animated("fadeInLeft", "fadeOutLeft");
    $(".appear-side div:nth-child(3)").animated("fadeInRight", "fadeOutRight");

    $(".resume .bl-left .resume-item").animated("fadeInLeft", "fadeOutLeft");
    $(".resume .bl-right .resume-item").animated("fadeInRight", "fadeOutRight");

    $(".heder").css("height", $(window).height());
    $(window).resize(function(event) {
        $(".heder").css("height", $(window).height());
    });

    $(".types-of-kind-jobs li").click(function(event) {
        $(".types-of-kind-jobs li").removeClass('active-point-of-kind');
        $(this).addClass('active-point-of-kind');
    });

    $(".js-popup").magnificPopup({type:'image'});
    $(".portfolio-button").magnificPopup({ type:'inline' });
    // Instantiate MixItUp:
    $('.portfolio-table').mixItUp();

    $(".mix").each(function(index, el) {
        $(this).find('.portfolio-button').attr('href', '#portfolio-item-' + index);
        $(this).find('.portfolio-description').attr('id', 'portfolio-item-' + index);
    });


	$(window).load(function() { //.onload
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});

	$(".menu").click(function() {   

        if($(".heder .points").is(':hidden')){
                //Выдвинуть пункты меню вниз и скрыть
            $(".heder .points ul li a").addClass("fadeInUp animated").one(animationEnd, 
                function() {
                    $(".heder .points ul li a").removeClass("animated fadeInUp");
                }
            );
        }
		$(".top_text").toggleClass('opassit');//Немного затемнить светлый фон прозрачностью
		$("#sandwich").toggleClass("active"); // on cross of foursquare Включить крестик
        $(".points").fadeToggle(700); // Показать меню
    });	
	
	$(".heder .points ul li a").click(function(event) {
        $(".top_text").toggleClass('opassit');//Немного затемнить светлый фон прозрачностью 
		$("#sandwich").toggleClass("active"); // on cross of foursquare Включить крестик
		$(".points").fadeToggle(700); // Показать меню
	});

    $("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 

    $("a[href*='#']").mPageScroll2id();

    $('.heder').parallax({imageSrc: 'img/bg.jpg'});


    // $('#save').click(function() {
    //   //переменная formValid
    //   var formValid = true;
    //   //перебрать все элементы управления input 
    //   $('input').each(function() {
    //   //найти предков, которые имеют класс .form-group, для установления success/error
    //   var formGroup = $(this).parents('.form-group');
    //   //найти glyphicon, который предназначен для показа иконки успеха или ошибки
    //   var glyphicon = formGroup.find('.form-control-feedback');
    //   //для валидации данных используем HTML5 функцию checkValidity
    //   if (this.checkValidity()) {
    //     //добавить к formGroup класс .has-success, удалить has-error
    //     formGroup.addClass('has-success').removeClass('has-error');
    //     //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
    //     glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
    //   } else {
    //     //добавить к formGroup класс .has-error, удалить .has-success
    //     formGroup.addClass('has-error').removeClass('has-success');
    //     //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
    //     glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
    //     //отметить форму как невалидную 
    //     formValid = false;  
    //   }
    //     //если форма валидна, то
    //     if (formValid) {
    //       //сркыть модальное окно
    //       $('#myModal').modal('hide');
    //       //отобразить сообщение об успехе
    //       $('#success-alert').removeClass('hidden');
    //     }
    // });


});















/*
//Для заполнения всего начального экрана ------------+-------------------------+-------------------------+-------------

    function WindowResize() {
        // $(".js-resize").css("min-height", $(window).height());
        $(".fon-white").css("min-height", $(window).height());
    }

    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

//Для табов------------+-------------------------+-------------------------+-------------------------+-------------

    $(".tab_item").not(":first").hide();
    $(".js-wrapper .tab").click(function() {
        $(".js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".js-wrapper .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

//SVG Fallback ------------+-------------------------+-------------------------+-------------------------+-------------
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
// ANIMATE + WAYPOINTS
    //Анимация элемента по клику
    $("").click(function() {
        $("").animateCss('bounce');
    });
    //Анимация элемента
    $("").hover(
        function() {
            $(this).addClass('animated shake');
        },
        function() {
            $(this).removeClass('animated shake');
        }
    );
    //Анимация элемента + отслеживание окончания анимации
    $("").click(function() {
        $("").addClass('animated shake');
    });
    $("").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $("").addClass('fadeOut', function() {$("").hide();});
    });
    //отслеживание появление элемента при скролинге к верхней точке экоана
    //плюс 90% экрана в итоге точка срабатывания анимации
    $(window).scroll(function() {
        $("").each(function(){
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()*0.9){
                $(this).addClass('animated wobble');
            }
        });
    });

// FANSYBOX  ------------+-------------------------+-------------------------+-------------------------+-------------
//http://fancyapps.com/
    $("a.gallery").fancybox({ 
            "autoSize" : true,                      
            // "padding" : 20,//padding - отступ контента (фотографий) от краев окна.
            "imageScale" : true,   //imageScale - true - контент масштабируется по размеру окна, 
            //                         // false - окно вытягивается по размеру контента. По умолчанию - true;
            // "zoomOpacity" : false,  //zoomOpacity - изменение прозрачности контента во время анимации
            // "zoomSpeedIn" : 1000,   //zoomSpeedIn - скорость анимации в мс при увеличении фото (по умолчанию 0);
            // "zoomSpeedOut" : 1000,  //zoomSpeedOut - скорость анимации в мс при уменьшении фото (по умолчанию 0) ;
            // "zoomSpeedChange" : 1000, //zoomSpeedChange - скорость анимации в мс при смене фото (по умолчанию 0);
            // "frameWidth" : 700,  //frameWidth - ширина окна, px (425px - по умолчанию);
            // "frameHeight" : 600, //frameHeight - высота окна, px(355px - по умолчанию);
            // "overlayShow" : true, //overlayShow - (по умолчанию true) если true, то затенят страницу под всплывающим окном. 
            //                         //Цвет задается в jquery.fancybox.css - div#fancy_overlay 
            // "overlayOpacity" : 0.8, //overlayOpacity - Прозрачность затемнения (0.3 по умолчанию);
            // "hideOnContentClick" :false, //hideOnContentClick -  true закрывает окно по клику по любой его точке (кроме элементов навигации). По умолчанию true;
             "centerOnScroll" : false, //centerOnScroll - Если true, то окно центрируется на экране, когда пользователь прокручивает страницу.
                next : {
                        13 : 'left', // enter
                        34 : 'up',   // page down
                        39 : 'left', // right arrow
                        40 : 'up'    // down arrow
                },
                prev : {
                        8  : 'right',  // backspace
                        33 : 'down',   // page up
                        37 : 'right',  // left arrow
                        38 : 'down'    // up arrow
                },
                    close  : [27], // escape key
                    play   : [32], // space - start/stop slideshow
                    toggle : [70]  // letter "f" - toggle fullscreen
            });
//E-mail Ajax Send------------+-------------------------+-------------------------+-------------------------+-------------
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


//Цели для Яндекс.Метрики и Google Analytics ------------+-------------------------+-------------------------+-------------

    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }

//Фиксация меню при прокрутке до уровня  ------------+-------------------------+-------------------------+-------------------------+-------------
    var h_hght = 225; // высота шапки
    var h_mrg = 25;     // отступ когда шапка уже не видна
    var h_mnhght = 0; // максимальный отступ
        $(window).scroll(function(){
            //отступ сверху
            var top = $(this).scrollTop();
            // элемент
            var elem = $('#top_nav');
            //высота элемента
            var h_elem = elem.height();

            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
            } else {
                elem.css('top', h_mrg);
            }
            if (top+h_mrg+h_elem > h_mnhght && h_mnhght != 0) {
                elem.css('top', (h_mnhght-top-h_elem-h_mrg));
            }
        })

//Аякс отправка форм ------------+-------------------------+-------------------------+-------------------------+-------------
//Документация: http://api.jquery.com/jquery.ajax/
  
    $("#form").submit(function (e) {
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
    });
        // $(window).load(function() {
        //     $(".loader_inner").fadeOut();
        //     $(".loader").delay(400).fadeOut("slow");

        // });
        */
