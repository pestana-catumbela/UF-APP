import { Text, View, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Cities } from '../pages/cities';

interface ListCitiesProps extends TouchableOpacityProps {
    item: Cities;
}

export function ListCities({item, ...rest}:ListCitiesProps) {
    return(
        <View style={styles.card}>
            <Text>{ item.nome }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',

        borderWidth: 0.5,
        borderColor: '#C2C2C2',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
