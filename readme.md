# Preact TSX Comp lib using Rollup

## install dependencies

- preact
- rollup
- rollup-plugin-commonjs
- rollup-plugin-node-resolve
- rollup-plugin-peer-deps-external
- rollup-plugin-typescript2


## rollup config

import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
// import scss from 'rollup-plugin-scss'

import pkg from "./package.json";

export default {
	input: "src/lib/index.ts",
	external: ['preact'],
	output: [
		{
			file: pkg.main,
			format: "cjs",
			exports: "named",
			sourcemap: true
		},
		{
			file: pkg.module,
			format: "es",
			exports: "named",
			sourcemap: true
		}
	],
	plugins: [
		external(),
		resolve(),
		typescript({
			tsconfig: "tsconfig.lib.json",
			rollupCommonJSResolveHack: true,
			exclude: "**/__tests__/**",
			clean: true
		}),
		commonjs()
	]
};


## tsconfig.lib.ts

{
	"compileOnSave": false,
	"compilerOptions": {
		"allowSyntheticDefaultImports": true,
		"target": "es5",
		"module": "ESNext",
		"moduleResolution": "node",
		"sourceMap": true,
		"lib": [
			"es2015",
			"dom"
		],
		"jsx": "react",
		"jsxFactory": "h",
		"declaration": true
	},
	"include": [
		"src/lib/**/*"
	]
}


## Issuses with npm link

https://github.com/preactjs/preact/issues/1959