import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { Activity } from '../data/activities';

type Props = {
  item: Activity;
  onPress: () => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
};

export default function ActivityCard({ item, onPress, isSaved, onToggleSave }: Props) {
 return (
   <Pressable style={styles.card} onPress={onPress}>
     <View style={styles.imgStub} />
     <View style={styles.row}>
       <Text style={styles.title}>{item.title}</Text>
       {onToggleSave ? (
         <Pressable onPress={onToggleSave} hitSlop={10}>
           <Text style={styles.heart}>{isSaved ? "♥" : "♡"}</Text>
         </Pressable>
       ) : null}
     </View>
     <Text style={styles.meta}>{item.category} • {item.location} • {item.price}</Text>
   </Pressable>
 );
}

const styles = StyleSheet.create({
 card: {
   borderWidth: 1,
   borderColor: "#111",
   borderRadius: 10,
   padding: 12,
   marginBottom: 12,
 },
 imgStub: {
   height: 120,
   borderRadius: 8,
   borderWidth: 1,
   borderColor: "#111",
   backgroundColor: "#E0E0E0",
   marginBottom: 10,
 },
 row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
 title: { fontWeight: "800", flex: 1, paddingRight: 10 },
 heart: { fontSize: 18 },
 meta: { marginTop: 6, color: "#444" },
});
