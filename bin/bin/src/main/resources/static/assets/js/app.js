! function(e) {
    "use strict";
    e(".dropdown-menu a.dropdown-toggle").on("click", function(t) {
        return e(this).next().hasClass("show") || e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), e(this).next(".dropdown-menu").toggleClass("show"), !1
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) {
        return new bootstrap.Tooltip(t)
    }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t) {
        return new bootstrap.Popover(t)
    }), e("#light-dark").on("click", function(t) {
        "disabled" !== e("#bootstrap-style").attr("disabled") ? (e("#bootstrap-dark-style").attr("disabled", !1), e("#bootstrap-style").attr("disabled", !0), e("#app-dark-style").attr("disabled", !1), e("#app-style").attr("disabled", !0)) : (e("#bootstrap-dark-style").attr("disabled", !0), e("#bootstrap-style").attr("disabled", !1), e("#app-dark-style").attr("disabled", !0), e("#app-style").attr("disabled", !1))
    }), Waves.init()
}(jQuery);