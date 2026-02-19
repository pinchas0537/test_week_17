import fs from "fs/promises"
export async function readCSV() {
    const text = await fs.readFile('./db/terrorData.csv', 'utf8');
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1,51).map(line => {
        const values = line.split(',');
        const obj = {}
        headers.filter((h, i) => {    
            obj[h] = values[i];
        });
        return obj;
    });
    
    return data
}