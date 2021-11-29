import React, { Fragment, useState, useEffect }from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () => {
    const consultarApi = async ()=> {
      //const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=142dfb5fe6ab42b5bff37b08a66ce652`;
      const url = `https://gnews.io/api/v4/top-headlines?country=ar&lang=en&topic=${categoria}&token=9dbc607e6ba57254ce29aca3d23793b1`;



      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarNoticias(resultado.articles);
    }
    consultarApi();
  }, [categoria])


  return (

    <Fragment>
      
      <Header
        titulo="Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
