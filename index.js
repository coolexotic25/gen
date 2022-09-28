const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')	
let parametre = JSON.parse(fs.readFileSync(__dirname+"/parametre.json"));	
let prefix = parametre['prefix'];    
let TOKEN = ("Token");    
let cooldown = parametre['cooldown'] 
const Nombot = "Generator" 
const generated = new Set();	
const chalk = require('chalk');
const moment = require('moment');


  bot.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                                          		_ _ _ _ _ _ _     _ _ _ _ _ _ _     _ _      _ _      _ _ _ _ _ _ _        			`)));
  console.log((chalk.cyan(`                                                               /    _ _ _   /    /    _ _ _   /    /   /    /  /     /            /        			`)));
  console.log((chalk.cyan(`                                                              /   /     /  /    /   /     /  /    /   / _  /  /     /    _ _ _ _ /         			`)));
  console.log((chalk.cyan(`                                                             /   /     /  /    /   /     /  /    /   //  //  /     /    /                  			`)));
  console.log((chalk.cyan(`                                                            /   /_ _ _/  /    /   /_ _ _/  /    /   //  //  /     /    /__ _ _             			`)));
  console.log((chalk.cyan(`                                                           /    _ _ _ _ /    /   _ _ _    /    /   //  //  /     /_ _ _      /             			`)));
  console.log((chalk.cyan(`                                                      	 /   /             /   /    /   /    /     _     /            /    /              			`)));
  console.log((chalk.cyan(`                                                      	/   /             /   /    /   /    /    / /    /     _ _ _  /    /               			`)));
  console.log((chalk.cyan(`                                                        /   /             /   /    /   /    /   /   /   /     /           /                			`)));
  console.log((chalk.cyan(`                                                       /_ _/             /_ _/    /_ _/    /_ _/   /_ _/     /_ _ _ _ _ _/                 			`)));
  console.log((chalk.cyan(`                                                                                                                                          			`)));
  console.log((chalk.cyan(`                                                     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _                   			`)));
  console.log((chalk.cyan(`                                                   /                                                                   /                   			`)));
  console.log((chalk.cyan(`                                                  /         Dev by Paws#9999            |           V0.1              /                   			`)));
  console.log((chalk.cyan(`                                                 /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _/                     			`)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par Paws#9999 !`)));  
  console.log((chalk.yellow(`                                                                © 2022 Paws, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/B9dbEPKhU7`)));   
  console.log((chalk.red(`                                                       Télégramme: https://t.me/PawsGen`)));   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${bot.guilds.size} serveurs. \nPour un total de ${bot.users.size} membres.`)
  console.log("Connecté en tant que " + bot.user.id + " | Prefix : " + prefix+ " | Nombre de Serveurs "+ bot.guilds.size +" | Nombres de salons "+ bot.channels.size +" | Utilisateur totaux "+ bot.users.size +" | Nombre d'emojis totaux "+ bot.emojis.size +'');
  bot.user.setActivity("Generator here !");
});

bot.on("message", async message => {	
    prefix = parametre['prefix'];	
    cooldown = parametre['cooldown']	
    if (message.author.bot) return;	
    var command = message.content	
    .toLowerCase()	
    .slice(prefix.length)	
    .split(" ")[0];	

    if (command === "gen") {	
        if (generated.has(message.author.id)) {	
                 const embed = new Discord.RichEmbed()
                .setTitle("Thank you for waiting")
                .setURL("")
                .setDescription(":no_entry: Wait before generating another account "+message.author+"")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                message.channel.send(embed);
        } else {	

            let messageArray = message.content.split(" ");	
            let args = messageArray.slice(1);	
                 const errorgen = new Discord.RichEmbed()
                .setTitle("Service not found")
                .setURL("")
                .setDescription(":no_entry: Please specify the service you want!")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                if (!args[0]) return message.channel.send(errorgen);

            let data;	
            try{	
                data = fs.readFileSync(__dirname + "/comptes/" + args[0].toLowerCase() + ".json")	

            } catch{	
                const error = new Discord.RichEmbed()
                .setTitle("Service not found")
                .setURL("")
                .setDescription(":no_entry: The service `"+args[0]+"` does not exist")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                return message.channel.send(error);

            } 	
            let account = JSON.parse(data)
                const compte = new Discord.RichEmbed()
                .setTitle("No account available")
                .setURL("")
                .setDescription(":no_entry: There are no accounts available for `"+args[0]+"`")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                if (account.length <= 0) return message.channel.send(compte);


                const embed = {	
                    title: "Your account " + args[0] + " it is successfully generated!",	
                    description: ":ballot_box_with_check: I have sent your account in DM!",	
                    color: 3092790,   
                    footer: {	
                        text: `© 2022 ${Nombot}`	
                    },	
                };	

                await message.channel.send({ embed });	
                await generated.add(message.author.id);	
                await message.author.send({embed: {	
                    "title": "Here is your account " + args[0] + " generate",	
                    "color": 3092790,  
                    "image": {
                    "url": ""
                    },
                    "footer": {   
                        "text": `© 2022 ${Nombot}`    
                    },  
                    "fields": [	
                      {	
                        "name": "Pseudo/Email",	
                        "value": "`"+account[0].email+"`"	
                      },	
                      { 
                        "name": "Password", 
                        "value": "`"+account[0].mdp+"`" 
                      },
                      { 
                        "name": "Copy-cut", 
                        "value": "`"+account[0].email+":"+account[0].mdp+"`" 
                      },
                    ]	
                  }	
                })	
                account.splice(0,1)	
                console.log(account)	
                fs.writeFileSync(__dirname + "/comptes/" + args[0] + ".json", JSON.stringify(account));	
                setTimeout(() => {	
                    generated.delete(message.author.id);	
                }, cooldown);	
        }	
    }	

    if (command === "check") {	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        let data;	
                const errorcheck = new Discord.RichEmbed()
                .setTitle("Thank you for choosing a service")
                .setURL("")
                .setDescription(":no_entry: Please specify the service you want!")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                if (!args[0]) return message.channel.send(errorcheck);
	
        try{	
            data = JSON.parse(fs.readFileSync(__dirname + "/comptes/" + args[0] + ".json"))	
                const embed = new Discord.RichEmbed()
                .setTitle("Here is the stock of  "+args[0]+"")
                .setURL("")
                .setDescription("There are `"+data.length+" account` in `"+args[0]+"`")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                message.channel.send(embed);

        } catch {	
                const error = new Discord.RichEmbed()
                .setTitle("Service not found")
                .setURL("")
                .setDescription(":no_entry: The service `"+args[0]+"` does not exist")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                return message.channel.send(error);
        } 	
    }	

    if (command === "change"){	
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, you can't do that, you are not an administrator!");	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        try{	
            parametregalackgen[args[0].toLowerCase()] = args[1].toLowerCase()	
            fs.writeFileSync(__dirname+"/parametre.json", JSON.stringify(parametregalackgen));	
                const change = new Discord.RichEmbed()
                .setTitle(""+args[0]+" successfully change")
                .setURL("")
                .setDescription(":ballot_box_with_check: `"+args[0]+"` changed to `"+args[1]+"`")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                message.channel.send(change);

        } catch{	
            message.reply("An error has occurred")	
        }	
    }	

    if(command === "stock"){	
        let stock = []	

        fs.readdir(__dirname + "/comptes/", function (err, files) {	
            if (err) {	
                return console.log('Unable to scan the directory ' + err);	
            } 	

            files.forEach(function (file) {	
                if (!file.includes(".json")) return	
                if (file.includes('package-lock') || file.includes('package.json') || file.includes('parametre.json')) return	
                stock.push(file) 	
            });	
            console.log(stock)	

            stock.forEach(async function (data) {	
                let acc = await fs.readFileSync(__dirname + "/comptes/" + data)	
                const embed = new Discord.RichEmbed()
                .setTitle(`Here is the current stock`)
                .setURL("")
                .setDescription("`"+data.replace(".json","")+"` have `"+JSON.parse(acc).length+" accounts`\n")
                .setFooter(`© 2022 ${Nombot}`)
                .setTimestamp()
                .setColor("#2f3136");
                message.channel.send(embed);

            })	

        });	
    }	

    if(command === "add") {	
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, you can't do that, you are not an administrator!");	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        var acc = args[1].split(":");	

        fs.readFile(__dirname + "/comptes/" + args[0].toLowerCase() + ".json",function(err, data) { 	
        if(err){	
            let newnewData = 	
            [{	
                "email":acc[0],	
                "mdp":acc[1]	
            }]	
            try {	
                fs.writeFileSync(__dirname + "/comptes/" + args[0].toLowerCase()+".json", JSON.stringify(newnewData))	
                      const embed = new Discord.RichEmbed()
                     .setTitle(`The service ${args[0]} has been successfully created`)
                     .setURL("")
                     .setDescription(`:ballot_box_with_check: Service ${args[0]} created and account added`)
                     .setFooter(`© 2022 ${Nombot}`)
                     .setTimestamp()
                     .setColor("#2f3136");
                   message.channel.send(embed);

            } catch {	
                message.channel.send('**Erreur** Impossible to create a service and add this account!')	

            }	
        }	

        else {	
            let newData = {"email":acc[0],"mdp":acc[1]}	
            data = JSON.parse(data)	
            try{	
                data.push(newData)	
                fs.writeFileSync(__dirname + "/comptes/" + args[0].toLowerCase()+".json", JSON.stringify(data))	
                      const embed = new Discord.RichEmbed()
                     .setTitle(`Account added with success`)
                     .setURL("")
                     .setDescription(`:ballot_box_with_check: Account added with success`)
                     .setFooter(`© 2022 ${Nombot}`)
                     .setTimestamp()
                     .setColor("#2f3136");
                   message.channel.send(embed);

            } catch {	
                message.channel.send('**Erreur** Impossible to add this account!')	
            }	
        }	
    }); 	
}	
if(command === "botinfo") {	
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} days` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hours` : `${d.hours()} hours`;

    const botinfo = new Discord.RichEmbed()
      .setTitle(`Informations on ${Nombot}`)
      .setThumbnail(message.guild.iconURL)
      .setDescription(`${Nombot} is a Discord bot to generate all kinds of accounts.`)
      .addField('Pseudo', message.client.user.username, true)
      .addField('Discriminator', `\`#${message.client.user.discriminator}\``, true)
      .addField('ID', `\`${message.client.user.id}\``, true)
      .addField('Surnom', (message.guild.me.nickname) ? message.guild.me.nickname : '`None`', true)
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Servers', `\`${message.client.guilds.size}\``, true)
      .addField('Disponibility', `\`${days}\` et \`${hours}\``, true)
      .addField('Version now', `\`2.0.1\``, true)
      .addField('Developer of the source', `\`Paws#9999\``, true) //NE PAS TOUCHER CETTE LIGNE
      .setFooter(`© 2021 ${Nombot}`)
      .setTimestamp()
      .setColor("#2f3136");
    message.channel.send(botinfo);
}
if(command === "help") {	
    if (!message.member.hasPermission("ADMINISTRATOR")) {	
      const embed = new Discord.RichEmbed()
      .setTitle(`Commands of ${Nombot}`)
      .setURL("")
      .setThumbnail(message.guild.iconURL)
      .setDescription(`Here are the commands for ${Nombot}`)
      .addField(`${prefix}gen [name of service]`, '`generate an account for this service`')
      .addField(`${prefix}check [name of service]`, '`check the number of accounts on this server`')
      .addField(`${prefix}stock`, '`audit services and accounts`')
      .addField(`${prefix}botinfo`, '`Have the Information about the bot`')
      .setFooter(`© 2022 ${Nombot}`)
      .setTimestamp()
      .setColor("#2f3136");
    message.channel.send(embed);
} else {	
      const embed = new Discord.RichEmbed()
      .setTitle(`Commands`)
      .setURL("")
      .setThumbnail(message.guild.iconURL)
      .setDescription(`Paws commands`)
      .addField(`${prefix}gen [name of service]`, '`générer un compte de ce service`')
      .addField(`${prefix}check [name of service]`, '`vérifier le nombre de comptes sur ce serveur`')
      .addField(`${prefix}stock`, '`audit services and accounts`')
      .addField(`${prefix}add [name of service] [email:pass]`, '`add this account to the service, dont forget to use the email:mdp syntax`')
      .addField(`${prefix}change [cooldown, prefix] [choix]`, '`change the prefix or the reload time (option) to a value, for the reload time remember that the value must be in m`')
      .addField(`${prefix}botinfo`, '`Have the Information about the bot`')
      .setFooter(`© 2021 ${Nombot}`)
      .setTimestamp()
      .setColor("#2f3136");
    message.channel.send(embed);
}   
        }  

    });     
 
bot.login(TOKEN);	
