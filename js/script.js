var board = []; // variável do estado atual do jogo
var currentGame = [1, 5, 11, 13, 15, 17];
var savedGames = [];

var state = { board: [], currentGame: [], savedGames: [] }; //Guardando as variáveis juntas

function start() {
  addNumerToGame(50);
  addNumerToGame(28);
  addNumerToGame(29);
  addNumerToGame(30);
  addNumerToGame(31);
  addNumerToGame(32);
  saveGame();
  removeNumberFromGame(32);
  addNumerToGame(51);
  saveGame();
  console.log(state.savedGames);
 
  

  
}
// Função adicionar número vai inserir o número passado como parâmetro na var currentGame. Como ele é uma lista, pode ser feito através do push
function addNumerToGame(numberToAdd) {
  //Se o número inserido for menor que 1 ou maior que 60, ignorar
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error("Número inválido", numberToAdd);
    return;
  }
  //If para impedir uma quantidade maior do que seis números inseridos
  if (state.currentGame.length >= 6) {
    console.error("O jogo já está completo");
    return;
  }
  // Se o resultado da função for verdadeiro
  if (isNumberInGame(numberToAdd)) {
    console.error(" Este número já está no jogo", numberToAdd);
    return;
  }
  state.currentGame.push(numberToAdd);
}

//Função para remover número
function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error("Número inválido", numberToRemove);
    return;
  }
  var newGame = [];
  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue; // Quando achar o numero que o usuário quiser excluir, não faça nada, só continue. Porque quando o número não for o que ele quer excluir, adiciona em um novo jogo
    } else {
      newGame.push(currentNumber);
    }
  } // Fim do loop
  state.currentGame = newGame;
}
// Função para verificar se tem número repetido no jogo
function isNumberInGame(numberToCheck) {
  // Verifica se o numero inserido já está incluido na lista de currentGame, se sim, retorna verdadeiro, se não, retorna falso

  /* 
  Essa opção funciona, mas existe a opção abaixo que é mais prático 

   if(state.currentGame.includes(numberToCheck)){
     return true;
     }
    return false
  */
  return state.currentGame.includes(numberToCheck);
}
function saveGame() {
  if (!isGameComplete()) {
    console.error(' O jogo não está completo');
    return;
  } else {
    state.savedGames.push(state.currentGame);
  }
 
}
function isGameComplete() {
  return state, currentGame.length === 6;
}

start();
