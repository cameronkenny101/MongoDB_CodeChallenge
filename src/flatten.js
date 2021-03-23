console.log("Please enter your JSON string (press ctrl D to submit json): \n")

process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';

process.stdin.on('data', function (chunk) {
    input += chunk;
});

process.stdin.on('end', function () {
    const parsedData = JSON.parse(input);
    const ans = JSON.stringify(flatten(parsedData), null, "   ");
    console.log("Your JSON: \n" + ans);
});

function flatten (json) {
    const flattened = {};

    let value;
    for (const i in json) {

        if (!json.hasOwnProperty(i))
            continue;

        if ((typeof json[i]) === 'object') {
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