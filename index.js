const Discord = require('discord.js');
const client = new Discord.Client();
const readline = require('readline');
const config = require("./config.json");
const policeJSON = require("./ConfigPolice.json");
const exec = require('child_process').exec;
const chalk = require('chalk');

client.commands = new Discord.Collection()

var pink = chalk.hex('#EE5CFD')
var purple = chalk.hex('#6400f0')
var green = chalk.hex('#00FF00')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(purple("   ___     __ "))
console.log(purple("  | _ \\___| (_)__ ___"))
console.log(purple("  |  _/ _ \\ | / _/ -_) "))
console.log(purple("  |_| \\___/_|_\\__\\___| "))
console.log((""))
console.log(green("     [ chargement . . . ]\n"))
client.on("ready", () => {

    rl.setPrompt(chalk.red.bgWhite("\nSelfDisc>"))
    console.log(green(`     [ selfbot connecté! ]\n`))
    console.log(green(`     [ connecté à ${client.user.tag} ]\n`))
    console.log(green(`     [ police : ${config.police} ]\n`))
    console.log(green(`     [ commande aide : help ]`))
    rl.prompt();
});

rl.on('line', (input) => {
    client.user.setGame(`${config.status}`,'https://www.twitch.tv/gloubiboulgaah');
    if(input == "info"){console.log(green(`\n[ la police actuelle est : ${config.police} ]`)),rl.prompt();}
    if(input == "help"){console.table(commandes)}
    if(input == "exit"){process.exit(1);}
});

client.on("message",m => {
    if (m.author.id !== client.user.id) return;
  
    m.edit(transformText(m.content));
});

const transforms = policeJSON.vaporwave // changer le nom de la police apres le policeJSON, penser à ajouter des polices dans le json
const lettersJSON = policeJSON.letters

function transformText(t) {
    return t.split("").map(l => transforms[lettersJSON.indexOf(l)] || l).join("");
  }

  var commandes = {};
  function cmds(descpription)

      {
          this.descpription = descpription;
      }

  commandes.help = new cmds("affiche le panneau d'aide dans le terminal")
  commandes.list = new cmds("affiche la liste des polices disponibles")
  commandes.exit = new cmds("quitte l'application Police")

client.login(config.token);