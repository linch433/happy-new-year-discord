module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-refresh', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{allowConstantExport: true},
		],
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'arrow-body-style': [
			'error',
			'as-needed',
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
}
