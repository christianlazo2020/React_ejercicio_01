import React from 'react';
import Profile from './Profile';
import Learn from './Learn';
import Expectations from './Expectations';
import Interests from './Interests';


export default function Personal() {
    return(
        <div className="container">
            <div className="cont_01">
                <Profile />
                <Interests />
                <Learn />
            </div>
            <div className="cont_02">
                <Expectations />
            </div>
        </div>
    )
}