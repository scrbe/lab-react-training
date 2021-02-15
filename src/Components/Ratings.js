import { render } from '@testing-library/react';
import React from 'react';

class Ratings extends React.Component{
    render() {   
        const ratings = ['☆☆☆☆☆','★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★'];
        const rating = Math.round(this.props.children)
        const stars = ratings[rating]
        return <div>
            {stars}
        </div>

    }
}

export default Ratings;
