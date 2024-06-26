const axios = require("axios");
const cheerio = require('cheerio');

const repeat_requests = 5;

async function normalScraping() {

  const response = await axios.get("https://new-random-number.vercel.app/");

  const $ = cheerio.load(response.data);

  const randomNumber = $('div.random-number').text();

  if (!randomNumber) return console.log("No random number found");

  console.log(`random number = ${randomNumber}`); 

}

for (let i = 0; i < repeat_requests; i++) {
  normalScraping();
}