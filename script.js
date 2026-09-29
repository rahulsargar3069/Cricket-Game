
        let score = {
            win : 0,
            loss : 0,
            tie : 0,
        }
       //this will generete random number betn 0 to 3
      function playGame(userChoice) { 

        let randomNum = Math.random()*3;
        let computerChoice;
        if(randomNum > 0 && randomNum <= 1){
             computerChoice = 'Bat';
        }else if(randomNum > 1 && randomNum <= 2){
             computerChoice = 'Ball';
        }else{
             computerChoice = 'Stump';
        }

        let result;
        if(computerChoice === userChoice){
            score.tie++;
            result = 'Match Tie.';
        }else if(
            (userChoice === 'Bat' && computerChoice === 'Ball') ||
            (userChoice === 'Ball' && computerChoice === 'Stump') ||
            (userChoice === 'Stump' && computerChoice === 'Bat')
        ){
            score.win++;
            result = 'Match Won By - User.';
        }else{
            score.loss++;
            result = 'Match Won By - Computer.';
        }

        alert(`
             User Choice : ${userChoice} ; Computer Choice : ${computerChoice} 
             ${result}
             Score > Win : ${score.win} , Loss : ${score.loss} , Tie : ${score.tie}`)
        }