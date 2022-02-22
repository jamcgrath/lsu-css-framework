|         | 0 - 639px  | 640px - 1023px | 1024px +  |
|---------|:----------:|:--------------:|:---------:|
| mobile  |     sm-    |        x       |     x     |
| tablet  |      -     |       md-      |     x     |
| desktop |      -     |        -       |     lg-   |


mobile   0 - 40em (640px) use no prefix or `sm-`
```html
<div class="flex flex-column"></div>
```
tablet 	40em -  64em (640px - 1024px) prefix with `md-`
```html
<div class="flex sm-flex-column md-flex-row md-justify-center"></div>
```
desktop 64em + (1024px) prefix width `lg-`
```html
<div class="flex sm-flex-column md-flex-row md-justify-center lg-justify-between lg-align-end"></div>
```
