const pathToNestedObj = require('./index');

describe('pathToNestedObj', () => {
  it('should create a nested object with keys corresponding to the path elements', () => {
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

  it('should work with whatever separator is supplied as the second parameter', () => {
    expect(pathToNestedObj('person/hand/finger', '/', null)).toEqual({
      person: {
        hand: {
          finger: null,
        },
      },
    });

    expect(pathToNestedObj('person-hand-finger', '-', null)).toEqual({
      person: {
        hand: {
          finger: null,
        },
      },
    });

    expect(pathToNestedObj('person\\hand\\finger', '\\', null)).toEqual({
      person: {
        hand: {
          finger: null,
        },
      },
    });
  });

  it('should use whatever value is supplied as the third parameter for the value at the deepest level', () => {
    // Strings
    expect(
      pathToNestedObj('person.hand.finger', '.', 'myAmazingValue'),
    ).toEqual({
      person: {
        hand: {
          finger: 'myAmazingValue',
        },
      },
    });

    // Numbers
    expect(pathToNestedObj('person.hand.finger', '.', 97)).toEqual({
      person: {
        hand: {
          finger: 97,
        },
      },
    });

    expect(pathToNestedObj('l1.l2.l3', '.', null)).toEqual({
      l1: {
        l2: {
          l3: null,
        },
      },
    });

    expect(pathToNestedObj('l1.l2.l3', '.', undefined)).toEqual({
      l1: {
        l2: {
          l3: undefined,
        },
      },
    });

    // Objects
    expect(
      pathToNestedObj('person.hand.finger', '.', {
        mega: 'megaValue',
        ultra: 'ultraValue',
      }),
    ).toEqual({
      person: {
        hand: {
          finger: {
            mega: 'megaValue',
            ultra: 'ultraValue',
          },
        },
      },
    });
  });
});
