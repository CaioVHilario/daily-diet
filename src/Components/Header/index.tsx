import { useNavigation } from "@react-navigation/native";
import { ButtonBack, Container, Title, ViewHeaderMealProps, ViewHeaderProps } from "./styles";
import { Icon } from "./styles";

type Props = {
    title: string;
    type1?: ViewHeaderProps;
    type2?: ViewHeaderMealProps;
}

export function Header({ title, type1 = 'PRIMARY', type2 = 'PRIMARY', ...rest }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container type1={type1} type2={type2} >
            <ButtonBack onPress={() => handleGoBack()}>
                <Icon />
            </ButtonBack>
            <Title>{title}</Title>
        </Container>
    );
}