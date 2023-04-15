// USE JAVASCRIPT TO CREATE A GAME OF SNAKE, WATER, AND GUN. THE GAME SHOULD ASK YOU TO ENTER THE S, W, OR G(GUN). THE COMPUTER SHOULD ABLE TO GENERATE THE S, W, OR G AND DECLARE WIN OR LOSS USING. USE CONFIRM OR ALERT WHATEVER YOU REQUIRED 


console.log("........Water, Snake, & Gun Game.......\n \n");
console.log(" For Water (W), Snake(S), & Gun(G) & use Captilization of Word for this GAME\n \n \n ");
let user = prompt("Enter the S, W, OR G :");
let cpuI = Math.floor(Math.random()*3);
let cpu = ["S", "W", "G"][cpuI];



const match = (user, cpu) => {
  if(user === cpu){
    return "Game is Tied";
  }
  // CPU = GUN 
  else if(cpu == "G" && user == "W"){
    return "USER";
  }
  else if(cpu == "G" && user == "S"){
    return "CPU";
  }
 // CPU = Water 
  else if(cpu == "W" && user == "G"){
    return "CPU";
  }
  else if(cpu == "W" && user == "S"){
    return "USER";
  }
// CPU = SNAKE 
  else if(cpu == "S" && user == "W"){
    return "CPU";
  }
  else if(cpu == "S" && user == "G"){
    return "USER";
  }
  else{
    return "INVALID WORD, PLEASE USE THE CORRECT WORD...."
  }
}
let result = match(user, cpu);
console.log("\n USER = "+user+"\n CPU = "+cpu+"\nTHE WINNER OF THIS GAME IS, "+result)
