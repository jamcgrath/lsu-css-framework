---
title: Focus
description: ""
position: 20
category: CSS
---

## Default focus styles

```css
:root {
	--focus-outline-color: var(--color-state-hover);
	--focus-outline-style: solid;
	--focus-outline-width: 1px;
	--focus-outline-offset: 1px;
}

*:focus,
.focus {
	outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color);
	outline-offset: var(--focus-outline-offset);
}
*:focus:not(:focus-visible) {
	outline: none;
}

*:focus-visible {
	outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color);
	outline-offset: var(--focus-outline-offset);
}
```
