const server = 'http://localhost:3000';
const f = document.getElementById("form");
f.addEventListener("submit", submitData);

function submitData(e){
	e.preventDefault();
	const name 	= document.getElementById("name");
	const files = document.getElementById("files");	
	const formData = new FormData();
	formData.append("name", name.value);
	for (let i=0; i < files.files.length; i++){
		formData.append("files", files.files[i]);
	}

	fetch(`${server}/upload`, {
		method: 'POST',
		body: formData
	})
	.then((res) => console.log(res))
	.catch((err) => ("Something error", err));
}
