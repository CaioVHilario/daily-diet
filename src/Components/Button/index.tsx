import { ButtonProps } from 'react-native';
import { Container, Icon, Title, ViewButtonProps } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = ButtonProps & {
    title: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    type?: ViewButtonProps;
    showAddIcon?: boolean
}

export default function Button({ icon, title, type = "PRIMARY", showAddIcon = false, onPress }: Props) {
    return (
        <Container
            type={type}
            onPress={onPress}
            accessibilityLabel={title}
            hasIcon={showAddIcon}
        >
            {showAddIcon &&
                <Icon type={type} name={icon!} />
            }
            <Title type={type} hasIcon={showAddIcon}>
                {title}
            </Title>
        </Container>
    );
}