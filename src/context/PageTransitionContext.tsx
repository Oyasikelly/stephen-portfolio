"use client";
import { createContext, useContext, useState } from "react";

interface PageTransitionContextType {
	transitionComplete: boolean;
	setTransitionComplete: (val: boolean) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
	transitionComplete: true,
	setTransitionComplete: () => {},
});

export function usePageTransition() {
	return useContext(PageTransitionContext);
}

export function PageTransitionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [transitionComplete, setTransitionComplete] = useState(true);

	return (
		<PageTransitionContext.Provider
			value={{ transitionComplete, setTransitionComplete }}>
			{children}
		</PageTransitionContext.Provider>
	);
}
