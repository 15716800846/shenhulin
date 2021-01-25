window.onload = window.onresize = function(){
    var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
    var _html = document.getElementsByTagName('html')[0];
    view_width>416?_html.style.fontSize = 416 / 16 + 'px':_html.style.fontSize = view_width / 16 + 'px';
}