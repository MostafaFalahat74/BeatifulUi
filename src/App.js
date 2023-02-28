import { useState, useEffect } from 'react';
import {Header ,Download ,Faq , Feature , Subscribe , Footer ,Navbar} from './Commponents'


function App() {

  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
      <Feature /> 
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
