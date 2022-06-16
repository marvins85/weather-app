//handles
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const timing = document.querySelector('.timing');

//response data object
let data = [];

//get location + temp
async function celcius(e){
    try{
    const result = e.target.value;
    //api respons timing start
    const start = performance.now();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${result}&units=metric&APPID=abb438a1c78c59552629ae97c7778a27`, {mode: 'cors'});
    if(!response.ok){
        throw new Error ()
    }
    const location = await response.json();
    data.push(location.main.temp);
    city.textContent = location.name;
    temperature.textContent = location.main.temp; 
    //api response timing finish
    const finish = performance.now();
    timing.textContent = finish-start + " ms";
    } catch(e){
        error();
    }
};

//error message
function error(){
    let input = document.querySelector('input');
    input.setCustomValidity('City not found')
};

//get location + temp
async function farenheit(e){
    try{
    const result = e.target.value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${result}&units=imperial&APPID=abb438a1c78c59552629ae97c7778a27`, {mode: 'cors'});
    if(!response.ok){
        throw new Error ()
    }
    const location = await response.json();
    data.push(location.main.temp);
    data.push(location.name)
    } catch(e){
        message();
    }
};

//error message
function message(){
    let input = document.querySelector('input');
    input.setCustomValidity('City not found')
};


export {data, celcius, farenheit};