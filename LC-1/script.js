const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "lc-proj-72bda.firebaseapp.com",
  databaseURL: "https://lc-proj-72bda-default-rtdb.firebaseio.com",
  projectId: "lc-proj-72bda",
  storageBucket: "lc-proj-72bda.appspot.com",
  messagingSenderId: "885384645107",
  appId: "1:885384645107:web:cfb52c831456b205f66a86"
};

firebase.initializeApp(firebaseConfig)

var getData = firebase.database().ref("Air")
var getData10 = firebase.database().ref("Air").limitToLast(10)// assigns variables for getting data from database


function getAir(){
getData.on('child_added', (data)=>{
  document.getElementById("air").innerHTML = data.val().data;//function for retreiving Firebase data

  if(data.val().data > 400){
      document.getElementById('dataBox').style.backgroundColor = 'red'
      document.getElementById('dataBox').style.borderColor = 'red'
  }
    else{
        document.getElementById('dataBox').style.backgroundColor = 'green'
        document.getElementById('dataBox').style.borderColor = 'green'//Changes the colour of the data box based on data 
        
        
    }
 })
getData10.on('child_added', (data)=>{
  document.getElementById("datatable").innerHTML += '<tr><td>'+data.val().data+'</td><td>'+data.val().time+'</td></tr>';//function for retreiving Firebase data
})
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }//function for landing page slideshow
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
    function changeStyle(){
        var element = document.getElementById("myDiv");
        element.style.fontSize += "30px";
    }

    function changeStyleDe(){
        var element = document.getElementById("myDiv");
        element.style.fontSize = "10px";
    }




function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}//funbction for translating via google translate
