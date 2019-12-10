import React from 'react';
import './scss/header.scss';

function header(){
    return(
        <div className='head'>
            <div className='titulo'>
                <p>Para poder navegar entre todas as possiveis páginas</p>
            </div>
            <div className='botola'>
                <button>Outra pag</button>
                <button>Outro botão</button>
            </div>
        </div>
    )
}

export default header;