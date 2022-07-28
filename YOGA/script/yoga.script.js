/* Проверка формы (на главной странице) на валидность перед отправкой */
function validateInfoForm1() {

    var nameElement = formElement.elements.name;
    var messageElement = formElement.elements.message;
    var emailElement = formElement.elements.email;
 
    
    var nameValue = nameElement.value;
    var messageValue = messageElement.value;
    var emailValue = emailElement.value;
 
         if (emailValue =='') {
            alert('Введите, пожалуйста, адрес электронной почты!');
            emailElement.focus();
            return false;
            }

        if (nameValue =='') {
            alert('Введите, пожалуйста, Ваше ФИО');
            nameElement.focus();
            return false;
            }

        if (messageValue.length < 10) {
            alert('Введите, пожалуйста, текст Вашего сообщения не менее 10 символов!');
            messageElement.focus();
            return false;
        }
        
    return true;
}

/* Проверка формы перед оплатой (на последей странице) на валидность перед отправкой */
function validateInfoForm2() {

    var nameElement = formElement.elements.name;
    var messageElement = formElement.elements.message;
    var telElement = formElement.elements.tel;
    var emailElement = formElement.elements.email;
       
    var nameValue = nameElement.value;
    var messageValue = messageElement.value;
    var telValue = telElement.value;
    var emailValue = emailElement.value;
 
         if (emailValue =='') {
            alert('Введите, пожалуйста, адрес электронной почты!');
            emailElement.focus();
            return false;
            }

        if (nameValue =='') {
            alert('Введите, пожалуйста, Ваше ФИО');
            nameElement.focus();
            return false;
            }

        if (messageValue.length < 10) {
            alert('Введите, пожалуйста, текст Вашего сообщения не менее 10 символов!');
            messageElement.focus();
            return false;
        }
        
        if (telValue.length =='') {
            alert('Введите, пожалуйста, номер Вашего телефона!');
            telElement.focus();
            return false;
        }
    return paymentMessage();
}

/* Переключение на узкую версию сайта*/
function mobileView() {
    
    $('.desktop-view').css('display', 'none');
    $('.mobile-view').css('display', 'block');
    $('iframe').css('display', 'block');
    $('body').css('background', 'rgb(250, 250, 250)');
     
    }

/*Выводит на экран сообщение после нажатия кнопки "Оплатить" */
function paymentMessage() {
    $('.modalDialog').css('display', 'block');
}


/*Закрывает модальное окно, которое выводилось после нажатия кнопки "Оплатить"  */
function hidePaymentMessage() {
    $('.modalDialog').css('display', 'none');
  }

/*Добавляет анимацию на кнопку вызова меню в узкой версии сайта */
 $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
  });

/*Добавляет действия при нажатии на кнопку вызова меню в узкой версии сайта */
    function menuMobileActive() {
        $('.menu-mobile').css('right', '0');/*Слева появляется блок с навигационными ссылками*/
        $('.view').css('display', 'none');/*Скрывает блок переключения с узкой на широкую версию сайта*/
        $('.navbar').css('display', 'none');/*Скрывает боковую понель навигации с правой стороны страницы*/
}

/*Скрывает блок с навигационными ссылками в узкой версии сайта, при выборе одной из ссылок*/
     function menuMobileHide() {
        $('.menu-mobile').css('right', '-100%');     
}

/*Меняет стиль поля ввода эл.адреса в форме обратной связи на главной странице при потере фокуса*/
    function blurFunction() {
        $('.email').css('border-color', 'red');
        $('.email').css('border-width', '2px');
     }
