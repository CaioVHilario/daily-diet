import { Container, Icon, TagViewProps, Title } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    type?: TagViewProps;
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export default function Tag({ title, type = "PRIMARY", icon }: Props) {
    return (
        <Container>
            <Icon name={icon} type={type} />
            <Title>{title}</Title>
        </Container>
    );
}