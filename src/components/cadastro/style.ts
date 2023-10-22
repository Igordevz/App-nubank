import styled from "styled-components/native";

export const Container = styled.View`
    background: #820AD1;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`
export const Header = styled.View`
    margin-top: 40px;

    display: flex;
    gap: 40px;
    
    align-items: center;

`

export const SubTitle = styled.Text`

    font-size: 18px;
    color: white;
    font-weight: 300;
    max-width: 70%;
    text-align: center;
`

export const Form = styled.View`
    display: flex;
    margin-top: 20px;

    align-items: center;
    width: 100%;
    gap: 10px;
`

export const TextInfo = styled.Text`
    width: 80%;
    font-size: 18px;
    color: white;

`

export const Input = styled.TextInput`
    color: white;
    margin-bottom: 20px;
    background: #9500F6;
    width: 80%;
    border-radius: 10px;
    padding:  10px 0px 10px 20px;
`
export const Footer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Button = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: white;
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Politic = styled.Text`
    color: white;
    margin-top: 20px;
`