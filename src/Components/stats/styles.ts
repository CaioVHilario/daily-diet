import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type ViewTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ViewTypeStyleProps;
}

export const Container = styled.View <Props> `
    background-color: ${({ theme, type }) =>
        type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    };
    padding: 24px;

    min-height: 200px;
    max-height: 200px;

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.GG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    /* margin-top: 50px; */
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

export const BackButton = styled.TouchableOpacity`
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
    size: 25,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
`;