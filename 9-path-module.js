const path = require('path')

//returns a platform specific seperator.
console.log(path.sep);

//returns combine normalised path
const filePath = path.join('/content','Subfolder','text.txt')

console.log(filePath)

const base = path.basename(filePath)

console.log(base);

//path.resolve -> returns an absolute path

const absolute = path.resolve(__dirname,'content','Subfolder','test.txt')
console.log('absolute path is->');
console.log(absolute);
