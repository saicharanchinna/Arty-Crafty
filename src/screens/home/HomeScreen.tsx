import "./HomeScreen.scss";
import {ImageConfig} from "../../constants";
import HeaderComponent from "../../shared/components/layout/header/headerComponent";
import ButtonComponent from "../../shared/components/core/button/ButtonComponent";

export interface HomeScreenProps {

}

const HomeScreen = (props: HomeScreenProps) => {

    return <div className="screen home-screen">
        <HeaderComponent/>
        <div className={'moto-title-and-image-wrapper'}>
            <div className={'moto-title-wrapper'}>
                <div className={'moto-title'}>
                Make money off your creativity with Arty Crafty
                </div>
                <div className={'moto-sub-title'}>
                    Artisan makes it easy for students to monetize their art and make some pocket money.
                </div>
                <div className={'get-started-button'}>
                    <ButtonComponent
                        className={'width-50'}
                    >
                        Get Started
                    </ButtonComponent>
                </div>
            </div>
            <div className={'moto-image-wrapper'}>
                <img src={ImageConfig.MotoImage} className={'moto-image'}/>
            </div>
        </div>

    </div>
}

export default HomeScreen;