---
title: Display
description: ""
position: 20
category: CSS

display:
  {
    head: ["Class", "value"],
    rows:
      [
        ["block", "display:block;"],
        ["inline-block", "display:inline-block;"],
        [["inline", "display:inline;"],
        [["hidden", "[hidden]"], "display:hidden"],
        ["flex", "display:flex;"],
        ["flex-inline", "display:inline-flex;"],
        ["grid", "display:grid;"],
      ],
  }
---

<c-table pn="display"></c-table>

## Media Queries

Prefix `sm-`, `md-` or `lg-` for media query modifiers

```html
<div class="sm-block md-flex lg-hidden"></div>
```
