import {
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import React from "react";
import {
  BannerImg,
  Button,
  ButtonBack,
  ComponentFooter,
  ContainerSob,
  ContentMain,
  Footer,
  FormFinaly,
  HeaderContent,
  InfoMain,
  InputForm,
  SetaLeft,
  SubTextPrincipal,
  TextInfo,
  TextPrincipal,
  TopImg,
} from "../components/finishCadastro/style";

import { useState } from "react";

export default function FinishCadastro({ navigation }: any) {

  const [loading, setLoading] = useState(false)

  function handlerBack() {
    navigation.navigate("Cadastro");
  }
  function NavigationNextRouter(){
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigation.navigate("home")
    }, 2000);
  }
  return (
    <ContainerSob>
      <StatusBar barStyle={"light-content"} />
      <ContentMain>
      
          <HeaderContent>
            <ButtonBack onPress={handlerBack}>
              <Image alt="seta" source={require("../../assets/seta.png")} />
            </ButtonBack>
            <TopImg alt="imgTop" source={require("../../assets/top.png")} />
          </HeaderContent>
          <InfoMain>
            <BannerImg
              alt="banner"
              source={require("../../assets/banner.png")}
            />
            <TextPrincipal>Finalizar Cadastro</TextPrincipal>
            <SubTextPrincipal>
              Todos os seus dados estão sendo criptografados
            </SubTextPrincipal>
          </InfoMain>
            <FormFinaly>
              <TextInfo>Insira seu Nome</TextInfo>
              <InputForm placeholder="luciano Santana Pereira"></InputForm>
              <TextInfo>Senha para o cartão</TextInfo>
              <InputForm placeholder="*****"></InputForm>
            </FormFinaly>

          <Button onPress={NavigationNextRouter}>
            {loading ? (
              <ActivityIndicator size={24} color={"white"}/>
            ) : (
              <Text style={{ fontSize: 17, color: "white" }}
              >Finalizar</Text>
            )}
          </Button>
          <Footer>
            <TouchableOpacity
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ComponentFooter>
                <Image
                  alt="duvida"
                  source={require("../../assets/duvida.png")}
                />
                <Text style={{ fontWeight: "600" }}>Me Ajuda</Text>
              </ComponentFooter>
              <SetaLeft
                alt="seta"
                source={require("../../assets/seta-left.png")}
              />
            </TouchableOpacity>
          </Footer>
      </ContentMain>
    </ContainerSob>
  );
}
