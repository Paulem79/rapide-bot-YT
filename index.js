const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json");

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag} !`)
    client.user.setStatus("online")
    setTimeout(() => {
        client.user.setActivity("aider", { type: "COMPETING" })
    }, 100)
});

client.login(token.token)
