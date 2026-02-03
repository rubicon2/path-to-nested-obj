/**
 * @param {string} path The path that describes the object shape. E.g. 'my/nested/key' which will produce { my: { nested: { key: value } } }
 * @param {string} pathSeparator The character or string that determines how to split the path into object keys.
 * @param {*} value The value to be placed at the deepest level of the resulting object. Can be any type, including null or undefined.
 * @returns {object} An object matching the structure described by the path parameter, containing the value parameter at its deepest level.
 */
function pathToNestedObj(path, pathSeparator, value) {
  const nestedPath = {};
  const pathElements = path.split(pathSeparator);
  let currentLevel = nestedPath;
  for (let i = 0; i < pathElements.length; i++) {
    const nextKey = pathElements[i];
    if (i === pathElements.length - 1) {
      currentLevel[nextKey] = value;
      break;
    }
    const nextLevel = {};
    currentLevel[nextKey] = nextLevel;
    currentLevel = nextLevel;
  }
  return nestedPath;
}

module.exports = pathToNestedObj;
