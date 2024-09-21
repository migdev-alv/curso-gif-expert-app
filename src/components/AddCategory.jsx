import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // * Usando state
        // Esto permite usar las categorias actuales y agregar una nueva
        // setCategories(categories => [...categories, inputValue]);

        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}