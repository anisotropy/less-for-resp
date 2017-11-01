# LESS mixins for responsive design

[**Live Demo**](http://anisotropy.github.io/less-for-resp/demo)

## Motivation

Write easily codes for responsive design using LESS mixins.

## Install

```
npm install --save less-for-resp
```

## Usage

```less
@import '~less-for-resp/index'; // Or @import '[directory]/index'

div {
  .resp-linear(width; 100 200 500 800);
  .resp-step(float; none left right);
}

```

## `.resp-linear`

Parameters: `(@prop; @values; @bps; @offset; @mult)`

- `@prop`: CSS property name. The value of the property should be a number in *px*.
- `@values`: The list of values for `@prop` for given breakpoints(`@bps`). It should be a list of numbers.
- `@bps`: Breakpoints. It should be a list of numbers.
- `@offset`, `@mult`: Each value of `@values` is calculated by '`@offset` + `@mult` * value'. They should be numbers.

This mixin calculates a property value using *linear interpolation*. For example, if the property is `height`, the breakpoints are `300 400`, the values are `100 200`, -- `.resp-linear(height; 100 200; 300 400)` -- and page width is 350px, the output is `height: 150px;`. If page width is less than 300px, the result is 100px which is the least value. If page width is larger than 200px, the result is 400px which is the largest value;

## `.resp-step`

Parameters: `(@prop; @values; @bps)`

- `@prop`: Any CSS property name.
-  `@values`: The list of values for `@prop` for given breakpoints(`@bps`). Each value should be include its unit.
- `@bps`: Breakpoints. It should be a list of numbers.

This mixin outputs the value for a given breakpoint. In this case of `.resp-step(height; 100px 200px; 300 400)`, the result is `height: 100px` when page width is 350px.

## License

[MIT](LICENSE.txt)
