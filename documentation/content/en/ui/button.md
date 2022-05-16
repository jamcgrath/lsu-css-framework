---

title: Button
description: ""
position: 60
category: UI

btnDefault: {
	head: [Class, value],
	rows: [
		["btn",
			["display: inline-flex","align-items: center","justify-content: center","padding: var(--btn-padding-x) var(--btn-padding-y)","border: var(--btn-border-width) var(--btn-border-color) var(--btn-border-style)","border-radius: var(--btn-border-radius);color: var(--btn-color)","background-color: var(--btn-bg)","text-transform: var(--btn-text-transform);font-size: var(--btn-font-size)","font-weight: var(--btn-font-weight)","line-height: var(--btn-line-height)","letter-spacing: 2px","text-decoration: var(--btn-text-decoration)","cursor: var(--btn-cursor)" ]]
		]
}

btnSize: {
	head: [Class, value],
	rows: [
[btn-small, ["--btn-padding-x: var(--space-2)","--btn-padding-y: var(--space-3)"]],
[btn-medium,["--btn-padding-x: var(--space-3)","--btn-padding-y: var(--space-4)"]],
[btn-large, ["--btn-padding-x: var(--space-4)","--btn-padding-y: var(--space-6)"]]
	]
}

btnColors: {
	head: [Class, value],
	rows: [
		["btn-primary",["--btn-border-width: 0","--btn-color: var(--color-brand-deep-blue)","--btn-bg: var(--color-brand-mint)"]],
		["btn-secondary",["--btn-border-width: 0","--btn-color: var(--color-white)","--btn-bg: var(--color-brand-deep-blue)"]],
		[["btn-disabled","btn[disabled]","button[disabled]"],["--btn-border-width: 0","--btn-color: var(--color-gray-600)","--btn-bg: var(--color-gray-300)"]],
		["btn-hot-pink",["--btn-border-width: 0","--btn-bg: var(--color-brand-hot-pink)"]],
		["btn-canary",["--btn-border-width: 0","--btn-bg: var(--color-brand-canary)"]]
	]
}

btnborder: {
	head: [Class, value],
	rows: [
		[
			"btn-border-none",
			[
				"--btn-border-color: transparent",
				"--btn-border-style: none",
				"--btn-border-width: 0",
			]
		]
	]
}

---

## Default

<c-table pn="btnDefault"></c-table>

## Sizes

<c-table pn="btnSize"></c-table>

## Colors

<c-table pn="btnColors"></c-table>

## Border

<c-table pn="btnborder"></c-table>

## Custom Properties

```css
:root {
	--btn-padding-x: var(--space-2);
	--btn-padding-y: var(--space-3);
	--btn-border-radius: 100px;
	--btn-color: var(-color-brand-deep-blue);
	--btn-border-color: var(-color-brand-deep-blue);
	--btn-border-style: solid;
	--btn-border-width: 1px;
	--btn-bg: transparent;
	--btn-text-transform: uppercase;
	--btn-font-size: var(--overline-big);
	--btn-font-weight: var(--fw700);
	--btn-font-family: var(--inter);
	--btn-text-decoration: none;
	--btn-box-shadow: none;
	--btn-line-height: 1.09;
}
```
