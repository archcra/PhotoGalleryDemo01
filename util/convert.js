var easyimg = require('easyimage');



/*
easyimg.resize({src:'beach.jpg', dst:'beach-small.jpg', width:640, height:480}, function(err, stdout, stderr) {
    if (err) throw err;
    console.log('Resized to 640x480');
});
*/

//var image = '../intermission/images/set1/00.jpg';
var image = '00.jpg'

const WIDTH= 800;

easyimg.info('./source/'+ image, function(err, result, stderr) {
  if (err) throw err;
  var ratio = result.width / WIDTH;
  console.log('ratio:',ratio);
      var height = result.height / ratio;

  resize(image, height);
});


function resize(image, height){
	easyimg.resize({src:'./source/'+image, dst:'./target/'+image, width:WIDTH, height:height}, function(err, stdout, stderr) {
    if (err) throw err;
    console.log('Resized to: ', WIDTH, height);
});
}