<div class="grid grid-column-4 gap-3 bg-gray-100 px-3 py-3 br-8 mb-6">
	<div class="br-8 bg-courses-green flex flex-center">br-8</div>
	<div class="br-12 bg-courses-green flex flex-center">br-12</div>
	<div class="br-16 bg-courses-green flex flex-center px-3 py-4  ">br-16</div>
	<div class="br-24 bg-courses-green flex flex-center px-3 py-4  ">br-24</div>
	<div class="br-100 bg-courses-green flex flex-center px-3 py-4 ">br-100</div>
	<div class="br-120 bg-courses-green flex flex-center px-3 py-4 ">br-120</div>
	<div class="docs-circle circle bg-courses-green flex flex-center">circle</div>
</div>

| Class name | Value                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| .br-8      | border-radius: 8px;                                                                                       |
| .br-12     | border-radius: 12px;                                                                                      |
| .br-16     | border-radius: 16px;                                                                                      |
| .br-24     | border-radius: 24px;                                                                                      |
| .br-100    | border-radius: 100px;                                                                                     |
| .br-120    | border-radius: 120px;                                                                                     |
| .circle    | border-radius: 50%;<br/>aspect-ratio: 1;<br/>width: var(--circle-width);<br/>height: var(--circle-width); |

Adjust the circle with using the following variables: `--circle-width`

```html
:root { --circle-width: ; }
```

Note that the `--circle-width` has no value. You will have to set it to make a circle

```html
<div class="my-circle circle">---</div>

.my-circle.circle { --circle-width: 100px; }
```
