import { Bar, Container, Status, Time, Title, ViewStatusProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    type?: ViewStatusProps;
}

export function Card({ type = 'PRIMARY', onPress, ...rest }: Props) {
    return (
        <Container onPress={onPress} {...rest}>
            <Time>20:00</Time>
            <Bar></Bar>
            <Title>X-tudo</Title>
            <Status type={type}></Status>
        </Container>
    );
}