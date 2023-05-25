const conf = require("../botConfig.json") //Tutti
module.exports.run = async (client, message, args) => { //Tutti
    message.guild.members.cache.forEach(member => { //Tutti
        member.kick(conf.reason); //Tutti
    }); //Tutti
} //Tutti
module.exports.help = { //Tutti
    name: "kick" //Tutti
}