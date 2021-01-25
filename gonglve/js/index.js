$(document).ready(function(){
    $('#tabs').find('li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');//全清
        $('#contents').find('li').eq($(this).index()).addClass('show').siblings().removeClass('show');
    });
})