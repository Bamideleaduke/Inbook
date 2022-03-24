var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
// Upload image section

// var loadFile = function(event) {
//     var image = document.getElementById('output');
//     image.src = URL.createObjectURL(event.target.files[0]);
// };
