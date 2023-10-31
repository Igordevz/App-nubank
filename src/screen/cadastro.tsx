import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import * as S from "../components/cadastro/style";
import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from "react";
export default function Cadastro({ navigation }: any) {

  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() =>{
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Desbloquei seu Smartphone"
    })


  }, [])

  function handlerLoading() {

    if(email.length <= 5 && cpf?.length != 11 ){
      return alert("Dados Inválidos")
    }

    setloading(true);

    setTimeout(() => {
      setloading(false);
      navigation.navigate("finishcadastro");
    }, 2000);
  }

  return (
    <S.Container>
      <KeyboardAvoidingView
        keyboardVerticalOffset={150}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <S.Header>
          <Image alt="nubank-logo" source={require("../../assets/logo.png")} />
          <S.SubTitle>Faça seu cadastro no nosso Roxinho </S.SubTitle>
        </S.Header>
        <ScrollView>
          <S.Form>
            <S.TextInfo>Insira seu Email</S.TextInfo>
            <S.Input
              onChange={(e) => setEmail(e.nativeEvent.text)}
              keyboardType="email-address"
              enablesReturnKeyAutomatically
              placeholder="roxinho@gmail.com"
              placeholderTextColor={"white"}
            ></S.Input>
            <S.TextInfo>Insira seu CPF</S.TextInfo>
            <S.Input
                onChange={(e) => setCpf(e.nativeEvent.text)}
              placeholder="******"
              placeholderTextColor={"white"}
            ></S.Input>
          </S.Form>
        </ScrollView>

        <S.Footer>
          <S.Button onPress={handlerLoading}>
            {loading ? (
              <ActivityIndicator size={24} color={"#820AD1"} />
            ) : (
              <Text
                style={{ color: "#9500F6", fontWeight: "800", fontSize: 18 }}
              >
                Começar
              </Text>
            )}
          </S.Button>
          <S.Politic>políticas de privacidade</S.Politic>
        </S.Footer>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
