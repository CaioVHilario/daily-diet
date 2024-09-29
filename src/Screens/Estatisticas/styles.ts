import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const GeneralStats = styled.View`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 135px;
    border-radius: 20px;
    padding: 24px;
`

export const Title = styled.Text`
    align-self: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`
export const CardsStats = styled.View`

`

export const TitleStats = styled.Text`
    align-self: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const SubTitleStats = styled.Text`
    align-self: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: center;
`

export const CardLarge = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    min-height: 89px;
    max-height: 89px;
    width: 100%;
    border-radius: 8px;
    margin-top: 12px;
    justify-content: center;
`

export const CardsMeals = styled.View`
    flex-direction: row;
    margin-top: 12px;
`

export const MealsIn = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    min-height: 107px;
    max-height: 107px;
    width: 157.5px;
    border-radius: 8px;
    margin-right: 12px;
    justify-content: center;

`

export const MealsOut = styled.View`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    min-height: 107px;
    max-height: 107px;
    border-radius: 8px;
    width: 157.5px;
    justify-content: center;


`