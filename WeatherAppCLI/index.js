import readline from 'node:readline'
import dotenv from 'dotenv'
dotenv.config()
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const WEATHER_API=process.env.WEATHER_API
async function getTemperature(name){
    // const cityUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${1}&appid=${WEATHER_API}`
    // const response=await fetch(cityUrl);
    // const json=await response.json()
    // const lat=json[0].lat
    // const lon=json[0].lon
    // console.log(lat+" "+lon);

    // const weatherUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,alerts&appid=${WEATHER_API}`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${WEATHER_API}`
    const data=await fetch(url)
    const json=await data.json()
    const temperature = json.main.temp-273.15



    return temperature
}

async function ask(){
    rl.question('Enter the name of the city',async (name)=>{
   const temperature= await getTemperature(name)
   console.log(temperature);
   
//    console.log(data);
   rl.close()
   
    
    
    
})
}


ask()