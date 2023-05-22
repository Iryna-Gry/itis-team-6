import React, { useState } from 'react'


import TeamItem from 'components/TeamItem/TeamItem'
import SectionTitle from '../SectionTitle/SectionTitle'

import intelligence from '../../images/skeleton-3.png'
import force from '../../images/skeleton-2.png'
import fight from '../../images/skeleton-1.png'
import { useCardsState } from '../../hooks/useCardsState'
import { setAllTeam } from '../../redux/cards/slice'
import { useDispatch } from 'react-redux'
import HeroesPowers from '../HeroesPowers/HeroesPowers'
import {
  ButtonWrapper, CardWrapper,
  ClearTeamButton,
  SceletonWrapper,
  SelectedTeamWrapper
} from './SelectedTeam.styled'
import CardTeamPlaySceleton from '../CardTeamPlaySceleton/CardTeamPlaySceleton'



function SelectedTeam({ deleteFromTeam }) {

  const { userTeam } = useCardsState()
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0)

  const dispatch = useDispatch()

  function onClearTeam() {
    dispatch(setAllTeam([]))

  }

  function showSelectedPowers(index) {
    setSelectedHeroIndex(index)
  }

  return (
    <>
      <SectionTitle>Choose your team</SectionTitle>
      <ButtonWrapper>
        <ClearTeamButton  onClick={onClearTeam}>Clear team</ClearTeamButton>
      </ButtonWrapper>

      {
        !userTeam.length ? (
          <>
            <SceletonWrapper>
              <CardTeamPlaySceleton name="Intelligence" bgImg={intelligence} color="yellow"/>
              <CardTeamPlaySceleton name="Force" bgImg={force} color="green"/>
              <CardTeamPlaySceleton name="Fighting" bgImg={fight} color="red"/>
            </SceletonWrapper>
          </>
        ) : (
          <SelectedTeamWrapper>
            {userTeam.map((hero, index) => (
                <CardWrapper className={selectedHeroIndex === index ? 'selected-hero' : ''} key={hero.id}
                     onClick={() => showSelectedPowers(index)}>
                  <TeamItem hero={hero} deleteFromTeam={deleteFromTeam}/>
                </CardWrapper>
              )
            )}
          </SelectedTeamWrapper>
        )
      }
      {
        userTeam.length ? (
          <HeroesPowers heroIndex={selectedHeroIndex}/>
        ) : <></>
      }
    </>
  )
}

export default SelectedTeam
