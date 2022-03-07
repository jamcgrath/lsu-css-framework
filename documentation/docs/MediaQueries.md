| Class Property | Value                 		| px 		|
| -------------- | ----------------------		| ---- 	|
| --mq-sm-max    | (max-width: 39.9375em) 	| 639 	|
| --mq-md        | (min-width: 40em)        | 640 	|
| --mq-md-max    | (max-width: 63.9385em) 	| 1023 	|
| --mq-md-only	 | (min-width: 40em) and (max-width: 63.9385em) |640 / 1023 |
| --mq-lg        | (min-width: 64em)        | 1024 	|


```css
@custom-media --mq-sm-max (max-width: 39.9375em);
@custom-media --mq-md (min-width: 40em);
@custom-media --mq-md-max (max-width: 63.9385em);
@custom-media --mq-md-only (min-width: 40em) and (max-width: 63.9385em);
@custom-media --mq-lg (min-width: 64em);

/* Media Query Usage */
@media(--mq-sm-max) {
	/* styles for miles... */
}

/* Converts to  */
@media(max-width: 39.9375em) {
	/* styles for miles... */
}
```