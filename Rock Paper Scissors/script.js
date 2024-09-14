let choices=document.querySelectorAll(".choices")
let userscore=0
let compscore=0

choices.forEach((choice,idx)=>{
    choice.addEventListener("click",()=>{
        // console.log("Choice was clicked")
       const choiceId=choice.getAttribute("id")
       playgame(choiceId)
       

    })
})
const getcomputerchoice=()=>{
    let options=["rock","paper","scissors"]
    return options[Math.floor(Math.random()*3)]
    // console.log(computerChoice)
    // return computerChoice;
    
    
    
}

const playgame=(choiceId)=>{
    console.log(`You choose:- ${choiceId}`)
    document.querySelector(".userChoicePara").innerHTML=`You Choose:-${choiceId}`
    // setTimeout(() => {
        const compChoice=getcomputerchoice();
        document.querySelector(".compChoicePara").innerHTML=`Comp Choose:-${compChoice}`
        getwinner(choiceId,compChoice)
    // }, 300);

    

        


}
const getwinner=(choiceId,compChoice)=>{
    if((choiceId=="rock" && compChoice=="scissors") ||(choiceId=="paper" && compChoice=="rock") || (choiceId=="scissors" && compChoice=="paper") ) {
        userscore++
        
         document.querySelector(".userScorePara").innerHTML=`Your Score:-${userscore}`
         document.querySelector(".result").innerHTML=`You win`
    }
    else if(choiceId==compChoice){
        document.querySelector(".result").innerHTML=`Game Tied`
        
    }
    else{
        compscore++
        document.querySelector(".compScorePara").innerHTML=`Computer Score:-${compscore}`
        document.querySelector(".result").innerHTML=`Computer Win`

        

        


    }
gameend();

}

// playgame()


const gameend=()=>{
    if(userscore+compscore>="15"){
        if(userscore>compscore){
            alert("User Won This Round")
        }
        else{
            alert("Computer Won This Round")
        }
        
    }

}
