//鼠标点击我的淘宝出现下边内容
$('.wdtb1').mouseover(function(){
    $('#wdtb').css("display","block")
});
$('.wdtb1').mouseout(function(){
    $('#wdtb').css("display","none")
});
//鼠标点击购物车出现下边内容
$('.gouwc1').mouseover(function(){
    $('#gouwc').css("display","block")
});
$('.gouwc1').mouseout(function(){
    $('#gouwc').css("display","none")
});
//鼠标点击收藏夹出现下边内容
$('.scj1').mouseover(function(){
    $('#scj').css("display","block")
});
$('.scj1').mouseout(function(){
    $('#scj').css("display","none")
});
//鼠标点击我要逛出现下边内容
$('.wyg1').mouseover(function(){
    $('#wyg').css("display","block")
});
$('.wyg1').mouseout(function(){
    $('#wyg').css("display","none")
});
//鼠标点击卖家中心出现下边内容
$('.mjzx1').mouseover(function(){
    $('#mjzx').css("display","block")
});
$('.mjzx1').mouseout(function(){
    $('#mjzx').css("display","none")
});
// 鼠标点击网站导航出现下边内容
$('.wzdh1').mouseover(function(){
    $('#wzdh').css("display","block")
});
$('.wzdh1').mouseout(function(){
    $('#wzdh').css("display","none")
});



// 点击关闭按钮关闭二维码
$('#guanbi').click(function(){
    $('#kuang').css("display","none")
});



// 轮播图
$('.fivedian').find('em').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});



//选项卡1
$('#tabs').find('li').click(function(){
    $(this).addClass('active1').siblings().removeClass('active1');
    $('#contents').find('li').eq($(this).index()).addClass('show1').siblings().removeClass('show1');
});
//选项卡2
$('#dul').find('li').click(function(){
    $(this).addClass('activ2').siblings().removeClass('activ2');
    $('#tanchu').find('li').eq($(this).index()).addClass('sho2').siblings().removeClass('sho2');
});