btnLogin.onclick=function(){
    let name = inptUsernameLogin.value
    let password = inptPasswordInpt.value
    let query = "SELECT * FROM user_profile WHERE `name` = '" + name + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + "kes97391" + "&pass=" + "Odie6343!" + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblErrorMsg.textContent = "There are no pets in the database."
        else {        
           ChangeForm(afterLogin)
         } // end else
    }
}


signIn.onshow=function(){
  
}
