import React from "react";


export default function RandomList(){

    const mockedList = Array.from(
        {length: 3},
        () => Math.floor(Math.random() * 40)
    );


    return (
        <div>
            {mockedList.map((item: number, index: number) => (
                <p
                    key={`${item}-${index}`}
                    children={`Hello World ${item} ${index}`}
                />
            ))}
        </div>
    );
};
