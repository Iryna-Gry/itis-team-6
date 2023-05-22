import React, { useEffect, useState } from 'react'
import { TabContent, TabItem, TabWrapper, TabList, Header } from './HeroesPowers.styled'
import { useCardsState } from '../../hooks/useCardsState'



const Tab = ({ header, text }) => (
  <div>
    <h3>{header}</h3>
    <p>{text}</p>
  </div>
);

function HeroesPowers({heroIndex}) {
  const { userTeam } = useCardsState()

  const [activeTab, setActiveTab] = useState(userTeam[0].powersAndAbilities[0]);

  useEffect(() => {
    console.log('powers team')
    setActiveTab(userTeam[0].powersAndAbilities[0])
  }, [userTeam])

  useEffect(() => {
    console.log('powers team')
    setActiveTab(userTeam[heroIndex].powersAndAbilities[0])
  }, [heroIndex])

  const handleTabClick = (tab) => {
    console.log(tab)
    setActiveTab(tab);
  };

  return (
    <>
      <Header>
        {userTeam[heroIndex].name}
      </Header>
      <TabWrapper>
        <TabList>
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <TabItem
              key={index}
              active={tab === activeTab}
              onClick={() => handleTabClick(tab)}
            >
              {tab.header}
            </TabItem>
          ))}
        </TabList>
        <TabContent>
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <div
              key={index}
              className={`tab-item ${tab === activeTab ? 'active' : ''}`}
            >
              <Tab header={tab.header} text={tab.text} />
            </div>
          ))}
        </TabContent>
      </TabWrapper>
    </>


  )
}

export default HeroesPowers











