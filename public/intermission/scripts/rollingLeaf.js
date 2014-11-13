
var rotacion = {x:0, y:Math.PI/10, z:0};
function dibujar(img,w,h){
	var c;
	var puntos=[];
		/*
		2-------0
		|		|
		1-------3
		*/
		
		puntos[0]={x:w/2, y:-h/2, z:h/2};
		puntos[1]={x:-w/2, y:h/2, z:h/2};
		puntos[2]={x:-w/2, y:-h/2, z:h/2}
		puntos[3]={x:w/2, y:h/2, z:h/2};
		
		var puntos2d = a2D(puntos, rotacion);
		
	if(document.createElement("canvas").getContext){
		if(img.nodeName.toLowerCase()!='canvas'){
			c=document.createElement("canvas");
			c.img=img;
		}else{
			c=img;
			img=img.img;
		}
		c.id=img.id;
		ctx=c.getContext('2d');
		ctx.save();
		c.width=w*2;
		c.height=h*2;
		c.style.marginLeft=-c.width/4+'px';
		c.style.marginTop=-c.height/4+'px';
		c.style.width=c.width+'px';
		c.style.height=c.height+'px';
		
		var tx = puntos2d[2].x;
		var ty = puntos2d[2].y;
		var a = (puntos2d[0].x - puntos2d[2].x)/w;
		var b = (puntos2d[0].y - puntos2d[2].y)/w;
		var cc = ( puntos2d[1].x - puntos2d[2].x)/h;
		var d = ( puntos2d[1].y - puntos2d[2].y)/h;
		ctx.translate(c.width/2,c.height/2);
		ctx.transform(a,b,cc,d,tx,ty);
		ctx.drawImage(img,0,0);
		ctx.restore();
		if(img.getAttribute('i')!=0){
			img.parentNode.replaceChild(c,img);
			img.setAttribute('i',0);
		}
		setTimeout(function(){rotacion.y+=.01;rotacion.x+=.01;dibujar(c,w,h)},20);
	}else{
        img.style.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand') alpha(opacity=100) ";
		img.filters.item(0).Dx =  puntos2d[2].x;
		img.filters.item(0).Dy =  puntos2d[2].y;
		img.filters.item(0).M11 = (puntos2d[0].x - puntos2d[2].x)/w;
		img.filters.item(0).M21 = (puntos2d[0].y - puntos2d[2].y)/w;
		img.filters.item(0).M12 = ( puntos2d[1].x - puntos2d[2].x)/h;
		img.filters.item(0).M22 = ( puntos2d[1].y - puntos2d[2].y)/h;
		img.filters.item(1).opacity = Math.round(100);
		setTimeout(function(){rotacion.y+=.01;rotacion.x+=.01;dibujar(img,w,h)},20);
	}
	
	
}
function a2D(puntos, rotacion){
	var npuntos = new Array();
	var sx = Math.sin(rotacion.x);
	var cx = Math.cos(rotacion.x);
	var sy = Math.sin(rotacion.y);
	var cy = Math.cos(rotacion.y);
	var sz = Math.sin(rotacion.z);
	var cz = Math.cos(rotacion.z);
	var x,y,z, xy,xz, yx,yz, zx,zy;

	var i = puntos.length;
	while (i--){
		x = puntos[i].x;
		y = puntos[i].y;
		z = puntos[i].z;
		// rotación en x
		xy = cx*y - sx*z;
		xz = sx*y + cx*z;
		// rotación en y
		yz = cy*xz - sy*x;
		yx = sy*xz + cy*x;
		// rotación en z
		zx = cz*yx - sz*xy;
		zy = sz*yx + cz*xy;
		npuntos[i] = {x:zx, y:zy};
	}
	return npuntos;
}
/* Do not use this effect this time 
onload=function(){
	var img=document.getElementById('im');
	img.setAttribute('i',1);
	dibujar(img,img.offsetWidth,img.offsetHeight);
	*/
}
