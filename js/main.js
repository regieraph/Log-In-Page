//LOG IN to get information confirming you're correct or not
//Variables for log in

var loginInfo = [
  {
    username: "regie",
    password: "anime",
    birthday: 4/6/1990
  },
  {
    username: "greg",
    password: "piano",
    birthday: "6/2/1990
  },
  {
    username: "rico",
    password: "dance",
    birthday: "9/6/1990"
  },
  {
    username: "kai",
    password: "beque"
   },
  {
    username: "Robert",
    password: "Leon"
]

//Function to check to see if username and password is correct

function getInfo(){
//make variables to store username and value to compare to using .value
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var birthDate = document.getElementById("birthDate").value
  
//Create for loop to check to see if values match
for(i = 0; i < loginInfo.length; i++){
  //if username is equals to loginInfo.username AND password is equals to loginInfo.password, write to console
    if(username == loginInfo[i].username && password == loginInfo[i].password && birthDate== loginInfo[i].birthday){
    console.log("Welcome, " + username + " your password is " + password)
    return
    }
  } 
  document.write("INCORRECT USERNAME OR PASSWORD")
  return
}
    
