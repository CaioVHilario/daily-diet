import { ButtonProps } from 'react-native';
import { ButtonTypeStyleProps, Container, SubTitle, Title, Icon } from './styles';

type Props = ButtonProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    onPress: () => void;
}

export default function StatusButton({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Icon
                type={type}
            />

            <Title>{title}</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>
    );
}