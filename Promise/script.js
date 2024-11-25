function baixarArquivo() {
    return new Promise((resolve, reject) => {
      const sucesso = Math.random() > 0.5;

      setTimeout(() => {
        if (sucesso) {
          resolve("Dados carregados com sucesso!");
        } else {
          reject("Falha ao carregar os dados.");
        }
      }, 2000);
    });
  }
  
  baixarArquivo()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });