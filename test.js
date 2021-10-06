//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];

console.log(mas1.length);
console.log("----------------");

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];

for (let i = 0; i < mas2.length; i++) {
    console.log("index:", i, ", value:", mas2[i]);
}

console.log("----------------");

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];

for (let i = 0; i < mas3.length; i++) {
    if (mas3[i] % 2 === 0) {
        console.log("index:", i, ", value:", mas3[i]);
    }
}

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];



//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';

let z = 0;

for (const letter of str1) {
    if (letter === "z") {
        z++;
    }
}

console.log("Number of z:", z);

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

set1.add('Labas');
set1.add('Ate');
console.log(set1.size);
console.log("----------------");

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';



// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
console.log(str2.lastCharIs());
console.log("----------------");

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };



//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class Grybas {
    constructor(tipas) {
        this.tipas = tipas;
    }
}

let grybas1 = new Grybas("Baravykas");
let grybas2 = new Grybas("Ūmedė");
let grybas3 = new Grybas("Lepšis");

console.log(baravykas, umede, lepsis);