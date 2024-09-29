import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    padding-bottom: 0px;
`

export const SubTitle = styled.Text`
    margin-top: 40px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const DateMeal = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 20px;
    margin-bottom: 10px;
`

export const Gradient = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE_TRANSLUCENCY};
    position: absolute;
    width: 100%;
    height: 150px;
    margin-top: 505px;
`