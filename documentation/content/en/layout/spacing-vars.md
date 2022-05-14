---
title: Spacing Vars
description:
position: 32
category: Spacing

spacingVars: {
	head: ['Property', 'rem', 'px'],
	rows: [
		["--space-1","0.25rem","4px"],
		["--space-2","0.5rem","8px"],
		["--space-3","0.75rem","12px"],
		["--space-4","1rem","16px"],
		["--space-5","1.25rem","20px"],
		["--space-6","1.5rem","24px"],
		["--space-7","1.75rem","28px"],
		["--space-8","2rem","32px"],
		["--space-9","2.25rem","36px"],
		["--space-10","2.5rem","40px"],
		["--space-11","2.75rem","44px"],
		["--space-12","3rem","48px"],
		["--space-13","3.25rem","52px"],
		["--space-14","3.5rem","56px"],
		["--space-15","3.75rem","60px"],
		["--space-16","4rem","64px"],
		["--space-17","4.25rem","68px"],
		["--space-18","4.5rem","72px"],
		["--space-19","4.75rem","76px"],
		["--space-20","5rem","80px"],
		["--space-1px","","1px"],
		["--space-2px","","2px"],
		["--space-3px","","3px"],
		["--space-4px","","4px"],
		["--space-5px","","5px"],
		["--space-6px","","6px"],
		["--space-7px","","7px"],
		["--space-8px","","8px"],
		["--space-9px","","9px"],
		["--space-10px","","10px"],
	]
}

rootVars: {
	head: ['Property'],
	rows: [
		["--base-fs: 16"],
		["--base-space: 4"],
	]
}

---

## Custom Property List

Outputted values are in rem except for `--space-*px` which is in px.

<c-table pn="spacingVars"></c-table>

### Overide

You can overide the value of `--space-**` by changing the `--base-fs` variable.

```css
.myclass {
	--base-fs: 10;
	padding: var(--space-2); // 20px
}
```

## Root Variables

<c-table pn="rootVars"></c-table>
