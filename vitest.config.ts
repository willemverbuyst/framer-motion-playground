import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		mockReset: true,
		exclude: ["**/node_modules/**", "**/dist/**", "**/e2e/**"],
	},
});
