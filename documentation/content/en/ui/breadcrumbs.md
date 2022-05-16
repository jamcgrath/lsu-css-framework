---
title: Breadcrumbs
description: ""
position: 60
category: UI

breadcrumbData: {
	head: ["Class", "value"],
	rows: [
		[["breadcrumb","breadcrumb-dark"],["list-style: none","font-size: var(--bc-font-size)","padding: var(--bc-padding-y) var(--bc-padding-x)","border-radius: var(--bc-border-radius)","background-color: var(--bc-bg)","color: var(--bc-color)","text-align: center","text-decoration: var(--bc-text-decoration)"]],
		["breadcrumb-dark",["--bc-bg: var(--color-gray-900)","--bc-color: var(--color-white)"]],
		[["breadcrumb:hover","breadcrumb-dark:hover"]," --bc-color: var(--color-state-hover)"],
		["breadcrumb:focus",["--bc-color: var(--color-white)","--bc-bg: var(--color-brand-mint)"]],
		["breadcrumb-dark:focus",["--bc-color: var(--color-gray-900)","--bc-bg: var(--color-brand-mint)"]],
		["breadcrumb-disabled",["--bc-color: var(--color-gray-600)","--bc-bg: var(--color-gray-300)"]]
	]
}
---

<c-table pn="breadcrumbData"></c-table>
