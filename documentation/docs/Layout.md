
## breakpoints
|         | 0 - 639px  | 640px - 1023px | 1024px +  |
|---------|:----------:|:--------------:|:---------:|
| mobile  |     sm-    |        x       |     x     |
| tablet  |      -     |       md-      |     x     |
| desktop |      -     |        -       |     lg-   |


mobile   0 - 40em (640px) use no prefix or `sm-`
```html
<div class="flex flex-column"></div>
```
tablet 	40em -  64em (640px - 1024px) prefix with `md-`
```html
<div class="flex sm-flex-column md-flex-row md-justify-center"></div>
```
desktop 64em + (1024px) prefix width `lg-`
```html
<div class="flex sm-flex-column md-flex-row md-justify-center lg-justify-between lg-align-end"></div>
```

## display
|Class name   	| value   							|
|---						|---									 	|
|.block			 		| display: block       	|
|.inline		 		| display: inline      	|
|.inline-block 	| display: inline-block	|
|.flex        	| display: flex         |
|.inline-flex 	| display: inline-flex  |

## flexbox
|Class name   | Value |
|---|---|
|.flex        | display: flex               |
|.flex-inline | display: inline-flex |

### direction
|Class name   | Value |
|---|---|
|.flex-column | flex-direction: flex-column |
|.flex-row    | flex-direction: flex-row |
|.flex-reverse| flex-direction: row-reverse |
|.flex-reverse-column| flex-direction: column-reverse |

### wrap
|Class name   | Value |
|---|---|
|.flex-wrap   | flex-wrap: wrap |
|.flex-nowrap | flex-wrap: nowrap |

### justify
|Class name   | Value |
|---|---|
|.flex-center | justify-content: center<br />align-items: center |
|.justify-start | justify-content: flex-start |
|.justify-end | justify-content: flex-end |
|.justify-center | justify-content: center |
|.justify-between | justify-content: space-between |
|.justify-around | justify-content: space-around |
|.justify-evenly | justify-content: space-evenly |

### align
|Class name   | Value |
|---|---|
|.align-start | align-items: flex-start |
|.align-end | align-items: flex-end |
|.align-center | align-items: center |

### flex child
|Class name   | Value |
|---|---|
|.flex-1 | flex: 1 |
|.flex-2 | flex: 2 |
|.flex-3 | flex: 3 |
|.flex-4 | flex: 4 |

## grid
|Class name | value   |
|---|---|
|.grid | display: grid |
|.grid-column | grid-template-columns: repeat(var(--repeat), minmax(var(--grid-min), var(--grid-max)));|
|.grid-row | grid-template-rows: repeat(var(--repeat), minmax(var(--grid-min), var(--grid-max)));|
|.grid-column-1 | 	grid-template-columns: repeat(1, minmax(0, 1fr));
|.grid-column-2 | 	grid-template-columns: repeat(2, minmax(0, 1fr));
|.grid-column-3 | 	grid-template-columns: repeat(3, minmax(0, 1fr));
|.grid-column-4 | 	grid-template-columns: repeat(4, minmax(0, 1fr));
|.grid-column-5 | 	grid-template-columns: repeat(5, minmax(0, 1fr));

### grid css properties
```css
:where(html) {
	--grid-min: 0;
	--grid-max: 1fr;
	--repeat: auto-fit
}
```
