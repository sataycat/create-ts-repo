import { input } from "@inquirer/prompts";
import { logger } from "~/utils/logger";

const main = async () => {
	const name = await input({
		message: "Project name?",
		validate: (input: string) => input.trim().length > 0,
	});
	logger.success(name);
};

main().catch((e) => console.error(e));
