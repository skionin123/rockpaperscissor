
document.querySelector('.container').style.display = "flex";
    let lost = 0;
    let won = 0;

    let add = 1;
    document.querySelector('#rock').addEventListener('click', choseRock);
document.querySelector('#paper').addEventListener('click', chosePaper);
document.querySelector('#scissor').addEventListener('click', choseScissor);
    
    function choseRock(){
    let rock = 0;
    let enemy = Math.floor(Math.random() * 3);
    1;
    
    if( rock < enemy && enemy === 2){
        alert("You Won");  
     
        won += add
         
        document.querySelector("#status").innerHTML = "Win";
     
        document.querySelector("#won").innerHTML = won;
       
    
    }
    else if(rock < enemy && enemy === 1){
        alert("You Lost");
        lost += add
        document.querySelector("#status").innerHTML = "Lost";
        document.querySelector("#lost").innerHTML = lost;
    }
    else if(rock === enemy){
        alert("It's Draw");
        document.querySelector("#status").innerHTML = "Draw";
    }
    }
    
    function chosePaper(){
        let paper = 1;
        let enemy = Math.floor(Math.random() * 2);
    
        if( paper > enemy && enemy === 0){
            alert("You Won");
            won += add
            document.querySelector("#status").innerHTML = "Win";
            document.querySelector("#won").innerHTML = won;
        }
        else if(paper < enemy && enemy === 2){
            
            alert("You Lost");
            lost += add
            document.querySelector("#status").innerHTML = "Lost";
            document.querySelector("#lost").innerHTML = lost;
        }
        else if(paper === enemy){
            alert("It's a Draw");
            document.querySelector("#status").innerHTML = "Draw";
        }
        };
        
        function choseScissor(){
            let scissor = 2;
            let enemy = Math.floor(Math.random() * 2);
        
            if( scissor > enemy && enemy === 1){
                alert("You Win");
                won += add
                document.querySelector("#status").innerHTML = "Win";
                document.querySelector("#won").innerHTML = won;
            }
            else if(scissor > enemy && enemy === 0){
                alert("You Lost");
                lost += add
                document.querySelector("#status").innerHTML = "Lost";
                document.querySelector("#lost").innerHTML = lost;
            }
            else if(scissor === enemy){
                alert("It's a draw");
                document.querySelector("#status").innerHTML = "Draw";
            }
            
    
        }
