$(document).ready(function(){

 // var currentBlock = $(this);
   var activePlayer = 1;
   var state = false;
   var table = $('table');
   var winningCombinations =  function(){[
    //horizontal
    [$('#square1'), $('#square2'), $('#square3')],
    [$('#square4'), $('#square5'), $('#square6')],
    [$('#square7'), $('#square8'), $('#square9')],
    //vertical
    [$('#square1'), $('#square4'), $('#square7')],
    [$('#square2'), $('#square5'), $('#square8')],
    [$('#square3'), $('#square6'), $('#square9')],
    //
    [$('#square1'), $('#square5'), $('#square9')],
    [$('#square3'), $('#square5'), $('#square7')]
  ]};
  //   var winningCombinations = [
  //   //horizontal
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   //vertical
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   //
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ];

   $('td').one('click', function(){
    state = !state;
    if (state) {
      $(this).html("<div class='char'>" + 'X' + " </div>");
      checkWinner();
      switchPlayer();
    } else {
      $(this).html("<div class='char'>" + 'O' + " </div>");
      checkWinner();
      switchPlayer();
    }
  });

  function checkWinner() {
      for(var i = 0; i <= winningCombinations.length; i++)
      if (winningCombinations[i] == [$('#square1'), $('#square2'), $('#square3')]) {
         return window.alert("X wins!")
      }
  };


  function switchPlayer() {
    if (activePlayer === 1){
        activePlayer = 2;
    } else {
      activePlayer = 1
    };
  };

$('#reset').click(function(){
    location.reload();
  });
//   $('td').click(function(){
//       $(this).html("<div class='char'>" + 'X' + " </div>");

//     // console.log("hi")
//   //make X appear with first click
//     function printX(){
//     }
//     // printX();
//   });
// //Make "O" appear on click
//   $('td').click(function(){
//     $(this).html("<div class='char'>" + 'O' + " </div>");
//     function printO(){

//     }
//   })
//   printO()
});
