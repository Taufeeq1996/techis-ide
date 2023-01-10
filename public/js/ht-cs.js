 document.getElementById('html-editor').addEventListener('keyup', function(e){
    document.getElementById('output').innerHTML = this.value;
});
document.getElementById('css-editor').addEventListener('keyup', function(e){
    document.getElementById('styling').innerHTML = this.value;
});



