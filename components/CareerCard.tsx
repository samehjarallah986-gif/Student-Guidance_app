import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Career } from '../data/careers';

type Props = {
  item: Career;
  onPress: () => void;
};

export default function CareerCard({ item, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text numberOfLines={2} style={styles.meta}>
        {item.description}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontWeight: '800', flex: 1, paddingRight: 10 },
  meta: { marginTop: 6, color: '#444' },
});