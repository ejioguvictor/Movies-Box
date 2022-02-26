
//styles
import { Wrapper, Content, Text } from './HeroImage.styles'

const HeroImage = ({ image, title, text }) => ( //we destructured our props (props)=>({props.elements})
  <Wrapper image={image}>

    <Content >

      <Text>
        <h1>{title}</h1>
        <p>{text}</p>

      </Text>

    </Content>

  </Wrapper>
)

export default HeroImage;