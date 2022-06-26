/** -------------------------
 * Multer Configuration 
 * --------------------------
 */
const multer      = require('multer');

const MyStorage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function(req, file, callback){
    callback(null, Date.now() + '-' + req.body.name + '.jpg');
  }
});

const uploadImage = multer({ storage: MyStorage});

module.exports = uploadImage;