function main() {
  
    let gameStatus = document.getElementById("mainResult").innerHTML;
    if (gameStatus === "You Lost") {
        alert("Game Over. Please Restart the Game");
    } else {



        let x = Math.floor(Math.random() * 13) + 1; 

        let currentTT = parseInt(document.getElementById("result").innerHTML);
        let total = currentTT + x;
        document.getElementById('result').innerHTML = total;




        if (total < 21) {
            document.getElementById("mainResult").innerHTML = "Generate another card";
        } else if (total === 21) { 
            document.getElementById("mainResult").innerHTML = "You Won";
            alert("Congratulations!");
            document.getElementById("btn-res").style.display = "Block";
        } else if (total > 21) {
            document.getElementById("mainResult").innerHTML = "You Lost";
            alert("You Lost the game. Please click Restart to play again.");
            document.getElementById("btn-res").style.display = "Block";
        }




        var img = document.createElement("img");
        img.src = "./Images/" + x + ".png"; 
        img.alt = "Card Image"; 
        img.style.width = "200px"; 
        img.style.height = "auto"; 

        var cardsContainer = document.getElementById("cardsContainer");
        cardsContainer.appendChild(img); 


    }

}

    function restart(){
        location.reload();
    }
