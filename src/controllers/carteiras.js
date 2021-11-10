const walletRepositories = require("../repositories/carteiras");

exports.getAll = async (req, res) => {
  const carteiras = await walletRepositories.getAll();

  res.send(carteiras);
};
