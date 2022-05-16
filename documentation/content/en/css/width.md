---
title: Width
description: ""
position: 50
category: CSS

width: {
	head: ["Class", "value"],
	rows: [
		[".w-auto","width: auto"],
		[".w-5","width: 5%"],
		[".w-10","width: 10%"],
		[".w-15","width: 15%"],
		[".w-20","width: 20%"],
		[".w-25","width: 25%"],
		[".w-30","width: 30%"],
		[".w-33","width: calc(100% / 3)"],
		[".w-35","width: 35%"],
		[".w-40","width: 40%"],
		[".w-45","width: 45%"],
		[".w-50","width: 50%"],
		[".w-55","width: 55%"],
		[".w-60","width: 60%"],
		[".w-65","width: 65%"],
		[".w-66","width: calc((100% / 3) * 2)"],
		[".w-70","width: 70%"],
		[".w-75","width: 75%"],
		[".w-80","width: 80%"],
		[".w-85","width: 85%"],
		[".w-90","width: 90%"],
		[".w-95","width: 95%"],
		[".w-100","width: 100%"],
		[".w-",["--w-: auto","width: var(--w-, auto)"]],
	]
}
---

<c-table pn="width"></c-table>

## Max Width

```css
.max-w- {
	--max-w-: none;
	max-width: var(--max-w-, none);
}
```

## Media Queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers
