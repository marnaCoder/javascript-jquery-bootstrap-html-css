window.onload=function(){
    var ipUrl='https://ipinfo.io/json';
    var appId='appid=b6907d289e10d714a6e88b30761fae22';
    var location=document.getElementById('location');
    document.getElementById('date').innerHTML=Date();
    httpRequest(ipUrl)
    function httpRequest(url,callback){
        var httpReqIp=new XMLHttpRequest();
        httpReqIp.open('GET',url,true);

        httpReqIp.onreadystatechange=function(){
            
              if(httpReqIp.readyState==4 && httpReqIp.status==200)
            {
                var jsonIp=JSON.parse(httpReqIp.responseText);
                console.log(jsonIp)
                var locationCity=jsonIp.city;
                var locationCountry=jsonIp.country;
                location.innerHTML=locationCity+','+locationCountry;
                var lat=jsonIp.loc.split(',')[0]
                var long=jsonIp.loc.split(',')[1]
                var WeatherUrl=`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6907d289e10d714a6e88b30761fae22`;
                weatherRequest(WeatherUrl);
            }
        }
        httpReqIp.send();
    }
    function weatherRequest(url,callback){
        var httpWeatherRequest=new XMLHttpRequest();
        httpWeatherRequest.open('GET',url,true);

        httpWeatherRequest.onreadystatechange=function(){
            
            if(httpWeatherRequest.readyState==4 && httpWeatherRequest.status==200)
            {
                var jsonWeather=JSON.parse(httpWeatherRequest.responseText);
                console.log(jsonWeather);
                //document.getElementById('desc').innerHTML=jsonWeather.weather[0].description;
                document.getElementById('description').innerHTML=`<i id='icon-desc' class='wi wi-owm-${jsonWeather.weather[0].id}'></i>
                                                                    <p id='desc'>${jsonWeather.weather[0].description}</p>`
                document.getElementById('temp').innerHTML=jsonWeather.main.temp;
                document.getElementById('humidity').innerHTML=jsonWeather.main.humidity;
                document.getElementById('wind-speed').innerHTML=jsonWeather.wind.speed;
                document.getElementById('wind-degree').innerHTML=jsonWeather.wind.deg;


            }
        }
        httpWeatherRequest.send();
    }
}