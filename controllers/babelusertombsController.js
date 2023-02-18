const BabelUserTombModel = require('../models/usertombModel');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const { v4: uuidv4 } = require('uuid');



// get all user tombs list
//router.route('/usertombslist')
  //  .get( babelusertombsController.getusertombs );
const getusertombs = async (req, res) => {
    console.log(req)
};
// i can delet this prac
const postuserbucker = async (req, res) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
    });

  const bucketName = 'sdlakfjksalnfksaldjfklsajflsdf-my-new-bucket';
  console.log(bucketName, 'buk name')

  const params = {
    Bucket: bucketName,
    ACL: 'public-read' // set permissions for the bucket
  };

  s3.createBucket(params, (err, data) => {
    if (err) {
      console.log('Error creating bucket:', err);
    } else {
      console.log('Bucket created successfully!', data);
    }
  });
  }

// adds curTombArray to s3_userTombs and mongoDB.userTombs
const postusertomb = async (req, res) => {
  // setup s3 connection
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
      });
  // establish basic info
    const userInfo = req.body.userInfo[0];
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
        s3_buk: bucketName,
        username: user
      }
      await BabelUserTombModel.create(res);
    }
    res.status(200).json( uploadedFiles );

    // mk mongoDB storage with tomb name and info and an array of the image urls
    // return curTombArray tombID and list of curTombs to frontend
    // in frontend: setCurTombArray([curTombArray, tombID])

};
module.exports = { getusertombs, postusertomb, postuserbucker };