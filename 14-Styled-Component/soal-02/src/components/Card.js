import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardPrice,
  CardProductName,
} from "./styles/Card";

import Button from "./Button";

const Card = (props) => {
  return (
    <CardContainer width="500px" >
      <CardImage src={props.data.imageUrl} />
      <CardBody>
        <CardPrice>{props.data.price}</CardPrice>
        <CardProductName>{props.data.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};
export default Card;