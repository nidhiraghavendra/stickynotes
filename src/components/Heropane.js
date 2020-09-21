import React from 'react';
import './Heropane.css';
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';

export default function Heropane() {
    return (
        <div className="heropane">
            <Leftpane/>
            <Rightpane/>
        </div>
    )
}
