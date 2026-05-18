import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

const Home           = lazy(() => import('./pages/Home'))
const Squad          = lazy(() => import('./pages/Squad'))
const Matches        = lazy(() => import('./pages/Matches'))
const MatchDetail    = lazy(() => import('./pages/MatchDetail'))
const News           = lazy(() => import('./pages/News'))
const NewsDetail     = lazy(() => import('./pages/NewsDetail'))
const Shop           = lazy(() => import('./pages/Shop'))
const ProductDetail  = lazy(() => import('./pages/ProductDetail'))
const Gallery        = lazy(() => import('./pages/Gallery'))
const About          = lazy(() => import('./pages/About'))
const Contact        = lazy(() => import('./pages/Contact'))
const Login          = lazy(() => import('./pages/Login'))
const Register       = lazy(() => import('./pages/Register'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const Cart           = lazy(() => import('./pages/Cart'))
const Checkout       = lazy(() => import('./pages/Checkout'))
const NotFound       = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/"                    element={<Home />} />
              <Route path="/squad"               element={<Squad />} />
              <Route path="/matches"             element={<Matches />} />
              <Route path="/matches/:id"         element={<MatchDetail />} />
              <Route path="/news"                element={<News />} />
              <Route path="/news/:slug"          element={<NewsDetail />} />
              <Route path="/shop"                element={<Shop />} />
              <Route path="/shop/:slug"          element={<ProductDetail />} />
              <Route path="/gallery"             element={<Gallery />} />
              <Route path="/about"               element={<About />} />
              <Route path="/contact"             element={<Contact />} />
              <Route path="/login"               element={<Login />} />
              <Route path="/register"            element={<Register />} />
              <Route path="/cart"                element={<Cart />} />
              <Route path="/checkout"            element={<Checkout />} />
              <Route path="/admin"               element={<AdminDashboard />} />
              <Route path="*"                    element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
