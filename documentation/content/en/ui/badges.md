---
title: Badges
description: ""
position: 60
category: UI

badgeDefault: {
	head: ["Class", "value"],
	rows: [
		["badge",
			[
				 "color: var(--badge-color)","background-color: var(--badge-bg)","font-size: var(--badge-font-size)","font-weight: var(--badge-font-weight)","line-height: var(--badge-line-height)","letter-spacing: var(--badge-letter-spacing)","text-transform: var(--badge-text-transform)","padding: var(--badge-padding-x) var(--badge-padding-y)","border-radius: var(--badge-border-radius)","text-decoration: var(--badge-text-decoration)"
			]
		]
	]
}
badgeSize: {
	head: ["Class", "value", "font-size"],
	rows: [
		["badge-small", ["--badge-line-height:1.3;","--badge-font-size:var(--overline-small);"],"9px"],
		["badge-medium",["--badge-line-height:1.09;","--badge-font-size:var(--overline-big);"],"11px"]
	]
}

badgeColors: {
	head: ["Class", "value"],
	rows: [
		["badge-reverse",["--badge-color: var(--color-black);","--badge-bg: var(--color-white);"]],
		["badge-light",["--badge-color: var(--color-gray-700);","--badge-bg: var(--color-gray-300);"]],
		["badge-light-success",["--badge-color: var(--color-success);","--badge-bg: var(--color-success-light);"]],
		["badge-light-error",["--badge-color: var(--color-error);","--badge-bg: var(--color-error-light);"]],
		["badge-light-alert",["--badge-color: var(--color-alert);","--badge-bg: var(--color-alert-light);"]],
		["badge-light-warning",["--badge-color: var(--color-warning);","--badge-bg: var(--color-warning-light);"]],
		["badge-light-info",["--badge-color: var(--color-info);","--badge-bg: var(--color-info-light);"]],
		["badge-dark",["--badge-color: var(--color-white);","--badge-bg: var(--color-gray-700);"]],
		["badge-dark-success",["--badge-color: var(--color-white);","--badge-bg: var(--color-success);"]],
		["badge-dark-error",["--badge-color: var(--color-white);","--badge-bg: var(--color-error);"]],
		["badge-dark-alert",["--badge-color: var(--color-black);","--badge-bg: var(--color-alert);"]],
		["badge-dark-warning",["--badge-color: var(--color-white);","--badge-bg: var(--color-warning);"]],
		["badge-dark-info",["--badge-color: var(--color-white);","--badge-bg: var(--color-info);"]],
	]
}
---

## Default

<c-table pn="badgeDefault"></c-table>

## Size

<c-table pn="badgeSize"></c-table>

## Colors

<c-table pn="badgeColors"></c-table>
