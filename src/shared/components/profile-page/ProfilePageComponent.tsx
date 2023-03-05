import "./ProfilePageComponent.scss";
import {ImageConfig} from "../../../constants";
import ButtonComponent from "../core/button/ButtonComponent";
import {CommonService} from "../../services";
import {useNavigate} from "react-router-dom";

interface ProfilePageComponentProps {

}

const ProfilePageComponent = (props: ProfilePageComponentProps) => {
    const navigate = useNavigate();
    return (
        <div className={'ProfilePageComponent'}>
            <div className={'profile-image-details-wrapper'}>
                <div className={'profile-page-image'}>
                    <img src={ImageConfig.BasicArt} alt={"basic art"}/>
                </div>
                <div className={'profile-information-and-action'}>
                    <div className={'profile-name'}>Artist Name</div>
                    <div className={'profile-description'}>Also good at craft
                    </div>
                    <div className={'category-action-wrapper'}>
                        <ButtonComponent
                            onClick={()=>{navigate('https://www.instagram.com/chinna.saicharan/')}}
                        >Open
                        </ButtonComponent>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProfilePageComponent;