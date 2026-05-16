import React,{ Suspense, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
// import Users from './Users'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import NotFound from './NotFound';
import UserDetails from './UserDetails';
import Parent from './Parent';
import One from './One';
import Two from './Two';
import Blog from './Blog';

const UserLazy=React.lazy(()=>import ('./Users'))

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Suspense fallback={<p>Loading</p>}><UserLazy/></Suspense>}/>
      <Route path="/users/:id" element={<UserDetails/>}/>
      <Route path="/one" element={<One/>}/>
      <Route path="/two" element={<Two/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/parent" element={<Parent/>}/>


      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
