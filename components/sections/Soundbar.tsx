import MotionDiv from "../MotionDiv";

const Soundbar = () => {
	function sampleArrayWithDuplicates(array: Array<string>, sampleSize: number) {
		const sample = [];
		for (let i = 0; i < sampleSize; i++) {
			const randomIndex = Math.floor(Math.random() * array.length);
			sample.push(array[randomIndex]);
		}
		return sample;
	}

	const originalArray = [
		"bg-cat-rosewater",
		"bg-cat-pink",
		"bg-cat-red",
		"bg-cat-peach",
		"bg-cat-green",
		"bg-cat-sky",
		"bg-cat-blue",
	];
	const items = sampleArrayWithDuplicates(originalArray, 24);

	return (
		<div className="flex justify-center items-center">
			{items.map((item, index) => {
				const delay = Math.random() * 0.5;
				const ease = "easeInOut";
				const duration = 2;
				const min_h = Math.random() * 0.5 + 0.1;
				const min_h_y_pc = ((1 - min_h) * 1000).toFixed(0);
				const min_h_y_pc_str = `${min_h_y_pc}%`;
				const neg_min_h_y_pc_str = `-${min_h_y_pc_str}`;
				const max_h = min_h + Math.random() * 0.2 + 0.2;
				const max_h_y_pc = ((1 - max_h) * 1000).toFixed(0);
				const max_h_y_pc_str = `${max_h_y_pc}%`;
				const neg_max_h_y_pc_str = `-${max_h_y_pc_str}`;

				return (
					<div
						className="flex-col my-10"
						key={`bar-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}`}
					>
						<MotionDiv
							className={`w-4 mx-0.5 -my-2 h-4 rounded-full ${item}`}
							animate={{
								y: [min_h_y_pc_str, max_h_y_pc_str, min_h_y_pc_str],
							}}
							transition={{
								delay: delay,
								ease: ease,
								duration: duration,
								repeat: Number.POSITIVE_INFINITY,
							}}
						/>
						<MotionDiv
							className={`w-4 mx-0.5 h-80 ${item}`}
							animate={{
								scaleY: [min_h, max_h, min_h],
							}}
							transition={{
								delay: delay,
								ease: ease,
								duration: duration,
								repeat: Number.POSITIVE_INFINITY,
							}}
						/>
						<MotionDiv
							className={`w-4 mx-0.5 -my-2 h-4 rounded-full ${item} origin-top`}
							animate={{
								y: [neg_min_h_y_pc_str, neg_max_h_y_pc_str, neg_min_h_y_pc_str],
							}}
							transition={{
								delay: delay,
								ease: ease,
								duration: duration,
								repeat: Number.POSITIVE_INFINITY,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Soundbar;
