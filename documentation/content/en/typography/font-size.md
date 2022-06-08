---
title: Font Size
description: ""
position: 10
category: Typography

fs: {
	head: ["Class", "Value", "rem", "px"],
	rows: [
		[
			"title-1",
			[
				"--line-height: 1.1",
				"--letter-spacing: var(--letter-spacing-7)",
				"font-size: var(--title-1)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)"
			],
			"5rem",
			"80px"
		],
		[
			["title-2","title-display-1"],
			[
				"--line-height: 1.28",
				"--letter-spacing: var(--letter-spacing-7)",
				"font-size: var(--title-2)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)"
			],
			"4rem",
			"64px"
		],
		[
			["title-3","title-display-2"],
			[
				"--line-height: 1.16",
				"--letter-spacing: var(--letter-spacing-6)",
				"font-size: var(--title-3)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"3rem",
			"48px"
		],
		[
			["title-4","title-display-3","quote"],
			[
				"--line-height: 1.2",
				"--letter-spacing: var(--letter-spacing-5)",
				"font-size: var(--title-4)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"2.5rem",
			"40px"
		],
		[
			["title-5","title-display-4"],
			[
				"--line-height: 1.25",
				"--letter-spacing: var(--letter-spacing-4)",
				"font-size: var(--title-5)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"2rem",
			"32px"
		],
		[
			["title-6","title-display-5"],
			[
				"--letter-spacing: var(--letter-spacing-3)",
				"font-size: var(--title-6)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"1.5rem",
			"24px"
		],
		[
			["title-7","title-display-6"],
			[
				"--line-height: 1.6",
				"--letter-spacing: var(--letter-spacing-2)",
				"font-size: var(--title-7)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"1.25rem",
			"18px"
		],
		[
			"copy",
			[
				"--letter-spacing: var(--letter-spacing-1)",
				"font-size: var(--copy)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"1.125rem",
			"18px"
		],
		[
			"body",
			[
				"--line-height: 1.5",
				"font-size: var(--body)",
				"line-height: var(--line-height)",
			],
			"1rem",
			"16px"
		],
		[
			"label",
			[
				"--line-height: 1.71",
				"font-size: var(--label)",
				"line-height: var(--line-height)",
			],
			"0.875rem",
			"14px"
		],
		[
			"caption",
			[
				"font-size: var(--caption)",
				"line-height: var(--line-height)"
			],
			"0.75rem",
			"12px"
		],
		[
			"overline-big",
			[
				"--line-height: 1.09",
				"--letter-spacing: 0.125rem",
				"font-size: var(--overline-big)",
				"line-height: var(--line-height)",
				"letter-spacing: var(--letter-spacing)",
			],
			"0.6875rem",
			"11px"
		],
		[
			"small",
			[
				"--line-height: 1.2",
				"font-size: var(--small)",
				"line-height: var(--line-height)",
			],
			"0.625rem",
			"10px"
		],
		[
			"overline-small",
			[
				"font-size: var(--overline-small)",
				"line-height: var(--line-height)"
			],
			"0.5625rem",
			"9px"
		]
	]
}

---

<c-table pn="fs"></c-table>

## Media queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers

## the magic 🧙‍♂️

⚠️ **USE AT YOUR OWN RISK** ⚠️

The magic will auto scale a font size based on a min and max font size. All values supplied need to be unitless. `--max-fs` and `--min-fs` are unitless rems. `--mq1` and `--mq2` are unitless pixel values for min and max viewport size.

```css
.fs-scale {
	--root-fs: 16;
	--min-fs: 1;
	--max-fs: 2;
	--mq1: 300;
	--mq2: 1024;
	--min-width: calc(var(--mq1) / var(--root-fs));
	--max-width: calc(var(--mq2) / var(--root-fs));
	--slope: calc(
		(var(--max-fs) - var(--min-fs)) / (var(--max-width) - var(--min-width))
	);
	--y-intersect: calc(
		(calc(var(--min-width) * -1) * var(--slope) + var(--min-fs))
	);
	--slope-vw: calc(var(--slope) * 100vw);
	--preferred-val: calc(calc(var(--y-intersect) * 1rem) + var(--slope-vw));
	--clamp-fs: clamp(
		calc(var(--min-fs) * 1rem),
		var(--preferred-val),
		calc(var(--max-fs) * 1rem)
	);
}

.fs-scale {
	font-size: calc(var(--min-fs) * 1rem);
}

@media (min-width: 64em) {
	.fs-scale {
		font-size: calc(var(--max-fs) * 1rem);
	}
}

@media (min-width: 1px) {
	@supports (font-size: clamp(1px, 2px, 3px)) {
		.fs-scale {
			font-size: var(--clamp-fs);
		}
	}
}
```

<!--prettier-ignore-->
<code-group>
<code-block label="HTML" active>

```html
<h1 class="title fs-scale">Title</h1>
```

</code-block>
<code-block label="CSS">

```css
.title.fs-scale {
	--min-fs: 1.5;
	--max-fs: 3;
}
```

</code-block>
</code-group>

Here's a working example on [codepen](https://codepen.io/jamcgrath/pen/dydqQJG).
