import React from 'react';
import MainContainerHeader from './MainContainerHeader';
import { Switch } from 'react-router-dom';

export default function MainContainer(props) {
    return (
        <div>
            <MainContainerHeader />
            <div className="container">
                <Switch>
                    
                </Switch>
            </div>
        </div>
    );
}
