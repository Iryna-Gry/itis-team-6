import React from 'react'
import { ListWrapper, TeamBox, TeamHeader, TeamItemCommand } from './ChooseTeamList.styled'
import heroes from 'db/heroes.json';

import TeamItemSmall from './TeamItemSmall/TeamItemSmall'

function ChooseTeamList({setTeam}) {

  function mergeHeroesIntoTeams(heroes) {
    const mergedHeroes = {}
    heroes.forEach(hero => {
      if (!mergedHeroes[hero.team]) {
        mergedHeroes[hero.team] = []
      }
      mergedHeroes[hero.team].push(hero)
    });

    return Object.values(mergedHeroes)
  }
  const mergedHeroes = mergeHeroesIntoTeams(heroes)
  console.log(mergedHeroes)

  function onSetTeam(team) {
    setTeam(team)
  }

  return (
    <ListWrapper >
      {
        mergedHeroes.map((team) => {
          return(
            <TeamItemCommand onClick={() => onSetTeam(team)} key={team[0].team}>
              <TeamHeader>
                {team[0].team}
              </TeamHeader>
              <TeamBox>
                {
                  team.map((hero) => {
                    return <TeamItemSmall key={hero.id} hero={hero}/>
                  })
                }
              </TeamBox>
            </TeamItemCommand>
          )
        })
      }
      {/*Ниже просто дубликат команд для приближения вида к реальному виду страницы*/}
      {
        mergedHeroes.map((team) => {
          return(
            <TeamItemCommand key={team[0].team}>
              <TeamHeader>
                {team[0].team}
              </TeamHeader>
              <TeamBox>
                {
                  team.map((hero) => {
                    return <TeamItemSmall key={hero.id} hero={hero}/>
                  })
                }
              </TeamBox>
            </TeamItemCommand>
          )
        })
      }
    </ListWrapper>
  )
}

export default ChooseTeamList