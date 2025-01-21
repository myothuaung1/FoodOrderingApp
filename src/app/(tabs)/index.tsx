import { FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

//const product = products [1];

export default function MenuScreen() {
  return (

      <FlatList data={products} renderItem={({item}) => <ProductListItem product = {item} />} 
      numColumns={2} contentContainerStyle={{gap:10, padding}} columnWrapperStyle={{gap:10}}
      />
  );
}
