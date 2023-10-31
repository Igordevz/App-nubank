import styled from "styled-components/native";
import FooterMain from "../components/home/footer/footer";
import Footer from "../components/home/footer/footer";
import Header from "../components/home/header/header";
import MainHome from "../components/home/main/main";

export default function Home(){
    return (
        <ContainerMainRoot>
            <Header/>
            <MainHome/>
        </ContainerMainRoot>
    )
}
export const ContainerMainRoot = styled.View``