import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Index from './components/Index.jsx'
import NotFound from './components/NotFound.jsx'
import React, { Component, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

class ReactDangApp extends Component{

    render() {
        return (
            <React.StrictMode>
                <Router>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route exact path="/" element={<Index />}/>
                            <Route exact path="/contacts" element={<Contacts />}/>
                            <Route path="/*" element={<NotFound />}/>
                        </Routes>
                    </Suspense>
                    <Footer />
                </Router>
            </React.StrictMode>
        )
    }
}

export default ReactDangApp
