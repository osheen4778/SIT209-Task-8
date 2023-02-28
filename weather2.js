
let request = require('request');

let apiKey = '573afd5b0ab813ab32a279c938791bdb';
let url = `https://api.openweathermap.org/data/2.5/weather?lat=-37.814&lon=144.9633&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', err);
} else {
    console.log('body:', body);
}
});


