$(document).ready(function() {

    var myClick = new Audio();
    myClick.src = 'https://rawcdn.githack.com/KeliboStore/all.assets/26293f6c80521288f4bc0c5078336649851d82b4/click.mp3';

    $("#epic").show();
    $("#showEpic").addClass("is-active");

    $("#showEpic").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showEpic").addClass("is-active");
        $("#epic").show();
    }); 

    $("#showKof").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showKof").addClass("is-active");
        $("#kof").show();
    }); 

    $("#showDm").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showDm").addClass("is-active");
        $("#dm").show();
    }); 

    $("#star").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#star").addClass("is-active");
        $("#borders").show();
    }); 


    $("button#doLogin").on("click", function() {
        myClick.play();
        $(".kelibobackdrop").css("display", "block");

        $(".closeBox").on("click", function() {
            myClick.play();
            $(".kelibobackdrop").hide();
        });
    });

    $("#fbLogin").on('click', function() {
        myClick.play();
        $(".kelibobackdrop").hide();
        $(".login-facebook").show();
    });

    $(".close-fb").on('click', function() {
        myClick.play();
        $(".login-facebook").hide();
        $(".kelibobackdrop").show();
    });

    $("#googleLog").on('click', function() {
        myClick.play();
        $(".kelibobackdrop").hide();
        $(".login-google").show();
    });

    $("#closeGoogle").on('click', function() {
        myClick.play();
        $(".login-google").hide();
        $(".kelibobackdrop").show();
    });

    $("#vkLog").on('click', function() {
        myClick.play();
        $(".kelibobackdrop").hide();
        $(".login-vk").show();
    });

    $("#closeVK").on('click', function() {
        myClick.play();
        $(".login-vk").hide();
        $(".kelibobackdrop").show();
    });

    $("#moLog").on('click', function() {
        myClick.play();
        $(".kelibobackdrop").hide();
        $(".login-mo").show();
    });

    $("#closeMo").on('click', function() {
        myClick.play();
        $(".login-mo").hide();
        $(".kelibobackdrop").show();
    });
});
