import React from 'react';
import './TakeSurvey.css';
import fitness from './fitness.jpg';


class TakeSurvey extends React.Component {
    render(){
            return <div className="banner_column">
                            <div className="banner_column_1"><img src={fitness}/></div>
                            <div className="banner_column_2"><div className="survey_enter"><h2 className="title">Let's find out what moves you</h2>
                                    <p>Answer a few questions to help us personalize your class recommendations</p>
                                    <div className="buttons"><button className="take_survey">Take Survey</button><button className="skip_survey">Skip for now</button></div>
                                </div>
                        </div>
                  </div>
    }
}

export default TakeSurvey;