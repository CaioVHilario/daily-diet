import Button from "../../Components/Button";
import { Header } from "../../Components/Header";
import Tag from "../../Components/Tag";
import Modal from "../../Components/Modal";
import { ButtonView, Container, InfoView, MealContent, OverView, SubTitle, Text, Title } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Meal() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    function handleEditMeal() {
        navigation.navigate('edit');
    }

    return (
        <Container>
            <Header title="Refeição" type1="SECONDARY" type2="SECONDARY" />
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <MealContent>
                <OverView>
                    <InfoView>
                        <Title>
                            Sanduíche
                        </Title>
                        <Text>
                            Sanduíche de pão integral com atum e salada de alface e tomate
                        </Text>
                        <SubTitle>
                            Data e hora
                        </SubTitle>
                        <Text>
                            12/08/2022 às 16:00
                        </Text>
                        <Tag title="dentro da dieta" type="PRIMARY" icon="circle" />

                    </InfoView>
                    <ButtonView>
                        <Button
                            title="Editar Refição"
                            showAddIcon
                            type="PRIMARY"
                            icon="square-edit-outline"
                            onPress={() => handleEditMeal()}
                        />
                        <Button
                            title="Excluir Refeição"
                            showAddIcon
                            icon="trash-can-outline"
                            type="SECONDARY"
                            onPress={() => setModalVisible(true)}

                        />
                    </ButtonView>
                </OverView>
            </MealContent>
        </Container >
    );
}