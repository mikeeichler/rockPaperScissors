function get_result() {
    p1 = parseInt(document.getElementById("player1").value);
    p2 = parseInt(document.getElementById("player2").value);
    console.log(p1);
    console.log(p2);

    var result = "";

    if (p1 == 1) { // p1: rock
        if (p2 == 1) {
            result = "A draw!<br>Player 1: rock<br>Player 2: rock";
        } else if (p2 == 2) {
            result = "Player 2 wins!<br>Player 1: rock<br>Player 2: paper";
        } else if (p2 == 3) {
            result = "Player 1 wins!<br>Player 1: rock<br>Player 2: scissors";
        } else {
            result = "Invalid move by Player 2!";
        }
    } else if (p1 == 2) { // p1: paper
        if (p2 == 1) {
            result = "Player 1 wins!<br>Player 1: paper<br>Player 2: rock";
        } else if (p2 == 2) {
            result = "A draw!<br>Player 1: paper<br>Player 2: paper";
        } else if (p2 == 3) {
            result = "Player 2 wins!<br>Player 1: paper<br>Player 2: scissors";
        } else {
            result = "Invalid move by Player 2!";
        }
    } else if (p1 == 3) { // p1: scissors
        if (p2 == 1) {
            result = "Player 2 wins!<br>Player 1: scissors<br>Player 2: rock";
        } else if (p2 == 2) {
            result = "Player 1 wins!<br>Player 1: scissors<br>Player 2: paper";
        } else if (p2 == 3) {
            result = "A draw!<br>Player 1: scissors<br>Player 2: scissors";
        } else {
            result = "Invalid move by Player 2!";
        }
    } else { // if it's not in [1,2,3]
        result = "Invalid move by Player 1!";
    }
    document.getElementById("result").innerHTML = result;
    // reset the fields
    p1 = document.getElementById("player1").value = "";
    p2 = document.getElementById("player2").value = "";
}
