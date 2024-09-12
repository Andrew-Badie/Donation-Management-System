import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import axios from 'axios';
const App = () => {
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    try{
      const response = await axios.post("http://10.0.0.50:5000/process-payment", {
        amount: amount,

      });
      if(response.data.success) {
        setPaymentStatus('Payment initiated successfully on terminal!')
      }
      else{
        setPaymentStatus('Payment failed. Please try again.')
      }
    }catch(error) {
      console.error(error);
      setPaymentStatus('Payment failed. Please try again.')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Payment APP</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Pay now" onPress={handlePayment} />
        {paymentStatus ? <Text>{paymentStatus}</Text>  : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
