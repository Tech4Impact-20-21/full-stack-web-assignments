# Responsive Web Design First Assignment

1. What is `responsive web design`?

- Answer: Responsive web design is a way to create web pages that can adjust to the device screen. It will automatically adjust for different screen sizes & viewports.

2. Mention all `relative units` in CSS!

- Answer: `em` (relative to the font-size of the element), `ex` (relative to the x-height of the current font), `ch` (relative to the width of the zero), `rem `(relative to the font-size of the root element), `vw`(relative to 1% of the width of the viewport), `vh` (relative to 1% of the height of the viewport), `vmin` (relative to 1% of viewport's smaller dimension), `vmax` (relative to 1% of viewport's larger dimension), `%` (relative to the parent element)

3. What is `breakpoint`? How can we create it?

- Answer: Breakpoint is point where the website content responds according to the device width. Way to specify breakpoint:

```css
/* To set maximum width */
@media only screen and (max-width: 600px) {
}

/* To set minimum width */
@media only screen and (max-width: 600px) {
}
```

4. What can we use to manipulate position of an `element` in 1 dimension?

- Answer: flex

5. What can we use to manipulate position of an `element` in 2 dimensions?

- Answer: grid
