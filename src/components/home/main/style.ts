import styled from "styled-components/native";


export const ContainerMain = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 87%;
    background: #820AD1;
    gap: 20px;
`
export const Card = styled.View`

    background: #9500F6;
    height: 200px;
    border-radius: 10px;
    width: 80%;
    position: relative;
`
export const MasterImg = styled.Image`

    position: absolute;
    right: 20px;
    top: 20px;

`
export const NameUser = styled.Text`

    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-size: 30px;
    font-weight: 500;

`
export const ContentCredit = styled.TouchableOpacity`
    height: 150px;
    background: #9500F6;
    border-radius: 10px;
    position: relative;
    width: 80%;
    display: flex;
    align-items: baseline;
    flex-direction: row;
`
export const ContentInfoSald = styled.View`
    height: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
`
export const Title = styled.Text`
    color: white;
    font-size: 20px;
`
export const Sald = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 40px;
`

export const CardImgCredits = styled.Image`

    position: absolute;
    right: 20px;
    top: 23px;

`