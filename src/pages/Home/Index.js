import { Header } from "../../components/Header";
import './styles.css';
import background from '../../assets/background.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/73957555?v=4" className="profile" alt="imagem do perfil"/>
            <div>
              <h3>Pedro Henrique</h3>
              <span>@PedroJuri</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default App;
