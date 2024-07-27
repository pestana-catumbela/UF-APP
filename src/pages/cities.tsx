import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import { api } from "../services/api";
import { Ufs } from "./states";
import { ListCities } from "../components/list_cities";

export interface Cities {
    id: number;
    nome: string;
}

interface Params {
    ufs: Ufs;
}

export function Cities() {
    const [cities, setCities] = useState<Cities[]>([]);

    const route = useRoute();
    const { ufs } = route.params as Params;

    async function LoadCities() {
        const response = await api.get<Cities[]>((`/${ufs.id}/municipios?orderBy=nome`));
        setCities(response.data);
    }

    useEffect(() => {
        LoadCities();
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>Cidades do {ufs.nome}:</Text>

            <FlatList<Cities>
                style={{ flex: 1 }}
                data={ cities }
                keyExtractor={citie => String(citie.id)}
                renderItem={({ item }) => {
                    return(
                        <ListCities item={item} />
                    );
                }}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 15,
        marginVertical: 15,
        color: '#333'
    }
  });
