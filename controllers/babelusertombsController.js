const BabelUserTombModel = require('../models/usertombModel');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const { v4: uuidv4 } = require('uuid');
const { findOneAndUpdate } = require('../models/usertombModel');



// get all user tombs list
const getusertombs = async (req, res) => {
    console.log('fired')
    console.log(req.params, 'searching for tombs')
    const { id } = req.params 
    const query = {
        username: id
    }
    console.log(id)

    const babeltomb = await BabelUserTombModel.find(query)
    if (!babeltomb) {
        return res.status(404).json({err: 'no such tombP'})
    }
    console.log(babeltomb, 'returned tombs')
    res.status(200).json(babeltomb);
};

// update a tombs info
const postusertombinfo = async (req, res) => {
  console.log('user tomb info post fired')

  const appendInfo = {
    book_title: req.body.book_title,
    tombSubName: req.body.tombSubName,
    language: req.body.language,
    date: req.body.date,
    patron: req.body.patron,
    location: req.body.location,
    digitization: req.body.digitization,
    current_lib: req.body.current_lib,
    tombID: req.body.tombID
  };

  const query = {
    tombID: req.body.tombID
  };

  const response = await BabelUserTombModel.findOneAndUpdate(query, appendInfo);

  console.log(response, 'response from postusertombinfo');

  res.status(200);

}

// adds curTombArray to s3_userTombs and mongoDB.userTombs
const postusertomb = async (req, res) => {
  console.log('post usertomb fired', req.files.length );
  // setup s3 connection
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
      });
  // establish basic info
  console.log(req.files.length)
    const userInfo = req.files.length <= 1  ? req.body.userInfo : req.body.userInfo[0];
    const usernameObj = JSON.parse(userInfo);
    const bucketName = 'thisthatbukfornola';
    const user = usernameObj.username
    const tombID = `${uuidv4()}${user}`;

    // uploadFiles to s3 buk
    const uploadedFiles = await Promise.all( 
      req.files.map(async (file) => { 
        const fn = file.originalname
        const uuid = uuidv4();
        const fileName = `${uuid}+${fn}`;
        const s3file = `${uuid}%2B${fn}`;
        const s3FileName = s3file.replace(/ /g, '+');
        await s3
          .upload({
            Bucket: bucketName,
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read'
          })
          .promise();
        return {
          fileName,
          originalName: file.originalname,
          contentType: file.mimetype,
          Location: `https://thisthatbukfornola.s3.amazonaws.com/${s3FileName}`,
          size: file.size,
          tombID
        };
      })
    );
    // update userinfo in mongoDB
    if (uploadedFiles) {
      /*uploadedFiles.map((file) => {
        console.log(file.fileName, 'filename')
        const res = {

        }
      })*/
      const res = {
        tombID: tombID,
        file: [uploadedFiles],
        s3buk: bucketName,
        username: user
      }
      await BabelUserTombModel.create(res);
    }
    const appendInfo = {
      book_title: 'NaN',
      tombSubName: 'NaN',
      language: 'NaN',
      date: 'NaN',
      patron: 'NaN',
      location: 'NaN',
      digitization: 'NaN',
      current_lib: 'NaN',
    };
  
    const query = {
      tombID: tombID
    };
  
    const response = await BabelUserTombModel.findOneAndUpdate(query, appendInfo);
    res.status(200).json( uploadedFiles );

    // mk mongoDB storage with tomb name and info and an array of the image urls
    // return curTombArray tombID and list of curTombs to frontend
    // in frontend: setCurTombArray([curTombArray, tombID])

};
module.exports = { getusertombs, postusertomb, postusertombinfo };