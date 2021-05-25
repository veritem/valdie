## Valdie
[![CI](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/superlinter.yml/badge.svg)](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/superlinter.yml) ![npm](https://img.shields.io/npm/v/valdie.svg?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/valdie?style=flat-square)


A TypeScript and JavaScript Validation Library that just works 🔨


You probably never knew you needed it but here you go.


### Install

```bash
npm i valdie
```


### Getting started

When validating an email

```javascript

import { isEmail } from "valdie"

console.log(isEmail("test@test.com")) // returns true
```

When validating an email
```javascript

import { isInteger } from "valdie"

console.log(isInteger(34)) // returns true
```

When validating an email
```javascript

import { isString } from "valdie"

console.log(isInteger("My cool string")) // returns true
```


#### Licence

The project is under [MIT](https://github.com/Rwanda-Coding-Academy/Valdie/edit/main/README.md) Licence
