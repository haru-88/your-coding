/* AOS.js */
AOS.init({
  offset: 100,
  delay: 100,
  duration: 400,
  easing: 'ease-out',
  once:false
});


$( function() {
  /* ハンバーガーメニュー */
  $('#js-btnHamburger').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('_open');
    return false;
  });

  $( '.js-nav__Link, #js-overlay' ).on( 'click', function(e) {
    e.preventDefault();
    $('.header').removeClass( '_open' );
    return false;
  });

  /* スクロールトップ */
  $('a[href^="#"]').click(function() {     
    let header = $(".header").innerHeight();  
    let speed = 800;  
    let id = $(this).attr("href");  
    let target = $("#" == id ? "html" : id);  
    let position = $(target).offset().top - header; 
    if ("fixed" !== $(".header").css("position")) {
            position = $(target).offset().top;
          }
    if (0 > position) {
            position = 0;
    }
    $("html, body").animate( {
        scrollTop: position
    },
      speed
    );
  });


  /* FAQ */
  $('.js-toggle').on('click', function() {
    $(this).next().slideToggle();
  });


  /* swiper (works section) */
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 1500,
    },
    speed: 2000,
    loop: true,
    loopedSlides: 4,
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,

    breakpoints: {
      490: {
        slidesPerView: 1.8,
      },
      768: {
        spaceBetween: 45,
        slidesPerView: 2.74,
      },
      992 :{ 
        slidesPerView: 3.74,
      },
      1200: {
        spaceBetween: 56,
        slidesPerView: 3.8,
      },
      1700: {
        slidesPerView: 6,
      }
    }
  });

  //GoogleForm
  let $form = $('#js-form');

  $form.submit(function(e) { 
    $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
        0: function() { 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  });

  
  /* formの入力確認 */

// 必須項目空欄アラート
  $(function(){
    var $require = $( '#js-form .js-require' );

    $require.on( 'blur', function() {
      if( $( this ).val() === ""
      ) {
        $(this).next().slideDown();
      } else {
        $(this).next().slideUp();
      }
    });
  })

//必須項目入力後submitのdisabledを外す
  let $submit = $('#js-submit');

  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-privacy').prop('checked') === true
    ) {
      $submit.prop('disabled', false)
    } else {
      $submit.prop('disabled', true)
    }
  })

})