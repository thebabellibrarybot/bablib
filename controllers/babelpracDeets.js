const BabelTombDetailsModel = require('../models/BabelTombDeets')
const BabelTombs = require('../models/BabelTombs')


// get all babelTombs
const getBabelTombDeets = async (req, res) => {

    const { id } = req.params 
    console.log(id)  

    const babeltomb = await BabelTombs.findById(id)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tomb'})
    }

    const { buk } = babeltomb.s3buk
    const babeltombdeets = await BabelTombDetailsModel.find()
    
    console.log('getbabeldeetscontroller')
    console.log(babeltomb.s3buk)
    res.status(200).json(babeltombdeets);
}

module.exports = {
    getBabelTombDeets
}