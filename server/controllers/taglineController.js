const Tagline = require("../models/Tagline"); 

exports.getTaglines = async (req, res) => {
  try {
    const data = await Tagline.find({});
    res.send(data);
    res.status(200);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.postTagline = async (req, res) => {
  try {
    const data = new Tagline(req.body);
    await data.save();
    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500).send({error: error.message });
 }
};
