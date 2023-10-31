import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CardModel,
  ContainerItemsCards,
  ContainerTitle,
  Logo,
  ModelView,
  Subtitlte,
  Title,
  ViewBaseFooter,
} from "./style";

export default function FooterMain() {
  return (
    <ViewBaseFooter>
      <ContainerTitle>
        <Title>Do que precisa?</Title>
      </ContainerTitle>
      <ModelView horizontal={true}>
        <ContainerItemsCards>

        <TouchableOpacity>
          <CardModel>
            <Logo alt="pix" source={require("../../../../assets/pix.png")} />
            <Subtitlte>Fazer um Pix</Subtitlte>
          </CardModel>
        </TouchableOpacity>
        <TouchableOpacity>
          <CardModel>
            <Logo alt="pix" source={require("../../../../assets/pix.png")} />
            <Subtitlte>Fazer um Pix</Subtitlte>
          </CardModel>
        </TouchableOpacity>
        <TouchableOpacity>
          <CardModel>
            <Logo alt="pix" source={require("../../../../assets/pix.png")} />
            <Subtitlte>Fazer um Pix</Subtitlte>
          </CardModel>
        </TouchableOpacity>
        <TouchableOpacity>
          <CardModel>
            <Logo alt="pix" source={require("../../../../assets/pix.png")} />
            <Subtitlte>Fazer um Pix</Subtitlte>
          </CardModel>
        </TouchableOpacity>
        </ContainerItemsCards>

      </ModelView>
    </ViewBaseFooter>
  );
}
