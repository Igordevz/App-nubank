import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ConfigApp, ContainerHeader, LogoNubank } from "./style";

export default function Header() {
  return (
    <ContainerHeader>
      <TouchableOpacity>
        <LogoNubank
          alt="logo"
          source={require("../../../../assets/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ConfigApp
          alt="config"
          source={require("../../../../assets/config.png")}
        />
      </TouchableOpacity>
    </ContainerHeader>
  );
}
