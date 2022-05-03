import React from 'react';
import { Provider } from "react-redux";
import store from './store'
import Jugadores from './components/Jugadores';
import Equipo from './components/Equipo';
import "./styles/styles.scss"



const App = () => (
  <Provider store={store}>
        <main>
           <h1>Base Heme Aquí</h1>
              <Jugadores />
             <Equipo />
         </main>
  </Provider> 

)
export default App;