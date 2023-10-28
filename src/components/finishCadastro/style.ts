import styled from "styled-components/native";

export const ContainerSob = styled.View`
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    top: 0;

`
export const ContentMain = styled.View`
    position: absolute;
    border-radius: 40px 40px 0px 0px;
    bottom: 0;
    height: 98%;
    width: 100%;
    background: white;
    overflow: hidden;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 60px;

`
export const ButtonBack = styled.TouchableOpacity`

    position: absolute;
    left: 30px;
    margin-top: 20px;

`
export const TopImg = styled.Image`

    position: absolute;
    margin-top: 15px;

`
export const InfoMain = styled.View`

    gap: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const BannerImg = styled.Image``

export const TextPrincipal = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: black;
`
export const SubTextPrincipal = styled.Text`
    max-width: 250px;
    text-align: center;
    font-size: 18px;
    color: #717171;
`
export const FormFinaly = styled.View`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const TextInfo = styled.Text`
    color: #717171;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 5px;

`
export const InputForm = styled.TextInput`
    background: #E3B7FF;
    padding-left: 20px;
    border-radius: 8px;
    width: 90%;
    height: 50px;

`
export const Button = styled.TouchableOpacity`
    border-radius: 10px;
    height: 55px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #9500F6;
`

export const Footer = styled.View`
    background: #F1F0F5;
    bottom: 0;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ComponentFooter = styled.View`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 20px;
`
export const SetaLeft = styled.Image`
    position: absolute;
    right: 40px;

`