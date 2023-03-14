import { Client, Interaction, Constants } from "eris";

export default {
	data: {
		name: "enable",
		description: "Eanble subcommand",
		options: [
			{
				name: "channel",
				description: "Enable unlock social",
				type: Constants.ApplicationCommandOptionTypes.SUB_COMMAND
			}
		]
	},
	async execute(client: Client, interaction: Interaction) {
		
	}
}