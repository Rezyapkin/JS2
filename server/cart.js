const add = (cart, req) => {
  cart.contents.push(req.body);
  return { product: req.body, json: JSON.stringify(cart, null, 4)};
};

const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  return { product: find, json: JSON.stringify(cart, null, 4)};
};

const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity -= 1;
  if (find.quantity <= 0) {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  }
  return { product: find, json: JSON.stringify(cart, null, 4)};
};

module.exports = {
  add,
  change,
  del,
};
