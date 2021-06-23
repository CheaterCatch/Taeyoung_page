import React, { Component } from 'react';
import icon1 from '../img/icon1.png'; 
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import '../css/Sidemenu.css';

class Sidemenu extends Component{
    render(){
        return(
            <div className="side">
                <div className="side_head">문제 추가하기</div>
                <div className="side_body">
                    <ul>
                        <li><a href="/choice"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('choice');
                                }.bind(this)}>
                            <img src={icon1} alt="객관식"/>객관식</a></li>
                        <li><a href="/check"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('check');
                                }.bind(this)}>
                        <img src={icon2} alt="체크박스"/>체크박스</a></li>
                        <li><a href="/rank" 
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('rank');
                                }.bind(this)}>
                                <img src={icon4} alt="순위"/>순위</a></li>
                        <li><a href="/short_answer"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('short_answer');
                                }.bind(this)}>
                            <img src={icon3} alt="단수 단답형"/>단수 단답형</a></li>
                        <li><a href="/multiple_answer"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('multiple_answer');
                                }.bind(this)}>
                            <img src={icon5} alt="복수 단답형"/>복수 단답형</a></li>
                        <li><a href="/descriptive"
                                onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('descriptive');
                                }.bind(this)}>
                            <img src={icon6} alt="서술형" />서술형</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidemenu;