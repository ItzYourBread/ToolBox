import { Client, CommandInteraction } from 'eris';
import { Profile } from "../../data/profile"

export default {
    data: {
        name: 'bill',
        description: 'Billing 💸',
    },
    async execute(client: Client, interaction: CommandInteraction) {
        const ping = Date.now() - interaction.createdAt;
        await interaction.createMessage({
            content: `Pong! \`${ping}ms\` `,
        });
    },
};