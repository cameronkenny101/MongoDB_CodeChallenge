// Imports the function to be tested
const { flatten } = require('../src/flatten');

// Test the example given in the question
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

    expect(flatten(json)).toStrictEqual(flattenedJSON);
})

// Test a 3 level JSON
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

// Test an empty JSON
test('Empty JSON', () => {
    let json = {}
    let flattenedJSON = {}
    expect(flatten(json)).toStrictEqual(flattenedJSON);
})