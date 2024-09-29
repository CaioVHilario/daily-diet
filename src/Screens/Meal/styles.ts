import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const MealContent = styled.View`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 85px;
    border-radius: 20px;
    padding: 24px;
`;

export const OverView = styled.View`
    justify-content: space-between;
    width: 100%;
    height: 70%;
`;

export const InfoView = styled.View`
`;

export const ButtonView = styled.View`
`;


export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 24px;
`;

export const Text = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 24px;
`;