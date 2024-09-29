import { useNavigation } from "@react-navigation/native";
import { ViewTypeStyleProps, Container, Title, SubTitle, BackButton, Icon } from "./styles";

type Props = {
    title: string;
    type?: ViewTypeStyleProps;
}

export default function Stats({ title, type = 'PRIMARY', ...rest }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container
            type={type}
            {...rest}
        >
            <BackButton onPress={() => handleGoBack()}>
                <Icon
                    type={type}
                />
            </BackButton>

            <Title>{title}</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>
    );
}