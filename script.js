function operator(value) {
		document.getElementById('display').value+=value;
	}
function hasil(){
	try{
		document.getElementById('display').value = eval(document.getElementById('display').value);
}catch{
	document.getElementById('display').value ="eror";
}
}
function hapussemua(){
	document.getElementById('display').value="";
}

function hapus(){
	let display=document.getElementById('display');
	display.value=display.value.slice(0,-1);
}
