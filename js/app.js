var formGroup = document.getElementsByClassName('form-group');
console.log(formGroup[0]);
var urlInput = document.getElementById('urlInput');
console.log(urlInput);

urlInput.addEventListener("input", function () {
  console.log(urlInput.value);
  if (urlInput.value.indexOf("www.cnn.com") !== -1) {
    formGroup[0].style.webkitBoxShadow = "0px 0px 20px 2px #BDEDC9";
  } else if (urlInput.value){
    formGroup[0].style.webkitBoxShadow = "0px 0px 20px 2px #EF8689";
  } else (
    formGroup[0].style.webkitBoxShadow = "0px 0px 20px 2px #FFFFFF"
  )
}, false);
