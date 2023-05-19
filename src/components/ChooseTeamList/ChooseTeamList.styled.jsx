import styled from 'styled-components'

const cardHeight = "255px"
const cardWidth = "180px"

export const ListWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 10px;
  align-items: center;
  justify-content: center;


`;

export const HeroItem = styled.div`
  width: ${cardWidth};
  height: ${cardHeight};
  background-color: gold;
`;

export const TeamItemCommand = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(${cardWidth} * 3 + 20) ;
  height: calc(${cardHeight}+ 15% + 60);
  padding-bottom: 10px;

  //border: 1px solid blue;


  & > div > :nth-child(1) {
    transition: 0.8s;
    transform: translateX(calc(${cardWidth} * 3 - 230%)) translateY(-5%) rotateZ(-15deg);
    transition-delay: 0s;
    background-color: red;
    color: white;
  }
  & > div >:nth-child(2) {
    transition: 0.8s;
    transition-delay: 0.02s;
    transform: translateX(calc(${cardWidth} * 2 - 200%)) translateY(-5%) rotateZ(0deg);
    background-color: black;
    color: white;
  }

  & > div > :nth-child(3) {
    transition: 0.8s;
    transition-delay: 0.04s;
    transform: translateX(calc(${cardWidth} * 1 - 170%)) translateY(-5%) rotateZ(15deg);
    background-color: green;
    color: white;
  }

  &:hover > div  > div {
    transform: translateX(0) translateY(0) rotateZ(0);
  }

  &:hover > :first-child {
    transform: translateY(20%);
  }

`;

export const TeamBox = styled.div`
  display: flex;
  transition: 0.5s;
  gap:10px;
  transform-origin: bottom;

`;
export const TeamHeader = styled.div`
  padding-top: 10px;
  width: 100%;
  margin-bottom: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-15%);
  transition: 0.8s;
  transition-delay: 0.02s;
`;
