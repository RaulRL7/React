import React, { useState } from 'react'

const Header = () => {
    //Se crea la constante y su método para hacer los cambios de Modos.
    const [darkMode, setDarkMode] = useState(false);

    //Función encargada de trabajar el cambio de modo.
    const handleClick = () => {
        //Se coloca el valor negado de la constante.. De False a True.
        setDarkMode(!darkMode)
    }

    // Se crea un tipo de llamada a la funcion handleClick.
    // Se crea un tipo de SetDarkMode con una función anonima "() =>"
    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            
            <button type="button" onClick={handleClick}>
                {darkMode ? 'DarkMode' : 'Light Mode'}
            </button>

            <button type="button" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'DarkMode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Header;