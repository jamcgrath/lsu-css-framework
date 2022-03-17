## Breadcrumbs

| Class name              | Value                                                                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .breadcrumb-light       | --bc-color: var(--color-black)<br/>--bc-bg: var(--color-white)<br/>list-style: none<br/>font-size: var(--bc-font-size)<br/>padding: var(--bc-padding-y) var(--bc-padding-x)<br/>border-radius: var(--bc-border-radius)<br/>  |
| .breadcrumb-light:hover | --bc-bg: var(--color-brand-mint)                                                                                                                                                                                             |
| .breadcrumb-dark:hover  | --bc-color: var(--color-state-hover)                                                                                                                                                                                         |
| .breadcrumb-light:focus | --bc-color: var(--color-white)<br/> --bc-bg: var(--color-brand-mint)                                                                                                                                                         |
| .breadcrumb-dark        | --bc-color: var(--color-white)<br/>--bc-bg: var(--color-black)<br/>list-style: none<br/>font-size: var(--bc-font-size)<br/>padding: var(--bc-padding-y) var(--bc-padding-x)<br/>border-radius: var(--bc-border-radius)       |
| .breadcrumb-dark:focus  | --bc-color: var(--color-gray-900)<br/>--bc-bg: var(--color-brand-mint)                                                                                                                                                       |
| .breadcrumb-disabled    | --bc-color: var(--color-gray-600)<br/>--bc-bg: var(--color-gray-300)<br/>list-style: none<br/>font-size: var(--bc-font-size)<br/>padding: var(--bc-padding-y) var(--bc-padding-x)<br/>border-radius: var(--bc-border-radius) |

## Breadcrumb Custom Properties

```CSS
:root {
	--bc-color: var(--color-black);
	--bc-bg: var(--color-white);
	--bc-padding-y: 0.25rem;
	--bc-padding-x: 0.75rem;
	--bc-border-radius: 0.5rem;
	--bc-font-size: var(--body);
}
```
