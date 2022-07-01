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
	.then(response => response.json())
	.then(result => {
		// console.log(res);
		// console.log(res.data.length); // more than 0 == exist image
		if (result.data.length > 0) {
			console.log('Upload image success');
		}
	})
	.catch((err) => ("Something error", err));
}
