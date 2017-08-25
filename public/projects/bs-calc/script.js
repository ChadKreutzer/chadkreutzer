$(document).ready(function() {
    var closed = false;
    $("#AC").click(function() {
        $("#Display").empty();
    });
    $("#CE").click(function() {
        $("#Display").text($("#Display").text().slice(0, -1));
    });
    $(".Number, .Point").click(function() {
        if (closed) {
            $("#Display").empty();
            closed = false;
        }
        if ($(this).text() === "." && $("#Display").text().includes(".")) {
            return;
        }
        $("#Display").append($(this).text());
    });
    $(".Operation").click(function() {
        if ($("#Display").text().length > 0 && !$("#Display").text().endsWith($(this).text())) {
            $("#Display").append($(this).text());
        }
        closed = false;
    });
    $(".Equals").click(function() {
        try {
            $("#Display").text(eval($("#Display").text()));
            closed = true;
        }
        catch (e) {
            closed = false;
        }
    });
});