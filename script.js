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
    "Aurélio", "Osmar"
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
    "Cordelia", "Daniela", "Larissa", "Luna"
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
    "Coelho", "Ferreira", "Ramos", "Rezende", "Figueiredo"
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
