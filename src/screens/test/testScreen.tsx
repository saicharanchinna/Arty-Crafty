import './testScreen.scss';
import React from 'react';
import CategoryTemplateComponent from "../../shared/components/category-template/CategoryTemplateComponent";

interface TestScreenProps {

}


const TestScreen = (props: TestScreenProps) => {

    return (
        <div>
            <CategoryTemplateComponent/>
        </div>
    )
};

export default TestScreen;
