import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  return (
    <CardContainer width="500px">
      <CardImage src={props.src} />
      <CardBody>
        <CardPrice>{props.price}</CardPrice>
        <CardProductName>{props.productName}</CardProductName>
        <Button fullWidth={true}/>
      </CardBody>
    </CardContainer>
  );
}
export default Card;
