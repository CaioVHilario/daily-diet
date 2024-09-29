import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Plus } from "phosphor-react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export type ViewButtonProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ViewButtonProps;
    hasIcon: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

    align-items: center;
    justify-content: center;

    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 5px;
    margin-top: 20px;

    flex-direction: ${({ hasIcon }) => hasIcon ? 'row' : 'column'};
`

export const Title = styled.Text <Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    margin-left: ${({ hasIcon }) => hasIcon ? '16px' : '0px'}; 
`

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
    size: 20,
}))``