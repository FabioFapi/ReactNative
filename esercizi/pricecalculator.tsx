import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PriceCalculator = () => {
  const basePrice = 10;
  const discount = 2;
  const shippingCost = 3;

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = useCallback(() => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  }, []);

  const totalPrice = useMemo(() => {
    const subtotal = basePrice * quantity - discount;
    return subtotal + shippingCost;
  }, [quantity]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcolatore di Prezzo</Text>
      <View style={styles.quantityContainer}>
        <Text>Quantità:</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.priceItem}>Prezzo Base: €{basePrice}</Text>
      <Text style={styles.priceItem}>Sconto: €{discount}</Text>
      <Text style={styles.priceItem}>Costi di Spedizione: €{shippingCost}</Text>
      <Text style={styles.totalPrice}>Prezzo Totale: €{totalPrice.toFixed(2)}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <PriceCalculator />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    width: 300,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  priceItem: {
    marginBottom: 5,
  },
  totalPrice: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default App;