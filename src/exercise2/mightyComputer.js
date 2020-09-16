/**
 * Calculates the meaning of live, taking at least 2 seconds.
 * Is not allowed to be disturb with arguments
 */
async function calculateMeaningOfLive(...args) {
	if (args.length > 0) {
		throw new Error(`Has been disturbed and lost track of calculation.Please try again.`);
	}

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(42);
		}, 2000);
	});
}

module.exports = {
	calculateMeaningOfLive
};
