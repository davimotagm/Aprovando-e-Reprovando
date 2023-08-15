// Declarando o body do HTML em uma variável
const body = document.querySelector("body");

// Criando um elemento form e incluindo dentro do body como filho
const form = document.createElement("form");
body.appendChild(form);

// Criando um botão e incluindo dentro do "form" como filho
const button = document.createElement("button");
button.innerText = "Clique aqui para verificar situação";
form.appendChild(button);

// Criando uma resposta pro botão quando clicar ele iniciar os prompts para receber os valores.
button.addEventListener('click', function (event) {
    event.preventDefault();

    let nome = prompt("Entre com o nome e sobrenome do aluno");
    let quantMaterias = parseInt(prompt("Foram quantas matérias ao total?")); /* Definindo a quantidade de materias que será informada, para criar a quantidade de prompt de acordo com o que será necessário */
    let materiasNotas = [];

    for (let i = 0; i < quantMaterias; i++) {
        let materia1 = prompt("Nome da materia");
        let nota1 = parseFloat(prompt("Qual foi a nota?"));
        materiasNotas.push({ materia: materia1, notas: nota1 }); /* Criando um array de objetos com as matérias e as notas informadas nos prompts */
    }

    let presenca = parseInt(prompt("Quantas presenças?"));
    let arrDados = [{ nome: nome, quantMaterias: quantMaterias, materiasNotas: materiasNotas, presenca: presenca }]; /* Juntando todos os dados em um array para faciliar a organização */

    // loop para acessar os valor do array alimentado através do prompt
    let soma = 0;
    let media = 0;
    for (let i = 0; i < arrDados[0].quantMaterias; i++) {
        soma += arrDados[0].materiasNotas[i].notas;
        media = soma / arrDados[0].quantMaterias;

        if (arrDados[0].nome.length < 5) {
            return alert("Nome inválido. O nome deve ter no mínimo 5 caracteres.");
        } else if (arrDados[0].materiasNotas[i].notas < 0 || arrDados[0].materiasNotas[i].notas > 10) {
            return alert("Nota inválida. Digite um valor entre 0 e 10.");
        } else if (arrDados[0].presenca < 0 || arrDados[0].presenca > 10) {
            return alert("Presença inválida. Digite um valor entre 1 e 10.");
        };
    }

    if (media >= 8 && arrDados[0].presenca >= 6) {
        alert(`A nota do aluno ${arrDados[0].nome} é de: ${media} e sua presença de ${arrDados[0].presenca}: Aluno provado!`);
    } else {
        alert(`A nota do aluno ${arrDados[0].nome} é de: ${media} e sua presença de ${arrDados[0].presenca}: Aluno reprovado!`);
    }
})
