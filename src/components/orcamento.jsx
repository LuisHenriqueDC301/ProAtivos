import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

function AppOrcamento() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (nome === '' || email === '' || numero === '' || mensagem === '') {
      alert("Preencha todos os campos");
      return;
    }

    const template = {
      to_name: nome,
      to_numero: numero,  // Correto conforme seu template
      to_message: mensagem,
      to_email: email,
    };

    emailjs.send("service_wf8c8td", "template_s0q9ogv", template, "0TbdZCFsOKcIW0evJ")
      .then((response) => {
        console.log("Status:", response.status);
        alert("Mensagem enviada com sucesso!");
        setEmail('');
        setNome('');
        setNumero('');
        setMensagem('');
      })
      .catch((err) => {
        console.log("Erro ao enviar:", err.text);
        alert("Ocorreu um erro ao enviar a mensagem.");
      });
  }

  return (
    <section id="orcamento" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className='texto-colorido'>Orçamento</h2>
          <div className="subtitle">Faça seu Orçamento</div>
        </div>
        <Form className='contact-form' onSubmit={sendEmail}>
          <Row>
            <Col sm={4}>
              <Form.Control 
                type="text" 
                placeholder="Digite seu nome completo" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required 
              />
            </Col>
            <Col sm={4}>
              <Form.Control 
                type="email" 
                placeholder="Digite seu e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </Col>
            <Col sm={4}>
              <Form.Control 
                type="tel" 
                placeholder="Digite seu telefone de contato" 
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required 
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control 
                as="textarea" 
                placeholder="Descreva o serviço que você deseja" 
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required 
              />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Enviar</Button>
          </div>
          {statusMessage && <p>{statusMessage}</p>}
        </Form>
      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li className='texto-colorido'>
              <i className="fas fa-envelope"></i>
              proAtivos.assist@gmail.com
            </li>
            <li className='texto-colorido'>
              <i className="fas fa-phone"></i>
              (31) 998960400
            </li>
            <li className='texto-colorido'>
            <i class="fas fa-brands fa-instagram"></i>
              ProAtivos
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppOrcamento;
