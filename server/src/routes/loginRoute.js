module.exports = (req, res) => {
  // check if the password matches
  if (req.body.password === process.env.PASSWORD) {
    res.send("hello login new setup");
  } else {
    res.status(401).send("Wrong Password");
  }
};
