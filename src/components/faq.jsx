import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

export default function AppFaq() {
    return (
        <section className='block services-block' id='faq'>
            <Container fluid>
                <div className='title-holder'>
                    <h2 className='texto-colorido'>Perguntas Frequentes</h2>
                    <div className='subtitle'>FAQ</div>
                </div>
                <Accordion defaultActiveKey="0" className="accordion-custom"> 
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Como a automação de tarefas repetitivas pode me ajudar no dia a dia?</Accordion.Header>
                        <Accordion.Body>
                            A automação de tarefas repetitivas pode transformar a maneira como você trabalha, especialmente em atividades que envolvem o uso constante de planilhas. Ao automatizar esses processos, você elimina a necessidade de repetir manualmente as mesmas tarefas e reduz o risco de erros. Isso libera tempo para que você se concentre em atividades de maior valor e importância estratégica, aumentando sua produtividade e permitindo que você alcance mais com menos esforço.
                        </Accordion.Body>
                    </Accordion.Item >
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Como a automação pode ajudar na criação de gráficos e análise de dados?</Accordion.Header>
                        <Accordion.Body>
                            Com a automação, você pode transformar dados brutos em gráficos claros e precisos, de forma rápida e sem esforço. Esse processo elimina a necessidade de construir gráficos manualmente e garante que suas visualizações estejam sempre atualizadas com os dados mais recentes. Assim, você ganha tempo para interpretar os resultados e focar em decisões estratégicas, usando gráficos que facilitam a comunicação de insights com sua equipe ou gestores.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Por que investir em automação inteligente pode melhorar minha performance profissional?</Accordion.Header>
                        <Accordion.Body>
                            Investir em automação inteligente é como ter um assistente digital que cuida do trabalho repetitivo para você. Isso não só economiza tempo, mas também permite que você direcione seu foco para decisões mais estratégicas e de alto impacto. Com a automação, você tem acesso rápido a insights valiosos e pode tomar decisões com maior confiança, levando sua performance a novos níveis e agregando valor real ao seu trabalho.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

