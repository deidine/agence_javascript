const text = document.getElementById("text_speed");
const speedEl = document.getElementById("speed");
const prog = "استمتع بالسفر معنا فى جمع ولايات الداخل";
let idx = 1;
let speed = 200 ;

// initial call
writeText();

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }
	
	setTimeout(writeText, speed);
}

// speedEl.addEventListener('input', (e) => {
// 	speed = 300 / e.target.value;
// });


const { body } = document;

// let zoomActivated = false;

// window.addEventListener('keydown', (e) => {
// 	if(e.key === 'z') {
// 		zoomActivated = !zoomActivated;
// 	}
// });

// window.addEventListener('click', () => {
//     zoomActivated = !zoomActivated;
// });

// window.addEventListener('mousemove', (e) => {
// 	const { clientX: x, clientY: y } = e;
	
// 	if(zoomActivated) {
// 		body.style.transform = 'scale(2)';
// 		body.style.transformOrigin = `${x}px ${y}px`;
// 	} 
//     else {
// 		body.style.transform = 'none';
// 	}
// });