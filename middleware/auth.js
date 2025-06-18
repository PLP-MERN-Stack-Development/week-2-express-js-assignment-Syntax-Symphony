const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== 'mysecretkey') {
    return res.status(401).json({ error: 'Unauthorized. API key missing or invalid.' });
  }

  next();
};

module.exports = auth;
