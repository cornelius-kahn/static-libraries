/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 * Modify By Cornelius
 */
$(function() {
    $("#side-menu").metisMenu()
});
$(function() {
    $(window).bind("load resize",
    function() {
        var topOffset = 51;
        var bottomOffset = 51;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth: this.screen.width;
        if (width < 768) {
            $("div.navbar-collapse").addClass("collapse");
            topOffset = 100
        } else {
            $("div.navbar-collapse").removeClass("collapse")
        }
        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight: this.screen.height) - 1;
        height = height - topOffset - bottomOffset;
        if (height < 1) {
            height = 1
        }
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px")
        }
    });
    var url = window.location.toString().split("?")[0];
    var element = $("ul.nav a").filter(function() {
        return this.href == url
    }).addClass("active").parent().parent().addClass("in").parent().addClass("active");
    while (true) {
        if (element.is("li")) {
            element = element.parent().addClass("in")
        } else {
            break
        }
    }
});