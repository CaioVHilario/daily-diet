import { TextInput } from "react-native";
import styled from "styled-components/native";

export type HeigthTextInputType = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: HeigthTextInputType
}

export const Container = styled.View`
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 8px;
`;

export const Input = styled(TextInput) <Props> `
    width: 100%;
    min-height: ${({ type }) => type === 'PRIMARY' ? '48px' : '130px'};
    max-height: ${({ type }) => type === 'PRIMARY' ? '48px' : '130px'};


    border: 1px;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;