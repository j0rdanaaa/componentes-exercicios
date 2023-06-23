import React from "react";
import { CardVideo } from "./CardVideo/CardVideo";
import "./styles.css";
import { Busca, Header, Lista, Main } from "./styles";
import GlobalStyles from "./CardVideo/GlobalStyle";


export default function App() {
  const newObj = {
    titulo: 'Guardioes da galaxia 3',
    imagem: 'https://img.olhardigital.com.br/wp-content/uploads/2023/05/guardioes-da-galaxia-3.jpg'
  }
  return (
    <GlobalStyles>
    <div>
      <div className="tela-inteira">
          <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
         </Header>

        <Main>
          <nav className="menu-vertical">
              <Lista>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </Lista>
          </nav>

          <Busca className="painel-de-videos">
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
            <CardVideo newObj = {newObj}/>
          </Busca>
        </Main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
    </GlobalStyles>
  );
}
