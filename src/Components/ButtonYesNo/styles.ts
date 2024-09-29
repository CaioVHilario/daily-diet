import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'


export type ButtonColorYesOrNo = 'PRIMARY' | 'SECONDARY';

export type PropsActive = {
    type: ButtonColorYesOrNo;
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <PropsActive>`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    background-color: ${({ theme, isActive, type }) => isActive ? (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT) : theme.COLORS.GRAY_600};

    align-items: center;
    justify-content: center;
    
    border: 1px;
    border-color: ${({ theme, isActive, type }) => isActive ? (type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK) : theme.COLORS.GRAY_600};
    border-radius: 5px;

    flex-direction: row;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-left: 16px;
`

export const Icon = styled(MaterialIcons).attrs<PropsActive>(({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 10,
}))``