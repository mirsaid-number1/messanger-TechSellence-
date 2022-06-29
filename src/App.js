import React from 'react'
import './styles/main.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Message from './components/Message'
import TextWrite from './components/TextWrite'
import DBProvider from './components/DB_message';
function App() {
  return (
    <DBProvider children={'messages'}>
    <main className="App">
     <section className='sidebar'>
      <Sidebar />
      </section>
      <section className='message_section'>
        <Navbar />
        <Message />
        <TextWrite />
      </section>
    </main>
    </DBProvider>
  );
}

export default App;
