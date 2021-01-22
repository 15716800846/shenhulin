idBackTop = document.getElementById('BackTop');
idBackTop.onclick = function() {
    document.documentElement.scrollTop = 0;
    sb();
}
window.onscroll = sb;
function sb() {
    if (document.documentElement.scrollTop == 0) {
        idBackTop.style.display = "none";
    } else {
        idBackTop.style.display = "block";
    }
}