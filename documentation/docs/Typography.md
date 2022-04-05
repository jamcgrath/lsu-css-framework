## font family

| Class name    | value                           |
| ------------- | ------------------------------- |
| .inter        | font-family: var(--inter);      |
| .noto-serif   | font-family: var(--noto-serif); |
| .font-inherit | font-family: inherit;           |

### font family custom properties

```css
--inter: "Inter", sans-serif;
--noto-serif: "Noto Serif", serif;
```

## font size

<div class="grid grid-column-2 gap-3 bg-gray-100 px-3 py-3 br-8 inter">
	<span class="title-1">title-1</span>
	<span class="title-2">title-2</span>
	<span class="title-3">title-3</span>
	<span class="title-4">title-4</span>
	<span class="title-5">title-5</span>
	<span class="title-6">title-6</span>
	<span class="title-7">title-7</span>
	<span class="copy">copy</span>
	<span class="body">body</span>
	<span class="label">label</span>
	<span class="caption">caption</span>
	<span class="overline-big">overline-big</span>
	<span class="small">small</span>
	<span class="overline-small">overline-small</span>
</div>

| Class name                               | value                             | rem      | px   |
| ---------------------------------------- | --------------------------------- | -------- | ---- |
| .title-1                                 | font-size: var(--title-1);        | 5rem     | 80px |
| .title-2<br/>.title-display-1            | font-size: var(--title-2);        | 4rem     | 64px |
| .title-3<br/>.title-display-2            | font-size: var(--title-3);        | 3rem     | 48px |
| .title-4<br/>.title-display-3            | font-size: var(--title-4);        | 2.5rem   | 40px |
| .title-5<br/>.title-display-4<br/>.quote | font-size: var(--title-5);        | 2rem     | 32px |
| .title-6<br/>.title-display-5            | font-size: var(--title-6);        | 1.5rem   | 24px |
| .title-7<br/>.title-display-6            | font-size: var(--title-7);        | 1.25rem  | 20px |
| .copy                                    | font-size: var(--copy);           | 1.125rem | 18px |
| .body                                    | font-size: var(--body);           | 1rem     | 16px |
| .label                                   | font-size: var(--label);          | 0.875rem | 14px |
| .caption                                 | font-size: var(--caption);        | 0.75rem  | 12px |
| .overline-big                            | font-size: var(--overline-bg);    | .6875rem | 11px |
| .small                                   | font-size: var(--small);          | 0.625rem | 10px |
| .overline-small                          | font-size: var(--overline-small); | .5625rem | 9px  |
| .fs-inherit                              | font-size: inherit;               | x        | x    |

### font-size custom properties

```css
--title-1: 5rem;
--title-2: 4rem;
--title-3: 3rem;
--title-4: 2.5rem;
--title-5: 2rem;
--title-6: 1.5rem;
--title-7: 1.25rem;
--copy: 1.125rem;
--body: 1rem;
--label: 0.875rem;
--caption: 0.75rem;
--overline-bg: 0.6875rem;
--small: 0.625rem;
--overline-small: 0.5625rem;

--quote: var(--title-4);

--title-1-display: var(--title-2);
--title-2-display: var(--title-3);
--title-3-display: var(--title-4);
--title-4-display: var(--title-5);
--tilte-5-display: var(--title-6);
--title-6-display: var(--title-7);
```

## font weight

| Class name               | value                            | weight |
| ------------------------ | -------------------------------- | ------ |
| .fw-100<br/>.thin        | font-weight: var(--thin);        | 100    |
| .fw-200<br/>.extra-light | font-weight: var(--extra-light); | 200    |
| .fw-300<br/>.light       | font-weight: var(--light);       | 300    |
| .fw-400<br/>.regular     | font-weight: var(--regular);     | 400    |
| .fw-500<br/>.medium      | font-weight: var(--medium);      | 500    |
| .fw-600<br/>.semi-bold   | font-weight: var(--semi-bold);   | 600    |
| .fw-700<br/>.bold        | font-weight: var(--bold);        | 700    |
| .fw-800<br/>.extra-bold  | font-weight: var(--extra-bold);  | 800    |
| .fw-900<br/>.black-bold  | font-weight: var(--black-bold);  | 900    |
| .fw-inherit              | font-weight: inherit;            | x      |

### font-weight custom properties

```css
--fw100: 100;
--fw200: 200;
--fw300: 300;
--fw400: 400;
--fw500: 500;
--fw600: 600;
--fw700: 700;
--fw800: 800;
--fw900: 900;

--thin: var(--fw100);
--extra-light: var(--fw200);
--light: var(--fw300);
--regular: var(--fw400);
--medium: var(--fw500);
--semi-bold: var(--fw600);
--bold: var(--fw700);
--extra-bold: var(--fw800);
--black-bold: var(--fw900);
```

## text alignment

| Class name   | value               |
| ------------ | ------------------- |
| .text-left   | text-align: left;   |
| .text-center | text-align: center; |
| .text-right  | text-align: right;  |
| .text-start  | text-align: start;  |
| .text-end    | text-align: end;    |

## text decoration

| Class name    | value                       |
| ------------- | --------------------------- |
| .underline    | text-decoration: underline; |
| .no-underline | text-decoration: none;      |

## text transform

| Class name  | value                       |
| ----------- | --------------------------- |
| .uppercase  | text-transform: uppercase;  |
| .lowercase  | text-transform: lowercase;  |
| .capitalize | text-transform: capitalize; |

## text overflow

|.elliipsis | text-overflow: ellipsis; |

## white space

| Class name | value                |
| ---------- | -------------------- |
| .nowrap    | white-space: nowrap; |

## Magic

If you under stand the magic of `.fs-scale` and how to use it, then you have permission to use the magic!

```css
.fs-scale {
	--root-fs: 16;
	--fs-min: 1rem;
	--fs-max: 2rem;
	--mq1: 320;
	--mq2: 800;
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
```
