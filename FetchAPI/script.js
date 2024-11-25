// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const titulos = data.map((post) => post.title);
//     console.log(titulos);
//   })
//   .catch((error) => console.error("Erro:", error));

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if(!response.ok){
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
            const comments = data.filter((comments) => comments.body.includes("dolor"));
            console.log(comments);
        })
        .catch((error) => console.error("Erro: ", error));


