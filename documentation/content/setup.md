---
title: Setup
description: sadfsadf
position: 2
category: CSS

tableData: {
					head: ["test", "test1", "test2"],
					rows: [
						["cell1", "cell2", "cell3"],
						["cell4", "cell5", ["cell6", "cell7"]],
						["cell8", "cell9", "cell10"],
						["cell8", "cell9", "cell10"],
						["cell8", "cell9", "cell10"],
						["cell8", "cell9", "cell10"],
					],
				}
---

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@nuxtjs/xxx` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/xxx
```

  </code-block>
  <code-block label="NPM">

```bash
npm install @nuxtjs/xxx
```

  </code-block>
</code-group>

Then, add `@nuxtjs/xxx` to the `modules` section of `nuxt.config.js`:

```js[nuxt.config.js]
{
  modules: [
    '@nuxtjs/xxx'
  ],
  xxx: {
    // Options
  }
}
```

<c-table pn="tableData"></c-table>
