import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSwiper from '../components/main/MainSwiper';

export default function Home() {
  return (
    <>
      <Header></Header>
      <MainSwiper></MainSwiper>
      <Footer></Footer>
    </>
  );
}
