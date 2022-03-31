Hide only visually, but have it available for screen readers:

```css
.visually-hidden {
	border: 0;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
```

Extends the .visually-hidden class to allow the element `to be focusable when navigated to via the keyboard:

```css
.visually-hidden.focusable:active,
.visually-hidden.focusable:focus {
	clip: auto;
	height: auto;
	margin: 0;
	overflow: visible;
	position: static;
	white-space: inherit;
	width: auto;
}
```

Hide visually and from screen readers, but maintain layout

```css
.invisible {
	visibility: hidden;
}
```
