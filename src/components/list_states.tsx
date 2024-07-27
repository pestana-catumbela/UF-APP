import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ufs } from '../pages/states';

interface ListStatesProps extends TouchableOpacityProps {
    item: Ufs;
}

export function ListStates({item, ...rest}:ListStatesProps) {
    return(
        <TouchableOpacity style={styles.card} {...rest}>
            <View style={styles.text}>
                <Text style={styles.uf}>{ item.sigla }</Text>
                <Text>{ item.nome }</Text>
            </View>

            <AntDesign name="right" size={15} color="#333" />
        </TouchableOpacity>
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
    },

    text: {
        display: 'flex',
        flexDirection: 'row',
    },

    uf: {
        color: '#002277',
        fontWeight: '500',
        marginRight: 10
    }
  });
