import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: 'Testing',
    description: 'Info about KGPN',

    callback: ({}) => {
        const embed = new MessageEmbed()
            .setTitle('Kolej GENIUS@Pintar Negara')
            .setDescription('Dunno')
            .setColor('#800000')
            .setAuthor('Me')
            .setFooter('Git em!')
            .addFields([{
                name: 'name',
                value: 'value',
            },
            {
                name: 'twooo',
                value: 'twooo',
            },
        ])
        .addField('y','n')

        return embed
    },
}