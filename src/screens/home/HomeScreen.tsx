import "./HomeScreen.scss";
import {Col, Container, Row, Visible} from "react-grid-system";
import {ImageConfig} from "../../constants";
import ButtonComponent from "../../shared/components/core/button/ButtonComponent";
import {Link} from "react-router-dom";
import {CommonService} from "../../shared/services";
import HeaderComponent from "../../shared/components/layout/header/headerComponent";

export interface HomeScreenProps {

}

const HomeScreen = (props: HomeScreenProps) => {

    return <div className="screen home-screen">
        <HeaderComponent/>
        {/*<Row>*/}
        {/*    <Col sm={12} md={12} lg={5}>*/}
        {/*        <Container>*/}
        {/*            <Row>*/}
        {/*                <Col lg={2}></Col>*/}
        {/*                <Col lg={8}>*/}
        {/*                    <Visible xs sm md>*/}
        {/*                        <div className="branding-logo">*/}
        {/*                            <img src={ImageConfig.Logo} alt="sdilogo"/>*/}
        {/*                        </div>*/}
        {/*                    </Visible>*/}
        {/*                    <div className="home-page-content-wrapper">*/}
        {/*                        <div>*/}
        {/*                            <div className="home-page-content-title">Free COVID-19</div>*/}
        {/*                            <div className="home-page-content-main-title">Screening Service</div>*/}
        {/*                            <div className="home-page-content-description">AI-based service recommending RT-PCR*/}
        {/*                                or*/}
        {/*                                Antigen with a fast and reliable solution.*/}
        {/*                            </div>*/}
        {/*                            <Visible xs sm md>*/}
        {/*                                <div className="home-page-poster-wrapper">*/}
        {/*                                    <Row>*/}
        {/*                                        <div className="home-page-poster-image">*/}
        {/*                                            <img src={ImageConfig.HomePoster} alt={'HomePoster'}/>*/}
        {/*                                        </div>*/}
        {/*                                    </Row>*/}
        {/*                                </div>*/}
        {/*                            </Visible>*/}
        {/*                        </div>*/}
        {/*                        <Link to={CommonService._routeConfig.HowItWorksRoute()}>*/}
        {/*                            <ButtonComponent*/}
        {/*                                className={'get-free-screening-service-btn'}*/}
        {/*                                fullWidth={true}*/}
        {/*                                size={"lg"}*/}
        {/*                                type={"button"}>*/}
        {/*                                Get Free Screening Service*/}
        {/*                            </ButtonComponent>*/}
        {/*                        </Link>*/}
        {/*                    </div>*/}
        {/*                </Col>*/}
        {/*                <Col lg={8}></Col>*/}
        {/*            </Row>*/}
        {/*        </Container>*/}
        {/*    </Col>*/}
        {/*    <Col sm={12} md={12} lg={7}>*/}
        {/*        <Visible lg xl xxl xxxl>*/}
        {/*            <div className="branding-logo">*/}
        {/*                <img src={ImageConfig.sdiLogo} alt="sdilogo"/>*/}
        {/*            </div>*/}
        {/*            <div className="home-page-poster-wrapper">*/}
        {/*                <Row>*/}
        {/*                    <div className="home-page-poster-image">*/}
        {/*                        <img src={ImageConfig.HomePoster} alt={'HomePoster'}/>*/}
        {/*                    </div>*/}
        {/*                </Row>*/}
        {/*            </div>*/}
        {/*        </Visible>*/}
        {/*    </Col>*/}
        {/*</Row>*/}
    </div>
}

export default HomeScreen;