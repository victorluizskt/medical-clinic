import CardHome from "../../Molecules/CardHome";
import ImageBackground from '../../../assets/wallpaper-home-and-register-2.jpg';
import { PageContainer, Image } from "./styles";

function InitialPage() {
  return (
    <PageContainer>
      <Image src={ImageBackground} />
      <CardHome />
    </PageContainer>
  );
}

export default InitialPage;
