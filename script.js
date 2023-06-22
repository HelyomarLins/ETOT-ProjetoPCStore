//ARMAZENANDO E SETANDO AS VARIÁVEIS//
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if (event.type ==='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

/*TROCANDO COR GABINETE */
function trocar(cor){
    if (cor == 'Preto') {
      gabin.src = 'img/gabinete-preto.png'
    } else {
      gabin.src = 'img/gabinete-branco.png'
    }
  }
  
  /* CALCULOS */
  function orcamento(){
      let gab = document.querySelector('#gabinete').value
      let cpu = document.forms.itens.elements.cpu.value
      let memo = document.querySelector('#memo').value
      let cpuV =""
      let memoV=""
  
        if(cpu === 'i3'){
          cpuV = 800
      }else if(cpu === 'i5') {
          cpuV = 1000
      }else if(cpu === 'i7'){
          cpuV = 1500
      }else {
          cpuV = 2300
      }
      if (memo <=32){
          memoV = memo * 10
      }else if(memo >32 & memo <= 128){
          memoV = memo * 8
      }else{
          memoV = memo * 7
      }
      let total = 1000 +(cpuV + memoV)
      
      res.innerHTML = `<li>Gabinete ${gab} R$300,00</li>`
      res.innerHTML += `<li>CPU:${cpu} R$${cpuV}</li>`
      res.innerHTML += `<li>Memória: ${memo} R$${memoV}</li>`
      res.innerHTML += `<li>Teclado R$100,00</li>`
      res.innerHTML += `<li>Mouse R$100,00</li>`
      res.innerHTML += `<li>Outros R$500,00</li>`
      
      tot.innerHTML = `R$${total}`
  }
/* REGRAS PARA FAZER O ORÇAMENTO

    GABINETE = Independente da cor, custa R$300
    Processador =   i3 R$800
                    i5 R$1000
                    i7 R$1500
                    i9 R$2300
    Memória  =  0 a 32GB = R$10 cada GB
                32 a 128GB = R$8 cada GB
                mais de 128GB = R$7 cada GB
    Teclado = R$100
    Mouse = R$100
    Outros = R$500
*/
