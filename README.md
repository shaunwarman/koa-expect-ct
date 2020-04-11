# koa-expect-ct

[![build status](https://img.shields.io/travis/com/shaunwarman/koa-expect-ct.svg)](https://travis-ci.com/shaunwarman/koa-expect-ct)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/koa-expect-ct.svg)](https://codecov.io/gh/shaunwarman/koa-expect-ct)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/koa-expect-ct.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/koa-expect-ct.svg)](https://npm.im/koa-expect-ct)

> A koajs middleware for expect-ct header


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install koa-expect-ct
```

[yarn][]:

```sh
yarn add koa-expect-ct
```


## Usage

```js
const expectCT = require('koa-expect-ct');

const app = new Koa();

const options = {
  maxAge: 60,
  enforce: true,
  reportUri: 'https://reports.com'
};

// add expectCT middleware
app.use(expectCT(options));
app.use(function (ctx) {
  ctx.body = { foo: 'bar' };
});
```


## Contributors

| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <https://shaunwarman.com> |


## License

[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
