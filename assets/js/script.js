$(document).ready(function(){



    var x = 0;
    var imagesSL = ['img-slider004.jpg','img-slider001.jpg','img-slider002.jpg','img-slider003.jpg','img-slider005.jpg'];

    // Forward
    $('#sl-right').click(function(){

        if( x < imagesSL.length - 1){
            x++;
        }else{
            x = 0;
        }

        $('#image-slider').css({"background-image":"url(/assets/images/"+imagesSL[x]+")"});

    });

    // Backward
    $('#sl-left').click(function(){

        if( x > 0){
            x--;
        }else{
            x = imagesSL.length - 1;
        }

        $('#image-slider').css({"background-image":"url(/assets/images/"+imagesSL[x]+")"});

    });

    // Panel Tabs
    $('#btn-history').click(function(){

        $('#btn-about, #btn-contact').removeClass('active');
        $('#btn-history').addClass('active');

        $('#about-pane, #contact-pane').hide();
        $('#history-pane').show();

    });

    $('#btn-contact').click(function(){

        $('#btn-about, #btn-history').removeClass('active');
        $('#btn-contact').addClass('active');

        $('#about-pane, #history-pane').hide();
        $('#contact-pane').show();

    });

    $('#btn-about').click(function(){

        $('#btn-history, #btn-contact').removeClass('active');
        $('#btn-about').addClass('active');

        $('#history-pane, #contact-pane').hide();
        $('#about-pane').show();

    });


    // Gallery Tabs
    $('#btn-all').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').show();

    });

    $('#btn-mononoke').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.mononoke').show();

    });

    $('#btn-totoro').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.totoro').show();

    });

    $('#btn-kiki').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.kiki').show();

    });

    // SHADOWBOX
    var images = [];
    var captions = [];
    var imgIndex = 0;

    $('.all img').each(function(){

        var imgSrc = $(this).attr('src').replace('/thumbs/','/large/');
        images.push(imgSrc);

        var caption = $(this).attr('alt');
        captions.push(caption);

    });


    $('.all img').click(function(){

        var imgSrc = $(this).attr('src').replace('/thumbs/','/large/');
        $('#shadow-img').attr('src', imgSrc);



        imgIndex = $.inArray(imgSrc, images);
        $('#shadow-caption').text(captions[imgIndex]);



        var marginTop = $(window).scrollTop();
        $('#shadow-box').css({"margin-top":marginTop});
        $('.shadow-box-all').show();

    });

    //shadbox right
    $('#shadow-right').click(function(){

        if(imgIndex < 8){
            imgIndex++;
        }else{
            imgIndex = 0;
        }

        $('#shadow-img').attr('src', images[imgIndex]);
        $('#shadow-caption').text(captions[imgIndex]);

        console.log(imgIndex);

    });

    // shadowbox left
    $('#shadow-left').click(function(){

        if(imgIndex > 0){
            imgIndex--;
        }else{
            imgIndex = images.length - 1;
        }

        $('#shadow-img').attr('src', images[imgIndex]);
        $('#shadow-caption').text(captions[imgIndex]);

        console.log(imgIndex);
    });



    // Close shadowbox
    $('#shadow-close').click(function(){

        $('.shadow-box-all').hide();


    });

    $('#close').click(function(){

        $('.shadow-box-all').hide();


    });

}); // END DOCUMENT READY
