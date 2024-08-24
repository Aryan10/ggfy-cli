#!/usr/bin/env node

const { program } = require('commander');
const axios = require('axios');
const URL = "https://ggfy.glitch.me";

program
  .version('1.0.0')
  .description('CLI for URL Shortener - ggfy');

program
  .arguments('<url>')
  .action(async (url) => {
    try {
      const response = await axios.post(URL + '/shorten', { url });
      const shortenedUrl = `${URL + "/" + response.data.shortUrl}`;
      console.log(`Shortened URL: ${shortenedUrl}`);
    } catch (error) {
      console.error('Error: ', error.message);
    }
  });

program.parse(process.argv);
