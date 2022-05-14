---
title: Overflow
description: ""
position: 50
category: CSS

overflow: {
	head: ["Class", "value"],
	rows: [
		["overflow-auto"," overflow: auto"],
		["overflow-x-auto"," overflow-x: auto"],
		["overflow-y-auto"," overflow-y: auto"],
		["overflow-hidden"," overflow: hidden"],
		["overflow-x-hidden"," overflow-x: hidden"],
		["overflow-y-hidden"," overflow-y: hidden"],
		["overflow-scroll"," overflow: scroll"],
		["overflow-x-scroll"," overflow-x: scroll"],
		["overflow-y-scroll"," overflow-y: scroll"],
		["overflow-visible"," overflow: visible"],
		["overflow-x-visible"," overflow-x: visible"],
		["overflow-y-visible"," overflow-y: visible"],
		["overflow-clip"," overflow: clip"],
		["overflow-x-clip"," overflow-x: clip"],
		["overflow-y-clip"," overflow-y: clip"],
	]
}
---

<c-table pn="overflow"></c-table>

## Hide scrollbars

Use `hide-scrollbars` to hide the scrollbars.

```css
/* hide scrollbars */
.hide-scroll {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
.hide-scroll::-webkit-scrollbar {
	display: none; /* Chrome, Safari and Opera */
}
```
