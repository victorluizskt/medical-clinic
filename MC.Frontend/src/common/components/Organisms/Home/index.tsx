import Header from "../../Molecules/Header";
import CarouselContainer from "../../Molecules/Carousel";
import { BodyContainer } from './styles';

function Home() {
  return (
    <>
      <Header />
      <BodyContainer>
        <div style={{marginTop: '60px', padding: '50px 60px'}}>
          <span style={{fontSize: '50px'}}>Clinica Bernabeu <br/> </span>
          <span style={{fontSize: '20px'}}> <br/> Criada em 2014 a nossa cliníca tem como especialidade <br/>
          o atendimento ao público de todas as idades com <br/>
          clnícas em São Paulo, Rio de Janeiro e Salvador <br/>
          é a maior cliníca da América Latina.</span>
          <span style={{fontSize: '20px'}}> <br/><br/> Nossa missão é levar saúde de qualidade
          <br/> para todas as pessoas, de qualquer classe social.</span>
        </div>
        <div style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '60px'
        }}>
          <CarouselContainer />
        </div>
      </BodyContainer>
    </>
  )
}

export default Home;
