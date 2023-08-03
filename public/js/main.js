const btn=document.getElementById('submit')
const input_value=document.getElementById('type')
const city_name=document.getElementById('city')
let temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')
const day=document.getElementById('day')
const date=document.getElementById('date')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


 async function get_info(event){
    event.preventDefault()
    let val=input_value.value;
    if (val===""){
         city_name.innerText="Please write name before search"
         temp.innerText=""
         temp_status.innerText=""
         date.innerHTML=""
         day.innerHTML=""
    }
    else{
      try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${val}&lat={lat}&lon={lon}&appid=e39c9a51feebf96f96484fecafa9581e`
    const response=await fetch(url)
   //  console.log(response)
    const obj=await response.json()
    const array=[obj]
    const d=new Date()
    city_name.innerText=array[0].name
         temp.innerText=(array[0].main.temp-273.15).toFixed(1)
         day.innerHTML=weekday[d.getDay()]
         date.innerHTML=d.getDate()
         // temp_status.innerText=array[0].weather[0].main
      }
      catch{
         city_name.innerText="Please enter the city name properly"
         temp.innerText=""
         temp_status.innerText=""
         date.innerHTML=""
         day.innerHTML=""
      }
 }
}
    


btn.addEventListener('click',get_info)