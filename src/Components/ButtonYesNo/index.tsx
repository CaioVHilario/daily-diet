import { ButtonColorYesOrNo, Container, Icon, PropsActive, Title } from './styles';
import { MaterialIcons } from '@expo/vector-icons'

type Props = PropsActive & {
    title: string;
    showAddIcon?: boolean;
    type?: ButtonColorYesOrNo;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export default function ButtonYesNo({ icon, isActive = false, title, showAddIcon = true, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
            type={type}
        >
            {showAddIcon &&
                <Icon
                    name={icon}
                    type={type}
                />
            }
            <Title>{title}</Title>
        </Container>
    );
}