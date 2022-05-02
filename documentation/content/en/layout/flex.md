---
title: Flex
description:
position: 1
category: Layout



flex: {
	head: ["Class", "value"],
	rows: [
		["flex", "display: flex"],
		["flex-inline", "display: inline-flex"],
		["flex-center", ["justify-content: center","align-items: center"]]
	]
}

direction: {
	head: ["Class", "value"],
	rows: [
		["flex-column", "flex-direction: column"],
		["flex-row", "flex-direction: row"],
		["flex-reverse", "flex-direction: row-reverse"],
		["flex-reverse-column", "flex-direction: column-reverse"]
	]
}

wrap: {
	head: ["Class", "value"],
	rows: [
		["flex-wrap", "flex-wrap: wrap"],
		["flex-nowrap", "flex-wrap: nowrap"],
		["flex-wrap-reverse", "flex-wrap: wrap-reverse"]
	]
}

justify: {
	head: ["Class", "value"],
	rows: [
		["justify-start", "justify-content: flex-start"],
		["justify-end", "justify-content: flex-end"],
		["justify-center", "justify-content: center"],
		["justify-between", "justify-content: space-between"],
		["justify-around", "justify-content: space-around"],
		["justify-evenly", "justify-content: space-evenly"]
	]
}

align: {
	head: ["Class", "value"],
	rows: [
		["align-start", "align-items: flex-start"],
		["align-end", "align-items: flex-end"],
		["align-center", "align-items: center"]
	]
}

flexnum: {
	head: ["Class", "value"],
	rows: [
		["flex-1", "flex: 1"],
		["flex-2", "flex: 2"],
		["flex-3", "flex: 3"],
		["flex-4", "flex: 4"],
		["flex-auto", "flex: auto"],
		["flex-none", "flex: none"]
	]
}
---

## Display

<c-table pn="flex"></c-table>

## Direction

<c-table pn="direction"></c-table>

## Wrap

<c-table pn="wrap"></c-table>

## Align

<c-table pn="align"></c-table>

## Flex

<c-table pn="flexnum"></c-table>

## Media Queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers

```html
<div class="flex sm-flex-column md-flex-row lg-align-center"></div>
```
