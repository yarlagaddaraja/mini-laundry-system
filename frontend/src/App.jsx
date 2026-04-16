import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/Dashboard'
import OrderList from './components/OrderList'
import OrderForm from './components/OrderForm'
export default function App() {
  return (
    <div>
      <Home />
    </div>
  )
}
