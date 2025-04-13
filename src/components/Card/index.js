import styled from "styled-components";

const CARD = styled.div`
  height: calc(8rem + 20vw);
  width: calc(9rem + 10vw);
  background-color: var(--random);
  border-radius: 20px;
  position: relative;
  margin-top: calc(2rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 70%;
  height: 65%;
  position: absolute;
  top : 20px;
  left: 50%;
  bottom: 40%;
  transform: translate(-50%);
  border-radius: 15px;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h4`
  color: var(--yellow);
  padding: 0 calc(1rem + 1vw);
 position: absolute;
 top : 81.2%;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--white);
  padding-top: 1rem;
  position : absolute;
  top: 68%;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`);

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;
