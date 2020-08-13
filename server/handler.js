const fs = require('fs');
const cart = require('./cart');
const history = require('./history');

const actions = {
  add: cart.add,
  change: cart.change,
  del: cart.del,
};

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const {product, json} = actions[action](JSON.parse(data), req);
      fs.writeFile(file, json, (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          history(product.product_name, action);
          res.send('{"result": 1}');
        }
      })
    }
  });
};

module.exports = handler;
