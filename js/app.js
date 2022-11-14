//declearing html elements
const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#photo-file');
const btnPhotoUpload = document.querySelector('#btn-photo-upload');

//uploading photo
file.addEventListener('change', function() {
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader(); // FileReader is a predefined function of JS

        reader.addEventListener('load', function() {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

        //recovers image sizes to initial
        if (img && img.style) {
            img.style.height = '200px';
            img.style.width = '200px';
        }
    }
});



