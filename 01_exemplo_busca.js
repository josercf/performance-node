// Função para realizar a busca sequencial
function buscaSequencial(arr, alvo) {
    console.time("Busca Sequencial");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === alvo) {
        console.timeEnd("Busca Sequencial");
        return i;
      }
    }
    console.timeEnd("Busca Sequencial");
    return -1; // Retorna -1 se não encontrar o elemento
  }
  
  // Função para realizar a busca binária
  function buscaBinaria(arr, alvo) {
    console.time("Busca Binária");
    let esquerda = 0;
    let direita = arr.length - 1;
  
    while (esquerda <= direita) {
      const meio = Math.floor((esquerda + direita) / 2);
  
      if (arr[meio] === alvo) {
        console.timeEnd("Busca Binária");
        return meio;
      } else if (arr[meio] < alvo) {
        esquerda = meio + 1;
      } else {
        direita = meio - 1;
      }
    }
    console.timeEnd("Busca Binária");
    return -1; // Retorna -1 se não encontrar o elemento
  }
  
  // Exemplo de uso
  const array = Array.from({ length: 1000000 }, (_, i) => i + 1); // Array de 1 a 1.000.000
  const alvo = 999999; // Número que desejamos buscar
  
  // Realiza as buscas e mede o tempo
  const resultadoSequencial = buscaSequencial(array, alvo);
  console.log(`Resultado da Busca Sequencial: Índice ${resultadoSequencial}`);
  
  const resultadoBinario = buscaBinaria(array, alvo);
  console.log(`Resultado da Busca Binária: Índice ${resultadoBinario}`);