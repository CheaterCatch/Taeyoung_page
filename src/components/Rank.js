import React, { Component } from 'react';
import Empty from './Empty';
import Rank_before from './Rank_before';
import '../css/Rank.css';

class Rank extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="rank_body">
                <Empty></Empty>
                <Rank_before></Rank_before>
            </div>
        );
    }
}

export default Rank;