import { Client, Message } from "eris";
import chalk from "chalk"
import "dotenv/config";

export function messageCreate(client: Client) {
	client.on('messageCreate', async (msg: Message) => {
		console.log(chalk.cyanBright('[Listener] messageCreate is loaded'));
	});
}