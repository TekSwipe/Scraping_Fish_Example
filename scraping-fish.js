const axios = require("axios");
require('dotenv').config();
const cheerio = require('cheerio');

const repeat_requests = 5;

const payload = {
  api_key: process.env.APIKEY,
  url: "https://new-random-number.vercel.app/",
  render_js: "true",
};

async function scrapingFish() {

  const response = await axios.get("https://scraping.narf.ai/api/v1/", { params: payload });

  const $ = cheerio.load(response.data);

  const randomNumber = $('div.random-number').text();

  if (!randomNumber) return console.log("No random number found");

  console.log(`random number = ${randomNumber}`); 
}

for (let i = 0; i < repeat_requests; i++) {
  scrapingFish();
}