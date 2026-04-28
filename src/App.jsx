import './App.css'
import logo from './assets/lego-logo.webp'

export default function App() {

  return (
    <>
      <main>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <div className='container'>
          <h1>Fazer Login</h1>

          <p>Usuário:</p>
          <input type="text" placeholder='Insira seu nome de usuário'/>

          <p>Senha:</p>
          <input type="password" placeholder='Insira sua senha'/>

          <button>Entrar</button>

          <a href="#">Esqueci minha senha</a>
        </div>

      </main>
    </>
  )
}
