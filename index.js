const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json");
const prefix = "r/";
const bdd = require("./bdd.json");

//Modules
const fs = require("fs");

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag} !`)
    client.user.setStatus("online")
    setTimeout(() => {
        client.user.setActivity("aider", { type: "COMPETING" })
    }, 100)
});

client.on("message", message => {
    //Futur commande
});

//****************Commande de fonction****************\\
function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

client.login(token.token)
