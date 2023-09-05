document.addEventListener('DOMContentLoaded', function () {
    // console.log((localStorage.getItem('firstname')[0]));




    const form = document.getElementById('register__form');
    form.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        localStorage.setItem('firstname', document.getElementById("firstname").value);
        localStorage.setItem('lastname', document.getElementById("lastname").value);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('password', document.getElementById("password").value);

        // const generateRandomHex = [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        localStorage.setItem('cardnumber', [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''));

        document.querySelector('.register').classList.toggle('show__register');
        document.getElementById('overlay').classList.remove('overlayed');
        loginCondition();

//reg end !!!!!!

    };


//LOGIN

    const formLogin = document.getElementById('login__menu__form');
    formLogin.addEventListener('submit', formCheck);

    function formCheck(event) {
        event.preventDefault();
        // alert('Check!');

        if((localStorage.getItem('email') === document.getElementById("emailcard").value || localStorage.getItem('cardnumber') === document.getElementById("emailcard").value) && localStorage.getItem('password') === document.getElementById("loginpassword").value) {
            document.querySelector('.login__menu').classList.toggle('show__login__menu');
            document.getElementById('overlay').classList.remove('overlayed');
            loginCondition();
        } else {
        alert('Wrong Password, E-mail or a Card Number');
        document.querySelector('.login__menu').classList.toggle('show__login__menu');
        document.getElementById('overlay').classList.remove('overlayed');
        }
    };




const loginCondition = function () {
    //logged
        document.querySelector('.profile').classList.add('logged');
        if(document.querySelector('.profile').classList.contains('logged')) {
            // alert('logged');
        }
    //icon change
        document.querySelector('.human__head').classList.add('hide');
        document.querySelector('.human__body').classList.add('hide');
        document.querySelector('.icon__letters').textContent = localStorage.getItem('firstname')[0] + localStorage.getItem('lastname')[0];
    //title icon
        document.querySelector('#profile').title = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
    //change card block
        document.querySelector('.section__cards__login').style.display = 'block';
        document.querySelector('.section__cards').style.display = 'none';
    //add placeholder
        document.querySelector('#cardusername__login').placeholder = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
        document.querySelector('#cardnumber__login').placeholder = localStorage.getItem('cardnumber').toUpperCase();
    //profile__card__number
        document.querySelector('#profile__card__number').textContent = localStorage.getItem('cardnumber').toUpperCase();
}


//LOGOUT

const logoutCondition = function () {
//unlog
    document.querySelector('.profile').classList.remove('logged');
//icon change
    document.querySelector('.human__head').classList.remove('hide');
    document.querySelector('.human__body').classList.remove('hide');
    document.querySelector('.icon__letters').textContent = '';
//title icon
    document.querySelector('#profile').title = '';
//change card block
    document.querySelector('.section__cards__login').style.display = 'none';
    document.querySelector('.section__cards').style.display = 'block';
//add placeholder
    document.querySelector('#cardusername__login').placeholder = '';
    document.querySelector('#cardnumber__login').placeholder = '';
//profile__card__number
    document.querySelector('#profile__card__number').textContent = '';



    }

//LOGOUT BTN

document.querySelector('#logout__menu__logout').addEventListener('click', logoutCondition);


//!!!!!!!!!!!!!!!
// loginCondition();




















// Check the card


document.querySelector('.check__btn').addEventListener('click', function () {
    let cardUserName = document.getElementById("cardusername").value;
    let cardNumber = document.getElementById("cardnumber").value;
    if ((cardUserName.replace(/\s/g, '')).toLowerCase() === (localStorage.getItem('firstname') + localStorage.getItem('lastname')).toLowerCase() && (cardNumber.replace(/\s/g, '')).toLowerCase() === (localStorage.getItem('cardnumber'))) {
        document.querySelector('#cardusername__login').placeholder = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
        document.querySelector('#cardnumber__login').placeholder = localStorage.getItem('cardnumber');
        document.querySelector('.check__btn').style.display = 'none';
        document.querySelector('.card__items').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.check__btn').style.display = 'block';
            document.querySelector('.card__items').style.display = 'none';
            document.getElementById("cardusername").value = '';
            document.getElementById("cardnumber").value = '';
        }, 10000);

    } else {
        alert('Wrong Name or Card Number');
    }
});




});


