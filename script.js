const maleNames = [
    "Carlos", "João", "Pedro", "Lucas", "Mateus",
    "Neto", "Tomás", "Reginaldo", "Tadeu", "Joaquim",
    "José", "Ângelo", "Heitor", "Alceu", "Douglas",
    "Geraldo", "Lorenzo", "Eric", "Alfredo", "Diogo",
    "Alex", "Samuel", "Cícero", "Álvaro", "Adriano",
    "Érico", "Reinaldo", "Igor", "Guilherme", "Sérgio",
    "Osvaldo", "Evandro", "Cássio", "Hugo", "Vicente",
    "Júlio", "Valdomiro", "Benedito", "Nicolas", "Conrado",
    "Nelson", "Armando", "Sebastião", "Renan", "Cauã",
    "Jorge", "Davi", "Vítor", "Roberto", "Arthur",
    "Mauro", "Arnoldo", "Saulo", "Henrique", "Breno",
    "Antenor", "Fabrício", "Renato", "Túlio", "Giovane",
    "Aurélio", "Osmar", "Felipe", "Leonardo", "Rafael",
    "Eduardo", "Tiago", "Antônio", "Ricardo", "Maurício",
    "Fábio", "Márcio", "Otávio", "Bruno", "Paulo",
    "Caio", "Félix", "Clemente", "Ismael", "Benício",
    "Fidélis", "Rodolfo", "Cristiano", "Elias", "Fábio",
    "Danilo", "André", "Eurico", "Orlando", "Ivan",
    "Rogério", "Marcos", "Rodrigo", "Edson", "Frederico",
    "Sandro", "Gustavo", "Leandro", "Rafael", "Cristóvão",
    "Pablo", "Luciano", "Diego", "Alberto", "Alexandre",
    "Amaro", "Américo", "Anselmo", "Arlindo", "Arnaldo",
    "Baltasar", "Bartolomeu", "Brás", "Cândido", "Carmo",
    "César", "Constâncio", "Cosme", "Demétrio", "Dinis",
    "Domingos", "Dorival", "Efigênio", "Eloy", "Epaminondas",
    "Epifânio", "Esdras", "Estanislau", "Evaristo", "Félix",
    "Firmino", "Gaspar", "Geraldo", "Gilberto", "Gonçalo",
    "Gregório", "Hermínio", "Horácio", "Humberto", "Januário",
    "Jeremias", "Joaquim", "Júlio", "Lázaro", "Leopoldo",
    "Lourenço", "Manuel", "Martinho", "Mateus", "Maurílio",
    "Melquíades", "Miguel", "Moisés", "Nestor", "Norberto",
    "Odilon", "Orestes", "Orlando", "Osório", "Otávio",
    "Pascoal", "Patrício", "Paulo", "Pedro", "Policarpo",
    "Raimundo", "Raul", "Remígio", "Ricardo", "Rodrigo",
    "Salvador", "Sebastião", "Serafim", "Sílvio", "Tarcísio",
    "Teófilo", "Tibério", "Tomé", "Valdemar", "Valentim",
    "Venceslau", "Vicente", "Viriato", "Virgílio", "Vítor",
    "Xavier", "Zacarias"
];



const femaleNames = [
    "Maria", "Ana", "Clara", "Beatriz", "Julia",
    "Áurea", "Isadora", "Vitória", "Lívia", "Emília",
    "Angélica", "Lorena", "Adriana", "Laís", "Francisca",
    "Ariane", "Milena", "Elza", "Teresa", "Laura",
    "Maiara", "Rita", "Isabelle", "Marcela", "Alana",
    "Olívia", "Alice", "Bruna", "Emma", "Anna",
    "Aurora", "Charlote", "Samanta", "Amanda", "Jaqueline",
    "Helena", "Valéria", "Gabriela", "Elisa", "Mia",
    "Soraia", "Paola", "Astrid", "Mirela", "Natasha",
    "Liana", "Elisandra", "Julieta", "Mônica", "Andressa",
    "Júlia", "Alessandra", "Carina", "Vivian", "Natália",
    "Lavínia", "Catarina", "Ingrid", "Luísa", "Érica",
    "Cordelia", "Daniela", "Larissa", "Luna",
    "Verônica", "Estela", "Patrícia", "Noemi", "Cristina",
    "Regina", "Eliane", "Bianca", "Viviane", "Raquel",
    "Tâmara", "Lúcia", "Carla", "Margarida", "Marina",
    "Sônia", "Edite", "Rosana", "Suzana", "Aline",
    "Débora", "Marta", "Antônia", "Valéria", "Mônica",
    "Teresa", "Carolina", "Gabrielle", "Renata", "Marília",
    "Simone", "Veridiana", "Vera", "Esther", "Tatiana",
    "Janaina", "Fabiana", "Tânia", "Abigail", "Agnes",
    "Aida", "Albertina", "Alcina", "Alda", "Alexandra",
    "Amélia", "Amparo", "Anabela", "Andréia", "Anita",
    "Ariadne", "Armanda", "Arminda", "Augusta", "Aurora",
    "Bárbara", "Bernardete", "Bernardina", "Camila", "Candida",
    "Carlota", "Carminda", "Catarina", "Celeste", "Cesaltina",
    "Cíntia", "Clarice", "Constança", "Cristina", "Dalila",
    "Delfina", "Dionísia", "Doroteia", "Eduarda", "Elisabete",
    "Eliza", "Emília", "Ermelinda", "Estela", "Eulália",
    "Eurídice", "Eva", "Felisbela", "Fernanda", "Filipa",
    "Flávia", "Francisca", "Genoveva", "Gertrudes", "Gisela",
    "Guiomar", "Heloísa", "Hermínia", "Hilda", "Idalina",
    "Ilda", "Inês", "Irene", "Irina", "Isaura",
    "Ivone", "Joana", "Josefina", "Júlia", "Julieta",
    "Lara", "Laura", "Leonor", "Lídia", "Lina",
    "Linda", "Lisandra", "Luzia", "Madalena", "Manuela",
    "Margarida", "Mariana", "Marta", "Matilde", "Mônica",
    "Natália", "Nicole", "Odete", "Olívia", "Patrícia",
    "Paula", "Piedade", "Pilar", "Quintina", "Quitéria",
    "Rafaela", "Regina", "Rita", "Rosa", "Rosália",
    "Salomé", "Sara", "Sebastiana", "Silvina", "Sofia",
    "Susana", "Tânia", "Tatiana", "Teodora", "Teresa",
    "Valentina", "Vanda", "Vera", "Virgínia", "Vitória",
    "Xénia", "Zélia"
];



