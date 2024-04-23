import pc from "picocolors";

type Input = string | number | null | undefined;

export const logger = {
	info(input: Input) {
		console.log(pc.white(input));
	},

	err(input: Input) {
		console.log(pc.red(input));
	},

	success(input: Input) {
		console.log(pc.green(input));
	},
};
