<h1 align="center">Native js functions with fallback</h1>

## 📦 Install

```bash
npm install native-with-fallback
```

```bash
yarn add native-with-fallback
```

## When To Use

When users need to check the given value is number or find index of matching value in an array or find a matching value in the given array.

## 🔨 Usage

```js
const {isInteger, findIndex} = require('native-with-fallback');

isInteger(5);

const normalArray = [1, 2, 3, 4, 5];
findIndex(normalArray, (value)=>value===2);
```

## API

| Property | Description | prams |
| --- | --- | --- |
| isInteger | check is given valus in number| value |
| findIndex | find index of a value| array , predicate |
| find | find a matching value| array , predicate |

[twitterurl]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[githuburl]: http://i.imgur.com/0o48UoR.png (github icon with padding)

[1]: https://twitter.com/Rajeshkumar_kgm
[2]: https://github.com/Rajesh-kumar-r

# Follow me on
[![twitter][twitterurl]][1] [![github][githuburl]][2]
