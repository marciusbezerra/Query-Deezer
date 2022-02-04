process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var unirest = require("unirest");

var req = unirest("GET", "https://rapidapi.p.rapidapi.com/search");

req.query({
    "q": "pet shop boys always mix"
});

req.headers({
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "pegar em rapidapi.com",
    "useQueryString": true
});


req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body.data.map(({ title, preview, link }) => ({ title, preview, link })));
});