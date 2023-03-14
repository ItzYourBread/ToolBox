import { Client, CommandInteraction } from 'eris';

export default {
    data: {
        name: 'ping',
        description: '🏓 Ping Pong',
    },
    async execute(client: Client, interaction: CommandInteraction) {
        const ping = Date.now() - interaction.createdAt;
        await interaction.createMessage({
            content: `Pong! \`${ping}ms\` `,
        });
    },
};