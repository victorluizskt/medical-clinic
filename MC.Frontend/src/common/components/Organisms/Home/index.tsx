import Header from "../../Molecules/Header";
import CarouselContainer from "../../Molecules/Carousel";
import { BodyContainer } from './styles';

function Home() {
  return (
    <>
      <Header />
      <div style={{alignItems: 'center', textAlign: 'center', marginTop: '50px'}}>Conheça nossas clinícas.</div>
      <BodyContainer>
        <div>oi</div>
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
