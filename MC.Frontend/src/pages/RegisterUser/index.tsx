import ImageBackground from '../../../src/common/assets/wallpaper-home-and-register-2.jpg';
import Card from "../../common/components/Atoms/Card";

import { ImageTag, PageContainer} from './styles'
function RegisterUser() {
  return (
    <PageContainer>
      <ImageTag src={ImageBackground} />
      <Card width="399px" height="599px">

      </Card>
    </PageContainer>
  )
}

export default RegisterUser;
