import React from 'react';
import AddShopForm from '../components/shop/AddShopForm';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import Container from '../components/ui/container/Container'
import Title from '../components/ui/pageTitle/Title';
import Slogan from '../components/ui/slogan/slogan';
import { useNavigate } from 'react-router-dom';

function AddShopPage() {

  const {ui} = useAuthCtx()
  const navigate = useNavigate();

  async function createShopFire(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj);
      console.log('Document written with ID: ', docRef.id)
      ui.showSuccess()
      navigate('/shops')
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <Container>
      <Title>Add Shop</Title>
      <Slogan/>

      <AddShopForm onNewShop = {createShopFire} />
    </Container>
  );
}

export default AddShopPage;
