---
title: Position
description: ""
position: 20
category: CSS

positionData: {
	head: ["Class", "value"],
	rows: [
		["relative","position: relative"],
		["absolute"," position: absolute"],
		["fixed"," position: fixed"],
		["sticky"," position: sticky"],
		["static"," position: static",],
	]
}

tlrb: {
	head: ["Class", "value"],
	rows: [
		["left-0","left: 0"],
		["right-0","right: 0"],
		["top-0","top: 0"],
		["bottom-0","bottom: 0"],
		["left-",["--left-: 0","left: var(--left-, 0)"]],
		["right-",["--right-: 0","right: var(--right-, 0)"]],
		["top-",["--top-: 0","top: var(--top-, 0)"]],
		["bottom-",["--bottom-: 0","bottom: var(--bottom-, 0)"]],
	]
}
---

<c-table pn="positionData"></c-table>

## Positioning

<c-table pn="tlrb"></c-table>

Use `left-`,`right-`,`top-`,`bottom-` like this:

````html
<div class="left-" style="--left-pos>left: 0</div>

You can use the `.absolute-children` class top apply position relative to an element and all of its direct children will be absolutely positioned.

```css
.absolute-children {
	position: relative;
}
.absolute-children > * {
	position: absolute;
}
````
