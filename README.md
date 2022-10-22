# Goodbyte Styleguide

[ [Usage](#usage) ]
[ [Contributing](#contributing) ]
[ [Rational](#rational) ]

The Styleguide is a set of formatting choices made to ensure our codebase is easy
to read, easy to contribute to, and above all, consistent with itself. This style
is defined and enforced by the linter configurations in this repository. These rules
are not set in stone, and if you find that the linter is suggesting something you
find _less_ readable, please feel free to request a change to the rules (see: 
_[Contributing](#contributing)_).

## Usage

It is recommended that you install the [ESLint](https://eslint.org),
[Stylelint](https://stylelint.io), and [Textlint](https://textlint.github.io) plugins
available for your IDE, and configure it to autoformat on save. For Visual Studio
Code, you can find them in the extension marketplace: 
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),
[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint),
[Textlint](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint);
and you can enable auto-formatting by adding [these settings](./.vscode/settings.json)
to the repo’s `.vscode/settings.json` file.

Each linter configuration covers a different set of languages and file types. For
languages that are covered by multiple linters, install all of them. There are currently
three lint-configs:

- **[ESLint](#eslint)**: Javascript, Vue
- **[Stylelint](#stylelint)**: CSS, Vue (style blocks)
- **[Textlint](#textlint)**: Markdown, plaintext

Finally, it is recommended that you add [this yaml file](./.github/workflows/lint.yml)
to the repo’s `.github/workflows/` directory to add a lint check to every push and
pull-request on the `main` branch.

### ESLint

For Javascript and Vue projects (`.js`, `.jsx`, `.vue`). Install the
[npm package](https://www.npmjs.com/package/eslint-config-goodbyte-styleguide) by running:

```bash
npm install eslint eslint-config-goodbyte-styleguide --save-dev
# or
pnpm add eslint-config-goodbyte-styleguide -D
```

Then, add it to the `.eslintrc` file at the root of the repo:

```json
{
    "extends": "goodbyte-styleguide"
}
```

### Stylelint

For CSS and Vue projects (`.css`, `.vue`). Install the
[npm package](https://www.npmjs.com/package/stylelint-config-goodbyte-styleguide)
by running:

```bash
npm install stylelint stylelint-config-goodbyte-styleguide --save-dev
# or
pnpm add stylelint-config-goodbyte-styleguide -D
```

Then, add it to the `.stylelintrc` file at the root of the repo:

```json
{
    "extends": "stylelint-config-goodbyte-styleguide"
}
```

### Textlint

For Markdown (or any projects containing a README) (`.md`, `.txt`). Install the
[npm package](https://www.npmjs.com/package/textlint-rule-preset-goodbyte-styleguide)
by running:

```bash
npm install textlint textlint-rule-preset-goodbyte-styleguide --save-dev
# or
pnpm add textlint-rule-preset-goodbyte-styleguide -D
```

Then, add it to the `.textlintrc` file at the root of the repo:

```json
{
	"rules": { "preset-goodbyte-styleguide": true }
}
```

## Contributing

If you find a bug, a missing use-case, or wish to add an additional config, please
feel encouraged to contribute. This styleguide is a living document, and nothing is
set in stone. If you find that the linter is too strict, not strict enough, or otherwise
lacking, open an [issue](https://github.com/GoodbyteCo/Styleguide/issues) (or pull-request
if you know what the fix would be).

When updating the rules, note that each folder is published to npm separately. Packages
will only be published if the version number in the `package.json` file is increased.

## Rational

The following covers some FAQs about the rational behind this styleguide’s choices.

1. _**Why use a linter at all?**_

	When combined with an auto-formatter, linters are a very powerful tool. Not only
	do they help keep the codebase consistent while reading, but they take a significant
	amount of the mental load off needing to think about formatting (although a linter
	_without_ an auto-formatter increases this mental load). They catch small mistakes
	you’d regret missing, and reduce the need to ever fix the formatting of some other
	part of the codebase.

2. _**"Styleguide"?**_
	
	We format _styleguide_ as a single word (rather than "style-guide" or "style guide") 
	because it is its own thing, deserving of its own word. This styleguide can be referred
	to as "the Styleguide" with an uppercase _S_, since it is a proper noun, but otherwise
	the word should be written like a common noun (lowercase).

3. _**Tabs?**_

	"Tabs vs Spaces" is a common point of contention that many have agreed is rather
	pointless, concluding: _"choose the one you like, it doesn’t really matter."_
	We disagree. 
	
	Indenting with spaces is stupid because it is overriding the computer’s built-in
	tab character and replacing it with something that might look like a tab character
	but is actually a bunch of spaces in a row. The result is that the size of the
	indentation (2 spaces, 4 spaces, etc.) is burned into the code, and therefore "more
	consistent" across environments. However, this is a misguided goal. Code does not
	need to be consistent across all environments, just all of _your_ environments. I
	personally like my code indented at a width of 4, and when working with a codebase
	that uses spaces, must adjust to the (now inconsistent) use of 2 or 4 or 8 spaces of
	indentation instead. Burning this width into the code is as if the codebase shipped
	with its own required font. All of my environments look consistent because I have
	configured them to look consistent (colors, font, tab-width), and forcing everyone
	to use the same tab-width because you cannot figure out how to configure your environment
	is silly. The code must be consistent with itself, but need not look identical across
	different developers’ computers. 
	
	By using tabs, everyone can set their own preferred tab-width, and the usage is
	simple: press the tab-key and get a tab character. Each level of indentation is
	one tab, and without the hackery of spaces pretending to be tabs, there is no such
	thing as a malformed tab-and-a-half.

4. _**Why does CSS and JS have different curly-brace rules?**_

	They are different languages and have different syntax. As a result, the formatting
	that is most readable is not the same. Placing a newline character before the
	curly-brace (`{`) creates a space between the header of the block and the content
	of the block, as well as a direct line between the opening brace and the closing brace.
	While this aides readability, some languages (such as Go) strongly enforce same-line-braces
	instead. Despite allowing you to do either, Javascript has evolved as a language where
	same-line-braces are so ubiquitous that it has shaped the syntax. As a result,
	same-line-braces are often the most readable choice for Javascript, and the one we
	choose here.
