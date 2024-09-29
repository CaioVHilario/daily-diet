import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props> `
    background-color: ${({ theme, type }) =>
        type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    };

    min-height: 102px;
    max-height: 102px;

    border-radius: 7px;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.GG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-top: 25.5px;
    justify-self: center;
    align-self: center;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    align-self: center;
    justify-self: center;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 25,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    align-self: flex-end;
`;



