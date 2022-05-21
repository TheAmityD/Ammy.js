import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: 'Testing',
    description: 'Make an announcment.',

    options: [
        {
            name: 'title',
            description: 'The title for the announcement.',
            required: true,
            type: 'STRING',
        },
        {
            name: 'content',
            description: 'The content of the announcement.',
            required: true,
            type: 'STRING',
        },
    ],

    callback: ({}) => {
        const title = 
        const content =

        const embed = new MessageEmbed()
            .setTitle('📣' + title + '📣')
            .setDescription(content)
            .setColor('#800000')

        return embed
    },
} as ICommand