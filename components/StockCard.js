import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function StockCard({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.lightGray,
    },
    symbol: {
      color: colors.blue,
      fontSize: 18,
      fontWeight: 'bold',
    },
    name: {
      color: colors.darkGray,
      fontSize: 14,
    },
    price: {
      color: colors.black,
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
