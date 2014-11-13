

function padDigits(number, digits) {
	return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
//Test
//console.log(padDigits(1,2));

function initImageObjects(){
	var imageObjects = [];
	for (i=0;i<54;i++){
		var f= "images/set0/" + padDigits(i,2) + ".jpg";
		imageObjects.push({"id":i, "file":f});
	}

	return imageObjects;
}

function initImages(){
	var imageObjects = initImageObjects();
	var imagesElement = document.getElementById('photos');
		console.log('html0',imagesElement.innerHTML);

	imagesElement.innerHTML = '';
	console.log('html',imagesElement.innerHTML);
	var newImage;
	for (i=0;i<imageObjects.length;i++){
		newImage = document.createElement('img');
		newImage.setAttribute('id', imageObjects[i].id); 
		newImage.setAttribute('alt', imageObjects[i].id); 
	 	newImage.setAttribute('src', imageObjects[i].file);//'./images/common/phoneHLeft.png'); 
newImage.setAttribute('style', 'display:none'); 
imagesElement.appendChild(newImage);
}
}

function changePhotos(){
	console.log("change photos")
  var imageObjects = [];
	for (i=0;i<54;i++){
		//var f= "images/set2/" + padDigits(i,2) + ".png";
		var f= "images/set2/" +  "0.jpeg";
		imageObjects.push({"id":i, "file":f});
	}


    var imagesElement = document.getElementById('photos');
    //remove the dom object.
   // imagesElement.parentNode.removeChild(frameid);
   //var list=document.getElementById("myList");
   // list.removeChild(list.childNodes[0]);
   /*
    var count = imagesElement.childNodes.length;

    for(i=count; i>0; i--){
       imagesElement.removeChild(imagesElement.childNodes[i-1]);

    }
  */
    //var newImage;
	for (i=0;i<imageObjects.length;i++){
		//newImage = document.createElement('img');
		//newImage.setAttribute('id', imageObjects[i].id); 
		//newImage.setAttribute('alt', imageObjects[i].id); 
	 	//newImage.setAttribute('src', imageObjects[i].file);//'./images/common/phoneHLeft.png'); 
     //newImage.setAttribute('style', 'display:none'); 
     imagesElement.childNodes[i]["src"] =  imageObjects[i].file;
    }

   console.log("change photos end.")

   return imageObjects;
}