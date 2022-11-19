//declearing html elements
const img = document.querySelector('#photo');
const file = document.querySelector('#photo-file');

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



