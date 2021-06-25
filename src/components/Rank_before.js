import React, { Component } from 'react';
import '../css/rank_before.css';

class Rank_before extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="rank_before_body">
                <div>
                    <label for="question">1. </label>
                    <input id="question" placeholder="첫번 째 질문을 입력하세요"></input>
                </div>
                <div>
                    <input id="input_rank"></input>
                    <label for="choose">①</label>
                    <input id="choose" placeholder="첫번째 질문"></input>
                </div>
            </div>
        );
    }
}

export default Rank_before;