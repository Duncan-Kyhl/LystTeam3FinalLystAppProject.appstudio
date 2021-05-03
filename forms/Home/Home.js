btnCreateAcc.onclick=function(){
    let name = inptUsername.value
    let password = inptPassword.value
    let email = inptEmail.value
    let query = "INSERT INTO user_profile (`name`,`password`, `email`) VALUES ('" + name + "', '" + password + "', '" + email + "')"
    // look at how the query is rendered
    //alert(query)
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + "kes97391" + "&pass=" + "Odie6343!" + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            ChangeForm(signIn)
        else
            lblError.textContent = "There was a problem with creating your account."
    } else // transit error
        lblError.textContent = "Error: " + req.status
}

btnSignIn.onclick=function(){
  ChangeForm(signIn)
}


