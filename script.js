var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  apiLogin(image.src);
};

const apiLogin = (e) => {
  const fetchLogin = async() => {
    const rawResponse = await fetch('https://hackathonreceipts.cognitiveservices.azure.com/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
    console.log(content);
  } 
  fetchLogin();
}



