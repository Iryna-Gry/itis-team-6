import React from 'react'

import { TabPanel, TabPanels, Tabs, TabList, Tab } from '@chakra-ui/react'

import { useCardsState } from '../../hooks/useCardsState'
import { PowersWrapper } from '../SelectedTeam/SelectedTeam.styled'


function HeroesPowers({ heroIndex }) {
  const { userTeam } = useCardsState()

  return (
    <PowersWrapper>
      <Tabs
        colorScheme="red"
        minH="150px"
        maxW="90%"
        m="auto"
      >
        <TabList  >
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <Tab key={index} fontWeight="700">{tab.header}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <TabPanel p={userTeam[heroIndex].powersAndAbilities.length}
                      key={index}
                      lineHeight="1.2"
            >
              {tab.text}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </PowersWrapper>
  )
}

export default HeroesPowers











