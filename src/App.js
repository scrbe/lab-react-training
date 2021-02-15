import React from 'react';
import IdCard from './Components/IdCard';
import './App.css';
import { data } from './data/berlin';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Ratings from './Components/Ratings';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import Dice from './Components/Dice';
import Carousel from './Components/Carousel';
import NumbersTable from './Components/NumbersTable'

function App() {
  return (
    <div className="App">
      <h2>Iteration 1</h2>
      {/* <IdCard data={data}/> */}
      <h2>Iteration 2</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h2>Iteration 3</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Iteration 4</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>Iteration 5</h2>
      <section className="credit">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </section>
      <h2>Iteration 6</h2>
      <Ratings> 3.6 </Ratings>
      <h2>Iteration 7</h2>
      <DriverCard
        car={{
          model: 'bla',
          licensePlate: 'bzf519',
        }}
      ></DriverCard>
      <h2>Iteration 8</h2>
      <LikeButton />
      <LikeButton />
      <h2>Iteration 9</h2>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <h2>Iteration 10</h2>
      <Dice />
      <h2>Iteration 11</h2>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h2>Iteration 12</h2>
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
