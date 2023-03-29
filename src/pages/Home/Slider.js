import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';

class Slider extends Component {
    render() {

        const data = [
            {
                des: "1",
                imgSrc: 'https://president.snhu.edu/wp-content/uploads/2020/01/SNHU-Staff-2-scaled.jpg',
            },
            {
                des: "2",
                imgSrc: 'https://president.snhu.edu/wp-content/uploads/2020/01/SNHU-Staff-2-scaled.jpg',
            },
            {
                des: "3",
                imgSrc: 'https://president.snhu.edu/wp-content/uploads/2020/01/SNHU-Staff-2-scaled.jpg',
            },
            {
                des: "4",
                imgSrc: 'https://president.snhu.edu/wp-content/uploads/2020/01/SNHU-Staff-2-scaled.jpg',
            },

        ];

        return <CarouselSlider slideItems = {data} />;
    }
}

export default Slider