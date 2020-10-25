const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  if(args[0] === "kayıt"){
    let kayıt = [`
    ●▬▬▬▬▬▬▬▬▬▬▬●
    **${prefix}e: Erkek Kayıt Yaparsınız.**
    **${prefix}k: Kız Kayıt Yaparsınız.**
    **${prefix}k-kontrol: Kullanıcıların Kayıt Sayısına Bakarsınız**
    ●▬▬▬▬▬▬▬▬▬▬▬●
`]
    const kayıtE = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Drakula Register Yardım Menüsü")
    .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
    .setDescription(kayıt)
    .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
    .setTimestamp()
    .setFooter(message.author.tag + " Tarafından Kullanıldı", message.author.avatarURL);
    message.channel.send(kayıtE)
    return
    
  } else {
    var arg = args[0]
  }
  if(!args[0]) {var arg = args[0]}
  
  if(!args[0]) {var arg = args[0]}
  //KULLANICI BİTİŞ
  
  
  
  
  const kategoriliyardım = new Discord.RichEmbed()
  .setTitle("Drakula Register")
  .setColor("RED")
  .setDescription("`Prefix:!!`")
  .addField("**Register Komutları**", `${prefix}ryardım kayıt: Kayıt Komutlarını gösterir.`)
  .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
  .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
  .setTimestamp()
  .setFooter(message.author.tag + " Tarafından Kullanıldı", message.author.avatarURL);
  message.channel.send(kategoriliyardım);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ry", "rhelp", "rh"],
  permLevel: 0,
};

exports.help = {
  name: 'ryardım',
  description: 'Drakula Yardım Menüsü',
  usage: 'ryardım <kategori>'
};