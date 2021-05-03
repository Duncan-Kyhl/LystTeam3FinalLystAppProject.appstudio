
btnFindLysts.onclick=function(){
  ChangeForm(recipeSelection)
}

btnStoresNearMe.onclick=function(){
  ChangeForm(tempMap)
}

btnAddLysts.onclick=function(){
  ChangeForm(recipeConfirmation)
}

drpStore.onclick=function(){
  drpStore.clear()
  drpStore.addItem("target")
  drpStore.addItem("walmart")
  drpStore.addItem("wohlners")
  if (drpStore.selection == "target") {
    ChangeForm(target)
  }
  if (drpStore.selection == "walmart") {
    ChangeForm(walmart)
  }
  if (drpStore.selection == "wohlners") {
    ChangeForm(wohlners)
  }
}
