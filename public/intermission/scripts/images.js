function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
//Test
//console.log(padDigits(1,2));

function initImageObjects() {
    var imageObjects = [];
    for (i = 0; i < 54; i++) {
        var f = "photo/set0/" + padDigits(i, 2) + ".jpg";
        imageObjects.push({
            "id": i,
            "file": f
        });
    }

    return imageObjects;
}

function initImages() {
    var imageObjects = initImageObjects();
    var imagesElement = document.getElementById('photos');
    console.log('html0', imagesElement.innerHTML);

    imagesElement.innerHTML = '';
    console.log('html', imagesElement.innerHTML);
    var newImage;
    for (i = 0; i < imageObjects.length; i++) {
        newImage = document.createElement('img');
        newImage.setAttribute('id', imageObjects[i].id);
        newImage.setAttribute('alt', imageObjects[i].id);
        newImage.setAttribute('src', imageObjects[i].file);
        newImage.setAttribute('style', 'display:none');
        imagesElement.appendChild(newImage);
    }
}
