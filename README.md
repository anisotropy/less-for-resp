# LESS mixins for responsive design

[**Live Demo**](http://anisotropy.github.io/less-for-resp/demo)

# Motivation

Write easily codes for responsive design using LESS mixins.

## Install

```
npm install --save less-for-resp
```

## Usage

```less
@import '~less-for-resp/index';

div {
  .resp-linear(width; 100 200 500 800);
}

```

## `.resp-linear`
```
.resp-linear(@prop; @values; @bps; @base; @op)
```

## License

[MIT](LICENSE)
