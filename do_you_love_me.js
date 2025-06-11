const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

function typeWriterEffect(element, text, speed = 15) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);

  const texto = `Feliz dia dos namorados vida, achou que seria apenas aqueles presentes? não não não, eu tinha que fazer algo a mais, vc é a melhor namorada do mundo e merece o melhor minha princesinha.

  E como todo dia, eu quero deixar bem claro o quanto eu te amo e sou apaixonado em vc, vc é tão linda meu amor, tão maravilhosa e mesmo com a distância entre nós, o que eu sinto por você só cresce. Quatro meses… Pode parecer pouco pra quem vê de fora, mas pra mim, foi tempo suficiente pra entender que o que eu sinto é real, forte e profundo. Você virou parte de mim. 

  Cada mensagem sua, cada chamada, cada risada(aquele sorriso lindo que aparece quando olho pra vc)... tudo isso é combustível pra minha alma. Vc me faz sentir vivo, amado, completo. E olha, não é exagero dizer que te amar à distância me ensinou o valor de cada palavra, de cada segundo que a gente passa junto mesmo que seja por uma tela.

  Sabe, às vezes eu tento escrever o quanto eu te amo, mas as palavras travam e sempre acaba no mesmo clichê. Porque é mais do que isso, é mais do que dá pra dizer. É aquele amor que aperta o peito, que dá vontade de correr até vc só pra te dar um abraço apertado e dizer baixinho no seu ouvido: "vc é tudo pra mim".

  Eu não vejo a hora da gente poder viver isso lado a lado, de mãos dadas, de verdade, no mundo físico, podendo sentir seu cheirinho e seu abraço. Mas até lá, eu sigo aqui, fiel, apaixonado, firme e te desejando cada vez mais todos os dias. Porque vc vale cada segundo de espera. Vc é minha princesinha, minha luz, meu futuro.

  Feliz Dia dos Namorados, minha vidinha.

  Eu te amo mais do que qualquer palavra pode explicar 💖

  Com todo o meu coração,

  Do seu príncipe bobo e completamente apaixonado. `;

  const p = document.getElementById('typewriter-text');
  p.innerHTML = '';
  typeWriterEffect(p, texto, 15);
});
