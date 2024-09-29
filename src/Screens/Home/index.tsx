import { useState, useRef } from 'react';
import Button from '../../Components/Button';
import { Card } from '../../Components/Card';
import StatusButton from '../../Components/statsButton';
import { Container, SubTitle, DateMeal, Gradient } from './styles';
import { SectionList } from 'react-native';
import { PRODUCTS } from '../../utils/data';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const sectionListRef = useRef<SectionList>(null)
    const navigation = useNavigation();

    function handleStatics() {
        navigation.navigate('statics');
    }

    function handleNewMeal() {
        navigation.navigate('new');
    }

    function handleMeal() {
        navigation.navigate('meal');
    }

    return (
        <Container>
            <StatusButton
                title='50,33%'
                onPress={() => handleStatics()}
            />

            <SubTitle>Refeições</SubTitle>

            <Button
                title='Nova refeição'
                showAddIcon
                icon="plus"
                onPress={() => handleNewMeal()}
            />

            <SectionList
                ref={sectionListRef}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
                sections={PRODUCTS}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Card
                        type='PRIMARY'
                        onPress={() => handleMeal()}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <DateMeal>{title}</DateMeal>
                )}
            />

            {/* <Gradient>

            </Gradient> */}

        </Container>
    );
}