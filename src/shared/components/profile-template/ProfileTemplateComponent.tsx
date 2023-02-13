import "./ProfileTemplateComponent.scss";
import CardComponent from "../card/cardComponent";
import {Card} from "@mui/material";
import {ImageConfig} from "../../../constants";
import ButtonComponent from "../core/button/ButtonComponent";

interface ProfileTemplateComponentProps {

}

const ProfileTemplateComponent = (props: ProfileTemplateComponentProps) => {

    return (
        <Card className={'profile-template-component'}>
            <div className={'profile-image'}>
                <img src={ImageConfig.BasicArt} alt={"basic art"}/>
            </div>
            <div className={'profile-information-and-action'}>
                <div className={'profile-name'}>Artist Name</div>
                <div className={'profile-description'}>Also good at craft
                </div>
                <div className={'category-action-wrapper'}>
                    <ButtonComponent
                    >Open
                    </ButtonComponent>
                </div>
            </div>
        </Card>
    );

};

export default ProfileTemplateComponent;