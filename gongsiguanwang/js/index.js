// JavaScript Document
var a = document.getElementsByClassName('hov1');
var b = a.getElementsByClassName('hov11')[0];
var c = a.getElementsByClassName('hov12')[0];
a.onmouseover = function(){
	b.style.backgroundColor = '#6B6B6B';
	c.style.backgroundColor = '#FF0000';
};