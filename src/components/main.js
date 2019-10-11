import React from 'react';
import MainAppBar from './appbar.js';
import MainContent from './content.js';
import Footer from './footer.js';

export default function Main(props){
    let items = []   
    items['title']="Vlog"
    items['price']="from 500"
    items['description']="Typically 400-500 words, an e-book is perfect for your target audience ranging from perspective customers to users" 

    return(
        <div>
        <MainAppBar />
        <MainContent items={items}/>
        <Footer className="footer"/>
        </div>
    );
}
