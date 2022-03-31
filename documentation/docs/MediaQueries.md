| Class Property | Value                                        | px             |
| -------------- | -------------------------------------------- | -------------- |
| --mq-sm-max    | (max-width: 39.9375em)                       | 639px          |
| --mq-md        | (min-width: 40em)                            | 640px          |
| --mq-md-max    | (max-width: 63.9385em)                       | 1023px         |
| --mq-md-only   | (min-width: 40em) and (max-width: 63.9385em) | 640px / 1023px |
| --mq-lg        | (min-width: 64em)                            | 1024px         |

```css
@custom-media --mq-sm-max (width: >= 39.9375em);
@custom-media --mq-md (width > 40em);
@custom-media --mq-md-max (width >= 63.9385em);
@custom-media --mq-md-only (40em >= width <63.9385em);
@custom-media --mq-lg (width < 64em);

/* Media Query Usage */
@media (--mq-sm-max) {
	/* styles for miles... */
}

/* Converts to  */
@media (max-width: 39.9375em) {
	/* styles for miles... */
}
```
