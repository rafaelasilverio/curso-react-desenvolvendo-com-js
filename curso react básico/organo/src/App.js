import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57c278',
      corSecundaria:'#d9f7e9'
    },
    {
      nome:'Front-Mobile',
      corPrimaria: '#82cffa',
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria:'#f0f8e2'
    },
    {
      nome:'Liderança',
      corPrimaria: '#ff8a29',
      corSecundaria:'#ffeedf'
    }
  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
