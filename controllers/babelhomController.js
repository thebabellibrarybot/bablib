const BabelHomeModel = require('../models/BabelHomeImg')

// get all babelTombs
const getBabelHomeimgs = async (req, res) => {

    const pos1 = {position: "1"}
    const pos2 = {position: "2"}
    const pos3 = {position: "3"}
    const pos4 = {position: "4"}
    const pos5 = {position: "5"}
    const pos6 = {position: "6"}

    const babeltombs1 = await BabelHomeModel.find(pos1)
    const found1 = babeltombs1[Math.floor(Math.random() * (babeltombs1.length - 0)) + 0]
    
    const babeltombs2 = await BabelHomeModel.find(pos2)
    const found2 = babeltombs2[Math.floor(Math.random() * (babeltombs2.length - 0)) + 0]
   
    const babeltombs3 = await BabelHomeModel.find(pos3)
    const found3 = babeltombs3[Math.floor(Math.random() * (babeltombs3.length - 0)) + 0]
   
    const babeltombs4 = await BabelHomeModel.find(pos4)
    const found4 = babeltombs4[Math.floor(Math.random() * (babeltombs4.length - 0)) + 0]
   
    const babeltombs5 = await BabelHomeModel.find(pos5)
    const found5 = babeltombs5[Math.floor(Math.random() * (babeltombs5.length - 0)) + 0]
   
    const babeltombs6 = await BabelHomeModel.find(pos6)
    const found6 = babeltombs6[Math.floor(Math.random() * (babeltombs6.length - 0)) + 0]
   
    const pulled = [found1, found2, found3, found4, found5, found6]

    console.log('get home controler')
    res.status(200).json(pulled);


}
 

module.exports = {
    getBabelHomeimgs
}

