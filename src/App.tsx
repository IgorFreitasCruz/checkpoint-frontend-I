import "./style/global.scss";
import { Header } from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function App() {
  return (
    <div>
      <Header />

      <section id="banner-container">
        <h3>Seja bem vindo ao portal da cidade de Santo André</h3>
      </section>

      

      <section id="cards-container">
        <h2>Curiosidades</h2>
        <div className="card">
          <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSF-QzJNeV2LO6I2DgI-ocDRcNZzOFJkHs_uADoxkbyN2q0k8_xKw4magUtlqNObnSy" alt=""></img>
          <p>Localizada a cerca de 30 km do centro de Santo André, no Alto da Serra do Mar, a Vila foi construída pela São Paulo Railway para abrigar seus funcionários durante a concessão da estrada de ferro Santos – Jundiaí, iniciada em 1860. Este pequeno vilarejo encrostado no alto da serra mar e rodeada por Mata Atlântica, preserva o acervo histórico cultural, arquitetônico, industrial, tecnológico e ambiental, é tombado pelos conselhos de patrimônio federal, estadual e municipal.</p>
        </div>
        <div className="card">
          <img  src="http://www2.santoandre.sp.gov.br/sites/default/files/images/LivroVivo_foto_por_JulioBastos-PSA._129_2_0.preview.jpg" alt=""></img>
          <p>A SABINA - Escola Parque do Conhecimento é um Centro de Ciências com a missão de gerar, preservar e difundir o conhecimento por meio de seus acervos, exposições, aquários, terrário, experimentos, simuladores, planetário, teatro digital e outros serviços. Trata-se, portanto, de excepcional recurso didático para a aprendizagem de Linguagem, Ciências Humanas, Ciências da Natureza e Matemática.</p>
        </div>
        <div className="card">
          <img src="https://cdn.abcdoabc.com.br/estadiobrunodaniel_7a178f09.jpg" alt=""></img>
          <p>O Estádio Municipal Bruno José Daniel é um estádio poliesportivo localizado na cidade brasileira de Santo André. Foi inaugurado em 15 de novembro de 1969 com a realização do Troféu Brasil de Atletismo e em 14 de dezembro do mesmo ano foi realizado o primeiro jogo de futebol no local, com um amistoso entre as equipes do Santo André e Palmeiras, que na época era o atual campeão da Taça Roberto Gomes Pedrosa. A partida inaugural terminou com o placar de 4 x 0 para o Palmeiras.</p>
        </div>
      </section>

      <section id="video-container">
        <h2>Video</h2>
        <div className="container-video">
          <iframe
            src="https://www.youtube.com/embed/iroxK5g5WEM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer>
        <div>
          <a href="https://github.com/IgorFreitasCruz" target="_blank">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <p>Linkedin</p>
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/igorfreitascruz/"target="_blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <p>GitHub</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
