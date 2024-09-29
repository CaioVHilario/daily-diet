import { useState } from "react";
import { ButtonView, Container, ModalConfirm, ModalText, ModalView, Space } from "./styles";
import { ModalProps } from "react-native";
import Button from "../Button";

type Props = ModalProps & {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ modalVisible, setModalVisible }: Props) {

    return (
        <ModalConfirm
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Container>
                <ModalView>
                    <ModalText>Deseja realmente excluir o {"\n"} registro da refeição?</ModalText>
                    <ButtonView>
                        <Button
                            title="Cancelar"
                            type="SECONDARY"
                            icon="plus"
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                        <Space></Space>
                        <Button
                            title="Sim, excluir"
                            type="PRIMARY"
                            icon="plus"
                            onPress={() => setModalVisible(!modalVisible)
                            }
                        />
                    </ButtonView>
                </ModalView>
            </Container>
        </ModalConfirm >
    );
}