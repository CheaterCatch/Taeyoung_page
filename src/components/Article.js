import React, { Component } from 'react';
import Sidemenu from './Sidemenu';
import Testtitle from './Testtitle';
import Rank from './Rank';
import '../css/article.css';

class Article extends Component {
    constructor(props){
        super(props);
        this.max_contens_id = 1;
        this.state = {
          mode : 'choice',
          contents : [
              {id:1}
          ],
        }
    }

    render() {
        var _create = [];
        for(var i=0; i<this.max_contens_id; i++){
            if(this.state.mode === 'rank'){
                _create.push(<Rank key={i}></Rank>);
            }
        }
        return (
            <div className="contents">
                <div className="fix">
                        <Sidemenu id="sidemenu"
                            onChangeMode={function(_mode){
                            this.setState({
                                mode:_mode
                            })
                            }.bind(this)}></Sidemenu>
                        <Testtitle></Testtitle>
                </div>
                {_create}
            </div>
        );
    }
}

export default Article;