const surnames = [
    "Silva", "Souza", "Oliveira", "Pereira", "Costa",
    "Rodrigues", "Almeida", "Nascimento", "Lima", "Araujo",
    "Fernandes", "Carvalho", "Gomes", "Martins", "Rocha",
    "Barros", "Moura", "Ribeiro", "Teixeira", "Cardoso",
    "Moreira", "Freitas", "Barbosa", "Pinto", "Melo",
    "Castro", "Cavalcanti", "Dias", "Campos", "Guimarães",
    "Vieira", "Farias", "Duarte", "Andrade", "Monteiro",
    "Santana", "Nunes", "Machado", "Lopes", "Batista",
    "Coelho", "Ferreira", "Ramos", "Rezende", "Figueiredo",
    "Amaral", "Campos", "Pacheco", "Peixoto", "Sales",
    "Santiago", "Vasconcelos", "Xavier", "Beltrão", "Sampaio",
    "Silveira", "Nogueira", "Cunha", "Porto", "Moraes",
    "Miranda", "Mendes", "Ferraz", "Azevedo", "Cardoso",
    "Macedo", "Pedrosa", "Trindade", "Barbosa", "Braga",
    "Carneiro", "Carneiro", "Monteiro", "Neves", "Queiroz",
    "Santana", "Santos", "Siqueira", "Soares", "Tavares",
    "Torres", "Vieira", "Vilas", "Barreto", "Borges",
    "Camargo", "Coutinho", "Drumond", "Estrela", "Farias",
    "Feliciano", "Fonseca", "Garcia", "Henrique", "Leite",
    "Mendes", "Paiva", "Prado", "Ramalho", "Rezende",
    "Salvador", "Seixas", "Alves", "Bezerra", "Cabrera",
    "Chaves", "Corrêa", "Dantas", "Esteves", "Guedes",
    "Lacerda", "Lemos", "Macedo", "Magalhães", "Maia",
    "Menezes", "Nascimento", "Nogueira", "Novaes", "Passos",
    "Pereira", "Pinto", "Pontes", "Sá", "Saraiva",
    "Silva", "Soares", "Souza", "Teles", "Vargas",
    "Viana", "Vieira", "Xavier", "Zamora", "Zanella",
    "Ziegler"
];


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateNPC() {
    const gender = document.getElementById('gender').value;
    const firstName = gender === 'male' ? getRandomElement(maleNames) : getRandomElement(femaleNames);
    const lastName = getRandomElement(surnames);
    const attributes = {
        Agilidade: 1,
        Força: 1,
        Presença: 1,
        Vigor: 1,
        Intelecto: 1
    };

    // Adicionar 4 pontos a escolha aleatória
    let pointsToAdd = 4;
    const attributeKeys = Object.keys(attributes);
    while (pointsToAdd > 0) {
        const randomAttribute = getRandomElement(attributeKeys);
        attributes[randomAttribute]++;
        pointsToAdd--;
    }

    // Obter perícias treinadas e seus níveis
    const trainedSkills = {};
    document.querySelectorAll('.skill-trained:checked').forEach(skillCheckbox => {
        const skill = skillCheckbox.dataset.skill;
        const level = parseInt(document.querySelector(`.skill-level[data-skill="${skill}"]`).value);
        trainedSkills[skill] = level;
    });

    // Exibir o NPC gerado
    const npcResult = document.getElementById('npcResult');
    let skillsText = "";
    for (const [skill, level] of Object.entries(trainedSkills)) {
        skillsText += `<p>${skill}: +${level}</p>`;
    }

    npcResult.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>Agilidade: ${attributes.Agilidade}</p>
        <p>Força: ${attributes.Força}</p>
        <p>Presença: ${attributes.Presença}</p>
        <p>Vigor: ${attributes.Vigor}</p>
        <p>Intelecto: ${attributes.Intelecto}</p>
        <h3>Perícias</h3>
        ${skillsText}
    `;
}

// Habilitar/Desabilitar seleção de nível de perícia
document.addEventListener('change', (event) => {
    if (event.target.classList.contains('skill-trained')) {
        const skill = event.target.dataset.skill;
        const levelSelect = document.querySelector(`.skill-level[data-skill="${skill}"]`);
        levelSelect.disabled = !event.target.checked;
        if (!event.target.checked) {
            levelSelect.value = "0";
        }
    }
});
