---
title: Position
description: ""
position: 50
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

<!--prettier-ignore-->
<code-group>
<code-block label="Inline" active>

```html
<div class="left-" style="--left-: 10px"></div>
```

</code-block>
<code-block label="CSS">

```css
<div class="my-class right-"></div>

.my-class {
	--right-: right: 50px;
}
```

</code-block>
</code-group>

You can use the `.absolute-children` class to apply position relative to an element and all of its direct children will be absolutely positioned.

```css
.absolute-children {
	position: relative;
}
.absolute-children > * {
	position: absolute;
}
```

## media queries

Prefix `md-` or `lg-` for media query modifiers

The `.left-`, `.right-`, `.top-`, `.bottom-` classes rely on css custom properties and fallback value to allow it to work across media queries

<code-group>
<code-block label="Inline" active>

<!-- prettier-ignore -->
```html
<div class="left-"style="--left-: 10px; --md-left-: 20px --lg-left-: 30px"></div>
```

</code-block>
<code-block label="CSS">

```css
<div class="my-class right-"></div>

.my-class {
	--right-: right: 50px;
	--md-right-: right: 20px;
	--lg-right-: right: 30px;
}
```

</code-block>
</code-group>
