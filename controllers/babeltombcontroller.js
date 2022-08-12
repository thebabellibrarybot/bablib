const BabelTombs = require('../models/BabelTombs')
const BabelTombDetailsModel = require('../models/BabelTombDeets')


// get all babelTombs
const getBabeltombs = async (req, res) => {
    const babeltombs = await BabelTombs.find({}).sort({access_key: -1})
    console.log('get tombs controler')
    res.status(200).json(babeltombs);
}
 
 
// get a single babel tombs
const getBabeltombByname = async (req, res) => {
  
    const { id } = req.params 
    

    const babeltomb = await BabelTombs.findById(id)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tombP'})
    }

    const buk = babeltomb.s3buk
    const query = {buk: buk}

    const babeltombdeets = await BabelTombDetailsModel.find(query)  // i wanna add a sort func here plzzzz
    res.status(200).json(babeltombdeets);
    

}

// get a single microfilm data 
const getBabeltombMicrofilm = async (req, res) => {

    const { id } = req.params 
    console.log(id)
    console.log('get micro')
    const babeltomb = await BabelTombs.findById(id)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tombP'})
    }

    const buk = babeltomb.s3buk
    console.log(buk)
    const query = {
        buk: buk,
        type: 'micro-film'
    }

    const babeltombfilm = await BabelTombDetailsModel.find(query)
        .sort({'acess_key':1})
    res.status(200).json(babeltombfilm)

}


// get babel translate by ID
const getBabeltombTranslate = async (req, res) => {

    const { id } = req.params 

    const babeltomb = await BabelTombs.findById(id)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tombP'})
    }

    res.status(200).json(babeltomb);
}
const getBabeltombTranscript = async (req, res) => {

    const { id } = req.params 

    const babeltomb = await BabelTombs.findById(id)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tombP'})
    }
    res.status(200).json(babeltomb);
}




// create a new babel tombs
const createBabeltombs = async (req, res) => {
        // def data
        const access_key = req.body.access_key;
        const buk = req.body.buk;
        const s3_uri = req.body.s3_uri;
        const arn = req.body.arn;
        const obj_uri = req.body.obj_uri;
        const book_title = req.body.book_title;
        const book_data = req.body.book_data;
        const book_are = req.body.book_are;
        const current_lib = req.body.current_lib;
        
        // add data to db
        try {
            const babeltomb = await BabelTombs.create({
                access_key,
                buk,
                s3_uri,
                arn,
                obj_uri,
                book_title,
                book_data,
                book_are,
                current_lib
            })
            res.status(200).json(babeltomb)
        } catch (err) {
            res.status(400).json({err: err.message})
        }
}



module.exports = {
    createBabeltombs,
    getBabeltombs,
    getBabeltombByname,
    getBabeltombMicrofilm,
    getBabeltombTranscript,
    getBabeltombTranslate
}