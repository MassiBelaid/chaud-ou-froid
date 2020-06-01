var jeux = "notFinish";
var nbCoups = 0;

var img = document.createElement("img");
img.src = "../images/chaton.png";
img.id = "imageATrouver";
img.style.position = "absolute";
img.style.height = "100px";
img.style.width = "100px";
var posx = Math.floor(Math.random() * 1400); 
var posy = Math.floor(Math.random() * 625); 
img.style.left = posx+'px';
img.style.top = posy+'px';
img.style.opacity = "0.0";
var src = document.body;
src.appendChild(img);



function getPositionAtCenter(element) {
   const {top, left, width, height} = element.getBoundingClientRect();
   return {
     x: left + width / 2,
     y: top + height / 2
   };
 }


function updateWithMsg(distance){
	if(jeux === "notFinish"){
		nbCoups++;
		//document.getElementById("info").textContent = msg;
		var textElet = document.getElementById("info");
		if(distance == 0){
			jeux = "finish";
			textElet.textContent = "TROUVE FELECITATION ! "+nbCoups+" clicks.";
			textElet.className = "informationTrouve";
			var imgTrouve = document.getElementById("imageATrouver");
			imgTrouve.style.opacity = "1.0";
			createRejouer();
		   }
		else if(distance < 175){
			textElet.textContent = "Chaud";
			textElet.className = "informationChaud";
		}else if (distance < 300){
				  textElet.textContent = "tiède";
			textElet.className = "informationMoyen";
				  }else{
					  textElet.textContent = "froid";
					  textElet.className = "informationFroid";
				  }
			}
	
}

function getDistanceBetweenImageAndClick(imgElem, x, y) {
  const aPosition = getPositionAtCenter(imgElem);
  //const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - x, aPosition.y - y);  
}


function infosSouris(e) {
	var imageATrouver = document.getElementById("imageATrouver");
	//positionImage = getPositionAtCenter(imageATrouver);
	var informationText = "Evènement souris : " + e.type + ", X : " + e.clientX + ", Y : " + e.clientY;
	var dist = getDistanceBetweenImageAndClick(imageATrouver,e.clientX,e.clientY);
	console.log(dist);
	updateWithMsg(dist);
    
}

document.addEventListener("click", infosSouris);


//var imageATrouver = document.getElementById("imageATrouver");

document.getElementById("imageATrouver").addEventListener("click", function (e) {
    updateWithMsg(0);
	console.log("fffff");
    e.stopPropagation();
});

function createRejouer(){
	var replayElt = document.createElement("a");
	replayElt.textContent = "Rejouer !";
	replayElt.href = "index.html";
	replayElt.className = "replay";
	document.body.insertBefore(replayElt,document.getElementById("ecran"));
}


