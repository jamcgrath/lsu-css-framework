<div class="grid grid-column-4 gap-3 bg-gray-100 px-3 py-3 br-8">
 	<div>
		<button class='btn'>btn</button>
	</div>
 	<div>
		<button class='btn btn-small'>btn-small</button>
	</div>
 	<div>
		<button class='btn btn-medium'>btn-medium</button>
	</div>
 	<div>
		<button class='btn btn-large'>btn-large</button>
	</div>
 	<div>
		<button class='btn btn-primary'>btn-primary</button>
	</div>
 	<div>
		<button class='btn btn-secondary'>btn-secondary</button>
	</div>
 	<div>
		<button class='btn btn-disabled'>btn-disabled</button>
	</div>
 	<div>
		<button class='btn btn-hot-pink'>btn-hot-pink</button>
	</div>
 	<div>
		<button class='btn btn-canary'>btn-canary</button>
	</div>
</div>

## Button Custom Properties

```CSS
:root {
	--btn-padding-x: var(--space-2);
	--btn-padding-y: var(--space-3);
	--btn-border-radius: 100px;
	--btn-color: var(-color-brand-deep-blue);
	--btn-border-color: var(-color-brand-deep-blue);
	--btn-border-style: solid;
	--btn-border-width: 1px;
	--btn-bg: transparent;
	--btn-text-transform: uppercase;
	--btn-font-size: var(--overline-big);
	--btn-font-weight: var(--fw700);
	--btn-font-family: var(--inter);
	--btn-text-decoration: none;
	--btn-box-shadow: none;
	--btn-line-height: 1.09;
}
```

## Button

| Class name | value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| .btn       | display: inline-flex;<br/>align-items: center;<br/>justify-content: center;<br/>padding: var(--btn-padding-x) var(--btn-padding-y);<br/>border: var(--btn-border-width) var(--btn-border-color) var(--btn-border-style);<br/>border-radius: var(--btn-border-radius);color: var(--btn-color);<br/>background-color: var(--btn-bg);<br/>text-transform: var(--btn-text-transform);font-size: var(--btn-font-size);<br/>font-weight: var(--btn-font-weight);<br/>line-height: var(--btn-line-height);<br/>letter-spacing: 2px;<br/>text-decoration: var(--btn-text-decoration);<br/>cursor: var(--btn-cursor); |

## Button Sizes

| Class name  | value                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| .btn-small  | --btn-padding-x: var(--space-2);<br/>--btn-padding-y: var(--space-3);  |
| .btn-medium | --btn-padding-x: var(--space-3);<br/> --btn-padding-y: var(--space-4); |
| .btn-large  | --btn-padding-x: var(--space-4); <br/>--btn-padding-y: var(--space-6); |

## Button Colors

| Class name                                            | value                                                                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| .btn-primary                                          | --btn-border-width: 0;<br/>--btn-color: var(--color-brand-deep-blue);<br/>--btn-bg: var(--color-brand-mint);<br/> |
| .btn-secondary                                        | --btn-border-width: 0;<br/>--btn-color: var(--color-white);<br/>--btn-bg: var(--color-brand-deep-blue);<br/>      |
| .btn-disabled<br/>.btn[disabled]<br/>button[disabled] | --btn-border-width: 0;<br/>--btn-color: var(--color-gray-600);<br/>--btn-bg: var(--color-gray-300);<br/>          |
| .btn-hot-pink                                         | --btn-border-width: 0;<br/>--btn-bg: var(--color-brand-hot-pink);<br/>                                            |
| .btn-canary                                           | --btn-border-width: 0;<br/>--btn-bg: var(--color-brand-canary);<br/>                                              |
