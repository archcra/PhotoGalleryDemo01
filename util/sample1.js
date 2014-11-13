var easyimg = require('easyimage');



/*
easyimg.resize({src:'beach.jpg', dst:'beach-small.jpg', width:640, height:480}, function(err, stdout, stderr) {
    if (err) throw err;
    console.log('Resized to 640x480');
});
*/

//var image = '../intermission/images/set1/00.jpg';
var image = '00.jpg'

easyimg.info(image, function(err, result, stderr) {
  if (err) throw err;
  console.log(result);
});