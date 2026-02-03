const pathToNestedObj = require('./index');

describe('pathToNestedObj', () => {
  it.each([
    ['owner.name', { owner: { name: 'value' } }],
    [
      'planet.continent.country',
      { planet: { continent: { country: 'value' } } },
    ],
  ])(
    'create a nested object with keys corresponding to the first parameter path segments: %s',
    (path, output) => {
      expect(pathToNestedObj(path, '.', 'value')).toEqual(output);
    },
  );
  it('create a nested object with keys corresponding to the path elements', () => {
    expect(pathToNestedObj('owner.name', '.', 'jimbo')).toEqual({
      owner: {
        name: 'jimbo',
      },
    });

    expect(pathToNestedObj('planet.continent.country', '.', 'england')).toEqual(
      {
        planet: {
          continent: {
            country: 'england',
          },
        },
      },
    );
  });

  it.each(['/', '-', '\\', '.'])(
    'use second parameter as the path separator: %s',
    (separator) => {
      const path = ['person', 'hand', 'finger'].join(separator);
      expect(pathToNestedObj(path, separator, null)).toEqual({
        person: {
          hand: {
            finger: null,
          },
        },
      });
    },
  );

  it.each([
    'myAmazingValue',
    97,
    [1, 2, 3],
    { key: 'someObjectValue' },
    null,
    undefined,
  ])(
    'use third parameter as value at deepest level of output object: %s',
    (value) => {
      expect(pathToNestedObj('person.hand.finger', '.', value)).toEqual({
        person: {
          hand: {
            finger: value,
          },
        },
      });
    },
  );
});
