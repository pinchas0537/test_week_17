const fs = require('fs').promises;

async function readCSV() {
    const text = await fs.readFile('data.csv', 'utf8');
    const lines = text.trim().split('\n');

    const headers = lines[0].split(',');
    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};

        headers.forEach((h, i) => {
            obj[h] = values[i];
        });

        return obj;
    });

    console.log(data);
}

readCSV();