---
title: Grid
description:
position: 41
category: Layout

gridData: {
	head: ["Class", "value"],
	rows: [
		["grid", "display: grid"],
		["grid-column", "grid-template-columns: repeat(var(--grid-repeat), minmax(var(--grid-col-min), var(--grid-col-max)))"],
		["grid-row", "grid-template-rows: repeat(var(--grid-repeat), minmax(var(--grid-row-min), var(--grid-row-max)))"],
		["grid-fluid", "grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-fluid-min), 100%), 1fr))"],
		["grid-1","grid-template-columns: repeat(1, minmax(0, 1fr))"],
		["grid-2","grid-template-columns: repeat(2, minmax(0, 1fr))"],
		["grid-3","grid-template-columns: repeat(3, minmax(0, 1fr))"],
		["grid-4","grid-template-columns: repeat(4, minmax(0, 1fr))"],
		["grid-5","grid-template-columns: repeat(5, minmax(0, 1fr))"],
	]
}
---

<c-table pn="gridData"></c-table>

## Custom properties

```css
:root {
	--grid-col-min: 0;
	--grid-col-max: 1fr;
	--grid-row-min: 1fr;
	--grid-row-max: 1fr;
	--grid-repeat: auto-fit;
	--grid-fluid-min: 280px;
}
```

## Media queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers

```html
<div class="md-grid md-grid-2 lg-grid-4"></div>
```
