import { TextInputProps } from "react-native";
import { Container, HeigthTextInputType, Input, Title } from "./styles";

type Props = TextInputProps & {
    title: string;
    type?: HeigthTextInputType;
}

export function TextBox({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Input type={type} />
        </Container>
    );
}