## Valdie
[![CI](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/superlinter.yml/badge.svg)](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/superlinter.yml) ![npm](https://img.shields.io/npm/v/valdie.svg?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/valdie?style=flat-square)


A TypeScript and JavaScript Validation Library that just works 🔨


You probably never knew you needed it but here you go.


### Install

```bash
npm i valdie
```
or 

```bash
yarn add valdie
```


### Getting started

When validating an email

```javascript

import { isEmail } from "valdie"

console.log(isEmail("test@test.com")) // true
```

### API Reference
**isEmail**
```javascript
console.log(isEmail("test@test.com")) // true
```

**isInteger**
```javascript
console.log(isInteger(34)) // true
```

**isString**
```javascript
console.log(isString("My cool string")) // true
```

**isUrl**
```javascript
console.log(isURL("https://github.com/Rwanda-Coding-Academy/Valdie")) // true
```

**isTel**
```javascript
console.log(isTel("+25 078 044 9380") // true
```

**isAccepted** : checks whether value is truthfull value , allowed truthful values are `yes`, `on`, `true` and `1`
```javascript
console.log(isAccepted("yes") // true
```

#### Licence

The project is under [MIT](https://github.com/Rwanda-Coding-Academy/Valdie/edit/main/README.md) Licence
