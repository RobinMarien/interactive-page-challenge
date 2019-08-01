document.getElementById('prev_btn').onclick = function() {prevImage()};
document.getElementById('next_btn').onclick = function() {nextImage()};

var slider_content = document.getElementById('photo');

    var image = ['1','2', '3', '4'];

    var i = image.length;

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src=./img/"+image[i-1]+".jpg>";
    }

    function prevImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src=./img/"+image[i-1]+".jpg>";

    }

  setInterval(nextImage , 3000);