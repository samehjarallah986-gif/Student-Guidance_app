import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
type Props ={
  label?: string,
  value: string,
  onChangeText: (t:string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default function CustomInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: Props) {
  return(
    <View style={{ width: '100%' }}>
      {label ? <Text style={styles.label}>{label}</Text> : null }
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#777'
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: '700' , marginBottom: 6},
  input: {
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom:12,
  },
});
