import React from 'react';

import Header from './components/Header/Header';
import Body   from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';


export default function App() {

    const linksArray = ['Sobre', 'Contato', 'Info', 'Login'];

    return (
        <div>
            <Header title="ReactJS"
                    links = {linksArray}
            />
            <Body />
            <Footer />
            <Counter/>
        </div>
    );


}