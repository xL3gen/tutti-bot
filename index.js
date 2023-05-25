const { Client, Intents, Collection } = require("discord.js"); //Tutti
const discord = require("discord.js"); //Tutti
const botConfig = require("./botConfig.json"); //Tutti
const ascii = require("ascii-table"); //Tutti
const table = new ascii("Commands"); //Tutti
table.setHeading("Command", "Status"); //Tutti
const fs = require("fs"); //Tutti
 //Tutti
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) }); //Tutti
client.commands = new Collection(); //Tutti
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js")); //Tutti
for(const file of commandFiles) { //Tutti
   const command = require(`./commands/${file}`); //Tutti
 client.commands.set(command.help.name, command); //Tutti
    if(file) { //Tutti
        table.addRow(file, "✅"); //Tutti
    } else { //Tutti
        table.addRow(file, "❌"); //Tutti
    } //Tutti
} //Tutti
console.log(table.toString()); //Tutti
client.once("ready", () => {    //Tutti
    console.log(`tutti harikasın`); //Tutti
}); //Tutti
 //Tutti
client.on("messageCreate", async message => { //Tutti
    if(message.author.bot) return; //Tutti
    var prefix = botConfig.prefix; //Tutti
    var messageArray = message.content.split(" "); //Tutti
    var command = messageArray[0]; //Tutti
    if(!message.content.startsWith(prefix)) return; //Tutti
    var commandData  = client.commands.get(command.slice(prefix.length)); //Tutti
    if(!commandData) return; //Tutti
    var arguments  = messageArray.slice(1); //Tutti
    try { //Tutti
        await commandData.run(client, message, arguments); //Tutti
    } catch (error) { //Tutti
        console.log(error); //Tutti
        var errorEmbed = new discord.MessageEmbed() //Tutti
            .setDescription(`cyber`); //Tutti
        await message.reply({ embeds: [errorEmbed] }); //Tutti
    } //Tutti
}); //Tutti
client.login(botConfig.token); //Tutti