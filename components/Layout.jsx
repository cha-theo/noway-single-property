import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Divider } from "@chakra-ui/react";
import Footer from './Footer';
import Navbar from './Navbar';
import VideoSection from './VideoSection';
import QuoteTest from './QuoteTest';
import SocialSection from './SocialSection';
import SearchBar from './SearchBar';



export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nowayhome</title>
      </Head>
      <Box width='-moz-initial'>
      <Box maxWidth='1400px' m='auto' >
        <header>
          <Navbar />
          
        </header>
        </Box>
        <SearchBar />
        <Box maxWidth='1400px' m='auto'>
        <main>{children}</main>
        </Box>
        <Divider orientation="horizontal" borderColor="#ff9999" borderWidth={10} width='-moz-initial'/>
        <VideoSection />
        <Divider orientation="horizontal" borderColor="#ff9999" borderWidth={10} width='-moz-initial'/>
        <QuoteTest />
        <SocialSection />
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}