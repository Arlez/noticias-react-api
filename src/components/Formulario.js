import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'breaking-news', label: 'Últimas hora'},
        {value: 'world', label: 'Mundo'},
        {value: 'nation', label: 'Nación'},
        {value: 'business', label: 'Negocios'},
        {value: 'technology', label: 'Tecnologiía'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'sports', label: 'Deportes'},
        {value: 'science', label: 'Ciencia'},
        {value: 'health', label: 'Salud'}
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias

                    />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']} btn-large green darken-2`} 
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;