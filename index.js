function scuberGreetingForFeet(x){
if (x >= 2500){
  return "No can do."
}

else if (x >= 2000){
  return "I will gladly take your thirty bucks."
}
else if (x >= 400){
  return "That will be twenty bucks."
}
else if (x < 400){
  return "This one is on me!"
}
}





function ternaryCheckCity(city){
 return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(justTheTip){
  switch (justTheTip){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    case "thanks for everything" :
      return "Bye."
    default :
    return "Ma'm, get out of my car...."
  }
}