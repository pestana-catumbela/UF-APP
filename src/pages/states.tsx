import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListStates } from '../components/list_states';
import { api } from '../services/api';

export interface Ufs {
  id: number;
  nome: string;
  sigla: string;
  regiao: string;
}

export function States() {
  const [ufs, setUfs] = useState<Ufs[]>([]);

  const navigation:any = useNavigation();

  async function LoadUfs() {
    const response = await api.get(`?orderBy=nome`);
    setUfs(response.data);
  }

  function HandleToCities(item:Ufs) {
    navigation.navigate('Cidades', {ufs: item});
  }

  useEffect(() => {
    LoadUfs();
  },[])

  return (
    <View style={styles.container}>
      <FlatList<Ufs>
       style={{ flex: 1 }}
       data={ ufs }
       keyExtractor={uf => String(uf.id)}
       renderItem={({ item }) => {
        return(
          <ListStates item={item} onPress={() => HandleToCities(item)} />
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
  }
});
