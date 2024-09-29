import Stats from "../../Components/stats";
import { CardLarge, CardsMeals, CardsStats, Container, GeneralStats, MealsIn, MealsOut, SubTitleStats, Title, TitleStats } from "./styles";

export default function Estatisticas() {
    return (
        <Container>
            <Stats
                title='50,33%'
            />
            <GeneralStats>
                <Title> Estátisticas gerais </Title>
                <CardLarge>
                    <TitleStats>22</TitleStats>
                    <SubTitleStats>melhor sequência de pratos dentro da dieta</SubTitleStats>
                </CardLarge>
                <CardLarge>
                    <TitleStats>109</TitleStats>
                    <SubTitleStats>refeições registradas</SubTitleStats>
                </CardLarge>
                <CardsMeals>
                    <MealsIn>
                        <TitleStats>99</TitleStats>
                        <SubTitleStats>refeições dentro da {"\n"} dieta</SubTitleStats>
                    </MealsIn>
                    <MealsOut>
                        <TitleStats>10</TitleStats>
                        <SubTitleStats>refeições fora da {"\n"} dieta</SubTitleStats>
                    </MealsOut>
                </CardsMeals>
            </GeneralStats>
        </Container>
    );
}