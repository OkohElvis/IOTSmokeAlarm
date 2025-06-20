function submitDetails(){

   var name =  document.getElementById('name');
   var age =   document.getElementById('age');
   var email = document.getElementById('email'); //These assign the variable by taking the data the user inputs in the form


    if(age.value < 18){
        alert("Must be over 18 to purchase")
    };//If the users age is less thean 18 they will be given this alert

    if(!email.value.includes('@') || email.value.length < 4){
       alert("email Incorrect");//If the user email does not inclute the '@' symbol then they will be alerted
    };
    document.getElementById('entered').innerHTML = 'Thanks '+ name.value;

}//This fuction is used for the validation


var count = 0;
var password = ''

function checkDetails(){
    do{
        password = prompt("Enter Password")
        count += 1
        if(count == 3){
           document.getElementById("page3").innerHTML = "<a href='index.html'>Go Home</a><h1>Acess Denied</h1>"
        } //If the user inputs the incorrect password 3 times they will be denied acces to the page
        }
    while(password != 'password'  && count < 3){
document.getElementById("page3").style.display = "block"
    }//This function gives the user 3 attempts to input the correct password
}
