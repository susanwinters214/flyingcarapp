import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import CarBrowser from '../CarBrowser';


class Home extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
            <SiteCarousel />
            <CarBrowser />
            </div>
            );
    }
}

export default Home;