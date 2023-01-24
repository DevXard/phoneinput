var input = document.getElementById('input');
var contry = document.getElementById('contry');
var dropdown = document.getElementById('dropdown');
var container = document.getElementById('container');
var submit = document.getElementById('submit');

dropdown.innerHTML = `${createCountryList()}`;
var items = document.getElementsByClassName('list-item');
addEventToItems()

contry.innerHTML = `<img height="10rem" src="./assets/svg/US.svg" /> UnitedStates <span>+1</span> <span>US</span>`;

// format the input value as phone number
function formatAsPhoneNumber(value) {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return `${phoneNumber}`
    if(phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 13)}`;

}

function createCountryList(){
    let countryList = '';
    flags.forEach(function (flag) {
        countryList += `<li class="list-item"> <img height="10rem" src="./assets/svg/${flag.code}.svg" /> ${flag.name}  <span>${flag.dial_code}</span> <span>${flag.code}</span> </li>`;
    });
    return countryList;
}

function addEventToItems(){
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            if (event.isTrusted) {
                console.log(items[i].childNodes[5].textContent);
                contry.innerHTML = `${items[i].childNodes[1].outerHTML}<span class="close">${items[i].childNodes[2].textContent}</span><span>${items[i].childNodes[3].textContent}</span>${items[i].childNodes[5].textContent}`;
                dropdown.classList.remove('dropdown');
                dropdown.classList.add('close');
            }
        });
    }
}

input.addEventListener('input', function (event) {
  if (event.isTrusted) {
    input.value = formatAsPhoneNumber(input.value);
  }
});

contry.addEventListener('click', function (event) {
    
  if (event.isTrusted) {
    if(dropdown.classList.contains('dropdown')){
        dropdown.classList.remove('dropdown');
        dropdown.classList.add('close');
    }else{
        dropdown.classList.remove('close');
        dropdown.classList.add('dropdown');
        
    }

  }
});

container.addEventListener('mouseleave', function (event) {

    if (event.isTrusted) {
        dropdown.classList.remove('dropdown');
        dropdown.classList.add('close');
    }
});


submit.addEventListener('click', function (event) {
    if (event.isTrusted) {
        console.log(input.value);
        console.log('string',contry.childNodes[1].textContent);
        console.log('number',contry.childNodes[2].textContent);
        console.log(section.value)
    }
});
