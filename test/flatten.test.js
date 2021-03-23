const { flatten } = require('../src/flatten');

test('Example in question', () => {
    let json = {
        "a": 1,
        "b": true,
        "c": {
            "d": 3,
            "e": "test"
        }
    }

    let flattenedJSON = {
        "a": 1,
        "b": true,
        "c.d": 3,
        "c.e": "test",
    }
})

test('3 Level JSON', () => {
    let json = {
        "a": 1,
        "b": true,
        "c": {
            "d": 3,
            "e": "test"
        },
        "f": {
            "g": {
                "h": 2
            }
        }
    }

    let flattenedJSON = {
        "a": 1,
        "b": true,
        "c.d": 3,
        "c.e": "test",
        "f.g.h": 2
    }

    expect(flatten(json)).toStrictEqual(flattenedJSON);
});

test('Empty JSON', () => {
    let json = {}
    let flattenedJSON = {}
    expect(flatten(json)).toStrictEqual(flattenedJSON);
})