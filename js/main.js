//LOG IN to get information confirming you're correct or not
//Variables for log in

var loginInfo = [
  {
    username: "regie",
    password: "anime"
  },
  {
    username: "greg",
    password: "piano"
  },
  {
    username: "rico",
    password: "dance"
  },
  {
    username: "kai",
    password: "beque"
   }
]

//Function to check to see if username and password is correct

function getInfo(){
//make variables to store username and value to compare to using .value
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  
//Create for loop to check to see if values match
for(i = 0; i < loginInfo.length; i++){
  //if username is equals to loginInfo.username AND password is equals to loginInfo.password, write to console
    if(username == loginInfo[i].username && password == loginInfo[i].password){
    console.log("Welcome, " + username + " your password is " + password)
    }
  } 
}
    
