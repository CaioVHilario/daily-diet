import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type TagViewProps = 'PRIMARY' | 'SECONDARY';

export type PropsActive = {
    type: TagViewProps;
}

export const Container = styled.View`
    flex-direction: row;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    min-height: 34px;
    max-height: 34px;

    width: 144px;

    justify-content: center;
    align-items: center;
    
    border-radius: 1000px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-left: 8px;
`;

export const Icon = styled(MaterialIcons).attrs<PropsActive>(({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 10,
}))``