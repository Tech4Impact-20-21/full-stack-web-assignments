import { CardContainer, CardImage, CardBody, CardPrice, CardProductName, CardTitle, CardText} from './styles/Card';

import Button from './Button';


const Card = ({src, price, productName}) => {
  return (
    <CardContainer width="300px">
      <CardImage src = {src} />
      <CardBody>
        <CardPrice>{price}</CardPrice>
        <CardProductName>{productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;