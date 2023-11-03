let currentPlayer = "X";
let arr=Array(9).fill(null);

function checkWinner(){
    if(
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        document.write("<div style='font-size: 24px;'>Winner is " + currentPlayer + "</div><div style='font-size: 16px;'>This page will reload shortly</div>");

      
        // Use setTimeout to reload the page after 5 seconds
        setTimeout(function () {
          location.reload(); // Reload the page
        }, 5000); // 5000 milliseconds (5 seconds)
        return;
      }
        
    
    if (!arr.some(e => e === null)) {
        document.write("<div style='font-size: 24px;'>Draw</div><div style='font-size: 16px;'>This page will reload Shortly</div>");

      
        // Use setTimeout to reload the page after 5 seconds
        setTimeout(function () {
          location.reload(); // Reload the page
        }, 5000); // 5000 milliseconds (5 seconds)
      }
    }   

function handleClick(el){
    const id = Number(el.id);
    arr[id]=currentPlayer;
    el.innerText = currentPlayer;    
    checkWinner();
    currentPlayer = currentPlayer=="X" ? "o" : "X";

}