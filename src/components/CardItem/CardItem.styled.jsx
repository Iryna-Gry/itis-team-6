import styled from 'styled-components';
import cardBgImg from '../../images/card-bg.png';

export const CardItemWrapper = styled.div`
  width: 200px;
  height: 300px;

  perspective: 1000px;
`;

export const Card = styled.li`
  position: relative;
  padding: 30px;
  width: 200px;
  height: 300px;
  background-image: url(${cardBgImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 170px;
  height: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;

  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;

  font-weight: bold;
  font-size: 18px;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;

  color: red;
  background: linear-gradient(-45deg, #0a2c66 0%, #010817 100%);

  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const CardButton = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(29, 77, 132, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: -10px;
  right: -5px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const AddButton = styled(CardButton)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: #002350;
`;

export const DeleteButton = styled(CardButton)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: #002350;
`;

export const InfoButton = styled(CardButton)`
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: #c61818;
`;

export const HeroName = styled.h2`
  color: red;
  text-align: center;
  font-size: 32px;
  font-family: 'Luckiest Guy';
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -2px 0 #212121, 0px -2px 0 #212121, 0px 2px 0 #212121,
    0px 2px 0 #212121, -2px 0px 0 #212121, 2px 0px 0 #212121, -2px 0px 0 #212121,
    2px 0px 0 #212121, -2px -2px 0 #212121, 2px -2px 0 #212121;
`;

export const HeroMainSkill = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: 'PT Serif';
  font-weight: bold;
  color: blue;
`;

export const HeroNameBack = styled.h2`
  padding-top: 10px;
  margin-bottom: 10px;
  color: whitesmoke;
  text-align: center;
  font-size: 18px;
  font-family: 'PT Serif';
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -2px 0 #212121, 0px -2px 0 #212121, 0px 2px 0 #212121,
    0px 2px 0 #212121, -2px 0px 0 #212121, 2px 0px 0 #212121, -2px 0px 0 #212121,
    2px 0px 0 #212121, -2px -2px 0 #212121, 2px -2px 0 #212121;
`;

export const HeroSkills = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: 'PT Serif';
  font-weight: normal;
  color: whitesmoke;
`;

export const HeroDescription = styled.h4`
  margin-top: 8px;
  font-size: 12px;
  font-family: 'PT Serif';
  font-weight: 400;
  color: whitesmoke;
  max-height: 88px;
  overflow-y: scroll;

  // scroll-bar styles
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: whitesmoke;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid whitesmoke;
  }
`;

export const HeroDescriptionTitle = styled.span`
  font-size: 14px;
  font-family: 'PT Serif';
  font-weight: normal;
  color: whitesmoke;
`;

export const MainSkillIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 45px;
  height: 45px;

  /* padding: 16px; */
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background-color: #002350;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;

  transform: translate(-50%, 50%);
`;

// export const AddButton = styled(CardButton)`
//   top: 0;
//   left: 0;
//   transform: translate(-50%, -50%);
// `;