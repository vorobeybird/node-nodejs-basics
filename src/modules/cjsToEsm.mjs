import path , { dirname } from 'path';
import { release, version } from 'os';
import { fileURLToPath } from 'url';
import {createServer as createServerHttp} from 'http';
import { readFile } from 'fs/promises';
import './files/c.js';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/a.json', import.meta.url)
        )
    )

} else {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/b.json', import.meta.url)
        )
    )
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});


export {unknownObject , createMyServer }