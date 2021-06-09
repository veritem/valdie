## Valdie
[![CI](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml/badge.svg)](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml)
![npm](https://img.shields.io/npm/v/valdie.svg?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/valdie?style=flat-square)


A TypeScript and JavaScript Validation Library that just works 🔨


You probably never knew you needed it but here you go.


### Getting started

```bash
npm i valdie
```
or 

```bash
yarn add valdie
```

or 

```bash
yarn add valdie
```

or 

```bash
pnpm install valdie
```


### Documentation

1. <a href="#isemail">`isEmail`</a>
2. <a href="#isInteger">`isInteger`</a>
3. <a href="#isString">`isString`</a>
4. <a href="#isURL">`isURL`</a>


### isEmail

```javascript

import { isEmail } from "valdie"

console.log(isEmail("test@test.com")) // true
```

### isInteger

```javascript

import { isInteger } from "valdie"

console.log(isInteger(34)) // returns true

```

### isString

```javascript
console.log(isInteger(34)) // true
```

**isString**
```javascript
console.log(isString("My cool string")) // true
```

### isURL

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

## For contributors
 Doors are open for any kind of contribution PRs and Issues, before submittin your PR or Issue it is advised to take a look in our [CONTRIBUTOR_COVENANT](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/CONTRIBUTOR_COVENANT.md) and  [CONTRIBUTING_PRACTICES](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/CONTRIBUTING.md)

 To easy the review, kindly describe your PR. You can find the PR description templete in our [CONTRIBUTOR_COVENANT](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/CONTRIBUTOR_COVENANT.md)


## Maintainers

- [@veritem](https://github.com/veritem)
- [@PatrickNiyogitare28](https://github.com/PatrickNiyogitare28)

#### Licence

The project is under [MIT](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/LICENSE) Licence 2021
