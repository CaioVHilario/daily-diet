import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ViewStatusProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ViewStatusProps;
}

export const Container = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: row;
    border-width: 1px;
    border-radius: 5px;
    align-items: center;
    /* padding-left: 12px;
    padding-right: 16px; */
    padding: 12px;

    margin-top: 4px;
    margin-bottom: 4px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};

    min-height: 49px;
    max-height: 49px;
`;

export const Time = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-right: 12px;
`;

export const Bar = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    height: 14px;
    width: 1px;
    margin-right: 12px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-right: 12px;
    width: 70%;
`;

export const Status = styled.View <Props>`
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 100px;
    height: 14px;
    width: 14px;
`;