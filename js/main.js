//Маска телефона
$(function(){
    $("#phone").mask("+7 (999) 999-99-99");
});

// Неактивная кнопка до заполнения полей
$('input').keyup(function(){
    var name = $('#name').val(),
        email = $('#email').val(),
        phone = $('#phone').val();
    if(name.length != 0 && email.length != 0 && phone.length != 0) {
        $('#submit').removeAttr('disabled');
    }
    //Проверка имени    
    if(!name.match(/[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)/i)){
        if($('.name_input input').hasClass('error')){}
        else{
            $('#name').addClass('error');
            $(".name_input").append("<span class='error_mess'>Введите Иия и Фамилию</span>");
            $('#submit').attr('disabled', 'disabled');
        }
    }
    else{
        $('.name_input input').removeClass('error');
        $('.name_input input').addClass('done');
        $('.name_input .error_mess').remove();
    }
    //Проверка телефона
    if(!phone.match(/^(8|\+7) \(\d\d\d\) \d\d\d-\d\d-\d\d$/i)){
        if($('.phone_input input').hasClass('error')){}
        else{
            $('#phone').addClass('error');
            $(".phone_input").append("<span class='error_mess'>Введите корректный номер</span>");
            $('#submit').attr('disabled', 'disabled');
        }
    }
    else{
        $('.phone_input input').removeClass('error');
        $('.phone_input input').addClass('done');
        $('.phone_input .error_mess').remove();
    }
    //Проверка email
    if(!email.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i)){
        if($('.email_input input').hasClass('error')){}
        else{
            $('#email').addClass('error');
            $(".email_input").append("<span class='error_mess'>Введите корректный e-mail</span>");
            $('#submit').attr('disabled', 'disabled');
        }
    }
    else{
        $('.email_input input').removeClass('error');
        $('.email_input input').addClass('done');
        $('.email_input .error_mess').remove();
    }
});

//Переключение ответов
$('.wraper label').click(function() {
    var click_id=$(this).attr('id');
    if (click_id != $('.wraper label.active').attr('id') ) {
        $('.wraper label').removeClass('active');
        $(this).addClass('active');
        $('.wraper div').removeClass('active');
        $('#con_' + click_id).addClass('active');
    }
})

//Отправка формы в консоль
$("#form").submit(function(e){
    e.preventDefault();
        name = $('#name').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        differences = $('input[name="select_differences"]').filter(':checked').val();;
    var form_data = {
        'Имя':name,
        'Телефон':phone,
        'email':email,
        'Ответ':differences
    }
    SubmitForm(form_data);  
});

function SubmitForm(form_data){
    $.ajax({
        type: "POST",
        dataType: "html",
        url: 'sendform.php',
        data: form_data,
        success: function(data) {
            console.log(data);
        }
    });
}

$(window).on('load', function () {
    $preloader = $('.loaderArea'),
    setTimeout(function() { 
        $preloader.addClass('hidden');
    }, 3000);
  });