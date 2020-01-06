$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).parent().parent().addClass('active');
        }
        else if($(this).prop("checked") == false){
            $(this).parent().parent().removeClass('active');
        }
    });
});