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
