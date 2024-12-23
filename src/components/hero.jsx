import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/img-hero1.jpg';

const heroData = [
  {
    id: 1,
    image: slide1,
    title: 'Automação de Tarefas Repetitivas para Profissionais',
    description: 'Automatizo tarefas repetitivas que envolvem o uso de planilhas, ajudando profissionais a economizar tempo e reduzir erros manuais. Simplifique suas rotinas e concentre-se em atividades de maior valor.',
    link: 'https://www.instagram.com/proativos.assist/'
  },
  {
    id: 2,
    image: slide2,
    title: 'Automação de Tarefas para Análise de Dados',
    description: 'Automatizo processos repetitivos e análises de dados, simplificando o trabalho com grandes volumes de informações. Transforme dados brutos em insights, gráficos e ganhe eficiência e reduza o tempo gasto em tarefas manuais.',
    link: 'https://www.instagram.com/proativos.assist/'
  },
  {
    id: 3,
    image: slide3,
    title: 'Libere Seu Potencial com Automação Inteligente',
  description: 'Deixe o trabalho repetitivo comigo e foque no que realmente importa: decisões estratégicas. Com automação inteligente, você transforma dados em insights, economiza tempo e eleva sua performance profissional ao próximo nível.',
    link: 'https://www.instagram.com/proativos.assist/'
  }
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {
          heroData.map(hero => (
            <Carousel.Item key={hero.id}>
              <Image
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Saiba mais <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </section>
  );
}

export default AppHero;
