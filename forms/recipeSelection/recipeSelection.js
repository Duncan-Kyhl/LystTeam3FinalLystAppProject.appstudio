


btnAddRecipe.onclick = function() {
  ChangeForm(recipeConfirmation)
}


recipeSelection.onshow=function(){
drpSelection.clear()
query = "SELECT * FROM lyst ORDER BY lyst_name"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) {
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
  console.log(`The parsed JSON string is converted to a JS object (an array or arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  
  if (results.length == 0)
    lblSelection.value = "There are no LYSTs in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    drpSelection.addItem(message + results[i][1] + "\n")
    }
  } else 
      lblSelection.value = "Error Code:" + req.status
}


drpSelection.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpSelection.value = s
    let ingredients = drpSelection.value 
  
query = "SELECT * FROM ingredients i INNER JOIN `lyst` l ON i.ingredient_id = l.ingredient_id WHERE lyst_name = '" + ingredients + "'"
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
    lstgLYST.addItem(message + results[i][1] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}




/*
drpSelection.onclick=function(s){
    sltIngredients.value = s
    let ingredient = sltIngredients.value 
    console.log(s)
query = "SELECT `ingredient_name` FROM ingredients i INNER JOIN `lyst` l ON i.ingredient_id = l.ingredient_id WHERE ingredient_name = '" + s + "'"
   alert(query)
}
SELECT `ingredient_name` FROM ingredients i INNER JOIN `lyst` l ON i.ingredient_id = l.ingredient_id WHERE ingredient_name = '" + s + "'"
*/


btnReturnThy.onclick=function(){
  ChangeForm(afterLogin)
}
