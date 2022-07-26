import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E Computer Science and Engineering" where="SNS College of Engineering" from="November 2020" to="Present"/>
            <Widecard title="SSLC | HSC" where="CMS Matriculation Higher Secondary School" from="2006" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    