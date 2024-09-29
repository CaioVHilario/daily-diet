import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type ViewHeaderProps = 'PRIMARY' | 'SECONDARY';

export type ViewHeaderMealProps = 'PRIMARY' | 'SECONDARY';


type Props = {
    type1: ViewHeaderProps;
    type2: ViewHeaderMealProps;
}

export const Container = styled.View <Props> `
    background-color: ${({ theme, type1, type2 }) => type1 === 'PRIMARY' ? theme.COLORS.GRAY_500 : (type2 === 'SECONDARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
    padding: 24px;

    min-height: 100px;
    max-height: 100px;
    align-items: center;
    justify-content: center;
`;

export const ButtonBack = styled(TouchableOpacity)`
    margin-left: 24px;
    align-self: flex-start;
    position: absolute;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    /* margin-top: 50px; */
    align-self: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 25,
    color: theme.COLORS.GRAY_200
}))`
    /* justify-self: flex-start; */
`;


