import React, {useState} from 'react';
import {Platform} from "react-native";


export default function PizzaTranslator() {

    const [text, setText] = useState<string>('');


    const handleOnChangeInputText = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setText(ev.target.value);
    }


    return (
        Platform.OS === 'web' &&
        <div>
            <input
                type={'text'}
                placeholder={"Type here to translate!"}
                onChange={handleOnChangeInputText}
                defaultValue={text}
            />
                {text
                    .split(' ')
                    .map((word, index) => word && <p key={`${word}${index}`}>{`${word}`}</p>)
                    // .join(' ')
                    }
        </div>
    );
}
