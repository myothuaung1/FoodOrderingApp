import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem'; 
import { useState } from 'react';
import Button from '@/src/components/Button';
import { useCart } from '@/src/providers/CartProvider';
import { configureLayoutAnimationBatch } from 'react-native-reanimated/lib/typescript/core';
import { PizzaSize } from '@/src/types';

const sizes: PizzaSize[] = ['S','M','L','XL'];

const ProductDetailsScreen = () => {

    const {id} = useLocalSearchParams();

    const {addItem} = useCart();

    const router = useRouter();

    const [selectedSize, setselectedSize] = useState<PizzaSize>('M');

    const product = products.find((p) => p.id.toString() == id);

    const addToCart = () => {
        if(!product){
            return;
        }
        //console.warn('Adding to Cart, size: ', selectedSize);
        addItem(product, selectedSize);
        router.push('/cart');
    }

    if (!product) {
        return <Text>Product Not Found!</Text>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product?.name}} />
            <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image} />

            
                
            <Text style={styles.price}>${product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
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

 title: {
    fontSize: 20,
    fontWeight: 'bold',
 },

 price:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(47,149,220,1.00)',
}

});

export default ProductDetailsScreen;