import React, { useEffect, useState } from 'react';
import SingleShop from '../components/shop/SingleShop';
import Grid from '../components/ui/grid/Grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Container from '../components/ui/container/Container';
import Title from '../components/ui/pageTitle/Title';
import Slogan from '../components/ui/slogan/slogan';
import ShopsContainer from '../components/ui/shopsContainer/ShopsConainer';


function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);
 
  useEffect(() => {
    async function getShops() {
      try {
        const querySnapshot = await getDocs(collection(db, 'shops'));
      const tempShops = []
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tempShops.push({ 
          uid: doc.id,
          ...doc.data(),
        })
      });
      setShopsArr(tempShops);
      } catch (error) {
        console.warn('getPosts', error)
      }
    }
    getShops();
  }, []);

  return (
    <Container>
      <Title>Shops</Title>
      <Slogan/>
      <ShopsContainer>
      <Grid>
        {shopsArr.map((sObj) => (
          <SingleShop key={sObj.uid} item={sObj} />
        ))}
      </Grid>
      </ShopsContainer>
    </Container>
  );
}

export default ShopsPage;
