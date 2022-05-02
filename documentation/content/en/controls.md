---
title: Controls
description: ""
position: 2
category: UI

controls: {
	head: ["Class", "value"],
	rows: [
["control",["font-size: var(--control-font-size)","padding: var(--control-padding-y) var(--control-padding-x)","border-radius: var(--control-border-radius)"]],
["control-light",["background-color: var(--color-gray-600)","color: var(--color-gray-200)"]],
["control-dark",["background-color: var(--color-white)","color: var(--color-gray-900)"]],
["control-active",[" background-color: var(--color-white)","color: var(--color-brand-mint)"]],
["control-rounded","border-radius: var(--control-border-radius)"],
["control-rounded-l",["--control-border-radius: 0.25rem 0 0 0.25rem;","border-radius: var(--control-border-radius)"]],
["control-rounded-r",["--control-border-radius: 0 0.25rem 0.25rem 0;","border-radius: var(--control-border-radius)"]],
	]
}
---

<c-table pn="controls"></c-table>

## Controls Custom Properties

```css
:root {
	--control-font-size: var(--label);
	--control-bg: var(--color-gray-200);
	--control-color: var(--color-gray-600);
	--control-padding-y: 0.5rem;
	--control-padding-x: 2rem;
	--control-border-radius: 0.25rem;
}
```
