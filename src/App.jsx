import './App.css'
import { Routes, Route } from "react-router-dom"
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Electronics from './pages/Electronics/Electronics'
import Smartphones from './pages/Electronics/Smartphones/Smartphones'
import Laptop from './pages/Electronics/Laptop/Laptop'
import BrandPage from './components/BrandPage/BrandePage'
import TV from './pages/Electronics/TV/TV'
import ComingSoon from './components/ComingSoonComponent/ComingSoon'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="electronics/smartphones" element={<Smartphones />} />
          <Route path="electronics/:category/:brand" element={<BrandPage />} />
          <Route path="electronics/laptop" element={<Laptop />} />
          <Route path="electronics/tv" element={<TV />} />
          <Route path="electronics/table" element={<ComingSoon />} />
          <Route path="electronics/headphone" element={<ComingSoon />} />
          <Route path="electronics/smartwatch" element={<ComingSoon />} />
          <Route path="household" element={<ComingSoon />} />
          <Route path="accessories" element={<ComingSoon />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
