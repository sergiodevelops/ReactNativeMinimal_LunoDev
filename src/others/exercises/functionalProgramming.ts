interface FernetType {
    name: string;
    description: string;
    percentageOfAlcoholContent: number;
}

export const fernetTypes: readonly FernetType[] = [
    {description: "Es una de las marcas más reconocidas y tradicionales de Fernet en el mundo. Tiene un sabor intenso y complejo, con notas de hierbas y especias.", name: "Branca", percentageOfAlcoholContent: 39},
    {description: "Este Fernet tiene una mezcla rica de hierbas aromáticas y raíces, y es conocido por su calidad y tradición en la producción de licores.", name: "Luxardo", percentageOfAlcoholContent: 40},
    {description: "Es una opción popular en Italia, con un perfil de sabor menos intenso comparado con otras marcas, pero igualmente complejo y herbáceo.", name: "Vittone", percentageOfAlcoholContent: 35},
    {description: "Es un Fernet menos conocido internacionalmente pero apreciado en Italia por su fuerte graduación y sabor robusto.", name: "Silvetti", percentageOfAlcoholContent: 45},
    {description: "Bosca produce un Fernet que es reconocido por su equilibrio entre las notas amargas y dulces, proporcionando una experiencia de sabor única.", name: "Bosca", percentageOfAlcoholContent: 38},
];

export default function FunctionalProgramming(): void {
    console.log("executing FunctionalProgramming exercices");



    // First-class functions
    const showAlcoholContent = (fernetInfo: FernetType): void => {
        const {name, percentageOfAlcoholContent} = fernetInfo;
        console.log(`El Fernet "${name}" tiene ${percentageOfAlcoholContent}% de alcohol`);
    }

    // Higher-order functions
    interface ShowInOrderAlcoholContentProps {
        order: 'asc' | 'desc';
        fernetInfoList: readonly FernetType[];
        printerFunction: (fernetInfo: FernetType) => void;
    }
    const showInOrderAlcoholContentList = (props: ShowInOrderAlcoholContentProps): void => {
        const {order, fernetInfoList, printerFunction} = props;
        switch (order) {
            case "asc": {
                // fernetInfoList.
                break;
            }
            case "desc": {
                break;
            }
            default: throw new Error('order value is not valid');
        }


    }

    // showInOrderAlcoholContentList()

}
