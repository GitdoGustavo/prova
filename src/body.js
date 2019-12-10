import React from 'react';
import './scss/body.scss';
import Recomendado from './recomendado.js';

function body(){
    return(
        <div className='body'>
            <div className='um'>
                <p>Conteúdo principal da página em questão</p>
                <p>Aqui precisaria de bastante conteúdo, mas eu realmente to sem ideia sobre o que colocar aqui... então vai um lorem</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div>
                <Recomendado />
            </div>
        </div>
    )
}

export default body;