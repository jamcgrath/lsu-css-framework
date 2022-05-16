---
title: Container
description: ""
position: 50
category: CSS

container: {
	head: ["Class", "value"],
	rows: [
		["sm-container", ["width: 100%", "max-width:640px"]],
		["md-container", ["width: 100%", "max-width:768px"]],
		["lg-container", ["width: 100%", "max-width:1024px"]],
		["container", ["width: 100%", "max-width:1160px"]],
	]
}

---

<c-table pn="container"></c-table>

## Fullwidth

`fullwidth` will break a child out of it's parent container

```css
/* break child element out of parent container */
.fullwidth {
	width: 100vw;
	position: relative;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
}
```
