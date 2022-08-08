const { Duplex, PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('1.mp4');
const writeStream = createWriteStream('./data/write.txt');

class Throttle extends Duplex {
    constructor(ms) {
        super();
        this.delay = ms;
    }

    _read(size) {
        console.log(`read data ${size}`);
    }

    _write(chunk, encoding, callback) {
        this.push(chunk);
        console.log(`write throttle data`);
        setTimeout(callback, this.delay);
    }

    _final(callback) {
        this.push(null);
    }
}

const report = new PassThrough();
const throttle = new Throttle(10);

let total = 0;

report.on('data', (chunk) => {
    total += chunk.length;
    console.log('byes = ', total);
});

readStream
    .pipe(throttle)
    .pipe(report)
    .pipe(writeStream)
    .on('close', () => console.log("close"));