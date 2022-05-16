| Class name | Value              |
| ---------- | ------------------ |
| .relative  | position: relative |
| .absolute  | position: absolute |
| .fixed     | position: fixed    |
| .sticky    | position: sticky   |
| .static    | position: static   |

## Position child elements

To position child elements use the `.absolute-children` class.

```css
.absolute-children {
	position: relative;
}
.absolute-children > * {
	position: absolute;
}
```
