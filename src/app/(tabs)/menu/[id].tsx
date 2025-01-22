import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem'; 
import { useState } from 'react';
import Button from '@/src/components/Button';
import { configureLayoutAnimationBatch } from 'react-native-reanimated/lib/typescript/core';

const sizes = ['S','M','L','XL'];

const ProductDetailsScreen = () => {

    const {id} = useLocalSearchParams();

    const [selectedSize, setselectedSize] = useState('M');

    const product = products.find((p) => p.id.toString() == id);

    const addToCart = () => {
        console.warn('Adding to Cart, size: ', selectedSize);
    }

    if (!product) {
        return <Text>Product Not Found!</Text>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product?.name}} />
            <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image} />

            <Text style={{fontSize: 18, fontWeight: 700}}>Select Size</Text>
                <View style={styles.sizes}>
                    {
                        sizes.map((size) => (
                            <Pressable onPress={() => {setselectedSize(size);}} style={[styles.size, {backgroundColor: selectedSize == size ? 'gainsboro' : 'white'}, ]} key={size}>
                                <Text style={[styles.sizeText, {color: selectedSize == size ? 'black' : 'gray'},]}>{size}</Text>
                            </Pressable>    
                        ))
                    }
                </View>
            <Text style={styles.price}>${product.price}</Text>
            <Button onPress={addToCart} text="Add to Cart"/>
        </View>
    );
};

const styles = StyleSheet.create({
 container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
 },

 image:{
    width: '100%',
    aspectRatio: 1,
 },

 price:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(47,149,220,1.00)',
    marginTop: 'auto',
 },

 sizes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
 },

 size:{
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center',
 },

 sizeText:{
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
 }

});

export default ProductDetailsScreen;