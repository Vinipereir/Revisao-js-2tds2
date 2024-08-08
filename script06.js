let armas = ["bazuca", "parafal", "baubau", "scar", "espada", ];

let ataques = [];

ataques.push("chapaaa");
ataques.push(armas[0]);
ataques.push(armas[2]);
ataques.push(armas[1]);
ataques.push(armas[4]);
ataques.push(armas[3]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`O nome do seu robo é: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i} | ${ataques[i]}`);
    }
}