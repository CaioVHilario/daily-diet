import styled from "styled-components/native";

export const Container = styled.View`

`;

export const DateHour = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const Date = styled.View`
    width: 150px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 8px;
`;

export const DietCheck = styled.View`
    flex-direction: row;
`;

export const Space = styled.View`
    width: 12px;
`;

export const NewMealContent = styled.View`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 85px;
    border-radius: 20px;
    padding: 24px;
`;

