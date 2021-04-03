import React, {Component} from 'react';
import {Route} from "react-router-dom";
import ProjectGrid from "../ProjectGrid";
import LessonView from "../LessonView";
import About from "../About";
import Contact from "../Contact";

class CleverangeRoute extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ProjectGrid}/>
                <Route path="/lessonview" component={LessonView}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default CleverangeRoute;