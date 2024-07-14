const hexaDigits: string[] = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"
];

export const getRandomHexaDigit = (): string => {
    return hexaDigits[Math.floor(Math.random() * hexaDigits.length)];
}

export const getRandomColor = (stringLenght: number): `#${string}` => {
    // GENERAR UN CODIGO DE COLOR ALEATORIO
    // 1 creo array de 6 posiciones indefinidas
    const array = new Array(stringLenght);
    // 2 cada posición indefinida es reemplazada por string vacio
    array.fill("");
    // 3 cada posición es reemplazado por digito aleatorio hexDigits (de 0 a 15)
    const color = array.map(()=>getRandomHexaDigit());
    // 4 array to string
    color.join("");

    return (`#${color.join("")}`);
}
