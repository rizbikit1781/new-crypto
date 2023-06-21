import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Ranking, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'


const { Title } = Typography;

const App = () => {

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/ranking' element={<Ranking />}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />}/>
              <Route path='/crypto/:uuid' element={<CryptoDetails />}/>
              <Route path='/news' element={<News />}/>
            </Routes>
          </div>
        </Layout>
      
        <div className='footer'>
          <Title level={5} style={{color: 'white', textAlign:'center'}}>
              CryptoUniverse <br />
              All rights reserved.
          </Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/ranking'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App

