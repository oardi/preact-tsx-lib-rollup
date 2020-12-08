# Preact TSX Comp lib using Rollup


## install dependencies

- preact
- rollup
- rollup-plugin-commonjs
- rollup-plugin-node-resolve
- rollup-plugin-peer-deps-external
- rollup-plugin-typescript2
- rimraf


## rollup config

```js
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

export default {
	input: "src/lib/index.ts",
	external: ['preact'], // add external
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
```


## tsconfig for building lib 

create a file tsconfig.lib.ts

```ts
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
```


## scss-bundle 

create file scss-bundle.config.json 

```js
{
	"bundlerOptions": {
		"entryFile": "./src/lib/styles/style.scss",
		"rootDir": "./src/lib/styles/",
		"outFile": "./lib/as-comp-lib.scss"
	}
}
```


## Define Build Script

```js
"build:lib": "rimraf lib && rollup -c && npm run scss-bundle-styles",
```

## Issuses with npm link

https://github.com/preactjs/preact/issues/1959
