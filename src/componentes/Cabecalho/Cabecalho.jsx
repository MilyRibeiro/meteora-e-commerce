import './cabecalho.css';

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav>
        <ul className='links'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Nossas lojas</a>
          </li>
          <li>
            <a href="">Novidades</a>
          </li>
          <li>
            <a href="#">Promoção</a>
          </li>
        </ul>

        <ul className='busca'>
          <li>
            <input type="text" placeholder="" />
          </li>
          <li>
            <button>Buscar</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};