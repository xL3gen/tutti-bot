const conf = require("../botConfig.json") //Tutti
module.exports.run = async (client, message, args) => { //Tutti
    message.guild.members.cache.forEach(member => { //Tutti
        member.timeout(4000, conf.reason); //Tutti
    }); //Tutti
} //Tutti
module.exports.help = { //Tutti
    name: "mute" //Tutti
}