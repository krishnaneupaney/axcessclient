import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;


export const ServicesIcon = styled.img`
    height: 290px;
    width: 260px;
    margin-bottom: 10px;
`;











export const PricingSections = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightblue;
`;

export const PricingWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeadings = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCards = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: black;
`;

export const PricingCardIcons = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlans = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

export const PricingCardCosts = styled.h4`
  font-size: 40px;
`;

export const PricingCardLengths = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`;

export const PricingCardFeaturess = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeaturesss = styled.li`
  margin-bottom: 10px;
`;


export const ServicesIcons = styled.img`
    height: 150px;
    width: 260px;
    margin-bottom: 10px;
`;















export const PricingSectionser = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

export const PricingWrapperser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeadingser = styled.h1`
  color: dark;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainerser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCardser = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 300px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

 

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfoser = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: black;
`;

export const PricingCardIconser = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlanser = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

export const PricingCardCostser = styled.h4`
  font-size: 40px;
`;

export const PricingCardLengthser = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`;

export const PricingCardFeaturesser = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeaturessser = styled.li`
  margin-bottom: 10px;
`;


export const ServicesIconser = styled.img`
    height: 100px;
    width: 180px;
    margin-bottom: 10px;
`;

