const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json");
const prefix = "r/";
const bdd = require("./bdd.json");

//Modules
const fs = require("fs");


//****************Status****************\\
client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag} !`)
    client.user.setStatus("online")
    setTimeout(() => {
        client.user.setActivity("aider", { type: "COMPETING" })
    }, 100)
});


//****************Commandes****************\\
client.on("message", message => {
});

//****************Pour tout les serveurs****************\\
client.on("guildCreate", guild => {
    console.log(`Le  bot a été ajouté à la guilde ${guild.name} !`);
    bdd[guild.id] = {}
    bdd[guild.id]["Nom"] = guild.name
    Savebdd();
});

client.on("guildDelete", guild => {
    console.log(`Le bot a été retiré de la guilde ${guild.name} !`)
});

//****************Commande de fonction****************\\
function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

client.login(token.token)
