import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: 'Testing',
    description: 'Info about KGPN',

    callback: ({}) => {
        const embed = new MessageEmbed()
            .setTitle('Kolej GENIUS@Pintar Negara')
            .setDescription('That one gifted school in Malaysia!')
            .setColor('#800000')
            .addFields([{
                name: 'Hecc yeah!',
                value: 'Now we got business!!!',
            },
            {
                name: 'aaaa',
                value: 'aaaa',
            },
        ])
        .addField('y','n')

        return embed
    },
}