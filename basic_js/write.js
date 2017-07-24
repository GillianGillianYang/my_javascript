// require core module `file system`
var fs = require('fs');

// exports 1 method for other modules or files to use

module.exports = {
    write: (filename, data) => {
        fs.writeFileSync(filename, data);
    }

};