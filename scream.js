const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://wyrex-aktiflestirmex.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const scream = new Discord.Client();
const scream1 = new Discord.Client();
const scream2 = new Discord.Client();
const scream3 = new Discord.Client();
const scream4 = new Discord.Client();
const scream5 = new Discord.Client();


scream1.login("mfa.nWj4EtBdHUdDg-fIaC0baHY2HfNYQwTQDbf14JLDtBEzUpUnFiHAE-938jxoLd-DzTY6EmceeUFGOXXY593h");
scream2.login("NjU4MzM2OTE5NDQ0NTIwOTcx.X3r8AQ.IRhJUsZawki0GiaPvptXcYoSGS8");
scream3.login("mfa.ahEFG6Mrh03A6GL0Pc_gAHtwfhbkQM-dtwlaLr7MqPb_fe6I9Jr3gyiERtJDr_lYP8uF9M1sqBphqjnWmW1m");


