import React, { Component } from 'react';
import '../css/Testtitle.css';

class Testtitle extends Component{
    render(){
        return(
            <div className="testtitle_body">
                <div className="cols">
                    <label for="test_title">시험지 제목</label>
                    <input id="test_title" placeholder="제목 없는 시험지"></input>
                </div>
                <div className="cols">
                    <label for="test_description">시험지 설명</label>
                    <textarea 
                        id="test_description" 
                        placeholder="시험에 대한 설명을 입력하세요 "
                        rows="10" cols="80"></textarea>
                </div>
            </div>
        );
    }
}

export default Testtitle;