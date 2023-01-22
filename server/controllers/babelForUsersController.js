const BabelopsModel = require('../models/openModel');


// about stuff should change controller name

const getUserNav = async (req, res) => {
    const nav = await BabelopsModel.find({});
    res.status(200).json(nav)
}

const getBox = async (req, res)=>{
    const {title} = req.params
    const query = {
        title: title
    }
    const nav = await BabelopsModel.find(query);
    res.status(200).json(nav);
}

const getDeet = async (req, res)=>{
    const {title} = req.params
    const query = {
        bodyhead: title
    }
    const nav = await BabelopsModel.find(query);
    res.status(200).json(nav);
}

module.exports = { getUserNav, getBox, getDeet };
