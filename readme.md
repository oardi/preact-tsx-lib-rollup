# Preact Component library Starter

A Starter for building a Preact TSX component library using Rollup

## includes

- preact
- rollup
- rollup-plugin-commonjs
- rollup-plugin-node-resolve
- rollup-plugin-peer-deps-external
- rollup-plugin-typescript2
- rimraf


## rollup config

minimum rollup configuration

```js
// rollup.config.js

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

Create a tsconfig.lib.ts only for building the lib

```ts
//tsconfig.lib.ts

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

For providing scss instead of compiled css use scss-bundle.config.json 

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

This Script will cleanup the "lib" folder, builds the lib and compiles scss files to lib folder.

```js
"build:lib": "rimraf lib && rollup -c && npm run scss-bundle-styles"
```


## Issuses with npm link

https://github.com/preactjs/preact/issues/1959
