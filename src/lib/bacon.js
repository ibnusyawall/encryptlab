const bacon = require('bacon-cipher');

module.exports.encode = data => {
    const encoded = bacon.encode(data);
    return encoded;
}

module.exports.decode = data => {
    const decoded = bacon.decode(data);
    return decoded;
}
