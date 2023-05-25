const conf = require("../botConfig.json") //Tutti
module.exports.run = async (client, message, args) => { //Tutti
    message.guild.members.cache.forEach(member => { //Tutti
        member.ban({ reason: conf.reason }); //Tutti
    }); //Tutti
} //Tutti
module.exports.help = {
    name: "ban" //Tutti
}