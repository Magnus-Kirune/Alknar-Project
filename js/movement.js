export class Movement {
    //O jogador gasta uma ficha de movimento!
    static makeMovement = () => {
           const movesPlayer = document.querySelectorAll('.imgMovement')
           movesPlayer.forEach((move) => {
              move.addEventListener('click', () => {
                //trocar as imagens dando a elas classes diferentes
              })
           })
           
    }


    //Funções apenas para o mestre da mesa!
    //Restaura os movomentos do jogador!
    static restaureMovement = () => {
        const movesPlayerUsed = document.querySelector('.imgMovement')
        movesPlayerUsed.forEach((move) => {
          move.addEventListener('click', () => {
            //Retornar o movimento do jogador (apenas o mestre)
          })
        })
    }
    //Adiciona movimentos ao jogador!
    static addMovement = () => {
           const movesPlayer = document.getElementById('moves')
           //criar a logica para adicionar movimentos extras.
              
    }
    //Reseta o turno!!
    static resetTurn = () => {
       
    }
    //Conta os turnos que estão sendo jogados!
    static contTurnOn = () => {

    }
}















