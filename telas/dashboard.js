export function alknarDashboard(){
    const alknar = document.getElementById('alknar-sistem')
    alknar.innerHTML = `
   <section id="turn">
    <div>
       <img src="./images/turno.png" alt="">
    </div>
 </section>

 <section>
     <div class="jogador"> 
          <h3>Kirune</h3>
          <section id="moves">
          <div>
             <img src="./images/Mov.png" alt="" width="50px">
          </div>

          <div>
             <img src="./images/Mov.png" alt="" width="50px">
          </div>

          <div>
             <img src="./images/Mov.png" alt="" width="50px">
          </div>
          
          <div>
             <img src="./images/Saque.png" alt="" width="50px">
          </div>

          
         </section>
         <hr>

         <div id="buttons">
             <button id="box-button">+</button>
         </div>
     </div>
 </section>`
    
}