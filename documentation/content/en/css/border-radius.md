---
title: Border Radius
description: ""
position: 50
category: CSS

brData: {
	head: ["Class", "value"],
	rows: [
		["br-8", "border-radius: 8px"],
		["br-12", "border-radius: 12px"],
		["br-16", "border-radius: 16px"],
		["br-24", "border-radius: 24px"],
		["br-32", "border-radius: 32px"],
		["br-100", "border-radius: 100px"],
		["br-120", "border-radius: 120px"],
		["circle", ["border-radius: 50%","aspect-ratio: 1","width: var(--circle-width)","height: var(--circle-width)"]]
	]
}
---

<c-table pn="brData"></c-table>

Note that the `--circle-width` has no value. You will have to set it to make a circle

```html
<div class="my-circle circle" style="--circle-width: 100px;"></div>

.my-circle.circle { --circle-width: 100px; }
```

## Media Queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers
