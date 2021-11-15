const date = document.querySelector('.date');
const time = document.querySelector('#time');
let now = new Date();
if (now.getMonth() < 9 && now.getDay() < 9) {
    date.innerText = `0${now.getDay()}-0${now.getMonth()}-${now.getFullYear()}`
}
else {
    date.innerText = `${now.getDay()}-${now.getMonth()}-${now.getFullYear()}`
}
if (now.getHours() < 12 && now.getMinutes() < 10) {
    time.innerText = `0${now.getHours()}:0${now.getMinutes()}AM`;
}
else if (now.getHours() < 12 && now.getMinutes() > 10) {
    time.innerText = `0${now.getHours()}:${now.getMinutes()}AM`;
}
else if(now.getHours()>12 && now.getMinutes()<10)
{
    time.innerText = `${now.getHours()-12}:0${now.getMinutes()}PM`;
}
else if(now.getHours()>12 && now.getMinutes()>10)
{
    time.innerText = `${now.getHours()-12}:${now.getMinutes()}PM`;
}
else {
    time.innerText = `${now.getHours()}:${now.getMinutes()}PM`;
}

const day = (dayNumber) => {
    if (dayNumber > 7) {
        dayNumber = dayNumber - 7;
    }
    if (dayNumber == 1) {
        return 'Monday';
    }
    else if (dayNumber == 2) {
        return 'Tuesday';
    }
    else if (dayNumber == 3) {
        return 'Wednesday';
    }
    else if (dayNumber == 4) {
        return 'Thursday';
    }
    else if (dayNumber == 5) {
        return 'Friday';
    }
    else if (dayNumber == 6) {
        return 'Saturday';
    }
    else {
        return 'Sunday';
    }
}
const myKey = 'dfd7f03ceb7c3439004315d1636a5251';

const request = axios(`http://api.openweathermap.org/data/2.5/weather?q=Jammu&appid=dfd7f03ceb7c3439004315d1636a5251`)
    .then((response) => {
        const Location = document.querySelector('#location');
        Location.innerText = response.data.name;
        const wind = document.querySelector('#wind1');
        wind.innerHTML = response.data.wind.speed;
        const rain = document.querySelector('#rain');
        rain.innerText = response.data.clouds.all;
        const weatherDesc = document.querySelector('.weather');
        weatherDesc.innerText = response.data.weather[0].description;
        const curr_temp = document.querySelector('.currentTemp1');
        // const currentTemperature = Math.floor(((response.data.main.temp-32)*5)/9);
        curr_temp.innerText = Math.floor((response.data.main.temp - 273.15));
        const country = document.querySelector('.country');
        country.innerText = response.data.sys.country;
        const humid = document.querySelector('#humidity');
        humid.innerText = response.data.main.humidity;

        const tempDayPresent = document.querySelector('#tempPresentDay');
        tempDayPresent.innerText = Math.floor((response.data.main.temp - 273.15));

        const presentDay = document.querySelector('#dayPresent');
        presentDay.innerText = day(now.getDay());

        const dayNext2 = document.querySelector('#day2');
        dayNext2.innerText = day(now.getDay() + 1);

        const dayNext3 = document.querySelector('#day3');
        dayNext3.innerText = day(now.getDay() + 2);

        const dayNext4 = document.querySelector('#day4');
        dayNext4.innerText = day(now.getDay() + 3);

        const dayNext5 = document.querySelector('#day5');
        dayNext5.innerText = day(now.getDay() + 4);

        const dayNext6 = document.querySelector('#day6');
        dayNext6.innerText = day(now.getDay() + 5);

        const dayNext7 = document.querySelector('#day7');
        dayNext7.innerText = day(now.getDay() + 6);

        const svg = document.querySelector('#currentWeathersvg');
        if(response.data.weather[0].description=='scattered clouds')
        {
            svg.classList.add(hide);
            const image = document.createElement('img')
            const div = document.querySelector('#currentWeatherIcon');
            image.src = 'https://cdn3.iconfinder.com/data/icons/nature-emoji/50/Cloudy-256.png';
            div.append(image);
        }

        const latitude = response.data.coord.lat;
        const longitude = response.data.coord.lon;

        const request2 = axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=dfd7f03ceb7c3439004315d1636a5251`)
        .then((response2)=>
        {
            if(now.getHours()>12)
            {
                const temp2 = document.querySelector('#temp2')
            temp2.innerText = Math.floor((response2.data.daily[1].temp.night)-273);
            const temp3 = document.querySelector('#temp3')
            temp3.innerText = Math.floor((response2.data.daily[2].temp.night)-273);
            const temp4 = document.querySelector('#temp4')
            temp4.innerText = Math.floor((response2.data.daily[3].temp.night)-273);
            const temp5 = document.querySelector('#temp5')
            temp5.innerText = Math.floor((response2.data.daily[4].temp.night)-273);
            const temp6 = document.querySelector('#temp6')
            temp6.innerText = Math.floor((response2.data.daily[5].temp.night)-273);
            const temp7 = document.querySelector('#temp7')
            temp7.innerText = Math.floor((response2.data.daily[6].temp.night)-273);
            }
            else
            {
                const temp2 = document.querySelector('#temp2')
            temp2.innerText = Math.floor((response2.data.daily[1].temp.day)-273);
            const temp3 = document.querySelector('#temp3')
            temp3.innerText = Math.floor((response2.data.daily[2].temp.day)-273);
            const temp4 = document.querySelector('#temp4')
            temp4.innerText = Math.floor((response2.data.daily[3].temp.day)-273);
            const temp5 = document.querySelector('#temp5')
            temp5.innerText = Math.floor((response2.data.daily[4].temp.day)-273);
            const temp6 = document.querySelector('#temp6')
            temp6.innerText = Math.floor((response2.data.daily[5].temp.day)-273);
            const temp7 = document.querySelector('#temp7')
            temp7.innerText = Math.floor((response2.data.daily[6].temp.day)-273);
            }

            const dayDesc1 = document.querySelector('#dayDesc1')
            dayDesc1.innerText = response2.data.daily[0].weather[0].description;
            const dayDesc2 = document.querySelector('#dayDesc2')
            dayDesc2.innerText = response2.data.daily[1].weather[0].description;
            const dayDesc3 = document.querySelector('#dayDesc3')
            dayDesc3.innerText = response2.data.daily[2].weather[0].description;
            const dayDesc4 = document.querySelector('#dayDesc4')
            dayDesc4.innerText = response2.data.daily[3].weather[0].description;
            const dayDesc5 = document.querySelector('#dayDesc5')
            dayDesc5.innerText = response2.data.daily[4].weather[0].description;
            const dayDesc6 = document.querySelector('#dayDesc6')
            dayDesc6.innerText = response2.data.daily[5].weather[0].description;
            const dayDesc7 = document.querySelector('#dayDesc7')
            dayDesc7.innerText = response2.data.daily[6].weather[0].description;
        })
    })