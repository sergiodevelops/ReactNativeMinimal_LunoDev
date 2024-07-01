import {fernetTypes} from "./functionalProgramming";

export default function ArrayPrototype(): void {
    console.log("executing ArrayPrototype exercises");

    // array.concat() examples
    arrayAtExamples();
    // array.at() examples
    arrayConcatExamples();

    // Array.copyWithin()


    function arrayConcatExamples() {
        /*
        * Array.concat(index: number)
        * El método concat() de instancias de Array se utiliza
        * para fusionar dos o más matrices. Este método no cambia
        * las matrices existentes, sino que devuelve una nueva matriz.
        */
        const arrayConcat1: readonly number[] = [1, 2, 3, 4, 5, 6];
        const arrayConcat2: readonly number[] = [7, 8, 9, 10, 11, 12];
        const arrayConcat3: readonly number[] = [13, 14, 15, 16, 17, 18];
        const arrayConcat4: readonly number[] = arrayConcat1.concat(arrayConcat2).concat(arrayConcat3);
        console.log('array with concat', arrayConcat4);
        console.log('array with spread operator [...]', [
            ...arrayConcat1, ...arrayConcat2, ...arrayConcat3,
        ]);
    }


    function arrayAtExamples() {
        /*
        * Array.at(index: number)
        * dado un array retorna un elemento o undefined a
        * partir del índice pasado como entrada
        */
        const arrayAt: readonly number[] = [5, 6, 18, 544, 52, 78];
        const positiveIndex = 0; // 5
        const negativeIndex = -1; // 78
        const nonExistentIndex = -7; // undefined
        console.log(
            'Array.at - positiveIndex',
            arrayAt.at(positiveIndex),
            '\nArray.at - negativeIndex',
            arrayAt.at(negativeIndex),
            '\nArray.at - nonExistentIndex',
            arrayAt.at(nonExistentIndex),
            '\nArray.at - positiveIndex with objects',
            fernetTypes.at(positiveIndex),
        );
    }


    function arrayCopyWithinExamples() {
        /*
        * Array.at(target: number, start: number, end: number)
        * El método copyWithin() de instancias de Array
        * copia superficialmente parte de esta matriz a
        * otra ubicación en la misma matriz y devuelve
        * esta matriz sin modificar su longitud.
        * modificando la matriz original
        * target -->
        * start -->
        * end -->
        */
        const arrayCopyWithin: readonly number[] = [0, 2, 4, 6, 8, 10, 12, 14, 16];
        const newArrayCopyWithIn: number[] = [0, 2, 4, 6, 8, 10, 12, 14, 16];
        console.log(newArrayCopyWithIn.copyWithin(2, 3, 4));

    }
}

