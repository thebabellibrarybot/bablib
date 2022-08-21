const Babelblogls = require('../models/BabelBlogMod')




// get all babelblogs
const getBabelBlogls = async (req, res) => {
    const babelblogls = await Babelblogls.find({}) //.sort({date: -1})
    /* 
    change sort to:
------------------------------------------------
    Babelblogls.find({}).sort(a, b) {
        a.date - b.date
    }
-------------------------------------------------
    */
    console.log('get blog controler')
    res.status(200).json(babelblogls);
}

// get babelblog by id
const getBabelBlogById = async (req, res) => {
    const { id } = req.params 
    const babelblogbyID = await Babelblogls.findById(id)
    if (!babelblogbyID) {
        return res.status(404).json({err: 'no such blog ID'})
    }
    res.status(200).json(babelblogbyID);
    // should I add some sort of filtering or mayb like idk prep or j send tht json over
}

// post babelblog from yatch
/*
const postBabelBlogbyMain = async (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const author = req.body.author;
    const body = req.body.body;

    try {
        const postbabelblogbyMain = Babelblogls.create({
            title,
            date,
            author,
            body
        })
        res.status(200).json(postbabelblogbyMain)
        } catch (err) {
        res.status(400).json({err: err.message})
    }
}
*/

module.exports = { getBabelBlogls, getBabelBlogById }