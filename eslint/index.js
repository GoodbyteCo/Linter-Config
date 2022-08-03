/* eslint-disable vue/max-len */
module.exports = {
	
	rules: {
		'indent': [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'never' ],
		'array-bracket-newline': [ 'error', { 'multiline': true, 'minItems': 5 }],
		'array-bracket-spacing': [
			'error', 'always', { objectsInArrays: false, arraysInArrays: false },
		],
		'object-curly-spacing': [
			'error', 'always', { arraysInObjects: false, objectsInObjects: false },
		],
		'no-unused-vars': [ 'error', { argsIgnorePattern: '^_' }],
		'space-in-parens': [ 'error', 'never' ],
		'template-curly-spacing': [ 'error', 'never' ],
		'arrow-spacing': [ 'error', { before: true, after: true }],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [
			'error', 'stroustrup', { allowSingleLine: true },
		],
		'camelcase': [ 'error' ],
		'comma-spacing': [ 'error', { before: false, after: true }],
		'comma-style': [ 'error', 'last' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'dot-location': [ 'error', 'property' ],
		'func-call-spacing': [ 'error', 'never' ],
		'key-spacing': [ 'error', { beforeColon: false, afterColon: true }],
		'keyword-spacing': [ 'error', { before: true, after: true }],
		'object-curly-newline': [ 'error', { multiline: true }],

		'vue/html-indent': [ 'error', 'tab' ],
		'vue/html-closing-bracket-spacing': [ 'error', { selfClosingTag: 'never' }],
		'vue/script-indent': [ 
			'error', 'tab', { baseIndent: 1 },
		],
		'vue/no-unused-vars': [ 'error', { ignorePattern: '^_' }],
		'vue/html-quotes': [
			'error', 'double', { avoidEscape: true },
		],
		'vue/max-attributes-per-line': [ 
			'error', {
				singleline: { max: 4, allowFirstLine: true }, 
				multiline: { max: 2, allowFirstLine: true },
			},
		],
		'vue/no-multi-spaces': [ 'error', { ignoreProperties: true }],
		'vue/no-spaces-around-equal-signs-in-attribute': [ 'error' ],
		'vue/component-tags-order': [
			'error', {
				order: [
					'template', 'script', 'style', 'docs', 
				],
			},
		],
		'vue/html-comment-indent': [ 'error', 'tab' ],
		'vue/html-comment-content-spacing': [ 'error', 'always' ],
		'vue/new-line-between-multi-line-property': [ 'error', { minLineOfMultilineProperty: 2 }],
		'vue/no-export-in-script-setup': [ 'error' ],
		'vue/no-static-inline-styles': [ 'error', { allowBinding: false }],
		'vue/array-bracket-newline': [ 'error', { multiline: true, minItems: 5 }],
		'vue/array-bracket-spacing': [
			'error', 'always', { objectsInArrays: false, arraysInArrays: false },
		],
		'vue/object-curly-spacing': [
			'error', 'always', { arraysInObjects: false, objectsInObjects: false },
		],
		'vue/space-in-parens': [ 'error', 'never' ],
		'vue/template-curly-spacing': [ 'error', 'never' ],
		'vue/arrow-spacing': [ 'error', { before: true, after: true }],
		'vue/block-spacing': [ 'error', 'always' ],
		'vue/brace-style': [
			'error', 'stroustrup', { allowSingleLine: true },
		],
		'vue/camelcase': [ 'error' ],
		'vue/comma-spacing': [ 'error', { before: false, after: true }],
		'vue/comma-style': [ 'error', 'last' ],
		'vue/comma-dangle': [ 'error', 'always-multiline' ],
		'vue/dot-location': [ 'error', 'property' ],
		'vue/func-call-spacing': [ 'error', 'never' ],
		'vue/key-spacing': [ 'error', { beforeColon: false, afterColon: true, align: 'value', mode: 'strict' }],
		'vue/keyword-spacing': [ 'error', { before: true, after: true }],
		'vue/max-len': [ 'error', { code: 120, tabWidth: 4 }],
		'vue/object-curly-newline': [ 'error', { multiline: true }],
		'vue-scoped-css/no-unused-keyframes': [ 'error' ],
		'vue-scoped-css/enforce-style-type': [ 'error', { allows: [ 'plain', 'scoped' ]}],
	},
		
	overrides: [ 
		{ files: [ '*.vue' ], rules: { indent: 'off' }},
		{ files: [ '*/components/*.vue' ], rules: { 'vue-scoped-css/enforce-style-type': [ 'error', { allows: [ 'scoped' ]}]}},
		{ files: [ '*.test.*', '*.spec.*' ], rules: { 'no-undef': 'off' }},
	],
	
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue-scoped-css/vue3-recommended',
	],

	plugins: [ 'vue' ],
	parserOptions: { 'ecmaVersion': 12 },
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
}