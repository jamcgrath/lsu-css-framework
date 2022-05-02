<div class="grid grid-column-4 gap-3 bg-gray-100 px-3 py-3 br-8">
	<a href="#badge-default"><span class="badge">Badge Default</span></a>
	<a href="#badge-size"><span class="badge badge-small">badge-small</span></a>
	<a href="#badge-size"><span class="badge badge-medium">badge-medium</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-reverse">badge-reverse</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light">badge-light</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light-success">badge-light-success</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light-error">badge-light-error</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light-alert">badge-light-alert</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light-warning">badge-light-warning</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-light-info">badge-light-info</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark">badge-dark</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark-success">badge-dark-success</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark-error">badge-dark-error</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark-alert">badge-dark-alert</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark-warning">badge-dark-warning</span></a>
	<a href="#badge-colors"><span class="badge badge-medium badge-dark-info">badge-dark-info</span></a>
</div>

## Badge Custom Properties

```css
:root {
	--badge-color: var(--color-white);
	--badge-bg: var(--color-black);
	--badge-font-size: var(--overline-small);
	--badge-font-weight: var(--fw700);
	--badge-font-family: var(--inter);
	--badge-line-height: 1.3;
	--badge-text-transform: uppercase;
	--badge-letter-spacing: 2px;
	--badge-padding-x: var(--space-1);
	--badge-padding-y: var(--space-2);
	--badge-border-radius: 8px;
	--badge-text-decoration: none;
}
```

## Badge Default

| Class name | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .badge     | color: var(--badge-color)<br/>background-color: var(--badge-bg)<br/>font-size: var(--badge-font-size)<br/>font-weight: var(--badge-font-weight)<br/>line-height: var(--badge-line-height)<br/>letter-spacing: var(--badge-letter-spacing)<br/>text-transform: var(--badge-text-transform)<br/>padding: var(--badge-padding-x) var(--badge-padding-y)<br/>border-radius: var(--badge-border-radius)<br/>text-decoration: var(--badge-text-decoration) |

## Badge Sizes

| Class name    | Value                                                                   | rem       | px   |
| ------------- | ----------------------------------------------------------------------- | --------- | ---- |
| .badge-small  | --badge-line-height: 1.3;<br/>--badge-font-size: var(--overline-small); | 0.5625rem | 9px  |
| .badge-medium | --badge-line-height: 1.09;<br/>--badge-font-size: var(--overline-big);  | 0.6875rem | 11px |

## Badge Colors

| Class name           | Value                                                                            |
| -------------------- | -------------------------------------------------------------------------------- |
| .badge-reverse       | --badge-color: var(--color-black);<br/>--badge-bg: var(--color-white);           |
| .badge-light         | --badge-color: var(--color-gray-700);<br/>--badge-bg: var(--color-gray-300);     |
| .badge-light-success | --badge-color: var(--color-success);<br/>--badge-bg: var(--color-success-light); |
| .badge-light-error   | --badge-color: var(--color-error);<br/>--badge-bg: var(--color-error-light);     |
| .badge-light-alert   | --badge-color: var(--color-alert);<br/>--badge-bg: var(--color-alert-light);     |
| .badge-light-warning | --badge-color: var(--color-warning);<br/>--badge-bg: var(--color-warning-light); |
| .badge-light-info    | --badge-color: var(--color-info);<br/>--badge-bg: var(--color-info-light);       |
| .badge-dark          | --badge-color: var(--color-white);<br/>--badge-bg: var(--color-gray-700);        |
| .badge-dark-success  | --badge-color: var(--color-white);<br/>--badge-bg: var(--color-success);         |
| .badge-dark-error    | --badge-color: var(--color-white);<br/>--badge-bg: var(--color-error);           |
| .badge-dark-alert    | --badge-color: var(--color-black);<br/>--badge-bg: var(--color-alert);           |
| .badge-dark-warning  | --badge-color: var(--color-white);<br/>--badge-bg: var(--color-warning);         |
| .badge-dark-info     | --badge-color: var(--color-white);<br/>--badge-bg: var(--color-info);            |
