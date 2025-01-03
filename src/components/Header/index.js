import React, { useState } from 'react'
import "./index.css"

function Header({ setFind }) {

    const [inputValue, setInputValue] = useState("")

    //verifica o valor de busca para poder alterar o valor do find e realizar a requisicao
    const handleSearch = () => {
        if (inputValue.trim() === "") {
            return;
        }

        setFind(inputValue)
        setInputValue("")
    }
    
    //pressionando "Enter" tbm é possivel realizar a busca
    const handlerKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    
    return (
        <div className='container'>
            <h1 className='title'>ImageSearch</h1>

            <div className='search-bar'>
                <input
                    type='text'
                    className='input'
                    placeholder='Type'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handlerKeyDown}
                />

                <button className='button' onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Header
