import "./CategoryTemplateComponent.scss";
import {Button, Card} from "@mui/material";
import {ImageConfig} from "../../../constants";
import ButtonComponent from "../core/button/ButtonComponent";

interface CategoryTemplateComponentProps {
    name?: string;
    description?: string;
    image?: string;
}

const CategoryTemplateComponent = (props: CategoryTemplateComponentProps) => {

    return (
            <Card className={'category-template-component'}>
                <div className={'category-display-image'}>
                    <img src={ImageConfig.BasicArt} alt={"basic art"}/>
                </div>
                <div className={'category-content-wrapper'}>
                    <div className={'category-name'}>Basic Art</div>
                    <div className={'category-description'}>Basic Art is very intresting knjc sdjcnsjdnc
                        sdjbfjsdbvjhds vdsjbfdjnvfd
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

export default CategoryTemplateComponent;