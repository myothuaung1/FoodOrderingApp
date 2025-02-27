import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '../types';
import { Link, useSegments } from 'expo-router';


//const product = products [1];
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}:ProductListItemProps) => {
  const segments = useSegments();
  console.log(segments);
  //console.log(props);
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
            <Image source={{uri:product.image || defaultPizzaImage}} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </Pressable>
    </Link>    
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
    /*margin: 5,  space around the images */
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontSize: 18,
    fontWeight: '600',
  },
});
