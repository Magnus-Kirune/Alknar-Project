export class Movement {
    //O jogador gasta uma ficha de movimento!
    static makeMovement = () => {
           const movesPlayer = document.querySelectorAll('.imgMovement')
           movesPlayer.forEach((move) => {
              move.addEventListener('click', () => {
                //trocar as imagensS
              })
           })
           
    }


    //Funções apenas para o mestre da mesa!
    //Restaura os movomentos do jogador!
    static restaureMovement = () => {

    }
    //Adiciona movimentos ao jogador!
    static addMovement = () => {

    }
    //Reseta o turno!!
    static resetTurn = () => {

    }
    //Conta os turnos que estão sendo jogados!
    static contTurnOn = () => {

    }
}















