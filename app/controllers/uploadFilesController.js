let multer = require('multer');
let {storagePath,imageFilter} = require('../../helpers');
exports.uploadSingle =(req,res)=>{
    let upload = multer({ storage: storagePath, fileFilter: imageFilter }).single('profile_pic');
    upload(req, res, function(err) {
        if (req.fileValidationError) {
             res.send(req.fileValidationError);
        }
        else if (!req.file) {
            res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
             res.send(err);
        }
        else if (err) {
             res.send(err);
        }
        res.send('upload/'+req.file.filename);
    });
};