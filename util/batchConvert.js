var easyimg = require('easyimage');


const WIDTH= 800;

function padDigits(number, digits) {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

function batchProcess(){
  var imageName;
  for(var i=0; i<55; i++){
     imageName = padDigits(i,2)+".jpg";
     convert(imageName);
  }

}

function convert(image){
  easyimg.info('./source/'+ image, function(err, result, stderr) {
    if (err) {console.log('image', image);throw err;}
    var ratio = result.width / WIDTH;
    console.log('ratio:',ratio);
    var height = result.height / ratio;

    resize(image, height);
  });
}

function resize(image, height){
	easyimg.resize({src:'./source/'+image, dst:'./target/'+image, width:WIDTH, height:height}, function(err, stdout, stderr) {
    if (err) throw err;
    console.log('Resized to: ', WIDTH, height);
  });
}


batchProcess();