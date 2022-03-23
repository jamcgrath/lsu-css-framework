| Class name     | Value                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .border        | border-width: var(--border-width);<br/>border-style: var(--border-style);<br/> border-color: var(--border-color);                                        |
| .border-left   | border-left: var(--border-width) var(--border-style) var(--border-color);                                                                                |
| .border-right  | border-right: var(--border-width) var(--border-style) var(--border-color);                                                                               |
| .border-top    | border-top: var(--border-width) var(--border-style) var(--border-color);                                                                                 |
| .border-bottom | border-bottom: var(--border-width) var(--border-style) var(--border-color);                                                                              |
| .border-x      | border-left: var(--border-width) var(--border-style) var(--border-color);<br/>border-right: var(--border-width) var(--border-style) var(--border-color); |
| .border-y      | border-top: var(--border-width) var(--border-style) var(--border-color);<br/>border-bottom: var(--border-width) var(--border-style) var(--border-color); |

```CSS
:root {
	--border-width: 1px;
	--border-color: #000;
	--border-style: solid;
}
```

Modify borders by changing the variables: `--border-width`, `--border-color`, `--border-style`

```HTML
<div class="my-border border"> --- </div>

.my-border.border {
	--border-width: 4px;
	--border-color: var(--courses-green);
	--border-style: dashed;
}
```
