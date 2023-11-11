let nomeHeroi = "James";
let XpHeroi = 4903;
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if(XpHeroi <= 1000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[0])
} else if(XpHeroi == 1001 || XpHeroi <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[1])
} else if(XpHeroi == 2001 || XpHeroi <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[2])
} else if(XpHeroi == 6001 || XpHeroi <= 7000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[3])
} else if(XpHeroi == 7001 || XpHeroi <= 8000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[4])
} else if(XpHeroi == 8001 || XpHeroi <= 9000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[5])
} else if(XpHeroi == 9001 || XpHeroi <= 10000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[6])
} else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[7])
}
