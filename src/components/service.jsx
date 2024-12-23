import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartBar, faCogs } from '@fortawesome/free-solid-svg-icons';

const serviceData = [

        {
            "id": 1,
            "icon": faCode,
            "title": "Automação de Tarefas",
            "description": "Elimine atividades repetitivas e simplifique o fluxo de trabalho. Nossas soluções automatizam processos, permitindo que sua equipe foque no que realmente importa."
        },
        {
            "id": 2,
            "icon": faChartBar,
            "title": "Automação de Análise de Dados",
            "description": "Transforme dados brutos em insights visuais. Nossas soluções automatizam a criação de gráficos e análise de dados, mantendo suas visualizações atualizadas para decisões estratégicas."
        },
        {
            "id": 3,
            "icon": faCogs,
            "title": "Consultoria em Automação Inteligente",
            "description": "Aprimore sua performance profissional com automação inteligente. Nossos especialistas identificam e implementam as melhores soluções para otimizar seu tempo e elevar seus resultados."
        }

    
];

export default function AppService() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid >
                <div className='title-holder'>
                    <h2 className='texto-colorido'>Serviços</h2>
                    <div className='subtitle'>Serviços Prestados</div>
                </div>
                <Row>
                    {
                        serviceData.map(service => (
                            <Col sm={4} className='holder' key={service.id}>
                                <FontAwesomeIcon className="icon" icon={service.icon} size="2x" />
                                <h3 className='texto-colorido' >{service.title}</h3>
                                <p className='textos'>{service.description}</p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}
