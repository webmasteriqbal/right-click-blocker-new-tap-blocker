// Disable inspect element
$(document).bind("contextmenu", function (e) {
    e.preventDefault();
});
$(document).keydown(function (e) {
    if (e.which === 123) {
        return false;
    }
});


// New Tap Block 
for (var els = document.getElementsByTagName('a'), i = els.length; i--;) {
    var href = els[i].href;
    els[i].href = 'javascript:void(0);';
    els[i].onclick = (function (el, href) {
        return function () {
            window.location.href = href;
        };
    })(els[i], href);
}
