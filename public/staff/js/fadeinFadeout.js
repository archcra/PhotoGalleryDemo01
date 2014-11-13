

function fadeinOut(){
	$(window).load(function(){
		$('img.bgfade').hide();
		var dg_H = $(window).height();
		var dg_W = $(window).width();
		$('#wrap').css({'height':dg_H,'width':dg_W});
		function anim() {
			$("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(3000);
			$("#wrap img").first().fadeIn(3000);
			setTimeout(anim, 6000);
		}
		anim();})
	$(window).resize(function(){window.location.href=window.location.href})
}


function padDigits(number, digits) {
	return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
//Test
//console.log(padDigits(1,2));

function initImageObjects(){
	var imageObjects = [];
	for (i=0;i<54;i++){
		var randomIndex = Math.floor(Math.random() * 54 );
		var f= "../open/images/set0/" + padDigits(randomIndex,2) + ".jpg";
		imageObjects.push({"id":i, "file":f});
	}

	return imageObjects;
}

function initImages(){
	var imageObjects = initImageObjects();
	var imagesElement = document.getElementById('wrap');
	var newImage;
	for (i=0;i<imageObjects.length;i++){
		newImage = document.createElement('img');
		newImage.setAttribute('id', imageObjects[i].id); 
	 	newImage.setAttribute('src', imageObjects[i].file);//'./images/common/phoneHLeft.png'); 
newImage.setAttribute('class', 'bgfade'); 
imagesElement.appendChild(newImage);
}
}

