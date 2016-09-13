var wrapper = document.getElementById("signature-pad"),
    clearButton = wrapper.querySelector("[data-action=clear]"),
    saveButton = wrapper.querySelector("[data-action=save]"),
    canvas = wrapper.querySelector("canvas"),
    pen_light=wrapper.querySelector("[data-action=light]"),
    pen_normal=wrapper.querySelector("[data-action=normal]"),
    pen_bold=wrapper.querySelector("[data-action=bold]"),
    pen_black=wrapper.querySelector("[data-action=black]"),
    pen_blue=wrapper.querySelector("[data-action=blue]"),
    pen_pink=wrapper.querySelector("[data-action=pink]"),
    signaturePad;

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();
signaturePad = new SignaturePad(canvas);

clearButton.addEventListener("click", function (event) {
    signaturePad.clear();
});

saveButton.addEventListener("click", function (event) {
	if(signaturePad.isEmpty()){
		alert('please sign your name!');
	}
	else{
 var data=signaturePad.toDataURL();
	var base64=data.split(',')[1];
	alert(base64);
	}
});
function Initializewidth(){
	pen_light.className='pen-light';
	pen_normal.className='pen-normal';
	pen_bold.className='pen-bold';
}
function Initializecolor(){
	pen_black.className='pen-black';
	pen_blue.className='pen-blue';
	pen_pink.className='pen-pink';
}
pen_light.addEventListener("click",function(){
	Initializewidth();
	pen_light.minWidth=0.5*0.7;
	pen_light.maxWidth=2.5*0.7;
	pen_light.className="pen-light-select";
});
pen_normal.addEventListener("click",function(){
	Initializewidth();
	pen_normal.minWidth=0.5;
	pen_normal.maxWidth=2.5;
	pen_normal.className="pen-normal-select";
});
pen_bold.addEventListener("click",function(){
	Initializewidth();
	pen_bold.minWidth=0.5/0.7;
	pen_bold.maxWidth=2.5/0.7;
	pen_bold.className='pen-bold-select';
});
pen_black.addEventListener("click",function(){
	Initializecolor();
	signaturePad.penColor='black';
	pen_black.className='pen-black-select';
});
pen_blue.addEventListener("click",function(){
	Initializecolor();
	signaturePad.penColor='blue';
	pen_blue.className='pen-blue-select';
});
pen_pink.addEventListener("click",function(){
	Initializecolor();
	signaturePad.penColor='pink';
	pen_pink.className='pen-pink-select';
});
