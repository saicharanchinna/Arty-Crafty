import "./ProfilePageComponent.scss";
import {ImageConfig} from "../../constants";
import ButtonComponent from "../../shared/components/core/button/ButtonComponent";
import {useNavigate} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArtistArtsDetailsComponent from "../artist-arts-details/ArtistArtsDetailsComponent";

interface ProfilePageComponentProps {

}

const instaId = 'chinna.saicharan';
const mobileNumber = '9640337631';

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
                            handleClick={() => {
                                window.open(`https://www.instagram.com/${instaId}/`)
                            }}
                            startIcon={<InstagramIcon color={"primary"}/>}
                            variant={'outlined'}
                        >
                            Instagram
                        </ButtonComponent>
                        <ButtonComponent
                            handleClick={() => {
                                window.open(`https://wa.me/${mobileNumber}`)
                            }}
                            startIcon={<WhatsAppIcon color={"secondary"}/>}
                            color={"success"}
                            variant={'contained'}
                        >
                            WhatsApp
                        </ButtonComponent>
                    </div>
                </div>
            </div>
            <div className={'art-gallery-wrapper'}>
                <hr/>
                <ArtistArtsDetailsComponent/>
            </div>
        </div>
    );

};

export default ProfilePageComponent;