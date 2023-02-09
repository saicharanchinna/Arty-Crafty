import './testResultFollowCard.scss'
import React from 'react';
import {Col, Row } from 'react-grid-system';

interface TestResultFollowCardProps {
    icon: any;
    title: string;
    description: string;
}

const TestResultFollowCard = (props: TestResultFollowCardProps) => {
        const {icon, title, description} = props
        return (
            <div className="test-result-follow-card-wrapper">
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <div className="test-result-follow-card-icon">
                            <img src={icon} alt={icon}/>
                        </div>
                    </Col>

                    <Col xs={10} sm={10} md={10} lg={10}>
                        <div className="test-result-follow-card-title">{title}</div>
                        <div className="test-result-follow-card-description" dangerouslySetInnerHTML={{ __html: description }} />
                    </Col>
                </Row>
            </div>
        )
    }

;

export default TestResultFollowCard;