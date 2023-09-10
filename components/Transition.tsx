"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Transition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.div>
	);
}
