const input= document.querySelector('#input');
const button= document.querySelector('#btn');
const tempreture= document.querySelector('#tempreture');
const town= document.querySelector('#town');
const humidity= document.querySelector('#humidity');
const windSpeed= document.querySelector('#windSpeed');
const fill= document.querySelector('#fillLike');


  async function main(city){
    key='80543f3a3160e097fd48eda6157d0c70'
   
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${key}`
    const data= await fetch(url).then((response)=>response.json())
    console.log(data);
    tempreture.innerHTML=`${Math.floor((data.main.temp-273.15))}°C`
    town.innerHTML=`🌐${data.name}`
    humidity.innerHTML=`${data.main.humidity}%`
    windSpeed.innerHTML=`${data.wind.speed}km/h`
    fill.innerHTML=`${Math.floor((data.main.feels_like-273.15))}°C`

 }
button.addEventListener('click',()=>{
    main(input.value)
})




