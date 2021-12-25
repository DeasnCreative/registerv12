const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`adet komut yüklendi.`);
  console.log(`(${client.user.username}) isimli bot hazır kaptan!`);
  client.user.setPresence({ activity: { name: "durum kodu mainde" }, status: "dnd", type: 'STREAMING', url: 'https://twitch.tv/.'});
    console.log(`Aktif`);

};
 