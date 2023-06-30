import React from 'react';
import AppLayout from '../../shared/components/app-layout/AppLayout';
import TopProducts from '../products/TopProducts';
import AllProducts from '../products/AllProducts';
import { ProductProvider } from '../products/ProductsContext';


const NewPage = () => {
  
  

  return (
    <AppLayout title='Products'>
      <ProductProvider>
      <TopProducts/>
      <AllProducts/>
      </ProductProvider>







    </AppLayout>
  );
};

export default NewPage;
