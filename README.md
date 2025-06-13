# path-to-nested-obj

Turns a file path with a user-specified separator into a nested object.

## Install

```bash
npm install path-to-nested-obj
```

## Usage

```js
import pathToNestedObj from 'path-to-nested-obj';

// args: path, separator (e.g. a dot or forward slash), value of the deepest nested obj.
const nestedObj = pathToNestedObj('path.to.value', '.', 'myValue');

// Result:
// nestedObj = { 
//   path: { 
//     to: {
//       value: 'myValue' 
//     }
//   } 
// }
```
