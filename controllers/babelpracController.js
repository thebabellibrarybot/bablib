const BabelTombModel = require('../models/BabelTombs')
const mongoose = require('mongoose');


// get all babelTombs
const getBabelPrac = async (req, res) => {
    const babeltombs = await BabelTombModel.find({}).sort({access_key: -1})
    res.status(200).json(babeltombs);
}  

module.exports = {
    getBabelPrac 
}