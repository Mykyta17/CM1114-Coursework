//Created the script which logges you in if you are logged out and loggs you out if you are logged in
var counter = 2;
function login(){
    if(counter % 2 == 0){
        alert("You have been logged in!");
    }
    else {
        alert("You have been logged out!");
    }
    counter += 1;
}
