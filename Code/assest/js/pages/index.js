$(document).ready(function() {
    $("#btn-login").hover(
        function() {
            if(!$(this).hasClass("active")) {
                $(this).addClass("active");
                $("#btn-register").removeClass("active")
            }
        }, 
        function() {
            if($(this).hasClass("active")) {
                $(this).removeClass("active");
            }
            $("#btn-register").addClass("active")
        }
    );

    $("#btn-register").hover(
        function() {
            if(!$(this).hasClass("active")) {
                $(this).addClass("active");
            }
        }
    );
});