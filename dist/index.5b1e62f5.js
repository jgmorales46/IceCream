$(function() {
    $("*[include]").each(function() {
        var t = $(this).attr("include"), u = this.id;
        jQuery.ajax({
            url: t,
            success: function(t) {
                $("#" + u).html(t);
            },
            error: function(n, c, i) {
                var s = n.status + ": " + n.statusText;
                $("#" + u).html(t + "-" + s);
            }
        });
    });
});

//# sourceMappingURL=index.5b1e62f5.js.map
