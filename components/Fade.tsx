"use client";
import {
	useViewportScroll,
	useTransform,
	useSpring,
	motion,
} from "framer-motion";
import { useState, useRef, useEffect, type ReactNode } from "react";

type ParallaxProps = {
	children: ReactNode;
};

const Example = ({ children }: ParallaxProps): JSX.Element => {
	const [imageHeight, getImageHeight] = useState<number>(1000);
	const ref = useRef<HTMLImageElement>(null);

	useEffect(() => {
		// Gets the height of the image
		const image = ref.current?.height || 1000;
		getImageHeight(image);
	}, []);

	// Choose at what point the image opacity becomes 0
	// E.G: 50px from the top
	const offsetHeight = 50;
	// Vertical scroll distance in pixels.
	const { scrollY } = useViewportScroll();
	// Transforms scroll and image height values to opacity values
	const yRange = useTransform(scrollY, [imageHeight - offsetHeight, 0], [0, 1]);
	const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

	return (
		<div className="">
			<motion.div ref={ref} style={{ opacity }}>
				{children}
			</motion.div>
		</div>
	);
};
export default Example;
