import './testScreen.scss';
import React from 'react';
import CategoryTemplateComponent from "../../shared/components/category-template/CategoryTemplateComponent";
import ProfileTemplateComponent from "../../shared/components/profile-template/ProfileTemplateComponent";
import ProfilePageComponent from "../../shared/components/profile-page/ProfilePageComponent";

interface TestScreenProps {

}


const TestScreen = (props: TestScreenProps) => {

    return (
        <div className={'test'}>
            {/*<CategoryTemplateComponent/>*/}
            {/*<ProfileTemplateComponent/>*/}
            <ProfilePageComponent/>
        </div>
    )
};

export default TestScreen;
