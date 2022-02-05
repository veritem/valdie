## Valdie
[![CI](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml/badge.svg)](https://github.com/Rwanda-Coding-Academy/Valdie/actions/workflows/ci.yml)
![npm](https://img.shields.io/npm/v/valdie.svg?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dw/valdie?style=flat-square)


A TypeScript and JavaScript Validation Library that  works

 - 🎉 It doesn't have any dependancy  
 - 💪 Simple api 
 - 📦 It works with TypeScript


You probably never knew you needed it but here you go.


### Getting started

```bash
npm i valdie
```
or 

```bash
yarn add valdie
```

using deno

```bash
import valdie from 'https://cdn.skypack.dev/valdie'
```


### Documentation

1. <a href="#isemail">`isEmail`</a>
2. <a href="#isInteger">`isInteger`</a>
3. <a href="#isString">`isString`</a>
4. <a href="#isURL">`isURL`</a>


### They are two ways of consuming our api

```javascript

import { isEmail } from "valdie"

console.log(isEmail("test@test.com")) // true
let { message,success } = isEmail("test@gmail.com")
```

### isInteger




```javascript
console.log(isInteger(34)) // true
```


## Maintainers

- [@veritem](https://github.com/veritem)
- [@PatrickNiyogitare28](https://github.com/PatrickNiyogitare28)

#### Licence

The project is under [MIT](https://github.com/Rwanda-Coding-Academy/Valdie/blob/main/LICENSE) Licence 2021
