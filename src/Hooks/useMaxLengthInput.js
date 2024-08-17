import React, { useState } from 'react'

const useMaxLengthInput = (maxCharacters) => {

    const [inputValue, setInputValue] = useState();

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length <= maxCharacters) {
            setInputValue(value);
        }
    };

  return {inputValue, handleInputChange, maxCharacters}
}

export default useMaxLengthInput