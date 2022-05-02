Default focus styles

```css
--root {
	--focus-outline-color: var(--color-state-hover);
	--focus-outline-style: solid;
	--focus-outline-width: 2px;
	--focus-outline-offset: 2px;
}

*:focus,
.focus:focus {
	outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color);
	outline-offset: var(--focus-outline-offset);
}

@supports selector(:focus-visible) {
	*:focus,
	.focus:focus {
		outline: none;
	}
	*:focus-visible,
	.focus:focus-visible {
		outline: var(--focus-outline-width) var(--focus-outline-style) var(--focus-outline-color);
		outline-offset: var(--focus-outline-offset);
	}
}
```

To modify the focus style for your element do something like

```css
.my-button-focus:focus-visible {
	--focus-outline-color: red;
}
```
