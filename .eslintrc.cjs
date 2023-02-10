module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'prettier'
	],
	plugins: ['@typescript-eslint', 'import', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	ignorePatterns: [],
	settings: {
		'import/resolver': {
			typescript: {
				// use an array
				project: ['./tsconfig.json']
			}
		}
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: './',
		project: './tsconfig.eslint.json',
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/extensions': 0
	}
};
