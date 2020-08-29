

function clearBox() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("future").innerHTML = "";
    document.getElementById("target").reset;
};

var form = document.getElementById("target");


form.onsubmit = writeCity



function writeCity(event) {
    clearBox();
    var input = document.getElementById("city-name").value;
    var cityP = document.createElement("div");
    cityP.setAttribute("class", "button mt-3 mb-3 clickable");
    cityP.setAttribute("id", "clickable");
    var targetCity = document.getElementById("city-list");
    var cityPInput = document.createTextNode(input);
    cityP.appendChild(cityPInput)
    targetCity.appendChild(cityP);
    localStorage.setItem("lastPlace", cityPInput)
    var inputUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0";
    event.preventDefault();

    $(document).on("click", "div.clickable", function () {
        var input = this.innerHTML;
        var inputUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0"
        event.preventDefault();

        $.ajax({
            url: inputUrl,
            method: "GET"
        }).then(function (response) {
            document.getElementById("results").innerHTML = "";
            
    
            // End api code  //
    
            var cityName = response.name;
            var cityTemp = response.main.temp;
            var cityHumi = response.main.humidity;
            var cityWind = response.wind.speed;
            currentIcon = response.weather["0"].icon;
            currentIconHolder = document.createElement("img");
            currentIconURL = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
            currentIconHolder.setAttribute("src", currentIconURL);
            var forecastDiv = document.createElement("div");
            var resultsTarget = document.getElementById("results");
            forecastDiv.setAttribute("class", "card bg-light text-center fluid mt-3 mb-3");
            forecastDiv.setAttribute("id", "new-div");
            farTemp = ((cityTemp - 273.15) * (9 / 5) + 32);
            var farTemp2 = parseInt(farTemp);
            var cityNameI = document.createTextNode(cityName);
            var cityTempI = document.createTextNode("Temperature: " + farTemp2 + "°F");
            var cityHumiI = document.createTextNode("Humidity: " + cityHumi + "% ");
            var cityWindI = document.createTextNode("Wind: " + cityWind + " MPH ");
            var cityNameH = document.createElement("h4")
            var cityTempH = document.createElement("div")
            var cityHumiH = document.createElement("div")
            var cityWindH = document.createElement("div")
            cityNameH.appendChild(cityNameI)
            cityNameH.appendChild(currentIconHolder);
            cityTempH.appendChild(cityTempI)
            cityHumiH.appendChild(cityHumiI)
            cityWindH.appendChild(cityWindI)
            forecastDiv.appendChild(cityNameH);
            forecastDiv.appendChild(cityTempH);
            forecastDiv.appendChild(cityHumiH);
            forecastDiv.appendChild(cityWindH);
            resultsTarget.appendChild(forecastDiv);
    
        });
    
        var inputUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0"
    
    
    
        $.ajax({
            url: inputUrl2,
            method: "GET"
        }).then(function (response2) {
            document.getElementById("future").innerHTML = "";
    
            var dayOneDiv = document.createElement("div");
            var dayTwoDiv = document.createElement("div");
            var dayThreeDiv = document.createElement("div");
            var dayFourDiv = document.createElement("div")
            var dayFiveDiv = document.createElement("div")
            var forecastHolder = document.createElement("div")
            var forecastRow = document.createElement("div")
            forecastRow.setAttribute("class", "row card-deck")
            forecastHolder.setAttribute("class", "bg-light")
            dayOneDiv.setAttribute("id", "day-one");
            dayTwoDiv.setAttribute("id", "day-two");
            dayThreeDiv.setAttribute("id", "day-three");
            dayFourDiv.setAttribute("id", "day-four");
            dayFiveDiv.setAttribute("id", "day-five");
            dayOneDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
            dayTwoDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
            dayThreeDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
            dayFourDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
            dayFiveDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
            var forecastTarget = document.getElementById("future");
            forecastHolder.innerHTML += "<strong>5-day Forecast<strong>";
            forecastHolder.appendChild(forecastRow);
            forecastTarget.appendChild(forecastHolder);
    
    
            //day one//
    
            cityDate10 = response2.list["0"].dt_txt;
            cityIcon = response2.list["0"].weather["0"].icon
            cityIconUrl = "http://openweathermap.org/img/wn/" + cityIcon + "@2x.png"
            cityDate1 = cityDate10.substring(0, 11);
            dayOneTargetI = document.createTextNode(cityDate1);
            cityDateTemp = response2.list["0"].main.temp;
            cityDateTempFar = ((cityDateTemp - 273.15) * (9 / 5) + 32);
            cityDateTempFars = parseInt(cityDateTempFar);
            cityDateHumi = response2.list["0"].main.humidity;
            cityHumiNode = document.createTextNode("Humidity: " + cityDateHumi + " %");
            cityDateHolder = document.createElement("div");
            cityTempHolder = document.createElement("div");
            cityHumiHolder = document.createElement("div");
            cityIconHolder = document.createElement("img");
            cityIconHolder.setAttribute("src", cityIconUrl);
            cityTempNode = document.createTextNode("Temp: " + cityDateTempFars + "°F ");
            cityTempHolder.appendChild(cityTempNode);
            cityHumiHolder.appendChild(cityHumiNode);
            cityDateHolder.appendChild(dayOneTargetI);
            dayOneDiv.appendChild(cityDateHolder);
            dayOneDiv.appendChild(cityIconHolder)
            dayOneDiv.appendChild(cityTempHolder);
            dayOneDiv.appendChild(cityHumiHolder);
            forecastRow.appendChild(dayOneDiv);
    
            //day two //
    
            cityDate20 = response2.list["7"].dt_txt;
            cityIcon2 = response2.list["7"].weather["0"].icon
            console.log(cityIcon2);
            cityIconUrl2 = "http://openweathermap.org/img/wn/" + cityIcon2 + "@2x.png";
            cityDate2 = cityDate20.substring(0, 11);
            dayTwoTargetI2 = document.createTextNode(cityDate2);
            cityDateTemp2 = response2.list["7"].main.temp;
            cityDateTempFar2 = ((cityDateTemp2 - 273.15) * (9 / 5) + 32);
            cityDateTempFars2 = parseInt(cityDateTempFar2);
            cityDateHumi2 = response2.list["7"].main.humidity;
            cityHumiNode2 = document.createTextNode("Humidity: " + cityDateHumi2 + " %");
            cityDateHolder2 = document.createElement("div");
            cityTempHolder2 = document.createElement("div");
            cityHumiHolder2 = document.createElement("div");
            cityIconHolder2 = document.createElement("img");
            cityIconHolder2.setAttribute("src", cityIconUrl2);
            cityTempNode2 = document.createTextNode("Temp: " + cityDateTempFars2 + "°F ");
            cityTempHolder2.appendChild(cityTempNode2);
            cityHumiHolder2.appendChild(cityHumiNode2);
            cityDateHolder2.appendChild(dayTwoTargetI2);
            dayTwoDiv.appendChild(cityDateHolder2);
            dayTwoDiv.appendChild(cityIconHolder2)
            dayTwoDiv.appendChild(cityTempHolder2);
            dayTwoDiv.appendChild(cityHumiHolder2);
            forecastRow.appendChild(dayTwoDiv);
    
    
            //day three //
    
            cityDate30 = response2.list["15"].dt_txt;
            cityIcon3 = response2.list["15"].weather["0"].icon
            cityIconUrl3 = "http://openweathermap.org/img/wn/" + cityIcon3 + "@2x.png"
            cityDate3 = cityDate30.substring(0, 11);
            dayThreeTargetI3 = document.createTextNode(cityDate3);
            cityDateTemp3 = response2.list["15"].main.temp;
            cityDateTempFar3 = ((cityDateTemp3 - 273.15) * (9 / 5) + 32);
            cityDateTempFars3 = parseInt(cityDateTempFar3);
            cityDateHumi3 = response2.list["15"].main.humidity;
            cityHumiNode3 = document.createTextNode("Humidity: " + cityDateHumi3 + " %");
            cityDateHolder3 = document.createElement("div");
            cityTempHolder3 = document.createElement("div");
            cityHumiHolder3 = document.createElement("div");
            cityIconHolder3 = document.createElement("img");
            cityIconHolder3.setAttribute("src", cityIconUrl3);
            cityTempNode3 = document.createTextNode("Temp: " + cityDateTempFars3 + "°F ");
            cityTempHolder3.appendChild(cityTempNode3);
            cityHumiHolder3.appendChild(cityHumiNode3);
            cityDateHolder3.appendChild(dayThreeTargetI3);
            dayThreeDiv.appendChild(cityDateHolder3);
            dayThreeDiv.appendChild(cityIconHolder3);
            dayThreeDiv.appendChild(cityTempHolder3);
            dayThreeDiv.appendChild(cityHumiHolder3);
            forecastRow.appendChild(dayThreeDiv);
    
            //day four//
    
            cityDate40 = response2.list["23"].dt_txt;
            cityIcon4 = response2.list["23"].weather["0"].icon
            cityIconUrl4 = "http://openweathermap.org/img/wn/" + cityIcon4 + "@2x.png"
            cityDate4 = cityDate40.substring(0, 11);
            dayFourTargetI4 = document.createTextNode(cityDate4);
            cityDateTemp4 = response2.list["23"].main.temp;
            cityDateTempFar4 = ((cityDateTemp4 - 273.15) * (9 / 5) + 32);
            cityDateTempFars4 = parseInt(cityDateTempFar4);
            cityDateHumi4 = response2.list["23"].main.humidity;
            cityHumiNode4 = document.createTextNode("Humidity: " + cityDateHumi4 + " %");
            cityDateHolder4 = document.createElement("div");
            cityTempHolder4 = document.createElement("div");
            cityHumiHolder4 = document.createElement("div");
            cityIconHolder4 = document.createElement("img");
            cityIconHolder4.setAttribute("src", cityIconUrl4);
            cityTempNode4 = document.createTextNode("Temp: " + cityDateTempFars4 + "°F ");
            cityTempHolder4.appendChild(cityTempNode4);
            cityHumiHolder4.appendChild(cityHumiNode4);
            cityDateHolder4.appendChild(dayFourTargetI4);
            dayFourDiv.appendChild(cityDateHolder4);
            dayFourDiv.appendChild(cityIconHolder4);
            dayFourDiv.appendChild(cityTempHolder4);
            dayFourDiv.appendChild(cityHumiHolder4);
            forecastRow.appendChild(dayFourDiv);
    
            //day five //
    
            cityDate50 = response2.list["31"].dt_txt;
            cityIcon5 = response2.list["31"].weather["0"].icon
            cityIconUrl5 = "http://openweathermap.org/img/wn/" + cityIcon5 + "@2x.png"
            cityDate5 = cityDate50.substring(0, 11);
            dayFiveTargetI5 = document.createTextNode(cityDate5);
            cityDateTemp5 = response2.list["31"].main.temp;
            cityDateTempFar5 = ((cityDateTemp5 - 273.15) * (9 / 5) + 32);
            cityDateTempFars5 = parseInt(cityDateTempFar5);
            cityDateHumi5 = response2.list["31"].main.humidity;
            cityHumiNode5 = document.createTextNode("Humidity: " + cityDateHumi5 + " %");
            cityDateHolder5 = document.createElement("div");
            cityTempHolder5 = document.createElement("div");
            cityHumiHolder5 = document.createElement("div");
            cityIconHolder5 = document.createElement("img");
            cityIconHolder5.setAttribute("src", cityIconUrl5);
            cityTempNode5 = document.createTextNode("Temp: " + cityDateTempFars5 + "°F ");
            cityTempHolder5.appendChild(cityTempNode5);
            cityHumiHolder5.appendChild(cityHumiNode5);
            cityDateHolder5.appendChild(dayFiveTargetI5);
            dayFiveDiv.appendChild(cityDateHolder5);
            dayFiveDiv.appendChild(cityIconHolder5);
            dayFiveDiv.appendChild(cityTempHolder5);
            dayFiveDiv.appendChild(cityHumiHolder5);
            forecastRow.appendChild(dayFiveDiv);
    
    
        });
    })

    // The code between the next two comments were generated from open weather map, and it includes my //

    $.ajax({
        url: inputUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        // End api code  //

        var cityName = response.name;
        var cityTemp = response.main.temp;
        var cityHumi = response.main.humidity;
        var cityWind = response.wind.speed;
        currentIcon = response.weather["0"].icon;
        currentIconHolder = document.createElement("img");
        currentIconURL = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
        currentIconHolder.setAttribute("src", currentIconURL);
        var forecastDiv = document.createElement("div");
        var resultsTarget = document.getElementById("results");
        forecastDiv.setAttribute("class", "card bg-light text-center fluid mt-3 mb-3");
        forecastDiv.setAttribute("id", "new-div");
        farTemp = ((cityTemp - 273.15) * (9 / 5) + 32);
        var farTemp2 = parseInt(farTemp);
        var cityNameI = document.createTextNode(cityName);
        var cityTempI = document.createTextNode("Temperature: " + farTemp2 + "°F");
        var cityHumiI = document.createTextNode("Humidity: " + cityHumi + "% ");
        var cityWindI = document.createTextNode("Wind: " + cityWind + " MPH ");
        var cityNameH = document.createElement("h4")
        var cityTempH = document.createElement("div")
        var cityHumiH = document.createElement("div")
        var cityWindH = document.createElement("div")
        cityNameH.appendChild(cityNameI)
        cityNameH.appendChild(currentIconHolder);
        cityTempH.appendChild(cityTempI)
        cityHumiH.appendChild(cityHumiI)
        cityWindH.appendChild(cityWindI)
        forecastDiv.appendChild(cityNameH);
        forecastDiv.appendChild(cityTempH);
        forecastDiv.appendChild(cityHumiH);
        forecastDiv.appendChild(cityWindH);
        resultsTarget.appendChild(forecastDiv);

    });

    var inputUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0"



    $.ajax({
        url: inputUrl2,
        method: "GET"
    }).then(function (response2) {

        var dayOneDiv = document.createElement("div");
        var dayTwoDiv = document.createElement("div");
        var dayThreeDiv = document.createElement("div");
        var dayFourDiv = document.createElement("div")
        var dayFiveDiv = document.createElement("div")
        var forecastHolder = document.createElement("div")
        var forecastRow = document.createElement("div")
        forecastRow.setAttribute("class", "row card-deck")
        forecastHolder.setAttribute("class", "bg-light")
        dayOneDiv.setAttribute("id", "day-one");
        dayTwoDiv.setAttribute("id", "day-two");
        dayThreeDiv.setAttribute("id", "day-three");
        dayFourDiv.setAttribute("id", "day-four");
        dayFiveDiv.setAttribute("id", "day-five");
        dayOneDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
        dayTwoDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
        dayThreeDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
        dayFourDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
        dayFiveDiv.setAttribute("class", "card mt-3 mb-3 bg-primary text-white");
        var forecastTarget = document.getElementById("future");
        forecastHolder.innerHTML += "<strong>5-day Forecast<strong>";
        forecastHolder.appendChild(forecastRow);
        forecastTarget.appendChild(forecastHolder);


        //day one//

        cityDate10 = response2.list["0"].dt_txt;
        cityIcon = response2.list["0"].weather["0"].icon
        cityIconUrl = "http://openweathermap.org/img/wn/" + cityIcon + "@2x.png"
        cityDate1 = cityDate10.substring(0, 11);
        dayOneTargetI = document.createTextNode(cityDate1);
        cityDateTemp = response2.list["0"].main.temp;
        cityDateTempFar = ((cityDateTemp - 273.15) * (9 / 5) + 32);
        cityDateTempFars = parseInt(cityDateTempFar);
        cityDateHumi = response2.list["0"].main.humidity;
        cityHumiNode = document.createTextNode("Humidity: " + cityDateHumi + " %");
        cityDateHolder = document.createElement("div");
        cityTempHolder = document.createElement("div");
        cityHumiHolder = document.createElement("div");
        cityIconHolder = document.createElement("img");
        cityIconHolder.setAttribute("src", cityIconUrl);
        cityTempNode = document.createTextNode("Temp: " + cityDateTempFars + "°F ");
        cityTempHolder.appendChild(cityTempNode);
        cityHumiHolder.appendChild(cityHumiNode);
        cityDateHolder.appendChild(dayOneTargetI);
        dayOneDiv.appendChild(cityDateHolder);
        dayOneDiv.appendChild(cityIconHolder)
        dayOneDiv.appendChild(cityTempHolder);
        dayOneDiv.appendChild(cityHumiHolder);
        forecastRow.appendChild(dayOneDiv);

        //day two //

        cityDate20 = response2.list["7"].dt_txt;
        cityIcon2 = response2.list["7"].weather["0"].icon
        console.log(cityIcon2);
        cityIconUrl2 = "http://openweathermap.org/img/wn/" + cityIcon2 + "@2x.png";
        cityDate2 = cityDate20.substring(0, 11);
        dayTwoTargetI2 = document.createTextNode(cityDate2);
        cityDateTemp2 = response2.list["7"].main.temp;
        cityDateTempFar2 = ((cityDateTemp2 - 273.15) * (9 / 5) + 32);
        cityDateTempFars2 = parseInt(cityDateTempFar2);
        cityDateHumi2 = response2.list["7"].main.humidity;
        cityHumiNode2 = document.createTextNode("Humidity: " + cityDateHumi2 + " %");
        cityDateHolder2 = document.createElement("div");
        cityTempHolder2 = document.createElement("div");
        cityHumiHolder2 = document.createElement("div");
        cityIconHolder2 = document.createElement("img");
        cityIconHolder2.setAttribute("src", cityIconUrl2);
        cityTempNode2 = document.createTextNode("Temp: " + cityDateTempFars2 + "°F ");
        cityTempHolder2.appendChild(cityTempNode2);
        cityHumiHolder2.appendChild(cityHumiNode2);
        cityDateHolder2.appendChild(dayTwoTargetI2);
        dayTwoDiv.appendChild(cityDateHolder2);
        dayTwoDiv.appendChild(cityIconHolder2)
        dayTwoDiv.appendChild(cityTempHolder2);
        dayTwoDiv.appendChild(cityHumiHolder2);
        forecastRow.appendChild(dayTwoDiv);


        //day three //

        cityDate30 = response2.list["15"].dt_txt;
        cityIcon3 = response2.list["15"].weather["0"].icon
        cityIconUrl3 = "http://openweathermap.org/img/wn/" + cityIcon3 + "@2x.png"
        cityDate3 = cityDate30.substring(0, 11);
        dayThreeTargetI3 = document.createTextNode(cityDate3);
        cityDateTemp3 = response2.list["15"].main.temp;
        cityDateTempFar3 = ((cityDateTemp3 - 273.15) * (9 / 5) + 32);
        cityDateTempFars3 = parseInt(cityDateTempFar3);
        cityDateHumi3 = response2.list["15"].main.humidity;
        cityHumiNode3 = document.createTextNode("Humidity: " + cityDateHumi3 + " %");
        cityDateHolder3 = document.createElement("div");
        cityTempHolder3 = document.createElement("div");
        cityHumiHolder3 = document.createElement("div");
        cityIconHolder3 = document.createElement("img");
        cityIconHolder3.setAttribute("src", cityIconUrl3);
        cityTempNode3 = document.createTextNode("Temp: " + cityDateTempFars3 + "°F ");
        cityTempHolder3.appendChild(cityTempNode3);
        cityHumiHolder3.appendChild(cityHumiNode3);
        cityDateHolder3.appendChild(dayThreeTargetI3);
        dayThreeDiv.appendChild(cityDateHolder3);
        dayThreeDiv.appendChild(cityIconHolder3);
        dayThreeDiv.appendChild(cityTempHolder3);
        dayThreeDiv.appendChild(cityHumiHolder3);
        forecastRow.appendChild(dayThreeDiv);

        //day four//

        cityDate40 = response2.list["23"].dt_txt;
        cityIcon4 = response2.list["23"].weather["0"].icon
        cityIconUrl4 = "http://openweathermap.org/img/wn/" + cityIcon4 + "@2x.png"
        cityDate4 = cityDate40.substring(0, 11);
        dayFourTargetI4 = document.createTextNode(cityDate4);
        cityDateTemp4 = response2.list["23"].main.temp;
        cityDateTempFar4 = ((cityDateTemp4 - 273.15) * (9 / 5) + 32);
        cityDateTempFars4 = parseInt(cityDateTempFar4);
        cityDateHumi4 = response2.list["23"].main.humidity;
        cityHumiNode4 = document.createTextNode("Humidity: " + cityDateHumi4 + " %");
        cityDateHolder4 = document.createElement("div");
        cityTempHolder4 = document.createElement("div");
        cityHumiHolder4 = document.createElement("div");
        cityIconHolder4 = document.createElement("img");
        cityIconHolder4.setAttribute("src", cityIconUrl4);
        cityTempNode4 = document.createTextNode("Temp: " + cityDateTempFars4 + "°F ");
        cityTempHolder4.appendChild(cityTempNode4);
        cityHumiHolder4.appendChild(cityHumiNode4);
        cityDateHolder4.appendChild(dayFourTargetI4);
        dayFourDiv.appendChild(cityDateHolder4);
        dayFourDiv.appendChild(cityIconHolder4);
        dayFourDiv.appendChild(cityTempHolder4);
        dayFourDiv.appendChild(cityHumiHolder4);
        forecastRow.appendChild(dayFourDiv);

        //day five //

        cityDate50 = response2.list["31"].dt_txt;
        cityIcon5 = response2.list["31"].weather["0"].icon
        cityIconUrl5 = "http://openweathermap.org/img/wn/" + cityIcon5 + "@2x.png"
        cityDate5 = cityDate50.substring(0, 11);
        dayFiveTargetI5 = document.createTextNode(cityDate5);
        cityDateTemp5 = response2.list["31"].main.temp;
        cityDateTempFar5 = ((cityDateTemp5 - 273.15) * (9 / 5) + 32);
        cityDateTempFars5 = parseInt(cityDateTempFar5);
        cityDateHumi5 = response2.list["31"].main.humidity;
        cityHumiNode5 = document.createTextNode("Humidity: " + cityDateHumi5 + " %");
        cityDateHolder5 = document.createElement("div");
        cityTempHolder5 = document.createElement("div");
        cityHumiHolder5 = document.createElement("div");
        cityIconHolder5 = document.createElement("img");
        cityIconHolder5.setAttribute("src", cityIconUrl5);
        cityTempNode5 = document.createTextNode("Temp: " + cityDateTempFars5 + "°F ");
        cityTempHolder5.appendChild(cityTempNode5);
        cityHumiHolder5.appendChild(cityHumiNode5);
        cityDateHolder5.appendChild(dayFiveTargetI5);
        dayFiveDiv.appendChild(cityDateHolder5);
        dayFiveDiv.appendChild(cityIconHolder5);
        dayFiveDiv.appendChild(cityTempHolder5);
        dayFiveDiv.appendChild(cityHumiHolder5);
        forecastRow.appendChild(dayFiveDiv);


    });
};


