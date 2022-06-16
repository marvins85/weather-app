import './style.css';
import {data, celcius, farenheit} from './location';

//event listener for city input
document.querySelector('input').addEventListener('change', celcius);
document.querySelector('input').addEventListener('change', farenheit);
document.getElementById('far').addEventListener('click', tempSelect);
document.getElementById('cel').addEventListener('click', tempSelect);

//radio temp selector
function tempSelect(){
    if(document.getElementById('far').checked){
        document.querySelector('.temperature').textContent = data[1];
    }else if(document.getElementById('cel').checked){
        document.querySelector('.temperature').textContent = data[0];
    }
}
tempSelect();