(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{62:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(22),r=a.n(i),o=a(3),l=a(4),d=a(6),h=a(5),j=function(e){switch(e){case"clear sky":return"wi wi-day-sunny";case"few clouds":return"wi wi-day-cloudy";case"scattered clouds":return"wi wi-cloud";case"broken clouds":case"overcast clouds":return"wi wi-cloudy";case"light intensity drizzle":case"drizzle":case"heavy intensity drizzle":case"light intensity drizzle rain":case"drizzle rain":case" heavy intensity drizzle rain":case" shower rain and drizzle":case" heavy shower rain and drizzle":case"shower drizzle":case"light intensity shower rain":case"heavy intensity shower rain":case"ragged shower rain":case"shower rain":return"wi wi-showers";case"extreme rain":case"light rain":case"moderate rain":case"heavy intensity rain":case"very heavy rain":case"rain":return"wi wi-rain";case"squalls":case"thunderstorm with light rain ":case"thunderstorm with rain":case"thunderstorm with heavy rain":case"light thunderstorm":case"heavy thunderstorm":case"thunderstorm":case"ragged thunderstorm":case"thunderstorm with light drizzle":case"thunderstorm with drizzle":case"thunderstorm with heavy drizzle":return"wi wi-thunderstorm";case"freezing rain":case"snow":case"light snow":case"heavy snow":case"sleet":case"light shower sleet":case"shower sleet":case"light rain and snow":case"rain and snow":case"light shower snow":case"shower snow":case"heavy shower snow":return"wi wi-snowflake-cold";case"fog":case"haze":case"mist":return"wi wi-fog";case"smoke":return"wi wi-smoke";case"dust":case"sand":case"sand/ dust whirls ":return"wi wi-dust";case"volcanic ash":return"wi wi-volcano";case"tornado":return"wi wi-tornado";default:return""}},m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["January","February","March","April","May","June","July","August","September","October","November","December"],b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.mainData,t=e.sys,a=e.name,c=e.wind,n=e.main,i=e.dt,r=e.weather;return Object(s.jsx)("section",{id:"main-section",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"main-city-date",children:[Object(s.jsx)("h2",{id:"main-city",children:"".concat(a,", ").concat(t.country)}),Object(s.jsx)("p",{id:"main-date",children:"".concat(m[new Date(1e3*i).getDay()],", ").concat(new Date(1e3*i).getDate()," ").concat(u[new Date(1e3*i).getMonth()])})]})})}),Object(s.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(s.jsx)("div",{className:"col-lg-6 mt-5",children:Object(s.jsx)("div",{className:"left",children:Object(s.jsxs)("div",{className:"main-weather-info",children:[Object(s.jsx)("div",{className:"icon",children:Object(s.jsx)("i",{className:"".concat(j(r[0].description.toLocaleLowerCase()))})}),Object(s.jsxs)("div",{className:"temperature-info",children:[Object(s.jsxs)("div",{className:"temperature",children:[Object(s.jsx)("p",{children:"".concat(Math.floor(n.temp))}),Object(s.jsx)("i",{className:"far fa-circle"})]}),Object(s.jsx)("p",{className:"weather-description",children:"".concat(r[0].description)})]})]})})}),Object(s.jsx)("div",{className:"col-lg-6 mt-5",children:Object(s.jsxs)("div",{className:"right",children:[Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{className:"info-top-wrap",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(this.props.currentHigh)}),Object(s.jsx)("i",{className:"far fa-circle"})]}),Object(s.jsx)("p",{className:"info-bottom",children:"High"})]}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(Math.floor(c.speed),"m/s")}),Object(s.jsx)("p",{className:"info-bottom",children:"Wind"})]}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(new Date(1e3*t.sunrise).getHours(),":").concat(new Date(1e3*t.sunrise).getMinutes())}),Object(s.jsx)("p",{className:"info-bottom",children:"Sunrise"})]}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{className:"info-top-wrap",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(this.props.currentLow)}),Object(s.jsx)("i",{className:"far fa-circle"})]}),Object(s.jsx)("p",{classNme:"info-bottom",children:"Low"})]}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(n.humidity,"%")}),Object(s.jsx)("p",{class:"info-bottom",children:"Humidity"})]}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(new Date(1e3*t.sunset).getHours(),":").concat(new Date(1e3*t.sunset).getMinutes())}),Object(s.jsx)("p",{className:"info-bottom",children:"Sunset"})]})]})})]})]})})}}]),a}(n.a.Component),p=a(11),w=a(23),O=a.n(w),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={dots:!1,arrows:!1,infinite:!0,slidesToShow:this.props.todaysArr.length>=6?6:this.props.todaysArr.length,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!1,responsive:[{breakpoint:1399.98,settings:{slidesToShow:this.props.todaysArr.length>=5?5:this.props.todaysArr.length,slidesToScroll:1}},{breakpoint:1199.98,settings:{slidesToShow:this.props.todaysArr.length>=4?4:this.props.todaysArr.length,slidesToScroll:1}},{breakpoint:991.98,settings:{slidesToShow:this.props.todaysArr.length>=3?3:this.props.todaysArr.length,slidesToScroll:1}},{breakpoint:767.98,settings:{slidesToShow:this.props.todaysArr.length>=2?2:this.props.todaysArr.length,slidesToScroll:1}},{breakpoint:459.98,settings:{slidesToShow:this.props.todaysArr.length>=1?1:this.props.todaysArr.length,slidesToScroll:1}}]};return Object(s.jsx)("section",{id:"todays-weather",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("p",{id:"section-head",children:"Todays Weather"})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12 my-5",children:Object(s.jsx)(O.a,Object(p.a)(Object(p.a)({},e),{},{children:this.props.todaysArr.map((function(e,t){return Object(s.jsxs)("div",{className:"card-today-weather",children:[Object(s.jsx)("p",{children:"".concat(new Date(1e3*e.dt).getHours(),":00")}),Object(s.jsx)("i",{className:"".concat(j(e.weather[0].description.toLocaleLowerCase()))}),Object(s.jsxs)("div",{className:"temperature",children:[Object(s.jsx)("p",{children:"".concat(Math.floor(e.temp))}),Object(s.jsx)("i",{className:"far fa-circle"})]})]},t)}))}))})})]})})}}]),a}(n.a.Component),y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getDays=function(){return e.props.nextDaysArr.map((function(e,t){return Object(s.jsx)("div",{className:"col-12 mt-5",children:Object(s.jsx)("div",{className:"card-next-day",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(y[new Date(1e3*e.dt).getDay()].substring(0,3))}),Object(s.jsx)("p",{className:"info-bottom",children:"".concat(new Date(1e3*e.dt).getDate(),"/").concat(new Date(1e3*e.dt).getMonth())})]})}),Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsx)("div",{className:"card-info",children:Object(s.jsx)("i",{className:"".concat(j(e.weather[0].description.toLocaleLowerCase()))})})}),Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsxs)("div",{className:"info-top",children:[Object(s.jsx)("p",{children:"".concat(Math.floor(e.temp.max))}),Object(s.jsx)("i",{className:"far fa-circle"})]}),Object(s.jsx)("p",{className:"info-bottom",children:"High"})]})}),Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsxs)("div",{className:"info-top",children:[Object(s.jsx)("p",{children:"".concat(Math.floor(e.temp.min))}),Object(s.jsx)("i",{className:"far fa-circle"})]}),Object(s.jsx)("p",{className:"info-bottom",children:"Low"})]})}),Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(Math.floor(e.wind_speed),"m/s")}),Object(s.jsx)("p",{className:"info-bottom",children:"Wind"})]})}),Object(s.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsx)("p",{className:"info-top",children:"".concat(e.humidity,"%")}),Object(s.jsx)("p",{className:"info-bottom",children:"Humidity"})]})})]})})},t)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"next-days",children:Object(s.jsxs)("div",{className:"container",style:{paddingBottom:"60px"},children:[Object(s.jsx)("div",{className:"row mt-5",children:Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("p",{id:"next-head",children:"Next 6 Days"})})}),Object(s.jsx)("div",{className:"row",children:this.getDays()})]})})}}]),a}(n.a.Component),v=a(10),g=a.n(v),N=[],D=[],z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={lat:null,lon:null,weKey:"727e1baf6c9a5487365e0f7ab5ee71ec",mainData:null,currentLow:null,currentHigh:null,todaysData:[],nextDaysData:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({lat:t.coords.latitude,lon:t.coords.longitude}),g.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e.state.lat,"&lon=").concat(e.state.lon,"&units=metric&appid=").concat(e.state.weKey),{mode:"cors"}).then((function(t){e.setState({mainData:t.data})})),g.a.get("http://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.state.lat,"&lon=").concat(e.state.lon,"&units=metric&appid=").concat(e.state.weKey),{mode:"cors"}).then((function(t){N=[],D=[],t.data.hourly.forEach((function(e){if(new Date(1e3*e.dt).getDate()===new Date(1e3*t.data.hourly[0].dt).getDate())return N.push(e)})),t.data.daily.forEach((function(e){new Date(1e3*e.dt).getDate()!==new Date(1e3*t.data.daily[0].dt).getDate()&&new Date(1e3*e.dt).getDate()!==new Date(1e3*t.data.daily[0].dt).getDate()+7&&D.push(e)})),e.setState({currentHigh:Math.floor(t.data.daily[0].temp.max),currentLow:Math.floor(t.data.daily[0].temp.min),todaysData:N,nextDaysData:D})}))}))}},{key:"render",value:function(){return null==this.state.mainData?Object(s.jsx)("div",{className:"my-loader",children:Object(s.jsxs)("div",{className:"ui",children:[Object(s.jsx)("div",{className:"ui active dimmer",children:Object(s.jsx)("div",{className:"ui indeterminate text loader",children:"Please Allow Your Location"})}),Object(s.jsx)("p",{})]})}):Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{mainData:this.state.mainData,currentLow:this.state.currentLow,currentHigh:this.state.currentHigh}),Object(s.jsx)(x,{todaysArr:this.state.todaysData}),Object(s.jsx)(f,{nextDaysArr:this.state.nextDaysData})]})}}]),a}(n.a.Component);r.a.render(Object(s.jsx)(z,{}),document.querySelector("#root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e9f591fe.chunk.js.map