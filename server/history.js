const fs = require('fs');

const path = './server/db/stats.json';


const history = (product, action) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const js = JSON.parse(data);
        js.push({
          action: action,
          product: product,
          time: new Date(),
        });
        fs.writeFile(path, JSON.stringify(js, null, 4), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    })
  };

module.exports = history;