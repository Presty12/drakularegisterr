const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);






//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('759442384273670184'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
    member.addRole('759442384273670184'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
  });
  
  //-----------------------GİRENE-ROL-VERME----------------------\\     STG





//-----------------------sthg----------------------\\     STG

client.on("guildMemberAdd", member => {  
    var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:ag_0:759679893696675842>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '1': `<a:ag_1:759679927548248104>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '2': `<a:ag_2:759679953977081957>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '3': `<a:ag_3:759679979847417897>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '4': `<a:ag_4:759680002395734028>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek                       
    '5': `<a:ag_5:759680025384845312>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '6': `<a:ag_6:759680049753751563>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '7': `<a:ag_7:759680078312767548>`, // buraya sayıların bu şeylrini koy emojinin önüne  getirerek
    '8': `<a:ag_8:759680104758247442>`, // buraya sayıların bu şeylrini koy emojinin önüne \ getirerek
    '9': `<a:ag_9:759680130746023987>`}[d]; // buraya sayıların bu şeylrini koy emojinin önüne \ getirerek
      })
    }
    const kanal = "759433895791558687"; // Hg kanal id
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed(kanal)
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' **<a:ag_carpi:761613379650453504>  Hesap Güvenilir Değil**'
  if (kurulus > 1296000000) kontrol = ' **<a:ag_tik2:761616204631900190>  Hesap Güvenilir**'
    moment.locale("tr");
    let stg = client.channels.get(kanal);
  stg.send("**<a:ag_hg:760447772116779038> DRAKULAYA Hoşgeldin! " + member + " Seninle Birlikte "+ üyesayısı +" Kişiyiz.**  \n\n**<a:ag_yukleniyor2:761615997777477651> Müsait olduğunda Drakula Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n**<a:ag_tac2:761629786840760320> <@&759433911100768277> seninle ilgilenicektir.**\n\n**<a:ag_chromastar:761618137866174495> Bu Hesap" + moment(member.user.createdAt).format(" YYYY DD MMMM dddd (hh:mm:ss) ") +  " Tarihinde Oluşturulmuştur.** \n\n**<a:ag_bravery:761616055168663563> Hesap Durumu:** "  + kontrol + "   \n\n**<a:ag_bulutkalp:761624878758494238> Tagımızı Alarak `⼡` Bize Destek Olabilirsin.** \n\n", new Discord.Attachment("https://i.hizliresim.com/20bMGC.gif"
       ) 
     );
  });

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(30, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var jail = member.guild.roles.get("759441521438097419") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("759442384273670184") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(jail)
   member.removeRole(kayıtsız)
member.user.send('<a:ag_hayir:761624866784804924> Hesabın 1 Ay Gibi Kısa Bir Sürede Açıldığı İçin Şüpheli Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır. <a:ag_hayir:761624866784804924>')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });


client.on("ready", () => {
  client.channels.get("761587900688891904").join();
})



client.on('message', message => {
  if (message.content === '!!tag') {
    message.channel.send('`⼡`');
 }
});

client.on('message', message => {
  if (message.content === 'tag') {
    message.channel.send('`⼡`');
 }
});
