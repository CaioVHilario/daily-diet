import Button from "../../Components/Button";
import ButtonYesNo from "../../Components/ButtonYesNo";
import { Header } from "../../Components/Header";
import { TextBox } from "../../Components/TextBox";
import { Container, Date, DateHour, DietCheck, NewMealContent, Space, Title } from "./styles";

export function EditMeal() {

    return (
        <Container>
            <Header title="Editar Refeição" type1="PRIMARY" />
            <NewMealContent>
                <TextBox title="Nome" />
                <TextBox title="Descrição" type="SECONDARY" />
                <DateHour>
                    <Date>
                        <TextBox title="Data" />
                    </Date>
                    <Date>
                        <TextBox title="Hora" />
                    </Date>
                </DateHour>
                <Title>Está dentro da dieta?</Title>
                <DietCheck>
                    <ButtonYesNo icon="circle" title="Sim" type="PRIMARY" isActive />
                    <Space />
                    <ButtonYesNo icon="circle" title="Não" type="SECONDARY" />
                </DietCheck>
                <Button title="Salvar Alterações" icon="plus" />
            </NewMealContent>
        </Container>
    );
}