const fs = require('node:fs')

fs.readFile("D:\\aWeb\\javascript\\day20\\1.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });