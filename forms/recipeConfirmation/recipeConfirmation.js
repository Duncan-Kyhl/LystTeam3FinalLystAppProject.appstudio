drpSelection.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpSelection.value = s
    let ingredients = drpSelection.value 
  
query = "SELECT * FROM lyst_ingredients t INNER JOIN `lyst` l ON t.lyst_id = l.lyst_id INNER JOIN `ingredients` i ON i.ingredient_id = t.ingredient_id WHERE lyst_name = '" + ingredients + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) { 
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblTest.value = "There are no ingredients in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    rdoConfirmation.addItem(message + results[i][9] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}

drpTarget.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpTarget.value = s
    let ingredientsTarget = drpTarget.value 
  
query = "SELECT * FROM target_ingredients x INNER JOIN `lyst_target` y ON x.target_id = y.target_id INNER JOIN `lyst` l ON y.lyst_id = l.lyst_id INNER JOIN `target` t ON x.target_id = t.target_id INNER JOIN `ingredients` i ON x.ingredient_id = i.ingredient_id WHERE lyst_name = '" + ingredientsTarget + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) { 
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblTest.value = "There are no ingredients in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    rdoConfirmation.addItem(message + results[i][16] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}

drpWalmart.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpWalmart.value = s
    let ingredientsWalmart = drpWalmart.value 
  
query = "SELECT * FROM walmart_ingredients x INNER JOIN `lyst_walmart` y ON x.walmart_id = y.walmart_id INNER JOIN `lyst` l ON y.lyst_id = l.lyst_id INNER JOIN `walmart` t ON x.walmart_id = t.walmart_id INNER JOIN `ingredients` i ON x.ingredient_id = i.ingredient_id WHERE lyst_name =  '" + ingredientsWalmart + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) { 
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblTest.value = "There are no ingredients in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    rdoConfirmation.addItem(message + results[i][15] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}


drpWohlners.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpWohlners.value = s
    let ingredients = drpWohlners.value 
  
query = "SELECT * FROM wohlners_ingredients x INNER JOIN `lyst_wohlners` y ON x.wohlners_id = y.wohlners_id INNER JOIN `lyst` l ON y.lyst_id = l.lyst_id INNER JOIN `wohlners` t ON x.wohlners_id = t.wohlners_id INNER JOIN `ingredients` i ON x.ingredient_id = i.ingredient_id WHERE lyst_name = '" + ingredients + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) { 
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblTest.value = "There are no ingredients in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    rdoConfirmation.addItem(message + results[i][16] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}
 


btnAddIngredient.onclick=function(){
    let addLyst = inptAdditionLYST.value
    let addIngredient = inptAddition.value
    let query = "INSERT INTO lyst_ingredients (`lyst_id`,`ingredient_id`) VALUES ('" + addLyst + "', '" + addIngredient  + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.textContent = "You have successfully added the ingredient!"
        else
            lblMessage3.textContent = "There was a problem with adding the pet to the database."
    } else 
        lblMessage3.textContent = "Error: " + req.status
}

btnAddIngredient.onclick=function(){
  let addIngredient = inptAddition.value
  rdoConfirmation.addItem(addIngredient)
}

btnAdvice.onclick=function(){
  ChangeForm(api)
}

btnGoBackHome.onclick=function(){
  ChangeForm(afterLogin)
}

btnCheckout.onclick=function(){
  ChangeForm(calculator)
}

/*

btnAddIngredient.onclick=function(){
    let query = "INSERT INTO lyst_ingredients (`lyst_id`,`ingredient_id`) VALUES ('" + addLyst + "', '" + addIngredient  + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.textContent = "You have successfully added the ingredient!"
        else
            lblMessage3.textContent = "There was a problem with adding the pet to the database."
    } else 
        lblMessage3.textContent = "Error: " + req.status
}
*/

btnClearThat.onclick=function(){
  rdoConfirmation.clear()
}
