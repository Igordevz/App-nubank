import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Card, CardImgCredits, ContainerMain, ContentCredit, ContentInfoSald, MasterImg, NameUser, Sald, Title } from './style'
import FooterMain from '../footer/footer'


export default function MainHome() {
  return (
    <ContainerMain >
      <Card>
        <MasterImg alt='card-master' source={require("../../../../assets/master-card.png")}/>
        <NameUser>Nathan S.</NameUser>
      </Card>
      <ContentCredit>
        <ContentInfoSald>
          <Title>Saldo disponível</Title>
          <Sald>R$145,76</Sald>
        </ContentInfoSald>
        <CardImgCredits alt='credits' source={require("../../../../assets/cards.png")}/>
      </ContentCredit>
      <FooterMain/>
    
    </ContainerMain>
  )
}