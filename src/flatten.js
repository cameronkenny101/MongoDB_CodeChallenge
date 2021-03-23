console.log("Please enter your JSON string (press ctrl D to submit json): \n")

// Standard input handler
process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';

process.stdin.on('data', function (chunk) {
    input += chunk;
});

process.stdin.on('end', function () {
    const parsedData = JSON.parse(input);
    // Call and prettify our flattened JSON
    const ans = JSON.stringify(flatten(parsedData), null, "   ");
    console.log("Your JSON: \n" + ans);
});

/*
 * Recursive function to flatten a JSON input. We go through each object
 * in the JSON. If there is an object inside an object, we recursively flatten
 * the object until we reach our base case which is when the JSON has been flattened.
 * We then return the flattened JSON when we have went through each elemtn and it has
 * been flattened.
 *
 * @param json: This is our json input
 * @return We return the flattened version of the json input
 */

function flatten (json) {
    const flattened = {};

    let value;
    for (const i in json) {

        // Stops us from having duplicate keys. According to "The JavaScript Object Notation (JSON) Data Interchange Format",
        // we are not supposed to have duplicate keys: https://tools.ietf.org/html/rfc8259#section-4
        if (!json.hasOwnProperty(i))
            continue;

        if ((typeof json[i]) === 'object') {
            // Recursively flatten the json
            value = flatten(json[i]);
            for (const j in value) {
                if (!value.hasOwnProperty(j))
                    continue;
                flattened[i + '.' + j] = value[j];
            }
        } else {
            flattened[i] = json[i];
        }
    }

    return flattened;
}

exports.flatten = flatten;