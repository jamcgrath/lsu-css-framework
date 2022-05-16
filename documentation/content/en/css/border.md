---
title: Border
description: ""
position: 50
category: CSS

borderData: {
	head: ["Class", "value"],
	rows: [
		[
			"border",
			[
				"border-width:var(--border-width)",
				"border-style: var(--border-style)"
				,"border-color: var(--border-color)"
			]
		],
		[
			"border-left",
			["border-left: var(--border-width) var(--border-style) var(--border-color)"]
		],
		[
			"border-right",
			["border-right: var(--border-width) var(--border-style) var(--border-color)"]
		],
		[
			"border-top",
			["border-top: var(--border-width)var(--border-style) var(--border-color)"]
		],
		[
			"border-bottom",
			["border-bottom: var(--border-width) var(--border-style) var(--border-color)"]
		],
		[
			"border-x",
			[
				"border-left: var(--border-width) var(--border-style) var(--border-color)",
				"border-right: var(--border-width) var(--border-style) var(--border-color)"
			]
		],
		[
			"border-y",
			[
				"border-top: var(--border-width) var(--border-style) var(--border-color)",

			"border-bottom: var(--border-width) var(--border-style) var(--border-color)"]
		],
		[
			"border-none",
			[
				"--border-width: 0",
				"--border-color: transparent",
				"--border-style: none"
			]
		]
	]
}
---

<c-table pn="borderData"></c-table>

Modify borders by changing the variables: `--border-width`, `--border-color`, `--border-style`

```html
<div class="my-border border">---</div>

.my-border.border { --border-width: 4px; --border-color: var(--courses-green);
--border-style: dashed; }
```

## Default CSS Properties

```css
:root {
	--border-width: 1px;
	--border-color: #000;
	--border-style: solid;
}
```
