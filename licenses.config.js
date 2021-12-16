module.exports = {
  isValidLicense: new RegExp(
    // MIT, Apache, BSD, ISC, MPL, UNLICENSE, CC0, CC-[1-4].0
    '\\b(mit|apache\\b.*2|bsd|0bsd|isc|mpl|unlicense|cc0?\\b.*[1-4].0)\\b',
    'i',
  ),
  ignorePackages: [
    // WTFPL https://github.com/parshap/truncate-utf8-bytes/blob/master/package.json#L19
    'truncate-utf8-bytes',
    // WTFPL https://github.com/parshap/utf8-byte-length/blob/master/package.json#L18
    'utf8-byte-length'
  ],
};