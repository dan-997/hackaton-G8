const fileInput = document.querySelector('#imageupload');
const progressBar = document.querySelector('.progress'); 
const progressContainer = document.querySelector('.progress-bar');

fileInput.addEventListener('change', (e) => { const file = e.target.files[0]; const formData = new FormData(); formData.append('file', file);

progressContainer.classList.add('uploading');

fetch('/upload', { method: 'POST', body: formData }).then((response) => { progressContainer.classList.remove('uploading'); progressContainer.style.display = 'none'; fileInput.value = ''; }); });

function updateProgress(event) { if (event.lengthComputable) { const percent = (event.loaded / event.total) * 100; progressBar.style.width = percent + '%'; } }