function buttonCity(event) {
    clearBox();
    var inputUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0";
    event.preventDefault();

    // The code between the next two comments were generated from open weather map, and it includes my //

    $.ajax({
        url: inputUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        // End api code  //

        var cityName = response.name;
        var cityTemp = response.main.temp;
        var cityHumi = response.main.humidity;
        var cityWind = response.wind.speed;
        var forecastDiv = document.createElement("div");
        var resultsTarget = document.getElementById("results");
        forecastDiv.setAttribute("class", "col-md-6 bg-light text-center");
        forecastDiv.setAttribute("id", "new-div");
        farTemp = ((cityTemp - 273.15) * (9 / 5) + 32);
        var cityNameI = document.createTextNode("Location: " + cityName + " ");
        var cityTempI = document.createTextNode("Temperature: " + farTemp + " ");
        var cityHumiI = document.createTextNode("Humidity: " + cityHumi + "% ");
        var cityWindI = document.createTextNode("Wind: " + cityWind + " MPH ");
        forecastDiv.appendChild(cityNameI);
        forecastDiv.appendChild(cityTempI);
        forecastDiv.appendChild(cityHumiI);
        forecastDiv.appendChild(cityWindI);
        resultsTarget.appendChild(forecastDiv);

    });

    var inputUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=96bb347b7c561581d9e728d6fa3ac2e0"


    $.ajax({
        url: inputUrl2,
        method: "GET"
    }).then(function (response2) {

        var dayOneDiv = document.createElement("div");
        var dayTwoDiv = document.createElement("div");
        var dayThreeDiv = document.createElement("div");
        var forecastHolder = document.createElement("div")
        var forecastRow = document.createElement("div")
        forecastRow.setAttribute("class", "row")
        forecastHolder.setAttribute("class", "col-lg-6 container text-center bg-light")
        dayOneDiv.setAttribute("id", "day-one");
        dayTwoDiv.setAttribute("id", "day-two");
        dayThreeDiv.setAttribute("id", "day-three");
        dayOneDiv.setAttribute("class", "col-sm-2");
        dayTwoDiv.setAttribute("class", "col-sm-2");
        dayThreeDiv.setAttribute("class", "col-sm-2");
        var forecastTarget = document.getElementById("future");
        forecastHolder.appendChild(forecastRow)
        forecastTarget.appendChild(forecastHolder);


        //day one//

        cityDate1 = response2.list["0"].dt_txt;
        dayOneTargetI = document.createTextNode(" Forecast for " + cityDate1);
        dayOneDiv.appendChild(dayOneTargetI);
        forecastRow.appendChild(dayOneDiv);

        //day two // 

        cityDate2 = response2.list["7"].dt_txt;
        dayTwoTargetI = document.createTextNode(" Forecast for " + cityDate2);
        dayTwoDiv.appendChild(dayTwoTargetI);
        forecastRow.appendChild(dayTwoDiv);

        //day three // 

        cityDate3 = response2.list["15"].dt_txt;
        dayThreeTargetI = document.createTextNode(" Forecast for " + cityDate3);
        dayThreeDiv.appendChild(dayThreeTargetI);
        forecastRow.appendChild(dayThreeDiv);
    })


};