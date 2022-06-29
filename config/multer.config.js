/** -------------------------
 * Multer Configuration 
 * --------------------------
 */
const multer      = require('multer');
const date        = require('../services/DateForImageName');
const cleanImage  = require('../services/CleanImageName');

const MyStorage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function(req, file, callback){
    callback(null, date + '---' + cleanImage(req.body.name) + '.jpg');
  }
});

const uploadImage = multer({ storage: MyStorage});

module.exports = uploadImage;