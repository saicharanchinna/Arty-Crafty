import './testScreen.scss';
import React from 'react';
import CategoryTemplateComponent from "../../shared/components/category-template/CategoryTemplateComponent";
import ProfileTemplateComponent from "../../shared/components/profile-template/ProfileTemplateComponent";

interface TestScreenProps {

}


const TestScreen = (props: TestScreenProps) => {

    return (
        <div className={'test'}>
            <CategoryTemplateComponent/>
            <ProfileTemplateComponent/>
        </div>
    )
};

export default TestScreen;
