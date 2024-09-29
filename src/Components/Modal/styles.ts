import { Modal } from "react-native";
import styled from "styled-components/native";

export const ModalConfirm = styled(Modal)`
`;


export const Container = styled.View`
    flex: 1;
    margin-top: 22px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_TRANSLUCENCY};
`;

export const ModalView = styled.View`
    padding: 35px;

    justify-content: center;
    align-items: center;

    border-radius: 6px;
    margin: 20px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonView = styled.View`
    flex-direction: row;
`;

export const Space = styled.View`
    width: 12px;
`;

export const ModalText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: center;
`;