import './recommendedTestCardComponent.scss'
import React from 'react';
import ButtonComponent from '../core/button/ButtonComponent';
import {Col, Row, Visible} from "react-grid-system";

interface RecommendedTestCardComponentProps {
    tag?: string;
    image: any
    title: string
    description: string;
    ctaLink: string;
}

const RecommendedTestCardComponent = (props: RecommendedTestCardComponentProps) => {

        const {tag, image, title, description, ctaLink} = props;

        return (
            <div className="recommended-test-card">
                <Visible xs sm md>
                    {
                        (tag && tag?.length > 0) &&
                        <div className="highly-recommended-button-tag">
                            {tag}
                        </div>
                    }
                    <Row>
                        <Col xs={3} sm={3} >
                            <div className="recommended-test-card-image">
                                <img src={image} alt='recommended-test-poster'/>
                            </div>
                        </Col>
                        <Col xs={5} sm={5} className="content-wrapper">
                            <div className="recommended-test-card-title">{title}</div>
                            <div className="recommended-test-card-description">{description}</div>
                        </Col>
                        <Col xs={4} sm={4}>
                            <div className="buy-now-button">
                                <a href={ctaLink} target="_blank" rel="noreferrer">
                                    <ButtonComponent
                                        className={tag?.includes("Highly") ? "zoomInZoomOut" : ""}
                                        fullWidth={false}
                                        size={"sm"}
                                        type={"button"}>
                                        Buy Now
                                    </ButtonComponent>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Visible>

                <Visible lg xl xxl xxxl>
                    {
                        (tag && tag?.length > 0) &&
                        <div className="highly-recommended-button-tag">
                            {tag}
                        </div>
                    }
                    <div className="recommended-test-card-image">
                        <img src={image} alt='recommended-test-poster'/>
                    </div>
                    <div className="recommended-test-card-title">{title}</div>
                    <div className="recommended-test-card-description">{description}</div>
                    <div className="buy-now-button">
                        <a href={ctaLink} target="_blank" rel="noreferrer">
                            <ButtonComponent
                                className={tag?.includes("Highly") ? "zoomInZoomOut" : ""}
                                fullWidth={false}
                                size={"medium"}
                                type={"button"}>
                                Buy Now
                            </ButtonComponent>
                        </a>
                    </div>
                </Visible>
            </div>
        )
    }

;

export default RecommendedTestCardComponent;