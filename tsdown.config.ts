import { defineConfig, type UserConfig } from "tsdown";

const config: UserConfig = defineConfig({
	entry: "src/index.ts",
	format: ["esm", "cjs"],
	dts: true,
	publint: true,
	noExternal: [],
});

export default config;
