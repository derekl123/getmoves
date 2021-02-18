import React from 'react';
import './Questions.css'
import girl_sweat from './girl_sweat.jpg'

class Questions extends React.Component {
    render(){
        return <div className="banner_column">
        <div className="banner_column_1"><img src={girl_sweat}/></div>
        <div className="banner_column_2"><div className="survey_enter"><h2 className="title">What are you interested in?</h2>
                <p className="description">Select up to <strong>3 areas</strong></p>
                <div className="next"><button className="next_question">next question</button></div>
            </div>
    </div>
</div>
    }
    
    }

    export default Questions;