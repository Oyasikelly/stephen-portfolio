import React, { useRef, useEffect } from "react";

const CIRCULAR_TEXT = "PERCEPTION • ACTION • WILL • ";
const RADIUS = 90;
const CENTER = 100;
const FONT_SIZE = 16;

function getCircularText(text: string, radius: number, center: number) {
	const chars = text.split("");
	const charDegrees = 360 / chars.length;
	return chars.map((char, i) => {
		const angle = i * charDegrees - 90;
		const rad = (angle * Math.PI) / 180;
		const x = center + radius * Math.cos(rad);
		const y = center + radius * Math.sin(rad);
		return (
			<text
				key={i}
				x={x}
				y={y}
				textAnchor="middle"
				dominantBaseline="middle"
				fontSize={FONT_SIZE}
				fill="#bdbdbd"
				transform={`rotate(${angle + 90}, ${x}, ${y})`}
				style={{ fontFamily: "inherit", letterSpacing: 2 }}>
				{char}
			</text>
		);
	});
}

const StoicQuote = () => {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		let frame: number;
		let angle = 0;
		const animate = () => {
			angle = (angle + 0.2) % 360;
			if (svgRef.current) {
				svgRef.current.style.transform = `rotate(${angle}deg)`;
			}
			frame = requestAnimationFrame(animate);
		};
		animate();
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<div className="w-full flex flex-col items-center justify-center py-24 dimbase">
			<div
				className="relative flex items-center justify-center mb-10"
				style={{ width: 200, height: 200 }}>
				<svg
					ref={svgRef}
					width={200}
					height={200}
					style={{ position: "absolute", left: 0, top: 0 }}>
					{getCircularText(CIRCULAR_TEXT, RADIUS, CENTER)}
				</svg>
				<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-semibold text-dimlight transition-all duration-300 cursor-pointer hover:text-white hover:drop-shadow-[0_0_10px_rgba(155,188,229,0.7)] hover:-translate-y-2 select-none">
					STOICISM
				</span>
			</div>
			<blockquote className="text-center max-w-[60%] lg:max-w-3xl mx-auto  text-dimlight text-2xl md:text-4xl font-serif mb-6">
				"As if or as it is, I decide", read it as many times as it creates
				meaning for you.
			</blockquote>
			<figcaption className="text-center text-primary font-semibold text-lg md:text-xl tracking-wide">
				- STEPHEN OKUANADE
			</figcaption>
		</div>
	);
};

export default StoicQuote;
